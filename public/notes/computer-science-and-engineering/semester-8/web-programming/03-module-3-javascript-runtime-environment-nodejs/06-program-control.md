---
title: "Program Control"
subject: "WEB PROGRAMMING"
module: "Module 3: JavaScript runtime environment : Node.js "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc3d"
status: "completed"
scrapedAt: "2026-05-20T17:28:30.278Z"
---
# Web Programming: Module 3 - Node.js: Program Control

## Introduction

This module dives into the runtime environment of Node.js, focusing on how programs are controlled and executed within this JavaScript environment. Understanding program control is fundamental to building efficient and robust Node.js applications.

## Learning Outcomes

By the end of this module, you will be able to:

*   **Understand the event loop in Node.js:** Explain its role in handling asynchronous operations and non-blocking I/O.
*   **Manage asynchronous operations:** Implement strategies for handling callbacks, Promises, and `async/await` for better code organization.
*   **Control program flow:** Utilize various control flow mechanisms to direct the execution of your Node.js code.
*   **Handle errors effectively:** Implement error handling strategies for synchronous and asynchronous code.
*   **Understand and utilize Node.js modules:** Explain the module system and how to import and export functionality.

---

## 1. The Event Loop in Node.js

The event loop is the heart of Node.js's non-blocking, asynchronous nature. It's a continuous process that monitors for events and executes corresponding callback functions.

### Key Concepts:

*   **Single-Threaded Nature:** Node.js primarily uses a single thread for executing JavaScript code.
*   **Non-Blocking I/O:** Operations like reading files, making network requests, or database queries are handled by the system's thread pool, allowing the main JavaScript thread to continue executing other code.
*   **Event Queue (Callback Queue):** When an asynchronous operation completes, its associated callback function is placed in the event queue.
*   **Call Stack:** The call stack holds the currently executing function. When a function finishes, it's popped off the stack.
*   **Execution:** The event loop continuously checks if the call stack is empty. If it is, it pulls the next callback from the event queue and pushes it onto the call stack for execution.

### How it Works (Simplified):

1.  **Initial Execution:** Your Node.js script starts executing.
2.  **Asynchronous Operations:** When an asynchronous operation is encountered (e.g., `fs.readFile`, `setTimeout`), Node.js hands it off to the system.
3.  **Event Loop Continues:** The JavaScript thread doesn't wait for the asynchronous operation to finish. It continues executing the next line of code.
4.  **Operation Completion:** When the asynchronous operation completes (e.g., the file is read, the timer expires), its callback function is placed in the **event queue**.
5.  **Event Loop Checks:** The event loop constantly monitors the **call stack**.
6.  **Callback Execution:** If the call stack is empty, the event loop takes the first callback from the event queue and pushes it onto the call stack.
7.  **Callback Execution:** The callback function is executed.

### Visual Representation:

```
+-----------------+     +-----------------+     +-----------------+
|   Call Stack    | --> |  Event Loop     | --> |   Event Queue   |
+-----------------+     +-----------------+     +-----------------+
       ^                                                  |
       |                                                  |
+-----------------+                                 +-----------------+
| JavaScript Code |                                 | Async Operation |
+-----------------+                                 +-----------------+
```

### Important Points to Remember:

*   The event loop is crucial for Node.js's ability to handle many concurrent operations efficiently.
*   It prevents blocking the main thread, which would make your application unresponsive.

---

## 2. Managing Asynchronous Operations

Asynchronous operations are a core part of Node.js development. Mastering their management is key to writing clean and maintainable code.

### 2.1. Callbacks

Callbacks are functions passed as arguments to other functions, intended to be executed later.

**Definition:** A function that is passed as an argument to another function and is executed after some operation completes.

**Example:**

```javascript
const fs = require('fs');

fs.readFile('myFile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

console.log('This message prints before the file content!');
```

**Explanation:**
*   `fs.readFile` is an asynchronous operation.
*   The third argument, `(err, data) => { ... }`, is the callback function.
*   Node.js starts reading the file and continues executing `console.log('This message prints before the file content!')`.
*   Once the file reading is complete, the callback is executed, either with an error (`err`) or the file data (`data`).

