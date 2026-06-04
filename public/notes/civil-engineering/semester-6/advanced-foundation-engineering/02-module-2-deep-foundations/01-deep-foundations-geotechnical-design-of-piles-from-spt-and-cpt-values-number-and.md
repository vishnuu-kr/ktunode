---
title: "Deep foundations- Geotechnical Design of Piles from SPT and CPT -values-number and spacing-Numerical Problems-Settlement of pile groups in clay-equivalent raft concept-Numerical problem."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 2: Deep foundations"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba81120a"
status: "completed"
scrapedAt: "2026-05-20T18:52:00.690Z"
---
# Advanced Foundation Engineering - Module 2: Deep Foundations

## Topic: Geotechnical Design of Piles from SPT and CPT Values

### Learning Outcomes:

*   **Determine pile capacity from SPT and CPT data:** Understand how to use Standard Penetration Test (SPT) and Cone Penetration Test (CPT) data to estimate the load-bearing capacity of individual piles.
*   **Determine the number and spacing of piles in a group:** Learn the principles and methods for designing a group of piles, including determining the optimal number of piles and their spacing to ensure adequate load distribution and prevent excessive settlement.
*   **Solve numerical problems related to pile capacity and group design:** Apply theoretical concepts to solve practical engineering problems involving pile capacity estimation and the design of pile groups.
*   **Analyze settlement of pile groups in clay:** Understand the factors influencing the settlement of pile groups in cohesive soils and learn methods for calculating these settlements.
*   **Apply the equivalent raft concept for settlement analysis:** Grasp the concept of replacing a pile group with an equivalent raft at a certain depth for simplified settlement calculations.
*   **Solve numerical problems related to pile group settlement using the equivalent raft concept:** Apply the equivalent raft concept to solve practical engineering problems involving the settlement of pile groups in clay.

---

### 1. Geotechnical Design of Piles from SPT and CPT Values

#### 1.1 Introduction to Deep Foundations (Piles)

*   **Definition:** Piles are slender structural elements, usually made of concrete, steel, or timber, that are driven or bored into the ground to transfer foundation loads to deeper, more competent soil strata.
*   **Purpose:**
    *   To carry heavy loads from structures that cannot be supported by shallow foundations.
    *   To resist uplift forces.
    *   To resist lateral loads.
    *   To improve the bearing capacity of weak soils by reaching a stronger layer.
    *   To reduce settlement.
*   **Types of Piles:** (Brief mention, as the focus is on design from soil parameters)
    *   Based on installation: Driven piles (prefabricated), bored piles (cast-in-situ).
    *   Based on material: Concrete piles, steel piles, timber piles.
    *   Based on load transfer mechanism: End-bearing piles, friction piles, combination piles.

#### 1.2 Pile Capacity Estimation using SPT Values

*   **Standard Penetration Test (SPT):**
    *   **Description:** A dynamic in-situ testing method that measures the resistance of the soil to penetration by a standard split-spoon sampler.
    *   **Parameter:** The Standard Penetration Resistance, *N* (blows per 300 mm penetration after a seating drive of 150 mm).
    *   **Corrections to N:**
        *   *N<sub>60</sub>*: Correction for hammer energy (typically 60% of the actual energy).
        *   *N<sub>corr</sub>*: Correction for overburden pressure. $N_{corr} = 17.7 \times N_{60} / (0.79 + 0.035 \times \sigma'_{v})$ (for cohesionless soils, where $\sigma'_{v}$ is the effective overburden pressure).
*   **Empirical Methods for Pile Capacity from SPT:**
    *   **General Principle:** Pile capacity is related to the *N* value, which reflects the soil's density and stiffness.
    *   **Allowable Load:** Typically calculated as the ultimate load divided by a Factor of Safety (FS), commonly ranging from 2.5 to 3.0.
    *   **Methods:**
        *   **Meyerhof's Method:**
            *   **End Bearing Capacity ($Q_p$)**: $Q_p = 40 \times N_{corr} \times D \times B$ (kN) for driven piles, where $N_{corr}$ is the average corrected SPT blow count below the pile tip, $D$ is pile embedment depth (m), and $B$ is pile diameter (m).
            *   **Skin Friction Capacity ($Q_s$)**: $Q_s = 2 \times N_{avg} \times L \times B$ (kN) for driven piles, where $N_{avg}$ is the average corrected SPT blow count along the pile shaft, and $L$ is pile length (m).
            *   **Ultimate Load ($Q_u$)**: $Q_u = Q_p + Q_s$.
            *   **Note:** Meyerhof's method is generally considered more conservative for driven piles.
        *   **Terzaghi and Peck's Method:**
            *   **End Bearing Capacity ($Q_p$)**: $Q_p = 115 \times N_{corr} \times A_p$ (kN/m²) for pile base area $A_p$, where $N_{corr}$ is the average corrected SPT blow count in the layer immediately below the pile tip (within 2B below the tip).
            *   **Skin Friction Capacity ($Q_s$)**: $Q_s = 20 \times N_{avg} \times L_{shaft}$ (kN/m²) for the pile shaft area $L_{shaft}$, where $N_{avg}$ is the average corrected SPT blow count along the pile shaft.
            *   **Ultimate Load ($Q_u$)**: $Q_u = Q_p + Q_s$.
        *   **General Considerations for SPT methods:**
            *   These are empirical correlations and should be used with caution.
            *   The *N* values should be corrected and averaged appropriately for different soil layers.
            *   Local experience and calibrating with pile load tests are highly recommended.

#### 1.3 Pile Capacity Estimation using CPT Values

*   **Cone Penetration Test (CPT):**
    *   **Description:** A quasi-static in-situ testing method that measures the resistance of the soil to the penetration of a conical tip.
    *   **Parameters:**
        *   **Cone Resistance ($q_c$)**: The resistance per unit area at the cone tip.
        *   **Sleeve Friction ($f_s$)**: The frictional resistance along a calibrated sleeve mounted behind the cone.
*   **Empirical Methods for Pile Capacity from CPT:**
    *   **General Principle:** CPT provides more continuous and detailed soil information than SPT. Correlations are typically based on $q_c$ and $f_s$.
    *   **Methods:**
        *   **Schmertmann's Method (for end bearing):**
            *   $Q_p = A_p \times q_{c,avg} \times K_p$, where $A_p$ is the pile base area, $q_{c,avg}$ is the average cone resistance within a zone of influence (typically 2B above and 8B below the pile tip), and $K_p$ is a bearing capacity factor (e.g., for normally consolidated clays, $K_p = 1$; for sands, $K_p$ can range from 1 to 2).
        *   **API RP 2A Method (for friction piles in clay):**
            *   $Q_s = \sum A_s \times f_s$, where $A_s$ is the pile shaft surface area in a given soil layer, and $f_s$ is the unit skin friction.
            *   For normally consolidated clays: $f_s = \alpha \times s_u$, where $s_u$ is the undrained shear strength from CPT ($s_u \approx q_c / K_c$, where $K_c$ is a cone factor, typically 10-15). The adhesion factor $\alpha$ depends on the clay plasticity and pile type.
            *   For overconsolidated clays: The relationship is more complex and often involves effective stress parameters.
        *   **General Considerations for CPT methods:**
            *   CPT methods generally offer more reliable predictions than SPT methods, especially for sensitive clays and layered soils.
            *   Careful selection of the relevant $q_c$ and $f_s$ values in the zone of influence is crucial.
            *   The choice of cone factor ($K_c$) and adhesion factor ($\alpha$) significantly impacts the results.

---

### 2. Number and Spacing of Piles in a Group

#### 2.1 Introduction to Pile Groups

*   **Definition:** A group of piles working together to support a common structural load, typically placed under a pile cap.
*   **Purpose:**
    *   To distribute a large structural load over a wider area of soil.
    *   To increase the overall bearing capacity of the foundation.
    *   To reduce settlement compared to a single large pile.
*   **Pile Group Efficiency ($E_g$)**:
    *   **Definition:** The ratio of the bearing capacity of a pile group to the sum of the bearing capacities of individual piles. $E_g = Q_{ug} / (n \times Q_u)$, where $Q_{ug}$ is the ultimate bearing capacity of the group, and $n$ is the number of piles in the group, and $Q_u$ is the ultimate capacity of a single pile.
    *   **Block Failure:** In clay, at close spacing, piles can fail as a composite block.
    *   **Friction Fatigue:** In sand, at close spacing, the total skin friction of the group may be less than the sum of individual pile skin frictions.
    *   **Empirical Rules for Efficiency:**
        *   **Friction Piles in Clay:** $E_g = 1 - (\theta / 90) \times (n - 1) + 2d/B$ (where $\theta$ is the angle of friction between soil and pile, $n$ is the number of piles, $d$ is pile diameter, $B$ is pile spacing).
        *   **End-Bearing Piles in Sand:** Generally, $E_g \approx 1$, especially at wider spacings.
        *   **General Trend:** As spacing increases, efficiency tends to approach 1.
*   **Spacing of Piles:**
    *   **General Guidelines:**
        *   **Centre-to-Centre Spacing:** Usually 2.5 to 4 times the pile diameter ($B$) or width for square/rectangular piles.
        *   **Minimum Spacing:** Often limited to $3B$ for driven piles to avoid excessive heave during installation. For bored piles, closer spacing might be permissible if proper construction techniques are used.
        *   **Purpose of Spacing:** To ensure adequate soil support for each pile and to minimize reduction in group efficiency.
    *   **Effect of Spacing on Capacity:**
        *   **Narrow Spacing:** Can lead to overlapping zones of stress and strain, reducing individual pile capacity and potentially causing group failure in a "block."
        *   **Wide Spacing:** Each pile acts more independently, and the group capacity approaches the sum of individual pile capacities. However, very wide spacing can lead to excessive settlement.

#### 2.2 Design Procedure for Pile Groups

1.  **Estimate the load per pile:** Divide the total structural load by the number of piles in the group.
2.  **Determine the capacity of a single pile:** Using SPT or CPT data and appropriate methods (as discussed in Section 1).
3.  **Select the number of piles:** Based on the load per pile and the capacity of a single pile, an initial estimate of the number of piles can be made.
4.  **Determine pile spacing:** Based on empirical guidelines to maintain adequate group efficiency and avoid installation problems.
5.  **Calculate the ultimate capacity of the pile group:**
    *   **Method 1 (Using Group Efficiency):** $Q_{ug} = E_g \times n \times Q_u$ (where $Q_u$ is the capacity of a single pile). This is more relevant for cohesive soils where efficiency can be significantly less than 1.
    *   **Method 2 (Block Failure):** For closely spaced piles in clay, calculate the bearing capacity of the entire block of soil and piles, and the skin friction along the perimeter of the block.
6.  **Check for allowable bearing pressure:** Ensure that the load on the group does not exceed its allowable capacity, considering a suitable factor of safety.
7.  **Settlement Analysis:** This is often the critical design criterion, especially for pile groups. (Discussed in Section 3).

---

### 3. Settlement of Pile Groups in Clay

#### 3.1 Factors Affecting Settlement of Pile Groups in Clay

*   **Soil Properties:**
    *   **Undrained Shear Strength ($s_u$):** Lower $s_u$ leads to higher settlement.
    *   **Compressibility:** Highly compressible clays will experience larger settlements.
    *   **Overconsolidation Ratio (OCR):** Overconsolidated clays are less compressible.
