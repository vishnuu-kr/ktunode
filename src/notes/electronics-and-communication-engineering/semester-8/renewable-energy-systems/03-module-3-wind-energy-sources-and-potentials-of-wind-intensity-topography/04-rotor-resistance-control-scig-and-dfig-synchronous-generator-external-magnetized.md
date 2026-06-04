---
title: "Rotor resistance control, SCIG and DFIG, Synchronous Generator-external magnetized"
subject: "RENEWABLE ENERGY SYSTEMS"
module: "Module 3: Wind Energy: Sources and potentials, of Wind Intensity, Topography"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff61b"
status: "completed"
scrapedAt: "2026-05-23T18:56:42.518Z"
---
# RENEWABLE ENERGY SYSTEMS

## Module 3: Wind Energy: Sources and Potentials, Wind Intensity, Topography

### Topic: Rotor Resistance Control, SCIG and DFIG, Synchronous Generator - Externally Magnetized

---

### 1. Introduction to Wind Turbine Generator Technologies

This section delves into the fundamental generator types used in wind energy systems, focusing on their operational principles and control strategies. Understanding these technologies is crucial for maximizing energy capture and ensuring grid compatibility.

---

### 2. Rotor Resistance Control

Rotor resistance control is primarily applicable to **Squirrel Cage Induction Generators (SCIGs)**. It's a method used to adjust the generator's electrical characteristics to optimize performance, particularly in variable wind conditions.

*   **Objective:** To improve the starting torque and control the slip of the induction generator, thereby affecting its power output.
*   **Mechanism:** External resistors are connected to the rotor circuit through slip rings. By varying the resistance in the rotor circuit, the torque-speed characteristic of the generator can be modified.
*   **Benefits:**
    *   **Improved Starting Torque:** Higher rotor resistance leads to higher starting torque, which is beneficial for starting the turbine under load.
    *   **Reduced Starting Current:** Lower starting current is drawn from the grid, reducing stress on the electrical components.
    *   **Limited Power Regulation:** While it can influence output, it's not as precise or efficient as modern variable-speed control methods for large wind turbines.
*   **Limitations:**
    *   **Energy Loss:** The added resistance dissipates energy as heat, leading to lower efficiency, especially at higher speeds.
    *   **Mechanical Complexity:** Requires slip rings and brushes, which are prone to wear and maintenance issues.
    *   **Limited Speed Range:** Primarily suitable for constant or slightly variable speed applications.
*   **Relevance to Course Outcomes:**
    *   **CO1 (Need for Non-Conventional Sources):** Understanding generator technologies is part of the scope of renewable energy systems.
    *   **CO2 (Concepts and Technologies):** Explains a key technology in wind energy generation.

*   **Reference:** While this specific control method is less common in modern large-scale wind turbines, foundational principles of induction machines are discussed in general power electronics and electrical machinery texts. For instance, **Muhannad H. R.'s "Power Electronics: Circuits, Devices and Applications"** would cover the basics of induction motors, which are the foundation for SCIGs.

---

### 3. Squirrel Cage Induction Generator (SCIG)

The SCIG is the most common type of generator used in the early generations of wind turbines due to its robustness, simplicity, and cost-effectiveness.

*   **Construction:** Similar to a standard induction motor. It has a stator winding and a rotor consisting of conductive bars short-circuited by end rings, resembling a squirrel cage.
*   **Operation:**
    *   The stator is connected to the grid.
    *   The rotor is mechanically driven by the wind turbine rotor.
    *   As the rotor rotates faster than the synchronous speed (i.e., negative slip), it acts as a generator.
    *   Requires a source of reactive power from the grid or capacitor banks for excitation.
*   **Advantages:**
    *   **Robust and Simple Construction:** No need for brushes or slip rings, leading to lower maintenance.
    *   **Low Cost:** Generally cheaper to manufacture compared to other generator types.
    *   **Direct Grid Connection:** Can be directly connected to the grid, simplifying the power conversion system.
