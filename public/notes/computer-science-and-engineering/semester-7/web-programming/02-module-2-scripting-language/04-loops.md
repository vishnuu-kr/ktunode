---
title: "Loops"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0c6"
status: "completed"
scrapedAt: "2026-05-20T17:12:43.653Z"
---
# Module 2: Scripting Languages - Loops

This module delves into the fundamental concept of **loops** in scripting languages, a crucial tool for automating repetitive tasks and controlling program flow.

---

## Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the purpose and necessity of loops in scripting.
*   Identify and explain the different types of loops available in scripting languages (e.g., `for`, `while`, `do-while`).
*   Construct loop statements correctly in various scripting languages.
*   Utilize loop control statements (`break`, `continue`) to modify loop behavior.
*   Apply loops to solve common programming problems.

---

## 1. Purpose and Necessity of Loops

**What are Loops?**

Loops are control flow statements that allow a block of code to be executed repeatedly based on a given condition. They are essential for automating tasks that would otherwise require writing the same code multiple times.

**Why are Loops Necessary?**

*   **Automation:** Eliminate manual repetition of code.
*   **Efficiency:** Write more concise and maintainable code.
*   **Data Processing:** Iterate over collections of data (arrays, lists, strings) to perform operations on each element.
*   **Conditional Execution:** Repeat actions as long as a specific condition remains true.

---

## 2. Types of Loops

Scripting languages typically offer several types of loops, each suited for different scenarios. We will focus on the most common ones.

### 2.1. `for` Loop

**Description:**
The `for` loop is generally used when you know in advance how many times you want to execute a block of code. It typically involves an initialization, a condition, and an increment/decrement step.

**Syntax (General):**

```
for (initialization; condition; increment/decrement) {
  // Code to be executed repeatedly
}
```

**Key Components:**

*   **Initialization:** Executed once at the beginning of the loop. Often used to declare and initialize a loop counter.
*   **Condition:** Evaluated before each iteration. If true, the loop body executes; if false, the loop terminates.
*   **Increment/Decrement:** Executed after each iteration. Typically updates the loop counter.

**Examples:**

**JavaScript:**

```javascript
// Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i); // Output: 1, 2, 3, 4, 5
}

// Iterate over an array
const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Output: Apple, Banana, Cherry
}
```

**Python:**

```python
# Print numbers from 1 to 5
for i in range(1, 6): # range(start, stop) - stop is exclusive
  print(i) # Output: 1, 2, 3, 4, 5

# Iterate over a list
fruits = ["Apple", "Banana", "Cherry"]
for fruit in fruits:
  print(fruit) # Output: Apple, Banana, Cherry
```

**PHP:**

```php
<?php
// Print numbers from 1 to 5
for ($i = 1; $i <= 5; $i++) {
  echo $i . "<br>"; // Output: 1, 2, 3, 4, 5 (with line breaks)
}

// Iterate over an array
$fruits = array("Apple", "Banana", "Cherry");
foreach ($fruits as $fruit) {
  echo $fruit . "<br>"; // Output: Apple, Banana, Cherry
}
?>
```
*Note: PHP also has a `foreach` loop specifically for arrays and objects, which is often more convenient.*

### 2.2. `while` Loop

**Description:**
The `while` loop executes a block of code as long as a specified condition is true. The condition is checked *before* each iteration. If the condition is initially false, the loop body will not execute at all.

**Syntax (General):**

```
while (condition) {
  // Code to be executed repeatedly
  // Ensure the condition eventually becomes false
}
```

**Key Components:**

*   **Condition:** Evaluated before each iteration. If true, the loop body executes.

**Examples:**

**JavaScript:**

```javascript
// Count down from 5
let count = 5;
while (count > 0) {
  console.log(count); // Output: 5, 4, 3, 2, 1
  count--; // Important: decrement count to avoid infinite loop
}
```

**Python:**

```python
# Count down from 5
count = 5
while count > 0:
  print(count) # Output: 5, 4, 3, 2, 1
  count -= 1 # Important: decrement count to avoid infinite loop
```

**PHP:**

```php
<?php
// Count down from 5
$count = 5;
while ($count > 0) {
  echo $count . "<br>"; // Output: 5, 4, 3, 2, 1
  $count--; // Important: decrement count to avoid infinite loop
}
?>
```

### 2.3. `do-while` Loop

**Description:**
The `do-while` loop is similar to the `while` loop, but it guarantees that the loop body will execute at least *once* before the condition is checked. This is because the condition is evaluated *after* the loop body.

**Syntax (General):**

```
do {
  // Code to be executed at least once
  // Ensure the condition eventually becomes false
} while (condition);
```

**Key Components:**

