import '@testing-library/jest-dom';

// JSDOM does not implement window.matchMedia; provide a minimal stub so that
// hooks relying on it (e.g. useDarkMode) don't throw during tests.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
