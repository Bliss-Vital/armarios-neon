"""Gera a planilha do estoque que o site dos armários lê (para subir no Google Planilhas).

Uso: python gerar_planilha_armarios.py saida.xlsx URL_DO_SITE
"""
import sys
from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils.indexed_list import IndexedList
from openpyxl.worksheet.datavalidation import DataValidation

saida, site = sys.argv[1], sys.argv[2]

VERDE, VERDE_CLARO, CINZA, BORDA = "70AD47", "E2EFD9", "EFEFEF", "BFBFBF"
F = "Arial"
fonte = Font(name=F, size=10)
cab_fonte = Font(name=F, size=10, bold=True, color="FFFFFF")
cab_fill = PatternFill("solid", fgColor=VERDE)
calc_fill = PatternFill("solid", fgColor=CINZA)
linha = Side(style="thin", color=BORDA)
borda = Border(left=linha, right=linha, top=linha, bottom=linha)
LINHAS = 1000  # linhas preparadas com listas suspensas

ARMARIOS = [f"Armário {n}" for n in range(1, 6)]
CLASSES = ["Mecânica", "Eletrônica", "Projeto antigo"]
CATEGORIAS = ["ESC", "Motores", "Baterias", "Carregadores", "Conectores", "Fios e cabos",
              "Componentes (capacitores, resistores...)", "Placas e controladores", "Rádio e receptor",
              "Sensores", "Parafusos, porcas e arruelas", "Rolamentos e buchas", "Eixos e acoplamentos",
              "Rodas", "Chapas e perfis", "Filamento", "Peças impressas", "Ferramentas", "Consumíveis", "Outros"]
ESTADOS = ["Novo", "Usado (funcionando)", "Não testado", "Com defeito"]
UNIDADES = ["un", "par", "m", "kit", "rolo", "pacote", "caixa"]
TIPOS = ["Prateleira", "Gaveta"]


def cabecalho(ws, nomes, larguras):
    for i, (nome, larg) in enumerate(zip(nomes, larguras), start=1):
        c = ws.cell(row=1, column=i, value=nome)
        c.font, c.fill, c.border = cab_fonte, cab_fill, borda
        c.alignment = Alignment(vertical="center", wrap_text=True)
        ws.column_dimensions[c.column_letter].width = larg
    ws.row_dimensions[1].height = 30
    ws.freeze_panes = "A2"


def lista(ws, col, faixa, formula):
    dv = DataValidation(type="list", formula1=formula, allow_blank=True, showErrorMessage=True,
                        errorTitle="Valor fora da lista", error="Escolha uma opção da lista. As opções ficam na aba Listas.")
    dv.add(f"{col}2:{col}{faixa}")
    ws.add_data_validation(dv)


wb = Workbook()
# Arial 10 como fonte padrão do arquivo, sem precisar formatar célula por célula
wb._fonts = IndexedList([Font(name=F, size=10)])

# ---- Como usar ----
ws = wb.active
ws.title = "Como usar"
ws.column_dimensions["A"].width = 3
ws.column_dimensions["B"].width = 110
textos = [
    ("Estoque do laboratório NEON", Font(name=F, size=16, bold=True)),
    ("Esta planilha alimenta o modelo 3D dos armários: " + site, Font(name=F, size=10, color="4F8F2C", underline="single")),
    ("", fonte),
    ("Como cadastrar um item", Font(name=F, size=12, bold=True)),
    ("1. Na aba Estoque, escreva uma linha por item. As colunas Armário e Local no armário dizem onde ele está.", fonte),
    ("2. Local no armário é o código da gaveta ou prateleira: G1 é a gaveta 1, P2 é a prateleira 2 e P2B é a divisão B da prateleira 2.", fonte),
    ("    As gavetas e as prateleiras são contadas de cima para baixo, cada tipo separado. Os códigos de cada armário estão na aba Gavetas e prateleiras.", fonte),
    ("3. Em Qtd, escreva só o número (10, não \"10 un\"). A unidade vai na coluna ao lado.", fonte),
    ("4. O site lê a planilha sozinho a cada minuto. Para ver na hora, clique em Atualizar no site.", fonte),
    ("", fonte),
    ("Exemplo de linha na aba Estoque", Font(name=F, size=12, bold=True)),
    ("Armário 2  |  G1  |  Eletrônica  |  Conectores  |  XT60 fêmea  |  Amass, original  |  10  |  un  |  Novo  |  (vazio)  |  24/10/2026  |  (vazio)", Font(name=F, size=10)),
    ("", fonte),
    ("Como mudar um armário no modelo", Font(name=F, size=12, bold=True)),
    ("• Aba Armários: largura, altura e fundo em metros, e a posição no laboratório (X e Z em metros, a partir de um canto) com o giro em graus (0, 90, 180 ou 270).", fonte),
    ("• Aba Gavetas e prateleiras: uma linha por nível, de cima para baixo. Divisões separa o nível em colunas (2 divisões viram P1A e P1B).", fonte),
    ("• As medidas e os níveis que já estão lá são um ponto de partida. Troque pelos do laboratório.", fonte),
    ("• Para cadastrar um armário novo, acrescente uma linha na aba Armários e o nome dele na aba Listas.", fonte),
    ("", fonte),
    ("Células", Font(name=F, size=12, bold=True)),
    ("Células brancas: preenchidas por vocês. Células cinza (coluna Código da aba Gavetas e prateleiras): calculadas pela planilha, não escreva nelas.", fonte),
    ("A coluna Código mostra o código de cada nível. Com 2 ou mais divisões, acrescente a letra: P2 com 2 divisões vira P2A e P2B.", fonte),
    ("Não mude os nomes das abas nem os títulos das colunas: o site procura por eles.", fonte),
]
for i, (t, f) in enumerate(textos, start=1):
    c = ws.cell(row=i, column=2, value=t)
    c.font = f
    c.alignment = Alignment(wrap_text=True, vertical="top")
