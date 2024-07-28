// scripts.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Evita o comportamento padrão do formulário

    //Aqui pode adicionar a lógica para enviar todos os dados do formulário usando AJAX/fetch

    //Redireciona para a página de sucesso
    window.location.href = 'sucess.html';
});

  $(document).ready(function() {
    $('#dataNascimento').datepicker({
      dateFormat: 'dd/mm/yy', // Formato da data
      changeYear: true,       // Permite selecionar o ano
      yearRange: '1900:2024'  // Define o intervalo de anos
      // Outras opções podem ser adicionadas conforme necessário
    });
  });
