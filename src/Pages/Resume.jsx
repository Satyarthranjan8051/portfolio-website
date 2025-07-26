
import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const ResumePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-main text-white font-mono">
      <Header />
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center py-6 xs:py-8 sm:py-10 md:py-12 px-2 xs:px-4 sm:px-6">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-yellow-400 drop-shadow-lg text-center">My Resume</h1>
        {/* Download and Print Buttons */}
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 mb-4 w-full max-w-xs xs:max-w-md sm:max-w-lg justify-center items-center">
          <a
            href="https://drive.google.com/uc?export=download&id=17i_7uHh7Qr745wXfKryrKyp8RnNuxdEO"
            className="w-full xs:w-auto bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-200 text-center"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </div>
        <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl bg-gray-900 rounded-xl shadow-2xl overflow-hidden border-4 border-gray-800 px-2 xs:px-4 py-4 xs:py-6 flex items-center justify-center" style={{height: '60vh'}}>
          <iframe
            id="resume-iframe"
            src="https://drive.google.com/file/d/17i_7uHh7Qr745wXfKryrKyp8RnNuxdEO/preview"
            title="Resume"
            width="100%"
            height="100%"
            allow="autoplay"
            className="w-full h-full rounded-lg"
            style={{border: 'none'}}
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
