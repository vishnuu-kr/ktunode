---
title: "SELECTION AND ITERATION USING PYTHON:- if-else, elif, for loop, range, while loop."
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 3: SELECTION AND ITERATION USING PYTHON:"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1e0bca560598cfa34a96"
status: "completed"
scrapedAt: "2026-05-20T17:36:28.108Z"
---
# Module 3: Selection and Iteration Using Python

Welcome, everyone! In this module, we're going to dive into two of the most fundamental building blocks of any program: **Selection** and **Iteration**. Think of them as the decision-makers and the repeaters in your code. Without them, programs would be very rigid, executing instructions in a straight line, unable to adapt to different situations or perform repetitive tasks efficiently. Python, like many powerful languages, gives us elegant ways to handle both.

This module directly supports our Course Outcomes, particularly **CO1 (Utilize computing as a model for solving real-world problems)** and **CO3 (Use effective algorithms to solve the formulated models and translate algorithms into executable programs)**. By understanding selection and iteration, we're learning how to create dynamic and responsive models for problems we encounter in the real world, and then turning those models into working Python programs. We'll also be touching upon **CO2 (Articulate a problem... prepare a clear and accurate model)** as we think about *when* and *why* we'd use these constructs to model different problem scenarios.

### 1. Selection: Making Decisions with `if`, `elif`, and `else`

Imagine you're at a crossroads, or deciding what to wear based on the weather. You don't just do the same thing every time, right? You *select* an action based on a condition. In programming, this is called **selection**, and in Python, we use the `if`, `elif` (short for "else if"), and `else` statements to achieve this.

At its heart, selection is about evaluating a **condition**. A condition is an expression that can be either `True` or `False`. For instance, is it raining? Is the temperature above 25 degrees Celsius? Is the user's input "yes"?

#### The `if` Statement: The Basic Decision

The simplest form of selection is the `if` statement. It allows your program to execute a block of code *only if* a specific condition is met.

Let's say you want to write a program that tells you if you can wear a jacket.

```python
temperature = 15  # Let's assume it's 15 degrees Celsius

if temperature < 20:
    print("It's a bit chilly! You might want a jacket.")
```

Here, the condition is `temperature < 20`. Since 15 is indeed less than 20, the condition is `True`. Because it's `True`, the code inside the `if` block (the `print` statement) is executed.

**Key takeaway:** The code inside an `if` block only runs if the condition evaluates to `True`. The indentation is crucial in Python! It tells Python which lines of code belong to the `if` block.

#### The `else` Statement: What if the Condition is False?

What if the temperature is 25 degrees? In that case, `temperature < 20` would be `False`, and the code inside the `if` block would be skipped. But what if we want to do something *else* when the condition is false? That's where `else` comes in.

```python
temperature = 25

if temperature < 20:
    print("It's a bit chilly! You might want a jacket.")
else:
    print("It's warm enough, no jacket needed.")
```

Now, because `temperature < 20` (25 < 20) is `False`, the `if` block is skipped, and the code inside the `else` block is executed. It's like a fork in the road: one path if the condition is true, another if it's false. This is a fundamental concept in algorithms, as described by George Pólya in "How to Solve It," where understanding the different cases is key to formulating a solution.

#### The `elif` Statement: Multiple Conditions

Life isn't always just two options. What if we have a few different temperature ranges that dictate different clothing choices? This is where `elif` shines. It allows you to check multiple conditions in sequence.

```python
temperature = 22

if temperature < 10:
    print("It's very cold! Wear a heavy coat.")
elif temperature < 20:  # This is checked ONLY if the first 'if' was False
    print("It's chilly. A jacket is a good idea.")
elif temperature < 30:  # This is checked ONLY if the first two conditions were False
    print("It's pleasant. Just a t-shirt will do.")
else:  # This runs if ALL previous conditions were False
    print("It's quite hot! Stay hydrated.")
```

Let's trace this with `temperature = 22`:
1.  `temperature < 10` (22 < 10) is `False`. The first `if` block is skipped.
2.  The program moves to the first `elif`. `temperature < 20` (22 < 20) is `False`. This `elif` block is skipped.
3.  The program moves to the next `elif`. `temperature < 30` (22 < 30) is `True`. The code inside this `elif` block is executed: "It's pleasant. Just a t-shirt will do."
4.  Since a condition was met (`True`), the rest of the `elif` and the `else` are skipped.

**Important Point:** The `elif` statements are checked *in order*. As soon as one of the conditions is `True`, its corresponding block is executed, and the rest of the `if`/`elif`/`else` chain is ignored. If none of the `if` or `elif` conditions are `True`, then the `else` block (if present) is executed. This is a very common way to handle multiple, mutually exclusive possibilities, directly contributing to **CO3** by showing how we translate decision-making logic into code.

#### Compound Conditions: Combining Checks

Sometimes, you need to check if *both* of two things are true, or if *either* of two things is true. We use logical operators for this:
*   `and`: Both conditions must be `True`.
*   `or`: At least one of the conditions must be `True`.
*   `not`: Reverses the truthiness of a condition.

```python
is_raining = True
temperature = 18

if is_raining and temperature < 20:
    print("Definitely bring an umbrella and a jacket!")
elif is_raining or temperature < 15:
    print("It might be wet or cold, better be prepared.")
```

In the first example (`is_raining and temperature < 20`), both `is_raining` (which is `True`) and `temperature < 20` (18 < 20, which is `True`) must be `True` for the message to print. So, it prints.

In the second example (`is_raining or temperature < 15`), only one needs to be true. `is_raining` is `True`, so the entire condition is `True`, and that message prints.

Understanding these logical operators helps us build more sophisticated decision-making processes, aligning with **CO2** in modeling complex real-world scenarios.

---

### 2. Iteration: Repeating Tasks with Loops

Now, let's talk about repetition. Imagine you have to count 100 sheep, or perhaps send an email to 50 colleagues. You wouldn't want to write the same code 50 or 100 times, would you? That would be incredibly tedious and error-prone! This is where **iteration** or **looping** comes in. Loops allow us to execute a block of code multiple times.

Python provides two primary loop constructs: the `for` loop and the `while` loop.

#### The `for` Loop: Iterating Over a Sequence

The `for` loop is perfect when you know exactly how many times you want to repeat something, or when you want to go through each item in a collection (like a list of names, or a string of characters).

The basic structure involves iterating over an **iterable**. An iterable is anything that can give you its elements one by one.

##### Using `range()` with `for` Loops

A very common way to use `for` loops is with the `range()` function. `range()` generates a sequence of numbers.

*   `range(stop)`: Generates numbers from 0 up to (but not including) `stop`.
*   `range(start, stop)`: Generates numbers from `start` up to (but not including) `stop`.
*   `range(start, stop, step)`: Generates numbers from `start` up to (but not including) `stop`, incrementing by `step`.

Let's try counting from 1 to 5:

```python
for i in range(1, 6):  # Numbers from 1 up to (but not including) 6
    print(f"Count: {i}")
```

Here, `range(1, 6)` creates a sequence of numbers: 1, 2, 3, 4, 5.
The `for i in ...` part means: "Take each number from the `range` sequence, assign it to the variable `i`, and then execute the code inside the loop."
So, the loop runs 5 times:
1.  `i` becomes 1, prints "Count: 1"
2.  `i` becomes 2, prints "Count: 2"
3.  ...
5.  `i` becomes 5, prints "Count: 5"

**Remember this:** `range(stop)` goes up to `stop-1`. If you want to include a number, make sure your `stop` value is one greater than that number. This is a common point of confusion for beginners!

Consider a scenario where you're tracking your daily steps for a week.

```python
days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
steps_taken = [8500, 12000, 7000, 9500, 11000, 13000, 6000]

for i in range(len(days_of_week)):
    day = days_of_week[i]
    steps = steps_taken[i]
    print(f"On {day}, you took {steps} steps.")
```

This example uses `range(len(days_of_week))` which is `range(7)` (since there are 7 days). It then uses the index `i` to access elements from both the `days_of_week` list and the `steps_taken` list. This demonstrates how `for` loops, especially with `range`, are essential for processing data sets, a core aspect of **CO1** and **CO3**.

##### Iterating Directly Over Iterables

Python is very flexible. You can often iterate directly over the items in a list, string, or other iterable without needing `range` and indices.

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}.")

message = "Hello"
for char in message:
    print(char)
