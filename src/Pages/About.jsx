// Import your profile picture or GIF. You can use PNG, JPG, JPEG, or GIF formats.
// To use your own, add your image or GIF to the assets folder and update the import below.
import profileMedia from "../assets/tenor.gif"; // Example: tenor.gif, heroimg.png, heroimg.jpg, etc.
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useRef, useEffect, useState } from "react";

const About = () => {
  // Refs for each section
  const introRef = useRef(null);
  const summaryHeaderRef = useRef(null);
  const skillsHeaderRef = useRef(null);
  const educationHeaderRef = useRef(null);
  const awardsHeaderRef = useRef(null);
  const [positions, setPositions] = useState([96, 256, 448, 608]);
  const containerRef = useRef(null);

  useEffect(() => {
    function updatePositions() {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const getTop = (ref) => {
        if (!ref.current) return 0;
        const rect = ref.current.getBoundingClientRect();
        return rect.top - containerRect.top;
      };
      setPositions([
        getTop(introRef),
        getTop(summaryHeaderRef),
        getTop(skillsHeaderRef),
        getTop(educationHeaderRef),
        getTop(awardsHeaderRef),
      ]);
    }
    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-main flex flex-row min-h-screen font-mono text-white px-2 relative pb-24">
        <div ref={containerRef} className="relative flex flex-row w-full">
          {/* Fixed vertical thread, not overlapping navbar/footer */}
          <ThreadWithKnots />
          {/* Main content left-aligned, with more left margin to avoid thread overlap */}
          <MainContentWithRefs
            introRef={introRef}
            summaryHeaderRef={summaryHeaderRef}
            skillsHeaderRef={skillsHeaderRef}
            educationHeaderRef={educationHeaderRef}
            awardsHeaderRef={awardsHeaderRef}
          />
        </div>
      </div>
      {/* Footer - not fixed on About page to avoid overlap */}
      <div className="relative z-20 w-full">
        <Footer fixed={false} />
      </div>
    </div>
  );
}

// Thread with knots component
function ThreadWithKnots() {
  return (
    <div className="hidden md:block absolute left-8 top-20 bottom-20 w-4 z-10 pointer-events-none">
      {/* Main thread only, no knots */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400 rounded-full opacity-90"></div>
    </div>
  );
}

// Main content with refs for each section
function MainContentWithRefs({ introRef, summaryHeaderRef, skillsHeaderRef, educationHeaderRef, awardsHeaderRef }) {
  return (
    <div className="w-full max-w-4xl mt-8 mb-8 ml-0 md:ml-32">
      <div className="flex flex-col items-start" ref={introRef}>
        <img
          src={profileMedia}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-700 shadow-lg mb-4 hover:scale-105 transition-transform duration-300"
        />
        <div className="flex flex-col items-start mb-10">
          <span className="text-base md:text-lg text-gray-400 font-normal">Hey, I'm</span>
          <span className="text-4xl md:text-5xl font-bold text-left tracking-tight drop-shadow-lg">Satyarth Ranjan</span>
        </div>
      </div>
      {/* Info Sections - stacked vertically */}
      <div className="flex flex-col gap-10">
        {/* Professional Summary */}
        <div>
          <h2 ref={summaryHeaderRef} className="text-xl font-semibold text-white mb-3 text-left uppercase tracking-wide">Professional Summary</h2>
          <p className="text-base md:text-lg text-gray-400 text-left max-w-2xl leading-relaxed">
            Passionate and versatile developer with a strong foundation in both web development and data science. Experienced in building responsive, user-centric web applications using modern frameworks and best practices. Skilled in extracting insights from data, developing predictive models, and communicating results to drive business value. Adept at collaborating in cross-functional teams, adapting to new technologies, and delivering solutions that bridge the gap between data and impactful user experiences.
          </p>
        </div>
        {/* Skills */}
        <div>
          <h2 ref={skillsHeaderRef} className="text-xl font-semibold text-white mb-3 text-left uppercase tracking-wide">Skills</h2>
          <ul className="text-gray-300 space-y-2 text-left">
            <li><span className="font-medium">Web Development:</span> TypeScript, JavaScript, HTML, Node.js, Django, Prisma ORM, MongoDB</li>
            <li><span className="font-medium">Programming:</span> C++, Python, SQL</li>
            <li><span className="font-medium">Cloud & Database:</span> PostgreSQL, AWS</li>
            <li><span className="font-medium">Python Libraries:</span> Pandas, Numpy, Keras, TensorFlow, Matplotlib</li>
            <li><span className="font-medium">Open Source & Version Control:</span> Git, GitHub, open source contribution, advanced git commands</li>
            <li><span className="font-medium">Office Software:</span> Microsoft Office, Open Office, PowerBI</li>
          </ul>
        </div>
        {/* Education */}
        <div>
          <h2 ref={educationHeaderRef} className="text-xl font-semibold text-white mb-3 text-left uppercase tracking-wide">Education</h2>
          <ul className="text-gray-300 space-y-2 text-left">
            <li><span className="font-medium">B.E. Computer Science & Engineering</span><br/>Chandigarh University, Mohali (2021-2025)<br/>CGPA: 7.71</li>
          </ul>
        </div>
        {/* Awards */}
        <div>
          <h2 ref={awardsHeaderRef} className="text-xl font-semibold text-white mb-3 text-left uppercase tracking-wide">Awards</h2>
          <ul className="text-gray-300 space-y-2 text-left">
            <li>Elite Plus Gold certificate from IIT Kharagpur (NPTEL exam, 92 marks)</li>
            <li>1st prize in drama competition (mime performance) at college cultural fest</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
