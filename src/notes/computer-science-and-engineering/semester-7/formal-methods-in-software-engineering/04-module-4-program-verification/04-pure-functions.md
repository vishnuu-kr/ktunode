---
title: "pure functions"
subject: "FORMAL METHODS IN SOFTWARE ENGINEERING"
module: "Module 4: Program Verification:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c082"
status: "completed"
scrapedAt: "2026-05-20T17:06:04.682Z"
---
# FORMAL METHODS IN SOFTWARE ENGINEERING

## Module 4: Program Verification

### Topic: Pure Functions

---

### **1. Introduction to Pure Functions**

**1.1 What is a Pure Function?**

A pure function is a function that:

*   **Always produces the same output for the same input.** This property is called **referential transparency**. It means that if you call a pure function multiple times with the same arguments, you will always get the exact same result.
*   **Has no side effects.** A side effect is any observable change that a function makes to the state of the program or the external environment outside of its return value.

**1.2 Why are Pure Functions Important in Program Verification?**

Pure functions are fundamental to program verification because:

*   **Predictability:** Their deterministic nature makes them much easier to reason about and predict their behavior.
*   **Testability:** Since they don't depend on external state or produce side effects, they are trivially testable. You just need to provide inputs and check outputs.
*   **Composability:** Pure functions can be easily combined and replaced without worrying about unintended consequences.
*   **Formal Reasoning:** Their mathematical properties (like referential transparency) lend themselves well to formal proof techniques. If you can prove a pure function correct, you can be confident in its behavior.
*   **Parallelism:** Pure functions are inherently thread-safe. Since they don't mutate shared state, multiple instances of a pure function can run concurrently without race conditions.
*   **Debugging:** Debugging pure functions is simpler as you only need to focus on the function's logic and its inputs, rather than the complex interplay of state changes.

---

### **2. Characteristics of Pure Functions**

Let's break down the two key characteristics in more detail:

**2.1 Referential Transparency (Determinism)**

*   **Definition:** A function is referentially transparent if it can be replaced by its corresponding value without changing the program's behavior.
*   **How to achieve:**
    *   **No reliance on external mutable state:** The function should not read or modify global variables, static variables, or instance variables of objects if those variables can be changed by other parts of the program.
    *   **No reliance on input/output operations:** Functions that read from files, databases, networks, or write to them are generally not pure.
    *   **No reliance on system clock, random number generators, or thread IDs:** These are all sources of non-determinism.

*   **Examples:**

    *   **Pure:**
        ```python
        def add(a, b):
            return a + b
        ```
        `add(2, 3)` will always return `5`.

    *   **Impure (due to global state):**
        ```python
        counter = 0
        def increment_and_get():
            global counter
            counter += 1
            return counter
        ```
        `increment_and_get()` will return different values on subsequent calls.

    *   **Impure (due to I/O):**
        ```python
        def read_file_line(filepath):
            with open(filepath, 'r') as f:
                return f.readline()
        ```
        The output depends on the content of the file at `filepath`.

**2.2 No Side Effects**

*   **Definition:** A function has no side effects if its execution does not cause any observable change in the system beyond returning a value.
*   **Common Side Effects to Avoid:**
    *   **Modifying global variables or static variables.**
    *   **Modifying input parameters that are mutable objects (e.g., lists, dictionaries in Python).**
    *   **Performing I/O operations (reading/writing to files, console, network).**
    *   **Mutating the state of an object (instance variables).**
    *   **Calling other functions that have side effects.**
    *   **Generating random numbers or using system time.**
    *   **Throwing exceptions (can be debated, but often considered an observable change).**

*   **Examples:**

    *   **Pure:**
        ```javascript
        function multiply(x, y) {
          return x * y;
        }
        ```
        `multiply(4, 5)` returns `20` and doesn't change anything else.

    *   **Impure (modifying an array):**
        ```javascript
        function pushToArray(arr, element) {
          arr.push(element); // Modifies the input array
          return arr;
        }
        ```
        If you call `pushToArray(myArray, 5)`, `myArray` itself is changed.

    *   **Impure (printing to console):**
        ```java
        public static void printMessage(String msg) {
            System.out.println(msg); // Side effect: prints to console
        }
        ```
        This function has a side effect of displaying output.

---

### **3. Identifying Pure Functions**

To identify if a function is pure, ask yourself:

*   **For the same inputs, does it *always* produce the same output?**
*   **Does it *only* produce a return value, or does it also do something else observable?**

**3.1 Examples of Pure Functions:**