*   **Disadvantages:**
    *   **Fixed Speed Operation:** Typically operates at a relatively fixed speed determined by the grid frequency and number of poles. This limits energy capture in varying wind speeds.
    *   **Reactive Power Consumption:** Requires reactive power from the grid to magnetize the air gap, which can impact grid stability.
    *   **High Starting Current:** Draws a significant amount of current when starting up.
*   **Relevance to Course Outcomes:**
    *   **CO1 (Need for Non-Conventional Sources):** Demonstrates a key technology for harnessing wind energy.
    *   **CO2 (Concepts and Technologies):** Explains a fundamental wind turbine generator technology.
    *   **CO3 (Integration with Smart Grid):** SCIGs, especially in fixed-speed configurations, present challenges for smart grid integration due to their limited controllability.

*   **References:**
    *   **Nayak J. K. and Sukhatme S. P.'s "Solar Energy: Principles of Thermal Collection and Storage"** might briefly touch upon generator types if discussing energy conversion, but it's not their primary focus.
    *   **Ahmed F Zobaa and Ramesh Bansal's "Handbook of renewable energy technology"** is a highly relevant reference that would detail SCIGs extensively.
    *   **Ali Keyhani's "Design of Smart Power Grid Renewable Energy Systems"** would likely discuss the limitations of SCIGs in the context of smart grid integration and the need for more advanced solutions.

---

### 4. Doubly-Fed Induction Generator (DFIG)

The DFIG is the dominant generator technology in modern, large-scale variable-speed wind turbines, offering significant advantages in energy capture and grid integration.

*   **Construction:** Similar to a SCIG, but with a wound rotor that has slip rings, allowing electrical access to the rotor windings.
*   **Operation:**
    *   The stator is directly connected to the grid.
    *   The rotor is connected to the grid via a **back-to-back voltage source converter (VSC)**. This converter controls the voltage and frequency of the rotor circuit.
    *   By controlling the rotor current, the DFIG can operate at variable speeds around the synchronous speed.
    *   The VSC manages both real and reactive power output, allowing for grid support and enhanced power quality.
*   **Advantages:**
    *   **Variable Speed Operation:** Can adjust its speed to match wind conditions, significantly improving energy capture efficiency (known as "wind capture efficiency").
    *   **Reduced Mechanical Stress:** Variable speed operation allows for smoother operation and reduced fatigue on the turbine components.
    *   **Independent Control of Real and Reactive Power:** The VSC enables precise control over the output power and power factor, allowing for grid support services (e.g., voltage regulation).
    *   **Lower Starting Current:** Compared to SCIGs.
*   **Disadvantages:**
    *   **Higher Cost:** Due to the need for the power converter system and slip rings.
    *   **Increased Complexity:** The control system for the converter is more complex.
    *   **Maintenance of Slip Rings and Brushes:** Although less demanding than some other generator types, it still requires some maintenance.
*   **Relevance to Course Outcomes:**
    *   **CO1 (Need for Non-Conventional Sources):** Essential technology for efficient wind power generation.
    *   **CO2 (Concepts and Technologies):** A cornerstone of modern wind energy technology.
    *   **CO3 (Integration with Smart Grid):** DFIGs are highly compatible with smart grids due to their controllability, enabling them to provide grid services and respond to grid signals.
    *   **CO4 (Distribution Management System):** Understanding DFIG control is relevant for managing distributed renewable generation in a DMS.

*   **References:**
    *   **Teodorescu R. Liserre M. Rodriguez P.'s "Grid Converters for Photovoltaic and wind Power Systems"** is an excellent resource specifically covering the converter topologies and control strategies used with DFIGs and other grid-connected power electronic systems.
    *   **Nick Jenkins, Janaka Ekanayake [et al.]'s "Smart Grid Technology and Applications"** and **Ali Keyhani's "Design of Smart Power Grid Renewable Energy Systems"** would extensively discuss DFIGs in the context of smart grid integration and their capabilities for grid support.

---

### 5. Synchronous Generator - Externally Magnetized

This category refers to synchronous generators where the rotor magnetic field is created by an external DC excitation source, as opposed to permanent magnets.

