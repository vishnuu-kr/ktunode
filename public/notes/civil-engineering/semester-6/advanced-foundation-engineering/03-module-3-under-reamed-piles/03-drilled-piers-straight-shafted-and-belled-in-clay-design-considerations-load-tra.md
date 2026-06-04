---
title: "Drilled piers (straight shafted and belled) in clay- Design
Considerations- Load Transfer Mechanism."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 3: Under reamed piles"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811210"
status: "completed"
scrapedAt: "2026-05-20T18:52:04.347Z"
---
# Advanced Foundation Engineering: Module 3 - Under-reamed Piles

## Topic: Drilled Piers (Straight Shafted and Belled) in Clay - Design Considerations & Load Transfer Mechanism

This module delves into the design and behavior of drilled piers (also known as caissons or bored piles) specifically when installed in cohesive soils (clays). We will explore both straight-shafted and belled (enlarged base) configurations and understand how they transfer loads to the surrounding soil.

---

### **1. Introduction to Drilled Piers in Clay**

*   **Definition:** Drilled piers are large-diameter, cast-in-place concrete piles that are excavated using drilling equipment. They are typically used for heavily loaded structures where conventional piles are not feasible.
*   **Advantages in Clay:**
    *   **High Load Carrying Capacity:** The large diameter and potential for base enlargement allow for significantly higher axial and lateral load capacities compared to driven piles.
    *   **Reduced Vibration:** Excavation process minimizes ground vibration, making them suitable for construction near existing structures.
    *   **Improved Stability:** The concrete shaft provides structural integrity, and the enlarged base (if present) mobilizes significant end bearing.
    *   **Versatility:** Can be constructed in various soil conditions, including soft to stiff clays, weathered rock, and even some difficult ground conditions with specialized techniques.
*   **Types of Drilled Piers in Clay:**
    *   **Straight-Shafted Piers:** The shaft diameter is uniform throughout its length.
    *   **Belled (Enlarged Base) Piers:** The base of the pier is enlarged to a wider diameter than the shaft. This significantly increases the end bearing capacity.
        *   **Bell Shape:** Typically conical or hemispherical.
        *   **Benefit:** Increases bearing area and provides a larger contact surface for end bearing resistance.

---

### **2. Design Considerations for Drilled Piers in Clay**

The design of drilled piers in clay involves considering both the axial and lateral load capacities, as well as stability and constructability.

#### **2.1. Axial Load Capacity**

The axial load capacity ($Q_u$) of a drilled pier is the sum of its end bearing capacity ($Q_p$) and its skin friction capacity ($Q_s$).

$Q_u = Q_p + Q_s - W$

Where:
*   $Q_u$: Ultimate axial load capacity
*   $Q_p$: Ultimate end bearing capacity
*   $Q_s$: Ultimate skin friction capacity
*   $W$: Weight of the pier (often neglected for conservatism or included if negative skin friction is a concern)

##### **2.1.1. End Bearing Capacity ($Q_p$)**

In clays, end bearing is primarily governed by shear strength.

*   **General Bearing Capacity Equation (Meyerhof, Vesic):** While general bearing capacity equations are more commonly used for sands, they can be adapted for clays.
    *   $Q_p = A_b \cdot q_c$
    *   Where $A_b$ is the base area of the pier.
    *   $q_c$ is the bearing capacity at the base.
*   **For Cohesive Soils (Clays):**
    *   $Q_p = c_u \cdot N_c \cdot A_b$
    *   Where:
        *   $c_u$: Undrained shear strength of the clay at the base level.
        *   $N_c$: Bearing capacity factor for clays (typically around 9 for deep foundations).
        *   $A_b$: Base area of the pier (including the bell if present).
    *   **Simplified Approach (IS Code):**
        *   $Q_p = \alpha \cdot c_u \cdot A_b$
        *   Where $\alpha$ is an adhesion factor that accounts for the difference between the shaft and base soil properties and the interface between concrete and clay. For bored piles in clay, $\alpha$ is typically in the range of 0.3 to 0.7.
