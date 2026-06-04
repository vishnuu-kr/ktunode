---
title: "Interpolation and shape functions"
subject: "FINITE ELEMENT METHOD"
module: "Module 2: Brief review of matrix methods"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116d3"
status: "completed"
scrapedAt: "2026-05-20T18:58:56.335Z"
---
# Finite Element Method - Module 2: Brief Review of Matrix Methods

## Topic: Interpolation and Shape Functions

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of interpolation and its role in the Finite Element Method (FEM).
*   Define and explain different types of interpolation functions, including linear, quadratic, and higher-order polynomials.
*   Derive and understand the properties of shape functions for one-dimensional (1D) and two-dimensional (2D) elements.
*   Apply shape functions to approximate the behavior of a function within an element.
*   Understand the relationship between node values and the interpolated function.
*   Recognize the importance of continuity and inter-element compatibility.

---

### 1. Introduction to Interpolation in FEM

#### 1.1 What is Interpolation?

*   **Definition:** Interpolation is the process of estimating unknown values of a function between known data points.
*   **Role in FEM:** In FEM, we divide a complex domain into smaller, simpler regions called **finite elements**. The behavior of the physical quantity (e.g., displacement, temperature) within each element is approximated using **interpolation functions**, also known as **shape functions**.
*   **Why Interpolation?**
    *   Real-world physical phenomena are often described by complex differential equations that are difficult to solve directly.
    *   FEM provides an approximate solution by discretizing the problem.
    *   Interpolation functions allow us to represent the behavior within each element in a manageable and calculable way.

#### 1.2 The Need for Approximation

*   The exact solution to the governing differential equation is usually unknown.
*   We discretize the domain into elements and assume that the unknown function can be approximated by a simpler function within each element.
*   These simpler functions are typically **polynomials**.

---

### 2. Key Concepts and Definitions

#### 2.1 Elements and Nodes

*   **Element:** The fundamental building block of the FEM. It's a small, geometrically simple region (e.g., a line segment, triangle, quadrilateral).
*   **Nodes:** Points within or on the boundary of an element where the unknown function's values (or its derivatives) are directly calculated or prescribed. These are the "known data points" for interpolation.

#### 2.2 Interpolation Functions (Shape Functions)

*   **Definition:** Functions that define the variation of the unknown quantity within an element in terms of the nodal values of that quantity.
*   **Notation:** Commonly denoted by $N_i$, where '$i$' is the node number to which the shape function is associated.
*   **Relationship:** The interpolated function $u(x)$ within an element is expressed as a weighted sum of the shape functions and the nodal values of the unknown quantity ($\hat{u}_i$):

    $u(x) = \sum_{i=1}^{n} N_i(x) \hat{u}_i$

    where:
    *   $u(x)$ is the interpolated value of the unknown quantity at position $x$ within the element.
    *   $N_i(x)$ is the shape function associated with node $i$.
    *   $\hat{u}_i$ is the value of the unknown quantity at node $i$.
    *   $n$ is the total number of nodes in the element.

#### 2.3 Types of Interpolation Functions

*   **Polynomials:** The most common choice for shape functions due to their desirable properties (smoothness, ease of differentiation, ability to approximate various functions).
    *   **Linear:** Simplest polynomials, often used for basic elements.
    *   **Quadratic:** Higher-order polynomials, providing better accuracy for smoother variations.
    *   **Cubic and Higher:** Used for more complex problems or when higher accuracy is required.

#### 2.4 Properties of Shape Functions

These properties are crucial for constructing valid shape functions:

1.  **Completeness:** The interpolation polynomial should be capable of representing any polynomial of degree less than or equal to the degree of the polynomial itself. This ensures that if the exact solution is a polynomial, the FEM solution will be exact.
2.  **Conformity (Continuity):** Shape functions should ensure that the resulting interpolated function is continuous across element boundaries. This is essential for physical problems where quantities like displacement or temperature are expected to be continuous.
    *   **C0 Continuity:** The function itself is continuous across element boundaries. (Most common in basic FEM).
    *   **C1 Continuity:** The function and its first derivative are continuous across element boundaries. (Needed for problems involving bending, like beam elements).
3.  **Partition of Unity:** The sum of all shape functions over the element should be equal to 1.
    $\sum_{i=1}^{n} N_i(x) = 1$
    This ensures that if all nodal values are equal, the interpolated value is also equal to that constant value.
4.  **Kronecker Delta Property:** The shape function associated with node $i$ must be equal to 1 at node $i$ and 0 at all other nodes of the element.
    $N_i(x_j) = \delta_{ij} = \begin{cases} 1 & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}$
    This is the most fundamental property that allows us to directly relate nodal values to the interpolated function.

---

### 3. Shape Functions for 1D Elements

#### 3.1 The 1D Line Element

*   Consider a simple 1D line element defined by two nodes, node 1 and node 2.
*   Let the spatial coordinate be $x$. The element spans from $x_1$ to $x_2$.
*   The unknown quantity is $u(x)$. We want to approximate $u(x)$ within this element using the nodal values $\hat{u}_1$ and $\hat{u}_2$.

#### 3.2 Linear Shape Functions for a 1D Element

*   We need two linear interpolation functions, $N_1(x)$ and $N_2(x)$, such that:
    $u(x) = N_1(x) \hat{u}_1 + N_2(x) \hat{u}_2$

*   **Applying Kronecker Delta Property:**
    *   At node 1 ($x=x_1$): $u(x_1) = N_1(x_1) \hat{u}_1 + N_2(x_1) \hat{u}_2 = \hat{u}_1$. This implies $N_1(x_1) = 1$ and $N_2(x_1) = 0$.
    *   At node 2 ($x=x_2$): $u(x_2) = N_1(x_2) \hat{u}_1 + N_2(x_2) \hat{u}_2 = \hat{u}_2$. This implies $N_1(x_2) = 0$ and $N_2(x_2) = 1$.

*   **Choosing Polynomial Form:** Since we have two nodes and need two linear functions, we can use linear polynomials:
    $N_1(x) = a_1 x + b_1$
    $N_2(x) = a_2 x + b_2$

*   **Solving for Coefficients:** Using the conditions above:
    *   For $N_1(x)$:
        $a_1 x_1 + b_1 = 1$
        $a_1 x_2 + b_1 = 0$
        Subtracting the second from the first: $a_1(x_1 - x_2) = 1 \Rightarrow a_1 = \frac{1}{x_1 - x_2}$
        Substituting $a_1$ into the second equation: $\frac{x_2}{x_1 - x_2} + b_1 = 0 \Rightarrow b_1 = -\frac{x_2}{x_1 - x_2} = \frac{x_2}{x_2 - x_1}$
        So, $N_1(x) = \frac{1}{x_1 - x_2} x + \frac{x_2}{x_2 - x_1} = \frac{x_2 - x}{x_2 - x_1}$

    *   For $N_2(x)$:
        $a_2 x_1 + b_2 = 0$
        $a_2 x_2 + b_2 = 1$
        Subtracting the first from the second: $a_2(x_2 - x_1) = 1 \Rightarrow a_2 = \frac{1}{x_2 - x_1}$
        Substituting $a_2$ into the first equation: $\frac{x_1}{x_2 - x_1} + b_2 = 0 \Rightarrow b_2 = -\frac{x_1}{x_2 - x_1}$
        So, $N_2(x) = \frac{1}{x_2 - x_1} x - \frac{x_1}{x_2 - x_1} = \frac{x - x_1}{x_2 - x_1}$

*   **Standardization using Local Coordinate $\xi$:** It's often convenient to use a normalized local coordinate system $\xi$. For a 1D element, $\xi$ typically ranges from -1 to +1.
    $\xi = \frac{x - x_1}{x_2 - x_1}$
    So, $x = x_1 + \xi(x_2 - x_1)$
    And $x_2 - x_1$ is the element length, let's call it $L$.
    $x_1$ corresponds to $\xi = -1$ and $x_2$ corresponds to $\xi = 1$.

    Now, express $N_1$ and $N_2$ in terms of $\xi$:
    *   $N_1(\xi) = \frac{x_2 - x}{x_2 - x_1} = \frac{x_2 - (x_1 + \xi(x_2 - x_1))}{x_2 - x_1} = \frac{(x_2 - x_1) - \xi(x_2 - x_1)}{x_2 - x_1} = 1 - \xi$
    *   $N_2(\xi) = \frac{x - x_1}{x_2 - x_1} = \frac{(x_1 + \xi(x_2 - x_1)) - x_1}{x_2 - x_1} = \frac{\xi(x_2 - x_1)}{x_2 - x_1} = \xi$

