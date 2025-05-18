import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // On mount, load dark mode preference or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
      toggleHtmlDarkClass(savedMode === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      toggleHtmlDarkClass(prefersDark);
    }
  }, []);

  // Add or remove the dark class on <html>
  const toggleHtmlDarkClass = (enabled) => {
    const html = document.documentElement;
    if (enabled) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  };

  // Toggle dark mode
  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    toggleHtmlDarkClass(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">SoftSell</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-600 dark:text-gray-300 text-sm font-medium">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Solutions</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">How It Works</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Testimonials</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* CTA and Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-semibold transition">
            Get Started
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={handleToggle}
            aria-label="Toggle Dark Mode"
            className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300"
          >
            <div
              className={`bg-white dark:bg-gray-900 w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          {/* Dark Mode Toggle on Mobile */}
          <button
            onClick={handleToggle}
            aria-label="Toggle Dark Mode"
            className="w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300"
          >
            <div
              className={`bg-white dark:bg-gray-900 w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                darkMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu className="text-2xl text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4 text-gray-600 dark:text-gray-300 text-sm font-medium transition-colors duration-300">
          <a href="#" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">Solutions</a>
          <a href="#" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">How It Works</a>
          <a href="#" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">Testimonials</a>
          <a href="#" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold transition">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
