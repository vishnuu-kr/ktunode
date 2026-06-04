---
title: "Graph Coverage for Code - Control flow graphs (CFGs) for complex structures (e.g., loops, exceptions)"
subject: "SOFTWARE TESTING"
module: "Module 3: Advanced White Box Testing & Security Testing:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ccc7"
status: "completed"
scrapedAt: "2026-05-20T17:26:38.343Z"
---
# SOFTWARE TESTING - Module 3: Advanced White Box Testing & Security Testing

## Topic: Graph Coverage for Code - Control Flow Graphs (CFGs) for Complex Structures

---

### 1. Introduction to Control Flow Graphs (CFGs)

**Key Concept:** A Control Flow Graph (CFG) is a graphical representation of all possible paths that execution can take through a program. It's a fundamental tool in white-box testing for understanding and analyzing the structure of code.

**Definition:**
*   **Nodes:** Represent basic blocks of code (a sequence of statements that are executed consecutively without any branches in or out, except at the beginning and end).
*   **Edges:** Represent the transfer of control from one basic block to another.

**Purpose in Software Testing:**
*   Visualize the execution paths of a program.
*   Identify all possible execution paths.
*   Design test cases to achieve various levels of coverage.
*   Detect potential dead code or unreachable code.
*   Analyze program complexity.

---

### 2. Building Control Flow Graphs (CFGs)

**Process:**
1.  **Identify Basic Blocks:**
    *   The first statement of a program is the start of a basic block.
    *   Any statement that is the target of a branch (e.g., `goto`, `continue`, `break`, `return`, function call) is the start of a new basic block.
    *   Any statement immediately following a branch or conditional statement is the start of a new basic block.
2.  **Represent Basic Blocks as Nodes:** Each identified basic block is represented as a node in the CFG.
3.  **Draw Edges:**
    *   An edge is drawn from node A to node B if control can flow directly from the last statement of basic block A to the first statement of basic block B.
    *   Conditional branches create multiple outgoing edges from a node.
    *   Unconditional branches create a single outgoing edge.
    *   The end of a program or a `return` statement typically terminates a path.

**Example (Simple):**

```java
public int calculate(int a, int b) {
    int result = 0; // BB1
    if (a > b) {    // BB2
        result = a - b; // BB3
    } else {        // BB4
        result = b - a; // BB5
    }
    return result;  // BB6
}
```

**CFG Representation:**

*   **BB1:** `int result = 0;`
*   **BB2:** `if (a > b)`
*   **BB3:** `result = a - b;`
*   **BB4:** `else` (implicitly, the path taken when `a <= b`)
*   **BB5:** `result = b - a;`
*   **BB6:** `return result;`

```
      +-------+
      |  BB1  |
      +-------+
          |
          v
      +-------+
      |  BB2  |
      +-------+
      /       \
     / (true)  \ (false)
    v           v
+-------+       +-------+
|  BB3  |       |  BB5  |
+-------+       +-------+
    \           /
     \         /
      \       /
       v     v
      +-------+
      |  BB6  |
      +-------+
```

---

### 3. CFGs for Complex Structures

#### 3.1 Loops

Loops introduce cycles in the CFG. Common loop structures include `for`, `while`, and `do-while`.

**3.1.1 `while` Loops**

```java
public void processWhile(int count) {
    int i = 0;      // BB1
    while (i < count) { // BB2
        // Body of loop
        System.out.println(i); // BB3
        i++;                  // BB4
    }
    System.out.println("Loop finished"); // BB5
}
```

**CFG Representation:**

*   **BB1:** `int i = 0;`
*   **BB2:** `while (i < count)` (Loop condition)
*   **BB3:** `System.out.println(i);`
*   **BB4:** `i++;`
*   **BB5:** `System.out.println("Loop finished");`

```
      +-------+
      |  BB1  |
      +-------+
          |
          v
      +-------+
      |  BB2  | <---+ (Loop back)
      +-------+     |
      /       \     |
     / (true)  \ (false)
    v           v
+-------+       +-------+
|  BB3  |       |  BB5  |
+-------+       +-------+
    |
    v
+-------+
|  BB4  |
+-------+
    |
    +-------+
```

**Key Points for Loops:**
*   The loop condition is typically a node.
*   An edge from the loop condition node to the loop body (if true) and an edge from the loop body back to the loop condition node.
*   An edge from the loop condition node to the statement following the loop (if false).