*   **Shape Functions for 1D Linear Element (using $\xi$):**
    $N_1(\xi) = \frac{1 - \xi}{2}$ (This is using the common mapping where $x_1$ maps to $\xi=-1$ and $x_2$ maps to $\xi=1$. The previous derivation assumed $x_1$ to $\xi=0$ and $x_2$ to $\xi=1$ in a simpler way. Let's stick to the standard $\xi \in [-1, 1]$ mapping for consistency.)

    Let's redo the $\xi$ derivation using the standard mapping:
    $\xi = \frac{2(x - x_1)}{x_2 - x_1} - 1$
    or more commonly:
    $x = \frac{x_1 + x_2}{2} + \frac{x_2 - x_1}{2} \xi$
    This means $x_1 \leftrightarrow \xi = -1$ and $x_2 \leftrightarrow \xi = 1$.

    We want $N_i(\xi)$ such that $N_i(\xi_j) = \delta_{ij}$.
    *   $N_1(-1) = 1$, $N_1(1) = 0$
    *   $N_2(-1) = 0$, $N_2(1) = 1$

    Using linear polynomials in $\xi$:
    $N_1(\xi) = a\xi + b$
    $a(-1) + b = 1 \Rightarrow -a + b = 1$
    $a(1) + b = 0 \Rightarrow a + b = 0$
    Adding the two equations: $2b = 1 \Rightarrow b = 1/2$.
    Substituting $b$ into $a+b=0$: $a + 1/2 = 0 \Rightarrow a = -1/2$.
    So, $N_1(\xi) = -\frac{1}{2}\xi + \frac{1}{2} = \frac{1-\xi}{2}$

    $N_2(\xi) = c\xi + d$
    $c(-1) + d = 0 \Rightarrow -c + d = 0$
    $c(1) + d = 1 \Rightarrow c + d = 1$
    Subtracting the first from the second: $2c = 1 \Rightarrow c = 1/2$.
    Substituting $c$ into $-c+d=0$: $-1/2 + d = 0 \Rightarrow d = 1/2$.
    So, $N_2(\xi) = \frac{1}{2}\xi + \frac{1}{2} = \frac{1+\xi}{2}$

*   **Summary for 1D Linear Element:**
    *   Nodes: 2 (at $\xi = -1$ and $\xi = 1$)
    *   Shape Functions:
        $N_1(\xi) = \frac{1-\xi}{2}$
        $N_2(\xi) = \frac{1+\xi}{2}$
    *   Interpolated function: $u(\xi) = N_1(\xi) \hat{u}_1 + N_2(\xi) \hat{u}_2 = \frac{1-\xi}{2} \hat{u}_1 + \frac{1+\xi}{2} \hat{u}_2$

*   **Check Properties:**
    *   **Partition of Unity:** $N_1(\xi) + N_2(\xi) = \frac{1-\xi}{2} + \frac{1+\xi}{2} = \frac{1-\xi+1+\xi}{2} = \frac{2}{2} = 1$. (Satisfied)
    *   **Kronecker Delta:**
        $N_1(-1) = \frac{1-(-1)}{2} = \frac{2}{2} = 1$. $N_1(1) = \frac{1-1}{2} = 0$.
        $N_2(-1) = \frac{1+(-1)}{2} = \frac{0}{2} = 0$. $N_2(1) = \frac{1+1}{2} = \frac{2}{2} = 1$. (Satisfied)

#### 3.3 Quadratic Shape Functions for a 1D Element

*   Consider a 1D element with 3 nodes: 2 at the corners (node 1 and node 3) and 1 at the midpoint (node 2).
*   Nodes are located at $\xi = -1$ (node 1), $\xi = 0$ (node 2), and $\xi = 1$ (node 3).
*   We need 3 quadratic shape functions: $N_1(\xi), N_2(\xi), N_3(\xi)$.
*   The interpolated function will be quadratic: $u(\xi) = N_1(\xi) \hat{u}_1 + N_2(\xi) \hat{u}_2 + N_3(\xi) \hat{u}_3$.

*   **Applying Kronecker Delta Property:**
    *   $N_1(-1)=1, N_1(0)=0, N_1(1)=0$
    *   $N_2(-1)=0, N_2(0)=1, N_2(1)=0$
    *   $N_3(-1)=0, N_3(0)=0, N_3(1)=1$

*   **Lagrange Interpolation Polynomials:** A systematic way to derive shape functions satisfying the Kronecker Delta property is using Lagrange polynomials. For $n$ nodes, the $i$-th Lagrange polynomial of degree $n-1$ is given by:

    $L_i(x) = \prod_{j=1, j\neq i}^{n} \frac{x - x_j}{x_i - x_j}$

*   **Deriving $N_1(\xi)$ for quadratic element:**
    We need a polynomial of degree 2 (since there are 3 nodes) that is 1 at $\xi=-1$ and 0 at $\xi=0$ and $\xi=1$.
    $N_1(\xi) = C \frac{(\xi - 0)(\xi - 1)}{(-1 - 0)(-1 - 1)} = C \frac{\xi(\xi - 1)}{(-1)(-2)} = C \frac{\xi(\xi - 1)}{2}$
    To satisfy $N_1(-1)=1$:
    $1 = C \frac{(-1)(-1 - 1)}{2} = C \frac{(-1)(-2)}{2} = C \frac{2}{2} = C$
    So, $N_1(\xi) = \frac{\xi(\xi - 1)}{2}$

*   **Deriving $N_2(\xi)$:**
    We need a polynomial of degree 2 that is 1 at $\xi=0$ and 0 at $\xi=-1$ and $\xi=1$.
    $N_2(\xi) = C \frac{(\xi - (-1))(\xi - 1)}{(0 - (-1))(0 - 1)} = C \frac{(\xi + 1)(\xi - 1)}{(1)(-1)} = C \frac{(\xi + 1)(\xi - 1)}{-1}$
    To satisfy $N_2(0)=1$:
    $1 = C \frac{(0 + 1)(0 - 1)}{-1} = C \frac{(1)(-1)}{-1} = C \frac{-1}{-1} = C$
    So, $N_2(\xi) = -(\xi + 1)(\xi - 1) = -(\xi^2 - 1) = 1 - \xi^2$

*   **Deriving $N_3(\xi)$:**
    We need a polynomial of degree 2 that is 1 at $\xi=1$ and 0 at $\xi=-1$ and $\xi=0$.
    $N_3(\xi) = C \frac{(\xi - (-1))(\xi - 0)}{(1 - (-1))(1 - 0)} = C \frac{(\xi + 1)\xi}{(2)(1)} = C \frac{\xi(\xi + 1)}{2}$
    To satisfy $N_3(1)=1$:
    $1 = C \frac{(1 + 1)(1)}{2} = C \frac{(2)(1)}{2} = C$
    So, $N_3(\xi) = \frac{\xi(\xi + 1)}{2}$

*   **Summary for 1D Quadratic Element:**
    *   Nodes: 3 (at $\xi = -1, 0, 1$)
    *   Shape Functions:
        $N_1(\xi) = \frac{\xi(\xi - 1)}{2}$
        $N_2(\xi) = 1 - \xi^2$
        $N_3(\xi) = \frac{\xi(\xi + 1)}{2}$
    *   Interpolated function: $u(\xi) = N_1(\xi) \hat{u}_1 + N_2(\xi) \hat{u}_2 + N_3(\xi) \hat{u}_3$

*   **Check Properties:**
    *   **Partition of Unity:** $N_1 + N_2 + N_3 = \frac{\xi^2 - \xi}{2} + (1 - \xi^2) + \frac{\xi^2 + \xi}{2} = \frac{\xi^2 - \xi + 2 - 2\xi^2 + \xi^2 + \xi}{2} = \frac{2}{2} = 1$. (Satisfied)
    *   **Kronecker Delta:** You can verify these by plugging in $\xi = -1, 0, 1$. (Satisfied)

---

### 4. Shape Functions for 2D Elements

#### 4.1 The 2D Rectangular Element (Bilinear Element)

*   Consider a rectangular element in the $x-y$ plane with 4 nodes, located at the corners.
*   Let the element span from $x_1$ to $x_2$ in the $x$-direction and $y_1$ to $y_2$ in the $y$-direction.
*   We use a local coordinate system $\xi$ and $\eta$, where $\xi$ ranges from -1 to 1 (for $x$) and $\eta$ ranges from -1 to 1 (for $y$).
    $\xi = \frac{2(x - x_1)}{x_2 - x_1} - 1$  or  $x = x_1 + \frac{x_2 - x_1}{2}(1+\xi)$
    $\eta = \frac{2(y - y_1)}{y_2 - y_1} - 1$  or  $y = y_1 + \frac{y_2 - y_1}{2}(1+\eta)$

*   The unknown function $u(x, y)$ is approximated as:
    $u(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) \hat{u}_i$

*   **Deriving Shape Functions for 2D:** The key idea is to construct shape functions that are products of the 1D shape functions. For a rectangular element with nodes $(x_1, y_1), (x_2, y_1), (x_2, y_2), (x_1, y_2)$, and corresponding $\xi, \eta$ coordinates $(-1, -1), (1, -1), (1, 1), (-1, 1)$:

    The 1D shape functions for the $\xi$ direction are:
    $N_{1\xi}(\xi) = \frac{1-\xi}{2}$
    $N_{2\xi}(\xi) = \frac{1+\xi}{2}$

    The 1D shape functions for the $\eta$ direction are:
    $N_{1\eta}(\eta) = \frac{1-\eta}{2}$
    $N_{2\eta}(\eta) = \frac{1+\eta}{2}$

    The 2D shape functions are formed by taking the product of one $\xi$-shape function and one $\eta$-shape function. The node numbering is crucial. Let's number them counter-clockwise starting from the bottom left:

    *   Node 1: $(\xi, \eta) = (-1, -1)$
    *   Node 2: $(\xi, \eta) = (1, -1)$
    *   Node 3: $(\xi, \eta) = (1, 1)$
    *   Node 4: $(\xi, \eta) = (-1, 1)$

    Now, construct the 2D shape functions $N_i(\xi, \eta)$:

    *   $N_1(\xi, \eta)$: Associated with Node 1 $(-1, -1)$. Needs to be 1 at $(-1, -1)$ and 0 at $(1, -1), (1, 1), (-1, 1)$.
        $N_1(\xi, \eta) = N_{1\xi}(\xi) \times N_{1\eta}(\eta) = \frac{1-\xi}{2} \times \frac{1-\eta}{2} = \frac{1}{4}(1-\xi)(1-\eta)$

    *   $N_2(\xi, \eta)$: Associated with Node 2 $(1, -1)$. Needs to be 1 at $(1, -1)$ and 0 at $(-1, -1), (1, 1), (-1, 1)$.
        $N_2(\xi, \eta) = N_{2\xi}(\xi) \times N_{1\eta}(\eta) = \frac{1+\xi}{2} \times \frac{1-\eta}{2} = \frac{1}{4}(1+\xi)(1-\eta)$

    *   $N_3(\xi, \eta)$: Associated with Node 3 $(1, 1)$. Needs to be 1 at $(1, 1)$ and 0 at $(-1, -1), (1, -1), (-1, 1)$.
        $N_3(\xi, \eta) = N_{2\xi}(\xi) \times N_{2\eta}(\eta) = \frac{1+\xi}{2} \times \frac{1+\eta}{2} = \frac{1}{4}(1+\xi)(1+\eta)$

    *   $N_4(\xi, \eta)$: Associated with Node 4 $(-1, 1)$. Needs to be 1 at $(-1, 1)$ and 0 at $(-1, -1), (1, -1), (1, 1)$.
        $N_4(\xi, \eta) = N_{1\xi}(\xi) \times N_{2\eta}(\eta) = \frac{1-\xi}{2} \times \frac{1+\eta}{2} = \frac{1}{4}(1-\xi)(1+\eta)$

*   **Summary for 2D Bilinear Rectangular Element:**
    *   Nodes: 4 (at corners, $\xi, \eta = \pm 1$)
    *   Shape Functions:
        $N_1(\xi, \eta) = \frac{1}{4}(1-\xi)(1-\eta)$
        $N_2(\xi, \eta) = \frac{1}{4}(1+\xi)(1-\eta)$
        $N_3(\xi, \eta) = \frac{1}{4}(1+\xi)(1+\eta)$
        $N_4(\xi, \eta) = \frac{1}{4}(1-\xi)(1+\eta)$
    *   Interpolated function: $u(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) \hat{u}_i$

*   **Check Properties:**
    *   **Partition of Unity:** Summing all $N_i$ should result in 1 for any $(\xi, \eta)$ within the element. (Verify this by expansion).
    *   **Kronecker Delta:** Plugging in the $(\xi, \eta)$ coordinates of each node will show that $N_i$ is 1 at node $i$ and 0 at others. For example, for $N_1$:
        $N_1(1, -1) = \frac{1}{4}(1-1)(1-(-1)) = \frac{1}{4}(0)(2) = 0$ (Correct)
        $N_1(1, 1) = \frac{1}{4}(1-1)(1+1) = \frac{1}{4}(0)(2) = 0$ (Correct)
        $N_1(-1, 1) = \frac{1}{4}(1-(-1))(1+1) = \frac{1}{4}(2)(2) = 1$ - ERROR IN EXAMPLE NODE ASSIGNMENT. The node assignment needs to be consistent with the shape function structure.

    Let's re-check node numbering and shape function association:
    *   Node 1: $(-1, -1) \implies N_1 = \frac{1}{4}(1-\xi)(1-\eta)$
    *   Node 2: $(1, -1) \implies N_2 = \frac{1}{4}(1+\xi)(1-\eta)$
    *   Node 3: $(1, 1) \implies N_3 = \frac{1}{4}(1+\xi)(1+\eta)$
    *   Node 4: $(-1, 1) \implies N_4 = \frac{1}{4}(1-\xi)(1+\eta)$

    Let's check $N_4$ at Node 1 $(-1, -1)$:
    $N_4(-1, -1) = \frac{1}{4}(1-(-1))(1+(-1)) = \frac{1}{4}(2)(0) = 0$. (Correct)
    Let's check $N_4$ at Node 3 $(1, 1)$:
    $N_4(1, 1) = \frac{1}{4}(1-1)(1+1) = \frac{1}{4}(0)(2) = 0$. (Correct)
    Let's check $N_4$ at Node 4 $(-1, 1)$:
    $N_4(-1, 1) = \frac{1}{4}(1-(-1))(1+1) = \frac{1}{4}(2)(2) = 1$. (Correct)

    The derived shape functions are correct for the standard node numbering.

#### 4.2 The 2D Triangular Element (Linear - CST)

*   Consider a triangular element with 3 nodes at its vertices.
*   We can use a coordinate system $(x, y)$ or an area-based coordinate system called **barycentric coordinates** ($L_1, L_2, L_3$).
*   Barycentric coordinates have the property that $L_1 + L_2 + L_3 = 1$ over the triangle.
*   The interpolated function is: $u(x, y) = L_1(x, y) \hat{u}_1 + L_2(x, y) \hat{u}_2 + L_3(x, y) \hat{u}_3$.
*   The linear interpolation functions $L_i$ are linear polynomials in $x$ and $y$.

*   **Deriving Linear Shape Functions for a Triangle (CST - Constant Strain Triangle):**
    Let the vertices of the triangle be $(x_1, y_1), (x_2, y_2), (x_3, y_3)$.
    The linear shape function $L_i(x, y)$ can be defined as:
    $L_i(x, y) = \frac{A_i}{A_{total}}$
    where $A_i$ is the area of the subtriangle formed by node $i$ and the opposite edge, and $A_{total}$ is the total area of the element.
    Alternatively, using determinants (and assuming counter-clockwise node ordering):
    $L_1(x, y) = \frac{1}{2A} \left[ (y_2 - y_3)x + (x_3 - x_2)y + (x_2 y_3 - x_3 y_2) \right]$
    $L_2(x, y) = \frac{1}{2A} \left[ (y_3 - y_1)x + (x_1 - x_3)y + (x_3 y_1 - x_1 y_3) \right]$
    $L_3(x, y) = \frac{1}{2A} \left[ (y_1 - y_2)x + (x_2 - x_1)y + (x_1 y_2 - x_2 y_1) \right]$
    where $A = \frac{1}{2} \left[ x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) \right]$ is the area of the triangle.

*   **Properties of $L_i$:**
    *   $L_i$ are linear polynomials in $x$ and $y$.
    *   $L_i(x_j, y_j) = \delta_{ij}$ (Kronecker Delta property).
    *   $L_1 + L_2 + L_3 = 1$ (Partition of unity property).

*   **Summary for 2D Linear Triangular Element (CST):**
    *   Nodes: 3 (at vertices)
    *   Shape Functions: $L_1, L_2, L_3$ (linear in $x, y$)
    *   Interpolated function: $u(x, y) = L_1 \hat{u}_1 + L_2 \hat{u}_2 + L_3 \hat{u}_3$

#### 4.3 Higher-Order Elements

*   **Quadratic Triangles (LST - Linear Strain Triangle):** Have 6 nodes (3 vertices, 3 midpoints of sides). Shape functions are quadratic.
*   **Quadratic Quadrilaterals:** Have 8 or 9 nodes. Shape functions are quadratic.
*   **Cubic Elements:** Have higher-order polynomial shape functions.

---

### 5. Examples

#### Example 1: Verify shape functions for a 1D linear element at a specific point.

Let $x_1 = 0$, $x_2 = 10$. The element length is $L=10$.
Using the standard $\xi$ mapping, where $\xi = \frac{2(x - 0)}{10} - 1 = \frac{x}{5} - 1$.
So, $x = 5(\xi+1)$.
The shape functions are:
$N_1(\xi) = \frac{1-\xi}{2}$
$N_2(\xi) = \frac{1+\xi}{2}$

