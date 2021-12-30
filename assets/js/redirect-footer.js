(() => {

    const originLinks = document.querySelectorAll('a[data-origin]');

    for (const link of originLinks) {

        link.addEventListener('click', (event) => {

            event.preventDefault();

            if (link.dataset.origin === 'SudoTV') {
                window.location.href = link.href;
                return;
            }

            window.location.href = `${link.href}?origin=${link.dataset.origin}`;
        });
    }
})();
