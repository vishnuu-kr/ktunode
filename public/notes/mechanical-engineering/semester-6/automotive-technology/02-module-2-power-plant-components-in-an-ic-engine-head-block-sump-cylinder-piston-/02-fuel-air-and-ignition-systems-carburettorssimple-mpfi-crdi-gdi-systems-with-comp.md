---
title: "Fuel, Air and ignition systems: Carburettors(simple), MPFI, CRDI & GDI systems with components (line diagram)."
subject: "AUTOMOTIVE TECHNOLOGY"
module: "Module 2: Power plant: Components in an IC engine – head, block & sump, cylinder, piston, piston pin, crank, connecting rod, valve train and types, combustion process – A/F ratio, self"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463ab2"
status: "completed"
scrapedAt: "2026-05-20T18:03:21.488Z"
---
# AUTOMOTIVE TECHNOLOGY - Module 2: Power Plant - Fuel, Air, and Ignition Systems

## Topic: Fuel, Air, and Ignition Systems: Carburettors (Simple), MPFI, CRDI & GDI Systems with Components (Line Diagram)

---

### **Learning Outcomes Covered:**

*   **LO1:** Understand the fundamental principles of fuel delivery and air intake in Internal Combustion Engines (ICE).
*   **LO2:** Differentiate between various fuel delivery systems (carburettor, MPFI, CRDI, GDI) in terms of their operation, components, and advantages.
*   **LO3:** Identify and describe the key components of each fuel delivery system.
*   **LO4:** Explain the role of Air-Fuel (A/F) ratio in combustion and how different systems achieve optimal ratios.

---

### **Course Outcomes Alignment:**

*   **CO1 (K2):** Understanding the efficiency and performance of different propulsion systems (ICE). This topic directly contributes by explaining how fuel delivery impacts engine performance.
*   **CO3 (K2):** Describing the operation and integration of advanced automotive technologies such as fuel injection systems (MPFI, CRDI, GDI) and their role in performance enhancement.

---

## 1. Introduction to Fuel and Air Systems in ICE

The efficient operation of an Internal Combustion Engine (ICE) relies on a precise mixture of fuel and air being delivered to the combustion chamber. The Air-Fuel (A/F) ratio is critical for achieving optimal combustion, power output, fuel efficiency, and emission control.

*   **Key Concept:** **Air-Fuel (A/F) Ratio:** The mass ratio of air to fuel present in the combustible mixture.
    *   **Stoichiometric Ratio:** The ideal A/F ratio for complete combustion, where all fuel and oxygen are consumed. For gasoline, it's approximately **14.7:1**.
    *   **Rich Mixture:** More fuel than air (e.g., 12:1). Results in more power but less fuel efficiency and higher CO emissions.
    *   **Lean Mixture:** More air than fuel (e.g., 16:1). Results in better fuel economy but can lead to misfires and increased NOx emissions at higher loads.

*   **Importance:**
    *   **Combustion Efficiency:** Optimal A/F ratio ensures complete burning of fuel.
    *   **Power Output:** Richer mixtures generally produce more power (up to a point).
    *   **Fuel Economy:** Leaner mixtures generally improve fuel efficiency.
    *   **Emissions Control:** Catalytic converters require a precise A/F ratio (close to stoichiometric) for effective pollutant conversion.

---

## 2. Carburettors (Simple)

**Definition:** A mechanical device that mixes air and fuel in the correct proportion for combustion in an internal combustion engine. It works on the principle of the Venturi effect.

*   **Operating Principle:** As air flows through a constricted passage (Venturi) in the carburettor, its velocity increases, and its pressure drops. This low-pressure area draws fuel from a reservoir (float chamber) through jets, atomizing it and mixing it with the incoming air.

