---
title: "Control Structure testing"
subject: "SOFTWARE ENGINEERING"
module: "Module 3: Implementation and Testing"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36362"
status: "completed"
scrapedAt: "2026-05-23T16:24:39.456Z"
---
# Software Engineering: Module 3: Implementation and Testing - Control Structure Testing

## 1. Introduction to Control Structure Testing

Control structure testing, also known as **white-box testing** or **glass-box testing**, is a software testing method that focuses on verifying the internal logic of software components. Unlike black-box testing, which treats the software as a black box and focuses on inputs and outputs, control structure testing examines the internal workings of the code.

**Key Concept:** The goal is to ensure that every path through the code is exercised and that all decisions and branches are executed.

**Why is it important?**
*   **Thoroughness:** It helps uncover errors in program logic that black-box testing might miss.
*   **Code Coverage:** It aims to achieve a certain level of code coverage, ensuring that a significant portion of the codebase has been tested.
*   **Understanding Program Flow:** It requires testers to understand the program's control flow and logic.

**Learning Outcome Alignment:**
*   **CO4 (Knowledge Level: K2):** Interpret software testing methods (including unit testing, integration testing, and test automation). Control structure testing is a fundamental unit and integration testing technique.

**Textbook References:**
*   **Sommerville (2015, 2020):** Likely discusses white-box testing techniques as part of structural testing.
*   **Pressman (2014):** Provides in-depth coverage of control flow testing and various structural testing techniques.

**Highlight:** Control structure testing is about testing the **"how"** rather than just the **"what"** of the software.

## 2. Basis Path Testing

Basis path testing is a white-box testing technique that attempts to create test cases that will execute every linearly independent path through a program. This ensures that all executable statements and all branches are tested at least once.

### 2.1. Cyclomatic Complexity

**Key Concept:** Cyclomatic complexity, developed by Thomas McCabe, is a software metric used to indicate the complexity of a program. It is also used as a basis for defining the number of independent paths through a program.

**Calculation:**
Cyclomatic Complexity (V(G)) = E - N + 2P
Where:
*   E = Number of edges in the control flow graph.
*   N = Number of nodes in the control flow graph.
*   P = Number of connected components (usually 1 for a single program).

**Alternative Calculation (more practical):**
V(G) = Number of decision points + 1
Decision points include: `if`, `while`, `for`, `case` statements, `catch` blocks, logical `AND` (`&&`) and `OR` (`||`) operators.

**Example:**

Consider the following C++ code snippet:

```cpp
int calculate_grade(int score) {
    if (score >= 90) {
        return 1; // Grade A
    } else if (score >= 80) {
        return 2; // Grade B
    } else if (score >= 70) {
        return 3; // Grade C
    } else {
        return 4; // Grade D
    }
}
```

**Control Flow Graph (CFG):**

```
      +---------+
      | Start   |
      +---------+
          |
          v
+-------------------+
| score >= 90?      | (Node 1)
+-------------------+
      | Yes    | No
      v        v
+---------+  +-------------------+
| Return 1|  | score >= 80?      | (Node 2)
+---------+  +-------------------+
               | Yes    | No
               v        v
         +---------+  +-------------------+
         | Return 2|  | score >= 70?      | (Node 3)
         +---------+  +-------------------+
                        | Yes    | No
                        v        v
                  +---------+  +---------+
                  | Return 3|  | Return 4| (Node 4)
                  +---------+  +---------+
```

**Calculating Cyclomatic Complexity:**
*   **Nodes (N):** 5 (Start, score >= 90, score >= 80, score >= 70, Return 4) - *Note: Returns can be considered nodes or edges depending on convention. For simplicity, let's consider them as endpoints.* A more accurate CFG might have nodes for each block of statements and edges representing transitions.
*   **Edges (E):** 6 (Start->>=90, >=90(Yes)->Return 1, >=90(No)->>=80, >=80(Yes)->Return 2, >=80(No)->>=70, >=70(Yes)->Return 3, >=70(No)->Return 4)
*   **P:** 1

