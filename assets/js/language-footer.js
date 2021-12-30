(() => {

    document.getElementById('language-select').value = getLanguage();

    document.getElementById('language-select').addEventListener('change', (event) => {

        setLanguage(event.target.value);
    });
})();
