---
title: "Safe bearing pressure for a
permissible settlement."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 1: Bearing capacity of shallow foundations"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811207"
status: "completed"
scrapedAt: "2026-05-20T18:51:59.285Z"
---
# Advanced Foundation Engineering: Module 1 - Bearing Capacity of Shallow Foundations

## Topic: Safe Bearing Pressure for Permissible Settlement

This module focuses on determining the safe bearing pressure that a shallow foundation can support, considering both shear failure and settlement.

---

### Learning Outcomes:

*   **Understand the concept of safe bearing pressure and its significance.**
*   **Differentiate between ultimate bearing capacity and safe bearing pressure.**
*   **Explain the role of settlement in determining the safe bearing pressure.**
*   **Apply methods for estimating settlement of shallow foundations.**
*   **Calculate the safe bearing pressure based on permissible settlement criteria.**
*   **Discuss the factors affecting settlement.**

---

### 1. Introduction to Bearing Capacity

#### 1.1 Ultimate Bearing Capacity ($q_u$)

*   **Definition:** The maximum pressure that the soil can withstand *just before* shear failure occurs.
*   **Significance:** Represents the load-carrying capacity of the soil in terms of shear strength.
*   **Theoretical Basis:** Primarily determined by Terzaghi's bearing capacity theory and its extensions (Meyerhof, Hansen, Vesic).
*   **Terzaghi's Bearing Capacity Equation (for a strip footing):**
    $$q_u = c'N_c + qN_q + 0.5\gamma BN_\gamma$$
    Where:
    *   $c'$ = cohesion of the soil
    *   $q$ = surcharge pressure ($q = \gamma D_f$)
    *   $\gamma$ = unit weight of soil
    *   $B$ = width of the footing
    *   $N_c, N_q, N_\gamma$ = bearing capacity factors (depend on the angle of internal friction, $\phi'$)

#### 1.2 Safe Bearing Pressure ($q_{safe}$)

*   **Definition:** The maximum allowable bearing pressure that the soil can support without exceeding a specified limit of settlement, and also without risk of shear failure.
*   **Relationship with Ultimate Bearing Capacity:**
    $$q_{safe} = \frac{q_u}{\text{Factor of Safety (F.S.)}}$$
*   **Key Point:** The safe bearing pressure is the *lesser* of the two values calculated based on shear failure and permissible settlement.

---

### 2. The Role of Settlement in Bearing Capacity

#### 2.1 Settlement

*   **Definition:** The downward displacement of a foundation due to applied loads.
*   **Types of Settlement:**
    *   **Immediate (Elastic) Settlement:** Occurs immediately upon application of load, due to elastic deformation of soil particles and pore water.
    *   **Consolidation Settlement:** Occurs over time due to the expulsion of pore water from clayey soils under load, leading to a decrease in void ratio.
    *   **Secondary Compression (Creep):** Occurs after primary consolidation is complete, due to plastic readjustment of soil structure.
*   **Significance:** Excessive settlement can lead to:
    *   Differential settlement (uneven settlement), causing structural damage.
    *   Cracking of walls and floors.
    *   Malfunctioning of services.
    *   Reduced serviceability of the structure.

#### 2.2 Permissible Settlement ($S_{permit}$)

*   **Definition:** The maximum allowable settlement for a given structure, specified by building codes or design standards. This value depends on the type of structure, its use, and the sensitivity to settlement.
*   **Factors influencing Permissible Settlement:**
    *   **Type of Structure:** Buildings, bridges, industrial structures have different tolerances.
    *   **Material:** Reinforced concrete is generally more tolerant than brickwork.
    *   **Building Codes:** IS codes, Eurocodes, etc., provide guidelines.
    *   **Sensitivity to Differential Settlement:** Structures with rigid elements (e.g., steel frames) can tolerate more differential settlement than flexible ones (e.g., masonry walls).

#### 2.3 Determining Safe Bearing Pressure based on Settlement

*   The soil must be able to support the applied load *without causing settlement exceeding the permissible limit*.
*   This requires estimating the settlement for a given footing pressure and comparing it with $S_{permit}$.

---

### 3. Methods for Estimating Settlement of Shallow Foundations

The methods used depend on the soil type and the nature of the settlement.

#### 3.1 Settlement in Cohesionless Soils (Sands and Gravels)

*   **Immediate (Elastic) Settlement:**
    *   Often estimated using **plate load tests** or **standard penetration test (SPT) N-values**.
    *   **Schmertmann's Method:** A widely used empirical method that considers the distribution of strain influence factor with depth.
        *   **Concept:** Settlement is calculated by integrating the strain over the influence depth.
        *   **Formula (Simplified):**
            $$S_e = C_w C_1 \Delta p \sum_{i=1}^{n} \frac{I_{z,i}}{E_{s,i}} \Delta z_i$$
            Where:
            *   $C_w$: Water table correction factor (depends on depth of water table).
            *   $C_1$: Shape and rigidity correction factor.
            *   $\Delta p$: Net applied pressure.
            *   $I_{z,i}$: Strain influence factor at depth $z_i$.
            *   $E_{s,i}$: Modulus of elasticity of soil layer $i$.
            *   $\Delta z_i$: Thickness of soil layer $i$.
        *   **Strain Influence Factor ($I_z$):** Varies with depth and footing shape. For a square footing, it reaches a maximum at depth $B/2$ and decreases linearly to zero at depth $2B$.
        *   **Modulus of Elasticity ($E_s$):** Can be related to SPT N-values for sands: $E_s = 2000\sqrt{N} \text{ (kPa)}$ or other correlations.
    *   **Plate Load Test Method:**
        *   Settlement of a large foundation ($S_f$) can be estimated from the settlement of a smaller test plate ($S_p$) using empirical relationships.
        *   **Housel's Empirical Rule (for sands):**
            $$S_f = S_p \left( \frac{B_f(B_p+0.3)}{B_p(B_f+0.3)} \right)^2$$
            Where:
            *   $S_f$: Settlement of foundation.
            *   $S_p$: Settlement of plate load test.
            *   $B_f$: Width of foundation.
            *   $B_p$: Diameter of plate.
        *   **Burland and Burbidge Method (for sands):**
            $$S_e = q_0 B' \frac{1-v_s^2}{E_s} I_f$$
            Where:
            *   $q_0$: Applied bearing pressure.
            *   $B'$: Equivalent width of footing.
            *   $v_s$: Poisson's ratio of soil.
            *   $E_s$: Modulus of elasticity.
            *   $I_f$: Influence factor (depends on footing shape, embedment depth, and Poisson's ratio).

#### 3.2 Settlement in Cohesive Soils (Clays)

*   **Immediate (Elastic) Settlement:**
    *   Estimated using elastic theory.
    *   **Formula (Simplified for a flexible footing):**
        $$S_e = \frac{\pi}{4} \frac{q_0 B (1-v_s^2)}{E_s}$$
    *   **Formula (Simplified for a rigid footing):**
        $$S_e = \frac{\pi}{4} \frac{q_0 B (1-v_s^2)}{E_s} \times \frac{4}{\pi}$$ (approximately double the flexible case)
    *   **Modulus of Elasticity ($E_s$):** Can be determined from laboratory tests like unconfined compression tests or triaxial tests.

*   **Consolidation Settlement ($S_c$):**
    *   Occurs in saturated clay layers due to an increase in effective stress.
    *   **Oedometer Test (Consolidation Test):** Used to determine consolidation parameters like compression index ($C_c$) and recompression index ($C_r$).
    *   **Formula (for normally consolidated clays):**
        $$S_c = C_c H \log_{10} \left( \frac{\sigma'_z + \Delta \sigma'_z}{\sigma'_z} \right)$$
        Where:
        *   $C_c$: Compression index (obtained from the void ratio vs. log effective stress curve).
        *   $H$: Initial thickness of the clay layer.
        *   $\sigma'_z$: Initial effective vertical stress at the midpoint of the clay layer.
        *   $\Delta \sigma'_z$: Increase in effective vertical stress at the midpoint of the clay layer due to the applied foundation pressure.
    *   **For overconsolidated clays:** The formula needs to account for the recompression index ($C_r$) if the applied stress increase does not exceed the preconsolidation pressure.
        *   If $\sigma'_z + \Delta \sigma'_z < P_c$: $S_c = C_r H \log_{10} \left( \frac{\sigma'_z + \Delta \sigma'_z}{\sigma'_z} \right)$
        *   If $\sigma'_z + \Delta \sigma'_z > P_c$: $S_c = C_r H \log_{10} \left( \frac{P_c}{\sigma'_z} \right) + C_c H \log_{10} \left( \frac{\sigma'_z + \Delta \sigma'_z}{P_c} \right)$
        Where $P_c$ is the preconsolidation pressure.

*   **Total Settlement ($S_t$):**
    *   For clays, total settlement is often the sum of immediate and consolidation settlement: $S_t = S_e + S_c$.
    *   In some cases, especially for highly plastic clays, secondary compression can also be significant.

#### 3.3 Influence Depth

*   **Definition:** The depth below the foundation where the increase in vertical stress becomes negligible (e.g., 10% of the applied surface pressure).
*   **Significance:** Foundation settlement is primarily influenced by the soil within this depth. For cohesive soils, the influence depth is often taken as $2B$ or $3B$ for strip footings, where $B$ is the footing width.

#### 3.4 Factors Affecting Settlement

*   **Soil Type:** Clays generally settle more than sands for the same applied pressure.
*   **Applied Pressure ($q_0$):** Settlement is generally proportional to the applied pressure (especially for immediate settlement).
*   **Footing Size and Shape:** Larger footings generally settle more than smaller ones. The shape also influences stress distribution.
*   **Embedment Depth ($D_f$):** A deeper embedment reduces settlement due to the overburden pressure.
*   **Water Table Depth:** A shallow water table increases pore water pressure and reduces effective stress, leading to increased settlement, particularly in cohesive soils.
*   **Soil Properties:** $E_s$, $c'$, $\phi'$, $C_c$, $C_r$, $\gamma$.
*   **Load Distribution:** Uniform load distribution leads to more uniform settlement.
*   **Presence of Stratification:** Layered soils can exhibit complex settlement behavior.

---

### 4. Calculating Safe Bearing Pressure for Permissible Settlement

The process involves:

1.  **Determine the Ultimate Bearing Capacity ($q_u$)** using Terzaghi's or other appropriate theories.
2.  **Calculate the allowable bearing pressure based on shear failure ($q_{allow, shear}$):**
    $$q_{allow, shear} = \frac{q_u}{\text{F.S.}}$$
    A typical Factor of Safety (F.S.) used is 3.
3.  **Estimate the settlement ($S_e$ or $S_t$) for a range of applied foundation pressures ($q_0$).** This is done using appropriate settlement calculation methods based on the soil type.
4.  **Determine the allowable bearing pressure based on permissible settlement ($q_{allow, settlement}$).** This is the pressure $q_0$ that results in a settlement equal to or less than the permissible settlement ($S_{permit}$).
5.  **The Safe Bearing Pressure ($q_{safe}$) is the minimum of the two allowable pressures:**
    $$q_{safe} = \min(q_{allow, shear}, q_{allow, settlement})$$

---

### 5. Examples

**Example 1: Calculation of Allowable Bearing Pressure based on Shear Failure**

A strip footing of width $B = 2 \text{ m}$ is to be founded on a sand soil. The angle of internal friction $\phi' = 30^\circ$. The unit weight of the soil is $\gamma = 18 \text{ kN/m}^3$, and the cohesion $c' = 0$. The footing is embedded at a depth $D_f = 1 \text{ m}$. Assume a Factor of Safety of 3.

**Solution:**

1.  **Calculate bearing capacity factors for $\phi' = 30^\circ$:**
    *   $N_c = 37.2$
    *   $N_q = 22.0$
    *   $N_\gamma = 19.7$
2.  **Calculate surcharge pressure ($q$):**
    *   $q = \gamma D_f = 18 \text{ kN/m}^3 \times 1 \text{ m} = 18 \text{ kN/m}^2$
3.  **Calculate ultimate bearing capacity ($q_u$) using Terzaghi's equation:**
    *   $q_u = c'N_c + qN_q + 0.5\gamma BN_\gamma$
    *   $q_u = (0)(37.2) + (18)(22.0) + 0.5(18)(2)(19.7)$
    *   $q_u = 0 + 396 + 354.6$
    *   $q_u = 750.6 \text{ kN/m}^2$
4.  **Calculate allowable bearing pressure based on shear failure:**
    *   $q_{allow, shear} = \frac{q_u}{\text{F.S.}} = \frac{750.6}{3} = 250.2 \text{ kN/m}^2$

**Example 2: Estimating Settlement and Determining Allowable Pressure based on Settlement**

A square footing of width $B = 2 \text{ m}$ is to be placed on a clay layer. The permissible settlement $S_{permit} = 25 \text{ mm} = 0.025 \text{ m}$. The following data is available from laboratory tests:
*   Modulus of elasticity of clay, $E_s = 10 \text{ MPa} = 10 \times 10^3 \text{ kN/m}^2$
*   Poisson's ratio, $v_s = 0.3$
*   Net applied pressure, $q_0$

Assume the footing is rigid and the influence factor for a square footing is $I_f = 1.07$.

**Solution:**

1.  **Use the formula for immediate settlement of a rigid footing:**
    $$S_e = \frac{\pi}{4} \frac{q_0 B (1-v_s^2)}{E_s} \times (\text{Rigidity Factor})$$
    *   The rigidity factor depends on the shape and can be approximated. For a rigid square footing, a commonly used modification of the flexible formula is:
        $$S_e = \frac{q_0 B (1-v_s^2)}{E_s} I_f$$
        (Note: Some sources use $1.07$ as $I_f$ for rigid square footing). Let's use this version for clarity.
    *   $S_e = \frac{q_0 (2 \text{ m}) (1 - 0.3^2)}{10 \times 10^3 \text{ kN/m}^2} \times 1.07$
    *   $S_e = \frac{2 q_0 (1 - 0.09)}{10000} \times 1.07$
    *   $S_e = \frac{2 q_0 (0.91)}{10000} \times 1.07 = \frac{1.82 q_0}{10000} \times 1.07$
    *   $S_e \approx 0.00019478 q_0$ (where $S_e$ is in meters if $q_0$ is in kN/m²)

2.  **Determine the allowable pressure based on permissible settlement:**
    *   We want $S_e \le S_{permit}$
    *   $0.00019478 q_0 \le 0.025 \text{ m}$
    *   $q_0 \le \frac{0.025}{0.00019478}$
    *   $q_0 \le 128.35 \text{ kN/m}^2$
    *   Therefore, $q_{allow, settlement} = 128.35 \text{ kN/m}^2$.

**Example 3: Combining Shear and Settlement Criteria**

Consider the results from Example 1 and Example 2.
*   $q_{allow, shear} = 250.2 \text{ kN/m}^2$
*   $q_{allow, settlement} = 128.35 \text{ kN/m}^2$

**Solution:**

The safe bearing pressure is the minimum of the two:
*   $q_{safe} = \min(q_{allow, shear}, q_{allow, settlement})$
*   $q_{safe} = \min(250.2 \text{ kN/m}^2, 128.35 \text{ kN/m}^2)$
*   $q_{safe} = 128.35 \text{ kN/m}^2$

**Important Note:** This example assumes the settlement calculated is the total settlement. In a real scenario with clays, you would also need to calculate consolidation settlement.

---

### 6. Practice Questions

1.  Define ultimate bearing capacity and safe bearing pressure.
2.  What are the two primary criteria that govern the determination of the safe bearing pressure of a shallow foundation?
3.  Explain the significance of permissible settlement in foundation design.
4.  A square footing of width 3 m is to be constructed on a saturated clay layer. The following data is available:
    *   Cohesion ($c_u$) = 30 kPa
    *   Angle of internal friction ($\phi_u$) = 0°
    *   Unit weight of clay ($\gamma$) = 17 kN/m³
    *   Embedment depth ($D_f$) = 1.5 m
    *   Bearing capacity factors for $\phi=0$: $N_c = 5.14$, $N_q = 1.0$, $N_\gamma = 0$
    *   Factor of Safety = 3
    *   Permissible settlement ($S_{permit}$) = 25 mm
    *   Modulus of elasticity of clay ($E_s$) = 15 MPa
    *   Poisson's ratio ($v_s$) = 0.45
    *   Influence factor for a rigid square footing ($I_f$) = 1.07
    Calculate the safe bearing pressure for the footing, considering both shear failure and permissible settlement.

**Answers to Practice Questions:**

1.  **Ultimate Bearing Capacity ($q_u$)**: The maximum pressure that soil can withstand just before shear failure occurs.
    **Safe Bearing Pressure ($q_{safe}$)**: The maximum allowable bearing pressure that the soil can support without exceeding the permissible settlement and without risk of shear failure.

2.  The two primary criteria are:
    *   **Shear Failure:** The applied pressure must not exceed the ultimate bearing capacity divided by a suitable factor of safety.
    *   **Permissible Settlement:** The applied pressure must not cause settlement that exceeds the allowable (permissible) settlement for the structure.

3.  Permissible settlement is the maximum allowable downward displacement of a foundation that a structure can tolerate without adverse effects, such as structural damage, loss of serviceability, or aesthetic concerns. It is a crucial design parameter to ensure the functional performance of the structure.

4.  **Calculation for Question 4:**

    **Part A: Allowable Bearing Pressure based on Shear Failure**

    *   Given: $B = 3 \text{ m}$, $D_f = 1.5 \text{ m}$, $c_u = 30 \text{ kPa}$, $\phi_u = 0^\circ$, $\gamma = 17 \text{ kN/m}^3$, F.S. = 3.
    *   Bearing capacity factors for $\phi=0$: $N_c = 5.14$, $N_q = 1.0$, $N_\gamma = 0$.
    *   Surcharge pressure ($q$): $q = \gamma D_f = 17 \text{ kN/m}^3 \times 1.5 \text{ m} = 25.5 \text{ kN/m}^2$.
    *   Ultimate Bearing Capacity ($q_u$):
        $q_u = c_u N_c + q N_q + 0.5 \gamma B N_\gamma$
        $q_u = (30)(5.14) + (25.5)(1.0) + 0.5(17)(3)(0)$
        $q_u = 154.2 + 25.5 + 0 = 179.7 \text{ kN/m}^2$
    *   Allowable Bearing Pressure ($q_{allow, shear}$):
        $q_{allow, shear} = \frac{q_u}{\text{F.S.}} = \frac{179.7}{3} = 59.9 \text{ kN/m}^2$.

    **Part B: Allowable Bearing Pressure based on Permissible Settlement**

    *   Given: $B = 3 \text{ m}$, $S_{permit} = 25 \text{ mm} = 0.025 \text{ m}$, $E_s = 15 \text{ MPa} = 15000 \text{ kN/m}^2$, $v_s = 0.45$, $I_f = 1.07$.
    *   Estimate immediate settlement ($S_e$) using the formula for a rigid square footing:
        $S_e = \frac{q_0 B (1-v_s^2)}{E_s} I_f$
        $S_e = \frac{q_0 (3 \text{ m}) (1 - 0.45^2)}{15000 \text{ kN/m}^2} \times 1.07$
        $S_e = \frac{3 q_0 (1 - 0.2025)}{15000} \times 1.07$
        $S_e = \frac{3 q_0 (0.7975)}{15000} \times 1.07$
        $S_e \approx q_0 \times 0.0001595 \times 1.07$
        $S_e \approx 0.000170665 q_0$ (where $S_e$ is in meters for $q_0$ in kN/m²)

    *   Determine $q_0$ for $S_e = S_{permit}$:
        $0.025 \text{ m} = 0.000170665 q_0$
        $q_0 = \frac{0.025}{0.000170665} \approx 146.48 \text{ kN/m}^2$.
    *   Allowable Bearing Pressure ($q_{allow, settlement}$):
        $q_{allow, settlement} = 146.48 \text{ kN/m}^2$.

    **Part C: Safe Bearing Pressure ($q_{safe}$)**

    *   $q_{safe} = \min(q_{allow, shear}, q_{allow, settlement})$
    *   $q_{safe} = \min(59.9 \text{ kN/m}^2, 146.48 \text{ kN/m}^2)$
    *   $q_{safe} = 59.9 \text{ kN/m}^2$.

    **(Note:** In this specific case, shear failure criterion governs. If settlement was the limiting factor, $q_{allow, settlement}$ would be the governing value.)

---

### 7. Important Points to Remember

*   **Safe bearing pressure is governed by the *more restrictive* of shear failure or settlement.**
*   **Factor of Safety (F.S.) for shear is typically 3.**
*   **Permissible settlement values are critical and depend on the structure's sensitivity.**
*   **Settlement calculations are empirical and require careful selection of methods and input parameters.**
*   **The water table significantly affects bearing capacity and settlement, especially in cohesive soils.**
*   **For cohesive soils, total settlement is often the sum of immediate and consolidation settlement.**
*   **Always check building codes and relevant standards for permissible settlement values and design guidelines.**

---
