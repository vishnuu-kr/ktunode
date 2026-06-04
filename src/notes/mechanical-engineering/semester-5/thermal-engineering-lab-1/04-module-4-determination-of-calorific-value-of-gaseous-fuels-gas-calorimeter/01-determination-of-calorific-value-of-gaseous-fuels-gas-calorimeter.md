---
title: "Determination of calorific value of gaseous fuels –Gas Calorimeter"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 4: Determination of calorific value of gaseous fuels –Gas Calorimeter"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636b3"
status: "completed"
scrapedAt: "2026-05-20T18:02:11.726Z"
---
# THERMAL ENGINEERING LAB-1: Module 4 - Determination of Calorific Value of Gaseous Fuels using Gas Calorimeter

This module focuses on experimentally determining the calorific value of gaseous fuels using a gas calorimeter, a crucial aspect of understanding fuel combustion and energy efficiency.

## 1. Introduction to Calorific Value

**Definition:** Calorific value (CV) or heating value of a fuel is the total amount of heat released when a unit quantity of the fuel is completely burned in air. It's a measure of the energy content of the fuel.

**Types of Calorific Value:**

*   **Higher Calorific Value (HCV) or Gross Calorific Value (GCV):** The total amount of heat released when the combustion products are cooled to the initial temperature of the fuel and air, and all the water formed during combustion is condensed into liquid. This includes the latent heat of vaporization of water.
*   **Lower Calorific Value (LCV) or Net Calorific Value (NCV):** The amount of heat released when the combustion products are cooled to the initial temperature of the fuel and air, and the water formed during combustion remains in the gaseous state (steam). This excludes the latent heat of vaporization of water.

**Relationship between HCV and LCV:**

$LCV = HCV - (m_{H_2O} \times h_{fg})$

Where:
*   $m_{H_2O}$ is the mass of water formed per unit mass of fuel.
*   $h_{fg}$ is the latent heat of vaporization of water at the final temperature.

**Importance of Calorific Value:**
*   **Fuel Assessment:** Essential for comparing the energy content of different fuels.
*   **Boiler and Furnace Design:** Dictates the capacity and efficiency of combustion equipment.
*   **Energy Management:** Crucial for optimizing fuel usage and cost.
*   **Environmental Impact:** Higher CV fuels generally lead to more efficient energy extraction, potentially reducing emissions per unit of energy produced.

**(Referenced from: Cengel, Heat Transfer a Practical Approach, Chapter 12 - Mass Transfer, discusses combustion processes and energy release.)**

## 2. Gas Calorimeter: Principle and Types

A gas calorimeter is an instrument used to determine the calorific value of gaseous fuels. The fundamental principle involves burning a known quantity of the gaseous fuel under controlled conditions and measuring the heat released. This heat is absorbed by a known quantity of water, and the temperature rise of the water is measured.

**Working Principle:**
1.  A precisely measured volume of the gaseous fuel is burned.
2.  The heat generated from the combustion is transferred to a surrounding medium, typically water.
3.  The temperature rise of this medium is measured.
4.  Using the principle of calorimetry (heat gained by water = heat lost by fuel), the calorific value of the gas can be calculated.

**Types of Gas Calorimeters:**

*   **Junkers Calorimeter (Continuous Type):** This is the most common type. It operates on the principle of continuous flow. A known flow rate of gas is burned, and the hot products of combustion pass through a heat exchanger where they transfer heat to a continuous flow of cooling water. The inlet and outlet temperatures of the water, along with the gas consumption and water flow rate, are measured.

    *   **Key Features of Junkers Calorimeter:**
        *   **Gas Meter:** Measures the volume of gas consumed.
        *   **Water Meter/Weir:** Controls and measures the flow rate of cooling water.
        *   **Burner:** Where the gas is combusted.
        *   **Heat Exchanger (Cooling Coils):** Where heat is transferred from combustion products to water.
        *   **Thermometers:** To measure inlet and outlet water temperatures and, often, gas temperature.
        *   **Flue Gas Outlet:** For exhaust gases.

*   **Boy's Calorimeter (Calorimeter of the first order):** An older type, often used for laboratory investigations. It works on a batch principle where a known volume of gas is burned, and the heat released is absorbed by a fixed mass of water.

**Important Note:** Junkers calorimeters are generally preferred for practical and industrial applications due to their continuous operation and ability to provide a direct reading of the calorific value.

**(Referenced from: Sachdeva, Fundamentals of Engineering, Heat and Mass Transfer, Chapter 8 - Heat Transfer Equipment, discusses heat exchangers and their principles which are fundamental to calorimeters.)**

