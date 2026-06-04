---
title: "Evaluation of Expressions"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures: Algorithms, Performance Analysis, Space Complexity, Time Complexity, Asymptotic Notations"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363e0"
status: "completed"
scrapedAt: "2026-05-23T16:20:37.890Z"
---
# Data Structures: Module 1 - Basic Concepts

## Topic: Evaluation of Expressions

This module introduces fundamental concepts in data structures, focusing on algorithms, their performance analysis, and the mathematical tools used to describe it. A crucial aspect of understanding algorithms is how efficiently they can evaluate expressions.

---

### 1. Learning Outcomes Covered:

*   **Understanding Expression Evaluation:** Grasp the process and challenges involved in evaluating mathematical and logical expressions.
*   **Postfix and Prefix Notations:** Learn about alternative notations for expressions (postfix and prefix) and how they simplify evaluation compared to the traditional infix notation.
*   **Stack-Based Evaluation:** Understand how stacks are effectively used to evaluate expressions in postfix and prefix forms.
*   **Infix to Postfix/Prefix Conversion:** Learn algorithms to convert infix expressions to postfix or prefix forms, which are easier for machines to process.
*   **Operator Precedence and Associativity:** Comprehend the rules that govern the order of operations in expressions.

---

### 2. Key Concepts and Definitions:

#### 2.1. Types of Expressions:

*   **Infix Expression:** The standard way of writing expressions where operators are placed *between* their operands.
    *   **Example:** `A + B * C`
    *   **Challenge:** Requires rules for operator precedence and associativity to determine the order of evaluation.

*   **Postfix Expression (Reverse Polish Notation - RPN):** Operators are placed *after* their operands.
    *   **Example:** `A B C * +` (equivalent to `A + B * C`)
    *   **Advantage:** No need for parentheses or precedence rules during evaluation; evaluation proceeds from left to right.

*   **Prefix Expression (Polish Notation):** Operators are placed *before* their operands.
    *   **Example:** `+ A * B C` (equivalent to `A + B * C`)
    *   **Advantage:** Similar to postfix, evaluation is straightforward without parentheses or complex precedence rules.

#### 2.2. Operator Precedence:

*   The priority assigned to operators that determines the order in which operations are performed.
*   **General Hierarchy:**
    1.  Parentheses `()`
    2.  Exponentiation `^` (often right-to-left associativity)
    3.  Multiplication `*`, Division `/`, Modulo `%` (left-to-right associativity)
    4.  Addition `+`, Subtraction `-` (left-to-right associativity)
*   **Reference:** Horowitz, Sahni, & Anderson-Freed (Chapter 3: Stacks, Queues, and Linked Lists) discusses operator precedence in the context of expression evaluation.

#### 2.3. Operator Associativity:

*   The rule that determines how operators of the same precedence are grouped.
*   **Left-to-Right Associativity:** Operations are performed from left to right.
    *   **Example:** `A - B + C` is evaluated as `(A - B) + C`.
*   **Right-to-Left Associativity:** Operations are performed from right to left.
    *   **Example:** `A ^ B ^ C` is typically evaluated as `A ^ (B ^ C)`.

#### 2.4. Stacks:

*   A fundamental Linear Data Structure that follows the **Last-In, First-Out (LIFO)** principle.
*   **Key Operations:**
    *   `Push()`: Adds an element to the top of the stack.
    *   `Pop()`: Removes and returns the element from the top of the stack.
    *   `Peek()` (or `Top()`): Returns the element at the top without removing it.
    *   `isEmpty()`: Checks if the stack is empty.
*   **Relevance to Expression Evaluation:** Stacks are ideal for managing operands and operators due to their LIFO nature, helping to keep track of pending operations and intermediate results.

---

### 3. Evaluation of Expressions:

#### 3.1. Evaluating Postfix Expressions:

*   **Algorithm:**
    1.  Initialize an empty stack.
    2.  Scan the postfix expression from left to right.
    3.  If the scanned character is an **operand**, push it onto the stack.
    4.  If the scanned character is an **operator**:
        *   Pop the top two operands from the stack (let them be `operand2` and `operand1`, where `operand2` was pushed last).
        *   Perform the operation: `result = operand1 operator operand2`.
        *   Push the `result` back onto the stack.
    5.  After scanning the entire expression, the final result will be the only element left on the stack. Pop and return it.

*   **Example:** Evaluate `5 2 + 3 *`
    | Character | Stack                     | Operation/Result |
    | :-------- | :------------------------ | :--------------- |
    | `5`       | `[5]`                     | Push 5           |
    | `2`       | `[5, 2]`                  | Push 2           |
    | `+`       | `[7]`                     | Pop 2, Pop 5, 5 + 2 = 7, Push 7 |
    | `3`       | `[7, 3]`                  | Push 3           |
    | `*`       | `[21]`                    | Pop 3, Pop 7, 7 * 3 = 21, Push 21 |
    *   **Final Result:** 21

*   **Textbook Reference:** Horowitz, Sahni, & Anderson-Freed (Chapter 3) provides detailed algorithms and examples for postfix expression evaluation.

#### 3.2. Evaluating Prefix Expressions:

*   **Algorithm:**
    1.  Initialize an empty stack.
    2.  Scan the prefix expression from **right to left**.
    3.  If the scanned character is an **operand**, push it onto the stack.
    4.  If the scanned character is an **operator**:
        *   Pop the top two operands from the stack (let them be `operand1` and `operand2`, where `operand1` was pushed last).
        *   Perform the operation: `result = operand1 operator operand2`.
        *   Push the `result` back onto the stack.
    5.  After scanning the entire expression, the final result will be the only element left on the stack. Pop and return it.

*   **Example:** Evaluate `* + 5 2 3`
    | Character | Stack                     | Operation/Result |
    | :-------- | :------------------------ | :--------------- |
    | `3`       | `[3]`                     | Push 3           |
    | `2`       | `[3, 2]`                  | Push 2           |
    | `5`       | `[3, 2, 5]`               | Push 5           |
    | `+`       | `[3, 7]`                  | Pop 5, Pop 2, 2 + 5 = 7, Push 7 |
    | `*`       | `[21]`                    | Pop 7, Pop 3, 3 * 7 = 21, Push 21 |
    *   **Final Result:** 21

*   **Textbook Reference:** Samanta D (Classic Data Structures) also covers prefix evaluation using stacks.

#### 3.3. Converting Infix to Postfix:

*   **Algorithm (using a stack):**
    1.  Initialize an empty stack and an empty output string (or list) for the postfix expression.
    2.  Scan the infix expression from left to right.
    3.  If the scanned character is an **operand**: Append it to the output string.
    4.  If the scanned character is an **opening parenthesis `(`**: Push it onto the stack.
    5.  If the scanned character is a **closing parenthesis `)`**:
        *   Pop elements from the stack and append them to the output string until an opening parenthesis `(` is encountered.
        *   Pop and discard the opening parenthesis `(`.
    6.  If the scanned character is an **operator**:
        *   While the stack is not empty, the top element is not an opening parenthesis, and the precedence of the current operator is less than or equal to the precedence of the operator at the top of the stack:
            *   Pop the operator from the stack and append it to the output string.
        *   Push the current operator onto the stack.
    7.  After scanning the entire infix expression, pop any remaining operators from the stack and append them to the output string.

*   **Precedence Function `prec(operator)`:**
    *   `prec('(') = 0` (or a very low value to ensure it stays on stack)
    *   `prec('+') = prec('-') = 1`
    *   `prec('*') = prec('/') = 2`
    *   `prec('^') = 3` (assuming right-to-left associativity)

*   **Associativity Rule in Step 6:**
    *   For left-to-right associative operators (like +, -, *, /), if `prec(current_op) <= prec(top_of_stack)`, pop.
    *   For right-to-left associative operators (like ^), if `prec(current_op) < prec(top_of_stack)`, pop.

*   **Example:** Convert `A + B * C` to postfix.
    | Character | Stack       | Output    | Action                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | :-------- | :---------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `A`       | `[]`        | `A`       | Operand, append to output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | `+`       | `[+]`       | `A`       | Operator. Stack is empty. Push `+`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | `B`       | `[+]`       | `A B`     | Operand, append to output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | `*`       | `[+, *]`    | `A B`     | Operator. `prec('*') (2) > prec('+') (1)`. Push `*`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | `C`       | `[+, *]`    | `A B C`   | Operand, append to output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | End       | `[]`        | `A B C * +` | End of expression. Pop remaining operators: pop `*`, append to output. pop `+`, append to output.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    *   **Postfix:** `A B C * +`

