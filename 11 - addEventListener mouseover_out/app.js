



const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
/*declare new const*/
const listItem = document.getElementsByTagName('li'); 
const list = document.getElementById('list');

button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
    runFunction()
})

removeBtn.addEventListener('click', () => {
    let listItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];

    list.removeChild(listItem);
})