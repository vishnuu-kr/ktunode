---
title: "Conditionals"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc25"
status: "completed"
scrapedAt: "2026-05-20T17:28:14.618Z"
---
# WEB PROGRAMMING: Module 2 - Scripting Language

## Topic: Conditionals

---

### **Introduction to Conditionals**

In web programming, **conditionals** are fundamental control flow structures that allow your scripts to make decisions and execute different blocks of code based on whether certain conditions are true or false. This enables dynamic and interactive web pages.

---

### **Learning Outcomes**

By the end of this topic, you should be able to:

*   **Understand the purpose and importance of conditional statements in scripting languages.**
*   **Differentiate between various types of conditional statements (e.g., if, if-else, if-elif-else, switch).**
*   **Use comparison operators to evaluate conditions.**
*   **Utilize logical operators to combine multiple conditions.**
*   **Apply nested conditional statements for complex decision-making.**
*   **Understand and implement the `switch` statement for multi-way branching.**

---

### **Key Concepts and Definitions**

*   **Conditional Statement:** A programming construct that executes a block of code only if a specified condition is met (evaluates to true).
*   **Boolean Value:** A data type that can only be `true` or `false`.
*   **Condition:** An expression that evaluates to a Boolean value.
*   **Control Flow:** The order in which individual statements, instructions, or function calls of a program are executed or evaluated.
*   **Comparison Operators:** Symbols used to compare two values.
*   **Logical Operators:** Symbols used to combine or modify Boolean expressions.
*   **Nested Conditionals:** Placing one conditional statement inside another.

---

### **Types of Conditional Statements**

#### **1. The `if` Statement**

The `if` statement is the most basic conditional statement. It executes a block of code only if the specified condition is true.

**Syntax (Conceptual):**

```
if (condition) {
  // Code to be executed if condition is true
}
```

**Example (JavaScript):**

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
```

#### **2. The `if-else` Statement**

The `if-else` statement provides an alternative block of code to execute when the `if` condition is false.

**Syntax (Conceptual):**

```
if (condition) {
  // Code to be executed if condition is true
} else {
  // Code to be executed if condition is false
}
```

**Example (JavaScript):**

```javascript
let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's a pleasant day.");
}
```

#### **3. The `if-else if-else` Statement (or `elif` in Python)**

This structure allows you to check multiple conditions sequentially. The first condition that evaluates to true will have its corresponding code block executed, and the rest will be skipped.

**Syntax (Conceptual):**

```
if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition1 is false AND condition2 is true
} else {
  // Code if all preceding conditions are false
}
```

**Example (JavaScript):**

```javascript
let score = 75;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Your grade is: " + grade); // Output: Your grade is: C
```

#### **4. The Ternary Operator (Conditional Operator)**

A shorthand for simple `if-else` statements, especially useful for assigning values.

**Syntax (Conceptual):**

```
condition ? value_if_true : value_if_false
```

**Example (JavaScript):**

```javascript
let isAdult = true;
let message = isAdult ? "Welcome!" : "Access denied.";
console.log(message); // Output: Welcome!
```

---

### **Comparison Operators**

These operators are used to compare values and return a Boolean result (`true` or `false`).

| Operator | Description                       | Example         | Result (if x=10, y=5) |
| :------- | :-------------------------------- | :-------------- | :-------------------- |
| `==`     | Equal to                          | `x == y`        | `false`               |
| `===`    | Strictly equal to (value & type) | `x === "10"`    | `false`               |
| `!=`     | Not equal to                      | `x != y`        | `true`                |
| `!==`    | Strictly not equal to             | `x !== 10`      | `false`               |
| `>`      | Greater than                      | `x > y`         | `true`                |
| `<`      | Less than                         | `x < y`         | `false`               |
| `>=`     | Greater than or equal to          | `x >= 10`       | `true`                |
| `<=`     | Less than or equal to             | `x <= 5`        | `false`               |

**Important Note on `==` vs. `===`:**
*   `==` performs type coercion. For example, `5 == "5"` is `true`.
*   `===` checks for both value and type without coercion. `5 === "5"` is `false`.
    **It is generally recommended to use `===` for stricter comparisons.**

---

### **Logical Operators**

These operators are used to combine or invert Boolean expressions.

| Operator | Description                                     | Example (if x=10, y=5, z=true) | Result |
| :------- | :---------------------------------------------- | :----------------------------- | :----- |
| `&&`     | Logical AND (True if both are true)             | `(x > y) && z`                 | `true` |
| `||`     | Logical OR (True if at least one is true)       | `(x < y) || z`                 | `true` |
| `!`      | Logical NOT (Inverts the Boolean value)         | `!z`                           | `false` |

---

### **Nested Conditional Statements**

This involves placing one conditional statement inside another. This is useful for handling more complex scenarios where a decision depends on the outcome of a previous decision.

**Example (JavaScript):**

```javascript
let isUserLoggedIn = true;
let userRole = "admin";

