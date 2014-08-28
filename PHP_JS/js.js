$(document).ready(function(){
   $(".add").click(function(event){
   	alert(this.name);
   	var name = monedas.length;
	monedas.push(new divisa(this.name));
	$('ul:first').append('<li>'+this.name+': <input name="n'+name+'"  type="number" onkeyup="insertar('+name+')"></li>');
   	event.preventDefault();
   });
});



function divisa (n) {
	this.nombre=n;
	this.valor = 0;
}

var total= new divisa(0);
var d100 = new divisa(100);
var d200 = new divisa(200);
var d300 = new divisa(300);
var monedas = new Array(d100,d200,d300);


function insertar (index) {
	//reestablesco el total
	if(total.valor!=0){
	total.valor = (parseInt(total.valor)-monedas[index].valor);
	}
	var nombre = "n"+index;
	//obtengo la cantidad de monedas
	var n = document.dato.elements[name=nombre];

	//cambio el valor de dicha moneda
	monedas[index].valor = (monedas[index].nombre * n.value);

	total.valor = (parseInt(monedas[index].valor) + parseInt(total.valor));
	document.res.elements[0].value = total.valor;	
}




