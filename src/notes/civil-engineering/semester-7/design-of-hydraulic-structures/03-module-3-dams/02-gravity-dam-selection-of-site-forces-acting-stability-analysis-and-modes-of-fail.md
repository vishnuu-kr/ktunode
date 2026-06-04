---
title: "Gravity dam – selection of site- forces acting - stability analysis and modes of failure – Principal and shear stresses Problems - Elementary profile –limiting height of gravity dams high and low dams- Practical profiles"
subject: "DESIGN OF HYDRAULIC STRUCTURES"
module: "Module 3: Dams"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811713"
status: "completed"
scrapedAt: "2026-05-20T18:57:51.699Z"
---
# DESIGN OF HYDRAULIC STRUCTURES - Module 3: Dams

## Topic: Gravity Dams

---

### **Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Understand the principles behind the selection of suitable sites for gravity dams.
*   Identify and analyze the various forces acting on a gravity dam.
*   Perform stability analysis of gravity dams against overturning, sliding, and crushing.
*   Understand the modes of failure of gravity dams.
*   Calculate principal and shear stresses within a gravity dam.
*   Derive and apply the concept of the elementary profile of a gravity dam.
*   Determine the limiting height of gravity dams.
*   Differentiate between high and low dams.
*   Understand the concept of practical profiles of gravity dams.

---

### **1. Selection of Site for Gravity Dams**

The selection of a suitable site is crucial for the economical and safe construction of a gravity dam. Key considerations include:

*   **Geological and Topographical Conditions:**
    *   **Narrow gorge or valley:** This minimizes the span of the dam and the volume of material required, leading to cost-effectiveness.
    *   **Strong foundation:** The foundation must be capable of withstanding the immense pressure exerted by the dam and reservoir. Sound rock (igneous or metamorphic) is ideal. Sedimentary rocks might be acceptable if competent and free from faults or fissures.
    *   **Impermeable foundation:** To prevent seepage and uplift pressures, the foundation should be relatively impermeable.
    *   **Stable abutments:** The sides of the valley (abutments) must be strong enough to support the dam and resist the lateral thrust of the reservoir water.
*   **Availability of Construction Materials:**
    *   Proximity to sources of suitable construction materials like rock, sand, and cement is important for reducing transportation costs and construction time.
*   **Reservoir Capacity:**
    *   The valley upstream of the proposed dam site should be suitable for impounding the required volume of water.
*   **Economic Viability:**
    *   The overall cost of construction, including materials, labor, and land acquisition, should be justified by the benefits derived from the dam (e.g., water supply, power generation, flood control).
*   **Environmental and Social Impact:**
    *   Minimizing displacement of populations and environmental disruption.

---

### **2. Forces Acting on a Gravity Dam**

A gravity dam derives its stability primarily from its own weight. The forces acting on a gravity dam can be broadly categorized as:

*   **Self-weight of the dam (W):**
    *   This is the most significant stabilizing force.
    *   Calculated as the volume of the dam material multiplied by its unit weight.
    *   Acts vertically through the centroid of the dam's cross-section.
*   **Reservoir Water Pressure (P_w):**
    *   This is a destabilizing force.
    *   It's a hydrostatic pressure that acts horizontally on the upstream face of the dam.
    *   The pressure varies linearly with depth, from zero at the water surface to maximum at the deepest point.
    *   The resultant force acts at a distance of H/3 from the base, where H is the depth of water.
*   **Uplift Pressure (U):**
    *   This is a destabilizing force that acts vertically upwards on the base of the dam.
    *   It's caused by water seeping into the pores and cracks of the foundation and the dam material.
    *   The uplift pressure is assumed to vary linearly from the maximum pressure at the upstream edge to a minimum at the downstream edge.
    *   **Maximum uplift pressure:** Equal to the hydrostatic pressure at that point (γ_w * H).
    *   **Minimum uplift pressure:** Often assumed to be zero at the downstream toe for an ideal scenario, or a small value due to tailwater.
    *   **Effective uplift force:** Calculated based on the projected area of the base and the average uplift pressure.
