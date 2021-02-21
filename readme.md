## Lodash Project

This is a part of the [codecademy.com] (https://www.codecademy.com) **Full-Stack Engineer path**.
In this project, we implemented some of the functionality from the widely-popular `lodash.js` library.

If you wanted to use this library, you can load it, using a Content Delivery Network (CDN) link, in the <head> of your project’s index.html file, like so:

<head>
  <script src='https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js'></script>
  <!-- Make sure that you load lodash before the file that uses it. -->
  <script src='file-that-uses-lodash.js'></script>
</head>

In this project, there are ten simplified methods from lodash.js and tests to check whether they work as intended.

The object "_" represents our library of methods.

1. Implement `_.clamp()`
Clamp number within the inclusive lower and upper bounds.

`.clamp()` takes three arguments: a number, a lower bound, and an upper bound.
`.clamp()` modifies the provided number to be within the two provided bounds.
If the provided number is smaller than the lower bound, it will return the lower bound as the final number. If the number is larger than the upper bound, it will return the upper bound as the final number. If the number is already within the two bounds, it will return the number as the final number.

To test that our `.clamp()` method works as expected, run `node test/clamp.js` in the terminal. 

2. Implement `_.inRange()`
Check if `n` is between `start` and up to, but not including, `end`. If `end` is not specified, it's set to `start` with `start` then set to `0`. If `start` is greater than end the params are swapped to support negative ranges.

`.inRange()` takes three arguments: a number, a start value, and an end value.
`.inRange()` checks to see if the provided number falls within the range specified by the start and end values. If the provided number is smaller than the start value, .inRange() will return `false`. If the provided number is larger than or equal to the end value, .inRange() will return `false`. If the provided number is within the start and end values, .inRange() will return `true`. If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value. If the provided start value is larger than the provided end value, the two values should be swapped.

To test that our `.inRange()` method works as expected, run `node test/in-range.js` in the terminal. 

3. Implement `_.words()`
Split string into an array of its words.

`.words()` takes one argument: a string.
`.words()` splits the string into an array of words.

To test that our `.words()` method works as expected, run `node test/words.js` in the terminal. 

4. Implement `_.pad()`
Pad string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.

`.pad()` takes two arguments: a string and a length.
`.pad()` adds spaces evenly to both sides of the string to make it reach the desired length. Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length.

To test that our `.pad()` method works as expected, run `node test/pad.js` in the terminal. 

5. Implement `_.has()`
Checks if path is a direct property of object.

`.has()` takes two arguments: an object and a key.
`.has()` checks to see if the provided object contains a value at the specified key.
`.has()` will return `true` if the object contains a value at the key and will return `false` if not.

To test that our `.has()` method works as expected, run `node test/has.js` in the terminal.

6. Implement `_.invert()`
Create an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.

`.invert()` takes one argument: an object
`.invert()` iterates through each key / value pair in the provided object and swaps the key and value.

To test that our `.invert()` method works as expected, run `node test/invert.js` in the terminal. 

7. Implement `_.findKey()`
Return the key of the first element predicate returns truthy.

`.findKey()` takes two arguments: an object and a predicate function — a function that returns a boolean value.
`.findKey()` iterates through each key / value pair in the provided object and calls the predicate function with the value.
`.findKey()` returns the first key that has a value that returns a truthy value from the predicate function.
`.findKey()` returns undefined if no values return truthy values from the predicate function.

To test that our `.findKey()` method works as expected, run `node test/find-key.js` in the terminal.

8. Implement `_.drop()`
Create a slice of array with n elements dropped from the beginning.

`.drop()` takes two arguments: an array and a number representing the number of items to drop from the beginning of the array.
`.drop()` returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array
If the number of elements to drop is unspecified, the method drops one element.

To test that our `.drop()` method works as expected, run `node test/drop.js` in the terminal. 

9. Implement `_.dropWhile()`
Create a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

`.dropWhile()` takes two arguments: an array and a predicate function.
The supplied predicate function takes three arguments: the current element, the current element index, and the whole array.
`.dropWhile()` creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value.

To test that our `.dropWhile()` method works as expected, run `node test/drop-while.js` in the terminal.

10. Implement `_.chunk()`
Create an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

`.chunk()` takes two arguments: an array and a size.
`.chunk()` breaks up the supplied array into arrays of the specified size.
`.chunk()` returns an array containing all of the previously-created array chunks in the order of the original array. If the array can’t be broken up evenly, the last chunk will be smaller than the specified size.
If no size is supplied to the method, the size is set to 1.

To test that our `.chunk()` method works as expected, run `node test/chunk.js` in your terminal.
