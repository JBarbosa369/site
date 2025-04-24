function mostrarPreco() {
  const produto = document.getElementById("produto").value;
  const precoDiv = document.getElementById("precoProduto");

let preco = 0;

switch (produto) {
  case "martelo":
  preco = 49.00;
  break;
  case "pregos":
  preco = 8.00;
  break;
  case "parafusos":
  preco = 6.00;
  break;
  default:
  precoDiv.innerHTML = "";
  return;
  }

  precoDiv.innerHTML = `Preço unitário: R$ ${preco.toFixed(2)}`;
}

function calcular() {
  const produto = document.getElementById("produto").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const resultado = document.getElementById("resultado");

  resultado.classList.remove("error"); // Remove erro anterior, se houver

  if (!produto || isNaN(quantidade) || quantidade <= 0) {
      resultado.classList.add("error"); // Adiciona destaque de erro
      resultado.innerHTML = "Por favor, selecione um produto e insira uma quantidade válida.";
      return;
  }

  let precoUnitario = 0;

  switch (produto) {
      case "martelo":
          precoUnitario = 49.00;
          break;
      case "pregos":
          precoUnitario = 8.00;
          break;
      case "parafusos":
          precoUnitario = 6.00;
          break;
  }

  const total = precoUnitario * quantidade;
  resultado.classList.remove("error"); // Garante que a classe error não fique ativa
  resultado.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}
