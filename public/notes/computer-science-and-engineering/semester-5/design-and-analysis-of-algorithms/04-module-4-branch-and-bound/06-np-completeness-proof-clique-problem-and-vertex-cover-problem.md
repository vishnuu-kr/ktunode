---
title: "NP Completeness proof - Clique Problem and Vertex Cover Problem"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 4: Branch and Bound "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b56f"
status: "completed"
scrapedAt: "2026-05-20T16:45:57.178Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS - Module 4: Branch and Bound - NP-Completeness Proofs: Clique & Vertex Cover

These notes cover the NP-Completeness proofs for the Clique Problem and Vertex Cover Problem, building upon the Branch and Bound concepts.

**Learning Outcomes:**

*   Understand the definitions of Clique and Vertex Cover problems.
*   Explain the concept of NP-Completeness and its significance.
*   Demonstrate the reduction from one NP-Complete problem to another.
*   Prove the NP-Completeness of the Clique Problem by reduction from 3-SAT.
*   Prove the NP-Completeness of the Vertex Cover Problem by reduction from Clique.

## 1. Key Concepts and Definitions

*   **NP (Non-deterministic Polynomial Time):** A class of problems for which a solution can be *verified* in polynomial time. In other words, if someone gives you a potential solution, you can check whether it's correct relatively quickly (in polynomial time).

*   **NP-Hard:** A problem is NP-Hard if every problem in NP can be reduced to it in polynomial time.  An NP-Hard problem is *at least as hard* as the hardest problems in NP.

*   **NP-Complete:** A problem is NP-Complete if it is both in NP and NP-Hard.  NP-Complete problems are the "hardest" problems in NP.  If you can find a polynomial-time algorithm to solve any NP-Complete problem, you can solve all problems in NP in polynomial time (and P = NP).

*   **Polynomial Time Reduction (≤p):**  A way to transform an instance of problem A into an instance of problem B in polynomial time, such that the answer to the instance of B tells you the answer to the instance of A.  If A ≤p B, and B is in P, then A is in P. Also, If A ≤p B, and A is NP-Complete, then B is NP-Hard.

*   **Clique:** A clique in an undirected graph G = (V, E) is a subset of vertices V' ⊆ V such that every two distinct vertices in V' are adjacent.  The *clique problem* asks whether a graph G contains a clique of size k.

*   **Vertex Cover:** A vertex cover in an undirected graph G = (V, E) is a subset of vertices V' ⊆ V such that for every edge (u, v) in E, at least one of u or v is in V'. The *vertex cover problem* asks whether a graph G contains a vertex cover of size k.

*   **3-SAT (3-Satisfiability):** A Boolean satisfiability problem where the Boolean formula is expressed in conjunctive normal form (CNF) with each clause containing exactly three literals. The 3-SAT problem asks whether there exists an assignment of variables that makes the entire formula evaluate to TRUE. 3-SAT is a known NP-Complete problem.

## 2. NP-Completeness Proofs

To prove a problem X is NP-Complete, we need to show two things:

1.  **X is in NP:**  We need to show that a potential solution to X can be verified in polynomial time.
2.  **X is NP-Hard:**  We need to show that a known NP-Complete problem can be reduced to X in polynomial time (Y ≤p X, where Y is NP-Complete).

## 3. NP-Completeness of the Clique Problem

**Theorem:** The Clique Problem is NP-Complete.

**Proof:**

1.  **Clique is in NP:**  Given a graph G = (V, E) and a subset of vertices V', we can verify in polynomial time whether V' forms a clique of size k. We simply check:
    *   Whether |V'| = k.
    *   For every pair of vertices u, v in V', whether the edge (u, v) exists in E. This takes O(k<sup>2</sup> * |E|) time. Since k <= |V|, this is polynomial time.

2.  **Clique is NP-Hard:** We will show this by reduction from 3-SAT. We will demonstrate that `3-SAT ≤p Clique`.

    **Reduction:**
    Given a 3-SAT instance (a Boolean formula in CNF with each clause containing exactly three literals), we need to construct a graph G = (V, E) and a number k, such that G has a clique of size k if and only if the 3-SAT formula is satisfiable.

    Let the 3-SAT formula be:

    `Φ = C1 ∧ C2 ∧ ... ∧ Ck`

    where each clause Ci has the form `(l1 ∨ l2 ∨ l3)`, where li is a literal (a variable or its negation).

    **Construction of G = (V, E) and k:**

    *   **Vertices (V):** For each clause Ci, create three vertices, one for each literal in the clause. We can represent these vertices as `(Ci, lj)`, where Ci is the clause number and lj is the literal in that clause. So, we have 3k vertices in total.
    *   **Edges (E):** Create an edge between two vertices `(Ci, lj)` and `(Cm, ln)` if and only if:
        *   `i ≠ m` (the vertices come from different clauses).
        *   `lj` is not the negation of `ln` (lj and ln are consistent).  For example, if lj is `x` and ln is `¬x`, there is NO edge between (Ci, x) and (Cm, ¬x).
    *   **k:**  Set k to the number of clauses in the 3-SAT formula (k).

    **Example:**

    Let's say we have the following 3-SAT formula:

    `Φ = (x ∨ ¬y ∨ ¬z) ∧ (¬x ∨ y ∨ z)`

    Here, k = 2 (number of clauses).

    *   Vertices: `(C1, x), (C1, ¬y), (C1, ¬z), (C2, ¬x), (C2, y), (C2, z)`
    *   Edges:
        *   (C1, x) is connected to (C2, y) and (C2, z) (because x and ¬x are inconsistent, no edge between (C1,x) and (C2, ¬x)).
        *   (C1, ¬y) is connected to (C2, ¬x), (C2, y), and (C2, z)
        *   (C1, ¬z) is connected to (C2, ¬x), (C2, y), and (C2, z)

    **Proof of Correctness:**

    *   **(Φ is satisfiable => G has a clique of size k):**  If Φ is satisfiable, then there exists a truth assignment to the variables such that each clause Ci has at least one literal that evaluates to TRUE. For each clause Ci, select one literal lj that evaluates to TRUE, and include the corresponding vertex (Ci, lj) in the set V'. Since each lj is TRUE, there are no inconsistencies between any pair of lj's selected. Therefore, the vertices in V' form a clique of size k.

    *   **(G has a clique of size k => Φ is satisfiable):** If G has a clique of size k, then each vertex in the clique must come from a different clause (because there's no edge between vertices of the same clause). Since the vertices in the clique are pairwise connected, there are no inconsistencies between the corresponding literals. Therefore, we can assign TRUE to the literals corresponding to the vertices in the clique, and this assignment will satisfy the 3-SAT formula Φ.

    **Polynomial Time:** The reduction takes polynomial time. The graph G has 3k vertices and O(k<sup>2</sup>) edges, and can be constructed in polynomial time.

    **Conclusion:** We have shown that Clique is in NP and that 3-SAT ≤p Clique. Therefore, the Clique problem is NP-Complete.

## 4. NP-Completeness of the Vertex Cover Problem

**Theorem:** The Vertex Cover Problem is NP-Complete.

**Proof:**

1.  **Vertex Cover is in NP:** Given a graph G = (V, E) and a subset of vertices V', we can verify in polynomial time whether V' forms a vertex cover of size k. We simply check:
    *   Whether |V'| = k.
    *   For every edge (u, v) in E, whether u ∈ V' or v ∈ V' (or both). This takes O(|E| * k) time. Since k <= |V|, this is polynomial time.

2.  **Vertex Cover is NP-Hard:** We will show this by reduction from the Clique Problem. We will demonstrate that `Clique ≤p Vertex Cover`.

    **Reduction:**
    Given a graph G = (V, E) and a number k (the clique size), we need to construct a graph G' = (V', E') and a number k' such that G has a clique of size k if and only if G' has a vertex cover of size k'.

    **Construction of G' = (V', E') and k':**

    *   **Vertices (V'):** V' = V (the same vertices as in G).
    *   **Edges (E'):** E' = the complement of E.  That is, an edge (u, v) is in E' if and only if (u, v) is *not* in E.
    *   **k':**  k' = |V| - k.

    **Example:**

    Let G = (V, E) be a graph with V = {1, 2, 3, 4} and E = {(1, 2), (1, 3), (2, 3)}. Let k = 3.

    Then, G' = (V', E') has V' = {1, 2, 3, 4} and E' = {(1, 4), (2, 4), (3, 4)}. k' = 4 - 3 = 1.

    **Proof of Correctness:**

    *   **(G has a clique of size k => G' has a vertex cover of size |V| - k):**  Suppose G has a clique C of size k.  Let V' = V - C (the set of vertices not in the clique).  Then |V'| = |V| - k.  We claim that V' is a vertex cover for G'.  Consider any edge (u, v) in E'. Since (u, v) is not in E, at most one of u or v can be in C (if both were in C, then (u, v) would have to be in E, contradicting the definition of E').  Therefore, at least one of u or v must be in V', which means that V' covers every edge in E'. Thus, V' is a vertex cover of size |V| - k.

    *   **(G' has a vertex cover of size |V| - k => G has a clique of size k):** Suppose G' has a vertex cover V' of size |V| - k. Let C = V - V'. Then |C| = k. We claim that C is a clique in G. Suppose, for the sake of contradiction, that C is not a clique. This means there exist two vertices u, v in C such that (u, v) is not in E. Therefore, (u, v) is in E'. Since V' is a vertex cover for G', either u ∈ V' or v ∈ V' (or both). But u and v are in C, and C = V - V', so neither u nor v can be in V'. This contradicts the fact that V' is a vertex cover. Therefore, C must be a clique in G.

    **Polynomial Time:** The reduction takes polynomial time.  Constructing the complement graph G' takes O(|V|<sup>2</sup>) time, and setting k' takes O(1) time.

    **Conclusion:** We have shown that Vertex Cover is in NP and that Clique ≤p Vertex Cover. Therefore, the Vertex Cover problem is NP-Complete.

## 5. Important Points to Remember

*   NP-Completeness proofs rely on the concept of polynomial time reduction.
*   To prove a problem X is NP-Complete, you must show X is in NP and reduce a known NP-Complete problem to X.
*   Reductions can be tricky, and require understanding the relationships between the problems being reduced.  A good reduction preserves the "yes" and "no" answers to the problems.
*   Understanding NP-Completeness helps in algorithm design, as it indicates the inherent difficulty of certain problems, and suggests that approximation algorithms or heuristics might be more practical.

## 6. Practice Questions/Exercises with Answers

**Question 1:**

Suppose you want to prove that problem A is NP-Complete.  What two things must you demonstrate?

**Answer:**

1.  Problem A is in NP (a solution can be verified in polynomial time).
2.  Problem A is NP-Hard (a known NP-Complete problem can be reduced to problem A in polynomial time).

**Question 2:**

Consider a graph G = (V, E) where V = {1, 2, 3, 4, 5} and E = {(1, 2), (2, 3), (3, 4), (4, 5), (5, 1)}. Does this graph have a clique of size 3?

**Answer:**

No. No three vertices form a complete subgraph. For example, vertices 1, 2, and 3 form a path but not a clique since (1,3) is not an edge.

**Question 3:**

Consider the same graph G as in Question 2.  Does this graph have a vertex cover of size 3?

**Answer:**

Yes. {1, 3, 4} is a vertex cover.  Edge (1, 2) is covered by 1, (2, 3) is covered by 3, (3, 4) is covered by 3 and 4, (4, 5) is covered by 4, and (5, 1) is covered by 1.

**Question 4:**

Suppose you are given an instance of the 3-SAT problem.  How would you construct the graph G = (V, E) in the reduction to the Clique problem? Explain the vertices and edges clearly.

**Answer:**

Given a 3-SAT formula Φ = C1 ∧ C2 ∧ ... ∧ Ck, where each clause Ci has the form (l1 ∨ l2 ∨ l3):

*   **Vertices (V):** For each clause Ci, create three vertices, one for each literal in the clause.  Represent these vertices as (Ci, lj), where Ci is the clause number and lj is the literal in that clause.
*   **Edges (E):** Create an edge between two vertices (Ci, lj) and (Cm, ln) if and only if:
    *   i ≠ m (the vertices come from different clauses).
    *   lj is not the negation of ln (lj and ln are consistent).  If lj is 'x' and ln is '¬x', there is NO edge between (Ci, x) and (Cm, ¬x).

**Question 5:**

Suppose you have a graph G and want to reduce the Clique problem to the Vertex Cover problem.  How do you construct the graph G' and the value k' needed for the vertex cover problem?

**Answer:**

Given a graph G = (V, E) and a desired clique size k:

*   **Vertices (V'):** V' = V (the same vertices as in G).
*   **Edges (E'):** E' = the complement of E.  An edge (u, v) is in E' if and only if (u, v) is *not* in E.
*   **k':** k' = |V| - k.

These notes provide a detailed explanation of the NP-Completeness proofs for the Clique and Vertex Cover problems. Understanding these proofs is crucial for anyone studying algorithm design and analysis, as it provides insight into the limits of efficient computation. Remember to practice reductions to solidify your understanding!
