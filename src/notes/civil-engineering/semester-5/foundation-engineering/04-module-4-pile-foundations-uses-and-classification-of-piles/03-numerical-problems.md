---
title: "Numerical problems"
subject: "FOUNDATION ENGINEERING"
module: "Module 4: Pile foundations: Uses and classification of piles "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e43"
status: "completed"
scrapedAt: "2026-05-20T18:48:42.442Z"
---
# FOUNDATION ENGINEERING: Module 4 - Pile Foundations: Numerical Problems

This module focuses on applying theoretical concepts to solve practical engineering problems related to pile foundations. We will delve into numerical problems concerning the bearing capacity of piles, considering different soil conditions and failure mechanisms.

## Learning Outcomes

By the end of this module, you will be able to:

*   Calculate the ultimate bearing capacity of single piles in cohesive soils (saturated clays).
*   Calculate the ultimate bearing capacity of single piles in cohesionless soils (sands and gravels).
*   Determine the safe load capacity of a pile using appropriate factors of safety.
*   Understand and apply different methods for pile capacity calculation, including static and dynamic methods.
*   Analyze the contribution of skin friction and end bearing to the total pile capacity.
*   Understand the concept of group action of piles and its effect on bearing capacity.
*   Calculate the settlement of single piles.
*   Perform basic analyses for negative skin friction.

---

## 1. Ultimate Bearing Capacity of Single Piles

The ultimate bearing capacity ($Q_u$) of a single pile is the maximum load the pile can carry before failure. It is generally considered as the sum of:

*   **End Bearing Capacity ($Q_p$):** The resistance offered by the soil at the pile tip.
*   **Skin Friction Capacity ($Q_s$):** The resistance offered by the soil along the shaft of the pile.

$$Q_u = Q_p + Q_s$$

### 1.1. Piles in Cohesive Soils (Saturated Clays)

In saturated clays, the shear strength is primarily characterized by the undrained cohesion ($c_u$ or $\phi=0$ condition).

**1.1.1. End Bearing Capacity ($Q_p$)**

The end bearing capacity is calculated using the following general bearing capacity equation adapted for piles:

$$Q_p = A_p \times c_u \times N_c + A_b \times \gamma \times D \times N_q$$

However, for saturated clays under undrained conditions ($\phi=0$), the bearing capacity factor $N_q$ is approximately zero, and the $N_c$ factor is typically taken as 9.

$$Q_p \approx A_p \times c_u \times 9$$

Where:
*   $A_p$ = Area of the pile tip (for a circular pile, $A_p = \pi D^2/4$)
*   $c_u$ = Undrained cohesion of the soil at the pile tip
*   $D$ = Diameter of the pile
*   $N_c$ = Bearing capacity factor (typically 9 for piles in clay)

**1.1.2. Skin Friction Capacity ($Q_s$)**

The skin friction capacity is calculated by summing the frictional resistance along the pile shaft. The most common approach is the $\alpha$-method:

$$Q_s = \sum_{i=1}^{n} f_{si} \times A_{si}$$

Where:
*   $f_{si}$ = Unit skin friction resistance in layer $i$
*   $A_{si}$ = Surface area of the pile shaft in contact with layer $i$
*   $n$ = Number of soil layers along the pile shaft

The unit skin friction ($f_{si}$) is calculated as:

$$f_{si} = \alpha \times c_u \times \bar{c}_u$$

Where:
*   $\alpha$ = Adhesion factor, which depends on the ratio of $c_u$ and the undrained shear strength of the soil mass. Typical values are given in charts or empirical formulas.
    *   For normally consolidated clays: $\alpha \approx 0.5$ to $1.0$
    *   For overconsolidated clays: $\alpha$ decreases as OCR increases.
*   $\bar{c}_u$ = Average undrained cohesion over the length of the pile shaft in layer $i$.

**Important Considerations for Cohesive Soils:**

*   **Adhesion Factor ($\alpha$):** The value of $\alpha$ is crucial and depends on the type of clay and the installation method of the pile.
*   **Base Roughness:** The assumption of rough base for end bearing is generally made.
*   **Negative Skin Friction (Drag Load):** If there is a consolidation of surrounding soil (e.g., due to a fill on soft clay), downward movement of the soil can exert a downward drag force on the pile. This is discussed later.

**Example 1.1 (Pile in Clay):**

A concrete pile of 0.5 m diameter and 20 m length is driven into a deep deposit of soft clay. The undrained cohesion ($c_u$) of the clay is 40 kPa. The adhesion factor ($\alpha$) is 0.7. Calculate the ultimate bearing capacity of the pile.

**Solution:**

*   **Pile Diameter ($D$):** 0.5 m
*   **Pile Length ($L$):** 20 m
*   **Undrained Cohesion ($c_u$):** 40 kPa
*   **Adhesion Factor ($\alpha$):** 0.7

**1. End Bearing Capacity ($Q_p$):**
   *   Area of pile tip ($A_p$) = $\pi \times (0.5 \text{ m})^2 / 4 = 0.196 \text{ m}^2$
   *   $Q_p = A_p \times c_u \times 9$
   *   $Q_p = 0.196 \text{ m}^2 \times 40 \text{ kPa} \times 9 = 705.6 \text{ kN}$

**2. Skin Friction Capacity ($Q_s$):**
   *   Surface area of pile shaft ($A_s$) = $\pi \times D \times L = \pi \times 0.5 \text{ m} \times 20 \text{ m} = 31.42 \text{ m}^2$
   *   Unit skin friction ($f_s$) = $\alpha \times c_u = 0.7 \times 40 \text{ kPa} = 28 \text{ kPa}$
   *   $Q_s = f_s \times A_s = 28 \text{ kPa} \times 31.42 \text{ m}^2 = 879.76 \text{ kN}$

**3. Ultimate Bearing Capacity ($Q_u$):**
   *   $Q_u = Q_p + Q_s = 705.6 \text{ kN} + 879.76 \text{ kN} = 1585.36 \text{ kN}$

---

### 1.2. Piles in Cohesionless Soils (Sands and Gravels)

In cohesionless soils, the shear strength is characterized by the angle of internal friction ($\phi$).

**1.2.1. End Bearing Capacity ($Q_p$)**

The end bearing capacity is calculated using the general bearing capacity equation, adapted for piles. The relevant bearing capacity factors are $N_q$ and $N_\gamma$.

$$Q_p = A_p \times (\sigma'_v \times N_q + 0.5 \times D \times \gamma' \times N_\gamma)$$

However, a more commonly used and often simpler approach for piles is to use the following form, where the bearing pressure at the base is related to the effective vertical stress and a bearing capacity factor:

$$Q_p = A_p \times P_p$$

Where $P_p$ is the ultimate bearing pressure at the pile tip. Various empirical correlations exist for $P_p$, often expressed in terms of the cone resistance ($q_c$) from CPT or the standard penetration test (SPT) $N$-value.

**1.2.2. Skin Friction Capacity ($Q_s$)**

The skin friction capacity is calculated by summing the frictional resistance along the pile shaft. The most common approaches are the $\beta$-method and the $K_a$ or $K_0$ method.

**a) $\beta$-Method:**

$$Q_s = \sum_{i=1}^{n} f_{si} \times A_{si}$$

Where:
*   $f_{si}$ = Unit skin friction resistance in layer $i$
*   $A_{si}$ = Surface area of the pile shaft in contact with layer $i$

The unit skin friction ($f_{si}$) is calculated as:

$$f_{si} = \beta \times \sigma'_v$$

