---
title: "Eulerian and Hamiltonian paths"
subject: "ADVANCED GRAPH ALGORITHMS"
module: "Module 2: Strongly Connected Components (SCC) "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b905"
status: "completed"
scrapedAt: "2026-05-20T16:42:55.165Z"
---
# ADVANCED GRAPH ALGORITHMS: Module 2 - Strongly Connected Components (SCC) - Eulerian and Hamiltonian Paths

## Introduction

This module delves into Eulerian and Hamiltonian paths, which are crucial concepts in graph theory and algorithm design. These paths provide solutions to various real-world problems, such as network routing, DNA sequencing, and circuit design. Understanding these concepts is vital for advanced graph algorithm applications.

## Learning Outcomes

Upon completion of this topic, you will be able to:

1.  Define and differentiate between Eulerian and Hamiltonian paths and cycles.
2.  Describe the conditions necessary for the existence of Eulerian paths and cycles in a graph.
3.  Apply algorithms to find Eulerian paths and cycles, if they exist.
4.  Explain the difficulty of finding Hamiltonian paths and cycles (NP-completeness).
5.  Identify common approximation algorithms or heuristics used to find Hamiltonian paths and cycles.
6.  Apply the concept of Eulerian and Hamiltonian paths to solve relevant problems.

## 1. Definitions and Differentiation

*   **Path:** A sequence of vertices such that each consecutive pair of vertices is connected by an edge.

*   **Cycle:** A path that starts and ends at the same vertex.

### 1.1 Eulerian Path and Cycle

*   **Eulerian Path:** A path in a graph that visits every edge exactly once.
*   **Eulerian Cycle:** A cycle in a graph that visits every edge exactly once.

### 1.2 Hamiltonian Path and Cycle

*   **Hamiltonian Path:** A path in a graph that visits every vertex exactly once.
*   **Hamiltonian Cycle:** A cycle in a graph that visits every vertex exactly once.

### 1.3 Key Differences

| Feature          | Eulerian Path/Cycle                                  | Hamiltonian Path/Cycle                                   |
| ---------------- | ---------------------------------------------------- | ------------------------------------------------------- |
| Visits           | Every *edge* exactly once                              | Every *vertex* exactly once                                |
| Existence        | Can be determined efficiently (polynomial time).       | Generally NP-complete (difficult to find efficiently).    |
| Focus            | Traversing *edges* effectively.                      | Visiting *vertices* in the most efficient manner.       |

## 2. Conditions for Eulerian Paths and Cycles

### 2.1 Undirected Graphs

*   **Eulerian Cycle:** An undirected graph has an Eulerian cycle if and only if it is connected and every vertex has an *even degree* (number of edges incident to it).
*   **Eulerian Path:** An undirected graph has an Eulerian path if and only if it is connected and exactly *two* vertices have an *odd degree*.  These two vertices will be the start and end of the path.

### 2.2 Directed Graphs

*   **Eulerian Cycle:** A directed graph has an Eulerian cycle if and only if it is strongly connected and for every vertex, the *in-degree* (number of incoming edges) equals the *out-degree* (number of outgoing edges).
*   **Eulerian Path:** A directed graph has an Eulerian path if and only if it is weakly connected, and there is at most one vertex with (out-degree - in-degree = 1), at most one vertex with (in-degree - out-degree = 1), and all other vertices have equal in-degree and out-degree.

## 3. Algorithms for Finding Eulerian Paths and Cycles

### 3.1 Fleury's Algorithm (for both directed and undirected graphs)

1.  **Start:** Choose any starting vertex (for an Eulerian cycle, start at any vertex; for an Eulerian path, start at one of the odd-degree vertices).
2.  **Traversal:**  Traverse the graph by following the edges, ensuring you only cross *bridges* (edges that, if removed, would disconnect the graph) as a last resort.
3.  **Mark Visited:** Mark each visited edge as visited (or delete it from the graph).
4.  **Repeat:** Continue traversing until all edges have been visited.

