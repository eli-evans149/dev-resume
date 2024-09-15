$('document').ready(function(){
    #darkModeToggle.value = getDarkModeValue();
});

function toggleDarkMode(): void {
    if (#darkModeToggle.value === 'dark') {
        
    } else {

    }
}

function getDarkModeValue(): string {
    if (isDarkModeEnabled()) {
        return 'dark'
    } else {
        return 'light'
    }
}

function isDarkModeEnabled(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}