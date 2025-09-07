  let tareas = [];

  function agregarTarea() {
    const input = document.getElementById("nuevaTarea");
    const mensaje = document.getElementById("mensaje");
    const textoTarea = input.value.trim();

    if (textoTarea === "") {
      mensaje.textContent = "Por favor, escribe una tarea antes de agregar.";
      return;
    }

    mensaje.textContent = "";

    const nuevaTarea = {
      id: Math.floor(Math.random() * 100000),
      texto: textoTarea,
      fecha: new Date().toLocaleString()
    };

    tareas.push(nuevaTarea);
    input.value = "";
    mostrarTareas();
  }

  function eliminarTarea(id) {
    tareas = tareas.filter((tarea) => tarea.id !== id);
    mostrarTareas();
  }

  function mostrarTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    tareas.forEach((tarea) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <span>
          ${tarea.texto} <small class="text-muted">(${tarea.fecha})</small>
        </span>
        <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${tarea.id})">Eliminar</button>
      `;
      lista.appendChild(li);
    });
  }

