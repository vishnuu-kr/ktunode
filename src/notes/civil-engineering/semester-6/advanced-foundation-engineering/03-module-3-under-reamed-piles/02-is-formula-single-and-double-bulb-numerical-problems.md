---
title: "IS formula-single and double bulb -Numerical
problems."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 3: Under reamed piles"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba81120f"
status: "completed"
scrapedAt: "2026-05-20T18:52:03.653Z"
---
# Advanced Foundation Engineering: Module 3 - Under-reamed Piles (IS Formula - Single & Double Bulb)

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the principles behind the IS formula for calculating the load-carrying capacity of under-reamed piles.
*   Apply the IS formula to determine the ultimate load capacity of single-bulb under-reamed piles in various soil conditions.
*   Apply the IS formula to determine the ultimate load capacity of double-bulb under-reamed piles in various soil conditions.
*   Solve numerical problems involving single and double bulb under-reamed piles using the IS formula.
*   Understand the factors influencing the load-carrying capacity of under-reamed piles.

## Introduction to Under-reamed Piles

Under-reamed piles are bored piles with one or more enlarged bulbs at specific depths. These bulbs increase the bearing area and also provide a keying effect in expansive soils, preventing uplift due to swelling. They are particularly effective in soils with poor bearing capacity in the upper strata but good bearing capacity at deeper levels.

## IS Formula for Under-reamed Piles

The Indian Standard (IS) code provides a method for calculating the ultimate load capacity of under-reamed piles. The capacity is generally determined as the sum of the **base (bulb) resistance** and the **shaft resistance**.

### General Formula

The ultimate load capacity ($Q_u$) of an under-reamed pile is given by:

$Q_u = Q_b + Q_s$

Where:
*   $Q_u$ = Ultimate load capacity of the pile
*   $Q_b$ = Ultimate load capacity due to the bulb (base resistance)
*   $Q_s$ = Ultimate load capacity due to the shaft resistance

### Components of the IS Formula

#### 1. Base (Bulb) Resistance ($Q_b$)

The base resistance is primarily developed by the enlarged bulb. The IS code simplifies this by considering the bearing capacity of the soil at the level of the bulb.

For cohesive soils (clays):

$Q_b = A_b \times c_u \times N_c$

Where:
*   $A_b$ = Cross-sectional area of the bulb (circular area)
*   $c_u$ = Undrained cohesion of the soil at the bulb level
*   $N_c$ = Bearing capacity factor (typically taken as 9 for a circular base in cohesive soils)

For cohesionless soils (sands):

$Q_b = A_b \times q_b$

Where:
*   $A_b$ = Cross-sectional area of the bulb
*   $q_b$ = End bearing pressure at the bulb level, which is calculated based on the average angle of internal friction ($\phi$) and the overburden pressure.

**Simplified IS approach for Bulb Resistance:**

The IS code often simplifies the calculation by directly relating the bulb capacity to the bulb diameter and soil properties.

For **cohesive soils**:

$Q_b = \alpha \times A_b \times c_u$

Where:
*   $\alpha$ = Adhesion factor (depends on the soil type and pile installation method, typically between 0.4 to 1.0 for under-reamed piles)

**Important Note on Bulb Diameter:** The IS code specifies a relationship between the bulb diameter ($D_b$) and the pile shaft diameter ($D_s$). Typically, $D_b$ is 2 to 3 times $D_s$.

#### 2. Shaft Resistance ($Q_s$)

The shaft resistance is the frictional resistance developed along the surface of the pile shaft and the bulbs.

For **cohesive soils**:

$Q_s = \sum_{i=1}^{n} (\alpha \times P_i \times c_{ui})$

Where:
*   $P_i$ = Perimeter of the $i^{th}$ segment of the pile shaft (including the circumference of the bulbs)
*   $c_{ui}$ = Average undrained cohesion of the soil in the $i^{th}$ segment
*   $\alpha$ = Adhesion factor, which depends on the soil and the pile installation. For under-reamed piles, a modified $\alpha$ is often used, especially for the bulb portion. The IS code provides guidance on this.

