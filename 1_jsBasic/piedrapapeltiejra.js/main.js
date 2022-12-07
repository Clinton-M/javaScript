// juego de piedra papel o tijera

var piedra = 1;
var papel = 2;
var tijera = 3;

var opcionUsuario = prompt("¿Qué eliges?\nPiedra: 1\nPapel: 2\nTijera: 3", 0);

var opcionMaquina = Math.floor(Math.random() * 3) + 1;

if (opcionUsuario == piedra) {
    if (opcionMaquina == piedra) {
        alert("Empate");
    } else if (opcionMaquina == papel) {
        alert("Perdiste");
    } else if (opcionMaquina == tijera) {
        alert("Ganaste");
    }
} else if (opcionUsuario == papel) {
    if (opcionMaquina == piedra) {
        alert("Ganaste");
    } else if (opcionMaquina == papel) {
        alert("Empate");
    } else if (opcionMaquina == tijera) {
        alert("Perdiste");
    }
} else if (opcionUsuario == tijera) {
    if (opcionMaquina == piedra) {
        alert("Perdiste");
    } else if (opcionMaquina == papel) {
        alert("Ganaste");
    } else if (opcionMaquina == tijera) {
        alert("Empate");
    }
} else {
    alert("Opción no válida");
}


// juego de piedra papel o tijera usando funciones

var piedra = 1;
var papel = 2;
var tijera = 3;

function juego(opcionUsuario) {
    var opcionMaquina = Math.floor(Math.random() * 3) + 1;
    console.log("Usuario: " + opcionUsuario);
    console.log("Maquina: " + opcionMaquina);
    if (opcionUsuario == piedra) {
        if (opcionMaquina == piedra) {
            alert("Empate");
        } else if (opcionMaquina == papel) {
            alert("Perdiste");
        } else if (opcionMaquina == tijera) {
            alert("Ganaste");
        }
    } else if (opcionUsuario == papel) {
        if (opcionMaquina == piedra) {
            alert("Ganaste");
        } else if (opcionMaquina == papel) {
            alert("Empate");
        } else if (opcionMaquina == tijera) {
            alert("Perdiste");
        }
    } else if (opcionUsuario == tijera) {
        if (opcionMaquina == piedra) {
            alert("Perdiste");
        } else if (opcionMaquina == papel) {
            alert("Ganaste");
        } else if (opcionMaquina == tijera) {
            alert("Empate");
        }
    } else {
        alert("Opción no válida");
    }
}


// rock paper scissors game

var rock = 1;
var paper = 2;
var scissors = 3;

function game(opcionUsuario) {  
    var opcionMaquina = Math.floor(Math.random() * 3) + 1;
    console.log("User: " + opcionUsuario);
    console.log("Machine: " + opcionMaquina);
    if (opcionUsuario == rock) {
        if (opcionMaquina == rock) {
            alert("Tie");
        } else if (opcionMaquina == paper) {
            alert("You lose");
        } else if (opcionMaquina == scissors) {
            alert("You win");
        }
    } else if (opcionUsuario == paper) {
        if (opcionMaquina == rock) {
            alert("You win");
        } else if (opcionMaquina == paper) {
            alert("Tie");
        } else if (opcionMaquina == scissors) {
            alert("You lose");
        }
    } else if (opcionUsuario == scissors) {
        if (opcionMaquina == rock) {
            alert("You lose");
        } else if (opcionMaquina == paper) {
            alert("You win");
        } else if (opcionMaquina == scissors) {
            alert("Tie");
        }
    } else {
        alert("Invalid option");
    }
}