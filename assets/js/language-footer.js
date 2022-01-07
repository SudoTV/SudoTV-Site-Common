(() => {

    const languageSelects = document.querySelectorAll('.language-select');

    for (const languageSelect of languageSelects) {

        languageSelect.value = getLanguage();

        languageSelect.addEventListener('change', (event) => {

            setLanguage(event.target.value);
        });
    }
})();