*   **Key Components:**
    1.  **Float Chamber:** A small reservoir that maintains a constant level of fuel. It has a float and a needle valve that opens and closes to regulate fuel supply from the fuel tank.
    2.  **Venturi:** A constricted section in the carburettor throat. The pressure drop here is crucial for fuel suction.
    3.  **Throttle Valve:** A butterfly valve controlled by the accelerator pedal. It regulates the amount of air-fuel mixture entering the engine, thus controlling engine speed and power.
    4.  **Jets:** Small orifices through which fuel is drawn into the airstream.
        *   **Main Jet:** Controls fuel flow at higher engine speeds and loads.
        *   **Idling Jet:** Provides fuel for the engine at idle speed.
    5.  **Choke Valve:** A butterfly valve located before the Venturi, used to enrich the mixture for cold starting. When closed, it restricts airflow, increasing the vacuum and drawing more fuel.
    6.  **Emulsion Tube:** A tube with small holes that helps to emulsify the fuel and air mixture for better atomization.
    7.  **Accelerator Pump (Optional but common):** Delivers an extra squirt of fuel when the throttle is suddenly opened to prevent a lean stumble.

*   **Simple Carburettor Line Diagram:**

    ```mermaid
    graph TD
        A[Fuel Tank] --> B{Fuel Pump};
        B --> C[Float Chamber];
        C -- Needle Valve --> D[Float];
        C -- Fuel --> E{Venturi};
        F[Air Intake] --> E;
        E -- Restricted Airflow --> G[Choke Valve];
        E -- Vacuum --> H[Main Jet];
        H -- Fuel --> E;
        E -- Mixture --> I[Throttle Valve];
        I -- Controlled by Accelerator --> J[Engine Intake Manifold];

        subgraph Float Chamber
            C
            D
        end

        subgraph Carburettor Body
            E
            G
            H
            I
        end

        style Venturi fill:#f9f,stroke:#333,stroke-width:2px
        style Throttle_Valve fill:#ccf,stroke:#333,stroke-width:2px
        style Choke_Valve fill:#ccf,stroke:#333,stroke-width:2px
    ```

*   **Advantages:** Simple design, low cost, easy to maintain.
*   **Disadvantages:** Less precise A/F control, less fuel efficient, higher emissions, difficulty in adapting to varying engine conditions (altitude, temperature).
*   **Textbook Reference:** Kirpal Singh Vol.1, Hillier & Coobes, Heisler.

---

## 3. Multi-Point Fuel Injection (MPFI)

**Definition:** An electronic fuel injection system where a separate injector is located near each cylinder's intake port, delivering fuel directly into the intake manifold just before the intake valve.

*   **Operating Principle:** An Electronic Control Unit (ECU) receives input from various sensors (e.g., engine speed, throttle position, engine temperature, oxygen sensor). Based on these inputs, the ECU precisely controls the duration and timing of fuel injection from each injector, ensuring an optimal A/F ratio for different operating conditions.

*   **Key Components:**
    1.  **Fuel Tank:** Stores the fuel.
    2.  **Fuel Pump:** Electrically driven pump that delivers fuel from the tank to the fuel rail at a regulated pressure.
    3.  **Fuel Filter:** Removes impurities from the fuel.
    4.  **Fuel Rail:** A manifold that distributes pressurized fuel to the injectors.
    5.  **Fuel Pressure Regulator:** Maintains a constant fuel pressure in the fuel rail, returning excess fuel to the tank.
    6.  **Fuel Injectors:** Electronically controlled valves that spray atomized fuel into the intake manifold.
    7.  **Throttle Body:** Contains the throttle valve and sensors (e.g., Throttle Position Sensor - TPS) that signal the ECU about the driver's throttle input.
    8.  **Sensors:**
        *   **Mass Air Flow (MAF) Sensor:** Measures the amount of air entering the engine.
        *   **Manifold Absolute Pressure (MAP) Sensor:** Measures the pressure in the intake manifold.
        *   **Engine Coolant Temperature (ECT) Sensor:** Measures engine coolant temperature.
        *   **Oxygen (O2) Sensor:** Measures the oxygen content in the exhaust gas, providing feedback to the ECU for A/F ratio correction.
        *   **Crankshaft Position Sensor (CKP) & Camshaft Position Sensor (CMP):** Provide engine speed and timing information.
    9.  **Electronic Control Unit (ECU) / Powertrain Control Module (PCM):** The "brain" of the system, processing sensor data and controlling fuel injectors, ignition timing, etc.

*   **MPFI Line Diagram:**

    ```mermaid
    graph TD
        A[Fuel Tank] --> B{Fuel Pump};
        B --> C[Fuel Filter];
        C --> D[Fuel Rail];
        D --> E[Injector 1];
        D --> F[Injector 2];
        D --> G[Injector 3];
        D --> H[Injector 4];

        I[Air Intake] --> J[Throttle Body];
        J --> K[ECU];

        L[MAF Sensor] --> K;
        M[TPS Sensor] --> K;
        N[ECT Sensor] --> K;
        O[O2 Sensor] --> K;
        P[CKP/CMP Sensors] --> K;

        K -- Controls Injection Pulse --> E;
        K -- Controls Injection Pulse --> F;
        K -- Controls Injection Pulse --> G;
        K -- Controls Injection Pulse --> H;

        E -- Fuel Spray --> Q1[Intake Port 1];
        F -- Fuel Spray --> Q2[Intake Port 2];
        G -- Fuel Spray --> Q3[Intake Port 3];
        H -- Fuel Spray --> Q4[Intake Port 4];

        Q1 --> R1[Cylinder 1];
        Q2 --> R2[Cylinder 2];
        Q3 --> R3[Cylinder 3];
        Q4 --> R4[Cylinder 4];

        subgraph Electronic Control System
            K
            L
            M
            N
            O
            P
        end

        style Injector_1 fill:#f9f,stroke:#333,stroke-width:2px
        style ECU fill:#ccf,stroke:#333,stroke-width:2px
    ```

*   **Advantages:** Precise A/F ratio control, improved fuel efficiency, lower emissions, better performance, smoother idling, easy cold starts.
*   **Disadvantages:** More complex and expensive than carburettors, requires specialized diagnostic tools.
*   **Textbook Reference:** Kirpal Singh Vol.1, Gupta, Heisler, Denton & Pells, Denton (Electrical/Electronic Systems).
*   **CO3 Alignment:** Directly addresses the operation and integration of fuel injection systems.

---

## 4. Common Rail Direct Injection (CRDI) - Diesel Engines

**Definition:** A fuel injection system for diesel engines where the fuel is injected directly into the combustion chamber. It utilizes a high-pressure accumulator (common rail) to store fuel at a very high pressure.

*   **Operating Principle:** A high-pressure fuel pump pressurizes fuel and delivers it to a common rail. Injectors, electronically controlled by the ECU, spray this high-pressure fuel directly into the combustion chamber at precisely timed intervals. The ECU can control the injection quantity, timing, and pressure for each injection event, allowing for multiple injection pulses per combustion cycle (pilot, main, post injections).

*   **Key Components:**
    1.  **Fuel Tank:** Stores diesel fuel.
    2.  **Low-Pressure Fuel Pump:** Often integrated into the fuel tank or lift pump, supplies fuel to the high-pressure pump.
    3.  **High-Pressure Fuel Pump:** Driven by the engine, it generates extremely high fuel pressures (up to 2000+ bar).
    4.  **Common Rail:** A robust pipe that stores fuel at very high pressure and distributes it to the injectors. It usually includes a pressure sensor.
    5.  **Fuel Rail Pressure Sensor:** Monitors the fuel pressure in the common rail and sends this information to the ECU.
    6.  **Fuel Pressure Regulator/Control Valve (on pump):** Regulates the pressure generated by the high-pressure pump to maintain the desired pressure in the common rail.
    7.  **Diesel Injectors:** Solenoid- or piezo-electrically actuated valves that inject fuel directly into the combustion chamber. They are designed to withstand very high pressures.
    8.  **ECU (Engine Control Unit):** Controls the timing and duration of fuel injection based on sensor inputs.
    9.  **Sensors:**
        *   Crankshaft Position Sensor (CKP) & Camshaft Position Sensor (CMP)
        *   Fuel Rail Pressure Sensor
        *   Accelerator Pedal Position Sensor
        *   Engine Temperature Sensors
        *   Boost Pressure Sensor
        *   Oxygen Sensor (in exhaust)

*   **CRDI Line Diagram:**

    ```mermaid
    graph TD
        A[Fuel Tank] --> B[Low-Pressure Fuel Pump];
        B --> C{High-Pressure Fuel Pump};
        C -- High Pressure Fuel --> D[Common Rail];
        D -- Fuel --> E[Injector 1];
        D -- Fuel --> F[Injector 2];
        D -- Fuel --> G[Injector 3];
        D -- Fuel --> H[Injector 4];

        I[ECU] --> J[High-Pressure Pump Control];
        I --> K[Injector 1 Control];
        I --> L[Injector 2 Control];
        I --> M[Injector 3 Control];
        I --> N[Injector 4 Control];

        O[Crankshaft Sensor] --> I;
        P[Fuel Rail Pressure Sensor] --> I;
        Q[Accelerator Pedal Sensor] --> I;
        R[Engine Temp Sensor] --> I;
        S[Boost Pressure Sensor] --> I;

        E -- Direct Injection --> T1[Combustion Chamber 1];
        F -- Direct Injection --> T2[Combustion Chamber 2];
        G -- Direct Injection --> T3[Combustion Chamber 3];
        H -- Direct Injection --> T4[Combustion Chamber 4];

        subgraph Electronic Control System
            I
            J
            K
            L
            M
            N
            O
            P
            Q
            R
            S
        end

        style Common_Rail fill:#f9f,stroke:#333,stroke-width:2px
        style Injector_1 fill:#ccf,stroke:#333,stroke-width:2px
        style ECU fill:#ccf,stroke:#333,stroke-width:2px
    ```

*   **Advantages:** Excellent fuel efficiency, high power output, reduced emissions (especially NOx and PM), quieter operation, precise control over combustion.
*   **Disadvantages:** High system cost, requires very clean fuel, sensitive to fuel contamination, requires specialized maintenance.
*   **Textbook Reference:** Kirpal Singh Vol.1, Gupta, Heisler, Denton & Pells, Denton (Electrical/Electronic Systems).
*   **CO3 Alignment:** Directly addresses the operation and integration of advanced fuel injection systems.

---

## 5. Gasoline Direct Injection (GDI)

**Definition:** A fuel injection system for gasoline engines where fuel is injected directly into the combustion chamber at very high pressures.

*   **Operating Principle:** Similar in concept to CRDI, but for gasoline engines. A high-pressure fuel pump pressurizes gasoline and delivers it to a fuel rail. Electronically controlled injectors spray fuel directly into the cylinder at extremely high pressures (often 50-200 bar, sometimes higher). This allows for precise fuel metering, stratification of the fuel-air mixture (stratified charge mode), and higher compression ratios. The ECU manages injection timing, pressure, and quantity.

*   **Key Components:**
    1.  **Fuel Tank:** Stores gasoline.
    2.  **Low-Pressure Fuel Pump:** Delivers fuel from the tank to the high-pressure pump.
    3.  **High-Pressure Fuel Pump:** Driven by the engine (often mechanically by the camshaft), it pressurizes gasoline to very high levels.
    4.  **Fuel Rail:** Stores pressurized fuel and distributes it to the injectors. Often includes a pressure sensor.
    5.  **Fuel Pressure Sensor:** Monitors fuel pressure in the rail.
    6.  **Gasoline Direct Injectors:** High-pressure injectors that spray atomized fuel directly into the combustion chamber.
    7.  **ECU (Engine Control Unit):** Controls the high-pressure pump and injectors based on sensor inputs.
    8.  **Sensors:**
        *   Crankshaft Position Sensor (CKP) & Camshaft Position Sensor (CMP)
        *   Fuel Rail Pressure Sensor
        *   Accelerator Pedal Position Sensor
        *   Mass Air Flow (MAF) Sensor
        *   Manifold Absolute Pressure (MAP) Sensor
        *   Engine Coolant Temperature (ECT) Sensor
        *   Knock Sensor
        *   Oxygen (O2) Sensor

*   **GDI Line Diagram:**

    ```mermaid
    graph TD
        A[Fuel Tank] --> B[Low-Pressure Fuel Pump];
        B --> C{High-Pressure Fuel Pump};
        C -- High Pressure Fuel --> D[Fuel Rail];
        D -- Fuel --> E[Injector 1];
        D -- Fuel --> F[Injector 2];
        D -- Fuel --> G[Injector 3];
        D -- Fuel --> H[Injector 4];

        I[ECU] --> J[High-Pressure Pump Control];
        I --> K[Injector 1 Control];
        I --> L[Injector 2 Control];
        I --> M[Injector 3 Control];
        I --> N[Injector 4 Control];

        O[Crankshaft Sensor] --> I;
        P[Fuel Rail Pressure Sensor] --> I;
        Q[Accelerator Pedal Sensor] --> I;
        R[MAF Sensor] --> I;
        S[Engine Temp Sensor] --> I;

        E -- Direct Injection --> T1[Combustion Chamber 1];
        F -- Direct Injection --> T2[Combustion Chamber 2];
        G -- Direct Injection --> T3[Combustion Chamber 3];
        H -- Direct Injection --> T4[Combustion Chamber 4];

        subgraph Electronic Control System
            I
            J
            K
            L
            M
            N
            O
            P
            Q
            R
            S
        end

        style Fuel_Rail fill:#f9f,stroke:#333,stroke-width:2px
        style Injector_1 fill:#ccf,stroke:#333,stroke-width:2px
        style ECU fill:#ccf,stroke:#333,stroke-width:2px
    ```

*   **Advantages:** Improved fuel efficiency (especially in part-load conditions), increased power output, reduced emissions, ability to operate with lean stratified charge for better efficiency, potential for higher compression ratios.
*   **Disadvantages:** Higher system cost, potential for carbon buildup on intake valves (due to fuel not washing them), higher risk of fuel contamination impacting the system, requires specialized maintenance.
*   **Textbook Reference:** Kirpal Singh Vol.1, Gupta, Heisler, Denton & Pells, Denton (Electrical/Electronic Systems).
*   **CO3 Alignment:** Directly addresses the operation and integration of advanced fuel injection systems.

---

## 6. Comparison of Fuel Delivery Systems

| Feature             | Carburettor (Simple)          | MPFI (Multi-Point Fuel Injection) | CRDI (Common Rail Direct Injection) | GDI (Gasoline Direct Injection) |
| :------------------ | :---------------------------- | :-------------------------------- | :---------------------------------- | :------------------------------ |
| **Fuel Delivery**   | Intake Manifold               | Intake Manifold (Port Injection)  | Combustion Chamber (Direct Injection) | Combustion Chamber (Direct Injection) |
| **Fuel Pressure**   | Low (gravity/low pressure pump) | Moderate (2-5 bar)                | Very High (up to 2000+ bar)         | High (50-200+ bar)              |
| **Control Method**  | Mechanical (Venturi, jets)    | Electronic (ECU, injectors)       | Electronic (ECU, injectors)         | Electronic (ECU, injectors)     |
| **A/F Ratio Control** | Poor to Moderate              | Excellent                         | Excellent                           | Excellent                       |
| **Efficiency**      | Low                           | Good                              | Very High                           | High                            |
| **Power Output**    | Moderate                      | Good                              | Very High                           | High                            |
| **Emissions**       | High                          | Moderate to Low                   | Low                                 | Low                             |
| **Complexity**      | Low                           | Moderate                          | High                                | High                            |
| **Cost**            | Low                           | Moderate                          | High                                | High                            |
| **Cold Start**      | Requires choke                | Generally good                    | Good                                | Generally good                  |
| **Application**     | Older gasoline engines        | Modern gasoline engines           | Modern diesel engines               | Modern gasoline engines         |

*   **CO1 Alignment:** Understanding efficiency and performance is directly supported by this comparison.

---

## 7. Important Points to Remember

*   The **Air-Fuel (A/F) ratio** is paramount for efficient combustion, performance, and emissions control.
*   **Carburettors** are mechanical devices relying on the Venturi effect, offering simplicity but lacking precision.
*   **Fuel Injection Systems (MPFI, CRDI, GDI)** utilize electronic control units (ECUs) and sensors for highly precise fuel delivery, leading to significant improvements in efficiency, power, and emissions.
*   **MPFI** injects fuel into the intake manifold, while **CRDI** and **GDI** inject fuel directly into the combustion chamber, enabling higher pressures and finer control.
*   **CRDI** is for diesel engines, **GDI** is for gasoline engines, both featuring direct injection into the cylinder.
*   The trend in modern automotive technology is moving away from carburettors towards sophisticated electronic fuel injection systems.

---

## 8. Practice Questions

1.  **Define the stoichiometric A/F ratio for gasoline and explain the terms "rich mixture" and "lean mixture."**
    *   **Answer:** The stoichiometric A/F ratio for gasoline is approximately 14.7:1. A rich mixture has more fuel relative to air (e.g., 12:1), while a lean mixture has more air relative to fuel (e.g., 16:1).
2.  **Describe the primary function of the Venturi in a simple carburettor.**
    *   **Answer:** The Venturi creates a low-pressure area due to increased air velocity, which draws fuel from the float chamber through the jets into the airstream.
3.  **List the main components of an MPFI system.**
    *   **Answer:** Fuel Tank, Fuel Pump, Fuel Filter, Fuel Rail, Fuel Pressure Regulator, Fuel Injectors, Throttle Body, ECU, and various Sensors (MAF, MAP, ECT, O2, CKP/CMP).
4.  **What is the key difference between MPFI and GDI in terms of fuel delivery location?**
    *   **Answer:** MPFI injects fuel into the intake manifold port, while GDI injects fuel directly into the combustion chamber.
5.  **Explain why diesel engines use direct injection (like CRDI) and the advantage of high fuel pressure.**
    *   **Answer:** Diesel engines rely on compression ignition. Direct injection of fuel at very high pressures allows for finer atomization and better mixing with the hot compressed air, leading to more efficient combustion, higher power output, and cleaner emissions compared to older indirect injection diesel systems.
6.  **Which of the following systems offers the most precise control over the Air-Fuel ratio? (a) Carburettor (b) MPFI (c) CRDI (d) All provide similar control.**
    *   **Answer:** (b) MPFI, (c) CRDI, and (d) GDI all offer significantly more precise control than a carburettor. CRDI and GDI offer the highest level of precision due to direct injection and higher pressures. Among the options, if we consider the precision *across all conditions*, the injection systems are superior. However, if the question implies the *highest potential* precision, CRDI and GDI are the best. (Let's refine this to choose the best among the electronic systems). **Corrected Answer Choice Consideration:** All fuel injection systems (MPFI, CRDI, GDI) offer far superior control than carburettors. CRDI and GDI, with their direct injection and higher pressures, generally offer the most refined control over combustion, allowing for strategies like multiple injection events. So, (c) and (d) represent the most precise. Let's assume the question is asking for the *most advanced* precise systems.

    *   **Revised Question for Clarity:** "Which of the following systems offers the highest degree of precise control over the Air-Fuel ratio and combustion process?"
        *   **Answer:** (c) CRDI and (d) GDI. (As both are direct injection systems offering very high precision).

---

### **End of Notes**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
