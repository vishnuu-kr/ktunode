---
title: "Concept of displacement approach to structural analysis: Introduction to displacement methods of analysis. Kinematic indeterminacy"
subject: "STRUCTURAL ANALYSIS - II"
module: "Module 1: Concept of displacement approach to structural analysis: Introduction to displacement methods of analysis. Kinematic indeterminacy"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810997"
status: "completed"
scrapedAt: "2026-05-20T18:47:06.821Z"
---
# Structural Analysis - II: Module 1 - Concept of Displacement Approach & Kinematic Indeterminacy

---

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the fundamental concept of the displacement approach to structural analysis.
*   Differentiate between force (flexibility) and displacement (stiffness) methods.
*   Define and calculate kinematic indeterminacy (degree of freedom) for various structural elements and systems.
*   Recognize the significance of kinematic indeterminacy in the context of displacement methods.

---

## 1. Introduction to Displacement Methods of Analysis

Structural analysis aims to determine the internal forces and displacements within a structure under applied loads. Traditionally, methods like the force method (flexibility method) focused on determining unknown forces, while displacement methods focus on determining unknown displacements.

### 1.1. Force Method vs. Displacement Method

| Feature          | Force Method (Flexibility Method)                                | Displacement Method (Stiffness Method)                                      |
| :--------------- | :--------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| **Primary Unknowns** | Redundant forces (internal forces or reactions)                  | Displacements (translations and rotations at joints)                        |
| **Basis**        | Compatibility equations (geometric conditions) are primary.      | Equilibrium equations (force/moment balance) are primary.                   |
| **Procedure**    | Remove redundants to create a statically determinate structure.  | Assume displacements and enforce equilibrium at joints.                     |
| **Flexibility Matrix** | Used to relate displacements to forces.                          | Not directly used; stiffness matrix is used.                              |
| **Stiffness Matrix**   | Not directly used; flexibility matrix is used.                 | Used to relate forces to displacements.                                     |
| **Complexity**   | Can be cumbersome for structures with high static indeterminacy. | Generally more systematic and suitable for computer implementation, especially for structures with high kinematic indeterminacy. |
| **Example Methods** | Force method of consistent deformation, virtual work.            | Slope-deflection method, moment distribution method (precursor), stiffness matrix method. |

### 1.2. Concept of Displacement Approach

The displacement approach, also known as the stiffness method, is a powerful technique for analyzing indeterminate structures. It centers on determining the unknown displacements (translations and rotations) at the joints or nodal points of a structure. Once these displacements are known, the internal forces and reactions can be readily calculated.

**The core idea is to relate the forces acting on a structural element or system to its corresponding displacements using a stiffness matrix.**

**Key Principles:**

*   **Stiffness:** The resistance of a structural element to deformation under applied force. A stiffer element requires a larger force to produce a given displacement.
*   **Equilibrium:** At each joint of the structure, the sum of forces and moments must be zero.
*   **Compatibility:** The displacements at connected joints must be consistent (e.g., adjacent members at a joint must displace by the same amount).

**Why is it advantageous?**

*   **Systematic:** It follows a logical and systematic procedure, making it ideal for computational analysis.
*   **Versatile:** Applicable to a wide range of structural configurations and loading conditions.
*   **Handles High Kinematic Indeterminacy:** Efficiently analyzes structures with many degrees of freedom.

---

## 2. Kinematic Indeterminacy (Degree of Freedom)

**Definition:** Kinematic indeterminacy (k), also known as the degree of freedom, is the **number of independent displacements (translations and rotations) required to define the deformed configuration of a structure.** It represents the number of unknown displacements in a displacement analysis.

**In simpler terms, it's the number of parameters you need to specify to fully describe how the structure deforms.**

### 2.1. Types of Displacements Considered:

*   **Translations:** Linear movements in the x, y, or z directions.
*   **Rotations:** Angular movements about an axis.

### 2.2. Calculating Kinematic Indeterminacy:

The method for calculating kinematic indeterminacy depends on the type of structural element and the boundary conditions. We will focus on common structural members in 2D analysis.

**General Approach:**

