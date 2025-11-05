# Array
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
# While Loops

With a while loop, you can execute code repeatably as long as a certain condition is fulfilled. It is written with the while keyword followed by a condition wrapped in round brackets and a code block that contains the body of the loop wrapped in curly brackets.
```
while (condition) {
  // code that is executed repeatedly as long as the condition is true
}
```
JavaScript also has a do-while loop. Here the condition is checked after the loop body was executed. This is useful when the condition depends on evaluations done in the body.
```
do {
  // The code here will always be executed once and then
  // repeatedly while the condition is true.
} while (condition);
```
Inside a loop body, you can use the break keyword to stop the execution of the loop entirely. In contrast to this, the keyword continue only stops the execution of the current iteration and continues with the next one. With continue you can often avoid wrapping big parts of the loop body in an if-statement.
```
let i = 0;

while (i < 100) {
  i = i + 2;

  if (i % 3 === 0) {
    continue;
  }

  // The code here will only be executed when i was not divisible
  // by 3 in the check above.
}
```
# Switch Statements

Besides the if-statement, JavaScript also has a switch-statement to conditionally execute logic. It is used when a single variable needs to be compared to multiple variants. The comparison is done by checking for strict equality (===), see concept comparison. For some variable x, the switch statement in JavaScript has the following syntax.
```
switch (x) {
  case option1:
    // code that is executed when "x === option1" is true
    break;
  case option2:
    // code that is executed when "x === option2" is true
    break;
  default:
    // code that is executed when x does not equal any of the options
}
```
The default case is optional and used in case you want to execute some code if none of the other options match the variable.

The break statements above are needed because by default all cases are "fallthrough" in JavaScript. That means without any break statement all the code in the cases below the first matching option would be executed even though x did not match those options. This "fallthrough by default" behavior is a common pitfall when using switch in JavaScript. Inside a function, return can also be used instead of break to avoid this problem.

# Object
Besides primitive data types like number and string, there is another important data type in JavaScript called object. Objects are collections of key-value pairs. As such, they can be used in the same way as what are often referred to as maps or dictionaries in other languages.

In other languages, all values in a map often need to have the same data type. In JavaScript, only the type of the key is restricted: it has to be a string. The values inside one object can have different types. They can be primitive types like numbers but also arrays, other objects or even functions. This makes objects very versatile so that they are also key entities for object-oriented programming (OOP) in JavaScript.

In the following, we will focus on objects as collections or maps. Other use cases of objects will be covered in other concepts, see e.g., Classes.
## Creating an Object

You create an object using curly brackets. You can also directly include some entries. For that, state the key first, followed by a colon and the value.
```
const emptyObject = {};

const obj = {
  favoriteNumber: 42,
  greeting: 'Hello World',
  useGreeting: true,
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
  fruits: ['melon', 'papaya'],
  addNumbers: function (a, b) {
    return a + b;
  },
};
```
The trailing comma after the last entry is optional in JavaScript.

You might wonder why the keys are not wrapped in quotation marks although they are supposed to be strings. This is a short-hand notation. If the key follows the naming rules for a JavaScript identifier, you can omit the quotation marks. For keys with special characters in the name, you need to use the usual string notation.
```
const obj = {
  '1keyStartsWithNumber': '...',
  'key/with/slashes': '...',
  'key-with-dashes': '...',
  'key with spaces': '...',
  '#&()[]{}èä樹keyWithSpecialChars': '...',
};
```
## Retrieving a Value

There are two ways to retrieve the value for a given key, dot notation and bracket notation.
```
const obj = { greeting: 'hello world' };

obj.greeting;
// => hello world

obj['greeting'];
// => hello world

// Bracket notation also works with variables.
const key = 'greeting';
obj[key];
// => hello world
```
Using the dot notation as a shorthand has the same restriction as omitting the quotation marks. It only works if the key follows the identifier naming rules.
## Adding or Changing a Value

You can add or change a value using the assignment operator =. Again, there are dot and bracket notations available.
```
const obj = { greeting: 'hello world' };

obj.greeting = 'Hi there!';
obj['greeting'] = 'Welcome.';

obj.newKey1 = 'new value 1';
obj['new key 2'] = 'new value 2';

const key = 'new key 3';
obj[key] = 'new value 3'
```
## Deleting an Entry

