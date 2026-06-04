---
title: "Performance test on petrol engines / MPFI engine"
subject: "THERMAL ENGINEERING LAB-2"
module: "Module 2: Performance test on petrol engines / MPFI engine"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c4f"
status: "completed"
scrapedAt: "2026-05-20T18:09:12.264Z"
---
# THERMAL ENGINEERING LAB-2: Performance Test on Petrol Engines / MPFI Engine

## Module 2: Performance Test on Petrol Engines / MPFI Engine

This module focuses on understanding and evaluating the performance of petrol engines, particularly modern Multi-Point Fuel Injection (MPFI) engines, through experimental testing. We will delve into the various parameters that define engine performance and how to measure and analyze them.

---

### 1. Introduction to Petrol Engines and MPFI Systems

**1.1 What is a Petrol Engine?**

A petrol engine, also known as a spark-ignition (SI) engine, is an internal combustion engine that operates on the Otto cycle (or a modified version of it). It uses gasoline (petrol) as fuel, which is ignited by an electric spark from a spark plug.

**Key Systems of a Petrol Engine (CO1 - K1):**

*   **Fuel System:** Delivers fuel to the engine cylinders.
    *   **Carburetted System:** Mixes fuel and air before entering the cylinder. Less precise control.
    *   **MPFI System:** Electronically controlled fuel injectors spray fuel directly into the intake manifold port of each cylinder, just before the intake valve. Offers better fuel efficiency, emissions control, and performance.
*   **Ignition System:** Provides the spark to ignite the fuel-air mixture.
    *   **Battery Ignition:** Uses a battery, ignition coil, distributor (in older systems), and spark plugs.
    *   **Electronic Ignition:** Modern systems often use solid-state electronics for more precise timing.
*   **Lubrication System:** Reduces friction and wear between moving parts.
*   **Cooling System:** Dissipates excess heat generated during combustion.
*   **Intake System:** Supplies air to the engine.
*   **Exhaust System:** Discharges combustion products.
*   **Valve Train:** Controls the opening and closing of intake and exhaust valves.
*   **Crankshaft and Piston Assembly:** Converts linear motion of pistons into rotational motion.

**1.2 Understanding MPFI (Multi-Point Fuel Injection)**

MPFI is a sophisticated fuel delivery system that precisely meters and injects fuel into each cylinder's intake port.

**Components of an MPFI System:**

*   **Fuel Tank:** Stores the gasoline.
*   **Fuel Pump:** Delivers fuel from the tank to the injectors.
*   **Fuel Filter:** Removes impurities from the fuel.
*   **Fuel Rail:** Distributes fuel to the injectors.
*   **Fuel Injectors:** Electromagnetically controlled valves that spray fuel.
*   **Engine Control Unit (ECU) / Powertrain Control Module (PCM):** The "brain" of the system. It receives data from various sensors and controls the injectors, ignition timing, and other engine parameters.
*   **Sensors:**
    *   **Manifold Absolute Pressure (MAP) Sensor:** Measures intake manifold pressure.
    *   **Throttle Position Sensor (TPS):** Measures the throttle opening.
    *   **Mass Air Flow (MAF) Sensor:** Measures the mass of air entering the engine (in some systems).
    *   **Oxygen (O2) Sensor / Lambda Sensor:** Measures the oxygen content in the exhaust gas, used for feedback control of the air-fuel ratio.
    *   **Coolant Temperature Sensor (CTS):** Measures engine coolant temperature.
    *   **Crankshaft Position Sensor (CKP):** Determines the engine speed and piston position.
    *   **Camshaft Position Sensor (CMP):** Identifies the valve timing.

**Advantages of MPFI over Carburetion (Heywood, 2nd Ed., Chapter 7):**

*   **Improved Fuel Economy:** Precise fuel metering leads to more efficient combustion.
*   **Reduced Emissions:** Better control over the air-fuel ratio minimizes harmful exhaust gases.
*   **Enhanced Power Output:** Optimized fuel delivery can improve volumetric efficiency and power.
*   **Better Cold Start Performance:** Consistent fuel delivery under all conditions.
*   **Adaptability to Altitude and Temperature:** The ECU can adjust fuel delivery based on environmental conditions.

---

### 2. Performance Parameters of Petrol Engines

Performance testing aims to quantify how well an engine operates. Several key parameters are measured and analyzed. (CO2 - K4)

**2.1 Key Performance Parameters and Definitions:**

*   **Indicated Power (IP):** The power developed inside the cylinder, calculated from the indicated work per cycle and the engine speed. It represents the theoretical power before accounting for friction.
    *   **Formula:** $IP = \frac{P_m \times L \times A \times n \times N}{60 \times 1000}$ kW
        *   $P_m$: Indicated Mean Effective Pressure (IMEP) (bar or Pa)
        *   $L$: Stroke length (m)
        *   $A$: Piston area ($\frac{\pi D^2}{4}$) ($m^2$)
        *   $n$: Number of power strokes per minute (for 4-stroke engine, $n = N/2$)
        *   $N$: Engine speed (RPM)
        *   *Alternatively, directly from indicated work per cycle:* $IP = \frac{W_i \times N}{60}$ kW (where $W_i$ is indicated work per cycle in Joules)

*   **Brake Power (BP) / Shaft Power:** The actual power delivered at the engine crankshaft, measured after accounting for frictional losses. This is the useful output power of the engine.
    *   **Formula:** $BP = \frac{2 \pi N T}{60 \times 1000}$ kW
        *   $N$: Engine speed (RPM)
        *   $T$: Brake torque (Nm)

*   **Friction Power (FP):** The power lost due to friction between moving parts within the engine.
    *   **Formula:** $FP = IP - BP$ kW

*   **Brake Mean Effective Pressure (BMEP):** The hypothetical constant pressure that, if applied to the piston throughout the power stroke, would produce the observed brake torque. It's a measure of the engine's ability to produce useful work.
    *   **Formula:** $BMEP = \frac{BP \times 60 \times 10^5}{L \times A \times n \times N}$ (in Pa)
        *   *Or more commonly and simply:* $BMEP = \frac{BP \times 2 \times \pi \times 60}{V_d \times N}$ (in bar, where $V_d$ is swept volume in $m^3$)
        *   $V_d = \frac{\pi D^2}{4} \times L \times \text{Number of cylinders}$

*   **Indicated Specific Fuel Consumption (ISFC):** The mass of fuel consumed per unit of indicated power per unit of time.
    *   **Formula:** $ISFC = \frac{\text{Fuel flow rate (kg/hr)}}{IP (\text{kW})}$ (kg/kWh)

*   **Brake Specific Fuel Consumption (BSFC):** The mass of fuel consumed per unit of brake power per unit of time. This is a critical indicator of fuel efficiency. Lower BSFC indicates better fuel economy.
    *   **Formula:** $BSFC = \frac{\text{Fuel flow rate (kg/hr)}}{BP (\text{kW})}$ (kg/kWh)

*   **Thermal Efficiency:** The ratio of the useful work output to the energy supplied by the fuel.
    *   **Brake Thermal Efficiency ($\eta_{BTH}$):** Efficiency based on brake power.
        *   **Formula:** $\eta_{BTH} = \frac{BP}{\text{Fuel energy input rate}}$
        *   Fuel energy input rate = Fuel flow rate (kg/s) $\times$ Calorific Value of Fuel (kJ/kg)
        *   $\eta_{BTH} = \frac{BP (\text{kW}) \times 3600}{\text{Fuel flow rate (kg/hr)} \times CV (\text{kJ/kg})}$
    *   **Indicated Thermal Efficiency ($\eta_{ITH}$):** Efficiency based on indicated power.
        *   **Formula:** $\eta_{ITH} = \frac{IP}{\text{Fuel energy input rate}}$

*   **Mechanical Efficiency ($\eta_m$):** The ratio of brake power to indicated power. It represents how efficiently the indicated power is converted to useful brake power.
    *   **Formula:** $\eta_m = \frac{BP}{IP}$

*   **Overall Efficiency ($\eta_o$):** Also known as the "fuel conversion efficiency." It's the ratio of the useful work output (BP) to the total energy input from the fuel.
    *   **Formula:** $\eta_o = \frac{BP}{\text{Fuel energy input rate}} = \eta_{BTH}$

*   **Volumetric Efficiency ($\eta_{v}$):** The ratio of the actual volume of air drawn into the cylinder at ambient conditions to the theoretical volume displaced by the piston during the intake stroke.
    *   **Formula:** $\eta_{v} = \frac{\text{Actual mass of air per cycle}}{\rho_{a} \times V_d}$ (where $\rho_a$ is air density at ambient conditions)

**2.2 Importance of Performance Parameters:**

*   **BP:** Represents the usable power output for driving a vehicle or machinery.
*   **BMEP:** A good indicator of the engine's combustion quality and its ability to produce torque across its speed range.
*   **BSFC:** Directly relates to fuel economy. A lower BSFC means less fuel is needed for the same power output.
*   **Thermal Efficiency:** Indicates how effectively the chemical energy in the fuel is converted into useful work.
*   **Mechanical Efficiency:** Shows the effectiveness of the engine's internal design in minimizing friction.

**Example (Ganesan, 5th Ed., Chapter 10):**
A 4-cylinder petrol engine has a bore of 8 cm and stroke of 10 cm. At 2400 RPM, the brake torque is 150 Nm. The indicated power is 30 kW and the engine consumes 5 kg of fuel per hour. The calorific value of the fuel is 44000 kJ/kg.

*   **Calculate BP:**
    $BP = \frac{2 \pi N T}{60 \times 1000} = \frac{2 \pi \times 2400 \times 150}{60 \times 1000} = 37.7$ kW

*   **Calculate BSFC:**
    Fuel flow rate = 5 kg/hr
    $BSFC = \frac{5 \text{ kg/hr}}{37.7 \text{ kW}} = 0.1326$ kg/kWh

*   **Calculate Brake Thermal Efficiency:**
    Fuel energy input rate = $5 \text{ kg/hr} \times 44000 \text{ kJ/kg} = 220000$ kJ/hr
    $BP (\text{kW}) \times 3600 = 37.7 \times 3600 = 135720$ kJ/hr
    $\eta_{BTH} = \frac{135720}{220000} \approx 0.617$ or 61.7% (Note: this is unusually high, likely a simplified example for calculation demonstration. Typical BSFC values are more in the range of 0.25-0.35 kg/kWh.)

---

### 3. Performance Testing Procedure and Setup

**3.1 Objective of Performance Testing:**

To measure and analyze the various performance parameters of the petrol engine under different operating conditions (e.g., varying speed, load) to understand its characteristics. (CO2 - K4)

**3.2 Experimental Setup:**

A typical performance test on a petrol engine (especially MPFI) involves using an engine test rig.

**Key Components of the Test Rig:**

*   **Engine Under Test:** A petrol engine (ideally MPFI) mounted on a robust frame.
*   **Dynamometer:** A device used to apply a load to the engine and measure the torque produced.
    *   **Types of Dynamometers:**
        *   **Prony Brake Dynamometer:** Simple mechanical brake.
        *   **Hydraulic Dynamometer:** Uses water resistance for braking.
        *   **Eddy Current Dynamometer:** Uses electromagnetic forces for braking.
        *   **Electric Dynamometer (DC or AC Generator):** Converts mechanical energy into electrical energy, which can be dissipated as heat or used to power other loads. This is common in labs.
*   **Instrumentation:**
    *   **Torque Sensor/Load Cell:** Measures the torque applied by the dynamometer to the engine shaft.
    *   **Speed Sensor (Tachometer):** Measures the engine's rotational speed (RPM).
    *   **Fuel Flow Meter:** Measures the rate of fuel consumption (e.g., using a rotameter, gravimetric method, or mass flow sensor).
    *   **Air Flow Meter:** Measures the rate of air intake.
    *   **Thermocouples/Temperature Sensors:** Measure temperatures of intake air, exhaust gas, coolant, oil.
    *   **Pressure Gauges:** Measure fuel pressure, oil pressure, intake manifold pressure.
    *   **Exhaust Gas Analyzer:** Measures the composition of exhaust gases (CO, HC, NOx, O2) - crucial for emission studies (CO3 - K4).
*   **Data Acquisition System (DAS):** A system that collects, processes, and displays data from all sensors in real-time.

**3.3 Experimental Procedure:**

The test typically involves running the engine at a constant speed and varying the load (controlled by the dynamometer) or running at a constant load and varying the speed.

**Steps for a Typical Performance Test:**

1.  **Engine Warm-up:** Start the engine and allow it to reach its normal operating temperature.
2.  **Set Engine Speed:** Adjust the engine throttle to achieve a desired constant speed.
3.  **Apply Load:** Gradually increase the load on the dynamometer, starting from no load.
4.  **Record Data:** At each steady-state operating point (specific speed and load), record the following:
    *   Engine Speed (N)
    *   Brake Torque (T)
    *   Fuel Flow Rate ($m_f$)
    *   Temperatures (intake air, exhaust gas, coolant, oil)
    *   Pressures (fuel, oil, manifold)
    *   Exhaust Gas Composition (CO, HC, NOx, O2)
5.  **Repeat for Different Loads:** Repeat steps 2-4 for several load points at the same engine speed.
6.  **Change Engine Speed:** Repeat steps 2-5 for different engine speeds to cover the engine's operating range.
7.  **Cool Down:** After the test, gradually reduce the load and speed, and then switch off the engine.

**Important Considerations:**

*   **Steady State:** Ensure all parameters are stable at each data point before recording.
*   **Calibration:** All instruments should be properly calibrated for accurate readings.
*   **Safety:** Follow all safety precautions for operating engines and test equipment.
*   **Environmental Conditions:** Record ambient temperature and pressure, as these affect engine performance and calculations (especially volumetric efficiency).

---

### 4. Analysis of Performance Characteristics

Once the data is collected, it is analyzed to generate performance curves and understand the engine's behavior. (CO2 - K4)

**4.1 Performance Curves:**

These are graphical representations of how various performance parameters change with engine speed and load. Common plots include:

*   **Brake Power (BP) vs. Engine Speed (N):** BP generally increases with speed up to a certain point, then may plateau or decrease due to volumetric efficiency limitations.
*   **Brake Torque (T) vs. Engine Speed (N):** Torque typically rises with speed, reaches a peak, and then falls off. The peak torque speed is a key characteristic.
*   **Brake Specific Fuel Consumption (BSFC) vs. Engine Speed (N) and Load:** BSFC curves often show a "valley" shape, indicating an optimal operating point (lowest BSFC) where fuel efficiency is maximized. This point is usually at moderate speeds and loads.
*   **Brake Thermal Efficiency ($\eta_{BTH}$) vs. Engine Speed (N) and Load:** Similar to BSFC, thermal efficiency usually peaks at moderate loads and speeds.
*   **Brake Mean Effective Pressure (BMEP) vs. Engine Speed (N):** BMEP indicates the engine's torque-producing capability at different speeds.
*   **Mechanical Efficiency ($\eta_m$) vs. Engine Speed (N) and Load:** Mechanical efficiency is generally higher at higher loads and moderate speeds, as frictional losses become a smaller proportion of the total power.

**4.2 Interpreting the Curves:**

*   **Peak Power:** The maximum BP the engine can produce and at what speed.
*   **Peak Torque:** The speed at which the engine produces maximum torque.
*   **Fuel Efficiency Region:** The range of speeds and loads where BSFC is lowest.
*   **Engine's "Sweet Spot":** The operating point that balances power, torque, and fuel efficiency.

**4.3 Calculating Key Performance Metrics:**

Using the collected data, calculate:

*   BP, T, N (directly measured or derived)
*   BMEP
*   BSFC
*   $\eta_{BTH}$
*   $\eta_m$
*   FP ($= BP/\eta_m - BP$)

**Example of Analysis:**

Consider plotting BSFC vs. BP for a given engine speed. You would expect to see the BSFC decrease as BP increases, reach a minimum, and then start to increase again as the engine is loaded more heavily. This minimum BSFC point indicates the most fuel-efficient operating condition for that specific speed.

---

### 5. Emission Characteristics of Petrol Engines (MPFI)

Modern petrol engines are heavily scrutinized for their exhaust emissions. MPFI systems play a crucial role in controlling these emissions. (CO3 - K4)

**5.1 Major Exhaust Pollutants from Petrol Engines:**

*   **Carbon Monoxide (CO):** Formed due to incomplete combustion, especially under rich air-fuel ratios.
*   **Unburned Hydrocarbons (HC):** Unburned or partially burned fuel components. Can be due to flame quenching at cylinder walls, misfires, or incomplete mixing.
*   **Oxides of Nitrogen (NOx):** Formed at high combustion temperatures when atmospheric nitrogen reacts with oxygen.
*   **Carbon Dioxide (CO2):** A greenhouse gas resulting from complete combustion of carbon. Its quantity is directly related to fuel consumption.
*   **Particulate Matter (PM):** Although less significant in petrol engines compared to diesel, it can still be present, especially under rich conditions or in direct-injection petrol engines.

**5.2 Role of MPFI in Emission Control:**

*   **Precise Air-Fuel Ratio (AFR) Control:** MPFI systems, with feedback from O2 sensors, maintain the AFR close to the stoichiometric ratio (around 14.7:1 for gasoline). This is optimal for the catalytic converter's efficiency in reducing CO, HC, and NOx.
*   **Improved Combustion:** Better fuel atomization and distribution lead to more complete combustion, reducing CO and HC.
*   **Optimized Ignition Timing:** ECU adjusts ignition timing based on load, speed, and knock detection, improving combustion efficiency and reducing emissions.

**5.3 Catalytic Converters:**

Most modern petrol vehicles are equipped with three-way catalytic converters, which are highly effective in simultaneously reducing CO, HC, and NOx.

*   **Oxidation Catalyst:** Converts CO to CO2 and HC to CO2 and H2O.
*   **Reduction Catalyst:** Converts NOx to N2.
*   **Stoichiometric Operation:** Requires the engine to run at or very near the stoichiometric AFR for optimal performance of the three-way catalyst.

**5.4 Measuring Emissions:**

Exhaust gas analyzers are used to measure the concentration of pollutants in the exhaust stream. Tests are often conducted under specific driving cycles (e.g., FTP-75) or steady-state conditions.

---

### 6. Practice Questions and Answers

**Q1.** What is the primary difference between a carburetted fuel system and an MPFI system?
**Answer:** A carburetted system mixes fuel and air before it enters the cylinder, while an MPFI system injects fuel electronically and precisely into the intake port of each cylinder.

**Q2.** Define Brake Specific Fuel Consumption (BSFC) and explain its significance.
**Answer:** BSFC is the mass of fuel consumed per unit of brake power per unit of time (kg/kWh). It is a key indicator of the engine's fuel efficiency; a lower BSFC value means better fuel economy.

**Q3.** List three main exhaust pollutants from a petrol engine and the condition that leads to their formation.
**Answer:**
*   **CO:** Incomplete combustion, typically due to a rich air-fuel ratio.
*   **HC:** Unburned fuel due to flame quenching, misfires, or poor mixing.
*   **NOx:** High combustion temperatures and pressures.

**Q4.** How does a dynamometer function in an engine performance test?
**Answer:** A dynamometer applies a variable load to the engine's crankshaft and measures the torque produced by the engine at that load. This allows for the calculation of brake power.

**Q5.** If an engine produces 50 kW of Brake Power and 35 kW of Indicated Power, calculate its mechanical efficiency.
**Answer:**
Mechanical Efficiency ($\eta_m$) = $\frac{BP}{IP} = \frac{35 \text{ kW}}{50 \text{ kW}} = 0.7$ or 70%.
*(Correction: Mechanical efficiency is typically BP/IP. However, if the question implied FP=IP-BP, and we are given BP and IP, then $\eta_m = BP/IP$. Let's rephrase for clarity based on standard definitions)*
**Revised Q5:** If an engine produces 50 kW of Brake Power and develops 60 kW of Indicated Power, calculate its mechanical efficiency.
**Answer:**
Mechanical Efficiency ($\eta_m$) = $\frac{BP}{IP} = \frac{50 \text{ kW}}{60 \text{ kW}} = 0.833$ or 83.3%.

**Q6.** What is the primary goal of maintaining a near-stoichiometric air-fuel ratio in MPFI engines?
**Answer:** To ensure optimal performance of the three-way catalytic converter, which efficiently reduces CO, HC, and NOx emissions.

---

### 7. Important Points to Remember

*   **MPFI** offers significant advantages in fuel economy and emission control over older carburetted systems.
*   **BSFC and Brake Thermal Efficiency** are crucial metrics for assessing fuel economy. Lower BSFC and higher $\eta_{BTH}$ are desirable.
*   **BMEP** is a good indicator of the engine's power output capability at different speeds.
*   **Mechanical Efficiency** quantifies the frictional losses within the engine.
*   **Performance tests** require accurate instrumentation and careful execution to obtain reliable data.
*   **Exhaust gas analysis** is vital for evaluating the environmental impact of an engine.
*   **MPFI systems** with ECU control and O2 sensor feedback are key to achieving low emissions by maintaining a precise air-fuel ratio.
*   **Reference Books:** Ganesan's "Fundamentals of IC Engines" and Heywood's "I.C. Engine Fundamentals" provide in-depth theoretical background for understanding these concepts. Turns' "An Introduction to Combustion" is useful for deeper insights into combustion processes.

---

### 8. Connection to Course Outcomes

This module directly contributes to the following Course Outcomes:

*   **CO1: Identify various systems and subsystems of Diesel and petrol engines (Knowledge Level: K1)**
    *   Covered in Section 1.1 (Key Systems) and 1.2 (MPFI Components).
*   **CO2: Analyse the performance characteristics of internal combustion engines (Knowledge Level: K4)**
    *   Covered extensively in Sections 2 (Performance Parameters), 3 (Testing Procedure), and 4 (Analysis of Performance Characteristics). The calculations and interpretation of performance curves are central to this outcome.
*   **CO3: Investigate the emission characteristics of exhaust gases from IC Engines (Knowledge Level: K4)**
    *   Covered in Section 5 (Emission Characteristics), focusing on pollutants, the role of MPFI, and measurement techniques.

---
This study material is designed to provide a comprehensive overview of performance testing on petrol/MPFI engines as per Module 2 of Thermal Engineering Lab-2. Remember to consult your lab manual and instructor for specific procedures and equipment used in your laboratory sessions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
