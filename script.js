// ===============================
// ESTRELLAS DEL FONDO
// ===============================

const fondo = document.getElementById("stars");

for(let i = 0; i < 150; i++){

    let estrella = document.createElement("div");

    estrella.className = "star";

    estrella.style.left = Math.random()*100 + "%";
    estrella.style.top = Math.random()*100 + "%";

    estrella.style.animationDelay =
    Math.random()*3 + "s";

    fondo.appendChild(estrella);

}



// ===============================
// VARIABLES
// ===============================

const caja = document.querySelector(".container");

const musica = document.getElementById("musica");

let escena = 0;



// ===============================
// HISTORIA
// ===============================

const historia = [

"Dicen que algunas personas llegan a nuestra vida sin hacer ruido...",

"Pero poco a poco se convierten en alguien especial.",

"Alguien con quien quieres compartir tus días, tus alegrías y tus sueños.",

"Y para mí, esa persona eres tú, Corazón ❤️"

];



// ===============================
// BOTÓN INICIAL
// ===============================

document.getElementById("boton")
.addEventListener("click", iniciar);




function iniciar(){


musica.play().catch(()=>{});


mostrarHistoria();


}




// ===============================
// MOSTRAR HISTORIA
// ===============================

function mostrarHistoria(){


if(escena < historia.length){


caja.innerHTML = `


<h1>
❤️ Corazón ❤️
</h1>


<p id="texto" class="mensaje"></p>


<button id="boton">

Continuar ✨

</button>


`;



escribir(historia[escena]);

escena++;



document.getElementById("boton")
.addEventListener("click",mostrarHistoria);



crearCorazones();


}

else{


mostrarFotos();


}



}




// ===============================
// TEXTO ANIMADO
// ===============================

function escribir(texto){


let elemento =
document.getElementById("texto");


let i=0;


function escribirLetra(){


if(i < texto.length){


elemento.innerHTML += texto.charAt(i);

i++;


setTimeout(escribirLetra,45);


}


}


escribirLetra();


}




// ===============================
// FOTOS
// ===============================


let foto = 0;


const fotos = [

"img/foto1.png",

"img/foto2.png",

"img/foto3.png"

];


const mensajesFotos=[

"Un recuerdo que guardo con mucho cariño ❤️",

"Gracias por cada sonrisa y cada momento juntos.",

"Espero que sigamos creando muchos recuerdos más."

];




function mostrarFotos(){


if(foto < fotos.length){



caja.innerHTML = `


<h1>
📸 Nuestros momentos
</h1>


<img class="foto" src="${fotos[foto]}">


<p class="mensaje">

${mensajesFotos[foto]}

</p>


<button id="sig">

Continuar ❤️

</button>


`;



document.getElementById("sig")
.addEventListener("click",()=>{


foto++;

mostrarFotos();


});



}

else{


mostrarCarta();


}



}




// ===============================
// CARTA
// ===============================


function mostrarCarta(){


caja.innerHTML = `


<h1>
💌 Para ti, Corazón
</h1>


<p class="carta">


Quiero que sepas que eres una persona muy especial para mí.


<br><br>


Gracias por cada momento, cada conversación y cada sonrisa.


<br><br>


Me gusta la tranquilidad y la felicidad que siento cuando estoy contigo.


<br><br>


Quiero seguir construyendo recuerdos a tu lado.


<br><br>


❤️


</p>


<button id="pregunta">

Continuar ✨

</button>


`;



document.getElementById("pregunta")
.addEventListener("click", preguntaFinal);



}




// ===============================
// PREGUNTA FINAL
// ===============================


function preguntaFinal(){


caja.innerHTML = `


<div class="final">


<h1>
❤️ Corazón ❤️
</h1>



<p class="mensaje">


Quiero caminar contigo en esta nueva etapa...


<br><br>


Compartir mis alegrías, mis sueños y seguir creando recuerdos juntos.


<br><br>


<strong>
¿Aceptas ser mi novia? ❤️
</strong>


</p>



<button id="aceptar">

Sí, acepto ❤️

</button>


</div>


`;



document.getElementById("aceptar")
.addEventListener("click",final);



}




// ===============================
// FINAL FELIZ
// ===============================


function final(){


caja.innerHTML = `


<div class="final">


<h1>
🎉❤️ Gracias ❤️🎉
</h1>


<p class="mensaje">


Me haces muy feliz.


<br><br>


Gracias por aceptar caminar conmigo.


<br><br>


Este es solo el comienzo de algo hermoso.


<br><br>


❤️


</p>


</div>


`;



for(let i=0;i<60;i++){

crearCorazones();

}


}




// ===============================
// CORAZONES
// ===============================


function crearCorazones(){


let corazon =
document.createElement("div");


corazon.className="corazon";


corazon.innerHTML="❤️";


corazon.style.left =
Math.random()*100 + "%";



corazon.style.animationDuration =
(3+Math.random()*4)+"s";



document.body.appendChild(corazon);



setTimeout(()=>{

corazon.remove();

},6000);



}