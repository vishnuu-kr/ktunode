---
title: "Method of consistent deformations:  Analysis of beams, frames and trusses. (simple problems with one redundant, illustration only for two-redundant problems)."
subject: "STRUCTURAL ANALYSIS - I"
module: "Module 3: Indeterminate Structures:"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba81074c"
status: "completed"
scrapedAt: "2026-05-20T18:41:47.351Z"
---
# Structural Analysis - I: Module 3: Indeterminate Structures

## Topic: Method of Consistent Deformations

This module introduces the analysis of indeterminate structures, which are structures where the number of unknown reactions or internal forces exceeds the number of equilibrium equations available. The **Method of Consistent Deformations** is a powerful technique to solve these structures by ensuring that the deformations (deflections and rotations) are consistent with the applied loads and the structural constraints.

---

### 1. Introduction to Indeterminate Structures

**Definition:** An indeterminate structure is a structure for which the static equilibrium equations are insufficient to determine all the unknown reaction forces and internal forces.

**Degree of Indeterminacy (DOI):** The DOI indicates how many additional constraints or force/displacement relationships are needed to make the structure statically determinate.

*   **For Beams and Frames:**
    DOI = (Number of unknown reactions + Number of unknown internal forces) - (Number of equilibrium equations)
    *   Equilibrium equations: 3 for 2D (ΣFx=0, ΣFy=0, ΣM=0) and 6 for 3D.
    *   Unknown internal forces: For each member, we can have an axial force, shear force, and bending moment. However, for analysis purposes, we often consider the degrees of freedom (DOF) in relation to the internal forces.
*   **For Trusses:**
    DOI = Number of unknown forces (members + reactions) - (2 * Number of joints) for 2D trusses.
    DOI = Number of unknown forces (members + reactions) - (3 * Number of joints) for 3D trusses.

**Why analyze indeterminate structures?**

*   Increased stiffness and stability.
*   Redistribution of loads, leading to more uniform stress distribution.
*   Potentially smaller structural members for the same load.

---

### 2. Fundamental Concepts of the Method of Consistent Deformations

The Method of Consistent Deformations, also known as the **Force Method** or **Compatibility Method**, is based on the principle of superposition and compatibility equations.

**Key Principles:**

1.  **Principle of Superposition:** The effects (displacements, rotations) of multiple loads on a linear elastic structure can be added together.
2.  **Compatibility:** The deformations of the structure must be consistent with the constraints imposed by the supports and the continuity of the members. This means that at points of connection or support, displacements and rotations must match.

**The Core Idea:**

1.  **Choose a Primary Structure:** Convert the indeterminate structure into a determinate one by removing or modifying redundant supports or internal forces. This is called the "primary structure."
2.  **Apply Loads to the Primary Structure:** Apply the original external loads to this primary structure. Calculate the resulting deflections and rotations at points where the redundants were removed.
3.  **Apply Redundant Forces as Unknown Loads:** Apply the unknown redundant forces (which are the reactions or internal forces removed in step 1) as unknown loads to the primary structure. Calculate the deflections and rotations caused by these unknown forces.
4.  **Formulate Compatibility Equations:** The sum of the deformations caused by the external loads and the redundant forces at the locations where the redundants were removed must be equal to the actual deformation (usually zero) at those points in the original structure. These are the compatibility equations.
5.  **Solve for Redundant Forces:** Solve the system of compatibility equations to find the values of the unknown redundant forces.
6.  **Calculate All Forces and Reactions:** Once the redundant forces are known, all other internal forces and reactions can be determined using the equations of static equilibrium.

---

### 3. Analysis of Beams

**Scenario:** A simply supported beam with an overhang subjected to a concentrated load.

**Learning Outcome:** To analyze indeterminate beams using the Method of Consistent Deformations.

**Steps:**

