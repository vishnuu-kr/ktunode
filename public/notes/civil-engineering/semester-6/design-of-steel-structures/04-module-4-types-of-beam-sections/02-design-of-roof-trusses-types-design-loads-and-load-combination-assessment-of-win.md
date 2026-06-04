---
title: "Design of roof trusses-types-Design loads and load combination- Assessment of wind loads- Design of I section purlin"
subject: "DESIGN OF STEEL STRUCTURES"
module: "Module 4: Types of beam sections"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110bd"
status: "completed"
scrapedAt: "2026-05-20T18:52:49.743Z"
---
# DESIGN OF STEEL STRUCTURES - Module 4: Types of Beam Sections

## Topic: Design of Roof Trusses - Types, Design Loads and Load Combinations - Assessment of Wind Loads - Design of I-Section Purlin

---

### 1. Design of Roof Trusses

#### 1.1. What is a Roof Truss?

*   A roof truss is a structural framework of triangular units designed to span large distances and support roof loads.
*   Triangular shapes are inherently stable and distribute forces efficiently, making trusses ideal for roofing applications.
*   They are typically fabricated from steel members (angles, channels, tubes, I-sections) connected at joints (nodes).

#### 1.2. Types of Roof Trusses

*   **Based on Shape:**
    *   **King Post Truss:** Simple truss with a central vertical post (king post) and diagonal members. Suitable for shorter spans.
    *   **Queen Post Truss:** Similar to king post but with two vertical posts (queen posts). Used for longer spans than king post trusses.
    *   **Pratt Truss:** Diagonal members slope towards the center from the top chord. Vertical members are in tension. Efficient for medium to long spans.
    *   **Howe Truss:** Diagonal members slope away from the center. Vertical members are in compression. Suitable for longer spans and heavy loads.
    *   **Fink Truss (or French Truss):** Very common for residential roofs. Consists of a main tie, rafters, and internal struts.
    *   **Scissors Truss:** Mimics a vaulted ceiling appearance by having inclined lower chords that cross each other.
    *   **North Light Truss:** Designed to provide natural light through a glazed upper portion.
    *   **Attic Truss:** Designed to create usable living space in the attic.

*   **Based on Function/Application:**
    *   **Industrial Roof Trusses:** For factories, warehouses, large workshops.
    *   **Residential Roof Trusses:** For houses and smaller buildings.
    *   **Commercial Roof Trusses:** For offices, retail spaces, auditoriums.

*   **Key Components of a Truss:**
    *   **Top Chord:** The upper inclined or horizontal member.
    *   **Bottom Chord:** The lower inclined or horizontal member.
    *   **Web Members:** Diagonal and vertical members connecting the top and bottom chords.
    *   **Apex/Peak:** The highest point of the truss.
    *   **Ridge:** The horizontal line at the apex of the roof.
    *   **Rafters:** Inclined members supporting the roof deck.
    *   **Purlins:** Horizontal members that support the roof sheeting and transfer the roof load to the trusses. (More on purlins later)
    *   **Struts:** Compression members.
    *   **Tie:** Tension members.

#### 1.3. Advantages of Roof Trusses

*   Span large distances without intermediate supports.
*   Efficient use of material due to the stable triangular configuration.
*   Can be fabricated off-site and erected quickly.
*   Allows for flexibility in architectural design (e.g., creating open spaces).
*   Can be designed for various load conditions.

#### 1.4. Disadvantages of Roof Trusses

*   Can be complex to design and fabricate.
*   Requires skilled labor for erection.
*   May require bracing to prevent buckling of individual members.
*   Can be aesthetically challenging if not integrated well into the design.

---

### 2. Design Loads and Load Combinations

#### 2.1. Types of Loads on Roof Trusses

Loads acting on roof structures are categorized as follows:

*   **Dead Loads (DL):**
    *   Weight of the roofing material (sheeting, tiles, insulation).
    *   Weight of purlins, rafters, and other structural members.
    *   Weight of suspended ceilings, light fixtures, HVAC equipment, etc.
    *   **Characteristic:** Permanent and constant throughout the life of the structure.

