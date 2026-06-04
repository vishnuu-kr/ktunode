---
title: "Arrays"
subject: "WEB PROGRAMMING"
module: "Module 3: JavaScript runtime environment : Node.js "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0e0"
status: "completed"
scrapedAt: "2026-05-20T17:13:08.061Z"
---
# WEB PROGRAMMING - Module 3: JavaScript Runtime Environment: Node.js

## Topic: Arrays

This module focuses on the practical application of JavaScript within the Node.js runtime environment. Understanding how to efficiently manage and manipulate data is crucial, and arrays are a fundamental data structure for this purpose.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the fundamental nature of arrays in JavaScript.**
*   **Declare and initialize arrays in Node.js.**
*   **Access and modify elements within an array using various methods.**
*   **Utilize built-in array methods for common operations like adding, removing, searching, and transforming elements.**
*   **Iterate over array elements using different loop constructs.**
*   **Understand concepts like array mutability and common pitfalls.**

---

### 1. Understanding the Fundamental Nature of Arrays

#### Key Concepts & Definitions:

*   **Array:** An ordered collection of values. These values can be of any data type (numbers, strings, booleans, objects, other arrays, functions, etc.).
*   **Elements:** The individual values stored within an array.
*   **Index:** The numerical position of an element within an array, starting from 0.

#### Key Points:

*   Arrays in JavaScript are **zero-indexed**, meaning the first element is at index 0, the second at index 1, and so on.
*   JavaScript arrays are **dynamic**, meaning they can grow or shrink in size as needed.
*   Arrays are **mutable**, meaning their contents can be changed after creation.
*   JavaScript arrays are **special objects** with numerical keys and a `length` property.

---

### 2. Declaring and Initializing Arrays in Node.js

#### Key Concepts & Definitions:

*   **Array Literal:** The most common way to create an array by enclosing comma-separated elements within square brackets `[]`.

#### Examples:

```javascript
// Declaring an empty array
let emptyArray = [];
console.log(emptyArray); // Output: []

// Declaring an array of numbers
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [ 1, 2, 3, 4, 5 ]

// Declaring an array of strings
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]

// Declaring an array with mixed data types
let mixedArray = [10, "hello", true, { name: "Node.js" }, [1, 2]];
console.log(mixedArray);
// Output: [ 10, 'hello', true, { name: 'Node.js' }, [ 1, 2 ] ]

// Using the Array constructor (less common for literals)
let anotherNumbers = new Array(10, 20, 30);
console.log(anotherNumbers); // Output: [ 10, 20, 30 ]

// If only one argument is passed to new Array(), it creates an array of that size
let arrayWithSize = new Array(5); // Creates an array with 5 empty slots
console.log(arrayWithSize); // Output: [ <5 empty items> ]
```

---

### 3. Accessing and Modifying Array Elements

#### Key Concepts & Definitions:

*   **Element Access:** Retrieving an element from an array using its index.
*   **Element Modification:** Changing the value of an element at a specific index.

#### Examples:

```javascript
let colors = ["red", "green", "blue", "yellow"];

// Accessing elements
console.log(colors[0]); // Output: red (first element)
console.log(colors[2]); // Output: blue (third element)
console.log(colors[colors.length - 1]); // Output: yellow (last element)

// Attempting to access an index out of bounds
console.log(colors[5]); // Output: undefined

// Modifying elements
colors[1] = "purple";
console.log(colors); // Output: [ 'red', 'purple', 'blue', 'yellow' ]

// Adding a new element by assigning to a higher index (not recommended for sequential addition)
colors[4] = "orange";
console.log(colors); // Output: [ 'red', 'purple', 'blue', 'yellow', 'orange' ]
console.log(colors.length); // Output: 5
```

#### Important Points to Remember:

*   Accessing an index that does not exist in the array will return `undefined`.
*   Modifying an element at an existing index replaces its current value.
*   Assigning to an index beyond the current `length` will extend the array, creating "empty" slots if there are gaps.

---

### 4. Built-in Array Methods

JavaScript provides a rich set of built-in methods for array manipulation. Here are some of the most common and useful ones:

#### 4.1. Adding Elements

*   **`push()`:** Adds one or more elements to the **end** of an array and returns the new length of the array.
*   **`unshift()`:** Adds one or more elements to the **beginning** of an array and returns the new length of the array.

##### Examples:

```javascript
let animals = ["dog", "cat"];

animals.push("elephant");
console.log(animals); // Output: [ 'dog', 'cat', 'elephant' ]

let newLength = animals.push("lion", "tiger");
console.log(animals); // Output: [ 'dog', 'cat', 'elephant', 'lion', 'tiger' ]
console.log(newLength); // Output: 5

animals.unshift("bird");
console.log(animals); // Output: [ 'bird', 'dog', 'cat', 'elephant', 'lion', 'tiger' ]

let newLengthUnshift = animals.unshift("fish", "snake");
console.log(animals); // Output: [ 'fish', 'snake', 'bird', 'dog', 'cat', 'elephant', 'lion', 'tiger' ]
console.log(newLengthUnshift); // Output: 7
```

#### 4.2. Removing Elements

*   **`pop()`:** Removes the **last** element from an array and returns that removed element.
*   **`shift()`:** Removes the **first** element from an array and returns that removed element.
*   **`splice()`:** **Changes the contents of an array by removing or replacing existing elements and/or adding new elements.**
    *   Syntax: `array.splice(startIndex, deleteCount, item1, item2, ...)`
    *   `startIndex`: The index at which to start changing the array.
    *   `deleteCount` (optional): The number of elements to remove. If 0, no elements are removed.
    *   `item1, item2, ...` (optional): The elements to add to the array, beginning at `startIndex`.
    *   Returns an array containing the deleted elements.

##### Examples:

```javascript
let fruits = ["apple", "banana", "cherry", "date"];

let lastFruit = fruits.pop();
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]
console.log(lastFruit); // Output: date

let firstFruit = fruits.shift();
console.log(fruits); // Output: [ 'banana', 'cherry' ]
console.log(firstFruit); // Output: apple

// Using splice to remove elements
let numbers = [1, 2, 3, 4, 5, 6];
let removedElements = numbers.splice(2, 2); // Remove 2 elements starting from index 2
console.log(numbers); // Output: [ 1, 2, 5, 6 ]
console.log(removedElements); // Output: [ 3, 4 ]

// Using splice to remove and add elements
let colors = ["red", "green", "blue"];
let replacedElements = colors.splice(1, 1, "yellow", "purple"); // Remove 'green', add 'yellow', 'purple' at index 1
console.log(colors); // Output: [ 'red', 'yellow', 'purple', 'blue' ]
console.log(replacedElements); // Output: [ 'green' ]

// Using splice to just add elements
let letters = ["a", "c"];
letters.splice(1, 0, "b"); // Add 'b' at index 1, delete 0 elements
console.log(letters); // Output: [ 'a', 'b', 'c' ]
```

#### 4.3. Searching and Finding Elements

*   **`indexOf()`:** Returns the **first index** at which a given element can be found in the array, or `-1` if it is not present.
*   **`lastIndexOf()`:** Returns the **last index** at which a given element can be found in the array, or `-1` if it is not present.
*   **`includes()`:** Determines whether an array includes a certain value among its entries, returning `true` or `false`.
*   **`find()`:** Returns the **value** of the first element in the array that satisfies the provided testing function. Otherwise, `undefined` is returned.
*   **`findIndex()`:** Returns the **index** of the first element in the array that satisfies the provided testing function. Otherwise, `-1` is returned.

##### Examples:

```javascript
let numbers = [10, 20, 30, 20, 40];

console.log(numbers.indexOf(20)); // Output: 1 (first occurrence)
console.log(numbers.indexOf(50)); // Output: -1

console.log(numbers.lastIndexOf(20)); // Output: 3 (last occurrence)

console.log(numbers.includes(30)); // Output: true
console.log(numbers.includes(50)); // Output: false

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Alice" }
];

// find()
const userBob = users.find(user => user.name === "Bob");
console.log(userBob); // Output: { id: 2, name: 'Bob' }

const userCharlie = users.find(user => user.name === "Charlie");
console.log(userCharlie); // Output: undefined

// findIndex()
const aliceIndex = users.findIndex(user => user.name === "Alice");
console.log(aliceIndex); // Output: 0 (index of the first Alice)

const davidIndex = users.findIndex(user => user.name === "David");
console.log(davidIndex); // Output: -1
```

