import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = ({ fixed = true }) => {
  return (
    <footer className={`bg-navbar text-white py-2 ${fixed ? "fixed bottom-0" : "relative"} w-full`}>
      <div className="flex gap-4 items-center px-4">
        <span>Connect with me:</span>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/satyarth-ranjan-9122harsh054488/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl text-blue-700 hover:text-blue-500 transition duration-200" />
          </a>
          <a
            href="https://x.com/SatyarthRanjan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-xl text-sky-500 hover:text-blue-400 transition duration-200" />
          </a>
          <a href="mailto:Satyarthranjan4488@gmail.com">
            <BiLogoGmail className="text-xl text-red-600 hover:text-red-500 transition duration-200" />
          </a>
          <a
            href="https://www.instagram.com/satyarth_ranjan_/"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram className="text-xl text-pink-600 hover:text-pink-500 transition duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
