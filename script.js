const formInput = document.querySelector('form');
const nameInput = document.querySelector('input[name=name]');
const emailInput = document.querySelector('input[name=email]');
const vipInput = document.querySelector('input[type=checkbox]');
const errorMessage = document.querySelectorAll('.error');


formInput.addEventListener('keyup', ev => {
    console.log(errorMessage);
    if(!ev.target.value) {
        errorMessage[0].innerHTML = 'name required'
        errorMessage[1].innerHTML = 'email required'
    } else {
        errorMessage[0].innerHTML = ''
        errorMessage[1].innerHTML = ''
    }
    ev.preventDefault();
})