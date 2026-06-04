---
title: "Moment Distribution method: Concept and derivation of basic equation, Analysis of beams and non-sway frames; analysis of sway frames (Illustration only)"
subject: "STRUCTURAL ANALYSIS - II"
module: "Module 1: Concept of displacement approach to structural analysis: Introduction to displacement methods of analysis. Kinematic indeterminacy"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810999"
status: "completed"
scrapedAt: "2026-05-20T18:47:08.255Z"
---
# Structural Analysis - II: Module 1 - Displacement Approach & Moment Distribution Method

## Module 1: Concept of Displacement Approach to Structural Analysis

### Introduction to Displacement Methods of Analysis

**Key Concept:** Displacement methods focus on calculating the unknown displacements (translations and rotations) at the joints of a structure. Once these displacements are known, the internal forces (moments, shears, and axial forces) can be readily determined.

**Contrast with Force Methods:** Force methods (e.g., Flexibility Method) focus on calculating unknown forces (reactions, internal forces) and then deriving displacements.

**Advantages of Displacement Methods:**
*   **Well-suited for computer implementation:** The systematic nature of matrix methods (like the Stiffness Method) makes them ideal for computational analysis.
*   **Handles indeterminate structures effectively:** They are powerful tools for analyzing highly indeterminate structures.
*   **Directly provide displacements:** This is crucial for serviceability checks (deflections, vibrations).

**Basic Principle:** The equilibrium of the structure is satisfied in terms of the unknown displacements.

### Kinematic Indeterminacy (Degree of Kinematic Indeterminacy - DKI)

**Definition:** Kinematic indeterminacy (or degree of freedom) represents the number of independent displacements (translations and rotations) required to define the deformed configuration of a structure.

**How to Determine DKI:**

1.  **Identify all possible joint displacements:** Consider both translations (horizontal and vertical) and rotations at each joint.
2.  **Consider supports:**
    *   **Fixed support:** No displacement or rotation allowed (0 DKI).
    *   **Pin support:** Rotation allowed, but no translation (1 DKI for rotation).
    *   **Roller support:** Translation allowed in one direction, no rotation or translation in the perpendicular direction (1 DKI for translation).
    *   **Internal hinges:** Allow relative rotation between connected members, but no relative translation.
3.  **Consider internal joints/connections:**
    *   **Rigid joints:** Members are rigidly connected, so displacements of connected members at the joint are the same.
    *   **Internal hinges:** Introduce additional degrees of freedom for relative rotation.
4.  **Sum up all independent displacements.**

**DKI Formula (for planar structures):**

*   **For a structure with `j` joints and `m` members:**
    *   DKI = 3*j - r - r_i  (for rigid joints throughout)
    *   Where:
        *   `j` = number of joints (including external supports)
        *   `r` = number of unknown reaction components at supports
        *   `r_i` = number of internal releases (e.g., hinges)
*   **A more direct approach for planar structures without internal releases:**
    *   DKI = 3*j - number of constraints imposed by supports.
    *   Constraints = 2 for fixed support, 1 for pin/roller support.
*   **Alternatively, focus on the number of unknown joint displacements:**
    *   For each joint:
        *   If it's a free joint (no restraint): 3 potential displacements (2 translations, 1 rotation).
        *   If it's a pin/roller support: 1 potential displacement (rotation for pin, translation for roller).
        *   If it's a fixed support: 0 potential displacements.
    *   If there are internal hinges, they reduce the number of restraints on connected members, effectively adding a degree of freedom for relative rotation.

**Example for DKI:**

Consider a propped cantilever beam with a pin support at one end and a fixed support at the other, with a load applied.

*   **Joints:** 2 (at supports)
*   **Supports:** Pin support at one end (1 unknown reaction - vertical), Fixed support at the other (3 unknown reactions - vertical, horizontal, moment).
*   **Total unknown reactions (r):** 1 (vertical at pin) + 3 (at fixed) = 4.
*   **Assuming a beam element:** Each beam element has no internal releases.
*   **Total potential joint displacements:**
    *   At the pin support: Rotation (1 DOF)
    *   At the fixed support: No displacements (0 DOF)
*   **DKI = 1 (rotation at pin)**

Consider a fixed-fixed beam with a load applied.

*   **Joints:** 2 (at supports)
*   **Supports:** Two fixed supports.
*   **Total potential joint displacements:**
    *   At both fixed supports: No displacements (0 DOF)
