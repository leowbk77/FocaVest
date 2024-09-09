const botao = document.getElementById("btn");
const contentDiv = document.getElementById("ctn-1");
const titulo = document.getElementById("titulo");

const displayDoTitulo = titulo.style.display;

botao.addEventListener("click", function (){
    fetch('/content.html').then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    }).then(function (text) {
        titulo.style.display = "none"
        contentDiv.innerHTML = text;
    })
});

// https://gomakethings.com/how-to-load-html-from-another-page-with-vanilla-javascript/