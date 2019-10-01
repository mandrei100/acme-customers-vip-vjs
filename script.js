const formInput = document.querySelector('form');
const nameInput = document.querySelector('input[name=name]');
const emailInput = document.querySelector('input[name=email]');
const vipInput = document.querySelector('input[type=checkbox]');
const errorMessage = document.querySelectorAll('.error');
const button = document.querySelector('.btn')

let newCustomer = {};
let vipArray = [];

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
    console.log(nameInput.value);
    let newCustomer = {
        name: nameInput.value,
        email: emailInput.value,
        isVip: vipInput.checked
    };
    
    console.log(newCustomer);
})




button.addEventListener('submit', ev =>{
    ev.preventDefault();
    

    vipArray.push()
    

    console.log(newCustomer);
} )