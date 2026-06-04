---
title: "Numerical problems using Brom’s charts alone."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 4: Behavior of vertical piles under lateral loading – Failure mechanisms of short
piles in cohesive and granular soils for restrained and unrestrained conditions,
given by (Broms)."
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba81121c"
status: "completed"
scrapedAt: "2026-05-20T18:52:12.001Z"
---
# Advanced Foundation Engineering - Module 4: Lateral Load Behavior of Piles

## Topic: Numerical Problems Using Broms' Charts Alone

This module focuses on understanding the behavior of vertical piles subjected to lateral loads, specifically examining failure mechanisms of short piles in cohesive and granular soils under restrained and unrestrained conditions, as described by Broms. We will primarily focus on applying Broms' charts for solving numerical problems.

---

### 1. Learning Outcomes Covered

By the end of this topic, you should be able to:

*   **Understand the fundamental principles of lateral load capacity of short piles in cohesive and granular soils.**
*   **Identify the failure mechanisms of short piles under lateral loading as per Broms' theory.**
*   **Apply Broms' charts to determine the ultimate lateral load capacity of short piles in cohesive soils (undrained conditions).**
*   **Apply Broms' charts to determine the ultimate lateral load capacity of short piles in granular soils (drained conditions).**
*   **Analyze the effect of pile head conditions (restrained vs. unrestrained) on lateral load capacity using Broms' charts.**
*   **Calculate the ultimate lateral load capacity of a short pile given its geometric properties and soil characteristics.**

---

### 2. Key Concepts and Definitions

#### 2.1. Broms' Theory for Short Piles

Broms (1964) developed a simplified method for analyzing the lateral load capacity of short rigid piles. His theory is based on the concept of a **plastic failure mechanism** developing in the surrounding soil. A "short" pile is generally defined as a pile where the length-to-diameter ratio ($L/D$) is less than approximately 10-15. For these piles, the pile itself is assumed to remain relatively straight and rigid, and failure is dominated by soil yielding.

#### 2.2. Failure Mechanisms of Short Piles

Broms identified two primary modes of failure for short piles under lateral loading:

*   **Plastic Hinges:** The pile itself can develop plastic hinges, leading to a rotational failure. This is more likely when the pile is relatively slender or the lateral load is very high.
*   **Soil Failure:** The surrounding soil yields and mobilizes its ultimate bearing capacity in resistance to the pile's lateral movement. This is the dominant failure mode for short, rigid piles.

Broms' charts are based on the **soil failure mechanism**.

#### 2.3. Soil Behavior and Parameters

*   **Cohesive Soils (Undrained Conditions):**
    *   **Undrained Shear Strength ($c_u$):** This is the critical soil parameter. It represents the shear strength of the soil in an undrained state (typically for saturated clays and silts). Broms' analysis in cohesive soils uses a uniform undrained shear strength profile.
    *   **Admissible Bearing Capacity Factor ($N_c$):** Broms uses a factor related to bearing capacity for cohesive soils.

*   **Granular Soils (Drained Conditions):**
    *   **Angle of Internal Friction ($\phi$):** This is the critical soil parameter, representing the shear strength of the soil under drained conditions (typically for sands and gravels). Broms' analysis in granular soils uses a constant angle of internal friction profile.
    *   **Bearing Capacity Factor ($N_\phi$):** Broms utilizes bearing capacity factors derived from plasticity theory, specifically related to the friction angle.

#### 2.4. Pile Head Conditions

The way the pile head is supported significantly influences its lateral load capacity. Broms considered two main conditions:

*   **Unrestrained (Free Head):** The pile head is free to rotate and translate. This is the most common condition for a single pile with no bracing.
*   **Restrained (Fixed Head):** The pile head is prevented from rotating and translating (fully fixed). This is often achieved through pile caps, bracing, or other structural connections.

#### 2.5. Broms' Charts

Broms' charts are graphical representations that relate the ultimate lateral load capacity ($P_{ult}$) to the pile diameter ($D$), the soil properties ($c_u$ or $\phi$), and the pile head condition. They are typically presented as:

*   **For Cohesive Soils:** Charts relating $P_{ult}/(c_u D^2)$ or similar dimensionless parameters to $L/D$ and pile head conditions.
*   **For Granular Soils:** Charts relating $P_{ult}/(\gamma' D^3)$ or similar dimensionless parameters to $L/D$, $\phi$, and pile head conditions, where $\gamma'$ is the effective unit weight of the soil.

**Important Note:** Broms' original work primarily focused on **short piles**. Therefore, for problems where the pile is significantly longer than its diameter (i.e., a "long" pile where buckling or flexural-shear failure might govern), his charts might not be directly applicable without modifications or a different analytical approach. However, for this topic, we assume the piles are "short" as per Broms' definition.

---

### 3. Applying Broms' Charts for Numerical Problems

The general approach involves the following steps:

1.  **Identify the soil type:** Is it cohesive or granular?
2.  **Determine the critical soil parameter:** $c_u$ for cohesive soils, $\phi$ for granular soils.
3.  **Determine the pile geometry:** Diameter ($D$) and length ($L$).
4.  **Calculate the length-to-diameter ratio ($L/D$):** This is crucial for selecting the correct portion of Broms' charts.
5.  **Identify the pile head condition:** Unrestrained or Restrained.
6.  **Select the appropriate Broms' chart:** Based on soil type and pile head condition.
7.  **Locate the value of $L/D$ on the chart's x-axis (or y-axis depending on the chart format).**
8.  **Read the corresponding dimensionless capacity parameter from the chart.**
9.  **Calculate the ultimate lateral load capacity ($P_{ult}$) using the appropriate formula.**

#### 3.1. Problems in Cohesive Soils (Undrained Conditions)

For cohesive soils, Broms' analysis often involves a parameter $k_{c} = \frac{P_{ult}}{c_u D^2}$.

**General procedure for cohesive soils:**

1.  **Calculate $L/D$.**
2.  **Choose the relevant chart for cohesive soils (either unrestrained or restrained head).** These charts typically plot $k_c$ versus $L/D$.
3.  **Find your $L/D$ on the x-axis and read the corresponding $k_c$ value from the curve.**
4.  **Calculate $P_{ult} = k_c \cdot c_u D^2$.**

**Example 1 (Cohesive Soil - Unrestrained Head):**

A short, rigid concrete pile of diameter $D = 0.5$ m and length $L = 6$ m is embedded in a uniform clay deposit with an undrained shear strength $c_u = 60$ kN/m². The pile head is unrestrained. Determine the ultimate lateral load capacity using Broms' charts.

**Solution:**

1.  **Soil Type:** Cohesive (clay)
2.  **Critical Parameter:** $c_u = 60$ kN/m²
3.  **Pile Geometry:** $D = 0.5$ m, $L = 6$ m
4.  **$L/D$ Ratio:** $L/D = 6 \text{ m} / 0.5 \text{ m} = 12$
5.  **Pile Head Condition:** Unrestrained
6.  **Broms' Chart:** Use the chart for cohesive soils, unrestrained head.
7.  **Locate $L/D = 12$ on the x-axis.**
8.  **Read $k_c$ from the chart.** *Assuming a typical Broms chart for cohesive soil, unrestrained head, for $L/D=12$, $k_c$ might be around 5-7.* Let's assume for this example, the chart gives $k_c \approx 6$.
9.  **Calculate $P_{ult}$:**
    $P_{ult} = k_c \cdot c_u D^2$
    $P_{ult} = 6 \cdot (60 \text{ kN/m²}) \cdot (0.5 \text{ m})²$
    $P_{ult} = 6 \cdot 60 \cdot 0.25$
    $P_{ult} = 90$ kN

Therefore, the ultimate lateral load capacity is approximately 90 kN.

**Example 2 (Cohesive Soil - Restrained Head):**

If the pile in Example 1 had a restrained head, how would the capacity change?

**Solution:**

1.  **$L/D$ Ratio:** Still 12
2.  **Pile Head Condition:** Restrained
3.  **Broms' Chart:** Use the chart for cohesive soils, restrained head.
4.  **Locate $L/D = 12$ on the x-axis.**
5.  **Read $k_c$ from the chart.** *For a restrained head, the capacity is generally higher. Let's assume the chart gives $k_c \approx 9$ for $L/D=12$ in cohesive soil with restrained head.*
6.  **Calculate $P_{ult}$:**
    $P_{ult} = k_c \cdot c_u D^2$
    $P_{ult} = 9 \cdot (60 \text{ kN/m²}) \cdot (0.5 \text{ m})²$
    $P_{ult} = 9 \cdot 60 \cdot 0.25$
    $P_{ult} = 135$ kN

The ultimate lateral load capacity for a restrained head is 135 kN, which is higher than the unrestrained case.

#### 3.2. Problems in Granular Soils (Drained Conditions)

For granular soils, Broms' analysis often involves a parameter $k_g = \frac{P_{ult}}{\gamma' D^3}$.

