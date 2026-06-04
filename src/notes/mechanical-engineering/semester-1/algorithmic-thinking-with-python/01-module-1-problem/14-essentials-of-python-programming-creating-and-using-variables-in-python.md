---
title: "ESSENTIALS OF PYTHON PROGRAMMING:- Creating and using variables in Python"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 1: PROBLEM"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1e0bca560598cfa34a84"
status: "completed"
scrapedAt: "2026-05-20T17:36:15.003Z"
---
# Module 1: PROBLEM - Essentials of Python Programming: Creating and Using Variables

Welcome, everyone, to our journey into Algorithmic Thinking with Python! In this first module, we're laying the groundwork by diving into the absolute essentials of Python programming. Think of this as learning the alphabet and basic sentence structure before you start writing stories. Our first stop on this exciting path is understanding how we tell Python about the information it needs to work with. That's where **variables** come in.

## 1. What Exactly is a Variable?

Let's start with a simple analogy, as George Pólya, in his classic "How to Solve It," always emphasizes the importance of understanding the problem. What *is* a variable? Imagine you're baking a cake, and you have a mixing bowl. This bowl is where you put your ingredients – the flour, the sugar, the eggs. You can put different amounts of flour in the bowl, or even switch out flour for something else if you wanted to. The bowl itself is a container, and its *contents* can change.

In programming, a **variable** is very much like that mixing bowl. It's a named location in the computer's memory that holds a piece of data. This data can be anything: a number, some text, a true/false value, and so on. The "variable" part comes from the fact that the *value* stored in that location can *vary* or change as your program runs.

This is fundamental to **CO1: Utilize computing as a model for solving real-world problems**. When we model a real-world problem, we often deal with quantities that change. Think about tracking the number of students in a classroom, the temperature of a room, or the score in a game. Variables are our way of representing and managing these dynamic pieces of information within our computer models.

## 2. Creating and Naming Variables in Python

So, how do we actually *create* a variable in Python? It’s wonderfully straightforward! Python is known for its readability, and variable creation is a prime example. You don't need to declare the *type* of data a variable will hold beforehand, as you might in some other languages. Python is smart enough to figure that out for you.

To create a variable, you simply choose a name for it and assign a value to it using the **assignment operator**, which is the single equals sign (`=`).

Let's look at an example:

Imagine we want to keep track of the number of apples a student has. We can create a variable called `number_of_apples` and assign it the value `5`.

```python
number_of_apples = 5
```

See? We decided on a name, `number_of_apples`, and we said it should hold the value `5`. Python sees this and says, "Okay, I'll find a spot in memory for `5` and make sure that whenever I see `number_of_apples`, I know it refers to that `5`."

Now, what about the *names* of variables? This is where **CO2: Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem** becomes crucial. A good variable name is like a good label on a file cabinet – it tells you what's inside without you having to open it.

Python has some rules for variable names:

*   **They must start with a letter (a-z, A-Z) or an underscore (`_`).**
*   **They can contain letters, numbers (0-9), and underscores.**
*   **They are case-sensitive.** This means `apple`, `Apple`, and `APPLE` are all considered different variables by Python. This is a common pitfall to watch out for, especially when you're starting out!
*   **They cannot be Python's reserved keywords.** Keywords are words that Python uses for its own instructions (like `if`, `for`, `while`, `print`, etc.). You can't name a variable `if` because Python would get confused.

**Good Variable Naming Practices:**

As Maureen Sprankle and Jim Hubbard discuss in "Problem Solving & Programming Concepts," clarity and readability are paramount. For variable names:

*   **Be descriptive:** `student_count` is much better than `sc` or `x`.
*   **Use `snake_case`:** This means using lowercase letters and separating words with underscores. This is the most common and recommended style in Python. For example: `first_name`, `total_score`, `is_valid_user`.
*   **Avoid single-letter names** unless they are used in a very specific, limited context (like loop counters, e.g., `i` in a `for i in range(10):` loop, which is a widely accepted convention).

