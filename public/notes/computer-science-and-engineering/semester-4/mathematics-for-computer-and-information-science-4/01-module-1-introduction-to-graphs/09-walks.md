---
title: "Walks"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 1: Introduction to Graphs "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af22"
status: "completed"
scrapedAt: "2026-05-20T16:13:24.446Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 1: Introduction to Graphs
### Topic: Walks

**Learning Outcomes:**

*   Understand the definition of a walk in a graph.
*   Differentiate between different types of walks (open, closed, trivial).
*   Identify and distinguish between trails and paths.
*   Determine the length of a walk.
*   Apply the concepts of walks, trails, and paths in graph theory problems.

---

**1. What is a Walk?**

*   **Definition:** A *walk* in a graph *G = (V, E)* is a sequence of vertices and edges, *v₀, e₁, v₁, e₂, v₂, ..., eₖ, vₖ*, such that for each *i = 1, 2, ..., k*, the edge *eᵢ* is incident with vertices *vᵢ₋₁* and *vᵢ*.  In simpler terms, a walk is a route through the graph that starts at a vertex and moves along edges to other vertices. You can repeat vertices and edges in a walk.

*   **Notation:** A walk can be represented by the sequence of vertices visited: *v₀, v₁, v₂, ..., vₖ*. It is implicitly assumed that there are edges connecting these vertices in the order they are listed.

*   **Initial Vertex:** *v₀*
*   **Terminal Vertex:** *vₖ*
*   **Length of a Walk:** The number of edges in the sequence, denoted by *k*.

**2. Types of Walks**

*   **Open Walk:** A walk where the initial vertex and the terminal vertex are different (*v₀ ≠ vₖ*).

*   **Closed Walk:** A walk where the initial vertex and the terminal vertex are the same (*v₀ = vₖ*).

*   **Trivial Walk:** A walk consisting of a single vertex and no edges (length = 0).  This is technically a closed walk.

**3. Trails and Paths: Special Types of Walks**

*   **Trail:** A walk in which no edge is repeated.  Vertices can be repeated.

*   **Path:** A walk in which no vertex is repeated (and therefore no edge is repeated).

**Relationship between Walks, Trails, and Paths:**

`Path ⊆ Trail ⊆ Walk`

A path is a special type of trail, and a trail is a special type of walk.

**4. Examples**

Consider the graph *G = (V, E)* where *V = {A, B, C, D, E}* and *E = {(A, B), (B, C), (C, D), (D, E), (E, A), (A, C)}*.

*   **Example 1: Walk (but not a Trail or Path):**  A, B, C, A, B. This is a walk of length 4. Edge (A,B) is repeated. It is an open walk.

*   **Example 2: Trail (but not a Path):** A, B, C, A, E, D. This is a trail of length 5.  No edge is repeated. Vertex 'A' is repeated, so it's not a path. It's an open walk.

*   **Example 3: Path:** A, B, C, D, E. This is a path of length 4. No vertex or edge is repeated. It's an open walk.

*   **Example 4: Closed Walk (but not a Trail or Path):** A, B, C, A, B, C, A. This is a closed walk of length 6. Edges (A,B) and (B,C) and (C,A) are repeated.

*   **Example 5: Closed Trail (but not a Path - also called a Circuit):** A, B, C, D, E, A. This is a closed trail of length 5.  No edge is repeated. Vertex 'A' is repeated, but no other vertices are. This is also a *circuit*

*   **Example 6: Trivial Walk:** A.  This is a walk of length 0.

**5. Determining the Length of a Walk**

The length of a walk is simply the number of edges traversed.  If the walk is represented as a sequence of vertices, count the number of "steps" between vertices.

**Example:** The walk A, B, C, D has length 3.

**6. Practice Questions/Exercises**

Consider the following graph G:

```
   A --- B
   |     |
   C --- D --- E
   |
   F
```

*   **Question 1:** Is A, B, D, C, A a walk? If so, what type of walk is it (open/closed, trail/path)? What is its length?

    *   **Answer:** Yes, it's a walk. It is a closed trail (no edge repeated). It's not a path (A is repeated). Length is 4.

*   **Question 2:** Is A, B, D, C, F a walk? If so, what type of walk is it (open/closed, trail/path)? What is its length?

    *   **Answer:** Yes, it's a walk. It is an open path (no vertex or edge repeated). Length is 4.

*   **Question 3:** Is A, C, F, C, D, B a walk? If so, what type of walk is it (open/closed, trail/path)? What is its length?

    *   **Answer:** Yes, it's a walk. It is an open trail (no edge is repeated), but not a path (vertex C is repeated). Length is 5.

*   **Question 4:** Is A, B, A, B, A a walk? If so, what type of walk is it (open/closed, trail/path)? What is its length?

    *   **Answer:** Yes, it's a walk. It is an open walk, but not a trail (edge AB is repeated). Length is 4.

*   **Question 5:**  Find a closed path starting from node A.  If none exists, explain why.

    *   **Answer:**  No such path exists.  A closed path would require visiting each vertex only once and returning to the starting vertex.  This graph doesn't allow for that without repeating a vertex before returning to A.  In other words, any "cycle" including A has to repeat a node other than A before closing the cycle.  Examples that come close would be A, B, D, C, A (repeats A) or A, C, D, B, A (repeats A).

**7. Important Points to Remember**

*   A walk is the most general concept – you can repeat vertices and edges.
*   A trail doesn't repeat edges.
*   A path doesn't repeat vertices (and therefore doesn't repeat edges).
*   The length of a walk is the number of edges it contains.
*   Understanding the differences between walks, trails, and paths is crucial for solving graph theory problems.  Pay close attention to the definitions.  Think about the restrictions each one has.

---

These notes provide a foundation for understanding walks in graph theory.  Remember to practice identifying different types of walks in various graphs to solidify your understanding.
