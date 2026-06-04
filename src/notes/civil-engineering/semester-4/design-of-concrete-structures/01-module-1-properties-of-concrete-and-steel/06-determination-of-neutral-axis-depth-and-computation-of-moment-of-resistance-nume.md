---
title: "Determination of Neutral Axis Depth and Computation of Moment of Resistance- Numerical Problems"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 1: Properties of Concrete and Steel"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109bd"
status: "completed"
scrapedAt: "2026-05-20T18:43:40.640Z"
---
# DESIGN OF CONCRETE STRUCTURES

## Module 1: Properties of Concrete and Steel

### Topic: Determination of Neutral Axis Depth and Computation of Moment of Resistance - Numerical Problems

---

This module focuses on understanding the fundamental properties of concrete and steel and how they behave under load. Specifically, this topic delves into the analysis of a reinforced concrete beam to determine its internal resisting moment.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the concept of stress distribution in a reinforced concrete beam.
*   Determine the depth of the neutral axis in a singly reinforced concrete beam.
*   Calculate the lever arm for resisting the applied bending moment.
*   Compute the moment of resistance of a singly reinforced concrete beam.
*   Apply the principles to solve practical numerical problems.

---

### 1. Key Concepts and Definitions

**1.1. Reinforced Concrete (RC) Beam:**

*   A structural element made of concrete and steel reinforcement bars.
*   Concrete is strong in compression, while steel is strong in tension.
*   RC beams are designed to resist bending moments by utilizing both materials effectively.

**1.2. Bending Moment:**

*   An internal moment generated within a structural member due to applied external loads.
*   This moment tends to bend the beam.

**1.3. Neutral Axis (NA):**

*   The imaginary line within the cross-section of a beam where the longitudinal stress is zero.
*   Above the NA, the beam is in compression; below the NA, it is in tension.
*   In RC beams, the concrete is assumed to resist compression, and the steel reinforcement resists tension.

**1.4. Stress Distribution in a Singly Reinforced Concrete Beam (Under Service Loads - Elastic Analysis):**

*   **Concrete:** Assumed to behave elastically and linearly. Stress distribution is triangular in the compression zone.
*   **Steel:** Assumed to behave elastically and linearly. Stress distribution is uniform across the cross-section of the reinforcement.
*   **Limiting Strain:** The maximum strain in concrete at the extreme compression fiber is typically taken as 0.0035 (for Limit State Design, but for elastic analysis, this concept is simplified). For simplified elastic analysis, we consider the stress-strain relationship.

**1.5. Strain Distribution:**

*   The strain varies linearly from the neutral axis to the extreme compression fiber and the tension reinforcement.

**1.6. Moment of Resistance (M<sub>R</sub>):**

*   The internal resisting moment that a beam can generate to counteract the applied external bending moment.
*   It is the product of the resultant compressive force in concrete and the lever arm, or the product of the tensile force in steel and the lever arm.

**1.7. Lever Arm (Z):**

*   The perpendicular distance between the resultant compressive force and the resultant tensile force.

**1.8. Effective Depth (d):**

*   The distance from the extreme compression fiber to the centroid of the tension reinforcement.

**1.9. Critical Depth of Neutral Axis (x<sub>u,max</sub>):**

*   The maximum depth the neutral axis can reach in a singly reinforced concrete beam to ensure that the concrete reaches its limiting compressive strain before the steel reaches its yield strain. This is crucial for Limit State Design, but the concept of equilibrium is used for basic elastic calculations.

**1.10. Limiting Moment of Resistance:**

*   The maximum moment a section can resist without overstressing either concrete or steel.

---

### 2. Determination of Neutral Axis Depth (x<sub>u</sub>)

For a singly reinforced concrete beam under bending, the internal forces must be in equilibrium. We use the principle of **equilibrium of forces**.

**Assumptions for Elastic Analysis:**

