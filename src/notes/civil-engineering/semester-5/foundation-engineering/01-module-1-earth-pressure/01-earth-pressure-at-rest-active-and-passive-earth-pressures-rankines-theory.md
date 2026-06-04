---
title: "Earth pressure - At rest, active and passive earth pressures - Rankine’s theory"
subject: "FOUNDATION ENGINEERING"
module: "Module 1: Earth pressure "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e28"
status: "completed"
scrapedAt: "2026-05-20T18:48:23.938Z"
---
# FOUNDATION ENGINEERING: Module 1 - Earth Pressure

## Topic: Earth Pressure - At Rest, Active, and Passive Earth Pressures - Rankine's Theory

---

### **1. Introduction to Earth Pressure**

*   **Definition:** Earth pressure is the pressure exerted by soil on retaining structures (like retaining walls, basement walls, abutments) and other underground structures. It is a crucial factor in the design of these structures to prevent failure.
*   **Types of Earth Pressure:**
    *   **At-Rest Earth Pressure ($K_0$):** The pressure exerted by soil when it is in a state of no lateral movement. This is the initial state before any movement of the retaining structure.
    *   **Active Earth Pressure ($K_a$):** The minimum lateral pressure exerted by soil when the retaining structure moves *away* from the soil, causing the soil to expand laterally.
    *   **Passive Earth Pressure ($K_p$):** The maximum lateral pressure exerted by soil when the retaining structure moves *towards* the soil, causing the soil to compress laterally.

---

### **2. At-Rest Earth Pressure ($K_0$)**

*   **Concept:** Occurs when there is no movement (translation or rotation) of the retaining wall. The soil mass is in equilibrium, and the lateral earth pressure is proportional to the vertical pressure.
*   **Coefficient of At-Rest Earth Pressure ($K_0$):**
    *   Defined as the ratio of lateral effective stress to vertical effective stress:
        $$K_0 = \frac{\sigma'_h}{\sigma'_v}$$
    *   Where:
        *   $\sigma'_h$ = effective lateral stress
        *   $\sigma'_v$ = effective vertical stress
*   **Estimation of $K_0$:**
    *   **For normally consolidated soils:**
        *   Jaky's empirical formula: $K_0 = 1 - \sin \phi'$
        *   Where $\phi'$ is the effective angle of internal friction.
    *   **For overconsolidated soils:**
        *   $K_0$ is generally higher than for normally consolidated soils and depends on the OCR (Overconsolidation Ratio).
        *   Various empirical relationships exist, e.g., $K_0 = K_{0,nc} \times OCR^{0.5}$, where $K_{0,nc}$ is the $K_0$ for normally consolidated state.
*   **Vertical Stress ($\sigma_v$):** In the absence of any external loads, $\sigma_v = \gamma z$, where $\gamma$ is the unit weight of the soil and $z$ is the depth.
*   **Lateral Stress ($\sigma_h$):** $\sigma_h = K_0 \sigma_v = K_0 \gamma z$ (for effective stresses, if water table is present).
*   **Total Stress:** If the soil is submerged, the total stress is the sum of effective stress and pore water pressure.
    *   $\sigma_v = \gamma_{sat} z$ (if below water table)
    *   $\sigma'_v = (\gamma_{sat} - \gamma_w) z$
    *   $\sigma'_h = K_0 (\gamma_{sat} - \gamma_w) z$
    *   $\sigma_h = \sigma'_h + u$, where $u = \gamma_w z_w$ (pore water pressure).

