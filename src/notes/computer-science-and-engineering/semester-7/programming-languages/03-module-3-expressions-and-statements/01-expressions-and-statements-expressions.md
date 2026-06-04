---
title: "Expressions and Statements -  Expressions"
subject: "PROGRAMMING LANGUAGES"
module: "Module 3: Expressions and Statements "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c693"
status: "completed"
scrapedAt: "2026-05-20T17:09:35.143Z"
---
# PROGRAMMING LANGUAGES: Module 3 - Expressions and Statements

## Topic: Expressions

### Learning Outcomes:

*   Understand the concept of an expression in programming.
*   Identify and differentiate between various types of expressions.
*   Explain the role of operators and operands in constructing expressions.
*   Understand operator precedence and associativity.
*   Evaluate expressions correctly.
*   Recognize the difference between an expression and a statement.

---

### 1. What is an Expression?

*   **Definition:** An **expression** is a combination of values, variables, operators, and function calls that evaluates to a single value. It's essentially a piece of code that produces a result.
*   **Purpose:** Expressions are used to compute or derive values, which can then be used in assignments, conditions, or further calculations.

**Key Characteristics:**

*   **Evaluates to a Value:** The most crucial characteristic is that an expression, when processed by the programming language's interpreter or compiler, results in a single value of a specific data type (e.g., integer, float, boolean, string).
*   **Can be Simple or Complex:** Expressions can range from a single literal value to a complex combination of multiple components.

---

### 2. Types of Expressions

Expressions can be categorized based on their structure and the components they contain.

#### 2.1. Literal Expressions

*   **Definition:** A literal expression represents a fixed value directly within the code. These values are written as is.
*   **Examples:**
    *   **Integer Literals:** `10`, `-5`, `0`
    *   **Floating-Point Literals:** `3.14`, `-0.5`, `2.0`
    *   **String Literals:** `"Hello"`, `'World'`
    *   **Boolean Literals:** `True`, `False` (or `true`, `false` depending on the language)
    *   **Character Literals:** `'A'`, `'#'`

#### 2.2. Variable Expressions

*   **Definition:** A variable expression refers to the current value stored in a named variable.
*   **Example:**
    ```python
    x = 10
    y = x  # 'y = x' is an expression where 'x' evaluates to 10
    ```
    In the assignment `y = x`, the `x` on the right-hand side is a variable expression that evaluates to the value currently held by `x`.

#### 2.3. Arithmetic Expressions

*   **Definition:** These expressions involve arithmetic operators and operands (literals or variables) to perform mathematical calculations.
*   **Common Arithmetic Operators:**
    *   `+` (Addition)
    *   `-` (Subtraction)
    *   `*` (Multiplication)
    *   `/` (Division)
    *   `%` (Modulo - remainder of division)
    *   `**` or `^` (Exponentiation - depends on the language)
    *   `//` (Integer Division - in some languages like Python)
*   **Example:**
    ```
    a + b * c
    10 / 5 - 2
    (x + y) % 3
    ```
    If `a = 5`, `b = 2`, `c = 3`, then `a + b * c` evaluates to `5 + 2 * 3 = 5 + 6 = 11`.

#### 2.4. Relational (Comparison) Expressions

*   **Definition:** These expressions compare two values and evaluate to a boolean value (`True` or `False`).
*   **Common Relational Operators:**
    *   `==` (Equal to)
    *   `!=` (Not equal to)
    *   `>` (Greater than)
    *   `<` (Less than)
    *   `>=` (Greater than or equal to)
    *   `<=` (Less than or equal to)
*   **Example:**
    ```
    x > 10
    a == b
    count != 0
    ```
    If `x = 15`, then `x > 10` evaluates to `True`.

#### 2.5. Logical Expressions

*   **Definition:** These expressions combine boolean values or relational expressions using logical operators. They also evaluate to a boolean value.
*   **Common Logical Operators:**
    *   `and` or `&&` (Logical AND)
    *   `or` or `||` (Logical OR)
    *   `not` or `!` (Logical NOT)
*   **Example:**
    ```
    (x > 10) and (y < 20)
    not (is_valid)
    (a == b) or (c > d)
    ```
    If `x = 15` and `y = 18`, then `(x > 10) and (y < 20)` evaluates to `True and True`, which is `True`.

#### 2.6. Assignment Expressions

