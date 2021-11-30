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

/*
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
*/

/*
// coding Challenge # 1
console.log('Welcome to Dolphins vs Koalas gymnastic match!');
const calcAverage = (r1, r2, r3) => {
    const averageScore = (r1 + r2 + r3) / 3;
    return averageScore;
}

// const avgDolphins = calcAverage(44, 23, 71);
const avgDolphins = calcAverage(85, 54, 41);

// const avgKoalas = calcAverage(65, 54, 49);
const avgKoalas = calcAverage(23, 34, 27);


// console.log(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win ${avgKoalas} vs.${avgDolphins}`;
    } else {
        return `No team wins!`
    }
    // return `${avgDolphins} and ${avgKoalas}`;
}

console.log(checkWinner(avgDolphins, avgKoalas));
*/

/*
// Introduction to Arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
// one more way
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);  // to access last element.
friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
// const jonas = ['Jonas', 'lastname', 2037 - 1991, 'M'];
// const jonas = [firstName, 'lastname', 2037 - 1991, 'M'];
const jonas = [firstName, 'lastname', 2037 - 1991, 'M', friends, 'teacher'];

console.log(jonas);
console.log(jonas[4][1]);
console.log(jonas.length);

// exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
//const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years));
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1);
console.log(age2);
console.log(age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);
*/

/*
// Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
// console.log(friends);

// storing the push function output and displaying the same.
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// remove elements
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
*/

/*
// Coding challenge 2
const calcTip = totalBill => {
    if (totalBill >= 50 && totalBill <= 300) {
        return .15 * totalBill;
    } else {
        return .2 * totalBill;
    }
}

console.log(calcTip(100));

const bills = new Array(125, 555, 44);
console.log(bills);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
console.log(tips);
const total = new Array();
total.push(bills[0] + tips[0]);
total.push(bills[1] + tips[1]);
total.push(bills[2] + tips[2]);
console.log(total);
*/

/*
// Introduction to Objects

// traditional array without reference.
const jonasArray = [
    'jonas',
    'jonas1',
    2037 - 1991,
    'teacher',
    ['Mike', 'Peter', 'Steven']
];

// Objects creates k:v pairs like in Python.
const jonas = {
    firstName: 'Jonas',
    lastName: 'Jonas1',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Mike', 'Peter', 'Steven']
}

console.log(jonas['firstName']);

*/

/*
// Dot vs Bracker Notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Jonas1',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Mike', 'Peter', 'Steven']
}

console.log(jonas);

console.log(jonas.lastName);  // dot notation
// . is an operator
console.log(jonas['firstName']);
const nameKey = 'Name';
console.log(jonas[nameKey]);
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, job, friends');
// console.log(jonas.interestedIn);  // this doesn't work

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, job, friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonass';
console.log(jonas);

// challenge
// Jonas has 3 friends and his best friend is called Michael.
console.log(`Jonas has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);
*/
/*
// assignment: introduction to objects

const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    language: 'multiple',
    population: 130,
    neighbours: ['China', 'Pakistan', 'Nepal', 'Bhutan', 'SriLanka']
}

// const queryCountryDetails = prompt('details for country India. query now.');

// if (myCountry[queryCountryDetails]) {
//     console.log(myCountry[queryCountryDetails]);
// } else {
//     console.log('Incorrect details queried!');
// }

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} language speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);
*/

/*
// Object methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Jonas1',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Mike', 'Peter', 'Steven'],
    hasDriversLicense: false,
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        // console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return (`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? 'has' : "don't has"} a driver's license.`);
    }
};

console.log(jonas.calcAge());  // we should calculate the age atleast once.
console.log(jonas.age);
console.log(jonas.getSummary());

*/
/*
// assignment
const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    language: 'multiple',
    population: 130,
    neighbours: ['China', 'Pakistan', 'Nepal', 'Bhutan', 'SriLanka'],
    describe: function () {
        return (
            `${this.country} has ${this.population} million ${this.language} languages-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
        );
    }
}

console.log(myCountry.describe());
*/
/*
// coding challenge 3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

const mark_win = (`${mark.firstName + ' ' + mark.lastName}'s BMI (${mark.calcBMI()}) is greater than ${john.firstName + ' ' + john.lastName}'s (${john.calcBMI()})!`);
const john_win = (`${john.firstName + ' ' + john.lastName}'s BMI (${john.calcBMI()}) is greater than ${mark.firstName + ' ' + mark.lastName}'s (${mark.calcBMI()})!`);


// const result = mark.calcBMI() > john.calcBMI() ? 'result1' : 'result2'
const result = mark.calcBMI() > john.calcBMI() ? console.log(mark_win) : console.log(john_win);

// console.log(result);
*/

/*
// Iteration: The for loop.
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Print this... ${rep}`);
}

// Assignment
for (let rep = 1; rep <= 50; rep += 2) {
    console.log(`Voter number ${rep} is currently voting`);
}
*/

/*
// Looping Arrays, Breaking and Continuing

const jonasArray = [
    'Jonas',
    'Jonas1',
    2037 - 1991,
    'teacher',
    ['Mike', 'Peter', 'Steven']
];

const types = [];
for (let i = 0; i <= jonasArray.length - 1; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    // types[i] = typeof jonasArray[i]
    types.push(typeof jonasArray[i]);  // One more way.
}
console.log(types);

const exArray = [1, 2, 3, 4, 5];
for (let i = 0; i <= exArray.length - 1; i++) {
    console.log(i, exArray[i], typeof exArray[i]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i <= years.length - 1; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break are 2 important statements.
console.log('--- ONLY STRINGS ---');
for (let i = 0; i <= jonasArray.length - 1; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i <= jonasArray.length - 1; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

/*
// Assignment
const worldPopulation = 7900; // actually million. But just saving some time.
const populations = [1441, 1300, 1000]
const percentages = [];
const percentageOfWorld = function (population) {
    return (population / worldPopulation) * 100;
}
for (let i = 0; i <= populations.length - 1; i++) {
    percentages.push(percentageOfWorld(populations[i]));
}
console.log(percentages);
*/

/*
// Looping Backwards and Loops in Loops

const jonasArray = [
    'Jonas',
    'Jonas1',
    2037 - 1991,
    'teacher',
    ['Mike', 'Peter', 'Steven']
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i], i);
}

// loop inside of a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`---- You can do it ${rep}`);
    }
}
*/
/*
// Asssignment
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
    'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour:${listOfNeighbours[i][j]}`);
    }
}
*/
/*
// while loop

// sample for loop code.
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Print this... ${rep}`);
}

// While loop
let rep = 1;
while (rep <= 10) {
    console.log(`print this...${rep}`);
    rep++;
}

// rolling dice simulation.
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

*/


// coding challenge 3

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        return .15 * bill;
    } else {
        return .2 * bill;
    }
}

console.log(calcTip(100));

for (let i = 0; i <= bills.length - 1; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);
// [ 26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8 ]



const calcAverage = arr => {
    let billTotal = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        billTotal += arr[i];
    }
    console.log(`Average is ${billTotal / arr.length}`);
}

calcAverage(totals);
calcAverage(tips);
calcAverage(bills);