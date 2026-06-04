---
title: "Loops"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc26"
status: "completed"
scrapedAt: "2026-05-20T17:28:15.257Z"
---
# Module 2: Scripting Language - Loops

## 1. Introduction to Loops

Loops are fundamental control flow structures in programming that allow you to execute a block of code repeatedly. They are essential for automating repetitive tasks, processing collections of data, and creating dynamic web content.

**Key Concept:** Repetition. Loops enable you to avoid writing the same code multiple times.

## 2. Types of Loops

Scripting languages, particularly JavaScript, commonly offer several types of loops, each suited for different scenarios.

### 2.1. `for` Loop

The `for` loop is ideal when you know the exact number of times you want to iterate or when you need to iterate over a sequence with a known start and end point.

**Syntax:**

```javascript
for (initialization; condition; increment/decrement) {
  // code to be executed in each iteration
}
```

**Explanation of Components:**

*   **`initialization`**: Executed once before the loop starts. Typically used to declare and initialize a loop counter.
*   **`condition`**: Evaluated before each iteration. If the condition is true, the loop continues; otherwise, it terminates.
*   **`increment/decrement`**: Executed after each iteration. Typically used to update the loop counter.

**Example:** Print numbers from 1 to 5.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5
```

**Example:** Iterate over an array.

```javascript
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// apple
// banana
// cherry
```

### 2.2. `while` Loop

The `while` loop executes a block of code as long as a specified condition remains true. It's useful when you don't know in advance how many times the loop needs to run.

**Syntax:**

```javascript
while (condition) {
  // code to be executed as long as the condition is true
}
```

**Explanation:**

*   The `condition` is evaluated at the beginning of each iteration.
*   If the `condition` is true, the code block is executed.
*   If the `condition` is false, the loop terminates.
*   **Crucially**, the code inside the loop must eventually modify the condition to prevent an infinite loop.

**Example:** Count down from 3 to 1.

```javascript
let count = 3;
while (count > 0) {
  console.log(count);
  count--; // Decrement the counter
}
// Output:
// 3
// 2
// 1
```

**Example:** Keep asking for input until a valid value is entered.

```javascript
let userInput = "";
while (userInput !== "quit") {
  userInput = prompt("Enter 'quit' to exit:");
  console.log("You entered: " + userInput);
}
// Output will depend on user input. The loop continues until "quit" is entered.
```

### 2.3. `do...while` Loop

The `do...while` loop is similar to the `while` loop, but it guarantees that the code block will be executed at least once, regardless of whether the condition is initially true or false.

**Syntax:**

```javascript
do {
  // code to be executed
} while (condition);
```

**Explanation:**

*   The code block inside the `do` part is executed first.
*   Then, the `condition` is evaluated.
*   If the `condition` is true, the loop continues.
*   If the `condition` is false, the loop terminates.

**Example:** Ensure a user sees a welcome message at least once.

```javascript
let i = 0;
do {
  console.log("Welcome!");
  i++;
} while (i < 0); // The condition is initially false, but the message is still printed once.
// Output:
// Welcome!
```

**Example:** Prompt for input at least once.

```javascript
let number;
do {
  number = prompt("Enter a positive number:");
} while (number <= 0);
console.log("You entered: " + number);
// The loop will always prompt at least once.
```

### 2.4. `for...in` Loop

The `for...in` loop is used to iterate over the enumerable properties of an object. It iterates over the property **names** (keys) of an object.

**Syntax:**

```javascript
for (variable in object) {
  // code to be executed for each property
  // 'variable' will hold the property name (key)
}
```

**Example:** Iterate over object properties.

```javascript
const person = { name: "Alice", age: 30, city: "New York" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 30
// city: New York
```

**Important Note:** The order of iteration for `for...in` is not guaranteed, especially for objects. It's generally not recommended for iterating over arrays because it can iterate over index properties and other enumerable properties that might be added to the array prototype.

### 2.5. `for...of` Loop

The `for...of` loop is used to iterate over iterable objects such as Arrays, Strings, Maps, Sets, etc. It iterates over the **values** of the iterable.

**Syntax:**

```javascript
for (variable of iterable) {
  // code to be executed for each value
  // 'variable' will hold the value from the iterable
}
```

**Example:** Iterate over an array's values.

```javascript
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
// Output:
// red
// green
// blue
```

**Example:** Iterate over a string's characters.

```javascript
const greeting = "Hello";
for (let char of greeting) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o
```

**Key Distinction:**
*   `for...in` iterates over object **keys** (property names).
*   `for...of` iterates over iterable object **values**.

## 3. Loop Control Statements

Loop control statements allow you to alter the normal flow of a loop.

### 3.1. `break` Statement

The `break` statement immediately terminates the current loop (or `switch` statement). Execution continues with the statement immediately following the terminated loop.

**Example:** Find the first occurrence of a specific number in an array and stop.

```javascript
const numbers = [10, 20, 30, 40, 50];
let found = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 30) {
    console.log("Found 30 at index:", i);
    found = true;
    break; // Exit the loop
  }
}
if (!found) {
  console.log("30 not found.");
}
// Output:
// Found 30 at index: 2
```

### 3.2. `continue` Statement

The `continue` statement skips the rest of the current iteration of the loop and proceeds to the next iteration.

**Example:** Print only odd numbers from 1 to 10.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}
// Output:
// 1
// 3
// 5
// 7
// 9
```

