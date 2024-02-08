document.addEventListener('keydown', function (event) {
    if (event.key === 'F9') {
        const newProductFlowButton = document.querySelector('a[title="Nieuw Product Flow"]');
        if (newProductFlowButton) {
            newProductFlowButton.click();
        } else {
            document.querySelector("a[title='New'], a[title='Nieuw']")?.click();
        }
    }
});