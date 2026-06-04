---
title: "Chart for estimating the 
lateral deflection at ground level for piles in Clayey soils under working loads
given by Broms."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 4: Behavior of vertical piles under lateral loading – Failure mechanisms of short
piles in cohesive and granular soils for restrained and unrestrained conditions,
given by (Broms)."
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba81121a"
status: "completed"
scrapedAt: "2026-05-20T18:52:10.562Z"
---
# Advanced Foundation Engineering: Module 4 - Lateral Loading of Piles

## Topic: Chart for Estimating Lateral Deflection at Ground Level for Piles in Clayey Soils under Working Loads (Broms)

---

### 1. Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the concept of lateral loading on piles.
*   Identify the key parameters influencing the lateral deflection of piles in clayey soils.
*   Utilize Broms' charts to estimate the lateral deflection at the ground level for short piles in clay.
*   Differentiate between restrained and unrestrained pile head conditions.
*   Apply the principles to practical scenarios involving lateral pile loading in clay.

---

### 2. Key Concepts and Definitions

#### 2.1 Lateral Loading on Piles

Vertical piles are often subjected to lateral forces in addition to axial loads. These lateral loads can arise from:

*   Wind forces
*   Earth pressure from retaining walls or basement excavations
*   Wave forces on offshore structures
*   Seismic forces
*   Impact loads

These lateral loads cause the pile to deflect laterally and induce bending moments within the pile.

#### 2.2 Broms' Approach

Broms (1964) proposed a simplified approach for analyzing the behavior of single piles under lateral loading, particularly for short and long piles in both cohesive and granular soils. His method relies on a series of charts and dimensionless parameters to predict the ultimate lateral load and the load-deflection behavior. This topic focuses on his charts for estimating lateral deflection at ground level for piles in clayey soils under working loads.

#### 2.3 Short Piles in Clayey Soils

This topic specifically deals with **short piles** in clay. Short piles are characterized by their relative stiffness compared to the surrounding soil. For piles in clay, a pile is considered "short" if its resistance to lateral displacement is primarily governed by the soil's ultimate lateral bearing capacity, rather than the pile's bending stiffness. This means that the pile will tend to fail in a punching or shear-like failure mode within the soil, rather than by excessive bending of the pile itself.

#### 2.4 Clayey Soils

In clayey soils, the lateral resistance is primarily governed by the undrained shear strength ($c_u$) of the soil. Broms' approach often simplifies the soil behavior by assuming a constant or linearly increasing undrained shear strength with depth.

#### 2.5 Working Loads

Working loads refer to the lateral loads applied to the pile that are significantly less than the ultimate lateral capacity of the pile. At working loads, the pile behavior is generally elastic or quasi-elastic, and the primary concern is to ensure that the resulting deflections are within acceptable serviceability limits.

#### 2.6 Restrained vs. Unrestrained Pile Heads

The condition of the pile head significantly influences the lateral deflection and bending moment distribution.

*   **Unrestrained Pile Head:** The pile head is free to rotate and translate. This is a common condition for isolated piles where no bracing is provided.
*   **Restrained Pile Head:** The pile head is prevented from rotating and/or translating. This can be achieved through:
    *   **Fixed Head:** Prevents rotation but allows translation. This is often assumed for piles connected to a rigid pile cap.
    *   **Pinned Head:** Prevents translation but allows rotation. Less common in practice for lateral loading.
    *   **Fully Restrained (Fixed and Translation Prevented):** Prevents both rotation and translation. This is an idealized condition.

#### 2.7 Lateral Deflection at Ground Level ($y_0$)

This is the primary output we are interested in from Broms' charts for this topic. It represents the horizontal displacement of the pile at the ground surface under a given lateral load.

---

### 3. Broms' Charts for Lateral Deflection in Clayey Soils

Broms' method uses dimensionless parameters to generalize the behavior of piles. For lateral loading of short piles in clay, the key parameters are:

