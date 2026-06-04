---
title: "Graph Coverage Criteria - Node, edge, and path coverage"
subject: "SOFTWARE TESTING"
module: "Module 3: Advanced White Box Testing & Security Testing:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ccc4"
status: "completed"
scrapedAt: "2026-05-20T17:26:36.258Z"
---
# SOFTWARE TESTING

## Module 3: Advanced White Box Testing & Security Testing

### Topic: Graph Coverage Criteria - Node, Edge, and Path Coverage

---

### 1. Introduction to Control Flow Graphs (CFGs)

Before diving into graph coverage criteria, it's essential to understand the foundation: Control Flow Graphs (CFGs).

*   **Definition:** A Control Flow Graph (CFG) is a graphical representation of all the paths that might be executed through a program. It's a directed graph where:
    *   **Nodes:** Represent basic blocks of code (sequences of statements that are executed together without any branching).
    *   **Edges:** Represent control flow transfers between basic blocks. These transfers can be due to conditional branches (if, switch, loops), unconditional jumps, or sequential execution.

*   **Purpose:** CFGs help visualize the execution paths of a program, making it easier to identify potential testing scenarios and measure the thoroughness of testing.

*   **Construction of a CFG:**
    1.  **Identify Basic Blocks:** Divide the code into basic blocks. A basic block starts with a target of a control flow transfer or at the beginning of the program, and continues until the next control flow transfer.
    2.  **Identify Control Flow Transfers:** Determine where control can transfer from one basic block to another.
    3.  **Draw the Graph:**
        *   Represent each basic block as a node.
        *   Draw a directed edge from node A to node B if control can transfer directly from the last statement in basic block A to the first statement in basic block B.

*   **Example:** Consider the following pseudocode:

    ```
    1: read x
    2: if x > 0 then
    3:   y = x * 2
    4: else
    5:   y = x * 3
    6: end if
    7: print y
    ```

    *   **Basic Blocks:**
        *   B1: {1} (read x)
        *   B2: {2} (if x > 0)
        *   B3: {3} (y = x * 2)
        *   B4: {5} (y = x * 3)
        *   B5: {7} (print y)

    *   **Control Flow:**
        *   B1 -> B2 (sequential)
        *   B2 -> B3 (if condition true)
        *   B2 -> B4 (if condition false)
        *   B3 -> B5 (sequential)
        *   B4 -> B5 (sequential)

    *   **CFG:**

        ```
              +---+
              | B1| (read x)
              +---+
                |
                v
              +---+
              | B2| (if x > 0)
              +---+
             /     \
            v       v
          +---+   +---+
          | B3|   | B4| (y = x * 3)
          | (y=x*2)|   +---+
          +---+     \
            |        v
            +---+
            | B5| (print y)
            +---+
        ```

---

### 2. Graph Coverage Criteria

Graph coverage criteria are a set of metrics used to measure the thoroughness of testing based on the paths executed through a program's CFG. They help ensure that different parts of the program's logic are exercised.

#### 2.1. Node Coverage

*   **Definition:** Node coverage requires that every node (basic block) in the CFG is visited at least once.

*   **Goal:** To ensure that all the individual pieces of executable code (basic blocks) are executed.

*   **Strength:** The weakest of the three graph coverage criteria discussed. It doesn't guarantee that all transitions or all complete execution paths are tested.

*   **How to Achieve:** Design test cases such that every node in the CFG is part of at least one executed path.

*   **Example (using the CFG above):**
    *   To achieve node coverage, we need to execute paths that visit B1, B2, B3, B4, and B5.
    *   **Test Case 1:** `x = 5` (executes 1 -> 2 -> 3 -> 5) - Visits B1, B2, B3, B5.
    *   **Test Case 2:** `x = -2` (executes 1 -> 2 -> 4 -> 5) - Visits B1, B2, B4, B5.
    *   After these two test cases, all nodes (B1, B2, B3, B4, B5) are covered.

*   **Percentage Calculation:**
    `(Number of visited nodes / Total number of nodes in CFG) * 100%`

#### 2.2. Edge Coverage (or Arc Coverage)

*   **Definition:** Edge coverage requires that every edge (control flow transfer) in the CFG is traversed at least once.

*   **Goal:** To ensure that all possible transitions between basic blocks are tested. This is more thorough than node coverage because it considers the flow of control.

*   **Strength:** Stronger than node coverage. If all edges are covered, then all nodes are necessarily covered (unless a node has no incoming or outgoing edges, which is unlikely in a well-formed CFG).

*   **How to Achieve:** Design test cases such that every edge in the CFG is traversed at least once.

*   **Example (using the CFG above):**
    *   Edges to cover: B1->B2, B2->B3, B2->B4, B3->B5, B4->B5.
    *   **Test Case 1:** `x = 5` (executes 1 -> 2 -> 3 -> 5) - Covers edges B1->B2, B2->B3, B3->B5.
    *   **Test Case 2:** `x = -2` (executes 1 -> 2 -> 4 -> 5) - Covers edges B1->B2 (already covered), B2->B4, B4->B5.
    *   After these two test cases, all edges are covered.

*   **Percentage Calculation:**
    `(Number of visited edges / Total number of edges in CFG) * 100%`

#### 2.3. Path Coverage

*   **Definition:** Path coverage requires that every possible linearly independent path in the CFG is traversed at least once. A "path" in this context refers to a sequence of nodes and edges from a start node to an end node.

*   **Goal:** To ensure that all distinct execution routes through the program are tested. This is the most thorough of the three criteria.

*   **Strength:** The strongest of the three criteria. If all paths are covered, then all edges and all nodes are necessarily covered.

*   **Key Concept: Path Enumeration:** The number of possible paths in a CFG can be enormous, especially with loops. Therefore, "path coverage" typically refers to covering *linearly independent paths*.

    *   **Linearly Independent Paths:** These are a minimal set of paths such that any other path in the graph can be formed by combining these basic paths. This concept is often related to the cyclomatic complexity of the program.

    *   **Cyclomatic Complexity (V(G)):** A metric used to determine the number of linearly independent paths through a program's control structure.
        *   `V(G) = E - N + 2*P`
            *   E = Number of edges
            *   N = Number of nodes
            *   P = Number of connected components (usually 1 for a single program)
        *   Alternatively, `V(G) = Number of decision points (predicate nodes) + 1`.
        *   The cyclomatic complexity indicates the minimum number of test cases required to achieve complete path coverage.

*   **How to Achieve:**
    1.  Determine the cyclomatic complexity to know the minimum number of paths to cover.
    2.  Identify a set of linearly independent paths that cover all decision outcomes.
    3.  Design test cases to execute these paths.

*   **Example (using the CFG above):**
    *   **Nodes (N):** 5 (B1, B2, B3, B4, B5)
    *   **Edges (E):** 5 (B1->B2, B2->B3, B2->B4, B3->B5, B4->B5)
    *   **Decision Points:** B2 (the `if` statement). There is 1 decision point.
    *   **Cyclomatic Complexity (V(G)):**
        *   Using formula: `V(G) = 5 - 5 + 2*1 = 2`
        *   Using decision points: `V(G) = 1 + 1 = 2`
    *   This means we need at least 2 linearly independent paths to cover.
    *   **Linearly Independent Paths:**
        1.  Path 1: B1 -> B2 -> B3 -> B5 (when `x > 0`)
        2.  Path 2: B1 -> B2 -> B4 -> B5 (when `x <= 0`)
    *   **Test Cases:**
        *   **Test Case 1:** `x = 5` (executes Path 1: 1 -> 2 -> 3 -> 5)
        *   **Test Case 2:** `x = -2` (executes Path 2: 1 -> 2 -> 4 -> 5)
    *   With these two test cases, we have covered both linearly independent paths.

*   **Challenges with Path Coverage:**
    *   **Combinatorial Explosion:** The number of paths can grow exponentially with the number of loops and branches.
    *   **Unreachability:** Some paths might be unreachable due to program logic.
    *   **Complexity of Loops:** Covering all paths through loops (e.g., executing a loop zero times, one time, multiple times) is often handled by breaking loop-based paths into sub-paths or by using techniques like loop coverage criteria (which are beyond this basic introduction). For simple path coverage, we often consider paths that traverse a loop at most once or a fixed number of times.

*   **Percentage Calculation:**
    `(Number of visited paths / Total number of required paths) * 100%`

---

### 3. Comparison and Relationship

*   **Hierarchy of Strength:** Path Coverage > Edge Coverage > Node Coverage
    *   Achieving path coverage guarantees edge and node coverage.
    *   Achieving edge coverage guarantees node coverage.
    *   Achieving node coverage does *not* guarantee edge or path coverage.

*   **Practical Considerations:**
    *   **Node Coverage:** Easy to achieve but provides minimal assurance.
    *   **Edge Coverage:** A good balance between thoroughness and effort for many programs. It's often a practical goal.
    *   **Path Coverage:** The most thorough but can be very difficult and time-consuming to achieve completely, especially for complex programs with loops. Often, a subset of important paths or paths derived from cyclomatic complexity are targeted.

---

### 4. Practice Questions and Exercises

**Question 1:**
Consider the following pseudocode:

```
1: function calculate(a, b)
2:   if a > 0 then
3:     if b > 0 then
4:       result = a + b
5:     else
6:       result = a - b
7:     end if
8:   else
9:     result = a * b
10:  end if
11:  return result
12: end function
```

a) Draw the Control Flow Graph (CFG) for this function.
b) Calculate the cyclomatic complexity of the function.
c) Identify a set of linearly independent paths required for full path coverage.
d) For each of the following test cases, list the nodes and edges covered:
    i) `calculate(5, 3)`
    ii) `calculate(5, -3)`
    iii) `calculate(-5, 3)`
e) Determine if node coverage, edge coverage, and path coverage are achieved by the combination of test cases (i), (ii), and (iii).

---

**Answer to Question 1:**

a) **Control Flow Graph (CFG):**

```
      +---+
      | B1| (start, func calc(a,b))
      +---+
        |
        v
      +---+
      | B2| (if a > 0)
      +---+
     /     \
    v       v
  +---+   +---+
  | B3|   | B4| (result = a * b)
  | (if b>0)|   +---+
  +---+     \
 /     \     v
v       v   +---+
+---+ +---+ | B5| (return result)
| B6| | B7| +---+
| (res=a+b)| | (res=a-b)|
+---+ +---+
  \     /
   v   v
  +---+
  | B8| (after if blocks, before return) - *Note: B8 represents sequential execution flow to B5*
  +---+
    |
    v
  +---+
  | B9| (return result)
  +---+

Simplified CFG without explicitly showing sequential flow between branches and return:
      +---+
      | B1| (start)
      +---+
        |
        v
      +---+
      | B2| (if a > 0)
      +---+
     /     \
    v       v
  +---+   +---+
  | B3|   | B4| (result = a * b)
  | (if b>0)|   +---+
  +---+     \
 /     \     v
v       v   +---+
+---+ +---+ | B5| (return)
| B6| | B7| +---+
| (res=a+b)| | (res=a-b)|
+---+ +---+
  \     /
   v   v
  +---+
  | B8| (implicit merge before return)
  +---+
    |
    v
  +---+
  | B9| (return)
  +---+
```

*Let's redefine the basic blocks more precisely for the CFG structure:*

*   B1: {1} (start, function call)
*   B2: {2} (if a > 0)
*   B3: {3} (if b > 0)
*   B4: {9} (result = a * b)
*   B5: {4} (result = a + b)
*   B6: {6} (result = a - b)
*   B7: {11} (return result) - This node is reached sequentially after B4, B5, and B6.

*   **Revised CFG Nodes & Edges:**
    *   Nodes: B1, B2, B3, B4, B5, B6, B7
    *   Edges:
        *   B1 -> B2
        *   B2 -> B3 (if a > 0)
        *   B2 -> B4 (if a <= 0)
        *   B3 -> B5 (if b > 0)
        *   B3 -> B6 (if b <= 0)
        *   B5 -> B7 (sequential)
        *   B6 -> B7 (sequential)
        *   B4 -> B7 (sequential)

b) **Cyclomatic Complexity:**
    *   Number of nodes (N) = 7
    *   Number of edges (E) = 8
    *   Number of decision points (predicate nodes: B2, B3) = 2
    *   `V(G) = E - N + 2*P = 8 - 7 + 2*1 = 3`
    *   `V(G) = Number of predicate nodes + 1 = 2 + 1 = 3`
    *   **Cyclomatic Complexity = 3.** This means we need at least 3 linearly independent paths.

c) **Linearly Independent Paths:**
    1.  **Path 1:** B1 -> B2 -> B3 -> B5 -> B7 (a > 0, b > 0)
    2.  **Path 2:** B1 -> B2 -> B3 -> B6 -> B7 (a > 0, b <= 0)
    3.  **Path 3:** B1 -> B2 -> B4 -> B7 (a <= 0)

d) **Nodes and Edges Covered by Test Cases:**
    *   **Test Case i: `calculate(5, 3)`**
        *   Execution: 1 -> 2 -> 3 -> 5 -> 7
        *   Nodes Covered: B1, B2, B3, B5, B7
        *   Edges Covered: B1->B2, B2->B3, B3->B5, B5->B7

    *   **Test Case ii: `calculate(5, -3)`**
        *   Execution: 1 -> 2 -> 3 -> 6 -> 7
        *   Nodes Covered: B1, B2, B3, B6, B7
        *   Edges Covered: B1->B2, B2->B3, B3->B6, B6->B7

    *   **Test Case iii: `calculate(-5, 3)`**
        *   Execution: 1 -> 2 -> 4 -> 7
        *   Nodes Covered: B1, B2, B4, B7
        *   Edges Covered: B1->B2, B2->B4, B4->B7

e) **Coverage Achieved:**

    *   **Nodes Covered by (i), (ii), (iii):** B1, B2, B3, B4, B5, B6, B7.
        *   All nodes are covered. **Node Coverage: 100%**

    *   **Edges Covered by (i), (ii), (iii):**
        *   From (i): B1->B2, B2->B3, B3->B5, B5->B7
        *   From (ii): B1->B2 (already covered), B2->B3 (already covered), B3->B6, B6->B7
        *   From (iii): B1->B2 (already covered), B2->B4, B4->B7
        *   Total unique edges covered: B1->B2, B2->B3, B3->B5, B5->B7, B3->B6, B6->B7, B2->B4, B4->B7.
        *   All 8 edges are covered. **Edge Coverage: 100%**

    *   **Paths Covered by (i), (ii), (iii):**
        *   Test Case (i) covers Path 1.
        *   Test Case (ii) covers Path 2.
        *   Test Case (iii) covers Path 3.
        *   All 3 linearly independent paths are covered. **Path Coverage: 100%**

---

### 5. Important Points to Remember

*   **CFGs are fundamental:** They visually represent program flow and are the basis for graph coverage.
*   **Hierarchy:** Path coverage is the most rigorous, followed by edge coverage, and then node coverage.
*   **Cyclomatic Complexity:** A crucial metric for determining the minimum number of test cases needed for path coverage.
*   **Practicality of Path Coverage:** While ideal, full path coverage is often infeasible due to the sheer number of possible paths, especially in programs with loops. Focus on achieving edge coverage or a representative set of paths.
*   **Tools:** Software testing tools can often generate CFGs and help in measuring coverage.
*   **Scope:** These criteria are primarily for **white-box testing**, where the internal structure of the code is known.

---