*   **Wave Pressure (P_wp):**
    *   This is a destabilizing force acting on the upstream face, caused by the action of waves on the reservoir surface.
    *   It's typically considered for high dams exposed to strong winds.
    *   The magnitude depends on the wave height, which is related to the fetch (distance over which the wind blows).
*   **Ice Pressure (P_ice):**
    *   This is a destabilizing force that acts horizontally on the upstream face in regions with freezing temperatures.
    *   It's caused by the expansion of ice and its outward thrust.
    *   The magnitude depends on the thickness of the ice and the temperature variations.
*   **Silt Pressure (P_s):**
    *   This is a destabilizing force acting horizontally on the upstream face if there is a significant accumulation of silt behind the dam.
    *   The silt acts as a fluid with a certain unit weight and angle of internal friction.
    *   Rankine's or Coulomb's theories of earth pressure can be used to estimate this force.
*   **Earthquake Forces (Inertia forces):**
    *   These are dynamic forces acting on the dam mass and the reservoir water during an earthquake.
    *   They can cause significant stresses and potentially instability.

---

### **3. Stability Analysis and Modes of Failure**

A gravity dam must be stable against the following potential modes of failure:

**3.1. Overturning (Rotation):**

*   **Condition for stability:** The resultant of all forces acting on the dam must pass within the middle third of the base. This ensures that the entire base remains in compression, preventing tensile stresses.
*   **Analysis:**
    *   Calculate the total stabilizing moment (M_s) due to self-weight (W).
    *   Calculate the total overturning moment (M_o) due to water pressure, uplift, wave pressure, etc.
    *   **Factor of safety against overturning (FS_ot):**
        $$FS_{ot} = \frac{\text{Sum of stabilizing moments}}{\text{Sum of overturning moments}} = \frac{M_s}{M_o}$$
    *   **Acceptable FS_ot:** Generally greater than 1.5 to 2.0.

**3.2. Sliding:**

*   **Condition for stability:** The horizontal forces acting on the dam must be resisted by the frictional forces at the base and the shear strength of the foundation.
*   **Analysis:**
    *   Calculate the resultant horizontal force (ΣH).
    *   Calculate the resultant vertical force (ΣV) (sum of vertical forces, including self-weight and effective uplift).
    *   The resisting force against sliding is primarily due to friction at the base: $F_{friction} = \mu \Sigma V$, where $\mu$ is the coefficient of friction.
    *   **Factor of safety against sliding (FS_s):**
        $$FS_s = \frac{\text{Resisting forces}}{\text{Overcoming forces}} = \frac{\Sigma V \times \mu + C \times A_{base}}{\Sigma H}$$
        Where:
        *   $\mu$ is the coefficient of friction between the dam base and foundation.
        *   C is the cohesion of the foundation material (if any).
        *   $A_{base}$ is the area of the dam base.
    *   **Alternative approach using shear strength:**
        $$FS_s = \frac{\text{Shear strength of foundation}}{\text{Maximum shear stress on base}}$$
    *   **Acceptable FS_s:** Generally greater than 1.0 to 1.5.

**3.3. Crushing (Bearing Capacity Failure):**

*   **Condition for stability:** The maximum pressure at the base of the dam should not exceed the permissible bearing capacity of the foundation material.
*   **Analysis:**
    *   The resultant of all forces acts at a certain eccentricity 'e' from the center of the base.
    *   The distribution of pressure at the base is generally assumed to be trapezoidal.
    *   **Maximum pressure (p_max):** $p_{max} = \frac{\Sigma V}{B} \left(1 + \frac{6e}{B}\right)$
    *   **Minimum pressure (p_min):** $p_{min} = \frac{\Sigma V}{B} \left(1 - \frac{6e}{B}\right)$
    *   Where B is the width of the base.
    *   **Condition for no tension:** $e \leq \frac{B}{6}$ (resultant passes within the middle third). If this condition is met, $p_{min}$ will be positive.
    *   **Acceptable p_max:** $p_{max} \leq$ Permissible bearing capacity of the foundation.

