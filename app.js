const PORT = 3000;
const stream = require('stream');
const mysql = require('mysql2');
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

const staticFile = (res, filePath, ext) => {
    fs.readFile('./public/'+filePath , ext, (error, data) => {
        if (error) {
            res.statusCode = 404;
            res.end();
        }
        res.end(data);
    });    
};

http.createServer (function(req, res) {
    const url = req.url; 
    if (url === '/') {
        fs.readFile('./public/html/home.html', (error, data) => {
            if (error) {
                res.statusCode = 404;
                res.end();
            }
            res.end(data);
        });    
    };
    res.end();
    console.log(url);
}).listen(PORT);


