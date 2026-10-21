import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logo, links }) => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">{logo}</div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="hover:text-yellow-400   transition"
              >
                {link.name}11
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
