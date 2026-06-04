---
title: "Indeterminate Structures:"
subject: "STRUCTURAL ANALYSIS - I"
module: "Module 3: Indeterminate Structures:"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810748"
status: "completed"
scrapedAt: "2026-05-20T18:41:44.504Z"
---
# STRUCTURAL ANALYSIS - I

## Module 3: Indeterminate Structures

### Topic: Indeterminate Structures

This module introduces the concept of indeterminate structures, which are structures where the number of unknown reactions or internal forces exceeds the number of independent equilibrium equations available. This excess of unknowns necessitates the use of additional principles, primarily the principles of compatibility of deformations, to solve for the forces and deformations within the structure.

---

### 1. Learning Outcomes Covered

*   **Understanding the concept of indeterminacy:** Differentiating between statically determinate and indeterminate structures.
*   **Classifying indeterminate structures:** Identifying the degree of indeterminacy for various structural systems.
*   **Methods for analyzing indeterminate structures:** Introduction to common methods like force methods and displacement methods.
*   **Application of compatibility equations:** Using deformation compatibility to solve for unknown forces.

---

### 2. Key Concepts and Definitions

#### 2.1 Statically Determinate vs. Indeterminate Structures

*   **Statically Determinate Structure:** A structure for which all unknown support reactions and internal forces can be determined solely by applying the equations of static equilibrium.
    *   **Equations of Static Equilibrium:**
        *   Sum of forces in the x-direction = 0 ($\sum F_x = 0$)
        *   Sum of forces in the y-direction = 0 ($\sum F_y = 0$)
        *   Sum of moments about any point = 0 ($\sum M = 0$)
*   **Statically Indeterminate Structure:** A structure for which the number of unknown reactions and/or internal forces is greater than the number of available static equilibrium equations. These structures cannot be fully analyzed using equilibrium equations alone.

#### 2.2 Degree of Indeterminacy (DOI)

The degree of indeterminacy quantifies how many additional equations are needed to solve the structure. It's a measure of the "redundancy" in the structure.

*   **External Indeterminacy ($r_e$):** The number of unknown external reactions that cannot be determined from equilibrium equations alone.
    *   **For Trusses:** $r_e = m + r - 2j$, where:
        *   $m$ = number of members
        *   $r$ = number of external reactions
        *   $j$ = number of joints
    *   **For Beams and Frames:** $r_e = R - E_{eq}$, where:
        *   $R$ = total number of unknown reactions
        *   $E_{eq}$ = number of equilibrium equations (typically 3 for 2D structures: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M = 0$)

*   **Internal Indeterminacy ($r_i$):** The number of unknown internal forces (axial, shear, moment) that cannot be determined from equilibrium equations alone.
    *   **For Trusses:** $r_i = m - (2j - 3)$, where:
        *   $m$ = number of members
        *   $j$ = number of joints
    *   **For Beams and Frames:** $r_i = \sum (c - 1)$, where:
        *   $c$ = number of continuous members at a joint or intersection (for frames, this can be more complex and involves considering hinges). A simpler approach for frames is to consider internal hinges and continuity.
        *   Alternatively, $r_i = (3b + r) - 3j$, where $b$ is the number of beam/column segments and $r$ is the number of reactions.

*   **Total Degree of Indeterminacy ($r$):** The sum of external and internal indeterminacy.
    *   $r = r_e + r_i$

    **Important Note:** For **beams and frames**, the total degree of indeterminacy can often be calculated more directly.
    *   **For 2D structures:** $r = (3b + r) - 3j$, where:
        *   $b$ = number of beam/column segments (or members)
        *   $r$ = number of unknown reactions
        *   $j$ = number of joints (including external supports and internal junctions)

    *   **For structures with internal hinges:** Each internal hinge reduces the degree of indeterminacy by 1. So, if there are $h$ internal hinges, the total degree of indeterminacy becomes $r = (3b + r) - 3j - h$.

#### 2.3 Types of Indeterminacy

