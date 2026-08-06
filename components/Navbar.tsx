"use client"; // important for using useState in App Router

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <a href="/" className="flex items-center">
            <img
              src="/sslogo.jpeg"
              alt="Logo"
              className="h-16 w-16 rounded-full cursor-pointer"
            />
            <h1 className="ml-6">ssahmad</h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/airtime" className="hover:text-orange-300">Airtime</a>
            <a href="/data" className="hover:text-orange-300">Data</a>
            <a href="/cable" className="hover:text-orange-300">Cable TV</a>
            <a href="/electricity" className="hover:text-orange-300">Electricity</a>
            <a href="/epins" className="hover:text-orange-300">EPINs</a>
            <a href="/betting" className="hover:text-orange-300">Betting</a>
            <a href="/api" className="hover:text-orange-300">API</a>
            <a href="/pricing" className="hover:text-orange-300">Pricing</a>
            <a href="/contact" className="hover:text-orange-300">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-blue-700">
          <a href="/airtime" className="block px-3 py-2 rounded hover:bg-blue-500">Airtime</a>
          <a href="/data" className="block px-3 py-2 rounded hover:bg-blue-500">Data</a>
          <a href="/cable" className="block px-3 py-2 rounded hover:bg-blue-500">Cable TV</a>
          <a href="/electricity" className="block px-3 py-2 rounded hover:bg-blue-500">Electricity</a>
          <a href="/epins" className="block px-3 py-2 rounded hover:bg-blue-500">EPINs</a>
          <a href="/betting" className="block px-3 py-2 rounded hover:bg-blue-500">Betting</a>
          <a href="/api" className="block px-3 py-2 rounded hover:bg-blue-500">API</a>
          <a href="/pricing" className="block px-3 py-2 rounded hover:bg-blue-500">Pricing</a>
          <a href="/contact" className="block px-3 py-2 rounded hover:bg-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
}
