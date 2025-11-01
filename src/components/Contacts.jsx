import React, { useState, useEffect } from "react";
import { Instagram, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // deteksi layar sentuh supaya kita bisa menonaktifkan 'hover' yang
    // tidak berguna di mobile dan menyediakan interaksi ketuk.
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
      );
    }
  }, []);

  // gunakan satuan relatif (vw/vh) agar proporsinya mengikuti ukuran layar
  const stackImages = [
    {
      id: 1,
      src: "/collections/nila/nila (23).jpg",
      stackPos: { x: "0vw", y: "0vh", rotate: "0deg" },
      spreadPos: { x: "-18vw", y: "-4vh", rotate: "-6deg" }
    },
    {
      id: 2,
      src: "/slider/potrait/potrait4.jpg",
      stackPos: { x: "0vw", y: "1.5vh", rotate: "3deg" },
      spreadPos: { x: "0vw", y: "0vh", rotate: "0deg" }
    },
    {
      id: 3,
      src: "/slider/potrait/potrait3.jpg",
      stackPos: { x: "0vw", y: "3vh", rotate: "6deg" },
      spreadPos: { x: "18vw", y: "-4vh", rotate: "6deg" }
    }
  ];

  const contactInfo = {
    whatsapp: "+6281239739506",
    instagram: "@wangrphy",
    email: "kdwidiadnyana@gmail.com",
    phone: "+6281239739506",
    location: "Singaraja, Bali"
  };

  const handleWhatsApp = () => {
    const num = contactInfo.whatsapp.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${num}?text=Hi! I'm interested in your photography services`, "_blank");
  };

  const handleInstagram = () => {
    window.open(`https://instagram.com/${contactInfo.instagram.replace("@", "")}`, "_blank");
  };

  // Toggle untuk mobile (ketuk sekali untuk buka, ketuk lagi untuk tutup)
  const handleMobileToggle = () => {
    if (isTouchDevice) setIsHovered((s) => !s);
  };

  // Keyboard accessibility: Enter / Space toggles "hover"
  const handleKeyDownToggle = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsHovered((s) => !s);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative order-1 lg:order-1 flex justify-center">
            <div
              role={isTouchDevice ? "button" : undefined}
              tabIndex={0}
              aria-label="Gallery preview"
              onClick={handleMobileToggle}
              onTouchStart={isTouchDevice ? handleMobileToggle : undefined}
              onKeyDown={handleKeyDownToggle}
              onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
              onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            >
              {/* container height berubah sesuai viewport */}
              <div className="relative h-[36vh] sm:h-[44vh] md:h-[52vh] lg:h-[60vh] flex items-center justify-center">
                {stackImages.map((image, index) => {
                  const pos = isHovered ? image.spreadPos : image.stackPos;
                  // saat tidak hover, sedikit mengecil untuk efek stacked
                  const scale = isHovered ? 1 : 0.96;
                  // zIndex agar tumpukan tetap rapi pada desktop & mobile
                  const zIdx = isHovered ? index + 10 : stackImages.length - index + 10;

                  return (
                    <div
                      key={image.id}
                      className="absolute rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-out will-change-transform"
                      style={{
                        width: "min(24rem, 52%)", // responsif: batasi lebar kartu
                        aspectRatio: "3/4",
                        transform: `translateX(${pos.x}) translateY(${pos.y}) rotate(${pos.rotate}) scale(${scale})`,
                        zIndex: zIdx
                      }}
                    >
                      <img
                        src={image.src}
                        alt={`Photo ${image.id}`}
                        loading="lazy"
                        className="w-full h-full object-cover block"
                        onError={(e) => {
                          // fallback SVG kecil bila gambar hilang
                          const colors = ["6366f1", "ec4899", "f59e0b"];
                          e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800'%3E%3Crect width='100%25' height='100%25' fill='%23${colors[index]}' /%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='28' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPhoto ${image.id}%3C/text%3E%3C/svg%3E`;
                        }}
                      />

                      {/* Overlay hint hanya tampil pada desktop ketika tidak di-hover */}
                      {!isHovered && index === stackImages.length - 1 && !isTouchDevice && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <p className="text-white font-semibold text-lg">Hover to explore</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* dekorasi blur - pos relatif agar tak memotong konten di mobile */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-50 -z-10 hidden sm:block"></div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-pink-200 rounded-full blur-3xl opacity-50 -z-10 hidden sm:block"></div>
            </div>
          </div>

          {/* Right - teks & CTA */}
          <div className="order-2 lg:order-2 space-y-6">
            <div>
              <p className="text-indigo-600 font-semibold mb-2 text-base sm:text-lg">Let's Work Together</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Contact Me!
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Whether it's a wedding, portrait session, or commercial project, I'm here to bring your vision to
                life. Let's create something beautiful together.
              </p>
            </div>

            {/* CTA: tombol full width di mobile, inline di desktop */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>

              <button
                onClick={handleInstagram}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-5 py-3 border-2 border-gray-900 rounded-xl hover:opacity-95 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-white"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </button>
            </div>

            {/* optional: contact details kecil
            <div className="pt-2 text-sm text-gray-600">
              <p className="truncate"><strong>Email:</strong> {contactInfo.email}</p>
              <p className="truncate"><strong>Phone:</strong> {contactInfo.phone}</p>
              <p className="truncate"><strong>Location:</strong> {contactInfo.location}</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