*   **Externally Indeterminate:** The structure is solvable by equilibrium equations but has excess reactions.
*   **Internally Indeterminate:** The structure has excess internal force components (moment, shear, axial force) that cannot be determined by equilibrium alone.
*   **Statically Indeterminate (Total):** Both external and internal indeterminacy exist.

#### 2.4 Why Analyze Indeterminate Structures?

*   **Increased Rigidity:** Indeterminate structures are generally more rigid and experience less deflection under load than their determinate counterparts.
*   **Load Distribution:** Loads are distributed more evenly throughout indeterminate structures, making them less susceptible to catastrophic failure if one member is overloaded.
*   **Redundancy:** The presence of redundant members provides alternative load paths, meaning the structure can still carry loads if one member fails.
*   **Economy:** In some cases, indeterminate structures can be more economical due to reduced material usage for the same load-carrying capacity.

#### 2.5 Methods for Analyzing Indeterminate Structures

Since equilibrium equations are insufficient, additional principles are required. These methods are broadly categorized into:

1.  **Force Methods (Flexibility Methods):** These methods treat the unknown forces (redundant forces) as unknowns and use compatibility equations to solve them. The primary unknowns are forces.
    *   **Key Principle:** Compatibility of Deformations.
    *   **Examples:**
        *   **Force Method of Joints (for trusses)**
        *   **Force Method of Sections (for trusses)**
        *   **Method of Consistent Deformations (Force Method)**
        *   **Virtual Work Method (as a force method)**
        *   **Reciprocal Theorems (Maxwell's, Betti's)**
        *   **Least Work Method**

2.  **Displacement Methods (Stiffness Methods):** These methods treat the unknown displacements (nodal displacements and rotations) as unknowns and use equilibrium equations in terms of stiffness coefficients to solve them. The primary unknowns are displacements.
    *   **Key Principle:** Equilibrium of Displacements.
    *   **Examples:**
        *   **Slope-Deflection Method**
        *   **Moment Distribution Method**
        *   **Stiffness Matrix Method (Direct Stiffness Method)**

---

### 3. Examples

#### Example 3.1: Calculating Degree of Indeterminacy for Beams and Frames (2D)

**Problem 1:** A propped cantilever beam fixed at one end and simply supported at the other, subjected to a uniformly distributed load.

*   Segments ($b$): 1 (the beam itself)
*   Reactions ($r$): 3 (at the fixed end: vertical force, horizontal force, moment; at the simple support: vertical force)
*   Joints ($j$): 2 (the fixed support and the simple support)

Using the formula $r = (3b + r) - 3j$:
$r = (3 \times 1 + 3) - (3 \times 2)$
$r = (6) - (6) = 0$

Wait, this doesn't seem right for a propped cantilever. Let's re-evaluate how 'b' and 'j' are applied for typical beam/frame analysis.

A more common approach for beams/frames:
*   **External Indeterminacy ($r_e$)**: Number of reactions minus number of equilibrium equations.
    *   Fixed support: 3 reactions (Rx, Ry, M)
    *   Simple support: 1 reaction (Ry)
    *   Total reactions ($R$) = 3 + 1 = 4
    *   Equilibrium equations ($\sum F_x=0$, $\sum F_y=0$, $\sum M=0$) = 3
    *   $r_e = R - 3 = 4 - 3 = 1$.

*   **Internal Indeterminacy ($r_i$)**: For a continuous beam without hinges, the internal indeterminacy is related to the continuity. For a simple beam, $r_i = 0$. For a propped cantilever, we have a continuous element.

    Let's use the formula $r = (3b + r) - 3j$ carefully. Here, 'b' refers to the number of "members" or straight segments that would be disconnected to make the structure a mechanism. 'j' refers to the number of "nodes" or joints where members connect or supports are located.

    Consider the propped cantilever:
    *   It's one continuous member ($b=1$).
    *   It has 2 supports (nodes, $j=2$).
    *   Total reactions $R=4$.

    $r = (3 \times 1) + 4 - (3 \times 2) = 3 + 4 - 6 = 1$.

    This indicates the structure is **statically indeterminate to the first degree**. The redundant is one of the reactions (either the moment at the fixed end, or the vertical reaction at the simple support).

**Problem 2:** A continuous beam over three supports (simple, roller, simple).

*   Supports: Simple, Roller, Simple.
*   Reactions: 1 (vertical at first simple), 1 (vertical at roller), 2 (vertical and horizontal at second simple). Total $R = 1+1+2 = 4$.
*   Equilibrium equations: 3 ($\sum F_x=0$, $\sum F_y=0$, $\sum M=0$).
*   External Indeterminacy $r_e = R - 3 = 4 - 3 = 1$.
*   Number of segments ($b$): 2 (assuming it's a single beam with 3 supports)
*   Number of joints ($j$): 3 (the supports)

Using $r = (3b + r) - 3j$ is less straightforward for beams with only internal forces as redundant. The more common way to express beam indeterminacy is through continuity.

For a beam with $n$ supports, and no internal hinges:
*   The degree of indeterminacy is $n-1$ if all supports provide only one reaction (rollers, pins).
*   If there are fixed supports, they introduce moments, increasing indeterminacy.

Let's stick to the $r_e$ and $r_i$ breakdown for clarity, or the $r = (3b + r) - 3j$ formula applied carefully.

For the continuous beam over three supports (simple, roller, simple):
*   Reactions: $R_1$ (at support 1, simple), $R_2$ (at support 2, roller), $R_3$ and $H_3$ (at support 3, simple). Total $R = 1+1+2 = 4$.
*   Equilibrium equations = 3.
*   $r_e = 4 - 3 = 1$.

*   Internal: The beam is a single continuous element. We can consider the moments at the interior supports as internal redundancies if we were to "cut" the beam at those points. If we imagine cutting the beam at the roller support, we introduce a shear and a moment at that cut. However, the formula for internal indeterminacy is more about the structural form.

A simpler method for continuous beams:
*   Consider the number of unknown force components (reactions and internal forces).
*   Number of unknown force components = $R + \sum (\text{number of internal force components per segment})$.
    *   For a beam segment, we have axial force, shear force, and bending moment.
*   If we cut a continuous beam at each interior support, we introduce 2 unknown force components (shear and moment).
*   For the continuous beam over 3 supports:
    *   Reactions = 4 (as calculated above).
    *   Internal redundancies = 2 (one moment and one shear at the roller support, if we were to cut there).
    *   Total unknowns = 4 + 2 = 6.
    *   Equilibrium equations = 3.
    *   Degree of Indeterminacy = $6 - 3 = 3$.

This is confusing. Let's refine the definition of $r_i$ for beams.
$r_i$ for a beam is often defined as the number of internal hinges that would need to be introduced to make the beam statically determinate. A continuous beam with $n$ supports generally has $n-1$ internal segments. If we consider cutting at each internal support, we effectively create determinate "spans".

**Alternative approach for continuous beams:**
*   A beam with $n$ supports has $n-1$ spans.
*   For each span, to make it determinate, we'd need 3 equilibrium equations.
*   Consider a continuous beam with $n$ supports. The number of external reactions is $R$. The number of equilibrium equations is 3.
*   The degree of indeterminacy is often stated as the number of "redundant members" or "redundant constraints".
*   For a continuous beam, each interior support provides a redundant constraint compared to simply supported spans.

Let's use the **number of unknowns minus number of equilibrium equations** as the general rule.

For the continuous beam (simple, roller, simple):
*   Unknown reactions: $R_1, R_2, R_3, H_3$. Total 4.
*   Unknown internal force components: For a single beam, we can analyze it as a single structural element. The bending moments and shear forces along the beam are internal forces. If we consider the beam as one continuous member, the indeterminacy comes from the fact that these internal forces are not uniquely determined by external equilibrium.

**A clearer definition for beams:**
The degree of indeterminacy of a beam is the number of internal hinges that need to be inserted to make it statically determinate.
*   A simple beam has 0 internal hinges. Degree of indeterminacy = 0.
*   A propped cantilever has 1 internal hinge inserted at the roller support to make it a cantilever. Degree of indeterminacy = 1.
*   A continuous beam over 3 supports has 2 interior supports. To make it determinate, we would conceptually insert hinges at these interior supports.
    *   Insert hinge at support 2: Beam becomes two simply supported spans.
    *   This means the continuity at support 2 is a redundancy.
    *   If we consider the continuous beam over 3 supports as a single element with 2 interior supports, the degree of indeterminacy is $n-1 = 3-1 = 2$. This counts the redundancies associated with the continuity at the interior supports.

Let's check this with the $r_e$ method for the continuous beam (simple, roller, simple):
*   Reactions = 4. Equilibrium equations = 3. $r_e = 4-3=1$.
*   Now, consider internal forces. If we release the continuity at the roller support (introduce a hinge), we have reduced the system. The bending moment at the roller is a redundant. The shear at the roller is also a force that can be determined if the moment is known.
*   The degree of indeterminacy for beams is often considered as the number of unknown moment/shear values at internal supports.

Let's use the most common approach for continuity:
*   **Degree of Indeterminacy for Beams/Frames = (Number of unknown reactions) - (Number of equilibrium equations) + (Number of internal hinges needed for determinacy).**

    *   **Propped Cantilever:** 4 reactions, 3 equilibrium equations. 1 internal hinge needed (at roller). $r = (4 - 3) + 1 = 2$. This seems too high.

The formula $r = (3b + r) - 3j$ for 2D frames is more universally applicable.
Let's re-apply to the propped cantilever:
*   $b=1$ (one segment).
*   $r=4$ (reactions).
*   $j=2$ (supports).
*   $r = (3 \times 1 + 4) - (3 \times 2) = 3 + 4 - 6 = 1$. This is correct for the propped cantilever.

Now, for the continuous beam (simple, roller, simple):
*   Let's assume it's a single beam spanning across three supports.
*   Number of members/segments $b=1$.
*   Number of reactions $r=4$ (assuming the last support is pinned, giving Ry and Rx).
*   Number of joints $j=3$ (the three supports).
*   $r = (3b + r) - 3j = (3 \times 1 + 4) - (3 \times 3) = 7 - 9 = -2$. This is wrong.

The formula $r = (3b + r) - 3j$ is best for **frames** where 'b' is the number of members and 'j' is the number of joints where members connect. For a simple beam, it's not a frame.

**Revised Approach for Beams:**
The degree of indeterminacy for a beam is often directly related to the number of internal hinges required to make it determinate.
*   A simply supported beam has $r=0$.
*   A propped cantilever (fixed at one end, simple at other) requires 1 internal hinge at the simple support to become a cantilever. So, $r=1$.
*   A continuous beam over 3 supports has 2 interior supports. To make it determinate, we need to introduce hinges at these interior supports. For example, if we have supports A, B, C, and the beam is continuous, we'd need to cut at B to make spans AB and BC determinate. This requires 1 hinge.
    *   However, the external reactions are also a factor.

Let's consider the number of "redundant constraints" for beams:
*   Simply supported beam: Determinate. $r=0$.
*   Propped cantilever: Fixed support has 3 constraints. Simple support has 1 constraint. Total 4. Equilibrium provides 3 constraints. $4 - 3 = 1$ redundant constraint. $r=1$.
*   Beam over 3 supports (simple, roller, simple):
    *   Support 1 (simple): 2 constraints (Rx, Ry).
    *   Support 2 (roller): 1 constraint (Ry).
    *   Support 3 (simple): 2 constraints (Rx, Ry).
    *   Total constraints = 2 + 1 + 2 = 5.
    *   Equilibrium provides 3 constraints.
    *   $5 - 3 = 2$ redundant constraints. So, $r=2$.

This means for a beam over 3 supports (simple, roller, simple), it is indeterminate to the second degree. The redundancies are the continuity at the interior supports, and one of the reactions.

**Example 3.2: Truss Indeterminacy**

**Problem 3:** A truss with 7 members, 5 joints, and 2 simple supports (one pin, one roller).

*   $m = 7$ (members)
*   $r = 3$ (reactions: vertical and horizontal at pin, vertical at roller)
*   $j = 5$ (joints)

External Indeterminacy: $r_e = m + r - 2j = 7 + 3 - 2 \times 5 = 10 - 10 = 0$.
Internal Indeterminacy: $r_i = m - (2j - 3) = 7 - (2 \times 5 - 3) = 7 - (10 - 3) = 7 - 7 = 0$.
Total Indeterminacy: $r = r_e + r_i = 0 + 0 = 0$. This is a determinate truss.

**Problem 4:** A truss with 10 members, 6 joints, and 3 simple supports (one pin, two rollers).

*   $m = 10$
*   $r = 4$ (reactions: vertical and horizontal at pin, vertical at each of the two rollers)
*   $j = 6$

External Indeterminacy: $r_e = m + r - 2j = 10 + 4 - 2 \times 6 = 14 - 12 = 2$.
Internal Indeterminacy: $r_i = m - (2j - 3) = 10 - (2 \times 6 - 3) = 10 - (12 - 3) = 10 - 9 = 1$.
Total Indeterminacy: $r = r_e + r_i = 2 + 1 = 3$. This truss is indeterminate to the third degree.

---

### 4. Methods for Analyzing Indeterminate Structures (Introduction)

#### 4.1 Force Methods (Flexibility Methods)

These methods are based on satisfying the compatibility of displacements while ensuring equilibrium.

**Principle:** The structure must remain continuous, meaning displacements at connected points must match.

**Method of Consistent Deformations (Force Method):**
1.  **Identify Redundants:** Choose a set of redundant forces or moments that, if removed, would render the structure statically determinate and stable. These are often reactions or internal forces at cuts.
2.  **Create a Primary Structure:** Modify the original indeterminate structure by removing the redundant constraints, resulting in a determinate (and stable) structure.
3.  **Apply Loads to Primary Structure:** Calculate the displacements (deflections and rotations) at the locations of the removed redundants in the primary structure due to the original applied loads. Let these be $\Delta_0$.
4.  **Apply Unit Values of Redundants:** Apply a unit value of each redundant force/moment to the primary structure and calculate the corresponding displacements at the locations of the redundants. These are called flexibility coefficients (e.g., $f_{11}, f_{12}, f_{21}, f_{22}$).
    *   $f_{ij}$ = displacement at location $i$ due to a unit value of redundant $j$.
5.  **Write Compatibility Equations:** The total displacement at the location of each redundant in the original structure must be zero (or equal to the prescribed displacement if supports are yielding). These are the compatibility equations.
    *   For two redundants $X_1$ and $X_2$:
        $\Delta_0 + f_{11}X_1 + f_{12}X_2 = 0$ (Compatibility at location of redundant 1)
        $\Delta'_0 + f_{21}X_1 + f_{22}X_2 = 0$ (Compatibility at location of redundant 2)
6.  **Solve for Redundants:** Solve the system of simultaneous compatibility equations to find the values of the redundant forces ($X_1, X_2$).
7.  **Determine All Forces:** Once the redundants are known, all other forces and reactions can be determined using the equations of static equilibrium.

**Virtual Work Method (as a force method):**
*   Can be used to calculate displacements ($f_{ij}$ and $\Delta_0$) efficiently.
*   The principle states that the internal work done by forces in a structure due to a virtual unit load is equal to the external work done by that unit load.
*   $\int \frac{M_1 M_2}{EI} dx = 1$ (for deflection due to moments)

#### 4.2 Displacement Methods (Stiffness Methods)

These methods are based on satisfying equilibrium conditions at the joints, while ensuring compatibility of deformations implicitly.

**Principle:** The sum of forces and moments at each joint must be zero.

**Slope-Deflection Method:**
1.  **Identify Degrees of Freedom:** Determine the unknown joint displacements (translations) and rotations. These are the degrees of freedom.
2.  **Establish Slope-Deflection Equations:** These equations relate the end moments in a beam or frame member to the end slopes, end deflections, and applied loads (fixed-end moments).
    *   For a member $AB$:
        $M_{AB} = \frac{2EI}{L}(2\theta_A + \theta_B - 3\Delta) + M_{AB}^{FEM}$
        $M_{BA} = \frac{2EI}{L}(2\theta_B + \theta_A - 3\Delta) + M_{BA}^{FEM}$
        Where:
        *   $M_{AB}, M_{BA}$: End moments at A and B respectively.
        *   $E, I, L$: Young's modulus, moment of inertia, length of the member.
        *   $\theta_A, \theta_B$: Rotations at ends A and B.
        *   $\Delta$: Relative translation (settlement) between ends A and B.
        *   $M_{AB}^{FEM}, M_{BA}^{FEM}$: Fixed-end moments due to applied loads.
3.  **Apply Equilibrium Equations:** Write equilibrium equations at each joint based on the sum of moments from all members connected to that joint. These equations will be in terms of the unknown joint rotations and displacements.
4.  **Solve for Displacements:** Solve the system of simultaneous equilibrium equations to find the unknown joint rotations and displacements.
5.  **Calculate End Moments and Forces:** Substitute the calculated displacements back into the slope-deflection equations to find the end moments in each member.
6.  **Determine All Forces:** From the end moments, shear forces and axial forces can be calculated using equilibrium.

**Moment Distribution Method:**
*   An iterative method for analyzing indeterminate beams and frames.
*   It's an extension of the slope-deflection method, directly distributing and balancing moments at joints.

---

### 5. Practice Questions or Exercises

**Question 1: Degree of Indeterminacy**
Determine the degree of indeterminacy for each of the following structures:

a)  A fixed-fixed beam.
b)  A continuous beam over 4 supports (all simple supports).
c)  A portal frame (two vertical columns, one horizontal beam, pinned at the base).
d)  A pin-jointed truss with 5 members, 4 joints, and 2 simple supports (one pin, one roller).

