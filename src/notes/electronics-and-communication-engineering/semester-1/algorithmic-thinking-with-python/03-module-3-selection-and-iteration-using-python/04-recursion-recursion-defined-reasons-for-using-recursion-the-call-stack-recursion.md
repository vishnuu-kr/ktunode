---
title: "RECURSION:- Recursion Defined, Reasons for using Recursion, The Call Stack, Recursion and the Stack, Avoiding Circularity in Recursion, Sample problems - Finding the nth Fibonacci number, greatest common divisor  of two positive integers, the factorial of a positive integer, adding two positive integers, the sum of digits of a positive number **."
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 3: SELECTION AND ITERATION USING PYTHON:"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da11d"
status: "completed"
scrapedAt: "2026-05-23T17:32:43.722Z"
---
# Module 3: Selection and Iteration Using Python

## Topic: Recursion

Welcome, everyone, to our deep dive into a truly fascinating concept in computer science: **Recursion**. You've already mastered selection (like `if-elif-else`) and iteration (like `for` and `while` loops), which are powerful tools for controlling program flow. Recursion offers a different, often elegant, way to solve problems, especially those with a naturally self-similar structure. Think of it as solving a big problem by breaking it down into smaller, identical versions of itself.

Our journey today will cover what recursion is, why we'd choose it, how it works under the hood using the "call stack," and how to ensure our recursive functions don't run forever! We'll then tackle some classic problems to solidify our understanding.

---

### Recursion: What Exactly Is It?

At its core, **recursion is a programming technique where a function calls itself within its own definition.** It's like a set of Russian nesting dolls, where each doll contains a smaller, identical doll inside, until you reach the smallest one.

Think about it: most of the problems you've solved so far have involved a clear sequence of steps, or repeating a set of steps until a condition is met. Recursion approaches this differently. Instead of saying "do this, then do this, then do this...", a recursive function says "to solve this problem, first solve a smaller version of the same problem, and then use that solution to solve the original problem."

This might sound a bit mind-boggling at first, but it’s a powerful paradigm. As John V. Guttag mentions in his *Introduction to Computation and Programming using Python*, many mathematical concepts are inherently recursive, making a recursive approach very natural for them.

**Key Idea:** A recursive function needs two main parts:

1.  **Base Case(s):** This is the "stopping condition." It's the simplest version of the problem that can be solved directly, without further recursion. Without a base case, the function would call itself infinitely! Think of the smallest Russian doll – it can't be opened further.
2.  **Recursive Step:** This is where the function calls itself with a modified input, moving it closer to the base case. It breaks the problem down into a smaller, manageable sub-problem.

---

### Why Use Recursion?

You might be thinking, "If I can solve problems with loops, why bother with recursion?" That's a fair question! Recursion isn't always the most efficient solution in terms of speed or memory, but it shines in certain scenarios:

*   **Elegance and Readability:** For problems that have a recursive structure (like tree traversals, fractals, or certain mathematical sequences), a recursive solution can be remarkably clear and closely mirror the problem's definition. It can make complex logic easier to grasp, as Maureen Sprankle and Jim Hubbard suggest in *Problem Solving & Programming Concepts* when discussing how to model problems.
*   **Simplifying Complex Problems:** Recursion can elegantly handle problems that would be very cumbersome to solve with iterative approaches. Imagine trying to flatten a deeply nested list (a list within a list within a list...). Recursion makes this much simpler than managing nested loops.
*   **Mathematical Parallelism:** As George Pólya emphasizes in *How to Solve It*, understanding the structure of a problem is key. If a mathematical definition or property is recursive, translating that directly into code using recursion often leads to the most intuitive and correct implementation.

**Important Note:** While recursion can be beautiful, it's crucial to be aware of its potential downsides, which we'll discuss with the call stack. It's a tool in your algorithmic toolkit, not the *only* tool.

---

### The Call Stack: How Recursion Works Under the Hood

This is where things get really interesting and, frankly, where a lot of confusion can happen if you don't grasp it. Every time a function is called in Python (or most programming languages), information about that function call is placed onto a data structure called the **call stack**.

**What is the Call Stack?**

Imagine a stack of plates. You can only add a new plate to the top, and you can only remove a plate from the top. This is a **Last-In, First-Out (LIFO)** structure.

