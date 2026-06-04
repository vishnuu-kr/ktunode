---
title: "SELECTION AND ITERATION USING PYTHON:- if-else, elif, for loop, range, while loop."
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 3: SELECTION AND ITERATION USING PYTHON:"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da11a"
status: "completed"
scrapedAt: "2026-05-23T17:32:41.587Z"
---
# Algorithmic Thinking with Python: Module 3 - Selection and Iteration using Python

Welcome, everyone, to Module 3! In our journey through algorithmic thinking, we've laid the groundwork for understanding how to break down problems and think computationally. Now, we're going to equip ourselves with the fundamental building blocks that make programs dynamic and responsive: **Selection** and **Iteration**. These are the tools that allow our programs to make choices and repeat actions, much like we do every day!

Think about it. In your own life, you're constantly making decisions based on conditions, right? "If it's raining, I'll take an umbrella." "If I'm hungry, I'll eat something." And you also repeat tasks. "I'll check my email every hour." "I'll practice the piano for 30 minutes each day." Python, and indeed most programming languages, mimic these human thought processes.

This module directly supports our Course Outcomes:

*   **CO1 (Utilize computing as a model for solving real-world problems):** By understanding selection and iteration, you’ll see how these abstract concepts translate into concrete solutions for everything from simple calculations to complex simulations.
*   **CO2 (Articulate a problem before attempting to solve it and prepare a clear and accurate model):** Deciding *when* to use selection versus iteration is a crucial part of problem modeling. We'll learn to identify the right tool for the job.
*   **CO3 (Utilize effective algorithms to solve the formulated models and translate algorithms into executable programs):** Selection and iteration are core algorithmic structures. Mastering them is essential for writing efficient and correct Python programs.
*   **CO4 (Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills):** This module dives deep into these systematic approaches and develops your core Python skills in controlling program flow.

Let's get started!

## 1. Making Choices: Selection (Conditional Statements)

At its heart, selection is about making decisions. In Python, we use **conditional statements** to control the flow of our program. The program will execute different blocks of code based on whether a certain condition is true or false.

### 1.1 The `if` Statement: The Simple Decision

The most basic form of selection is the `if` statement. It’s like saying, "If this one thing is true, then do this."

Imagine you're deciding whether to buy a book. Your rule might be: "If the book is on sale, then buy it."

In Python, this translates beautifully:

```python
# Example: Deciding if a book is on sale
is_book_on_sale = True  # Let's say the book is indeed on sale

if is_book_on_sale:
    print("Great! I'll buy the book.")
```

**Key Points about `if`:**

*   **Condition:** The `if` statement is followed by a condition. This condition is an expression that evaluates to either `True` or `False`. In our example, `is_book_on_sale` is a boolean variable, which is already `True`. You can also use comparison operators like `<`, `>`, `==` (equal to), `!=` (not equal to), `<=`, `>=` or logical operators (`and`, `or`, `not`).
*   **Indentation:** This is *super* important in Python. The code that should run *if* the condition is true must be indented (usually with 4 spaces). Python uses indentation to define code blocks. Miss this, and you'll get errors! It’s how Python understands which statements belong to the `if`.
*   **Colon:** Don't forget the colon `:` after the condition. It signals the start of the indented block.

**What if the condition isn't met?** If `is_book_on_sale` were `False`, the `print` statement inside the `if` block would simply be skipped. The program would move on to whatever comes *after* the `if` statement.

### 1.2 The `if-else` Statement: Two Paths

What if you need to do something *even if* the condition is false? That’s where `else` comes in. It’s like saying, "If this is true, do A. Otherwise (else), do B."

Let's extend our book example: "If the book is on sale, buy it. Otherwise, think about whether to buy it later."

```python
# Example: Deciding if a book is on sale with an alternative
is_book_on_sale = False  # Now, let's say it's not on sale

if is_book_on_sale:
    print("Great! I'll buy the book.")
else:
    print("The book is not on sale. I'll add it to my wishlist.")

print("Continuing with my day.") # This will always print
```

