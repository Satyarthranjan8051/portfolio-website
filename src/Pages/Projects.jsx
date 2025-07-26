
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Projects Grid Section */}
      <div className="bg-main flex flex-col items-center justify-start min-h-screen font-mono text-white px-2 pt-4 pb-2">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400 drop-shadow-lg mt-2">Projects</h1>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example Project 1 */}
          <div className="flex flex-col gap-2 border-b border-gray-700 pb-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-blue-300">Stock Prediction Using LSTM</span>
              <a href="https://github.com/Satyarthranjan8051/stock-prediction-lLSTM-" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-blue-400 underline text-sm">GitHub</a>
            </div>
            <p className="text-gray-300 text-base">A predictive model utilizing Long Short-Term Memory (LSTM) networks to forecast stock prices based on historical data. Includes data analysis, feature engineering, and visualization.</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-blue-900/40 text-blue-200 px-2 py-1 rounded text-xs">Python</span>
              <span className="bg-green-900/40 text-green-200 px-2 py-1 rounded text-xs">TensorFlow</span>
              <span className="bg-yellow-900/40 text-yellow-200 px-2 py-1 rounded text-xs">Pandas</span>
              <span className="bg-gray-800/40 text-gray-300 px-2 py-1 rounded text-xs">Matplotlib</span>
            </div>
          </div>
          {/* Example Project 2 */}
          <div className="flex flex-col gap-2 border-b border-gray-700 pb-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-blue-300">Portfolio Website</span>
              <a href="https://github.com/SatyarthRanjan8051/portfolio-website" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-blue-400 underline text-sm">GitHub</a>
              <a href="/" className="ml-2 text-gray-400 hover:text-green-400 underline text-sm">Live</a>
            </div>
            <p className="text-gray-300 text-base">Personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and experience in web development and data science.</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-blue-900/40 text-blue-200 px-2 py-1 rounded text-xs">React</span>
              <span className="bg-cyan-900/40 text-cyan-200 px-2 py-1 rounded text-xs">Tailwind CSS</span>
              <span className="bg-gray-800/40 text-gray-300 px-2 py-1 rounded text-xs">Vite</span>
            </div>
          </div>
          {/* Diamond Price Prediction Project */}
          <div className="flex flex-col gap-2 border-b border-gray-700 pb-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-blue-300">Diamond Price Prediction</span>
              <a href="https://github.com/Satyarthranjan8051/Diamond-Gemstone-Price-Prediction" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-blue-400 underline text-sm">GitHub</a>
            </div>
            <p className="text-gray-300 text-base">An end-to-end machine learning pipeline that predicts diamond prices using features like carat, cut, color, and clarity. The project covers data preprocessing, feature engineering, model training, and deployment-ready scripts, with interactive Jupyter notebooks for exploration and analysis.</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-blue-900/40 text-blue-200 px-2 py-1 rounded text-xs">Python</span>
              <span className="bg-yellow-900/40 text-yellow-200 px-2 py-1 rounded text-xs">scikit-learn</span>
              <span className="bg-green-900/40 text-green-200 px-2 py-1 rounded text-xs">Pandas</span>
              <span className="bg-gray-800/40 text-gray-300 px-2 py-1 rounded text-xs">Jupyter Notebook</span>
            </div>
          </div>
          {/* SunLight Lamp Website Project */}
          <div className="flex flex-col gap-2 border-b border-gray-700 pb-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-blue-300">SunLight Lamp Website</span>
              <a href="https://github.com/Satyarthranjan8051/lamp-website-react" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-blue-400 underline text-sm">GitHub</a>
            </div>
            <p className="text-gray-300 text-base">A modern e-commerce web application for lamp and lighting products, featuring a responsive React frontend with Vite and Tailwind CSS, and a Node.js/Express backend. The project includes a multi-step checkout flow, product showcase, Swiper carousel, dark/light theme switching, newsletter subscription, and file-based order management. Backend APIs support product listing, order placement, and newsletter signup, with JWT authentication for user-specific features.</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-yellow-900/40 text-yellow-200 px-2 py-1 rounded text-xs">JavaScript</span>
              <span className="bg-blue-900/40 text-blue-200 px-2 py-1 rounded text-xs">React</span>
              <span className="bg-gray-800/40 text-gray-300 px-2 py-1 rounded text-xs">Vite</span>
              <span className="bg-cyan-900/40 text-cyan-200 px-2 py-1 rounded text-xs">Tailwind CSS</span>
              <span className="bg-green-900/40 text-green-200 px-2 py-1 rounded text-xs">Node.js</span>
              <span className="bg-gray-900/40 text-gray-200 px-2 py-1 rounded text-xs">Express</span>
              <span className="bg-pink-900/40 text-pink-200 px-2 py-1 rounded text-xs">JWT</span>
              <span className="bg-purple-900/40 text-purple-200 px-2 py-1 rounded text-xs">Swiper.js</span>
            </div>
          </div>
          {/* Vendor Performance Data Analytics Project */}
          <div className="flex flex-col gap-2 border-b border-gray-700 pb-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-blue-300">Vendor Performance Data Analytics</span>
              <a href="https://github.com/Satyarthranjan8051/Vendor-Performance-Data-Analytics" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-blue-400 underline text-sm">GitHub</a>
            </div>
            <p className="text-gray-300 text-base">A data analytics pipeline for evaluating and visualizing vendor performance using Python, pandas, SQLite, and Jupyter notebooks. Includes data ingestion, cleaning, merging, summary table generation, and export to CSV for actionable business insights.</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-blue-900/40 text-blue-200 px-2 py-1 rounded text-xs">Python</span>
              <span className="bg-green-900/40 text-green-200 px-2 py-1 rounded text-xs">Pandas</span>
              <span className="bg-gray-900/40 text-gray-200 px-2 py-1 rounded text-xs">SQLite</span>
              <span className="bg-gray-800/40 text-gray-300 px-2 py-1 rounded text-xs">Jupyter Notebook</span>
            </div>
          </div>
          {/* Wind Data Processing Project */}
          <div className="flex flex-col gap-2 border-b border-gray-700 pb-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-blue-300">Wind Data Processing Project</span>
              <a href="https://github.com/Satyarthranjan8051/Wind-Data-Analysis-and-Processing" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-blue-400 underline text-sm">GitHub</a>
            </div>
            <p className="text-gray-300 text-base">Processes meteorological wind data: unit conversion, resampling, and high wind speed detection. Outputs a summary of max wind speeds at intervals and saves results to CSV.</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-blue-900/40 text-blue-200 px-2 py-1 rounded text-xs">Python</span>
              <span className="bg-green-900/40 text-green-200 px-2 py-1 rounded text-xs">Pandas</span>
              <span className="bg-gray-800/40 text-gray-300 px-2 py-1 rounded text-xs">NumPy</span>
              <span className="bg-gray-900/40 text-gray-200 px-2 py-1 rounded text-xs">Matplotlib</span>
              <span className="bg-pink-900/40 text-pink-200 px-2 py-1 rounded text-xs">Seaborn</span>
              <span className="bg-yellow-900/40 text-yellow-200 px-2 py-1 rounded text-xs">datetime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
