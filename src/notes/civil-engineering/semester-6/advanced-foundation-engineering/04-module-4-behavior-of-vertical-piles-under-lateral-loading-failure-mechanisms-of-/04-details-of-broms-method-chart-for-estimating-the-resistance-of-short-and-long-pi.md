---
title: "Details of Broms Method- Chart for estimating the   
resistance of short and long piles in clayey soils."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 4: Behavior of vertical piles under lateral loading – Failure mechanisms of short
piles in cohesive and granular soils for restrained and unrestrained conditions,
given by (Broms)."
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811219"
status: "completed"
scrapedAt: "2026-05-20T18:52:09.921Z"
---
# Advanced Foundation Engineering - Module 4: Behavior of Vertical Piles Under Lateral Loading

## Topic: Details of Broms Method - Chart for Estimating Resistance of Short and Long Piles in Clayey Soils

### Learning Outcomes Covered:
*   Understanding the principles of the Broms method for lateral pile capacity in clayey soils.
*   Differentiating between short and long piles under lateral loading in clay.
*   Interpreting and utilizing Broms charts for estimating lateral resistance in cohesive soils.
*   Understanding the influence of pile head conditions (restrained vs. unrestrained) on lateral capacity.
*   Applying the Broms method for practical design scenarios in clayey soils.

---

### 1. Introduction to Lateral Pile Loading in Clayey Soils

Lateral loads on piles can arise from various sources, including:
*   Wind loads
*   Earth pressures (e.g., retaining walls, basement walls)
*   Seismic forces
*   Impact loads
*   Tsunami waves
*   Momentum from moving vehicles

In clayey soils, the response of a pile to lateral loading is significantly influenced by the soil's cohesive properties. The soil's resistance is primarily governed by its undrained shear strength ($s_u$).

---

### 2. Broms Method: Principles for Lateral Loading

The Broms method, developed by Bengt B. Broms, provides a simplified approach to estimate the ultimate lateral load capacity of piles. It categorizes piles as "short" or "long" based on their slenderness ratio and the soil properties.

**Key Concept: Soil Failure Mechanisms**
Broms' analysis is based on idealized soil failure mechanisms around the pile. The soil behaves as a plastic material, and failure occurs when the shear stresses exceed the soil's shear strength.

**Classification of Piles (Short vs. Long):**

The classification of a pile as "short" or "long" is crucial in Broms' method. This classification depends on the pile's relative stiffness and the soil's properties.

*   **Short Piles:** These piles are characterized by a low slenderness ratio. They tend to fail in a **<bos> "brittle" or "rigid" manner**, where the pile rotates as a rigid body with significant soil displacement. The bending deformation of the pile itself is negligible compared to the overall movement. The ultimate lateral capacity is often governed by the **soil's plastic limit**.

*   **Long Piles:** These piles have a higher slenderness ratio. They fail in a **more "flexible" manner**, where significant bending deformation of the pile occurs before reaching ultimate soil failure. The ultimate lateral capacity is influenced by both the **soil's plastic limit and the pile's flexural rigidity**.

**Broms' Dimensionless Parameter ($L/D$):**

While Broms doesn't strictly define a single $L/D$ threshold for short vs. long piles in clay, the general behavior is understood. For practical purposes, engineers often use parameters related to the soil's stiffness and the pile's flexural rigidity to make this determination. However, for the purpose of using Broms charts, the distinction is made based on the dominant failure mode.

**Failure Mechanisms in Clay (Undrained Conditions, $s_u$):**

In clayey soils, under undrained conditions, the lateral resistance is primarily related to the undrained shear strength ($s_u$). Broms proposed different failure mechanisms for short and long piles:

*   **Short Piles in Clay (Failure Mechanism 1):**
    *   **Description:** The pile rotates as a rigid body. The soil on the leading side of the pile yields, and the soil on the trailing side of the pile provides resistance. Failure occurs when the soil around the pile reaches its plastic limit.
    *   **Failure Mode:** Soil rupture.
    *   **Resistance:** Primarily governed by the ultimate bearing capacity of the soil in shear.

*   **Long Piles in Clay (Failure Mechanism 2):**
    *   **Description:** The pile undergoes significant bending. The soil resistance develops along the length of the pile. The ultimate lateral capacity is reached when the soil reaches its plastic limit, and the bending moment in the pile is also considered.
    *   **Failure Mode:** Combined soil yielding and pile bending.
    *   **Resistance:** Influenced by both soil shear strength and pile flexural rigidity.

---

### 3. Broms Method for Short Piles in Clayey Soils

For short piles in clay, the lateral load capacity is primarily governed by the shear strength of the soil. The failure mechanism is one of soil rupture.

**Key Parameters:**

*   $D$: Diameter or width of the pile.
*   $s_u$: Undrained shear strength of the clay.
*   $N_c$: Bearing capacity factor. For shallow foundations, $N_c$ is typically around 6. For deep foundations like piles, Broms uses an effective factor.

**Broms' Formulation for Ultimate Lateral Capacity ($P_u$) for Short Piles:**

Broms proposed that for short piles in clay, the ultimate lateral capacity can be approximated using a simplified bearing capacity approach. The resistance is considered to be uniform along the depth of soil failure.

$$P_u = c_1 \cdot D \cdot s_u \cdot N_c$$

Where:
*   $P_u$: Ultimate lateral load capacity.
*   $c_1$: A coefficient that accounts for the pile head condition and soil properties.
*   $D$: Diameter or width of the pile.
*   $s_u$: Undrained shear strength of the clay.
*   $N_c$: Bearing capacity factor, often taken as 9 for piles in clay under lateral loading.

**Pile Head Conditions:**

The pile head condition significantly affects the lateral capacity. Broms considered two primary conditions:

*   **Unrestrained Pile Head:** The pile head is free to rotate and translate. This leads to a lower lateral capacity.
*   **Restrained Pile Head:** The pile head is fixed against rotation and/or translation. This increases the lateral capacity due to the ability to mobilize higher bending moments and reduce the effective length.

**Broms' Coefficients ($c_1$) for Short Piles in Clay:**

| Pile Head Condition | $c_1$ | Description                                    |
| :------------------ | :---- | :--------------------------------------------- |
| Unrestrained        | 9     | Free to rotate and translate.                  |
| Restrained          | 12    | Fixed against rotation and translation (ideal). |

*Note: The values of $c_1$ are empirical and based on Broms' analysis of failure mechanisms. The $N_c$ is incorporated into $c_1$. For unrestrained, $N_c \approx 9$. For restrained, the increased resistance is captured by a higher coefficient.*

**Equation for Short Piles in Clay:**

*   **Unrestrained:** $P_u = 9 \cdot D \cdot s_u$
*   **Restrained:** $P_u = 12 \cdot D \cdot s_u$

**Important Consideration:**
These formulas are for *short* piles where bending is not the governing factor. The failure is primarily due to soil yielding. The soil strength ($s_u$) is assumed to be constant with depth. If $s_u$ varies significantly, an average or effective $s_u$ should be used, or a more detailed analysis is required.

---

### 4. Broms Method for Long Piles in Clayey Soils

For long piles in clay, the bending deformation of the pile becomes significant. The ultimate lateral capacity is influenced by both the soil's shear strength and the pile's flexural rigidity.

**Key Concept: Ultimate Bending Moment ($M_u$)**

The ultimate bending moment capacity of the pile is a critical factor for long piles. This is a property of the pile material and its cross-section.

$$M_u = \frac{M_{p}}{2}$$

Where:
*   $M_u$: Ultimate bending moment capacity of the pile.
*   $M_p$: Plastic moment capacity of the pile cross-section (can be calculated based on material properties and geometry).

**Broms' Formulation for Ultimate Lateral Capacity ($P_u$) for Long Piles:**

Broms proposed that for long piles in clay, the ultimate lateral capacity is limited by the ultimate bending moment of the pile. The lateral load is effectively resisted by the plastic moment capacity of the pile at the depth where the bending moment is maximum.

**Failure Mechanism (Long Piles):**

The pile bends, and the soil resistance develops along the length. The failure occurs when the bending moment in the pile reaches its plastic moment capacity ($M_p$) at some point along its length, and the soil has also reached its yield limit.

**Broms' Approach for Long Piles in Clay:**

Broms related the lateral load to the ultimate bending moment. For long piles, the ultimate lateral load is approximately the moment capacity of the pile divided by the effective length over which this moment is developed.

**Equation for Long Piles in Clay:**

Broms' analysis for long piles in clay suggests that the ultimate lateral load capacity is related to the ultimate bending moment capacity of the pile. A simplified representation of this is:

$$P_u \approx \frac{M_u}{L_{e}}$$

Where:
*   $P_u$: Ultimate lateral load capacity.
*   $M_u$: Ultimate bending moment capacity of the pile (often taken as $M_p/2$).
*   $L_e$: Effective length or critical length over which the moment is developed.

