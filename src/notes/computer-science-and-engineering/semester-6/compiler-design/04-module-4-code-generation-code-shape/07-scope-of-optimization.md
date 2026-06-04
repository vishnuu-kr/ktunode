---
title: "Scope Of Optimization"
subject: "COMPILER DESIGN"
module: "Module 4: Code generation: Code Shape "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba69"
status: "completed"
scrapedAt: "2026-05-20T16:51:28.922Z"
---
# Compiler Design: Module 4 - Code Generation: Code Shape - Scope of Optimization

These study notes cover the topic of "Scope of Optimization" within the "Code Generation: Code Shape" module of a Compiler Design course.

**Learning Outcomes:**

*   Understand the different scopes at which compiler optimizations can be applied.
*   Identify the trade-offs between different optimization scopes (e.g., local vs. global).
*   Explain the advantages and disadvantages of each scope.
*   Recognize optimizations that are typically performed at each scope.
*   Apply basic optimization techniques within different scopes.

## 1. Introduction to Scope of Optimization

Code optimization is a crucial phase in compiler design, aiming to improve the performance of the generated code in terms of execution time, memory usage, or code size. The *scope* of optimization refers to the region of the program code over which the optimization techniques are applied. Different scopes offer varying levels of potential for improvement, but also involve different levels of complexity and analysis.

## 2. Different Scopes of Optimization

Compiler optimizations can be applied at various scopes.  Here's a breakdown:

*   **2.1. Local Optimization (Basic Block Optimization)**
    *   **Definition:** Local optimization is performed within a single *basic block*. A basic block is a straight-line sequence of code with one entry point (the first instruction) and one exit point (the last instruction). No jumps into or out of the middle of the block are permitted.
    *   **Key Concepts:**
        *   **Basic Block Formation:**  The first step in local optimization involves identifying basic blocks. Basic blocks start with a label (e.g., jump target) or the beginning of the program, and end with a jump, conditional jump, or function return.
        *   **Dataflow Analysis (Limited):** The flow of data within a basic block is relatively simple to analyze.
    *   **Optimizations Commonly Performed:**
        *   **Constant Folding:**  Evaluating constant expressions at compile time (e.g., `x = 2 + 3;` becomes `x = 5;`).
        *   **Constant Propagation:**  Replacing variables with their constant values (e.g., `x = 5; y = x + 2;` becomes `x = 5; y = 5 + 2;` which then can be constant folded to `y = 7;`).
        *   **Algebraic Simplification:**  Applying algebraic identities to simplify expressions (e.g., `x = y * 1;` becomes `x = y;` or `x = y + 0;` becomes `x = y;`).
        *   **Common Subexpression Elimination (within the block):**  Identifying and eliminating redundant computations of the same expression (e.g., `x = a + b; y = a + b;` becomes `temp = a + b; x = temp; y = temp;`).
        *   **Dead Code Elimination:** Removing code that computes a value that is never used (e.g., `x = a + b;` if `x` is not used later in the block).
    *   **Advantages:**
        *   Simple and fast to implement.
        *   Low analysis overhead.
    *   **Disadvantages:**
        *   Limited scope for optimization.  Cannot exploit optimizations that span multiple basic blocks.
    *   **Example:**

        ```
        // Original Code:
        L1:
          x = 2 * 3;
          y = x + 1;
          z = 2 * 3;
          return y;

        // Optimized Code:
        L1:
          x = 6;       // Constant Folding
          y = x + 1;
          z = x;      // Common Subexpression Elimination (2*3 is same as x)
          return y;
        ```