if (isUserLoggedIn) {
  console.log("Welcome, user!");
  if (userRole === "admin") {
    console.log("You have administrative privileges.");
  } else {
    console.log("You are a regular user.");
  }
} else {
  console.log("Please log in to continue.");
}
```

---

### **The `switch` Statement**

The `switch` statement provides an alternative to long `if-else if-else` chains, especially when checking the same variable against multiple possible values. It's generally cleaner and more readable for such cases.

**Syntax (Conceptual):**

```
switch (expression) {
  case value1:
    // Code to be executed if expression == value1
    break; // Exits the switch statement
  case value2:
    // Code to be executed if expression == value2
    break;
  // ... other cases
  default: // Optional
    // Code to be executed if no case matches
}
```

**Key Components:**
*   **`switch (expression)`:** The `expression` is evaluated once.
*   **`case value:`:** Each `case` represents a potential value for the `expression`.
*   **`break;`:** This statement is crucial. If omitted, the execution will "fall through" to the next `case`, which is usually unintended.
*   **`default:`:** If none of the `case` values match the `expression`, the `default` block is executed. It's often placed at the end.

**Example (JavaScript):**

```javascript
let dayOfWeek = "Tuesday";
let dayMessage;

switch (dayOfWeek) {
  case "Monday":
    dayMessage = "Start of the week.";
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    dayMessage = "Mid-week.";
    break;
  case "Friday":
    dayMessage = "Almost the weekend!";
    break;
  case "Saturday":
  case "Sunday":
    dayMessage = "Weekend vibes!";
    break;
  default:
    dayMessage = "Invalid day.";
}

console.log(dayMessage); // Output: Mid-week.
```

**When to use `switch`:**
*   When you need to compare a single variable against a list of many distinct values.
*   When the values are constants or literals.
*   When you want a more readable alternative to a long `if-else if-else` chain.

**When to prefer `if-else`:**
*   When you need to check a range of values or complex conditions.
*   When you're comparing different variables or using non-equality comparisons.

---

### **Practice Questions & Exercises**

**Question 1:**
Write a JavaScript `if-else` statement that checks if a variable `number` is positive, negative, or zero. Print "Positive", "Negative", or "Zero" accordingly.

**Answer 1:**

```javascript
let number = 15;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
```

---

**Question 2:**
Using the ternary operator, create a variable `canVote` that is `true` if a person's `age` is 18 or greater, and `false` otherwise. Then print a message indicating if they can vote.

**Answer 2:**

```javascript
let age = 20;
let canVote = age >= 18 ? true : false;

if (canVote) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not yet eligible to vote.");
}
```

---

**Question 3:**
Write a JavaScript `switch` statement that takes a browser name (e.g., "Chrome", "Firefox", "Safari") and prints a message indicating the browser. Include a `default` case for unknown browsers.

**Answer 3:**

```javascript
let browser = "Chrome";
let browserMessage;

switch (browser) {
  case "Chrome":
    browserMessage = "You are using Google Chrome.";
    break;
  case "Firefox":
    browserMessage = "You are using Mozilla Firefox.";
    break;
  case "Safari":
    browserMessage = "You are using Apple Safari.";
    break;
  case "Edge":
    browserMessage = "You are using Microsoft Edge.";
    break;
  default:
    browserMessage = "You are using an unknown browser.";
}

console.log(browserMessage);
```

---

**Question 4:**
Imagine a scenario where you need to check if a user is logged in (`isLoggedIn`) AND if they are an administrator (`isAdmin`). Write a nested conditional statement in JavaScript to print "Welcome, Admin!" if both are true, "Welcome, User!" if only `isLoggedIn` is true, and "Please log in." otherwise.

**Answer 4:**

```javascript
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, Admin!");
  } else {
    console.log("Welcome, User!");
  }
} else {
  console.log("Please log in.");
}
```

---

### **Important Points to Remember**

*   **Readability:** Always prioritize clear and readable code. Well-structured conditionals make your programs easier to understand and debug.
*   **`===` vs. `==`:** Use the strict equality operator (`===`) whenever possible to avoid unexpected behavior due to type coercion.
*   **`break` in `switch`:** Don't forget the `break` statement in `switch` cases to prevent fall-through unless it's intentional.
*   **Logical Operators:** Understand how `&&`, `||`, and `!` work to build complex conditions.
*   **Order of `else if`:** The order of `else if` statements matters. The first condition that evaluates to true will execute its block.
*   **Default Case:** Consider adding a `default` case in `switch` statements for robustness.

---

This concludes Module 2, Topic: Conditionals. You now have a solid understanding of how to make your web scripts dynamic by enabling decision-making.
