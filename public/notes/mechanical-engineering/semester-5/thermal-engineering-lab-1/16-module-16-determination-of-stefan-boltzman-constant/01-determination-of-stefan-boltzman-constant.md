---
title: "Determination of Stefan Boltzman constant"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 16: Determination of Stefan Boltzman constant"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636cb"
status: "completed"
scrapedAt: "2026-05-20T18:02:20.290Z"
---
# THERMAL ENGINEERING LAB-1: Module 16 - Determination of Stefan-Boltzmann Constant

## Topic: Determination of Stefan-Boltzmann Constant

### 1. Introduction

This module focuses on experimentally determining the Stefan-Boltzmann constant, a fundamental constant in thermal radiation. We will explore the principles of thermal radiation and how to isolate and measure its effect to calculate this crucial constant. This experiment directly relates to **CO2: Evaluate thermal properties of materials in conduction, convection and radiation** at a K4 (Analysis) knowledge level, as we will be analyzing radiative heat transfer.

### 2. Learning Outcomes Covered

*   **Understanding the principles of thermal radiation:** We will delve into how surfaces emit thermal energy due to their temperature.
*   **Experimental determination of the Stefan-Boltzmann constant:** This is the core objective of the module, involving setting up an experiment and collecting data.
*   **Calculation of the Stefan-Boltzmann constant:** Using the collected experimental data and theoretical principles, we will derive the value of the constant.
*   **Analysis of experimental errors and their impact:** Understanding potential sources of error and how they influence the calculated value.

### 3. Key Concepts and Definitions

*   **Thermal Radiation:** The emission of electromagnetic waves from all matter that has a temperature greater than absolute zero. This radiation carries energy away from the emitting surface. (Cengel, 4th Ed., Chapter 11)
*   **Blackbody:** An idealized object that absorbs all incident electromagnetic radiation, regardless of frequency or angle of incidence. It is also a perfect emitter of radiation. (Cengel, 4th Ed., Chapter 11)
*   **Emissive Power (E):** The total radiation energy emitted from a unit surface area of a body per unit time, in all directions. Units are typically W/m².
*   **Stefan-Boltzmann Law:** States that the total energy radiated per unit surface area of a blackbody across all wavelengths per unit time is directly proportional to the fourth power of the blackbody's absolute temperature.
    *   Mathematically: $E_b = \sigma T_b^4$
        *   $E_b$: Emissive power of a blackbody (W/m²)
        *   $\sigma$: Stefan-Boltzmann constant (W/m²·K⁴)
        *   $T_b$: Absolute temperature of the blackbody (K)
*   **Stefan-Boltzmann Constant ($\sigma$):** A physical constant that quantifies the relationship between temperature and radiated energy. Its theoretical value is approximately $5.6704 \times 10^{-8} \, \text{W/m}^2\text{·K}^4$. (Cengel, 4th Ed., Chapter 11)
*   **Emissivity ($\epsilon$):** The ratio of the emissive power of a real surface to the emissive power of a blackbody at the same temperature. It is a dimensionless property between 0 and 1. For a real surface: $E = \epsilon \sigma T^4$. (Cengel, 4th Ed., Chapter 11)
*   **Radiosity (J):** The total flux of radiation leaving a surface per unit area, including both emitted and reflected radiation.
*   **View Factor (F):** A geometric parameter that represents the fraction of the radiation leaving one surface that strikes another surface.
*   **Net Radiation Exchange:** The difference between the radiation leaving a surface and the radiation incident upon it. For two gray surfaces $A_1$ and $A_2$, with temperatures $T_1$ and $T_2$ and emissivities $\epsilon_1$ and $\epsilon_2$, the net rate of radiation heat transfer from surface 1 to surface 2 is given by:
    $Q_{12} = \frac{\sigma (T_1^4 - T_2^4)}{(1/\epsilon_1) + (1/\epsilon_2) - 1}$ (assuming surface 2 is diffuse and gray and completely surrounds surface 1)
    For a small object (surface 1) in a large enclosure (surface 2):
    $Q_{12} = \epsilon_1 \sigma A_1 (T_1^4 - T_2^4)$

### 4. Theoretical Background

The Stefan-Boltzmann law is a cornerstone of thermal radiation. It describes the total energy radiated by a blackbody. For real surfaces, the emissive power is modified by the emissivity of the surface.

The experiment aims to create a scenario where we can measure the radiative heat transfer from a heated object (acting as a source) to its surroundings. By controlling and measuring the temperatures of the source and the surroundings, and knowing the properties of the source (like its surface area and emissivity), we can use the Stefan-Boltzmann law to calculate the constant $\sigma$.

