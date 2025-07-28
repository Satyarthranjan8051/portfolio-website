import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import webDevImage from "../assets/hero.png"; // Adjust the path as necessary
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      {/* Header Section */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex-grow flex items-center justify-center w-full min-h-screen">
        <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-8">
          {/* Glassmorphism container */}
          <div className="w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            {/* Hero section content */}
            <div className="flex flex-col items-center md:items-start justify-center flex-1 text-center md:text-left">
              <p className="text-lg sm:text-xl text-gray-400 mb-2">Hello, I'm</p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Satyarth Ranjan
              </h1>
              <p className="text-md sm:text-lg text-gray-300 mb-8 max-w-full sm:max-w-2xl">
                Web Developer & Data Scientist passionate about building impactful digital experiences and extracting insights from data.
              </p>
              {/* Expertise Highlights */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 justify-center md:justify-start">
                <span className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full font-semibold text-sm border border-yellow-400/30 transition-all hover:bg-yellow-400/30">Web Development</span>
                <span className="bg-blue-400/20 text-blue-300 px-4 py-2 rounded-full font-semibold text-sm border border-blue-400/30 transition-all hover:bg-blue-400/30">Data Science</span>
                <span className="bg-green-400/20 text-green-300 px-4 py-2 rounded-full font-semibold text-sm border border-green-400/30 transition-all hover:bg-green-400/30">Open Source</span>
                <span className="bg-gray-400/20 text-gray-300 px-4 py-2 rounded-full font-semibold text-sm border border-gray-400/30 transition-all hover:bg-gray-400/30">Version Control</span>
              </div>
              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/projects"
                  className="inline-block w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg text-center"
                >
                  View My Work
                </Link>
                <Link
                  to="/resume"
                  className="inline-block w-full sm:w-auto bg-transparent border-2 border-blue-400 text-blue-300 hover:bg-blue-400/20 hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg text-center"
                >
                  Resume
                </Link>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 w-full animate-float">
              <img
                src={webDevImage}
                alt="Web Developer"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-gray-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