See how the `else` block is executed only when `is_book_on_sale` is `False`? The `print("Continuing with my day.")` statement outside the `if-else` structure will always run because it's not part of either the `if` or `else` block. This is how you control the flow – you decide which path the program takes.

This structure aligns with **CO4** by demonstrating a systematic approach to problem-solving: considering alternative outcomes.

### 1.3 The `if-elif-else` Statement: Multiple Choices

Life isn't always a simple yes/no. Often, we have several possibilities. For example, grading a student's exam score.

"If the score is 90 or above, it's an A. If it's 80 or above (but less than 90), it's a B. If it's 70 or above (but less than 80), it's a C. Otherwise, it's a failing grade."

Python's `elif` (short for "else if") is perfect for this! It allows you to check multiple conditions in sequence.

```python
# Example: Assigning a letter grade
score = 85

if score >= 90:
    grade = 'A'
elif score >= 80:  # This is checked only if score < 90
    grade = 'B'
elif score >= 70:  # This is checked only if score < 80
    grade = 'C'
else:             # This is the catch-all if none of the above are true
    grade = 'F'

print(f"Your score of {score} corresponds to a grade of {grade}.")
```

**How `elif` works:**

1.  Python checks the `if` condition first. If it's `True`, the corresponding block runs, and the rest of the `elif`/`else` chain is skipped.
2.  If the `if` condition is `False`, Python moves to the first `elif`. If that condition is `True`, its block runs, and the rest of the chain is skipped.
3.  This continues for all `elif` conditions.
4.  If *all* `if` and `elif` conditions are `False`, the `else` block (if present) is executed.

**Important:** The order of `elif` statements matters! In our grading example, if we put `elif score >= 70:` *before* `elif score >= 80:`, a score of 85 would be classified as 'C', which is incorrect. Always arrange your conditions from most specific to least specific, or in a logical sequence where each condition builds upon the previous ones failing. This is a key aspect of algorithm design that directly relates to **CO3**.

**Thinking like a problem-solver (CO2):** When you're faced with a problem, you first need to identify the different scenarios or "branches" the program might take. Is it a simple binary choice (`if-else`) or are there multiple outcomes to consider (`if-elif-else`)? This analytical step is vital.

### 1.4 Nesting Conditional Statements

You can also put `if`, `elif`, or `else` statements *inside* other `if`, `elif`, or `else` statements. This is called **nesting**. It’s useful for situations where one decision depends on the outcome of a previous decision.

Imagine you're checking if you can go to the park: "If the weather is good, *then* if I've finished my homework, I can go to the park."

```python
# Example: Nested conditionals for going to the park
weather_is_good = True
homework_is_done = False

if weather_is_good:
    print("The weather is nice!")
    if homework_is_done:
        print("And homework is done. Let's go to the park!")
    else:
        print("But homework isn't done yet. I need to finish that first.")
else:
    print("The weather is not good. No park today.")
```

**A word of caution:** While nesting is powerful, it can quickly make your code hard to read and debug if you have too many levels of nesting. As John V. Guttag mentions in "Introduction to Computation and Programming using Python," clarity is paramount. Sometimes, restructuring your logic to avoid deep nesting can lead to more maintainable code.

## 2. Doing Things Repeatedly: Iteration (Loops)

Now, let's talk about repetition. Computers are excellent at doing the same thing over and over, very quickly and without getting bored! This is where **iteration** comes in, achieved through **loops**.

Think about your daily routine: brushing your teeth, eating breakfast. These are repetitive tasks. In programming, we use loops to automate such processes.

There are two main types of loops in Python: `for` loops and `while` loops.

### 2.1 The `for` Loop: Repeating a Known Number of Times

The `for` loop is perfect when you know in advance how many times you want to repeat an action, or when you want to go through each item in a sequence (like a list of names, or a string of characters).

#### 2.1.1 Using `range()` with `for` Loops

A very common way to use a `for` loop is with the `range()` function. `range()` generates a sequence of numbers, which the `for` loop then iterates over.

