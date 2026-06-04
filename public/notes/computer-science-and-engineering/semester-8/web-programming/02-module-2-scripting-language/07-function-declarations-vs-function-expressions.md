---
title: "Function Declarations vs. Function Expressions"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc29"
status: "completed"
scrapedAt: "2026-05-20T17:28:17.302Z"
---
# Web Programming: Module 2 - Scripting Language

## Topic: Function Declarations vs. Function Expressions

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Differentiate** between function declarations and function expressions.
*   **Explain** the concept of "hoisting" and its implications for both function types.
*   **Identify** the use cases and advantages/disadvantages of each method.
*   **Understand** how scope affects functions declared and expressed.

---

### 1. Introduction to Functions in Scripting Languages

Functions are fundamental building blocks in scripting languages like JavaScript. They allow you to:

*   **Organize code:** Group related statements into reusable blocks.
*   **Promote reusability:** Write code once and use it multiple times.
*   **Improve readability:** Make your code easier to understand and maintain.
*   **Manage complexity:** Break down complex problems into smaller, manageable parts.

There are two primary ways to define functions in many scripting languages: **Function Declarations** and **Function Expressions**.

---

### 2. Function Declarations

A function declaration defines a function using the `function` keyword, followed by the function name, parameters, and the function body.

**Syntax:**

```javascript
function functionName(parameter1, parameter2, ...) {
  // Code to be executed
  return value; // Optional
}
```

**Key Characteristics:**

*   **Hoisting:** Function declarations are **hoisted** to the top of their scope (global or function scope). This means you can call a function declared this way *before* its actual declaration in the code.
*   **Named:** They are typically named, which aids in debugging and recursion.
*   **Semicolon:** They do not end with a semicolon.

**Example:**

```javascript
// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!

// Calling before declaration (due to hoisting)
console.log(sayGoodbye("Bob")); // Output: Goodbye, Bob!

function sayGoodbye(name) {
  return "Goodbye, " + name + "!";
}
```

---

### 3. Function Expressions

A function expression defines a function as part of an expression. The function can be named or anonymous.

**Syntax:**

```javascript
// Anonymous Function Expression
const variableName = function(parameter1, parameter2, ...) {
  // Code to be executed
  return value; // Optional
}; // Semicolon is important here!

// Named Function Expression
const variableName = function functionName(parameter1, parameter2, ...) {
  // Code to be executed
  return value; // Optional
}; // Semicolon is important here!
```

**Key Characteristics:**

*   **Not Hoisted (Entirely):** The variable declaration is hoisted, but the function assignment is not. This means you **cannot** call a function expression before its assignment to the variable.
*   **Anonymous or Named:** Can be anonymous (no name) or named. Named function expressions are useful for debugging and recursion.
*   **Semicolon:** They are usually followed by a semicolon because they are part of an assignment statement.
*   **Assignment:** They are assigned to a variable, which becomes the way you call the function.

**Example (Anonymous Function Expression):**

```javascript
// Anonymous Function Expression
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

// console.log(subtract(10, 4)); // This would throw an error because subtract is not yet defined.
// const subtract = function(a, b) {
//   return a - b;
// };
```

**Example (Named Function Expression):**

```javascript
const multiply = function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1); // Can call itself by its name 'factorial'
  }
};

console.log(multiply(5)); // Output: 120

// console.log(factorial(5)); // This would throw an error because 'factorial' is local to the expression.
```

---

### 4. Hoisting Explained

**Hoisting** is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope (global or function scope) during the compilation phase, *before* code execution.

**How it affects each type:**

*   **Function Declarations:** The *entire function definition* is hoisted. You can call them before they appear in the code.

    ```javascript
    // Hoisting in action for declarations
    function first() {
      console.log("I'm from function declaration!");
    }

    first(); // Output: I'm from function declaration!
    ```

*   **Function Expressions:** Only the *variable declaration* (e.g., `const add;`) is hoisted, but the function *assignment* is not. The variable will be `undefined` until the assignment occurs.

    ```javascript
    // Hoisting for expressions (variable declared, not assigned)
    // console.log(typeof addExpression); // Output: undefined

    // const addExpression = function() {
    //   console.log("I'm from function expression!");
    // };

    // addExpression(); // This would cause a TypeError because 'addExpression' is not a function yet.
    ```

---

### 5. Key Differences and Use Cases

| Feature             | Function Declaration                                  | Function Expression                                       |
| :------------------ | :---------------------------------------------------- | :-------------------------------------------------------- |
| **Syntax**          | `function name() { ... }`                            | `const name = function() { ... }` or `function() { ... }` |
| **Hoisting**        | Entire function is hoisted (callable before definition) | Only variable declaration is hoisted (assignment not)     |
| **Naming**          | Must be named                                         | Can be anonymous or named                                 |
| **Invocation**      | `functionName(...)`                                   | `variableName(...)`                                       |
| **Semicolon**       | Not typically used                                    | Typically used                                            |
| **Use Case**        | General utility functions, helper functions           | Immediately Invoked Function Expressions (IIFEs), callbacks, modularity |
| **`this` context**  | Depends on how it's called                            | Depends on how it's called, can be explicitly set with `call`, `apply`, `bind` |
| **`arguments.callee`** | Can access the function itself using `arguments.callee` | Can access the function itself using `arguments.callee` (though deprecated) or its name in named expressions |

