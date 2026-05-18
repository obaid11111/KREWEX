const sharp = require('sharp');
const fs = require('fs');

async function extractIcon() {
  try {
    // We'll use the original Favicon.png (assuming I have a backup, actually I overwrote it earlier!)
    // Wait, let's use logo.png since I didn't overwrite it.
    const img = sharp('public/logo.png');
    
    // Trim empty space
    const trimmed = img.trim();
    const { data, info } = await trimmed.toBuffer({ resolveWithObject: true });
    
    console.log('Trimmed dimensions:', info.width, 'x', info.height);
    
    // Assuming the icon graphic is on the left and is roughly square.
    // Let's extract a square of size info.height x info.height from the left.
    const size = info.height;
    
    // Sometimes there's a small gap between the icon and the text. 
    // Extracting an HxH square should perfectly capture the icon if it's perfectly circular/square.
    await sharp(data)
      .extract({ left: 0, top: 0, width: size, height: size })
      .toFile('public/Favicon.png');
      
    await sharp(data)
      .extract({ left: 0, top: 0, width: size, height: size })
      .toFile('src/app/icon.png');

    console.log('Successfully extracted the icon!');
  } catch (err) {
    console.error(err);
  }
}

extractIcon();
