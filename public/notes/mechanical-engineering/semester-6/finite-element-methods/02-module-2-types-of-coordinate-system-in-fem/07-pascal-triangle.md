---
title: "Pascal triangle"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446384b"
status: "completed"
scrapedAt: "2026-05-20T18:04:00.447Z"
---
# FINITE ELEMENT METHODS - Module 2: Types of Coordinate System in FEM

## Topic: Pascal Triangle

This module explores different coordinate systems used in the Finite Element Method (FEM). The Pascal triangle plays a crucial role in understanding and constructing polynomial shape functions, which are fundamental to FEM.

---

### **Learning Outcomes Addressed:**

*   **Understanding of Governing Equations and Basic FEM Procedure:** While this topic directly focuses on shape functions, the ability to construct them is a prerequisite for applying FEM to solve physical phenomena. (Linked to CO1)
*   **Application of Coordinate Transformation and Formulation of Shape Functions:** The Pascal triangle is the bedrock for constructing shape functions in various coordinate systems. (Directly addresses CO2)
*   **Formulation of Shape Functions:** This topic is the primary driver for understanding how to formulate shape functions. (Directly addresses CO3)

---

### **Key Concepts and Definitions:**

#### **1. Shape Functions (Nodal Functions):**

*   **Definition:** Shape functions, denoted by $N_i$, relate the nodal values of a field variable (e.g., displacement, temperature) to the value of the field variable at any point within the element.
*   **Properties:**
    *   Sum of shape functions for an element equals 1: $\sum_{i=1}^{n} N_i(\xi, \eta, \zeta) = 1$ (where $n$ is the number of nodes).
    *   At node $i$, $N_i$ is 1 and $N_j$ (for $j \neq i$) is 0.
    *   They are continuous within the element.
*   **Importance:** Shape functions are essential for approximating the behavior of the field variable within an element and for deriving element stiffness matrices.

#### **2. Natural Coordinate System (Serendipity Coordinate System):**

*   **Definition:** A coordinate system defined within an element such that the origin (0,0,0) is at the center of the element and the coordinates range from -1 to +1. This simplifies the formulation and integration process.
*   **Advantages:**
    *   Symmetric definition, making calculations easier.
    *   Independent of the element's global coordinates.
    *   Facilitates the use of Gaussian quadrature for integration.
*   **Examples:**
    *   1D: $\xi \in [-1, 1]$
    *   2D: $\xi, \eta \in [-1, 1]$
    *   3D: $\xi, \eta, \zeta \in [-1, 1]$

#### **3. Pascal Triangle and Polynomial Shape Functions:**

*   **Concept:** The Pascal triangle provides a systematic way to identify and construct polynomial shape functions of increasing order for elements. It's based on the binomial expansion and the concept of multinomial coefficients.
*   **Relationship to Polynomial Order:** The entries in a row of the Pascal triangle correspond to the coefficients of a polynomial expansion. For shape functions, we are interested in interpolating across the element.
*   **Univariate Case (1D Element):**
    *   For a 1D element with two nodes (linear interpolation), the shape functions are linear polynomials. The Pascal triangle's first row (1) and second row (1, 1) can be seen as building blocks.
    *   Linear Shape Functions (1D): $N_1(\xi) = \frac{1 - \xi}{2}$, $N_2(\xi) = \frac{1 + \xi}{2}$
    *   Quadratic Shape Functions (1D): $N_1(\xi) = \frac{\xi(\xi-1)}{2}$, $N_2(\xi) = 1 - \xi^2$, $N_3(\xi) = \frac{\xi(\xi+1)}{2}$
    *   The coefficients for these polynomials can be related to entries in higher rows of the Pascal triangle.

