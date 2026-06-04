---
title: "polynomial approximations for 1D and 2D  elements using Lagrange polynomials"
subject: "FINITE ELEMENT METHOD"
module: "Module 2: Brief review of matrix methods"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116d4"
status: "completed"
scrapedAt: "2026-05-20T18:58:57.082Z"
---
# Finite Element Method: Module 2 - Brief Review of Matrix Methods

## Topic: Polynomial Approximations for 1D and 2D Elements Using Lagrange Polynomials

This module focuses on the fundamental building blocks of the Finite Element Method (FEM): approximating unknown functions using polynomial basis functions, specifically Lagrange polynomials, in both one and two dimensions.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of polynomial approximation in the context of FEM.
*   Define and construct Lagrange basis polynomials for 1D elements.
*   Construct Lagrange basis polynomials for 2D elements (e.g., triangular and quadrilateral).
*   Apply Lagrange polynomials to approximate a function over a given element.
*   Understand the properties of Lagrange polynomials and their suitability for FEM.

---

### 1. Introduction to Polynomial Approximation in FEM

The core idea of FEM is to discretize a continuous problem domain into smaller, simpler subdomains called **finite elements**. Within each element, we approximate the unknown solution (e.g., displacement, temperature) using simple functions, typically polynomials. This approximation allows us to transform complex differential equations into a system of algebraic equations that can be solved computationally.

*   **Why Polynomials?**
    *   **Continuity:** Polynomials are continuous and differentiable, which is essential for satisfying continuity requirements in many physical problems.
    *   **Simplicity:** They are easy to define, manipulate, and integrate.
    *   **Flexibility:** Higher-order polynomials can provide more accurate approximations.
    *   **Completeness:** Polynomial bases can represent a wide range of functions.

*   **Key Concept: Basis Functions (Shape Functions)**
    We express the approximate solution $u_h(x)$ within an element as a linear combination of **basis functions** (also called **shape functions**, denoted by $N_i$) and nodal values ($u_i$) at specific points (nodes) within the element:

    $u_h(x) = \sum_{i=1}^{n} N_i(x) u_i$

    where:
    *   $u_h(x)$ is the approximate solution at point $x$ within the element.
    *   $N_i(x)$ is the $i$-th basis function.
    *   $u_i$ is the value of the unknown function at the $i$-th node.
    *   $n$ is the number of nodes in the element.

---

### 2. Lagrange Polynomials in 1D

Lagrange polynomials are a popular choice for basis functions in FEM due to their convenient properties.

#### 2.1. Definition and Construction

A Lagrange polynomial of degree $m$ passing through $m+1$ distinct points $(x_0, y_0), (x_1, y_1), ..., (x_m, y_m)$ is given by:

$L(x) = \sum_{j=0}^{m} y_j l_j(x)$

where $l_j(x)$ are the Lagrange basis polynomials, defined as:

$l_j(x) = \prod_{\substack{i=0 \\ i \neq j}}^{m} \frac{(x - x_i)}{(x_j - x_i)}$

#### 2.2. Properties of Lagrange Basis Polynomials ($l_j(x)$)

*   ** Kronecker Delta Property:** $l_j(x_k) = \delta_{jk}$, where $\delta_{jk}$ is the Kronecker delta ($\delta_{jk} = 1$ if $j=k$, and $\delta_{jk} = 0$ if $j \neq k$). This property ensures that when we evaluate $L(x)$ at a node $x_k$, only the term corresponding to $y_k$ survives, and $L(x_k) = y_k$. This directly links the nodal values of the basis functions to the nodal values of the unknown function.
*   **Summation Property:** $\sum_{j=0}^{m} l_j(x) = 1$ for all $x$.

#### 2.3. Application to 1D Elements

Consider a 1D element (e.g., a line segment) with $n$ nodes. We can approximate a function $u(x)$ over this element using $n$ Lagrange basis polynomials, $N_i(x)$, where $N_i(x)$ is constructed to be equal to 1 at node $i$ and 0 at all other nodes $j \neq i$.

The approximate solution is then:

$u_h(x) = \sum_{i=1}^{n} N_i(x) u_i$

#### 2.4. Examples of 1D Lagrange Polynomials

