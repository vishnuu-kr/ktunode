---
title: "Energy Principles and Energy Theorems:"
subject: "STRUCTURAL ANALYSIS - I"
module: "Module 2: Deformation Response of Statically Determinate Beams: Conjugate beam method–  Real beam and conjugate beam, boundary conditions; Applications to determinate deformations of cantilever and simply supported beams (prismatic and beams of varying cross section subjected to concentrated and uniformly distributed loads."
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810744"
status: "completed"
scrapedAt: "2026-05-20T18:41:42.350Z"
---
# Structural Analysis - I: Module 2 - Deformation Response of Statically Determinate Beams

## Topic: Energy Principles and Energy Theorems

This module explores how to determine the deformations (deflections and slopes) of statically determinate beams using various methods. This specific topic focuses on **Energy Principles and Energy Theorems**, which offer powerful and often more efficient ways to calculate these deformations compared to direct integration methods.

---

### Learning Outcomes

Upon completion of this topic, you should be able to:

1.  **Understand the fundamental concepts of strain energy and complementary energy.**
2.  **Derive and apply Castigliano's First Theorem to find displacements.**
3.  **Derive and apply Castigliano's Second Theorem to find forces (reactions/internal forces).**
4.  **Understand and apply the Principle of Virtual Work for deformations.**
5.  **Understand and apply the Principle of Minimum Potential Energy (and its relationship to virtual work).**
6.  **Recognize the advantages and limitations of energy methods.**
7.  **Apply these principles to determine deformations in simple beam structures.**

---

### 1. Strain Energy and Complementary Energy

#### 1.1 Strain Energy ($U$)

**Definition:** Strain energy is the energy stored within a deformable body as a result of external forces causing deformation. For elastic deformation, it's the work done by the internal forces to deform the body.

**Concept:** When a force $P$ acts on an elastic element and causes a displacement $\delta$, the work done is $\frac{1}{2}P\delta$. This work is stored as strain energy within the material.

**For axial forces:**
$U = \int_0^L \frac{P^2}{2AE} dA$ (for varying cross-section)
$U = \frac{P^2 L}{2AE}$ (for constant cross-section)

**For bending moments ($M$):**
For beams, the primary deformation is due to bending. The strain energy due to bending is given by:
$U = \int_0^L \frac{M^2}{2EI} dx$

*   $M$: Bending moment at a section $x$.
*   $E$: Modulus of Elasticity of the material.
*   $I$: Moment of Inertia of the cross-section at $x$.
*   $L$: Length of the beam.

**For shear forces ($V$):**
While bending is usually dominant in beams, shear deformation also contributes to strain energy:
$U = \int_0^L \frac{kV^2}{2GA} dx$
*   $V$: Shear force at a section $x$.
*   $k$: Shear correction factor (depends on the cross-section, typically $\frac{6}{5}$ for rectangular).
*   $G$: Shear Modulus of the material.
*   $A$: Cross-sectional area at $x$.

**Important Note:** For typical beam problems in Structural Analysis I, we often neglect shear strain energy unless specifically stated or the beam is very short and deep.

#### 1.2 Complementary Energy ($U^*$)

**Definition:** Complementary energy is the "dual" of strain energy. It represents the work done by the external forces on displacements, where the force is considered a function of displacement.

**Concept:** If we plot force vs. displacement, strain energy is the area under the curve. Complementary energy is the area to the left of the curve (between the force axis and the curve).

**For axial forces:**
$U^* = \int_0^L \frac{P_{max}^2}{2AE} dA$
$U^* = \frac{P_{max}^2 L}{2AE}$

**For bending moments ($M$):**
$U^* = \int_0^L \frac{M_{max}^2}{2EI} dx$

**Relationship between $U$ and $U^*$ for linear elastic materials:**
For linear elastic materials, $M$ is proportional to curvature ($M = EI \frac{d^2y}{dx^2}$). In this case, strain energy equals complementary energy.
$U = U^* = \int_0^L \frac{M^2}{2EI} dx$

---

