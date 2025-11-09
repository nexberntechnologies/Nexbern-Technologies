import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Code, Briefcase, Award, Star, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const heroSlides = [
    {
      title: "Shaping the Future of",
      highlight: "Students and Technology",
      subtitle: "At Nexbern Technologies, learning meets innovation. Build real projects, gain experience, and create your future.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
    },
    {
      title: "Transform Your Career",
      highlight: "Learn. Build. Earn.",
      subtitle: "Work on live projects while learning cutting-edge technologies. Get paid for your contributions and graduate job-ready.",
      image: "https://images.unsplash.com/photo-1526253038957-bce54e05968e?w=1920&q=80"
    },
    {
      title: "Professional IT Services",
      highlight: "For Growing Businesses",
      subtitle: "From web development to AI solutions - we deliver excellence in every project with affordable pricing.",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1920&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const testimonials = [
    { name: 'Rahul Sharma', role: 'Student', text: 'Nexbern helped me learn real-world skills while earning. Now I have a job before graduation!', rating: 5 },
    { name: 'Tech Innovations Ltd', role: 'Client', text: 'Outstanding IT services. Professional team that delivers on time and within budget.', rating: 5 },
    { name: 'Priya Patel', role: 'Student', text: 'The live project experience was invaluable. I learned more here than in my entire college course.', rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-br from-[#0b5ccf] via-[#147bf2] to-[#51b3fc]"
          >
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url('${heroSlides[currentSlide].image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {heroSlides[currentSlide].title} <br />
                <span className="text-[#51b3fc]">{heroSlides[currentSlide].highlight}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#0b5ccf] rounded-lg font-semibold text-lg flex items-center space-x-2 shadow-lg"
              >
                <span>Explore Training</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/it-services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white rounded-lg font-semibold text-lg flex items-center space-x-2"
              >
                <span>Hire Us</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              The Nexbern Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A unique hybrid model connecting students, technology, and real-world business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              className="relative group"
            >
              <div className="h-64 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?w=600&q=80"
                  alt="Students Learning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#0b5ccf' }}>Students</h3>
              <p className="text-gray-600">Learn cutting-edge skills, work on live projects, and earn while you learn</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div className="h-64 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Technology"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#147bf2' }}>Technology</h3>
              <p className="text-gray-600">Latest tech stack, modern development practices, and innovative solutions</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="h-64 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.pexels.com/photos/7734610/pexels-photo-7734610.jpeg?w=600&q=80"
                  alt="Business"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#51b3fc' }}>Clients</h3>
              <p className="text-gray-600">Professional IT services with affordable pricing and quality delivery</p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' }}
              >
                Learn More About Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Division Highlights */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              {...fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526253038957-bce54e05968e?w=800&q=80"
                  alt="EdTech"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
                  EdTech Division
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transform your future with comprehensive training programs. Learn from industry experts, work on real projects, and earn while you study.
                </p>
                <Link to="/edtech">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 rounded-lg font-semibold text-white flex items-center space-x-2"
                    style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #147bf2 100%)' }}
                  >
                    <span>Explore Programs</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80"
                  alt="IT Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
                  IT Services Division
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional software development and IT consulting services. From web apps to AI solutions, we deliver excellence.
                </p>
                <Link to="/it-services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 rounded-lg font-semibold text-white flex items-center space-x-2"
                    style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #147bf2 100%)' }}
                  >
                    <span>View Services</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Nexbern */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              Why Choose Nexbern?
            </h2>
            <p className="text-lg text-gray-600">Building futures, one student at a time</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, title: 'Tailored IT Services', color: '#0b5ccf' },
              { icon: Briefcase, title: 'Affordable Solutions',  color: '#147bf2' },
              { icon: Award, title: 'Trusted Support', color: '#51b3fc' },
              { icon: TrendingUp, title: 'On-Time Delivery',  color: '#219bfe' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-shadow"
              >
                <stat.icon size={48} className="mx-auto mb-4" style={{ color: stat.color }} />
                <h3 className="text-4xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#0b5ccf] to-[#147bf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What People Say
            </h2>
            <p className="text-xl text-blue-100">Real stories from our community</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-blue-200 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0b5ccf' }}>
              Have a Question? Let's Connect.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're a student looking to start your journey or a business seeking IT solutions, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' }}
                >
                  Contact Us
                </motion.button>
              </Link>
              <a
                href="https://wa.me/7705084226?text=Hi%2C%20I%20have%20a%20question%20about%20Nexbern%20Technologies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 rounded-lg font-semibold"
                  style={{ borderColor: '#0b5ccf', color: '#0b5ccf' }}
                >
                  WhatsApp Us
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;