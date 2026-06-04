---
title: "Uplift capacity
of single piles and group of piles in clay -Numerical problems."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 2: Deep foundations"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba81120c"
status: "completed"
scrapedAt: "2026-05-20T18:52:02.258Z"
---
# Advanced Foundation Engineering - Module 2: Deep Foundations - Uplift Capacity of Piles in Clay

This module focuses on understanding and calculating the uplift capacity of single piles and pile groups embedded in cohesive soils (clay). We will cover the theoretical basis and practical considerations for determining the load a pile can sustain when subjected to an upward pull.

---

## 1. Introduction to Uplift Capacity

### 1.1 What is Uplift Capacity?

*   **Definition:** Uplift capacity refers to the maximum upward force that a foundation, particularly a pile, can resist before failure occurs. This failure is typically characterized by excessive movement or pullout of the pile from the soil.
*   **Importance:** Uplift capacity is crucial for structures subjected to wind loads (e.g., tall buildings, towers), hydrostatic pressures (e.g., submerged structures), overturning moments, or seismic forces that can induce uplift.

### 1.2 Failure Modes in Uplift

*   **Soil Shear Failure:** The most common failure mode where the soil along the pile shaft fails in shear, leading to the pile being pulled out. The resistance is primarily provided by the adhesion between the pile surface and the surrounding clay.
*   **Pile Rupture:** The pile material itself fails in tension. This is less common for properly designed piles unless there are defects or extreme loading conditions.
*   **Bearing Capacity Failure at Tip (Less Significant in Uplift):** While important in compression, the pile tip's contribution to uplift resistance is generally negligible, as the soil above the tip is the primary resisting medium.

---

## 2. Uplift Capacity of a Single Pile in Clay

### 2.1 Adhesion Factor Method

This is the most widely used method for calculating the uplift capacity of piles in clay.

*   **Key Concept:** The uplift resistance is primarily derived from the shear strength of the clay along the pile shaft. This resistance is often expressed as the adhesion between the pile and the soil.
*   **Formula:**
    $$
    U = P_s + W_p
    $$
    Where:
    *   $U$ = Ultimate uplift capacity of the pile
    *   $P_s$ = Skin friction resistance along the pile shaft
    *   $W_p$ = Weight of the pile

*   **Skin Friction Resistance ($P_s$):**
    $$
    P_s = \sum_{i=1}^{n} c_{ai} \times A_i
    $$
    Where:
    *   $c_{ai}$ = Average unit adhesion between the pile and the soil in layer $i$
    *   $A_i$ = Surface area of the pile in contact with soil layer $i$
    *   $n$ = Number of soil layers along the pile shaft

*   **Calculating Unit Adhesion ($c_{ai}$):**
    *   **Adhesion Factor Method ($\alpha$ method):**
        $$
        c_{ai} = \alpha \times s_u(i)
        $$
        Where:
        *   $\alpha$ = Adhesion factor, a dimensionless factor that relates the undrained shear strength of the clay to the adhesion. It depends on the type of clay, pile material, and installation method.
        *   $s_u(i)$ = Undrained shear strength of the clay in layer $i$ (typically obtained from laboratory tests like UU triaxial or field tests like Vane Shear Test).

    *   **Adhesion Factor ($\alpha$):**
        *   **Empirical relationships:** $\alpha$ is typically determined based on the undrained shear strength of the clay ($s_u$) or the consistency of the clay.
        *   **General Trends:**
            *   For soft to medium clays: $\alpha$ is generally higher (e.g., 0.7 - 1.0).
            *   For stiff to very stiff clays: $\alpha$ is generally lower (e.g., 0.3 - 0.7).
        *   **Important Note:** The adhesion factor should be conservatively chosen. Various charts and guidelines are available from codes of practice (e.g., API, Eurocode) and research papers.

*   **Pile Surface Area ($A_i$):**
    *   For a circular pile: $A_i = \pi \times D \times L_i$
        *   $D$ = Diameter of the pile
        *   $L_i$ = Length of the pile in layer $i$
    *   For a square pile: $A_i = 4 \times B \times L_i$
        *   $B$ = Width of the pile

*   **Weight of the Pile ($W_p$):**
    *   $W_p = V_p \times \gamma_{pile}$
    *   $V_p$ = Volume of the pile
    *   $\gamma_{pile}$ = Unit weight of the pile material (e.g., concrete, steel)

