import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Marketing'];

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web',
      description: 'Full-featured online store with payment integration, inventory management, and admin dashboard',
      image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Completed',
      client: 'RetailHub India',
      students: ['Arjun M.', 'Priya S.'],
      color: '#0b5ccf'
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile',
      description: 'Patient management system with appointment booking, telemedicine, and health records',
      image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80',
      tech: ['React Native', 'Firebase', 'Node.js'],
      status: 'Completed',
      client: 'HealthFirst Clinic',
      students: ['Vikram J.', 'Sanya R.'],
      color: '#147bf2'
    },
    {
      title: 'AI Chatbot for Customer Support',
      category: 'AI/ML',
      description: 'Intelligent chatbot using NLP for automated customer service and query resolution',
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80',
      tech: ['Python', 'TensorFlow', 'NLP', 'React'],
      status: 'Completed',
      client: 'TechStart Solutions',
      students: ['Rahul V.', 'Neha K.'],
      color: '#51b3fc'
    },
    {
      title: 'Real Estate Website',
      category: 'Web',
      description: 'Property listing platform with search filters, virtual tours, and inquiry management',
      image: 'https://images.unsplash.com/photo-1629481317043-16b1343d77d9?w=800&q=80',
      tech: ['React', 'Express', 'PostgreSQL', 'AWS'],
      status: 'Ongoing',
      client: 'PropHub Realty',
      students: ['Amit P.', 'Divya M.', 'Rohit S.'],
      color: '#219bfe'
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Marketing',
      description: 'Complete SEO optimization and social media marketing campaign that doubled organic traffic',
      image: 'https://images.unsplash.com/photo-1526253038957-bce54e05968e?w=800&q=80',
      tech: ['SEO', 'Google Analytics', 'Social Media', 'Content'],
      status: 'Completed',
      client: 'Fashion Bazaar',
      students: ['Sneha P.', 'Karan T.'],
      color: '#0b5ccf'
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile',
      description: 'Full-stack food ordering platform with real-time tracking and payment integration',
      image: 'https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?w=800&q=80',
      tech: ['Flutter', 'Firebase', 'Google Maps API', 'Razorpay'],
      status: 'Ongoing',
      client: 'QuickBite Services',
      students: ['Ananya R.', 'Varun M.'],
      color: '#147bf2'
    },
    {
      title: 'Predictive Analytics Dashboard',
      category: 'AI/ML',
      description: 'Business intelligence dashboard with ML-powered sales forecasting and trend analysis',
      image: 'https://images.unsplash.com/photo-1759884248009-92c5e957708e?w=800&q=80',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'D3.js'],
      status: 'Ongoing',
      client: 'Analytics Pro',
      students: ['Deepak L.', 'Pooja N.'],
      color: '#51b3fc'
    },
    {
      title: 'Educational Learning Platform',
      category: 'Web',
      description: 'Online learning management system with video courses, quizzes, and progress tracking',
      image: 'https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
      status: 'Completed',
      client: 'EduTech Academy',
      students: ['Ravi K.', 'Meera S.', 'Aditya B.'],
      color: '#219bfe'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Real projects built by our students, delivering real value to clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === category
                    ? 'text-white shadow-lg'
                    : 'bg-blue-50 hover:bg-blue-100'
                }`}
                style={{
                  background: filter === category ? 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' : undefined,
                  color: filter === category ? 'white' : '#0b5ccf'
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                layout
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                {/* Project Image */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'Completed' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-white'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-sm font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${project.color}20`, color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3" style={{ color: project.color }}>
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-blue-50 rounded-full"
                          style={{ color: project.color }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="mb-3">
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-semibold" style={{ color: project.color }}>{project.client}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Student Developers</p>
                      <div className="flex flex-wrap gap-2">
                        {project.students.map((student, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-blue-50 rounded"
                            style={{ color: project.color }}
                          >
                            {student}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
              Want to Work on Live Projects?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our training programs and start building real projects from day one
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white rounded-lg font-semibold text-lg"
                  style={{ color: '#0b5ccf' }}
                >
                  Join as Student
                </motion.button>
              </Link>
              
              <Link to="/it-services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white rounded-lg font-semibold text-lg text-white"
                >
                  Hire Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;