### 2. Castigliano's First Theorem (Theorem of Least Work)

**Statement:** The partial derivative of the total strain energy of an elastic structure with respect to any external force (or displacement) is equal to the displacement of the point of application of that force in the direction of the force.

**Derivation (Conceptual):**
Consider a structure subjected to a system of external forces $P_1, P_2, ..., P_n$. The total strain energy $U$ can be expressed as a function of these forces, $U(P_1, P_2, ..., P_n)$.
If we introduce a small incremental force $\Delta P_i$, the total energy becomes $U + \Delta U$.
The work done by this incremental force $\Delta P_i$ is $\frac{1}{2} (\Delta P_i) \delta_i$ (where $\delta_i$ is the displacement due to all forces including $\Delta P_i$).
However, a more rigorous approach involves considering the total work done by the forces. The total potential energy of the system is $\Pi = U - W_{ext}$, where $W_{ext}$ is the work done by external forces.
For a system in equilibrium, $\frac{\partial \Pi}{\partial \delta_i} = 0$.
For conservative systems, $\frac{\partial U}{\partial P_i} = \delta_i$.

**Mathematical Formulation:**
For a structure with total strain energy $U$, the displacement $\delta_i$ at the point of application of force $P_i$ and in the direction of $P_i$ is given by:
$\delta_i = \frac{\partial U}{\partial P_i}$

**Application to Beams:**
The strain energy in a beam due to bending is $U = \int_0^L \frac{M(x)^2}{2EI} dx$.
If we want to find the deflection $\Delta$ at a specific point (say, where a load $P$ is applied), we need to differentiate $U$ with respect to $P$.

**Example: Deflection of a Simply Supported Beam with a Concentrated Load at Midspan.**

*   **Real Beam:** Simply supported beam of length $L$, with load $P$ at $x = L/2$.
*   **Bending Moment ($M(x)$):**
    *   $M(x) = \frac{P}{2}x$ for $0 \le x \le L/2$
    *   $M(x) = \frac{P}{2}(L-x)$ for $L/2 \le x \le L$

*   **Strain Energy ($U$):**
    We can calculate $U$ over half the beam due to symmetry.
    $U = 2 \int_0^{L/2} \frac{M(x)^2}{2EI} dx = \frac{1}{EI} \int_0^{L/2} (\frac{Px}{2})^2 dx$
    $U = \frac{1}{EI} \int_0^{L/2} \frac{P^2 x^2}{4} dx = \frac{P^2}{4EI} \left[ \frac{x^3}{3} \right]_0^{L/2}$
    $U = \frac{P^2}{4EI} \left( \frac{(L/2)^3}{3} - 0 \right) = \frac{P^2}{4EI} \frac{L^3}{24} = \frac{P^2 L^3}{96EI}$

*   **Deflection at Midspan ($\Delta$):**
    Using Castigliano's First Theorem, $\Delta = \frac{\partial U}{\partial P}$.
    $\Delta = \frac{\partial}{\partial P} \left( \frac{P^2 L^3}{96EI} \right) = \frac{2P L^3}{96EI} = \frac{P L^3}{48EI}$

**To find deflection at a point where no load is applied:**
Introduce a "dummy" load $Q$ at the desired location. Calculate the strain energy in terms of both $P$ and $Q$. Then, differentiate $U$ with respect to $Q$ and set $Q=0$.

**Example: Deflection at a random point 'c' on a simply supported beam with a midspan load P.**

*   **Real Beam:** Simply supported beam of length $L$, with load $P$ at $x = L/2$. Introduce a dummy load $Q$ at $x=c$.
*   **Reactions:**
    *   $R_A = \frac{P}{2} + \frac{Q}{2}$ (assuming $Q$ is applied at $c$)
    *   $R_B = \frac{P}{2} + \frac{Q}{2}$
