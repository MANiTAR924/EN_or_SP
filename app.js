const fs = require('fs');
const http = require('http');
const path = require('path');
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
};


async function reading (filePath, req ,res) {
    const ext = filePath.split('.')[filePath.split('.').length-1];

    console.log(`[ P ] req (${ext}) for ${req.url}`);
    
    fs.createReadStream(`./public${filePath}`).pipe(res);

    if (mimeTypes[ext] !== undefined){
        
        res.writeHead(200, { 'Content-Type': `${mimeTypes[`.${ext}`]}` });
        // console.log(` [ S ] Success request for ${req.url}`);
    }    
    return ext
};
const server = http.createServer((req, res) => {
    const s = req.url;
    // switch (req.url) {
    //     case '/':
    //         reading('/html/home.html', req, res);
    //         // reading('/css/main.css', req, res);
    //         // reading('/js/logic.js', req, res);
    //     case '/logic.js':
    //         reading('/js/logic.js', req, res);
    //     case '/main.css':
    //         reading('/css/main.css', req, res);
    //     default:
    //         reading('/html/error.html', req, req)
    // }
    if (s === '/') {
        reading('/html/home.html', req , res)
    } else if (req.url === '/main.css'){
        reading('/css/main.css', req , res)
    } else if (req.url === '/js/logic.js'){
        reading('/js/logic.js', req , res)
    }
    


}).listen(3000, () => {
console.log('\nServer working on http://localhost:3000\n');
});

