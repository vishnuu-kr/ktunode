---
title: "Vertical Bearing Capacity and
uplift capacity of belled pier -
Numerical problems."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 3: Under reamed piles"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811211"
status: "completed"
scrapedAt: "2026-05-20T18:52:05.045Z"
---
# Advanced Foundation Engineering: Module 3 - Under-reamed Piles

## Topic: Vertical Bearing Capacity and Uplift Capacity of Belled Piers - Numerical Problems

This module focuses on under-reamed piles, a type of bored pile with one or more bulbs or bells at specific depths. We will specifically delve into the calculations for vertical bearing capacity and uplift capacity of belled piers, which are a common application of under-reamed piles.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Calculate the **vertical ultimate bearing capacity** of a belled pier in both cohesive and cohesionless soils.
*   Determine the **allowable bearing capacity** of a belled pier considering appropriate factors of safety.
*   Calculate the **uplift capacity** of a belled pier in both cohesive and cohesionless soils.
*   Understand the influence of the bulb (bell) on the bearing and uplift capacity.
*   Apply learned principles to solve practical numerical problems related to belled pier capacity.

---

### 1. Key Concepts and Definitions

*   **Under-reamed Pile:** A bored pile constructed with one or more enlarged sections (bulbs or bells) at specific depths along its shaft.
*   **Belled Pier:** An under-reamed pile with a single bulb at its base.
*   **Bulb/Bell:** The enlarged diameter section at the base of an under-reamed pile. This significantly increases the bearing area and influences the shear resistance along the shaft.
*   **Shaft:** The cylindrical portion of the pile extending from the ground surface to the bulb.
*   **Net Ultimate Bearing Capacity ($q_{nu}$):** The ultimate bearing capacity of the pile in excess of the stress imposed by the weight of the soil within the pile.
*   **Ultimate Bearing Capacity ($q_u$):** The total load per unit area at which the pile fails.
*   **Allowable Bearing Capacity ($q_a$):** The maximum safe load per unit area that the pile can carry, determined by dividing the ultimate bearing capacity by a suitable factor of safety.
*   **Skin Friction ($Q_f$):** The resistance developed along the surface of the pile shaft.
*   **End Bearing ($Q_b$):** The resistance developed at the tip or base of the pile.
*   **Uplift Capacity:** The maximum upward force that a pile can resist before failure.

---

### 2. Vertical Bearing Capacity of Belled Piers

The ultimate vertical bearing capacity ($Q_u$) of a belled pier is the sum of the ultimate end bearing capacity ($Q_b$) and the ultimate skin friction capacity ($Q_f$).

$Q_u = Q_b + Q_f$

**2.1. End Bearing Capacity ($Q_b$)**

The end bearing capacity is primarily influenced by the bulb.

*   **In Cohesive Soils (Undrained conditions, $\phi = 0$):**
    $Q_b = A_b \times c_u \times N_c$
    Where:
    *   $A_b$ = Area of the bell (base of the pile) = $\frac{\pi D_b^2}{4}$
    *   $c_u$ = Undrained shear strength of the soil at the bulb level.
    *   $N_c$ = Bearing capacity factor for cohesive soils. For a deep foundation (which a pile is), $N_c = 9$.

    **Therefore, for cohesive soils:**
    $Q_b = \frac{\pi D_b^2}{4} \times c_u \times 9$

*   **In Cohesionless Soils (Drained conditions, $c = 0$):**
    $Q_b = A_b \times q_b$
    Where:
    *   $A_b$ = Area of the bell.
    *   $q_b$ = Ultimate bearing pressure at the base of the bell.
    $q_b = p_o' N_q$ (General bearing capacity formula simplified for deep foundations)
    Where:
    *   $p_o'$ = Effective overburden pressure at the base of the bell = $\sum (\gamma_i' H_i')$ for layers above the bulb.
    *   $N_q$ = Bearing capacity factor for cohesionless soils, which depends on the angle of internal friction ($\phi$). Typical values are:
        *   $\phi = 30^\circ \implies N_q \approx 20$
        *   $\phi = 35^\circ \implies N_q \approx 45$
        *   $\phi = 40^\circ \implies N_q \approx 100$

    **Therefore, for cohesionless soils:**
    $Q_b = \frac{\pi D_b^2}{4} \times p_o' \times N_q$

    **Note:** For a belled pier, the end bearing is considered only at the enlarged base, not at the shaft tip.

**2.2. Skin Friction Capacity ($Q_f$)**

