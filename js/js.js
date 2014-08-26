var total =1;

function dinero(denominacion,valor,cant){
	this.denominacion = parseInt(denominacion);
	if(cant!=0){
		this.valor = cant * denominacion;
	}
	else{
		this.valor = valor;
	}
	this.getCantidad = function(){
		this.valor / denominacion;
	}

	this.setValor = function ( value) {
		this.valor += parseInt(value);
	}
}


var tabla {
	"d100": obj = new dinero(100,0,0),
	"d200": obj =new dinero(200,0,0)
}


function calcular () {
	var dato =document.getElementById("entrada");
	tabla[dato].setValor(dato.value);
	total +=parseInt(tabla[dato].valor);
	console.log(total);
	document.getElementById("totalcount").value=total;
}