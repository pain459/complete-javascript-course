/*
// printing to console
let firstName = 'RRR';
console.log(firstName);

// Declaring numbers
let someNumber = 12345;
console.log(someNumber);

// working with primitive datatypes
let number1 = 12345;
let string1 = 'Orange Juice';
let decisionMaker = false;
let notDefinedValue;

console.log(number1);
console.log(string1);
console.log(decisionMaker);
console.log(notDefinedValue);

console.log(typeof number1);
console.log(typeof string1);
console.log(typeof decisionMaker);
console.log(typeof notDefinedValue);
*/

/*
// let, const & var
let age = 30;
age = 31;  // reassigning or mutating the variable.

// testing const
const birthYear = 1989;
// birthYear = 1990;  // we will receive TypeError here.

// const emptyVariable;  // will receive syntaxError.

var job = 'programmer';
job = 'programmer2';  // allows mutation. But avoid completely.
console.log(job)
*/

/*
// Basic operators
const currentYear = 2037;
const agePerson1 = currentYear - 1989;
const agePerson2 = currentYear - 1991;
// console.log(agePerson1);
// console.log(ageperson2);
console.log(agePerson1, agePerson2);

console.log(agePerson1 * 2, agePerson2 / 10, 2 ** 3);
// we can write descriptive comments for the above code.

const firstName = 'RRR';
const lastName = 'SSS';
console.log(firstName + ' ' + lastName);

// assignment operator
let x = 10 + 5;
x += 10;  // x = x + 10
x *= 4;
x++;
x--;
console.log(x);

// comparision operator
console.log(agePerson1 > agePerson2);  // true
// others are > < >= <=
console.log(agePerson2 >= 18);

const fullAge = agePerson1 >= 18;
console.log(fullAge);

console.log(2037 - agePerson1 > 2037 - agePerson2);
*/

/*
// Operartor Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
// coding chanllenge 1
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;
const weightMark2 = 95;
const heightMark2 = 1.88;
const weightJohn2 = 85;
const heightJohn2 = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;
const bmiMark2 = weightMark2 / heightMark2 ** 2;
const bmiJohn2 = weightJohn2 / heightJohn2 ** 2;

const markHigherBMI = bmiMark > bmiJohn;
const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log(bmiMark, bmiJohn, markHigherBMI);
console.log(bmiMark2, bmiJohn2, markHigherBMI2);
*/
/*
// Strings ard Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);


const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);

// traditional
console.log('line1 \n\
line2\n\
line3');

// with template strings
console.log(`line1
line2
line3`);
*/
/*
// Taking Decisions: if/else Statements
const age = 15;
// const isOldEnough = age >= 18;

if (age >= 19) {
    console.log('Sarah can start driving license.');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}

// example.
const birthYear = 1991;
let century
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
// coding challenge 2
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;
const weightMark2 = 95;
const heightMark2 = 1.88;
const weightJohn2 = 85;
const heightJohn2 = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;
const bmiMark2 = weightMark2 / heightMark2 ** 2;
const bmiJohn2 = weightJohn2 / heightJohn2 ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}

if (bmiMark2 > bmiJohn2) {
    console.log(`Mark2's BMI (${bmiMark2}) is higher than John2's (${bmiJohn2})!`)
} else {
    console.log(`John2's BMI (${bmiJohn2}) is higher than Mark2's (${bmiMark2})!`)
}
*/

// Type Converstion and Coercion