*   **Effect of Bell:** The enlarged base significantly increases $A_b$, leading to a higher end bearing capacity. The bearing capacity factor for the bell is often considered the same as for the shaft at the base level.

##### **2.1.2. Skin Friction Capacity ($Q_s$)**

Skin friction is the resistance developed along the shaft of the pier.

*   **For Cohesive Soils (Clays):**
    *   **$\alpha$-Method (Adhesion Factor Method):** This is the most common method for calculating skin friction in clays.
        *   $Q_s = \sum_{i=1}^{n} c_{si} \cdot A_{si}$
        *   Where:
            *   $c_{si}$: Average adhesion (skin friction) along the $i$-th layer of the shaft.
            *   $A_{si}$: Surface area of the $i$-th layer of the shaft.
        *   **Adhesion Factor ($\alpha$):** This factor relates the adhesion to the undrained shear strength ($c_u$) of the clay.
            *   $c_{si} = \alpha \cdot c_{ui}$
            *   The value of $\alpha$ depends on the consistency of the clay and the method of pile installation.
            *   **General Trend:** $\alpha$ is higher for softer clays and decreases as the clay becomes stiffer.
                *   Soft Clay: $\alpha \approx 1.0$
                *   Medium Clay: $\alpha \approx 0.7$ to $0.9$
                *   Stiff Clay: $\alpha \approx 0.4$ to $0.6$
                *   Very Stiff Clay: $\alpha \approx 0.3$ to $0.5$
            *   **IS Code Recommendations:** Provide specific values of $\alpha$ based on $c_u$.
    *   **$\beta$-Method:** Less commonly used for bored piles in clay, more suited for driven piles or specific soil conditions.
*   **Negative Skin Friction (Downdrag):** If compressible soils (like soft clay or organic deposits) are present above the bearing stratum and settle more than the pier, they can exert a downward drag force on the pier. This needs to be accounted for by adding the downdrag to the pile's load. The adhesion in this zone is calculated using the $\alpha$-method.

#### **2.2. Lateral Load Capacity**

Drilled piers, especially belled piers, are generally stiffer and have higher lateral resistance than driven piles due to their larger diameter and potential for improved base support.

*   **Methods for Lateral Load Analysis:**
    *   **Broms' Method:** A simplified analytical method based on the ultimate lateral capacity of the pile. It considers the interaction between the pile and the soil and categorizes failure mechanisms (short/stiff vs. long/flexible piles).
    *   **$p-y$ Curve Analysis:** A more sophisticated numerical method that models the soil-pile interaction using non-linear springs ($p-y$ curves) along the pile length. This method is widely used for complex loading conditions and soil profiles.
    *   **Finite Element Analysis (FEA):** Provides a detailed and accurate analysis of soil-pile interaction, especially for complex geometries and loading.
*   **Factors Affecting Lateral Capacity:**
    *   **Soil Properties:** Undrained shear strength ($c_u$), stiffness ($E_s$), and the presence of groundwater.
    *   **Pile Geometry:** Diameter, length, and presence of a bell.
    *   **Pile Stiffness:** Material properties (Young's modulus of concrete, $E_c$) and moment of inertia ($I$).
    *   **Fixity at the Top:** How the pile head is connected to the superstructure.

#### **2.3. Design Considerations for Bells**

*   **Bell Angle:** The angle of the bell should not be too steep, as it can lead to instability during construction and reduce the effective bearing area. A typical angle is around 45 degrees.
*   **Bell Diameter Ratio:** The ratio of the bell diameter to the shaft diameter should be optimized. Typically, the ratio is between 2 and 3. Larger ratios can lead to construction difficulties.
*   **Minimum Shaft Length Below Bell:** A minimum shaft length below the bell is often recommended to ensure proper load transfer from the shaft to the bell.
*   **Constructability:** Large bells can be challenging to excavate and construct properly, requiring careful consideration of excavation methods and concrete placement.

#### **2.4. Construction Considerations**

*   **Borehole Stability:** In soft clays, the borehole may collapse before concrete is placed. Techniques like slurry displacement (using bentonite slurry) or casing are used to maintain borehole stability.
*   **Concrete Placement:** Concrete is typically placed using a tremie pipe to avoid segregation and contamination with soil or slurry.
*   **Reinforcement:** Steel reinforcement cages are lowered into the excavated borehole before concrete placement to provide structural integrity and resist bending moments and shear forces.
*   **Over-breakage:** Excessive soil removal during excavation can lead to a larger-than-intended diameter, reducing the effectiveness of skin friction and potentially requiring more concrete.
*   **Base Cleanliness:** The base of the pier and the bell must be thoroughly cleaned of loose soil, slurry, or debris before concrete is poured to ensure effective end bearing.

---

### **3. Load Transfer Mechanism in Drilled Piers (Clay)**

The load transfer mechanism describes how the applied load is distributed along the length of the pier and at its base.

#### **3.1. Straight-Shafted Piers**

*   **Axial Load:**
    *   **Compressive Load:** The applied compressive load is transferred to the soil through:
        *   **Skin Friction:** Resistance mobilized along the surface of the pile shaft due to adhesion between the concrete and the clay. This is a significant contributor in clays.
        *   **End Bearing:** Resistance at the base of the pile, primarily due to the shear strength of the clay.
    *   **Load Distribution:** The load is distributed along the shaft, with the maximum shear stress occurring at the pile head and decreasing towards the base. The end bearing capacity is mobilized only when the pile tip is embedded in a competent bearing layer.
*   **Lateral Load:**
    *   **Lateral Resistance:** The soil surrounding the pile shaft provides resistance to lateral movement through:
        *   **Soil Pressure:** The clay resists deformation by exerting pressure against the pile. This pressure is non-linear and depends on the shear strength and stiffness of the clay.
        *   **Bending of the Pile:** The pile itself will bend under lateral load, leading to compression on one side and tension on the other.
    *   **Load Distribution:** Lateral loads induce bending moments and shear forces along the pile. The resistance is highest near the ground surface and decreases with depth. The point of maximum bending moment depends on the pile's flexibility and the soil conditions.

#### **3.2. Belled Piers**

*   **Axial Load:**
    *   **Compressive Load:** The load is transferred through:
        *   **Skin Friction:** Similar to straight-shafted piers, skin friction along the shaft contributes to the load capacity.
        *   **End Bearing at the Bell:** The enlarged base significantly increases the contact area, mobilizing a much larger end bearing capacity compared to a straight-shafted pier. The $Q_p$ is now primarily governed by the shear strength of the clay directly beneath the bell.
    *   **Load Distribution:** The load is transferred from the shaft to the bell, and then to the soil at the base. The bell acts as a larger footing, allowing for greater mobilization of soil resistance. The load is more concentrated at the base compared to a straight shaft, leading to higher bearing pressures.
*   **Lateral Load:**
    *   **Enhanced Lateral Resistance:** The larger diameter of the bell provides increased lateral resistance, especially at the base.
    *   **Increased Stiffness:** The bell increases the overall stiffness of the pier, making it more resistant to lateral deflections.
    *   **Load Distribution:** Similar to straight-shafted piers, lateral loads induce bending and shear. However, the presence of the bell can alter the distribution of bending moments and shear forces, potentially reducing the maximum bending moment in the shaft.

---

### **4. Practice Questions and Exercises**

**Question 1:**
A straight-shafted drilled pier of 1.2 m diameter and 20 m length is to be installed in a clay deposit with a uniform undrained shear strength ($c_u$) of 50 kPa. The adhesion factor ($\alpha$) for this clay is 0.6. If the ultimate end bearing capacity is estimated as $Q_p = 9 \cdot c_u \cdot A_b$, where $A_b$ is the base area, calculate the ultimate axial load capacity of the pier. Assume the weight of the pier is negligible.

**Solution 1:**
*   **Pier Diameter ($D$):** 1.2 m
*   **Pier Length ($L$):** 20 m
*   **Undrained Shear Strength ($c_u$):** 50 kPa
*   **Adhesion Factor ($\alpha$):** 0.6

1.  **Calculate Base Area ($A_b$):**
    $A_b = \frac{\pi D^2}{4} = \frac{\pi (1.2 \text{ m})^2}{4} = \frac{\pi \cdot 1.44 \text{ m}^2}{4} \approx 1.131 \text{ m}^2$

2.  **Calculate End Bearing Capacity ($Q_p$):**
    $Q_p = 9 \cdot c_u \cdot A_b = 9 \cdot (50 \text{ kPa}) \cdot (1.131 \text{ m}^2) = 450 \text{ kN/m}^2 \cdot 1.131 \text{ m}^2 \approx 508.95 \text{ kN}$

3.  **Calculate Skin Friction Capacity ($Q_s$):**
    *   **Surface Area of Shaft ($A_s$):** $A_s = \pi D L = \pi \cdot (1.2 \text{ m}) \cdot (20 \text{ m}) = 24\pi \text{ m}^2 \approx 75.4 \text{ m}^2$
    *   **Adhesion ($c_s$):** $c_s = \alpha \cdot c_u = 0.6 \cdot 50 \text{ kPa} = 30 \text{ kPa}$
    *   **Skin Friction Capacity ($Q_s$):** $Q_s = c_s \cdot A_s = (30 \text{ kPa}) \cdot (75.4 \text{ m}^2) = 2262 \text{ kN}$

4.  **Calculate Ultimate Axial Load Capacity ($Q_u$):**
    $Q_u = Q_p + Q_s = 508.95 \text{ kN} + 2262 \text{ kN} = 2770.95 \text{ kN}$

    **Answer:** The ultimate axial load capacity of the pier is approximately 2771 kN.

**Question 2:**
How does the presence of a bell at the base of a drilled pier affect its load-carrying capacity and load transfer mechanism in clay compared to a straight-shafted pier?

**Solution 2:**
The presence of a bell at the base of a drilled pier significantly enhances its load-carrying capacity and modifies the load transfer mechanism in clay:

*   **Increased End Bearing:** The enlarged base (bell) dramatically increases the base area ($A_b$). Since end bearing is directly proportional to the base area, this leads to a substantial increase in the end bearing capacity ($Q_p$). This is particularly beneficial in clays where end bearing is a critical component of the total capacity.
*   **Modified Load Distribution:** While skin friction along the shaft remains important, the load is increasingly transferred to the soil at the bell's base. This shifts the load transfer mechanism towards a greater reliance on end bearing.
*   **Enhanced Lateral Resistance:** The larger diameter of the bell provides greater passive resistance to lateral loads, particularly at the base. This increases the overall lateral stiffness and capacity of the pier.
*   **Improved Stability:** The bell can also improve the stability of the pier against uplift or overturning forces.
*   **Potential Construction Challenges:** While beneficial for capacity, the construction of large bells requires careful consideration of borehole stability and ensuring a clean, well-formed bearing surface.

---

### **5. Important Points to Remember**

*   **Clay Properties are Crucial:** The undrained shear strength ($c_u$) is the primary parameter for design in clay.
*   **Adhesion Factor ($\alpha$):** The $\alpha$-method is the standard for skin friction in clays. Understand how $\alpha$ varies with clay consistency.
*   **Belled Piers:** Offer significantly higher end bearing capacity due to the increased base area.
*   **Load Transfer:** In clays, skin friction is a major contributor to the axial load capacity of drilled piers.
*   **Construction Quality:** Proper construction is paramount to achieve the designed capacity, especially for belled piers (e.g., clean base, stable borehole).
*   **Negative Skin Friction:** Always consider the possibility of downdrag in compressible clay layers.
*   **Lateral Load Analysis:** Use appropriate methods ($p-y$ curves or Broms' method) for lateral load design, considering the influence of the bell on stiffness and resistance.

---
