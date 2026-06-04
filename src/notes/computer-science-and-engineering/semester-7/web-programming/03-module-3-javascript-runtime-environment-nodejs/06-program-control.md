---
title: "Program Control"
subject: "WEB PROGRAMMING"
module: "Module 3: JavaScript runtime environment : Node.js "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0de"
status: "completed"
scrapedAt: "2026-05-20T17:13:05.687Z"
---
# Web Programming: Module 3 - Node.js: Program Control

## Introduction to Program Control in Node.js

Program control refers to the order in which statements are executed in a program. In Node.js, like in client-side JavaScript, we leverage various control flow mechanisms to manage this execution order, making our programs dynamic and responsive. This module will delve into how Node.js, as a JavaScript runtime environment, handles program control, focusing on concepts that are particularly relevant in a server-side context.

---

## Learning Outcomes:

By the end of this module, you should be able to:

*   Understand the fundamental concepts of program control in JavaScript.
*   Apply conditional statements (if, else if, else, switch) for decision-making.
*   Utilize loop constructs (for, while, do-while, for...in, for...of) for repetitive tasks.
*   Explain and implement concepts of asynchronous programming, including callbacks, Promises, and async/await.
*   Understand the event loop and its role in Node.js's non-blocking I/O model.
*   Differentiate between synchronous and asynchronous operations in Node.js.
*   Implement error handling mechanisms using try-catch blocks.

---

## 1. Fundamental Concepts of Program Control

Program control dictates the sequence of execution. In Node.js, this is achieved through:

*   **Sequential Execution:** Statements are executed one after another in the order they appear.
*   **Selection (Conditional Execution):** The program chooses which block of code to execute based on certain conditions.
*   **Iteration (Looping):** The program repeats a block of code multiple times.
*   **Asynchronous Execution:** Operations that don't block the main thread and complete at a later time.

---

## 2. Conditional Statements (Selection)

Conditional statements allow your program to make decisions.

### 2.1. `if`, `else if`, `else`

These statements execute a block of code only if a specified condition evaluates to `true`.

**Syntax:**

```javascript
if (condition) {
  // code to execute if condition is true
} else if (anotherCondition) {
  // code to execute if anotherCondition is true
} else {
  // code to execute if all previous conditions are false
}
```

**Example:**

```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}
```

### 2.2. `switch` Statement

The `switch` statement is used to perform different actions based on different conditions. It's a cleaner alternative to a long series of `if-else if` statements when comparing a single variable against multiple values.

**Syntax:**

```javascript
switch (expression) {
  case value1:
    // code to execute if expression === value1
    break; // exits the switch statement
  case value2:
    // code to execute if expression === value2
    break;
  default:
    // code to execute if no cases match
}
```