*   **Pile Group Geometry:**
    *   **Spacing:** Closer spacing generally leads to higher settlement due to overlapping stress zones.
    *   **Number of piles:** More piles can lead to higher settlement if not designed carefully.
*   **Pile Properties:**
    *   **Stiffness:** Stiffer piles (e.g., concrete, steel) will deform less than more flexible piles (e.g., timber).
    *   **Load Distribution:** Uneven load distribution among piles can cause differential settlement.
*   **Load Magnitude:** Higher applied loads will result in larger settlements.

#### 3.2 Equivalent Raft Concept

*   **Concept:** The settlement of a pile group can be approximated by treating the pile group as a rigid or flexible raft embedded at a certain depth within the soil. This simplifies the complex load distribution within the pile group.
*   **Equivalent Raft Depth ($D_e$):** The depth at which the equivalent raft is assumed to be located. Common approaches:
    *   **At the pile cap level:** If the pile cap is shallow.
    *   **At a depth below the pile cap:** Typically $2/3$ of the pile length, or at the level of the "effective base" of the pile group where the majority of the load is transferred.
*   **Equivalent Raft Area ($A_e$):** The area of the equivalent raft. This is often taken as the area enclosed by the outer piles plus an additional width around the perimeter, for example, half the spacing between the outer piles and adjacent piles. A common approach is to consider the area of the pile group plus a width of $B$ (average pile spacing) on all sides.
*   **Calculation Approach:**
    1.  **Determine the equivalent raft dimensions and embedment depth.**
    2.  **Estimate the total load on the pile group.**
    3.  **Determine the equivalent stiffness of the soil layer where the raft is embedded.** This is often based on an average modulus of elasticity ($E_s$) obtained from CPT or SPT data, or directly from laboratory tests.
    4.  **Use elastic settlement formulas for rafts:**
        *   For a flexible raft on an elastic soil layer: $S = q_{avg} \times B' \times I \times (1 - \mu^2) / E_s$, where $q_{avg}$ is the average pressure on the raft, $B'$ is the characteristic width of the raft, $I$ is an influence factor dependent on the raft shape and embedment depth, $\mu$ is Poisson's ratio, and $E_s$ is the modulus of elasticity of the soil.
        *   For a rigid raft: The settlement is uniform across the raft.

#### 3.3 Settlement Calculations in Clay using Elastic Theory (Simplified)

*   **Schmertmann's Method (for settlement):** While primarily for sands, principles can be adapted. It involves calculating settlement at the base and along the shaft.
*   **Burland and Burbidge Method (for settlement):** A widely used empirical method for pile groups in clay.
    *   **Settlement of a single pile ($S_1$)**: $S_1 = q_{pile} \times C$, where $q_{pile}$ is the load per pile and $C$ is a factor that depends on the pile length, diameter, and soil properties.
    *   **Settlement of a pile group ($S_{group}$)**: $S_{group} = S_1 \times \beta$, where $\beta$ is a group settlement factor.
        *   $\beta = (\frac{(m-1) + (n-1)}{(m \times n)}) \times E_g + (\frac{1}{m \times n})$, where $m$ is the number of piles along the width and $n$ is the number of piles along the length of the group. $E_g$ is the group efficiency.
        *   **Note:** This method is primarily for cohesive soils.
*   **Equivalent Raft Concept for Settlement:**
    1.  **Define the equivalent raft:** Determine the width ($B_{eq}$) and embedment depth ($D_{eq}$) of the equivalent raft. $B_{eq}$ can be considered as the width of the area enclosed by the outer piles plus the average spacing on each side.
    2.  **Determine the average pressure ($q_{avg}$) on the equivalent raft:** $q_{avg} = \text{Total Group Load} / A_{eq}$, where $A_{eq}$ is the area of the equivalent raft.
    3.  **Estimate the modulus of elasticity ($E_s$) for the soil layer beneath the raft.** This can be estimated from CPT ($E_s \approx 2-4 \times q_c$) or SPT ($E_s \approx 500 \times N_{corr}$ for sands). For clays, it's related to $s_u$ and OCR.
    4.  **Use elastic settlement formulas for a raft:**
        *   $S_{group} = q_{avg} \times B_{eq} \times (1 - \mu^2) \times I_f / E_s$
        *   Where $I_f$ is an influence factor. For a flexible raft on a semi-infinite elastic medium, $I_f$ depends on the shape and rigidity of the raft. A common approximation for a square or circular raft is $I_f \approx 1.0$ (for flexible base) to $0.8$ (for rigid base).

