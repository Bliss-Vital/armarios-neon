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
// Os códigos usados na planilha saem daqui: P1, P2… para prateleiras, G1, G2… para gavetas, C1, C2… para compartimentos,
// e uma letra para cada divisão (P1A, P1B).
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
      "niveis": [ { "tipo": "Prateleira", "divisoes": 2 }, { "tipo": "Prateleira", "divisoes": 2 } ] },
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
