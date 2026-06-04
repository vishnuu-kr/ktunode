---
title: "curve drawing algorithms"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 2: Transformation of points and lines"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634fd"
status: "completed"
scrapedAt: "2026-05-20T17:58:50.516Z"
---
# Computer Aided Design and Analysis - Module 2: Transformation of Points and Lines

## Topic: Curve Drawing Algorithms

This module focuses on the fundamental concepts of transforming geometric entities in CAD systems. Specifically, we will delve into **curve drawing algorithms**, which are essential for representing and rendering smooth, continuous shapes on a digital display. These algorithms are the building blocks for creating sophisticated designs in Computer-Aided Design (CAD).

---

### Learning Outcomes Covered:

*   **Understanding the importance of curve drawing algorithms in CAD:** How they enable the creation of smooth and aesthetically pleasing shapes, crucial for product design and visualization.
*   **Familiarity with different types of curves used in CAD:** Polynomial, spline, and rational curves, and their respective properties and applications.
*   **Ability to apply parametric representation of curves:** Understanding how curves are defined mathematically using parameters.
*   **Knowledge of key curve drawing algorithms:** This includes understanding the underlying mathematical principles and computational steps involved in algorithms like Bezier curves and B-spline curves.
*   **Appreciation for the trade-offs between different curve drawing algorithms:** Factors like computational complexity, flexibility, and control over the curve's shape.

---

### Course Outcomes Alignment:

*   **CO2: Apply 2D transformation techniques, including rotation, reflection, scaling, and line and curve drawing algorithms in CAD software.**
    *   This topic directly addresses the application of curve drawing algorithms, which are a fundamental part of 2D graphics in CAD. (Knowledge Level: K3)
*   **CO3: Apply 3D graphics and solid modeling techniques, such as Bezier and B-spline curves, and their application in creating complex geometric forms.**
    *   While this module is in the context of 2D transformations, the underlying principles of Bezier and B-spline curves are directly extended to 3D modeling, making this topic foundational for CO3. (Knowledge Level: K3)

---

### 1. Introduction to Curves in CAD

In CAD, curves are used to represent a wide variety of shapes, from simple arcs and circles to complex freeform surfaces. Unlike simple line segments, curves offer:

*   **Smoothness:** Continuous tangents, leading to visually appealing and realistic representations.
*   **Flexibility:** Ability to define intricate shapes that cannot be easily approximated by straight lines.
*   **Mathematical Representation:** Precise definition through equations, allowing for accurate manipulation and analysis.

**Key Concept:** **Parametric Representation of Curves**

Most curves in CAD are defined parametrically. A curve is represented by a set of equations that express its coordinates (x, y, and possibly z) as functions of a single parameter, often denoted by 't'.

*   **Equation Form:**
    *   $x = x(t)$
    *   $y = y(t)$
    *   $z = z(t)$ (for 3D curves)

*   **Parameter Range:** The parameter 't' typically varies over a defined range, usually from 0 to 1 or 0 to infinity, to trace the entire curve.

**Textbook Reference:**
*   **Groover & Zimmers (2014):** Discusses the need for smooth curves and introduces the concept of parametric representation in the context of geometric modeling.
*   **Zeid & Sivasubramanian (2009):** Provides a detailed mathematical foundation for curve representation, including parametric equations.

---

### 2. Types of Curves in CAD

CAD systems utilize various types of curves, each with its own characteristics and applications.

#### 2.1. Explicit Curves

*   **Definition:** Curves defined by an equation of the form $y = f(x)$ or $x = f(y)$.
*   **Limitations:** Can only represent functions where y is uniquely determined by x (or vice-versa). This makes them unsuitable for many complex shapes like circles or curves with vertical tangents.
*   **Examples:** Parabolas, straight lines (as a special case).

#### 2.2. Implicit Curves

