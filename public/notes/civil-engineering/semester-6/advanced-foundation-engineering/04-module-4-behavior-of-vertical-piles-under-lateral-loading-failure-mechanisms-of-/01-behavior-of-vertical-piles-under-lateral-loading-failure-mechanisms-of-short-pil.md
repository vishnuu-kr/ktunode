---
title: "Behavior of vertical piles under lateral loading – Failure mechanisms of short
piles in cohesive and granular soils for restrained and unrestrained conditions,
given by (Broms)."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 4: Behavior of vertical piles under lateral loading – Failure mechanisms of short
piles in cohesive and granular soils for restrained and unrestrained conditions,
given by (Broms)."
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811216"
status: "completed"
scrapedAt: "2026-05-20T18:52:07.830Z"
---
# ADVANCED FOUNDATION ENGINEERING

## Module 4: Behavior of Vertical Piles Under Lateral Loading

### Topic: Failure Mechanisms of Short Piles in Cohesive and Granular Soils for Restrained and Unrestrained Conditions (Broms)

---

### 1. Introduction to Lateral Loading of Piles

*   **Definition:** Lateral loading refers to forces applied to a pile perpendicular to its axis. This is common in situations like:
    *   Wind loads on tall structures.
    *   Earthquake forces.
    *   Wave forces on offshore structures.
    *   Impact loads.
    *   Loads from connected structures (e.g., bridges).
*   **Importance:** Understanding pile behavior under lateral loads is crucial for safe and economical foundation design, as lateral resistance can significantly influence overall structural stability.
*   **Short vs. Long Piles:**
    *   **Short Piles:** Piles that fail in **flexure** (bending) with the ultimate lateral load determined by the pile's material strength and the soil's lateral support. The pile head is typically unrestrained in rotation and translation.
    *   **Long Piles:** Piles that fail due to excessive soil deformation and exhibit a **stable load-deflection behavior**. The ultimate lateral load is determined by the soil's capacity and the pile's stiffness.
*   **Broms' Approach:** Broms (1964) developed a widely used method for analyzing the behavior of single piles and pile groups under lateral loads, particularly focusing on the ultimate lateral capacity and failure mechanisms. His method categorizes pile behavior based on the soil type, pile flexibility, and boundary conditions at the pile head.

---

### 2. Failure Mechanisms of Short Piles Under Lateral Loading (Broms' Method)

Broms' method classifies short piles based on how the soil provides lateral resistance, leading to different failure mechanisms. The key factor is the ultimate lateral bearing capacity of the soil adjacent to the pile.

**Key Concepts:**

*   **Ultimate Lateral Bearing Capacity ($p_u$):** The maximum lateral pressure the soil can exert on the pile before failure.
*   **Coefficient of Subgrade Reaction ($k$):** A measure of the soil's stiffness, relating lateral pressure to lateral deflection ($p = ky$).
*   **Pile Head Conditions:**
    *   **Unrestrained:** The pile head is free to rotate and translate.
    *   **Restrained:** The pile head's rotation or translation is limited by bracing or fixity.

---

#### 2.1. Short Piles in Cohesive Soils (Undrained Conditions, $\phi_u = 0$)

For cohesive soils, Broms' method considers the ultimate lateral bearing capacity, which is often related to the undrained shear strength ($c_u$).

**Failure Mechanisms:**

*   **Case 1: Weak Cohesive Soil (Fully Softened Clay)**
    *   **Mechanism:** The pile fails by a **plastic hinge** forming at a critical depth where the bending moment capacity of the pile is exceeded. The soil provides relatively uniform support along the pile.
    *   **Critical Depth:** This depth is where the bending moment from the lateral load and soil pressure equals the plastic moment capacity of the pile.
    *   **Failure Mode:** Yielding and bending of the pile.

