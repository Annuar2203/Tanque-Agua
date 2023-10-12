var llave1 = true;
var llave2 = true;
var llave3 = true;
var capacidad_tanque = 5000;
var capacidad_tanque2 = 4000;
var maximo_porcentaje = capacidad_tanque*0.75; //Primer tanque 75%
var minimo_porcentaje = capacidad_tanque*0.50; //Primer tanque 50%
var maximo_porcentaje2 = capacidad_tanque2*0.75;
var minimo_porcentaje2 = capacidad_tanque2*0.50;
var llenando = maximo_porcentaje;
var llenando2 = 0;
var tiempo_transcurrido = 0;

var numero_aleatorio = 0;
var numero_aleatorio2 = 0;
var vaciando_tanque = 0;



var intervalo;


function detener(){
    limpiar();
    clearInterval(intervalo);
    console.log("Programa detenido");
}

var boton_iniciar = document.getElementById("boton-inicio");
var boton_parar = document.getElementById("boton-parar");

boton_iniciar.addEventListener("click",iniciar);




function limpiar(){
    llave1 = true;
    llave2 = true;
    llave3 = true;
    capacidad_tanque = 5000;
    capacidad_tanque2 = 4000;
    llenando = maximo_porcentaje;
    llenando2 = 0;
    tiempo_transcurrido = 0;

    numero_aleatorio = 0;
    numero_aleatorio2 = 0;
    vaciando_tanque = 0;
}



// alert("Revisar consola en el inspeccionar, se muestra el programa");


// tanque1();
function iniciar(){
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
        intervalo = setInterval(function(){
            if (llenando <= minimo_porcentaje){
                llave1 = true;
                llave2 = false;
                console.log("Llave 2 cerrada y ahora se abre la llave 1");
                tanque1();
                clearInterval(intervalo);
            }
            else if(llenando2 >= maximo_porcentaje2){
                llave2 = false;
                llave3 = true;
                console.log("Llave 2 cerrada y ahora se abre la llave 3");
                terceraLlave();
                clearInterval(intervalo);
            }
            else if((llenando <= minimo_porcentaje) && (llenando2 >= maximo_porcentaje2)){
                llave1 = true;
                llave3 = true;
                llave2 = false;
                console.log("El tanque 1 esta lo suficientemente vacio y el tanque 2 esta lleno, se abre la llave 1 y la llave 3");
                llave_1_y_llave3();
                clearInterval(intervalo);
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
        intervalo = setInterval(function() {
            if(llenando2 <= minimo_porcentaje){
                llave3 = false;
                llave2 = true;
                console.log("Llave 3 cerrada y se abre la segunda llave");
                tanque2();
                clearInterval(intervalo);
            }
            else{
                tiempo_transcurrido += 1;
                llenando2 -= vaciando_tanque;
                console.log("Ha pasado " + tiempo_transcurrido + " segundos y la llave 3 sigue abierta y el tanque 2 se esta vaciando (tiene " + llenando2 + " litros de agua)" + " tanque 1: " + llenando);
            }
        },1000);
    }
    
    function llave_1_y_llave3(){
        intervalo = setInterval(function(){
            if(llenando2 <= minimo_porcentaje2){
                if (llenando >= maximo_porcentaje){
                    console.log("Se lleno el tanque 1, se cierra la llave y se abre la llave 2");
                    llave2 = true;
                    tanque2();
                    clearInterval(intervalo);
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
    tanque1();

    boton_parar.addEventListener("click",detener);
}