1.  **Determine DOI:** Identify the number of redundant unknowns. For a beam, this is often related to the bending moments or support reactions.
2.  **Select Redundants and Create Primary Structure:** Remove or "release" the redundant supports or internal moments. A common approach is to release a support reaction or a fixed end moment.
3.  **Apply Original Loads:** Analyze the determinate primary structure subjected to the original external loads. Calculate the resulting deflection and/or rotation at the point(s) where the redundant(s) were removed. These are often denoted as $\delta_{A0}$ or $\theta_{A0}$.
4.  **Apply Redundant Loads:** Consider the primary structure subjected to the unknown redundant forces (reactions or moments) acting in the positive direction. Calculate the deflection and/or rotation at the point(s) of interest due to each redundant force. These are typically expressed in terms of the redundant forces themselves and are called flexibility coefficients, e.g., $\delta_{AA}X_A$ or $\theta_{AB}X_B$.
5.  **Write Compatibility Equations:** The sum of the deflections/rotations due to external loads and redundant forces must equal the known deformation at the release point.
    *   If a support was released and it's a roller (can't have vertical deflection): $\delta_{A0} + \delta_{AA}X_A = 0$
    *   If a fixed support was released and it's now a pin (can't have rotation): $\theta_{A0} + \theta_{AA}X_A = 0$
6.  **Solve for Redundants:** Solve the compatibility equation(s) to find the values of the unknown redundant forces.
7.  **Final Analysis:** Use the calculated redundant forces and equilibrium equations to find all other reactions and internal forces.

**Example 1: Propped Cantilever Beam (One Redundant)**

*   **Problem:** A propped cantilever beam, fixed at A and simply supported at B, with a uniformly distributed load (UDL) 'w' over its entire span 'L'. The beam has one degree of indeterminacy (the reaction at B).

*   **Step 1: Determine DOI:**
    *   Reactions: $R_A$, $M_A$, $R_B$.
    *   Equilibrium Equations: ΣFy = 0, ΣM = 0 (2 equations).
    *   DOI = 3 (unknowns) - 2 (equations) = 1. The redundant is $R_B$.

*   **Step 2: Choose Primary Structure and Redundant:**
    *   Release the support at B, making it a simply supported beam.
    *   Primary Structure: Beam fixed at A, free at B.
    *   Redundant: $R_B$ (upwards at B).

*   **Step 3: Apply Original Loads to Primary Structure:**
    *   A cantilever beam fixed at A with UDL 'w' over length 'L'.
    *   Calculate the deflection at B due to the UDL. Using standard formulas or integration:
        $\delta_{B0} = \frac{wL^4}{8EI}$ (downwards)

*   **Step 4: Apply Redundant Load to Primary Structure:**
    *   A cantilever beam fixed at A, with an upward force $R_B$ at B.
    *   Calculate the deflection at B due to $R_B$. Using standard formulas or integration:
        $\delta_{BB} = \frac{R_B L^3}{3EI}$ (upwards)

*   **Step 5: Write Compatibility Equation:**
    *   The actual deflection at B in the original beam is zero.
    *   Sum of deflections at B = 0
    *   $\delta_{B0}$ (downwards) + $\delta_{BB}$ (upwards) = 0
    *   $-\frac{wL^4}{8EI} + \frac{R_B L^3}{3EI} = 0$

*   **Step 6: Solve for Redundant:**
    *   $\frac{R_B L^3}{3EI} = \frac{wL^4}{8EI}$
    *   $R_B = \frac{3wL}{8}$

*   **Step 7: Final Analysis:**
    *   Now that $R_B$ is known, use equilibrium equations to find $R_A$ and $M_A$.
        *   ΣFy = 0: $R_A - wL + R_B = 0 \implies R_A = wL - R_B = wL - \frac{3wL}{8} = \frac{5wL}{8}$
        *   ΣMA = 0: $M_A - wL(\frac{L}{2}) + R_B(L) = 0 \implies M_A = \frac{wL^2}{2} - R_B(L) = \frac{wL^2}{2} - \frac{3wL}{8}(L) = \frac{wL^2}{2} - \frac{3wL^2}{8} = \frac{4wL^2 - 3wL^2}{8} = \frac{wL^2}{8}$ (moment at fixed end A, usually taken as counter-clockwise).

