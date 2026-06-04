---
title: "Distance and centres in a tree"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 3: Trees"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af33"
status: "completed"
scrapedAt: "2026-05-20T16:13:35.038Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 3: Trees
## Topic: Distance and Centres in a Tree

**Learning Outcomes:**

*   Understand the concept of distance in a tree.
*   Calculate the distance between two vertices in a tree.
*   Define and identify centers and centroids of a tree.
*   Determine the eccentricity of a vertex in a tree.
*   Find the radius and diameter of a tree.
*   Apply these concepts to solve problems related to tree networks.

**1. Distance in a Tree**

*   **Definition:** The distance between two vertices *u* and *v* in a tree *T*, denoted as *d(u, v)*, is the number of edges in the unique path connecting *u* and *v*. Since a tree is connected and has no cycles, there is only one path between any two vertices.

*   **Key Concepts:**
    *   **Path:** A sequence of distinct vertices (and edges connecting them) in a graph.
    *   **Unique Path in a Tree:**  For any two vertices in a tree, there exists exactly one path connecting them. This is a defining property of trees.

*   **Example:**

    Consider the following tree:

    ```
        A
       / \
      B   C
     / \   \
    D   E   F
    ```

    *   d(A, B) = 1
    *   d(A, D) = 2
    *   d(B, F) = 3
    *   d(D, E) = 2

**2. Eccentricity of a Vertex**

*   **Definition:** The eccentricity of a vertex *v* in a tree *T*, denoted as *ecc(v)*, is the maximum distance from *v* to any other vertex in *T*. In other words:

    *ecc(v) = max {d(v, u) | u ∈ V(T)}*, where V(T) is the set of vertices of *T*.

*   **Key Concepts:**
    *   The eccentricity measures how "far" a vertex is from the most distant vertex in the tree.

*   **Example:**

    Using the tree from the previous example:

    ```
        A
       / \
      B   C
     / \   \
    D   E   F
    ```

    *   ecc(A) = max(d(A, B), d(A, C), d(A, D), d(A, E), d(A, F)) = max(1, 1, 2, 2, 2) = 2
    *   ecc(B) = max(d(B, A), d(B, C), d(B, D), d(B, E), d(B, F)) = max(1, 2, 1, 1, 3) = 3
    *   ecc(D) = max(d(D, A), d(D, B), d(D, C), d(D, E), d(D, F)) = max(2, 1, 3, 2, 4) = 4

**3. Radius and Diameter of a Tree**

*   **Radius:** The radius of a tree *T*, denoted as *r(T)*, is the minimum eccentricity among all vertices in *T*.

    *r(T) = min {ecc(v) | v ∈ V(T)}*

*   **Diameter:** The diameter of a tree *T*, denoted as *diam(T)*, is the maximum eccentricity among all vertices in *T*. Equivalently, it is the maximum distance between any two vertices in *T*.

    *diam(T) = max {ecc(v) | v ∈ V(T)} = max {d(u, v) | u, v ∈ V(T)}*

*   **Important Relationship:** *r(T) ≤ diam(T) ≤ 2r(T)*.

*   **Example:**

    Using the tree from the previous examples:

    ```
        A
       / \
      B   C
     / \   \
    D   E   F
    ```

    We already calculated the eccentricities of A, B, and D. Let's calculate the rest:

    *   ecc(C) = max(d(C, A), d(C, B), d(C, D), d(C, E), d(C, F)) = max(1, 2, 3, 3, 1) = 3
    *   ecc(E) = max(d(E, A), d(E, B), d(E, C), d(E, D), d(E, F)) = max(2, 1, 3, 2, 4) = 4
    *   ecc(F) = max(d(F, A), d(F, B), d(F, C), d(F, D), d(F, E)) = max(2, 3, 1, 4, 4) = 4

    Therefore:

    *   r(T) = min(2, 3, 4, 3, 4, 4) = 2
    *   diam(T) = max(2, 3, 4, 3, 4, 4) = 4

**4. Centers and Centroids of a Tree**

*   **Center:** A vertex *v* is a center of a tree *T* if *ecc(v) = r(T)*.  A tree has either one center or two centers that are adjacent.

*   **Centroid:** A vertex *v* is a centroid of a tree *T* if removing *v* from *T* leaves no connected component with more than *|V(T)|/2* vertices.  A tree has either one centroid or two centroids connected by an edge.

*   **Finding the Centroid:**  One approach to finding the centroid involves iteratively removing leaves until you are left with either one vertex (the centroid) or two adjacent vertices (the centroids).

