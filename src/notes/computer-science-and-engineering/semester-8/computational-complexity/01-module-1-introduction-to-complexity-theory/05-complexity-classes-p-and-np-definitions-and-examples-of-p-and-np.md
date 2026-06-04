---
title: "Complexity Classes P and NP - Definitions and examples of P and NP"
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 1: Introduction to Complexity Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca0b"
status: "completed"
scrapedAt: "2026-05-20T17:23:48.777Z"
---
# COMPUTATIONAL COMPLEXITY

## Module 1: Introduction to Complexity Theory

### Topic: Complexity Classes P and NP - Definitions and Examples

---

### Learning Outcomes:

*   Understand the fundamental concepts of computational complexity theory.
*   Define and differentiate between the complexity classes P and NP.
*   Identify and provide examples of problems belonging to P and NP.
*   Grasp the significance of the P vs. NP problem.

---

### 1. Introduction to Complexity Theory

Complexity theory is a branch of computer science that studies the resources (such as time and memory) required to solve computational problems. It aims to classify problems based on their inherent difficulty and understand the limits of computation.

**Key Concepts:**

*   **Algorithm:** A step-by-step procedure for solving a computational problem.
*   **Instance:** A specific input for a computational problem.
*   **Decision Problem:** A problem whose answer is either "yes" or "no". Most complexity classes are defined for decision problems.
*   **Resource:** Typically refers to **time** (number of elementary operations) or **space** (amount of memory used) by an algorithm.

---

### 2. The Class P: Polynomial Time Solvable Problems

**Definition:**

The class **P** (Polynomial time) consists of all **decision problems** that can be solved by a **deterministic Turing machine** (a theoretical model of computation) in **polynomial time**.

**What does "polynomial time" mean?**

An algorithm runs in polynomial time if the number of steps it takes to solve an instance of a problem is bounded by a polynomial function of the size of the input.

*   Let $n$ be the size of the input (e.g., the number of bits required to represent the input).
*   An algorithm runs in polynomial time if its running time is $O(n^k)$ for some constant $k \geq 0$.
    *   Examples: $O(n)$, $O(n^2)$, $O(n \log n)$, $O(n^3 + n)$.
    *   Non-examples: $O(2^n)$, $O(n!)$.

**Intuition:**

Problems in P are considered "efficiently solvable" or "tractable" by computers. As the input size grows, the time required to solve the problem grows at a manageable rate.

**Examples of Problems in P:**

*   **Sorting:** Given a list of numbers, arrange them in ascending order.
    *   *Algorithm:* Merge Sort, Quick Sort (average case) run in $O(n \log n)$ time, which is polynomial.
    *   *Input Size:* $n$ (number of elements).
*   **Searching:** Given a list and a target value, determine if the value exists in the list.
    *   *Algorithm:* Binary Search (on a sorted list) runs in $O(\log n)$ time, which is polynomial. Linear Search runs in $O(n)$ time, also polynomial.
    *   *Input Size:* $n$ (number of elements).
*   **Shortest Path:** Given a graph, two nodes $s$ and $t$, and edge weights, find the shortest path between $s$ and $t$.
    *   *Algorithm:* Dijkstra's algorithm runs in polynomial time.
    *   *Input Size:* $V+E$ (number of vertices and edges in the graph).
*   **Satisfiability of Boolean Formulas (for certain restricted classes):** For example, 2-Satisfiability ($2SAT$) can be solved in polynomial time.
*   **Primality Testing:** Determining if a given integer is a prime number.
    *   *Algorithm:* The AKS primality test runs in polynomial time.
    *   *Input Size:* $n$ (the number of bits in the integer).

---

### 3. The Class NP: Nondeterministically Polynomial Time Verifiable Problems

**Definition:**

The class **NP** (Nondeterministic Polynomial time) consists of all **decision problems** for which a proposed solution can be **verified** by a **deterministic Turing machine** in **polynomial time**.

**What does "verified in polynomial time" mean?**

If the answer to a problem is "yes", then there exists a "certificate" (or "witness") for this "yes" answer. A deterministic Turing machine can check if this certificate is valid for the given instance in polynomial time.

**Analogy:**