Where:
*   $\beta$ = Coefficient of lateral earth pressure, $\beta = K \times \tan(\delta)$
*   $\sigma'_v$ = Effective vertical stress at the midpoint of the layer
*   $K$ = Coefficient of lateral earth pressure (related to $\phi$). Typically $K = 1 - \sin(\phi)$ for normally consolidated soils. For overconsolidated soils, $K$ can be higher.
*   $\delta$ = Angle of friction between the pile material and the soil. For concrete piles in sand, $\delta$ is often taken as $0.75\phi$ to $\phi$.

**b) $K_a$ or $K_0$ Method (Rankine or Coulomb Theory):**

This method considers the earth pressure acting on the pile shaft.

$$Q_s = \sum_{i=1}^{n} (\bar{\sigma}'_v \times K \times \tan(\delta) \times P_i) \times A_{si}$$

Where:
*   $\bar{\sigma}'_v$ = Average effective vertical stress over the layer
*   $K$ = Coefficient of lateral earth pressure (can be $K_0$ for undrained, $K_a$ for friction, or an empirical value)
*   $\delta$ = Angle of friction between pile and soil.
*   $P_i$ = Perimeter of the pile in layer $i$.

**Important Considerations for Cohesionless Soils:**

*   **Effective Stress:** All calculations must be based on effective stresses.
*   **Angle of Friction ($\phi$):** The value of $\phi$ is critical. It can be obtained from lab tests or in-situ tests like SPT or CPT.
*   **Lateral Earth Pressure Coefficient ($K$):** This is a key parameter and can vary significantly based on soil conditions and pile installation.
*   **Empirical Correlations:** Due to the complexity and variability of sands, empirical correlations using SPT or CPT data are widely used for end bearing and skin friction.

**Commonly Used Empirical Correlations (for illustrative purposes):**

**Using SPT $N$-values:**

*   **End Bearing ($q_p$) (Meyerhof):**
    *   For driven piles: $q_p = 40 N_{60} (L/D)$ for $L/D \le 10$ and $q_p = 400 N_{60}$ for $L/D > 10$. (kN/m²)
    *   For bored piles: $q_p = 20 N_{60} (L/D)$ for $L/D \le 10$ and $q_p = 200 N_{60}$ for $L/D > 10$. (kN/m²)
    *   $N_{60}$ = $N$-value corrected for energy and hammer type.
    *   **Note:** These are simplified forms. Actual formulas often have caps and are more complex.
*   **Skin Friction ($f_s$) (Meyerhof):**
    *   $f_s = 2 N_{60}$ (kN/m²) for driven piles.
    *   $f_s = 1 N_{60}$ (kN/m²) for bored piles.

**Using CPT Cone Resistance ($q_c$):**

*   **End Bearing ($q_p$) (De Ruiter & Beringen):**
    *   $q_p = k_c q_c$ where $k_c$ is a coefficient depending on pile type and soil.
*   **Skin Friction ($f_s$) (Schmertmann):**
    *   $f_s = C_1 q_c + C_2$ where $C_1$ and $C_2$ are empirical constants.

**Example 1.2 (Pile in Sand):**

A concrete pile of 0.4 m diameter and 15 m length is driven into a uniform sand deposit. The effective unit weight of the sand is $18 \text{ kN/m}^3$. The angle of internal friction ($\phi$) is $35^\circ$. The angle of friction between the pile and sand ($\delta$) can be taken as $0.75\phi$. The average $N_{60}$ value from SPT soundings is 25. Use Meyerhof's empirical method to calculate the ultimate bearing capacity.

**Solution:**

*   **Pile Diameter ($D$):** 0.4 m
*   **Pile Length ($L$):** 15 m
*   **Effective Unit Weight ($\gamma'$):** $18 \text{ kN/m}^3$
*   **Angle of Internal Friction ($\phi$):** $35^\circ$
*   **Angle of Friction ($\delta$):** $0.75 \times 35^\circ = 26.25^\circ$
*   **Average $N_{60}$:** 25

**Method 1: Using $\beta$-Method (Theoretical Approach)**

**1. End Bearing Capacity ($Q_p$):**
   *   Area of pile tip ($A_p$) = $\pi \times (0.4 \text{ m})^2 / 4 = 0.1257 \text{ m}^2$
   *   Effective vertical stress at the tip ($\sigma'_{v, tip}$) = $18 \text{ kN/m}^3 \times 15 \text{ m} = 270 \text{ kPa}$
   *   For sands, $N_q$ for $\phi = 35^\circ$ is approximately 41.4 (from tables).
   *   $Q_p = A_p \times (\sigma'_{v, tip} \times N_q)$  (Simplified form, ignoring the $0.5 \gamma D N_\gamma$ term which is usually small for piles)
   *   $Q_p = 0.1257 \text{ m}^2 \times (270 \text{ kPa} \times 41.4) = 1406.6 \text{ kN}$

**2. Skin Friction Capacity ($Q_s$):**
   *   Surface area of pile shaft ($A_s$) = $\pi \times D \times L = \pi \times 0.4 \text{ m} \times 15 \text{ m} = 18.85 \text{ m}^2$
   *   Coefficient of lateral earth pressure ($K$) = $1 - \sin(\phi) = 1 - \sin(35^\circ) = 1 - 0.5736 = 0.4264$
   *   $\beta = K \times \tan(\delta) = 0.4264 \times \tan(26.25^\circ) = 0.4264 \times 0.4913 = 0.2095$
   *   Average effective vertical stress ($\bar{\sigma}'_v$) = $18 \text{ kN/m}^3 \times (15 \text{ m}/2) = 135 \text{ kPa}$
   *   Unit skin friction ($f_s$) = $\beta \times \bar{\sigma}'_v = 0.2095 \times 135 \text{ kPa} = 28.28 \text{ kPa}$
   *   $Q_s = f_s \times A_s = 28.28 \text{ kPa} \times 18.85 \text{ m}^2 = 533.1 \text{ kN}$

**3. Ultimate Bearing Capacity ($Q_u$):**
   *   $Q_u = Q_p + Q_s = 1406.6 \text{ kN} + 533.1 \text{ kN} = 1939.7 \text{ kN}$

**Method 2: Using Meyerhof's Empirical SPT Correlations**

**1. End Bearing Capacity ($Q_p$):**
   *   $L/D = 15 \text{ m} / 0.4 \text{ m} = 37.5$
   *   Since $L/D > 10$, $q_p = 400 N_{60}$ (for driven piles)
   *   $q_p = 400 \times 25 = 10000 \text{ kPa}$
   *   $Q_p = A_p \times q_p = 0.1257 \text{ m}^2 \times 10000 \text{ kPa} = 1257 \text{ kN}$

**2. Skin Friction Capacity ($Q_s$):**
   *   $f_s = 2 N_{60}$ (for driven piles)
   *   $f_s = 2 \times 25 = 50 \text{ kPa}$
   *   $Q_s = f_s \times A_s = 50 \text{ kPa} \times 18.85 \text{ m}^2 = 942.5 \text{ kN}$

**3. Ultimate Bearing Capacity ($Q_u$):**
   *   $Q_u = Q_p + Q_s = 1257 \text{ kN} + 942.5 \text{ kN} = 2199.5 \text{ kN}$

**Observation:** The empirical method provides a higher estimate in this case. It's important to use appropriate methods based on the available data and project requirements.

---

## 2. Safe Load Capacity

The safe load capacity ($Q_{safe}$) of a pile is determined by dividing the ultimate bearing capacity by a suitable factor of safety (FS).

$$Q_{safe} = \frac{Q_u}{FS}$$

The factor of safety for pile foundations typically ranges from **2.0 to 3.0**. The choice of FS depends on:
*   Reliability of soil data.
*   Accuracy of the bearing capacity calculation method.
*   Consequences of pile failure.
*   Installation method (driven vs. bored piles). Driven piles are generally considered more reliable, allowing for a slightly lower FS.

**Example 2.1 (Safe Load):**

From Example 1.1, the ultimate bearing capacity of a pile in clay is $1585.36 \text{ kN}$. If a factor of safety of 2.5 is used, calculate the safe load capacity.

**Solution:**

*   $Q_u = 1585.36 \text{ kN}$
*   $FS = 2.5$
*   $Q_{safe} = \frac{1585.36 \text{ kN}}{2.5} = 634.14 \text{ kN}$

---

## 3. Settlement of Single Piles

Settlement of a pile is a complex phenomenon and is influenced by the soil properties, pile geometry, and load applied. It can be estimated using various methods, including empirical correlations based on SPT or CPT data, or more advanced elastic theory solutions.

**Empirical Approach (Bhatia & Amrhein):**

A simplified approach relates the settlement ($S$) to the applied load ($Q$) and the ultimate bearing capacity ($Q_u$).

$$S = \frac{Q \times L}{A_p \times E_p} + \frac{Q_s}{A_s \times G_s}$$

This formula is a simplification, and more practical methods often involve charts or direct correlations with $N$-values or cone resistance.

**Simplified Empirical Estimate:**

For a uniformly loaded pile, the settlement ($S$) can be approximated as:

$$S \approx \frac{c_1 \times Q}{A_p \times E_p} + \frac{c_2 \times Q_s}{A_s \times G_s}$$

Where:
*   $c_1, c_2$ are empirical coefficients.
*   $E_p$ is the Young's modulus of the pile material.
*   $G_s$ is the shear modulus of the soil.

A more direct empirical method for sands relates settlement to SPT $N$-values:

$$S = C \times Q \times \sqrt{L/D}$$

Where $C$ is an empirical constant that depends on the soil type and $N$-value.

**Important Note:** Settlement calculations are often done for preliminary design, and actual settlement is best assessed through field load tests.

---

## 4. Negative Skin Friction (Drag Load)

Negative skin friction occurs when the soil surrounding the pile settles more than the pile itself. This can happen due to:
*   Deposition of a thick layer of soft soil on top of older soil.
*   Consolidation of a compressible layer beneath a relatively incompressible layer.
*   Buoyancy effects.
*   Swelling of clay soils.

This relative downward movement of soil creates a downward frictional force on the pile, known as the **drag load ($Q_{dr}$)**. This drag load acts as an additional downward force that must be considered in the pile's design capacity.

**Calculation of Drag Load:**

The drag load is calculated similarly to skin friction, but it's applied over the length of the pile embedded in the consolidating soil.

**In Cohesive Soils (Saturated Clays):**

$$Q_{dr} = \sum_{i=1}^{n} f_{dr,i} \times A_{si}$$

Where:
*   $f_{dr,i}$ = Unit drag load resistance in layer $i$.
*   $f_{dr,i} = \alpha^* \times c_u \times \bar{c}_u$ (similar to skin friction, but $\alpha^*$ might be taken as 1.0 for drag load in soft clays).
*   $A_{si}$ = Surface area of the pile shaft in contact with layer $i$.

**In Cohesionless Soils (Sands):**

$$Q_{dr} = \sum_{i=1}^{n} f_{dr,i} \times A_{si}$$

Where:
*   $f_{dr,i}$ = Unit drag load resistance in layer $i$.
*   $f_{dr,i} = \beta \times \sigma'_{v,dr}$ (where $\sigma'_{v,dr}$ is the effective vertical stress in the consolidating layer).

**Design Consideration:**

The ultimate load capacity of the pile considering drag load becomes:

$$Q_u = Q_p + Q_s - Q_{dr}$$

However, it is more conservative and common practice to increase the design load by the expected drag load:

$$Q_{design} = Q_{applied} + Q_{dr}$$

And ensure that the ultimate capacity (calculated using $Q_u = Q_p + Q_s$) is greater than $Q_{design}$ with the appropriate factor of safety.

**Example 4.1 (Negative Skin Friction):**

A pile of 0.5 m diameter and 25 m length is driven through a fill layer and into a soft clay layer. The fill has a thickness of 5 m and a unit weight of $18 \text{ kN/m}^3$. Below the fill is a soft clay layer of 20 m thickness with an average undrained cohesion ($c_u$) of 30 kPa. The soil is expected to consolidate, causing a drag load. Assume $\alpha = 1.0$ for drag load calculation. Calculate the drag load.

**Solution:**

*   **Pile Diameter ($D$):** 0.5 m
*   **Length of consolidating fill ($L_{fill}$):** 5 m
*   **Unit weight of fill ($\gamma_{fill}$):** $18 \text{ kN/m}^3$
*   **Consolidating clay layer:** From 5m to 25m depth.
*   **Average undrained cohesion in clay ($c_u$):** 30 kPa
*   **Adhesion factor for drag load ($\alpha^*$):** 1.0

**Drag Load Calculation:**

The drag load is exerted by the consolidating clay layer. We need to calculate the skin friction in this layer.

*   **Surface area of pile shaft in clay ($A_{s,clay}$):** $\pi \times D \times L_{clay}$
    *   The consolidating clay layer starts from depth 5m and extends to 25m, so its thickness is 20m.
    *   $A_{s,clay} = \pi \times 0.5 \text{ m} \times 20 \text{ m} = 31.42 \text{ m}^2$
*   **Unit drag load resistance ($f_{dr,clay}$):** $\alpha^* \times c_u = 1.0 \times 30 \text{ kPa} = 30 \text{ kPa}$
*   **Drag Load ($Q_{dr}$):** $f_{dr,clay} \times A_{s,clay} = 30 \text{ kPa} \times 31.42 \text{ m}^2 = 942.6 \text{ kN}$

**Important Note:** The fill layer itself, if it consolidates significantly, can also contribute to drag load. In this case, it's assumed the fill is stable or its consolidation is less significant.

---

## 5. Pile Groups

When piles are installed in groups, their behavior under load is not simply the sum of individual pile capacities due to **group effects**.

*   **Increased Bearing Capacity:** Sometimes, the group capacity can be higher than the sum of individual capacities due to the piles interlocking the soil and the base of the group acting as a large footing.
*   **Reduced Bearing Capacity:** More commonly, especially in cohesive soils, the shear strength mobilized in the soil mass between piles is lower than the intact soil shear strength, leading to a reduced group efficiency.
*   **Settlement:** Piles in a group generally settle more than single piles under the same average load per pile.

### 5.1. Bearing Capacity of Pile Groups

**In Cohesive Soils (Block Failure):**

The ultimate bearing capacity of a group of piles in cohesive soil can be calculated by considering the **block failure mechanism**. The pile group and the surrounding soil act as a single large block.

$$Q_{ug} = (A_{pg} \times c_u \times N_c) + (A_{sg} \times f_{sg})$$

Where:
*   $A_{pg}$ = Area of the base of the pile group (e.g., for a $2 \times 2$ group of circular piles with center-to-center spacing $s$ and diameter $D$, $A_{pg} \approx (2D+s)^2$).
*   $N_c$ = Bearing capacity factor for the block (typically 9).
*   $A_{sg}$ = Perimeter of the pile group.
*   $f_{sg}$ = Average skin friction along the perimeter of the group. This is often taken as the adhesion factor times the average cohesion.

The capacity of the group ($Q_{ug}$) is the *lesser* of:
1.  The sum of the individual pile capacities.
2.  The block capacity.

**Efficiency Factor ($E_f$):**

The group efficiency factor is defined as:

$$E_f = \frac{Q_{ug}}{n \times Q_u}$$

Where:
*   $Q_{ug}$ = Ultimate bearing capacity of the group.
*   $n$ = Number of piles in the group.
*   $Q_u$ = Ultimate bearing capacity of a single pile.

For spacing $\le 2.5D$, the group efficiency is usually less than 1.0. For spacing $\ge 3D$, the efficiency is often assumed to be 1.0, meaning no group reduction.

**In Cohesionless Soils:**

In cohesionless soils, group effects are less pronounced, and the efficiency factor is often assumed to be 1.0, meaning the group capacity is approximately $n \times Q_u$. However, settlement considerations usually dictate the spacing, which indirectly affects group behavior.

### 5.2. Spacing of Piles in Groups

Proper spacing is crucial to minimize negative group effects.
*   **Cohesive Soils:** Minimum spacing of $2.5D$ to $3.0D$ (center-to-center).
*   **Cohesionless Soils:** Minimum spacing of $3.0D$ to $3.5D$ (center-to-center).

**Example 5.1 (Pile Group in Clay):**

A group of 9 piles, arranged in a $3 \times 3$ square pattern, each with a diameter of 0.5 m and a length of 15 m. The center-to-center spacing is 1.5 m. The piles are driven into a soft clay with undrained cohesion ($c_u$) of 35 kPa. The adhesion factor ($\alpha$) is 0.8.
Calculate:
a) The ultimate bearing capacity of a single pile.
b) The ultimate bearing capacity of the pile group considering block failure.
c) The group efficiency factor.
d) The safe load capacity of the group with FS = 2.5.

