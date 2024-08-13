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

http.createServer(function(req, res) {
    const url = req.url; 
    if (url === '/') {
        fs.createReadStream()
    }
    else if (url === '/')    
    res.end();
    console.log('Server working on http://localhost:3000');
}).listen(3000);