Imagine you're trying to solve a Sudoku puzzle (a "hard" problem). If someone gives you a completed Sudoku grid, you can quickly check if it's a valid solution (by verifying each row, column, and 3x3 box) in a relatively short amount of time, even if it took them a long time to find that solution.

**Key Idea:**

NP is *not* about how quickly a problem can be *solved*, but how quickly a proposed solution can be *verified*.

**Formal Definition:**

A decision problem $X$ is in NP if there exists a deterministic Turing machine $M$ such that:

1.  For every instance $i$ where the answer to $X$ is "yes", there exists a string $y$ (the certificate) such that $M$ accepts $(i, y)$ in polynomial time with respect to the size of $i$.
2.  For every instance $i$ where the answer to $X$ is "no", for all strings $y$, $M$ rejects $(i, y)$ in polynomial time with respect to the size of $i$.

The size of the certificate $y$ is also typically bounded by a polynomial in the size of the input $i$.

**Relationship between P and NP:**

*   **P is a subset of NP (P ⊆ NP).**
    *   If a problem can be solved in polynomial time (i.e., it's in P), then we can always verify a "yes" answer in polynomial time. How? By simply running the polynomial-time solving algorithm. If it outputs "yes", the certificate is implicitly the sequence of steps the algorithm took to arrive at "yes". If the algorithm runs in polynomial time, verification (by re-running the algorithm) also takes polynomial time.

**Examples of Problems in NP:**

*   **Satisfiability (SAT):** Given a Boolean formula in conjunctive normal form (CNF), does there exist an assignment of truth values to the variables that makes the formula true?
    *   *Certificate:* A truth assignment to the variables.
    *   *Verification:* Substitute the truth values into the formula and evaluate it. This takes polynomial time.
    *   *Difficulty:* No known polynomial-time algorithm exists for general SAT.
*   **Traveling Salesperson Problem (TSP) (Decision Version):** Given a list of cities, the distances between each pair of cities, and a total distance $K$, does there exist a tour (a path that visits every city exactly once and returns to the starting city) with a total distance less than or equal to $K$?
    *   *Certificate:* A specific tour (a permutation of the cities).
    *   *Verification:* Sum the distances of the edges in the proposed tour and check if the total distance is $\leq K$. This takes polynomial time.
    *   *Difficulty:* No known polynomial-time algorithm exists for general TSP.
*   **Hamiltonian Cycle:** Given a graph, does there exist a cycle that visits every vertex exactly once?
    *   *Certificate:* A sequence of vertices forming a Hamiltonian cycle.
    *   *Verification:* Check if the sequence visits every vertex exactly once and if consecutive vertices in the sequence are connected by an edge in the graph. This takes polynomial time.
    *   *Difficulty:* No known polynomial-time algorithm exists.
*   **Clique:** Given a graph and an integer $k$, does the graph contain a clique of size $k$ (a subgraph where every pair of distinct vertices is connected by an edge)?
    *   *Certificate:* A set of $k$ vertices.
    *   *Verification:* Check if all pairs of vertices in the proposed set are connected by an edge in the graph. This takes polynomial time.
    *   *Difficulty:* No known polynomial-time algorithm exists.

---

### 4. The P vs. NP Problem

**The Central Question:**

Is **P = NP**?

*   **If P = NP:** This would mean that every problem whose solution can be *verified* in polynomial time can also be *solved* in polynomial time. This would have profound implications: many problems currently considered intractable would suddenly become efficiently solvable. For example, we could efficiently find optimal solutions to TSP, crack most modern cryptography, and automate many complex decision-making processes.
*   **If P ≠ NP:** This would mean that there are problems in NP that are fundamentally harder to solve than to verify. These problems would remain intractable, and our current understanding of computational limits would be largely confirmed.

**Current Status:**

It is widely believed by computer scientists that **P ≠ NP**, but this has not been formally proven. The P vs. NP problem is one of the most important unsolved problems in computer science and mathematics, and a proof (in either direction) would be a groundbreaking achievement.

**NP-Completeness (Brief Mention):**

While not explicitly required for this topic, it's important to note that within NP, there is a subclass of problems called **NP-complete** problems. These are the "hardest" problems in NP. If any NP-complete problem can be solved in polynomial time, then all problems in NP can be solved in polynomial time (meaning P = NP). Conversely, if any NP-complete problem is proven to be intractable, then all NP-complete problems are intractable, and P ≠ NP.

---

### 5. Key Takeaways and Important Points to Remember

*   **P:** Problems solvable in polynomial time by a deterministic algorithm. These are considered "efficiently solvable" or "tractable".
*   **NP:** Problems whose "yes" instances have a certificate that can be *verified* in polynomial time by a deterministic algorithm.
*   **P ⊆ NP:** All problems in P are also in NP.
*   **P vs. NP:** The biggest open question is whether P = NP. Most believe P ≠ NP.
*   **Decision Problems:** Complexity classes are primarily defined for decision problems (yes/no answers).
*   **Polynomial Time:** The crucial resource constraint for defining P and NP verification. $O(n^k)$ where $k$ is a constant.

---

### 6. Practice Questions and Exercises

**Question 1:**

Which of the following running times is considered polynomial time for an input of size $n$?
a) $O(2^n)$
b) $O(n \log n)$
c) $O(n^n)$
d) $O(n!)$