**Key Consideration for Shaft Resistance and Bulbs:** The IS code often modifies the shaft resistance calculation to account for the bulb. For under-reamed piles, it's important to consider the surface area of the bulbs as contributing to skin friction as well.

**IS Code Specifics for Shaft Resistance with Bulbs:**

The IS code often provides specific guidance on how to calculate the shaft resistance when bulbs are present. One common approach is to consider the shaft resistance of the cylindrical portions and then add the frictional component around the bulbs.

$Q_s = Q_{s,shaft} + Q_{s,bulb}$

Where:
*   $Q_{s,shaft}$ = Frictional resistance of the cylindrical pile shaft segments.
*   $Q_{s,bulb}$ = Frictional resistance along the bulb surface.

$Q_{s,shaft} = \sum (\alpha_i P_i L_i c_{ui})$ for cylindrical segments.
$Q_{s,bulb} = \sum (\alpha_{bulb,i} P_{bulb,i} c_{u,bulb,i})$ for bulb surfaces.

**Adhesion Factor ($\alpha$) Values (IS Code Guidance):**
The IS code provides typical values for the adhesion factor $\alpha$ based on soil type.
*   Soft Clays: 0.4 to 0.6
*   Stiff Clays: 0.5 to 0.7
*   Hard Clays: 0.7 to 0.9
*   Expansive Clays: Values can vary significantly, and special considerations are needed.

**Important Point:** For under-reamed piles, the adhesion factor on the bulb is generally taken to be higher than that on the plain shaft, as the bulb offers better keying and bearing. The IS code might use a single $\alpha$ for the entire pile or differentiate between shaft and bulb. Always refer to the latest IS code for specific values and guidance.

## Single Bulb Under-reamed Piles

A single bulb under-reamed pile has one enlarged bulb at a specific depth.

**Calculation Steps using IS Formula (Cohesive Soils):**

1.  **Determine Bulb Capacity ($Q_b$):**
    *   Calculate the area of the bulb ($A_b = \pi/4 \times D_b^2$).
    *   Use $Q_b = \alpha \times A_b \times c_u$, where $c_u$ is the cohesion at the bulb level.

2.  **Determine Shaft Capacity ($Q_s$):**
    *   Divide the pile shaft into segments (above and below the bulb).
    *   For each segment $i$:
        *   Calculate the perimeter ($P_i$).
        *   Determine the average cohesion ($c_{ui}$) in that segment.
        *   Use an appropriate adhesion factor ($\alpha_i$).
        *   Calculate the shaft resistance for the segment: $Q_{s,i} = \alpha_i \times P_i \times L_i \times c_{ui}$.
    *   Sum the shaft resistances of all segments.

3.  **Total Ultimate Capacity ($Q_u$):**
    *   $Q_u = Q_b + Q_s$.

4.  **Safe Load Capacity ($Q_{safe}$):**
    *   $Q_{safe} = Q_u / FS$, where $FS$ is the factor of safety (typically 2.5 to 3.0).

## Double Bulb Under-reamed Piles

A double bulb under-reamed pile has two enlarged bulbs at different depths.

**Calculation Steps using IS Formula (Cohesive Soils):**

1.  **Determine Capacity of First Bulb ($Q_{b1}$):**
    *   Calculate the area of the first bulb ($A_{b1} = \pi/4 \times D_{b1}^2$).
    *   Use $Q_{b1} = \alpha_1 \times A_{b1} \times c_{u1}$, where $c_{u1}$ is the cohesion at the first bulb level.

2.  **Determine Capacity of Second Bulb ($Q_{b2}$):**
    *   Calculate the area of the second bulb ($A_{b2} = \pi/4 \times D_{b2}^2$).
    *   Use $Q_{b2} = \alpha_2 \times A_{b2} \times c_{u2}$, where $c_{u2}$ is the cohesion at the second bulb level.