*   **Mathematical functions:** `sin()`, `cos()`, `sqrt()`, `pow()`, `abs()`.
*   **String manipulation functions (that don't modify original strings):** `toUpperCase()`, `substring()`, `replace()` (if it returns a new string).
*   **Array/List operations that return new collections:** `map()`, `filter()`, `slice()` (in JavaScript).
*   **Basic arithmetic operations:** `+`, `-`, `*`, `/`.

**3.2 Examples of Impure Functions:**

*   `DateTime.now()` (depends on time)
*   `Math.random()` (depends on random seed)
*   `console.log()` (produces output)
*   `array.push()` or `list.append()` (modifies the original array/list)
*   `System.out.println()` (Java)
*   Functions that interact with databases, files, or networks.

---

### **4. Benefits of Using Pure Functions in Software Engineering**

For program verification and general software engineering, pure functions offer significant advantages:

*   **Easier to reason about:** Their behavior is predictable and isolated.
*   **Simplified Testing:** Unit tests become straightforward – supply inputs, assert outputs.
*   **Improved Readability and Maintainability:** Code becomes cleaner and easier to understand.
*   **Enhanced Modularity and Composability:** Functions can be combined like building blocks.
*   **Facilitates Parallel and Concurrent Programming:** No need for locks or synchronization primitives for pure functions.
*   **Enables Memoization:** Caching results for previously computed inputs can significantly improve performance.
*   **Supports Refactoring:** Pure functions can be safely refactored or replaced without breaking other parts of the system.
*   **Foundation for Functional Programming:** Pure functions are a cornerstone of functional programming paradigms, which emphasize immutability and predictable computations.

---

### **5. Techniques for Writing Pure Functions**

*   **Pass all required data as arguments:** Instead of relying on global or instance variables, pass all necessary values directly into the function.
*   **Return new data structures instead of modifying existing ones:** For operations that might seem like they mutate, return a new, modified version of the data structure.
*   **Isolate side effects:** If a function needs to perform I/O or interact with the outside world, try to separate these operations into different functions. The core logic should remain pure.
*   **Use immutable data structures:** Many programming languages offer immutable versions of collections (e.g., `frozenset` in Python, `Immutable.js` in JavaScript). Using these naturally leads to purer functions.

---

### **6. Practice Questions and Exercises**

**Question 1:**

Which of the following functions is NOT pure?

a) `def square(x): return x * x`
b) `def get_user_name(user_id): # queries a database; return name`
c) `def greet(name): return "Hello, " + name`
d) `def list_length(lst): return len(lst)`

**Answer 1:**

b) `def get_user_name(user_id): # queries a database; return name`

**Explanation:** This function interacts with a database, which is an external system and a side effect. Its output could also depend on the current state of the database, making it non-deterministic.

**Question 2:**

Consider the following Python code:

```python
data = [1, 2, 3]

def modify_list(input_list):
    input_list.append(4)
    return input_list

modified_data = modify_list(data)
```

Is `modify_list` a pure function? Explain why or why not.

**Answer 2:**

No, `modify_list` is **not** a pure function.

**Explanation:**

1.  **Side Effect:** The function modifies the `input_list` in place using `input_list.append(4)`. This is a side effect because it changes the state of the list passed into the function.
2.  **Non-Referential Transparency:** If you were to call `modify_list(data)` multiple times, the *original* `data` list would be mutated each time, and the function would still return a reference to the modified list. However, the *effect* on the external `data` variable is a change. More critically, if you had another reference to the same list elsewhere, that reference would also see the appended element, indicating an external change.

**Question 3:**

Refactor the following impure Python function to make it pure.

```python
counter = 0
def increment_counter_and_return_value():
    global counter
    counter += 1
    return counter
```

**Answer 3:**

```python
def increment_and_return(current_value):
    return current_value + 1
```

**Explanation:**

The original function relied on a global `counter` and modified it. The pure version achieves the same logical outcome (incrementing a value) by taking the current value as an argument and returning the incremented value. The caller is then responsible for updating their own state (e.g., a variable holding the count) with the returned value.

**Question 4:**

Identify the pure function(s) from the following JavaScript snippets:

```javascript
// 1
function calculateSum(a, b) {
  return a + b;
}

// 2
const numbers = [10, 20];
function addToArray(arr, element) {
  arr.push(element);
  return arr;
}

// 3
function getRandomNumber() {
  return Math.random();
}

// 4
function squareEach(arr) {
  return arr.map(x => x * x);
}
```

**Answer 4:**

1.  `calculateSum` is pure.
2.  `addToArray` is **impure** (modifies `arr`).
3.  `getRandomNumber` is **impure** (non-deterministic).
4.  `squareEach` is pure (assuming `map` itself is pure, which it is in JavaScript when used with pure callbacks; it returns a new array).

---

### **7. Important Points to Remember**

*   **Purity is a spectrum:** While the strict definition is clear, in practice, some functions might have *local* side effects that are contained and don't affect the program's observable behavior. However, for formal verification, sticking to the strict definition is crucial.
*   **Pure functions are building blocks for robust software:** Embrace them to make your code easier to verify, test, and maintain.
*   **The goal is isolation:** If you can isolate the non-pure parts of your program, the majority of your code can remain pure and thus easier to manage.
*   **Immutability is your friend:** Using immutable data structures naturally steers you towards writing pure functions.
*   **Referential transparency means you can substitute:** If you have a pure function call, you can replace that call with its result directly without changing what your program *does*. This is a powerful concept for reasoning and optimization.

---
