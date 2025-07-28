import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const files = [
    { name: "index.html", path: "/" },
    { name: "about.css", path: "/about" },
    { name: "projects.js", path: "/projects" },
    { name: "resume.js", path: "/resume" },
    { name: "contact.js", path: "/contact" },
  ];

  return (
    <nav className="bg-navbar pr-2 shadow-md w-full overflow-x-auto" aria-label="Main Navigation">
      <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {files.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`relative px-3 sm:px-4 py-2 text-xs sm:text-base text-white cursor-pointer transition duration-200 whitespace-nowrap
              ${
                location.pathname === path
                  ? "bg-main shadow-lg"
                  : "bg-navbarNotselected hover:bg-gray-700"
              }`}
          >
            <span className="font-medium">{name}</span>
            {location.pathname === path && (
              <div className="absolute inset-x-0 top-0 h-1 bg-yellow-500 rounded" />
            )}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          className="ml-auto px-3 sm:px-4 py-2 text-xs sm:text-base text-white bg-gray-700 hover:bg-gray-600 rounded-md transition duration-200"
        >
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