*   **Bivariate Case (2D Element):**
    *   For 2D elements (e.g., triangular, quadrilateral), we use two natural coordinates, $\xi$ and $\eta$. The shape functions are bivariate polynomials.
    *   The Pascal triangle helps in constructing these polynomials by considering combinations of powers of $\xi$ and $\eta$.
    *   **Linear Triangular Element (3 nodes):** The shape functions are linear, requiring powers up to 1 for $\xi$ and $\eta$ (i.e., $\xi^0\eta^0$, $\xi^1\eta^0$, $\xi^0\eta^1$). The Pascal triangle's structure can be extended to visualize these combinations.
        *   Shape functions for a linear triangle in terms of area coordinates (which are linearly related to natural coordinates):
            $N_1(L_1, L_2, L_3) = L_1$, $N_2(L_1, L_2, L_3) = L_2$, $N_3(L_1, L_2, L_3) = L_3$
            where $L_1 + L_2 + L_3 = 1$.
    *   **Quadratic Triangular Element (6 nodes):** The shape functions are quadratic polynomials, involving powers up to 2 for $\xi$ and $\eta$. The Pascal triangle's structure is more evident here, showing combinations like $\xi^2$, $\eta^2$, $\xi\eta$, $\xi$, $\eta$, and constant.
    *   **Quadrilateral Element:** Similar principles apply, with shape functions being bivariate polynomials of a certain order.

#### **4. Area Coordinates (Triangular Elements):**

*   **Definition:** A set of three dimensionless coordinates ($L_1, L_2, L_3$) for a triangular element. They represent the ratios of the areas of subtriangles formed by a point inside the triangle and its vertices to the total area of the triangle.
*   **Properties:**
    *   $L_1 + L_2 + L_3 = 1$.
    *   For a point at vertex 1, $L_1 = 1$, $L_2 = 0$, $L_3 = 0$.
    *   For a point at vertex 2, $L_1 = 0$, $L_2 = 1$, $L_3 = 0$.
    *   For a point at vertex 3, $L_1 = 0$, $L_2 = 0$, $L_3 = 1$.
*   **Relation to Natural Coordinates:** Area coordinates are linearly related to natural coordinates, making them interchangeable for triangular element formulations.
*   **Pascal Triangle Connection:** The construction of shape functions for triangular elements using area coordinates often follows patterns visible in the Pascal triangle. For a linear triangle, the shape functions are $L_1, L_2, L_3$. For a quadratic triangle, they involve terms like $L_1^2, L_2^2, L_3^2, L_1L_2, L_2L_3, L_3L_1$. The number of terms and their degrees are organized systematically, mirroring the Pascal triangle.

#### **5. Multinomial Theorem:**

*   **Statement:** For any non-negative integer $n$, the expansion of $(x_1 + x_2 + \dots + x_k)^n$ is given by:
    $(x_1 + x_2 + \dots + x_k)^n = \sum_{n_1+n_2+\dots+n_k=n} \frac{n!}{n_1!n_2!\dots n_k!} x_1^{n_1} x_2^{n_2} \dots x_k^{n_k}$
*   **Relevance to FEM:** The coefficients $\frac{n!}{n_1!n_2!\dots n_k!}$ are precisely the numbers that appear in Pascal's generalized triangle (or multinomial coefficients). These coefficients are crucial when constructing multivariate polynomial shape functions. For example, in 2D, for a term like $(\xi + \eta)^n$, the coefficients are binomial coefficients. For more complex forms that build up the shape functions, the multinomial theorem is implicitly used.

---

### **How the Pascal Triangle Facilitates Shape Function Construction:**

The Pascal triangle provides a visual and conceptual framework for constructing polynomial shape functions. For $n$-dimensional elements, we use shape functions that are polynomials in $n$ variables.

