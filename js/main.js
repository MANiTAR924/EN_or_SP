const http = require('http');
const fs = require('fs');

let server = http.createServer((req ,res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

    if (req.url == '/')
        fs.createReadStream('./templates/html/index.html').pipe(res)
    else if (req.url == '/money')
        fs.createReadStream('./templates/html/money.html').pipe(res)
    else
        fs.createReadStream('./templates/html/error.html').pipe(res)


});

// const PORT = 3000
// const HOST = 'localhost'

// server.listen(PORT, HOST, () => {
//     console.log(`server working http://${HOST}:${PORT}`)
// })

