---
title: "Concepts of effect of pre-strain, lack of fit, temperature changes and support settlement. (Illustration only)."
subject: "STRUCTURAL ANALYSIS - I"
module: "Module 3: Indeterminate Structures:"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba81074d"
status: "completed"
scrapedAt: "2026-05-20T18:41:48.051Z"
---
# Structural Analysis - I: Module 3 - Indeterminate Structures: Concepts of Effects on Structures

## Topic: Effects of Pre-Strain, Lack of Fit, Temperature Changes, and Support Settlement (Illustration Only)

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental concepts behind the development of forces and stresses in indeterminate structures due to pre-strain.
*   Explain how a lack of fit in structural members can induce internal forces and stresses in indeterminate structures.
*   Recognize and conceptually understand the impact of uniform and differential temperature changes on indeterminate structures.
*   Analyze the internal forces and stresses generated in indeterminate structures due to various types of support settlements.
*   Appreciate the significance of these effects in the analysis and design of indeterminate structures.

---

### Introduction to Indeterminate Structures and the Concept of "Superfluous Constraints"

*   **Determinate Structures:** Structures where all internal forces and support reactions can be determined solely by the equations of static equilibrium ($\Sigma F_x = 0$, $\Sigma F_y = 0$, $\Sigma M_z = 0$).
*   **Indeterminate Structures:** Structures that possess more unknown support reactions or internal forces than can be solved using static equilibrium equations alone. These structures have "superfluous constraints" or "redundants" which contribute to their stiffness and load-carrying capacity.
*   **Why Analyze Indeterminate Structures?** They offer advantages such as:
    *   Increased stiffness.
    *   Redundancy, leading to improved safety and robustness.
    *   More uniform stress distribution.
*   **The Challenge:** The presence of these redundants means that forces and deformations are interdependent. Static equilibrium alone is insufficient; compatibility of deformations must also be satisfied.

---

### 1. Effect of Pre-Strain

#### Key Concepts and Definitions:

*   **Pre-Strain:** A strain that is intentionally introduced into a structural member *before* external loads are applied. This can be achieved through various methods like tightening bolts, stretching cables, or precisely cutting members to a specific length.
*   **Induced Forces/Stresses:** When a pre-strained member is incorporated into an indeterminate structure, the imposed strain is resisted by the structure, leading to the development of internal forces (like axial force or moment) and stresses.
*   **Compatibility:** The deformation due to the pre-strain, when combined with the deformation due to the reactions to that pre-strain, must be compatible with the overall deformation of the structure and the constraints at the supports.

#### Illustration/Conceptual Understanding:

Imagine a simple case:

*   **Scenario:** Two members of a truss are manufactured slightly shorter than required. In an indeterminate truss, if these members are forced into position, they will be in compression.
*   **Effect:** This compression is a "pre-strain." To maintain equilibrium, the supports will exert reactions, and other members of the truss will experience internal forces to counteract this pre-strain.
*   **How it works:** The system tries to "relax" the pre-strain. If you have a member that's too short and you force it into place in a rigid frame, it will buckle or induce compressive forces in connected members and moments at the joints.

**Example (Conceptual):**

Consider a simple indeterminate beam supported by a fixed support at one end and a pin support at the other. If a portion of the beam is pre-compressed (e.g., by tightening turnbuckles within the beam), this compression will induce bending moments and shear forces in the beam and reactions at the supports to maintain equilibrium and compatibility. The structure will resist the imposed pre-strain by developing internal forces.

#### Important Points to Remember:

*   Pre-strain introduces internal forces even in the absence of external loads.
*   The magnitude of these induced forces depends on the magnitude of the pre-strain and the stiffness of the structure.
*   Pre-stressing in concrete structures is a common application of induced pre-strain to improve load-carrying capacity and crack resistance.

---

### 2. Effect of Lack of Fit

#### Key Concepts and Definitions:

*   **Lack of Fit:** A discrepancy between the actual dimensions of a structural member and the intended dimensions, leading to a misfit when the structure is assembled. This can manifest as a member being too long or too short.
*   **Induced Forces/Stresses:** Similar to pre-strain, a lack of fit necessitates the application of external forces to connect the member to the structure, resulting in induced internal forces and stresses.

#### Illustration/Conceptual Understanding:

