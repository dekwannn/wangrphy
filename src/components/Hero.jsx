import React from 'react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white from-gray-50 to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/hero.png" 
                  alt="Photographer at work"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="800"%3E%3Crect fill="%23e5e7eb" width="600" height="800"/%3E%3Ctext fill="%236b7280" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24"%3EHero Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-900 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="order-1 lg:order-2">
            <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Capturing Moments,<br />Creating Memories
            </h1>
            <p className="text-xl md:text-base text-gray-600 mb-8 leading-relaxed">
              Passionate in photographer specializing in event, portraits, and graduation. Based in Singaraja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
              >
                View Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('preset')}
                className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Try My Presets
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}