*   **Bending Moment ($M(x)$):** This will be more complex as it depends on the location of $c$ and the beam segments.
    Let's consider the segment $0 \le x \le L/2$.
    If $c \le L/2$:
    For $0 \le x \le c$: $M(x) = R_A x = (\frac{P}{2} + \frac{Q}{2})x$
    For $c \le x \le L/2$: $M(x) = R_A x - Q(x-c) = (\frac{P}{2} + \frac{Q}{2})x - Q(x-c)$
    We need to express $M(x)$ over the entire beam and then integrate $U = \int_0^L \frac{M(x)^2}{2EI} dx$.
    This can become tedious with multiple loads.

---

### 3. Castigliano's Second Theorem (Theorem of Consistent Deformation)

**Statement:** For a linear elastic structure, the partial derivative of the strain energy with respect to a displacement component is equal to the force component acting at that location. It is primarily used to find forces (reactions, internal forces) when displacements are known.

**Mathematical Formulation:**
For a structure with total strain energy $U$, the force $P_i$ at the point of application of displacement $\delta_i$ and in the direction of $\delta_i$ is given by:
$P_i = \frac{\partial U}{\partial \delta_i}$

**Application to Beams:**
This theorem is less commonly used for finding *deformations* directly in simple beam problems compared to Castigliano's First Theorem or Virtual Work. It's more powerful for indeterminate structures where displacements are constrained. However, the concept of working with strain energy is fundamental.

---

### 4. Principle of Virtual Work

The Principle of Virtual Work (PVW) is a fundamental concept in structural mechanics that can be applied to both rigid bodies and deformable bodies. For deformable bodies, it's a powerful tool for calculating deflections and rotations.

#### 4.1 Basic Principle of Virtual Work for Deformable Bodies

**Statement:** If a deformable body is in equilibrium under a system of real external forces, and it undergoes a virtual displacement consistent with its constraints, then the total virtual work done by the real forces equals the total virtual strain energy developed within the body.

**Mathematical Formulation:**
$\sum (\text{Virtual Work by Real External Forces}) = \sum (\text{Virtual Strain Energy})$

**For beams, we typically use two forms:**

**Form 1: Real Forces, Virtual Displacements (for deflection)**

*   **Real System:** The actual loads and supports causing internal stresses and strains.
*   **Virtual System:** A system of *unit load* applied at the point and in the direction of the desired deflection. This unit load causes a virtual bending moment $m(x)$.

**Procedure:**
1.  **Real System:** Apply the actual loads to the beam. Determine the bending moment $M(x)$ at any section $x$ due to the real loads.
2.  **Virtual System:** Remove all real loads. Apply a virtual unit load (e.g., 1 kN) at the point where the deflection is required and in the direction of the desired deflection. Determine the virtual bending moment $m(x)$ at any section $x$ due to this unit load.
3.  **Calculate Virtual Work:** The virtual work done by the real forces is the work done by the real bending moment on the virtual curvature. This is calculated as $\int_0^L M(x) \frac{m(x)}{EI} dx$.
    *   The real moment $M(x)$ causes a curvature change of $\frac{m(x)}{EI}$ under the action of the virtual unit load.
    *   The virtual unit load at the point of deflection does work equal to $1 \times \Delta$ (where $\Delta$ is the deflection).
    *   Therefore, $1 \times \Delta = \int_0^L M(x) \frac{m(x)}{EI} dx$.

**The formula for deflection $\Delta$ at a point is:**
$\Delta = \int_0^L \frac{M(x)m(x)}{EI} dx$

*   $M(x)$: Bending moment due to actual loads.
*   $m(x)$: Bending moment due to a unit load at the point of desired deflection.

**Example: Deflection of a Simply Supported Beam with a Concentrated Load at Midspan.**

*   **Real System:** Simply supported beam of length $L$, load $P$ at $x=L/2$.
    *   $M(x) = \frac{Px}{2}$ for $0 \le x \le L/2$
    *   $M(x) = \frac{P}{2}(L-x)$ for $L/2 \le x \le L$

*   **Virtual System:** Apply a unit load (1) at midspan ($x=L/2$).
    *   $m(x) = \frac{1}{2}x$ for $0 \le x \le L/2$
    *   $m(x) = \frac{1}{2}(L-x)$ for $L/2 \le x \le L$