**3.4. Modes of Failure:**

*   **Sliding:** The dam slides horizontally along its base or at some intermediate horizontal plane.
*   **Overturning:** The dam rotates about its downstream toe.
*   **Crushing:** The foundation material beneath the dam fails due to excessive bearing pressure.
*   **Cracking:** Tensile stresses exceeding the tensile strength of the concrete can lead to cracking, especially at the downstream face at higher levels or at the heel due to uplift.
*   **Differential settlement:** Uneven settlement of the foundation can cause stress concentrations and cracking.

---

### **4. Principal and Shear Stresses**

**4.1. Principal Stresses:**

*   These are the maximum and minimum normal stresses acting at a point in a material, occurring on planes where the shear stress is zero.
*   In a gravity dam, principal stresses are calculated at various points, especially at the base, heel, and toe, to assess internal stresses.
*   For a point on the base, the stresses are generally considered in the vertical and horizontal directions.
*   **Vertical stress ($\sigma_z$):** Caused by the weight of the material above and the water pressure.
*   **Horizontal stress ($\sigma_x$):** Caused by the water pressure and potentially by temperature variations or earth pressures.
*   **Maximum principal stress ($\sigma_1$):** $\sigma_1 = \frac{\sigma_x + \sigma_z}{2} + \sqrt{\left(\frac{\sigma_x - \sigma_z}{2}\right)^2 + \tau_{xz}^2}$
*   **Minimum principal stress ($\sigma_3$):** $\sigma_3 = \frac{\sigma_x + \sigma_z}{2} - \sqrt{\left(\frac{\sigma_x - \sigma_z}{2}\right)^2 + \tau_{xz}^2}$
    Where $\tau_{xz}$ is the shear stress.

**4.2. Shear Stresses:**

*   These are stresses acting parallel to a plane.
*   Shear stresses are significant at the base of the dam, particularly at the toe, and can contribute to sliding failure.
*   They also exist within the dam body due to variations in normal stresses.
*   **Maximum shear stress ($\tau_{max}$):** $\tau_{max} = \sqrt{\left(\frac{\sigma_x - \sigma_z}{2}\right)^2 + \tau_{xz}^2}$

**Important Points:**

*   **Stress Analysis at the Toe:** The toe is a critical section where compressive stresses are high. It's important to ensure that the maximum principal stress does not exceed the crushing strength of the concrete and that the minimum principal stress (which can be tensile if the resultant is outside the middle third) does not cause cracking.
*   **Stress Analysis at the Heel:** The heel can experience tensile stresses, especially under conditions of high uplift pressure and low reservoir water level.
*   **Principal stresses are important for checking material strength limits.**

---

### **5. Elementary Profile**

*   **Definition:** The elementary profile of a gravity dam is the theoretical profile that would be stable under the action of reservoir water pressure, uplift pressure, and self-weight, with the resultant force passing through the downstream edge of the middle third of the base. It represents the minimum width required at any given depth for stability.
*   **Derivation:**
    *   Consider a horizontal slice of the dam at depth 'y' from the free surface of the reservoir, with height 'dy' and width 'b' at the top and 'b+db' at the bottom.
    *   The primary stabilizing force is the weight of the dam, and the primary destabilizing force is the horizontal water pressure.
    *   For stability against overturning and sliding with no tension at the base (simplest case), the resultant force should pass through the downstream edge of the middle third.
    *   Let the dam have a height H.
    *   At any depth 'y' from the top, the width of the dam is 'b'.
    *   The destabilizing horizontal force per unit length at depth 'y' is $dP = \frac{1}{2} \gamma_w (H^2 - y^2) - \frac{1}{2} \gamma_w (H_{tail}^2)$ (assuming tailwater is present). For no tailwater, $dP = \frac{1}{2} \gamma_w H^2$ acting at H/3 from the base.
    *   The stabilizing vertical force per unit length is $dW = b \cdot y \cdot \gamma_c$ (assuming a rectangular section for simplicity in derivation).
    *   For the resultant to pass through the downstream edge of the middle third, the moment of the resultant force about the downstream toe should be zero.
    *   The elementary profile is generally triangular in shape.
    *   **Equation of the elementary profile:** The width 'b' at depth 'y' from the top is given by:
        $$b_y = H \sqrt{\frac{\gamma_w}{\gamma_c}} \sqrt{1 - \frac{y^2}{H^2}} \text{ (for reservoir on one face only)}$$
        A more general form considering both upstream and downstream water levels and uplift leads to a parabolic shape for the upstream face.
    *   **Key takeaway:** The elementary profile is the minimum section required for stability. Any gravity dam must have a profile at least as wide as the elementary profile at all depths.

