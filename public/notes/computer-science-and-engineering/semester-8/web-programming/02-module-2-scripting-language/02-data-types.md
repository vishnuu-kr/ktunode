---
title: "Data Types"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc24"
status: "completed"
scrapedAt: "2026-05-20T17:28:13.976Z"
---
# Web Programming: Module 2 - Scripting Languages

## Topic: Data Types

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   **Identify and differentiate** between various fundamental data types used in scripting languages.
*   **Explain the purpose and usage** of different data types in programming.
*   **Understand how data types are represented and stored** in memory (at a conceptual level).
*   **Demonstrate the ability to declare and assign values** to variables of different data types.
*   **Recognize potential issues and best practices** related to data type handling and type coercion.

---

### 1. Introduction to Data Types

In scripting languages, **data types** are classifications that specify which type of value a variable can hold and what operations can be performed on that value. They are fundamental building blocks of any program, allowing us to represent and manipulate information effectively.

**Key Concept:** A **variable** is a named storage location in memory that can hold a value. The data type of a variable dictates the kind of values it can store and how those values are interpreted.

---

### 2. Fundamental Data Types

Scripting languages, such as JavaScript (commonly used in web programming), typically support several fundamental data types:

#### 2.1. Primitive Data Types

These are the most basic data types. They are immutable, meaning their values cannot be changed after they are created.

*   **String:**
    *   **Definition:** A sequence of characters enclosed in single quotes (`'`) or double quotes (`"`).
    *   **Purpose:** Used to represent text.
    *   **Examples:**
        ```javascript
        let userName = "Alice";
        let message = 'Hello, World!';
        let greeting = "It's a beautiful day!";
        ```
    *   **Important Point:** Strings are case-sensitive. `"Hello"` is different from `"hello"`.

*   **Number:**
    *   **Definition:** Represents numeric values. This typically includes both integers (whole numbers) and floating-point numbers (numbers with decimal points).
    *   **Purpose:** Used for mathematical operations and representing quantities.
    *   **Examples:**
        ```javascript
        let age = 30; // Integer
        let price = 19.99; // Floating-point
        let temperature = -5.5;
        let count = 1000;
        ```
    *   **Important Point:** In many scripting languages like JavaScript, there's usually only one `Number` type, which handles both integers and floats.

*   **Boolean:**
    *   **Definition:** Represents one of two possible values: `true` or `false`.
    *   **Purpose:** Used for logical operations, conditions, and controlling program flow (e.g., in `if` statements).
    *   **Examples:**
        ```javascript
        let isLoggedIn = true;
        let hasPermission = false;
        let isCompleted = true;
        ```
    *   **Important Point:** Booleans are the foundation of conditional logic.

*   **Undefined:**
    *   **Definition:** A value automatically assigned to variables that have been declared but not yet assigned a value.
    *   **Purpose:** Indicates that a variable exists but doesn't hold any meaningful data.
    *   **Examples:**
        ```javascript
        let myVariable; // myVariable is undefined
        console.log(myVariable); // Output: undefined
        ```
    *   **Important Point:** It's generally good practice to explicitly assign a value to a variable rather than leaving it `undefined`.

*   **Null:**
    *   **Definition:** Represents the intentional absence of any object value or no value. It's an explicit assignment.
    *   **Purpose:** To explicitly indicate that a variable should have no value.
    *   **Examples:**
        ```javascript
        let user = null; // Represents an intentionally empty user object
        let data = null;
        ```
    *   **Important Point:** `null` is an assignment value, whereas `undefined` is the default state of an unassigned variable. `typeof null` surprisingly returns `"object"` in JavaScript due to historical reasons, which can be a common pitfall.

*   **Symbol (ES6+ in JavaScript):**
    *   **Definition:** A unique and immutable primitive value that can be used as the key of an object property.
    *   **Purpose:** To avoid naming collisions when creating object properties.
    *   **Examples:**
        ```javascript
        const id1 = Symbol('id');
        const id2 = Symbol('id');
        console.log(id1 === id2); // Output: false
        ```
    *   **Important Point:** Symbols are primarily used in advanced scenarios to create unique property keys.
