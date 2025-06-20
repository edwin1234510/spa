export function init() {
  console.log("controlador producto");

  fetch("http://localhost:3000/api/productos").then(response => {
    response.text().then(data => {

      const datos = JSON.parse(data)

      datos.data.forEach(element => {
        const tbody = document.querySelector(".tabla_body")
        const objeto = {
          id: element.id,
          nombre: element.nombre,
          descripcion: element.descripcion,
          precio: element.precio,
          categoria_id: element.categoria_id,
          editar: "editar",
          eliminar: "eliminar"
        }

        const fila = document.createElement("tr")
        fila.classList.add("fila")
        Object.keys(objeto).forEach(enviar => {
          const campo = document.createElement("th");
          campo.classList.add("campo")
          campo.textContent = objeto[enviar];
          fila.append(campo);
          tbody.append(fila)
        });
      });


    })
  });

}