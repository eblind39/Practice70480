window.onload = () => {
    APPCACHE.init();
}

APPCACHE = {
    init() {
        var appCache = window.applicationCache;
        appCache.oncached = function (e) { alert("cache successfully downloaded."); };
        appCache.onupdateready = function (e) { appCache.swapCache(); };
    },
}