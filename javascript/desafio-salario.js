function salarios(){
    var salarios = document.getElementById("sal").value

    if(salarios <=1000.00){
        alert ("insento")
    }
    else {
        if(salarios > 1000.00 && salarios <=2500.00){
            document.getElementById("salarios").innerHTML = "seu salario é R$:"+ 0.875*salarios +" desconto de 12.5%"
           //document.getElementById("salarios").innerHTML
        }
        else{
            if(salarios >2500.00 && salarios <= 5000.00){
                document.getElementById("salarios").innerHTML = "seu salario é R$:"+ salarios +" salario com desconto R$"+ salarios*0.75+" desconto de 25%"
            }
            else{
                if(salarios > 5000.00){
                    document.getElementById("salarios").innerHTML = "seu salario é R$"+ (salarios - 1300.00)+" desconto de 1300.00R$ fixos"
                }
            }
               

            
        }
    }

}