---

### 4. Analysis of Frames

**Learning Outcome:** To analyze indeterminate frames using the Method of Consistent Deformations.

**Considerations for Frames:**

*   Frames can have members connected by pins or rigid joints.
*   Continuity of rotation and displacement at rigid joints is crucial.
*   DOI calculation is similar, but internal forces can be axial, shear, and bending.

**Steps (similar to beams, but with potential for multiple redundants):**

1.  **Determine DOI:** Consider all unknown support reactions and internal force components (if members are cut).
2.  **Select Redundants and Create Primary Structure:** Release redundant supports or cut members to make the structure statically determinate.
3.  **Apply Original Loads:** Analyze the determinate primary structure under the original loads. Calculate displacements ($\delta_0$) and rotations ($\theta_0$) at the release points.
4.  **Apply Redundant Loads:** Apply the unknown redundant forces ($X_i$) to the primary structure. Calculate the displacements ($\delta_{ii}$) and rotations ($\theta_{ii}$) caused by each redundant force acting alone, and the mutual influence ($\delta_{ij}$, $\theta_{ij}$) of one redundant on the deformation caused by another.
5.  **Write Compatibility Equations:** Formulate equations ensuring consistency of displacements and rotations at the release points. For 'n' redundants, you'll have 'n' compatibility equations.
    *   If releasing a support at A and it should have zero displacement: $\delta_{A0} + \delta_{AA}X_A + \delta_{AB}X_B + ... = 0$
    *   If releasing a hinge at B and it should have zero rotation: $\theta_{B0} + \theta_{BB}X_B + \theta_{BA}X_A + ... = 0$
6.  **Solve for Redundants:** Solve the system of linear equations.
7.  **Final Analysis:** Use the calculated redundant forces and equilibrium equations to find all other forces and reactions.

**Illustration for Two-Redundant Problems (No detailed example, just the setup):**

*   **Problem:** A portal frame with fixed base at columns and a horizontal load at the top beam. This frame is typically 2 degrees indeterminate (e.g., two moments at the base of the columns).

*   **Step 1: Determine DOI:**
    *   Let's assume the bases are fixed. We have reactions $R_{A_x}, R_{A_y}, M_A$ at base A and $R_{B_x}, R_{B_y}, M_B$ at base B.
    *   Equilibrium equations: ΣFx=0, ΣFy=0, ΣMA=0.
    *   Total unknowns = 6. Equations = 3.
    *   DOI = 6 - 3 = 3.
    *   *However, for frames, we often consider the indeterminacy related to bending moments if axial and shear deformations are neglected or if we consider only specific members.*
    *   A common simplification is to treat it as having two bending moment redundants at the bases (e.g., $M_A$ and $M_B$).

*   **Step 2: Choose Primary Structure and Redundants:**
    *   Release the fixed bases to make them pinned.
    *   Primary Structure: A frame with pinned bases at A and B.
    *   Redundants: $M_A$ and $M_B$ (moments at A and B, acting to resist bending).

*   **Step 3: Apply Original Loads to Primary Structure:**
    *   A frame with pinned bases subjected to the external load.
    *   Calculate the rotations at A ($\theta_{A0}$) and B ($\theta_{B0}$) due to the external load.

*   **Step 4: Apply Redundant Loads to Primary Structure:**
    *   Consider the frame with pinned bases subjected to $M_A$ at A and $M_B$ at B.
    *   Calculate the rotation at A due to $M_A$ ($\theta_{AA}$).
    *   Calculate the rotation at A due to $M_B$ ($\theta_{AB}$).
    *   Calculate the rotation at B due to $M_A$ ($\theta_{BA}$).
    *   Calculate the rotation at B due to $M_B$ ($\theta_{BB}$).
    *   *Note: $\theta_{AB} = \theta_{BA}$ due to reciprocity.*

*   **Step 5: Write Compatibility Equations:**
    *   The actual rotation at A and B in the original frame is zero (since they are fixed).
    *   Compatibility at A: $\theta_{A0} + \theta_{AA}M_A + \theta_{AB}M_B = 0$
    *   Compatibility at B: $\theta_{B0} + \theta_{BA}M_A + \theta_{BB}M_B = 0$

