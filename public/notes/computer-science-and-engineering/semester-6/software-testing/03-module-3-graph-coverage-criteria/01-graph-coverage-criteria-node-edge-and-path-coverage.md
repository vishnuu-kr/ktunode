---
title: "Graph Coverage Criteria - Node, edge, and path coverage"
subject: "SOFTWARE TESTING"
module: "Module 3: Graph Coverage Criteria "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8baf8"
status: "completed"
scrapedAt: "2026-05-20T16:57:23.110Z"
---
## SOFTWARE TESTING - Module 3: Graph Coverage Criteria - Node, Edge, and Path Coverage

**Module:** Module 3: Graph Coverage Criteria
**Topic:** Node, Edge, and Path Coverage

**Learning Outcomes:**

*   Understand the fundamental concepts of graph coverage criteria in software testing.
*   Define and apply node coverage.
*   Define and apply edge coverage.
*   Define and apply path coverage.
*   Identify the strengths and weaknesses of each coverage criterion.
*   Analyze the relationships between node, edge, and path coverage.
*   Be able to derive test paths from a control flow graph using these criteria.

---

**1. Introduction to Graph Coverage Criteria**

*   **What are Graph Coverage Criteria?** Graph coverage criteria are structural testing techniques that use a graph representation of the software under test (SUT) to guide test case design. The goal is to cover different elements (nodes, edges, paths) of the graph to improve the test suite's effectiveness in revealing defects.
*   **Why Use Graph Coverage?**
    *   Provides a structured way to design tests.
    *   Helps to increase confidence in the software's correctness.
    *   Can reveal defects in the control flow of the software.
    *   Offers a relatively simple and visual approach to test design.
*   **Graph Representations:**
    *   **Control Flow Graph (CFG):** A directed graph representing the control flow of a program.
        *   **Nodes:** Represent basic blocks of code (sequential statements with a single entry and exit point).
        *   **Edges:** Represent the flow of control between basic blocks.
    *   **Other Graph Types:**  State models, data flow diagrams, etc., can also be used for graph-based testing, but the fundamental coverage principles remain the same. For simplicity, we will primarily focus on the CFG.

**2. Node Coverage (Statement Coverage)**

*   **Definition:** Node coverage requires that each *node* in the control flow graph is visited at least once during testing.
*   **Goal:** To ensure that every statement in the program is executed at least once.
*   **How to Achieve Node Coverage:** Design test cases that execute a path that passes through each node in the CFG.
*   **Example:**

    ```
    void example(int x) {
        1. if (x > 0) {
        2.   System.out.println("Positive");
        3. } else {
        4.   System.out.println("Non-positive");
        5. }
        6. System.out.println("Done");
    }
    ```

    *   **CFG:**
        *   Node 1: `if (x > 0)`
        *   Node 2: `System.out.println("Positive")`
        *   Node 3: `else` (Implicit)
        *   Node 4: `System.out.println("Non-positive")`
        *   Node 5: `System.out.println("Done")`
    *   **Test Cases for Node Coverage:**
        *   TC1: x = 1 (Path: 1-2-5)
        *   TC2: x = -1 (Path: 1-4-5)

*   **Strengths:**
    *   Simple to understand and apply.
    *   Ensures that every line of code is executed.
*   **Weaknesses:**
    *   Does not cover branches or combinations of conditions.
    *   May not reveal errors in conditional logic.
    *   Does not test loops sufficiently.
*   **Important Point:** Node coverage is often considered the *minimum* level of coverage required.

**3. Edge Coverage (Branch Coverage)**