**General procedure for granular soils:**

1.  **Calculate $L/D$.**
2.  **Determine the effective unit weight of the soil ($\gamma'$).** This is typically the submerged unit weight for soils below the water table: $\gamma' = \gamma_{sat} - \gamma_w$. If above the water table, $\gamma' = \gamma_{bulk}$.
3.  **Choose the relevant chart for granular soils (either unrestrained or restrained head), often plotted against $\phi$.** These charts typically plot $k_g$ versus $L/D$ for specific $\phi$ values.
4.  **Find your $L/D$ on the x-axis and read the corresponding $k_g$ value from the curve corresponding to your $\phi$.**
5.  **Calculate $P_{ult} = k_g \cdot \gamma' D^3$.**

**Example 3 (Granular Soil - Unrestrained Head):**

A short, rigid concrete pile of diameter $D = 0.4$ m and length $L = 5$ m is embedded in a dense sand deposit. The angle of internal friction is $\phi = 35^\circ$, and the effective unit weight of the sand is $\gamma' = 18$ kN/m³. The pile head is unrestrained. Determine the ultimate lateral load capacity using Broms' charts.

**Solution:**

1.  **Soil Type:** Granular (sand)
2.  **Critical Parameters:** $\phi = 35^\circ$, $\gamma' = 18$ kN/m³
3.  **Pile Geometry:** $D = 0.4$ m, $L = 5$ m
4.  **$L/D$ Ratio:** $L/D = 5 \text{ m} / 0.4 \text{ m} = 12.5$
5.  **Pile Head Condition:** Unrestrained
6.  **Broms' Chart:** Use the chart for granular soils, unrestrained head, for $\phi = 35^\circ$.
7.  **Locate $L/D = 12.5$ on the x-axis.**
8.  **Read $k_g$ from the chart.** *Assuming a typical Broms chart for granular soil, unrestrained head, for $\phi = 35^\circ$ and $L/D=12.5$, $k_g$ might be around 20-25.* Let's assume $k_g \approx 22$.
9.  **Calculate $P_{ult}$:**
    $P_{ult} = k_g \cdot \gamma' D^3$
    $P_{ult} = 22 \cdot (18 \text{ kN/m³}) \cdot (0.4 \text{ m})³$
    $P_{ult} = 22 \cdot 18 \cdot 0.064$
    $P_{ult} \approx 25.34$ kN

Therefore, the ultimate lateral load capacity is approximately 25.34 kN.

**Example 4 (Granular Soil - Restrained Head):**

If the pile in Example 3 had a restrained head, how would the capacity change?

**Solution:**

1.  **$L/D$ Ratio:** Still 12.5
2.  **Pile Head Condition:** Restrained
3.  **Broms' Chart:** Use the chart for granular soils, restrained head, for $\phi = 35^\circ$.
4.  **Locate $L/D = 12.5$ on the x-axis.**
5.  **Read $k_g$ from the chart.** *For a restrained head, the capacity is generally higher. Let's assume the chart gives $k_g \approx 30$ for $L/D=12.5$ in granular soil with $\phi=35^\circ$ and restrained head.*
6.  **Calculate $P_{ult}$:**
    $P_{ult} = k_g \cdot \gamma' D^3$
    $P_{ult} = 30 \cdot (18 \text{ kN/m³}) \cdot (0.4 \text{ m})³$
    $P_{ult} = 30 \cdot 18 \cdot 0.064$
    $P_{ult} \approx 34.56$ kN

The ultimate lateral load capacity for a restrained head is approximately 34.56 kN, which is higher than the unrestrained case.

---

### 4. Important Points to Remember

*   **Short Piles:** Broms' charts are specifically for "short" piles where $L/D$ is relatively small and the pile acts as a rigid element. For long piles, different methods (like the subgrade reaction method or finite element analysis) are required.
*   **Soil Uniformity:** Broms' theory assumes uniform soil properties with depth. If soil properties vary significantly, the charts may need to be used with caution or with modified soil parameters.
*   **Pile Material:** The charts assume the pile material is sufficiently strong to develop the soil failure mechanism without yielding itself. Steel and reinforced concrete piles are generally adequate.
*   **Chart Accuracy:** Broms' charts are simplified empirical relationships. Actual pile behavior can be influenced by factors not explicitly included, such as pile-soil adhesion, group effects, and the presence of layers.
*   **Pile Head Fixity:** The degree of fixity of the pile head is critical. "Restrained" implies full fixity, which is an idealization. Real pile caps provide a certain level of restraint, but it might not be absolute.
*   **Units:** Ensure consistency in units throughout your calculations (kN, m, kN/m², kN/m³, etc.).
*   **$\gamma'$ for Granular Soils:** Remember to use the effective unit weight ($\gamma'$) for granular soils, especially below the water table.