*   **Step 6: Solve for Redundants:**
    *   Solve the system of two linear equations for $M_A$ and $M_B$.

*   **Step 7: Final Analysis:**
    *   Use the calculated moments ($M_A, M_B$) and the equilibrium equations to find the remaining reactions and internal forces.

---

### 5. Analysis of Trusses

**Learning Outcome:** To analyze indeterminate trusses using the Method of Consistent Deformations.

**Key Concepts for Trusses:**

*   Trusses are typically analyzed by considering the axial forces in the members.
*   Redundancy in trusses arises from having more members than necessary for a stable configuration.
*   Deformations considered are axial elongations or contractions of members.

**Steps:**

1.  **Determine DOI:** Calculate the DOI for the truss.
2.  **Select Redundants and Create Primary Structure:** Remove redundant members to make the truss statically determinate.
3.  **Apply Original Loads:** Analyze the determinate primary truss under the original external loads. Calculate the relative displacement (or change in length) at the points where members were removed. This is often the elongation of the removed member under load. $\Delta_{i0}$
4.  **Apply Redundant Loads:** Apply the unknown axial forces ($X_i$) in the removed members as external forces to the primary truss. Calculate the change in length at the release points caused by each redundant force acting alone. This is $\Delta_{ii}X_i$, where $\Delta_{ii}$ is the flexibility coefficient.
5.  **Write Compatibility Equations:** The total change in length at the release points in the original structure must be zero (or equal to the known relative displacement if a joint was not perfectly fixed).
    *   For member 'i' removed: $\Delta_{i0} + \Delta_{ii}X_i = 0$ (if released member was internal and joints were assumed rigid)
    *   If members are released at joints, displacement compatibility is considered.
6.  **Solve for Redundants:** Solve the system of equations to find the axial forces in the redundant members.
7.  **Final Analysis:** Once all member forces are known, calculate reactions using equilibrium.

**Example 2: Statically Indeterminate Truss (One Redundant)**

*   **Problem:** A simple pin-jointed truss that is statically indeterminate by one member. Assume a bar has been added to a determinate truss.

*   **Step 1: Determine DOI:**
    *   Let's say a truss is determinate and a redundant member is added.
    *   DOI = 1. The redundant is the axial force in the added member.

*   **Step 2: Choose Primary Structure and Redundant:**
    *   Remove the redundant member.
    *   Primary Structure: A statically determinate truss.
    *   Redundant: Axial force ($F_{BC}$) in the added member BC.

*   **Step 3: Apply Original Loads to Primary Structure:**
    *   Analyze the determinate truss under external loads.
    *   Calculate the change in length (elongation/contraction) of the removed member BC in the original structure *if it were present and carrying its force*. This might require a separate analysis or be inferred. Alternatively, calculate the relative displacement of the joints where member BC was connected in the primary structure. Let's say we calculate the relative displacement between joints B and C ($\delta_{BC0}$).

*   **Step 4: Apply Redundant Load to Primary Structure:**
    *   Apply an axial force $F_{BC}$ (acting as tension) in the position of member BC in the primary truss.
    *   Calculate the change in length of member BC (or the relative displacement between joints B and C) due to this unit axial force. Let this be $f_{BC, BC}$ (flexibility coefficient).
    *   The total change in length of member BC due to the redundant force $F_{BC}$ will be $\Delta_{BC} = f_{BC, BC} \cdot F_{BC}$.

*   **Step 5: Write Compatibility Equation:**
    *   The total change in length of member BC in the original structure is zero (assuming it connects rigid joints).
    *   $\delta_{BC0} + f_{BC, BC} \cdot F_{BC} = 0$

*   **Step 6: Solve for Redundant:**
    *   $F_{BC} = -\frac{\delta_{BC0}}{f_{BC, BC}}$

