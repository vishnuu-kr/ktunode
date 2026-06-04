---
title: "Strongly Connected Components"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 2: Disjoint Sets "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b553"
status: "completed"
scrapedAt: "2026-05-20T16:45:38.825Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS - MODULE 2: DISJOINT SETS - STRONGLY CONNECTED COMPONENTS

## Introduction

This module focuses on Strongly Connected Components (SCCs) within the context of graph algorithms. SCCs are a crucial concept in graph theory, particularly for analyzing directed graphs. Understanding them allows us to identify groups of nodes within a directed graph that are mutually reachable.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Define strongly connected components.
*   Identify strongly connected components in a directed graph.
*   Explain and implement algorithms to find strongly connected components (Kosaraju's Algorithm and Tarjan's Algorithm).
*   Understand the applications of strongly connected components.
*   Analyze the time complexity of SCC algorithms.

## 1. Key Concepts and Definitions

*   **Directed Graph:** A graph where edges have a direction.  We represent edges as ordered pairs (u, v), indicating a path from vertex u to vertex v, but not necessarily from v to u.

*   **Reachability:** Vertex `v` is reachable from vertex `u` in a directed graph if there is a directed path from `u` to `v`.

*   **Strongly Connected:** Two vertices `u` and `v` in a directed graph are strongly connected if there is a path from `u` to `v` *and* a path from `v` to `u`.

*   **Strongly Connected Component (SCC):** A maximal set of vertices in a directed graph such that for every pair of vertices `u` and `v` in the set, `u` and `v` are strongly connected.  "Maximal" means that no other vertex can be added to the set without violating the strongly connected property.

*   **Component Graph:** A graph created from a directed graph by treating each strongly connected component as a single vertex.  The edges in the component graph represent the edges between the original SCCs.  The component graph is always a Directed Acyclic Graph (DAG).

*   **Transpose Graph (G<sup>T</sup> or G<sup>R</sup>):** A graph derived from the original directed graph G by reversing the direction of all its edges.  If G has an edge (u, v), then G<sup>T</sup> has an edge (v, u).

## 2. Identifying Strongly Connected Components

Here's how to identify SCCs in a directed graph:

1.  **Visually:** Examine the graph to identify groups of nodes where you can travel from any node within the group to any other node within the same group following the direction of edges.

2.  **Algorithmically:** Using algorithms like Kosaraju's or Tarjan's (described later).

**Example:**

Consider the following directed graph:

```
       +---+      +---+      +---+
       | 0 | ---> | 1 | ---> | 2 |
       +---+      +---+      +---+
         ^          |          | ^
         |          v          | |
       +---+      +---+      +---+
       | 5 | <--- | 4 | <--- | 3 |
       +---+      +---+      +---+
         ^          |
         |          v
       +---+      +---+
       | 6 |      | 7 |
       +---+      +---+
```

*   **SCC 1:** {0, 1, 2, 3, 4, 5} - All nodes in this set are mutually reachable. For example, to go from 0 to 4 we can go through 1->2->3->4. To go from 4 to 0 we can go 4->5->0.
*   **SCC 2:** {6}
*   **SCC 3:** {7}

## 3. Algorithms for Finding Strongly Connected Components

### 3.1 Kosaraju's Algorithm

Kosaraju's Algorithm is a popular algorithm for finding SCCs in a directed graph. It involves two Depth-First Searches (DFS) and uses the transpose graph.

**Steps:**

1.  **DFS 1 (Original Graph):** Perform a Depth-First Search (DFS) on the original graph *G*.  As each vertex is finished (i.e., all its descendants have been visited), push it onto a stack. This step computes a post-order traversal of the graph.

2.  **Transpose Graph:** Create the transpose graph *G<sup>T</sup>*.

3.  **DFS 2 (Transpose Graph):** While the stack from step 1 is not empty, pop a vertex *v* from the stack.  If *v* has not been visited, perform a DFS on the transpose graph *G<sup>T</sup>* starting from *v*.  All vertices visited during this DFS form a strongly connected component.

