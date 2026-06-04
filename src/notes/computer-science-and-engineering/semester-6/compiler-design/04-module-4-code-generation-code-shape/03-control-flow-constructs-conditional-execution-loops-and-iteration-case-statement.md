---
title: "Control-Flow Constructs (Conditional Execution, Loops and Iteration, Case Statements only)"
subject: "COMPILER DESIGN"
module: "Module 4: Code generation: Code Shape "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba65"
status: "completed"
scrapedAt: "2026-05-20T16:51:26.045Z"
---
# Compiler Design: Module 4 - Code Generation (Code Shape) - Control-Flow Constructs

These notes cover the implementation of control-flow constructs (Conditional Execution, Loops and Iteration, and Case Statements) during the code generation phase of a compiler.

**Module:** 4
**Topic:** Code Generation (Code Shape) - Control-Flow Constructs
**Learning Outcomes:** After studying this module, you should be able to:

*   Understand the different approaches to translating conditional statements (if-then-else) into machine code.
*   Understand the different approaches to translating loop constructs (while, for, repeat-until) into machine code.
*   Understand the different approaches to translating case/switch statements into machine code.
*   Optimize the generated code for control-flow constructs.

## 1. Conditional Execution (if-then-else)

### 1.1. Key Concepts and Definitions

*   **Conditional Execution:** Control structures that execute specific code blocks based on the truth value of a condition.
*   **Boolean Expression:** An expression that evaluates to either `true` or `false`.
*   **Control Flow Graph (CFG):** A directed graph representing the flow of control within a program. Nodes represent basic blocks of code, and edges represent possible transitions between them.
*   **Basic Block:** A sequence of consecutive statements in which control enters at the beginning and leaves at the end without halt or possibility of branching except at the end of the block.
*   **Label:** A symbolic name representing a specific memory location in the generated code.  Used for jump targets.

### 1.2. Translation Schemes

**a) Simple `if-then` Statement:**

*   **Syntax:** `if (condition) then { statement(s) }`

*   **Translation:** The compiler typically generates code that evaluates the condition and then jumps to a specific location if the condition is false, skipping the `then` block. If the condition is true, the `then` block is executed sequentially.

*   **Intermediate Code (Example - Three-Address Code):**

    ```
    evaluate condition
    ifFalse condition goto L1
    statement(s)  // then block
    L1:
    ```

*   **Assembly Code (Conceptual):**

    ```assembly
    ; Evaluate condition (result in a register, e.g., R1)
    CMP R1, 0    ; Compare R1 with 0 (false)
    JE  L1       ; Jump to L1 if equal (condition is false)

    ; Assembly code for statement(s) in the then block
    ...

    L1: ; Label L1
    ```

**b) `if-then-else` Statement:**

*   **Syntax:** `if (condition) then { statement(s) } else { statement(s) }`

*   **Translation:** The compiler generates code that evaluates the condition and jumps to the `else` block if the condition is false. After the `then` block is executed, a jump is inserted to skip the `else` block.

*   **Intermediate Code (Example - Three-Address Code):**

    ```
    evaluate condition
    ifFalse condition goto L2
    statement(s)  // then block
    goto L1
    L2:
    statement(s)  // else block
    L1:
    ```

*   **Assembly Code (Conceptual):**

    ```assembly
    ; Evaluate condition (result in a register, e.g., R1)
    CMP R1, 0    ; Compare R1 with 0 (false)
    JE  L2       ; Jump to L2 if equal (condition is false)

    ; Assembly code for statement(s) in the then block
    ...
    JMP L1      ; Jump to L1 to skip the else block

    L2: ; Label L2
    ; Assembly code for statement(s) in the else block
    ...

    L1: ; Label L1
    ```

**c) Nested `if-then-else` Statements:**

*   Complex structures where `if-then-else` statements are nested within each other.  Care must be taken to manage labels correctly to ensure proper branching.

*   Each `if` statement generates its own set of labels. Correct management of labels is crucial.

*   **Intermediate Code (Example - Three-Address Code):**

    ```
    evaluate condition1
    ifFalse condition1 goto L2
    statement(s)  // then block of condition1
    evaluate condition2
    ifFalse condition2 goto L4
    statement(s)  // then block of condition2
    goto L3
    L4:
    statement(s) // else block of condition2
    L3:
    goto L1
    L2:
    statement(s) // else block of condition1
    L1:
    ```

### 1.3. Optimizations

*   **Branch Prediction:**  Optimizing the order of blocks based on the likelihood of the branch being taken.  For example, placing the "then" block immediately after the `if` condition check if the "then" block is more likely to be executed.

