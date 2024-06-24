const express = require('express');

const app = express();

const maindir = "/mnt/D/VScode/repo#/firstOne/"

app.get('/' , (req, res) => {
    res.sendFile(`${maindir}/templates/html/index.html`)
    if(req.url = '/money'){
        res.sendFile(`${maindir}/templates/html/error.html`)
    } else {
        res.sendFile(`${maindir}/templates/html/money.html`)
    }
})

const PORT = 3000
const HOST = 'localhost'

app.listen(PORT, HOST, () => {
    console.log(`server working http://${HOST}:${PORT}`)
})

