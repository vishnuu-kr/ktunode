---
title: "Writing the program"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 1: PROBLEM"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912b55"
status: "completed"
scrapedAt: "2026-05-20T18:28:02.673Z"
---
# ALGORITHMIC THINKING WITH PYTHON

## MODULE 1: PROBLEM

### Topic: Writing the Program

Welcome, everyone! In this session, we're going to delve into the exciting world of actually **writing the program**. We've spent some time understanding what a problem is and how to think about it computationally. Now, we transition from the abstract to the concrete – transforming our algorithmic ideas into actual, executable code. This is where our understanding of algorithms truly comes to life!

This topic directly builds upon our earlier discussions and is crucial for achieving several of our course objectives. Specifically, it strongly connects with:

*   **CO3: Use effective algorithms to solve the formulated models and translate algorithms into executable programs.** This is the heart of what we're doing today. We'll see how to take that step-by-step plan, our algorithm, and turn it into instructions that a computer can understand and follow.
*   **CO4: Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills.** We'll be reinforcing the systematic approach we've been learning and putting those foundational Python skills to work.

Remember, our goal isn't just to write *any* code, but to write *effective* code that solves a problem accurately and efficiently. As George Pólya beautifully articulates in "How to Solve It," understanding the problem thoroughly is the first, and often most critical, step. Once we have that clear picture, we can devise a plan – our algorithm. Today, we focus on the "carrying out the plan" phase.

### From Algorithm to Code: The Translator's Role

Think of an algorithm as a recipe. It lists the ingredients (data) and the steps (instructions) to create a dish (the solution). However, the computer doesn't understand our natural language recipe. It speaks a very specific, structured language – a **programming language**. Python, as we've chosen, is one such language, known for its readability and versatility.

Writing a program, then, is essentially **translating our algorithm into the syntax and semantics of a programming language**, in this case, Python. This translation process isn't always a one-to-one mapping. Sometimes, a single algorithmic step might require multiple lines of code, or a complex programming construct might encapsulate a simple algorithmic idea.

**Key Concept:** **Syntax** refers to the rules governing the structure of statements in a programming language. If you break these rules (e.g., a missing colon, incorrect indentation), the computer won't understand your instructions – you'll get a "syntax error." **Semantics**, on the other hand, deals with the meaning of these instructions. Even if your code follows the syntax rules, if it doesn't logically do what you intended, you have a "semantic error."

### The Building Blocks of a Python Program

Just like a builder needs bricks, cement, and tools, a programmer needs fundamental building blocks to construct programs. These are the core components of Python that allow us to implement our algorithms:

1.  **Variables: The Memory Slots**
    Imagine you're baking and need to keep track of the amount of flour or sugar. You'd use measuring cups or bowls, right? In programming, **variables** are like named containers that hold data. They are fundamental to storing and manipulating information as our program runs.

    *   **What they are:** Named locations in the computer's memory.
    *   **What they do:** Store values (numbers, text, etc.) that can change during program execution.
    *   **Analogy:** Think of a labeled box where you can put a specific item. You can later replace that item with another.
    *   **Example:** If our algorithm needs to calculate the total cost of items, we might use a variable named `total_cost` to store the running sum.
        ```python
        # Algorithmic idea: Store the current total
        total_cost = 0
        ```
    *   **Python Tip:** In Python, you don't need to declare the type of data a variable will hold beforehand. Python infers it. This is a major convenience!

2.  **Data Types: The Nature of the Information**
    Not all data is the same. Flour is different from sugar, and the quantity of flour is different from the name of the flour brand. Similarly, in programming, data has different types, which dictate what operations can be performed on them.

    *   **Common Python Data Types:**
        *   **Integers (`int`):** Whole numbers (e.g., 10, -5, 0). Useful for counting.
        *   **Floating-Point Numbers (`float`):** Numbers with decimal points (e.g., 3.14, -0.5, 2.0). Essential for measurements or calculations involving fractions.
        *   **Strings (`str`):** Sequences of characters, usually representing text (e.g., "Hello, world!", "Python programming").
        *   **Booleans (`bool`):** Represent truth values, either `True` or `False`. Crucial for decision-making.

    *   **Example:** If we're calculating the average price of items, we might use floats for prices. If we're storing customer names, we'll use strings.
        ```python
        item_price = 19.99  # float
        number_of_items = 5 # int
        customer_name = "Alice" # string
        is_discount_applied = True # boolean
        ```
    *   **Connection to Algorithms:** Your algorithm needs to consider the types of data it will process. For instance, trying to add a string to an integer directly will cause an error. You might need to convert data types (e.g., convert a string "5" to an integer 5) using functions like `int()` or `float()`.

