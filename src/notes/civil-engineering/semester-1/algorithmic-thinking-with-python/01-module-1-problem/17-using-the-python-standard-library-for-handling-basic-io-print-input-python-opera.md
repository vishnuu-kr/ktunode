---
title: "Using the Python Standard Library for handling basic I/O - print, input, Python operators and their precedence."
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 1: PROBLEM"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912b5b"
status: "completed"
scrapedAt: "2026-05-20T18:28:06.899Z"
---
# Algorithmic Thinking with Python: Module 1 - Problem

## Topic: Handling Basic I/O with Python: `print`, `input`, Operators, and Precedence

Welcome to the exciting world of Algorithmic Thinking with Python! In this first module, we're going to lay the foundation for how we interact with our programs and how they interact with us. Think of this as learning the basic language and gestures you'll need to communicate effectively with your computer. We'll be diving into the very core of getting information into your program and getting results back out, using Python's built-in tools.

This topic directly supports our Course Outcomes:

*   **CO1 (Utilize computing as a model for solving real-world problems):** Understanding how to get information (input) and display results (output) is the first step in using a computer to model and solve problems. We can't solve a problem with a computer if we can't even tell it what the problem is or see its answer!
*   **CO2 (Articulate a problem before attempting to solve it and prepare a clear and accurate model):** Even before we start writing complex algorithms, we need to understand what data we're working with. `input` helps us gather this data, and `print` helps us verify it. This is crucial for "articulating" the problem clearly.
*   **CO3 (Use effective algorithms to solve the formulated models and translate algorithms into executable programs):** Algorithms often involve calculations and manipulations. Python operators are the tools we use for these operations. Understanding them and their order of execution (precedence) is vital for writing correct algorithms.
*   **CO4 (Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills):** `print` and `input` are our fundamental I/O skills, and operators are our fundamental computational tools. Mastering these is essential for any systematic problem-solving approach in programming.

Let's start with the most fundamental way our programs communicate with us.

### 1. The Art of Output: `print()`

Imagine you've just solved a tricky math problem, and you want to show your answer to someone. You'd write it down or say it, right? In programming, the `print()` function is our way of "showing" things – text, numbers, results of calculations, you name it!

**What is `print()`?**

`print()` is a built-in Python *function*. A function is like a mini-program that performs a specific task. When you "call" a function, you're telling Python to execute that task. `print()` specifically displays information to the console (that's the text-based window where your Python code runs and shows its output).

**How to Use `print()`**

You use `print()` by typing `print()` followed by parentheses `()`. Inside these parentheses, you put whatever you want to display.

*   **Printing text (strings):** If you want to display words or sentences, you need to put them inside quotation marks (either single `'` or double `"`). These are called *strings*.

    ```python
    print("Hello, world!")
    print('This is a string.')
    ```

    *Remember this:* Strings are sequences of characters, and Python needs those quotes to know you're dealing with text, not Python commands.

*   **Printing numbers:** You can print numbers directly without quotes.

    ```python
    print(123)
    print(3.14159)
    ```

*   **Printing the result of calculations:** This is where it gets really powerful! You can have Python do the math and display the answer.

    ```python
    print(5 + 3)       # This will print 8
    print(10 * 2)      # This will print 20
    print(15 / 3)      # This will print 5.0 (division always results in a float in Python 3)
    ```

*   **Printing multiple items:** You can print several things at once by separating them with commas inside the `print()` function. Python will automatically put a space between them.

    ```python
    name = "Alice"
    age = 30
    print("My name is", name, "and I am", age, "years old.")
    # Output: My name is Alice and I am 30 years old.
    ```

    This is a handy way to build more complex output messages. Think of it like assembling a sentence piece by piece.

**Connection to Course Outcomes:**

*   **CO1, CO4:** `print()` is your primary tool for outputting results, which is essential for *utilizing computing as a model* and for demonstrating your *essential Python programming skills*. When you're debugging or just want to see what your program is doing, `print()` is your best friend.

### 2. Gathering Information: `input()`

Now, what if you want your program to be interactive? What if you want to ask the user for their name, their age, or some data to process? That's where the `input()` function comes in.

**What is `input()`?**

`input()` is another built-in Python function. It pauses your program, displays a message (if you provide one), waits for the user to type something and press Enter, and then returns whatever the user typed as a string.

**How to Use `input()`**

You call `input()` similarly to `print()`, often storing the result in a variable.

