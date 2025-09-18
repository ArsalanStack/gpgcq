"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Building2, Youtube, Linkedin, Mail, Home, GraduationCap, Users, Briefcase, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-700 py-16 px-6 relative overflow-hidden border-t border-orange-100">
        {/* Subtle background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-8 w-24 h-24 bg-[var(--primary-background)] rounded-full blur-2xl"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-[var(--secondry-color)] rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-orange-300 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

            {/* College Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[var(--primary-background)] mb-3 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6" />
                  Government Post Graduate College
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Empowering students through quality education and fostering academic excellence in Balochistan.
                  Join us in building a brighter future through knowledge and innovation.
                </p>
                <div className="text-sm text-gray-600">
                  <p className="mb-1">📍 Saryab Road, Quetta, Balochistan</p>
                  <p className="mb-1">📞 +92-81-XXXXXXX</p>
                  <p>✉️ info@gpcquetta.edu.pk</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-[var(--primary-background)] mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Quick Links
              </h4>
              <nav className="space-y-3">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-gray-600 hover:text-[var(--primary-background)] transition-all duration-300 font-medium group"
                >
                  <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    Home
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--primary-background)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-2 text-gray-600 hover:text-[var(--primary-background)] transition-all duration-300 font-medium group"
                >
                  <GraduationCap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    About Us
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--primary-background)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
                <Link
                  href="/admissions"
                  className="flex items-center gap-2 text-gray-600 hover:text-[var(--primary-background)] transition-all duration-300 font-medium group"
                >
                  <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    Admissions
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--primary-background)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-gray-600 hover:text-[var(--primary-background)] transition-all duration-300 font-medium group"
                >
                  <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    Services
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--primary-background)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-gray-600 hover:text-[var(--primary-background)] transition-all duration-300 font-medium group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    Contact Us
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--primary-background)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
                <Link
                  href="/facilities"
                  className="flex items-center gap-2 text-gray-600 hover:text-[var(--primary-background)] transition-all duration-300 font-medium group"
                >
                  <Building2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    Facilities
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--primary-background)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
              </nav>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-[var(--primary-background)] mb-4">
                Connect With Us
              </h4>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm mb-4">
                  Stay updated with our latest news, events, and announcements.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/p/Government-Post-Graduate-College-Saryab-Road-Quetta-100064149189732"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="group relative p-3 bg-white rounded-xl shadow-md hover:shadow-lg border border-orange-100 hover:border-blue-200 transition-all duration-300 hover:scale-110"
                  >
                    <Facebook size={20} className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </a>
                  <a
                    href="https://instagram.com/gpcquetta"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="group relative p-3 bg-white rounded-xl shadow-md hover:shadow-lg border border-orange-100 hover:border-pink-200 transition-all duration-300 hover:scale-110"
                  >
                    <Instagram size={20} className="text-gray-600 group-hover:text-pink-600 transition-colors duration-300" />
                  </a>
                  <a
                    href="https://youtube.com/gpcquetta"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="group relative p-3 bg-white rounded-xl shadow-md hover:shadow-lg border border-orange-100 hover:border-red-200 transition-all duration-300 hover:scale-110"
                  >
                    <Youtube size={20} className="text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
                  </a>
                  <a
                    href="https://linkedin.com/school/gpc-quetta"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group relative p-3 bg-white rounded-xl shadow-md hover:shadow-lg border border-orange-100 hover:border-blue-200 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={20} className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-orange-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600 font-medium">
                  © {new Date().getFullYear()} Government Post Graduate College, Saryab Road, Quetta
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Excellence in Education • Building Tomorrow's Leaders
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-center md:text-right">
                  <p className="text-xs text-gray-500 mb-1">
                    Developed with ❤️ by
                  </p>
                  <a
                    href="mailto:arzunoteam@gmail.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-background)] hover:text-[var(--secondry-color)] transition-colors duration-300 group"
                  >
                    <span>Arzuno Team</span>
                    <Mail size={14} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}