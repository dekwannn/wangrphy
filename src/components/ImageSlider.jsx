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

  // Ukuran berdasarkan orientation
  const sizeClass = orientation === 'portrait' 
    ? 'w-72 h-[512px]'  // 9:16 ratio (288x512)
    : 'w-[512px] h-72'; // 16:9 ratio (512x288)

  return (
    <div 
      ref={scrollRef}
      className="flex gap-6 overflow-x-hidden scrollbar-hide"
      style={{ scrollBehavior: 'auto' }}
    >
      {duplicatedImages.map((image, index) => (
        <div 
          key={`${image.id}-${index}`}
          className={`shrink-0 ${sizeClass} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group`}
        >
          <img 
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-gray-100"
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="mb-12 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Works</h2>
        <p className="text-gray-600 text-lg">A glimpse of my latest photography projects</p>
      </div>

      <div className="space-y-6">
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