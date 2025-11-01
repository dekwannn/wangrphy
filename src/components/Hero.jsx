import React from 'react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16 px-4 py-12 lg:py-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-1 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/hero.png" 
                  alt="Photographer at work"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600"%3E%3Crect fill="%23e5e7eb" width="600" height="600"/%3E%3Ctext fill="%236b7280" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24"%3EHero Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 bg-gray-900 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-gray-900 leading-tight">
              Capturing Moments,<br />Creating Memories
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Passionate in photographer specializing in event, portraits, and graduation. Based in Singaraja.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-6 py-3 lg:px-8 lg:py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium text-base lg:text-lg"
              >
                View Portfolio
              </button>
              {/* <button 
                onClick={() => scrollToSection('preset')}
                className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition font-medium text-base lg:text-lg"
              >
                Try My Presets
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