*   **Example with Parentheses:** Convert `(A + B) * C` to postfix.
    | Character | Stack       | Output    | Action                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | :-------- | :---------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `(`       | `[(`        | `[]`      | Opening parenthesis, push.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | `A`       | `[(`        | `A`       | Operand, append.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    | `+`       | `[(, +]`    | `A`       | Operator. Top is `(`. Push `+`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | `B`       | `[(, +]`    | `A B`     | Operand, append.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    | `)`       | `[]`        | `A B +`   | Closing parenthesis. Pop until `(`. Pop `+`, append. Discard `(`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    | `*`       | `[*]`       | `A B +`   | Operator. Stack is empty. Push `*`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | `C`       | `[*]`       | `A B + C` | Operand, append.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    | End       | `[]`        | `A B + C *` | End of expression. Pop remaining operators: pop `*`, append.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    *   **Postfix:** `A B + C *`

*   **Textbook Reference:** Horowitz, Sahni, & Anderson-Freed (Chapter 3) and Samanta D (Classic Data Structures) provide thorough treatments of infix to postfix conversion. Gilberg & Forouzan also offer a pseudocode approach.

#### 3.4. Converting Infix to Prefix:

*   **Algorithm:** Similar to infix to postfix, but with a few key differences:
    1.  Reverse the infix expression.
    2.  While reversing, replace every opening parenthesis `(` with a closing parenthesis `)` and vice-versa.
    3.  Apply the infix to postfix conversion algorithm to this modified reversed expression.
    4.  Reverse the resulting postfix expression to get the prefix expression.

*   **Example:** Convert `A + B * C` to prefix.
    1.  **Reverse:** `C * B + A`
    2.  **Replace Parentheses (not needed here):** `C * B + A`
    3.  **Convert to Postfix:**
        | Character | Stack       | Output    | Action                                                                                                                            |
        | :-------- | :---------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------- |
        | `C`       | `[]`        | `C`       | Operand, append.                                                                                                                  |
        | `*`       | `[*]`       | `C`       | Operator. Stack empty. Push `*`.                                                                                                  |
        | `B`       | `[*]`       | `C B`     | Operand, append.                                                                                                                  |
        | `+`       | `[*, +]`    | `C B`     | Operator. `prec('+') (1) <= prec('*') (2)`. Pop `*`, append. Push `+`.                                                            |
        | `A`       | `[+, A]`    | `C B *`   | Operand, append.                                                                                                                  |
        | End       | `[]`        | `C B * A +` | End of expression. Pop remaining operators: pop `+`, append.                                                                      |
        *   **Resulting Postfix:** `C B * A +`
    4.  **Reverse the Result:** `+ A * B C`
    *   **Prefix:** `+ A * B C`

*   **Textbook Reference:** While not as common as infix-to-postfix, the technique for infix-to-prefix is often explained in conjunction with postfix conversion.

---

### 4. Aligning with Course Outcomes:

*   **CO1 (Compare performance of algorithms using asymptotic notations):** While this topic focuses on expression *evaluation*, understanding the efficiency of different expression representations (infix vs. postfix/prefix) and the stack operations used lays the groundwork for appreciating algorithmic efficiency. The conversion algorithms themselves have performances that can be analyzed using Big O notation later. (Knowledge Level: K2)
*   **CO2 (Solve real world problems efficiently using appropriate data structures like arrays, linked list, stacks and queues):** Expression evaluation is a classic "real-world" problem (e.g., calculators, compilers). This topic directly demonstrates the efficient use of the **stack** data structure to solve this problem. (Knowledge Level: K3)
*   **CO3 (Make use of nonlinear data structures like trees and graphs...):** This topic primarily deals with linear structures and sequential processing. However, it's a prerequisite for understanding how expressions can be represented by **Abstract Syntax Trees (ASTs)**, which are non-linear data structures, and how traversing these trees can also lead to expression evaluation. (Indirectly supports K3)
*   **CO4 (Apply and compare various techniques for searching and sorting):** Not directly applicable to this topic.
*   **CO5 (Apply appropriate hash function...):** Not directly applicable to this topic.

