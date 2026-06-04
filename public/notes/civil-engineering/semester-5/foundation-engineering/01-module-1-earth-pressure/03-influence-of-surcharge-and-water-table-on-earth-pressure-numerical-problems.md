---
title: "Influence of surcharge and water table on earth pressure - Numerical problems"
subject: "FOUNDATION ENGINEERING"
module: "Module 1: Earth pressure "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e2a"
status: "completed"
scrapedAt: "2026-05-20T18:48:25.568Z"
---
# FOUNDATION ENGINEERING: Module 1 - Earth Pressure

## Topic: Influence of Surcharge and Water Table on Earth Pressure - Numerical Problems

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Calculate active and passive earth pressures considering the presence of surcharge loads.
*   Calculate active and passive earth pressures considering the influence of a water table.
*   Combine the effects of both surcharge loads and the water table on earth pressures.
*   Apply these principles to solve practical numerical problems encountered in foundation engineering.

---

### 1. Introduction to Earth Pressure

Earth pressure is the pressure exerted by soil on retaining structures. Understanding this pressure is crucial for designing stable retaining walls, foundations, and other geotechnical structures.

*   **Active Earth Pressure:** The minimum pressure exerted by a soil mass on a retaining structure when the structure moves away from the soil, allowing the soil to expand.
*   **Passive Earth Pressure:** The maximum pressure exerted by a soil mass on a retaining structure when the structure moves into the soil, compressing it.
*   **At-Rest Earth Pressure:** The pressure exerted by a soil mass on a retaining structure when there is no movement.

---

### 2. Influence of Surcharge Loads

A surcharge load is an additional uniform load applied on the ground surface behind a retaining wall. This load increases the earth pressure acting on the wall.

#### 2.1. Active Earth Pressure with Surcharge

**Key Concepts:**

*   **Surcharge Load (q):** Uniformly distributed load per unit area on the ground surface.
*   **Unit Weight of Soil ($\gamma$):** Weight of soil per unit volume.
*   **Coefficient of Active Earth Pressure ($K_a$):** Ratio of active earth pressure to the vertical pressure. For granular soils, $K_a = \tan^2(45^\circ - \phi/2)$, where $\phi$ is the angle of internal friction.

**Calculation:**

The increase in pressure due to the surcharge load is uniform throughout the depth of the retained soil.

*   **Pressure due to surcharge ($p_{surcharge}$):** $p_{surcharge} = K_a \times q$
*   **Total active pressure at depth 'z' ($p_a$):** $p_a = K_a \times (\gamma \times z + q)$

**Example:**

Consider a retaining wall retaining sand with the following properties:
*   Height of retained soil (H) = 6 m
*   Unit weight of soil ($\gamma$) = 18 kN/m³
*   Angle of internal friction ($\phi$) = 30°
*   Surcharge load (q) = 10 kN/m²

**Solution:**

1.  **Calculate $K_a$:**
    $K_a = \tan^2(45^\circ - \phi/2) = \tan^2(45^\circ - 30^\circ/2) = \tan^2(45^\circ - 15^\circ) = \tan^2(30^\circ) = (1/\sqrt{3})^2 = 1/3 \approx 0.333$

2.  **Calculate active earth pressure at the base (z = 6 m):**
    $p_a$ at z=6m = $K_a \times (\gamma \times H + q)$
    $p_a$ at z=6m = $0.333 \times (18 \text{ kN/m³} \times 6 \text{ m} + 10 \text{ kN/m²})$
    $p_a$ at z=6m = $0.333 \times (108 \text{ kN/m²} + 10 \text{ kN/m²})$
    $p_a$ at z=6m = $0.333 \times 118 \text{ kN/m²} \approx 39.3 \text{ kN/m²}$

**Pressure Distribution:**

The active earth pressure diagram will be a trapezoid:
*   At the top (z=0), pressure = $K_a \times q = 0.333 \times 10 = 3.33$ kN/m²
*   At the base (z=6m), pressure = $39.3$ kN/m²

---

#### 2.2. Passive Earth Pressure with Surcharge

**Key Concepts:**

*   **Coefficient of Passive Earth Pressure ($K_p$):** Ratio of passive earth pressure to the vertical pressure. For granular soils, $K_p = \tan^2(45^\circ + \phi/2)$.

**Calculation:**

Similar to active pressure, the surcharge load increases the passive pressure.

