import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Upload } from 'lucide-react';

const ApplyModal = ({ isOpen, onClose, position }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Job Application*%0A%0A*Position:* ${position}%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Experience:* ${formData.experience}%0A*Current Company:* ${formData.currentCompany}%0A*LinkedIn:* ${formData.linkedIn}%0A*Portfolio:* ${formData.portfolio}%0A*Cover Letter:* ${formData.coverLetter}`;
    window.open(`https://wa.me/7705084226?text=${message}`, '_blank');
    
    const emailSubject = `Job Application: ${position} - ${formData.name}`;
    const emailBody = `Position: ${position}%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AExperience: ${formData.experience}%0ACurrent Company: ${formData.currentCompany}%0ALinkedIn: ${formData.linkedIn}%0APortfolio: ${formData.portfolio}%0A%0ACover Letter:%0A${formData.coverLetter}`;
    window.open(`mailto:nexberntechnologies@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    
    onClose();
    setFormData({ name: '', email: '', phone: '', experience: '', currentCompany: '', linkedIn: '', portfolio: '', coverLetter: '' });
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
              <h2 className="text-2xl font-bold mb-2">Apply for Position</h2>
              <p className="text-blue-100">{position}</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience *</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                  placeholder="e.g., 3 years"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Company</label>
                <input
                  type="text"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                  placeholder="Your current employer"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Portfolio/GitHub URL</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                  placeholder="https://github.com/yourprofile or portfolio link"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Letter *</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf] resize-none"
                  placeholder="Tell us why you're the perfect fit for this role..."
                />
              </div>

              <div className="bg-blue-50 p-3 rounded-lg text-sm text-gray-600">
                <p className="flex items-start space-x-2">
                  <Upload size={16} className="mt-0.5" style={{ color: '#0b5ccf' }} />
                  <span>After submitting, please email your resume to nexberntechnologies@gmail.com with subject: Application - {position}</span>
                </p>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center space-x-2"
                style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' }}
              >
                <span>Submit Application</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;