### 2.2 Empirical Method (for certain clays)

*   **Key Concept:** For specific types of clays (e.g., normally consolidated clays), a direct relationship might exist between the uplift capacity and the undrained shear strength. This method is less general than the adhesion factor method.

### 2.3 Factor of Safety (FOS)

*   **Definition:** The ratio of the ultimate uplift capacity to the allowable working uplift load.
*   **Typical Values:** For uplift capacity, FOS is generally higher than for compressive capacity, often in the range of 2.5 to 3.5, depending on the reliability of soil data, pile installation, and loading conditions.

### 2.4 Numerical Example - Single Pile Uplift Capacity

**Problem:** A concrete pile of diameter 0.5 m and length 10 m is driven into a homogeneous clay layer. The undrained shear strength ($s_u$) of the clay is 50 kPa. The unit weight of concrete is 24 kN/m³. Assume an adhesion factor ($\alpha$) of 0.6. Determine the ultimate uplift capacity of the pile.

**Solution:**

1.  **Calculate Pile Surface Area ($A_s$):**
    $$
    A_s = \pi \times D \times L = \pi \times 0.5 \text{ m} \times 10 \text{ m} = 15.71 \text{ m}^2
    $$

2.  **Calculate Unit Adhesion ($c_a$):**
    $$
    c_a = \alpha \times s_u = 0.6 \times 50 \text{ kPa} = 30 \text{ kPa} = 30 \text{ kN/m}^2
    $$

3.  **Calculate Skin Friction Resistance ($P_s$):**
    $$
    P_s = c_a \times A_s = 30 \text{ kN/m}^2 \times 15.71 \text{ m}^2 = 471.3 \text{ kN}
    $$

4.  **Calculate Pile Volume ($V_p$):**
    $$
    V_p = (\pi \times (D/2)^2) \times L = (\pi \times (0.5/2)^2) \times 10 \text{ m} = 1.96 \text{ m}^3
    $$

5.  **Calculate Weight of the Pile ($W_p$):**
    $$
    W_p = V_p \times \gamma_{pile} = 1.96 \text{ m}^3 \times 24 \text{ kN/m}^3 = 47.04 \text{ kN}
    $$

6.  **Calculate Ultimate Uplift Capacity ($U$):**
    $$
    U = P_s + W_p = 471.3 \text{ kN} + 47.04 \text{ kN} = 518.34 \text{ kN}
    $$

**Therefore, the ultimate uplift capacity of the single pile is approximately 518.34 kN.**

---

## 3. Uplift Capacity of Pile Groups in Clay

When piles are installed in a group, the behavior of the group under uplift is more complex than that of a single pile due to the interaction between piles and the surrounding soil.

### 3.1 Mechanisms of Group Action

*   **Block Failure (Pot Failure):** The entire pile group and the soil mass between the piles act as a single block and are pulled out of the ground. This is the most common mode of failure for uplift in pile groups.
*   **Individual Pile Failure:** Each pile in the group fails individually, similar to a single pile, with the total resistance being the sum of individual pile capacities, modified by group efficiency. This is less common for uplift in clay.

### 3.2 Calculating Group Uplift Capacity - Block Failure

The uplift capacity of a pile group is often calculated based on the assumption of block failure.

*   **Key Concept:** The resistance is provided by the adhesion along the outer perimeter of the pile block and the weight of the soil block.

*   **Formula:**
    $$
    U_{group} = P_{s, group} + W_{block}
    $$
    Where:
    *   $U_{group}$ = Ultimate uplift capacity of the pile group
    *   $P_{s, group}$ = Skin friction resistance of the pile group block
    *   $W_{block}$ = Weight of the soil block enclosed by the group

*   **Skin Friction Resistance of the Pile Group Block ($P_{s, group}$):**
    *   **For a rectangular group:**
        $$
        P_{s, group} = c_{a, avg} \times P_{block} \times L
        $$
        Where:
        *   $c_{a, avg}$ = Average unit adhesion around the perimeter of the block. It's usually taken as the adhesion of the surrounding soil, often with a reduction factor.
        *   $P_{block}$ = Perimeter of the pile group block.
            *   For a group of $m$ piles in a row and $n$ piles in a perpendicular direction, with spacing $s$, the dimensions of the block are approximately $(m-1)s + D$ and $(n-1)s + D$ (outer dimensions).
            *   The perimeter $P_{block}$ is calculated using these outer dimensions.
        *   $L$ = Length of the pile.

    *   **Important Consideration for $c_{a, avg}$:** The adhesion along the perimeter of the block might be less than the adhesion along a single pile due to spacing effects. A reduction factor may be applied, or the average adhesion of the surrounding soil layers is used. For simplification, we often use the same unit adhesion as for a single pile ($c_a = \alpha s_u$) for the soil along the perimeter.