*   **2-Node Linear Element (Line Segment):**
    *   Nodes: $x_1, x_2$.
    *   Degree: 1.
    *   Basis functions: $N_1(x)$ and $N_2(x)$.

    Let's consider the element to be defined over the interval $[x_1, x_2]$. A common practice is to use a normalized coordinate system $\xi \in [-1, 1]$.
    *   Node 1: $\xi_1 = -1$
    *   Node 2: $\xi_2 = 1$

    Using the Lagrange formula:
    $N_1(\xi) = \frac{(\xi - \xi_2)}{(\xi_1 - \xi_2)} = \frac{(\xi - 1)}{(-1 - 1)} = \frac{(\xi - 1)}{-2} = \frac{1 - \xi}{2}$
    $N_2(\xi) = \frac{(\xi - \xi_1)}{(\xi_2 - \xi_1)} = \frac{(\xi - (-1))}{(1 - (-1))} = \frac{(\xi + 1)}{2}$

    *   **Check properties:**
        *   $N_1(\xi_1) = \frac{1 - (-1)}{2} = 1$, $N_1(\xi_2) = \frac{1 - 1}{2} = 0$.
        *   $N_2(\xi_1) = \frac{-1 + 1}{2} = 0$, $N_2(\xi_2) = \frac{1 + 1}{2} = 1$.
        *   $N_1(\xi) + N_2(\xi) = \frac{1 - \xi}{2} + \frac{1 + \xi}{2} = \frac{1 - \xi + 1 + \xi}{2} = \frac{2}{2} = 1$.

    *   Approximate solution: $u_h(\xi) = N_1(\xi) u_1 + N_2(\xi) u_2 = \frac{1 - \xi}{2} u_1 + \frac{1 + \xi}{2} u_2$.

*   **3-Node Quadratic Element (Line Segment):**
    *   Nodes: $x_1, x_2, x_3$ (two at ends, one at midpoint).
    *   Degree: 2.
    *   In normalized coordinates $\xi \in [-1, 1]$: $\xi_1 = -1$, $\xi_2 = 0$, $\xi_3 = 1$.

    The Lagrange basis polynomials are:
    $N_1(\xi) = \frac{(\xi - \xi_2)(\xi - \xi_3)}{(\xi_1 - \xi_2)(\xi_1 - \xi_3)} = \frac{(\xi - 0)(\xi - 1)}{(-1 - 0)(-1 - 1)} = \frac{\xi(\xi - 1)}{(-1)(-2)} = \frac{\xi(\xi - 1)}{2}$
    $N_2(\xi) = \frac{(\xi - \xi_1)(\xi - \xi_3)}{(\xi_2 - \xi_1)(\xi_2 - \xi_3)} = \frac{(\xi - (-1))(\xi - 1)}{(0 - (-1))(0 - 1)} = \frac{(\xi + 1)(\xi - 1)}{(1)(-1)} = -(\xi^2 - 1) = 1 - \xi^2$
    $N_3(\xi) = \frac{(\xi - \xi_1)(\xi - \xi_2)}{(\xi_3 - \xi_1)(\xi_3 - \xi_2)} = \frac{(\xi - (-1))(\xi - 0)}{(1 - (-1))(1 - 0)} = \frac{(\xi + 1)\xi}{(2)(1)} = \frac{\xi(\xi + 1)}{2}$

    *   **Check properties:**
        *   $N_1(-1)=0, N_1(0)=0, N_1(1)=0$ (Error in formula, should be $N_1(-1)=1, N_1(0)=0, N_1(1)=0$). Let's recheck the general formula.

    Let's re-derive for the 3-node element:
    $N_1(\xi) = \frac{(\xi - \xi_2)(\xi - \xi_3)}{(\xi_1 - \xi_2)(\xi_1 - \xi_3)} = \frac{(\xi - 0)(\xi - 1)}{(-1 - 0)(-1 - 1)} = \frac{\xi(\xi - 1)}{(-1)(-2)} = \frac{\xi^2 - \xi}{2}$
    $N_2(\xi) = \frac{(\xi - \xi_1)(\xi - \xi_3)}{(\xi_2 - \xi_1)(\xi_2 - \xi_3)} = \frac{(\xi - (-1))(\xi - 1)}{(0 - (-1))(0 - 1)} = \frac{(\xi + 1)(\xi - 1)}{(1)(-1)} = -(\xi^2 - 1) = 1 - \xi^2$
    $N_3(\xi) = \frac{(\xi - \xi_1)(\xi - \xi_2)}{(\xi_3 - \xi_1)(\xi_3 - \xi_2)} = \frac{(\xi - (-1))(\xi - 0)}{(1 - (-1))(1 - 0)} = \frac{(\xi + 1)\xi}{(2)(1)} = \frac{\xi^2 + \xi}{2}$

    *   **Corrected check properties:**
        *   $N_1(-1) = \frac{(-1)^2 - (-1)}{2} = \frac{1+1}{2} = 1$, $N_1(0) = 0$, $N_1(1) = 0$.
        *   $N_2(-1) = 1 - (-1)^2 = 0$, $N_2(0) = 1 - 0^2 = 1$, $N_2(1) = 1 - 1^2 = 0$.
        *   $N_3(-1) = 0$, $N_3(0) = 0$, $N_3(1) = \frac{1^2 + 1}{2} = 1$.
        *   Sum: $N_1(\xi) + N_2(\xi) + N_3(\xi) = \frac{\xi^2 - \xi}{2} + (1 - \xi^2) + \frac{\xi^2 + \xi}{2} = \frac{\xi^2 - \xi + 2 - 2\xi^2 + \xi^2 + \xi}{2} = \frac{2}{2} = 1$.

    *   Approximate solution: $u_h(\xi) = N_1(\xi) u_1 + N_2(\xi) u_2 + N_3(\xi) u_3 = \frac{\xi^2 - \xi}{2} u_1 + (1 - \xi^2) u_2 + \frac{\xi^2 + \xi}{2} u_3$.