*   **Getting user input:**

    ```python
    user_name = input("Please enter your name: ")
    print("Hello,", user_name)
    ```

    When you run this, the program will show "Please enter your name: " and wait. If you type "Bob" and press Enter, the program will then print "Hello, Bob".

*   **Providing a prompt:** The text inside the `input()` parentheses is called a *prompt*. It's a message shown to the user to tell them what information is expected. A good prompt is crucial for usability.

    ```python
    fav_color = input("What is your favorite color? ")
    print("Ah, so your favorite color is", fav_color + "!") # We can even combine strings!
    ```

*   **The `input()` function *always* returns a string:** This is a critical point, and a common pitfall! Even if the user types a number, `input()` will give it to you as text.

    ```python
    age_str = input("Enter your age: ")
    print(type(age_str)) # This will show <class 'str'>
    # If you try to do math:
    # print(age_str + 5)  # This will cause an error! (TypeError)
    ```

    Why is this a problem? Because you can't directly do mathematical operations on strings. You can *concatenate* strings (join them together), as we saw with `"Hello, " + user_name`, but you can't add numbers mathematically.

*   **Converting input to other types:** To perform calculations, you need to convert the string received from `input()` into a number. Python has functions for this:
    *   `int()`: Converts to an integer (whole number).
    *   `float()`: Converts to a floating-point number (number with a decimal).

    ```python
    age_str = input("Enter your age: ")
    age_int = int(age_str) # Convert the string to an integer
    print("Next year, you will be", age_int + 1, "years old.")

    height_str = input("Enter your height in meters (e.g., 1.75): ")
    height_float = float(height_str) # Convert the string to a float
    print("Your height is", height_float, "meters.")
    ```

    *Self-check:* What happens if the user types "twenty" instead of "20" for their age? The `int()` function will raise a `ValueError`. Error handling is a more advanced topic, but for now, remember that the input must be in a format that the conversion function can understand.

**Connection to Course Outcomes:**

*   **CO1, CO2, CO3, CO4:** `input()` is essential for *getting the data* needed to *articulate a problem* and then feeding that data into your algorithms. Converting input allows you to *translate algorithms into executable programs* that perform calculations.

### 3. The Language of Operations: Python Operators

Computers are fantastic at performing calculations and comparisons. Python provides a rich set of *operators* to do just that. These are symbols that perform operations on values, called *operands*.

Think of operators as the verbs in our programming language, and operands as the nouns. "Add" (operator) "5" (operand) and "3" (operand).

Let's break them down into common categories:

#### 3.1 Arithmetic Operators

These are the familiar math operations you learned in school.

*   `+` : Addition (e.g., `5 + 3` is `8`)
*   `-` : Subtraction (e.g., `10 - 4` is `6`)
*   `*` : Multiplication (e.g., `7 * 6` is `42`)
*   `/` : Division (e.g., `20 / 4` is `5.0`). As mentioned, in Python 3, this *always* results in a float.
*   `//`: Floor Division (e.g., `21 // 4` is `5`). This performs division and then rounds down to the nearest whole number. Useful for integer-only calculations.
*   `%` : Modulo (e.g., `21 % 4` is `1`). This gives you the *remainder* after division. Think of it as what's "left over." If you're dividing 21 cookies among 4 friends, each gets 5 cookies, and there's 1 cookie left over. The modulo operator tells you that remainder.
*   `**`: Exponentiation (e.g., `2 ** 3` is `8`, which is 2 * 2 * 2). This is for powers.

```python
# Examples
print(10 + 5)        # Output: 15
print(10 - 5)        # Output: 5
print(10 * 5)        # Output: 50
print(10 / 5)        # Output: 2.0
print(10 // 3)       # Output: 3
print(10 % 3)        # Output: 1
print(2 ** 4)        # Output: 16
```

#### 3.2 Comparison (Relational) Operators

These operators compare two values and return a boolean result: `True` or `False`. They are fundamental for making decisions in your programs.

*   `==`: Equal to (e.g., `5 == 5` is `True`, `5 == 3` is `False`)
*   `!=`: Not equal to (e.g., `5 != 3` is `True`, `5 != 5` is `False`)
*   `>` : Greater than (e.g., `10 > 5` is `True`)
*   `<` : Less than (e.g., `5 < 10` is `True`)
*   `>=`: Greater than or equal to (e.g., `10 >= 10` is `True`, `10 >= 5` is `True`)
*   `<=`: Less than or equal to (e.g., `5 <= 10` is `True`, `5 <= 5` is `True`)