*   **Case 2: Stiffer Cohesive Soil (Limited Softening)**
    *   **Mechanism:** The soil resistance along the pile is characterized by the ultimate lateral bearing capacity, $p_u$. The failure is governed by the soil's ability to resist the lateral pressure.
    *   **Ultimate Lateral Resistance ($p_u$) Calculation (Broms):**
        *   For the upper portion of the pile (where the pile is not fully mobilized), $p_u = 9 c_u$.
        *   Below a certain depth, the soil resistance might be limited by the pile's bending capacity.
    *   **Failure Mode:** The pile is pushed into the soil, with a yield hinge forming at a depth where the bending moment exceeds the pile's capacity. The soil along the pile fails in shear.

**Broms' Approach for Ultimate Lateral Capacity ($P_u$) in Cohesive Soils:**

Broms simplifies the analysis by considering the ultimate lateral soil resistance as a series of distributed forces. For short piles, the failure is dominated by the soil's lateral capacity and the pile's bending strength.

*   **Conceptualization:** Imagine the pile tilting and a plastic hinge forming. The soil resistance is distributed along the pile.
*   **Important Note:** Broms' method for cohesive soils often relies on simplified coefficients related to the undrained shear strength ($c_u$) to determine the ultimate soil resistance.

---

#### 2.2. Short Piles in Granular Soils

For granular soils, Broms' method considers the ultimate lateral bearing capacity based on the effective angle of internal friction ($\phi$).

**Failure Mechanisms:**

*   **Case 1: Very Loose to Loose Granular Soil**
    *   **Mechanism:** The soil fails in a **rotational slip** mechanism around the pile. The pile is essentially pushed into a failure wedge of soil. The lateral resistance is limited by the shear strength of the soil.
    *   **Failure Mode:** Soil shear failure surrounding the pile.

*   **Case 2: Medium Dense to Dense Granular Soil**
    *   **Mechanism:** The pile fails by **yielding and bending**, forming a plastic hinge. The soil provides resistance, but the ultimate capacity is limited by the pile's bending strength and the ability of the soil to support the pile near the hinge.
    *   **Failure Mode:** Bending of the pile.

**Broms' Approach for Ultimate Lateral Capacity ($P_u$) in Granular Soils:**

Broms developed empirical relationships for the ultimate lateral bearing capacity in granular soils. These are often expressed in terms of the soil's properties and the pile's diameter.

*   **Conceptualization:**
    *   **Upper Portion:** Soil resistance is mobilized as the pile deflects laterally.
    *   **Lower Portion:** A plastic hinge forms at a depth where the bending moment capacity is reached. The soil pressure behind the pile can also become critical.