**Pseudocode:**

```
Kosaraju(Graph G):
  1.  Create an empty stack S
  2.  For each vertex v in G:
        If v is not visited:
          DFS1(G, v, S)

  3.  Create the transpose graph GT of G

  4.  While S is not empty:
        v = S.pop()
        If v is not visited in GT:
          DFS2(GT, v, current_scc)
          print current_scc // This is a strongly connected component

DFS1(Graph G, Vertex v, Stack S):
  1.  Mark v as visited
  2.  For each neighbor u of v:
        If u is not visited:
          DFS1(G, u, S)
  3.  S.push(v)  // Push v onto the stack after processing all its neighbors

DFS2(Graph GT, Vertex v, List current_scc):
  1. Mark v as visited in GT
  2. current_scc.add(v)
  3. For each neighbor u of v in GT:
       If u is not visited in GT:
           DFS2(GT, u, current_scc)
```

**Example:** (Using the graph from the previous section)

1.  **DFS 1 (Original Graph):** One possible order in which nodes are pushed to the stack `S` is: 6, 7, 5, 4, 3, 2, 1, 0.

2.  **Transpose Graph:** Create the transpose graph.

3.  **DFS 2 (Transpose Graph):**

    *   Pop 0 from `S`. DFS on `GT` starting from 0 visits {0, 5, 4, 3, 2, 1}.  This is SCC 1.
    *   Pop 6 from `S`. DFS on `GT` starting from 6 visits {6}.  This is SCC 2.
    *   Pop 7 from `S`. DFS on `GT` starting from 7 visits {7}.  This is SCC 3.

**Time Complexity of Kosaraju's Algorithm:** O(V + E), where V is the number of vertices and E is the number of edges. This is because it performs two DFS traversals, each taking O(V + E) time.

### 3.2 Tarjan's Algorithm

Tarjan's algorithm is another efficient method for finding SCCs. It uses a single DFS traversal and maintains additional information to detect SCCs during the traversal.

**Key Concepts in Tarjan's Algorithm:**

*   **Index (index[v]):** A unique integer representing the order in which vertex *v* was visited during the DFS traversal.

*   **Lowlink (lowlink[v]):** The smallest index of any vertex reachable from *v* (including *v* itself) by following a path of tree edges and then at most one back edge.  A back edge is an edge that leads to an ancestor in the DFS tree.

*   **Stack (stack):** A stack to keep track of vertices that are potentially part of the same SCC.

**Steps:**

1.  **Initialization:** Initialize `index[v]` to -1 for all vertices, `lowlink[v]` to -1 for all vertices, `index_counter` to 0, and create an empty stack.

2.  **DFS Traversal:**
    *   When visiting a vertex *v*:
        *   Assign `index[v] = lowlink[v] = index_counter++`.
        *   Push *v* onto the stack.
        *   For each neighbor *w* of *v*:
            *   If `index[w]` is -1 (i.e., *w* has not been visited):
                *   Recursively call DFS on *w*.
                *   Update `lowlink[v] = min(lowlink[v], lowlink[w])`.
            *   Else if *w* is on the stack:
                *   Update `lowlink[v] = min(lowlink[v], index[w])`.  This is the crucial step that detects back edges.

    *   When `index[v] == lowlink[v]` (i.e., *v* is the root of an SCC):
        *   Pop vertices from the stack until *v* is popped.  All popped vertices belong to the same SCC.

**Pseudocode:**

```
Tarjan(Graph G):
  1. index = [-1] * |V|  // Initialize index array
  2. lowlink = [-1] * |V| // Initialize lowlink array
  3. stack = []             // Initialize stack
  4. index_counter = 0

  5. For each vertex v in G:
        If index[v] == -1:
          StrongConnect(G, v)

StrongConnect(Graph G, Vertex v):
  1. index[v] = lowlink[v] = index_counter
  2. index_counter = index_counter + 1
  3. stack.append(v)
  4. v.onStack = True // Indicate that v is on the stack

  5. For each neighbor w of v:
        If index[w] == -1:
          StrongConnect(G, w)
          lowlink[v] = min(lowlink[v], lowlink[w])
        Else If w.onStack:
          lowlink[v] = min(lowlink[v], index[w])

  6. If lowlink[v] == index[v]:
        start_scc = []
        while True:
          w = stack.pop()
          w.onStack = False
          start_scc.append(w)
          if w == v:
            break
        print start_scc // This is a strongly connected component
```

**Example:**  (Using the graph from the previous sections.  Let's assume the DFS starts at node 0.)

| Vertex | index | lowlink | stack | On Stack | Neighbors |
|---|---|---|---|---|---|
| 0 | 0 | 0 | [0] | True | 1 |
| 1 | 1 | 1 | [0, 1] | True | 2, 4 |
| 2 | 2 | 2 | [0, 1, 2] | True | 3 |
| 3 | 3 | 3 | [0, 1, 2, 3] | True | 4 |
| 4 | 4 | 4 | [0, 1, 2, 3, 4] | True | 5 |
| 5 | 5 | 0 | [0, 1, 2, 3, 4, 5] | True | 0 |
| 5->0 |  | 0 | [0, 1, 2, 3, 4, 5] | True | |
| 4->5 |  | 0 | [0, 1, 2, 3, 4, 5] | True | |
| 3->4 |  | 0 | [0, 1, 2, 3, 4, 5] | True | |
| 2->3 |  | 0 | [0, 1, 2, 3, 4, 5] | True | |
| 1->2 |  | 0 | [0, 1, 2, 3, 4, 5] | True | |
| 1->4 |  | 0 | [0, 1, 2, 3, 4, 5] | True | |
| 0->1 |  | 0 | [0, 1, 2, 3, 4, 5] | True | |
|0 |  | 0 | [0, 1, 2, 3, 4, 5] | True | | lowlink[0] == index[0] , SCC = {5,4,3,2,1,0}

| Vertex | index | lowlink | stack | On Stack | Neighbors |
|---|---|---|---|---|---|
| 6 | 6 | 6 | [6] | True | N/A |
|6 |  | 6 | [6] | True | | lowlink[6] == index[6], SCC = {6}

| Vertex | index | lowlink | stack | On Stack | Neighbors |
|---|---|---|---|---|---|
| 7 | 7 | 7 | [7] | True | N/A |
|7 |  | 7 | [7] | True | | lowlink[7] == index[7], SCC = {7}

**Time Complexity of Tarjan's Algorithm:** O(V + E), where V is the number of vertices and E is the number of edges.

## 4. Applications of Strongly Connected Components

*   **Network Analysis:** Identifying clusters of interconnected nodes in social networks or communication networks.

*   **Compiler Design:** In control flow graphs, SCCs can be used to identify loops in the code.

*   **Web Crawling and Link Analysis:** Determining highly interconnected pages on the web.

*   **Database Systems:** Detecting cycles in dependency graphs.

*   **Circuit Analysis:** Simplifying complex circuits by collapsing strongly connected components.

## 5. Practice Questions/Exercises

1.  **Draw the component graph** for the directed graph in the examples above.

2.  **Given the following directed graph, find the SCCs using Kosaraju's algorithm:**

    ```
         +---+       +---+
         | A | ----> | B |
         +---+       +---+
           ^           |
           |           v
         +---+       +---+
         | D | <---- | C |
         +---+       +---+
           ^
           |
         +---+
         | E |
         +---+
    ```

3.  **Given the same directed graph in question 2, find the SCCs using Tarjan's algorithm.**

4.  **Explain the difference** between Kosaraju's Algorithm and Tarjan's Algorithm.  What are the advantages and disadvantages of each?

5.  **Design an algorithm** that checks if a given directed graph is strongly connected.

## 6. Answers to Practice Questions/Exercises

1.  **Component Graph:**

    The component graph for the example directed graph:

    ```
       +---+       +---+       +---+
       |{0-5}| ---> |{7}|
       +---+       +---+
         |
         v
       +---+
       |{6}|
       +---+
    ```

2.  **Kosaraju's Algorithm Solution:**

    *   **DFS 1:** A possible order for the stack `S` is: E, D, C, B, A
    *   **Transpose Graph:** Create the transpose graph.
    *   **DFS 2:**
        *   Pop A: DFS from A in the transpose graph visits {A, D, C, B}.  Therefore, {A, B, C, D} is one SCC.
        *   Pop E: DFS from E in the transpose graph visits {E}. Therefore, {E} is an SCC.
    *   **SCCs:** {A, B, C, D}, {E}

3.  **Tarjan's Algorithm Solution:**

    (Starting DFS from node A)

    | Vertex | index | lowlink | stack | On Stack | Neighbors |
    |---|---|---|---|---|---|
    | A | 0 | 0 | [A] | True | B |
    | B | 1 | 1 | [A, B] | True | C |
    | C | 2 | 2 | [A, B, C] | True | D |
    | D | 3 | 0 | [A, B, C, D] | True | A |
    | D->A |  | 0 | [A, B, C, D] | True |  |
    | C->D |  | 0 | [A, B, C, D] | True |  |
    | B->C |  | 0 | [A, B, C, D] | True |  |
    | A->B |  | 0 | [A, B, C, D] | True |  |
    |A |  | 0 | [A, B, C, D] | True | |lowlink[A] == index[A], SCC = {D,C,B,A}

    (Starting DFS from node E)

    | Vertex | index | lowlink | stack | On Stack | Neighbors |
    |---|---|---|---|---|---|
    | E | 4 | 4 | [E] | True | D |
    | E->D |  | 4 | [E] | True |  |

    |E|  | 4 | [E] | True | |lowlink[E] == index[E], SCC = {E}

    *   **SCCs:** {A, B, C, D}, {E}

4.  **Difference Between Kosaraju's and Tarjan's Algorithm:**

    *   **Kosaraju's Algorithm:**
        *   Requires two DFS traversals: one on the original graph and one on the transpose graph.
        *   Conceptually simpler to understand.
        *   May require extra memory to store the transpose graph.

    *   **Tarjan's Algorithm:**
        *   Uses only one DFS traversal.
        *   Can be more memory efficient as it doesn't need to explicitly construct the transpose graph.
        *   Slightly more complex to understand due to the use of indices and lowlinks.

    *   **Advantages and Disadvantages:**
        *   Kosaraju's: Easier to implement and debug, but less efficient memory-wise.
        *   Tarjan's: More memory efficient, but more complex to implement and debug.

5.  **Algorithm to Check if a Directed Graph is Strongly Connected:**

    ```
    IsStronglyConnected(Graph G):
      1. If G is empty, return True
      2. Choose an arbitrary vertex v in G
      3. Perform DFS from v to check if all other vertices are reachable from v. If not, return False
      4. Reverse the direction of all edges in G to get GT.
      5. Perform DFS from v in GT to check if all other vertices are reachable from v in the reversed graph. If not, return False
      6. Return True  (The graph is strongly connected)
    ```

    **Time Complexity:** O(V + E)

## 7. Important Points to Remember

*   SCCs are only defined for directed graphs.
*   The component graph of a directed graph is always a DAG.
*   Both Kosaraju's and Tarjan's algorithms have a time complexity of O(V + E).
*   Understanding the concepts of "reachability," "strongly connected," and "maximality" are crucial for working with SCCs.
*   Choose the algorithm that best suits your needs based on factors like ease of implementation and memory constraints.