*   **Scenario:** Consider a truss where one of the diagonal members is manufactured slightly too long.
*   **Effect:** When the structure is assembled, this longer diagonal must be compressed to fit into its designated position. This compression is the "lack of fit" effect.
*   **How it works:** This imposed compression, like pre-strain, will lead to internal forces in all members of the truss and reactions at the supports to maintain equilibrium. The structure deforms to accommodate this imposed compression. Conversely, if a member is too short, it would be subjected to tension.

**Example (Conceptual):**

Imagine a continuous beam over multiple supports. If one segment of the beam is fabricated slightly shorter than its span length, forcing it into place will cause it to be in tension. This tension will create internal forces (bending moments, shear forces) throughout the beam and affect the reactions at the supports.

#### Important Points to Remember:

*   Lack of fit creates internal forces and stresses similar to pre-strain.
*   The direction of the force (tension or compression) depends on whether the member is too long or too short.
*   Accurate fabrication and erection are crucial to minimize the effects of lack of fit, especially in large or complex indeterminate structures.

---

### 3. Effect of Temperature Changes

#### Key Concepts and Definitions:

*   **Thermal Expansion/Contraction:** Materials expand when heated and contract when cooled. The amount of expansion or contraction is proportional to the material's coefficient of thermal expansion, the temperature change, and the original length of the member.
*   **Uniform Temperature Change:** The temperature of the entire structure changes by the same amount.
*   **Differential Temperature Change:** Different parts of the structure experience different temperature changes (e.g., top of a beam hotter than the bottom).
*   **Restrained Expansion/Contraction:** In indeterminate structures, the constraints (supports, other members) prevent free thermal expansion or contraction, leading to the development of internal forces and stresses.

#### Illustration/Conceptual Understanding:

**a) Uniform Temperature Change:**

*   **Scenario:** A continuous indeterminate beam is subjected to a uniform increase in temperature.
*   **Free Expansion:** If the beam were free to expand, it would simply increase in length without inducing any internal forces.
*   **Effect in Indeterminate Structure:** However, in an indeterminate structure (e.g., a beam fixed at both ends), this expansion is restrained. This restraint induces compressive forces within the beam.
*   **How it works:** The structure resists the tendency of the beam to expand, leading to internal axial compression and potentially bending moments if the restraint is not perfectly axial.

**b) Differential Temperature Change:**

*   **Scenario:** Consider a continuous indeterminate beam where the top surface is hotter than the bottom surface.
*   **Effect:** The top fibers tend to expand more than the bottom fibers. This causes the beam to bend or warp.
*   **How it works:** In an indeterminate structure, this tendency to bend is resisted by the continuity and support conditions, leading to the development of bending moments and shear forces. The differential expansion creates an internal curvature.

**Example (Conceptual):**

*   **Long bridges:** Experience significant expansion and contraction due to temperature fluctuations. Expansion joints are incorporated to allow this movement. In indeterminate bridge structures without adequate expansion joints, substantial thermal stresses can develop.
*   **Tall buildings:** The sun can heat one side of a building more than the other, leading to differential expansion and potentially inducing bending moments in beams and columns.

#### Formulas (Illustrative):

*   **Free Thermal Strain ($\epsilon_T$):** $\epsilon_T = \alpha \Delta T$
    *   $\alpha$: Coefficient of thermal expansion (e.g., for steel, concrete).
    *   $\Delta T$: Change in temperature.
*   **Free Thermal Expansion ($\delta_T$):** $\delta_T = \alpha \Delta T L$
    *   $L$: Original length of the member.

#### Important Points to Remember:

*   Uniform temperature changes induce axial forces.
*   Differential temperature changes induce bending moments and shear forces.
*   The magnitude of thermal stresses depends on the coefficient of thermal expansion, temperature change, and the degree of restraint.
*   Temperature effects are particularly significant in structures with large spans or where extreme temperature variations occur.

---

### 4. Effect of Support Settlement

#### Key Concepts and Definitions:

*   **Support Settlement:** A downward or upward movement of a support reaction point. This can occur due to uneven settlement of foundations, consolidation of soil, or seismic activity.
*   **Induced Forces/Stresses:** When a support in an indeterminate structure settles, it forces the structure to deform. This deformation is resisted by the continuity of the structure, leading to the development of internal forces (bending moments, shear forces, axial forces) and support reactions.

