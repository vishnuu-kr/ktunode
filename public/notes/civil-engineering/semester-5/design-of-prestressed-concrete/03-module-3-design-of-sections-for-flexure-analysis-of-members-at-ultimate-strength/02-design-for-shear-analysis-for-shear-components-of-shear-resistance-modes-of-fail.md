---
title: "Design for Shear: Analysis for shear - Components of shear resistance - Modes of Failure - Limit State of collapse for shear - Design of transverse reinforcement."
subject: "DESIGN OF PRESTRESSED CONCRETE"
module: "Module 3: Design of Sections for Flexure: Analysis of members at ultimate strength "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fe3"
status: "completed"
scrapedAt: "2026-05-20T18:47:55.025Z"
---
# DESIGN OF PRESTRESSED CONCRETE

## Module 3: Design of Sections for Flexure: Analysis of Members at Ultimate Strength

### Topic: Design for Shear: Analysis for Shear, Components of Shear Resistance, Modes of Failure, Limit State of Collapse for Shear, Design of Transverse Reinforcement

---

This module focuses on the behavior of prestressed concrete members at their ultimate strength, specifically addressing their resistance to shear forces. We will explore the various components contributing to shear resistance, understand the different ways members can fail under shear, and learn how to design transverse reinforcement to ensure safety at the limit state of collapse for shear.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles of shear behavior in prestressed concrete members.
*   Identify and explain the various components that contribute to the shear resistance of a prestressed concrete section.
*   Recognize and describe the common modes of shear failure in prestressed concrete members.
*   Apply limit state design principles to analyze and design prestressed concrete members for shear at the ultimate limit state.
*   Calculate and design the required transverse reinforcement (stirrups) for prestressed concrete sections to resist shear forces.

---

### 1. Introduction to Shear in Prestressed Concrete

Shear forces, along with bending moments, are critical considerations in the design of structural elements. Prestressed concrete members, due to the presence of pre-compression, exhibit different shear behavior compared to normally reinforced concrete. The pre-compression helps to close cracks that would normally form under shear and bending, thereby increasing the shear resistance. However, at ultimate load, the pre-compression might be overcome, and cracking will occur.

---

### 2. Components of Shear Resistance

The shear resistance of a prestressed concrete section at the ultimate limit state is provided by several components:

*   **Concrete Contribution ($V_c$)**: This is the shear resistance provided by the uncracked concrete in the compression zone and by the interlocking of aggregate particles across inclined cracks that form at ultimate load.
    *   **Uncracked Concrete Contribution ($V_{uc}$)**: Before significant cracking occurs, the entire section is assumed to be effective, and the shear resistance is derived from the concrete's ability to resist shear stress. This is more relevant at service loads.
    *   **Cracked Concrete Contribution ($V_{cr}$)**: At ultimate load, diagonal tension cracks form. The shear resistance is then provided by the concrete between these cracks, which is characterized by:
        *   **Aggregate Interlock**: The resistance to sliding of the rough surfaces of the concrete across the diagonal crack. This is a significant contributor.
        *   **Uncracked Concrete in Compression Zone**: The concrete in the compression zone above the diagonal crack contributes to shear resistance.
        *   **Dowel Action of Reinforcement**: The longitudinal reinforcement (both prestressing and non-prestressing) that crosses the diagonal crack acts like dowels, resisting the tendency of the crack faces to slide past each other.

*   **Web Reinforcement Contribution ($V_w$)**: This is the shear resistance provided by the stirrups (transverse reinforcement) that are designed to resist the diagonal tensile stresses. Stirrups are essential for ductility and to prevent sudden shear failure.

**Total Shear Resistance ($V_u$) = $V_c$ + $V_w$**

---

### 3. Modes of Shear Failure in Prestressed Concrete

Prestressed concrete members can fail in shear in several ways, primarily influenced by the level of shear force, the amount of transverse reinforcement, and the amount and eccentricity of prestressing.

#### 3.1. Diagonal Tension Failure (Shear Tension Failure)