```python
# Examples
x = 7
y = 10
print(x == y)      # Output: False
print(x != y)      # Output: True
print(y > x)       # Output: True
print(x < y)       # Output: True
print(x >= 7)      # Output: True
print(y <= 10)     # Output: True
```

**Connection to Course Outcomes:**

*   **CO3, CO4:** Arithmetic and comparison operators are the building blocks for *algorithms* and are essential for *problem-solving strategies*. They allow your program to perform calculations and make decisions, which is the heart of many computational problems.

#### 3.3 Assignment Operators

We've already used the assignment operator: `=`. It assigns the value on the right to the variable on the left. There are also compound assignment operators that combine an operation with assignment.

*   `+=`: Add and assign (e.g., `x += 5` is shorthand for `x = x + 5`)
*   `-=` : Subtract and assign (e.g., `x -= 3` is shorthand for `x = x - 3`)
*   `*=`: Multiply and assign (e.g., `x *= 2` is shorthand for `x = x * 2`)
*   `/=`: Divide and assign (e.g., `x /= 4` is shorthand for `x = x / 4`)
*   `//=`: Floor divide and assign
*   `%=`: Modulo and assign
*   `**=`: Exponentiate and assign

```python
count = 0
count += 1  # count is now 1
count *= 5  # count is now 5
print(count) # Output: 5
```

These are shortcuts that make your code more concise.

#### 3.4 Logical Operators

These operators combine boolean expressions. They are crucial for building complex conditions.

*   `and`: Returns `True` if both operands are `True`.
*   `or`: Returns `True` if at least one operand is `True`.
*   `not`: Reverses the boolean value of its operand.

```python
age = 25
has_license = True

# Check if someone is an adult AND has a license
is_eligible = (age >= 18) and has_license
print(is_eligible) # Output: True

# Check if someone is a teenager OR has a license
can_drive = (age < 18) or has_license
print(can_drive)   # Output: True (because has_license is True)

# Check if it's NOT raining
is_sunny = False
is_raining = not is_sunny
print(is_raining)  # Output: False
```

**Connection to Course Outcomes:**

*   **CO3, CO4:** Logical operators are vital for creating the decision-making logic within your algorithms, directly impacting your ability to *use effective algorithms* and *interpret problem-solving strategies*.

### 4. The Unspoken Rules: Operator Precedence

This is a really important concept, like the order of operations in math class (PEMDAS/BODMAS). When you have an expression with multiple operators, Python needs to know which operation to perform first. This is governed by *operator precedence*. Operators with higher precedence are evaluated before operators with lower precedence.

Think about it like this: If you're baking a cake, you need to mix the dry ingredients *before* you add the wet ingredients, and you need to preheat the oven *before* you put the cake in. Order matters!

Here's a simplified hierarchy of common Python operators (from highest precedence to lowest):

1.  **Parentheses `()`:** Expressions inside parentheses are always evaluated first. This is the most powerful way to control the order of operations.
2.  **Exponentiation `**`:** Powers are calculated next.
3.  **Multiplication `*`, Division `/`, Floor Division `//`, Modulo `%`:** These are all at the same level. Python evaluates them from left to right.
4.  **Addition `+`, Subtraction `-`:** These are also at the same level and are evaluated from left to right.
5.  **Comparison Operators `==`, `!=`, `>`, `<`, `>=`, `<=`:** These are evaluated after arithmetic operations.
6.  **Logical Operators `not`, `and`, `or`:** These have the lowest precedence among the ones we've discussed, evaluated last. `not` is higher than `and`, which is higher than `or`.

**Why does precedence matter? Let's see an example:**

Consider the expression: `3 + 4 * 2`

*   **If multiplication has higher precedence (which it does):**
    1.  `4 * 2` is evaluated first, resulting in `8`.
    2.  Then, `3 + 8` is evaluated, resulting in `11`.

*   **If addition had higher precedence:**
    1.  `3 + 4` would be evaluated first, resulting in `7`.
    2.  Then, `7 * 2` would be evaluated, resulting in `14`.

Python correctly evaluates it as `11` because multiplication (`*`) has higher precedence than addition (`+`).

**Using Parentheses to Override Precedence:**

If you want to force a different order, use parentheses!

Consider `(3 + 4) * 2`