**Example:**

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("End of the work week!");
    break;
  default:
    console.log("Just another day.");
}
```

**Important Note:** The `break` statement is crucial. Without it, execution will "fall through" to the next case, which is rarely desired.

---

## 3. Loop Constructs (Iteration)

Loops allow you to execute a block of code repeatedly.

### 3.1. `for` Loop

The `for` loop is used when you know how many times you want to execute a statement or a block of statements.

**Syntax:**

```javascript
for (initialization; condition; increment/decrement) {
  // code to execute repeatedly
}
```

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteration number: ${i}`);
}
// Output:
// Iteration number: 0
// Iteration number: 1
// Iteration number: 2
// Iteration number: 3
// Iteration number: 4
```

### 3.2. `while` Loop

The `while` loop executes a block of code as long as a specified condition is `true`.

**Syntax:**

```javascript
while (condition) {
  // code to execute repeatedly
}
```

**Example:**

```javascript
let count = 0;
while (count < 3) {
  console.log(`While count: ${count}`);
  count++;
}
// Output:
// While count: 0
// While count: 1
// While count: 2
```

### 3.3. `do-while` Loop

The `do-while` loop is similar to the `while` loop, but it executes the block of code *at least once* before checking the condition.

**Syntax:**

```javascript
do {
  // code to execute repeatedly
} while (condition);
```

**Example:**

```javascript
let num = 5;
do {
  console.log(`Do-while num: ${num}`);
  num++;
} while (num < 5);
// Output:
// Do-while num: 5
```
*(Note: The condition `num < 5` is false immediately after the first iteration, but the code inside `do` still runs once.)*

### 3.4. `for...in` Loop

The `for...in` loop iterates over the enumerable properties of an object.

**Syntax:**

```javascript
for (variable in object) {
  // code to execute for each property
}
```

**Example:**

```javascript
let car = { make: "Toyota", model: "Camry", year: 2022 };

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}
// Output:
// make: Toyota
// model: Camry
// year: 2022
```
**Important Note:** `for...in` is generally used for objects. For arrays, it iterates over the indices, which can be less efficient and might include non-numeric properties.

### 3.5. `for...of` Loop

The `for...of` loop iterates over the values of an iterable object (like Arrays, Strings, Maps, Sets, etc.). This is generally preferred for iterating over array elements.

**Syntax:**

```javascript
for (variable of iterable) {
  // code to execute for each value
}
```

**Example:**

```javascript
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(`Color: ${color}`);
}
// Output:
// Color: red
// Color: green
// Color: blue
```

---

## 4. Asynchronous Programming in Node.js

Node.js is built for non-blocking I/O, which means operations like reading files or making network requests don't halt the execution of the rest of your program. This is achieved through asynchronous programming.

### 4.1. Synchronous vs. Asynchronous Operations

*   **Synchronous (Blocking):** Operations are executed one after another. If an operation takes a long time, the entire program waits.
    *   **Example:** Reading a file using `fs.readFileSync()`.
*   **Asynchronous (Non-blocking):** Operations start and then yield control back to the program, completing at a later time. Node.js notifies the program when the operation is done.
    *   **Example:** Reading a file using `fs.readFile()`.

### 4.2. Callbacks

Callbacks are functions passed as arguments to other functions, to be executed later. This was the traditional way of handling asynchronous operations in JavaScript.

**How it works:** You pass a function to an asynchronous operation. When the operation completes, Node.js calls your callback function with the result or an error.

**Example:** Using the `fs` module to read a file asynchronously.

```javascript
const fs = require('fs');

fs.readFile('my_file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return; // Stop execution if there's an error
  }
  console.log("File content:", data);
});

console.log("This message appears before the file content is logged.");
```

**Pros of Callbacks:**
*   Simple for basic async operations.

**Cons of Callbacks:**
*   **Callback Hell (Pyramid of Doom):** Nested callbacks can make code hard to read and maintain.

```javascript
// Example of Callback Hell
asyncOperation1(function(result1) {
  asyncOperation2(result1, function(result2) {
    asyncOperation3(result2, function(result3) {
      // ... and so on
    });
  });
});
```

### 4.3. Promises

Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner way to handle asynchronous code than callbacks.

**States of a Promise:**
*   **Pending:** The initial state, neither fulfilled nor rejected.
*   **Fulfilled (Resolved):** The operation completed successfully.
*   **Rejected:** The operation failed.

**Key Methods:**
*   `.then(onFulfilled, onRejected)`: Handles the fulfilled or rejected state.
*   `.catch(onRejected)`: Specifically handles the rejected state.
*   `.finally(onFinally)`: Executes regardless of whether the promise was fulfilled or rejected.

**Example:**

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000)
  .then(() => {
    console.log("1 second passed");
    return delay(500); // Return another promise for chaining
  })
  .then(() => {
    console.log("Another 0.5 seconds passed");
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });

console.log("Starting the delay...");
```

**Pros of Promises:**
*   Better error handling.
*   Easier to chain asynchronous operations.
*   More readable than nested callbacks.

### 4.4. `async`/`await`

`async`/`await` is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code.

*   **`async` keyword:** Declares an asynchronous function. An `async` function always returns a Promise.
*   **`await` keyword:** Can only be used inside an `async` function. It pauses the execution of the `async` function until a Promise is settled (either resolved or rejected), and then returns the resolved value.

**Example:**

```javascript
const fs = require('fs').promises; // Use promise-based fs functions

async function readFileContent(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log("File content (async/await):", data);
    return data; // The async function returns a Promise that resolves with 'data'
  } catch (error) {
    console.error("Error reading file with async/await:", error);
    throw error; // Re-throw the error to propagate it
  }
}

async function main() {
  console.log("Calling async function...");
  await readFileContent('my_file.txt');
  console.log("Async function finished.");
}

main();
console.log("This message appears while async function is running.");
```

