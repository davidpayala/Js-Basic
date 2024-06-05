if (false){
    console.log("Hola")
} else {
    console.log("Soy falso")
}


var edad=18;
if (edad>=75) {
    console.log("Puedes votar pero no estás oligado")
} else if (edad>=18) {
    console.log("Debes votar")
} else {
    console.log("Aun no puedes votar")
}

var numero=1;
var resultado = numero === 1 ? "Soy un uno" : "No soy un uno";


// 1:Primero pensé, la computadora debe sacar 3 valores aleatorios, 
// así que comencé estableciendo una variable random para la pc
// para esto usé la funcíon Math.floor(Math.random() * 3) que haría la computadora eligiera entre
// 0 - 1 - 2
// 2: Asigné a Piedra como 0 , Papel como 1, Tijera como 2

function YanKenPo() {
    CPU_hand=Math.floor(Math.random() * 3)
    if (CPU_hand===0) {
        console.log ("La maquina sacó Piedra")
    }else if (CPU_hand===1) {
        console.log ("La maquina sacó Papel")
    }else {
        console.log ("La maquina sacó Tijera")
    }

}

// 3:Ahora que tengo lo que saca la PC, debo registrar lo que saca el usuario
//   comenzamos con la validación
function YanKenPo(Jugada) {
    if (Jugada==="Piedra"){
        User_hand=0
    }else if (Jugada=="Papel"){
        User_hand=1
    }else if (Jugada==="Tijera"){
        User_hand=2
    }else {
        User_hand=3
        console.log ("La variable debe decir como string Piedra, Papel o Tijera")
    }
    if (User_hand<3){
        CPU_hand=Math.floor(Math.random() * 3)
        if (CPU_hand===0) {
            console.log ("La maquina sacó Piedra")
        }else if (CPU_hand===1) {
            console.log ("La maquina sacó Papel")
        }else {
            console.log ("La maquina sacó Tijera")
        }
    }
}
// 4: una vez culminado la validación, procedo a la comparación y resultado
// con lapiz y papel agrupo en los casos en que gana cada la PC
// El primer If es cuando es empate, el segundo cuando gana la pc, y el tercero sería el user 
// Revisando vi que cuando hay && y || , JS primero ve el And y luego el Or, así 
// que para este problema no es necesario el parentesís

function YanKenPo(Jugada) {
    if (Jugada==="Piedra"){
        User_hand=0
    }else if (Jugada=="Papel"){
        User_hand=1
    }else if (Jugada==="Tijera"){
        User_hand=2
    }else {
        User_hand=3
        console.log ("La variable debe decir como string Piedra, Papel o Tijera")
    }
    if (User_hand<3){
        CPU_hand=Math.floor(Math.random() * 3)
        if (CPU_hand===0) {
            console.log ("La maquina sacó Piedra")

        }else if (CPU_hand===1) {
            console.log ("La maquina sacó Papel")
        }else {
            console.log ("La maquina sacó Tijera")
        }
        if (User_hand===CPU_hand){
            console.log ("Fue reñido, es un empate")
        }else if (User_hand===0 && CPU_hand === 1 || User_hand===1 && CPU_hand === 2 || User_hand===2 && CPU_hand === 0){
            console.log ("La inteligencia artificial ha ganado esta vez")
        } else {
            console.log ("Haz ganado, la humanidad puede ganar aún")    
        }
    }
}