1.  The expression inside the parentheses `(3 + 4)` is evaluated first, resulting in `7`.
2.  Then, `7 * 2` is evaluated, resulting in `14`.

This is different from `3 + 4 * 2`! So, using parentheses is key to ensuring your calculations are done exactly as you intend. As George Pólya suggests in "How to Solve It," understanding the steps and breaking down the problem correctly is crucial. Parentheses help us explicitly define those steps for the computer.

**Example Walkthrough:**

Let's evaluate: `10 + 5 * 3 // 2 - 4`

1.  **Highest Precedence: `*`, `//`, `%` (from left to right)**
    *   `5 * 3` is `15`.
    *   The expression becomes: `10 + 15 // 2 - 4`
    *   Now, `15 // 2` (floor division) is `7`.
    *   The expression becomes: `10 + 7 - 4`

2.  **Next Highest Precedence: `+`, `-` (from left to right)**
    *   `10 + 7` is `17`.
    *   The expression becomes: `17 - 4`
    *   Now, `17 - 4` is `13`.

The final result is `13`.

**When in doubt, use parentheses!** If you're unsure about precedence or if an expression looks complex, adding parentheses makes your intention clear and reduces the chance of errors. This is a great habit to develop.

**Connection to Course Outcomes:**

*   **CO3, CO4:** Understanding operator precedence is fundamental to writing algorithms that perform calculations correctly. It's a core part of translating your logical steps into executable Python code and ensuring your programs produce the right output. This is vital for building accurate computational models.

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **What is the primary difference between `print()` and `input()` in Python?**
    *   **Answer:** `print()` is used to display output from the program to the user, while `input()` is used to get input from the user and store it in the program. `print()` sends data out; `input()` brings data in.

2.  **Why is it important to convert the value returned by `input()` when you need to perform calculations?**
    *   **Answer:** The `input()` function *always* returns a string. Arithmetic operations (like addition, subtraction, multiplication) cannot be performed on strings directly. You must convert the string to a numeric type (like `int` or `float`) first for mathematical calculations to work correctly.

3.  **Explain the concept of operator precedence with a simple Python example.**
    *   **Answer:** Operator precedence determines the order in which operations are performed in an expression. For example, in the expression `5 + 2 * 3`, the multiplication `*` has higher precedence than addition `+`. Therefore, `2 * 3` is calculated first (resulting in 6), and then `5 + 6` is calculated, yielding 11. If addition had higher precedence, the result would be `(5 + 2) * 3 = 7 * 3 = 21`. Using parentheses `()` can override default precedence.

**Exam-Oriented Questions:**

1.  **Predict the output of the following Python code:**
    ```python
    x = 10
    y = 3
    result = x // y + x % y * 2
    print(result)
    ```
    *   **Reasoning:**
        1.  `x // y`: Floor division. `10 // 3` is `3`.
        2.  `x % y`: Modulo. `10 % 3` is `1`.
        3.  The expression becomes `3 + 1 * 2`.
        4.  `1 * 2`: Multiplication has higher precedence than addition. `1 * 2` is `2`.
        5.  The expression becomes `3 + 2`.
        6.  `3 + 2`: Addition. `3 + 2` is `5`.
    *   **Output:** `5`

2.  **Write a Python program that asks the user for their birth year and then prints their approximate age.**
    ```python
    birth_year_str = input("Enter your birth year: ")
    current_year = 2024 # Assuming current year for simplicity
    birth_year_int = int(birth_year_str)
    age = current_year - birth_year_int
    print("You are approximately", age, "years old.")
    ```
    *   **Reasoning:** This program correctly uses `input()` to get the birth year as a string, converts it to an integer using `int()`, performs the subtraction to calculate age, and then uses `print()` to display the result.

3.  **What will be printed if the following code is executed?**
    ```python
    print("The answer is " + str(5 + 5))
    ```
    *   **Reasoning:**
        1.  Inside the parentheses, `5 + 5` is evaluated first, resulting in `10`.
        2.  The expression becomes `print("The answer is " + str(10))`.
        3.  `str(10)` converts the integer `10` into the string `"10"`.
        4.  The expression becomes `print("The answer is " + "10")`.
        5.  String concatenation joins `"The answer is "` and `"10"` to form `"The answer is 10"`.
    *   **Output:** `The answer is 10`

This concludes our introduction to basic I/O and operators in Python. Mastering these fundamentals will allow you to build increasingly complex and engaging programs! Keep practicing!