*   **Linear Elements:** The simplest shape functions are linear. In 1D, this means a polynomial of degree 1. In 2D (using area coordinates), it means $L_1, L_2, L_3$, which are of degree 1 in the coordinate system. The Pascal triangle's foundation (row 0: 1, row 1: 1, 1) relates to the constant and linear terms.
*   **Quadratic Elements:** For quadratic interpolation, we need polynomials of degree 2. In 1D, this involves terms like $\xi^2$. In 2D, it involves terms like $\xi^2, \eta^2, \xi\eta$. The Pascal triangle's subsequent rows (e.g., row 2: 1, 2, 1 for $(a+b)^2$) provide the coefficients for these higher-order terms.
*   **Generalization:** The structure of the Pascal triangle helps in organizing the terms needed for higher-order polynomial interpolations. For example, in 2D, to get polynomials of degree $p$, we consider terms $\xi^i \eta^j$ where $i+j \le p$. The Pascal triangle pattern of binomial coefficients arises naturally when constructing these terms, especially when dealing with normalized coordinate systems or combinations of coordinate systems.

---

### **Examples:**

#### **Example 1: Linear Shape Functions for a 1D Bar Element**

*   **Element:** A 1D bar with two nodes (nodes 1 and 2).
*   **Natural Coordinate:** $\xi$, ranging from -1 to 1.
*   **Required Polynomial Order:** Linear (degree 1).
*   **Shape Functions:**
    *   At node 1 ($\xi = -1$), $N_1 = 1$, $N_2 = 0$.
    *   At node 2 ($\xi = 1$), $N_1 = 0$, $N_2 = 1$.
*   **Formulation:** Using the properties, we can deduce:
    *   $N_1(\xi) = a + b\xi$.
    *   $a + b(-1) = 1 \implies a - b = 1$
    *   $a + b(1) = 0 \implies a + b = 0$
    *   Solving these, $a = 1/2$, $b = -1/2$. So, $N_1(\xi) = \frac{1 - \xi}{2}$.
    *   Similarly, $N_2(\xi) = \frac{1 + \xi}{2}$.
*   **Pascal Triangle Connection:** These linear functions can be seen as derived from the linear terms (coefficients 1, 1) of the Pascal triangle and normalized.

#### **Example 2: Linear Shape Functions for a 2D Triangular Element (using Area Coordinates)**

*   **Element:** A 3-node triangular element.
*   **Coordinates:** Area coordinates ($L_1, L_2, L_3$).
*   **Required Polynomial Order:** Linear (degree 1).
*   **Shape Functions:**
    *   $N_1(L_1, L_2, L_3) = L_1$
    *   $N_2(L_1, L_2, L_3) = L_2$
    *   $N_3(L_1, L_2, L_3) = L_3$
*   **Properties Check:**
    *   At node 1 (where $L_1=1, L_2=0, L_3=0$), $N_1=1, N_2=0, N_3=0$.
    *   Sum: $L_1 + L_2 + L_3 = 1$.
*   **Pascal Triangle Connection:** These are the simplest linear interpolation functions. The structure of their definition ($L_i$) corresponds to the first level of polynomial interpolation.

#### **Example 3: Quadratic Shape Functions for a 2D Triangular Element (using Area Coordinates)**

*   **Element:** A 6-node triangular element (vertices + mid-side nodes).
*   **Coordinates:** Area coordinates ($L_1, L_2, L_3$).
*   **Required Polynomial Order:** Quadratic (degree 2).
*   **Shape Functions:** For a 6-node triangle, the shape functions are of the form $N_i = L_i(2L_i - 1)$ for vertex nodes and $N_i = 4L_jL_k$ for mid-side nodes.
    *   Vertex Node 1 ($L_1=1, L_2=0, L_3=0$): $N_1 = L_1(2L_1 - 1) = 1(2(1)-1) = 1$.
    *   Mid-side node between 1 and 2 (where $L_3=0, L_1=L_2$): $N_{12} = 4L_1L_2$. If the point is at the mid-side, $L_1=1/2, L_2=1/2$, so $N_{12} = 4(1/2)(1/2) = 1$.
