import { post } from "../../../api.js";

export async function init() {
    console.log("Formulario crear categoría");
  
    const form = document.querySelector(".formularioCategoria");
    const inputNombre = document.getElementById("nombre");
    const inputDescripcion = document.getElementById("descripcion");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // Previene recarga de la página
  
      const nombre = inputNombre.value.trim();
      const descripcion = inputDescripcion.value.trim();
  
      if (!nombre || !descripcion) {
        alert("Todos los campos son obligatorios.");
        return;
      }
  
      if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        alert("El nombre solo debe contener letras.");
        return;
      }

      const objeto = {
        nombre: nombre,
        descripcion: descripcion
      }
  
      try {
        const response = await post("categorias",objeto);

        if (response.ok) {
          alert("Categoría guardada con éxito.");
          window.location.hash = "categoria"; 
        } else {
          alert("Error al guardar la categoría.");
          console.error(resultado);
        }
      } catch (error) {
        console.error("Error al enviar datos:", error);
        alert("Error en la conexión con el servidor.");
      }
    });
  }
  