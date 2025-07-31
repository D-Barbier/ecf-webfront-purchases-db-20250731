const buttonSubmit = document.getElementById('buttonSubmit');
const name = document.getElementById('name');
const firstName = document.getElementById('firstName');

function cancelButtonDefault(event){
    event.preventDefault();
}

buttonSubmit.addEventListener('click', cancelButtonDefault);

