/* In this project, I implemented some of the functionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays. */

let _ = {
  /* Clamp a given number within a given range */
  clamp(num, lower, upper) {
    let clampLower = Math.max(num, lower);
    let clampedValue = Math.min(clampLower, upper);
    return clampedValue;
  },
  /* Check if a given number is within a given range */
  inRange(num, start, end) {
      let startValue;
      let endValue;
      if (typeof end === 'undefined') {
        endValue = start;
        startValue = 0;
      } else if (start > end) {
        startValue = end;
        endValue = start;
      } else {
        startValue = start;
        endValue = end;
      }
      if (num >= startValue && num < endValue) {
        return true;
      } else return false;  
    },
    /* Split a given string into an array of words */
    words(string) {
      let words = [];
      let stringArr = [...string];
      let word = [];
      if (!string.includes(' ')) {
        return [string];
      }
      stringArr.forEach(char => {
        if (char !== ' ' && !/char$/.test(string) && char !== '.' && char !== ',' && char !== '!' && char !== '?') {
          word.push(char);
        } else {
        word = word.join('');
        words.push(word);
        word = [];
        }
      })
      word = word.join('');
      words.push(word);    
      return words;
  },
  /* Pad a string with even number of spaces to reach a required lenth.
  Any extra space is added to the end */
  pad(string, length) {
    if (string.length > length) {
      return string;
    }
    let difference = length - string.length;
    let stringToAdd = ' '.repeat(Math.floor((difference) / 2));
    let paddedString = stringToAdd + string + stringToAdd;
    if (difference % 2 === 0) { 
      return paddedString;
    } else return paddedString + ' ';
  }, 
  /* Check if the provided object contains a value at the specified key */
  has(object, key) {
    if (object[key]) {
        return true;
      } else return false;
  },

  /* Iterate through each key / value pair in the provided object and 
  swap the key and value */
  
  invert(object) {
    let invertedObj = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObj.originalValue = key;
    }
    return invertedObj;
  },

  /* Iterate through each key / value pair in the provided object and 
  call the predicate function with the value. Return the first key that 
  has a value that returns a truthy value from the predicate function or 
  else undefined */

  findKey(object, predicate) {
    for (key in object) {
      if (predicate(object.key)) {
        return key;
      }
      else return undefined;
    }
  },

  /* Take two arguments: an array and a number representing the number of items 
  to drop from the beginning of the array. Return a new array which contains 
  the elements from the original array, excluding the specified number of 
  elements from the beginning of the array. If the number of elements to drop 
  is unspecified, drop one element */

  drop(array, num = 1) {
    let newArr = [];
    for (let i = array.length-1; i > num-1; i--)  {
      newArr.push(array[i]);
    }
    return newArr;
  },

  /* Take two arguments: an array and a predicate function. The supplied 
  predicate function takes three arguments: the current element, the current 
  element index, and the whole array. Creates a new copy of the supplied array, 
  dropping elements from the beginning of the array until an element causes 
  the predicate function to return a falsy value */

  dropWhile(array, predicate) {
    const dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    let droppedArray = _.drop(array, dropNumber);
    return droppedArray;
  },

  /* Create an array of elements split into groups the length of size. 
  If array can't be split evenly, the final chunk will be the remaining elements.*/
  chunk(array, length = 1) {
    // if (typeof length === 'undefined') {
    //   length = 1;
    // }
    let newArr = [];
    for (let i = 0; i < array.length; i += length) {
      let chunk = array.slice(i, i+length);
    newArr.push(chunk);
    }
    return newArr;
  }
}

/* Test _.inRange() */
// console.log(_.inRange(2, 1, 3)); // returns true
// console.log(_.inRange(1, 2)); // returns true
// console.log(_.inRange(3, 4, 2)); // returns true
// console.log(_.inRange(1, 1, 3)); // returns true
 
/* Test _.words() */
// console.log(_.words('We would like to come to the office in the morning'));
 
/* Test _.pad() */
// console.log(_.pad('Howdi', 10));

/* Test _.has() */
// console.log(_.has({"key": "value"}, "notKey"));

/* Test _.invert() */
// console.log(_.invert({originalKey: "originalValue"})["originalValue"]);

/* Test _.drop() */
// console.log(_.drop(["hi", "okay", "yes", "bye"], 2)); // returns [ bye, yes ]

/* Test _.dropWhile() */
// console.log(_.dropWhile([1,2,3,4]));

/* Test _.chunk() */
console.log(_.chunk([1, 2, 3, 4, 5, 6], 4));
  // Do not write or modify code below this line.
  module.exports = _;