*   **Definition:** An assignment expression assigns a value to a variable. While often considered statements, in some languages, assignment operations can return the assigned value, making them expressions.
*   **Example (Python-like):**
    ```python
    x = 10  # This is an assignment statement.
    y = (x = 5) # In some languages, this might be an expression. 'x' becomes 5, and 'y' becomes 5.
    ```
    In Python, `x = 5` is a statement and doesn't return a value. In languages like C/C++, `y = (x = 5)` is valid, `x` becomes 5, and the expression `(x = 5)` evaluates to 5, which is then assigned to `y`.

#### 2.7. Function Call Expressions

*   **Definition:** An expression that invokes a function or method. The value of the expression is the value returned by the function.
*   **Example:**
    ```python
    calculate_sum(num1, num2)
    get_user_input()
    string_length("example")
    ```
    If `calculate_sum(10, 5)` returns `15`, then `calculate_sum(10, 5)` is an expression evaluating to `15`.

#### 2.8. Compound Expressions

*   **Definition:** Expressions formed by combining simpler expressions using operators. This is the most common form of expressions.
*   **Example:**
    ```python
    result = (a + b) * c / (d - e)
    is_approved = (age >= 18) and (nationality == "Citizen")
    ```

---

### 3. Operators and Operands

*   **Operators:** Symbols that perform operations on values or variables.
*   **Operands:** The values or variables on which the operators act.

**Example Breakdown:**

In the expression `a + b * c`:

*   `a`, `b`, and `c` are **operands**.
*   `+` and `*` are **operators**.

---

### 4. Operator Precedence and Associativity

This is crucial for correctly evaluating complex expressions.

#### 4.1. Operator Precedence

*   **Definition:** **Precedence** determines the order in which different types of operators are evaluated in an expression. Operators with higher precedence are evaluated before operators with lower precedence.
*   **Analogy:** Similar to the order of operations (PEMDAS/BODMAS) in mathematics.
*   **Common Precedence Order (General Hierarchy - may vary slightly by language):**
    1.  **Parentheses `()`:** Highest precedence, used to override default precedence.
    2.  **Exponentiation `**` or `^`**
    3.  **Unary Plus `+`, Unary Minus `-`, Logical NOT `!`**
    4.  **Multiplication `*`, Division `/`, Modulo `%`, Integer Division `//`**
    5.  **Addition `+`, Subtraction `-`**
    6.  **Relational Operators `<`, `<=`, `>`, `>=`**
    7.  **Equality Operators `==`, `!=`**
    8.  **Logical AND `and` or `&&`**
    9.  **Logical OR `or` or `||`**
    10. **Assignment Operators `=`** (Often lowest, as they are typically statements)

*   **Example:**
    In `a + b * c`:
    *   `*` has higher precedence than `+`.
    *   Therefore, `b * c` is evaluated first, then `a` is added to the result.
    *   `a + (b * c)`

#### 4.2. Operator Associativity

*   **Definition:** **Associativity** determines the order in which operators of the *same* precedence level are evaluated.
*   **Types of Associativity:**
    *   **Left-to-Right:** Evaluate from left to right. Most binary arithmetic and relational operators are left-associative.
    *   **Right-to-Left:** Evaluate from right to left. Exponentiation and assignment operators are typically right-associative.

*   **Examples:**
    *   **Left-Associative:** `a - b + c`
        *   Evaluated as `(a - b) + c`
    *   **Right-Associative:** `a ** b ** c` (assuming `**` is exponentiation)
        *   Evaluated as `a ** (b ** c)`
    *   **Right-Associative:** `x = y = 5` (in languages where assignment is an expression)
        *   Evaluated as `x = (y = 5)`

**Important Note:** Always use parentheses `()` to clarify the order of evaluation if you are unsure about precedence or associativity, or to enforce a specific order.

---

### 5. Evaluating Expressions

*   **Process:** To evaluate an expression, you follow the rules of operator precedence and associativity. Start by evaluating sub-expressions within parentheses, then move to higher precedence operators, and finally to lower precedence operators.
*   **Example:** Evaluate `x + y * z / w` where `x=5, y=2, z=3, w=4`.
    1.  **Precedence:** `*` and `/` have higher precedence than `+`.
    2.  **Associativity:** `*` and `/` are typically left-associative.
    3.  Evaluate `y * z`: `2 * 3 = 6`
    4.  The expression becomes: `x + 6 / w`
    5.  Evaluate `6 / w`: `6 / 4 = 1.5` (assuming floating-point division)
    6.  The expression becomes: `x + 1.5`
    7.  Evaluate `x + 1.5`: `5 + 1.5 = 6.5`
    8.  **Result:** `6.5`

---

### 6. Expressions vs. Statements

*   **Expression:** Evaluates to a single value.
    *   Examples: `5 + 3`, `x > 10`, `calculate_area(radius)`
