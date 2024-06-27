const randomNum = (x) => {
    return new Promise((resolve) => { 
        setTimeout(() =>{
            for (let i = 0; i < x; i++) {
                resolve(Math.floor(Math.random() * 10))
            }
        }, 500)
    })
};

async function print(x){
    const contain = []
    for (let i = 0; i < x; i++) {
        contain.push(await randomNum(x))
    }
    console.log(contain)
};
print(6)
// above i train to write async&await and promise






