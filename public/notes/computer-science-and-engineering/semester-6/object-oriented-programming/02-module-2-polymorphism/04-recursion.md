---
title: "Recursion"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfa0"
status: "completed"
scrapedAt: "2026-05-20T16:56:06.953Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism

## Topic: Recursion

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the concept of recursion.
*   Identify the base case and recursive step in a recursive function.
*   Write simple recursive functions for common problems.
*   Analyze the execution of recursive functions using a call stack.
*   Understand the advantages and disadvantages of using recursion.
*   Differentiate between recursion and iteration.

---

### 1. Understanding the Concept of Recursion

**Definition:** Recursion is a programming technique where a function calls itself, either directly or indirectly, to solve a problem. It breaks down a problem into smaller, self-similar subproblems until a simple, solvable case is reached.

**Analogy:** Imagine a set of Russian nesting dolls. To open the largest doll, you find a smaller doll inside. To open that doll, you find an even smaller one, and so on, until you reach the smallest doll that cannot be opened further. This smallest doll is the "base case."

**Key Idea:** Recursion is about solving a problem by defining the solution in terms of a simpler version of the same problem.

---

### 2. Identifying the Base Case and Recursive Step

Every recursive function must have two essential components:

#### 2.1. Base Case

*   **Definition:** The base case (or termination condition) is the simplest form of the problem that can be solved directly without further recursion. It provides a stopping point for the recursive calls.
*   **Importance:** Without a base case, a recursive function would call itself infinitely, leading to a stack overflow error.
*   **Characteristics:**
    *   It's the condition that stops the recursion.
    *   It returns a direct, non-recursive answer.

#### 2.2. Recursive Step

*   **Definition:** The recursive step is where the function calls itself with a modified input that moves closer to the base case.
*   **Importance:** It breaks down the larger problem into smaller, manageable subproblems.
*   **Characteristics:**
    *   It reduces the problem size.
    *   It invokes the function itself.

---

### 3. Writing Simple Recursive Functions

Let's look at some common examples of recursive functions.

#### 3.1. Factorial Calculation

The factorial of a non-negative integer `n`, denoted by `n!`, is the product of all positive integers less than or equal to `n`.
*   `n! = n * (n-1) * (n-2) * ... * 1`
*   `0! = 1` (by definition)

**Recursive Definition:**
*   `factorial(n) = n * factorial(n-1)`  (for n > 0)
*   `factorial(0) = 1`             (base case)

**Example (Python):**

```python
def factorial(n):
  # Base Case
  if n == 0:
    return 1
  # Recursive Step
  else:
    return n * factorial(n - 1)

# Example Usage
print(f"Factorial of 5 is: {factorial(5)}") # Output: Factorial of 5 is: 120
print(f"Factorial of 0 is: {factorial(0)}") # Output: Factorial of 0 is: 1
```

#### 3.2. Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
*   `0, 1, 1, 2, 3, 5, 8, 13, 21, ...`

**Recursive Definition:**
*   `fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)` (for n > 1)
*   `fibonacci(0) = 0`                      (base case 1)
*   `fibonacci(1) = 1`                      (base case 2)

**Example (Python):**

```python
def fibonacci(n):
  # Base Cases
  if n <= 0:
    return 0
  elif n == 1:
    return 1
  # Recursive Step
  else:
    return fibonacci(n - 1) + fibonacci(n - 2)

# Example Usage
print(f"The 7th Fibonacci number is: {fibonacci(7)}") # Output: The 7th Fibonacci number is: 13
print(f"The 0th Fibonacci number is: {fibonacci(0)}") # Output: The 0th Fibonacci number is: 0
print(f"The 1st Fibonacci number is: {fibonacci(1)}") # Output: The 1st Fibonacci number is: 1
```

#### 3.3. Sum of Natural Numbers

Calculate the sum of the first `n` natural numbers.
*   `1 + 2 + 3 + ... + n`

**Recursive Definition:**
*   `sum_natural(n) = n + sum_natural(n-1)` (for n > 0)
*   `sum_natural(0) = 0`                   (base case)

**Example (Python):**

```python
def sum_natural(n):
  # Base Case
  if n == 0:
    return 0
  # Recursive Step
  else:
    return n + sum_natural(n - 1)

# Example Usage
print(f"Sum of first 5 natural numbers: {sum_natural(5)}") # Output: Sum of first 5 natural numbers: 15
```

---

### 4. Analyzing the Execution of Recursive Functions (Call Stack)

When a function is called, information about that call (like its parameters and local variables) is pushed onto a region of memory called the **call stack**. Each function call creates a new "stack frame."

**How it works with Recursion:**

