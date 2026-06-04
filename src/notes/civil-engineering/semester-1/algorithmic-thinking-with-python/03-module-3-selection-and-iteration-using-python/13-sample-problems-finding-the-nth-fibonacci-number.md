---
title: "Sample problems - Finding the nth Fibonacci number"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 3: SELECTION AND ITERATION USING PYTHON:"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912b78"
status: "completed"
scrapedAt: "2026-05-20T18:28:25.540Z"
---
# Module 3: Selection and Iteration Using Python: Finding the nth Fibonacci Number

Welcome, everyone! In this session, we're going to dive into a classic problem that beautifully illustrates the power of iteration and selection in programming: **finding the nth Fibonacci number**. This might sound a bit abstract, but trust me, it’s a fundamental concept that pops up everywhere, from nature to computer science algorithms.

Our goal today is to understand how we can use Python to calculate any number in the Fibonacci sequence. This will directly help us achieve **Course Outcome 3 (CO3)**: to use effective algorithms and translate them into executable programs. By the end, you'll see how we are applying algorithmic thinking to model a problem and then solve it computationally.

## What is the Fibonacci Sequence?

Let's start with the basics. Have you ever noticed how petals on many flowers appear in specific numbers? Or how the branching pattern of trees seems to follow a certain logic? Often, these patterns are related to the Fibonacci sequence!

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. It typically starts with 0 and 1.

So, let's write it out:

The first number is 0.
The second number is 1.
The third number is 0 + 1 = 1.
The fourth number is 1 + 1 = 2.
The fifth number is 1 + 2 = 3.
The sixth number is 2 + 3 = 5.
And so on...

The sequence looks like this: **0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...**

We often denote the nth Fibonacci number as F(n).
So, F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3, and so forth.

This definition itself gives us a recursive relationship: **F(n) = F(n-1) + F(n-2)** for n > 1.
This is a core concept, and understanding this relationship is crucial. Think of it like building blocks: to know where you're going next, you need to know where you've just been, specifically the last two steps.

### Connecting to Learning Outcomes and Course Goals

*   **Algorithmic Thinking:** The Fibonacci sequence definition is inherently algorithmic. It tells us *how* to get from one number to the next. This directly supports **Course Outcome 2 (CO2)** – articulating a problem and preparing a model. Our model here is the mathematical definition of the sequence.
*   **Problem Solving:** Our problem is: "Given an integer `n`, find the `n`th Fibonacci number." This is a clear, computational problem we can tackle.
*   **Iteration/Selection:** The definition F(n) = F(n-1) + F(n-2) hints at repetition. To find F(5), we need F(4) and F(3). To find F(4), we need F(3) and F(2), and so on, until we reach our base cases (F(0) and F(1)). This is where *iteration* (loops) comes into play, a key theme of this module. We'll also use *selection* (if statements) to handle our base cases.

## Ways to Find the nth Fibonacci Number

There are a few ways we can approach this, each with its own advantages and disadvantages. We'll explore two primary methods:

1.  **Using Iteration (The Loop Approach)**
2.  **Using Recursion (The Self-Referential Approach)** - *We’ll touch upon this briefly to contrast, as iteration is our focus for this module.*

### Method 1: Finding Fibonacci Using Iteration (Loops)

This is often the most straightforward and efficient way for beginners, especially when dealing with finding the *nth* term. It's all about simulating the sequence generation step-by-step.

Imagine you're tracking two numbers as you walk along a path. To know where you are, you only need to remember your current position and your previous position.

Let's say we want to find the 7th Fibonacci number (F(7)). We know it's 13. How do we get there using a loop?

We need to keep track of the two most recent Fibonacci numbers. Let's call them `a` and `b`.

*   Initially, `a` can be the 0th number (0) and `b` can be the 1st number (1).
*   To get the next number (which is the 2nd number), we sum `a` and `b` (0 + 1 = 1).
*   Now, for the *next* step, our "previous" number becomes the one that was "current," and our "current" number becomes the newly calculated sum. So, `a` becomes the old `b`, and `b` becomes the sum.

