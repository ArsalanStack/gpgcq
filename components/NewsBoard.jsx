import React, { useEffect, useRef } from 'react';
import { Calendar, ExternalLink, FileText, Users, Award, Bell, BookOpen, Trophy, Clock, MapPin, GraduationCap, AlertCircle, Zap, Star } from 'lucide-react';

const UniversityNewsBoard = () => {
  const cardsRef = useRef([]);
  const recentUpdatesRef = useRef(null);

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

    // Observe cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = `translateY(50px)`;
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
      }
    });

    // Observe recent updates section
    if (recentUpdatesRef.current) {
      recentUpdatesRef.current.style.opacity = '0';
      recentUpdatesRef.current.style.transform = 'translateY(30px)';
      recentUpdatesRef.current.style.transition = 'all 0.8s ease-out';
      observer.observe(recentUpdatesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const noticeIcons = {
    'NEW': { icon: AlertCircle, color: 'red' },
    'EXAM': { icon: BookOpen, color: 'blue' },
    'INFO': { icon: Bell, color: 'purple' },
    'EVENT': { icon: Calendar, color: 'orange' },
    'UPDATE': { icon: Zap, color: 'indigo' },
    'AWARD': { icon: Trophy, color: 'pink' },
    'WORKSHOP': { icon: GraduationCap, color: 'teal' }
  };

  const notices = [
    {
      type: 'NEW',
      title: 'Apply for University ID Card (New, Duplicate)',
      date: 'June 30, 2025',
      isDeadline: true
    },
    {
      type: 'EXAM',
      title: 'Date Sheet of BS (Morning/Self-Supporting) Academic Year-I, Semester-II Session (2024-2028) Final Examination 2025',
      date: 'July 15, 2025',
      isStart: true
    },
    {
      type: 'EXAM',
      title: 'Date Sheet of BS Academic Year-II Semester-IV (Morning & Self-Supporting) Session (2023-2027) and BS Semester-IV Session (2024-2028) Spring Final Examination 2025',
      date: 'August 1, 2025',
      isStart: true
    },
    {
      type: 'INFO',
      title: 'Admission Form Submission Deadline Extended',
      date: 'June 15, 2025',
      isDeadline: true
    },
    {
      type: 'EVENT',
      title: 'Annual Sports Week 2025',
      date: 'June 10-17, 2025'
    },
    {
      type: 'UPDATE',
      title: 'Library Renovation Project Update',
      date: 'September 2025'
    },
    {
      type: 'AWARD',
      title: 'Student Achievement Recognition Ceremony',
      date: 'June 25, 2025 at 3:00 PM'
    },
    {
      type: 'WORKSHOP',
      title: 'Professional Development Workshop Series',
      date: 'Every Friday, 2:00 PM - 4:00 PM'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Top Stories Section */}
        <div className="lg:col-span-2">
          <div
            ref={el => cardsRef.current[0] = el}
            className="bg-white rounded-xl shadow-xl overflow-hidden h-[600px] sm:h-[500px] flex flex-col border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Award className="w-5 h-5" />
                TOP STORIES
              </h2>
            </div>

            {/* Main Story */}
            <div className="p-4 flex-1 flex flex-col overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                {/* Image */}
                <div className="relative h-full min-h-[200px]">
                  <img
                    src="/principle2.jpg"
                    alt="University collaboration signing ceremony"
                    className="w-full h-full object-cover rounded-xl shadow-lg ring-1 ring-gray-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                    <Star className="w-3 h-3 inline mr-1" />
                    Featured Story
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between h-full">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-[var(--primary-background)] transition-colors cursor-pointer leading-tight line-clamp-3">
                      GCU, Civil Services Academy sign accord for academic collaboration
                    </h3>

                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-3 bg-gray-50 px-3 py-2 rounded-lg w-fit">
                      <Calendar className="w-3 h-3" />
                      <span>Posted on: 2024-12-13</span>
                    </div>

                    <p className="text-gray-600  leading-relaxed md:text-sm text-xs">
                      A Memorandum of Understanding (MoU) was signed on Friday between Government College University (GCU)
                      was signed by Prof. Dr. Muhammad Ali, Vice Chancellor of GCU, and Mr. Farhan Aziz Khawaja...
                    </p>
                  </div>

                  <button className="bg-[var(--primary-background)] border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)]  hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] px-6 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 w-fit font-semibold text-sm mt-4 sm:mt-6 cursor-pointer">
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notice Board Section */}
        <div className="lg:col-span-1">
          <div
            ref={el => cardsRef.current[1] = el}
            className="bg-white rounded-xl shadow-xl overflow-hidden h-[500px] flex flex-col border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FileText className="w-5 h-5" />
                NOTICE BOARD
              </h2>
            </div>

            {/* Notice Items with Scroll */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
              <div className="divide-y divide-gray-100">
                {notices.map((notice, index) => {
                  const IconComponent = noticeIcons[notice.type].icon;
                  const colorClass = noticeIcons[notice.type].color;

                  return (
                    <div key={index} className={`p-4 hover:bg-gray-50 transition-all duration-200 border-l-4 border-${colorClass}-500 hover:border-l-6 group`}>
                      <div className="flex items-start gap-3">
                        <div className="flex items-center gap-2">
                          <div className={`bg-${colorClass}-100 text-${colorClass}-600 p-1.5 rounded-lg shadow-sm group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-3 h-3" />
                          </div>
                          <div className={`bg-${colorClass}-100 text-${colorClass}-600 px-2 py-1 rounded-full text-xs font-bold shadow-sm`}>
                            {notice.type}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 hover:text-[var(--primary-background)] cursor-pointer transition-colors leading-snug text-sm line-clamp-3">
                            {notice.title}
                          </h4>
                          <div className="flex items-center gap-1 mt-2">
                            <Clock className="w-3 h-3 text-gray-400" />
                            <p className="text-gray-500 text-xs">
                              {notice.isDeadline ? 'Deadline: ' : notice.isStart ? 'Starts: ' : ''}{notice.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* View All Button */}
            <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
              <button className="w-full border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] bg-[var(--primary-background)] cursor-pointer hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 font-semibold">
                <Users className="w-4 h-4" />
                View All Notices
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stories Section */}
      <div className="mt-12">
        <div
          ref={recentUpdatesRef}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-[var(--primary-background)] text-white px-6 py-4 shadow-lg">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Recent Updates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {[
              {
                title: "Research Excellence Award 2025",
                date: "2024-12-10",
                excerpt: "University receives prestigious national research award for outstanding contributions...",
                category: "Achievement",
                icon: Trophy,
                color: "red"
              },
              {
                title: "New Academic Programs Launched",
                date: "2024-12-08",
                excerpt: "Three new undergraduate programs in emerging technologies now available...",
                category: "Academic",
                icon: GraduationCap,
                color: "blue"
              },
              {
                title: "International Conference 2025",
                date: "2024-12-05",
                excerpt: "Annual international conference on sustainable development scheduled...",
                category: "Event",
                icon: MapPin,
                color: "green"
              }
            ].map((story, index) => {
              const IconComponent = story.icon;
              return (
                <div
                  key={index}
                  ref={el => cardsRef.current[index + 2] = el}
                  className="border border-gray-200 rounded-xl p-5 hover:shadow-xl hover:border-red-300 transition-all duration-300 bg-gradient-to-br from-white to-gray-50 group cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-${story.color}-100 text-${story.color}-600 p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`bg-gradient-to-r from-${story.color}-100 to-${story.color}-50 text-${story.color}-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm`}>
                        {story.category}
                      </span>
                      <span className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {story.date}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 hover:text-[var(--primary-background)] transition-colors text-lg leading-tight group-hover:text-[var(--primary-background)]">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{story.excerpt}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityNewsBoard;