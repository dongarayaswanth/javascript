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
# for Loop
The for loop is one of the most commonly used statements to repeatedly execute some logic. In JavaScript, it consists of the for keyword, a header wrapped in round brackets and a code block that contains the body of the loop wrapped in curly brackets.
```
for (initialization; condition; step) {
  // code that is executed repeatedly as long as the condition is true
}
```
The initialization usually sets up a counter variable, the condition checks whether the loop should be continued or stopped and the step increments the counter at the end of each repetition. The individual parts of the header are separated by semicolons.
```
const list = ['a', 'b', 'c'];
for (let i = 0; i < list.length; i++) {
  // code that should be executed for each item list[i]
}
```
Defining the step is often done using JavaScript's increment or decrement operator as shown in the example above. These operators modify a variable in place. ++ adds one to a number, -- subtracts one from a number.
```
let i = 3;
i++;
// i is now 4

let j = 0;
j--;
// j is now -1
```



