class vendas {
    constructor() {
        this.venda = [];
    }

    addVenda(venda) {
        this.venda.push(venda);
    }

    addLista(){
        var listas= document.getElementById('lista').innerHTML+= "<ul><li> R$ " + venda + "</li></ul>";
    }

    maior() {
        var maiorVenda = Math.max(...this.venda);
        document.getElementById('maior').innerHTML = "<div> Maior venda:" + maiorVenda + "</div>";
    }

    media(){
        var nVendas = this.venda.length;
        const total = this.venda.reduce((acc, cur) => acc + cur, 0)/nVendas;
        document.getElementById('media').innerHTML= "<div>Média das Vendas:" +total+"</div>"

    }
    
}

//ver como cria o botao para o listar

let objetoVendas = new vendas(); 

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); //cria o evento do botao

    const venda = parseFloat(document.getElementById('venda').value);// converte o texto para numero
    
    //verifica se a pessoa digitou mesmo
    if (isNaN(venda)) {
       alert('Digite a venda')
        return;
    }

 //chamando os metodos, que sao tipo funçoes
    objetoVendas.addVenda(venda);
    objetoVendas.maior(venda)
    objetoVendas.media(venda)
    objetoVendas.addLista(venda)
    
    console.log(objetoVendas.venda);
});