console.table({ name: "Dharmil", age: 20 });
console.warn("This is a warning");
console.error("This is an Error");

// Variables
let name = "Dharmil";
var whatYouWannaBecomeInYourLife = "Programmer";
const gender = "Male";
const twitterHandle = "Dharmil20";

//Arithmetic
const firstFavNum = 2;
const secondFavNum = 10;

console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);

//Boolean
const isJsProgrammingLanguage = true;
const isJsHard = false;
const favNum = 20;
console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNum + undefined);

/*Falsy values
 -> false
 -> null
 -> undefined
 -> 0
 -> -0
 -> NaN
 -> '', "", ``, (empty quotes)
*/

//Comparison
console.log(firstFavNum > secondFavNum);
console.log(firstFavNum < secondFavNum);
console.log(firstFavNum >= secondFavNum);
console.log(firstFavNum <= secondFavNum);

console.log(firstFavNum === secondFavNum); //Strict Equality operator. (checks type + value)
console.log(firstFavNum !== secondFavNum); //Strict non-equality operator. (checks type + value)
console.log(firstFavNum == secondFavNum); //loose equality operator. (checks value)
console.log(firstFavNum != secondFavNum); //loose non-equality operator. (checks value)

// String Manipulations
const firstName = "Dharmil";
const lastName = "Trivedi";
const fullName = firstName + " " + lastName;
const upperCase = fullName.toUpperCase();
const message = `My favorite Actor Is ${fullName} & say something about you, Mr. ${upperCase}`;

console.log(message + " his best show is Silicon Valley");
console.log(firstName.split('').join("-"))

// Type Conversion
let amount = 100;
let money = "100";
let floatValue = "99.5";

// -> Convert String to number
// money = parseInt(money);
// money = +money;
// money = Number(money);
// console.log(typeof money)

// -> Convert number to string
// amount = amount.toString();
// amount = String(amount);
// console.log(typeof amount);

// -> Convert string to float
floatValue = parseFloat(floatValue);
console.log(floatValue);
console.log(typeof floatValue);
