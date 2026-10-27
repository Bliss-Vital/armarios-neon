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

O Armário 3 também tem o que está dentro dele: as caixas das estações de retrabalho Yaxun, o cesto de solda, a terceira mão, a garra azul de solda e as duas pilhas de caixinhas, com as etiquetas que deu para ler na foto. Ao clicar no cesto de solda (`P3B-1`), as ferramentas dele aparecem em cima da bancada, como na foto de 27/10/2026.

Uma coisa do modelo pode ter foto: ao clicar nela, a foto abre por cima de tudo. A garra azul de solda, no fundo da `P3B`, é a primeira. A foto entra pelo campo `foto` em `laboratorio.js`, e o arquivo fica na pasta `imagens/`. Um item da planilha também pode ter foto, pela coluna Foto da aba Estoque: o item ganha o botão Ver foto.

Para o site conseguir ler o estoque, a planilha precisa estar compartilhada como **Qualquer pessoa com o link: Leitor**. Quem vai cadastrar itens precisa ser adicionado como **Editor**. Se a planilha estiver fechada, o modelo aparece do mesmo jeito, só que sem os itens.

## Códigos dos compartimentos

Na coluna Local no armário da planilha vai o código do compartimento. Ele leva o número do móvel, então cada código existe uma vez só no laboratório:

| Código | O que é |
|---|---|
| `P3A`, `P3B`, `P3C`, `P3D` | Prateleiras do Armário 3, de cima para baixo e da esquerda para a direita: `P3A` e `P3B` em cima, `P3C` e `P3D` embaixo |
| `G6A` a `G6D` | Gavetas do Gaveteiro 6, de cima para baixo |
| `C12A` a `C12E` | Compartimentos da Maleta 12, do fundo para a frente. Um móvel com um compartimento só fica sem letra: `C9` |
| `P3C-1`, `P3C-2`… | Caixinhas e cestos dentro de um compartimento. As caixinhas são contadas coluna por coluna, da esquerda para a direita e de cima para baixo. `P3B-1` é o cesto de solda |

A aba Locais da planilha lista os códigos de cada móvel. Se a coluna Armário ficar vazia, o site acha o móvel pelo número do código.

## Link direto para uma gaveta

O endereço do site guarda onde a pessoa está. `#G6A` abre o Gaveteiro 6 com a primeira gaveta puxada, e `#A6` abre só o gaveteiro:

https://bliss-vital.github.io/armarios-neon/#G6A

Esse link pode virar um QR code colado na gaveta.

## Mudar um móvel

Edite `laboratorio.js`. O começo do arquivo explica cada campo, inclusive o `dentro`, que desenha o que fica dentro de um compartimento e cria as caixinhas. Depois gere a planilha modelo de novo, para as abas Locais e Listas acompanharem:

```bash
python ferramentas/gerar_planilha.py ferramentas/planilha_armarios_neon.xlsx https://bliss-vital.github.io/armarios-neon/
```

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | O site inteiro, com Three.js r128 carregado do cdnjs |
| `laboratorio.js` | Os móveis do laboratório |
| `imagens/` | Fotos que o site mostra ao clicar numa coisa ou num item. As fotos do laboratório, em `fotos/`, não são publicadas |
| `ferramentas/gerar_planilha.py` | Gera a planilha modelo em `.xlsx`, usada para criar a do Google |
| `ferramentas/planilha_armarios_neon.xlsx` | A planilha modelo gerada, com os itens que deu para ver nas fotos da maleta, do Armário 3 e do cesto de solda, e a garra azul de solda |
