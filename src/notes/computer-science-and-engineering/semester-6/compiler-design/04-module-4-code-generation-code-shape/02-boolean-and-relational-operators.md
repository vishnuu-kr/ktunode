---
title: "Boolean and Relational Operators"
subject: "COMPILER DESIGN"
module: "Module 4: Code generation: Code Shape "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba64"
status: "completed"
scrapedAt: "2026-05-20T16:51:25.335Z"
---
# Compiler Design: Module 4 - Code Generation: Code Shape - Boolean and Relational Operators

## Introduction

This module focuses on code generation for Boolean and Relational Operators.  Understanding how these operators are translated into machine code or intermediate code is crucial for efficient and correct program execution. We'll explore different code generation strategies and their implications.

## Learning Outcomes

By the end of this module, you will be able to:

*   Describe different approaches for generating code for boolean expressions.
*   Explain short-circuit evaluation and its implementation.
*   Translate relational operators into corresponding machine code sequences.
*   Optimize code generation for boolean and relational operators for improved performance.
*   Understand the impact of different code generation techniques on program execution speed and code size.

## 1. Approaches for Generating Code for Boolean Expressions

Boolean expressions appear frequently in programming languages within conditional statements (`if`, `while`, `for`) and logical operations. There are primarily two approaches to generating code for them:

*   **Numerical Representation:** Represent boolean values as numerical values (e.g., 0 for false, 1 for true). The boolean expression is evaluated, and the result is stored as a numerical value.
*   **Control Flow Representation (Jumping Code):** Represent boolean values by the position reached in the program.  Instead of computing a boolean value, the generated code jumps to a specific location based on the truth value of the expression.

### 1.1. Numerical Representation

*   **Concept:** Treat boolean values as numerical equivalents. Generally, 0 represents `false` and 1 (or any non-zero value) represents `true`.
*   **Advantages:** Simple to implement, especially if the target machine directly supports boolean data types.
*   **Disadvantages:**  Can be less efficient than control flow representation, especially when short-circuit evaluation is desired.
*   **Example:**

    ```c
    int x = 5;
    int y = 10;
    int result = (x > y) && (x < 15); //C code
    ```

    Intermediate code (assuming 1 for true, 0 for false):

    ```
    t1 = x > y;    // t1 will be 0 (false) or 1 (true) based on x and y values
    t2 = x < 15;   // t2 will be 0 (false) or 1 (true) based on x and 15 values
    result = t1 && t2; //The boolean AND operation, resulting in 0 or 1
    ```

    Code generation (assuming a generic machine language):

    ```assembly
    LOAD x, R1    ; Load the value of x into register R1
    LOAD y, R2    ; Load the value of y into register R2
    GT R1, R2, R3 ; Set R3 to 1 if R1 > R2, 0 otherwise
    STORE R3, t1  ; Store the result in memory location t1

    LOAD x, R1    ; Load the value of x into register R1
    LOAD 15, R2   ; Load the value 15 into register R2
    LT R1, R2, R4 ; Set R4 to 1 if R1 < R2, 0 otherwise
    STORE R4, t2  ; Store the result in memory location t2

    LOAD t1, R5   ; Load the value of t1 into register R5
    LOAD t2, R6   ; Load the value of t2 into register R6
    AND R5, R6, R7  ; Perform a bitwise AND operation and store the result in R7
    STORE R7, result  ; Store the result in memory location result
    ```

### 1.2. Control Flow Representation (Jumping Code)

*   **Concept:**  Represent the boolean expression's value implicitly through the control flow of the program. This means the expression doesn't directly evaluate to a 0 or 1, but rather causes a jump to a different part of the code based on its truthiness.  Labels are used to mark these jump destinations.
*   **Advantages:** Enables efficient implementation of short-circuit evaluation. Can be faster than numerical representation in many cases.
*   **Disadvantages:**  More complex to implement initially. The generated code can be more difficult to read if not carefully structured.
*   **Example:**

    ```c
    if (x > y && x < 15) {
        // then part
        z = x + y;
    } else {
        // else part
        z = x - y;
    }
    ```

    Intermediate code (Jumping code with labels):

    ```
    if_false(x > y) goto L1  //If x > y is FALSE, jump to L1 (else part)
    if_false(x < 15) goto L1 //If x < 15 is FALSE, jump to L1 (else part)
    z = x + y               //then part
    goto L2                   //Jump to L2 to skip the else part
    L1: z = x - y           //else part
    L2: ...                    //Continue with the rest of the program
    ```

    Code generation (assuming a generic machine language):

    ```assembly
    LOAD x, R1      ; Load the value of x into register R1
    LOAD y, R2      ; Load the value of y into register R2
    LE R1, R2, L1   ; Jump to label L1 if R1 <= R2 (x <= y)

    LOAD x, R1      ; Load the value of x into register R1
    LOAD 15, R2     ; Load the value 15 into register R2
    GE R1, R2, L1   ; Jump to label L1 if R1 >= R2 (x >= 15)

    ; then part
    LOAD x, R1
    LOAD y, R2
    ADD R1, R2, R3
    STORE R3, z
    JMP L2          ; Jump to L2 (end of if statement)

    L1:             ; else part
    LOAD x, R1
    LOAD y, R2
    SUB R1, R2, R3
    STORE R3, z

    L2:             ; Rest of the program
    ...
    ```

