function realizarBusca(){
    // pegando o valor digitado no INPUT
    var  id =document.getElementById("meuid").value;
    //console.log("Digitei o CEP = "+meuid);

    // vou montar uma URL com o padrao do REPUBLICAVIRTUAL
    var URL = "https://jsonplaceholder.typicode.com/users/"+id;
    

    // agora... quero buscar os detalhes do CEP
    fetch(URL, { method:"GET" })
       .then(response => response.json() )
       .then(json => preencheHTML(json));

}

function preencheHTML(json){
   var result = document.getElementById("result");
   document.getElementById("meuid").value = ""
   result.innerHTML = "<div class='card mb-5' style='width: 18rem; '>"+"<div class='card-body'>"+"<div><h5>Name :</h5></div>"+ json.name + "<br/>"+"<div><h5> User Name :</h5></div>"+ json.username + "<br/>"+"<div><h5>E-mail :</h5></div>"+ json.email + "<br/>" +"<div><h5> Street :</h5></div>"+ json.address.street + "<br/>"+"<div><h5> Suite :</h5></div>"+ json.address.suite + "<br/>"+"<div><h5> City :</h5></div>"+ json.address.city + "<br/>"+ "<div><h5> Zipcode :</h5></div>"+json.address.zipcode + "<br/>"+ json.phone + "<br/>"+"<div><h5> Web Site :</h5></div>"+ json.website + "<br/>"+"<div><h5> Company Name:</h5></div>"+ json.company.name + "<br/>" +"<div><h5> Catch Pharase :</h5></div>"+ json.company.catchphrase + "<br/>"+"<div><h5> Bs :</h5></div>"+ json.company.bs + "<br/>" + "<br>";
      
   //result.innerHTML += ;
   













  // result.innerHTML += "Cidade: "+json.cidade+" -  Bairro: "+json.bairro+"<br/>";
   //result.innerHTML += "UF: "+json.uf+"<br/>";*/

}