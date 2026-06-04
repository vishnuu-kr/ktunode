---
title: "Deformation Response of Statically Determinate Beams: Moment area method –Mohr’s theorems, Applications to determinate deformations of cantilever and simply supported beams (prismatic and beams of varying cross section) subjected to concentrated and uniformly distributed loads."
subject: "STRUCTURAL ANALYSIS - I"
module: "Module 1: Statically determinate trusses:  Analysis using method of joints and method of sections."
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810741"
status: "completed"
scrapedAt: "2026-05-20T18:41:40.893Z"
---
# Structural Analysis - I: Module 1 - Deformation Response of Statically Determinate Beams

## Topic: Deformation Response of Statically Determinate Beams: Moment Area Method

This module delves into how statically determinate beams deform under various loading conditions. We will primarily focus on the **Moment Area Method**, a powerful graphical technique for determining beam deflections and slopes.

---

### Learning Outcomes Covered:

*   Understanding the theoretical basis of the Moment Area Method.
*   Applying Mohr's Theorems to calculate slopes and deflections.
*   Analyzing deformation responses of cantilever beams.
*   Analyzing deformation responses of simply supported beams.
*   Considering both prismatic and beams of varying cross-sections.
*   Handling concentrated and uniformly distributed loads.

---

### 1. Introduction to Beam Deformations

*   **What is Beam Deformation?** It's the change in the shape or position of a beam under applied loads. This includes:
    *   **Deflection:** The vertical displacement of a point on the beam.
    *   **Slope:** The angle of rotation of the tangent to the elastic curve at a point on the beam.
*   **Elastic Curve:** The deformed shape of the beam under load, assuming the material remains within its elastic limit.
*   **Why is understanding deformation important?**
    *   **Serviceability:** To ensure the structure performs as intended by limiting excessive deflections and rotations, which can affect the functionality of adjacent components or cause aesthetic issues.
    *   **Structural Integrity:** Excessive deformation can lead to cracking in brittle materials or instability in flexible structures.

---

### 2. The Moment Area Method (Mohr's Theorems)

The Moment Area Method is a geometric method that relates the area under the Moment Diagram of a beam to its slope and deflection. It's based on the following two theorems, often referred to as **Mohr's Theorems**:

#### 2.1. Mohr's First Theorem (Theorem of Tangential Deviation)

*   **Statement:** The vertical distance between a point on the elastic curve and the tangent to the elastic curve at another point is equal to the moment of the area of the M/EI diagram between these two points, taken about the first point.
*   **In simpler terms:** The change in slope between two points on the elastic curve is equal to the area under the M/EI diagram between those two points.
*   **Mathematical Representation:**
    *   Let $\theta_A$ and $\theta_B$ be the slopes at points A and B on the elastic curve.
    *   Let $y_A$ and $y_B$ be the deflections at points A and B on the elastic curve.
    *   The change in slope between A and B: $\theta_B - \theta_A = \int_{A}^{B} \frac{M(x)}{EI} dx$
    *   The tangential deviation of point B with respect to the tangent at point A ($t_{B/A}$): $t_{B/A} = \int_{A}^{B} \frac{M(x)}{EI} (x_B - x) dx$

#### 2.2. Mohr's Second Theorem (Theorem of Deflection)

*   **Statement:** The distance between the tangent at a point on the elastic curve and a second point on the elastic curve, measured perpendicular to the original undeflected axis of the beam, is equal to the moment of the area of the M/EI diagram between these two points, taken about the second point.
*   **In simpler terms:** The change in deflection between two points on the elastic curve is related to the moment of the M/EI diagram area.
*   **Mathematical Representation:**
    *   The tangential deviation of point B with respect to the tangent at point A ($t_{B/A}$): $t_{B/A} = \int_{A}^{B} \frac{M(x)}{EI} (x) dx$ (where x is the distance from point A)
    *   If we consider a coordinate system where the tangent at A is horizontal, then the deflection of point B is $y_B = \int_{A}^{B} \frac{M(x)}{EI} (x) dx$.

#### **Key Concept: The M/EI Diagram**

*   The Moment Area Method directly works with the **M/EI diagram**.
*   **M:** The bending moment at a section of the beam.
*   **E:** The modulus of elasticity of the beam material (a measure of its stiffness).
*   **I:** The moment of inertia of the beam's cross-section about the neutral axis (a measure of its resistance to bending).
*   **EI:** Flexural rigidity. A constant value for prismatic beams, but varies for beams of varying cross-section.
*   **Importance of M/EI:** The shape of the elastic curve is directly proportional to the M/EI diagram. For a prismatic beam, the M/EI diagram has the same shape as the M diagram.

---