*   **Step 7: Final Analysis:**
    *   Now that $F_{BC}$ is known, all member forces in the determinate truss (under original loads) and the force in BC can be summed up to get the final forces.

---

### 6. Key Concepts and Definitions

*   **Indeterminate Structure:** A structure that cannot be analyzed using static equilibrium equations alone.
*   **Degree of Indeterminacy (DOI):** The number of redundant reactions or internal forces.
*   **Redundant:** An unknown reaction or internal force that is not required for static equilibrium but is necessary to maintain structural integrity.
*   **Primary Structure:** A statically determinate structure obtained by releasing or removing redundant elements from an indeterminate structure.
*   **Compatibility Equations:** Equations derived from the requirement that displacements and rotations at points of connection or release must be consistent with the original structure's constraints.
*   **Flexibility Coefficients ($f_{ij}$):** The displacement at point 'i' due to a unit force or moment applied at point 'j'. For beams and frames, this can be deflection or rotation. For trusses, it's axial elongation/contraction.
*   **Superposition:** The principle that the total effect of multiple loads is the sum of their individual effects, applicable to linear elastic structures.
*   **Force Method:** A method of structural analysis that uses compatibility equations to solve for unknown forces. Method of Consistent Deformations is a type of force method.

---

### 7. Important Points to Remember

*   **Choice of Redundant:** The choice of redundant is arbitrary, but a judicious choice can simplify calculations. Often, releasing supports or internal moments/forces that lead to simpler determinate primary structures and easier computation of flexibility coefficients is preferred.
*   **Flexibility Coefficients:** These are crucial. They can be calculated using integration of bending moment diagrams ($\int \frac{m \cdot M}{EI} dx$), Castigliano's theorem, or virtual work.
*   **Sign Conventions:** Maintain consistent sign conventions for loads, forces, deflections, and rotations throughout the analysis to avoid errors.
*   **EI/EA Values:** For problems involving axial and bending deformations, ensure you use the correct stiffness values ($EI$ for bending, $EA$ for axial). If members have different stiffnesses, these terms must be included in the flexibility coefficients.
*   **Superposition for Loads:** Apply external loads to the primary structure separately.
*   **Superposition for Redundants:** Apply each redundant force as a unit force/moment, one at a time, to the primary structure.
*   **Two-Redundant Problems:** Require a system of two simultaneous compatibility equations. The setup involves calculating the influence of each redundant on the deformation at both release points.

---

### 8. Practice Questions/Exercises

**Question 1 (Beam):**
A continuous beam of two equal spans of 5m each, supported at A, B, and C. A UDL of 10 kN/m is applied over the entire beam. If AE is constant, analyze the beam using the method of consistent deformations. Assume B is an internal support.

*   **Hint:** The support at B is redundant. Release it and treat it as a continuous beam of span AC. Calculate deflection at B due to UDL and due to the redundant reaction $R_B$.

**Question 2 (Frame):**
Consider a portal frame with fixed bases at A and B. The frame has a horizontal span of 4m and a height of 3m. A concentrated load of 20 kN acts horizontally at the top corner (joint D, above B). Assume the columns and beam have the same EI. Analyze the frame using the method of consistent deformations, assuming the moments at the bases of the columns ($M_A$ and $M_B$) are the two redundants.

*   **Hint:** Release the fixed bases to make them pinned. Calculate rotations at A and B due to the external load. Then calculate rotations at A and B due to unit moments $M_A$ and $M_B$. Set up and solve the compatibility equations.

**Question 3 (Truss):**
A truss consists of three members AB, BC, and AC forming a triangle. Member AC is a redundant member, connecting A and C, which are already connected by members AB and BC. Assume EA is the same for all members. Calculate the force in the redundant member AC when a load P is applied vertically downwards at joint B.

*   **Hint:** Remove member AC. Analyze the determinate truss ABC under load P. Calculate the relative displacement between joints A and C in the determinate truss. Then apply a unit force in AC and calculate the resulting change in length of AC.

---

### Answers to Practice Questions

**Answer 1 (Beam):**