Skin friction is developed along the surface of the pile shaft and the surface of the bulb. However, for belled piers, the skin friction is **typically considered only along the shaft**, as the bulb is designed to mobilize shear resistance in a different manner and is usually considered to contribute more to end bearing and passive resistance. Some codes or methodologies might include skin friction on the bulb surface, but the conventional approach often excludes it from skin friction calculation and relies on its contribution to increased end bearing capacity due to the larger area.

*   **In Cohesive Soils (Undrained conditions, $\phi = 0$):**
    $Q_f = A_s \times \alpha \times c_u$
    Where:
    *   $A_s$ = Surface area of the pile shaft = $\pi D_s L_s$
    *   $D_s$ = Diameter of the pile shaft.
    *   $L_s$ = Length of the pile shaft (from ground level to the underside of the bell).
    *   $\alpha$ = Adhesion factor, which depends on the undrained shear strength ($c_u$). Typical values:
        *   $c_u < 25 \text{ kPa} \implies \alpha \approx 1.0$
        *   $25 < c_u < 50 \text{ kPa} \implies \alpha \approx 0.8$
        *   $c_u > 50 \text{ kPa} \implies \alpha \approx 0.6$
    *   $c_u$ = Average undrained shear strength along the pile shaft.

    **Therefore, for cohesive soils:**
    $Q_f = \pi D_s L_s \times \alpha \times c_u$

*   **In Cohesionless Soils (Drained conditions, $c = 0$):**
    $Q_f = A_s \times p_s' \times K \times \tan \delta$
    Where:
    *   $A_s$ = Surface area of the pile shaft.
    *   $p_s'$ = Average effective overburden pressure along the pile shaft = $\sum (\frac{p_{oi}' + p_{of}'}{2}) L_i$ for each soil layer, where $p_{oi}'$ and $p_{of}'$ are the effective overburden pressures at the top and bottom of the layer, respectively.
    *   $K$ = Coefficient of earth pressure, which depends on the soil properties and pile installation. Typical values range from 1.0 to 2.0 for driven piles and 0.5 to 1.5 for bored piles. For belled piers, $K$ can be taken as 1.0 to 1.5.
    *   $\delta$ = Angle of friction between the pile and the soil. It is typically taken as $\frac{2}{3}\phi$ to $\phi$ for cohesionless soils. A common practice is $\delta = \frac{2}{3}\phi$.

    **Therefore, for cohesionless soils:**
    $Q_f = \pi D_s L_s \times \frac{p_{oi}' + p_{of}'}{2} \times K \times \tan \delta$ (for a homogeneous layer)

**2.3. Net Ultimate Bearing Capacity ($q_{nu}$)**

The net ultimate bearing capacity considers the load in excess of the pile's self-weight and the weight of soil displaced by the pile shaft.

$q_{nu} = Q_u - W_p - W_s$
Where:
*   $W_p$ = Weight of the pile material.
*   $W_s$ = Weight of the soil within the pile shaft (column of soil).

**2.4. Allowable Bearing Capacity ($q_a$)**

$q_a = \frac{Q_u}{FS}$
Where:
*   $FS$ = Factor of Safety. Typical values for allowable bearing capacity are 2.0 to 3.0.

---

### 3. Uplift Capacity of Belled Piers

The ultimate uplift capacity ($Q_{uplift}$) of a belled pier is the sum of the skin friction along the shaft and the weight of the soil plug within the pile shaft, plus the weight of the concrete itself. However, when calculating the net uplift capacity, we often consider the forces that resist the upward movement.

$Q_{uplift} = Q_{fs} + W_{pile}$ (considering the weight of the pile material and the soil within it as resisting uplift).

A more practical approach for uplift capacity considers the shear resistance along the shaft and the contribution of the bulb to anchoring. The primary resistance comes from skin friction. The bulb's contribution is mainly to provide a larger base area to resist uplift due to the soil mass above it.

*   **In Cohesive Soils (Undrained conditions, $\phi = 0$):**
    The uplift capacity is primarily due to skin friction along the shaft. The bulb's contribution is often ignored in simple calculations, as the shear along the shaft is the dominant factor.
    $Q_{uplift} = Q_{fs}$
    Where:
    *   $Q_{fs}$ = Ultimate skin friction capacity along the shaft (as calculated for vertical bearing capacity in cohesive soils).
    $Q_{fs} = A_s \times \alpha \times c_u = \pi D_s L_s \times \alpha \times c_u$

    **Note:** Some sources might consider the adhesion on the bulb's surface as well, especially in certain soil conditions. If considered:
    $Q_{uplift} = \pi D_s L_s \times \alpha_s \times c_{u,avg} + \pi D_b \times L_b \times \alpha_b \times c_{u,base}$
    Where $L_b$ is the height of the bulb and $\alpha_b$ is the adhesion factor for the bulb. However, the most common approach is to consider only the shaft.

*   **In Cohesionless Soils (Drained conditions, $c = 0$):**
    The uplift capacity is the sum of skin friction along the shaft and the weight of the soil plug inside the pile. The bulb's contribution is minimal in terms of friction but provides anchorage.
    $Q_{uplift} = Q_{fs} + W_{soil\_plug}$
    Where:
    *   $Q_{fs}$ = Ultimate skin friction capacity along the shaft (as calculated for vertical bearing capacity in cohesionless soils).
    $Q_{fs} = \pi D_s L_s \times p_{avg}' \times K \times \tan \delta$
    *   $W_{soil\_plug}$ = Weight of the soil plug within the pile shaft.
    $W_{soil\_plug} = A_s \times L_s \times \gamma_{avg}$
    Where:
    *   $A_s$ = Cross-sectional area of the pile shaft.
    *   $L_s$ = Length of the pile shaft.
    *   $\gamma_{avg}$ = Average unit weight of the soil within the shaft.

    **Therefore, for cohesionless soils:**
    $Q_{uplift} = (\pi D_s L_s \times p_{avg}' \times K \times \tan \delta) + (\frac{\pi D_s^2}{4} \times L_s \times \gamma_{avg})$

    **Important Consideration for Uplift:** The effective stress approach is crucial for cohesionless soils. The average effective overburden pressure ($p_{avg}'$) should be used. The weight of the soil plug should also be calculated using its effective unit weight.

---

### 4. Numerical Problems

**Example 1: Vertical Bearing Capacity in Clay**

A belled pier of 0.5 m shaft diameter and 1.5 m bell diameter is founded at a depth of 10 m. The soil is a soft clay with an average undrained shear strength ($c_u$) of 30 kPa along the shaft and at the base. The adhesion factor ($\alpha$) is 0.8. Calculate the ultimate vertical bearing capacity of the pile.

**Given:**
*   Shaft diameter ($D_s$) = 0.5 m
*   Bell diameter ($D_b$) = 1.5 m
*   Depth of foundation ($L_s$) = 10 m
*   Undrained shear strength ($c_u$) = 30 kPa
*   Adhesion factor ($\alpha$) = 0.8
*   $N_c = 9$

**Solution:**

**a) End Bearing Capacity ($Q_b$)**

$Q_b = A_b \times c_u \times N_c$
$A_b = \frac{\pi D_b^2}{4} = \frac{\pi (1.5)^2}{4} = 1.767 \text{ m}^2$
$Q_b = 1.767 \text{ m}^2 \times 30 \text{ kPa} \times 9$
$Q_b = 477.09 \text{ kN}$

**b) Skin Friction Capacity ($Q_f$)**

$Q_f = A_s \times \alpha \times c_u$
$A_s = \pi D_s L_s = \pi \times 0.5 \text{ m} \times 10 \text{ m} = 15.708 \text{ m}^2$
$Q_f = 15.708 \text{ m}^2 \times 0.8 \times 30 \text{ kPa}$
$Q_f = 377.0 \text{ kN}$

**c) Ultimate Vertical Bearing Capacity ($Q_u$)**

$Q_u = Q_b + Q_f$
$Q_u = 477.09 \text{ kN} + 377.0 \text{ kN}$
$Q_u = 854.09 \text{ kN}$

**Therefore, the ultimate vertical bearing capacity of the belled pier is approximately 854.1 kN.**

---

**Example 2: Vertical Bearing Capacity in Sand**

A belled pier has a shaft diameter of 0.6 m and a bell diameter of 1.8 m. The shaft length is 12 m. The soil is uniform sand with an average angle of internal friction ($\phi$) of 35°. The average effective overburden pressure along the shaft is 80 kPa. The effective overburden pressure at the base of the bell is 120 kPa. Assume $K = 1.2$ and $\delta = \frac{2}{3}\phi$. Calculate the ultimate vertical bearing capacity.

**Given:**
*   Shaft diameter ($D_s$) = 0.6 m
*   Bell diameter ($D_b$) = 1.8 m
*   Shaft length ($L_s$) = 12 m
*   Angle of internal friction ($\phi$) = 35°
*   Average effective overburden pressure along shaft ($p_s'$) = 80 kPa
*   Effective overburden pressure at base ($p_o'$) = 120 kPa
*   $K = 1.2$
*   $\delta = \frac{2}{3} \times 35^\circ \approx 23.33^\circ$
*   For $\phi = 35^\circ$, $N_q \approx 45$

**Solution:**

**a) End Bearing Capacity ($Q_b$)**

$Q_b = A_b \times p_o' \times N_q$
$A_b = \frac{\pi D_b^2}{4} = \frac{\pi (1.8)^2}{4} = 2.545 \text{ m}^2$
$Q_b = 2.545 \text{ m}^2 \times 120 \text{ kPa} \times 45$
$Q_b = 13753.5 \text{ kN}$

**b) Skin Friction Capacity ($Q_f$)**

