# Andamento

Situação em 27/10/2026: o que o site já tem e o que ainda falta.

## O que o site já tem

- Os 12 móveis do laboratório, modelados pelas fotos de 26/10/2026. As medidas foram estimadas pelas fotos.
- Códigos que levam o número do móvel: `P3A` a `P3D`, `G6A` a `G6D`, `C12A` a `C12E`, `C9`. As caixinhas e os cestos ganham um número a mais: `P3C-1`, `P3B-1`.
- O que está dentro do Armário 3, pela foto "armario 3.jpeg":
  - as caixas Yaxun;
  - a terceira mão;
  - o borrifador;
  - as duas pilhas de caixinhas, com as etiquetas que deu para ler.
- O cesto de solda (`P3B-1`): ao clicar nele, as 18 ferramentas aparecem em cima da bancada.
- A garra azul de solda no fundo da `P3B`, que abre a foto ao ser clicada.
- O botão Fechar armário, que fecha o móvel e afasta a câmera. A tecla Esc faz o mesmo.

## O que falta

1. **Atualizar a planilha de estoque do site.** A planilha [Estoque do laboratório NEON](https://docs.google.com/spreadsheets/d/1M1xmuR2K5_a9YNmupEMKDZzq84BJT-YrPX181cKO5Kw/edit) ainda é a versão antiga:
   - a lista suspensa de Armário só vai até o Armário 5;
   - os códigos ainda são os antigos;
   - as abas Armários e Gavetas e prateleiras já não são usadas.

   A versão nova está em `ferramentas/planilha_armarios_neon.xlsx`, com as abas Locais e Listas e os 46 itens das fotos. Há dois caminhos:
   - ligar o conector do Google Planilhas numa conversa com o Claude, para ele editar a mesma planilha sem mudar o link;
   - importar o `.xlsx` à mão.
2. **Compartilhar a planilha do site** como **Qualquer pessoa com o link: Leitor**. Sem isso, o site mostra os móveis sem os itens.
3. **Pôr os 18 itens do cesto na planilha "Compras e estoque de eletrônica (Fadiga)".** Eles vão na aba Estoque do laboratório, a partir da célula **B6**. A tabela no fim deste arquivo tem as colunas na mesma ordem da planilha, de Categoria a Observações. Ela pode ser copiada da página do GitHub e colada na B6.
4. **Conferir no laboratório o que não deu para ver bem na foto do cesto:**
   - quantas pinças tem no saquinho amarelo;
   - o rótulo do fluxo de solda, que começa com "Res";
   - se a manta de silicone fica mesmo guardada no cesto;
   - o que é a peça preta de plástico;
   - se são 2 carretéis de estanho.
5. **Completar as etiquetas das caixinhas.** Várias caixinhas da `P3C` e da `P3D` aparecem como "sem etiqueta", porque não deu para ler pela foto. O nome entra na lista `colunas` do `dentro` em `laboratorio.js`.
6. **Decidir os códigos das gavetas.** O pedido era o número do móvel só nas prateleiras, mas ele foi aplicado a todos os móveis (`G6A`, `C12A`). Se for para voltar, é só avisar.
7. **Medir os móveis com trena.** Hoje as medidas são estimativas tiradas das fotos.

Depois de cada mudança no site, o próximo passo é commit e push para o GitHub e abrir o link para conferir.

## Itens do cesto de solda para a planilha Fadiga

| Categoria | Item | Especificação / modelo | Qtd | Unid. | Estado | Onde fica | Conferido em | Observações |
|---|---|---|---|---|---|---|---|---|
| Ferramentas | Ferro de solda | Cabo amarelo e preto | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Ferramentas | Ferro de solda Hikari | Cabo branco | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Ferramentas | Suporte para ferro de solda Yaxun | Azul, com bandeja para a esponja | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Ferramentas | Alicate de corte rente Hikari | Cabo amarelo e preto | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Ferramentas | Alicate de corte rente pequeno | Cabo cinza | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Ferramentas | Alicate crimpador de terminais | Cabo vermelho e azul | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Ferramentas | Alicate desencapador automático | Laranja e amarelo | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Ferramentas | Alicate desencapador automático | Vermelho e preto | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Ferramentas | Pinça antiestática | No saquinho amarelo | 1 | kit |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. Confira quantas pinças tem no saquinho. |
| Ferramentas | Jogo de pinças antiestáticas | 6 pinças, pontas retas e curvas | 1 | kit |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Consumíveis | Estanho (fio de solda) | Carretel | 2 | rolo |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. Parecem 2 carretéis empilhados. |
| Consumíveis | Pasta de solda Cobix | Pote de 110 g | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Consumíveis | Fluxo de solda líquido | Frasco com bico; o rótulo começa com “Res” | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. Leia o rótulo para confirmar o que é. |
| Consumíveis | Malha dessoldadora | Carretel pequeno roxo | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Ferramentas | Sugador de solda | Azul | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Ferramentas | Escova pequena de limpeza | Cerdas pretas | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. |
| Ferramentas | Manta de silicone para solda | Azul, com divisórias | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. Confira se ela fica guardada no cesto. |
| Outros | Peça preta de plástico | Retangular, com uma janela no meio | 1 | un |  | Armário 3, P3B-1 (cesto de solda) |  | Pela foto do cesto de solda de 27/10/2026. Conferir no laboratório. Não deu para saber o que é pela foto. |
