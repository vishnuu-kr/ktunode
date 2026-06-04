---
title: "Castigliano’s theorem I, Principle of virtual work, Betti’s theorem, Maxwell’s law of reciprocal deflections."
subject: "STRUCTURAL ANALYSIS - I"
module: "Module 2: Deformation Response of Statically Determinate Beams: Conjugate beam method–  Real beam and conjugate beam, boundary conditions; Applications to determinate deformations of cantilever and simply supported beams (prismatic and beams of varying cross section subjected to concentrated and uniformly distributed loads."
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810745"
status: "completed"
scrapedAt: "2026-05-20T18:41:43.053Z"
---
# Structural Analysis - I: Module 2 - Deformation Response of Statically Determinate Beams

## Topic: Energy Methods for Beam Deformations

This module focuses on advanced methods for calculating beam deformations, building upon the concepts introduced earlier. We will explore energy-based theorems that provide elegant solutions for deflections and rotations.

---

### 1. Castigliano's Theorem I (First Theorem of Least Work)

**Key Concept:** This theorem relates the deflection of a structure to the partial derivative of the strain energy stored within the structure with respect to an external force applied at that point.

**Definition:**
*   **Strain Energy (U):** The energy stored in a deformable body due to internal stresses and strains. For a beam under bending, the strain energy due to bending is given by:
    $U = \int_0^L \frac{M(x)^2}{2EI} dx$
    where:
    *   $M(x)$ is the bending moment at a section x.
    *   $E$ is the modulus of elasticity of the material.
    *   $I$ is the moment of inertia of the cross-section.
    *   $L$ is the length of the beam.

*   **Castigliano's Theorem I:** The deflection ($\delta_i$) at a point in a structure due to a system of loads is equal to the partial derivative of the total strain energy (U) stored in the structure with respect to the force ($P_i$) applied at that point and in that direction.
    $\delta_i = \frac{\partial U}{\partial P_i}$

**Application to Beams:**
For beams, we are primarily concerned with bending deformation. Thus, the force $P_i$ is often a load, and $\delta_i$ is the corresponding deflection.

**Steps to Apply Castigliano's Theorem I:**
1.  **Determine the Bending Moment Equation $M(x)$:** Analyze the real beam under the applied loads to find the bending moment distribution along its length.
2.  **Calculate Total Strain Energy (U):** Integrate the strain energy density over the beam's length:
    $U = \int_0^L \frac{M(x)^2}{2EI} dx$
3.  **Introduce a Fictitious Load (if necessary):** If you want to find the deflection at a point where no load is applied, introduce a small fictitious load $P$ at that point and in the desired direction. Then, find the bending moment $M(x, P)$ in terms of $P$.
4.  **Differentiate U with Respect to the Load:** Calculate $\frac{\partial U}{\partial P}$.
5.  **Set Fictitious Load to Zero:** Substitute $P=0$ back into the differentiated expression to get the actual deflection. If a real load $P_i$ was applied, its derivative will directly yield the deflection.

**Example:** Deflection of a simply supported beam of length L with a concentrated load P at mid-span.

*   **Real Beam:** Simply supported at ends, load P at mid-span.
*   **Bending Moment:** For $0 \le x \le L/2$, $M(x) = \frac{P}{2}x$.
*   **Strain Energy:**
    $U = \int_0^L \frac{M(x)^2}{2EI} dx = 2 \int_0^{L/2} \frac{(\frac{P}{2}x)^2}{2EI} dx$ (Symmetry)
    $U = \frac{1}{EI} \int_0^{L/2} \frac{P^2}{4}x^2 dx = \frac{P^2}{4EI} \left[\frac{x^3}{3}\right]_0^{L/2}$
    $U = \frac{P^2}{4EI} \left(\frac{(L/2)^3}{3}\right) = \frac{P^2 L^3}{96EI}$
*   **Apply Castigliano's Theorem I:**
    $\delta_{mid-span} = \frac{\partial U}{\partial P} = \frac{\partial}{\partial P} \left(\frac{P^2 L^3}{96EI}\right) = \frac{2P L^3}{96EI} = \frac{PL^3}{48EI}$

