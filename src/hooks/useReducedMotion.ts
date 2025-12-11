import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';


const getSnapshot = () => {
    return window.matchMedia(QUERY).matches;
};

const getServerSnapshot = () => {
    return false;
};

const subscribe = (callback: () => void) => {
    const mediaQuery = window.matchMedia(QUERY);
    const handleChange = () => callback();
    // Modern browsers
    if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
    } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleChange);
    }
    return () => {
        if (mediaQuery.removeEventListener) {
            mediaQuery.removeEventListener('change', handleChange);
        } else {
            mediaQuery.removeListener(handleChange);
        }
    };
};

export function useReducedMotion() {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
