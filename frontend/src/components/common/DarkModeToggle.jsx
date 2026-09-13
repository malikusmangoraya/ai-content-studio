import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.458 4.658a1 1 0 01-1.182.125l-1.3-.981a1 1 0 00-1.543 0l-1.3.981a1 1 0 01-1.182-.125l-.123-.092A1 1 0 016 13.064V12a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 00-1-1h-.5a1 1 0 010-2h.5a1 1 0 001-1V4a1 1 0 011-1h1a1 1 0 001-1v-.5a1 1 0 012 0V2a1 1 0 001-1h1a1 1 0 011 1v.5a1 1 0 001 1h1a1 1 0 011 1v1a1 1 0 001 1h.5a1 1 0 010 2h-.5a1 1 0 00-1 1v1a1 1 0 01-1 1h-1a1 1 0 00-1 1v1.064a1 1 0 01-.458.832zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM2 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM18 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