---

### 6. Immediately Invoked Function Expressions (IIFEs)

IIFEs are function expressions that are executed immediately after they are defined. They are commonly used to create a private scope for variables, preventing them from polluting the global scope.

**Syntax:**

```javascript
(function() {
  // Code within the IIFE
  var privateVariable = "I'm private!";
  console.log("This IIFE ran immediately.");
})();

// console.log(privateVariable); // This would cause a ReferenceError.
```

**Why use IIFEs?**

*   **Encapsulation:** Create private scopes for variables and functions, avoiding naming conflicts.
*   **Modularity:** Organize code into self-contained units.
*   **Preventing Global Pollution:** Keep your code clean and avoid cluttering the global namespace.

---

### 7. Scope Considerations

Both function declarations and expressions create their own scope.

*   **Function Scope:** Variables declared with `var` inside a function are scoped to that function.
*   **Block Scope (with `let` and `const`):** Variables declared with `let` and `const` inside a function (or any block like `if`, `for`) are scoped to that block.

**Example:**

```javascript
function outerFunction() {
  var outerVar = "I'm in the outer scope.";

  function declarationInside() {
    var innerVar = "I'm in the declaration's scope.";
    console.log(outerVar); // Can access outerVar
    console.log(innerVar); // Can access innerVar
  }

  const expressionInside = function() {
    var anotherInnerVar = "I'm in the expression's scope.";
    console.log(outerVar); // Can access outerVar
    console.log(anotherInnerVar); // Can access anotherInnerVar
  };

  declarationInside();
  expressionInside();

  // console.log(innerVar); // ReferenceError: innerVar is not defined
  // console.log(anotherInnerVar); // ReferenceError: anotherInnerVar is not defined
}

outerFunction();
```

---

### 8. Practice Questions & Exercises

**Question 1:**
Which of the following is a characteristic of function declarations?
a) They are assigned to variables.
b) They are hoisted and can be called before their definition.
c) They always end with a semicolon.
d) They cannot be named.

**Question 2:**
Consider the following code snippet:

```javascript
console.log(myFunction()); // Line A

var myFunction = function() {
  return "Hello from expression!";
};
```
What will happen at Line A?
a) It will output "Hello from expression!".
b) It will throw a TypeError.
c) It will output `undefined`.
d) It will throw a ReferenceError.

**Question 3:**
What is the primary advantage of using an IIFE?
a) To make functions globally accessible.
b) To create private scopes and avoid global namespace pollution.
c) To increase the execution speed of functions.
d) To allow functions to be called recursively without a name.

**Question 4:**
Write a function declaration that calculates the area of a rectangle. Call it and log the result.

**Question 5:**
Write a function expression that checks if a number is even. Assign it to a variable `isEven` and then use it to check if 10 is even.

---

### 9. Answers to Practice Questions

**Answer 1:**
b) They are hoisted and can be called before their definition.

**Answer 2:**
b) It will throw a TypeError.
Explanation: The variable `myFunction` is hoisted, but its assignment to the function expression doesn't happen until later. At Line A, `myFunction` is `undefined`, and trying to call `undefined()` results in a TypeError.

**Answer 3:**
b) To create private scopes and avoid global namespace pollution.

**Answer 4 (Function Declaration):**

```javascript
function calculateRectangleArea(width, height) {
  return width * height;
}

const width = 10;
const height = 5;
console.log(`The area of the rectangle is: ${calculateRectangleArea(width, height)}`); // Output: The area of the rectangle is: 50
```

**Answer 5 (Function Expression):**

```javascript
const isEven = function(number) {
  return number % 2 === 0;
};

const numToCheck = 10;
console.log(`${numToCheck} is even: ${isEven(numToCheck)}`); // Output: 10 is even: true
```

---

### 10. Important Points to Remember

*   **Hoisting is the key differentiator:** Function declarations are fully hoisted, allowing calls before definition. Function expressions are not fully hoisted; the variable declaration is, but the assignment isn't.
*   **Choose based on need:** Use function declarations for general, reusable functions where hoisting is beneficial. Use function expressions for callbacks, when you need to assign functions to variables, or to create IIFEs for scope control.
*   **IIFEs are powerful for encapsulation:** They protect your code from the global scope.
*   **Named function expressions** are useful for debugging and self-referential calls within the function itself.
*   Always be mindful of the scope in which your functions are declared and called.
