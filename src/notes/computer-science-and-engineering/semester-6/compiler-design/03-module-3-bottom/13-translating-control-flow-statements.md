---
title: "Translating Control-Flow Statements"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba61"
status: "completed"
scrapedAt: "2026-05-20T16:51:23.916Z"
---
# Compiler Design: Module 3 - Bottom-Up Parsing: Translating Control-Flow Statements

## Learning Outcomes:

*   Understand the different types of control-flow statements (e.g., `if`, `while`, `for`).
*   Learn how to represent control-flow statements using intermediate code (e.g., three-address code).
*   Explain how to translate control-flow statements into intermediate code during bottom-up parsing.
*   Apply techniques like backpatching to handle forward jumps in control-flow statements.
*   Describe the concept of Boolean expression translation and its impact on control-flow translation.
*   Evaluate the efficiency of different translation methods for control-flow statements.

## 1. Introduction to Control-Flow Statements

*   **Definition:** Control-flow statements determine the order in which statements are executed in a program. They enable conditional execution and repetition of code blocks.

*   **Types of Control-Flow Statements:**
    *   **Conditional Statements:** `if`, `if-else`, `switch-case`
    *   **Looping Statements:** `while`, `do-while`, `for`
    *   **Jump Statements:** `break`, `continue`, `goto`, `return`

*   **Importance in Compilation:** Accurate translation of control-flow statements is crucial for ensuring correct program behavior.  Improper translation leads to logic errors and incorrect execution sequences.

## 2. Intermediate Code Representation

*   **Why Intermediate Code?**
    *   **Machine Independence:** Allows the compiler to be more easily adapted to different target machines.
    *   **Optimization:** Facilitates code optimization by providing a standardized representation.
    *   **Modularity:** Separates the front-end (lexical analysis, parsing, semantic analysis) from the back-end (code generation).

*   **Common Intermediate Code Representations:**
    *   **Three-Address Code:** Instructions have at most three operands (e.g., `x = y op z`).
        *   **Types of Three-Address Instructions:**
            *   Assignment (`x = y op z`, `x = y`)
            *   Conditional Jumps (`if x relop y goto L`)
            *   Unconditional Jumps (`goto L`)
            *   Procedure Calls and Returns (`param x`, `call p, n`, `return y`)
            *   Indexed Assignments (`x = y[i]`, `x[i] = y`)
            *   Address and Pointer Assignments (`x = &y`, `x = *y`, `*x = y`)
    *   **Quadruples:** Each instruction is represented as a record with four fields: `op`, `arg1`, `arg2`, `result`.
    *   **Triples:** Similar to quadruples, but use positions in the triple structure to refer to intermediate values, reducing storage space.
    *   **Indirect Triples:** Uses a list of pointers to triples, offering more flexibility for optimization.

*   **Example: Three-Address Code for `if (x > y) then z = x + y; else z = x - y;`**

    ```
    if x > y goto L1
    z = x - y
    goto L2
    L1: z = x + y
    L2: ...
    ```

## 3. Translating Control-Flow Statements in Bottom-Up Parsing

*   **Semantic Actions:**  During parsing, semantic actions are performed to generate the intermediate code. These actions are triggered by the reduction of a production rule.

*   **Attributes:** Grammar symbols are associated with attributes that store information about the corresponding program construct (e.g., location of variables, type of expressions, starting and ending labels of code blocks).

*   **Translation Schemes:** Context-free grammar augmented with semantic actions (enclosed in curly braces `{}`) that specify how to translate each construct.

*   **General Approach:**

    1.  **Identify relevant grammar productions for control-flow statements.**  For instance, productions for `if`, `while`, `for`.
    2.  **Augment these productions with semantic actions to generate three-address code.**  This involves:
        *   Generating labels for the start and end of code blocks.
        *   Generating conditional and unconditional jump instructions.
        *   Evaluating boolean expressions.

