---
title: "Crop Water Requirements : Infiltration and movement of water in soil– Soil-water-plant relationship –Water requirement of crops"
subject: "IRRIGATION AND DRAINAGE ENGINEERING"
module: "Module 1: Surface Irrigation methods : Classification – Border irrigation: design parameters, evaluation and ideal wetting pattern"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110fe"
status: "completed"
scrapedAt: "2026-05-20T18:54:55.177Z"
---
# Irrigation and Drainage Engineering - Module 1: Surface Irrigation Methods

## Topic: Crop Water Requirements

---

### **1. Introduction to Crop Water Requirements**

*   **Definition:** Crop water requirement refers to the total amount of water needed by a crop for its normal growth and development throughout its entire lifecycle. This includes water lost through **evapotranspiration (ET)** and water incorporated into the plant tissues.
*   **Importance:** Understanding crop water requirements is crucial for efficient irrigation scheduling and water management. It helps determine the amount of water to apply, when to apply it, and the most suitable irrigation method to meet the crop's needs while minimizing water wastage.

---

### **2. Infiltration and Movement of Water in Soil**

This section delves into how water enters and moves within the soil profile, which directly impacts its availability to plant roots.

#### **2.1. Infiltration**

*   **Definition:** Infiltration is the process by which water on the soil surface enters the soil.
*   **Infiltration Rate:** The speed at which water enters the soil. It is typically expressed in units of length per time (e.g., mm/hr, cm/hr).
*   **Factors Affecting Infiltration Rate:**
    *   **Soil Properties:**
        *   **Texture:** Sandy soils have higher infiltration rates than clayey soils due to larger pore spaces.
        *   **Structure:** Well-aggregated soils (e.g., those with good tilth) promote higher infiltration.
        *   **Porosity and Permeability:** Higher porosity and permeability lead to faster infiltration.
    *   **Surface Conditions:**
        *   **Surface Sealing/Crusting:** Formation of a thin, compacted layer on the soil surface (often due to raindrop impact or rapid drying) reduces infiltration.
        *   **Vegetation Cover:** Plant cover protects the soil surface from raindrop impact and improves soil structure, thus increasing infiltration.
        *   **Soil Moisture Content:** Initially, infiltration is high in dry soils but decreases as the soil becomes wetter due to the reduction in the hydraulic gradient.
    *   **Water Application Rate:** If the water application rate exceeds the infiltration rate, ponding and runoff will occur.
*   **Infiltration Capacity:** The maximum rate at which soil can absorb water at any given time. It generally decreases with time as the soil wets and becomes saturated.
*   **Infiltration Models:**
    *   **Horton's Model:** Describes infiltration as an exponentially decreasing function of time.
        *   $f(t) = f_c + (f_0 - f_c)e^{-kt}$
            *   $f(t)$: Infiltration rate at time $t$
            *   $f_0$: Initial infiltration rate
            *   $f_c$: Final (constant) infiltration rate
            *   $k$: Constant related to soil characteristics
    *   **Green-Ampt Model:** Treats the wetting front as a sharp boundary and uses Darcy's Law. It's generally more accurate for longer irrigation events.
        *   $F(t) = K_{sat} \cdot t + \Psi_w \cdot n \cdot \ln\left(\frac{\Psi_w \cdot n + h(t)}{h(t)}\right)$
            *   $F(t)$: Cumulative infiltration depth at time $t$
            *   $K_{sat}$: Saturated hydraulic conductivity
            *   $\Psi_w$: Matrix potential (suction head) at the wetting front
            *   $n$: Porosity
            *   $h(t)$: Depth of water on the surface at time $t$
*   **Measurement of Infiltration:**
    *   **Ring Infiltrometer:** A cylinder inserted into the soil surface, and water is applied at a constant rate.
    *   **Furrow Infiltrometers:** Used in furrow irrigation to measure infiltration in the furrows.

#### **2.2. Movement of Water in Soil**

*   **Driving Forces:** Water movement in soil is driven by differences in **hydraulic potential**.
    *   **Gravitational Potential:** Due to gravity, acting downwards.
    *   **Matric Potential (or Suction Potential):** Due to the capillary forces in the soil pores, acting upwards or from wetter to drier regions. This is crucial for water uptake by plants.
    *   **Osmotic Potential:** Due to dissolved salts, affecting water movement into plant roots.
    *   **Pressure Potential:** Relevant in saturated soils under positive pressure.
*   **Types of Water Movement:**
    *   **Downward Movement (Percolation):** Under the influence of gravity, especially in saturated or near-saturated conditions. This is important for replenishing groundwater and for leaching salts.
    *   **Lateral Movement:** Movement of water sideways, important in irrigating wide areas or in draining waterlogged soils.
    *   **Upward Movement (Capillary Rise):** Movement against gravity due to capillary forces, bringing water from deeper soil layers to the root zone. This is more significant in fine-textured soils.
*   **Darcy's Law:** The fundamental law governing the flow of water through porous media (like soil).
    *   $Q = -K \frac{dh}{dl}$
        *   $Q$: Volumetric flow rate
        *   $K$: Hydraulic conductivity (a measure of how easily water moves through soil)
        *   $\frac{dh}{dl}$: Hydraulic gradient (change in hydraulic head over distance)
    *   **Hydraulic Conductivity (K):** Varies significantly with soil texture, structure, and saturation. Sandy soils have high K, clayey soils have low K.
*   **Wetting Front:** The boundary between the wet and dry soil as water infiltrates.

---

### **3. Soil-Water-Plant Relationship**

This section explains how plants interact with soil water.

#### **3.1. Soil Water Content**

*   **Definition:** The amount of water present in a given volume or mass of soil.
*   **Units:**
    *   **Volumetric Water Content ($\theta_v$):** Volume of water per unit volume of soil (dimensionless or expressed as a percentage). $\theta_v = V_w / V_{soil}$
    *   **Gravimetric Water Content ($\theta_g$):** Mass of water per unit mass of dry soil (dimensionless or expressed as a percentage). $\theta_g = M_w / M_s$
*   **Relationship between volumetric and gravimetric:** $\theta_v = \theta_g \cdot \frac{\rho_b}{\rho_w}$
    *   $\rho_b$: Bulk density of soil
    *   $\rho_w$: Density of water

#### **3.2. Soil Water Potential ($\psi$)**

*   **Definition:** A measure of the energy status of water in the soil, indicating its tendency to move from one point to another. It's usually expressed in units of pressure (e.g., Pascals (Pa), kilopascals (kPa), bars, or negative centibars (cb)).
*   **Components of Soil Water Potential:**
    *   **Matric Potential ($\psi_m$):** Negative potential associated with the adhesive and cohesive forces between water and soil particles. It is the dominant factor in unsaturated flow. As soil dries, $\psi_m$ becomes more negative.
    *   **Osmotic Potential ($\psi_o$):** Negative potential due to dissolved solutes in soil water.
    *   **Gravitational Potential ($\psi_g$):** Positive potential due to gravity (relative to a reference point).
    *   **Pressure Potential ($\psi_p$):** Positive potential in saturated soils under positive pressure.
*   **Total Soil Water Potential:** $\psi_{total} = \psi_m + \psi_o + \psi_g + \psi_p$
*   **Water Movement Principle:** Water moves from a region of higher (less negative) water potential to a region of lower (more negative) water potential.

#### **3.3. Soil Water Characteristics**

*   **Field Capacity (FC):** The maximum amount of water that a soil can hold against the force of gravity after gravitational water has drained away. It is typically reached 2-3 days after irrigation or rainfall. Represented by a matric potential of approximately -10 to -33 kPa (or -0.1 to -0.33 bar).
*   **Permanent Wilting Point (PWP):** The soil moisture content at which plants can no longer extract sufficient water to meet their transpiration needs, leading to permanent wilting. Represented by a matric potential of approximately -1500 kPa (or -15 bar).
*   **Available Water (AW):** The amount of water in the soil that is available for plant uptake.
    *   $AW = FC - PWP$
*   **Readily Available Water (RAW):** The portion of available water that can be depleted by plants without significantly affecting crop growth. This is typically about 75% of the available water, corresponding to a matric potential of about -30 to -75 kPa.
*   **Management Allowed Depletion (MAD):** The maximum allowable depletion of available water before irrigation is recommended. It varies depending on the crop and its growth stage.

#### **3.4. Plant Water Uptake**

*   **Root System:** Plants absorb water through their roots. The depth and spread of the root system determine the volume of soil from which water can be extracted.
*   **Transpiration:** The process of water movement through a plant and its evaporation from aerial parts, such as leaves, stems, and flowers. This is the primary mechanism for water loss from the plant.
*   **Root Zone:** The upper layer of soil that contains the majority of a plant's roots and is therefore the primary source of water for the plant. The depth of the root zone varies by crop.
*   **Water Uptake Pattern:** Plants tend to extract water more readily from the upper layers of the root zone where water potential is higher. As the upper soil layers dry, water uptake shifts to deeper, moister layers.

---

### **4. Water Requirement of Crops**

This section focuses on quantifying the water needs of different crops.

#### **4.1. Evapotranspiration (ET)**

*   **Definition:** The combined loss of water from a cropped area through evaporation from the soil surface and transpiration from the plant leaves.
*   **Reference Evapotranspiration ($ET_o$):** The evapotranspiration rate from a hypothetical reference crop under standard conditions (e.g., healthy, well-fertilized grass, fully covering the ground, not water-stressed). It is a meteorological demand and is calculated using methods like the **Penman-Monteith equation**.
*   **Crop Evapotranspiration ($ET_c$):** The actual evapotranspiration rate from a specific crop.
    *   $ET_c = K_c \cdot ET_o$
        *   $K_c$: Crop coefficient. This dimensionless factor accounts for the differences in the crop's physical characteristics (height, leaf area, albedo) and its physiological response compared to the reference crop. $K_c$ varies with crop type, growth stage, and environmental conditions.

#### **4.2. Crop Coefficient ($K_c$)**

*   **Definition:** A factor used to adjust the reference evapotranspiration ($ET_o$) to estimate the evapotranspiration of a specific crop ($ET_c$).
*   **Factors Influencing $K_c$:**
    *   **Crop Type:** Different crops have different canopy structures and physiological characteristics.
    *   **Growth Stage:** $K_c$ is typically low during the initial growth stages (establishment), increases to a maximum during the mid-season (full canopy development), and then decreases during the late season (maturity and senescence).
    *   **Planting Density and Spacing:** Affects canopy cover and shading.
    *   **Climate:** Can influence the evaporative demand on the crop.
*   **Typical $K_c$ Values:** FAO (Food and Agriculture Organization) provides guidelines for $K_c$ values for various crops at different growth stages.

#### **4.3. Net Irrigation Requirement (NIR)**

*   **Definition:** The amount of water that needs to be supplied through irrigation to meet the crop's water needs after considering effective rainfall and soil moisture already in the root zone.
*   **Calculation:**
    *   $NIR = ET_c - ER$
        *   $ET_c$: Crop evapotranspiration
        *   $ER$: Effective Rainfall (the portion of rainfall that is actually stored in the root zone and available for crop use).

#### **4.4. Gross Irrigation Requirement (GIR)**

*   **Definition:** The total amount of water that needs to be applied at the field level to meet the crop's water needs, taking into account irrigation system efficiency.
*   **Calculation:**
    *   $GIR = \frac{NIR}{Eff_{irrigation}}$
        *   $Eff_{irrigation}$: Irrigation system efficiency (ratio of water delivered to the crop root zone to the total water applied). This accounts for losses due to evaporation, deep percolation, and runoff during the irrigation process.

#### **4.5. Factors Affecting Crop Water Requirements:**

*   **Climate:** Temperature, humidity, wind speed, solar radiation directly influence evapotranspiration.
*   **Crop Type and Growth Stage:** Different crops have different water needs, and these needs change throughout their lifecycle.
*   **Soil Type and Depth:** Affects water holding capacity and infiltration.
*   **Irrigation Method and Efficiency:** How effectively water is applied to the root zone.
*   **Agronomic Practices:** Fertilization, tillage, weed control can influence water use.
*   **Salinity:** High salinity can increase water requirements due to osmotic effects.

---

### **5. Ideal Wetting Pattern in Border Irrigation**

While this topic is more directly related to border irrigation design, understanding the ideal wetting pattern is crucial for delivering water efficiently to the crop and is influenced by infiltration and water movement.

*   **Goal:** To uniformly wet the soil in the root zone of the crop across the entire border.
*   **Ideal Wetting Pattern Characteristics:**
    *   **Uniform Depth:** The soil profile should be wetted to a uniform depth throughout the border.
    *   **No Over-irrigation:** Water should not percolate beyond the root zone, leading to deep percolation losses and potential waterlogging.
    *   **No Under-irrigation:** The entire root zone should receive sufficient moisture, avoiding dry pockets.
    *   **Minimal Surface Runoff:** Ideally, all applied water should infiltrate.
    *   **Even Distribution:** Water should reach the end of the border without excessive ponding or a dry tail.
*   **Factors Influencing Wetting Pattern:**
    *   **Flow Rate:** Higher flow rates can lead to faster advance but may increase runoff if infiltration capacity is exceeded.
    *   **Border Length and Width:** Affect the time water spends in contact with the soil.
    *   **Infiltration Rate:** Variations in infiltration along the border can lead to non-uniform wetting.
    *   **Manning's Roughness Coefficient:** Affects flow velocity and depth in the border.
    *   **Application Duration:** The time water is allowed to flow into the border.

---

### **6. Practice Questions and Exercises**

**Question 1:**
Define infiltration and explain five factors that influence the infiltration rate of soil.

**Answer:**
*   **Definition:** Infiltration is the process by which water on the soil surface enters the soil.
*   **Factors:**
    1.  **Soil Texture:** Sandy soils have higher infiltration than clayey soils.
    2.  **Soil Structure:** Well-aggregated soils promote higher infiltration.
    3.  **Surface Sealing:** A crust on the surface reduces infiltration.
    4.  **Soil Moisture Content:** Infiltration is higher in dry soils and decreases as the soil wets.
    5.  **Vegetation Cover:** Plant cover protects the surface and improves infiltration.
    6.  **Water Application Rate:** If the rate exceeds infiltration capacity, runoff occurs.

**Question 2:**
What is Field Capacity (FC) and Permanent Wilting Point (PWP)? If a soil has FC of 25% and PWP of 10% (by mass), and its bulk density is 1.4 g/cm³, what is the available water content in cm/m?

**Answer:**
*   **Field Capacity (FC):** The maximum amount of water a soil can hold against gravity after gravitational water has drained away (typically around -10 to -33 kPa matric potential).
*   **Permanent Wilting Point (PWP):** The soil moisture content at which plants can no longer extract sufficient water and permanently wilt (typically around -1500 kPa matric potential).
*   **Calculation of Available Water (AW):**
    *   Available Water (gravimetric) = FC - PWP = 25% - 10% = 15%
    *   Available Water (volumetric) = $\theta_g \cdot \frac{\rho_b}{\rho_w}$
    *   Assuming $\rho_w = 1$ g/cm³:
    *   Available Water (volumetric) = $0.15 \cdot \frac{1.4 \text{ g/cm³}}{1 \text{ g/cm³}} = 0.21$
    *   This means 0.21 cm³ of water per cm³ of soil.
    *   Therefore, Available Water Content = **0.21 cm/m** or **21 cm/m**.

**Question 3:**
Explain the concept of Crop Coefficient ($K_c$) and its relationship with Reference Evapotranspiration ($ET_o$) and Crop Evapotranspiration ($ET_c$).

**Answer:**
*   **Crop Coefficient ($K_c$):** A dimensionless factor that adjusts the reference evapotranspiration ($ET_o$) to estimate the evapotranspiration of a specific crop ($ET_c$). It accounts for differences in crop type, growth stage, and physiological characteristics compared to the reference crop.
*   **Relationship:** The relationship is given by the equation: $ET_c = K_c \cdot ET_o$.
    *   $ET_o$ represents the atmospheric demand for water.
    *   $K_c$ modifies this demand based on the crop's specific needs and characteristics.

**Question 4:**
A farmer needs to irrigate a crop. The calculated $ET_c$ for the crop is 6 mm/day. Effective rainfall is 1 mm/day. The irrigation system efficiency is 70%. Calculate the Net Irrigation Requirement (NIR) and the Gross Irrigation Requirement (GIR).

**Answer:**
*   **Net Irrigation Requirement (NIR):**
    *   $NIR = ET_c - ER$
    *   $NIR = 6 \text{ mm/day} - 1 \text{ mm/day} = 5 \text{ mm/day}$
*   **Gross Irrigation Requirement (GIR):**
    *   $GIR = \frac{NIR}{Eff_{irrigation}}$
    *   $GIR = \frac{5 \text{ mm/day}}{0.70} \approx 7.14 \text{ mm/day}$

---

### **7. Important Points to Remember**

*   **Water movement in soil is governed by potential gradients.** Water moves from higher to lower potential.
*   **Matric potential is the primary driver of water uptake by plants in unsaturated soils.**
*   **Field Capacity (FC) and Permanent Wilting Point (PWP) define the range of available water for plants.**
*   **Evapotranspiration (ET) is the key component of crop water demand.**
*   **Crop coefficient ($K_c$) is essential for translating reference ET to crop-specific ET.**
*   **Efficient irrigation design aims for a uniform wetting pattern within the crop's root zone.**
*   **Understanding the difference between Net Irrigation Requirement (NIR) and Gross Irrigation Requirement (GIR) is crucial for accurate water application.**
*   **Soil properties (texture, structure) significantly influence infiltration and water movement.**
*   **Surface conditions (crusting, vegetation) play a vital role in infiltration rates.**

---