For simplicity, we'll use the average effective overburden pressure along the shaft directly as $p_s'$. If the soil profile was layered, we would calculate the weighted average or sum contributions from each layer.
$A_s = \pi D_s L_s = \pi \times 0.6 \text{ m} \times 12 \text{ m} = 22.619 \text{ m}^2$
$Q_f = A_s \times p_s' \times K \times \tan \delta$
$Q_f = 22.619 \text{ m}^2 \times 80 \text{ kPa} \times 1.2 \times \tan(23.33^\circ)$
$Q_f = 22.619 \times 80 \times 1.2 \times 0.4318$
$Q_f = 935.4 \text{ kN}$

**c) Ultimate Vertical Bearing Capacity ($Q_u$)**

$Q_u = Q_b + Q_f$
$Q_u = 13753.5 \text{ kN} + 935.4 \text{ kN}$
$Q_u = 14688.9 \text{ kN}$

**Therefore, the ultimate vertical bearing capacity of the belled pier is approximately 14689 kN.**

---

**Example 3: Uplift Capacity in Clay**

Consider the belled pier from Example 1. Calculate its ultimate uplift capacity.

**Given (from Example 1):**
*   Shaft diameter ($D_s$) = 0.5 m
*   Shaft length ($L_s$) = 10 m
*   Undrained shear strength ($c_u$) = 30 kPa
*   Adhesion factor ($\alpha$) = 0.8

**Solution:**

The uplift capacity is primarily determined by the skin friction along the shaft. The bulb's contribution is generally neglected in simple calculations.

$Q_{uplift} = Q_{fs}$
$Q_{fs} = A_s \times \alpha \times c_u$
$A_s = \pi D_s L_s = \pi \times 0.5 \text{ m} \times 10 \text{ m} = 15.708 \text{ m}^2$
$Q_{uplift} = 15.708 \text{ m}^2 \times 0.8 \times 30 \text{ kPa}$
$Q_{uplift} = 377.0 \text{ kN}$

**Therefore, the ultimate uplift capacity of the belled pier is approximately 377.0 kN.**

---

**Example 4: Uplift Capacity in Sand**

Consider the belled pier from Example 2. Calculate its ultimate uplift capacity.

**Given (from Example 2):**
*   Shaft diameter ($D_s$) = 0.6 m
*   Shaft length ($L_s$) = 12 m
*   Average effective overburden pressure along shaft ($p_s'$) = 80 kPa
*   $K = 1.2$
*   $\delta = 23.33^\circ$
*   Average unit weight of sand ($\gamma_{avg}$) = 18 kN/m³ (Assuming this value is provided or can be estimated)

**Solution:**

The uplift capacity is the sum of skin friction along the shaft and the weight of the soil plug within the shaft.

**a) Skin Friction Capacity ($Q_{fs}$)**

$Q_{fs} = A_s \times p_s' \times K \times \tan \delta$
$A_s = \pi D_s L_s = \pi \times 0.6 \text{ m} \times 12 \text{ m} = 22.619 \text{ m}^2$
$Q_{fs} = 22.619 \text{ m}^2 \times 80 \text{ kPa} \times 1.2 \times \tan(23.33^\circ)$
$Q_{fs} = 935.4 \text{ kN}$

**b) Weight of Soil Plug ($W_{soil\_plug}$)**

$W_{soil\_plug} = A_s \times L_s \times \gamma_{avg}$
$A_s = \frac{\pi D_s^2}{4} = \frac{\pi (0.6)^2}{4} = 0.2827 \text{ m}^2$
$W_{soil\_plug} = 0.2827 \text{ m}^2 \times 12 \text{ m} \times 18 \text{ kN/m}^3$
$W_{soil\_plug} = 61.07 \text{ kN}$

**c) Ultimate Uplift Capacity ($Q_{uplift}$)**

$Q_{uplift} = Q_{fs} + W_{soil\_plug}$
$Q_{uplift} = 935.4 \text{ kN} + 61.07 \text{ kN}$
$Q_{uplift} = 996.47 \text{ kN}$

