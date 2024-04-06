let LisTarefas= [];

function enviarform(){

    categoria= document.getElementById("categoria").value;
    tarefa= document.getElementById("tarefa").value;
    prioridade= document.getElementById("prioridade").value;
    descricao= document.getElementById("descricao").value;
    data= document.getElementById("data").value;

    if (!categoria||!tarefa||!prioridade||!descricao||!data) {
        alert('preencha todos os campos');
         return;
     }

    LisTarefas.push(categoria);
    LisTarefas.push(tarefa);
    LisTarefas.push(prioridade);
    LisTarefas.push(descricao);
    LisTarefas.push(data);
    criartabela(categoria,tarefa,prioridade,descricao,data);
}

function criartabela(categoria,tarefa,prioridade,descricao,data){
    var table = document.getElementById("tab");
    var row=table.insertRow();
    row.innerHTML = "<tr><td>"+categoria+"</td><td>"+tarefa+"</td><td>"+prioridade+"</td><td>"+descricao+"</td><td>"+data+"</td></tr>";
    if (categoria.toLowerCase()==="trabalho"){
        row.style.backgroundColor="#87CEFA";
    }
    else if((categoria.toLowerCase()==="estudo")){
        row.style.backgroundColor="#BC8F8F";
    }

    else if((categoria.toLowerCase()==="pessoal")){
        row.style.backgroundColor="#FFE4B5";
    }
}