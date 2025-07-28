import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ResumePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans">
      <Header />
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">My Resume</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="https://drive.google.com/uc?export=download&id=17i_7uHh7Qr745wXfKryrKyp8RnNuxdEO"
            className="inline-block w-full sm:w-auto bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg text-center"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="w-full max-w-4xl bg-[var(--color-card-bg)]/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border-4 border-[var(--color-card-border)]" style={{ height: '80vh' }}>
          <iframe
            id="resume-iframe"
            src="https://drive.google.com/file/d/17i_7uHh7Qr745wXfKryrKyp8RnNuxdEO/preview"
            title="Resume"
            width="100%"
            height="100%"
            allow="autoplay"
            className="rounded-lg"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;