'use client'
import React, { useEffect, useRef, useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  FileText, 
  Users, 
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  BookOpen,
  Award,
  Target,
  DollarSign,
  User,
  School
} from 'lucide-react';

const Admission = () => {
  const sectionsRef = useRef([]);
  const [activeTab, setActiveTab] = useState('programs');

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

  const bsPrograms = [
    { name: 'BS Chemistry', seats: 100, duration: '4 Years' },
    { name: 'BS Economics', seats: 100, duration: '4 Years' },
    { name: 'BS Education', seats: 100, duration: '4 Years' },
    { name: 'BS English', seats: 100, duration: '4 Years' },
    { name: 'BS Geography', seats: 100, duration: '4 Years' },
    { name: 'BS History', seats: 100, duration: '4 Years' },
    { name: 'BS Mathematics', seats: 100, duration: '4 Years' },
    { name: 'BS Physics', seats: 100, duration: '4 Years' },
    { name: 'BS Political Science', seats: 100, duration: '4 Years' },
    { name: 'BS Sociology', seats: 100, duration: '4 Years' },
    { name: 'BS Urdu', seats: 100, duration: '4 Years' },
    { name: 'BS Zoology', seats: 100, duration: '4 Years' }
  ];

  const admissionSteps = [
    {
      step: 1,
      title: 'Download Application Form',
      description: 'Get the official admission form from our website or college office',
      icon: Download
    },
    {
      step: 2,
      title: 'Complete Application',
      description: 'Fill out all required information and attach necessary documents',
      icon: FileText
    },
    {
      step: 3,
      title: 'Submit Documents',
      description: 'Submit your application with all required documents before deadline',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'Merit List Publication',
      description: 'Check merit lists published on our official website and notice board',
      icon: Award
    },
    {
      step: 5,
      title: 'Fee Payment',
      description: 'Pay admission fee within the specified time period',
      icon: CreditCard
    },
    {
      step: 6,
      title: 'Admission Confirmation',
      description: 'Complete admission process and receive confirmation',
      icon: School
    }
  ];

  const requiredDocuments = [
    'Matriculation Certificate & Mark Sheet',
    'Intermediate Certificate & Mark Sheet',
    'Character Certificate',
    'Domicile Certificate',
    'CNIC Copy (Student & Father/Guardian)',
    'Recent Passport Size Photographs (4 copies)',
    'Migration Certificate (if applicable)',
    'Equivalence Certificate (for foreign qualifications)'
  ];

  const importantDates = [
    { event: 'Application Form Available', date: 'June 1, 2025', status: 'active' },
    { event: 'Last Date for Submission', date: 'June 30, 2025', status: 'deadline' },
    { event: 'First Merit List', date: 'July 10, 2025', status: 'upcoming' },
    { event: 'Second Merit List', date: 'July 20, 2025', status: 'upcoming' },
    { event: 'Final Merit List', date: 'July 30, 2025', status: 'upcoming' },
    { event: 'Classes Begin', date: 'August 15, 2025', status: 'upcoming' }
  ];

  const tabs = [
    { id: 'programs', label: 'Programs', icon: BookOpen },
    { id: 'process', label: 'Process', icon: Target },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'dates', label: 'Important Dates', icon: Calendar }
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
            <GraduationCap className="w-8 h-8" />
            Admissions 2025
          </h1>
          <p className="text-white/90 mt-2">Join Government Post Graduate College Saryab Road, Quetta</p>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Begin Your Academic Journey
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Government Post Graduate College Saryab Road, Quetta is now accepting applications for BS programs (Academic Year 2025-2029). Join one of Balochistan's most prestigious educational institutions and build your future with us.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#application-form" 
                  className="inline-block bg-[var(--primary-background)] border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold"
                >
                  Apply Now
                </a>
                <a 
                  href="#admission-info" 
                  className="inline-block border-[var(--primary-background)] border-[1px] hover:bg-[var(--primary-background)] text-[var(--primary-background)] hover:text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold"
                >
                  Download Prospectus
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/students.jpeg"
                alt="Students in classroom"
                className="w-full h-64 object-cover rounded-xl shadow-lg ring-1 ring-gray-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-gray-800">Admission Open</p>
                <p className="text-xs text-gray-600">Session 2025-2029</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div 
        ref={el => sectionsRef.current[1] = el}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800">Programs</h3>
          </div>
          <p className="text-2xl font-bold text-[var(--primary-background)]">12</p>
          <p className="text-gray-600 text-sm">BS Programs Available</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-100 text-green-600 p-2 rounded-lg">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800">Seats</h3>
          </div>
          <p className="text-2xl font-bold text-[var(--primary-background)]">530+</p>
          <p className="text-gray-600 text-sm">Total Available Seats</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-100 text-orange-600 p-2 rounded-lg">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800">Duration</h3>
          </div>
          <p className="text-2xl font-bold text-[var(--primary-background)]">4</p>
          <p className="text-gray-600 text-sm">Years Program</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-red-100 text-red-600 p-2 rounded-lg">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800">Deadline</h3>
          </div>
          <p className="text-xl font-bold text-red-500">June 30</p>
          <p className="text-gray-600 text-sm">Last Date to Apply</p>
        </div>
      </div>

      {/* Tabbed Content Section */}
      <div 
        ref={el => sectionsRef.current[2] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
      >
        {/* Tab Headers */}
        <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-semibold cursor-pointer ${
                    activeTab === tab.id 
                      ? 'bg-white text-[var(--primary-background)] shadow-lg' 
                      : 'hover:bg-white/20 text-white/90 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === 'programs' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Available BS Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bsPrograms.map((program, index) => (
                  <div 
                    key={index}
                    className="border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 bg-gradient-to-br from-white to-gray-50 group cursor-pointer transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">
                        {program.seats} Seats
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--primary-background)] transition-colors">
                      {program.name}
                    </h4>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Duration: {program.duration}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
                <p className="text-yellow-800 font-semibold">Minimum Eligibility: 45% marks in Intermediate</p>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Admission Process</h3>
              <div className="space-y-6">
                {admissionSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-l-4 border-[var(--primary-background)] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="bg-[var(--primary-background)] text-white p-3 rounded-full shadow-lg">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-[var(--primary-background)] text-white px-3 py-1 rounded-full text-sm font-bold">
                            Step {step.step}
                          </span>
                          <h4 className="font-bold text-gray-800">{step.title}</h4>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Required Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((doc, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-lg transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-800 font-medium">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                <p className="text-blue-800 font-semibold mb-2">Important Notes:</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• All documents must be attested copies</li>
                  <li>• Original documents will be verified during admission</li>
                  <li>• Foreign qualifications require HEC equivalence</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'dates' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Important Dates - Admission 2025</h3>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 hover:shadow-lg ${
                      item.status === 'deadline' 
                        ? 'bg-red-50 border-red-200 hover:border-red-300' 
                        : item.status === 'active'
                        ? 'bg-green-50 border-green-200 hover:border-green-300'
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className={`w-5 h-5 ${
                        item.status === 'deadline' ? 'text-red-600' : 
                        item.status === 'active' ? 'text-green-600' : 'text-gray-600'
                      }`} />
                      <span className="font-semibold text-gray-800">{item.event}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        item.status === 'deadline' ? 'bg-red-100 text-red-700' : 
                        item.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div 
        ref={el => sectionsRef.current[3] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Admission Office Contact
          </h2>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
                <p className="text-gray-600 text-sm">
                  Government Post Graduate College<br />
                  Saryab Road, Quetta<br />
                  Balochistan, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
              <Phone className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                <p className="text-gray-600 text-sm">
                  Office: +92-81-XXXXXXX<br />
                  Admission Cell: +92-81-XXXXXXX<br />
                  Timing: 8:00 AM - 4:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
              <Mail className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                <p className="text-gray-600 text-sm">
                  admissions@gpcquetta.edu.pk<br />
                  info@gpcquetta.edu.pk<br />
                  Response within 24 hours
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Ready to Apply?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#download-form" 
                className="bg-[var(--primary-background)] border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Application Form
              </a>
              <a 
                href="https://www.facebook.com/p/Government-Post-Graduate-College-Saryab-Road-Quetta-100064149189732"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-[var(--primary-background)] border-[1px] hover:bg-[var(--primary-background)] text-[var(--primary-background)] hover:text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold"
              >
                Follow Updates
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;