*   **Broms' Formulae for Ultimate Lateral Capacity ($P_u$):**

    Broms categorized the failure into different modes based on the soil properties and the pile's length relative to its diameter and the soil's properties. For **short piles**, the failure is often characterized by a plastic hinge.

    Let:
    *   $D$ = pile diameter
    *   $L$ = pile length
    *   $c$ = cohesion (0 for granular soils)
    *   $\phi$ = angle of internal friction
    *   $\gamma$ = unit weight of soil
    *   $p_u$ = ultimate lateral soil resistance
    *   $M_p$ = plastic moment capacity of the pile

    **For Cohesive Soils ($\phi_u = 0$):**
    The ultimate lateral soil resistance per unit length ($p_u$) is often taken as $p_u = N_c \cdot c_u \cdot D$, where $N_c$ is a bearing capacity factor. Broms simplified this, considering two main cases:
    1.  **Small lateral deflection:** Soil resistance is proportional to deflection ($p = ky$).
    2.  **Large lateral deflection:** Soil resistance reaches an ultimate value ($p_u$).

    Broms proposed the ultimate lateral soil resistance per unit length as:
    *   **Upper part of the pile:** $p_u = 9 c_u D$ (where $c_u$ is the undrained shear strength)
    *   **Lower part of the pile:** The resistance is limited by the pile's bending capacity.

    The ultimate lateral load ($P_u$) for a short pile in cohesive soil is often related to the pile's plastic moment capacity ($M_p$) and the soil's ultimate lateral resistance. A simplified approach considers the formation of a plastic hinge.

    **For Granular Soils:**
    Broms proposed empirical formulas for the ultimate lateral load ($P_u$) based on the soil's properties and the pile's diameter. The failure modes considered are:

    1.  **Case 1: Soil Failure (Rotational Slip/Wedge Failure):**
        *   For loose sands ($\phi \le 30^\circ$): $P_u = \frac{1}{3} D^2 \gamma \tan^2(45^\circ + \phi/2)$ (This is a simplified form; Broms provided more detailed empirical factors).
        *   Essentially, the lateral resistance is governed by the soil's shear strength.

    2.  **Case 2: Pile Failure (Plastic Hinge Formation):**
        *   For dense sands ($\phi > 30^\circ$): The failure is limited by the pile's bending strength. The ultimate lateral capacity is related to the plastic moment capacity of the pile ($M_p$).
        *   Broms suggested that for piles failing in bending, the ultimate lateral load ($P_u$) is often expressed as a function of the plastic moment ($M_p$) and a characteristic length related to the soil's properties.

    **General Form of Broms' Ultimate Lateral Capacity ($P_u$) for Short Piles:**

    Broms' method provides ultimate lateral loads ($P_u$) for different failure modes. For short piles, the failure is typically controlled by either the soil's ultimate lateral resistance or the pile's plastic moment capacity.

    Let $p_u$ be the ultimate lateral soil resistance per unit length. The ultimate lateral load ($P_u$) for a short pile will depend on how this resistance is mobilized along the pile and the pile's bending capacity.

    **For Cohesive Soils ($\phi_u = 0$):**
    *   **Failure controlled by soil:** $P_u \approx p_{ult}$ where $p_{ult}$ is the total ultimate lateral resistance provided by the soil. Broms related this to $c_u$ and $D$. A simplified approach considers the soil pressure acting against the pile.
    *   **Failure controlled by pile (plastic hinge):** $P_u \propto M_p / L_{hinge}$, where $L_{hinge}$ is the depth to the plastic hinge.

    **For Granular Soils:**
    *   **Failure controlled by soil:** $P_u \approx K \cdot \gamma \cdot D^2 \cdot L_{soil}$ where $K$ is an empirical factor and $L_{soil}$ is the length over which soil resistance is critical.
    *   **Failure controlled by pile (plastic hinge):** $P_u \propto M_p / L_{hinge}$, where $L_{hinge}$ is the depth to the plastic hinge. Broms provided relationships to determine $L_{hinge}$ based on soil properties and pile dimensions.

    **Key Empirical Factors by Broms:**

    Broms introduced dimensionless parameters to categorize pile behavior. For short piles, the controlling failure mechanism is often related to the dimensionless parameter $c_{R} = M_p / (K_h L^4)$, where $K_h$ is the coefficient of horizontal subgrade reaction. However, for ultimate capacity, the focus is on the soil's ultimate resistance and the pile's plastic moment.

    **For short piles:** The critical failure mechanism is often associated with the soil's lateral bearing capacity and the pile's ability to resist bending.

    *   **Cohesive Soil:** $p_u = 9 c_u D$. The ultimate load is often limited by the plastic moment of the pile.
    *   **Granular Soil:** $p_u$ is a function of $\gamma$, $D$, and $\phi$. Broms provided charts and formulas to determine the ultimate lateral load based on failure modes.

    **General Formulation for Ultimate Lateral Capacity of Short Piles (Broms):**

    Broms categorized the failure modes into four types, based on the relative stiffness of the pile and soil, and the soil properties. For short piles, the failure is generally characterized by **plastic hinge formation** or **soil failure**.

    1.  **Cohesive Soil ($\phi_u = 0$):**
        *   **Failure Mode 1: Soil Yielding and Pile Failure:** The soil resistance is limited to $p_u = 9 c_u D$. The ultimate load is determined by the pile's plastic moment capacity and the depth of the plastic hinge.
        *   **Failure Mode 2: Ultimate Soil Resistance Dominates:** The soil provides its ultimate resistance along the pile length.

    2.  **Granular Soil:**
        *   **Failure Mode 3: Soil Yielding and Pile Failure:** The soil resistance is limited, and a plastic hinge forms. The ultimate load is related to $M_p$.
        *   **Failure Mode 4: Ultimate Soil Resistance Dominates:** The soil's ultimate lateral bearing capacity dictates the failure.

    **Broms' simplified approach for ultimate lateral load ($P_u$) for short piles:**

    *   **Cohesive Soil ($\phi_u = 0$):**
        *   $P_u = 9 c_u D L$ (This is a simplification and assumes uniform soil resistance; actual failure is more complex).
        *   A more realistic approach considers the plastic hinge: $P_u \approx \frac{2 M_p}{x_p}$ where $x_p$ is the depth of the plastic hinge. Broms provides methods to calculate $x_p$.

    *   **Granular Soil:**
        *   **When failure is governed by the soil's ultimate resistance:** The lateral capacity is often expressed as $P_u = c_1 \gamma D^2$. $c_1$ is an empirical coefficient that depends on $\phi$. For short piles, this resistance is mobilized over a limited depth.
        *   **When failure is governed by the pile's bending strength (plastic hinge):** $P_u = \frac{2 M_p}{x_p}$. Broms' charts/formulas determine $x_p$ based on $\phi$, $D$, and $\gamma$.

