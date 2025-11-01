import React, { useState } from 'react';
import { Instagram, MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [isHovered, setIsHovered] = useState(false);

  // Stack gambar - hanya 3 untuk efek yang lebih clean
  const stackImages = [
    { id: 1, src: '/slider/potrait/potrait9.jpg', stackPos: { x: '0px', y: '0px', rotate: '0deg' }, spreadPos: { x: '-180px', y: '-40px', rotate: '-8deg' } },
    { id: 2, src: '/slider/potrait/potrait4.jpg', stackPos: { x: '0px', y: '12px', rotate: '3deg' }, spreadPos: { x: '0px', y: '0px', rotate: '0deg' } },
    { id: 3, src: '/slider/potrait/potrait3.jpg', stackPos: { x: '0px', y: '24px', rotate: '6deg' }, spreadPos: { x: '180px', y: '-40px', rotate: '8deg' } }
  ];

  const contactInfo = {
    whatsapp: '+6281239739506', // Ganti dengan nomor WA Anda
    instagram: '@wangrphy', // Ganti dengan username IG Anda
    email: 'kdwidiadnyana@gmail.com',
    phone: '+6281239739506',
    location: 'Singaraja, Bali'
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hi! I'm interested in your photography services`, '_blank');
  };

  const handleInstagram = () => {
    window.open(`https://instagram.com/${contactInfo.instagram.replace('@', '')}`, '_blank');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Stacked Images */}
          <div className="order-2 lg:order-1 relative">
            <div 
              className="relative h-[600px] flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {stackImages.map((image, index) => {
                const pos = isHovered ? image.spreadPos : image.stackPos;
                
                return (
                  <div
                    key={image.id}
                    className="absolute w-72 h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-out"
                    style={{
                      transform: `translateX(${pos.x}) translateY(${pos.y}) rotate(${pos.rotate}) ${isHovered ? 'scale(1)' : 'scale(0.95)'}`,
                      zIndex: isHovered ? index + 1 : stackImages.length - index
                    }}
                  >
                    <img 
                      src={image.src}
                      alt={`Contact stack ${image.id}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="288" height="384"%3E%3Crect fill="%23${['6366f1', 'ec4899', 'f59e0b'][index]}" width="288" height="384"/%3E%3Ctext fill="white" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold"%3EPhoto ${image.id}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                    
                    {/* Overlay hint */}
                    {!isHovered && index === stackImages.length - 1 && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white font-semibold text-lg">Hover to explore</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>

          {/* Right Side - Contact Info & CTA */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-indigo-600 font-semibold mb-2 text-lg">Let's Work Together</p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Contact Me!
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether it's a wedding, portrait session, or commercial project, I'm here to bring your vision to life. Let's create something beautiful together.
              </p>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </button>
              
              <button
                onClick={handleInstagram}
                className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-900 rounded-xl hover:opacity-100 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Instagram className="w-6 h-6" />
                Follow on Instagram
              </button>
            </div>

           

            {/* Social Proof */}
            {/* <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">1000+</p>
                <p className="text-gray-600 text-sm">Projects Done</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">5★</p>
                <p className="text-gray-600 text-sm">Average Rating</p>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}