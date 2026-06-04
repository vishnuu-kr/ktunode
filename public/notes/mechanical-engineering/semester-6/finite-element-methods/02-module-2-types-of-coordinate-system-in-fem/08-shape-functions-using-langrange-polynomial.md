---
title: "Shape functions using Langrange polynomial"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446384c"
status: "completed"
scrapedAt: "2026-05-20T18:04:01.146Z"
---
# Finite Element Methods - Module 2: Types of Coordinate System in FEM

## Topic: Shape Functions using Lagrange Polynomial

### Introduction to Shape Functions

Shape functions, denoted by $N_i(\mathbf{x})$, are fundamental to the Finite Element Method (FEM). They are used to interpolate the unknown field variable (e.g., displacement, temperature) within an element based on the nodal values of that variable. Essentially, they define how the behavior of the field variable varies across the element.

**Key Concepts:**

*   **Interpolation Functions:** Shape functions are interpolation functions that approximate the continuous field variable within an element.
*   **Nodal Values:** The values of the field variable at the element's nodes are the primary inputs for determining the shape functions.
*   **Local Coordinates:** Shape functions are typically defined in terms of local or natural coordinate systems, which simplify their formulation and make them independent of the global element orientation.
*   **Completeness:** For accurate results, shape functions should be complete within the element, meaning they can represent the behavior of the field variable accurately.

**Relationship to Course Outcomes:**

*   **CO1 (Knowledge Level: K2):** Understanding shape functions is crucial for grasping the basic procedure of FEM, as they are the building blocks of element formulation.
*   **CO2 (Knowledge Level: K3):** This topic directly addresses the formulation of shape functions, which is essential for applying coordinate transformations and understanding element behavior.
*   **CO3 (Knowledge Level: K4):** The ability to formulate shape functions is a prerequisite for deriving the element strain-displacement matrix.

### What are Lagrange Polynomials?

Lagrange polynomials are a specific type of interpolating polynomial. Given a set of $n+1$ distinct points $(x_0, y_0), (x_1, y_1), \ldots, (x_n, y_n)$, the Lagrange polynomial of degree at most $n$ that passes through these points is given by:

$P(x) = \sum_{j=0}^{n} y_j L_j(x)$

where $L_j(x)$ are the Lagrange basis polynomials defined as:

$L_j(x) = \prod_{i=0, i \neq j}^{n} \frac{x - x_i}{x_j - x_i}$

**Properties of Lagrange Basis Polynomials:**

*   $L_j(x_k) = \delta_{jk}$ (Kronecker delta), meaning $L_j(x_j) = 1$ and $L_j(x_i) = 0$ for $i \neq j$.

### Shape Functions using Lagrange Polynomials

Lagrange polynomials are widely used to construct shape functions in FEM due to their simplicity and their ability to satisfy the Kronecker delta property at the nodes.

**General Idea:**

We assume that the field variable $u$ within an element can be approximated by a linear combination of shape functions $N_i$ and the nodal values $u_i$:

$u(\mathbf{x}) \approx \sum_{i=1}^{n} N_i(\mathbf{x}) u_i$

where $n$ is the number of nodes in the element.

The shape functions $N_i(\mathbf{x})$ are constructed such that:

1.  $N_i(\mathbf{x}_j) = \delta_{ij}$ (i.e., $N_i$ is 1 at node $i$ and 0 at all other nodes $j \neq i$).
2.  The sum of the shape functions is 1: $\sum_{i=1}^{n} N_i(\mathbf{x}) = 1$. This ensures that if all nodal values are constant, the solution is also constant.

**Advantages of using Lagrange Polynomials for Shape Functions:**

*   **Simplicity:** The formula for Lagrange polynomials is straightforward to derive and implement.
*   **Completeness:** They can provide complete polynomial approximations of a certain degree.
*   **Uniqueness:** For a given set of nodes, there is a unique Lagrange interpolating polynomial.

### Examples of Shape Functions using Lagrange Polynomials

We will illustrate this with examples of 1D and 2D elements.

#### 1. One-Dimensional (1D) Elements

**a) 1D Linear Element (Two Nodes)**

*   **Element:** A line segment with nodes at $\xi = -1$ and $\xi = 1$. The local coordinate $\xi$ ranges from -1 to 1.
*   **Number of Nodes:** $n=2$
*   **Nodes:** Node 1 at $\xi = -1$, Node 2 at $\xi = 1$.
*   **Polynomial Degree:** To have two nodes, we need a polynomial of degree at least 1. A linear polynomial $a\xi + b$.

