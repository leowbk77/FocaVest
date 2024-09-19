document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    const contentLoaded = 'content-loaded';

    cards.forEach(function (card) {
        let expander = card.querySelector('.js-expander');
        let contentSection = card.querySelector('.content-section');
        if (expander) {
            expander.addEventListener('click', function () {
                if (!card.classList.contains(contentLoaded)) {
                    fetch('./content/'+ contentSection.id +'.html').then(function (response) {
                        if (response.ok){
                            return response.text();
                        }
                        //
                        // DEFINIR TRATAMENTO DE ERRO AQUI - ou try catch?
                        console.log('erro.')
                        //
                        throw response;
                    }).then(function (text) {
                        contentSection.innerHTML = text;
                    });
                }
            });
        }
    });
});
// https://gomakethings.com/how-to-load-html-from-another-page-with-vanilla-javascript/