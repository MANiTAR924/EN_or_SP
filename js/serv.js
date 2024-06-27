const express = require('express');

const app = express();

const maindir = "/mnt/D/VScode/repo#/firstOne"

app.get('/' , (req, res) => {
    res.sendFile(`${maindir}/templates/html/main.html`);
    res.sendFile(`${maindir}/js/logic.js`)
})
app.get('/money' , (req, res) => {
    res.sendFile(`${maindir}/templates/html/money.html`);
})
// app.get('/logic.js' , (req, res) => {
// })

const PORT = 3000
const HOST = 'localhost'

app.listen(PORT, HOST, () => {
    console.log(`server working http://${HOST}:${PORT}`)
})