1.  **Identify all possible independent displacements (translations and rotations) at all joints/nodes.**
2.  **Account for constraints imposed by supports and connections.**
3.  **Subtract the number of specified displacements (zero for fixed supports, specific values for prescribed displacements) or the number of independent displacements that are zero due to rigid connections (e.g., a member connecting two fixed points has no relative displacement).**

---

### 2.3. Kinematic Indeterminacy for Various Structural Elements (2D Analysis)

**a) Beams:**

*   **General Beam Element (Internal Joints):** At each internal joint where members are connected and rotation is possible, there are two potential degrees of freedom:
    *   Vertical translation (Δ)
    *   Rotation (θ)
*   **Example:** A continuous beam with 'n' intermediate joints.
    *   Each intermediate joint has 2 DOFs (Δ and θ).
    *   If the beam ends are simply supported or fixed, their displacements are constrained.
    *   Consider a continuous beam over three supports with two spans. There's one internal joint.
        *   At the internal joint: 1 vertical displacement (Δ) and 1 rotation (θ).
        *   Total k = 2.

**b) Trusses:**

*   **General Truss Joint:** At each joint, there are two possible independent displacements:
    *   Horizontal translation (Δx)
    *   Vertical translation (Δy)
*   **Calculation:**
    *   **k = 2 * (Number of joints) - (Number of constraints)**
    *   **Constraints:**
        *   Roller support: 1 constraint (prevents translation in one direction).
        *   Pin support: 2 constraints (prevents translation in x and y directions).
        *   Fixed support: 2 constraints (prevents translation in x and y directions, although usually not used in typical truss analysis where joints are pinned).

*   **Example 1: Simple Pin-Jointed Truss**
    *   A triangular truss with 3 joints, all pinned.
    *   Number of joints = 3.
    *   Constraints: Pin supports (each allows no translation) mean 2 constraints per joint.
    *   If all 3 joints are pinned and supported to be stable, let's assume a typical arrangement: one pinned support, one roller support.
        *   Joint 1 (Pin): 2 constraints (prevents Δx, Δy)
        *   Joint 2 (Roller): 1 constraint (prevents Δy)
        *   Joint 3 (No support - would move): 0 constraints
    *   **Correct approach:** Consider the degrees of freedom of the system.
        *   Joint 1: 0 DOFs (fixed)
        *   Joint 2: 0 DOFs (fixed)
        *   Joint 3: 2 DOFs (Δx, Δy)
        *   Total k = 2.

*   **Example 2: Pin-Jointed Truss with 4 Joints**
    *   Consider a truss with 4 joints, supported by one pin and one roller.
    *   Number of joints = 4.
    *   If all joints were free, total potential DOFs = 2 * 4 = 8.
    *   Let's say Joint 1 is pinned (2 constraints), Joint 2 is roller (1 constraint).
    *   Joint 1: 0 DOFs
    *   Joint 2: 0 DOFs (constrained by roller)
    *   Joint 3: 2 DOFs (Δx, Δy)
    *   Joint 4: 2 DOFs (Δx, Δy)
    *   Total k = 4.

    *   **Formula Method:**
        *   k = 2 * (Number of joints) - (Number of reactions)
        *   For a stable truss, the number of reactions is usually 3 (e.g., two for a pin, one for a roller).
        *   k = 2 * 4 - 3 = 8 - 3 = 5. This is incorrect if we consider supports eliminating DOF at those joints.
        *   **The most fundamental definition:** Count the independent displacements directly.

    *   **Let's use the definition correctly for joints:**
        *   Joint 1 (Pin): Cannot move in x or y. 0 DOFs.
        *   Joint 2 (Roller): Cannot move in y (assume roller on horizontal plane). 1 DOF (Δx).
        *   Joint 3: 2 DOFs (Δx, Δy).
        *   Joint 4: 2 DOFs (Δx, Δy).
        *   Total k = 1 + 2 + 2 = 5.

