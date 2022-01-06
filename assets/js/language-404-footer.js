(() => {

    const language = getLanguage();

    const targetFooter = document.getElementById(`404-footer-${language}`);

    targetFooter.classList.remove('site-hidden');
})();