---

### 3. Lagrange Polynomials in 2D

In 2D, elements are typically triangles or quadrilaterals. Lagrange polynomials can be constructed for these shapes by forming products of 1D Lagrange polynomials.

#### 3.1. 2D Triangular Elements

*   **3-Node Linear Triangle (T3):**
    *   Nodes: Three vertices.
    *   Basis functions are linear.
    *   We use **areal coordinates (or barycentric coordinates)**, denoted by $L_1, L_2, L_3$, where $L_i = 0$ on the edge opposite vertex $i$ and $L_i = 1$ at vertex $i$.
    *   $L_1 + L_2 + L_3 = 1$.
    *   The basis functions $N_i$ are simply the areal coordinates: $N_i = L_i$.

    The approximate solution is: $u_h(x, y) = N_1(x, y) u_1 + N_2(x, y) u_2 + N_3(x, y) u_3$.

    For a triangle with vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$:
    $L_1 = \frac{1}{2A} [(x_2 y_3 - x_3 y_2) + (y_2 - y_3)x + (x_3 - x_2)y]$
    $L_2 = \frac{1}{2A} [(x_3 y_1 - x_1 y_3) + (y_3 - y_1)x + (x_1 - x_3)y]$
    $L_3 = \frac{1}{2A} [(x_1 y_2 - x_2 y_1) + (y_1 - y_2)x + (x_2 - x_1)y]$
    where $A$ is the area of the triangle.

*   **6-Node Quadratic Triangle (T6):**
    *   Nodes: Three vertices and three mid-side nodes.
    *   Degree: 2.
    *   Constructed by taking products of 1D Lagrange polynomials along the sides of the triangle.
    *   Consider a side with nodes $i$ and $k$. The basis functions associated with these nodes on this side are the 1D Lagrange polynomials for those two nodes.
    *   For the vertex nodes, the basis functions are quadratic. For the mid-side nodes, they are linear along that side and zero at the vertices.

    A more general way to construct 2D Lagrange polynomials for any shape is to map the element to a standard reference element (e.g., a unit square or a standard triangle) and use the 1D Lagrange polynomials in the mapped coordinates.

#### 3.2. 2D Quadrilateral Elements

