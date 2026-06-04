---
title: "Function Declarations vs. Function Expressions"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0c9"
status: "completed"
scrapedAt: "2026-05-20T17:12:46.834Z"
---
# Module 2: Scripting Language - Function Declarations vs. Function Expressions

## 1. Introduction to Functions in Web Programming

Functions are fundamental building blocks in scripting languages like JavaScript. They allow us to:

*   **Organize code:** Break down complex tasks into smaller, reusable units.
*   **Promote reusability:** Write code once and call it multiple times.
*   **Improve readability:** Make code easier to understand and maintain.
*   **Encapsulate logic:** Group related operations together.

In JavaScript, there are two primary ways to declare functions: **Function Declarations** and **Function Expressions**. Understanding the differences between them is crucial for writing efficient and predictable code.

## 2. Function Declarations

### 2.1. Definition

A **Function Declaration** is a statement that defines a function. It is characterized by the `function` keyword followed by the function name, parentheses `()` for parameters, and curly braces `{}` for the function body.

### 2.2. Syntax

```javascript
function functionName(parameter1, parameter2, ...) {
  // Code to be executed
  return value; // Optional
}
```

### 2.3. Key Characteristics

*   **Hoisting:** This is the most significant characteristic of function declarations. The JavaScript engine processes declarations before executing any code. This means you can call a function declared this way *before* its actual declaration in the code.
*   **Named Functions:** Function declarations always result in a named function. The `functionName` is accessible.
*   **Standalone Statements:** They are treated as statements and cannot be embedded directly within other expressions.

### 2.4. Examples

**Example 1: Simple Greeting Function**

```javascript
// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Calling the function (can be done before declaration due to hoisting)
console.log(greet("Alice")); // Output: Hello, Alice!

// Later in the code, the declaration is present
function greet(name) {
  return "Hello, " + name + "!";
}
```

**Example 2: Function with Hoisting Demonstration**

```javascript
console.log(add(5, 3)); // Output: 8

// Function Declaration
function add(a, b) {
  return a + b;
}
```

In the example above, `console.log(add(5, 3))` executes successfully even though the `add` function is declared *after* it. This is due to hoisting.

## 3. Function Expressions

### 3.1. Definition

A **Function Expression** is a way to define a function as part of an expression. This typically involves assigning an anonymous function (a function without a name) to a variable.

### 3.2. Syntax

There are two main types of function expressions:

**a) Anonymous Function Expression:**

```javascript
const variableName = function(parameter1, parameter2, ...) {
  // Code to be executed
  return value; // Optional
};
```

**b) Named Function Expression:**

```javascript
const variableName = function functionName(parameter1, parameter2, ...) {
  // Code to be executed
  return value; // Optional
};
```

### 3.3. Key Characteristics

*   **No Hoisting (for the assignment):** While the `var` keyword (if used) is hoisted, the *assignment* of the function to the variable is not. You cannot call a function expression before its declaration and assignment.
*   **Anonymous or Named:** Function expressions can be anonymous (most common) or have an internal name (useful for debugging and recursion).
*   **Part of Expressions:** They can be assigned to variables, passed as arguments to other functions, or returned from other functions.

### 3.4. Examples

**Example 1: Anonymous Function Expression**

```javascript
// Function Expression
const multiply = function(a, b) {
  return a * b;
};

// Calling the function (must be done after declaration/assignment)
console.log(multiply(4, 6)); // Output: 24

// Attempting to call before assignment will result in an error
// console.log(subtract(10, 5)); // This would cause a ReferenceError if subtract was a function expression
// const subtract = function(x, y) { return x - y; };
```

**Example 2: Named Function Expression**

```javascript
const factorial = function fact(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fact(n - 1); // 'fact' can be used for recursion
  }
};

console.log(factorial(5)); // Output: 120
```

In this named function expression, `fact` can be used within the function body for recursive calls. This can be helpful for debugging as the function name will appear in stack traces.

## 4. Key Differences: Declarations vs. Expressions

| Feature        | Function Declaration                               | Function Expression                                |
| :------------- | :------------------------------------------------- | :------------------------------------------------- |
| **Hoisting**   | **Yes**, the entire function is hoisted.           | **No**, only the variable declaration (if `var`) is hoisted, but the assignment (the function itself) is not. |
| **Syntax**     | `function functionName() { ... }`                  | `const variableName = function() { ... }` or `const variableName = function functionName() { ... }` |
| **Usage**      | Can be called before its definition.               | Must be defined before it can be called.           |
| **Assignment** | Not assigned to a variable by default.             | Assigned to a variable.                            |
| **Scope**      | Function scope (entire function is hoisted).       | Block scope (if using `let` or `const`) or function scope (if using `var`). |
| **`this` context** | Can vary depending on how it's called.           | Can vary depending on how it's called, but often tied to the context where it's defined or called. |

## 5. Understanding Hoisting in Detail

Hoisting is a JavaScript mechanism where variable and function declarations are conceptually moved to the top of their containing scope (global or function) during the compilation phase, before code execution.

*   **Function Declarations:** The entire function definition is hoisted. This means you can call `myFunction()` even if `myFunction` is declared later in the code.

    ```javascript
    console.log(sayHello()); // Output: Hello!

    function sayHello() {
      return "Hello!";
    }
    ```

