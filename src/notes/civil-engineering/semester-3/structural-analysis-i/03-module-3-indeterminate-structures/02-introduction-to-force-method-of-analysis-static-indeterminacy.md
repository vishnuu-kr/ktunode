---
title: "Introduction to force method of analysis. Static indeterminacy"
subject: "STRUCTURAL ANALYSIS - I"
module: "Module 3: Indeterminate Structures:"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810749"
status: "completed"
scrapedAt: "2026-05-20T18:41:45.204Z"
---
# Structural Analysis - I: Module 3 - Indeterminate Structures

## Topic: Introduction to Force Method of Analysis & Static Indeterminacy

---

### **Learning Outcomes:**

*   Understand the concept of indeterminate structures.
*   Define static indeterminacy and explain its significance.
*   Determine the degree of static indeterminacy for various structural systems.
*   Introduce the fundamental principles of force methods of analysis.

---

### **1. Introduction to Indeterminate Structures**

#### **1.1 What are Indeterminate Structures?**

*   **Definition:** Indeterminate structures are structures for which the equilibrium equations alone are not sufficient to determine all the unknown reactions and internal forces.
*   **Contrast with Determinate Structures:** In determinate structures, all unknown forces and moments can be found solely by applying the equations of static equilibrium ($\Sigma F_x = 0$, $\Sigma F_y = 0$, $\Sigma M = 0$).
*   **Why Indeterminacy Arises:** Indeterminacy arises when there are more unknown support reactions or internal force components than can be solved by the basic equilibrium equations. This is often due to:
    *   **Redundant Supports:** Extra supports that are not required for basic stability.
    *   **Redundant Members:** Additional members in a truss that are not essential for equilibrium.
    *   **Continuous Beams/Frames:** Beams or frames supported at more than two points or having rigid joints creating continuity.

#### **1.2 Significance of Indeterminate Structures**

*   **Increased Rigidity and Stability:** Indeterminate structures are generally more rigid and stable than their determinate counterparts. This means they deflect less under load, which is crucial for many engineering applications.
*   **Load Redistribution:** If one part of an indeterminate structure is damaged or fails, the load can be redistributed to other parts, preventing immediate catastrophic collapse. This is a significant safety advantage.
*   **More Efficient Material Usage:** Due to their inherent rigidity, indeterminate structures can sometimes be designed with less material for the same load-carrying capacity compared to determinate structures.
*   **Stress Concentration:** Indeterminate structures can experience stress concentrations at points of discontinuity, which need careful consideration during design.
*   **Analysis Complexity:** The analysis of indeterminate structures is more complex, requiring additional methods beyond basic statics.

---

### **2. Static Indeterminacy**

#### **2.1 Definition of Static Indeterminacy (Degree of Static Indeterminacy - DSI)**

*   **Definition:** The degree of static indeterminacy (DSI) is the number of unknown forces or moments that cannot be determined from the equations of static equilibrium alone. It quantifies how "statically indeterminate" a structure is.
*   **Also known as:** Degree of Redundancy.

#### **2.2 Classification of Indeterminate Structures**

*   **Statically Determinate:** DSI = 0. All unknowns can be found from equilibrium equations.
*   **Statically Indeterminate:** DSI > 0. More unknowns than equilibrium equations.

#### **2.3 Calculating Static Indeterminacy**

The method for calculating DSI depends on the type of structure:

##### **2.3.1 Beams and Frames**

For beams and frames, we consider both external (support reactions) and internal (moments, shears, axial forces) indeterminacy.

*   **External Static Indeterminacy ($D_{se}$):** The number of unknown external reactions that exceed the number of available external equilibrium equations.
    *   **Equations of Equilibrium:**
        *   For 2D structures: $\Sigma F_x = 0$, $\Sigma F_y = 0$, $\Sigma M_z = 0$ (3 equations).
        *   For 3D structures: $\Sigma F_x = 0$, $\Sigma F_y = 0$, $\Sigma F_z = 0$, $\Sigma M_x = 0$, $\Sigma M_y = 0$, $\Sigma M_z = 0$ (6 equations).
    *   **Formula (2D):** $D_{se} = (\text{Number of unknown reactions}) - (\text{Number of external equilibrium equations})$
        $D_{se} = R - 3$ (for 2D structures)
        Where R is the total number of unknown support reactions.

*   **Internal Static Indeterminacy ($D_{si}$):** The number of unknown internal force components (axial force, shear force, bending moment) that exceed the number of internal equilibrium equations available for joints or sections.
    *   **Equations of Equilibrium at a Joint:**
        *   For 2D frames: $\Sigma F_x = 0$, $\Sigma F_y = 0$, $\Sigma M = 0$ at a joint. However, only two are independent if the joint is considered as a point. For a rigid joint in a frame, we typically consider two equilibrium equations for forces at the joint ($\Sigma F_x$, $\Sigma F_y$) and one for moment if it's a rigid connection. If we cut a member at a section, we introduce axial force, shear force, and bending moment (3 unknowns).
    *   **Formula (2D Frames):** $D_{si} = \sum (\text{Number of internal forces in each member}) - \sum (\text{Number of internal equilibrium equations})$
        *   For members that are not part of a loop or continuity: typically 3 internal forces (N, V, M).
        *   For a continuous beam or frame, we can count the number of internal force components (N, V, M) and subtract the number of equilibrium equations available for joints.
        *   **Simplified Approach for Frames:** Consider the number of members ($m$), number of joints ($j$), and number of included mechanisms/hinges.
            *   For a planar rigid frame without hinges: $D_{si} = 3m + r - 3j$, where $r$ is the number of releases (hinges). If no hinges, $D_{si} = 3m - 3j$.
            *   This formula accounts for the internal forces (3 per member: N, V, M) and then subtracts the equilibrium conditions at each joint (3 per joint).

*   **Total Static Indeterminacy (DSI) for Beams and Frames:**
    *   $DSI = D_{se} + D_{si}$

##### **2.3.2 Trusses**

For trusses, we consider the number of members and joints.

*   **Components:**
    *   Number of unknown member forces ($m$): Each member can carry only axial force.
    *   Number of joints ($j$): The equilibrium equations are applied at each joint.
    *   Number of external reactions ($r$): Number of support reactions.
*   **Equations of Equilibrium for Trusses:**
    *   At each joint, we have two equilibrium equations: $\Sigma F_x = 0$ and $\Sigma F_y = 0$. So, for $j$ joints, we have $2j$ equations.
*   **Formula for Planar Trusses:**
    *   $DSI = m + r - 2j$
    *   Where:
        *   $m$: Number of members
        *   $r$: Number of unknown support reactions
        *   $j$: Number of joints

#### **2.4 Examples of Calculating Static Indeterminacy**

##### **Example 1: Simply Supported Beam**

*   **Description:** A beam supported by a pin at one end and a roller at the other.
*   **External Reactions:** Pin support (2 reactions: $R_x$, $R_y$), Roller support (1 reaction: $R_y$). Total $R = 3$.
*   **Equilibrium Equations:** $\Sigma F_x = 0$, $\Sigma F_y = 0$, $\Sigma M = 0$ (3 equations).
*   **Calculation:**
    *   $D_{se} = R - 3 = 3 - 3 = 0$.
    *   Since it's a single member beam with no internal connections or loops, $D_{si} = 0$.
    *   **DSI = 0**. (Statically Determinate)

##### **Example 2: Fixed Beam (Beam fixed at both ends)**

*   **Description:** A beam fixed at both ends.
*   **External Reactions:** Each fixed support provides a vertical reaction, a horizontal reaction, and a moment reaction. Total $R = 3 + 3 = 6$.
*   **Equilibrium Equations:** $\Sigma F_x = 0$, $\Sigma F_y = 0$, $\Sigma M = 0$ (3 equations).
*   **Calculation:**
    *   $D_{se} = R - 3 = 6 - 3 = 3$.
    *   For a single member beam, $D_{si} = 0$.
    *   **DSI = 3**. (Statically Indeterminate of degree 3)

##### **Example 3: Propped Cantilever Beam**

*   **Description:** A cantilever beam with an additional roller support at the free end.
*   **External Reactions:** Fixed support (3 reactions: $R_{Ax}$, $R_{Ay}$, $M_A$), Roller support (1 reaction: $R_B$). Total $R = 3 + 1 = 4$.
*   **Equilibrium Equations:** $\Sigma F_x = 0$, $\Sigma F_y = 0$, $\Sigma M = 0$ (3 equations).
*   **Calculation:**
    *   $D_{se} = R - 3 = 4 - 3 = 1$.
    *   For a single member beam, $D_{si} = 0$.
    *   **DSI = 1**. (Statically Indeterminate of degree 1)

##### **Example 4: Two-Span Continuous Beam**

*   **Description:** A beam supported at three points (e.g., A, B, C).
*   **External Reactions:** Assume pin at A, roller at B, roller at C. Total $R = 2 + 1 + 1 = 4$.
*   **Equilibrium Equations:** $\Sigma F_x = 0$, $\Sigma F_y = 0$, $\Sigma M = 0$ (3 equations).
*   **Calculation:**
    *   $D_{se} = R - 3 = 4 - 3 = 1$.
    *   This calculation is only for external indeterminacy. For continuous beams, we often think of the internal continuity as the source of indeterminacy. Each intermediate support in a continuous beam introduces an additional moment (or shear, depending on how you view it) that needs to be solved.
    *   **DSI = 1**. (Statically Indeterminate of degree 1)

##### **Example 5: Simple Pin-Jointed Truss**

*   **Description:** A basic triangular truss.
*   **Members (m):** 3
*   **Joints (j):** 3
*   **Reactions (r):** Assume a pin support at one joint (2 reactions) and a roller at another (1 reaction). Total $r = 2 + 1 = 3$.
*   **Calculation:**
    *   $DSI = m + r - 2j = 3 + 3 - 2(3) = 3 + 3 - 6 = 0$. (Statically Determinate)

##### **Example 6: Pratt Truss (A common type)**

*   **Description:** A typical Pratt truss configuration.
*   **Members (m):** 7 (Let's count for a simple Pratt truss spanning two bays with a central support)
*   **Joints (j):** 5
*   **Reactions (r):** Assume pin at one end (2), roller at midpoint (1), roller at other end (1). Total $r = 2 + 1 + 1 = 4$.
*   **Calculation:**
    *   $DSI = m + r - 2j = 7 + 4 - 2(5) = 7 + 4 - 10 = 1$. (Statically Indeterminate of degree 1)

##### **Example 7: Rectangular Portal Frame (Single Bay)**

*   **Description:** A frame with two vertical columns and a horizontal beam, with rigid joints.
*   **Members (m):** 3 (2 columns, 1 beam)
*   **Joints (j):** 3 (2 at base of columns, 1 at top of columns where beam connects)
*   **External Reactions:** Assume pinned base for one column (2 reactions), roller base for the other (1 reaction). Total $R = 2 + 1 = 3$.
*   **Calculation (using $D_{se}$ and $D_{si}$ separately):**
    *   **External Indeterminacy ($D_{se}$):**
        *   Reactions: $R_{Ax}, R_{Ay}, M_A$ (pin) + $R_{Bx}$ (roller). Total $R = 3 + 1 = 4$.
        *   Equilibrium equations: 3.
        *   $D_{se} = R - 3 = 4 - 3 = 1$.
    *   **Internal Indeterminacy ($D_{si}$):**
        *   Consider the frame as a whole. If we were to cut each member at its mid-section, we would introduce 3 internal forces (N, V, M) per member. Total $3m = 3 \times 3 = 9$.
        *   The joints provide equilibrium. At each of the 3 joints, we can write two force equilibrium equations ($\Sigma F_x, \Sigma F_y$) and one moment equation ($\Sigma M$). If we consider cuts, we get 3 unknowns per member and we can apply equilibrium.
        *   **Using the formula $D_{si} = 3m + r - 3j$ (for planar rigid frames without hinges):**
            *   Here, $r$ in this context refers to the number of releases (hinges). Since there are no hinges, $r=0$.
            *   $D_{si} = 3(3) + 0 - 3(3) = 9 - 9 = 0$.
            *   This formula needs careful interpretation. A more direct way is to consider unknowns vs. equations.
    *   **Alternative approach for Frames (focusing on redundancy):**
        *   A single bay portal frame can be made determinate by removing one moment connection or by introducing hinges.
        *   If we remove the moment reaction at one fixed support, it becomes determinate.
        *   If we consider the structure as a whole, we have 4 external reactions. We have 3 equilibrium equations. So $D_{se} = 1$.
        *   Internally, the frame is continuous. If we were to cut each member, we'd introduce N, V, M. However, the frame doesn't have internal loops or hinges that would add to internal indeterminacy in the same way a continuous beam does.
        *   For a simple portal frame, the primary indeterminacy comes from the support reactions.
        *   **DSI = 1**. (Statically Indeterminate of degree 1)

##### **Example 8: Rectangular Portal Frame with one hinged base**

*   **Description:** One column fixed, other column hinged, same beam.
*   **Members (m):** 3
*   **Joints (j):** 3
*   **External Reactions:** Fixed support (3 reactions), Hinged support (2 reactions). Total $R = 3 + 2 = 5$.
*   **Equilibrium Equations:** 3.
*   **Calculation:**
    *   $D_{se} = R - 3 = 5 - 3 = 2$.
    *   **DSI = 2**. (Statically Indeterminate of degree 2)

##### **Example 9: Rectangular Portal Frame with one hinged base and one roller base**

*   **Description:** One column hinged, other column roller.
*   **Members (m):** 3
*   **Joints (j):** 3
*   **External Reactions:** Hinged support (2 reactions), Roller support (1 reaction). Total $R = 2 + 1 = 3$.
*   **Equilibrium Equations:** 3.
*   **Calculation:**
    *   $D_{se} = R - 3 = 3 - 3 = 0$.
    *   This would imply external determinacy. However, the frame itself is rigid. We need to consider internal indeterminacy for frames.
    *   **Using the formula $DSI = 3m + r - 3j$ where $r$ is releases (hinges):**
        *   $m = 3$
        *   $j = 3$
        *   $r = 1$ (the hinged base acts as a release in terms of moment).
        *   $DSI = 3(3) + 0 - 3(3) = 9 - 9 = 0$. This is for structures *without* releases.
    *   **Correct Formula for Planar Frames with Hinges:** $DSI = 3m + r - 3j$. Here, $m$ is number of members, $j$ is number of joints, $r$ is number of releases (hinges). The $3m$ represents the internal force components. The $3j$ represents the equilibrium equations at the joints.
    *   Let's re-evaluate for the portal frame with hinged base and roller base.
        *   External reactions: $R_{Ax}, R_{Ay}$ (hinged), $R_{Bx}$ (roller). Total $R=3$.
        *   Equilibrium equations: 3. $D_{se} = 3 - 3 = 0$.
        *   Internal Indeterminacy: Consider the members and joints. If we cut each member, we introduce 3 forces. Let's think about how many members we need to remove to make it determinate.
        *   A single bay portal frame is often considered to have a DSI of 1 or 3 depending on the type of supports and how internal continuity is treated.
        *   **Let's use a more general approach for frames: DSI = (Number of unknown forces) - (Number of equilibrium equations)**
            *   Unknowns:
                *   Reactions: $R_{Ax}, R_{Ay}, R_{Bx}$ (3 unknowns)
                *   Internal forces: For each member, we can consider axial force, shear, and moment. If we consider the members as continuous, we introduce these at the junctions.
                *   Let's count independently:
                    *   Reactions: $R_{Ax}, R_{Ay}$ (at hinged base), $R_{Bx}$ (at roller base). Total 3.
                    *   Internal forces: If we imagine cutting the frame at strategic points to make it determinate (e.g., cutting one moment connection), we'd introduce unknowns.
            *   **A common simplification for frames:** If the base is hinged and roller, it is externally determinate ($D_{se}=0$). The frame structure itself has internal continuity.
            *   Consider the frame as a whole. Total unknowns = reactions (3) + internal forces.
            *   **Revisiting $DSI = 3m + r - 3j$:**
                *   $m = 3$ (members)
                *   $j = 3$ (joints)
                *   $r = 1$ (number of hinges at joints/supports). If we treat the hinged base as a hinge, $r=1$.
                *   $DSI = 3(3) + 1 - 3(3) = 9 + 1 - 9 = 1$.
                *   So, DSI = 1. This means one redundant force needs to be determined.

##### **Example 10: Two-bay portal frame**

*   **Description:** Two adjacent bays of portal frames.
*   **Members (m):** 5 (2 outer columns, 2 inner columns, 2 horizontal beams - mistake, should be 3 horizontal beams if it's a double storey, or 2 beams for two adjacent bays on one level). Let's assume two bays on one level. So 2 columns, 2 intermediate columns, 2 horizontal beams. Total members = 6.
*   **Joints (j):** 4 (2 at outer bases, 2 at outer tops) + 2 intermediate joints where columns meet beams = 6 joints.
*   **External Reactions:** Assume fixed bases for outer columns. $R = 3+3 = 6$.
*   **Equilibrium Equations:** 3.
*   **Calculation:**
    *   $D_{se} = 6 - 3 = 3$.
    *   **Using $DSI = 3m + r - 3j$:** (where $r=0$ for no hinges)
        *   $m = 6$
        *   $j = 6$
        *   $DSI = 3(6) + 0 - 3(6) = 18 - 18 = 0$. This formula seems to break down for complex frames or when considering external reactions separately.

    *   **Let's reconsider frames:** A more robust approach for planar frames is:
        $DSI = (\text{Number of unknown reactions}) + (\text{Number of internal force components needed to make members determinate}) - (\text{Number of equilibrium equations})$.
        *   For a rigid frame, each member needs 3 force components (N, V, M) to be defined if cut.
        *   Let $m$ = number of members, $j$ = number of joints, $R$ = number of reactions.
        *   Consider a frame as a collection of members. If we cut every member at a section, we'd have $3m$ unknowns from internal forces.
        *   We have $R$ reactions. Total unknowns = $R + 3m$.
        *   We have $3$ external equilibrium equations.
        *   We also have $2j$ equilibrium equations from joints (excluding moment if hinges are present).
        *   This gets complicated.
    *   **Common approach for DSI of Frames:**
        *   Calculate $D_{se} = R - 3$.
        *   Calculate internal redundancy by considering the number of members and joints. For a frame without hinges: $D_{si} = 3m - 3j$. (This accounts for the fact that each joint provides 3 equilibrium equations for the forces in the members meeting there, and we have 3 internal forces per member).
        *   **Total DSI = $D_{se} + D_{si}$**
        *   For the two-bay frame with fixed bases:
            *   $R = 6$
            *   $m = 6$
            *   $j = 6$
            *   $D_{se} = 6 - 3 = 3$.
            *   $D_{si} = 3m - 3j = 3(6) - 3(6) = 0$.
            *   **DSI = 3 + 0 = 3**.

##### **Example 11: Truss with a load and a support at the same joint**

*   **Description:** A truss where a load is applied at the same joint as a roller support.
*   **Members (m):** 3
*   **Joints (j):** 3
*   **Reactions (r):** Pin support (2 reactions), Roller support (1 reaction). Total $r = 3$.
*   **Calculation:**
    *   $DSI = m + r - 2j = 3 + 3 - 2(3) = 0$. (Statically Determinate)

---

### **3. Introduction to Force Methods of Analysis**

#### **3.1 Concept of Force Methods**

*   **Also known as:** Flexibility Method or Stiffness Method (though stiffness is displacement-based). Force methods are also called classical methods.
*   **Fundamental Idea:** Force methods are based on the principle of **compatibility of displacements**. They treat the unknown forces (redundants) as the primary unknowns.
*   **Procedure:**
    1.  **Identify Redundants:** Determine the degree of static indeterminacy (DSI). These represent the redundant forces.
    2.  **Remove Redundants:** Mentally remove the redundant forces to create a stable determinate structure (the "primary structure" or "base structure").
    3.  **Apply Redundants:** Apply the redundant forces to the primary structure at the locations where they were removed.
    4.  **Compatibility Equations:** Write equations based on the fact that the displacements (or rotations) at the locations where the redundants were removed must be compatible with the original structure. For example, if a support was removed, the displacement at that location must be zero. If a moment was removed, the rotation at that location must be zero.
    5.  **Calculate Displacements:** The displacements in the primary structure are calculated due to the applied loads and the unknown redundant forces. These displacements are typically expressed in terms of "flexibility coefficients" or influence coefficients.
    6.  **Solve for Redundants:** Solve the compatibility equations to find the values of the redundant forces.
    7.  **Determine All Forces:** Once the redundants are known, all other forces (reactions and internal forces) can be determined using the equations of static equilibrium applied to the original structure or segments of it.

#### **3.2 Key Principles Used in Force Methods**

*   **Superposition:** The effect of multiple loads on a linear elastic structure can be found by summing the effects of each load applied individually. This is fundamental to force methods as we consider the effects of applied loads and redundant forces separately.
*   **Compatibility of Deformations:** The geometric constraints of the structure must be satisfied. This means that displacements and rotations at supports and internal connections must be consistent.
*   **Flexibility Coefficients:** These are displacements (or rotations) at a point on a structure caused by a unit force (or unit moment) applied at another point.
    *   If $F_i$ is a force and $\Delta_i$ is its corresponding displacement, then $\Delta_i = f_{ii}F_i$, where $f_{ii}$ is the flexibility coefficient representing the displacement at point $i$ due to a unit force at point $i$.
    *   If $F_j$ is another force and $\Delta_i$ is the displacement at point $i$ due to $F_j$, then $\Delta_i = f_{ij}F_j$, where $f_{ij}$ is the flexibility coefficient representing the displacement at point $i$ due to a unit force at point $j$.
    *   For linear elastic structures, $f_{ij} = f_{ji}$ (Maxwell's Reciprocal Theorem).

#### **3.3 Common Force Methods**

*   **Method of Consistent Deformations (or Force Method):** This is the most common force method taught. It directly uses the compatibility of displacements.
*   **Method of Superposition (often used interchangeably with Consistent Deformations):** Emphasizes summing the effects of individual loads and redundants.
*   **Column Analogy Method:** A graphical method for solving indeterminate beams.
*   **Flexibility Matrix Method:** A matrix formulation of the force method, particularly useful for computer analysis.

#### **3.4 Why are Force Methods Important?**

*   They provide a systematic way to analyze indeterminate structures.
*   They are essential for understanding the behavior of structures under complex loading conditions.
*   They form the basis for more advanced structural analysis techniques.

---

### **Important Points to Remember:**

*   **Indeterminacy vs. Stiffness:** Indeterminate structures are not always stiffer, but they *can* be made stiffer and more stable by design.
*   **DSI Calculation:** Be careful with the formulas, especially for frames. Always check the basic definition: number of unknowns minus number of equilibrium equations.
*   **Redundants:** Redundants are the unknowns that cannot be solved by equilibrium alone. They are often the support reactions or internal forces that prevent a structure from collapsing if a member is removed.
*   **Primary Structure:** The choice of the primary structure is crucial. It must be stable and determinate.
*   **Compatibility:** The core of force methods is ensuring that deformations are consistent with the structural constraints.
*   **Superposition:** Remember that force methods rely heavily on the principle of superposition, which is valid for linear elastic materials.

---

### **Practice Questions & Exercises:**

1.  **What is the primary difference between a determinate and an indeterminate structure?**
    *   **Answer:** For a determinate structure, all unknown forces and reactions can be found using only the equations of static equilibrium. For an indeterminate structure, the equilibrium equations are insufficient, and additional equations related to the deformation of the structure (compatibility equations) are required.

2.  **Define the Degree of Static Indeterminacy (DSI).**
    *   **Answer:** The DSI is the number of unknown forces or moments in a structure that cannot be determined from the equations of static equilibrium alone. It represents the number of redundancies in the structure.

3.  **Calculate the Degree of Static Indeterminacy (DSI) for the following structures (assume 2D analysis):**
    *   **a) Simply Supported Beam:**
        *   **Answer:** $DSI = 0$ (Determinate). $R=3$, Eqns=3.
    *   **b) Fixed Beam (beam fixed at both ends):**
        *   **Answer:** $DSI = 3$ (Indeterminate). $R=6$, Eqns=3. $D_{se} = 6-3=3$.
    *   **c) Propped Cantilever Beam:**
        *   **Answer:** $DSI = 1$ (Indeterminate). $R=4$, Eqns=3. $D_{se} = 4-3=1$.
    *   **d) A Truss with 10 members, 6 joints, and 3 reactions (pin at one end, roller at another):**
        *   **Formula:** $DSI = m + r - 2j$
        *   **Calculation:** $DSI = 10 + 3 - 2(6) = 13 - 12 = 1$.
        *   **Answer:** $DSI = 1$ (Indeterminate).
    *   **e) A simple rectangular portal frame with hinged bases at both columns:**
        *   **Structure:** 2 columns, 1 beam. Members (m) = 3. Joints (j) = 3. Hinged bases mean $R=2+2=4$.
        *   **Formula:** $DSI = 3m + r - 3j$ (where $r$ is the number of hinges).
        *   **Calculation:** $DSI = 3(3) + 2 - 3(3) = 9 + 2 - 9 = 2$.
        *   **Answer:** $DSI = 2$ (Indeterminate).
    *   **f) A simple rectangular portal frame with one fixed base and one roller base:**
        *   **Structure:** 2 columns, 1 beam. Members (m) = 3. Joints (j) = 3. Fixed base ($R=3$), Roller base ($R=1$). Total $R=4$.
        *   **Using $D_{se}$ and $D_{si}$:**
            *   $D_{se} = R - 3 = 4 - 3 = 1$.
            *   $D_{si} = 3m - 3j = 3(3) - 3(3) = 0$. (for a frame without internal hinges, $r=0$ in the $3m+r-3j$ formula for internal part if we consider rigid joints).
            *   **Total DSI = $D_{se} + D_{si} = 1 + 0 = 1$.**
        *   **Answer:** $DSI = 1$ (Indeterminate).

4.  **Briefly explain the fundamental principle behind the force method of analysis.**
    *   **Answer:** The force method, such as the Method of Consistent Deformations, is based on satisfying the compatibility of displacements. It involves identifying redundant forces, removing them to create a determinate primary structure, and then applying the redundant forces to this primary structure. Compatibility equations are written to ensure that the deformations at the points where redundants were removed match the original structural constraints.

5.  **What are flexibility coefficients, and how are they used in force methods?**
    *   **Answer:** Flexibility coefficients ($f_{ij}$) represent the displacement (or rotation) at point $i$ due to a unit force (or unit moment) applied at point $j$. In force methods, they are used to express the displacements of the primary structure in terms of the unknown redundant forces. These expressions are then used in the compatibility equations. For example, the total displacement at point $i$ is $\Delta_i = f_{ii}F_i + f_{ij}F_j + ...$, where $F_i, F_j$ are the unknown redundant forces.

---
