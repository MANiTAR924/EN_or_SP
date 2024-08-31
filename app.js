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
};

function fExt (param) {
    return param.split('.')[param.split('.').length-1];    
};

function preReading(req,res) {
    console.log(`[ P ] req (${fExt(req.url)}) for ${req.url}`);

    if (req.url === '/'){
        fs.createReadStream(`./public/html/home.html`).pipe(res);    

        res.writeHead(200, { 'Content-Type': `${mimeTypes[`.html`]}` });
    } else if (req.url === '/money'){
        fs.createReadStream(`./public/html/money.html`).pipe(res);    

        res.writeHead(200, { 'Content-Type': `${mimeTypes[`.html`]}` });
    }else if (fExt(req.url) === 'js'){
        fs.createReadStream(`./public${req.url}`).pipe(res);    

        res.writeHead(200, { 'Content-Type': `${mimeTypes[`.html`]}` });
    }else {
        fs.createReadStream(`./public/${fExt(req.url)}${req.url}`).pipe(res);    
    
        res.writeHead(200, { 'Content-Type': `${mimeTypes[`.${fExt(req.url)}`]}` });
    }
 console.log(`.${fExt(req.url)}`)
}

function reading (filePath, req ,res ) {

    console.log(`[ P ] req () for ${req.url}`);
    
    fs.createReadStream(`./public/${ext}${req.url}`).pipe(res);    
    
    // if (req.url === '/'){
    //     fs.createReadStream(`./public/${ext}${req.url}`).pipe(res);

    // } else if (req.url === '/money'){
    //     fs.createReadStream(`./public/${ext}${req.url}`).pipe(res);

    // }

    if (mimeTypes[ext] !== undefined){
        
        res.writeHead(200, { 'Content-Type': `${mimeTypes[`.${ext}`]}` });
        // console.log(` [ S ] Success request for ${req.url}`);
    }    
};

const server = http.createServer((req, res) => {

    preReading(req,res)

}).listen(3000, () => {
console.log('\nServer working on http://localhost:3000\n');
});