1.  Plane sections remain plane after bending.
2.  There is perfect bond between concrete and steel.
3.  Concrete resists only compressive stresses.
4.  Steel resists only tensile stresses.
5.  The stress-strain relationship for concrete and steel is linear.

**Calculating the Neutral Axis Depth (x<sub>u</sub>):**

Consider a rectangular beam of width 'b' and effective depth 'd'. Let 'A<sub>st</sub>' be the area of tension reinforcement.

*   **Compressive Force in Concrete (C):**
    *   The concrete stress distribution is triangular.
    *   The maximum compressive stress in concrete at the extreme fiber is $f_{c}$.
    *   The compressive force is the area of the stress block multiplied by the width 'b'.
    *   $C = \frac{1}{2} \times \text{base} \times \text{height} \times \text{width}$
    *   The stress at any depth y from the NA is $f_c \times \frac{y}{x_u}$.
    *   The resultant compressive force is the area of the stress triangle: $C = \frac{1}{2} \times f_{c} \times x_u \times b$.

*   **Tensile Force in Steel (T):**
    *   The tensile stress in steel is $f_{st}$ (usually the yield stress, $f_y$, or a fraction of it depending on the design code).
    *   $T = \text{Area of steel} \times \text{Tensile stress in steel}$
    *   $T = A_{st} \times f_{st}$

**Equilibrium of Forces (C = T):**

$\frac{1}{2} \times f_{c} \times x_u \times b = A_{st} \times f_{st}$

This equation helps us determine the neutral axis depth, $x_u$, if the stresses are known. However, in practical reinforced concrete design, we often work with **modular ratio (m)** to relate the elastic moduli of steel and concrete.

**Using Modular Ratio (m):**

The modular ratio, $m$, is the ratio of the modulus of elasticity of steel ($E_s$) to the modulus of elasticity of concrete ($E_c$).

$m = \frac{E_s}{E_c}$

To account for the different elastic properties, we often convert the concrete stress block into an equivalent steel area. The equivalent area of concrete in tension (which is ignored in design) is considered as $b \times x_u$. The stress in concrete is $f_c$. The equivalent stress in steel corresponding to the same strain is $m \times f_c$.

Consider the stress distribution in terms of strain. Let $\epsilon_c$ be the maximum strain in concrete.
Stress in concrete at any depth $y$ is $\sigma_c(y) = E_c \frac{y}{x_u} \epsilon_c$.
Stress in steel is $\sigma_s = E_s \epsilon_{st}$, where $\epsilon_{st}$ is the strain in steel.
From strain compatibility, $\frac{\epsilon_c}{x_u} = \frac{\epsilon_{st}}{d-x_u}$. So $\epsilon_{st} = \epsilon_c \frac{d-x_u}{x_u}$.
$\sigma_s = E_s \epsilon_c \frac{d-x_u}{x_u} = m E_c \epsilon_c \frac{d-x_u}{x_u}$.

Let's go back to the equilibrium of forces using the stress block.

The resultant compressive force C can be considered as acting at the centroid of the stress triangle, which is at a distance of $x_u/3$ from the extreme compression fiber.

**Moment Equilibrium:**

For equilibrium, the sum of moments about any point should be zero. We can take moments of forces about the center of tension reinforcement.

*   **Moment due to compression (C):** $C \times (d - \frac{x_u}{3})$
*   **Moment due to tension (T):** $T \times 0$ (since we are taking moments about the tension steel)

So, the moment of resistance is $M_R = C \times (d - \frac{x_u}{3})$.

Alternatively, taking moments about the centroid of the compression force:

*   **Moment due to compression (C):** $C \times 0$
*   **Moment due to tension (T):** $T \times (d - \frac{x_u}{3})$

So, the moment of resistance is $M_R = T \times (d - \frac{x_u}{3})$.

**Calculating x<sub>u</sub> when stresses are at allowable limits:**

