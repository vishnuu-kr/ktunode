---
title: "Examples of NP-complete problems"
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 1: Introduction to Complexity Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca11"
status: "completed"
scrapedAt: "2026-05-20T17:23:52.918Z"
---
# Computational Complexity: Module 1 - Introduction to Complexity Theory

## Topic: Examples of NP-Complete Problems

This module introduces the foundational concepts of computational complexity, focusing on the class of NP-complete problems. Understanding these problems is crucial for grasping the limits of efficient computation and the significance of complexity classes.

### Learning Outcomes

By the end of this topic, you will be able to:

*   Define and understand the concepts of **decision problems**, **search problems**, and **optimization problems**.
*   Understand the classes **P**, **NP**, and **NP-complete**.
*   Explain the concept of **polynomial-time reducibility** (often denoted as $\le_p$).
*   Recognize and describe at least three classic NP-complete problems.
*   Understand the implications of finding a polynomial-time algorithm for any NP-complete problem.

---

### Key Concepts and Definitions

#### 1. Decision Problems

A **decision problem** is a problem with a "yes" or "no" answer.

*   **Formal Definition:** A function $f: \Sigma^* \to \{\text{yes}, \text{no}\}$, where $\Sigma$ is an alphabet.
*   **Examples:**
    *   **Primality Testing:** Given an integer $n$, is $n$ a prime number?
    *   **Satisfiability (SAT):** Given a Boolean formula, is there an assignment of truth values to its variables that makes the formula true?

#### 2. Search Problems

A **search problem** is a problem where, if the answer to the corresponding decision problem is "yes," we want to find a specific "witness" or solution.

*   **Relationship to Decision Problems:** For every decision problem, there is a corresponding search problem.
*   **Examples:**
    *   **Finding a Prime Factor:** Given an integer $n$, find a prime factor of $n$. (Corresponding to Primality Testing)
    *   **Finding a Satisfying Assignment:** Given a Boolean formula, find an assignment of truth values to its variables that makes the formula true. (Corresponding to SAT)

#### 3. Optimization Problems

An **optimization problem** is a problem where we want to find a solution that maximizes or minimizes some objective function.

*   **Relationship to Decision Problems:** Many optimization problems can be related to decision problems by asking if a solution exists with an objective function value *at least* (or *at most*) a certain threshold.
*   **Examples:**
    *   **Traveling Salesperson Problem (TSP) - Optimization:** Given a list of cities and the distances between them, what is the shortest possible route that visits each city exactly once and returns to the origin city?
    *   **Knapsack Problem - Optimization:** Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.

#### 4. Complexity Classes

*   **P (Polynomial Time):** The class of decision problems that can be solved by a deterministic Turing machine in polynomial time. This means there exists an algorithm whose running time is bounded by $O(n^k)$ for some constant $k$, where $n$ is the size of the input. These problems are generally considered "efficiently solvable."
    *   **Examples:** Sorting, searching in a sorted array, primality testing (recently proven to be in P).

*   **NP (Nondeterministic Polynomial Time):** The class of decision problems for which a "yes" answer can be verified in polynomial time by a deterministic Turing machine, given a potential "certificate" or "witness." Alternatively, these are decision problems solvable in polynomial time by a nondeterministic Turing machine.
    *   **Key Idea:** If the answer to an NP problem is "yes," there exists a proof (certificate) that can be checked efficiently.
    *   **Examples:**
        *   **SAT:** If a formula is satisfiable, a satisfying assignment is the certificate. We can check if an assignment satisfies the formula in polynomial time.
        *   **Hamiltonian Path:** Given a graph, does there exist a path that visits every vertex exactly once? If yes, the path itself is the certificate.

#### 5. Polynomial-Time Reducibility ($\le_p$)

A decision problem $A$ is **polynomial-time reducible** to a decision problem $B$ (written as $A \le_p B$) if there exists a polynomial-time computable function $f$ such that for every instance $x$ of problem $A$, $x$ is a "yes" instance of $A$ if and only if $f(x)$ is a "yes" instance of problem $B$.

*   **Intuition:** If we can solve problem $B$ efficiently, we can also solve problem $A$ efficiently by transforming any instance of $A$ into an equivalent instance of $B$ using the function $f$.
*   **Significance:** If $A \le_p B$ and $B$ can be solved in polynomial time, then $A$ can also be solved in polynomial time. Conversely, if $A \le_p B$ and $A$ cannot be solved in polynomial time, then $B$ cannot be solved in polynomial time.

#### 6. NP-Hard and NP-Complete

