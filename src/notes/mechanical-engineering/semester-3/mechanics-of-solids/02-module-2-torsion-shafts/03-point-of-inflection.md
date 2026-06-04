---
title: "Point of 
Inflection."
subject: "MECHANICS OF SOLIDS"
module: "Module 2: Torsion: Shafts "
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cf6"
status: "completed"
scrapedAt: "2026-05-20T17:51:06.351Z"
---
# Mechanics of Solids - Module 2: Torsion: Shafts

## Topic: Point of Inflection

This topic, while seemingly related to bending, has a crucial conceptual connection in understanding the behavior of shafts under specific loading conditions, particularly when we consider combined loading or situations that induce bending moments in shafts that are primarily designed for torsion. A point of inflection in the context of mechanics of solids refers to a point on a beam or shaft where the curvature changes sign. This is directly related to the bending moment diagram and the shear force diagram.

### 1. Learning Outcomes Covered:

This topic indirectly supports the following learning outcomes by providing a foundational understanding of bending behavior, which can be critical when analyzing complex loading scenarios on shafts:

*   **CO2: Analyse the torsion of circular bars and draw the shear force and bending moment diagrams for beams.** (Knowledge Level: K4) - While not directly about torsion, understanding bending moment diagrams is essential for analyzing shafts that might also experience bending. A point of inflection is a key feature of these diagrams.
*   **CO3: Determine the stresses and deflections in beams subjected to transverse loads.** (Knowledge Level: K3) - The concept of a point of inflection arises from the bending of beams and is fundamental to calculating stresses and deflections due to transverse loads, which could be present on shafts.

### 2. Key Concepts and Definitions:

*   **Bending Moment (M):** The internal moment of force within a beam or shaft that resists the applied forces and moments, causing it to bend.
*   **Curvature:** The rate of change of the slope of the bending curve. Mathematically, for a beam where $y$ is the deflection and $x$ is the position along the beam, the curvature is approximately $d^2y/dx^2$.
*   **Point of Inflection:** A point on a curve (in this case, the deflected shape of a beam/shaft) where the curvature changes sign. This means the curve transitions from being concave up to concave down, or vice versa.
*   **Relationship with Bending Moment:** The curvature of a beam is directly proportional to the bending moment acting on it. The relationship is given by:
    $$ \frac{d^2y}{dx^2} = \frac{M(x)}{EI} $$
    where:
    *   $y$ is the deflection
    *   $x$ is the position along the beam
    *   $M(x)$ is the bending moment at position $x$
    *   $E$ is the Young's modulus of the material
    *   $I$ is the moment of inertia of the cross-section

*   **Significance of Point of Inflection:** At a point of inflection, the bending moment $M(x)$ is zero. This is because the curvature changes sign when the bending moment passes through zero.
    *   If $M(x) > 0$, the beam is concave down (like a smile).
    *   If $M(x) < 0$, the beam is concave up (like a frown).
    *   At the point of inflection, $M(x) = 0$, and the concavity changes.

### 3. Examples and Applications in Shafts:

While shafts are primarily designed for torsion, they often experience bending due to:

*   **Weight of the shaft itself:** Especially for long shafts.
*   **Weight of pulleys, gears, or other rotating components:** These create transverse loads.
*   **Applied forces (e.g., belt tensions):** These can also induce bending moments.

Consider a simply supported shaft with a concentrated load at its center. The bending moment diagram will be triangular, reaching a maximum at the center and zero at the supports. In this simple case, there are no points of inflection within the span.

However, consider a shaft with **overhanging ends** subjected to loads. Or a shaft with a **combination of transverse loads and applied moments**.

**Example Scenario:**

Imagine a shaft that is part of a machine where it supports a pulley in the middle and is fixed at both ends. If the pulley exerts a downward force, the shaft will bend.

*   **Fixed Ends:** At fixed ends, the bending moment is non-zero.
*   **Supported Pulley:** The downward force on the pulley creates a bending moment.