---

### 3. Influence of Pile Head Conditions

The manner in which the pile head is supported significantly affects its behavior under lateral loading.

#### 3.1. Unrestrained Pile Head

*   **Condition:** The pile head is free to translate and rotate.
*   **Behavior:** The pile deflects more freely. The bending moment distribution is such that the maximum moment occurs at the pile head (or at a short distance below it) and also at the location of the plastic hinge.
*   **Ultimate Capacity:** Generally lower compared to restrained conditions, as the soil resistance is mobilized less effectively at the pile head.

#### 3.2. Restrained Pile Head

*   **Condition:** The pile head's rotation and/or translation is prevented by bracing, fixity, or connection to a rigid structure.
*   **Behavior:**
    *   **Fixed Head (no translation, no rotation):** The bending moment at the head is zero. The maximum moment will occur at the point of fixity or at the plastic hinge. This can lead to a more favorable distribution of bending moments.
    *   **Pinned Head (no translation, free to rotate):** Similar to unrestrained but without the bending moment at the head.
    *   **Braced (prevents translation, allows rotation):** The translation is restricted, leading to higher lateral stiffness.
*   **Ultimate Capacity:** Generally higher than unrestrained conditions because the load is distributed more effectively and the soil resistance is mobilized more efficiently along the pile.

**Broms' Approach with Restrained Conditions:**

Broms' method can be adapted for different boundary conditions. For restrained piles, the analysis involves considering the effect of the restraint on the bending moment distribution and the load-deflection response.

*   **Fixed Head:** Reduces the maximum bending moment compared to an unrestrained pile, potentially increasing the ultimate lateral capacity if the pile's material strength is the limiting factor.
*   **Bracing:** Can significantly increase the stiffness and ultimate lateral load capacity of a pile group.

---

### 4. Practice Questions and Exercises

**Question 1:**

A short, rigid pile is driven into a saturated clay soil with an undrained shear strength ($c_u$) of 40 kPa. The pile diameter is 0.5 m. Assuming Broms' method and considering the soil's ultimate lateral resistance, estimate the ultimate lateral load capacity of the pile if it fails due to soil yielding.

**Answer 1:**

Broms' approach for ultimate lateral soil resistance per unit length in cohesive soil is $p_u = 9 c_u D$.
Given:
$c_u = 40 \text{ kPa}$
$D = 0.5 \text{ m}$