## 2. Short-Circuit Evaluation

*   **Concept:** Short-circuit evaluation is a feature where the evaluation of a boolean expression stops as soon as the value of the entire expression is known.
*   **Example:**  In the expression `(a && b)`, if `a` is false, there is no need to evaluate `b` because the whole expression will be false regardless. Similarly, in `(a || b)`, if `a` is true, there's no need to evaluate `b` because the whole expression will be true regardless.
*   **Importance:**
    *   **Efficiency:** Avoids unnecessary computations.
    *   **Correctness:** Allows expressions like `(ptr != NULL && ptr->value > 10)` to be evaluated safely, preventing null pointer dereferences.
*   **Implementation (using Jumping Code):** Jumping code naturally supports short-circuit evaluation.

    ```c
    if (ptr != NULL && ptr->value > 10) {
        // ...
    }
    ```

    Intermediate code with short-circuit evaluation:

    ```
    if_false(ptr != NULL) goto L1 // If ptr is NULL, skip the second part of the condition
    if_false(ptr->value > 10) goto L1 // If ptr->value is not greater than 10, go to L1
    // ... then part ...
    L1: ... // else part ...
    ```

## 3. Translation of Relational Operators

Relational operators (>, <, >=, <=, ==, !=) compare two values and produce a boolean result.  The translation process depends on whether you are using numerical representation or control flow representation.

### 3.1. Numerical Representation

*   The relational operator is translated into a comparison instruction that sets a register or memory location to 1 if the relation is true and 0 if the relation is false.
*   Most architectures provide dedicated instructions for this (e.g., `SLT` (Set Less Than), `SGT` (Set Greater Than), etc.).

    ```c
    int a = 10;
    int b = 5;
    int result = (a > b);
    ```

    Intermediate code:

    ```
    t1 = a > b;
    result = t1;
    ```

    Code generation (assuming MIPS assembly):

    ```assembly
    lw $t0, a       ; Load a into register $t0
    lw $t1, b       ; Load b into register $t1
    sgt $t2, $t0, $t1 ; Set $t2 to 1 if $t0 > $t1, 0 otherwise
    sw $t2, result  ; Store the result into memory location result
    ```

### 3.2. Control Flow Representation

*   The relational operator is translated into a conditional jump instruction that transfers control to a specific label depending on the result of the comparison.
*   This is the preferred method when short-circuit evaluation is required or when boolean results are used directly in conditional statements.

    ```c
    if (x > y) {
        // then part
        ...
    } else {
        // else part
        ...
    }
    ```

    Intermediate code:

    ```
    if_false(x > y) goto L1
    // then part
    goto L2
    L1:
    // else part
    L2:
    ```

    Code generation (assuming a generic machine language):

    ```assembly
    LOAD x, R1
    LOAD y, R2
    LE R1, R2, L1  ; Jump to L1 if R1 <= R2 (x <= y)
    ; then part
    JMP L2
    L1:
    ; else part
    L2:
    ```

## 4. Optimization of Boolean and Relational Operators

Several optimizations can be applied to improve the efficiency of the generated code:

*   **Constant Folding:** Evaluate constant boolean expressions at compile time.  For example, `if (true && false)` can be simplified to `if (false)`.
*   **Strength Reduction:** Replace complex boolean operations with simpler ones.  For example, `!(a > b)` can be replaced with `a <= b`.
*   **Dead Code Elimination:**  Remove code that will never be executed because of constant boolean conditions.
*   **Short-Circuit Optimization:**  Rearrange boolean expressions to maximize the benefits of short-circuit evaluation. Place the most likely to be false (for `&&`) or true (for `||`) conditions first.
*   **Jump Optimization:** Eliminating redundant jumps or merging adjacent jumps. For example, `goto L1; L1: goto L2` can be replaced with `goto L2`.
*   **Common Subexpression Elimination:**  If a boolean expression is computed multiple times with the same operands, compute it once and store the result for reuse.

