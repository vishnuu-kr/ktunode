---
title: "Network Design Problems - Steiner tree problem, Traveling Salesman Problem (TSP), Multicommodity flow problem. (Chapter 7)"
subject: "APPROXIMATION ALGORITHMS"
module: "Module 4: Inapproximability Results "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c383"
status: "completed"
scrapedAt: "2026-05-20T17:00:48.743Z"
---
# APPROXIMATION ALGORITHMS: Module 4: Inapproximability Results

## Topic: Network Design Problems - Steiner Tree Problem, Traveling Salesman Problem (TSP), Multicommodity Flow Problem

### Chapter 7

---

## Introduction to Inapproximability Results

This module delves into **inapproximability results**, which are crucial for understanding the inherent difficulty of certain computational problems. While approximation algorithms aim to find near-optimal solutions, inapproximability results prove that, for some problems, no polynomial-time algorithm can achieve an approximation ratio better than a certain bound (unless P=NP). This chapter focuses on how these results apply to fundamental **Network Design Problems**.

---

## 1. Steiner Tree Problem

### 1.1. Definition

The **Steiner Tree Problem** (STP) is a classic NP-hard problem in graph theory. Given an undirected, edge-weighted graph $G=(V, E)$ and a subset of vertices $T \subseteq V$ called **terminals**, the goal is to find a minimum-weight subgraph that connects all vertices in $T$. This subgraph is guaranteed to be a tree, and it may include vertices from $V \setminus T$, called **Steiner vertices**, if their inclusion leads to a lower total edge weight.

*   **Input:** A graph $G=(V, E)$ with non-negative edge weights $w(e)$ for each $e \in E$, and a set of terminals $T \subseteq V$.
*   **Output:** A tree $S$ that spans all vertices in $T$ (i.e., for any $u, v \in T$, there is a path between $u$ and $v$ in $S$), such that the sum of the weights of the edges in $S$ is minimized.

### 1.2. Variations

*   **Metric Steiner Tree Problem:** In this version, the edge weights satisfy the triangle inequality. This is often assumed when discussing approximation algorithms because it allows us to transform general graphs into metric graphs.
*   **Uncapacitated Steiner Tree Problem:** The edges have no capacity constraints.

### 1.3. Approximability

The Steiner Tree Problem is known to be **APX-hard**, meaning there exists a constant $\epsilon > 0$ such that no polynomial-time algorithm can approximate the optimal solution within a factor of $(1 + \epsilon)$.

*   **Current Best Known Approximation Ratio:** The best known polynomial-time approximation algorithm for the Metric Steiner Tree Problem achieves an approximation ratio of **$1.386$**.

### 1.4. Key Concepts and Connections

*   **Minimum Spanning Tree (MST):** The MST of a graph connects all vertices with minimum total edge weight. However, it might not specifically connect the designated terminals.
*   **Shortest Path Tree:** A tree rooted at a specific vertex connecting all other vertices.
*   **Relationship to TSP:** There are connections between STP and TSP, especially in the metric case. An MST on the complete graph formed by the terminals can serve as a basis for an approximation algorithm.

### 1.5. Example

Consider a graph with vertices {A, B, C, D} and terminals {A, D}.
Edges and weights: (A,B, 2), (A,C, 5), (B,C, 1), (B,D, 3), (C,D, 2).

**Optimal Steiner Tree:**
The edges (A,B), (B,D), (B,C) form a tree connecting A and D. The total weight is 2 + 3 + 1 = 6. Vertex C is a Steiner vertex.

If we only considered terminals {A, D}, the shortest path between A and D is A-B-D with weight 2+3=5. However, this doesn't account for potentially using other vertices to reduce the overall tree cost.

### 1.6. Practice Questions

**Question 1:** In the Steiner Tree Problem, what is the role of "Steiner vertices"?
**Question 2:** What does it mean for a problem to be "APX-hard"?

**Answers:**
1.  Steiner vertices are vertices that are not terminals but are included in the Steiner tree to reduce the total edge weight. They act as intermediate points to connect terminals more efficiently.
2.  A problem is APX-hard if there is no polynomial-time algorithm that can approximate the optimal solution within a factor of $(1 + \epsilon)$ for some constant $\epsilon > 0$, unless P=NP.

---

## 2. Traveling Salesman Problem (TSP)

### 2.1. Definition

The **Traveling Salesman Problem (TSP)** is a famous NP-hard problem. Given a list of cities and the distances between each pair of cities, the goal is to find the shortest possible route that visits each city exactly once and returns to the origin city.

*   **Input:** A complete graph $G=(V, E)$ where $V$ is the set of cities and $E$ is the set of all possible edges between pairs of cities. Each edge $(u, v)$ has a non-negative weight $w(u, v)$ representing the distance between city $u$ and city $v$.
*   **Output:** A Hamiltonian cycle (a tour that visits every vertex exactly once and returns to the starting vertex) with the minimum total weight.

### 2.2. Variations

*   **Metric TSP:** The edge weights satisfy the triangle inequality ($d(u, v) \le d(u, w) + d(w, v)$ for all $u, v, w$). This is a common assumption for approximation algorithms.
*   **Symmetric TSP:** The distance from city $u$ to city $v$ is the same as from city $v$ to city $u$ ($w(u, v) = w(v, u)$).
*   **Asymmetric TSP:** The distances can be different in each direction ($w(u, v) \ne w(v, u)$).

### 2.3. Approximability

The Metric TSP is known to be **APX-hard**. This means that unless P=NP, there is no polynomial-time algorithm that can solve the Metric TSP with an approximation ratio better than a constant.

*   **Christofides' Algorithm:** For Metric TSP, Christofides' algorithm provides a $1.5$-approximation in polynomial time. This was the best known approximation ratio for a long time.
*   **Current Best Known Approximation Ratio:** The best known approximation ratio for Metric TSP is **$1.5$**.

### 2.4. Key Concepts and Connections

*   **Hamiltonian Cycle:** A cycle that visits every vertex exactly once. Finding a Hamiltonian cycle is NP-complete. TSP seeks the *shortest* Hamiltonian cycle.
*   **Minimum Spanning Tree (MST):** An MST can be used as a basis for approximating TSP. A tour can be constructed by traversing the MST, but this needs refinement to avoid revisiting vertices unnecessarily.
*   **Perfect Matching:** In the context of Christofides' algorithm, finding a minimum-weight perfect matching in an auxiliary graph is a key step.

### 2.5. Example

Consider 4 cities A, B, C, D with the following distances:
A to B: 10
A to C: 15
A to D: 20
B to C: 35
B to D: 25
C to D: 30

(Assuming symmetric distances)

**Possible Tours:**
1.  A -> B -> D -> C -> A: 10 + 25 + 30 + 15 = 80
2.  A -> C -> D -> B -> A: 15 + 30 + 25 + 10 = 80
3.  A -> B -> C -> D -> A: 10 + 35 + 30 + 20 = 95

The optimal tour here would be 80 (e.g., A-B-D-C-A).

### 2.6. Practice Questions

**Question 1:** What is the key difference between TSP and finding a Hamiltonian cycle?
**Question 2:** What property must edge weights satisfy for Christofides' algorithm to work and guarantee a $1.5$-approximation?

**Answers:**
1.  Finding a Hamiltonian cycle aims to find *any* cycle that visits every vertex exactly once. TSP aims to find the *shortest* such cycle.
2.  The edge weights must satisfy the triangle inequality.

---

## 3. Multicommodity Flow Problem

### 3.1. Definition

The **Multicommodity Flow Problem** (MCFP) generalizes the single-commodity flow problem. In MCFP, there are multiple distinct "commodities," each requiring a flow from a specific source to a specific sink. The problem involves routing these distinct flows simultaneously through a network, subject to capacity constraints on the edges.

*   **Input:**
    *   A directed graph $G=(V, E)$.
    *   Edge capacities $c(e)$ for each edge $e \in E$.
    *   A set of $K$ commodities, each specified by a source-sink pair $(s_k, t_k)$ and a demand $d_k$ (or a total flow amount to be routed).
*   **Output:**
    *   A flow $f_k(e)$ for each commodity $k$ on each edge $e \in E$ such that:
        *   **Flow Conservation:** For each commodity $k$ and each vertex $v \notin \{s_k, t_k\}$, the total flow entering $v$ equals the total flow leaving $v$.
        *   **Capacity Constraints:** For each edge $e \in E$, the sum of flows of all commodities through that edge does not exceed its capacity: $\sum_{k=1}^K f_k(e) \le c(e)$.
        *   **Demand Satisfaction:** For each commodity $k$, the net flow out of its source $s_k$ is at least $d_k$, and the net flow into its sink $t_k$ is at least $d_k$.

The goal is often to **maximize the total flow** across all commodities or to **satisfy all demands** if possible.

### 3.2. Variations and Related Problems

*   **Maximum Multicommodity Flow:** Maximize the sum of flows of all commodities, or the sum of fractions of demands met.
*   **Feasibility Multicommodity Flow:** Determine if it's possible to satisfy all demands simultaneously.
*   **Min-Cost Multicommodity Flow:** Assign costs to edges and find flows that satisfy demands at minimum total cost.

### 3.3. Approximability

The Multicommodity Flow Problem, especially in its feasibility and maximization versions, exhibits interesting approximability properties. While not strictly APX-hard in the same sense as TSP or STP for general networks, achieving exact solutions is computationally expensive (often requiring linear programming, which is polynomial but can have large constants).

*   **Approximation for Feasibility:** For certain classes of networks, particularly planar graphs, approximation algorithms exist. However, for general graphs, MCFP is closely related to the **isoperimetric inequality** and has connections to **cut sparseness**, which hint at its difficulty.
*   **Relationship to Cuts:** A fundamental result relates multicommodity flow to multicommodity cuts. The **Max-Flow Min-Cut Theorem** for single-commodity flow states that the maximum flow between two nodes equals the minimum capacity of a cut separating them. For multicommodity flow, a generalized version exists: the **Multicommodity Max-Flow Min-Cut Theorem**, which states that the maximum total flow is equal to the minimum capacity of a multicommodity cut. However, finding this minimum cut is often as hard as solving the flow problem itself.

