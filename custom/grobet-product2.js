document.addEventListener('keydown', function (event) {
    if (event.key === 'F9') {
        const currentUrl = window.location.href;
        const redirectUrl = currentUrl.split('/').slice(0, 1).join('/') + '/flow/create_product_fancy';
        window.location.href = redirectUrl;
    }
});