*   **Pressure due to surcharge ($p_{surcharge}$):** $p_{surcharge} = K_p \times q$
*   **Total passive pressure at depth 'z' ($p_p$):** $p_p = K_p \times (\gamma \times z + q)$

**Example:**

Using the same sand properties as above, but calculating passive pressure:
*   Angle of internal friction ($\phi$) = 30°
*   Surcharge load (q) = 10 kN/m²

**Solution:**

1.  **Calculate $K_p$:**
    $K_p = \tan^2(45^\circ + \phi/2) = \tan^2(45^\circ + 30^\circ/2) = \tan^2(45^\circ + 15^\circ) = \tan^2(60^\circ) = (\sqrt{3})^2 = 3$

2.  **Calculate passive earth pressure at the base (z = 6 m):**
    $p_p$ at z=6m = $K_p \times (\gamma \times H + q)$
    $p_p$ at z=6m = $3 \times (18 \text{ kN/m³} \times 6 \text{ m} + 10 \text{ kN/m²})$
    $p_p$ at z=6m = $3 \times (108 \text{ kN/m²} + 10 \text{ kN/m²})$
    $p_p$ at z=6m = $3 \times 118 \text{ kN/m²} = 354 \text{ kN/m²}$

**Pressure Distribution:**

The passive earth pressure diagram will also be a trapezoid:
*   At the top (z=0), pressure = $K_p \times q = 3 \times 10 = 30$ kN/m²
*   At the base (z=6m), pressure = $354$ kN/m²

---

### 3. Influence of Water Table

The presence of groundwater significantly affects earth pressure. Water exerts hydrostatic pressure, reducing the effective stress in the soil.

#### 3.1. Active Earth Pressure with Water Table

**Key Concepts:**

*   **Unit Weight of Water ($\gamma_w$):** Approximately 9.81 kN/m³ or 10 kN/m³.
*   **Effective Unit Weight ($\gamma'$):** The unit weight of the soil above the water table minus the unit weight of water. $\gamma' = \gamma_{sat} - \gamma_w$, where $\gamma_{sat}$ is the saturated unit weight.
*   **Hydrostatic Pressure ($u$):** Pressure exerted by the water. $u = \gamma_w \times h_w$, where $h_w$ is the height of the water column.

**Calculation:**

The soil is considered in two layers: above the water table and below the water table.

*   **Active Earth Pressure (above water table, z < $h_w$):**
    $p_a = K_a \times (\gamma \times z)$

*   **Effective Active Earth Pressure (below water table, z > $h_w$):**
    The pressure at the water table level (z = $h_w$) is $p_{a\_at\_wt} = K_a \times \gamma \times h_w$.
    The hydrostatic pressure at this level is $u_{at\_wt} = \gamma_w \times h_w$.
    The effective pressure at the water table level is $p'_{a\_at\_wt} = p_{a\_at\_wt} - u_{at\_wt} = K_a \times \gamma \times h_w - \gamma_w \times h_w$.
    For depths below the water table (z > $h_w$), the pressure is calculated using the effective unit weight:
    $p'_a$ at depth z = $K_a \times (\gamma \times h_w + \gamma' \times (z - h_w)) - \gamma_w \times (z - h_w)$
    This can be simplified to:
    $p'_a$ at depth z = $K_a \times \gamma \times h_w + K_a \times \gamma' \times (z - h_w) - \gamma_w \times (z - h_w)$
    Or, the total pressure is the sum of the pressure due to dry soil above the water table, pressure due to saturated soil below the water table, and the hydrostatic pressure. A common way to visualize this is:
    *   Pressure from soil grains above water table: $K_a \gamma z$
    *   Pressure from water: $\gamma_w h_w$

**Example:**

Consider a retaining wall retaining sand with the following properties:
*   Height of retained soil (H) = 6 m
*   Unit weight of dry soil ($\gamma$) = 17 kN/m³
*   Unit weight of saturated soil ($\gamma_{sat}$) = 20 kN/m³
*   Angle of internal friction ($\phi$) = 30°
*   Water table is at a depth of 3 m from the surface.

**Solution:**

1.  **Calculate $K_a$:**
    $K_a = \tan^2(45^\circ - 30^\circ/2) = 1/3 \approx 0.333$