V(G) = 6 - 5 + 2*1 = **3**

**Alternative Calculation:**
*   Decision points: `score >= 90?`, `score >= 80?`, `score >= 70?` (3 decision points)
*   V(G) = 3 + 1 = **4**

*Correction in CFG representation and calculation is important. Let's refine the CFG and calculation.*

**Refined CFG:**
Nodes represent basic blocks of code.

1.  Start
2.  `if (score >= 90)`
3.  `return 1; // Grade A`
4.  `else if (score >= 80)`
5.  `return 2; // Grade B`
6.  `else if (score >= 70)`
7.  `return 3; // Grade C`
8.  `return 4; // Grade D`

Edges:
1->2, 2->3 (True for >=90), 2->4 (False for >=90), 3->End, 4->5 (True for >=80), 4->6 (False for >=80), 5->End, 6->7 (True for >=70), 6->8 (False for >=70), 7->End, 8->End

Nodes (N) = 9 (including Start and End)
Edges (E) = 10

V(G) = 10 - 9 + 2*1 = **3**

**Alternative calculation (Decision points):**
*   `score >= 90` (1)
*   `score >= 80` (1)
*   `score >= 70` (1)
Total decision points = 3
V(G) = 3 + 1 = **4**

*The discrepancy often arises from how nodes and edges are defined. For testing purposes, the "decision points + 1" rule is more commonly used and easier to apply directly from the code.*

**Let's use the decision points rule for practicality:**
In the `calculate_grade` example, there are 3 `if`/`else if` conditions, which are decision points.
V(G) = 3 + 1 = **4**. This indicates that we need at least 4 independent paths to achieve full coverage.

### 2.2. Identifying Independent Paths

**Key Concept:** An independent path is a path through the program that introduces at least one new set of processing statements or a new condition.

For the `calculate_grade` example (V(G)=4), we need 4 independent paths.

*   **Path 1:** `score >= 90` is true (e.g., score = 95)
    *   Sequence of execution: Start -> `score >= 90?` (True) -> `return 1`
*   **Path 2:** `score >= 90` is false, `score >= 80` is true (e.g., score = 85)
    *   Sequence of execution: Start -> `score >= 90?` (False) -> `score >= 80?` (True) -> `return 2`
*   **Path 3:** `score >= 90` is false, `score >= 80` is false, `score >= 70` is true (e.g., score = 75)
    *   Sequence of execution: Start -> `score >= 90?` (False) -> `score >= 80?` (False) -> `score >= 70?` (True) -> `return 3`
*   **Path 4:** `score >= 90` is false, `score >= 80` is false, `score >= 70` is false (e.g., score = 65)
    *   Sequence of execution: Start -> `score >= 90?` (False) -> `score >= 80?` (False) -> `score >= 70?` (False) -> `return 4`

### 2.3. Designing Test Cases

Based on the identified independent paths, we design test cases to exercise each path.

**Test Cases for `calculate_grade`:**

| Test Case ID | Input Score | Expected Output | Path Exercised | Reason for Input |
| :----------- | :---------- | :-------------- | :------------- | :--------------- |
| TC_001       | 95          | 1               | Path 1         | Score >= 90      |
| TC_002       | 85          | 2               | Path 2         | 80 <= Score < 90 |
| TC_003       | 75          | 3               | Path 3         | 70 <= Score < 80 |
| TC_004       | 65          | 4               | Path 4         | Score < 70       |

**Learning Outcome Alignment:**
*   **CO4 (Knowledge Level: K2):** Interpret software testing methods. Basis path testing is a specific method within white-box testing.
*   **CO1 (Knowledge Level: K2):** Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery. Testing is a core activity in software development.

**Textbook References:**
*   **Pressman (2014):** Has extensive sections on basis path testing, cyclomatic complexity, and control flow graphs.
*   **Sommerville (2015, 2020):** Likely covers structural testing metrics and techniques.