*   **Important Consideration for Trusses:** The formula `k = 2J - R` (where J is number of joints, R is number of reactions) determines the **external kinematic indeterminacy**. However, the displacement method is about *all* independent displacements. If supports are placed at joints, those joints have constrained displacements.

    *   **Correct Method for Trusses:**
        1.  Assume all joints are free to move in x and y directions.
        2.  For each joint, count its potential DOFs (2 if free).
        3.  Subtract the DOFs eliminated by supports.
            *   Pin support at a joint: Eliminates 2 DOFs.
            *   Roller support at a joint: Eliminates 1 DOF.
        4.  Sum the remaining DOFs.

    *   **Example: Truss with 4 joints, Joint 1 pinned, Joint 2 roller.**
        *   Joint 1: 2 potential DOFs. Pin support eliminates both. Remaining DOFs = 0.
        *   Joint 2: 2 potential DOFs. Roller support eliminates 1 DOF. Remaining DOFs = 1 (horizontal translation).
        *   Joint 3: 2 potential DOFs. No support. Remaining DOFs = 2.
        *   Joint 4: 2 potential DOFs. No support. Remaining DOFs = 2.
        *   Total k = 0 + 1 + 2 + 2 = 5.

**c) Frames:**

*   **General Frame Joint:** At a typical joint within a frame structure (where members are rigidly connected, or where members meet at an angle), there are three potential degrees of freedom:
    *   Horizontal translation (Δx)
    *   Vertical translation (Δy)
    *   Rotation (θ)
*   **Calculation:**
    *   Count the number of joints where independent translations and rotations can occur.
    *   Sum the DOFs at each joint.
    *   Adjust for supports and member constraints.

*   **Example 1: Simple Portal Frame (2D)**
    *   A portal frame with a fixed base at both columns.
    *   Joint A: Fixed base (0 DOFs)
    *   Joint B: Top of left column (Δx, Δy, θ) = 3 DOFs
    *   Joint C: Top of right column (Δx, Δy, θ) = 3 DOFs
    *   Joint D: Fixed base (0 DOFs)
    *   However, there's a constraint: The frame is assumed rigid. The top beam connects B and C. If we consider B and C, the relative horizontal displacement might be equal if the frame is symmetric and loaded symmetrically. But for general cases, we consider them independent.
    *   The columns are typically assumed to be prismatic, and the connection between the beam and columns is rigid.
    *   **Joints with potential DOFs:** Top of each column (2 joints).
    *   At each top joint (e.g., B and C): Δx, Δy, θ. Total potential = 3 DOFs/joint * 2 joints = 6 DOFs.
    *   Support Constraints: Fixed bases eliminate all these DOFs at the base. So, at the base, DOFs = 0.
    *   **k = 3 * (Number of joints where rotation and translation are possible) - (Number of constraints).**
    *   In a portal frame with fixed bases, the "joints" we are interested in are the nodes where members connect and are not fixed. These are the top corners.
    *   Number of joints with potential DOFs = 2 (top of columns).
    *   At each such joint, there are 3 DOFs (Δx, Δy, θ).
    *   Total k = 3 * 2 = 6.

*   **Example 2: Rectangular Frame with one fixed base and one pinned base.**
    *   Joint A: Fixed base (0 DOFs)
    *   Joint B: Top of left column (Δx, Δy, θ) = 3 DOFs
    *   Joint C: Top of right column (Δx, Δy, θ) = 3 DOFs
    *   Joint D: Pinned base (0 DOFs)
    *   **k = 3 * (Number of joints with potential DOFs) - (Constraints)**
    *   Joints with potential DOFs: B and C.
    *   Total k = 3 (at B) + 3 (at C) = 6.

*   **Example 3: Frame with internal pinned connection.**
    *   Consider a frame where at one joint, two columns meet a horizontal beam, and this connection is pinned (allowing rotation but no relative translation).
    *   Joint P (internal pin): Δx, Δy, θ. 3 DOFs.
    *   Joints at supports (e.g., fixed): 0 DOFs.
    *   If there are 'n' joints with 3 potential DOFs, and some are supported, we count the free DOFs.
    *   Let's say a frame has 4 nodes where members meet and are not fixed.
        *   Node 1: Fixed base (0 DOFs)
        *   Node 2: Free joint (Δx, Δy, θ) - 3 DOFs
        *   Node 3: Free joint (Δx, Δy, θ) - 3 DOFs
        *   Node 4: Pinned base (0 DOFs)
    *   Total k = 3 + 3 = 6.

**d) Grid Structures:**

*   For grid structures (loads and deformations in the xy-plane, but elements can bend in xz or yz planes), each joint can have:
    *   Translation in x (Δx)
    *   Translation in y (Δy)
    *   Rotation about z (θz)