You can delete a key-value pair from an object using the delete keyword.
```
const obj = {
  key1: 'value1',
  key2: 'value2',
};

delete obj.key1;
delete obj['key2'];
```
## Checking Whether a Key Exists

You can check whether a certain key exists in an object with the hasOwnProperty method.
```
const obj = { greeting: 'hello world' };

obj.hasOwnProperty('greeting');
// => true

obj.hasOwnProperty('age');
// => false
```

## Looping Through an Object

There is a special for...in loop to iterate over all keys of an object.
```
const obj = {
  name: 'Ali',
  age: 65,
};

for (let key in obj) {
  console.log(key, obj[key]);
}
// name Ali
// age 65
```
To avoid subtle errors, you should always assume the for...in loop visits the keys in an arbitrary order. Also, be aware that for...in includes inherited keys in its iteration.
# Null and Undefined
In contrast to many other languages, there are two different entities in JavaScript that represent the absence of a (meaningful) value. There is null and undefined.
## Null

The primitive value null is used as an intentional "empty value" for variables of any type.
```
let name = null;
// name is intentionally set to "empty" because it is not
// available
```
You can check whether a variable is null by using the strict equality operator ===.
```
let name = null;

name === null;
// => true
```
## Undefined

  A variable that has not been assigned a value is of type undefined.1

That means while null represents an empty value (but still a value), undefined represents the total absence of a value. 🤯

undefined appears in different contexts.

  If a variable is declared without a value (initialization), it is undefined.
  If you try to access a value for a non-existing key in an object, you get undefined.
  If a function does not return a value, the result is undefined.
  If an argument is not passed to a function, it is undefined, unless that argument has a default value.
```
let name;
console.log(name);
// => undefined
```

You can check whether a variable is undefined using the strict equality operator ===.
```
let name;

name === undefined;
// => true
```
## Optional Chaining

If you try to retrieve a nested value in an object but the parent key does not exist, JavaScript will throw an error. To easily avoid this, optional chaining was added to the language specification in 2020. With the optional chaining operator ?. you can ensure that JavaScript only tries to access the nested key if the parent was not null or undefined. Otherwise, undefined is returned.
```
const obj = {
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
};

obj.address.zipCode;
// => undefined

obj.residence.street;
// => TypeError: Cannot read property 'street' of undefined

obj.residence?.street;
// => undefined
```
Nullish Coalescing

There are situations where you want to apply a default value in case a variable is null or undefined (but only then). To address this, the nullish coalescing operator ?? was introduced in 2020. It returns the right-hand side operand only when the left-hand side operand is null or undefined. Otherwise, the left-hand side operand is returned.
```
let amount = null;
amount = amount ?? 1;
// => 1

amount = 0;
amount = amount ?? 1;
// => 0
```

# Type Conversion
Introduction

In JavaScript, values may be of different types. Changing the type of a variable can be done by explicit type conversion. Besides that, JavaScript also performs type coercion (implicit type conversion) when the context requires it.
## Type Conversion

JavaScript does not have a construct to cast into a (different) type like many other languages but some built-in helpers can be used instead. Most notably, Boolean, Number and String can be used as functions to convert a value to the respective type.
Converting to a Boolean (Truthy/Falsy Values)

With Boolean(value) you can convert any value to a boolean. There is a fixed set of values, so called falsy values, that convert to false. Most importantly, false, 0, empty string, null, undefined and NaN are falsy.

For all other values, Boolean returns true. These values are called truthy.
```
Boolean(-1);
// => true

Boolean(0);
// => false

Boolean(' ');
// => true

Boolean('');
// => false
```
Note that because of the described rules, '0', 'false', [] and {} are truthy in JavaScript.
Converting to a Number

Number(value) can be used to convert a value to a number. Whitespaces at the beginning and the end of a string are ignored and an empty string is converted to 0. If you try to convert a non-primitive value or a string that does not represent a number, the result is NaN (Not-A-Number).
```
Number('  -12.34  ');
// => -12.34

Number('1,2');
// => NaN

Number('');
// => 0

Number({ num: 123 });
// => NaN
```
Converting to a String

