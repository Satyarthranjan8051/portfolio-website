import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/satyarth-ranjan-9122harsh054488/",
    label: "LinkedIn",
    Icon: FaLinkedin,
    colorClass: "text-blue-500 hover:text-blue-400",
  },
  {
    href: "https://x.com/SatyarthRanjan",
    label: "X (Twitter)",
    Icon: FaXTwitter,
    colorClass: "text-sky-500 hover:text-sky-400",
  },
  {
    href: "https://github.com/Satyarthranjan8051",
    label: "GitHub",
    Icon: FaGithub,
    colorClass: "text-gray-300 hover:text-white",
  },
  {
    href: "https://www.instagram.com/satyarth_ranjan_/",
    label: "Instagram",
    Icon: FaInstagram,
    colorClass: "text-pink-500 hover:text-pink-400",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white/10 backdrop-blur-lg text-white py-4 border-t border-gray-800/60 w-full z-50"
      role="contentinfo"
    >
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-y-4">
        {/* Copyright Notice */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-300">
            &copy; {currentYear} Satyarth Ranjan. All Rights Reserved.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-x-6">
          {socialLinks.map(({ href, label, Icon, colorClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transform hover:scale-125 transition-transform duration-300"
            >
              <Icon className={`text-3xl ${colorClass}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
