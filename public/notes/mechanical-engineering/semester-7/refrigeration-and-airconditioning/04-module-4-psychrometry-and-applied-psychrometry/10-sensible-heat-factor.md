---
title: "sensible heat factor"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f88"
status: "completed"
scrapedAt: "2026-05-20T18:17:38.365Z"
---
# Refrigeration and Air Conditioning - Module 4: Psychrometry and Applied Psychrometry

## Topic: Sensible Heat Factor (SHF)

This topic delves into a crucial parameter in air conditioning, the Sensible Heat Factor (SHF), which dictates how cooling loads are managed within an HVAC system.

### Learning Outcomes Covered:

*   **Understanding Load Components:** Differentiate between sensible and latent heat loads in an air conditioning application. (Implicitly covered as SHF is derived from these)
*   **Psychrometric Processes:** Analyze how different air conditioning processes (e.g., cooling and dehumidification) affect the SHF. (Directly related to SHF calculations and interpretation)
*   **System Design and Selection:** Relate the SHF to the design and selection of air conditioning equipment, particularly cooling coils. (Core application of SHF)
*   **Performance Evaluation:** Evaluate the performance of air conditioning systems based on their ability to handle specific sensible and latent heat loads. (SHF provides a metric for this)

### Course Outcomes Alignment:

*   **CO1:** Define and describe the basic concepts and applications of refrigeration and air conditioning and analyze performance of ideal refrigeration cycles (Knowledge Level: K2, K4).
    *   This topic defines a key concept (SHF) in AC applications and enables analysis of AC system performance in handling heat loads.
*   **CO5:** Analyze properties of moist air using psychrometric principles and chart and explain the working principles and applications of air washers and air-conditioning systems. (Knowledge Level: K2, K4).
    *   SHF is a direct consequence of psychrometric principles and is fundamental to understanding the operation of air conditioning systems.

---

### 1. Introduction to Sensible Heat and Latent Heat

Before defining SHF, it's essential to understand the two primary components of heat that need to be removed or added in an air conditioning process:

*   **Sensible Heat:** The heat that causes a change in temperature of a substance without a change in its phase. In air conditioning, it's primarily the heat that needs to be removed to lower the dry-bulb temperature of the air.
    *   **Formula:** $Q_s = m \cdot c_p \cdot \Delta T$
        *   $Q_s$: Sensible heat (kJ or Btu)
        *   $m$: Mass of the substance (kg or lb)
        *   $c_p$: Specific heat of the substance at constant pressure (kJ/kg°C or Btu/lb°F)
        *   $\Delta T$: Change in temperature (°C or °F)
*   **Latent Heat:** The heat that causes a change in the phase of a substance without a change in its temperature. In air conditioning, it's primarily the heat associated with the condensation of water vapor from the air, which reduces humidity.
    *   **Formula:** $Q_l = m \cdot h_{fg}$
        *   $Q_l$: Latent heat (kJ or Btu)
        *   $m$: Mass of the substance undergoing phase change (kg or lb)
        *   $h_{fg}$: Specific latent heat of vaporization/condensation (kJ/kg or Btu/lb)

**Key Concept:** In an air conditioning process, both sensible and latent heat removal are usually required to achieve desired comfort conditions.

---

### 2. Defining Sensible Heat Factor (SHF)

The Sensible Heat Factor (SHF) is a dimensionless ratio that represents the proportion of sensible heat removed to the total heat (sensible + latent) removed from the air during an air conditioning process. It is a crucial parameter for sizing and selecting air conditioning equipment, especially cooling coils.

**Definition:**

$SHF = \frac{\text{Sensible Heat Load}}{\text{Total Heat Load}}$

$SHF = \frac{Q_s}{Q_t}$

Where:
*   $Q_s$ = Sensible heat removed (in the same units as $Q_t$)
*   $Q_t$ = Total heat removed = Sensible heat removed ($Q_s$) + Latent heat removed ($Q_l$)

**Relationship to Psychrometric Properties:**

On a psychrometric chart, the SHF can be visualized as the slope of the line representing the air conditioning process.

*   The slope of a constant enthalpy line (total heat removal) is related to the specific heat of moist air.
*   The slope of a constant dry-bulb temperature line (sensible heat removal) is infinitely steep.
*   The slope of a constant wet-bulb temperature line (adiabatic saturation) is also relevant.

The SHF value helps determine the required apparatus dew point (ADP) of the cooling coil.

---

### 3. Calculating SHF from Psychrometric Data

In air conditioning applications, the total heat and sensible heat are often calculated based on the change in psychrometric properties of the air.