Using the Lagrange polynomial formula:

*   **For Node 1 ($j=0$, corresponding to $\xi_0 = -1$):**
    $N_1(\xi) = \prod_{i=1}^{1} \frac{\xi - \xi_i}{\xi_0 - \xi_i} = \frac{\xi - \xi_1}{\xi_0 - \xi_1} = \frac{\xi - 1}{-1 - 1} = \frac{\xi - 1}{-2} = \frac{1 - \xi}{2}$

*   **For Node 2 ($j=1$, corresponding to $\xi_1 = 1$):**
    $N_2(\xi) = \prod_{i=0}^{0} \frac{\xi - \xi_i}{\xi_1 - \xi_i} = \frac{\xi - \xi_0}{\xi_1 - \xi_0} = \frac{\xi - (-1)}{1 - (-1)} = \frac{\xi + 1}{2}$

**Summary for 1D Linear Element:**
$N_1(\xi) = \frac{1 - \xi}{2}$
$N_2(\xi) = \frac{1 + \xi}{2}$

**Verification:**
*   At $\xi = -1$: $N_1(-1) = \frac{1 - (-1)}{2} = \frac{2}{2} = 1$, $N_2(-1) = \frac{1 + (-1)}{2} = \frac{0}{2} = 0$. (Correct)
*   At $\xi = 1$: $N_1(1) = \frac{1 - 1}{2} = \frac{0}{2} = 0$, $N_2(1) = \frac{1 + 1}{2} = \frac{2}{2} = 1$. (Correct)
*   Sum: $N_1(\xi) + N_2(\xi) = \frac{1 - \xi}{2} + \frac{1 + \xi}{2} = \frac{1 - \xi + 1 + \xi}{2} = \frac{2}{2} = 1$. (Correct)

**b) 1D Quadratic Element (Three Nodes)**

*   **Element:** A line segment with nodes at $\xi = -1$, $\xi = 0$, and $\xi = 1$.
*   **Number of Nodes:** $n=3$
*   **Nodes:** Node 1 at $\xi_0 = -1$, Node 2 at $\xi_1 = 0$, Node 3 at $\xi_2 = 1$.
*   **Polynomial Degree:** To have three nodes, we need a polynomial of degree at least 2. A quadratic polynomial $a\xi^2 + b\xi + c$.

Using the Lagrange polynomial formula:

*   **For Node 1 ($j=0$, $\xi_0 = -1$):**
    $N_1(\xi) = \frac{\xi - \xi_1}{\xi_0 - \xi_1} \cdot \frac{\xi - \xi_2}{\xi_0 - \xi_2} = \frac{\xi - 0}{-1 - 0} \cdot \frac{\xi - 1}{-1 - 1} = \frac{\xi}{-1} \cdot \frac{\xi - 1}{-2} = \frac{\xi(\xi - 1)}{2}$

*   **For Node 2 ($j=1$, $\xi_1 = 0$):**
    $N_2(\xi) = \frac{\xi - \xi_0}{\xi_1 - \xi_0} \cdot \frac{\xi - \xi_2}{\xi_1 - \xi_2} = \frac{\xi - (-1)}{0 - (-1)} \cdot \frac{\xi - 1}{0 - 1} = \frac{\xi + 1}{1} \cdot \frac{\xi - 1}{-1} = -(\xi + 1)(\xi - 1) = -(\xi^2 - 1) = 1 - \xi^2$

*   **For Node 3 ($j=2$, $\xi_2 = 1$):**
    $N_3(\xi) = \frac{\xi - \xi_0}{\xi_2 - \xi_0} \cdot \frac{\xi - \xi_1}{\xi_2 - \xi_1} = \frac{\xi - (-1)}{1 - (-1)} \cdot \frac{\xi - 0}{1 - 0} = \frac{\xi + 1}{2} \cdot \frac{\xi}{1} = \frac{\xi(\xi + 1)}{2}$

**Summary for 1D Quadratic Element:**
$N_1(\xi) = \frac{\xi(\xi - 1)}{2}$
$N_2(\xi) = 1 - \xi^2$
$N_3(\xi) = \frac{\xi(\xi + 1)}{2}$

**Verification:**
*   At $\xi = -1$: $N_1(-1)=0$, $N_2(-1)=1-(-1)^2=0$, $N_3(-1) = \frac{-1(-1+1)}{2} = 0$. (Node 1 value should be 1, let's recheck)
    *   Ah, my mistake was in the association of $j$ with node numbers. Let's re-align:
        *   Node 1 at $\xi_0 = -1$, Shape Function $N_1(\xi)$
        *   Node 2 at $\xi_1 = 0$, Shape Function $N_2(\xi)$
        *   Node 3 at $\xi_2 = 1$, Shape Function $N_3(\xi)$

    *   **For Node 1 ($j=0$, $\xi_0 = -1$):**
        $N_1(\xi) = \frac{\xi - \xi_1}{\xi_0 - \xi_1} \cdot \frac{\xi - \xi_2}{\xi_0 - \xi_2} = \frac{\xi - 0}{-1 - 0} \cdot \frac{\xi - 1}{-1 - 1} = \frac{\xi}{-1} \cdot \frac{\xi - 1}{-2} = \frac{\xi(\xi - 1)}{2}$
        *   At $\xi = -1$: $N_1(-1) = \frac{-1(-1 - 1)}{2} = \frac{-1(-2)}{2} = \frac{2}{2} = 1$. (Correct)

    *   **For Node 2 ($j=1$, $\xi_1 = 0$):**
        $N_2(\xi) = \frac{\xi - \xi_0}{\xi_1 - \xi_0} \cdot \frac{\xi - \xi_2}{\xi_1 - \xi_2} = \frac{\xi - (-1)}{0 - (-1)} \cdot \frac{\xi - 1}{0 - 1} = \frac{\xi + 1}{1} \cdot \frac{\xi - 1}{-1} = -(\xi + 1)(\xi - 1) = 1 - \xi^2$
        *   At $\xi = 0$: $N_2(0) = 1 - 0^2 = 1$. (Correct)

    *   **For Node 3 ($j=2$, $\xi_2 = 1$):**
        $N_3(\xi) = \frac{\xi - \xi_0}{\xi_2 - \xi_0} \cdot \frac{\xi - \xi_1}{\xi_2 - \xi_1} = \frac{\xi - (-1)}{1 - (-1)} \cdot \frac{\xi - 0}{1 - 0} = \frac{\xi + 1}{2} \cdot \frac{\xi}{1} = \frac{\xi(\xi + 1)}{2}$
        *   At $\xi = 1$: $N_3(1) = \frac{1(1 + 1)}{2} = \frac{2}{2} = 1$. (Correct)

*   Sum: $N_1(\xi) + N_2(\xi) + N_3(\xi) = \frac{\xi(\xi - 1)}{2} + (1 - \xi^2) + \frac{\xi(\xi + 1)}{2}$
    $= \frac{\xi^2 - \xi}{2} + 1 - \xi^2 + \frac{\xi^2 + \xi}{2}$
    $= \frac{\xi^2 - \xi + 2 - 2\xi^2 + \xi^2 + \xi}{2}$
    $= \frac{(\xi^2 - 2\xi^2 + \xi^2) + (-\xi + \xi) + 2}{2}$
    $= \frac{0 + 0 + 2}{2} = 1$. (Correct)

#### 2. Two-Dimensional (2D) Elements

In 2D, we use two local coordinates, typically $\xi$ and $\eta$, where each ranges from -1 to 1.

**a) 2D Linear Quadrilateral Element (Four Nodes)**

*   **Element:** A square or rectangle in the $\xi$-$\eta$ plane.
*   **Number of Nodes:** $n=4$
*   **Nodes:**
    *   Node 1: $\xi = -1, \eta = -1$
    *   Node 2: $\xi = 1, \eta = -1$
    *   Node 3: $\xi = 1, \eta = 1$
    *   Node 4: $\xi = -1, \eta = 1$
*   **Polynomial Degree:** We need to construct a function $N(\xi, \eta)$ that is linear along each edge. This leads to a bilinear function.

The shape functions are constructed by multiplying 1D Lagrange shape functions. For a quadrilateral element, a node is defined by the intersection of two local coordinate lines.

*   **For Node 1 ($\xi = -1, \eta = -1$):**
    This node is at the intersection of the $\xi = -1$ line and the $\eta = -1$ line.
    We use the 1D linear shape functions for these lines:
    *   Along $\xi$: Node 1 is at $\xi=-1$, so $N_1^{\xi}(\xi) = \frac{1-\xi}{2}$, and Node 2 is at $\xi=1$, so $N_2^{\xi}(\xi) = \frac{1+\xi}{2}$.
    *   Along $\eta$: Node 1 is at $\eta=-1$, so $N_1^{\eta}(\eta) = \frac{1-\eta}{2}$, and Node 4 is at $\eta=1$, so $N_2^{\eta}(\eta) = \frac{1+\eta}{2}$.

    The shape function for Node 1 is the product of the shape functions corresponding to its local coordinate values:
    $N_1(\xi, \eta) = N_1^{\xi}(\xi) \cdot N_1^{\eta}(\eta) = \frac{1 - \xi}{2} \cdot \frac{1 - \eta}{2} = \frac{(1 - \xi)(1 - \eta)}{4}$