*   **Description**: This is the most common mode of shear failure. It occurs when diagonal tensile stresses in the web of the member exceed the tensile strength of concrete. Diagonal cracks form, starting from the flexural tensile zone and extending diagonally upwards into the compression zone. If the shear force is high enough, these cracks can propagate rapidly, leading to a sudden collapse.
*   **Characteristics**:
    *   Formation of diagonal cracks inclined at approximately 45 degrees to the longitudinal axis.
    *   Often initiated by flexure-induced cracks at the extreme tensile fiber.
    *   Failure is brittle and can be sudden, especially if minimal or no transverse reinforcement is provided.
*   **Factors Influencing**: High shear force, low concrete tensile strength, low level of pre-compression, presence of flexural cracks.

#### 3.2. Shear Compression Failure (Crushing of the Compression Zone)

*   **Description**: This mode of failure occurs when the diagonal compressive stresses in the concrete above the diagonal tension crack exceed the crushing strength of the concrete. This typically happens in members with a shallow web or when the shear force is very high in relation to the section's depth and the concrete's compressive strength.
*   **Characteristics**:
    *   Diagonal cracks form, but the failure is characterized by the crushing of concrete in the compression zone.
    *   The diagonal cracks might be wider and flatter than in diagonal tension failure.
    *   Occurs in sections with a high shear-to-moment ratio or in members with a very thin web.
*   **Factors Influencing**: High shear force, high concrete compressive strength, shallow web, low flexural capacity.

#### 3.3. Flexural-Shear Failure

*   **Description**: This failure mode is a combination of flexural and shear distress. It occurs when a flexural crack, caused by bending moment, extends and is then widened by shear stresses, leading to shear failure initiating from the flexural crack.
*   **Characteristics**:
    *   Starts as a flexural crack at the bottom or top of the section.
    *   The crack then propagates upwards and diagonally due to shear.
    *   Can be considered a type of diagonal tension failure where the initiation point is dictated by flexure.
*   **Factors Influencing**: High bending moment and high shear force acting simultaneously.

#### 3.4. Anchorage Zone Failure (Bursting)

*   **Description**: This type of failure is specific to prestressed concrete and occurs in the anchorage zone where the prestressing force is applied. The concentrated bursting force can cause the concrete to split or burst.
*   **Characteristics**:
    *   Cracking and disintegration of concrete in the vicinity of the anchorages.
    *   Caused by high localized stresses.
*   **Factors Influencing**: High prestressing force, inadequate confinement reinforcement in the anchorage zone, geometry of the anchorage.
*   **Note**: While critical for prestressing, anchorage zone failure is usually treated as a separate design consideration and not directly under general shear analysis of the member.

---

### 4. Limit State of Collapse for Shear

The design for shear at the ultimate limit state is based on ensuring that the ultimate shear resistance of the section is greater than or equal to the design shear force.

**$V_u \ge V_{sd}$**

Where:
*   $V_u$ = Ultimate shear resistance of the section.
*   $V_{sd}$ = Design shear force, calculated from the factored loads.

The ultimate shear resistance ($V_u$) is the sum of the concrete contribution ($V_c$) and the web reinforcement contribution ($V_w$).

**$V_u = V_c + V_w$**

However, codes often simplify this by considering the shear resistance as the sum of the concrete contribution ($V_c$) and the contribution of the shear reinforcement ($V_{sw}$), where $V_{sw}$ is typically provided as stirrups.

**$V_u = V_c + V_{sw}$**

Where:
*   $V_c$ = Shear resistance of concrete (which itself is composed of aggregate interlock, dowel action, etc., but is treated as a single value in design codes).
*   $V_{sw}$ = Shear resistance provided by shear reinforcement (stirrups).

**Important Considerations:**

*   **Minimum Shear Reinforcement**: Codes typically require a minimum amount of shear reinforcement even if the calculated shear resistance of concrete alone is sufficient. This is to provide ductility and prevent sudden shear failure.
*   **Maximum Shear Reinforcement**: There is also a limit on the amount of shear reinforcement that can be provided to prevent problems like congestion of reinforcement and to ensure that the concrete crushing strength is not exceeded.
*   **Concrete Contribution ($V_c$)**: The value of $V_c$ depends on the concrete strength, the amount of longitudinal prestressing, the axial force (if any), and the geometry of the section. Codes provide empirical formulas for $V_c$.

---

### 5. Design of Transverse Reinforcement (Stirrups)