*   **Jump Threading (Jump-to-Jump Optimization):**  If a jump target itself contains a jump, the first jump can be directly redirected to the final target.  Simplifies the control flow and improves performance.

*   **Common Subexpression Elimination:**  If the condition involves complex calculations, identifying and eliminating common subexpressions can reduce redundant computations.

### 1.4. Example

```c
if (x > 5) {
  y = x * 2;
} else {
  y = x + 1;
}
```

**Intermediate Code (Example):**

```
t1 = x > 5
ifFalse t1 goto L2
t2 = x * 2
y = t2
goto L1
L2:
t3 = x + 1
y = t3
L1:
```

**Assembly (Conceptual):**

```assembly
; Assume x is in register R1, y in R2
CMP R1, 5   ; Compare x with 5
JLE L2      ; Jump to L2 if x <= 5 (less than or equal to)

; then block: y = x * 2
MOV R3, R1  ; R3 = x
SHL R3, 1   ; R3 = R3 * 2 (shift left by 1)
MOV R2, R3  ; y = R3
JMP L1      ; Jump to L1

L2:
; else block: y = x + 1
MOV R3, R1  ; R3 = x
INC R3      ; R3 = R3 + 1
MOV R2, R3  ; y = R3

L1:
```

### 1.5. Practice Questions

1.  Write the intermediate code (three-address code) for the following C code:

    ```c
    if (a + b > c && d < e) {
        x = 10;
    } else {
        x = 20;
    }
    ```

    **Answer:**

    ```
    t1 = a + b
    t2 = t1 > c
    t3 = d < e
    t4 = t2 && t3
    ifFalse t4 goto L2
    x = 10
    goto L1
    L2:
    x = 20
    L1:
    ```

2.  Describe how branch prediction can be used to optimize the code generated for an `if-then-else` statement.

    **Answer:** Branch prediction involves analyzing the code and using heuristics (or profiling data) to determine which branch is more likely to be taken. If the `then` branch is predicted to be more likely, the code can be arranged so that the `then` block immediately follows the condition check, avoiding a jump in the common case.  This can improve performance, particularly on modern processors.

### 1.6 Important Points to Remember

*   The compiler must generate correct and efficient code for conditional statements.
*   The use of labels is essential for managing jumps.
*   Optimization techniques can improve the performance of the generated code.

## 2. Loops and Iteration (while, for, repeat-until)

### 2.1. Key Concepts and Definitions

*   **Loop:** A control structure that allows a block of code to be executed repeatedly until a certain condition is met.
*   **Iteration:** A single execution of the loop body.
*   **Loop Body:** The block of code that is executed repeatedly within the loop.
*   **Loop Condition:** A Boolean expression that determines whether the loop continues to execute.
*   **Initialization:** Statements that set up the initial state before the loop starts.
*   **Increment/Decrement:** Statements that modify the loop variables in each iteration.

### 2.2. Translation Schemes

**a) `while` Loop:**

*   **Syntax:** `while (condition) { statement(s) }`

*   **Translation:** The compiler generates code that first evaluates the condition. If the condition is true, the loop body is executed, and the condition is re-evaluated. The loop continues until the condition is false.

*   **Intermediate Code (Example - Three-Address Code):**

    ```
    L1:
    evaluate condition
    ifFalse condition goto L2
    statement(s)  // loop body
    goto L1
    L2:
    ```

*   **Assembly Code (Conceptual):**

    ```assembly
    L1: ; Label L1
    ; Evaluate condition (result in a register, e.g., R1)
    CMP R1, 0    ; Compare R1 with 0 (false)
    JE  L2       ; Jump to L2 if equal (condition is false)

    ; Assembly code for statement(s) in the loop body
    ...

    JMP L1      ; Jump back to L1 to re-evaluate the condition
    L2: ; Label L2
    ```

**b) `for` Loop:**

*   **Syntax:** `for (initialization; condition; increment/decrement) { statement(s) }`

*   **Translation:**  The compiler translates the `for` loop into a `while` loop equivalent.  The initialization code is placed before the loop, the condition is checked at the beginning of each iteration, and the increment/decrement is performed at the end of each iteration.

*   **Intermediate Code (Example - Three-Address Code):**

    ```
    initialization
    L1:
    evaluate condition
    ifFalse condition goto L2
    statement(s)  // loop body
    increment/decrement
    goto L1
    L2:
    ```

