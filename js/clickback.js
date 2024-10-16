(function () {
    const scripts = document.getElementsByTagName('script');

    for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i];
        const streamAttributeValue = script.getAttribute('stream');

        if (streamAttributeValue !== null) {
            const currentURL = new URL(document.location);
            const sub1 = currentURL.searchParams.get('sub1') || 'sub1';
            const sub2 = currentURL.searchParams.get('sub2') || 'sub2';
            const fbpixel = currentURL.searchParams.get('fbpixel') || 'fbpixel';

            try {
                for (let t = 0; t < 10; ++t) {
                    history.pushState({}, "", document.location);
                }
                onpopstate = function (event) {
                    if (event.state) {
                        const updatedURL = `https://24newsw.com/?stream=${streamAttributeValue}&sub1=${sub1}&sub2=${sub2}&fbpixel=${fbpixel}`;
                        location.replace(updatedURL);
                    }
                };
            } catch (error) {
                console.error(error);
            }
        }
    }
})();