# Armários do laboratório NEON

Modelo 3D dos armários do laboratório da equipe NEON. Clique num móvel para abrir as portas, a gaveta ou a tampa, e num compartimento para ver o que tem nele.

**Site:** https://bliss-vital.github.io/armarios-neon/

## De onde vêm os dados

| O quê | Onde fica | Quem mexe |
|---|---|---|
| Os móveis: medidas, posição, gavetas e prateleiras | `laboratorio.js`, neste repositório | Quem mantém o site, quando um móvel muda |
| O estoque: o que tem em cada compartimento | Aba Estoque da planilha [Estoque do laboratório NEON](https://docs.google.com/spreadsheets/d/1M1xmuR2K5_a9YNmupEMKDZzq84BJT-YrPX181cKO5Kw/edit) | A equipe, direto no Google Planilhas |

O site lê a planilha sozinho a cada minuto. Ninguém edita pelo site.

Os móveis foram modelados a partir das fotos de 26/10/2026, com medidas estimadas pelas fotos. São 5 armários de parede, a bancada branca (gaveteiro 6 e armário 7), a bancada preta (gaveteiro volante 8, caixa preta 9, gaveteiro 10 e armário 11) e a maleta 12, em cima da bancada branca.

Para o site conseguir ler o estoque, a planilha precisa estar compartilhada como **Qualquer pessoa com o link: Leitor**. Quem vai cadastrar itens precisa ser adicionado como **Editor**. Se a planilha estiver fechada, o modelo aparece do mesmo jeito, só que sem os itens.

## Códigos dos compartimentos

Na coluna Local no armário da planilha vai o código do compartimento, contado de cima para baixo:

| Código | O que é |
|---|---|
| `G1`, `G2`… | Gavetas |
| `P1`, `P2`… | Prateleiras. Com divisória, `P1A` é o lado esquerdo e `P1B` o direito |
| `C1`, `C2`… | Compartimentos de caixa e maleta, do fundo para a frente. `C1A` a `C1D` são as 4 divisões da bandeja da maleta |

A aba Locais da planilha lista os códigos de cada móvel.

## Link direto para uma gaveta

O endereço do site guarda onde a pessoa está. `#A6-G1` abre o Gaveteiro 6 com a Gaveta 1 puxada:

https://bliss-vital.github.io/armarios-neon/#A6-G1

O número depois do `A` é o número do móvel. Esse link pode virar um QR code colado na gaveta.

## Mudar um móvel

Edite `laboratorio.js`. O começo do arquivo explica cada campo. Depois gere a planilha modelo de novo, para as abas Locais e Listas acompanharem:

```bash
python ferramentas/gerar_planilha.py ferramentas/planilha_armarios_neon.xlsx https://bliss-vital.github.io/armarios-neon/
```

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | O site inteiro, com Three.js r128 carregado do cdnjs |
| `laboratorio.js` | Os móveis do laboratório |
| `ferramentas/gerar_planilha.py` | Gera a planilha modelo em `.xlsx`, usada para criar a do Google |
| `ferramentas/planilha_armarios_neon.xlsx` | A planilha modelo gerada, com os itens que deu para ver na foto da maleta |
