// Móveis do laboratório NEON, modelados a partir das fotos de 26/10/2026. Medidas em metros, estimadas pelas fotos.
//
// Posição: x corre ao longo da parede, da esquerda para a direita, e z sai da parede para o meio da sala.
// Cada móvel fica com o centro em (x, z). altura_do_chao é onde começa o móvel: 0 no chão, 1.55 nos armários de parede.
// giro em graus: 0 é de frente para a sala.
//
// tipo: "Armário" e "Armário de parede" têm portas; "Gaveteiro" só gavetas; "Gaveteiro volante" tem rodinhas;
// "Caixa" e "Maleta" abrem a tampa e os compartimentos são vistos de cima.
//
// niveis: de cima para baixo (numa caixa ou maleta, do fundo para a frente). divisoes separa o nível em colunas.
// tamanho é a altura relativa do nível; sem ele, gaveta vale 0.6 e prateleira ou compartimento vale 1.
// Os códigos usados na planilha saem daqui e levam o número do móvel: P para prateleira, G para gaveta e C para
// compartimento de caixa, o número do móvel e uma letra, contada de cima para baixo e da esquerda para a direita.
// O Armário 3 tem P3A e P3B em cima e P3C e P3D embaixo; o Gaveteiro 6 tem G6A a G6D. Móvel com um só fica sem letra (C9).
//
// dentro: o que aparece dentro de cada compartimento, pelo código dele. Medidas em metros; x é a distância da parede
// esquerda do compartimento, y a altura acima do fundo dele e recuo a distância da frente.
//   "Caixa": caixa fechada. texto é o que vem impresso na frente (\n quebra a linha), transparente deixa ver dentro
//            e cores pinta o que tem dentro, de cima para baixo.
//   "Cesto": cesto aberto, com etiqueta na frente; ferramentas: true põe cabos de ferramenta saindo dele.
//            Cada cesto vira um compartimento (P3B-1). conteudo lista o que tem nele: ao clicar no cesto, essas coisas
//            aparecem em cima da bancada embaixo do móvel. Ali x é a distância da ponta esquerda do móvel e z a distância
//            do fundo da bancada, os dois até o centro da coisa; giro vira ela em graus e rotulo é o nome curto mostrado ao lado.
//   "Cilindro": frasco ou pote; tampa é a cor da tampa, bico pode ser "borrifador" ou "conta-gotas" e deitado: true
//            deita o cilindro (um sugador de solda), com a tampa para a direita.
//   "Terceira mão": base redonda com dois braços flexíveis.
//   "Garra": garra de solda de prender na mesa, com morsa preta e três braços flexíveis de contas, cada um com bico
//            e garra jacaré na ponta; cor pinta os braços e cor2 os bicos.
//   Ferramentas, deitadas com a ponta para a direita: "Ferro de solda" (cor do cabo, cor2 da borracha), "Alicate"
//            (forma "corte", "crimpador" ou "desencapador"; cor e cor2 dos dois cabos, cabeca da cabeça), "Pinças"
//            (saquinho com quantidade pinças), "Carretel" (cor do fio, cor2 das abas), "Suporte de ferro", "Escova" e "Manta".
//   "Caixinhas": pilha de caixinhas organizadoras. colunas traz as etiquetas de cada coluna, da esquerda para a direita
//            e de cima para baixo; "" é uma caixinha sem etiqueta conhecida e null é um espaço sem caixinha.
//            Cada caixinha vira um compartimento: P3C-1, P3C-2…, contadas coluna por coluna, de cima para baixo.
//   foto: vale para qualquer objeto, inclusive os do conteudo de um cesto. É o caminho da foto no site, como
//            "imagens/garra-azul-de-solda.jpg": ao clicar no objeto, a foto abre por cima do modelo. As fotos do site
//            ficam em imagens/; a pasta fotos/ guarda as fotos do laboratório e não é publicada.
// O dentro do Armário 3 saiu da foto de 26/10/2026; as etiquetas vazias não deram para ler na foto.
// O conteúdo do cesto de solda saiu da foto "caixa rosa de solda", de 27/10/2026. A garra azul de solda entrou em 27/10/2026,
// com a foto dela, e fica no fundo da P3B, atrás do cesto.
// Este arquivo é lido também como JSON pelo gerar_planilha.py: comentários só aqui em cima, fora do objeto.
//
// Depois de mudar este arquivo, gere a planilha de novo (ferramentas/gerar_planilha.py) para a lista de armários bater.
window.LABORATORIO = {
  "bancadas": [
    { "nome": "Bancada branca", "comprimento": 4.65, "fundo": 0.65, "altura": 0.90, "x": 2.325, "z": 0.325, "giro": 0, "tampo": "branco" },
    { "nome": "Bancada preta", "comprimento": 2.80, "fundo": 0.65, "altura": 0.90, "x": 6.05, "z": 0.325, "giro": 0, "tampo": "preto" }
  ],
  "armarios": [
    { "armario": "Armário 1", "nome": "Parede, ponta esquerda", "tipo": "Armário de parede",
      "largura": 1.05, "altura": 0.85, "fundo": 0.40, "x": 0.525, "z": 0.20, "altura_do_chao": 1.55, "giro": 0,
      "niveis": [ { "tipo": "Prateleira", "divisoes": 2 }, { "tipo": "Prateleira", "divisoes": 2 } ] },
    { "armario": "Armário 2", "nome": "Parede", "tipo": "Armário de parede",
      "largura": 1.05, "altura": 0.85, "fundo": 0.40, "x": 1.575, "z": 0.20, "altura_do_chao": 1.55, "giro": 0,
      "niveis": [ { "tipo": "Prateleira", "divisoes": 2 }, { "tipo": "Prateleira", "divisoes": 2 } ] },
    { "armario": "Armário 3", "nome": "Solda e componentes", "tipo": "Armário de parede",
      "largura": 1.05, "altura": 0.85, "fundo": 0.40, "x": 2.625, "z": 0.20, "altura_do_chao": 1.55, "giro": 0,
      "niveis": [ { "tipo": "Prateleira", "divisoes": 2 }, { "tipo": "Prateleira", "divisoes": 2 } ],
      "dentro": {
        "P3A": [
          { "objeto": "Caixa", "nome": "Estação de retrabalho Yaxun (solda e ar quente)", "texto": "YAXUN\nREWORK STATION", "cor": "#2c5cae",
            "largura": 0.33, "altura": 0.15, "fundo": 0.28, "x": 0, "y": 0 },
          { "objeto": "Caixa", "nome": "Estação de retrabalho SMD Yaxun (ar quente)", "texto": "YAXUN\nSMD REWORK", "cor": "#1d1e21",
            "largura": 0.16, "altura": 0.14, "fundo": 0.24, "x": 0.335, "y": 0 },
          { "objeto": "Caixa", "nome": "Estação de retrabalho SMD Yaxun (ar quente)", "texto": "YAXUN\nSMD REWORK STATION", "cor": "#1d1e21",
            "largura": 0.31, "altura": 0.15, "fundo": 0.26, "x": 0.02, "y": 0.15 },
          { "objeto": "Caixa", "nome": "Caixa vermelha", "cor": "#8b3527",
            "largura": 0.13, "altura": 0.165, "fundo": 0.22, "x": 0.335, "y": 0.15, "recuo": 0.07 }
        ],
        "P3B": [
          { "objeto": "Caixa", "nome": "Caixa Yaxun", "cor": "#1d1e21", "largura": 0.045, "altura": 0.15, "fundo": 0.26, "x": 0 },
          { "objeto": "Caixa", "nome": "Organizador de termo retrátil", "transparente": true, "cores": ["#2a2c30", "#d9b21f", "#c8394f"],
            "largura": 0.045, "altura": 0.145, "fundo": 0.10, "x": 0.05 },
          { "objeto": "Caixa", "nome": "Estojo transparente", "transparente": true, "cores": ["#3a3d42"],
            "largura": 0.05, "altura": 0.085, "fundo": 0.12, "x": 0.10 },
          { "objeto": "Terceira mão", "nome": "Terceira mão com limpador de ponta", "cor": "#b59a45",
            "largura": 0.08, "altura": 0.17, "x": 0.155 },
          { "objeto": "Garra", "nome": "Garra azul de solda", "cor": "#2f62ff", "cor2": "#f07a1e", "foto": "imagens/garra-azul-de-solda.jpg",
            "largura": 0.26, "altura": 0.30, "fundo": 0.14, "x": 0.20, "recuo": 0.21 },
          { "objeto": "Cesto", "nome": "Cesto de solda", "etiqueta": "Solda", "cor": "#e8c3c7", "ferramentas": true,
            "largura": 0.27, "altura": 0.13, "fundo": 0.20, "x": 0.225,
            "conteudo": [
              { "objeto": "Suporte de ferro", "nome": "Suporte do ferro de solda Yaxun", "rotulo": "Suporte do ferro", "cor": "#2a3f8f",
                "largura": 0.09, "fundo": 0.13, "x": 0.17, "z": 0.27 },
              { "objeto": "Pinças", "nome": "Pinça antiestática, no saquinho amarelo", "rotulo": "Pinça", "cor": "#e9cf2a", "quantidade": 1,
                "largura": 0.07, "fundo": 0.15, "x": 0.34, "z": 0.27, "giro": 8 },
              { "objeto": "Pinças", "nome": "Jogo de 6 pinças antiestáticas", "rotulo": "6 pinças", "cor": "#dfe36a", "quantidade": 6,
                "largura": 0.12, "fundo": 0.14, "x": 0.5, "z": 0.27 },
              { "objeto": "Carretel", "nome": "Estanho (fio de solda), 2 carretéis", "rotulo": "Estanho", "cor2": "#3aa05a",
                "largura": 0.09, "altura": 0.055, "x": 0.7, "z": 0.17, "y": 0.055 },
              { "objeto": "Carretel", "cor2": "#3aa05a", "largura": 0.09, "altura": 0.055, "x": 0.7, "z": 0.17 },
              { "objeto": "Cilindro", "nome": "Malha dessoldadora", "rotulo": "Malha", "cor": "#6b3fa0", "largura": 0.05, "altura": 0.012, "x": 0.13, "z": 0.41 },
              { "objeto": "Cilindro", "nome": "Pasta de solda Cobix, 110 g", "rotulo": "Pasta Cobix", "cor": "#e8641e", "tampa": "#e8641e",
                "largura": 0.075, "altura": 0.065, "x": 0.23, "z": 0.45 },
              { "objeto": "Caixa", "nome": "Peça preta de plástico (não identificada)", "rotulo": "Peça preta", "cor": "#1d1e21",
                "largura": 0.07, "altura": 0.025, "fundo": 0.055, "x": 0.06, "z": 0.47 },
              { "objeto": "Alicate", "forma": "crimpador", "nome": "Alicate crimpador de terminais", "rotulo": "Crimpador",
                "cor": "#d8322b", "cor2": "#d8322b", "cabeca": "#26282b", "largura": 0.21, "x": 0.38, "z": 0.45, "giro": 92 },
              { "objeto": "Alicate", "forma": "desencapador", "nome": "Alicate desencapador automático laranja", "rotulo": "Desencapador",
                "cor": "#f08a1c", "cor2": "#f2b41c", "cabeca": "#f08a1c", "largura": 0.2, "x": 0.52, "z": 0.45, "giro": 80 },
              { "objeto": "Alicate", "forma": "desencapador", "nome": "Alicate desencapador automático vermelho", "rotulo": "Desencapador",
                "cor": "#d8322b", "cor2": "#1f2023", "cabeca": "#1f2023", "largura": 0.2, "x": 0.66, "z": 0.45, "giro": 100 },
              { "objeto": "Cilindro", "nome": "Fluxo de solda líquido", "rotulo": "Fluxo", "cor": "#f1d9a0", "transparente": true,
                "tampa": "#f4f4f0", "bico": "conta-gotas", "largura": 0.045, "altura": 0.11, "x": 0.8, "z": 0.38 },
              { "objeto": "Cilindro", "nome": "Sugador de solda", "rotulo": "Sugador", "cor": "#cfd5da", "transparente": true, "tampa": "#2f5fd0",
                "deitado": true, "largura": 0.025, "altura": 0.19, "x": 0.92, "z": 0.4, "giro": 95 },
              { "objeto": "Escova", "nome": "Escova pequena de limpeza", "rotulo": "Escova", "largura": 0.15, "x": 1.06, "z": 0.3, "giro": 40 },
              { "objeto": "Manta", "nome": "Manta de silicone azul para solda", "rotulo": "Manta", "cor": "#2e9bd6",
                "largura": 0.3, "fundo": 0.42, "x": 1.3, "z": 0.4, "giro": -8 },
              { "objeto": "Alicate", "forma": "corte", "nome": "Alicate de corte rente Hikari", "rotulo": "Corte Hikari",
                "cor": "#e3b81f", "cabeca": "#1f2023", "largura": 0.16, "x": 0.1, "z": 0.58, "giro": -140 },
              { "objeto": "Alicate", "forma": "corte", "nome": "Alicate de corte rente pequeno, cabo cinza", "rotulo": "Corte cinza",
                "cor": "#7d8389", "cabeca": "#5d4c3c", "largura": 0.14, "x": 0.26, "z": 0.57, "giro": 50 },
              { "objeto": "Ferro de solda", "nome": "Ferro de solda, cabo amarelo", "rotulo": "Ferro de solda", "cor": "#e6c01e", "cor2": "#1f2023",
                "largura": 0.23, "x": 0.56, "z": 0.53, "giro": -8 },
              { "objeto": "Ferro de solda", "nome": "Ferro de solda Hikari", "rotulo": "Ferro Hikari", "cor": "#dcded9", "cor2": "#2e9a6e",
                "largura": 0.22, "x": 0.52, "z": 0.61, "giro": -10 }
            ] }
        ],
        "P3C": [
          { "objeto": "Caixinhas", "altura": 0.40, "fundo": 0.24,
            "colunas": [ ["", "", "Cola quente", ""], ["", "Terminais", "", ""], ["", "Cabos", "Arduino", "Cabos USB do Arduino"], [null, "", "", ""] ] }
        ],
        "P3D": [
          { "objeto": "Caixinhas", "largura": 0.43, "altura": 0.30, "fundo": 0.24,
            "colunas": [ ["Fita crepe", "Protoboard", ""], ["Fita isolante", "", ""], ["", "Pilhas", ""], ["Jumpers", "Jumpers", "Jumpers", "Jumpers"] ] },
          { "objeto": "Cilindro", "nome": "Borrifador", "transparente": true, "tampa": "#2f8fd8", "bico": "borrifador", "largura": 0.05, "altura": 0.19, "x": 0.44 }
        ]
      } },
    { "armario": "Armário 4", "nome": "Maletas de ferramentas", "tipo": "Armário de parede",
      "largura": 1.05, "altura": 0.85, "fundo": 0.40, "x": 3.675, "z": 0.20, "altura_do_chao": 1.55, "giro": 0,
      "niveis": [ { "tipo": "Prateleira", "divisoes": 2 }, { "tipo": "Prateleira", "divisoes": 2 } ] },
    { "armario": "Armário 5", "nome": "Kits de componentes", "tipo": "Armário de parede",
      "largura": 1.05, "altura": 0.85, "fundo": 0.40, "x": 4.725, "z": 0.20, "altura_do_chao": 1.55, "giro": 0,
      "niveis": [ { "tipo": "Prateleira", "divisoes": 2 }, { "tipo": "Prateleira", "divisoes": 2 } ] },
    { "armario": "Gaveteiro 6", "nome": "Bancada branca", "tipo": "Gaveteiro",
      "largura": 0.60, "altura": 0.87, "fundo": 0.60, "x": 3.25, "z": 0.30, "altura_do_chao": 0, "giro": 0,
      "niveis": [ { "tipo": "Gaveta" }, { "tipo": "Gaveta" }, { "tipo": "Gaveta" }, { "tipo": "Gaveta" } ] },
    { "armario": "Armário 7", "nome": "Ferramentas e tintas", "tipo": "Armário",
      "largura": 1.10, "altura": 0.87, "fundo": 0.60, "x": 4.10, "z": 0.30, "altura_do_chao": 0, "giro": 0,
      "niveis": [ { "tipo": "Prateleira", "divisoes": 2 }, { "tipo": "Prateleira", "divisoes": 2 } ] },
    { "armario": "Gaveteiro 8", "nome": "Volante, bancada preta", "tipo": "Gaveteiro volante",
      "largura": 0.42, "altura": 0.62, "fundo": 0.50, "x": 4.92, "z": 0.30, "altura_do_chao": 0, "giro": 0,
      "niveis": [ { "tipo": "Gaveta", "tamanho": 1 }, { "tipo": "Gaveta", "tamanho": 1 }, { "tipo": "Gaveta", "tamanho": 2 } ] },
    { "armario": "Caixa 9", "nome": "Caixa preta, no chão", "tipo": "Caixa",
      "largura": 0.46, "altura": 0.42, "fundo": 0.58, "x": 5.43, "z": 0.31, "altura_do_chao": 0, "giro": 0,
      "niveis": [ { "tipo": "Compartimento", "nome": "Dentro da caixa" } ] },
    { "armario": "Gaveteiro 10", "nome": "Bancada preta", "tipo": "Gaveteiro",
      "largura": 0.60, "altura": 0.87, "fundo": 0.60, "x": 6.05, "z": 0.30, "altura_do_chao": 0, "giro": 0,
      "niveis": [ { "tipo": "Gaveta" }, { "tipo": "Gaveta" }, { "tipo": "Gaveta" }, { "tipo": "Gaveta" } ] },
    { "armario": "Armário 11", "nome": "Bancada preta", "tipo": "Armário",
      "largura": 1.10, "altura": 0.87, "fundo": 0.60, "x": 6.90, "z": 0.30, "altura_do_chao": 0, "giro": 0,
      "niveis": [ { "tipo": "Prateleira", "divisoes": 2 }, { "tipo": "Prateleira", "divisoes": 2 } ] },
    { "armario": "Maleta 12", "nome": "Motores e rádio", "tipo": "Maleta",
      "largura": 0.46, "altura": 0.16, "fundo": 0.34, "x": 4.45, "z": 0.36, "altura_do_chao": 0.90, "giro": 0,
      "niveis": [ { "tipo": "Compartimento", "divisoes": 4, "tamanho": 0.45, "nome": "Bandeja" },
                  { "tipo": "Compartimento", "tamanho": 0.55, "nome": "Fundo da maleta" } ] }
  ]
};