Let's consider another real-world scenario. Imagine you're building a system to manage a library. You'll need to store information about books.

```python
book_title = "The Hitchhiker's Guide to the Galaxy"
author_name = "Douglas Adams"
publication_year = 1979
is_available = True
```

Here, `book_title`, `author_name`, `publication_year`, and `is_available` are all good, descriptive variable names. They immediately tell us what kind of information each variable holds. The values assigned are a string (text), another string, an integer (whole number), and a boolean (True/False).

## 3. Understanding Data Types

Speaking of data types, this is a crucial concept that Python handles elegantly but that we need to be aware of. A **data type** defines the kind of value a variable can hold and the operations that can be performed on it.

Think about it: you wouldn't try to add "hello" to the number `5` in a meaningful way, would you? Python understands this.

In Python, some of the most common data types you'll encounter are:

*   **Integers (`int`):** Whole numbers, positive or negative, without decimals. Examples: `10`, `-7`, `0`.
*   **Floating-Point Numbers (`float`):** Numbers with a decimal point. Examples: `3.14`, `-0.5`, `2.0`. Notice that `2.0` is a float, even though it looks like a whole number, because of the decimal point.
*   **Strings (`str`):** Sequences of characters, enclosed in single quotes (`'`) or double quotes (`"`). Examples: `'Hello'`, `"Python programming"`, `'123'`. Even if a string contains only numbers, like `'123'`, it's still treated as text, not a number that you can do mathematical operations on directly.
*   **Booleans (`bool`):** Represents truth values, either `True` or `False` (with capital T and F). These are essential for making decisions in your programs.

When you assign a value to a variable, Python automatically infers its data type.

```python
age = 30           # age is an integer
pi_value = 3.14159 # pi_value is a float
user_name = "Alice" # user_name is a string
is_student = False # is_student is a boolean
```

This automatic type inference is a key feature of Python, aligning with the goal of making programming more accessible, as emphasized in books like "Python for Everyone."

**Why are data types important?** They dictate what operations are valid. For example, you can:

*   Add numbers: `5 + 3` results in `8`.
*   Concatenate strings: `"Hello" + " " + "World"` results in `"Hello World"`.
*   Multiply a number by a string: `3 * "ha"` results in `"hahaha"`.

But you *cannot* do:

*   Add a string to an integer directly: `5 + "apples"` would cause an error.

## 4. Using Variables: Operations and Reassignment

Once you have variables, you can use them! This is where the algorithmic thinking really starts to take shape, as described in "Computational Thinking: A Primer for Programmers and Data Scientists." We combine variables with operations to manipulate data and solve problems.

**Arithmetic Operations:**
Python supports standard arithmetic operations:

*   `+` : Addition
*   `-` : Subtraction
*   `*` : Multiplication
*   `/` : Division (always results in a float)
*   `//`: Floor Division (results in an integer, discarding the remainder)
*   `%` : Modulus (returns the remainder of a division)
*   `**`: Exponentiation (e.g., `2 ** 3` is 2 cubed)

Let's see this in action. Suppose we're calculating the total cost of items in a shopping cart.

```python
price_per_item = 10.50
quantity = 3
discount_percentage = 0.10 # 10% discount

subtotal = price_per_item * quantity
discount_amount = subtotal * discount_percentage
total_cost = subtotal - discount_amount

print(f"Subtotal: {subtotal}")
print(f"Discount Amount: {discount_amount}")
print(f"Total Cost: {total_cost}")
```

**Output:**
```
Subtotal: 31.5
Discount Amount: 3.15
Total Cost: 28.35
```

Here, we used variables like `price_per_item`, `quantity`, and `discount_percentage` to perform calculations. The results of these calculations are also stored in new variables: `subtotal`, `discount_amount`, and `total_cost`. This is a core part of **CO3: Use effective algorithms to solve the formulated models and translate algorithms into executable programs**. We're building a small algorithm to calculate the cost.

