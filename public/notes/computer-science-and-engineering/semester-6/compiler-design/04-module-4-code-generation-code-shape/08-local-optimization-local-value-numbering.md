---
title: "Local Optimization: Local Value Numbering"
subject: "COMPILER DESIGN"
module: "Module 4: Code generation: Code Shape "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba6a"
status: "completed"
scrapedAt: "2026-05-20T16:51:29.631Z"
---
## COMPILER DESIGN - Module 4: Code Generation - Code Shape - Local Optimization: Local Value Numbering

**Learning Outcomes:**

*   Understand the concept of local optimization.
*   Define and explain Local Value Numbering (LVN).
*   Apply LVN to identify and eliminate redundant computations within a basic block.
*   Understand the limitations of LVN.
*   Compare LVN with other optimization techniques.

---

### 1. Introduction to Local Optimization

*   **Definition:** Local optimization refers to code improvements that are performed within a single basic block.  A basic block is a sequence of instructions that has a single entry point and a single exit point (i.e., no jumps into the middle and no jumps out except at the end).
*   **Why Local Optimization?:**
    *   Relatively simple to implement.
    *   Provides a good initial improvement to the generated code.
    *   Serves as a foundation for more complex global optimizations.
*   **Common Local Optimization Techniques:**
    *   Constant folding
    *   Constant propagation
    *   Algebraic simplification
    *   Dead code elimination
    *   **Local Value Numbering (LVN)**
    *   Common subexpression elimination

### 2. Local Value Numbering (LVN): Definition and Purpose

*   **Definition:** Local Value Numbering (LVN) is a compiler optimization technique that assigns unique "value numbers" to expressions based on their computational value within a basic block.
*   **Purpose:**
    *   **Eliminate Redundant Computations:** Identify and remove expressions that compute the same value more than once within a basic block.
    *   **Simplify Expressions:**  Replace complex expressions with simpler ones that have the same value.
*   **How it Works (Simplified):**
    1.  Traverse the basic block instruction by instruction.
    2.  For each instruction:
        *   Compute a value number based on the operands and the operator.
        *   If a value number already exists for the same expression, replace the current instruction with a simpler equivalent.
        *   Update the mapping of expressions to value numbers.

### 3. Applying Local Value Numbering

*   **Key Data Structures:**
    *   **Value Table (or Hash Table):**  Maps expressions (operands and operator) to value numbers.  The key is the expression, the value is the assigned value number.  For example: `a + b  -> 1`.
    *   **Name Table (or Symbol Table):**  Maps variables to their current value numbers.  For example: `x -> 1` (meaning `x` currently holds the value number 1).
