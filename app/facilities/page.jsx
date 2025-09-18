'use client'
import React, { useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Home, 
  Bus, 
  Monitor, 
  Wifi,
  Building2,
  Users,
  Clock,
  MapPin,
  Calendar,
  Star,
  CheckCircle,
  Shield,
  Zap,
  GraduationCap
} from 'lucide-react';

const FacilitiesPage = () => {
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

  const facilityFeatures = {
    library: [
      'Over 25,000 books and journals',
      'Digital library with e-books access',
      'Quiet study areas and reading rooms',
      'Research assistance services',
      'Extended hours during exam periods',
      'Photocopying and printing facilities'
    ],
    hostel: [
      'Separate hostels for male and female students',
      'Furnished rooms with study tables',
      '24/7 security and warden supervision',
      'Common rooms for recreation',
      'Mess facilities with nutritious meals',
      'Laundry and medical facilities'
    ],
    transport: [
      'Daily bus service from major city areas',
      'Safe and reliable transportation',
      'Affordable monthly passes available',
      'Professional and experienced drivers',
      'Regular maintenance and safety checks',
      'Fixed schedules and multiple routes'
    ],
    computerLab: [
      'Modern computers with latest software',
      'High-speed internet connectivity',
      'Programming and development tools',
      'Multimedia and design software',
      'Technical support staff available',
      'Extended lab hours for students'
    ],
    internet: [
      'Campus-wide WiFi coverage',
      'High-speed broadband connection',
      'Free internet access for students',
      'Computer lab internet facilities',
      'Online learning platform access',
      'Digital resource accessibility'
    ]
  };

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
            College Facilities
          </h1>
          <p className="text-white/90 mt-2">Government Post Graduate College Saryab Road, Quetta</p>
        </div>
        
        <div className="p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Modern Infrastructure for Excellence in Education
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
              Our college is equipped with state-of-the-art facilities designed to provide students with 
              the best possible learning environment. From comprehensive library resources to modern 
              computing facilities, we ensure every student has access to the tools they need for success.
            </p>
          </div>
        </div>
      </div>

      {/* Library Facility */}
      <div 
        ref={el => sectionsRef.current[1] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Library Facility
          </h2>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Our comprehensive library serves as the academic heart of the college, providing 
                students and faculty with extensive resources for research and learning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {facilityFeatures.library.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex cursor-pointer items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 text-center">
                <BookOpen className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Central Library</h3>
                <p className="text-gray-600">Open 6 days a week with extended hours</p>
                <div className="flex items-center justify-center gap-2 mt-4 text-blue-700">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">8:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hostel Facility */}
      <div 
        ref={el => sectionsRef.current[2] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Home className="w-6 h-6" />
            Hostel Accommodation
          </h2>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-8 text-center">
                <Home className="w-24 h-24 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Student Hostels</h3>
                <p className="text-gray-600">Safe and comfortable accommodation</p>
                <div className="flex items-center justify-center gap-2 mt-4 text-green-700">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">24/7 Security</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Our hostel facilities provide a secure and comfortable living environment for 
                out-of-city students, creating a home away from home atmosphere.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {facilityFeatures.hostel.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex cursor-pointer items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transport Facility */}
      <div 
        ref={el => sectionsRef.current[3] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Bus className="w-6 h-6" />
            Transport Service
          </h2>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Reliable and affordable transportation service connecting the college with 
                major areas of Quetta city, ensuring easy access for all students.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {facilityFeatures.transport.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex cursor-pointer items-start gap-3 p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-8 text-center">
                <Bus className="w-24 h-24 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">College Transport</h3>
                <p className="text-gray-600">Multiple routes across Quetta</p>
                <div className="flex items-center justify-center gap-2 mt-4 text-purple-700">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">City-wide Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Computer Lab & Internet Facilities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div 
          ref={el => sectionsRef.current[4] = el}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Monitor className="w-5 h-5" />
              Computer Laboratory
            </h2>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 mb-4">
                <Monitor className="w-16 h-16 text-orange-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800">Modern Computing</h3>
              </div>
            </div>
            <div className="space-y-3">
              {facilityFeatures.computerLab.map((feature, index) => (
                <div 
                  key={index}
                  className="flex cursor-pointer items-start gap-3 p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div 
          ref={el => sectionsRef.current[5] = el}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              Internet Connectivity
            </h2>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl p-6 mb-4">
                <Wifi className="w-16 h-16 text-teal-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800">High-Speed WiFi</h3>
              </div>
            </div>
            <div className="space-y-3">
              {facilityFeatures.internet.map((feature, index) => (
                <div 
                  key={index}
                  className="flex cursor-pointer items-start gap-3 p-3 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border-l-4 border-teal-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Facilities */}
      <div 
        ref={el => sectionsRef.current[6] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Star className="w-6 h-6" />
            Additional Campus Facilities
          </h2>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border border-indigo-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <GraduationCap className="w-12 h-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">Science Laboratories</h3>
              <p className="text-gray-600 text-sm">Well-equipped physics, chemistry, and biology labs for practical learning</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg border border-pink-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <Users className="w-12 h-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">Seminar Halls</h3>
              <p className="text-gray-600 text-sm">Modern seminar halls with audio-visual equipment for presentations</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <Zap className="w-12 h-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">Power Backup</h3>
              <p className="text-gray-600 text-sm">Uninterrupted power supply with backup generators for continuous learning</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <Shield className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">Security Services</h3>
              <p className="text-gray-600 text-sm">Round-the-clock security ensuring safety of students and staff</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg border border-cyan-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <Calendar className="w-12 h-12 text-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">Sports Complex</h3>
              <p className="text-gray-600 text-sm">Sports facilities for cricket, football, volleyball and indoor games</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <Building2 className="w-12 h-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">Cafeteria</h3>
              <p className="text-gray-600 text-sm">Clean and hygienic cafeteria serving affordable meals and refreshments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact for More Information */}
      <div 
        ref={el => sectionsRef.current[7] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold">Need More Information?</h2>
        </div>
        <div className="p-8 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            For detailed information about our facilities or to schedule a campus visit, contact our administration office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-block bg-[var(--primary-background)] border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold text-lg"
            >
              Contact Administration
            </a>
            <a 
              href="/contact"
              className="inline-block bg-transparent border-[var(--primary-background)] border-[1px] hover:bg-[var(--primary-background)] text-[var(--primary-background)] hover:text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold text-lg"
            >
              Schedule Campus Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;