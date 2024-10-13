// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

calcTempAplitude([3, 7, 4, 1, 9]);
const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);

console.log("=============problem2============");
const calcTempAplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

// calcTempAplitudeNew([3, 7, 4, 1, 9], [5, 8, 9, 20, 5]);
const amplitudeNew = calcTempAplitudeNew([3, 7, 4, 1, 9], [5, 8, 9, 20, 5]);
console.log(amplitudeNew);

*/

// debugging
// example 1
console.log("========debugg===========");
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // fix the bug
    // value: prompt("Degrees Celcius"),  bug
    // value: Number(prompt("Degrees Celcius")), // solution

    value: 10,
  };
  // find the bug
  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// identify the bug
console.log(measureKelvin());

// example 2
const calcTempAplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

// calcTempAplitudeBug([3, 7, 4, 1, 9], [5, 8, 9, 20, 5]);
const amplitudeBug = calcTempAplitudeBug([3, 5, 1], [9, 4, 5]);
// identify the bug
console.log(amplitudeBug);

console.log("======CODING CHALLENGE=======");

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForcast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days ... `;
  }

  console.log("..." + str);
};

printForcast(data1);
