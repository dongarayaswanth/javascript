In JavaScript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, even mixed types.

To create an array, add elements between square brackets [ ]. To read from the array, put the index in square brackets [ ] after the identifier. The indices of an array start at zero.

For example:
```js
const numbers = [1, 'two', 3, 'four'];
numbers[2]; // Output: 3

```
To retrieve the number of elements that are in an array, use the length property:
```
const numbers = [1, 'two', 3, 'four'];
numbers.length; // => 4
```
To change an element in the array, you assign a value at the index:
```
const numbers = [1, 'two', 3, 'four'];
numbers[0] = 'one';
numbers;
```
# Methods

Some of the methods that are available on every Array object can be used to add or remove from the array. Here are a few to consider when working on this exercise:
## push

A value can be added to the end of an array by using .push(value). The method returns the new length of the array.
```
const numbers = [1, 'two', 3, 'four'];
numbers.push(5); // => 5
numbers;
// => [1, 'two', 3, 'four', 5]
```
## pop

The last value can be removed from an array by using .pop() The method returns the removed value. The length of the array will be decreased because of this change.
```
const numbers = [1, 'two', 3, 'four'];
numbers.pop(); // => four
numbers;
// => [1, 'two', 3]
```
## shift

The first value can be removed from an array by using .shift() The method returns the removed value. The length of the array will be decreased because of this change.
```
const numbers = [1, 'two', 3, 'four'];
numbers.shift(); // => 1
numbers;
// => ['two', 3, 'four']
```
## unshift

A value can be added to the beginning of an array by using .unshift(value). The method returns the new length of the array.
```
const numbers = [1, 'two', 3, 'four'];
numbers.unshift('one'); // => 5
numbers;
// => ['one', 1, 'two', 3, 'four']
```
## splice

A value at a specific index can be removed from an array by using .splice(index, 1). The method returns the removed element(s).
```
const numbers = [1, 'two', 3, 'four'];
numbers.splice(2, 1, 'one'); // => [3]
numbers;
// => [1, 'two', 'one', 'four']
```