### 3. Procedure for Applying the Moment Area Method

1.  **Determine Support Reactions:** Calculate the support reactions for the given beam and loading.
2.  **Draw the Shear Force Diagram (SFD) and Bending Moment Diagram (BMD):** These diagrams are crucial for obtaining the M diagram.
3.  **Construct the M/EI Diagram:**
    *   For prismatic beams, M/EI is directly proportional to M. Divide the M values by EI.
    *   For beams of varying cross-section, I varies along the length. You'll need to divide M by EI at different sections or create a modified diagram.
4.  **Identify the Point of Known Slope/Deflection:** Choose a point on the beam where the slope or deflection is known (usually a support). For example, at a simple support, the deflection is zero. At a fixed support, both deflection and slope are zero.
5.  **Identify the Point of Unknown Slope/Deflection:** This is the point where you want to determine the slope or deflection.
6.  **Apply Mohr's Theorems:**
    *   **For Slope:** The change in slope between the point of known slope and the point of unknown slope is the area under the M/EI diagram between those points.
    *   **For Deflection:** The tangential deviation of the point of unknown deflection with respect to the tangent at the point of known slope is the moment of the area under the M/EI diagram between those points.
7.  **Geometric Interpretation:** Use the geometric properties of the M/EI diagram (area of rectangles, triangles, parabolas) to calculate the required areas and moments of areas.

---

### 4. Geometric Properties of Common M/EI Diagram Shapes

| Shape           | Area                                   | Centroid Location (from vertex/base) | Moment of Area about Vertex/Base |
| :-------------- | :------------------------------------- | :----------------------------------- | :------------------------------- |
| Rectangle       | $bh$                                   | $b/2$                                | $bh(b/2) = b^2h/2$               |
| Triangle        | $\frac{1}{2}bh$                        | $b/3$ (from base), $2b/3$ (from vertex) | $\frac{1}{2}bh(b/3) = b^2h/6$    |
| Parabola (parabolic segment) | $\frac{2}{3}bh$                        | $b/2$                                | $\frac{2}{3}bh(b/2) = b^2h/3$    |
| Parabola (segment cut by chord) | $\frac{1}{3}bh$                        | $b/4$ (from base)                    | $\frac{1}{3}bh(b/4) = b^2h/12$   |

**Important Note:** When calculating the moment of area, carefully consider the distance of the centroid of the area from the point about which the moment is being taken.

---

### 5. Applications to Determinate Deformations

#### 5.1. Cantilever Beams

*   **Characteristics:** Fixed at one end and free at the other.
*   **Typical Loads:** Concentrated load at the free end, uniformly distributed load (UDL) over the span.
*   **Known Slope/Deflection:** At the fixed support, the slope and deflection are zero. This is our reference point.

**Example 1: Cantilever Beam with Concentrated Load at the Free End**

*   **Beam:** Cantilever of length $L$, fixed at A, free at B.
*   **Load:** Concentrated load $P$ at B.
*   **M/EI Diagram:** The bending moment is $M(x) = -Px$ (negative as it causes tension at the top). The M/EI diagram will be a triangle with the peak at the fixed support (point A).
    *   Maximum moment at A: $M_A = -PL$.
    *   The M/EI diagram will be a triangle with base $L$ and height $M_A/EI = -PL/EI$.

*   **Calculating Deflection at the Free End (Point B):**
    *   We want to find the tangential deviation of B with respect to the tangent at A.
    *   Tangent at A is horizontal (slope is zero).
    *   The deflection of B ($y_B$) is equal to $t_{B/A}$.
    *   $y_B = \int_{A}^{B} \frac{M(x)}{EI} (x) dx$
    *   This integral represents the moment of the area of the M/EI diagram about point B.
    *   Area of the M/EI triangle: $\frac{1}{2} \times L \times \frac{PL}{EI}$
    *   Centroid of the triangle is at $\frac{2}{3}L$ from the free end (B).
    *   $y_B = (\frac{1}{2} \times L \times \frac{PL}{EI}) \times \frac{2L}{3} = \frac{PL^3}{3EI}$ (The deflection is downwards, so typically taken as positive in magnitude).

*   **Calculating Slope at the Free End (Point B):**
    *   We want to find the change in slope between A and B.
    *   Slope at A ($\theta_A$) is 0.
    *   $\theta_B - \theta_A = \int_{A}^{B} \frac{M(x)}{EI} dx$
    *   This integral represents the area of the M/EI diagram between A and B.
    *   Area of the M/EI triangle: $\frac{1}{2} \times L \times \frac{PL}{EI}$
    *   $\theta_B = \frac{1}{2} \frac{PL^2}{EI}$ (The slope is typically positive in magnitude for a clockwise rotation).

