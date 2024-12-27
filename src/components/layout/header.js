import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./../LanguageDropdown";

function Header() {
  const { t } = useTranslation(); // Use the translation hook
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-theme-gradient text-white py-4">
      <nav className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // Replace with your logo path
            alt="5BY5 Winner Logo"
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          id="mobile-menu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-8 text-lg w-full md:w-auto mt-4 md:mt-0`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 md:py-0 md:text-center hover:text-purple-400 md:border-0 border-b-[1px]"
            >
              {t("header.home")}
            </Link>
          </li>
          <li>
            <Link
              to="/play"
              className="block py-2 md:py-0 md:text-center hover:text-purple-400 md:border-0 border-b-[1px]"
            >
              {t("header.play")}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 md:py-0 md:text-center hover:text-purple-400 md:border-0 border-b-[1px]"
            >
              {t("header.about")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 md:py-0 md:text-center hover:text-purple-400 md:border-0 border-b-[1px]"
            >
              {t("header.contact")}
            </Link>
          </li>
        </ul>

        {/* Login/Register and Language Dropdown */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex items-center space-x-4 w-full md:w-auto mt-4 md:mt-0`}
        >
          <button
            onClick={() => navigate("/login")}
            className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-500 w-full md:w-auto"
          >
            {t("header.login")}
          </button>
          <button
            onClick={() => navigate("/register")}
            className="text-white hover:text-purple-400 w-full md:w-auto text-center"
          >
            {t("header.register")}
          </button>
          <LanguageDropdown />
        </div>
      </nav>
    </header>
  );
}

export default Header;
