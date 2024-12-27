import React from "react";
import { MdOutlineRocket } from "react-icons/md";

function ScrollToTop() {
    return (
        // <div className="fixed bottom-8 right-8 z-50">
        //   <button
        //     className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        //     title="Scroll to Top"
        //   >
        //     <MdOutlineRocket className="text-2xl" />
        //   </button>
        // </div>
            <div className="scroll-to-top">
                <span className="scroll-icon">
                    <MdOutlineRocket className="text-2xl" aria-hidden="true" />
                </span>
            </div>
    );
}

export default ScrollToTop;