*   **Calculate Deflection ($\Delta$) at Midspan:**
    $\Delta = \int_0^L \frac{M(x)m(x)}{EI} dx = \frac{1}{EI} \left( \int_0^{L/2} \frac{Px}{2} \cdot \frac{x}{2} dx + \int_{L/2}^L \frac{P}{2}(L-x) \cdot \frac{1}{2}(L-x) dx \right)$
    $\Delta = \frac{1}{EI} \left( \int_0^{L/2} \frac{Px^2}{4} dx + \int_{L/2}^L \frac{P}{4}(L-x)^2 dx \right)$

    Let's evaluate the first integral:
    $\int_0^{L/2} \frac{Px^2}{4} dx = \frac{P}{4} \left[ \frac{x^3}{3} \right]_0^{L/2} = \frac{P}{4} \frac{(L/2)^3}{3} = \frac{P}{4} \frac{L^3}{24} = \frac{PL^3}{96}$

    Let's evaluate the second integral (let $u = L-x$, $du = -dx$. When $x=L/2$, $u=L/2$. When $x=L$, $u=0$):
    $\int_{L/2}^L \frac{P}{4}(L-x)^2 dx = \frac{P}{4} \int_{L/2}^0 u^2 (-du) = \frac{P}{4} \int_0^{L/2} u^2 du = \frac{P}{4} \left[ \frac{u^3}{3} \right]_0^{L/2} = \frac{P}{4} \frac{(L/2)^3}{3} = \frac{PL^3}{96}$

    Total $\Delta = \frac{1}{EI} \left( \frac{PL^3}{96} + \frac{PL^3}{96} \right) = \frac{1}{EI} \frac{2PL^3}{96} = \frac{PL^3}{48EI}$

**Form 2: Virtual Forces, Real Displacements (for slope)**

*   **Real System:** The actual loads causing internal stresses and strains.
*   **Virtual System:** A virtual unit *moment* applied at the point where the slope is required. This unit moment causes a virtual moment $m_\theta(x)$.

**Procedure:**
1.  **Real System:** Determine the bending moment $M(x)$ at any section $x$ due to the real loads.
2.  **Virtual System:** Remove all real loads. Apply a virtual unit moment (e.g., 1 kNm) at the point where the slope is required. Determine the virtual moment $m_\theta(x)$ at any section $x$ due to this unit moment.
3.  **Calculate Virtual Work:** The virtual work done by the real forces is the work done by the real moment on the virtual curvature. This is calculated as $\int_0^L \frac{M(x)}{EI} \cdot m_\theta(x) dx$.
    *   The real moment $M(x)$ causes a curvature change of $\frac{m_\theta(x)}{EI}$ under the action of the virtual unit moment.
    *   The virtual unit moment at the point of slope does work equal to $1 \times \theta$ (where $\theta$ is the slope).
    *   Therefore, $1 \times \theta = \int_0^L \frac{M(x)m_\theta(x)}{EI} dx$.

**The formula for slope $\theta$ at a point is:**
$\theta = \int_0^L \frac{M(x)m_\theta(x)}{EI} dx$

*   $M(x)$: Bending moment due to actual loads.
*   $m_\theta(x)$: Bending moment due to a unit moment at the point of desired slope.

**Example: Slope of a Simply Supported Beam with a Concentrated Load at Midspan.**

*   **Real System:** Same as before. $M(x)$ values are the same.
*   **Virtual System:** Apply a unit moment (1) at midspan ($x=L/2$).
    *   For $0 \le x \le L/2$: $m_\theta(x) = \frac{1}{2} \times 1 = \frac{1}{2}$ (This is the moment at section $x$ due to the unit moment at $L/2$, considering reactions).
    *   For $L/2 \le x \le L$: $m_\theta(x) = \frac{1}{2} \times 1 = \frac{1}{2}$
    *   Wait, this isn't right for a unit moment. Let's re-evaluate the virtual system for a unit moment.
    *   Apply a unit moment $M_0 = 1$ at $x=L/2$.
    *   Reactions: $R_A = -1/L$, $R_B = +1/L$. (Negative implies downward for $R_A$).
    *   For $0 \le x \le L/2$: $m_\theta(x) = R_A x = (-1/L)x = -x/L$
    *   For $L/2 \le x \le L$: $m_\theta(x) = R_A x + M_0 = (-1/L)x + 1$

