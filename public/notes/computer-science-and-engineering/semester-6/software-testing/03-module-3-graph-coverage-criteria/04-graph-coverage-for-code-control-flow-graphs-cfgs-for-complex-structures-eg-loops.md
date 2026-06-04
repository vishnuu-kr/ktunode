---
title: "Graph Coverage for Code - Control flow graphs (CFGs) for complex structures (e.g., loops, exceptions)"
subject: "SOFTWARE TESTING"
module: "Module 3: Graph Coverage Criteria "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bafb"
status: "completed"
scrapedAt: "2026-05-20T16:57:25.244Z"
---
# SOFTWARE TESTING: Module 3 - Graph Coverage Criteria - Graph Coverage for Code (CFGs for Complex Structures)

## Learning Outcomes:

*   Understand how to construct Control Flow Graphs (CFGs) for code containing complex control structures like loops and exceptions.
*   Apply graph coverage criteria (Node, Edge, Path Coverage) to CFGs representing code with loops and exceptions.
*   Identify test requirements for adequate coverage based on selected graph coverage criteria.
*   Analyze the strengths and weaknesses of applying graph coverage criteria to CFGs for complex code structures.

## 1. Key Concepts and Definitions

*   **Control Flow Graph (CFG):**  A directed graph representation of the possible execution paths through a program.  Nodes represent basic blocks of code (sequential statements with one entry and one exit), and edges represent the flow of control between these blocks.

*   **Basic Block:** A sequence of consecutive statements in which control enters at the beginning and leaves at the end without halt or possibility of branching except at the end.

*   **Node Coverage (Statement Coverage):**  Select test cases such that every node (basic block) in the CFG is executed at least once.

*   **Edge Coverage (Branch Coverage):**  Select test cases such that every edge in the CFG is traversed at least once.

*   **Path Coverage:** Select test cases such that every possible path through the CFG is executed at least once.  (Often impractical due to infinite paths in loops).

*   **Prime Path:** A path that does not appear as a proper subpath of any other achievable path.  Prime paths stop when further extension would create a cycle or duplication of a previous path.

*   **Loop:** A construct in programming languages that allows a sequence of instructions to be executed repeatedly.  Examples: `for`, `while`, `do-while`.

*   **Exception:**  An event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions.  Examples: `try-catch` blocks, `throw` statements.

## 2. Constructing CFGs for Complex Structures

### 2.1. Loops

*   **General Loop Structure:**
    1.  **Entry Node:**  Represents the code before the loop.
    2.  **Condition Node:**  Evaluates the loop condition.
    3.  **Loop Body Node(s):** Represents the code executed within the loop.
    4.  **Exit Node:** Represents the code after the loop.
    5.  **Edge from Condition Node to Loop Body:**  Taken when the loop condition is true.
    6.  **Edge from Loop Body to Condition Node:**  Connects the end of the loop body back to the condition, allowing for the next iteration.
    7.  **Edge from Condition Node to Exit Node:**  Taken when the loop condition is false.

*   **`for` loop example:**

    ```java
    public int sumForLoop(int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    ```

    **CFG:**

    *   **Node 1:** `int sum = 0; int i = 1;` (Initialization)
    *   **Node 2:** `i <= n` (Condition)
    *   **Node 3:** `sum += i; i++` (Loop Body)
    *   **Node 4:** `return sum;` (Exit)

    **Edges:**
    *   (1, 2)
    *   (2, 3)  (Loop Condition True)
    *   (3, 2)
    *   (2, 4)  (Loop Condition False)

*   **`while` loop example:**

    ```java
    public int sumWhileLoop(int n) {
        int sum = 0;
        int i = 1;
        while (i <= n) {
            sum += i;
            i++;
        }
        return sum;
    }
    ```

    **CFG:**

    *   **Node 1:** `int sum = 0; int i = 1;` (Initialization)
    *   **Node 2:** `i <= n` (Condition)
    *   **Node 3:** `sum += i; i++;` (Loop Body)
    *   **Node 4:** `return sum;` (Exit)

    **Edges:**
    *   (1, 2)
    *   (2, 3) (Loop Condition True)
    *   (3, 2)
    *   (2, 4) (Loop Condition False)

*   **`do-while` loop example:**

    ```java
    public int sumDoWhileLoop(int n) {
        int sum = 0;
        int i = 1;
        do {
            sum += i;
            i++;
        } while (i <= n);
        return sum;
    }
    ```

    **CFG:**

    *   **Node 1:** `int sum = 0; int i = 1;` (Initialization)
    *   **Node 2:** `sum += i; i++;` (Loop Body)
    *   **Node 3:** `i <= n` (Condition)
    *   **Node 4:** `return sum;` (Exit)

    **Edges:**
    *   (1, 2)
    *   (2, 3)
    *   (3, 2) (Loop Condition True)
    *   (3, 4) (Loop Condition False)

### 2.2. Exceptions

*   **`try-catch` block structure:**
    1.  **Try Block Node(s):**  Represents the code within the `try` block that might throw an exception.
    2.  **Catch Block Node(s):** Represents the code within the `catch` block that handles a specific exception type.
    3.  **Finally Block Node(s):** Represents the code within the `finally` block (executed regardless of whether an exception is thrown).
    4.  **Exception Edge:** An edge from the `try` block to a `catch` block, representing the flow of control when an exception is thrown.
    5.  **Normal Edge:**  An edge from the `try` block to the code following the `try-catch` block (when no exception is thrown).

*   **Example:**

    ```java
    public int exceptionExample(int a, int b) {
        int result = 0;
        try {
            result = a / b;
        } catch (ArithmeticException e) {
            result = -1;
        } finally {
            result = result * 2;
        }
        return result;
    }
    ```

    **CFG:**

    *   **Node 1:** `int result = 0;`
    *   **Node 2:** `result = a / b;` (Try Block)
    *   **Node 3:** `result = -1;` (Catch Block)
    *   **Node 4:** `result = result * 2;` (Finally Block)
    *   **Node 5:** `return result;`

    **Edges:**
    *   (1, 2)
    *   (2, 4)  (No Exception)
    *   (2, 3)  (ArithmeticException)
    *   (3, 4)
    *   (4, 5)

### 2.3 Nested Structures

*   Loops and exceptions can be nested within each other.  The CFG for these scenarios simply combines the rules above, creating more complex graphs.  For example, a `try-catch` block inside a loop will have exception edges leading out of the loop body.

## 3. Applying Graph Coverage Criteria

### 3.1. Example: `sumForLoop(int n)`

Let's revisit our `sumForLoop` example:

```java
public int sumForLoop(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```

**CFG:**

*   **Node 1:** `int sum = 0; int i = 1;`
*   **Node 2:** `i <= n`
*   **Node 3:** `sum += i; i++`
*   **Node 4:** `return sum;`

**Edges:**
*   (1, 2)
*   (2, 3)
*   (3, 2)
*   (2, 4)

*   **Node Coverage:**  We need to execute nodes 1, 2, 3, and 4.  We can achieve this with the following test case:
    *   `n = 1`

        This will execute the path: 1 -> 2 -> 3 -> 2 -> 4.

*   **Edge Coverage:** We need to execute edges (1, 2), (2, 3), (3, 2), and (2, 4).  We can achieve this with the following test case:
    *   `n = 1`

        This will execute the path: 1 -> 2 -> 3 -> 2 -> 4. Notice that Node and Edge coverage is satisfied with the same input.

*   **Path Coverage (Limited to 2 loop iterations to avoid infinite paths):** Some possible paths include:
    *   1 -> 2 -> 4 (n=0, loop not executed)
    *   1 -> 2 -> 3 -> 2 -> 4 (n=1, loop executed once)
    *   1 -> 2 -> 3 -> 2 -> 3 -> 2 -> 4 (n=2, loop executed twice)

    To achieve this limited path coverage, we need the following test cases:
    *   `n = 0`
    *   `n = 1`
    *   `n = 2`

*   **Prime Path Coverage:** The prime paths are:
    * 1 -> 2 -> 4
    * 1 -> 2 -> 3
    * 2 -> 3 -> 2

    To satisfy this coverage, the following test cases are sufficient:
    * n = 0: Covers 1 -> 2 -> 4
    * n = 1: Covers 1 -> 2 -> 3 -> 2

### 3.2. Example: `exceptionExample(int a, int b)`

```java
public int exceptionExample(int a, int b) {
    int result = 0;
    try {
        result = a / b;
    } catch (ArithmeticException e) {
        result = -1;
    } finally {
        result = result * 2;
    }
    return result;
}
```

**CFG:**

*   **Node 1:** `int result = 0;`
*   **Node 2:** `result = a / b;`
*   **Node 3:** `result = -1;`
*   **Node 4:** `result = result * 2;`
*   **Node 5:** `return result;`

**Edges:**
*   (1, 2)
*   (2, 4)
*   (2, 3)
*   (3, 4)
*   (4, 5)

*   **Node Coverage:** Requires executing nodes 1, 2, 3, 4, and 5.  We can achieve this with the following test cases:
    *   `a = 2, b = 1` (Executes nodes 1, 2, 4, 5)
    *   `a = 2, b = 0` (Executes node 3)

*   **Edge Coverage:** Requires executing edges (1, 2), (2, 4), (2, 3), (3, 4), and (4, 5). We can achieve this with the following test cases:
    *   `a = 2, b = 1` (Executes edges 1->2, 2->4, 4->5)
    *   `a = 2, b = 0` (Executes edges 1->2, 2->3, 3->4, 4->5)

