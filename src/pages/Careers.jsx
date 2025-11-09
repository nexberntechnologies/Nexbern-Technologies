import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, ChevronDown, Users, TrendingUp, Award, Heart } from 'lucide-react';

const Careers = () => {
  const [openPosition, setOpenPosition] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const positions = [
    {
      title: 'Full Stack Developer',
      department: 'IT Services',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6-10 LPA',
      description: 'We are looking for an experienced Full Stack Developer to join our IT Services team.',
      responsibilities: [
        'Develop and maintain web applications using React and Node.js',
        'Collaborate with students on live client projects',
        'Write clean, maintainable code following best practices',
        'Mentor junior developers and students',
        'Participate in code reviews and technical discussions'
      ],
      requirements: [
        '2+ years of experience in full stack development',
        'Strong proficiency in React, Node.js, and MongoDB',
        'Experience with RESTful APIs and version control (Git)',
        'Good communication and mentoring skills',
        'Bachelor\'s degree in Computer Science or related field'
      ],
      color: '#0b5ccf'
    },
    {
      title: 'AI/ML Engineer',
      department: 'IT Services',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-15 LPA',
      description: 'Join our AI team to build cutting-edge machine learning solutions for our clients.',
      responsibilities: [
        'Design and implement ML models for various applications',
        'Work on NLP and computer vision projects',
        'Train and mentor students in AI/ML concepts',
        'Collaborate with cross-functional teams',
        'Stay updated with latest AI/ML trends and technologies'
      ],
      requirements: [
        '3+ years of experience in ML/AI development',
        'Strong knowledge of Python, TensorFlow, PyTorch',
        'Experience with NLP and/or computer vision',
        'Published research or contributions to open source (preferred)',
        'Master\'s degree in CS, AI, or related field'
      ],
      color: '#147bf2'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'IT Services',
      location: 'On-site',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹4-7 LPA',
      description: 'Help businesses grow their online presence through strategic digital marketing campaigns.',
      responsibilities: [
        'Plan and execute SEO, SEM, and social media campaigns',
        'Analyze campaign performance and provide insights',
        'Train students in digital marketing best practices',
        'Manage client relationships and deliverables',
        'Create content strategies for various platforms'
      ],
      requirements: [
        '1+ years of experience in digital marketing',
        'Proficiency in Google Analytics, SEO tools, and social media platforms',
        'Strong analytical and communication skills',
        'Experience with content creation and copywriting',
        'Certifications in Google Ads, Facebook Ads (preferred)'
      ],
      color: '#51b3fc'
    },
    {
      title: 'Technical Trainer',
      department: 'EdTech',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹5-9 LPA',
      description: 'Inspire and educate the next generation of developers through our training programs.',
      responsibilities: [
        'Conduct training sessions on web development, AI/ML, or cloud computing',
        'Create course content and learning materials',
        'Mentor students and track their progress',
        'Evaluate student projects and provide feedback',
        'Stay current with industry trends and update curriculum'
      ],
      requirements: [
        '2+ years of industry experience in relevant tech domain',
        'Passion for teaching and mentoring',
        'Strong communication and presentation skills',
        'Experience with curriculum development (preferred)',
        'Bachelor\'s degree in Computer Science or related field'
      ],
      color: '#219bfe'
    },
    {
      title: 'Intern - Web Development',
      department: 'EdTech',
      location: 'Remote',
      type: 'Internship',
      experience: 'Fresher',
      salary: '₹10,000-15,000/month',
      description: 'Learn and grow with us! Work on real projects while building your skills.',
      responsibilities: [
        'Assist in developing web applications',
        'Learn from experienced developers',
        'Work on assigned project modules',
        'Participate in team meetings and code reviews',
        'Complete training modules and assignments'
      ],
      requirements: [
        'Currently pursuing or completed degree in CS/IT',
        'Basic knowledge of HTML, CSS, JavaScript',
        'Eager to learn and grow',
        'Good problem-solving skills',
        'Available for 3-6 months internship'
      ],
      color: '#0b5ccf'
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Career Growth', desc: 'Clear path for advancement and skill development' },
    { icon: Users, title: 'Collaborative Culture', desc: 'Work with passionate and talented individuals' },
    { icon: Award, title: 'Competitive Salary', desc: 'Industry-standard compensation and benefits' },
    { icon: Heart, title: 'Work-Life Balance', desc: 'Flexible working hours and remote options' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0b5ccf] via-[#147bf2] to-[#51b3fc] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Build the future of education and technology with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600">More than just a job - it's a mission</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' }}
                >
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0b5ccf' }}>{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">Find your perfect role with us</p>
          </motion.div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenPosition(openPosition === index ? null : index)}
                  className="w-full p-6 text-left hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3" style={{ color: position.color }}>
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Briefcase size={16} />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign size={16} />
                          <span>{position.salary}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openPosition === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} style={{ color: position.color }} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {openPosition === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 border-t">
                        <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-bold mb-3" style={{ color: position.color }}>Responsibilities:</h4>
                          <ul className="space-y-2">
                            {position.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-gray-600">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-bold mb-3" style={{ color: position.color }}>Requirements:</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-gray-600">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a
                          href={`https://wa.me/7705084226?text=Hi%2C%20I%20want%20to%20apply%20for%20${encodeURIComponent(position.title)}%20position`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-lg font-semibold text-white"
                            style={{ background: `linear-gradient(135deg, ${position.color} 0%, #51b3fc 100%)` }}
                          >
                            Apply Now
                          </motion.button>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0b5ccf] to-[#147bf2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals. Send us your resume and let's talk!
            </p>
            <a
              href="https://wa.me/7705084226?text=Hi%2C%20I%20want%20to%20explore%20career%20opportunities%20at%20Nexbern"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white rounded-lg font-semibold text-lg"
                style={{ color: '#0b5ccf' }}
              >
                Contact Us
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;