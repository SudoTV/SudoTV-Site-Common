(() => {

    const crossSiteMap = {
        'zh-CN': {
            'SudoTV': {
                backLinkName: 'SudoTV 主站',
                backLinkUrl: 'https://sudo.tv/',
            },
            'SudoTV Docs': {
                backLinkName: 'SudoTV 文档主页',
                backLinkUrl: 'https://docs.sudo.tv/',
            },
            'SudoTV Bear': {
                backLinkName: 'SudoTV 熊吉主页',
                backLinkUrl: 'https://bear.sudo.tv/',
            },
            'SudoTV Project': {
                backLinkName: 'SudoTV 项目主页',
                backLinkUrl: 'https://project.sudo.tv/',
            },
            'SudoTV Resource': {
                backLinkName: 'SudoTV 资源主页',
                backLinkUrl: 'https://resource.sudo.tv/',
            },
            'SudoTV Series': {
                backLinkName: 'SudoTV 剧集主页',
                backLinkUrl: 'https://series.sudo.tv/',
            },
            'SudoTV Stamp': {
                backLinkName: 'SudoTV 贴纸主页',
                backLinkUrl: 'https://stamp.sudo.tv/',
            },
        },
        'en-US': {
            'SudoTV': {
                backLinkName: 'SudoTV Index',
                backLinkUrl: 'https://sudo.tv/',
            },
            'SudoTV Docs': {
                backLinkName: 'SudoTV Docs Index',
                backLinkUrl: 'https://docs.sudo.tv/',
            },
            'SudoTV Bear': {
                backLinkName: 'SudoTV Bear Index',
                backLinkUrl: 'https://bear.sudo.tv/',
            },
            'SudoTV Project': {
                backLinkName: 'SudoTV Project Index',
                backLinkUrl: 'https://project.sudo.tv/',
            },
            'SudoTV Resource': {
                backLinkName: 'SudoTV Resource Index',
                backLinkUrl: 'https://resource.sudo.tv/',
            },
            'SudoTV Series': {
                backLinkName: 'SudoTV Series Index',
                backLinkUrl: 'https://series.sudo.tv/',
            },
            'SudoTV Stamp': {
                backLinkName: 'SudoTV Stamp Index',
                backLinkUrl: 'https://stamp.sudo.tv/',
            },
        },
    };

    const closeMap = {

        'zh-CN': '忽略并关闭跨站提示',
        'en-US': 'Ignore and close cross site banner',
    };

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.origin === siteCommon.applicationName) {

        urlSearchParams.delete('origin');

        if ([...urlSearchParams.entries()].length === 0) {

            window.history.replaceState({}, null, window.location.pathname);
            return;
        }

        const tempUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;

        window.history.replaceState({}, null, tempUrl);
    }

    const crossSiteBanner = document.getElementById('cross-site-banner');
    const crossSiteBannerText = document.getElementById('cross-site-banner-text');
    const crossSiteBannerClose = document.getElementById('cross-site-banner-close');

    if (typeof params.origin !== 'string') {
        return;
    }

    if (params.origin === siteCommon.applicationName) {
        return;
    }

    const language = getLanguage();
    let messageQueue = [];

    const subMap = crossSiteMap[language];

    if (typeof subMap === 'undefined') {
        return;
    }

    if (subMap[params.origin] === undefined) {
        return;
    }

    crossSiteBannerClose.addEventListener('click', () => {

        urlSearchParams.delete('origin');

        if ([...urlSearchParams.entries()].length === 0) {
            window.history.replaceState({}, null, window.location.pathname);

            crossSiteBanner.classList.add('site-banner-hidden');
            return;
        }

        const tempUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;

        window.history.replaceState({}, null, tempUrl);

        crossSiteBanner.classList.add('site-banner-hidden');
    });

    crossSiteBanner.classList.remove('site-banner-hidden');

    crossSiteBannerClose.title = closeMap[language];

    if (history.length > 2) {

        switch (language) {

            case 'zh-CN': {
                messageQueue.push(
                    '您似乎自一个 SudoTV 的子网站重定向而来。如果您不想被重定向，',
                    `请点击 <a href="${subMap[params.origin].backLinkUrl}">${subMap[params.origin].backLinkName}</a> 以返回，或者 <a id="cross-site-go-back" class="cross-site-go-back">返回上一页面</a>。`,
                );
                break;
            }
            default: {
                messageQueue.push(
                    'You seem to be redirected from a SudoTV sub-website. If you don\'t want to be redirected, ',
                    `please click <a href="${subMap[params.origin].backLinkUrl}">${subMap[params.origin].backLinkName}</a> to return, or <a id="cross-site-go-back" class="cross-site-go-back">go back to previous page</a>.`,
                );
                break;
            }
        }

        let message = messageQueue.join('');
        crossSiteBannerText.innerHTML = message;

        document.getElementById('cross-site-go-back').addEventListener('click', (event) => {

            event.preventDefault();
            history.go(-1);
        });
    } else {

        switch (language) {

            case 'zh-CN': {
                messageQueue.push(
                    '您似乎自一个 SudoTV 的子网站重定向而来。如果您不想被重定向，',
                    `请点击 <a href="${subMap[params.origin].backLinkUrl}">${subMap[params.origin].backLinkName}</a> 以返回。`,
                );
                break;
            }
            default: {
                messageQueue.push(
                    'You seem to be redirected from a SudoTV sub-website. If you don\'t want to be redirected, ',
                    `please click <a href="${subMap[params.origin].backLinkUrl}">${subMap[params.origin].backLinkName}</a> to return.`,
                );
                break;
            }
        }

        let message = messageQueue.join('');
        crossSiteBannerText.innerHTML = message;
    }
})();
