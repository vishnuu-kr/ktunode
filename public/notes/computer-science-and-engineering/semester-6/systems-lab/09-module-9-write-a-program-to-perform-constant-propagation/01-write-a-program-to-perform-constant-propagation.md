---
title: "Write a program to perform constant propagation."
subject: "SYSTEMS LAB"
module: "Module 9: Write a program to perform constant propagation."
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8c040"
status: "completed"
scrapedAt: "2026-05-20T16:57:38.928Z"
---
# Systems Lab: Module 9 - Constant Propagation

## Introduction

Constant propagation is a compiler optimization technique that aims to replace occurrences of constants with their actual values. This can simplify code, reduce execution time, and enable further optimizations. This module focuses on understanding and implementing a program to perform constant propagation.

## Learning Outcomes

By the end of this module, you will be able to:

*   Understand the concept and purpose of constant propagation.
*   Identify opportunities for constant propagation in a given code snippet.
*   Design and implement an algorithm for constant propagation.
*   Analyze the impact of constant propagation on code efficiency.
*   Evaluate the limitations and potential issues of constant propagation.

## Key Concepts and Definitions

### What is Constant Propagation?

**Constant Propagation** is an optimization that replaces a variable that is known to hold a constant value with that constant value. This is often applied to intermediate representations (IR) of code, such as Three-Address Code (TAC) or Static Single Assignment (SSA) form.

### Why is Constant Propagation Important?

*   **Code Simplification:** Replaces variables with literals, making the code easier to read and understand.
*   **Performance Improvement:** Eliminates unnecessary variable lookups and computations.
*   **Enabling Other Optimizations:**
    *   **Constant Folding:** If a computation involves only constants, the result can be pre-calculated (e.g., `x = 5 + 3` can become `x = 8`).
    *   **Dead Code Elimination:** If a variable is assigned a constant and never used again, or if a condition based on a constant is always true or always false, the associated code can be removed.
    *   **Strength Reduction:** Replacing computationally expensive operations with cheaper ones (e.g., replacing multiplication by powers of 2 with bit shifts).

### Where can Constant Propagation be Applied?

Constant propagation is most effective when variables are assigned constant values at **compile time**. This typically happens through:

*   **Direct assignments:** `x = 10`
*   **Initialization:** `int y = 5;`
*   **Results of constant expressions:** `z = a + b`, where `a` and `b` are known constants.

### Intermediate Representations (IR) for Constant Propagation

While you can implement constant propagation on source code, it's typically performed on an Intermediate Representation (IR) to abstract away language-specific details. Common IRs include:

*   **Three-Address Code (TAC):** A sequence of instructions, each with at most three operands.
    *   Example:
        ```
        t1 = 5
        t2 = 10
        t3 = t1 + t2
        x = t3
        ```
*   **Static Single Assignment (SSA) Form:** Each variable is assigned exactly once. This makes tracking constant values much simpler.
    *   Example:
        ```
        t1_1 = 5
        t2_1 = 10
        t3_1 = t1_1 + t2_1
        x_1 = t3_1
        ```

## Algorithm for Constant Propagation

A common approach to implement constant propagation involves iterating through the IR and maintaining a **symbol table** or a **constant map** that stores the current known constant values for variables.

**High-Level Algorithm:**