*   **4-Node Linear Quadrilateral (Q4) / Serendipity element:**
    *   Nodes: Four vertices.
    *   Degree: Bilinear (product of two linear polynomials).
    *   Using normalized coordinates $\xi, \eta \in [-1, 1]$ for a reference square.
    *   The basis functions are products of 1D Lagrange polynomials in $\xi$ and $\eta$.

    Let the nodes be $(\xi_i, \eta_i)$:
    *   Node 1: $(-1, -1)$
    *   Node 2: $(1, -1)$
    *   Node 3: $(1, 1)$
    *   Node 4: $(-1, 1)$

    The 1D Lagrange polynomials in $\xi$ are $N_{1,\xi}(\xi) = \frac{1-\xi}{2}$, $N_{2,\xi}(\xi) = \frac{1+\xi}{2}$.
    The 1D Lagrange polynomials in $\eta$ are $N_{1,\eta}(\eta) = \frac{1-\eta}{2}$, $N_{2,\eta}(\eta) = \frac{1+\eta}{2}$.

    The 2D basis functions are formed by products:
    $N_1(\xi, \eta) = N_{1,\xi}(\xi) N_{1,\eta}(\eta) = \frac{1-\xi}{2} \frac{1-\eta}{2}$ (associated with node $(-1, -1)$)
    $N_2(\xi, \eta) = N_{2,\xi}(\xi) N_{1,\eta}(\eta) = \frac{1+\xi}{2} \frac{1-\eta}{2}$ (associated with node $(1, -1)$)
    $N_3(\xi, \eta) = N_{2,\xi}(\xi) N_{2,\eta}(\eta) = \frac{1+\xi}{2} \frac{1+\eta}{2}$ (associated with node $(1, 1)$)
    $N_4(\xi, \eta) = N_{1,\xi}(\xi) N_{2,\eta}(\eta) = \frac{1-\xi}{2} \frac{1+\eta}{2}$ (associated with node $(-1, 1)$)

    *   **Check properties:**
        *   $N_1(-1, -1) = 1$, $N_1(1, -1) = 0$, $N_1(-1, 1) = 0$, $N_1(1, 1) = 0$.
        *   Similar checks for other $N_i$.
        *   Sum of $N_i$ over the element is 1.

    *   Approximate solution: $u_h(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) u_i$.

*   **8-Node Quadratic Quadrilateral (Q8) / Serendipity element:**
    *   Nodes: Four vertices and four mid-side nodes.
    *   Degree: Quadratic.
    *   Constructed using 1D quadratic Lagrange polynomials for the sides.

    For a side with 3 nodes (e.g., vertices at $\xi = \pm 1$ and midpoint at $\xi=0$), you use the 3-node 1D Lagrange polynomials. The 2D basis functions are formed by multiplying these 1D polynomials in $\xi$ and $\eta$. For example, $N_1(\xi, \eta)$ associated with vertex $(-1, -1)$ would be a product of the 1D polynomial for $\xi=-1$ and $\eta=-1$. The mid-side node basis functions will be linear along that side and zero at the other nodes.

---

### 4. Properties and Suitability of Lagrange Polynomials

*   **Completeness:** Lagrange polynomials of degree $m$ can accurately represent any polynomial of degree $m$.
*   **Conformity:** They are inherently continuous across element boundaries if nodal values are matched. This ensures displacement continuity in structural mechanics problems.
*   **Uniqueness:** For a given set of nodes, there is a unique Lagrange polynomial of a specified degree.
*   **Ease of Implementation:** The Kronecker delta property simplifies the process of defining basis functions.
*   **Flexibility:** By increasing the number of nodes, we can achieve higher-order approximations, leading to improved accuracy.

---

### 5. Practice Questions and Exercises

**Question 1 (1D):**
For a 1D quadratic element defined on the interval $[-2, 4]$ with nodes at $-2, 1, 4$, derive the Lagrange basis polynomials $N_1(\xi), N_2(\xi), N_3(\xi)$ in terms of the normalized coordinate $\xi \in [-1, 1]$. The mapping from $x$ to $\xi$ is $\xi = \frac{2x - (x_{max} + x_{min})}{x_{max} - x_{min}}$.

**Solution 1:**
First, find the mapping from $x$ to $\xi$:
$x_{min} = -2$, $x_{max} = 4$.
$\xi = \frac{2x - (4 + (-2))}{4 - (-2)} = \frac{2x - 2}{6} = \frac{x - 1}{3}$

The nodes in terms of $x$ are $x_1 = -2$, $x_2 = 1$, $x_3 = 4$.
The corresponding nodes in terms of $\xi$ are:
$\xi_1 = \frac{-2 - 1}{3} = \frac{-3}{3} = -1$
$\xi_2 = \frac{1 - 1}{3} = \frac{0}{3} = 0$
$\xi_3 = \frac{4 - 1}{3} = \frac{3}{3} = 1$

