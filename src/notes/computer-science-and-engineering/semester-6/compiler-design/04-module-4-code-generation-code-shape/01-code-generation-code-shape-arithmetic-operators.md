---
title: "Code generation: Code Shape - Arithmetic Operators"
subject: "COMPILER DESIGN"
module: "Module 4: Code generation: Code Shape "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba63"
status: "completed"
scrapedAt: "2026-05-20T16:51:24.628Z"
---
# COMPILER DESIGN - Module 4: Code Generation - Code Shape: Arithmetic Operators

These notes cover code generation for arithmetic operators, focusing on the "Code Shape" aspect.

**Learning Outcomes:**

*   Understand the challenges in generating efficient code for arithmetic operations.
*   Describe different code shapes for arithmetic expressions.
*   Explain the role of register allocation in code generation for arithmetic operators.
*   Implement basic code generation strategies for arithmetic expressions.
*   Evaluate the performance of different code shapes.

## 1. Introduction to Code Generation and Code Shape

*   **Code Generation:** The final phase of a compiler, responsible for translating intermediate representation (IR) into target machine code (assembly language).
*   **Code Shape:** Refers to the general structure and organization of the generated code, particularly concerning how computations are performed and how intermediate results are stored. It involves decisions about:
    *   Register usage.
    *   Memory access.
    *   Instruction sequences.
*   **Importance of Code Shape:**  Efficient code shape is crucial for optimizing performance.  Different shapes can have significant impact on execution speed, memory usage, and power consumption.

## 2. Challenges in Generating Code for Arithmetic Operations

*   **Register Allocation:**  Limited number of registers.  Efficiently assigning registers to variables and intermediate results is vital. Spilling to memory occurs when registers are insufficient, significantly slowing down execution.
*   **Instruction Set Architecture (ISA):** Different ISAs have different instruction sets, addressing modes, and register architectures.  Code generation must be tailored to the specific ISA.
*   **Operator Precedence and Associativity:** Correctly handling the order of operations specified by the source code.
*   **Type Conversion:** Dealing with different data types (integer, floating-point) and implicit/explicit type conversions. Requires appropriate conversion instructions.
*   **Optimization:** Generating code that minimizes redundant calculations, reduces memory access, and utilizes available instructions effectively.
*   **Handling Overflow/Underflow:**  Depending on the target architecture, these can be significant concerns.  The code generated must either handle them, ignore them, or pass the responsibilty of handling the exception back to the operating system.

## 3. Code Shapes for Arithmetic Expressions

Different code shapes can be used to evaluate arithmetic expressions.  The choice depends on factors like the target architecture and the available optimization techniques.

*   **Register-Based Code Shape:**
    *   Intermediate results are primarily stored in registers.
    *   Minimizes memory access, generally leading to faster execution.
    *   Requires careful register allocation.
    *   Example (for `a = b + c`):
        ```assembly
        LOAD R1, b   ; Load value of b into register R1
        LOAD R2, c   ; Load value of c into register R2
        ADD  R1, R1, R2  ; Add R2 to R1, result in R1
        STORE a, R1   ; Store the result (R1) into a
        ```

*   **Stack-Based Code Shape:**
    *   Uses a stack (explicitly or implicitly) to store intermediate results.
    *   Simpler code generation compared to register-based.
    *   Often used in virtual machines (e.g., JVM, .NET CLR).
    *   Can be less efficient due to stack access.
    *   Example (for `a = b + c`):
        ```assembly
        PUSH b   ; Push value of b onto the stack
        PUSH c   ; Push value of c onto the stack
        ADD  ; Pop top two elements, add them, and push result
        POP  a   ; Pop the result from the stack into a
        ```

*   **Memory-to-Memory Code Shape:**
    *   Operands are directly accessed from memory locations.
    *   Requires minimal register usage.
    *   Generally the least efficient due to frequent memory accesses.
    *   Example (highly simplified - many ISAs do not support this directly):
        ```assembly
        ADD a, b, c   ; Directly add b and c and store the result in a
        ```

*   **Hybrid Approaches:**  Combine aspects of register-based and stack-based approaches for better performance or specific architectural constraints.

## 4. Register Allocation

*   **Definition:** The process of assigning registers to variables and intermediate results during code generation.
*   **Importance:**  Critical for performance because register access is much faster than memory access.
*   **Challenges:**  Limited number of registers.  Need to avoid conflicts where multiple variables need the same register at the same time.
*   **Strategies:**
    *   **Simple Allocation:**  Assign registers on a first-come, first-served basis.  This is rarely optimal.
    *   **Graph Coloring:**  A popular and effective technique.
        *   Construct an *interference graph* where nodes represent variables and edges indicate that two variables cannot be in the same register simultaneously.
        *   Try to color the graph using a number of colors equal to the number of available registers.
        *   If coloring fails (spilling is needed), some variables are "spilled" to memory.
    *   **Linear Scan Register Allocation:**  A simpler alternative to graph coloring, offering good performance with lower compilation time.
*   **Spilling:**  When a register needs to be used for a new value, but the current value in that register is still needed, the current value is "spilled" to memory.  This is costly.

## 5. Code Generation Strategies for Arithmetic Expressions