1.  **Initialization:** Create an empty symbol table (or constant map) to store variable-to-constant mappings.
2.  **Iteration:** Traverse the Intermediate Representation (IR) of the program, instruction by instruction.
3.  **Analysis of Each Instruction:**
    *   **Assignment of a Constant:** If an instruction assigns a constant value to a variable (e.g., `x = 10`), update the symbol table to record that `x` now holds the constant value `10`.
    *   **Assignment from Known Constants:** If an instruction involves operands that are already known to be constants in the symbol table, and the operation is constant-foldable, perform the operation and propagate the result.
        *   Example: If `a = 5` and `b = 10` are in the symbol table, and the instruction is `c = a + b`, you can replace it with `c = 15` and update the symbol table for `c`.
    *   **Assignments from Variables with Unknown Values:** If an instruction involves a variable whose value is not known to be a constant (or if the variable's value has been updated multiple times and its current value is uncertain), remove that variable from the symbol table if it was previously marked as a constant. This handles cases where a variable might be reassigned a non-constant value later.
    *   **Function Calls/Complex Operations:** Treat operations that cannot be determined at compile time (like function calls, input operations, or complex library functions) as potentially introducing non-constant values. Variables used as arguments or returned values from such operations should be considered non-constant.
4.  **Propagation:** After analyzing an instruction, replace any occurrences of variables (that are known to be constants) with their constant values in subsequent instructions.
5.  **Repeat:** Continue iterating through the IR until no more constant propagations or folds can be made in a full pass. This ensures that newly created constants are also propagated.

**Data Structures:**

*   **Symbol Table/Constant Map:** A dictionary or hash map where keys are variable names and values are their known constant values. You might also need to store a flag indicating if a variable is *definitely* a constant.

### Example Walkthrough (using Three-Address Code)

Consider the following TAC:

```
1. t1 = 10
2. t2 = 20
3. t3 = t1 + 5
4. x = t2
5. y = t3 * 2
6. z = x + y
```

**Symbol Table (initially empty):** `{}`

**Iteration 1:**

*   **Instruction 1:** `t1 = 10`
    *   Update symbol table: `{"t1": 10}`
    *   Propagate `t1`: No changes needed in this instruction.
    *   Optimized IR: `t1 = 10`
*   **Instruction 2:** `t2 = 20`
    *   Update symbol table: `{"t1": 10, "t2": 20}`
    *   Propagate `t2`: No changes needed.
    *   Optimized IR: `t2 = 20`
*   **Instruction 3:** `t3 = t1 + 5`
    *   `t1` is in symbol table with value `10`.
    *   Operation is constant-foldable: `10 + 5 = 15`.
    *   Update symbol table: `{"t1": 10, "t2": 20, "t3": 15}`
    *   Optimized IR: `t3 = 15`
*   **Instruction 4:** `x = t2`
    *   `t2` is in symbol table with value `20`.
    *   Propagate `t2`: `x = 20`
    *   Update symbol table: `{"t1": 10, "t2": 20, "t3": 15, "x": 20}`
    *   Optimized IR: `x = 20`
*   **Instruction 5:** `y = t3 * 2`
    *   `t3` is in symbol table with value `15`.
    *   Operation is constant-foldable: `15 * 2 = 30`.
    *   Update symbol table: `{"t1": 10, "t2": 20, "t3": 15, "x": 20, "y": 30}`
    *   Optimized IR: `y = 30`
*   **Instruction 6:** `z = x + y`
    *   `x` is in symbol table with value `20`.
    *   `y` is in symbol table with value `30`.
    *   Operation is constant-foldable: `20 + 30 = 50`.
    *   Update symbol table: `{"t1": 10, "t2": 20, "t3": 15, "x": 20, "y": 30, "z": 50}`
    *   Optimized IR: `z = 50`

**Resulting Optimized IR:**

```
t1 = 10
t2 = 20
t3 = 15
x = 20
y = 30
z = 50
```

## Implementation Considerations

When building your program, consider the following:

*   **Parsing the IR:** You'll need a way to parse your chosen IR (e.g., strings representing TAC instructions).
*   **Representing Instructions:** Define data structures to represent your IR instructions, including operator, operands, and result.
*   **Handling Different Data Types:** If your IR supports multiple data types (integers, floats, etc.), ensure your propagation logic handles them correctly.
*   **Scope:** In real compilers, variable scope is crucial. For a simplified implementation, you might assume a single, flat scope.
*   **Reaching Definitions:** For more advanced constant propagation, you might need to consider "reaching definitions" – ensuring that the constant value you're using is indeed the *currently active* definition of that variable. This becomes important when variables can be reassigned within loops or conditional blocks.
*   **Data Flow Analysis:** Constant propagation is a form of data flow analysis. Understanding concepts like "may-alias" and "must-alias" can be helpful for more robust implementations.

## Practice Questions and Exercises

**Exercise 1: Identifying Constant Propagation Opportunities**

Analyze the following C code snippet and identify where constant propagation could be applied. Describe the changes.

```c
int main() {
    int a = 5;
    int b = a + 3;
    int c = 10;
    int d = b * 2;
    int x = 7;
    int y = x + 0;
    int z = a * b; // What if 'a' or 'b' gets reassigned later?
    return 0;
}
```

**Answer 1:**

*   `int a = 5;` : `a` is initialized to a constant.
*   `int b = a + 3;`: If `a` is known to be 5, then `b` can be propagated to `8`.
*   `int c = 10;` : `c` is initialized to a constant.
*   `int d = b * 2;`: If `b` is propagated to `8`, then `d` can be propagated to `16`.
*   `int x = 7;` : `x` is initialized to a constant.
*   `int y = x + 0;`: If `x` is known to be 7, then `y` can be propagated to `7`.
*   `int z = a * b;`: This is tricky. If `a` is 5 and `b` is 8, `z` *could* become 40. However, if `a` or `b` were modified between their definition and this line, this propagation would be incorrect. For simple sequential code, it's safe.

**Optimized Code (assuming no reassignments):**

```c
int main() {
    int a = 5;
    int b = 8; // Propagated from a + 3
    int c = 10;
    int d = 16; // Propagated from b * 2
    int x = 7;
    int y = 7; // Propagated from x + 0
    int z = 40; // Propagated from a * b
    return 0;
}
```

**Exercise 2: Implementing Basic Constant Propagation**

Write a Python program that takes a list of strings, where each string represents a simple TAC instruction of the form `operand1 operator operand2` or `result = operand` or `result = constant`. Assume only integer operations and assignments.

**Example Input:**

```python
instructions = [
    "t1 = 10",
    "t2 = 20",
    "t3 = t1 + 5",
    "x = t2",
    "y = t3 * 2",
    "z = x + y"
]
```

**Expected Output:**

```python
optimized_instructions = [
    "t1 = 10",
    "t2 = 20",
    "t3 = 15",
    "x = 20",
    "y = 30",
    "z = 50"
]
```

**Hint:** Use a dictionary to store constant values. Iterate through the instructions, update the dictionary, and try to replace operands with their constant values.

**Python Implementation Sketch (for Exercise 2):**

```python
def is_constant(value):
    try:
        int(value)
        return True
    except ValueError:
        return False

def constant_propagation(instructions):
    constant_map = {}
    optimized_instructions = []
    
    for instruction in instructions:
        parts = instruction.split()
        
        if "=" not in instruction: # Handle instructions without assignment, though unlikely in basic TAC
            optimized_instructions.append(instruction)
            continue

        # Handle simple assignment: result = value
        if len(parts) == 3 and parts[1] == '=':
            result = parts[0]
            value = parts[2]

            if is_constant(value):
                constant_map[result] = int(value)
                optimized_instructions.append(instruction) # Keep the original assignment if it defines a constant
            elif value in constant_map:
                # Propagate existing constant
                constant_map[result] = constant_map[value]
                optimized_instructions.append(f"{result} = {constant_map[value]}")
            else:
                # Variable with unknown value, remove from map if it was there
                if result in constant_map:
                    del constant_map[result]
                optimized_instructions.append(instruction)
        
        # Handle binary operations: result = operand1 operator operand2
        elif len(parts) == 5 and parts[2] == '=' and parts[3] in ('+', '-', '*', '/'):
            result = parts[0]
            operand1 = parts[2]
            operator = parts[3]
            operand2 = parts[4]
            
            val1 = None
            val2 = None
            
            if is_constant(operand1):
                val1 = int(operand1)
            elif operand1 in constant_map:
                val1 = constant_map[operand1]
            
            if is_constant(operand2):
                val2 = int(operand2)
            elif operand2 in constant_map:
                val2 = constant_map[operand2]

            if val1 is not None and val2 is not None:
                # Constant foldable
                try:
                    if operator == '+':
                        folded_value = val1 + val2
                    elif operator == '-':
                        folded_value = val1 - val2
                    elif operator == '*':
                        folded_value = val1 * val2
                    elif operator == '/':
                        if val2 == 0:
                            raise ZeroDivisionError("Division by zero")
                        folded_value = val1 // val2 # Integer division
                    
                    constant_map[result] = folded_value
                    optimized_instructions.append(f"{result} = {folded_value}")
                except (ValueError, ZeroDivisionError) as e:
                    # Could not fold, or division by zero
                    if result in constant_map:
                        del constant_map[result]
                    optimized_instructions.append(instruction)
            else:
                # Operands are not both constants
                if result in constant_map:
                    del constant_map[result]
                optimized_instructions.append(instruction)
        else:
            # Unknown instruction format
            optimized_instructions.append(instruction)
    
    return optimized_instructions

# --- Test Case ---
instructions = [
    "t1 = 10",
    "t2 = 20",
    "t3 = t1 + 5",
    "x = t2",
    "y = t3 * 2",
    "z = x + y"
]

optimized_instructions = constant_propagation(instructions)
for instr in optimized_instructions:
    print(instr)
```

**Exercise 3: Limitations of Simple Constant Propagation**

Consider the following C code. Can a simple single-pass constant propagation correctly optimize `p`? Why or why not?

```c
int main() {
    int a = 5;
    int b = 10;
    int p;

    if (a > 0) { // Condition is always true
        p = a + b; // p becomes 15
    } else {
        p = 0;
    }
    
    int q = p * 2; // If p is 15, q becomes 30
    return 0;
}
```

**Answer 3:**

A simple single-pass constant propagation might struggle with this if it doesn't perform **control flow analysis**.

*   **Single Pass Issue:** If the optimizer processes the `if` block, it might determine `p = 15`. However, if the `else` block (even if unreachable) were considered, or if the assignment to `p` were more complex, a single pass might not be sufficient.
*   **Control Flow:** The core issue is that the value of `p` depends on the control flow. A simple linear scan of instructions doesn't account for conditional execution. To optimize `p` correctly, the compiler needs to understand that the `if` condition `a > 0` is always true (since `a` is a constant `5`). This would require **constant folding of conditions** and **dead code elimination** for the `else` block.

For proper optimization here, you'd need:

1.  **Constant Folding of Conditions:** Recognize `a > 0` (where `a` is 5) as `true`.
2.  **Branch Prediction/Elimination:** Eliminate the `else` block.
3.  **Constant Propagation:** Propagate `p = 15`.
4.  **Constant Folding:** Propagate `q = 15 * 2` to `q = 30`.

This highlights the need for more sophisticated analysis techniques beyond basic instruction-by-instruction propagation.

## Important Points to Remember

*   **Compile-Time Constants:** Constant propagation is most effective for values determined at compile time.
*   **Intermediate Representation:** It's usually performed on an IR, not directly on source code.
*   **Data Flow Analysis:** It's a type of data flow analysis, requiring tracking the flow of values.
*   **Symbol Table:** A symbol table or constant map is crucial for tracking known constant values.
*   **Iterative Process:** Often requires multiple passes to propagate newly discovered constants.
*   **Limitations:** Without control flow analysis, it can miss opportunities or make incorrect assumptions in conditional or looped code.
*   **Enables Other Optimizations:** It's a foundational optimization that paves the way for constant folding and dead code elimination.
*   **Variable Reassignment:** Be careful when a variable might be reassigned. If a variable declared as a constant is later assigned a non-constant value, it's no longer a constant, and its entry in the symbol table should be removed.

---
This concludes the study notes for Module 9 on Constant Propagation. Good luck with your lab work!
