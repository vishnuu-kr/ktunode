---
title: "Theorem of virtual work"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 2: Analysis of strain"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109fe"
status: "completed"
scrapedAt: "2026-05-20T18:42:39.100Z"
---
# Advanced Solid Mechanics - Module 2: Analysis of Strain

## Topic: Theorem of Virtual Work

This module delves into the concept of strain and its analysis. The Theorem of Virtual Work is a fundamental principle that provides powerful tools for analyzing the behavior of deformable bodies, particularly in relating internal forces and deformations to external loads.

---

### Learning Outcomes:

Upon successful completion of this topic, you should be able to:

1.  **State and explain the Principle of Virtual Work for rigid bodies and elastic bodies.**
2.  **Derive the Principle of Virtual Work from the equilibrium equations and the constitutive relationships (Hooke's Law).**
3.  **Apply the Principle of Virtual Work to solve problems involving equilibrium of deformable bodies.**
4.  **Apply the Principle of Virtual Work to determine displacements and rotations in statically determinate and indeterminate structures.**
5.  **Understand and apply the concept of complementary virtual work.**
6.  **Relate the Principle of Virtual Work to other energy methods in mechanics.**

---

### 1. The Principle of Virtual Work (PVW)

The Principle of Virtual Work is a statement about the equilibrium of a body. It's based on the idea that if a body is in equilibrium, the total work done by all external forces and internal forces in any *virtual* displacement is zero.

#### 1.1 Virtual Displacement

*   **Definition:** A virtual displacement is an *imaginary*, infinitesimal displacement that is *consistent with the constraints* of the body but is *not caused by actual applied forces*. It's a hypothetical change in configuration.
*   **Key Characteristics:**
    *   It's infinitesimally small ($\delta \mathbf{u}$).
    *   It's consistent with the boundary conditions (e.g., if a point is fixed, its virtual displacement is zero).
    *   It's independent of time.

#### 1.2 Work Done by Forces

Work done by a force $\mathbf{F}$ during a displacement $\mathbf{u}$ is given by $\delta W = \mathbf{F} \cdot \delta \mathbf{u}$.

#### 1.3 Principle of Virtual Work for Rigid Bodies

*   **Statement:** If a rigid body is in equilibrium, the total virtual work done by all external forces and all internal forces (which arise from the interaction between particles within the body) is zero for any arbitrary virtual displacement consistent with the body's constraints.
*   **Mathematical Form:**
    $$\delta W_{ext} + \delta W_{int} = 0$$
    Where:
    *   $\delta W_{ext}$: Virtual work done by external forces (applied forces, reactions).
    *   $\delta W_{int}$: Virtual work done by internal forces (stresses, couples).

*   **For Rigid Bodies, Internal Forces Do No Net Virtual Work:** In a rigid body, the internal forces are self-equilibrating. For any virtual displacement, the internal forces acting on one particle are balanced by the internal forces acting on an adjacent particle. Thus, the sum of the work done by internal forces over the entire body is zero.
    $$\delta W_{int} = 0$$
*   **Simplified Form for Rigid Bodies:** The principle reduces to the condition that the total virtual work done by *external forces* is zero for any virtual displacement.
    $$\delta W_{ext} = 0$$
*   **Application:** This is a powerful method for analyzing the equilibrium of rigid bodies, especially in complex systems with linkages and constraints. It allows us to determine unknown forces or reactions without explicitly considering equilibrium equations for every component.

#### 1.4 Principle of Virtual Work for Elastic Bodies (or Deformable Bodies)

*   **Statement:** If an elastic body is in equilibrium under a set of applied forces, the total virtual work done by the *external forces* is equal to the virtual work done by the *internal stresses* (or internal forces) acting through the corresponding virtual strains.
*   **Mathematical Form (Equilibrium Form):**
    $$\delta W_{ext} = \delta W_{int}$$
    This equation relates the external work to the internal work.

*   **Internal Virtual Work ($\delta W_{int}$):** This represents the work done by the internal stresses acting through the virtual strains. For a continuous body, it's expressed as an integral over the volume of the body:
    $$\delta W_{int} = \int_V \boldsymbol{\sigma} : \delta \boldsymbol{\epsilon} \, dV$$
    Where:
    *   $\boldsymbol{\sigma}$: The stress tensor.
    *   $\delta \boldsymbol{\epsilon}$: The virtual strain tensor, which is the gradient of the virtual displacement field $\delta \mathbf{u}$ ($\delta \boldsymbol{\epsilon} = \frac{1}{2}(\nabla(\delta \mathbf{u}) + (\nabla(\delta \mathbf{u}))^T)$).
    *   The colon denotes the double dot product of tensors.

*   **External Virtual Work ($\delta W_{ext}$):** This is the work done by the *actual* applied forces ($\mathbf{P}$ on surfaces of area $A$, body forces $\mathbf{f}_b$ per unit volume, and concentrated forces $\mathbf{F}_i$ at points) acting through the *virtual* displacements $\delta \mathbf{u}$:
    $$\delta W_{ext} = \int_A \mathbf{P} \cdot \delta \mathbf{u} \, dA + \int_V \mathbf{f}_b \cdot \delta \mathbf{u} \, dV + \sum_i \mathbf{F}_i \cdot \delta \mathbf{u}_i$$

*   **Connection to Equilibrium:** The PVW for deformable bodies is essentially a restatement of the equilibrium equations. If the body is in equilibrium, any virtual displacement consistent with constraints will satisfy this equation. Conversely, if this equation holds for all admissible virtual displacements, the body is in equilibrium.

---

### 2. Derivation of the Principle of Virtual Work

The PVW for deformable bodies can be derived from the equilibrium equations and the definition of stress and strain.

Let's consider a body in equilibrium under external forces. The equilibrium equations in terms of stresses are:
1.  **Cauchy's Equation of Motion (without inertia):**
    $$\nabla \cdot \boldsymbol{\sigma} + \mathbf{f}_b = 0$$
    Where $\boldsymbol{\sigma}$ is the stress tensor and $\mathbf{f}_b$ are the body forces per unit volume.

2.  **Boundary Conditions:**
    *   On the surface $S_t$: $\boldsymbol{\sigma} \cdot \mathbf{n} = \mathbf{P}$ (where $\mathbf{P}$ is the traction vector).
    *   On the surface $S_u$: $\mathbf{u} = \mathbf{0}$ (or prescribed displacements).

Now, let's consider a virtual displacement field $\delta \mathbf{u}$. We can multiply Cauchy's equation of motion by the virtual displacement $\delta \mathbf{u}$ and integrate over the volume $V$:

$$\int_V (\nabla \cdot \boldsymbol{\sigma} + \mathbf{f}_b) \cdot \delta \mathbf{u} \, dV = 0$$
$$\int_V (\nabla \cdot \boldsymbol{\sigma}) \cdot \delta \mathbf{u} \, dV + \int_V \mathbf{f}_b \cdot \delta \mathbf{u} \, dV = 0$$

We use the vector identity: $\nabla \cdot (\mathbf{A} \cdot \mathbf{B}) = (\nabla \cdot \mathbf{A}) \cdot \mathbf{B} + \mathbf{A} : \nabla \mathbf{B}$ (where $\mathbf{A}$ is a tensor and $\mathbf{B}$ is a vector).
Rearranging this, we get: $(\nabla \cdot \boldsymbol{\sigma}) \cdot \delta \mathbf{u} = \nabla \cdot (\boldsymbol{\sigma} \cdot \delta \mathbf{u}) - \boldsymbol{\sigma} : \nabla (\delta \mathbf{u})$.

Substitute this back into the equation:
$$\int_V \left( \nabla \cdot (\boldsymbol{\sigma} \cdot \delta \mathbf{u}) - \boldsymbol{\sigma} : \nabla (\delta \mathbf{u}) \right) \, dV + \int_V \mathbf{f}_b \cdot \delta \mathbf{u} \, dV = 0$$

Using the divergence theorem for vector fields (Gauss's theorem), $\int_V \nabla \cdot \mathbf{q} \, dV = \int_S \mathbf{q} \cdot \mathbf{n} \, dS$:
$$\int_S (\boldsymbol{\sigma} \cdot \delta \mathbf{u}) \cdot \mathbf{n} \, dS - \int_V \boldsymbol{\sigma} : \nabla (\delta \mathbf{u}) \, dV + \int_V \mathbf{f}_b \cdot \delta \mathbf{u} \, dV = 0$$

Note that $\nabla (\delta \mathbf{u})$ is related to the virtual strain tensor $\delta \boldsymbol{\epsilon}$: $\delta \boldsymbol{\epsilon} = \frac{1}{2}(\nabla (\delta \mathbf{u}) + (\nabla (\delta \mathbf{u}))^T)$.
So, $\boldsymbol{\sigma} : \nabla (\delta \mathbf{u}) = \boldsymbol{\sigma} : \delta \boldsymbol{\epsilon}$ (since $\boldsymbol{\sigma}$ is symmetric, $\boldsymbol{\sigma} : (\nabla (\delta \mathbf{u}))^T = \boldsymbol{\sigma} : \nabla (\delta \mathbf{u})$).

The surface integral is over the entire boundary of the body, which can be split into surfaces where tractions are prescribed ($S_t$) and where displacements are prescribed ($S_u$).
The traction vector is $\mathbf{P} = \boldsymbol{\sigma} \cdot \mathbf{n}$.

$$\int_{S_t} (\boldsymbol{\sigma} \cdot \delta \mathbf{u}) \cdot \mathbf{n} \, dS + \int_{S_u} (\boldsymbol{\sigma} \cdot \delta \mathbf{u}) \cdot \mathbf{n} \, dS - \int_V \boldsymbol{\sigma} : \delta \boldsymbol{\epsilon} \, dV + \int_V \mathbf{f}_b \cdot \delta \mathbf{u} \, dV = 0$$

On the surface $S_u$, the virtual displacement $\delta \mathbf{u}$ is zero. Therefore, the second surface integral is zero: $\int_{S_u} (\boldsymbol{\sigma} \cdot \delta \mathbf{u}) \cdot \mathbf{n} \, dS = 0$.

$$\int_{S_t} \mathbf{P} \cdot \delta \mathbf{u} \, dS - \int_V \boldsymbol{\sigma} : \delta \boldsymbol{\epsilon} \, dV + \int_V \mathbf{f}_b \cdot \delta \mathbf{u} \, dV = 0$$

Rearranging this equation gives:
$$\int_{S_t} \mathbf{P} \cdot \delta \mathbf{u} \, dS + \int_V \mathbf{f}_b \cdot \delta \mathbf{u} \, dV = \int_V \boldsymbol{\sigma} : \delta \boldsymbol{\epsilon} \, dV$$

The left-hand side is the total virtual work done by external forces ($\delta W_{ext}$), and the right-hand side is the total virtual work done by internal stresses ($\delta W_{int}$).
This derivation confirms the Principle of Virtual Work for deformable bodies.

---

### 3. Application of the Principle of Virtual Work to Problems of Equilibrium

The PVW can be used to solve for unknown forces or reactions in statically determinate and indeterminate structures.

#### 3.1 Equilibrium Problems

In equilibrium problems, we typically apply the PVW by assuming a virtual displacement that helps us isolate and solve for an unknown force or reaction.

**Key Strategy:**
1.  **Establish Equilibrium:** Assume the body is in equilibrium.
2.  **Introduce a Virtual Displacement:** Choose a virtual displacement field $\delta \mathbf{u}$ that is consistent with the constraints and is specifically designed to isolate the unknown force/reaction. For example, if you want to find a reaction force $R_A$, you would choose a virtual displacement $\delta \mathbf{u}$ that is zero everywhere except at point A, where it has a non-zero component in the direction of $R_A$.
3.  **Calculate External Virtual Work ($\delta W_{ext}$):** This is the work done by the *actual* applied loads and the unknown force/reaction through the *virtual* displacement.
4.  **Calculate Internal Virtual Work ($\delta W_{int}$):** This is the work done by the *actual* internal stresses through the *virtual* strains caused by the virtual displacement.
5.  **Equate $\delta W_{ext}$ and $\delta W_{int}$:** Solve the resulting equation for the unknown.

**Example:** Consider a simply supported beam of length $L$ with a concentrated load $P$ at mid-span. We want to find the vertical reaction $R_A$ at the left support.

1.  **Body:** Simply supported beam.
2.  **Constraints:** Pin support at A (no vertical or horizontal displacement), roller support at B (no vertical displacement).
3.  **Equilibrium:** Assume the beam is in equilibrium.
4.  **Virtual Displacement:** Imagine a small virtual downward displacement $\delta v$ at point A. Since A is a pin support, the virtual displacement $\delta u_A = (\delta u_x, \delta v) = (0, \delta v)$. Due to the rigid body nature of the virtual displacement itself (before considering deformation), this would cause a rotation of the beam. For simplicity, let's consider a virtual *rigid body* rotation about point B by an angle $\delta \theta$. This means $\delta u_B = 0$ (roller) and $\delta u_A$ will have a component in the direction of $R_A$. If we rotate about B by $\delta \theta$ counter-clockwise, point A moves upwards by $L \delta \theta$. So, $\delta u_A = (0, L \delta \theta)$.

    *   **Let's use a virtual displacement that isolates $R_A$ directly.** Imagine a virtual downward displacement $\delta v_A$ at A.
        *   $\delta u_A = (0, \delta v_A)$.
        *   At mid-span (L/2), the displacement would be $\delta v_{L/2} = \frac{1}{2} \delta v_A$ (assuming linear virtual displacement, which is valid for rigid body motion).
        *   At B, the displacement is $\delta v_B = 0$.

5.  **Calculate External Virtual Work ($\delta W_{ext}$):**
    *   Work done by $R_A$ (acting upwards): $R_A \cdot (-\delta v_A) = -R_A \delta v_A$.
    *   Work done by load $P$ (acting downwards at L/2): $P \cdot (-\delta v_{L/2}) = P \cdot (-\frac{1}{2} \delta v_A) = -\frac{1}{2} P \delta v_A$.
    *   Work done by reaction $R_B$ (acting upwards at B): $R_B \cdot (0) = 0$.
    *   Total $\delta W_{ext} = -R_A \delta v_A - \frac{1}{2} P \delta v_A$.

6.  **Calculate Internal Virtual Work ($\delta W_{int}$):**
    For a beam, the internal work is done by the internal shear forces and bending moments acting through the virtual shear strains and virtual bending strains.
    $$\delta W_{int} = \int_0^L (q_s(x) \delta \gamma(x) + m_b(x) \delta \kappa(x)) \, dx$$
    Where $q_s$ is shear force, $\delta \gamma$ is virtual shear strain, $m_b$ is bending moment, and $\delta \kappa$ is virtual curvature change.

    *   **Crucial Insight:** For *rigid body* virtual displacements, there are no internal deformations (strains). Therefore, the internal virtual work done by stresses is zero: $\delta W_{int} = 0$. This is the key simplification when applying PVW to find reactions.

7.  **Equate and Solve:**
    $\delta W_{ext} = \delta W_{int}$
    $-R_A \delta v_A - \frac{1}{2} P \delta v_A = 0$
    $-R_A - \frac{1}{2} P = 0$
    $R_A = -\frac{1}{2} P$

    **Wait! There's a sign convention issue or a misunderstanding of the virtual displacement.**
    The principle states: "the total virtual work done by the external forces is equal to the virtual work done by the internal stresses acting through the corresponding virtual strains."

    Let's re-evaluate the external virtual work. If $R_A$ acts *upwards* and the virtual displacement at A is *downwards* ($\delta v_A$), the work done by $R_A$ is $R_A \cdot (-\delta v_A)$. This is correct.

    The mistake is assuming $\delta W_{int} = 0$ *always* applies when solving for reactions. While for *rigid body* displacements, internal strains are zero, the principle of virtual work for *deformable bodies* *does* involve internal work.

    **Let's use a different approach for beams that is more common:** The Principle of Virtual Forces or the Theorem of Virtual Displacements.

    **The PVW is more commonly stated in two forms:**
    *   **Principle of Virtual Displacements (for Deformable Bodies):** If a body is in equilibrium under external forces, the work done by these external forces during a *virtual displacement* consistent with the constraints is equal to the internal strain energy developed during that virtual displacement.
        $\delta W_{ext} = \delta U_{int}$
        Where $\delta U_{int} = \int_V \boldsymbol{\sigma} : \delta \boldsymbol{\epsilon} \, dV$.

    *   **Principle of Virtual Forces (for Deformable Bodies):** If a body undergoes a *real deformation* due to external forces, the work done by a system of *virtual forces* (which are in equilibrium) acting through the *real displacements* is equal to the internal virtual strain energy developed by the virtual forces acting through the real virtual strains.
        $\delta W_{ext, virtual} = \delta U_{int, virtual}$
        Where $\delta W_{ext, virtual} = \int_A \mathbf{P}_{virtual} \cdot \mathbf{u}_{real} \, dA + \int_V \mathbf{f}_{b, virtual} \cdot \mathbf{u}_{real} \, dV + \sum_i \mathbf{F}_{i, virtual} \cdot \mathbf{u}_{real, i}$
        and $\delta U_{int, virtual} = \int_V \boldsymbol{\sigma}_{virtual} : \boldsymbol{\epsilon}_{real} \, dV$.

    **For finding reactions, the Principle of Virtual Forces is more direct.**

---

### 3.2 Principle of Virtual Forces (for Deformable Bodies) - The Work-Energy Theorem Analogue

This is often what is meant by "solving equilibrium problems using PVW".

*   **Statement:** The work done by a system of *virtual forces*, which are in equilibrium, acting through the *real displacements* that occur in a structure due to the *actual loads*, is equal to the internal virtual strain energy developed by the *virtual forces* acting through the *real virtual strains*.

*   **Mathematical Form:**
    $$\sum_i F_{i, virtual} \cdot u_{i, real} + \int_A P_{virtual} \cdot u_{real} \, dA + \int_V f_{b, virtual} \cdot u_{real} \, dV = \int_V \sigma_{virtual} : \epsilon_{real} \, dV$$
    The left side is the external virtual work, and the right side is the internal virtual work.

*   **How to use it for reactions:**
    1.  **Introduce a "cut" or a release:** To isolate the unknown reaction, imagine removing the constraint that provides that reaction. This creates a "free body" of the structure, but now it is statically indeterminate with respect to the removed constraint.
    2.  **Apply Virtual Forces:** Apply a *unit virtual force* in the direction of the unknown reaction at the location where the constraint was removed. Also apply a *unit virtual moment* if the unknown is a moment. These virtual forces must be in equilibrium *with themselves* (they form a self-equilibrating system).
    3.  **Determine Real Displacements:** The real displacements $u_{real}$ are caused by the *actual* applied loads on the original structure. This is the challenging part if you don't have methods to calculate real displacements yet.
    4.  **Determine Virtual Strains:** The virtual strains $\epsilon_{real}$ are caused by the *virtual forces* applied in step 2.
    5.  **Equate External Virtual Work and Internal Virtual Work:**
        *   **External Virtual Work:** The work done by the *unit virtual force* acting through the *real displacement* at that point. If the unknown is $R_A$ and the real displacement at A is $u_A$, then $\delta W_{ext, virtual} = 1 \cdot u_A$.
        *   **Internal Virtual Work:** This is the integral of the work done by the virtual stresses (due to the unit virtual force) acting through the real strains (due to the actual loads). $\delta U_{int, virtual} = \int_V \sigma_{virtual} : \epsilon_{real} \, dV$. For beams, this simplifies to $\int_0^L \frac{m_{virtual} m_{real}}{EI} \, dx$ (for bending) and potentially terms for shear.

*   **Example: Simply Supported Beam with load P at mid-span, find $R_A$.**

    1.  **Remove Constraint:** Remove the pin support at A. The beam is now a cantilever with load $P$ at mid-span, and it will deflect downwards at the free end (where A was).
    2.  **Apply Virtual Forces:** Apply a *unit upward virtual force* ($F_{virtual}=1$) at point A. This creates a system of virtual forces that is in equilibrium by itself (the unit force at A and an equal and opposite unit force at the location of the roller support B, or by internal reactions if we consider the beam as a free body). More simply, we apply a unit upward force at A and an equal and opposite downward force at B, which is a self-equilibrating system.
    3.  **Real Displacements ($u_{real}$):** The actual load $P$ at mid-span causes a downward displacement $u_A^{real}$ at point A. For a simply supported beam with load $P$ at mid-span, the deflection at the center is $u_{L/2}^{real} = \frac{PL^3}{48EI}$. Since the reaction is at the support, we need the displacement *at A*. This is where the "real displacement" aspect is tricky without knowing the actual deflections beforehand.

    **Let's use the concept of complementary virtual work, which simplifies this.**

---

### 4. Complementary Virtual Work

Complementary virtual work relates to the work done by forces that are conjugate to the displacements. It's a powerful extension of the PVW.

*   **Complementary Virtual Work Done by External Forces ($\delta W^*_{ext}$):** The work done by *actual external forces* acting through *virtual displacements* which are *not* necessarily those caused by the actual loads, but are consistent with constraints.
*   **Complementary Virtual Work Done by Internal Forces ($\delta W^*_{int}$):** The work done by *actual internal forces* acting through *virtual strains*.

If we use the form: $\int_V \boldsymbol{\sigma}_{actual} : \delta \boldsymbol{\epsilon} \, dV = \int_A \mathbf{P}_{actual} \cdot \delta \mathbf{u} \, dA + \int_V \mathbf{f}_{b, actual} \cdot \delta \mathbf{u} \, dV$, this is the Principle of Virtual Displacements.

The form related to complementary work typically uses the **Principle of Complementary Virtual Work**:

*   **Statement:** For a deformable body in equilibrium under applied loads, the work done by the *actual external forces* acting through a *virtual displacement field* is equal to the work done by the *actual internal stresses* acting through the *virtual strain field*.
    *   This is essentially the same as PVW for displacements.

*   **The key distinction arises when relating stress and strain.** For linear elastic materials (Hooke's Law), $\boldsymbol{\sigma} = \mathbf{C} : \boldsymbol{\epsilon}$ and $\boldsymbol{\epsilon} = \mathbf{C}^{-1} : \boldsymbol{\sigma}$.
    The strain energy density is $U = \frac{1}{2} \boldsymbol{\sigma} : \boldsymbol{\epsilon}$.
    The complementary strain energy density is $U^* = \frac{1}{2} \boldsymbol{\epsilon} : \boldsymbol{\sigma}$.
    For linear elastic materials, $U = U^*$.

*   **The Principle of Complementary Virtual Work (PVW-CW):**
    Let $\boldsymbol{\sigma}_{virtual}$ and $\delta \boldsymbol{\epsilon}_{virtual}$ be a virtual stress and strain field in equilibrium with virtual external forces $\mathbf{P}_{virtual}$ and $\mathbf{f}_{b, virtual}$. Let $\boldsymbol{\sigma}_{actual}$ and $\boldsymbol{\epsilon}_{actual}$ be the actual stress and strain field in equilibrium with actual external forces $\mathbf{P}_{actual}$ and $\mathbf{f}_{b, actual}$.
    Then:
    $$\int_V \boldsymbol{\sigma}_{virtual} : \boldsymbol{\epsilon}_{actual} \, dV = \int_A \mathbf{P}_{virtual} \cdot \mathbf{u}_{actual} \, dA + \int_V \mathbf{f}_{b, virtual} \cdot \mathbf{u}_{actual} \, dV$$
    This is the **Principle of Virtual Forces**.

    And:
    $$\int_V \boldsymbol{\sigma}_{actual} : \delta \boldsymbol{\epsilon}_{virtual} \, dV = \int_A \mathbf{P}_{actual} \cdot \delta \mathbf{u}_{virtual} \, dA + \int_V \mathbf{f}_{b, actual} \cdot \delta \mathbf{u}_{virtual} \, dV$$
    This is the **Principle of Virtual Displacements**.

*   **Application to finding Displacements:**
    To find a specific displacement component $u_k$ at a point, we apply a unit virtual force $F_{virtual}=1$ in the direction of $u_k$ at that point. All other external virtual forces are zero. The virtual system is in equilibrium.
    Then, $\delta W_{ext, virtual} = 1 \cdot u_k^{actual}$ (work done by the unit virtual force through the actual displacement).
    The internal virtual work is $\delta U_{int, virtual} = \int_V \boldsymbol{\sigma}_{virtual} : \boldsymbol{\epsilon}_{actual} \, dV$.
    So, $u_k^{actual} = \int_V \boldsymbol{\sigma}_{virtual} : \boldsymbol{\epsilon}_{actual} \, dV$.

    This equation allows us to calculate displacements if we can determine the actual strains $\boldsymbol{\epsilon}_{actual}$ (from actual loads) and the virtual stresses $\boldsymbol{\sigma}_{virtual}$ and virtual strains $\boldsymbol{\epsilon}_{virtual}$ (from virtual loads).

---

### 5. Applying PVW to Calculate Displacements and Rotations

The PVW (specifically the Principle of Virtual Forces or its equivalent forms) is a powerful tool for calculating displacements and rotations in structures, especially statically indeterminate ones.

**Method for Calculating Displacement Component $u_k$ at a Point:**

1.  **Identify the Target Displacement:** Specify the displacement component you want to find (e.g., vertical displacement at point C, rotation at point D).
2.  **Apply Unit Virtual Load:** Apply a *unit virtual force* in the direction of the desired displacement component at the point of interest. If you want to find a rotation, apply a *unit virtual moment*.
3.  **Ensure Virtual Load System is in Equilibrium:** The system of virtual forces (and moments) must be in equilibrium. This means you can analyze the internal forces (shear force $V_{virtual}$, bending moment $M_{virtual}$, axial force $N_{virtual}$) in the structure under these virtual loads.
4.  **Analyze Actual Loads:** Analyze the structure under the *actual* applied loads to determine the *actual* internal forces (shear force $V_{actual}$, bending moment $M_{actual}$, axial force $N_{actual}$).
5.  **Calculate Actual Strains:** From the actual internal forces, calculate the actual strains. For common structural members:
    *   Actual axial strain: $\epsilon_{axial, actual} = \frac{N_{actual}}{AE}$
    *   Actual bending strain: $\epsilon_{bending, actual} = \frac{M_{actual} y}{EI}$ (where $y$ is the distance from the neutral axis)
    *   Actual shear strain: $\epsilon_{shear, actual} = \frac{V_{actual}}{GA}$ (often neglected in beam analysis for displacement calculations).
6.  **Calculate Virtual Stresses:** From the virtual internal forces, calculate the virtual stresses.
    *   Virtual axial stress: $\sigma_{axial, virtual} = \frac{N_{virtual}}{A}$
    *   Virtual bending stress: $\sigma_{bending, virtual} = \frac{M_{virtual} y}{I}$
7.  **Apply the Principle of Virtual Forces:** The desired displacement component is equal to the integral of the product of virtual stresses and actual strains over the volume.
    $$u_k^{actual} = \int_V \sigma_{virtual} : \epsilon_{actual} \, dV$$
    For beams, this typically simplifies to:
    $$u_k^{actual} = \int_0^L \frac{M_{virtual}(x) M_{actual}(x)}{EI} \, dx + \int_0^L \frac{N_{virtual}(x) N_{actual}(x)}{AE} \, dx + \int_0^L \frac{V_{virtual}(x) V_{actual}(x)}{GA} \, dx$$
    If the displacement is a rotation $\theta_k$, it will be calculated similarly using virtual moments.

**Example: Deflection of a Simply Supported Beam with Uniformly Distributed Load (UDL)**

Consider a simply supported beam of length $L$ with a UDL $w$ over its entire length. We want to find the maximum deflection at mid-span.

1.  **Target Displacement:** Vertical deflection at mid-span ($x=L/2$).
2.  **Apply Unit Virtual Load:** Apply a unit downward virtual force $P_{virtual}=1$ at mid-span.
3.  **Analyze Virtual Loads:** For this virtual load system (unit force at mid-span, reactions $R_{Av}=1/2$, $R_{Bv}=1/2$ at supports), the bending moment distribution is:
    $M_{virtual}(x) = \frac{1}{2}x$ for $0 \le x \le L/2$
    $M_{virtual}(x) = \frac{1}{2}(L-x)$ for $L/2 \le x \le L$

4.  **Analyze Actual Loads:** For a simply supported beam with UDL $w$:
    Reactions $R_A = R_B = wL/2$.
    The bending moment distribution is:
    $M_{actual}(x) = \frac{wL}{2}x - \frac{wx^2}{2}$ for $0 \le x \le L$.

5.  **Calculate Actual Strains / Use Bending Moment Formula:** For bending, $\epsilon_{actual} \propto M_{actual}$.
6.  **Calculate Virtual Stresses / Use Bending Moment Formula:** For bending, $\sigma_{virtual} \propto M_{virtual}$.
7.  **Apply PVW (Bending Term):**
    $$u_{mid-span}^{actual} = \int_0^L \frac{M_{virtual}(x) M_{actual}(x)}{EI} \, dx$$
    Since the functions are symmetric about mid-span, we can integrate from 0 to L/2 and multiply by 2:
    $$u_{mid-span}^{actual} = 2 \int_0^{L/2} \frac{(\frac{1}{2}x) (\frac{wL}{2}x - \frac{wx^2}{2})}{EI} \, dx$$
    $$u_{mid-span}^{actual} = \frac{2}{EI} \int_0^{L/2} (\frac{wL}{4}x^2 - \frac{w}{4}x^3) \, dx$$
    $$u_{mid-span}^{actual} = \frac{2w}{4EI} \int_0^{L/2} (Lx^2 - x^3) \, dx$$
    $$u_{mid-span}^{actual} = \frac{w}{2EI} \left[ \frac{Lx^3}{3} - \frac{x^4}{4} \right]_0^{L/2}$$
    $$u_{mid-span}^{actual} = \frac{w}{2EI} \left( \frac{L(L/2)^3}{3} - \frac{(L/2)^4}{4} \right)$$
    $$u_{mid-span}^{actual} = \frac{w}{2EI} \left( \frac{L^4}{24} - \frac{L^4}{64} \right)$$
    $$u_{mid-span}^{actual} = \frac{w}{2EI} \left( \frac{8L^4 - 3L^4}{192} \right)$$
    $$u_{mid-span}^{actual} = \frac{w}{2EI} \left( \frac{5L^4}{192} \right)$$
    $$u_{mid-span}^{actual} = \frac{5wL^4}{384EI}$$

    This matches the known formula for deflection of a simply supported beam with UDL.

---

### 6. Relation to Other Energy Methods

The Principle of Virtual Work is closely related to other energy methods in mechanics of solids.

*   **Principle of Minimum Potential Energy (PMPE):** This principle applies to conservative systems in equilibrium. It states that the equilibrium configuration of a system is that which minimizes the total potential energy. The total potential energy is defined as $V = U - W_{ext}$, where $U$ is the internal strain energy and $W_{ext}$ is the potential energy of external forces.
    *   **Connection:** The PMPE can be derived from the PVW. By considering the variation of potential energy, $\delta V = \delta U - \delta W_{ext} = 0$. For elastic bodies, $\delta U = \int_V \boldsymbol{\sigma} : \delta \boldsymbol{\epsilon} \, dV$ and $\delta W_{ext}$ is the virtual work done by external forces. Thus, $\int_V \boldsymbol{\sigma} : \delta \boldsymbol{\epsilon} \, dV = \delta W_{ext}$, which is the PVW.

*   **Castigliano's Theorem (First Theorem):** This theorem relates the displacement component at a point to the partial derivative of the total strain energy with respect to the force applied at that point.
    $$u_k = \frac{\partial U}{\partial F_k}$$
    *   **Connection:** Castigliano's theorem can be derived from the PVW by considering the increment of strain energy as work done by the applied force through an infinitesimal displacement. If you have a set of loads $F_1, F_2, \dots, F_n$ and the total strain energy is $U(F_1, F_2, \dots, F_n)$, the displacement $u_k$ corresponding to $F_k$ is $\frac{\partial U}{\partial F_k}$. This is equivalent to applying a unit virtual force and calculating the internal virtual work.

*   **Betti's Law (Maxwell-Betti Law of Reciprocal Deflections):** For a linear elastic body subjected to two independent systems of loads, the displacement at point A due to a load at point B is equal to the displacement at point B due to the same load applied at point A.
    $$ \int_V \sigma^{(1)} : \epsilon^{(2)} \, dV = \int_V \sigma^{(2)} : \epsilon^{(1)} \, dV $$
    Where system 1 has loads $F^{(1)}$ and produces displacements $u^{(1)}$, and system 2 has loads $F^{(2)}$ and produces displacements $u^{(2)}$.
    *   **Connection:** This law can be shown using the PVW. If we consider system 1 as the "actual" and system 2 as the "virtual", and apply the PVW for the virtual system: $\int_V \sigma^{(2)} : \epsilon^{(1)} \, dV = \int_A P^{(2)} \cdot u^{(1)} \, dA + \dots$. Similarly, for system 2 as "actual" and system 1 as "virtual": $\int_V \sigma^{(1)} : \epsilon^{(2)} \, dV = \int_A P^{(1)} \cdot u^{(2)} \, dA + \dots$. For linear elastic materials, these lead to the reciprocal theorem.

---

### Key Concepts to Remember:

*   **Virtual Displacement:** Imaginary, infinitesimal, consistent with constraints.
*   **Virtual Work:** Work done by a force through a virtual displacement.
*   **Principle of Virtual Work (Deformable Bodies):** $\delta W_{ext} = \delta W_{int}$ (work done by external forces = work done by internal stresses through virtual strains).
*   **Principle of Virtual Forces:** Work done by virtual forces through real displacements = Internal virtual work. This is crucial for calculating displacements.
*   **Equilibrium:** PVW is a condition of equilibrium.
*   **Linear Elasticity:** Simplifies calculations, $U=U^*$.
*   **Application for Reactions:** Use a virtual displacement that isolates the reaction.
*   **Application for Displacements:** Use a unit virtual force/moment in the direction of the desired displacement/rotation.

---

### Practice Questions/Exercises:

**Question 1:**
A bar of length $L$, cross-sectional area $A$, and Young's modulus $E$ is subjected to an axial force $P$ at its free end. Using the Principle of Virtual Work (specifically, the Principle of Virtual Forces), determine the elongation of the bar.

**Solution 1:**
1.  **Target Displacement:** Elongation of the bar at the free end.
2.  **Apply Unit Virtual Load:** Apply a unit virtual axial force $P_{virtual}=1$ at the free end.
3.  **Virtual Load Analysis:** The virtual axial force in the bar is constant and equal to $N_{virtual}(x) = 1$.
4.  **Actual Load Analysis:** The actual axial force in the bar is constant and equal to $N_{actual}(x) = P$.
5.  **Calculate Actual Strains:** $\epsilon_{actual}(x) = \frac{N_{actual}(x)}{AE} = \frac{P}{AE}$.
6.  **Calculate Virtual Stresses:** $\sigma_{virtual}(x) = \frac{N_{virtual}(x)}{A} = \frac{1}{A}$.
7.  **Apply PVW:**
    The displacement $\delta$ is given by:
    $$\delta = \int_0^L \sigma_{virtual}(x) \epsilon_{actual}(x) \, dx$$
    $$\delta = \int_0^L \left(\frac{1}{A}\right) \left(\frac{P}{AE}\right) \, dx$$
    $$\delta = \frac{P}{A^2E} \int_0^L \, dx$$
    $$\delta = \frac{P}{A^2E} [x]_0^L$$
    $$\delta = \frac{PL}{A^2E}$$

    **Hold on, there's a common mistake here with the units and integral.** The integral should be over volume. For a bar, $dV = A \, dx$.
    The formula for displacement is:
    $$u_k^{actual} = \int_V \sigma_{virtual} : \epsilon_{actual} \, dV$$
    For axial loads:
    $$u_k^{actual} = \int_0^L \sigma_{virtual, axial}(x) \epsilon_{actual, axial}(x) \, A \, dx$$
    $$u_k^{actual} = \int_0^L \left(\frac{N_{virtual}(x)}{A}\right) \left(\frac{N_{actual}(x)}{AE}\right) A \, dx$$
    $$u_k^{actual} = \int_0^L \frac{N_{virtual}(x) N_{actual}(x)}{AE} \, dx$$
    $$u_k^{actual} = \int_0^L \frac{(1)(P)}{AE} \, dx$$
    $$u_k^{actual} = \frac{P}{AE} \int_0^L \, dx$$
    $$u_k^{actual} = \frac{P}{AE} [x]_0^L$$
    $$u_k^{actual} = \frac{PL}{AE}$$
    This is the correct elongation of the bar.

**Question 2:**
Consider a cantilever beam of length $L$ with a point load $P$ at the free end. Determine the vertical deflection at the free end using the Principle of Virtual Work. Assume uniform flexural rigidity $EI$.

**Solution 2:**
1.  **Target Displacement:** Vertical deflection at the free end ($x=L$).
2.  **Apply Unit Virtual Load:** Apply a unit downward virtual force $P_{virtual}=1$ at the free end ($x=L$).
3.  **Virtual Load Analysis:** For a cantilever beam with a unit force at the free end, the bending moment distribution is:
    $M_{virtual}(x) = 1 \cdot (L-x)$ for $0 \le x \le L$ (where $x$ is measured from the fixed end).

4.  **Actual Load Analysis:** For a cantilever beam with a load $P$ at the free end, the bending moment distribution is:
    $M_{actual}(x) = P \cdot (L-x)$ for $0 \le x \le L$.

5.  **Apply PVW (Bending Term):**
    The vertical deflection at the free end is:
    $$u_{free-end}^{actual} = \int_0^L \frac{M_{virtual}(x) M_{actual}(x)}{EI} \, dx$$
    $$u_{free-end}^{actual} = \int_0^L \frac{(L-x) (P(L-x))}{EI} \, dx$$
    $$u_{free-end}^{actual} = \frac{P}{EI} \int_0^L (L-x)^2 \, dx$$
    Let $u = L-x$, then $du = -dx$. When $x=0$, $u=L$. When $x=L$, $u=0$.
    $$u_{free-end}^{actual} = \frac{P}{EI} \int_L^0 u^2 (-du)$$
    $$u_{free-end}^{actual} = \frac{P}{EI} \int_0^L u^2 \, du$$
    $$u_{free-end}^{actual} = \frac{P}{EI} \left[ \frac{u^3}{3} \right]_0^L$$
    $$u_{free-end}^{actual} = \frac{P}{EI} \left( \frac{L^3}{3} - 0 \right)$$
    $$u_{free-end}^{actual} = \frac{PL^3}{3EI}$$
    This is the correct deflection for a cantilever beam with a load at the free end.

**Question 3:**
Explain how the Principle of Virtual Work can be used to determine reactions in statically indeterminate structures.

**Answer 3:**
The Principle of Virtual Work, particularly in the form of the **Principle of Virtual Forces**, is a powerful method for analyzing statically indeterminate structures. The process generally involves:

1.  **Releasing the Indeterminacy:** To determine an unknown reaction force or moment, we first remove the corresponding constraint (e.g., support or connection). This transforms the statically indeterminate structure into a determinate one. The removal of the constraint introduces a "gap" or allows for relative displacement/rotation at the point of release.

2.  **Applying Virtual Loads:** A *unit virtual force* or *unit virtual moment* is applied at the location and in the direction of the unknown reaction. This creates a self-equilibrating system of virtual forces within the structure.

3.  **Calculating Real and Virtual Work:**
    *   **External Virtual Work:** The work done by the *unit virtual force/moment* acting through the *actual displacement/rotation* that occurs at that point due to the *original applied loads*.
    *   **Internal Virtual Work:** The work done by the *virtual stresses* (generated by the unit virtual load) acting through the *actual strains* (generated by the original applied loads). For beams, this involves integrating the product of virtual and actual bending moments divided by $EI$.

4.  **Equating Work:** By equating the external virtual work and the internal virtual work, we obtain an equation where the unknown reaction force/moment is multiplied by the actual displacement/rotation. Since the virtual load is a unit load, this directly gives the value of the actual reaction.

    For example, if $R_A$ is the unknown reaction and $u_A$ is the actual vertical displacement at point A (where the support was removed), and we apply a unit virtual upward force at A:
    $1 \cdot u_A = \int_0^L \frac{M_{virtual}(x) M_{actual}(x)}{EI} \, dx$

    The term $u_A$ represents the "gap opening" or relative displacement caused by removing the constraint. By setting this gap to zero (as it was in the original indeterminate structure), we can solve for the unknown reaction.

---

This comprehensive set of notes covers the Theorem of Virtual Work, its derivations, applications, and relation to other methods. The examples and practice questions should help solidify understanding. Remember to pay close attention to the sign conventions and the consistent application of the principle for both equilibrium and displacement calculations.
