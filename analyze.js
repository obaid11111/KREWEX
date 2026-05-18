const sharp = require('sharp');

async function analyze() {
  const { data, info } = await sharp('public/logo.png').raw().toBuffer({ resolveWithObject: true });
  
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      if (data[idx + 3] > 10) { 
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log(`Original Size: ${info.width}x${info.height}`);
  console.log(`Bounding Box: minX=${minX}, maxX=${maxX}, minY=${minY}, maxY=${maxY}`);
  console.log(`Graphic dimensions: width=${maxX - minX}, height=${maxY - minY}`);
  
  // Now find the gap for the "X" graphic
  let gapX = -1;
  let inGraphic = false;
  for (let x = minX; x <= maxX; x++) {
    let isTransparent = true;
    for (let y = minY; y <= maxY; y++) {
       const idx = (y * info.width + x) * info.channels;
       if (data[idx + 3] > 10) {
           isTransparent = false;
           break;
       }
    }
    if (!isTransparent) {
        inGraphic = true;
    } else if (inGraphic && isTransparent) {
        gapX = x;
        break;
    }
  }
  
  console.log(`Gap starts at X=${gapX}`);
  if (gapX !== -1) {
      console.log(`"X" Graphic EXACT bounding box: minX=${minX}, maxX=${gapX}, minY=${minY}, maxY=${maxY}`);
      console.log(`"X" Graphic EXACT dimensions: width=${gapX - minX}, height=${maxY - minY}`);
  }
}
analyze();