*   **Example:**
    A retaining wall is built against a deposit of sand with $\gamma = 18 \, \text{kN/m}^3$ and $\phi' = 30^\circ$. The water table is at a depth of 2 m. Calculate the at-rest earth pressure at a depth of 4 m.
    *   **Step 1: Calculate $K_0$ (assuming normally consolidated sand):**
        $K_0 = 1 - \sin \phi' = 1 - \sin 30^\circ = 1 - 0.5 = 0.5$.
    *   **Step 2: Calculate effective vertical stress ($\sigma'_v$) at 4 m depth:**
        For the first 2 m (above water table): $\sigma'_v = \gamma z = 18 \times 2 = 36 \, \text{kN/m}^2$.
        For the next 2 m (below water table), assuming $\gamma_{sat} \approx \gamma$: $\sigma'_v = (\gamma - \gamma_w) z = (18 - 9.81) \times 2 = 8.19 \times 2 = 16.38 \, \text{kN/m}^2$.
        Total effective vertical stress at 4 m: $\sigma'_v = 36 + 16.38 = 52.38 \, \text{kN/m}^2$.
    *   **Step 3: Calculate effective lateral stress ($\sigma'_h$):**
        $\sigma'_h = K_0 \sigma'_v = 0.5 \times 52.38 = 26.19 \, \text{kN/m}^2$.
    *   **Step 4: Calculate pore water pressure ($u$) at 4 m:**
        $u = \gamma_w z_w = 9.81 \times 2 = 19.62 \, \text{kN/m}^2$.
    *   **Step 5: Calculate total lateral stress ($\sigma_h$):**
        $\sigma_h = \sigma'_h + u = 26.19 + 19.62 = 45.81 \, \text{kN/m}^2$.

---

### **3. Rankine's Theory of Earth Pressure**

*   **Assumptions:**
    1.  The soil is homogeneous, semi-infinite, and isotropic.
    2.  The ground surface is either horizontal or inclined at a constant angle.
    3.  The retaining wall is smooth and vertical.
    4.  The soil is in a limiting equilibrium state (either active or passive).
    5.  The failure surface in the soil is a plane.
    6.  The surcharge pressure, if any, is uniform.

*   **States of Stress in Rankine's Theory:**
    *   **At-Rest:** Not directly addressed by Rankine's fundamental theory, but it forms the baseline.
    *   **Active State:** Occurs when the wall moves away from the soil, leading to expansion. The lateral stress is at its minimum.
    *   **Passive State:** Occurs when the wall moves into the soil, leading to compression. The lateral stress is at its maximum.

---

### **4. Rankine's Active Earth Pressure**

*   **Concept:** The minimum lateral pressure exerted by a soil mass on a retaining structure when the structure moves away from the soil, allowing the soil to expand. The soil mass fails along a plane inclined to the horizontal.
*   **Derivation (Key Points):**
    *   The failure wedge is in equilibrium.
    *   The critical failure plane makes an angle $\alpha = 45^\circ + \phi'/2$ with the horizontal.
    *   The angle of inclination of the backfill surface is $\beta$.
    *   The resultant force from the soil on the wall acts at a distance of $H/3$ from the base, where $H$ is the height of the wall.
*   **Coefficient of Active Earth Pressure ($K_a$):**
    *   For a vertical wall and horizontal backfill:
        $$K_a = \frac{1 - \sin \phi'}{1 + \sin \phi'}$$
    *   For a vertical wall and inclined backfill (inclination angle $\beta$):
        $$K_a = \cos \beta \frac{\cos \beta - \sqrt{\cos^2 \beta - \cos^2 \phi'}}{\cos \beta + \sqrt{\cos^2 \beta - \cos^2 \phi'}}$$
*   **Active Earth Pressure ($p_a$):**
    *   For a vertical wall and horizontal backfill:
        $$p_a = K_a \sigma'_v = K_a \gamma z$$
    *   The resultant active force ($P_a$) is the integral of $p_a$ over the height of the wall:
        $$P_a = \int_0^H p_a \, dz = K_a \gamma \int_0^H z \, dz = \frac{1}{2} K_a \gamma H^2$$
*   **Active Thrust:** The total force exerted by the soil on the wall in the active state.

*   **Example:**
    A smooth retaining wall of height 5 m retains a dry sand with $\gamma = 17 \, \text{kN/m}^3$ and $\phi' = 35^\circ$. The backfill is horizontal. Calculate the active earth pressure and the total active thrust.
    *   **Step 1: Calculate $K_a$:**
        $K_a = \frac{1 - \sin 35^\circ}{1 + \sin 35^\circ} = \frac{1 - 0.5736}{1 + 0.5736} = \frac{0.4264}{1.5736} = 0.271$.
    *   **Step 2: Calculate active earth pressure at the base (z=5m):**
        $p_a = K_a \gamma z = 0.271 \times 17 \times 5 = 23.04 \, \text{kN/m}^2$.
    *   **Step 3: Calculate total active thrust ($P_a$):**
        $P_a = \frac{1}{2} K_a \gamma H^2 = \frac{1}{2} \times 0.271 \times 17 \times 5^2 = \frac{1}{2} \times 0.271 \times 17 \times 25 = 57.61 \, \text{kN/m}$.

---

### **5. Rankine's Passive Earth Pressure**

*   **Concept:** The maximum lateral pressure exerted by a soil mass on a retaining structure when the structure moves into the soil, causing it to compress. The soil mass fails along a plane inclined to the horizontal.
*   **Derivation (Key Points):**
    *   Similar equilibrium considerations as active pressure, but the direction of force and failure plane orientation are reversed.
    *   The critical failure plane makes an angle $\alpha = 45^\circ - \phi'/2$ with the horizontal.
    *   The angle of inclination of the backfill surface is $\beta$.
*   **Coefficient of Passive Earth Pressure ($K_p$):**
    *   For a vertical wall and horizontal backfill:
        $$K_p = \frac{1 + \sin \phi'}{1 - \sin \phi'}$$
    *   For a vertical wall and inclined backfill (inclination angle $\beta$):
        $$K_p = \cos \beta \frac{\cos \beta + \sqrt{\cos^2 \beta - \cos^2 \phi'}}{\cos \beta - \sqrt{\cos^2 \beta - \cos^2 \phi'}}$$
*   **Passive Earth Pressure ($p_p$):**
    *   For a vertical wall and horizontal backfill:
        $$p_p = K_p \sigma'_v = K_p \gamma z$$
    *   The resultant passive force ($P_p$) is the integral of $p_p$ over the height of the wall:
        $$P_p = \int_0^H p_p \, dz = K_p \gamma \int_0^H z \, dz = \frac{1}{2} K_p \gamma H^2$$
*   **Passive Resistance:** The total force exerted by the soil on the wall in the passive state, resisting the wall's movement.

*   **Example:**
    Consider the same retaining wall as in the active pressure example, but now the wall moves *into* the soil. Calculate the passive earth pressure and the total passive resistance.
    *   **Step 1: Calculate $K_p$:**
        $K_p = \frac{1 + \sin 35^\circ}{1 - \sin 35^\circ} = \frac{1 + 0.5736}{1 - 0.5736} = \frac{1.5736}{0.4264} = 3.69$.
    *   **Step 2: Calculate passive earth pressure at the base (z=5m):**
        $p_p = K_p \gamma z = 3.69 \times 17 \times 5 = 313.65 \, \text{kN/m}^2$.
    *   **Step 3: Calculate total passive resistance ($P_p$):**
        $P_p = \frac{1}{2} K_p \gamma H^2 = \frac{1}{2} \times 3.69 \times 17 \times 5^2 = \frac{1}{2} \times 3.69 \times 17 \times 25 = 783.94 \, \text{kN/m}$.

---

### **6. Effect of Water Table**

*   **Concept:** When the water table is present, the pore water pressure reduces the effective stress, which in turn reduces the lateral earth pressure (both active and passive).
*   **Calculation:**
    1.  Determine the effective vertical stress ($\sigma'_v$) considering the submerged unit weight ($\gamma' = \gamma_{sat} - \gamma_w$) for the portion of the soil below the water table.
    2.  Apply the appropriate coefficient ($K_a$ or $K_p$) to the effective vertical stress to find the effective lateral stress ($\sigma'_h$).
    3.  Calculate the pore water pressure ($u$) based on the depth of the water column.
    4.  The total lateral pressure is the sum of effective lateral stress and pore water pressure: $\sigma_h = \sigma'_h + u$.

*   **Example:**
    A retaining wall of height 6 m retains a saturated clay with $\gamma_{sat} = 19 \, \text{kN/m}^3$ and $\phi' = 25^\circ$. The water table is at the ground surface. Calculate the active earth pressure at the base and the total active thrust.
    *   **Step 1: Calculate $K_a$:**
        $K_a = \frac{1 - \sin 25^\circ}{1 + \sin 25^\circ} = \frac{1 - 0.4226}{1 + 0.4226} = \frac{0.5774}{1.4226} = 0.406$.
    *   **Step 2: Calculate effective vertical stress ($\sigma'_v$) at the base (z=6m):**
        Since the clay is saturated and the water table is at the surface, $\gamma_{sat} = 19 \, \text{kN/m}^3$ and $\gamma_w = 9.81 \, \text{kN/m}^3$.
        Effective unit weight $\gamma' = \gamma_{sat} - \gamma_w = 19 - 9.81 = 9.19 \, \text{kN/m}^3$.
        $\sigma'_v = \gamma' z = 9.19 \times 6 = 55.14 \, \text{kN/m}^2$.
    *   **Step 3: Calculate effective lateral stress ($\sigma'_h$) at the base:**
        $\sigma'_h = K_a \sigma'_v = 0.406 \times 55.14 = 22.39 \, \text{kN/m}^2$.
    *   **Step 4: Calculate pore water pressure ($u$) at the base:**
        $u = \gamma_w z = 9.81 \times 6 = 58.86 \, \text{kN/m}^2$.
    *   **Step 5: Calculate total lateral pressure ($\sigma_h$) at the base:**
        $\sigma_h = \sigma'_h + u = 22.39 + 58.86 = 81.25 \, \text{kN/m}^2$.
    *   **Step 6: Calculate total active thrust ($P_a$):**
        $P_a = \frac{1}{2} K_a \gamma' H^2 = \frac{1}{2} \times 0.406 \times 9.19 \times 6^2 = \frac{1}{2} \times 0.406 \times 9.19 \times 36 = 67.26 \, \text{kN/m}$.
        *(Note: The resultant force is calculated using the effective stress profile, which is triangular. The total force is the area of this effective stress triangle).*

---

### **7. Effect of Surcharge**

*   **Concept:** When a uniform surcharge load ($q$) is applied on the ground surface, it increases the vertical stress, thereby increasing the lateral earth pressure.
*   **Calculation:**
    *   The surcharge directly adds to the vertical stress.
    *   For active pressure: $p_a = K_a (\gamma z + q)$
    *   For passive pressure: $p_p = K_p (\gamma z + q)$
    *   The total thrust will have an additional component due to the surcharge, which is uniform across the height of the wall: $P_{a,surcharge} = K_a q H$.

*   **Example:**
    Consider the first example (active pressure with horizontal backfill, $\gamma = 17 \, \text{kN/m}^3$, $\phi' = 35^\circ$, $H=5 \, \text{m}$). If a uniform surcharge of $10 \, \text{kN/m}^2$ is applied on the backfill.
    *   We already calculated $K_a = 0.271$.
    *   **Active earth pressure at the base (z=5m) with surcharge:**
        $p_a = K_a (\gamma z + q) = 0.271 \times (17 \times 5 + 10) = 0.271 \times (85 + 10) = 0.271 \times 95 = 25.75 \, \text{kN/m}^2$.
    *   **Total active thrust ($P_a$) with surcharge:**
        $P_a = \frac{1}{2} K_a \gamma H^2 + K_a q H = 57.61 + (0.271 \times 10 \times 5) = 57.61 + 13.55 = 71.16 \, \text{kN/m}$.

---

### **8. Comparison of Active, Passive, and At-Rest Pressures**

| Parameter         | At-Rest ($K_0$)          | Active ($K_a$)              | Passive ($K_p$)              |
| :---------------- | :----------------------- | :-------------------------- | :--------------------------- |
| **Wall Movement** | None                     | Moves away from soil        | Moves into soil              |
| **Soil Stress**   | Intermediate             | Minimum lateral stress      | Maximum lateral stress       |
| **Lateral Strain**| Zero                     | Tensile (expansion)         | Compressive (compression)    |
| **$K_0$ Value**   | Typically $0.4 - 0.7$ (OC) to $1-\sin\phi'$ (NC) | $K_a = \frac{1-\sin\phi'}{1+\sin\phi'}$ | $K_p = \frac{1+\sin\phi'}{1-\sin\phi'}$ |
| **Magnitude**     | $\sigma_h = K_0 \sigma'_v$ | $\sigma_h = K_a \sigma'_v$ | $\sigma_h = K_p \sigma'_v$ |
| **Force**         | Intermediate             | Minimum Thrust              | Maximum Resistance           |
| **Failure Plane** | Not well-defined         | $\alpha = 45^\circ + \phi'/2$ | $\alpha = 45^\circ - \phi'/2$ |

**Important Relationship:** $K_a \times K_p = \left(\frac{1-\sin\phi'}{1+\sin\phi'}\right) \times \left(\frac{1+\sin\phi'}{1-\sin\phi'}\right) = 1$.

---

### **9. Practice Questions and Answers**

**Question 1:**
A retaining wall retains a dry sand with $\gamma = 16 \, \text{kN/m}^3$ and $\phi' = 30^\circ$. The wall is smooth and vertical, and the backfill is horizontal. Calculate the at-rest earth pressure coefficient and the active earth pressure coefficient.

**Answer 1:**
*   **At-Rest Earth Pressure Coefficient ($K_0$):**
    Assuming normally consolidated sand: $K_0 = 1 - \sin \phi' = 1 - \sin 30^\circ = 1 - 0.5 = 0.5$.
*   **Active Earth Pressure Coefficient ($K_a$):**
    $K_a = \frac{1 - \sin \phi'}{1 + \sin \phi'} = \frac{1 - \sin 30^\circ}{1 + \sin 30^\circ} = \frac{1 - 0.5}{1 + 0.5} = \frac{0.5}{1.5} = 0.333$.

---

**Question 2:**
A retaining wall is 4 m high and retains a dry sand with $\gamma = 18 \, \text{kN/m}^3$ and $\phi' = 35^\circ$. The water table is at a depth of 2 m below the ground surface. Calculate the total active thrust on the wall.

**Answer 2:**
*   **Step 1: Calculate $K_a$:**
    $K_a = \frac{1 - \sin 35^\circ}{1 + \sin 35^\circ} = \frac{1 - 0.5736}{1 + 0.5736} = 0.271$.
*   **Step 2: Calculate effective stresses and pore water pressure:**
    *   For the top 2 m (above water table): $\gamma = 18 \, \text{kN/m}^3$.
        Effective vertical stress profile is triangular, $\sigma'_v$ at 2m depth = $18 \times 2 = 36 \, \text{kN/m}^2$.
        Effective lateral stress profile is triangular, $\sigma'_h$ at 2m depth = $K_a \times 36 = 0.271 \times 36 = 9.76 \, \text{kN/m}^2$.
    *   For the bottom 2 m (below water table): $\gamma' = \gamma_{sat} - \gamma_w = 18 - 9.81 = 8.19 \, \text{kN/m}^3$.
        Effective vertical stress at 4m depth (total effective stress) = $(18 \times 2) + (\gamma' \times 2) = 36 + (8.19 \times 2) = 36 + 16.38 = 52.38 \, \text{kN/m}^2$.
        Effective lateral stress at 4m depth = $K_a \times 52.38 = 0.271 \times 52.38 = 14.19 \, \text{kN/m}^2$.
    *   Pore water pressure ($u$) at 4m depth = $\gamma_w \times 2 = 9.81 \times 2 = 19.62 \, \text{kN/m}^2$.
*   **Step 3: Calculate the resultant active thrust ($P_a$):**
    The resultant force is the integral of the lateral pressure. We need to consider the pressure distribution.
    *   Pressure distribution is triangular above water table: $p_a = K_a \gamma z$.
        $P_{a1} = \frac{1}{2} K_a \gamma H_1^2 = \frac{1}{2} \times 0.271 \times 18 \times 2^2 = 9.76 \, \text{kN/m}$.
    *   Pressure distribution is trapezoidal below water table: effective pressure varies linearly, and pore water pressure is constant.
        Effective lateral pressure at 2m depth (start of submerged zone) = $K_a \times (\gamma \times 2) = 0.271 \times 36 = 9.76 \, \text{kN/m}^2$.
        Effective lateral pressure at 4m depth = $K_a \times ((\gamma \times 2) + (\gamma' \times 2)) = 0.271 \times 52.38 = 14.19 \, \text{kN/m}^2$.
        $P_{a2}$ (from effective stress in submerged zone) = $\frac{1}{2} (9.76 + 14.19) \times 2 = \frac{1}{2} \times 23.95 \times 2 = 23.95 \, \text{kN/m}$.
    *   Pore water pressure is constant at $19.62 \, \text{kN/m}^2$ over the 2 m submerged depth.
        $P_{a3}$ (from pore water pressure) = $19.62 \times 2 = 39.24 \, \text{kN/m}$.
    *   Total Active Thrust ($P_a$) = $P_{a1} + P_{a2} + P_{a3} = 9.76 + 23.95 + 39.24 = 72.95 \, \text{kN/m}$.

---

**Question 3:**
A vertical retaining wall of 5 m height supports a soil with $\gamma = 17 \, \text{kN/m}^3$ and $\phi' = 30^\circ$. The backfill is horizontal. Calculate the total passive resistance if the wall moves into the soil.

**Answer 3:**
*   **Step 1: Calculate $K_p$:**
    $K_p = \frac{1 + \sin \phi'}{1 - \sin \phi'} = \frac{1 + \sin 30^\circ}{1 - \sin 30^\circ} = \frac{1 + 0.5}{1 - 0.5} = \frac{1.5}{0.5} = 3.0$.
*   **Step 2: Calculate total passive resistance ($P_p$):**
    $P_p = \frac{1}{2} K_p \gamma H^2 = \frac{1}{2} \times 3.0 \times 17 \times 5^2 = \frac{1}{2} \times 3.0 \times 17 \times 25 = 637.5 \, \text{kN/m}$.

---

### **10. Important Points to Remember**

*   **Effective Stress Principle:** The behavior of soil under stress is governed by effective stress, which is the difference between total stress and pore water pressure.
*   **Rankine's Theory Assumptions:** Always keep the assumptions in mind, as they limit the applicability of the theory.
*   **Wall Movement:** The direction of wall movement is critical in determining whether active or passive conditions prevail.
*   **Water Table:** The presence of a water table significantly affects earth pressure calculations by reducing effective stresses.
*   **$K_0$, $K_a$, $K_p$ Relationship:** For a given soil and $\phi'$, $K_p > K_0 > K_a$.
*   **Failure Plane Angle:** The angle of the failure plane is $45^\circ + \phi'/2$ for active and $45^\circ - \phi'/2$ for passive conditions (with respect to the horizontal for a vertical wall and horizontal backfill).
*   **Triangular Pressure Distribution:** For active and passive pressures on a smooth vertical wall with horizontal backfill, the pressure distribution is triangular, starting from zero at the surface and increasing linearly with depth.
*   **Resultant Force Location:** For active and passive pressures (with horizontal backfill), the resultant force acts at a distance of $H/3$ from the base of the wall.

---
