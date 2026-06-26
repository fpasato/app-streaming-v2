

document.getElementById("form-login").addEventListener("submit", async function(event) {
    event.preventDefault(); // Impede o envio do formulário para evitar recarregamento da página
    console.log("1. Formulário enviado!");

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    console.log("2. Email:", email);
    console.log("2. Senha:", senha);

    const usuario = await window.api.login(email, senha);
});