*   **Calculate Slope ($\theta$) at Midspan:**
    $\theta = \int_0^L \frac{M(x)m_\theta(x)}{EI} dx = \frac{1}{EI} \left( \int_0^{L/2} \frac{Px}{2} (-\frac{x}{L}) dx + \int_{L/2}^L \frac{P}{2}(L-x) (1-\frac{x}{L}) dx \right)$

    First integral:
    $\int_0^{L/2} -\frac{Px^2}{2L} dx = -\frac{P}{2L} \left[ \frac{x^3}{3} \right]_0^{L/2} = -\frac{P}{2L} \frac{(L/2)^3}{3} = -\frac{P}{2L} \frac{L^3}{24} = -\frac{PL^2}{48}$

    Second integral:
    $\int_{L/2}^L \frac{P}{2}(L-x) \frac{L-x}{L} dx = \int_{L/2}^L \frac{P}{2L}(L-x)^2 dx$
    Let $u = L-x$, $du = -dx$. Limits: $x=L/2 \implies u=L/2$, $x=L \implies u=0$.
    $\frac{P}{2L} \int_{L/2}^0 u^2 (-du) = \frac{P}{2L} \int_0^{L/2} u^2 du = \frac{P}{2L} \left[ \frac{u^3}{3} \right]_0^{L/2} = \frac{P}{2L} \frac{(L/2)^3}{3} = \frac{P}{2L} \frac{L^3}{24} = \frac{PL^2}{48}$

    Total $\theta = \frac{1}{EI} \left( -\frac{PL^2}{48} + \frac{PL^2}{48} \right) = 0$. This is correct, the slope at the midspan of a simply supported beam with a symmetric load is zero.

    **To find slope at an end (e.g., end A):**
    Apply a unit moment at A (where $x=0$).
    *   Virtual System: Apply $M_0 = 1$ at $x=0$.
        *   $m_\theta(x) = \frac{1}{L} x$ (moment at $x$ due to reaction $1/L$ at B from unit moment at A) -- This is incorrect. Let's rethink the virtual moment system.
        *   Apply a unit moment $M_0 = 1$ at $x=0$.
        *   Reactions: $R_A = +1/L$ (anticlockwise), $R_B = -1/L$ (anticlockwise, effectively clockwise).
        *   For $0 \le x \le L$: $m_\theta(x) = M_0 + R_A x = 1 + (1/L)x$ if you consider it as an applied moment and reaction, or from the shear force diagram.
        *   Let's consider the moment distribution:
        *   Apply $M_0=1$ at $x=0$. This induces a moment $M_0$ at $x=0$.
        *   Virtual moment $m_\theta(x)$ from a unit moment at $x=0$ should be $1 - x/L$ (for anticlockwise moment being positive). Let's check this.
        *   The moment at any section $x$ from a unit moment at $x=0$ is $m_\theta(x) = 1 \cdot \frac{L-x}{L}$.
        *   This is incorrect too.
        *   Let's use the definition of virtual moment from a unit moment.
        *   Apply a unit moment at A. The reaction at B will be $-1/L$. The moment at section $x$ is $m_\theta(x) = (\text{Moment at support A}) + R_A \cdot x = 1 + (-1/L)x$. This is for an anticlockwise moment.
        *   Let's consider anticlockwise as positive.
        *   For $0 \le x \le L$: $m_\theta(x) = 1 - \frac{x}{L}$ (This is the moment induced by a unit anticlockwise moment at A, which is more like a fixed-end moment scenario).
        *   Let's think about the shear: unit moment at A, reaction at A is $+1/L$, reaction at B is $-1/L$.
        *   The moment at section $x$: $m_\theta(x) = (1/L) x$ (if the moment is applied at B). If applied at A, $m_\theta(x) = 1 \cdot \frac{L-x}{L}$ is not correct.
        *   Okay, standard approach:
        *   Virtual system: Apply unit moment $M_0=1$ at support A (anticlockwise).
        *   Virtual reactions: $R_A = +1/L$ (anticlockwise), $R_B = -1/L$ (anticlockwise, meaning clockwise).
        *   Virtual moment $m_\theta(x)$ at section $x$:
            *   $m_\theta(x) = (\text{moment applied at A}) - (\text{moment due to } R_A \text{ for } 0 \le x \le L) = 1 - (1/L)x$. This is the moment at section $x$ from the applied unit moment and its own reaction.

        *   Now integrate: $\theta_A = \int_0^L \frac{M(x)m_\theta(x)}{EI} dx$
            $\theta_A = \frac{1}{EI} \left( \int_0^{L/2} \frac{Px}{2} (1-\frac{x}{L}) dx + \int_{L/2}^L \frac{P}{2}(L-x) (1-\frac{x}{L}) dx \right)$
            This integral will give a non-zero value, representing the slope at A.

