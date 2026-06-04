---
title: "Graph Coloring - Colorings for special classes of graphs (e.g., planar graphs, interval graphs)"
subject: "ADVANCED GRAPH ALGORITHMS"
module: "Module 3: Graph Matching "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b90a"
status: "completed"
scrapedAt: "2026-05-20T16:42:57.977Z"
---
# ADVANCED GRAPH ALGORITHMS: Module 3 - Graph Matching: Graph Coloring - Special Classes of Graphs

## Introduction

This module explores graph coloring, a fundamental concept in graph theory, focusing on colorings for specific classes of graphs: planar graphs and interval graphs.  We'll delve into the properties of these graphs and how they influence their colorability.

## Learning Outcomes

By the end of this module, you will be able to:

*   **Define** graph coloring and chromatic number.
*   **Explain** the Four Color Theorem and its implications for planar graphs.
*   **Apply** coloring algorithms to planar graphs.
*   **Define** interval graphs and their characteristics.
*   **Determine** the chromatic number of interval graphs using specific algorithms.
*   **Analyze** the efficiency and limitations of coloring algorithms for planar and interval graphs.

## 1. General Graph Coloring Concepts

### 1.1 Definitions

*   **Graph Coloring:** Assigning colors to the vertices of a graph such that no two adjacent vertices share the same color.
*   **Vertex Coloring:**  A graph coloring where the colors are assigned to the vertices. This is the most common type of graph coloring and the type we'll focus on in this module.
*   **Edge Coloring:** Assigning colors to the edges of a graph such that no two adjacent edges share the same color.
*   **Chromatic Number (χ(G)):** The minimum number of colors needed to color a graph *G* such that no two adjacent vertices have the same color.  A graph *G* is *k*-colorable if its chromatic number is less than or equal to *k*.
*   **k-Coloring:** An assignment of *k* colors to the vertices of a graph such that no two adjacent vertices receive the same color.
*   **k-Colorable:** A graph that admits a k-coloring.
*   **Independent Set:** A set of vertices in a graph, no two of which are adjacent.
*   **Clique:** A set of vertices in a graph, every two of which are adjacent (a complete subgraph).  The size of the largest clique in a graph G is denoted ω(G).

### 1.2  Key Concepts