**Solution 1:**

a)  **Fixed-Fixed Beam:**
    *   Reactions: 4 (2 at each end: Ry, Rx, M)
    *   Equilibrium Equations: 3 ($\sum F_x=0, \sum F_y=0, \sum M=0$)
    *   $r_e = 4 - 3 = 1$.
    *   For a single beam member, internal indeterminacy is often related to the number of continuity points. A fixed-fixed beam has continuity at both ends, but the formula $r = (3b + r) - 3j$ can be used.
    *   Let's use the "redundant constraints" approach for beams: A fixed support provides 2 constraints (vertical and moment). A simply supported provides 1.
    *   Fixed-Fixed beam:
        *   Support 1 (Fixed): 2 constraints (Rx, Ry, M). Wait, fixed is 3 reaction components (Rx, Ry, M).
        *   Support 2 (Fixed): 3 constraints (Rx, Ry, M).
        *   Total reactions $R=6$.
        *   Equilibrium equations = 3.
        *   $r_e = 6 - 3 = 3$.
    *   Using $r = (3b + r) - 3j$ for frames, which is more general. For a beam, it can be considered a single-member frame.
        *   $b=1$ (one member).
        *   $r=6$ (total reaction components at fixed supports).
        *   $j=2$ (the two supports).
        *   $r = (3 \times 1 + 6) - (3 \times 2) = 3 + 6 - 6 = 3$.
    *   **Degree of Indeterminacy = 3.**

