/* Montagem otimizada */

document.getElementById('form').addEventListener("submit", (evento) => {
    evento.preventDefault();
    window.location.href = "mailto:jonathasmrt@gmail.com?Subject=" + document.getElementById('f_nome').value + "&Body=" + document.getElementById('f_mensagem').value;
})

/* Montagem inicial

const form = document.getElementById('form');
const nome = document.getElementById('f_nome');
const mensagem = document.getElementById('f_mensagem');

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    value()
    mailto()
}

function value() {
    const nomeValue = nome.value;
    const mensagemValue = mensagem.value;
    mailto (nomeValue, mensagemValue);
}

function mailto (nome, mensagem) {
    window.location.href = "mailto:jonathasmrt@gmail.com?Subject=" + nome + "&Body=" + mensagem;
} 
*/