These are the standard nodes for a 3-node quadratic element. The Lagrange basis polynomials are:
$N_1(\xi) = \frac{(\xi - \xi_2)(\xi - \xi_3)}{(\xi_1 - \xi_2)(\xi_1 - \xi_3)} = \frac{(\xi - 0)(\xi - 1)}{(-1 - 0)(-1 - 1)} = \frac{\xi(\xi - 1)}{(-1)(-2)} = \frac{\xi^2 - \xi}{2}$
$N_2(\xi) = \frac{(\xi - \xi_1)(\xi - \xi_3)}{(\xi_2 - \xi_1)(\xi_2 - \xi_3)} = \frac{(\xi - (-1))(\xi - 1)}{(0 - (-1))(0 - 1)} = \frac{(\xi + 1)(\xi - 1)}{(1)(-1)} = -(\xi^2 - 1) = 1 - \xi^2$
$N_3(\xi) = \frac{(\xi - \xi_1)(\xi - \xi_2)}{(\xi_3 - \xi_1)(\xi_3 - \xi_2)} = \frac{(\xi - (-1))(\xi - 0)}{(1 - (-1))(1 - 0)} = \frac{(\xi + 1)\xi}{(2)(1)} = \frac{\xi^2 + \xi}{2}$

**Question 2 (2D):**
For a 4-node quadrilateral element in the $\xi-\eta$ plane with nodes at $(-1, -1), (1, -1), (1, 1), (-1, 1)$, derive the expression for the basis function $N_3(\xi, \eta)$ associated with the node $(1, 1)$.

**Solution 2:**
The nodes for the 4-node quadrilateral are:
Node 1: $(\xi_1, \eta_1) = (-1, -1)$
Node 2: $(\xi_2, \eta_2) = (1, -1)$
Node 3: $(\xi_3, \eta_3) = (1, 1)$
Node 4: $(\xi_4, \eta_4) = (-1, 1)$

The 2D Lagrange basis functions are formed by the product of 1D Lagrange polynomials in $\xi$ and $\eta$. For node 3 $(1, 1)$, we need the 1D polynomial that is 1 at $\xi=1$ and 0 at $\xi=-1$, and the 1D polynomial that is 1 at $\eta=1$ and 0 at $\eta=-1$.

1D polynomial in $\xi$ for node 3: $N_{3,\xi}(\xi) = \frac{(\xi - \xi_1)}{(\xi_3 - \xi_1)} = \frac{(\xi - (-1))}{(1 - (-1))} = \frac{\xi + 1}{2}$
1D polynomial in $\eta$ for node 3: $N_{3,\eta}(\eta) = \frac{(\eta - \eta_1)}{(\eta_3 - \eta_1)} = \frac{(\eta - (-1))}{(1 - (-1))} = \frac{\eta + 1}{2}$

Therefore, the 2D basis function for node 3 is:
$N_3(\xi, \eta) = N_{3,\xi}(\xi) \times N_{3,\eta}(\eta) = \left(\frac{\xi + 1}{2}\right) \left(\frac{\eta + 1}{2}\right) = \frac{(\xi + 1)(\eta + 1)}{4}$

---

### 6. Important Points to Remember

*   **Lagrange Polynomials:** Defined to be 1 at their associated node and 0 at all other nodes. This is the key property ($l_j(x_k) = \delta_{jk}$).
*   **Basis Functions ($N_i$):** In FEM, the Lagrange polynomials $l_j(x)$ are directly used as basis functions $N_i(x)$ for the element.
*   **Approximate Solution:** $u_h(x) = \sum N_i(x) u_i$. The $u_i$ are the nodal values of the unknown function.
*   **1D Elements:** For a line segment of degree $m$, there are $m+1$ nodes, and the basis functions are $m$-th degree polynomials.
*   **2D Elements:**
    *   **Triangles:** Linear (3 nodes), Quadratic (6 nodes). Areal coordinates are used for linear triangles.
    *   **Quadrilaterals:** Bilinear (4 nodes), Quadratic (8 nodes). Products of 1D Lagrange polynomials in $\xi$ and $\eta$ are used.
*   **Normalized Coordinates:** Using normalized coordinates (like $\xi \in [-1, 1]$) simplifies the derivation and implementation of basis functions for standard elements.
*   **Mapping:** For elements in the physical domain ($x, y$), a mapping to a reference element ($\xi, \eta$) is often used to derive the basis functions.

---