*   **DKI = 0** (This is statically determinate in terms of displacement, but indeterminate in terms of forces).

Consider a portal frame with two pinned supports and rigid joints. Assume no sway.

*   **Joints:** 3 (two supports, one at the apex)
*   **Supports:** Two pinned supports (each provides 1 horizontal and 1 vertical reaction). Total reactions = 4.
*   **Potential joint displacements:**
    *   At Apex: Rotation (1 DOF)
*   **DKI = 1** (for rotation at the apex).

Consider a portal frame with two pinned supports and rigid joints, allowing sway.

*   **Joints:** 3 (two supports, one at the apex)
*   **Supports:** Two pinned supports.
*   **Potential joint displacements:**
    *   At Apex: Horizontal translation, Vertical translation, Rotation (3 DOF)
    *   At pinned supports: Rotation (1 DOF each), but rotations are constrained by members connected to them.
*   **Let's be more precise:**
    *   At the apex joint: 1 rotation ($\theta$) and 2 translations ($\Delta_x, \Delta_y$).
    *   At the pinned supports: rotations ($\theta$).
    *   However, we are looking for independent *joint* displacements.
    *   If we consider the members, each member can be defined by end displacements.
    *   A simpler approach:
        *   Identify nodes where displacements can occur.
        *   At apex node: $\Delta_x$, $\Delta_y$, $\theta$.
        *   At supports: $\theta$ at each.
        *   If we consider the apex node's displacements as the primary unknowns: $\Delta_x$, $\Delta_y$, $\theta$.
        *   The rotations at the supports are not independent if they are rigidly connected to members which are in turn connected to the apex node.
    *   For a planar frame:
        *   Each internal joint can translate in x and y and rotate ($\Delta_x, \Delta_y, \theta$).
        *   Each support can have rotations ($\theta$) and translations ($\Delta_x, \Delta_y$) depending on its type.
        *   **For a portal frame with pinned supports, allowing sway:**
            *   Apex: $\Delta_x, \Delta_y, \theta_1$
            *   Left support: $\theta_2$
            *   Right support: $\theta_3$
            *   The axial deformations are usually ignored in frame analysis unless stated. So, let's focus on lateral sway and rotations.
            *   If we consider the apex node's horizontal displacement ($\Delta_x$) and rotation ($\theta_{apex}$), and the rotations at the supports ($\theta_{left}, \theta_{right}$).
            *   **A more common way to count for frames:**
                *   Consider horizontal translation ($\Delta$) for each storey.
                *   Consider rotations at all joints ($\theta$).
                *   For a single-storey portal frame with pinned supports: 1 horizontal displacement ($\Delta$) and 3 rotations ($\theta_{apex}, \theta_{left}, \theta_{right}$).
                *   **DKI = 1 (for $\Delta$) + 3 (for $\theta$) = 4.** (This assumes axial deformations are neglected and supports provide horizontal restraint).
                *   If supports are pinned, they don't resist horizontal force, so we only consider the horizontal displacement as a primary DOF.
                *   Let's re-evaluate: For a planar frame, each joint has 3 potential DOFs ($\Delta_x, \Delta_y, \theta$).
                *   Apex joint: $\Delta_x, \Delta_y, \theta_1$.
                *   Left support: $\Delta_x, \Delta_y, \theta_2$.
                *   Right support: $\Delta_x, \Delta_y, \theta_3$.
                *   Assume no vertical translation at supports ($\Delta_y=0$ at both).
                *   Assume no horizontal translation at supports ($\Delta_x=0$ at both if they are fixed or pinned but constrained horizontally).
                *   If supports are pinned and can only provide vertical reactions, then horizontal translation at supports is not restrained.
                *   The primary DOFs are usually:
                    *   Story sway displacements.
                    *   Joint rotations.
                *   For a single-storey portal frame with pinned supports (no horizontal restraint):
                    *   Joint at apex: $\Delta_x, \Delta_y, \theta_1$.
                    *   Joint at left support: $\Delta_x, \Delta_y, \theta_2$.
                    *   Joint at right support: $\Delta_x, \Delta_y, \theta_3$.
                    *   If we assume no vertical displacement at supports: $\Delta_y = 0$ at both.
                    *   If we consider the axial deformation of members to be negligible, then the horizontal displacements at the top of the columns are the same ($\Delta_x$ for left column top = $\Delta_x$ for right column top).
                    *   So, independent DOFs: Horizontal sway ($\Delta$), rotation at apex ($\theta_1$), rotation at left support ($\theta_2$), rotation at right support ($\theta_3$).
                    *   **DKI = 1 (sway) + 3 (rotations) = 4.**