```

In the first example, `for fruit in fruits` takes each element from the `fruits` list and assigns it to `fruit` in turn. This is often more readable than using indices. In the second, it prints each character of the string "Hello" on a new line.

This direct iteration is a cleaner way to express many algorithms, directly mapping to **CO3**.

#### The `while` Loop: Repeating as Long as a Condition is True

While `for` loops are great when you know the number of repetitions, `while` loops are perfect when you want to repeat an action *as long as* a certain condition remains `True`. The loop continues to run until the condition becomes `False`.

The structure is simple:

```python
# Example: Waiting for a user to enter 'quit'
command = ""
while command != "quit":
    command = input("Enter a command (or 'quit' to exit): ")
    print(f"You entered: {command}")

print("Exiting program.")
```

Let's trace this:
1.  `command` is initialized as an empty string `""`.
2.  The `while` condition `command != "quit"` (`"" != "quit"`) is `True`.
3.  The code inside the loop runs: it prompts for input, reads it, and prints it.
4.  Suppose the user enters "hello". `command` is now "hello".
5.  The condition `command != "quit"` ("hello" != "quit") is still `True`.
6.  The loop repeats.
7.  Eventually, the user enters "quit". `command` becomes "quit".
8.  The condition `command != "quit"` ("quit" != "quit") is now `False`.
9.  The loop terminates, and the program proceeds to the line after the loop.

**Crucial Point for `while` loops:** You *must* ensure that the condition eventually becomes `False`. If the condition never changes to `False`, you'll create an **infinite loop**, and your program will run forever (or until you manually stop it). This is a classic pitfall and a common exam question topic! Always think about how the variables involved in your `while` condition are being updated inside the loop.

Think about a simulation where you're trying to reach a target score in a game.

```python
score = 0
target_score = 50
rounds_played = 0

while score < target_score:
    rounds_played += 1
    # Simulate earning points in a round (let's say 5 to 15 points)
    import random
    points_this_round = random.randint(5, 15)
    score += points_this_round
    print(f"Round {rounds_played}: Earned {points_this_round} points. Total score: {score}")

print(f"Target score of {target_score} reached after {rounds_played} rounds!")
```

Here, the loop continues as long as `score` is less than `target_score`. Inside the loop, `score` is updated, bringing it closer to the `target_score`, ensuring the loop will eventually terminate. This directly models a process that continues until a goal is met, a valuable technique for **CO1**.

#### `break` and `continue`: Controlling Loops

Sometimes, you might want to exit a loop early, even if the main `while` condition is still `True`, or skip the rest of the current iteration and move to the next.

*   `break`: Immediately exits the *innermost* loop it's in.
*   `continue`: Skips the rest of the current iteration and proceeds to the next iteration of the loop.

Let's revisit the user input example with `break`:

```python
while True:  # This loop will run forever UNLESS we break out
    command = input("Enter a command (or 'quit' to exit): ")
    if command == "quit":
        break  # Exit the loop immediately
    print(f"You entered: {command}")

print("Program finished.")
```

The `while True` creates an infinite loop by design, but the `if command == "quit": break` provides the controlled exit. This is a common pattern when the exit condition isn't known at the start of the loop, fitting **CO3**.

Now, let's use `continue` to skip processing empty input:

```python
data_points = [10, 0, 20, 0, 30, -5, 40]
valid_sum = 0

for point in data_points:
    if point <= 0:
        continue  # Skip this iteration if the point is zero or negative
    valid_sum += point