The primary purpose of transverse reinforcement (stirrups) is to resist the diagonal tension that develops in the web of the member. The design involves calculating the required area and spacing of these stirrups.

#### 5.1. Shear Resistance Provided by Stirrups ($V_{sw}$)

The shear resistance provided by stirrups is calculated based on the yield strength of the stirrup material and its spacing.

**$V_{sw} = \frac{A_{sw} f_{yv} d}{s}$**

Where:
*   $A_{sw}$ = Total area of stirrup legs within a distance $s$.
*   $f_{yv}$ = Characteristic yield strength of the stirrup material.
*   $d$ = Effective shear depth (typically taken as the distance from the compression face to the centroid of the tension reinforcement, or a proportion of the section depth like 0.9d or 0.72h for prestressed concrete).
*   $s$ = Spacing of the stirrups along the longitudinal axis of the member.

#### 5.2. Design Procedure for Stirrups

The design process generally follows these steps:

1.  **Calculate Design Shear Force ($V_{sd}$)**: Determine the maximum shear force from factored loads.
2.  **Calculate Shear Resistance of Concrete ($V_c$)**: Use the relevant code provisions to calculate $V_c$. This often involves factors related to concrete strength, effective depth, and the effective prestress force.
3.  **Determine Shear Force to be Resisted by Stirrups ($V_{sw}$)**:
    *   If $V_{sd} \le V_c$, then minimum shear reinforcement is required.
    *   If $V_{sd} > V_c$, then the shear force to be resisted by stirrups is $V_{sw} = V_{sd} - V_c$.
4.  **Check for Maximum Shear Capacity ($V_{u,max}$)**: Ensure that the total shear resistance of the section with the maximum allowed stirrups does not exceed the ultimate shear capacity of the section, which is limited by concrete crushing.
    *   $V_{u,max}$ is typically a function of the concrete compressive strength and the section dimensions.
5.  **Calculate Required Stirrup Area ($A_{sw}$)**: Using the formula for $V_{sw}$, determine the required area of stirrups for a chosen spacing or vice-versa. Rearranging the formula:
    *   **If spacing ($s$) is chosen**: $A_{sw} = \frac{V_{sw} s}{f_{yv} d}$
    *   **If stirrup size and number of legs are chosen**: $A_{sw}$ is known, and you calculate the required spacing $s = \frac{A_{sw} f_{yv} d}{V_{sw}}$.
6.  **Select Stirrup Size and Spacing**: Choose standard stirrup sizes and spacing that satisfy the calculated $A_{sw}$ and the code's minimum and maximum spacing requirements.
7.  **Check Minimum Shear Reinforcement**: Even if $V_{sd} \le V_c$, a minimum area of shear reinforcement ($A_{sw,min}$) is required.
    *   $V_{sw,min} = \frac{A_{sw,min} f_{yv} d}{s_{max}}$ must be greater than or equal to a minimum shear resistance specified by the code.
    *   The minimum area of stirrups is often expressed as a fraction of the concrete area or related to concrete strength and stirrup yield strength.
8.  **Check Maximum Spacing of Stirrups ($s_{max}$)**: Codes specify a maximum allowable spacing for stirrups to ensure effective crack control. This is usually dependent on the section's dimensions and the concrete strength.
9.  **Check Maximum Shear Reinforcement**: The total shear resistance provided by concrete and stirrups should not exceed the ultimate shear capacity of the section. This means $V_c + V_{sw} \le V_{u,max}$. If this condition is violated, the section needs to be redesigned.

#### 5.3. Effective Shear Depth ($d$) in Prestressed Concrete

The effective shear depth ($d$) in prestressed concrete can be taken as:
*   The distance from the compression face to the centroid of the prestressing tendons.
*   Or, a proportion of the overall depth $h$, such as $0.9d$ or $0.72h$, as specified by design codes. The choice of $d$ can influence $V_c$ and $V_{sw}$.

#### 5.4. Longitudinal Reinforcement Requirement

Shear failure is influenced by the amount of longitudinal reinforcement. Insufficient longitudinal reinforcement can lead to premature shear failure due to dowel action limitations. Codes typically specify minimum requirements for longitudinal reinforcement in the shear span, even if not directly required for flexure.