ws["B2"].hyperlink = site

# ---- Estoque ----
ws = wb.create_sheet("Estoque")
cols = ["Armário", "Local no armário", "Classificação", "Categoria", "Item", "Especificação / modelo",
        "Qtd", "Unid.", "Estado", "Projeto de origem", "Conferido em", "Observações"]
cabecalho(ws, cols, [13, 12, 15, 26, 28, 28, 7, 8, 18, 18, 13, 30])
# formato de texto na coluna inteira, para G1 e P2B nunca virarem número ou data
ws.column_dimensions["B"].number_format = "@"
lista(ws, "A", LINHAS, "=Listas!$A$2:$A$30")
lista(ws, "C", LINHAS, "=Listas!$B$2:$B$30")
lista(ws, "D", LINHAS, "=Listas!$C$2:$C$40")
lista(ws, "H", LINHAS, "=Listas!$E$2:$E$30")
lista(ws, "I", LINHAS, "=Listas!$D$2:$D$30")
ws.auto_filter.ref = f"A1:L{LINHAS}"

# ---- Armários ----
ws = wb.create_sheet("Armários")
cabecalho(ws, ["Armário", "Nome", "Largura (m)", "Altura (m)", "Fundo (m)", "Posição X (m)", "Posição Z (m)", "Giro (°)"],
          [13, 24, 12, 11, 11, 13, 13, 9])
for i, nome in enumerate(ARMARIOS):
    r = i + 2
    for c, v in enumerate([nome, "", 0.9, 1.9, 0.45, float(i), 0.0, 0], start=1):
        cell = ws.cell(row=r, column=c, value=v)
        cell.font = fonte
        if c in (3, 4, 5, 6, 7):
            cell.number_format = "0.00"
lista(ws, "A", 50, "=Listas!$A$2:$A$30")
dv = DataValidation(type="list", formula1='"0,90,180,270"', allow_blank=True)
dv.add("H2:H50")
ws.add_data_validation(dv)

# ---- Gavetas e prateleiras ----
ws = wb.create_sheet("Gavetas e prateleiras")
cabecalho(ws, ["Armário", "Nível (1 = topo)", "Tipo", "Divisões", "Código"], [13, 15, 13, 10, 16])
NIVEIS = [("Prateleira", 1), ("Prateleira", 2), ("Prateleira", 1), ("Gaveta", 1), ("Gaveta", 1)]
r = 2
for nome in ARMARIOS:
    for n, (tipo, div) in enumerate(NIVEIS, start=1):
        for c, v in enumerate([nome, n, tipo, div], start=1):
            ws.cell(row=r, column=c, value=v).font = fonte
        r += 1
LIM = 60
for rr in range(2, LIM + 1):
    cell = ws.cell(row=rr, column=5, value=f'=IF(C{rr}="","",IF(C{rr}="Gaveta","G","P")&COUNTIFS(A$2:A{rr},A{rr},C$2:C{rr},C{rr}))')
    cell.fill = calc_fill
lista(ws, "A", LIM, "=Listas!$A$2:$A$30")
dv = DataValidation(type="list", formula1='"Prateleira,Gaveta"', allow_blank=True)
dv.add(f"C2:C{LIM}")
ws.add_data_validation(dv)
dv = DataValidation(type="whole", operator="between", formula1="1", formula2="6", allow_blank=True,
                    showErrorMessage=True, error="Use um número de 1 a 6.")
dv.add(f"D2:D{LIM}")
ws.add_data_validation(dv)

# ---- Listas ----
ws = wb.create_sheet("Listas")
cabecalho(ws, ["Armários", "Classificação", "Categoria", "Estado", "Unidade"], [14, 16, 36, 20, 10])
for c, valores in enumerate([ARMARIOS, CLASSES, CATEGORIAS, ESTADOS, UNIDADES], start=1):
    for i, v in enumerate(valores, start=2):
        ws.cell(row=i, column=c, value=v).font = fonte

wb.save(saida)

# Tira do pacote as partes opcionais (tema e propriedades) para o arquivo ficar pequeno
import re as _re, zipfile
with zipfile.ZipFile(saida) as z:
    partes = {n: z.read(n) for n in z.namelist()}
for n in list(partes):
    if n.startswith(("xl/theme/", "docProps/")):
        del partes[n]
partes["[Content_Types].xml"] = _re.sub(rb'<Override PartName="/(xl/theme|docProps)/[^>]*/>', b"", partes["[Content_Types].xml"])
partes["_rels/.rels"] = _re.sub(rb'<Relationship [^>]*Target="/?docProps/[^>]*/>', b"", partes["_rels/.rels"])
partes["xl/_rels/workbook.xml.rels"] = _re.sub(rb'<Relationship [^>]*Target="/?(xl/)?theme/[^>]*/>', b"", partes["xl/_rels/workbook.xml.rels"])
with zipfile.ZipFile(saida, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    for n, dados in partes.items():
        z.writestr(n, dados)
print("ok", saida)
