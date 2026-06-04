---
title: "Convert infix expression to postfix (or prefix) and then evaluate using stack"
subject: "DATA STRUCTURES LAB"
module: "Module 3: Convert infix expression to postfix (or prefix) and then evaluate using stack"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae6a"
status: "completed"
scrapedAt: "2026-05-20T16:23:18.480Z"
---
# DATA STRUCTURES LAB - Module 3: Infix to Postfix/Prefix Conversion and Evaluation

**Topic:** Convert infix expression to postfix (or prefix) and then evaluate using stack

**Description:**  This module focuses on converting infix mathematical expressions to postfix (Reverse Polish Notation) or prefix (Polish Notation) and then evaluating the resulting postfix or prefix expression using a stack data structure.

**Learning Outcomes:**

*   Understand the differences between infix, postfix, and prefix notations.
*   Convert an infix expression to a postfix expression using the stack data structure.
*   Convert an infix expression to a prefix expression using the stack data structure.
*   Evaluate a postfix expression using the stack data structure.
*   Evaluate a prefix expression using the stack data structure.
*   Understand the precedence of operators.
*   Implement the algorithms using code.
*   Analyze the time complexity of the algorithms.

## 1. Introduction to Infix, Postfix, and Prefix Notations

*   **Infix Notation:** The standard notation for mathematical expressions where operators are placed *between* operands (e.g., `A + B`, `(C * D) - E`).  This is the most common notation we use daily.

*   **Postfix Notation (Reverse Polish Notation - RPN):** Operators are placed *after* their operands (e.g., `A B +`, `C D * E -`).

*   **Prefix Notation (Polish Notation):** Operators are placed *before* their operands (e.g., `+ A B`, `- * C D E`).

**Why Convert?**

*   Postfix and prefix notations are parenthesis-free, eliminating ambiguity in expression evaluation.
*   They are easily evaluated using a stack data structure, making them suitable for compilers and calculators.

## 2. Operator Precedence and Associativity

*   **Precedence:** Determines the order in which operators are applied when an expression contains multiple operators. Higher precedence operators are evaluated before lower precedence operators.
    *   Example: `*` and `/` have higher precedence than `+` and `-`.

*   **Associativity:**  Determines the order of evaluation for operators of the same precedence.  Can be left-to-right (left associative) or right-to-left (right associative).
    *   Example: `+` and `-` are left associative (e.g., `A - B + C` is evaluated as `(A - B) + C`).
    *   Exponentiation (`^`) is often right associative (e.g., `A ^ B ^ C` is evaluated as `A ^ (B ^ C)`).

**Operator Precedence Table (Common Operators):**

| Operator | Precedence | Associativity |
| -------- | ----------- | ------------- |
| `()`      | Highest    | Left          |
| `^`      | High        | Right         |
| `*`, `/` | Medium      | Left          |
| `+`, `-` | Low         | Left          |

## 3. Infix to Postfix Conversion Algorithm

**Using a Stack:**

1.  **Initialization:**
    *   Create an empty stack to store operators.
    *   Create an empty string (or list) to store the postfix expression.

2.  **Scan the Infix Expression from left to right:**

    *   **Operand:** If the scanned character is an operand (letter, number), append it to the postfix string.

    *   **'(' (Left Parenthesis):** Push it onto the stack.

    *   **')' (Right Parenthesis):** Pop operators from the stack and append them to the postfix string until a '(' is encountered. Pop the '(' from the stack but do *not* append it to the postfix string.

    *   **Operator:**
        *   While the stack is not empty *and* the top of the stack has a precedence greater than or equal to the scanned operator's precedence, pop the operator from the stack and append it to the postfix string.  (For left associativity)
        *   Push the scanned operator onto the stack.

3.  **After Scanning the Entire Infix Expression:**

    *   Pop any remaining operators from the stack and append them to the postfix string.

**Example: Infix: `A + B * C - D`**

| Character | Stack (Bottom to Top) | Postfix |
| --------- | ----------------------- | -------- |
| A         |                         | A        |
| +         | +                       | A        |
| B         | +                       | A B      |
| *         | + *                     | A B      |
| C         | + *                     | A B C    |
| -         | +                       | A B C *  |
| D         | +                       | A B C * +|
|           |                         | A B C * + D |
|           |                         | A B C * + D -|

**Resulting Postfix Expression:** `A B C * + D -`

