'use strict';
/*
// strict mode examples
let hasDriversLicense = false;
const passTest = true;

if (passTest == true) hasDriversLicense = true;
if (hasDriversLicense == true) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 12;
*/

/*
// Functions
function logger() {
    console.log('My name is Jonas!');
}

logger();  // calling/running/invoking a function
logger();
logger();

// one more example.
function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Assignment on functions
function describeCountry(country, population, capicalCity) {
    const output = `${country} has ${population} people and its capital city is ${capicalCity}`;
    return output;
}

const finlandCountry = describeCountry('Finland', '6 million', 'Helsinki');
console.log(finlandCountry);
const indiaCountry = describeCountry('India', '130 million', 'New Delhi');
console.log(indiaCountry);
const pakistanCountry = describeCountry('Pakistan', '70 million', 'Karachi');
console.log(pakistanCountry);
*/

/*
// Functions Declarations vs. Expressions

// sample function declaration
//const age1 = calcAge1(1989);  // Function declarations can be called before they are defined.
function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    //return age;
    return 2037 - birthYear;  // easy way to return the value of the expression.
}

const age1 = calcAge1(1989);
console.log(age1);

// sample function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1989);
console.log(age2);

// assignment on function declarations vs expressions.
const worldPopulation = 7900; // actually million. But just saving some time.
function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}
const chinaPopulation = percentageOfWorld1(1441);
console.log(chinaPopulation);
const indiaPopulation = percentageOfWorld1(1300);
console.log(indiaPopulation);
const pakistanPopulation = percentageOfWorld1(1000);
console.log(pakistanPopulation);

const percentageOfWorld2 = function (population) {
    return (population / worldPopulation) * 100;
}

console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(1300));
console.log(percentageOfWorld2(1000));
*/

/*
// Arrow Functions
// sample function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// sample arrow function with 1 parameter.
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// sample arrrow function with 1 parameter but multiple tasks.
// return statement is mandatory to send the results.
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

// sample arrow function with multiple parameters.
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement2(1991, 'Steve'));
console.log(yearsUntilRetirement2(1989, 'RRR'));

// Arrow functions assignment
const worldPopulation = 7900;
const percentageOfWorld3 = population => {
    return `${(population / worldPopulation) * 100}`
}
const chinePopulationPercent = percentageOfWorld3(1441);
console.log(chinePopulationPercent);
*/

/*
// Functions calling other functions.

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    //console.log(apples, oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// Assignment on functions calling other functions.
// Using Arrow functions for this example.
const worldPopulation = 7900;
const percentageOfWorld4 = population => (population / worldPopulation) * 100;
const describePopulation = (population, countryName) => {
    const totalPercentage = percentageOfWorld4(population);
    return `${countryName} has ${population} million people, which is about ${percentageOfWorld4(population)}% of the world.`;
}

console.log(describePopulation(1441, 'China'));

// Using function declarations for the same example.

//const worldPopulation = 7900;
function percentageOfWorld5(population) {
    return (population / worldPopulation) * 100;
}

function describePopulation1(population, country) {
    const totalPercentage1 = percentageOfWorld5(population);
    const finalResult = `${country} has ${population} million people, which is about ${totalPercentage1}% of the world.`;
    return finalResult;
}

console.log(describePopulation1(1441, 'China'));
*/

// Reviewing functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
    //return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement2(1991, 'RRR'));
console.log(yearsUntilRetirement2(1950, 'Mike'));
