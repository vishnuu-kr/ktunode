---
title: "Earth pressure and point of application for cohesionless and cohesive soils"
subject: "FOUNDATION ENGINEERING"
module: "Module 1: Earth pressure "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e29"
status: "completed"
scrapedAt: "2026-05-20T18:48:24.782Z"
---
# Foundation Engineering: Module 1 - Earth Pressure

## Topic: Earth Pressure and Point of Application for Cohesionless and Cohesive Soils

This module introduces the fundamental concepts of earth pressure, which is the lateral pressure exerted by soil on retaining structures. Understanding earth pressure is crucial for designing stable and safe retaining walls, basement walls, and other underground structures. We will explore how this pressure varies for different soil types, specifically cohesionless and cohesive soils, and determine the point of application of this pressure.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

1.  **Define and explain** the concept of earth pressure.
2.  **Differentiate** between active, passive, and at-rest earth pressure.
3.  **Explain** the factors influencing earth pressure.
4.  **Calculate** the magnitude of active and passive earth pressure for cohesionless soils using Rankine and Coulomb theories.
5.  **Determine** the point of application of the resultant earth pressure for cohesionless soils.
6.  **Calculate** the magnitude of earth pressure for cohesive soils, considering the effect of cohesion.
7.  **Determine** the point of application of the resultant earth pressure for cohesive soils.
8.  **Understand** the concept of the "rupture zone" in cohesive soils.
9.  **Analyze** the impact of water table on earth pressure.

---

### 1. Introduction to Earth Pressure

*   **Definition:** Earth pressure is the lateral force exerted by soil mass on a retaining structure (e.g., retaining wall, basement wall) when the soil is in a state of equilibrium or movement.
*   **Importance:**
    *   Design of retaining structures to prevent failure due to soil pressure.
    *   Stability analysis of slopes.
    *   Foundation design for structures adjacent to excavations.
*   **Key Factors Influencing Earth Pressure:**
    *   **Soil Properties:**
        *   Unit weight ($\gamma$)
        *   Angle of internal friction ($\phi$)
        *   Cohesion ($c$)
    *   **Wall Geometry:**
        *   Height of the wall ($H$)
        *   Inclination of the wall back ($ \alpha $)
        *   Inclination of the base of the wall ($ \beta $)
    *   **Backfill Properties:**
        *   Slope of the backfill surface ($ \theta $)
        *   Presence of surcharge loads ($q$)
        *   Water table level

---

### 2. Types of Earth Pressure

Earth pressure can be categorized based on the relative movement of the retaining structure with respect to the soil mass.

#### 2.1. Earth Pressure at Rest ($K_0$)

*   **Definition:** This is the lateral earth pressure that acts on a retaining structure when there is **no movement** of the structure relative to the soil. The soil remains in its natural, undisturbed state.
*   **Coefficient of Earth Pressure at Rest ($K_0$):** It is the ratio of lateral effective stress ($\sigma'_h$) to vertical effective stress ($\sigma'_v$) when no lateral strain occurs.
    *   $\sigma'_h = K_0 \sigma'_v$
*   **Calculation:**
    *   For normally consolidated soils: $K_0 = 1 - \sin \phi$
    *   For overconsolidated soils, $K_0$ can be higher and depends on the OCR (Overconsolidation Ratio).
*   **Distribution:** The earth pressure at rest is typically uniformly distributed vertically as a function of depth. The pressure increases linearly with depth.
*   **Use:** Relevant for structures that are rigid and do not yield, such as basement walls with minimal lateral displacement.

#### 2.2. Active Earth Pressure ($K_a$)

*   **Definition:** This is the lateral earth pressure that acts on a retaining structure when the structure moves **away** from the soil mass. This movement allows the soil to expand laterally, resulting in a **reduction** in lateral stress. The soil mass mobilizes its shear strength, and a failure surface develops within the soil.
*   **Coefficient of Active Earth Pressure ($K_a$):** It is the ratio of active lateral effective stress ($\sigma'_a$) to vertical effective stress ($\sigma'_v$).
    *   $\sigma'_a = K_a \sigma'_v$
*   **Distribution:** Active earth pressure is generally triangularly distributed, increasing linearly with depth. The resultant force acts at one-third of the height from the base.
*   **Use:** Relevant for retaining walls that yield or move away from the soil.

#### 2.3. Passive Earth Pressure ($K_p$)

*   **Definition:** This is the lateral earth pressure that acts on a retaining structure when the structure moves **into** the soil mass. This movement causes the soil to compress laterally, resulting in an **increase** in lateral stress. The soil mass is mobilized to its maximum shear strength in compression.
*   **Coefficient of Passive Earth Pressure ($K_p$):** It is the ratio of passive lateral effective stress ($\sigma'_p$) to vertical effective stress ($\sigma'_v$).
    *   $\sigma'_p = K_p \sigma'_v$
