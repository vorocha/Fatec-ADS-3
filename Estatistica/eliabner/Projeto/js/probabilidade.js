var div1;
var div2;
var div3; 

window.onload = function() {
    
    div1 = document.getElementById("divuniforme");
    div2 = document.getElementById("divbinomial");
    div3 = document.getElementById("divnormal");

    var btuniforme = document.getElementById("btnuniforme");   
    btuniforme.onclick = this.mostrarDiv1;
    var btbinomial = document.getElementById("btnbinomial");   
    btbinomial.onclick = this.mostrarDiv2;
    var btnormal = document.getElementById("btnnormal");   
    btnormal.onclick = this.mostrarDiv3;

    div1.classList.add("escondido");
    div2.classList.add("escondido");
    div3.classList.add("escondido");
    
}

function mostrarDiv1(){
    div1.classList.remove("escondido");
    div2.classList.add("escondido");
    div3.classList.add("escondido");
}

function mostrarDiv2(){
    div2.classList.remove("escondido");
    div1.classList.add("escondido");
    div3.classList.add("escondido");
}

function mostrarDiv3(){
    div3.classList.remove("escondido");
    div1.classList.add("escondido");
    div2.classList.add("escondido");
}