With String(value) you can convert a value to a string. The result is what you would expect it to be for primitive values.
```
String(12.34);
// => '12.34'

String(false);
// => 'false'

String(null);
// => 'null'

String(undefined);
// => 'undefined'
```
For arrays, the String function will apply the string conversion for each element and join the results with a comma. You can also apply the join method yourself, e.g. to customize the separator. Note that in these cases null and undefined will be converted to an empty string.
```
String([42, null, true, 'abc']);
// => '42,,true,abc'
```
For objects, by default String returns an unhelpful text.
```
String({ key: 'value' });
// => '[object Object]'
```
Type Coercion

In certain contexts, JavaScript will automatically convert a value to another data type before it evaluates some statement. This implicit conversion is called type coercion.
Boolean Context

When a non-boolean value is used in a boolean context, JavaScript will apply the same rules as the Boolean function to implicitly convert the value.

Coercion to boolean commonly occurs for

  the condition of an if statement
  the first operand of the ternary operator ?
  the operand of the logical NOT operator !
  the operands of the logical AND && and OR || operators (the result of the expression is one of the operands, not necessarily a boolean)
```
const num = 0;
if (num) {
  // this block is NOT executed because 0 is falsy
}
```
String Context

If the addition operator + is used for primitive values and one operand is a string, the other one will be coerced into a string as well. The conversion logic is the same as when using the String function.Afterwards, the two strings are concatenated.
```
let name;
'hello ' + name;
// => 'hello undefined'
```
Numeric Context

Many operators coerce the operands into numbers (if necessary) according to the logic of the Number function explained above.

  Arithmetic operators: + (if no string is involved), -, *, /, %, **
  Unary plus and unary negation operators: +, -
  Relational operators (for non-string operands): >, >=, <, <=
  Bitwise operators: |, &, ^, ~

Refer to the MDN list of operators for more details about any of those operators.

To avoid mistakes, it is good practice to always call Number explicitly before applying those operators.

# Function
A function is a block of organized, reusable code that is used to perform some action. There are multiple ways to define functions in JavaScript. Here we will look at function declarations and function expressions. Other possibilities like arrow functions will be covered in other concepts.
Function Declaration

The standard way of defining a function in JavaScript is a function declaration, also called function definition or function statement.

It consists of the function keyword, the name of the function, and a comma-separated list of parameters in round brackets. This is followed by the function body (collection of statements that defines what a function does) wrapped in curly brackets.
```
function someName(param1, param2, param3) {
  // ...
}
```

In JavaScript, a function is invoked (called) by stating the function name followed by parentheses that contain the arguments.

someName(arg1, arg2, arg3);

Parameters

When working with parameters inside the function body, be aware of possible side effects.

    Values of primitive data types are immutable. The original value is never affected by what happens to the argument in the function body.
    For all other values (objects, arrays, functions), a reassignment will not affect the original value. However, if you modify such an argument (e.g. add a key to an object), that also modifies the original value that was passed in.

By default, all parameters defined in the function declaration are optional in JavaScript. If you provide fewer arguments than there are parameters, the missing arguments will be undefined inside the function, see Null and Undefined. In many cases, it makes sense to assign a more appropriate default value than undefined. This can be done by specifying default parameters directly in the function definition.
```
function someName(param1 = defaultValue1, param2 = defaultValue2) {
  // ...
}
```

Return Statement

A return statement ends the function execution and specifies a value to be returned to the function caller. A function can have multiple return statements.
```
function checkNumber(num) {
  if (num === 0) {
    return 'You passed 0, please provide another number.';
  }

  return 'Thanks for passing such a nice number.';
}

The return value of a function can be stored in a variable.

function sum(x, y) {
  return x + y;
}

const total = sum(5, 10);
// => 15

The result of a function that returns no value or does not have a return statement is undefined. There are no implicit returns in JavaScript.

function nakedReturn(a) {
  a * 2;
  return;
}

nakedReturn(1);
// => undefined

function noReturn(a) {
  a * 2;
}

noReturn(1);
// => undefined
```
In JavaScript, you can only return exactly one value. If you want to pass more information, you need to combine it into one entity first, usually into an object, or an array.
```
function divide(a, b) {
  return {
    quotient: Math.floor(a / b),
    remainder: a % b,
  };
}
```
Function Expression