**Importance of DKI:** The DKI dictates the number of independent equations of equilibrium that need to be solved in a displacement method. A higher DKI generally implies a more complex analysis.

---

## Moment Distribution Method

The Moment Distribution method, developed by Hardy Cross, is an iterative displacement method used for analyzing indeterminate structures, particularly beams and frames. It's a semi-direct method that works by distributing moments and balancing them at each joint until equilibrium is reached.

### Concept of Moment Distribution

**Core Idea:** The method is based on the principle of superposition and considers the structure to be initially "locked" at the joints, preventing rotation. Moments are then released sequentially, and the resulting rotations cause moments to be distributed to adjacent members. This process is repeated until all joints are in equilibrium.

**Key Concepts:**

*   **Fixed-End Moments (FEM):** The moments developed in a member when its ends are fixed and subjected to applied loads (without any rotation at the supports). These are the initial moments when joints are locked.
*   **Carry-over Factor (COF):** When a moment is applied to one end of a member, a certain fraction of that moment is carried over to the other end. For a prismatic member, COF = 1/2.
*   **Distribution Factor (DF):** The proportion of an applied unbalancing moment at a joint that is distributed to a particular member connected to that joint. It depends on the relative stiffness of the members.
*   **Stiffness of a Member (k):** A measure of a member's resistance to rotation. For a prismatic member of length `L` and flexural rigidity `EI`:
    *   **Fixed at far end:** k = 4EI/L (when moment applied at near end)
    *   **Pinned/Hinged at far end:** k = 3EI/L (when moment applied at near end)
    *   **Roller support at far end:** k = 3EI/L
    *   **Fixed support at far end:** k = 4EI/L
*   **Total Stiffness of a Joint (Σk):** The sum of the stiffnesses of all members connected to a joint.
*   **Member Stiffness Ratio:** DF = k_member / Σk_joint
*   **Unbalanced Moment:** At a joint, after distributing and carrying over moments, if the sum of moments in the members meeting at that joint is not zero, there is an unbalanced moment. This unbalanced moment is then distributed.
*   **Balancing:** Distributing the unbalanced moment to the members connected to the joint in proportion to their distribution factors.

### Derivation of the Basic Equation (Conceptual)

The method is an iterative application of equilibrium equations at the joints. Consider a joint J connected to members JA and JB.

1.  **Initial State (Locked):** Assume the joint is fixed, so no rotation occurs. Apply loads to the members. This creates Fixed-End Moments (FEMs) at the ends of the members.
2.  **Unbalance:** If the sum of FEMs at joint J is not zero, the joint is unbalanced.
3.  **Release Joint:** Imagine releasing the restraint at joint J. It will rotate by an angle $\theta_J$ to achieve equilibrium. This rotation induces moments in members JA and JB.
4.  **Moment due to Rotation:** The moment induced in a member at its end due to rotation at that end is proportional to the rotation and the member's stiffness.
    *   $M_{JA} = k_{JA} \cdot \theta_J$
    *   $M_{JB} = k_{JB} \cdot \theta_J$
    *   Where $k_{JA}$ and $k_{JB}$ are the stiffnesses of members JA and JB at joint J.
5.  **Balancing the Moment:** The external unbalanced moment at J, $M_{unbalanced}$, must be balanced by the sum of the moments induced in the members connected to it.
    *   $M_{unbalanced} + M_{JA} + M_{JB} = 0$ (assuming clockwise positive)
    *   $M_{unbalanced} + k_{JA} \theta_J + k_{JB} \theta_J = 0$
    *   $M_{unbalanced} + (k_{JA} + k_{JB}) \theta_J = 0$
    *   The total stiffness at the joint is $\Sigma k_J = k_{JA} + k_{JB}$.
    *   $M_{unbalanced} + (\Sigma k_J) \theta_J = 0$
    *   $\theta_J = - \frac{M_{unbalanced}}{\Sigma k_J}$
6.  **Distribution:** The portion of the unbalanced moment distributed to member JA is $M_{dist\_JA} = k_{JA} \cdot \theta_J$.
    *   $M_{dist\_JA} = k_{JA} \cdot \left( - \frac{M_{unbalanced}}{\Sigma k_J} \right) = M_{unbalanced} \cdot \left( - \frac{k_{JA}}{\Sigma k_J} \right)$
    *   The term $\frac{k_{JA}}{\Sigma k_J}$ is the **Distribution Factor (DF)** for member JA at joint J.
    *   So, the distributed moment is: $M_{dist\_JA} = - M_{unbalanced} \times DF_{JA}$. The negative sign indicates that the distributed moment opposes the unbalanced moment.