**Highlight:** Cyclomatic complexity provides a quantitative measure of the complexity and the minimum number of test cases required.

## 3. Flow-Graph Notation

**Key Concept:** Flow graphs (or control flow graphs - CFGs) are graphical representations of a program's execution flow. They consist of nodes that represent processing steps and edges that represent the transfer of control between steps.

**Elements of a Flow Graph:**
*   **Nodes:** Represent basic blocks of executable statements. A basic block is a sequence of consecutive statements where control enters at the beginning and leaves at the end without branching.
*   **Edges:** Represent the flow of control between basic blocks.

**Types of Structures and their CFG Representation:**

*   **Sequential Execution:**
    ```
    Block A;
    Block B;
    ```
    ```
      +-------+     +-------+
      | BlockA| --> | BlockB|
      +-------+     +-------+
    ```

*   **Conditional (if-then):**
    ```
    if (condition) {
        Block A;
    }
    Block B;
    ```
    ```
          +---------------+
          |               |
          v               |
    +-----------+     +-----------+
    | condition?| --- | Block A   |
    +-----------+     +-----------+
          | Yes           |
          | No            v
          +-------------> +-----------+
                          | Block B   |
                          +-----------+
    ```

*   **Conditional (if-then-else):**
    ```
    if (condition) {
        Block A;
    } else {
        Block B;
    }
    Block C;
    ```
    ```
          +---------------+
          |               |
          v               |
    +-----------+     +-----------+
    | condition?| --- | Block A   |
    +-----------+     +-----------+
          | Yes           |
          | No            v
          +-------------> +-----------+
                          | Block B   |
                          +-----------+
                                |
                                v
                          +-----------+
                          | Block C   |
                          +-----------+
    ```

*   **Loop (while):**
    ```
    while (condition) {
        Block A;
    }
    Block B;
    ```
    ```
          +-----------+
          | condition?| --------+
          +-----------+         | Yes
                | No            v
                v         +-----------+
          +-----------+   | Block A   |
          | Block B   | <--+-----------+
          +-----------+
    ```

*   **Loop (for):**
    ```
    for (init; condition; increment) {
        Block A;
    }
    Block B;
    ```
    *Similar to `while`, with initialization and increment steps often represented as nodes or implicitly part of the loop condition node.*

**Learning Outcome Alignment:**
*   **CO4 (Knowledge Level: K2):** Interpret software testing methods. Understanding flow graphs is crucial for control structure testing.

**Textbook References:**
*   **Pressman (2014):** Provides detailed explanations and examples of flow-graph notation for various control structures.

**Highlight:** Visualizing the control flow through graphs aids in identifying all possible execution paths.

## 4. Branch Testing (Condition Testing)

**Key Concept:** Branch testing, also known as decision testing or predicate testing, focuses on ensuring that each possible outcome (True/False) of each decision point in the code is executed.

**Goal:** To test all branches of control flow.

**Example:**

```java
public int check_eligibility(int age, boolean has_license) {
    if (age >= 18 && has_license) {
        return 1; // Eligible for driving
    } else {
        return 0; // Not eligible
    }
}
```

**Decision Points:**
1.  `age >= 18`
2.  `has_license`
3.  The logical AND (`&&`) combines these two conditions.

**To achieve branch coverage, we need to test:**
*   The condition `age >= 18` evaluates to True.
*   The condition `age >= 18` evaluates to False.
*   The condition `has_license` evaluates to True.
*   The condition `has_license` evaluates to False.

**Test Cases for Branch Testing:**

| Test Case ID | Input Age | Input Has_License | Expected Output | Decision Outcomes Tested        | Path Executed   |
| :----------- | :-------- | :---------------- | :-------------- | :------------------------------ | :-------------- |
| TC_B01       | 20        | true              | 1               | `age>=18`(T), `has_license`(T)  | Main branch (1) |
| TC_B02       | 16        | true              | 0               | `age>=18`(F)                    | Else branch (0) |
| TC_B03       | 20        | false             | 0               | `age>=18`(T), `has_license`(F)  | Else branch (0) |
| TC_B04       | 16        | false             | 0               | `age>=18`(F), `has_license`(F)  | Else branch (0) |

