var agua_1 = document.getElementById("agua1");
var agua_2 = document.getElementById("agua2");
var tanque_1 = document.getElementById("tanque_1");
var tanque_2 = document.getElementById("tanque_2");
setWaterLevel(agua_1,100);
setWaterLevel(agua_2,0);


var spanIndicador = document.getElementById('indicador-1');
var spanIndicador2 = document.getElementById('indicador-2');
var spanGenerado1 = document.getElementById('generado-1');
var spanGenerado2 = document.getElementById('generado-2');
var spanGenerado3 = document.getElementById('generado-3');
setContentSpan(spanIndicador,0);
setContentSpan(spanIndicador2,0);

var llave1 = false;
var llave2 = false;
var llave3 = false;
const llave1Elemento = document.querySelector('.llave1');
const llave2Elemento = document.querySelector('.llave2');
const llave3Elemento = document.querySelector('.llave3');
actualizarColoresLlaves()
var capacidad_tanque = 5000;
var capacidad_tanque2 = 4000;
var maximo_porcentaje = capacidad_tanque*0.75; //Primer tanque 75%
var minimo_porcentaje = capacidad_tanque*0.50; //Primer tanque 50%
var maximo_porcentaje2 = capacidad_tanque2*0.75;
var minimo_porcentaje2 = capacidad_tanque2*0.50;
var llenando = capacidad_tanque;
var llenando2 = 0;
var tiempo_transcurrido = 0;

var num1
var num2
var num3
var input1 = document.getElementById("valor_1");
var input2 = document.getElementById("valor_2");
var input3 = document.getElementById("valor_3");

var numero_aleatorio;
var numero_aleatorio2;
var vaciando_tanque;




// agua_1.style.height = 50 + '%';
// agua_2.style.height = 50 + '%';

function limpiar(){ //Limpia las variables del programa
    llave1 = false;
    llave2 = false;
    llave3 = false;
    actualizarColoresLlaves()
    capacidad_tanque = 5000;
    capacidad_tanque2 = 4000;
    llenando = capacidad_tanque;
    llenando2 = 0;
    if (tiempo_transcurrido == 0){
        alert("El programa ya se encuentra detenido");
        setWaterLevel(agua_1,100);
        setWaterLevel(agua_2,0);
    }
    setWaterLevel(agua_1,100);
    setWaterLevel(agua_2,0);
    setContentSpan(spanIndicador,0);
    setContentSpan(spanIndicador2,0);
    spanGenerado1.textContent = ' ';
    spanGenerado2.textContent = ' ';
    spanGenerado3.textContent = ' ';
    tiempo_transcurrido = 0;
    numero_aleatorio = 0;
    numero_aleatorio2 = 0;
    vaciando_tanque = 0;
    boton_iniciar.disabled = false;
    input1.value = "";
    input2.value = "";
    input3.value = "";
}

let intervalo;
let intervalo2;
let intervalo3;
let intervalo4;
var porcentaje;
var porcentaje2;

const manecillaS = document.getElementById('manecillaS');

//agregado por Perry
// const tanque1 = document.querySelector('.tanque1');

// setTimeout(() => {
//   tanque1.classList.add('lleno');
//   setTimeout(() => {
//     tanque1.classList.remove('lleno');
//     tanque1.classList.add('vaciando');
//     setTimeout(() => {
//       tanque1.classList.remove('vaciando');
//     }, 500);
//   }, 6750);
// }, 1000);

// const tanque2 = document.querySelector('.tanque2');
// setTimeout(() => {
//     tanque2.classList.add('lleno');
//     setTimeout(() => {
//       tanque2.classList.remove('lleno');
//       tanque2.classList.add('vaciando');
//       setTimeout(() => {
//         tanque2.classList.remove('vaciando');
//       }, 500);
//     }, 6150);
//   }, 1000);


function detener(){ //Detienee el programa
    limpiar();
    clearInterval(intervalo);
    clearInterval(intervalo2);
    clearInterval(intervalo3);
    clearInterval(intervalo4);
    habilitarEdicion();
    manecillaS.style.transform = `rotate(${0}deg) translateX(50%)`;
    console.log("Programa detenido");
}


//Validar numeros de los input
function esNumeroValido(valor) {
    return !isNaN(valor) && valor >= 0 && valor <= 400;
}

