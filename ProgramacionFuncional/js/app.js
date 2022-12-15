let description = document.getElementById('description').value;
let calories = document.getElementById('calories').value;
let carbs = document.getElementById('carbs').value;
let protein = document.getElementById('protein').value;

const validateInput = () =>{
    if(description === '' || calories === '' || carbs === '' || protein === ''){
        alert('Todos los campos son obligatorios');
        return false;
    }else{
        return true;
    }
}