When your Python program starts, the call stack is empty.
1.  When `main()` (or your initial script execution) is called, information about it (like its local variables, where to return to) is pushed onto the stack.
2.  If `main()` calls `functionA()`, information about `functionA()` is pushed onto the top of the stack, *above* `main()`.
3.  If `functionA()` calls `functionB()`, `functionB()`'s information is pushed onto the stack.
4.  When `functionB()` finishes, its information is popped off the stack, and control returns to `functionA()`.
5.  When `functionA()` finishes, its information is popped off, and control returns to `main()`.

**Recursion and the Stack:**

Now, let's apply this to recursion. Remember our recursive function definition: it calls *itself*.

Consider a function `recursive_func(n)` that calls `recursive_func(n-1)`.

1.  **Initial Call:** `recursive_func(5)` is called. Information about `recursive_func(5)` is pushed onto the stack.
2.  **First Recursive Call:** `recursive_func(5)` needs to call `recursive_func(4)`. Information about `recursive_func(4)` is pushed onto the stack, on top of `recursive_func(5)`.
3.  **Second Recursive Call:** `recursive_func(4)` calls `recursive_func(3)`. Information about `recursive_func(3)` is pushed onto the stack.
4.  ...and so on. Each recursive call adds a new "frame" to the call stack, containing the arguments and local variables for that specific call.

This continues until a **base case** is reached.

5.  **Base Case Reached:** Let's say `recursive_func(0)` is the base case. It executes its logic and *returns* a value.
6.  **Unwinding the Stack:** When `recursive_func(0)` returns, its frame is popped off the stack. Control returns to the function that called it – `recursive_func(1)`.
7.  `recursive_func(1)` now has the result from `recursive_func(0)`. It can complete its own task and return. Its frame is popped off.
8.  This process continues, "unwinding" the stack, until the original call (`recursive_func(5)`) receives its result, completes, and is popped off.

**Analogy:** Think of a detective working on a case. They might delegate a part of the investigation to a junior detective (the recursive call). The junior detective might delegate another part to an intern. The intern solves their small piece and reports back to the junior detective. The junior detective uses that information to solve their part and reports back to the main detective, and so on. The "call stack" is like the detective's notepad, keeping track of who they delegated to, what they were asked to do, and where to report back.

**Common Pitfall: `RecursionError: maximum recursion depth exceeded`**

If your recursive function doesn't have a proper base case, or if the base case is never reached, the function will keep calling itself indefinitely. The call stack will grow larger and larger until it runs out of memory allocated for it. Python has a built-in limit to prevent this from crashing your entire system. When this limit is hit, you get the `RecursionError`. This is a direct consequence of the call stack filling up.

---

### Avoiding Circularity in Recursion

"Circularity" in recursion simply means the function keeps calling itself without ever reaching a stopping point. This is precisely what the **base case** is designed to prevent.

**How to Ensure No Circularity:**

1.  **Identify the Base Case(s):** What is the absolute simplest version of the problem that you can solve without needing to break it down further? This is your stopping condition.
2.  **Ensure Progress Towards the Base Case:** In each recursive step, the input to the function must be modified in such a way that it *guarantees* it will eventually reach the base case. If you're working with a number `n`, the recursive call should typically be with `n-1`, `n/2`, or some other operation that moves `n` closer to the base case value.

Let's illustrate this with our sample problems.

---

### Sample Problems

#### 1. Finding the nth Fibonacci Number

The Fibonacci sequence is a famous series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

Mathematically, it's defined as:
*   $F(0) = 0$
*   $F(1) = 1$
*   $F(n) = F(n-1) + F(n-2)$ for $n > 1$

See that definition? $F(n)$ is defined in terms of $F(n-1)$ and $F(n-2)$. This is a perfect candidate for recursion!

**Recursive Implementation:**

```python
def fibonacci_recursive(n):
    # Base Cases
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    # Recursive Step
    else:
        return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)

# Example usage:
print(f"The 7th Fibonacci number is: {fibonacci_recursive(7)}") # Expected: 13
```

**Analysis:**

*   **Base Cases:** `n <= 0` returns 0, `n == 1` returns 1. These are directly solvable.
*   **Recursive Step:** `fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)`. Each call reduces `n`, moving closer to the base cases of 0 or 1.
*   **Call Stack:** For `fibonacci_recursive(4)`, the calls would look something like this:
    *   `fibonacci_recursive(4)` calls `fibonacci_recursive(3)` and `fibonacci_recursive(2)`
    *   `fibonacci_recursive(3)` calls `fibonacci_recursive(2)` and `fibonacci_recursive(1)`
    *   `fibonacci_recursive(2)` calls `fibonacci_recursive(1)` and `fibonacci_recursive(0)`
    *   Notice how `fibonacci_recursive(2)` is called multiple times! This is a drawback of this *specific* recursive implementation of Fibonacci – it's inefficient due to redundant calculations. We'll touch upon memoization or iterative solutions later if efficiency is paramount.