Let's trace this for F(7):

| Step | Current `a` | Current `b` | Next Fibonacci (a + b) | New `a` (old `b`) | New `b` (sum) | Iteration Count | Corresponds to F(n) |
| :--- | :---------- | :---------- | :--------------------- | :---------------- | :------------ | :-------------- | :------------------ |
| Initial | 0           | 1           | -                      | -                 | -             | -               | F(0), F(1)          |
| 1    | 0           | 1           | 1                      | 1                 | 1             | 2nd number      | F(2) = 1            |
| 2    | 1           | 1           | 2                      | 1                 | 2             | 3rd number      | F(3) = 2            |
| 3    | 1           | 2           | 3                      | 2                 | 3             | 4th number      | F(4) = 3            |
| 4    | 2           | 3           | 5                      | 3                 | 5             | 5th number      | F(5) = 5            |
| 5    | 3           | 5           | 8                      | 5                 | 8             | 6th number      | F(6) = 8            |
| 6    | 5           | 8           | 13                     | 8                 | 13            | 7th number      | F(7) = 13           |

So, after 6 iterations (to get to the 7th number, starting from the 1st), our `b` variable holds the answer, 13.

This process is perfect for a `for` loop in Python. We need to loop `n-1` times if we start with `a=0` and `b=1` to calculate up to F(n).

**Python Code Snippet Idea:**

```python
def fibonacci_iterative(n):
    if n < 0:
        return "Input cannot be negative"
    elif n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        a = 0
        b = 1
        # We need to iterate n-1 times to reach the nth number
        # For example, to get F(2), we need 1 iteration. To get F(7), we need 6 iterations.
        for _ in range(2, n + 1): # Loop from the 2nd number up to the nth number
            next_fib = a + b
            a = b          # Update a to the previous b
            b = next_fib   # Update b to the new sum
        return b
```

**Explanation of the Code:**

*   **`def fibonacci_iterative(n):`**: This defines a function named `fibonacci_iterative` that takes one argument, `n`, which is the position of the Fibonacci number we want.
*   **`if n < 0:`**: We first handle invalid input. Fibonacci is usually defined for non-negative integers. This is a form of *selection*.
*   **`elif n == 0:`** and **`elif n == 1:`**: These are our *base cases*. If `n` is 0, we return 0. If `n` is 1, we return 1. This is critical because our loop logic relies on having these starting points. Without them, the calculation would be incorrect. This aligns with **Course Outcome 4 (CO4)**: interpreting problem-solving strategies and essential Python skills.
*   **`else:`**: This is where the iterative magic happens for `n > 1`.
*   **`a = 0`**, **`b = 1`**: We initialize our two variables to hold the first two Fibonacci numbers.
*   **`for _ in range(2, n + 1):`**: This is our `for` loop. We want to perform the summing operation for each number from the 2nd position up to the `n`th position.
    *   The `_` is a convention in Python to indicate that we don't actually need to use the loop counter variable itself within the loop.
    *   `range(2, n + 1)` generates a sequence of numbers starting from 2 and going up to, but *not including*, `n + 1`. So, if `n` is 7, it will generate 2, 3, 4, 5, 6, 7. This means the loop body will execute 6 times, which is exactly what we need to calculate F(7) starting from F(2).
*   **`next_fib = a + b`**: This calculates the next number in the sequence.
*   **`a = b`**: We shift our numbers. The old "current" number (`b`) now becomes the "previous" number (`a`).
*   **`b = next_fib`**: The newly calculated number becomes our "current" number (`b`).
*   **`return b`**: After the loop finishes, `b` will hold the `n`th Fibonacci number.

**Relatable Analogy:** Think about saving money. You have your current savings (`b`) and the amount you saved last month (`a`). To calculate your savings this month, you add last month's savings to your current savings (`next_fib = a + b`). Then, to prepare for next month, what you saved last month (`a`) becomes irrelevant for the next sum, and your current savings (`b`) becomes the "previous" savings for the next calculation, and the new total (`next_fib`) becomes your new "current" savings. You repeat this process until you reach your target month.