#### 4.2 Virtual Work and Strain Energy

The PVW for deformable bodies can be seen as equating the external virtual work to the internal virtual strain energy.
External Virtual Work = $\int (\text{real stress}) \cdot (\text{virtual strain}) dV + \int (\text{real force}) \cdot (\text{virtual displacement}) ds$
Internal Virtual Strain Energy = $\int (\text{virtual stress}) \cdot (\text{real strain}) dV$

For beams, focusing on bending:
External Virtual Work = $\int M(x) \cdot \frac{m(x)}{EI} dx$ (if using virtual load) or $\int \frac{M(x)}{EI} \cdot m_\theta(x) dx$ (if using virtual moment)
Internal Virtual Strain Energy = $\int \frac{m(x)}{EI} \cdot M(x) dx$ (if using virtual load) or $\int \frac{m_\theta(x)}{EI} \cdot M(x) dx$ (if using virtual moment).
These are the same expressions derived above.

---

### 5. Principle of Minimum Potential Energy (PMPE)

**Definition:** For a conservative elastic system in equilibrium, the total potential energy is at a minimum.

**Total Potential Energy ($\Pi$):**
$\Pi = U + V$
where:
*   $U$: Strain Energy
*   $V$: Potential Energy of external forces (negative of the work done by external forces). For conservative forces (like gravity and applied loads), $V = -\sum P_i \delta_i$.

**Mathematical Formulation:**
For equilibrium, the variation of the total potential energy is zero:
$\delta \Pi = 0$
$\delta U - \delta (\sum P_i \delta_i) = 0$

**Relationship to Castigliano's First Theorem:**
If we express $U$ in terms of loads $P_i$, and $\delta_i$ in terms of loads $P_i$, we can show that $\frac{\partial U}{\partial P_i} = \delta_i$.
$\Pi(P_i) = U(P_i) - \sum P_i \delta_i(P_i)$
$\frac{\partial \Pi}{\partial P_i} = \frac{\partial U}{\partial P_i} - \sum P_j \frac{\partial \delta_j}{\partial P_i} - \delta_i$

For a system of external forces, the work done by these forces is $W_{ext} = \sum P_i \delta_i$.
If we consider a system of unit loads causing displacements, and these loads are the variables:
$\Pi(\delta_i) = U(\delta_i) - \sum P_i \delta_i$
$\frac{\partial \Pi}{\partial \delta_i} = \frac{\partial U}{\partial \delta_i} - P_i$
For equilibrium, $\frac{\partial \Pi}{\partial \delta_i} = 0 \implies \frac{\partial U}{\partial \delta_i} = P_i$. This is Castigliano's Second Theorem.

**Application to Beams:**
PMPE can be used to derive beam bending equations or to solve for displacements. For simple beam deflection calculations, PVW (using a unit load) is generally more direct and less abstract.

---

### 6. Advantages and Limitations of Energy Methods