**Reassignment:**
Remember how we said variables can *vary*? That's through reassignment. You can change the value a variable holds at any point in your program.

Let's say a customer buys another item:

```python
price_per_item = 10.50
quantity = 3
# ... calculations above ...

# Customer buys one more item
quantity = quantity + 1 # Or, more concisely, quantity += 1
subtotal = price_per_item * quantity
discount_amount = subtotal * discount_percentage
total_cost = subtotal - discount_amount

print(f"New quantity: {quantity}")
print(f"New Total Cost: {total_cost}")
```

In the line `quantity = quantity + 1`, we are taking the current value of `quantity` (which is `3`), adding `1` to it, and then storing that *new* result (`4`) back into the `quantity` variable. The old value (`3`) is overwritten. This is a fundamental aspect of how programs manage state and change over time, directly linking to **CO4: Interpret the problem-solving strategies... and essential Python programming skills**.

**Type Conversion (Casting):**
Sometimes, you might need to change the type of data stored in a variable. This is called **type conversion** or **casting**. Python provides built-in functions for this:

*   `int(value)`: Converts `value` to an integer.
*   `float(value)`: Converts `value` to a float.
*   `str(value)`: Converts `value` to a string.
*   `bool(value)`: Converts `value` to a boolean.

Consider if you read input from a user. User input is almost always read as a string.

```python
num_str = "10"
# print(num_str + 5) # This would cause an error!

num_int = int(num_str) # Convert the string "10" to the integer 10
result = num_int + 5
print(f"The result is: {result}") # Output: The result is: 15
```

Here, we explicitly converted the string `"10"` into an integer `10` using `int()` so we could perform addition with another integer. This is a very common operation when dealing with user input or data read from files.

## 5. Putting It All Together: Variables in Problem Solving

Recall George Pólya's emphasis on understanding the problem. Before you even write a single line of code, you should be able to articulate what information your program needs to work with. These are the pieces of information that will become your variables.

For example, if the problem is: "Calculate the area of a rectangle," you first need to identify the necessary inputs. What do you need to know to calculate the area of a rectangle? You need its **length** and its **width**.

So, your first step in modeling this problem with Python would be to create variables for these:

```python
# Problem: Calculate the area of a rectangle

# Step 1: Identify needed information (which will become variables)
# - Length of the rectangle
# - Width of the rectangle

# Step 2: Create variables and assign initial values (or plan to get them)
length = 12.5  # Let's say the length is 12.5 units
width = 5.0   # And the width is 5.0 units

# Step 3: Define the operation (the algorithm)
# Area of a rectangle = length * width

# Step 4: Perform the calculation and store the result
area = length * width

# Step 5: Present the result
print(f"The length of the rectangle is: {length}")
print(f"The width of the rectangle is: {width}")
print(f"The area of the rectangle is: {area}")
```

This simple example illustrates how variables are not just placeholders but are fundamental to translating a real-world problem into a computational model and then into executable code, directly fulfilling **CO2** and **CO3**. By using descriptive variable names and understanding data types, we make our code clearer and less prone to errors, aiding in the problem articulation and modeling process.

**Common Pitfalls and Exam Tips:**

*   **Case Sensitivity:** Always remember `myVariable` is different from `myvariable`. This is a frequent cause of bugs.
*   **Using Keywords:** Don't name variables after Python keywords (e.g., `print`, `for`, `if`, `while`, `class`, `def`). The Python interpreter will flag this as an error.
*   **Misunderstanding Data Types:** Trying to add strings and numbers directly without conversion is a classic mistake. Always check your types if you get unexpected errors!
*   **Readability:** While Python allows short, cryptic variable names, exams often look for code that is easy to understand. Use descriptive names!

Remember this: Variables are your tools for storing and manipulating information. By choosing good names, understanding their types, and using them correctly in operations, you're building the foundation for writing effective and understandable Python programs. This is exactly what we aim for in **CO4** – interpreting strategies and applying fundamental skills.