1.  **Initial Call:** The first call to the recursive function is made. A stack frame is created for it.
2.  **Recursive Calls:** Each time the function calls itself, a *new* stack frame is pushed onto the top of the call stack for that new invocation.
3.  **Reaching the Base Case:** When the base case is hit, the function returns a value. Its stack frame is popped off the stack.
4.  **Returning Values:** As each function call returns, its stack frame is removed. The return value is passed back to the previous call.
5.  **Unwinding:** This process continues until the original call returns its final value, and the stack is empty again.

**Example: `factorial(3)`**

1.  **`factorial(3)` is called:**
    *   Stack: [`factorial(3)`]
    *   `n` is 3. `n != 0`. Returns `3 * factorial(2)`.
2.  **`factorial(2)` is called (from within `factorial(3)`):**
    *   Stack: [`factorial(3)`, `factorial(2)`]
    *   `n` is 2. `n != 0`. Returns `2 * factorial(1)`.
3.  **`factorial(1)` is called (from within `factorial(2)`):**
    *   Stack: [`factorial(3)`, `factorial(2)`, `factorial(1)`]
    *   `n` is 1. `n != 0`. Returns `1 * factorial(0)`.
4.  **`factorial(0)` is called (from within `factorial(1)`):**
    *   Stack: [`factorial(3)`, `factorial(2)`, `factorial(1)`, `factorial(0)`]
    *   `n` is 0. **Base case reached!** Returns `1`.
5.  **`factorial(0)` returns 1:**
    *   Stack: [`factorial(3)`, `factorial(2)`, `factorial(1)`]
    *   `factorial(1)` receives 1. Computes `1 * 1` and returns `1`.
6.  **`factorial(1)` returns 1:**
    *   Stack: [`factorial(3)`, `factorial(2)`]
    *   `factorial(2)` receives 1. Computes `2 * 1` and returns `2`.
7.  **`factorial(2)` returns 2:**
    *   Stack: [`factorial(3)`]
    *   `factorial(3)` receives 2. Computes `3 * 2` and returns `6`.
8.  **`factorial(3)` returns 6:**
    *   Stack: [] (empty)

**Important Note:** Each recursive call adds overhead to the call stack. Deep recursion can consume a lot of memory and potentially lead to stack overflow errors if the depth exceeds the stack limit.

---

### 5. Advantages and Disadvantages of Recursion

#### 5.1. Advantages

*   **Elegance and Readability:** For certain problems, recursive solutions can be more intuitive, concise, and easier to understand than iterative solutions (e.g., tree traversals, factorial).
*   **Problem Decomposition:** It naturally suits problems that can be broken down into smaller, identical subproblems.
*   **Reduced Boilerplate Code:** Can sometimes eliminate the need for explicit loops and temporary variables.

#### 5.2. Disadvantages

*   **Performance Overhead:** Each function call incurs overhead (stack frame creation, parameter passing, return address storage), which can make recursive solutions slower than iterative ones.
*   **Stack Overflow Risk:** Deep recursion can lead to stack overflow errors if the recursion depth exceeds the system's stack limit.
*   **Memory Consumption:** The call stack can consume significant memory for deep recursive calls.
*   **Debugging Complexity:** Tracing the execution of recursive functions can be more challenging than iterative ones.
*   **Redundant Computations (for some algorithms):** Naive recursive implementations (like the Fibonacci example above) can recompute the same subproblems multiple times, leading to inefficiency. This can be addressed with techniques like memoization or dynamic programming.

---

### 6. Differentiating Between Recursion and Iteration

**Iteration** uses loops (like `for`, `while`) to repeat a block of code a certain number of times or until a condition is met.

| Feature           | Recursion                                      | Iteration                                    |
| :---------------- | :--------------------------------------------- | :------------------------------------------- |
| **Mechanism**     | Function calls itself                          | Loops (for, while)                           |
| **Control Flow**  | Managed by function calls and return values    | Managed by loop conditions and counters      |
| **State Management** | Implicitly managed on the call stack         | Explicitly managed with variables            |
| **Termination**   | Base case                                      | Loop condition                               |
| **Memory Usage**  | Can be high (call stack)                       | Generally lower (uses variables)             |
| **Performance**   | Can be slower due to function call overhead    | Generally faster                             |
| **Readability**   | Can be very readable for certain problems      | Can be more verbose but straightforward      |
| **Stack Overflow**| Potential risk for deep recursion              | No risk of stack overflow (unless infinite loop) |

**Example: Sum of Natural Numbers (Iterative vs. Recursive)**

**Recursive:** (Shown earlier)

```python
def sum_natural_recursive(n):
  if n == 0:
    return 0
  else:
    return n + sum_natural_recursive(n - 1)
```

**Iterative:**

```python
def sum_natural_iterative(n):
  total = 0
  for i in range(1, n + 1):
    total += i
  return total
```

**Which to use?**