**Pros of `async`/`await`:**
*   Significantly improves code readability and maintainability.
*   Makes asynchronous code look synchronous.
*   Simplifies error handling with `try-catch` blocks.

---

## 5. The Event Loop in Node.js

The event loop is the heart of Node.js's non-blocking I/O model. It allows Node.js to perform operations on the side without blocking the main execution thread.

**Key Components:**
*   **Call Stack:** Where function calls are executed.
*   **Web APIs/Node.js APIs:** Provided by the browser or Node.js runtime environment (e.g., `setTimeout`, file system operations, network requests).
*   **Callback Queue (Task Queue):** Where callback functions are placed when their corresponding asynchronous operation is complete.
*   **Event Loop:** Continuously checks if the Call Stack is empty. If it is, it picks the first callback from the Callback Queue and pushes it onto the Call Stack for execution.

**How it works (simplified):**

1.  JavaScript code is executed.
2.  When an asynchronous operation (like `fs.readFile` or `setTimeout`) is encountered, it's handed off to the appropriate API (e.g., Node.js's C++ APIs).
3.  The JavaScript execution continues without waiting for the async operation.
4.  Once the async operation completes, its callback function is placed in the Callback Queue.
5.  The Event Loop constantly monitors the Call Stack. When the Call Stack is empty, it checks the Callback Queue.
6.  If a callback is found in the queue, it's moved to the Call Stack and executed.

**Node.js Specifics:** Node.js has different phases for the event loop, including timers, I/O callbacks, `setImmediate`, and `process.nextTick`. `process.nextTick` callbacks are executed between the current operation and the next phase of the event loop.

**Importance for Program Control:** The event loop dictates *when* asynchronous operations' results are processed, allowing Node.js to handle many concurrent requests efficiently.

---

## 6. Error Handling

Robust error handling is crucial in Node.js applications, especially for asynchronous operations.

### 6.1. `try...catch` Blocks

The `try...catch` statement is used for synchronous error handling. Code that might throw an error is placed in the `try` block, and if an error occurs, it's caught and handled in the `catch` block.

**Example:**

```javascript
try {
  let result = 10 / 0; // This will result in Infinity, not an error in JS
  console.log("Division result:", result); // This will still log

  // To demonstrate a real error:
  // let obj = undefined;
  // console.log(obj.property); // This would throw a TypeError
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("This block always executes.");
}
```

### 6.2. Error Handling in Callbacks

As shown in the `fs.readFile` example, the convention is to pass an `err` object as the first argument to the callback. Always check for this `err` object.

```javascript
fs.readFile('non_existent_file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Caught error:", err.message); // Handle the error here
    return;
  }
  console.log("Data:", data);
});
```

### 6.3. Error Handling with Promises and `async`/`await`

*   **Promises:** Use `.catch()` to handle rejected promises.
*   **`async`/`await`:** Use `try...catch` blocks around `await` expressions.

**Example (revisited):**

```javascript
async function readFileSafely(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return data;
  } catch (error) {
    console.error(`Failed to read ${filePath}:`, error.message);
    // Optionally return a default value or re-throw
    return null;
  }
}

async function processFiles() {
  const content1 = await readFileSafely('file1.txt');
  if (content1) {
    console.log("File1 content:", content1);
  }

  const content2 = await readFileSafely('non_existent_file.txt');
  if (content2 === null) {
    console.log("File2 could not be read.");
  }
}

processFiles();
```

**Important Point to Remember:** Uncaught exceptions in Node.js will terminate the process. Proper error handling is essential for application stability.

---

## Practice Questions

1.  **Conditional Statements:** Write a Node.js script that takes a number as input (e.g., from `process.argv` or a hardcoded value) and prints "Even" if the number is even, and "Odd" if it's odd.
2.  **Loops:** Create a Node.js script that prints the multiplication table for a given number (e.g., 7) from 1 to 10 using a `for` loop.
3.  **Asynchronous Concepts:**
    *   Explain the difference between synchronous and asynchronous operations in Node.js.
    *   Write a simple Node.js function that simulates a network request using `setTimeout` and returns a Promise. The Promise should resolve after 2 seconds with a success message.
