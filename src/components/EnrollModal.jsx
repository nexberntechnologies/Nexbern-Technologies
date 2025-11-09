import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const EnrollModal = ({ isOpen, onClose, courseName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    education: '',
    experience: 'Beginner',
    message: ''
  });

  const courses = [
    'Full Stack Web Development',
    'Mobile App Development',
    'AI & Machine Learning',
    'Cloud Computing & DevOps',
    'Digital Marketing & SEO',
    'UI/UX Design',
    'Data Science & Analytics',
    'Cybersecurity Fundamentals'
  ];

  useEffect(() => {
    if (courseName) {
      setFormData(prev => ({ ...prev, course: courseName }));
    }
  }, [courseName]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format WhatsApp message with all details
    const whatsappMessage = `*🎓 Course Enrollment Request*%0A%0A` +
      `*Course:* ${formData.course}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Education:* ${formData.education}%0A` +
      `*Experience Level:* ${formData.experience}%0A` +
      `*Message:* ${formData.message || 'Not provided'}`;
    
    // Send to WhatsApp
    window.open(`https://wa.me/7705084226?text=${whatsappMessage}`, '_blank');
    
    // Also send email
    const emailSubject = `Course Enrollment: ${formData.course} - ${formData.name}`;
    const emailBody = `Course: ${formData.course}%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AEducation: ${formData.education}%0AExperience: ${formData.experience}%0A%0AMessage:%0A${formData.message || 'Not provided'}`;
    window.open(`mailto:nexberntechnologies@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    
    onClose();
    setFormData({ name: '', email: '', phone: '', course: '', education: '', experience: 'Beginner', message: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-gradient-to-br from-[#0b5ccf] to-[#147bf2] text-white p-6 rounded-t-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-2">Enroll in Course</h2>
              <p className="text-blue-100">{formData.course || 'Select a course'}</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Course *</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                >
                  <option value="">Choose a course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Education *</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                  placeholder="e.g., 12th Pass, B.Tech 2nd Year"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Experience Level *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                >
                  <option value="Beginner">Beginner (No Experience)</option>
                  <option value="Some Knowledge">Some Knowledge</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Why do you want to join this course?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf] resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center space-x-2"
                style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' }}
              >
                <span>Submit Enrollment</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnrollModal;