const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// File paths
const files = [
  'ai-post-planner.png',
  'streak-dashboard.png',
  'badge-collection.png'
];

// For each PNG file that contains SVG content
files.forEach(file => {
  const filePath = path.join(publicDir, file);
  
  // Read the current file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${file}:`, err);
      return;
    }
    
    // Extract SVG content
    const svgMatch = data.match(/<svg[\s\S]*<\/svg>/);
    if (!svgMatch) {
      console.error(`No SVG content found in ${file}`);
      return;
    }
    
    // Create SVG file with the same name but .svg extension
    const svgFilePath = path.join(publicDir, file.replace('.png', '.svg'));
    fs.writeFile(svgFilePath, svgMatch[0], err => {
      if (err) {
        console.error(`Error writing ${svgFilePath}:`, err);
        return;
      }
      console.log(`Created ${svgFilePath}`);
    });
  });
});

console.log('Conversion process started...'); 