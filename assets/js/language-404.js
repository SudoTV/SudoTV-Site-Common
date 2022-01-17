(() => {

    const language = getPageLanguageByPath() ?? getLanguage();

    const path = window.location.pathname;

    if (availableLanguages.some((each) => {
        return path.startsWith(`/${each}`);
    })) {

        document.write(originalContent[language]);

        if (language === 'zh-CN') {
            document.title = "404 - 页面未找到 | sudo.tv";
        } else {
            document.title = "404 - Page not found | sudo.tv";
        }
        return;
    }

    document.write(`Redirecting`);

    const tempUrl = `${window.location.pathname}${window.location.search}`;

    if (language === 'zh-CN') {
        window.location.replace(`/zh-CN${tempUrl}`);
    } else {
        window.location.replace(`/en-US${tempUrl}`);
    }
})();