print(f"Sum of positive data points: {valid_sum}")
```

Here, when `point` is 0 or -5, the `continue` statement is executed. It skips the `valid_sum += point` line for that iteration and immediately moves to the next `point` in `data_points`. This is useful for filtering data or handling specific cases within a loop, directly supporting **CO3**.

---

### Connecting to Course Outcomes and Textbooks

Throughout this module, we've seen how selection (`if`, `elif`, `else`) and iteration (`for`, `while`) are the fundamental tools for creating dynamic and responsive algorithms. These concepts are core to **CO1** (using computing as a model for real-world problems) because they allow us to translate real-world decision-making and repetitive processes into computable steps.

**CO2** is addressed as we consider *when* to use these constructs. For instance, a `while` loop is ideal for a problem like "keep taking steps until you reach the summit," while a `for` loop is better for "process each of the 10 sensor readings." Articulating this choice is key to problem modeling.

**CO3** is central. We are directly translating algorithmic logic into executable Python code. The syntax and structure of these statements are how we implement algorithms effectively. Many examples from Maureen Sprankle's "Problem Solving & Programming Concepts" emphasize breaking down problems into these logical steps. John V. Guttag's "Introduction to Computation and Programming using Python" also dedicates significant portions to illustrating how these control flow statements form the backbone of programming.

**CO4** is reinforced as we understand the *strategies* behind selection and iteration – when to branch, when to repeat. The systematic approach of checking conditions and updating loop variables is a core problem-solving skill in computer science.

Remember, mastering selection and iteration is like learning the alphabet of programming. They are the most basic, yet most powerful, tools you have for building any program.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
What is the primary difference between a `for` loop and a `while` loop in Python?

**Answer:**
The primary difference lies in their typical use cases. A `for` loop is generally used when you know in advance how many times you need to iterate or when you want to iterate over a sequence of items (like elements in a list, characters in a string, or numbers generated by `range`). A `while` loop, on the other hand, is used when you want to repeat a block of code as long as a certain condition remains `True`, and the number of iterations might not be known beforehand. The `while` loop is condition-driven, while the `for` loop is typically sequence-driven.

**Question 2 (Exam-Oriented - Trace Output):**
Predict the output of the following Python code:

```python
count = 0
for i in range(3):
    if i % 2 == 0:
        count += i
    else:
        count -= 1
print(count)
```

**Answer:**
Let's trace the execution:
*   `count` is initialized to `0`.
*   The loop `for i in range(3)` will iterate with `i` taking values `0`, `1`, and `2`.

    *   **Iteration 1: `i = 0`**
        *   The condition `i % 2 == 0` (0 % 2 == 0) is `True`.
        *   `count` becomes `count + i` which is `0 + 0 = 0`.
    *   **Iteration 2: `i = 1`**
        *   The condition `i % 2 == 0` (1 % 2 == 0) is `False`.
        *   The `else` block is executed. `count` becomes `count - 1` which is `0 - 1 = -1`.
    *   **Iteration 3: `i = 2`**
        *   The condition `i % 2 == 0` (2 % 2 == 0) is `True`.
        *   `count` becomes `count + i` which is `-1 + 2 = 1`.

*   After the loop finishes, `print(count)` is executed.

**Predicted Output:**
```
1
```

**Question 3 (Conceptual - Infinite Loop):**
What is an "infinite loop," and how can it occur in a `while` loop in Python? Provide an example.

**Answer:**
An infinite loop is a loop whose condition never becomes `False`, causing the program to repeat the loop's body indefinitely. This is a common programming error.

In Python, an infinite loop typically occurs in a `while` loop when the variables controlling the loop's condition are not updated in a way that will eventually make the condition `False`.

**Example:**

```python
# This code will run forever because 'i' is never incremented
i = 0
while i < 5:
    print("Still looping...")
    # Missing: i += 1
```

In this example, `i` remains `0` throughout the execution. The condition `i < 5` (0 < 5) is always `True`, so the loop never terminates.

**Question 4 (Application/Problem Solving):**
You want to write a Python program that asks a user for positive numbers and sums them up. The program should stop when the user enters `0` or a negative number. Which loop construct (`for` or `while`) would be more appropriate, and why? Show a Python code snippet.

**Answer:**
A `while` loop would be more appropriate here. The reason is that we don't know in advance how many positive numbers the user will enter. The loop needs to continue *as long as* the condition (the number entered is positive) is met. A `while` loop is designed for this scenario where the termination condition is checked dynamically.

**Python Code Snippet:**

```python
total_sum = 0
user_input = 1  # Initialize with a positive value to enter the loop

while user_input > 0:
    try:
        user_input_str = input("Enter a positive number (or 0 or negative to stop): ")
        user_input = float(user_input_str) # Convert input to a number

        if user_input > 0:
            total_sum += user_input
        # If user_input is 0 or negative, the loop condition will become False
        # and the loop will terminate after this iteration.

    except ValueError:
        print("Invalid input. Please enter a number.")
        # If invalid input, user_input remains unchanged or we can set it to something like 1
        # to ensure the loop continues until valid input or stop signal is given.
        # For simplicity here, we let it continue with the last valid or initial value if an error occurs.
        # A more robust solution might handle the error and re-prompt specifically.


print(f"The sum of the positive numbers entered is: {total_sum}")

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
