function Login(){
    const buttonElement =(document.querySelector('.btn-login'));
    if(buttonElement.innerText === 'Login'){
        buttonElement.innerHTML = 'Logged'
    }else{
        buttonElement.innerHTML = 'Login'
    }
}

const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});