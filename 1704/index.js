const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));-
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    const alunos = [];
    let mediaAluno = 0;
    let mediaTurma = 0;
    let contador = 0;

    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase()+string.slice(1); }

    app.get('/inserir', (req, res) => {

        class aluno{
            constructor(nome, nota1,nota2){
                this.nome=nome;
                this.nota1=nota1;
                this.nota2=nota2;
            }
        }

        const nome = req.query.nome;
        const nota1 = parseFloat(req.query.nota1);
        const nota2 = parseFloat(req.query.nota2);

        const nomeLetraMaiucula = capitalizeFirstLetter(nome);

        const objetoAluno =  new aluno(nomeLetraMaiucula,nota1,nota2);
        alunos.push(objetoAluno);
        contador++;
    
    
        const media=(nota1 + nota2) / 2;
    
        if (media > mediaAluno){
            mediaAluno = media;
        }
    
        let totalNotas=0;

        alunos.forEach(aluno=>{totalNotas += aluno.nota1 + aluno.nota2;});
        mediaTurma = totalNotas / (contador * 2); 

        let listaHTML = '<ul>';
        alunos.forEach(aluno => {
            listaHTML += `<li>${aluno.nome}: ${aluno.nota1}, ${aluno.nota2}</li>`;
        });
        listaHTML += '</ul>';
    
        res.send(`${listaHTML} Média Turma:${mediaTurma.toFixed(2) } Maior Média:${mediaAluno}`);
        
    });
    

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na
porta ${PORT}`));                                                                                                    