Let's consider a point $x = 2$.
The corresponding $\xi$ value is $\xi = \frac{2}{5} - 1 = -\frac{3}{5} = -0.6$.

Calculate the shape function values at $\xi = -0.6$:
$N_1(-0.6) = \frac{1 - (-0.6)}{2} = \frac{1 + 0.6}{2} = \frac{1.6}{2} = 0.8$
$N_2(-0.6) = \frac{1 + (-0.6)}{2} = \frac{1 - 0.6}{2} = \frac{0.4}{2} = 0.2$

The interpolated value at $x=2$ would be $u(2) = N_1(-0.6) \hat{u}_1 + N_2(-0.6) \hat{u}_2 = 0.8 \hat{u}_1 + 0.2 \hat{u}_2$.

#### Example 2: Calculate the interpolated value using a 2D bilinear element.

Consider a rectangular element with vertices at (0,0), (2,0), (2,3), (0,3).
The node numbering and corresponding $(\xi, \eta)$ coordinates are:
Node 1: (0,0) $\rightarrow$ $(-1,-1)$
Node 2: (2,0) $\rightarrow$ $(1,-1)$
Node 3: (2,3) $\rightarrow$ $(1,1)$
Node 4: (0,3) $\rightarrow$ $(-1,1)$

The shape functions are:
$N_1(\xi, \eta) = \frac{1}{4}(1-\xi)(1-\eta)$
$N_2(\xi, \eta) = \frac{1}{4}(1+\xi)(1-\eta)$
$N_3(\xi, \eta) = \frac{1}{4}(1+\xi)(1+\eta)$
$N_4(\xi, \eta) = \frac{1}{4}(1-\xi)(1+\eta)$