*   **Live Loads (LL):**
    *   **Imposed Loads:** Loads due to occupancy and use, like maintenance personnel, storage, or temporary activities on the roof.
    *   **Construction Loads:** Loads during the construction phase.
    *   **Snow Loads (SL):** Weight of accumulated snow on the roof, depending on geographic location and roof shape.
    *   **Characteristic:** Variable, temporary, and often related to weather or human activity.

*   **Wind Loads (WL):**
    *   Forces exerted by wind on the structure. Can cause both pressure (pushing inwards) and suction (pulling outwards).
    *   **Characteristic:** Dynamic and highly variable depending on wind speed, direction, building shape, and surrounding terrain.

*   **Earthquake Loads (EQ):**
    *   Forces due to seismic activity.
    *   **Characteristic:** Dynamic and depends on seismic zone, soil conditions, and building mass. (Often less critical for simple roof trusses compared to other loads).

*   **Other Loads:**
    *   Rain Loads (RL): Due to accumulation of rainwater.
    *   Crane Loads (CL): In industrial buildings.

#### 2.2. Load Combinations

To ensure safety, structures must be designed to withstand various combinations of these loads acting simultaneously. Design codes (e.g., IS 800:2007, ASCE 7) provide specific load combinations and partial safety factors for each load type. The general principle is to consider the most critical scenarios.

*   **Common Load Combinations (Example based on IS 800:2007 principles, actual factors may vary with specific codes):**
    *   $1.5 \times (DL + LL)$
    *   $1.5 \times (DL + SL)$
    *   $1.5 \times (DL + WL)$
    *   $1.2 \times (DL + LL + WL)$
    *   $1.2 \times (DL + LL + SL)$
    *   $1.2 \times (DL + SL + WL)$
    *   $1.0 \times (DL + LL + SL + WL)$ (often for serviceability checks, not ultimate strength)
    *   $1.5 \times (DL + WL)$ (Wind acting in one direction)
    *   $1.5 \times (DL - WL)$ (Wind acting in opposite direction)

*   **Partial Safety Factors:**
    *   These factors (e.g., 1.5, 1.2) are applied to the characteristic loads to account for uncertainties in load estimation, material properties, and construction.
    *   They ensure that the factored load does not exceed the factored resistance of the structural member.

#### 2.3. Determining Loads on a Truss

1.  **Roof Sheeting Load:** Calculate the area of the roof and multiply by the weight per unit area of the sheeting, insulation, etc.
2.  **Purlin Load:**
    *   The weight of the purlins themselves is a dead load.
    *   The roof sheeting load and any superimposed loads (snow, maintenance LL) are transferred from the sheeting to the purlins.
    *   Purlins are typically spaced at intervals along the top chord of the truss.
    *   The load on a purlin is the area of the roof supported by that purlin (spacing of purlins x spacing of trusses) multiplied by the load per unit area.
    *   This load is then transferred to the truss at the purlin connection points (nodes).
3.  **Truss Member Self-Weight:** Estimate the weight of the truss members and distribute it to the joints. This is often iterated after an initial design.
4.  **Wind Load:** Calculate wind pressure/suction on the roof surface and side walls. This is more complex and detailed in the next section.

---

### 3. Assessment of Wind Loads

#### 3.1. Factors Affecting Wind Load

*   **Basic Wind Speed ($V_b$):** The fundamental wind speed at mean height for a given location. It's typically a 3-second gust speed averaged over a return period (e.g., 50 years).
*   **Risk Coefficient ($k_1$):** Accounts for the chosen design life and the acceptable risk.
*   **Mean Recurrence Interval (MRI):** The average period of time within which a particular wind speed is expected to be equaled or exceeded once.
*   **Terrain Roughness/Topography:** The nature of the ground surface (e.g., open terrain, suburban, urban, hilly). This affects wind speed at different heights.
*   **Height Above Ground:** Wind speed increases with height.
*   **Topography:** Hills and escarpments can amplify wind speeds.
*   **Cyclonic Regions:** Wind loads are significantly higher in regions prone to cyclones.

#### 3.2. Calculation of Wind Pressure (IS 875 Part 3)

The design wind pressure ($p_z$) at any height z is calculated as:

$p_z = 0.6 \times V_z^2$ (in N/m² or Pa)

Where:
*   $V_z$ is the design wind speed at height z in m/s.

The design wind speed ($V_z$) is calculated as:

$V_z = V_b \times k_1 \times k_2 \times k_3 \times k_4$

Where:
*   $V_b$: Basic wind speed (from meteorological data/codes).
*   $k_1$: Probability factor (risk coefficient).
*   $k_2$: Terrain roughness and height factor.
*   $k_3$: Topography factor.
*   $k_4$: Cyclonic region factor (if applicable).

#### 3.3. Wind Forces on the Structure

Once the design wind pressure ($p_z$) is determined, it's applied to the exposed surfaces of the structure. This involves:

*   **External Pressure Coefficient ($C_p$):** This factor accounts for the shape of the building/roof and the direction of wind. It's obtained from code-specified tables or wind tunnel tests.
    *   Positive $C_p$ indicates pressure (pushing inwards).
    *   Negative $C_p$ indicates suction (pulling outwards).
*   **Internal Pressure Coefficient ($C_{pi}$):** Accounts for internal pressure changes due to openings in the building.
*   **Design Wind Force ($F$):**
    *   For a surface: $F = p_z \times A \times C_p$ (or $C_{pi}$ for internal forces)
    *   Where A is the area of the surface.

#### 3.4. Wind Loads on Roofs (Specific to Sloping Roofs like Trusses)

For sloping roofs, wind can cause both:
*   **Pressure on the windward side:** Pushing the roof up or down depending on the angle.
*   **Suction on the leeward side and on the roof surface:** Pulling the roof up.
*   **Suction on eaves and ridges.**

The code provides coefficients for different parts of the roof (e.g., windward slope, leeward slope) and for different roof pitches and building types.

*   **Wind Loads on Purlins:**
    *   Purlins are attached to the top chord of the truss and support the roof sheeting.
    *   The wind load acting on the roof sheeting is transferred to the purlins as either an uplift (suction) or a downward force (pressure), depending on the wind direction and roof angle.
    *   These forces on the purlins are then transferred as loads at the nodes where the purlins connect to the truss.

*   **Effective Wind Area:** The area of the roof sheeting exposed to wind is considered. For purlins, this is usually the spacing of purlins multiplied by the spacing of trusses.

*   **Example Calculation Snippet for Purlins:**
    *   Assume a roof slope of 20 degrees.
    *   From IS 875 Part 3, for a roof slope between 10-30 degrees, the pressure coefficient for the windward slope might be $C_p = +0.7$ (pressure) or $-0.5$ (suction), and for the leeward slope $C_p = -0.7$ (suction).
    *   The calculated wind pressure $p_z$ is applied.
    *   The force on the purlin would be approximately $p_z \times (\text{Purlin spacing}) \times (\text{Truss spacing}) \times C_p$.
    *   These forces are then resolved into components along the direction of the truss members.

**Important Point:** Wind loads can often be the critical design load for roofs, especially in terms of uplift, which tends to lift the roof off the supporting structure.

---

### 4. Design of I-Section Purlin

#### 4.1. What is a Purlin?

*   Purlins are horizontal members that span between the main structural members (e.g., rafters or top chords of trusses) of a roof.
*   Their primary function is to support the roof covering (sheeting, tiles) and transfer the loads from the roof to the main structure.

#### 4.2. Types of Purlins

*   **Steel Purlins:**
    *   **I-Sections (Rolled or Fabricated):** Commonly used for their strength and efficiency.
    *   **Z-Sections:** Efficiently resist bending and torsional stresses, often used in continuous runs.
    *   **C-Sections (Channel Sections):** Similar to Z-sections in efficiency.
    *   **Angles:** Used for lighter loads and shorter spans.
*   **Timber Purlins:** Used in traditional or less demanding applications.

#### 4.3. Design Steps for I-Section Purlins

The design process for an I-section purlin involves the following steps:

1.  **Determine Loads on Purlin:**
    *   **Dead Load:** Self-weight of purlin, weight of roof sheeting, insulation, ceiling (if any).
    *   **Live Load:** Snow load, maintenance loads.
    *   **Wind Load:** Uplift or downward pressure from wind, acting perpendicular to the roof surface.
    *   These loads are calculated per unit area of the roof and then converted to a uniformly distributed load (UDL) on the purlin, considering the spacing of purlins and trusses.

2.  **Determine Load Combinations and Factored Loads:**
    *   Apply partial safety factors to the characteristic loads as per the relevant design code (e.g., IS 800:2007).
    *   Consider critical load combinations, especially those involving wind uplift.

3.  **Resolve Loads into Components:**
    *   The loads acting on the purlin are typically inclined due to the roof slope.
    *   These loads need to be resolved into two components:
        *   **Perpendicular to the purlin's strong axis (usually horizontal):** Causes bending about the strong axis.
        *   **Parallel to the purlin's web (usually vertical):** Causes bending about the weak axis and potentially shear.

    *   **Example:** A downward load 'W' acting at an angle $\theta$ to the horizontal.
        *   Component perpendicular to purlin: $W \cos \theta$ (bending about strong axis)
        *   Component parallel to purlin: $W \sin \theta$ (bending about weak axis)

4.  **Calculate Design Moments:**
    *   For a simply supported purlin with UDL, the maximum bending moment about the strong axis ($M_{sx}$) is $w_x L^2 / 8$, where $w_x$ is the UDL perpendicular to the strong axis and L is the span of the purlin.
    *   Similarly, calculate the maximum bending moment about the weak axis ($M_{wx}$) from the load component parallel to the web.

5.  **Select a Trial I-Section:**
    *   Based on the calculated bending moments ($M_{sx}$ and $M_{wx}$), select a trial I-section from the steel section tables.
    *   A preliminary check can be done by estimating the required section modulus ($Z_x$ and $Z_w$) and comparing it with available sections.

6.  **Check Bending Stresses:**
    *   **About Strong Axis (Major Axis):**
        *   Bending stress: $\sigma_{bx} = M_{sx} / Z_{px}$ (for plastic modulus $Z_{px}$ for yielding) or $M_{sx} / Z_{ex}$ (for elastic modulus $Z_{ex}$ for elastic design).
        *   Check against the design bending strength of the section. Consider factors like lateral torsional buckling (LTB) for elements not adequately braced.
    *   **About Weak Axis (Minor Axis):**
        *   Bending stress: $\sigma_{bw} = M_{wx} / Z_{pw}$ or $M_{wx} / Z_{ew}$.
        *   Purlins are often restrained against buckling about their weak axis by the roof sheeting. If the sheeting provides adequate restraint (e.g., by screwing to the purlin), the full capacity of the weak axis bending can be considered. If not, buckling calculations are needed.

7.  **Check Shear Stress:**
    *   Calculate the maximum shear force ($V$) on the purlin.
    *   Calculate the shear stress ($\tau$) in the web of the I-section.
    *   Check against the design shear strength of the web.

8.  **Check Deflection:**
    *   Calculate the maximum deflection of the purlin under the service loads (unfactored loads).
    *   Compare the calculated deflection with the permissible deflection limits specified by the codes (e.g., L/150, L/200 depending on the roof sheeting and load type).

9.  **Check Bearing at Supports:**
    *   Ensure that the support reaction does not cause crushing of the purlin's web or flange at the connection to the main structure.

10. **Check for Local Buckling:**
    *   Check the compression flange and web of the I-section for local buckling, especially if the section is slender.

11. **Check Connections:**
    *   Design the connections (welds or bolts) that attach the purlin to the truss.

#### 4.4. Special Considerations for Purlin Design

*   **Continuous Purlins:** Purlins are often used in continuous lengths over several trusses to reduce the number of connections and improve efficiency. This changes the bending moment diagrams and requires considering continuity effects.
*   **Sag Rods:** In cases of significant wind uplift, sag rods are often used to provide support to the purlins against buckling about their weak axis and to transfer uplift forces to internal bracing members.
*   **Roof Sheeting as Bracing:** The roof sheeting, when properly fastened to the purlins, can act as a diaphragm and provide lateral restraint to the purlins, preventing lateral torsional buckling of the flanges. This is crucial for efficient design.

#### 4.5. Example Calculation Snippet for Purlin Design

*   **Problem:** Design a purlin for a roof with a slope of 20 degrees. Purlins are spaced at 1.5 m c/c, and trusses are spaced at 4 m c/c.
    *   Roof sheeting weight: $0.2 kN/m^2$ (DL)
    *   Maintenance load: $0.5 kN/m^2$ (LL)
    *   Wind uplift (critical): $1.0 kN/m^2$ (WL)
    *   Span of purlin (distance between trusses): $L = 4 m$.

*   **Step 1: Calculate Load per Purlin Area:**
    *   Area supported by purlin = Purlin spacing $\times$ Truss spacing = $1.5 \, m \times 4 \, m = 6 \, m^2$.

*   **Step 2: Calculate Loads per Purlin (acting along the roof slope):**
    *   DL = $0.2 \, kN/m^2 \times 6 \, m^2 = 1.2 \, kN/m$ (acting downwards along the slope)
    *   LL = $0.5 \, kN/m^2 \times 6 \, m^2 = 3.0 \, kN/m$ (acting downwards along the slope)
    *   WL = $1.0 \, kN/m^2 \times 6 \, m^2 = 6.0 \, kN/m$ (acting upwards along the slope)

*   **Step 3: Factored Loads (assuming IS 800 factors):**
    *   **Case 1: Max downward load:** $1.5 \times (DL + LL) = 1.5 \times (1.2 + 3.0) = 1.5 \times 4.2 = 6.3 \, kN/m$ (downwards)
    *   **Case 2: Max uplift load:** $1.5 \times (DL + WL) = 1.5 \times (1.2 + 6.0) = 1.5 \times 7.2 = 10.8 \, kN/m$ (upwards)

*   **Step 4: Resolve Loads perpendicular and parallel to the purlin axis:**
    *   Let's consider the uplift case (most critical). Roof slope $\alpha = 20^\circ$. Purlin is usually placed perpendicular to the slope.
    *   Load perpendicular to purlin (causing bending about strong axis): $10.8 \, kN/m$ (acting upwards).
    *   Load parallel to purlin (causing bending about weak axis): $0 \, kN/m$ (for a typical purlin placement, wind directly perpendicular to the roof surface is considered). *Note: In some codes or complex wind analysis, there might be a component parallel to the purlin axis.*

    *   *Correction/Refinement*: The load is usually acting perpendicular to the roof plane. When we resolve it into components relative to the purlin's axes, we need to be careful. The purlin itself is usually oriented to resist the primary load efficiently. For a typical I-section purlin spanning between trusses, it's placed such that its web is vertical, and flanges are horizontal (or at a slight angle to the slope). The load is the resultant force from wind and gravity acting perpendicular to the roof surface.
    *   Let's re-evaluate the loads acting on the purlin. The purlin is likely placed with its strong axis nearly perpendicular to the roof slope.
    *   Downward load (gravity): $1.2 + 3.0 = 4.2 \, kN/m$. This acts vertically. When resolved along the purlin's axis, it will have components.
    *   Upward load (wind): $6.0 \, kN/m$. This acts upwards, perpendicular to the roof slope.

    *   **Common Practice:** Loads are often resolved into components acting perpendicular and parallel to the **plane of the roof**. Then, these components are considered with respect to the purlin's axes.
    *   Let's assume the purlin's strong axis is in the plane of the roof, resisting the primary load.
    *   If the purlin is placed "flat" with respect to the roof slope, the loads are resolved differently.
    *   **Standard placement:** Purlins are often placed with their web vertical, and they are attached to the top chord of the truss. The load from the sheeting is transferred to the purlin.
    *   Let's assume the load is acting perpendicular to the roof surface.
        *   Gravity load (vertical): $4.2 \, kN/m$ (factored $6.3 \, kN/m$)
        *   Wind load (upwards, perpendicular to roof): $6.0 \, kN/m$ (factored $10.8 \, kN/m$)

    *   Resultant load perpendicular to the roof surface:
        *   Factored downward (gravity dominant): $6.3 \, kN/m$
        *   Factored upward (wind dominant): $10.8 \, kN/m$

    *   These loads are then considered acting on the purlin. If the purlin is placed with its strong axis in the plane of the roof, resisting the total load:
        *   Total load along the roof slope (downward) = $4.2 \, kN/m$. Factored = $6.3 \, kN/m$.
        *   Total load along the roof slope (upward) = $6.0 \, kN/m$. Factored = $10.8 \, kN/m$.

    *   These loads are then resolved into components that bend the purlin about its strong axis (usually in the plane of the roof) and weak axis.
    *   Let's consider the most common scenario where the purlin is placed such that the load is primarily resisted by bending about the strong axis. The roof sheeting provides restraint against buckling about the weak axis.
    *   Load acting perpendicular to the purlin's strong axis (assuming the purlin is placed to maximize this):
        *   For downward load: $M_{sx} \approx w_{down} L^2 / 8$.
        *   For uplift load: $M_{sx} \approx w_{up} L^2 / 8$.
    *   The wind uplift is often critical. Load $10.8 \, kN/m$ acting upwards.
    *   If the purlin is oriented such that this load is perpendicular to its strong axis:
        *   $M_{sx} = (10.8 \, kN/m) \times (4 \, m)^2 / 8 = 10.8 \times 16 / 8 = 21.6 \, kNm$.

    *   **Crucial Point for Purlins:** Purlins are often Z or C sections or specially formed I sections to achieve continuous support and efficient load transfer, especially with wind uplift. For simple I-sections, the sheeting provides restraint for weak axis bending. However, the primary load is usually considered acting in the plane of the roof.
    *   **Revised Approach for Load Resolution on Purlins:**
        *   Consider the loads acting perpendicular to the roof surface.
        *   These loads are transferred to the purlins.
        *   Purlins are typically placed with their strong axis oriented to resist the resultant load efficiently. For a sloping roof, the resultant load may have components that cause bending about both axes.
        *   If we consider the I-section placed with its web vertical and flanges horizontal, the load perpendicular to the roof slope will cause bending about the strong axis.
        *   The wind uplift is often the critical load for purlins.
        *   Let's assume the purlin is placed with its strong axis resisting the load perpendicular to the roof plane.
        *   Factored Uplift Load = $10.8 \, kN/m$.
        *   This load causes a moment about the strong axis of the purlin: $M_{sx} = (10.8 \, kN/m) \times (4 \, m)^2 / 8 = 21.6 \, kNm$.
        *   If the sheeting provides adequate bracing, the purlin is primarily checked for this strong axis bending.
        *   The axial force due to the slope is often neglected for purlins or considered as a secondary effect.

*   **Step 5: Select Trial Section:**
    *   Required $Z_{px} \approx M_{sx} / (\text{Design yield strength, e.g., } 0.9 \times 250 \, MPa \text{ for Fe250 steel})$
    *   $Z_{px} \approx 21.6 \times 10^6 \, Nmm / (0.9 \times 250 \, N/mm^2) \approx 96000 \, mm^3 = 96 \, cm^3$.
    *   Refer to steel tables for I-sections with $Z_{px} \ge 96 \, cm^3$. An ISMB 250 might be a starting point.

*   **Step 6: Check Bending Stress:**
    *   If ISMB 250 is selected, check its $Z_{px}$ and bending strength.
    *   Actual bending stress = $M_{sx} / Z_{px}$. Check if it's less than design bending strength.
    *   Check for lateral torsional buckling if the purlin's compression flange is not continuously braced. However, with sheeting, this is often not critical.

*   **Step 7: Check Shear:**
    *   Max shear force $V = (10.8 \, kN/m \times 4 \, m) / 2 = 21.6 \, kN$.
    *   Calculate shear stress in the web and compare with design shear strength.

*   **Step 8: Check Deflection:**
    *   Using service loads (e.g., $4.2 \, kN/m$ downward), calculate deflection.
    *   $\delta = 5 w L^4 / (384 EI)$. Check if $\delta < L / 150$ (typical limit).

**Key Takeaway for Purlins:** Wind uplift is often the governing factor. The orientation of the I-section and the bracing provided by the roof sheeting are critical for efficient design.

---

### 5. Practice Questions and Answers

**Question 1:**
What are the primary functions of a roof truss?
**(a)** To support roof covering and transfer loads to columns.
**(b)** To provide stability to the roof structure and span large distances without intermediate supports.
**(c)** To create architectural aesthetics and allow for natural ventilation.
**(d)** All of the above.

**Answer:** (d) All of the above.

**Question 2:**
Which type of truss is characterized by having diagonal members sloping towards the center of the top chord?
**(a)** Howe Truss
**(b)** Pratt Truss
**(c)** King Post Truss
**(d)** Fink Truss

**Answer:** (b) Pratt Truss

**Question 3:**
Which of the following is a dead load acting on a roof truss?
**(a)** Snow load
**(b)** Live load due to maintenance personnel
**(c)** Weight of the purlins and roof sheeting
**(d)** Wind load

**Answer:** (c) Weight of the purlins and roof sheeting

**Question 4:**
The basic wind speed is a crucial parameter in calculating wind loads. What is the typical duration of the gust considered for the basic wind speed in most codes?
**(a)** 1 second
**(b)** 3 seconds
**(c)** 10 seconds
**(d)** 1 minute

**Answer:** (b) 3 seconds

**Question 5:**
For a simply supported purlin of span L subjected to a uniformly distributed load w, what is the maximum bending moment?
**(a)** $wL/2$
**(b)** $wL^2/8$
**(c)** $wL^2/2$
**(d)** $wL^2/16$

**Answer:** (b) $wL^2/8$

**Question 6:**
If the roof sheeting provides adequate lateral restraint to a purlin, which mode of failure is significantly reduced?
**(a)** Shear failure of the web
**(b)** Bearing failure at supports
**(c)** Local buckling of the compression flange
**(d)** Lateral torsional buckling of the purlin

**Answer:** (d) Lateral torsional buckling of the purlin

**Question 7:**
Calculate the factored wind uplift load per meter run on a purlin spanning 5m, with purlins spaced at 1.8m and trusses at 5m. The wind pressure is $1.2 kN/m^2$. Assume a load factor of 1.5.
**Solution:**
Area supported by purlin = Purlin spacing $\times$ Truss spacing = $1.8 \, m \times 5 \, m = 9 \, m^2$.
Wind load per meter run acting on the purlin = Wind pressure $\times$ Area per meter run
= $1.2 \, kN/m^2 \times 9 \, m^2 / 5 \, m$ (This is incorrect, it should be area per meter of purlin span)

**Corrected Calculation for Question 7:**
Area of roof supported by the purlin per meter length of the purlin = Purlin spacing $\times$ 1 meter length of purlin = $1.8 \, m \times 1 \, m = 1.8 \, m^2$.
Factored wind uplift load per meter run on the purlin = Wind pressure $\times$ Area supported per meter run $\times$ Load factor
= $1.2 \, kN/m^2 \times 1.8 \, m^2/m \times 1.5$
= $3.24 \, kN/m$

**Question 8:**
What is the primary concern when designing purlins under wind uplift conditions?
**(a)** Compression in the purlin members
**(b)** Bending due to gravity loads
**(c)** Uplift (tension) causing the purlin to lift off the supports, and potential buckling of the compression flange if not braced.
**(d)** Shear force at the supports

**Answer:** (c) Uplift (tension) causing the purlin to lift off the supports, and potential buckling of the compression flange if not braced.

---

### 6. Important Points to Remember

*   **Triangulation:** The fundamental principle of truss design for stability.
*   **Load Path:** Understand how loads from the roof sheeting transfer through purlins to the main truss members and then to the supports.
*   **Wind Uplift:** Often the critical load case for roof structures, especially for purlins and the connections of trusses to columns.
*   **Purlin Bracing:** The roof sheeting's role in bracing purlins against lateral torsional buckling is crucial for efficient design.
*   **Load Combinations:** Always consider the specified load combinations from design codes to ensure the structure can withstand various simultaneous load scenarios.
*   **I-Section Purlins:** Their efficient bending resistance makes them popular, but careful consideration of weak-axis bending and bracing is necessary.
*   **Serviceability:** Deflection limits are as important as strength limits.

---
