import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Grid3x3 } from 'lucide-react';

const portfolioData = [
  { 
    id: 1, 
    title: 'Lora Graduation - STAHN', 
    category: 'Graduation',
    coverImage: '/slider/landscape/landscape1.jpg',
    images: [
      { id: '1a', src: '/collections/lola/lola (1).jpg', caption: 'Lora Graduation' },
      { id: '1b', src: '/collections/lola/lora (6).jpg', caption: 'Lora Graduation' },
      { id: '1c', src: '/collections/lola/lola (3).jpg', caption: 'Lora Graduation' },
      { id: '1d', src: '/collections/lola/lola (4).jpg', caption: 'Lora Graduation' },
      { id: '1e', src: '/collections/lola/lola (5).jpg', caption: 'Lora Graduation' },
      { id: '1f', src: '/collections/lola/lora (7).jpg', caption: 'Lora Graduation' },
      { id: '1g', src: '/collections/lola/lora (8).jpg', caption: 'Lora Graduation' },
     
    ]
  },
  { 
    id: 2, 
    title: 'Nila Graduation - Undiksha', 
    category: 'Graduation',
    coverImage: '/collections/nila/nila (25).jpg',
    images: [
      { id: '2a', src: '/collections/nila/nila (25).jpg', caption: 'Nila Graduation' },
      { id: '2d', src: '/collections/nila/nila (3).jpg', caption: 'Nila Graduation' },
      { id: '2i', src: '/collections/nila/nila (8).jpg', caption: 'Nila Graduation' },
      { id: '2j', src: '/collections/nila/nila (9).jpg', caption: 'Nila Graduation' },
      { id: '2k', src: '/collections/nila/nila (10).jpg', caption: 'Nila Graduation' },
      { id: '2l', src: '/collections/nila/nila (11).jpg', caption: 'Nila Graduation' },
      { id: '2m', src: '/collections/nila/nila (12).jpg', caption: 'Nila Graduation' },
      { id: '2n', src: '/collections/nila/nila (13).jpg', caption: 'Nila Graduation' },
      { id: '2o', src: '/collections/nila/nila (14).jpg', caption: 'Nila Graduation' },
      { id: '2p', src: '/collections/nila/nila (15).jpg', caption: 'Nila Graduation' },
      { id: '2q', src: '/collections/nila/nila (16).jpg', caption: 'Nila Graduation' },
      { id: '2r', src: '/collections/nila/nila (17).jpg', caption: 'Nila Graduation' },
      { id: '2s', src: '/collections/nila/nila (18).jpg', caption: 'Nila Graduation' },
      { id: '2t', src: '/collections/nila/nila (19).jpg', caption: 'Nila Graduation' },
      { id: '2u', src: '/collections/nila/nila (20).jpg', caption: 'Nila Graduation' },
      { id: '2v', src: '/collections/nila/nila (21).jpg', caption: 'Nila Graduation' },
      { id: '2w', src: '/collections/nila/nila (22).jpg', caption: 'Nila Graduation' },
      { id: '2x', src: '/collections/nila/nila (23).jpg', caption: 'Nila Graduation' },
      { id: '2y', src: '/collections/nila/nila (24).jpg', caption: 'Nila Graduation' },
      
    ]
  },
  { 
    id: 3, 
    title: 'Widia Graduation - HI', 
    category: 'Graduation',
    coverImage: '/collections/widia/widia (9).jpg',
    images: [
      { id: '3a', src: '/collections/widia/widia (9).jpg', caption: 'Widia Graduation' },
      { id: '3b', src: '/collections/widia/widia (1).jpg', caption: 'Widia Graduation' },
      { id: '3c', src: '/collections/widia/widia (2).jpg', caption: 'Widia Graduation' },
      { id: '3d', src: '/collections/widia/widia (3).jpg', caption: 'Widia Graduation' },
      { id: '3f', src: '/collections/widia/widia (4).jpg', caption: 'Widia Graduation' },
      { id: '3g', src: '/collections/widia/widia (5).jpg', caption: 'Widia Graduation' },
      { id: '3h', src: '/collections/widia/widia (6).jpg', caption: 'Widia Graduation' },
      { id: '3i', src: '/collections/widia/widia (7).jpg', caption: 'Widia Graduation' },
      { id: '3j', src: '/collections/widia/widia (8).jpg', caption: 'Widia Graduation' },
      { id: '3k', src: '/collections/widia/widia (10).jpg', caption: 'Widia Graduation' },
    ]
  },
];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  
  const categories = ['All', ...new Set(portfolioData.map(item => item.category))];
  
  const filteredData = selectedCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === selectedCategory);

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setCurrentImageIndex(0);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === selectedAlbum.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedAlbum.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with modern styling */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-900 bg-clip-text text-transparent">
            My Collections
          </h2>
          <p className="text-gray-800 text-xl max-w-2xl mx-auto">
            Capturing moments through the lens - explore my photography collections
          </p>
        </div>

        {/* Portfolio Grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => openAlbum(item)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ 
                animationDelay: `${idx * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Image */}
              <img 
                src={item.coverImage} 
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Photo Count Badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30 flex items-center gap-1">
                <Grid3x3 className="w-3 h-3" />
                {item.images.length} Photos
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300">
                <div className={`transform transition-all duration-500 ${hoveredId === item.id ? 'translate-y-0' : 'translate-y-4'}`}>
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-white/30">
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
                    {item.title}
                  </h3>
                  <div className={`flex items-center text-white/90 text-sm transition-all duration-500 ${hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <ZoomIn className="w-4 h-4 mr-2" />
                    View collection
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-full blur-2xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Album Viewer with Gallery */}
      {selectedAlbum && (
        <div 
          className="fixed inset-0 bg-black/97 backdrop-blur-sm z-50 flex flex-col animate-fadeIn"
          onClick={closeAlbum}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/80 backdrop-blur-sm">
            <div>
              <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full border border-white/20 mb-2">
                {selectedAlbum.category}
              </span>
              <h3 className="text-white text-2xl font-bold">
                {selectedAlbum.title}
              </h3>
            </div>
            <button 
              className="text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 group"
              onClick={closeAlbum}
            >
              <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Main Image Viewer */}
          <div className="flex-1 flex items-center justify-center p-4 relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                <img 
                  src={selectedAlbum.images[currentImageIndex].src}
                  alt={selectedAlbum.images[currentImageIndex].caption}
                  className="w-full h-auto max-h-[65vh] object-cover rounded-2xl"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-white/80 text-sm">
                  {selectedAlbum.images[currentImageIndex].caption}
                </p>
                <p className="text-white/50 text-xs mt-2">
                  {currentImageIndex + 1} / {selectedAlbum.images.length}
                </p>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="border-t border-white/10 p-4 bg-black/50">
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <div className="flex gap-3 pb-2">
                {selectedAlbum.images.map((image, idx) => (
                  <button
                    key={image.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                      idx === currentImageIndex
                        ? 'ring-4 ring-blue-500 scale-110'
                        : 'ring-2 ring-white/20 hover:ring-white/40 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}