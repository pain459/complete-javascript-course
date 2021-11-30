// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// some sample problem from discord
const Arr = ['a', 'b', 'c', 4, 5, 5, 5, 1, 2, 3];
for (let i = 0; i < Arr.length; i++) {
  console.log(i, Arr[i]);
}
console.log('----------');
for (const num of Arr) {
  console.log(num, Arr[num]);
}
*/

// real world problem from the course.
// calculate the amplitude.
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem.
// - what is the temp amplitude? A) difference between highest and lowest temp.
// - how to compute the max and min temparatures?
// - What's a sensor error? And what do to?

// 2) Breaking up into sub-problems.
// - How to ignore errors?
// - Find max value in temperature array
// - Find min value in temperature array
// -- Subtract min from max (amplitude) and return it.

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

//calcTempAmplitude([3, 7, 4, 1, 8, 'error', 0, 'zero']);
// const amplitudeNew = calcTempAmplitudeNew(temperatures);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// PROBLEM 2
// Function should now receive 2 arrays of temparature.
// - with 2 arrays, should we implement functionality twise? No, lets merge 2 arrays.

// 2) breaking into sub problems
// - How to merge 2 arrays?

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