#### 4.4. Transforming and Filtering Elements

*   **`map()`:** Creates a **new array** populated with the results of calling a provided function on every element in the calling array.
*   **`filter()`:** Creates a **new array** with all elements that pass the test implemented by the provided function.
*   **`slice()`:** Returns a **shallow copy** of a portion of an array into a new array object selected from `begin` to `end` (end not included). Original array is not modified.
    *   Syntax: `array.slice(begin, end)`
*   **`concat()`:** Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.
*   **`join()`:** Joins all elements of an array into a string.
*   **`reverse()`:** Reverses the order of elements in an array **in place** (modifies the original array).
*   **`sort()`:** Sorts the elements of an array **in place** (modifies the original array) and returns the sorted array. By default, it sorts elements as strings. For numerical sorting, a compare function is needed.

##### Examples:

```javascript
// map()
const prices = [10, 20, 30];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices); // Output: [ 9, 18, 27 ]

// filter()
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [ 2, 4, 6 ]

// slice()
let letters = ["a", "b", "c", "d", "e"];
let subset = letters.slice(1, 4); // Elements from index 1 up to (but not including) index 4
console.log(subset); // Output: [ 'b', 'c', 'd' ]
console.log(letters); // Output: [ 'a', 'b', 'c', 'd', 'e' ] (original array unchanged)

// concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinedArray = arr1.concat(arr2, [5, 6]);
console.log(combinedArray); // Output: [ 1, 2, 3, 4, 5, 6 ]
console.log(arr1); // Output: [ 1, 2 ] (original arrays unchanged)

// join()
let words = ["Hello", "World", "Node.js"];
console.log(words.join(" ")); // Output: Hello World Node.js
console.log(words.join("-")); // Output: Hello-World-Node.js

// reverse()
let numbersToReverse = [1, 2, 3, 4];
numbersToReverse.reverse();
console.log(numbersToReverse); // Output: [ 4, 3, 2, 1 ] (original array modified)

// sort()
let names = ["Charlie", "Alice", "Bob"];
names.sort();
console.log(names); // Output: [ 'Alice', 'Bob', 'Charlie' ]

// Numerical sort
let unsortedNumbers = [5, 1, 10, 20, 3];
unsortedNumbers.sort((a, b) => a - b); // Ascending order
console.log(unsortedNumbers); // Output: [ 1, 3, 5, 10, 20 ]

unsortedNumbers.sort((a, b) => b - a); // Descending order
console.log(unsortedNumbers); // Output: [ 20, 10, 5, 3, 1 ]
```

#### 4.5. Iterating Over Arrays

While `for` loops can be used, JavaScript offers more modern and readable ways to iterate:

*   **`forEach()`:** Executes a provided function once for each array element. It doesn't return a new array.
*   **`for...of` loop:** Iterates over the **values** of an iterable object (like arrays).
*   **`for...in` loop:** Iterates over the **enumerable properties** of an object. For arrays, it iterates over the indices (keys). Use with caution as it can include non-index properties and the order is not guaranteed in older JS versions.

##### Examples:

```javascript
let colors = ["red", "green", "blue"];

// forEach()
colors.forEach(function(color, index) {
  console.log(`Color at index ${index} is ${color}`);
});
// Output:
// Color at index 0 is red
// Color at index 1 is green
// Color at index 2 is blue

// for...of loop
for (const color of colors) {
  console.log(color);
}
// Output:
// red
// green
// blue

// for...in loop (use with caution for arrays)
for (const index in colors) {
  console.log(`Index: ${index}, Value: ${colors[index]}`);
}
// Output:
// Index: 0, Value: red
// Index: 1, Value: green
// Index: 2, Value: blue
```

