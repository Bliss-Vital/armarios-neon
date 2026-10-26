# Armários do laboratório NEON

Modelo 3D dos armários do laboratório da equipe NEON. Clique num armário para abrir as portas e numa gaveta ou prateleira para ver o que tem nela.

**Site:** https://bliss-vital.github.io/armarios-neon/

## De onde vêm os dados

O site lê a planilha [Estoque do laboratório NEON](https://docs.google.com/spreadsheets/d/1M1xmuR2K5_a9YNmupEMKDZzq84BJT-YrPX181cKO5Kw/edit) no Google Planilhas e atualiza sozinho a cada minuto. Ninguém edita pelo site: para cadastrar, mudar ou tirar um item, é só editar a planilha.

| Aba | O que tem |
|---|---|
| Estoque | Uma linha por item. As colunas Armário e Local no armário (G1, P2, P2B…) dizem onde ele está |
| Armários | Medidas de cada armário e posição no laboratório, em metros |
| Gavetas e prateleiras | Os níveis de cada armário, de cima para baixo, e em quantas divisões cada um se separa |
| Listas | Opções das listas suspensas |

Para o site conseguir ler, a planilha precisa estar compartilhada como **Qualquer pessoa com o link: Leitor**. Quem vai cadastrar itens precisa ser adicionado como **Editor**.

Não mude os nomes das abas nem os títulos das colunas, porque o site procura por eles.

## Link direto para uma gaveta

O endereço do site guarda onde a pessoa está. `#A2-G1` abre o Armário 2 com a Gaveta 1 puxada:

https://bliss-vital.github.io/armarios-neon/#A2-G1

Esse link pode virar um QR code colado na gaveta.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | O site inteiro, com Three.js r128 carregado do cdnjs |
| `ferramentas/gerar_planilha.py` | Gera a planilha modelo em `.xlsx`, usada para criar a do Google |
| `ferramentas/planilha_armarios_neon.xlsx` | A planilha modelo gerada |

Para gerar a planilha de novo:

```bash
python ferramentas/gerar_planilha.py planilha.xlsx https://bliss-vital.github.io/armarios-neon/
```
