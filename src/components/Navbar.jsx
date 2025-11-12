import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(8px)',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(8px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button onClick={() => handleNavigation('/')} className="flex items-center space-x-2 cursor-pointer focus:outline-none">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10"
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
                  className="font-medium transition-all duration-300 cursor-pointer relative group focus:outline-none px-3 py-2 rounded-lg"
                  style={{ 
                    color: location.pathname === link.path ? '#0b5ccf' : '#333',
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span 
                    className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#0b5ccf] to-[#51b3fc] transition-all duration-300 group-hover:w-full ${
                      location.pathname === link.path ? 'w-full' : ''
                    }`}
                  ></span>
                  <span className="absolute inset-0 bg-[#0b5ccf]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 focus:outline-none rounded-lg hover:bg-[#0b5ccf]/10 transition-colors relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: '#0b5ccf' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl z-40 lg:hidden overflow-y-auto"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                  <h2 className="text-xl font-semibold" style={{ color: '#0b5ccf' }}>
                    Menu
                  </h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-[#0b5ccf]/10 transition-colors"
                    style={{ color: '#0b5ccf' }}
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-4 py-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.path}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavigation(link.path)}
                      className={`block w-full text-left py-4 px-4 font-medium focus:outline-none rounded-xl transition-all duration-300 ${
                        location.pathname === link.path 
                          ? 'bg-gradient-to-r from-[#0b5ccf] to-[#51b3fc] text-white shadow-lg' 
                          : 'text-[#333] hover:bg-[#0b5ccf]/10'
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>

                {/* Menu Footer */}
                <div className="p-6 border-t border-gray-200/50">
                  <p className="text-sm text-gray-500 text-center">
                    © 2025 Nexbern Technologies
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;