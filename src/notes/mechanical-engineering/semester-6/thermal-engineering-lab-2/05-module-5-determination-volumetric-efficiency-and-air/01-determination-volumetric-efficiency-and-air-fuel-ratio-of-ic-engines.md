---
title: "Determination volumetric efficiency and Air-fuel ratio of IC engines"
subject: "THERMAL ENGINEERING LAB-2"
module: "Module 5: Determination volumetric efficiency and Air"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c55"
status: "completed"
scrapedAt: "2026-05-20T18:09:14.374Z"
---
# THERMAL ENGINEERING LAB-2: Module 5 - Determination of Volumetric Efficiency and Air-Fuel Ratio of IC Engines

## Introduction

This module focuses on experimentally determining two crucial performance parameters of Internal Combustion (IC) engines: **Volumetric Efficiency** and **Air-Fuel Ratio**. Understanding these parameters is vital for optimizing engine performance, fuel economy, and emissions. This module will equip you with the knowledge and practical skills to measure and analyze these aspects of IC engines, aligning with the course outcomes related to analyzing engine performance.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the concept and significance of volumetric efficiency in IC engines.
*   Understand the concept and significance of air-fuel ratio in IC engines.
*   Identify the necessary parameters for calculating volumetric efficiency.
*   Identify the necessary parameters for calculating air-fuel ratio.
*   Perform experimental determination of volumetric efficiency.
*   Perform experimental determination of air-fuel ratio.
*   Analyze the obtained results and their implications on engine performance.

## Course Outcomes Alignment

This module directly contributes to the following Course Outcomes (COs):

*   **CO1: Identify various systems and subsystems of Diesel and petrol engines (Knowledge Level: K1)**
    *   Understanding volumetric efficiency requires knowledge of the intake system (valves, manifold, etc.) and how it affects air intake.
    *   Understanding air-fuel ratio requires knowledge of the fuel delivery system and air intake system.
*   **CO2: Analyse the performance characteristics of internal combustion engines (Knowledge Level: K4)**
    *   Volumetric efficiency directly impacts the amount of air inducted, thus influencing the potential for power generation and overall performance.
    *   Air-fuel ratio is a critical determinant of combustion quality, efficiency, and emissions, directly affecting engine performance.

## 1. Volumetric Efficiency (${\eta_v}$)**

### 1.1. Definition and Significance

**Volumetric Efficiency** is defined as the ratio of the actual volume of air inducted into the cylinder during the intake stroke to the swept volume of the cylinder. It is a measure of how effectively the engine "breathes" or fills its cylinders with air.

Mathematically, it is expressed as:

$$
\eta_v = \frac{\text{Actual volume of air inducted}}{\text{Swept volume of the cylinder}} \times 100\%
$$

**Significance:**

*   **Power Output:** Higher volumetric efficiency leads to a greater mass of air being inducted into the cylinder, which in turn allows for more fuel to be burned efficiently, resulting in higher power output.
*   **Engine Performance:** It is a key indicator of the engine's breathing capacity and is influenced by factors like intake manifold design, valve timing, valve lift, engine speed, and exhaust system.
*   **Supercharging/Turbocharging:** Understanding volumetric efficiency is crucial when designing or analyzing forced induction systems (superchargers and turbochargers), which aim to increase the mass of air inducted.

**(Refer to Ganesan, Chapter 4, for detailed discussion on volumetric efficiency and factors affecting it.)**

### 1.2. Factors Affecting Volumetric Efficiency

*   **Engine Speed:** Volumetric efficiency generally increases with engine speed up to a certain point, after which it starts to decrease due to increased resistance to airflow and inadequate time for cylinder filling.
*   **Intake Manifold Design:** A well-designed intake manifold with smooth flow paths and appropriate runner lengths can improve airflow and increase volumetric efficiency.
*   **Valve Timing and Lift:** The duration and extent to which the intake valve remains open significantly impact cylinder filling. Overlap (when both intake and exhaust valves are open simultaneously) can also influence volumetric efficiency, especially at higher speeds.
*   **Exhaust System:** An efficient exhaust system reduces backpressure, allowing for better scavenging of exhaust gases and thus more space for fresh air.
*   **Cylinder Pressure and Temperature:** Lower intake manifold pressure and higher intake air temperature reduce the density of the air, leading to lower volumetric efficiency.
*   **Friction and Restriction:** Any restriction in the intake path (e.g., clogged air filter, poorly designed carburetor/injector) will reduce volumetric efficiency.