function esNumeroValido2(valor) {
    return !isNaN(valor) && valor >= 0 && valor <= 500;
}

function esNumeroValido3(valor){
    return !isNaN(valor) && valor >= 0 && valor <= 600;
}

function habilitarEdicion(){
    input1.removeAttribute("readonly");
    input2.removeAttribute("readonly");
    input3.removeAttribute("readonly");
}

function deshabilitarEdicion(){
    input1.setAttribute("readonly",true);
    input2.setAttribute("readonly",true);
    input3.setAttribute("readonly",true);
}


//Declaracion y programacion de los botones
var boton_iniciar = document.getElementById("boton-inicio");
var boton_parar = document.getElementById("boton-parar");

boton_iniciar.addEventListener("click",iniciar);
boton_parar.addEventListener("click",detener);


function setWaterLevel(waterId,percentage){
    waterId.style.height = percentage + '%';
}

function setContentSpan(span,num){
    span.textContent = num.toFixed(2) + '%';
}



function actualizarColoresLlaves() {
    // Si llave1 es true, mantiene el color plateado, de lo contrario, cambia a rojo
    llave1Elemento.classList.toggle('llave-roja', !llave1);
    llave1Elemento.querySelector('.agua').classList.toggle('agua-roja', !llave1);
    
    // Si llave2 es true, mantiene el color plateado, de lo contrario, cambia a rojo
    llave2Elemento.classList.toggle('llave-roja', !llave2);
    llave2Elemento.querySelector('.agua').classList.toggle('agua-roja', !llave2);
    
    // Si llave3 es true, mantiene el color plateado, de lo contrario, cambia a rojo
    llave3Elemento.classList.toggle('llave-roja', !llave3);
    llave3Elemento.querySelector('.agua').classList.toggle('agua-roja', !llave3);
}



function actualizarManecilla() {
    // Calcula el ángulo de rotación en grados (360 grados / 60 segundos * contador de segundos)
    const angulo = (tiempo_transcurrido % 60) * 6;

    // Aplica la rotación a la manecilla de segundos
    manecillaS.style.transform = `rotate(${angulo}deg) translateX(50%)`;

    // Incrementa el contador de segundos
    tiempo_transcurrido++;
}

// function cambiarColorLlave(key,contenedor){
//     if (key){
//         contenedor.classList.remove('redDiv');
//     }else{
//         contenedor.classList.add('redDiv');
//     }
// }

//Se inicia el programa

