---
title: "Exhaust Gas Recirculation"
subject: "THERMAL ENGINEERING"
module: "Module 4: Combustion in IC Engines : Fuels for IC engines"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044639b9"
status: "completed"
scrapedAt: "2026-05-20T18:09:09.582Z"
---
# Thermal Engineering: Module 4 - Combustion in IC Engines

## Topic: Exhaust Gas Recirculation (EGR)

**Knowledge Level:** K2 (Explanation)

**Alignment with Course Outcomes:**
*   **CO4:** Explain the combustion phenomenon and pollution in IC engines. (This topic directly addresses pollution control in IC engines.)

---

### 1. Introduction to Exhaust Gas Recirculation (EGR)

**Definition:**
Exhaust Gas Recirculation (EGR) is a process where a portion of the exhaust gas from the engine is recirculated back into the intake manifold, mixing with the incoming fresh air-fuel mixture.

**Purpose:**
The primary purpose of EGR is to reduce the formation of Nitrogen Oxides (NOx) in the combustion chamber.

**Why EGR Reduces NOx:**
NOx formation is highly dependent on the peak combustion temperature.
*   High combustion temperatures (above 1500°C) are required for significant NOx formation.
*   By introducing inert exhaust gases into the intake charge, EGR lowers the specific heat of the mixture.
*   This increased heat capacity leads to a slower rate of temperature rise and a lower peak combustion temperature.
*   The lower peak temperatures significantly suppress the formation of NOx.

---

### 2. Working Principle of EGR

*   **Recirculation of Exhaust Gas:** A controlled amount of exhaust gas is diverted from the exhaust manifold.
*   **Cooling (Optional but common):** In modern systems, the recirculated exhaust gas is often cooled before being introduced into the intake manifold. This further enhances the effectiveness of EGR by increasing the density of the intake charge.
*   **Mixing:** The cooled exhaust gas mixes with the incoming fresh air (and fuel in gasoline engines, or just air in diesel engines).
*   **Combustion:** The diluted air-fuel mixture enters the combustion chamber.
*   **Lower Peak Temperature:** The presence of exhaust gas in the charge leads to a lower peak combustion temperature, thereby reducing NOx formation.

**Diagrammatic Representation (Conceptual):**

```
                  +-----------------+
                  |   Engine        |
                  |   Cylinder      |
                  +--------+--------+
                           | (Exhaust Gas)
                           v
                  +-----------------+     +--------------------+
                  | Exhaust Manifold|---->| EGR Control Valve  |---+
                  +-----------------+     +----------+---------+   |
                                                        | (Recirculated Exhaust Gas)
                                                        |
                                                        v
                                                 +-------------+     +-----------------+
                                                 | EGR Cooler  |---->| Intake Manifold |
                                                 | (Optional)  |     +--------+--------+
                                                 +-------------+              | (Fresh Air)
                                                                              v
                                                                       +-------------+
                                                                       | Air Filter  |
                                                                       +-------------+
```

---

### 3. Types of EGR Systems

EGR systems can be broadly classified based on the control mechanism and whether cooling is employed.

**3.1. Non-Cooled EGR:**
*   **Description:** Exhaust gases are directly recirculated into the intake manifold without any cooling.
*   **Advantages:** Simpler design, lower cost.
*   **Disadvantages:**
    *   Less effective in reducing NOx compared to cooled EGR.
    *   Can increase the intake manifold temperature, potentially leading to knocking in gasoline engines.
    *   Can lead to increased soot formation in diesel engines.

**3.2. Cooled EGR (CEGR):**
*   **Description:** Exhaust gases are passed through a heat exchanger (EGR cooler) to reduce their temperature before entering the intake manifold.
*   **Advantages:**
    *   More effective in reducing NOx due to lower charge temperature.
    *   Reduces the risk of knocking in gasoline engines.
    *   Can improve volumetric efficiency by increasing the density of the intake charge.
    *   Reduces soot formation in diesel engines by allowing for a leaner mixture.
*   **Disadvantages:**
    *   More complex system with an added EGR cooler.
    *   Increased cost.
    *   Potential for EGR cooler fouling/blockage.

