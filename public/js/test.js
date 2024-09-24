const fs = require('fs');
const readline = require('readline');

const lala = fs.createWriteStream('some.txt');

async function print(x) {
    const randomNum = (x) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                for (let i = 0; i < x; i++) {
                    resolve(Math.floor(Math.random() * 10))
                };
            }, 100);
        });
    };

    const contain = [];
    for (let i = 0; i < x; i++) {
        contain.push(await randomNum(x))
    };
    lala.write(`${contain}`);  //this line paste array 'contain' which stored random number < 10 into "text.txt" file.
    lala.end();
};
// below: This async func, handler file(where will writes value selected into callback) and callback(this function do some calculates and write in 'txt' file) 
// Then log value from 'txt' file to the console, yeah , it's work only in this js file, but maybe I optimize it in the future.
async function readering(file, callback) {
    await callback;
    const myInterface = readline.createInterface({
        input: fs.createReadStream(`${file}`)
    });
    
    myInterface.on('line', (fileLine) => {
        console.log(`Read successed. ${file} stored:\n${fileLine}`);
    });
};
readering('some.txt', print(3))
// above