7.  **Carry-over:** When a moment $M_{dist\_JA}$ is applied to member JA at joint J, half of it is carried over to the other end (A).
    *   $M_{carry\_over\_AJ} = \frac{1}{2} M_{dist\_JA}$

This process is repeated for all joints until the unbalanced moments are negligible.

### Analysis of Beams and Non-Sway Frames

**Steps:**

1.  **Determine Member Stiffnesses (k):**
    *   Calculate `EI/L` for each prismatic member.
    *   Determine the stiffness `k` at each joint based on the support condition at the far end (4EI/L for fixed, 3EI/L for pinned/hinged).
2.  **Calculate Distribution Factors (DF):**
    *   At each joint, sum the stiffnesses of all connected members ($\Sigma k$).
    *   For each member connected to the joint, calculate its DF = $k_{member} / \Sigma k_{joint}$.
    *   The sum of DFs at a joint must be 1.
3.  **Calculate Fixed-End Moments (FEM):**
    *   For each member, calculate the FEMs due to applied loads, assuming both ends are fixed. Standard formulas are available for common load cases (e.g., concentrated load, uniformly distributed load).
4.  **Create the Moment Distribution Table:**
    *   Set up a table with columns for Members, Joints, FEMs, Distributed Moments, and Carry-over Moments.
    *   Record the FEMs for each member at its ends.
5.  **Distribute and Carry Over Moments:**
    *   **Step 1: Initial Distribution:**
        *   At each joint, calculate the initial unbalanced moment (sum of FEMs at that joint).
        *   Distribute this unbalanced moment to the members connected to the joint according to their DFs. The distributed moment is $-(\text{Unbalanced Moment}) \times DF$.
        *   Carry over half of the distributed moment to the far end of each member.
    *   **Step 2 onwards: Iterative Balancing:**
        *   The carry-over moments create new unbalanced moments at the far ends.
        *   Distribute these new unbalanced moments.
        *   Carry over half of the newly distributed moments.
    *   **Repeat:** Continue this process of distributing and carrying over moments until the distributed and carry-over moments become negligible (e.g., less than 0.1 kNm).
6.  **Final Moments:**
    *   Sum up all the moments (FEMs + distributed moments + carry-over moments) at each end of each member. This gives the final end moments.
7.  **Calculate Support Reactions and Internal Forces:**
    *   Once the final end moments are known, use equilibrium equations (sum of forces in x and y, sum of moments) for each member or the entire structure to calculate support reactions and internal forces (shear and moment diagrams).

**Example: Analysis of a Beam**

**Problem:** Analyze a continuous beam ABC, simply supported at A and C, with a pin at B. Member AB has length `L` and `EI`. Member BC has length `L` and `2EI`. A concentrated load `P` is applied at the mid-span of AB.

**Solution:**

*   **Member Stiffnesses:**
    *   Member AB: $k_{AB} = k_{BA} = \frac{3EI}{L}$ (since B is a pin, and A is a support with a fixed or pin condition). Let's assume A is a simple support (pin), so k_AB = 3EI/L, and k_BA = 3EI/L.
    *   Member BC: $k_{BC} = k_{CB} = \frac{3(2EI)}{L} = \frac{6EI}{L}$ (since B is a pin, and C is a simple support).
*   **Joint B Stiffness:**
    *   $\Sigma k_B = k_{BA} + k_{BC} = \frac{3EI}{L} + \frac{6EI}{L} = \frac{9EI}{L}$
*   **Distribution Factors at B:**
    *   $DF_{BA} = \frac{k_{BA}}{\Sigma k_B} = \frac{3EI/L}{9EI/L} = \frac{1}{3}$
    *   $DF_{BC} = \frac{k_{BC}}{\Sigma k_B} = \frac{6EI/L}{9EI/L} = \frac{2}{3}$
    *   Check: $1/3 + 2/3 = 1$.
*   **Fixed-End Moments for AB (Load P at mid-span):**
    *   Since A is a simple support, it can rotate. However, for the purpose of calculating FEMs, we initially assume both ends are fixed. The effect of the support condition is accounted for by the distribution factors.
    *   For member AB with load P at mid-span, assuming ends A and B are fixed:
        *   $FEM_{AB} = -\frac{PL}{8}$ (moment at A)
        *   $FEM_{BA} = +\frac{PL}{8}$ (moment at B)