3.  **Determine Shaft Capacity ($Q_s$):**
    *   Divide the pile shaft into segments:
        *   Segment above the first bulb.
        *   Segment between the first and second bulb.
        *   Segment below the second bulb.
        *   Consider the surface area of the bulbs as well. The IS code might treat the bulb surface as contributing to skin friction.
    *   For each segment $i$:
        *   Calculate the perimeter ($P_i$) and length ($L_i$).
        *   Determine the average cohesion ($c_{ui}$) in that segment.
        *   Use an appropriate adhesion factor ($\alpha_i$).
        *   Calculate the shaft resistance for the segment: $Q_{s,i} = \alpha_i \times P_i \times L_i \times c_{ui}$.
    *   Sum the shaft resistances of all segments.

4.  **Total Ultimate Capacity ($Q_u$):**
    *   $Q_u = Q_{b1} + Q_{b2} + Q_s$.

5.  **Safe Load Capacity ($Q_{safe}$):**
    *   $Q_{safe} = Q_u / FS$.

**Important Considerations for Double Bulbs:**

*   **Spacing of Bulbs:** The distance between the bulbs is crucial. If bulbs are too close, their bulb capacities may overlap or interfere, reducing their individual effectiveness. The IS code often provides guidelines on minimum spacing.
*   **Order of Calculation:** The order of adding bulb capacities should consider the depth. Usually, the deeper bulb is considered first or they are treated independently and summed.

## Numerical Problems

Let's work through some examples to illustrate the application of the IS formula. We will assume cohesive soils (clays) for simplicity, as this is where under-reamed piles are most commonly used and the IS formula is most directly applied.

**Assumptions for Numerical Problems (unless stated otherwise):**

*   Soil is cohesive (clay).
*   Adhesion factor ($\alpha$) is given or can be assumed based on typical IS code values.
*   Factor of Safety ($FS$) is given or can be assumed.
*   Bulbs are circular.

---

### **Numerical Problem 1: Single Bulb Under-reamed Pile**

**Problem Statement:**
A single-bulb under-reamed pile has a shaft diameter of 300 mm and a bulb diameter of 750 mm. The bulb is located at a depth of 8 m from the ground level. The pile is 10 m long. The soil properties are as follows:
*   Clay layer from 0 to 10 m depth.
*   Average undrained cohesion ($c_u$) in the clay layer = 40 kN/m².
*   Adhesion factor ($\alpha$) for the shaft = 0.6.
*   Adhesion factor ($\alpha$) for the bulb = 0.8.
*   Factor of Safety ($FS$) = 2.5.

Calculate the safe load capacity of the pile.

**Solution:**

**Given Data:**
*   Shaft diameter, $D_s$ = 300 mm = 0.3 m
*   Shaft radius, $r_s$ = 0.15 m
*   Bulb diameter, $D_b$ = 750 mm = 0.75 m
*   Bulb radius, $r_b$ = 0.375 m
*   Bulb depth = 8 m
*   Pile length, $L$ = 10 m
*   Undrained cohesion, $c_u$ = 40 kN/m²
*   $\alpha_{shaft}$ = 0.6
*   $\alpha_{bulb}$ = 0.8
*   $FS$ = 2.5

**Calculations:**

1.  **Bulb Capacity ($Q_b$):**
    *   Area of the bulb, $A_b = \frac{\pi}{4} D_b^2 = \frac{\pi}{4} (0.75)^2 = 0.4418 \text{ m}^2$
    *   $Q_b = \alpha_{bulb} \times A_b \times c_u$
    *   $Q_b = 0.8 \times 0.4418 \times 40 = 141.38 \text{ kN}$