*   **Code Block:** Executes at least once.
*   **Condition:** Evaluated after each iteration. If true, the loop continues; if false, the loop terminates.

**Examples:**

**JavaScript:**

```javascript
// Example: Ask for input until a valid number is entered
let userInput;
do {
  userInput = prompt("Enter a number:");
  // In a real scenario, you'd validate userInput here
} while (isNaN(userInput)); // Loop continues as long as userInput is NOT a number

console.log("You entered:", userInput);
```

**Python:**
*Python does not have a direct `do-while` loop construct.* However, you can achieve the same behavior using a `while True` loop with a `break` statement.

```python
# Python equivalent of do-while
while True:
  userInput = input("Enter a number: ")
  # In a real scenario, you'd validate userInput here
  if not userInput.isdigit(): # Check if it's a number
    print("Invalid input. Please try again.")
  else:
    break # Exit the loop if input is valid

print("You entered:", userInput)
```

**PHP:**

```php
<?php
// Example: Ask for input until a valid number is entered
$userInput = null;
do {
  $userInput = readline("Enter a number: ");
  // In a real scenario, you'd validate $userInput here
  if (!is_numeric($userInput)) {
    echo "Invalid input. Please try again.\n";
  }
} while (!is_numeric($userInput)); // Loop continues as long as userInput is NOT numeric

echo "You entered: " . $userInput . "\n";
?>
```

---

## 3. Loop Control Statements

Loop control statements are used to alter the normal flow of execution within a loop.

### 3.1. `break` Statement

**Description:**
The `break` statement immediately terminates the innermost enclosing loop (`for`, `while`, `do-while`) or `switch` statement. Execution continues with the statement immediately following the terminated loop.

**When to Use:**

*   When a specific condition is met within the loop, and further iterations are unnecessary.
*   To exit a loop prematurely.

**Examples:**

**JavaScript:**

```javascript
// Search for a specific number in an array and stop once found
const numbers = [10, 20, 30, 40, 50];
const target = 30;
let found = false;

for (let i = 0; i < numbers.length; i++) {
  console.log("Checking:", numbers[i]);
  if (numbers[i] === target) {
    console.log("Found it!");
    found = true;
    break; // Exit the loop as soon as the target is found
  }
}

if (!found) {
  console.log("Target not found.");
}
```

**Python:**

```python
# Search for a specific number in a list and stop once found
numbers = [10, 20, 30, 40, 50]
target = 30

for number in numbers:
  print("Checking:", number)
  if number == target:
    print("Found it!")
    break # Exit the loop as soon as the target is found

```

**PHP:**

```php
<?php
// Search for a specific number in an array and stop once found
$numbers = array(10, 20, 30, 40, 50);
$target = 30;
$found = false;

foreach ($numbers as $number) {
  echo "Checking: " . $number . "\n";
  if ($number == $target) {
    echo "Found it!\n";
    $found = true;
    break; // Exit the loop as soon as the target is found
  }
}

if (!$found) {
  echo "Target not found.\n";
}
?>
```

### 3.2. `continue` Statement

**Description:**
The `continue` statement skips the rest of the current iteration of the loop and proceeds to the next iteration. The loop condition is re-evaluated.

**When to Use:**

*   When you want to skip processing for certain elements or under specific conditions but want the loop to continue.
*   To avoid executing certain code blocks within an iteration.

**Examples:**

**JavaScript:**

```javascript
// Print only the even numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) { // If i is odd
    continue; // Skip the rest of the loop body for this iteration
  }
  console.log(i); // Output: 2, 4, 6, 8, 10
}
```

**Python:**

```python
# Print only the even numbers from 1 to 10
for i in range(1, 11):
  if i % 2 != 0: # If i is odd
    continue # Skip the rest of the loop body for this iteration
  print(i) # Output: 2, 4, 6, 8, 10
```

**PHP:**

```php
<?php
// Print only the even numbers from 1 to 10
for ($i = 1; $i <= 10; $i++) {
  if ($i % 2 != 0) { // If i is odd
    continue; // Skip the rest of the loop body for this iteration
  }
  echo $i . "<br>"; // Output: 2, 4, 6, 8, 10
}
?>
```

---

## 4. Applying Loops to Solve Problems

Loops are fundamental for solving many common programming tasks.

### 4.1. Iterating Over Data Structures

**Problem:** Calculate the sum of all numbers in an array.

**JavaScript:**

```javascript
const numbers = [5, 10, 15, 20];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Sum:", sum); // Output: Sum: 50
```

**Python:**

```python
numbers = [5, 10, 15, 20]
total_sum = 0

for number in numbers:
  total_sum += number

print("Sum:", total_sum) # Output: Sum: 50
```

**PHP:**

