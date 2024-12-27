import React, { useEffect, useState } from "react";
import i18n from "./i18n";

const LanguageLogger = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("i18nextLng")
  );

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng); // State अपडेट करें ताकि UI तुरंत बदल जाए
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup listener जब component हटे
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
  }, [currentLanguage]); // जब भाषा बदलती है, तो यह useEffect ट्रिगर होगा

  return null;
};

export default LanguageLogger;