*   **Lateral Load ($H$)**: The applied horizontal force at the pile head.
*   **Undrained Shear Strength ($c_u$)**: The shear strength of the clay at the pile head level.
*   **Pile Diameter ($D$)**: The diameter of the pile.
*   **Pile Length ($L$)**: The length of the pile.
*   **Pile Head Restraint**: Whether the pile head is unrestrained or restrained.

Broms' charts are typically presented as load-deflection curves for specific pile types and soil conditions. For short piles in clay, the critical factor is often related to the **short pile factor**.

#### 3.1 Key Chart Presentation

Broms' charts for lateral deflection of short piles in clay typically relate a dimensionless deflection parameter to a dimensionless load parameter. A common form might involve:

*   **Dimensionless Deflection:** $y_0 / D$ (Lateral deflection at ground level divided by pile diameter)
*   **Dimensionless Load:** $H / (c_u D^2)$ or similar variations reflecting the soil strength and pile dimensions.

**Important Note:** The exact form of the dimensionless parameters and the resulting charts can vary slightly depending on the specific publication or adaptation of Broms' work. Always refer to the specific charts provided in your course material or textbook.

#### 3.2 Procedure for Using Broms' Charts

1.  **Determine Pile and Soil Properties:**
    *   Lateral load ($H$)
    *   Pile diameter ($D$)
    *   Pile length ($L$)
    *   Undrained shear strength of clay ($c_u$) at the pile head level. For non-uniform clays, an average value or a value at the pile head level is usually taken.
    *   Pile head condition (unrestrained or restrained).

2.  **Identify the Relevant Chart:** Select the chart corresponding to:
    *   Clayey soil
    *   Short pile behavior
    *   The specific pile head condition (unrestrained or restrained).

3.  **Calculate Dimensionless Parameters:** Compute the dimensionless load parameter using the determined properties.

4.  **Read Dimensionless Deflection from the Chart:** Locate the calculated dimensionless load on the chart's horizontal axis. Follow up to the curve corresponding to the pile head condition, and then read the corresponding dimensionless deflection on the vertical axis.

5.  **Calculate Actual Lateral Deflection:** Multiply the dimensionless deflection by the pile diameter ($D$) to obtain the actual lateral deflection at the ground level ($y_0$).

#### 3.3 Factors Affecting Deflection

*   **Increased Lateral Load ($H$):** Increases deflection.
*   **Increased Undrained Shear Strength ($c_u$):** Decreases deflection (soil is stiffer).
*   **Increased Pile Diameter ($D$):** For a given load, a larger diameter pile is generally stiffer and will deflect less relative to its diameter. However, the dimensionless load parameter ($H / (c_u D^2)$) also changes, making direct interpretation complex without the chart.
*   **Pile Head Restraint:** Restrained heads (fixed) generally result in less deflection than unrestrained heads for the same applied load.

---

### 4. Examples

Let's illustrate with an example.

**Problem:**
A single pile in a saturated clay deposit is subjected to a lateral working load of $H = 50 \text{ kN}$. The pile has a diameter $D = 0.4 \text{ m}$ and is considered a short pile. The undrained shear strength of the clay at the pile head level is $c_u = 30 \text{ kN/m}^2$. The pile head is unrestrained. Estimate the lateral deflection at ground level using Broms' approach.

**Solution:**

1.  **Determine Properties:**
    *   $H = 50 \text{ kN}$
    *   $D = 0.4 \text{ m}$
    *   $c_u = 30 \text{ kN/m}^2$
    *   Pile head: Unrestrained

2.  **Calculate Dimensionless Load Parameter:**
    Let's assume Broms uses the parameter $H / (c_u D^2)$:
    Dimensionless Load $= \frac{50 \text{ kN}}{(30 \text{ kN/m}^2) \times (0.4 \text{ m})^2} = \frac{50}{30 \times 0.16} = \frac{50}{4.8} \approx 10.42$