## 3. Experimental Setup and Procedure for Junkers Calorimeter

This section details the practical aspects of using a Junkers calorimeter.

### 3.1. Apparatus Required

*   Junkers Gas Calorimeter
*   Gas supply (natural gas, LPG, producer gas, etc.)
*   Water supply
*   Thermometers (high precision)
*   Stopwatch
*   Weighing balance (optional, for water flow rate determination)
*   Graduated cylinders (for calibration, if needed)
*   Spirit level
*   Pressure gauge (for gas supply)
*   Barometer

### 3.2. Experimental Setup

1.  **Leveling the Calorimeter:** Ensure the calorimeter is perfectly leveled using a spirit level. This is crucial for accurate water flow.
2.  **Water Supply:** Connect the water supply to the inlet of the calorimeter. Ensure a consistent and stable water flow.
3.  **Gas Supply:** Connect the gas supply to the calorimeter, typically through a pressure regulator and a gas meter.
4.  **Thermometers:** Insert the inlet and outlet water thermometers accurately. Ensure they are submerged sufficiently in the water jackets.
5.  **Overflow Pipe:** Connect an overflow pipe from the top of the water jacket to carry away the heated water.
6.  **Gas Meter Calibration (if necessary):** Ensure the gas meter is calibrated or its accuracy is known.

### 3.3. Procedure

1.  **Start Water Flow:** Turn on the water supply to achieve a stable and consistent flow rate through the calorimeter. Adjust the water inlet valve to achieve a suitable temperature rise (typically 10-15°C).
2.  **Light the Gas:** Ignite the gas at the burner.
3.  **Measure Water Flow Rate:**
    *   **Method 1 (Weir):** Collect the overflow water for a fixed period (e.g., 1 minute) using a measuring cylinder or by weighing it. Calculate the mass of water flowing per unit time.
    *   **Method 2 (Flow Control Valve):** If the calorimeter has a calibrated flow control, it can be set to a desired rate.
4.  **Record Initial Readings:** Once the system is stable (steady water flow, steady flame), record:
    *   Inlet water temperature ($T_{w,in}$)
    *   Outlet water temperature ($T_{w,out}$)
    *   Room temperature ($T_{room}$)
    *   Barometric pressure ($P_{atm}$)
    *   Initial reading of the gas meter ($V_{initial}$)
5.  **Burn Gas for a Fixed Duration:** Allow the gas to burn for a specific duration (e.g., 5 or 10 minutes) under stable conditions.
6.  **Record Final Readings:**
    *   Final reading of the gas meter ($V_{final}$)
    *   Continue collecting overflow water and measure its total volume or mass.
7.  **Calculate Gas Consumption:** Volume of gas consumed ($V_{gas}$) = $V_{final} - V_{initial}$.
8.  **Repeat Measurements:** Repeat the experiment at least three times for reliability and average the results.

### 3.4. Observations and Calculations

**Observations:**

| Trial | Inlet Water Temp. ($T_{w,in}$), °C | Outlet Water Temp. ($T_{w,out}$), °C | Water Flow Rate ($\dot{m}_w$), kg/min | Gas Volume Consumed ($V_{gas}$), m³ | Duration of Run (t), min |
| :---- | :--------------------------------- | :----------------------------------- | :----------------------------------- | :------------------------------- | :---------------------- |
| 1     |                                    |                                      |                                      |                                  |                         |
| 2     |                                    |                                      |                                      |                                  |                         |
| 3     |                                    |                                      |                                      |                                  |                         |

**Calculations:**

1.  **Temperature Rise of Water ($\Delta T_w$):**
    $\Delta T_w = T_{w,out} - T_{w,in}$

2.  **Mass of Water ($\dot{m}_w$):**
    If volume is measured, $\dot{m}_w = \rho_w \times V_{water\_collected}$ (where $\rho_w$ is the density of water at the average temperature).
    If using a weir, it's usually measured directly in kg/min or L/min (and converted to kg/min assuming $\rho_w \approx 1$ kg/L).

3.  **Heat Absorbed by Water ($Q_{absorbed}$):**
    $Q_{absorbed} = \dot{m}_w \times c_{p,w} \times \Delta T_w$
    Where:
    *   $\dot{m}_w$ is the mass flow rate of water (kg/min).
    *   $c_{p,w}$ is the specific heat capacity of water (approx. 4.187 kJ/kg·°C).
    *   $\Delta T_w$ is the temperature rise of water (°C).

4.  **Volume of Gas Consumed ($V_{gas}$):**
    This is the difference between final and initial readings of the gas meter. It's usually measured at atmospheric pressure and ambient temperature.

5.  **Heat Released by Gas ($Q_{released}$):**
    This is equal to the heat absorbed by the water, $Q_{released} = Q_{absorbed}$.

6.  **Calorific Value (CV):**
    $CV = \frac{Q_{released}}{V_{gas}}$ (in kJ/m³)

    **Correction for Water Vapor Condensation:**
    The Junkers calorimeter is designed to condense most of the water vapor formed during combustion, meaning it primarily determines the **Higher Calorific Value (HCV)**. The heat released by the condensation of water vapor is accounted for in the heat absorbed by the cooling water.

    **Standardization (STP):** The volume of gas consumed is usually measured at ambient conditions. For comparison, it's often converted to Standard Temperature and Pressure (STP: 0°C and 1 atm) or Normal Temperature and Pressure (NTP: 20°C and 1 atm).
    Using the ideal gas law:
    $\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}$

    If measured volume $V_{gas}$ is at $P_{amb}$ (atmospheric pressure) and $T_{amb}$ (ambient temperature in Kelvin), and we want to convert to STP ($P_{STP} = 1$ atm, $T_{STP} = 273.15$ K):
    $V_{gas, STP} = V_{gas} \times \frac{P_{amb}}{P_{STP}} \times \frac{T_{STP}}{T_{amb}}$

    **Corrected Calorific Value:**
    $CV_{corrected} = \frac{Q_{released}}{V_{gas, STP}}$

**Example Calculation:**

**Given:**
*   Inlet Water Temperature ($T_{w,in}$) = 20.0 °C
*   Outlet Water Temperature ($T_{w,out}$) = 35.0 °C
*   Water flow rate ($\dot{m}_w$) = 2.0 kg/min
*   Gas volume consumed in 5 minutes ($V_{gas}$) = 0.15 m³ (at ambient conditions)
*   Ambient pressure ($P_{amb}$) = 0.98 atm
*   Ambient temperature ($T_{amb}$) = 25 °C = 298.15 K
*   Specific heat of water ($c_{p,w}$) = 4.187 kJ/kg·°C

**Calculations:**

1.  $\Delta T_w = 35.0 - 20.0 = 15.0$ °C
2.  $Q_{absorbed} = 2.0 \text{ kg/min} \times 4.187 \text{ kJ/kg·°C} \times 15.0 \text{ °C} = 125.61 \text{ kJ/min}$
3.  Gas consumption rate = $0.15 \text{ m³} / 5 \text{ min} = 0.03 \text{ m³/min}$
4.  $Q_{released} = 125.61 \text{ kJ/min}$
5.  $CV = \frac{125.61 \text{ kJ/min}}{0.03 \text{ m³/min}} = 4187 \text{ kJ/m³}$

**Standardization to STP (0°C, 1 atm):**
$V_{gas, STP} = 0.15 \text{ m³} \times \frac{0.98 \text{ atm}}{1.00 \text{ atm}} \times \frac{273.15 \text{ K}}{298.15 \text{ K}} = 0.1353 \text{ m³}$

**Corrected CV:**
$CV_{corrected} = \frac{125.61 \text{ kJ/min}}{0.1353 \text{ m³/min}} = 9283.8 \text{ kJ/m³}$

**Note:** The example calculation assumes the gas consumption was measured over 5 minutes and the heat absorbed is also per minute. If the gas volume is the total volume for the duration, the CV calculation would be:
$CV = \frac{125.61 \text{ kJ/min} \times 5 \text{ min}}{0.15 \text{ m³}} = 4187 \text{ kJ/m³}$ (Same as before)

**(Referenced from: Cengel, Heat Transfer a Practical Approach, Chapter 4 - Steady Heat Conduction in one dimension, involves heat transfer calculations. Holman, Heat transfer, Chapter 2 - Fundamentals of Heat Transfer, covers specific heat and heat transfer calculations.)**

## 4. Sources of Error and Precautions

**Sources of Error:**

*   **Inaccurate Thermometer Readings:** Calibration errors or improper immersion.
*   **Unstable Gas Flow Rate:** Fluctuations in gas pressure or flow.
*   **Unstable Water Flow Rate:** Inconsistent water supply or leaks.
*   **Incomplete Combustion:** Inadequate air supply leading to unburnt fuel.
*   **Heat Loss/Gain to Surroundings:** Inadequate insulation of the calorimeter.
*   **Incorrect Gas Volume Measurement:** Issues with the gas meter.
*   **Evaporation of Water:** From the burner or overflow.
*   **Impurities in Gas:** May affect combustion efficiency and heat release.
*   **Hygrometric Effects:** Absorption of moisture by the gas.

**Precautions:**

*   **Leveling:** Ensure the calorimeter is perfectly leveled.
*   **Water Flow:** Maintain a constant and adequate water flow.
*   **Gas Flow:** Ensure a stable gas supply pressure and flow rate.
*   **Temperature Difference:** Maintain a suitable temperature rise of water (avoid too low or too high).
*   **Stable Flame:** Allow the burner to stabilize before taking readings.
*   **Accurate Readings:** Record all readings precisely and at the correct time.
*   **Insulation:** Ensure the calorimeter is well-insulated from the surroundings.
*   **Cleanliness:** Keep the burner and internal parts clean.
*   **Air-Fuel Ratio:** Ensure proper mixing of gas and air for complete combustion.
*   **Repeatability:** Conduct multiple trials to ensure consistent results.
*   **Standardization:** Convert gas volume to standard conditions if comparison is needed.

**(Referenced from: Incropera & DeWitt, Fundamentals of Heat and Mass Transfer, discusses experimental methods and sources of error in heat transfer measurements.)**

## 5. Learning Outcomes Addressed

This module directly addresses the following learning outcomes:

*   **CO1: Measure thermo-physical properties of solid, liquid and gaseous fuels (Knowledge Level: K4)**
    *   By performing the experiment, students learn to measure the calorific value, which is a critical thermo-physical property of gaseous fuels. The process involves measuring gas volume, water flow rate, and temperature differences, all of which are instrumental measurements.

*   **CO2: Evaluate thermal properties of materials in conduction, convection and radiation (Knowledge Level: K4)**
    *   The core of the gas calorimeter's operation relies on **convection** (heat transfer from combustion gases to water) and to some extent **conduction** (through the calorimeter walls). The experiment allows for the evaluation of how efficiently heat is transferred and absorbed. The specific heat of water is a key thermal property used in the calculations.

## 6. Practice Questions and Answers

**Question 1:** Define Higher Calorific Value (HCV) and Lower Calorific Value (LCV) of a gaseous fuel. How are they related?

**Answer:**
*   **HCV (Higher Calorific Value):** The total amount of heat released when a unit quantity of fuel is completely burned, and the combustion products are cooled to the initial temperature, with all water formed condensing to liquid.
*   **LCV (Lower Calorific Value):** The amount of heat released when the combustion products are cooled to the initial temperature, with all water formed remaining in the gaseous state (steam).
*   **Relationship:** $LCV = HCV - (m_{H_2O} \times h_{fg})$, where $m_{H_2O}$ is the mass of water formed and $h_{fg}$ is the latent heat of vaporization of water.

**Question 2:** In a Junkers calorimeter experiment, the following data were recorded:
*   Inlet water temperature = 22°C
*   Outlet water temperature = 38°C
*   Water flow rate = 2.5 kg/min
*   Gas consumed in 6 minutes = 0.18 m³ (at ambient conditions)
*   Ambient pressure = 0.99 atm
*   Ambient temperature = 27°C
*   $c_{p,w}$ = 4.18 kJ/kg·°C

Calculate the Higher Calorific Value (HCV) of the gas in kJ/m³ at STP (0°C, 1 atm).

**Answer:**
1.  Temperature rise of water ($\Delta T_w$) = 38°C - 22°C = 16°C
2.  Heat absorbed by water per minute ($Q_{absorbed}$) = $\dot{m}_w \times c_{p,w} \times \Delta T_w$
    $Q_{absorbed} = 2.5 \text{ kg/min} \times 4.18 \text{ kJ/kg·°C} \times 16 \text{ °C} = 167.2 \text{ kJ/min}$
3.  Gas consumption rate = 0.18 m³ / 6 min = 0.03 m³/min
4.  HCV (at ambient conditions) = $Q_{absorbed} / (\text{Gas consumption rate})$
    HCV = 167.2 kJ/min / 0.03 m³/min = 5573.33 kJ/m³

5.  Standardize gas volume to STP:
    $T_{amb} = 27°C = 300.15$ K
    $V_{gas, STP} = V_{gas} \times \frac{P_{amb}}{P_{STP}} \times \frac{T_{STP}}{T_{amb}}$
    $V_{gas, STP} = 0.18 \text{ m³} \times \frac{0.99 \text{ atm}}{1.00 \text{ atm}} \times \

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
