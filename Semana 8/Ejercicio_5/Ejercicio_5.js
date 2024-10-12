const notaInput = document.getElementById('notaInput');
const addButton = document.getElementById('addButton');
const filterInput = document.getElementById('filterInput');
const notaContainer = document.getElementById('notaList');

let notas = [];


const agregarNota = () => {
    const notaText = notaInput.value.trim();
    if (notaText) {
        notas.push({ text: notaText, id: Date.now() });
        notaInput.value = '';
        mostrarNotas();
    }
};


const mostrarNotas = () => {
    notaContainer.innerHTML = '';
    const filterText = filterInput.value.toLowerCase();
    notas.forEach(nota => {
        if (nota.text.toLowerCase().includes(filterText)) {
            const notaDiv = document.createElement('div');
            notaDiv.className = 'note';
            notaDiv.textContent = nota.text;

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.onclick = () => editarNota(nota.id);
            notaDiv.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.onclick = () => eliminarNota(nota.id);
            notaDiv.appendChild(deleteButton);

            notaContainer.appendChild(notaDiv);
        }
    });
};

const editarNota = (id) => {
    const nota = notas.find(n => n.id === id);
    const newText = prompt('Edita tu nota:', nota.text);
    if (newText !== null) {
        nota.text = newText.trim();
        mostrarNotas();
    }
};

const eliminarNota = (id) => {
    notas = notas.filter(nota => nota.id !== id);
    mostrarNotas();
};

filterInput.addEventListener('input', mostrarNotas);
addButton.addEventListener('click', agregarNota);
addButton.addEventListener('click', eliminarNota);