---

## Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** What is a variable in the context of programming, and why is it called "variable"?
    **Answer:** In programming, a variable is a named storage location in the computer's memory that holds a piece of data. It's called "variable" because the value stored in that location can change or vary during the execution of the program. Think of it like a labeled box where you can put different items at different times.

2.  **Question:** Explain the importance of descriptive variable names. How does this relate to problem-solving?
    **Answer:** Descriptive variable names are crucial for making code readable and understandable, both for yourself and for others who might read your code. They act as self-documenting labels, making it easier to grasp what data a variable represents without needing extensive comments. This directly relates to problem-solving (CO2) because clear variable names help in accurately articulating and modeling the problem, ensuring that the data being manipulated in the program truly reflects the elements of the real-world problem being solved. For instance, `number_of_students` is far more informative than `n` or `x`.

3.  **Question:** Provide examples of at least three different data types in Python and one operation that is valid for each.
    **Answer:**
    *   **Integer (`int`):** Example: `count = 10`. A valid operation is addition: `count + 5`.
    *   **String (`str`):** Example: `message = "Hello"`. A valid operation is concatenation: `message + " World"`.
    *   **Boolean (`bool`):** Example: `is_active = True`. A valid operation is comparison: `is_active == True`.

**Exam-Oriented Questions:**

1.  **Question:** Which of the following are valid variable names in Python? (Select all that apply)
    a) `my_variable`
    b) `1st_place`
    c) `_username`
    d) `print`
    e) `user-name`
    **Answer:**
    a) `my_variable` - Valid. Starts with a letter, contains letters and an underscore.
    b) `1st_place` - Invalid. Starts with a number.
    c) `_username` - Valid. Starts with an underscore, contains letters.
    d) `print` - Invalid. `print` is a reserved keyword in Python.
    e) `user-name` - Invalid. Contains a hyphen, which is not allowed. Hyphens are subtraction operators.

    *Reasoning:* This question tests knowledge of Python's variable naming rules and reserved keywords. It's a common type of multiple-choice question in exams.

2.  **Question:** Consider the following Python code snippet:
    ```python
    x = 5
    y = "10"
    z = x + int(y)
    print(z)
    ```
    What will be the output of this code? Explain your reasoning.
    **Answer:**
    The output will be `15`.

    *Reasoning:*
    *   `x` is assigned the integer value `5`.
    *   `y` is assigned the string value `"10"`.
    *   The expression `int(y)` converts the string `"10"` into the integer `10`.
    *   Then, `x + int(y)` becomes `5 + 10`, which evaluates to `15`.
    *   This integer value `15` is then assigned to the variable `z`.
    *   Finally, `print(z)` displays the value of `z`, which is `15`.
    This question checks understanding of data types, type conversion (casting), and the assignment operator (CO4, CO3).

3.  **Question:** If you want to store the price of an item which could have cents (e.g., $9.99), which data type would be most appropriate in Python, and why? If you later wanted to add a fixed tax of 5% to this price, how would you approach it using variables?
    **Answer:**
    The most appropriate data type to store a price with cents in Python is `float` (floating-point number). This is because floats can represent numbers with decimal points, unlike integers.

    To add a 5% tax:
    1.  Store the price in a `float` variable:
        ```python
        item_price = 9.99
        ```
    2.  Define a variable for the tax rate:
        ```python
        tax_rate = 0.05 # Represents 5%
        ```
    3.  Calculate the tax amount:
        ```python
        tax_amount = item_price * tax_rate
        ```
    4.  Calculate the final price including tax:
        ```python
        final_price = item_price + tax_amount
        ```
    5.  Or, more concisely, calculate the price directly:
        ```python
        final_price_direct = item_price * (1 + tax_rate)
        ```
    This demonstrates variable use in a practical scenario (CO1, CO3) and highlights the importance of choosing the correct data type.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
