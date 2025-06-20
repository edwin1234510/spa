import * as CategoriaControlador from "./view/categoria/ControladorCategoria.js";
import * as ProductoControlador from "./view/producto/ControladorProducto.js";


function contenido() {
  const hash = window.location.hash.substring(1);

  let objeto = [
    {
      nombre: "categoria",
      ruta: `./src/view/categoria/index.html`,
      controlador: CategoriaControlador.init
    },
    {
      nombre: "producto",
      ruta: `./src/view/producto/index.html`,
      controlador: ProductoControlador.init
    }
  ]
  console.log(objeto)
  llamar(hash,objeto)
}

function llamar(hash,objeto) {
  objeto.forEach(element => {
    if (hash == element.nombre) {
      fetch(element.ruta).then((respuesta) => {
        respuesta.text().then(html => {
          document.querySelector('.contenido').innerHTML = html;
          element.controlador();
        })
      })
    }
  });
}

window.addEventListener('hashchange', contenido);
window.addEventListener('DOMContentLoaded', contenido);