**3.1.2 `for` Loops**

`for` loops have initialization, condition, and update steps, which can be represented in the CFG.

```java
public void processFor(int limit) {
    for (int i = 0; i < limit; i++) { // BB1 (init), BB2 (condition), BB4 (update)
        System.out.println(i);      // BB3 (body)
    }
    System.out.println("For loop finished"); // BB5
}
```

**CFG Representation:**

*   **BB1:** `int i = 0;` (Initialization)
*   **BB2:** `i < limit` (Condition)
*   **BB3:** `System.out.println(i);` (Loop Body)
*   **BB4:** `i++` (Update)
*   **BB5:** `System.out.println("For loop finished");`

```
      +-------+
      |  BB1  |
      +-------+
          |
          v
      +-------+
      |  BB2  | <---+ (Loop back via update)
      +-------+     |
      /       \     |
     / (true)  \ (false)
    v           v
+-------+       +-------+
|  BB3  |       |  BB5  |
+-------+       +-------+
    |
    v
+-------+
|  BB4  |
+-------+
    |
    +-------+
```

**3.1.3 `do-while` Loops**

`do-while` loops execute the body at least once.

```java
public void processDoWhile(int limit) {
    int i = 0;      // BB1
    do {            // BB2 (implicit start of do block)
        System.out.println(i); // BB3
        i++;                  // BB4
    } while (i < limit); // BB5 (condition)
    System.out.println("Do-while loop finished"); // BB6
}
```

**CFG Representation:**

*   **BB1:** `int i = 0;`
*   **BB2:** Start of `do` block
*   **BB3:** `System.out.println(i);`
*   **BB4:** `i++;`
*   **BB5:** `i < limit` (Condition)
*   **BB6:** `System.out.println("Do-while loop finished");`

```
      +-------+
      |  BB1  |
      +-------+
          |
          v
      +-------+
      |  BB2  |
      +-------+
          |
          v
      +-------+
      |  BB3  |
      +-------+
          |
          v
      +-------+
      |  BB4  |
      +-------+
          |
          v
      +-------+
      |  BB5  | <---+ (Loop back)
      +-------+     |
          | (true)  |
          |         |
          +---------+
          | (false)
          v
      +-------+
      |  BB6  |
      +-------+
```

#### 3.2 Exception Handling (`try-catch-finally`)

Exception handling introduces alternative control flow paths that are crucial for testing.

```java
public void processException(int value) {
    try { // BB1
        if (value < 0) { // BB2
            throw new IllegalArgumentException("Value cannot be negative"); // BB3
        }
        System.out.println("Value is: " + value); // BB4
    } catch (IllegalArgumentException e) { // BB5
        System.err.println("Caught exception: " + e.getMessage()); // BB6
    } finally { // BB7
        System.out.println("Finally block executed"); // BB8
    }
    System.out.println("Process complete"); // BB9
}
```

**CFG Representation:**

*   **BB1:** `try {` (Start of try block)
*   **BB2:** `if (value < 0)` (Conditional inside try)
*   **BB3:** `throw new IllegalArgumentException(...)` (Exception thrown)
*   **BB4:** `System.out.println("Value is: " + value);` (Normal execution path within try)
*   **BB5:** `catch (IllegalArgumentException e)` (Catch block)
*   **BB6:** `System.err.println(...)` (Code inside catch)
*   **BB7:** `finally {` (Start of finally block)
*   **BB8:** `System.out.println("Finally block executed");` (Code inside finally)
*   **BB9:** `System.out.println("Process complete");` (Code after try-catch-finally)

**CFG Diagram:**

```
      +-------+
      |  BB1  |
      +-------+
          |
          v
      +-------+
      |  BB2  |
      +-------+
      /       \
     / (true)  \ (false)
    v           v
+-------+       +-------+
|  BB3  |       |  BB4  |
+-------+       +-------+
    | (exception thrown) |
    +------------>+-------+
                  |       |
                  |       |
                  v       v
              +-------+
              |  BB5  |  (Catch block entry)
              +-------+
                  |
                  v
              +-------+
              |  BB6  |
              +-------+
                  |
                  +-----------+
                              |
                              v
                          +-------+
                          |  BB7  | (Finally block entry)
                          +-------+
                              |
                              v
                          +-------+
                          |  BB8  |
                          +-------+
                              |
                              v
                          +-------+
                          |  BB9  |
                          +-------+

```

