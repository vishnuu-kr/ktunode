---
title: "Simple air conditioning system"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f8b"
status: "completed"
scrapedAt: "2026-05-20T18:17:40.566Z"
---
# Module 4: Psychrometry and Applied Psychrometry - Simple Air Conditioning System

This module focuses on understanding the thermodynamic properties of moist air and how these properties change during various air conditioning processes. We will then apply these principles to analyze simple air conditioning systems.

**Relevant Course Outcomes:**

*   **CO5:** Analyze properties of moist air using psychrometric principles and chart and explain the working principles and applications of air washers and air-conditioning systems. (Knowledge Level: K2, K4)

---

## 1. Introduction to Air Conditioning

Air conditioning (AC) is the process of treating air to simultaneously control its temperature and humidity to meet the requirements of a ventilated space.

**Key Concepts:**

*   **Comfort Air Conditioning:** Aims to provide thermal comfort to human occupants. This typically involves maintaining a specific temperature and humidity range.
*   **Process Air Conditioning:** Aims to control air properties for specific industrial processes, where precise temperature and humidity control might be critical for product quality or manufacturing efficiency.

**Importance:**

*   **Human Comfort:** Enhances productivity, well-being, and health.
*   **Industrial Applications:** Crucial for manufacturing, storage, and processing of various goods (e.g., pharmaceuticals, electronics, food).

**Textbook References:**

*   **Arora C.P (2021):** Chapter 1, Introduction to Air Conditioning.
*   **Ahamadul Ameen (2020):** Chapter 1, Introduction.

---

## 2. Properties of Moist Air

Moist air is a mixture of dry air and water vapor. Understanding its properties is fundamental to psychrometry.

**Key Concepts & Definitions:**

*   **Dry Air:** Air that contains no water vapor. It is primarily composed of nitrogen (N₂), oxygen (O₂), argon (Ar), carbon dioxide (CO₂), and trace amounts of other gases.
*   **Moist Air:** A mixture of dry air and water vapor.
*   **Humidity:** The amount of water vapor present in the air.
*   **Specific Humidity (ω or w):** The mass of water vapor per unit mass of dry air.
    *   **Formula:** $\omega = \frac{m_v}{m_a}$
    *   Where:
        *   $m_v$ = mass of water vapor
        *   $m_a$ = mass of dry air
    *   **Derived Formula (using partial pressures):** $\omega = 0.622 \frac{P_v}{P_a}$
        *   $P_v$ = partial pressure of water vapor
        *   $P_a$ = partial pressure of dry air
        *   $P_a = P - P_v$ (where P is the total atmospheric pressure)
        *   So, $\omega = 0.622 \frac{P_v}{P - P_v}$
*   **Relative Humidity (RH or $\phi$):** The ratio of the actual partial pressure of water vapor in the air to the saturation partial pressure of water vapor at the same temperature, expressed as a percentage.
    *   **Formula:** $RH = \frac{P_v}{P_{g}} \times 100\%$
    *   Where:
        *   $P_v$ = partial pressure of water vapor
        *   $P_g$ = saturation pressure of water vapor at the given dry-bulb temperature.
*   **Saturation:** The state where the air holds the maximum possible amount of water vapor at a given temperature and pressure. At saturation, $RH = 100\%$.
*   **Dew Point Temperature ($T_{dp}$):** The temperature to which air must be cooled at constant pressure and constant specific humidity for saturation to occur. At the dew point temperature, the partial pressure of water vapor equals the saturation pressure at that temperature.
*   **Dry-Bulb Temperature ($T_{db}$):** The temperature of the air as measured by a standard thermometer, unaffected by humidity.
*   **Wet-Bulb Temperature ($T_{wb}$):** The temperature read by a thermometer when its bulb is covered in a wet cloth exposed to the air. It reflects the cooling effect of evaporation.
*   **Adiabatic Saturation Temperature:** The temperature reached by air when it is cooled adiabatically by evaporation of water into it until it becomes saturated. In many practical cases, this is close to the wet-bulb temperature.

**Important Points to Remember:**

*   Specific humidity depends only on the partial pressure of water vapor and total pressure.
*   Relative humidity is a measure of how "full" the air is with water vapor compared to its maximum capacity at that temperature.
*   Dew point temperature is a direct indicator of the actual amount of water vapor in the air (since $P_v = P_g(T_{dp})$).

**Textbook References:**

*   **Arora C.P (2021):** Chapter 4, Psychrometry, Sections 4.1-4.3.
*   **Ramesh Chandra Arora (2015):** Chapter 4, Psychrometric Properties of Air.
*   **Ahamadul Ameen (2020):** Chapter 2, Psychrometric Properties of Moist Air.

---

## 3. The Psychrometric Chart

The psychrometric chart is a graphical representation of the thermodynamic properties of moist air at a standard atmospheric pressure (usually 1 atm or 101.325 kPa). It is an indispensable tool for analyzing air conditioning processes.

**Key Features of a Psychrometric Chart:**

*   **Axes:** Typically, the horizontal axis represents dry-bulb temperature ($T_{db}$), and the vertical axis represents specific humidity ($\omega$) or humidity ratio.
*   **Lines:**
    *   **Constant Dry-Bulb Temperature Lines:** Vertical lines.
    *   **Constant Specific Humidity Lines:** Horizontal lines.
    *   **Constant Relative Humidity Lines:** Curved lines, with $100\%$ RH being the saturation curve.
    *   **Constant Wet-Bulb Temperature Lines:** Diagonal lines, generally steeper than constant enthalpy lines.
    *   **Constant Enthalpy Lines:** Diagonal lines, often nearly parallel to wet-bulb temperature lines.
    *   **Constant Dew Point Temperature Lines:** Horizontal lines, coinciding with constant specific humidity lines.
    *   **Lines of Constant Specific Volume:** Curved lines.

**How to use the Psychrometric Chart:**

1.  Locate the intersection of the dry-bulb temperature and specific humidity (or wet-bulb temperature) to determine the state of the air.
2.  Read off other properties (RH, dew point temperature, enthalpy, specific volume) from the corresponding lines on the chart.

**Important Note:** The psychrometric chart is based on standard atmospheric pressure. For air conditioning calculations at different altitudes or pressures, the chart must be adjusted, or calculations must be done manually.

**Textbook References:**

*   **Arora C.P (2021):** Chapter 4, Psychrometry, Section 4.4 Psychrometric Chart.
*   **Kothandaraman C.P (2023):** Chapter 2, Psychrometric Charts and Tables, Section 2.1 Properties of moist air and psychrometric chart.
*   **Ahamadul Ameen (2020):** Chapter 3, The Psychrometric Chart.

---

## 4. Psychrometric Processes

These are the fundamental processes that occur in air conditioning systems, where the state of moist air is changed.

**Key Processes:**

*   **Sensible Heating:**
    *   **Description:** Increasing the dry-bulb temperature of air without changing its specific humidity.
    *   **On Psychrometric Chart:** Movement horizontally to the right.
    *   **Example:** Passing air over a heated coil.
    *   **Formula for Heat Added:** $Q_s = m_a \cdot c_{pa} \cdot (T_{db2} - T_{db1})$
        *   $m_a$ = mass flow rate of dry air
        *   $c_{pa}$ = specific heat of dry air at constant pressure (approx. 1.005 kJ/kg·K)

*   **Sensible Cooling:**
    *   **Description:** Decreasing the dry-bulb temperature of air without changing its specific humidity.
    *   **On Psychrometric Chart:** Movement horizontally to the left.
    *   **Example:** Passing air over a cooled coil with surface temperature above the dew point.
    *   **Formula for Heat Removed:** $Q_s = m_a \cdot c_{pa} \cdot (T_{db1} - T_{db2})$

*   **Cooling and Dehumidification:**
    *   **Description:** Decreasing both the dry-bulb temperature and specific humidity of air. This occurs when air is cooled below its dew point temperature.
    *   **On Psychrometric Chart:** Movement diagonally down and to the left.
    *   **Example:** Passing air over a cooling coil with a surface temperature below the dew point of the air. The excess water vapor condenses on the coil.
    *   **Heat Transfer:** Consists of both sensible cooling and latent heat removal (due to condensation). Total heat removed $Q_t = m_a \cdot (h_1 - h_2)$, where $h$ is enthalpy.

*   **Heating and Humidification:**
    *   **Description:** Increasing both the dry-bulb temperature and specific humidity of air.
    *   **On Psychrometric Chart:** Movement diagonally up and to the right.
    *   **Example:** Passing air over a heated coil and injecting steam into the air.
    *   **Heat and Moisture Added:** $Q_t + m_{wi} \cdot h_{wi} = m_a \cdot (h_2 - h_1)$, where $m_{wi}$ is the mass of injected water and $h_{wi}$ is its enthalpy.

*   **Humidification (without heating):**
    *   **Description:** Increasing the specific humidity of air at a constant dry-bulb temperature. This is often referred to as **adiabatic humidification** if no external heat is added or removed.
    *   **On Psychrometric Chart:** Movement horizontally to the right (if steam is injected) or diagonally up and right (if water evaporates without external heat, leading to a slight temperature drop - approximating adiabatic saturation).
    *   **Example:** Injecting steam into the air stream. Evaporative cooling (discussed later) is another form of humidification with cooling.

*   **Dehumidification (without cooling):**
    *   **Description:** Decreasing the specific humidity of air at a constant dry-bulb temperature. This is a more complex process and usually involves refrigeration or desiccant systems.
    *   **On Psychrometric Chart:** Movement horizontally to the left (if desiccant is used) or a complex curve if refrigeration is used without significant sensible cooling.

*   **Adiabatic Saturation (or Evaporative Cooling):**
    *   **Description:** Air is passed over a wetted surface (e.g., a spray of water or a saturated porous pad) in an adiabatic process. Water evaporates into the air, increasing its humidity and decreasing its temperature.
    *   **On Psychrometric Chart:** Movement along a constant wet-bulb temperature line (ideally). In reality, it's close to a constant enthalpy line. The dry-bulb temperature decreases, and the specific humidity increases.
    *   **Example:** Evaporative coolers, commonly used in dry climates.
    *   **Key Characteristic:** The air leaving is closer to saturation at its initial wet-bulb temperature.

*   **Mixing of Air Streams:**
    *   **Description:** Two or more air streams at different states are mixed to produce an air stream at an intermediate state.
    *   **On Psychrometric Chart:** The resulting state point lies on a straight line connecting the initial state points of the mixed streams. The location on the line depends on the mass flow rates of the streams.
    *   **Formula (for mixing two streams):**
        *   $m_{a3} = m_{a1} + m_{a2}$
        *   $m_{a3} \omega_3 = m_{a1} \omega_1 + m_{a2} \omega_2$
        *   $m_{a3} h_3 = m_{a1} h_1 + m_{a2} h_2$

**Textbook References:**

*   **Arora C.P (2021):** Chapter 4, Psychrometry, Section 4.5 Psychrometric Processes.
*   **Ramesh Chandra Arora (2015):** Chapter 5, Psychrometric Processes.
*   **Ahamadul Ameen (2020):** Chapter 4, Psychrometric Processes.

---

## 5. Simple Air Conditioning Systems

These systems utilize the psychrometric processes described above to condition air for comfort or specific applications.

**Components of a Typical Simple AC System:**

1.  **Evaporator Coil (Cooling Coil):** Removes sensible and latent heat from the air. The surface temperature is typically below the dew point to achieve dehumidification.
2.  **Reheat Coil (Optional):** Used to increase the dry-bulb temperature of the air after cooling and dehumidification to achieve the desired supply air temperature.
3.  **Humidifier (Optional):** Adds moisture to the air if the process requires higher humidity.
4.  **Fan:** Circulates the air through the system and the conditioned space.
5.  **Filters:** Remove dust and other particulate matter from the air.
6.  **Ductwork:** Carries the conditioned air to and from the space.

**Basic Air Conditioning Cycles/Configurations:**

*   **Cooling and Dehumidification Only:** Air is passed over a cooling coil whose surface temperature is below the dew point of the incoming air.
    *   **Process:** Cooling and Dehumidification (e.g., 1 to 2 on the psych chart).
    *   **Limitation:** If the cooling coil is too cold, the air can become too cool and too dry for comfort.

*   **Cooling, Dehumidification, and Reheating:**
    *   **Process:**
        1.  Cooling and Dehumidification (e.g., State 1 to State 2 on the psych chart). This step cools the air below the desired supply air temperature and dehumidifies it.
        2.  Reheating (e.g., State 2 to State 3 on the psych chart). The dehumidified air is then reheated to the desired supply air temperature.
    *   **Benefit:** Allows for precise control of both temperature and humidity, regardless of the cooling coil's performance.
    *   **Energy Consideration:** Reheating requires additional energy input, making it less energy-efficient if not strictly necessary.

*   **Cooling and Humidification (Evaporative Cooling):**
    *   **Process:** Air is cooled and humidified adiabatically.
    *   **Example:** Used in dry climates.
    *   **Limitation:** Effectiveness is limited by the wet-bulb depression of the incoming air. It can only bring the air towards saturation at the initial wet-bulb temperature.

*   **Heating and Humidification:**
    *   **Process:** Air is heated by a heating coil, and moisture is added using a humidifier (e.g., steam injection).
    *   **Example:** Used in cold climates during winter.

**Example Scenario: Comfort Air Conditioning**

Consider a space that requires 24°C dry-bulb temperature and 50% relative humidity. The return air from the space is at 26°C and 60% RH. The outside air is at 35°C and 70% RH.

A simple AC system might involve mixing a portion of return air with a portion of fresh outside air, followed by cooling and dehumidification, and then reheating to the desired supply air conditions.

Let's analyze a simplified system without mixing for now, focusing on conditioning return air:

**Case: Conditioning Return Air**

*   **Initial State (Return Air):** $T_{db1} = 26^\circ C$, $RH_1 = 60\%$.
*   **Desired Supply Air State:** $T_{db\_supply} = 24^\circ C$, $RH_{supply} = 50\%$.

**Process:**

1.  **Cooling and Dehumidification:** Air is cooled to a state where it has enough moisture removed to reach the desired humidity, and its temperature is also reduced. Let's assume the cooling coil cools the air to $T_{db2} = 15^\circ C$. From the psych chart, we find the corresponding specific humidity. Suppose the state after cooling is $T_{db2} = 15^\circ C$ and $\omega_2$.
2.  **Reheating:** The air at state 2 is reheated to the supply air temperature. $T_{db3} = 24^\circ C$, and the specific humidity $\omega_3 = \omega_2$ remains unchanged during reheating.

**Calculations (Illustrative using hypothetical values from psych chart):**

*   From psych chart, for $T_{db1} = 26^\circ C$, $RH_1 = 60\%$:
    *   $\omega_1 \approx 0.0137$ kg/kg dry air
    *   $h_1 \approx 52.5$ kJ/kg dry air
    *   $T_{dp1} \approx 18.2^\circ C$
*   Assume cooling coil surface is at $10^\circ C$. The air leaves the coil at $T_{db2} = 15^\circ C$.
    *   From psych chart, for $T_{db2} = 15^\circ C$, $RH_2 = 95\%$ (or we could specify a leaving condition, e.g., $T_{db2}=15^\circ C, T_{wb2}=13^\circ C$):
        *   $\omega_2 \approx 0.0098$ kg/kg dry air
        *   $h_2 \approx 38.5$ kJ/kg dry air
        *   $T_{dp2} \approx 14.2^\circ C$
*   Now reheat the air from state 2 to the desired supply temperature of $24^\circ C$.
    *   State 3: $T_{db3} = 24^\circ C$, $\omega_3 = \omega_2 = 0.0098$ kg/kg dry air.
    *   From psych chart, for state 3:
        *   $h_3 \approx 49.5$ kJ/kg dry air
        *   $RH_3 \approx 38\%$ (This would be the supply air condition)

This example illustrates that to achieve 50% RH at 24°C, the air needs to be cooled below its dew point (which is 18.2°C for return air) to remove moisture, and then reheated. If the desired supply condition was 24°C and 38% RH, then reheating would not be necessary.

**Textbook References:**

*   **Arora C.P (2021):** Chapter 7, Air Conditioning Systems and Equipment, Sections on Comfort Air Conditioning.
*   **Jones W.P (2001):** Chapter 5, Air Conditioning Processes and Equipment.
*   **Ahamadul Ameen (2020):** Chapter 5, Air Conditioning Systems.

---

## 6. Practice Questions

**Question 1:**

Moist air at atmospheric pressure has a dry-bulb temperature of 30°C and a relative humidity of 60%. Determine:
a) Specific humidity
b) Dew point temperature
c) Wet-bulb temperature
d) Enthalpy of the moist air

*(Use a psychrometric chart or relevant formulas. Assume standard atmospheric pressure.)*

**Question 2:**

1 kg of dry air at 20°C and 50% RH is mixed with 2 kg of dry air at 35°C and 20% RH. Determine the dry-bulb temperature, specific humidity, and enthalpy of the mixture.

**Question 3:**

Air enters a cooling coil at 32°C dry-bulb and 25°C wet-bulb. The air leaves the coil at 18°C dry-bulb and 100% relative humidity. Calculate the sensible heat removed and the latent heat removed per kg of dry air.

**Question 4:**

Explain the purpose of reheating in an air conditioning system. Under what conditions is it necessary? What are the energy implications of reheating?

---

## 7. Answers to Practice Questions

**Answer 1:**

*(To answer accurately, one would need to refer to a standard psychrometric chart or use psychrometric equations/software. Below are approximate values based on common charts.)*

Using a psychrometric chart for 30°C DB and 60% RH:
a) Specific humidity ($\omega$): Approximately 0.019 kg/kg dry air.
b) Dew point temperature ($T_{dp}$): Approximately 22.6°C.
c) Wet-bulb temperature ($T_{wb}$): Approximately 24.5°C.
d) Enthalpy ($h$): Approximately 71 kJ/kg dry air.

**Answer 2:**

**Given:**
Stream 1: $m_{a1} = 1$ kg, $T_{db1} = 20^\circ C$, $RH_1 = 50\%$
Stream 2: $m_{a2} = 2$ kg, $T_{db2} = 35^\circ C$, $RH_2 = 20\%$

From psych chart (or calculations):
State 1 ($20^\circ C, 50\% RH$): $\omega_1 \approx 0.0072$ kg/kg, $h_1 \approx 40.5$ kJ/kg
State 2 ($35^\circ C, 20\% RH$): $\omega_2 \approx 0.0065$ kg/kg, $h_2 \approx 57.0$ kJ/kg

Total dry air mass: $m_{a3} = m_{a1} + m_{a2} = 1 + 2 = 3$ kg.

**Mass of water vapor in mixture:**
$m_{v3} = m_{a1}\omega_1 + m_{a2}\omega_2 = (1 \text{ kg})(0.0072 \text{ kg/kg}) + (2 \text{ kg})(0.0065 \text{ kg/kg})$
$m_{v3} = 0.0072 + 0.0130 = 0.0202$ kg

**Specific humidity of mixture:**
$\omega_3 = \frac{m_{v3}}{m_{a3}} = \frac{0.0202 \text{ kg}}{3 \text{ kg}} \approx 0.00673$ kg/kg dry air

**Enthalpy of mixture:**
$h_3 = \frac{m_{a1}h_1 + m_{a2}h_2}{m_{a3}} = \frac{(1 \text{ kg})(40.5 \text{ kJ/kg}) + (2 \text{ kg})(57.0 \text{ kJ/kg})}{3 \text{ kg}}$
$h_3 = \frac{40.5 + 114.0}{3} = \frac{154.5}{3} \approx 51.5$ kJ/kg dry air

Now, to find the dry-bulb temperature of the mixture ($T_{db3}$), we look up the state corresponding to $T_{db3}$ and $\omega_3 = 0.00673$ kg/kg dry air, and $h_3 = 51.5$ kJ/kg dry air on the psych chart.
This will be approximately $T_{db3} \approx 28.5^\circ C$.

**Summary for Question 2:**
*   Dry-bulb temperature: $\approx 28.5^\circ C$
*   Specific humidity: $\approx 0.00673$ kg/kg dry air
*   Enthalpy: $\approx 51.5$ kJ/kg dry air

**Answer 3:**

**Given:**
State 1 (Entering air): $T_{db1} = 32^\circ C$, $T_{wb1} = 25^\circ C$
State 2 (Leaving air): $T_{db2} = 18^\circ C$, $RH_2 = 100\%$ (saturated)

From psych chart:
State 1 ($32^\circ C, 25^\circ C WB$):
$\omega_1 \approx 0.0175$ kg/kg
$h_1 \approx 73.0$ kJ/kg

State 2 ($18^\circ C, 100\% RH$):
$\omega_2 \approx 0.0124$ kg/kg (This is also the dew point temperature of the leaving air)
$h_2 \approx 48.5$ kJ/kg

**Calculations per kg of dry air:**

*   **Sensible heat removed ($Q_s$):** This is the change in dry-bulb temperature.
    $Q_s = c_{pa} \cdot (T_{db1} - T_{db2}) = 1.005 \text{ kJ/kg} \cdot (32 - 18)^\circ C$
    $Q_s = 1.005 \times 14 = 14.07$ kJ/kg dry air

*   **Latent heat removed ($Q_l$):** This is due to the change in specific humidity.
    $Q_l = (h_1 - h_2) - c_{pa}(T_{db1} - T_{db2})$
    $Q_l = (h_1 - h_2) - Q_s$
    $Q_l = (73.0 - 48.5) \text{ kJ/kg} - 14.07 \text{ kJ/kg}$
    $Q_l = 24.5 - 14.07 = 10.43$ kJ/kg dry air

    Alternatively, using specific humidity:
    $Q_l = h_{fg} \cdot (\omega_1 - \omega_2)$, where $h_{fg}$ is the latent heat of vaporization at the average temperature (approx. $2450$ kJ/kg).
    $Q_l \approx 2450 \text{ kJ/kg} \cdot (0.0175 - 0.0124) \text{ kg/kg}$
    $Q_l \approx 2450 \times 0.0051 \approx 12.5$ kJ/kg dry air.
    *Note: The difference arises from using the enthalpy difference which accounts for both sensible and latent heat changes in the water vapor. The enthalpy method is more accurate.*

Using enthalpy difference directly for latent heat:
Latent heat removed is the difference in enthalpy due to moisture removal, which can be approximated as $h_{fg} (\omega_1 - \omega_2)$, or more accurately, as part of the total enthalpy change that is not sensible heat.

Total heat removed $Q_t = h_1 - h_2 = 73.0 - 48.5 = 24.5$ kJ/kg dry air.
$Q_t = Q_s + Q_l$
$24.5 = 14.07 + Q_l$
$Q_l = 24.5 - 14.07 = 10.43$ kJ/kg dry air.

**Answer for Question 3:**
*   Sensible heat removed: 14.07 kJ/kg dry air
*   Latent heat removed: 10.43 kJ/kg dry air

**Answer 4:**

**Purpose of Reheating:**
Reheating is employed in air conditioning systems after the cooling and dehumidification process to raise the dry-bulb temperature of the air to the desired supply air condition without adding further moisture.

**Necessity:**
It is necessary when the cooling and dehumidification process results in air that is too cold for the intended application. For example, if the cooling coil is designed to remove a significant amount of moisture (requiring a surface temperature below the dew point), the air leaving the coil might be at a very low temperature, say 12°C or 15°C. If the desired supply air temperature for comfort is 22°C, then reheating is required to bring the air up to this temperature.

**Energy Implications:**
Reheating is an energy-intensive process because it requires an additional energy input (e.g., from a heating coil using electricity, gas, or hot water) to increase the air temperature. This can significantly reduce the overall energy efficiency of the air conditioning system. Therefore, systems are often designed to minimize or avoid reheating by carefully matching the cooling coil's performance to the required conditions and, if possible, by using air mixing strategies to pre-condition the air before it reaches the cooling coil. In some cases, the need for reheating can be eliminated by selecting a higher supply air temperature or by using a cooling coil with a larger sensible heat ratio.

---

## 8. Important Points to Remember

*   The psychrometric chart is your most powerful tool for visualizing and calculating changes in air properties.
*   Understand the difference between specific humidity and relative humidity. Specific humidity is a measure of the actual moisture content, while relative humidity is a measure of saturation.
*   Dew point temperature is a direct indicator of the moisture content of the air.
*   Sensible heat affects only the dry-bulb temperature; latent heat affects only the specific humidity (due to phase change of water).
*   Cooling below the dew point temperature causes dehumidification.
*   Reheating is often necessary to achieve desired supply air temperatures after significant dehumidification, but it comes at an energy cost.
*   Adiabatic saturation (evaporative cooling) is an effective humidification and cooling process, but its effectiveness is limited by the wet-bulb depression.
*   When mixing air streams, the resulting state point lies on the line connecting the initial state points, weighted by their mass flow rates.

---

This concludes the study notes for the "Simple Air Conditioning System" topic. It's crucial to practice using the psychrometric chart and applying the formulas to solve various problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
