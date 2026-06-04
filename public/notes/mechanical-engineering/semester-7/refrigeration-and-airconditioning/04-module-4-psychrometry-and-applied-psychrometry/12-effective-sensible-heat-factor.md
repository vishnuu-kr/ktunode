---
title: "effective sensible heat factor"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f8a"
status: "completed"
scrapedAt: "2026-05-20T18:17:39.852Z"
---
## Refrigeration and Air Conditioning: Module 4 - Psychrometry and Applied Psychrometry

### Topic: Effective Sensible Heat Factor (ESHF)

This topic focuses on understanding how to evaluate the sensible cooling capacity of an air conditioning system in relation to its total cooling capacity, specifically when dealing with mixed air streams. This is crucial for designing and analyzing HVAC systems to ensure occupant comfort.

---

### Learning Outcomes Addressed:

*   **LO1:** Define and describe the effective sensible heat factor and its significance in air conditioning systems.
*   **LO2:** Understand the concept of mixed air and how it influences the effective sensible heat factor.
*   **LO3:** Calculate the effective sensible heat factor for various air mixing scenarios.
*   **LO4:** Apply the effective sensible heat factor concept to analyze the performance of air conditioning systems.
*   **LO5:** Interpret the effective sensible heat factor on a psychrometric chart.

---

### 1. Introduction to Sensible Heat Factor (SHF)

Before delving into the *effective* sensible heat factor, it's essential to recall the basic Sensible Heat Factor (SHF).

*   **Definition:** Sensible Heat Factor (SHF) is the ratio of sensible heat removed from the air to the total heat removed from the air. It represents the proportion of cooling that directly lowers the air temperature, as opposed to removing moisture.

    $SHF = \frac{Sensible\ Heat\ Removed}{Total\ Heat\ Removed}$

*   **Significance:**
    *   **Occupant Comfort:** Human comfort is primarily related to air temperature (sensible heat) and humidity (latent heat). A higher SHF generally means more temperature reduction and less dehumidification.
    *   **System Design:** Different applications require different SHFs. For example, data centers require high sensible cooling, while humid climates need significant latent cooling.
    *   **Energy Efficiency:** The ratio influences the efficiency of cooling coils and the overall energy consumption of the HVAC system.

*   **Basis of Calculation:** SHF is typically calculated for a single air stream passing through a cooling coil.

---

### 2. Understanding Mixed Air

In most air conditioning systems, the air supplied to the conditioned space is a mixture of **recirculated air** (air from the conditioned space) and **outdoor air** (fresh air from the environment).

*   **Recirculated Air:** This air has already been cooled and dehumidified by the air conditioning system and has picked up sensible and latent heat from the room. Its properties (temperature and humidity) will be closer to the desired room conditions.
*   **Outdoor Air:** This air's properties depend on the ambient weather conditions. It can be hot, humid, or cold and dry, requiring significant cooling, dehumidification, or heating, respectively.

*   **Mixing Process:** When these two air streams mix, the resulting mixed air has properties that are a weighted average of the individual streams. The mixing point is crucial for understanding the load on the cooling coil.

---

### 3. The Concept of Effective Sensible Heat Factor (ESHF)

The **Effective Sensible Heat Factor (ESHF)** is introduced when we consider the sensible heat removed by the cooling coil from **mixed air** in relation to the total heat removed from that mixed air.

*   **Definition:** ESHF is the ratio of sensible cooling capacity to the total cooling capacity of the air conditioning coil when handling mixed air.

    $ESHF = \frac{Sensible\ Cooling\ Capacity\ of\ Mixed\ Air}{Total\ Cooling\ Capacity\ of\ Mixed\ Air}$

*   **Why "Effective"?** The term "effective" signifies that this factor considers the properties of the *mixed* air stream, which might have different sensible and latent heat ratios compared to either the recirculated or outdoor air stream individually.

*   **Significance:** ESHF is a critical parameter for:
    *   **Cooling Coil Selection:** The ESHF of the mixed air dictates the required sensible and latent cooling capacity of the cooling coil.
    *   **Performance Analysis:** It helps in evaluating whether the cooling coil is effectively meeting the sensible and latent load requirements of the space.
    *   **Energy Consumption:** A mismatch between the ESHF of the mixed air and the ESHF capability of the coil can lead to overcooling or inadequate dehumidification, impacting energy efficiency.

