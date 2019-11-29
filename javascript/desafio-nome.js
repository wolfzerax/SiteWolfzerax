var nomezao = prompt("digite o nome gigante")
var cont = nomezao.length
//var lista=[];
//var posLista=0;

function nomeGrande(){
    var pos;
    pos = nomezao.indexOf(" ");
    while (pos >= 0){
        var palavra = nomezao.slice(0,pos);
        //alert(palavra);
        document.getElementById("nomes").innerHTML +=  "<h2>"+palavra+"</h2>";
        nomezao = nomezao.slice(pos+1);
        lista[posLista] = palavra;
        posLista++;
        //alert("Sobrou do nome = "+nomezao);
        pos = nomezao.indexOf(" ");
    }
    //alert(nomezao);
    palavra = nomezao;
    lista[posLista] = palavra;
    document.getElementById("nomes").innerHTML +=  "<h2>"+palavra+"</h2>";

    console.log(lista);


}