**Key Points for Exception Handling:**
*   The `try` block is a sequence of basic blocks.
*   A `throw` statement creates an edge to the corresponding `catch` block.
*   If an exception is thrown and not caught, the program terminates.
*   The `catch` block has edges from potentially throwing statements within the `try` block.
*   The `finally` block is executed regardless of whether an exception was thrown or caught. It has edges leading to it from the end of the `try` block (if no exception) and from the `catch` block (if an exception occurred).
*   Control flow exits the `finally` block to the statement after the `try-catch-finally` structure.

#### 3.3 Nested Structures

Nested loops and conditional statements create more complex CFGs.

**Example (Nested Loop):**

```java
public void nestedLoops(int limit) {
    for (int i = 0; i < limit; i++) { // BB1 (i init), BB2 (i condition), BB5 (i update)
        for (int j = 0; j < limit; j++) { // BB3 (j init), BB4 (j condition), BB7 (j update)
            System.out.println("i: " + i + ", j: " + j); // BB6 (inner body)
        }
    }
    System.out.println("Nested loops done"); // BB8
}
```

**CFG Representation Sketch:**

*   The outer loop's condition (`BB2`) leads to the inner loop's initialization (`BB3`).
*   The inner loop's condition (`BB4`) leads to the inner loop's body (`BB6`).
*   The inner loop's body (`BB6`) leads to the inner loop's update (`BB7`).
*   The inner loop's update (`BB7`) leads back to the inner loop's condition (`BB4`).
*   When the inner loop's condition is false, control flows from `BB4` to the outer loop's update (`BB5`).
*   The outer loop's update (`BB5`) leads back to the outer loop's condition (`BB2`).
*   When the outer loop's condition is false, control flows to the statement after the outer loop (`BB8`).

**Important Point to Remember:** Building CFGs for nested structures requires careful tracking of control flow through each level of nesting.

---

### 4. Graph Coverage Criteria

Graph coverage criteria define the extent to which the CFG must be traversed by test cases. Higher coverage generally implies more thorough testing.

#### 4.1 Statement Coverage (or Node Coverage)

*   **Definition:** Every node (basic block) in the CFG is executed at least once.
*   **Achieved by:** Executing every statement in the program.
*   **Example:** In the simple `calculate` example, executing `calculate(5, 3)` (which takes the `a > b` path) covers BB1, BB2, BB3, BB6. Executing `calculate(3, 5)` covers BB1, BB2, BB5, BB6. Together, these two calls achieve 100% statement coverage.

#### 4.2 Branch Coverage (or Edge Coverage)

*   **Definition:** Every edge in the CFG is traversed at least once.
*   **Achieved by:** Ensuring that for every decision point (e.g., `if`, `while`), both the true and false outcomes are executed.
*   **Example:** For the `calculate` example, we need one test where `a > b` is true (traverses BB2 -> BB3) and one test where `a > b` is false (traverses BB2 -> BB5). This covers all edges.

#### 4.3 Path Coverage

*   **Definition:** Every possible independent path from the start node to the end node in the CFG is executed at least once.
*   **Challenge:** The number of paths can be exponential, especially with loops. This is often infeasible for complex programs.
*   **Types of Paths:**
    *   **Simple Path:** A path where no node is repeated.
    *   **Independent Path:** A path that introduces at least one new edge or node that hasn't been covered by previous paths.
*   **Cyclomatic Complexity (V(G)):** A measure of the number of linearly independent paths through a program's source code. It indicates the minimum number of test cases required to achieve branch coverage.
    *   `V(G) = E - N + 2P` (where E = edges, N = nodes, P = connected components, usually P=1 for a single program)
    *   Alternatively, `V(G) = number of decision points + 1`.