*   **Example: Translation Scheme for `if` statement**

    ```grammar
    S -> if (B) S1 {
        S.code = B.code || gen('if' B.val 'goto' S1.begin) || S1.code
        S.nextList = merge(B.falseList, S1.nextList)
        S.begin = newlabel() // create a unique label
    }
    ```
    **Explanation:** This (simplified) scheme generates intermediate code for the `if` statement.  It combines the code for the boolean expression (`B.code`) with the code generated from `S1` (the statement to execute if the condition is true).  `B.val` would need to be evaluated by other rules of grammar to determine the result of the Boolean expression. `S.begin` is a label marking where the `S1` statements begin.

## 4. Backpatching

*   **Problem:** When generating code for control-flow statements, the target label of a jump instruction might not be known at the time the instruction is generated (forward jumps).

*   **Solution:** Backpatching involves generating incomplete jump instructions initially and filling in the missing target labels later when they become known.

*   **Key Concepts:**

    *   **`makelist(i)`:** Creates a new list containing only `i`, an index into the array of instructions.  This list is a *list of jmp instructions whose labels are yet to be known*.
    *   **`merge(p1, p2)`:** Concatenates the lists pointed to by `p1` and `p2` and returns a pointer to the concatenated list. This combines jmp instructions that go to the same label
    *   **`backpatch(p, i)`:**  Inserts `i` as the target label for each instruction on the list pointed to by `p`.  This is the moment when the jump instruction is completed.

*   **Example: Backpatching for `if-else` statement**

    ```grammar
    S -> if (B) S1 else S2 {
        S.code = B.code || gen('if' B.val 'goto' S1.begin) || S1.code || gen('goto' S.next) || S2.code
        backpatch(B.falseList, S2.begin)
        backpatch(S1.nextList, S.next)
        S.nextList = merge(S2.nextList, S.next)
    }
    ```
   **Explanation:** Here, `B.falseList` contains jump instructions that jump to the 'else' part, `S2`. The backpatching sets the label of the `else` part.  `S1.nextList` contains instructions that jump after the `if` and `else`, and these are similarly backpatched.

## 5. Boolean Expression Translation

*   **Boolean Expressions in Control Flow:** Boolean expressions are fundamental to control-flow statements, determining the direction of execution.

*   **Two Main Approaches to Translation:**

    *   **Numerical Representation:** Boolean values are represented as numerical values (e.g., 0 for false, 1 for true). The expression is evaluated, and the result is stored in a temporary variable. Then conditional jumps are created based on the value of this variable.
    *   **Short-Circuit Evaluation (Jump Code):** No numerical value is computed. Instead, the boolean expression is translated directly into conditional jumps. The evaluation stops as soon as the result is known. This is typically more efficient.

*   **Example: Jump Code for `x > y and z < w`**

    ```
    if x <= y goto L1  // Evaluate x > y. If false, jump to L1.
    if z < w goto L2   // Evaluate z < w. If true, jump to L2.
    L1: t = 0           // x > y or z >= w is false.
    goto L3
    L2: t = 1           // x > y and z < w is true.
    L3: ...
    ```

*   **Short-Circuit Evaluation with Backpatching:** The `trueList` and `falseList` attributes are used to keep track of the jump instructions associated with the true and false branches of the boolean expression. Backpatching is used to fill in the target labels.

## 6. Example: Translating a `while` Loop

Consider the code:

```c
while (x < 10) {
    y = y + x;
    x = x + 1;
}
```

Let's outline how this would be translated into three-address code using backpatching.

*   **Grammar Production:** `S -> while (B) S1`

*   **Translation Scheme:**

    ```grammar
    S -> while (B) S1 {
        backpatch(S1.nextList, S.begin); // Label for top of the loop
        S.code = gen('label' S.begin) || B.code || gen('if' B.val 'goto' S1.begin) || S1.code || gen('goto' S.begin);
        S.nextList = B.falseList; //Jump out of while loop when condition is false
    }
    ```

