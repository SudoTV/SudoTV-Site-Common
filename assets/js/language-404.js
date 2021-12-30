const language = getLanguage();

(() => {
    const path = window.location.pathname;

    if (availableLanguages.some((each) => {
        return path.startsWith(`/${each}`);
    })) {

        document.write(originalContent);
        return;
    }

    document.write(`Redirecting`);

    const tempUrl = `${window.location.pathname}${window.location.search}`;

    if (language === 'zh-CN') {
        window.location.href = `/zh-CN${tempUrl}`;
    } else {
        window.location.href = `/en-US${tempUrl}`;
    }
})();