*   **Statement:** A complete unit of execution that performs an action. It typically does *not* evaluate to a value that can be used in another expression directly (though some statements might return status codes or have side effects).
    *   Examples:
        *   Assignment statements: `x = 10`
        *   Control flow statements: `if (condition) { ... }`, `while (condition) { ... }`, `for (...) { ... }`
        *   Function call statements: `print("Hello")` (if `print` doesn't return a meaningful value for expression use)

**Key Difference:** You can assign the result of an expression to a variable: `result = 5 + 3`. You generally cannot assign the result of a statement in the same way, unless the statement itself *is* also an expression in that language (like assignment in C/C++).

---

### Practice Questions/Exercises:

1.  **Identify the type of expression:**
    *   `17`
    *   `name == "Alice"`
    *   `count < 100`
    *   `price * quantity`
    *   `not is_empty`
    *   `get_temperature()`

2.  **Evaluate the following expressions, assuming standard operator precedence and left-to-right associativity for operators of the same precedence, and common data types:**
    *   `10 + 5 * 2`
    *   `20 / 4 - 1`
    *   `15 > 10 and 7 < 5`
    *   `3 ** 2 + 4 * 2`
    *   `100 / 10 % 3`

3.  **Write an expression that calculates the area of a circle given a radius `r`.**

4.  **Write an expression that checks if a number `num` is between 0 and 100 (inclusive).**

5.  **Consider the expression: `a = b + c * d`. If `a`, `b`, `c`, and `d` are variables, describe which parts are operators and which are operands, and explain the order of evaluation.**

---

### Answers to Practice Questions:

1.  **Identify the type of expression:**
    *   `17` - **Literal Expression** (Integer Literal)
    *   `name == "Alice"` - **Relational Expression** (and potentially part of a Logical Expression if combined)
    *   `count < 100` - **Relational Expression**
    *   `price * quantity` - **Arithmetic Expression**
    *   `not is_empty` - **Logical Expression**
    *   `get_temperature()` - **Function Call Expression**

2.  **Evaluate the following expressions:**
    *   `10 + 5 * 2`
        *   `5 * 2 = 10` (Multiplication before Addition)
        *   `10 + 10 = 20`
        *   **Result: 20**
    *   `20 / 4 - 1`
        *   `20 / 4 = 5` (Division before Subtraction)
        *   `5 - 1 = 4`
        *   **Result: 4**
    *   `15 > 10 and 7 < 5`
        *   `15 > 10` evaluates to `True`
        *   `7 < 5` evaluates to `False`
        *   `True and False` evaluates to `False`
        *   **Result: False**
    *   `3 ** 2 + 4 * 2`
        *   `3 ** 2 = 9` (Exponentiation before Multiplication and Addition)
        *   `4 * 2 = 8` (Multiplication before Addition)
        *   `9 + 8 = 17`
        *   **Result: 17**
    *   `100 / 10 % 3`
        *   `100 / 10 = 10` (Division and Modulo have same precedence, Left-to-Right)
        *   `10 % 3 = 1` (Modulo operation)
        *   **Result: 1**

3.  **Write an expression that calculates the area of a circle given a radius `r`.**
    *   Assume `pi` is approximately `3.14159`.
    *   **Expression:** `3.14159 * r * r` or `3.14159 * (r ** 2)`

4.  **Write an expression that checks if a number `num` is between 0 and 100 (inclusive).**
    *   **Expression:** `num >= 0 and num <= 100`

5.  **Consider the expression: `a = b + c * d`. If `a`, `b`, `c`, and `d` are variables, describe which parts are operators and which are operands, and explain the order of evaluation.**
    *   **Operands:** `a`, `b`, `c`, `d`
    *   **Operators:** `=`, `+`, `*`
    *   **Order of Evaluation:**
        1.  `*` has higher precedence than `+`. So, `c * d` is evaluated first.
        2.  `+` has higher precedence than `=`. So, `b` is added to the result of `c * d`.
        3.  The result of `b + (c * d)` is then assigned to the variable `a` using the `=` operator.

---

### Important Points to Remember:

*   An **expression** always evaluates to a single value.
*   Operators and operands are the building blocks of expressions.
*   **Operator precedence** dictates the order of operations for different types of operators.
*   **Operator associativity** dictates the order for operators of the same precedence.
*   Use **parentheses `()`** to enforce or clarify evaluation order and avoid ambiguity.
*   Understand the difference between **expressions** (which produce values) and **statements** (which perform actions).
*   Literals, variables, and function calls are all valid components of expressions.
