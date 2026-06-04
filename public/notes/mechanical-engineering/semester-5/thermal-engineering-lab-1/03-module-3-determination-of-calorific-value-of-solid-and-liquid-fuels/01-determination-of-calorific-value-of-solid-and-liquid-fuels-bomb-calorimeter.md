---
title: "Determination of calorific value of solid and liquid fuels- Bomb Calorimeter"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 3: Determination of calorific value of solid and liquid fuels"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636b1"
status: "completed"
scrapedAt: "2026-05-20T18:02:11.022Z"
---
# THERMAL ENGINEERING LAB-1: Module 3 - Determination of Calorific Value of Solid and Liquid Fuels

## Topic: Determination of Calorific Value of Solid and Liquid Fuels - Bomb Calorimeter

### 1. Introduction to Calorific Value

*   **Definition:** Calorific Value (CV) or Heating Value of a fuel is the total amount of heat released when a unit quantity of the fuel is completely burned in air.
*   **Units:** Typically expressed in kJ/kg for solid fuels and kJ/L or kJ/kg for liquid fuels. In older units, it might be seen as kcal/kg or BTU/lb.
*   **Importance:** Crucial for comparing the energy content of different fuels, designing combustion systems, and economic evaluation of fuels.
*   **Types of Calorific Value:**
    *   **Higher Calorific Value (HCV) / Gross Calorific Value (GCV):** The total heat released when the fuel is completely burned and the products of combustion are cooled to the initial temperature of the fuel and air, with the water vapor produced being condensed to liquid.
    *   **Lower Calorific Value (LCV) / Net Calorific Value (NCV):** The heat released when the fuel is completely burned and the products of combustion are at the same temperature as the reactants. In this case, the water vapor remains as vapor and does not condense. The difference between HCV and LCV is the latent heat of vaporization of water.

    $$HCV = LCV + m_w \times h_{fg}$$
    where:
    *   $m_w$ is the mass of water produced from combustion.
    *   $h_{fg}$ is the latent heat of vaporization of water.

    *   **Relevance to Course Outcome CO1:** This section directly addresses the measurement of thermo-physical properties (specifically, energy content) of solid and liquid fuels. (Knowledge Level: K4)

### 2. The Bomb Calorimeter: Principle and Apparatus

#### 2.1 Principle of Operation

The bomb calorimeter operates on the principle of **constant volume calorimetry**. The fuel is burned in a sealed, high-pressure vessel (the bomb) in an atmosphere of oxygen. The heat released by the combustion is absorbed by a known mass of water surrounding the bomb. By measuring the temperature rise of the water, the calorific value of the fuel can be calculated.

The process is based on the **First Law of Thermodynamics**, specifically the conservation of energy. The heat released by the combustion is equal to the heat absorbed by the calorimeter (water, bomb, stirrer, thermometer, etc.).

$$Q_{released} = Q_{absorbed}$$

#### 2.2 Apparatus Components

A typical bomb calorimeter consists of the following components:

1.  **Bomb (Combustion Vessel):**
    *   A strong, sealed vessel, usually made of stainless steel or other corrosion-resistant alloy.
    *   Designed to withstand high pressures and temperatures generated during combustion.
    *   Contains a **sample cup** for holding the fuel and an **igniter wire** (usually platinum or nichrome) for initiating combustion.
    *   A **valve** for filling with oxygen and a **cap** for sealing.

2.  **Water Jacket (Calorimeter Body):**
    *   An outer vessel containing a known mass of pure water.
    *   The bomb is immersed in this water.
    *   Acts as a heat sink.

3.  **Stirrer:**
    *   Used to ensure uniform temperature distribution throughout the calorimeter water.
    *   Typically motor-driven.

4.  **Thermometer:**
    *   A sensitive thermometer (e.g., a mercury-in-glass thermometer or a resistance thermometer) to accurately measure the temperature rise of the calorimeter water.
    *   The accuracy of the measurement is critical.

5.  **Oxygen Cylinder and Regulator:**
    *   To supply pure oxygen at a controlled pressure to the bomb.

6.  **Ignition System:**
    *   An electrical system to heat the igniter wire and start the combustion process.

#### 2.3 Working of the Bomb Calorimeter

