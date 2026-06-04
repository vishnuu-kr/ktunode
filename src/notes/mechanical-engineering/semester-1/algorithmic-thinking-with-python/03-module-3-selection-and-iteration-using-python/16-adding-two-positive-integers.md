---
title: "adding two positive integers"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 3: SELECTION AND ITERATION USING PYTHON:"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1e0bca560598cfa34aa5"
status: "completed"
scrapedAt: "2026-05-20T17:36:38.606Z"
---
# Module 3: Selection and Iteration Using Python
## Topic: Adding Two Positive Integers

Welcome, everyone! Today, we're going to dive into a fundamental building block of programming: **adding two positive integers**. It might sound incredibly simple, and indeed, the concept is, but understanding how we approach this problem computationally is crucial. This is where our journey into **Algorithmic Thinking** truly begins, and it directly ties into how we use computing to solve real-world problems.

### 1. The Problem: What Are We Actually Trying to Do?

At its core, the problem is straightforward: given two numbers, say, 5 and 3, we want to find their sum, which is 8. Simple, right? But in programming, we need to be precise. We're not just thinking about the numbers themselves, but about the *process* or the *recipe* to arrive at the answer. This is precisely what **Course Outcome 1 (CO1): Utilize computing as a model for solving real-world problems** is about. We're taking a real-world task – adding numbers – and thinking about how a computer can do it.

Think about it: When you go to the grocery store and pick up apples and oranges, and you want to know the total number of fruits, you simply count them. But how does a computer "count" or "add"? This is where our algorithmic thinking comes in.

### 2. Formulating the Model: How Do We Describe the Process?

Before we write any code, we need to articulate the problem clearly and create a model. This relates to **Course Outcome 2 (CO2): Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem.**

When we talk about "adding two positive integers," what exactly are we dealing with?

*   **Integers:** These are whole numbers, like 1, 2, 10, 100, etc. Not fractions or decimals.
*   **Positive:** This means numbers greater than zero (1, 2, 3...). We're not dealing with negative numbers (like -5) or zero itself for this specific problem, though extending our solution to handle those is a natural next step.
*   **Two:** We're specifically focusing on combining two numbers at a time.

So, our model needs to account for:
1.  Getting two positive integer numbers.
2.  Performing the addition operation.
3.  Presenting the result.

George Pólya, in his seminal work "How to Solve It," emphasizes understanding the problem first. For adding two positive integers, we understand we need two inputs, and the output is a single number representing their sum. We're essentially defining the "what" and the "why" before the "how."

### 3. The Algorithm: The Step-by-Step Recipe

Now, let's translate our model into a step-by-step procedure – an **algorithm**. This is where **Course Outcome 3 (CO3): Use effective algorithms to solve the formulated models and translate algorithms into executable programs** becomes our guiding principle. An algorithm is like a recipe: a finite sequence of well-defined, unambiguous instructions to solve a problem.

For adding two positive integers, a very basic algorithm would look like this:

1.  **Input:** Obtain the first positive integer. Let's call it `number1`.
2.  **Input:** Obtain the second positive integer. Let's call it `number2`.
3.  **Process:** Calculate the sum by adding `number1` and `number2`. Let's store this result in a variable called `sum_result`. So, `sum_result = number1 + number2`.
4.  **Output:** Display the value of `sum_result`.

This is a clear, logical sequence. Maureen Sprankle and Jim Hubbard, in "Problem Solving & Programming Concepts," stress the importance of breaking down problems into smaller, manageable steps, and this algorithm does exactly that.

#### What does "obtain" mean?

In a computer program, "obtain" usually means getting input from the user or from another part of the program. For our simple example, we'll assume we're getting it from the user.

#### What does "calculate" mean?

This is the core operation. In Python, and most programming languages, there's a built-in operator for addition: the `+` symbol.

### 4. Translating to Python: Making the Algorithm Executable

This is where we bridge the gap between our logical steps and actual, runnable code. This is the practical side of **CO3** and also touches on **Course Outcome 4 (CO4): Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills**.

Let's take our algorithm and write it in Python.

```python
# Step 1: Obtain the first positive integer
# We'll use the input() function to get text from the user.
# Since input() gives us a string, we need to convert it to an integer using int().
number1_str = input("Enter the first positive integer: ")
number1 = int(number1_str)

# Step 2: Obtain the second positive integer
number2_str = input("Enter the second positive integer: ")
number2 = int(number2_str)

# Step 3: Calculate the sum
# Here, the '+' operator performs the addition.
sum_result = number1 + number2

# Step 4: Display the result
# The print() function displays output to the user.
print("The sum is:", sum_result)
```

Let's break down this Python code:

*   **`input("Enter the first positive integer: ")`**: This line prompts the user with the message inside the parentheses and waits for them to type something and press Enter. Whatever they type is returned as a string (text).
*   **`number1_str = ...`**: We store the text entered by the user into a variable named `number1_str`. It's good practice to name variables descriptively.
*   **`number1 = int(number1_str)`**: This is a crucial conversion! The `input()` function always gives us text. If we try to add text, Python won't know what to do mathematically. The `int()` function attempts to convert the string `number1_str` into an actual integer number. If the user enters something that *cannot* be converted to an integer (like "hello" or "3.14"), this line will cause an error, which is something we'll learn to handle later!
*   **`sum_result = number1 + number2`**: This is the direct implementation of our "Process" step. Python's `+` operator is smart enough to add two integers.
*   **`print("The sum is:", sum_result)`**: This displays a descriptive message along with the calculated `sum_result`.

#### An Everyday Analogy: Following a Recipe