2.  **Shaft Capacity ($Q_s$):**
    *   The shaft can be considered as two segments for calculating skin friction:
        *   Segment 1: From ground level (0m) to the top of the bulb (8m). Length $L_1 = 8$ m.
        *   Segment 2: From the bottom of the bulb (assuming bulb thickness is negligible for shaft friction calculation in this simplified approach) to the pile toe (10m). Length $L_2 = 2$ m.
    *   Perimeter of the shaft, $P_s = \pi D_s = \pi \times 0.3 = 0.9425 \text{ m}$

    *   **Shaft Resistance of Segment 1 (0-8m):**
        *   $Q_{s1} = \alpha_{shaft} \times P_s \times L_1 \times c_u$
        *   $Q_{s1} = 0.6 \times 0.9425 \times 8 \times 40 = 181.00 \text{ kN}$

    *   **Shaft Resistance of Segment 2 (8-10m):**
        *   $Q_{s2} = \alpha_{shaft} \times P_s \times L_2 \times c_u$
        *   $Q_{s2} = 0.6 \times 0.9425 \times 2 \times 40 = 45.24 \text{ kN}$

    *   **Frictional Resistance on the Bulb Surface:**
        *   Perimeter of the bulb, $P_b = \pi D_b = \pi \times 0.75 = 2.3562 \text{ m}$
        *   According to IS code practices, the surface of the bulb also contributes to skin friction. We use the adhesion factor for the bulb for this calculation. Let's assume the soil immediately surrounding the bulb has the same cohesion.
        *   $Q_{s,bulb} = \alpha_{bulb} \times P_b \times (\text{effective bulb height}) \times c_u$
        *   In many simplified IS calculations, the "effective bulb height" for skin friction calculation is often taken as the diameter of the bulb itself, or some portion of it, to account for the enhanced friction. For this example, let's assume the bulb contributes friction over its diameter length to represent this effect. *Note: The specific interpretation of "effective bulb height" for skin friction can vary. Always check IS code provisions or design guidelines.*
        *   Let's assume for this problem, the skin friction from the bulb is considered over its diameter (effectively treating it as a cylindrical section of length $D_b$ for friction). This is a simplification to illustrate the concept. A more rigorous approach might consider the actual bulb surface area.
        *   However, a common IS interpretation is to consider the bulb as a bearing element and then the shaft friction. If the bulb is at 8m depth and the pile continues to 10m, the shaft above the bulb (0-8m) is 8m, and the shaft below the bulb (8-10m) is 2m. The bulb itself is a geometric feature. The friction is usually calculated on the cylindrical surfaces.
        *   **Revisiting IS approach for bulb skin friction:** Often, the total bulb capacity is considered as bearing. For skin friction, it's the cylindrical shaft. If the problem intends for bulb surface to contribute friction, it would be explicitly stated or implied by the provided $\alpha_{bulb}$ being applied to the bulb's circumference over a certain length.

        *   **Let's assume the standard interpretation where skin friction is only on the cylindrical shaft.**
        *   Total Shaft Resistance, $Q_s = Q_{s1} + Q_{s2} = 181.00 + 45.24 = 226.24 \text{ kN}$

3.  **Total Ultimate Capacity ($Q_u$):**
    *   $Q_u = Q_b + Q_s$
    *   $Q_u = 141.38 + 226.24 = 367.62 \text{ kN}$

4.  **Safe Load Capacity ($Q_{safe}$):**
    *   $Q_{safe} = Q_u / FS$
    *   $Q_{safe} = 367.62 / 2.5 = 147.05 \text{ kN}$

**Answer:** The safe load capacity of the pile is approximately **147.05 kN**.

---

### **Numerical Problem 2: Double Bulb Under-reamed Pile**

**Problem Statement:**
A double-bulb under-reamed pile has a shaft diameter of 350 mm. The first bulb (top bulb) has a diameter of 700 mm and is located at a depth of 5 m. The second bulb (bottom bulb) has a diameter of 800 mm and is located at a depth of 10 m. The total pile length is 15 m. The soil is clay with the following properties:
*   Cohesion ($c_u$) from 0 to 5 m = 30 kN/m²
*   Cohesion ($c_u$) from 5 to 10 m = 45 kN/m²
*   Cohesion ($c_u$) from 10 to 15 m = 60 kN/m²
*   Adhesion factor ($\alpha$) for shaft in layer 1 (0-5m) = 0.5
*   Adhesion factor ($\alpha$) for shaft in layer 2 (5-10m) = 0.6
*   Adhesion factor ($\alpha$) for shaft in layer 3 (10-15m) = 0.7
*   Adhesion factor ($\alpha$) for bulbs = 0.8 (applied to bulb circumference over a length equal to bulb diameter for skin friction, as a simplified IS interpretation)
*   Factor of Safety ($FS$) = 3.0