However, the most direct way to use Broms' charts for long piles is to consider the soil resistance contribution. For long piles in clay, Broms' work suggests that the failure is governed by the pile's bending capacity rather than the soil's ultimate shear capacity alone. The soil resistance is mobilized along the length.

A common interpretation of Broms' work for long piles in clay is that the ultimate lateral capacity is limited by the pile's bending strength when the pile becomes long enough. The soil pressure distribution contributes to the bending moment.

**Simplified Approach using $M_u$:**

For long piles, the lateral capacity is often limited by the pile's bending capacity. The ultimate lateral load ($P_u$) can be related to the plastic moment capacity ($M_p$) of the pile section.

$$P_u \times (\text{lever arm}) = M_p$$

The "lever arm" is related to the depth of the plastic hinge. For clayey soils, the depth of the plastic hinge can be estimated.

**A more direct application of Broms' findings for long piles in clay relates the ultimate lateral load ($P_u$) to the soil's ultimate resistance mobilized over a certain length, and the pile's bending capacity.**

**Key takeaway for long piles in clay:** The lateral load capacity is often governed by the **pile's section capacity** (plastic moment) rather than solely by the soil's shear strength.

---

### 5. Broms Charts for Clayey Soils

Broms developed graphical charts to estimate the lateral resistance of piles. These charts simplify the application of his method by providing design values based on pile properties and soil conditions.

**Understanding the Broms Charts for Clay:**

These charts typically plot:
*   **X-axis:** Often represents the dimensionless length parameter or a related soil-pile interaction parameter.
*   **Y-axis:** Represents the lateral load or a normalized lateral load.
*   **Curves:** Different curves represent different pile head conditions (unrestrained, restrained) and sometimes different soil strengths.

**Crucial Information from Broms Charts:**

The charts allow engineers to directly determine the ultimate lateral load ($P_u$) for a given pile diameter ($D$), soil undrained shear strength ($s_u$), and pile head condition.

**How to Use the Charts (General Procedure):**

1.  **Identify Soil Type:** Confirm the soil is clay and determine its undrained shear strength ($s_u$).
2.  **Determine Pile Properties:** Know the pile diameter ($D$) and its head condition (restrained or unrestrained).
3.  **Locate Relevant Chart:** Select the Broms chart specifically for clayey soils.
4.  **Determine Pile Classification (Short vs. Long):** This is often implicitly handled by the chart's axes or by calculating a critical length parameter. For simplified chart usage, you might assume a pile is "short" if its length is generally less than a few times its diameter. However, the charts are designed to cover both regimes.
5.  **Read the Lateral Resistance:** Use the chart to find the ultimate lateral load ($P_u$) corresponding to your pile's characteristics and the soil's $s_u$.

**Example of Broms Chart Interpretation (Conceptual):**

Imagine a chart with $s_u$ on one axis and $D$ on another, and the output is $P_u$. Or, a chart might have a dimensionless parameter on the x-axis and $P_u / (D \cdot s_u)$ on the y-axis.

**Specific Broms Chart Representation for Clay (Typical Form):**

Broms' charts for clay are often presented in terms of the ultimate lateral load capacity as a function of the pile's diameter and the soil's undrained shear strength.

*   **For short piles:** The capacity is directly proportional to $D \cdot s_u$.
*   **For long piles:** The capacity is limited by the pile's bending capacity. This means that beyond a certain length, increasing the pile length does not proportionally increase the lateral capacity if it's governed by bending.

**The "Critical Length" Concept in Broms' Method:**

Broms' analysis implicitly defines a critical length or slenderness ratio. Below this critical length, the pile behaves as "short." Above this critical length, it behaves as "long," and its capacity is limited by its bending strength.

**Simplified Representation of Broms' Findings for Clay:**

The charts effectively map the transition from short pile behavior to long pile behavior.

*   **Region 1 (Short Piles):** $P_u$ increases linearly with $D \cdot s_u$.
*   **Region 2 (Long Piles):** $P_u$ becomes limited by the pile's bending capacity.

**Example of Chart-Based Calculation:**

Let's assume we have a Broms chart for clay (unrestrained pile head) that plots $P_u$ on the y-axis and $D \cdot s_u$ on the x-axis.

*   **Given:**
    *   Pile diameter ($D$) = 0.5 m
    *   Undrained shear strength ($s_u$) = 50 kPa
    *   Pile head: Unrestrained

