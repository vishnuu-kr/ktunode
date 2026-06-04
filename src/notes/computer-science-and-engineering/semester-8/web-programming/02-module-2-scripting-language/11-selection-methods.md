---
title: "Selection Methods"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc2d"
status: "completed"
scrapedAt: "2026-05-20T17:28:20.033Z"
---
# WEB PROGRAMMING: Module 2: Scripting Language - Selection Methods

---

## Module Overview

This module delves into the fundamental building blocks of scripting languages used in web programming. We will explore how scripts make dynamic decisions and control the flow of execution based on certain conditions. This topic focuses specifically on **Selection Methods**, which are crucial for creating interactive and intelligent web applications.

---

## Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of conditional execution** in scripting languages.
*   **Identify and explain the purpose of selection statements** (e.g., `if`, `else`, `else if`, `switch`).
*   **Implement simple and complex conditional logic** using these statements.
*   **Utilize comparison operators and logical operators** within selection statements.
*   **Understand the role of Boolean expressions** in decision-making.
*   **Apply nested selection statements** for multi-level decision-making.
*   **Differentiate between various selection control structures** and choose the most appropriate one for a given scenario.

---

## 1. Introduction to Conditional Execution

In web programming, it's often necessary for our scripts to make decisions based on specific conditions. This allows web pages to behave differently depending on user input, data values, or environmental factors. **Conditional execution** is the process of executing certain blocks of code only when a particular condition is met.

### Key Concepts:

*   **Condition:** A statement that evaluates to either `true` or `false`.
*   **Boolean Expression:** An expression that results in a Boolean value (`true` or `false`).
*   **Control Flow:** The order in which statements are executed in a program.

---

## 2. Selection Statements (Control Structures)

Selection statements, also known as **conditional statements** or **decision-making statements**, are the core of conditional execution. They allow scripts to choose which block of code to execute based on the evaluation of a condition.

### 2.1 The `if` Statement

The `if` statement is the most basic selection statement. It executes a block of code only if the specified condition is `true`.

**Syntax (General):**

```
if (condition) {
  // Code to execute if condition is true
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
In this example, if the `age` variable is greater than or equal to 18, the message "You are an adult." will be printed to the console. If `age` is less than 18, the code inside the `if` block will be skipped.

### 2.2 The `if...else` Statement

The `if...else` statement provides an alternative block of code to execute when the `if` condition is `false`.

**Syntax (General):**

```
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

**Example (JavaScript):**

```javascript
let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("The temperature is pleasant.");
}
```

**Explanation:**
If `temperature` is greater than 30, "It's a hot day!" is displayed. Otherwise (if `temperature` is 30 or less), "The temperature is pleasant." is displayed.

### 2.3 The `if...else if...else` Statement

This statement allows for a series of conditions to be checked in sequence. The first condition that evaluates to `true` will have its corresponding code block executed, and the rest will be skipped. An optional `else` block can be included to handle cases where none of the preceding conditions are met.

**Syntax (General):**

```
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition1 is false AND condition2 is true
} else if (condition3) {
  // Code to execute if condition1 and condition2 are false AND condition3 is true
} else {
  // Code to execute if all preceding conditions are false
}
```

**Example (JavaScript):**

```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: Below C");
}
```

**Explanation:**
The script checks the `score`. Since 85 is not >= 90 but is >= 80, it will print "Grade: B".

### 2.4 The `switch` Statement

The `switch` statement provides a more efficient way to handle multiple possible values for a single variable or expression. It compares a variable/expression against a series of **cases**.

**Syntax (General):**

```
switch (expression) {
  case value1:
    // Code to execute if expression matches value1
    break; // Exits the switch statement
  case value2:
    // Code to execute if expression matches value2
    break;
  // ... more cases
  default:
    // Code to execute if no case matches
}
```

**Key Points about `switch`:**

*   **`expression`**: The variable or value to be compared.
*   **`case value`**: A specific value to compare against the `expression`.
*   **`break`**: Crucial keyword. It terminates the `switch` statement after a matching `case` is found and executed. Without `break`, execution will "fall through" to the next `case`.
*   **`default`**: An optional case that executes if none of the `case` values match the `expression`.

**Example (JavaScript):**

```javascript
let dayOfWeek = "Monday";
let message;

switch (dayOfWeek) {
  case "Monday":
    message = "Start of the week!";
    break;
  case "Friday":
    message = "Almost the weekend!";
    break;
  case "Saturday":
  case "Sunday":
    message = "Weekend vibes!";
    break;
  default:
    message = "Just another day.";
}

console.log(message); // Output: Start of the week!
```

**Explanation:**
The `switch` statement checks the value of `dayOfWeek`. Since it matches "Monday", the code within that `case` is executed, setting `message` to "Start of the week!". The `break` statement then exits the `switch`. Notice how "Saturday" and "Sunday" share the same code block due to the absence of `break` between them, demonstrating "fall-through".

---

## 3. Comparison and Logical Operators

Selection methods heavily rely on **Boolean expressions**. These expressions are built using comparison and logical operators.

### 3.1 Comparison Operators

These operators compare two values and return `true` or `false`.

