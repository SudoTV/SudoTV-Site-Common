(() => {

    const preferenceLanguage = getLanguage();
    const pageLanguage = pageCommon.language;

    if (preferenceLanguage === pageLanguage) {
        return;
    }

    const outer = document.getElementById('conflict-language-banner');

    outer.classList.remove('conflict-language-banner-outer-hidden');

    const bannerText = document.getElementById('conflict-language-banner-text');

    const bannerClose = document.getElementById('conflict-language-banner-close');

    const remain = document.getElementById('conflict-language-banner-remain');
    const jump = document.getElementById('conflict-language-banner-jump');

    const languageMap = {

        'zh-CN': {
            'zh-CN': '简体中文',
            'en-US': '英文 (美国)',
        },
        'en-US': {
            'zh-CN': 'Simplified Chinese',
            'en-US': 'English (US)',
        },
    };

    const closeMap = {

        'zh-CN': '忽略并关闭语言冲突提示',
        'en-US': 'Ignore and close language conflict banner',
    };

    const path = window.location.pathname;
    if (availableLanguages.some((each) => {
        return path.startsWith(`/${each}`);
    })) {
        jump.href = `/${preferenceLanguage}${path.substring(6)}${window.location.search}`;
    }

    remain.href = location.href;
    remain.addEventListener('click', (event) => {

        event.preventDefault();
        localStorage.setItem('sudo-tv-language', pageLanguage);

        outer.classList.add('conflict-language-banner-outer-hidden');
    });

    bannerClose.addEventListener('click', () => {

        outer.classList.add('conflict-language-banner-outer-hidden');
    });

    bannerClose.title = closeMap[preferenceLanguage];

    switch (preferenceLanguage) {
        case 'zh-CN': {

            const zhCNLanguageMap = languageMap['zh-CN'];

            bannerText.innerHTML = [
                "当前显示的是 <strong>",
                zhCNLanguageMap[pageLanguage],
                "</strong> 的页面，与您的偏好语言不同。",
            ].join("");

            jump.innerHTML = [
                "切换到您偏好语言 <strong>",
                zhCNLanguageMap[preferenceLanguage],
                "</strong> 的页面。",
            ].join("");
            remain.innerHTML = [
                "将您的偏好语言切换为 <strong>",
                zhCNLanguageMap[pageLanguage],
                "【",
                languageMap[pageLanguage][pageLanguage],
                "】",
                "</strong>。",
            ].join("");
            break;
        }
        case 'en-US': {

            const enUSLanguageMap = languageMap['en-US'];

            bannerText.innerHTML = [
                "Displaying page with <strong>",
                enUSLanguageMap[pageLanguage],
                "</strong>, which is not your preference.",
            ].join("");

            jump.innerHTML = [
                "Redirect to use your preference language <strong>",
                enUSLanguageMap[preferenceLanguage],
                "</strong>.",
            ].join("");
            remain.innerHTML = [
                "Change your preference language to <strong>",
                enUSLanguageMap[pageLanguage],
                " (",
                languageMap[pageLanguage][pageLanguage],
                ")",
                "</strong>.",
            ].join("");
            break;
        }
        default: return;
    }
})();