import React from "react";

function Footer() {
  return (
    <footer className="bg-theme-gradient py-6 text-theme">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo Section */}
          <div className="w-full md:w-1/5 text-center md:text-left mb-4 md:mb-0">
            <a href="https://script.viserlab.com/lottolab">
              <img
                src="https://script.viserlab.com/lottolab/assets/images/logo_icon/logo.png"
                alt="LottoLab Logo"
                className="h-10 mx-auto md:mx-0"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-4/5 flex justify-center md:justify-end">
            <ul className="flex flex-wrap space-x-6 text-sm text-center md:text-right">
              <li>
                <a href="https://script.viserlab.com/lottolab" className="hover-theme">
                  Home
                </a>
              </li>
              <li>
                <a href="https://script.viserlab.com/lottolab/lottery" className="hover-theme">
                  Lotteries
                </a>
              </li>
              <li>
                <a
                  href="https://script.viserlab.com/lottolab/policy/privacy-policy?42"
                  className="hover-theme"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://script.viserlab.com/lottolab/policy/terms-of-service?43"
                  className="hover-theme"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-theme my-4" />

        {/* Bottom Section */}
        <div className="flex flex-wrap items-center justify-between text-sm">
          {/* Copyright */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-2 md:mb-0">
            <span>
              Copyright © 2024, All Rights Reserved By{" "}
              <a
                href="https://script.viserlab.com/lottolab"
                className="text-blue-400 hover:text-blue-500"
              >
                LottoLab.
              </a>
            </span>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com" target="_blank" className="hover-theme">
              <i className="lab la-facebook-f text-lg"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" className="hover-theme">
              <i className="lab la-twitter text-lg"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" className="hover-theme">
              <i className="lab la-linkedin-in text-lg"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" className="hover-theme">
              <i className="lab la-instagram text-lg"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" className="hover-theme">
              <i className="fab fa-youtube text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
