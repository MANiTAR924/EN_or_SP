const fs = require('fs');
const http = require('http');
const path = require('path');
const mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
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


async function reading (ext, filePath, req ,res) {
    console.log(`[ P ] req for ${req.url}`);
    
    if (mimeTypes[ext] !== undefined){
        await fs.createReadStream(`./public${filePath}`).pipe(res);
        
        res.writeHead(200, { 'Content-Type': `${mimeTypes[ext]}` });
        console.log(` [ S ] Success request for ${req.url}`);
    }    
    
};
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            reading('.html', '/html/home.html', req, res);
            reading('.css', '/css/main.css', req, res);
            reading('.js', '/js/logic.js', req, res);
        case '':
        default:
            reading('.html', '/html/error.html', req, req)
    }



}).listen(3000, () => {
console.log('\nServer working on http://localhost:3000\n');
});

