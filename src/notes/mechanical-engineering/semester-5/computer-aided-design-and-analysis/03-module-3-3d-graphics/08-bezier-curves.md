---
title: "Bezier curves"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 3: 3D graphics"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463506"
status: "completed"
scrapedAt: "2026-05-20T17:58:56.223Z"
---
# Module 3: 3D Graphics - Bezier Curves

## 1. Introduction to Bezier Curves

Bezier curves are a fundamental concept in computer-aided design (CAD) and computer graphics for creating smooth, free-form curves. They are parametric curves defined by a set of control points.

**Key Concepts:**

*   **Parametric Representation:** Bezier curves are defined by a parameter, usually denoted by '$t$', which varies from 0 to 1. The position on the curve is calculated as a function of '$t$'.
*   **Control Points:** These points dictate the shape of the curve. The curve generally passes through the first and last control points and is influenced by the intermediate control points.
*   **Smoothness:** Bezier curves are inherently smooth and have desirable properties like tangent continuity.
*   **Convex Hull Property:** The entire Bezier curve lies within the convex hull of its control points. This is a crucial property for predicting the curve's behavior and for collision detection.

**Textbook Reference:**

*   **Groover & Zimmers:** Discusses Bezier curves as a method for representing free-form curves in CAD/CAM systems, emphasizing their use in defining shapes for manufacturing. (Chapter on Geometric Modeling).
*   **Zeid & Sivasubramanian:** Provides a detailed mathematical treatment of Bezier curves, including their derivation and properties, as a core component of curve representation in CAD. (Chapter on Geometric Modeling).
*   **Rogers & Adams:** Explains the mathematical foundation of Bezier curves, including Bernstein polynomials, and their application in graphics.

**Course Outcome Alignment:**

*   **CO3 (K3):** Applying 3D graphics and solid modeling techniques, such as Bezier curves, in creating complex geometric forms. This topic directly addresses the application of Bezier curves for geometric modeling.

---

## 2. Mathematical Formulation of Bezier Curves

The mathematical definition of a Bezier curve relies on Bernstein polynomials.

**2.1. General Form:**

A Bezier curve of degree '$n$' with control points $P_0, P_1, \ldots, P_n$ is defined by the equation:

$B(t) = \sum_{i=0}^{n} P_i B_{i,n}(t)$

where:

*   $P_i$ are the control points (vectors in 2D or 3D space).
*   $B_{i,n}(t)$ are the Bernstein basis polynomials of degree '$n$':

$B_{i,n}(t) = \binom{n}{i} (1-t)^{n-i} t^i$

and $\binom{n}{i} = \frac{n!}{i!(n-i)!}$ is the binomial coefficient.

The parameter '$t$' ranges from 0 to 1 ($0 \le t \le 1$).

**2.2. Key Properties of Bernstein Polynomials:**

*   Non-negative: $B_{i,n}(t) \ge 0$ for $0 \le t \le 1$.
*   Sum to 1: $\sum_{i=0}^{n} B_{i,n}(t) = 1$ for $0 \le t \le 1$. This ensures that the weighted average of control points stays within the "influence" of those points.
*   Boundary Conditions:
    *   $B_{0,n}(0) = 1$, $B_{i,n}(0) = 0$ for $i > 0$.
    *   $B_{n,n}(1) = 1$, $B_{i,n}(1) = 0$ for $i < n$.

These boundary conditions imply:

*   $B(0) = P_0$ (The curve starts at the first control point).
*   $B(1) = P_n$ (The curve ends at the last control point).

**2.3. Derivatives:**

The derivatives of Bezier curves are crucial for controlling tangent vectors and curvature, which is essential for smooth transitions between curve segments.

*   **First Derivative:**
    $\frac{dB(t)}{dt} = n \sum_{i=0}^{n-1} (P_{i+1} - P_i) B_{i,n-1}(t)$

    This shows that the first derivative is a Bezier curve of degree $n-1$ defined by the control points $(P_1-P_0), (P_2-P_1), \ldots, (P_n-P_{n-1})$. The tangent at the start point ($t=0$) is in the direction of $P_1 - P_0$. The tangent at the end point ($t=1$) is in the direction of $P_n - P_{n-1}$.

*   **Second Derivative:**
    $\frac{d^2B(t)}{dt^2} = n(n-1) \sum_{i=0}^{n-2} (P_{i+2} - 2P_{i+1} + P_i) B_{i,n-2}(t)$

    The second derivative relates to the curvature of the curve.

**Textbook Reference:**