**Important Points to Remember:**
*   Castigliano's Theorem I is applicable to both statically determinate and indeterminate structures.
*   It is most effective when the bending moment can be expressed easily in terms of the loads.
*   It directly gives the deflection at the point of application of the load in the direction of the load.

---

### 2. Principle of Virtual Work

**Key Concept:** This principle states that the virtual work done by the external virtual forces in moving through the real displacements is equal to the internal virtual work done by the internal virtual forces in moving through the real deformations.

**Definition:**
*   **Virtual Displacement:** An infinitesimally small, imaginary displacement that is consistent with the constraints of the structure.
*   **Virtual Force:** An imaginary force applied to the structure, typically used to determine a specific displacement.
*   **Principle of Virtual Work:** For a structure in equilibrium, the external virtual work done by a system of virtual forces acting through the real displacements is equal to the internal virtual work done by the corresponding internal virtual forces acting through the real deformations.

**Mathematical Formulation:**
$\sum F_{virtual} \cdot \Delta_{real} = \sum M_{virtual} \cdot \theta_{real}$ (for external forces and moments)
$\int_0^L M_{virtual}(x) \frac{M_{real}(x)}{EI} dx = \sum (\text{Internal Virtual Forces} \cdot \text{Real Deformations})$

**Application to Beams (for Deflection):**
To find the deflection at a specific point and in a specific direction, we apply a unit virtual force (or moment) at that point and in that direction.

**Steps to Apply Principle of Virtual Work for Deflection:**
1.  **Create the "Real" System:** This is the actual beam with the applied loads. Determine the bending moment equation $M_{real}(x)$ for the real system.
2.  **Create the "Virtual" System:** Remove all real loads from the beam. Apply a unit virtual force (or moment) at the point where the deflection (or rotation) is to be found, and in the direction of the desired deflection (or rotation). Determine the bending moment equation $M_{virtual}(x)$ for this virtual system.
3.  **Calculate External Virtual Work:** This is usually the product of the unit virtual force and the real deflection at that point (which is what we want to find).
    $W_{ext, virtual} = (1 \text{ unit force}) \times \delta_{real}$
4.  **Calculate Internal Virtual Work:** This is the work done by the virtual internal forces (derived from $M_{virtual}(x)$) as they deform due to the real internal forces (derived from $M_{real}(x)$). For bending in beams:
    $W_{int, virtual} = \int_0^L \frac{M_{virtual}(x) \cdot M_{real}(x)}{EI} dx$
5.  **Equate External and Internal Virtual Work:**
    $1 \cdot \delta_{real} = \int_0^L \frac{M_{virtual}(x) \cdot M_{real}(x)}{EI} dx$
    Therefore, $\delta_{real} = \int_0^L \frac{M_{virtual}(x) \cdot M_{real}(x)}{EI} dx$

**Example:** Deflection of a simply supported beam of length L with a concentrated load P at mid-span.

*   **Real System:** Simply supported beam, load P at mid-span.
    *   $M_{real}(x) = \frac{P}{2}x$ for $0 \le x \le L/2$.
*   **Virtual System:** Simply supported beam, unit load (1) at mid-span.
    *   $M_{virtual}(x) = \frac{1}{2}x$ for $0 \le x \le L/2$.
*   **Calculate Deflection at Mid-span:**
    $\delta_{mid-span} = \int_0^L \frac{M_{virtual}(x) \cdot M_{real}(x)}{EI} dx$
    $\delta_{mid-span} = 2 \int_0^{L/2} \frac{(\frac{1}{2}x) \cdot (\frac{P}{2}x)}{EI} dx$ (Symmetry)
    $\delta_{mid-span} = \frac{2}{EI} \int_0^{L/2} \frac{Px^2}{4} dx = \frac{P}{2EI} \int_0^{L/2} x^2 dx$
    $\delta_{mid-span} = \frac{P}{2EI} \left[\frac{x^3}{3}\right]_0^{L/2} = \frac{P}{2EI} \left(\frac{(L/2)^3}{3}\right)$
    $\delta_{mid-span} = \frac{P}{2EI} \frac{L^3}{24} = \frac{PL^3}{48EI}$

