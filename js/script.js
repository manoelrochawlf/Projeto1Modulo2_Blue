
var contador1 = 0;
var contador2 = 0;
var contador3 = 0;

const imgEmocao = ["img/pedrinhotriste.jpg", "img/juninhopernambucanoserio.jpg" , "img/robertofeliz.jpg"];
const mudaBotaoArr = ["Vasco Empatou", "Vasco Ganhou", "Vasco Perdeu"];
const mudaTituloArr = ["Vasco Perdeu", "Vasco Empatou", "Vasco Ganhou"];
const mudatitulo = document.querySelector(".mudatitulo");
const imagemEmocao = document.querySelector("#imagensemocao");

function mudaImagem(){  
    
    if(contador1 == mudaBotaoArr.length) {
      contador1=0;
    }
    if(contador2 == imgEmocao.length) {
        contador2=0;
    }
    if(contador3 == mudaTituloArr.length) {
        contador3=0;
    }
    
    document.getElementById("mudaBotao").innerHTML = mudaBotaoArr[contador1];
    contador1++

    mudatitulo.innerHTML = mudaTituloArr[contador2];
    contador2++

    document.getElementById("imagensemocao").src=imgEmocao[contador3]; 
    contador3++
       
}





