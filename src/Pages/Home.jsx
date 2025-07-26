import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import webDevImage from "../assets/hero.png"; // Adjust the path as necessary
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex-grow flex bg-main font-mono text-white">
        {/* Line numbers */}
        <div className="relative w-10 pl-8 mt-11 text-right text-gray-500 select-none">
          {Array.from({ length: 30 }).map((_, index) => (
            <p key={index} className="opacity-40">
              {index + 1}
            </p>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-grow flex items-center justify-center">
          <div className="relative w-full max-w-5xl flex flex-row items-center gap-8">
            {/* Hero section content */}
            <div className="flex flex-col items-start justify-center flex-1 px-8">
              <p className="text-lg text-gray-400 mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-left mb-4 tracking-tight drop-shadow-lg">
                Satyarth Ranjan
              </h1>
              <p className="text-xl text-blue-400 mb-6 max-w-2xl">
                Web Developer & Data Scientist passionate about building impactful digital experiences and extracting insights from data.
              </p>
              {/* Expertise Highlights */}
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-lg font-semibold text-base border border-yellow-400/30">Web Development</span>
                <span className="bg-blue-400/20 text-blue-300 px-4 py-2 rounded-lg font-semibold text-base border border-blue-400/30">Data Science</span>
                <span className="bg-green-400/20 text-green-300 px-4 py-2 rounded-lg font-semibold text-base border border-green-400/30">Open Source</span>
                <span className="bg-gray-400/20 text-gray-300 px-4 py-2 rounded-lg font-semibold text-base border border-gray-400/30">Version Control</span>
              </div>
              {/* Call to Action */}
              <div className="flex flex-row gap-4 mt-2">
                <Link
                  to="/projects"
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200 text-lg"
                >
                  View My Work
                </Link>
                <Link
                  to="/resume"
                  className="inline-block bg-blue-400 hover:bg-blue-300 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200 text-lg"
                >
                  Resume
                </Link>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={webDevImage}
                alt="Web Developer"
                className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-gray-800"
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