*   **Lower Bound on Chromatic Number:**  The size of the largest clique, ω(G), provides a lower bound for the chromatic number:  χ(G) ≥ ω(G). This is because every vertex in the clique must have a different color.
*   **Upper Bound on Chromatic Number:** The chromatic number is at most Δ(G) + 1, where Δ(G) is the maximum degree of any vertex in G (Brooks' Theorem provides a tighter bound for connected graphs that are not complete graphs or odd cycles).
*   **Greedy Coloring:** A simple algorithm that iterates through the vertices in some order and assigns each vertex the smallest available color not used by its neighbors. The order of vertices significantly impacts the number of colors used.

## 2. Planar Graphs

### 2.1 Definition

*   **Planar Graph:** A graph that can be drawn on a plane (or sphere) without any edges crossing.  A *planar embedding* is such a drawing.

### 2.2  Key Properties

*   **Euler's Formula:** For a connected planar graph with *v* vertices, *e* edges, and *f* faces (regions), *v - e + f = 2*.
*   **Kuratowski's Theorem:** A graph is planar if and only if it does not contain a subgraph that is a subdivision of *K<sub>5</sub>* (complete graph on 5 vertices) or *K<sub>3,3</sub>* (complete bipartite graph on 3 vertices).
*   **Wagner's Theorem:** A graph is planar if and only if it does not have *K<sub>5</sub>* or *K<sub>3,3</sub>* as a minor.

### 2.3 The Four Color Theorem

*   **Statement:** Every planar graph is 4-colorable.
*   **Significance:** This theorem is a cornerstone of graph coloring and planar graph theory.  It implies that any map can be colored with at most four colors such that no two adjacent regions have the same color.
*   **Proof:** The proof is highly complex and relies on extensive computer-assisted case analysis.  No simple, elegant proof exists.

### 2.4 Coloring Planar Graphs

*   **Algorithm:** While the Four Color Theorem guarantees 4-colorability, finding an optimal coloring can still be computationally challenging (NP-hard in general).  Greedy coloring provides a practical, though not necessarily optimal, solution.  However, given a specific embedding, one can often find a 4-coloring relatively quickly.
    *   **Step 1:** Find a planar embedding of the graph.
    *   **Step 2:** Choose an arbitrary vertex ordering.
    *   **Step 3:** Apply a greedy coloring algorithm to the chosen vertex ordering.  Because the graph is planar, the greedy algorithm will often find a 4-coloring or a near-optimal coloring with a small number of colors (usually 5 or less).
*   **Limitations:**  The complexity of finding a planar embedding can be significant. While linear-time algorithms exist, they are not trivial to implement.  The ordering of vertices in the greedy algorithm significantly affects the quality of the coloring.

### 2.5 Example

Consider a simple planar graph representing a map with four countries.  Each country is a vertex, and an edge exists between two vertices if the countries share a border.  This graph is planar.  We can easily color it with four colors using the greedy algorithm.  In fact, it can likely be colored with three colors as well.

### Practice Question 1

Is the following graph planar? Justify your answer. (Provide a visual representation of a graph - imagine K5 with one edge subdivided)

**Answer:** Yes, the graph is planar. The provided graph is a subdivision of K5 with only one edge subdivided.  Kuratowski's theorem states that a graph is planar if and only if it does not contain a *subdivision* of K5 or K3,3 as a *subgraph*. While the graph is related to K5, it's not a direct subgraph, nor is it a subdivision of either K5 or K3,3. This specific subdivision of K5 does not violate planarity.

### Practice Question 2

Draw a planar graph with 6 vertices and 9 edges. Color it using the greedy algorithm and report the chromatic number that you achieved.

**Answer:** (Visual representation of a hexagon with all diagonals drawn)

Depending on the vertex ordering chosen for the greedy algorithm, you can achieve either χ(G) = 2 or χ(G) = 3. This demonstrates the greedy algorithm is not optimal.

## 3. Interval Graphs

### 3.1 Definition

*   **Interval Graph:** A graph whose vertices can be associated with intervals on the real line, such that two vertices are adjacent if and only if their corresponding intervals intersect.

### 3.2  Key Properties

*   **Characterization:** Interval graphs are chordal (every cycle of length greater than 3 has a chord - an edge connecting two non-adjacent vertices on the cycle) and are the intersection graphs of intervals.
*   **Applications:**  Scheduling problems, resource allocation, and genetics.

### 3.3 Coloring Interval Graphs

*   **Algorithm (Left-to-Right Greedy Coloring):**  A simple and optimal algorithm for coloring interval graphs.
    *   **Step 1:** Sort the intervals by their right endpoints in ascending order.
    *   **Step 2:** Iterate through the sorted intervals. For each interval, assign it the smallest available color that is not already used by any intersecting interval.
*   **Optimality:** This greedy algorithm always finds the chromatic number of an interval graph. This is because the number of colors required is equal to the maximum clique size in the graph, and the greedy algorithm effectively finds a maximum clique.
*   **Time Complexity:** The time complexity is dominated by the sorting step, which is O(n log n), where *n* is the number of intervals. The coloring itself takes O(n) time, assuming efficient color management (e.g., using a bit vector).
* **Clique Number:** The chromatic number of an interval graph equals the size of its largest clique.

### 3.4 Example

Consider the following intervals:

*   A: [1, 3]
*   B: [2, 5]
*   C: [4, 6]
*   D: [6, 8]
*   E: [7, 9]

The corresponding interval graph has vertices A, B, C, D, and E.  Edges exist between:

*   A and B
*   B and C
*   C and D
*   D and E

Sorting by right endpoints yields: A, C, B, D, E.

Applying the greedy coloring algorithm:

*   A: Color 1
*   C: Color 1
*   B: Color 2 (intersects A and C)
*   D: Color 2 (intersects C and B)
*   E: Color 1

The chromatic number is 2. Notice how the clique A-B-C is miscolored by this ordering. The correct ordering is A,C,B,D,E.

A:Color 1
C:Color 2
B:Color 3
D:Color 1
E:Color 2

The chromatic number is actually 3 in this case.

### Practice Question 3

Given the following intervals, construct the interval graph and color it using the left-to-right greedy algorithm. Report the chromatic number.
A: [1, 4]
B: [2, 6]
C: [5, 7]
D: [8, 10]
E: [9, 11]

**Answer:**

*   **Interval Graph:** Vertices A, B, C, D, E. Edges: A-B, B-C, D-E
*   **Sorted by Right Endpoint:** A, C, B, D, E
*   **Coloring:**
    *   A: Color 1
    *   C: Color 1
    *   B: Color 2
    *   D: Color 2
    *   E: Color 1
*   **Chromatic Number:** 2

### Practice Question 4

Why is the left-to-right greedy algorithm optimal for interval graphs, but not necessarily optimal for general graphs?

**Answer:** The left-to-right greedy algorithm works optimally for interval graphs because it leverages the specific structure of interval graphs, where intervals are ordered along a single dimension (the real line). The algorithm efficiently assigns colors by considering intervals in the order of their right endpoints. The maximum number of intervals intersecting at any point will equal the size of the maximum clique, and thus will also equal the chromatic number.  General graphs do not have this inherent ordering or geometric constraint.  Therefore, a simple vertex ordering in a general graph will not always reveal the underlying clique structure that determines the chromatic number. The greedy algorithm for general graphs is highly dependent on vertex ordering and can often result in suboptimal colorings.

## 4. Summary and Important Points

*   **Graph coloring** is a fundamental problem with various applications.
*   The **chromatic number** is a key graph invariant.
*   The **Four Color Theorem** states that all planar graphs are 4-colorable.
*   **Interval graphs** have a special structure that allows for an efficient optimal coloring algorithm.
*   **Greedy coloring** is a simple but often suboptimal algorithm. Its performance depends heavily on the chosen vertex ordering.
*   Understanding the properties of specific graph classes can lead to more efficient and optimal coloring algorithms.
*   Remember that ω(G) ≤ χ(G) ≤ Δ(G) + 1.  This provides useful bounds on the chromatic number.
*   The coloring of interval graphs with the left-to-right greedy approach is considered to be a polynomial-time exact algorithm, unlike generic graph coloring which is NP-hard.

## 5. Further Exploration

*   Explore other classes of graphs with special coloring properties, such as perfect graphs, chordal graphs, and bipartite graphs.
*   Research different graph coloring algorithms, such as backtracking and DSatur.
*   Investigate the applications of graph coloring in areas like scheduling, resource allocation, and compiler optimization.