## 4. Nested Loops

Nested loops occur when one loop is placed inside another loop. This is commonly used for working with multi-dimensional data structures like matrices or grids.

**Example:** Create a multiplication table.

```javascript
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j) + "\t"; // \t is for tab spacing
  }
  console.log(row);
}
// Output:
// 1	2	3	4	5	
// 2	4	6	8	10	
// 3	6	9	12	15	
// 4	8	12	16	20	
// 5	10	15	20	25	
```

**Example:** Iterating through a 2D array (matrix).

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) { // Outer loop for rows
  for (let j = 0; j < matrix[i].length; j++) { // Inner loop for columns
    console.log(`Element at [${i}][${j}]: ${matrix[i][j]}`);
  }
}
// Output:
// Element at [0][0]: 1
// Element at [0][1]: 2
// Element at [0][2]: 3
// Element at [1][0]: 4
// Element at [1][1]: 5
// Element at [1][2]: 6
// Element at [2][0]: 7
// Element at [2][1]: 8
// Element at [2][2]: 9
```

## 5. Choosing the Right Loop

*   **`for` loop:** When you know the number of iterations in advance or need to iterate with a counter.
*   **`while` loop:** When the loop needs to continue as long as a condition is true, and the number of iterations is not predetermined.
*   **`do...while` loop:** Similar to `while`, but guarantees at least one execution.
*   **`for...in` loop:** For iterating over the **keys** of an object.
*   **`for...of` loop:** For iterating over the **values** of iterable objects like arrays and strings.

## 6. Practice Questions

1.  **Question:** Write a `for` loop that prints the numbers from 10 down to 1.
    **Answer:**
    ```javascript
    for (let i = 10; i >= 1; i--) {
      console.log(i);
    }
    ```

2.  **Question:** Write a `while` loop that continues to prompt the user for a number until they enter a number greater than 100.
    **Answer:**
    ```javascript
    let num = 0;
    while (num <= 100) {
      num = parseFloat(prompt("Enter a number greater than 100:"));
      if (isNaN(num)) { // Handle cases where input is not a number
        alert("Please enter a valid number.");
        num = 0; // Reset to ensure loop continues if input is invalid
      }
    }
    console.log("You entered:", num);
    ```

3.  **Question:** Use a `do...while` loop to calculate the sum of numbers entered by the user until they enter 0.
    **Answer:**
    ```javascript
    let sum = 0;
    let inputNum;
    do {
      inputNum = parseFloat(prompt("Enter a number (enter 0 to finish):"));
      if (!isNaN(inputNum)) {
        sum += inputNum;
      } else {
        alert("Invalid input. Please enter a number.");
      }
    } while (inputNum !== 0);
    console.log("The sum of the numbers is:", sum);
    ```

4.  **Question:** Given an object `student = { name: "Bob", grade: "A", course: "Math" }`, use a `for...in` loop to display each property and its value.
    **Answer:**
    ```javascript
    const student = { name: "Bob", grade: "A", course: "Math" };
    for (let prop in student) {
      console.log(`${prop}: ${student[prop]}`);
    }
    ```

5.  **Question:** Write a `for...of` loop to print each character of the string "JavaScript" on a new line.
    **Answer:**
    ```javascript
    const language = "JavaScript";
    for (let character of language) {
      console.log(character);
    }
    ```

6.  **Question:** Write a `for` loop that prints numbers from 1 to 20, but skips any number that is divisible by both 3 and 5. Use `continue`.
    **Answer:**
    ```javascript
    for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        continue; // Skip numbers divisible by both 3 and 5
      }
      console.log(i);
    }
    ```

7.  **Question:** In a nested loop, when does the inner loop complete all its iterations?
    **Answer:** The inner loop completes all its iterations for each single iteration of the outer loop.

## 7. Important Points to Remember

*   **Infinite Loops:** Be extremely careful with loop conditions. If a condition never becomes false, the loop will run forever, potentially crashing your program or browser. Always ensure that something within the loop body will eventually make the condition false.
*   **Initialization, Condition, Increment/Decrement:** Understand the role of each part in a `for` loop.
*   **`for...in` vs. `for...of`:** Remember that `for...in` iterates over property names (keys), while `for...of` iterates over values of iterable objects. Avoid using `for...in` for arrays if you only want values.
*   **`break` and `continue`:** Use them judiciously to control loop execution. `break` exits the loop entirely, while `continue` skips to the next iteration.
*   **Readability:** Choose the loop type that best expresses the intent of your code. Sometimes a `for` loop can be clearer than a `while` loop, and vice-versa.
*   **Efficiency:** While not a primary concern for basic web programming, be aware that different loop structures can have minor performance differences in very performance-critical scenarios. For most web development tasks, the readability and correctness of your loop are more important.
*   **Data Types:** Loops are essential for processing arrays, strings, and objects, which are common data structures in web programming.