*   **Zeid & Sivasubramanian:** Offers a comprehensive mathematical exposition of Bezier curves, detailing the derivation of Bernstein polynomials and the formulas for derivatives.
*   **Rogers & Adams:** Provides a thorough understanding of the underlying mathematics, including the properties and derivation of the Bernstein polynomials.

**Course Outcome Alignment:**

*   **CO3 (K3):** Understanding the mathematical basis of Bezier curves for geometric modeling.

---

## 3. Types of Bezier Curves by Degree

The degree of a Bezier curve is determined by the number of control points.

**3.1. Linear Bezier Curve (Degree 1):**

*   Number of Control Points: 2 ($P_0, P_1$)
*   Formula: $B(t) = P_0 (1-t) + P_1 t$
*   Shape: A straight line segment connecting $P_0$ and $P_1$.
*   **Example:** Connecting two points with a straight line.

**3.2. Quadratic Bezier Curve (Degree 2):**

*   Number of Control Points: 3 ($P_0, P_1, P_2$)
*   Formula: $B(t) = P_0 (1-t)^2 + 2 P_1 (1-t)t + P_2 t^2$
*   Shape: A parabolic curve that starts at $P_0$, ends at $P_2$, and is pulled towards $P_1$. The tangent at $P_0$ is towards $P_1$, and the tangent at $P_2$ is from $P_1$.
*   **Example:** Drawing a simple arc.

**3.3. Cubic Bezier Curve (Degree 3):**

*   Number of Control Points: 4 ($P_0, P_1, P_2, P_3$)
*   Formula: $B(t) = P_0 (1-t)^3 + 3 P_1 (1-t)^2 t + 3 P_2 (1-t) t^2 + P_3 t^3$
*   Shape: A more complex curve with two internal control points that influence the shape and tangents.
*   **Example:** Widely used in graphic design (e.g., Adobe Photoshop, Illustrator), typography, and automotive design for smooth curves. This is the most common type in many CAD applications due to its balance of flexibility and complexity.

**Important Point to Remember:**

*   The degree of the Bezier curve is always one less than the number of control points.
*   Increasing the number of control points increases the degree and complexity of the curve, allowing for more intricate shapes.

**Textbook Reference:**

*   **Groover & Zimmers:** Illustrates examples of Bezier curves of different degrees and their use in defining complex geometries for manufacturing.
*   **Hearn, Baker, & Carithers:** Demonstrates Bezier curves of various degrees with graphical examples, explaining how control points influence the curve's shape.

**Course Outcome Alignment:**

*   **CO3 (K3):** Applying Bezier curves for creating complex geometric forms, understanding how different degrees and control points contribute to shape.

---

## 4. Properties and Advantages of Bezier Curves

Bezier curves possess several desirable properties that make them invaluable in CAD and computer graphics.

**4.1. Key Properties:**

*   **Endpoint Interpolation:** The curve always passes through the first ($P_0$) and the last ($P_n$) control points.
*   **Convex Hull Property:** The entire Bezier curve lies within the convex hull of its control points. This means the curve is contained within the smallest convex polygon that encloses all control points. This property is beneficial for:
    *   **Predicting Curve Behavior:** Understanding the spatial extent of the curve.
    *   **Clipping:** Efficiently determining if a curve segment is within a viewing window.
    *   **Collision Detection:** Simplifying checks by considering the convex hull.
*   **Affine Invariance:** If a set of control points is transformed (translated, rotated, scaled), the Bezier curve generated by the transformed control points is the same as the transformed Bezier curve generated by the original control points.
*   **Geometric Continuity:** Bezier curves offer $C^\infty$ continuity between segments if constructed appropriately, meaning they are infinitely differentiable and very smooth. However, this is generally achieved by joining Bezier curve segments end-to-end with tangent continuity ($C^1$) or curvature continuity ($C^2$).
*   **Global Control:** Changing any control point affects the entire curve, not just a local portion. This can be an advantage for broad shape adjustments but a disadvantage for localized modifications.
*   **Variational Diminishing Property:** The Bezier curve is a "smoother" version of the polyline formed by its control points. It reduces the number of inflection points compared to the control polyline.

**4.2. Advantages in CAD:**

*   **Ease of Use:** The control point paradigm is intuitive for designers to manipulate and shape curves.
*   **Smoothness:** They naturally produce smooth and aesthetically pleasing curves, crucial for product design, industrial design, and animation.
*   **Predictable Behavior:** Properties like the convex hull property make them robust for computational geometry tasks.
*   **Mathematical Tractability:** Their definition allows for easy computation of tangents, normals, and curvature, which are vital for analysis and manufacturing processes.
*   **Foundation for More Complex Curves:** Bezier curves are building blocks for more advanced splines like B-splines.

