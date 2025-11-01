import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Grid3x3 } from 'lucide-react';

const portfolioData = [
  { 
    id: 1, 
    title: 'Urban Architecture', 
    category: 'Architecture',
    coverImage: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop',
    images: [
      { id: '1a', src: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop', caption: 'Modern building facade' },
      { id: '1b', src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop', caption: 'Glass and steel structure' },
      { id: '1c', src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop', caption: 'Interior architecture' },
      { id: '1d', src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&h=600&fit=crop', caption: 'Architectural details' },
      { id: '1e', src: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?w=800&h=600&fit=crop', caption: 'Urban skyline' },
    ]
  },
  { 
    id: 2, 
    title: 'Natural Landscapes', 
    category: 'Landscape',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    images: [
      { id: '2a', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', caption: 'Mountain peaks at sunset' },
      { id: '2b', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', caption: 'Valley view' },
      { id: '2c', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop', caption: 'Forest pathway' },
      { id: '2d', src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop', caption: 'Wildflower meadow' },
      { id: '2e', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', caption: 'Misty mountains' },
      { id: '2f', src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop', caption: 'Desert landscape' },
    ]
  },
  { 
    id: 3, 
    title: 'Street Photography', 
    category: 'Street',
    coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    images: [
      { id: '3a', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop', caption: 'City lights at night' },
      { id: '3b', src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop', caption: 'Urban street scene' },
      { id: '3c', src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop', caption: 'Bustling marketplace' },
      { id: '3d', src: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800&h=600&fit=crop', caption: 'Alleyway perspective' },
    ]
  },
  { 
    id: 4, 
    title: 'Portrait Series', 
    category: 'Portrait',
    coverImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
    images: [
      { id: '4a', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop', caption: 'Natural light portrait' },
      { id: '4b', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop', caption: 'Studio portrait' },
      { id: '4c', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', caption: 'Urban portrait' },
      { id: '4d', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop', caption: 'Environmental portrait' },
      { id: '4e', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop', caption: 'Casual portrait' },
    ]
  },
  { 
    id: 5, 
    title: 'Wildlife Collection', 
    category: 'Wildlife',
    coverImage: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&h=600&fit=crop',
    images: [
      { id: '5a', src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&h=600&fit=crop', caption: 'Bird in flight' },
      { id: '5b', src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=600&fit=crop', caption: 'Lion portrait' },
      { id: '5c', src: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=600&fit=crop', caption: 'Deer in forest' },
      { id: '5d', src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&h=600&fit=crop', caption: 'Fox in nature' },
      { id: '5e', src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=600&fit=crop', caption: 'Elephant herd' },
      { id: '5f', src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800&h=600&fit=crop', caption: 'Peacock display' },
    ]
  },
  { 
    id: 6, 
    title: 'Wedding Moments', 
    category: 'Wedding',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    images: [
      { id: '6a', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', caption: 'Ceremony moment' },
      { id: '6b', src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop', caption: 'Wedding details' },
      { id: '6c', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop', caption: 'Reception celebration' },
      { id: '6d', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop', caption: 'Couple portrait' },
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
                  className="w-full h-auto max-h-[65vh] object-contain rounded-2xl"
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