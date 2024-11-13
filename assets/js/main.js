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

//Activa boton send del formulario
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("send");
  button.addEventListener("click", () => {
    Swal.fire("You're message was sent successfully");
  });
});

//Activa boton subscribe
document.addEventListener("DOMContentLoaded", () => {
  const subsButton = document.getElementById("Subscribe");
  subsButton.addEventListener("click", () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have been subscribed",
      showConfirmButton: false,
      timer: 1900,
      customClass: {
        tittle: "subscribeMessage",
      },
    });
  });
});
