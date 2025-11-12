import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#0b5ccf] to-[#147bf2] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <motion.div {...fadeInUp}>
             {/* Logo */}
                      <button onClick={() => handleNavigation('/')} className="flex items-center space-x-2 cursor-pointer focus:outline-none">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/logo.png" 
                            alt="Nexbern Technologies" 
                            className="h-12 w-auto mb-5"
                          />
                        </motion.div>
                      </button>
            <h3 className="text-xl font-bold mb-2">About Nexbern</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Shaping the future of students by preparing them for the tech industry while providing cutting-edge IT services to clients.
            </p>
            <p className="text-blue-200 font-semibold mt-3 text-sm">Learn. Build. Earn.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavigation('/')} className="text-blue-100 hover:text-white transition-colors text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/about')} className="text-blue-100 hover:text-white transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/it-services')} className="text-blue-100 hover:text-white transition-colors text-left">
                  IT Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/courses')} className="text-blue-100 hover:text-white transition-colors text-left">
                  Courses
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/projects')} className="text-blue-100 hover:text-white transition-colors text-left">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/contact')} className="text-blue-100 hover:text-white transition-colors text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>AI & Machine Learning</li>
              <li>SEO & Digital Marketing</li>
              <li>Cloud Solutions</li>
              <li>IT Consulting</li>
            </ul>
          </motion.div>

          {/* Connect With Us */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:nexberntechnologies@gmail.com" className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors">
                <Mail size={16} />
                <span>nexberntechnologies@gmail.com</span>
              </a>
              <a href="https://wa.me/7705084226" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors">
                <Phone size={16} />
                <span>+91 77050 84226</span>
                <span>+91 70714 02831</span>
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://www.linkedin.com/in/nexbern-technologies-247978391/"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
              {/* <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter size={18} />
              </motion.a> */}
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://www.instagram.com/nexberntechnologies?igsh=cnB6NjB4bDIxanVp"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} />
              </motion.a>
              {/* <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube size={18} />
              </motion.a> */}
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-blue-100"
        >
          <p>© 2025 Nexbern Technologies. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;