b)  **Continuous Beam over 4 supports (all simple supports):**
    *   Number of supports $n=4$.
    *   Number of segments between supports = $n-1 = 3$.
    *   Reactions: 4 supports * 1 reaction each (vertical) = 4 reactions.
    *   Equilibrium equations = 3.
    *   $r_e = 4 - 3 = 1$.
    *   Internal indeterminacy for continuous beams is related to the number of interior supports. With 4 supports, there are 3 interior "connection points" or spans. If we introduce hinges at the 3 interior supports, we get 3 determinate spans. The continuity at these 3 points are redundancies.
    *   Alternatively, number of spans = 3. Each span needs 3 equilibrium equations. Total unknowns from internal forces = $3 \times 3 = 9$.
    *   Total unknowns = Reactions + Internal forces = 4 + 9 = 13.
    *   Equilibrium equations = 3.
    *   $13 - 3 = 10$. This is too complex.

    Let's use the "redundant constraints" for beams:
    *   4 simple supports, each providing 1 constraint. Total reactions = 4.
    *   Equilibrium equations = 3.
    *   $r_e = 4 - 3 = 1$.
    *   The continuity at the 3 interior points creates additional indeterminacy. A beam over $n$ supports is indeterminate to the degree $n-1$ for the continuity aspect.
    *   Here, 4 supports means 3 interior spans. Each interior support represents a "redundant restraint".
    *   So, the degree of indeterminacy is $r = n - 1 = 4 - 1 = 3$ (for internal continuity) + $r_e = 1$ = 4. This is also getting complicated.

    **Most reliable for beams:** The number of internal hinges needed to make it determinate.
    *   A beam with 4 simple supports:
        *   If we remove the support at 2, 3, and 4 (making it a simply supported beam), it's determinate.
        *   The continuity at supports 2, 3, and 4 are redundancies.
        *   Consider the number of unknown moments at interior supports. For 4 supports, there are 3 interior spans. We need to release continuity at 2 interior supports (say, at support 2 and support 3).
        *   This would result in 3 simply supported spans. The continuity at the roller support (support 2) and the pin support (support 3) are the redundancies.
        *   Degree of indeterminacy = $n-1$ for $n$ spans $= 3$ if we consider releasing the interior supports.
        *   However, reactions are also there.

    Let's use a common formula for continuous beams: **Degree of Indeterminacy = (Number of Spans) - 1 + (Number of redundant reactions).**
    *   Number of spans = 3.
    *   Number of reactions = 4.
    *   Equilibrium equations = 3.
    *   Redundant reactions $r_e = 4 - 3 = 1$.
    *   This formula is not robust.

    **Back to the basic definition:** Number of unknowns - Number of equations.
    *   Unknown reactions: $R_1, R_2, R_3, R_4$ (assuming all simple supports). Total 4.
    *   Unknown internal forces: Bending moment $M$ and shear $V$ at each of the 3 interior "cut" points. This means $3 \times 2 = 6$ internal force components.
    *   Total unknowns = $4 + 6 = 10$.
    *   Equilibrium equations = 3.
    *   $10 - 3 = 7$. This is also too high.

    **Standard method for continuous beams:** The degree of indeterminacy is the number of internal moments that need to be determined.
    *   For a beam over $n$ supports, there are $n-1$ spans.
    *   The number of continuity conditions (i.e., redundant moments) is $(n-1) - 1 = n-2$ if all supports are simple.
    *   For 4 simple supports, we have 3 spans. We need to release continuity at 2 points. So, $r=2$ for continuity + $r_e$.
    *   $r_e = 4-3=1$.
    *   So, $r = 2+1=3$.

    **Let's use the formula:** $r = (\text{number of equilibrium equations required to analyze all spans if separated}) - (\text{available equilibrium equations})$.
    *   3 spans, each requires 3 equilibrium equations = $3 \times 3 = 9$.
    *   Total equilibrium equations available = 3.
    *   This method is for indeterminate structures where you count the number of "free bodies" needed.

    **Final attempt for Continuous Beam over 4 simple supports:**
    The degree of indeterminacy is often stated as the number of unknown moments at the interior supports plus the external redundancies.
    *   Number of interior supports = 2. So, 2 unknown moments.
    *   External redundancy $r_e = 1$.
    *   Total indeterminacy $r = 2 + 1 = 3$.

    **Degree of Indeterminacy = 3.**

