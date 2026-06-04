---
title: "Matrix Analysis of Structures:  Reviewing the definition of flexibility and stiffness influence coefficients, and concepts of physical approach"
subject: "ADVANCED STRUCTURAL ANALYSIS"
module: "Module 1: Two hinged Arches:  Analysis of two hinged arches "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e6c"
status: "completed"
scrapedAt: "2026-05-20T18:47:16.795Z"
---
# ADVANCED STRUCTURAL ANALYSIS - Module 1: Two Hinged Arches

## Topic: Matrix Analysis of Structures: Reviewing the definition of flexibility and stiffness influence coefficients, and concepts of physical approach

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand and define flexibility and stiffness influence coefficients in the context of structural analysis.
*   Apply the concept of the physical approach to structural analysis, particularly for two-hinged arches.
*   Relate the principles of flexibility and stiffness matrix methods to the analysis of two-hinged arches.

---

### 1. Introduction to Matrix Analysis of Structures

Matrix analysis is a powerful computational tool for analyzing indeterminate structures. It transforms the equilibrium and compatibility equations of a structure into matrix form, allowing for efficient solution using computers. The core of matrix analysis lies in understanding the relationships between applied loads, deformations, and internal forces, which are expressed through **flexibility** and **stiffness** matrices.

---

### 2. Flexibility Influence Coefficients

**Definition:** Flexibility influence coefficients represent the **displacement** at a point in a structure due to a **unit force** applied at another point. They quantify how flexible a structure is in transmitting displacements.

**Mathematical Representation:**

Consider a structure subjected to a set of applied forces $P_1, P_2, ..., P_n$ at specified degrees of freedom (DOFs). The corresponding displacements at these DOFs are $d_1, d_2, ..., d_n$. The relationship can be expressed as:

$\mathbf{d} = \mathbf{f} \mathbf{P}$

Where:
*   $\mathbf{d}$ is the vector of displacements at the DOFs.
*   $\mathbf{P}$ is the vector of applied forces at the DOFs.
*   $\mathbf{f}$ is the **flexibility matrix** of the structure.

The elements of the flexibility matrix, $f_{ij}$, are the displacements at DOF $i$ due to a unit force applied at DOF $j$, with all other DOFs held against displacement.

**Physical Interpretation of $f_{ij}$:**

*   $f_{ii}$: Displacement at DOF $i$ due to a unit force at DOF $i$. This indicates the direct flexibility at that DOF.
*   $f_{ij}$ (where $i \neq j$): Displacement at DOF $i$ due to a unit force at DOF $j$. This represents the cross-flexibility or influence of a force at $j$ on the displacement at $i$.

**Properties of the Flexibility Matrix:**

