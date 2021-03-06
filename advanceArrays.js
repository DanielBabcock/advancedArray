let colors = ["red", "blue", "yellow", "orange", "teal"];

colors.forEach((item) => {
    let newColorString = "I like color" + item;
    console.log("newColorString", newColorString);
});

var i =0;
for (let i = 0; i < colors.length; i++){
    let newColorString = "I like this color: " + colors[i];
    console.log("newColorString2", newColorString);
}

console.log("i", i);

// let reversedColors = colors.map((color) =>{
//     return color.split("").reverse().join("");
// });

// console.log("reversedColors", reversedColors);

// same as above

let reversedColors = [];
for (let i = 0; i < colors.length; i++){
    reversedColors.push("reversedColors", reversedColors);  
}

let fourLetters = colors.filter(color => color.length === 4 );
    // return color.length === 4;
console.log("fourLetters", fourLetters);




let numbers = [51, 10, 62, 13, 9];
console.log("numbers", numbers);

let sum = numbers.reduce( (prev, curr) => {
    console.log("prev:", prev, "curr:", curr);
    return prev + curr;
});

console.log("sum", sum);



// *****************CHAINING METHODS EXERCISE*****************
/*instructions
Sort the numbers in DESCENDING order (10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then substract 1.
Then output (console) the sum of all the resulting numbers.
*/

let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let chainResult = integers

    

.sort((a,b) => {return a - b})
.filter((num) => {return num < 19})
.map((num) => {return (num * 1.5) - 1})
.reduce((previous, current) => {return previous + current});  

console.log("chainResult", chainResult);    