---
title: "Bearing capacity of shallow foundations-Review of technology-IS code
formula for safe bearing capacity of shallow foundation."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 1: Bearing capacity of shallow foundations"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811203"
status: "completed"
scrapedAt: "2026-05-20T18:51:56.471Z"
---
# Advanced Foundation Engineering: Module 1 - Bearing Capacity of Shallow Foundations

## Topic: Review of Technology and IS Code Formula for Safe Bearing Capacity of Shallow Foundations

This module focuses on understanding the fundamental principles of bearing capacity for shallow foundations and how these are addressed by Indian Standard (IS) codes. We will review the evolution of understanding in this area and delve into the specific IS code formulations.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of bearing capacity and its importance in foundation design.
*   Review the historical development of bearing capacity theories.
*   Explain the key factors influencing the bearing capacity of shallow foundations.
*   Understand the limitations of various theoretical approaches.
*   Apply the IS code formulas for calculating the safe bearing capacity of shallow foundations.
*   Interpret and use the relevant IS codes for bearing capacity calculations.
*   Solve practical problems related to the bearing capacity of shallow foundations.

---

### 1. Introduction to Bearing Capacity

**Definition:** Bearing capacity is the maximum pressure which the soil can support at a given depth without shear failure or excessive settlement.

**Importance in Foundation Design:**

*   **Preventing Shear Failure:** Ensures the foundation does not fail due to the soil's shear strength.
*   **Controlling Settlement:** Prevents excessive settlement that could damage the structure.
*   **Foundation Size Determination:** Dictates the minimum size of the foundation required to safely transfer the structural loads to the soil.
*   **Cost-Effectiveness:** Proper bearing capacity calculation leads to efficient and economical foundation design.

**Types of Failure:**

*   **General Shear Failure:** Occurs in dense and stiff soils. Characterized by a well-defined slip surface extending from the foundation edge to the ground surface. A sudden drop in load occurs after peak load.
*   **Local Shear Failure:** Occurs in medium dense soils. Slip surfaces are confined to the soil beneath and around the foundation. The failure is not progressive and the peak load is not clearly defined.
*   **Punching Shear Failure:** Occurs in loose and soft soils, or when the foundation is relatively small compared to the soil properties. The foundation punches through the soil.

---

### 2. Review of Technology and Theoretical Development

The understanding of bearing capacity has evolved significantly over time, driven by empirical observations and theoretical advancements.

#### 2.1 Early Empirical Methods

*   **Trial and Error:** Early engineers relied on experience and observing the performance of similar structures in similar soil conditions.
*   **Load Tests:** Direct testing of foundation elements on site to determine their load-carrying capacity. Still a valuable method, but often expensive and time-consuming.

#### 2.2 Theoretical Approaches

*   **Rankine's Theory (1857):** Considered the active earth pressure condition at failure. It's simpler but less accurate for foundations, primarily applicable to retaining walls.
*   **Prandtl's Theory (1921):** Developed a solution for a strip footing on a perfectly plastic material. Introduced the concept of a rupture zone and a bearing capacity factor.
*   **Reissner's Theory (1924):** Extended Prandtl's solution to include the effect of surcharge.
*   **Terzaghi's Bearing Capacity Theory (1943):** A cornerstone in foundation engineering.
    *   **Assumptions:**
        *   Soil is a homogeneous, isotropic, and semi-infinite elastic medium.
        *   Foundation is of strip footing type (length >> width).
        *   The base of the footing is smooth.
        *   The soil is cohesive and frictional (or cohesive only, or frictional only).
        *   General shear failure occurs.
        *   The rupture zone extends to the surface.
        *   The load is vertical and concentric.
    *   **Terzaghi's General Bearing Capacity Equation:**
        $q_u = c'N_c + qN_q + 0.5 \gamma BN_\gamma$
        Where:
        *   $q_u$ = Ultimate bearing capacity
        *   $c'$ = Effective cohesion of the soil
        *   $q$ = Surcharge pressure at the foundation base level ($q = \gamma D_f$, where $\gamma$ is the unit weight of soil above the foundation and $D_f$ is the depth of foundation)
        *   $B$ = Width of the foundation
        *   $\gamma$ = Effective unit weight of the soil below the foundation
        *   $N_c$, $N_q$, $N_\gamma$ = Bearing capacity factors (functions of the angle of internal friction, $\phi'$)

    *   **Bearing Capacity Factors (Terzaghi's):** These are empirical and derived from analysis and experimental data.
        *   $N_q = e^{\pi \tan\phi'} \tan^2(45^\circ + \frac{\phi'}{2})$
        *   $N_c = (N_q - 1) \cot\phi'$
        *   $N_\gamma = 1.5 (N_q - 1) \tan\phi'$ (There are variations in the $N_\gamma$ factor, but Terzaghi's is commonly used).

