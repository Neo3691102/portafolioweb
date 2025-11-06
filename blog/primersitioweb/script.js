const botonNext = document.getElementById("next");
const botonLeft = document.getElementById("left");

const cambiarArticulo = (idMostrar) => {
  const articulos = document.querySelectorAll("article");
  console.log(articulos);
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
  const articulos = document.querySelectorAll("article");
  let artActual = "";
  const orden = ["introduccion", "herramientas", "pasos"]; // orden deseado

  articulos.forEach(art => {
    const estilo = window.getComputedStyle(art).display;
    if (estilo === "flex") {
      console.log(`Artículo visible: ${art.id}`);
      const indiceActual = orden.indexOf(art.id);
      const siguienteIndice = (indiceActual + 1) % orden.length; // vuelve al primero al final
      artActual = orden[siguienteIndice];
    }
  });

  console.log(`Siguiente artículo: ${artActual}`);
  cambiarArticulo(artActual);
});


botonLeft.addEventListener("click", () => {
  const articulos = document.querySelectorAll("article");
  let artActual = "";

  articulos.forEach(art => {
    const estilo = window.getComputedStyle(art).display;
    if (estilo === "flex") {
      console.log(`Artículo visible: ${art.id}`);
      artActual = art.id === "introduccion" ? "herramientas" : "introduccion";
    }
  });

  console.log(`Siguiente artículo: ${artActual}`);
  cambiarArticulo(artActual);
});

const enlaceIntro = document.getElementById("enlaceintroduccion");

enlaceIntro.addEventListener("click", () => {
  cambiarArticulo("introduccion");
});
