---
title: "Chromatic polynomial"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 4: Matrix representation of graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af41"
status: "completed"
scrapedAt: "2026-05-20T16:13:43.904Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 4: Matrix Representation of Graphs
### Topic: Chromatic Polynomial

**Learning Outcomes:**

*   Understand the definition of the chromatic polynomial of a graph.
*   Learn how to calculate the chromatic polynomial for simple graphs.
*   Apply reduction theorems to simplify the calculation of chromatic polynomials.
*   Relate the chromatic polynomial to the chromatic number of a graph.
*   Understand the properties of chromatic polynomials.

---

**1. Introduction to the Chromatic Polynomial**

*   **Definition:** The chromatic polynomial, denoted by P(G, k) or χ(G, k), of a graph G is a polynomial in the variable k that counts the number of proper k-colorings of G.  A *proper k-coloring* is an assignment of k colors to the vertices of G such that no two adjacent vertices have the same color.
*   **k-Coloring:**  A *k-coloring* of a graph G is an assignment of k colors (usually represented by the integers 1 to k) to the vertices of G. A *proper k-coloring* is a k-coloring where no two adjacent vertices are assigned the same color.
*   **Chromatic Number:** The chromatic number χ(G) of a graph G is the smallest integer k such that G has a proper k-coloring. It represents the minimum number of colors needed to color the graph properly.
*   **Importance:** The chromatic polynomial provides a way to understand the colorability of a graph without actually finding all the possible colorings. It encapsulates information about the graph's structure and how it influences coloring possibilities.

**2. Key Concepts and Definitions**

*   **Proper Coloring:** As defined above, a coloring where no two adjacent vertices share the same color.
*   **Complete Graph (K<sub>n</sub>):**  A graph where every vertex is adjacent to every other vertex.  K<sub>n</sub> requires n colors.
*   **Null Graph (Empty Graph):** A graph with no edges.  A null graph with n vertices can be colored with 1 color.
*   **Path Graph (P<sub>n</sub>):** A graph that forms a linear chain of vertices.
*   **Cycle Graph (C<sub>n</sub>):** A graph that forms a closed loop.
*   **Deletion-Contraction Theorem:** A fundamental theorem used to calculate chromatic polynomials. It states:  P(G, k) = P(G-e, k) - P(G/e, k), where:
    *   G-e is the graph obtained by *deleting* edge e from G.
    *   G/e is the graph obtained by *contracting* edge e from G (identifying the two vertices connected by e and removing any parallel edges).

**3. Calculating Chromatic Polynomials for Simple Graphs**

*   **Complete Graph K<sub>n</sub>:**
    *   P(K<sub>n</sub>, k) = k(k-1)(k-2)...(k-n+1)  = k! / (k-n)! for k >= n; and 0 otherwise.
    *   *Example:*  For K<sub>3</sub>, P(K<sub>3</sub>, k) = k(k-1)(k-2).  If k=3, P(K<sub>3</sub>, 3) = 3 * 2 * 1 = 6.

*   **Null Graph (Empty Graph) with n vertices:**
    *   P(Null<sub>n</sub>, k) = k<sup>n</sup>
    *   *Example:* A null graph with 4 vertices has a chromatic polynomial of k<sup>4</sup>.  If k=2, P(Null<sub>4</sub>, 2) = 2<sup>4</sup> = 16.

*   **Path Graph P<sub>n</sub>:**
    *   P(P<sub>n</sub>, k) = k(k-1)<sup>n-1</sup>
    *   *Example:* For P<sub>4</sub>, P(P<sub>4</sub>, k) = k(k-1)<sup>3</sup>. If k=3, P(P<sub>4</sub>, 3) = 3 * (3-1)<sup>3</sup> = 3 * 8 = 24.

*   **Cycle Graph C<sub>n</sub>:**
    *   P(C<sub>n</sub>, k) = (k-1)<sup>n</sup> + (-1)<sup>n</sup>(k-1)
    *   *Example:* For C<sub>4</sub>, P(C<sub>4</sub>, k) = (k-1)<sup>4</sup> + (k-1). If k=3, P(C<sub>4</sub>, 3) = (3-1)<sup>4</sup> + (3-1) = 16 + 2 = 18.

**4. Deletion-Contraction Theorem (Reduction Theorem)**

*   **Applying the Theorem:** The deletion-contraction theorem is the key method for calculating the chromatic polynomial of more complex graphs.
    *   P(G, k) = P(G-e, k) - P(G/e, k)