*   `range(stop)`: Generates numbers from 0 up to (but *not including*) `stop`.
*   `range(start, stop)`: Generates numbers from `start` up to (but *not including*) `stop`.
*   `range(start, stop, step)`: Generates numbers from `start` up to (but *not including*) `stop`, incrementing by `step`.

Let's say you want to print "Hello!" five times.

```python
# Example: Repeating an action a fixed number of times
print("Starting the loop...")
for i in range(5): # i will take values 0, 1, 2, 3, 4
    print(f"Hello! This is iteration number {i}")
print("Loop finished.")
```

Here, `i` is a variable that takes on each value generated by `range(5)` one by one. The code inside the loop (the `print` statement) is executed for each value of `i`. This demonstrates **CO3** by translating an algorithmic idea (repeat 5 times) into code.

Let's try another one, printing numbers from 1 to 10:

```python
# Example: Printing numbers from 1 to 10
for number in range(1, 11): # Starts at 1, goes up to (but not including) 11
    print(number)
```

Here, `number` will sequentially become 1, then 2, then 3, and so on, up to 10.

We can also use a `step` value. Let's print all even numbers from 0 to 20:

```python
# Example: Printing even numbers
for num in range(0, 21, 2): # Start at 0, go up to 21, increment by 2
    print(num)
```

This is incredibly useful for tasks like processing data points at regular intervals.

#### 2.1.2 Iterating Over Sequences (Lists, Strings)

You can directly loop over the items in a list or characters in a string without needing `range()`.

Imagine you have a list of friends you want to invite to a party.

```python
# Example: Iterating over a list of friends
friends = ["Alice", "Bob", "Charlie", "Diana"]

print("Inviting friends:")
for friend in friends:
    print(f"Hi {friend}, would you like to come to my party?")
```

The loop variable `friend` will successively take on the values "Alice", then "Bob", then "Charlie", and finally "Diana". This is a direct application of **CO3** – translating a list of items into an action for each item.

Similarly, you can loop through a string:

```python
# Example: Iterating over characters in a string
message = "Python"

print("Characters in the message:")
for char in message:
    print(char)
```

This will print each letter of "Python" on a new line.

### 2.2 The `while` Loop: Repeating as Long as a Condition is True

The `while` loop is different from the `for` loop. It repeats a block of code *as long as* a specified condition remains `True`. You don't necessarily know how many times it will run beforehand; it depends entirely on when the condition changes.

Think of a simple game: "Keep asking the user for input until they type 'quit'."

```python
# Example: User input loop
user_input = "" # Initialize user_input to something other than 'quit'

while user_input != "quit":
    user_input = input("Enter a command (or 'quit' to exit): ")
    if user_input != "quit":
        print(f"You entered: {user_input}")

print("Exiting the program. Goodbye!")
```

**How `while` works:**

1.  Python checks the condition (`user_input != "quit"`).
2.  If the condition is `True`, the code inside the `while` block is executed.
3.  After the block finishes, Python goes back to step 1 and checks the condition *again*.
4.  This cycle continues as long as the condition remains `True`.
5.  When the condition finally becomes `False` (when the user types "quit"), the loop terminates, and the program continues with the code *after* the `while` loop.

**Crucial for `while` loops: Infinite Loops!**

You *must* ensure that the condition in a `while` loop will eventually become `False`. If it never changes, the loop will run forever – an **infinite loop**. This is a common pitfall!