**Callback Hell (Pyramid of Doom):**
Deeply nested callbacks can lead to unreadable and unmaintainable code.

**Example of Callback Hell:**

```javascript
asyncOperation1(function(result1) {
  asyncOperation2(result1, function(result2) {
    asyncOperation3(result2, function(result3) {
      // ... and so on
    });
  });
});
```

### 2.2. Promises

Promises provide a more structured way to handle asynchronous operations than callbacks.

**Definition:** An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can be in one of three states:
*   **Pending:** The initial state, neither fulfilled nor rejected.
*   **Fulfilled (Resolved):** The operation completed successfully.
*   **Rejected:** The operation failed.

**Key Methods:**

*   `.then(onFulfilled, onRejected)`: Handles the fulfillment or rejection of a Promise.
*   `.catch(onRejected)`: Handles only the rejection of a Promise.
*   `.finally(onFinally)`: Executes a function when the Promise is settled (either fulfilled or rejected).

**Example:**

```javascript
function delayedMessage(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof message !== 'string') {
        reject(new Error('Message must be a string!'));
      } else {
        resolve(message);
      }
    }, delay);
  });
}

delayedMessage('Hello from Promise!', 1000)
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

delayedMessage(123, 500) // This will reject
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error.message); // Output: Error: Message must be a string!
  });
```

**Chaining Promises:**

```javascript
delayedMessage('First step', 500)
  .then((result1) => {
    console.log(result1);
    return delayedMessage('Second step', 1000); // Return a new promise
  })
  .then((result2) => {
    console.log(result2);
    return delayedMessage('Third step', 700);
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
```

### 2.3. Async/Await

`async/await` is syntactic sugar built on top of Promises, making asynchronous code look more like synchronous code.

**Definition:**
*   `async`: A keyword used to declare an asynchronous function. An `async` function always returns a Promise.
*   `await`: A keyword used inside an `async` function to pause execution until a Promise is settled. It returns the resolved value of the Promise or throws the rejected error.

**Example:**

```javascript
function delayedMessage(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof message !== 'string') {
        reject(new Error('Message must be a string!'));
      } else {
        resolve(message);
      }
    }, delay);
  });
}

async function runAsyncOperations() {
  try {
    console.log('Starting...');
    const result1 = await delayedMessage('Step 1 complete', 1000);
    console.log(result1);

    const result2 = await delayedMessage('Step 2 complete', 500);
    console.log(result2);

    // Example of a rejected promise
    // const result3 = await delayedMessage(456, 700);
    // console.log(result3);

    console.log('All done!');
  } catch (error) {
    console.error('Caught error:', error.message);
  }
}

runAsyncOperations();
```

**Benefits of `async/await`:**

*   **Readability:** Makes asynchronous code easier to read and write.
*   **Error Handling:** Simplifies error handling with standard `try...catch` blocks.
*   **Debugging:** Easier to step through asynchronous code in debuggers.

### Important Points to Remember:

*   Callbacks can lead to "callback hell."
*   Promises provide a more structured approach to asynchronous programming.
*   `async/await` offers the most readable and maintainable way to handle asynchronous operations.
*   Always handle potential errors when working with asynchronous code.

---

## 3. Controlling Program Flow

While asynchronous operations manage the execution of tasks over time, traditional control flow statements dictate the order and conditions under which code blocks are executed.

### 3.1. Conditional Statements

These statements allow your program to make decisions based on certain conditions.

*   **`if...else if...else`:**
    ```javascript
    let score = 75;

    if (score >= 90) {
      console.log('Grade: A');
    } else if (score >= 80) {
      console.log('Grade: B');
    } else if (score >= 70) {
      console.log('Grade: C');
    } else {
      console.log('Grade: D');
    }
    ```

*   **`switch`:** Useful for selecting one of many code blocks to be executed.
    ```javascript
    let day = 'Tuesday';

    switch (day) {
      case 'Monday':
        console.log('Start of the week.');
        break;
      case 'Tuesday':
      case 'Wednesday':
      case 'Thursday':
        console.log('Mid-week.');
        break;
      case 'Friday':
        console.log('End of the week!');
        break;
      default:
        console.log('Weekend.');
    }
    ```
    **Important:** The `break` statement is crucial to prevent "fall-through" to the next case.

