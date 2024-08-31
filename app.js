const fs = require('fs');
const http = require('http');
const mimeTypes = {
    '.js': 'application/javascript',
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
    '.ico': 'image/x-icon',
};

function fExt (param) {
    return param.split('.')[param.split('.').length-1];    
};

function preReading(req,res) {
    console.log(`[ P ] req (${fExt(req.url)}) for ${req.url}`);
    try {
        if (req.url === '/'){
            fs.createReadStream(`./public/html/home.html`).pipe(res);    

            res.writeHead(200, { 'Content-Type': `${mimeTypes[`.html`]}` });
        } else if (req.url === '/money'){
            fs.createReadStream(`./public/html/money.html`).pipe(res);    
    
            res.writeHead(200, { 'Content-Type': `${mimeTypes[`.html`]}` });
        }else if (fExt(req.url) === 'js'){
            fs.createReadStream(`./public${req.url}`).pipe(res);    
    
            res.writeHead(200, { 'Content-Type': `${mimeTypes[`.js`]}` });
        }else if(req.url === '/favicon.ico'){
            fs.createReadStream(`./public/jpg/Untitled.jpeg`).pipe(res);    
    
            res.writeHead(200, { 'Content-Type': `${mimeTypes[`.iso`]}` });
        }else {
            fs.createReadStream(`./public/${fExt(req.url)}${req.url}`).pipe(res);    
        
            res.writeHead(200, { 'Content-Type': `${mimeTypes[`.${fExt(req.url)}`]}` });
        };
    } catch (error) {
        throw error
    };

    
}

const server = http.createServer((req, res) => {

    preReading(req,res)

}).listen(3000, () => {
console.log('\nServer working on http://localhost:3000\n');
});