**Note:** In the above example, Test Case B01 covers the `true` outcome for both conditions. Test Cases B02, B03, and B04 cover the `false` outcome for at least one condition, leading to the `else` block. To ensure all combinations are covered for the `&&` operator, we need cases that test all four outcomes of the individual predicates.

**Achieving 100% Branch Coverage:**
*   (age >= 18) True AND (has_license) True  -> TC_B01
*   (age >= 18) False                    -> TC_B02 (This also implies the `&&` condition is false)
*   (age >= 18) True AND (has_license) False -> TC_B03 (This also implies the `&&` condition is false)

We have now tested:
*   `age >= 18` (True and False)
*   `has_license` (True and False)
*   The entire `if` condition (True and False)

**Learning Outcome Alignment:**
*   **CO4 (Knowledge Level: K2):** Interpret software testing methods. Branch testing is a specific type of control structure testing.

**Textbook References:**
*   **Pressman (2014):** Details branch coverage and its importance.

**Highlight:** Branch testing ensures that both outcomes of every decision statement are tested.

## 5. Path Testing

**Key Concept:** Path testing aims to execute every possible path from the entry point to the exit point of a program.

**Challenges:**
*   **Combinatorial Explosion:** The number of paths can grow exponentially with the number of branches and loops, making exhaustive path testing impractical for most programs.
*   **Loops:** A loop can be executed zero times, one time, or multiple times, leading to an infinite number of paths if not constrained.

**Types of Path Testing:**
1.  **Statement Coverage:** Every statement in the program is executed at least once. (Weakest form of path testing).
2.  **Branch Coverage:** Every branch (edge) in the control flow graph is traversed at least once.
3.  **Path Coverage:** Every possible path from entry to exit is executed at least once. (Most thorough but often impractical).

**Example (Revisiting `calculate_grade`):**
We identified 4 independent paths for basis path testing, which provides a more manageable subset of path testing. Testing *all* possible paths, including variations in loop iterations, would be significantly more extensive.

**Practical Approach:**
*   Focus on **basis path testing** to cover linearly independent paths.
*   For loops, test:
    *   Zero iterations.
    *   One iteration.
    *   Multiple iterations (e.g., a typical case).
    *   Boundary values for loop termination.

**Learning Outcome Alignment:**
*   **CO4 (Knowledge Level: K2):** Interpret software testing methods. Path testing is a core white-box testing concept.

**Textbook References:**
*   **Pressman (2014):** Discusses the different levels of path coverage and the challenges of exhaustive path testing.

**Highlight:** While exhaustive path testing is the ideal, basis path testing is often a practical compromise.

## 6. Loop Testing

**Key Concept:** Loop testing is a white-box testing technique that specifically focuses on validating the correctness of loops within a program.

**Why is it important?** Loops are a common source of errors due to their repetitive nature and termination conditions.

**Types of Loops:**
*   **Simple Loops:** Loops where the number of iterations is known or can be easily controlled (e.g., `for` loops with a fixed range).
*   **Nested Loops:** Loops within loops. Testing these requires careful consideration of the inner and outer loops.
*   **Concatenated Loops:** Loops that follow each other sequentially.

**Test Cases for Loop Testing:**

The general strategy is to test the loop at its boundaries and for typical conditions.

1.  **Skip the loop entirely:** Test the case where the loop condition is false from the start (0 iterations).
2.  **One iteration of the loop:** Test the case where the loop executes exactly once.
3.  **Few iterations:** Test with a small number of iterations (e.g., 2 or 3).
4.  **Maximum iterations:** If there's a known maximum, test it.
5.  **One iteration less than the minimum:** If applicable.
6.  **One iteration more than the maximum:** If applicable.
7.  **Middle values:** Test with values well within the loop's normal operating range.
8.  **Boundary values of the loop control variable.**

