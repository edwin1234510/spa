
export async function init() {
  console.log("controlador categoria");

  fetch("http://localhost:3000/api/categorias").then(response => {
    response.text().then(data => {

      const datos = JSON.parse(data)
      const main = document.querySelector(".main");
      const boton_nuevo = document.createElement("button");
      boton_nuevo.textContent = "nuevo";
      boton_nuevo.classList.add("boton_nuevo");

      datos.data.forEach(element => {
        
        const tbody = document.querySelector(".tabla_body")
        const objeto = {
          id: element.id,
          nombre: element.nombre,
          descripcion: element.descripcion
        }

        const fila = document.createElement("tr")
        fila.classList.add("fila")
        const id = document.createElement("th");
        const nombre = document.createElement("th");
        const descripcion = document.createElement("th");
        const editar = document.createElement("th");
        const eliminar = document.createElement("th");

        const boton_editar = document.createElement("button");
        const boton_eliminar = document.createElement("button");
        

        boton_editar.textContent = "editar";
        boton_eliminar.textContent = "eliminar";
        

        boton_editar.classList.add("botones");
        boton_eliminar.classList.add("botones");
        

        id.classList.add("campo");
        nombre.classList.add("campo");
        descripcion.classList.add("campo");
        editar.classList.add("campo");
        eliminar.classList.add("campo");

        Object.keys(objeto).forEach(enviar => {

          id.textContent = objeto.id;
          nombre.textContent = objeto.nombre;
          descripcion.textContent = objeto.descripcion;

          editar.append(boton_editar);
          eliminar.append(boton_eliminar);
          fila.append(id, nombre, descripcion, editar, eliminar);
          tbody.append(fila)

        });
        
      });
      main.append(boton_nuevo)
      boton_nuevo.addEventListener("click", e =>{
        e.preventDefault();
        e.preventDefault();
        window.location.hash = "crearCategoria";
      })
    })
  });
}

