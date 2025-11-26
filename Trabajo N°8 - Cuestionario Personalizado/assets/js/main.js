const botonEnviar = document.getElementById("enviar");

const rCorrectas = {
    p1: "e",
    p2: "c",
    p3: "d",
    p4: "c",
    p5: "c",
    p6: "b",
    p7: "a",
    p8: "d",
    p9: "e",
    p10: "c",
}

const totalP = Object.keys(rCorrectas).length;

botonEnviar.addEventListener("click", (e) => { // evita que recargue la página si es un form

    let puntaje = 0;

    let preguntas = document.querySelectorAll("input[type='radio']:checked");

    preguntas.forEach(respuesta => {
        const nombre = respuesta.name;
        const valor = respuesta.value;
        
        if(valor === rCorrectas[nombre]) {
            puntaje++;
        }
    })

    localStorage.setItem("puntaje", puntaje);
    localStorage.setItem("totalP", totalP);

    window.location.href = "../../resultados.html";
});