---
title: "Selection Methods"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0cd"
status: "completed"
scrapedAt: "2026-05-20T17:12:50.298Z"
---
# Web Programming: Module 2 - Scripting Languages: Selection Methods

## 1. Introduction to Selection Methods

Selection methods, also known as **conditional statements** or **decision-making structures**, are fundamental building blocks in any scripting language. They allow your programs to execute different blocks of code based on whether certain conditions are true or false. This enables your web applications to respond dynamically to user input, data, or other factors.

**Key Concept:** The core idea behind selection is to **control the flow of execution**. Instead of running code strictly sequentially, selection methods introduce branching paths.

**Analogy:** Think of it like a crossroads. You reach a point where you need to decide whether to go left or right. Selection methods in programming are the digital crossroads that guide your program's journey.

---

## 2. Learning Outcomes Covered

This document aims to help you understand and utilize selection methods effectively. Specifically, we will cover:

*   **Understanding the purpose and necessity of selection methods in scripting languages.**
*   **Identifying and explaining different types of selection statements (e.g., `if`, `else`, `else if`, `switch`).**
*   **Constructing logical expressions and using comparison operators to evaluate conditions.**
*   **Applying selection statements to solve common programming problems.**
*   **Writing clear, concise, and readable code using appropriate indentation and syntax for selection structures.**

---

## 3. Core Concepts and Definitions

### 3.1. Conditions

A **condition** is an expression that evaluates to either `true` or `false`. These conditions are the basis for making decisions in your code.

### 3.2. Boolean Values

Boolean values are the two possible outcomes of a condition: `true` and `false`.

### 3.3. Comparison Operators

Comparison operators are used to compare two values and return a boolean result.

| Operator | Description           | Example     | Result (if x=5, y=10) |
| :------- | :-------------------- | :---------- | :-------------------- |
| `==`     | Equal to              | `x == y`    | `false`               |
| `!=`     | Not equal to          | `x != y`    | `true`                |
| `>`      | Greater than          | `x > y`     | `false`               |
| `<`      | Less than             | `x < y`     | `true`                |
| `>=`     | Greater than or equal | `x >= y`    | `false`               |
| `<=`     | Less than or equal    | `x <= y`    | `true`                |

**Important Note:** In many scripting languages (like JavaScript), the `==` operator performs type coercion before comparison, while `===` performs a strict comparison (checks both value and type). It's generally recommended to use `===` for clarity and to avoid unexpected behavior.

### 3.4. Logical Operators

Logical operators combine multiple boolean expressions to create more complex conditions.

| Operator | Description       | Example (if a=true, b=false) | Result |
| :------- | :---------------- | :----------------------------- | :----- |
| `&&`     | Logical AND       | `a && b`                       | `false`|
| `||`     | Logical OR        | `a || b`                       | `true` |
| `!`      | Logical NOT       | `!a`                           | `false`|

---

## 4. Types of Selection Statements

### 4.1. The `if` Statement

The `if` statement is the most basic selection statement. It executes a block of code only if its associated condition is `true`.

**Syntax (General):**

```
if (condition) {
  // code to execute if condition is true
}
```

**Example (JavaScript):**

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
```

**Explanation:**
*   The condition `age >= 18` evaluates to `true` because `18` is greater than or equal to `18`.
*   Therefore, the code inside the curly braces (`console.log("You are an adult.");`) is executed.

### 4.2. The `if...else` Statement

The `if...else` statement provides an alternative block of code to execute when the `if` condition is `false`.

**Syntax (General):**

```
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
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

**Explanation:**
*   The condition `temperature > 30` evaluates to `false` because `25` is not greater than `30`.
*   Therefore, the code inside the `else` block (`console.log("It's a pleasant day.");`) is executed.

### 4.3. The `if...else if...else` Statement

This structure allows you to check multiple conditions in a sequential manner. The first condition that evaluates to `true` will have its corresponding code block executed, and the rest of the `else if` and `else` blocks will be skipped.

**Syntax (General):**

