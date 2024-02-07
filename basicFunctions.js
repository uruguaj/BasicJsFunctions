// custom type with return of true or false
// example use: let variable = Maybe
function MaybeLogic() {
  return Math.floor(Math.random() * 2) % 2 === 0 ? true : false;
}
export const Maybe = MaybeLogic();

// random number generator , default min: 1, max: 10
// first parameter is min example: RandomNumber(1,10) the lowest value will be 1. Example: 2
// second parameter is max example: RandomNumber(1,10) the highest value will be 10. Example: 7
// third parameter is precision example: RandomNumber(1,10,2) the result will be random number between 1 and 10 with precision to 2 decimal places places. Example: 4.96
export function RandomNumber(min = 1, max = 10, precision) {
  // validating precision
  if (arguments.length === 3 && typeof precision !== "number") {
    console.error("The precision must be a number");
    return;
  }

  // validating min and max
  if (
    (typeof min === "number" || typeof min === "bigint") &&
    (typeof max === "number" || typeof max === "bigint") &&
    max >= min
  ) {
    // if precision is provided, return a random number with specified precision
    if (precision !== undefined) {
      if (precision < 0) {
        console.error("The precision must be a non-negative number");
        return;
      }
      const factor = 10 ** precision;
      const scaledMin = min * factor;
      const scaledMax = max * factor;
      return (
        Math.floor(Math.random() * (scaledMax - scaledMin + 1) + scaledMin) /
        factor
      );
    } else {
      // return a random number within the specified range
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  } else {
    console.error(
      "The min and max values must be integers and max must not be lower than min"
    );
  }
}

// generating a random color
//example use: RandomColor()
export function RandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

//converts celsius to farenheit
// example use : CelsiusToFarenheit(30)
export function CelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// docs: https://uruguaj.com/script/wiki