**Solution:**

*   **Pile Diameter ($D$):** 0.5 m
*   **Pile Length ($L$):** 15 m
*   **Number of piles ($n$):** 9
*   **Spacing ($s$):** 1.5 m
*   **Undrained Cohesion ($c_u$):** 35 kPa
*   **Adhesion Factor ($\alpha$):** 0.8
*   **Factor of Safety (FS):** 2.5

**a) Ultimate Bearing Capacity of a Single Pile ($Q_u$):**
   *   $A_p = \pi \times (0.5)^2 / 4 = 0.196 \text{ m}^2$
   *   $Q_p = A_p \times c_u \times 9 = 0.196 \times 35 \times 9 = 61.74 \text{ kN}$
   *   $A_s = \pi \times D \times L = \pi \times 0.5 \times 15 = 23.56 \text{ m}^2$
   *   $f_s = \alpha \times c_u = 0.8 \times 35 = 28 \text{ kPa}$
   *   $Q_s = f_s \times A_s = 28 \times 23.56 = 660 \text{ kN}$
   *   $Q_u = Q_p + Q_s = 61.74 + 660 = 721.74 \text{ kN}$

**b) Ultimate Bearing Capacity of the Pile Group (Block Failure):**
   *   The group is $3 \times 3$ with 1.5 m spacing.
   *   Width of the block ($W_{block}$) = $2 \times D + (3-1) \times s = 2 \times 0.5 + 2 \times 1.5 = 1.0 + 3.0 = 4.0 \text{ m}$
   *   Length of the block ($L_{block}$) = $W_{block} = 4.0 \text{ m}$ (square arrangement)
   *   Area of the base of the group ($A_{pg}$) = $W_{block} \times L_{block} = 4.0 \times 4.0 = 16.0 \text{ m}^2$
   *   Perimeter of the group ($A_{sg}$) = $4 \times W_{block} = 4 \times 4.0 = 16.0 \text{ m}$
   *   $Q_{pg} = A_{pg} \times c_u \times 9 = 16.0 \times 35 \times 9 = 5040 \text{ kN}$
   *   Average skin friction along the perimeter ($f_{sg}$) = $\alpha \times c_u = 0.8 \times 35 = 28 \text{ kPa}$
   *   $Q_{sg} = f_{sg} \times A_{sg} = 28 \times 16.0 = 448 \text{ kN}$
   *   $Q_{ug} (\text{block}) = Q_{pg} + Q_{sg} = 5040 + 448 = 5488 \text{ kN}$

