import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    // { name: 'EdTech Wing', path: '/edtech' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button onClick={() => handleNavigation('/')} className="flex items-center space-x-2 cursor-pointer focus:outline-none">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/logo.png" 
                alt="Nexbern Technologies" 
                className="h-12 w-auto"
              />
            </motion.div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className="font-medium transition-colors cursor-pointer relative group focus:outline-none"
                style={{ color: location.pathname === link.path ? '#0b5ccf' : '#333' }}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#0b5ccf] to-[#51b3fc] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: '#0b5ccf' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className="block w-full text-left py-2 font-medium focus:outline-none"
                  style={{ color: '#333' }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;