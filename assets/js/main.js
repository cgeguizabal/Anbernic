"strict";

const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const btnTodos = document.querySelector(".Todos");
const btnConsola = document.querySelector(".Consola");
const btnControlador = document.querySelector(".Controlador");
const btnAccesorio = document.querySelector(".Accesorio");
const contenedorArticulos = document.querySelector(".articulos");

//construyendo menu
document.addEventListener("DOMContentLoaded", () => {
  eventos();
  observarImagenes();
  articulos();
});

const eventos = () => {
  menu.addEventListener("click", abrirMenu);
};

const abrirMenu = () => {
  navegacion.classList.remove("ocultar");
  botonCerrar();
};

//boton cerrar
// const botonCerrar = () => {
//   const btnCerrar = document.createElement("p");
//   btnCerrar.textContent = "x";
//   btnCerrar.classList.add("btn-cerrar");

//   navegacion.appendChild(btnCerrar);
// };

// Botón cerrar
const botonCerrar = () => {
  // Revisa si ya existe un botón cerrar para evitar duplicados
  if (!navegacion.querySelector(".btn-cerrar")) {
    const btnCerrar = document.createElement("p");
    btnCerrar.textContent = "x";
    btnCerrar.classList.add("btn-cerrar");

    // Añadir el botón cerrar al menú
    navegacion.appendChild(btnCerrar);

    // Agregar evento para cerrar el menú al hacer clic en el botón
    btnCerrar.addEventListener("click", () => {
      navegacion.classList.add("ocultar"); // Oculta el menú
      btnCerrar.remove(); // Elimina el botón cerrar
    });

    //Activa boton send del formulario
    document.addEventListener("DOMContentLoaded", () => {
      const button = document.getElementById("send");
      button.addEventListener("click", () => {
        Swal.fire("You're message was sent successfully");
      });
    });
  }
};

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

// Observador para la carga de imágenes cuando entran en la vista

const observarImagenes = () => {
  const imagenes = document.querySelectorAll("img[data-src]");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const imagen = entry.target;
        imagen.src = imagen.dataset.src; // Carga la imagen
        imagen.onload = () => {
          imagen.classList.add("loaded"); // Aplica el efecto de desvanecimiento y deslizamiento
        };
        observer.unobserve(imagen); // Deja de observar la imagen una vez cargada
      }
    });
  });

  imagenes.forEach((imagen) => {
    observer.observe(imagen); // Comienza a observar cada imagen
  });
};

const articulos = () => {
  let articulosArreglo = [];
  const articulos = document.querySelectorAll(".articulo-individual");
  articulos.forEach(
    (articulos) => (articulosArreglo = [...articulosArreglo, articulos])
  );
  const Consola = articulosArreglo.filter(
    (Consola) => Consola.getAttribute("data-articulo") === "Consola"
  );
  const Controlador = articulosArreglo.filter(
    (Controlador) => Controlador.getAttribute("data-articulo") === "Controlador"
  );
  const accesorio = articulosArreglo.filter(
    (accesorio) => accesorio.getAttribute("data-articulo") === "accesorio"
  );
  mostrarArticulos(Consola, Controlador, accesorio, articulosArreglo);
};

const mostrarArticulos = (Consola, Controlador, accesorio, Todos) => {
  btnConsola.addEventListener("click", () => {
    limpiarHtml(contenedorArticulos);
    Consola.forEach((Consola) => contenedorArticulos.appendChild(Consola));
  });

  btnControlador.addEventListener("click", () => {
    limpiarHtml(contenedorArticulos);
    Controlador.forEach((Controlador) =>
      contenedorArticulos.appendChild(Controlador)
    );
  });

  btnAccesorio.addEventListener("click", () => {
    limpiarHtml(contenedorArticulos);
    accesorio.forEach((accesorio) =>
      contenedorArticulos.appendChild(accesorio)
    );
  });

  btnTodos.addEventListener("click", () => {
    limpiarHtml(contenedorArticulos);
    Todos.forEach((Todos) => contenedorArticulos.appendChild(Todos));
  });
};

const limpiarHtml = (contenedor) => {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
};

//Guillermo
