const fs = require('fs');
const http = require('http');
const path = require('path');

function preReading(filePath, req,res) {
    const ext = filePath.split('.')[filePath.split('.').length-1];    

    fs.createReadStream(`./public/${ext}${filePath}`).pipe(res);    

    res.writeHead(200, { 'Content-Type': `${mimeTypes[`.${ext}`]}` });

}

function reading (filePath, req ,res ) {
    const ext = filePath.split('.')[filePath.split('.').length-1];

    console.log(`[ P ] req (${ext}) for ${req.url}`);
    
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

// export {preReading, reading};