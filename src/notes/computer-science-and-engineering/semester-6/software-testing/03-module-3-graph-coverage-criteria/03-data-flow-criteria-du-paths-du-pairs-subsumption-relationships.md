---
title: "Data Flow Criteria - du paths, du pairs, subsumption relationships"
subject: "SOFTWARE TESTING"
module: "Module 3: Graph Coverage Criteria "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bafa"
status: "completed"
scrapedAt: "2026-05-20T16:57:24.532Z"
---
# SOFTWARE TESTING - Module 3: Graph Coverage Criteria - Data Flow Criteria

## Topic: Data Flow Criteria - du paths, du pairs, subsumption relationships

**Learning Outcomes:**

*   Understand the concepts of definitions, uses, and def-use (du) paths in the context of data flow testing.
*   Define and identify du-pairs and du-paths.
*   Apply data flow criteria to generate test cases.
*   Understand and explain the subsumption relationships between different data flow coverage criteria.
*   Analyze code to identify definitions and uses of variables.
*   Evaluate the effectiveness of different data flow coverage criteria.

### 1. Key Concepts and Definitions

*   **Data Flow Testing:** A white-box testing technique that focuses on the flow of data through a program. It aims to test the links between variable definitions and their uses.

*   **Definition (Def):** An assignment statement that assigns a value to a variable.  A definition *defines* the variable. A variable is defined at a location where its value is assigned or modified.

