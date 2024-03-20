function calcularParcelas(valor, nparcelas){
    return valor / nparcelas;
}

function mostrarResultados(){
    var valor=parseFloat(document.getElementById('valor').value);
    var nparcelas=parseInt(document.getElementById('nparcelas').value);

    var resultado= calcularParcelas(valor,nparcelas);

    if( nparcelas==1){
        var base= resultado*0.10;
        var desconto= resultado-base;

        document.getElementById('resultado').innerText = `O resultado é: ${desconto}`;
    }
        else if(nparcelas >1 && nparcelas<=3){
            var juros= resultado*0.05;
            var comjuros=resultado+juros;

            for(i=1;i<nparcelas;i++){
                document.getElementById('resultado').innerText += `\n parcela ${i}: ${comjuros}`;
            }

        }else{
            var juros= resultado*0.10;
            var comjuros=resultado+juros;
                    
            for(i=1;i<nparcelas;i++){
                document.getElementById('resultado').innerText += `\n parcela ${i}: ${comjuros}`;
            }

        }

}