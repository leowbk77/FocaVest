let cards = document.querySelectorAll('.card');
const isCollapsed = 'is-collapsed';
const isExpanded = 'is-expanded';
const isInactive = 'is-inactive';

// controla o toggle dos cards
function toggle(card) {
    // verifica se o card está colapsado
    if (card.classList.contains(isCollapsed)) {
        cards.forEach(function (c) {
            // colapsa outros cards expandidos e os torna inativos
            if (c !== card) {
                c.classList.remove(isExpanded);
                c.classList.add(isCollapsed, isInactive);
            }
        });
        // expande o card clicado
        card.classList.remove(isCollapsed);
        card.classList.add(isExpanded);
    } else {
        // do contrário colapsa o card aberto e remove a inatividade dos outros cards
        card.classList.remove(isExpanded);
        card.classList.add(isCollapsed);
        cards.forEach(function (c) {
            c.classList.remove(isInactive)
        });
    }
}

// aciona o toggle em cada card e botoes de fechar
cards.forEach(function (card) {
    let expander = card.querySelector('.js-expander');
    if (expander) {
        expander.addEventListener('click', function () {
            toggle(card);
        });
    }

    let cardExpanderCloseBtn = card.querySelector('.js-collapser');
    if (cardExpanderCloseBtn) {
        cardExpanderCloseBtn.addEventListener('click', function () {
            toggle(card);
        });
    }
});

// temp
//console.log(cards)