**Example: Testing a `for` loop in Java**

```java
public int sum_array_elements(int[] arr) {
    int sum = 0;
    for (int i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
```

**Loop Control Variable:** `i`
**Loop Condition:** `i < arr.length`
**Loop Termination:** `i` becomes equal to `arr.length`

**Test Cases:**

| Test Case ID | Input Array (`arr`) | Expected Output | Loop Behavior Tested                               | Test Logic                                      |
| :----------- | :------------------ | :-------------- | :------------------------------------------------- | :---------------------------------------------- |
| TC_L01       | `{}` (empty)        | 0               | 0 iterations (arr.length = 0, `i < 0` is false)    | Skip loop                                       |
| TC_L02       | `{5}`               | 5               | 1 iteration (`i=0`, `0<1` is true, then `i=1`, `1<1` is false) | One iteration                                   |
| TC_L03       | `{2, 4}`            | 6               | 2 iterations (`i=0`, `i=1`)                        | Few iterations                                  |
| TC_L04       | `{1, 2, 3, 4, 5}`   | 15              | 5 iterations (`i=0, 1, 2, 3, 4`)                   | Multiple/typical iterations                     |
| TC_L05       | `{1, 2, 3, 4, 5}`   | 15              | Test boundary value of `arr.length` (implicit) | Ensure loop works for non-zero length           |

**Nested Loops:**
For nested loops, you typically test the inner loop with the outer loop held at its minimum (or zero) value, then test the inner loop with the outer loop at a typical value, and so on. You also test the outer loop independently.

**Learning Outcome Alignment:**
*   **CO4 (Knowledge Level: K2):** Interpret software testing methods. Loop testing is a specialized form of control structure testing.

**Textbook References:**
*   **Pressman (2014):** Provides a structured approach to loop testing.

**Highlight:** Focus on boundary conditions (0, 1, max, max+1 iterations) for loops.

## 7. Data Flow Testing

**Key Concept:** Data flow testing is a white-box testing technique that focuses on the usage of variables in a program. It aims to detect errors related to the definition, usage, and life span of variables.

**Key Terms:**
*   **Definition (Def):** An action that assigns a value to a variable.
*   **Use (Use):** An action that uses the value of a variable.
    *   **Predicate Use:** A variable used in a conditional statement (e.g., `if (x > 5)`).
    *   **Computational Use:** A variable used in an arithmetic expression or assignment (e.g., `y = x + 2`).

**Data Flow Paths:** A path from a definition of a variable to a use of that variable.

**Testing Strategies based on Data Flow:**
*   **All-Definition Coverage:** For every definition of every variable, there is a data flow path from that definition to a use of the variable.
*   **All-Use Coverage:** For every use of every variable, there is a data flow path from a definition of that variable to that use.
*   **All-Path Coverage:** For every definition-use pair (def-use pair), there is a data flow path that includes that pair and no other definitions of the variable along the path. (Most comprehensive).

**Example:**

```python
def process_data(x):
    y = x * 2
    if y > 10:
        print(y)
    else:
        z = y + 5
        print(z)
```

**Variable Definitions:**
*   `x`: Defined by input parameter.
*   `y`: Defined by `y = x * 2`.
*   `z`: Defined by `z = y + 5`.

**Variable Uses:**
*   `x`: Used in `y = x * 2` (computational use).
*   `y`: Used in `y > 10` (predicate use) and `z = y + 5` (computational use).
*   `z`: Used in `print(z)`.

**Def-Use Pairs:**
1.  Def `x` -> Use `x` in `y = x * 2`
2.  Def `y` (from `x*2`) -> Use `y` in `y > 10`
3.  Def `y` (from `x*2`) -> Use `y` in `z = y + 5`
4.  Def `z` (from `y+5`) -> Use `z` in `print(z)`

**Test Cases for Data Flow Testing:**

