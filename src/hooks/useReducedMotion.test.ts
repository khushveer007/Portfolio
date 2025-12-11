import { renderHook, act } from '@testing-library/react';
import { useReducedMotion } from './useReducedMotion';
import {
    vi,
    describe,
    it,
    expect,
    beforeAll,
    afterAll,
    Mock
} from 'vitest';

describe('useReducedMotion', () => {
    let matchMedia: Mock;
    let currentMatches = false;
    let originalMatchMedia: typeof window.matchMedia;

    beforeAll(() => {
        originalMatchMedia = window.matchMedia;

        // Mock window.matchMedia completely
        matchMedia = vi.fn().mockImplementation((query) => ({
            get matches() { return currentMatches; },
            media: query,
            onchange: null,
            addListener: vi.fn(), // Deprecated
            removeListener: vi.fn(), // Deprecated
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        }));

        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: matchMedia,
        });
    });

    afterAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: originalMatchMedia,
        });
    });

    it('should return false when prefers-reduced-motion is not matched', () => {
        currentMatches = false;
        const { result } = renderHook(() => useReducedMotion());
        expect(result.current).toBe(false);
    });

    it('should return true when prefers-reduced-motion is matched', () => {
        currentMatches = true;
        const { result } = renderHook(() => useReducedMotion());
        expect(result.current).toBe(true);
    });

    it('should update when preference changes', () => {
        currentMatches = false;
        let changeHandler: (e?: unknown) => void = () => { };

        matchMedia.mockImplementation((query) => ({
            get matches() { return currentMatches; },
            media: query,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: (_event: string, handler: EventListener) => {
                changeHandler = handler as unknown as (e?: unknown) => void;
            },
            removeEventListener: vi.fn(),
        }));

        const { result } = renderHook(() => useReducedMotion());
        expect(result.current).toBe(false);

        act(() => {
            currentMatches = true;
            changeHandler();
        });

        expect(result.current).toBe(true);
    });
    it('should remove event listener on unmount', () => {
        const removeEventListenerSpy = vi.fn();
        matchMedia.mockImplementation((query) => ({
            get matches() { return false; },
            media: query,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: removeEventListenerSpy,
        }));

        const { unmount } = renderHook(() => useReducedMotion());
        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalled();
    });
});