**Example 2: Cantilever Beam with Uniformly Distributed Load (UDL)**

*   **Beam:** Cantilever of length $L$, fixed at A, free at B.
*   **Load:** UDL of intensity $w$ per unit length over the entire span.
*   **M/EI Diagram:** The bending moment at a section $x$ from the free end is $M(x) = -\frac{wx^2}{2}$. The M/EI diagram will be parabolic.
    *   Maximum moment at A: $M_A = -\frac{wL^2}{2}$.

*   **Calculating Deflection at the Free End (Point B):**
    *   $y_B = \int_{A}^{B} \frac{M(x)}{EI} (x) dx$
    *   The M/EI diagram is a parabola.
    *   Using the properties of a parabolic segment: Area = $\frac{2}{3} \times base \times height$.
    *   The integral corresponds to the moment of this parabolic area about B.
    *   $y_B = \frac{wL^4}{8EI}$ (Downward deflection)

*   **Calculating Slope at the Free End (Point B):**
    *   $\theta_B = \int_{A}^{B} \frac{M(x)}{EI} dx$
    *   This is the area under the parabolic M/EI diagram.
    *   $\theta_B = \frac{wL^3}{6EI}$ (Clockwise slope)

#### 5.2. Simply Supported Beams

*   **Characteristics:** Supported at both ends.
*   **Typical Loads:** Concentrated load at mid-span, UDL over the span.
*   **Known Slope/Deflection:** At the supports (A and B), the deflection is zero. We can use either support as the reference point.

**Example 3: Simply Supported Beam with Concentrated Load at Mid-span**

*   **Beam:** Simply supported beam of length $L$, supported at A and B.
*   **Load:** Concentrated load $P$ at mid-span ($L/2$).
*   **Support Reactions:** $R_A = R_B = P/2$.
*   **M/EI Diagram:** The bending moment diagram is triangular, peaking at mid-span.
    *   Maximum moment at mid-span: $M_{max} = \frac{PL}{4}$.

*   **Calculating Deflection at Mid-span:**
    *   Let's find the tangential deviation of the mid-span point (C) with respect to the tangent at support A.
    *   The tangent at A is horizontal. So, the deflection at C is $y_C = t_{C/A}$.
    *   $y_C = \int_{A}^{C} \frac{M(x)}{EI} (x) dx$
    *   This is the moment of the M/EI diagram area between A and C about C.
    *   The M/EI diagram between A and C is a triangle with base $L/2$ and height $\frac{PL}{4EI}$.
    *   Area of this triangle: $\frac{1}{2} \times \frac{L}{2} \times \frac{PL}{4EI} = \frac{PL^2}{16EI}$
    *   The centroid of this triangle is at $\frac{1}{3}$ of the base from the vertical line at C, so its distance from C is $\frac{1}{3} \times \frac{L}{2} = \frac{L}{6}$.
    *   $y_C = (\frac{PL^2}{16EI}) \times \frac{L}{6} = \frac{PL^3}{96EI}$ (Downward deflection)

*   **Calculating Slope at a Support (e.g., Support B):**
    *   We can find the tangential deviation of support B with respect to the tangent at the mid-span point C, or use symmetry.
    *   Alternatively, we can calculate the tangential deviation of the mid-span point C with respect to the tangent at support B.
    *   Let's use symmetry: The tangent at the center (under the load) is horizontal. We can find the tangential deviation of support B with respect to the tangent at C.
    *   $t_{B/C} = \int_{C}^{B} \frac{M(x)}{EI} (x_{from C}) dx$. This is the moment of the M/EI area between C and B about B.
    *   Area of M/EI triangle from C to B: $\frac{1}{2} \times \frac{L}{2} \times \frac{PL}{4EI} = \frac{PL^2}{16EI}$
    *   The centroid of this triangle is at $\frac{2}{3}$ of the base from B, so its distance from B is $\frac{2}{3} \times \frac{L}{2} = \frac{L}{3}$.
    *   $t_{B/C} = (\frac{PL^2}{16EI}) \times \frac{L}{3} = \frac{PL^3}{48EI}$.
    *   Since the tangent at C is horizontal, $t_{B/C}$ represents the slope at B ($\theta_B$) with respect to the horizontal.
    *   $\theta_B = \frac{PL^2}{48EI}$ (Clockwise slope)

**Example 4: Simply Supported Beam with Uniformly Distributed Load (UDL)**

