---
title: "Counting trees"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 3: Trees"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af35"
status: "completed"
scrapedAt: "2026-05-20T16:13:36.456Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4

## Module 3: Trees

### Topic: Counting Trees

**Description:** This topic focuses on methods for counting different types of trees, a fundamental skill in combinatorics with applications in computer science, particularly in areas like algorithm analysis, data structure design, and network analysis.

**Learning Outcomes:** Upon completion of this topic, you should be able to:

1.  Define and differentiate between various types of trees (e.g., labeled vs. unlabeled, rooted vs. unrooted, ordered vs. unordered).
2.  Apply Cayley's formula to count labeled trees.
3.  Use Pólya's Enumeration Theorem (PET) for counting unlabeled trees (introduction and simple examples).
4.  Understand and apply generating functions to count trees of specific forms.
5.  Apply Catalan numbers to count full binary trees.

---

### 1. Introduction to Tree Counting

*   **Key Concept: Tree Isomorphism:** Two trees are isomorphic if there exists a bijection between their vertex sets that preserves adjacency. In simpler terms, if we can redraw one tree to look exactly like the other without changing the connections, they are isomorphic.

*   **Labeled Tree:** A tree where each vertex is assigned a unique label.

*   **Unlabeled Tree:** A tree where vertices are indistinguishable; only the connections matter.

*   **Rooted Tree:** A tree with a designated vertex called the root.

*   **Unrooted Tree:** A tree without a designated root.

*   **Ordered Tree:** A tree where the children of each vertex have a specific order. Usually considered left-to-right.

*   **Unordered Tree:** A tree where the children of each vertex have no specific order.  The order of children doesn't matter.

*   **Full Binary Tree:** A binary tree where every node (except the leaves) has exactly two children.

*   **Complete Binary Tree:** A binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

**Example 1:** Consider two trees with 3 vertices.
*   **Labeled:** If the vertices are labeled 1, 2, and 3, swapping labels creates distinct labeled trees (assuming different connections).
*   **Unlabeled:** All trees with 3 vertices and 2 edges are considered the same (up to isomorphism) if they are unlabeled.

**Example 2:** Two trees with the same connections may be considered different if they are rooted at different vertices or if the order of their children is different (ordered trees).

### 2. Cayley's Formula

*   **Statement:** The number of labeled trees on *n* vertices is *n^(n-2)*.

*   **Application:** Given *n* distinct objects (vertices), this formula tells us how many different ways we can connect them to form a tree.

*   **Proof Sketch (Optional - uses Prüfer Sequence):**  There exists a bijection between labeled trees with *n* vertices and sequences of length *n-2* where each entry is an integer between 1 and *n*.  Since there are *n^(n-2)* such sequences, there are *n^(n-2)* labeled trees.

**Example 3:** How many labeled trees are there with 4 vertices?

*   Using Cayley's formula, the answer is 4^(4-2) = 4^2 = 16.

**Example 4:** How many labeled trees are there with 10 vertices?

*   Using Cayley's formula, the answer is 10^(10-2) = 10^8 = 100,000,000.

**Practice Question 1:** How many labeled trees are there with 6 vertices?
    *   **Answer:** 6^(6-2) = 6^4 = 1296

**Practice Question 2:**  If a network of 7 computers needs to be connected in a tree-like structure, how many different ways can this be done (assuming each computer is uniquely identifiable)?
    *   **Answer:** 7^(7-2) = 7^5 = 16807

**Important Point:** Cayley's formula only applies to *labeled* trees.

### 3. Pólya's Enumeration Theorem (PET) - Introduction

*   **Overview:** Pólya's Enumeration Theorem (PET) provides a powerful tool for counting objects (including trees) up to symmetry. It addresses the problem of counting distinct configurations when some configurations are considered equivalent under a group of symmetries.  This is useful for counting unlabeled structures.

*   **Key Concepts (Simplified):**
    *   **Permutation Group (G):** A collection of permutations of a set (e.g., rotations, reflections).
    *   **Cycle Index (P_G):** A polynomial that represents the structure of the permutation group. It encodes the number of permutations with a specific cycle structure.
    *   **Figure Counting Series:**  A generating function representing the "weight" (or property) of each element being permuted (e.g., the number of vertices or edges).

*   **Simplified PET Formula:**  The number of orbits (distinct configurations up to symmetry) is obtained by substituting the figure counting series into the cycle index polynomial.

*   **Example 5 (Simple Application - Coloring a Square):**
    *   Consider a square and we want to color each side with either red (r) or blue (b).
    *   The symmetry group (G) of a square includes rotations (0, 90, 180, 270 degrees).
    *   The cycle index P_G(x1, x2, x4) = (1/4)(x1^4 + x2^2 + 2x4).
    *   The figure counting series is (r + b).  Each "figure" (side) can be red or blue.
    *   Substitute (r+b) for each variable:  (1/4)((r+b)^4 + (r^2+b^2)^2 + 2(r^4+b^4)).
    *   Expanding and simplifying gives the number of ways to color the square with a certain number of red/blue sides.  The constant term gives the total number of distinct colorings (up to symmetry).

