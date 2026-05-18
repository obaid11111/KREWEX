const sharp = require('sharp');
const fs = require('fs');

async function extractPerfectIcon() {
  const img = sharp('public/logo.png').trim();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  
  const width = info.width;
  const height = info.height;
  
  const graphicWidth = 313; // Found from pixel analysis
  const graphicHeight = 222; 
  
  const maxDim = Math.max(graphicWidth, graphicHeight);
  const finalSize = Math.round(maxDim * 1.0); // 0% padding
  
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
    .toFile('src/app/icon.png');
    
  console.log('Successfully saved perfect src/app/icon.png');
}

extractPerfectIcon();
