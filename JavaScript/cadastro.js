document.querySelector('.cadastro-form').addEventListener('submit', function (event) {
  event.preventDefault(); // O envio de formulário é impedido

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const passwordconf = document.getElementById('passwordconf').value.trim();

  if(password === passwordconf){
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("passwordConfirm", passwordconf);

    window.location.href = '/Home/home.html';
  }else {
    alert('Verifique se as senhas estão iguais.');
  }
});