*   **Step-by-Step Translation (Conceptual):**

    1.  **S.begin = newlabel();** Create a label for the start of the loop (e.g., L1).

    2.  **Generate code for the condition (x < 10):**

        ```
        L1:  if x >= 10 goto L_exit  // Jump out if x >= 10
        ```

        `B.trueList` would initially contain the index of `if x >= 10 goto L_exit`, and `B.falseList` would initially be empty or contain the index of a dummy jmp.

    3.  **Generate code for the loop body:**

        ```
        y = y + x;
        x = x + 1;
        ```
        The three address code for this could be:
         ```
        t1 = y + x
        y = t1
        t2 = x + 1
        x = t2
         ```

    4.  **Unconditional jump back to the beginning:**

        ```
        goto L1
        ```

    5.  **Backpatching:**

        *   `backpatch(B.falseList, L_exit);`  Fill in `L_exit` in the jump `if x >= 10 goto L_exit`. This is the exit point for the `while` loop.
        *   `backpatch(S1.nextList, L1);`  Sets the *next* statement after the inner loop `S1` to jump back to the beginning of the while loop.

## 7. Efficiency Considerations

*   **Minimizing Jumps:**  Redundant jumps can be eliminated by optimizing the intermediate code.
*   **Short-Circuit Evaluation:** Generally more efficient than numerical representation for boolean expressions, especially when expressions involve complex logical operations.
*   **Backpatching Overhead:**  Backpatching can introduce some overhead, but it's generally a necessary and efficient technique for handling forward jumps.  Alternatives might involve multi-pass compilation, which are less efficient overall.
*   **Choice of Intermediate Representation:**  The chosen intermediate code representation (three-address code, quadruples, etc.) affects the efficiency of code generation and optimization.  Three-address code is often favored for its simplicity and flexibility.

## 8. Important Points to Remember

*   Control-flow statements are essential for structuring programs.
*   Intermediate code provides a machine-independent representation of the source code.
*   Semantic actions are used during parsing to generate intermediate code.
*   Backpatching is a crucial technique for handling forward jumps.
*   Boolean expression translation directly impacts the efficiency of control-flow translation.
*   Optimize the intermediate code to reduce the number of jumps and improve overall performance.

## 9. Practice Questions/Exercises

**Question 1:**

Write the three-address code for the following `if-else` statement:

```c
if (a < b && c > d) {
    x = y + z;
} else {
    x = y - z;
}
```

**Answer:**

```
if a >= b goto L1
if c <= d goto L1
t1 = y + z
x = t1
goto L2
L1: t2 = y - z
x = t2
L2: ...
```

**Question 2:**

Explain the purpose of backpatching and provide a scenario where it is essential.

**Answer:**

Backpatching is used to resolve forward jumps in intermediate code generation. It involves creating incomplete jump instructions and filling in the target labels later when they become known. It's essential for translating control-flow statements like `if` and `while`, where the target of a jump instruction might depend on code that hasn't been generated yet.

**Question 3:**

Compare and contrast numerical representation and short-circuit evaluation for boolean expressions.

**Answer:**

Numerical representation computes a numerical value (e.g., 0 or 1) for a boolean expression and uses it for conditional jumps. Short-circuit evaluation translates the expression directly into conditional jumps, stopping evaluation as soon as the result is known. Short-circuit evaluation is generally more efficient, especially for complex expressions, as it avoids unnecessary computations.  However, the numerical representation might be required by other parts of the compiler, or by the target machine, making the short circuit impractical.

**Question 4:**

Create a translation scheme for a `do-while` loop ( `do S while (B)` ).

**Answer:**

```grammar
S -> do S1 while (B) {
  S.begin = newlabel();
  backpatch(S1.nextList, S.begin);  //Jump to the start
  S.code = gen('label' S.begin) || S1.code || B.code || gen('if' B.val 'goto' S.begin);
  S.nextList = B.falseList;
}
```

**Question 5:**

How can redundant jumps be minimized in intermediate code? Give some examples.

**Answer:**

Redundant jumps can be minimized through optimization techniques. Examples include:

*   **Jump-to-jump elimination:** If there's a jump instruction that jumps to another jump instruction, rewrite the first jump to directly target the final destination.
*   **Dead code elimination:** Remove unreachable code segments, including jump instructions that are never executed.
*   **Combining multiple conditional jumps:** If multiple conditional jumps depend on the same condition, try to combine them into a single jump instruction.