**3.3. Internal EGR (I-EGR) / Overlap EGR:**
*   **Description:** This is an inherent phenomenon that occurs in engines with valve overlap (when both intake and exhaust valves are open simultaneously during the valve-overturning period). A small amount of exhaust gas remains in the cylinder and mixes with the fresh charge.
*   **Control:** The amount of I-EGR can be controlled by adjusting valve timing (e.g., variable valve timing - VVT).
*   **Advantages:** No external hardware required, integrated into engine design.
*   **Disadvantages:** Limited control over the amount of EGR, can affect engine performance if not optimized.

---

### 4. EGR Control Mechanisms

Effective control of the EGR rate is crucial to optimize NOx reduction without negatively impacting engine performance and other emissions.

**4.1. Mechanical EGR Systems:**
*   **Description:** Uses mechanical devices to control the flow of exhaust gas.
*   **EGR Control Valve:** A valve, often vacuum-actuated or directly cable-operated, regulates the amount of exhaust gas entering the intake manifold.
    *   **Vacuum Actuated:** A diaphragm operated by engine vacuum controls the valve opening. The vacuum signal can be modulated by a vacuum diaphragm controlled by the engine control unit (ECU).
    *   **Electric Actuated:** A stepper motor or solenoid directly controls the valve position, offering more precise control.

**4.2. Electronic EGR Systems:**
*   **Description:** Controlled by the Engine Control Unit (ECU) based on various sensor inputs.
*   **Sensors:**
    *   Engine speed and load
    *   Manifold Absolute Pressure (MAP)
    *   Throttle position
    *   Coolant temperature
    *   Oxygen sensor (Lambda sensor)
    *   Exhaust gas temperature sensor
*   **Actuators:** Electric motors or solenoids precisely position the EGR valve.
*   **Advantages:**
    *   Precise control of EGR flow.
    *   Dynamic adjustment based on operating conditions.
    *   Optimization of NOx reduction versus fuel economy and other emissions.

---

### 5. EGR Rate and its Effects

**EGR Rate:**
The EGR rate is the ratio of the mass of recirculated exhaust gas to the total mass of the intake charge.

*   **Formula:**
    $EGR Rate = \frac{\dot{m}_{egr}}{\dot{m}_{fresh\_air} + \dot{m}_{egr}}$
    Where:
    *   $\dot{m}_{egr}$ is the mass flow rate of recirculated exhaust gas.
    *   $\dot{m}_{fresh\_air}$ is the mass flow rate of fresh intake air.

**Effects of EGR:**

*   **Positive Effects:**
    *   **NOx Reduction:** The primary benefit. Typical EGR rates can reduce NOx by 50-80%.
    *   **Improved Fuel Economy (in some cases):** By reducing pumping losses and enabling spark timing optimization.
    *   **Reduced Knocking Tendency (Gasoline Engines):** Lower charge temperatures increase the octane requirement of the fuel.

*   **Negative Effects:**
    *   **Increased Soot Formation (Diesel Engines):** The presence of oxygen-deficient exhaust gas can lead to incomplete combustion and soot formation.
    *   **Reduced Power Output:** The inert exhaust gas displaces fresh air, reducing the oxygen available for combustion, thus lowering power output, especially at high EGR rates.
    *   **Increased Hydrocarbon (HC) and Carbon Monoxide (CO) Emissions:** Lower combustion temperatures can lead to incomplete combustion, increasing HC and CO.
    *   **Potential for Catalyst Deactivation:** Soot accumulation can foul catalytic converters.
    *   **Engine Durability Concerns:** Corrosive elements in exhaust gas can affect engine components.

---

### 6. EGR Implementation in Gasoline vs. Diesel Engines

The application and impact of EGR differ significantly between gasoline and diesel engines.