---

#### 2. Greatest Common Divisor (GCD) of Two Positive Integers

The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both numbers without leaving a remainder. The Euclidean Algorithm is a classic and efficient method for finding the GCD, and it has a beautiful recursive formulation.

The algorithm states:
*   If `b` is 0, then GCD(`a`, `b`) is `a`.
*   Otherwise, GCD(`a`, `b`) is the same as GCD(`b`, `a` % `b`), where `%` is the modulo operator (remainder of division).

**Recursive Implementation:**

```python
def gcd_recursive(a, b):
    # Base Case
    if b == 0:
        return a
    # Recursive Step
    else:
        return gcd_recursive(b, a % b)

# Example usage:
print(f"GCD of 48 and 18 is: {gcd_recursive(48, 18)}") # Expected: 6
```

**Analysis:**

*   **Base Case:** `b == 0`. When the second number becomes 0, the first number is the GCD.
*   **Recursive Step:** `gcd_recursive(b, a % b)`. The crucial part here is that the remainder `a % b` is *always* smaller than `b`. This guarantees that the second argument (`b` in the next call) will eventually become 0, hitting our base case. The numbers are getting smaller with each step!
*   **Relatability:** Imagine you have two lengths of rope, say 48 units and 18 units. You want to find the longest possible length of a smaller rope that can measure both perfectly. You'd cut off as many 18-unit segments from the 48-unit rope as possible (leaving 12 units). Now the problem is to find the longest rope that measures 18 and 12 units. You repeat the process: cut off 12 units from 18, leaving 6. Now it's about measuring 12 and 6. You can cut off two 6-unit segments from 12, leaving 0. The last length that divided evenly was 6. So, 6 is your answer! This process mirrors the recursive calls.

---

#### 3. The Factorial of a Positive Integer

The factorial of a non-negative integer `n`, denoted by `n!`, is the product of all positive integers less than or equal to `n`.
For example, $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$.

Mathematically:
*   $0! = 1$ (by definition)
*   $n! = n \times (n-1)!$ for $n > 0$

Again, we see a clear recursive definition!

**Recursive Implementation:**

```python
def factorial_recursive(n):
    # Input validation (optional but good practice)
    if not isinstance(n, int) or n < 0:
        return "Input must be a non-negative integer"

    # Base Case
    if n == 0:
        return 1
    # Recursive Step
    else:
        return n * factorial_recursive(n - 1)

# Example usage:
print(f"The factorial of 5 is: {factorial_recursive(5)}") # Expected: 120
print(f"The factorial of 0 is: {factorial_recursive(0)}") # Expected: 1
```

**Analysis:**

*   **Base Case:** `n == 0`. The factorial of 0 is defined as 1. This stops the recursion.
*   **Recursive Step:** `n * factorial_recursive(n - 1)`. Each call uses `n-1`, ensuring we get closer to the base case of 0.
*   **Call Stack:** For `factorial_recursive(4)`:
    *   `factorial_recursive(4)` calls `factorial_recursive(3)`
    *   `factorial_recursive(3)` calls `factorial_recursive(2)`
    *   `factorial_recursive(2)` calls `factorial_recursive(1)`
    *   `factorial_recursive(1)` calls `factorial_recursive(0)`
    *   `factorial_recursive(0)` returns 1.
    *   `factorial_recursive(1)` returns `1 * 1 = 1`.
    *   `factorial_recursive(2)` returns `2 * 1 = 2`.
    *   `factorial_recursive(3)` returns `3 * 2 = 6`.
    *   `factorial_recursive(4)` returns `4 * 6 = 24`.
    This is much more efficient than the Fibonacci example as there are no overlapping sub-problems calculated multiple times.

---

#### 4. Adding Two Positive Integers

This might seem like a trivial problem to solve recursively, as you can simply use the `+` operator! However, it's a great way to understand how recursion can model basic arithmetic operations, often in a way that might be closer to how a CPU performs addition using logic gates (though abstracted significantly).

Let's think about `a + b` recursively.
*   If `b` is 0, then `a + b` is just `a`.
*   If `b` is greater than 0, then `a + b` is the same as `(a + 1) + (b - 1)`.

This might seem circular, but notice that `b` is decreasing with each step.

**Recursive Implementation:**

