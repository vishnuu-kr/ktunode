---
title: "Fuel, Air and ignition systems:  Carburettors, MPFI, CRDI & GDI systems with components (with neat diagrams)."
subject: "AUTOMOBILE ENGINEERING"
module: "Module 2: Fuel, Air and ignition systems:  Carburettors, MPFI, CRDI & GDI systems with components (with neat diagrams)."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d26"
status: "completed"
scrapedAt: "2026-05-20T18:10:19.553Z"
---
# Module 2: Fuel, Air, and Ignition Systems

This module delves into the critical systems that govern how an internal combustion engine (ICE) receives fuel and air, and how it ignites this mixture to produce power. We will explore the historical evolution from carburetors to modern sophisticated fuel injection systems.

## CO3: Describe and analyse the various fuel, air, ignition, lubrication, cooling, and exhaust systems in vehicle. (Knowledge Level: K4)

## Topic: Fuel, Air and Ignition Systems: Carburettors, MPFI, CRDI & GDI Systems with Components

---

## 1. Introduction to Fuel and Air Systems

The fundamental principle of an ICE is to create a combustible mixture of fuel and air in precise proportions, compress it, and then ignite it. The fuel and air system's primary role is to deliver this mixture to the combustion chamber.

*   **Air-Fuel Ratio (AFR):** The ratio of the mass of air to the mass of fuel present in the mixture. This ratio is crucial for efficient combustion, power output, and emissions control.
    *   **Stoichiometric AFR:** The ideal AFR for complete combustion where all fuel and oxygen are consumed, leaving only carbon dioxide and water. For gasoline, it's approximately 14.7:1.
    *   **Rich Mixture:** More fuel than stoichiometric (e.g., 12:1 AFR). Leads to more power but higher emissions and poorer fuel economy.
    *   **Lean Mixture:** Less fuel than stoichiometric (e.g., 16:1 AFR). Leads to better fuel economy but can cause misfires and increased NOx emissions if too lean.

---

## 2. Carburettors

Carburetors are mechanical devices used in older gasoline engines to mix fuel and air. They work on the principle of the Venturi effect.

### 2.1. Principle of Operation

*   **Venturi Effect:** As air flows through a constricted passage (Venturi), its velocity increases, and its pressure decreases. This low-pressure area draws fuel from a fuel reservoir (float bowl) through jets.
*   **Atomization:** The fuel is broken down into fine droplets, facilitating better mixing with air.

### 2.2. Key Components of a Carburetor

*(Refer to diagrams from Kirpal Singh Vol.1 or S.K. Gupta for visual representation)*

*   **Venturi:** The constricted passage in the carburetor barrel.
*   **Throttle Valve:** A butterfly valve controlled by the accelerator pedal, regulating the amount of air-fuel mixture entering the engine.
*   **Jet:** A precisely machined opening through which fuel flows from the float bowl to the Venturi.
    *   **Main Jet:** Supplies fuel for normal engine operation.
    *   **Idling Jet:** Supplies fuel for idling.
*   **Float Bowl (Float Chamber):** A reservoir that maintains a constant level of fuel.
    *   **Float:** Rises and falls with the fuel level.
    *   **Needle Valve:** Controlled by the float, it opens or closes to maintain the fuel level by regulating fuel supply from the fuel pump.
*   **Choke Valve:** A butterfly valve located before the Venturi. When closed, it restricts airflow, creating a richer mixture for cold starts.
*   **Accelerator Pump:** A small pump that injects extra fuel into the Venturi when the throttle is suddenly opened, preventing a momentary lean condition and hesitation.
*   **Power Jet/Economizer:** Provides extra fuel at high loads and wide-open throttle to ensure a richer mixture for maximum power.

### 2.3. Types of Carburettors

*   **Updraft Carburetor:** Air flows upwards through the carburetor.
*   **Downdraft Carburetor:** Air flows downwards. Most common.
*   **Side-draft Carburetor:** Air flows horizontally.

### 2.4. Advantages and Disadvantages of Carburettors

*   **Advantages:**
    *   Simple in design and construction.
    *   Lower manufacturing cost.
    *   Relatively easy to maintain.
*   **Disadvantages:**
    *   Less precise fuel-air mixture control, especially under varying conditions.
    *   Poor fuel economy compared to fuel injection.
    *   Higher emissions due to imprecise mixture.
    *   Prone to icing in cold, humid conditions.
    *   Limited ability to adapt to altitude changes.

*(Reference: Kirpal Singh Vol.1, S.K. Gupta, Hillier & Coobes)*

---

## 3. Multi-Point Fuel Injection (MPFI) Systems

MPFI systems inject fuel electronically into the intake manifold, just before the intake valve of each cylinder. This allows for more precise control of the air-fuel mixture.

### 3.1. Principle of Operation

*   Fuel is delivered under pressure from a fuel pump to fuel injectors.
*   The Engine Control Unit (ECU) or Powertrain Control Module (PCM) receives various sensor inputs (e.g., engine speed, throttle position, engine temperature, oxygen sensor).
*   Based on these inputs, the ECU calculates the optimal amount of fuel to inject for each cylinder and controls the duration (pulse width) for which the injectors remain open.
*   Fuel is injected into the intake manifold, where it mixes with incoming air before entering the combustion chamber.

### 3.2. Key Components of an MPFI System

*(Refer to diagrams from Bosch Automotive Electrics, Heisler, or Denton & Pells for visual representation)*

*   **Fuel Tank:** Stores the fuel.
*   **Fuel Pump:** Electrically driven, delivers fuel from the tank to the injectors under pressure.
*   **Fuel Filter:** Removes impurities from the fuel before it reaches the injectors.
*   **Fuel Rail:** A manifold that distributes fuel under pressure to each injector.
*   **Fuel Injectors:** Electrically controlled solenoid valves that spray atomized fuel into the intake manifold.
*   **Pressure Regulator:** Maintains a constant fuel pressure in the fuel rail, returning excess fuel to the tank.
*   **Engine Control Unit (ECU) / Powertrain Control Module (PCM):** The "brain" of the system, processing sensor data and controlling injector pulse width.
*   **Sensors:**
    *   **Throttle Position Sensor (TPS):** Measures the opening of the throttle valve.
    *   **Mass Airflow Sensor (MAF) / Manifold Absolute Pressure (MAP) Sensor:** Measures the amount of air entering the engine.
    *   **Engine Coolant Temperature (ECT) Sensor:** Measures engine temperature for cold start enrichment.
    *   **Crankshaft Position Sensor (CKP):** Determines engine speed and piston position.
    *   **Camshaft Position Sensor (CMP):** Identifies which cylinder is on its power stroke (for sequential injection).
    *   **Oxygen Sensor (O2 Sensor) / Lambda Sensor:** Measures the oxygen content in the exhaust gas, providing feedback to the ECU for closed-loop mixture control.
*   **Ignition System:** Coordinates fuel injection timing with spark timing.

### 3.3. Operation Modes

*   **Open-Loop:** The ECU uses pre-programmed maps and sensor inputs (excluding O2 sensor) to control fuel injection. Used during cold starts or when the O2 sensor is not yet warmed up.
*   **Closed-Loop:** The ECU uses feedback from the O2 sensor to fine-tune the air-fuel ratio to maintain stoichiometric conditions for optimal catalytic converter efficiency and emissions.

### 3.4. Advantages of MPFI

*   Precise fuel delivery, leading to better fuel economy.
*   Improved engine performance and power.
*   Reduced emissions.
*   Better drivability and cold-start performance.
*   Adaptability to different operating conditions.

*(Reference: Bosch Automotive Electrics, Heisler, Denton & Pells, Kiencke & Nielsen)*

---

## 4. Common Rail Direct Injection (CRDI) Systems

CRDI systems inject fuel directly into the combustion chamber of diesel engines. It is characterized by a high-pressure fuel rail common to all injectors.

### 4.1. Principle of Operation

*   A high-pressure fuel pump pressurizes fuel to very high levels (up to 2000 bar or more).
*   This high-pressure fuel is stored in a common rail, which acts as a accumulator.
*   Electrically controlled injectors are mounted directly in the cylinder head, spraying fuel into the combustion chamber.
*   The ECU controls the opening and closing of the injectors with high precision.
*   Multiple injections per combustion cycle are possible (pilot injection, main injection, post injection) to optimize combustion and reduce noise and emissions.

### 4.2. Key Components of a CRDI System

*(Refer to diagrams from Bosch Automotive Electrics, Heisler, or Kirpal Singh Vol.2 for visual representation)*

*   **Fuel Tank:** Stores diesel fuel.
*   **Low-Pressure Fuel Pump:** Delivers fuel from the tank to the high-pressure pump.
*   **High-Pressure Fuel Pump:** A mechanically driven pump that generates very high fuel pressure. Types include axial piston and radial piston pumps.
*   **Common Rail:** A robust pipe that stores high-pressure fuel and supplies it to all injectors.
*   **Fuel Injectors (Solenoid or Piezoelectric):** Electrically actuated valves that spray fuel directly into the combustion chamber.
    *   **Solenoid Injectors:** Use an electromagnetic coil to open the injector.
    *   **Piezo Injectors:** Use piezoelectric actuators, which offer faster response times and allow for more injection events.
*   **Fuel Metering Unit / Pressure Control Valve:** Regulates the fuel pressure in the common rail by controlling the amount of fuel supplied by the high-pressure pump.
*   **Pressure Sensor:** Monitors the fuel pressure in the common rail.
*   **Engine Control Unit (ECU) / Engine Control Module (ECM):** Controls the timing and duration of fuel injection based on sensor inputs.
*   **Sensors:**
    *   **Crankshaft Position Sensor (CKP):** Engine speed and position.
    *   **Camshaft Position Sensor (CMP):** Cylinder identification.
    *   **Engine Coolant Temperature (ECT) Sensor:** Engine temperature.
    *   **Manifold Absolute Pressure (MAP) Sensor:** Engine load.
    *   **Mass Airflow (MAF) Sensor:** Amount of air entering the engine.
    *   **Rail Pressure Sensor:** Monitors common rail pressure.
    *   **Throttle Position Sensor (for diesel engines, often referred to as Accelerator Pedal Position Sensor - APP):** Driver's demand.
    *   **Exhaust Gas Recirculation (EGR) Pressure Sensor:** For EGR control.
    *   **Lambda Sensor / Exhaust Gas Oxygen Sensor:** For emissions control.

### 4.3. Injection Strategy

*   **Pilot Injection:** A small amount of fuel injected before the main injection. Reduces combustion noise (diesel knock) and improves emissions.
*   **Main Injection:** The primary fuel injection event.
*   **Post Injection:** Fuel injected after the main injection. Can be used to improve exhaust aftertreatment systems (e.g., DPF regeneration) or reduce PM emissions.

### 4.4. Advantages of CRDI

*   Excellent fuel economy.
*   High power and torque output.
*   Significantly reduced emissions (PM and NOx).
*   Quieter operation and smoother running compared to older diesel systems.
*   Precise control over fuel injection quantity and timing.

*(Reference: Bosch Automotive Electrics, Heisler, Kirpal Singh Vol.2, Kiencke & Nielsen, Crolla)*

---

## 5. Gasoline Direct Injection (GDI) Systems

GDI systems inject fuel directly into the combustion chamber of gasoline engines. This technology aims to combine the efficiency of diesel injection with the performance and low emissions of gasoline engines.

### 5.1. Principle of Operation

*   Fuel is pressurized to very high levels (often exceeding 100 bar, but lower than CRDI) by a high-pressure fuel pump.
*   This fuel is delivered to injectors mounted directly in the combustion chamber.
*   The ECU precisely controls the timing and duration of fuel injection.
*   GDI engines can operate in different combustion modes:
    *   **Homogeneous Charge:** Fuel and air are mixed uniformly throughout the combustion chamber, similar to port injection but with better control.
    *   **Stratified Charge:** Fuel is injected late in the compression stroke, creating a fuel-rich zone near the spark plug and a lean mixture elsewhere. This allows for higher compression ratios and improved fuel economy at part load.

### 5.2. Key Components of a GDI System

*(Refer to diagrams from Bosch Automotive Electrics, Heisler, or Denton & Pells for visual representation)*

*   **Fuel Tank:** Stores gasoline.
*   **Low-Pressure Fuel Pump:** Transfers fuel from the tank to the high-pressure pump.
*   **High-Pressure Fuel Pump:** A mechanically driven pump (usually by the camshaft or an eccentric lobe on the camshaft) that pressurizes the fuel.
*   **Fuel Rail:** Stores the high-pressure fuel and supplies it to the injectors.
*   **Fuel Injectors:** Electrically controlled, high-pressure injectors designed to withstand high temperatures and pressures directly in the combustion chamber. They often have multiple spray holes for precise fuel atomization and targeting.
*   **Pressure Sensor:** Monitors fuel pressure in the fuel rail.
*   **Engine Control Unit (ECU) / Powertrain Control Module (PCM):** Manages fuel injection timing, quantity, and injection strategy based on sensor inputs.
*   **Sensors:** Similar to MPFI and CRDI, including CKP, CMP, ECT, MAF/MAP, O2 sensors, knock sensors, etc.
*   **Ignition System:** Precisely timed spark delivery to ignite the mixture.

### 5.3. Advantages of GDI

*   Improved fuel economy (up to 15% over MPFI).
*   Increased power output and torque.
*   Lower CO2 emissions.
*   Ability to operate with higher compression ratios, leading to greater efficiency.
*   Better control over combustion, reducing knocking.
*   Can reduce engine knock due to the cooling effect of evaporating fuel directly in the cylinder.

### 5.4. Challenges of GDI

*   Increased cost of components (high-pressure pump, injectors).
*   Potential for carbon buildup on intake valves due to fuel not washing them.
*   Higher particulate matter (PM) emissions, especially in stratified charge mode, requiring advanced exhaust aftertreatment.
*   More complex system to diagnose and repair.

*(Reference: Bosch Automotive Electrics, Heisler, Denton & Pells, Kiencke & Nielsen)*

---

## 6. Ignition System (Brief Overview - detailed in subsequent modules)

The ignition system's role is to provide a high-voltage spark at the correct time to ignite the compressed air-fuel mixture in gasoline engines. Diesel engines use compression ignition, not spark ignition.

### 6.1. Key Components of a Spark Ignition System

*(Refer to diagrams from Bosch Automotive Electrics, Hillier & Coobes, or Denton & Pells for visual representation)*

*   **Battery:** Provides low voltage DC power.
*   **Ignition Switch:** Controls the flow of power to the ignition system.
*   **Ignition Coil:** Steps up the battery voltage (12V) to high voltage (thousands of volts) required for the spark plug.
*   **Distributor (older systems):**
    *   **Points and Condenser:** Mechanically open and close to interrupt current to the coil, causing the spark.
    *   **Rotor:** Distributes the high voltage to the correct spark plug.
    *   **Spark Plug Wires:** Carry high voltage to the spark plugs.
*   **Electronic Ignition System (Modern systems):**
    *   **Ignition Module (Ignition Control Module - ICM):** Controls the timing of the spark electronically.
    *   **Crankshaft Position Sensor (CKP) & Camshaft Position Sensor (CMP):** Provide timing information to the ECU/ICM.
    *   **Ignition Coils:** Can be individual coils for each spark plug (Coil-on-Plug - COP) or paired coils for two cylinders (Waste Spark).
    *   **Spark Plugs:** Create the spark gap where the high voltage jumps to ignite the mixture.

### 6.2. Ignition Timing

*   The precise moment the spark plug fires relative to the piston's position.
*   Ignition timing is controlled by the ECU to optimize performance, fuel economy, and emissions across different engine speeds and loads.

*(Reference: Hillier & Coobes, Denton & Pells, Bosch Automotive Electrics)*

---

## 7. Important Points to Remember

*   **Air-Fuel Ratio (AFR):** Crucial for engine performance, efficiency, and emissions.
*   **Carburetors:** Mechanical, simple, but less precise.
*   **MPFI:** Electronic, injects into the intake manifold, improved efficiency and emissions over carburetors.
*   **CRDI:** Direct injection for diesel engines, very high pressure, multiple injection strategies, excellent efficiency and low emissions.
*   **GDI:** Direct injection for gasoline engines, high pressure, improved efficiency, power, and lower CO2.
*   **Sensors:** The "eyes and ears" of the ECU, providing vital information for precise system control.
*   **ECU/PCM:** The "brain" that processes sensor data and controls fuel injection and ignition timing.
*   **Direct Injection (CRDI & GDI):** Key to modern diesel and gasoline engine efficiency and emissions control.

---

## 8. Practice Questions and Answers

**Q1. What is the primary function of a carburetor?**

**A1.** A carburetor's primary function is to mix air and fuel in the correct proportions for combustion in a gasoline engine. It atomizes the fuel and delivers this mixture to the intake manifold.

**Q2. Explain the Venturi effect in the context of a carburetor.**

**A2.** The Venturi effect occurs when air flows through a constricted passage (Venturi) in the carburetor. This constriction increases the air's velocity and decreases its pressure. The lower pressure in the Venturi draws fuel from the float bowl through a jet, atomizing it and mixing it with the airflow.

**Q3. What is the main advantage of MPFI over carburetors?**

**A3.** The main advantage of MPFI over carburetors is its ability to precisely control the air-fuel mixture electronically based on various sensor inputs, leading to better fuel economy, improved performance, and lower emissions.

**Q4. What does "Common Rail" in CRDI refer to?**

**A4.** "Common Rail" refers to a high-pressure fuel rail that acts as a reservoir of fuel at very high pressure, common to all injectors. This allows for consistent and precise fuel delivery to each cylinder.

**Q5. Name two key advantages of GDI technology over traditional MPFI systems.**

**A5.** Two key advantages of GDI over MPFI are:
    1.  Improved fuel economy (due to higher compression ratios and better combustion control).
    2.  Increased power output and torque (due to better volumetric efficiency and cooling effect of fuel injection).

**Q6. What is the role of the ECU in MPFI, CRDI, and GDI systems?**

**A6.** The Engine Control Unit (ECU) is the central computer that receives data from various sensors, processes this information, and then controls the timing and duration of fuel injection (and ignition in gasoline engines) to optimize engine performance, fuel efficiency, and emissions.

**Q7. Differentiate between pilot injection and main injection in a CRDI system.**

**A7.** Pilot injection is a small amount of fuel injected before the main injection event. Its purpose is to initiate combustion gently, reducing the sharp pressure rise that causes diesel knock and lowering NOx and PM emissions. Main injection delivers the bulk of the fuel for power generation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## 9. Further Reading & Alignment with Course Outcomes

This module directly addresses **CO3: Describe and analyse the various fuel, air, ignition, lubrication, cooling, and exhaust systems in vehicle.** Specifically, we have covered the fuel and air systems (carburetors, MPFI, CRDI, GDI) and provided a brief overview of the ignition system's context.

*   **Kirpal Singh (Vol. 1 & 2):** Provides foundational knowledge on engine systems, including detailed explanations and diagrams of carburetors and early fuel injection systems.
*   **S K Gupta:** Offers a comprehensive treatment of automobile engineering principles, covering fuel systems with clarity.
*   **Hillier and Peter Coobes:** A classic text that clearly explains the principles of internal combustion engines and their associated systems, including ignition.
*   **Heinz Heisler:** Delves into vehicle and engine technology, with good coverage of fuel injection systems and their control.
*   **Tom Denton & Hayley Pells:** Focuses on mechanical and electrical systems, providing practical insights into modern fuel injection and ignition systems.
*   **Robert Bosch GmbH:** Authoritative source on automotive electronics and systems, offering deep technical detail on fuel injection and control.
*   **Uwe Kiencke and Lars Nielsen:** Advanced text on automotive control systems, crucial for understanding the electronic management of modern fuel and ignition systems.

By understanding these systems, you are building a strong foundation for analyzing the complete operation of an automobile.