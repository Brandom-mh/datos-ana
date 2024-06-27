let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMax=10


function asignarTextoElemento(elemento,texto)
{
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function verificarIntento()
{
    let numeroUsuario =parseInt( document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if(numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el Numero en ${intentos} ${intentos==1?'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{

        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p', 'Numero Secreto es menor')
        }else{
            asignarTextoElemento('p', 'El numero secreto es Mayor')
        }
    }
    intentos++;
    limpiarBox();

}


function reiniciarJuego (){
    /*
        Limpiar la caja
        Mensaje de inicio
        Generar nuevo numero aleatorio
        deshabilitar el boton
        Reiniciar el numero de intentos
    */
    limpiarBox();
    inicio();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecretos() {
    let numeroGenerado= Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length==numeroMax)
        {
            asignarTextoElemento('p','Ya se sortearon los numeros posibles');
        }else{

            if(listaNumerosSorteados.includes(numeroGenerado))
                {
                    return generarNumeroSecretos();
                }else {
                    listaNumerosSorteados.push(numeroGenerado);
                    return(numeroGenerado);
                }
             }

}

function inicio(){

    asignarTextoElemento('h1','Juego del Numero Secreto')
    asignarTextoElemento('p', `Indica un numero del 1-${numeroMax}`)
    numeroSecreto=generarNumeroSecretos();
    intentos=1

}
function limpiarBox(){
    document.querySelector('#valorUsuario').value='';
}

inicio();