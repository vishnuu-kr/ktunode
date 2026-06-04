---
title: "Types of Sheet Pile Walls-Cantilever Sheet Pile Walls -
Cantilever sheet pile walls with cohesion less backfill-deflection diagram-depth of embedment."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 3: Under reamed piles"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811212"
status: "completed"
scrapedAt: "2026-05-20T18:52:05.742Z"
---
# Advanced Foundation Engineering: Module 3 - Under-reamed Piles

## Topic: Types of Sheet Pile Walls - Cantilever Sheet Pile Walls

This module delves into the behavior and design of cantilever sheet pile walls, a crucial retaining structure in foundation engineering. We will focus on their application with cohesionless backfill, understanding their deflection patterns, and determining the necessary depth of embedment.

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Identify and describe the basic principles of cantilever sheet pile walls.
*   Analyze the forces acting on a cantilever sheet pile wall with cohesionless backfill.
*   Understand and interpret the deflection diagram of a cantilever sheet pile wall.
*   Calculate the required depth of embedment for a cantilever sheet pile wall.
*   Discuss the factors influencing the design of cantilever sheet pile walls.

---

### 1. Introduction to Sheet Pile Walls

Sheet pile walls are continuous walls constructed from interlocking sheet piles, typically made of steel, vinyl, or wood. They are primarily used for:

*   **Retaining soil or water:** Preventing lateral earth pressure from collapsing excavations or containing water in waterfront structures.
*   **Cofferdams:** Creating dry work areas for construction below the water table.
*   **Earth retention systems:** Supporting excavations in urban areas where space is limited.

**Key Concept:** Sheet piles derive their strength and rigidity from their interlocking mechanism and their ability to act as a beam or slab supported by the surrounding soil.

---

### 2. Cantilever Sheet Pile Walls

A cantilever sheet pile wall is a retaining wall that relies on the flexural rigidity of the sheet pile itself to resist the lateral earth pressure. It is anchored only at its base, acting as a cantilever beam fixed at the dredge line (or bottom of excavation).

**Key Characteristics:**

*   **No external bracing or anchors:** This makes them simpler to construct and cost-effective for shallow to moderate depths.
*   **Flexural rigidity:** The strength of the sheet pile material and its cross-sectional properties are crucial for resisting bending moments.
*   **Cantilever action:** The pile bends and deflects under the applied earth pressure.

**Principle of Operation:**

When soil is excavated from one side of a sheet pile wall, the lateral earth pressure acts on the wall. In a cantilever wall, this pressure creates bending moments within the sheet pile. The wall deflects outwards at the top and inwards at the bottom, with the maximum bending moment typically occurring near the dredge line. The soil on the retained side provides passive resistance at the bottom, which helps to stabilize the wall.

---

### 3. Cantilever Sheet Pile Walls with Cohesionless Backfill

For a cantilever sheet pile wall retaining cohesionless backfill (e.g., sand), the lateral earth pressure can be calculated using Rankine's theory or Coulomb's theory.

