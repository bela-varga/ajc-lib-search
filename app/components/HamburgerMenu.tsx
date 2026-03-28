import { useState } from 'react';
import { Link } from 'react-router';
import { useDarkMode } from '~/hooks/useDarkMode';

interface MenuItem {
  path: string;
  label: string;
}

const MENU_ITEMS: MenuItem[] = [
  { path: '/', label: 'Kezdőlap / Kereső' },
  { path: '/about', label: 'Mi ez?' },
  { path: '/contact', label: 'Kapcsolat' },
  { path: '/terms', label: 'Felhasználási feltételek' },
  { path: '/privacy', label: 'Adatvédelem' },
];

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, toggleDark] = useDarkMode();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger button fixed to top-right corner */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label={isOpen ? 'Menü bezárása' : 'Menü megnyitása'}
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          {/* Top bar */}
          <span
            className={`block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          {/* Middle bar */}
          <span
            className={`block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 my-1 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          {/* Bottom bar */}
          <span
            className={`block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Menu panel sliding from right */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-2xl z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Főmenü"
      >
        <div className="pt-20 px-6 flex flex-col h-full pb-8">
          <ul className="space-y-4 flex-1">
            {MENU_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className="block py-3 px-4 rounded-lg text-lg font-medium text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark / Light mode toggle */}
          <button
            id="dark-mode-toggle"
            onClick={toggleDark}
            className="mt-8 flex items-center gap-3 py-3 px-4 rounded-lg text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors w-full"
            aria-label={isDark ? 'Váltás világos módra' : 'Váltás sötét módra'}
          >
            <span className="text-xl" aria-hidden="true">
              {isDark ? '☀️' : '🌙'}
            </span>
            {isDark ? 'Világos mód' : 'Sötét mód'}
          </button>
        </div>
      </nav>
    </>
  );
}
