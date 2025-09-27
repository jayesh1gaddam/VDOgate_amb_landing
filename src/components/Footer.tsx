// components/Footer.tsx - Professional industry-grade footer component

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <>
      {/* Desktop Footer (1024px+) */}
      <footer className="desktop-exact mobile-hidden tablet-hidden relative w-full bg-[#1a1a1a] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/assets/primary-horizontal-logo.png"
                alt="VDOgate"
                width={160}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              India&apos;s first video-first platform designed for freelancers to showcase skills,
              attract clients, and build communities.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-2.508 0-4.54-2.033-4.54-4.54s2.032-4.54 4.54-4.54c2.508 0 4.527 2.033 4.527 4.54s-2.019 4.54-4.527 4.54zm7.424-8.748a1.063 1.063 0 110-2.127 1.063 1.063 0 010 2.127z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">For Freelancers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">For Clients</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">Ambassador Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">API Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300">Partnerships</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold text-lg mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest updates about VDOgate features and opportunities.</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7682b] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#f7682b] text-white font-semibold rounded-r-lg hover:bg-[#e55a23] transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 VDOgate. All Rights Reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#f7682b] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#f7682b] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#f7682b] transition-colors duration-300">Cookie Policy</a>
              <div className="text-gray-400">Made with ❤️ in India</div>
            </div>
          </div>
        </div>
        </div>
      </footer>

      {/* Tablet Footer (768px - 1023px) */}
      <footer className="desktop-hidden mobile-hidden tablet-visible relative w-full bg-[#1a1a1a] pt-12 pb-6">
        <div className="responsive-container">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

            {/* Left Column - Company Info */}
            <div className="space-y-6">
              <div className="flex items-center">
                <Image
                  src="/assets/primary-horizontal-logo.png"
                  alt="VDOgate"
                  width={140}
                  height={35}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                India&apos;s first video-first platform designed for freelancers to showcase skills,
                attract clients, and build communities.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Links */}
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300" aria-label="LinkedIn">
                  <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300" aria-label="Twitter">
                  <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300" aria-label="Instagram">
                  <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-2.508 0-4.54-2.033-4.54-4.54s2.032-4.54 4.54-4.54c2.508 0 4.527 2.033 4.527 4.54s-2.019 4.54-4.527 4.54zm7.424-8.748a1.063 1.063 0 110-2.127 1.063 1.063 0 010 2.127z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300" aria-label="YouTube">
                  <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Links */}
            <div className="grid grid-cols-2 gap-6">
              {/* Platform & Resources */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg mb-4">Platform</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300 text-sm">For Freelancers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300 text-sm">For Clients</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300 text-sm">Ambassador Program</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300 text-sm">Features</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300 text-sm">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300 text-sm">Careers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300 text-sm">Contact</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#f7682b] transition-colors duration-300 text-sm">Help Center</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-700 pt-6 mb-6">
            <div className="flex flex-col space-y-4">
              <div className="text-center">
                <h4 className="text-white font-semibold text-lg mb-2">Stay Updated</h4>
                <p className="text-gray-300 text-sm">Get the latest updates about VDOgate features and opportunities.</p>
              </div>
              <div className="flex max-w-md mx-auto w-full">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7682b] focus:border-transparent text-sm" />
                <button className="px-6 py-3 bg-[#f7682b] text-white font-semibold rounded-r-lg hover:bg-[#e55a23] transition-colors duration-300 text-sm">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="text-gray-400 text-sm">© 2025 VDOgate. All Rights Reserved.</div>
              <div className="flex flex-wrap items-center justify-center space-x-4 text-xs">
                <a href="#" className="text-gray-400 hover:text-[#f7682b] transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-[#f7682b] transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-[#f7682b] transition-colors duration-300">Cookie Policy</a>
              </div>
              <div className="text-gray-400 text-xs">Made with ❤️ in India</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Footer (320px - 767px) */}
      <footer className="desktop-hidden tablet-hidden mobile-visible relative w-full bg-[#1a1a1a] pt-10 pb-6">
        <div className="responsive-container safe-area-inset">
          {/* Company Info */}
          <div className="text-center space-y-6 mb-8">
            <div className="flex justify-center">
              <Image
                src="/assets/primary-horizontal-logo.png"
                alt="VDOgate"
                width={120}
                height={30}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed px-4">
              India&apos;s first video-first platform designed for freelancers to showcase skills, attract clients, and build communities.
            </p>
            <div className="flex justify-center space-x-4">
              {/* Social Media Links */}
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300 touch-action-manipulation" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300 touch-action-manipulation" aria-label="Twitter">
                <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300 touch-action-manipulation" aria-label="Instagram">
                <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-2.508 0-4.54-2.033-4.54-4.54s2.032-4.54 4.54-4.54c2.508 0 4.527 2.033 4.527 4.54s-2.019 4.54-4.527 4.54zm7.424-8.748a1.063 1.063 0 110-2.127 1.063 1.063 0 010 2.127z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f7682b] transition-colors duration-300 touch-action-manipulation" aria-label="YouTube">
                <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-6 mb-8">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-[#f7682b] transition-colors duration-300 py-2">For Freelancers</a>
                <a href="#" className="block text-gray-300 hover:text-[#f7682b] transition-colors duration-300 py-2">Ambassador Program</a>
                <a href="#" className="block text-gray-300 hover:text-[#f7682b] transition-colors duration-300 py-2">About Us</a>
              </div>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-[#f7682b] transition-colors duration-300 py-2">For Clients</a>
                <a href="#" className="block text-gray-300 hover:text-[#f7682b] transition-colors duration-300 py-2">Help Center</a>
                <a href="#" className="block text-gray-300 hover:text-[#f7682b] transition-colors duration-300 py-2">Contact</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-700 pt-6 mb-6">
            <div className="text-center space-y-4">
              <h4 className="text-white font-semibold text-lg">Stay Updated</h4>
              <p className="text-gray-300 text-sm px-4">Get the latest updates about VDOgate features and opportunities.</p>
              <div className="px-4">
                <div className="flex flex-col space-y-3">
                  <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7682b] focus:border-transparent text-sm touch-action-manipulation" />
                  <button className="w-full py-3 bg-[#f7682b] text-white font-semibold rounded-lg hover:bg-[#e55a23] transition-colors duration-300 text-sm touch-action-manipulation">Subscribe</button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6">
            <div className="text-center space-y-4">
              <div className="text-gray-400 text-xs">© 2025 VDOgate. All Rights Reserved.</div>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <a href="#" className="text-gray-400 hover:text-[#f7682b] transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-[#f7682b] transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-[#f7682b] transition-colors duration-300">Cookie Policy</a>
              </div>
              <div className="text-gray-400 text-xs">Made with ❤️ in India</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;