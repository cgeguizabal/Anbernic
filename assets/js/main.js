"strict";

const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const btnTodos = document.querySelector('.Todos');
const btnConsola = document.querySelector('.Consola');
const btnControlador = document.querySelector('.Controlador');
const btnAccesorio = document.querySelector('.Accesorio');
const contenedorArticulos = document.querySelector('.articulos');

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
const botonCerrar = () => {
  const btnCerrar = document.createElement("p");
  btnCerrar.textContent = "x";
  btnCerrar.classList.add("btn-cerrar");

  navegacion.appendChild(btnCerrar);
};

//GG


// Observador para la carga de imágenes cuando entran en la vista


const observarImagenes = () => {
  const imagenes = document.querySelectorAll("img[data-src]");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const imagen = entry.target;
        imagen.src = imagen.dataset.src;  // Carga la imagen
        imagen.onload = () => {
          imagen.classList.add("loaded"); // Aplica el efecto de desvanecimiento y deslizamiento
        };
        observer.unobserve(imagen);  // Deja de observar la imagen una vez cargada
      }
    });
  });

  imagenes.forEach(imagen => {
    observer.observe(imagen);  // Comienza a observar cada imagen
  });
};

const articulos = () =>{
  let articulosArreglo =[];
  const articulos = document.querySelectorAll('.articulo-individual');
  articulos.forEach(articulos=> articulosArreglo = [...articulosArreglo, articulos]);
  const Consola= articulosArreglo.filter(Consola=>Consola.getAttribute('data-articulo') === 'Consola');
  const Controlador= articulosArreglo.filter(Controlador=>Controlador.getAttribute('data-articulo') === 'Controlador');
  const accesorio= articulosArreglo.filter(accesorio=>accesorio.getAttribute('data-articulo') === 'accesorio');
  mostrarArticulos(Consola, Controlador, accesorio, articulosArreglo);

}

const mostrarArticulos = (Consola, Controlador, accesorio, Todos) =>{
  btnConsola.addEventListener('click', ()=>{
    limpiarHtml(contenedorArticulos);
    Consola.forEach(Consola=> contenedorArticulos.appendChild(Consola));
  })

  btnControlador.addEventListener('click', ()=>{
    limpiarHtml(contenedorArticulos);
    Controlador.forEach(Controlador=> contenedorArticulos.appendChild(Controlador));
  })

  btnAccesorio.addEventListener('click', ()=>{
    limpiarHtml(contenedorArticulos);
    accesorio.forEach(accesorio=> contenedorArticulos.appendChild(accesorio));
  })
  
  
  btnTodos.addEventListener('click', ()=>{
    limpiarHtml(contenedorArticulos);
    Todos.forEach(Todos=> contenedorArticulos.appendChild(Todos));
  })
}

const limpiarHtml = (contenedor) =>{
  while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild);
  }
}

//Guillermo