---

### 4. Numerical Problems

#### Problem 1: Pile Capacity from SPT

A single concrete pile of 0.4 m diameter and 15 m length is to be driven into a sand formation. SPT *N* values recorded at different depths are as follows:

| Depth (m) | SPT N | $N_{60}$ | $N_{corr}$ | Effective Overburden Pressure $\sigma'_{v}$ (kPa) |
| :-------- | :---- | :------- | :--------- | :-------------------------------------------- |
| 1.5       | 12    | 10       | 9.3        | 15                                            |
| 3.0       | 15    | 12       | 10.8       | 30                                            |
| 4.5       | 20    | 16       | 14.1       | 45                                            |
| 6.0       | 25    | 20       | 16.9       | 60                                            |
| 7.5       | 30    | 24       | 19.5       | 75                                            |
| 9.0       | 35    | 28       | 22.0       | 90                                            |
| 10.5      | 40    | 32       | 24.3       | 105                                           |
| 12.0      | 45    | 36       | 26.6       | 120                                           |
| 13.5      | 50    | 40       | 28.7       | 135                                           |

Using Meyerhof's method, calculate the ultimate bearing capacity of the pile. Assume a Factor of Safety (FS) of 3.0 for allowable load.

**Solution:**

*   **Pile diameter (B) = 0.4 m**
*   **Pile length (L) = 15 m**

**End Bearing Capacity ($Q_p$):**
Meyerhof's method for end bearing uses $N_{corr}$ below the pile tip. We consider the layer within 2B below the tip.
Pile tip is at 15 m. So, we consider the zone from 15 m up to 15 - 2*0.4 = 14.2 m.
The relevant depths are 13.5 m. Let's consider the average $N_{corr}$ from 12 m to 15 m (as if the pile ends at 15m, we need values below it, so we can assume the layers extend). Let's assume the last recorded value at 13.5m is representative of the layers below for $N_{corr}$ for the tip.
Let's consider the average $N_{corr}$ from 12m to 13.5m, and assume the layer below 13.5m also has similar resistance. However, the question states "below the pile tip". If the pile tip is at 15m, we'd need values from 15m to 17m. Since we don't have them, let's assume the value at 13.5m is the representative $N_{corr}$ below the tip for this problem or average of 12m and 13.5m values.
Let's take $N_{corr}$ at 13.5m = 28.7. Some methods might take the average of the $N_{corr}$ values in the zone 2B below the tip. Let's assume $N_{corr}$ below the tip is 28.7 for simplicity.
$Q_p = 40 \times N_{corr} \times D \times B$
Here, $D$ is the embedment depth, which is 15m.
$Q_p = 40 \times 28.7 \times 15 \times 0.4$
$Q_p = 172200 \text{ N} = 172.2 \text{ kN}$

**Skin Friction Capacity ($Q_s$):**
Meyerhof's method for skin friction uses the average $N_{corr}$ along the pile shaft.
Average $N_{corr}$ along the shaft (from 0 to 15m):
Average $N_{corr} = (9.3 + 10.8 + 14.1 + 16.9 + 19.5 + 22.0 + 24.3 + 26.6 + 28.7) / 9$
Average $N_{corr} = 19.45$
$Q_s = 2 \times N_{avg} \times L \times B$
$Q_s = 2 \times 19.45 \times 15 \times 0.4$
$Q_s = 233.4 \text{ kN}$

