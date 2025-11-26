let puntaje = localStorage.getItem("puntaje");
let total = localStorage.getItem("totalP");

const resultado = document.getElementById("resultado");

if(puntaje <= 4){
    resultado.textContent = `${puntaje}/${total} , Te falta mucho pibe, ponete a estudiar`;
} else if(puntaje > 4 && puntaje<=7){
    resultado.textContent = `${puntaje}/${total} , No estuviste mal, pero podrias saber más`;
} else{
    resultado.textContent = `${puntaje}/${total} , Excelente! Habra sido suerte? O realmente sabes tanto?`
}