*   **Ternary Operator (`condition ? value_if_true : value_if_false`):** A concise way to write simple conditional assignments.
    ```javascript
    let age = 20;
    let status = age >= 18 ? 'Adult' : 'Minor';
    console.log(status); // Output: Adult
    ```

### 3.2. Loops

Loops allow you to execute a block of code repeatedly.

*   **`for` loop:** Executes a block of code a specified number of times.
    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log('Iteration:', i);
    }
    ```

*   **`while` loop:** Executes a block of code as long as a specified condition is true.
    ```javascript
    let count = 0;
    while (count < 3) {
      console.log('Count:', count);
      count++;
    }
    ```

*   **`do...while` loop:** Similar to `while`, but executes the block of code once before checking the condition.
    ```javascript
    let num = 0;
    do {
      console.log('Number:', num);
      num++;
    } while (num < 0); // Condition is false, but it still runs once.
    ```

*   **`for...in` loop:** Iterates over the enumerable properties of an object.
    ```javascript
    const person = { name: 'Alice', age: 30 };
    for (const key in person) {
      console.log(`${key}: ${person[key]}`);
    }
    ```
    **Important:** Use `hasOwnProperty` to ensure you are only iterating over the object's own properties and not inherited ones.

*   **`for...of` loop:** Iterates over the values of an iterable object (like Arrays, Strings, Maps, Sets).
    ```javascript
    const colors = ['red', 'green', 'blue'];
    for (const color of colors) {
      console.log(color);
    }
    ```

### 3.3. Control Flow Statements within Loops

*   **`break`:** Terminates the loop prematurely.
    ```javascript
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        break; // Stops the loop when i is 5
      }
      console.log(i); // Outputs 0, 1, 2, 3, 4
    }
    ```

*   **`continue`:** Skips the current iteration and proceeds to the next one.
    ```javascript
    for (let i = 0; i < 5; i++) {
      if (i % 2 === 0) {
        continue; // Skips even numbers
      }
      console.log(i); // Outputs 1, 3
    }
    ```

### Important Points to Remember:

*   Choose the appropriate control flow statement for your logic.
*   `switch` is great for multiple discrete comparisons.
*   `for...of` is generally preferred for iterating over array values.
*   `break` and `continue` can significantly alter loop behavior.

---

## 4. Handling Errors Effectively

Robust error handling is crucial for reliable Node.js applications.

### 4.1. Synchronous Error Handling

Synchronous code errors are typically caught using `try...catch` blocks.

**Definition:** A `try` block contains code that might throw an error. A `catch` block specifies the code to run if an error occurs in the `try` block.

**Example:**

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed!');
  }
  return a / b;
}

try {
  console.log('Result:', divide(10, 2));
  console.log('Result:', divide(10, 0)); // This will throw an error
  console.log('This line will not be reached.');
} catch (error) {
  console.error('An error occurred:', error.message); // Catches the division by zero error
} finally {
  console.log('This block always executes.');
}
```

**`finally` block:** The `finally` block is optional and will execute regardless of whether an error occurred or not. It's often used for cleanup operations.

### 4.2. Asynchronous Error Handling

Error handling for asynchronous operations depends on the method used.

*   **Callbacks:** Errors are typically passed as the first argument to the callback function.
    ```javascript
    const fs = require('fs');

    fs.readFile('nonexistent_file.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Callback error:', err.message); // Handle the error here
        return;
      }
      console.log('File content:', data);
    });
    ```
    **Important:** Always check for the `err` argument first.

*   **Promises:** Errors are handled using `.catch()` or the second argument of `.then()`.
    ```javascript
    function mightFail() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = Math.random() > 0.5; // 50% chance of failure
          if (success) {
            resolve('Operation successful!');
          } else {
            reject(new Error('Operation failed!'));
          }
        }, 500);
      });
    }

    mightFail()
      .then(result => console.log('Promise success:', result))
      .catch(error => console.error('Promise error:', error.message)); // Handle rejection
    ```