*   **Pascal Triangle Connection:** The terms involved in quadratic interpolation in 2D (like $L_1^2, L_2^2, L_3^2, L_1L_2, L_2L_3, L_3L_1$) are derived from expanding combinations of linear terms. The number of terms and their structure can be visualized by extending the Pascal triangle concept to bivariate polynomials. For example, if we consider a polynomial of degree 2 in variables $x, y$, it has terms $x^2, y^2, xy, x, y, 1$. The coefficients relate to the Pascal triangle. For area coordinates, this pattern is maintained.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **Textbook and Reference Integration:**

*   **J.N. Reddy:** Reddy's book extensively covers the derivation of shape functions for various element types, including triangular and quadrilateral elements. The construction of these functions, especially for higher-order elements, implicitly relies on the systematic generation of polynomial terms, which the Pascal triangle helps to organize. Chapter 4 on "Isoparametric Elements and Numerical Integration" will likely touch upon the polynomial basis functions.
*   **Robert D. Cook:** Cook's "Concepts and Applications of Finite Element Method" is known for its clear explanation of basic concepts. He often uses graphical interpretations and systematic derivations of shape functions. The way he presents shape functions for triangles and quadrilaterals, particularly the mid-side nodes for higher-order elements, aligns with the underlying principles of polynomial interpolation that the Pascal triangle illustrates.
*   **S.S. Bhavikatti:** Bhavikatti's text also provides a good introduction to shape functions. The classification of elements (e.g., 3-noded triangle, 6-noded triangle) and the corresponding shape function formulations directly demonstrate the need for systematic polynomial construction.
*   **Jacob Fish & Ted Belytschko:** This book, "A First Course in Finite Elements," likely delves into the mathematical underpinnings. The connection between polynomial spaces and interpolation, where the Pascal triangle plays a role in defining the basis functions, would be a logical extension of their coverage.
*   **Larry J. Segerlind:** Segerlind's "Applied Finite Element Analysis" often uses a more traditional approach. The derivation of shape functions for specific element types, like the CST (Constant Strain Triangle) and LST (Linear Strain Triangle), involves constructing linear and quadratic polynomials, respectively. The Pascal triangle can be seen as a conceptual aid in understanding the complexity and organization of these polynomials.
*   **David V. Hutton:** Hutton's "Fundamentals of Finite Element Methods" provides a solid foundation. His explanations of interpolation, using Lagrange polynomials or similar methods, are directly related to constructing polynomials whose patterns are suggested by the Pascal triangle.

---

### **Alignment with Course Outcomes:**

*   **CO1 (Knowledge Level: K2):** Understanding the governing equations and basic procedure of FEM requires knowing how to approximate the solution field within an element. Shape functions are central to this, and the Pascal triangle helps in understanding the *basis* for these approximations.
*   **CO2 (Knowledge Level: K3):** This topic is *directly* about formulating shape functions. Understanding how the Pascal triangle relates to polynomial construction allows for the application of coordinate transformations (natural coordinates) to formulate these functions.
*   **CO3 (Knowledge Level: K4):** The core of this topic is the formulation of shape functions. The Pascal triangle provides a structured method for generating these, particularly for polynomial interpolation.

---

### **Important Points to Remember:**

*   The Pascal triangle is a **conceptual tool** for understanding the systematic generation of polynomial shape functions.
*   Natural coordinate systems ($\xi, \eta, \zeta$) simplify the formulation of shape functions by centering the element.
*   Shape functions must satisfy specific properties: $\sum N_i = 1$ and $N_i(\text{at node } j) = \delta_{ij}$.
*   The order of the polynomial used for shape functions determines the element's approximation capabilities (e.g., linear vs. quadratic interpolation).
*   For triangular elements, area coordinates are a convenient alternative to natural coordinates, and their interpolation polynomials also exhibit patterns related to the Pascal triangle.
*   The multinomial theorem is the mathematical generalization behind the Pascal triangle's structure, crucial for multivariate polynomials.

---

### **Practice Questions and Exercises:**

**Question 1:**
Explain the role of the Pascal triangle in the construction of polynomial shape functions for finite elements. (CO2, CO3)