**Sum of individual capacities:** $n \times Q_u = 9 \times 721.74 \text{ kN} = 6495.66 \text{ kN}$

**Ultimate bearing capacity of the group ($Q_{ug}$):** The lesser of the two values.
   *   $Q_{ug} = \min(6495.66 \text{ kN}, 5488 \text{ kN}) = 5488 \text{ kN}$

**c) Group Efficiency Factor ($E_f$):**
   *   $E_f = \frac{Q_{ug}}{n \times Q_u} = \frac{5488 \text{ kN}}{9 \times 721.74 \text{ kN}} = \frac{5488}{6495.66} = 0.845$

**d) Safe Load Capacity of the Group:**
   *   $Q_{safe, group} = \frac{Q_{ug}}{FS} = \frac{5488 \text{ kN}}{2.5} = 2195.2 \text{ kN}$

---

## Practice Questions

1.  A square concrete pile of 0.3 m x 0.3 m and 10 m length is driven into a uniform clay deposit. The undrained cohesion ($c_u$) is 40 kPa, and the adhesion factor ($\alpha$) is 0.7. Calculate the ultimate bearing capacity of the pile.
    *   **Answer:** $Q_u = 475.2 \text{ kN}$

2.  A circular pile of 0.4 m diameter and 18 m length is driven into a sand deposit. The average $N_{60}$ value is 20. The effective unit weight of the sand is $19 \text{ kN/m}^3$. Using Meyerhof's empirical correlations for driven piles, calculate the ultimate bearing capacity.
    *   **Answer:** $Q_u \approx 1640 \text{ kN}$