**Answer:** b) $O(n \log n)$

**Explanation:** Polynomial time is characterized by exponents that are constants, not dependent on $n$. $O(n \log n)$ grows polynomially (or slightly faster than $n^1$ but still considered in the polynomial realm for complexity classes). $2^n$, $n^n$, and $n!$ are exponential or super-exponential.

---

**Question 2:**

Consider the decision problem: "Given a number $x$ and a number $k$, is $x$ divisible by $k$?" Is this problem in P? Justify your answer.

**Answer:** Yes, this problem is in P.

**Justification:** We can easily devise a deterministic algorithm to solve this. The standard division algorithm with remainder calculation (e.g., using the modulo operator) determines divisibility. The time complexity of this operation on a typical computer is roughly proportional to the number of bits in $x$ and $k$. If $n$ is the number of bits of the larger input, the division takes polynomial time (e.g., $O(n^2)$ or better depending on the specific algorithm used). Therefore, it is solvable in polynomial time.

---

**Question 3:**

Consider the decision problem: "Given a graph $G$ and an integer $k$, does $G$ contain a path of length exactly $k$ that visits every vertex exactly once?" (This is related to the Hamiltonian Path problem).

If you are given a specific sequence of vertices, how would you *verify* if it is a valid solution for a "yes" instance of this problem? Would this verification process take polynomial time?

**Answer:**

*   **Verification Process:**
    1.  Check if the given sequence of vertices contains exactly $n$ vertices, where $n$ is the number of vertices in the graph $G$.
    2.  Check if all vertices in the sequence are distinct (no repeated vertices).
    3.  Check if there is an edge in graph $G$ between each consecutive pair of vertices in the sequence (including an edge from the last vertex to the first if it's meant to be a cycle, or just checking up to the second-to-last vertex for a path).
    4.  Verify the length of the path. If it's a path of length $k$, it means there are $k+1$ vertices in the sequence, and $k$ edges. If it needs to visit every vertex exactly once, and the path has length $k=n-1$, then it visits all $n$ vertices.

*   **Polynomial Time Verification:** Yes, this verification process would take polynomial time.
    *   Checking the number of vertices is $O(1)$.
    *   Checking for distinct vertices can be done by sorting the sequence ($O(n \log n)$) or using a hash set ($O(n)$ on average).
    *   Checking edges: For each of the $n-1$ adjacent pairs of vertices in the sequence, we need to look up if an edge exists in the graph. If the graph is represented by an adjacency matrix, this lookup is $O(1)$, making the total edge checking $O(n)$. If it's an adjacency list, it could be up to $O(n \cdot \text{degree})$, which is still polynomial in the graph size.

Since all steps can be performed in polynomial time with respect to the size of the graph and the sequence, the problem belongs to NP.

---

**Question 4:**

If P = NP, what are the implications for problems like the Traveling Salesperson Problem (TSP)?

**Answer:** If P = NP, it would mean that the Traveling Salesperson Problem (TSP) would be solvable in polynomial time. This implies that there would exist an efficient algorithm to find the absolute shortest tour that visits all cities exactly once and returns to the starting point, regardless of how many cities there are.

---