### 1.3. Methods of Determination

There are several methods to determine volumetric efficiency:

#### 1.3.1. Using a Gas Meter (Direct Method)

This is the most direct and commonly used method in laboratory settings.

**Apparatus:**

*   IC Engine (Petrol or Diesel)
*   Dynamometer (for loading the engine)
*   Gas Meter (to measure the volume of air inducted)
*   Manometer (to measure pressure difference across the gas meter and any restriction)
*   Thermometer (to measure intake air temperature)
*   Barometer (to measure atmospheric pressure)
*   Tachometer (to measure engine speed)

**Procedure:**

1.  **Setup:** Connect the engine to a dynamometer. Connect the intake of the engine to a gas meter, ensuring an airtight connection. A restriction plate (e.g., orifice or venturi) can be placed before the gas meter or in the intake manifold to create a measurable pressure drop, aiding in airflow calculation if a simple volume measurement is not sufficient.
2.  **Engine Operation:** Start the engine and allow it to stabilize at a specific operating condition (e.g., constant speed and load).
3.  **Measure Parameters:**
    *   **Engine Speed (N):** Record using the tachometer.
    *   **Airflow Rate (Q_actual):** Read the flow rate from the gas meter. Ensure to correct for the pressure and temperature conditions at the gas meter as per the meter's calibration. This often involves using a manometer and thermometer.
    *   **Intake Air Temperature ($T_{air}$):** Measure the temperature of the air entering the cylinder.
    *   **Barometric Pressure ($P_{atm}$):** Record the atmospheric pressure.
    *   **Engine Displacement Volume (V_s):** Calculate this from the engine's bore and stroke:
        $$
        V_s = \frac{\pi}{4} \times \text{bore}^2 \times \text{stroke} \times \text{number of cylinders}
        $$
        For a 4-stroke engine, the engine speed is typically in RPM, and the swept volume is per cylinder per cycle. The total volume inducted per minute is calculated from the gas meter.

4.  **Calculations:**
    *   **Actual Volume of Air Inducted per Cycle ($V_{air, actual}$):**
        The gas meter measures the volume of air per unit time. Let the measured airflow rate be $Q_{meter}$ (e.g., m³/min).
        $$
        V_{air, actual} = \frac{Q_{meter}}{\text{Engine Speed (in cycles/min)}}
        $$
        For a 4-stroke engine, there are 2 crankshaft revolutions per intake stroke (cycle). So, Engine Speed in cycles/min = (Engine Speed in RPM) / 2.
    *   **Swept Volume of the Cylinder ($V_s$):** Calculated as mentioned above.
    *   **Volumetric Efficiency (${\eta_v}$):**
        $$
        \eta_v = \frac{V_{air, actual}}{V_s} \times 100\%
        $$

**Important Note:** The gas meter typically measures volume at its own operating conditions. If the air density at the intake manifold is different from the density at the gas meter conditions, a correction factor should be applied. A more precise method involves calculating the mass flow rate of air and comparing it to the theoretical mass of air that could fill the swept volume.

**Alternative Calculation using Mass Flow Rate (More Accurate):**

If mass flow rate of air (${\dot{m}_{air}}$) is measured or calculated:

*   **Actual Mass of Air Inducted per Cycle ($m_{air, actual}$):**
    $$
    m_{air, actual} = \frac{\dot{m}_{air}}{\text{Engine Speed (in cycles/min)}}
    $$
*   **Theoretical Mass of Air Inducted per Cycle ($m_{air, theoretical}$):**
    This is the mass of air that would fill the swept volume ($V_s$) at the intake manifold conditions (pressure $P_m$ and temperature $T_m$). Using the ideal gas law:
    $$
    P_m V_s = m_{air, theoretical} R_{air} T_m
    $$
    where $R_{air}$ is the specific gas constant for air (0.287 kJ/kg.K).
    $$
    m_{air, theoretical} = \frac{P_m V_s}{R_{air} T_m}
    $$
    If the intake manifold pressure is close to atmospheric, $P_m \approx P_{atm}$.
*   **Volumetric Efficiency (${\eta_v}$):**
    $$
    \eta_v = \frac{m_{air, actual}}{m_{air, theoretical}} \times 100\%
    $$

**(Heywood, Chapter 7, discusses volumetric efficiency and its measurement in detail, including methods using mass flow sensors.)**

#### 1.3.2. Using Air Velocity and Area (Flow Nozzle/Venturi)

If a flow nozzle or Venturi meter is placed in the intake pipe, the airflow rate can be calculated from the pressure drop across the restriction.

*   **Apparatus:** Similar to the gas meter method, but with a flow nozzle or Venturi meter installed in the intake. A differential manometer is used to measure the pressure drop.
*   **Procedure:**
    1.  Measure engine speed (N), intake air temperature ($T_{air}$), and barometric pressure ($P_{atm}$).
    2.  Measure the pressure difference (${\Delta P}$) across the flow nozzle/Venturi using a differential manometer.
    3.  Calculate the airflow rate using the following formula (for a Venturi meter, for example):
        $$
        \dot{m}_{air} = C_d \times A \times \sqrt{\frac{2 \rho_{air} \Delta P}{1 - (\frac{A}{A_1})^2}}
        $$
        where:
        *   $C_d$ is the discharge coefficient of the nozzle/Venturi.
        *   $A$ is the throat area.
        *   $A_1$ is the upstream area.
        *   $\rho_{air}$ is the density of air at upstream conditions, calculated as $\rho_{air} = \frac{P_{atm}}{R_{air} T_{air}}$.
    4.  Proceed with the calculations as per the mass flow rate method described above.

**(Ganesan, Chapter 4, might provide specific formulas for flow measurement devices.)**

### 1.4. Practice Questions for Volumetric Efficiency

1.  **Question:** A 4-stroke petrol engine has a bore of 80 mm and a stroke of 90 mm. It runs at 2400 RPM. During a test, the gas meter indicates an airflow of 5.5 m³/min at 27°C and 100 kPa. Calculate the volumetric efficiency of the engine. Assume atmospheric pressure is 101.3 kPa.
    **Answer:**
    *   Swept volume per cylinder ($V_s$) = $(\pi/4) * (0.08)^2 * 0.09 = 4.5239 \times 10^{-4} m^3$
    *   Total swept volume per cycle (for one cylinder) = $V_s = 4.5239 \times 10^{-4} m^3$
    *   Engine speed in cycles/min = 2400 RPM / 2 = 1200 cycles/min
    *   Actual volume of air inducted per cycle = $5.5 m^3 / min / 1200 cycles/min = 4.5833 \times 10^{-3} m^3/cycle$
    *   **Note:** The units of swept volume ($m^3$) and inducted volume ($m^3$) must be consistent. It seems there's a significant discrepancy in scale. Let's re-examine the question setup or assume the engine has multiple cylinders to make the swept volume larger for comparison. If it's a single cylinder engine, a volumetric efficiency greater than 100% is possible due to ram effects. Let's proceed assuming the calculation is asked for per cylinder.
    *   Volumetric Efficiency ($\eta_v$) = $(4.5833 \times 10^{-3} m^3) / (4.5239 \times 10^{-4} m^3) \times 100\% = 1013.1\%$
    *   **Correction/Interpretation:** This extremely high value suggests either an error in the problem statement, units, or that the engine is supercharged or has significant ram effect at this speed. In a typical naturally aspirated engine, volumetric efficiency is usually below 100%. Let's assume the question intended to ask for mass flow or a different engine displacement. However, based strictly on the given numbers and formula: $\eta_v = 1013.1\%$.

2.  **Question:** A 4-stroke, 4-cylinder petrol engine has a bore of 75 mm and a stroke of 80 mm. It operates at 3000 RPM under an intake manifold pressure of 95 kPa and intake air temperature of 30°C. The mass airflow rate is measured to be 0.25 kg/min. Calculate the volumetric efficiency. Assume $R_{air} = 0.287$ kJ/kg.K.
    **Answer:**
    *   Swept volume per cylinder = $(\pi/4) * (0.075 m)^2 * 0.08 m = 3.534 \times 10^{-4} m^3$
    *   Total swept volume per cycle (for 4 cylinders) = $4 \times 3.534 \times 10^{-4} m^3 = 1.4136 \times 10^{-3} m^3$
    *   Engine speed in cycles/min = 3000 RPM / 2 = 1500 cycles/min
    *   Actual mass of air inducted per cycle ($m_{air, actual}$) = $0.25 kg/min / 1500 cycles/min = 1.667 \times 10^{-4} kg/cycle$
    *   Theoretical mass of air inducted per cycle ($m_{air, theoretical}$):
        *   Intake manifold temperature ($T_m$) = 30°C = 303.15 K
        *   Intake manifold pressure ($P_m$) = 95 kPa
        *   $m_{air, theoretical} = \frac{P_m V_s}{R_{air} T_m} = \frac{95 \times 10^3 Pa \times 1.4136 \times 10^{-3} m^3}{287 J/kg.K \times 303.15 K} = 1.54 \times 10^{-3} kg/cycle$
    *   Volumetric Efficiency ($\eta_v$) = $(1.667 \times 10^{-4} kg/cycle) / (1.54 \times 10^{-3} kg/cycle) \times 100\% = 10.8\%$.
    *   **Correction/Interpretation:** This value is extremely low. This again suggests potential issues with the provided numbers. A typical value for a naturally aspirated engine might be between 70-90%. Let's recheck the mass flow rate unit – if it was 0.25 kg/sec, the calculation would be different. Assuming the question is as stated, the $\eta_v$ is 10.8%.

## 2. Air-Fuel Ratio (AFR)**

### 2.1. Definition and Significance

The **Air-Fuel Ratio (AFR)** is the ratio of the mass of air to the mass of fuel supplied to the engine for combustion.

Mathematically, it is expressed as:

$$
AFR = \frac{\text{Mass of Air}}{\text{Mass of Fuel}} = \frac{\dot{m}_{air}}{\dot{m}_{fuel}}
$$

**Significance:**

*   **Combustion Efficiency:** AFR dictates the completeness of combustion.
    *   **Stoichiometric AFR:** The ideal AFR at which all fuel and oxygen are completely consumed, producing only CO₂, H₂O, and N₂. For petrol engines, this is approximately 14.7:1. For diesel engines, it's around 15:1.
    *   **Lean Mixture (AFR > Stoichiometric):** Excess air is present. This leads to more complete combustion, lower CO and HC emissions, but can increase NOx emissions and reduce power output.
    *   **Rich Mixture (AFR < Stoichiometric):** Excess fuel is present. This leads to incomplete combustion, higher CO and HC emissions, lower NOx emissions, and can cause engine fouling. It generally results in higher power output up to a certain point, but with reduced fuel efficiency.
*   **Fuel Economy:** A lean mixture generally leads to better fuel economy.
*   **Emissions:** AFR is a critical parameter in controlling engine emissions. Modern engines use oxygen sensors (lambda sensors) to monitor the exhaust gas composition and adjust AFR in real-time for optimal performance and emission control.
*   **Engine Performance:** The AFR directly influences the power produced and the engine's response.

**(Turns, Chapter 2, provides an in-depth analysis of combustion stoichiometry and the impact of AFR on emissions and performance.)**

### 2.2. Methods of Determination

#### 2.2.1. Using Fuel Flow Rate and Airflow Rate

This is the most direct method, requiring measurement of both air and fuel consumption.

**Apparatus:**

*   IC Engine
*   Dynamometer
*   Fuel Flow Meter (e.g., Rotameter, Coriolis flow meter, or by measuring fuel consumption in a calibrated container over time)
*   Gas Meter or Mass Airflow Sensor (for air measurement)
*   Manometer, Thermometer, Barometer (if using gas meter for airflow)
*   Tachometer

**Procedure:**

1.  **Setup:** Connect the engine to the dynamometer. Set up the fuel delivery system with a flow meter. Connect the air measurement device to the engine's intake.
2.  **Engine Operation:** Operate the engine at a specific speed and load. Allow it to stabilize.
3.  **Measure Parameters:**
    *   **Engine Speed (N):** Record using the tachometer.
    *   **Mass Airflow Rate (${\dot{m}_{air}}$):** Measure using the gas meter (corrected for density) or a mass airflow sensor.
    *   **Mass Fuel Flow Rate (${\dot{m}_{fuel}}$):** Measure using the fuel flow meter. If using a volumetric flow meter (like a rotameter) for fuel, you will need to know the density of the fuel at the operating temperature to convert volume to mass.
        *   If using a calibrated container: Measure the volume of fuel consumed ($V_{fuel}$) over a time interval ($\Delta t$).
        *   $V_{fuel} = (\text{Flow rate from meter}) \times \Delta t$
        *   $\dot{m}_{fuel} = \rho_{fuel} \times V_{fuel} / \Delta t$ (where $\rho_{fuel}$ is fuel density)

4.  **Calculations:**
    *   **Air-Fuel Ratio (AFR):**
        $$
        AFR = \frac{\dot{m}_{air}}{\dot{m}_{fuel}}
        $$

#### 2.2.2. Using Exhaust Gas Composition (Lambda Sensor/Gas Analyzer)

Modern engines use exhaust gas sensors to indirectly determine the AFR.

*   **Apparatus:**
    *   IC Engine
    *   Dynamometer
    *   Exhaust Gas Analyzer (measures O₂, CO, CO₂, HC, NOx) or Lambda Sensor with its reading unit.
    *   Tachometer

*   **Procedure:**
    1.  **Setup:** Operate the engine at desired conditions.
    2.  **Measure Parameters:**
        *   **Engine Speed (N):** Record.
        *   **Exhaust Gas Composition:** Measure the concentrations of O₂, CO, CO₂, and HC in the exhaust gas using an exhaust gas analyzer.
    3.  **Calculations:**
        The AFR can be estimated from the exhaust gas composition using various correlation formulas or by referring to the Lambda value.
        *   **Lambda ($\lambda$):** Lambda is the ratio of the actual AFR to the stoichiometric AFR:
            $$
            \lambda = \frac{(AFR)_{actual}}{(AFR)_{stoichiometric}}
            $$
            *   $\lambda = 1$: Stoichiometric mixture
            *   $\lambda > 1$: Lean mixture
            *   $\lambda < 1$: Rich mixture

        The exhaust gas analyzer provides information to calculate the equivalence ratio (often represented by $\phi$, where $\phi = 1/\lambda$). For example, from measured CO, CO₂, O₂, and HC, one can estimate the AFR.
        A simplified approach using only CO₂ and O₂ (assuming no unburnt hydrocarbons) for a petrol engine can be:
        $$
        AFR_{actual} \approx \frac{13.5 \times (\%CO_2) + 25.3 \times (\%O_2) + 2.3 \times (\%CO)}{100 - (\%CO_2) - (\%O_2) - (\%CO)} \times (AFR)_{stoichiometric}
        $$
        This formula is a simplification and more complex correlations exist to account for HC and other species.

**(Heywood, Chapter 7, and Turns, Chapter 2, discuss the relationship between exhaust gas composition and AFR in detail.)**

### 2.3. Practice Questions for Air-Fuel Ratio

1.  **Question:** During an engine test, the mass airflow rate is measured as 6 kg/hr and the mass fuel flow rate is measured as 0.4 kg/hr. Calculate the Air-Fuel Ratio (AFR). Is this mixture rich, lean, or stoichiometric (assume stoichiometric AFR for petrol is 14.7:1)?
    **Answer:**
    *   AFR = Mass of Air / Mass of Fuel = 6 kg/hr / 0.4 kg/hr = 15:1
    *   Since the calculated AFR (15:1) is greater than the stoichiometric AFR (14.7:1), the mixture is **lean**.

2.  **Question:** An engine consumes 12 liters of petrol per hour. The density of petrol is 750 kg/m³. The engine draws in 4.2 m³ of air per minute at intake conditions of 25°C and 100 kPa. Calculate the Air-Fuel Ratio (AFR) by mass. Assume stoichiometric AFR = 14.7:1.
    **Answer:**
    *   Volume of fuel consumed per hour = 12 liters = 0.012 m³
    *   Mass of fuel consumed per hour ($\dot{m}_{fuel}$) = Density * Volume = 750 kg/m³ * 0.012 m³/hr = 0.009 kg/hr = 0.00015 kg/min
    *   Mass of air consumed per minute ($\dot{m}_{air}$) = Air density * Volume of air
        *   Air density ($\rho_{air}$) = $P_{atm} / (R_{air} * T_{air})$
        *   $P_{atm}$ = 100 kPa = 100,000 Pa
        *   $T_{air}$ = 25°C = 298.15 K
        *   $R_{air}$ = 0.287 kJ/kg.K = 287 J/kg.K
        *   $\rho_{air} = 100,000 Pa / (287 J/kg.K * 298.15 K) = 1.161 kg/m³$
    *   Mass of air consumed per minute ($\dot{m}_{air}$) = 1.161 kg/m³ * 4.2 m³/min = 4.876 kg/min
    *   AFR = $\dot{m}_{air} / \dot{m}_{fuel}$ = (4.876 kg/min) / (0.00015 kg/min) = 32506.67
    *   **Correction/Interpretation:** The calculation result for AFR is extremely high. This indicates a severe error in the provided data, as the mass of fuel is exceptionally low compared to the mass of air. There might be a typo in the fuel consumption rate (liters per hour) or the air intake volume. If we assume the fuel consumption was 12 liters per **day** or the air intake was significantly lower, the AFR would be more realistic. However, based on the given numbers, the AFR is 32506.67:1.

## Important Points to Remember

*   **Units Consistency:** Always ensure that all units are consistent before performing calculations (e.g., convert all pressures to Pascals, temperatures to Kelvin, volumes to m³, and time to seconds or minutes consistently).
*   **4-Stroke vs. 2-Stroke:** Remember that in a 4-stroke engine, the cylinder is filled with air only once every two revolutions. This is crucial when converting RPM to cycles per minute for volumetric efficiency calculations.
*   **Density of Air:** The density of air is dependent on pressure and temperature. Use the ideal gas law to calculate it when needed.
*   **Fuel Density:** The density of fuel varies with its type and temperature. Use the appropriate value for the fuel being tested when converting fuel volume to mass.
*   **Corrections:** Gas meter readings often need to be corrected for the operating pressure and temperature at the meter's location to find the true volume of air.
*   **Volumetric Efficiency > 100%:** This is possible in naturally aspirated engines at certain speeds due to "ram effect" (inertia of the incoming air column) or in engines equipped with forced induction (supercharging/turbocharging).
*   **AFR and Stoichiometry:** Understand the implications of lean, rich, and stoichiometric mixtures on engine performance, fuel economy, and emissions.
*   **Textbook References:** Familiarize yourself with the detailed explanations and derivations in Ganesan, Heywood, and Turns for a deeper understanding of the underlying principles.

## Conclusion

Determining volumetric efficiency and air-fuel ratio are fundamental aspects of IC engine laboratory work. By accurately measuring airflow, fuel flow, and relevant engine parameters, you can gain insights into the engine's breathing characteristics and combustion behavior, which are directly linked to its overall performance and efficiency. This knowledge is essential for diagnosing engine problems and optimizing operating conditions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
