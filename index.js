function Login(){
    const buttonElement =(document.querySelector('.btn-login'));
    if(buttonElement.innerText === 'Login'){
        buttonElement.innerHTML = 'Logged'
    }else{
        buttonElement.innerHTML = 'Login'
    }
}

