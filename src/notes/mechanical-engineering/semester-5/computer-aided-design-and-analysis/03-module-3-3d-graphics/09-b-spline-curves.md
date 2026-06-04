---
title: "B-spline curves"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 3: 3D graphics"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463507"
status: "completed"
scrapedAt: "2026-05-20T17:58:56.875Z"
---
# Computer Aided Design and Analysis - Module 3: 3D Graphics - B-Spline Curves

## Introduction to B-Spline Curves

B-spline curves are a powerful tool in computer-aided design (CAD) and computer-aided manufacturing (CAM) for creating smooth, flexible, and controllable curves. They generalize Bézier curves, offering greater flexibility in shaping and continuity.

**Learning Outcomes Addressed:**

*   **CO3:** Apply 3D graphics and solid modeling techniques, such as Bezier and B-spline curves, and their application in creating complex geometric forms. (Knowledge Level: K3)

---

### 1. What are B-Spline Curves?

*   **Definition:** B-spline (Basis Spline) curves are piecewise polynomial curves defined by a set of control points, a knot vector, and a degree. They are a generalization of Bézier curves.
*   **Key Characteristics:**
    *   **Local Control:** Moving a single control point only affects a local portion of the curve, unlike Bézier curves where moving one control point affects the entire curve. This makes them easier to edit.
    *   **Continuity:** B-splines can achieve higher orders of continuity ($C^2$ and beyond) between curve segments, leading to smoother surfaces.
    *   **Flexibility:** They offer more control over the shape of the curve than Bézier curves, especially for complex shapes.
    *   **Piecewise Polynomial:** B-splines are composed of multiple polynomial segments joined together, with the joining points controlled by the knot vector.

---

### 2. Components of a B-Spline Curve

**a) Control Points (P<sub>i</sub>):**

*   A set of $n+1$ control points, $P_0, P_1, \dots, P_n$, that define the overall shape of the curve.
*   The curve does not necessarily pass through all control points.
*   The curve is "pulled" towards its control points.

**b) Knot Vector (U):**

*   A sequence of non-decreasing parameter values, $U = \{u_0, u_1, \dots, u_{m}\}$, which dictates where the curve segments join and how they are blended.
*   The knot vector determines the influence of control points on the curve.
*   The number of knots, $m+1$, is typically $n+k+1$, where $n+1$ is the number of control points and $k$ is the degree of the B-spline polynomial.
*   **Degree of the Curve (k):** A B-spline curve is defined by polynomial segments of degree $k$. The degree determines the smoothness and local control of the curve. A B-spline curve of degree $k$ is also called a $(k+1)$-degree B-spline in some literature (e.g., number of basis functions used).
*   **Knot multiplicity:** The number of times a knot value appears in the knot vector.
    *   If a knot value appears $m$ times, it is said to have multiplicity $m$.
    *   The multiplicity of a knot value affects the continuity of the curve at that parameter value.
    *   For a $k$-th degree B-spline, the continuity at a knot $u_i$ is $C^{k - \text{multiplicity}(u_i)}$.
    *   If a knot appears $k+1$ times at the beginning ($u_0, \dots, u_k$) and $k+1$ times at the end ($u_{m-k}, \dots, u_m$), the curve is *interpolating* at the first and last control points.

**c) Basis Functions (N<sub>i,k</sub>(u)):**

*   These are the fundamental building blocks of B-spline curves. Each basis function is a piecewise polynomial.
*   For a given degree $k$ and knot vector $U$, there are $n+1$ basis functions, $N_{0,k}(u), N_{1,k}(u), \dots, N_{n,k}(u)$.
*   Each basis function $N_{i,k}(u)$ is non-zero over a specific range of the parameter $u$, defined by the knot vector.
*   **De Boor's Algorithm:** A recursive algorithm used to compute the value of a B-spline curve at a given parameter value $u$.

    The B-spline basis functions are defined recursively by the Cox-de Boor recursion formula:

    $N_{i,0}(u) = \begin{cases} 1 & \text{if } u_i \le u < u_{i+1} \\ 0 & \text{otherwise} \end{cases}$

    $N_{i,k}(u) = \frac{u - u_i}{u_{i+k} - u_i} N_{i,k-1}(u) + \frac{u_{i+k+1} - u}{u_{i+k+1} - u_{i+1}} N_{i+1,k-1}(u)$

    where $k > 0$.
    *Note: If the denominator is zero, the term is defined as zero.*

