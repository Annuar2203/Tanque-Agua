var llave1 = false;
var llave2 = true;
var llave3 = false;
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

function limpiar(){ //Limpia las variables del programa
    llave1 = false;
    llave2 = true;
    llave3 = false;
    capacidad_tanque = 5000;
    capacidad_tanque2 = 4000;
    llenando = capacidad_tanque;
    llenando2 = 0;
    if (tiempo_transcurrido == 0){
        alert("El programa ya se encuentra detenido");
    }
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


function detener(){ //Detienee el programa
    limpiar();
    clearInterval(intervalo);
    clearInterval(intervalo2);
    clearInterval(intervalo3);
    clearInterval(intervalo4);
    habilitarEdicion();
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


//Declaraacion y programacion de los botones
var boton_iniciar = document.getElementById("boton-inicio");
var boton_parar = document.getElementById("boton-parar");

boton_iniciar.addEventListener("click",iniciar);
boton_parar.addEventListener("click",detener);





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
        tanque1();
    } else {
        boton_iniciar.disabled = false;
        alert("Por favor, ingresa solo números mayores o iguales a 0 en todos los campos.");
        input1.value = "";
        input2.value = "";
        input3.value = "";
    }
    function tanque1(){
        console.log("Numero aleatorio generado para el primer tanque: " + numero_aleatorio);
        intervalo = setInterval(function(){
            if (llenando >= maximo_porcentaje){
                console.log("Llave 1 cerrada y ahora se abre la llave 2");
                llave1 = false;
                llave2 = true;
                tanque2();
                clearInterval(intervalo);
            }
            else{
                tiempo_transcurrido += 1;
                llenando += numero_aleatorio;
                console.log("Ha pasado " + tiempo_transcurrido + " segundos y el tanque 1: " + llenando + " litros de agua tanque 2: " + llenando2 + " litros de agua");
            }
        },1000);
    }
        
    function tanque2(){
        console.log("Numero aleatorio generado para el segundo tanque: " + numero_aleatorio2)
        intervalo2 = setInterval(function(){
            if (llenando <= minimo_porcentaje){
                llave1 = true;
                llave2 = false;
                console.log("Llave 2 cerrada y ahora se abre la llave 1");
                tanque1();
                clearInterval(intervalo2);
            }
            else if(llenando2 >= maximo_porcentaje2){
                llave2 = false;
                llave3 = true;
                console.log("Llave 2 cerrada y ahora se abre la llave 3");
                terceraLlave();
                clearInterval(intervalo2);
            }
            else if((llenando <= minimo_porcentaje) && (llenando2 >= maximo_porcentaje2)){
                llave1 = true;
                llave3 = true;
                llave2 = false;
                console.log("El tanque 1 esta lo suficientemente vacio y el tanque 2 esta lleno, se abre la llave 1 y la llave 3");
                llave_1_y_llave3();
                clearInterval(intervalo2);
            }
            else{
                tiempo_transcurrido += 1;
                llenando -= numero_aleatorio2;
                llenando2 += numero_aleatorio2;
                console.log("Ha pasado " + tiempo_transcurrido + " segundos y el tanque 1: " + llenando + " litros de agua tanque 2: " + llenando2 + " litros de agua");
            }
        },1000);
    }
    
    function terceraLlave(){
        console.log("Numero de la tercera llave generada: " + vaciando_tanque);
        intervalo3 = setInterval(function() {
            if(llenando2 <= minimo_porcentaje){
                llave3 = false;
                llave2 = true;
                console.log("Llave 3 cerrada y se abre la segunda llave");
                tanque2();
                clearInterval(intervalo3);
            }
            else{
                tiempo_transcurrido += 1;
                llenando2 -= vaciando_tanque;
                console.log("Ha pasado " + tiempo_transcurrido + " segundos y la llave 3 sigue abierta y el tanque 2 se esta vaciando (tiene " + llenando2 + " litros de agua)" + " tanque 1: " + llenando);
            }
        },1000);
    }
    
    function llave_1_y_llave3(){
        intervalo4 = setInterval(function(){
            if(llenando2 <= minimo_porcentaje2){
                if (llenando >= maximo_porcentaje){
                    console.log("Se lleno el tanque 1, se cierra la llave y se abre la llave 2");
                    llave2 = true;
                    tanque2();
                    clearInterval(intervalo4);
                }
                else{
                    tiempo_transcurrido += 1;
                    llenando += numero_aleatorio;
                    console.log("Ha pasado " + tiempo_transcurrido + " segundos y el tanque 1 se esta llenando " + " tanque 1: " + llenando + " litros de agua");
                }
            }
            else{
                tiempo_transcurrido += 1;
                llenando2 -= vaciando_tanque;
                console.log("Ha pasado " + tiempo_transcurrido + " segundos y la llave 3 sigue abierta junto con la llave 1 ("+ llenando +" litros de agua tanque 1 y " + llenando2 + " litros de agua tanque 2");
            }
            
        },1000);
    }
    
}


