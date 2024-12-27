import React from "react";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="text-white min-h-[81vh] flex flex-col items-center justify-center relative">
      {/* Prominent Text at the Top */}
      <div className="absolute top-20 w-full text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          <span >{t("titlePart1")}</span>{" "}

          <span className="text-purple-700">{t("titlePart2")}</span> {" "}

          <span >{t("titlePart3")}</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">{t("subtitle")}</h2>
      </div>

      {/* Logo Section */}
      <div className="absolute flex flex-col items-center space-y-4 mt-52">
        <img
          src="/logo.png"
          alt={t("common.appName")}
          className="h-40 w-40 md:w-80 md:h-80"
        />
      </div>
    </section>
  );
}

export default HeroSection;