*   **Moment Distribution Table:**

| Member | Joint | FEM     | Dist. Moment | Carry Over | Dist. Moment | Carry Over | Dist. Moment | Carry Over | ... | Final Moment |
| :----- | :---- | :------ | :----------- | :--------- | :----------- | :--------- | :----------- | :--------- | :-- | :----------- |
| AB     | A     | -PL/8   | 0            | 0          | 0            | 0          | 0            | 0          | ... | -PL/8        |
|        | B     | +PL/8   | -PL/24       | -PL/48     | +PL/144      | +PL/288    | -PL/864      | -PL/1728   | ... | +PL/24       |
| BC     | B     | 0       | -2PL/24      | -PL/24     | +PL/72       | +PL/144    | -PL/432      | -PL/288    | ... | -PL/24       |
|        | C     | 0       | 0            | 0          | 0            | 0          | 0            | 0          | ... | 0            |

**Explanation of Table Entries:**

*   **FEM:** Initial Fixed-End Moments.
*   **Dist. Moment (1st round):**
    *   At joint B, the unbalanced moment is $FEM_{BA} + FEM_{BC} = +PL/8 + 0 = +PL/8$.
    *   Distribute to BA: $-(+PL/8) \times DF_{BA} = -(PL/8) \times (1/3) = -PL/24$.
    *   Distribute to BC: $-(+PL/8) \times DF_{BC} = -(PL/8) \times (2/3) = -2PL/24 = -PL/12$.
*   **Carry Over (1st round):**
    *   From B to A: Half of -PL/24 is -PL/48.
    *   From B to C: Half of -PL/12 is -PL/24.
