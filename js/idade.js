idadeHTML = document.getElementById("idade");
const dataAtual = new Date;
const dataNascimento = new Date('01 16 1998');

calculaIdade()

function calculaIdade() {
    if (dataAtual.getMonth() + 1 > dataNascimento.getMonth() + 1) {
       var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
       idadeHTML.innerHTML = String(idade);
    }   
    if (dataAtual.getMonth() + 1 == dataNascimento.getMonth() + 1) {
        if (dataAtual.getDate() < dataNascimento.getDate()) {
        var idade = dataAtual.getFullYear() - dataNascimento.getFullYear() - 1;
        idadeHTML.innerHTML = String(idade);
    }
        if (dataAtual.getDate() >= dataNascimento.getDate()) {
        var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
        idadeHTML.innerHTML = String(idade);
    }
    }
    if (dataAtual.getMonth() + 1 < dataNascimento.getMonth() + 1) {
        var idade = dataAtual.getFullYear() - dataNascimento.getFullYear() - 1;
        idadeHTML.innerHTML = String(idade);
     }   
}