| Operator | Description                | Example        | Result |
| :------- | :------------------------- | :------------- | :----- |
| `==`     | Equal to (value)           | `5 == 5`       | `true` |
| `===`    | Strictly equal to (value & type) | `5 === "5"`    | `false`|
| `!=`     | Not equal to (value)       | `5 != 3`       | `true` |
| `!==`    | Strictly not equal to (value & type) | `5 !== "5"` | `true` |
| `>`      | Greater than               | `10 > 5`       | `true` |
| `<`      | Less than                  | `5 < 10`       | `true` |
| `>=`     | Greater than or equal to   | `10 >= 10`     | `true` |
| `<=`     | Less than or equal to      | `5 <= 10`      | `true` |

**Important Note on `==` vs. `===` (JavaScript):**
*   `==` performs type coercion. For example, `5 == "5"` is `true` because the string "5" is converted to a number before comparison.
*   `===` (Strict Equality) does **not** perform type coercion. `5 === "5"` is `false` because the types are different. It's generally recommended to use `===` for safer comparisons.

### 3.2 Logical Operators

These operators combine or modify Boolean expressions.

| Operator | Description               | Example        | Result |
| :------- | :------------------------ | :------------- | :----- |
| `&&`     | Logical AND               | `(5 > 3) && (2 < 4)` | `true` |
| `||`     | Logical OR                | `(5 > 3) || (2 > 4)` | `true` |
| `!`      | Logical NOT (negation)    | `!(5 > 3)`     | `false`|

**Example (JavaScript):**

```javascript
let isSunny = true;
let isWarm = false;

if (isSunny && isWarm) {
  console.log("Perfect day for a picnic!");
}

if (isSunny || isWarm) {
  console.log("Enjoy the outdoors!");
}

if (!isWarm) {
  console.log("It's not warm.");
}
```

---

## 4. Nested Selection Statements

You can place selection statements inside other selection statements to create more complex decision-making logic. This is known as **nesting**.

**Example (JavaScript):**

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18) {
  console.log("You are old enough to drive.");
  if (hasLicense) {
    console.log("You can drive legally.");
  } else {
    console.log("You need to get a driver's license.");
  }
} else {
  console.log("You are too young to drive.");
}
```

**Explanation:**
The outer `if` checks if the `age` is 18 or over. If it is, the inner `if` then checks if `hasLicense` is `true`. This allows for a more granular decision process.

---

## 5. Choosing the Right Selection Method

*   Use `if` when you only need to execute code if a single condition is true.
*   Use `if...else` when you need to execute one block of code if a condition is true and another if it's false.
*   Use `if...else if...else` for a series of mutually exclusive conditions.
*   Use `switch` when you are checking a single variable or expression against multiple distinct values. It can be more readable and efficient than a long `if...else if` chain for such scenarios.

---

## 6. Practice Questions and Exercises

**Question 1:**
Write a JavaScript `if` statement that checks if a variable `userAge` is less than 13. If it is, print "You are a child." to the console.

**Question 2:**
Write a JavaScript `if...else` statement that checks if a variable `isLoggedIn` is `true`. If it is, print "Welcome back!", otherwise print "Please log in."

**Question 3:**
Write a JavaScript `if...else if...else` statement that assigns a letter grade based on a `testScore`:
*   Score >= 90: "A"
*   Score >= 80 and < 90: "B"
*   Score >= 70 and < 80: "C"
*   Otherwise: "F"

**Question 4:**
Write a JavaScript `switch` statement that takes a `monthNumber` (1-12) and prints the name of the month. Use a `default` case for invalid month numbers.

**Question 5:**
What is the output of the following JavaScript code?

```javascript
let x = 10;
let y = "10";

if (x === y) {
  console.log("Strictly equal");
} else if (x == y) {
  console.log("Loosely equal");
} else {
  console.log("Not equal");
}
```

---

## Answers to Practice Questions

**Answer 1:**

```javascript
let userAge = 10; // Example value

if (userAge < 13) {
  console.log("You are a child.");
}
```

**Answer 2:**

```javascript
let isLoggedIn = false; // Example value

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}
```

**Answer 3:**

```javascript
let testScore = 85; // Example value
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) { // Implicitly less than 90 because of the previous check
  grade = "B";
} else if (testScore >= 70) { // Implicitly less than 80
  grade = "C";
} else {
  grade = "F";
}

console.log("Your grade is: " + grade); // Output: Your grade is: B
```

**Answer 4:**

```javascript
let monthNumber = 7; // Example value
let monthName;

switch (monthNumber) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month number";
}

console.log("Month: " + monthName); // Output: Month: July
```

**Answer 5:**

The output will be:
```
Loosely equal
```
**Explanation:**
*   `x === y`: `10 === "10"` is `false` because the types are different (number vs. string).
*   `x == y`: `10 == "10"` is `true` because the `==` operator performs type coercion, converting the string "10" to the number 10 for comparison. The `else if` block is executed.

---

## Important Points to Remember

*   **Boolean Expressions are Key:** All selection methods rely on conditions that evaluate to `true` or `false`.
*   **Comparison vs. Strict Comparison:** In languages like JavaScript, understand the difference between `==` (loose equality) and `===` (strict equality) and prefer `===`.
*   **`break` in `switch`:** Always remember to use `break` in `switch` statements to prevent unintended fall-through.
*   **Nesting for Complexity:** Nested statements allow for sophisticated decision trees but can become hard to read if overused.
*   **Readability:** Choose the control structure that best expresses your logic and makes your code easy to understand.

---
This concludes Module 2, Topic: Selection Methods. These concepts are foundational for building interactive and dynamic web applications.