A function declaration is a standalone statement. But sometimes it is helpful to define a function as part of another expression, e.g., in an assignment, as a function parameter (callback) or as value in an object. This can be done with a function expression. It has the same syntax as a function declaration, only that the function name can be omitted to create an anonymous function.
```
const someFunction = function (param) {
  // ...
};

someOtherFunction(function (param) {
  // ...
});

const obj = {
  someFunction: function (param) {
    // ...
  },
};
```
## Array destructuring
JavaScript's array destructuring syntax is a concise way to extract values from an array and assign them to distinct variables.

In this example, each value in the numberOfMoons array is assigned to its corresponding planet:
```
const numberOfMoons = [0, 2, 14];
const [venus, mars, neptune] = numberOfMoons;

neptune;
// => 14
```
In short:

The syntax allows for naming positioned elements in an array, as well as swapping variables using re-assignment.
Destructuring syntax is available inside function parameters, and is available on any iterable.
Leaving a position unnamed (by not writing any variable name) silently ignores that position.
## Object destructuring
In JavaScript, there is also destructuring syntax to extract properties from an object and assign them to distinct variables.

In this example, weather symbols are extracted from the object weather:
```
const weather = {
  sun: '☀️',
  sun_behind_small_cloud: '🌤️',
  sun_behind_cloud: '⛅',
  sun_behind_large_cloud: '🌥️',
  sun_behind_rain_cloud: '🌦️',
  cloud: '☁️',
  cloud_with_rain: '🌧️',
  cloud_with_snow: '🌨️',
  cloud_with_lightning: '🌩️',
  cloud_with_lightning_and_rain: '⛈️',
};

const { sun, cloud, cloud_with_lightning: thunder } = weather;

sun;
// => '☀️'

cloud;
// => '☁️'

thunder;
// => '🌩️'
```
In short:

The syntax allows for both extracting properties as well as extracting and renaming them.
Destructuring syntax is available inside function parameters.

JavaScript has a built-in ... operator that makes it easier to work with indefinite numbers of elements. Depending on the context, it's called either a rest operator or spread operator.

## Rest operator
Rest elements
When ... appears on the left-hand side of an assignment, those three dots are known as the rest operator. The three dots together with a variable name is called a rest element. It collects zero or more values, and stores them into a single array.
```
const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];
a;
// => 0
b;
// => 1
everythingElse;
// => [1, 2, 3, 5, 8]
```
Note that in JavaScript, unlike some other languages, a rest element cannot have a trailing comma. It must be the last element in a destructuring assignment. The example below throws a SyntaxError:
```
const [...items, last] = [2, 4, 8, 16]
```
Rest properties
Similarly to arrays, the rest operator can also be used to collect one or more object properties and store them in a single object.
```
const { street, ...address } = {
  street: 'Platz der Republik 1',
  postalCode: '11011',
  city: 'Berlin',
};
street;
// => 'Platz der Republik 1'
address;
// => {postalCode: '11011', city: 'Berlin'}
```
## Rest parameters
When ... appears in a function definition next to its last argument, that parameter is called a rest parameter. It allows the function to accept an indefinite number of arguments as an array.
```
function concat(...strings) {
  return strings.join(' ');
}
concat('one');
// => 'one'
concat('one', 'two', 'three');
// => 'one two three'
```
## Spread
Spread elements
When ... appears on the right-hand side of an assignment, it's known as the spread operator. It expands an array into a list of elements. Unlike the rest element, it can appear anywhere in an array literal expression, and there can be more than one.
```
const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];
oneToTen;
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const woow = ['A', ...oneToFive, 'B', 'C', 'D', 'E', ...oneToFive, 42];
woow;
// =>  ["A", 1, 2, 3, 4, 5, "B", "C", "D", "E", 1, 2, 3, 4, 5, 42]
```
Spread properties
Similarly to arrays, the spread operator can also be used to copy properties from one object to another.
```
let address = {
  postalCode: '11011',
  city: 'Berlin',
};
address = { ...address, country: 'Germany' };
// => {
//   postalCode: '11011',
//   city: 'Berlin',
//   country: 'Germany',
// }
```