*   **Challenges of applying PET to Trees:**  Defining the appropriate symmetry group and calculating the cycle index for complex tree structures can be quite complex. While PET is the theoretical underpinning for many tree counting problems, its direct application is beyond the scope of an introductory course.  We often rely on pre-computed results and theorems derived from PET.

**Example 6 (Conceptual - Unlabeled Trees):**  Counting unlabeled trees relies on identifying isomorphic trees and only counting one representative from each isomorphism class.  PET formalizes this process.

**Important Points:**
    *   PET is a powerful tool, but its full understanding requires a solid foundation in group theory.
    *   For simple cases, you can often count unlabeled trees by carefully drawing possibilities and eliminating duplicates by visual inspection.

### 4. Generating Functions for Counting Trees

*   **Generating Functions:**  A power series where the coefficients represent the number of objects of a certain size (e.g., the number of trees with a certain number of nodes).

*   **Ordinary Generating Function (OGF):** F(x) = a_0 + a_1 * x + a_2 * x^2 + a_3 * x^3 + ..., where a_i is the number of objects of size *i*.

*   **Exponential Generating Function (EGF):** F(x) = a_0 + a_1 * x/1! + a_2 * x^2/2! + a_3 * x^3/3! + ..., where a_i is the number of labeled objects of size *i*.

*   **Application to Trees:**  We can define generating functions to count trees based on various properties (e.g., number of nodes, height, degree sequence).  The coefficients of the power series will then give us the counts for that particular property.

*   **Example 7 (Simplified):** Let t_n be the number of rooted binary trees with *n* nodes. The ordinary generating function T(x) = Σ t_n * x^n satisfies the equation T(x) = x(1 + T(x)^2) which accounts for the root node and its two subtrees. Solving for T(x) gives T(x) = (1 - sqrt(1 - 4x)) / (2x).  Expanding this into a power series gives the coefficients t_n, which are related to the Catalan numbers (see next section).

**Important Points:**
    *   Constructing and manipulating generating functions for tree counting often involves complex algebraic manipulations.
    *   Software tools can be used to compute power series expansions.
    *   Generating functions are particularly useful when we have a recursive relationship between the number of trees of different sizes.

### 5. Catalan Numbers and Full Binary Trees

*   **Definition:** The *n*-th Catalan number, denoted by C_n, is a sequence of natural numbers that occur in various counting problems, often involving recursively defined objects.

*   **Formula:** C_n = (1 / (n + 1)) * (2n choose n) = (2n)! / ((n + 1)! * n!)

*   **Application to Full Binary Trees:** The number of full binary trees with *n* internal nodes (and 2n+1 total nodes) is given by the *n*-th Catalan number C_n.

**Example 8:** How many full binary trees are there with 3 internal nodes?

*   C_3 = (1 / (3 + 1)) * (2 * 3 choose 3) = (1/4) * (6 choose 3) = (1/4) * (6! / (3! * 3!)) = (1/4) * (720 / (6 * 6)) = (1/4) * 20 = 5.  There are 5 such trees.

**Example 9:** How many full binary trees are there with 4 internal nodes?

*   C_4 = (1 / (4 + 1)) * (2 * 4 choose 4) = (1/5) * (8 choose 4) = (1/5) * (8! / (4! * 4!)) = (1/5) * (40320 / (24 * 24)) = (1/5) * 70 = 14.  There are 14 such trees.

**Practice Question 3:** How many full binary trees are there with 2 internal nodes?
    *   **Answer:** C_2 = (1 / (2 + 1)) * (2 * 2 choose 2) = (1/3) * (4 choose 2) = (1/3) * 6 = 2

**Practice Question 4:**  A company is designing a tournament bracket where each match eliminates one player.  If there are 7 players, how many different ways can the tournament bracket be structured (assuming a full binary tree structure where internal nodes represent matches)?
    *   **Note:** 7 players imply 6 internal nodes (matches) to eliminate 6 players and leave one winner.
    *   **Answer:** C_6 = (1 / (6 + 1)) * (2 * 6 choose 6) = (1/7) * (12 choose 6) = (1/7) * 924 = 132.

**Important Points:**
    *   Catalan numbers appear in many seemingly unrelated combinatorial problems.
    *   Understanding their application to full binary trees is a classic example.

---

### Summary of Key Points

*   **Tree Types:** Labeled/Unlabeled, Rooted/Unrooted, Ordered/Unordered significantly affect counting.
*   **Cayley's Formula:**  *n^(n-2)* for labeled trees on *n* vertices.
*   **Pólya's Enumeration Theorem:** Accounts for symmetry when counting unlabeled structures (conceptually introduced).
*   **Generating Functions:**  Powerful tool to represent and solve tree counting problems.
*   **Catalan Numbers:** Count full binary trees; C_n = (1 / (n + 1)) * (2n choose n).

### Further Exploration

*   Explore the proof of Cayley's formula using Prüfer sequences.
*   Investigate other applications of Catalan numbers (e.g., Dyck paths, balanced parentheses).
*   Study more advanced techniques for generating function manipulation.
*   Explore software packages designed for combinatorial computation.