*   **`async/await`:** Errors are handled using standard `try...catch` blocks.
    ```javascript
    async function handleAsyncError() {
      try {
        const result = await mightFail(); // mightFail is the Promise function from above
        console.log('Async/await success:', result);
      } catch (error) {
        console.error('Async/await error:', error.message); // Handles rejection
      }
    }

    handleAsyncError();
    ```

### 4.3. Uncaught Exceptions

If an error occurs in your code and is not caught by a `try...catch` block, it will become an uncaught exception.

*   **`process.on('uncaughtException', ...)`:** You can listen for uncaught exceptions globally. However, it is generally recommended to let the process crash and restart, as the application might be in an unstable state after an uncaught exception.

**Example (use with caution):**

```javascript
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! Shutting down...', err.message);
  // In a real application, you would typically want to exit gracefully.
  process.exit(1);
});

// Simulate an uncaught exception
// throw new Error('This will trigger the uncaughtException handler.');
```

### Important Points to Remember:

*   `try...catch` is your primary tool for synchronous error handling.
*   For asynchronous code, handle errors according to the pattern (callback `err`, Promise `.catch()`, `async/await` `try...catch`).
*   It's good practice to handle potential errors from external modules and built-in functions.
*   Avoid relying solely on `uncaughtException` handlers; graceful shutdowns are preferred.

---

## 5. Understanding and Utilizing Node.js Modules

Node.js has a modular architecture, allowing you to break your code into reusable pieces.

### 5.1. What are Modules?

**Definition:** A module is a file that encapsulates related code. It's a way to organize and share JavaScript functionality. Node.js has built-in modules, third-party modules, and your own custom modules.

### 5.2. Core Modules

Node.js comes with a set of built-in modules that provide essential functionalities like file system access, HTTP server creation, path manipulation, etc.

**Common Core Modules:**

*   `fs` (File System): For interacting with the file system.
*   `http`/`https`: For creating HTTP servers and making HTTP requests.
*   `path`: For working with file and directory paths.
*   `os`: For operating system-related utilities.
*   `events`: For working with the event-driven architecture.

**How to Use Core Modules:**

You use the `require()` function to import core modules.

**Example:**

```javascript
// Importing the 'fs' module
const fs = require('fs');
const path = require('path');

// Using a method from the 'fs' module
fs.writeFileSync('hello.txt', 'Hello from Node.js modules!');

// Using a method from the 'path' module
const filePath = path.join(__dirname, 'hello.txt');
console.log('File will be created at:', filePath);
```

### 5.3. Third-Party Modules

These are modules developed by the Node.js community and are installed using a package manager like npm (Node Package Manager) or Yarn.

**Example: Installing and using `lodash`**

1.  **Install:**
    Open your terminal in your project directory and run:
    ```bash
    npm install lodash
    ```

2.  **Use in your code:**
    ```javascript
    const _ = require('lodash'); // Import lodash

    const numbers = [1, 2, 3, 4, 5];
    const shuffledNumbers = _.shuffle(numbers); // Use a lodash function

    console.log('Original:', numbers);
    console.log('Shuffled:', shuffledNumbers);
    ```

### 5.4. Custom Modules

You can create your own modules to organize your project code.

**Creating a Module (e.g., `math.js`):**

```javascript
// math.js

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Exporting functions to make them available for other modules
module.exports = {
  add: add,
  subtract: subtract,
};
```

**Using a Custom Module (e.g., `app.js`):**

```javascript
// app.js

// Importing our custom module
const math = require('./math'); // './' indicates a local file

console.log('10 + 5 =', math.add(10, 5));
console.log('10 - 5 =', math.subtract(10, 5));
```

**Key Exporting Mechanisms:**

