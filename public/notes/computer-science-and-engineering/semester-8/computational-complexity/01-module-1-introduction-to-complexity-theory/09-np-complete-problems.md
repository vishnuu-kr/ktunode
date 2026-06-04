---
title: "NP-complete problems"
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 1: Introduction to Complexity Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca0f"
status: "completed"
scrapedAt: "2026-05-20T17:23:51.530Z"
---
# COMPUTATIONAL COMPLEXITY: Module 1: Introduction to Complexity Theory

## Topic: NP-Complete Problems

---

### 1. Learning Outcomes

By the end of this topic, you should be able to:

*   **Define** the classes P and NP.
*   **Explain** the significance of the P vs. NP problem.
*   **Define** polynomial-time reducibility.
*   **Define** NP-completeness and the properties of NP-complete problems.
*   **Identify** and **describe** some classic NP-complete problems.
*   **Understand** the implications of finding a polynomial-time algorithm for an NP-complete problem.

---

### 2. Key Concepts and Definitions

This section covers the foundational concepts necessary to understand NP-complete problems.

#### 2.1 Complexity Classes: P and NP

**Definition: Class P (Polynomial Time)**

*   **What it is:** The set of all decision problems that can be solved by a deterministic Turing machine in polynomial time.
*   **"Solved" means:** There exists an algorithm that, given an input of size *n*, runs in $O(n^k)$ time for some constant *k*.
*   **Intuition:** Problems in P are considered "efficiently solvable" or "tractable" by computers.
*   **Examples:**
    *   **Sorting:** Determining if a list of *n* numbers is sorted.
    *   **Searching:** Determining if a specific value exists in a sorted list.
    *   **Shortest Path:** Determining if there is a path between two nodes in a graph with total weight less than a given value *k*.
    *   **Satisfiability (SAT) for 2-CNF:** Determining if a Boolean formula in Conjunctive Normal Form with at most two literals per clause is satisfiable.

**Definition: Class NP (Nondeterministic Polynomial Time)**

*   **What it is:** The set of all decision problems for which a proposed solution (a "certificate" or "witness") can be *verified* by a deterministic Turing machine in polynomial time.
*   **"Verified" means:** If a "yes" instance has a solution, there exists a certificate that can be checked in polynomial time. If it's a "no" instance, no certificate will pass the verification.
*   **Intuition:** Problems in NP are those where, if we are given a potential solution, we can quickly check if it's correct. These are also called "efficiently verifiable" problems.
*   **Analogy:** Imagine a detective trying to solve a crime.
    *   **P:** The detective can solve the crime quickly (e.g., identify the culprit through a straightforward investigation).
    *   **NP:** If someone gives the detective a suspect, they can quickly verify if that suspect has the motive, opportunity, and means to commit the crime. However, finding the suspect in the first place might be very hard.
*   **Examples:**
    *   **Satisfiability (SAT):** Given a Boolean formula in CNF, is there an assignment of truth values to variables that makes the formula true?
        *   *Certificate:* A truth assignment to the variables.
        *   *Verification:* Substitute the truth values into the formula and evaluate it. This takes polynomial time.
    *   **Hamiltonian Path:** Given a graph, does there exist a path that visits every vertex exactly once?
        *   *Certificate:* A sequence of vertices representing a path.
        *   *Verification:* Check if the sequence visits each vertex exactly once and if consecutive vertices in the sequence are connected by an edge. This takes polynomial time.
    *   **Clique:** Given a graph and an integer *k*, does there exist a subset of *k* vertices such that every pair of vertices in the subset is connected by an edge?
        *   *Certificate:* A subset of *k* vertices.
        *   *Verification:* Check if all pairs of vertices within the subset are connected by an edge. This takes polynomial time.

#### 2.2 The P vs. NP Problem