*   **Assembly Code (Conceptual):**

    ```assembly
    ; Assembly code for initialization
    ...
    L1: ; Label L1
    ; Evaluate condition (result in a register, e.g., R1)
    CMP R1, 0    ; Compare R1 with 0 (false)
    JE  L2       ; Jump to L2 if equal (condition is false)

    ; Assembly code for statement(s) in the loop body
    ...

    ; Assembly code for increment/decrement
    ...

    JMP L1      ; Jump back to L1 to re-evaluate the condition
    L2: ; Label L2
    ```

**c) `repeat-until` Loop:**

*   **Syntax:** `repeat { statement(s) } until (condition)`

*   **Translation:** The loop body is executed at least once before the condition is evaluated. The loop continues until the condition is true.

*   **Intermediate Code (Example - Three-Address Code):**

    ```
    L1:
    statement(s)  // loop body
    evaluate condition
    ifFalse condition goto L1
    ```

*   **Assembly Code (Conceptual):**

    ```assembly
    L1: ; Label L1
    ; Assembly code for statement(s) in the loop body
    ...

    ; Evaluate condition (result in a register, e.g., R1)
    CMP R1, 0    ; Compare R1 with 0 (false)
    JNE L1       ; Jump to L1 if not equal (condition is false)
    ```

### 2.3. Optimizations

*   **Loop Invariant Code Motion:** If an expression within a loop does not depend on any loop variables, it can be moved outside the loop, avoiding redundant calculations.

*   **Strength Reduction:** Replacing expensive operations (e.g., multiplication) with cheaper operations (e.g., addition) within the loop.

*   **Loop Unrolling:**  Replicating the loop body multiple times to reduce the overhead of loop control (condition checks and jumps). This increases code size but can improve performance.

*   **Induction Variable Optimization:**  Simplifying expressions involving induction variables (variables that are incremented/decremented by a constant value in each iteration).

### 2.4. Example

```c
int i = 0;
while (i < 10) {
  printf("%d\n", i);
  i++;
}
```

**Intermediate Code (Example):**

```
i = 0
L1:
t1 = i < 10
ifFalse t1 goto L2
// Code to print i (omitted for brevity)
i = i + 1
goto L1
L2:
```

**Assembly (Conceptual):**

```assembly
; Assume i is in register R1
MOV R1, 0    ; i = 0
L1:
CMP R1, 10   ; Compare i with 10
JGE L2       ; Jump to L2 if i >= 10

; Code to print i (omitted for brevity)
; ...

INC R1       ; i = i + 1
JMP L1       ; Jump to L1
L2:
```

### 2.5. Practice Questions

1.  Write the intermediate code (three-address code) for the following C code:

    ```c
    for (int i = 1; i <= 10; i++) {
        sum = sum + i;
    }
    ```

    **Answer:**

    ```
    i = 1
    L1:
    t1 = i <= 10
    ifFalse t1 goto L2
    sum = sum + i
    i = i + 1
    goto L1
    L2:
    ```

2.  Explain what loop invariant code motion is and provide an example.

    **Answer:** Loop invariant code motion is an optimization technique that moves expressions within a loop that do not depend on any loop variables outside the loop.  This avoids redundant computations in each iteration.

    Example:

    ```c
    for (int i = 0; i < 10; i++) {
        x = a * b;  // a and b do not change within the loop
        y = x + i;
    }
    ```

    Optimized Code:

    ```c
    x = a * b;
    for (int i = 0; i < 10; i++) {
        y = x + i;
    }
    ```
    The calculation of `x = a * b` is performed only once now instead of in every loop iteration.

### 2.6. Important Points to Remember

*   Loops are fundamental control structures and must be implemented correctly.
*   Loop optimizations can significantly improve performance.
*   Different loop constructs (while, for, repeat-until) have different semantics and require different translation schemes.

## 3. Case Statements (switch)

### 3.1. Key Concepts and Definitions

*   **Case Statement (switch):** A control structure that allows a program to select one of several code blocks to execute based on the value of an expression (the "selector").
*   **Selector:** The expression whose value determines which case is executed.
*   **Case Label:** A constant value associated with a specific code block within the case statement.
*   **Default Case:** An optional code block that is executed if none of the case labels match the selector value.
*   **Fall-through:**  When execution "falls through" from one case to the next if a `break` statement is not present.

### 3.2. Translation Schemes

**a) Simple Translation (using `if-then-else`):**

*   The case statement can be translated into a series of nested `if-then-else` statements. This is a straightforward but potentially inefficient approach.

*   **Intermediate Code (Conceptual):**

    ```
    t = selector
    if t == case1 goto L1
    else if t == case2 goto L2
    else if t == case3 goto L3
    else goto L_default // Optional default case

    L1:
    // Code for case1
    goto L_end

    L2:
    // Code for case2
    goto L_end

    L3:
    // Code for case3
    goto L_end

    L_default:
    // Code for default case (if present)
    L_end:
    ```