*   **Relationship between Center and Centroid:** In some cases, the center and centroid coincide. However, they are not always the same.

*   **Example:**

    Using the tree from the previous examples:

    ```
        A
       / \
      B   C
     / \   \
    D   E   F
    ```

    We found that r(T) = 2. Therefore, the center of the tree is A, because ecc(A) = 2.

    To find the centroid, we can iteratively remove leaves:

    1.  Remove D, E, F, C
    2.  Remove B
    3.  A is left.

    Therefore, A is also the centroid of this tree.

**5. Applications**

*   **Network Routing:** Understanding distances in a tree is crucial for finding efficient routes in computer networks represented as trees. The center of the tree can be a good location for a central server to minimize the maximum delay to any client.

*   **Facility Location:**  Centroids and centers can be used to find optimal locations for facilities in a network (e.g., placing a fire station to minimize response time).

*   **Data Structures:** Tree data structures are widely used in computer science, and understanding distances and centers is important for optimizing tree-based algorithms.

**Practice Questions/Exercises:**

1.  **Question:** Consider the following tree:

    ```
        1
       / \
      2   3
     / \   \
    4   5   6
         / \
        7   8
    ```

    a)  Find d(1, 8).
    b)  Find ecc(5).
    c)  Find the radius of the tree.
    d)  Find the diameter of the tree.
    e)  Determine the center(s) of the tree.
    f)  Determine the centroid(s) of the tree.

    **Answer:**

    a)  d(1, 8) = 4
    b)  ecc(5) = max(d(5,1), d(5,2), d(5,3), d(5,4), d(5,6), d(5,7), d(5,8)) = max(2,1,2,2,1,1,1) = 2
    c)  To find the radius, we need to find the eccentricities of all nodes:
        * ecc(1) = 3
        * ecc(2) = 3
        * ecc(3) = 3
        * ecc(4) = 4
        * ecc(5) = 2
        * ecc(6) = 3
        * ecc(7) = 3
        * ecc(8) = 3
        r(T) = min(3, 3, 3, 4, 2, 3, 3, 3) = 2
    d)  diam(T) = max(3, 3, 3, 4, 2, 3, 3, 3) = 4
    e)  The center is 5, as ecc(5) = r(T) = 2.
    f)  To find the centroid:
        *Remove 4, 6, 7, 8
        *Remove 2, 3
        *1 and 5 remain.
        Removing 1 gives a component of size 7 > 8/2 = 4.
        Removing 5 gives two component of size 4. Hence centroid is 5.
        **Therefore, the centroid is 5.**

2.  **Question:**  True or False: The center and centroid of a tree are always the same.  Explain your answer with an example.

    **Answer:** False.

    Consider the tree:

    ```
    A - B - C - D - E
    ```

    *   ecc(A) = 4, ecc(B) = 3, ecc(C) = 2, ecc(D) = 3, ecc(E) = 4
    *   r(T) = 2.  The center is C.
    *   To find the centroid, removing A, B, D, E leaves C, so the centroid is C.

    Now, consider a slightly altered tree:

    ```
    A - B - C - D - E - F
    ```
    *  ecc(A) = 5, ecc(B) = 4, ecc(C) = 3, ecc(D) = 3, ecc(E) = 4, ecc(F) = 5
    *  r(T) = 3.  The centers are C and D.
    *  To find the centroid, removing leaves until only two connected nodes remain. Leaves A, B, E, F are removed. And the remaining two connected nodes are C and D. Centroids are C and D

    Therefore, consider another tree:

    ```
          A
        / | \
       B  C  D
      /   |   \
     E    F    G
     |         |
     H         I
    ```

    *   The eccentricities are:
        *   A: 4
        *   B: 3
        *   C: 3
        *   D: 3
        *   E: 4
        *   F: 4
        *   G: 4
        *   H: 5
        *   I: 5
    *   r(T) = 3.  The centers are B, C, D.
    *   Centroid
        * Remove H, I
        * Remove E, F, G
        * Remove B, C, D
        * Only A remains. Centroid is A.

        In this example, the center is one of B, C, or D, but the centroid is A. Therefore, the center and centroid of a tree are not always the same.

**Important Points to Remember:**

*   The distance in a tree is uniquely defined due to the absence of cycles.
*   The center of a tree represents a "central" vertex in terms of minimum maximum distance to other vertices.
*   The centroid of a tree represents a "balanced" vertex, where removing it doesn't leave large connected components.
*   Understanding distances and centers is crucial for many applications in computer science and network design.