*   `module.exports`: The most common way to export. It can be an object, a function, or a class.
*   `exports`: A shortcut to `module.exports`. You can add properties to `exports`, but you cannot reassign `exports` itself (e.g., `exports = { ... }` won't work as expected).

**Example exporting a single function:**

**`greeting.js`:**

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;
```

**`main.js`:**

```javascript
const greetUser = require('./greeting');
console.log(greetUser('Bob'));
```

### Important Points to Remember:

*   Modules are fundamental for code organization and reusability in Node.js.
*   `require()` is used to import modules.
*   `module.exports` or `exports` are used to export functionality from your own modules.
*   npm is essential for managing third-party dependencies.

---

## Practice Questions and Exercises

### Short Answer Questions:

1.  What is the primary role of the event loop in Node.js?
2.  Explain the difference between a callback, a Promise, and `async/await` for handling asynchronous operations.
3.  What is the purpose of the `break` statement in a `switch` statement or a loop?
4.  How do you import a core Node.js module?
5.  What is the difference between `module.exports` and `exports` when creating custom modules?

### Code Exercises:

1.  **Event Loop Simulation:**
    Write a Node.js script that simulates the event loop by using `setTimeout` multiple times with different delays. Use `console.log` to show the order of execution.

    ```javascript
    console.log('Start of script');

    setTimeout(() => {
      console.log('Timeout 1 (0ms)');
    }, 0);

    setTimeout(() => {
      console.log('Timeout 2 (100ms)');
    }, 100);

    Promise.resolve().then(() => {
      console.log('Promise 1 resolved');
    });

    console.log('End of script');
    ```
    **Expected Output:**
    ```
    Start of script
    End of script
    Promise 1 resolved
    Timeout 1 (0ms)
    Timeout 2 (100ms)
    ```

2.  **Asynchronous Error Handling with `async/await`:**
    Create an `async` function that attempts to read a file. If the file doesn't exist, it should catch the error and log a user-friendly message.

    ```javascript
    const fs = require('fs').promises; // Use the promise-based API

    async function readFileAsync(filePath) {
      try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File content:', data);
      } catch (error) {
        console.error(`Error reading file "${filePath}": ${error.message}`);
      }
    }

    // Test cases:
    readFileAsync('existing_file.txt'); // Create this file with some content
    readFileAsync('non_existent_file.txt');
    ```
    **Note:** You'll need to create an `existing_file.txt` in the same directory for this to work correctly.

3.  **Custom Module Creation:**
    Create two files:
    *   `calculator.js`: Export functions for `add` and `multiply`.
    *   `app.js`: Import `calculator.js` and use its functions to calculate `(5 + 3) * 2`.

    **`calculator.js`:**
    ```javascript
    function add(a, b) {
      return a + b;
    }

    function multiply(a, b) {
      return a * b;
    }

    module.exports = {
      add,
      multiply
    };
    ```

    **`app.js`:**
    ```javascript
    const calculator = require('./calculator');

    const sum = calculator.add(5, 3);
    const result = calculator.multiply(sum, 2);

    console.log(`(5 + 3) * 2 = ${result}`);
    ```

### Answers to Short Answer Questions:

1.  **Event Loop Role:** The event loop is responsible for managing asynchronous operations and executing callback functions when they are ready, ensuring that Node.js remains non-blocking and responsive.
2.  **Async Comparison:**
    *   **Callback:** A function passed as an argument to be executed later. Can lead to callback hell if deeply nested.
    *   **Promise:** An object representing the eventual completion (or failure) of an async operation. Provides a more structured way to handle async code with `.then()` and `.catch()`.
    *   **`async/await`:** Syntactic sugar over Promises that makes asynchronous code look and behave more like synchronous code, improving readability and simplifying error handling with `try...catch`.
3.  **`break` statement:** The `break` statement is used to terminate the execution of a `switch` statement or a loop prematurely.
4.  **Importing Core Modules:** You import core Node.js modules using the `require()` function, e.g., `const fs = require('fs');`.
5.  **`module.exports` vs. `exports`:** `module.exports` is the actual object that gets returned when a module is required. `exports` is a reference to `module.exports`. You can add properties to `exports`, but you should not reassign `exports` itself, as this breaks the reference to `module.exports`. `module.exports` is more flexible as it can be assigned any value (object, function, class).

---

## Conclusion

This module has provided a foundational understanding of how Node.js manages program control, from the intricate workings of the event loop to the effective handling of asynchronous operations and errors. Mastering these concepts is essential for building performant and maintainable server-side applications with Node.js.