**Advantages:**

*   **Efficiency:** Can be significantly faster than direct integration, especially for complex load cases or when finding deflection at multiple points.
*   **Versatility:** Applicable to various types of structures and loading conditions.
*   **Generalization:** Forms the basis for more advanced structural analysis techniques (e.g., finite element methods).
*   **Finding forces from displacements:** Castigliano's Second Theorem is particularly useful for indeterminate structures.
*   **Can handle varying cross-sections:** The integral forms easily accommodate changes in $EI$.

**Limitations:**

*   **Requires knowledge of internal forces/moments:** You still need to determine $M(x)$ for the real system.
*   **Integration can be complex:** For irregular load patterns or beam geometries, the integration might be challenging. Numerical integration or software might be needed.
*   **Linear Elasticity Assumption:** Most energy theorems are derived assuming linear elastic material behavior.
*   **Shear Deformation:** Neglecting shear deformation can lead to inaccuracies in short, deep beams.
*   **Conceptual Understanding:** Can be more abstract than direct methods.

---

### 7. Applications to Determinate Deformations

Energy methods are widely applicable to determinate beams:

*   **Cantilever Beams:**
    *   **Prismatic:** Straightforward integration of $M(x)^2/(2EI)$.
    *   **Varying Cross-section:** The integral form $\int \frac{M(x)^2}{2EI(x)} dx$ accounts for $I(x)$.
    *   **Loads:** Concentrated, distributed, moments. Use PVW with appropriate unit loads/moments.

*   **Simply Supported Beams:**
    *   **Prismatic:** As demonstrated in examples.
    *   **Varying Cross-section:** Essential to include $I(x)$ in the integral.
    *   **Loads:** Concentrated, distributed, moments. PVW is very effective.

**Example: Deflection of a Cantilever Beam with Uniformly Distributed Load (UDL).**

*   **Real Beam:** Cantilever of length $L$, UDL of $w$ per unit length.
*   **Bending Moment ($M(x)$):** At a distance $x$ from the free end, the load on length $(L-x)$ is $w(L-x)$. The moment is:
    $M(x) = -w(L-x) \cdot \frac{L-x}{2} = -\frac{w}{2}(L-x)^2$ (assuming downward load, moment causing tension on top is negative).

*   **Strain Energy ($U$):**
    $U = \int_0^L \frac{M(x)^2}{2EI} dx = \int_0^L \frac{1}{2EI} \left(-\frac{w}{2}(L-x)^2\right)^2 dx$
    $U = \frac{w^2}{8EI} \int_0^L (L-x)^4 dx$
    Let $u = L-x$, $du = -dx$. Limits: $x=0 \implies u=L$, $x=L \implies u=0$.
    $U = \frac{w^2}{8EI} \int_L^0 u^4 (-du) = \frac{w^2}{8EI} \int_0^L u^4 du = \frac{w^2}{8EI} \left[ \frac{u^5}{5} \right]_0^L = \frac{w^2 L^5}{40EI}$