**Answer:** The Pascal triangle provides a visual and systematic way to identify the terms and coefficients required to build polynomial shape functions of increasing order. For univariate polynomials, rows of the Pascal triangle directly correspond to binomial coefficients in expansions like $(1+\xi)^n$. For multivariate polynomials (common in 2D and 3D elements), the principles of generating combinations of variables with specific total degrees, governed by the multinomial theorem, result in patterns that are generalizations of the Pascal triangle. This helps ensure that shape functions of a desired order are completely and systematically generated.

**Question 2:**
Derive the linear shape functions for a 1D element using the natural coordinate system $\xi \in [-1, 1]$. (CO2, CO3)

**Answer:**
Let the 1D element have nodes 1 and 2 at $\xi = -1$ and $\xi = 1$ respectively.
We assume linear shape functions:
$N_1(\xi) = a_1 + b_1\xi$
$N_2(\xi) = a_2 + b_2\xi$

Properties:
At node 1 ($\xi = -1$): $N_1(-1) = 1$, $N_2(-1) = 0$
At node 2 ($\xi = 1$): $N_1(1) = 0$, $N_2(1) = 1$

For $N_1$:
$a_1 + b_1(-1) = 1 \implies a_1 - b_1 = 1$
$a_1 + b_1(1) = 0 \implies a_1 + b_1 = 0$
Adding the two equations: $2a_1 = 1 \implies a_1 = 1/2$.
Substituting $a_1$ into the second equation: $1/2 + b_1 = 0 \implies b_1 = -1/2$.
So, $N_1(\xi) = \frac{1}{2} - \frac{1}{2}\xi = \frac{1 - \xi}{2}$.

For $N_2$:
$a_2 + b_2(-1) = 0 \implies a_2 - b_2 = 0$
$a_2 + b_2(1) = 1 \implies a_2 + b_2 = 1$
Adding the two equations: $2a_2 = 1 \implies a_2 = 1/2$.
Substituting $a_2$ into the first equation: $1/2 - b_2 = 0 \implies b_2 = 1/2$.
So, $N_2(\xi) = \frac{1}{2} + \frac{1}{2}\xi = \frac{1 + \xi}{2}$.

**Question 3:**
Consider a linear triangular element with nodes 1, 2, and 3. Its shape functions in terms of area coordinates are $N_1 = L_1$, $N_2 = L_2$, and $N_3 = L_3$. What are the shape functions for a quadratic triangular element with 6 nodes, where nodes 4, 5, and 6 are at the mid-sides opposite to nodes 1, 2, and 3 respectively? (CO3)

**Answer:**
For a quadratic triangular element, the shape functions are of degree 2. The general form for the shape functions in area coordinates is:
For vertex nodes ($i$): $N_i = L_i(2L_i - 1)$
For mid-side nodes ($ij$ between nodes $i$ and $j$): $N_{ij} = 4L_iL_j$

Applying this to the 6-node triangle:
*   **Node 1 (Vertex):** $N_1 = L_1(2L_1 - 1)$
*   **Node 2 (Vertex):** $N_2 = L_2(2L_2 - 1)$
*   **Node 3 (Vertex):** $N_3 = L_3(2L_3 - 1)$
*   **Node 4 (Mid-side between 1 and 2):** $N_4 = 4L_1L_2$
*   **Node 5 (Mid-side between 2 and 3):** $N_5 = 4L_2L_3$
*   **Node 6 (Mid-side between 3 and 1):** $N_6 = 4L_3L_1$

This formulation arises from ensuring that at each node, the shape function is 1 and all others are 0, and that the interpolation is quadratic. The structure of these terms (combinations of $L_i$) is guided by the polynomial degrees suggested by extensions of the Pascal triangle concept to multiple variables.

---
This concludes the notes on the Pascal triangle in the context of FEM shape functions. Remember that while the triangle is a conceptual aid, the actual derivation often involves Lagrange interpolation or similar systematic methods, which produce polynomials whose structure is consistent with the Pascal triangle's patterns.