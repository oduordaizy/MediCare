"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom py-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* Quick Links */}
          <div className="space-y-4 md:pl-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
            </div>
            <div className="space-y-2">
              <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 block">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-300 block">
                About
              </Link>
              <Link href="/doctors" className="text-gray-300 hover:text-white transition-all duration-300 block">
                Doctors
              </Link>
              <Link href="/specialists" className="text-gray-300 hover:text-white transition-all duration-300 block">
                Specialists
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">Services</h3>
            </div>
            <div className="space-y-2">
              <Link href="/hospitals" className="text-gray-300 hover:text-white transition-all duration-300 block">
                Hospitals
              </Link>
              <Link href="/specialists" className="text-gray-300 hover:text-white transition-all duration-300 block">
                Specialists
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300 block">
                Contact
              </Link>
              <Link href="/registration" className="text-gray-300 hover:text-white transition-all duration-300 block">
                Register
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">Contact Info</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="text-white text-xs" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+254 700 000 000</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-white text-xs" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">info@telemed.com</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-white text-xs" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} TeleMed. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-2 md:mt-0">
              <span className="text-gray-400 text-sm">Made with</span>
              <FaHeart className="text-red-400 animate-pulse" />
              <span className="text-gray-400 text-sm">for better healthcare</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 