*   **Deflection at the Free End ($\Delta$):**
    Use Castigliano's First Theorem. We need to introduce a dummy load $Q$ at the free end.
    *   If a load $Q$ is at the free end, $M(x) = Q(L-x) - \frac{w}{2}(L-x)^2$.
    *   $U = \int_0^L \frac{1}{2EI} \left( Q(L-x) - \frac{w}{2}(L-x)^2 \right)^2 dx$
    *   Differentiate with respect to $Q$:
        $\Delta = \frac{\partial U}{\partial Q} = \int_0^L \frac{1}{2EI} \cdot 2 \left( Q(L-x) - \frac{w}{2}(L-x)^2 \right) \cdot (L-x) dx$
        $\Delta = \frac{1}{EI} \int_0^L \left( Q(L-x)^2 - \frac{w}{2}(L-x)^3 \right) dx$
    *   Now set $Q=0$:
        $\Delta = -\frac{1}{EI} \int_0^L \frac{w}{2}(L-x)^3 dx$
        Let $u = L-x$, $du = -dx$.
        $\Delta = -\frac{w}{2EI} \int_L^0 u^3 (-du) = -\frac{w}{2EI} \int_0^L u^3 du = -\frac{w}{2EI} \left[ \frac{u^4}{4} \right]_0^L = -\frac{w L^4}{8EI}$
        The negative sign indicates downward deflection. The magnitude is $\frac{wL^4}{8EI}$.

    *   Alternatively, using PVW (unit load at free end):
        *   Real Moment $M(x) = -\frac{w}{2}(L-x)^2$.
        *   Virtual Moment $m(x) = -1 \cdot (L-x)$ (unit load at free end, moment at $x$ from free end).
        *   $\Delta = \int_0^L \frac{M(x)m(x)}{EI} dx = \int_0^L \frac{1}{EI} \left(-\frac{w}{2}(L-x)^2\right) \left(-(L-x)\right) dx$
        *   $\Delta = \frac{w}{2EI} \int_0^L (L-x)^3 dx$
        *   Again, let $u=L-x$, $du=-dx$.
        *   $\Delta = \frac{w}{2EI} \int_L^0 u^3 (-du) = \frac{w}{2EI} \int_0^L u^3 du = \frac{w}{2EI} \left[ \frac{u^4}{4} \right]_0^L = \frac{w L^4}{8EI}$.

---

### Practice Questions/Exercises

1.  **Simply Supported Beam with UDL:** A simply supported beam of length $L$ is subjected to a uniformly distributed load of $w$ per unit length over its entire span. Using the Principle of Virtual Work, derive the expression for the maximum deflection at the center of the beam. Assume a prismatic beam.
    *(Answer: $\Delta_{max} = \frac{5wL^4}{384EI}$)*

2.  **Cantilever Beam with Concentrated Load:** A cantilever beam of length $L$ has a concentrated load $P$ at its free end. Using Castigliano's First Theorem, derive the expression for the deflection at the free end. Assume a prismatic beam.
    *(Answer: $\Delta = \frac{PL^3}{3EI}$)*

3.  **Slope Calculation:** For the simply supported beam with a concentrated load $P$ at midspan (as described in the examples), calculate the slope at support A using the Principle of Virtual Work.
    *(Answer: $\theta_A = \frac{PL^2}{16EI}$)*

4.  **Varying Cross-section:** Consider a simply supported beam of length $L$ with a moment of inertia $I(x) = I_0 (1 - x/L)$, where $x$ is measured from the left support. If a concentrated load $P$ is applied at midspan, conceptually explain how you would use the Principle of Virtual Work to find the deflection at midspan. What would be the challenge?
    *(Hint: The bending moment due to the unit load would be the same, but the integration would involve $1/I(x)$.)*

5.  **Conceptual Question:** When would you prefer using Castigliano's First Theorem over the Principle of Virtual Work for finding beam deflections, and vice versa?

---

### Important Points to Remember

*   **Strain Energy ($U$):** Stored energy due to deformation, primarily bending in beams. $U = \int_0^L \frac{M^2}{2EI} dx$.
*   **Castigliano's First Theorem:** $\delta_i = \frac{\partial U}{\partial P_i}$. Used to find displacement from known loads.
*   **Principle of Virtual Work (PVW) for Deflection:** $\Delta = \int_0^L \frac{M(x)m(x)}{EI} dx$. Requires a real moment $M(x)$ and a virtual moment $m(x)$ from a unit load.
*   **Principle of Virtual Work (PVW) for Slope:** $\theta = \int_0^L \frac{M(x)m_\theta(x)}{EI} dx$. Requires a real moment $M(x)$ and a virtual moment $m_\theta(x)$ from a unit moment.
*   **Dummy Load Technique:** Introduce a virtual load $Q$ at the point of desired deflection, calculate $U$, then find $\partial U / \partial Q$ and set $Q=0$.
*   **Sign Conventions:** Be consistent with your sign conventions for bending moments.
*   **Prismatic vs. Varying Cross-section:** For varying $I$, the integration must include $I(x)$.

---