| Test Case ID | Input `x` | Variable Path Covered                               | Reasoning                                      |
| :----------- | :-------- | :-------------------------------------------------- | :--------------------------------------------- |
| TC_DF01      | 7         | Def `x` -> Use `x` in `y=x*2`; Def `y` -> Use `y` in `print(y)` | `x=7`, `y=14`. `y>10` is True. Path tests `y` definition to `y` predicate use and then `y` computational use (implicit in `print(y)` if `y` were printed). This path doesn't test `z`. |
| TC_DF02      | 3         | Def `x` -> Use `x` in `y=x*2`; Def `y` -> Use `y` in `z=y+5`; Def `z` -> Use `z` in `print(z)` | `x=3`, `y=6`. `y>10` is False. Path tests `y` definition to `y` computational use, then `z` definition to `z` use. |

**Learning Outcome Alignment:**
*   **CO4 (Knowledge Level: K2):** Interpret software testing methods. Data flow testing is an advanced white-box technique.

**Textbook References:**
*   **Pressman (2014):** Offers a detailed exploration of data flow testing strategies.

**Highlight:** Data flow testing ensures that variables are used correctly based on their definitions.

## 8. General Boundary Value Analysis (BVA) for White-Box Testing

**Key Concept:** While BVA is typically considered a black-box technique, it can be applied in white-box testing to select test cases that target the boundary conditions of control flow structures, especially loops and conditional statements.

**How it applies to Control Structure Testing:**
*   **Conditional Statements:** Test inputs that fall exactly on the boundary of a condition (e.g., if `x >= 10`, test `x=10` and `x=9`).
*   **Loops:** As discussed in Loop Testing, testing 0, 1, min, max, and max+1 iterations are boundary conditions for loop control.

**Example (Revisiting `calculate_grade`):**

```cpp
int calculate_grade(int score) {
    if (score >= 90) { return 1; } // Boundary: 90
    else if (score >= 80) { return 2; } // Boundary: 80
    else if (score >= 70) { return 3; } // Boundary: 70
    else { return 4; }
}
```

**Boundary Values:** 70, 80, 90.

**Test Cases based on BVA for Control Structures:**

| Test Case ID | Input Score | Expected Output | Boundary Tested        | Path Taken             |
| :----------- | :---------- | :-------------- | :--------------------- | :--------------------- |
| TC_BVA01     | 90          | 1               | Lower boundary of >=90 | Path 1                 |
| TC_BVA02     | 89          | 2               | Upper boundary of <90  | Path 2                 |
| TC_BVA03     | 80          | 2               | Lower boundary of >=80 | Path 2                 |
| TC_BVA04     | 79          | 3               | Upper boundary of <80  | Path 3                 |
| TC_BVA05     | 70          | 3               | Lower boundary of >=70 | Path 3                 |
| TC_BVA06     | 69          | 4               | Upper boundary of <70  | Path 4                 |

**Learning Outcome Alignment:**
*   **CO4 (Knowledge Level: K2):** Interpret software testing methods. BVA complements control structure testing by focusing on critical input values.

**Textbook References:**
*   **Pressman (2014):** Often discusses BVA in the context of both black-box and white-box testing.

**Highlight:** BVA helps uncover errors that occur at the edges of valid input ranges for control structures.

## 9. Practice Questions and Answers

**Question 1:**
What is the primary goal of control structure testing?
a) To test the user interface and user experience.
b) To verify the functional correctness of the software based on requirements.
c) To examine the internal logic and flow of control within the software.
d) To assess the performance and scalability of the system.

**Answer:** c) To examine the internal logic and flow of control within the software.

---

**Question 2:**
Calculate the cyclomatic complexity for the following pseudo-code:

```
START
  READ A, B
  IF A > B THEN
    C = A - B
    PRINT C
  ELSE
    C = B - A
    PRINT C
  END IF
END
```
a) 1
b) 2
c) 3
d) 4

**Answer:** b) 2