---

### **6. Limiting Height of Gravity Dams**

*   **Definition:** The limiting height of a gravity dam is the maximum height it can be constructed to for a given site and material without failing due to crushing or sliding, assuming the dam has an elementary profile.
*   **Considerations for Limiting Height:**
    *   **Crushing Stress:** The maximum compressive stress at the base should not exceed the permissible crushing strength of the concrete and the foundation.
    *   **Sliding:** The factor of safety against sliding must be maintained.
    *   **Uplift Pressure:** Uplift pressure significantly reduces the effective weight of the dam, thus reducing the frictional resistance and increasing the stress at the base.
*   **Calculation:**
    *   Assume an elementary profile. The base width at depth 'y' from the top is $b_y$.
    *   The weight of a slice of height 'h' and base width 'b' is $W = \frac{1}{2} (b + b_{toe}) h \gamma_c$.
    *   The uplift force is $U = \frac{1}{2} (0 + \gamma_w H) b_{toe} h$.
    *   The destabilizing horizontal force is $P = \frac{1}{2} \gamma_w H^2$.
    *   The limiting height is often determined by the condition that the maximum compressive stress at the base of an elementary triangular dam (which is 0 at the heel and $2W/B$ at the toe, where W is weight and B is base width) does not exceed the crushing strength of the material.
    *   A simplified approach relates the limiting height to the ratio of the unit weight of the dam material to the unit weight of water and the permissible compressive stress.
    *   **Approximate limiting height ($H_{lim}$):** $H_{lim} \approx \frac{\sigma_{cc}}{\gamma_c - \gamma_w}$, where $\sigma_{cc}$ is the crushing strength of concrete. This formula assumes no uplift.
    *   **With uplift:** The effective unit weight is $(\gamma_c - \gamma_w)$, so the limiting height is reduced.

---

### **7. High and Low Dams**

*   **Classification is based on the height of the dam relative to its base width or other factors, but a common distinction is based on the design considerations:**
    *   **Low Dams:**
        *   Generally have a height of less than 15-20 meters.
        *   The design is primarily governed by the water load and self-weight.
        *   Tensile stresses at the heel are often negligible or can be easily managed.
        *   The upstream face can be vertical or have a slight batter.
        *   Stability is primarily checked against overturning and sliding.
    *   **High Dams:**
        *   Generally have a height greater than 15-20 meters.
        *   The design is more complex and involves considering uplift pressures, thermal stresses, earthquake forces, and wave pressures.
        *   Tensile stresses at the heel and toe need careful analysis.
        *   The upstream face is typically sloped significantly to reduce the overturning moment and the magnitude of uplift.
        *   The downstream face is also sloped to manage stresses and provide stability.
        *   The profile is often designed to minimize tensile stresses.

*   **Key differences in design:** High dams require more rigorous analysis of all forces, including transient and dynamic loads, and careful control of stresses to prevent cracking and ensure stability.

---

### **8. Practical Profiles**