*   **Symmetric:** For elastic structures, the flexibility matrix is symmetric, meaning $f_{ij} = f_{ji}$ (Maxwell's Reciprocal Theorem). This implies that the displacement at DOF $i$ due to a unit force at DOF $j$ is equal to the displacement at DOF $j$ due to a unit force at DOF $i$.
*   **Square Matrix:** The size of the flexibility matrix is $n \times n$, where $n$ is the number of DOFs considered.

**Calculating Flexibility Influence Coefficients:**

Flexibility coefficients can be calculated using:

*   **Unit Load Method:** Apply a unit force at the DOF where the displacement is desired and calculate the displacement. To find $f_{ij}$, apply a unit force at DOF $j$ and calculate the displacement at DOF $i$.
*   **Virtual Work Method:** This is a more systematic approach. For $f_{ij}$, apply a unit force at DOF $j$ and calculate the internal forces ($M$, $N$, $V$) in the structure. Then, integrate the product of these internal forces and the internal forces caused by a unit virtual displacement at DOF $i$ over the entire structure.

    *   For axial forces: $f_{ij} = \int_{0}^{L} \frac{N_i N_j}{AE} dx$
    *   For shear forces: $f_{ij} = \int_{0}^{L} \frac{V_i V_j}{AG} dx$
    *   For bending moments: $f_{ij} = \int_{0}^{L} \frac{M_i M_j}{EI} dx$

    Where $N_i, V_i, M_i$ are internal forces due to a unit displacement at DOF $i$, and $N_j, V_j, M_j$ are internal forces due to a unit force at DOF $j$.

**Example:** Consider a simply supported beam of length L, subjected to a force at its midpoint. Let's define DOFs at the midpoint for deflection and rotation.

*   DOF 1: Vertical deflection at mid-span.
*   DOF 2: Rotation at mid-span.

If we consider only deflection at the midpoint due to a vertical load at the midpoint, the flexibility coefficient $f_{11}$ would be the deflection at the midpoint due to a unit vertical load at the midpoint. For a simply supported beam, this is $L^3/(48EI)$.

---

### 3. Stiffness Influence Coefficients

**Definition:** Stiffness influence coefficients represent the **force** required at a point in a structure to cause a **unit displacement** at another point. They quantify how stiff a structure is in resisting deformation.

**Mathematical Representation:**

The relationship between forces and displacements can also be expressed using stiffness coefficients:

$\mathbf{P} = \mathbf{k} \mathbf{d}$

Where:
*   $\mathbf{P}$ is the vector of forces at the DOFs.
*   $\mathbf{d}$ is the vector of displacements at the DOFs.
*   $\mathbf{k}$ is the **stiffness matrix** of the structure.

The elements of the stiffness matrix, $k_{ij}$, are the forces at DOF $i$ required to cause a unit displacement at DOF $j$, with all other DOFs held against displacement.

**Physical Interpretation of $k_{ij}$:**

*   $k_{ii}$: Force at DOF $i$ due to a unit displacement at DOF $i$. This indicates the direct stiffness at that DOF.
*   $k_{ij}$ (where $i \neq j$): Force at DOF $i$ due to a unit displacement at DOF $j$. This represents the cross-stiffness or the influence of a displacement at $j$ on the force at $i$.

**Properties of the Stiffness Matrix:**

*   **Symmetric:** For elastic structures, the stiffness matrix is also symmetric, meaning $k_{ij} = k_{ji}$. This is also a consequence of Maxwell's Reciprocal Theorem.
*   **Square Matrix:** The size of the stiffness matrix is $n \times n$, where $n$ is the number of DOFs considered.
*   **Positive Definite:** For a stable structure, the stiffness matrix is positive definite.

**Relationship between Flexibility and Stiffness Matrices:**

The flexibility and stiffness matrices are inverse of each other:

$\mathbf{f} = \mathbf{k}^{-1}$  or  $\mathbf{k} = \mathbf{f}^{-1}$

This means that if you have calculated one matrix, you can obtain the other by matrix inversion.

**Calculating Stiffness Influence Coefficients:**

Stiffness coefficients are generally more involved to calculate directly, especially for complex structures. However, they are often derived from pre-calculated element stiffness matrices and assembled into a global stiffness matrix.

*   To find $k_{ij}$, apply a unit displacement at DOF $j$ and calculate the forces required at all other DOFs (including DOF $i$) to maintain this deformation.

**Example:** Consider a fixed-fixed beam of length L. If we consider the deflection at the midpoint (DOF 1) due to a vertical displacement at the midpoint:

*   $k_{11}$: The force required at the midpoint to produce a unit vertical displacement at the midpoint. For a fixed-fixed beam, this is $192EI/L^3$.

---

### 4. The Physical Approach to Structural Analysis

The physical approach, particularly in the context of indeterminate structures like two-hinged arches, involves:

*   **Decomposition:** Mentally or physically reducing the indeterminate structure to a stable, determinate structure by introducing release members or hinges.
*   **Primary Structure:** The determinate structure obtained after introducing releases.
*   **Releases:** These are introduced at points where internal forces are unknown or where continuity needs to be broken to make the structure determinate. For a two-hinged arch, the hinges themselves act as releases for moments.
*   **Secondary Stresses:** These are stresses caused by the deformation of the primary structure due to external loads.
*   **Redundant Forces/Moments:** The forces or moments that were "removed" to make the structure determinate. These are the unknowns in the analysis.
*   **Compatibility Conditions:** The deformations in the primary structure must be compensated by the deformation caused by the redundant forces such that the original boundary conditions of the indeterminate structure are satisfied.

**Applying the Physical Approach to Two-Hinged Arches:**

A two-hinged arch is indeterminate to the first degree. The horizontal thrust at the abutments is a common redundant force.

1.  **Make it Determinate:** Remove one of the horizontal reactions at an abutment, turning the two-hinged arch into a simply supported arch (or a beam on two supports). This is our primary structure.
2.  **Apply Loads:**
    *   **Step 1: Apply External Loads:** Apply the actual external loads (vertical and/or horizontal) to the primary structure. This will cause deformations (deflections and rotations) and internal forces (shears, axial forces, bending moments). Calculate the deflection and rotation at the point where the redundant was removed.
    *   **Step 2: Apply Redundant Forces:** Apply a unit value of the redundant force (e.g., a unit horizontal force at the abutment where the reaction was removed) to the primary structure. This will cause deformations.
3.  **Compatibility Equation:** The compatibility condition is that the total horizontal displacement at the abutment where the redundant was removed must be zero (because there is a hinge, and hinges cannot transmit horizontal forces unless they are reacting to a horizontal external load, which is handled by the external load analysis).

    Let:
    *   $\Delta_{H_p}$ = Horizontal deflection at the abutment due to external loads on the primary structure.
    *   $f_{HH}$ = Horizontal deflection at the abutment due to a unit horizontal force at the same abutment (this is a flexibility influence coefficient).

    The compatibility equation is:
    $\Delta_{H_p} + f_{HH} \cdot H = 0$

    Where $H$ is the unknown horizontal thrust.

    Solving for $H$:
    $H = -\frac{\Delta_{H_p}}{f_{HH}}$

4.  **Calculate Internal Forces and Reactions:** Once the redundant force ($H$) is known, it can be treated as an external load on the primary structure. The actual support reactions and internal forces (bending moment, shear force, axial force) in the two-hinged arch can then be calculated by superposition.

---

### 5. Relating Concepts to Two-Hinged Arches

**Flexibility Matrix for Two-Hinged Arches:**

When analyzing a two-hinged arch using the flexibility matrix method, we typically consider the arch as a simply supported beam or frame and introduce releases at the hinges to make it determinate. The redundancies are usually the horizontal reactions at the abutments.

*   **Degrees of Freedom:** We might consider the horizontal and vertical displacements and rotations at the springing points.
*   **Flexibility Coefficients:**
    *   $f_{HH}$: Horizontal displacement at hinge A due to a unit horizontal force at hinge A.
    *   $f_{HV}$: Vertical displacement at hinge A due to a unit horizontal force at hinge A.
    *   $f_{VH}$: Horizontal displacement at hinge A due to a unit vertical force at hinge A.
    *   $f_{VV}$: Vertical displacement at hinge A due to a unit vertical force at hinge A.

    The primary structure will have a flexibility matrix relating the displacements at the hinges to the forces applied at the hinges. For a two-hinged arch, the compatibility conditions at the hinges (zero displacement or specific reactions) are used.

**Stiffness Matrix for Two-Hinged Arches:**

The stiffness matrix approach would involve defining the stiffness of the arch elements and assembling them. This is often more complex for curved members like arches compared to straight beams. The stiffness matrix would relate the forces at the DOFs to the displacements at those DOFs.

**Physical Approach vs. Matrix Methods:**

The physical approach is the conceptual foundation upon which matrix methods are built. The calculation of flexibility influence coefficients ($f_{HH}$ in the two-hinged arch example) is a direct application of the physical approach. Matrix methods automate the process of calculating these coefficients and solving the system of equations for multiple redundancies or DOFs.

---

### 6. Key Points to Remember

*   **Flexibility:** Displacement per unit force. Measured by the flexibility matrix $\mathbf{f}$. $f_{ij}$ is displacement at $i$ due to unit force at $j$.
*   **Stiffness:** Force per unit displacement. Measured by the stiffness matrix $\mathbf{k}$. $k_{ij}$ is force at $i$ due to unit displacement at $j$.
*   **Reciprocity:** For elastic structures, $\mathbf{f}$ and $\mathbf{k}$ are symmetric ($f_{ij} = f_{ji}$, $k_{ij} = k_{ji}$).
*   **Inverse Relationship:** $\mathbf{k} = \mathbf{f}^{-1}$.
*   **Physical Approach:** Decompose into a determinate structure, apply loads and redundants, and satisfy compatibility.
*   **Two-Hinged Arch Redundant:** Typically the horizontal thrust ($H$).
*   **Compatibility for Two-Hinged Arch:** Horizontal deflection due to external loads + horizontal deflection due to redundant thrust = 0 (if no external horizontal force).

---

### 7. Practice Questions and Exercises

**Question 1:**
Define flexibility influence coefficient $f_{ij}$. What is its physical meaning? What is the relationship between $f_{ij}$ and $f_{ji}$ for an elastic structure?

**Answer 1:**
The flexibility influence coefficient $f_{ij}$ is the displacement at DOF $i$ due to a unit force applied at DOF $j$, with all other DOFs restrained against displacement. Its physical meaning is how much the structure deforms at point $i$ when a unit force is applied at point $j$. For an elastic structure, $f_{ij} = f_{ji}$ due to Maxwell's Reciprocal Theorem.

---

**Question 2:**
Define stiffness influence coefficient $k_{ij}$. What is its physical meaning? What is the relationship between $k_{ij}$ and $k_{ji}$ for an elastic structure?

**Answer 2:**
The stiffness influence coefficient $k_{ij}$ is the force required at DOF $i$ to produce a unit displacement at DOF $j$, with all other DOFs maintained at zero displacement. Its physical meaning is how much force is required at point $i$ to cause a unit displacement at point $j$. For an elastic structure, $k_{ij} = k_{ji}$ due to Maxwell's Reciprocal Theorem.

---

**Question 3:**
For a two-hinged arch, if the horizontal thrust at the abutment is considered the primary redundant force, what is the compatibility condition used to solve for this redundant?

**Answer 3:**
The compatibility condition is that the total horizontal displacement at the abutment where the redundant horizontal thrust is acting must be zero. This is expressed as:
$\Delta_{H_{external}} + (\text{flexibility coefficient } f_{HH}) \times H = 0$
where $\Delta_{H_{external}}$ is the horizontal displacement at the abutment due to external loads (without the redundant horizontal thrust) and $H$ is the unknown horizontal thrust.

---

**Question 4:**
Consider a simple case of a single member. If you apply a unit axial force at one end, causing an elongation, how would you define the relevant flexibility and stiffness coefficients?

**Answer 4:**
Let the member have length $L$, Young's modulus $E$, and cross-sectional area $A$.
*   **Flexibility:** Apply a unit axial force ($P=1$) at one end. The elongation ($\delta$) at that end is $L/AE$. So, the flexibility coefficient for axial displacement at a point due to axial force at the same point is $f_{axial} = L/AE$.
*   **Stiffness:** To cause a unit elongation ($\delta=1$) at that end, you need an axial force of $P = AE/L$. So, the stiffness coefficient for axial displacement at a point due to axial force at the same point is $k_{axial} = AE/L$.
    We can see that $k_{axial} = 1/f_{axial}$, confirming the inverse relationship.

---

**Question 5 (Conceptual):**
How does the flexibility matrix method differ conceptually from the stiffness matrix method in analyzing a structure?

**Answer 5:**
*   **Flexibility Matrix Method (Force Method):**
    *   Starts with a determinate structure.
    *   Redundant forces are the unknowns.
    *   Compatibility equations (displacements) are enforced.
    *   The flexibility matrix relates displacements to forces.
    *   Typically used for structures with fewer redundancies.

*   **Stiffness Matrix Method (Displacement Method):**
    *   Starts with the indeterminate structure.
    *   Unknown displacements are the primary unknowns.
    *   Equilibrium equations (forces) are enforced.
    *   The stiffness matrix relates forces to displacements.
    *   Generally preferred for computer analysis of complex structures with many DOFs.

---