### 3.4. Inapproximability Implications

The difficulty in approximating MCFP stems from its structure and its connection to global network properties. Proving strong inapproximability results for general MCFP is challenging due to its formulation often relying on linear programming. However, research has shown that for certain variations or specific network structures, significant approximation gaps can be proven.

*   For example, achieving constant-factor approximations for unsplitable multicommodity flow (where flow for a commodity must follow a single path) is known to be hard.

### 3.5. Example

Consider a network with two commodities:
*   Commodity 1: Source A, Sink D, Demand 5.
*   Commodity 2: Source B, Sink C, Demand 3.

Edges and capacities:
(A,X, 10), (X,Y, 8), (Y,D, 10)
(B,Y, 7), (Y,C, 6)
(A,B, 5), (C,D, 5)

**Feasibility Check:**
Can we route 5 units from A to D and 3 units from B to C without exceeding edge capacities?

Let's try to send flow:
*   Commodity 1 (A->D):
    *   Path 1: A->X->Y->D. Let's send 5 units.
        *   Edge (A,X): 5 units (capacity 10, remaining 5)
        *   Edge (X,Y): 5 units (capacity 8, remaining 3)
        *   Edge (Y,D): 5 units (capacity 10, remaining 5)
*   Commodity 2 (B->C):
    *   Path 1: B->Y->C. Let's send 3 units.
        *   Edge (B,Y): 3 units (capacity 7, remaining 4)
        *   Edge (Y,C): 3 units (capacity 6, remaining 3)

In this scenario, both demands are met, and all edge capacities are respected.

If the capacity of (X,Y) was only 4, then routing 5 units for commodity 1 would fail. We'd need to consider alternative paths or split the flow.

### 3.6. Practice Questions

**Question 1:** What is the core difference between single-commodity flow and multicommodity flow?
**Question 2:** What is the generalized version of the Max-Flow Min-Cut theorem for multicommodity flow?

**Answers:**
1.  Single-commodity flow deals with routing a single type of flow from one source to one sink. Multicommodity flow involves routing multiple distinct types of flows, each with its own source-sink pair, simultaneously through the network, subject to shared capacity constraints.
2.  The Multicommodity Max-Flow Min-Cut Theorem states that the maximum total multicommodity flow is equal to the minimum capacity of a multicommodity cut.

---

## 4. Key Takeaways on Inapproximability for Network Design

*   **NP-Hardness is a Starting Point:** Problems like Steiner Tree and TSP are NP-hard, meaning exact solutions are likely intractable. Approximation algorithms offer a practical alternative.
*   **Inapproximability Proves Limits:** Inapproximability results establish fundamental limits on how good an approximation we can achieve in polynomial time. They tell us that for certain problems, even finding a "good" approximation is extremely hard.
*   **APX-Hardness:** Many network design problems fall into the complexity class APX, meaning they have a constant-factor approximation ratio, but improving beyond a certain constant is believed to be impossible.
*   **Metric Assumptions Matter:** Many inapproximability results are proven for the metric versions of these problems. The triangle inequality significantly impacts the problem's structure and its approximability.
*   **Connections Between Problems:** Understanding the relationships between different network design problems can help transfer inapproximability results. For example, reductions from problems with known inapproximability to other problems can prove their hardness.
*   **Multicommodity Flow Complexity:** MCFP's complexity is tied to its relationship with cuts and linear programming. While not always exhibiting constant-factor inapproximability in the same way as TSP/STP, achieving high-quality approximations or exact solutions can be computationally demanding.

---

## Important Points to Remember

*   **$\epsilon$-approximation:** An algorithm is an $\epsilon$-approximation algorithm if it guarantees a solution that is within a factor of $(1+\epsilon)$ (for minimization problems) or $(1-\epsilon)$ (for maximization problems) of the optimal solution.
*   **Inapproximability Threshold:** An inapproximability result states that no polynomial-time algorithm can achieve an approximation ratio better than $c$ for some constant $c>1$ (unless P=NP).
*   **APX-hardness:** Implies that there is a constant $c$ such that no PTAS (Polynomial-Time Approximation Scheme) exists, unless P=NP.
*   **Reductions:** Many inapproximability proofs rely on reductions from known hard problems (like 3-SAT or vertex cover) to the problem in question.
*   **Metric TSP and Steiner Tree are APX-hard:** This means we cannot expect to find polynomial-time algorithms that approximate them arbitrarily well (unless P=NP). The best we can hope for is a constant-factor approximation.
*   **Multicommodity Flow is a richer problem:** Its approximability can vary depending on the specific variant and network structure, often linked to cut properties and linear programming formulations.

---

This concludes Module 4 on Inapproximability Results, focusing on key network design problems. Understanding these limitations is crucial for appreciating the challenges in designing efficient algorithms for these fundamental problems.