*   **Weight of the Soil Block ($W_{block}$):**
    *   $W_{block} = V_{block} \times \gamma_{soil}$
    *   $V_{block}$ = Volume of the soil block.
        *   For a rectangular group, $V_{block} = L_x \times L_y \times L$
            *   $L_x, L_y$ = Length and width of the pile group block (outer dimensions).
    *   $\gamma_{soil}$ = Unit weight of the soil.

    *   **Important Note on Soil Weight:** Some approaches also consider the weight of the piles within the block. However, the primary contribution is the soil's weight. For simplicity, we often focus on the soil's weight unless pile weight is significant.

### 3.3 Group Efficiency Factor ($ \eta $)

*   **Definition:** The ratio of the uplift capacity of a pile group to the sum of the uplift capacities of individual piles.
*   **For uplift in clay, the group efficiency factor ($\eta$) is often greater than 1**, unlike compression, because the block action can be more efficient. However, some researchers suggest that for uplift, the block can mobilize more shear resistance.
*   **General Trend:** Group efficiency in uplift for clay can be close to 1.0 or slightly higher, indicating that the group capacity is not significantly reduced compared to individual piles, and can even be enhanced by the block action.
*   **Alternative Approach:** Calculating directly using the block failure mechanism (as described in 3.2) is often preferred for uplift capacity in clay, as it inherently accounts for the group's interaction.

### 3.4 Numerical Example - Pile Group Uplift Capacity (Block Failure)

**Problem:** A group of 9 piles (3x3 arrangement) is installed in a clay deposit. Each pile has a diameter of 0.4 m and a length of 12 m. The spacing between the piles is 3 diameters (1.2 m center-to-center). The undrained shear strength ($s_u$) of the clay is 60 kPa, and its unit weight ($\gamma_{soil}$) is 18 kN/m³. The adhesion factor ($\alpha$) for a single pile is 0.7. Determine the ultimate uplift capacity of the pile group, assuming block failure.

**Solution:**

1.  **Determine the dimensions of the pile group block:**
    *   Number of piles in one direction ($n$) = 3
    *   Number of piles in the other direction ($m$) = 3
    *   Pile diameter ($D$) = 0.4 m
    *   Pile spacing ($s$) = 3 * D = 1.2 m
    *   Block width ($L_y$) = $(n-1)s + D = (3-1) \times 1.2 \text{ m} + 0.4 \text{ m} = 2 \times 1.2 \text{ m} + 0.4 \text{ m} = 2.4 \text{ m} + 0.4 \text{ m} = 2.8 \text{ m}$
    *   Block length ($L_x$) = $(m-1)s + D = (3-1) \times 1.2 \text{ m} + 0.4 \text{ m} = 2 \times 1.2 \text{ m} + 0.4 \text{ m} = 2.4 \text{ m} + 0.4 \text{ m} = 2.8 \text{ m}$
    *   Pile length ($L$) = 12 m

2.  **Calculate the perimeter of the pile group block ($P_{block}$):**
    $$
    P_{block} = 2 \times (L_x + L_y) = 2 \times (2.8 \text{ m} + 2.8 \text{ m}) = 2 \times 5.6 \text{ m} = 11.2 \text{ m}
    $$

3.  **Calculate the average unit adhesion along the block perimeter ($c_{a, avg}$):**
    *   Assume $c_{a, avg} = \alpha \times s_u$ (using the same $\alpha$ for simplicity, though a reduction might be considered).
    $$
    c_{a, avg} = 0.7 \times 60 \text{ kPa} = 42 \text{ kPa} = 42 \text{ kN/m}^2
    $$

4.  **Calculate the skin friction resistance of the pile group block ($P_{s, group}$):**
    $$
    P_{s, group} = c_{a, avg} \times P_{block} \times L = 42 \text{ kN/m}^2 \times 11.2 \text{ m} \times 12 \text{ m} = 5644.8 \text{ kN}
    $$