## 5. Impact on Program Execution and Code Size

The choice of code generation technique significantly impacts program execution speed and code size.

*   **Execution Speed:** Control flow representation with short-circuit evaluation generally leads to faster execution times, especially when complex boolean expressions are involved. Numerical representation might be faster for simple boolean expressions if the target machine has efficient boolean arithmetic instructions.
*   **Code Size:** Numerical representation might generate slightly more compact code in some cases, as it avoids generating labels and jump instructions. However, the difference in code size is often negligible compared to the performance gains offered by control flow representation.

## Important Points to Remember

*   Understand the trade-offs between numerical representation and control flow representation for boolean expressions.
*   Short-circuit evaluation is a crucial optimization technique for boolean expressions that can improve both efficiency and correctness.
*   Optimization techniques can further improve the performance of generated code for boolean and relational operators.
*   The choice of code generation technique can significantly impact program execution speed and code size.

## Practice Questions/Exercises

1.  **Question:** Explain the concept of short-circuit evaluation and its importance in programming. Provide an example in C/C++.

    **Answer:** Short-circuit evaluation is the principle that when evaluating boolean expressions combined with `&&` or `||`, the evaluation stops as soon as the result is known. For `&&`, if the left operand is `false`, the right operand is not evaluated. For `||`, if the left operand is `true`, the right operand is not evaluated.

    Importance:
    *   Prevents unnecessary computation.
    *   Allows for safe code like `if (ptr != NULL && ptr->value > 10)` preventing dereferencing a null pointer.

    Example (C++):

    ```c++
    #include <iostream>

    int main() {
        int* ptr = nullptr;
        bool result = (ptr != nullptr) && (ptr->value > 5);  //ptr->value will NOT be evaluated

        std::cout << "Result: " << result << std::endl; // Prints "Result: 0" without causing a crash

        int x = 0;
        if (x != 0 && 10 / x > 1) {  // 10 / x won't be evaluated if x is 0, avoiding division by zero
            std::cout << "Division is safe" << std::endl;
        } else {
            std::cout << "Division is NOT safe or the condition is false" << std::endl;
        }
        return 0;
    }
    ```

2.  **Question:** Convert the following C code snippet into intermediate code using both numerical representation and control flow representation:

    ```c
    int x = 5;
    int y = 10;
    int z;

    if (x > y || x == 5) {
        z = 1;
    } else {
        z = 0;
    }
    ```

    **Answer:**

    **Numerical Representation:**

    ```
    t1 = x > y
    t2 = x == 5
    t3 = t1 || t2
    if (t3) goto L1
    z = 0
    goto L2
    L1: z = 1
    L2:
    ```

    **Control Flow Representation (Jumping Code):**

    ```
    if_true(x > y) goto L1
    if_true(x == 5) goto L1
    z = 0
    goto L2
    L1: z = 1
    L2:
    ```

3.  **Question:** Describe three optimization techniques that can be applied during code generation for boolean expressions and explain how they improve performance.

    **Answer:**

    *   **Constant Folding:** Evaluating constant boolean expressions at compile time. This avoids executing these expressions at runtime, saving CPU cycles.

        *   Example: `if (true || false)` is replaced with `if (true)`.

    *   **Strength Reduction:** Replacing complex boolean operations with simpler ones. This can reduce the number of instructions required to evaluate the expression.

        *   Example: `!(a > b)` can be replaced with `a <= b`.  This may be faster depending on the instruction set.

    *   **Short-Circuit Optimization:** Rearranging boolean expressions to maximize the benefits of short-circuit evaluation.

        *   Example: In `a && b`, if `a` is more likely to be false, place `a` first so that `b` is less often evaluated unnecessarily.  This assumes that the evaluation of  `b` is more expensive.

4. **Question:** Given the following code, generate intermediate code that implements short-circuit evaluation using jumping code:

    ```c
    int a, b, c;
    if (a > 0 && b < 10 && c == 5) {
       //Then part
    } else {
       //Else part
    }
    ```

    **Answer:**

    ```
    if_false(a > 0) goto ElsePart
    if_false(b < 10) goto ElsePart
    if_false(c == 5) goto ElsePart
    // Then part code
    goto EndIf
    ElsePart:
    // Else part code
    EndIf:
