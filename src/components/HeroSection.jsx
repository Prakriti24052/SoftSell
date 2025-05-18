import { useState, useEffect } from "react";

export default function HeroSection() {
  // State to toggle dark/light mode
  const [isDark, setIsDark] = useState(false);

  // Add/remove dark class on <html> to enable dark mode styles
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <section className="bg-gradient-to-br from-[#f8fafc] to-blue-50 dark:from-gray-900 dark:to-gray-800 py-28 px-6 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="w-full md:w-[55%] text-center md:text-left transition-colors duration-500">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-gray-100">
            Unlock Value from <br />
            <span className="text-blue-600 dark:text-blue-400">
              Unused Software Licenses
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
            SoftSell helps businesses resell or value their unused software licenses quickly,
            securely, and for the best price.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition">
              Get a Quote
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-50 transition dark:bg-gray-700 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-600">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full md:w-[45%] flex justify-center transition-colors duration-500">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-800 w-full max-w-md">
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg p-4 text-white mb-6 text-center font-semibold text-sm">
              Premium License
            </div>
            <div className="grid grid-cols-2 gap-4 text-center mb-6">
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">2,847</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Licenses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">$1.2M</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Savings</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-base">
              {[
                "24/7 Support",
                "Instant Delivery",
                "Secure Payment",
                "Money-back Guarantee",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Dark/Light Mode Toggle Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setIsDark(!isDark)}
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-3 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Toggle Dark Mode"
          title="Toggle Dark Mode"
        >
          {isDark ? "🌞" : "🌙"}
        </button>
      </div>
    </section>
  );
}