*   **Definition:** Practical profiles are modifications of the elementary profile to account for real-world conditions, material properties, and stability requirements. They aim to be economical and safe.
*   **Key Features of Practical Profiles:**
    *   **Sloping Upstream Face:** To reduce the overturning moment caused by water pressure and to minimize the width at higher levels, reducing the volume of material.
    *   **Sloping Downstream Face:** To provide stability against sliding and to manage the distribution of stresses at the base. The downstream slope is generally steeper than the upstream slope.
    *   **Thicker Base:** The base is significantly wider than the elementary profile to ensure that the resultant force passes within the middle third of the base, preventing tension and limiting compressive stresses.
    *   **Curved Faces:** In some cases, curved upstream and downstream faces are used to optimize stress distribution and further reduce material.
    *   **Galleries:** Internal galleries are often incorporated for drainage, inspection, and instrumentation. These can affect the stress distribution.
    *   **Toe and Key:** A concrete or masonry "toe" may be provided at the downstream end to increase the resistance to sliding and to distribute the load. A "key" might be incorporated into the foundation to increase shear resistance.
    *   **Drainage Systems:** Filter layers and drainage holes are essential to reduce uplift pressures.

*   **Common Practical Profiles:**
    *   **Triangular with sloped faces:** A basic practical profile that resembles the elementary profile but with significant batters on both faces.
    *   **Trapezoidal with sloped faces:** A more common practical profile where the base width is significantly larger than the top width, and both faces are sloped.
    *   **Combined profiles:** Often, the upstream face might have a steeper slope at higher elevations and a gentler slope at lower elevations.

*   **Design process involves iterative adjustments of the profile to meet all stability criteria and stress limits.**

---

### **Practice Problems**

**Problem 1: Stability Analysis (Sliding)**

A concrete gravity dam has a height of 30 m. The upstream face is vertical, and the downstream face has a horizontal to vertical slope ratio of 0.7. The dam retains water to its full height. The unit weight of concrete is 24 kN/m³. The coefficient of friction at the base is 0.7. Assume the uplift pressure varies from full hydrostatic pressure at the heel to zero at the toe.

Calculate the factor of safety against sliding.

**Solution:**

1.  **Calculate the forces acting:**
    *   **Self-weight (W):** To calculate 'W', we need the cross-sectional area. Assuming a unit length of the dam (1m width into the page).
        *   Base width (B): Let's assume a base width for now, and then check if it's stable. A reasonable starting point for stability analysis might be assuming a base width related to height. However, for sliding analysis, we need the resultant vertical force. If we assume a triangular section for simplicity in calculation, base width $B = 0.7 \times 30 = 21$ m.
        *   Area $A = \frac{1}{2} \times (0 + 21) \times 30 = 315 \, m^2$.
        *   Weight $W = A \times \gamma_c \times 1 \, m = 315 \times 24 = 7560 \, kN$.
        *   The centroid of the triangle is at $B/3$ from the toe.

    *   **Reservoir water pressure (P_w):** This force acts horizontally.
        *   $P_w = \frac{1}{2} \gamma_w H^2$, where $\gamma_w = 9.81 \, kN/m^3$ and $H = 30 \, m$.
        *   $P_w = \frac{1}{2} \times 9.81 \times (30)^2 = 4414.5 \, kN$.
        *   This force acts at H/3 from the base.

    *   **Uplift pressure (U):** This force acts upwards on the base.
        *   It varies linearly from $\gamma_w H$ at the heel to 0 at the toe.
        *   The uplift force is the area of the uplift triangle multiplied by the unit weight of water.
        *   $U = \frac{1}{2} (\gamma_w H) \times B \times 1 \, m$ (assuming a triangular shape and 1m length).
        *   $U = \frac{1}{2} \times (9.81 \times 30) \times 21 = 3090.15 \, kN$.
        *   This force acts at B/3 from the toe.

2.  **Calculate the total vertical force (ΣV):**
    *   $\Sigma V = W - U = 7560 - 3090.15 = 4469.85 \, kN$.

3.  **Calculate the total horizontal force (ΣH):**
    *   $\Sigma H = P_w = 4414.5 \, kN$.

4.  **Calculate the factor of safety against sliding (FS_s):**
    *   $FS_s = \frac{\Sigma V \times \mu}{\Sigma H}$
    *   $FS_s = \frac{4469.85 \times 0.7}{4414.5} = \frac{3128.895}{4414.5} \approx 0.71$

