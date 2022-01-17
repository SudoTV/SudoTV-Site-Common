(() => {

    const language = getLanguage();

    const tempUrl = `${window.location.pathname}${window.location.search}`;

    if (language === 'zh-CN') {
        window.location.replace(`/zh-CN${tempUrl}`);
    } else {
        window.location.replace(`/en-US${tempUrl}`);
    }
})();