5.  **Calculate the volume of the soil block ($V_{block}$):**
    $$
    V_{block} = L_x \times L_y \times L = 2.8 \text{ m} \times 2.8 \text{ m} \times 12 \text{ m} = 94.08 \text{ m}^3
    $$

6.  **Calculate the weight of the soil block ($W_{block}$):**
    $$
    W_{block} = V_{block} \times \gamma_{soil} = 94.08 \text{ m}^3 \times 18 \text{ kN/m}^3 = 1693.44 \text{ kN}
    $$

7.  **Calculate the ultimate uplift capacity of the pile group ($U_{group}$):**
    *   Assuming the weight of the piles is negligible compared to the soil block and skin friction.
    $$
    U_{group} = P_{s, group} + W_{block} = 5644.8 \text{ kN} + 1693.44 \text{ kN} = 7338.24 \text{ kN}
    $$

**Therefore, the ultimate uplift capacity of the pile group is approximately 7338.24 kN.**

---

## 4. Practice Questions and Exercises

**Question 1:**
A single concrete pile of diameter 0.6 m and length 15 m is installed in a marine clay deposit. The undrained shear strength ($s_u$) varies linearly from 30 kPa at the ground surface to 70 kPa at a depth of 15 m. The unit weight of concrete is 25 kN/m³. Assume an adhesion factor ($\alpha$) that varies linearly from 0.8 at the surface to 0.4 at a depth of 15 m. Calculate the ultimate uplift capacity of the pile.

**Question 2:**
A group of 4 piles (2x2 arrangement) of diameter 0.5 m and length 10 m is embedded in a stiff clay with a constant undrained shear strength ($s_u$) of 80 kPa. The spacing between the piles is 2.5 diameters (1.25 m center-to-center). The unit weight of the clay is 19 kN/m³. The adhesion factor ($\alpha$) is 0.5. Calculate the ultimate uplift capacity of the pile group, considering block failure.

**Question 3:**
A single pile of diameter 0.4 m and length 8 m is driven into a clay layer with an average undrained shear strength ($s_u$) of 45 kPa. The adhesion factor ($\alpha$) is 0.7. The pile weight is negligible.
a) Calculate the ultimate uplift capacity of the pile.
b) If the allowable working uplift load is 150 kN, what factor of safety is being used?

---

## 5. Answers to Practice Questions

**Answer 1:**

This requires integration due to the varying $s_u$ and $\alpha$.

1.  **Adhesion and Shear Strength as a function of depth (z):**
    *   $s_u(z) = 30 + \frac{70-30}{15}z = 30 + \frac{40}{15}z = 30 + \frac{8}{3}z$ kPa
    *   $\alpha(z) = 0.8 - \frac{0.8-0.4}{15}z = 0.8 - \frac{0.4}{15}z = 0.8 - \frac{4}{150}z = 0.8 - \frac{2}{75}z$

2.  **Unit Adhesion as a function of depth ($c_a(z)$):**
    $$
    c_a(z) = \alpha(z) \times s_u(z) = \left(0.8 - \frac{2}{75}z\right) \times \left(30 + \frac{8}{3}z\right)
    $$
    $$
    c_a(z) = 24 + \frac{6.4}{3}z - \frac{60}{75} - \frac{16}{225}z^2
    $$
    $$
    c_a(z) = 24 + 2.133z - 0.8 - 0.071z^2
    $$
    $$
    c_a(z) = 23.2 + 2.133z - 0.071z^2 \quad (\text{in kPa})
    $$

3.  **Skin Friction Resistance ($P_s$):**
    $$
    P_s = \int_{0}^{15} c_a(z) \times A_s dz
    $$
    Where $A_s = \pi \times D \times dz = \pi \times 0.6 \times dz = 1.885 dz$ (m²)

    $$
    P_s = \int_{0}^{15} (23.2 + 2.133z - 0.071z^2) \times 1.885 dz
    $$
    $$
    P_s = 1.885 \int_{0}^{15} (23.2 + 2.133z - 0.071z^2) dz
    $$
    $$
    P_s = 1.885 \left[ 23.2z + \frac{2.133}{2}z^2 - \frac{0.071}{3}z^3 \right]_{0}^{15}
    $$
    $$
    P_s = 1.885 \left[ (23.2 \times 15) + (1.0665 \times 15^2) - (0.02367 \times 15^3) \right]
    $$
    $$
    P_s = 1.885 \left[ 348 + 240.0 - 79.7 \right]
    $$
    $$
    P_s = 1.885 \times 508.3 = 957.8 \text{ kN}
    $$

