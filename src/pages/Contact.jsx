import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    messageType: 'General',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Type:* ${formData.messageType}%0A*Message:* ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/7705084226?text=${message}`, '_blank');
    
    // Also send email
    const emailSubject = `Contact Form: ${formData.messageType} - ${formData.name}`;
    const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AType: ${formData.messageType}%0A%0AMessage:%0A${formData.message}`;
    window.open(`mailto:nexberntechnologies@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        messageType: 'General',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div {...fadeInUp} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0b5ccf' }}>
                Send Us a Message
              </h2>
              
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <CheckCircle size={64} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    We've received your message and will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf] transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf] transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf] transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message Type *
                    </label>
                    <select
                      name="messageType"
                      value={formData.messageType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf] transition-all"
                    >
                      <option value="General">General Inquiry</option>
                      <option value="Student">Student Enrollment</option>
                      <option value="Client">IT Services</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Career">Career Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5ccf] transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-lg font-semibold text-white flex items-center justify-center space-x-2"
                    style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' }}
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#0b5ccf' }}>
                  Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you're a student looking to start your journey or a business seeking IT solutions, we're here to help. Reach out to us through any of the channels below.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
                <a
                  href="mailto:nexberntechnologies@gmail.com"
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #0b5ccf 0%, #51b3fc 100%)' }}
                  >
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#0b5ccf' }}>Email Us</h3>
                    <p className="text-gray-600">nexberntechnologies@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/7705084226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #147bf2 0%, #51b3fc 100%)' }}
                  >
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#147bf2' }}>Call or WhatsApp</h3>
                    <p className="text-gray-600">+91 77050 84226</p>
                    <p className= "text-gray-600">+91 7071402831</p>

                    <p className="text-sm text-gray-500 mt-1">Available Mon-Sat, 9 AM - 6 PM</p>
                  </div>
                </a>

                {/* <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #51b3fc 0%, #219bfe 100%)' }}
                  >
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#51b3fc' }}>Visit Us</h3>
                    <p className="text-gray-600">Innovation Hub, Tech City</p>
                    <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                  </div>
                </div> */}
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-[#0b5ccf] to-[#147bf2] p-6 rounded-2xl text-white">
                <h3 className="font-bold mb-2">Office Hours</h3>
                <div className="space-y-1 text-sm text-blue-100">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              Find Us on the Map
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411537501422!3d18.56204098255687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0b5ccf' }}>
              Quick Answers
            </h2>
            <p className="text-xl text-gray-600">Common questions we receive</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What are your training programs?',
                a: 'We offer comprehensive training in Web Development, AI/ML, Cloud Computing, Digital Marketing, and more. Students work on live projects and earn while they learn.'
              },
              {
                q: 'How can I enroll in a course?',
                a: 'Simply fill out the contact form above or WhatsApp us. Our counselors will guide you through the enrollment process and help you choose the right program.'
              },
              {
                q: 'Do you provide IT services to businesses?',
                a: 'Yes! We offer complete IT solutions including web development, mobile apps, AI/ML solutions, digital marketing, and cloud services. Contact us for a free consultation.'
              },
              {
                q: 'What makes Nexbern different?',
                a: 'Our unique hybrid model allows students to learn while working on real client projects. This gives them practical experience and income opportunities while studying.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="font-bold mb-2" style={{ color: '#0b5ccf' }}>{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;