$p_u = 9 \times 40 \text{ kPa} \times 0.5 \text{ m} = 180 \text{ kN/m}$

For a short pile failing primarily due to soil yielding along its length, the ultimate lateral load ($P_u$) can be approximated by the total ultimate soil resistance. If we consider the pile to be short, the failure mechanism is often governed by this soil resistance. A simplification for a short pile might assume the soil resistance is mobilized over a certain effective length. However, if the question implies failure due to the soil's ultimate capacity across the embedment length, a simplified calculation of the total lateral resistance mobilized could be considered.

A more rigorous application of Broms for short piles would involve considering the plastic hinge. However, focusing on soil yielding:

If we assume the ultimate soil resistance is mobilized along the entire embedment length, the ultimate lateral load would be $P_u = p_u \times L_{embedment}$. But without embedment length, we can only calculate the soil resistance per unit length.

Let's re-interpret the question to focus on a typical short pile scenario where the *soil capacity* limits the load significantly. If the pile is short and failure is due to soil yielding:
The ultimate lateral load capacity ($P_u$) can be related to the ultimate soil resistance. Broms' method suggests that for short piles, the failure mechanism can be controlled by the soil's ultimate lateral bearing capacity. A simplified approach often used is to consider the soil pressure that leads to failure.

If the question implies that the *soil's lateral bearing capacity* is the primary limiting factor and the pile is sufficiently strong to bend, then the ultimate lateral load ($P_u$) can be approximated by $p_u \times D$ or $p_u \times L_{effective}$ depending on the failure mode.

Let's consider a simplified interpretation where the ultimate load is directly related to the mobilized soil resistance. For a short pile, the bending moment is critical. However, if the soil resistance itself is the primary driver of "soil yielding":

Let's refine the approach: Broms' initial work suggested $p_u = 9 c_u D$. For a short pile, the ultimate load is often limited by the pile's bending capacity, but the soil's capacity influences where the hinge forms.

If the question strictly asks for failure due to *soil yielding* and implies a direct contribution of soil resistance:
$P_u \approx p_u \times D$ (as a rough estimate of a concentrated lateral resistance)
$P_u \approx 180 \text{ kN/m} \times 0.5 \text{ m} = 90 \text{ kN}$ (This is a very rough estimate for a short pile and doesn't fully capture Broms' hinge concept).

**A better interpretation based on Broms' full method for ultimate capacity in cohesive soil where the pile bends:**
The ultimate lateral load ($P_u$) is often given by $P_u = \frac{2M_p}{x_p}$. However, we are not given $M_p$ or $x_p$.

Let's consider the *limiting soil pressure* approach for a short pile. If the pile is very short and the soil can provide significant lateral support, failure might occur due to the soil's ultimate capacity.

For a short pile in cohesive soil where failure is due to the soil's lateral resistance being exceeded:
Broms proposed that the soil resistance per unit length is $p_u = 9 c_u D$.
If we consider the "failure mechanism of short piles in cohesive soil", it often implies the formation of a plastic hinge. However, if the question emphasizes *soil yielding*, it might be referring to the soil's ultimate pressure capacity.

Let's assume the question is simplified and wants the direct soil capacity contribution to be considered.

**Revised Answer 1 Interpretation:**
Broms' formulation for the ultimate lateral soil resistance per unit length ($p_u$) in cohesive soils is $p_u = 9 c_u D$.
Given $c_u = 40 \text{ kPa}$ and $D = 0.5 \text{ m}$,
$p_u = 9 \times 40 \text{ kPa} \times 0.5 \text{ m} = 180 \text{ kN/m}$.

For a short pile, the ultimate lateral load ($P_u$) is often governed by the pile's plastic moment capacity ($M_p$) and the depth to the plastic hinge ($x_p$), leading to $P_u \approx 2M_p / x_p$. Without $M_p$ or $x_p$, we cannot precisely calculate this.

