const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

// Helper: read request body as JSON
function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      // Cap at 25MB for image uploads
      if (body.length > 25 * 1024 * 1024) {
        req.destroy();
        reject(new Error('Body too large'));
      }
    });
    req.on('end', () => {
      try {
        const json = body ? JSON.parse(body) : {};
        resolve(json);
      } catch (err) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

// Helper: save or update blog in blogs-data.js on disk
function saveBlogToDisk(newBlog) {
  try {
    const blogsFilePath = path.join(PUBLIC_DIR, 'blogs-data.js');
    if (!fs.existsSync(blogsFilePath)) return false;
    
    let content = fs.readFileSync(blogsFilePath, 'utf-8');
    
    // Match DEFAULT_BLOGS_DATA array
    const marker = 'const DEFAULT_BLOGS_DATA = ';
    const startIdx = content.indexOf(marker);
    if (startIdx === -1) return false;

    // Use safe extraction or evaluate structure
    // Find the end of array by looking for semicolon before helper functions or end
    const helperIdx = content.indexOf('const BLOG_STORAGE_KEY');
    if (helperIdx === -1) return false;

    const arrayStr = content.substring(startIdx + marker.length, helperIdx).trim().replace(/;$/, '');
    let blogsArray = [];
    try {
      blogsArray = eval('(' + arrayStr + ')');
    } catch (e) {
      console.error('Failed to parse existing blogs array:', e);
      return false;
    }

    if (!Array.isArray(blogsArray)) blogsArray = [];

    const existingIdx = blogsArray.findIndex(b => b.id === newBlog.id || (newBlog.slug && b.slug === newBlog.slug));
    if (existingIdx >= 0) {
      blogsArray[existingIdx] = { ...blogsArray[existingIdx], ...newBlog };
    } else {
      blogsArray.unshift(newBlog);
    }

    const updatedArrayStr = JSON.stringify(blogsArray, null, 2);
    const updatedContent = content.substring(0, startIdx + marker.length) + updatedArrayStr + ';\n\n' + content.substring(helperIdx);
    
    fs.writeFileSync(blogsFilePath, updatedContent, 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving blog to disk:', err);
    return false;
  }
}

// Helper: delete blog from blogs-data.js on disk
function deleteBlogFromDisk(slugOrId) {
  try {
    const blogsFilePath = path.join(PUBLIC_DIR, 'blogs-data.js');
    if (!fs.existsSync(blogsFilePath)) return false;
    
    let content = fs.readFileSync(blogsFilePath, 'utf-8');
    const marker = 'const DEFAULT_BLOGS_DATA = ';
    const startIdx = content.indexOf(marker);
    const helperIdx = content.indexOf('const BLOG_STORAGE_KEY');
    if (startIdx === -1 || helperIdx === -1) return false;

    const arrayStr = content.substring(startIdx + marker.length, helperIdx).trim().replace(/;$/, '');
    let blogsArray = eval('(' + arrayStr + ')');
    if (!Array.isArray(blogsArray)) return false;

    blogsArray = blogsArray.filter(b => b.slug !== slugOrId && b.id !== slugOrId);

    const updatedArrayStr = JSON.stringify(blogsArray, null, 2);
    const updatedContent = content.substring(0, startIdx + marker.length) + updatedArrayStr + ';\n\n' + content.substring(helperIdx);
    
    fs.writeFileSync(blogsFilePath, updatedContent, 'utf-8');
    return true;
  } catch (err) {
    console.error('Error deleting blog from disk:', err);
    return false;
  }
}

// Helper: save or update products in products-data.js on disk
function saveProductsToDisk(productsArray) {
  try {
    const filePath = path.join(PUBLIC_DIR, 'products-data.js');
    if (!fs.existsSync(filePath)) return false;
    let content = fs.readFileSync(filePath, 'utf-8');
    const marker = 'const DEFAULT_PRODUCTS_DATA = ';
    const startIdx = content.indexOf(marker);
    const helperIdx = content.indexOf('const PRODUCT_STORAGE_KEY');
    if (startIdx === -1 || helperIdx === -1) return false;

    const updatedArrayStr = JSON.stringify(productsArray, null, 2);
    const updatedContent = content.substring(0, startIdx + marker.length) + updatedArrayStr + ';\n\n' + content.substring(helperIdx);
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving products to disk:', err);
    return false;
  }
}

// Helper: save or update projects in projects-data.js on disk
function saveProjectsToDisk(projectsArray) {
  try {
    const filePath = path.join(PUBLIC_DIR, 'projects-data.js');
    if (!fs.existsSync(filePath)) return false;
    let content = fs.readFileSync(filePath, 'utf-8');
    const marker = 'const DEFAULT_PROJECTS_DATA = ';
    const startIdx = content.indexOf(marker);
    const helperIdx = content.indexOf('const PROJECT_STORAGE_KEY');
    if (startIdx === -1 || helperIdx === -1) return false;

    const updatedArrayStr = JSON.stringify(projectsArray, null, 2);
    const updatedContent = content.substring(0, startIdx + marker.length) + updatedArrayStr + ';\n\n' + content.substring(helperIdx);
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving projects to disk:', err);
    return false;
  }
}

// Helper: save site settings to site-settings.js on disk
function saveSettingsToDisk(settingsObj) {
  try {
    const filePath = path.join(PUBLIC_DIR, 'site-settings.js');
    if (!fs.existsSync(filePath)) return false;
    let content = fs.readFileSync(filePath, 'utf-8');
    const marker = 'const DEFAULT_SITE_SETTINGS = ';
    const startIdx = content.indexOf(marker);
    const helperIdx = content.indexOf('const SITE_SETTINGS_STORAGE_KEY');
    if (startIdx === -1 || helperIdx === -1) return false;

    const updatedObjStr = JSON.stringify(settingsObj, null, 2);
    const updatedContent = content.substring(0, startIdx + marker.length) + updatedObjStr + ';\n\n' + content.substring(helperIdx);
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving settings to disk:', err);
    return false;
  }
}

const handleRequest = async (req, res) => {
  try {
    const rawUrl = (req && req.url) ? req.url : '/';
    let urlPath = rawUrl.split('?')[0];

    // Handle CORS preflight
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    // --- API Endpoints ---
    if (urlPath === '/api/sync-all' && req.method === 'POST') {
      const data = await parseRequestBody(req);
      let success = true;
      if (data.prods && Array.isArray(data.prods)) saveProductsToDisk(data.prods);
      if (data.projs && Array.isArray(data.projs)) saveProjectsToDisk(data.projs);
      if (data.settings) saveSettingsToDisk(data.settings);
      if (data.blogs && Array.isArray(data.blogs)) {
        try {
          const blogsFilePath = path.join(PUBLIC_DIR, 'blogs-data.js');
          if (fs.existsSync(blogsFilePath)) {
            let content = fs.readFileSync(blogsFilePath, 'utf-8');
            const marker = 'const DEFAULT_BLOGS_DATA = ';
            const startIdx = content.indexOf(marker);
            const helperIdx = content.indexOf('const BLOG_STORAGE_KEY');
            if (startIdx !== -1 && helperIdx !== -1) {
              const updatedArrayStr = JSON.stringify(data.blogs, null, 2);
              const updatedContent = content.substring(0, startIdx + marker.length) + updatedArrayStr + ';\n\n' + content.substring(helperIdx);
              fs.writeFileSync(blogsFilePath, updatedContent, 'utf-8');
            }
          }
        } catch (e) { console.error('Error syncing blogs:', e); }
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'All data files synchronized to disk successfully!' }));
      return;
    }

    if (urlPath === '/api/save-blog' && req.method === 'POST') {
      const data = await parseRequestBody(req);
      if (data && data.blog) {
        const saved = saveBlogToDisk(data.blog);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: saved, message: saved ? 'Blog saved to blogs-data.js on disk' : 'Error writing to file' }));
        return;
      }
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Missing blog payload' }));
      return;
    }

    if (urlPath === '/api/delete-blog' && req.method === 'POST') {
      const data = await parseRequestBody(req);
      if (data && data.slugOrId) {
        const deleted = deleteBlogFromDisk(data.slugOrId);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: deleted }));
        return;
      }
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Missing slugOrId' }));
      return;
    }

    if (urlPath === '/api/upload-image' && req.method === 'POST') {
      const data = await parseRequestBody(req);
      if (data && data.base64Data) {
        try {
          const uploadsDir = path.join(PUBLIC_DIR, 'images', 'uploads');
          if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
          }

          const filename = data.filename || `blog-img-${Date.now()}.png`;
          const cleanFilename = filename.replace(/[^a-zA-Z0-9_.-]/g, '_');
          const filePath = path.join(uploadsDir, cleanFilename);

          const base64Clean = data.base64Data.replace(/^data:image\/\w+;base64,/, '');
          const buffer = Buffer.from(base64Clean, 'base64');
          fs.writeFileSync(filePath, buffer);

          const relativePath = `images/uploads/${cleanFilename}`;
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, imagePath: relativePath }));
          return;
        } catch (uploadErr) {
          console.error('Image upload save error:', uploadErr);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Failed to write image file' }));
          return;
        }
      }
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Missing base64Data' }));
      return;
    }

    // --- Static File Serving ---
    if (urlPath === '/' || urlPath === '') {
      urlPath = '/index.html';
    }

    let filePath = path.join(PUBLIC_DIR, path.normalize(urlPath));
    let ext = path.extname(filePath).toLowerCase();
    
    if (!ext && fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
      ext = '.html';
    }

    const contentType = MIME_TYPES[ext] || 'text/html; charset=utf-8';

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const content = fs.readFileSync(filePath);
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(content);
    } else {
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      if (fs.existsSync(indexPath)) {
        const indexContent = fs.readFileSync(indexPath);
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        });
        res.end(indexContent);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Not Found</h1>');
      }
    }
  } catch (err) {
    console.error('Server request error:', err);
    try {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.end(fs.readFileSync(indexPath));
      } else {
        res.end('<h1>BKS Industries</h1>');
      }
    } catch (e) {
      res.writeHead(500);
      res.end('Server Error');
    }
  }
};

if (require.main === module) {
  const http = require('http');
  const server = http.createServer(handleRequest);
  server.listen(PORT, () => {
    console.log(`🚀 BKS Industries server running at http://localhost:${PORT}/`);
    console.log(`✍️ Blog Creator Studio ready with disk auto-sync and image upload!`);
  });
}
