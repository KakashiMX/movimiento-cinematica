// Obtener valores del usuario
const form = document.getElementById('form');
const inputs = Array.from(form.children);
const tableTime = document.getElementById('tableTime');
const tablePosition = document.getElementById('tablePosition');
const tableBody = document.getElementById('tableBody');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const velocity = parseFloat(inputs[0].lastElementChild.value);
    const initialTime = parseFloat(inputs[1].lastElementChild.value);
    const finalTime = parseFloat(inputs[2].lastElementChild.value);
    const increment = parseFloat(inputs[3].lastElementChild.value);

    const fragment = document.createDocumentFragment();

    let position;

    for( let i = initialTime; i<= finalTime; i+= increment){
        const tableValues = document.createElement('tr');
        position = velocity*(i);
        tableValues.innerHTML =  `
        <tr>
        
            <td class="body_row">${i.toFixed(2)}</td>
            <td class="body_row">${position.toFixed(2)}</td>
        </tr>
        `
        tableValues.classList.add("table_row");
        fragment.appendChild(tableValues )
    }

    tableBody.appendChild( fragment );


});