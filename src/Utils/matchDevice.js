const TABLET = ' (min-width: 500px) and (max-width: 1100px)';
const DESKTOP = '(min-width: 1100px)';

export const isTablet = () => {
    const match = window.matchMedia( TABLET );

    if ( match.matches ) {
        return true;
    }

    return false
}

export const isMobile = () => {
    const tablet  = window.matchMedia( TABLET );
    const desktop = window.matchMedia( DESKTOP );

    if ( !tablet.matches && !desktop.matches) {
        return true;
    }

    return false
}