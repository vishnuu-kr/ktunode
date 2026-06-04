---
title: "Scheduling of irrigation"
subject: "IRRIGATION AND DRAINAGE ENGINEERING"
module: "Module 1: Surface Irrigation methods : Classification – Border irrigation: design parameters, evaluation and ideal wetting pattern"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811105"
status: "completed"
scrapedAt: "2026-05-20T18:55:00.916Z"
---
# IRRIGATION AND DRAINAGE ENGINEERING

## Module 1: Surface Irrigation Methods

### Topic: Scheduling of Irrigation

This topic focuses on determining *when* to irrigate and *how much* water to apply in border irrigation systems. Effective irrigation scheduling is crucial for optimizing crop water use, maximizing yield, and conserving water resources.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the principles of irrigation scheduling.**
*   **Identify and explain various methods for determining irrigation timing.**
*   **Explain methods for determining the amount of water to apply (irrigation depth).**
*   **Relate irrigation scheduling to soil moisture management.**
*   **Discuss the factors influencing irrigation scheduling decisions.**
*   **Understand the concept of the "ideal wetting pattern" in the context of border irrigation and how scheduling contributes to achieving it.**

---

### 1. Introduction to Irrigation Scheduling

**Definition:** Irrigation scheduling is the process of determining the optimal time to apply irrigation water and the amount of water to apply to meet the crop's water requirements.

**Goal:** To maintain soil moisture levels within a range that is optimal for crop growth, avoiding both water stress (which reduces yield) and waterlogging (which can damage roots and lead to disease).

**Key Principles:**

*   **Crop Water Requirement:** The amount of water a crop needs to grow and produce its yield. This is influenced by crop type, growth stage, climate, and soil.
*   **Soil Moisture:** The water held in the soil pores. Plants extract water from this reservoir.
*   **Water Application Efficiency:** The ratio of water beneficially used by the crop to the total amount of water applied.

---

### 2. Determining the Timing of Irrigation

The decision of *when* to irrigate is based on the depletion of available soil moisture.

#### 2.1. Soil Moisture Depletion Methods

These methods focus on monitoring the soil moisture content.

*   **Allowable Soil Moisture Depletion (ASMD) or Management Allowable Depletion (MAD):**
    *   **Definition:** The maximum amount of soil moisture that can be depleted from the root zone before irrigation is required to prevent significant crop stress.
    *   **Calculation:**
        $MAD = \frac{W_{FC} - W_{RP}}{W_{FC} - W_{WP}}$
        Where:
        *   $W_{FC}$ = Water content at Field Capacity (upper limit of available water)
        *   $W_{RP}$ = Water content at Readily Available Water (point before significant yield reduction)
        *   $W_{WP}$ = Water content at Wilting Point (lower limit of available water)
        *   Alternatively, MAD is often expressed as a percentage of Total Available Water (TAW).
    *   **Total Available Water (TAW):** The difference between moisture content at Field Capacity and Wilting Point.
        $TAW = FC - WP$ (expressed as volume per unit depth of soil, e.g., mm/m or cm/m)
    *   **Readily Available Water (RAW):** The portion of TAW that can be depleted without significantly affecting crop yield. RAW is often considered to be a fraction of TAW, determined by the crop's sensitivity to water stress.
        $RAW = TAW \times MAD_{crop}$
        Where $MAD_{crop}$ is the crop-specific management allowable depletion percentage.
    *   **Next Irrigation Trigger:** Irrigation is needed when the soil moisture level drops to the Readily Available Water (RAW) level.

*   **Monitoring Soil Moisture:**
    *   **Feel Method:** Experienced farmers can estimate soil moisture by feeling the soil texture. (Less precise, subjective).
    *   **Gravimetric Method:** Weighing soil samples before and after drying to determine water content. (Accurate but time-consuming and destructive).
    *   **Volumetric Methods:**
        *   **Tensiometers:** Measure soil water potential (tension). As soil dries, tension increases. Irrigation is needed when tension exceeds a threshold value. (Good for sandy to loamy soils).
        *   **Electrical Resistance Blocks (Gypsum Blocks):** Measure soil electrical conductivity, which correlates with soil moisture. As soil dries, resistance increases. (Less accurate than tensiometers, can be affected by soil salinity).
        *   **Neutron Probes:** Measure the moderation of fast neutrons by hydrogen atoms in water. (Highly accurate but expensive and requires licensed operators).
        *   **Capacitance/Frequency Domain Reflectometry (FDR) Sensors:** Measure the dielectric constant of the soil, which is strongly related to its water content. (Increasingly popular, relatively accurate and affordable).

**Example:**
A loam soil has Field Capacity (FC) of 25% by volume and Wilting Point (WP) of 10% by volume. The Readily Available Water (RAW) is 75% of the Total Available Water (TAW). The crop's root zone depth is 0.6 m.

*   Calculate TAW:
    $TAW = (FC - WP) \times RootZoneDepth$
    $TAW = (0.25 - 0.10) \times 0.6 \text{ m}$
    $TAW = 0.15 \times 0.6 \text{ m} = 0.09 \text{ m}$ or 90 mm of water over 0.6 m depth.
*   Calculate RAW:
    $RAW = TAW \times 0.75$
    $RAW = 90 \text{ mm} \times 0.75 = 67.5 \text{ mm}$
*   **Irrigation Trigger:** Irrigation is needed when the soil has lost 67.5 mm of water from field capacity within the 0.6 m root zone.

#### 2.2. Evapotranspiration (ET) Based Methods

These methods estimate crop water needs based on atmospheric demand and crop characteristics.

*   **Crop Water Requirement (ETc):**
    *   **Definition:** The depth of water needed for a specific crop to grow and produce a maximum yield under a given set of climatic conditions.
    *   **Calculation:**
        $ET_c = K_c \times ET_o$
        Where:
        *   $ET_c$ = Crop Evapotranspiration (mm/day)
        *   $K_c$ = Crop Coefficient (dimensionless; varies with crop type and growth stage)
        *   $ET_o$ = Reference Evapotranspiration (mm/day) - the ET of a reference crop (usually grass) under standard conditions. $ET_o$ is typically calculated using the FAO Penman-Monteith equation or other methods based on weather data (temperature, humidity, wind speed, solar radiation).

*   **Water Balance Approach:**
    *   **Concept:** This method tracks the soil moisture balance by considering inflows (rainfall, irrigation) and outflows (ET, deep percolation, runoff).
    *   **Equation:**
        $S_{n+1} = S_n + (R_n + I_n) - (ET_n + DP_n + RO_n)$
        Where:
        *   $S_{n+1}$ = Soil moisture at the end of day n+1
        *   $S_n$ = Soil moisture at the end of day n
        *   $R_n$ = Rainfall on day n
        *   $I_n$ = Irrigation on day n
        *   $ET_n$ = Evapotranspiration on day n
        *   $DP_n$ = Deep percolation on day n
        *   $RO_n$ = Runoff on day n
    *   **Scheduling:** Irrigation is scheduled when the estimated soil moisture ($S_n$) drops below the RAW level. The amount to apply is then calculated to refill the profile to Field Capacity.

**Example:**
A crop has a $K_c$ of 1.2 and the $ET_o$ is 5 mm/day. The soil profile has a TAW of 100 mm in the root zone, and the MAD is 50%. The initial soil moisture is at Field Capacity.

*   Calculate ETc:
    $ET_c = 1.2 \times 5 \text{ mm/day} = 6 \text{ mm/day}$
*   Calculate RAW:
    $RAW = 100 \text{ mm} \times 0.50 = 50 \text{ mm}$
*   **Irrigation Timing:** The crop will deplete 6 mm of water each day. It will take approximately $50 \text{ mm} / 6 \text{ mm/day} = 8.33$ days to deplete the RAW. So, irrigation should be scheduled around day 8 or 9.

---

### 3. Determining the Amount of Water to Apply (Irrigation Depth)

Once the timing is determined, the next step is to decide how much water to apply.

*   **Objective:** To refill the soil moisture deficit in the root zone back to Field Capacity without over-irrigation (which leads to deep percolation and potential nutrient loss).

*   **Calculation:**
    $Irrigation Depth (I) = TAW - Current Soil Moisture$
    Where:
    *   TAW is the Total Available Water in the root zone.
    *   Current Soil Moisture is the actual amount of water present in the root zone at the time of irrigation.

    Alternatively, if using the water balance approach and aiming to refill to Field Capacity:
    $Irrigation Depth (I) = ET_c \times \text{Number of days since last irrigation} + \text{Soil moisture deficit}$
    (This is essentially refilling the depleted amount.)

*   **Conveyance and Application Losses:** In surface irrigation, some water is lost during delivery to the field and during application within the field (e.g., runoff, deep percolation at the head end). The calculated irrigation depth needs to account for these losses to ensure the root zone is adequately replenished.
    $Actual Water Applied = \frac{Required Net Depth}{Application Efficiency}$

    Where:
    *   *Required Net Depth* is the depth calculated to refill the root zone (e.g., RAW or TAW minus current moisture).
    *   *Application Efficiency (AE)* is the percentage of water applied that is stored in the root zone and is available for the crop. For border irrigation, AE typically ranges from 50% to 80%.

**Example (Continuing from previous ETc example):**
The crop needs to be irrigated after 8 days. The ETc is 6 mm/day. The application efficiency (AE) for the border irrigation system is 70%.

*   Calculate the total water depleted:
    Water depleted = $ET_c \times \text{Number of days} = 6 \text{ mm/day} \times 8 \text{ days} = 48 \text{ mm}$
    This is close to the RAW of 50 mm, confirming the timing.
*   Calculate the net irrigation depth required to refill the profile (assuming it started at FC and depleted by 48mm):
    Net Irrigation Depth = 48 mm
*   Calculate the gross irrigation depth to be applied considering AE:
    Gross Irrigation Depth = $\frac{\text{Net Irrigation Depth}}{AE}$
    Gross Irrigation Depth = $\frac{48 \text{ mm}}{0.70} \approx 68.6 \text{ mm}$

    This means approximately 68.6 mm of water needs to be delivered to the border to ensure the root zone receives the required 48 mm.

---

### 4. Factors Influencing Irrigation Scheduling

Several factors affect the optimal irrigation schedule:

*   **Crop Type and Growth Stage:** Different crops have varying water needs and sensitivity to drought. For instance, reproductive stages (flowering, grain filling) are generally more sensitive.
*   **Soil Type:**
    *   Sandy soils have low water-holding capacity and require more frequent, smaller irrigations.
    *   Clay soils have high water-holding capacity and can sustain crops for longer periods between irrigations.
*   **Climate:**
    *   High temperatures, low humidity, and high wind speed increase ET.
    *   Rainfall reduces the need for irrigation.
*   **Irrigation System Efficiency:** Lower efficiency systems require more frequent or larger irrigations to compensate for losses.
*   **Root Zone Depth:** Deeper root systems can access more stored soil moisture.
*   **Economic Considerations:** Balancing the cost of irrigation with potential yield increases.
*   **Water Availability:** Constraints on water supply can influence scheduling decisions.

---

### 5. Irrigation Scheduling and the Ideal Wetting Pattern in Border Irrigation

*   **Ideal Wetting Pattern:** For border irrigation, the goal is to achieve a uniform distribution of water along the length and width of the border. This means the entire root zone of the crop should be adequately moistened, without excessive deep percolation at the head end or water deficit at the tail end.
*   **Scheduling's Role:**
    *   **Timing:** Irrigating when soil moisture is near the RAW level prevents severe water stress across the entire border, promoting uniform crop growth.
    *   **Amount:** Applying the correct amount of water ensures that the soil profile is refilled, but not over-saturated. Over-irrigation at the head can lead to waterlogging and increased runoff, while under-irrigation at the tail end results in a moisture deficit.
    *   **Balancing:** Irrigation scheduling, in conjunction with proper border design (length, width, slope, infiltration rate), aims to achieve this uniform wetting pattern by ensuring water infiltrates appropriately across the entire irrigated area.

---

### 6. Practice Questions and Exercises

**Question 1:**
A silt loam soil has Field Capacity (FC) of 20% by volume and Wilting Point (WP) of 8% by volume. The Readily Available Water (RAW) is 60% of the Total Available Water (TAW). The crop's effective root zone depth is 0.5 m. If the soil is currently at Field Capacity, how much water (in mm) must be depleted from the root zone before irrigation is required?

**Answer 1:**
1.  Calculate TAW:
    $TAW = (FC - WP) \times \text{RootZoneDepth}$
    $TAW = (0.20 - 0.08) \times 0.5 \text{ m}$
    $TAW = 0.12 \times 0.5 \text{ m} = 0.06 \text{ m}$ or 60 mm.
2.  Calculate RAW:
    $RAW = TAW \times 0.60$
    $RAW = 60 \text{ mm} \times 0.60 = 36 \text{ mm}$
    Therefore, 36 mm of water must be depleted before irrigation is required.

**Question 2:**
A farmer is irrigating a field using border irrigation. The crop has an ETc of 7 mm/day, and the soil moisture deficit in the root zone is 40 mm when irrigation is scheduled. The application efficiency (AE) of the border system is 65%. What is the gross depth of water that needs to be applied to the field to replenish the deficit?

**Answer 2:**
1.  Net Irrigation Depth required = Soil moisture deficit = 40 mm.
2.  Calculate Gross Irrigation Depth:
    $Gross \ Depth = \frac{Net \ Depth}{AE}$
    $Gross \ Depth = \frac{40 \text{ mm}}{0.65} \approx 61.54 \text{ mm}$
    The farmer needs to apply approximately 61.54 mm of water to the field.

**Question 3:**
Explain the role of the Readily Available Water (RAW) in irrigation scheduling. How does it differ from Total Available Water (TAW)?

**Answer 3:**
*   **TAW (Total Available Water):** Represents the total amount of water that can be held in the soil's root zone and is available to plants. It is the difference between the moisture content at Field Capacity and Wilting Point.
*   **RAW (Readily Available Water):** Represents the portion of TAW that can be depleted by the crop without causing significant stress and yield reduction. It is a fraction of TAW, determined by the crop's sensitivity.
*   **Role in Scheduling:** Irrigation is typically scheduled when the soil moisture level drops to the RAW level. This ensures that the crop is irrigated before it experiences significant water stress, thus maintaining optimal growth and yield. Irrigating based on TAW depletion would mean waiting too long and causing yield loss.

---

### 7. Important Points to Remember

*   **Irrigation scheduling is proactive, not reactive.** It involves predicting water needs, not waiting for visible signs of stress.
*   **Maintain soil moisture above the RAW level.**
*   **Apply the correct amount of water to avoid over- or under-irrigation.**
*   **Understand the water balance:** Track water inputs (rain, irrigation) and outputs (ET, percolation, runoff).
*   **Crop coefficients ($K_c$) are essential for estimating $ET_c$.** They vary significantly with crop type and growth stage.
*   **Application efficiency (AE) is crucial for surface irrigation** and must be factored into calculating the gross irrigation depth.
*   **The goal of scheduling in border irrigation is to achieve uniform wetting** of the soil profile across the entire border.

---
