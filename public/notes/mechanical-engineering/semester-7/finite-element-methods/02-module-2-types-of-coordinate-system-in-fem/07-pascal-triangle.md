---
title: "Pascal triangle"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464298"
status: "completed"
scrapedAt: "2026-05-20T18:12:58.597Z"
---
# Finite Element Methods - Module 2: Types of Coordinate Systems in FEM

## Topic: Pascal Triangle

This topic explores the Pascal triangle and its fundamental role in constructing shape functions for finite elements, particularly for triangular elements. Understanding this concept is crucial for achieving CO2 and CO3 of this course.

### 1. Learning Outcomes Addressed

*   **LO1:** Understand the role of coordinate systems in defining element behavior.
*   **LO2:** Apply coordinate transformations and formulate shape functions of various elements.
*   **LO3:** Formulate shape functions and element strain-displacement matrices of various elements.

### 2. Key Concepts and Definitions

*   **Shape Functions ($N_i$):** These are interpolation functions that define the variation of the field variable (e.g., displacement, temperature) within an element in terms of the nodal values. They are fundamental to the FEM formulation.
*   **Coordinate Systems in FEM:**
    *   **Global Coordinate System:** The coordinate system for the entire problem domain.
    *   **Local Coordinate System:** A coordinate system defined for an individual element, often simplifying the formulation of shape functions and integrations.
    *   **Natural Coordinate System:** A normalized coordinate system that is independent of element geometry and size. For triangular elements, these are often the barycentric coordinates.
*   **Pascal Triangle:** A triangular array of binomial coefficients. It provides a systematic way to generate polynomials of a certain degree. The $n$-th row of Pascal's triangle contains the coefficients of the binomial expansion $(x+y)^n$.
*   **Completeness of Shape Functions:** For an element to be convergent, its shape functions must be able to represent at least rigid body motions and uniform strain states.
*   **Conformity of Shape Functions:** Ensures that the assembled global solution satisfies the continuity requirements across element boundaries.

### 3. The Pascal Triangle and Polynomials

The Pascal triangle is directly related to the construction of polynomial shape functions. Consider the expansion of $(x+y)^n$:

$(x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k$

The binomial coefficients $\binom{n}{k}$ form the rows of Pascal's triangle.

**Example:**
*   Row 0: $\binom{0}{0} = 1 \implies (x+y)^0 = 1$ (Constant term)
*   Row 1: $\binom{1}{0}=1, \binom{1}{1}=1 \implies (x+y)^1 = 1x + 1y$ (Linear terms)
*   Row 2: $\binom{2}{0}=1, \binom{2}{1}=2, \binom{2}{2}=1 \implies (x+y)^2 = 1x^2 + 2xy + 1y^2$ (Quadratic terms)

**Connection to FEM:**
The numbers in the Pascal triangle correspond to the "powers" of the shape functions that can be generated for a given number of nodes and polynomial degree. For instance, to construct linear shape functions for a 3-node triangle, we need terms of degree 1 (e.g., $1, x, y$). The Pascal triangle helps us systematically include all such terms.

### 4. Pascal Triangle in the Context of Triangular Elements

Triangular elements are commonly used in 2D FEM. The shape functions for these elements are typically polynomials. The Pascal triangle helps ensure that these polynomials are complete and can represent essential deformation modes.

#### 4.1. Linear Triangular Elements (3-Node Triangle)

For a 3-node linear triangular element in a 2D domain (with coordinates $x, y$), the displacement field (e.g., $u(x,y)$) is often approximated by a linear polynomial:

$u(x,y) = c_1 + c_2 x + c_3 y$

This polynomial has three coefficients ($c_1, c_2, c_3$). Since we have three nodes, we can determine these coefficients uniquely. The terms $1, x, y$ correspond to the first few terms generated using the concept of Pascal's triangle (degree 0 and degree 1 terms).

**Shape Functions ($N_i$) for a 3-Node Linear Triangle:**
The shape functions are typically expressed in terms of barycentric coordinates ($\lambda_1, \lambda_2, \lambda_3$). For a linear triangle, these are:

$N_1(\lambda_1, \lambda_2, \lambda_3) = \lambda_1$
$N_2(\lambda_1, \lambda_2, \lambda_3) = \lambda_2$
$N_3(\lambda_1, \lambda_2, \lambda_3) = \lambda_3$

where $\lambda_1 + \lambda_2 + \lambda_3 = 1$.
The displacement at any point within the element is then:
$u(x,y) = N_1 u_1 + N_2 u_2 + N_3 u_3$

*Refer to Reddy, Chapter 5 or Cook, Chapter 6 for detailed derivation of shape functions for linear triangles using barycentric coordinates.*

#### 4.2. Quadratic Triangular Elements (6-Node Triangle)

For a 6-node quadratic triangular element, we need to approximate the displacement field with a quadratic polynomial to ensure completeness and compatibility. A complete quadratic polynomial in two variables ($x, y$) contains terms of degree 0, 1, and 2.

The terms are: $1, x, y, x^2, xy, y^2$.
These are 6 terms in total, which perfectly match the 6 nodes of a quadratic triangular element. The Pascal triangle illustrates how these terms are systematically generated.

*   Degree 0: $1$
*   Degree 1: $x, y$
*   Degree 2: $x^2, xy, y^2$

The shape functions for a 6-node quadratic triangle are more complex and involve quadratic terms. They are derived using the same principle of ensuring that the polynomial can represent rigid body motions and uniform strain.

*Refer to Bhavikatti, Chapter 7 or Fish & Belytschko, Chapter 4 for detailed formulations of quadratic triangular element shape functions.*

### 5. Importance of Pascal Triangle in FEM

*   **Systematic Polynomial Generation:** It provides a structured method for identifying all necessary polynomial terms for shape functions of a given degree.
*   **Completeness of Polynomials:** Ensures that the shape functions can represent rigid body displacements and constant strain states, which is essential for element convergence.
*   **Construction of High-Order Elements:** Facilitates the design of higher-order elements by extending the polynomial basis.

### 6. Connection to Course Outcomes

*   **CO2: To apply the coordinate transformation and formulation of shape functions of various element.**
    *   The Pascal triangle is a foundational tool for understanding how shape functions are constructed, particularly for triangular elements, and indirectly relates to how these are formulated using different coordinate systems (e.g., natural coordinates).
*   **CO3: Formulate shape functions and element strain displacement matrix of various element.**
    *   By providing the basis for polynomial shape functions, the Pascal triangle is instrumental in the process of formulating these functions for triangular elements. Once shape functions are formulated, the strain-displacement matrix ($[B]$) can be derived from them.

### 7. Examples

**Example 1: Identifying terms for a quadratic polynomial in 2 variables.**
Consider a polynomial of degree 2 in variables $x$ and $y$. We look at the terms up to degree 2.
Pascal's triangle helps us organize this. We consider terms of the form $x^a y^b$ such that $a+b \le 2$.
*   Degree 0: $a+b = 0 \implies x^0 y^0 = 1$ (1 term)
*   Degree 1: $a+b = 1 \implies x^1 y^0 = x$, $x^0 y^1 = y$ (2 terms)
*   Degree 2: $a+b = 2 \implies x^2 y^0 = x^2$, $x^1 y^1 = xy$, $x^0 y^2 = y^2$ (3 terms)
Total terms = 1 + 2 + 3 = 6. These are the 6 terms required for a complete quadratic polynomial in 2 variables.

**Example 2: Relating Pascal's triangle to Shape Function Degrees**
For an $n$-node element, if we are using a polynomial of degree $p$, the number of shape functions is $n$. The basis for these shape functions will be derived from polynomials of degree up to $p$. The Pascal triangle helps us systematically identify all possible combinations of variables raised to powers up to $p$.

### 8. Practice Questions and Answers

**Question 1:**
What is the significance of the Pascal triangle in the context of finite element shape function development?
**Answer:** The Pascal triangle systematically provides the binomial coefficients that are used to construct polynomial approximations. It helps ensure that the shape functions are complete, meaning they can represent rigid body motions and uniform strain states, which is crucial for element convergence.

**Question 2:**
How many terms are there in a complete polynomial of degree 2 in two variables ($x, y$)? What are they?
**Answer:** There are 6 terms: $1, x, y, x^2, xy, y^2$. These terms correspond to the terms up to degree 2 in the binomial expansion $(x+y)^2$, as indicated by the Pascal triangle.

**Question 3:**
If you were to develop shape functions for a 10-node tetrahedral element in 3D using complete polynomials, what would be the maximum degree of the polynomial required?
**Answer:** A 10-node tetrahedral element typically uses shape functions based on complete cubic polynomials (degree 3) in 3 variables ($x, y, z$). The number of terms in a complete polynomial of degree $p$ in $m$ variables is given by $\binom{p+m}{m}$. For $p=3, m=3$, this is $\binom{3+3}{3} = \binom{6}{3} = \frac{6 \times 5 \times 4}{3 \times 2 \times 1} = 20$. However, for a 10-node tetrahedron, the shape functions are often based on a different hierarchy or incomplete polynomials derived from a specific construction method. For a general complete polynomial basis for tetrahedrons, a 10-node element usually implies a cubic approximation. The Pascal triangle concept extends to higher dimensions and variable counts, although the visualization becomes more complex.

### 9. Important Points to Remember

*   The Pascal triangle is a visual aid for understanding polynomial completeness.
*   For triangular elements, shape functions are often expressed in natural (barycentric) coordinates.
*   Linear triangular elements use linear shape functions ($N_i$ linear in $\lambda_j$).
*   Quadratic triangular elements use quadratic shape functions.
*   Completeness is essential for element convergence.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 10. References and Further Reading

*   **Reddy, J. N. (2009). *An Introduction to the Finite Element Method*. McGraw-Hill Education.** (Chapter 5 often covers triangular elements and shape function formulation).
*   **Cook, R. D. (2008). *Concepts and Applications of Finite Element Method*. Wiley.** (Chapter 6 commonly deals with basic FEM elements, including triangles).
*   **Bhavikatti, S. S. (2008). *Finite Element Analysis*. New Age Publisher.** (Chapter 7 is likely to discuss different element types and their shape functions).
*   **Fish, J., & Belytschko, T. (2007). *A First Course in Finite Elements*. John Wiley & Sons, Ltd.** (Chapter 4 might cover the derivation of shape functions for various element types).
*   **Segerlind, L. J. (2010). *Applied Finite Element Analysis*. John Wiley and Sons.**
*   **Ramamurthi, G. (2008). *Applied Finite Element Analysis*. I K International Publishing House Pvt. Ltd.**
*   **Hutton, D. V. (2009). *Fundamentals of Finite Element Methods*. McGraw-Hill Education.**

This section on Pascal triangles forms the basis for constructing shape functions for triangular elements, directly contributing to CO2 and CO3 by illustrating the systematic generation of polynomial bases.