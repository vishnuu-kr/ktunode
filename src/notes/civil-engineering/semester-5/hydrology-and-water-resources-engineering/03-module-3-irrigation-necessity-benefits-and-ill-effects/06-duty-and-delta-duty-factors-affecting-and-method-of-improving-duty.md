---
title: "Duty and delta, duty-factors affecting and method of improving duty"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 3: Irrigation– Necessity, Benefits and ill effects"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d97"
status: "completed"
scrapedAt: "2026-05-20T18:49:21.547Z"
---
# Hydrology and Water Resources Engineering

## Module 3: Irrigation – Necessity, Benefits and Ill Effects

### Topic: Duty and Delta, Duty – Factors Affecting and Methods of Improving Duty

---

### Learning Outcomes:

*   **Understand and define:** Duty, Delta, and Base Period.
*   **Explain:** The relationship between Duty, Delta, and Base Period.
*   **Identify:** The various factors that affect the Duty of water.
*   **Describe:** Methods for improving the Duty of water.

---

### 1. Introduction to Duty and Delta

Irrigation is the artificial application of water to land to assist in the production of crops. The efficiency of irrigation is often measured by how effectively the water supplied is utilized by the crops. This leads us to the crucial concepts of Duty and Delta.

#### 1.1. Base Period ($B$)

*   **Definition:** The period, measured in days, during which water is supplied to a crop, starting from its sowing date to its harvesting date.
*   **Importance:** It's a fundamental parameter in calculating irrigation requirements.

#### 1.2. Delta ($\Delta$)

*   **Definition:** The total depth of water, measured in meters or centimeters, that a crop needs to grow to its full maturity. It represents the cumulative water requirement over the entire base period.
*   **Units:** Typically expressed in centimeters (cm) or meters (m).
*   **Origin of Water:** This water is supplied through rainfall and irrigation.

#### 1.3. Duty ($D$)

*   **Definition:** The area of land, measured in hectares or acres, that can be irrigated with a unit volume of water flowing continuously throughout the base period.
*   **Units:** Typically expressed in hectares per cumec (ha/cumec) or acres per cusec (acres/cusec).
*   **Conceptualization:** It's a measure of the "duty" or effectiveness of water in irrigating land. A higher Duty means more area can be irrigated with the same amount of water.

---

### 2. Relationship Between Duty, Delta, and Base Period

The relationship between Duty, Delta, and Base Period is fundamental to irrigation engineering and is derived from the principle of continuity of flow and water depth.

**Derivation:**

Consider a unit discharge of water flowing continuously for the base period.
Let:
*   $Q$ = Unit discharge = 1 cumec (cubic meters per second)
*   $B$ = Base period in days
*   $D$ = Duty in hectares/cumec
*   $\Delta$ = Delta in meters

1.  **Volume of water supplied:**
    The total volume of water supplied by 1 cumec flowing for $B$ days is:
    Volume $= Q \times B \times (\text{seconds in a day})$
    Volume $= 1 \text{ m}^3/\text{s} \times B \text{ days} \times 24 \text{ hours/day} \times 60 \text{ minutes/hour} \times 60 \text{ seconds/minute}$
    Volume $= 1 \times B \times 24 \times 60 \times 60 \text{ m}^3$
    Volume $= 86400 \times B \text{ m}^3$

2.  **Volume of water required for irrigation:**
    If the Duty is $D$ hectares, the area irrigated is $A = D$ hectares.
    1 hectare $= 10000 \text{ m}^2$.
    So, Area $= D \times 10000 \text{ m}^2$.

    The total depth of water required over this area is $\Delta$ meters.
    Volume of water required $= \text{Area} \times \text{Depth of water}$
    Volume required $= (D \times 10000 \text{ m}^2) \times \Delta \text{ m}$
    Volume required $= D \times 10000 \times \Delta \text{ m}^3$

3.  **Equating the volumes:**
    Since the volume supplied is equal to the volume required:
    $86400 \times B = D \times 10000 \times \Delta$

    Rearranging to find Duty:
    $D = \frac{86400 \times B}{10000 \times \Delta}$
    $D = \frac{8.64 \times B}{\Delta}$

    **Important Formula:**
    $$D = \frac{8.64 \times B}{\Delta}$$
    Where:
    *   $D$ is in hectares/cumec
    *   $B$ is in days
    *   $\Delta$ is in meters

    **Note:** If $\Delta$ is in centimeters, the formula becomes:
    $D = \frac{864 \times B}{\Delta}$ (where $D$ is in hectares/cumec, $B$ in days, $\Delta$ in cm)

---

### 3. Factors Affecting the Duty of Water

The Duty of water is not a fixed value; it varies significantly depending on several factors. These factors can be broadly categorized as:

#### 3.1. Crop Characteristics

*   **Type of Crop:** Different crops have different water requirements (reflected in their Delta). For example, rice requires more water than wheat or sugarcane.
    *   *High Duty Crops:* Crops with low water requirements (e.g., wheat, pulses).
    *   *Low Duty Crops:* Crops with high water requirements (e.g., rice, sugarcane).
*   **Root Zone Depth:** Deeper rooted crops can access moisture from a larger soil volume, potentially reducing the frequency and depth of irrigation needed.
*   **Stage of Growth:** Water requirements vary during different stages of crop growth. Maximum water is usually required during flowering and fruiting.
*   **Crop Rotation:** The sequence of crops can influence soil moisture and nutrient availability, affecting water use.

#### 3.2. Soil Characteristics

*   **Soil Type:**
    *   *Sandy soils:* High permeability, prone to deep percolation, leading to water loss. This reduces Duty.
    *   *Clayey soils:* Low permeability, retain moisture well, leading to higher Duty.
    *   *Loamy soils:* Moderate properties.
*   **Soil Depth:** Deeper soils can store more moisture, potentially reducing irrigation frequency.
*   **Soil Permeability/Infiltration Rate:** High infiltration rates can lead to increased losses and lower Duty.
*   **Soil Moisture Holding Capacity:** Soils with higher moisture holding capacity can sustain crops for longer periods between irrigations, improving Duty.

#### 3.3. Climatic Factors

*   **Temperature:** Higher temperatures increase evapotranspiration (ET) from the soil surface and transpiration from plants, thus increasing water demand and lowering Duty.
*   **Humidity:** Lower humidity increases ET and transpiration, reducing Duty.
*   **Wind Velocity:** Higher wind speeds increase ET and transpiration, reducing Duty.
*   **Rainfall:** The amount, intensity, and distribution of rainfall directly impact the amount of irrigation water needed. Effective rainfall reduces irrigation demand and can improve overall water use efficiency.
*   **Sunshine Hours:** More sunshine hours lead to higher ET and reduced Duty.

#### 3.4. Irrigation Methods and Practices

*   **Method of Irrigation:**
    *   *Surface irrigation (e.g., flooding, furrow):* Generally less efficient, with significant losses due to deep percolation and surface runoff. Leads to lower Duty.
    *   *Sprinkler irrigation:* More efficient than surface irrigation, reduces losses, leading to higher Duty.
    *   *Drip irrigation:* Most efficient method, delivers water directly to the root zone, minimizing evaporation and runoff. Results in the highest Duty.
*   **Irrigation Schedule/Frequency:** Frequent, shallow irrigations can be less efficient than less frequent, deeper irrigations, depending on soil type and crop.
*   **Timing of Irrigation:** Irrigating at the optimal time (when soil moisture is low but before wilting occurs) maximizes water use efficiency.
*   **Water Quality:** Saline water can require more irrigation water for leaching salts, potentially affecting Duty.

#### 3.5. Other Factors

*   **Conveyance Losses:** Seepage and evaporation from canals, channels, and pipelines reduce the amount of water reaching the field, effectively lowering the Duty at the field outlet.
*   **Application Losses:** Over-irrigation, runoff, and uneven distribution within the field reduce the efficiency of water application and lower Duty.
*   **Weed Growth:** Weeds compete with crops for water, increasing overall water demand and potentially lowering the effective Duty for the crop.
*   **Topography:** Steep slopes can lead to increased surface runoff, reducing water infiltration and potentially lowering Duty if not managed properly.

---

### 4. Methods of Improving the Duty of Water

Improving the Duty of water means ensuring that a greater area of land can be irrigated with the same amount of water, or achieving the same irrigated area with less water. This is crucial for maximizing the benefits of irrigation and conserving water resources.

#### 4.1. Improving Water Conveyance and Distribution Efficiency

*   **Lining of Canals:** Lining canals with concrete, brick, or plastic reduces seepage losses significantly, ensuring more water reaches the command area.
*   **Closed Conduits/Pipelines:** Using pipelines instead of open channels for water distribution further minimizes seepage and evaporation losses.
*   **Efficient Outlet Structures:** Designing and maintaining proper outlet structures (e.g., modules) ensures accurate and controlled water delivery to farmers.
*   **Regular Maintenance:** Prompt repair of leaks and breaches in the canal network prevents water loss.

#### 4.2. Improving Water Application Efficiency

*   **Adoption of Efficient Irrigation Methods:** Switching from inefficient surface irrigation to sprinkler or drip irrigation systems significantly improves application efficiency.
*   **Proper Land Leveling:** Leveling fields ensures uniform water distribution, preventing waterlogging in low areas and under-irrigation in high areas.
*   **Optimizing Irrigation Scheduling:**
    *   **Soil Moisture Monitoring:** Regularly checking soil moisture levels (e.g., using tensiometers, gravimetric methods) helps determine the exact time and amount of water needed, avoiding over-irrigation.
    *   **Crop Water Requirement Estimation:** Using crop-specific ET data and growth stage information to schedule irrigation accurately.
*   **Improved Agronomic Practices:**
    *   **Mulching:** Applying mulch (organic or plastic) to the soil surface reduces evaporation.
    *   **Weed Control:** Effective weed management reduces competition for water.
    *   **Appropriate Cropping Patterns:** Selecting crops suitable for the local climate and soil conditions, and considering water-efficient crop rotations.
*   **Flood Control:** Managing irrigation water to prevent excessive runoff.

#### 4.3. Reducing Evaporation Losses

*   **Evaporation Control Measures:** While difficult, measures like using floating covers on small water bodies can help reduce evaporation. However, for large-scale irrigation, focusing on efficient application methods is more practical.
*   **Surface Irrigation Techniques:** Techniques like border irrigation or basin irrigation can be managed to minimize surface water exposure time.

#### 4.4. Water Management and Policies

*   **Warabandi System:** In some regions, a rotational water supply system (like 'Warabandi') ensures equitable distribution, but it needs to be coupled with efficient application at the field level.
*   **On-farm Water Management:** Encouraging farmers to adopt water-saving practices through education, training, and subsidies.
*   **Water Pricing and Incentives:** Implementing water pricing mechanisms that encourage efficient use and providing incentives for adopting water-saving technologies.

---

### 5. Practice Questions and Exercises

**Question 1:**
Define Duty and Delta. State the relationship between Duty, Delta, and Base Period. If the Delta for a crop is 40 cm and its Base Period is 120 days, calculate the Duty in hectares/cumec.

**Answer 1:**
*   **Duty:** The area of land, measured in hectares, that can be irrigated with a unit discharge of water flowing continuously throughout the base period.
*   **Delta:** The total depth of water, measured in meters or centimeters, that a crop needs to grow to its full maturity over its base period.
*   **Relationship:** $D = \frac{8.64 \times B}{\Delta}$ (where $\Delta$ is in meters) or $D = \frac{864 \times B}{\Delta}$ (where $\Delta$ is in centimeters).

    Given: $\Delta = 40$ cm, $B = 120$ days.
    Using $D = \frac{864 \times B}{\Delta}$:
    $D = \frac{864 \times 120}{40} = 864 \times 3 = 2592$ hectares/cumec.

**Question 2:**
List and briefly explain any five factors that affect the Duty of water.

**Answer 2:**
1.  **Soil Type:** Sandy soils have high permeability, leading to more percolation and thus lower duty, while clayey soils retain moisture better, resulting in higher duty.
2.  **Climate (Temperature):** Higher temperatures increase evapotranspiration, leading to greater water demand and lower duty.
3.  **Irrigation Method:** Drip irrigation is highly efficient and delivers water directly to the root zone, resulting in higher duty compared to surface irrigation.
4.  **Crop Type:** Crops with high water requirements like rice have a larger Delta and thus a lower duty, while crops like wheat have lower Delta and higher duty.
5.  **Conveyance Losses:** Seepage and evaporation from canals reduce the water reaching the field, effectively lowering the duty.

**Question 3:**
What are the primary ways to improve the Duty of water in an irrigation system? Give at least three methods.

**Answer 3:**
1.  **Lining of Canals:** Reduces seepage losses during water conveyance.
2.  **Adoption of Efficient Irrigation Methods:** Switching to sprinkler or drip irrigation improves water application efficiency.
3.  **Optimizing Irrigation Scheduling:** Timely and adequate irrigation based on crop water needs and soil moisture reduces wastage.
4.  **Proper Land Leveling:** Ensures uniform water distribution in the field, minimizing losses due to runoff and deep percolation.

**Question 4 (Calculation):**
A culturable command area of 1000 hectares is to be irrigated by a canal. The base period of the crop is 100 days and its Delta is 50 cm. Calculate the discharge required in the canal to irrigate this area.

**Answer 4:**
First, calculate the Duty:
$D = \frac{864 \times B}{\Delta} = \frac{864 \times 100}{50} = 864 \times 2 = 1728$ hectares/cumec.

Now, use the Duty formula to find the required discharge ($Q$):
$D = \frac{\text{Area}}{\text{Discharge}}$
$Q = \frac{\text{Area}}{D} = \frac{1000 \text{ hectares}}{1728 \text{ hectares/cumec}} \approx 0.5787$ cumecs.

Therefore, the required discharge in the canal is approximately 0.579 cumecs.

---

### 6. Important Points to Remember

*   **Interdependence:** Duty, Delta, and Base Period are directly related and crucial for irrigation planning.
*   **Duty is an Efficiency Indicator:** Higher Duty means more efficient water use.
*   **Factors are Interconnected:** Changes in one factor (e.g., climate) can affect the impact of another (e.g., irrigation method).
*   **Improving Duty is Key to Water Conservation:** Implementing effective methods to improve Duty is essential for sustainable agriculture.
*   **Context Matters:** The "ideal" Duty varies significantly based on crop, soil, and climate.

---