---

### Example Calculation

**Problem**: Design the shear reinforcement for a prestressed concrete rectangular beam with the following properties at a critical section:

*   Factored shear force ($V_{sd}$) = 300 kN
*   Effective shear depth ($d$) = 450 mm
*   Concrete characteristic compressive strength ($f_{ck}$) = 35 MPa
*   Stirrup yield strength ($f_{yv}$) = 415 MPa
*   Characteristic shear resistance of concrete ($V_c$) = 150 kN (assume this is calculated from code formulas, which depend on prestress and other factors not provided here for simplicity)

**Solution**:

1.  **Calculate Shear Force to be Resisted by Stirrups ($V_{sw}$)**:
    $V_{sw} = V_{sd} - V_c = 300 \text{ kN} - 150 \text{ kN} = 150 \text{ kN}$

2.  **Assume Stirrup Configuration**: Let's use two-legged stirrups made of 10 mm diameter bars.
    *   $A_{sw} = 2 \times (\pi/4) \times (10)^2 = 2 \times 78.54 \text{ mm}^2 = 157.08 \text{ mm}^2$

3.  **Calculate Required Spacing ($s$)**:
    Using the formula $V_{sw} = \frac{A_{sw} f_{yv} d}{s}$:
    $s = \frac{A_{sw} f_{yv} d}{V_{sw}}$
    $s = \frac{157.08 \text{ mm}^2 \times 415 \text{ N/mm}^2 \times 450 \text{ mm}}{150 \times 10^3 \text{ N}}$
    $s = \frac{29225030 \text{ N-mm}}{150000 \text{ N}}$
    $s = 194.8 \text{ mm}$

4.  **Check Code Requirements for Spacing**:
    *   Assume maximum allowable spacing is $s_{max} = 300 \text{ mm}$ (this value varies by code and section size).
    *   Assume minimum shear reinforcement requirement leads to a maximum spacing of $s_{min\_req} = 200 \text{ mm}$ (this is a common stipulation to ensure minimum shear resistance).

5.  **Select Spacing**:
    The calculated spacing of 194.8 mm is less than the maximum allowed spacing (e.g., 300 mm) and satisfies the minimum requirement (e.g., 200 mm). Therefore, we can choose a spacing of **190 mm or 200 mm** (rounding to a practical value). Let's choose **200 mm**.

6.  **Verify with Chosen Spacing**:
    With $s = 200 \text{ mm}$:
    $V_{sw} = \frac{157.08 \text{ mm}^2 \times 415 \text{ N/mm}^2 \times 450 \text{ mm}}{200 \text{ mm}}$
    $V_{sw} = \frac{29225030 \text{ N-mm}}{200 \text{ mm}} = 146125 \text{ N} = 146.125 \text{ kN}$

    This provides a shear resistance slightly less than the required 150 kN. To meet the requirement, we need to adjust. Let's re-calculate for a spacing of 190 mm:

    With $s = 190 \text{ mm}$:
    $V_{sw} = \frac{157.08 \text{ mm}^2 \times 415 \text{ N/mm}^2 \times 450 \text{ mm}}{190 \text{ mm}}$
    $V_{sw} = \frac{29225030 \text{ N-mm}}{190 \text{ mm}} = 153815 \text{ N} = 153.815 \text{ kN}$

    This is greater than the required 150 kN.

    **Therefore, use 10 mm diameter, two-legged stirrups at a spacing of 190 mm.**

7.  **Consider Minimum Shear Reinforcement**:
    Codes often have a requirement for minimum shear reinforcement, e.g., $A_{sw,min}$ provided at $s_{max}$. If the provided stirrups (at 190 mm) are less than the minimum required per unit length, adjustments might be needed. For instance, if the minimum stirrup area per meter is $A_{sw,min}/m = 0.4 \text{ N/mm}^2 / f_{yv}$, then $A_{sw,min}/m = 0.4/415 = 0.000964 \text{ mm}^2/\text{mm}$.
    For 10mm diameter stirrups at 190mm spacing, $A_{sw}$ per meter is $(157.08 \text{ mm}^2) / (190 \text{ mm}) \times 1000 \text{ mm} = 826.7 \text{ mm}^2/\text{m}$. This is generally sufficient for minimum requirements.

