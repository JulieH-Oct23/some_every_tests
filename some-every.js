/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr){
    return arr.some(function(val){
      return val % 2 !== 0;
    })
  }
/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num){
    return num.toString().split('').some(function(val){
      return val === '0';
    })
  }

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/


function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
      return val % 2 !== 0;
    })
  }

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr){
    return arr.every(function(val){
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val
    })
  }
/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
      return val[key] === searchValue;
    })
  }






// // ARRAY SOME 
// // 1. IS there at least one male character?
// const oneMaleCharacter = characters.some((character) =>{
//     return character.gender === 'male';
// })
// console.log(oneMaleCharacter);

// // 2. is there at least one character with blue eyes?
// const blueEyes = characters.some((character) =>{
//     return character.eye_color === 'blue';
// })
// console.log(blueEyes);

// // 3. Is there at least one character taller than 200?
// const tallChar = characters.some((character) => {
//     return character.height > 200;
// })
// console.log(tallChar);

// // 4. Is there at least one character with mass less than 50?
// const tinyChar = characters.some((character) => {
//     return character.mass < 50;
// })
// console.log(tinyChar);

// ARRAY FILTER
// 1. Get Characters with mass greater than 100
// const greater100Mass = characters.filter( character => {
//     return character.mass > 100;
// })
// console.log(greater100Mass);

// // 2. Get Characters with height greater than 200

// const tallCharacters = characters.filter( character =>{
//     return character.height >151;
// })
// console.log(tallCharacters);
// // 3. Get all male characters

// const malePosers = characters.filter( character =>{
//     return character.gender = 'male';
// })
// console.log(malePosers);
// // 4. Get all female only real hero characters
// const realHeros = characters.filter( character =>{
//     return character.gender = 'female';
// })
// console.log(realHeros);



// // MAP ARRAY
// // 1. get array of all names
// const names = characters.map(character =>{
//     return character.name;
// })
// console.log(names);

// // 2. get array of all heghts

// const heights = characters.map(character =>{
//     return character.height;
// })
// console.log(heights);

// // 3. get array of all obj with just name and height
// const minibio = characters.map((character) => ({
//     name: character.name, 
//     height: character.height,
// }));
// console.log(minibio);


// // 4. get array of all first names
// const firstNames = characters.map((character) => character.name.split(" ")[0]);
// console.log(firstNames);


