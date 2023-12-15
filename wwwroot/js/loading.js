function showLoadingOverlay(targetElement) {
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';

    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';

    overlay.appendChild(spinner);

    targetElement.appendChild(overlay);
}

function hideLoadingOverlay(targetElement) {
    const overlay = targetElement.querySelector('.loading-overlay');

    if (overlay) {
        targetElement.removeChild(overlay);
    }
}

function handleTransition(targetElement, delay) {
    showLoadingOverlay(targetElement);

    setTimeout(function () {
        hideLoadingOverlay(targetElement);
        targetElement.style.display = 'block';
    }, delay);
}

document.getElementById('sign-up').addEventListener('click', function () {
    handleTransition(document.getElementById('signup-popup'), 100);
});

document.getElementById('sign-in').addEventListener('click', function () {
    handleTransition(document.getElementById('login'), 100);
});