2.  **Calculate effective unit weight ($\gamma'$):**
    $\gamma' = \gamma_{sat} - \gamma_w = 20 \text{ kN/m³} - 9.81 \text{ kN/m³} = 10.19 \text{ kN/m³}$ (Using $\gamma_w = 9.81$ kN/m³)

3.  **Calculate active earth pressure at different levels:**

    *   **At the surface (z=0):** $p_a = 0$
    *   **At the water table (z=3 m):**
        $p_a$ = $K_a \times (\gamma \times z)$
        $p_a$ = $0.333 \times (17 \text{ kN/m³} \times 3 \text{ m})$
        $p_a$ = $0.333 \times 51 \text{ kN/m²} \approx 17.0 \text{ kN/m²}$
        Hydrostatic pressure at z=3m: $u$ = $\gamma_w \times h_w = 9.81 \text{ kN/m³} \times 3 \text{ m} = 29.43 \text{ kN/m²}$
        Effective pressure at z=3m: $p'_a$ = $17.0 - 29.43 = -12.43$ kN/m² (This indicates tension, but in practice, we consider the pressure from soil grains to be zero at the water table if it's not explicitly anchored). The net effective pressure is typically considered from zero for stability analysis unless specific conditions warrant otherwise. The total pressure *on the wall* is composed of pressure from soil grains and pressure from water.

    *   **At the base (z=6 m):**
        Pressure from soil above water table = $K_a \times \gamma \times h_w = 0.333 \times 17 \times 3 = 17.0$ kN/m²
        Pressure from soil grains below water table = $K_a \times \gamma' \times (H - h_w) = 0.333 \times 10.19 \times (6 - 3) = 0.333 \times 10.19 \times 3 \approx 10.18$ kN/m²
        Hydrostatic pressure at z=6m = $\gamma_w \times H = 9.81 \text{ kN/m³} \times 6 \text{ m} = 58.86 \text{ kN/m²}$
        Total active pressure at z=6m = (Pressure from soil grains above WT) + (Pressure from soil grains below WT)
        Total active pressure at z=6m = $17.0 + 10.18 = 27.18$ kN/m² (This is the force from soil grains).
        The pressure *on the wall* at the base is the pressure from the soil skeleton minus the pore water pressure.
        Effective pressure at z=6m = $K_a \times (\gamma \times h_w + \gamma' \times (H - h_w))$
        Effective pressure at z=6m = $0.333 \times (17 \times 3 + 10.19 \times 3)$
        Effective pressure at z=6m = $0.333 \times (51 + 30.57)$
        Effective pressure at z=6m = $0.333 \times 81.57 \approx 27.16$ kN/m²
        Total pressure (including water) acting on the wall is often considered as the sum of the effective stress from soil skeleton and the pore water pressure.
        Total pressure at z=6m = effective pressure at z=6m + hydrostatic pressure at z=6m
        Total pressure at z=6m = $27.16$ kN/m² + $58.86$ kN/m² = $86.02$ kN/m²

**Pressure Distribution:**

*   From z=0 to z=3m: Triangular distribution from 0 to $17.0$ kN/m² (soil pressure).
*   From z=3m to z=6m:
    *   Soil skeleton pressure increases linearly from $17.0$ kN/m² to $27.18$ kN/m².
    *   Hydrostatic pressure increases linearly from $29.43$ kN/m² to $58.86$ kN/m².
    The total pressure distribution will be a combination of these.

#### 3.2. Passive Earth Pressure with Water Table

**Key Concepts:**

The principles are similar to active pressure, but using $K_p$.

**Calculation:**

*   **Passive Earth Pressure (above water table, z < $h_w$):**
    $p_p = K_p \times (\gamma \times z)$

*   **Effective Passive Earth Pressure (below water table, z > $h_w$):**
    $p'_p$ at depth z = $K_p \times (\gamma \times h_w + \gamma' \times (z - h_w))$
    Total pressure on the wall is the sum of the effective pressure from the soil skeleton and the pore water pressure.

**Example:**

Using the same sand properties as above, but calculating passive pressure:
*   Angle of internal friction ($\phi$) = 30°
*   Water table at 3 m.

**Solution:**

1.  **Calculate $K_p$:**
    $K_p = \tan^2(45^\circ + 30^\circ/2) = 3$