*   **Definition:** Edge coverage requires that each *edge* in the control flow graph is traversed at least once during testing.
*   **Goal:** To ensure that every possible transition (branch) between basic blocks is executed at least once.
*   **How to Achieve Edge Coverage:** Design test cases that execute a path that traverses each edge in the CFG.
*   **Example (Using the same code as above):**

    ```
    void example(int x) {
        1. if (x > 0) {
        2.   System.out.println("Positive");
        3. } else {
        4.   System.out.println("Non-positive");
        5. }
        6. System.out.println("Done");
    }
    ```

    *   **CFG:**
        *   Node 1: `if (x > 0)`
        *   Node 2: `System.out.println("Positive")`
        *   Node 3: `else` (Implicit)
        *   Node 4: `System.out.println("Non-positive")`
        *   Node 5: `System.out.println("Done")`
        *   Edges: 1-2, 1-4, 2-5, 4-5
    *   **Test Cases for Edge Coverage:**
        *   TC1: x = 1 (Path: 1-2-5) - Covers edges 1-2 and 2-5.
        *   TC2: x = -1 (Path: 1-4-5) - Covers edges 1-4 and 4-5.

*   **Strengths:**
    *   Stronger than node coverage as it also covers the decision outcomes.
    *   Helps to reveal errors in conditional logic and branching.
*   **Weaknesses:**
    *   Does not cover different combinations of conditions.
    *   May not test loops sufficiently (especially complex loops).
    *   Can miss errors that only occur with specific path combinations.
*   **Relationship to Node Coverage:** Edge coverage subsumes node coverage (if you achieve edge coverage, you automatically achieve node coverage).  This is because if you traverse every edge, you must also visit every node.

**4. Path Coverage**

*   **Definition:** Path coverage requires that every *possible path* through the control flow graph is executed at least once during testing.
*   **Goal:** To thoroughly test all possible execution sequences of the program.
*   **How to Achieve Path Coverage:** Design test cases that execute each path in the CFG.
*   **Example:**

    ```
    void example(int x, int y) {
        1. if (x > 0) {
        2.   if (y > 0) {
        3.     System.out.println("Both Positive");
        4.   } else {
        5.     System.out.println("X Positive, Y Non-positive");
        6.   }
        7. } else {
        8.   System.out.println("X Non-positive");
        9. }
        10. System.out.println("Done");
    }
    ```

    *   **Possible Paths:**
        *   1-2-3-10
        *   1-2-5-10
        *   1-8-10
    *   **Test Cases for Path Coverage:**
        *   TC1: x = 1, y = 1 (Path: 1-2-3-10)
        *   TC2: x = 1, y = -1 (Path: 1-2-5-10)
        *   TC3: x = -1, y = 1 (Path: 1-8-10)

*   **Strengths:**
    *   Provides the most thorough testing (theoretically).
    *   Can reveal errors that occur only with specific path combinations.
*   **Weaknesses:**
    *   **Generally Impractical:** The number of paths in a program can be infinite (due to loops) or extremely large, making path coverage impossible to achieve in practice.
    *   Even path coverage doesn't guarantee the detection of all faults, especially data-flow-related faults.
*   **Important Considerations:**
    *   **Feasible Paths:** Some paths in the CFG may be infeasible (impossible to execute due to contradictions in the conditions). Path coverage should focus on feasible paths.
    *   **Loops:** Handling loops in path coverage requires strategies like:
        *   **Simple Loop Coverage:** Execute the loop zero times, once, and more than once.
        *   **k-Path Coverage:**  Cover all paths of length k or less.

**5. Relationships Between Node, Edge, and Path Coverage**

*   **Subsumption:** A coverage criterion A *subsumes* another coverage criterion B if satisfying criterion A *always* satisfies criterion B.
*   **Relationships:**
    *   Path Coverage subsumes Edge Coverage.
    *   Edge Coverage subsumes Node Coverage.
*   **Implications:**
    *   Achieving path coverage guarantees edge and node coverage.
    *   Achieving edge coverage guarantees node coverage.
    *   Achieving node coverage does *not* guarantee edge or path coverage.

**6. Deriving Test Paths from CFGs**

