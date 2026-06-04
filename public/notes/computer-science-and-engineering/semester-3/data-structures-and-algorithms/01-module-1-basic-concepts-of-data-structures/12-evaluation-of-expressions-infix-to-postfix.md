---
title: "Evaluation of Expressions- Infix to Postfix"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac2e"
status: "completed"
scrapedAt: "2026-05-20T16:22:50.637Z"
---
# DATA STRUCTURES AND ALGORITHMS: Module 1 - Basic Concepts of Data Structures
## Topic: Evaluation of Expressions - Infix to Postfix

**Learning Outcomes:**

*   Understand the different notations for representing mathematical expressions (Infix, Prefix, Postfix).
*   Convert Infix expressions to Postfix expressions.
*   Understand the role of stacks in Infix to Postfix conversion.
*   Apply the operator precedence rules for correct conversion.

---

### 1. Expression Notations

*   **Infix Notation:** The operator is placed *between* the operands.  This is the most common way we write mathematical expressions.
    *   Example: `A + B` , `(A * B) + C`
*   **Prefix Notation (Polish Notation):** The operator is placed *before* the operands.
    *   Example: `+ A B` , `+ * A B C`
*   **Postfix Notation (Reverse Polish Notation - RPN):** The operator is placed *after* the operands.
    *   Example: `A B +` , `A B * C +`

**Why Postfix?**

Postfix notation is advantageous because it simplifies expression evaluation.  It eliminates the need for parentheses and operator precedence rules during evaluation.

### 2. Importance of Postfix Conversion

*   **Simplifies Evaluation:** Postfix expressions can be evaluated using a stack data structure, making the evaluation process algorithmically straightforward.
*   **Compiler Design:** Compilers often convert infix expressions into postfix or other intermediate forms for efficient code generation.
*   **Calculator Implementation:**  Postfix notation is frequently used in calculator implementations (especially stack-based calculators).

### 3. Algorithm for Infix to Postfix Conversion

The algorithm uses a stack to store operators and parentheses.

**Steps:**

1.  **Initialize:** Create an empty stack (Operator Stack) and an empty output string (Postfix String).
2.  **Scan:** Scan the Infix expression from left to right, token by token.  A token can be an operand (variable or number), an operator, a left parenthesis '(', or a right parenthesis ')'.
3.  **For each token:**
    *   **Operand:** If the token is an operand, append it directly to the Postfix String.
    *   **Left Parenthesis '(':** Push the left parenthesis onto the Operator Stack.
    *   **Right Parenthesis ')':**
        *   Pop operators from the Operator Stack and append them to the Postfix String until a left parenthesis '(' is encountered.
        *   Discard the left parenthesis (do *not* append it to the Postfix String).
        *   If the stack becomes empty before finding a left parenthesis, it indicates an error (mismatched parentheses).
    *   **Operator:**
        *   While the Operator Stack is not empty *and* the precedence of the current operator is less than or equal to the precedence of the operator at the top of the Operator Stack:
            *   Pop the operator from the Operator Stack and append it to the Postfix String.
        *   Push the current operator onto the Operator Stack.
4.  **After Scan:** Once the entire Infix expression has been scanned:
    *   Pop any remaining operators from the Operator Stack and append them to the Postfix String.
5.  **Result:** The Postfix String now contains the equivalent postfix expression.

### 4. Operator Precedence

Operators have a predefined precedence that determines the order of evaluation. Higher precedence operators are evaluated before lower precedence operators. A common precedence hierarchy (from highest to lowest) is:

1.  Parentheses: `()`  (Used to override precedence; handled specially by the algorithm)
2.  Exponentiation: `^`
3.  Multiplication and Division: `*`, `/`
4.  Addition and Subtraction: `+`, `-`

**Note:**  When operators of equal precedence appear consecutively, they are typically evaluated from left to right (left associativity), except for exponentiation which is usually right-associative. The algorithm implementation handles this during the comparison within the operator step.

### 5. Example: Infix to Postfix Conversion

**Infix Expression:** `A + B * C - D / E`

**Let's walk through the algorithm:**

| Token | Operator Stack | Postfix String | Explanation                                                                                                                                 |
|-------|----------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| A     |                | A              | Operand: append to Postfix String                                                                                                              |
| +     | +              | A              | Operator: Stack is empty, push onto stack                                                                                                       |
| B     | +              | A B            | Operand: append to Postfix String                                                                                                              |
| *     | + *            | A B            | Operator: precedence of `*` > precedence of `+`, push onto stack                                                                                 |
| C     | + *            | A B C          | Operand: append to Postfix String                                                                                                              |
| -     | +              | A B C *        | Operator: precedence of `-` <= precedence of `*`, pop `*` and append to Postfix String; precedence of `-` <= precedence of `+`, pop `+` append |
|       | -              | A B C * +      | and append to Postfix String; push `-` onto stack                                                                                               |
| D     | -              | A B C * + D    | Operand: append to Postfix String                                                                                                              |
| /     | - /            | A B C * + D    | Operator: precedence of `/` > precedence of `-`, push onto stack                                                                                 |
| E     | - /            | A B C * + D E  | Operand: append to Postfix String                                                                                                              |
| End   |                | A B C * + D E / -| Pop remaining operators from stack                                                                                                                |

**Postfix Expression:** `A B C * + D E / -`

### 6. Implementation Considerations

*   **Stack Data Structure:**  Use a suitable stack implementation (array-based or linked list-based).
*   **Operator Precedence Function:** Implement a function that returns the precedence value for each operator.
*   **Error Handling:** Include error handling to detect invalid expressions (e.g., mismatched parentheses, invalid characters).

### 7. Practice Questions/Exercises

**Convert the following Infix expressions to Postfix expressions:**

1.  `(A + B) * C`
2.  `A * (B + C) / D`
3.  `A ^ B * C + D`  (Remember exponentiation is usually right-associative)
4.  `((A + B) * C - D) / (E + F)`

**Answers:**

1.  `A B + C *`
2.  `A B C + * D /`
3.  `A B ^ C * D +`
4.  `A B + C * D - E F + /`

### 8. Important Points to Remember

*   The stack is crucial for managing operator precedence and parenthesis matching.
*   Careful attention to operator precedence rules is essential for correct conversion.
*   The algorithm ensures that operands maintain their original order in the Postfix expression.
*   Postfix notation eliminates the need for parentheses in evaluation.
*   Error handling is important to handle invalid Infix expressions.
