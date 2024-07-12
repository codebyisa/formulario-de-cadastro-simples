// scripts.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Evita o comportamento padrão do formulário

    //Aqui pode adicionar a lógica para enviar todos os dados do formulário usando AJAX/fetch

    //Redireciona para a página de sucesso
    window.location.href = 'sucess.html';
});