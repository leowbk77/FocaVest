document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    const contentLoaded = 'content-loaded';
    const display = 'display';

    cards.forEach(function (card) {
        let expander = card.querySelector('.js-expander');
        let contentSection = card.querySelector('.content-section');
        let loadSpinner = card.querySelector('.loading');

        if (expander) {
            expander.addEventListener('click', function () {
                if (!card.classList.contains(contentLoaded)) {
                    loadSpinner.classList.add(display); // exibe o load
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
                        loadSpinner.classList.remove(display); //remove o load
                        contentSection.innerHTML = text;
                        card.classList.add(contentLoaded);
                    });
                }
            });
        }
    });
});
// https://gomakethings.com/how-to-load-html-from-another-page-with-vanilla-javascript/