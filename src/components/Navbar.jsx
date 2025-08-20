import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#A3DC9A] shadow-lg py-2" : "bg-[#A3DC9A] py-4"
        } animate-navbarLoad`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse group"
          >
            <img
              src="/logo.jpg"
              className="h-10 w-10 rounded-full shadow-md transition-transform duration-500 group-hover:scale-110"
              alt="Logo"
            />
            <span className="self-center text-2xl font-bold text-gray-900 tracking-wide">
              Al Arab Zone
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-black/30 transition"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Menu Items */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-black/10 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-transparent">
              {["Home", "About", "Services", "Pricing", "Contact"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="animate-slideDown opacity-0"
                    style={{
                      animationDelay: `${i * 0.2 + 0.5}s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <a
                      href="#"
                      className="relative block py-2 px-4 text-gray-900 md:p-2 transition-all duration-300 group overflow-hidden rounded-md"
                    >
                      {/* Text */}
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                      {/* Animated Background */}
                      <span className="absolute left-0 bottom-0 w-full h-0 bg-[#FFD6BA] transition-all duration-300 group-hover:h-[140%] rounded-md"></span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;