```python
def add_recursive(a, b):
    # Base Case
    if b == 0:
        return a
    # Recursive Step
    else:
        # We assume a and b are positive integers here for simplicity of the example.
        # To make this truly work for negative b, we'd need another base case or adjustment.
        return add_recursive(a + 1, b - 1)

# Example usage:
print(f"3 + 5 using recursion: {add_recursive(3, 5)}") # Expected: 8
print(f"10 + 0 using recursion: {add_recursive(10, 0)}") # Expected: 10
```

**Analysis:**

*   **Base Case:** `b == 0`. When the second number reaches 0, we've "added" all the necessary increments to `a`.
*   **Recursive Step:** `add_recursive(a + 1, b - 1)`. Here, `b` is decreased by 1 in each step, ensuring we move towards the base case of `b == 0`. `a` is incremented, effectively accumulating the value of `b`.
*   **Efficiency:** This is *highly* inefficient for standard addition, but it demonstrates the recursive thought process. Imagine counting up from `a`, `b` times.

---

#### 5. The Sum of Digits of a Positive Number

Given a positive integer, how can we find the sum of its digits? For example, for 123, the sum is $1 + 2 + 3 = 6$.

We can think of this recursively:
*   The sum of digits of a single-digit number (like 5) is just the number itself. This will be our base case.
*   For a multi-digit number (like 123), the sum of its digits is the last digit (`3`) plus the sum of the digits of the *remaining* number (`12`).