*   **For Node 2 ($\xi = 1, \eta = -1$):**
    $N_2(\xi, \eta) = N_2^{\xi}(\xi) \cdot N_1^{\eta}(\eta) = \frac{1 + \xi}{2} \cdot \frac{1 - \eta}{2} = \frac{(1 + \xi)(1 - \eta)}{4}$

*   **For Node 3 ($\xi = 1, \eta = 1$):**
    $N_3(\xi, \eta) = N_2^{\xi}(\xi) \cdot N_2^{\eta}(\eta) = \frac{1 + \xi}{2} \cdot \frac{1 + \eta}{2} = \frac{(1 + \xi)(1 + \eta)}{4}$

*   **For Node 4 ($\xi = -1, \eta = 1$):**
    $N_4(\xi, \eta) = N_1^{\xi}(\xi) \cdot N_2^{\eta}(\eta) = \frac{1 - \xi}{2} \cdot \frac{1 + \eta}{2} = \frac{(1 - \xi)(1 + \eta)}{4}$

**Summary for 2D Linear Quadrilateral Element:**
$N_1(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 - \eta)$
$N_2(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 - \eta)$
$N_3(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 + \eta)$
$N_4(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 + \eta)$

**Verification:**
*   At Node 1 (-1,-1): $N_1 = 1, N_2 = 0, N_3 = 0, N_4 = 0$. (Correct)
*   At Node 2 (1,-1): $N_1 = 0, N_2 = 1, N_3 = 0, N_4 = 0$. (Correct)
*   At Node 3 (1,1): $N_1 = 0, N_2 = 0, N_3 = 1, N_4 = 0$. (Correct)
*   At Node 4 (-1,1): $N_1 = 0, N_2 = 0, N_3 = 0, N_4 = 1$. (Correct)
*   Sum: $N_1+N_2+N_3+N_4 = \frac{1}{4} [ (1-\xi)(1-\eta) + (1+\xi)(1-\eta) + (1+\xi)(1+\eta) + (1-\xi)(1+\eta) ]$
    $= \frac{1}{4} [ (1-\eta)(1-\xi+1+\xi) + (1+\eta)(1+\xi+1-\xi) ]$
    $= \frac{1}{4} [ (1-\eta)(2) + (1+\eta)(2) ]$
    $= \frac{1}{4} [ 2 - 2\eta + 2 + 2\eta ] = \frac{1}{4} [4] = 1$. (Correct)

**b) 2D Quadratic Quadrilateral Element (Eight Nodes)**

*   **Element:** A square or rectangle in the $\xi$-$\eta$ plane with nodes at the corners and midpoints of the sides.
*   **Number of Nodes:** $n=8$
*   **Nodes:**
    *   Corner Nodes (4): (-1,-1), (1,-1), (1,1), (-1,1)
    *   Mid-side Nodes (4): (0,-1), (1,0), (0,1), (-1,0)

We use both 1D linear and quadratic Lagrange shape functions.

*   **Corner Nodes (using product of linear functions):**
    $N_1(\xi, \eta) = \frac{(1 - \xi)(1 - \eta)}{4}$ (at $\xi=-1, \eta=-1$)
    $N_2(\xi, \eta) = \frac{(1 + \xi)(1 - \eta)}{4}$ (at $\xi=1, \eta=-1$)
    $N_3(\xi, \eta) = \frac{(1 + \xi)(1 + \eta)}{4}$ (at $\xi=1, \eta=1$)
    $N_4(\xi, \eta) = \frac{(1 - \xi)(1 + \eta)}{4}$ (at $\xi=-1, \eta=1$)