**6.1. EGR in Gasoline Engines:**
*   **Primary Goal:** NOx reduction.
*   **Mechanism:** EGR is introduced into the intake manifold.
*   **Key Considerations:**
    *   **Knock Suppression:** EGR is particularly effective at reducing knock by lowering peak combustion temperatures. This allows for spark timing to be advanced for better efficiency.
    *   **Volumetric Efficiency:** High EGR rates can reduce volumetric efficiency, impacting power output.
    *   **HC and CO:** Careful control is needed to avoid increased HC and CO emissions due to lower combustion temperatures.
    *   **Catalytic Converter:** EGR can improve the efficiency of the three-way catalytic converter by maintaining optimal exhaust gas temperatures and preventing catalyst poisoning from excessively rich or lean mixtures.
*   **Typical EGR Rates:** 5-20% (mass basis), varying with load and speed.

**6.2. EGR in Diesel Engines:**
*   **Primary Goal:** NOx reduction.
*   **Mechanism:** Exhaust gas is recirculated into the intake air.
*   **Key Considerations:**
    *   **Soot Formation:** This is a major concern. The reduced oxygen content and the presence of inert gases promote soot formation. Cooled EGR is almost always used in modern diesel engines to mitigate this.
    *   **Particulate Matter (PM) and HC/CO:** Can increase if EGR rates are too high or if not properly controlled.
    *   **Fuel Economy:** Generally, EGR has a less pronounced impact on fuel economy in diesel engines compared to gasoline engines.
    *   **Cooled EGR is essential:** To maintain reasonable combustion temperatures and limit soot.
*   **Typical EGR Rates:** Can be higher than gasoline engines, up to 30-50% or more, depending on the control strategy and whether it's cooled.

---

### 7. Advanced EGR Strategies and Technologies

*   **High-Pressure EGR (HP-EGR):**
    *   **Description:** Exhaust gas is tapped *before* the turbocharger compressor and recirculated into the intake manifold *before* the turbocharger.
    *   **Pros:** More effective at reducing NOx at low engine loads when exhaust manifold pressure is low.
    *   **Cons:** Can lead to turbocharger lag and reduced turbocharger efficiency as exhaust gases bypass it. The exhaust gas is hot, requiring effective cooling.

*   **Low-Pressure EGR (LP-EGR):**
    *   **Description:** Exhaust gas is tapped *after* the turbocharger and intercooler and recirculated to the intake manifold *after* the intercooler.
    *   **Pros:** Does not affect turbocharger performance. The exhaust gas is already cooler and denser, improving volumetric efficiency.
    *   **Cons:** Less effective at low engine loads due to lower exhaust manifold pressure.

*   **Split EGR:**
    *   **Description:** A combination of HP-EGR and LP-EGR, where the flow is split between the two paths to optimize performance across a wider range of operating conditions.

*   **Variable Valve Actuation (VVA) for I-EGR:**
    *   **Description:** Using technologies like variable valve timing and lift to precisely control internal EGR by adjusting valve overlap.

---

### 8. EGR and Other Emission Control Technologies

EGR is often used in conjunction with other emission control technologies.

*   **Three-Way Catalytic Converter (Gasoline Engines):** EGR reduces NOx, and the catalyst converts HC, CO, and remaining NOx into less harmful substances.
*   **Diesel Oxidation Catalyst (DOC) (Diesel Engines):** Oxidizes HC and CO.
*   **Diesel Particulate Filter (DPF) (Diesel Engines):** Traps soot. Cooled EGR helps reduce soot loading on the DPF.
*   **Selective Catalytic Reduction (SCR) (Diesel Engines):** Uses urea (AdBlue) to chemically reduce NOx to nitrogen and water. EGR is used to reduce the NOx load on the SCR system.

---

### 9. Advantages and Disadvantages of EGR

| Advantages                               | Disadvantages                                     |
| :--------------------------------------- | :------------------------------------------------ |
| **Significant NOx Reduction**            | Increased Soot Formation (Diesel)                 |
| Reduces Knock Tendency (Gasoline)        | Reduced Power Output                              |
| Can Improve Fuel Economy (Gasoline)      | Increased HC and CO Emissions (at high rates)     |
| Can reduce the need for other NOx systems | Potential for catalyst fouling/deactivation       |
|                                          | Increased complexity and cost of the system       |
|                                          | Potential for EGR cooler fouling/blockage         |
|                                          | Potential impact on engine durability             |

