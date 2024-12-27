import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-theme-gradient text-theme min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      {/* Main Content */}
      {/* <main className="flex-grow container mx-auto px-4 py-6"> */}
      <main className="">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