Let's find the value of $u$ at a point $(x,y) = (1, 1.5)$.
First, convert to $(\xi, \eta)$:
$x_1=0, x_2=2 \Rightarrow \xi = \frac{2(1-0)}{2-0} - 1 = \frac{2}{2} - 1 = 1-1 = 0$
$y_1=0, y_2=3 \Rightarrow \eta = \frac{2(1.5-0)}{3-0} - 1 = \frac{3}{3} - 1 = 1-1 = 0$
So, the point $(1, 1.5)$ corresponds to $(\xi, \eta) = (0, 0)$ (the center of the element).

Now calculate the shape function values at $(\xi, \eta) = (0, 0)$:
$N_1(0,0) = \frac{1}{4}(1-0)(1-0) = \frac{1}{4}(1)(1) = \frac{1}{4}$
$N_2(0,0) = \frac{1}{4}(1+0)(1-0) = \frac{1}{4}(1)(1) = \frac{1}{4}$
$N_3(0,0) = \frac{1}{4}(1+0)(1+0) = \frac{1}{4}(1)(1) = \frac{1}{4}$
$N_4(0,0) = \frac{1}{4}(1-0)(1+0) = \frac{1}{4}(1)(1) = \frac{1}{4}$

The interpolated value is $u(1, 1.5) = N_1(0,0)\hat{u}_1 + N_2(0,0)\hat{u}_2 + N_3(0,0)\hat{u}_3 + N_4(0,0)\hat{u}_4$
$u(1, 1.5) = \frac{1}{4}\hat{u}_1 + \frac{1}{4}\hat{u}_2 + \frac{1}{4}\hat{u}_3 + \frac{1}{4}\hat{u}_4 = \frac{1}{4}(\hat{u}_1 + \hat{u}_2 + \hat{u}_3 + \hat{u}_4)$.
This shows that at the center of the element, the value is the average of the nodal values.

