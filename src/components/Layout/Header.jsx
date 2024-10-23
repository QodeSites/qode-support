"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ href, children, className, onClick, target, rel }) => {
  // For external links, use regular <a> tag
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  // For internal links, use Next.js Link
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 750);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMobileMenuOpen]);

  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed z-20 transition-all duration-300 w-full 
          md:w-[700px] md:left-1/2 md:-translate-x-1/2 
          lg:w-[1066px] 
          xl:w-[1386px] 
          max-w-full ${
            isScrolled
              ? "bg-white top-0 bg-opacity-100 shadow-md"
              : "bg-white top-0 bg-opacity-100 shadow-md"
          }`}
    >
      <div className="mx-auto">
        <div className="shadow-md py-18 sm:py-18 sm:px-4 px-18">
          <div className="flex items-center justify-between z-50 w-full">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 flex-1">
              <CustomLink
                href="https://qodeinvest.com/blogs"
                className={`text-body transition duration-300 ${
                  isHomePage && !isScrolled ? "text-beige" : "text-beige"
                }`}
              >
                Blogs
              </CustomLink>
              <CustomLink
                href="https://qodeinvest.com/strategies"
                className={`text-body transition duration-300 ${
                  isHomePage && !isScrolled ? "text-beige" : "text-beige"
                }`}
              >
                Strategies
              </CustomLink>
            </nav>

            {/* Logo */}
            <div className="flex-shrink-0">
              <CustomLink
                href="/"
                className={`playfair-display-font text-[24px] sm:text-[32px] font-bold ${
                  isHomePage && !isScrolled ? "text-beige" : "text-beige"
                }`}
                onClick={closeMobileMenu}
              >
                Qode
              </CustomLink>
            </div>

            {/* Right Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-end">
              <CustomLink
                href="https://qodeinvest.com/about-us"
                className={`text-body transition duration-300 ${
                  isHomePage && !isScrolled ? "text-beige" : "text-beige"
                }`}
              >
                About Us
              </CustomLink>
              <CustomLink
                href="https://dashboard.qodeinvest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-body font-body transition duration-300 ${
                  isHomePage && !isScrolled ? "text-beige" : "text-beige"
                }`}
              >
                Dashboard
              </CustomLink>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden relative bottom-1/2 z-50">
              <button
                onClick={toggleMobileMenu}
                className={`focus:outline-none ${
                  isHomePage && !isScrolled ? "text-beige" : "text-black"
                }`}
              >
                <svg
                  className="h-2 w-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
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

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 h-[100vh] bg-black bg-opacity-60 z-40"
                    onClick={closeMobileMenu}
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />

                  <div className="absolute right-0 w-48 shadow-md bg-black z-50 overflow-hidden">
                    <CustomLink
                      href="/blogs"
                      className="block px-4 py-2 text-body text-beige hover:bg-beige hover:text-black hover:bg-opacity-50"
                      onClick={closeMobileMenu}
                    >
                      Blogs
                    </CustomLink>
                    <CustomLink
                      href="/strategies"
                      className="block px-4 py-2 text-body text-beige hover:bg-beige hover:text-black hover:bg-opacity-50"
                      onClick={closeMobileMenu}
                    >
                      Strategies
                    </CustomLink>
                    <CustomLink
                      href="/about-us"
                      className="block px-4 py-2 text-body text-beige hover:bg-beige hover:text-black hover:bg-opacity-50"
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </CustomLink>
                    <CustomLink
                      href="https://dashboard.qodeinvest.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 dm-sans-font text-body hover:bg-beige hover:text-black text-beige transition"
                      onClick={closeMobileMenu}
                    >
                      Dashboard
                    </CustomLink>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