**Ultimate Load ($Q_u$):**
$Q_u = Q_p + Q_s = 172.2 \text{ kN} + 233.4 \text{ kN} = 405.6 \text{ kN}$

**Allowable Load ($Q_{allow}$):**
$Q_{allow} = Q_u / FS = 405.6 \text{ kN} / 3.0 = 135.2 \text{ kN}$

**Answer:** The ultimate bearing capacity of the pile is 405.6 kN, and the allowable load is 135.2 kN.

---

#### Problem 2: Settlement of Pile Group using Equivalent Raft Concept

A group of 9 piles (3x3 square arrangement) of 0.5 m diameter and 20 m length are embedded in a clay layer. The center-to-center spacing between piles is 1.5 m. The pile cap is at ground level. The total load on the pile group is 5000 kN.
The clay layer has an average undrained shear strength ($s_u$) of 50 kPa and an average modulus of elasticity ($E_s$) of 15 MPa. The clay is normally consolidated.

Using the equivalent raft concept, estimate the settlement of the pile group. Assume the equivalent raft is located at a depth of $2/3$ of the pile length.

**Solution:**

*   **Pile diameter (B) = 0.5 m**
*   **Spacing (s) = 1.5 m**
*   **Number of piles (n) = 9 (3x3)**
*   **Pile length (L) = 20 m**
*   **Total Group Load ($Q_{group}$) = 5000 kN**
*   **$s_u = 50$ kPa**
*   **$E_s = 15$ MPa = 15000 kPa**

**1. Determine the equivalent raft dimensions:**
*   The group is 3x3 piles with 1.5 m spacing.
*   Width of the group = $2 \times 1.5 \text{ m} + 0.5 \text{ m} = 3.5 \text{ m}$.
*   Length of the group = $2 \times 1.5 \text{ m} + 0.5 \text{ m} = 3.5 \text{ m}$.
*   **Equivalent Raft Width ($B_{eq}$):** Let's consider the area enclosed by the outer piles plus half the spacing on each side.
    *   Width of equivalent raft = $3.5 \text{ m} + 0.5 \times 1.5 \text{ m} + 0.5 \times 1.5 \text{ m} = 3.5 + 1.5 = 5.0 \text{ m}$.
    *   Area of equivalent raft ($A_{eq}$) = $B_{eq}^2 = (5.0 \text{ m})^2 = 25.0 \text{ m}^2$.

**2. Determine the embedment depth of the equivalent raft:**
*   $D_{eq} = (2/3) \times L = (2/3) \times 20 \text{ m} = 13.33 \text{ m}$.

**3. Calculate the average pressure on the equivalent raft:**
*   $q_{avg} = Q_{group} / A_{eq} = 5000 \text{ kN} / 25.0 \text{ m}^2 = 200 \text{ kPa}$.

**4. Estimate the modulus of elasticity of the soil:**
*   We are given $E_s = 15$ MPa = 15000 kPa. This modulus is assumed to be valid for the soil layer beneath the equivalent raft.

**5. Use elastic settlement formula for a raft:**
*   We can use a simplified formula for settlement. For a flexible square footing on a semi-infinite elastic medium: $S = q \times B \times (1 - \mu^2) / E_s$.
*   Let's assume Poisson's ratio ($\mu$) for clay is 0.5 (highly saturated).
*   $S_{group} = q_{avg} \times B_{eq} \times (1 - \mu^2) / E_s$
*   $S_{group} = 200 \text{ kPa} \times 5.0 \text{ m} \times (1 - 0.5^2) / 15000 \text{ kPa}$
*   $S_{group} = 200 \times 5.0 \times 0.75 / 15000$
*   $S_{group} = 750 / 15000 = 0.05 \text{ m} = 50 \text{ mm}$.