*   **Use (Use):** An occurrence of a variable in a statement where its value is accessed. A variable is *used* at a location where its current value is accessed. There are two kinds of uses:

    *   **Predicate Use (p-use):**  A use of a variable in a predicate (e.g., in an `if` statement, `while` loop, `for` loop condition`). It affects the control flow of the program.

    *   **Computational Use (c-use):** A use of a variable in a computation (e.g., on the right-hand side of an assignment statement, in an expression, as a parameter to a function call). It directly affects the value of other variables.

*   **Def-Use (du) Path:**  A path in the control flow graph (CFG) from a node *n* where a variable *v* is defined to a node *m* where the variable *v* is used, such that the definition of *v* at *n* is *unambiguous* and the path is *definition-clear* with respect to *v*.

    *   **Unambiguous Definition:** The variable 'v' is definitely defined at node 'n'
    *   **Definition-Clear Path:**  A path from node *n* to node *m* is definition-clear with respect to variable *v* if *v* is not redefined along that path (i.e., there is no definition of *v* on the path between *n* and *m*, *excluding* *n* and *m*).

*   **Def-Use (du) Pair:** A pair of locations (n,m) such that 'n' contains a definition of variable 'v' and 'm' contains a use of variable 'v', and there exists a def-clear path between n and m.

### 2. Data Flow Coverage Criteria

*   **All-Defs Coverage (ADC):** For each definition of a variable *v*, ensure that at least one use of *v* is covered.

    *   Requires at least one du-path from each definition to a use.

*   **All-Uses Coverage (AUC):** For each definition of a variable *v*, ensure that all possible uses of *v* are covered.

    *   Requires all du-paths from each definition to every use.

*   **All-Def-Use Paths (ADUP):**  Requires covering all def-use paths from each definition to each use of a variable. For each definition of a variable *v*, ensure that all possible def-use paths from that definition to all its uses are covered.

    *   This is the strongest of the basic data flow criteria.

*   **All-Predicate-Uses/Some-Computational-Uses (APU/SCU):**  For each definition, ensure that all predicate uses are covered, and if there are no predicate uses, ensure that at least one computational use is covered.

*   **All-Computational-Uses/Some-Predicate-Uses (ACU/SPU):** For each definition, ensure that all computational uses are covered, and if there are no computational uses, ensure that at least one predicate use is covered.

### 3. Examples

**Example Code:**

```java
public class Example {
    public int calculate(int x, int y) {
        int z = x + y; // Definition of z (location 1)
        if (z > 10) { // Predicate use of z (location 2)
            z = z - 5;  // Definition of z (location 3)
        }
        int result = z * x; // Computational use of z and x (location 4)
        return result;
    }
}
```

**Analysis:**

*   **Variable z:**
    *   Definition at location 1: `z = x + y;`
    *   Predicate use at location 2: `if (z > 10)`
    *   Definition at location 3: `z = z - 5;`
    *   Computational use at location 4: `int result = z * x;`

*   **Variable x:**
    *   Definition at parameter `int x`
    *   Computational use at location 1: `int z = x + y;`
    *   Computational use at location 4: `int result = z * x;`

*   **Variable y:**
    *   Definition at parameter `int y`
    *   Computational use at location 1: `int z = x + y;`

**Du-Pairs for z:**

*   (1, 2): Definition at 1, predicate use at 2.  Path: 1 -> 2
*   (1, 4): Definition at 1, computational use at 4. Path: 1 -> 2 (false) -> 4
*   (3, 4): Definition at 3, computational use at 4. Path: 3 -> 4

**Du-Paths for z:**

*   Path from 1 to 2: 1 -> 2
*   Path from 1 to 4: 1 -> 2 (false) -> 4
*   Path from 3 to 4: 3 -> 4

**Test Cases (Illustrative):**

*   **To cover du-pair (1, 2):** `x = 5, y = 6` (z = 11, z > 10 is true)
*   **To cover du-pair (1, 4):** `x = 1, y = 2` (z = 3, z > 10 is false, result = 3)
*   **To cover du-pair (3, 4):** `x = 5, y = 6` (z = 11, z > 10 is true, z = 6, result = 30).  Note that to reach the definition at 3, z > 10 *must* be true.

**Example 2:**

```java
public class Example2 {
    public int process(int a) {
        int b = 0; // Definition of b (location 1)
        if (a > 5) { // p-use of a (location 2)
            b = a * 2; // Definition of b (location 3)
        }
        int c = b + 1; // c-use of b (location 4)
        return c;
    }
}
```

**Du-Pairs for b:**

* (1, 4): b defined at line 1, used at line 4. Path: 1 -> 2 (false) -> 4
* (3, 4): b defined at line 3, used at line 4. Path: 1 -> 2 (true) -> 3 -> 4

### 4. Subsumption Relationships

Subsumption is a relationship between coverage criteria.  Criterion A *subsumes* criterion B if satisfying criterion A always satisfies criterion B.  In other words, if we satisfy A, we automatically satisfy B.

For Data Flow Criteria:

*   **All-Def-Use Paths (ADUP) subsumes All-Uses Coverage (AUC).**  If you cover all def-use paths, you are by definition covering all uses.
*   **All-Uses Coverage (AUC) subsumes All-Defs Coverage (ADC).** If you cover all uses for each definition, you are definitely covering at least one use for each definition.
*   **APU/SCU and ACU/SPU are not directly comparable nor do they subsume ADC or AUC generally**.  They focus on different types of uses.

Transitive Property: If A subsumes B and B subsumes C, then A subsumes C. Therefore ADUP subsumes ADC.

**Diagram:**

```
ADUP  --> AUC --> ADC
```

ADUP (All Def-Use Paths) is the strongest. ADC (All-Defs Coverage) is the weakest.  Stronger criteria require more test cases, but typically provide greater fault detection.

### 5. Applying Data Flow Criteria to Generate Test Cases

1.  **Draw the Control Flow Graph (CFG):** Represent the program's control flow as a graph.  Nodes represent statements or basic blocks, and edges represent the flow of control between them.
2.  **Identify Definitions and Uses:**  Analyze the code to determine where variables are defined and used (both p-uses and c-uses).
3.  **Create Def-Use Pairs and Paths:**  For each variable, list all def-use pairs and paths.
4.  **Select Coverage Criteria:**  Choose the data flow coverage criterion you want to satisfy (e.g., All-Defs, All-Uses, All-Def-Use Paths).
5.  **Generate Test Cases:** Design test cases that will execute the necessary paths to satisfy the chosen criterion.
6.  **Verify Coverage:**  After running the tests, ensure that the selected paths have been executed. You may need code coverage tools for this.
7.  **Iterate:** If the desired coverage is not achieved, add more test cases and repeat the process.

### 6. Practice Questions / Exercises

**Question 1:**

Consider the following code snippet:

```java
public int foo(int x, int y) {
    int z = x + y; // Location 1
    if (x > 0) { // Location 2
        z = z * x; // Location 3
    } else {
        z = z - y; // Location 4
    }
    return z; // Location 5
}
```

a) Identify the definitions and uses (p-use and c-use) for the variable `z`.
b) List the du-pairs for `z`.
c) List the du-paths for `z`.

**Answer 1:**

a)
    *   Definitions:
        *   Location 1: `z = x + y;`
        *   Location 3: `z = z * x;`
        *   Location 4: `z = z - y;`
    *   Uses:
        *   None in this code snippet. `z` is returned and the return statement is not a use.

b)
* (1,5): z defined at 1, used at return 5. Path: 1 -> 2 -> 3 -> 5 and 1 -> 2 -> 4 -> 5
* (3,5): z defined at 3, used at return 5. Path: 3 -> 5
* (4,5): z defined at 4, used at return 5. Path: 4 -> 5

c)
*   1 -> 2 (x > 0 is true) -> 3 -> 5
*   1 -> 2 (x > 0 is false) -> 4 -> 5
*   3 -> 5
*   4 -> 5

**Question 2:**

Explain the difference between All-Defs Coverage and All-Uses Coverage.  Which is stronger?

**Answer 2:**

All-Defs Coverage requires that for each definition of a variable, at least *one* use of that variable is covered by a test case.  All-Uses Coverage requires that for each definition of a variable, *all* possible uses of that variable are covered by test cases.

All-Uses Coverage is stronger than All-Defs Coverage.  If you satisfy All-Uses Coverage, you automatically satisfy All-Defs Coverage, but the reverse is not necessarily true.

**Question 3:**

What does it mean for a path to be "definition-clear" with respect to a variable?

**Answer 3:**

A path from node *n* to node *m* is definition-clear with respect to a variable *v* if *v* is not redefined along that path (i.e., there is no definition of *v* on the path between *n* and *m*, *excluding* *n* and *m*). In other words, the value of `v` at node `m` is directly influenced by its definition at node `n` without any intervening modifications.

### 7. Important Points to Remember

*   Data flow testing complements control flow testing.
*   Identifying definitions and uses accurately is crucial.
*   Understanding the CFG of the code is essential for generating du-paths.
*   Stronger data flow coverage criteria can be more effective at revealing faults but require more test cases.
*   Code coverage tools can help automate the process of verifying coverage during testing.
*   The choice of data flow criterion depends on the criticality of the code being tested and the resources available for testing.