**Textbook Reference:**

*   **Zeid & Sivasubramanian:** Details the mathematical properties and their implications in CAD.
*   **Groover & Zimmers:** Highlights the practical advantages of Bezier curves in manufacturing applications where smooth, predictable shapes are essential.
*   **Rogers & Adams:** Provides a deep dive into the mathematical underpinnings of these properties.

**Course Outcome Alignment:**

*   **CO3 (K3):** Understanding the application of Bezier curves and their properties in creating and manipulating geometric forms in 3D graphics.

---

## 5. Applications of Bezier Curves in CAD and Graphics

Bezier curves find widespread application in various fields due to their versatility and smoothness.

**5.1. Computer-Aided Design (CAD):**

*   **Shape Definition:** Creating and modifying free-form surfaces and curves for product design (e.g., car bodies, aircraft wings, consumer products).
*   **Toolpath Generation:** Defining smooth paths for CNC machining operations.
*   **Surface Modeling:** Bezier surfaces are formed by extending Bezier curves in two parametric directions.
*   **Parametric Modeling:** Bezier curves are often used as the basis for defining parametric curves and surfaces, allowing for easy modification of shape by adjusting control points.

**5.2. Computer Graphics:**

*   **Animation:** Defining smooth trajectories for moving objects or characters. Animators often use Bezier curves to control the motion of keyframes.
*   **Vector Graphics:** Used extensively in vector graphics editors (e.g., Adobe Illustrator, Inkscape) for drawing logos, icons, and illustrations.
*   **Typography:** Defining the shapes of fonts. Each character outline in a font file is often represented by Bezier curves.
*   **User Interface Design:** Creating smooth UI elements and animations.

**5.3. Other Fields:**

*   **Robotics:** Planning smooth and efficient robot arm trajectories.
*   **Image Processing:** Image manipulation and feature extraction.

**Examples:**

*   **Car Design:** The smooth, flowing lines of a car's body are typically defined using Bezier surfaces.
*   **Logo Design:** The curves in a company logo are often created using Bezier tools in vector graphics software.
*   **Font Design:** The letter 'S' in a typeface is a classic example of a shape elegantly represented by a cubic Bezier curve.

**Textbook Reference:**

*   **Groover & Zimmers:** Discusses manufacturing applications, including how Bezier curves are used to define shapes for tooling and machining.
*   **Ulrich & Eppinger:** Touches upon how CAD tools, which utilize Bezier curves, are fundamental in the product development process for concept visualization and detailed design.
*   **Hearn, Baker, & Carithers:** Provides numerous graphical examples and explanations of Bezier curves in animation, graphics, and user interface design.

**Course Outcome Alignment:**

*   **CO1 (K1, K2):** Understanding industrial applications of CAD, including how Bezier curves are a key component in shaping and design.
*   **CO3 (K3):** Applying Bezier curves in creating complex geometric forms, recognizing their role in real-world design and graphics applications.

---

## 6. Limitations and Alternatives

While powerful, Bezier curves have some limitations that lead to the development of other curve representations.

**6.1. Limitations:**

*   **Global Control:** Changing a single control point affects the entire curve. For localized changes, this can be cumbersome.
*   **Degree Increase for Complexity:** To achieve more complex shapes without introducing unwanted wiggles, one often needs to increase the degree of the Bezier curve, which can increase computational cost.
*   **Concatenation Issues:** Joining multiple Bezier curves requires careful management of continuity (e.g., $C^0$, $C^1$, $C^2$) between segments to avoid sharp corners or visible transitions.

**6.2. Alternatives and Extensions:**

*   **B-Splines (Basis Splines):** These curves offer local control, meaning changes to a control point only affect a limited portion of the curve. They also allow for specifying the degree independently of the number of control points, offering greater flexibility. B-splines are generalizations of Bezier curves.
*   **Non-Uniform Rational B-Splines (NURBS):** NURBS are even more powerful as they can represent conic sections (circles, ellipses, parabolas, hyperbolas) exactly, as well as free-form curves and surfaces. They offer local control and the ability to adjust the influence of control points using weights.
*   **Rational Bezier Curves:** These are Bezier curves where the basis functions are rational polynomials. They can represent conic sections exactly and provide more control over shape compared to standard Bezier curves.

**Textbook Reference:**

