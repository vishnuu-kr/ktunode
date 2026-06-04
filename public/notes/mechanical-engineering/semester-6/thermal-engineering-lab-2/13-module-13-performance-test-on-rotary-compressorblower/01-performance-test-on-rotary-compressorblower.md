---
title: "Performance test on rotary compressor/blower"
subject: "THERMAL ENGINEERING LAB-2"
module: "Module 13: Performance test on rotary compressor/blower"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c65"
status: "completed"
scrapedAt: "2026-05-20T18:09:19.973Z"
---
# THERMAL ENGINEERING LAB-2: Module 13 - Performance Test on Rotary Compressor/Blower

---

## 1. Introduction to Rotary Compressors and Blowers

This module focuses on understanding the operational principles and evaluating the performance of rotary compressors and blowers through practical testing. These machines are crucial in various industrial applications for increasing the pressure of a fluid, typically air.

**Key Concepts:**

*   **Compressor:** A device that increases the pressure of a gas by reducing its volume.
*   **Blower:** A type of compressor that moves a large volume of gas at relatively low pressures. The distinction is often based on the pressure ratio achieved.
*   **Rotary Compressor:** A type of compressor that uses rotating elements to compress the gas. This contrasts with reciprocating compressors which use pistons.
*   **Positive Displacement Compressors:** These compressors trap a fixed volume of gas and then reduce its volume, thereby increasing its pressure. Rotary compressors generally fall under this category.

**Types of Rotary Compressors/Blowers:**

*   **Screw Compressors:** Utilize two intermeshing helical rotors to compress gas. They are known for high efficiency and continuous output.
*   **Roots Blowers:** Employ two or more lobed rotors that rotate in opposite directions to trap and transfer gas without significant compression within the casing itself. The compression occurs primarily due to resistance downstream.
*   **Vane Compressors:** Feature a rotor with sliding vanes that trap and compress gas as the rotor rotates eccentrically within a casing.
*   **Centrifugal Compressors:** While technically rotary, they work on dynamic principles rather than positive displacement. They use an impeller to impart kinetic energy to the gas, which is then converted to pressure energy in a diffuser. (Note: This module likely focuses on positive displacement rotary types, but understanding the distinction is important).

**Relevance to Course Outcomes:**

*   **CO1 (Identify systems):** Understanding the components of a rotary compressor/blower system (motor, drive, compressor unit, inlet/outlet piping, instrumentation).
*   **CO4 (Interpret performance):** This entire module is dedicated to interpreting the performance characteristics of these machines.

**Reference Integration:**

While specific textbooks by Ganesan, Heywood, and Turns focus on IC Engines and Combustion, the fundamental principles of fluid mechanics, thermodynamics, and work done on a fluid are applicable. Concepts like specific volume, pressure, temperature, and energy transfer are core to understanding compressor performance.

---

## 2. Principles of Operation of Rotary Compressors/Blowers

Rotary compressors achieve compression by mechanical action of rotating elements. The key is trapping a volume of fluid and then reducing that volume, or forcing it against a resistance.

**Key Concepts:**

*   **Displacement:** The volume of fluid moved per revolution or per unit time.
*   **Compression Ratio (or Pressure Ratio):** The ratio of the discharge pressure to the suction pressure.
    $$ \text{Pressure Ratio} (r_p) = \frac{P_{discharge}}{P_{suction}} $$
*   **Adiabatic Process:** A process where no heat is transferred into or out of the system. Ideally, compression is often considered adiabatic for theoretical calculations.
*   **Isothermal Process:** A process where the temperature remains constant. This is the ideal scenario for minimum work input, but difficult to achieve in practice.
*   **Work Input:** The energy required to drive the compressor. This is influenced by the compression process and efficiency.

**How it works (General Principle):**

1.  **Inlet:** Gas enters the working chamber.
2.  **Trapping:** Rotating elements isolate a fixed volume of gas.
3.  **Compression:** The volume available to the trapped gas is reduced by the movement of the rotating elements, or the gas is forced against an external resistance.
4.  **Discharge:** The compressed gas is expelled from the working chamber.

**Example:**

*   **Roots Blower:** Two figure-eight rotors rotate in sync. As they rotate, pockets of air are trapped between the rotor lobes and the casing. These pockets are then pushed towards the discharge outlet. The compression is minimal within the blower itself; the pressure build-up is due to the resistance at the discharge.

**Reference Integration:**

