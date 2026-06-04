---
title: "Terzaghi’s formulae for circular and square footings - Numerical problems - Factors affecting bearing capacity - Effect of water table on bearing capacity - Numerical problems."
subject: "FOUNDATION ENGINEERING"
module: "Module 2: General Considerations: Functions of foundations "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e3b"
status: "completed"
scrapedAt: "2026-05-20T18:48:37.833Z"
---
# Foundation Engineering: Module 2 - General Considerations: Functions of Foundations

This module delves into the fundamental principles of shallow foundations, focusing on Terzaghi's bearing capacity theory and the factors that influence it.

## 1. Functions of Foundations

Foundations are the substructures that transfer loads from the superstructure to the underlying soil or rock. Their primary functions are:

*   **Load Transfer:** To safely transmit all loads (dead loads, live loads, wind loads, seismic loads) from the superstructure to the soil or rock without causing excessive settlement or shear failure.
*   **Settlement Control:** To minimize differential settlement between various parts of the superstructure, which can lead to structural damage.
*   **Stability:** To ensure the overall stability of the structure against overturning, sliding, and bearing capacity failure.
*   **Protection:** To protect the superstructure from damage caused by ground movements, frost heave, or other environmental factors.

## 2. Terzaghi's Bearing Capacity Theory

Karl Terzaghi's theory provides a foundational approach to estimating the ultimate bearing capacity of shallow foundations. It's based on the assumption of a rigid foundation on a homogeneous soil mass.

### Key Concepts:

*   **Ultimate Bearing Capacity ($q_u$):** The maximum intensity of pressure that the soil can sustain without shear failure.
*   **Allowable Bearing Capacity ($q_{all}$):** The safe bearing capacity, which is the ultimate bearing capacity divided by a factor of safety (FOS). This accounts for uncertainties in soil properties, loads, and construction.
*   **Bearing Capacity Factors ($N_c$, $N_q$, $N_\gamma$):** Dimensionless factors that depend on the soil's angle of internal friction ($\phi$).
*   **Soil Properties:**
    *   **Cohesion ($c$):** The attractive force between soil particles.
    *   **Angle of Internal Friction ($\phi$):** The resistance to sliding between soil particles.
    *   **Unit Weight of Soil ($\gamma$):** The weight of soil per unit volume.
    *   **Unit Weight of Saturated Soil ($\gamma_{sat}$):** The unit weight of soil when fully saturated.
    *   **Effective Unit Weight ($\gamma'$):** The unit weight of soil above the water table or the submerged unit weight below the water table.
*   **Foundation Geometry:**
    *   **Width ($B$):** The shorter dimension of a rectangular footing, or the diameter of a circular footing.
    *   **Length ($L$):** The longer dimension of a rectangular footing.
    *   **Depth of Foundation ($D_f$):** The depth from the ground surface to the base of the foundation.

### Terzaghi's General Bearing Capacity Equation:

The general bearing capacity equation for a shallow foundation is given by:

$$q_u = c N_c + q N_q + \frac{1}{2} \gamma B N_\gamma$$

where:
*   $q_u$ = ultimate bearing capacity
*   $c$ = cohesion of the soil
*   $q$ = surcharge pressure at the base of the foundation ($q = \gamma D_f$)
*   $\gamma$ = unit weight of soil below the foundation base
*   $B$ = width of the foundation
*   $N_c$, $N_q$, $N_\gamma$ = bearing capacity factors, functions of $\phi$

### Terzaghi's Formulae for Specific Footing Shapes:

**1. Strip Footing:**

For a strip footing (where $L/B \to \infty$), the equation is:

$$q_u = c N_c + q N_q + \frac{1}{2} \gamma B N_\gamma$$

**2. Square Footing:**

For a square footing with width $B$:

$$q_u = 1.3 c N_c + q N_q + 0.4 \gamma B N_\gamma$$

**3. Circular Footing:**

For a circular footing with diameter $B$:

$$q_u = 1.3 c N_c + q N_q + 0.3 \gamma B N_\gamma$$

**Note:** The factors $N_c$, $N_q$, and $N_\gamma$ are the same as those for a strip footing and are determined from tables or charts based on the soil's $\phi$.

**Bearing Capacity Factor Values (Approximate):**

| $\phi$ (degrees) | $N_c$   | $N_q$  | $N_\gamma$ |
| :-------------- | :------ | :----- | :--------- |
| 0               | 5.7     | 1.0    | 0.0        |
| 10              | 8.3     | 2.7    | 1.2        |
| 20              | 14.8    | 5.6    | 4.4        |
| 30              | 30.1    | 11.4   | 19.7       |
| 35              | 41.4    | 19.7   | 35.1       |
| 40              | 57.8    | 33.3   | 70.0       |

**Important Point:** The bearing capacity factors are often calculated using specific formulas, but for practical purposes, tables are commonly used.

---

## 3. Numerical Problems: Terzaghi's Formulae

**Example 1: Square Footing**

A square footing of size $3m \times 3m$ is to be founded at a depth of $1.5m$ in a sand deposit. The soil has the following properties:
*   Angle of internal friction ($\phi$) = $30^\circ$
*   Unit weight of soil ($\gamma$) = $18 \, kN/m^3$
*   Cohesion ($c$) = $0 \, kN/m^2$
*   Factor of Safety (FOS) = 3

Calculate the ultimate and allowable bearing capacity of the footing.

**Solution:**

1.  **Identify the footing type and dimensions:** Square footing, $B = 3m$.
2.  **Determine the soil properties:** $c = 0 \, kN/m^2$, $\phi = 30^\circ$, $\gamma = 18 \, kN/m^3$.
3.  **Calculate surcharge pressure ($q$):** $q = \gamma D_f = 18 \, kN/m^3 \times 1.5 \, m = 27 \, kN/m^2$.
4.  **Find bearing capacity factors for $\phi = 30^\circ$:** From the table, $N_c = 30.1$, $N_q = 11.4$, $N_\gamma = 19.7$.
5.  **Use the formula for a square footing:**
    $q_u = 1.3 c N_c + q N_q + 0.4 \gamma B N_\gamma$
    $q_u = 1.3 (0)(30.1) + (27)(11.4) + 0.4 (18)(3)(19.7)$
    $q_u = 0 + 307.8 + 425.52$
    $q_u = 733.32 \, kN/m^2$
6.  **Calculate allowable bearing capacity ($q_{all}$):**
    $q_{all} = q_u / FOS = 733.32 / 3 = 244.44 \, kN/m^2$

**Answer:** The ultimate bearing capacity is $733.32 \, kN/m^2$ and the allowable bearing capacity is $244.44 \, kN/m^2$.

**Example 2: Circular Footing**

A circular footing has a diameter of $2.5m$ and is to be placed at a depth of $1.2m$. The soil is clay with:
*   Cohesion ($c$) = $40 \, kN/m^2$
*   Angle of internal friction ($\phi$) = $0^\circ$
*   Unit weight of soil ($\gamma$) = $19 \, kN/m^3$
*   Factor of Safety (FOS) = 2.5

Calculate the ultimate and allowable bearing capacity.

**Solution:**

1.  **Identify the footing type and dimensions:** Circular footing, $B = 2.5m$.
2.  **Determine the soil properties:** $c = 40 \, kN/m^2$, $\phi = 0^\circ$, $\gamma = 19 \, kN/m^3$.
3.  **Calculate surcharge pressure ($q$):** $q = \gamma D_f = 19 \, kN/m^3 \times 1.2 \, m = 22.8 \, kN/m^2$.
4.  **Find bearing capacity factors for $\phi = 0^\circ$:** From the table, $N_c = 5.7$, $N_q = 1.0$, $N_\gamma = 0.0$.
5.  **Use the formula for a circular footing:**
    $q_u = 1.3 c N_c + q N_q + 0.3 \gamma B N_\gamma$
    $q_u = 1.3 (40)(5.7) + (22.8)(1.0) + 0.3 (19)(2.5)(0.0)$
    $q_u = 296.4 + 22.8 + 0$
    $q_u = 319.2 \, kN/m^2$
6.  **Calculate allowable bearing capacity ($q_{all}$):**
    $q_{all} = q_u / FOS = 319.2 / 2.5 = 127.68 \, kN/m^2$

**Answer:** The ultimate bearing capacity is $319.2 \, kN/m^2$ and the allowable bearing capacity is $127.68 \, kN/m^2$.

---

## 4. Factors Affecting Bearing Capacity

Several factors influence the bearing capacity of a soil, including:

*   **Type of Soil:**
    *   **Cohesive Soils (Clays):** Bearing capacity is primarily influenced by cohesion ($c$). Denser clays with higher cohesion have higher bearing capacity.
    *   **Cohesionless Soils (Sands and Gravels):** Bearing capacity is mainly dependent on the angle of internal friction ($\phi$) and density. Denser sands with higher $\phi$ have higher bearing capacity.
*   **Water Content:** Higher water content generally reduces the bearing capacity of both cohesive and cohesionless soils by reducing effective stresses and cohesion.
*   **Density of Soil:** Denser soils offer higher resistance to shear failure, thus increasing bearing capacity.
*   **Depth of Foundation ($D_f$):** Deeper foundations generally have higher bearing capacity due to the increased surcharge pressure and confinement.
*   **Size and Shape of Footing:** As seen in Terzaghi's formulas, larger footings and different shapes (square, circular, rectangular) have different bearing capacities for the same soil conditions. For cohesive soils, the bearing capacity generally increases with the width of the footing, while for cohesionless soils, it increases less significantly with width.
*   **Inclination of Load:** If the load is inclined, it reduces the effective load-carrying capacity of the foundation.
*   **Inclination of Bearing Surface:** If the base of the foundation is inclined, it also affects the bearing capacity.
*   **Inclination of Ground Surface:** An inclined ground surface above the foundation can reduce the bearing capacity.
*   **Stratification of Soil:** The presence of different soil layers with varying properties significantly impacts the bearing capacity. The weaker layer usually governs.
*   **Presence of Water Table:** This is a critical factor, as discussed in the next section.

---

## 5. Effect of Water Table on Bearing Capacity

The presence of a water table below the foundation significantly affects the soil's effective stresses and, consequently, its bearing capacity.

*   **Water Table at or Above the Base of the Foundation ($D_f \le D_{wf} < D_f + B$):**
    When the water table is within a depth of $B$ below the foundation base, the effective unit weight of the soil in the shear zone is reduced. This reduction is due to the buoyant effect of water.

    The general bearing capacity equation is modified as follows:

    $$q_u = c N_c + q N_q + \frac{1}{2} \gamma' B N_\gamma$$

    where:
    *   $\gamma'$ is the **effective unit weight** of the soil.
    *   If the soil is saturated below the water table, $\gamma'$ is the submerged unit weight ($\gamma_{sat} - \gamma_w$), where $\gamma_w$ is the unit weight of water ($9.81 \, kN/m^3$).
    *   If the water table is at the foundation base ($D_{wf} = D_f$), the term $\frac{1}{2} \gamma B N_\gamma$ is multiplied by $0.5$.
    *   If the water table is at a depth of $D_f + B$ or deeper, the water table has no effect on the third term.

    Terzaghi's equation accounting for water table effects is often presented with modification factors ($R_w$ or $r_w$):

    $$q_u = c N_c + q N_q + 0.5 \gamma B N_\gamma R_w$$

    where $R_w$ is a factor that depends on the depth of the water table ($D_{wf}$) from the foundation base:

    *   If $D_{wf} = 0$ (water table at foundation base): $R_w = 0.5$
    *   If $0 < D_{wf} < B$: $R_w = 0.5 + 0.5 \frac{D_{wf}}{B}$
    *   If $D_{wf} \ge B$: $R_w = 1.0$ (no effect)

*   **Water Table Significantly Below the Foundation ($D_f + B < D_{wf}$):**
    If the water table is located at a depth greater than or equal to the width of the footing below the base of the foundation, it generally has no significant effect on the ultimate bearing capacity, and the original Terzaghi equation can be used.

**Important Point:** The effect of the water table is to reduce the effective stresses in the soil, thereby reducing its shear strength and hence its bearing capacity.

---

## 6. Numerical Problems: Effect of Water Table

**Example 3: Square Footing with Water Table**

A square footing of size $2m \times 2m$ is to be founded at a depth of $1m$ in a sand deposit. The soil properties are:
*   Angle of internal friction ($\phi$) = $35^\circ$
*   Unit weight of soil above water table ($\gamma$) = $18 \, kN/m^3$
*   Unit weight of soil below water table ($\gamma_{sat}$) = $20 \, kN/m^3$
*   Cohesion ($c$) = $0 \, kN/m^2$
*   Water table is at a depth of $1.5m$ from the ground surface.
*   Factor of Safety (FOS) = 3

Calculate the allowable bearing capacity.

**Solution:**

1.  **Footing details:** $B = 2m$, $D_f = 1m$.
2.  **Soil properties:** $\phi = 35^\circ$, $c = 0$.
3.  **Water table depth:** $D_{wf}$ from the ground surface = $1.5m$.
4.  **Depth of water table from foundation base:** $D_{wf}$ (from base) = $1.5m$ (ground surface) - $1m$ (foundation depth) = $0.5m$.
5.  **Compare $D_{wf}$ (from base) with $B$:** $D_{wf}$ (from base) = $0.5m$, $B = 2m$. Since $0 < 0.5m < 2m$, the water table is within the influence zone.
6.  **Calculate surcharge pressure ($q$):** Assuming the soil above the water table has unit weight $\gamma = 18 \, kN/m^3$.
    $q = \gamma D_f = 18 \, kN/m^3 \times 1 \, m = 18 \, kN/m^2$.
7.  **Find bearing capacity factors for $\phi = 35^\circ$:** From the table, $N_c = 41.4$, $N_q = 19.7$, $N_\gamma = 35.1$.
8.  **Determine the modification factor $R_w$:**
    $D_{wf}$ (from base) = $0.5m$, $B = 2m$.
    $R_w = 0.5 + 0.5 \frac{D_{wf}}{B} = 0.5 + 0.5 \frac{0.5}{2} = 0.5 + 0.5 \times 0.25 = 0.5 + 0.125 = 0.625$.
9.  **Calculate effective unit weight ($\gamma'$) below the water table:** Since the water table is at $0.5m$ below the base and the footing is $2m$ wide, the soil below the foundation base will be saturated.
    $\gamma' = \gamma_{sat} - \gamma_w = 20 \, kN/m^3 - 9.81 \, kN/m^3 \approx 10.19 \, kN/m^3$.
10. **Use the modified bearing capacity equation for a square footing:**
    $q_u = 1.3 c N_c + q N_q + 0.4 \gamma' B N_\gamma R_w$
    $q_u = 1.3 (0)(41.4) + (18)(19.7) + 0.4 (10.19)(2)(35.1)(0.625)$
    $q_u = 0 + 354.6 + 447.17$
    $q_u = 801.77 \, kN/m^2$
11. **Calculate allowable bearing capacity ($q_{all}$):**
    $q_{all} = q_u / FOS = 801.77 / 3 = 267.26 \, kN/m^2$.

**Answer:** The allowable bearing capacity is $267.26 \, kN/m^2$.

**Example 4: Circular Footing with Water Table**

A circular footing of diameter $3m$ is to be founded at a depth of $2m$. The soil is silty sand with:
*   Angle of internal friction ($\phi$) = $25^\circ$
*   Unit weight of soil ($\gamma$) = $19 \, kN/m^3$
*   Cohesion ($c$) = $10 \, kN/m^2$
*   Water table is at a depth of $1.5m$ from the ground surface.
*   Factor of Safety (FOS) = 3

Calculate the allowable bearing capacity.

**Solution:**

1.  **Footing details:** $B = 3m$, $D_f = 2m$.
2.  **Soil properties:** $\phi = 25^\circ$, $c = 10 \, kN/m^2$, $\gamma = 19 \, kN/m^3$.
3.  **Water table depth:** $D_{wf}$ from the ground surface = $1.5m$.
4.  **Depth of water table from foundation base:** $D_{wf}$ (from base) = $1.5m$ (ground surface) - $2m$ (foundation depth) = $-0.5m$. This means the water table is **above** the foundation base.
5.  **Compare $D_{wf}$ (from base) with $B$:** $D_{wf}$ (from base) = $-0.5m$, $B = 3m$.
    Since $D_{wf}$ is negative, the water table is above the foundation. In this scenario, the entire shear zone below the foundation base is considered to be saturated. The effective unit weight ($\gamma'$) should be used for the entire third term.
    $\gamma' = \gamma_{sat} - \gamma_w$. Assuming $\gamma_{sat}$ is approximately $\gamma$ when saturated (for simplicity in this example, though it should be $\gamma_{sat}$), or if the soil above the water table also gets saturated due to capillary action. For simplicity, let's assume the soil is saturated below the foundation base.
    $\gamma' = 19 \, kN/m^3 - 9.81 \, kN/m^3 \approx 9.19 \, kN/m^3$.
6.  **Calculate surcharge pressure ($q$):** Since the water table is above the foundation base, the surcharge pressure should also consider the effective stress. However, Terzaghi's equation for $q$ typically uses the total unit weight for $D_f$ if the water table is below $D_f$. When the water table is above $D_f$, the soil within $D_f$ is also saturated.
    $q = (\gamma_{sat} - \gamma_w) D_f = \gamma' D_f = 9.19 \, kN/m^3 \times 2 \, m = 18.38 \, kN/m^2$.
    *(Alternatively, for $q$, if we consider the soil above the water table, and the saturated part below it, it gets more complex. For simplicity, assuming the whole zone up to $D_f$ contributes saturated weight is a common approach when the water table is within $D_f$).*
    Let's re-evaluate using a more standard interpretation: $q$ is the effective overburden pressure at the base. If the water table is above the base, the pressure at the base is $(D_f - h_w) \gamma + h_w (\gamma_{sat} - \gamma_w)$, where $h_w$ is the depth of water above the base.
    In this case, $D_{wf}$ from the ground surface is $1.5m$, and $D_f$ is $2m$. So the water table is $0.5m$ above the base.
    $q = (2 - 1.5) \times 19 \, kN/m^3 + 1.5 \times (\gamma_{sat} - \gamma_w)$
    Assuming $\gamma_{sat} = 20 \, kN/m^3$ for silty sand.
    $q = 0.5 \times 19 + 1.5 \times (20 - 9.81) = 9.5 + 1.5 \times 10.19 = 9.5 + 15.285 = 24.785 \, kN/m^2$.
    Let's use this more precise $q$.
7.  **Find bearing capacity factors for $\phi = 25^\circ$:** From the table, $N_c = 20.1$, $N_q = 8.3$, $N_\gamma = 5.3$.
8.  **Determine the modification factor $R_w$ for the third term:**
    $D_{wf}$ (from base) = $-0.5m$. This means the water table is above the base.
    Since the water table is at or above the foundation base ($D_{wf} \le 0$), the third term is modified by a factor of $0.5$.
    $R_w = 0.5$.
9.  **Calculate effective unit weight ($\gamma'$) for the third term:**
    $\gamma' = \gamma_{sat} - \gamma_w = 20 \, kN/m^3 - 9.81 \, kN/m^3 \approx 10.19 \, kN/m^3$.
10. **Use the modified bearing capacity equation for a circular footing:**
    $q_u = 1.3 c N_c + q N_q + 0.3 \gamma' B N_\gamma R_w$
    $q_u = 1.3 (10)(20.1) + (24.785)(8.3) + 0.3 (10.19)(3)(5.3)(0.5)$
    $q_u = 261.3 + 205.72 + 80.93$
    $q_u = 547.95 \, kN/m^2$
11. **Calculate allowable bearing capacity ($q_{all}$):**
    $q_{all} = q_u / FOS = 547.95 / 3 = 182.65 \, kN/m^2$.

**Answer:** The allowable bearing capacity is $182.65 \, kN/m^2$.

---

## Practice Questions

**Question 1:**
A rectangular footing of size $2m \times 4m$ is to be founded at a depth of $1.2m$. The soil is clay with $c = 30 \, kN/m^2$, $\phi = 0^\circ$, and $\gamma = 18 \, kN/m^3$. Using Terzaghi's theory for a strip footing (as a conservative approach for rectangular footings), calculate the ultimate bearing capacity. (FOS is not required here).

**Question 2:**
A circular footing of diameter $2.5m$ is to be founded at a depth of $1m$. The soil has $\phi = 30^\circ$, $\gamma = 19 \, kN/m^3$, and $c = 0 \, kN/m^2$. The water table is at a depth of $3m$ from the ground surface. Calculate the allowable bearing capacity using a FOS of 3.

**Question 3:**
A square footing of size $3m \times 3m$ is founded at a depth of $1.5m$. The soil properties are $\phi = 20^\circ$, $\gamma = 18.5 \, kN/m^3$, and $c = 5 \, kN/m^2$. The water table is located at a depth of $1.8m$ from the ground surface. Assume $\gamma_{sat} = 20 \, kN/m^3$. Calculate the allowable bearing capacity using a FOS of 3.

---

## Answers to Practice Questions

**Answer 1:**
1.  **Footing type:** Rectangular (use strip footing for conservatism), $B = 2m$ (smaller dimension).
2.  **Soil properties:** $c = 30 \, kN/m^2$, $\phi = 0^\circ$, $\gamma = 18 \, kN/m^3$.
3.  **Surcharge pressure ($q$):** $q = \gamma D_f = 18 \times 1.2 = 21.6 \, kN/m^2$.
4.  **Bearing capacity factors for $\phi = 0^\circ$:** $N_c = 5.7$, $N_q = 1.0$, $N_\gamma = 0.0$.
5.  **Strip footing formula:** $q_u = c N_c + q N_q + \frac{1}{2} \gamma B N_\gamma$
    $q_u = (30)(5.7) + (21.6)(1.0) + \frac{1}{2} (18)(2)(0.0)$
    $q_u = 171 + 21.6 + 0 = 192.6 \, kN/m^2$.
    **Answer:** $192.6 \, kN/m^2$.

**Answer 2:**
1.  **Footing details:** Circular, $B = 2.5m$, $D_f = 1m$.
2.  **Soil properties:** $\phi = 30^\circ$, $\gamma = 19 \, kN/m^3$, $c = 0 \, kN/m^2$.
3.  **Water table depth:** $D_{wf}$ from ground surface = $3m$.
4.  **Depth of water table from foundation base:** $D_{wf}$ (from base) = $3m$ (ground surface) - $1m$ (foundation depth) = $2m$.
5.  **Compare $D_{wf}$ (from base) with $B$:** $D_{wf}$ (from base) = $2m$, $B = 2.5m$. Since $D_{wf}$ (from base) is less than $B$, the water table is within the influence zone.
6.  **Surcharge pressure ($q$):** $q = \gamma D_f = 19 \times 1 = 19 \, kN/m^2$.
7.  **Bearing capacity factors for $\phi = 30^\circ$:** $N_c = 30.1$, $N_q = 11.4$, $N_\gamma = 19.7$.
8.  **Modification factor $R_w$:** $D_{wf}$ (from base) = $2m$, $B = 2.5m$.
    $R_w = 0.5 + 0.5 \frac{D_{wf}}{B} = 0.5 + 0.5 \frac{2}{2.5} = 0.5 + 0.5 \times 0.8 = 0.5 + 0.4 = 0.9$.
9.  **Effective unit weight ($\gamma'$):** The soil below the foundation is likely saturated.
    $\gamma' = \gamma_{sat} - \gamma_w$. Assuming $\gamma_{sat}$ is approximately $20 \, kN/m^3$ for sand.
    $\gamma' = 20 - 9.81 \approx 10.19 \, kN/m^3$.
10. **Circular footing formula:** $q_u = 1.3 c N_c + q N_q + 0.3 \gamma' B N_\gamma R_w$
    $q_u = 1.3 (0)(30.1) + (19)(11.4) + 0.3 (10.19)(2.5)(19.7)(0.9)$
    $q_u = 0 + 216.6 + 451.3 = 667.9 \, kN/m^2$.
11. **Allowable bearing capacity:** $q_{all} = q_u / FOS = 667.9 / 3 = 222.63 \, kN/m^2$.
    **Answer:** $222.63 \, kN/m^2$.

**Answer 3:**
1.  **Footing details:** Square, $B = 3m$, $D_f = 1.5m$.
2.  **Soil properties:** $\phi = 20^\circ$, $\gamma = 18.5 \, kN/m^3$, $c = 5 \, kN/m^2$.
3.  **Water table depth:** $D_{wf}$ from ground surface = $1.8m$.
4.  **Depth of water table from foundation base:** $D_{wf}$ (from base) = $1.8m$ (ground surface) - $1.5m$ (foundation depth) = $0.3m$.
5.  **Compare $D_{wf}$ (from base) with $B$:** $D_{wf}$ (from base) = $0.3m$, $B = 3m$. Since $0 < 0.3m < 3m$, the water table is within the influence zone.
6.  **Surcharge pressure ($q$):** $q = \gamma D_f = 18.5 \times 1.5 = 27.75 \, kN/m^2$.
7.  **Bearing capacity factors for $\phi = 20^\circ$:** $N_c = 14.8$, $N_q = 5.6$, $N_\gamma = 4.4$.
8.  **Modification factor $R_w$:** $D_{wf}$ (from base) = $0.3m$, $B = 3m$.
    $R_w = 0.5 + 0.5 \frac{D_{wf}}{B} = 0.5 + 0.5 \frac{0.3}{3} = 0.5 + 0.5 \times 0.1 = 0.5 + 0.05 = 0.55$.
9.  **Effective unit weight ($\gamma'$):** Since the water table is at $0.3m$ below the base, the soil in this zone is saturated.
    $\gamma' = \gamma_{sat} - \gamma_w = 20 \, kN/m^3 - 9.81 \, kN/m^3 \approx 10.19 \, kN/m^3$.
10. **Square footing formula:** $q_u = 1.3 c N_c + q N_q + 0.4 \gamma' B N_\gamma R_w$
    $q_u = 1.3 (5)(14.8) + (27.75)(5.6) + 0.4 (10.19)(3)(4.4)(0.55)$
    $q_u = 96.2 + 155.4 + 48.7 = 300.3 \, kN/m^2$.
11. **Allowable bearing capacity:** $q_{all} = q_u / FOS = 300.3 / 3 = 100.1 \, kN/m^2$.
    **Answer:** $100.1 \, kN/m^2$.

---

## Important Points to Remember:

*   **Always use the correct Terzaghi formula for the footing shape (strip, square, circular).**
*   **Ensure you have the correct bearing capacity factors ($N_c$, $N_q$, $N_\gamma$) corresponding to the soil's angle of internal friction ($\phi$).**
*   **Carefully calculate the surcharge pressure ($q = \gamma D_f$).**
*   **When the water table is present, always determine its depth relative to the foundation base.**
*   **Use the appropriate effective unit weight ($\gamma'$) when calculating bearing capacity in the presence of a water table.**
*   **Apply the modification factor ($R_w$) correctly based on the water table depth relative to the foundation width.**
*   **Always divide the ultimate bearing capacity by the Factor of Safety to get the allowable bearing capacity.**
*   **For cohesive soils ($\phi=0$), the $N_\gamma$ term is zero, and the bearing capacity is primarily dependent on cohesion and surcharge.**
*   **For cohesionless soils ($c=0$), the bearing capacity is mainly dependent on the angle of internal friction ($\phi$), width ($B$), and depth ($D_f$).**