*   **The Question:** Is P equal to NP ($P \stackrel{?}{=} NP$)?
*   **What it means:** If $P = NP$, it would mean that any problem whose solution can be *verified* quickly can also be *solved* quickly. This would have profound implications across many fields.
*   **Current Belief:** Most computer scientists believe that $P \neq NP$. This is because many seemingly difficult problems have been proven to be NP-complete, and no polynomial-time algorithm has been found for any of them despite extensive research.
*   **Significance of NP-complete problems:** They are the "hardest" problems in NP. If we find a polynomial-time algorithm for *any single* NP-complete problem, then we can solve *all* problems in NP in polynomial time, implying $P = NP$.

#### 2.3 Polynomial-Time Reducibility

**Definition: Polynomial-Time Reducibility (denoted by $\leq_p$)**

*   **What it is:** A transformation of an instance of problem A into an instance of problem B such that:
    1.  The transformation can be performed in polynomial time.
    2.  The original instance of A has a "yes" answer if and only if the transformed instance of B has a "yes" answer.
*   **Notation:** Problem A is reducible to problem B in polynomial time, written as $A \leq_p B$.
*   **Intuition:** If we can reduce problem A to problem B, it means that B is at least as "hard" as A. If we had a fast solver for B, we could use it to solve A quickly as well.

**Theorem:** If $A \leq_p B$ and B is in P, then A is in P.
**Theorem:** If $A \leq_p B$ and A is *not* in P, then B is *not* in P.

*   **How it's used in complexity theory:** To show that a problem B is "hard" (e.g., NP-hard), we can show that a known "hard" problem A can be reduced to B ($A \leq_p B$).

#### 2.4 NP-Completeness

**Definition: NP-Hard**

*   A problem H is **NP-hard** if *every* problem A in NP can be reduced to H in polynomial time ($A \leq_p H$ for all $A \in NP$).
*   **Intuition:** NP-hard problems are at least as hard as any problem in NP. They might not necessarily be decision problems, or they might not be in NP themselves (e.g., optimization versions of NP-complete problems).

**Definition: NP-Complete**

*   A problem C is **NP-complete** if it satisfies two conditions:
    1.  **C is in NP:** The problem C is an efficiently verifiable decision problem.
    2.  **C is NP-hard:** Every problem in NP can be reduced to C in polynomial time.
*   **Intuition:** NP-complete problems are the "hardest" problems within the NP class. If any NP-complete problem can be solved in polynomial time, then all problems in NP can be solved in polynomial time, meaning $P=NP$.

**Important Property:** If C is NP-complete and $C \leq_p D$ for some problem D, then D is NP-hard. If D is also in NP, then D is NP-complete.

#### 2.5 Classic NP-Complete Problems

These are foundational problems that have been proven NP-complete. New NP-complete problems are often proven by reducing one of these known problems to them.

*   **Boolean Satisfiability (SAT):**
    *   **Problem:** Given a Boolean formula in Conjunctive Normal Form (CNF), is there a truth assignment to its variables that makes the entire formula true?
    *   **Instance:** A formula like $(x_1 \lor \neg x_2 \lor x_3) \land (\neg x_1 \lor x_2 \lor x_3) \land (x_1 \lor x_2 \lor \neg x_3)$.
    *   **Significance:** The first problem proven to be NP-complete (Cook-Levin Theorem).

*   **3-Satisfiability (3-SAT):**
    *   **Problem:** A restricted version of SAT where each clause in the CNF formula has exactly three literals.
    *   **Instance:** A formula where each clause has exactly three literals, e.g., $(x_1 \lor \neg x_2 \lor x_3) \land (\neg x_1 \lor x_2 \lor x_3)$.
    *   **Significance:** A very important NP-complete problem, often used in reductions because its restricted structure simplifies some transformations.

*   **Vertex Cover:**
    *   **Problem:** Given a graph G=(V, E) and an integer *k*, does there exist a subset of vertices V' $\subseteq$ V such that |V'| $\leq$ k and for every edge (u, v) $\in$ E, at least one of u or v is in V'?
    *   **Intuition:** Find the smallest set of vertices that "covers" all edges.
    *   **Significance:** A classic graph problem.

