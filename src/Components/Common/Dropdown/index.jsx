/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown}>
        {title}
        <svg
          className={`w-4 h-4 inline ml-2 transform ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-50 h-60 overflow-y-auto overflow-x-hidden rounded-md shadow-lg bg-blue-200 ring-1 ring-black ring-opacity-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="py-1">
          <Link
            to="/"
            onClick={() => handleClose()}
            className="block px-4 py-2 text-lg hover:bg-gray-100"
          >
            All
          </Link>
          {items?.map((item, index) => (
            <Link
              key={index}
              to={`/${item.name}`}
              onClick={() => handleClose()}
              className="block px-4 py-2 text-lg hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
