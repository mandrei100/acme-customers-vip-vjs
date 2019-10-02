const formInput = document.querySelector('form');
const nameInput = document.querySelector('input[name=name]');
const emailInput = document.querySelector('input[name=email]');
const vipInput = document.querySelector('input[type=checkbox]');
const errorMessage = document.querySelectorAll('.error');
const button = document.querySelector('.btn');
const nameList = document.querySelector('.nameList');


const newCustomer = {};
const customerArray = [];
const vipArray = [];

console.log(customerArray);

formInput.addEventListener("keyup", ev =>{
    if(!ev.target.value) {
        errorMessage[0].innerHTML = 'name required'
        errorMessage[1].innerHTML = 'email required'
    } else {
        errorMessage[0].innerHTML = ''
        errorMessage[1].innerHTML = ''
    }
})


vipInput.addEventListener('click', ev=> {
    console.log('checked ', ev.target.checked);
    
    const {target: {name, checked}} = ev;
    if (checked) {
        newCustomer[name] = checked;
    }
    customerArray.push(newCustomer);
    console.log(customerArray);
    
    console.log(newCustomer);
})


formInput.addEventListener('submit', ev => {
    // create and object {name: '', value: ''}
    const { target: {name, value} } = ev;
    // prior to destructuring
    // const evName = ev.target.name;
    // if (ev.target.name)
    console.log(ev.target.name, ev.target.value);
    if (name) {
        newCustomer[name] = value;
    }
    console.log(newCustomer);
})


formInput.addEventListener('submit', ev => {
    ev.preventDefault();
})

const render = () => {
    newCustomer.form
    const text = `${newCustomer.name}`;
    nameList.innerHTML = text;

}