*   **B-Spline Curve Equation:** The B-spline curve $C(u)$ is defined as a linear combination of its basis functions and control points:

    $C(u) = \sum_{i=0}^{n} P_i N_{i,k}(u)$

    where $u$ is the parameter ranging over the knot vector, typically $u_k \le u < u_{n+1}$.

---

### 3. Types of B-Spline Curves

*   **Uniform B-Splines:**
    *   The knot vector has evenly spaced knot values.
    *   For a knot vector of length $m+1$, $u_{i+1} - u_i = \Delta u$ for all $i$.
    *   The basis functions are identical in shape and shifted along the parameter axis.
    *   Less flexible for local shape control.

*   **Non-uniform B-Splines (NUBS):**
    *   Knot values are not necessarily evenly spaced.
    *   Allows for greater control over curve shape and continuity.
    *   Knot multiplicity can be used to create sharp corners or join segments with different continuity.
    *   More complex to implement but offer superior flexibility.

*   **Open Uniform B-Splines:**
    *   A special case of non-uniform B-splines.
    *   The knot vector is typically of the form: $0, \dots, 0, \underbrace{u_k, u_{k+1}, \dots, u_{m-k-1}}_{\text{equally spaced}}, m, \dots, m$.
    *   The first knot has multiplicity $k+1$ and the last knot has multiplicity $k+1$.
    *   This ensures that the curve interpolates the first and last control points ($C(u_{start}) = P_0$ and $C(u_{end}) = P_n$).
    *   Often used for designing curves that start and end at specific points.

---

### 4. Properties and Advantages of B-Splines

*   **Local Control:** Moving a control point only affects the curve in the vicinity of that point.
    *   **Example:** If $P_i$ is moved, only the curve segments where $N_{i,k}(u)$ is non-zero are affected. This range of $u$ is determined by the knot vector. A knot vector with more repeated knots in a region will make the basis functions narrower, leading to more localized influence.

*   **Degree Control:** The degree $k$ determines the smoothness. Higher degree means smoother curves and more complex polynomials.
    *   Degree 1: Polygonal chains (linear segments).
    *   Degree 2: Quadratic B-splines.
    *   Degree 3: Cubic B-splines (most common in CAD, offering $C^2$ continuity with a simple knot vector).

*   **Continuity Control:** By manipulating the knot vector (specifically knot multiplicities), you can control the continuity between curve segments.
    *   A knot with multiplicity $m$ leads to $C^{k-m}$ continuity.
    *   For cubic B-splines ($k=3$):
        *   Multiplicity 1: $C^2$ continuity (smooth join).
        *   Multiplicity 2: $C^1$ continuity (tangent continuity, but curvature may be discontinuous).
        *   Multiplicity 3: $C^0$ continuity (position continuity, but tangent may be discontinuous - a "corner").
        *   Multiplicity 4: Discontinuous (a break in the curve).

*   **Convex Hull Property:** The curve lies entirely within the convex hull of its control points. This is useful for bounding and collision detection.

*   **Affine Invariance:** Transforming the control points (e.g., translation, rotation, scaling) results in the same transformation applied to the curve.

---

### 5. Comparison with Bézier Curves

| Feature           | Bézier Curves                                | B-Spline Curves                                      |
| :---------------- | :------------------------------------------- | :--------------------------------------------------- |
| Control Points    | Directly control the shape; curve interpolates endpoints. | Control the shape; curve may not interpolate endpoints. |
| Local Control     | No (moving one point affects the entire curve). | Yes (moving one point affects a local segment).      |
| Continuity        | Determined by the degree.                    | Controlled by degree and knot vector multiplicities. |
| Flexibility       | Limited, especially for complex shapes.      | High, allowing for complex shapes and local adjustments. |
| Joining Segments  | Can be difficult to join smoothly with continuity control. | Easily joined with controlled continuity using knot vectors. |
| Generalization    | B-splines are a generalization of Bézier curves. | Bézier curves are B-splines with specific knot vectors (e.g., $\underbrace{0,\dots,0}_{k+1}, \underbrace{1,\dots,1}_{k+1}$). |

---

### 6. Applications in CAD

*   **Designing Free-Form Surfaces:** B-splines are fundamental for creating complex geometric shapes in automotive design, aerospace, industrial design, and animation.
*   **Toolpath Generation:** Used in CAM for generating smooth and precise tool paths for CNC machines.
*   **Character Animation:** Used to define the motion paths of animated characters.
*   **Data Interpolation:** Fitting smooth curves to sampled data points.

---

### 7. Examples and Illustrations

**Example: Cubic B-Spline (k=3)**

