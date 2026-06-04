---
title: "Control Statements - Selection Statements, Iteration Statements and Jump Statements."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f3600a"
status: "completed"
scrapedAt: "2026-05-23T16:17:31.785Z"
---
# Object-Oriented Programming: Module 2 - Core Java Fundamentals
## Topic: Control Statements - Selection, Iteration, and Jump Statements

---

### **Introduction**

In Java, control statements are fundamental to directing the flow of execution within a program. They allow us to make decisions, repeat actions, and transfer control to different parts of the code. This module will focus on the three main categories of control statements: Selection Statements, Iteration Statements, and Jump Statements. Understanding these statements is crucial for building dynamic and responsive Java applications, directly contributing to **Course Outcome CO2: Utilise datatypes, operators, control statements, object-oriented class, concepts, I/O basics in Java to develop programs. (Knowledge Level: K3)**.

---

### **1. Selection Statements (Decision Making)**

Selection statements allow a program to execute different blocks of code based on whether a certain condition is true or false. This enables programs to make decisions.

#### **1.1. `if` Statement**

The `if` statement is the most basic conditional statement. It executes a block of code only if a specified boolean expression evaluates to `true`.

**Syntax:**

```java
if (condition) {
    // Code to be executed if condition is true
}
```

**Example:**

```java
int age = 20;
if (age >= 18) {
    System.out.println("You are an adult.");
}
```

#### **1.2. `if-else` Statement**

The `if-else` statement provides an alternative block of code to execute if the `if` condition is `false`.

**Syntax:**

```java
if (condition) {
    // Code to be executed if condition is true
} else {
    // Code to be executed if condition is false
}
```

**Example:**

```java
int marks = 75;
if (marks >= 40) {
    System.out.println("You passed.");
} else {
    System.out.println("You failed.");
}
```

#### **1.3. `if-else if-else` Ladder**

This structure allows you to check multiple conditions sequentially. The first `true` condition's block is executed, and the rest of the ladder is skipped. If no condition is `true`, the `else` block (if present) is executed.

**Syntax:**

```java
if (condition1) {
    // Code for condition1
} else if (condition2) {
    // Code for condition2
} else if (condition3) {
    // Code for condition3
} else {
    // Default code if no condition is true
}
```

**Example:**

```java
int score = 85;
if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: D");
}
```

#### **1.4. Nested `if` Statements**

An `if` or `if-else` statement can be placed inside another `if` or `if-else` statement.

**Example:**

```java
int x = 10, y = 20;
if (x > 0) {
    if (y > 0) {
        System.out.println("Both x and y are positive.");
    } else {
        System.out.println("x is positive, but y is not.");
    }
}
```

#### **1.5. `switch` Statement**

The `switch` statement is used for multi-way branching. It compares the value of an expression with a list of case values and executes the code associated with the matching case.

**Syntax:**

```java
switch (expression) {
    case value1:
        // Code for value1
        break; // Important to exit the switch
    case value2:
        // Code for value2
        break;
    // ... other cases
    default:
        // Code if no case matches
}
```

*   **`expression`**: Must evaluate to a primitive integral type (byte, short, char, int) or an enum type, or a String type.
*   **`case value`**: Must be a constant expression of the same type as the `expression`.
*   **`break`**: This keyword is crucial. If omitted, the execution will "fall through" to the next case, which is usually not intended.
*   **`default`**: Optional. If no case matches, the `default` block is executed.

**Example:**

```java
char grade = 'B';
switch (grade) {
    case 'A':
        System.out.println("Excellent!");
        break;
    case 'B':
        System.out.println("Good!");
        break;
    case 'C':
        System.out.println("Fair.");
        break;
    default:
        System.out.println("Needs Improvement.");
}
```

**Important Points for Selection Statements:**

*   Use `if` for simple true/false conditions.
*   Use `if-else` for two alternative paths.
*   Use `if-else if-else` ladder for multiple conditions.
*   Use `switch` when checking a single variable against multiple constant values (more readable than a long `if-else if` chain).
*   Remember the `break` statement in `switch` to prevent fall-through.

---

### **2. Iteration Statements (Loops)**

Iteration statements are used to execute a block of code repeatedly. This is essential for processing collections of data or performing tasks multiple times.

#### **2.1. `for` Loop**

The `for` loop is typically used when you know the number of times a loop should execute. It consists of three parts: initialization, condition, and iteration.

**Syntax:**

```java
for (initialization; condition; iteration) {
    // Code to be executed repeatedly
}
```

*   **`initialization`**: Executed once before the loop starts.
*   **`condition`**: Evaluated before each iteration. If `true`, the loop body executes. If `false`, the loop terminates.
*   **`iteration`**: Executed after each iteration.

**Example:**

```java
for (int i = 0; i < 5; i++) {
    System.out.println("Count: " + i);
}
```

**Enhanced `for` Loop (For-Each Loop):**

