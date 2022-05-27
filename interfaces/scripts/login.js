
import { saveData } from "../../data/session/local-storage.js";

const formu = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

//contiene las expresiones para validar
const expression = {
    user: /^[0-9a-zA-Z\_\-\@]{1,25}$/,
    nameP: /^[a-zA-Z\ ]{1,50}$/,
}

const validateForm = (element)=>{

    switch(element.target.name){

        case 'user':
            validateInputs(expression.user, element.target, element.target.name);
        break;

        case 'nameP':
            validateInputs(expression.nameP, element.target, element.target.name);
        break;
    }
}

const validateInputs = (expression, inputValue, inputName)=>{

    if(expression.test(inputValue.value)){
        document.getElementById(`group-${inputName}`).classList.remove('container__form-input-invalid');
        document.getElementById(`group-${inputName}`).classList.add('container__form-input-valid');
        document.querySelector(`#group-${inputName} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group-${inputName} i`).classList.add('fa-check-circle');
        document.querySelector(`#group-${inputName} .container__form-message`). classList.remove('container__form-message-activo');
    }
    else{
        document.getElementById(`group-${inputName}`).classList.remove('container__form-input-valid');
        document.getElementById(`group-${inputName}`).classList.add('container__form-input-invalid');
        document.querySelector(`#group-${inputName} i`).classList.add('fa-times-circle');
        document.querySelector(`#group-${inputName} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group-${inputName} .container__form-message`). classList.add('container__form-message-activo');
    }
}

inputs.forEach( input => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur' , validateForm);
})

document.getElementById('btn-next').addEventListener('click', ()=>{
    
    if(formu['user'].value !== '' && formu['nameP'].value !== ''){
        
        saveData(formu['user'].value, formu['nameP'].value);
        location.assign('./public/movieGenres.html');
    }

});