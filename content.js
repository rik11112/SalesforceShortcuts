document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === '/') {
        const quickFindInputs = document.querySelectorAll('input[placeholder="Quick Find"]');

        // Iterate through all matching elements
        quickFindInputs.forEach(quickFindInput => {
            const computedStyle = window.getComputedStyle(quickFindInput);

            // Check if the element is visible
            const isVisible = computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden';

            if (isVisible) {
                quickFindInput.focus();
                event.preventDefault(); // Prevent the default Ctrl+/ behavior (Like typing '/')
                return; // Stop iterating after focusing on the first visible element
            }
        });
    }
});
