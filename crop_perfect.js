const sharp = require('sharp');

async function extractPerfectIcon() {
  try {
    const img = sharp('public/logo.png').trim();
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    
    const width = info.width;
    const height = info.height;
    const channels = info.channels;
    
    let gapColumn = -1;
    let inGraphic = false;
    
    for (let x = 0; x < width; x++) {
      let isTransparentColumn = true;
      for (let y = 0; y < height; y++) {
        const idx = (y * width + x) * channels;
        const alpha = data[idx + 3];
        if (alpha > 10) { 
          isTransparentColumn = false;
          break;
        }
      }
      
      if (!isTransparentColumn) {
        inGraphic = true;
      } else if (inGraphic && isTransparentColumn) {
        // We found the gap between the logo mark and the text!
        gapColumn = x;
        break;
      }
    }
    
    if (gapColumn === -1) {
      console.log('No gap found, defaulting to height * 1.3');
      gapColumn = Math.round(height * 1.3);
    }
    
    console.log(`Graphic bounding box width found at: ${gapColumn}`);
    
    const graphicWidth = gapColumn;
    const graphicHeight = height;
    
    // Add 25% padding so it looks like the Gemini icon
    const maxDim = Math.max(graphicWidth, graphicHeight);
    const finalSize = maxDim; 
    
    await img
      .extract({ left: 0, top: 0, width: graphicWidth, height: graphicHeight })
      .resize({ width: graphicWidth, height: graphicHeight, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .extend({
        top: Math.floor((finalSize - graphicHeight) / 2),
        bottom: Math.ceil((finalSize - graphicHeight) / 2),
        left: Math.floor((finalSize - graphicWidth) / 2),
        right: Math.ceil((finalSize - graphicWidth) / 2),
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile('public/krewex-icon-v8.png');
      
    console.log('Successfully saved perfect Favicon.png with size', finalSize);
  } catch (err) {
    console.error(err);
  }
}

extractPerfectIcon();