```
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition1 is false AND condition2 is true
} else {
  // code to execute if all previous conditions are false
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

**Explanation:**
*   `score >= 90` is false.
*   `score >= 80` is false.
*   `score >= 70` is true. The code block assigns `"C"` to `grade`, and the remaining `else if` and `else` blocks are skipped.

### 4.4. The `switch` Statement

The `switch` statement is useful when you need to compare a single variable against multiple possible values. It can often be a more readable alternative to a long `if...else if...else` chain.

**Syntax (General):**

```
switch (expression) {
  case value1:
    // code to execute if expression matches value1
    break; // Exits the switch statement
  case value2:
    // code to execute if expression matches value2
    break;
  // ... more cases
  default:
    // code to execute if no cases match
}
```

**Key Concepts for `switch`:**

*   **`expression`**: The value to be compared.
*   **`case`**: Specifies a particular value to compare against the `expression`.
*   **`break`**: Crucial for exiting the `switch` statement after a match is found. Without `break`, the code will "fall through" and execute subsequent `case` blocks (which is rarely desired).
*   **`default`**: An optional clause that executes if none of the `case` values match the `expression`.

**Example (JavaScript):**

```javascript
let day = "Monday";
let dayType;

switch (day) {
  case "Saturday":
  case "Sunday":
    dayType = "Weekend";
    break;
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    dayType = "Weekday";
    break;
  default:
    dayType = "Invalid day";
}

console.log("Today is a " + dayType); // Output: Today is a Weekday
```

**Explanation:**
*   The `switch` statement compares the `day` variable ("Monday") with each `case`.
*   It matches the `case "Monday":`.
*   The code block assigns `"Weekday"` to `dayType`.
*   The `break` statement then exits the `switch` statement.

**Important Point:** The `switch` statement performs **strict equality comparison** (`===`) in most languages.

---

## 5. Practice Questions and Exercises

**Instructions:** For each question, write the JavaScript code to achieve the desired outcome.

**Question 1:**
Write a script that checks if a number is positive, negative, or zero.
*   If the number is greater than 0, print "Positive".
*   If the number is less than 0, print "Negative".
*   Otherwise, print "Zero".

**Question 2:**
Write a script that determines the season based on the month. Assume the following:
*   December, January, February: Winter
*   March, April, May: Spring
*   June, July, August: Summer
*   September, October, November: Autumn

**Question 3:**
Write a script that takes a user's age and prints one of the following:
*   "Child" if age is less than 13
*   "Teenager" if age is between 13 and 19 (inclusive)
*   "Adult" if age is 20 or older

**Question 4:**
Using a `switch` statement, write a script that takes a day of the week (e.g., "Monday", "Tuesday") and prints "Workday" for Monday-Friday and "Weekend" for Saturday and Sunday. Handle invalid day inputs with "Invalid day".

---

## 6. Answers to Practice Questions

**Answer 1 (JavaScript):**

```javascript
let number = -10; // You can change this value

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
```

**Answer 2 (JavaScript):**

```javascript
let month = "July"; // You can change this value
let season;

if (month === "December" || month === "January" || month === "February") {
  season = "Winter";
} else if (month === "March" || month === "April" || month === "May") {
  season = "Spring";
} else if (month === "June" || month === "July" || month === "August") {
  season = "Summer";
} else if (month === "September" || month === "October" || month === "November") {
  season = "Autumn";
} else {
  season = "Invalid month";
}

console.log("The season is: " + season);
```

**Answer 3 (JavaScript):**

```javascript
let userAge = 15; // You can change this value
let category;

if (userAge < 13) {
  category = "Child";
} else if (userAge >= 13 && userAge <= 19) {
  category = "Teenager";
} else {
  category = "Adult";
}

console.log("You are a: " + category);
```

**Answer 4 (JavaScript):**

```javascript
let dayOfWeek = "Saturday"; // You can change this value
let dayCategory;

switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    dayCategory = "Workday";
    break;
  case "Saturday":
  case "Sunday":
    dayCategory = "Weekend";
    break;
  default:
    dayCategory = "Invalid day";
}

console.log("Today is a: " + dayCategory);
```

---

## 7. Important Points to Remember

*   **Indentation is Crucial:** While not always strictly enforced by the interpreter, proper indentation makes your code readable and helps you visualize the flow of control.
*   **`break` in `switch`:** Always use `break` in `switch` statements to prevent unintended "fall-through" behavior.
*   **`===` vs. `==`:** Prefer the strict equality operator (`===`) to avoid type coercion issues.
*   **Nested Conditionals:** You can place selection statements inside other selection statements to create more complex decision-making logic.
*   **Logical Operators:** Combine conditions effectively using `&&` (AND), `||` (OR), and `!` (NOT).
*   **Readability:** Choose the appropriate selection structure (`if-else if-else` or `switch`) for clarity and maintainability. A `switch` statement is often preferred for checking a single variable against multiple discrete values.

---

This concludes the study notes for Selection Methods in Module 2 of Web Programming. Master these concepts, and you'll unlock the ability to create truly interactive and dynamic web experiences!
