'use client'
import Link from "next/link";
import { FaSuitcase, FaHeadset, FaBars, FaTimes } from "react-icons/fa";
import { RiCoupon2Line } from "react-icons/ri";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-white shadow-sm py-4 px-6 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 mr-2">
              Ghumtrip
            </Link>
          </div>

          {/* Right side - Navigation (desktop) */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/offers"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <RiCoupon2Line className="mr-1" />
              Offers
            </Link>

            <Link
              href="/business"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaSuitcase className="mr-1" />
              Business
            </Link>

            <Link
              href="/support"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaHeadset className="mr-1" />
              Support
            </Link>

            <Link
              href="/login"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <button className="bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Log In
              </button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
      >
        <div className="p-6">
          <button
            className="absolute top-4 right-4 text-gray-700"
            onClick={toggleMenu}
          >
            <FaTimes className="w-6 h-6" />
          </button>

          <nav className="mt-12 flex flex-col space-y-4">
            {/* Travel Options */}
            <Link
              href="/flights"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={closeMenu}
            >
              ✈️ Flights
            </Link>

            <Link
              href="/hotels"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={closeMenu}
            >
              � Hotels
            </Link>

            <Link
              href="/trains"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={closeMenu}
            >
              🚆 Trains
            </Link>

            <Link
              href="/buses"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={closeMenu}
            >
              🚌 Buses
            </Link>

            <Link
              href="/packages"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={closeMenu}
            >
              🎒 Packages
            </Link>

            {/* Original Menu Items */}
            <div className="border-t border-gray-200 my-2"></div>

            <Link
              href="/offers"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={closeMenu}
            >
              <RiCoupon2Line className="mr-2" />
              Offers
            </Link>

            <Link
              href="/business"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={closeMenu}
            >
              <FaSuitcase className="mr-2" />
              Business
            </Link>

            <Link
              href="/support"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={closeMenu}
            >
              <FaHeadset className="mr-2" />
              Support
            </Link>

            <Link
              href="/login"
              className="flex items-center justify-center mt-4"
              onClick={closeMenu}
            >
              <button className="bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                Log In
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}