*   **Dist. Moment (2nd round):**
    *   At joint A: Unbalanced moment is -PL/48. Support A is pinned (effectively fixed for carry-over in this simplified table, but the DF calculation implies it's a simple support, so no distribution occurs here). The carry-over moment to A is absorbed by the support reaction. If A was a simple support, the carry-over moment would be 0. Let's assume A is a simple support, thus no distribution at A.
    *   At joint C: Unbalanced moment is -PL/24. Support C is pinned, so no distribution occurs. The carry-over moment to C is absorbed by the support reaction.
    *   **Correction:** For simple supports, the carry-over moment is zero, as the far end can rotate freely.
    *   Let's redo the table with proper carry-over for simple supports:

| Member | Joint | FEM     | Dist. Moment | Carry Over | Dist. Moment | Carry Over | Dist. Moment | Carry Over | ... | Final Moment |
| :----- | :---- | :------ | :----------- | :--------- | :----------- | :--------- | :----------- | :--------- | :-- | :----------- |
| AB     | A     | -PL/8   | 0            | 0          | 0            | 0          | 0            | 0          | ... | -PL/8        |
|        | B     | +PL/8   | -PL/24       | 0 (to A)   | 0            | 0          | 0            | 0          | ... | +PL/8 - PL/24 = +PL/24 |
| BC     | B     | 0       | -PL/12       | 0 (to C)   | 0            | 0          | 0            | 0          | ... | -PL/12       |
|        | C     | 0       | 0            | 0          | 0            | 0          | 0            | 0          | ... | 0            |

*   **Refined Table Logic:**
    *   Initial Unbalanced at B = $PL/8$.
    *   Distribute to BA: $-PL/24$. Carry-over to A = 0 (since A is pinned/simple support).
    *   Distribute to BC: $-PL/12$. Carry-over to C = 0 (since C is pinned/simple support).
    *   Now, at joint B, the sum of moments is $PL/8 - PL/24 - PL/12 = (3PL - PL - 2PL)/24 = 0$. Equilibrium is achieved in one round.

    | Member | Joint | FEM     | Dist. Moment | Carry Over | Final Moment |
    | :----- | :---- | :------ | :----------- | :--------- | :----------- |
    | AB     | A     | -PL/8   | 0            | 0          | -PL/8        |
    |        | B     | +PL/8   | -PL/24       | 0          | +PL/8 - PL/24 = +PL/24 |
    | BC     | B     | 0       | -PL/12       | 0          | -PL/12       |
    |        | C     | 0       | 0            | 0          | 0            |

*   **Final Moments:**
    *   $M_{AB} = -PL/8$
    *   $M_{BA} = +PL/24$
    *   $M_{BC} = -PL/12$
    *   $M_{CB} = 0$

**Important Note on Supports:** The carry-over factor is 1/2 for a member with a fixed far end. For a member with a pinned or roller far end, the carry-over moment is zero. This is because a pinned or roller end can rotate freely, and a moment applied at the near end will not induce a moment at the far end. The DF calculation is still based on the stiffness (3EI/L for pinned/roller, 4EI/L for fixed).

### Analysis of Sway Frames (Illustration Only)

**Concept:** In sway frames, applied loads (horizontal forces like wind or seismic loads, or eccentric vertical loads) cause the entire frame to translate laterally (sway) in addition to rotations at the joints. The Moment Distribution method can be extended to handle this by treating sway as an additional degree of freedom.

**Two Approaches:**

1.  **Superposition of Non-Sway and Sway Analyses:**
    *   **Non-Sway Analysis:** Analyze the frame for the effect of vertical loads only. This is similar to analyzing beams and non-sway frames. The horizontal loads are ignored.
    *   **Sway Analysis:** Analyze the frame for the effect of horizontal loads only. In this step, the frame is assumed to be "locked" against horizontal translation (sway). This locking mechanism imposes a restraining moment at the top and bottom of the columns.
        *   **Locking:** Introduce a restraining force at the top of the frame (e.g., at the roof level for a portal frame) to prevent sway. This force will generate a fixed-end moment in the columns.
        *   **Distribute and Carry Over:** Perform moment distribution at the joints as usual.
        *   **Release the Lock:** Release the restraining force. This will cause the frame to sway. The sway will induce a horizontal displacement and hence moments in the columns. These moments can be calculated based on the stiffness of the columns.
        *   **Balance Sway:** The sway introduces unbalanced moments at the joints. Distribute and carry over these moments.
        *   **Iterate for Sway:** Repeat the process of applying a locking force, distributing moments, releasing the lock, and distributing sway-induced moments until the sway displacement and induced moments are negligible.
    *   **Combine Results:** The final moments, shears, and reactions are the algebraic sum of the results from the non-sway and sway analyses.

2.  **Direct Analysis (Less common for manual MD, more for matrix methods):** Treat horizontal sway as an independent degree of freedom from the start. This involves setting up equilibrium equations that include the sway displacement.

**Key Considerations for Sway Analysis:**

*   **Lateral Stiffness of Members:** The stiffness of members resisting lateral forces is primarily determined by their flexural rigidity (`EI`). For columns, the stiffness is `EI/L` if both ends are pinned, `2EI/L` if one end is fixed and the other pinned, and `4EI/L` if both ends are fixed, when considering lateral deflection. However, for moment distribution, we use the relative stiffness of members connected at a joint.
*   **Distribution Factors for Sway:** The distribution factors calculated for sway are based on the flexural stiffness of the members resisting lateral movement (typically columns).
    *   $DF_{sway} = \frac{k_{column}}{ \Sigma k_{columns} }$ at a particular joint.
*   **Carry-over Factors for Sway:** For members resisting sway, the carry-over factor depends on the end conditions. For a prismatic member of length `L` with flexural rigidity `EI`:
    *   Fixed-Fixed: COF = 1/2
    *   Fixed-Pinned: COF = 0 (no carry-over moment to the pinned end)
    *   Pinned-Pinned: COF = 0

**Illustration of the Superposition Method for a Portal Frame (Sway Analysis):**

Consider a single-storey portal frame with pinned supports at the base and a horizontal load `H` at the apex.

*   **Non-Sway Analysis:**
    *   Only vertical loads are considered. If there are no vertical loads or if vertical loads are symmetrical, the non-sway moments will be zero.
*   **Sway Analysis (Step 1: Apply Lock):**
    *   Introduce a hypothetical vertical restraint at the apex to prevent horizontal sway.
    *   This restraint exerts a force that creates fixed-end moments in the columns. These FEMs are calculated assuming the bases are fixed and the apex is restrained.
    *   The FEMs in the columns will be unbalanced at the apex joint.
*   **Sway Analysis (Step 2: Distribute and Carry Over):**
    *   Distribute these unbalanced moments at the apex to the columns according to their sway distribution factors (based on column stiffness).
    *   Carry over moments to the base. Since the bases are pinned, the carry-over moments to the base are zero.
*   **Sway Analysis (Step 3: Release Lock):**
    *   Remove the vertical restraint at the apex. This allows the frame to sway.
    *   The sway of the frame causes rotations at the joints and induced moments in the columns. The magnitude of sway can be estimated.
    *   The unbalanced moments resulting from the sway are then distributed and carried over.
*   **Sway Analysis (Step 4: Balance Sway):**
    *   This iterative process continues until the unbalanced moments and sway are negligible.

**Simplified Approach for Sway:**

A more practical approach for manual calculation often involves:

1.  **Estimate initial sway:** Make an initial guess of the sway displacement.
2.  **Calculate moments due to sway:** Based on the guessed sway, calculate the moments induced in the columns.
3.  **Distribute moments:** Perform moment distribution at the joints, considering these induced moments as initial unbalanced moments.
4.  **Calculate unbalanced forces:** After distributing moments, calculate the unbalanced horizontal forces at the apex.
5.  **Adjust sway:** Adjust the initial sway based on the unbalanced forces to bring them closer to zero.
6.  **Repeat:** Iterate until equilibrium is achieved.

**Example Illustration (Conceptual):**

Imagine a portal frame with horizontal load `H` at the apex.

*   **Initial Step:** Assume the frame is fixed at the base and pinned at the apex. Apply load `H`. Calculate FEMs in columns. Distribute these FEMs, carry over. This gives a non-sway analysis.
*   **Sway Step:**
    1.  **Lock:** Fix the apex horizontally. This creates FEMs in the columns.
    2.  **Distribute:** Distribute these FEMs to the columns. Carry over to the fixed base (no moment here, as it's the end of the member).
    3.  **Release:** Remove the horizontal lock. The frame will sway. This sway will create some rotations at the joints.
    4.  **Balance Sway:** The sway-induced moments will be unbalanced. Distribute these moments. The carry-over to the fixed bases will be half.
    5.  **Iterate:** Repeat steps to balance out the sway and moments.

**Key takeaway for sway:** The process involves an iterative balancing of moments caused by both vertical loads (non-sway) and horizontal loads (sway). The sway analysis itself is often iterative.

---

## Practice Questions

**Question 1 (Kinematic Indeterminacy):**
Determine the degree of kinematic indeterminacy for the following planar structures. Assume axial deformations are negligible.

a) A propped cantilever beam with a fixed support at one end and a simple support at the other.
b) A continuous beam with two spans, supported by simple supports at the ends and one intermediate simple support.
c) A single-storey portal frame with pinned supports at the base and rigid joints, allowing sway.