**Important Points to Remember:**
*   The virtual force system must be in equilibrium.
*   The principle can be used for various types of loads and supports.
*   It's particularly useful for finding deflection at a specific point or rotation at a specific point.

---

### 3. Betti's Theorem

**Key Concept:** This theorem relates the displacements caused by two different systems of loads applied to the same elastic body. It states that the external virtual work done by the first system of forces acting through the displacements of the second system of forces is equal to the external virtual work done by the second system of forces acting through the displacements of the first system of forces.

**Definition:**
Consider an elastic body subjected to two different systems of loads:
*   **System 1:** Loads $P_{1i}$ causing displacements $\delta_{1i}$ and internal forces/strains.
*   **System 2:** Loads $P_{2j}$ causing displacements $\delta_{2j}$ and internal forces/strains.

**Betti's Theorem:**
The total work done by the loads of System 1 acting through the displacements of System 2 is equal to the total work done by the loads of System 2 acting through the displacements of System 1.

Mathematically:
$\sum P_{1i} \delta_{2i} = \sum P_{2j} \delta_{1j}$

**Application to Beams:**
In the context of beams, this theorem is often expressed in terms of strain energy. It implies that if we apply a unit load at point A on a beam and measure the deflection at point B, this deflection is the same as if we applied a unit load at point B and measured the deflection at point A.

**Statement for Beams:**
If a load $P_1$ applied at point 1 causes a deflection $\delta_{12}$ at point 2, then the same load $P_1$ applied at point 2 would cause a deflection $\delta_{21}$ at point 1, where $\delta_{12} = \delta_{21}$.

**Implication:**
Betti's theorem highlights the reciprocity of deflections in elastic structures. It means that the influence of a load at one point on the deflection at another point is the same as the influence of a load at the second point on the deflection at the first point.

**Example:**
Imagine a simply supported beam.
*   **System 1:** Apply a load $P$ at mid-span. This causes a deflection $\delta_{mid}$ at mid-span.
*   **System 2:** Apply a load $P$ at the support (say, left support). This causes a deflection $\delta_{left}$ at the left support.

Betti's theorem states that if we apply $P$ at the left support, the deflection at the mid-span will be the same as if we applied $P$ at the mid-span and measured the deflection at the left support (which is zero). This isn't the most intuitive example for beams as forces are usually applied at specific locations. A better example:

Consider a simply supported beam.
*   **System 1:** Apply a load $P_A$ at point A, causing a deflection $\delta_B$ at point B.
*   **System 2:** Apply a load $P_B$ at point B, causing a deflection $\delta_A$ at point A.

Betti's Theorem states: $P_A \cdot \delta_B = P_B \cdot \delta_A$.
If $P_A = P_B = P$, then $\delta_B = \delta_A$. This means the deflection at B due to a load at A is equal to the deflection at A due to an equal load at B.

**Important Points to Remember:**
*   Betti's Theorem is a fundamental theorem in elasticity and structural mechanics.
*   It applies to linear elastic structures.
*   It is particularly useful in the development of influence lines and in understanding the behavior of structures under multiple load combinations.

---

### 4. Maxwell's Law of Reciprocal Deflections

**Key Concept:** This is a specific case of Betti's Theorem applied to deflections caused by unit forces. It states that the deflection at point B due to a unit force applied at point A is equal to the deflection at point A due to a unit force applied at point B.

**Definition:**
For a linear elastic structure, the deflection at point B due to a unit load applied at point A is equal to the deflection at point A due to a unit load applied at point B.

**Maxwell's Law:**
$\delta_{B \text{ due to unit load at A}} = \delta_{A \text{ due to unit load at B}}$

**Relationship to Betti's Theorem:**
Maxwell's Law is a direct consequence of Betti's Theorem. If we set $P_{1A} = 1$ (unit load at A) and $P_{2B} = 1$ (unit load at B), and consider the displacements at the other point, Betti's Theorem becomes:
$1 \cdot \delta_{B \text{ due to load at A}} = 1 \cdot \delta_{A \text{ due to load at B}}$
Which simplifies to Maxwell's Law.

**Application to Beams:**
This law is crucial for constructing influence lines. By applying unit loads at various points and measuring the deflections at a specific point, we can determine the shape of the influence line for that point. Conversely, by applying unit loads at a specific point and measuring deflections at various points, we gain insight into how that load affects deflections across the beam.