*   **Tree Traversal:** Represent the arithmetic expression as an abstract syntax tree (AST) or expression tree.  Traverse the tree (e.g., post-order) to generate code.
*   **Operator Precedence Parsing:** Use operator precedence parsing to determine the order of operations and generate code accordingly.
*   **Three-Address Code (TAC):** Translate the expression into a sequence of three-address code instructions, then generate assembly code from the TAC. This is a common intermediate representation used in compilers.

**Example: Code Generation for `a = b * c + d / e` (Register-Based)**

1.  **Three-Address Code (TAC) (Example):**
    ```
    t1 = b * c
    t2 = d / e
    a = t1 + t2
    ```

2.  **Assembly Code (Example):**
    ```assembly
    LOAD R1, b      ; Load b into R1
    LOAD R2, c      ; Load c into R2
    MUL  R1, R1, R2  ; R1 = R1 * R2 (b * c)
    LOAD R3, d      ; Load d into R3
    LOAD R4, e      ; Load e into R4
    DIV  R3, R3, R4  ; R3 = R3 / R4 (d / e)
    ADD  R1, R1, R3  ; R1 = R1 + R3 (b*c + d/e)
    STORE a, R1      ; Store R1 into a
    ```

**Optimizations:**

*   **Common Subexpression Elimination:**  Identify and reuse the results of identical subexpressions. For example, in `a = b * c + d` and `e = b * c + f`, `b * c` is a common subexpression.
*   **Constant Folding:**  Evaluate constant expressions at compile time. For example, `a = 2 + 3` becomes `a = 5`.
*   **Strength Reduction:** Replace expensive operations with cheaper ones. For example, `x * 2` can be replaced with `x + x` or `x << 1`.
*   **Instruction Selection:** Choose the most efficient instruction sequence for a given operation (e.g., using shift instructions instead of multiplication by powers of 2).

## 6. Evaluating Code Shape Performance

*   **Metrics:**
    *   **Execution Time:** The most important metric.  Measured by running the generated code.
    *   **Code Size:**  The size of the generated assembly code. Smaller code size reduces memory footprint and can improve cache performance.
    *   **Register Usage:**  The number of registers used. Lower register usage can reduce register pressure and spilling.
    *   **Memory Accesses:** The number of memory reads and writes. Minimizing memory accesses improves performance.
*   **Benchmarking:** Run the generated code on a set of representative inputs (benchmarks) to measure performance.
*   **Profiling:**  Use profiling tools to identify performance bottlenecks in the generated code.

## 7. Important Points to Remember

*   **Code generation is highly architecture-dependent.**
*   **Register allocation is crucial for performance.**  Effective strategies like graph coloring are commonly used.
*   **Code shape influences register usage, memory access, and instruction selection.**
*   **Optimization techniques are essential to generate efficient code.**
*   **Benchmarking and profiling are necessary to evaluate code generation performance.**
*   **The choice of code shape often involves trade-offs between code complexity, execution speed, and memory usage.**

## 8. Practice Questions/Exercises

**Question 1:**

Consider the expression `x = (a + b) * (c - d)`.  Write the assembly code (using a register-based code shape) for this expression, assuming you have registers R1, R2, R3, R4, and R5 available.

**Answer:**

```assembly
LOAD R1, a    ; Load a into R1
LOAD R2, b    ; Load b into R2
ADD  R1, R1, R2 ; R1 = R1 + R2 (a + b)

LOAD R3, c    ; Load c into R3
LOAD R4, d    ; Load d into R4
SUB  R3, R3, R4 ; R3 = R3 - R4 (c - d)

MUL  R1, R1, R3 ; R1 = R1 * R3 ((a + b) * (c - d))
STORE x, R1   ; Store R1 into x
```

**Question 2:**

Explain the concept of register spilling and why it is detrimental to performance.

**Answer:**

Register spilling occurs when all available registers are in use, but a new value needs to be computed and stored.  Instead of directly placing the new value into a register, an existing register's contents are temporarily stored (spilled) into main memory to free up the register. Later, when the original value is needed again, it is loaded back from memory into a register. This process is performance-detrimental because memory access is significantly slower than register access, introducing overhead into the execution.

**Question 3:**

What is the main advantage and disadvantage of using a stack-based code shape compared to a register-based code shape?

**Answer:**

*   **Advantage:** Simpler code generation. Stack-based code generation typically requires fewer decisions about register allocation, making the compiler simpler to implement.

*   **Disadvantage:** Lower performance. Stack-based architectures require frequent memory access to push and pop values from the stack, resulting in slower execution compared to register-based code shapes that can keep intermediate values in registers.

**Question 4:**

Explain how common subexpression elimination can improve the efficiency of generated code. Give an example.

**Answer:**

Common subexpression elimination is an optimization technique that identifies and reuses the results of identical subexpressions within a program.  By calculating a subexpression only once and storing its result, redundant calculations are avoided, leading to improved performance.

Example:

```
a = b * c + d
e = b * c + f
```

Without common subexpression elimination, `b * c` would be computed twice.  With the optimization, `b * c` is computed once and its result is used in both calculations:

```
temp = b * c
a = temp + d
e = temp + f
```

This reduces the number of multiplication operations, saving execution time.
