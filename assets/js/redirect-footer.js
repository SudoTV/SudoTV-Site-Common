(() => {

    const originLinks = document.querySelectorAll('a[data-origin]');

    for (const link of originLinks) {

        if (link.dataset.target === link.dataset.origin) {

            return;
        }

        link.addEventListener('click', (event) => {

            event.preventDefault();

            window.location.assign(`${link.href}?origin=${link.dataset.origin}`);
        });
    }
})();