*   **Mid-side Nodes (using product of linear and quadratic functions):**
    We need to identify which 1D shape functions are non-zero at each mid-side node.

    *   **Node 5 (mid-side at $\eta=-1$, $\xi=0$):** This node lies on the $\eta=-1$ line, where the linear shape functions are $N_1^{\eta}(\eta) = \frac{1-\eta}{2}$ and $N_2^{\eta}(\eta) = \frac{1+\eta}{2}$. At $\eta=-1$, $N_1^{\eta}=1$ and $N_2^{\eta}=0$.
        This node also lies on the $\xi=0$ line. For the $\xi$ coordinate, we need the quadratic shape functions. Node 1 is at $\xi=-1$, Node 2 is at $\xi=1$, and the mid-side node is at $\xi=0$. The quadratic shape functions for $\xi$ are:
        *   $\xi$-shape function for node 1: $N_1^{\xi}(\xi) = \frac{\xi(\xi-1)}{2}$
        *   $\xi$-shape function for node 2: $N_2^{\xi}(\xi) = 1 - \xi^2$
        *   $\xi$-shape function for node 3: $N_3^{\xi}(\xi) = \frac{\xi(\xi+1)}{2}$
        At $\xi=0$, the quadratic shape functions are $N_1^{\xi}(0)=0$, $N_2^{\xi}(0)=1$, $N_3^{\xi}(0)=0$. So we use the middle quadratic shape function for $\xi$.

        Therefore, for Node 5 (at $\xi=0, \eta=-1$):
        $N_5(\xi, \eta) = N_2^{\xi}(\xi) \cdot N_1^{\eta}(\eta) = (1 - \xi^2) \cdot \frac{1 - \eta}{2} = \frac{(1 - \xi^2)(1 - \eta)}{2}$

    *   **Node 6 (mid-side at $\xi=1$, $\eta=0$):** This node lies on the $\xi=1$ line. For $\xi$, we use the linear shape function $N_2^{\xi}(\xi) = \frac{1+\xi}{2}$.
        For $\eta$, we use the quadratic shape functions. At $\eta=0$, the middle quadratic shape function for $\eta$ is $N_2^{\eta}(\eta) = 1 - \eta^2$.
        Therefore, for Node 6 (at $\xi=1, \eta=0$):
        $N_6(\xi, \eta) = N_2^{\xi}(\xi) \cdot N_2^{\eta}(\eta) = \frac{1 + \xi}{2} \cdot (1 - \eta^2) = \frac{(1 + \xi)(1 - \eta^2)}{2}$

    *   **Node 7 (mid-side at $\eta=1$, $\xi=0$):** This node lies on the $\eta=1$ line. For $\eta$, we use the linear shape function $N_2^{\eta}(\eta) = \frac{1+\eta}{2}$.
        For $\xi$, we use the quadratic shape function $N_2^{\xi}(\xi) = 1 - \xi^2$.
        Therefore, for Node 7 (at $\xi=0, \eta=1$):
        $N_7(\xi, \eta) = N_2^{\xi}(\xi) \cdot N_2^{\eta}(\eta) = (1 - \xi^2) \cdot \frac{1 + \eta}{2} = \frac{(1 - \xi^2)(1 + \eta)}{2}$

    *   **Node 8 (mid-side at $\xi=-1$, $\eta=0$):** This node lies on the $\xi=-1$ line. For $\xi$, we use the linear shape function $N_1^{\xi}(\xi) = \frac{1 - \xi}{2}$.
        For $\eta$, we use the quadratic shape function $N_2^{\eta}(\eta) = 1 - \eta^2$.
        Therefore, for Node 8 (at $\xi=-1, \eta=0$):
        $N_8(\xi, \eta) = N_1^{\xi}(\xi) \cdot N_2^{\eta}(\eta) = \frac{1 - \xi}{2} \cdot (1 - \eta^2) = \frac{(1 - \xi)(1 - \eta^2)}{2}$

**Summary for 2D Quadratic Quadrilateral Element:**
$N_1(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 - \eta)$
$N_2(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 - \eta)$
$N_3(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 + \eta)$
$N_4(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 + \eta)$
$N_5(\xi, \eta) = \frac{1}{2}(1 - \xi^2)(1 - \eta)$
$N_6(\xi, \eta) = \frac{1}{2}(1 + \xi)(1 - \eta^2)$
$N_7(\xi, \eta) = \frac{1}{2}(1 - \xi^2)(1 + \eta)$
$N_8(\xi, \eta) = \frac{1}{2}(1 - \xi)(1 - \eta^2)$

**Important Note on Derivation:** The general formula for Lagrange shape functions of order $p$ in $m$ dimensions with $(p+1)^m$ nodes is a product of $(p+1)$ 1D Lagrange polynomials.

### General Formula for Lagrange Shape Functions (Isoparametric Approach)

While the direct application of the Lagrange polynomial formula works, for higher-order and complex elements, it's more systematic to think in terms of the natural coordinates.

For an element with $n$ nodes, and local coordinates $\xi_1, \xi_2, \ldots, \xi_n$ in 1D, the shape function $N_i(\xi)$ associated with node $i$ is:

$N_i(\xi) = \prod_{j=1, j \neq i}^{n} \frac{\xi - \xi_j}{\xi_i - \xi_j}$

In 2D with local coordinates $(\xi, \eta)$ and nodes $(\xi_i, \eta_i)$, the shape function $N_i(\xi, \eta)$ for node $i$ is:

$N_i(\xi, \eta) = \prod_{j=1, j \neq i}^{n} \frac{(\xi - \xi_j')}{(\xi_i - \xi_j')} \prod_{k=1, k \neq i}^{n} \frac{(\eta - \eta_k'')}{(\eta_i - \eta_k'')}$

where $\xi_j'$ and $\eta_k''$ are the local coordinates of the other nodes along the $\xi$ and $\eta$ directions that define the shape function at node $i$. This general formula is what we used implicitly in the examples.

For example, for the 2D linear quadrilateral, Node 1 has $(\xi_1, \eta_1) = (-1, -1)$.
The other nodes are Node 2 $(\xi_2, \eta_2) = (1, -1)$, Node 3 $(\xi_3, \eta_3) = (1, 1)$, Node 4 $(\xi_4, \eta_4) = (-1, 1)$.

To define $N_1$, we need to consider the $\xi$ coordinates of other nodes and $\eta$ coordinates of other nodes.
*   Along $\xi$ direction for Node 1: The other nodes have $\xi$ values of $1$ (Node 2) and $-1$ (Node 4). So, for the $\xi$ part, we use $\xi_j'$ as $\{1, -1\}$.
    $N_1^{\xi}(\xi) = \frac{\xi - 1}{-1 - 1} \cdot \frac{\xi - (-1)}{-1 - (-1)}$ --- This is where the notation in the general formula can be confusing.

A clearer way is to consider the nodal distribution along each local axis that defines the shape function.

For Node $i$ at $(\xi_i, \eta_i)$, the shape function $N_i(\xi, \eta)$ is the product of:
1.  A 1D Lagrange polynomial in $\xi$ that is 1 at $\xi_i$ and 0 at the $\xi$-coordinates of all nodes *on the same $\eta$-level* as node $i$.
2.  A 1D Lagrange polynomial in $\eta$ that is 1 at $\eta_i$ and 0 at the $\eta$-coordinates of all nodes *on the same $\xi$-level* as node $i$.

Let's re-apply this clearer understanding to the 2D linear quadrilateral:

*   **Node 1 (-1,-1):**
    *   Along $\xi$: Nodes 1 and 2 are on the $\eta=-1$ line. The $\xi$ coordinates are -1 and 1.
        1D shape function in $\xi$ for node 1 is $\frac{\xi - 1}{-1 - 1} = \frac{\xi - 1}{-2} = \frac{1 - \xi}{2}$.
    *   Along $\eta$: Nodes 1 and 4 are on the $\xi=-1$ line. The $\eta$ coordinates are -1 and 1.
        1D shape function in $\eta$ for node 1 is $\frac{\eta - 1}{-1 - 1} = \frac{\eta - 1}{-2} = \frac{1 - \eta}{2}$.
    $N_1(\xi, \eta) = (\frac{1 - \xi}{2}) (\frac{1 - \eta}{2}) = \frac{(1 - \xi)(1 - \eta)}{4}$.

This approach is consistent and easier to apply.

### Relation to Coordinate Systems

The use of Lagrange polynomial shape functions is intrinsically linked to the concept of **natural or local coordinate systems** (like $\xi, \eta, \zeta$). These local systems, typically defined over a standard reference element (e.g., a unit square or cube), make the formulation of shape functions independent of the global orientation, size, and shape of the actual element in the problem domain.

The transformation from global Cartesian coordinates $(x, y)$ to natural coordinates $(\xi, \eta)$ is typically achieved by relating the global coordinates to the nodal coordinates using the same shape functions:

$x(\xi, \eta) = \sum_{i=1}^{n} N_i(\xi, \eta) x_i$
$y(\xi, \eta) = \sum_{i=1}^{n} N_i(\xi, \eta) y_i$

This concept is known as **isoparametric mapping**, where the same shape functions are used for both geometric mapping and field variable interpolation. This allows for the efficient formulation of elements with arbitrary shapes and high-order polynomial approximations.

**Reference to Textbooks:**

