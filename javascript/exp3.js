var salMin = prompt("Digite o valor do salario minimo");
var qtdeKw = prompt("Digite a quantidade de Kw");


//A
kw = salMin*1/700
//B
pago = kw*qtdeKw
//C
Desconto = pago*0.9

document.write("Valor de 1Kw = "+kw +"<br>");
document.write("Valor total da conta: "+pago+"<br>");
document.write("Valor com 10% de desconto = "+ Desconto+"<br>");

console.log("valor de 1kw R$"+kw+"<br>");
console.log("valor total da conta R$"+pago+"<br>");
console.log("valor da conta com desconto R$"+Desconto+"<br>")

alert("valor de 1 kw"+kw);
alert("valor total da conta R$: "+pago);
alert("valor da conta com desconto R$: "+Desconto);
