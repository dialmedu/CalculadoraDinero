$(document).ready(function(){
   $(".add").click(function(event){
   	var name = monedas.length;
	monedas.push(new divisa(this.name));
	$(this).parent().append('<li>'+this.name+' : <input name="n'+name+'"  type="number" onkeyup="insertar('+name+')"></li>');
   	event.preventDefault();
   });
});

function divisa (n) {
	this.nombre=n;
	this.valor = 0;
}

var total= new divisa(0);

var monedas =[new divisa(50),
			  new divisa(100),
			  new divisa(200),
			  new divisa(500),
			  new divisa(1000),
			  new divisa(2000),
			  new divisa(5000),
			  new divisa(10000),
			  new divisa(20000),
			  new divisa(50000),
];

function insertar(index) {
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