```php
<?php
$numbers = array(5, 10, 15, 20);
$sum = 0;

foreach ($numbers as $number) {
  $sum += $number;
}

echo "Sum: " . $sum; // Output: Sum: 50
?>
```

### 4.2. Generating Sequences

**Problem:** Create a list of the first 10 Fibonacci numbers.

**JavaScript:**

```javascript
function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextFib = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextFib);
  }
  return fibSequence;
}

console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

**Python:**

```python
def generate_fibonacci(n):
  if n <= 0:
    return []
  if n == 1:
    return [0]

  fib_sequence = [0, 1]
  for i in range(2, n):
    next_fib = fib_sequence[i - 1] + fib_sequence[i - 2]
    fib_sequence.append(next_fib)
  return fib_sequence

print(generate_fibonacci(10)) # Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### 4.3. Input Validation

**Problem:** Keep asking the user for input until they enter a positive number.

**JavaScript:**

```javascript
let positiveNumber;
do {
  positiveNumber = parseInt(prompt("Enter a positive number:"));
  if (isNaN(positiveNumber) || positiveNumber <= 0) {
    alert("Invalid input. Please enter a positive number.");
  }
} while (isNaN(positiveNumber) || positiveNumber <= 0);

console.log("You entered:", positiveNumber);
```

**Python:**

```python
while True:
  try:
    user_input = int(input("Enter a positive number: "))
    if user_input > 0:
      break # Exit loop if input is a positive number
    else:
      print("Please enter a POSITIVE number.")
  except ValueError:
    print("Invalid input. Please enter a number.")

print("You entered:", user_input)
```

---

## 5. Practice Questions and Exercises

**Instructions:** Attempt the following questions. Try to write the code in your preferred scripting language (JavaScript, Python, or PHP).

**Question 1:**
Write a `for` loop that prints all even numbers from 10 to 30 (inclusive).

**Question 2:**
Write a `while` loop that counts down from 10 to 1 and prints "Blast off!" after the countdown.

**Question 3:**
Write a loop that iterates through the string "Programming" and prints each character.

**Question 4:**
Using a `for` loop and the `continue` statement, print all odd numbers from 1 to 20.

**Question 5:**
Using a `for` loop and the `break` statement, search for the number 7 in the array `[1, 3, 5, 7, 9, 11]`. Once found, print "Found 7!" and exit the loop. If not found, print "7 not in the array."

**Question 6 (Conceptual):**
When would you choose a `for` loop over a `while` loop?

---

## Answers to Practice Questions

**Answer 1 (Example in JavaScript):**

```javascript
for (let i = 10; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

**Answer 2 (Example in Python):**

```python
count = 10
while count >= 1:
  print(count)
  count -= 1
print("Blast off!")
```

**Answer 3 (Example in PHP):**

```php
<?php
$text = "Programming";
for ($i = 0; $i < strlen($text); $i++) {
  echo $text[$i] . "<br>";
}
?>
```

**Answer 4 (Example in JavaScript):**

```javascript
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) { // If the number is even
    continue;      // Skip to the next iteration
  }
  console.log(i); // Prints only odd numbers
}
```

**Answer 5 (Example in Python):**

```python
numbers = [1, 3, 5, 7, 9, 11]
found_seven = False
for number in numbers:
  if number == 7:
    print("Found 7!")
    found_seven = True
    break
if not found_seven:
  print("7 not in the array.")
```

**Answer 6 (Conceptual):**
You would choose a `for` loop when you know the number of iterations in advance or when you need to iterate over a sequence with a defined start, end, and step (like counting from 1 to 10). A `while` loop is more suitable when the number of iterations is not known beforehand and depends on a condition that might change during the loop's execution (e.g., reading input until a specific value is entered).

---

## Important Points to Remember

*   **Infinite Loops:** Be careful not to create infinite loops! Ensure that the condition controlling your loop will eventually become false. This is a common programming error.
*   **Loop Counter:** When using `for` loops, pay attention to the initialization, condition, and increment/decrement steps. Off-by-one errors are frequent here.
*   **`break` vs. `continue`:** Understand the distinct actions of `break` (exits the loop entirely) and `continue` (skips the current iteration).
*   **`while` vs. `do-while`:** Remember that `do-while` guarantees at least one execution of the loop body, whereas `while` might not execute at all if the condition is initially false.
*   **Readability:** Choose the loop type that best expresses the intent of your code. `foreach` loops (common in PHP and other languages for arrays) are often more readable for iterating over collections than traditional `for` loops with index manipulation.
*   **Scope:** Variables declared within a loop (e.g., `let i` in JavaScript) typically have block scope and are only accessible within that loop.

---
This concludes our study of loops in scripting languages. Mastering loops is fundamental to writing efficient and powerful web programs.