1.  **Draw the Control Flow Graph:**  Represent the program's control flow as a graph with nodes representing basic blocks and edges representing transitions.
2.  **Identify the Nodes and Edges:** List all nodes and edges in the graph.
3.  **Apply the Coverage Criterion:**
    *   **Node Coverage:**  Ensure that your test cases visit each node at least once.
    *   **Edge Coverage:** Ensure that your test cases traverse each edge at least once.
    *   **Path Coverage:** (Practically, select a subset of important paths). Identify all possible paths (or a representative set of paths) and design test cases to execute them.
4.  **Design Test Cases:**  Create test cases that will execute the desired paths.
5.  **Verify Coverage:**  Execute the test cases and verify that the required nodes, edges, or paths were covered.  Coverage tools can automate this process.

**7. Practice Questions/Exercises**

1.  **Consider the following code:**

    ```java
    void checkValue(int x) {
        1. if (x > 10) {
        2.    System.out.println("X is greater than 10");
        3. }
        4. if (x < 5) {
        5.    System.out.println("X is less than 5");
        6. }
    }
    ```

    a)  Draw the control flow graph.
    b)  Provide test cases to achieve node coverage.
    c)  Provide test cases to achieve edge coverage.
    d)  Is path coverage possible, and if so, what are the test cases?

    **Answer:**

    a)  **CFG:**
        *   Node 1: `if (x > 10)`
        *   Node 2: `System.out.println("X is greater than 10")`
        *   Node 3: `if (x < 5)`
        *   Node 4: `System.out.println("X is less than 5")`

        Edges: 1-2, 1-3, 2-3, 3-4

    b)  **Node Coverage:**
        *   TC1: x = 11 (Path: 1-2-3)
        *   TC2: x = 4 (Path: 1-3-4)

    c)  **Edge Coverage:**
         *   TC1: x = 11 (Path: 1-2-3) - Covers Edges 1-2, 2-3, 1-3
         *   TC2: x = 4 (Path: 1-3-4) - Covers Edge 3-4

    d)  **Path Coverage:**
         *   Path 1: 1-2-3 (x > 10, and x >= 5. Ex. x = 11)
         *   Path 2: 1-2-3-4 (x > 10, and x < 5 - *IMPOSSIBLE*) - infeasible path
         *   Path 3: 1-3-4 (x <= 10, and x < 5. Ex. x = 4)
         *   Path 4: 1-3 (x <= 10, and x >= 5. Ex. x = 6)
        *   TC1: x = 11 (Path: 1-2-3)
        *   TC2: x = 4 (Path: 1-3-4)
        *   TC3: x = 6 (Path: 1-3)

2.  Explain the difference between node coverage and edge coverage. Give an example where edge coverage provides better testing than node coverage.

    **Answer:** Node coverage ensures that every statement in the program is executed at least once, while edge coverage ensures that every possible transition (branch) between statements is executed at least once. Edge coverage is stronger because it also tests the decision outcomes.

    **Example:**

    ```java
    void example(boolean a, boolean b) {
      if (a && b) {
        System.out.println("Both True");
      }
    }
    ```

    *   **Node Coverage:** TC1: a = false, b = false (covers all nodes - only the 'if' statement)
    *   **Edge Coverage:** Requires *two* test cases:
        *   TC1: a = false, b = false (Path: `if` statement is skipped)
        *   TC2: a = true, b = true (Path: `if` statement is executed)

    Node coverage does not test the case where the "Both True" branch is executed, whereas edge coverage does. Edge coverage can reveal defects related to the conditional expression `a && b` that node coverage would miss.

**8. Important Points to Remember**

*   Graph coverage criteria provide a structured approach to test case design based on the control flow of the program.
*   Node coverage is the weakest criterion and provides basic statement coverage.
*   Edge coverage is stronger than node coverage and covers branch outcomes.
*   Path coverage is the most thorough criterion but is often impractical due to the large number of possible paths.
*   Edge coverage subsumes node coverage, and path coverage subsumes edge and node coverage.
*   Understanding the relationships between these criteria is crucial for choosing appropriate testing strategies.
*   Always consider the feasibility of paths when aiming for path coverage.
*   Use graph coverage tools to automate the process of coverage analysis and test case generation.
