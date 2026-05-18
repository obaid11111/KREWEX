const sharp = require('sharp');

async function cropAbsolute() {
  try {
    const left = 147;
    const top = 367;
    const width = 313;
    const height = 222;
    
    const size = Math.max(width, height); 
    
    await sharp('public/logo.png')
      .extract({ left, top, width, height })
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile('src/app/icon.png');
      
    console.log(`Saved src/app/icon.png as a perfect ${size}x${size} square with NO extra space.`);
  } catch (err) {
    console.error(err);
  }
}

cropAbsolute();