**Example: Cyclomatic Complexity Calculation for `calculate`:**
*   Nodes (N): 6 (BB1 to BB6)
*   Edges (E): 7 (BB1->BB2, BB2->BB3, BB2->BB5, BB3->BB6, BB5->BB6)
*   `V(G) = 7 - 6 + 2*1 = 3`
*   Decision points: 1 (BB2)
*   `V(G) = 1 + 1 = 2`
    *Wait, let's re-evaluate the diagram for `calculate`.*
    ```
          +-------+
          |  BB1  |
          +-------+
              |
              v
          +-------+
          |  BB2  |
          +-------+
          /       \
         / (true)  \ (false)
        v           v
    +-------+       +-------+
    |  BB3  |       |  BB5  |
    +-------+       +-------+
        \           /
         \         /
          \       /
           v     v
          +-------+
          |  BB6  |
          +-------+
    ```
    *   Nodes: BB1, BB2, BB3, BB5, BB6 (5 nodes, assuming BB4 is implicit path from BB2 to BB5)
    *   Edges: BB1->BB2, BB2->BB3, BB2->BB5, BB3->BB6, BB5->BB6 (5 edges)
    *   `V(G) = 5 - 5 + 2*1 = 2`
    *   Decision points: 1 (BB2)
    *   `V(G) = 1 + 1 = 2`

    *This V(G) of 2 indicates we need at least 2 independent paths.*
    *   Path 1: BB1 -> BB2 -> BB3 -> BB6
    *   Path 2: BB1 -> BB2 -> BB5 -> BB6
    *   These two paths cover all statements and all edges.

#### 4.4 Modified Condition/Decision Coverage (MC/DC)

*   **Definition:** A stronger coverage criterion often used in safety-critical systems.
    *   **Condition Coverage:** Every condition in a decision is evaluated to both true and false.
    *   **Decision Coverage:** Every decision takes on all possible outcomes.
    *   **MC/DC:** For a decision with multiple conditions (e.g., `if (cond1 && cond2)`), each condition must independently affect the outcome of the decision. This means for every condition, there must be pairs of test cases where the condition changes value, but the overall decision outcome remains the same.

**Example: `if (a > 0 && b < 10)`**
*   **Conditions:** `a > 0`, `b < 10`
*   **Decision Outcome:** True if both are true, False otherwise.

To achieve MC/DC:
1.  Test case 1: `a > 0` true, `b < 10` true (Decision: True)
2.  Test case 2: `a > 0` false, `b < 10` false (Decision: False)
3.  Test case 3: `a > 0` true, `b < 10` false (Decision: False) - `a > 0` must be true and affect outcome (when `b < 10` is false).
4.  Test case 4: `a > 0` false, `b < 10` true (Decision: False) - `b < 10` must be true and affect outcome (when `a > 0` is false).

**Note:** MC/DC is complex and focuses on the individual contribution of each condition to the decision's outcome.

---

### 5. Graph Coverage for Security Testing

CFGs are valuable for identifying potential vulnerabilities by analyzing control flow, especially in the context of security.

*   **Unreachable Code:** Code that can never be executed might be forgotten or overlooked during security reviews, potentially hiding vulnerabilities. CFGs help identify such dead code.
*   **Path Analysis for Sensitive Operations:**
    *   Trace paths that involve authentication, authorization, data encryption/decryption, or sensitive data handling.
    *   Identify if these operations are executed under unexpected or insecure conditions.
*   **Input Validation and Sanitization:**
    *   Analyze paths where user input is processed.
    *   Ensure that all possible input paths are handled correctly and are not exploited to bypass security checks or execute malicious code.
*   **Exception Handling Security:**
    *   Examine how exceptions are caught and handled.
    *   An improperly handled exception might leak sensitive information or allow an attacker to gain control.
    *   Ensure that `finally` blocks correctly clean up resources, even in the presence of exceptions, to prevent resource exhaustion or state leakage.
*   **Loop Vulnerabilities:**
    *   Analyze loops for potential denial-of-service (DoS) attacks if they can be made to run indefinitely or consume excessive resources.
    *   Consider buffer overflow vulnerabilities within loop bodies if data is processed without proper bounds checking.

**Example Scenario:**
Consider a function that processes a user ID. If the path leading to the user ID being used as an index into an array is not properly guarded by checks for valid ID ranges (e.g., due to an exception path being taken without resetting a valid flag), it could lead to an out-of-bounds access. A CFG helps visualize these paths.

---

### 6. Practice Questions & Exercises

**Exercise 1: CFG Construction**

Draw the Control Flow Graph for the following Java method. Identify the basic blocks.

```java
public int process(int x, int y) {
    int result = 0;
    if (x > 5) {
        result = x * 2;
        if (y > 10) {
            result = result + y;
        } else {
            result = result - y;
        }
    } else {
        result = y / 2;
    }
    return result;
}
```