*   **Algorithm:**
    1.  Initialize the Value Table and Name Table (usually with constants having predefined value numbers).
    2.  For each instruction `x = y op z` in the basic block:
        a.  Look up value number of `y` in the Name Table (let's call it `VN(y)`).
        b.  Look up value number of `z` in the Name Table (let's call it `VN(z)`).
        c.  Construct an expression descriptor: `op VN(y) VN(z)`.
        d.  Look up the expression descriptor in the Value Table:
            *   If the expression descriptor exists in the Value Table (e.g., `op VN(y) VN(z) -> k`), then:
                *   Replace the instruction `x = y op z` with `x = VN(y) op VN(z)` (optional, but good for further simplification).  Then replace it with  `x = w` where variable `w` also has a value number of `k` in the Name Table. If no such variable exists, then just keep it as `x = y op z`, it will be simplified later.
                *   Update the Name Table: `x -> k`
            *   If the expression descriptor *does not* exist in the Value Table:
                *   Assign a new value number `k` to the expression descriptor.
                *   Add the mapping `op VN(y) VN(z) -> k` to the Value Table.
                *   Update the Name Table: `x -> k`
    3.  Return the optimized basic block.

*   **Example:**

    Consider the following basic block:

    ```
    B1:
        t1 = a + b
        t2 = c + d
        t3 = a + b
        t4 = t2 + 1
        t5 = a + b
        t6 = c + d
    ```

    **LVN Application:**

    | Instruction        | Name Table (Variable -> Value Number)                                   | Value Table (Expression -> Value Number)                                   | Action                                                                                                                                                             |
    |--------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Initial State      | `a -> VN(a), b -> VN(b), c -> VN(c), d -> VN(d)`                            |                                                                          |                                                                                                                                                                    |
    | `t1 = a + b`       | `a -> VN(a), b -> VN(b), c -> VN(c), d -> VN(d), t1 -> 1`               | `+ VN(a) VN(b) -> 1`                                                      | Assign value number `1` to `a + b`.                                                                                                                                |
    | `t2 = c + d`       | `a -> VN(a), b -> VN(b), c -> VN(c), d -> VN(d), t1 -> 1, t2 -> 2`      | `+ VN(a) VN(b) -> 1, + VN(c) VN(d) -> 2`                                   | Assign value number `2` to `c + d`.                                                                                                                                |
    | `t3 = a + b`       | `a -> VN(a), b -> VN(b), c -> VN(c), d -> VN(d), t1 -> 1, t2 -> 2, t3 -> 1` | `+ VN(a) VN(b) -> 1, + VN(c) VN(d) -> 2`                                   | Expression `a + b` already exists with value number `1`. Replace `t3 = a + b` with `t3 = t1`.                                                                     |
    | `t4 = t2 + 1`      | `a -> VN(a), b -> VN(b), c -> VN(c), d -> VN(d), t1 -> 1, t2 -> 2, t3 -> 1, t4 -> 3` | `+ VN(a) VN(b) -> 1, + VN(c) VN(d) -> 2, + 2 VN(1) -> 3`                 | Assign value number `3` to `t2 + 1`.  Remember '1' represents constant 1 and '2' represents value number of `t2`.                                                |
    | `t5 = a + b`       | `a -> VN(a), b -> VN(b), c -> VN(c), d -> VN(d), t1 -> 1, t2 -> 2, t3 -> 1, t4 -> 3, t5 -> 1` | `+ VN(a) VN(b) -> 1, + VN(c) VN(d) -> 2, + 2 VN(1) -> 3`                 | Expression `a + b` already exists with value number `1`. Replace `t5 = a + b` with `t5 = t1`.                                                                     |
    | `t6 = c + d`       | `a -> VN(a), b -> VN(b), c -> VN(c), d -> VN(d), t1 -> 1, t2 -> 2, t3 -> 1, t4 -> 3, t5 -> 1, t6 -> 2` | `+ VN(a) VN(b) -> 1, + VN(c) VN(d) -> 2, + 2 VN(1) -> 3`                 | Expression `c + d` already exists with value number `2`. Replace `t6 = c + d` with `t6 = t2`.                                                                     |

    **Optimized Basic Block:**

    ```
    B1:
        t1 = a + b
        t2 = c + d
        t3 = t1
        t4 = t2 + 1
        t5 = t1
        t6 = t2
    ```

    **Further Optimization (Copy Propagation):** Notice `t3`, `t5` can be further eliminated via copy propagation in a subsequent phase.

### 4. Limitations of Local Value Numbering

*   **Scope:** Limited to a single basic block.  Cannot eliminate redundant computations across basic blocks.
*   **Alias Analysis:**  Doesn't handle aliases (e.g., pointers) effectively. If a variable `x` is an alias for `y`, LVN might not detect that `x` and `y` hold the same value.
*   **Memory Operations:**  Less effective with memory loads and stores. Determining if two memory locations hold the same value requires more sophisticated analysis.
*   **Function Calls:** Cannot easily reason about the values returned by function calls.
*   **Side Effects:** Doesn't consider side effects. For example, `x = foo()` and `y = foo()` might *look* redundant but should not be eliminated if `foo()` has side effects.
*   **Array Access:** It struggles with array accesses because the same array access `a[i]` can have different values if the array or index is modified between accesses.

### 5. Comparison with Other Optimization Techniques

*   **Constant Folding:** Evaluates constant expressions at compile time (e.g., `x = 2 + 3` becomes `x = 5`). LVN can complement constant folding by further simplifying expressions.
*   **Constant Propagation:** Replaces variables with their constant values (e.g., if `x = 5`, then `y = x + 1` becomes `y = 5 + 1`).  LVN can work in conjunction with constant propagation.
*   **Common Subexpression Elimination (CSE):** A more general technique that can identify and eliminate redundant expressions even across basic blocks (global CSE). LVN is a *local* form of CSE.
*   **Dead Code Elimination:** Removes code that has no effect on the program's output.  LVN can reveal dead code by simplifying expressions.
*   **Global Value Numbering (GVN):** An extension of LVN that performs value numbering across the entire program, not just within a single basic block.  GVN addresses some of the limitations of LVN.

### 6. Important Points to Remember

*   LVN is a simple yet powerful optimization technique.
*   It operates within a single basic block.
*   It uses value numbers to identify and eliminate redundant computations.
*   It relies on data structures like Value Tables and Name Tables.
*   It has limitations related to scope, aliases, memory operations, and side effects.
*   It complements other optimization techniques.

---

### 7. Practice Questions / Exercises

**Question 1:**

Apply Local Value Numbering to the following basic block:

```
B2:
    x = a + b
    y = x - c
    z = a + b
    w = y + z
```

**Answer:**

| Instruction        | Name Table                                      | Value Table                                   | Action                                                                                                                                                                                                   |
|--------------------|-------------------------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Initial State      | `a -> VN(a), b -> VN(b), c -> VN(c)`          |                                               |                                                                                                                                                                                                           |
| `x = a + b`        | `a -> VN(a), b -> VN(b), c -> VN(c), x -> 1`    | `+ VN(a) VN(b) -> 1`                          | Assign value number 1 to `a + b`.                                                                                                                                                                       |
| `y = x - c`        | `a -> VN(a), b -> VN(b), c -> VN(c), x -> 1, y -> 2` | `+ VN(a) VN(b) -> 1, - 1 VN(c) -> 2`       | Assign value number 2 to `x - c`.                                                                                                                                                                       |
| `z = a + b`        | `a -> VN(a), b -> VN(b), c -> VN(c), x -> 1, y -> 2, z -> 1` | `+ VN(a) VN(b) -> 1, - 1 VN(c) -> 2`       | Expression `a + b` already exists with value number 1. Replace `z = a + b` with `z = x`.                                                                                                    |
| `w = y + z`        | `a -> VN(a), b -> VN(b), c -> VN(c), x -> 1, y -> 2, z -> 1, w -> 3` | `+ VN(a) VN(b) -> 1, - 1 VN(c) -> 2, + 2 1 -> 3` | Assign value number 3 to `y + z`.                                                                                                                                                                      |

Optimized Basic Block:

```
B2:
    x = a + b
    y = x - c
    z = x
    w = y + z
```

**Question 2:**

Explain why Local Value Numbering might not be effective in optimizing a basic block that heavily relies on function calls.

**Answer:**

Local Value Numbering (LVN) relies on detecting expressions with the same value. Function calls pose a challenge because:

1.  **Side Effects:** Functions can have side effects (modifying global variables, performing I/O, etc.).  Two seemingly identical calls to the same function might produce different results if the function's behavior depends on external factors.  LVN cannot easily reason about these side effects.
2.  **Unknown Values:** Without interprocedural analysis, LVN cannot determine the return value of a function call. Therefore, it cannot assume that two calls to the same function with the same arguments will return the same value.  Each call is treated as a unique expression.

**Question 3:**

What are the key differences between Local Value Numbering and Global Value Numbering?

**Answer:**

| Feature          | Local Value Numbering (LVN)                                    | Global Value Numbering (GVN)                                                                                                |
|------------------|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Scope            | Single basic block                                                | Entire program (or a larger region, such as a function)                                                                      |
| Complexity       | Simpler to implement                                              | More complex to implement                                                                                                   |
| Analysis         | Local analysis                                                     | Global data flow analysis                                                                                                    |
| Effectiveness    | Good for eliminating redundant computations within a basic block. | More effective at eliminating redundant computations across basic blocks and functions.                               |
| Scalability      | Scales well with larger programs                                     | Can be computationally expensive for very large programs due to the global analysis required.                               |
| Aliasing         | Poor handling of aliasing (pointers)                             | Can incorporate more sophisticated alias analysis to improve accuracy.                                                       |
| Example Scenario | Optimizing arithmetic expressions within a loop body.            | Eliminating redundant computations that occur in different functions called in a program.                                  |

---