However, if the question implies a failure mode where the *soil's ultimate capacity* is directly limiting the load, and the pile itself is strong enough not to yield first, then the ultimate load would be related to the total soil resistance mobilized. For a short pile, this resistance is often considered over a limited depth.

Let's assume the question is asking for an approximation based on the soil's ultimate lateral pressure. The ultimate load is a force, not a pressure. A very simplified approach could consider the product of the ultimate pressure and the diameter, representing a concentrated resistance.

$P_u \approx p_u \times D = 180 \text{ kN/m} \times 0.5 \text{ m} = 90 \text{ kN}$. This is a very rough approximation, as it does not account for the distribution of pressure or the bending of the pile.

**Key Takeaway:** Broms' method for ultimate capacity typically involves plastic hinge formation for short piles. If the question emphasizes "soil yielding" as the failure mechanism, it might be hinting at the soil's ultimate bearing capacity contribution.

---

**Question 2:**

Describe the primary failure mechanism for a short pile in dense granular soil when subjected to a lateral load. How does a fixed head condition influence this mechanism compared to an unrestrained head condition?

**Answer 2:**

**Primary Failure Mechanism in Dense Granular Soil:**

For a short pile in dense granular soil, the primary failure mechanism under lateral loading is **plastic hinge formation**. The pile is sufficiently stiff and strong that it will yield by bending when subjected to a sufficiently large lateral load. The ultimate lateral load is then limited by the plastic moment capacity of the pile ($M_p$). The soil provides lateral support, but the failure occurs when the bending moment in the pile exceeds its plastic capacity at a critical depth, forming a plastic hinge.

**Influence of Head Conditions:**

*   **Unrestrained Head:**
    *   **Bending Moment:** The maximum bending moment in the pile typically occurs at the pile head (or very close to it) and at the location of the plastic hinge.
    *   **Load-Deflection:** The pile will experience larger deflections for a given load.
    *   **Ultimate Capacity:** The ultimate lateral load capacity will be lower because the bending moment at the head contributes to exceeding the pile's moment capacity earlier.

*   **Fixed Head:**
    *   **Bending Moment:** With a fixed head, the bending moment at the pile head is zero. This redistributes the bending moments along the pile. The maximum bending moment will still occur at the plastic hinge, but its magnitude might be different, and the overall bending moment profile is altered.
    *   **Load-Deflection:** The pile will be stiffer, resulting in smaller deflections for a given load.
    *   **Ultimate Capacity:** The ultimate lateral load capacity is generally **higher** for a fixed head condition compared to an unrestrained head condition. This is because the restraint at the head reduces the peak bending moments the pile experiences, allowing it to resist a larger lateral load before yielding. The pile can effectively utilize its full plastic moment capacity at the hinge location without being limited by the moment at the head.

---

### 5. Important Points to Remember

*   **Broms' method is empirical and provides estimations for ultimate lateral capacity.** It simplifies complex soil-pile interactions.
*   **Short piles fail by yielding (plastic hinge formation) or by soil failure.** For cohesive soils, the ultimate lateral resistance is often linked to $c_u$, while for granular soils, it's linked to $\phi$ and $\gamma$.
*   **The plastic moment capacity ($M_p$) of the pile is crucial for short piles failing in bending.**
*   **Pile head conditions (restrained vs. unrestrained) significantly impact bending moment distribution and ultimate lateral capacity.** Restrained conditions generally lead to higher capacities.
*   **For short piles, failure is often governed by the pile's material strength (bending) or the soil's ultimate lateral bearing capacity.**
*   **The depth of the plastic hinge ($x_p$) is a critical parameter in Broms' analysis for short piles.** It depends on soil properties and pile dimensions.
*   **Cohesive soils are analyzed under undrained conditions ($\phi_u = 0$), while granular soils are analyzed using effective stress parameters ($\phi'$).**

---
