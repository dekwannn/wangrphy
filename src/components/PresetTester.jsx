import React, { useState, useRef } from 'react';
import { Upload, Download } from 'lucide-react';
import { presets } from '../data/presets';
import { applyLUT } from '../utils/lutProcessor';

export default function PresetTester() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedPreset, setSelectedPreset] = useState(presets[0]);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        setProcessedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyPreset = async () => {
    if (!uploadedImage || !canvasRef.current) return;
    
    setIsProcessing(true);
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = async () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      if (selectedPreset.lut) {
        try {
          const lutImg = new Image();
          lutImg.crossOrigin = 'anonymous';
          
          await new Promise((resolve, reject) => {
            lutImg.onload = resolve;
            lutImg.onerror = reject;
            lutImg.src = selectedPreset.lut;
          });
          
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const lutCanvas = document.createElement('canvas');
          const lutCtx = lutCanvas.getContext('2d');
          lutCanvas.width = lutImg.width;
          lutCanvas.height = lutImg.height;
          lutCtx.drawImage(lutImg, 0, 0);
          const lutData = lutCtx.getImageData(0, 0, lutCanvas.width, lutCanvas.height);
          
          applyLUT(imageData, lutData);
          ctx.putImageData(imageData, 0, 0);
        } catch (error) {
          console.error('Error applying LUT:', error);
        }
      }
      
      setProcessedImage(canvas.toDataURL('image/jpeg', 0.95));
      setIsProcessing(false);
    };
    
    img.src = uploadedImage;
  };

  const handleDownload = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.download = `edited-${selectedPreset.id}-${Date.now()}.jpg`;
    link.href = processedImage;
    link.click();
  };

  React.useEffect(() => {
    if (uploadedImage && selectedPreset) {
      applyPreset();
    }
  }, [selectedPreset, uploadedImage]);

  return (
    <section id="preset" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Try My Presets</h2>
          <p className="text-gray-600 text-lg">Upload your photo and apply professional color grading</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {!uploadedImage ? (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-4 border-dashed border-gray-300 rounded-xl p-16 text-center cursor-pointer hover:border-gray-400 transition"
            >
              <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2">Upload Your Photo</h3>
              <p className="text-gray-500">Click to browse or drag and drop your image here</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Original</h3>
                  <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-[4/3]">
                    <img src={uploadedImage} alt="Original" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Preview</h3>
                  <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-[4/3]">
                    {isProcessing ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-900"></div>
                      </div>
                    ) : processedImage ? (
                      <img src={processedImage} alt="Processed" className="w-full h-full object-contain" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">Processing...</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Select Preset</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {presets.map(preset => (
                    <button
                      key={preset.id}
                      onClick={() => setSelectedPreset(preset)}
                      className={`p-4 rounded-lg border-2 transition ${
                        selectedPreset.id === preset.id
                          ? 'border-gray-900 bg-gray-50'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <div className="font-medium">{preset.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleDownload}
                  disabled={!processedImage}
                  className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition font-medium flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Result
                </button>
                <button
                  onClick={() => {
                    setUploadedImage(null);
                    setProcessedImage(null);
                    setSelectedPreset(presets[0]);
                  }}
                  className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition font-medium"
                >
                  Upload New
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </section>
  );
}