*   **Function Expressions:** Only the variable declaration is hoisted (if using `var`). The assignment of the function to the variable happens at the line of code where it's written.

    ```javascript
    console.log(greetUser()); // TypeError: greetUser is not a function

    var greetUser = function() {
      return "Greetings!";
    };

    console.log(greetUser()); // Output: Greetings!
    ```
    If you use `let` or `const` for function expressions, they are also not hoisted in the same way as `var`. They are in the "Temporal Dead Zone" until their declaration.

    ```javascript
    // console.log(greetUserLet()); // ReferenceError: Cannot access 'greetUserLet' before initialization

    let greetUserLet = function() {
      return "Greetings!";
    };

    console.log(greetUserLet()); // Output: Greetings!
    ```

**Important Point to Remember:** While hoisting might seem convenient, relying heavily on calling functions before their declaration can sometimes make code harder to read and debug. It's generally considered good practice to declare functions before you use them, especially in larger codebases.

## 6. When to Use Which

*   **Use Function Declarations:**
    *   When you need the function to be available throughout the entire scope, even before its definition. This is common for helper functions or utility functions that are used in multiple places within a script.
    *   For creating named functions that might be referenced internally for recursion.

*   **Use Function Expressions:**
    *   When you want to assign a function to a variable and control its availability based on the code flow.
    *   When you need to pass functions as arguments to other functions (callbacks).
    *   When you need to create anonymous functions.
    *   For IIFEs (Immediately Invoked Function Expressions), which are executed as soon as they are defined.
    *   When using `let` or `const` to define functions, as they don't exhibit the same kind of hoisting behavior as function declarations, leading to more predictable scope management.

## 7. Practice Questions and Exercises

**Question 1:**
Which of the following is a function declaration?

a) `const myFunc = function() { ... };`
b) `function myFunc() { ... };`
c) `let myFunc = () => { ... };`
d) `myFunc = () => { ... };`

**Question 2:**
What is the output of the following code?

```javascript
console.log(calculateSquare(4));

function calculateSquare(num) {
  return num * num;
}
```

a) `16`
b) `undefined`
c) `ReferenceError`
d) The code will not run.

**Question 3:**
What is the output of the following code?

```javascript
console.log(getGreeting());

var getGreeting = function() {
  return "Hello there!";
};
```

a) `Hello there!`
b) `undefined`
c) `TypeError: getGreeting is not a function`
d) `ReferenceError: getGreeting is not defined`

**Question 4:**
Explain the primary difference in terms of code execution order between a function declaration and a function expression.

**Question 5:**
Provide an example of a named function expression and explain why the internal name might be useful.

## 8. Answers to Practice Questions

**Answer 1:**
b) `function myFunc() { ... };`
*   **Explanation:** This syntax starts with the `function` keyword, making it a function declaration. Options a and c are function expressions, and d is an assignment without an explicit declaration (which would likely lead to an error if `myFunc` isn't already declared).

**Answer 2:**
a) `16`
*   **Explanation:** This is a function declaration (`calculateSquare`). Due to hoisting, the entire function is moved to the top of the scope before execution, so it can be called before its physical appearance in the code.

**Answer 3:**
c) `TypeError: getGreeting is not a function`
*   **Explanation:** `getGreeting` is declared using `var` as a function expression. While the `var` declaration itself is hoisted, the assignment of the function to `getGreeting` is not. At the `console.log` line, `getGreeting` is declared as a `var` but its value is still `undefined`. When you try to call `undefined` as a function, it results in a `TypeError`.

**Answer 4:**
The primary difference lies in **hoisting**.
*   **Function Declarations:** The entire function definition is hoisted to the top of its scope. This means you can call a function declared this way *before* it appears in the code.
*   **Function Expressions:** Only the variable declaration (if `var` is used) is hoisted, but the actual function assignment is not. Therefore, you cannot call a function expression before its declaration and assignment in the code.

**Answer 5:**
**Example of a Named Function Expression:**

```javascript
const factorial = function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    // 'fact' can be used here for recursion
    return n * fact(n - 1);
  }
};

console.log(factorial(4)); // Output: 24
```

**Why the internal name (`fact` in this case) is useful:**

1.  **Recursion:** The internal name allows the function to call itself recursively. Without the name, or if the name was different from the variable holding the function, recursion would be impossible within the function's own scope unless an external reference was maintained.
2.  **Debugging:** When an error occurs within the function, the internal name will appear in the call stack or error messages. This makes it easier to identify which function caused the problem, especially in complex recursive scenarios. For instance, if `factorial` was defined as `const factorial = function(n) { ... }`, an error might just show `(anonymous function)` or `factorial` in the stack trace, but if the internal name was `fact`, `fact` would be explicitly shown, aiding debugging.

## 9. Important Points to Remember

*   **Hoisting is key:** The biggest differentiator is how hoisting affects the ability to call functions before their physical location in the code.
*   **Function Declarations are hoisted:** You can call them before they are written.
*   **Function Expressions are not fully hoisted:** You must define them before you can call them.
*   **`let` and `const` impact hoisting:** When used with function expressions, `let` and `const` introduce the "Temporal Dead Zone," preventing access before declaration.
*   **Readability and Maintainability:** While hoisting offers flexibility, it's often good practice to declare functions before using them for clearer code.
*   **Use cases:** Choose the type of function definition based on whether you need hoisting or if the function is part of an assignment or expression.