---

### 6. Practice Questions

#### Question 1: 1D Linear Element

Consider a 1D line element with nodes at $x_1 = 2$ and $x_2 = 8$.
a) Write down the expressions for the linear shape functions $N_1(x)$ and $N_2(x)$ in terms of $x$.
b) Convert these shape functions to the normalized local coordinate $\xi$, where $x_1$ corresponds to $\xi=-1$ and $x_2$ corresponds to $\xi=1$.
c) Using the $\xi$ expressions, find the value of $N_1$ and $N_2$ at $x=5$.

#### Question 2: 1D Quadratic Element

For a 1D quadratic element with nodes at $\xi = -1, 0, 1$:
a) If $\hat{u}_1 = 10$, $\hat{u}_2 = 20$, $\hat{u}_3 = 30$, find the interpolated value $u(\xi)$ at $\xi = 0.5$.
b) At what $\xi$ value(s) is $N_2(\xi) = 0.5$?

#### Question 3: 2D Bilinear Element

Consider a 2D rectangular element with nodes at:
Node 1: (0,0) $\rightarrow$ $\hat{u}_1 = 5$
Node 2: (4,0) $\rightarrow$ $\hat{u}_2 = 10$
Node 3: (4,2) $\rightarrow$ $\hat{u}_3 = 15$
Node 4: (0,2) $\rightarrow$ $\hat{u}_4 = 20$

a) Calculate the $(\xi, \eta)$ coordinates for the point $(x,y) = (2, 1)$.
b) Evaluate the shape functions $N_1, N_2, N_3, N_4$ at these $(\xi, \eta)$ coordinates.
c) Calculate the interpolated value $u(2,1)$.

---

### 7. Answers to Practice Questions

#### Answer 1: 1D Linear Element

a) In terms of $x$:
   $N_1(x) = \frac{x_2 - x}{x_2 - x_1} = \frac{8 - x}{8 - 2} = \frac{8 - x}{6}$
   $N_2(x) = \frac{x - x_1}{x_2 - x_1} = \frac{x - 2}{8 - 2} = \frac{x - 2}{6}$

b) Local coordinate mapping: $\xi = \frac{2(x - x_1)}{x_2 - x_1} - 1 = \frac{2(x - 2)}{6} - 1 = \frac{x - 2}{3} - 1$.
   From this, $x - 2 = 3(\xi + 1) \Rightarrow x = 2 + 3(\xi + 1) = 5 + 3\xi$.
   Also, $x_2 - x_1 = 6$.
   $N_1(\xi) = \frac{8 - (5 + 3\xi)}{6} = \frac{3 - 3\xi}{6} = \frac{1 - \xi}{2}$
   $N_2(\xi) = \frac{(5 + 3\xi) - 2}{6} = \frac{3 + 3\xi}{6} = \frac{1 + \xi}{2}$