*   So, each free joint has 3 DOFs, similar to frames.

---

### 2.4. Significance of Kinematic Indeterminacy in Displacement Methods

*   **Size of the Stiffness Matrix:** The kinematic indeterminacy (k) directly dictates the size of the global stiffness matrix [K] of the structure. If there are 'k' independent displacements, the stiffness matrix will be a k x k matrix.
*   **Number of Unknowns:** The displacement method aims to solve for these 'k' unknown displacements.
*   **Computational Effort:** A higher kinematic indeterminacy leads to a larger stiffness matrix, requiring more computational effort to solve the system of equations [K]{D} = {F}.

---

## 3. Practice Questions

---

**Question 1:**
For a continuous beam over three supports with two spans, and ends supported by rollers, what is the kinematic indeterminacy? Assume prismatic members.

*   **Answer:**
    *   The structure has 3 joints (two supports, one intermediate).
    *   Joints at supports (rollers): Cannot translate vertically.
    *   Intermediate joint: Can translate vertically (Δ) and rotate (θ).
    *   Let's analyze the degrees of freedom:
        *   Support 1 (Roller): Constrained in vertical translation. 0 DOFs.
        *   Support 2 (Internal): Can translate vertically (Δ) and rotate (θ). 2 DOFs.
        *   Support 3 (Roller): Constrained in vertical translation. 0 DOFs.
    *   Total k = 2.

---

**Question 2:**
Consider a plane truss with 5 joints. Joints 1 and 2 are pinned supports, and Joint 3 is a roller support. What is the kinematic indeterminacy of this truss?

*   **Answer:**
    *   Number of joints = 5.
    *   Each joint has 2 potential DOFs (Δx, Δy).
    *   Joint 1 (Pin): 2 constraints, eliminates 2 DOFs. Remaining = 0.
    *   Joint 2 (Pin): 2 constraints, eliminates 2 DOFs. Remaining = 0.
    *   Joint 3 (Roller): 1 constraint, eliminates 1 DOF. Remaining = 1 (horizontal translation).
    *   Joint 4 (Free): 2 potential DOFs. No support. Remaining = 2.
    *   Joint 5 (Free): 2 potential DOFs. No support. Remaining = 2.
    *   Total k = 0 + 0 + 1 + 2 + 2 = 5.

---

**Question 3:**
What are the degrees of freedom at each joint of a typical 2D frame?

*   **Answer:**
    *   Each joint in a 2D frame can undergo three independent displacements:
        1.  Horizontal translation (Δx)
        2.  Vertical translation (Δy)
        3.  Rotation (θ)

---

**Question 4:**
For a simple rectangular portal frame with fixed bases at both columns, how many degrees of freedom are there for the entire structure?

*   **Answer:**
    *   The joints with potential DOFs are the top corners of the columns. Let's call them Joint B and Joint C.
    *   Joint B: Δx, Δy, θ (3 DOFs)
    *   Joint C: Δx, Δy, θ (3 DOFs)
    *   The bases (Joint A and Joint D) are fixed, so they have 0 DOFs.
    *   Total kinematic indeterminacy (k) = 3 (at B) + 3 (at C) = 6.

---

**Question 5:**
Which method of analysis focuses on determining unknown displacements as primary unknowns?

*   **Answer:**
    *   The Displacement Method (or Stiffness Method).

---

## 4. Important Points to Remember

*   **Displacement Method Focuses on DOFs:** The core of the displacement method is solving for unknown joint displacements.
*   **Kinematic Indeterminacy = Number of DOFs:** The kinematic indeterminacy (k) directly defines the number of primary unknowns and the size of the stiffness matrix.
*   **Be Precise with DOF Counting:** Carefully identify all potential translations and rotations at each joint and account for support constraints.
*   **Frames vs. Beams vs. Trusses:** The number of DOFs per joint differs (3 for frames, 2 for beams where rotation and vertical translation are considered).
*   **Support Conditions are Crucial:** Supports eliminate degrees of freedom. A fixed support eliminates all DOFs at that point. A roller eliminates translation in one direction.
*   **Displacement Method is Computationally Efficient:** It's well-suited for computer implementation due to its systematic nature.

---