In such a scenario, the bending moment diagram might have segments where the moment is positive (e.g., above the neutral axis) and segments where it is negative (e.g., below the neutral axis). The points where the bending moment crosses zero are the points of inflection.

**Illustrative Diagram:**

Imagine a shaft supported at points A and B, with a downward force applied at point C between A and B, and then the shaft extends beyond B to point D.

```
      C
      |
A-----B-----D
```

*   If this were a simply supported beam from A to B with a load at C, the bending moment would be positive between A and B, with a maximum at C, and zero at A and B. No point of inflection.
*   However, if we consider the shaft extending to D, and the beam is continuous, the bending moment distribution would be more complex. Depending on the loading and support conditions, it is possible to have points where the bending moment becomes zero and changes sign, indicating a point of inflection.

**References:**

*   **R.K. Bansal (2012) - Mechanics of Solids:** While the primary focus is torsion, chapters on bending of beams will discuss the bending moment and its relation to curvature. The concept of a point of inflection is a standard topic in beam bending.
*   **S. S. Bhavikatti (2013) - Mechanics of Solids:** Similar to Bansal, Bhavikatti's text will cover beam bending theory, including the calculation of bending moments and the identification of points of inflection.
*   **Surendra Singh (2013) - Strength of Materials:** This textbook will provide a rigorous treatment of bending stress and deflection, where the point of inflection is a key characteristic of the bending moment diagram.
*   **Rattan (2011) - Strength of Materials:** Rattan's book will also present these concepts, likely with graphical illustrations of bending moment diagrams and the identification of points of inflection.

### 4. How to Identify Points of Inflection:

1.  **Draw the Shear Force Diagram (SFD):** The SFD shows the variation of shear force along the length of the shaft.
2.  **Draw the Bending Moment Diagram (BMD):** The BMD shows the variation of bending moment along the length of the shaft.
3.  **Locate Zeros in the BMD:** The points where the bending moment $M(x) = 0$ are the points of inflection.
4.  **Check for Change in Sign:** Ensure that the bending moment actually changes sign at these zero points. A point where the BMD touches the zero axis but does not cross it is not a point of inflection.

### 5. Relationship to Stresses and Deflections:

*   **Stresses:** The bending stress ($\sigma_b$) in a shaft is directly proportional to the bending moment:
    $$ \sigma_b = \frac{My}{I} $$
    At a point of inflection, where $M = 0$, the bending stress is also zero. This is a significant observation: at points of inflection, the material experiences no bending stress.
*   **Deflections:** The second derivative of the deflection curve is proportional to the bending moment. At a point of inflection, the second derivative $d^2y/dx^2 = 0$. This implies that the **radius of curvature** of the deflected curve becomes infinite at this point. This means the curve is locally "straight." While the deflection itself might not be zero, the *rate of change of curvature* is zero, meaning the curvature transitions from positive to negative (or vice versa).

### 6. Practice Questions/Exercises:

**Question 1:**
A cantilever beam of length $L$ is subjected to a uniformly distributed load $w$ per unit length.
(a) Draw the Shear Force Diagram (SFD) and Bending Moment Diagram (BMD).
(b) Identify any points of inflection.

**Answer 1:**
(a)
*   **SFD:** The shear force at a distance $x$ from the free end is $F(x) = wx$. It varies linearly from 0 at the free end to $wL$ at the fixed end.
*   **BMD:** The bending moment at a distance $x$ from the free end is $M(x) = -wx^2/2$. It varies parabolically from 0 at the free end to $-wL^2/2$ at the fixed end (where the negative sign indicates sagging).