**Answer:** The factor of safety against sliding is approximately 0.71. This is less than the acceptable limit, indicating potential sliding failure for this assumed profile and height. This highlights the need for a wider base or improved foundation treatment.

---

**Problem 2: Stability Analysis (Overturning and Crushing)**

For the same gravity dam as in Problem 1 (height 30m, vertical upstream face, 0.7 downstream batter), assume a base width B = 22 m. Assume no tailwater. Calculate:

a) Factor of safety against overturning.
b) Maximum and minimum stresses at the base, and check for tension.

**Solution:**

1.  **Calculate the forces and moments:**
    *   **Self-weight (W):**
        *   Area $A = \frac{1}{2} \times (0 + 22) \times 30 = 330 \, m^2$.
        *   $W = 330 \times 24 = 7920 \, kN$.
        *   Centroid is at 22/3 = 7.33 m from the toe.
        *   Stabilizing Moment ($M_s$) about the toe = $W \times 7.33 = 7920 \times 7.33 = 58053.6 \, kNm$.

    *   **Reservoir water pressure (P_w):**
        *   $P_w = \frac{1}{2} \times 9.81 \times (30)^2 = 4414.5 \, kN$.
        *   Acts at H/3 = 30/3 = 10 m from the base.
        *   Overturning Moment ($M_o$) about the toe = $P_w \times 10 = 4414.5 \times 10 = 44145 \, kNm$.

    *   **Uplift pressure (U):** Assuming no tailwater, uplift varies from $\gamma_w H$ at the heel to 0 at the toe.
        *   $U = \frac{1}{2} (\gamma_w H) \times B = \frac{1}{2} \times (9.81 \times 30) \times 22 = 3237.3 \, kN$.
        *   Acts at B/3 = 22/3 = 7.33 m from the toe.
        *   This force reduces the stabilizing moment: $M_s' = M_s - (U \times 7.33) = 58053.6 - (3237.3 \times 7.33) = 58053.6 - 23733.7 = 34319.9 \, kNm$.
        *   This calculation is incorrect. Uplift is an upward force, so it counteracts the self-weight in terms of stabilizing effect on the base. Let's re-evaluate:
            *   Total vertical force = $W - U = 7920 - 3237.3 = 4682.7 \, kN$.
            *   Let's analyze moments about the toe:
                *   Stabilizing Moment (due to W) = $7920 \times 7.33 = 58053.6 \, kNm$.
                *   Overturning Moment (due to Pw) = $4414.5 \times 10 = 44145 \, kNm$.
                *   Uplift Force acts upwards, so its moment about the toe is negative (reducing the tendency to overturn from the water pressure). However, in stability analysis, uplift is usually considered as a destabilizing force in horizontal direction and directly reducing the effective weight. Let's stick to the common method of effective vertical force.

        *   Total vertical force (effective) $\Sigma V = W - U = 7920 - 3237.3 = 4682.7 \, kN$.
        *   Location of resultant vertical force: We need to find the resultant force and its eccentricity.
            *   Horizontal forces: $P_w = 4414.5 \, kN$ (overturning).
            *   Vertical forces: $W - U = 4682.7 \, kN$ (stabilizing).
            *   Let's analyze moments about the toe:
                *   Moment due to W about toe = $7.33 \times 7920 = 58053.6 \, kNm$ (stabilizing).
                *   Moment due to Pw about toe = $10 \times 4414.5 = 44145 \, kNm$ (overturning).
                *   Moment due to U about toe = $7.33 \times 3237.3 = 23733.7 \, kNm$ (overturning, as uplift acts upwards).
            *   Net destabilizing moment $M_{net\_o} = 44145 + 23733.7 - 58053.6 = 9825.1 \, kNm$.

2.  **a) Factor of safety against overturning (FS_ot):**
    *   $FS_{ot} = \frac{\text{Sum of stabilizing moments}}{\text{Sum of overturning moments}} = \frac{58053.6}{44145 + 23733.7} = \frac{58053.6}{67878.7} \approx 0.855$.

    **Answer a):** The factor of safety against overturning is approximately 0.855. This is less than the acceptable limit, indicating potential overturning failure.