*   **Definition:** Curves defined by an equation of the form $F(x, y) = 0$.
*   **Advantages:** Can represent a wider range of shapes than explicit curves, including those that are not functions.
*   **Examples:** Circles ($x^2 + y^2 - r^2 = 0$), ellipses.
*   **Challenge for Drawing:** Direct plotting can be difficult; often requires solving for y or using an iterative approach.

#### 2.3. Parametric Curves

*   **Definition:** As discussed earlier, defined by $x=x(t)$, $y=y(t)$.
*   **Advantages:** Highly versatile, can represent a vast array of shapes, including open and closed curves, and curves with self-intersections. They are the most commonly used in modern CAD.
*   **Examples:** Lines, circles, Bezier curves, B-spline curves.

#### 2.4. Polynomial Curves

*   **Definition:** Parametric curves where the coordinate functions $x(t)$ and $y(t)$ are polynomials in the parameter 't'.
*   **Properties:**
    *   **Continuity:** Defined by the degree of the polynomial. Higher degree polynomials can represent more complex shapes.
    *   **Control:** Control points are used to influence the shape of the curve.
*   **Types:**
    *   **Line Segments:** First-degree polynomials.
    *   **Quadratic Curves:** Second-degree polynomials.
    *   **Cubic Curves:** Third-degree polynomials. (Very common in CAD for their balance of control and complexity).

---

### 3. Common Curve Drawing Algorithms

These algorithms are used to approximate the continuous curve by a series of discrete line segments or to directly evaluate the curve at specific points for display.

#### 3.1. Parametric Line Drawing

*   **Concept:** While lines are simple, their parametric representation is fundamental.
    *   Given two points $P_0 = (x_0, y_0)$ and $P_1 = (x_1, y_1)$.
    *   Parametric equation:
        *   $x(t) = x_0 + t(x_1 - x_0)$
        *   $y(t) = y_0 + t(y_1 - y_0)$
    *   For $t \in [0, 1]$.
*   **Drawing:** Evaluate $x(t)$ and $y(t)$ for a series of values of 't' and connect the resulting points with short line segments. The density of points determines the smoothness of the approximation.

#### 3.2. Bezier Curves

*   **Origin:** Developed by Pierre Bezier for Renault car design.
*   **Concept:** A parametric curve defined by a set of control points. The curve interpolates the first and last control points and is influenced by the intermediate control points, which define the "shape" of the curve.
*   **Mathematical Formulation:**
    *   Given $n+1$ control points $P_0, P_1, ..., P_n$.
    *   The Bezier curve is defined as:
        $$B(t) = \sum_{i=0}^{n} P_i B_{i,n}(t), \quad t \in [0, 1]$$
    *   Where $B_{i,n}(t)$ are the **Bernstein Polynomials**:
        $$B_{i,n}(t) = \binom{n}{i} t^i (1-t)^{n-i}$$
        *   $\binom{n}{i} = \frac{n!}{i!(n-i)!}$ is the binomial coefficient.
*   **Properties:**
    *   **Interpolation:** $B(0) = P_0$ and $B(1) = P_n$.
    *   **Convex Hull Property:** The entire curve lies within the convex hull of its control points. This is crucial for predicting the curve's shape.
    *   **Symmetry:** If control points are reversed, the curve is also reversed.
    *   **Degree:** An $n+1$ control point Bezier curve is a polynomial of degree $n$.
        *   **Quadratic Bezier (3 control points $P_0, P_1, P_2$):**
            $B(t) = P_0(1-t)^2 + P_1(2t(1-t)) + P_2 t^2$
            *   $B(0) = P_0$
            *   $B(1) = P_2$
            *   $B'(0) = 2(P_1 - P_0)$ (Tangent at $P_0$ is along $P_0P_1$)
            *   $B'(1) = 2(P_2 - P_1)$ (Tangent at $P_2$ is along $P_1P_2$)
        *   **Cubic Bezier (4 control points $P_0, P_1, P_2, P_3$):**
            $B(t) = P_0(1-t)^3 + P_1(3t(1-t)^2) + P_2(3t^2(1-t)) + P_3 t^3$
            *   $B(0) = P_0$
            *   $B(1) = P_3$
            *   $B'(0) = 3(P_1 - P_0)$ (Tangent at $P_0$ is along $P_0P_1$)
            *   $B'(1) = 3(P_3 - P_2)$ (Tangent at $P_3$ is along $P_2P_3$)
