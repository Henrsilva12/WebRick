document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if(username === 'username' && password === 'username'){
        console.log('verificando username e password')
        alert('Por favor, preencha todos os campos.');
    }
    else if(username !== 'username' || password !== 'username') {
        alert('Usuário ou senha não reconhecidos.')
    }
    else {
        window.location.href = 'home.html';

    }

});