Calculate the safe load capacity of the pile.

**Solution:**

**Given Data:**
*   Shaft diameter, $D_s$ = 350 mm = 0.35 m
*   Shaft radius, $r_s$ = 0.175 m
*   First bulb diameter, $D_{b1}$ = 700 mm = 0.70 m
*   First bulb radius, $r_{b1}$ = 0.35 m
*   First bulb depth = 5 m
*   Second bulb diameter, $D_{b2}$ = 800 mm = 0.80 m
*   Second bulb radius, $r_{b2}$ = 0.40 m
*   Second bulb depth = 10 m
*   Pile length, $L$ = 15 m
*   $c_{u1}$ (0-5m) = 30 kN/m²
*   $c_{u2}$ (5-10m) = 45 kN/m²
*   $c_{u3}$ (10-15m) = 60 kN/m²
*   $\alpha_{shaft1}$ = 0.5
*   $\alpha_{shaft2}$ = 0.6
*   $\alpha_{shaft3}$ = 0.7
*   $\alpha_{bulb}$ = 0.8
*   $FS$ = 3.0

**Calculations:**

**1. Capacity of First Bulb ($Q_{b1}$):**
*   Area of first bulb, $A_{b1} = \frac{\pi}{4} D_{b1}^2 = \frac{\pi}{4} (0.70)^2 = 0.3848 \text{ m}^2$
*   $Q_{b1} = \alpha_{bulb} \times A_{b1} \times c_{u1}$ (using cohesion at the level of the first bulb)
*   $Q_{b1} = 0.8 \times 0.3848 \times 30 = 9.24 \text{ kN}$

**2. Capacity of Second Bulb ($Q_{b2}$):**
*   Area of second bulb, $A_{b2} = \frac{\pi}{4} D_{b2}^2 = \frac{\pi}{4} (0.80)^2 = 0.5027 \text{ m}^2$
*   $Q_{b2} = \alpha_{bulb} \times A_{b2} \times c_{u2}$ (using cohesion at the level of the second bulb)
*   $Q_{b2} = 0.8 \times 0.5027 \times 45 = 18.10 \text{ kN}$

**3. Shaft Capacity ($Q_s$):**
*   Divide the pile shaft into segments:
    *   Segment 1: 0 to 5 m (above first bulb)
    *   Segment 2: 5 to 10 m (between first and second bulb)
    *   Segment 3: 10 to 15 m (below second bulb)

*   Perimeter of the shaft, $P_s = \pi D_s = \pi \times 0.35 = 1.0996 \text{ m}$

*   **Shaft Resistance of Segment 1 (0-5m):**
    *   $L_1 = 5$ m, $c_{u1}$ = 30 kN/m², $\alpha_{shaft1}$ = 0.5
    *   $Q_{s1} = \alpha_{shaft1} \times P_s \times L_1 \times c_{u1}$
    *   $Q_{s1} = 0.5 \times 1.0996 \times 5 \times 30 = 82.47 \text{ kN}$

*   **Shaft Resistance of Segment 2 (5-10m):**
    *   $L_2 = 5$ m, $c_{u2}$ = 45 kN/m², $\alpha_{shaft2}$ = 0.6
    *   $Q_{s2} = \alpha_{shaft2} \times P_s \times L_2 \times c_{u2}$
    *   $Q_{s2} = 0.6 \times 1.0996 \times 5 \times 45 = 148.45 \text{ kN}$

