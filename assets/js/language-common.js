const availableLanguages = [
    'zh-CN',
    'en-US',
];

const getLanguage = () => {

    const localStorageLanguage = localStorage.getItem('sudo-tv-language');
    if (localStorageLanguage) {
        return localStorageLanguage;
    }

    const language = window.navigator.userLanguage || window.navigator.language;
    localStorage.setItem('sudo-tv-language', language);

    return language;
};

const setLanguage = (language) => {

    localStorage.setItem('sudo-tv-language', language);

    const path = window.location.pathname;

    if (availableLanguages.some((each) => {
        return path.startsWith(`/${each}`);
    })) {
        window.location.href = `/${language}${path.substring(6)}${window.location.search}`;
    }
};