---

### 5. Practice Questions and Exercises

**Instructions:** Use the provided Broms' charts (assume you have access to typical charts for cohesive and granular soils, with curves for restrained and unrestrained heads).

**Question 1 (Cohesive Soil):**

A concrete pile with a diameter of 0.6 m and a length of 7.2 m is driven into a soft clay with an undrained shear strength $c_u = 40$ kN/m². The pile head is unrestrained. Calculate the ultimate lateral load capacity using Broms' charts.

**Answer:**
*   $L/D = 7.2 \text{ m} / 0.6 \text{ m} = 12$
*   Assume Broms' chart for cohesive soil, unrestrained head, gives $k_c \approx 6.5$ at $L/D=12$.
*   $P_{ult} = k_c \cdot c_u D^2 = 6.5 \cdot (40 \text{ kN/m²}) \cdot (0.6 \text{ m})² = 6.5 \cdot 40 \cdot 0.36 = 93.6$ kN

**Question 2 (Granular Soil):**

A steel pile with a diameter of 0.5 m and a length of 6 m is installed in a medium dense sand. The angle of internal friction is $\phi = 30^\circ$. The effective unit weight of the sand is $\gamma' = 19$ kN/m³. The pile head is fixed (restrained). Determine the ultimate lateral load capacity using Broms' charts.

**Answer:**
*   $L/D = 6 \text{ m} / 0.5 \text{ m} = 12$
*   Assume Broms' chart for granular soil, restrained head, and $\phi=30^\circ$ gives $k_g \approx 25$ at $L/D=12$.
*   $P_{ult} = k_g \cdot \gamma' D^3 = 25 \cdot (19 \text{ kN/m³}) \cdot (0.5 \text{ m})³ = 25 \cdot 19 \cdot 0.125 = 59.375$ kN

**Question 3 (Comparison):**

Consider a pile with $L/D = 10$.
(a) If the pile is in a clay with $c_u = 50$ kN/m² and has an unrestrained head, estimate its ultimate lateral capacity ($D=0.5$ m).
(b) If the pile is in a sand with $\phi = 35^\circ$ and $\gamma' = 18$ kN/m³ and has a restrained head, estimate its ultimate lateral capacity ($D=0.5$ m).
(c) Comment on the difference in capacity between (a) and (b).

**Answer:**
(a) Cohesive, Unrestrained:
    *   $L/D = 10$. Assume $k_c \approx 5$ from chart.
    *   $P_{ult} = 5 \cdot (50 \text{ kN/m²}) \cdot (0.5 \text{ m})² = 5 \cdot 50 \cdot 0.25 = 62.5$ kN

(b) Granular, Restrained:
    *   $L/D = 10$. Assume $k_g \approx 35$ from chart for $\phi=35^\circ$ and restrained head.
    *   $P_{ult} = 35 \cdot (18 \text{ kN/m³}) \cdot (0.5 \text{ m})³ = 35 \cdot 18 \cdot 0.125 = 78.75$ kN

(c) The capacity in granular soil with a restrained head (78.75 kN) is higher than in cohesive soil with an unrestrained head (62.5 kN). This is due to a combination of factors: the higher restraint at the pile head in (b) and the potentially higher mobilized soil resistance due to a larger friction angle and effective unit weight compared to the undrained shear strength in (a).

---

This concludes the study notes on numerical problems using Broms' charts for short piles under lateral loading. Remember to practice with actual Broms' charts to get a feel for reading the values accurately.