*   **Construction:** Has a stator with windings connected to the grid and a rotor with field windings. The rotor's magnetic field is generated by a DC current supplied to these windings.
*   **Excitation Methods:**
    *   **Brush Excitation:** A DC exciter (e.g., a small DC generator) is mounted on the same shaft, and its output DC current is fed to the rotor field windings via slip rings and brushes.
    *   **Brushless Excitation:** A small AC exciter (often permanent magnet excited) is mounted on the shaft, and its output AC is rectified by diodes also mounted on the shaft, supplying DC to the rotor field windings without brushes. This is more common in modern synchronous generators.
*   **Operation:**
    *   The generator's speed is synchronized with the grid frequency.
    *   The DC excitation current determines the magnitude of the magnetic field and thus the generated voltage.
    *   By varying the excitation current, the generator's output voltage and reactive power can be controlled.
*   **Advantages:**
    *   **Excellent Voltage and Reactive Power Control:** Offers superior control over output voltage and can be used to inject or absorb reactive power from the grid.
    *   **High Efficiency:** Can achieve high efficiencies.
    *   **Robustness:** Generally robust in construction.
*   **Disadvantages:**
    *   **Requires DC Excitation:** Needs a dedicated excitation system, which adds complexity and cost.
    *   **Brush Maintenance (for brush-type excitation):** Brushes and slip rings require regular maintenance. Brushless systems mitigate this.
    *   **Typically Fixed Speed:** Traditionally used in fixed-speed applications, though variable-speed synchronous generators with power electronics are also prevalent.
*   **Relevance to Course Outcomes:**
    *   **CO1 (Need for Non-Conventional Sources):** A traditional generator type that can be used in wind turbines, especially older or specific designs.
    *   **CO2 (Concepts and Technologies):** Explains another fundamental generator technology.
    *   **CO3 (Integration with Smart Grid):** Their excellent reactive power control capabilities make them valuable for grid support in smart grid scenarios.

*   **References:**
    *   **Muhannad H. R.'s "Power Electronics: Circuits, Devices and Applications"** would cover the principles of synchronous machines and excitation systems.
    *   **Ahmed F Zobaa and Ramesh Bansal's "Handbook of renewable energy technology"** would likely detail the application of synchronous generators in renewable energy contexts.
    *   **Solar Energy: Fundamental and Application by Garg H. P. and Prakash S.** is less likely to focus on synchronous generators for wind, but might cover general electrical machine principles.

---

### 6. Comparison of Generator Technologies for Wind Turbines

| Feature           | SCIG (Squirrel Cage Induction Generator) | DFIG (Doubly-Fed Induction Generator) | Synchronous Generator (Externally Magnetized) |
| :---------------- | :--------------------------------------- | :------------------------------------ | :-------------------------------------------- |
| **Speed**         | Near-constant speed (fixed slip)         | Variable speed (around synchronous)   | Near-constant speed (synchronous)             |
| **Grid Connection** | Direct                                   | Via back-to-back converter            | Direct (typically)                            |
| **Power Control** | Limited                                  | Excellent (real & reactive)           | Good (voltage & reactive power)               |
| **Efficiency**    | Good (but fixed speed limits capture)    | Very good (variable speed optimized)  | Very good                                     |
| **Cost**          | Low                                      | High                                  | Medium to High                                |
| **Complexity**    | Low                                      | High                                  | Medium                                        |
| **Reactive Power**| Absorbs from grid                        | Can inject/absorb                     | Can inject/absorb                             |
| **Applications**  | Older, smaller turbines; fixed-speed     | Modern large variable-speed turbines  | Specific designs, grid stability applications |

---

### 7. Important Points to Remember

*   **DFIGs are dominant in modern wind turbines** due to their variable speed capability, leading to higher energy capture and better grid integration.
*   **SCIGs are simpler and cheaper** but offer limited performance in variable wind conditions.
*   **Synchronous generators with external magnetization excel in voltage and reactive power control**, making them valuable for grid stability.
*   **Rotor resistance control is an older method** for SCIGs, primarily for improving starting but less efficient for general operation.
*   **Variable speed operation is key to maximizing energy yield** from wind turbines in fluctuating wind speeds.
*   **Power electronics (converters) are crucial** for advanced control and grid integration of DFIGs and variable-speed synchronous generators.

