//  in comments --> [] inside the square brackets is the code
const person1 = (firstName, lastName, age, isMarried, profession) => {
    return {
        firstName, // <-- this a shorthand [firstName: firstName,] below the same 
        lastName, 
        age, 
        isMarried, 
        profession, 
        }
};
const denchik = person1('den', 'turin', 21, false, 'bomzh');
const {firstName} = person1; // <-- this a shorthand [const firstName = person1.firstName] 
//  and this also working in nested object


const person0 = {
    firstName: 'den',  
    lastName: 'turin', 
    age: 21, 
    isMarried: false, 
    profession: 'bomzh', 
}

const mainArray = [];
const nestedArray = [];

for (let i = 0; i < person0.length; i++) {
    for (key in person0){
        nestedArray.push(key)
    }
    mainArray.push(nestedArray.key)
}

console.log(`main   - ${mainArray}.`)
console.log(`nested - ${nestedArray}.`)