import React, { useEffect, useRef } from 'react';
import { sliderImages } from '../data/sliderImages';

// Komponen untuk single slider row
function SliderRow({ images, direction = 'right', orientation = 'portrait' }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = direction === 'right' ? 0 : scrollContainer.scrollWidth / 2;
    const scrollSpeed = 0.7;

    const animate = () => {
      if (direction === 'right') {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
      } else {
        scrollPosition -= scrollSpeed;
        if (scrollPosition <= 0) {
          scrollPosition = scrollContainer.scrollWidth / 2;
        }
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction]);

  const duplicatedImages = [...images, ...images];

  // Ukuran berdasarkan orientation dengan responsive breakpoints
  const sizeClass = orientation === 'portrait' 
    ? 'w-48 h-[340px] sm:w-56 sm:h-[398px] md:w-64 md:h-[456px] lg:w-72 lg:h-[512px]'  // 9:16 ratio
    : 'w-[340px] h-48 sm:w-[398px] sm:h-56 md:w-[456px] md:h-64 lg:w-[512px] lg:h-72'; // 16:9 ratio

  return (
    <div 
      ref={scrollRef}
      className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-hidden scrollbar-hide"
      style={{ scrollBehavior: 'auto' }}
    >
      {duplicatedImages.map((image, index) => (
        <div 
          key={`${image.id}-${index}`}
          className={`shrink-0 ${sizeClass} rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-shadow duration-300 group`}
        >
          <img 
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500 bg-gray-100"
            onError={(e) => {
              e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="384"%3E%3Crect fill="%23e5e7eb" width="320" height="384"/%3E%3Ctext fill="%236b7280" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18"%3E${image.alt}%3C/text%3E%3C/svg%3E`;
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function ImageSlider() {
  // Bagi gambar menjadi 2 set untuk 2 row
  const midPoint = Math.ceil(sliderImages.length / 2);
  const firstRowImages = sliderImages.slice(0, midPoint);
  const secondRowImages = sliderImages.slice(midPoint);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="mb-8 sm:mb-10 md:mb-12 text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">Recent Works</h2>
        <p className="text-gray-600 text-base sm:text-lg">A glimpse of my latest photography projects</p>
      </div>

      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        {/* Row 1: Portrait - Scroll ke Kanan */}
        <SliderRow images={firstRowImages} direction="right" orientation="portrait" />
        
        {/* Row 2: Landscape - Scroll ke Kiri */}
        <SliderRow images={secondRowImages} direction="left" orientation="landscape" />
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}