*   **Shaft Resistance of Segment 3 (10-15m):**
    *   $L_3 = 5$ m, $c_{u3}$ = 60 kN/m², $\alpha_{shaft3}$ = 0.7
    *   $Q_{s3} = \alpha_{shaft3} \times P_s \times L_3 \times c_{u3}$
    *   $Q_{s3} = 0.7 \times 1.0996 \times 5 \times 60 = 230.92 \text{ kN}$

*   **Frictional Resistance on Bulb Surfaces (Simplified IS interpretation):**
    *   Perimeter of first bulb, $P_{b1} = \pi D_{b1} = \pi \times 0.70 = 2.1991 \text{ m}$
    *   Assume contribution over bulb diameter for skin friction: $L_{bulb1} = D_{b1} = 0.70$ m.
    *   $Q_{s,bulb1} = \alpha_{bulb} \times P_{b1} \times L_{bulb1} \times c_{u1}$
    *   $Q_{s,bulb1} = 0.8 \times 2.1991 \times 0.70 \times 30 = 36.96 \text{ kN}$

    *   Perimeter of second bulb, $P_{b2} = \pi D_{b2} = \pi \times 0.80 = 2.5133 \text{ m}$
    *   Assume contribution over bulb diameter for skin friction: $L_{bulb2} = D_{b2} = 0.80$ m.
    *   $Q_{s,bulb2} = \alpha_{bulb} \times P_{b2} \times L_{bulb2} \times c_{u2}$
    *   $Q_{s,bulb2} = 0.8 \times 2.5133 \times 0.80 \times 45 = 72.38 \text{ kN}$

*   Total Shaft Resistance, $Q_s = Q_{s1} + Q_{s2} + Q_{s3} + Q_{s,bulb1} + Q_{s,bulb2}$
*   $Q_s = 82.47 + 148.45 + 230.92 + 36.96 + 72.38 = 571.18 \text{ kN}$

**4. Total Ultimate Capacity ($Q_u$):**
*   $Q_u = Q_{b1} + Q_{b2} + Q_s$
*   $Q_u = 9.24 + 18.10 + 571.18 = 598.52 \text{ kN}$

**5. Safe Load Capacity ($Q_{safe}$):**
*   $Q_{safe} = Q_u / FS$
*   $Q_{safe} = 598.52 / 3.0 = 199.51 \text{ kN}$

**Answer:** The safe load capacity of the double-bulb under-reamed pile is approximately **199.51 kN**.

---

## Practice Questions

**Question 1:**
A single-bulb under-reamed pile has a shaft diameter of 250 mm and a bulb diameter of 600 mm. The bulb is at a depth of 6 m. The pile length is 9 m. The soil is clay with a uniform undrained cohesion ($c_u$) of 35 kN/m² from the ground surface to the pile toe. Assume $\alpha_{shaft} = 0.5$, $\alpha_{bulb} = 0.7$, and $FS = 2.5$. Calculate the safe load capacity of the pile.

**Question 2:**
A double-bulb under-reamed pile has a shaft diameter of 400 mm. The first bulb (diameter 800 mm) is at 7 m depth, and the second bulb (diameter 900 mm) is at 13 m depth. The total pile length is 17 m. The soil is clay with $c_u$ = 40 kN/m² from 0-7m, $c_u$ = 55 kN/m² from 7-13m, and $c_u$ = 70 kN/m² from 13-17m. Assume $\alpha_{shaft}$ values are 0.5, 0.6, and 0.7 for the three layers respectively, and $\alpha_{bulb} = 0.8$ for both bulbs. Use $FS = 3.0$. Assume bulb surface friction contribution over bulb diameter. Calculate the safe load capacity of the pile.

**Question 3:**
What are the advantages of using under-reamed piles in expansive soils?

---

## Answers to Practice Questions

**Answer 1:**

**Given Data:**
*   $D_s$ = 250 mm = 0.25 m, $P_s = \pi \times 0.25 = 0.7854$ m
*   $D_b$ = 600 mm = 0.60 m, $A_b = \frac{\pi}{4} (0.6)^2 = 0.2827$ m²
*   Bulb depth = 6 m, Pile length $L$ = 9 m
*   $c_u$ = 35 kN/m²
*   $\alpha_{shaft}$ = 0.5, $\alpha_{bulb}$ = 0.7
*   $FS$ = 2.5

**Calculations:**
1.  **Bulb Capacity ($Q_b$):**
    *   $Q_b = \alpha_{bulb} \times A_b \times c_u = 0.7 \times 0.2827 \times 35 = 6.926 \text{ kN}$

2.  **Shaft Capacity ($Q_s$):**
    *   Segment 1 (0-6m): $L_1 = 6$ m
        *   $Q_{s1} = \alpha_{shaft} \times P_s \times L_1 \times c_u = 0.5 \times 0.7854 \times 6 \times 35 = 82.467 \text{ kN}$
    *   Segment 2 (6-9m): $L_2 = 3$ m
        *   $Q_{s2} = \alpha_{shaft} \times P_s \times L_2 \times c_u = 0.5 \times 0.7854 \times 3 \times 35 = 41.234 \text{ kN}$
    *   Total $Q_s = Q_{s1} + Q_{s2} = 82.467 + 41.234 = 123.701 \text{ kN}$

3.  **Total Ultimate Capacity ($Q_u$):**
    *   $Q_u = Q_b + Q_s = 6.926 + 123.701 = 130.627 \text{ kN}$

4.  **Safe Load Capacity ($Q_{safe}$):**
    *   $Q_{safe} = Q_u / FS = 130.627 / 2.5 = 52.25 \text{ kN}$

**Answer:** The safe load capacity is approximately **52.25 kN**.

---

**Answer 2:**

**Given Data:**
*   $D_s$ = 400 mm = 0.4 m, $P_s = \pi \times 0.4 = 1.2566$ m
*   $D_{b1}$ = 800 mm = 0.8 m, $A_{b1} = \frac{\pi}{4} (0.8)^2 = 0.5027$ m², $P_{b1} = \pi \times 0.8 = 2.5133$ m, $L_{bulb1} = 0.8$ m
*   $D_{b2}$ = 900 mm = 0.9 m, $A_{b2} = \frac{\pi}{4} (0.9)^2 = 0.6362$ m², $P_{b2} = \pi \times 0.9 = 2.8274$ m, $L_{bulb2} = 0.9$ m
*   Bulb 1 depth = 7 m, Bulb 2 depth = 13 m, Pile length $L$ = 17 m
*   $c_{u1}$ (0-7m) = 40 kN/m², $c_{u2}$ (7-13m) = 55 kN/m², $c_{u3}$ (13-17m) = 70 kN/m²
*   $\alpha_{shaft1}$ = 0.5, $\alpha_{shaft2}$ = 0.6, $\alpha_{shaft3}$ = 0.7
*   $\alpha_{bulb}$ = 0.8
*   $FS$ = 3.0

**Calculations:**
1.  **Bulb Capacities ($Q_{b1}, Q_{b2}$):**
    *   $Q_{b1} = \alpha_{bulb} \times A_{b1} \times c_{u1} = 0.8 \times 0.5027 \times 40 = 16.09 \text{ kN}$
    *   $Q_{b2} = \alpha_{bulb} \times A_{b2} \times c_{u2} = 0.8 \times 0.6362 \times 55 = 27.99 \text{ kN}$

2.  **Shaft Capacities ($Q_{s1}, Q_{s2}, Q_{s3}$):**
    *   Segment 1 (0-7m): $L_1 = 7$ m, $c_{u1}$ = 40, $\alpha_1$ = 0.5
        *   $Q_{s1} = 0.5 \times 1.2566 \times 7 \times 40 = 175.92 \text{ kN}$
    *   Segment 2 (7-13m): $L_2 = 6$ m, $c_{u2}$ = 55, $\alpha_2$ = 0.6
        *   $Q_{s2} = 0.6 \times 1.2566 \times 6 \times 55 = 248.71 \text{ kN}$
    *   Segment 3 (13-17m): $L_3 = 4$ m, $c_{u3}$ = 70, $\alpha_3$ = 0.7
        *   $Q_{s3} = 0.7 \times 1.2566 \times 4 \times 70 = 246.31 \text{ kN}$

3.  **Bulb Surface Friction ($Q_{s,bulb1}, Q_{s,bulb2}$):**
    *   $Q_{s,bulb1} = \alpha_{bulb} \times P_{b1} \times L_{bulb1} \times c_{u1} = 0.8 \times 2.5133 \times 0.8 \times 40 = 64.34 \text{ kN}$
    *   $Q_{s,bulb2} = \alpha_{bulb} \times P_{b2} \times L_{bulb2} \times c_{u2} = 0.8 \times 2.8274 \times 0.9 \times 55 = 111.40 \text{ kN}$

4.  **Total Shaft Resistance ($Q_s$):**
    *   $Q_s = Q_{s1} + Q_{s2} + Q_{s3} + Q_{s,bulb1} + Q_{s,bulb2}$
    *   $Q_s = 175.92 + 248.71 + 246.31 + 64.34 + 111.40 = 846.68 \text{ kN}$

5.  **Total Ultimate Capacity ($Q_u$):**
    *   $Q_u = Q_{b1} + Q_{b2} + Q_s = 16.09 + 27.99 + 846.68 = 890.76 \text{ kN}$

6.  **Safe Load Capacity ($Q_{safe}$):**
    *   $Q_{safe} = Q_u / FS = 890.76 / 3.0 = 296.92 \text{ kN}$

**Answer:** The safe load capacity is approximately **296.92 kN**.

---

**Answer 3:**
Advantages of using under-reamed piles in expansive soils:

*   **Resistance to Swelling Pressure:** The enlarged bulbs provide a significant bearing area at depths where the soil may be less susceptible to swelling or where the swelling pressure is lower. This helps anchor the pile and resist the upward forces caused by soil expansion.
*   **Increased Load-Carrying Capacity:** The bulbs significantly increase the base (bearing) area, thereby increasing the ultimate load-carrying capacity of the pile.
*   **Improved Stability:** The bulbs act as anchors, providing greater lateral stability and preventing buckling of the pile in soft or compressible soils.
*   **Keying Effect:** In soils with a tendency to shrink and swell, the bulbs provide a "keying" effect, holding the pile more effectively.
*   **Cost-Effectiveness:** For certain soil conditions, they can be more economical than other deep foundation types like driven piles or larger diameter bored piles.
*   **Reduced Vibration:** They are bored piles, so they generate minimal vibrations during installation, making them suitable for construction in built-up areas.

---

## Important Points to Remember

*   The IS formula for under-reamed piles is primarily used for **cohesive soils**. For cohesionless soils, the principles of bearing capacity and skin friction based on $\phi$ values would be applied, with the IS code providing specific guidance.
*   The **diameter of the bulb ($D_b$)** is a critical parameter and is typically 2 to 3 times the shaft diameter ($D_s$).
*   The **adhesion factor ($\alpha$)** is crucial and varies with soil type, cohesion, and pile installation method. The IS code provides typical values. The adhesion factor for bulbs is generally higher than for shafts.
*   For **double-bulb piles**, consider the spacing between bulbs to avoid interference. The IS code usually specifies minimum spacing requirements.
*   The **skin friction contribution from the bulb surface** is an important aspect. The method of accounting for this can vary; some simplified approaches might consider a length equal to the bulb's diameter for frictional calculations. Always refer to the specific provisions of the IS code.
*   Always apply a **factor of safety ($FS$)** to the ultimate load capacity to determine the safe load capacity. Typical values for $FS$ are 2.5 to 3.0.
*   The **cohesion at the level of the bulb** is used for calculating bulb capacity.
*   When the pile passes through different soil layers, the shaft resistance needs to be calculated **segment-wise**, using the appropriate cohesion and adhesion factor for each layer.
