import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Brain, TrendingUp, Cloud, Headphones, CheckCircle, ArrowRight } from 'lucide-react';
import ServiceQuoteModal from '../components/ui/ServiceQuoteModal';

const ITServices = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies. Responsive, fast, and SEO-optimized.',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'Progressive Web Apps'],
      color: '#0b5ccf'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Apps', 'React Native', 'Flutter', 'App Store Deployment'],
      color: '#147bf2'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision', 'Chatbots'],
      color: '#51b3fc'
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description: 'Boost your online presence and drive traffic with data-driven marketing strategies.',
      features: ['SEO Optimization', 'Content Marketing', 'Social Media', 'PPC Campaigns'],
      color: '#219bfe'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS/Azure Setup', 'Cloud Migration', 'DevOps', 'Server Management'],
      color: '#0b5ccf'
    },
    {
      icon: Headphones,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      features: ['Technology Strategy', 'System Architecture', 'Security Audit', 'Performance Optimization'],
      color: '#147bf2'
    }
  ];

  const projects = [
    { title: 'E-commerce Platform', category: 'Web Development', image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=600&q=80' },
    { title: 'Healthcare App', category: 'Mobile Development', image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=600&q=80' },
    { title: 'AI Chatbot', category: 'AI/ML', image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&q=80' },
    { title: 'Marketing Campaign', category: 'Digital Marketing', image: 'https://images.unsplash.com/photo-1629481317043-16b1343d77d9?w=600&q=80' }
  ];

  const clientTestimonials = [
    {
      company: 'TechStart Solutions',
      person: 'Rajesh Gupta, CEO',
      text: 'Nexbern delivered our complete web platform on time and within budget. Their team is professional and responsive.'
    },
    {
      company: 'HealthFirst Clinic',
      person: 'Dr. Meera Nair',
      text: 'The mobile app they built for us has transformed how we serve our patients. Excellent work!'
    },
    {
      company: 'RetailHub India',
      person: 'Amit Patel, CTO',
      text: 'Their SEO services doubled our website traffic in just 3 months. Highly recommended!'
    }
  ];

  const handleGetQuote = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0b5ccf] via-[#147bf2] to-[#51b3fc] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering Businesses with <br />Innovative IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              From websites to AI solutions - we deliver excellence in every project
            </p>
            <motion.button
              onClick={() => {
                setSelectedService('');
                setQuoteModalOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white rounded-lg font-semibold text-lg"
              style={{ color: '#0b5ccf' }}
            >
              Get a Quote
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              Our Services
            </h2>
            <p className="text-xl text-gray-600">Comprehensive IT solutions tailored to your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ background: `linear-gradient(135deg, ${service.color} 0%, #51b3fc 100%)` }}
                >
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: service.color }}>{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <CheckCircle size={16} style={{ color: service.color }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  onClick={() => handleGetQuote(service.title)}
                  whileHover={{ scale: 1.05 }}
                  className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center space-x-2"
                  style={{ background: `linear-gradient(135deg, ${service.color} 0%, #51b3fc 100%)` }}
                >
                  <span>Get Quote</span>
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              Why Choose Nexbern?
            </h2>
            <p className="text-xl text-gray-600">Quality, affordability, and innovation combined</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Affordable Pricing',
                description: 'Quality IT services at competitive rates that fit your budget',
                color: '#0b5ccf'
              },
              {
                title: 'Expert Team',
                description: 'Experienced professionals combined with talented young developers',
                color: '#147bf2'
              },
              {
                title: 'On-Time Delivery',
                description: 'We respect deadlines and deliver projects on schedule',
                color: '#51b3fc'
              },
              {
                title: 'Modern Tech Stack',
                description: 'Latest technologies and best practices for cutting-edge solutions',
                color: '#219bfe'
              },
              {
                title: 'Ongoing Support',
                description: 'Continuous maintenance and support after project completion',
                color: '#0b5ccf'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored to your specific business needs and goals',
                color: '#147bf2'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div 
                  className="w-12 h-12 rounded-full mb-4"
                  style={{ background: benefit.color }}
                />
                <h3 className="text-xl font-bold mb-3" style={{ color: benefit.color }}>{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">See what we've built for our clients</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <p className="text-blue-300 text-sm mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#0b5ccf] to-[#147bf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-100">Trusted by businesses across industries</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <p className="text-white leading-relaxed mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.company}</p>
                  <p className="text-blue-200 text-sm">{testimonial.person}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0b5ccf' }}>
              Looking for a Reliable IT Partner?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's build something amazing together. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  setSelectedService('');
                  setQuoteModalOpen(true);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold text-white text-lg"
                style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' }}
              >
                Get Started
              </motion.button>
              <a href="mailto:nexberntechnologies@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 rounded-lg font-semibold text-lg"
                  style={{ borderColor: '#0b5ccf', color: '#0b5ccf' }}
                >
                  Email Us
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        serviceName={selectedService}
      />
    </div>
  );
};

export default ITServices;