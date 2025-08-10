import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 border-t border-gray-100/50 dark:border-gray-700/50">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500"></div>

      <div className="max-w-7xl mx-auto px-4 m:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3">
                <Image
                  src="/logonew-removebg-preview.png"
                  alt="Money Icon"
                  width={40}
                  height={40}
                  className="inline-block"
                />
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
                Tracklet AI
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-m">
              Intelligent financial management powered by AI. Track your
              expenses, manage your budget, and gain insights into your spending
              patterns.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-m font-medium transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Home
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-m font-medium transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                About
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-m font-medium transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Contact
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Features
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-m">
                <div className="w-5 h-5 rounded-md flex items-center justify-center shadow-m">
                  <span className="text-white text-l">🤖</span>
                </div>
                AI-Powered Insights
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-m">
                <div className="w-5 h-5 rounded-md flex items-center justify-center shadow-m">
                  <span className="text-white text-l">✨</span>
                </div>
                mart Categorization
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-m">
                <div className="w-5 h-5  rounded-md flex items-center justify-center shadow-m">
                  <span className="text-white text-l">📊</span>
                </div>
                Analytics Dashboard
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-8"></div>

        {/* Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400 text-m">
              © {new Date().getFullYear()} Tracklet AI. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-l font-medium">
              <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></span>
              Made by Pranav
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