**3.1 Lateral Earth Pressure (Rankine's Theory - Simplified for Cohesionless Soil):**

*   **Active Earth Pressure ($P_a$):** This is the pressure exerted by the retained soil on the wall.
    *   At a depth $z$ from the surface of the backfill:
        $P_a(z) = K_a \gamma z$
        where:
        *   $K_a$ is the coefficient of active earth pressure.
        *   $\gamma$ is the unit weight of the soil.
        *   $z$ is the depth from the top of the backfill.
    *   For a cohesionless soil, $K_a = \tan^2(45^\circ - \phi/2)$, where $\phi$ is the angle of internal friction.
*   **Passive Earth Pressure ($P_p$):** This is the resistance offered by the soil below the dredge line.
    *   At a depth $z$ below the dredge line, acting on the opposite side of the wall:
        $P_p(z) = K_p \gamma z$
        where:
        *   $K_p$ is the coefficient of passive earth pressure.
        *   For a cohesionless soil, $K_p = \tan^2(45^\circ + \phi/2)$.

**3.2 Force Diagram and Equilibrium:**

The wall is subjected to:

*   **Active earth pressure** acting on the backfill side.
*   **Passive earth pressure** acting on the excavated side (below the dredge line).
*   **Water pressure** (if applicable, which we are not considering in this specific focus, but it's important to remember).

The wall must be in equilibrium under these forces. For the purpose of calculating the depth of embedment, we typically consider the forces acting on the wall and the moments they create about a point of rotation.

**Example:**

Consider a cantilever sheet pile wall retaining dry sand with $\phi = 30^\circ$ and $\gamma = 18 \text{ kN/m}^3$. The height of the backfill above the dredge line is $H = 5 \text{ m}$.

*   $K_a = \tan^2(45^\circ - 30^\circ/2) = \tan^2(30^\circ) = (1/\sqrt{3})^2 = 1/3$.
*   $K_p = \tan^2(45^\circ + 30^\circ/2) = \tan^2(60^\circ) = (\sqrt{3})^2 = 3$.

The active earth pressure at the dredge line ($z=H=5 \text{ m}$) is $P_a(5) = (1/3) \times 18 \text{ kN/m}^3 \times 5 \text{ m} = 30 \text{ kN/m}^2$. This pressure acts as a triangular distribution from the top of the backfill to the dredge line. The total active force per unit length of wall is $F_a = (1/2) \times K_a \gamma H^2 = (1/2) \times (1/3) \times 18 \times 5^2 = 75 \text{ kN/m}$. This force acts at $H/3$ from the dredge line.

---

### 4. Deflection Diagram of a Cantilever Sheet Pile Wall

The deflection of a cantilever sheet pile wall is not uniform. It is zero at the fixed support (which is assumed to be below the dredge line) and increases towards the top of the wall.

**General Shape of the Deflection Diagram:**

*   **At the top of the wall:** The deflection is maximum and outwards (away from the retained soil).
*   **Near the dredge line:** The deflection is relatively small.
*   **Below the dredge line:** The wall deflects inwards, resisting the outward pressure from the active side and being supported by the passive pressure from the excavated side.

The deflection diagram typically has a characteristic "S" shape when viewed in relation to the excavation.

**Factors Affecting Deflection:**

*   **Height of retained soil:** Higher walls experience greater deflection.
*   **Soil properties:** Softer soils lead to larger deflections.
*   **Flexural rigidity of the sheet pile:** Stiffer piles (larger section modulus) deflect less.
*   **Depth of embedment:** Adequate embedment limits the deflection at the top.
*   **Presence of water table:** Water pressure can significantly increase deflection.

**Simplified Approach to Deflection (Conceptual):**

While a precise calculation of the deflection curve involves complex beam-on-elastic-foundation analysis, conceptually, we can visualize the deflection as a result of the bending moment induced by the lateral earth pressures. The point of maximum bending moment often occurs near the dredge line.

---

### 5. Depth of Embedment (Fixity)

The depth of embedment, often referred to as the "depth of fixity" or "free earth support method," is the minimum depth to which the sheet pile must be driven below the excavation level to ensure stability. This embedment provides the necessary passive resistance to counteract the active pressure and prevent excessive deflection or rotation of the wall.

**Two common methods for determining the depth of embedment:**

1.  **Free Earth Support Method (Simplified):**
    *   This method assumes that the wall is free to rotate at the dredge line.
    *   The wall is considered a cantilever beam extending from the point of zero shear (or zero bending moment, which is idealized as being at the top) to the point of fixity below the dredge line.
    *   The total active pressure acts on the wall above the dredge line.
    *   The passive pressure acts on the wall below the dredge line.
    *   The condition for stability is that the moments caused by the active pressure must be balanced by the moments caused by the passive pressure.
    *   **Procedure:**
        *   Assume a depth of embedment, $D$.
        *   Calculate the total active force per unit length ($F_a$) acting above the dredge line.
        *   Calculate the resultant passive force per unit length ($F_p$) acting below the dredge line.
        *   The wall is in equilibrium when the sum of moments about the dredge line is zero. This involves considering the resultant active and passive forces at their respective centroids.
        *   **Iterative process:** Start with an assumed $D$ and check for moment equilibrium. Adjust $D$ until equilibrium is achieved.

    **Calculation for Cohesionless Backfill (Dry):**

    Let $H$ be the height of the retained soil above the dredge line. Let $D$ be the required depth of embedment below the dredge line.

    *   **Active Pressure:**
        *   At depth $z$ from the top of the backfill: $p_a(z) = K_a \gamma z$
        *   Total active force: $F_a = \frac{1}{2} K_a \gamma H^2$
        *   Centroid of active pressure: $\frac{H}{3}$ from the dredge line.
        *   Moment due to active pressure about the dredge line: $M_a = F_a \times \frac{H}{3} = \frac{1}{6} K_a \gamma H^3$

    *   **Passive Pressure:**
        *   At depth $d$ from the dredge line (so actual depth from the surface is $H+d$): $p_p(d) = K_p \gamma d$
        *   Total passive force (assumed to act over the embedment depth $D$): $F_p = \frac{1}{2} K_p \gamma D^2$
        *   Centroid of passive pressure: $\frac{D}{3}$ from the dredge line (acting upwards, resisting the active pressure).
        *   Moment due to passive pressure about the dredge line: $M_p = F_p \times \frac{D}{3} = \frac{1}{6} K_p \gamma D^3$

    *   **Equilibrium Condition:**
        $M_a = M_p$
        $\frac{1}{6} K_a \gamma H^3 = \frac{1}{6} K_p \gamma D^3$
        $K_a H^3 = K_p D^3$
        $D^3 = \frac{K_a}{K_p} H^3$
        $D = H \left(\frac{K_a}{K_p}\right)^{1/3}$

    **Important Note:** This simplified formula is a starting point. Real-world calculations often involve a "factor of safety" applied to the passive pressure or a reduction in the allowable passive resistance.

2.  **Modified Free Earth Support Method (or Fixed Earth Support Method):**
    *   This method accounts for the fact that the wall is not truly free to rotate at the dredge line. The soil below the dredge line provides a restraining moment, effectively fixing the wall at some depth below the dredge line.
    *   This leads to a deeper required embedment compared to the free earth support method.
    *   **Procedure:**
        *   The wall is treated as a beam fixed at a certain depth $d_f$ below the dredge line.
        *   The net pressure distribution (active minus passive) is analyzed.
        *   The depth of embedment $D$ is determined such that the bending moments and shears are zero at the point of fixity.
        *   This method typically results in a required embedment depth of approximately $1.2$ to $1.5$ times the depth calculated by the free earth support method.

**Factors Affecting Depth of Embedment:**

*   **Soil Type:** Cohesionless soils require greater embedment than cohesive soils for the same depth of excavation.
*   **Angle of Internal Friction ($\phi$):** Higher $\phi$ values lead to greater passive resistance and thus potentially smaller embedment.
*   **Unit Weight of Soil ($\gamma$):** Higher unit weight increases both active and passive pressures.
*   **Height of Retained Soil ($H$):** Larger $H$ requires greater embedment.
*   **Water Table:** The presence of a water table reduces the effective stress and thus the passive resistance, requiring deeper embedment.
*   **Factor of Safety:** A factor of safety is usually applied to the passive resistance to account for uncertainties in soil properties and analysis.
*   **Sheet Pile Properties:** The flexural rigidity of the sheet pile influences the bending moments and the effective depth of fixity.

**Important Point:** The simplified free earth support method often provides a good initial estimate, but the modified methods or more detailed analysis are generally preferred for critical designs.

---

### Practice Questions and Exercises

**Question 1:**

A cantilever sheet pile wall retains dry sand with an angle of internal friction $\phi = 30^\circ$ and unit weight $\gamma = 18 \text{ kN/m}^3$. The height of the retained soil above the dredge line is $H = 4 \text{ m}$. Calculate the required depth of embedment ($D$) using the free earth support method.

**Answer 1:**

*   $K_a = \tan^2(45^\circ - 30^\circ/2) = \tan^2(30^\circ) = 1/3$
*   $K_p = \tan^2(45^\circ + 30^\circ/2) = \tan^2(60^\circ) = 3$
*   Using the formula $D = H \left(\frac{K_a}{K_p}\right)^{1/3}$:
    $D = 4 \text{ m} \left(\frac{1/3}{3}\right)^{1/3} = 4 \text{ m} \left(\frac{1}{9}\right)^{1/3}$
    $D = 4 \text{ m} \times 0.481 \approx 1.92 \text{ m}$

    The required depth of embedment is approximately 1.92 m.

**Question 2:**

Explain the general shape of the deflection diagram for a cantilever sheet pile wall and identify the location of maximum deflection.

**Answer 2:**

The deflection diagram of a cantilever sheet pile wall typically has an "S" shape. The deflection is zero at the point of fixity (assumed below the dredge line), gradually increases to a maximum outwards deflection at the top of the wall, and then curves inwards below the dredge line due to the passive resistance of the soil. The maximum deflection occurs at the top of the wall.

**Question 3:**

What are the advantages of using cantilever sheet pile walls?

**Answer 3:**

Advantages of cantilever sheet pile walls include:

*   **Simplicity of construction:** They do not require complex bracing or anchoring systems.
*   **Cost-effectiveness:** For shallower excavations, they are generally more economical than other types of retaining walls.
*   **Relatively quick installation.**
*   **Good for waterfront protection and temporary excavations.**

**Question 4:**

Discuss the impact of a water table on the design of cantilever sheet pile walls.

**Answer 4:**

The presence of a water table significantly impacts the design of cantilever sheet pile walls:

*   **Reduced Effective Stress:** The water table reduces the effective unit weight of the soil, which lowers the lateral earth pressure. However, it also reduces the passive resistance.
*   **Hydrostatic Pressure:** Water exerts hydrostatic pressure on the wall, which must be accounted for. This hydrostatic pressure acts on both sides of the wall if there is water on the excavated side.
*   **Increased Deflection:** The combined effect of reduced effective stress and hydrostatic pressure often leads to increased deflections.
*   **Deeper Embedment:** To compensate for the reduced passive resistance and increased pressures, a deeper embedment is usually required when a water table is present. Pumping from the excavation also needs to be considered to manage hydrostatic uplift.

---

### Important Points to Remember:

*   **Cantilever walls are self-supporting:** Their strength comes solely from the flexural rigidity of the sheet piles.
*   **Cohesionless backfill simplifies pressure calculations:** Rankine's theory is commonly used for this.
*   **Depth of embedment is critical:** It ensures stability by providing sufficient passive resistance.
*   **Free earth support is a simplified method:** Modified methods provide more realistic results.
*   **Deflection is a key design consideration:** Excessive deflection can compromise functionality and aesthetics.
*   **The water table is a crucial factor:** Its presence necessitates a more conservative design approach.
*   **A factor of safety is always applied** to the passive resistance to ensure adequate stability.

---
