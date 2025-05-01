import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 px-6 mt-10 rounded-t-xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {/* Column 1 - Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">Arivo</h2>
          <p className="text-sm">
            Revolutionizing grocery shopping through group buying — fair prices
            for consumers, better income for farmers.
          </p>
        </div>

        {/* Column 2 - Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-green-600">
                About
              </a>
            </li>
            <li>
              <a
                href="#why-choose-us"
                className="hover:text-green-600">
                Why Choose Us
              </a>
            </li>
            <li>
              <a
                href="#app"
                className="hover:text-green-600">
                App
              </a>
            </li>
            <li>
              <a
                href="#mission"
                className="hover:text-green-600">
                Mission
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="hover:text-green-600">
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div id="contact">
          <h3 className="font-semibold mb-3">Contact</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@Arivo.in"
              className="text-green-700">
              support@Arivo.in
            </a>
          </p>

          <p>Location: India</p>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-green-700 text-xl">
            <a
              href="#"
              aria-label="Instagram">
              <FaInstagram className="hover:text-green-900 cursor-pointer" />
            </a>
            <a
              href="#"
              aria-label="Facebook">
              <FaFacebookF className="hover:text-green-900 cursor-pointer" />
            </a>
            <a
              href="#"
              aria-label="Twitter">
              <FaTwitter className="hover:text-green-900 cursor-pointer" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-green-900 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Arivo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