(b)
The bending moment $M(x) = -wx^2/2$. For a point of inflection, $M(x) = 0$.
$-wx^2/2 = 0$
This equation is satisfied only at $x=0$ (the free end). However, at $x=0$, the bending moment is zero but does not change sign (it's zero on one side and negative on the other). Strictly speaking, a point of inflection requires the curvature to change sign. In a cantilever with UDL, the entire bending moment is negative. Therefore, **there is no point of inflection** within the span of the cantilever beam.

**Question 2:**
A simply supported beam of length $L$ is subjected to a moment $M_0$ at its center.
(a) Draw the SFD and BMD.
(b) Identify any points of inflection.

**Answer 2:**
(a)
*   **SFD:** The shear force is zero everywhere along the beam, as there are no transverse loads.
*   **BMD:** The bending moment is $M(x) = M_0/2$ for $0 \le x < L/2$ and $M(x) = -M_0/2$ for $L/2 < x \le L$. At the center ($x=L/2$), the moment is $M_0$. The BMD will have a jump discontinuity of $M_0$ at the center.

(b)
The bending moment is either $M_0/2$ or $-M_0/2$, and at the center, it's $M_0$. In either case, the bending moment is **never zero** within the span. Therefore, **there is no point of inflection** in this case.

**Question 3:**
Consider a beam where the bending moment diagram is given by $M(x) = x(x-a)(x-b)$, where $a < b$. Assume the beam is of length $b$.
(a) Identify the points where the bending moment is zero.
(b) Which of these points are points of inflection? Explain your reasoning.

**Answer 3:**
(a) The bending moment is zero when $M(x) = 0$.
$x(x-a)(x-b) = 0$
This occurs at $x=0$, $x=a$, and $x=b$. These are the points where the bending moment is zero.

(b) A point of inflection is a point where the bending moment is zero *and* changes sign. We need to examine the sign of $M(x)$ around these points.
*   **At $x=0$:** For values of $x$ slightly greater than 0 (but less than $a$), $x$ is positive, $(x-a)$ is negative, and $(x-b)$ is negative. So, $M(x) = (+)(-)(-) = (+)$. For $x$ slightly less than 0 (if the beam extended there), the sign would change. However, assuming the beam starts at $x=0$, the bending moment goes from 0 to positive. If we consider the beam starting at $x=0$, then at $x=0$ the bending moment is zero and it's going into the positive region.
*   **At $x=a$:**
    *   For $x$ slightly less than $a$ (and greater than 0): $x(+)$, $(x-a)(-)$, $(x-b)(-)$. So, $M(x) = (+)(-)(-) = (+)$.
    *   For $x$ slightly greater than $a$ (and less than $b$): $x(+)$, $(x-a)(+)$, $(x-b)(-)$. So, $M(x) = (+)(+)(-) = (-)$.
    Since the bending moment changes from positive to negative at $x=a$, **$x=a$ is a point of inflection.**
*   **At $x=b$:**
    *   For $x$ slightly less than $b$ (and greater than $a$): $x(+)$, $(x-a)(+)$, $(x-b)(-)$. So, $M(x) = (+)(+)(-) = (-)$.
    *   For $x$ slightly greater than $b$: $x(+)$, $(x-a)(+)$, $(x-b)(+)$. So, $M(x) = (+)(+)(+) = (+)$.
    Since the bending moment changes from negative to positive at $x=b$, **$x=b$ is a point of inflection.**

Therefore, the points of inflection are at $x=a$ and $x=b$.

### 7. Important Points to Remember:

*   A point of inflection on a beam or shaft occurs where the bending moment is **zero** and the **sign of the bending moment changes**.
*   This corresponds to a point where the **curvature of the deflected shape changes sign**.
*   At a point of inflection, the **bending stress is zero**.
*   The concept is crucial for understanding the overall bending behavior of shafts when subjected to transverse loads, even if torsion is their primary function.
*   Always check for both conditions: bending moment is zero, AND it changes sign.

This topic, while not a direct calculation in torsion, provides essential background for understanding how shafts behave when they also experience bending, which is often the case in real-world applications. The ability to analyze bending moment diagrams and identify key points like points of inflection is a fundamental skill in mechanics of solids.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