function iniciar(){
    boton_iniciar.disabled = true;
    
    num1 = parseFloat(input1.value);
    num2 = parseFloat(input2.value);
    num3 = parseFloat(input3.value);
    if (esNumeroValido(num1) && esNumeroValido2(num2) && esNumeroValido3(num3)) {
        numero_aleatorio = Math.floor(Math.random() * (num1 + 1));
        numero_aleatorio2 = Math.floor(Math.random() * (num2 + 1));
        vaciando_tanque = Math.floor(Math.random() * (num3 + 1));
        deshabilitarEdicion();
        spanGenerado1.textContent = numero_aleatorio + 'lts/seg';
        spanGenerado2.textContent = numero_aleatorio2 + 'lts/seg';
        spanGenerado3.textContent = vaciando_tanque + 'lts/seg';
        tanque1();
    } else {
        boton_iniciar.disabled = false;
        alert("Por favor, ingresa solo números mayores o iguales a 0 en todos los campos y que cumpla con el requisito maximo especificado.");
        input1.value = "";
        input2.value = "";
        input3.value = "";
    }
    function tanque1(){
        
        intervalo = setInterval(function(){
            if (llenando >= maximo_porcentaje){
                // console.log("Llave 1 cerrada y ahora se abre la llave 2");
                llave1 = false;
                llave2 = true;
                actualizarColoresLlaves()
                clearInterval(intervalo);
                tanque2();
            }
            else{
                tiempo_transcurrido += 1;
                actualizarManecilla();
                llenando += numero_aleatorio;
                porcentaje = ((llenando/capacidad_tanque)*100);
                setWaterLevel(agua_1,porcentaje);
                setContentSpan(spanIndicador,porcentaje);
                console.log("Ha pasado " + tiempo_transcurrido + " segundos y el tanque 1: " + llenando + " litros de agua tanque 2: " + llenando2 + " litros de agua");
            }
        },1000);
    }
        
    function tanque2(){
        
        intervalo2 = setInterval(function(){
            if (llenando <= minimo_porcentaje){
                llave1 = true;
                llave2 = false;
                actualizarColoresLlaves()
                // console.log("Llave 2 cerrada y ahora se abre la llave 1");
                tanque1();
                clearInterval(intervalo2);
            }
            else if(llenando2 >= maximo_porcentaje2){
                llave2 = false;
                llave3 = true;
                actualizarColoresLlaves()
                // console.log("Llave 2 cerrada y ahora se abre la llave 3");
                terceraLlave();
                clearInterval(intervalo2);
            }
            else if((llenando <= minimo_porcentaje) && (llenando2 >= maximo_porcentaje2)){
                llave1 = true;
                llave3 = true;
                llave2 = false;
                actualizarColoresLlaves()
                // console.log("El tanque 1 esta lo suficientemente vacio y el tanque 2 esta lleno, se abre la llave 1 y la llave 3");
                llave_1_y_llave3();
                clearInterval(intervalo2);
            }
            else if(llenando2 < maximo_porcentaje2){
                tiempo_transcurrido += 1;
                actualizarManecilla();
                llenando -= numero_aleatorio2;
                porcentaje = ((llenando/capacidad_tanque)*100);
                setWaterLevel(agua_1,porcentaje);
                setContentSpan(spanIndicador,porcentaje);
                llenando2 += numero_aleatorio2;
                porcentaje2 = ((llenando2/capacidad_tanque2)*100);
                setWaterLevel(agua_2,porcentaje2);
                setContentSpan(spanIndicador2,porcentaje2);
                console.log("Ha pasado " + tiempo_transcurrido + " segundos y el tanque 1: " + llenando + " litros de agua tanque 2: " + llenando2 + " litros de agua");
            }
        },1000);
    }
    
    function terceraLlave(){
        
        intervalo3 = setInterval(function() {
            if(llenando2 <= minimo_porcentaje2){
                llave3 = false;
                llave2 = true;
                actualizarColoresLlaves()
                // console.log("Llave 3 cerrada y se abre la segunda llave");
                tanque2();
                clearInterval(intervalo3);
            }
            else{
                tiempo_transcurrido += 1;
                actualizarManecilla();
                llenando2 -= vaciando_tanque;
                porcentaje2 = ((llenando2/capacidad_tanque2)*100);
                setWaterLevel(agua_2,porcentaje2);
                setContentSpan(spanIndicador2,porcentaje2);
                console.log("Ha pasado " + tiempo_transcurrido + " segundos y la llave 3 sigue abierta y el tanque 2 se esta vaciando (tiene " + llenando2 + " litros de agua)" + " tanque 1: " + llenando);
            }
        },1000);
    }
    
    function llave_1_y_llave3(){
        intervalo4 = setInterval(function(){
            if(llenando2 <= minimo_porcentaje2){
                if (llenando >= maximo_porcentaje){
                    // console.log("Se lleno el tanque 1, se cierra la llave y se abre la llave 2");
                    llave2 = true;
                    actualizarColoresLlaves()
                    tanque2();
                    clearInterval(intervalo4);
                }
                else{
                    tiempo_transcurrido += 1;
                    actualizarManecilla();
                    llenando += numero_aleatorio;
                    porcentaje = ((llenando/capacidad_tanque)*100);
                    setWaterLevel(agua_2,porcentaje);
                    setContentSpan(spanIndicador,porcentaje);
                    console.log("Ha pasado " + tiempo_transcurrido + " segundos y el tanque 1 se esta llenando " + " tanque 1: " + llenando + " litros de agua");
                }
            }
            else{
                tiempo_transcurrido += 1;
                actualizarManecilla();
                llenando2 -= vaciando_tanque;
                porcentaje2 = ((llenando2/capacidad_tanque)*100);
                setWaterLevel(agua_2,porcentaje2);
                setContentSpan(spanIndicador2,porcentaje2);
                console.log("Ha pasado " + tiempo_transcurrido + " segundos y la llave 3 sigue abierta junto con la llave 1 ("+ llenando +" litros de agua tanque 1 y " + llenando2 + " litros de agua tanque 2");
            }
            
        },1000);
    }
    
}


