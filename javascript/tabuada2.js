var valor = prompt("Digite o valor da tabuada - Seja o que Deus quiser...");
var htmlgerado="";
var cores
var linhas = 0
for (i=0; i<= valor; i++){
    
    if (i %2 !== 0){
        htmlgerado+= i;
    }
    cores += "cores_"+linhas
    htmlgerado += "<div class='row'>"
    htmlgerado += "<div class='col-sm-4'> </div>";
    htmlgerado += "</div>";
}
document.getElementById("tabuada").innerHTML = htmlgerado;