**Exam Tip:** Be careful with the `range()` function. For calculating F(n), if you start with F(0) and F(1), you need `n-1` additions. The `range(2, n + 1)` approach correctly handles this.

### Method 2: Finding Fibonacci Using Recursion (Briefly)

Recursion is when a function calls itself. The Fibonacci sequence has a natural recursive definition: F(n) = F(n-1) + F(n-2).

**Python Code Snippet Idea (Recursive):**

```python
def fibonacci_recursive(n):
    if n < 0:
        return "Input cannot be negative"
    elif n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
```

**Why Iteration is Often Preferred Here:**

While elegant, the recursive approach for Fibonacci can be very inefficient for larger `n`. Why? Because it recalculates the same Fibonacci numbers many, many times. For example, to find F(5), it calculates F(4) and F(3). To find F(4), it calculates F(3) and F(2). Notice that F(3) is calculated twice! As `n` grows, the number of redundant calculations explodes. This is a classic example where an iterative solution is far superior in terms of performance. For this module focusing on selection and iteration, the iterative approach is what we’ll emphasize and use. This understanding of efficiency ties into **Course Outcome 1 (CO1)**: utilizing computing as a model for solving real-world problems, where efficiency is a key consideration.

## Connecting to Textbooks and Key Concepts

Our approach aligns with principles found in our reference books:

*   **Maureen Sprankle & Jim Hubbard's "Problem Solving & Programming Concepts"**: This book emphasizes breaking down problems into smaller, manageable steps, which is exactly what we do by identifying the base cases and the iterative step for Fibonacci. It also highlights the importance of designing algorithms before coding.
*   **George Pólya's "How to Solve It"**: Pólya's principles are fundamental. We first *understand the problem* (what is the nth Fibonacci number?). Then, we *devise a plan* (use iteration, keep track of two numbers). We *carry out the plan* (write the Python code). Finally, we *look back* (test the code, consider efficiency).
*   **John V. Guttag's "Introduction to Computation and Programming using Python"**: Guttag's text provides a solid foundation in algorithmic thinking and the implementation of algorithms in Python, including the use of loops and conditional statements, which are central to our iterative Fibonacci solution. He often discusses the trade-offs between different algorithmic approaches, reinforcing why iteration is preferred here.
*   **Cay S. Horstmann & Rance D. Necaise's "Python for Everyone"**: This book is excellent for practical Python programming. It covers loops, conditional statements, and function definitions thoroughly, all of which are utilized in our `fibonacci_iterative` function.

## Summary and Key Takeaways

*   The Fibonacci sequence is defined by F(n) = F(n-1) + F(n-2) with base cases F(0) = 0 and F(1) = 1.
*   The iterative approach uses a loop to calculate each Fibonacci number sequentially, keeping track of only the two previous numbers. This is efficient.
*   **Selection** (if/elif/else) is crucial for handling the base cases (n=0, n=1) and invalid inputs.
*   **Iteration** (for loops) is used to repeat the calculation of `a + b` until we reach the desired `n`th number.
*   For finding the nth term, the iterative method is generally preferred over the naive recursive method due to its significantly better performance. This is an important concept for **Course Outcome 1 (CO1)** and **CO3**.

Remember this: when you need to compute a sequence where each term depends on a fixed number of previous terms, iteration is usually your best friend for efficiency!

## Sample Questions and Answers

Let's test your understanding with a few questions.

---

**Question 1 (Conceptual):**

What is the primary advantage of using an iterative approach over a naive recursive approach to calculate the nth Fibonacci number in Python, especially as `n` increases?

**Answer:**
The primary advantage is **efficiency**. The naive recursive approach recalculates the same Fibonacci numbers multiple times, leading to an exponential growth in computation time (time complexity). The iterative approach, by contrast, calculates each Fibonacci number only once and stores the necessary previous two values, resulting in linear growth in computation time (linear time complexity). This is a critical concept related to **Course Outcome 1 (CO1)** and **CO3**.

