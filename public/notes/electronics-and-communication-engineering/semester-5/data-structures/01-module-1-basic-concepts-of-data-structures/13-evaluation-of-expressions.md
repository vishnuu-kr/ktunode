---
title: "Evaluation of Expressions"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea06"
status: "completed"
scrapedAt: "2026-05-23T17:55:01.859Z"
---
# Module 1: Basic Concepts of Data Structures - Evaluation of Expressions

## Introduction to Expression Evaluation

Expressions are fundamental building blocks in programming, representing computations involving operands (values or variables) and operators. Evaluating these expressions correctly and efficiently is crucial for program execution. This topic delves into the various forms of expressions and the techniques used to evaluate them, often leveraging the power of stacks.

**Key Concept:** An **expression** is a combination of operands and operators that yields a value.

## Types of Expressions

Expressions can be represented in different ways, each with its own advantages and disadvantages, particularly in terms of how they are evaluated by computers.

### 1. Infix Expressions

*   **Definition:** Infix notation is the standard mathematical notation we use daily, where operators are placed *between* their operands.
    *   Example: `A + B * C`
*   **Evaluation Challenge:** Computers find it difficult to directly evaluate infix expressions due to the need to handle operator precedence and associativity.
*   **Textbook Reference:** Horowitz, Sahni, and Anderson-Freed (2/e) discusses the direct evaluation of infix expressions using stacks to manage precedence.

### 2. Prefix (Polish) Notation

*   **Definition:** In prefix notation, the operator precedes its operands.
    *   Example: `+ A * B C` (equivalent to `A + B * C`)
*   **Evaluation Advantage:** Easier for computers to evaluate because the order of operations is explicit, eliminating the need for precedence rules.
*   **Textbook Reference:** Samanta D (2/e) often introduces prefix notation as a precursor to understanding how stacks can simplify expression evaluation.

### 3. Postfix (Reverse Polish) Notation

*   **Definition:** In postfix notation, the operator follows its operands.
    *   Example: `A B C * +` (equivalent to `A + B * C`)
*   **Evaluation Advantage:** Very convenient for computer evaluation, as it can be processed from left to right without the need for explicit precedence or associativity rules. This is the most commonly used form for direct computer evaluation.
*   **Textbook Reference:** Horowitz, Sahni, and Anderson-Freed (2/e) dedicate significant sections to postfix evaluation and conversion from infix.

## Operator Precedence and Associativity

When evaluating expressions, especially infix ones, the order in which operations are performed is critical.

### Operator Precedence

*   **Definition:** The priority assigned to operators. Operators with higher precedence are evaluated before operators with lower precedence.
    *   Example: Multiplication and division typically have higher precedence than addition and subtraction. In `A + B * C`, `B * C` is evaluated first.
*   **Common Precedence Levels (from highest to lowest):**
    1.  Parentheses `()`
    2.  Exponentiation `^`
    3.  Multiplication `*`, Division `/`, Modulo `%`
    4.  Addition `+`, Subtraction `-`
    5.  Relational operators `<`, `<=`, `>`, `>=`
    6.  Equality operators `==`, `!=`
    7.  Logical NOT `!`
    8.  Logical AND `&&`
    9.  Logical OR `||`
*   **Textbook Reference:** Gilberg & Forouzan (2/e) provide clear tables and examples of operator precedence.

### Operator Associativity

*   **Definition:** The rule that determines the order of evaluation for operators with the same precedence.
    *   **Left-associative:** Operators are evaluated from left to right. (Most common: +, -, \*, /)
        *   Example: `A - B + C` is evaluated as `(A - B) + C`.
    *   **Right-associative:** Operators are evaluated from right to left. (Exponentiation `^` is typically right-associative).
        *   Example: `A ^ B ^ C` is evaluated as `A ^ (B ^ C)`.
*   **Textbook Reference:** Brass (2/e) might discuss associativity in the context of more complex expression parsing.

**Important Point to Remember:** Understanding precedence and associativity is fundamental to converting infix expressions to prefix or postfix and for directly evaluating infix expressions.

## Evaluating Postfix Expressions

Postfix notation simplifies evaluation because we can process the expression from left to right.

**Algorithm for Postfix Evaluation:**

1.  Initialize an empty stack.
2.  Scan the postfix expression from left to right.
3.  If the scanned character is an **operand**:
    *   Push it onto the stack.
4.  If the scanned character is an **operator**:
    *   Pop the top two operands from the stack. Let them be `operand2` (topmost) and `operand1` (next).
    *   Perform the operation: `result = operand1 operator operand2`.
    *   Push the `result` back onto the stack.
5.  After scanning the entire expression, the final result will be the only element left on the stack.

**Example:** Evaluate `A B + C D * /`

*   Assume: `A=5`, `B=3`, `C=2`, `D=4`

| Scan | Stack             | Operation                               | Result |
| :--- | :---------------- | :-------------------------------------- | :----- |
| `A`  | `5`               | Push operand `A`                        |        |
| `B`  | `5, 3`            | Push operand `B`                        |        |
| `+`  | `8`               | Pop `3`, `5`. Calculate `5 + 3 = 8`. Push `8`. | 8      |
| `C`  | `8, 2`            | Push operand `C`                        |        |
| `D`  | `8, 2, 4`         | Push operand `D`                        |        |
| `*`  | `8, 8`            | Pop `4`, `2`. Calculate `2 * 4 = 8`. Push `8`. | 8      |
| `/`  | `1`               | Pop `8`, `8`. Calculate `8 / 8 = 1`. Push `1`. | 1      |

Final result on stack: `1`

**Textbook Reference:** Horowitz, Sahni, and Anderson-Freed (2/e) provides detailed pseudocode for this algorithm.

## Converting Infix to Postfix Expressions

This is a common task, as postfix expressions are easier to evaluate. The conversion is typically done using a stack.

**Algorithm for Infix to Postfix Conversion:**

1.  Initialize an empty stack for operators.
2.  Initialize an empty string for the postfix expression.
3.  Scan the infix expression from left to right.
4.  If the scanned character is an **operand**:
    *   Append it to the postfix expression.
5.  If the scanned character is an **opening parenthesis `(`**:
    *   Push it onto the operator stack.
6.  If the scanned character is a **closing parenthesis `)`**:
    *   Pop operators from the stack and append them to the postfix expression until an opening parenthesis `(` is encountered.
    *   Pop and discard the opening parenthesis.
7.  If the scanned character is an **operator**:
    *   While the stack is not empty AND the top of the stack is an operator AND the precedence of the current operator is less than or equal to the precedence of the operator at the top of the stack (and considering associativity for equal precedence):
        *   Pop the operator from the stack and append it to the postfix expression.
    *   Push the current operator onto the stack.
8.  After scanning the entire infix expression, pop any remaining operators from the stack and append them to the postfix expression.

**Helper Function: `precedence(operator)`**

This function returns a numerical value representing the precedence of an operator.

| Operator | Precedence |
| :------- | :--------- |
| `(`      | 0          |
| `+`, `-` | 1          |
| `*`, `/` | 2          |
| `^`      | 3          |

**Associativity Rule for Conversion:**

*   If the current operator has **higher precedence** than the operator on top of the stack, push the current operator.
*   If the current operator has **equal precedence** and is **left-associative**, pop the stack operator and push the current operator.
*   If the current operator has **equal precedence** and is **right-associative**, push the current operator.
*   If the current operator has **lower precedence**, pop the stack operator until the condition is no longer met, then push the current operator.

**Example:** Convert `A + B * C - D` to Postfix

Assume: `A, B, C, D` are operands. `+`, `*`, `-` are operators.

| Scan | Infix Expression | Operator Stack | Postfix Expression | Notes                                                |
| :--- | :--------------- | :------------- | :----------------- | :--------------------------------------------------- |
| `A`  | `A`              | `[]`           | `A`                | Operand, append to postfix.                          |
| `+`  | `A +`            | `[+]`          | `A`                | Operator. Stack empty, push `+`.                     |
|

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
