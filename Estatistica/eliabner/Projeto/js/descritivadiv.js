var div1;
var div2; 

var divuniforme;

window.onload = function() {

    div1 = document.getElementById("digitardados");
    div2 = document.getElementById("importarcsv");

    var btn1 = document.getElementById("btndigitardados");
    btn1.onclick = this.mostrarDiv1;
    var btn2 = document.getElementById("btnimportar");
    btn2.onclick = this.mostrarDiv2;

    div1.classList.add("escondido");
    div2.classList.add("escondido");

}

function mostrarDiv1(){
    div1.classList.remove("escondido");
    div2.classList.add("escondido");
}

function mostrarDiv2(){
    div2.classList.remove("escondido");
    div1.classList.add("escondido");
}

function mostrardivuniforme() {
    divuniforme.classList.remove("escondido");
}