Consider this (don't run it unless you know how to stop it, usually Ctrl+C):

```python
# DANGER: Infinite Loop Example
# counter = 0
# while counter < 5:
#     print("Still going...")
#     # We forgot to increment counter! It will always be 0.
```

In this faulty example, `counter` is initialized to 0. The condition `counter < 5` is `True`. Inside the loop, `counter` is never changed, so it remains 0. The condition will *always* be `True`, and the loop will never stop. This is where careful algorithm design, as stressed in **CO2** and **CO3**, is vital. You need to think about the state changes within your loop.

The `while` loop is excellent for situations where you need to process data until a certain threshold is met or an error condition is resolved.

### 2.3 Loop Control Statements: `break` and `continue`

Sometimes, you might want to exit a loop early or skip an iteration. Python provides `break` and `continue` for this.

#### 2.3.1 `break`: Escape Hatch

The `break` statement immediately terminates the loop it's in, regardless of whether the loop's condition is still `True` or if there are more items to process.

Let's modify our friend invitation example. What if we have a limit on how many people we can invite?

```python
# Example: Using break to limit invitations
friends = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"]
invitation_limit = 3
invited_count = 0

print("Inviting friends (up to a limit):")
for friend in friends:
    if invited_count < invitation_limit:
        print(f"Hi {friend}, would you like to come to my party?")
        invited_count += 1
    else:
        print("Reached invitation limit. Stopping.")
        break # Exit the loop immediately

print("Invitation process finished.")
```

In this case, even though there are more friends in the `friends` list, the loop stops once `invited_count` reaches `invitation_limit` because of the `break` statement.

You can also use `break` in `while` loops.

#### 2.3.2 `continue`: Skip to the Next Iteration

The `continue` statement, on the other hand, skips the *rest of the current iteration* of the loop and proceeds directly to the next one.

Let's say we want to invite friends, but we want to skip inviting anyone named "Eve" because she always brings too much food!

```python
# Example: Using continue to skip an iteration
friends = ["Alice", "Bob", "Eve", "Charlie", "Diana"]

print("Inviting friends (skipping Eve):")
for friend in friends:
    if friend == "Eve":
        print("Skipping Eve for now...")
        continue # Skip the rest of this iteration and go to the next friend
    print(f"Hi {friend}, would you like to come to my party?")

print("Invitation process finished.")
```

When the loop encounters "Eve", the `continue` statement is executed. The `print(f"Hi {friend}...")` line is skipped for "Eve", and the loop immediately moves to process "Charlie".

Understanding `break` and `continue` is crucial for writing precise algorithms, directly supporting **CO3**.

## 3. Connecting to Course Outcomes and Concepts

Let's recap how these concepts tie back to our broader learning objectives:

*   **CO1 & CO4 (Understanding Computing as a Model, Systematic Approaches):** Selection (`if`, `elif`, `else`) and iteration (`for`, `while`) are the fundamental control structures in programming. They model real-world decision-making and repetitive tasks, forming the backbone of most algorithms. Without them, programs would just execute commands linearly, unable to adapt or perform complex operations. As Maureen Sprankle and Jim Hubbard emphasize in "Problem Solving & Programming Concepts," understanding these control structures is essential for translating problem logic into code.
*   **CO2 (Articulating Problems and Modeling):** When you encounter a problem, you need to ask yourself:
    *   Does this problem involve making choices based on conditions? If yes, selection is needed.
    *   Does this problem involve repeating an action a set number of times or until a condition changes? If yes, iteration is needed.
    *   The `range()` function, for instance, helps model problems where actions need to occur at regular intervals.
*   **CO3 (Effective Algorithms and Translating to Programs):**
    *   **`if-elif-else`:** This structure models decision trees or state machines, where program behavior changes based on input or internal state.
    *   **`for` loops with `range()`:** Ideal for algorithms that require a fixed number of steps or processing data sequentially (e.g., calculating sums, finding averages, simulating events over time).
    *   **`for` loops over sequences:** Essential for processing collections of data (e.g., searching a list, transforming data in a list).
    *   **`while` loops:** Used for algorithms that continue until a specific condition is met (e.g., searching until an item is found, input validation, simulations that run until a certain state is achieved). George Pólya's "How to Solve It" teaches us to understand, plan, carry out, and review. Planning often involves identifying these fundamental control flow patterns.
    *   `break` and `continue` are fine-tuning tools for algorithms, allowing for more dynamic control flow within loops, crucial for optimizing or handling edge cases.

### Common Pitfalls and Exam Tips:

*   **Indentation:** Python lives and dies by indentation. A missing colon or incorrect indentation will break your code. Always double-check this!
*   **`range()` end value:** Remember that `range(stop)` goes up to `stop - 1`. If you need to include a number, add 1 to your `stop` argument.
*   **Infinite Loops:** Always ensure your `while` loop condition will eventually become `False`. Think about what needs to change inside the loop to make that happen.
*   **Order of `elif`:** The sequence matters. Place more specific conditions before more general ones.
*   **Boolean Expressions:** Understand how comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) and logical operators (`and`, `or`, `not`) create `True`/`False` values for your conditions.

## Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to exam-style:

**Q1. Conceptual: What is the primary difference between a `for` loop and a `while` loop in Python?**

**Answer:** The primary difference lies in how they control repetition. A `for` loop is typically used when you know the number of iterations in advance or want to iterate over a sequence. A `while` loop is used when you want to repeat a block of code as long as a certain condition remains `True`, and the number of iterations isn't necessarily known beforehand. Think of `for` as "do this for each item" or "do this X times," and `while` as "do this as long as condition Y is met."

**Q2. Conceptual: Why is indentation crucial in Python's conditional statements and loops?**

**Answer:** Python uses indentation to define code blocks. For `if`, `elif`, `else`, `for`, and `while` statements, the indented lines that follow the colon (`:`) are considered part of that statement's block. Without correct indentation, Python cannot determine which statements belong to which block, leading to syntax errors or incorrect program logic. This is a fundamental aspect of Python's syntax and contributes to its readability, a point often discussed in texts like Guttag's "Introduction to Computation and Programming using Python."

**Q3. Exam-Oriented: What will be the output of the following Python code?**

```python
count = 5
while count > 0:
    print(count)
    count -= 2
print("Blast off!")
```

**Answer:**

The code will produce the following output:
```
5
3
1
Blast off!
```

**Reasoning:**
1.  `count` starts at 5.
2.  The `while count > 0` condition is `True` (5 > 0).
3.  Print `count` (outputs 5).
4.  `count` becomes `5 - 2 = 3`.
5.  The `while` condition is checked again: `True` (3 > 0).
6.  Print `count` (outputs 3).
7.  `count` becomes `3 - 2 = 1`.
8.  The `while` condition is checked again: `True` (1 > 0).
9.  Print `count` (outputs 1).
10. `count` becomes `1 - 2 = -1`.
11. The `while` condition is checked again: `False` (-1 > 0 is false).
12. The loop terminates.
13. The line after the loop, `print("Blast off!")`, is executed.

**Q4. Exam-Oriented: Trace the execution of this code and determine its output:**

```python
for i in range(3):
    for j in range(2):
        if (i + j) % 2 == 0:
            print(f"({i}, {j}) - Even")
        else:
            print(f"({i}, {j}) - Odd")
```

**Answer:**

The output will be:
```
(0, 0) - Even
(0, 1) - Odd
(1, 0) - Odd
(1, 1) - Even
(2, 0) - Even
(2, 1) - Odd
```

**Reasoning:**
This involves nested loops. The outer loop variable `i` goes from 0 to 2. The inner loop variable `j` goes from 0 to 1 for each value of `i`. The condition `(i + j) % 2 == 0` checks if the sum of `i` and `j` is even.

*   **i=0:**
    *   **j=0:** `(0+0) % 2 == 0`. True. Output: `(0, 0) - Even`
    *   **j=1:** `(0+1) % 2 == 1`. False. Output: `(0, 1) - Odd`
*   **i=1:**
    *   **j=0:** `(1+0) % 2 == 1`. False. Output: `(1, 0) - Odd`
    *   **j=1:** `(1+1) % 2 == 0`. True. Output: `(1, 1) - Even`
*   **i=2:**
    *   **j=0:** `(2+0) % 2 == 0`. True. Output: `(2, 0) - Even`
    *   **j=1:** `(2+1) % 2 == 1`. False. Output: `(2, 1) - Odd`

This question tests your ability to trace nested loops and evaluate conditional expressions, a common exam task for **CO3** and **CO4**.

Keep practicing, and don't hesitate to experiment with these concepts. They are the absolute foundation of building any interesting program!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
