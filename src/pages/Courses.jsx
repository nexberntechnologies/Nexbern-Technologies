import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud, TrendingUp,DollarSign, Palette,Award,  Database,Briefcase, Shield, Smartphone } from 'lucide-react';
import EnrollModal from '../components/EnrollModal';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Cloud', 'Marketing'];

  const courses = [
    {
      icon: Code,
      title: 'Full Stack Web Development',
      category: 'Web',
      duration: '2 months',
      level: 'Beginner to Intermediate',
      students: '30+',
      price: '₹2199',
      description: 'Master both frontend and backend development with React, Node.js, and MongoDB',
      syllabus: ['HTML, CSS, JavaScript', 'React & Redux', 'Node.js & Express', 'MongoDB', 'REST APIs', 'Deployment'],
      color: '#0b5ccf'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      category: 'Mobile',
      duration: '2 months',
      level: 'Beginner to Intermediate',
      students: '30+',
      price: '₹2199',
      description: 'Build native and cross-platform mobile apps with React Native and Flutter',
      syllabus: ['React Native Basics', 'Flutter Development', 'Mobile UI/UX', 'API Integration', 'App Store Publishing'],
      color: '#147bf2'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      category: 'AI/ML',
      duration: '2 months',
      level: 'Beginner to Intermediate',
      students: '30+',
      price: '₹2199',
      description: 'Learn AI, ML, deep learning, and neural networks with hands-on projects',
      syllabus: ['Python Programming', 'Machine Learning Algorithms', 'TensorFlow & Keras', 'Deep Learning', 'NLP', 'Computer Vision'],
      color: '#51b3fc'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing & DevOps',
      category: 'Cloud',
      duration: '2 months',
      level: 'Beginner to Intermediate',
      students: '30+',
      price: '₹2199',
      description: 'Master AWS, Azure, Docker, Kubernetes, and DevOps practices',
      syllabus: ['AWS Services', 'Azure Fundamentals', 'Docker Containers', 'Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
      color: '#219bfe'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & SEO',
      category: 'Marketing',
      duration: '2 months',
      level: 'Beginner to Intermediate',
      students: '30+',
      price: '₹2199',
      description: 'Complete digital marketing course covering SEO, social media, and analytics',
      syllabus: ['SEO Fundamentals', 'Google Analytics', 'Social Media Marketing', 'Content Marketing', 'PPC Campaigns', 'Email Marketing'],
      color: '#0b5ccf'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      category: 'Web',
      duration: '2 months',
      level: 'Beginner to Intermediate',
      students: '30+',
      price: '₹2199',
      description: 'Learn design thinking, wireframing, prototyping with Figma and Adobe XD',
      syllabus: ['Design Principles', 'Figma Mastery', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: '#147bf2'
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      category: 'AI/ML',
      duration: '2 months',
      level: 'Beginner to Intermediate',
      students: '30+',
      price: '₹2199',
      description: 'Data analysis, visualization, and predictive modeling with Python',
      syllabus: ['Python for Data Science', 'Pandas & NumPy', 'Data Visualization', 'Statistical Analysis', 'Machine Learning', 'Big Data'],
      color: '#51b3fc'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Fundamentals',
      category: 'Cloud',
      duration: '2 months',
      level: 'Beginner to Intermediate',
      students: '30+',
      price: '₹2199',
      description: 'Learn ethical hacking, network security, and cyber defense strategies',
      syllabus: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Security Tools', 'Penetration Testing', 'Incident Response'],
      color: '#219bfe'
    }
  ];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#0b5ccf] via-[#147bf2] to-[#51b3fc] text-white overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1526253038957-bce54e05968e?w=1920&q=80')`,
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
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Learn. Build. Earn.</h1>
                  <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                    Transform your future with comprehensive training programs that combine learning with real-world project experience
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
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'text-white shadow-lg'
                    : 'bg-blue-50 hover:bg-blue-100'
                }`}
                style={{
                  background: selectedCategory === category ? 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' : undefined,
                  color: selectedCategory === category ? 'white' : '#0b5ccf'
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                layout
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div 
                  className="h-2"
                  style={{ background: `linear-gradient(90deg, ${course.color} 0%, #51b3fc 100%)` }}
                />
                <div className="p-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: `linear-gradient(135deg, ${course.color} 0%, #51b3fc 100%)` }}
                  >
                    <course.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3" style={{ color: course.color }}>
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-blue-50 rounded-lg p-2">
                      <p className="text-gray-500 text-xs">Duration</p>
                      <p className="font-semibold" style={{ color: course.color }}>{course.duration}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-2">
                      <p className="text-gray-500 text-xs">Level</p>
                      <p className="font-semibold" style={{ color: course.color }}>{course.level}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-2">
                      <p className="text-gray-500 text-xs">Students</p>
                      <p className="font-semibold" style={{ color: course.color }}>{course.students}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-2">
                      <p className="text-gray-500 text-xs">Price</p>
                      <p className="font-semibold" style={{ color: course.color }}>{course.price}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">What you'll learn:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.syllabus.slice(0, 4).map((topic, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-blue-50 rounded"
                          style={{ color: course.color }}
                        >
                          {topic}
                        </span>
                      ))}
                      {course.syllabus.length > 4 && (
                        <span className="text-xs px-2 py-1 bg-blue-50 rounded" style={{ color: course.color }}>
                          +{course.syllabus.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      setSelectedCourse(course.title);
                      setEnrollModalOpen(true);
                    }}
                    className="w-full py-3 rounded-lg font-semibold text-white"
                    style={{ background: `linear-gradient(135deg, ${course.color} 0%, #51b3fc 100%)` }}
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              What Makes Our Courses Different?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Live Projects', desc: 'Work on real client projects while learning' },
              { title: 'Expert Mentors', desc: 'Learn from industry professionals' },
              { title: 'Earn While Learning', desc: 'Get paid for project contributions' },
              { title: 'Job Placement', desc: '88% placement rate for graduates' },
              { title: 'Flexible Learning', desc: 'Study at your own pace' },
              { title: 'Certificate', desc: 'Industry-recognized certification' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg text-center"
              >
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0b5ccf' }}>{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            
            {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Your journey from learning to earning</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Learn', desc: 'Join our comprehensive training programs', icon: Code, color: '#0b5ccf' },
              { step: '2', title: 'Practice', desc: 'Work on live projects with supervision', icon: Briefcase, color: '#147bf2' },
              { step: '3', title: 'Earn', desc: 'Get paid for your project contributions', icon: DollarSign, color: '#51b3fc' },
              { step: '4', title: 'Succeed', desc: 'Graduate with experience and job offers', icon: Award, color: '#219bfe' }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0b5ccf] to-[#51b3fc]" />
                )}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-white text-2xl"
                  style={{ background: item.color }}
                >
                  {item.step}
                </div>
                <item.icon size={32} className="mx-auto mb-4" style={{ color: item.color }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students building their future with Nexbern
            </p>
            <a
              href="https://wa.me/7705084226?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white rounded-lg font-semibold text-lg"
                style={{ color: '#0b5ccf' }}
              >
                Talk to Our Counselor
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      <EnrollModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        courseName={selectedCourse}
      />
    </div>
  );
};

export default Courses;