*   **Calculation:**
    *   Product $D \cdot s_u = 0.5 \text{ m} \times 50 \text{ kPa} = 25 \text{ m} \cdot \text{kPa}$

*   **Using the Chart:** Locate 25 on the x-axis. Follow up to the curve for "unrestrained pile head." Read the corresponding value on the y-axis, which would be the ultimate lateral load capacity ($P_u$).

*   **Applying the Short Pile Formula as a check/reference:**
    *   $P_u = 9 \cdot D \cdot s_u = 9 \times 0.5 \text{ m} \times 50 \text{ kPa} = 225 \text{ kN}$
    *   If the chart yields a value significantly higher than this for a very long pile, it indicates the long pile behavior is dominant, and the capacity is limited by bending.

**It is important to refer to actual published Broms charts for precise design values.** The principles outlined above guide their interpretation.

---

### 6. Practice Questions and Answers

**Question 1:**
A square concrete pile of 0.4m x 0.4m is embedded in a clay deposit with a uniform undrained shear strength of $s_u = 40$ kPa. The pile head is unrestrained. Estimate the ultimate lateral load capacity of the pile using Broms' method, assuming it behaves as a short pile.

**Answer 1:**
For short piles in clay with an unrestrained head, Broms' method gives:
$P_u = 9 \cdot D \cdot s_u$
Where $D$ is the width of the pile.
$P_u = 9 \times 0.4 \text{ m} \times 40 \text{ kPa}$
$P_u = 9 \times 0.4 \times 40$ kN
$P_u = 144$ kN

**Question 2:**
Consider the same pile as in Question 1, but now the pile head is rigidly fixed. What is the estimated ultimate lateral load capacity?

**Answer 2:**
For short piles in clay with a restrained head, Broms' method gives:
$P_u = 12 \cdot D \cdot s_u$
$P_u = 12 \times 0.4 \text{ m} \times 40 \text{ kPa}$
$P_u = 12 \times 0.4 \times 40$ kN
$P_u = 192$ kN

**Question 3:**
For a long pile in clay, what is the primary factor that often limits its ultimate lateral load capacity according to Broms' analysis?

**Answer 3:**
For a long pile in clay, the primary factor that often limits its ultimate lateral load capacity is the **pile's bending capacity (plastic moment capacity, $M_p$)**. As the pile gets longer and more flexible, it will bend significantly, and the capacity will be reached when the bending moment in the pile exceeds its material strength, rather than solely by soil failure.

**Question 4:**
A circular pile with a diameter of 0.6m is installed in clay with $s_u = 60$ kPa. The pile is relatively long. If the plastic moment capacity of the pile cross-section is $M_p = 300$ kN-m, and assuming the effective length for moment development is approximately 2 meters, estimate the ultimate lateral load capacity using a simplified bending approach inspired by Broms' long pile concept.

**Answer 4:**
For long piles, the capacity is often limited by bending. A simplified approach is to consider the ultimate bending moment capacity ($M_u$) and the effective length.
$M_u = M_p / 2 = 300 \text{ kN-m} / 2 = 150 \text{ kN-m}$ (Assuming $M_u = M_p/2$ is used as the ultimate bending capacity).
$P_u \approx M_u / L_e$
$P_u \approx 150 \text{ kN-m} / 2 \text{ m}$
$P_u \approx 75$ kN

*Note: This is a simplified estimation. The actual Broms charts or more rigorous analyses would provide a more accurate value, considering the interaction between soil and pile bending.*

---

### 7. Important Points to Remember

*   **Clayey Soils:** Broms' method for clay focuses on the undrained shear strength ($s_u$).
*   **Short vs. Long Piles:** The distinction is critical and depends on the pile's slenderness and interaction with the soil. Short piles fail by soil rupture, while long piles fail by a combination of soil yielding and pile bending.
*   **Pile Head Conditions:** Restrained heads provide higher lateral capacity than unrestrained heads.
*   **Broms Charts:** These are graphical tools that simplify the application of Broms' method and account for different pile and soil conditions. Always refer to specific charts for design.
*   **Long Pile Limitation:** For long piles, the pile's bending capacity ($M_p$) is often the controlling factor for lateral resistance.
*   **Assumptions:** Broms' method is based on simplified soil failure mechanisms and idealized pile behavior. Real-world conditions may vary.

---

This set of notes provides a comprehensive overview of the Broms method as applied to short and long piles in clayey soils, with an emphasis on understanding the principles and utilizing graphical aids. Remember to consult specific design codes and Broms' original publications for detailed chart data and further refinements.
