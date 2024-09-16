document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("btn-doc-visao");
    const contentSection = document.getElementById("content-section-doc-visao");
    const contentCard = document.getElementById("doc-visao-card")

    botao.addEventListener("click", function (){
        fetch('./content/docvisao.html').then(function (response) {
            if (response.ok) {
                return response.text();
            }
            contentSection.appendChild(document.createElement("p").innerText("ERRO"))
            throw response;
        }).then(function (text) {
            contentCard.style.margin = 0;
            contentSection.innerHTML = text;
        })
    });
})


// https://gomakethings.com/how-to-load-html-from-another-page-with-vanilla-javascript/