// const object = { a: 1, b: 2, c: 3 };
// 
// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }
// above instance how use loop with object (for..in - use for Objects. for..in for Arrays)

if (req.url === '/') {
    fs.createReadStream('./public/html/home.html').pipe(res);

    res.writeHead(200, { 'Content-Type': 'text/html' });
} else if (req.url === '/main.css') {
    fs.createReadStream('./public/css/main.css').pipe(res);
    
    res.writeHead(200, { 'Content-Type': 'text/css' });
} else if (req.url === '/js/logic.js') {
    fs.createReadStream('./public/js/logic.js').pipe(res);
    
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
}  