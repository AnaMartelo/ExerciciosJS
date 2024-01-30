const produtos = [{nome:"Bananas", categoria: "Fruta", preço: "1"}, 
                  {nome:"Batatas", categoria: "Tubérculo", preço: "2"},
                  {nome:"Couve", categoria: "Verdura", preço: "1.5"}]

let produtoTabela = document.getElementById("listaProdutos");

for(i=0;i<produtos.length;i++){
    let produtoTabelaLinha = document.createElement('tr');
    
    let produtoTabelaDadosNome = document.createElement('td');
    produtoTabelaDadosNome.innerHTML = produtos[i].nome;
    produtoTabelaLinha.appendChild(produtoTabelaDadosNome)
    produtoTabela.appendChild(produtoTabelaLinha)

    let produtoTabelaDadosCategoria = document.createElement('td');
    produtoTabelaDadosCategoria.innerHTML = produtos[i].categoria;
    produtoTabelaLinha.appendChild(produtoTabelaDadosCategoria)
    produtoTabela.appendChild(produtoTabelaLinha)

    let produtoTabelaDadosPreco = document.createElement('td');
    produtoTabelaDadosPreco.innerHTML = produtos[i].preço;
    produtoTabelaLinha.appendChild(produtoTabelaDadosPreco)
    produtoTabela.appendChild(produtoTabelaLinha)
}