*   **Ganesan (IC Engines):** Concepts of displacement, volumetric efficiency, and work done per cycle are analogous to how a compressor operates. The thermodynamic cycles discussed for engines can inform the understanding of compression processes.
*   **Heywood (IC Engine Fundamentals):** Similar to Ganesan, Heywood provides a solid foundation in thermodynamics and fluid handling within engines, which translates to compressor principles.

---

## 3. Performance Parameters and Instrumentation

To evaluate the performance of a rotary compressor/blower, we measure key parameters using various instruments.

**Key Performance Parameters:**

*   **Flow Rate ($Q$):** The volume or mass of fluid delivered per unit time.
    *   **Volumetric Flow Rate:** Typically measured in m³/min or L/min.
    *   **Mass Flow Rate:** Typically measured in kg/min or kg/s.
*   **Inlet Pressure ($P_{suction}$):** The absolute pressure of the gas entering the compressor.
*   **Discharge Pressure ($P_{discharge}$):** The absolute pressure of the gas leaving the compressor.
*   **Inlet Temperature ($T_{suction}$):** The absolute temperature of the gas entering the compressor.
*   **Discharge Temperature ($T_{discharge}$):** The absolute temperature of the gas leaving the compressor.
*   **Speed of Rotation ($N$):** Typically measured in RPM (revolutions per minute).
*   **Power Input ($P_{input}$):** The electrical or mechanical power consumed by the compressor's drive motor.

**Instrumentation:**

*   **Pressure Gauges/Transducers:** For measuring $P_{suction}$ and $P_{discharge}$. Manometers are also used.
*   **Thermometers/RTDs/Thermocouples:** For measuring $T_{suction}$ and $T_{discharge}$.
*   **Flow Meters:**
    *   **Orifice Plate/Venturi Meter:** Used in conjunction with a differential pressure transducer to measure flow rate based on Bernoulli's principle. Commonly used in lab setups.
    *   **Rotameter:** A variable area flow meter for direct visual indication of flow rate.
    *   **Mass Flow Meters:** Directly measure mass flow rate.
*   **Tachometer:** For measuring the speed of rotation ($N$).
*   **Wattmeter/Power Analyzer:** For measuring the electrical power input to the motor.

**Important Point to Remember:** Always ensure that pressure readings are absolute pressures for accurate calculations. Gauge pressure needs to be converted by adding atmospheric pressure.

**Relevance to Course Outcomes:**

*   **CO4 (Interpret performance):** Understanding these parameters and how they are measured is fundamental to interpreting performance.

---

## 4. Performance Test Procedure

A systematic procedure is followed to conduct a performance test on a rotary compressor/blower. The goal is to gather data at different operating conditions.

**General Procedure:**

1.  **System Setup:**
    *   Ensure the compressor/blower is correctly installed and connected to the motor and power supply.
    *   Connect all necessary instrumentation (pressure gauges, thermometers, flow meters, tachometer, wattmeter).
    *   Verify that the discharge line has a suitable valve or throttling mechanism to vary the back pressure.
    *   Ensure adequate ventilation and safety precautions are in place.

2.  **Initial Checks:**
    *   Check lubricant levels (if applicable).
    *   Ensure all connections are secure.
    *   Verify instrumentation is calibrated and functioning correctly.

3.  **Running the Test:**
    *   Start the motor and bring the compressor/blower to its rated operating speed (often maintained constant).
    *   **Varying Load Conditions:**
        *   Start with the discharge valve fully open (minimum back pressure).
        *   Gradually close the discharge valve to increase the back pressure and hence the load on the compressor.
        *   Take readings at several stable points across the range of discharge pressures.
    *   **Data Recording:** For each operating point, record the following:
        *   Inlet Pressure ($P_{suction}$)
        *   Discharge Pressure ($P_{discharge}$)
        *   Inlet Temperature ($T_{suction}$)
        *   Discharge Temperature ($T_{discharge}$)
        *   Flow Rate ($Q$)
        *   Speed of Rotation ($N$)
        *   Power Input ($P_{input}$)
        *   Atmospheric Pressure ($P_{atm}$)

4.  **Shutdown:**
    *   Gradually open the discharge valve to its fully open position.
    *   Stop the motor.

**Important Point to Remember:** Allow the system to stabilize at each load condition before taking readings to ensure accuracy.

**Relevance to Course Outcomes:**

*   **CO4 (Interpret performance):** This procedure directly enables the collection of data required for performance interpretation.

---

## 5. Data Analysis and Performance Calculations

Once the data is collected, it is analyzed to derive key performance indicators.

**Key Calculations:**

*   **Pressure Ratio ($r_p$):**
    $$ r_p = \frac{P_{discharge}}{P_{suction}} $$
    (Ensure $P$ values are absolute).

*   **Specific Work Input (per unit mass of air):** This represents the theoretical work required to compress a unit mass of air.
    *   **Isothermal Work Input ($W_{iso}$):** Minimum theoretical work.
        $$ W_{iso} = R \cdot T_{suction} \cdot \ln \left( \frac{P_{discharge}}{P_{suction}} \right) $$
        Where R is the specific gas constant for air (approx. 287 J/kg·K).
    *   **Adiabatic Work Input ($W_{adia}$):** Theoretical work for adiabatic compression.
        $$ W_{adia} = \frac{\gamma}{\gamma - 1} \cdot R \cdot T_{suction} \left[ \left( \frac{P_{discharge}}{P_{suction}} \right)^{\frac{\gamma-1}{\gamma}} - 1 \right] $$
        Where $\gamma$ is the ratio of specific heats for air (approx. 1.4).

*   **Actual Work Input (per unit mass):** Calculated from measured power input and mass flow rate.
    $$ W_{actual} = \frac{P_{input} (\text{Watts})}{m_{dot} (\text{kg/s})} $$
    Where $m_{dot}$ is the mass flow rate.

*   **Mass Flow Rate ($m_{dot}$):** If volumetric flow rate ($Q_{vol}$ in m³/s) is measured, and suction density ($\rho_{suction}$) is known:
    $$ m_{dot} = Q_{vol} \cdot \rho_{suction} $$
    (Density of air can be calculated using the ideal gas law: $\rho = P / (R \cdot T)$).

*   **Volumetric Efficiency ($\eta_{vol}$):** The ratio of the actual volume of air delivered to the theoretical swept volume of the compressor.
    *   **Theoretical Swept Volume Flow Rate ($Q_{swept}$):** $Q_{swept} = \frac{\pi D^2 L N}{4}$ (for a reciprocating piston, but analogous concept for rotary). For rotary, it's displacement per revolution times speed.
    *   **Actual Delivered Volume Flow Rate ($Q_{delivered}$):** This is the measured volumetric flow rate at suction conditions.
        $$ \eta_{vol} = \frac{Q_{delivered}}{Q_{swept}} $$
        *(Note: For rotary positive displacement machines, volumetric efficiency can be related to the internal leakage. A simpler approach often involves comparing actual mass flow to theoretical flow based on ideal conditions.)*
        A common definition relates actual delivered volume at suction conditions to the theoretical displacement:
        $$ \eta_{vol} = \frac{Q_{actual, suction}}{V_{swept} \cdot N} $$
        Where $V_{swept}$ is the total swept volume per revolution.

*   **Isothermal Efficiency ($\eta_{iso}$):** The ratio of theoretical isothermal work to actual work input.
    $$ \eta_{iso} = \frac{W_{iso}}{W_{actual}} $$

*   **Adiabatic Efficiency ($\eta_{adia}$):** The ratio of theoretical adiabatic work to actual work input.
    $$ \eta_{adia} = \frac{W_{adia}}{W_{actual}} $$

*   **Overall Efficiency:** Can be defined in various ways, often relating the work delivered to the fluid to the power input.

**Reference Integration:**

*   **Ganesan & Heywood:** These books provide the thermodynamic basis for calculating ideal work (isothermal and adiabatic) and understanding efficiencies. The principles of work done on a gas are directly applicable.
*   **Turns (Combustion):** While focused on combustion, the thermodynamics and heat transfer principles are relevant for understanding the temperature rise during compression and its impact on efficiency.

**Relevance to Course Outcomes:**

*   **CO4 (Interpret performance):** All these calculations are directly used to interpret the performance of the compressor/blower.

---

## 6. Graphical Representation of Performance

Performance is often visualized by plotting key parameters against discharge pressure or other operating variables.

**Typical Performance Curves:**

*   **Pressure Ratio vs. Flow Rate:** Shows how the pressure ratio changes with the volume of air delivered.
*   **Power Input vs. Flow Rate:** Illustrates the energy consumption at different operating points.
*   **Efficiency (Isothermal or Adiabatic) vs. Pressure Ratio (or Flow Rate):** Highlights the operating range where the compressor is most efficient.
*   **Discharge Temperature vs. Pressure Ratio:** Shows the heat generated during compression.

**Interpretation of Curves:**

*   **Operating Range:** The curves define the effective operating range of the compressor.
*   **Peak Efficiency:** The point where efficiency is maximum.
*   **Surging (for Centrifugal, less common in positive displacement rotary):** A phenomenon where flow becomes unstable, often indicated by a drop in pressure ratio and fluctuations.
*   **Choke (for Centrifugal):** Maximum flow rate that can be achieved.

**Example Plot:**

Imagine plotting Isothermal Efficiency on the y-axis and Pressure Ratio on the x-axis. You would expect to see efficiency rise as the pressure ratio increases from low values, reach a peak, and then possibly decrease at very high pressure ratios due to increased leakage and losses.

**Relevance to Course Outcomes:**

*   **CO4 (Interpret performance):** Graphical representations are crucial for visualizing and understanding the performance characteristics.

---

## 7. Important Factors Affecting Performance

Several factors can influence the performance of rotary compressors and blowers.

**Key Factors:**

*   **Suction Conditions:**
    *   **Suction Pressure:** Lower suction pressure increases the work required per unit mass.
    *   **Suction Temperature:** Higher suction temperature reduces the density of the air, increases the specific volume, and requires more power for the same mass flow. It also increases discharge temperature.
*   **Discharge Pressure:** As discharge pressure increases, the work input generally increases, and volumetric efficiency may decrease due to leakage.
*   **Speed of Rotation:** Higher speeds can increase the flow rate but also increase friction and power losses.
*   **Internal Leakage:** Leakage of compressed air from the discharge side back to the suction side reduces volumetric efficiency and increases the actual work input. This is more significant at higher pressure ratios.
*   **Friction Losses:** Mechanical friction in bearings, gears, and between rotating elements consumes power.
*   **Heat Transfer:** Heat generated during compression is dissipated to the surroundings, affecting the thermodynamic process and discharge temperature. Inefficient cooling can lead to higher discharge temperatures and reduced efficiency.
*   **Design of the Machine:** Rotor profile, clearances, sealing mechanisms, and casing design all play a critical role.

**Reference Integration:**

*   **Ganesan & Heywood:** Discuss heat transfer and friction in the context of engines, which are analogous to losses in compressors. Understanding how temperature affects gas properties is key.

**Relevance to Course Outcomes:**

*   **CO4 (Interpret performance):** Understanding these factors helps explain the observed performance data and curves.

---

## 8. Applications of Rotary Compressors and Blowers

Rotary compressors and blowers are widely used in various industries due to their reliability, continuous flow, and compact design.

**Common Applications:**

*   **Industrial Air Supply:** For powering pneumatic tools, manufacturing processes, and general plant air.
*   **Material Handling:** Pneumatic conveying of powders, grains, and other bulk materials (often using blowers).
*   **HVAC Systems:** As part of refrigeration cycles (though often centrifugal or scroll types).
*   **Chemical and Petrochemical Industries:** For gas compression and transfer.
*   **Wastewater Treatment:** For aeration (using blowers).
*   **Automotive Turbochargers/Superchargers:** While engine-specific, they are rotary compressors.
*   **Food and Beverage Industry:** For packaging and processing.

**Relevance to Course Outcomes:**

*   **CO1 (Identify systems):** Understanding applications helps identify where these machines are utilized as part of larger systems.
*   **CO4 (Interpret performance):** Knowledge of applications can provide context for expected performance characteristics (e.g., a blower for aeration will operate at lower pressures than a compressor for industrial air supply).

---

## 9. Practice Questions and Exercises

**Question 1:**
A Roots blower is tested and the following readings are obtained at a particular operating point:
Suction Pressure ($P_{suction}$) = 100 kPa (gauge)
Discharge Pressure ($P_{discharge}$) = 150 kPa (gauge)
Suction Temperature ($T_{suction}$) = 25 °C
Speed ($N$) = 1500 RPM
Motor Power Input ($P_{input}$) = 2 kW
Atmospheric Pressure ($P_{atm}$) = 101 kPa

Calculate:
a) The pressure ratio ($r_p$).
b) The theoretical isothermal work input per kg of air.
c) The actual work input per kg of air, assuming the compressor is delivering 1 m³/min (volumetric flow rate at suction conditions).
d) The isothermal efficiency.

**Answer 1:**

*   **Convert pressures to absolute:**
    *   $P_{suction, abs} = 100 \text{ kPa} + 101 \text{ kPa} = 201 \text{ kPa}$
    *   $P_{discharge, abs} = 150 \text{ kPa} + 101 \text{ kPa} = 251 \text{ kPa}$
*   **Convert temperature to absolute:**
    *   $T_{suction} = 25 + 273.15 = 298.15 \text{ K}$
*   **Convert power to Watts:**
    *   $P_{input} = 2 \text{ kW} = 2000 \text{ W}$
*   **Convert volumetric flow rate to m³/s:**
    *   $Q_{vol, suction} = 1 \text{ m³/min} = \frac{1}{60} \text{ m³/s}$

a) **Pressure Ratio ($r_p$):**
    $$ r_p = \frac{P_{discharge, abs}}{P_{suction, abs}} = \frac{251 \text{ kPa}}{201 \text{ kPa}} \approx 1.25 $$

b) **Theoretical Isothermal Work Input ($W_{iso}$) per kg of air:**
    Using $R = 287 \text{ J/kg·K}$ for air:
    $$ W_{iso} = R \cdot T_{suction} \cdot \ln \left( \frac{P_{discharge, abs}}{P_{suction, abs}} \right) $$
    $$ W_{iso} = 287 \text{ J/kg·K} \cdot 298.15 \text{ K} \cdot \ln(1.25) $$
    $$ W_{iso} = 287 \cdot 298.15 \cdot 0.2231 \approx 19165 \text{ J/kg} \approx 19.17 \text{ kJ/kg} $$

c) **Actual Work Input ($W_{actual}$) per kg of air:**
    First, calculate mass flow rate ($m_{dot}$). We need the density of air at suction.
    $\rho_{suction} = \frac{P_{suction, abs}}{R \cdot T_{suction}} = \frac{201 \times 10^3 \text{ Pa}}{287 \text{ J/kg·K} \cdot 298.15 \text{ K}} \approx 2.35 \text{ kg/m³}$
    $m_{dot} = Q_{vol, suction} \cdot \rho_{suction} = \frac{1}{60} \text{ m³/s} \cdot 2.35 \text{ kg/m³} \approx 0.03917 \text{ kg/s}$
    $$ W_{actual} = \frac{P_{input}}{m_{dot}} = \frac{2000 \text{ W}}{0.03917 \text{ kg/s}} \approx 51059 \text{ J/kg} \approx 51.06 \text{ kJ/kg} $$

d) **Isothermal Efficiency ($\eta_{iso}$):**
    $$ \eta_{iso} = \frac{W_{iso}}{W_{actual}} = \frac{19165 \text{ J/kg}}{51059 \text{ J/kg}} \approx 0.375 \text{ or } 37.5\% $$

---

**Question 2:**
What are the primary differences between a rotary compressor and a reciprocating compressor? Mention at least two advantages of rotary compressors.

**Answer 2:**

*   **Primary Differences:**
    *   **Mechanism of Compression:** Rotary compressors use rotating elements (screws, lobes, vanes) to compress gas, while reciprocating compressors use a piston moving in a cylinder.
    *   **Flow Characteristics:** Rotary compressors generally provide a continuous and smooth flow of gas, whereas reciprocating compressors deliver a pulsating flow.
    *   **Displacement vs. Dynamic:** Most common rotary compressors are positive displacement types, similar to reciprocating. However, centrifugal compressors are dynamic and work on different principles.

*   **Advantages of Rotary Compressors (e.g., Screw, Roots):**
    1.  **Continuous Flow:** Provide a smooth, non-pulsating discharge, which is advantageous in many applications.
    2.  **Compactness:** Generally more compact and lighter for a given capacity compared to reciprocating compressors.
    3.  **Less Vibration:** Produce less vibration, leading to simpler foundation requirements.
    4.  **Higher Efficiency at Moderate Speeds/Pressures:** Can achieve good efficiency over a wider operating range compared to some reciprocating designs.
    5.  **Lower Maintenance:** Fewer moving parts, especially in designs like Roots blowers, can lead to lower maintenance requirements.

---

## 10. Important Points to Remember

*   **Absolute Pressures:** Always use absolute pressures for thermodynamic calculations.
*   **Temperature Conversion:** Convert all temperatures to Kelvin for thermodynamic calculations.
*   **Ideal Gas Law:** Useful for calculating air density at suction conditions.
*   **Units:** Maintain consistent units throughout calculations (e.g., SI units).
*   **Efficiency Definitions:** Understand the difference between isothermal and adiabatic efficiency and when to use them.
*   **Practical Limitations:** Real-world performance is always lower than theoretical ideal values due to losses (friction, leakage, heat transfer).
*   **Safety:** Always adhere to laboratory safety protocols when operating machinery.

---

This comprehensive study guide covers the essential aspects of performance testing on rotary compressors and blowers, aligning with the learning outcomes and course objectives. Remember to relate these concepts back to the fundamental principles of thermodynamics and fluid mechanics as discussed in your reference texts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