## 4. Strengths and Weaknesses

### 4.1. Strengths

*   **Systematic Approach:**  Provides a structured method for generating test cases based on the control flow of the code.
*   **Identifies Dead Code:** Can help identify code that is never executed (nodes not covered).
*   **Objective:**  Provides measurable coverage metrics.
*   **Effective for Unit Testing:**  Particularly useful for testing individual functions or methods.

### 4.2. Weaknesses

*   **Doesn't Guarantee Functionality:** High coverage doesn't necessarily mean the code is correct, just that all paths have been executed.  It doesn't test data flow, data values, or the *correctness* of the logic.
*   **Complexity:** Creating CFGs for large, complex systems can be challenging and time-consuming.
*   **Path Explosion:**  Path coverage can become impractical for code with many loops, leading to an exponential number of paths to test.  Modified criteria like prime paths provide a more practical approach.
*   **Doesn't Address Data Dependencies:** Focuses only on control flow and ignores the impact of data values on the code's behavior.  Data flow testing techniques address this weakness.

## 5. Practice Questions/Exercises

1.  **Consider the following code snippet:**

    ```java
    public int checkValue(int x) {
        int y = 0;
        if (x > 0) {
            y = x * 2;
        } else if (x < 0) {
            y = x / 2;
        } else {
            y = 1;
        }
        return y;
    }
    ```

    a.  Draw the CFG for this code.
    b.  Provide test cases to achieve Node Coverage.
    c.  Provide test cases to achieve Edge Coverage.

    **Answer:**

    a.  **CFG:**
        *   **Node 1:** `int y = 0;`
        *   **Node 2:** `x > 0` (Condition 1)
        *   **Node 3:** `y = x * 2;`
        *   **Node 4:** `x < 0` (Condition 2)
        *   **Node 5:** `y = x / 2;`
        *   **Node 6:** `y = 1;`
        *   **Node 7:** `return y;`

        **Edges:**
        *   (1, 2)
        *   (2, 3) (x > 0 is true)
        *   (2, 4) (x > 0 is false)
        *   (3, 7)
        *   (4, 5) (x < 0 is true)
        *   (4, 6) (x < 0 is false)
        *   (5, 7)
        *   (6, 7)

    b.  **Node Coverage Test Cases:**
        *   `x = 1` (Covers nodes 1, 2, 3, 7)
        *   `x = -1` (Covers nodes 4, 5)
        *   `x = 0` (Covers node 6)

    c.  **Edge Coverage Test Cases:**
        *   `x = 1` (Covers edges 1->2, 2->3, 3->7)
        *   `x = -1` (Covers edges 2->4, 4->5, 5->7)
        *   `x = 0` (Covers edges 2->4, 4->6, 6->7)

2.  **Consider the following code with a `try-catch` block:**

    ```java
    public int handleException(int a, int b) {
        int result;
        try {
            result = a - b;
            if (result < 0) {
                throw new IllegalArgumentException("Result is negative");
            }
        } catch (IllegalArgumentException e) {
            result = 0;
        }
        return result;
    }
    ```

    a.  Draw the CFG for this code.
    b.  Provide test cases to achieve Edge Coverage.

    **Answer:**

    a.  **CFG:**
        *   **Node 1:** `int result;`
        *   **Node 2:** `result = a - b;` (Try Block)
        *   **Node 3:** `result < 0` (Condition within Try)
        *   **Node 4:** `throw new IllegalArgumentException("Result is negative");` (Throw Exception)
        *   **Node 5:** `result = 0;` (Catch Block)
        *   **Node 6:** `return result;`

        **Edges:**
        *   (1, 2)
        *   (2, 3)
        *   (3, 4)  (result < 0 is true)
        *   (3, 6)  (result < 0 is false)
        *   (4, 5) (Exception Thrown)
        *   (5, 6)

    b.  **Edge Coverage Test Cases:**
        *   `a = 2, b = 1` (Covers edges 1->2, 2->3, 3->6)
        *   `a = 1, b = 2` (Covers edges 1->2, 2->3, 3->4, 4->5, 5->6)

## 6. Important Points to Remember

*   CFGs are a visualization tool, so accuracy is essential. A wrong CFG will lead to incorrect test cases and poor coverage.
*   While path coverage is ideal, it is often impractical due to loops.  Focus on achieving node, edge, or prime path coverage first.
*   Graph coverage criteria only guarantee that the defined structure (nodes, edges, paths) is executed, not that the *logic* is correct.  It should be used in conjunction with other testing techniques.
*   Remember to consider the `finally` block when constructing CFGs for exception handling.
*   Exception handling introduces additional control flow that needs to be covered by your test cases.  Test both scenarios: when an exception is thrown and when it is not.