*   **Distribution:** Passive earth pressure is also generally triangularly distributed, increasing linearly with depth. The resultant force acts at one-third of the depth from the base.
*   **Use:** Relevant for structures that are pushed into the soil, such as foundations that penetrate the soil or abutments against which soil is pushed.

---

### 3. Earth Pressure for Cohesionless Soils

Cohesionless soils (sands and gravels) have negligible or zero cohesion ($c=0$). Their behavior is primarily governed by their angle of internal friction ($\phi$).

#### 3.1. Rankine Theory (Assuming smooth vertical wall and horizontal backfill)

*   **Assumptions:**
    *   The wall is smooth and vertical.
    *   The backfill surface is horizontal.
    *   The soil is homogeneous and isotropic.
    *   The wall yields sufficiently to develop active/passive conditions.
*   **States of Stress:**
    *   **Active State:** The lateral stress is at its minimum.
    *   **Passive State:** The lateral stress is at its maximum.
*   **Coefficients of Earth Pressure:**
    *   **Active Earth Pressure Coefficient ($K_a$):**
        $$ K_a = \frac{1 - \sin \phi}{1 + \sin \phi} $$
    *   **Passive Earth Pressure Coefficient ($K_p$):**
        $$ K_p = \frac{1 + \sin \phi}{1 - \sin \phi} $$
    *   **Note:** $K_p = 1/K_a$