*   **J.N. Reddy:** Chapter 4 (Isoparametric Elements) and Chapter 3 (Formulation of Finite Elements) discuss the derivation of shape functions and their role in mapping and interpolation. Reddy often uses the direct definition of Lagrange polynomials.
*   **R.D. Cook:** Chapter 5 (Formulation of Finite Elements) covers shape functions for various elements (bars, beams, 2D elements) and explains their construction using interpolation polynomials. Cook's approach also emphasizes the nodal definitions and properties.
*   **S.S. Bhavikatti:** Chapter 5 (Shape Functions) provides a detailed explanation of shape functions for 1D, 2D, and 3D elements, including linear and quadratic formulations using Lagrange polynomials.
*   **J. Fish & T. Belytschko:** Chapter 3 (Finite Element Discretization) and Chapter 4 (Element Formulation) delve into interpolation and isoparametric concepts. They often present shape functions in a systematic way that aligns with the product of 1D functions for higher-dimensional elements.

### Practice Questions

1.  **Derive the shape functions for a 1D cubic element with four nodes located at $\xi = -1, -1/3, 1/3, 1$.**
    *   **Answer:**
        We need 4 nodes, so we use a cubic polynomial. Let the nodes be $\xi_0=-1, \xi_1=-1/3, \xi_2=1/3, \xi_3=1$.
        Using the Lagrange formula $N_i(\xi) = \prod_{j=0, j\neq i}^{3} \frac{\xi - \xi_j}{\xi_i - \xi_j}$:

        *   $N_0(\xi) = \frac{(\xi - (-1/3))(\xi - 1/3)(\xi - 1)}{(-1 - (-1/3))(-1 - 1/3)(-1 - 1)} = \frac{(\xi + 1/3)(\xi - 1/3)(\xi - 1)}{(-2/3)(-4/3)(-2)} = \frac{(\xi^2 - 1/9)(\xi - 1)}{-16/9} = -\frac{9}{16}(\xi^2 - 1/9)(\xi - 1)$

        *   $N_1(\xi) = \frac{(\xi - (-1))(\xi - 1/3)(\xi - 1)}{(-1/3 - (-1))(-1/3 - 1/3)(-1/3 - 1)} = \frac{(\xi + 1)(\xi - 1/3)(\xi - 1)}{ (2/3)(-2/3)(-4/3)} = \frac{(\xi + 1)(\xi - 1/3)(\xi - 1)}{16/27} = \frac{27}{16}(\xi + 1)(\xi - 1/3)(\xi - 1)$

        *   $N_2(\xi) = \frac{(\xi - (-1))(\xi - (-1/3))(\xi - 1)}{(1/3 - (-1))(1/3 - (-1/3))(1/3 - 1)} = \frac{(\xi + 1)(\xi + 1/3)(\xi - 1)}{(4/3)(2/3)(-2/3)} = \frac{(\xi + 1)(\xi + 1/3)(\xi - 1)}{-16/27} = -\frac{27}{16}(\xi + 1)(\xi + 1/3)(\xi - 1)$

        *   $N_3(\xi) = \frac{(\xi - (-1))(\xi - (-1/3))(\xi - 1/3)}{(1 - (-1))(1 - (-1/3))(1 - 1/3)} = \frac{(\xi + 1)(\xi + 1/3)(\xi - 1/3)}{(2)(4/3)(2/3)} = \frac{(\xi + 1)(\xi + 1/3)(\xi - 1/3)}{16/9} = \frac{9}{16}(\xi + 1)(\xi + 1/3)(\xi - 1/3)$

        *(Note: Expanding these fully can be tedious, but the structure is the key).*