**Formulas for Heat Transfer in Moist Air:**

*   **Sensible Heat Transfer ($Q_s$):**
    $Q_s = \dot{m}_a \cdot c_{p,a} \cdot (t_{in} - t_{out})$
    Where:
    *   $\dot{m}_a$: Mass flow rate of dry air (kg/s or lb/min)
    *   $c_{p,a}$: Specific heat of dry air (approx. 1.006 kJ/kg°C or 0.24 Btu/lb°F)
    *   $t_{in}$: Inlet dry-bulb temperature (°C or °F)
    *   $t_{out}$: Outlet dry-bulb temperature (°C or °F)

*   **Latent Heat Transfer ($Q_l$):**
    $Q_l = \dot{m}_a \cdot (w_{in} - w_{out}) \cdot h_{fg}$
    Where:
    *   $w_{in}$: Inlet humidity ratio (kg water/kg dry air or lb water/lb dry air)
    *   $w_{out}$: Outlet humidity ratio (kg water/kg dry air or lb water/lb dry air)
    *   $h_{fg}$: Latent heat of vaporization of water at the coil surface temperature (approx. 2500 kJ/kg or 1060 Btu/lb)

*   **Total Heat Transfer ($Q_t$):**
    $Q_t = \dot{m}_a \cdot (h_{in} - h_{out})$
    Where:
    *   $h_{in}$: Inlet enthalpy of moist air (kJ/kg dry air or Btu/lb dry air)
    *   $h_{out}$: Outlet enthalpy of moist air (kJ/kg dry air or Btu/lb dry air)

**Therefore, the SHF can be calculated as:**

$SHF = \frac{\dot{m}_a \cdot c_{p,a} \cdot (t_{in} - t_{out})}{\dot{m}_a \cdot (h_{in} - h_{out})}$

**Important Simplification:** Assuming $\dot{m}_a$ is constant and using approximate specific heat for air and neglecting the enthalpy change due to specific heat of water vapor:

$SHF \approx \frac{c_{p,a} \cdot (t_{in} - t_{out})}{c_{p,a} \cdot (t_{in} - t_{out}) + (w_{in} - w_{out}) \cdot h_{fg}}$

**Example Calculation:**

Consider an air stream entering an air conditioner at 35°C dry-bulb temperature and 50% relative humidity, and leaving at 24°C dry-bulb temperature and 60% relative humidity.

*   **Step 1: Find psychrometric properties at inlet conditions (35°C DB, 50% RH) using a psychrometric chart or calculator.**
    *   Assume: $t_{in} = 35^\circ C$, $w_{in} = 0.0205$ kg/kgda, $h_{in} = 85.6$ kJ/kgda
*   **Step 2: Find psychrometric properties at outlet conditions (24°C DB, 60% RH) using a psychrometric chart or calculator.**
    *   Assume: $t_{out} = 24^\circ C$, $w_{out} = 0.0128$ kg/kgda, $h_{out} = 51.5$ kJ/kgda
*   **Step 3: Calculate Sensible Heat removed ($Q_s$).**
    *   Let $\dot{m}_a = 1$ kg/s
    *   $Q_s = 1 \text{ kg/s} \cdot 1.006 \text{ kJ/kg}^\circ C \cdot (35^\circ C - 24^\circ C) = 11.066 \text{ kW}$
*   **Step 4: Calculate Latent Heat removed ($Q_l$).**
    *   $Q_l = 1 \text{ kg/s} \cdot (0.0205 - 0.0128) \text{ kg/kgda} \cdot 2500 \text{ kJ/kg} = 19.25 \text{ kW}$
*   **Step 5: Calculate Total Heat removed ($Q_t$).**
    *   $Q_t = Q_s + Q_l = 11.066 \text{ kW} + 19.25 \text{ kW} = 30.316 \text{ kW}$
    *   Alternatively, $Q_t = 1 \text{ kg/s} \cdot (85.6 - 51.5) \text{ kJ/kg} = 34.1 \text{ kW}$ (Note: Slight discrepancy due to approximations and chart reading)
*   **Step 6: Calculate Sensible Heat Factor (SHF).**
    *   $SHF = \frac{Q_s}{Q_t} = \frac{11.066 \text{ kW}}{30.316 \text{ kW}} \approx 0.365$
    *   Using the enthalpy difference calculation: $SHF = \frac{11.066 \text{ kW}}{34.1 \text{ kW}} \approx 0.324$

**Important Note:** The method of calculating $Q_t$ using enthalpy difference is more accurate as it accounts for all heat transfer mechanisms. The discrepancy arises from approximations in using $c_{p,a}$ for sensible heat and neglecting the specific heat of water vapor in the air. For precise calculations, always refer to psychrometric charts or thermodynamic property calculators.

---

### 4. Range of SHF Values and Their Significance

The Sensible Heat Factor (SHF) typically ranges from 0 to 1.

*   **SHF = 1:** This occurs when only sensible heat is removed, and no latent heat is removed. This is the case in pure sensible cooling.
    *   *Example:* Cooling air without changing its humidity. This is rarely achieved in practical air conditioning of occupied spaces, but can be approximated in some industrial processes or with specialized equipment.
*   **SHF < 1:** This indicates that both sensible and latent heat are being removed. The lower the SHF, the greater the proportion of latent heat removal.
    *   *Example:* Standard comfort air conditioning where cooling and dehumidification are both necessary.
*   **SHF = 0:** This would imply only latent heat is removed, which is theoretically impossible in a simple cooling process involving air.
*   **SHF > 1:** This is not physically possible in a pure cooling process. An SHF greater than 1 might indicate a situation where there is a sensible heat *gain* or a misinterpretation of the load.

**Typical SHF Values in Air Conditioning:**

*   **Comfort Air Conditioning:** Typically ranges from **0.65 to 0.85**.
    *   A value of 0.75 is often used as a general guideline for residential and commercial spaces.
    *   The specific SHF depends on the internal loads (occupants, equipment, lighting) and the ventilation air conditions.
*   **Specific Applications:**
    *   **Hospitals, Laboratories, Cleanrooms:** May require higher SHFs (e.g., 0.8 to 0.9) to maintain precise temperature control without excessive dehumidification, which can be detrimental to sensitive equipment or processes.
    *   **Swimming Pool Dehumidification:** Requires very low SHFs (e.g., 0.3 to 0.5) as the primary goal is moisture removal.
    *   **Industrial Processes:** Can have a wide range of SHFs depending on the specific requirements.

---

### 5. Apparatus Dew Point (ADP) and its Relation to SHF

The **Apparatus Dew Point (ADP)** is the theoretical surface temperature of the cooling coil that would bring the air to saturation (100% relative humidity) at the leaving dry-bulb temperature. In simpler terms, it's the dew point temperature of the air leaving the cooling coil.

**Relationship:**

The cooling coil process on a psychrometric chart is typically represented by a straight line connecting the inlet air state point to the desired outlet air state point. The apparatus dew point is the theoretical point on this line where the air is saturated.

*   For **sensible cooling only (SHF = 1)**, the outlet air has a lower dry-bulb temperature but the same humidity ratio and dew point as the inlet air. The ADP would be equal to the outlet dry-bulb temperature.
*   For **cooling and dehumidification (SHF < 1)**, the cooling coil surface temperature must be below the dew point of the entering air to cause condensation. The ADP is the dew point temperature of the leaving air.
*   The **lower the SHF**, the more latent heat is being removed. This means the coil must cool the air to a lower dew point, resulting in a **lower ADP**.

**Practical Implication:**

The ADP is a critical parameter in coil selection. If the ADP is too low, the air can become overcooled and over-dehumidified, requiring reheating. If the ADP is too high, the coil may not effectively remove sufficient moisture.

**Formula relating SHF and ADP:**

$SHF = \frac{t_{out} - t_{coil}}{t_{in} - t_{coil}}$ (This is a simplified relation and assumes ideal conditions)

A more practical approach is to determine the required ADP from the desired outlet air conditions based on the psychrometric chart. The cooling coil's surface temperature is typically set slightly below the desired ADP.

---

### 6. Impact of Different Psychrometric Processes on SHF

Different air conditioning processes involve varying combinations of sensible and latent heat transfer, thus affecting the SHF.

*   **Sensible Cooling:**
    *   Process: Dry-bulb temperature decreases, humidity ratio remains constant.
    *   SHF: 1 (or very close to 1).
    *   *Example:* Cooling air through a finned coil that is kept above the dew point of the air.

*   **Sensible Heating:**
    *   Process: Dry-bulb temperature increases, humidity ratio remains constant.
    *   SHF: Defined for cooling, but conceptually, if we consider heat addition, it's all sensible.

*   **Dehumidification (Cooling and Drying):**
    *   Process: Dry-bulb temperature decreases, humidity ratio decreases (water vapor condenses).
    *   SHF: Less than 1, depending on the amount of moisture removed.
    *   *Example:* Standard air conditioning cooling coil operation.

*   **Humidification (Heating and Adding Moisture):**
    *   Process: Dry-bulb temperature increases, humidity ratio increases.
    *   SHF: Not applicable as it's a heating and humidification process.

*   **Cooling and Humidification:**
    *   Process: Dry-bulb temperature decreases, humidity ratio increases (e.g., evaporative cooling).
    *   SHF: Cannot be directly defined in the same way as cooling, as there's a sensible heat removal and latent heat addition.

*   **Adiabatic Saturation (Cooling Tower/Evaporative Cooler):**
    *   Process: Air is cooled to its wet-bulb temperature by evaporating water. The enthalpy remains constant.
    *   SHF: Not applicable in the traditional sense of cooling coil performance.

*   **Reheating:**
    *   Process: Air is heated after cooling and dehumidification to achieve the desired room temperature.
    *   SHF: This is a post-cooling process. If considered in conjunction with the initial cooling, the overall SHF of the combined process will be higher.

---

### 7. Equipment Selection and Application of SHF

The SHF is a critical factor in selecting the appropriate air conditioning equipment, particularly the cooling coil.

*   **Cooling Coil Design:** Cooling coils are designed to remove a certain amount of sensible heat and a certain amount of latent heat. The ratio of these two quantities dictates the coil's performance characteristics and its required surface temperature (or ADP).
    *   **High SHF requirement:** Requires a coil designed for efficient sensible cooling. This typically means a larger coil surface area and a higher entering air temperature relative to the coil's surface temperature.
    *   **Low SHF requirement:** Requires a coil designed for effective dehumidification. This necessitates a coil surface temperature below the dew point of the entering air and often a deeper coil (more rows) to maximize contact time for condensation.

*   **Chilled Water Systems:** The chilled water temperature supplied to the cooling coil is a primary factor in determining the ADP and thus the SHF achievable.
    *   Lower chilled water temperatures lead to lower coil surface temperatures and lower ADPs, favoring more latent heat removal (lower SHF).
    *   Higher chilled water temperatures lead to higher coil surface temperatures and higher ADPs, favoring more sensible heat removal (higher SHF).

*   **DX (Direct Expansion) Systems:** The refrigerant temperature in the evaporator coil directly influences the ADP and SHF.

*   **Air Handling Units (AHUs):** The selection of AHUs and their cooling coils depends heavily on the calculated SHF of the conditioned space.

*   **Zoning and Control:** In multi-zone systems, different zones may have different SHFs, requiring careful selection and control of AHUs to meet the diverse requirements.

**Example:**

A meeting room with 20 people and 2 kW of lighting load has an internal sensible heat gain of 5 kW and a latent heat gain of 3 kW.

*   Total Sensible Load ($Q_s$) = 5 kW
*   Total Latent Load ($Q_l$) = 3 kW
*   Total Load ($Q_t$) = $5 \text{ kW} + 3 \text{ kW} = 8 \text{ kW}$
*   $SHF = \frac{5 \text{ kW}}{8 \text{ kW}} = 0.625$

This SHF of 0.625 indicates a significant amount of latent heat to be removed. The cooling coil must be selected to effectively handle this dehumidification requirement. A coil with a low ADP will be needed, potentially requiring lower chilled water temperatures or a more robust coil design.

---

### 8. Practice Questions and Exercises

**Question 1:**
Define Sensible Heat Factor (SHF) and provide its formula. Explain its significance in air conditioning.

**Answer:**
SHF is the ratio of sensible heat removed to the total heat removed from the air.
Formula: $SHF = \frac{\text{Sensible Heat Load}}{\text{Total Heat Load}} = \frac{Q_s}{Q_t}$
Significance: It helps in understanding the proportion of sensible and latent cooling required, which is crucial for selecting and designing air conditioning equipment like cooling coils.

**Question 2:**
An air stream enters an AHU at 30°C DB and 60% RH and leaves at 22°C DB and 55% RH. Calculate the SHF for this process, assuming a mass flow rate of 1 kg/s of dry air. Use approximate values from a psychrometric chart:
Inlet: $w_{in} = 0.0170$ kg/kgda, $h_{in} = 69.5$ kJ/kgda
Outlet: $w_{out} = 0.0114$ kg/kgda, $h_{out} = 46.5$ kJ/kgda

**Answer:**
*   Inlet Dry-bulb Temperature ($t_{in}$) = 30°C
*   Outlet Dry-bulb Temperature ($t_{out}$) = 22°C
*   $c_{p,a} \approx 1.006$ kJ/kg°C
*   $h_{fg} \approx 2500$ kJ/kg

Sensible Heat Removed ($Q_s$):
$Q_s = \dot{m}_a \cdot c_{p,a} \cdot (t_{in} - t_{out})$
$Q_s = 1 \text{ kg/s} \cdot 1.006 \text{ kJ/kg}^\circ C \cdot (30^\circ C - 22^\circ C)$
$Q_s = 8.048 \text{ kW}$

Latent Heat Removed ($Q_l$):
$Q_l = \dot{m}_a \cdot (w_{in} - w_{out}) \cdot h_{fg}$
$Q_l = 1 \text{ kg/s} \cdot (0.0170 - 0.0114) \text{ kg/kgda} \cdot 2500 \text{ kJ/kg}$
$Q_l = 14.0 \text{ kW}$

Total Heat Removed ($Q_t$):
$Q_t = Q_s + Q_l = 8.048 \text{ kW} + 14.0 \text{ kW} = 22.048 \text{ kW}$

Alternatively, using enthalpy:
$Q_t = \dot{m}_a \cdot (h_{in} - h_{out})$
$Q_t = 1 \text{ kg/s} \cdot (69.5 - 46.5) \text{ kJ/kg} = 23.0 \text{ kW}$
(Note: Slight discrepancy is expected due to approximation of psychrometric values and $h_{fg}$.)

Using the enthalpy-based total heat for calculation:
$SHF = \frac{Q_s}{Q_t} = \frac{8.048 \text{ kW}}{23.0 \text{ kW}} \approx 0.35$

**Question 3:**
What is the typical range of SHF for comfort air conditioning, and what does a low SHF value indicate?

**Answer:**
The typical range of SHF for comfort air conditioning is between 0.65 and 0.85. A low SHF value (e.g., below 0.6) indicates that a significant portion of the cooling load is latent heat, meaning substantial dehumidification is required.

**Question 4:**
Explain the concept of Apparatus Dew Point (ADP) and how it relates to the Sensible Heat Factor (SHF).

**Answer:**
ADP is the theoretical dew point temperature of the air leaving the cooling coil. It represents the saturation temperature to which the air is cooled. A lower ADP means more moisture is removed, indicating a lower SHF. Conversely, a higher ADP means less moisture is removed and more sensible cooling occurs, indicating a higher SHF. The ADP is directly influenced by the coil surface temperature, which is manipulated to achieve the desired SHF.

---

### 9. Important Points to Remember

*   **SHF is dimensionless.**
*   **SHF quantifies the ratio of sensible to total cooling.**
*   **Comfort cooling typically requires SHFs between 0.65 and 0.85.**
*   **Low SHFs imply significant dehumidification.**
*   **High SHFs imply predominantly sensible cooling.**
*   **The ADP of a cooling coil is directly related to the SHF.** A lower ADP corresponds to a lower SHF.
*   **Accurate psychrometric data is crucial for calculating SHF.** Always use psychrometric charts or software for precise values.
*   **SHF is a key parameter for selecting cooling coils and determining chilled water temperatures.**
*   **Ventilation air conditions and internal loads significantly impact the overall SHF requirement of a space.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 10. References

*   **Arora C.P, Refrigeration and Air Conditioning (Tata McGraw hill, 4th edition/2021):** Chapter 10 (Psychrometry), specific sections on cooling and dehumidification processes and their thermodynamic analysis.
*   **Arora Ramesh Chandra, Refrigeration and Air Conditioning (PHI, 4th Printing/2015):** Similar coverage on psychrometric principles and applications, with potential examples of SHF calculations.
*   **Arora S. C. and S. Domkundwar, A Course in Refrigeration and Air Conditioning (Dhanpat Rai and Company., 2018):** Likely to have dedicated sections explaining psychrometric processes and the significance of SHF in coil selection.
*   **Ahamadul Ameen, Refrigeration and Air conditioning (Eastern economy addition, 2020):** Provides fundamentals of psychrometry, heat and mass transfer in air conditioning, and calculations involving sensible and latent heat.
*   **Jones W P, Air Conditioning Engineering (Spon Press, 5th edition/ 2001):** Offers a comprehensive engineering perspective on psychrometric applications, including detailed discussions on coil design and SHF in practice.
*   **Kothandaraman C P, Data book- Refrigeration tables and charts including air conditioning data (New Age International., 2023):** Essential for obtaining accurate psychrometric properties required for SHF calculations.
*   **ASHRAE Handbook:** Provides industry standards, design data, and detailed explanations of psychrometric principles and applications in HVAC.

---