*   **Example:** Consider a graph G which is a triangle with one vertex connected to another vertex (like a K4 with one edge removed).

    1.  Choose any edge *e* (it doesn't matter which one).
    2.  *G-e*: This makes the triangle have a "tail" of length 1. If the edge *e* was part of the triangle, G-e becomes a path P<sub>4</sub>
    3.  *G/e*: This makes the triangle smaller, until it's a K<sub>3</sub> again.
    4.  Calculate:
        *   P(G-e, k) = P(P<sub>4</sub>, k) = k(k-1)<sup>3</sup>
        *   P(G/e, k) = P(K<sub>3</sub>, k) = k(k-1)(k-2)
        *   P(G, k) = k(k-1)<sup>3</sup> - k(k-1)(k-2)
        *   P(G, k) = k(k-1)[(k-1)<sup>2</sup> - (k-2)]
        *   P(G, k) = k(k-1)(k<sup>2</sup> - 2k + 1 - k + 2)
        *   P(G, k) = k(k-1)(k<sup>2</sup> - 3k + 3) = k<sup>4</sup> - 4k<sup>3</sup> + 6k<sup>2</sup> - 3k

**5. Relation to Chromatic Number**

*   The chromatic number χ(G) is the smallest positive integer k for which P(G, k) > 0.
*   In other words, we can find the chromatic number by finding the smallest positive integer root of the chromatic polynomial.
*   *Example:*  If P(G, k) = k(k-1)(k-2), then P(G, 1) = 0 and P(G, 2) = 0, but P(G, 3) = 6 > 0.  Therefore, χ(G) = 3.

**6. Properties of Chromatic Polynomials**

*   **Degree:** The degree of P(G, k) is equal to the number of vertices in G.
*   **Leading Coefficient:** The leading coefficient of P(G, k) is always 1.
*   **Constant Term:** The constant term of P(G, k) is always 0 (unless the graph is empty). This is because you can't properly color a graph with 0 colors.
*   **Coefficient of k:**  The coefficient of k is non-zero if and only if G is a forest (a graph with no cycles).  If G is a forest, the coefficient of k is (-1)<sup>|V| - |E|</sup>, where |V| is the number of vertices and |E| is the number of edges.
*   **Roots:** The chromatic polynomial P(G, k) has integer roots at k = 0, 1, 2, ..., χ(G) - 1.

**7. Important Points to Remember**

*   The chromatic polynomial *counts* the number of proper colorings, not just whether a coloring is possible.
*   The deletion-contraction theorem is a powerful tool for calculating chromatic polynomials, especially for complex graphs. However, it can require repetitive calculations.
*   The chromatic number is the smallest positive integer for which the chromatic polynomial is positive.
*   The properties of the chromatic polynomial (degree, leading coefficient, constant term) can help you verify your calculations.

**8. Practice Questions/Exercises**

1.  **Calculate the chromatic polynomial of the following graph:**  A graph with two vertices and one edge (K<sub>2</sub>).
    *   **Answer:** P(K<sub>2</sub>, k) = k(k-1)

2.  **Calculate the chromatic polynomial of a graph with a single edge connecting two vertices.** Use the deletion-contraction theorem.
    *   **Answer:**
        *   Deleting the edge gives two isolated vertices, polynomial k<sup>2</sup>
        *   Contracting the edge gives one vertex, polynomial k
        *   P(G,k) = k<sup>2</sup> - k = k(k-1)

3.  **What is the chromatic number of a graph with chromatic polynomial P(G, k) = k<sup>4</sup> - 6k<sup>3</sup> + 13k<sup>2</sup> - 12k + 4 ?**
    *   **Answer:** We need to find the smallest k such that P(G, k) > 0.
        *   P(G, 1) = 1 - 6 + 13 - 12 + 4 = 0
        *   P(G, 2) = 16 - 48 + 52 - 24 + 4 = 0
        *   P(G, 3) = 81 - 162 + 117 - 36 + 4 = 4 > 0
        *   Therefore, χ(G) = 3

4.  **True or False:** The leading coefficient of the chromatic polynomial is always 1.
    *   **Answer:** True.

5.  **What is the degree of the chromatic polynomial of a graph with 7 vertices?**
    *   **Answer:** 7

6. **Find the chromatic polynomial of a tree with *n* vertices.**
    * **Answer:** A tree with *n* vertices has *n-1* edges. By iteratively applying the deletion-contraction theorem and recognizing that deleting an edge in a tree results in two trees and contracting results in a tree, the chromatic polynomial simplifies to  k(k-1)<sup>n-1</sup>

7. **What is the chromatic polynomial of a disconnected graph G made up of two disjoint components, G1 and G2?**
    * **Answer:**  P(G, k) = P(G1, k) * P(G2, k)

---
This completes the study notes on the chromatic polynomial. Remember to practice these concepts by working through various examples to solidify your understanding. Good luck!
