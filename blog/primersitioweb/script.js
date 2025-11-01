//articulos
const articuloH = document.getElementById("herramientas");
const articuloI = document.getElementById("introduccion");

const botonNext = document.getElementById("next");
const botonLeft = document.getElementById("left");

const cambiarArticulo = (idMostrar) => {
  const articulos = document.querySelectorAll("article");

  articulos.forEach(articulo => {
    if (articulo.id === idMostrar) {
      articulo.style.display = "flex";
      articulo.style.flexDirection = "column";
      articulo.style.alignItems = "center";
      articulo.style.justifyContent = "center";
    } else {
      articulo.style.display = "none";
    }
  });
}


botonNext.addEventListener("click", () => {
  cambiarArticulo("herramientas");
});