**Answers:**
a) DKI = 1 (rotation at the simple support)
b) DKI = 2 (rotations at the intermediate support and one end support).
c) DKI = 4 (1 horizontal sway displacement, 3 rotations at the joints).

**Question 2 (Moment Distribution - Beam):**
Analyze the continuous beam ABC shown below using the Moment Distribution method. Support A is pinned, B is a roller, and C is a roller. Member AB has length 6m and EI = $200 \times 10^3$ kNm²/m. Member BC has length 8m and EI = $300 \times 10^3$ kNm²/m. A uniformly distributed load of 10 kN/m is applied on member AB.

```
      A-------B-------C
      |-------|-------|
      <-- 6m--> <-- 8m-->
     (Pin)   (Roller) (Roller)
     w=10kN/m on AB
```

**Question 3 (Moment Distribution - Non-Sway Frame):**
Analyze the portal frame shown below using the Moment Distribution method. Supports A and B are pinned. The frame is subjected to a concentrated load of 50 kN at the apex (joint C). All members have the same length `L` and `EI`.

```
      C
     / \
    /   \
   A-----B
```
(Assume AB is horizontal, AC and BC are inclined at 45 degrees, and all member lengths are equal 'L')

**Answers to Practice Questions (Detailed Solutions not provided here, but expected for a full study session):**

**Question 2 Solution Outline:**

*   **Stiffnesses:**
    *   $k_{AB} = 3EI_{AB}/L_{AB} = 3(200 \times 10^3)/6 = 100 \times 10^3$
    *   $k_{BC} = 3EI_{BC}/L_{BC} = 3(300 \times 10^3)/8 = 112.5 \times 10^3$
*   **Distribution Factors at B:**
    *   $\Sigma k_B = k_{BA} + k_{BC} = (100 \times 10^3) + (112.5 \times 10^3) = 212.5 \times 10^3$
    *   $DF_{BA} = (100 \times 10^3) / (212.5 \times 10^3) \approx 0.4706$
    *   $DF_{BC} = (112.5 \times 10^3) / (212.5 \times 10^3) \approx 0.5294$
