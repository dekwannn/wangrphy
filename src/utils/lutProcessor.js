export const applyLUT = (imageData, lutData) => {
  const pixels = imageData.data;
  const lutSize = Math.round(Math.cbrt(lutData.width * lutData.height));
  
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    
    const rIndex = Math.floor(r / 255 * (lutSize - 1));
    const gIndex = Math.floor(g / 255 * (lutSize - 1));
    const bIndex = Math.floor(b / 255 * (lutSize - 1));
    
    const lutX = (bIndex % lutSize) + (rIndex * lutSize);
    const lutY = gIndex + Math.floor(bIndex / lutSize) * lutSize;
    
    const lutIndex = (lutY * lutData.width + lutX) * 4;
    
    if (lutIndex < lutData.data.length) {
      pixels[i] = lutData.data[lutIndex];
      pixels[i + 1] = lutData.data[lutIndex + 1];
      pixels[i + 2] = lutData.data[lutIndex + 2];
    }
  }
};