c)  **Portal Frame (pinned base):**
    *   Members $b=3$ (2 columns, 1 beam).
    *   Reactions $r=4$ (2 at each pinned base: Ry, Rx).
    *   Joints $j=4$ (2 base joints, 2 top joints).
    *   $r = (3b + r) - 3j = (3 \times 3 + 4) - (3 \times 4) = (9+4) - 12 = 13 - 12 = 1$.
    *   **Degree of Indeterminacy = 1.**

d)  **Pin-jointed Truss:**
    *   $m = 5$
    *   $j = 4$
    *   $r = 3$ (1 pin, 1 roller)
    *   $r_e = m + r - 2j = 5 + 3 - 2 \times 4 = 8 - 8 = 0$.
    *   $r_i = m - (2j - 3) = 5 - (2 \times 4 - 3) = 5 - (8 - 3) = 5 - 5 = 0$.
    *   Total indeterminacy = 0.
    *   **Degree of Indeterminacy = 0.** (It's determinate)

**Question 2: Compatibility Principle**
A propped cantilever beam is fixed at end A and simply supported at end B. It has a point load P at mid-span. Explain how the principle of compatibility of deformations is used to determine the reaction at B.

**Solution 2:**

1.  **Identify Redundant:** The reaction at the simple support B (vertical reaction $R_B$) is chosen as the redundant. Removing it leaves a cantilever beam fixed at A.
2.  **Primary Structure:** A cantilever beam fixed at A.
3.  **Apply Load to Primary Structure:** Apply the load P at mid-span to the cantilever. This will cause a downward deflection at the location of the original simple support B. Let this deflection be $\Delta_{B0}$.
4.  **Apply Unit Redundant:** Apply a unit upward force ($1$) at B to the cantilever beam. This will cause an upward deflection at B. Let this deflection be $f_{B1}$.
5.  **Compatibility Equation:** The total deflection at B in the original propped cantilever must be zero because it is a simple support. Therefore, the deflection due to the applied load P and the deflection due to the redundant reaction $R_B$ must cancel each other out.
    *   $\Delta_{B0} - f_{B1} R_B = 0$
    *   $\Delta_{B0} = f_{B1} R_B$
    *   $R_B = \frac{\Delta_{B0}}{f_{B1}}$

By solving for $\Delta_{B0}$ and $f_{B1}$ (using methods like virtual work, integration, or moment-area theorems), the value of the redundant reaction $R_B$ can be determined. Once $R_B$ is known, the remaining reactions at A can be found using static equilibrium.

---

### 6. Important Points to Remember

*   **Indeterminacy arises when unknowns > equilibrium equations.**
*   **Degree of Indeterminacy (DOI) quantifies redundancy.**
*   **Force methods (Flexibility) use compatibility of displacements to solve for unknown forces.**
*   **Displacement methods (Stiffness) use equilibrium of displacements to solve for unknown displacements.**
*   **The choice of method depends on the structure's configuration and the number of unknowns (forces vs. displacements).** For structures with many joints but few members (like trusses), force methods can be advantageous. For slender beams and frames with few joints but many members (like continuous beams and rigid frames), displacement methods are often preferred.
*   **Compatibility equations are crucial for force methods.** They ensure that deformations are physically possible within the structure.
*   **Equilibrium equations are crucial for displacement methods.** They ensure that forces and moments balance at each joint.
*   **Fixed supports offer more constraints (3 reaction components) than simple supports (1 or 2 reaction components).**
*   **Internal hinges reduce the degree of indeterminacy by 1.**