1.  **Sample Preparation:** A known mass of the solid or liquid fuel is accurately weighed and placed in the sample cup within the bomb.
2.  **Igniter Preparation:** A fine igniter wire is stretched across the electrodes in the bomb and connected to the sample. The bomb is sealed.
3.  **Oxygen Filling:** The bomb is filled with pure oxygen to a specified high pressure (e.g., 20-30 atm).
4.  **Water Jacket Setup:** The bomb is placed in the calorimeter vessel filled with a precise amount of distilled water. The calorimeter is sealed, and the stirrer and thermometer are positioned.
5.  **Initial Temperature Measurement:** The stirrer is operated for a few minutes until a steady initial temperature ($T_1$) of the water is observed.
6.  **Ignition:** The fuel is ignited by passing an electric current through the igniter wire. Combustion occurs at constant volume.
7.  **Temperature Rise Measurement:** The heat released by combustion is absorbed by the water and the calorimeter. The temperature of the water rises. The maximum temperature reached ($T_2$) is recorded.
8.  **Cooling Correction:** The calorimeter is not perfectly insulated, so heat exchange with the surroundings occurs. Corrections are applied to account for this heat loss/gain.
9.  **Oxygen Pressure Check:** After the experiment, the bomb is opened, and the final oxygen pressure is checked.

### 3. Calculations

The calorific value is calculated using the following steps:

#### 3.1 Calorimeter Constant (Water Equivalent)

The calorimeter constant ($C_c$) represents the heat capacity of the calorimeter itself (bomb, water, thermometer, stirrer, etc.). It's crucial to determine this value experimentally.

*   **Method:** Burn a fuel of known calorific value (e.g., benzoic acid) in the bomb calorimeter.
*   **Calculation:**
    $$C_c = \frac{m_f \times CV_f - m_w \times c_w \times (T_2 - T_1)_{corrected}}{ (T_2 - T_1)_{corrected} }$$
    where:
    *   $m_f$ = mass of the standard fuel used.
    *   $CV_f$ = known calorific value of the standard fuel.
    *   $m_w$ = mass of water in the calorimeter.
    *   $c_w$ = specific heat capacity of water (approx. 4.186 kJ/kg°C or 1 kcal/kg°C).
    *   $(T_2 - T_1)_{corrected}$ = corrected temperature rise of the water.

#### 3.2 Temperature Rise Correction (Rumford's Method or Regnault-Pfaundler Method)

Corrections are applied to account for heat exchange with the surroundings. A common method is Rumford's method:

1.  **Initial Period:** Record the temperature at regular intervals before ignition to establish the initial rate of temperature change.
2.  **Cooling Period:** Record the temperature at regular intervals after the maximum temperature is reached until the rate of temperature change becomes constant, indicating thermal equilibrium with the surroundings.
3.  **Correction Calculation:**
    $$(T_2 - T_1)_{corrected} = (T_2 - T_1)_{observed} + \sum (\text{Correction Factors})$$
    A simplified correction is often used:
    $$(T_2 - T_1)_{corrected} = (T_2 - T_1)_{observed} + C \times (\text{Rate of temperature change during cooling})$$
    where $C$ is a factor determined from the experiment. More rigorous methods involve integrating the heat exchange over time.

    *   **Relevance to Course Outcome CO1:** This involves careful measurement and correction of temperature changes, which are thermo-physical properties. (Knowledge Level: K4)

#### 3.3 Calculation of Calorific Value of Unknown Fuel

Once the calorimeter constant ($C_c$) is known, the CV of the unknown fuel can be calculated:

$$m_{fuel} \times CV_{fuel} = C_c \times (T_2 - T_1)_{corrected} + m_w \times c_w \times (T_2 - T_1)_{corrected}$$

Rearranging to find $CV_{fuel}$:

$$CV_{fuel} = \frac{(C_c + m_w \times c_w) \times (T_2 - T_1)_{corrected}}{m_{fuel}}$$

Where:
*   $m_{fuel}$ = mass of the unknown fuel sample.
*   $CV_{fuel}$ = calorific value of the unknown fuel.
*   $(C_c + m_w \times c_w)$ is the total water equivalent or heat capacity of the calorimeter.

#### 3.4 Corrections for Fuse Wire and Acid Formation

In real-world scenarios, additional corrections might be necessary:

*   **Fuse Wire Correction:** The heat generated by the combustion of the fuse wire must be accounted for.
    $$Q_{fuse} = m_{wire} \times CV_{wire}$$
*   **Acid Correction:** If nitric acid ($HNO_3$) or sulfuric acid ($H_2SO_4$) is formed during combustion (especially from fuels containing nitrogen and sulfur), the heat of formation of these acids also needs to be subtracted.
    $$Q_{acid} = n_{HNO_3} \times CV_{HNO_3} + n_{H_2SO_4} \times CV_{H_2SO_4}$$
    where $n$ is the moles of acid formed and $CV$ is their heat of formation.

The refined formula becomes:
$$m_{fuel} \times CV_{fuel} = C_c \times (T_2 - T_1)_{corrected} + Q_{fuse} + Q_{acid} - m_w \times c_w \times (T_2 - T_1)_{corrected}$$
*(Note: The $Q_{fuse}$ and $Q_{acid}$ terms are usually small for typical fuels and are often neglected in introductory experiments if their values are not precisely known or if the fuels are assumed to be free of sulfur and nitrogen. However, for precise measurements, they are important.)*

### 4. Important Considerations and Sources of Error

*   **Complete Combustion:** Ensure the fuel is completely burned. Insufficient oxygen or pressure can lead to incomplete combustion.
*   **Accuracy of Measurements:** Precise weighing of the fuel sample, accurate thermometer readings, and precise volume of water are crucial.
*   **Calorimeter Constant:** An accurate determination of the calorimeter constant is vital for reliable results.
*   **Temperature Correction:** Proper application of temperature correction methods minimizes errors due to heat exchange with surroundings.
*   **Sample Homogeneity:** For solid fuels, ensure the sample is finely powdered and homogeneous.
*   **Igniter Wire Resistance:** The resistance of the igniter wire should be consistent.
*   **Oxygen Purity and Pressure:** Using pure oxygen at the correct pressure is important.
*   **Sealing of the Bomb:** Any leakage of oxygen or combustion products will affect the results.

### 5. Practice Questions and Answers

**Question 1:** Define Calorific Value and differentiate between HCV and LCV.
**Answer:** Calorific Value is the total heat released during complete combustion of a unit quantity of fuel. HCV is the heat released when water vapor produced is condensed, while LCV is when water vapor remains in gaseous state. The difference is the latent heat of vaporization of water.

**Question 2:** What is the principle behind the operation of a bomb calorimeter?
**Answer:** The principle is constant volume calorimetry, where the heat released by the combustion of the fuel is absorbed by a known mass of water, and the temperature rise of the water is measured.

**Question 3:** If a standard fuel (benzoic acid, CV = 26.4 kJ/g) of 1.5 g is burnt in a bomb calorimeter. The water equivalent of the calorimeter is 10,000 J/°C. The initial and final temperatures of water are 25.0°C and 28.5°C respectively. Calculate the calorific value of the fuel. (Assume no corrections).
**Answer:**
*   Mass of fuel ($m_f$) = 1.5 g
*   CV of standard fuel ($CV_f$) = 26.4 kJ/g
*   Calorimeter constant ($C_c$) = 10,000 J/°C = 10 kJ/°C
*   Initial temperature ($T_1$) = 25.0°C
*   Final temperature ($T_2$) = 28.5°C
*   Temperature rise ($\Delta T$) = $T_2 - T_1$ = 28.5 - 25.0 = 3.5°C

Heat released by fuel = $m_f \times CV_f = 1.5 \text{ g} \times 26.4 \text{ kJ/g} = 39.6 \text{ kJ}$

Heat absorbed by calorimeter = $C_c \times \Delta T = 10 \text{ kJ/°C} \times 3.5 \text{ °C} = 35 \text{ kJ}$

Wait, this calculation is incorrect as the question asks to calculate the CV of *the* fuel, but the input refers to *a standard fuel*. Let's rephrase the question for clarity to find the CV of an *unknown* fuel.

**Revised Question 3:** If a fuel sample of 1.0 g is burnt in a bomb calorimeter. The water equivalent of the calorimeter is 10,000 J/°C. The initial and final temperatures of water are 25.0°C and 28.5°C respectively. Calculate the calorific value of the fuel. (Assume no corrections, and the mass of water in the calorimeter is negligible for simplicity in this example, effectively meaning the total heat capacity is just $C_c$).
**Answer:**
*   Mass of fuel ($m_{fuel}$) = 1.0 g
*   Calorimeter constant ($C_c$) = 10,000 J/°C = 10 kJ/°C
*   Initial temperature ($T_1$) = 25.0°C
*   Final temperature ($T_2$) = 28.5°C
*   Temperature rise ($\Delta T$) = $T_2 - T_1$ = 28.5 - 25.0 = 3.5°C

Heat released by fuel = Heat absorbed by calorimeter
$m_{fuel} \times CV_{fuel} = C_c \times \Delta T$
$1.0 \text{ g} \times CV_{fuel} = 10 \text{ kJ/°C} \times 3.5 \text{ °C}$
$CV_{fuel} = 35 \text{ kJ/g}$

**Question 4:** What are the possible sources of error in a bomb calorimeter experiment?
**Answer:** Incomplete combustion, inaccurate thermometer readings, heat exchange with surroundings, inaccurate weighing, leakage of oxygen, and impure oxygen.

### 6. Relevance to Course Outcomes

*   **CO1: Measure thermo-physical properties of solid, liquid and gaseous fuels (Knowledge Level: K4)**
    *   The determination of calorific value directly measures the energy content (a thermo-physical property) of solid and liquid fuels. The experiment involves careful measurement of temperature changes and masses, requiring an understanding of the physical processes involved. The ability to conduct this experiment and interpret the results demonstrates a K4 level of knowledge.

*   **CO2: Evaluate thermal properties of materials in conduction, convection and radiation (Knowledge Level: K4)**
    *   While the primary focus is calorific value, the bomb calorimeter indirectly relates to these concepts. The heat transfer from the combustion within the bomb to the surrounding water occurs through conduction and convection. Understanding the temperature corrections involves analyzing heat exchange (radiation, convection, conduction) with the surroundings. Evaluating the calorimeter constant also implicitly involves understanding the heat capacities of materials.

*   **CO3: Analyse the performance of heat exchangers and heat pipes (Knowledge Level: K4)**
    *   The bomb calorimeter can be seen as a simple heat transfer device. The heat generated is transferred to the water. Analyzing the temperature rise and applying corrections requires understanding heat transfer principles, similar to how one would analyze the performance of a heat exchanger where heat is transferred from a hot fluid to a cold fluid.

*   **CO4: Measure solar radiation (Knowledge Level: K4)**
    *   This is less directly related. However, the fundamental principle of measuring energy transfer and its effect on a medium (water in this case) is a common thread in all measurement-based thermal engineering experiments. Both involve accurate instrumentation and understanding the relationship between energy input and resulting temperature/state changes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. References and Further Reading

*   **Heat Transfer a Practical Approach by Yunus A. Cengel (Tata McGraw-Hill Education, 4th Edition, 2012.):** Chapter 1 (Introduction to Heat Transfer) will provide foundational concepts on heat and temperature.
*   **Fundamentals of Engineering, Heat and Mass Transfer by R. C. Sachdeva (New Age publication, 3 rd Edition, 2012.):** Chapter 1 (Introduction to Heat Transfer) and potentially chapters discussing measurement techniques will be relevant.
*   **Heat transfer by Holman J.P (Mc Graw-Hill, 10th. Ed., 2009):** Chapter 1 (Introduction) and sections on calorimetry would be highly beneficial.
*   **Heat and Mass Transfer by Frank P. Incropera and David P. Dewitt (John Wiley and sons, 2011):** Chapter 1 (Introduction) and sections related to thermodynamic principles and measurement.
*   **Fundamentals of Heat and Mass Transfer by Kothandaraman C.P (New Age International, New Delhi., 2006):** Chapter 1 (Introduction) and chapters on thermodynamics and measurement of thermal properties.

---
**Important Points to Remember:**

*   **Calorific Value is a measure of fuel's energy content.**
*   **Bomb Calorimeter operates on the principle of constant volume calorimetry.**
*   **The calorimeter constant ($C_c$) is essential for calculations.**
*   **Temperature corrections are critical for accurate results.**
*   **Ensure complete combustion by using sufficient oxygen.**
*   **Precise measurement of mass and temperature is paramount.**