*   **Calculation of Earth Pressure:**
    *   **Active Earth Pressure ($p_a$):**
        *   At any depth $z$, the vertical effective stress is $\sigma'_v = \gamma' z$ (where $\gamma'$ is the effective unit weight of the soil).
        *   The active effective lateral pressure is $ \sigma'_a = K_a \sigma'_v = K_a \gamma' z $.
        *   The total active pressure (if no surcharge) is the same as the effective active pressure since there is no pore water pressure contributing to lateral earth pressure.
    *   **Passive Earth Pressure ($p_p$):**
        *   At any depth $z$, the passive effective lateral pressure is $ \sigma'_p = K_p \sigma'_v = K_p \gamma' z $.

*   **Point of Application (Resultant Force):**
    *   For both active and passive earth pressure in cohesionless soils, the resultant force acts at **one-third of the height** from the base of the retaining structure.

*   **Example 1: Active Earth Pressure for Cohesionless Soil**
    *   A retaining wall of height $H = 5$ m retains a dry sand with $\phi = 30^\circ$ and unit weight $\gamma = 18 \, \text{kN/m}^3$.
    *   **Calculate $K_a$:**
        $ K_a = \frac{1 - \sin 30^\circ}{1 + \sin 30^\circ} = \frac{1 - 0.5}{1 + 0.5} = \frac{0.5}{1.5} = \frac{1}{3} $
    *   **Calculate the total active earth pressure at the base:**
        The pressure is triangularly distributed. The maximum pressure occurs at the base (depth $H$).
        $ p_a = K_a \gamma H = \frac{1}{3} \times 18 \, \text{kN/m}^3 \times 5 \, \text{m} = 30 \, \text{kN/m}^2 $
    *   **Calculate the resultant active force ($P_a$):**
        The resultant force is the area of the pressure triangle.
        $ P_a = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times p_a \times H = \frac{1}{2} \times 30 \, \text{kN/m}^2 \times 5 \, \text{m} = 75 \, \text{kN/m} $ (per meter of wall length)
    *   **Determine the point of application:**
        The resultant force acts at $H/3$ from the base.
        Point of application = $5 \, \text{m} / 3 = 1.67 \, \text{m}$ from the base.

#### 3.2. Coulomb Theory (More general case)

*   **Assumptions:**
    *   The wall can be inclined ($ \alpha $ with respect to the vertical).
    *   The backfill surface can be inclined ($ \theta $ with respect to the horizontal).
    *   The wall surface is rough (has a wall friction angle $ \delta $).
    *   The failure surface is a plane.
*   **Coefficients of Earth Pressure (for active condition):**
    $$ K_a = \frac{\sin^2 (\phi + \psi)}{\sin^2 \psi \sin (\psi - \beta) \left[ 1 + \sqrt{\frac{\sin (\phi + \delta) \sin (\phi - \theta)}{\sin (\psi - \beta) \sin (\psi + \theta + \delta)}} \right]^2} $$
    where:
    *   $ \phi $ = angle of internal friction of the soil
    *   $ \psi $ = angle of inclination of the failure plane with respect to the horizontal (this angle is determined by minimizing the earth pressure)
    *   $ \beta $ = angle of inclination of the wall with respect to the vertical (positive for battering forward, negative for battering backward)
    *   $ \theta $ = angle of inclination of the backfill surface with respect to the horizontal (positive for upward sloping, negative for downward sloping)
    *   $ \delta $ = angle of friction between the soil and the wall
*   **Simplifications:**
    *   For a vertical wall ($ \beta = 0 $) and horizontal backfill ($ \theta = 0 $), Coulomb's theory reduces to Rankine's theory if the wall is smooth ($ \delta = 0 $).
    *   For a vertical wall ($ \beta = 0 $) with wall friction ($ \delta $), the active pressure coefficient is:
        $$ K_a = \frac{\sin^2 (\phi + \delta)}{\sin^2 \phi \sin (\phi - \delta) \left[ 1 + \sqrt{\frac{\sin (\phi + \delta) \sin (\phi)}{\sin (\phi - \delta) \sin \delta}} \right]^2} $$
        This formula is complex. For practical purposes, approximate formulas or charts are often used.

*   **Point of Application (Resultant Force):**
    *   Similar to Rankine theory, for a planar failure surface and for retaining structures where the pressure is triangular, the resultant force generally acts at **one-third of the height** from the base, especially for simpler wall geometries. However, if the wall or backfill is heavily inclined, or if there are complex loading conditions, the point of application might deviate.

*   **Important Note on Coulomb Theory:** The full derivation of the optimal failure plane angle ($ \psi $) involves minimizing the lateral force. For practical design, engineers often use simplified versions or charts derived from Coulomb's theory.

---

### 4. Earth Pressure for Cohesive Soils

Cohesive soils (clays) possess cohesion ($c$) in addition to their angle of internal friction ($\phi$). The presence of cohesion significantly alters the earth pressure distribution.

#### 4.1. Rankine Theory for Cohesive Soils

*   **Assumptions:** Similar to Rankine theory for cohesionless soils, but with the addition of cohesion.
*   **Coefficients of Earth Pressure (for active condition):**
    *   **Active Earth Pressure Coefficient ($K_a$):**
        $$ K_a = \frac{1 - \sin \phi}{1 + \sin \phi} $$
        **(Note: The formula for $K_a$ is the same as for cohesionless soils, but its application changes due to cohesion.)**
*   **Calculation of Earth Pressure:**
    *   **Active Earth Pressure ($p_a$):**
        *   The lateral effective stress at depth $z$ is $ \sigma'_a = K_a \sigma'_v - 2c\sqrt{K_a} $.
        *   The total active pressure is $ p_a = \sigma'_a = K_a \gamma z - 2c\sqrt{K_a} $.

*   **Distribution and "Active Pressure Wedge":**
    *   The lateral pressure distribution is not purely triangular. It starts from a negative value at the surface (tension zone) and then becomes positive.
    *   **Depth of Tensile Zone ($z_0$):** This is the depth where the lateral pressure is zero.
        $ K_a \gamma z_0 - 2c\sqrt{K_a} = 0 $
        $ z_0 = \frac{2c\sqrt{K_a}}{K_a \gamma} = \frac{2c}{\gamma\sqrt{K_a}} $
    *   **Active Pressure Wedge:** The soil mass that exerts active pressure is generally assumed to be a wedge extending from the top of the wall to the "rupture surface."
    *   **Zero Pressure Depth:** In purely cohesive soils ($ \phi = 0 $), $K_a = 1$, so $z_0 = 2c/\gamma$. This indicates that for very soft clays, the wall might not experience any significant lateral pressure at the surface due to the cohesive strength.
    *   **Rupture Zone:** The soil mass behind the wall that is in equilibrium or failure. The active wedge is part of this zone.

*   **Point of Application:**
    *   Due to the tension zone at the top, the resultant active force does not simply act at $H/3$.
    *   The total active pressure can be represented as a rectangle of tensile stress at the top and a triangle of compressive stress below.
    *   **Active Force ($P_a$):** The resultant active force is the area of the pressure diagram *above the zero pressure line*.
        *   The pressure is $p_a = K_a \gamma z - 2c\sqrt{K_a}$.
        *   The resultant force is the integral of this pressure over the depth where it is positive.
        *   The pressure is positive from $z_0$ to $H$.
        *   $ P_a = \int_{z_0}^{H} (K_a \gamma z - 2c\sqrt{K_a}) dz $
        *   $ P_a = \left[ \frac{K_a \gamma z^2}{2} - 2c\sqrt{K_a} z \right]_{z_0}^{H} $
        *   Substituting $z_0 = \frac{2c\sqrt{K_a}}{K_a \gamma}$:
            $ P_a = \frac{1}{2} K_a \gamma H^2 - 2c\sqrt{K_a} H - \left( \frac{K_a \gamma}{2} \left(\frac{2c\sqrt{K_a}}{K_a \gamma}\right)^2 - 2c\sqrt{K_a} \left(\frac{2c\sqrt{K_a}}{K_a \gamma}\right) \right) $
            $ P_a = \frac{1}{2} K_a \gamma H^2 - 2c\sqrt{K_a} H - \left( \frac{2c^2}{K_a \gamma} - \frac{4c^2}{K_a \gamma} \right) $
            $ P_a = \frac{1}{2} K_a \gamma H^2 - 2c\sqrt{K_a} H + \frac{2c^2}{K_a \gamma} $
        *   A simpler way to calculate $P_a$: Calculate the pressure at the base $p_{a,H} = K_a \gamma H - 2c\sqrt{K_a}$. If this pressure is positive, the resultant force can be considered as the area of a triangle with base $p_{a,H}$ and height $H$, but shifted downwards by $z_0$.
        *   The resultant force $P_a$ is the area of the pressure triangle from $z_0$ to $H$, with height $(H-z_0)$ and base $K_a \gamma (H-z_0)$.
            $ P_a = \frac{1}{2} \times (K_a \gamma (H-z_0)) \times (H-z_0) = \frac{1}{2} K_a \gamma (H-z_0)^2 $
            Alternatively, the total force can be viewed as the difference between the force due to $K_a \gamma z$ and the force due to the tensile stress $2c\sqrt{K_a}$.
            The force from $K_a \gamma z$ is $ \frac{1}{2} K_a \gamma H^2 $, acting at $H/3$.
            The force from $2c\sqrt{K_a}$ (acting upwards) is $ 2c\sqrt{K_a} H $, acting at $H/2$.
            The net force $P_a$ is $ \frac{1}{2} K_a \gamma H^2 - 2c\sqrt{K_a} H $.
            **However, this is only valid if the tension zone is fully developed.**

    *   **Correct Method for Point of Application:** The resultant force can be found by summing moments about the base.
        *   Moment due to $K_a \gamma z$ distribution: $M_1 = (\frac{1}{2} K_a \gamma H^2) \times \frac{H}{3} = \frac{1}{6} K_a \gamma H^3$.
        *   Moment due to the upward force from the tension zone ($2c\sqrt{K_a}$) acting from $0$ to $z_0$: The effective tensile force is $2c\sqrt{K_a} z_0$, acting at $z_0/2$. The net effect is a downward force if the pressure is negative.
        *   The resultant force is the area of the pressure diagram from $z_0$ to $H$.
        *   **Point of Application:** The resultant force $P_a$ is applied at a distance $h_a$ from the base.
            $ h_a = \frac{\text{Moment about base}}{\text{Total Force}} $
            The resultant force is the sum of the forces from the wedge above $z_0$. The area of the pressure triangle is $\frac{1}{2} K_a \gamma (H-z_0)^2$, acting at a distance of $\frac{H-z_0}{3}$ from the top of the wedge, which means $H - \frac{H-z_0}{3} = \frac{2H+z_0}{3}$ from the base.
            Alternatively, consider the total force as a triangle of height $H$ and base $K_a \gamma H$ acting at $H/3$, and subtract the force due to the tension zone.
            The force due to the tension zone is $\frac{1}{2} (2c\sqrt{K_a}) z_0 = c\sqrt{K_a} z_0$. This force acts upwards.
            Let's use the integral method for clarity.
            $ P_a = \int_{z_0}^{H} (K_a \gamma z - 2c\sqrt{K_a}) dz = \frac{1}{2} K_a \gamma (H^2 - z_0^2) - 2c\sqrt{K_a} (H - z_0) $
            The moment about the base is $ M = \int_{z_0}^{H} (K_a \gamma z - 2c\sqrt{K_a}) (z) dz $
            $ M = \int_{z_0}^{H} (K_a \gamma z^2 - 2c\sqrt{K_a} z) dz = \left[ \frac{K_a \gamma z^3}{3} - c\sqrt{K_a} z^2 \right]_{z_0}^{H} $
            $ M = \frac{K_a \gamma H^3}{3} - c\sqrt{K_a} H^2 - \left( \frac{K_a \gamma z_0^3}{3} - c\sqrt{K_a} z_0^2 \right) $
            $ h_a = M/P_a $

    *   **Simplified Point of Application:** A common approximation for the point of application is from the base:
        $ h_a = \frac{H}{3} $ is **not always correct** for cohesive soils due to the tension zone.
        If the tension zone is significant, the resultant force is effectively from the bottom of the tension zone.
        A practical approach: The resultant force can be calculated as the pressure at the base minus the tension force spread over the depth $z_0$.
        Consider the resultant force acting at $H/3$ from the base due to the entire height $H$. Then, adjust for the tension zone.

    *   **A More Practical Approach for Point of Application:**
        The active pressure diagram for cohesive soil is often approximated by a triangle from $z_0$ to $H$ with base $p_{a,H} = K_a \gamma H - 2c\sqrt{K_a}$.
        The resultant force is $P_a = \frac{1}{2} (H-z_0) (K_a \gamma H - 2c\sqrt{K_a})$.
        This force acts at $\frac{H-z_0}{3}$ from the top of the wedge (i.e., from depth $z_0$).
        So, the point of application from the base is $z_0 + \frac{H-z_0}{3} = \frac{2H + z_0}{3}$.

*   **Example 2: Active Earth Pressure for Cohesive Soil**
    *   A retaining wall of height $H = 6$ m retains a clay with $\phi = 20^\circ$, $c = 20 \, \text{kN/m}^2$, and unit weight $\gamma = 17 \, \text{kN/m}^3$.
    *   **Calculate $K_a$:**
        $ K_a = \frac{1 - \sin 20^\circ}{1 + \sin 20^\circ} = \frac{1 - 0.342}{1 + 0.342} = \frac{0.658}{1.342} \approx 0.49 $
    *   **Calculate the depth of the tensile zone ($z_0$):**
        $ z_0 = \frac{2c\sqrt{K_a}}{\gamma K_a} = \frac{2 \times 20 \, \text{kN/m}^2 \times \sqrt{0.49}}{17 \, \text{kN/m}^3 \times 0.49} = \frac{2 \times 20 \times 0.7}{17 \times 0.49} = \frac{28}{8.33} \approx 3.36 \, \text{m} $
    *   **Calculate the active pressure at the base ($p_{a,H}$):**
        $ p_{a,H} = K_a \gamma H - 2c\sqrt{K_a} = 0.49 \times 17 \, \text{kN/m}^3 \times 6 \, \text{m} - 2 \times 20 \, \text{kN/m}^2 \times \sqrt{0.49} $
        $ p_{a,H} = 50 \, \text{kN/m}^2 - 2 \times 20 \times 0.7 = 50 - 28 = 22 \, \text{kN/m}^2 $
    *   **Calculate the resultant active force ($P_a$):**
        The resultant force is the area of the pressure triangle from $z_0$ to $H$.
        Height of this triangle = $H - z_0 = 6 - 3.36 = 2.64 \, \text{m}$.
        Base of this triangle = $p_{a,H} = 22 \, \text{kN/m}^2$.
        $ P_a = \frac{1}{2} \times (H-z_0) \times p_{a,H} = \frac{1}{2} \times 2.64 \, \text{m} \times 22 \, \text{kN/m}^2 = 29.04 \, \text{kN/m} $
    *   **Determine the point of application:**
        The resultant force acts at $\frac{H-z_0}{3}$ from the top of the wedge (at depth $z_0$).
        Distance from the base = $z_0 + \frac{H-z_0}{3} = 3.36 \, \text{m} + \frac{2.64 \, \text{m}}{3} = 3.36 + 0.88 = 4.24 \, \text{m}$ from the base.

#### 4.2. Passive Earth Pressure for Cohesive Soils

*   **Passive Earth Pressure ($p_p$):**
    *   The lateral effective stress at depth $z$ is $ \sigma'_p = K_p \sigma'_v + 2c\sqrt{K_p} $.
    *   The total passive pressure is $ p_p = \sigma'_p = K_p \gamma z + 2c\sqrt{K_p} $.
*   **Distribution:** The passive pressure increases linearly with depth, starting from a positive value at the surface. The cohesive component adds to the pressure.
*   **Point of Application:** Similar to cohesionless soils, for a wall and horizontal backfill, the passive resultant force acts at **one-third of the height** from the base.

*   **Example 3: Passive Earth Pressure for Cohesive Soil**
    *   Consider the same clay soil as in Example 2, but the wall is pushing into the soil.
    *   $\phi = 20^\circ$, $c = 20 \, \text{kN/m}^2$, $\gamma = 17 \, \text{kN/m}^3$, $H = 6$ m.
    *   **Calculate $K_p$:**
        $ K_p = \frac{1 + \sin 20^\circ}{1 - \sin 20^\circ} = \frac{1 + 0.342}{1 - 0.342} = \frac{1.342}{0.658} \approx 2.04 $
    *   **Calculate the passive pressure at the base ($p_{p,H}$):**
        $ p_{p,H} = K_p \gamma H + 2c\sqrt{K_p} = 2.04 \times 17 \, \text{kN/m}^3 \times 6 \, \text{m} + 2 \times 20 \, \text{kN/m}^2 \times \sqrt{2.04} $
        $ p_{p,H} = 208 \, \text{kN/m}^2 + 2 \times 20 \times 1.43 = 208 + 57.2 = 265.2 \, \text{kN/m}^2 $
    *   **Calculate the resultant passive force ($P_p$):**
        The pressure is triangularly distributed.
        $ P_p = \frac{1}{2} \times p_{p,H} \times H = \frac{1}{2} \times 265.2 \, \text{kN/m}^2 \times 6 \, \text{m} = 795.6 \, \text{kN/m} $
    *   **Determine the point of application:**
        The resultant force acts at $H/3$ from the base.
        Point of application = $6 \, \text{m} / 3 = 2 \, \text{m}$ from the base.

---

### 5. Effect of Water Table

The presence of a water table in the backfill significantly affects the earth pressure by introducing pore water pressure.

*   **Cohesionless Soils:**
    *   **Above the Water Table:** The soil is considered dry or moist. The pressure is calculated based on the total unit weight ($\gamma$).
    *   **Below the Water Table:** The soil is saturated. The effective lateral pressure is calculated using the effective unit weight ($\gamma' = \gamma_{sat} - \gamma_w$), and the pore water pressure ($u = \gamma_w z_w$, where $z_w$ is the depth of water).
    *   The total lateral pressure is the sum of the effective lateral pressure and the pore water pressure.
    *   **Active Pressure Distribution:**
        *   From surface to water table: Triangular distribution of $K_a \gamma z$.
        *   From water table downwards: Increases linearly from $K_a \gamma h_w$ (where $h_w$ is the height of soil above the water table) to $K_a (\gamma' H_{sat} + \gamma_w h_w)$ (where $H_{sat}$ is the saturated height of soil, $h_w$ is the depth of water).
        *   Additionally, there's a hydrostatic pressure distribution from the water table downwards, increasing linearly from $0$ at the water table to $u_{max} = \gamma_w H_{sat}$ at the base.
    *   **Resultant Force:** The total resultant force is the sum of the forces due to the effective stress and the pore water pressure. The pore water pressure acts hydrostatically, so its resultant force is triangular and acts at $H/3$ from the base (of the water column).

*   **Example 4: Earth Pressure with Water Table (Cohesionless Soil)**
    *   A retaining wall of height $H = 7$ m retains dry sand. The water table is at a depth of 4 m from the surface.
    *   $\phi = 30^\circ$, $\gamma_{dry} = 17 \, \text{kN/m}^3$, $\gamma_{sat} = 20 \, \text{kN/m}^3$, $\gamma_w = 9.81 \, \text{kN/m}^3$.
    *   $K_a = 1/3$.
    *   **Pressure above water table (0 to 4 m):**
        *   Effective unit weight = $\gamma_{dry} = 17 \, \text{kN/m}^3$.
        *   Pressure distribution: Triangular, max pressure at 4 m = $K_a \gamma_{dry} \times 4 = (1/3) \times 17 \times 4 = 22.67 \, \text{kN/m}^2$.
        *   Force $P_1 = \frac{1}{2} \times 22.67 \times 4 = 45.34 \, \text{kN/m}$. Acts at $4/3 = 1.33$ m from the base.
    *   **Pressure below water table (4 m to 7 m):**
        *   Effective unit weight = $\gamma' = \gamma_{sat} - \gamma_w = 20 - 9.81 = 10.19 \, \text{kN/m}^3$.
        *   Height of soil above water table = $h_w = 4$ m.
        *   Effective lateral pressure at depth $z$ from surface (where $z > 4$): $p'_{eff} = K_a (\gamma_{dry} h_w + \gamma' (z-h_w))$.
        *   Pore water pressure at depth $z$ from surface (where $z > 4$): $u = \gamma_w (z-h_w)$.
        *   Total lateral pressure = $p'_{eff} + u$.
        *   **Pressure at the water table (4 m):** $K_a \gamma_{dry} h_w = (1/3) \times 17 \times 4 = 22.67 \, \text{kN/m}^2$.
        *   **Pressure at the base (7 m):**
            *   Effective pressure: $K_a (\gamma_{dry} h_w + \gamma' (H-h_w)) = (1/3) (17 \times 4 + 10.19 \times 3) = (1/3)(68 + 30.57) = 32.86 \, \text{kN/m}^2$.
            *   Hydrostatic pressure: $\gamma_w (H-h_w) = 9.81 \times 3 = 29.43 \, \text{kN/m}^2$.
            *   Total pressure at base = $32.86 + 29.43 = 62.29 \, \text{kN/m}^2$.
        *   **Force from the effective stress below water table:** This is a trapezoidal distribution from 4m to 7m.
            *   Pressure at 4m = $22.67 \, \text{kN/m}^2$.
            *   Pressure at 7m = $32.86 \, \text{kN/m}^2$.
            *   Force $P_2 = \frac{1}{2} (22.67 + 32.86) \times 3 = \frac{1}{2} (55.53) \times 3 = 83.30 \, \text{kN/m}$. Acts at $7 - \frac{3}{3} = 6$ m from the base if it were a triangle, but it's a trapezoid. The centroid of the trapezoid is at $3 - \frac{3}{3}(1+\frac{22.67}{55.53}) = 3 - \frac{3}{3}(1+0.41) = 3-1.41 = 1.59$m from the base. Or, calculate moment.
        *   **Force from the hydrostatic pressure below water table:** This is a triangular distribution from 4m to 7m.
            *   Pressure at 4m = $0$.
            *   Pressure at 7m = $29.43 \, \text{kN/m}^2$.
            *   Force $P_3 = \frac{1}{2} \times 29.43 \times 3 = 44.15 \, \text{kN/m}$. Acts at $3/3 = 1$ m from the base.

    *   **Total Force:** $P_a = P_1 + P_2 + P_3 = 45.34 + 83.30 + 44.15 = 172.79 \, \text{kN/m}$.
    *   **Point of Application:** Calculate moments about the base.
        *   Moment from $P_1$: $45.34 \times (7-1.33) = 45.34 \times 5.67 = 257.08 \, \text{kN-m/m}$.
        *   Moment from $P_2$: $\frac{1}{2} (22.67 \times 3^2) + (32.86 \times 3 \times 1.5) = 102.02 + 147.87 = 249.89 \, \text{kN-m/m}$ (approximated as a rectangle and triangle). More accurately, the centroid of the trapezoid is at $1 \, \text{m}$ from the top of the 3m segment, so $3+1 = 4 \, \text{m}$ from the base. $83.30 \times 4 = 333.2 \, \text{kN-m/m}$.
        *   Moment from $P_3$: $44.15 \times 1 = 44.15 \, \text{kN-m/m}$.
        *   Total Moment = $257.08 + 333.2 + 44.15 = 634.43 \, \text{kN-m/m}$.
        *   Point of application from base = Total Moment / Total Force = $634.43 / 172.79 \approx 3.67 \, \text{m}$ from the base.

*   **Cohesive Soils with Water Table:** Similar principles apply, but the cohesive component needs to be considered in conjunction with effective and pore water pressures.

---

### 6. Important Points to Remember

*   **Cohesionless soils:** Pressure is directly proportional to depth and the coefficient ($K_a$ or $K_p$). Resultant force acts at $H/3$.
*   **Cohesive soils:** Cohesion ($c$) reduces active pressure and creates a tensile zone at the top. The resultant force is less than $H/3$ from the base (it is at $ (2H+z_0)/3 $ from the base for the triangular portion). Passive pressure is increased by cohesion.
*   **Water table:** Significantly increases the lateral pressure due to pore water pressure. Effective stress calculations are crucial.
*   **Rankine vs. Coulomb:** Rankine is simpler for vertical walls and horizontal backfills. Coulomb is more general, accounting for wall inclination, backfill slope, and wall friction.
*   **Assumptions:** Always be aware of the assumptions made by the theories you are using (e.g., smooth wall, plane failure surface).
*   **Effective Stress Principle:** Remember that it is the *effective stress* that causes the soil to exert pressure. Pore water pressure reduces effective stress.

---

### 7. Practice Questions

1.  A vertical retaining wall of height 8 m retains dry sand with an angle of internal friction $\phi = 32^\circ$ and unit weight $\gamma = 18.5 \, \text{kN/m}^3$. Calculate the total active earth pressure and its point of application.
2.  For the same soil conditions as in Question 1, if the wall is pushed into the soil, calculate the total passive earth pressure and its point of application.
3.  A retaining wall 5 m high retains a clayey soil with $\phi = 25^\circ$, $c = 15 \, \text{kN/m}^2$, and $\gamma = 19 \, \text{kN/m}^3$. Calculate the depth of the tensile zone and the total resultant active force. Determine the point of application of this force from the base.
4.  A retaining wall 6 m high retains dry sand. The water table is at a depth of 3 m from the surface. The sand has $\phi = 30^\circ$, $\gamma_{dry} = 17 \, \text{kN/m}^3$, $\gamma_{sat} = 20 \, \text{kN/m}^3$. Calculate the total active earth force and its point of application from the base. (Use $\gamma_w = 9.81 \, \text{kN/m}^3$).

---

### 8. Answers to Practice Questions

1.  **Question 1:**
    *   $K_a = \frac{1 - \sin 32^\circ}{1 + \sin 32^\circ} = \frac{1 - 0.530}{1 + 0.530} = \frac{0.470}{1.530} \approx 0.307$
    *   Maximum active pressure at base $p_a = K_a \gamma H = 0.307 \times 18.5 \, \text{kN/m}^3 \times 8 \, \text{m} = 45.43 \, \text{kN/m}^2$.
    *   Total active force $P_a = \frac{1}{2} p_a H = \frac{1}{2} \times 45.43 \times 8 = 181.72 \, \text{kN/m}$.
    *   Point of application = $H/3 = 8/3 \approx 2.67 \, \text{m}$ from the base.

2.  **Question 2:**
    *   $K_p = \frac{1 + \sin 32^\circ}{1 - \sin 32^\circ} = \frac{1 + 0.530}{1 - 0.530} = \frac{1.530}{0.470} \approx 3.255$
    *   Maximum passive pressure at base $p_p = K_p \gamma H = 3.255 \times 18.5 \, \text{kN/m}^3 \times 8 \, \text{m} = 481.86 \, \text{kN/m}^2$.
    *   Total passive force $P_p = \frac{1}{2} p_p H = \frac{1}{2} \times 481.86 \times 8 = 1927.44 \, \text{kN/m}$.
    *   Point of application = $H/3 = 8/3 \approx 2.67 \, \text{m}$ from the base.

3.  **Question 3:**
    *   $K_a = \frac{1 - \sin 25^\circ}{1 + \sin 25^\circ} = \frac{1 - 0.423}{1 + 0.423} = \frac{0.577}{1.423} \approx 0.406$
    *   Depth of tensile zone $z_0 = \frac{2c\sqrt{K_a}}{\gamma K_a} = \frac{2 \times 15 \times \sqrt{0.406}}{19 \times 0.406} = \frac{30 \times 0.637}{7.714} = \frac{19.11}{7.714} \approx 2.48 \, \text{m}$.
    *   Pressure at base $p_{a,H} = K_a \gamma H - 2c\sqrt{K_a} = 0.406 \times 19 \times 5 - 2 \times 15 \times \sqrt{0.406} = 38.57 - 30 \times 0.637 = 38.57 - 19.11 = 19.46 \, \text{kN/m}^2$.
    *   Total resultant active force $P_a = \frac{1}{2} (H-z_0) p_{a,H} = \frac{1}{2} (5 - 2.48) \times 19.46 = \frac{1}{2} (2.52) \times 19.46 = 24.52 \, \text{kN/m}$.
    *   Point of application from base = $z_0 + \frac{H-z_0}{3} = 2.48 + \frac{5-2.48}{3} = 2.48 + \frac{2.52}{3} = 2.48 + 0.84 = 3.32 \, \text{m}$ from the base.

4.  **Question 4:**
    *   $H = 6 \, \text{m}$, Water table at $h_w = 3 \, \text{m}$. $\phi = 30^\circ$, $K_a = 1/3$. $\gamma_{dry} = 17 \, \text{kN/m}^3$, $\gamma_{sat} = 20 \, \text{kN/m}^3$, $\gamma_w = 9.81 \, \text{kN/m}^3$.
    *   **Part 1: Above water table (0 to 3 m):**
        *   Pressure distribution: Triangular.
        *   Max pressure at 3 m: $p_1 = K_a \gamma_{dry} h_w = (1/3) \times 17 \times 3 = 17 \, \text{kN/m}^2$.
        *   Force $F_1 = \frac{1}{2} \times 17 \times 3 = 25.5 \, \text{kN/m}$.
        *   Acts at $3/3 = 1 \, \text{m}$ from the top of this section, so $6 - 1 = 5 \, \text{m}$ from the base.
    *   **Part 2: Below water table (3 m to 6 m):**
        *   Effective unit weight $\gamma' = \gamma_{sat} - \gamma_w = 20 - 9.81 = 10.19 \, \text{kN/m}^3$.
        *   Pressure distribution is composed of:
            *   Effective pressure: Trapezoidal. Pressure at 3 m = $17 \, \text{kN/m}^2$. Pressure at 6 m = $K_a (\gamma_{dry} h_w + \gamma' (H-h_w)) = (1/3) (17 \times 3 + 10.19 \times 3) = (1/3)(51 + 30.57) = 27.19 \, \text{kN/m}^2$.
            *   Hydrostatic pressure: Triangular. Pressure at 3 m = 0. Pressure at 6 m = $\gamma_w (H-h_w) = 9.81 \times 3 = 29.43 \, \text{kN/m}^2$.
        *   **Force from effective pressure ($F_2$):**
            $ F_2 = \frac{1}{2} (\text{pressure at 3m} + \text{pressure at 6m}) \times (\text{height of section}) = \frac{1}{2} (17 + 27.19) \times 3 = \frac{1}{2} (44.19) \times 3 = 66.29 \, \text{kN/m} $.
            Acts at a distance $3 - \frac{3}{3}(1 + \frac{17}{44.19}) = 3 - 1.41 = 1.59 \, \text{m}$ from the base of this section (i.e., $1.59 \, \text{m}$ from the bottom of the wall).
        *   **Force from hydrostatic pressure ($F_3$):**
            $ F_3 = \frac{1}{2} \times \text{max hydrostatic pressure} \times (\text{height of section}) = \frac{1}{2} \times 29.43 \times 3 = 44.15 \, \text{kN/m} $.
            Acts at $3/3 = 1 \, \text{m}$ from the base of this section (i.e., $1 \, \text{m}$ from the bottom of the wall).
    *   **Total Force:** $P_a = F_1 + F_2 + F_3 = 25.5 + 66.29 + 44.15 = 135.94 \, \text{kN/m}$.
    *   **Point of Application:** Calculate moments about the base.
        *   Moment from $F_1$: $25.5 \times 5 = 127.5 \, \text{kN-m/m}$.
        *   Moment from $F_2$: $66.29 \times 1.59 = 105.40 \, \text{kN-m/m}$. (Approximate centroid of trapezoid is at $1.59$m from base). More accurately, the centroid of the trapezoid is at $1$m from the top of the 3m segment, so $3+1 = 4$m from the base. Moment = $66.29 \times 4 = 265.16$.
        *   Moment from $F_3$: $44.15 \times 1 = 44.15 \, \text{kN-m/m}$.
        *   Total Moment (using correct centroid for F2) = $127.5 + 265.16 + 44.15 = 436.81 \, \text{kN-m/m}$.
        *   Point of application from base = Total Moment / Total Force = $436.81 / 135.94 \approx 3.21 \, \text{m}$ from the base.

---
