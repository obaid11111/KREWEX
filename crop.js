const sharp = require('sharp');

async function cropFavicon() {
  try {
    await sharp('public/Favicon.png')
      .trim()
      .toFile('src/app/icon.png');
    console.log('Favicon cropped successfully!');
  } catch (error) {
    console.error('Error cropping favicon:', error);
  }
}

cropFavicon();