*   **Fixed-End Moments for AB (UDL w=10 kN/m on AB):**
    *   $FEM_{AB} = -wL^2/8 = -(10)(6^2)/8 = -45$ kNm
    *   $FEM_{BA} = +wL^2/8 = +45$ kNm
*   **Fixed-End Moments for BC (No load):** $FEM_{BC} = 0, FEM_{CB} = 0$.
*   **Moment Distribution Table:** Perform the iterative distribution and carry-over. Remember carry-over to roller supports is 0.
*   **Final Moments:** Sum up all moments.

**Question 3 Solution Outline:**

*   **Stiffnesses:**
    *   $k_{AC} = k_{CA} = 3EI/L$ (assuming pinned supports A, B).
    *   $k_{BC} = k_{CB} = 3EI/L$.
    *   $k_{AB} = 3EI/L$.
*   **Distribution Factors at C:**
    *   $\Sigma k_C = k_{CA} + k_{CB} = 3EI/L + 3EI/L = 6EI/L$.
    *   $DF_{CA} = (3EI/L) / (6EI/L) = 0.5$.
    *   $DF_{CB} = (3EI/L) / (6EI/L) = 0.5$.
*   **Fixed-End Moments for AC and BC (Load 50 kN at C):**
    *   This requires formulas for inclined members. For load P at apex C on an inclined member AC, with A being pinned:
        *   $FEM_{AC} = -PL \cos \theta / 8$ (approximate, actual depends on specific configuration).
        *   $FEM_{CA} = +PL \cos \theta / 8$.
    *   For BC, similarly.
    *   **If members are inclined at 45 degrees and have equal lengths 'L':** The horizontal load at C will create FEMs in AC and BC. The horizontal component of the reaction at A will be equal to the horizontal component of the reaction at B.
    *   **Simplified Assumption:** If we assume a symmetrical frame with the load `H` at the apex, and the apex is a rigid joint, the primary DOF for non-sway would be the rotation at C. The supports are pinned, so no sway.
    *   Let's re-interpret the question for a simpler scenario: A symmetrical portal frame with a horizontal load `H` at the apex. The bases are pinned.
        *   The horizontal load at the apex will cause sway. This is a sway frame problem.
        *   If the question implies only vertical loads, then there would be no non-sway moments if the vertical loads are symmetrical.
        *   Assuming the question intends a non-sway frame analysis for vertical loads: if there are no vertical loads, and the frame is symmetrical, the moments will be zero.

    *   **Let's assume the question meant a vertical load of 50 kN at the apex for a non-sway analysis:**
        *   FEMs in AC and BC will be calculated.
        *   The distribution at C will balance these moments.
        *   Carry-over to A and B will be zero (pinned supports).
        *   The calculation would be iterative if the supports were not pinned or if there were multiple spans.

    *   **For a non-sway frame with vertical load at apex C:** The joints at the base (A, B) are pinned, so they can only provide vertical reactions and cannot resist moments. The joint C will rotate. The members AC and BC will experience moments due to this rotation. The analysis focuses on balancing the moments at C.

    *   **Final Answer (if load P at apex C, non-sway, pinned bases):** If the frame is symmetrical and the load is vertical at the apex, and bases are pinned, the moments will be primarily at the apex and distributed to the members. The final moments would be calculated iteratively. Due to symmetry, the moments in AC and BC at C might be equal and opposite.

---

## Important Points to Remember

*   **Stiffness is key:** Accurately determine member stiffnesses (k) and distribution factors (DF).
*   **FEMs are the starting point:** Ensure correct calculation of Fixed-End Moments for all applied loads.
*   **Carry-over is half:** Remember that half the distributed moment is carried over to the far end, unless the far end is a pinned or roller support (COF = 0).
*   **Balance all joints:** Iterate until all joints are balanced (unbalanced moments are negligible).
*   **Supports:** Understand the implications of different support types on stiffness (DF) and carry-over (COF). Pinned/roller supports have a carry-over factor of 0.
*   **Sway frames require special handling:** Use superposition or iterative methods for horizontal loads.
*   **Units:** Maintain consistent units throughout the analysis.
*   **Accuracy:** The accuracy of the results depends on the number of iterations performed.

This comprehensive set of notes covers the fundamental concepts of the displacement approach and the Moment Distribution method, including its application to beams, non-sway frames, and an introduction to sway frames. Remember to practice with various examples to solidify your understanding.
