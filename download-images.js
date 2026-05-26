const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Images to download
const images = [
  {
    url: 'https://images.unsplash.com/photo-1562044840-2c352311ab4e',
    filename: 'hero-bg.jpg',
    description: 'Engineering students working in developing areas'
  },
  {
    url: 'https://images.unsplash.com/photo-1552057426-9f23e61fa7b1',
    filename: 'project1.jpg',
    description: 'Water project in Guatemala'
  },
  {
    url: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1',
    filename: 'project2.jpg',
    description: 'Solar project in Tanzania'
  },
  {
    url: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9',
    filename: 'project3.jpg',
    description: 'Bridge construction in Costa Rica'
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    filename: 'about-hero.jpg',
    description: 'Engineers in a meeting'
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
    filename: 'team1.jpg',
    description: 'Team member portrait'
  },
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    filename: 'team2.jpg',
    description: 'Team member portrait'
  },
  {
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    filename: 'team3.jpg',
    description: 'Team member portrait'
  },
  {
    url: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507',
    filename: 'team4.jpg',
    description: 'Team member portrait'
  }
];

// Download function
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    console.log(`Downloading ${filename}...`);
    
    https.get(`${url}?auto=format&fit=crop&w=1200&q=80`, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath);
        console.error(`Error downloading ${filename}: ${err.message}`);
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filePath);
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Failed to download ${image.filename}`);
    }
  }
  console.log('All downloads completed');
}

downloadAllImages(); 