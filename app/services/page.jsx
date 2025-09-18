'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Code,
  Wrench,
  Users,
  BookOpen,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  TrendingUp,
  Building2,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
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

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Technical Training",
      subtitle: "Programming & Development",
      description: "Comprehensive coding bootcamps and technical skill development programs designed for the modern workforce.",
      features: ["Web Development", "Mobile Apps", "Database Management", "Cloud Computing"],
      duration: "3-6 months",
      level: "Beginner to Advanced",
    },
    {
      id: 2,
      icon: Wrench,
      title: "Vocational Skills",
      subtitle: "Hands-on Trade Training",
      description: "Practical vocational training programs that prepare students for immediate employment in skilled trades.",
      features: ["Electrical Work", "Plumbing", "Carpentry", "Automotive Repair"],
      duration: "2-4 months",
      level: "Entry to Professional",
    },
    {
      id: 3,
      icon: Users,
      title: "Business Skills",
      subtitle: "Leadership & Management",
      description: "Essential business and entrepreneurship skills for career advancement and business development.",
      features: ["Project Management", "Digital Marketing", "Finance", "Leadership"],
      duration: "1-3 months",
      level: "Intermediate to Advanced",
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Digital Literacy",
      subtitle: "Computer & Internet Skills",
      description: "Foundation digital skills for the modern workplace, from basic computer use to advanced applications.",
      features: ["Microsoft Office", "Internet Safety", "Email & Communication", "Basic Programming"],
      duration: "1-2 months",
      level: "Beginner to Intermediate",
    },
    {
      id: 5,
      icon: Zap,
      title: "Advanced Certifications",
      subtitle: "Industry-Recognized Credentials",
      description: "Specialized certification programs that validate expertise and enhance career prospects.",
      features: ["IT Certifications", "Trade Licenses", "Professional Credentials", "Continuing Education"],
      duration: "Variable",
      level: "Professional",
    },
    {
      id: 6,
      icon: Target,
      title: "Career Placement",
      subtitle: "Job Readiness & Support",
      description: "Comprehensive career services including job placement assistance and interview preparation.",
      features: ["Resume Building", "Interview Coaching", "Job Matching", "Career Counseling"],
      duration: "Ongoing",
      level: "All Levels",
    }
  ];

  const stats = [
    { icon: Users, number: "15,000+", label: "Students Trained" },
    { icon: Star, number: "85%", label: "Job Placement Rate" },
    { icon: BookOpen, number: "50+", label: "Training Programs" },
    { icon: Clock, number: "10+", label: "Years of Excellence" }
  ];

  const features = [
    {
      icon: Shield,
      title: "Industry-Standard Training",
      description: "All our programs meet current industry standards and requirements."
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from experienced professionals with real-world expertise."
    },
    {
      icon: TrendingUp,
      title: "Career Growth Focus",
      description: "Programs designed to accelerate your career progression."
    },
    {
      icon: CheckCircle,
      title: "Flexible Learning",
      description: "Multiple learning formats to fit your schedule and lifestyle."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 mb-24 mt-6 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div
        ref={el => sectionsRef.current[0] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-6 shadow-lg">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Building2 className="w-8 h-8" />
            Our Services
          </h1>
          <p className="text-white/90 mt-2">Government Post Graduate College Saryab Road, Quetta</p>
        </div>

        <div className="p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Training Programs & Services
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
              Empowering individuals with cutting-edge skills and knowledge for a successful career in today's competitive market.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-[var(--primary-background)] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--secondry-color)] group-hover:text-[var(--primary-background)] transition-colors duration-300">
                    <stat.icon size={20} className="text-white group-hover:text-[var(--primary-background)]" />
                  </div>
                  <div className="text-xl font-bold text-gray-800 mb-1 group-hover:text-[var(--primary-background)]">{stat.number}</div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div
        ref={el => sectionsRef.current[1] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Star className="w-6 h-6" />
            Our Training Programs
          </h2>
        </div>
        <div className="p-8">
          <p className="text-gray-600 leading-relaxed text-lg mb-6 text-center">
            Choose from our comprehensive range of training programs designed to meet industry demands and career aspirations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              >
                <div className="h-2 bg-[var(--primary-background)]"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[var(--primary-background)] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-[var(--primary-background)]">{service.title}</h3>
                      <p className="text-sm text-gray-500">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-semibold text-gray-700">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-semibold text-gray-700">{service.level}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-l-4 border-[var(--primary-background)] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                        >
                          <CheckCircle className="w-5 h-5 text-[var(--primary-background)] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className="w-full bg-[var(--primary-background)] border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        ref={el => sectionsRef.current[2] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Star className="w-6 h-6" />
            Why Choose GPGCQ Saryab?
          </h2>
        </div>
        <div className="p-8">
          <p className="text-gray-600 leading-relaxed text-lg mb-6 text-center">
            We're committed to providing world-class training that prepares you for real-world success.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-[var(--primary-background)] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--secondry-color)] group-hover:text-[var(--primary-background)] transition-colors duration-300">
                  <feature.icon size={28} className="text-white group-hover:text-[var(--primary-background)]" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        ref={el => sectionsRef.current[3] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Star className="w-6 h-6" />
            Ready to Transform Your Career?
          </h2>
        </div>
        <div className="p-8 text-center">
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Join thousands of successful graduates who have advanced their careers through our comprehensive training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
            <button
              className="bg-[var(--primary-background)] border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold text-lg flex items-center justify-center space-x-2"
            >
              <span>Enroll Now</span>
              <ArrowRight size={18} />
            </button>
            </Link>
              <button
                className="inline-block bg-transparent border-[var(--primary-background)] border-[1px] hover:bg-[var(--primary-background)] text-[var(--primary-background)] hover:text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold text-lg"
              >
                Schedule Consultation
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}