*   **NP-Hard:** A problem $H$ is **NP-hard** if every problem $A$ in NP is polynomial-time reducible to $H$ (i.e., $A \le_p H$ for all $A \in \text{NP}$).
    *   **Note:** NP-hard problems do not necessarily have to be decision problems. They can be search or optimization problems.

*   **NP-Complete (NPC):** A decision problem $C$ is **NP-complete** if it satisfies two conditions:
    1.  $C \in \text{NP}$ (It's in the class NP).
    2.  $C$ is NP-hard (Every problem in NP is polynomial-time reducible to $C$).

    *   **Significance:** NP-complete problems are the "hardest" problems in NP. If we find a polynomial-time algorithm for *any single* NP-complete problem, then *all* problems in NP can be solved in polynomial time, meaning P = NP.

---

### Examples of NP-Complete Problems

To show a new problem is NP-complete, we typically prove it's in NP and then show that a known NP-complete problem is reducible to it.

#### 1. Satisfiability (SAT)

*   **Description:** Given a Boolean formula in conjunctive normal form (CNF), is there an assignment of truth values to the variables that makes the entire formula true?
    *   **CNF:** A conjunction (AND) of clauses, where each clause is a disjunction (OR) of literals (a variable or its negation).
    *   **Example Formula:** $(x_1 \lor \neg x_2 \lor x_3) \land (\neg x_1 \lor x_2 \lor x_3) \land (x_1 \lor x_2 \lor \neg x_3)$
*   **Why it's in NP:** Given a truth assignment, we can check if it satisfies the formula in polynomial time by evaluating each clause and then the entire conjunction.
*   **Significance:** SAT was the first problem proven to be NP-complete (by Cook-Levin Theorem). Many other NP-complete problems are proven by reducing SAT to them.

#### 2. 3-Satisfiability (3-SAT)

*   **Description:** A restricted version of SAT where each clause in the CNF formula has exactly three literals.
    *   **Example Formula:** $(x_1 \lor \neg x_2 \lor x_3) \land (\neg x_1 \lor x_2 \lor x_3) \land (x_1 \lor \neg x_2 \lor \neg x_3)$
*   **Why it's in NP:** Same as SAT.
*   **Significance:** 3-SAT is also NP-complete. It's often used for reductions because its restricted structure can be easier to manipulate.

#### 3. Vertex Cover

*   **Description:** Given an undirected graph $G = (V, E)$ and an integer $k$, does there exist a subset of vertices $V' \subseteq V$ such that $|V'| \le k$ and for every edge $(u, v) \in E$, at least one of $u$ or $v$ is in $V'$?
    *   **Vertex Cover:** A set of vertices that "covers" all edges.
*   **Why it's in NP:** Given a set of $k$ vertices, we can check if it is a vertex cover by iterating through all edges and verifying that at least one endpoint of each edge is in the given set. This check takes polynomial time.
*   **Significance:** Vertex Cover is a classic NP-complete problem.

#### 4. Hamiltonian Path / Cycle

*   **Description:**
    *   **Hamiltonian Path:** Given an undirected graph $G = (V, E)$, does there exist a path that visits every vertex in $V$ exactly once?
    *   **Hamiltonian Cycle:** Does there exist a path that visits every vertex exactly once and returns to the starting vertex? (A Hamiltonian cycle is a Hamiltonian path plus an edge back to the start).
*   **Why it's in NP:** Given a sequence of vertices, we can verify in polynomial time if it forms a Hamiltonian path/cycle by checking if all vertices are distinct and if consecutive vertices are connected by an edge.
*   **Significance:** Both Hamiltonian Path and Hamiltonian Cycle are NP-complete.

#### 5. Traveling Salesperson Problem (TSP) - Decision Version

*   **Description:** Given a weighted undirected graph $G = (V, E, w)$ where $w(u,v)$ is the distance between vertices $u$ and $v$, and an integer $k$, does there exist a Hamiltonian cycle whose total weight is at most $k$?
    *   **Note:** The optimization version asks for the minimum weight, while the decision version asks if a tour with weight *at most* $k$ exists.
*   **Why it's in NP:** Given a permutation of vertices, we can calculate the total weight of the tour and check if it's $\le k$ in polynomial time.
*   **Significance:** TSP is a famous NP-complete problem.

#### 6. Knapsack Problem - Decision Version

*   **Description:** Given a set of items, each with a weight $w_i$ and a value $v_i$, and a knapsack capacity $W$, and a minimum required value $K$, does there exist a subset of items whose total weight is at most $W$ and whose total value is at least $K$?
*   **Why it's in NP:** Given a subset of items, we can sum their weights and values and check if they meet the criteria in polynomial time.
*   **Significance:** Knapsack problem is NP-complete.

---

### The P vs. NP Question

*   **The Core Question:** Is P = NP? In other words, can every problem whose solution can be *verified* quickly also be *solved* quickly?
*   **Current Consensus:** Most computer scientists believe that P $\ne$ NP, meaning there are problems in NP that cannot be solved in polynomial time. However, this has not been mathematically proven.
*   **Implications of P=NP:** If P = NP, it would have profound implications:
    *   Many currently intractable problems (like breaking modern cryptography) would become easily solvable.
    *   Significant advancements in fields like AI, optimization, and scientific discovery would be possible.
*   **Implications of P $\ne$ NP:** If P $\ne$ NP, it confirms that there are fundamental limits to what can be computed efficiently, and we must continue to rely on approximation algorithms or heuristics for many hard problems.

---

### Important Points to Remember

*   **NP-complete problems are decision problems.** While optimization problems can be related to NP-completeness, the formal definition of NP-completeness applies to decision problems.
*   **Reducibility is key.** To prove a problem is NP-complete, you must show it's in NP and that a known NP-complete problem can be reduced to it.
*   **All NP-complete problems are equally hard (up to polynomial time).** If you solve one NP-complete problem efficiently, you solve them all.
*   **P vs. NP is an open question.** It's one of the most important unsolved problems in computer science and mathematics.
*   **NP-completeness doesn't mean "unsolvable," but "likely not solvable efficiently."** For small instances, NP-complete problems might be manageable.

---

### Practice Questions and Exercises

**1. Definitions:**
    a. Define the class P and give an example of a problem in P.
    b. Define the class NP. Why is SAT in NP?
    c. What does it mean for problem A to be polynomial-time reducible to problem B ($A \le_p B$)?
    d. Define an NP-complete problem.

**2. Problem Classification:**
    Consider the following problems. For each, state whether it is a decision, search, or optimization problem.
    a. Is a given graph bipartite?
    b. Find a maximum clique in a given graph.
    c. Does a graph contain a Hamiltonian cycle?
    d. Find the shortest path between two vertices in a weighted graph.

**3. Understanding Reducibility:**
    Suppose problem $A$ is NP-complete and $A \le_p B$. What can you conclude about problem $B$?
    a. If $B \in \text{NP}$, then $B$ is NP-complete.
    b. If $B \notin \text{NP}$, then $B$ is NP-hard.
    c. If $B$ can be solved in polynomial time, then P = NP.
    d. All of the above.

**4. NP-Completeness of a New Problem (Conceptual):**
    Imagine a new problem called "SuperGraph," which is defined as follows:
    *   **SuperGraph:** Given a graph $G = (V, E)$ and a list of $m$ pairs of vertices $(u_i, v_i)$, does there exist a vertex cover of size at most $k$ such that for each pair $(u_i, v_i)$, at least one of $u_i$ or $v_i$ is in the vertex cover?

    To show SuperGraph is NP-complete, you would need to:
    a. Prove SuperGraph is in NP.
    b. Prove that a known NP-complete problem (e.g., Vertex Cover) is reducible to SuperGraph.

    Briefly explain *how* you would approach proving these two steps (you don't need to provide the full reduction).

---

### Answers to Practice Questions

**1. Definitions:**
    a. **P:** The class of decision problems solvable by a deterministic Turing machine in polynomial time. **Example:** Sorting an array, searching in a sorted array.
    b. **NP:** The class of decision problems for which a "yes" answer can be verified in polynomial time given a certificate. **Why SAT is in NP:** Given a Boolean formula and a proposed truth assignment, we can check if the assignment satisfies the formula by substituting the truth values and evaluating the Boolean expression. This evaluation can be done in polynomial time with respect to the size of the formula.
    c. **$A \le_p B$:** There exists a polynomial-time computable function $f$ that transforms any instance $x$ of problem $A$ into an instance $f(x)$ of problem $B$, such that $x$ is a "yes" instance of $A$ if and only if $f(x)$ is a "yes" instance of $B$.
    d. **NP-complete:** A decision problem that is in NP and for which every problem in NP is polynomial-time reducible.

**2. Problem Classification:**
    a. **Is a given graph bipartite?** Decision Problem.
    b. **Find a maximum clique in a given graph.** Optimization Problem. (Decision version: Does a clique of size $k$ exist?)
    c. **Does a graph contain a Hamiltonian cycle?** Decision Problem.
    d. **Find the shortest path between two vertices in a weighted graph.** Optimization Problem. (Decision version: Is there a path of length at most $k$?)

**3. Understanding Reducibility:**
    Suppose problem $A$ is NP-complete and $A \le_p B$. What can you conclude about problem $B$?
    *   If $A \in \text{NP}$ and $A \le_p B$, then if $B$ can be solved in polynomial time, $A$ can also be solved in polynomial time. This implies that if $A$ is truly hard (i.e., not in P), then $B$ cannot be solved in polynomial time.
    *   If $A$ is NP-complete, then for any problem $X \in \text{NP}$, we have $X \le_p A$. Since $A \le_p B$, by transitivity of reducibility, $X \le_p B$ for all $X \in \text{NP}$. This means $B$ is NP-hard.

    Let's re-evaluate the options based on this:
    a. **If $B \in \text{NP}$, then $B$ is NP-complete.** This is **TRUE**. If $B$ is in NP and $A \le_p B$ where $A$ is NP-complete, then $B$ is NP-hard. A problem that is in NP and NP-hard is NP-complete.
    b. **If $B \notin \text{NP}$, then $B$ is NP-hard.** This is **TRUE**. As shown above, $B$ is NP-hard. The statement that $B \notin \text{NP}$ is a separate condition but doesn't invalidate the NP-hardness.
    c. **If $B$ can be solved in polynomial time, then P = NP.** This is **TRUE**. If $B$ is solvable in polynomial time and $A \le_p B$ (where $A$ is NP-complete, thus in NP), then $A$ is solvable in polynomial time. Since $A$ is NP-complete, all problems in NP are reducible to it, and thus all problems in NP would be solvable in polynomial time. This means P = NP.
    d. **All of the above.** This is **TRUE** because a, b, and c are all correct conclusions.

**4. Problem Classification (Conceptual):**
    a. **Prove SuperGraph is in NP:** To prove SuperGraph is in NP, we need to show that if the answer to SuperGraph is "yes," then there exists a certificate that can be verified in polynomial time.
        *   **Certificate:** A subset of vertices $V'$ of size at most $k$.
        *   **Verification:** Given $V'$, we would first check if $|V'| \le k$. Then, we would iterate through all edges $(u, v)$ in the original graph $G$ and check if at least one of $u$ or $v$ is in $V'$. Finally, we would iterate through the given $m$ pairs $(u_i, v_i)$ and check if for each pair, at least one of $u_i$ or $v_i$ is in $V'$. All these checks can be done in polynomial time with respect to the size of the graph and the number of pairs.

    b. **Prove Vertex Cover $\le_p$ SuperGraph:** To show Vertex Cover is reducible to SuperGraph, we need to construct a polynomial-time transformation from an instance of Vertex Cover to an instance of SuperGraph.
        *   **Instance of Vertex Cover (VC):** Graph $G_{VC} = (V_{VC}, E_{VC})$ and integer $k_{VC}$. Question: Does there exist a vertex cover of size $\le k_{VC}$?
        *   **Construct Instance of SuperGraph:** We need to create a graph $G_{SG}$ and an integer $k_{SG}$, and a list of $m$ pairs.
            *   Let $G_{SG} = G_{VC}$. So, $V_{SG} = V_{VC}$ and $E_{SG} = E_{VC}$.
            *   Let $k_{SG} = k_{VC}$.
            *   Now, what about the $m$ pairs? The additional constraint in SuperGraph is about covering specific pairs. The Vertex Cover problem requires covering *all* edges. If we want to force the solution to be a vertex cover of $G_{VC}$, we can make the $m$ pairs correspond to *all* the edges in $E_{VC}$.
            *   So, the list of $m$ pairs would be exactly the set of edges $E_{VC}$, where each edge $(u, v) \in E_{VC}$ is represented as the pair $(u, v)$. The number of pairs $m$ would be $|E_{VC}|$.
        *   **Equivalence:**
            *   If there is a vertex cover $V'$ of $G_{VC}$ with $|V'| \le k_{VC}$, then this same set $V'$ is a valid solution for SuperGraph because it covers all edges in $E_{VC}$ (which are the pairs in the SuperGraph instance) and its size is $\le k_{SG}$.
            *   If there is a solution $V''$ for the SuperGraph instance with $|V''| \le k_{SG}$, then $V''$ must cover all the specified pairs. Since these pairs are exactly the edges of $G_{VC}$, $V''$ must be a vertex cover of $G_{VC}$. Its size is $|V''| \le k_{SG} = k_{VC}$.
        *   **Polynomial Time:** The construction involves copying the graph and the integer, and listing the edges as pairs. This can all be done in polynomial time with respect to the size of the input graph.

---