*   **Drawing Algorithm (De Casteljau's Algorithm):**
    *   A recursive algorithm for evaluating Bezier curves that is numerically stable and efficient.
    *   To evaluate $B(t)$ for $n+1$ control points $P_0, ..., P_n$:
        1.  Generate a new set of $n$ points $P_{i}^{(1)}$ for $i=0, ..., n-1$ where $P_{i}^{(1)} = (1-t)P_i + tP_{i+1}$.
        2.  Repeat this process $n$ times. The final point $P_{0}^{(n)}$ is $B(t)$.
    *   **Example (Cubic Bezier):** To find $B(t)$ using $P_0, P_1, P_2, P_3$:
        *   $P_0^{(1)} = (1-t)P_0 + tP_1$
        *   $P_1^{(1)} = (1-t)P_1 + tP_2$
        *   $P_2^{(1)} = (1-t)P_2 + tP_3$
        *   $P_0^{(2)} = (1-t)P_0^{(1)} + tP_1^{(1)}$
        *   $P_1^{(2)} = (1-t)P_1^{(1)} + tP_2^{(1)}$
        *   $B(t) = P_0^{(3)} = (1-t)P_0^{(2)} + tP_1^{(2)}$
*   **Applications:** Character recognition, font design, animation paths, freeform surface modeling.

**Textbook Reference:**
*   **Groover & Zimmers (2014):** Introduces Bezier curves as a type of polynomial curve and discusses their control point properties.
*   **Zeid & Sivasubramanian (2009):** Provides the mathematical definition of Bezier curves, including Bernstein polynomials and De Casteljau's algorithm.
*   **Hearn, Baker & Carithers (2001):** Offers a detailed explanation of Bezier curve evaluation and rendering techniques.

---

#### 3.3. B-Spline Curves (Basis Spline Curves)

*   **Concept:** Generalization of Bezier curves, offering more local control and flexibility. They are defined by control points, a knot vector, and a degree.
*   **Mathematical Formulation:**
    *   Given $n+1$ control points $P_0, P_1, ..., P_n$.
    *   A knot vector $U = \{u_0, u_1, ..., u_{m+1}\}$. The knot vector specifies where the basis functions are defined and can affect the continuity of the curve.
    *   A degree $p$.
    *   The B-spline curve is defined as:
        $$C(t) = \sum_{i=0}^{n} P_i N_{i,p}(t), \quad t \in [u_p, u_{m-p}]$$
    *   Where $N_{i,p}(t)$ are the **B-spline basis functions**, defined recursively using the Cox-de Boor recursion formula:
        *   **Base Case (degree 0):**
            $$N_{i,0}(t) = \begin{cases} 1 & \text{if } u_i \le t < u_{i+1} \\ 0 & \text{otherwise} \end{cases}$$
        *   **Recursive Step (degree $p > 0$):**
            $$N_{i,p}(t) = \frac{t - u_i}{u_{i+p} - u_i} N_{i,p-1}(t) + \frac{u_{i+p+1} - t}{u_{i+p+1} - u_{i+1}} N_{i+1,p-1}(t)$$
            *   Note: If the denominator is zero, the term is zero.
*   **Properties:**
    *   **Local Control:** Modifying one control point only affects a localized portion of the curve, unlike Bezier curves where a control point affects the entire curve. This is a major advantage.
    *   **Convex Hull Property:** The curve is contained within the convex hull of its control points.
    *   **Continuity:** The continuity of the curve is determined by the degree $p$ and the multiplicity of knots in the knot vector.
        *   **Degree k:** A B-spline curve with $p$ degree has $C^{p-k}$ continuity across a knot of multiplicity $k$.
        *   **Uniform knots:** Knots are equally spaced.
        *   **Non-uniform knots:** Knots are not equally spaced, allowing for more precise control over shape and continuity.
    *   **Interpolation:** B-splines generally do not interpolate their control points (except possibly the first and last in certain knot configurations).
*   **Types of B-Splines:**
    *   **Uniform B-Splines:** Knot vector with equally spaced values. Offers simpler implementation but less control.
    *   **Non-Uniform B-Splines (NUBS):** Knot vector with varying spacing. Provides greater flexibility and control.
    *   **Open Uniform B-Splines:** A common type where the knot vector has multiple entries at the start and end ($u_0 = u_1 = ... = u_p$ and $u_{m+1} = u_m = ... = u_{m-p+1}$). This ensures $C(0) = P_0$ and $C(1) = P_n$ for specific knot vector constructions (e.g., $p+1$ knots at the beginning and end).
*   **Drawing Algorithm:** Similar to Bezier curves, B-splines are drawn by evaluating the curve at discrete parameter values using the Cox-de Boor recursion and connecting the points.

**Textbook Reference:**
*   **Groover & Zimmers (2014):** Introduces B-splines as a more advanced form of parametric curves with local control.
*   **Zeid & Sivasubramanian (2009):** Provides a comprehensive mathematical treatment of B-splines, including the Cox-de Boor recursion formula and knot vector properties.
*   **Hearn, Baker & Carithers (2001):** Explains the advantages of B-splines for modeling and their drawing process.

---

#### 3.4. Rational B-Splines (NURBS - Non-Uniform Rational B-Splines)

*   **Concept:** An extension of B-splines that incorporates weighted control points, allowing for the precise representation of conic sections (circles, ellipses, hyperbolas) and offering even greater flexibility in shape control.
*   **Mathematical Formulation:**
    *   Given $n+1$ control points $P_0, P_1, ..., P_n$ and corresponding weights $w_0, w_1, ..., w_n$.
    *   The NURBS curve is defined as:
        $$C(t) = \frac{\sum_{i=0}^{n} P_i w_i N_{i,p}(t)}{\sum_{i=0}^{n} w_i N_{i,p}(t)}, \quad t \in [u_p, u_{m-p}]$$
    *   $N_{i,p}(t)$ are the B-spline basis functions.
*   **Properties:**
    *   **Conic Sections:** Can precisely represent circles, ellipses, etc., which are difficult to represent with non-rational curves.
    *   **Increased Flexibility:** The weights offer an additional degree of freedom to manipulate the curve's shape.
    *   **Generalization:** Bezier curves can be represented as a special case of NURBS (with uniform knots and equal weights).
*   **Applications:** Widely used in advanced CAD/CAM systems for modeling complex surfaces and shapes, including automotive design, aerospace, and product engineering.

**Textbook Reference:**
*   **Zeid & Sivasubramanian (2009):** Dedicates significant coverage to NURBS, explaining their mathematical foundation and advantages.
*   **Groover & Zimmers (2014):** Mentions NURBS as the standard for advanced geometric modeling.

---

### 4. Comparison of Curve Drawing Algorithms

| Feature            | Bezier Curves                                     | B-Spline Curves                                              |
| :----------------- | :------------------------------------------------ | :----------------------------------------------------------- |
| **Control Points** | $n+1$ control points define a degree $n$ curve.   | $n+1$ control points, degree $p$, knot vector $U$.         |
| **Interpolation**  | Interpolates start and end control points.        | Generally does not interpolate control points (except specific cases). |
| **Continuity**     | Determined by the degree of the polynomial.       | More flexible, controlled by degree and knot multiplicity.   |
| **Local Control**  | No local control; all control points affect the entire curve. | Yes, local control; modifying a point affects only a segment. |
| **Shape Control**  | Good for designing freeform shapes.               | Superior for designing complex shapes and achieving specific continuity. |
| **Conic Sections** | Cannot precisely represent conic sections.        | Cannot precisely represent conic sections (unless rational). |
| **Complexity**     | Simpler mathematical formulation.                 | More complex due to knot vectors and basis functions.        |
| **Common Use**     | Font design, animation paths.                     | Surface modeling, complex freeform shapes.                   |

---

### 5. Key Points to Remember

*   **Parametric representation is crucial** for defining and drawing curves in CAD.
*   **Bezier curves** are defined by control points and Bernstein polynomials, offering interpolation and convex hull properties.
*   **De Casteljau's algorithm** is an efficient way to evaluate Bezier curves.
*   **B-spline curves** offer local control, greater flexibility in continuity, and are defined by control points, degree, and knot vectors.
*   **NURBS (Rational B-Splines)** extend B-splines with weights, enabling precise representation of conic sections and greater shape control.
*   The choice of curve algorithm depends on the **application requirements**, such as the need for local control, interpolation, or the representation of specific geometric forms.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary advantage of using parametric representation for curves in CAD compared to explicit representation?

**Answer:** Parametric representation allows for the definition of a wider variety of complex shapes, including those that are not functions (e.g., circles, curves with vertical tangents), and provides a more structured approach to curve generation and manipulation.

**Question 2:**
Given three control points $P_0 = (1, 2)$, $P_1 = (3, 5)$, and $P_2 = (6, 1)$ for a quadratic Bezier curve, find the point on the curve at parameter $t=0.5$. Use the formula $B(t) = P_0(1-t)^2 + P_1(2t(1-t)) + P_2 t^2$.

**Answer:**
For $t=0.5$:
$B(0.5) = P_0(1-0.5)^2 + P_1(2 \times 0.5 \times (1-0.5)) + P_2 (0.5)^2$
$B(0.5) = P_0(0.5)^2 + P_1(2 \times 0.5 \times 0.5) + P_2 (0.5)^2$
$B(0.5) = P_0(0.25) + P_1(0.5) + P_2(0.25)$

$B(0.5) = (1, 2)(0.25) + (3, 5)(0.5) + (6, 1)(0.25)$
$B(0.5) = (0.25, 0.5) + (1.5, 2.5) + (1.5, 0.25)$
$B(0.5) = (0.25 + 1.5 + 1.5, 0.5 + 2.5 + 0.25)$
$B(0.5) = (3.25, 3.25)$

**Question 3:**
Explain the concept of "local control" in the context of B-spline curves and why it is a significant advantage over Bezier curves.

**Answer:** Local control means that changing the position of a single control point on a B-spline curve only affects a limited portion of the curve. This is a significant advantage over Bezier curves, where modifying any control point alters the shape of the entire curve. This allows for more precise and efficient editing of complex designs without disturbing unrelated parts of the geometry.

**Question 4 (Conceptual):**
If you needed to draw a perfect circle using parametric curve algorithms in CAD, which type of curve would be most suitable and why?

**Answer:** Rational B-Splines (NURBS) would be the most suitable. Non-rational curves like Bezier and standard B-splines can only approximate circles. NURBS, with their inclusion of weights, can represent conic sections like circles exactly.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. References

*   **Groover, M.P., & Zimmers, E.M. Jr. (2014).** *CAD/CAM Computer Aided Design and Manufacturing*. Prentice Hall of India.
*   **Zeid, I., & Sivasubramanian, R. (2009).** *CAD/CAM: Theory and Practice*. McGraw Hill Education.
*   **Hearn, D., Baker, M.P., & Carithers, W. (2001).** *Computer Graphics with open GL*. Pearson Education.
*   **Rogers, D.F., & Adams, J.A. (1990).** *Mathematical Elements in Computer Graphics*. McGraw-Hill.

---
**End of Module 2 - Curve Drawing Algorithms**