3.  **Read Dimensionless Deflection from Chart:**
    *   Consult a Broms' chart for short piles in clay, unrestrained head.
    *   Locate the dimensionless load value of approximately 10.42 on the x-axis.
    *   Trace upwards to the "unrestrained" curve.
    *   Read the corresponding dimensionless deflection ($y_0/D$) from the y-axis.
    *   **Hypothetical Chart Reading:** Let's assume from the chart, for a dimensionless load of 10.42, the dimensionless deflection ($y_0/D$) is approximately 0.25.

4.  **Calculate Actual Lateral Deflection:**
    $y_0 = (\text{Dimensionless Deflection}) \times D$
    $y_0 = 0.25 \times 0.4 \text{ m} = 0.1 \text{ m} = 100 \text{ mm}$

Therefore, the estimated lateral deflection at ground level is approximately 100 mm.

**Important Consideration for Restrained Heads:** If the pile head were fixed (restrained), the chart would likely show a lower dimensionless deflection for the same dimensionless load due to the reduced rotational freedom.

---

### 5. Practice Questions and Exercises

**Question 1:**
A short pile in clay has an unrestrained head and is subjected to a lateral load $H = 75 \text{ kN}$. The pile diameter is $D = 0.5 \text{ m}$, and the undrained shear strength of the clay is $c_u = 40 \text{ kN/m}^2$.
a) Calculate the dimensionless load parameter $H / (c_u D^2)$.
b) If Broms' chart for this condition yields a dimensionless deflection of $y_0/D = 0.18$ at this load level, what is the estimated lateral deflection at ground level?

**Answer 1:**
a) Dimensionless Load $= \frac{75 \text{ kN}}{(40 \text{ kN/m}^2) \times (0.5 \text{ m})^2} = \frac{75}{40 \times 0.25} = \frac{75}{10} = 7.5$
b) $y_0 = (y_0/D) \times D = 0.18 \times 0.5 \text{ m} = 0.09 \text{ m} = 90 \text{ mm}$.

**Question 2:**
Compare the likely lateral deflection at ground level for two identical short piles in clay under the same lateral load:
Pile A: Unrestrained head.
Pile B: Fixed head (restrained from rotation).
Explain your reasoning based on the concept of pile head restraint.

**Answer 2:**
Pile B (fixed head) will likely experience less lateral deflection at ground level compared to Pile A (unrestrained head) under the same lateral load.
Reasoning: A fixed headrestraint prevents rotation at the ground level, which effectively stiffens the pile's response to lateral loading. This constraint reduces the bending moment at the head and redistributes the internal forces within the pile and soil, leading to a smaller overall lateral displacement at the surface. Broms' charts for restrained heads will show lower deflection values for equivalent dimensionless loads.

---

### 6. Important Points to Remember

*   **Broms' charts are a simplification:** They provide a useful and relatively quick method for estimating lateral deflections of short piles in clay under working loads. For critical designs, more rigorous analysis methods (e.g., finite element analysis) may be necessary.
*   **Short pile assumption:** The charts are specifically for short piles where the soil's ultimate lateral capacity dominates over the pile's bending stiffness. If the pile is flexible (long pile), different charts or methods would apply.
*   **Undrained shear strength ($c_u$):** This is the primary soil parameter for clay. Ensure you use an appropriate value, especially if the clay is non-uniform.
*   **Pile head condition is crucial:** The difference between unrestrained and restrained (fixed) heads significantly impacts the deflection. Always ensure you are using the correct chart for the pile head condition.
*   **Working loads vs. ultimate loads:** These charts are for estimating deflections under service loads, not for determining the ultimate lateral capacity.
*   **Dimensionless parameters:** Understanding how to calculate and interpret the dimensionless parameters is key to using Broms' charts effectively.
*   **Units:** Be consistent with units when performing calculations.

---
