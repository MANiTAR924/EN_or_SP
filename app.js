const fs = require('fs');
const http = require('http');
const mysql = require('mysql2/promise');
const { emitWarning } = require('process');
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
function preRead (path, res,  req) {
    if(fExt(path) === 'html'){
        fs.createReadStream(`./public/html/${path}`).pipe(res);    
        
        res.writeHead(200, { 'Content-Type': `${mimeTypes[`.html`]}` });
    } else if (fExt(path) === 'js'){
        fs.createReadStream(`./public${req.url}`).pipe(res);
        
        res.writeHead(200, { 'Content-Type': `${mimeTypes['.'+fExt(path)]}` })
    } else {
        try {
            fs.createReadStream(`./public/${fExt(req.url)}${req.url}`).pipe(res);   

            res.writeHead(200, { 'Content-Type': `${mimeTypes[`.${fExt(req.url)}`]}` });
        } catch (error) {
            res.write(`page not found\nERROR: ${error}`)
        }
    };
}
function reading(req,res) {
    console.log(`[ P ] req (${fExt(req.url)}) for ${req.url}`);
        if (req.url === '/'){
            preRead('home.html', res);
        } else if (req.url === '/money'){
            preRead('money.html', res)
        }else if(req.url === '/js/logic.js'){
            preRead('logic.js', res, req)
        }else if (req.url === '/test'){
            preRead('test.html', res)
        }else if (req.url === '/sign'){
            preRead('regist.html', res)
        }else {
            try {
                fs.createReadStream(`./public/${fExt(req.url)}${req.url}`).pipe(res);   

                res.writeHead(200, { 'Content-Type': `${mimeTypes[`.${fExt(req.url)}`]}` });
            } catch (error) {
                reading('error.html', res)
            }
        };
   
}
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Q2102(!LsqlO', 
    database: 'db'
});
async function insertData() {
    let conn;
    try {
        conn = await pool.getConnection();

        // Данные для вставки
        const name = 'John';
        const age = 30;
        // const email = document.

        // Запрос на вставку данных
        const res = conn.query(`select * from users`);

        console.log(await res);
    } catch (err) {
        console.error('Ошибка:', err);
    } finally {
        if (conn) conn.release(); // Закрываем подключение
    }
}


const server = http.createServer((req, res) => {
    
    reading(req,res)
}).listen(3000, () => {
console.log('\nServer working on https://localhost:3000\n');
});