**Ideal Experimental Setup:**

An ideal setup would involve a small, well-defined object (e.g., a heated filament or disc) at a known temperature, surrounded by a large, cold enclosure at a uniform temperature. The heat transfer from the object to the enclosure would be predominantly radiative.

*   **Heated Object (Source):** This object needs to be heated to a stable, measurable temperature. It should have a known surface area ($A_1$) and emissivity ($\epsilon_1$).
*   **Surroundings (Enclosure):** This should be a large enclosure that "sees" the entire surface of the heated object. Its temperature ($T_2$) needs to be measurable and ideally maintained at a constant, lower temperature.

**Deriving the Stefan-Boltzmann Constant from Experiment:**

Consider a small, heated object (surface 1) placed in a large enclosure (surface 2). Assuming:
1.  Surface 1 is a small, gray surface with area $A_1$, emissivity $\epsilon_1$, and temperature $T_1$.
2.  Surface 2 is a large enclosure that completely surrounds surface 1, acting as a blackbody absorber with temperature $T_2$.
3.  Heat transfer from surface 1 is primarily due to radiation. Conduction and convection losses from surface 1 are minimized or accounted for.

The net radiative heat transfer from surface 1 to surface 2 is given by:
$Q_{rad} = \epsilon_1 \sigma A_1 (T_1^4 - T_2^4)$

If we can supply electrical power ($P_{electrical}$) to maintain the temperature $T_1$ of surface 1, and if we can neglect other heat losses (conduction and convection), then:
$P_{electrical} = Q_{rad} = \epsilon_1 \sigma A_1 (T_1^4 - T_2^4)$

Rearranging to solve for $\sigma$:
$\sigma = \frac{P_{electrical}}{\epsilon_1 A_1 (T_1^4 - T_2^4)}$

**Important Note on Temperature:** Temperatures must be in Kelvin (K). $T(K) = T(^\circ C) + 273.15$.

### 5. Experimental Setup and Procedure (Conceptual)

A typical laboratory setup might involve:

*   **Heated Element:** A metal disc or sphere, often blackened to increase emissivity, heated by an electrical resistance heater.
*   **Thermocouple:** Attached to the heated element to measure its temperature ($T_1$).
*   **Enclosure:** A larger, often insulated, chamber or box, possibly cooled or maintained at ambient temperature.
*   **Thermometer/Thermocouple:** Placed in the enclosure to measure its temperature ($T_2$).
*   **Power Supply:** A variable DC or AC power supply to control the heating element.
*   **Voltmeter and Ammeter:** To measure the voltage across and current through the heating element, allowing calculation of electrical power ($P_{electrical} = V \times I$).

**Procedure:**

1.  **Setup:** Assemble the apparatus as per the lab manual. Ensure the thermocouple is securely in contact with the heated element. Place the enclosure thermocouple at a representative location within the enclosure.
2.  **Initial Readings:** Record the ambient temperature and the initial temperature of the heated element.
3.  **Heating:** Gradually increase the power supplied to the heating element.
4.  **Stabilization:** Allow the system to reach a steady state where the temperature of the heated element ($T_1$) and the enclosure ($T_2$) remain constant for a period. This might involve adjusting the power supply.
5.  **Data Collection:** Once steady state is achieved, record:
    *   Voltage across the heater ($V$)
    *   Current through the heater ($I$)
    *   Temperature of the heated element ($T_1$ in °C, then convert to K)
    *   Temperature of the enclosure ($T_2$ in °C, then convert to K)
6.  **Varying Temperatures:** Repeat steps 4 and 5 for several different steady-state temperatures ($T_1$) by adjusting the power input.
7.  **Data Tabulation:** Organize the collected data in a table.

### 6. Calculations

For each set of readings at steady state:

1.  **Calculate Electrical Power Input:** $P_{electrical} = V \times I$ (Watts).
2.  **Convert Temperatures to Kelvin:**
    *   $T_1(K) = T_1(^\circ C) + 273.15$
    *   $T_2(K) = T_2(^\circ C) + 273.15$
3.  **Calculate Radiative Heat Transfer:** If we assume that the electrical power input is primarily dissipated by radiation, then $Q_{rad} \approx P_{electrical}$.
4.  **Calculate $\sigma$ using the derived formula:**
    $\sigma_{calculated} = \frac{P_{electrical}}{\epsilon_1 A_1 (T_1^4 - T_2^4)}$

    *   **Emissivity ($\epsilon_1$):** This is a crucial parameter. For a well-blackened surface, $\epsilon_1$ can be approximated as 0.95 to 0.98. If the surface is polished metal, it would be much lower. **This needs to be obtained from the lab manual or specified for the apparatus.**
    *   **Surface Area ($A_1$):** This is the surface area of the heated element from which radiation occurs. **This needs to be obtained from the lab manual or measured.**

5.  **Average Value:** Calculate the average of the $\sigma_{calculated}$ values obtained from all the readings.
6.  **Percentage Error:** Compare your average experimental value with the accepted theoretical value of $\sigma = 5.6704 \times 10^{-8} \, \text{W/m}^2\text{·K}^4$.
    Percentage Error $= \left| \frac{\sigma_{experimental} - \sigma_{theoretical}}{\sigma_{theoretical}} \right| \times 100\%$

### 7. Analysis of Errors

Several factors can contribute to the deviation of the experimental value from the theoretical value:

*   **Conduction Losses:** Heat loss from the heated element through its supports or connecting wires. This reduces the actual radiative heat transfer for a given power input, leading to an overestimation of $\sigma$.
*   **Convection Losses:** Heat loss from the heated element to the surrounding air through convection. This also reduces the actual radiative heat transfer.
*   **Inaccurate Temperature Measurement:** Errors in thermocouple calibration or placement can lead to incorrect temperature readings. Even small errors in $T_1$ and $T_2$ can significantly impact $T_1^4$ and $T_2^4$.
*   **Non-Uniform Temperatures:** The heated element or the enclosure might not be at a uniform temperature.
*   **Surface Emissivity Uncertainty:** The actual emissivity of the heated surface might differ from the assumed value. If the actual emissivity is lower than assumed, the calculated $\sigma$ will be higher.
*   **View Factor Approximation:** The assumption that the enclosure perfectly surrounds the object and acts as a blackbody might not be entirely accurate.
*   **Measurement Errors:** Inaccuracies in voltmeter and ammeter readings.

**(Cengel, 4th Ed., Chapter 11 and Sachdeva, 3rd Ed., Chapter on Radiation, provide detailed discussions on radiation heat transfer and potential sources of error.)**

### 8. Important Points to Remember

*   **Absolute Temperatures:** Always use Kelvin for temperature in Stefan-Boltzmann Law calculations.
*   **Emissivity:** The value of emissivity is critical for accurate calculations. Ensure it's correctly obtained or assumed based on the surface.
*   **Steady State:** Ensure the system has reached steady-state before taking measurements.
*   **Minimizing Other Losses:** Efforts should be made to minimize conduction and convection losses to isolate the radiative component.
*   **Surface Area:** The surface area from which radiation is occurring must be accurately known.
*   **Significant Figures:** Maintain appropriate significant figures throughout calculations.

### 9. Practice Questions and Exercises

**Question 1:**
A small, blackened disk with a surface area of $0.001 \, m^2$ is heated by an electrical heater. The disk is placed in a large, evacuated enclosure. At steady state, the disk temperature is measured as $150^\circ C$ and the enclosure temperature is $25^\circ C$. The electrical power supplied to the disk's heater is $2.5 \, W$. Assuming the disk's emissivity is $0.95$ and neglecting all other heat losses, calculate the Stefan-Boltzmann constant based on this experiment.

**Answer 1:**
First, convert temperatures to Kelvin:
$T_1 = 150^\circ C + 273.15 = 423.15 \, K$
$T_2 = 25^\circ C + 273.15 = 298.15 \, K$

Given:
$P_{electrical} = 2.5 \, W$
$A_1 = 0.001 \, m^2$
$\epsilon_1 = 0.95$

Using the formula: $\sigma = \frac{P_{electrical}}{\epsilon_1 A_1 (T_1^4 - T_2^4)}$

$T_1^4 = (423.15)^4 \approx 3.190 \times 10^{10} \, K^4$
$T_2^4 = (298.15)^4 \approx 0.787 \times 10^{10} \, K^4$

$T_1^4 - T_2^4 \approx (3.190 - 0.787) \times 10^{10} \, K^4 = 2.403 \times 10^{10} \, K^4$

$\sigma = \frac{2.5 \, W}{0.95 \times 0.001 \, m^2 \times 2.403 \times 10^{10} \, K^4}$
$\sigma = \frac{2.5}{0.95 \times 24030} \, \text{W/m}^2\text{·K}^4$
$\sigma = \frac{2.5}{22828.5} \, \text{W/m}^2\text{·K}^4$
$\sigma \approx 1.095 \times 10^{-4} \, \text{W/m}^2\text{·K}^4$

*(Note: This calculated value is significantly different from the theoretical value. This highlights the importance of precise experimental conditions, minimizing losses, and accurate property values in a real experiment.)*

**Question 2:**
Explain the primary sources of error when experimentally determining the Stefan-Boltzmann constant and how they might affect the calculated value.

**Answer 2:**
The primary sources of error are:

*   **Conduction and Convection Losses:** If heat is lost from the heated object through conduction or convection, the measured electrical power is greater than the actual radiative heat transfer. This will lead to an **overestimation** of the Stefan-Boltzmann constant.
*   **Inaccurate Temperature Measurement:**
    *   If $T_1$ is measured too high, $T_1^4$ will be significantly higher, leading to an **underestimation** of $\sigma$.
    *   If $T_1$ is measured too low, $T_1^4$ will be lower, leading to an **overestimation** of $\sigma$.
    *   If $T_2$ is measured too high, $T_1^4 - T_2^4$ will be lower, leading to an **overestimation** of $\sigma$.
    *   If $T_2$ is measured too low, $T_1^4 - T_2^4$ will be higher, leading to an **underestimation** of $\sigma$.
*   **Uncertainty in Emissivity ($\epsilon_1$):** If the actual emissivity is lower than the assumed value, the denominator in the $\sigma$ calculation will be smaller, leading to an **overestimation** of $\sigma$. Conversely, if the actual emissivity is higher than assumed, it will lead to an **underestimation** of $\sigma$.
*   **Inaccurate Surface Area Measurement ($A_1$):** If the actual area is smaller than assumed, it will lead to an **overestimation** of $\sigma$. If the actual area is larger, it will lead to an **underestimation** of $\sigma$.

**Question 3:**
Why is it important to use absolute temperatures (Kelvin) in the Stefan-Boltzmann Law?

**Answer 3:**
The Stefan-Boltzmann Law is derived from fundamental thermodynamic principles and the statistical nature of electromagnetic radiation, which is directly related to the kinetic energy of the particles in a substance. Kinetic energy is proportional to absolute temperature. Using Celsius or Fahrenheit would lead to incorrect proportionality, as these scales have arbitrary zero points. For instance, a temperature difference of $10^\circ C$ is a difference of $10 \, K$, but $10^\circ C$ in absolute temperature is $(10+273.15)^4$, while $0^\circ C$ is $(273.15)^4$. The fourth power relationship requires the temperature scale to start from absolute zero (0 K).

### 10. Alignment with Course Outcomes

*   **CO1: Measure thermo-physical properties of solid, liquid and gaseous fuels (Knowledge Level: K4)**
    *   While not directly measuring fuel properties, the experiment requires accurate measurement of temperatures, electrical power, and surface area, which are crucial for characterizing thermal behavior.
*   **CO2: Evaluate thermal properties of materials in conduction, convection and radiation (Knowledge Level: K4)**
    *   This module is directly aligned with evaluating thermal radiation. By measuring heat transfer and temperature, we are evaluating the radiative properties of the experimental setup and ultimately determining a fundamental constant governing radiative heat transfer. Understanding and accounting for conduction and convection losses are also part of this evaluation.
*   **CO3: Analyse the performance of heat exchangers and heat pipes (Knowledge Level: K4)**
    *   The principles of radiative heat transfer explored here are fundamental to understanding how heat is exchanged in various thermal systems, including heat exchangers and heat pipes, where radiation can play a significant role.
*   **CO4: Measure solar radiation (Knowledge Level: K4)**
    *   Thermal radiation is the underlying mechanism for solar energy transfer. Understanding the Stefan-Boltzmann law provides a foundation for analyzing how energy is radiated and absorbed from the sun.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 11. References

*   **Heat Transfer a Practical Approach by Yunus A. Cengel (Tata McGraw-Hill Education, 4th Edition, 2012.)** - Chapter 11 (Radiation Heat Transfer) is a primary reference for the theoretical basis, laws, and concepts.
*   **Fundamentals of Engineering, Heat and Mass Transfer by R. C. Sachdeva (New Age publication, 3 rd Edition, 2012.)** - Similar to Cengel, this book provides foundational knowledge on radiation heat transfer.
*   **Heat transfer by Holman J.P (Mc Graw-Hill, 10th. Ed., 2009)** - Offers practical approaches and experimental considerations in heat transfer.
*   **Heat and Mass Transfer by Frank P. Incropera and David P. Dewitt (New Age International, New Delhi., 2006)** - Another comprehensive text for understanding radiation phenomena.
*   **Fundamentals of Heat and Mass Transfer by Kothandaraman C.P (New Age International, New Delhi., 2006)** - Provides core principles of heat transfer, including radiation.

This module provides a hands-on experience in verifying a fundamental law of physics and understanding the practical challenges of experimental thermodynamics.