#### Illustration/Conceptual Understanding:

*   **Scenario:** Consider a continuous indeterminate beam over three supports. Suppose the middle support settles downwards by a certain amount.
*   **Effect:** This settlement causes the beam to bend downwards in the middle, creating hogging moments (negative bending moments) over the settling support and sagging moments (positive bending moments) in the spans. Shear forces will also be induced.
*   **How it works:** The structure tries to maintain continuity. The settlement of one support forces the beam segment adjacent to it to rotate and displace relative to the other segments, creating internal stresses and redistribution of forces.

**Example (Conceptual):**

*   **Continuous beams/frames:** If one column in a frame settles, it will induce bending in the beams and columns connected to it, as well as axial forces.
*   **Trusses:** Support settlement in a truss can lead to a redistribution of forces, causing some members to be more highly stressed than predicted by load analysis alone.

**Key Types of Settlement:**

*   **Vertical Settlement:** The most common type, where a support moves vertically.
*   **Rotational Settlement:** Where a support tilts, causing rotation at the connection.

#### Important Points to Remember:

*   Support settlement induces internal forces and stresses even without external loads.
*   The magnitude and distribution of these forces depend on the magnitude of the settlement and the structural system.
*   Support settlements can be a critical factor in the design of indeterminate structures, especially in areas with poor soil conditions.
*   The analysis of support settlement often involves calculating the "carry-over" effects of the settlement from one part of the structure to another.

---

### Summary of Effects in Indeterminate Structures:

| Effect                  | Primary Cause                                      | Typical Induced Forces/Stresses               |
| :---------------------- | :------------------------------------------------- | :-------------------------------------------- |
| **Pre-Strain**          | Intentional strain introduced before loading.      | Axial force, bending moments, shear forces.   |
| **Lack of Fit**         | Mismatch in member dimensions during assembly.     | Axial force, bending moments, shear forces.   |
| **Temperature Change**  | Variation in temperature causing expansion/contraction. | **Uniform:** Axial force. **Differential:** Bending moments, shear forces. |
| **Support Settlement**  | Vertical or rotational movement of supports.       | Bending moments, shear forces, axial forces.  |

---

### Practice Questions/Exercises (Conceptual Understanding):

1.  **Question:** In a fixed-fixed indeterminate beam, if one end support is lowered by 10 mm, what type of internal forces will be primarily induced in the beam?
    **Answer:** Bending moments and shear forces will be induced. The lowering of the support forces the beam to deflect, and the fixed ends resist this deflection, leading to internal stresses.

2.  **Question:** A truss is being assembled, and one of the tension members is found to be 5 mm too short. If this member is forced into position, what will be the likely induced internal force within that member and in the overall truss?
    **Answer:** The member will be in compression. This compression will lead to a redistribution of forces throughout the truss, inducing both tensile and compressive forces in other members, as well as reactions at the supports.

3.  **Question:** A concrete bridge deck is exposed to direct sunlight, causing its top surface to be significantly hotter than its bottom surface. In an indeterminate continuous girder, how will this differential temperature affect the structure?
    **Answer:** The top surface will expand more than the bottom surface, causing the girder to bend downwards (hogging). This tendency to bend will induce internal bending moments and shear forces in the girder and at its supports.

4.  **Question:** Explain why an indeterminate structure is necessary to experience stresses due to a uniform temperature increase (without any support settlement or external load).
    **Answer:** A uniform temperature increase causes free thermal expansion. In a determinate structure that is free to expand (e.g., a simply supported beam on rollers), this expansion would occur without resistance, thus inducing no internal forces. However, in an indeterminate structure, supports or connected members provide restraint against this free expansion. This restraint forces the structure to resist the expansion, leading to the development of internal compressive forces.

5.  **Question:** What is the key difference in the primary induced forces between a uniform temperature change and a differential temperature change in a continuous beam?
    **Answer:** A uniform temperature change primarily induces axial forces (compression or tension) due to uniform expansion or contraction. A differential temperature change, where different parts of the beam experience different temperatures, causes non-uniform expansion or contraction, leading to warping and the induction of bending moments and shear forces.

---

This concludes the conceptual overview of the effects of pre-strain, lack of fit, temperature changes, and support settlement in indeterminate structures. The subsequent modules will delve into the methods for *quantifying* these effects and calculating the resulting forces and moments.
