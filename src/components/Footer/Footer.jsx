import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = ({ fixed = true }) => {
  return (
    <footer
      className={`bg-navbar text-white py-2 border-t border-gray-800/60 ${fixed ? "fixed bottom-0 left-0" : "relative"} w-full z-50`}
      role="contentinfo"
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center px-4 max-w-4xl mx-auto">
        <span className="text-xs sm:text-sm mb-1 sm:mb-0">Connect with me:</span>
        <div className="flex flex-row gap-4 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/satyarth-ranjan-9122harsh054488/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl sm:text-xl text-blue-700 hover:text-blue-500 transition duration-200" />
          </a>
          <a
            href="https://x.com/SatyarthRanjan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="text-2xl sm:text-xl text-sky-500 hover:text-blue-400 transition duration-200" />
          </a>
          <a href="mailto:Satyarthranjan4488@gmail.com" aria-label="Gmail">
            <BiLogoGmail className="text-2xl sm:text-xl text-red-600 hover:text-red-500 transition duration-200" />
          </a>
          <a
            href="https://www.instagram.com/satyarth_ranjan_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl sm:text-xl text-pink-600 hover:text-pink-500 transition duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
