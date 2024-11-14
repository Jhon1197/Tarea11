let numero =Math.floor(Math.randon() * 10) + 1;
let adivina = prompt("Adivina un numero entre 1 y 10");
if (adivina==numero){
    document.write("Felicidades, adivinaste el número");
}else {
    document.write("Lo siento no adivinaste");
}