*   **2.2. Global Optimization (Intraprocedural Optimization)**
    *   **Definition:** Global optimization is performed within a single function (procedure). It analyzes the entire function to identify optimization opportunities.
    *   **Key Concepts:**
        *   **Control Flow Graph (CFG):**  A representation of the function's control flow, consisting of basic blocks as nodes and edges representing possible execution paths.
        *   **Dataflow Analysis (Advanced):**  More sophisticated analysis is needed to track data flow across basic blocks. This includes techniques like reaching definitions, live variable analysis, and available expressions.
    *   **Optimizations Commonly Performed:**
        *   All local optimizations.
        *   **Loop Optimization:**
            *   **Loop Invariant Code Motion:**  Moving code that computes the same value in every iteration of a loop outside the loop.  (e.g.,  `for (i = 0; i < 10; i++) { x = a + b; y = x * i; }`  `a + b` can be moved out of the loop.)
            *   **Induction Variable Elimination:**  Simplifying or eliminating induction variables (variables whose values change predictably within a loop).  (e.g., replacing `i = i + 1` inside the loop with `i++`)
            *   **Loop Unrolling:**  Duplicating the loop body multiple times to reduce loop overhead and potentially improve instruction-level parallelism.
        *   **Global Common Subexpression Elimination:** Eliminating redundant computations that occur in different basic blocks within the function.
        *   **Global Constant Propagation:** Propagating constant values across basic blocks.
        *   **Dead Code Elimination (across basic blocks):** Removing code that is unreachable or computes a value that is never used anywhere in the function.
    *   **Advantages:**
        *   Greater potential for optimization compared to local optimization.
        *   Can improve performance significantly.
    *   **Disadvantages:**
        *   More complex and time-consuming analysis.
        *   Higher compile-time overhead.
    *   **Example:**

        ```
        // Original Code:
        function calculate(a, b, n) {
          x = a + b;
          for (i = 0; i < n; i++) {
            y = a + b;
            z = y * i;
            result = result + z;
          }
          return result;
        }

        // Optimized Code:
        function calculate(a, b, n) {
          x = a + b;  //moved out
          y = x; //global common subexpression elimination
          for (i = 0; i < n; i++) {
           //y = a + b; remove the redundant line.
            z = y * i;
            result = result + z;
          }
          return result;
        }
        ```

*   **2.3. Interprocedural Optimization (Whole-Program Optimization)**
    *   **Definition:** Interprocedural optimization is performed across multiple functions or the entire program.
    *   **Key Concepts:**
        *   **Call Graph:** A representation of the function call relationships in the program.
        *   **Interprocedural Dataflow Analysis:**  The most complex form of dataflow analysis, tracking data flow across function boundaries.
    *   **Optimizations Commonly Performed:**
        *   All local and global optimizations.
        *   **Inlining:** Replacing a function call with the body of the called function to eliminate call overhead and expose more optimization opportunities.
        *   **Interprocedural Constant Propagation:**  Propagating constant values across function boundaries.
        *   **Procedure Cloning (Function Specialization):** Creating specialized versions of a function for different call sites, allowing for further optimization based on the specific arguments passed.
        *   **Alias Analysis:** Determining whether different variables can refer to the same memory location, which is crucial for pointer-intensive programs.
    *   **Advantages:**
        *   Offers the greatest potential for optimization.
        *   Can significantly improve performance, especially for large and complex programs.
    *   **Disadvantages:**
        *   The most complex and time-consuming analysis.
        *   Requires analyzing the entire program, which can be infeasible for very large projects.
        *   Can increase code size significantly (especially with inlining).
    *   **Example:**

        ```
        // Original Code:
        function square(x) {
          return x * x;
        }

        function calculateArea(side) {
          return square(side);
        }

        // Optimized Code (after inlining):
        function calculateArea(side) {
          return side * side; // square(side) inlined
        }
        ```

## 3. Trade-offs between Optimization Scopes

The choice of optimization scope involves trade-offs between optimization potential, analysis complexity, and compile-time overhead:

| Scope            | Optimization Potential | Analysis Complexity | Compile-Time Overhead |
| ---------------- | --------------------- | -------------------- | ---------------------- |
| Local           | Low                   | Low                  | Low                    |
| Global          | Medium                | Medium               | Medium                 |
| Interprocedural | High                  | High                 | High                   |