8.  **Maximum Shear Capacity Check**: This check involves comparing $V_c + V_{sw}$ with $V_{u,max}$. If $V_{sd}$ is very high, and $V_c$ is low, the stirrup requirement could exceed the capacity of the section, necessitating a larger section or stronger concrete.

---

### Practice Questions

1.  **Identify and briefly explain** the main components that contribute to the shear resistance of a prestressed concrete member at the ultimate limit state.
2.  **Describe the primary characteristics** of a diagonal tension failure in a prestressed concrete beam.
3.  A prestressed concrete beam is subjected to a design shear force of $V_{sd} = 250$ kN. The calculated shear resistance of the concrete is $V_c = 120$ kN. The effective shear depth is $d = 400$ mm, and the yield strength of the stirrups is $f_{yv} = 415$ N/mm². If two-legged stirrups of 8 mm diameter are used, calculate the required spacing of the stirrups. (Assume $V_c$ is the only contribution from concrete).
4.  What is the significance of minimum shear reinforcement in the design of prestressed concrete beams?
5.  How does the presence of pre-compression generally affect the shear behavior of a prestressed concrete member compared to a normally reinforced concrete member?

---

### Answers to Practice Questions

1.  **Components of Shear Resistance**:
    *   **Concrete Contribution ($V_c$)**: Includes aggregate interlock across diagonal cracks, uncracked concrete in the compression zone, and dowel action of longitudinal reinforcement.
    *   **Web Reinforcement Contribution ($V_w$ or $V_{sw}$)**: Provided by stirrups (transverse reinforcement) that resist diagonal tension.

2.  **Diagonal Tension Failure Characteristics**:
    *   Formation of diagonal cracks inclined at approximately 45 degrees.
    *   Initiation often from flexural cracks.
    *   Failure is typically brittle and sudden.
    *   Occurs when diagonal tensile stresses exceed concrete tensile strength.

3.  **Stirrup Spacing Calculation**:
    *   $V_{sw} = V_{sd} - V_c = 250 \text{ kN} - 120 \text{ kN} = 130 \text{ kN}$
    *   $A_{sw} = 2 \times (\pi/4) \times (8)^2 = 2 \times 50.265 \text{ mm}^2 = 100.53 \text{ mm}^2$
    *   $s = \frac{A_{sw} f_{yv} d}{V_{sw}} = \frac{100.53 \text{ mm}^2 \times 415 \text{ N/mm}^2 \times 400 \text{ mm}}{130 \times 10^3 \text{ N}}$
    *   $s = \frac{16734180 \text{ N-mm}}{130000 \text{ N}} \approx 128.7 \text{ mm}$
    *   **Required spacing $\approx 129$ mm**. (Choose a practical value like 125 mm or 130 mm depending on code limits).

4.  **Significance of Minimum Shear Reinforcement**:
    Minimum shear reinforcement is provided to ensure a minimum level of shear resistance, prevent sudden brittle shear failure, and enhance the ductility of the member, especially after the formation of diagonal cracks. It improves the post-cracking behavior.

5.  **Effect of Pre-compression on Shear Behavior**:
    The pre-compression in prestressed concrete members generally increases their shear resistance. It helps to close flexural cracks and delays the formation of diagonal tension cracks, thereby increasing the concrete contribution to shear resistance. It also reduces the likelihood of flexure-shear failure.

---

### Important Points to Remember

*   **Pre-compression is beneficial for shear resistance.**
*   **Shear failure can be brittle**, especially diagonal tension failure. Transverse reinforcement is crucial for ductility.
*   **Design for shear at the ultimate limit state** ensures that the member can withstand factored shear forces.
*   **$V_c$ is the shear resistance of the concrete**, and its calculation often involves factors related to prestress.
*   **$V_{sw}$ is provided by stirrups** and is calculated based on stirrup area, yield strength, and spacing.
*   **Codes provide limits on minimum and maximum stirrup spacing and maximum shear reinforcement** to ensure safety and constructability.
*   **Always check minimum shear reinforcement requirements.**
*   **Consider the effective shear depth ($d$) carefully** for prestressed sections.
*   **Anchorage zone design is a separate but critical aspect of prestressed concrete.**
