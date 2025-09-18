'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Modern Header with Split Layout */}
      <header className="bg-gradient-to-r from-white via-gray-50 to-white shadow-xl border-b-2" style={{ borderBottomColor: 'var(--primary-background)' }}>
      

        {/* Main Header Section */}
        <div className="py-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--primary-hover)]/90 opacity-50"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex items-center justify-between">
              {/* Logo Section - Left Aligned */}
              <Link href="/" className="flex items-center space-x-4 group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-sm opacity-30 group-hover:opacity-60 transition-opacity" ></div>
                  <Image
                    width={70}
                    height={70}
                    src="/logo1.png"
                    alt="GPGCQ Logo"
                    className="relative z-10 drop-shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{borderRadius: '50%', padding: '8px' }}
                    priority
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/70x70/922121/ffffff?text=GPGCQ')}
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl md:text-3xl font-black tracking-tight transition-all duration-300 group-hover:tracking-wide" style={{ color: 'var(--primary-background)' }}>
                    <span className="relative">
                      G.P.G.C.Q
                      <div className="absolute -bottom-1 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: 'var(--primary-background)' }}></div>
                    </span>
                  </h1>
                  <p className="text-sm font-semibold text-[var(--primary-background)] tracking-wider mt-1 group-hover:text[var(--primary-background)] transition-colors">
                    GOVERNMENT BOYS POST GRADUATE COLLEGE SARIAB ROAD QUETTA
                  </p>
                  <p className="text-xs font-medium tracking-widest opacity-75 uppercase" style={{ color: 'var(--primary-background)' }}>
                    Excellence in Education
                  </p>
                </div>
              </Link>

              {/* Quick Actions - Right Side */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link 
                  href="/contact" 
                  className="px-6 py-2 rounded-full font-semibold text-white border-2 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg transform"
                  style={{ 
                    borderColor: 'var(--primary-background)',
                    backgroundColor: 'var(--primary-background)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = 'var(--primary-background)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-background)';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Navigation Bar */}
      <nav className="sticky top-0 z-50 shadow-2xl backdrop-blur-sm" style={{ backgroundColor: 'var(--primary-background)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-3 rounded-xl text-white transition-all duration-300 hover:rotate-90 hover:scale-110"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-1 rounded-2xl p-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/admissions', label: 'Admissions' },
                  { href: '/facilities', label: 'Facilities' },
                  { href: '/services', label: 'Services' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-semibold text-white rounded-xl relative overflow-hidden group transition-all duration-300 hover:scale-105"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--secondry-color)';
                      e.currentTarget.style.color = 'var(--primary-background)';
                      e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'scale(1) translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Quick Action */}
            <Link 
              href="/contact" 
              className="lg:hidden px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--primary-hover)', color: 'var(--primary-background)' }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Dropdown with Animation */}
          <div
            className={`lg:hidden transition-all duration-500 ease-out ${
              isMobileMenuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
            } overflow-hidden`}
          >
            <div className="py-4 space-y-3 border-t border-white border-opacity-20">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/admissions', label: 'Admissions' },
                { href: '/research', label: 'Research' },
                { href: '/facilities', label: 'Facilities' },
                { href: '/services', label: 'Services' },
              ].map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                  className="block px-6 py-3 text-sm font-medium text-white rounded-xl mx-2 transition-all duration-300 hover:scale-105 hover:translate-x-2"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    backgroundColor: 'rgba(255,255,255,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
                    e.currentTarget.style.color = 'var(--primary-background)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}