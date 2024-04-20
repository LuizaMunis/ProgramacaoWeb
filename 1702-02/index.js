const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na
porta ${PORT}`));        

let matilha =[];

class cachorro {
    constructor(nome, idade, peso,porte) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.porte=porte;
        console.log(nome,idade,peso,porte);
        
    }

}

function  verificarPorte(peso, idade) {
    var idadeSemanas = idade * 52;
    var tamPorte = (peso / idadeSemanas) * 52;

    if (tamPorte > 45) {
        return 'gigante';
    } else if (tamPorte > 25 && tamPorte < 45) {
        return 'grande';
    } else if (tamPorte > 15 && tamPorte < 25) {
        return 'medio';
    } else {
        return 'pequeno';
    } 
}

app.get('/inserir', (req, res) => {

    
    const nome = req.query.nome;
    const idade = parseInt(req.query.idade);
    const peso = parseFloat(req.query.peso);


    let porte=verificarPorte(peso, idade);
    const objetoCachorro = new cachorro(nome, idade, peso, porte);

    matilha.push(objetoCachorro);

    console.log(matilha);
    let listaHTML = '<ul>';

    matilha.forEach(cachorro => {
        if (cachorro.porte === "gigante") {
                listaHTML += `<li>Nome:${cachorro.nome}  Idade: ${cachorro.idade} anos, Peso: ${cachorro.peso} kg, Porte ${cachorro.porte}</li>`;
        } else if (cachorro.porte === "grande") {
                listaHTML += `<li>Nome:${cachorro.nome} Idade: ${cachorro.idade} anos, Peso: ${cachorro.peso} kg, Porte ${cachorro.porte}</li>`;
        } else if (cachorro.porte === "medio") {
                listaHTML += `<li>Nome:${cachorro.nome} Idade: ${cachorro.idade} anos, Peso: ${cachorro.peso} kg, Porte ${cachorro.porte}</li>`;
        } else{
                listaHTML += `<li>Nome:${cachorro.nome}  Idade: ${cachorro.idade} anos, Peso: ${cachorro.peso} kg, Porte ${cachorro.porte}</li>`;
        }
    });
    
        listaHTML += '</ul>';
    
        res.send(listaHTML);
    });
    
    