*   **Beam:** Simply supported beam of length $L$, supported at A and B.
*   **Load:** UDL of intensity $w$ per unit length over the entire span.
*   **Support Reactions:** $R_A = R_B = wL/2$.
*   **M/EI Diagram:** The bending moment diagram is parabolic, peaking at mid-span.
    *   Maximum moment at mid-span: $M_{max} = \frac{wL^2}{8}$.
    *   The M/EI diagram is a parabola described by $M(x) = \frac{wLx}{2} - \frac{wx^2}{2}$.

*   **Calculating Deflection at Mid-span:**
    *   Use the tangent at support A. We need $t_{C/A}$ where C is mid-span.
    *   $y_C = t_{C/A} = \int_{A}^{C} \frac{M(x)}{EI} (x) dx$.
    *   The M/EI diagram between A and C is a segment of a parabola.
    *   The integral can be evaluated, and the result is: $y_C = \frac{5wL^4}{384EI}$ (Downward deflection).

*   **Calculating Slope at a Support (e.g., Support B):**
    *   Using symmetry, find $t_{B/C}$ (tangential deviation of B w.r.t. tangent at C).
    *   $t_{B/C} = \int_{C}^{B} \frac{M(x)}{EI} (x_{from C}) dx$.
    *   The result is: $\theta_B = \frac{wL^3}{24EI}$ (Clockwise slope).

---

### 6. Beams of Varying Cross-Section

*   **Challenge:** The value of $I$ changes along the beam's length.
*   **Approach:**
    1.  **Draw the M diagram as usual.**
    2.  **Construct the M/I diagram:** Divide the moment at various sections by the corresponding moment of inertia ($I$) at those sections. This will result in a diagram that is not necessarily a simple scaled version of the M diagram.
    3.  **Apply Geometric Properties:** You will need to calculate the area and moment of area of the M/I diagram. This may involve integration or breaking down complex shapes into simpler ones for which geometric properties are known.
    4.  **Alternatively, use a graphical integration technique or numerical methods.**

**Example: A Simply Supported Beam with UDL and a varying I**

If the beam has a stepped cross-section or a tapered section, the $I$ value will change. You would need to plot $M/I$ as a piecewise function or use graphical methods for integration.

*   **Step 1:** Determine reactions.
*   **Step 2:** Draw BMD.
*   **Step 3:** Divide M values by corresponding I values at various sections to get the M/I diagram.
*   **Step 4:** Use Mohr's theorems with the areas and moments of areas of the M/I diagram.

---

### 7. Practice Questions and Exercises

**Q1: Cantilever Beam Deformation**

A cantilever beam of length $L$ is fixed at point A and free at point B. It is subjected to a uniformly distributed load of intensity $w$ over its entire length. Using the Moment Area Method, derive expressions for:
(a) The slope at the free end (point B).
(b) The maximum deflection of the beam.

**Answer:**
(a) Slope at B: $\theta_B = \frac{wL^3}{6EI}$
(b) Maximum deflection (at B): $y_{max} = \frac{wL^4}{8EI}$

**Q2: Simply Supported Beam Deformation**

A simply supported beam of length $L$ carries a concentrated load $P$ at a distance $a$ from the left support A, and $b$ from the right support B, where $a+b=L$. Using the Moment Area Method, derive an expression for the deflection at the point where the load is applied.

**Answer:**
Assume $a \le b$ for calculation ease.
Reactions: $R_A = \frac{Pb}{L}$, $R_B = \frac{Pa}{L}$.
Deflection at load point: $y_C = \frac{Pa^2b^2}{3EIL}$

**Q3: Simply Supported Beam with UDL**

A simply supported beam of length $L$ is subjected to a uniformly distributed load of intensity $w$ over its entire length. Using the Moment Area Method, derive an expression for the slope at the supports.

**Answer:**
Slope at supports: $\theta_{supp} = \frac{wL^3}{24EI}$

---

### 8. Important Points to Remember

*   **The M/EI Diagram is Key:** All calculations are based on the area and moment of area of this diagram.
*   **Reference Point:** Always choose a point with a known slope and deflection as your reference. For fixed supports, both are zero. For simple supports, deflection is zero.
*   **Tangential Deviation:** The fundamental concept is the tangential deviation, which can be directly related to slope or deflection based on how the moment of area is taken.
*   **Geometric Properties:** Master the area and centroid formulas for common shapes (rectangles, triangles, parabolas).
*   **Sign Conventions:** Be consistent with sign conventions for moments and deflections. Downward deflection and clockwise rotation are often taken as positive in magnitude.
*   **Beams of Varying Cross-Section:** The $EI$ term becomes $E \times I(x)$, and the M/EI diagram will require more careful construction and analysis (integration).
*   **Superposition:** The Moment Area Method can be combined with the principle of superposition to solve problems with multiple loads.

---

This concludes the study notes for the Moment Area Method. Practice the examples and exercises to solidify your understanding.
