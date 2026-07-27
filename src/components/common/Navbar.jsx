import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "../../data/navigation";
import { schoolLogo } from "../../data/images";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () =>
      document.removeEventListener(
        "mousedown",
        closeDropdown
      );
  }, []);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) =>
      prev === label ? null : label
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="section-container h-20 flex items-center justify-between gap-12">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center shrink-0"
          >
            <img
              src={schoolLogo}
              alt="Krishna International School"
              className="navbar-logo"            />
          </Link>

          {/* Desktop Navigation */}

          <div
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                >
                  <button
                    onClick={() =>
                      toggleDropdown(link.label)
                    }
                    className={`flex items-center gap-1 font-medium transition duration-300 ${
                      openDropdown === link.label
                        ? "text-primary"
                        : "text-heading hover:text-primary"
                    }`}
                  >
                    {link.label}

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openDropdown === link.label
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {openDropdown === link.label && (
                    <div className="absolute left-0 top-10 w-60 rounded-2xl bg-white border border-gray-100 shadow-xl overflow-hidden">

                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-5 py-3 text-sm text-heading hover:bg-blue-50 hover:text-primary transition"
                        >
                          {child.label}
                        </Link>
                      ))}

                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition duration-300 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-heading hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Apply Button */}

          <div className="hidden lg:flex items-center">

            <Link
              to="/admissions"
              className="rounded-full bg-primary text-white font-semibold px-7 py-3 transition-all duration-300 hover:bg-secondary hover:shadow-lg hover:-translate-y-1"
            >
              Apply Now
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="lg:hidden rounded-xl p-2 hover:bg-gray-100 transition"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-xl">
            <div className="section-container py-6">
                            {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="mb-2">
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className={`w-full flex items-center justify-between rounded-xl px-4 py-3 font-medium transition-all duration-300 ${
                        openDropdown === link.label
                          ? "bg-primary text-white"
                          : "text-heading hover:bg-blue-50 hover:text-primary"
                      }`}
                    >
                      <span>{link.label}</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openDropdown === link.label
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {openDropdown === link.label && (
                      <div className="ml-4 mt-2 border-l-2 border-primary/20 pl-4 space-y-1">

                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block rounded-lg px-3 py-2 text-sm text-heading transition-all duration-300 hover:bg-blue-50 hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}

                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block rounded-xl px-4 py-3 mb-2 font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? "bg-primary text-white"
                        : "text-heading hover:bg-blue-50 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <div className="mt-6 border-t border-gray-200 pt-6">

                <Link
                  to="/admissions"
                  className="w-full flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-secondary"
                >
                  Apply Now
                </Link>

              </div>

            </div>
          </div>
        )}

      </nav>
    </>
  );
}