**b) Jump Table (Hash Table):**

*   When the number of cases is large and the case labels are relatively dense, a jump table can be more efficient.  A jump table is an array of pointers to the code blocks for each case. The selector value is used as an index into the table to jump directly to the corresponding code block.
*   If the selector's values are scattered, a hash table may be preferable. This calculates a hash of the selector and uses that hash to determine the code to jump to.

*   **Translation Steps:**
    1.  Create a jump table containing the addresses of the code blocks for each case label.
    2.  Evaluate the selector expression.
    3.  Check if the selector value is within the bounds of the jump table.
    4.  If it is within bounds, load the address from the jump table using the selector value as an index.
    5.  Jump to the loaded address.
    6. If it is out of bounds, execute the default statement (if present).

*   **Intermediate Code (Conceptual - Jump Table):**

    ```
    t = selector
    if t < min_case_value || t > max_case_value goto L_default
    index = t - min_case_value  // Normalize the index
    goto *jump_table[index]       // Indirect jump

    // Jump table data (in memory):
    jump_table:
        address_of_case1
        address_of_case2
        ...
        address_of_caseN

    // Code blocks for each case:
    case1:
    // Code for case1
    goto L_end

    case2:
    // Code for case2
    goto L_end

    ...

    caseN:
    // Code for caseN
    goto L_end

    L_default:
    // Code for default case (if present)

    L_end:
    ```

**c) Binary Search:**

*   If the case labels are not dense and the number of cases is relatively large, a binary search can be used to find the matching case label. This approach is more efficient than nested `if-then-else` statements but less efficient than a jump table for dense case labels.

### 3.3. Optimizations

*   **Reordering Cases:** Reordering the cases based on their probability of being executed can improve performance.  Frequently executed cases can be placed earlier in the sequence of checks (for `if-then-else` approach) or earlier in the jump table.

*   **Common Subexpression Elimination:** If the selector expression involves complex calculations, identifying and eliminating common subexpressions can reduce redundant computations.

### 3.4. Example

```c
switch (x) {
  case 1:
    y = x + 1;
    break;
  case 5:
    y = x * 2;
    break;
  case 10:
    y = x / 2;
    break;
  default:
    y = 0;
}
```

**Intermediate Code (Example - Using `if-then-else`):**

```
t1 = x
if t1 == 1 goto L1
else if t1 == 5 goto L2
else if t1 == 10 goto L3
else goto L4

L1:
y = x + 1
goto L5

L2:
y = x * 2
goto L5

L3:
y = x / 2
goto L5

L4:
y = 0

L5:
```

### 3.5. Practice Questions

1.  Describe the advantages and disadvantages of using a jump table to implement a case statement.

    **Answer:**
    *   **Advantages:** Fast execution time (O(1) on average if implemented correctly), especially for dense case labels.
    *   **Disadvantages:** Requires contiguous storage for the jump table, which can be inefficient if the case labels are sparse.  Can also lead to significant memory usage if the range of case values is large.

2.  Explain how the compiler can determine the best approach (nested `if-then-else`, jump table, binary search) to use for implementing a case statement.

    **Answer:**  The compiler considers several factors, including:
    *   **Number of Cases:**  Jump tables are typically preferred for a large number of cases.
    *   **Density of Case Labels:** Jump tables are most efficient when case labels are dense (i.e., the difference between the minimum and maximum case label is small). Binary search may be more efficient for sparse labels.
    *   **Code Size:** Jump tables can increase code size significantly if the range of case values is large.
    *   **Execution Time:** The compiler aims to choose the approach that minimizes execution time, considering the trade-offs between jump table lookup, binary search, and nested `if-then-else` comparisons.  Profiling data can also be used to make informed decisions.

### 3.6. Important Points to Remember

*   Case statements provide a structured way to handle multiple execution paths.
*   The choice of translation scheme depends on the characteristics of the case statement.
*   Jump tables are often the most efficient approach for dense case labels.

## 4. Summary

This module covered the code generation strategies for conditional execution (if-then-else), loops (while, for, repeat-until), and case statements (switch). Understanding these translation techniques and the corresponding optimization strategies is crucial for generating efficient and effective code. Remember to consider the trade-offs between different approaches and choose the best strategy based on the specific characteristics of the control-flow construct.  The use of labels, intermediate code representations (e.g., three-address code), and assembly code examples were demonstrated to illustrate the underlying principles. Remember also the importance of loop optimizations, and the impact of case statements implementation on code performance.
