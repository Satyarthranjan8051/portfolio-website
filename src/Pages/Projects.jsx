import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const projects = [
  {
    title: "Stock Prediction Using LSTM",
    github: "https://github.com/Satyarthranjan8051/stock-prediction-lLSTM-",
    description: "A predictive model utilizing Long Short-Term Memory (LSTM) networks to forecast stock prices based on historical data. Includes data analysis, feature engineering, and visualization.",
    tags: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
  },
  {
    title: "Portfolio Website",
    github: "https://github.com/SatyarthRanjan8051/portfolio-website",
    live: "https://portfolio-website-satyarth-ranjans-projects.vercel.app/",
    description: "Personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and experience in web development and data science.",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Diamond Price Prediction",
    github: "https://github.com/Satyarthranjan8051/Diamond-Gemstone-Price-Prediction",
    description: "An end-to-end machine learning pipeline that predicts diamond prices using features like carat, cut, color, and clarity. The project covers data preprocessing, feature engineering, model training, and deployment-ready scripts, with interactive Jupyter notebooks for exploration and analysis.",
    tags: ["Python", "scikit-learn", "Pandas", "Jupyter Notebook"],
  },
  {
    title: "SunLight Lamp Website",
    github: "https://github.com/Satyarthranjan8051/lamp-website-react",
    live: "https://sunlight-ecommerce-website.vercel.app/",
    description: "A modern e-commerce web application for lamp and lighting products, featuring a responsive React frontend with Vite and Tailwind CSS, and a Node.js/Express backend. The project includes a multi-step checkout flow, product showcase, Swiper carousel, dark/light theme switching, newsletter subscription, and file-based order management. Backend APIs support product listing, order placement, and newsletter signup, with JWT authentication for user-specific features.",
    tags: ["JavaScript", "React", "Vite", "Tailwind CSS", "Node.js", "Express", "JWT", "Swiper.js"],
  },
  {
    title: "Vendor Performance Data Analytics",
    github: "https://github.com/Satyarthranjan8051/Vendor-Performance-Data-Analytics",
    description: "A data analytics pipeline for evaluating and visualizing vendor performance using Python, pandas, SQLite, and Jupyter notebooks. Includes data ingestion, cleaning, merging, summary table generation, and export to CSV for actionable business insights.",
    tags: ["Python", "Pandas", "SQLite", "Jupyter Notebook"],
  },
  {
    title: "Wind Data Processing Project",
    github: "https://github.com/Satyarthranjan8051/Wind-Data-Analysis-and-Processing",
    description: "Processes meteorological wind data: unit conversion, resampling, and high wind speed detection. Outputs a summary of max wind speeds at intervals and saves results to CSV.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "datetime"],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans">
      <Header />
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">My Projects</h1>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" style={{ gridAutoRows: '1fr' }}>
          {projects.map((project, index) => (
            <div key={index} className="bg-[var(--color-card-bg)]/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
              <div>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">{project.title}</h2>
                <p className="text-[var(--color-text-primary)]/80 mb-6 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-[var(--color-card-bg)]/50 text-[var(--color-text-primary)]/70 px-3 py-1 rounded-full text-sm font-semibold">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors duration-300">GitHub</a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-semibold text-lg transition-colors duration-300">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
