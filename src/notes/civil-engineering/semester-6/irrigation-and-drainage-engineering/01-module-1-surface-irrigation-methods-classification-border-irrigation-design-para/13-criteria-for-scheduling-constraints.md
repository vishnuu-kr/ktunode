---
title: "Criteria for scheduling, constraints"
subject: "IRRIGATION AND DRAINAGE ENGINEERING"
module: "Module 1: Surface Irrigation methods : Classification – Border irrigation: design parameters, evaluation and ideal wetting pattern"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811106"
status: "completed"
scrapedAt: "2026-05-20T18:55:01.878Z"
---
# Irrigation and Drainage Engineering: Module 1 - Surface Irrigation Methods

## Topic: Border Irrigation: Scheduling Criteria and Constraints

This module focuses on surface irrigation methods, with a specific emphasis on Border Irrigation. We will delve into the criteria and constraints that govern the scheduling of water application in border irrigation systems.

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Understand the principles of scheduling irrigation in border systems.
*   Identify and explain the key criteria used for determining when to irrigate.
*   Recognize and discuss the various constraints that influence irrigation scheduling decisions.
*   Apply knowledge of scheduling criteria and constraints to practical scenarios.

---

### 1. Introduction to Irrigation Scheduling in Border Irrigation

Irrigation scheduling is the process of deciding *when* to irrigate and *how much* water to apply. In border irrigation, the goal is to apply a uniform depth of water across the entire length and width of the border to meet the crop's water requirements while minimizing losses. Effective scheduling is crucial for optimizing crop yield, conserving water, and preventing waterlogging or drought stress.

---

### 2. Criteria for Irrigation Scheduling

Several factors are considered when determining the optimal time to irrigate a border. These criteria are broadly categorized into plant-based, soil-based, and weather-based approaches.

#### 2.1. Plant-Based Criteria

These methods focus on the physiological status of the crop, indicating its water needs.

*   **Direct Measurement of Plant Water Status:**
    *   **Leaf Temperature:** When a crop experiences water stress, its stomata close to conserve water, leading to increased leaf temperature. Measuring leaf temperature (e.g., using infrared thermometers) can indicate stress levels.
        *   **Concept:** Higher leaf temperature compared to air temperature suggests water deficit.
        *   **Example:** If average leaf temperature is 3-5°C higher than ambient air temperature, it may be time to irrigate.
    *   **Leaf Water Potential (LWP):** This measures the tension or pull of water within the plant.
        *   **Concept:** A more negative LWP indicates greater plant water stress.
        *   **Example:** If LWP drops below a critical threshold for the specific crop (e.g., -1.5 MPa), irrigation is needed.
    *   **Stomatal Conductance:** Measures the opening of stomata, which regulates transpiration.
        *   **Concept:** Reduced stomatal conductance indicates stomatal closure due to water stress.
        *   **Example:** A significant drop in stomatal conductance measured with a porometer signals the need for irrigation.

*   **Indirect Measurement of Plant Water Status:**
    *   **Visual Symptoms of Wilting:** Observing the plant for drooping leaves or a loss of turgor.
        *   **Concept:** A visible sign that the plant is experiencing significant water stress.
        *   **Caution:** By the time visual wilting occurs, the crop may have already suffered yield reduction. It's a reactive rather than proactive approach.
        *   **Example:** Observing corn leaves curling upwards.

#### 2.2. Soil-Based Criteria

These methods focus on the amount of water available in the soil for the plant roots.

*   **Soil Moisture Depletion:** Monitoring the soil moisture content and irrigating when it drops below a certain threshold.
    *   **Concept:** Irrigation is applied when a predetermined fraction of the available soil water has been depleted by the crop.
    *   **Key Terms:**
        *   **Field Capacity (FC):** The maximum amount of water soil can hold against gravity after excess water has drained away.
        *   **Permanent Wilting Point (PWP):** The soil moisture content at which plants can no longer extract water and wilt permanently.
        *   **Available Soil Water (ASW):** The difference between FC and PWP (ASW = FC - PWP).
        *   **Readily Available Water (RAW):** The portion of ASW that plants can extract without significant stress. Typically, RAW is about 50-75% of ASW.
        *   **Management Allowable Depletion (MAD):** The percentage of ASW or RAW that can be depleted before irrigation is needed. This varies by crop and growth stage.
    *   **Calculation:**
        *   **Allowable Depletion (AD):** AD = ASW × MAD (or RAW × MAD)
        *   **Irrigation Trigger Point:** Irrigate when current soil moisture falls below FC - AD.
    *   **Methods of Measurement:**
        *   **Gravimetric Method:** Weighing soil samples before and after drying.
        *   **Volumetric Method:** Using soil moisture sensors (e.g., tensiometers, gypsum blocks, capacitance probes, time-domain reflectometry - TDR).
        *   **Tensiometers:** Measure soil water matric potential, which is directly related to the energy plants must expend to extract water. Irrigation is triggered when tensiometer readings reach a specific negative pressure (e.g., -30 to -50 kPa for most crops).
        *   **Gypsum Blocks/Electrical Resistance Blocks:** Measure the electrical resistance of porous blocks embedded in the soil, which correlates with soil moisture.
        *   **Capacitance Probes/TDR:** Measure the dielectric constant of the soil, which is directly related to volumetric water content.

*   **Soil Water Balance (Water Budget Method):** This method tracks the movement of water in the soil profile.
    *   **Concept:** Irrigation is scheduled to replenish the soil moisture deficit.
    *   **Equation:**
        $SMC_{t+1} = SMC_t + (P + I) - ET_c - D - R$
        Where:
        *   $SMC_{t+1}$: Soil moisture content at the next time step.
        *   $SMC_t$: Soil moisture content at the current time step.
        *   $P$: Precipitation.
        *   $I$: Irrigation depth.
        *   $ET_c$: Crop evapotranspiration (actual).
        *   $D$: Deep percolation (water lost below the root zone).
        *   $R$: Surface runoff.
    *   **Scheduling:** Irrigation is applied when the calculated soil moisture deficit ($ET_c - (P+I)$) exceeds the MAD.
    *   **Challenge:** Requires accurate estimation of $ET_c$, $P$, $D$, and $R$.

#### 2.3. Weather-Based Criteria

These methods use weather data to estimate crop water use and predict irrigation needs.

*   **Evapotranspiration (ET) Estimation:**
    *   **Concept:** Irrigation is scheduled based on the cumulative ET of the crop, which represents the water lost from the soil surface and through plant transpiration.
    *   **Methods:**
        *   **Pan Evaporation Method:** Uses the evaporation from a standardized weather pan to estimate ET, often with a crop coefficient ($ET_c = K_p \times E_p$).
        *   **Blaney-Criddle Method:** Uses temperature and daylight hours.
        *   **Penman-Monteith Method (FAO-56):** A physically based and widely accepted method that uses various meteorological parameters (solar radiation, temperature, humidity, wind speed) to calculate reference evapotranspiration ($ET_o$).
        *   **Crop Coefficient ($K_c$):** A factor that adjusts $ET_o$ for specific crops and their growth stages ($ET_c = K_c \times ET_o$).
    *   **Scheduling:** Irrigate when the cumulative $ET_c$ since the last irrigation reaches the MAD.

*   **Climate-Based Forecasting:** Using weather forecasts to anticipate future ET and rainfall.
    *   **Concept:** Proactively schedule irrigation based on predicted weather patterns to avoid water stress or unnecessary irrigation.
    *   **Example:** If a heatwave is forecast, irrigation might be advanced to ensure adequate soil moisture before the increased ET demand.

---

### 3. Constraints in Border Irrigation Scheduling

Several factors can limit or influence the ideal scheduling of irrigation in border systems.

#### 3.1. Water Availability and Delivery

*   **Irrigation Water Supply Reliability:**
    *   **Concept:** The availability of water from canals or other sources may be intermittent or subject to quotas.
    *   **Constraint:** You may not be able to irrigate exactly when the plant or soil criteria indicate if water is not delivered.
    *   **Example:** A farmer might have to irrigate a larger area with a smaller depth of water if the canal flow is reduced for a period.

*   **Delivery Capacity and System Limitations:**
    *   **Concept:** The flow rate available at the head of the border, pump capacity, or canal capacity can limit the amount of water that can be applied in a given time.
    *   **Constraint:** The irrigation duration and depth are often dictated by the available flow rate and the time it takes to apply a specific depth uniformly.
    *   **Example:** If the design flow rate for a border is 10 L/s, and the target depth is 75 mm (0.075 m), and the border dimensions are 100 m long x 5 m wide, the volume to apply is 100m * 5m * 0.075m = 37.5 m³. The application time would be (37.5 m³ / (0.010 m³/s)) = 3750 seconds (approx. 62.5 minutes).

#### 3.2. Farm Infrastructure and Operational Constraints

*   **Border Dimensions and Layout:**
    *   **Concept:** The length, width, and slope of the borders affect the irrigation duration and uniformity.
    *   **Constraint:** Longer borders generally require longer run times and can experience more infiltration variability along their length.
    *   **Example:** A very long border might require a higher initial flow rate to ensure the water reaches the end within a reasonable time.

*   **Gate operations and Labor Availability:**
    *   **Concept:** Opening and closing gates to divert water to different borders require manual labor.
    *   **Constraint:** The availability of labor can limit the number of borders that can be irrigated simultaneously or the precision of scheduling.
    *   **Example:** If labor is scarce, a farmer might irrigate fewer borders for longer durations to minimize gate operations.

*   **Soil Properties:**
    *   **Concept:** Soil infiltration rate, hydraulic conductivity, and water holding capacity influence how quickly water can be applied and how long it stays in the root zone.
    *   **Constraint:** Soils with low infiltration rates may require lower flow rates to prevent surface ponding and runoff, extending application times.
    *   **Example:** Clay soils with low infiltration rates may require slower application rates than sandy soils with high infiltration rates.

#### 3.3. Crop and Environmental Constraints

*   **Crop Growth Stage and Sensitivity:**
    *   **Concept:** Different crops and their growth stages have varying sensitivities to water stress.
    *   **Constraint:** Critical growth stages (e.g., flowering, fruit setting) often require more precise scheduling and minimal stress, even if it means irrigating more frequently.
    *   **Example:** Cotton is highly sensitive to water stress during the squaring and boll development stages.

*   **Rainfall:**
    *   **Concept:** Unexpected or forecasted rainfall can significantly alter irrigation needs.
    *   **Constraint:** Rainfall can often negate the need for a scheduled irrigation, but its timing and amount can be unpredictable.
    *   **Example:** A forecast of heavy rain might lead a farmer to postpone a scheduled irrigation, but if the rain is less than expected, the crop could suffer.

*   **Topography and Field Leveling:**
    *   **Concept:** Uneven fields lead to non-uniform water distribution in border irrigation.
    *   **Constraint:** Poorly leveled fields can exacerbate the problem of infiltration variability and make precise scheduling difficult, as some areas may be over-watered while others are under-watered.
    *   **Example:** If a border has low spots, water will pond there, increasing percolation and potentially causing waterlogging, while higher spots might remain dry.

*   **Water Quality:**
    *   **Concept:** Saline irrigation water requires careful management to prevent salt buildup in the soil.
    *   **Constraint:** Irrigation scheduling might need to incorporate leaching requirements to manage salinity, which can affect the amount and frequency of irrigation.
    *   **Example:** If the irrigation water has a high salt content, farmers might need to apply more water than strictly required by the crop's ET to facilitate leaching.

---

### 4. Ideal Wetting Pattern in Border Irrigation (Revisiting from previous sections for scheduling context)

*   **Concept:** An ideal wetting pattern in border irrigation results in a uniform moisture distribution across the entire border profile, from the soil surface to the maximum root depth, and along the entire length of the border.
*   **Importance for Scheduling:** Achieving an ideal wetting pattern relies on proper design (slope, flow rate, infiltration characteristics) and effective scheduling. Scheduling errors (too much/too little water, wrong timing) directly disrupt this ideal pattern.
*   **Characteristics of Ideal Wetting:**
    *   **Uniform depth of water in the root zone:** No dry pockets or waterlogged areas.
    *   **Water reaches the entire length of the border:** No significant dry areas at the tail end.
    *   **Minimal deep percolation below the root zone:** Water is utilized by the crop.
    *   **Minimal surface runoff:** Water infiltrates into the soil.

---

### 5. Practice Questions and Answers

**Question 1:**
A farmer is using a soil moisture depletion method for scheduling irrigation for maize. The field capacity (FC) of the soil is 30%, and the permanent wilting point (PWP) is 12%. The crop has a readily available water (RAW) fraction of 0.6 of the available soil water (ASW). The management allowable depletion (MAD) for maize at its current growth stage is 40%. If the current soil moisture content is 22%, at what soil moisture content should the farmer irrigate?

**Answer 1:**
1.  **Calculate Available Soil Water (ASW):**
    ASW = FC - PWP = 30% - 12% = 18%
2.  **Calculate Readily Available Water (RAW):**
    RAW = ASW × RAW fraction = 18% × 0.6 = 10.8%
3.  **Calculate Management Allowable Depletion (MAD) in % points:**
    MAD = 40% of RAW = 0.40 × 10.8% = 4.32%
4.  **Calculate the Irrigation Trigger Point (in % soil moisture):**
    Irrigation Trigger Point = RAW - MAD = 10.8% - 4.32% = 6.48%
    *Alternatively, calculating from FC:*
    Total allowable depletion = ASW × MAD = 18% × 0.40 = 7.2%
    Irrigation Trigger Point = FC - Total allowable depletion = 30% - 7.2% = 22.8%
    *Note: Using RAW is generally preferred for scheduling to avoid stressing the plant. Let's use the RAW approach for a more precise answer related to stress avoidance.*

    **Let's re-evaluate using the standard approach where MAD is applied to ASW directly to determine the deficit from FC:**

    1.  **Calculate Available Soil Water (ASW):**
        ASW = FC - PWP = 30% - 12% = 18%
    2.  **Calculate the Allowable Depletion (AD) from Field Capacity:**
        AD = ASW × MAD = 18% × 40% = 7.2% (This is the amount of water that can be depleted from FC)
    3.  **Calculate the Irrigation Trigger Point (Soil Moisture %):**
        Irrigation Trigger Point = FC - AD = 30% - 7.2% = 22.8%

    **Therefore, the farmer should irrigate when the soil moisture content drops to 22.8%. Since the current soil moisture is 22%, it is already below the trigger point, and irrigation is needed.**

---

**Question 2:**
Explain two major constraints that might prevent a farmer from irrigating a border at the exact moment indicated by the soil moisture deficit calculation.

**Answer 2:**
1.  **Water Availability and Delivery Schedules:** The irrigation water may not be available on demand. Farmers often receive water through canal systems with fixed delivery schedules. If the water supply is only available on certain days or at certain times, the farmer must irrigate when the water is delivered, even if it's not the ideal moment predicted by the soil moisture deficit.
2.  **Labor and Operational Constraints:** Operating border irrigation systems requires manual labor to open and close gates to divert water to different borders. If there is a shortage of labor or if the farmer has to manage multiple fields, they may not be able to irrigate all borders precisely when needed. They might have to irrigate multiple borders consecutively, even if it means exceeding the optimal time for the first few.

---

**Question 3:**
What is the primary goal of an ideal wetting pattern in border irrigation, and how does scheduling contribute to achieving it?

**Answer 3:**
The primary goal of an ideal wetting pattern in border irrigation is to ensure a **uniform distribution of moisture** within the root zone of the crop across the entire length and width of the border. This means that all plants in the field receive adequate water without any areas being over-watered (leading to waterlogging and potential disease) or under-watered (leading to drought stress and reduced yield).

Scheduling contributes to achieving this ideal pattern by:
*   **Ensuring sufficient water is applied:** Applying the correct depth of water to replenish the depleted soil moisture up to field capacity.
*   **Applying water at the right time:** Irrigating before the crop experiences significant water stress, thus maintaining optimal physiological function.
*   **Considering infiltration rates:** Adjusting application rates and durations based on soil infiltration characteristics to allow water to move uniformly along the border without excessive ponding or runoff.
*   **Minimizing over-irrigation:** Avoiding excessive application that leads to deep percolation losses and potential nutrient leaching.

---

### 6. Important Points to Remember:

*   **Irrigation scheduling is a decision-making process:** It involves balancing crop needs, soil water status, weather, and practical constraints.
*   **Multiple criteria exist for scheduling:** Plant-based, soil-based, and weather-based methods each have their advantages and disadvantages.
*   **Soil moisture monitoring is crucial:** Understanding FC, PWP, ASW, RAW, and MAD is fundamental for soil-based scheduling.
*   **Water balance methods require accurate inputs:** $ET_c$, rainfall, and losses must be estimated reliably.
*   **Constraints are unavoidable:** Farmers must adapt their ideal schedules to water availability, labor, infrastructure, and environmental factors.
*   **The ideal wetting pattern is the objective:** Effective scheduling is a key tool to achieve uniform water distribution in border irrigation.
*   **Proactive scheduling is better than reactive:** Addressing water needs before severe stress occurs leads to better yields.

---