4.  **`async`/`await`:** Rewrite the Promise example from question 3 using `async`/`await` syntax.
5.  **Error Handling:** Modify the `async`/`await` file reading example to gracefully handle a `ENOENT` error (file not found) and print a user-friendly message instead of crashing the program.

---

## Answers to Practice Questions

**1. Conditional Statements:**

```javascript
// Using a hardcoded value for simplicity
const number = 12;

if (number % 2 === 0) {
  console.log(`${number} is Even`);
} else {
  console.log(`${number} is Odd`);
}

// Using process.argv (for command-line execution: node script.js 15)
// const inputNumber = parseInt(process.argv[2], 10);
// if (isNaN(inputNumber)) {
//   console.log("Please provide a valid number as an argument.");
// } else if (inputNumber % 2 === 0) {
//   console.log(`${inputNumber} is Even`);
// } else {
//   console.log(`${inputNumber} is Odd`);
// }
```

**2. Loops:**

```javascript
const numberToMultiply = 7;

console.log(`Multiplication Table for ${numberToMultiply}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numberToMultiply} x ${i} = ${numberToMultiply * i}`);
}
```

**3. Asynchronous Concepts:**

*   **Difference:** Synchronous operations block the main thread, waiting for completion. Asynchronous operations do not block, allowing other code to run while they complete in the background. Node.js's non-blocking I/O is key to its performance.

*   **Promise Simulation:**

    ```javascript
    function simulateNetworkRequest() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = true; // Simulate success or failure
          if (success) {
            resolve("Data received successfully!");
          } else {
            reject(new Error("Network request failed."));
          }
        }, 2000); // 2 seconds delay
      });
    }

    console.log("Initiating network request...");
    simulateNetworkRequest()
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error.message);
      });
    console.log("Request initiated, but script continues...");
    ```

**4. `async`/`await`:**

```javascript
function simulateNetworkRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data received successfully!");
      } else {
        reject(new Error("Network request failed."));
      }
    }, 2000);
  });
}

async function processRequest() {
  console.log("Initiating network request (async/await)...");
  try {
    const data = await simulateNetworkRequest();
    console.log("Success (async/await):", data);
  } catch (error) {
    console.error("Error (async/await):", error.message);
  }
  console.log("Request processing finished.");
}

processRequest();
console.log("Request initiated, but script continues...");
```

**5. Error Handling:**

```javascript
const fs = require('fs').promises; // Import promise-based fs

async function readFileSafely(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(`Content of ${filePath}:`, data);
    return data;
  } catch (error) {
    // Check for specific error codes like 'ENOENT' (Error: NO ENTry)
    if (error.code === 'ENOENT') {
      console.error(`Error: The file '${filePath}' was not found.`);
    } else {
      console.error(`An unexpected error occurred while reading '${filePath}':`, error.message);
    }
    return null; // Return null to indicate failure gracefully
  }
}

async function processFileExample() {
  console.log("Attempting to read 'my_file.txt'...");
  await readFileSafely('my_file.txt'); // Assumes my_file.txt exists

  console.log("\nAttempting to read 'non_existent_file.txt'...");
  await readFileSafely('non_existent_file.txt'); // This will trigger the error handling
}

processFileExample();
```

---

## Important Points to Remember

*   **`break` in `switch`:** Always use `break` to prevent unintended fall-through.
*   **`for...in` vs. `for...of`:** Use `for...of` for iterating over array elements and other iterables; use `for...in` for object properties.
*   **Event Loop:** Understand its role in Node.js's non-blocking nature.
*   **Callback Hell:** Be aware of its pitfalls and prefer Promises or `async`/`await`.
*   **Error Handling:** Implement `try...catch` for synchronous code and `.catch()` or `try...catch` with `await` for asynchronous code.
*   **`process.exit()`:** In Node.js, unhandled exceptions will terminate the process by default. Design your application to handle errors gracefully.
*   **`process.nextTick()` vs. `setImmediate()`:** While not explicitly detailed in this overview, understanding the differences in execution order of these specific Node.js microtask queues is important for advanced control.

---