---

### 5. Practice Questions or Exercises

**Question 1:**
Create an array named `shoppingList` containing the following items: "milk", "bread", "eggs".
Then, add "cheese" to the end of the list and "juice" to the beginning.

**Question 2:**
From the `shoppingList` created in Question 1, remove the last item and store it in a variable named `removedItem`. Print both `shoppingList` and `removedItem`.

**Question 3:**
Given an array `temperatures = [25, 30, 22, 28, 35]`.
a) Find the index of the temperature `28`.
b) Check if the array `includes` the temperature `32`.
c) Create a new array `hotDays` containing only temperatures greater than `29`.

**Question 4:**
You have an array of student scores: `scores = [85, 92, 78, 95, 88]`.
a) Create a new array `scaledScores` where each score is increased by 5 points.
b) Calculate the sum of all scores in the `scores` array.

**Question 5:**
Given an array `people = ["Alice", "Bob", "Charlie", "Alice"]`.
Find the index of the *second* occurrence of "Alice".

---

### Answers to Practice Questions

**Answer 1:**

```javascript
let shoppingList = ["milk", "bread", "eggs"];
shoppingList.push("cheese");
shoppingList.unshift("juice");
console.log(shoppingList); // Output: [ 'juice', 'milk', 'bread', 'eggs', 'cheese' ]
```

**Answer 2:**

```javascript
let shoppingList = ["juice", "milk", "bread", "eggs", "cheese"]; // Assuming from Answer 1
let removedItem = shoppingList.pop();
console.log(shoppingList);     // Output: [ 'juice', 'milk', 'bread', 'eggs' ]
console.log(removedItem);      // Output: cheese
```

**Answer 3:**

```javascript
let temperatures = [25, 30, 22, 28, 35];

// a)
let indexOf28 = temperatures.indexOf(28);
console.log(indexOf28); // Output: 3

// b)
let includes32 = temperatures.includes(32);
console.log(includes32); // Output: false

// c)
let hotDays = temperatures.filter(temp => temp > 29);
console.log(hotDays); // Output: [ 30, 35 ]
```

**Answer 4:**

```javascript
let scores = [85, 92, 78, 95, 88];

// a)
let scaledScores = scores.map(score => score + 5);
console.log(scaledScores); // Output: [ 90, 97, 83, 100, 93 ]

// b)
// Using reduce for sum (a common pattern)
let sumOfScores = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumOfScores); // Output: 378

// Alternatively, using a loop:
// let sumOfScores = 0;
// for (const score of scores) {
//   sumOfScores += score;
// }
// console.log(sumOfScores); // Output: 378
```

**Answer 5:**

```javascript
let people = ["Alice", "Bob", "Charlie", "Alice"];

// Find the index of the first "Alice"
let firstAliceIndex = people.indexOf("Alice"); // 0

// Start searching from the index *after* the first occurrence
let secondAliceIndex = people.indexOf("Alice", firstAliceIndex + 1);
console.log(secondAliceIndex); // Output: 3
```

---

### 6. Important Points to Remember

*   **Zero-Indexing:** Always remember that array indices start at `0`.
*   **Mutability:** Most array methods that modify the array (e.g., `push`, `pop`, `splice`, `sort`, `reverse`) change the original array **in place**. Methods like `map`, `filter`, `slice` return a *new* array and do not modify the original.
*   **`undefined` for Out-of-Bounds Access:** Accessing an index that doesn't exist results in `undefined`.
*   **`sort()` for Numbers:** For numerical sorting, always provide a compare function (e.g., `(a, b) => a - b` for ascending).
*   **`for...of` vs. `for...in`:** Use `for...of` for iterating over array *values* and `for...in` for iterating over object *keys* (or array indices with caution).
*   **`reduce()`:** While not covered in detail, `reduce()` is a powerful method for aggregating array values into a single result (like sum, product, etc.).
*   **Performance:** For very large arrays and performance-critical operations, consider the efficiency of different methods, though for most common web development tasks, the built-in methods are highly optimized.