---

### 4. Calculating ESHF

The calculation of ESHF involves determining the sensible and latent heat loads of the mixed air. This is best illustrated using the psychrometric chart.

**Steps to Calculate ESHF:**

1.  **Determine Properties of Recirculated Air ($T_{rec}, W_{rec}$):** These are typically the desired indoor conditions.
2.  **Determine Properties of Outdoor Air ($T_{out}, W_{out}$):** These are the ambient conditions.
3.  **Determine the Mixing Ratio:** This is the proportion of outdoor air and recirculated air in the mixture. Let $m_{oa}$ be the mass flow rate of outdoor air and $m_{ra}$ be the mass flow rate of recirculated air. The total mass flow rate of mixed air is $m_{mix} = m_{oa} + m_{ra}$.

    *   Fraction of outdoor air, $x_{oa} = \frac{m_{oa}}{m_{mix}}$
    *   Fraction of recirculated air, $x_{ra} = \frac{m_{ra}}{m_{mix}} = 1 - x_{oa}$

4.  **Calculate Properties of Mixed Air ($T_{mix}, W_{mix}$):** The properties of the mixed air are weighted averages of the properties of the recirculated and outdoor air.

    *   **Temperature:** $T_{mix} = x_{oa} \cdot T_{out} + x_{ra} \cdot T_{rec}$
    *   **Humidity Ratio:** $W_{mix} = x_{oa} \cdot W_{out} + x_{ra} \cdot W_{rec}$

5.  **Determine the Cooling Coil Process:** The mixed air passes through the cooling coil and is cooled to a certain state, typically at the apparatus dew point (ADP) or a bypass condition. For simplicity in ESHF calculation, we often assume the air is cooled to a state ($T_{coil}, W_{coil}$) from which it is then heated to the desired room condition.

    *   **Sensible Cooling (Mixed Air):** $Q_s = \dot{m}_{mix} \cdot c_{pa} \cdot (T_{mix} - T_{coil})$
    *   **Latent Cooling (Mixed Air):** $Q_l = \dot{m}_{mix} \cdot h_{fg} \cdot (W_{mix} - W_{coil})$ (where $h_{fg}$ is the latent heat of vaporization of water)
    *   **Total Cooling (Mixed Air):** $Q_{total} = Q_s + Q_l = \dot{m}_{mix} \cdot (h_{mix} - h_{coil})$

    Here, $h$ represents enthalpy.

6.  **Calculate ESHF:**

    $ESHF = \frac{Q_s}{Q_s + Q_l} = \frac{\dot{m}_{mix} \cdot c_{pa} \cdot (T_{mix} - T_{coil})}{\dot{m}_{mix} \cdot (h_{mix} - h_{coil})}$

**Using Psychrometric Chart:**

The calculation of mixed air properties and the subsequent cooling process can be visualized and simplified on a psychrometric chart.

*   **Mixing Line:** The properties of the mixed air ($T_{mix}, W_{mix}$) lie on a straight line connecting the properties of the outdoor air and the recirculated air on the psychrometric chart. The position of the mixed air point depends on the mixing ratio.
*   **Cooling Coil Line:** The cooling coil process is represented by a straight line from the mixed air condition to the coil's apparatus dew point (ADP) or the leaving air condition. The slope of this line represents the ESHF of the coil's performance.

---

### 5. Role of Apparatus Dew Point (ADP)

The Apparatus Dew Point (ADP) is the theoretical surface temperature of a cooling coil that would result in saturated air leaving the coil.

*   **Relationship with ESHF:** The ESHF of a cooling coil is directly related to its ADP. For a coil operating without a bypass, the air leaves the coil at its ADP.

    *   $ESHF_{coil} = \frac{T_{mix} - T_{ADP}}{h_{mix} - h_{ADP}}$ (This formula is a simplified representation and often requires more detailed psychrometric relationships for precise calculation).
    *   A higher ESHF implies a higher ADP relative to the entering air temperature.

*   **Bypass Factor:** In modern air conditioning systems, cooling coils often have a **bypass factor (BF)**. This means not all the air passes over the coil; some air bypasses it. The bypass factor influences the leaving air conditions and the effective ESHF of the cooling coil *as a whole*.
    *   The leaving air condition will be a mixture of air that has been cooled to ADP and air that has bypassed the coil.
    *   The ESHF of the system's cooling effect is influenced by the coil's ESHF and the bypass factor.

---

### 6. Example Calculation

Let's consider an air conditioning system with the following conditions:

*   **Recirculated Air:** $T_{rec} = 24^\circ C$, $W_{rec} = 0.010$ kg/kg dry air (Relative Humidity $\approx 50\%$)
*   **Outdoor Air:** $T_{out} = 35^\circ C$, $W_{out} = 0.018$ kg/kg dry air (Relative Humidity $\approx 50\%$)
*   **Outside Air Percentage:** 25% (meaning $x_{oa} = 0.25$, $x_{ra} = 0.75$)
*   **Cooling Coil Performance:** Assume the coil cools the air to $13^\circ C$ with a humidity ratio of $0.009$ kg/kg dry air.

**Calculations:**

1.  **Mixed Air Properties:**
    *   $T_{mix} = (0.25 \times 35) + (0.75 \times 24) = 8.75 + 18 = 26.75^\circ C$
    *   $W_{mix} = (0.25 \times 0.018) + (0.75 \times 0.010) = 0.0045 + 0.0075 = 0.012$ kg/kg dry air

2.  **Cooling Coil Process Properties:**
    *   Leaving Air Condition: $T_{coil} = 13^\circ C$, $W_{coil} = 0.009$ kg/kg dry air

3.  **Sensible and Latent Cooling (Mixed Air):**
    We need specific heat of air ($c_{pa} \approx 1.005 \text{ kJ/kg}^\circ C$) and latent heat of vaporization of water ($h_{fg} \approx 2501 \text{ kJ/kg}$). We also need the density of air to convert mass flow rate to volumetric flow rate (or vice versa), or work with mass flow rates directly. Assuming a mass flow rate of 1 kg/s for simplicity:

    *   $Q_s = \dot{m}_{mix} \cdot c_{pa} \cdot (T_{mix} - T_{coil})$
        $Q_s = 1 \text{ kg/s} \times 1.005 \text{ kJ/kg}^\circ C \times (26.75 - 13)^\circ C$
        $Q_s = 1.005 \times 13.75 = 13.819 \text{ kW}$

    *   To calculate latent heat precisely, we'd ideally use enthalpy difference, but we can approximate using humidity ratio difference if we assume $h_{fg}$ is constant.
        $Q_l = \dot{m}_{mix} \cdot h_{fg} \cdot (W_{mix} - W_{coil})$
        $Q_l = 1 \text{ kg/s} \times 2501 \text{ kJ/kg} \times (0.012 - 0.009)$ kg/kg dry air
        $Q_l = 2501 \times 0.003 = 7.503 \text{ kW}$

    *   **Total Cooling:** $Q_{total} = Q_s + Q_l = 13.819 + 7.503 = 21.322 \text{ kW}$

4.  **Effective Sensible Heat Factor (ESHF):**
    $ESHF = \frac{Q_s}{Q_{total}} = \frac{13.819}{21.322} \approx 0.648$

**Interpretation:** The ESHF of approximately 0.648 for this mixed air condition indicates that about 64.8% of the total cooling provided by the coil will be used for sensible cooling (temperature reduction), and the remaining 35.2% will be for latent cooling (dehumidification).

---

### 7. Practical Implications and Applications

*   **System Sizing:** If a space has a high sensible load and low latent load, an ESHF of around 0.8 to 0.9 might be desirable. If the latent load is high, a lower ESHF (e.g., 0.6 to 0.7) is needed.
*   **Comfort Control:** The ESHF is crucial for maintaining comfortable indoor conditions. An ESHF that is too low might lead to over-dehumidification and a "cold and clammy" feeling, while an ESHF that is too high might result in insufficient dehumidification, leading to a "muggy" atmosphere.
*   **Energy Savings:** By matching the ESHF of the system to the ESHF of the load, energy can be saved. For instance, using a coil with a lower ESHF than required for the load might lead to unnecessary dehumidification and reheating, wasting energy.
*   **Reheating:** If the cooling coil cools the air to a temperature below the desired room dew point to achieve sufficient dehumidification (resulting in a low ESHF), the air may need to be reheated to achieve the desired room temperature. This scenario is common in humid climates.

---

### 8. ESHF and Psychrometric Chart Visualization

*   **Mixing Line:** Plot the recirculated air state ($P_{rec}$) and the outdoor air state ($P_{out}$) on the psychrometric chart. Draw a straight line connecting them. The mixed air state ($P_{mix}$) lies on this line, positioned according to the mixing ratio.
*   **Cooling Coil Process Line:** Plot the mixed air state ($P_{mix}$) and the leaving air condition ($P_{coil}$) on the psychrometric chart. The slope of this line segment represents the ESHF of the cooling coil.
    *   A steeper slope (closer to vertical) indicates more latent cooling (lower ESHF).
    *   A shallower slope (closer to horizontal) indicates more sensible cooling (higher ESHF).

---

### 9. Important Points to Remember

*   ESHF is a property of the **cooling coil's performance on mixed air**.
*   It is the ratio of sensible cooling to total cooling for the **mixed air stream**.
*   The calculation requires understanding the properties of recirculated air, outdoor air, and their mixing ratio.
*   The psychrometric chart is an invaluable tool for visualizing mixing and cooling processes and determining ESHF.
*   ESHF is critical for proper HVAC system design, sizing, and performance analysis.
*   The concept of bypass factor on cooling coils influences the actual ESHF achieved by the coil.

---

### 10. Practice Questions and Exercises

**Question 1:**
Define Effective Sensible Heat Factor (ESHF) and explain its significance in air conditioning systems.

**Question 2:**
An air conditioning system conditions a mixture of outdoor air and recirculated air. The conditions are:
*   Outdoor air: $32^\circ C$ dry bulb, $24^\circ C$ wet bulb
*   Recirculated air: $25^\circ C$ dry bulb, $50\%$ relative humidity
*   Percentage of outdoor air: 30%
*   The cooling coil cools the mixed air to $14^\circ C$ dry bulb and $13^\circ C$ wet bulb.

Calculate:
a) The properties of the mixed air (dry bulb temperature, humidity ratio).
b) The sensible cooling load per kg of dry air.
c) The latent cooling load per kg of dry air.
d) The Effective Sensible Heat Factor (ESHF) for the cooling coil.

**Question 3:**
How does the percentage of outdoor air affect the ESHF of an air conditioning system, assuming other conditions remain constant?

---

### Answers to Practice Questions

**Answer 1:**
**Definition:** Effective Sensible Heat Factor (ESHF) is the ratio of the sensible cooling capacity to the total cooling capacity of an air conditioning coil when handling a mixture of outdoor and recirculated air. It quantifies the proportion of temperature reduction versus moisture removal for the mixed air.

**Significance:**
*   **Comfort:** It dictates the balance between temperature and humidity control, impacting occupant comfort.
*   **System Design:** Helps in selecting cooling coils that meet specific sensible and latent load requirements.
*   **Energy Efficiency:** Proper ESHF matching can prevent overcooling/over-dehumidification and reduce energy consumption.
*   **Performance Analysis:** Used to evaluate the effectiveness of the cooling coil in conditioning the mixed air.

**Answer 2:**

**(a) Properties of Mixed Air:**
First, let's find the humidity ratios for each stream:
*   Outdoor air: $32^\circ C$ DB, $24^\circ C$ WB. From psychrometric chart or tables (approximate values), $W_{out} \approx 0.0185$ kg/kg.
*   Recirculated air: $25^\circ C$ DB, 50% RH. From psychrometric chart or tables, $W_{rec} \approx 0.0098$ kg/kg.

Mixing Ratio:
*   $x_{oa} = 0.30$
*   $x_{ra} = 1 - 0.30 = 0.70$

Mixed Air Temperature:
*   $T_{mix} = x_{oa} \cdot T_{out} + x_{ra} \cdot T_{rec}$
    $T_{mix} = (0.30 \times 32^\circ C) + (0.70 \times 25^\circ C) = 9.6 + 17.5 = 27.1^\circ C$

Mixed Air Humidity Ratio:
*   $W_{mix} = x_{oa} \cdot W_{out} + x_{ra} \cdot W_{rec}$
    $W_{mix} = (0.30 \times 0.0185) + (0.70 \times 0.0098) = 0.00555 + 0.00686 = 0.01241$ kg/kg

**Mixed Air Properties:** $T_{mix} = 27.1^\circ C$, $W_{mix} = 0.01241$ kg/kg

**(b) Sensible Cooling Load ($q_s$):**
Assuming $c_{pa} = 1.005$ kJ/kg$^\circ C$
*   $q_s = c_{pa} \cdot (T_{mix} - T_{coil})$
    $q_s = 1.005 \text{ kJ/kg}^\circ C \times (27.1 - 14)^\circ C$
    $q_s = 1.005 \times 13.1 = 13.166$ kJ/kg

**(c) Latent Cooling Load ($q_l$):**
First, find the humidity ratio of the air leaving the coil. This is given as $13^\circ C$ WB. Assuming the coil leaves the air saturated at this temperature, $W_{coil} \approx W_{sat} \text{ at } 13^\circ C$. From psychrometric chart/tables, $W_{sat} \text{ at } 13^\circ C \approx 0.0095$ kg/kg.
Assuming $h_{fg} = 2500$ kJ/kg (approximate constant value):
*   $q_l = h_{fg} \cdot (W_{mix} - W_{coil})$
    $q_l = 2500 \text{ kJ/kg} \times (0.01241 - 0.0095)$ kg/kg
    $q_l = 2500 \times 0.00291 = 7.275$ kJ/kg

**(d) Effective Sensible Heat Factor (ESHF):**
*   Total Cooling Load ($q_{total}$) = $q_s + q_l = 13.166 + 7.275 = 20.441$ kJ/kg
*   $ESHF = \frac{q_s}{q_{total}} = \frac{13.166}{20.441} \approx 0.644$

**Answer 3:**
As the percentage of outdoor air increases (and recirculated air decreases), the mixed air properties will move closer to the outdoor air properties.
*   If outdoor air is hotter and more humid than the recirculated air, an increase in outdoor air percentage will lead to a higher mixed air temperature and humidity ratio. This typically results in a lower ESHF for the mixed air because the latent load contribution becomes more significant relative to the sensible load.
*   Conversely, if outdoor air is cooler and less humid, an increase in outdoor air percentage could potentially lead to a higher ESHF, but this is less common in typical cooling scenarios.

Therefore, generally, increasing the percentage of hotter, more humid outdoor air leads to a **lower ESHF** for the mixed air. This requires a cooling coil capable of providing more latent cooling.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 11. References and Further Reading

*   **Arora C.P. (2021).** *Refrigeration and Air Conditioning*. Tata McGraw hill. (Chapter on Psychrometry and Air Conditioning Processes)
*   **Arora Ramesh Chandra (2015).** *Refrigeration and Air Conditioning*. PHI. (Chapters related to psychrometric analysis and cooling load calculations)
*   **Arora S. C. and Domkundwar S. (2018).** *A Course in Refrigeration and Air Conditioning*. Dhanpat Rai and Company. (Sections on mixed air calculations and psychrometric processes)
*   **Ahamadul Ameen (2020).** *Refrigeration and air conditioning*. Eastern Economy Edition. (Content on air conditioning cycles and psychrometric applications)
*   **Jones W. P. (2001).** *Air Conditioning Engineering*. Spon Press. (Detailed analysis of psychrometric processes and system design, including ESHF)
*   **Kothandaraman C. P. (2023).** *Data book- Refrigeration tables and charts including air conditioning data*. New Age International. (Essential for looking up psychrometric properties and performing calculations)
*   **ASHRAE Handbooks:** Provide in-depth theoretical background and practical data on psychrometrics and HVAC system design.

---

This comprehensive set of notes covers the concept of Effective Sensible Heat Factor, its calculation, and practical implications, aligning with the learning outcomes and course objectives for Module 4 of Refrigeration and Air Conditioning.