*   **Zeid & Sivasubramanian:** Introduces B-splines and NURBS as more advanced curve and surface representations that overcome some limitations of Bezier curves.
*   **Groover & Zimmers:** Briefly mentions B-splines as an alternative for more complex geometric modeling.

**Course Outcome Alignment:**

*   **CO3 (K3):** Understanding the application of Bezier curves and their place within the broader landscape of geometric modeling techniques, including their limitations and the need for more advanced methods like B-splines.

---

## 7. Practice Questions and Exercises

**Question 1:**
A Bezier curve is defined by $n+1$ control points. What is the degree of this Bezier curve?

**Answer:**
The degree of the Bezier curve is $n$.

**Question 2:**
For a cubic Bezier curve defined by control points $P_0, P_1, P_2, P_3$, what is the value of the parameter '$t$' at which the curve passes through its first control point $P_0$?

**Answer:**
$t=0$. The curve always passes through the first control point at $t=0$ and the last control point at $t=1$.

**Question 3:**
If you have control points $P_0 = (0,0)$, $P_1 = (1,2)$, and $P_2 = (3,1)$, calculate the position of the quadratic Bezier curve at $t=0.5$.

**Answer:**
For a quadratic Bezier curve, $B(t) = P_0 (1-t)^2 + 2 P_1 (1-t)t + P_2 t^2$.
At $t=0.5$:
$B(0.5) = P_0 (1-0.5)^2 + 2 P_1 (1-0.5)(0.5) + P_2 (0.5)^2$
$B(0.5) = P_0 (0.5)^2 + 2 P_1 (0.5)(0.5) + P_2 (0.5)^2$
$B(0.5) = 0.25 P_0 + 0.5 P_1 + 0.25 P_2$

Substitute the coordinates:
$B(0.5) = 0.25 (0,0) + 0.5 (1,2) + 0.25 (3,1)$
$B(0.5) = (0,0) + (0.5, 1.0) + (0.75, 0.25)$
$B(0.5) = (1.25, 1.25)$

The position of the quadratic Bezier curve at $t=0.5$ is (1.25, 1.25).

**Question 4 (Conceptual):**
Explain the "convex hull property" of Bezier curves and why it is useful in CAD.

**Answer:**
The convex hull property states that the entire Bezier curve lies within the smallest convex polygon that encloses all of its control points. This is useful in CAD for several reasons:
1.  **Spatial Bounds:** It provides a simple way to determine the spatial extent of the curve, which is helpful for bounding box calculations and clipping operations against a viewing window.
2.  **Efficiency:** In algorithms like collision detection, checking against the convex hull is computationally less expensive than checking against the curve itself.
3.  **Predictability:** Designers can get a visual sense of the curve's bounds by looking at the control polygon.

**Question 5 (Application):**
In a 3D CAD system, how would a designer use Bezier curves to create the smooth, rounded edge of a car door?

**Answer:**
A designer would typically use a cubic Bezier curve (or a Bezier surface patch) to define the edge. The first control point ($P_0$) would be placed at the start of the edge, and the last control point ($P_3$) at the end. The intermediate control points ($P_1$ and $P_2$) would be adjusted to control the curvature and tangency of the edge, pulling the curve to form the desired rounded shape. The smoothness and ability to control tangents at the endpoints using $P_1$ and $P_3$ respectively are critical for achieving a visually appealing and aerodynamically sound car door edge.

---

## Summary and Important Points to Remember

*   **Definition:** Bezier curves are parametric curves defined by control points, using Bernstein polynomials as basis functions.
*   **Control Points:** The first point ($P_0$) and last point ($P_n$) are on the curve. Intermediate points ($P_1, \ldots, P_{n-1}$) influence the shape.
*   **Degree:** For $n+1$ control points, the Bezier curve has degree $n$.
*   **Key Property: Convex Hull:** The curve is contained within the convex hull of its control points.
*   **Key Property: End Tangents:** The tangent at $P_0$ is along the line $P_0P_1$, and the tangent at $P_n$ is along the line $P_{n-1}P_n$.
*   **Applications:** Widely used in CAD for free-form shapes, animation, typography, and vector graphics.
*   **Global Control:** A change in any control point affects the entire curve.
*   **Limitations:** Global control and the need to increase degree for complex shapes can be limitations.
*   **Alternatives:** B-splines and NURBS offer local control and greater flexibility.

This module provides a foundational understanding of Bezier curves, which are essential for creating and manipulating geometric forms in 3D graphics within the field of Computer-Aided Design and Analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
