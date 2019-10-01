const formInput = document.querySelector('form');
const nameInput = document.querySelector('input[name=name]');
const emailInput = document.querySelector('input[name=email]');
const vipInput = document.querySelector('input[type=checkbox]');
const errorMessage = document.querySelectorAll('.error');
const button = document.querySelector('.btn')
const nameList = document.querySelector('.nameList')


const newCustomer = {};
let vipArray = [];

vipInput.addEventListener('click', ev=> {
    console.log('checked ', ev.target.checked);
})


formInput.addEventListener('keyup', ev => {
    // create and object {name: '', value: ''}
    const { target: {name, value} } = ev;
    console.log(ev.target.name, ev.target.value);
    if (name) {
        newCustomer[name] = value;
    }
    console.log(newCustomer);
})


formInput.addEventListener('submit', ev => {
    ev.preventDefault();
    // console.log(errorMessage);
    //  if(!ev.target.value) {
    //      errorMessage[0].innerHTML = 'name required'
    //      errorMessage[1].innerHTML = 'email required'
    //  } else {
    //      errorMessage[0].innerHTML = ''
    //      errorMessage[1].innerHTML = ''
    //  }
    // console.log(ev.target.name, ev.target.value)
    //  for (let i = 0; i < ev.target.elements.length; i++){
    //      const currentEl = ev.target.elements[i];
    //      console.log(currentEl.name, currentEl.value);
    //  }
    
    //  console.log(newCustomer);
})


// const newElement = () =>{
//     let li = document.createElement('li');
//     let input = `${nameInput.value} ${emailInput.value} ${errorMessage.value}`;
//     li.appendChild(input);
//     let destroyButton = document.elementFromPoint('button');
//     var destroyButtonText = document.createTextNode("Destroy >=)");
//     destroyButton.className = "close";
//     destroyButton.appendChild(destroyButtonText);
//     li.appendChild(destroyButton);

    // ev.preventDefault();
    // console.log(nameInput.value);
    // let newCustomer = {
    //     name: nameInput.value,
    //     email: emailInput.value,
    //     isVip: vipInput.checked
    // };



//     for (var i = 0; i < close.length; i++) {
//         close[i].onclick = function(){
//             namelist = this.parentElement;
//         }
//     }
// }

// button.addEventListener('submit', ev =>{
//     ev.preventDefault();
    

//     vipArray.push()
    

//     console.log(newCustomer);
// } )