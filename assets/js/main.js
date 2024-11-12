"strict";

const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");

//construyendo menu
document.addEventListener("DOMContentLoaded", () => {
  eventos();
});

const eventos = () => {
  menu.addEventListener("click", abrirMenu);
};

const abrirMenu = () => {
  navegacion.classList.remove("ocultar");
  botonCerrar();
};

//boton cerrar
const botonCerrar = () => {
  const btnCerrar = document.createElement("p");
  btnCerrar.textContent = "x";
  btnCerrar.classList.add("btn-cerrar");

  navegacion.appendChild(btnCerrar);
};

//GG

//Guillermo