3.  **Operators: The Tools for Manipulation**
    Once we have data in variables, we need ways to combine, compare, or modify it. Operators are the symbols that perform these actions.

    *   **Arithmetic Operators:** For mathematical calculations.
        *   `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division, results in a float), `//` (floor division, results in an integer), `%` (modulo, remainder), `**` (exponentiation).
    *   **Comparison Operators:** For comparing values, returning `True` or `False`.
        *   `==` (equal to), `!=` (not equal to), `>` (greater than), `<` (less than), `>=` (greater than or equal to), `<=` (less than or equal to).
    *   **Logical Operators:** For combining boolean expressions.
        *   `and`, `or`, `not`.

    *   **Example:** Let's say our algorithm requires calculating the total cost after a discount.
        ```python
        # Algorithmic idea: Calculate final price
        price_before_discount = 100.0
        discount_rate = 0.10 # 10%
        discount_amount = price_before_discount * discount_rate
        final_price = price_before_discount - discount_amount
        ```
    *   **Exam Insight:** Understanding operator precedence (the order in which operations are performed) is often tested. For example, multiplication and division happen before addition and subtraction. Parentheses `()` can be used to explicitly control the order.

4.  **Control Flow Statements: The Decision-Makers and Repetition Masters**
    Algorithms aren't just about processing data; they involve making decisions and repeating actions. Control flow statements are how we tell Python to do this. This is where the "logic" of our algorithm really gets translated.

    *   **Conditional Statements (`if`, `elif`, `else`):** These allow your program to execute different blocks of code based on whether certain conditions are true or false. This directly implements the "decision" parts of your algorithm.
        *   **Think:** "If this is true, do that. Otherwise, if something else is true, do this other thing. If neither is true, do this default action."
        *   **Example:** Imagine an algorithm for checking if a student passed or failed.
            ```python
            score = 75
            if score >= 60:
                print("You passed!")
            else:
                print("You need to study more.")
            ```
        *   **`elif` (else if):** What if there are multiple conditions to check? Like grading: A, B, C, D, F.
            ```python
            score = 85
            if score >= 90:
                print("Grade: A")
            elif score >= 80: # If score is NOT >= 90, THEN check if it's >= 80
                print("Grade: B")
            elif score >= 70:
                print("Grade: C")
            else:
                print("Grade: F")
            ```
        *   **Reference:** This directly maps to Pólya's idea of devising a plan – how do we handle different scenarios within our problem?

    *   **Loops (`for`, `while`):** These allow you to repeat a block of code multiple times. Essential for tasks that involve processing lists of items or continuing until a certain condition is met.

        *   **`for` loop:** Typically used when you know in advance how many times you want to repeat something, or when you want to iterate over a sequence (like a list of numbers or characters in a string).
            *   **Analogy:** "For each item on this shopping list, put it in the cart."
            *   **Example:** If our algorithm needs to process every number in a list:
                ```python
                numbers = [1, 2, 3, 4, 5]
                for num in numbers:
                    print(f"Processing number: {num}")
                ```

        *   **`while` loop:** Used when you want to repeat a block of code *as long as* a certain condition remains true. You might not know exactly how many times it will run.
            *   **Analogy:** "Keep stirring the soup *while* it's too thin."
            *   **Example:** If our algorithm needs to keep taking user input until they enter a specific word like "quit":
                ```python
                command = ""
                while command != "quit":
                    command = input("Enter a command (or 'quit' to exit): ")
                    print(f"You entered: {command}")
                print("Exiting program.")
                ```
        *   **Caution:** Be careful with `while` loops! If the condition never becomes false, you'll get an **infinite loop**, and your program will run forever (or until you manually stop it). This is a common pitfall! Always ensure there's a way for the condition to eventually change and become false.

5.  **Functions: Reusable Code Blocks**
    Imagine you have a specific task that you need to perform multiple times within your program, like calculating the area of a circle. Instead of writing the same lines of code over and over, you can define a **function**.

    *   **What they are:** Named blocks of code that perform a specific task. They can accept input (arguments) and can return output.
    *   **Why use them:**
        *   **Reusability:** Write once, use many times. This saves effort and reduces errors.
        *   **Organization:** Breaks down a large program into smaller, manageable, logical units.
        *   **Readability:** Makes the main part of your program easier to understand by abstracting away complex details.
    *   **Analogy:** Think of a specialized tool, like a screwdriver. You use it for many different screws, but you don't need to build a new screwdriver each time.
    *   **Example:**
        ```python
        # Algorithmic idea: Define a reusable way to greet someone
        def greet(name): # 'greet' is the function name, 'name' is an argument
            """This function prints a greeting.""" # This is a docstring - good practice!
            print(f"Hello, {name}!")

        # Now, we can use this function whenever we need to greet someone:
        greet("Bob")
        greet("Alice")
        ```
    *   **Connection to CO3:** Functions are the primary way we translate structured algorithmic steps into executable, organized Python code. Defining a function for a sub-problem within your algorithm is a powerful technique.

6.  **Input/Output (I/O): Interacting with the World**
    A program that can't get information from the user or display results is not very useful. Input and output operations allow your program to communicate.

    *   **Input:** Getting data into the program.
        *   The `input()` function in Python is used to read a line of text from the user. Remember that `input()` *always* returns a string, so you often need to convert it to a number if you expect numerical input.
        *   **Example:**
            ```python
            user_name = input("Please enter your name: ")
            print(f"Welcome, {user_name}!")

            # To get a number:
            age_str = input("Please enter your age: ")
            age = int(age_str) # Convert string to integer
            print(f"You are {age} years old.")
            ```
    *   **Output:** Displaying results from the program.
        *   The `print()` function is your primary tool for showing information to the user. You can print strings, numbers, or the values of variables.
        *   **Example:**
            ```python
            result = 10 + 5
            print("The sum is:", result) # Prints "The sum is: 15"
            ```
        *   **Formatting Output:** Python's f-strings (formatted string literals, like `f"..."`) are incredibly useful for embedding variables directly into strings, making output clear and readable.

### Putting It All Together: A Simple Example

Let's consider a simple algorithmic problem: **Calculate the area of a rectangle.**

**Algorithm Steps:**
1.  Get the length of the rectangle.
2.  Get the width of the rectangle.
3.  Calculate the area by multiplying length and width.
4.  Display the calculated area.

Now, let's translate this into Python code, using the building blocks we've discussed. This process directly addresses **CO3**.

```python
# Step 1 & 2: Get input from the user (and convert to numbers)
# We're using variables and input() here. Remember input() gives strings!
try:
    length_str = input("Enter the length of the rectangle: ")
    length = float(length_str) # Convert to float for potential decimal values

    width_str = input("Enter the width of the rectangle: ")
    width = float(width_str)   # Convert to float

    # Step 3: Calculate the area using arithmetic operators
    area = length * width

    # Step 4: Display the result using print() and f-strings
    print(f"The length entered is: {length}")
    print(f"The width entered is: {width}")
    print(f"The area of the rectangle is: {area}")

except ValueError:
    # This is a basic error handling mechanism.
    # If the user enters something that CANNOT be converted to a float (like text),
    # this block will execute instead of crashing the program.
    print("Invalid input. Please enter valid numbers for length and width.")

```

**What's happening here?**

*   We use `input()` to get values from the user.
*   We use `float()` to convert these string inputs into numbers that can be used in calculations. This highlights the importance of data types.
*   We use the `*` operator for multiplication.
*   We use `print()` with f-strings to display the results clearly.
*   The `try-except` block is a simple way to handle potential errors, which is a vital part of robust programming. If the user types "abc" for length, `float("abc")` would crash the program. The `except ValueError` catches this specific error.

This example, while simple, demonstrates the core process of writing a program: taking an algorithmic idea and expressing it using Python's syntax and fundamental data structures and operations. It's about translating logic into actionable instructions for the computer.

### Best Practices for Writing Programs

As you become more comfortable, consider these practices, which are often emphasized in texts like Guttag's "Introduction to Computation and Programming using Python" and Horstmann's "Python for Everyone."

*   **Readability is Key:** Write code that others (and your future self!) can easily understand. Use meaningful variable names (e.g., `user_input` instead of `ui`), add comments (`# this is a comment`) to explain complex or non-obvious parts, and maintain consistent indentation. Proper indentation is *essential* in Python; it defines code blocks.
*   **Start Small and Build:** Don't try to write a massive program all at once. Break down the problem into smaller, manageable functions or parts. Get each part working correctly before moving to the next. This is a core problem-solving strategy, often echoed in Treffinger, Isaksen, and Stead-Doval's work on creative problem-solving.
*   **Test Frequently:** As you write each piece of code, test it to ensure it works as expected. Don't wait until the end to discover a fundamental flaw. This iterative testing aligns with a systematic approach to problem-solving (CO4).
*   **Handle Errors:** Users will do unexpected things. Think about what could go wrong (invalid input, division by zero) and try to write your code to handle these situations gracefully, perhaps using `try-except` blocks.

### Connecting to Course Outcomes

Let's recap how this topic ties into our broader course goals:

*   **CO1: Utilize computing as a model for solving real-world problems.** Writing programs is the direct application of computing as a model. We take a real-world scenario (like calculating area) and represent it in a way a computer can process.
*   **CO2: Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem.** While we touched on this in earlier topics, the act of writing code forces us to solidify our understanding of the problem and our proposed model. If our algorithm (our model) is unclear, our code will be messy and incorrect.
*   **CO3: Use effective algorithms to solve the formulated models and translate algorithms into executable programs.** This is precisely what "Writing the program" is about. We take our algorithmic plan and translate it into Python. The "effectiveness" comes from choosing the right Python constructs and writing clear, efficient code.
*   **CO4: Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills.** This topic is a practical exercise in applying those strategies. We see how breaking down a problem, planning steps (algorithm), and then systematically implementing those steps using Python constructs (variables, loops, conditionals) leads to a solution.

### Final Thoughts

Writing the program is the exciting bridge between thinking about a problem and having a working solution. It requires us to be precise, logical, and to understand the tools Python gives us. Don't be discouraged if your first attempts aren't perfect. Programming is a skill that improves with practice, experimentation, and a willingness to learn from mistakes. Embrace the process, and you'll find immense satisfaction in bringing your computational ideas to life!

---

## Sample Questions and Answers

Here are a few questions to test your understanding, covering both concepts and how they might appear in an exam:

**Conceptual Question 1:** What is the primary difference between syntax errors and semantic errors in Python programming?

*   **Answer:**
    A **syntax error** occurs when the code violates the grammatical rules of the Python language (e.g., a missing colon after an `if` statement, incorrect indentation). The Python interpreter cannot even parse or understand the statement.
    A **semantic error** occurs when the code is syntactically correct (it runs without crashing due to syntax issues) but does not perform the intended operation, leading to incorrect results. For example, writing `area = length + width` instead of `area = length * width` is a semantic error. It runs, but it's logically wrong for calculating area.

**Conceptual Question 2:** Explain why using meaningful variable names is considered a good programming practice.

*   **Answer:**
    Using meaningful variable names (e.g., `customer_name`, `total_price`, `number_of_items`) makes the code much easier to read and understand. It acts as a form of self-documentation, clarifying the purpose of each variable without needing explicit comments for every single one. This is crucial for debugging, collaboration, and maintaining the code over time, aligning with the principle of writing readable code.

**Exam-Oriented Question 1:** Consider the following Python code snippet:

```python
temperature = 25
if temperature > 30:
    print("It's hot!")
elif temperature > 20:
    print("It's pleasant.")
else:
    print("It's cool.")
```
What will be the output of this code, and why?

*   **Answer:**
    The output will be:
    ```
    It's pleasant.
    ```
    **Reasoning:**
    1.  The variable `temperature` is initialized to `25`.
    2.  The `if` condition `temperature > 30` (25 > 30) is `False`.
    3.  Since the `if` condition is false, the program moves to the `elif` (else if) condition: `temperature > 20` (25 > 20). This condition is `True`.
    4.  Because the `elif` condition is true, the code block associated with it is executed, printing "It's pleasant.".
    5.  Once an `elif` condition is met, the rest of the `else` chain (the final `else` in this case) is skipped.

**Exam-Oriented Question 2:** Write a Python program that asks the user for their age and then prints whether they are eligible to vote (assume the voting age is 18).

*   **Answer:**

    ```python
    # Get age input from the user
    age_str = input("Please enter your age: ")

    # Convert the input string to an integer
    try:
        age = int(age_str)

        # Check if the age is valid (non-negative)
        if age < 0:
            print("Age cannot be negative. Please enter a valid age.")
        # Use a conditional statement to check voting eligibility
        elif age >= 18:
            print("You are eligible to vote.")
        else:
            print("You are not yet eligible to vote.")

    except ValueError:
        # Handle cases where the input is not a valid number
        print("Invalid input. Please enter a number for your age.")
    ```
    **Reasoning for the code:**
    *   It uses `input()` to get the user's age as a string.
    *   It uses `int()` to convert the string to an integer, essential for numerical comparison. A `try-except` block is included for robustness against non-numeric input.
    *   It checks for a negative age as an initial validation.
    *   It uses an `if-elif-else` structure to implement the algorithm's logic: if age is 18 or greater, print eligibility; otherwise, print ineligibility. This directly translates the algorithmic decision-making into Python code.