3.  **b) Stresses at the base:**
    *   Total vertical force $\Sigma V = W - U = 4682.7 \, kN$.
    *   Base width $B = 22 \, m$.
    *   Location of resultant force: Let's find the net moment about the centroid of the base. Centroid is at $B/2 = 11 \, m$ from the toe.
        *   Moment due to W about centroid = $7920 \times (11 - 7.33) = 7920 \times 3.67 = 29066.4 \, kNm$ (stabilizing).
        *   Moment due to Pw about centroid = $4414.5 \times (11 - 10) = 4414.5 \times 1 = 4414.5 \, kNm$ (overturning).
        *   Moment due to U about centroid = $3237.3 \times (11 - 7.33) = 3237.3 \times 3.67 = 11888.7 \, kNm$ (overturning).
    *   Net moment about centroid $M_{net} = 29066.4 - 4414.5 - 11888.7 = 12763.2 \, kNm$ (This calculation of net moment appears reversed in sign from the previous. Let's re-think. If we consider moments about the toe, the net overturning moment was $9825.1 \, kNm$. The total vertical force is $4682.7 \, kN$. The resultant will be at an eccentricity $e = \frac{M_{net\_o}}{\Sigma V} = \frac{9825.1}{4682.7} \approx 2.1 \, m$ from the toe. The centroid of the base is at $11 \, m$ from the toe. So the resultant is $11 - 2.1 = 8.9 \, m$ from the centroid of the base. This is still confusing. Let's use the resultant force directly.)

    *   **Let's use the formula with eccentricity 'e' about the center of the base:**
        *   Effective vertical force $\Sigma V = 4682.7 \, kN$.
        *   Net overturning moment about the toe $M_{net\_o} = 9825.1 \, kNm$.
        *   Eccentricity $e = \frac{M_{net\_o}}{\Sigma V} = \frac{9825.1}{4682.7} = 2.1 \, m$ (from the toe).
        *   The resultant is located at $2.1 \, m$ from the toe.
        *   The center of the base is at $B/2 = 11 \, m$ from the toe.
        *   The distance of the resultant from the center of the base is $e_{center} = 11 - 2.1 = 8.9 \, m$.

    *   **Maximum stress ($p_{max}$):** $p_{max} = \frac{\Sigma V}{B} \left(1 + \frac{6e_{center}}{B}\right)$
        *   $p_{max} = \frac{4682.7}{22} \left(1 + \frac{6 \times 8.9}{22}\right) = 212.85 \left(1 + \frac{53.4}{22}\right) = 212.85 (1 + 2.427) = 212.85 \times 3.427 \approx 729.6 \, kN/m^2$.

    *   **Minimum stress ($p_{min}$):** $p_{min} = \frac{\Sigma V}{B} \left(1 - \frac{6e_{center}}{B}\right)$
        *   $p_{min} = \frac{4682.7}{22} \left(1 - \frac{6 \times 8.9}{22}\right) = 212.85 \left(1 - 2.427\right) = 212.85 \times (-1.427) \approx -303.8 \, kN/m^2$.

    **Answer b):** The maximum stress at the base is approximately $729.6 \, kN/m^2$. The minimum stress is approximately $-303.8 \, kN/m^2$. Since $p_{min}$ is negative, there is tension at the base. The resultant is outside the middle third of the base ($e_{center} = 8.9 > B/6 = 22/6 = 3.67$).

---

### **Important Points to Remember:**

*   **Gravity dams rely on their self-weight for stability.**
*   **Uplift pressure is a critical destabilizing force that significantly reduces stability.** Always account for it in design.
*   **The resultant force must pass within the middle third of the base to prevent tensile stresses.**
*   **Stability is checked against overturning, sliding, and crushing.**
*   **The toe and heel are critical points for stress analysis.**
*   **The elementary profile provides the minimum section for stability; practical profiles are wider and sloped for better performance.**
*   **High dams require more comprehensive analysis, including dynamic and thermal effects.**
*   **Drainage systems are crucial for controlling uplift.**

---
