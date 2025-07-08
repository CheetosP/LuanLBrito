// visualizando apenas a seção que foi clicada
function mostrarSecao(secaoId) {
  const secoes = document.querySelectorAll("main section");
  secoes.forEach(secao => {
    secao.style.display = "none";
  });

  document.getElementById(secaoId).style.display = "block";
}

// simulando envio do formulário
function enviarFormulario(event) {
  event.preventDefault(); //impedindo que recarregue essa página 

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  // Exibir mensagem no site
  document.getElementById("retorno").innerText =
    `Obrigado pelo contato, ${nome}!`;

  // limpando os campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensagem").value = "";
}
