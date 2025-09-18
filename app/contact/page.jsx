'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  Globe, 
  Users, 
  MessageSquare, 
  Building2, 
  Star,
  CheckCircle,
  Shield,
  Calendar,
  Navigation
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0px)';
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section, index) => {
      if (section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      content: "+92 81 9201234",
      subtitle: "Available Mon-Fri 8AM-5PM",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "info@gpgcsaryab.edu.pk",
      subtitle: "We respond within 24 hours",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Campus Address",
      content: "Saryab Road, Quetta",
      subtitle: "Balochistan, Pakistan",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday",
      subtitle: "8:00 AM - 5:00 PM",
      color: "orange"
    }
  ];

  const quickStats = [
    { icon: Users, number: "5000+", label: "Students Enrolled", color: "indigo" },
    { icon: Globe, number: "25+", label: "Academic Programs", color: "pink" },
    { icon: MessageSquare, number: "24/7", label: "Student Support", color: "yellow" },
    { icon: Calendar, number: "40+", label: "Years of Excellence", color: "teal" }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 mb-24 mt-6 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        ref={el => sectionsRef.current[0] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-6 shadow-lg">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Building2 className="w-8 h-8" />
            Contact Us
          </h1>
          <p className="text-white/90 mt-2">Government Post Graduate College Saryab Road, Quetta</p>
        </div>
        
        <div className="p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Connect with Our Academic Community
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
              We're committed to supporting your educational journey. Whether you're a prospective student, 
              current student, or community member, we're here to provide assistance and answer your questions 
              about our programs, facilities, and services.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Form and Information */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Contact Form */}
        <motion.div 
          ref={el => sectionsRef.current[1] = el}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              Send us a Message
            </h2>
          </div>
          <div className="p-8">
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Fill out the form below and our administrative team will get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-background)] focus:border-transparent transition-all duration-300 outline-none hover:shadow-lg hover:-translate-y-1"
                    placeholder="Enter your full name"
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
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-background)] focus:border-transparent transition-all duration-300 outline-none hover:shadow-lg hover:-translate-y-1"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-background)] focus:border-transparent transition-all duration-300 outline-none hover:shadow-lg hover:-translate-y-1"
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-background)] focus:border-transparent transition-all duration-300 outline-none hover:shadow-lg hover:-translate-y-1 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--primary-background)] border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          ref={el => sectionsRef.current[2] = el}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Phone className="w-6 h-6" />
              Contact Information
            </h2>
          </div>
          <div className="p-8">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={`flex cursor-pointer items-start gap-3 p-4 bg-gradient-to-r from-${info.color}-50 to-${info.color}-100 rounded-lg border-l-4 border-${info.color}-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <info.icon className={`w-6 h-6 text-${info.color}-600 mt-0.5 flex-shrink-0`} />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{info.title}</h3>
                    <p className="text-gray-700 font-medium">{info.content}</p>
                    <p className="text-gray-600 text-sm">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Access Services */}
      <motion.div 
        ref={el => sectionsRef.current[3] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Navigation className="w-6 h-6" />
            Quick Access Services
          </h2>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <MessageSquare className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">Student Services</h3>
              <p className="text-gray-600 text-sm">Academic advising, registration assistance, and student support services</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <Users className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">Admissions Office</h3>
              <p className="text-gray-600 text-sm">Information about programs, admission requirements, and application process</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <Shield className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">Administrative Office</h3>
              <p className="text-gray-600 text-sm">General inquiries, facility bookings, and administrative support</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <Clock className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">Examination Office</h3>
              <p className="text-gray-600 text-sm">Exam schedules, result inquiries, and certification services</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <Building2 className="w-12 h-12 text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">Campus Tours</h3>
              <p className="text-gray-600 text-sm">Schedule a visit to explore our facilities and meet our faculty</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg border border-pink-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <Globe className="w-12 h-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">International Office</h3>
              <p className="text-gray-600 text-sm">Support for international students and exchange programs</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* College Statistics */}
      <motion.div 
        ref={el => sectionsRef.current[4] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Star className="w-6 h-6" />
            College at a Glance
          </h2>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 rounded-lg border border-${stat.color}-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
              >
                <stat.icon className={`w-12 h-12 text-${stat.color}-600 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-[var(--primary-background)] transition-colors">{stat.number}</div>
                <div className="text-sm text-gray-600 group-hover:text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Visit Us Section */}
      <motion.div 
        ref={el => sectionsRef.current[5] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold">Visit Our Campus</h2>
        </div>
        <div className="p-8 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Experience our facilities firsthand and meet our dedicated faculty and staff. We welcome prospective students and their families to visit our campus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-block bg-[var(--primary-background)] border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold text-lg">
              Schedule Campus Visit
            </button>
            <button className="inline-block bg-transparent border-[var(--primary-background)] border-[1px] hover:bg-[var(--primary-background)] text-[var(--primary-background)] hover:text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold text-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}