4.  **Pile Volume ($V_p$):**
    $$
    V_p = (\pi \times (0.6/2)^2) \times 15 = (\pi \times 0.3^2) \times 15 = 4.24 \text{ m}^3
    $$

5.  **Weight of the Pile ($W_p$):**
    $$
    W_p = 4.24 \text{ m}^3 \times 25 \text{ kN/m}^3 = 106 \text{ kN}
    $$

6.  **Ultimate Uplift Capacity ($U$):**
    $$
    U = P_s + W_p = 957.8 \text{ kN} + 106 \text{ kN} = 1063.8 \text{ kN}
    $$

**Answer 2:**

1.  **Pile group block dimensions:**
    *   $D = 0.5$ m, $s = 2.5 \times 0.5 = 1.25$ m
    *   Block width ($L_y$) = $(2-1)s + D = 1 \times 1.25 + 0.5 = 1.75$ m
    *   Block length ($L_x$) = $(2-1)s + D = 1 \times 1.25 + 0.5 = 1.75$ m
    *   Pile length ($L$) = 10 m

2.  **Perimeter of the block ($P_{block}$):**
    $$
    P_{block} = 2 \times (1.75 + 1.75) = 2 \times 3.5 = 7.0 \text{ m}
    $$

3.  **Average unit adhesion ($c_{a, avg}$):**
    $$
    c_{a, avg} = \alpha \times s_u = 0.5 \times 80 \text{ kPa} = 40 \text{ kPa} = 40 \text{ kN/m}^2
    $$

4.  **Skin friction resistance of the block ($P_{s, group}$):**
    $$
    P_{s, group} = c_{a, avg} \times P_{block} \times L = 40 \text{ kN/m}^2 \times 7.0 \text{ m} \times 10 \text{ m} = 2800 \text{ kN}
    $$

5.  **Volume of the soil block ($V_{block}$):**
    $$
    V_{block} = L_x \times L_y \times L = 1.75 \text{ m} \times 1.75 \text{ m} \times 10 \text{ m} = 30.625 \text{ m}^3
    $$

6.  **Weight of the soil block ($W_{block}$):**
    $$
    W_{block} = V_{block} \times \gamma_{soil} = 30.625 \text{ m}^3 \times 19 \text{ kN/m}^3 = 581.875 \text{ kN}
    $$

7.  **Ultimate uplift capacity of the group ($U_{group}$):**
    $$
    U_{group} = P_{s, group} + W_{block} = 2800 \text{ kN} + 581.875 \text{ kN} = 3381.875 \text{ kN}
    $$

**Answer 3:**

a) **Ultimate uplift capacity of the pile:**
    *   Pile surface area ($A_s$) = $\pi \times 0.4 \times 8 = 10.05$ m²
    *   Unit adhesion ($c_a$) = $0.7 \times 45$ kPa = 31.5 kPa = 31.5 kN/m²
    *   Skin friction ($P_s$) = $31.5 \text{ kN/m}^2 \times 10.05 \text{ m}^2 = 316.58$ kN
    *   Since pile weight is negligible, $U = P_s = 316.58$ kN

b) **Factor of Safety:**
    *   FOS = Ultimate Uplift Capacity / Allowable Working Uplift Load
    *   FOS = $316.58$ kN / $150$ kN = 2.11

---

## 6. Important Points to Remember

*   **Uplift resistance in clay is primarily due to skin friction (adhesion) along the pile shaft.**
*   **The adhesion factor ($\alpha$) is crucial and depends on the clay properties and installation method.** Use conservative values.
*   **The weight of the pile itself contributes to the uplift capacity.**
*   **For pile groups in clay, block failure is the dominant mode for uplift.** Calculate capacity based on the outer perimeter of the block and the weight of the enclosed soil.
*   **Group efficiency for uplift in clay can be greater than 1**, especially if the block mechanism is considered.
*   **A higher Factor of Safety is generally recommended for uplift loads** compared to compressive loads due to uncertainties in wind/wave loading and soil behavior.
*   **When soil properties ($s_u$, $\alpha$) vary with depth, integration is required** for accurate calculation of single pile capacity.
*   **Always check for potential pile rupture**, although this is rarely the controlling failure mode with proper design.

---
**End of Module Notes**
