import React from 'react';
import { Camera, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center">
              <button
                onClick={() => handleNav("home")}
                className="focus:outline-none"
                aria-label="Go to home"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-30 h-30 object-contain" // ubah ukuran sesuai kebutuhan
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </button>
            </div>
            {/* <p className="text-gray-400">
              Professional photographer capturing life's most precious moments with creativity and passion.
            </p> */}
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a href="wa.me/+6281239739506" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <Phone className="w-5 h-5" />
                +6281239739506
              </a>
              <a href="https://instagram.com/wangrphy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <Instagram className="w-5 h-5" />
                @wangrphy
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Wangrphy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}