Generally, compilers employ a combination of optimization techniques at different scopes to achieve a balance between performance and compile time.

## 4. Important Considerations

*   **Order of Optimizations:** The order in which optimizations are applied can significantly affect the effectiveness of the overall optimization process. Some optimizations enable others.
*   **Safety:** Optimizations must be *safe*, meaning they must not change the observable behavior of the program (except for performance).
*   **Profitability:** Optimizations should be *profitable*, meaning they should actually improve performance (or other optimization goals) without introducing unacceptable overhead.
*   **Debugging:** Aggressive optimization can make debugging more difficult because the optimized code may be significantly different from the original source code.

## 5. Practice Questions/Exercises

**Question 1:**

Consider the following code snippet:

```
L1:
  a = b + c;
  d = a * 2;
  e = b + c;
  f = d / 4;
  return f;
```

a)  Identify the basic block.
b)  Apply local common subexpression elimination.
c) Apply constant propagation where applicable.

**Answer 1:**

a)  The entire code snippet constitutes a single basic block because there are no jumps in or out of the middle of the code.

b)  After local common subexpression elimination:

```
L1:
  a = b + c;
  d = a * 2;
  e = a; // Common subexpression elimination (b + c is already computed as a)
  f = d / 4;
  return f;
```

c) After constant propagation (if b and c had known constant values before this block, we could further optimize. In this case, we assume they don't.):

```
L1:
  a = b + c;
  d = a * 2;
  e = a;
  f = d / 4;
  return f;
```

**Question 2:**

Explain the difference between loop invariant code motion and induction variable elimination. Provide an example of each.

**Answer 2:**

*   **Loop Invariant Code Motion:**  Moves code within a loop that calculates the same value on every iteration *outside* the loop. This avoids redundant computation.

    *   **Example:**

        ```c++
        for (int i = 0; i < n; i++) {
          x = a + b;  // a and b do not change within the loop
          y = x * i;
        }

        // Optimized:
        x = a + b;
        for (int i = 0; i < n; i++) {
          y = x * i;
        }
        ```

*   **Induction Variable Elimination:** Simplifies or eliminates induction variables, which are variables that change their value predictably (usually by a constant amount) on each iteration of a loop.  This often involves replacing multiplications with additions or simplifying address calculations.

    *   **Example:**

        ```c++
        for (int i = 0; i < 10; i++) {
           a[i] = i * 4;
        }

        // Optimized (strength reduction and induction variable elimination):

        int j = 0;
        for (int i = 0; i < 10; i++) {
           a[i] = j;
           j = j + 4;

        }
        ```

**Question 3:**

What are the advantages and disadvantages of inlining?  When is inlining most likely to be beneficial?

**Answer 3:**

*   **Advantages:**
    *   Eliminates function call overhead (register saving/restoring, jumping to the function, etc.).
    *   Exposes more opportunities for optimization by integrating the function body into the caller's code.
*   **Disadvantages:**
    *   Can significantly increase code size, especially if the inlined function is large or called from multiple locations.
    *   Can increase compile time.

Inlining is most likely to be beneficial when:

*   The function is small and frequently called.
*   The function's behavior can be significantly improved by knowing the values of its arguments at the call site (allowing for specialization).
*   The increased code size is not a major concern.

## 6. Important Points to Remember

*   The scope of optimization impacts the potential for improvement, analysis complexity, and compile time.
*   Compilers often use a combination of optimization techniques at different scopes.
*   Optimizations must be safe (preserve program behavior) and profitable (actually improve performance).
*   Dataflow analysis is a fundamental technique used in global and interprocedural optimization.
*   Loop optimizations are crucial for improving the performance of many programs.
*   Interprocedural optimization offers the greatest potential for improvement but is also the most complex.