---

### 10. Key Points to Remember

*   **Primary Function:** Reduce NOx emissions by lowering peak combustion temperatures.
*   **Mechanism:** Recirculating inert exhaust gas into the intake charge.
*   **Cooled EGR:** Essential for modern diesel engines to manage soot and for improved efficiency in gasoline engines.
*   **EGR Rate:** The percentage of exhaust gas in the intake charge, critical for effective control.
*   **Trade-offs:** NOx reduction often comes at the cost of potential increases in soot, HC, CO, and a reduction in power output.
*   **Engine Type Specifics:** EGR is applied differently in gasoline (knock suppression, catalyst compatibility) and diesel (soot management) engines.

---

### 11. Practice Questions and Answers

**Question 1:** What is the primary purpose of Exhaust Gas Recirculation (EGR) in IC engines?
**Answer:** The primary purpose of EGR is to reduce the formation of Nitrogen Oxides (NOx) by lowering the peak combustion temperature.

**Question 2:** How does EGR help in reducing NOx emissions?
**Answer:** EGR reduces NOx by introducing inert exhaust gases into the intake charge. These gases absorb heat, increasing the specific heat of the mixture, which slows down the rate of temperature rise and results in a lower peak combustion temperature, suppressing NOx formation.

**Question 3:** What is the main disadvantage of EGR in diesel engines, and how is it mitigated?
**Answer:** The main disadvantage of EGR in diesel engines is increased soot formation due to reduced oxygen availability. This is mitigated by using **Cooled EGR (CEGR)**, which cools the exhaust gas before recirculation, making it denser and allowing for more air to be drawn into the cylinder, thus maintaining better combustion and reducing soot.

**Question 4:** Differentiate between High-Pressure EGR (HP-EGR) and Low-Pressure EGR (LP-EGR).
**Answer:**
*   **HP-EGR:** Exhaust gas is tapped *before* the turbocharger and recirculated to the intake *before* the compressor. It's effective at low loads but can reduce turbocharger efficiency.
*   **LP-EGR:** Exhaust gas is tapped *after* the turbocharger and intercooler and recirculated to the intake *after* the intercooler. It doesn't affect turbocharger performance but is less effective at low loads.

**Question 5:** Explain why cooled EGR is often preferred over non-cooled EGR.
**Answer:** Cooled EGR is preferred because it lowers the charge temperature more effectively, leading to greater NOx reduction. It also increases the density of the intake charge, improving volumetric efficiency, and reduces the tendency for knocking in gasoline engines. In diesel engines, it helps control soot formation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 12. Textbook and Reference Book Integration Points

*   **Rudra Moorthy:** Likely covers the fundamental principles of combustion and emissions control, including EGR as a strategy for NOx reduction. (Chapter on Combustion/Emissions)
*   **R.K Rajput:** Expected to provide a detailed explanation of the working principles, types, and components of EGR systems, perhaps with simplified diagrams. (Chapter on Engine Performance/Emissions)
*   **V. Ganesan:** Will likely discuss EGR in the context of engine performance parameters and emission regulations, with a focus on practical applications. (Chapter on Emissions Control)
*   **H.N. Gupta:** May delve into the thermodynamic aspects of EGR and its impact on combustion chemistry, potentially including rate equations for NOx formation and suppression. (Chapter on Combustion/Emissions)
*   **V. Sajith and Shijo Thomas:** Could offer insights into the control strategies for EGR systems, especially electronic control, and its integration with modern engine management systems. (Chapter on Engine Management Systems/Emissions)
*   **J.B. Heywood:** An excellent reference for in-depth analysis of combustion processes, including detailed explanations of EGR mechanisms, its effects on various emissions, and advanced EGR strategies. (Chapters on Emissions Formation and Control)
*   **Mahesh Rathore:** Might provide a practical overview of EGR technology, including system design considerations and its role in meeting emission standards. (Chapter on IC Engine Emissions)

*(Note: Specific chapter numbers may vary based on edition. This is a general indication of where the information would likely be found.)*

---