c) For $x=5$:
   $N_1(5) = \frac{8 - 5}{6} = \frac{3}{6} = 0.5$
   $N_2(5) = \frac{5 - 2}{6} = \frac{3}{6} = 0.5$
   Using $\xi$ for $x=5$: $\xi = \frac{5-2}{3} - 1 = \frac{3}{3} - 1 = 1 - 1 = 0$.
   $N_1(0) = \frac{1 - 0}{2} = 0.5$
   $N_2(0) = \frac{1 + 0}{2} = 0.5$
   The results match.

#### Answer 2: 1D Quadratic Element

a) The shape functions are:
   $N_1(\xi) = \frac{\xi(\xi - 1)}{2}$
   $N_2(\xi) = 1 - \xi^2$
   $N_3(\xi) = \frac{\xi(\xi + 1)}{2}$

   At $\xi = 0.5$:
   $N_1(0.5) = \frac{0.5(0.5 - 1)}{2} = \frac{0.5(-0.5)}{2} = \frac{-0.25}{2} = -0.125$
   $N_2(0.5) = 1 - (0.5)^2 = 1 - 0.25 = 0.75$
   $N_3(0.5) = \frac{0.5(0.5 + 1)}{2} = \frac{0.5(1.5)}{2} = \frac{0.75}{2} = 0.375$

   Interpolated value:
   $u(0.5) = N_1(0.5)\hat{u}_1 + N_2(0.5)\hat{u}_2 + N_3(0.5)\hat{u}_3$
   $u(0.5) = (-0.125)(10) + (0.75)(20) + (0.375)(30)$
   $u(0.5) = -1.25 + 15 + 11.25 = 25$

b) We need to find $\xi$ such that $N_2(\xi) = 0.5$.
   $N_2(\xi) = 1 - \xi^2 = 0.5$
   $\xi^2 = 1 - 0.5 = 0.5$
   $\xi = \pm \sqrt{0.5} = \pm \frac{1}{\sqrt{2}} \approx \pm 0.707$
   Both $\xi = 0.707$ and $\xi = -0.707$ are within the element range $[-1, 1]$.

#### Answer 3: 2D Bilinear Element

The element has corners at $(0,0), (4,0), (4,2), (0,2)$.
The range for $x$ is $[0, 4]$ and for $y$ is $[0, 2]$.
The local coordinate mappings are:
$\xi = \frac{2(x - x_1)}{x_2 - x_1} - 1 = \frac{2(x - 0)}{4 - 0} - 1 = \frac{2x}{4} - 1 = \frac{x}{2} - 1$
$\eta = \frac{2(y - y_1)}{y_2 - y_1} - 1 = \frac{2(y - 0)}{2 - 0} - 1 = \frac{2y}{2} - 1 = y - 1$

a) For the point $(x,y) = (2, 1)$:
   $\xi = \frac{2}{2} - 1 = 1 - 1 = 0$
   $\eta = 1 - 1 = 0$
   So, the point is at $(\xi, \eta) = (0, 0)$.

b) Evaluate shape functions at $(\xi, \eta) = (0, 0)$:
   $N_1(0,0) = \frac{1}{4}(1-0)(1-0) = \frac{1}{4}$
   $N_2(0,0) = \frac{1}{4}(1+0)(1-0) = \frac{1}{4}$
   $N_3(0,0) = \frac{1}{4}(1+0)(1+0) = \frac{1}{4}$
   $N_4(0,0) = \frac{1}{4}(1-0)(1+0) = \frac{1}{4}$

c) Calculate the interpolated value $u(2,1)$:
   $u(2,1) = N_1(0,0)\hat{u}_1 + N_2(0,0)\hat{u}_2 + N_3(0,0)\hat{u}_3 + N_4(0,0)\hat{u}_4$
   $u(2,1) = \frac{1}{4}(5) + \frac{1}{4}(10) + \frac{1}{4}(15) + \frac{1}{4}(20)$
   $u(2,1) = \frac{1}{4}(5 + 10 + 15 + 20) = \frac{1}{4}(50) = 12.5$

---

### 8. Important Points to Remember

*   **Shape functions are the building blocks of FEM approximations.** They define how the unknown quantity varies within an element based on nodal values.
*   **Kronecker Delta property is essential.** It ensures that at node $i$, the interpolated value is exactly $\hat{u}_i$.
*   **Partition of Unity property is important.** It ensures consistent behavior for constant fields.
*   **Completeness** ensures that if the exact solution is a polynomial of a certain degree, the FEM approximation can recover it exactly (given appropriate element order).
*   **Local coordinates ($\xi, \eta$)** simplify the derivation and application of shape functions, especially for elements of varying dimensions and shapes.
*   **Lagrange interpolation** is a systematic method for deriving shape functions that satisfy the Kronecker Delta property.
*   The **degree of the polynomial** used for shape functions determines the element's "order" (linear, quadratic, etc.) and directly impacts the accuracy and computational cost.
*   Shape functions for **higher-dimensional elements** are often formed by the **product of lower-dimensional shape functions**.

---
