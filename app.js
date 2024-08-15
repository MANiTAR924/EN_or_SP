const fs = require('fs');
const http = require('http');
const path = require('path');
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml', 
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm',
};
const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} received.\n`);
if (req.url === '/') {
    fs.createReadStream('./public/html/home.html').pipe(res);

    res.writeHead(200, { 'Content-Type': 'text/html' });
} else if (req.url === '/main.css') {
    fs.createReadStream('./public/css/main.css').pipe(res);
    
    res.writeHead(200, { 'Content-Type': 'text/css' });
} else if (req.url === '/js/logic.js') {
    fs.createReadStream('./public/js/logic.js').pipe(res);
    
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    };
}).listen(3000, () => {
console.log('Server working on http://localhost:3000');
});