*Explanation: There is one decision point (`IF A > B THEN`). Cyclomatic Complexity = Number of decision points + 1 = 1 + 1 = 2.*

---

**Question 3:**
Which type of white-box testing focuses on ensuring that every branch of a decision statement is executed?
a) Path Testing
b) Loop Testing
c) Branch Testing (Decision Testing)
d) Data Flow Testing

**Answer:** c) Branch Testing (Decision Testing)

---

**Question 4:**
If a loop has a condition `i < N`, what are considered critical boundary values for testing the number of iterations? (Select all that apply)
a) 0 iterations
b) 1 iteration
c) N iterations
d) N+1 iterations

**Answer:** a), b), c), d)
*Explanation:
    *   0 iterations: When the loop condition is false initially.
    *   1 iteration: When the loop condition is true once.
    *   N iterations: The maximum expected number of iterations if N is the upper bound.
    *   N+1 iterations: To test what happens if the loop condition fails to terminate correctly at N.*

---

**Question 5:**
Describe the difference between statement coverage and branch coverage.

**Answer:**
*   **Statement Coverage:** Ensures that every executable statement in the program is executed at least once.
*   **Branch Coverage:** Ensures that every branch (i.e., both the true and false outcomes) of every decision statement is executed at least once. Branch coverage is a stronger form of coverage than statement coverage, as achieving branch coverage implies statement coverage for all statements reachable by those branches.

---

**Question 6:**
Consider the following Python code:

```python
def categorize_number(num):
    if num < 0:
        return "Negative"
    elif num == 0:
        return "Zero"
    else:
        return "Positive"
```

Design test cases to achieve 100% branch coverage.

**Answer:**

| Test Case ID | Input `num` | Expected Output | Branches Covered            |
| :----------- | :---------- | :-------------- | :-------------------------- |
| TC_Cat01     | -5          | "Negative"      | `num < 0` (True)            |
| TC_Cat02     | 0           | "Zero"          | `num < 0` (False), `num == 0` (True) |
| TC_Cat03     | 10          | "Positive"      | `num < 0` (False), `num == 0` (False) |

---

**Question 7:**
What is the main limitation of exhaustive path testing?

**Answer:** The combinatorial explosion of paths due to branching and looping, making it impractical and time-consuming for all but the simplest programs.

---

## 10. Relating to Course Outcomes

*   **CO1 (Interpret software process models and core activities):** Control structure testing is a fundamental core activity within the implementation and testing phases of any software development process model. Understanding these techniques helps in interpreting how software is verified.
*   **CO3 (Prepare Software Requirement Specification and Software Design):** While not directly creating SRS/SD, control structure testing relies heavily on understanding the design and intended logic, which are inputs to the testing process.
*   **CO4 (Interpret object-oriented design principles, design patterns, software testing methods):** This is the most direct alignment. Control structure testing (basis path, branch, loop, data flow) are all key software testing methods that are interpreted and understood through this topic.
*   **CO6 (Make use of software project management concepts):** Understanding testing complexity (e.g., cyclomatic complexity) directly influences test planning, estimation, and scheduling within project management.

## 11. Important Points to Remember

*   **White-Box vs. Black-Box:** Control structure testing is a white-box technique, examining internal code logic.
*   **Cyclomatic Complexity:** A key metric for measuring complexity and determining the minimum number of test cases for basis path testing.
*   **Types of Coverage:** Statement, Branch, Path, Condition, and Data Flow coverage are different goals within control structure testing, each with varying levels of thoroughness.
*   **Practicality:** Exhaustive path testing is rarely feasible; techniques like basis path testing and targeted loop testing are more practical.
*   **Boundary Value Analysis:** Applicable even in white-box testing to target critical decision points and loop boundaries.
*   **Data Flow:** Essential for catching variable-related errors, especially in complex logic.
*   **Flow Graphs:** Visual tools crucial for understanding and designing control structure tests.

This comprehensive set of notes covers the core aspects of Control Structure Testing, aligning with the provided learning outcomes and referencing the suggested textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