**Exercise 2: Coverage Criteria**

For the method in Exercise 1:
a) What is the Cyclomatic Complexity of the CFG?
b) List test cases required to achieve 100% Branch Coverage.
c) For one of the branches, explain how to create a test case for MC/DC if the condition were `(x > 5 && y > 10)`.

**Exercise 3: Loops and Exceptions**

Consider the following code snippet. Draw its CFG, paying close attention to the `while` loop and the `try-catch` block.

```java
public void complexMethod(int counter) {
    int i = 0;
    try {
        while (i < counter) {
            if (counter % 2 == 0) {
                i++;
            } else {
                i += 2;
                throw new RuntimeException("Odd counter");
            }
        }
    } catch (RuntimeException e) {
        System.out.println("Handled: " + e.getMessage());
    }
    System.out.println("Done");
}
```

---

### 7. Answers to Practice Questions

**Exercise 1: CFG Construction**

**Basic Blocks:**

*   **BB1:** `int result = 0;`
*   **BB2:** `if (x > 5)`
*   **BB3:** `result = x * 2;`
*   **BB4:** `if (y > 10)`
*   **BB5:** `result = result + y;`
*   **BB6:** `result = result - y;`
*   **BB7:** `result = y / 2;`
*   **BB8:** `return result;`

**CFG Diagram:**

```
      +-------+
      |  BB1  |
      +-------+
          |
          v
      +-------+
      |  BB2  |
      +-------+
      /       \
     / (true)  \ (false)
    v           v
+-------+       +-------+
|  BB3  |       |  BB7  |
+-------+       +-------+
    |               |
    v               |
+-------+           |
|  BB4  |           |
+-------+           |
/       \           |
/ (true)  \ (false) |
v           v       |
+-------+   +-------+ |
|  BB5  |   |  BB6  | |
+-------+   +-------+ |
    \         /       |
     \       /        |
      +-----+---------+
            |
            v
      +-------+
      |  BB8  |
      +-------+
```

**Exercise 2: Coverage Criteria**

a) **Cyclomatic Complexity (V(G))**
*   Nodes: 8 (BB1 to BB8)
*   Edges: 9 (BB1->BB2, BB2->BB3, BB2->BB7, BB3->BB4, BB4->BB5, BB4->BB6, BB5->BB8, BB6->BB8, BB7->BB8)
*   `V(G) = E - N + 2P = 9 - 8 + 2*1 = 3`
*   Alternatively, decision points: BB2 (`x > 5`), BB4 (`y > 10`). `V(G) = 2 + 1 = 3`.
*   **Answer: 3**

b) **Branch Coverage Test Cases:**
We need to cover 3 independent paths.
*   **Path 1 (x <= 5):** BB1 -> BB2 (false) -> BB7 -> BB8
    *   Test Case: `process(5, 10)` or `process(0, 0)`
*   **Path 2 (x > 5, y <= 10):** BB1 -> BB2 (true) -> BB3 -> BB4 (false) -> BB6 -> BB8
    *   Test Case: `process(10, 5)`
*   **Path 3 (x > 5, y > 10):** BB1 -> BB2 (true) -> BB3 -> BB4 (true) -> BB5 -> BB8
    *   Test Case: `process(10, 15)`

**Summary of Test Cases for Branch Coverage:**
1.  `process(5, 10)` (or any `x <= 5`)
2.  `process(10, 5)` (or any `x > 5` and `y <= 10`)
3.  `process(10, 15)` (or any `x > 5` and `y > 10`)

c) **MC/DC for `(x > 5 && y > 10)`:**
The decision is `x > 5 && y > 10`. Conditions are `C1: x > 5` and `C2: y > 10`.

*   **Achieve C1 True, C2 True:** Test case `process(10, 15)`. Decision is True. (Covers C1 true, C2 true)
*   **Achieve C1 False, C2 False:** Test case `process(5, 5)`. Decision is False. (Covers C1 false, C2 false)
*   **Achieve C1 True, C2 False (and Decision False):** C1 must be true, C2 must be false. Test case `process(10, 5)`. Decision is False. This shows `C1` affects the outcome (if `C2` were true, the outcome would be true, but since `C2` is false, the outcome is false).
*   **Achieve C1 False, C2 True (and Decision False):** C1 must be false, C2 must be true. Test case `process(5, 15)`. Decision is False. This shows `C2` affects the outcome (if `C1` were true, the outcome would be true, but since `C1` is false, the outcome is false).

