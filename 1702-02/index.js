const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));-
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na
porta ${PORT}`));        

let matilha =[];

app.get('/inserir', (req, res) => {

    class cachorro{
        constructor(nome, idade, peso){
            this.nome=nome;
            this.idade=idade;
            this.peso=peso;
            this.porte=this.verificarPorte();
        }

        verificarPorte(){
        var idadeSemanas = this.idade * 52;
        var tamPorte = (this.peso / idadeSemanas) * 52;

        if (tamPorte > 45) {
            return 'gigante';
        } else if (tamPorte >25 && tamPorte< 45) {
            return 'grande';
        } else if(tamPorte>15 && tamPorte<25) {
            return 'medio';
        }else if(tamPorte>6 && tamPorte<15) {
            return 'pequeno';
        }
        }
    }

    const nome = req.query.nome;
    const idade = parseInt(req.query.idade);
    const peso = parseFloat(req.query.peso);

    const objetoCachorro = new cachorro(nome, idade, peso);
    verificarPorte();
    matilha.push(objetoCachorro);


    let listaHTML = '';

    if (cachorro.porte === "Gigante") {

        let listaHTML = '<ul>';
        matilha.forEach(cachorro => {
            if (cachorro.porte === "Gigante") {
                listaHTML += `<li>${cachorro.nome} /n Idade: ${cachorro.idade} anos, /n Peso: ${cachorro.peso} </li>`;
            }
        });
        listaHTML += '</ul>';
    }
    
    if (cachorro.porte === "grande") {
        let listaHTML = '<ul>';
        matilha.forEach(cachorro => {
            if (cachorro.porte === "grande") {
                listaHTML += `<li>${cachorro.nome} - Idade: ${cachorro.idade} anos, Peso: ${cachorro.peso} kg</li>`;
            }
        });
        listaHTML += '</ul>';
        console.log('Cachorros de porte Grande:');
        console.log(listaHTML);
    }

   
    if (cachorro.porte === "medio") {
        let listaHTML = '<ul>';
        matilha.forEach(cachorro => {
            if (cachorro.porte === "medio") {
                listaHTML += `<li>${cachorro.nome} - Idade: ${cachorro.idade} anos, Peso: ${cachorro.peso} kg</li>`;
            }
        });
        listaHTML += '</ul>';
        console.log('Cachorros de porte Médio:');
        console.log(listaHTML);
    }

    if (cachorro.porte === "pequeno") {
        let listaHTML = '<ul>';
        matilha.forEach(cachorro => {
            if (cachorro.porte === "pequeno") {
                listaHTML += `<li>${cachorro.nome} - Idade: ${cachorro.idade} anos, Peso: ${cachorro.peso} kg</li>`;
            }
        });
        listaHTML += '</ul>';
    
    }

    res.send(listaHTML);
    


})