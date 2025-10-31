const botonNext = document.getElementById("next");
const botonLeft = document.getElementById("left");

botonNext.addEventListener("click", () => {
    console.log("boton next!!!");
    const articuloH = document.getElementById("herramientas");
    const articuloI = document.getElementById("introduccion");
    articuloI.style.display = "none";
    articuloH.style.display = "flex";
    articuloH.style.flexDuirection = "column";
    articuloH.style.alignItems = "center";
    articuloH.style.justifyContent = "center";
})