let piedra = document.getElementById('piedra');
//creando el elemeto o variable piedra que se usara en una funcion
let papel = document.getElementById('papel');
//creando el elemeto o variable papel que se usara en una funcion
let tijera = document.getElementById('tijera');
//creando el elemeto o variable tijeras que se usara en una funcion

const bot = () => {
    let opciones = ['piedra', 'papel', 'tijera'];
    return opciones[Math.floor(Math.random() * opciones.length)];
};
//crea una funcion bot que retorna un elemento aleatorio de la lista opciones

piedra.addEventListener('click',()=>{
        console.log('Usaste Piedra');
  });
  //el elemento piedra esta llamado un click Cada vez que el escuche un click
  // enviara un mensaje en la consola diciendole que el jugador uso piedra

  papel.addEventListener('click',()=>{
    console.log('Usaste Papel');
  });
  //el elemento papel esta llamado un click. Cada vez que el escuche un click 
  //enviara un mensaje en la consola diciendole que el jugador uso papel

  tijera.addEventListener('click',()=>{
    console.log('Usaste Tijera');
  });
//el elemento tijera esta llamado un click cada vez que el escuche un click
  //enviara un mensaje en la consola diciendole que el jugador uso tijera

const respuestaEntre = (jugador, computador) => {
    if (jugador === computador) {
        return 'Empate';
    }
//crea una funcion respuestaEntre recibe 
//como parametros jugador y computador y devuelve un valor
//dependiendo de la comparacion
    if (jugador === 'piedra' && computador === 'papel') {
        return 'Gano el bot!';
    }
    if (jugador === 'piedra' && computador === 'tijera') {
        return 'Ganaste!';
    }
    if (jugador === 'papel' && computador === 'piedra') {
        return 'Ganaste!';
    }
    if (jugador === 'papel' && computador === 'tijera') {
        return 'Gano el bot!';
    }
    if (jugador === 'tijera' && computador === 'piedra') {
        return 'Gano el bot!';
    }
    if (jugador === 'tijera' && computador === 'papel') {
        return 'Ganaste!';
    }
};
// la funcion Resultados se encarga de mostrar en la pantalla 
//los resultados de la elección de cada uno y el resultado del juego

const Resultados = (jugador, computador) => {
    const resultadoJugador = document.getElementById('Jugador resultado');
    const resultadoComputador = document.getElementById('Computador resultado');
    const resultadoJuego = document.getElementById('Juego resultado');

// Resultados() => Esta funcion recibe como argumentos los valores
// de jugador y computador

    resultadoJugador.innerHTML = jugador;
    resultadoComputador.innerHTML = computador;
    resultadoJuego.innerHTML = respuestaEntre(jugador, computador);
};
// juega() => esta funcion recibe como argumento la opcion del jugador 
//y genera una opción aleatoria para el computador luego llama a la funcion
// Resultados() pasandole como argumentos las opciones del jugador y del computador
const juega = (optionJugador) => {
    const optionComputador = bot();
    Resultados(optionJugador, optionComputador);
};
// esta funcion se encarga de iniciar el juego desde aquí se definen
// los eventos de click (cuando haga click en piedra, papel o tijera)
const inicioJuego = () => {
    piedra.addEventListener('click', function(){
        juega('piedra');
    });
// cuando el usuario hace click se ejecuta la función juega pasando
// como parametro la elección del usuario
    papel.addEventListener('click', function(){
        juega('papel');
    });

    tijera.addEventListener('click', function(){
        juega('tijera');
    });
};
// el bot tambien hace su elección y se ejecuta la funcion Resultados,
// pasando como parametros la elección del usuario la elección del bot y 
//la función que determina el resultado

inicioJuego();
// inicioJuego() -> esta función agrega un evento al hacer clic en los elementos
//con los ids piedra papel y tijera. 