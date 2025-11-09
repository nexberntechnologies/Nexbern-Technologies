import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud, TrendingUp, DollarSign, Briefcase, Award, Clock } from 'lucide-react';

const EdTech = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const courses = [
    {
      icon: Code,
      title: 'Web Development',
      duration: '6 months',
      level: 'Beginner to Advanced',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      color: '#0b5ccf'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      duration: '8 months',
      level: 'Intermediate',
      skills: ['Python', 'TensorFlow', 'Neural Networks', 'Deep Learning'],
      color: '#147bf2'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      duration: '5 months',
      level: 'Intermediate',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DevOps'],
      color: '#51b3fc'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & SEO',
      duration: '4 months',
      level: 'Beginner',
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      color: '#219bfe'
    }
  ];

  const testimonials = [
    {
      name: 'Arjun Malhotra',
      course: 'Web Development',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      text: 'Nexbern changed my life. I learned web development, worked on 5 live projects, and earned ₹50,000 during my final year. Now I have a job offer even before graduation!'
    },
    {
      name: 'Sanya Reddy',
      course: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
      text: 'The hands-on experience with real AI projects was incredible. The mentors are patient, knowledgeable, and truly invested in your success.'
    },
    {
      name: 'Vikram Joshi',
      course: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
      text: 'I gained practical cloud skills that colleges don\'t teach. Working on client projects while learning was the best decision I made.'
    }
  ];

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
            <a
              href="https://wa.me/7705084226?text=Hi%2C%20I%20want%20to%20join%20Nexbern%20EdTech%20programs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white rounded-lg font-semibold text-lg"
                style={{ color: '#0b5ccf' }}
              >
                Join as a Student
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Programs We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              Programs We Offer
            </h2>
            <p className="text-xl text-gray-600">Industry-relevant courses designed for your success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: `linear-gradient(135deg, ${course.color} 0%, #51b3fc 100%)` }}
                >
                  <course.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: course.color }}>{course.title}</h3>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award size={16} />
                    <span>{course.level}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">What You'll Learn:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: course.color }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={`https://wa.me/7705084226?text=Hi%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(course.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="w-full py-3 rounded-lg font-semibold text-white"
                    style={{ background: `linear-gradient(135deg, ${course.color} 0%, #51b3fc 100%)` }}
                  >
                    Enroll Now
                  </motion.button>
                </a>
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              Why Choose Our Programs?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Real-World Experience', desc: 'Work on actual client projects, not just theoretical assignments', color: '#0b5ccf' },
              { title: 'Earn While You Learn', desc: 'Get paid for your contributions to live projects', color: '#147bf2' },
              { title: 'Industry Mentors', desc: 'Learn from professionals with years of industry experience', color: '#51b3fc' },
              { title: 'Job Placement', desc: '88% of our students get placed before graduation', color: '#219bfe' },
              { title: 'Portfolio Building', desc: 'Build a strong portfolio that impresses employers', color: '#0b5ccf' },
              { title: 'Flexible Learning', desc: 'Study at your own pace with flexible schedules', color: '#147bf2' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-full mb-4"
                  style={{ background: benefit.color }}
                />
                <h3 className="text-xl font-bold mb-3" style={{ color: benefit.color }}>{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#0b5ccf] to-[#147bf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-blue-100">Real transformations, real futures</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-blue-200">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-white leading-relaxed">"{testimonial.text}"</p>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of students who are building their future with Nexbern
            </p>
            <a
              href="https://wa.me/7705084226?text=Hi%2C%20I%20want%20to%20join%20Nexbern%20EdTech%20programs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold text-white text-lg"
                style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' }}
              >
                Apply Now
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EdTech;