---

**Question 2 (Exam-Oriented):**

Write a Python function called `calculate_fibonacci` that takes an integer `num` as input and returns the `num`th Fibonacci number. Your function should handle the base cases for 0 and 1, and use an iterative approach.

**Answer:**

```python
def calculate_fibonacci(num):
    """
    Calculates the num-th Fibonacci number using an iterative approach.

    Args:
        num: An integer representing the position in the Fibonacci sequence (non-negative).

    Returns:
        The num-th Fibonacci number, or an error message for invalid input.
    """
    if not isinstance(num, int) or num < 0:
        return "Invalid input: Please provide a non-negative integer."
    elif num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        # Initialize the first two Fibonacci numbers
        prev_fib = 0  # Corresponds to F(0)
        curr_fib = 1  # Corresponds to F(1)

        # Iterate from the 2nd Fibonacci number up to the num-th Fibonacci number
        # The loop will run num - 1 times.
        for _ in range(2, num + 1):
            next_fib = prev_fib + curr_fib
            # Update the previous and current Fibonacci numbers for the next iteration
            prev_fib = curr_fib
            curr_fib = next_fib
        
        return curr_fib

# Example Usage:
# print(calculate_fibonacci(7))  # Expected output: 13
# print(calculate_fibonacci(0))  # Expected output: 0
# print(calculate_fibonacci(1))  # Expected output: 1
# print(calculate_fibonacci(10)) # Expected output: 55
# print(calculate_fibonacci(-5)) # Expected output: Invalid input message
```

**Reasoning:**
*   The code first checks for invalid input (`num < 0` or not an integer), demonstrating **selection** as per **Course Outcome 4 (CO4)**.
*   It correctly handles the base cases `num == 0` and `num == 1`.
*   For `num > 1`, it initializes `prev_fib` to 0 (F(0)) and `curr_fib` to 1 (F(1)).
*   The `for` loop iterates from 2 up to `num` (inclusive). This means if we want F(7), the loop runs for `i = 2, 3, 4, 5, 6, 7`.
*   Inside the loop, `next_fib` is calculated as the sum of the two preceding numbers.
*   The values of `prev_fib` and `curr_fib` are then updated. `prev_fib` takes the value of `curr_fib`, and `curr_fib` takes the value of `next_fib`. This correctly shifts the window to calculate the next number in the sequence.
*   After the loop completes, `curr_fib` holds the `num`th Fibonacci number, which is returned. This is a direct application of **Course Outcome 3 (CO3)**.

---

**Question 3 (Conceptual):**

Consider the expression `for _ in range(2, n + 1):`. If `n` is 5, how many times will the code inside this loop execute? What Fibonacci number will be computed as `next_fib` in the last iteration?

**Answer:**
If `n` is 5, `range(2, 5 + 1)` is `range(2, 6)`. This sequence is `2, 3, 4, 5`. Therefore, the loop will execute **4 times**.

Let's trace:
*   Initial: `prev_fib = 0`, `curr_fib = 1`
*   Iteration 1 (for `_` = 2): `next_fib = 0 + 1 = 1`. `prev_fib = 1`, `curr_fib = 1`. (Calculates F(2))
*   Iteration 2 (for `_` = 3): `next_fib = 1 + 1 = 2`. `prev_fib = 1`, `curr_fib = 2`. (Calculates F(3))
*   Iteration 3 (for `_` = 4): `next_fib = 1 + 2 = 3`. `prev_fib = 2`, `curr_fib = 3`. (Calculates F(4))
*   Iteration 4 (for `_` = 5): `next_fib = 2 + 3 = 5`. `prev_fib = 3`, `curr_fib = 5`. (Calculates F(5))

So, in the last iteration (when `_` is 5), `next_fib` will be computed as **5**. This confirms our understanding of how iteration progresses through the sequence, supporting **Course Outcome 4 (CO4)**.