*   Choose **recursion** when the problem naturally breaks down into self-similar subproblems, and the expected recursion depth is manageable. It often leads to cleaner code.
*   Choose **iteration** when performance is critical, memory is a concern, or the problem is easily expressed using loops. Iteration generally avoids the overhead and stack limitations of recursion.

---

### 7. Practice Questions and Exercises

**Instructions:** For each question, identify the base case and the recursive step. Write a recursive function to solve the problem.

1.  **Power Function:** Write a recursive function `power(base, exponent)` that calculates `base` raised to the power of `exponent` (assume `exponent` is a non-negative integer).
    *   *Hint:* `power(base, exponent) = base * power(base, exponent - 1)`
    *   *Base Case:* `power(base, 0) = 1`

2.  **Greatest Common Divisor (GCD) using Euclidean Algorithm:** The Euclidean algorithm is an efficient method for computing the GCD of two integers.
    *   If `b` is 0, the GCD is `a`.
    *   Otherwise, `gcd(a, b) = gcd(b, a % b)`.
    *   Write a recursive function `gcd(a, b)`.
    *   *Hint:* Your base case will be when one of the numbers is zero.

3.  **Counting Down:** Write a recursive function `countdown(n)` that prints numbers from `n` down to 1.
    *   *Hint:* Print the current number, then call `countdown` with `n-1`.
    *   *Base Case:* When `n` becomes less than 1.

4.  **Binary Search (Conceptual):** Imagine you have a sorted array of numbers. How could you recursively search for a target value? Describe the steps involved, including the base case and the recursive step. (You don't need to write full code, just the logic).

---

### 8. Answers to Practice Questions

1.  **Power Function:**
    ```python
    def power(base, exponent):
      # Base Case
      if exponent == 0:
        return 1
      # Recursive Step
      else:
        return base * power(base, exponent - 1)

    # Example:
    print(f"2^4 = {power(2, 4)}") # Output: 2^4 = 16
    ```
    *   **Base Case:** `exponent == 0` returns `1`.
    *   **Recursive Step:** `base * power(base, exponent - 1)`.

2.  **GCD using Euclidean Algorithm:**
    ```python
    def gcd(a, b):
      # Ensure a is always greater than or equal to b for cleaner logic (optional but good practice)
      if a < b:
        a, b = b, a

      # Base Case
      if b == 0:
        return a
      # Recursive Step
      else:
        return gcd(b, a % b)

    # Example:
    print(f"GCD of 48 and 18 is: {gcd(48, 18)}") # Output: GCD of 48 and 18 is: 6
    ```
    *   **Base Case:** `b == 0` returns `a`.
    *   **Recursive Step:** `gcd(b, a % b)`.

3.  **Counting Down:**
    ```python
    def countdown(n):
      # Base Case
      if n < 1:
        return
      # Recursive Step
      else:
        print(n)
        countdown(n - 1)

    # Example:
    print("Counting down from 5:")
    countdown(5)
    # Output:
    # Counting down from 5:
    # 5
    # 4
    # 3
    # 2
    # 1
    ```
    *   **Base Case:** `n < 1`. The function simply returns, stopping further calls.
    *   **Recursive Step:** Prints `n`, then calls `countdown(n - 1)`.

4.  **Binary Search (Conceptual Logic):**
    *   **Input:** Sorted array `arr`, target value `target`, start index `low`, end index `high`.
    *   **Base Cases:**
        *   If `high < low` (the search space is empty), the target is not found. Return -1 or an indicator of failure.
        *   If the middle element `arr[mid]` equals `target`, the target is found. Return the index `mid`.
    *   **Recursive Steps:**
        *   Calculate the middle index: `mid = (low + high) // 2`.
        *   If `arr[mid] > target`, the target (if it exists) must be in the left half of the array. Recursively call binary search on the left subarray: `binary_search(arr, target, low, mid - 1)`.
        *   If `arr[mid] < target`, the target (if it exists) must be in the right half of the array. Recursively call binary search on the right subarray: `binary_search(arr, target, mid + 1, high)`.

---

### 9. Important Points to Remember

*   **Every recursive function MUST have a base case.** This is the most crucial aspect to avoid infinite recursion.
*   **The recursive step must move the problem towards the base case.** The input to the recursive call should be smaller or simpler than the current input.
*   **Understand the call stack.** Visualizing how the stack grows and shrinks helps in debugging and understanding the flow of execution.
*   **Be mindful of performance.** For complex computations or large inputs, iterative solutions are often preferred due to their lower overhead and memory usage.
*   **Consider memoization or dynamic programming** to optimize recursive functions that exhibit overlapping subproblems (like the naive Fibonacci implementation).
*   **Recursion is a powerful tool** for elegantly solving problems that have a recursive structure.

---
