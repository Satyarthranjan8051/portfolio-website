import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import profileMedia from "../assets/tenor.gif"; // Example: tenor.gif, heroimg.png, heroimg.jpg, etc.

const About = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      {/* Header Section */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <div className="flex-grow flex items-center justify-center w-full min-h-screen">
        <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-8">
          {/* Glassmorphism container */}
          <div className="w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col items-center md:items-start">
              <img
                src={profileMedia}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-700 shadow-lg mb-6 transform hover:scale-110 transition-transform duration-300"
              />
              <div className="flex flex-col items-center md:items-start mb-8">
                <span className="text-lg text-gray-400">Hey, I'm</span>
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Satyarth Ranjan</span>
              </div>
            </div>

            {/* Info Sections */}
            <div className="flex flex-col gap-8 w-full">
              {/* Professional Summary */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wider">Professional Summary</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Passionate and versatile developer with a strong foundation in both web development and data science. Experienced in building responsive, user-centric web applications using modern frameworks and best practices. Skilled in extracting insights from data, developing predictive models, and communicating results to drive business value. Adept at collaborating in cross-functional teams, adapting to new technologies, and delivering solutions that bridge the gap between data and impactful user experiences.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wider">Skills</h2>
                <ul className="text-lg text-gray-300 space-y-2">
                  <li><span className="font-semibold text-yellow-400">Web Development:</span> TypeScript, JavaScript, HTML, Node.js, Django, Prisma ORM, MongoDB</li>
                  <li><span className="font-semibold text-yellow-400">Programming:</span> C++, Python, SQL</li>
                  <li><span className="font-semibold text-yellow-400">Cloud & Database:</span> PostgreSQL, AWS</li>
                  <li><span className="font-semibold text-yellow-400">Python Libraries:</span> Pandas, Numpy, Keras, TensorFlow, Matplotlib</li>
                  <li><span className="font-semibold text-yellow-400">Open Source & Version Control:</span> Git, GitHub, open source contribution, advanced git commands</li>
                  <li><span className="font-semibold text-yellow-400">Office Software:</span> Microsoft Office, Open Office, PowerBI</li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wider">Education</h2>
                <ul className="text-lg text-gray-300 space-y-2">
                  <li><span className="font-semibold text-yellow-400">B.E. Computer Science & Engineering</span><br/>Chandigarh University, Mohali (2021-2025)<br/>CGPA: 7.71</li>
                </ul>
              </div>

              {/* Awards */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wider">Awards</h2>
                <ul className="text-lg text-gray-300 space-y-2">
                  <li>Elite Plus Gold certificate from IIT Kharagpur (NPTEL exam, 92 marks)</li>
                  <li>1st prize in drama competition (mime performance) at college cultural fest</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;