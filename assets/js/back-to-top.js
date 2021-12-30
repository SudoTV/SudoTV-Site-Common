(() => {

    const goToTopButton = document.getElementById("go-to-top-button");

    console.log(goToTopButton);

    goToTopButton.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    const updateStatus = () => {

        if (document.body.scrollTop > 20
            || document.documentElement.scrollTop > 20) {

            goToTopButton.classList.remove('go-to-top-button-hidden');
        } else {

            goToTopButton.classList.add('go-to-top-button-hidden');
        }
    };

    window.addEventListener('scroll', updateStatus);
    updateStatus();
})();
