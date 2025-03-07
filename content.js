function handleButtonClick(event) {
    var input = document.querySelector('input[placeholder="Kazda kolumna"]');

    if (input) {
        input.value = event.target.innerText.trim();
        input.dispatchEvent(new Event('input'));
    }
}

function observeButtons() {
    var buttons = document.querySelectorAll('button.btn');

    buttons.forEach(function(button) {
    if (!button.hasAttribute('data-listener-added')) {
        button.addEventListener('click', handleButtonClick);
        button.setAttribute('data-listener-added', 'true'); 
    }
    });
}

function handleInputChange(event) {
    var input = event.target;
}

function observeInputChange() {
    var input = document.querySelector('input[placeholder="Kazda kolumna"]');

    if (input) {
        input.addEventListener('input', handleInputChange);
    }
}

var observer = new MutationObserver(function() {
    observeButtons(); 
    observeInputChange();  
    });
observer.observe(document.body, {
    childList: true,  
    subtree: true     
});

observeButtons();
observeInputChange();
