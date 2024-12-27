import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English", flag: "/flags/uk.png" },
  { code: "hi", name: "हिंदी", flag: "/flags/ind.png" },
  { code: "ba", name: "বাংলা", flag: "/flags/ban.png" },
  { code: "sp", name: "Español", flag: "/flags/spa.png" },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode); // This automatically updates the language
    setIsOpen(false);
  };

  const selectedLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <div
        className="flex items-center space-x-1 cursor-pointer text-white"
        onClick={toggleDropdown}
      >
        <img src={selectedLanguage.flag} alt={selectedLanguage.name} className="h-5 w-5" />
        <span className="text-sm">{selectedLanguage.name}</span>
        <span className="ml-1">▼</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-[#1E1E3F] border border-gray-700 rounded-md shadow-lg z-50">
          <ul className="py-1">
            {languages.map((lang) => (
              <li
                key={lang.code}
                className="flex items-center px-4 py-2 text-white hover:bg-purple-500 cursor-pointer"
                onClick={() => selectLanguage(lang.code)}
              >
                <img src={lang.flag} alt={lang.name} className="h-5 w-5 mr-2" />
                <span className="text-sm">{lang.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