**Example:**
Consider a simply supported beam of length L.
*   **Experiment 1:** Apply a unit load at mid-span. Measure the deflection at mid-span, $\delta_{mid \text{ due to unit load at mid-span}}$.
*   **Experiment 2:** Apply a unit load at a point $x$. Measure the deflection at mid-span, $\delta_{mid \text{ due to unit load at } x}$.
*   **Experiment 3:** Apply a unit load at mid-span. Measure the deflection at point $x$, $\delta_{x \text{ due to unit load at mid-span}}$.

Maxwell's Law tells us that:
$\delta_{x \text{ due to unit load at mid-span}} = \delta_{mid \text{ due to unit load at } x}$

**Practical Use:**
If we need to find the deflection at point B due to a load at point A, and it's easier to apply a unit load at B and measure deflection at A, we can do so and use Maxwell's Law.

**Important Points to Remember:**
*   Maxwell's Law is a specific instance of Betti's Theorem.
*   It is fundamental for understanding the symmetrical nature of influence in elastic structures.
*   It has significant applications in experimental structural analysis and computational methods.

---

### Practice Questions and Exercises

**Question 1 (Castigliano's Theorem I):**
A cantilever beam of length L, with flexural rigidity EI, is subjected to a uniformly distributed load of intensity $w$ over its entire length. Using Castigliano's Theorem I, find the deflection at the free end.

**Solution:**
1.  **Real System:** Cantilever beam, udl $w$ along L.
2.  **Bending Moment:** For a cantilever with udl, the bending moment at a distance $x$ from the free end is $M(x) = -\frac{wx^2}{2}$. (Let's consider the moment at a distance $x$ from the free end).
3.  **Introduce Fictitious Load:** Introduce a fictitious load $P$ at the free end in the downward direction. The bending moment becomes $M(x, P) = -\frac{wx^2}{2} - Px$.
4.  **Calculate Strain Energy:**
    $U = \int_0^L \frac{M(x, P)^2}{2EI} dx = \int_0^L \frac{(-\frac{wx^2}{2} - Px)^2}{2EI} dx$
    $U = \frac{1}{2EI} \int_0^L \left(\frac{w^2x^4}{4} + wPx^3 + P^2x^2\right) dx$
5.  **Differentiate U w.r.t. P:**
    $\frac{\partial U}{\partial P} = \frac{1}{2EI} \int_0^L (wPx^3 + P^2x^2) \cdot 2 dx$ (derivative of term inside parenthesis w.r.t P)
    $\frac{\partial U}{\partial P} = \frac{1}{EI} \int_0^L (wPx^3 + P^2x^2) dx$
6.  **Set P = 0:**
    $\delta_{free end} = \frac{1}{EI} \int_0^L (0 \cdot x^3 + 0 \cdot x^2) dx = 0$. This is incorrect.

    **Correction for Castigliano's Theorem Application:**
    We need to differentiate the strain energy with respect to the *actual* load that causes the deflection. In this case, the load is $w$. However, Castigliano's Theorem is most directly applied when a *concentrated* force is involved. For distributed loads, it's often easier to integrate the effect of infinitesimal loads, or use the principle of virtual work.

    **Alternative approach for UDL using Castigliano's Theorem (by treating udl as many point loads):**
    Consider an infinitesimal load $dw$ at a distance $\xi$ from the free end. The bending moment due to this infinitesimal load is $M(x, \xi) = -dw \cdot (\xi-x)$ for $x < \xi$. The total moment is $M(x) = \int_0^L -\frac{w(\xi)}{EI} (\xi-x) d\xi$. This becomes complicated.

    **Let's re-apply Castigliano's Theorem using a fictitious concentrated load:**
    To find the deflection at the free end due to the UDL $w$, we introduce a fictitious concentrated load $P$ at the free end.
    The bending moment $M(x, P)$ at a distance $x$ from the free end is:
    $M(x, P) = -Px - \frac{w x^2}{2}$
    $U = \int_0^L \frac{M(x, P)^2}{2EI} dx = \int_0^L \frac{(Px + \frac{w x^2}{2})^2}{2EI} dx$
    $\frac{\partial U}{\partial P} = \int_0^L \frac{2(Px + \frac{w x^2}{2}) \cdot x}{2EI} dx = \int_0^L \frac{Px^2 + \frac{w x^3}{2}}{EI} dx$
    Set $P=0$:
    $\delta_{free end} = \int_0^L \frac{\frac{w x^3}{2}}{EI} dx = \frac{w}{2EI} \int_0^L x^3 dx = \frac{w}{2EI} \left[\frac{x^4}{4}\right]_0^L$
    $\delta_{free end} = \frac{w}{2EI} \frac{L^4}{4} = \frac{wL^4}{8EI}$ (Downward)

**Question 2 (Principle of Virtual Work):**
Find the deflection at the center of a simply supported beam of length L, subjected to a concentrated load $P$ at mid-span. The beam has flexural rigidity EI.

**Solution:**
1.  **Real System:** Simply supported beam, load $P$ at mid-span.
    *   $M_{real}(x) = \frac{P}{2}x$ for $0 \le x \le L/2$.
2.  **Virtual System:** Simply supported beam, unit load (1) at mid-span.
    *   $M_{virtual}(x) = \frac{1}{2}x$ for $0 \le x \le L/2$.
3.  **Calculate Deflection:**
    $\delta_{mid} = \int_0^L \frac{M_{virtual}(x) \cdot M_{real}(x)}{EI} dx$
    $\delta_{mid} = 2 \int_0^{L/2} \frac{(\frac{1}{2}x) \cdot (\frac{P}{2}x)}{EI} dx$ (Symmetry)
    $\delta_{mid} = \frac{2}{EI} \int_0^{L/2} \frac{Px^2}{4} dx = \frac{P}{2EI} \int_0^{L/2} x^2 dx$
    $\delta_{mid} = \frac{P}{2EI} \left[\frac{x^3}{3}\right]_0^{L/2} = \frac{P}{2EI} \left(\frac{(L/2)^3}{3}\right)$
    $\delta_{mid} = \frac{P}{2EI} \frac{L^3}{24} = \frac{PL^3}{48EI}$ (Downward)

**Question 3 (Betti's Theorem / Maxwell's Law):**
Consider a simply supported beam of length L.
*   Load System 1: A load of $P$ is applied at $x=L/4$. This causes a deflection of $\delta_1$ at $x=L/2$.
*   Load System 2: A load of $P$ is applied at $x=L/2$. This causes a deflection of $\delta_2$ at $x=L/4$.

According to Betti's Theorem (or Maxwell's Law), what is the relationship between $\delta_1$ and $\delta_2$?

**Solution:**
According to Betti's Theorem, the work done by System 1 loads acting through System 2 displacements is equal to the work done by System 2 loads acting through System 1 displacements.
$P \cdot \delta_2 = P \cdot \delta_1$
Therefore, $\delta_1 = \delta_2$.
Maxwell's Law of Reciprocal Deflections states that the deflection at point B due to a unit load at point A is equal to the deflection at point A due to a unit load at point B. This directly implies that the deflection at $L/2$ due to a load $P$ at $L/4$ is equal to the deflection at $L/4$ due to an equal load $P$ at $L/2$.

---

### Summary of Key Concepts

*   **Castigliano's Theorem I:** $\delta_i = \frac{\partial U}{\partial P_i}$. Relates deflection to the derivative of strain energy.
*   **Principle of Virtual Work:** External Virtual Work = Internal Virtual Work. $\delta_{real} = \int_0^L \frac{M_{virtual}(x) \cdot M_{real}(x)}{EI} dx$.
*   **Betti's Theorem:** $\sum P_{1i} \delta_{2i} = \sum P_{2j} \delta_{1j}$. Reciprocity of work done by two load systems.
*   **Maxwell's Law of Reciprocal Deflections:** $\delta_{B \text{ due to 1 at A}} = \delta_{A \text{ due to 1 at B}}$. A specific case of Betti's Theorem for unit loads.

These energy methods provide powerful tools for analyzing beam deflections, especially in complex scenarios and for understanding the fundamental behavior of structures.