Imagine you're baking a cake. You have ingredients: flour (your first number) and sugar (your second number). The recipe tells you:
1.  Measure out 2 cups of flour.
2.  Measure out 1 cup of sugar.
3.  Combine them in a bowl.
4.  The total volume of dry ingredients is now 3 cups.

The computer program is like that recipe. Each line of code is a step. `input()` is like reading an ingredient amount from a bag. `int()` is like making sure you're using 'cups' of flour, not 'bags' of flour, so you can combine them correctly. The `+` is the actual act of mixing. `print()` is telling you the total amount of dry ingredients you have.

### 5. Ensuring Positive Integers (and Why It Matters)

The problem statement specifically mentions "positive integers." What happens if the user enters something else?

*   **Zero:** If `number1` is 5 and `number2` is 0, the sum is 5. This is perfectly valid addition. Our current code handles this because 0 is an integer.
*   **Negative Numbers:** If `number1` is 5 and `number2` is -3, the sum is 2. Again, our code handles this because `int()` can convert negative numbers. The "positive" constraint was in the problem *description*, guiding our initial algorithm.
*   **Non-Integers (Floats):** If the user enters "3.14", `int("3.14")` will cause an error because it's not a whole number.
*   **Non-Numeric Text:** If the user enters "apple", `int("apple")` will also cause an error.

This brings us to the concept of **input validation**, which is a key part of robust programming. While our simple addition algorithm works, real-world programs often need to check if the input meets the specified conditions. For example, we could add checks:

```python
# A more robust version would include checks, but let's keep it simple for now.
# We'll focus on the core addition.
```

This touches on the analytical aspect of **CO4**, where we consider the properties and constraints of our data. In exams, you might be asked about potential errors or how to handle invalid input.

### 6. Key Concepts and Takeaways

Let's quickly recap the core ideas we've touched upon:

*   **Algorithm:** A step-by-step procedure to solve a problem. Think of it as a recipe.
*   **Variable:** A named storage location for data (like `number1`, `number2`, `sum_result`).
*   **Data Types:** The kind of data a variable holds (e.g., integer, string). `int()` is used to convert strings to integers.
*   **Operators:** Symbols that perform operations (e.g., `+` for addition).
*   **Input/Output:** How a program interacts with the user or its environment (`input()` for getting data, `print()` for showing results).

Donald Treffinger and his colleagues, in "Creative Problem Solving," highlight that problem-solving involves understanding, generating ideas, and evaluating. Our simple addition task involves understanding the need for two numbers, generating the "idea" of adding them, and the "evaluation" is simply producing the correct sum.

**Remember this:** The seemingly simple act of adding two numbers is a fundamental example of how we break down tasks into logical steps (algorithms) that a computer can execute. This process is the foundation for solving much more complex problems.

### 7. Exam Preparation Tips

*   **Trace the code:** Be prepared to trace simple Python code like this, explaining what each line does and what the value of each variable is at different points.
*   **Understand `input()` and `int()`:** Know that `input()` returns a string and why `int()` is necessary for mathematical operations. This is a very common point tested.
*   **Define an algorithm:** Be able to write down the steps for a simple task like addition in plain English or pseudocode.
*   **Relate to COs:** Understand how this basic example demonstrates concepts like algorithmic thinking (CO3), modeling problems (CO2), and using computing to solve tasks (CO1).

### Sample Questions and Answers

**Question 1 (Conceptual):** What is an algorithm, and why is it important in programming?

**Answer:** An algorithm is a finite, well-defined sequence of instructions or a step-by-step procedure designed to perform a specific task or solve a particular problem. It's crucial in programming because it provides a clear roadmap for the computer to follow. Without a well-defined algorithm, a program would lack direction and wouldn't be able to reliably produce the desired output. It ensures that the solution is systematic, repeatable, and can be translated into code effectively. This directly supports **CO3**.

**Question 2 (Exam-Oriented - Code Tracing):** Consider the following Python code:
```python
num1_str = input("Enter first number: ")
num1 = int(num1_str)
num2_str = input("Enter second number: ")
num2 = int(num2_str)
result = num1 + num2
print("Sum:", result)
```
If the user enters `15` for the first number and `7` for the second number, what will be printed to the console?

**Answer:**
The output will be:
`Sum: 22`

**Reasoning:**
1.  `num1_str = input("Enter first number: ")` -> `num1_str` becomes the string `"15"`.
2.  `num1 = int(num1_str)` -> `num1` becomes the integer `15`.
3.  `num2_str = input("Enter second number: ")` -> `num2_str` becomes the string `"7"`.
4.  `num2 = int(num2_str)` -> `num2` becomes the integer `7`.
5.  `result = num1 + num2` -> `result` becomes `15 + 7`, which is `22`.
6.  `print("Sum:", result)` -> The program prints the string "Sum:" followed by the value of `result` (which is 22). This demonstrates **CO4** by showing how Python executes instructions.

**Question 3 (Conceptual - Data Types):** Why is it necessary to use `int()` when converting the input from the `input()` function for mathematical operations in Python?

**Answer:** The `input()` function in Python always returns the user's entry as a **string** (text data). For mathematical operations like addition, subtraction, or multiplication, Python needs the data to be in a numerical format, specifically an **integer** (whole number) or **float** (number with a decimal). If you try to add two strings, Python will concatenate them (join them together) rather than perform arithmetic. For example, `"5" + "3"` would result in `"53"`, not `8`. Therefore, `int()` is used to convert the string representation of a number into its integer equivalent, allowing for correct mathematical calculations, as shown in our topic. This highlights the importance of understanding data types, a core aspect of **CO4**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
