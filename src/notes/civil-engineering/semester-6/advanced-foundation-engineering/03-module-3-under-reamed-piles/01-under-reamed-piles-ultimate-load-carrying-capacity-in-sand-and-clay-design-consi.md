---
title: "Under reamed piles-ultimate load carrying capacity in sand and clay-design
considerations as per IS."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 3: Under reamed piles"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba81120e"
status: "completed"
scrapedAt: "2026-05-20T18:52:02.953Z"
---
# Advanced Foundation Engineering - Module 3: Under-reamed Piles

## Topic: Under-reamed Piles - Ultimate Load Carrying Capacity in Sand and Clay & Design Considerations as per IS Codes

### 1. Introduction to Under-reamed Piles

*   **Definition:** Under-reamed piles are bored piles with one or more enlarged bulbs at different depths. These bulbs significantly increase the bearing area and hence the load-carrying capacity, especially in soils with low bearing capacity or where uplift forces are present.
*   **Purpose of Under-reaming:**
    *   To increase the bearing capacity by providing a larger base area.
    *   To resist uplift forces by anchoring the bulb in a stable stratum.
    *   To improve the overall stability of the foundation.
*   **Types of Under-reamed Piles based on bulbs:**
    *   **Single Under-reamed Pile:** One bulb at the base.
    *   **Multi Under-reamed Pile:** Two or more bulbs at different depths.
*   **Applications:**
    *   Heavy structures (bridges, multi-storey buildings).
    *   Foundations in expansive soils (prone to swelling and shrinkage).
    *   Areas with high water table.
    *   Uplift resisting foundations (e.g., transmission towers).

### 2. Ultimate Load Carrying Capacity of Under-reamed Piles

The ultimate load carrying capacity ($Q_u$) of an under-reamed pile is the sum of the base resistance (developed by the bulb) and the shaft resistance (developed along the shaft of the pile).

$Q_u = Q_p + Q_s$

Where:
*   $Q_p$ = Ultimate bearing capacity of the bulb.
*   $Q_s$ = Ultimate shaft resistance along the pile shaft.

#### 2.1 Ultimate Load Carrying Capacity in Clay

In clayey soils, the ultimate load carrying capacity is generally estimated using the **$\alpha$-method**, which considers the adhesion between the pile shaft/bulb and the surrounding clay.

##### 2.1.1 Ultimate Base Capacity ($Q_p$) in Clay

The ultimate bearing capacity of the bulb in clay is given by:

$Q_p = A_b \times c_u \times N_c$

Where:
*   $A_b$ = Area of the bulb.
*   $c_u$ = Undrained shear strength of the clay at the bulb level.
*   $N_c$ = Bearing capacity factor (typically taken as 9 for deep foundations).

**According to IS 2911 (Part 1/Sec 2) - 1994:**

*   For the bulb, $N_c = 9$.
*   $Q_p = 9 \times A_b \times c_u$

**Important Note:** The bulb's capacity is primarily governed by the shear strength of the soil below and around the bulb.

##### 2.1.2 Ultimate Shaft Resistance ($Q_s$) in Clay

The ultimate shaft resistance is the sum of adhesion along the pile shaft and the adhesion developed on the bulb's surface.

$Q_s = \sum_{i=1}^{n} (P_s \times L_i \times \alpha_i \times c_{ui})$

Where:
*   $P_s$ = Perimeter of the pile shaft.
*   $L_i$ = Length of segment $i$ of the pile shaft.
*   $\alpha_i$ = Adhesion factor for clay at segment $i$. This factor depends on the undrained shear strength of the clay.
*   $c_{ui}$ = Undrained shear strength of clay in segment $i$.

**IS 2911 (Part 1/Sec 2) - 1994 for $\alpha$-factors:**

| Undrained Shear Strength ($c_u$ in kPa) | $\alpha$ Value |
| :-------------------------------------- | :------------- |
| $c_u \le 25$                            | 1.00           |
| $25 < c_u \le 50$                       | 0.75           |
| $50 < c_u \le 100$                      | 0.50           |
| $c_u > 100$                             | 0.40           |

*   **Adhesion on Bulb:** The surface area of the bulb also contributes to the shaft resistance. This is typically calculated as $A_{bulb\_surface} \times \alpha_{bulb} \times c_{u\_bulb}$. However, IS codes often simplify this by considering the bulb as an extended base for bearing capacity and the shaft resistance along the straight portion.

**Simplified approach for $Q_s$ in IS codes:**

The shaft resistance is calculated along the cylindrical shaft of the pile and the enlarged surface area of the bulb. However, a more practical approach as per IS codes is to consider the shaft resistance along the cylindrical portion and the base resistance of the bulb. If the bulb is at the very bottom, the shaft resistance is calculated for the cylindrical shaft above the bulb. If there are multiple bulbs, shaft resistance is calculated between the bulbs and above the top bulb.

Let's consider a single under-reamed pile:
$Q_s = \sum_{i=1}^{n} (P_s \times L_{shaft\_i} \times \alpha_i \times c_{ui})$ where $L_{shaft\_i}$ is the length of the cylindrical shaft in segment $i$.

##### 2.1.3 Total Ultimate Load Capacity ($Q_u$) in Clay

$Q_u = (9 \times A_b \times c_u) + \sum_{i=1}^{n} (P_s \times L_{shaft\_i} \times \alpha_i \times c_{ui})$

**Example in Clay:**
A single under-reamed pile in clay has the following details:
*   Pile shaft diameter ($D_s$) = 0.5 m, Length of shaft ($L_{shaft}$) = 10 m.
*   Bulb diameter ($D_b$) = 1.0 m.
*   Average undrained shear strength of clay ($c_u$) = 40 kPa.
*   Assume $\alpha = 0.75$ for this $c_u$.

**Calculation:**
1.  **Area of Bulb ($A_b$):**
    $A_b = \frac{\pi}{4} \times D_b^2 = \frac{\pi}{4} \times (1.0)^2 = 0.785 \text{ m}^2$
2.  **Ultimate Base Capacity ($Q_p$):**
    $Q_p = 9 \times A_b \times c_u = 9 \times 0.785 \times 40 = 282.6 \text{ kN}$
3.  **Perimeter of Pile Shaft ($P_s$):**
    $P_s = \pi \times D_s = \pi \times 0.5 = 1.57 \text{ m}$
4.  **Ultimate Shaft Resistance ($Q_s$):**
    $Q_s = P_s \times L_{shaft} \times \alpha \times c_u = 1.57 \times 10 \times 0.75 \times 40 = 471 \text{ kN}$
5.  **Total Ultimate Load Capacity ($Q_u$):**
    $Q_u = Q_p + Q_s = 282.6 + 471 = 753.6 \text{ kN}$

#### 2.2 Ultimate Load Carrying Capacity in Sand

In sandy soils, the ultimate load carrying capacity is estimated using the **$N$ or $K_s$ method** and friction factors.

##### 2.2.1 Ultimate Base Capacity ($Q_p$) in Sand

$Q_p = A_b \times q_{pb}$

Where:
*   $A_b$ = Area of the bulb.
*   $q_{pb}$ = Ultimate bearing capacity of the bulb at the base.

**According to IS 2911 (Part 1/Sec 1) - 1994:**

$q_{pb} = \sigma'_v \times N_\gamma$

Where:
*   $\sigma'_v$ = Effective vertical stress at the base of the bulb.
*   $N_\gamma$ = Bearing capacity factor for cohesionless soils, which depends on the angle of internal friction ($\phi$).

**IS 2911 (Part 1/Sec 1) - 1994 provides values for $N_\gamma$ based on $\phi$:**

| $\phi$ (degrees) | $N_\gamma$ |
| :--------------- | :--------- |
| 25               | 10         |
| 30               | 30         |
| 35               | 60         |
| 40               | 150        |

**Alternatively, using Meyerhof's or Vesic's factors might be common, but IS codes primarily focus on $\sigma'_v \times N_\gamma$.**

**Important Note:** For under-reamed piles, the base resistance of the bulb is generally more significant than the shaft resistance in sandy soils, especially for larger bulbs.

##### 2.2.2 Ultimate Shaft Resistance ($Q_s$) in Sand

$Q_s = \sum_{i=1}^{n} (P_s \times L_i \times f_{si})$

Where:
*   $P_s$ = Perimeter of the pile shaft.
*   $L_i$ = Length of segment $i$ of the pile shaft.
*   $f_{si}$ = Unit skin friction in segment $i$.

**IS 2911 (Part 1/Sec 1) - 1994 for unit skin friction ($f_{si}$):**

$f_{si} = K_s \times \sigma'_{vi} \times \tan \delta$

Where:
*   $K_s$ = Coefficient of lateral earth pressure.
    *   For driven piles: $K_s = 1.0$
    *   For bored piles: $K_s = 0.8$ (for bored piles, the soil relaxation can increase lateral pressure, but IS codes often simplify).
*   $\sigma'_{vi}$ = Average effective vertical stress in segment $i$ of the pile shaft.
*   $\delta$ = Angle of friction between the pile material and the sand. Typically $\delta = 0.75 \phi$ to $\phi$, depending on the pile material and sand characteristics. IS codes suggest $\delta \approx \phi$ for concrete piles in sand.

**IS 2911 (Part 1/Sec 1) - 1994 provides tables for $f_{si}$ based on soil properties and $\phi$:**

| Sand Type                   | $\phi$ (degrees) | Unit Skin Friction ($f_{si}$ in kPa) |
| :-------------------------- | :--------------- | :----------------------------------- |
| Loose to Medium dense sand  | 28-32            | 15-30                                |
| Dense sand                  | 33-37            | 30-50                                |
| Very dense sand             | $>37$            | $>50$                                |

**Note:** The unit skin friction in sand is highly dependent on the relative density of the sand and the effective overburden pressure.

##### 2.2.3 Total Ultimate Load Capacity ($Q_u$) in Sand

$Q_u = (A_b \times \sigma'_{vb} \times N_\gamma) + \sum_{i=1}^{n} (P_s \times L_{shaft\_i} \times K_s \times \sigma'_{vi} \times \tan \delta)$

**Example in Sand:**
A single under-reamed pile in sand has the following details:
*   Pile shaft diameter ($D_s$) = 0.5 m, Length of shaft ($L_{shaft}$) = 10 m.
*   Bulb diameter ($D_b$) = 1.0 m.
*   Angle of internal friction of sand ($\phi$) = 35 degrees.
*   Unit weight of sand ($\gamma$) = 18 kN/m³.
*   Effective friction angle between pile and sand ($\delta$) = 30 degrees.
*   Assume $K_s = 0.8$ for bored piles.
*   Assume $N_\gamma = 60$ for $\phi = 35^\circ$.

**Calculation:**
1.  **Area of Bulb ($A_b$):**
    $A_b = \frac{\pi}{4} \times (1.0)^2 = 0.785 \text{ m}^2$
2.  **Effective Vertical Stress at Bulb Base ($\sigma'_{vb}$):**
    $\sigma'_{vb} = \gamma \times L_{shaft} = 18 \times 10 = 180 \text{ kPa}$ (Assuming water table is at ground level for simplicity, and the sand is saturated. If unsaturated, $\sigma'_{vb}$ would be $\gamma_{dry} \times L_{shaft}$).
3.  **Ultimate Base Capacity ($Q_p$):**
    $Q_p = A_b \times \sigma'_{vb} \times N_\gamma = 0.785 \times 180 \times 60 = 8478 \text{ kN}$
4.  **Perimeter of Pile Shaft ($P_s$):**
    $P_s = \pi \times 0.5 = 1.57 \text{ m}$
5.  **Effective Vertical Stress at Mid-height of shaft segment ($\sigma'_{vi}$):**
    $\sigma'_{vi} = \gamma \times (L_{shaft}/2) = 18 \times (10/2) = 90 \text{ kPa}$
6.  **Ultimate Shaft Resistance ($Q_s$):**
    $Q_s = P_s \times L_{shaft} \times K_s \times \sigma'_{vi} \times \tan \delta = 1.57 \times 10 \times 0.8 \times 90 \times \tan(30^\circ)$
    $Q_s = 1.57 \times 10 \times 0.8 \times 90 \times 0.577 \approx 651.8 \text{ kN}$
7.  **Total Ultimate Load Capacity ($Q_u$):**
    $Q_u = Q_p + Q_s = 8478 + 651.8 = 9129.8 \text{ kN}$

**Observation:** In this example, the base capacity of the bulb is significantly larger than the shaft resistance, which is typical for under-reamed piles in dense sand.

### 3. Design Considerations as per IS Codes

**IS 2911 (Part 1/Sec 1 & 2) - 1994** is the primary Indian Standard for reinforced concrete piles. For under-reamed piles, specific guidelines are provided.

#### 3.1 General Design Principles

*   **Load Factor:** For Limit State Design (LSD) as per IS 456, loads are factored up. For the ultimate load capacity calculation, we use characteristic loads and material strengths, then apply a factor of safety.
*   **Factor of Safety (FOS):** For serviceability and ultimate limit states, a suitable factor of safety is applied to the ultimate load capacity to arrive at the safe load capacity ($Q_{safe}$).
    *   $Q_{safe} = Q_u / FOS$
    *   **Typical FOS:** 2.0 to 3.0 for predominantly vertical loads. A higher FOS might be required for uplift or lateral loads.

#### 3.2 Determination of Pile Dimensions

*   **Diameter of Shaft ($D_s$):** Typically ranges from 300 mm to 1000 mm or more, depending on the load and soil conditions. Minimum diameter is usually specified by the code.
*   **Diameter of Bulb ($D_b$):** The bulb diameter is usually 2 to 3 times the shaft diameter, depending on the soil and the design requirements.
    *   $D_b = 2D_s$ to $3D_s$
*   **Spacing of Bulbs (for multi under-reamed piles):** The vertical distance between the centers of adjacent bulbs should generally be greater than the bulb diameter to avoid overlapping and ensure independent soil-structure interaction.
    *   Spacing $\ge D_{b,lower}$ (where $D_{b,lower}$ is the diameter of the lower bulb).
*   **Thickness of Bulb:** The thickness of the bulb is typically 1/3 to 1/2 of the bulb diameter, or it can be designed based on structural strength requirements.
*   **Embedment Depth:** The pile should be embedded to a suitable depth to develop adequate shaft resistance and base capacity. The bulb should be placed in a stratum with good bearing capacity.

#### 3.3 Design in Clayey Soils

*   **Shear Strength ($c_u$):** Obtained from laboratory tests (unconfined compression test, triaxial test) or in-situ tests (Vane shear test). Multiple values are averaged for different soil layers.
*   **$\alpha$-factor:** Determined based on the average $c_u$ of the soil layer.
*   **Bulb Location:** The bulb should be placed below the active failure zone of expansive clays. In normally consolidated clays, it's often placed in stiffer clay strata.
*   **Uplift Resistance:** In clays, the uplift capacity is primarily due to the weight of the pile and the adhesion along the shaft. The bulb's bearing against the soil will resist uplift.

#### 3.4 Design in Sandy Soils

*   **Angle of Internal Friction ($\phi$):** Obtained from laboratory tests (triaxial test, direct shear test) or in-situ tests (SPT, CPT).
*   **Effective Overburden Pressure:** Crucial for calculating shaft friction and base capacity. Water table depth plays a significant role.
*   **$K_s$ and $\tan \delta$:** Selection of these parameters is important. Values are generally provided by IS codes or can be estimated based on pile material and soil type.
*   **SPT N-value:** Can be used to estimate $\phi$ and also directly to estimate unit skin friction.
    *   $f_s \approx K N_{SPT}$ where $K$ is a constant.
*   **Bulb Location:** The bulb should be placed in dense sand strata to maximize base resistance.

#### 3.5 Structural Design of the Pile

*   **Reinforcement:** The pile shaft and bulb must be designed to withstand bending moments and shear forces.
    *   **Longitudinal Reinforcement:** Provides axial load carrying capacity and resists bending moments.
    *   **Transverse Reinforcement (Stirrups/Helical):** Provides confinement to concrete and resists shear forces, especially around the bulb junction.
*   **Concrete Grade:** Typically M20 or M25 and above.
*   **Cover:** Adequate concrete cover to reinforcement is essential for durability.
*   **Construction Method:** Under-reamed piles are typically constructed by boring. Care must be taken to maintain the borehole stability and prevent collapse, especially in loose sands or soft clays. Tremie method might be used for concreting to prevent segregation.

#### 3.6 Design for Uplift Loads

*   Under-reamed piles are very effective in resisting uplift forces due to the enlarged bulb acting as an anchor.
*   **Uplift Capacity ($Q_{uplift}$):**
    *   $Q_{uplift} = \text{Weight of pile} + \text{Adhesion along shaft} + \text{Bearing on bulb (upward resistance)}$
    *   The bearing resistance on the bulb for uplift is complex to estimate precisely. It is often taken as a fraction of the downward base capacity, or based on empirical relationships.
    *   IS codes provide specific guidance for uplift capacity calculation.

#### 3.7 Group Action of Under-reamed Piles

*   When piles are arranged in a group, their bearing capacities may interact.
*   **Group Efficiency:** The efficiency of an under-reamed pile group is often less than 1, meaning the group capacity is less than the sum of individual pile capacities.
*   **Spacing:** Adequate spacing between piles is crucial to minimize overlapping of stress zones.
    *   For under-reamed piles, the spacing is generally kept larger than for plain bored piles, typically $3D_s$ to $5D_s$ centre-to-centre, or more, depending on the bulb size and soil.

### 4. Practice Questions

**Question 1 (Clay):**
A single under-reamed pile in clay has a shaft diameter of 0.4 m and a length of 8 m. The bulb diameter is 0.8 m. The clay has an undrained shear strength ($c_u$) of 60 kPa. The adhesion factor ($\alpha$) for this $c_u$ is 0.5. Calculate the ultimate load carrying capacity of the pile.

**Question 2 (Sand):**
A single under-reamed pile in sand has a shaft diameter of 0.5 m and a length of 12 m. The bulb diameter is 1.0 m. The sand has an angle of internal friction ($\phi$) of 32 degrees. The average effective vertical stress at the bulb level is 200 kPa, and at the mid-height of the shaft, it is 100 kPa. Assume $N_\gamma = 30$ for $\phi = 32^\circ$, $K_s = 0.8$, and $\delta = 0.75 \phi$. Calculate the ultimate load carrying capacity of the pile.

**Question 3 (Design Aspect):**
Explain the role of the bulb in an under-reamed pile and discuss its advantages over a plain bored pile in expansive soils.

### 5. Answers to Practice Questions

**Answer 1 (Clay):**
1.  **Area of Bulb ($A_b$):**
    $A_b = \frac{\pi}{4} \times D_b^2 = \frac{\pi}{4} \times (0.8)^2 = 0.5024 \text{ m}^2$
2.  **Ultimate Base Capacity ($Q_p$):**
    $Q_p = 9 \times A_b \times c_u = 9 \times 0.5024 \times 60 = 271.3 \text{ kN}$
3.  **Perimeter of Pile Shaft ($P_s$):**
    $P_s = \pi \times D_s = \pi \times 0.4 = 1.257 \text{ m}$
4.  **Ultimate Shaft Resistance ($Q_s$):**
    $Q_s = P_s \times L_{shaft} \times \alpha \times c_u = 1.257 \times 8 \times 0.5 \times 60 = 301.7 \text{ kN}$
5.  **Total Ultimate Load Capacity ($Q_u$):**
    $Q_u = Q_p + Q_s = 271.3 + 301.7 = 573.0 \text{ kN}$

**Answer 2 (Sand):**
1.  **Area of Bulb ($A_b$):**
    $A_b = \frac{\pi}{4} \times (1.0)^2 = 0.785 \text{ m}^2$
2.  **Ultimate Base Capacity ($Q_p$):**
    $Q_p = A_b \times \sigma'_{vb} \times N_\gamma = 0.785 \times 200 \times 30 = 4710 \text{ kN}$
3.  **Perimeter of Pile Shaft ($P_s$):**
    $P_s = \pi \times 0.5 = 1.57 \text{ m}$
4.  **Unit Skin Friction ($f_s$):**
    $\delta = 0.75 \times 32^\circ = 24^\circ$
    $f_s = K_s \times \sigma'_{vi} \times \tan \delta = 0.8 \times 100 \times \tan(24^\circ) = 0.8 \times 100 \times 0.445 = 35.6 \text{ kPa}$
5.  **Ultimate Shaft Resistance ($Q_s$):**
    $Q_s = P_s \times L_{shaft} \times f_s = 1.57 \times 12 \times 35.6 = 672.7 \text{ kN}$
6.  **Total Ultimate Load Capacity ($Q_u$):**
    $Q_u = Q_p + Q_s = 4710 + 672.7 = 5382.7 \text{ kN}$

**Answer 3 (Design Aspect):**
*   **Role of the Bulb:** The bulb, or the enlarged base of the under-reamed pile, significantly increases the bearing area at the base of the pile. This enlarged area is the primary source of increased bearing capacity, especially in soils where skin friction is limited or where uplift forces need to be resisted.
*   **Advantages over a Plain Bored Pile in Expansive Soils:**
    *   **Resistance to Swelling Pressure:** Expansive soils exert significant upward pressure on the pile shaft during swelling. The bulb, being larger in diameter, provides a greater base area to resist this upward movement. The load from the structure is transferred to the soil mass below the active zone, where swelling effects are minimal.
    *   **Anchoring Effect:** The bulb acts as an anchor in the stable soil stratum below the active zone of swelling and shrinkage. This prevents the pile from being lifted or significantly distressed by the soil volume changes.
    *   **Increased Bearing Capacity:** Even in non-expansive soils, the bulb increases the overall load-carrying capacity, allowing for shallower founding depths or higher load transfer for a given pile size.
    *   **Uplift Resistance:** Under-reamed piles are excellent for resisting uplift forces in foundations (e.g., for transmission towers or buoyant structures) because the bulb firmly anchors the pile against upward pull.

### 6. Important Points to Remember

*   **Two Components of Capacity:** Always consider both base resistance (from the bulb) and shaft resistance (along the cylindrical shaft) for under-reamed piles.
*   **Soil Type is Crucial:** The method of calculating capacity and the governing parameters differ significantly for clay and sand.
*   **Undrained Shear Strength ($c_u$) in Clay:** Key parameter for $\alpha$-method. Proper $\alpha$-factor selection is vital.
*   **Effective Overburden Pressure in Sand:** Critical for calculating shaft friction and base capacity. Water table location is essential.
*   **Bulb Diameter-to-Shaft Diameter Ratio:** Typically 2 to 3 times.
*   **Bulb Spacing:** Minimum spacing to avoid interference.
*   **IS Codes are the Reference:** Always refer to IS 2911 for specific design parameters, factors, and safety requirements.
*   **Uplift Resistance:** Under-reamed piles are particularly effective for resisting uplift.
*   **Group Effects:** Consider group efficiency when designing multiple under-reamed piles.
*   **Construction Quality:** The effectiveness of under-reamed piles relies heavily on proper construction techniques to ensure the integrity of the bulb and shaft.
