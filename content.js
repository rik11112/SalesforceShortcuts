document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'k') {
        const succes = tryActionsUntilSuccess([
            tryFocusQuickFind, 
            tryClickAppLauncher
        ]);
        if (succes) {
            event.preventDefault();
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'm') {
        const succes = tryClickAppLauncher();
        if (succes) {
            event.preventDefault();
        }
    }
});

function tryActionsUntilSuccess(actions) {
    return actions.some(action => action());
}

function tryFocusQuickFind() {
    const quickFindInputs = document.querySelectorAll('input[placeholder="Quick Find"]');

    let found = false;

    // Iterate through all matching elements
    quickFindInputs.forEach(quickFindInput => {
        const computedStyle = window.getComputedStyle(quickFindInput);

        // Check if the element is visible
        const isVisible = computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden';

        if (isVisible) {
            quickFindInput.focus();
            found = true;
            return; // Stop iterating after focusing on the first visible element
        }
    });

    return found;
}

function tryClickAppLauncher() {
    // const appLauncher = document.querySelector('one-appnav').shadowRoot.querySelector('one-app-launcher-header').shadowRoot.querySelector('button');
    const appLauncher = null;   // can't access shadowRoot from extension
    
    if (appLauncher) {
        appLauncher.click();
        return true;
    }

    return false;
}