Let's consider a cubic B-spline with 4 control points $P_0, P_1, P_2, P_3$ and an open uniform knot vector $U = \{0, 0, 0, 0, 1, 1, 1, 1\}$. Here $n=3$ and $m=7$.

*   The curve is defined by $C(u) = P_0 N_{0,3}(u) + P_1 N_{1,3}(u) + P_2 N_{2,3}(u) + P_3 N_{3,3}(u)$ for $u \in [0, 1]$.
*   The basis functions $N_{i,3}(u)$ are cubic polynomials.
*   With $k=3$ and knot multiplicities of 4 at the start and end, this configuration ensures $C(0) = P_0$ and $C(1) = P_3$.

**Calculating Basis Functions (Conceptual):**

Using the Cox-de Boor recursion for $k=3$:
*   $N_{i,0}(u)$ is 1 over specific knot intervals.
*   $N_{i,1}(u)$ are linear segments.
*   $N_{i,2}(u)$ are quadratic segments.
*   $N_{i,3}(u)$ are cubic segments, defined over intervals of 4 knots.

For the given knot vector $U = \{0, 0, 0, 0, 1, 1, 1, 1\}$:
*   $N_{0,3}(u)$ is non-zero for $u \in [0, 1)$.
*   $N_{1,3}(u)$ is non-zero for $u \in [0, 1)$.
*   $N_{2,3}(u)$ is non-zero for $u \in [0, 1)$.
*   $N_{3,3}(u)$ is non-zero for $u \in [0, 1]$.

**Important Note:** Calculating these basis functions manually for every point is tedious. De Boor's algorithm is used computationally.

---

### 8. Practice Questions

**Question 1:**
What are the three primary components that define a B-spline curve?
**(Answer:** Control points, knot vector, and degree.)

**Question 2:**
Explain the concept of "local control" in B-spline curves and contrast it with Bézier curves.
**(Answer:** Local control means that moving a single control point of a B-spline curve only affects a limited portion of the curve, determined by the range of the corresponding basis function. In contrast, moving a control point in a Bézier curve affects the entire curve.)

**Question 3:**
If you are using a cubic B-spline ($k=3$) and want to create a sharp corner at a specific point on the curve, what modification would you make to the knot vector?
**(Answer:** Increase the multiplicity of the knot value corresponding to that point to 3 or 4. A multiplicity of 3 would give $C^0$ continuity (position continuity), and a multiplicity of 4 would break the curve segment.)

**Question 4:**
What is the relationship between the number of control points ($n+1$) and the number of basis functions for a B-spline curve of degree $k$?
**(Answer:** There are $n+1$ basis functions, $N_{0,k}(u)$ to $N_{n,k}(u)$, corresponding to $n+1$ control points.)

**Question 5:**
A Bézier curve can be considered a special case of a B-spline. What specific knot vector and degree would create a Bézier curve of degree $d$ using the B-spline formulation?
**(Answer:** A Bézier curve of degree $d$ corresponds to a B-spline of degree $d$ with a knot vector of the form $\underbrace{0, \dots, 0}_{d+1}, \underbrace{1, \dots, 1}_{d+1}$.)

---

### 9. Key Points to Remember

*   B-splines offer more flexibility and local control than Bézier curves.
*   The knot vector is crucial for defining the shape, continuity, and parameterization of B-spline curves.
*   Knot multiplicity directly influences the continuity at knot points.
*   Cubic B-splines ($k=3$) are very common in CAD due to their balance of smoothness ($C^2$) and control.
*   De Boor's algorithm is the standard method for evaluating B-spline curves.
*   Open uniform B-splines ensure interpolation at the first and last control points.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 10. References and Further Reading

*   **CAD/CAM Computer Aided Design and Manufacturing by M.P. Groover, E.M. Zimmers, Jr.** (Prentice Hall of India, 2014) - Provides a good overview of curves and surfaces used in CAD/CAM.
*   **CAD/CAM : Theory and Practice by Ibrahim Zeid, R Sivasubramanian** (McGraw Hill Education, 2nd, 2009) - Offers detailed mathematical treatment of B-spline curves.
*   **Mathematical Elements in Computer Graphics, by D. F. Rogers and J. A. Adams** (McGraw-Hill, 1990) - A foundational text for understanding the mathematical underpinnings of graphics curves, including B-splines.
*   **Computer Graphics with open GL, by Donald Hearn, M. Pauline Baker and Warren Carithers** (Pearson Education, 2001) - Explains the practical implementation and rendering of B-spline curves in graphics systems.

---
This concludes the study notes for B-spline curves. Remember to practice drawing or visualizing how control points and knot vectors affect the curve's shape and continuity.