function calcular() {
    const preco = parseFloat(document.getElementById('preco').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);

    if ((preco)(quantidade)) {
      document.getElementById('resultado').textContent = 'Preencha os campos corretamente.';
      return;
    }

    const total = preco * quantidade;
    document.getElementById('resultado').textContent = `Você vai gastar R$ ${total.toFixed(2)}`;
    
    console.log('Preço unitário:', preco);
    console.log('Quantidade:', quantidade);
  }
  
  