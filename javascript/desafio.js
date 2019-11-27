var valor = prompt("Digite um valor")
var htmlgerado = ""


for (i=2; i<= valor; i=i+2){
   //  document.write(i+"^"+2+"="+(i*i)+ "</br>");
   htmlgerado = htmlgerado+i+"^"+2+"="+(i*i)+ "</br>"
}
    

document.getElementById("resultado").innerHTML = htmlgerado;