*   **Hamiltonian Cycle/Path:**
    *   **Problem:** Given a graph G=(V, E), does there exist a cycle (or path) that visits every vertex exactly once?
    *   **Significance:** Intuitively difficult to find such a sequence.

*   **Clique:**
    *   **Problem:** Given a graph G=(V, E) and an integer *k*, does there exist a subset of *k* vertices such that every pair of vertices in the subset is connected by an edge (i.e., a complete subgraph of size k)?
    *   **Significance:** Related to finding dense subgraphs.

*   **Independent Set:**
    *   **Problem:** Given a graph G=(V, E) and an integer *k*, does there exist a subset of vertices V' $\subseteq$ V such that |V'| $\geq$ k and no two vertices in V' are connected by an edge?
    *   **Significance:** The complement of Vertex Cover. If S is an independent set, then V \ S is a vertex cover.

*   **Traveling Salesperson Problem (TSP) Decision Version:**
    *   **Problem:** Given a list of cities, distances between them, and a maximum distance *D*, does there exist a tour (a cycle visiting each city exactly once and returning to the start) with a total distance less than or equal to *D*?
    *   **Significance:** A famous optimization problem with a decision variant that is NP-complete.

#### 2.6 Implications of Finding a Polynomial-Time Algorithm for an NP-Complete Problem

*   **If P = NP:**
    *   All problems in NP, including all NP-complete problems, could be solved efficiently.
    *   This would revolutionize many fields:
        *   **Cryptography:** Many modern cryptographic systems rely on the assumed difficulty of problems like factoring large numbers (which is in NP, though not proven NP-complete), making them potentially insecure.
        *   **Optimization:** Problems like the Traveling Salesperson Problem, resource allocation, and scheduling could be solved optimally and efficiently.
        *   **Artificial Intelligence:** Areas like machine learning, theorem proving, and planning could see massive advancements.
        *   **Biology:** Protein folding, DNA sequencing, and drug discovery could be accelerated.
    *   It would fundamentally change our understanding of computation and the limits of what computers can do.

*   **If P $\neq$ NP (the widely accepted belief):**
    *   NP-complete problems remain computationally intractable for large instances.
    *   We must rely on approximation algorithms, heuristics, or exponential-time algorithms for these problems.
    *   This justifies the continued research into finding the "best possible" solutions for these hard problems within practical constraints.

---

### 3. Practice Questions and Exercises

**Question 1:**
Which of the following statements is TRUE?
(a) All problems in NP can be solved in polynomial time.
(b) If a problem is in P, it is also in NP.
(c) If a problem is NP-complete, then P = NP.
(d) If a problem can be verified in polynomial time, it must be in P.

**Question 2:**
Consider the problem of determining if a given graph has a Hamiltonian cycle. If we find a polynomial-time algorithm for this problem, what can we conclude about the relationship between P and NP? Explain why.

**Question 3:**
Define polynomial-time reducibility and explain its role in proving a problem is NP-hard.

**Question 4:**
Give an example of a problem that is in NP but not currently known to be in P or NP-complete.

**Question 5:**
What is the significance of the Cook-Levin Theorem?

---

### 4. Answers to Practice Questions

**Answer 1:**
**(b)** If a problem is in P, it means it can be solved in polynomial time. If it can be solved in polynomial time, then a proposed solution can certainly be verified in polynomial time (just solve it again and check if the solution matches). Therefore, any problem in P is also in NP.

*   (a) is false because we don't know if P=NP.
*   (c) is false. Proving a problem is NP-complete means it's as hard as the hardest problems in NP, but it doesn't automatically mean P=NP. It *implies* P=NP if we find a polynomial-time algorithm for it.
*   (d) is false. This is the definition of NP, not P. Problems in NP are verifiable in polynomial time, but not necessarily solvable in polynomial time.

**Answer 2:**
If we find a polynomial-time algorithm for the Hamiltonian cycle problem, which is known to be NP-complete, it would prove that **P = NP**.

