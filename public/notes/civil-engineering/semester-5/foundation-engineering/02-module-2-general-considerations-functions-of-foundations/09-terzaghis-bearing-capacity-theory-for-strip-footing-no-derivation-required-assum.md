---
title: "Terzaghi’s bearing capacity theory for strip footing [no derivation required] – Assumptions -Gross and Net bearing pressure - Ultimate and Safe bearing capacity - -Allowable soil pressure -Bearing capacity factors- Numerical problems"
subject: "FOUNDATION ENGINEERING"
module: "Module 2: General Considerations: Functions of foundations "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e3a"
status: "completed"
scrapedAt: "2026-05-20T18:48:37.068Z"
---
# FOUNDATION ENGINEERING: Module 2 - General Considerations: Functions of Foundations

## Topic: Terzaghi's Bearing Capacity Theory for Strip Footing

This module delves into the fundamental principles governing the load-carrying capacity of shallow foundations, specifically focusing on Terzaghi's seminal theory for strip footings.

### 1. Functions of Foundations

Foundations are critical structural elements that serve several vital functions:

*   **Transferring Load:** The primary function of a foundation is to safely transfer the loads from the superstructure (columns, walls) to the underlying soil or rock.
*   **Settlement Control:** Foundations are designed to limit the total and differential settlements of the structure to acceptable values, preventing damage to the building and ensuring its serviceability.
*   **Stability:** Foundations provide lateral stability against overturning and sliding forces, such as those from wind or seismic activity.
*   **Uniform Load Distribution:** They distribute the concentrated loads from structural members over a larger area of soil, reducing the stress intensity on the soil.
*   **Protection from Environmental Factors:** Foundations protect the structure from the effects of moisture, frost, and other environmental conditions that can affect the soil.

### 2. Terzaghi's Bearing Capacity Theory for Strip Footing

**Introduction:**

Terzaghi's bearing capacity theory is a foundational concept in geotechnical engineering for determining the ultimate load a soil can support beneath a foundation. It's a simplified, yet powerful, analytical model that provides a good estimate of bearing capacity. The theory is most directly applicable to **strip footings**, which are infinitely long in one direction.

**Key Concept: Bearing Capacity**

*   **Bearing Capacity:** The maximum intensity of pressure that the soil can transmit to the foundation without shear failure or excessive settlement.

**Terzaghi's Bearing Capacity Equation for Strip Footing (No Derivation Required):**

The ultimate bearing capacity ($q_u$) of a strip footing is given by:

$q_u = c'N_c + qN_q + 0.5 \gamma'BN_{\gamma}$

Where:

*   $q_u$ = Ultimate bearing capacity (pressure)
*   $c'$ = Cohesion of the soil at the foundation base
*   $N_c$, $N_q$, $N_{\gamma}$ = Bearing capacity factors (dimensionless, depend on the angle of internal friction $\phi'$)
*   $q$ = Effective overburden pressure at the foundation base level ($q = \gamma D_f$, where $\gamma$ is the effective unit weight of the soil above the foundation and $D_f$ is the depth of foundation)
*   $\gamma'$ = Effective unit weight of the soil below the foundation base
*   $B$ = Width of the strip footing

**Assumptions of Terzaghi's Theory:**

Terzaghi's theory relies on several simplifying assumptions to make the analysis tractable. Understanding these is crucial for interpreting the results:

1.  **Strip Footing:** The foundation is assumed to be infinitely long in one direction (plane strain condition).
2.  **Homogeneous Soil:** The soil is assumed to be homogeneous and isotropic (properties are the same in all directions and at all locations).
3.  **Shallow Foundation:** The depth of the foundation ($D_f$) is less than or equal to its width ($B$), i.e., $D_f \le B$.
4.  **Vertical Load:** The load is assumed to be vertical and applied at the center of the footing. No moments or eccentric loads are considered.
5.  **Shear Failure:** Failure is assumed to be a general shear failure, characterized by a distinct slip surface extending to the ground surface.
6.  **Rigid Base:** The foundation is assumed to be perfectly rigid.
7.  **Smooth Base:** The base of the foundation is assumed to be smooth against the soil (though some formulations consider a rough base).
8.  **No Ground Water Table:** The original theory was developed for a dry soil condition. Later modifications account for the groundwater table.
9.  **Vertical Load Inclination:** The load is assumed to be applied vertically.

**Important Point to Remember:** Terzaghi's theory is primarily for **general shear failure**. For dense sands and stiff clays, this is a reasonable assumption. However, for loose sands and soft clays, **local or punching shear failure** might occur, for which Terzaghi's factors may not be directly applicable without modification.

### 3. Gross and Net Bearing Pressure

Understanding the distinction between gross and net bearing pressure is vital for applying the bearing capacity equation:

*   **Gross Bearing Pressure ($q$):** The total load per unit area applied at the foundation level. This includes the weight of the superstructure and the weight of the foundation itself.

    $q = \frac{P_{total}}{A}$

    Where:
    *   $P_{total}$ = Total load on the foundation
    *   $A$ = Area of the foundation

*   **Net Bearing Pressure ($q_n$):** The pressure transmitted to the soil due to the superstructure load only. It's the gross pressure minus the effective overburden pressure at the foundation level.

    $q_n = q - q$

    Where:
    *   $q$ = Gross bearing pressure
    *   $q = \gamma D_f$ = Effective overburden pressure at foundation base.

**Relationship to Terzaghi's Equation:**

Terzaghi's equation calculates the **ultimate bearing capacity ($q_u$)**, which is the maximum *gross* pressure the soil can withstand. However, the components of the equation are often interpreted in terms of net pressures:

*   **Net Ultimate Bearing Capacity ($q_{nu}$):** The maximum net pressure the soil can withstand.

    $q_{nu} = q_u - q = c'N_c + q(N_q - 1) + 0.5 \gamma'BN_{\gamma}$

    This form is useful for design as it directly relates to the pressure imposed by the superstructure.

### 4. Ultimate and Safe Bearing Capacity

*   **Ultimate Bearing Capacity ($q_u$):** As defined earlier, it's the maximum gross pressure intensity that the soil can sustain without shear failure. It represents the load at the point of collapse.

*   **Safe Bearing Capacity ($q_s$):** The maximum allowable bearing pressure that the soil can withstand without shear failure, incorporating a factor of safety.

    $q_s = \frac{q_u}{FS}$

    Where:
    *   $FS$ = Factor of Safety (typically 2.5 to 3.0 for general shear failure, but can be higher for other failure modes or specific codes).

    **Important Point to Remember:** The safe bearing capacity ($q_s$) is the pressure that should not be exceeded by the **gross bearing pressure ($q$)** applied by the foundation.

### 5. Allowable Soil Pressure ($q_a$)

*   **Allowable Soil Pressure ($q_a$):** This is the maximum pressure that can be applied to the soil, considering *both* shear failure and settlement. In many cases, settlement governs the design rather than shear failure.

    $q_a = \min \left( q_s, q_{settlement} \right)$

    Where:
    *   $q_s$ = Safe bearing capacity (governed by shear failure)
    *   $q_{settlement}$ = Allowable pressure to limit settlement to an acceptable level (determined by empirical methods, settlement analysis, or building codes).

**Important Point to Remember:** The allowable soil pressure is the actual design parameter used to determine the required foundation width. The **gross pressure ($q$)** from the structure should not exceed the allowable soil pressure ($q_a$).

### 6. Bearing Capacity Factors ($N_c, N_q, N_{\gamma}$)

These factors are dimensionless coefficients that depend solely on the **angle of internal friction ($\phi'$)** of the soil. They are derived from plasticity theory. For strip footings, Terzaghi's original expressions for these factors are:

*   **$N_c = \tan^2\left(45^\circ + \frac{\phi'}{2}\right)e^{\pi \tan \phi'}$**
*   **$N_q = \tan^2\left(45^\circ + \frac{\phi'}{2}\right)e^{\pi \tan \phi'}$**
*   **$N_{\gamma} = \tan\left(45^\circ + \frac{\phi'}{2}\right) \frac{K_p - 1}{\cos \phi'} - 1 = (N_q - 1) \tan(1.4 \phi')$** (There are several approximations for $N_\gamma$; the one provided is a common one derived from Meyerhof's work, which is often used in conjunction with Terzaghi's framework for $N_c$ and $N_q$).

| $\phi'$ (degrees) | $N_c$   | $N_q$   | $N_{\gamma}$ |
| :---------------- | :------ | :------ | :----------- |
| 0                 | 5.71    | 1.00    | 0.00         |
| 10                | 8.34    | 2.71    | 0.76         |
| 20                | 12.54   | 4.79    | 2.52         |
| 30                | 22.02   | 10.66   | 7.09         |
| 35                | 33.30   | 18.40   | 13.40        |
| 40                | 49.40   | 30.14   | 25.20        |

**Important Point to Remember:** For cohesive soils ($\phi' = 0$), the bearing capacity equation simplifies significantly.

### 7. Numerical Problems

Let's work through some examples to solidify your understanding.

**Example 1: Strip Footing on Sand**

A strip footing of width $B = 1.5$ m is to be founded at a depth $D_f = 1.0$ m in a sand deposit. The effective unit weight of the sand is $\gamma' = 18 \, \text{kN/m}^3$ above the water table and $\gamma' = 20 \, \text{kN/m}^3$ below the water table. The groundwater table is at a depth of 1.5 m from the ground surface. The sand has an angle of internal friction $\phi' = 30^\circ$. Assume the base of the footing is smooth and the soil is homogeneous. Calculate the safe bearing capacity of the footing, assuming a factor of safety $FS = 3$.

**Solution:**

1.  **Determine Bearing Capacity Factors for $\phi' = 30^\circ$:**
    From the table: $N_c = 22.02$, $N_q = 10.66$, $N_{\gamma} = 7.09$

2.  **Calculate Effective Overburden Pressure ($q$):**
    The foundation is at $D_f = 1.0$ m. The water table is at 1.5 m. So, the soil above the foundation is dry.
    $q = \gamma D_f = 18 \, \text{kN/m}^3 \times 1.0 \, \text{m} = 18 \, \text{kN/m}^2$

3.  **Calculate Effective Unit Weight ($\gamma'$) below the foundation:**
    The water table is at 1.5 m, and the foundation is at 1.0 m. The soil below the foundation (from 1.0 m to 1.0 m + width) will be partially submerged, or if the water table is considered to extend to the base, it will be fully submerged. For simplicity in this example, let's assume the effective unit weight below the foundation's base is influenced by saturation. If the water table is at 1.5m and the footing is at 1.0m, the soil *below* the footing up to the water table is submerged. Let's assume the saturated unit weight is $\gamma_{sat} = 20 \, \text{kN/m}^3$ and the unit weight of water $\gamma_w = 10 \, \text{kN/m}^3$. Then the effective unit weight is $\gamma' = \gamma_{sat} - \gamma_w = 20 - 10 = 10 \, \text{kN/m}^3$ for the submerged portion. However, the original Terzaghi's equation uses $\gamma'$ as the effective unit weight of the soil below the footing. If the water table is deep, it's $\gamma'$. If it's shallow, it influences the effective unit weight.

    **Correction for Water Table:** Terzaghi's original equation doesn't explicitly account for water table depth in a simple way. A common modification is to adjust the $\gamma'$ term based on the water table location. If the water table is at or above the base of the footing ($D_f$), the effective unit weight in the third term should be reduced.

    A more accurate approach involves modifying the third term for the influence of the water table. If the water table is at depth $d_w$ below the ground surface, and $D_f \le d_w \le D_f + B$:

    $0.5 \gamma'BN_{\gamma}$ becomes $0.5 \gamma'BN_{\gamma} \left(1 - \frac{d_w - D_f}{B}\right)$
    And the $qN_q$ term is affected if $d_w < D_f$.

    Let's reconsider the problem with a common simplification for water table at depth $d_w$ from the base:
    If the water table is at depth $d_w$ from the *base* of the footing:
    *   For the $qN_q$ term: Use effective pressure $q = (\gamma D_f) - (\gamma_w d_w)$ if $d_w$ is less than $D_f$.
    *   For the $0.5 \gamma'BN_\gamma$ term: Use $\gamma'$ for the soil layer below the footing. If the water table is at or below the footing base ($d_w \ge 0$), then the effective unit weight $\gamma'$ below the footing is used. If the water table is above the footing base ($d_w < 0$), the effective unit weight below the footing would be $\gamma_{sat} - \gamma_w$.

    Let's re-evaluate Example 1 carefully.
    $D_f = 1.0$ m. Water table at $1.5$ m from ground surface.
    This means the water table is $1.5 - 1.0 = 0.5$ m below the base of the footing.
    So, $d_w = 0.5$ m.
    Since $d_w > 0$, the soil below the footing is saturated.
    Effective unit weight of dry sand $\gamma' = 18 \, \text{kN/m}^3$.
    Saturated unit weight $\gamma_{sat} = 20 \, \text{kN/m}^3$.
    Unit weight of water $\gamma_w = 10 \, \text{kN/m}^3$.
    Effective unit weight of submerged soil $\gamma'_\text{sub} = \gamma_{sat} - \gamma_w = 20 - 10 = 10 \, \text{kN/m}^3$.

    **Applying water table correction:**
    The original equation's third term is $0.5 \gamma'BN_{\gamma}$.
    When the water table is at depth $d_w$ below the base ($d_w > 0$), the effective unit weight in the third term is adjusted:
    $0.5 \gamma'BN_{\gamma}$ becomes $0.5 \gamma' B N_\gamma (1 - d_w/B)$ if the water table is within depth B.

    In this case, $d_w = 0.5$ m and $B = 1.5$ m.
    The factor for the $\gamma'$ term becomes $(1 - 0.5/1.5) = (1 - 1/3) = 2/3$.
    The effective unit weight to be used is the submerged unit weight: $\gamma'_{sub} = 10 \, \text{kN/m}^3$.

    So, the third term contribution is $0.5 \times (\gamma'_{sub} \times \frac{2}{3} B) \times N_{\gamma}$ is not standard.
    A more common approach is to use the effective unit weight of the soil below the foundation and apply a water table factor to the entire third term.

    **Revised Water Table Correction:**
    If the water table is at a depth $d_w$ below the base:
    *   If $d_w \ge B$, no water table correction is needed for the third term.
    *   If $0 \le d_w < B$, the effective unit weight in the third term is reduced by a factor $(1 - d_w/B)$.
    *   If $d_w < 0$ (water table above base), the effective unit weight below the base should be $\gamma_{sat} - \gamma_w$.

    In our case: $d_w = 0.5$ m (below base), $B = 1.5$ m. So $0 \le d_w < B$.
    The effective unit weight below the base is $\gamma'_{sub} = 10 \, \text{kN/m}^3$.
    The water table factor is $(1 - d_w/B) = (1 - 0.5/1.5) = (1 - 1/3) = 2/3$.

    So, the third term becomes: $0.5 \times (\gamma'_{sub}) \times B \times N_{\gamma} \times (1 - d_w/B)$
    $= 0.5 \times (10 \, \text{kN/m}^3) \times (1.5 \, \text{m}) \times (7.09) \times (2/3)$
    $= 0.5 \times 10 \times 1.5 \times 7.09 \times (2/3) = 35.45 \, \text{kN/m}^2$

    **Now, calculate the ultimate bearing capacity ($q_u$):**
    $q_u = c'N_c + qN_q + 0.5 \gamma'BN_{\gamma}$

    Since it's sand, $c' = 0$.
    $q_u = 0 \times 22.02 + (18 \, \text{kN/m}^2) \times (10.66) + 0.5 \times (10 \, \text{kN/m}^3) \times (1.5 \, \text{m}) \times (7.09) \times (1 - 0.5/1.5)$
    $q_u = 0 + 191.88 \, \text{kN/m}^2 + (0.5 \times 10 \times 1.5 \times 7.09 \times 2/3)$
    $q_u = 191.88 \, \text{kN/m}^2 + (52.5 \, \text{kN/m}^2) \times (2/3)$
    $q_u = 191.88 \, \text{kN/m}^2 + 35.0 \, \text{kN/m}^2$ (rounding for calculation)
    $q_u = 226.88 \, \text{kN/m}^2$

    **Calculate Safe Bearing Capacity ($q_s$):**
    $q_s = \frac{q_u}{FS} = \frac{226.88 \, \text{kN/m}^2}{3} = 75.63 \, \text{kN/m}^2$

    **Answer:** The safe bearing capacity is approximately $75.6 \, \text{kN/m}^2$.

---

**Example 2: Strip Footing on Clay**

A strip footing of width $B = 2.0$ m is to be founded at a depth $D_f = 1.2$ m in a saturated clay. The clay has the following properties: cohesion $c' = 30 \, \text{kN/m}^2$, angle of internal friction $\phi' = 0^\circ$, and unit weight $\gamma = 19 \, \text{kN/m}^3$. The groundwater table is far below the foundation. Calculate the ultimate bearing capacity and the safe bearing capacity with $FS = 3$.

**Solution:**

1.  **Determine Bearing Capacity Factors for $\phi' = 0^\circ$:**
    From the table: $N_c = 5.71$, $N_q = 1.00$, $N_{\gamma} = 0.00$

2.  **Calculate Effective Overburden Pressure ($q$):**
    The soil is saturated clay, and the water table is far below, so we use the given unit weight as effective.
    $q = \gamma D_f = 19 \, \text{kN/m}^3 \times 1.2 \, \text{m} = 22.8 \, \text{kN/m}^2$

3.  **Calculate Ultimate Bearing Capacity ($q_u$):**
    $q_u = c'N_c + qN_q + 0.5 \gamma'BN_{\gamma}$
    $q_u = (30 \, \text{kN/m}^2) \times (5.71) + (22.8 \, \text{kN/m}^2) \times (1.00) + 0.5 \times (19 \, \text{kN/m}^3) \times (2.0 \, \text{m}) \times (0.00)$
    $q_u = 171.3 \, \text{kN/m}^2 + 22.8 \, \text{kN/m}^2 + 0$
    $q_u = 194.1 \, \text{kN/m}^2$

    **Important Note for Clay ($\phi' = 0$):** The ultimate bearing capacity is often expressed in terms of net ultimate bearing capacity for clay:
    $q_{nu} = c'N_c + q(N_q - 1) = c'N_c$ (since $N_q=1$)
    $q_{nu} = 30 \, \text{kN/m}^2 \times 5.71 = 171.3 \, \text{kN/m}^2$.
    The gross ultimate bearing capacity is $q_u = q_{nu} + q = 171.3 + 22.8 = 194.1 \, \text{kN/m}^2$.

4.  **Calculate Safe Bearing Capacity ($q_s$):**
    $q_s = \frac{q_u}{FS} = \frac{194.1 \, \text{kN/m}^2}{3} = 64.7 \, \text{kN/m}^2$

    **Answer:** The ultimate bearing capacity is $194.1 \, \text{kN/m}^2$, and the safe bearing capacity is $64.7 \, \text{kN/m}^2$.

---

### Practice Questions

1.  A strip footing of width 2.0 m is to be built on a sand deposit. The foundation is to be at a depth of 1.0 m. The sand has an angle of internal friction $\phi' = 35^\circ$, cohesion $c' = 0$, and effective unit weight $\gamma' = 19 \, \text{kN/m}^3$. The groundwater table is at a depth of 3.0 m from the ground surface. Determine the safe bearing capacity of the footing using Terzaghi's theory with a factor of safety of 3.
    *(Assume standard values for $N_c, N_q, N_{\gamma}$ for $\phi' = 35^\circ$: $N_c = 33.3$, $N_q = 18.4$, $N_{\gamma} = 13.4$)*

2.  Calculate the ultimate bearing capacity of a strip footing 1.5 m wide, founded at a depth of 0.8 m in a saturated clay deposit. The clay has $c' = 25 \, \text{kN/m}^2$, $\phi' = 0^\circ$, and $\gamma_{sat} = 18.5 \, \text{kN/m}^3$. The water table is at the ground surface.
    *(Assume $N_c = 5.71$ for $\phi' = 0^\circ$)*

---

### Answers to Practice Questions

**Answer to Question 1:**

*   **Given:** $B = 2.0$ m, $D_f = 1.0$ m, $\phi' = 35^\circ$, $c' = 0$, $\gamma' = 19 \, \text{kN/m}^3$, Water table depth = 3.0 m, $FS = 3$.
*   **Bearing Capacity Factors:** $N_c = 33.3$, $N_q = 18.4$, $N_{\gamma} = 13.4$.
*   **Effective Overburden Pressure ($q$):** The water table is at 3.0 m, and $D_f = 1.0$ m. The soil above the foundation is dry.
    $q = \gamma D_f = 19 \, \text{kN/m}^3 \times 1.0 \, \text{m} = 19 \, \text{kN/m}^2$.
*   **Water Table Correction:** The water table is at 3.0 m, which is deeper than $D_f + B = 1.0 + 2.0 = 3.0$ m. Therefore, the water table is at or below the base of the footing and does not affect the effective unit weight in the third term according to common simplifications, or its effect is negligible. We use $\gamma' = 19 \, \text{kN/m}^3$ directly.

*   **Ultimate Bearing Capacity ($q_u$):**
    $q_u = c'N_c + qN_q + 0.5 \gamma'BN_{\gamma}$
    $q_u = 0 \times 33.3 + (19 \, \text{kN/m}^2) \times (18.4) + 0.5 \times (19 \, \text{kN/m}^3) \times (2.0 \, \text{m}) \times (13.4)$
    $q_u = 0 + 349.6 \, \text{kN/m}^2 + 254.6 \, \text{kN/m}^2$
    $q_u = 604.2 \, \text{kN/m}^2$

*   **Safe Bearing Capacity ($q_s$):**
    $q_s = \frac{q_u}{FS} = \frac{604.2 \, \text{kN/m}^2}{3} = 201.4 \, \text{kN/m}^2$

**Answer:** The safe bearing capacity is $201.4 \, \text{kN/m}^2$.

---

**Answer to Question 2:**

*   **Given:** $B = 1.5$ m, $D_f = 0.8$ m, $c' = 25 \, \text{kN/m}^2$, $\phi' = 0^\circ$, $\gamma_{sat} = 18.5 \, \text{kN/m}^3$. Water table at ground surface.
*   **Bearing Capacity Factors:** $N_c = 5.71$, $N_q = 1.00$, $N_{\gamma} = 0.00$.
*   **Effective Overburden Pressure ($q$):** The water table is at the ground surface ($D_f = 0.8$ m). So the soil above the foundation is saturated.
    $q = \gamma_{sat} D_f = 18.5 \, \text{kN/m}^3 \times 0.8 \, \text{m} = 14.8 \, \text{kN/m}^2$.
*   **Ultimate Bearing Capacity ($q_u$):**
    $q_u = c'N_c + qN_q + 0.5 \gamma'BN_{\gamma}$
    $q_u = (25 \, \text{kN/m}^2) \times (5.71) + (14.8 \, \text{kN/m}^2) \times (1.00) + 0.5 \times (18.5 \, \text{kN/m}^3) \times (1.5 \, \text{m}) \times (0.00)$
    $q_u = 142.75 \, \text{kN/m}^2 + 14.8 \, \text{kN/m}^2 + 0$
    $q_u = 157.55 \, \text{kN/m}^2$

**Answer:** The ultimate bearing capacity is $157.55 \, \text{kN/m}^2$.