If we know the allowable stresses for concrete ($f_{ca}$) and steel ($f_{sa}$), we can directly calculate $x_u$.

$\frac{1}{2} f_{ca} x_u b = A_{st} f_{sa}$

$x_u = \frac{2 A_{st} f_{sa}}{b f_{ca}}$

**Important Note on Allowable Stresses:** The specific allowable stresses for concrete and steel depend on the grade of concrete and steel used and the design code (e.g., IS 456, Eurocode 2). For simplified elastic analysis problems, these values are often provided.

---

### 3. Computation of Moment of Resistance (M<sub>R</sub>)

Once the neutral axis depth ($x_u$) is determined, the moment of resistance can be calculated.

**Method 1: Using Compressive Force (C)**

$M_R = C \times Z$
Where, $C = \frac{1}{2} f_{ca} x_u b$
And the lever arm $Z = d - \frac{x_u}{3}$

So, $M_R = (\frac{1}{2} f_{ca} x_u b) \times (d - \frac{x_u}{3})$

**Method 2: Using Tensile Force (T)**

$M_R = T \times Z$
Where, $T = A_{st} f_{sa}$
And the lever arm $Z = d - \frac{x_u}{3}$

So, $M_R = (A_{st} f_{sa}) \times (d - \frac{x_u}{3})$

**Note:** For a section to be in equilibrium under bending, $M_R$ calculated by both methods should be equal. The calculated $M_R$ represents the safe bending moment the section can resist.

---

### 4. Examples

**Example 1: Determining Neutral Axis Depth**

A rectangular reinforced concrete beam has a width of 200 mm and an effective depth of 400 mm. It is reinforced with 1200 mm² of steel in the tension zone. If the allowable stresses in concrete and steel are $f_{ca} = 7$ N/mm² and $f_{sa} = 140$ N/mm² respectively, determine the depth of the neutral axis.

**Given:**
*   Width of beam, $b = 200$ mm
*   Effective depth, $d = 400$ mm
*   Area of steel, $A_{st} = 1200$ mm²
*   Allowable stress in concrete, $f_{ca} = 7$ N/mm²
*   Allowable stress in steel, $f_{sa} = 140$ N/mm²

**Solution:**

We use the equilibrium equation: $C = T$
$\frac{1}{2} f_{ca} x_u b = A_{st} f_{sa}$

Substitute the given values:
$\frac{1}{2} \times 7 \times x_u \times 200 = 1200 \times 140$
$700 x_u = 168000$
$x_u = \frac{168000}{700}$
$x_u = 240$ mm

**Answer:** The depth of the neutral axis is 240 mm.

**Example 2: Computing Moment of Resistance**

For the beam in Example 1, calculate the moment of resistance of the section.

**Given:**
*   $b = 200$ mm
*   $d = 400$ mm
*   $A_{st} = 1200$ mm²
*   $f_{ca} = 7$ N/mm²
*   $f_{sa} = 140$ N/mm²
*   $x_u = 240$ mm (from Example 1)

**Solution:**

**Step 1: Calculate the lever arm (Z)**
$Z = d - \frac{x_u}{3}$
$Z = 400 - \frac{240}{3}$
$Z = 400 - 80$
$Z = 320$ mm

**Step 2: Calculate the moment of resistance using tension force**
$M_R = T \times Z$
$T = A_{st} \times f_{sa} = 1200 \times 140 = 168000$ N

$M_R = 168000 \times 320$
$M_R = 53760000$ N-mm
$M_R = 53.76$ kN-m

**Step 3: Verify by calculating using compression force**
$C = \frac{1}{2} f_{ca} x_u b$
$C = \frac{1}{2} \times 7 \times 240 \times 200$
$C = 168000$ N

$M_R = C \times Z$
$M_R = 168000 \times 320$
$M_R = 53760000$ N-mm
$M_R = 53.76$ kN-m

Both methods yield the same result, as expected.

**Answer:** The moment of resistance of the section is 53.76 kN-m.