Java provides an enhanced `for` loop for iterating over arrays and collections. It simplifies the syntax.

**Syntax:**

```java
for (dataType element : arrayOrCollection) {
    // Code to be executed for each element
}
```

**Example:**

```java
int[] numbers = {10, 20, 30, 40, 50};
for (int num : numbers) {
    System.out.println(num);
}
```

#### **2.2. `while` Loop**

The `while` loop executes a block of code as long as a specified boolean condition is `true`. The condition is checked *before* each iteration.

**Syntax:**

```java
while (condition) {
    // Code to be executed repeatedly
    // Make sure to update a variable that affects the condition
}
```

**Example:**

```java
int count = 0;
while (count < 3) {
    System.out.println("Iteration: " + count);
    count++; // Increment count to eventually make the condition false
}
```

#### **2.3. `do-while` Loop**

The `do-while` loop is similar to the `while` loop, but it guarantees that the loop body will execute *at least once* because the condition is checked *after* the iteration.

**Syntax:**

```java
do {
    // Code to be executed repeatedly
} while (condition);
```

**Example:**

```java
int num = 5;
do {
    System.out.println("Value: " + num);
    num--;
} while (num > 0);
```
*Explanation:* `num` starts at 5. The `do` block executes, printing "Value: 5". Then `num` becomes 4. The condition `num > 0` (4 > 0) is true, so the loop continues. This repeats until `num` becomes 0, at which point the condition `0 > 0` is false, and the loop terminates.

#### **Important Points for Iteration Statements:**

*   Use `for` when you know the number of iterations or need to iterate through a range.
*   Use the enhanced `for` loop for cleaner iteration over arrays and collections.
*   Use `while` when the loop execution depends on a condition that is checked *before* each iteration.
*   Use `do-while` when you need to execute the loop body at least once, regardless of the condition.
*   **Crucial:** Ensure that the condition in `while` and `do-while` loops eventually becomes false to avoid infinite loops.

---

### **3. Jump Statements**

Jump statements are used to transfer control from one part of a program to another, interrupting the normal sequential flow.

#### **3.1. `break` Statement**

The `break` statement is used to:
1.  **Exit a loop (`for`, `while`, `do-while`)**: When `break` is encountered, the loop terminates immediately, and control is transferred to the statement immediately following the loop.
2.  **Exit a `switch` statement**: As seen earlier, `break` is used to exit a `switch` case.

**Example (Exiting a loop):**

```java
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break; // Exit the loop when i becomes 5
    }
    System.out.println(i);
}
// Output: 1 2 3 4
```

**Labeled `break`:**

The `break` statement can also be used with a label to break out of an outer loop (or multiple loops).

**Syntax:**

```java
outerLoop:
for (...) {
    for (...) {
        if (condition) {
            break outerLoop; // Breaks out of outerLoop
        }
    }
}
```

**Example:**

```java
outer:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.println("i: " + i + ", j: " + j);
        if (i == 2 && j == 2) {
            break outer; // Breaks out of the outer loop
        }
    }
}
// Output:
// i: 1, j: 1
// i: 1, j: 2
// i: 1, j: 3
// i: 2, j: 1
// i: 2, j: 2
```

#### **3.2. `continue` Statement**

The `continue` statement is used to skip the rest of the current iteration of a loop and proceed to the next iteration.
1.  **In `for` loops**: The iteration part of the `for` loop is executed, then the condition is checked.
2.  **In `while` and `do-while` loops**: The condition is checked immediately.

**Example:**

```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue; // Skip the rest of the code for i=3
    }
    System.out.println(i);
}
// Output: 1 2 4 5
```

**Labeled `continue`:**

Similar to `break`, `continue` can also use labels to skip to the next iteration of an outer loop.

**Syntax:**

```java
outerLoop:
for (...) {
    for (...) {
        if (condition) {
            continue outerLoop; // Continues to the next iteration of outerLoop
        }
    }
}
```

**Example:**

```java
outer:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) {
            continue outer; // Skips the rest of the inner loop and moves to the next outer loop iteration
        }
        System.out.println("i: " + i + ", j: " + j);
    }
}
// Output:
// i: 1, j: 1
// i: 2, j: 1
// i: 3, j: 1
```

#### **3.3. `return` Statement**

The `return` statement is used to exit a method. It can also be used to return a value from a method if the method has a return type other than `void`.

**Example:**

```java
public int add(int a, int b) {
    return a + b; // Returns the sum of a and b
}

public void printMessage(String msg) {
    System.out.println(msg);
    return; // Exits the method (optional for void methods if it's the last statement)
}
```

#### **Important Points for Jump Statements:**

*   `break` terminates the innermost loop or `switch` statement it is contained within.
*   `continue` skips the current iteration of the loop and proceeds to the next.
*   Labeled `break` and `continue` are powerful tools for controlling flow within nested loops. Use them judiciously for readability.
*   `return` exits a method and can optionally pass a value back to the caller.

---