---

### 5. Important Points to Remember:

*   **Stacks are crucial** for evaluating postfix and prefix expressions due to their LIFO nature.
*   **Postfix and Prefix expressions** eliminate the need for parentheses and complex precedence/associativity rules during evaluation.
*   **Evaluation Order:** Postfix scanned left-to-right; Prefix scanned right-to-left.
*   **Infix to Postfix Conversion:** Remember the rules for operators, operands, and parentheses, and the role of the stack in maintaining operator precedence.
*   **Infix to Prefix Conversion:** The reversal and parenthesis swapping trick is key.
*   **Operator Precedence & Associativity:** Always keep these rules in mind, especially when converting infix to other notations.

---

### 6. Practice Questions:

**Question 1:** Evaluate the following postfix expression using a stack: `10 2 8 * + 3 -`

**Question 2:** Convert the following infix expression to postfix: `A * (B + C) / D - E`

**Question 3:** Evaluate the following prefix expression using a stack: `- * + 5 2 3 10`

**Question 4:** Convert the following infix expression to prefix: `(A + B) * (C - D)`

---

### 7. Answers to Practice Questions:

**Answer 1:**
| Character | Stack                     | Operation/Result |
| :-------- | :------------------------ | :--------------- |
| `10`      | `[10]`                    | Push 10          |
| `2`       | `[10, 2]`                 | Push 2           |
| `8`       | `[10, 2, 8]`              | Push 8           |
| `*`       | `[10, 16]`                | Pop 8, Pop 2, 2 * 8 = 16, Push 16 |
| `+`       | `[26]`                    | Pop 16, Pop 10, 10 + 16 = 26, Push 26 |
| `3`       | `[26, 3]`                 | Push 3           |
| `-`       | `[23]`                    | Pop 3, Pop 26, 26 - 3 = 23, Push 23 |
**Result:** `23`

**Answer 2:**
Infix: `A * (B + C) / D - E`
1.  `A` -> `A`
2.  `*` -> `A *`
3.  `(` -> `A * (`
4.  `B` -> `A * ( B`
5.  `+` -> `A * ( B +`
6.  `C` -> `A * ( B + C`
7.  `)` -> `A * B C +` (Pop `+` after encountering `)`)
8.  `/` -> `A B C + * /` (Pop `*` as `/` has same or higher precedence if left-associative)
9.  `D` -> `A B C + * D /`
10. `-` -> `A B C + D / * -` (Pop `/` as `-` has lower precedence)
11. `E` -> `A B C + D / * E -`
End: Pop `-`
**Postfix:** `A B C + * D / E -`

**Answer 3:**
Prefix: `- * + 5 2 3 10`
Scan Right-to-Left:
1.  `10` -> `[10]`
2.  `3` -> `[10, 3]`
3.  `2` -> `[10, 3, 2]`
4.  `5` -> `[10, 3, 2, 5]`
5.  `+` -> Pop 5, Pop 2. `2 + 5 = 7`. Push 7. Stack: `[10, 3, 7]`
6.  `*` -> Pop 7, Pop 3. `3 * 7 = 21`. Push 21. Stack: `[10, 21]`
7.  `-` -> Pop 21, Pop 10. `10 - 21 = -11`. Push -11. Stack: `[-11]`
**Result:** `-11`

**Answer 4:**
Infix: `(A + B) * (C - D)`
1.  Reverse: `) D - C ( * ) B + A (`
2.  Replace `(` with `)` and `)` with `(`: `( D - C ) * ( B + A )`
3.  Convert to Postfix:
    *   `(` -> `(`
    *   `D` -> `D`
    *   `-` -> `( -`
    *   `C` -> `D C`
    *   `)` -> `D C -` (Pop `-`)
    *   `*` -> `D C - *`
    *   `(` -> `D C - * (`
    *   `B` -> `D C - * ( B`
    *   `+` -> `D C - * ( B +`
    *   `A` -> `D C - * ( B + A`
    *   `)` -> `D C - * B A +` (Pop `+`)
    End: Pop `*`
    Postfix result: `D C - B A + *`
4.  Reverse the result: `* + A B - C D`
**Prefix:** `* + A B - C D`