Let the redundant be $R_B$. The primary structure is a simply supported beam AC of length 10m with supports at A and C.
*   Original load: UDL $w = 10 \, \text{kN/m}$ over 10m.
*   Deflection at B due to UDL: $\delta_{B0} = \frac{5wL^4}{384EI}$ where L = 10m (span AC).
    $\delta_{B0} = \frac{5 \times 10 \times (10)^4}{384EI} = \frac{6510.4}{EI} \, \text{mm}$ (downwards).
*   Redundant force: $R_B$ (upwards at B).
*   Deflection at B due to $R_B$: $\delta_{BB} = \frac{R_B a^2 b^2}{3EIL}$, where $a = 5$m, $b = 5$m, $L = 10$m.
    $\delta_{BB} = \frac{R_B (5^2)(5^2)}{3EI(10)} = \frac{625 R_B}{30EI} = \frac{20.83 R_B}{EI} \, \text{mm}$ (upwards).
*   Compatibility: $\delta_{B0} - \delta_{BB} = 0$
    $\frac{6510.4}{EI} - \frac{20.83 R_B}{EI} = 0$
    $R_B = \frac{6510.4}{20.83} \approx 312.5 \, \text{kN}$.

The reaction at B is approximately 312.5 kN upwards.

**Answer 2 (Frame):**

Assume fixed bases at A and B. We release the moments $M_A$ and $M_B$.
*   Primary structure: Frame with pinned bases at A and B.
*   Redundants: $M_A$ and $M_B$.
*   Original load: 20 kN at D (top corner above B).
*   **Calculate rotations due to load:**
    *   For the primary structure, analyze the frame under the 20 kN load. This involves calculating the bending moments in each member. The deflection and rotation calculations require $\int \frac{M \cdot m}{EI} dx$. For a uniform EI frame, this can be done by calculating $M_0$ (moment due to external load) and $m_A$ (moment due to unit moment at A) and $m_B$ (moment due to unit moment at B) for each member.
    *   $\theta_{A0} = \int \frac{M_0 m_A}{EI} dx$
    *   $\theta_{B0} = \int \frac{M_0 m_B}{EI} dx$
*   **Calculate rotations due to redundants:**
    *   $\theta_{AA} = \int \frac{m_A m_A}{EI} dx$
    *   $\theta_{BB} = \int \frac{m_B m_B}{EI} dx$
    *   $\theta_{AB} = \theta_{BA} = \int \frac{m_A m_B}{EI} dx$
*   **Compatibility Equations:**
    *   $\theta_{A0} + \theta_{AA}M_A + \theta_{AB}M_B = 0$
    *   $\theta_{B0} + \theta_{BA}M_A + \theta_{BB}M_B = 0$

Solving these equations will give $M_A$ and $M_B$. (Detailed calculation is extensive and requires numerical integration or explicit moment diagrams).

**Answer 3 (Truss):**

Let AC be the redundant member.
*   Primary structure: Triangle ABC with members AB and BC only.
*   Redundant: Force in AC ($F_{AC}$).
*   Original Load: P at B.
*   **Calculate relative displacement at A & C in primary structure:**
    *   In the primary determinate truss, when load P is applied at B, members AB and BC will elongate. The original location of A and C are fixed. The displacement of B will cause a change in the distance between A and C. Calculate this change in length of the line AC ($\delta_{AC0}$) due to load P.
*   **Calculate change in length of AC due to unit force in AC:**
    *   Apply a unit tensile force ($F_{AC} = 1$) in member AC. The change in length of AC will be $\Delta_{AC} = L_{AC} / EA$, where $L_{AC}$ is the length of AC. This is our flexibility coefficient $f_{AC,AC}$.
*   **Compatibility Equation:**
    *   $\delta_{AC0} + f_{AC,AC} \cdot F_{AC} = 0$
    *   $F_{AC} = -\frac{\delta_{AC0}}{f_{AC,AC}}$

The sign of $\delta_{AC0}$ depends on whether the displacement between A and C in the determinate truss causes tension or compression in the hypothetical AC member. The minus sign ensures compatibility.

---