2.  **For a 2D linear triangular element with nodes at (0,0), (1,0), and (0,1) in global coordinates, and corresponding local coordinates, derive the shape functions in terms of the global coordinates $(x,y)$.**
    *(Hint: First, find the local coordinates for the triangle. For a unit triangle, often $(\xi, \eta)$ are used such that $x = \sum N_i x_i$, $y = \sum N_i y_i$, and $\xi+\eta \le 1$ if using a specific parameterization. A simpler approach is to use area coordinates or directly assume linear shape functions of the form $N_i = a_i + b_i x + c_i y$ and solve for $a_i, b_i, c_i$ using the Kronecker delta property at the nodes.)*

    *   **Answer using direct assumption (simpler):**
        Let the nodes be $1=(0,0)$, $2=(1,0)$, $3=(0,1)$.
        Assume $N_i(x,y) = a_i + b_i x + c_i y$.
        We need $N_i(x_j, y_j) = \delta_{ij}$.

        *   **For Node 1 (0,0):** $N_1(0,0) = a_1 + b_1(0) + c_1(0) = a_1 = 1$.
            $N_2(0,0) = a_2 = 0$.
            $N_3(0,0) = a_3 = 0$.
            So, $a_1=1, a_2=0, a_3=0$.

        *   **For Node 2 (1,0):**
            $N_1(1,0) = a_1 + b_1(1) + c_1(0) = 1 + b_1 = 0 \implies b_1 = -1$.
            $N_2(1,0) = a_2 + b_2(1) + c_2(0) = 0 + b_2 = 1 \implies b_2 = 1$.
            $N_3(1,0) = a_3 + b_3(1) + c_3(0) = 0 + b_3 = 0 \implies b_3 = 0$.
            So, $b_1=-1, b_2=1, b_3=0$.

        *   **For Node 3 (0,1):**
            $N_1(0,1) = a_1 + b_1(0) + c_1(1) = 1 + c_1 = 0 \implies c_1 = -1$.
            $N_2(0,1) = a_2 + b_2(0) + c_2(1) = 0 + c_2 = 0 \implies c_2 = 0$.
            $N_3(0,1) = a_3 + b_3(0) + c_3(1) = 0 + c_3 = 1 \implies c_3 = 1$.
            So, $c_1=-1, c_2=0, c_3=1$.

        The shape functions are:
        $N_1(x,y) = 1 - x - y$
        $N_2(x,y) = x$
        $N_3(x,y) = y$

        Let's check the sum: $N_1+N_2+N_3 = (1-x-y) + x + y = 1$. (Correct)
        These are the standard linear triangular element shape functions.

3.  **What is the degree of the polynomial approximation provided by a 2D quadratic quadrilateral element?**
    *   **Answer:** The shape functions for a 2D quadratic quadrilateral element are of degree 2. For example, $N_1(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 - \eta) = \frac{1}{4}(1 - \xi - \eta + \xi\eta)$. This is a bilinear function in terms of $\xi$ and $\eta$. When considering combinations for interpolation, the highest order term will be $\xi^2$, $\eta^2$, or $\xi\eta$, making it a complete quadratic polynomial space. Therefore, it provides a quadratic approximation.

### Important Points to Remember

*   **Node Numbering Convention:** The order of nodes in the element definition is crucial for assigning the correct shape function to each nodal value.
*   **Local vs. Global Coordinates:** Shape functions are almost always defined in local (natural) coordinates ($\xi, \eta, \zeta$) for simplicity and generality.
*   **Kronecker Delta Property:** $N_i(\mathbf{x}_j) = \delta_{ij}$ is the defining property of shape functions at the nodes.
*   **Sum of Shape Functions:** $\sum N_i(\mathbf{x}) = 1$ ensures constant patch test satisfaction and proper behavior under rigid body motion.
*   **Polynomial Completeness:** For accuracy, the polynomial order of the shape functions should be sufficient to represent the expected behavior of the field variable (e.g., linear for constant strain, quadratic for varying strain).
*   **Lagrange Polynomials vs. Serendipity Elements:** Lagrange elements use all nodes to achieve a certain polynomial order. Serendipity elements achieve the same polynomial order with fewer nodes, often by omitting some corner nodes of higher-order elements.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### References and Further Reading

*   **Reddy, J. N. (2009). *An Introduction to the Finite Element Method*** (3rd ed.). McGrawHill Education. (Chapters 3 & 4 are highly relevant for shape function derivation and isoparametric concepts).
*   **Cook, R. D. (2008). *Concepts and Applications of Finite Element Analysis*** (3rd ed.). Wiley. (Chapter 5 provides a comprehensive treatment of shape functions for various elements).
*   **Bhavikatti, S. S. (2008). *Finite Element Analysis*** (3rd ed.). New Age Publishers. (Chapter 5 is dedicated to shape functions and their formulation).
*   **Fish, J., & Belytschko, T. (2007). *A First Course in Finite Elements*** (2nd ed.). John Wiley & Sons, Ltd. (Chapters 3 & 4 cover discretization and element formulation, including shape functions).
*   **Segerlind, L. J. (2010). *Applied Finite Element Analysis*** (2nd ed.). John Wiley and Sons. (Chapter 4 discusses interpolation and shape functions).
*   **Ramamurthi, G. (n.d.). *Applied Finite Element Analysis*** (2nd ed.). I K International Publishing House Pvt. Ltd.
*   **Hutton, D. V. (2009). *Fundamentals of Finite Element Methods*** (3rd ed.). McGrawHill Education. (Chapters 4 & 5 discuss interpolation and element formulation).