---

### 8. Practice Questions and Exercises

**Q1. What is the primary advantage of a Doubly-Fed Induction Generator (DFIG) over a Squirrel Cage Induction Generator (SCIG) in modern wind turbines?**

*   **Answer:** The primary advantage of DFIGs is their ability to operate at variable speeds, which significantly improves energy capture efficiency in fluctuating wind conditions. SCIGs typically operate at near-constant speeds.

**Q2. Explain the role of the power converter in a DFIG system.**

*   **Answer:** The back-to-back voltage source converter (VSC) connects the DFIG's rotor to the grid. It controls the voltage and frequency of the rotor circuit, enabling variable speed operation and allowing for independent control of real and reactive power output.

**Q3. A wind turbine using a Squirrel Cage Induction Generator (SCIG) directly connected to the grid is experiencing low wind speeds. How would its energy capture efficiency be affected compared to a DFIG system?**

*   **Answer:** The SCIG, operating at a near-constant speed, will not be able to adjust its rotational speed to efficiently capture energy at low wind speeds. The DFIG, however, can slow down its rotor to match the wind speed more effectively, leading to higher energy capture efficiency in such conditions.

**Q4. Which type of generator is best suited for providing grid support services like voltage regulation due to its control over reactive power?**

*   **Answer:** Synchronous Generators (externally magnetized) and DFIGs are well-suited for providing grid support services due to their ability to control reactive power injection or absorption.

**Q5. Discuss the pros and cons of using rotor resistance control in SCIGs for wind turbines.**

*   **Answer:**
    *   **Pros:** Improves starting torque, reduces starting current.
    *   **Cons:** Leads to energy loss (reduced efficiency), adds mechanical complexity (slip rings/brushes), offers limited speed range control.

**Q6. Match the following generator types with their primary characteristics:**

    a) SCIG       i) High cost, variable speed, excellent grid support
    b) DFIG       ii) Low cost, fixed speed, simple construction
    c) Synchronous Generator (Externally Magnetized) iii) Excellent voltage/reactive power control, needs excitation system

*   **Answer:**
    *   a) SCIG - ii) Low cost, fixed speed, simple construction
    *   b) DFIG - i) High cost, variable speed, excellent grid support
    *   c) Synchronous Generator (Externally Magnetized) - iii) Excellent voltage/reactive power control, needs excitation system

---

### 9. Aligning with Course Outcomes:

*   **CO1: Explain the need, importance and scope of various Non-Conventional sources of energy (Knowledge Level: K2)**
    *   This module directly addresses the technologies (generators) that make wind energy a viable non-conventional source. Understanding these generators is crucial for appreciating their role and importance.
*   **CO2: Outline the concepts and technologies related to renewable energy systems using wind and Solar-PV (Knowledge Level: K2)**
    *   The notes provide a detailed outline of key wind turbine generator technologies (SCIG, DFIG, Synchronous) and their operational concepts, directly fulfilling this outcome.
*   **CO3: Illustrate the integration of smart grid with renewable energy systems (Knowledge Level: K3)**
    *   The discussion on DFIGs and Synchronous Generators highlights their controllability and ability to provide grid services, which are essential aspects of smart grid integration. The limitations of SCIGs in this context are also implicitly covered.
*   **CO4: Explain the concept of distribution management system. (Knowledge Level: K2)**
    *   While not directly about DMS, understanding the characteristics of distributed renewable energy sources like wind turbines (their variability, controllability, and grid interaction) is fundamental knowledge for managing them within a distribution network.

---

**Note:** While the provided textbooks cover broader aspects of renewable energy and power electronics, specific in-depth details on the comparison of these particular wind turbine generator types and control strategies would be found in more specialized literature on wind energy conversion systems and power systems. The handbook by Zobaa and Bansal and texts on grid converters by Teodorescu et al. are likely the most relevant references for detailed technical information on these generator types in a wind energy context.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
