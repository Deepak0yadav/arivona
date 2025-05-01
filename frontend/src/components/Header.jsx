import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "App", href: "#app" },
    { label: "Mission", href: "#mission" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
    { label: "Why Choose Us", href: "#why-choose-us" },
  ];

  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    } else {
      setToggle(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-green-700">Arivo</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 text-lg font-medium">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-green-600 transition-colors duration-300">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger / Close Button */}
        <button
          className="md:hidden flex items-center justify-center text-3xl text-gray-700"
          onClick={handleToggle}
          aria-label="Toggle Menu">
          {toggle ? <MdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="md:hidden absolute right-4 top-[72px] bg-gray-50 w-60 rounded-xl shadow-lg flex flex-col gap-2 p-4 z-50 transition-all duration-300">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="p-2 rounded-md hover:bg-gray-200 text-gray-800 font-medium"
              onClick={() => setToggle(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