**Exercise 3: Loops and Exceptions CFG**

**Basic Blocks:**

*   **BB1:** `int i = 0;`
*   **BB2:** `try {` (start of try block)
*   **BB3:** `while (i < counter)` (loop condition)
*   **BB4:** `if (counter % 2 == 0)` (conditional inside loop)
*   **BB5:** `i++;`
*   **BB6:** `i += 2;`
*   **BB7:** `throw new RuntimeException(...)`
*   **BB8:** `catch (RuntimeException e)` (catch block)
*   **BB9:** `System.out.println("Handled: " + e.getMessage());`
*   **BB10:** `System.out.println("Done");`

**CFG Diagram Sketch:**

```
      +-------+
      |  BB1  |
      +-------+
          |
          v
      +-------+
      |  BB2  |
      +-------+
          |
          v
      +-------+
      |  BB3  | <---+ (Loop back)
      +-------+     |
      /       \     |
     / (true)  \ (false)
    v           v
+-------+       +-------+
|  BB4  |       |  BB10 |
+-------+       +-------+
/       \
/ (true)  \ (false)
v           v
+-------+   +-------+
|  BB5  |   |  BB6  |
+-------+   +-------+
    |           |
    +---+       +---+
        |           |
        v           v
    +-------+   +-------+
    |  BB?  |   |  BB7  | <--- (Implicit BB before throw)
    +-------+   +-------+
                    | (exception thrown)
                    +----------------+
                                     |
                                     v
                                 +-------+
                                 |  BB8  | (Catch)
                                 +-------+
                                     |
                                     v
                                 +-------+
                                 |  BB9  |
                                 +-------+
                                     |
                                     +--------------+
                                                    |
                                                    v
                                                +-------+
                                                | BB10  |
                                                +-------+

```
*Self-correction:* The `while` condition (`BB3`) leads to the conditional (`BB4`). The `if` branches (`BB5` and `BB6`) both eventually lead back to the `while` condition (`BB3`), *unless* an exception is thrown. The `throw` statement (`BB7`) creates a direct edge to the catch block (`BB8`). The `finally` block is missing in this code, but if it were present, it would receive edges from both the end of the `try` block (normal exit) and the end of the `catch` block.

A more accurate representation for the `try-catch` with the loop inside:

```
      +-------+
      |  BB1  |
      +-------+
          |
          v
      +-------+
      |  BB2  |  <-- Start of TRY
      +-------+
          |
          v
      +-------+
      |  BB3  |  <-- WHILE condition
      +-------+
      /       \
     / (true)  \ (false)
    v           v
+-------+       +-------+
|  BB4  |       |  BB10 |  <-- End of TRY (normal exit)
+-------+       +-------+
/       \
/ (true)  \ (false)
v           v
+-------+   +-------+
|  BB5  |   |  BB6  |
+-------+   +-------+
    |           |
    +-----+     +-----+
          |     |
          v     v
      +-------+ <--- Target of BB6 (or implicit block leading to BB7)
      |  BB7  |  <-- THROW
      +-------+
          | (exception)
          v
      +-------+
      |  BB8  |  <-- CATCH
      +-------+
          |
          v
      +-------+
      |  BB9  |
      +-------+
          |
          +-----------------+
                            |
                            v
                        +-------+
                        | BB10  |
                        +-------+
```

---

### 8. Important Points to Remember

*   **CFGs are essential for understanding code flow** and designing effective white-box tests.
*   **Basic blocks** are contiguous sequences of code without branches in or out.
*   **Loops create cycles** in CFGs, and `do-while` loops execute their body at least once.
*   **Exception handling introduces non-linear control flow paths** that must be accounted for in CFGs.
*   **Coverage criteria** (Statement, Branch, Path) guide test case design by defining what needs to be exercised.
*   **Cyclomatic Complexity (V(G))** is a metric for code complexity and the minimum number of test cases for branch coverage.
*   **MC/DC** is a stronger criterion often used for critical systems, focusing on the independent impact of each condition.
*   **CFGs are valuable in security testing** for identifying unreachable code, analyzing sensitive operation paths, and understanding potential vulnerability points.

---