How do we get the last digit and the remaining number mathematically?
*   Last digit: `number % 10` (e.g., $123 \% 10 = 3$)
*   Remaining number: `number // 10` (integer division, e.g., $123 // 10 = 12$)

**Recursive Implementation:**

```python
def sum_digits_recursive(n):
    # Input validation (optional but good practice)
    if not isinstance(n, int) or n < 0:
        return "Input must be a non-negative integer"

    # Base Case: A single-digit number
    if n < 10:
        return n
    # Recursive Step
    else:
        last_digit = n % 10
        remaining_number = n // 10
        return last_digit + sum_digits_recursive(remaining_number)

# Example usage:
print(f"Sum of digits of 123: {sum_digits_recursive(123)}") # Expected: 6
print(f"Sum of digits of 9: {sum_digits_recursive(9)}")     # Expected: 9
print(f"Sum of digits of 7890: {sum_digits_recursive(7890)}") # Expected: 24
```

**Analysis:**

*   **Base Case:** `n < 10`. If the number is less than 10, it's a single digit, and its sum of digits is itself. This stops the recursion.
*   **Recursive Step:** `last_digit + sum_digits_recursive(remaining_number)`. We take the last digit and add it to the result of calling the same function on the number *without* its last digit.
*   **Progress:** The integer division `n // 10` always reduces the number, ensuring it eventually becomes a single-digit number, hitting the base case.

---

### Connecting to Course Outcomes

Let's see how this topic aligns with our course objectives:

*   **CO1: Utilize computing as a model for solving real-world problems.**
    Recursion is a powerful modeling technique. For problems with inherent self-similarity (like hierarchical data structures, game trees, or certain mathematical sequences), a recursive model in code often provides the most faithful and understandable representation of the problem.
*   **CO2: Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem.**
    To successfully implement recursion, you *must* first clearly define the base case(s) and the recursive step. This forces a rigorous articulation of the problem's structure, ensuring you have a correct model before writing code. Without this, your recursive function will fail. Donald Treffinger's work on creative problem-solving emphasizes breaking down challenges, and recursion is a prime example of this principle in action.
*   **CO3: Utilize effective algorithms to solve the formulated models and translate algorithms into executable programs.**
    The Euclidean Algorithm for GCD or the recursive definition of Fibonacci are algorithms that are often *best* expressed recursively. We've translated these directly into Python, demonstrating how to turn a recursive algorithmic idea into working code. However, as seen with Fibonacci, effectiveness also includes efficiency, a concept explored by authors like Israel Koren in *Computer Arithmetic Algorithms*.
*   **CO4: Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills.**
    Recursion is a fundamental problem-solving strategy. Understanding the call stack, base cases, and recursive steps provides insight into how programs manage complexity and state. This topic reinforces essential Python skills like function definition, parameters, return values, and conditional logic, all within a more advanced control flow structure.

---

### Quick Recall Tips & Exam Focus

*   **The Golden Rule:** Every recursive function MUST have at least one **base case** that stops the recursion.
*   **The Other Golden Rule:** Every recursive step must make progress towards a base case. The input to the recursive call must be "smaller" or closer to the base case condition.
*   **Call Stack = Memory:** Deep recursion consumes memory. If you see `RecursionError`, it's almost always an issue with your base case or progress.
*   **Common Problems:** Be prepared to write or analyze recursive solutions for: Factorial, Fibonacci, GCD, Sum of Digits, and potentially simple tree/list traversals (though those might be in later modules).
*   **Trace Execution:** For exams, you might be asked to "trace" the execution of a recursive function for a small input. Practice stepping through the calls and returns, keeping track of the call stack mentally or on paper.
*   **Iteration vs. Recursion:** Understand when one might be preferred over the other. Recursion for elegance/clarity on naturally recursive problems; iteration often for better performance (less overhead) and avoiding stack limits for very large inputs.

---

### Sample Questions with Answers

**Q1. Conceptual: What are the two essential components of a recursive function?**

**Answer:**
The two essential components of a recursive function are:
1.  **Base Case(s):** A condition that, when met, stops the recursion and returns a direct result.
2.  **Recursive Step:** The part where the function calls itself with modified arguments that move closer to the base case.

**Reasoning:** Without a base case, the function would call itself indefinitely, leading to a stack overflow. Without the recursive step making progress towards the base case, the base case would never be reached, also leading to infinite recursion.

**Q2. Exam-Oriented: Trace the execution of `sum_digits_recursive(45)` and show the return values.**

**Answer:**

Let's trace `sum_digits_recursive(45)`:

1.  `sum_digits_recursive(45)`:
    *   `n` is 45 (not < 10).
    *   `last_digit = 45 % 10 = 5`
    *   `remaining_number = 45 // 10 = 4`
    *   Returns `5 + sum_digits_recursive(4)`

2.  `sum_digits_recursive(4)`:
    *   `n` is 4 (is < 10). This is the base case.
    *   Returns `4`

3.  Now, substitute the result of step 2 back into step 1:
    *   `5 + 4`
    *   Returns `9`

**Therefore, `sum_digits_recursive(45)` returns 9.**

**Reasoning:** The function first breaks down 45 into its last digit (5) and the rest (4). It then recursively calls itself for 4. The call for 4 hits the base case and returns 4. The original call then combines its last digit (5) with the result of the recursive call (4) to produce the final sum (9).

**Q3. Conceptual: What is the primary cause of a `RecursionError: maximum recursion depth exceeded` in Python?**

**Answer:**
The primary cause of a `RecursionError` is **infinite recursion**. This happens when a recursive function either:
*   Lacks a proper base case that stops the recursion, OR
*   The recursive step does not guarantee that the input will eventually reach a base case.

In either scenario, the function keeps calling itself, adding more and more frames to the call stack. Python has a limit on the depth of the call stack to prevent memory exhaustion, and when this limit is reached, the `RecursionError` is raised.

**Reasoning:** The call stack is a finite resource. Each function call adds a frame. Infinite recursion means an infinite number of frames would theoretically be needed, which is impossible. Python enforces a practical limit.

**Q4. Exam-Oriented: Write a recursive Python function to calculate the factorial of a non-negative integer.**

**Answer:**

```python
def factorial_recursive(n):
    """
    Calculates the factorial of a non-negative integer using recursion.

    Args:
        n: A non-negative integer.

    Returns:
        The factorial of n, or an error message for invalid input.
    """
    # Input validation
    if not isinstance(n, int) or n < 0:
        return "Input must be a non-negative integer."

    # Base Case: Factorial of 0 is 1
    if n == 0:
        return 1
    # Recursive Step: n * (n-1)!
    else:
        return n * factorial_recursive(n - 1)

# Example usage:
# print(factorial_recursive(5)) # Output: 120
# print(factorial_recursive(0)) # Output: 1
# print(factorial_recursive(-2)) # Output: Input must be a non-negative integer.
```

**Reasoning:**
*   **Base Case:** `if n == 0: return 1`. This is the stopping condition for factorial.
*   **Recursive Step:** `else: return n * factorial_recursive(n - 1)`. This breaks down the problem `n!` into `n * (n-1)!`. The `n-1` ensures that the input to the recursive call gets progressively smaller, eventually reaching the base case `n=0`. The multiplication `n * ...` reconstructs the factorial value as the recursion unwinds.

---
This concludes our introduction to recursion. It's a fundamental concept that, once grasped, can unlock very elegant solutions to many computational problems. Keep practicing and remember those base cases!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