**Pseudocode:**

```
function infixToPostfix(infix):
  postfix = ""
  stack = []

  for char in infix:
    if isOperand(char):
      postfix += char
    elif char == '(':
      stack.append(char)
    elif char == ')':
      while stack and stack[-1] != '(':
        postfix += stack.pop()
      stack.pop()  // Remove the '('
    else:  // char is an operator
      while stack and stack[-1] != '(' and precedence(char) <= precedence(stack[-1]):
        postfix += stack.pop()
      stack.append(char)

  while stack:
    postfix += stack.pop()

  return postfix

function precedence(operator):
  if operator == '^': return 3
  if operator == '*' or operator == '/': return 2
  if operator == '+' or operator == '-': return 1
  return 0 // For '('

function isOperand(char):
  return char.isalnum()  // Or a more specific check
```

## 4. Infix to Prefix Conversion Algorithm

**Method 1: Reverse, Postfix, Reverse**

1.  Reverse the infix expression.  Also, swap '(' and ')' (i.e., '(' becomes ')' and ')' becomes '(').
2.  Convert the reversed expression to postfix using the infix-to-postfix algorithm.
3.  Reverse the resulting postfix expression.

**Method 2: Direct Conversion (Less Common, but possible)**

1. Initialize an empty operator stack and an empty prefix string.
2. Scan the infix expression from RIGHT to LEFT.
3. If the scanned character is an operand, prepend it to the prefix string.
4. If the scanned character is a ')', push it onto the stack.
5. If the scanned character is a '(', pop operators from the stack and prepend them to the prefix string until a ')' is encountered. Pop the ')' from the stack but do not prepend it to the prefix string.
6. If the scanned character is an operator:
   * While the stack is not empty AND the top of the stack has precedence higher than the scanned operator, pop the operator from the stack and prepend it to the prefix string.
   * Push the scanned operator onto the stack.
7. After scanning the entire infix expression, pop any remaining operators from the stack and prepend them to the prefix string.

**Example (Reverse, Postfix, Reverse): Infix: `A + B * C - D`**

1.  **Reverse and Swap Parentheses (if any):** `D - C * B + A`
2.  **Postfix Conversion:** `D C B * - A +`
3.  **Reverse:** `+ A - * B C D`

**Resulting Prefix Expression:** `+ A - * B C D`

## 5. Postfix Expression Evaluation Algorithm

**Using a Stack:**

1.  **Initialization:** Create an empty stack.
2.  **Scan the Postfix Expression from left to right:**
    *   **Operand:** If the scanned character is an operand, push its value onto the stack.
    *   **Operator:** If the scanned character is an operator, pop the top two operands from the stack (operand2 and operand1).  Apply the operator to operand1 and operand2 (operand1 operator operand2). Push the result back onto the stack.
3.  **After Scanning the Entire Postfix Expression:** The final result will be the only element remaining on the stack.

**Example: Postfix: `A B C * + D -`  Assume A=1, B=2, C=3, D=4**

| Character | Stack (Bottom to Top) | Operation         |
| --------- | ----------------------- | ----------------- |
| A         | 1                       |                   |
| B         | 1, 2                    |                   |
| C         | 1, 2, 3                 |                   |
| *         | 1, 6                    | 2 * 3 = 6         |
| +         | 7                       | 1 + 6 = 7         |
| D         | 7, 4                    |                   |
| -         | 3                       | 7 - 4 = 3         |

**Result:** `3`

**Pseudocode:**

```
function evaluatePostfix(postfix):
  stack = []
  for char in postfix:
    if isOperand(char):
      stack.append(int(char))  // Or convert to the appropriate data type
    else: // char is an operator
      operand2 = stack.pop()
      operand1 = stack.pop()
      result = operate(operand1, operand2, char)
      stack.append(result)

  return stack.pop()

function operate(operand1, operand2, operator):
  if operator == '+': return operand1 + operand2
  if operator == '-': return operand1 - operand2
  if operator == '*': return operand1 * operand2
  if operator == '/': return operand1 / operand2
  if operator == '^': return operand1 ** operand2
  // ... other operators ...
  return None // Or raise an exception
```

## 6. Prefix Expression Evaluation Algorithm

**Using a Stack:**

