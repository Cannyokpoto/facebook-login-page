

/*
let password = document.getElementById('password');
let toggle = document.getElementById('toggle');

function ShowHide(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        toggle.classList.add('hide')
    }
    else{
        password.setAttribute('type','password');
        toggle.classList.remove('hide')
    }
}
 
*/


let password = document.getElementById('password');
let eye = document.getElementById('toggle');

function ShowHide(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        eye.setAttribute('src', './eye-slash-solid.svg');
    }
    else{
        password.setAttribute('type', 'password');
        eye.setAttribute('src', './eye-solid.svg');
    }
}