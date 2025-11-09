import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const teamMembers = [
    { name: 'Amit Kumar', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
    { name: 'Priya Singh', role: 'Head of EdTech', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
    { name: 'Rahul Verma', role: 'CTO', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    { name: 'Sneha Patel', role: 'Head of IT Services', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' }
  ];

  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Constantly exploring new technologies and teaching methods', color: '#0b5ccf' },
    { icon: Heart, title: 'Integrity', description: 'Honest, transparent, and ethical in all our dealings', color: '#147bf2' },
    { icon: Award, title: 'Growth', description: 'Committed to continuous learning and improvement', color: '#51b3fc' },
    { icon: Users, title: 'Collaboration', description: 'Building strong partnerships between students and clients', color: '#219bfe' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0b5ccf] to-[#147bf2] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Nexbern Technologies</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Building bridges between education and industry, one student at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0b5ccf] to-[#51b3fc] flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#0b5ccf' }}>Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become India's leading hybrid EdTech and IT services company, where students don't just learn—they build, earn, and create their future while delivering exceptional value to businesses worldwide.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#147bf2] to-[#219bfe] flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#0b5ccf' }}>Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To shape the future of students by preparing them for the tech industry through real-world project experience, while providing cutting-edge IT services to clients with affordable, innovative solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Hybrid Model */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              The Hybrid Model Explained
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A revolutionary ecosystem connecting students, technology, and business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Learn', desc: 'Students enroll in our training programs', color: '#0b5ccf' },
              { step: '2', title: 'Build', desc: 'Work on live client projects under supervision', color: '#147bf2' },
              { step: '3', title: 'Earn', desc: 'Get paid for project work during graduation', color: '#51b3fc' },
              { step: '4', title: 'Succeed', desc: 'Graduate with skills, experience & job offers', color: '#219bfe' }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
              >
                <div 
                  className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10"
                  style={{ background: item.color, transform: 'translate(30%, -30%)' }}
                />
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-white text-xl"
                  style={{ background: item.color }}
                >
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#0b5ccf' }}>Win</div>
                <p className="text-gray-600 font-semibold mb-2">Students</p>
                <p className="text-sm text-gray-500">Skills + Experience + Income + Placement</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#147bf2' }}>Win</div>
                <p className="text-gray-600 font-semibold mb-2">Clients</p>
                <p className="text-sm text-gray-500">Affordable + Quality + Innovation</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#51b3fc' }}>Win</div>
                <p className="text-gray-600 font-semibold mb-2">Nexbern</p>
                <p className="text-sm text-gray-500">Sustainable Ecosystem + Impact</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-[#0b5ccf] to-[#147bf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-blue-100">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
              >
                <value.icon size={48} className="text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-blue-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0b5ccf' }}>
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of a revolutionary ecosystem that's shaping the future of education and technology
            </p>
            
            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold text-white text-lg"
                style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' }}
              >
                Get Started Today
              </motion.button>
            
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;