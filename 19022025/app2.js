let numeroMaquina = Math.floor(Math.random()*(10-1)-1);
console.log(numeroMaquina);

let numeroUser = parseInt(prompt("Adivina el numero entre 1 y 10"));

let vidas = 5;

while(numeroMaquina !== numeroUser && vidas >1){
    vidas--;
    numeroUser = parseint(prompt("NUmero incorrecto, intentalo nuevamente, tus vidas son:"+ vidas))
}

if(numeroMaquina == numeroUser) {
    console.log("Ganaste");

}else{
    console.log("Perdiste");
    alert("Perdiste");
}