---
title: "Stiffness method: Definition of stiffness influence coefficients - Concepts of physical approach."
subject: "STRUCTURAL ANALYSIS - II"
module: "Module 4: Stiffness method: Definition of stiffness influence coefficients "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109a3"
status: "completed"
scrapedAt: "2026-05-20T18:47:13.212Z"
---
# Structural Analysis - II: Module 4 - Stiffness Method: Definition of Stiffness Influence Coefficients (Physical Approach)

---

## 1. Introduction to the Stiffness Method

The stiffness method, also known as the force method or displacement method, is a fundamental approach to analyzing indeterminate structures. Unlike the flexibility method which uses displacements as primary unknowns, the stiffness method uses **displacements** as primary unknowns. The core idea is to relate the external forces applied to a structure to the resulting displacements at specific points.

### 1.1. The Physical Approach

The "physical approach" emphasizes understanding the underlying physical behavior of the structure and how forces and displacements are interconnected. It's about building intuition for how a structure deforms under load.

## 2. Definition of Stiffness Influence Coefficients (SIC)

Stiffness influence coefficients (often denoted as $k_{ij}$ or $K_{ij}$) represent the **force required at a specific degree of freedom (DOF) to cause a unit displacement at another specific DOF**, assuming all other DOFs are restrained (held fixed).

**Key Concept:** Think of it as the "stiffness" or resistance to displacement at one point when a displacement is imposed at another.

### 2.1. General Definition

For a system with $n$ degrees of freedom, the relationship between the force vector $\{F\}$ and the displacement vector $\{\delta\}$ can be expressed as:

$\{F\} = [K] \{\delta\}$

Where:
*   $\{F\}$ is the vector of external forces applied at the DOFs.
*   $\{\delta\}$ is the vector of displacements at the DOFs.
*   $[K]$ is the **stiffness matrix**, where each element $K_{ij}$ is a stiffness influence coefficient.

### 2.2. Mathematical Definition of $K_{ij}$

The stiffness influence coefficient $K_{ij}$ is the force that must be applied at DOF $i$ to produce a unit displacement at DOF $j$, while all other degrees of freedom ($k \neq j$) are held at zero displacement.

$K_{ij} = \left. \frac{\partial F_i}{\partial \delta_j} \right|_{\delta_k=0 \text{ for } k \neq j}$

In simpler terms:
*   **$K_{ii}$**: Force required at DOF $i$ to produce a unit displacement at DOF $i$ (while all other DOFs are zero). This is the direct stiffness at DOF $i$.
*   **$K_{ij}$ (where $i \neq j$)**: Force required at DOF $i$ to produce a unit displacement at DOF $j$ (while all other DOFs are zero). This is the cross-stiffness or influence of displacement at $j$ on force at $i$.

## 3. Concepts of Physical Approach to Stiffness Influence Coefficients

The physical approach helps us understand the meaning and derivation of these coefficients without immediately jumping into complex matrix algebra.

### 3.1. Unit Displacement and Restrained DOFs

The core of the physical approach lies in considering **unit displacements at one DOF at a time** while ensuring **all other DOFs remain zero**. This means if we're calculating $K_{23}$, we impose a displacement of 1 unit at DOF 2 and ensure DOF 1, 3, 4, ... are all zero. Then, we calculate the force needed at DOF 3 to maintain this condition.

### 3.2. Direct Stiffness ($K_{ii}$)

*   **Concept:** This is the most intuitive part. If you fix all other points of a structure and push at point $i$ by one unit, $K_{ii}$ is the force you need to exert at point $i$ to achieve that unit displacement.
*   **Physical Interpretation:** It represents the direct resistance of the structure at a particular DOF to movement at that same DOF.
*   **Example:** For a simple spring with stiffness $k$, if you displace it by $\delta$, the force is $F = k\delta$. Here, $K_{ii} = k$. For a beam element, this would relate to the axial stiffness or bending stiffness at a specific node.

### 3.3. Cross-Stiffness or Influence Coefficients ($K_{ij}$ where $i \neq j$)

*   **Concept:** This is where the "influence" aspect comes in. If you displace point $j$ by one unit and hold all other points fixed, $K_{ij}$ is the force that arises at point $i$ due to this displacement at $j$.
*   **Physical Interpretation:** This coefficient quantifies how a displacement at one location affects the forces at another location. This is due to the interconnectedness of the structural members.
*   **Example:**
    *   Consider a simply supported beam with a pin at A and a roller at B. Let DOF 1 be the vertical displacement at mid-span and DOF 2 be the vertical displacement at support A.
    *   To find $K_{12}$: Impose a unit vertical displacement at support A (DOF 2). Since it's a pin, this means support A moves up by 1 unit. Simultaneously, hold the mid-span at zero displacement (DOF 1 = 0). Calculate the vertical force required at the mid-span (DOF 1) to prevent it from moving. This force is $K_{12}$.
    *   Due to the reciprocal theorem (Maxwell's theorem of reciprocal displacements), $K_{ij} = K_{ji}$. This means the force at $i$ due to a unit displacement at $j$ is equal to the force at $j$ due to a unit displacement at $i$.

## 4. Determining Stiffness Influence Coefficients

The process involves applying unit displacements and calculating the corresponding forces. This can be done using:

### 4.1. Fundamental Structural Mechanics Principles

*   **Force-Displacement Relationships:** For basic elements (beams, columns, springs), we can use established formulas from mechanics of materials.
    *   **Axial Stiffness:** For a bar of length $L$, area $A$, and Young's Modulus $E$, the axial stiffness is $EA/L$.
    *   **Bending Stiffness:** For a beam element, the stiffness depends on the applied displacement (e.g., vertical deflection, rotation) and the material/geometric properties (e.g., $EI/L$).
*   **Superposition:** Decompose complex displacements into simpler ones (e.g., rotation and translation) and use superposition.

### 4.2. Example: A Simple Two-Bar Truss

Consider a simple truss with two bars meeting at a joint (the DOF).

*   **Degrees of Freedom:** Assume the joint can move in the x and y directions. So, we have two DOFs: $\delta_x$ and $\delta_y$.
*   **Bar Properties:** Let both bars have length $L$, cross-sectional area $A$, and Young's Modulus $E$. The stiffness of each bar is $EA/L$.

**Let's find the stiffness matrix $[K]$ for the joint:**

**Step 1: Calculate $K_{11}$ (Force in x-direction for unit displacement in x-direction)**

*   **Action:** Impose $\delta_x = 1$ and $\delta_y = 0$. This means the joint moves 1 unit to the right horizontally, staying on the same horizontal line.
*   **Physical Response:** Both bars will stretch.
    *   Consider bar 1 along the x-axis. Its stiffness is $EA/L$. The force to move it by 1 unit along its axis is $(EA/L) \times 1$. This force acts in the x-direction at the joint.
    *   Consider bar 2. When the joint moves by 1 unit in the x-direction, the bar does not change its length if the other end is fixed and the displacement is purely horizontal. If it's a pin-jointed structure and the other end is also free to move in y, this becomes more complex.

    *Let's assume a simplified scenario for clarity where the bars are inclined at $\theta$ to the x-axis.*

    Let the joint be at the origin (0,0). The other ends are fixed.
    Let DOF 1 be $\delta_x$ and DOF 2 be $\delta_y$.

    *   **To find $K_{11}$:** Impose $\delta_1 = 1$ (i.e., $\delta_x = 1$) and $\delta_2 = 0$ (i.e., $\delta_y = 0$). The joint moves to (1, 0).
        *   Bar 1 (length $L$, angle $\theta$): Initial length $L$. Final length = $\sqrt{(1+L\cos\theta)^2 + (L\sin\theta)^2}$. The change in length is $\Delta L_1$. The axial force $F_{ax1} = \frac{EA}{L} \Delta L_1$.
        *   The component of $F_{ax1}$ in the x-direction is $F_{ax1} \cos\theta$.
        *   Bar 2 (length $L$, angle $-\theta$): Similar calculation for $\Delta L_2$ and $F_{ax2}$. The component in the x-direction is $F_{ax2} \cos\theta$.
        *   $K_{11} = (F_{ax1} \cos\theta) + (F_{ax2} \cos\theta)$.

    *   **To find $K_{21}$:** Impose $\delta_1 = 0$ (i.e., $\delta_x = 0$) and $\delta_2 = 1$ (i.e., $\delta_y = 1$). The joint moves to (0, 1).
        *   Calculate $\Delta L_1'$ and $F_{ax1}'$. The component in the y-direction is $F_{ax1}' \sin\theta$.
        *   Calculate $\Delta L_2'$ and $F_{ax2}'$. The component in the y-direction is $F_{ax2}' \sin\theta$.
        *   $K_{21} = (F_{ax1}' \sin\theta) + (F_{ax2}' \sin\theta)$.

    *   **To find $K_{22}$:** Impose $\delta_1 = 0$ and $\delta_2 = 1$. This is the same as calculating $K_{21}$, but we are looking for the force in the y-direction. The force is $F_{ax1}' \sin\theta$ from bar 1 and $F_{ax2}' \sin\theta$ from bar 2. So $K_{22} = (F_{ax1}' \sin\theta) + (F_{ax2}' \sin\theta)$.
    *   **To find $K_{12}$:** Impose $\delta_1 = 1$ and $\delta_2 = 0$. This is the same as calculating $K_{11}$, but we are looking for the force in the x-direction. The force is $F_{ax1} \cos\theta$ from bar 1 and $F_{ax2} \cos\theta$ from bar 2. So $K_{12} = (F_{ax1} \cos\theta) + (F_{ax2} \cos\theta)$.

    This example illustrates the process. For a real truss element, we would use the direction cosines of the bar.

### 4.3. Example: A Simply Supported Beam Element

Consider a single beam element with length $L$, bending stiffness $EI$. Assume 2 DOFs at each end: vertical displacement ($v$) and rotation ($\theta$).
*   DOF 1: $v_A$ (vertical displacement at end A)
*   DOF 2: $\theta_A$ (rotation at end A)
*   DOF 3: $v_B$ (vertical displacement at end B)
*   DOF 4: $\theta_B$ (rotation at end B)

This gives a $4 \times 4$ stiffness matrix $[K]$. Let's find some coefficients:

**Calculating $K_{11}$ (Force at A for unit displacement at A):**

*   **Action:** Impose $v_A = 1$ and $\theta_A = 0$, $v_B = 0$, $\theta_B = 0$. This is like pushing end A upwards by 1 unit, keeping its rotation zero.
*   **Physical Response:** This creates a pure vertical shear force at A.
*   **Formula:** For a simply supported beam, the vertical shear force ($V_A$) required to produce a unit deflection at end A ($\delta_A = 1$) with end A having zero slope ($\theta_A = 0$) and end B being a roller (so $v_B = 0, \theta_B = 0$) is:
    $K_{11} = \frac{12EI}{L^3}$ (This is the shear stiffness coefficient).

**Calculating $K_{12}$ (Force at A for unit rotation at A):**

*   **Action:** Impose $\theta_A = 1$ and $v_A = 0$, $v_B = 0$, $\theta_B = 0$. This is like rotating end A by 1 radian upwards, keeping its vertical position fixed.
*   **Physical Response:** This creates a moment at A.
*   **Formula:** The moment ($M_A$) required to produce a unit slope at end A ($\theta_A = 1$) with end A having zero deflection ($v_A = 0$) and end B being a roller (so $v_B = 0, \theta_B = 0$) is:
    $K_{12} = \frac{4EI}{L}$ (This is the moment stiffness coefficient).
    *Note: The force at A is actually the shear force generated by this moment. For a beam element with forces and moments at ends, $V_A$ is related to $M_A$ and $M_B$. In this case, applying $\theta_A=1$ with $v_A=0$ implies a moment $M_A$ and a shear $V_A$. We need to find $V_A$. The moment that causes unit slope at A is $M_A = 4EI/L$. The shear force associated with this moment is $V_A = (M_A + M_B)/L$. With $\theta_A=1, v_A=0, v_B=0, \theta_B=0$, we induce $M_A = 4EI/L$. The boundary conditions at B ($v_B=0, \theta_B=0$) would imply $M_B = 2EI/L$ if the displacement was induced by a moment at A. However, if we impose displacement, it's simpler to use the direct force-displacement relationship.*

    *Let's re-evaluate $K_{12}$ based on the definition: Force at DOF $i$ for unit displacement at DOF $j$.
    To find $K_{12}$, we apply $\theta_A = 1$, $v_A=0$, $v_B=0$, $\theta_B=0$.
    This is a constrained displacement scenario. The force $F_A$ (vertical force at A) will be zero because $v_A=0$. However, the definition requires the force *required at DOF i*. This refers to the external force at DOF $i$ needed to achieve the displacement configuration.
    When $\theta_A=1$ (with $v_A=0$), this implies a moment $M_A = 4EI/L$. For the system to be in equilibrium, there must be an equal and opposite moment at B ($M_B = -2EI/L$ if we consider end B as a free end in rotation). But here, end B is fixed ($v_B=0, \theta_B=0$).
    The force required at DOF 1 ($v_A$) to maintain $v_A=0$ when $\theta_A=1$ is zero. This seems counter-intuitive.

    **Let's re-read the definition:** "$K_{ij}$ is the force required at DOF $i$ to cause a unit displacement at DOF $j$, assuming all other DOFs are restrained."

    *   **Recalculating $K_{12}$ (Force at DOF 1 for unit displacement at DOF 2):**
        *   Impose $\theta_A = 1$ (DOF 2 = 1).
        *   Maintain $v_A = 0$ (DOF 1 = 0).
        *   Maintain $v_B = 0$ (DOF 3 = 0).
        *   Maintain $\theta_B = 0$ (DOF 4 = 0).
        *   We need to find the force at DOF 1 ($v_A$) that is required to satisfy these conditions. Since $v_A$ is *imposed* to be 0, the force required at DOF 1 is not directly relevant in this calculation of $K_{12}$ itself; rather, the force that develops at DOF 1 due to the displacement at DOF 2.

    This suggests a slight ambiguity or a need for careful interpretation. The standard approach uses *imposed* displacements and then calculates the reactions/forces.

    Let's use the standard beam element stiffness matrix derivation:
    For a beam element with ends A and B, and DOFs $v_A, \theta_A, v_B, \theta_B$.
    The force vector at A is $\{F_A\} = \{V_A, M_A\}^T$ and at B is $\{F_B\} = \{V_B, M_B\}^T$.
    The displacement vector is $\{\delta\} = \{v_A, \theta_A, v_B, \theta_B\}^T$.
    The relationship is:
    $\begin{Bmatrix} V_A \\ M_A \\ V_B \\ M_B \end{Bmatrix} = \frac{EI}{L^3} \begin{bmatrix} 12 & 6L & -12 & 6L \\ 6L & 4L^2 & -6L & 2L^2 \\ -12 & -6L & 12 & -6L \\ 6L & 2L^2 & -6L & 4L^2 \end{bmatrix} \begin{Bmatrix} v_A \\ \theta_A \\ v_B \\ \theta_B \end{Bmatrix}$

    The stiffness matrix $[K]$ for the element is the matrix shown above.
    The elements $K_{ij}$ are the forces at DOF $i$ when DOF $j$ has a unit displacement and all other DOFs are zero.

    Let's verify some elements:

    *   $K_{11}$ (Force $V_A$ when $v_A=1, \theta_A=0, v_B=0, \theta_B=0$):
        $V_A = \frac{12EI}{L^3} (1) + \frac{6EI}{L^2} (0) - \frac{12EI}{L^3} (0) + \frac{6EI}{L^2} (0) = \frac{12EI}{L^3}$. This matches.

    *   $K_{12}$ (Force $V_A$ when $\theta_A=1, v_A=0, v_B=0, \theta_B=0$):
        $V_A = \frac{12EI}{L^3} (0) + \frac{6EI}{L^2} (1) - \frac{12EI}{L^3} (0) + \frac{6EI}{L^2} (0) = \frac{6EI}{L^2}$.
        **Physical Interpretation:** Imposing a unit rotation at end A, while keeping everything else fixed, causes a shear force at A. This shear force is needed to balance the internal forces.

    *   $K_{13}$ (Force $V_A$ when $v_B=1, v_A=0, \theta_A=0, \theta_B=0$):
        $V_A = \frac{12EI}{L^3} (0) + \frac{6EI}{L^2} (0) - \frac{12EI}{L^3} (1) + \frac{6EI}{L^2} (0) = -\frac{12EI}{L^3}$.
        **Physical Interpretation:** Pushing end B upwards by 1 unit causes a downward shear force at end A. This is due to symmetry ($K_{13} = -K_{11}$).

    *   $K_{14}$ (Force $V_A$ when $\theta_B=1, v_A=0, \theta_A=0, v_B=0$):
        $V_A = \frac{12EI}{L^3} (0) + \frac{6EI}{L^2} (0) - \frac{12EI}{L^3} (0) + \frac{6EI}{L^2} (1) = \frac{6EI}{L^2}$.
        **Physical Interpretation:** Imposing a unit rotation at end B causes a shear force at end A. This is due to symmetry ($K_{14} = K_{12}$).

    *   $K_{21}$ (Force $M_A$ when $v_A=1, \theta_A=0, v_B=0, \theta_B=0$):
        $M_A = \frac{6EI}{L^2} (1) + \frac{4EI}{L} (0) - \frac{6EI}{L^2} (0) + \frac{2EI}{L} (0) = \frac{6EI}{L^2}$.
        **Physical Interpretation:** Pushing end A upwards by 1 unit causes a moment at A. This moment is needed to resist the deflection.

    *   $K_{22}$ (Force $M_A$ when $\theta_A=1, v_A=0, v_B=0, \theta_B=0$):
        $M_A = \frac{6EI}{L^2} (0) + \frac{4EI}{L} (1) - \frac{6EI}{L^2} (0) + \frac{2EI}{L} (0) = \frac{4EI}{L}$.
        **Physical Interpretation:** This is the direct moment stiffness at A.

    *   $K_{23}$ (Force $M_A$ when $v_B=1, v_A=0, \theta_A=0, \theta_B=0$):
        $M_A = \frac{6EI}{L^2} (0) + \frac{4EI}{L} (0) - \frac{6EI}{L^2} (1) + \frac{2EI}{L} (0) = -\frac{6EI}{L^2}$.
        **Physical Interpretation:** Pushing end B upwards by 1 unit causes a negative moment at A (counter-clockwise).

    *   $K_{24}$ (Force $M_A$ when $\theta_B=1, v_A=0, \theta_A=0, v_B=0$):
        $M_A = \frac{6EI}{L^2} (0) + \frac{4EI}{L} (0) - \frac{6EI}{L^2} (0) + \frac{2EI}{L} (1) = \frac{2EI}{L}$.
        **Physical Interpretation:** Rotating end B by 1 radian causes a moment at A. This is the 'carry-over' moment.

This detailed breakdown of the beam element's stiffness matrix illustrates the physical meaning of each coefficient.

## 5. Properties of the Stiffness Matrix

### 5.1. Symmetry

The stiffness matrix $[K]$ is always symmetric, i.e., $K_{ij} = K_{ji}$. This is a consequence of Maxwell's theorem of reciprocal displacements (or forces). It means the influence of a unit displacement at DOF $j$ on the force at DOF $i$ is the same as the influence of a unit displacement at DOF $i$ on the force at DOF $j$.

### 5.2. Positive Definite

For a stable structure, the stiffness matrix is positive definite. This means that for any non-zero displacement vector $\{\delta\}$, the work done by the internal forces is positive: $\frac{1}{2} \{\delta\}^T [K] \{\delta\} > 0$. This reflects the fact that a structure resists deformation.

### 5.3. Bandwidth

The bandwidth of the stiffness matrix depends on the numbering scheme of the DOFs. DOFs that are spatially close tend to have non-zero stiffness influence coefficients.

## 6. Application in Structural Analysis

The stiffness matrix is the foundation for solving indeterminate structures using the stiffness method (direct stiffness method or finite element method).

1.  **Element Stiffness Matrices:** Derive the stiffness matrix for each structural element (beam, column, truss bar, etc.) in its local coordinate system.
2.  **Coordinate Transformation:** Transform element stiffness matrices to the global coordinate system.
3.  **Assembly:** Assemble the global stiffness matrix $[K]$ by summing the contributions of each element stiffness matrix at their respective DOFs.
4.  **Boundary Conditions:** Apply the known displacements (e.g., supports are fixed, meaning zero displacement) by modifying the global stiffness matrix and force vector.
5.  **Load Vector:** Create the force vector $\{F\}$ from applied external loads.
6.  **Solve for Displacements:** Solve the system of linear equations $\{F\} = [K] \{\delta\}$ for the unknown displacements $\{\delta\}$.
7.  **Calculate Forces:** Once displacements are known, calculate internal forces (axial force, shear force, bending moment) in each element using the element stiffness matrix and the displacements of its nodes.

## 7. Practice Questions and Exercises

---

**Question 1:**
For a simply supported beam of length $L$ and flexural rigidity $EI$, what is the stiffness influence coefficient $K_{31}$? (Where DOF 1 is vertical displacement at the left support and DOF 3 is vertical displacement at the right support).

**Answer 1:**
$K_{31}$ is the force at DOF 3 (right support) when DOF 1 (left support vertical displacement) is 1 unit, and all other DOFs are zero.
If the left support moves up by 1 unit, and the right support is a roller (free to move vertically), and assuming no other applied loads or constraints.
For a simply supported beam, the displacement at end A ($v_A$) is related to the shear force at A ($V_A$) and the displacement at end B ($v_B$) and rotations.
If $v_A = 1$, $\theta_A = 0$, $v_B = 0$, $\theta_B = 0$:
From the beam element stiffness matrix derived earlier:
The force at the right support ($V_B$) when the left end has $v_A=1$ (and others zero) is $K_{31}$.
$V_B = \frac{-12EI}{L^3} v_A + \frac{-6EI}{L^2} \theta_A + \frac{12EI}{L^3} v_B + \frac{-6EI}{L^2} \theta_B$.
Substituting the values: $V_B = \frac{-12EI}{L^3} (1) + 0 + 0 + 0 = -\frac{12EI}{L^3}$.
So, $K_{31} = -\frac{12EI}{L^3}$.

**Physical Interpretation:** Pushing the left support up by 1 unit (assuming it's a pin/roller that can move) causes a downward force at the right support.

---

**Question 2:**
Consider a single-span portal frame with two vertical columns of length $H$ and a horizontal beam of length $L$. Assume pinned bases for the columns.
Let DOF 1 be the horizontal displacement at the top of the left column.
Let DOF 2 be the horizontal displacement at the top of the right column.
What is the relationship between $K_{12}$ and $K_{21}$ for this portal frame, assuming the columns and beam have the same flexural rigidity $EI$?

**Answer 2:**
By Maxwell's theorem of reciprocal displacements, $K_{12} = K_{21}$.
**Physical Interpretation:** The horizontal force at the top of the left column due to a unit horizontal displacement at the top of the right column is equal to the horizontal force at the top of the right column due to a unit horizontal displacement at the top of the left column.

---

**Question 3:**
A single spring has stiffness $k$. If its only DOF is axial displacement $\delta$, what is its stiffness matrix?

**Answer 3:**
The force $F$ required to produce a displacement $\delta$ is $F = k\delta$.
If there is only one DOF, the stiffness matrix is a $1 \times 1$ matrix.
$F = [K] \delta$
$[K] = [k]$
So, $K_{11} = k$.

---

**Question 4:**
For the beam element stiffness matrix derived earlier, explain the physical meaning of the coefficient $K_{24}$.

**Answer 4:**
$K_{24}$ is the moment at DOF 2 (rotation at end A, $\theta_A$) when DOF 4 (rotation at end B, $\theta_B$) is given a unit displacement (1 radian), and all other DOFs ($v_A, \theta_A, v_B$) are held at zero displacement.
From the matrix, $K_{24} = \frac{2EI}{L}$.
**Physical Interpretation:** This is the "carry-over" moment. When end B of a beam element is rotated by 1 radian (while keeping end A fixed against translation and rotation, and the far end fixed), a moment of $\frac{2EI}{L}$ is developed at end A.

## 8. Important Points to Remember

*   **Stiffness Influence Coefficients** ($K_{ij}$) quantify the force at DOF $i$ for a unit displacement at DOF $j$, with all other DOFs restrained.
*   The **Stiffness Matrix** $[K]$ relates the force vector $\{F\}$ to the displacement vector $\{\delta\}$ by $\{F\} = [K] \{\delta\}$.
*   The physical approach helps understand the meaning of $K_{ij}$ by visualizing the response of a structure to unit displacements.
*   **Direct stiffness** ($K_{ii}$) is the force at DOF $i$ for unit displacement at DOF $i$.
*   **Cross-stiffness** ($K_{ij}, i \neq j$) is the force at DOF $i$ due to a unit displacement at DOF $j$.
*   The stiffness matrix is always **symmetric** ($K_{ij} = K_{ji}$) due to the reciprocal theorem.
*   The derivation of $[K]$ involves applying unit displacements and calculating the reactions/forces using fundamental mechanics principles.
*   For beam elements, the stiffness coefficients are functions of $EI/L$ and powers of $L$.
*   The stiffness method is crucial for analyzing indeterminate structures using computational methods.

---
