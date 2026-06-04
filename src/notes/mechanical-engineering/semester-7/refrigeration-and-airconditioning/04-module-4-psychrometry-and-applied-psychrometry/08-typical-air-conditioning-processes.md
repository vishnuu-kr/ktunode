---
title: "Typical air conditioning processes"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f86"
status: "completed"
scrapedAt: "2026-05-20T18:17:36.916Z"
---
# Module 4: Psychrometry and Applied Psychrometry - Typical Air Conditioning Processes

## Introduction to Air Conditioning Processes

Air conditioning (AC) is the process of treating air to control its temperature, humidity, cleanliness, and distribution to meet the requirements of a human occupancy space. Psychrometric principles are fundamental to understanding and designing AC systems as they deal with the properties of moist air and the effects of various processes on these properties. This module focuses on typical air conditioning processes that are commonly employed to achieve desired indoor air conditions.

---

### 1. Understanding Psychrometric Properties and Processes

**Key Concepts:**

*   **Moist Air:** A mixture of dry air and water vapor.
*   **Dry Air:** Air containing no water vapor.
*   **Humidity Ratio (w):** The mass of water vapor per unit mass of dry air. (kg/kg of dry air)
*   **Specific Volume (v_a):** The volume occupied by a unit mass of dry air. (m³/kg of dry air)
*   **Dry Bulb Temperature (t_db):** The temperature of air indicated by a thermometer shielded from radiation.
*   **Wet Bulb Temperature (t_wb):** The temperature indicated by a thermometer with its bulb covered by a wet wick, exposed to airflow. It's a measure of the cooling effect of evaporation.
*   **Dew Point Temperature (t_dp):** The temperature at which the air becomes saturated (relative humidity = 100%) and condensation begins to form.
*   **Relative Humidity (RH):** The ratio of the actual partial pressure of water vapor to the saturation pressure of water vapor at the same dry bulb temperature. Expressed as a percentage.
*   **Enthalpy (h):** The total heat content of moist air, including the sensible and latent heat of the water vapor.

**Psychrometric Chart:**

The psychrometric chart is a graphical representation of the properties of moist air at a constant atmospheric pressure. It is an invaluable tool for analyzing and visualizing air conditioning processes. Typical psychrometric charts are found in the **Data book- Refrigeration tables and charts including air conditioning data by C P Kothandaraman** and ASHRAE Handbooks.

**CO5 Alignment:** Analyze properties of moist air using psychrometric principles and chart. (Knowledge Level: K2, K4)

---

### 2. Typical Air Conditioning Processes

These processes involve changing the state of air to achieve desired comfort conditions. They are typically represented as lines or curves on a psychrometric chart.

#### 2.1. Sensible Heating

**Description:** Sensible heating is the process of increasing the dry bulb temperature of air without changing its humidity ratio or enthalpy (ideally). The heat added is only for raising the temperature of the air.

**Process on Psychrometric Chart:** A horizontal line moving to the right (increasing $t_{db}$).

**Application:** Heating a space during cold weather using a furnace or heat exchanger.

**Key Change:** $t_{db}$ increases, RH decreases.

**Example:** Heating outdoor air from 10°C DB, 50% RH to 25°C DB, 20% RH.

**Formulaic Representation (Ideal):**
$Q_{sensible} = m_{a} \times c_p \times (t_{final} - t_{initial})$
where:
*   $Q_{sensible}$ is the sensible heat added (kJ or Btu)
*   $m_{a}$ is the mass flow rate of dry air (kg/s or lb/min)
*   $c_p$ is the specific heat of dry air at constant pressure (approx. 1.005 kJ/kg·°C or 0.24 Btu/lb·°F)
*   $t_{final}$ is the final dry bulb temperature
*   $t_{initial}$ is the initial dry bulb temperature

**Textbook Reference:**
*   **Arora C.P., Refrigeration and Air Conditioning (4th ed.):** Chapter on Psychrometry and Psychrometric Processes.
*   **Jones, W P., Air Conditioning Engineering (5th ed.):** Chapter on Psychrometric Principles.

**Important Point:** In real-world scenarios, slight changes in humidity ratio might occur due to minor heat losses or gains from the container.

#### 2.2. Sensible Cooling

**Description:** Sensible cooling is the process of decreasing the dry bulb temperature of air without changing its humidity ratio or enthalpy (ideally).

**Process on Psychrometric Chart:** A horizontal line moving to the left (decreasing $t_{db}$).

**Application:** Cooling a space in summer using an air conditioner or chiller where the primary goal is to reduce temperature.

**Key Change:** $t_{db}$ decreases, RH increases.

**Example:** Cooling air from 30°C DB, 60% RH to 20°C DB, 80% RH.

**Formulaic Representation (Ideal):**
$Q_{sensible} = m_{a} \times c_p \times (t_{initial} - t_{final})$

**Textbook Reference:**
*   **Ramesh Chandra Arora, Refrigeration and Air Conditioning (4th printing):** Relevant sections on psychrometric processes.
*   **Ahamadul Ameen, Refrigeration and air conditioning:** Detailed explanation of sensible cooling.

**Important Point:** If the air is cooled below its dew point temperature, condensation will occur, and the process will no longer be purely sensible cooling.

#### 2.3. Cooling and Dehumidification (Adiabatic Cooling and Dehumidification)

**Description:** This process involves reducing both the temperature and moisture content of the air. This is typically achieved by cooling the air to a temperature below its dew point, causing water vapor to condense.

**Process on Psychrometric Chart:** A line moving downwards and to the left, generally following a path close to constant enthalpy (especially for adiabatic saturation, but actual processes deviate).

**Application:** Air conditioning in humid climates where both temperature and humidity need to be reduced. Often achieved using cooling coils with surface temperatures below the dew point.

**Key Changes:** $t_{db}$ decreases, $w$ decreases, RH increases (until saturation point) then decreases as temperature drops faster. Enthalpy generally decreases.

**Example:** Cooling humid air from 32°C DB, 80% RH down to 24°C DB, 60% RH using a cooling coil.

**How it works:** Air passes over a cold surface (cooling coil). If the surface temperature is below the dew point of the air, moisture condenses out of the air. The latent heat released by condensation warms the air slightly, leading to a final air state with a dry bulb temperature above the coil surface temperature but below the initial dry bulb temperature.

**Textbook Reference:**
*   **Arora S. C. and S. Domkundwar, A Course in Refrigeration and Air Conditioning:** Comprehensive coverage of combined cooling and dehumidification.
*   **Stoecker & Jons, Refrigeration & Air-conditioning (2nd ed.):** Sections on cooling coils and dehumidification.

**Important Point:** This is one of the most common and crucial processes in air conditioning. The specific path on the psychrometric chart depends on the coil surface temperature and the initial air state.

#### 2.4. Heating and Humidification

**Description:** This process involves increasing both the dry bulb temperature and the moisture content of the air.

**Process on Psychrometric Chart:** A line moving upwards and to the right, typically at a steeper angle than sensible heating.

**Application:** Used in dry climates or during winter when both heating and adding moisture are desired to improve comfort.

**Key Changes:** $t_{db}$ increases, $w$ increases, RH generally increases. Enthalpy increases.

**Example:** Heating dry winter air from 5°C DB, 30% RH to 22°C DB, 50% RH.

**How it works:**
1.  **Humidifier:** A humidifier adds moisture to the air, often through steam injection or evaporation from a water surface.
2.  **Heater:** A heating element then raises the temperature of the now more humid air.
    *   **Simultaneous:** Some systems achieve this simultaneously.

**Textbook Reference:**
*   **Arora C.P., Refrigeration and Air Conditioning (4th ed.):** Discusses humidification methods.
*   **Ahamadul Ameen, Refrigeration and air conditioning:** Details on humidifiers and combined processes.

**Important Point:** The final RH depends on the amount of moisture added and the amount of sensible heat added.

#### 2.5. Cooling and Humidification

**Description:** This process involves decreasing the dry bulb temperature of the air while simultaneously increasing its moisture content. This is achieved through evaporative cooling.

**Process on Psychrometric Chart:** A line moving downwards and to the right, generally following a path close to constant wet bulb temperature (adiabatic process).

**Application:** Used in hot and dry climates for cooling, as it is an energy-efficient method.

**Key Changes:** $t_{db}$ decreases, $w$ increases, RH increases. Enthalpy remains approximately constant (in an adiabatic process).

**Example:** Cooling air from 35°C DB, 20% RH to 28°C DB, 40% RH using an evaporative cooler.

**How it works:** Air is passed over a wetted medium (e.g., porous pads soaked in water). Water evaporates into the air, cooling the air through the latent heat of vaporization, and increasing the humidity ratio.

**Textbook Reference:**
*   **Ramesh Chandra Arora, Refrigeration and Air Conditioning (4th printing):** Coverage of evaporative cooling.
*   **Jones, W P., Air Conditioning Engineering (5th ed.):** Detailed analysis of evaporative cooling systems.

**Important Point:** The effectiveness of evaporative cooling is limited by the wet bulb depression (difference between DB and WB temperatures). It is most effective when the initial humidity is low.

#### 2.6. Heating and Dehumidification

**Description:** This process involves increasing the dry bulb temperature of the air while simultaneously decreasing its moisture content.

**Process on Psychrometric Chart:** A line moving upwards and to the left.

**Application:** This is a less common process in typical comfort air conditioning but might be encountered in specific industrial applications where dry heat is needed, or in systems designed to remove moisture after a prior humidification step.

**Key Changes:** $t_{db}$ increases, $w$ decreases, RH decreases significantly. Enthalpy increases.

**How it works:**
1.  **Heating:** The air is heated first.
2.  **Dehumidification:** Then, it's passed over a desiccant material or a cooling coil below the dew point, followed by reheating. Or, in some specific cases, a dehumidifier that also heats may be used.

**Textbook Reference:**
*   **Arora S. C. and S. Domkundwar, A Course in Refrigeration and Air Conditioning:** Might be covered in advanced topics or industrial AC.
*   **ASHRAE Handbooks:** Likely to have detailed information on industrial applications requiring this process.

**Important Point:** This process is often achieved in stages. Direct simultaneous heating and dehumidification is complex.

#### 2.7. Bypass Factor and Coil Bypass

**Description:** In real AC systems, not all the air passing through a cooling or heating coil comes into direct contact with the coil surface. Some air bypasses the coil entirely. This bypass effect influences the actual state of the conditioned air.

*   **Bypass Factor (BF):** The fraction of air that bypasses the coil.
*   **Coil-Bypassed Air:** The air that does not interact with the coil surface.
*   **Coil-Effective Air:** The air that passes over the coil and is conditioned.

**Impact:**
*   The final air state will be a mixture of the bypassed air (at its original condition) and the coil-effective air (at the saturated condition corresponding to the coil surface temperature).
*   This results in a final air state that is less cooled/heated and less dehumidified/humidified than if all air had passed over the coil.

**Process on Psychrometric Chart:** The resulting line is a straight line connecting the initial air state to the saturated air state (at the coil surface temperature), but it stops short of reaching the saturated state.

**Example:** If air enters at 30°C DB, 70% RH and passes over a coil at 12°C, with a BF of 0.2, the final air will be a mix of 20% of the original air and 80% of air cooled to 12°C saturation.

**Formula for final state after cooling with bypass:**
$t_{db,final} = t_{db,initial} \times BF + t_{coil,sat} \times (1-BF)$
$w_{final} = w_{initial} \times BF + w_{coil,sat} \times (1-BF)$

**CO5 Alignment:** Explain the working principles and applications of air washers and air-conditioning systems (understanding these bypass effects is crucial for system analysis). (Knowledge Level: K2, K4)

**Textbook Reference:**
*   **Arora C.P., Refrigeration and Air Conditioning (4th ed.):** Detailed explanation of coil bypass and its impact.
*   **Jones, W P., Air Conditioning Engineering (5th ed.):** Thorough analysis of air conditioning coil performance including bypass.

**Important Point:** Bypass factor is a critical parameter for accurately predicting the performance of air conditioning coils and systems.

---

### 3. Air Washers

**Description:** An air washer is a device used for air cleaning, cooling, and humidification. It typically consists of a casing through which air is drawn and is sprayed with water.

**Processes Achieved by Air Washers:**

1.  **Sensible Cooling:** If the water temperature is below the air's dry bulb temperature but above its dew point, sensible cooling occurs.
2.  **Cooling and Humidification:** If the water is colder than the air's dew point, both cooling and humidification occur, approaching adiabatic saturation.
3.  **Humidification (Isothermal):** If the water temperature is equal to the air's dry bulb temperature, humidification occurs without significant temperature change (close to isothermal).
4.  **Heating and Humidification (Warm water spray):** If warm water is sprayed, both heating and humidification can occur.
5.  **Dehumidification (Very Cold Water Spray):** If very cold water (below the dew point) is sprayed, cooling and dehumidification can occur, similar to a cooling coil.

**Components:**
*   Spray nozzles
*   Water pump
*   Water tank/sump
*   Drift eliminators
*   Fan

**CO5 Alignment:** Explain the working principles and applications of air washers and air-conditioning systems. (Knowledge Level: K2, K4)

**Textbook Reference:**
*   **Arora C.P., Refrigeration and Air Conditioning (4th ed.):** Dedicated sections on air washers.
*   **Ahamadul Ameen, Refrigeration and air conditioning:** Details on the operation and types of air washers.

**Important Point:** Air washers are often used in industrial applications or for pre-conditioning of air. Their efficiency is influenced by the water flow rate, spray pattern, and air velocity.

---

### 4. Recalculation of Processes (Reheating)

**Description:** In some AC systems, after cooling and dehumidification, the air might become too cold or too dry. To achieve the desired comfort conditions, the air is often reheated. This is a two-stage process.

**Process on Psychrometric Chart:**
1.  Cooling and dehumidification (down and left).
2.  Sensible heating (horizontal line to the right from the previous state).

**Application:** Standard comfort air conditioning where air is cooled below the desired temperature and then reheated to the target dry bulb temperature. This allows for greater dehumidification than simply cooling to the target dry bulb temperature directly.

**Example:** Outdoor air at 35°C DB, 75% RH needs to be conditioned to 24°C DB, 55% RH.
1.  Cool the air to 14°C DB (below its dew point) to achieve significant dehumidification.
2.  Reheat the air from 14°C DB to 24°C DB.

**CO5 Alignment:** Explain the working principles and applications of air washers and air-conditioning systems. (Knowledge Level: K2, K4)

**Textbook Reference:**
*   **Jones, W P., Air Conditioning Engineering (5th ed.):** Discusses multi-stage AC systems including reheat.
*   **Arora S. C. and S. Domkundwar, A Course in Refrigeration and Air Conditioning:** Examples of combined cooling and reheating.

**Important Point:** Reheating adds energy cost but allows for more effective dehumidification.

---

### 5. Mixing of Air Streams

**Description:** In many AC systems, different air streams are mixed to achieve the desired supply air conditions. Common examples include mixing return air (from the conditioned space) with fresh outdoor air for ventilation.

**Process on Psychrometric Chart:** The mixture of two air streams will result in a state point that lies on the straight line connecting the state points of the two original air streams. The location of the mixture point depends on the mass flow rates of the two streams.

**Formula for mixing:**
Let $m_{a1}$ and $m_{a2}$ be the mass flow rates of dry air of stream 1 and stream 2, respectively.
Let $h_1$ and $h_2$ be the enthalpies of stream 1 and stream 2.
Let $v_{a1}$ and $v_{a2}$ be the specific volumes of stream 1 and stream 2.
Let $w_1$ and $w_2$ be the humidity ratios of stream 1 and stream 2.

Enthalpy of mixture ($h_m$):
$h_m = \frac{m_{a1} h_1 + m_{a2} h_2}{m_{a1} + m_{a2}}$

Humidity Ratio of mixture ($w_m$):
$w_m = \frac{m_{a1} w_1 + m_{a2} w_2}{m_{a1} + m_{a2}}$

Dry Bulb Temperature of mixture ($t_{db,m}$):
$t_{db,m} = \frac{m_{a1} t_{db1} + m_{a2} t_{db2}}{m_{a1} + m_{a2}}$ (This is an approximation, more accurately derived from enthalpy and humidity ratio changes).

**Application:**
*   **Recirculation of return air with fresh outdoor air.**
*   **Mixing air from different zones.**

**CO5 Alignment:** Analyze properties of moist air using psychrometric principles and chart. (Knowledge Level: K2, K4)

**Textbook Reference:**
*   **Arora C.P., Refrigeration and Air Conditioning (4th ed.):** Excellent coverage of air mixing calculations.
*   **Ramesh Chandra Arora, Refrigeration and Air Conditioning (4th printing):** Examples of mixing problems.

**Important Point:** The mixing rule is analogous to solving a lever problem on the psychrometric chart. The ratio of distances from the mixture point to the individual air stream points is inversely proportional to their mass flow rates.

---

### 6. Typical Air Conditioning Systems and Processes

**Comfort Air Conditioning:**
*   **Objective:** Maintain indoor conditions within a comfortable range (e.g., 22-26°C DB, 50-60% RH).
*   **Typical Process:**
    1.  **Mixing:** Outdoor air and return air are mixed.
    2.  **Cooling and Dehumidification:** The mixed air passes over a cooling coil to reduce temperature and remove moisture.
    3.  **Reheating (Optional):** If the air is cooled too much, it might be reheated.
    4.  **Sensible Cooling (Optional):** Further sensible cooling if needed.
    5.  **Air Distribution:** Conditioned air is supplied to the space.

**Industrial Air Conditioning:**
*   **Objective:** Maintain precise conditions required for manufacturing processes (e.g., electronics, pharmaceuticals, printing). Conditions can vary widely.
*   **Processes:** May involve any of the above, plus:
    *   **Desiccant Dehumidification:** Using solid or liquid desiccants to achieve very low humidity levels.
    *   **Evaporative Cooling:** For specific industrial applications.
    *   **Humidification/Dehumidification:** Precisely controlled addition or removal of moisture.

---

## Practice Questions and Answers

**Question 1:**
Outdoor air at 30°C dry bulb temperature and 50% relative humidity is cooled sensibly to 20°C dry bulb temperature.
(a) What is the initial humidity ratio?
(b) What is the final humidity ratio?
(c) What is the final relative humidity?
(d) How much sensible heat is removed per kg of dry air?

**Given:**
*   Initial state: $t_{db1}$ = 30°C, RH1 = 50%
*   Final state: $t_{db2}$ = 20°C (sensible cooling)

**Solution:**

*(To solve this, you would typically use a psychrometric chart or psychrometric equations. For this example, we'll assume values derived from a chart)*

From a psychrometric chart at 30°C DB and 50% RH:
(a) Initial humidity ratio ($w_1$) ≈ 0.013 kg/kg dry air.
Initial enthalpy ($h_1$) ≈ 65 kJ/kg dry air.

During sensible cooling, $w$ remains constant.
(b) Final humidity ratio ($w_2$) = $w_1$ ≈ 0.013 kg/kg dry air.

At 20°C DB and $w_2$ = 0.013 kg/kg dry air:
From a psychrometric chart at 20°C DB and $w_2$ ≈ 0.013 kg/kg dry air:
(c) Final Relative Humidity (RH2) ≈ 85%.
Final enthalpy ($h_2$) ≈ 47 kJ/kg dry air.

(d) Sensible heat removed per kg of dry air:
$Q_{sensible} = h_1 - h_2 = 65 \, \text{kJ/kg dry air} - 47 \, \text{kJ/kg dry air} = 18 \, \text{kJ/kg dry air}$

**Answer:**
(a) Initial humidity ratio ≈ 0.013 kg/kg dry air.
(b) Final humidity ratio ≈ 0.013 kg/kg dry air.
(c) Final relative humidity ≈ 85%.
(d) Sensible heat removed per kg of dry air = 18 kJ/kg dry air.

---

**Question 2:**
Air at 35°C DB and 28°C WB is cooled and dehumidified by a cooling coil operating with a bypass factor of 0.15. The coil surface temperature is 12°C. Determine the final state of the air (DB, RH).

**Given:**
*   Initial state: $t_{db1}$ = 35°C, $t_{wb1}$ = 28°C
*   Coil surface temperature: $t_{coil,sat}$ = 12°C
*   Bypass Factor (BF) = 0.15

**Solution:**

From a psychrometric chart at 35°C DB and 28°C WB:
*   Initial humidity ratio ($w_1$) ≈ 0.024 kg/kg dry air.
*   Initial enthalpy ($h_1$) ≈ 95 kJ/kg dry air.

The air cooled by the coil will reach the saturated condition at the coil surface temperature:
*   Coil surface temperature $t_{coil,sat}$ = 12°C.
*   At 12°C saturated, humidity ratio ($w_{coil,sat}$) ≈ 0.0087 kg/kg dry air.
*   At 12°C saturated, enthalpy ($h_{coil,sat}$) ≈ 39.5 kJ/kg dry air.

Using the bypass factor formula for final dry bulb temperature:
$t_{db,final} = t_{db1} \times BF + t_{coil,sat} \times (1 - BF)$
$t_{db,final} = 35 \times 0.15 + 12 \times (1 - 0.15)$
$t_{db,final} = 5.25 + 12 \times 0.85$
$t_{db,final} = 5.25 + 10.2$
$t_{db,final} = 15.45 \, °C$

Using the bypass factor formula for final humidity ratio:
$w_{final} = w_1 \times BF + w_{coil,sat} \times (1 - BF)$
$w_{final} = 0.024 \times 0.15 + 0.0087 \times (1 - 0.15)$
$w_{final} = 0.0036 + 0.0087 \times 0.85$
$w_{final} = 0.0036 + 0.0074$
$w_{final} = 0.011 \, \text{kg/kg dry air}$

Now, determine the final RH at 15.45°C DB and $w_{final}$ = 0.011 kg/kg dry air.
From a psychrometric chart or by calculation, at 15.45°C DB and $w_{final}$ = 0.011 kg/kg dry air, the RH is approximately 75%.

**Answer:**
The final state of the air is approximately 15.45°C DB and 75% RH.

---

**Question 3:**
Explain the process of mixing two air streams:
Stream 1: 20 kg/s of dry air at 30°C DB and 60% RH.
Stream 2: 10 kg/s of dry air at 15°C DB and 50% RH.
Determine the state of the mixed air.

**Given:**
*   Stream 1: $m_{a1}$ = 20 kg/s, $t_{db1}$ = 30°C, RH1 = 60%
*   Stream 2: $m_{a2}$ = 10 kg/s, $t_{db2}$ = 15°C, RH2 = 50%

**Solution:**

From psychrometric chart/equations:
Stream 1:
$w_1$ ≈ 0.017 kg/kg dry air
$h_1$ ≈ 71 kJ/kg dry air

Stream 2:
$w_2$ ≈ 0.0058 kg/kg dry air
$h_2$ ≈ 34 kJ/kg dry air

Calculate the humidity ratio of the mixture ($w_m$):
$w_m = \frac{m_{a1} w_1 + m_{a2} w_2}{m_{a1} + m_{a2}} = \frac{(20 \times 0.017) + (10 \times 0.0058)}{20 + 10}$
$w_m = \frac{0.34 + 0.058}{30} = \frac{0.398}{30} \approx 0.0133 \, \text{kg/kg dry air}$

Calculate the enthalpy of the mixture ($h_m$):
$h_m = \frac{m_{a1} h_1 + m_{a2} h_2}{m_{a1} + m_{a2}} = \frac{(20 \times 71) + (10 \times 34)}{20 + 10}$
$h_m = \frac{1420 + 340}{30} = \frac{1760}{30} \approx 58.67 \, \text{kJ/kg dry air}$

Now, find the dry bulb temperature and RH corresponding to $h_m$ = 58.67 kJ/kg dry air and $w_m$ = 0.0133 kg/kg dry air.
Using a psychrometric chart or by interpolating/calculating:
$t_{db,m}$ ≈ 24.3°C
RH$_m$ ≈ 70%

**Answer:**
The state of the mixed air is approximately 24.3°C DB and 70% RH.

---

## Important Points to Remember

*   **Psychrometric Chart is Your Best Friend:** Always refer to a psychrometric chart for accurate analysis of these processes.
*   **Constant Enthalpy vs. Constant Humidity Ratio:** Sensible processes ideally occur at constant enthalpy and humidity ratio respectively, but in reality, there can be slight deviations. Adiabatic processes are often approximated as constant enthalpy.
*   **Bypass Factor is Key for Coil Performance:** Real coils have bypass factors that significantly affect the output air state.
*   **Comfort Conditions Vary:** Desired comfort conditions are not universal and depend on factors like activity level, clothing, and acclimatization.
*   **Energy Implications:** Different processes have varying energy consumptions. Evaporative cooling is more energy-efficient in dry climates than mechanical cooling. Reheating adds significant energy cost.
*   **Combined Processes:** Most air conditioning applications involve a combination of these basic processes to achieve the desired outcome.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


## References

*   Arora C.P. (2021). *Refrigeration and Air Conditioning* (4th ed.). Tata McGraw Hill.
*   Arora, Ramesh Chandra (2015). *Refrigeration and Air Conditioning* (4th Printing). PHI.
*   Arora, S. C., & Domkundwar, S. (2018). *A Course in Refrigeration and Air Conditioning*. Dhanpat Rai and Company.
*   Ameen, Ahamadul (2020). *Refrigeration and air conditioning*. Eastern Economy Edition.
*   Jones, W P. (2001). *Air Conditioning Engineering* (5th ed.). Spon Press.
*   Kothandaraman, C P. (2023). *Data book- Refrigeration tables and charts including air conditioning data*. New Age International.
*   The American Society of Heating, Refrigerating and Air-Conditioning Engineers. ( ). *ASHRAE Handbook*.
*   Ananthanarayanan, P N. (2013). *Basic Refrigeration and Air Conditioning* (4th Edition). McGraw Hill.
*   Stoecker & Jons. (2nd ed.). *Refrigeration & Air-conditioning*. McGraw Hill.

---

This comprehensive set of notes covers the typical air conditioning processes, their theoretical basis, practical applications, and calculation methods, aligning with the stated learning and course outcomes. Remember to practice using the psychrometric chart extensively to solidify your understanding.