**Explanation:**
1.  The Hamiltonian Cycle problem is in NP. (A proposed cycle can be verified in polynomial time by checking if it visits each vertex once and if consecutive vertices are connected.)
2.  Since the Hamiltonian Cycle problem is NP-complete, every problem in NP can be reduced to it in polynomial time.
3.  If we find a polynomial-time algorithm for Hamiltonian Cycle, then by the property of reducibility: if $A \leq_p B$ and B is in P, then A is in P.
4.  Since *every* problem in NP can be reduced to Hamiltonian Cycle (let's call it HC), and we found a polynomial-time algorithm for HC, then every problem in NP can be solved in polynomial time. This means NP $\subseteq$ P.
5.  We already know that P $\subseteq$ NP (because problems solvable in polynomial time are verifiable in polynomial time).
6.  Therefore, if Hamiltonian Cycle is solvable in polynomial time, then P = NP.

**Answer 3:**
**Polynomial-time reducibility** ($A \leq_p B$) means that an instance of problem A can be transformed into an instance of problem B using an algorithm that runs in polynomial time, such that the original instance of A has a "yes" answer if and only if the transformed instance of B has a "yes" answer.

Its role in proving a problem is **NP-hard** is crucial. To prove that a problem H is NP-hard, we show that *every* problem in NP can be reduced to H in polynomial time. The practical way to do this is to pick a *known* NP-complete problem (say, SAT or 3-SAT) and show that SAT $\leq_p H$. If we can successfully transform any instance of SAT into an instance of H such that the answers correspond, and this transformation is polynomial-time, then H is at least as hard as SAT. Since SAT is NP-complete, it means H is NP-hard.

**Answer 4:**
Many problems are believed to be in NP but not in P, but proving this is the core of the P vs. NP problem. A common example often cited is the **Integer Factorization Problem**.

*   **Problem:** Given an integer *n*, are there two integers *a* and *b*, both greater than 1 and less than *n*, such that *a* * b* = *n*? (This is a decision version related to finding factors).
*   **Why it's in NP:** If someone gives you two numbers *a* and *b*, you can verify in polynomial time (by performing multiplication) if their product equals *n*.
*   **Why it's not known to be in P:** No polynomial-time algorithm is known for integer factorization on a deterministic Turing machine.
*   **Why it's not known to be NP-complete:** It is not known if every problem in NP can be reduced to Integer Factorization in polynomial time. In fact, Integer Factorization is known to be in a complexity class called NP-intermediate, assuming P $\neq$ NP.

**Answer 5:**
The **Cook-Levin Theorem** (also known as the Cook's Theorem or Levin's Theorem) is significant because it was the **first problem proven to be NP-complete**.

*   **What it proved:** The Boolean Satisfiability Problem (SAT) is NP-complete.
*   **Significance:** This was a landmark result in computer science. It established that there exists at least one problem in NP that is "hardest" in the sense that all other problems in NP can be reduced to it. This provided a concrete anchor for the concept of NP-completeness and paved the way for proving the NP-completeness of many other important problems through reductions.

---

### 5. Important Points to Remember

*   **P vs. NP:** The central unsolved problem in theoretical computer science. Most believe $P \neq NP$.
*   **P:** Problems efficiently *solvable*.
*   **NP:** Problems efficiently *verifiable*.
*   **NP-complete:** The "hardest" problems in NP. Finding a polynomial-time algorithm for *any one* NP-complete problem implies $P = NP$.
*   **Reducibility ($\leq_p$)**: The tool to show problems are "at least as hard as" others.
*   **NP-Hard vs. NP-Complete:** NP-hard means at least as hard as any problem in NP. NP-complete means NP-hard *and* in NP.
*   **Implications of P=NP:** Would drastically change computation, security, and many scientific fields.
*   **Classic NP-complete problems (SAT, 3-SAT, Vertex Cover, etc.)** are the building blocks for proving NP-completeness of new problems.

---