2.  **Calculate effective unit weight ($\gamma'$):**
    $\gamma' = 10.19$ kN/m³

3.  **Calculate passive earth pressure at the base (z=6 m):**
    *   Pressure from soil above water table = $K_p \times \gamma \times h_w = 3 \times 17 \times 3 = 153$ kN/m²
    *   Pressure from soil grains below water table = $K_p \times \gamma' \times (H - h_w) = 3 \times 10.19 \times 3 = 91.71$ kN/m²
    *   Hydrostatic pressure at z=6m = $\gamma_w \times H = 9.81 \times 6 = 58.86$ kN/m²

    Effective pressure at z=6m = $K_p \times (\gamma \times h_w + \gamma' \times (H - h_w))$
    Effective pressure at z=6m = $3 \times (17 \times 3 + 10.19 \times 3)$
    Effective pressure at z=6m = $3 \times (51 + 30.57)$
    Effective pressure at z=6m = $3 \times 81.57 = 244.71$ kN/m²

    Total pressure at z=6m = effective pressure at z=6m + hydrostatic pressure at z=6m
    Total pressure at z=6m = $244.71$ kN/m² + $58.86$ kN/m² = $303.57$ kN/m²

---

### 4. Combined Influence of Surcharge and Water Table

When both a surcharge load and a water table are present, their effects are combined.

#### 4.1. Active Earth Pressure with Surcharge and Water Table

**Calculation:**

The pressure at any depth 'z' will be the sum of the pressure due to surcharge, the pressure due to the soil skeleton, and the hydrostatic pressure.

*   **For z < $h_w$ (above water table):**
    *   Pressure from surcharge: $K_a \times q$
    *   Pressure from soil: $K_a \times \gamma \times z$
    *   Total pressure $p_a = K_a \times (q + \gamma \times z)$

*   **For z > $h_w$ (below water table):**
    *   Pressure from surcharge: $K_a \times q$
    *   Pressure from soil skeleton above water table: $K_a \times \gamma \times h_w$
    *   Pressure from soil skeleton below water table: $K_a \times \gamma' \times (z - h_w)$
    *   Hydrostatic pressure: $\gamma_w \times z$

    The effective pressure on the wall at depth 'z' is:
    $p'_a$ at depth z = $K_a \times (q + \gamma \times h_w + \gamma' \times (z - h_w))$

    The total pressure on the wall (which is what we often need for design of the wall itself, considering water forces):
    Total Pressure at depth z = $K_a \times (q + \gamma \times h_w) + K_a \times \gamma' \times (z - h_w) + \gamma_w \times (z - h_w)$ (This can be rearranged)
    Or more commonly understood as:
    Total Pressure at depth z = $K_a \times (q + \gamma \times h_w) + K_a \times \gamma' \times (z - h_w)$ (soil skeleton pressure) + $\gamma_w \times z$ (total hydrostatic pressure up to depth z)

    Let's refine the total pressure calculation at depth 'z' (where z > $h_w$):
    The pressure from the soil skeleton up to depth 'z' is:
    $P_{soil\_skeleton} = K_a \times (q + \gamma \times h_w + \gamma' \times (z - h_w))$

    The hydrostatic pressure up to depth 'z' is:
    $P_{water} = \gamma_w \times z$

    The total pressure on the wall = $P_{soil\_skeleton}$ (this represents the force on the structural component of the wall) plus the hydrostatic pressure that also acts on the wall.

    A clearer way to think about it for total stress analysis:
    Total pressure at depth z ($p_{total}$) = Pressure from soil skeleton + Hydrostatic pressure
    $p_{total} = [K_a \times (q + \gamma \times h_w + \gamma' \times (z - h_w))] + [\gamma_w \times z]$

**Example:**

Consider a retaining wall retaining sand with the following properties:
*   Height of retained soil (H) = 6 m
*   Unit weight of dry soil ($\gamma$) = 17 kN/m³
*   Unit weight of saturated soil ($\gamma_{sat}$) = 20 kN/m³
*   Angle of internal friction ($\phi$) = 30°
*   Surcharge load (q) = 10 kN/m²
*   Water table is at a depth of 3 m from the surface.

**Solution:**

1.  **Calculate $K_a$:**
    $K_a = 1/3 \approx 0.333$

2.  **Calculate effective unit weight ($\gamma'$):**
    $\gamma' = 10.19$ kN/m³

3.  **Calculate total active pressure at the base (z=6 m):**

    *   **Pressure at the water table level (z=3 m):**
        Pressure from surcharge = $K_a \times q = 0.333 \times 10 = 3.33$ kN/m²
        Pressure from dry soil = $K_a \times \gamma \times h_w = 0.333 \times 17 \times 3 = 17.0$ kN/m²
        Hydrostatic pressure = $\gamma_w \times h_w = 9.81 \times 3 = 29.43$ kN/m²
        Total pressure at z=3m = $3.33 + 17.0 + 29.43 = 49.76$ kN/m²

    *   **Pressure at the base (z=6 m):**
        Pressure from surcharge = $K_a \times q = 0.333 \times 10 = 3.33$ kN/m²
        Pressure from soil skeleton above WT = $K_a \times \gamma \times h_w = 0.333 \times 17 \times 3 = 17.0$ kN/m²
        Pressure from soil skeleton below WT = $K_a \times \gamma' \times (H - h_w) = 0.333 \times 10.19 \times 3 \approx 10.18$ kN/m²
        Total pressure from soil skeleton = $3.33 + 17.0 + 10.18 = 30.51$ kN/m²
        Hydrostatic pressure at z=6m = $\gamma_w \times H = 9.81 \times 6 = 58.86$ kN/m²

        Total pressure at z=6m = Total pressure from soil skeleton + Hydrostatic pressure
        Total pressure at z=6m = $30.51 + 58.86 = 89.37$ kN/m²

**Pressure Distribution:**

*   From z=0 to z=3m: Trapezoidal distribution from $K_a \times q$ to $K_a \times (q + \gamma \times h_w)$ due to soil and surcharge. Add hydrostatic pressure which increases linearly.
*   From z=3m to z=6m: The soil skeleton pressure (including surcharge) increases linearly, and the hydrostatic pressure increases linearly.

#### 4.2. Passive Earth Pressure with Surcharge and Water Table

**Calculation:**

The principles are similar to active pressure, but using $K_p$.

*   **For z < $h_w$ (above water table):**
    $p_p = K_p \times (q + \gamma \times z)$

*   **For z > $h_w$ (below water table):**
    Total Pressure at depth z = $[K_p \times (q + \gamma \times h_w + \gamma' \times (z - h_w))] + [\gamma_w \times z]$

**Example:**

Using the same sand properties as above, but calculating passive pressure:
*   Angle of internal friction ($\phi$) = 30°
*   Surcharge load (q) = 10 kN/m²
*   Water table at 3 m.

**Solution:**

1.  **Calculate $K_p$:**
    $K_p = 3$

2.  **Calculate effective unit weight ($\gamma'$):**
    $\gamma' = 10.19$ kN/m³

3.  **Calculate total passive pressure at the base (z=6 m):**

    *   **Pressure at the water table level (z=3 m):**
        Pressure from surcharge = $K_p \times q = 3 \times 10 = 30$ kN/m²
        Pressure from dry soil = $K_p \times \gamma \times h_w = 3 \times 17 \times 3 = 153$ kN/m²
        Hydrostatic pressure = $\gamma_w \times h_w = 9.81 \times 3 = 29.43$ kN/m²
        Total pressure at z=3m = $30 + 153 + 29.43 = 212.43$ kN/m²

    *   **Pressure at the base (z=6 m):**
        Pressure from surcharge = $K_p \times q = 3 \times 10 = 30$ kN/m²
        Pressure from soil skeleton above WT = $K_p \times \gamma \times h_w = 3 \times 17 \times 3 = 153$ kN/m²
        Pressure from soil skeleton below WT = $K_p \times \gamma' \times (H - h_w) = 3 \times 10.19 \times 3 = 91.71$ kN/m²
        Total pressure from soil skeleton = $30 + 153 + 91.71 = 274.71$ kN/m²
        Hydrostatic pressure at z=6m = $\gamma_w \times H = 9.81 \times 6 = 58.86$ kN/m²

        Total pressure at z=6m = Total pressure from soil skeleton + Hydrostatic pressure
        Total pressure at z=6m = $274.71 + 58.86 = 333.57$ kN/m²

---

### 5. Important Points to Remember

*   **Effective Stress Principle:** The total stress in a soil mass is the sum of effective stress and pore water pressure. $\sigma = \sigma' + u$. Changes in pore water pressure directly affect the effective stress.
*   **Unit Weights:** Always distinguish between dry unit weight ($\gamma$), saturated unit weight ($\gamma_{sat}$), and effective unit weight ($\gamma'$). Use $\gamma'$ for calculations below the water table to determine the pressure from soil grains.
*   **Hydrostatic Pressure:** Hydrostatic pressure acts equally in all directions and is always calculated based on the depth of water.
*   **Surcharge:** Surcharge loads add a uniform pressure component to the earth pressure calculations.
*   **Pressure Diagrams:** Visualize the pressure distribution as a series of trapezoids or rectangles. The resultant force is the area of these diagrams.
*   **Units:** Be consistent with units throughout your calculations (kN, m, kN/m², kN/m³).
*   **Coefficients ($K_a$, $K_p$):** These are crucial for granular soils. Ensure you use the correct formula and $\phi$ value. For cohesive soils, these calculations are more complex and often involve additional terms for cohesion. This module focuses on granular soils.
*   **For Total Stress vs. Effective Stress:** In many practical foundation engineering problems, especially when dealing with retaining walls, we are interested in the *total pressure* that the structure needs to withstand. This includes the pressure from the soil skeleton and the hydrostatic pressure from the water.

---

### 6. Practice Questions

**Question 1:**

A retaining wall retains 5m of sand. The sand has an angle of internal friction ($\phi$) of 32°, and its unit weight ($\gamma$) is 19 kN/m³. A surcharge of 15 kN/m² is applied on the ground surface behind the wall. Calculate the active earth pressure at the base of the wall.

**Answer 1:**
$K_a = \tan^2(45^\circ - 32^\circ/2) = \tan^2(45^\circ - 16^\circ) = \tan^2(29^\circ) \approx 0.306$
Pressure at base = $K_a \times (\gamma \times H + q)$
= $0.306 \times (19 \text{ kN/m³} \times 5 \text{ m} + 15 \text{ kN/m²})$
= $0.306 \times (95 \text{ kN/m²} + 15 \text{ kN/m²})$
= $0.306 \times 110 \text{ kN/m²} \approx 33.66 \text{ kN/m²}$

---

**Question 2:**

A retaining wall retains 7m of sand. The sand has $\phi = 28^\circ$, $\gamma = 18.5$ kN/m³, and $\gamma_{sat} = 21$ kN/m³. The water table is located at a depth of 4m from the surface. Calculate the total active earth pressure at the base of the wall.

**Answer 2:**
$K_a = \tan^2(45^\circ - 28^\circ/2) = \tan^2(45^\circ - 14^\circ) = \tan^2(31^\circ) \approx 0.364$
$\gamma' = \gamma_{sat} - \gamma_w = 21 - 9.81 = 11.19$ kN/m³
Pressure at base (z=7m):
Pressure from soil skeleton above WT = $K_a \times \gamma \times h_w = 0.364 \times 18.5 \times 4 = 27.056$ kN/m²
Pressure from soil skeleton below WT = $K_a \times \gamma' \times (H - h_w) = 0.364 \times 11.19 \times (7 - 4) = 0.364 \times 11.19 \times 3 \approx 12.24$ kN/m²
Total soil skeleton pressure = $27.056 + 12.24 = 39.296$ kN/m²
Hydrostatic pressure at base = $\gamma_w \times H = 9.81 \times 7 = 68.67$ kN/m²
Total active earth pressure at base = $39.296 + 68.67 \approx 107.97$ kN/m²

---

**Question 3:**

For the same retaining wall and sand properties as Question 2, but with a surcharge of 12 kN/m². Calculate the total active earth pressure at the base of the wall.

**Answer 3:**
$K_a \approx 0.364$
$\gamma' = 11.19$ kN/m³
Pressure at base (z=7m):
Pressure from surcharge = $K_a \times q = 0.364 \times 12 = 4.368$ kN/m²
Pressure from soil skeleton above WT = $K_a \times \gamma \times h_w = 0.364 \times 18.5 \times 4 = 27.056$ kN/m²
Pressure from soil skeleton below WT = $K_a \times \gamma' \times (H - h_w) = 0.364 \times 11.19 \times 3 \approx 12.24$ kN/m²
Total soil skeleton pressure = $4.368 + 27.056 + 12.24 = 43.664$ kN/m²
Hydrostatic pressure at base = $\gamma_w \times H = 9.81 \times 7 = 68.67$ kN/m²
Total active earth pressure at base = $43.664 + 68.67 \approx 112.33$ kN/m²
