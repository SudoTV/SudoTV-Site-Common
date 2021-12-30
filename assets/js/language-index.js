const language = getLanguage();

(() => {

    const tempUrl = `${window.location.pathname}${window.location.search}`;

    if (language === 'zh-CN') {
        window.location.href = `/zh-CN${tempUrl}`;
    } else {
        window.location.href = `/en-US${tempUrl}`;
    }
})();