**Refinement (using influence factor):**
A more refined approach would use influence factors that account for embedment depth and raft shape. For a square footing at depth $D/B$, the influence factor can be obtained from charts. For $D_{eq}/B_{eq} = 13.33/5.0 = 2.67$, the influence factor might be around 1.0 to 1.2 depending on the chart and assumptions.

Let's use a simpler approach if a specific influence factor chart is not provided, acknowledging the limitation. For preliminary estimates, the above formula is often used.

**Considering Block Failure/Group Efficiency for Settlement:**
The equivalent raft concept inherently accounts for some of the group effects. If we were to use the Burland and Burbidge method, we'd first need the capacity of a single pile. For clay, $s_u = 50$ kPa. Let's assume a pile of 0.5m diameter and length 20m. Using a simple empirical correlation:
Allowable capacity of single pile $Q_{allow,single}$ might be around $9 \times s_u \times A_p + 2 \times s_u \times A_s$. (This is a simplified estimate).
$A_p = \pi \times (0.5/2)^2 = 0.196$ m$^2$. $A_s = \pi \times 0.5 \times 20 = 31.4$ m$^2$.
$Q_{allow,single} \approx 9 \times 50 \times 0.196 + 2 \times 50 \times 31.4 = 88.2 + 3140 = 3228.2$ kN.
Total allowable capacity of 9 piles (if no group reduction) = $9 \times 3228.2 \approx 29054$ kN. This is much higher than the applied load of 5000 kN, indicating the load is low for the number of piles.

**Let's re-evaluate the equivalent raft concept for settlement:**
The settlement calculation via the equivalent raft is generally considered more applicable when the load is relatively low and settlement is the governing factor. The equivalent raft provides an average stress state.

**Answer:** The estimated settlement of the pile group using the equivalent raft concept is 50 mm.

---

### 5. Practice Questions

1.  **SPT vs. CPT:** Briefly explain the advantages of using CPT over SPT for pile capacity estimation.
2.  **Pile Group Efficiency:** Define pile group efficiency and explain why it is often less than 1.
3.  **Equivalent Raft:** What is the underlying principle of the equivalent raft concept for settlement analysis of pile groups?
4.  **Problem:** A group of 16 piles (4x4) of 0.4 m diameter and 18 m length is arranged with a center-to-center spacing of 1.2 m. The pile cap is at ground level. The total load on the pile group is 8000 kN. The soil is a uniform sand with an average corrected SPT blow count ($N_{corr}$) of 20. The soil has an average modulus of elasticity ($E_s$) of 40 MPa.
    *   Estimate the allowable load capacity of a single pile using Terzaghi and Peck's method (assume FS = 3).
    *   Estimate the total allowable capacity of the pile group, considering a group efficiency ($E_g$) of 0.85.
    *   Using the equivalent raft concept (assume raft at $2/3$ pile length), estimate the settlement of the pile group. Assume the equivalent raft width is the group width plus the average spacing on each side.

---

### 6. Important Points to Remember

*   **SPT and CPT are empirical methods:** Results should be used with caution and validated with pile load tests whenever possible.
*   **Corrections for SPT:** Always apply corrections for hammer energy and overburden pressure to *N* values.
*   **Zones of Influence:** For both end bearing and skin friction calculations, the relevant soil properties are within specific zones around the pile.
*   **Pile Group Settlement is Critical:** For many pile group designs, settlement governs the design, not just the ultimate capacity.
*   **Group Efficiency in Clay:** In cohesive soils, closely spaced piles can have reduced efficiency due to overlapping stress bulbs and potential block failure.
*   **Equivalent Raft:** A useful simplification for settlement analysis, but the choice of raft dimensions and embedment depth significantly impacts the results.
*   **Clay Settlement:** Settlement in clay is often governed by consolidation and can be time-dependent, unlike settlement in sands which is primarily immediate. The equivalent raft concept provides an immediate settlement estimate based on elastic properties.

---