1.  **Initialization:** Create an empty stack.
2.  **Scan the Prefix Expression from RIGHT to LEFT:**
    *   **Operand:** If the scanned character is an operand, push its value onto the stack.
    *   **Operator:** If the scanned character is an operator, pop the top two operands from the stack (operand1 and operand2).  Apply the operator to operand1 and operand2 (operator operand1 operand2). Push the result back onto the stack.
3.  **After Scanning the Entire Prefix Expression:** The final result will be the only element remaining on the stack.

**Important Note:**  The order of operands popped from the stack is crucial for non-commutative operations (e.g., subtraction, division).  For prefix, the first operand popped becomes operand1, and the second operand popped becomes operand2.  This is the reverse of how postfix is evaluated.

**Example: Prefix: `+ A - * B C D`  Assume A=1, B=2, C=3, D=4**

| Character | Stack (Bottom to Top) | Operation         |
| --------- | ----------------------- | ----------------- |
| D         | 4                       |                   |
| C         | 4, 3                    |                   |
| B         | 4, 3, 2                 |                   |
| *         | 4, 6                    | 2 * 3 = 6         |
| -         | 4, -2                    | 6 - 4 = -2         |
| A         | -2, 1                    |                   |
| +         | -1                      | 1 + (-2) = -1    |

**Result:** `-1`

**Pseudocode:**

```
function evaluatePrefix(prefix):
  stack = []
  for char in reversed(prefix): // Scan from RIGHT to LEFT
    if isOperand(char):
      stack.append(int(char))
    else:
      operand1 = stack.pop()
      operand2 = stack.pop()
      result = operate(char, operand1, operand2)  // Note the order!
      stack.append(result)

  return stack.pop()

function operate(operator, operand1, operand2):
  if operator == '+': return operand1 + operand2
  if operator == '-': return operand1 - operand2
  if operator == '*': return operand1 * operand2
  if operator == '/': return operand1 / operand2
  if operator == '^': return operand1 ** operand2
  // ... other operators ...
  return None
```

## 7. Time Complexity

*   **Infix to Postfix/Prefix Conversion:** O(n), where n is the length of the infix expression.  Each character is visited and processed at most a constant number of times.
*   **Postfix/Prefix Evaluation:** O(n), where n is the length of the postfix/prefix expression.  Each character is visited and processed exactly once.

## 8. Important Points to Remember

*   The stack data structure is fundamental to these algorithms.
*   Understanding operator precedence and associativity is crucial for correct conversion.
*   When evaluating postfix and prefix expressions, the order in which operands are popped from the stack matters, especially for non-commutative operations.
*   Handle errors gracefully (e.g., invalid expressions, division by zero).
*   Remember that precedence applies only when converting from infix to postfix or prefix.  In postfix/prefix evaluation, the order is explicitly defined by the notation.
*   Be careful with parentheses. Incorrect handling can lead to incorrect results.

## 9. Practice Questions / Exercises

1.  **Convert the following infix expression to postfix:  `(A + B) * C - D / E`**
    *   **Answer:** `A B + C * D E / -`

2.  **Convert the following infix expression to prefix: `A * (B + C) / D`**
    *   **Answer:** `/ * A + B C D`

3.  **Evaluate the following postfix expression: `5 2 + 4 * 3 -`**
    *   **Answer:** `25` (Explanation: 5 2 + = 7; 7 4 * = 28; 28 3 - = 25)

4.  **Evaluate the following prefix expression: `* + 2 3 4`**
    *   **Answer:** `20` (Explanation: + 2 3 = 5; * 5 4 = 20)

5.  **Write a function in Python (or your preferred language) to convert an infix expression to postfix.** (Implementation Exercise - requires coding)

6.  **Write a function in Python (or your preferred language) to evaluate a postfix expression.** (Implementation Exercise - requires coding)

7.  **Explain the difference between left and right associativity and provide an example of an operator that exhibits right associativity.**

8.  **What happens if the stack is empty when an operator is encountered during postfix evaluation? How should you handle this scenario?** (Error Handling)

9.  **How would you modify the infix-to-postfix algorithm to handle unary operators (e.g., unary minus)?**

10. **Convert the infix expression `A ^ B * C + D` to both postfix and prefix notations.**

    *   Postfix: `A B ^ C * D +`
    *   Prefix: `+ * ^ A B C D`

These comprehensive notes cover all the specified learning outcomes and provide a solid foundation for understanding and implementing infix to postfix/prefix conversion and evaluation using stacks.  Remember to practice coding these algorithms to solidify your understanding.
