import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const ServiceQuoteModal = ({ isOpen, onClose, serviceName }) => {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'New Project',
    budget: '',
    timeline: '',
    description: ''
  });

  const services = [
    'Website Development',
    'Mobile App Development',
    'AI & Machine Learning',
    'SEO & Digital Marketing',
    'Cloud Solutions',
    'IT Consulting'
  ];

  const budgetRanges = [
    'Under ₹15,000',
    '₹15,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    'Above ₹1,00,000'
  ];

  const timelineOptions = [
    'Less than 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  useEffect(() => {
    if (serviceName) {
      setFormData(prev => ({ ...prev, service: serviceName }));
    }
  }, [serviceName]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format WhatsApp message with all details
    const whatsappMessage = `*💼 Service Quote Request*%0A%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Company:* ${formData.company || 'Not provided'}%0A` +
      `*Project Type:* ${formData.projectType}%0A` +
      `*Budget:* ${formData.budget}%0A` +
      `*Timeline:* ${formData.timeline}%0A` +
      `*Description:* ${formData.description || 'Not provided'}`;
    
    // Send to WhatsApp
    window.open(`https://wa.me/7705084226?text=${whatsappMessage}`, '_blank');
    
    // Also send email
    const emailSubject = `Service Quote Request: ${formData.service} - ${formData.name}`;
    const emailBody = `Service: ${formData.service}%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company || 'Not provided'}%0AProject Type: ${formData.projectType}%0ABudget: ${formData.budget}%0ATimeline: ${formData.timeline}%0A%0ADescription:%0A${formData.description || 'Not provided'}`;
    window.open(`mailto:nexberntechnologies@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    
    onClose();
    setFormData({ service: '', name: '', email: '', phone: '', company: '', projectType: 'New Project', budget: '', timeline: '', description: '' });
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
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-gradient-to-br from-[#0b5ccf] to-[#147bf2] text-white p-6 rounded-t-2xl z-10">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-2">Get a Quote</h2>
              <p className="text-blue-100">{formData.service || 'Select a service'}</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Select Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                      placeholder="Enter your name"
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
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                      placeholder="Your company (optional)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                  >
                    <option value="New Project">New Project</option>
                    <option value="Redesign/Upgrade">Redesign/Upgrade</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf]"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf] resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center space-x-2"
                  style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' }}
                >
                  <span>Submit Quote Request</span>
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceQuoteModal;