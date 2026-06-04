---
title: "Data Flow Criteria - du paths, du pairs, subsumption relationships"
subject: "SOFTWARE TESTING"
module: "Module 3: Advanced White Box Testing & Security Testing:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ccc6"
status: "completed"
scrapedAt: "2026-05-20T17:26:37.646Z"
---
# Software Testing: Module 3 - Advanced White Box Testing & Security Testing

## Topic: Data Flow Criteria

This module delves into advanced white-box testing techniques, focusing on how data flows through a program to uncover defects. We will explore **Data Flow Criteria**, specifically **du-paths**, **du-pairs**, and their **subsumption relationships**. Understanding these criteria is crucial for achieving thorough structural coverage beyond simple statement or branch coverage.

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Define and understand the concepts of definitions, uses, and du-paths.
*   Explain the different types of du-pairs (e.g., specific, all-uses, definition-clear).
*   Describe and apply the Data Flow Testing criteria: du-path coverage, all-uses coverage, and definition-clear coverage.
*   Understand and explain subsumption relationships between different data flow testing criteria.
*   Identify scenarios where data flow testing is particularly beneficial.
*   Appreciate the role of data flow testing in uncovering specific types of defects.

---

### 1. Key Concepts and Definitions

#### 1.1. Definitions and Uses

**Definition:** A **definition** is a statement in the program that assigns a value to a variable. This includes initialization, assignment statements, parameter passing, and return values.

**Use:** A **use** is a point in the program where the value of a variable is referenced or accessed. This includes using a variable in an expression, a condition, a parameter, or a return statement.

**Types of Uses:**

*   **Computational Use (c-use):** The variable's value is used in an arithmetic or logical expression.
*   **Predicate Use (p-use):** The variable's value is used in a condition that determines the control flow (e.g., in an `if` statement, `while` loop condition, or `case` statement).

**Example:**

```c
int a = 5;         // Definition of 'a'
int b;
int c;

if (a > 0) {       // p-use of 'a'
    b = a * 2;     // c-use of 'a', Definition of 'b'
    c = b + 1;     // c-use of 'b', Definition of 'c'
} else {
    b = 0;         // Definition of 'b'
}

printf("%d\n", b); // c-use of 'b'
```

**Summary of Definitions and Uses in the Example:**

*   `a`: Definition at line 1, p-use at line 4.
*   `b`: Definition at line 6, Definition at line 9, c-use at line 11.
*   `c`: Definition at line 7.

#### 1.2. Du-Paths (Definition-Use Paths)

A **du-path** is a simple path from a definition to a use of that variable. A simple path is one that does not revisit any node (or statement) or edge (or transfer of control) more than once.

**Constraints for a Valid Du-Path:**

1.  The path must start at a statement where a variable is defined.
2.  The path must end at a statement where that same variable is used.
3.  All intermediate nodes (statements) on the path must not contain any other definition of the variable being traversed. If an intermediate statement defines the variable, then the path is no longer a valid du-path from the *initial* definition to the *final* use.

**Example (Continuing from the previous example):**

Let's consider the variable `a`.
*   Definition of `a` at line 1.
*   p-use of `a` at line 4.

The path from line 1 to line 4 is: `1 -> 4`. This is a valid du-path for `a` (def(a) at 1, use(a) at 4).

Now consider the variable `b`.
*   Definition of `b` at line 6.
*   c-use of `b` at line 11.

The path from line 6 to line 11 is: `6 -> 8 -> 11`. This is a valid du-path for `b` (def(b) at 6, use(b) at 11).

What about the definition of `b` at line 9?
*   Definition of `b` at line 9.
*   c-use of `b` at line 11.

The path from line 9 to line 11 is: `9 -> 11`. This is a valid du-path for `b` (def(b) at 9, use(b) at 11).

**Important Note:** If there's another definition of `b` on the path from `def(b) at 6` to `use(b) at 11`, then the original path is broken for that specific du-pair. For instance, if there was `b = b + 1;` on line 7, then the path `6 -> 7 -> 8 -> 11` would *not* be a valid du-path for `b` from `def(b) at 6` to `use(b) at 11`, because line 7 redefines `b`.

---

### 2. Data Flow Testing Criteria

Data flow testing criteria aim to ensure that every definition of a variable is exercised by at least one path that reaches a use of that variable.

#### 2.1. Du-Pair Coverage (Definition-Use Pair Coverage)

This criterion requires that for every pair `(d, u)` where `d` is a definition of a variable `v` and `u` is a use of `v`, and there exists a du-path from `d` to `u`, that du-path must be executed by the test suite.

**Types of Du-Pair Coverage:**

*   **Specific Du-Pair Coverage:** A test suite satisfies specific du-pair coverage if for every pair `(d, u)` where `d` is a definition and `u` is a use of a variable, and there is a du-path from `d` to `u`, there is at least one test case in the suite that executes this specific du-path.

*   **All-Uses Coverage:** This is a stronger criterion. A test suite satisfies all-uses coverage if for every variable `v`, for every definition `d` of `v`, and for every use `u` of `v` on *every* possible du-path from `d` to `u`, at least one du-path from `d` to `u` is executed.

    *   **Note on All-Uses:** The definition is sometimes interpreted as "for every variable `v`, for every definition `d` of `v`, and for every use `u` of `v`, there must be a path that covers `(d, u)`." This can be slightly ambiguous. A more precise and widely accepted interpretation is that *for every definition `d` and *every* use `u` of that definition, there must be a du-path from `d` to `u` that is exercised*.

*   **Definition-Clear Coverage:** This is an even stronger criterion. A test suite satisfies definition-clear coverage if for every variable `v`, for every definition `d` of `v`, every du-path from `d` to *any* use `u` of `v` is covered, *unless* there is another definition of `v` on that path before the use `u`.

    *   **In essence:** You need to cover all paths from a definition `d` to all possible uses `u` of that definition, *provided* that no other definition of the same variable appears on the path between `d` and `u`.

#### 2.2. Du-Path Coverage (as a broader term)

Sometimes "du-path coverage" is used more generally to imply covering *all* du-paths for *all* definitions and uses. In practice, this often refers to achieving a specific level of du-pair coverage like all-uses or definition-clear.

---

### 3. Subsumption Relationships

Subsumption means that if one criterion is satisfied, another criterion is automatically satisfied as well.

**Hierarchical Relationship:**

**Definition-Clear Coverage > All-Uses Coverage > Specific Du-Pair Coverage**

*   **Definition-Clear Coverage subsumes All-Uses Coverage:** If you satisfy Definition-Clear Coverage, you have by definition covered all uses for every definition. This means you have also covered all du-pairs that don't have intervening definitions.

*   **All-Uses Coverage subsumes Specific Du-Pair Coverage:** If you satisfy All-Uses Coverage, you ensure that for every definition `d`, every possible use `u` is reachable via at least one du-path. This implicitly covers all specific `(d, u)` pairs that have a valid du-path.

**Visualizing the Relationship:**

```
+---------------------------------+
| Definition-Clear Coverage       |
| (Strongest - Covers all d-u paths|
|  without intervening definitions)|
+---------------------------------+
        ^
        | subsumes
        |
+---------------------------------+
| All-Uses Coverage               |
| (Covers all d-u pairs           |
|  where a du-path exists)        |
+---------------------------------+
        ^
        | subsumes
        |
+---------------------------------+
| Specific Du-Pair Coverage       |
| (Covers at least one path       |
|  for each existing d-u pair)    |
+---------------------------------+
```

**Why is this important?**

Understanding these relationships helps testers choose an appropriate level of data flow coverage based on the criticality of the software and the desired thoroughness. If you achieve definition-clear coverage, you don't need to explicitly worry about achieving all-uses or specific du-pair coverage, as they are already met.

---

### 4. When is Data Flow Testing Particularly Beneficial?

Data flow testing is especially valuable in scenarios where:

*   **Variables have complex lifecycles:** When variables are defined, modified, and used across multiple functions or modules.
*   **Potential for uninitialized variables:** A common source of bugs, especially in C/C++. Data flow testing can help ensure all definitions reach their intended uses.
*   **Dead variables or unreachable code:** If a definition never reaches a use, it might indicate dead code or a programming error.
*   **Race conditions (in concurrent programming):** While not a direct focus, understanding data flow can hint at potential issues where the order of operations matters.
*   **Parameter passing errors:** Ensuring that parameters are correctly passed and their values are used as intended.
*   **Detecting specific error types:**
    *   **Uninitialized variable errors:** Where a variable is used before it's defined.
    *   **Variable overwritten errors:** Where a definition is lost before it can be used.
    *   **Dead variable errors:** Where a definition is never used.
    *   **Confused variable errors:** Where a definition of one variable is used in place of another.

---

### 5. Practice Questions and Exercises

**Scenario:** Consider the following C code snippet:

```c
1   int func(int x, int y) {
2       int a, b;
3
4       a = x + y;       // Def(a) at 4
5       if (a > 10) {    // p-use(a) at 5
6           b = a * 2;   // c-use(a) at 6, Def(b) at 6
7       } else {
8           b = a - 5;   // c-use(a) at 8, Def(b) at 8
9       }
10
11      return b + 1;    // c-use(b) at 11
12  }
```

**Questions:**

1.  **Identify all definitions and uses of variables `x`, `y`, `a`, and `b` in the code snippet.**
2.  **List all possible du-paths for variable `a`.**
3.  **List all possible du-paths for variable `b`.**
4.  **For the du-pairs `(def(a) at 4, use(a) at 5)` and `(def(a) at 4, use(a) at 8)`, what are the respective du-paths?**
5.  **For the du-pairs `(def(b) at 6, use(b) at 11)` and `(def(b) at 8, use(b) at 11)`, what are the respective du-paths?**
6.  **Which data flow criterion would require testing both the path `4 -> 5 -> 6 -> 11` and the path `4 -> 5 -> 8 -> 11`?**
7.  **If we have a test case that executes the path `1 -> 4 -> 5 -> 6 -> 11 -> 12`, which du-pairs are covered?**
8.  **Explain how definition-clear coverage would apply to variable `a` in this example.**

---

**Answers:**

1.  **Definitions and Uses:**
    *   `x`: Definition (parameter at line 1), c-use (at line 4).
    *   `y`: Definition (parameter at line 1), c-use (at line 4).
    *   `a`: Def (at line 4), p-use (at line 5), c-use (at line 6), c-use (at line 8).
    *   `b`: Def (at line 6), Def (at line 8), c-use (at line 11).

2.  **Du-Paths for `a`:**
    *   `def(a) at 4` to `p-use(a) at 5`: Path `4 -> 5` (No intermediate definitions of `a`).
    *   `def(a) at 4` to `c-use(a) at 6`: Path `4 -> 5 -> 6` (No intermediate definitions of `a`).
    *   `def(a) at 4` to `c-use(a) at 8`: Path `4 -> 5 -> 8` (No intermediate definitions of `a`).

3.  **Du-Paths for `b`:**
    *   `def(b) at 6` to `c-use(b) at 11`: Path `6 -> 11` (No intermediate definitions of `b`). **Note:** The path `6 -> 7 -> 8 -> 11` is NOT a du-path for `def(b) at 6` to `use(b) at 11` because line 8 redefines `b`.
    *   `def(b) at 8` to `c-use(b) at 11`: Path `8 -> 11` (No intermediate definitions of `b`).

4.  **Du-paths for `a`:**
    *   `(def(a) at 4, use(a) at 5)`: Path `4 -> 5`.
    *   `(def(a) at 4, use(a) at 8)`: Path `4 -> 5 -> 8`.

5.  **Du-paths for `b`:**
    *   `(def(b) at 6, use(b) at 11)`: Path `6 -> 11`.
    *   `(def(b) at 8, use(b) at 11)`: Path `8 -> 11`.

6.  **Data Flow Criterion:**
    The criterion that would require testing both paths is **All-Uses Coverage** (or Definition-Clear Coverage, as there are no intervening definitions of `a` on these paths). Specific du-pair coverage would only require one of these paths.

7.  **Covered Du-Pairs by Path `1 -> 4 -> 5 -> 6 -> 11 -> 12`:**
    *   `(def(x) at 1, use(x) at 4)`
    *   `(def(y) at 1, use(y) at 4)`
    *   `(def(a) at 4, use(a) at 5)`
    *   `(def(a) at 4, use(a) at 6)`
    *   `(def(b) at 6, use(b) at 11)`

8.  **Definition-Clear Coverage for `a`:**
    For `def(a) at 4`, there are two uses: `use(a) at 5` and `use(a) at 8`.
    *   The path from `def(a) at 4` to `use(a) at 5` is `4 -> 5`. There are no intervening definitions of `a`. So, this path must be covered.
    *   The path from `def(a) at 4` to `use(a) at 8` is `4 -> 5 -> 8`. There are no intervening definitions of `a`. So, this path must also be covered.
    Therefore, Definition-Clear Coverage for `a` requires covering both `4 -> 5` and `4 -> 5 -> 8`. This means a test case must be able to reach both the `if` condition and the `else` block's usage of `a`.

---

### 6. Important Points to Remember

*   **Data Flow Testing** is a white-box testing technique that focuses on the **flow of data** through a program.
*   It complements structural coverage (statement, branch) by ensuring that **variable definitions are used as intended**.
*   A **definition** assigns a value, and a **use** references a value. Uses can be computational (`c-use`) or predicate (`p-use`).
*   A **du-path** is a simple path from a definition to a use, with **no intermediate definitions** of the same variable.
*   **Specific Du-Pair Coverage** requires executing at least one du-path for each existing du-pair.
*   **All-Uses Coverage** requires executing at least one du-path for *every* use of *every* definition.
*   **Definition-Clear Coverage** requires executing all du-paths from a definition to any use, *unless* an intervening definition exists.
*   The subsumption order is **Definition-Clear > All-Uses > Specific Du-Pair**.
*   This testing is crucial for detecting bugs related to **uninitialized variables, variable overwrites, and dead variables**.
*   Tools can assist in identifying definitions, uses, and constructing test cases to satisfy data flow criteria.