3.  A pile group consists of 16 piles arranged in a $4 \times 4$ square pattern. The piles are 0.4 m diameter and 20 m long, driven into a soft clay with $c_u = 30 \text{ kPa}$ and $\alpha = 0.7$. The center-to-center spacing is 1.2 m.
    a) Calculate the ultimate bearing capacity of a single pile.
    b) Calculate the ultimate bearing capacity of the pile group considering block failure.
    c) Determine the group efficiency.
    *   **Answer:**
        a) $Q_u \approx 528.7 \text{ kN}$
        b) $Q_{ug} \approx 4265.6 \text{ kN}$
        c) $E_f \approx 0.79$

4.  A pile is subjected to a downward drag load of $200 \text{ kN}$ due to surrounding soil consolidation. The pile has an ultimate load capacity (without considering drag load) of $1200 \text{ kN}$. If a factor of safety of 2.0 is required, what is the maximum allowable applied load on the pile?
    *   **Answer:** $Q_{applied} = (1200 \text{ kN} / 2.0) - 200 \text{ kN} = 400 \text{ kN}$

---

## Important Points to Remember

*   **$\phi=0$ Condition for Clays:** For saturated clays under undrained conditions, simplify calculations by assuming $\phi=0$ and using $c_u$.
*   **Effective Stress is Key for Sands:** Always use effective stresses when dealing with cohesionless soils.
*   **Empirical Methods:** Be aware of the limitations and applicability of empirical methods (SPT, CPT) as they are heavily reliant on site-specific calibration.
*   **Adhesion Factor ($\alpha$):** This factor significantly impacts skin friction in clays. Its value depends on soil type, pile type, and installation.
*   **Lateral Earth Pressure ($K$):** Crucial for skin friction in sands. It can vary with overconsolidation ratio and pile installation.
*   **Drag Load:** Treat drag load as an additional downward force that reduces the *net* capacity of the pile or increases the *design* load.
*   **Group Efficiency:** Always consider group effects, especially in cohesive soils. Block failure is a critical consideration for groups in clay.
*   **Factor of Safety (FS):** Choose FS appropriately based on the reliability of data and calculation methods.
*   **Settlement:** While this module focuses on capacity, settlement is often the governing factor for pile foundation design. Settlement analysis is complex and often relies on empirical methods or field tests.

---
This concludes the study notes for numerical problems in Module 4. Practice these examples and try solving similar problems from textbooks to solidify your understanding.