**Therefore, the ultimate uplift capacity of the belled pier is approximately 996.5 kN.**

---

### 5. Practice Questions/Exercises

**Question 1 (Clay):**
A belled pier has a shaft diameter of 0.4 m and a bell diameter of 1.2 m. It is installed to a depth of 8 m in a soft clay layer with $c_u = 40$ kPa. The adhesion factor $\alpha = 0.7$. Calculate the ultimate vertical bearing capacity of the pile.

**Answer 1:**
*   $A_b = \frac{\pi (1.2)^2}{4} = 1.131 \text{ m}^2$
*   $Q_b = 1.131 \text{ m}^2 \times 40 \text{ kPa} \times 9 = 407.16 \text{ kN}$
*   $A_s = \pi \times 0.4 \text{ m} \times 8 \text{ m} = 10.053 \text{ m}^2$
*   $Q_f = 10.053 \text{ m}^2 \times 0.7 \times 40 \text{ kPa} = 281.48 \text{ kN}$
*   $Q_u = Q_b + Q_f = 407.16 + 281.48 = 688.64 \text{ kN}$

**Question 2 (Sand):**
A belled pier has a shaft diameter of 0.5 m and a bell diameter of 1.5 m. The shaft length is 10 m. The soil is uniform sand with $\phi = 30^\circ$. The average effective overburden pressure along the shaft is 70 kPa, and at the base is 100 kPa. Assume $K = 1.0$ and $\delta = \frac{2}{3}\phi$. Calculate the ultimate vertical bearing capacity. Take $N_q$ for $\phi = 30^\circ$ as 20.

**Answer 2:**
*   $A_b = \frac{\pi (1.5)^2}{4} = 1.767 \text{ m}^2$
*   $Q_b = 1.767 \text{ m}^2 \times 100 \text{ kPa} \times 20 = 3534 \text{ kN}$
*   $\delta = \frac{2}{3} \times 30^\circ = 20^\circ$
*   $A_s = \pi \times 0.5 \text{ m} \times 10 \text{ m} = 15.708 \text{ m}^2$
*   $Q_f = 15.708 \text{ m}^2 \times 70 \text{ kPa} \times 1.0 \times \tan(20^\circ)$
*   $Q_f = 15.708 \times 70 \times 0.3640 = 401.4 \text{ kN}$
*   $Q_u = Q_b + Q_f = 3534 + 401.4 = 3935.4 \text{ kN}$

**Question 3 (Uplift in Sand):**
Using the parameters from Question 2, calculate the ultimate uplift capacity of the belled pier. Assume the average unit weight of sand ($\gamma_{avg}$) is 17 kN/m³.

**Answer 3:**
*   $Q_{fs} = 401.4 \text{ kN}$ (from Question 2)
*   $A_s = \frac{\pi (0.5)^2}{4} = 0.1963 \text{ m}^2$
*   $W_{soil\_plug} = 0.1963 \text{ m}^2 \times 10 \text{ m} \times 17 \text{ kN/m}^3 = 33.37 \text{ kN}$
*   $Q_{uplift} = Q_{fs} + W_{soil\_plug} = 401.4 + 33.37 = 434.77 \text{ kN}$

---

### 6. Important Points to Remember

*   **Bulb Effect:** The bell significantly increases the end bearing capacity by providing a larger bearing area. It also increases the pile's resistance to uplift due to passive pressure and the weight of the soil mass it anchors.
*   **Skin Friction Location:** In typical calculations for belled piers, skin friction is primarily considered along the **shaft**. The bulb's contribution to skin friction is often complex and may be ignored or accounted for differently in advanced methods.
*   **Soil Properties:** Accurate determination of soil properties ($c_u$, $\phi$, $\gamma$) at different depths is crucial for reliable capacity calculations.
*   **Effective Stress:** For cohesionless soils, always use effective stresses when calculating bearing capacity and uplift.
*   **Bearing Capacity Factors:** Use appropriate bearing capacity factors ($N_c$, $N_q$) based on the soil type and the geometry of the foundation.
*   **Adhesion Factor ($\alpha$):** The adhesion factor is empirical and varies with the undrained shear strength of the clay.
*   **Coefficient of Earth Pressure (K) and Friction Angle ($\delta$):** These parameters in cohesionless soils are also empirical and depend on soil characteristics and pile installation.
*   **Factor of Safety (FS):** A suitable factor of safety must be applied to the ultimate bearing capacity to determine the allowable bearing capacity.

---

This concludes the notes on the vertical bearing capacity and uplift capacity of belled piers. Remember to refer to relevant design codes and standards for specific project requirements and more detailed methodologies.