---

### 5. Practice Questions

**Question 1:**

A singly reinforced concrete beam is 250 mm wide and has an effective depth of 450 mm. It is reinforced with 1500 mm² of steel in the tension zone. The allowable stresses for concrete and steel are $f_{ca} = 7.5$ N/mm² and $f_{sa} = 150$ N/mm² respectively.
(a) Determine the depth of the neutral axis.
(b) Calculate the moment of resistance of the section.

**Answer 1:**

**(a) Determination of Neutral Axis Depth ($x_u$):**
$\frac{1}{2} f_{ca} x_u b = A_{st} f_{sa}$
$\frac{1}{2} \times 7.5 \times x_u \times 250 = 1500 \times 150$
$937.5 x_u = 225000$
$x_u = \frac{225000}{937.5}$
$x_u = 240$ mm

**(b) Computation of Moment of Resistance ($M_R$):**
Lever arm, $Z = d - \frac{x_u}{3} = 450 - \frac{240}{3} = 450 - 80 = 370$ mm
$M_R = A_{st} f_{sa} Z = 1500 \times 150 \times 370$
$M_R = 225000 \times 370 = 83250000$ N-mm
$M_R = 83.25$ kN-m

---

**Question 2:**

A rectangular RC beam is 300 mm wide and has an effective depth of 500 mm. The area of tension reinforcement is 1800 mm². The concrete mix used is such that the allowable compressive stress is $f_{ca} = 8$ N/mm², and the steel reinforcement used has an allowable tensile stress of $f_{sa} = 160$ N/mm².
(a) Calculate the position of the neutral axis.
(b) Determine the moment of resistance of the beam section.

**Answer 2:**

**(a) Determination of Neutral Axis Depth ($x_u$):**
$\frac{1}{2} f_{ca} x_u b = A_{st} f_{sa}$
$\frac{1}{2} \times 8 \times x_u \times 300 = 1800 \times 160$
$1200 x_u = 288000$
$x_u = \frac{288000}{1200}$
$x_u = 240$ mm

**(b) Computation of Moment of Resistance ($M_R$):**
Lever arm, $Z = d - \frac{x_u}{3} = 500 - \frac{240}{3} = 500 - 80 = 420$ mm
$M_R = A_{st} f_{sa} Z = 1800 \times 160 \times 420$
$M_R = 288000 \times 420 = 120960000$ N-mm
$M_R = 120.96$ kN-m

---

### 6. Important Points to Remember

*   **Equilibrium is Key:** The determination of the neutral axis and moment of resistance relies on the fundamental principles of static equilibrium ($C = T$ and moment equilibrium).
*   **Allowable Stresses:** Always use the given allowable stresses for concrete and steel in your calculations. These values are material-specific and code-dependent.
*   **Effective Depth (d):** This is a critical parameter. It's the distance from the extreme compression fiber to the *centroid* of the tension reinforcement.
*   **Lever Arm (Z):** The lever arm is the distance between the resultant compressive force and the resultant tensile force. It's calculated as $d - \frac{x_u}{3}$ for a rectangular stress block in concrete.
*   **Units:** Be consistent with units (N, mm, N-mm, kN-m). Conversion is often required. 1 kN-m = $10^6$ N-mm.
*   **Limiting vs. Actual NA:** In elastic analysis, we calculate the *actual* neutral axis based on the given stresses. In Limit State Design (which is more common in modern practice), we compare the actual NA with the *limiting* NA ($x_{u,max}$) to determine the nature of the section (under-reinforced, balanced, or over-reinforced). This topic, however, focuses on the simpler elastic analysis.
*   **Rectangular Stress Block:** The assumption of a triangular stress distribution in concrete is a simplification. In more advanced analysis (like Limit State Design), a rectangular stress block is often used, which leads to slightly different formulas for $C$ and $Z$. However, for this introductory topic, the triangular stress block is assumed.

---