*   **Meyerhof's Bearing Capacity Theory (1951, 1963, 1974):**
    *   **Improvements:** Considered the effect of footing shape, load inclination, and ground inclination.
    *   **Meyerhof's General Bearing Capacity Equation:**
        $q_u = c'N_c s_c d_c i_c + qN_q s_q d_q i_q + 0.5 \gamma BN_\gamma s_\gamma d_\gamma i_\gamma$
        Where:
        *   $s_c, s_q, s_\gamma$ = Shape factors
        *   $d_c, d_q, d_\gamma$ = Depth factors
        *   $i_c, i_q, i_\gamma$ = Inclination factors
        *   $N_c, N_q, N_\gamma$ = Bearing capacity factors (often based on Meyerhof's or Hansen's values which differ slightly from Terzaghi's).

*   **Hansen's Bearing Capacity Theory (1970):**
    *   **Further Refinements:** Incorporated base inclination and ground slope factors.
    *   **Hansen's General Bearing Capacity Equation:** Similar form to Meyerhof's but with additional factors for base inclination ($b_c, b_q, b_\gamma$) and ground slope ($g_c, g_q, g_\gamma$).

*   **Vesic's Bearing Capacity Theory (1975):**
    *   **Advanced Considerations:** Included factors for compressibility of soil and rigidity of the foundation. Used a different expression for $N_\gamma$.

**Key Factors Influencing Bearing Capacity:**

*   **Soil Properties:**
    *   **Cohesion ($c'$):** Stronger in cohesive soils.
    *   **Angle of Internal Friction ($\phi'$):** Crucial for frictional soils; higher $\phi'$ means higher bearing capacity.
    *   **Unit Weight ($\gamma$):** Denser soils have higher unit weight and thus higher bearing capacity.
    *   **Soil Compressibility:** Highly compressible soils might lead to excessive settlement even if shear strength is adequate.
*   **Foundation Characteristics:**
    *   **Width ($B$):** Wider foundations generally have higher bearing capacity per unit area (due to the $\gamma B$ term).
    *   **Depth of Foundation ($D_f$):** Deeper foundations benefit from the surcharge pressure ($q$) and confinement from the surrounding soil.
    *   **Shape of Foundation:** Strip, square, circular, rectangular footings have different bearing capacities due to stress distribution.
*   **Groundwater Table:**
    *   **Position of GWT:** If the GWT is at or above the foundation base, the effective unit weight ($\gamma'$) is used, reducing the bearing capacity.
*   **Load Characteristics:**
    *   **Inclination of Load:** Inclined loads reduce the effective bearing capacity.
*   **Ground Slope and Base Tilt:** Sloping ground or a tilted foundation base can affect stress distribution and reduce bearing capacity.

---

### 3. IS Code Formula for Safe Bearing Capacity of Shallow Foundations

The Indian Standard codes provide simplified but practical formulas for calculating the safe bearing capacity, considering various soil types and foundation conditions. The primary code for foundation design in India is **IS 6403:1983 - Code of Practice for Bearing Capacity of Shallow Foundations**.

**Key Concept: Safe Bearing Capacity ($q_{safe}$)**

Safe bearing capacity is the maximum allowable intensity of load that the soil can support without shear failure or settlement exceeding the permissible limits. It is calculated by dividing the ultimate bearing capacity by a Factor of Safety (FOS).

$q_{safe} = \frac{q_u}{FOS}$

**Factor of Safety (FOS):** Typically taken as 2.5 or 3.0, depending on the uncertainty in soil properties, loading, and the consequences of failure. IS 6403:1983 generally recommends a FOS of 3.0.

#### 3.1 IS Code Provisions (IS 6403:1983)

IS 6403:1983 provides a generalized bearing capacity equation based on the work of Meyerhof and Hansen, adapted for Indian conditions.

**General Bearing Capacity Equation (IS 6403:1983):**

$q_u = c'N_c s_c d_c i_c g_c b_c + qN_q s_q d_q i_q g_q b_q + 0.5 \gamma B' N_\gamma s_\gamma d_\gamma i_\gamma g_\gamma b_\gamma$

Where:

*   $q_u$ = Ultimate bearing capacity
*   $c'$ = Cohesion of the soil
*   $q = \gamma D_f$ = Surcharge pressure at the foundation level
*   $\gamma$ = Unit weight of soil below the foundation base
*   $B'$ = Effective width of the foundation (used when the load is eccentric)
*   $N_c, N_q, N_\gamma$ = Bearing capacity factors (given in tables based on $\phi'$)
*   $s_c, s_q, s_\gamma$ = Shape factors
*   $d_c, d_q, d_\gamma$ = Depth factors
*   $i_c, i_q, i_\gamma$ = Load inclination factors
*   $g_c, g_q, g_\gamma$ = Ground inclination factors
*   $b_c, b_q, b_\gamma$ = Base inclination factors

**Important Notes on IS Code Application:**

1.  **Bearing Capacity Factors ($N_c, N_q, N_\gamma$):** The code provides tables for these factors based on $\phi'$.
    *   $N_q = e^{\pi \tan\phi'} \tan^2(45^\circ + \frac{\phi'}{2})$
    *   $N_c = (N_q - 1) \cot\phi'$
    *   $N_\gamma = 1.5 (N_q - 1) \tan\phi'$ (This is Terzaghi's form, IS code values are derived from various sources and might slightly differ in tables).

2.  **Effective Width ($B'$):** Used when the load is eccentric.
    *   $B' = B - 2e_x$ and $L' = L - 2e_y$
    *   Effective area = $A' = B'L'$
    *   Eccentricity, $e = \frac{M}{P}$ (where $M$ is moment and $P$ is axial load). For a single footing, $e_x = \frac{M_y}{P}$ and $e_y = \frac{M_x}{P}$.
    *   The bearing pressure distribution becomes trapezoidal. The formula for ultimate bearing capacity needs to be modified by considering the effective width $B'$ in the last term. The first two terms are often considered for the net pressure.

3.  **Shape Factors ($s_c, s_q, s_\gamma$):** Depend on the ratio $B/L$.
    *   For strip footing: $B/L \to 0$.
    *   For square footing: $B/L = 1$.
    *   For circular footing: $B/L = 1$ (effectively diameter as $B$).
    *   General formulas are provided in the code.

4.  **Depth Factors ($d_c, d_q, d_\gamma$):** Account for the depth of embedment.
    *   These are generally applied for $D_f/B < 1$. For $D_f/B \ge 1$, some factors become unity or are adjusted.

5.  **Load Inclination Factors ($i_c, i_q, i_\gamma$):** Account for the inclination of the resultant load with respect to the vertical.
    *   The resultant load can be resolved into vertical and horizontal components.
    *   These factors reduce the bearing capacity.

6.  **Ground Slope Factors ($g_c, g_q, g_\gamma$):** Account for sloping ground at the foundation level.
    *   These are applied when the ground surface adjacent to the foundation is not horizontal.

7.  **Base Inclination Factors ($b_c, b_q, b_\gamma$):** Account for a tilted foundation base.
    *   These are applied when the foundation base is not horizontal.

**Simplified IS Code Formula (for vertical load and horizontal ground):**

In many common scenarios, we deal with vertical loads on a horizontal ground surface with a level foundation. In such cases, the ground slope factors ($g_c, g_q, g_\gamma$) and base inclination factors ($b_c, b_q, b_\gamma$) are taken as 1.0. The load inclination factors ($i_c, i_q, i_\gamma$) are also 1.0 for vertical loads.

This simplifies the equation to:

$q_u = c'N_c s_c d_c + qN_q s_q d_q + 0.5 \gamma B' N_\gamma s_\gamma d_\gamma$

**Important: The IS code primarily focuses on NET ultimate bearing capacity.**

*   **Gross Ultimate Bearing Capacity ($q_u$):** Total load per unit area at the base of the foundation.
*   **Net Ultimate Bearing Capacity ($q_{nu}$):** The ultimate bearing capacity in excess of the surcharge pressure at the foundation level.
    $q_{nu} = q_u - q$
    The IS code equation as presented above directly calculates the gross ultimate bearing capacity. However, often the terms related to cohesion and surcharge are considered for net pressure.

    A more accurate interpretation of how the terms are used:
    The first term ($c'N_c s_c d_c$) relates to the cohesive contribution.
    The second term ($qN_q s_q d_q$) relates to the surcharge contribution.
    The third term ($0.5 \gamma B' N_\gamma s_\gamma d_\gamma$) relates to the soil's frictional contribution due to its weight.

    **For computing net ultimate bearing capacity ($q_{nu}$):**
    $q_{nu} = c'N_c s_c d_c + q(N_q s_q d_q - 1) + 0.5 \gamma B' N_\gamma s_\gamma d_\gamma$

    **For computing safe bearing capacity ($q_{safe}$):**
    $q_{safe} = \frac{q_{nu}}{FOS} + q$

    This formulation states that the allowable bearing pressure is the net allowable bearing pressure plus the overburden pressure at the foundation level. This is the most common interpretation in practice.

**IS Code for Granular Soils (Sands and Gravels):**

For granular soils, cohesion ($c'$) is zero ($\phi' > 0$).
The ultimate bearing capacity equation simplifies to:
$q_u = qN_q s_q d_q + 0.5 \gamma B' N_\gamma s_\gamma d_\gamma$

And the net ultimate bearing capacity:
$q_{nu} = q(N_q s_q d_q - 1) + 0.5 \gamma B' N_\gamma s_\gamma d_\gamma$

**IS Code for Cohesive Soils (Clays):**

For saturated clays (undrained condition, $\phi_u = 0$), the angle of internal friction $\phi_u$ is zero.
$N_c = 5.14$ (from table)
$N_q = 1.0$ (from table)
$N_\gamma = 0$ (from table)

The ultimate bearing capacity equation simplifies significantly:
$q_u = c_u N_c s_c d_c + q$
Where $c_u$ is the undrained cohesion.
Assuming $s_c=1, d_c=1$ for a strip footing.
$q_u = 5.14 c_u + q$

And the net ultimate bearing capacity:
$q_{nu} = 5.14 c_u$

**Settlement Considerations (IS 6403:1983):**

While the IS code provides formulas for ultimate bearing capacity, it also emphasizes that the *safe bearing capacity is governed by the allowable settlement*. The settlement calculation is a separate but crucial part of the design process. The allowable bearing pressure derived from settlement criteria should be compared with that derived from shear criteria, and the lower value should be adopted.

**Factors to Remember when using IS Code:**

*   **Choose the correct soil parameters:** Use effective stress parameters ($c', \phi'$) for long-term stability and undrained parameters ($c_u, \phi_u = 0$) for short-term stability of saturated clays.
*   **Determine the correct Bearing Capacity Factors ($N_c, N_q, N_\gamma$):** Use the tables provided in IS 6403:1983 based on the calculated $\phi'$.
*   **Apply appropriate Shape, Depth, and Inclination factors:** Carefully select these factors based on the foundation geometry, embedment depth, and load conditions.
*   **Consider the Groundwater Table:** Use effective unit weight ($\gamma'$) if the GWT is within the zone of influence.
*   **Calculate Effective Width ($B'$) for eccentric loads.**
*   **Always apply a Factor of Safety (FOS):** Typically 3.0, for converting ultimate bearing capacity to safe bearing capacity.
*   **Compare with settlement criteria:** The final allowable bearing capacity should also satisfy settlement limits.

---

### 4. Examples

**Example 1: Strip Footing in Sand**

A strip footing of width 2 m is to be constructed on a sandy soil. The depth of foundation is 1.5 m. The soil properties are:
$\gamma = 18 \, \text{kN/m}^3$
$\phi' = 30^\circ$
The groundwater table is far below the foundation.
Calculate the safe bearing capacity using IS code formula, assuming a vertical load and horizontal ground. Use FOS = 3.0.

**Solution:**

1.  **Soil type:** Sand, so $c' = 0$.
2.  **Foundation type:** Strip footing, so $B/L \to 0$.
3.  **Parameters:**
    *   $B = 2 \, \text{m}$
    *   $D_f = 1.5 \, \text{m}$
    *   $\gamma = 18 \, \text{kN/m}^3$
    *   $\phi' = 30^\circ$
    *   $q = \gamma D_f = 18 \times 1.5 = 27 \, \text{kN/m}^2$
    *   FOS = 3.0

4.  **Bearing Capacity Factors for $\phi' = 30^\circ$ (from IS 6403:1983 tables):**
    *   $N_c = 37.17$
    *   $N_q = 22.02$
    *   $N_\gamma = 19.33$

5.  **Shape Factors for strip footing ($B/L = 0$):**
    *   $s_c = 1.0$
    *   $s_q = 1.0$
    *   $s_\gamma = 1.0$

6.  **Depth Factors for $D_f/B = 1.5/2 = 0.75$ (interpolate from IS 6403:1983 tables):**
    *   For strip footing:
        *   $d_c = 1 + 0.2 \frac{D_f}{B} = 1 + 0.2 \times 0.75 = 1.15$
        *   $d_q = 1 + 0.1 \frac{D_f}{B} = 1 + 0.1 \times 0.75 = 1.075$
        *   $d_\gamma = 1.0$ (for $D_f/B \le 1$)

7.  **IS Code Formula for $q_u$ (for granular soil):**
    $q_u = qN_q s_q d_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma$
    (Since $c'=0$, the first term in the general formula becomes 0 if interpreted as net)

    Let's use the net ultimate bearing capacity approach:
    $q_{nu} = q(N_q s_q d_q - 1) + 0.5 \gamma B N_\gamma s_\gamma d_\gamma$
    $q_{nu} = 27(22.02 \times 1.0 \times 1.075 - 1) + 0.5 \times 18 \times 2 \times 19.33 \times 1.0 \times 1.0$
    $q_{nu} = 27(23.6715 - 1) + 347.94$
    $q_{nu} = 27(22.6715) + 347.94$
    $q_{nu} = 612.13 + 347.94 = 960.07 \, \text{kN/m}^2$

8.  **Safe Bearing Capacity ($q_{safe}$):**
    $q_{safe} = \frac{q_{nu}}{FOS} + q$
    $q_{safe} = \frac{960.07}{3.0} + 27$
    $q_{safe} = 320.02 + 27 = 347.02 \, \text{kN/m}^2$

**Example 2: Square Footing in Clay**

A square footing of size 3 m x 3 m is to be constructed on a saturated clay deposit. The depth of foundation is 2 m. The soil properties are:
Undrained cohesion $c_u = 40 \, \text{kN/m}^2$
Unit weight $\gamma = 17 \, \text{kN/m}^3$
Assume the groundwater table is at the foundation level.
Calculate the safe bearing capacity using IS code formula, assuming a vertical load and horizontal ground. Use FOS = 3.0.

**Solution:**

1.  **Soil type:** Saturated clay, so $\phi_u = 0$.
2.  **Foundation type:** Square footing, so $B/L = 1$.
3.  **Parameters:**
    *   $B = 3 \, \text{m}$
    *   $L = 3 \, \text{m}$
    *   $D_f = 2 \, \text{m}$
    *   $c_u = 40 \, \text{kN/m}^2$
    *   $\gamma = 17 \, \text{kN/m}^3$
    *   Groundwater table at foundation level means the surcharge $q$ is calculated using the submerged unit weight if the soil below the GWT is submerged. However, in the IS code formula for saturated clay, it's often simpler to consider $q$ as $\gamma D_f$ and then the effective cohesion term dominates. A more rigorous approach uses effective stress. For simplicity with $\phi_u=0$, we consider:
        $q = \gamma_{submerged} D_f = (17 - 9.81) \times 2 = 7.19 \times 2 = 14.38 \, \text{kN/m}^2$
        However, the IS code formula for $\phi_u=0$ is often directly applied with $q = \gamma D_f$. Let's proceed with $q = \gamma D_f = 17 \times 2 = 34 \, \text{kN/m}^2$.

4.  **Bearing Capacity Factors for $\phi_u = 0$ (from IS 6403:1983 tables):**
    *   $N_c = 5.14$
    *   $N_q = 1.0$
    *   $N_\gamma = 0$

5.  **Shape Factors for square footing ($B/L = 1$):**
    *   $s_c = 1.3$
    *   $s_q = 1.2$
    *   $s_\gamma = 0.8$

6.  **Depth Factors for $D_f/B = 2/3 \approx 0.67$ (interpolate from IS 6403:1983 tables):**
    *   For square footing:
        *   $d_c = 1 + 0.2 \frac{D_f}{B} = 1 + 0.2 \times 0.67 = 1.134$
        *   $d_q = 1 + 0.1 \frac{D_f}{B} = 1 + 0.1 \times 0.67 = 1.067$
        *   $d_\gamma = 1.0$ (for $D_f/B \le 1$)

7.  **IS Code Formula for $q_u$ (for cohesive soil, $\phi_u=0$):**
    The general formula becomes:
    $q_u = c_u N_c s_c d_c + q(N_q s_q d_q - 1)$ (The $N_\gamma$ term is zero)

    $q_{nu} = c_u N_c s_c d_c + q(N_q s_q d_q - 1)$
    $q_{nu} = 40 \times 5.14 \times 1.3 \times 1.134 + 34(1.0 \times 1.2 \times 1.067 - 1)$
    $q_{nu} = 40 \times 7.524 + 34(1.2804 - 1)$
    $q_{nu} = 300.96 + 34(0.2804)$
    $q_{nu} = 300.96 + 9.53 = 310.49 \, \text{kN/m}^2$

8.  **Safe Bearing Capacity ($q_{safe}$):**
    $q_{safe} = \frac{q_{nu}}{FOS} + q$
    $q_{safe} = \frac{310.49}{3.0} + 34$
    $q_{safe} = 103.50 + 34 = 137.50 \, \text{kN/m}^2$

---

### 5. Practice Questions and Exercises

1.  **Define** the terms bearing capacity and safe bearing capacity.
2.  **List** the main factors that influence the bearing capacity of shallow foundations.
3.  **Explain** the difference between general shear failure and punching shear failure.
4.  A square footing of size 2m x 2m is founded at a depth of 1.2m in a uniform clay deposit with undrained cohesion $c_u = 30 \, \text{kN/m}^2$ and unit weight $\gamma = 19 \, \text{kN/m}^3$. The groundwater table is at the base of the footing. Calculate the safe bearing capacity of the footing using the IS code formula and FOS = 3.0. Assume $\phi_u = 0$.
    *(Hint: Use the $\phi_u=0$ simplified IS code formula. $B=2$m, $D_f=1.2$m, $q = \gamma D_f = 19 \times 1.2 = 22.8 \, \text{kN/m}^2$. For square footing, $s_c = 1.3$, $s_q=1.2$, $s_\gamma=0.8$. For $\phi_u=0$, $N_c=5.14, N_q=1, N_\gamma=0$. $D_f/B = 1.2/2 = 0.6$. $d_c \approx 1+0.2(0.6) = 1.12$, $d_q \approx 1+0.1(0.6) = 1.06$.)*
5.  A strip footing of width 2.5m is to be founded at a depth of 1.8m in a sand deposit. The soil has $\phi' = 35^\circ$ and $\gamma = 19 \, \text{kN/m}^3$. The groundwater table is at a depth of 1.0m below the ground surface. Calculate the safe bearing capacity using the IS code formula and FOS = 3.0.
    *(Hint: GWT is above foundation level. $D_f=1.8$m. Distance of GWT from ground surface = 1.0m. So GWT is 0.8m below foundation base. Use effective unit weight for the soil layer below the foundation, and for the layer between foundation base and GWT. $\gamma_{below} = 19 \, \text{kN/m}^3$. $\gamma_{above\_GWT} = 19 \, \text{kN/m}^3$. $\gamma_{submerged} = 19 - 9.81 = 9.19 \, \text{kN/m}^3$. The surcharge $q$ is calculated with $\gamma$ above GWT. The term with $\gamma B N_\gamma$ needs careful consideration of the unit weight of soil below the foundation base.
    $q = \gamma_{up-to-Df} \times D_f = 19 \times 1.8 = 34.2 \, \text{kN/m}^2$.
    For $\phi'=35^\circ$: $N_c=57.75, N_q=41.45, N_\gamma=46.45$.
    Strip footing: $s_c=1, s_q=1, s_\gamma=1$.
    $D_f/B = 1.8/2.5 = 0.72$.
    $d_c \approx 1+0.2(0.72) = 1.144$.
    $d_q \approx 1+0.1(0.72) = 1.072$.
    $d_\gamma=1.0$.
    Now consider GWT effect: Effective $\gamma$ below foundation is 19 kN/m³. But the term $0.5 \gamma B N_\gamma$ should use the unit weight of soil below the foundation. If the GWT is at foundation level, then $\gamma'$ should be used. If GWT is below foundation base, then $\gamma$ is used.
    **Revised consideration for GWT:**
    The soil below the foundation has a layer from $D_f$ to $D_f + B$. The GWT is at $D_f - 0.8$.
    So the soil below foundation base is submerged.
    $q = \gamma_{soil\_above\_DF} \times D_f = 19 \times 1.8 = 34.2 \, \text{kN/m}^2$.
    Effective unit weight below foundation base $= \gamma' = 19 - 9.81 = 9.19 \, \text{kN/m}^3$.
    $q_{nu} = q(N_q s_q d_q - 1) + 0.5 \gamma' B N_\gamma s_\gamma d_\gamma$
    $q_{nu} = 34.2(41.45 \times 1.0 \times 1.072 - 1) + 0.5 \times 9.19 \times 2.5 \times 46.45 \times 1.0 \times 1.0$
    $q_{nu} = 34.2(44.45 - 1) + 0.5 \times 9.19 \times 2.5 \times 46.45$
    $q_{nu} = 34.2(43.45) + 534.41$
    $q_{nu} = 1486.0 + 534.41 = 2020.41 \, \text{kN/m}^2$
    $q_{safe} = \frac{2020.41}{3} + 34.2 = 673.47 + 34.2 = 707.67 \, \text{kN/m}^2$)*

---

### 6. Important Points to Remember

*   **Bearing capacity is a critical parameter** for ensuring the stability and serviceability of foundations.
*   **Terzaghi's theory** laid the foundation for modern bearing capacity analysis, but IS codes have further refined these.
*   **The IS 6403:1983 formula** is a comprehensive equation that accounts for various factors, but simplification is possible for common cases.
*   **Always use effective stress parameters ($c', \phi'$)** for long-term analysis, and undrained parameters ($c_u, \phi_u=0$) for saturated clays under immediate loading.
*   **The Factor of Safety (FOS)** is crucial for converting ultimate bearing capacity to safe bearing capacity.
*   **Settlement is as important as shear failure** and must be checked separately. The lower of the two controlling criteria (shear or settlement) should govern the design.
*   **The groundwater table's position significantly impacts bearing capacity** by reducing the effective unit weight of the soil.
*   **Eccentric loads require the calculation of effective width ($B'$)** to account for non-uniform pressure distribution.
*   **Careful interpolation from IS code tables** for bearing capacity factors and adjustment factors is essential for accurate calculations.

---

This comprehensive study note covers the essential aspects of bearing capacity for shallow foundations, with a focus on the IS code provisions and their application. Remember to refer to the IS 6403:1983 code for exact tables and detailed explanations of the various factors.