**Caveat:**  Fleury's Algorithm is conceptually simple, but checking for bridges in each step can be inefficient (O(E^2)).

### 3.2 Hierholzer's Algorithm (preferred for efficiency)

1.  **Check Conditions:** Verify that an Eulerian path or cycle exists (degree conditions).
2.  **Choose Start Vertex:** Select a start vertex (any vertex for Eulerian Cycle, odd-degree vertex for Eulerian path).
3.  **Depth-First Search (DFS):** Perform a DFS starting from the chosen vertex, building a cycle.  If the DFS returns to the starting vertex, you've found a cycle.
4.  **Cycle Expansion:** If the cycle doesn't contain all edges, find a vertex on the cycle that has unvisited edges.  Perform a DFS starting from this vertex, forming a new cycle.
5.  **Merge Cycles:** "Splice" the new cycle into the main cycle at the vertex where it started.
6.  **Repeat:** Repeat steps 4 and 5 until all edges have been visited.

**Efficiency:** Hierholzer's algorithm can be implemented with O(E) time complexity.

**Example (Hierholzer's Algorithm - Undirected Graph):**

Graph: A-B, A-C, B-C, B-D, C-D

1.  Graph is connected and all vertices have an even degree (2), so an Eulerian cycle exists.
2.  Start at vertex A.
3.  DFS from A:  A -> B -> C -> A (Cycle 1: A-B-C-A)
4.  Vertex B has unvisited edges.  DFS from B: B -> D -> C -> B (Cycle 2: B-D-C-B)
5.  Merge Cycle 2 into Cycle 1 at B: A-B-D-C-B-C-A.  Removing the duplicate C-B and rearranging gives: A-B-D-C-A (Corrected: A-B-D-C-B-C-A).
6. Graph has still unvisited edges so choose C in A-B-D-C-B-C-A so A-B-D-C-B-C-A is a potential eulerian path
7. Now path can be reconstructed as A-B-C-A-B-D-C

## 4. Difficulty of Finding Hamiltonian Paths and Cycles (NP-Completeness)

*   Finding a Hamiltonian path or cycle in a general graph is a classic NP-complete problem. This means that no polynomial-time algorithm is known to solve it for all cases.
*   **NP-Completeness:**  Implies that if a polynomial-time algorithm could be found for finding Hamiltonian paths, then it would imply P = NP, a major unsolved problem in computer science.
*   **Implications:** We rely on approximation algorithms, heuristics, or algorithms with exponential time complexity in the worst case for finding Hamiltonian paths/cycles.

## 5. Approximation Algorithms and Heuristics

Since finding Hamiltonian paths is NP-complete, we often use heuristics or approximation algorithms:

*   **Nearest Neighbor Algorithm:**
    1.  Start at a random vertex.
    2.  Repeatedly visit the nearest unvisited vertex until all vertices have been visited.
    3.  Return to the starting vertex to form a cycle (if a cycle is desired).
    *   *Note:* This is a simple heuristic but often yields poor results.
*   **Greedy Algorithm (for Traveling Salesman Problem - TSP):**  TSP is a variant of the Hamiltonian cycle problem with weighted edges. The goal is to find the shortest Hamiltonian cycle.
    1.  Start at a random vertex.
    2.  Repeatedly select the edge with the smallest weight to an unvisited vertex.
    3.  Return to the starting vertex to form a cycle.
    *   *Note:*  This algorithm is a greedy approach and doesn't guarantee the optimal solution.
*   **Genetic Algorithms:**  Use evolutionary principles to iteratively improve solutions. Start with a population of candidate Hamiltonian cycles and apply selection, crossover, and mutation operators to evolve better solutions over time.
*   **Simulated Annealing:** A metaheuristic approach that explores the solution space by accepting worse solutions with a certain probability to escape local optima.

**Important Considerations for Heuristics:**

*   **Not Optimal:**  Heuristics do not guarantee the optimal solution.
*   **Performance:**  Performance can vary depending on the graph structure.
*   **Computational Cost:**  The computational cost of heuristics is typically lower than exact algorithms, making them suitable for large graphs.

## 6. Applications

### 6.1 Eulerian Paths/Cycles

*   **Street Sweeping/Delivery Routes:** Finding an optimal route to traverse every street in a city exactly once.
*   **DNA Sequencing:** Constructing a DNA sequence from fragments by finding an Eulerian path through an overlap graph.
*   **De Bruijn Sequences:** Generating sequences that contain all possible subsequences of a given length.

### 6.2 Hamiltonian Paths/Cycles

*   **Traveling Salesman Problem (TSP):** Finding the shortest route that visits each city exactly once and returns to the starting city.
*   **Robotics:** Planning the optimal path for a robot to visit a set of locations.
*   **VLSI Chip Design:** Finding the shortest path to connect all components on a chip.
*   **Job Sequencing:** Sequencing jobs to minimize setup time, where setup time depends on the order of jobs.

## Important Points to Remember

*   Eulerian paths/cycles visit *edges* exactly once, while Hamiltonian paths/cycles visit *vertices* exactly once.
*   The existence of Eulerian paths/cycles can be efficiently determined based on vertex degrees.
*   Finding Hamiltonian paths/cycles is an NP-complete problem, requiring approximation algorithms or heuristics for large graphs.
*   Understanding the conditions for the existence of Eulerian paths/cycles is crucial for applying the algorithms.
*   Real-world problems can often be modeled as graph problems requiring Eulerian or Hamiltonian paths/cycles.

## Practice Questions and Exercises

**Question 1:**

Determine if the following undirected graph has an Eulerian cycle or path.  If so, describe the path/cycle.  Vertices: A, B, C, D, E.  Edges: A-B, A-C, B-C, B-D, C-E.

**Answer:**

*   Degrees: A (2), B (3), C (3), D (1), E (1)
*   Since there are 4 vertices with odd degree, it does not have an Eulerian Cycle or Path.

**Question 2:**

Determine if the following directed graph has an Eulerian cycle or path. If so, describe the path/cycle. Vertices: A, B, C, D. Edges: A->B, B->C, C->D, D->A, A->C

**Answer:**

* In-degrees: A(1), B(1), C(2), D(1)
* Out-degrees: A(2), B(1), C(1), D(1)
* Vertex A has (out-degree - in-degree = 1), Vertex C has (in-degree - out-degree = 1).
* So, the graph has an Eulerian Path.  One possible path is: A->B->C->D->A->C

**Question 3:**

Explain why the Nearest Neighbor algorithm for finding Hamiltonian cycles may not produce the optimal (shortest) cycle.

**Answer:**

The Nearest Neighbor algorithm is a greedy approach that focuses on minimizing the distance to the next vertex at each step. It doesn't consider the overall structure of the graph or the potential for finding a shorter path by taking a less-optimal local step that leads to a better global solution. For instance, it might get trapped in a local minimum where it needs to travel a long distance to close the cycle after visiting all nearest neighbors, while a different starting point or route could have led to a much shorter overall cycle.

**Question 4:**

Describe a real-world application where finding an Eulerian path or cycle would be beneficial, and explain why.

**Answer:**

A real-world application is snow plowing. The goal is to plow all the roads in a city efficiently. Modeling the city's road network as a graph, with roads as edges and intersections as vertices, finding an Eulerian path or cycle allows the snowplow to traverse every street exactly once, minimizing the travel distance and time required to clear the roads. This saves fuel, reduces labor costs, and ensures that all streets are cleared.  If all intersections have an even number of roads connected to them, an Eulerian cycle is possible, meaning the plow can start and end at the same location. Otherwise, an Eulerian path can still be found, but the starting and ending locations will be different.
