'use client'
import React, { useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  MapPin, 
  Heart,
  Target,
  Eye,
  Building,
  Calendar,
  Globe
} from 'lucide-react';

const About = () => {
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

  const bsPrograms = [
    'BS Chemistry', 'BS Economics', 'BS Education', 'BS English',
    'BS Geography', 'BS History', 'BS Mathematics', 'BS Physics',
    'BS Political Science', 'BS Sociology', 'BS Urdu', 'BS Zoology'
  ];

  const galleryImages = [
    '/degree1.png',
    '/gallery1.jpg',
    "gallery2.jpg",
    "gallery3.jpeg",
    "gallery4.jpeg",
    'gallery5.jpeg'
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
            <Building className="w-8 h-8" />
            About Our College
          </h1>
          <p className="text-white/90 mt-2">Government Post Graduate College Saryab Road, Quetta</p>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[var(--primary-background)]" />
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Government Post Graduate College Saryab Road, Quetta, is one of the oldest and most prestigious public colleges in Balochistan. It stands as a symbol of educational excellence and opportunity for the students of Quetta and surrounding areas. The college has long played a vital role in the development of human capital in the province.
              </p>
            </div>
            <div className="relative">
              <img
                src="/degree1.png"
                alt="College Building"
                className="w-full h-64 object-cover rounded-xl shadow-lg ring-1 ring-gray-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div 
        ref={el => sectionsRef.current[1] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            History
          </h2>
        </div>
        <div className="p-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
              <Award className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">First Degree College in Balochistan</h3>
                <p className="text-gray-600">The college is known as the first degree college in Balochistan, making it a landmark institution in the province's educational history.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
              <BookOpen className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Educational Evolution</h3>
                <p className="text-gray-600">Over the years, it has expanded from offering intermediate education to a wide array of postgraduate and BS programs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Programs Section */}
      <div 
        ref={el => sectionsRef.current[2] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Academic Programs
          </h2>
        </div>
        <div className="p-8">
          <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">BS (Bachelor of Science) 4-Year Programs</h3>
            <p className="text-gray-600 text-sm">Minimum eligibility: 45% marks</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bsPrograms.map((program, index) => (
              <div 
                key={index}
                className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[var(--primary-background)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              >
                <h4 className="font-semibold text-gray-800 group-hover:text-[var(--primary-background)] transition-colors">
                  {program}
                </h4>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600 text-center bg-gray-50 p-4 rounded-lg">
            All programs are designed to offer students comprehensive knowledge, critical thinking, and skills development.
          </p>
        </div>
      </div>

      {/* Affiliation & Campus Life */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div 
          ref={el => sectionsRef.current[3] = el}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Affiliation
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--primary-background)] rounded-full mt-2"></div>
                <p className="text-gray-600">The college is <strong>affiliated with the University of Balochistan</strong>.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--primary-background)] rounded-full mt-2"></div>
                <p className="text-gray-600">This affiliation ensures that students receive degrees that are recognized both nationally and internationally.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--primary-background)] rounded-full mt-2"></div>
                <p className="text-gray-600">Curriculum and examinations are aligned with the University of Balochistan's academic standards.</p>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={el => sectionsRef.current[4] = el}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Users className="w-5 h-5" />
              Campus Life
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--primary-background)] rounded-full mt-2"></div>
                <p className="text-gray-600">A vibrant academic environment where students engage in learning beyond classrooms.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--primary-background)] rounded-full mt-2"></div>
                <p className="text-gray-600">Facilities include well-equipped science laboratories, libraries, and lecture halls.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--primary-background)] rounded-full mt-2"></div>
                <p className="text-gray-600">Extracurricular activities like seminars, debates, cultural events, and sports help foster student growth and leadership.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div 
          ref={el => sectionsRef.current[5] = el}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Target className="w-5 h-5" />
              Mission
            </h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 leading-relaxed">
              To provide inclusive, quality education that empowers students to contribute meaningfully to society and meet global challenges.
            </p>
          </div>
        </div>

        <div 
          ref={el => sectionsRef.current[6] = el}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Vision
            </h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 leading-relaxed">
              To be a leading educational institution in Balochistan recognized for academic excellence, social responsibility, and leadership development.
            </p>
          </div>
        </div>
      </div>

      {/* Community Impact & Location */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div 
          ref={el => sectionsRef.current[7] = el}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Community Impact
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--primary-background)] rounded-full mt-2"></div>
                <p className="text-gray-600">The college has produced thousands of graduates serving in various professional sectors across Pakistan and abroad.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--primary-background)] rounded-full mt-2"></div>
                <p className="text-gray-600">It continues to play a key role in educating future leaders, teachers, scientists, civil servants, and entrepreneurs.</p>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={el => sectionsRef.current[8] = el}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Location
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Government Post Graduate College<br />
                  Saryab Road, Quetta<br />
                  Balochistan, Pakistan
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Located in the heart of Quetta, our college is easily accessible and serves as a landmark educational institution in Balochistan.
                </p>
                <a 
                  href="https://www.google.com/maps/place/Government+Post+Graduate+College+Quetta/@30.1478137,66.9805715,17z/data=!3m1!4b1!4m6!3m5!1s0x3ed2e7458df1cdc5:0x8e9e08f3d8b508db!8m2!3d30.1478137!4d66.9831464!16s%2Fg%2F11c5r3y8qx?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--primary-background)] border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] px-6 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold text-center"
                >
                  Get Directions
                </a>
              </div>
              <div className="w-full">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.1259921251567!2d66.98057147459122!3d30.147813674871756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2e7458df1cdc5%3A0x8e9e08f3d8b508db!2sGovernment%20Post%20Graduate%20College%20Quetta!5e0!3m2!1sen!2s!4v1748964122946!5m2!1sen!2s" 
                    width="100%" 
                    height="300" 
                    style={{border: '0'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Government Post Graduate College Quetta Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect With Us */}
      <div 
        ref={el => sectionsRef.current[9] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold">Connect With Us</h2>
        </div>
        <div className="p-8 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Stay updated with admissions, notices, and college events
          </p>
          <a 
            href="https://www.facebook.com/p/Government-Post-Graduate-College-Saryab-Road-Quetta-100064149189732"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--primary-background)] border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold text-lg"
          >
            Visit Official Facebook Page
          </a>
        </div>
      </div>

      {/* Photo Gallery */}
      <div 
        ref={el => sectionsRef.current[10] = el}
        className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className="bg-[var(--primary-background)] text-white px-8 py-4 shadow-lg">
          <h2 className="text-xl font-bold">Campus Gallery</h2>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <img
                  src={image}
                  alt={`Campus view ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;