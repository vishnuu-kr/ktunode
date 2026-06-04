---
title: "Conditionals"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0c5"
status: "completed"
scrapedAt: "2026-05-20T17:12:42.730Z"
---
# Module 2: Scripting Language - Conditionals

## Table of Contents

1.  [Introduction to Conditionals](#introduction-to-conditionals)
2.  [The `if` Statement](#the-if-statement)
    *   [Syntax](#syntax)
    *   [How it Works](#how-it-works)
    *   [Example](#example)
3.  [The `if...else` Statement](#the-ifelse-statement)
    *   [Syntax](#syntax-1)
    *   [How it Works](#how-it-works-1)
    *   [Example](#example-1)
4.  [The `if...elif...else` Statement](#the-ifelifelse-statement)
    *   [Syntax](#syntax-2)
    *   [How it Works](#how-it-works-2)
    *   [Example](#example-2)
5.  [Nested Conditionals](#nested-conditionals)
    *   [How it Works](#how-it-works-3)
    *   [Example](#example-3)
6.  [Comparison Operators](#comparison-operators)
7.  [Logical Operators](#logical-operators)
    *   [AND (`&&` or `and`)](#and-)
    *   [OR (`||` or `or`)](#or-)
    *   [NOT (`!` or `not`)](#not-)
8.  [Ternary Operator (Conditional Expression)](#ternary-operator-conditional-expression)
    *   [Syntax](#syntax-3)
    *   [How it Works](#how-it-works-4)
    *   [Example](#example-4)
9.  [Switch Statements (Language Dependent)](#switch-statements-language-dependent)
    *   [Introduction](#introduction-1)
    *   [Example (JavaScript)](#example-javascript)
10. [Best Practices for Conditionals](#best-practices-for-conditionals)
11. [Practice Questions](#practice-questions)
    *   [Question 1](#question-1)
    *   [Question 2](#question-2)
    *   [Question 3](#question-3)
    *   [Question 4](#question-4)
    *   [Question 5](#question-5)
12. [Answers](#answers)

---

## 1. Introduction to Conditionals

**Key Concept:** Conditionals are fundamental control flow structures in programming that allow you to execute different blocks of code based on whether a specific condition is true or false. They enable your scripts to make decisions and respond dynamically to various situations.

**Why are they important?**
*   **Decision Making:** Allow programs to choose a path of execution.
*   **Dynamic Behavior:** Make web pages interactive and responsive.
*   **Error Handling:** Implement logic to deal with unexpected inputs or states.
*   **User Experience:** Tailor content or functionality based on user actions or preferences.

**Core Idea:** A conditional statement evaluates an expression (a condition). If the expression evaluates to `true`, a specific block of code is executed. Otherwise, that block is skipped.

---

## 2. The `if` Statement

**Learning Outcome:** Understand and apply the basic `if` statement to execute code conditionally.

### Syntax

```
if (condition) {
  // Code to be executed if the condition is true
}
```

### How it Works

*   The `condition` is an expression that evaluates to either `true` or `false`.
*   If the `condition` is `true`, the code block within the curly braces `{}` is executed.
*   If the `condition` is `false`, the code block is skipped, and the program continues executing the code after the `if` statement.

### Example

Let's consider a simple JavaScript example:

```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}

// Output: You are an adult.
```

**Explanation:**
*   The variable `age` is initialized to `20`.
*   The condition `age >= 18` evaluates to `true` (20 is greater than or equal to 18).
*   Therefore, the code inside the `if` block, `console.log("You are an adult.");`, is executed.

---

## 3. The `if...else` Statement

**Learning Outcome:** Extend conditional logic using the `if...else` statement to handle both true and false outcomes.

### Syntax

```
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}
```

### How it Works

*   The `if` part works the same as before.
*   If the `condition` is `true`, the code in the `if` block is executed, and the `else` block is skipped.
*   If the `condition` is `false`, the `if` block is skipped, and the code in the `else` block is executed.

### Example

Continuing with the age example:

```javascript
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Output: You are a minor.
```

**Explanation:**
*   The variable `age` is initialized to `16`.
*   The condition `age >= 18` evaluates to `false` (16 is not greater than or equal to 18).
*   Therefore, the `if` block is skipped, and the `else` block is executed, printing "You are a minor."

---

## 4. The `if...elif...else` Statement

**Learning Outcome:** Implement multi-way branching with the `if...elif...else` structure to check multiple conditions sequentially.

*(Note: The exact keywords might vary slightly between languages. For example, in Python it's `elif`, in JavaScript and Java it's `else if`.)*

### Syntax

```
if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition1 is false AND condition2 is true
} else if (condition3) {
  // Code if condition1 and condition2 are false AND condition3 is true
} else {
  // Code if all preceding conditions are false
}
```

### How it Works

*   The conditions are checked in order from top to bottom.
*   The first condition that evaluates to `true` will have its corresponding code block executed.
*   Once a block is executed, the rest of the `else if` and the final `else` blocks are skipped.
*   If none of the `if` or `else if` conditions are `true`, the final `else` block (if present) is executed.

### Example (JavaScript)

Let's grade a student based on their score:

```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Output: Grade: B
```

**Explanation:**
*   `score` is `85`.
*   `score >= 90` is `false`.
*   `score >= 80` is `true`. The code inside this `else if` block is executed, printing "Grade: B".
*   The remaining `else if` and `else` blocks are skipped.

---

## 5. Nested Conditionals

**Learning Outcome:** Structure complex logic by embedding conditional statements within other conditional statements.

### How it Works

*   You can place an `if`, `if...else`, or `if...elif...else` statement inside another conditional statement's code block.
*   This allows for checking multiple criteria or handling more nuanced scenarios.

### Example

Checking if a person can vote and if they are eligible for a senior discount:

```javascript
let age = 70;
let hasId = true;

if (age >= 18) {
  console.log("You are eligible to vote.");
  if (age >= 65 && hasId) {
    console.log("You are eligible for a senior discount.");
  } else {
    console.log("You are not eligible for a senior discount (or need ID).");
  }
} else {
  console.log("You are too young to vote.");
}

// Output:
// You are eligible to vote.
// You are eligible for a senior discount.
```

**Explanation:**
*   The outer `if` checks `age >= 18` (70 >= 18), which is `true`.
*   The inner `if` then checks `age >= 65 && hasId` (70 >= 65 and `true`), which is also `true`.
*   Both the outer `if` block and the inner `if` block are executed.

---

## 6. Comparison Operators

**Key Concepts:** These operators are used to compare values and return a boolean result (`true` or `false`). They are essential for forming conditions.

| Operator | Description                | Example       | Result (if x=5, y=10) |
| :------- | :------------------------- | :------------ | :-------------------- |
| `==`     | Equal to                   | `x == 5`      | `true`                |
| `===`    | Strictly equal to (value & type) | `x === "5"`   | `false`               |
| `!=`     | Not equal to               | `x != 10`     | `true`                |
| `!==`    | Strictly not equal to (value & type) | `x !== 5`     | `false`               |
| `>`      | Greater than               | `y > x`       | `true`                |
| `<`      | Less than                  | `x < y`       | `true`                |
| `>=`     | Greater than or equal to   | `x >= 5`      | `true`                |
| `<=`     | Less than or equal to      | `y <= 10`     | `true`                |

**Important Note:** Pay close attention to the difference between `==` (loose equality, which attempts type coercion) and `===` (strict equality, which checks both value and type without coercion). It's generally recommended to use `===` to avoid unexpected behavior.

---

## 7. Logical Operators

**Key Concepts:** These operators combine or modify boolean expressions, allowing you to create more complex conditions.

### AND (`&&` or `and`)

*   **Description:** Returns `true` if *both* operands are `true`.
*   **Example:** `(age >= 18) && (hasId === true)`

### OR (`||` or `or`)

*   **Description:** Returns `true` if *at least one* of the operands is `true`.
*   **Example:** `(day === "Saturday") || (day === "Sunday")`

### NOT (`!` or `not`)

*   **Description:** Reverses the boolean value of its operand. If the operand is `true`, it returns `false`, and vice-versa.
*   **Example:** `!isLoggedIn` (This condition is `true` if `isLoggedIn` is `false`)

**Example Combining Operators:**

```javascript
let temperature = 25;
let isSunny = true;

if (temperature > 20 && isSunny) {
  console.log("It's a great day for an outdoor activity!");
} else if (temperature <= 20 || !isSunny) {
  console.log("Maybe stay indoors or dress warmly.");
}

// Output: It's a great day for an outdoor activity!
```

---

## 8. Ternary Operator (Conditional Expression)

**Learning Outcome:** Utilize the concise ternary operator for simple conditional assignments or expressions.

### Syntax

```
condition ? expressionIfTrue : expressionIfFalse
```

### How it Works

*   It's a shorthand for a simple `if...else` statement.
*   The `condition` is evaluated.
*   If `condition` is `true`, the `expressionIfTrue` is returned.
*   If `condition` is `false`, the `expressionIfFalse` is returned.

### Example

Assigning a discount status:

```javascript
let price = 50;
let isMember = true;

// Using if...else
let discountStatus;
if (isMember) {
  discountStatus = "Eligible for discount";
} else {
  discountStatus = "Not eligible for discount";
}
console.log(discountStatus);

// Using ternary operator
let discountStatusTernary = isMember ? "Eligible for discount" : "Not eligible for discount";
console.log(discountStatusTernary);

// Output for both: Eligible for discount
```

**When to use:** Best for simple assignments or returning values when the logic is straightforward. Avoid for complex operations as it can reduce readability.

---

## 9. Switch Statements (Language Dependent)

**Learning Outcome:** Explore alternative control flow structures like `switch` statements for multi-way branching based on specific values.

### Introduction

*   A `switch` statement is an alternative to long `if...else if...else` chains when you need to compare a single variable against multiple possible values.
*   It can often lead to cleaner and more readable code in such scenarios.

### Example (JavaScript)

```javascript
let dayOfWeek = "Wednesday";
let dayNumber;

switch (dayOfWeek) {
  case "Monday":
    dayNumber = 1;
    break; // Exits the switch statement
  case "Tuesday":
    dayNumber = 2;
    break;
  case "Wednesday":
    dayNumber = 3;
    break;
  case "Thursday":
    dayNumber = 4;
    break;
  case "Friday":
    dayNumber = 5;
    break;
  case "Saturday":
  case "Sunday": // Multiple cases can lead to the same code
    dayNumber = 6;
    break;
  default: // If no other case matches
    dayNumber = 0;
}

console.log(`Day number for ${dayOfWeek}: ${dayNumber}`);

// Output: Day number for Wednesday: 3
```

**Key Components of `switch`:**

*   `switch (expression)`: The expression whose value will be compared.
*   `case value:`: A specific value to compare against the `expression`.
*   `break;`: **Crucial!** This statement exits the `switch` block. If omitted, the code will "fall through" and execute the next `case`'s code as well.
*   `default:`: This block executes if none of the `case` values match the `expression`. It's optional but good practice.

---

## 10. Best Practices for Conditionals

**Important Points to Remember:**

*   **Readability:** Write clear and concise conditions. Use meaningful variable names.
*   **Avoid Deep Nesting:** Too many nested `if` statements can make code hard to follow. Consider restructuring or using helper functions.
*   **Use Strict Equality (`===`):** Prefer `===` over `==` to prevent type coercion issues.
*   **Use `break` in `switch`:** Always remember to use `break` to prevent unintended fall-through.
*   **Consider the `default` Case:** For `switch` statements, include a `default` case to handle unexpected values.
*   **Order of `else if`:** Place the most common or most restrictive conditions first to potentially improve performance and logic flow.
*   **Ternary for Simplicity:** Use the ternary operator for simple assignments, not for complex logic.

---

## 11. Practice Questions

Answer the following questions based on your understanding of conditionals.

### Question 1

Write an `if` statement in JavaScript that checks if a variable `temperature` is below 0 degrees Celsius. If it is, print "It's freezing!".

### Question 2

Using an `if...else` statement, check if a variable `isLoggedIn` is `true`. If it is, print "Welcome back!"; otherwise, print "Please log in."

### Question 3

Create an `if...else if...else` structure to determine if a number `userRating` (between 1 and 5) corresponds to:
*   "Excellent" if `userRating` is 5.
*   "Good" if `userRating` is 4.
*   "Average" if `userRating` is 3.
*   "Poor" if `userRating` is 2.
*   "Terrible" if `userRating` is 1.

### Question 4

Given `let score = 75;` and `let attendance = 90;`, write a single conditional statement using logical operators to determine if a student passes. A student passes if their `score` is 60 or above AND their `attendance` is 80 or above. Print "Student passes" or "Student fails".

### Question 5

Use the ternary operator to assign a value to a variable `message`. If a variable `isWeekend` is `true`, `message` should be "Have a relaxing weekend!". Otherwise, it should be "Have a productive week!".

---

## 12. Answers

### Answer 1

```javascript
let temperature = -5;

if (temperature < 0) {
  console.log("It's freezing!");
}
```

### Answer 2

```javascript
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}
```

### Answer 3

```javascript
let userRating = 4;
let ratingMessage;

if (userRating === 5) {
  ratingMessage = "Excellent";
} else if (userRating === 4) {
  ratingMessage = "Good";
} else if (userRating === 3) {
  ratingMessage = "Average";
} else if (userRating === 2) {
  ratingMessage = "Poor";
} else if (userRating === 1) {
  ratingMessage = "Terrible";
} else {
  ratingMessage = "Invalid rating"; // Good practice to include for unexpected values
}

console.log(ratingMessage);
```

### Answer 4

```javascript
let score = 75;
let attendance = 90;

if (score >= 60 && attendance >= 80) {
  console.log("Student passes");
} else {
  console.log("Student fails");
}
```

### Answer 5

```javascript
let isWeekend = false;
let message = isWeekend ? "Have a relaxing weekend!" : "Have a productive week!";

console.log(message);
