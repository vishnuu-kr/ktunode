---
title: "governing of steam turbines-cogeneration and combined cycle power"
subject: "POWER PLANT ENGINEERING"
module: "Module 2: Steam generator classifications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463789"
status: "completed"
scrapedAt: "2026-05-20T18:06:30.738Z"
---
# POWER PLANT ENGINEERING - Module 2: Steam Generator Classifications
## Topic: Governing of Steam Turbines - Cogeneration and Combined Cycle Power

This module focuses on the classification of steam generators, and within this context, we will delve into the governing of steam turbines, particularly as it relates to cogeneration and combined cycle power plants. Understanding turbine governing is crucial for maintaining stable operation, optimizing efficiency, and ensuring proper load sharing in these complex power generation systems.

**Learning Outcomes Addressed:**
*   Explain the layout, components and working of steam, gas, hydro, and nuclear power plants. (CO1)
*   Calculate the performance parameters of simple and modified Rankine cycles. (CO2)
*   Calculate the performance parameters of steam turbines and steam nozzles. (CO3)

---

### 1. Introduction to Steam Turbine Governing

Governing of a steam turbine refers to the process of controlling the steam flow rate to the turbine to maintain a desired speed or power output under varying load conditions. This is essential for:

*   **Maintaining Constant Speed:** Especially important for generating electricity at a fixed frequency (e.g., 50 Hz or 60 Hz).
*   **Responding to Load Changes:** Adjusting steam input to meet fluctuating power demands from the grid or process.
*   **Protecting the Turbine:** Preventing overspeeding during sudden load shedding.
*   **Optimizing Efficiency:** Ensuring the turbine operates at its most efficient point.

**Key Concept:** **Governor:** A device that automatically adjusts the steam flow to the turbine in response to changes in speed or load.

---

### 2. Governing Mechanisms in Steam Turbines

Various methods are employed for governing steam turbines. The choice depends on the turbine type, size, and application.

#### 2.1 Throttle Governing

This is the most common and simplest method for smaller turbines.

*   **Mechanism:** A control valve (throttle valve) is placed in the steam inlet line to the turbine. The governor controls the opening of this valve.
    *   **Increased Load:** Governor opens the throttle valve, increasing steam flow, thus increasing power output.
    *   **Decreased Load:** Governor closes the throttle valve, reducing steam flow, thus decreasing power output.
*   **Working:** The governor senses speed changes. If the speed drops below the set point (due to increased load), the governor acts to open the throttle valve. If the speed rises above the set point (due to decreased load), it closes the valve.
*   **Efficiency Impact:** Throttle governing is less efficient at part loads. As the throttle valve is partially closed, there is a significant pressure drop across the valve, leading to throttling losses. This means the steam entering the first stage is at a lower pressure and temperature than it would be if a higher pressure steam was admitted directly.
*   **Textbook Reference:** El Wakil, M. M. (2017), "Power Plant Technology," discusses throttle governing as a fundamental method for controlling turbine speed and power. Nag, P. K. (2017), "Power Plant Engineering," also details the principles and limitations of throttle governing.

**Example:** A small industrial steam turbine driving a pump might use throttle governing.

---

#### 2.2 Nozzle Governing (or Valve Governing)

This method is more efficient than throttle governing, especially at part loads, as it avoids excessive throttling losses.

*   **Mechanism:** Instead of a single throttle valve controlling all steam flow, multiple nozzles (or steam chests, each with its own valve) are used to supply steam to different sections of the turbine's first stage. The governor controls the opening of these individual valves sequentially.
*   **Working:**
    *   At full load, all valves are open, admitting steam to all nozzles.
    *   As the load decreases, the governor closes the valve to one set of nozzles, bypassing steam to the next set.
    *   This process continues with decreasing load, utilizing steam only in the active nozzles.
*   **Efficiency Advantage:** By shutting off steam to entire nozzle groups, the pressure drop across the admission valve is minimized for the steam entering the turbine, thus reducing throttling losses and improving part-load efficiency.
*   **Textbook Reference:** Nag, P. K. (2017) and El Wakil, M. M. (2017) elaborate on nozzle governing as an improvement over throttle governing, especially for maintaining efficiency.

**Example:** Medium-sized industrial turbines or turbines in process plants often employ nozzle governing.

---

#### 2.3 Governing by Steam Chest Pressure Control

In this method, the steam chest pressure ahead of the control valve is varied.

*   **Mechanism:** A back-pressure regulating valve is used to control the pressure in the steam chest. The governor actuates this back-pressure valve.
*   **Working:**
    *   **Increased Load:** The governor signals to increase the steam flow. This is achieved by opening the back-pressure valve, which reduces the steam chest pressure, allowing more steam to flow from the boiler and through the admission valve into the turbine.
    *   **Decreased Load:** The governor signals to decrease steam flow. The back-pressure valve is adjusted to increase the steam chest pressure, restricting the flow of steam into the turbine.
*   **Advantages:** Can provide smoother control and better response compared to simple throttle governing.
*   **Textbook Reference:** While less common in introductory texts, advanced discussions in references like Nagpal and Sharma (2012) might touch upon variations in governing methods.

---

#### 2.4 Governing by Variable Inlet Guide Vanes (for impulse turbines)

This method is commonly used in smaller steam turbines and is analogous to governing in gas turbines.

*   **Mechanism:** Instead of valves, adjustable guide vanes are used to control the steam flow rate and velocity entering the first stage.
*   **Working:**
    *   **Increased Load:** The guide vanes are opened to allow more steam to enter the turbine.
    *   **Decreased Load:** The guide vanes are closed, restricting steam flow.
*   **Advantages:** Offers good efficiency at part loads and provides quick response.
*   **Textbook Reference:** El Wakil, M. M. (2017) might discuss this method in the context of specific turbine types or advanced governing strategies.

---

### 3. Governing in Cogeneration Power Plants

Cogeneration (also known as Combined Heat and Power - CHP) plants produce both electricity and useful thermal energy (e.g., steam for industrial processes or heating). Governing in these plants is more complex as it needs to satisfy both electrical load demand and thermal energy requirements.

#### 3.1 Types of Extraction/Back-Pressure Turbines Used in Cogeneration

*   **Extraction Turbines:** Steam is extracted at one or more stages of the turbine for process use, while the remaining steam expands to the condenser.
*   **Back-Pressure Turbines:** All steam that enters the turbine is exhausted at a higher pressure to a process or heating system, and there is no condenser.

#### 3.2 Governing Requirements for Cogeneration

*   **Electrical Load Governing:** Maintaining a constant electrical output or responding to grid demand.
*   **Process Steam Governing:** Ensuring a stable supply of steam at the required pressure and flow rate for industrial processes.
*   **Coordination:** Balancing the electrical and thermal demands.

#### 3.3 Governing Systems for Cogeneration

Multi-point governing systems are often employed to handle the dual requirements. These systems typically involve:

*   **Speed/Electrical Load Governor:** Controls the main steam inlet valve (throttle or nozzle governing) to maintain the desired electrical output.
*   **Extraction/Back-Pressure Governor:** Controls the pressure at the extraction port or the exhaust pressure (for back-pressure turbines) by adjusting the steam flow through extraction control valves or by influencing the main inlet valve.

**Example:** In a sugar mill cogeneration plant, the turbine might extract steam at a specific pressure for the sugar refining process. The electrical load governor maintains the generator's output, while the extraction governor ensures the process steam pressure remains constant, even if the electrical load fluctuates.

**Key Concept:** **Dual Governing:** Simultaneously controlling electrical output and process steam parameters.

**Textbook Reference:** Nag, P. K. (2017) and El Wakil, M. M. (2017) provide detailed explanations of cogeneration cycles and the governing challenges associated with them. Gupta, M. K. (2012) also covers the operation of industrial power plants with cogeneration.

---

### 4. Governing in Combined Cycle Power Plants (CCPPs)

CCPPs utilize both a gas turbine and a steam turbine. The exhaust heat from the gas turbine is used to generate steam in a Heat Recovery Steam Generator (HRSG), which then drives the steam turbine. Governing in CCPPs involves coordinating the operation of both turbines.

#### 4.1 Components of a CCPP

*   **Gas Turbine:** Generates electricity directly and produces hot exhaust gases.
*   **Heat Recovery Steam Generator (HRSG):** Recovers heat from the gas turbine exhaust to produce steam.
*   **Steam Turbine:** Driven by the steam from the HRSG to generate additional electricity.
*   **Generator:** Coupled to both gas and steam turbines.

#### 4.2 Governing Challenges in CCPPs

*   **Variable Steam Conditions:** The steam conditions (pressure, temperature, flow rate) from the HRSG are dependent on the gas turbine exhaust gas flow and temperature, which can vary with ambient conditions and gas turbine load.
*   **Load Sharing:** Determining how much load each turbine should carry to meet the overall demand efficiently.
*   **Ramping Rates:** The ability to quickly increase or decrease the total power output of the plant.
*   **Start-up and Shut-down:** Complex procedures for synchronizing and bringing both turbines online and offline.

#### 4.3 Governing Strategies for CCPPs

CCPPs typically employ advanced digital control systems for sophisticated governing. Key aspects include:

*   **Gas Turbine Load Control:** The primary control is usually on the gas turbine, as it's the heat source. The gas turbine governor maintains its speed and power output.
*   **HRSG Control:** The HRSG's combustion control (if supplementary firing is used) and steam drum level control are critical for maintaining stable steam supply to the steam turbine.
*   **Steam Turbine Governing:**
    *   **Throttle Governing:** Used for the steam turbine to control its speed and power output based on the steam available from the HRSG.
    *   **Load Following:** The steam turbine governor is often linked to the gas turbine governor to ensure coordinated operation and efficient load sharing. As the gas turbine load changes, the steam turbine adjusts its output accordingly.
    *   **Flexibility:** Modern CCPPs are designed for flexibility. They can operate in "red" (gas turbine only), "blue" (steam turbine only with supplementary firing), or "white" (combined cycle) modes. Governing systems must manage transitions between these modes.
*   **Grid Demand Integration:** The overall plant control system responds to the grid demand, allocating load between the gas and steam turbines based on efficiency considerations and operational constraints.

**Example:** In a CCPP, if there's a sudden increase in electricity demand, the gas turbine's fuel flow is increased. This leads to higher exhaust gas temperatures and flow, producing more steam in the HRSG. The steam turbine's governor then increases steam admission to meet the additional load, contributing to the overall power increase.

**Textbook Reference:** El Wakil, M. M. (2017) and Nag, P. K. (2017) provide comprehensive overviews of combined cycle power plants and the integrated control systems. Nagpal and Sharma (2012) also discuss the operational aspects and control of CCPPs.

---

### 5. Performance Calculations Related to Turbine Governing

While this topic is primarily about governing mechanisms and applications, understanding the impact on performance is crucial.

#### 5.1 Efficiency Calculations

*   **Throttle Governing:** Part-load efficiency is significantly reduced due to throttling losses.
    *   Efficiency decreases as the degree of throttling increases.
*   **Nozzle Governing:** Part-load efficiency is better maintained than throttle governing because steam bypasses inactive nozzles, minimizing pressure drops.
*   **Cogeneration:** Overall plant efficiency is typically higher than separate generation of heat and power. Governing impacts the efficiency of both electrical and thermal energy production.
*   **Combined Cycles:** The overall efficiency of a CCPP is significantly higher than a simple cycle gas turbine or steam turbine plant. Load sharing and efficient coordination of the two cycles by their governing systems are key to maximizing this advantage.

#### 5.2 Power Output Calculations

The power output of the turbine is directly related to the steam flow rate and the enthalpy drop across the turbine stages. Governing directly influences the steam flow rate.

*   **Power (P) = Mass flow rate of steam ($\dot{m}$) × Specific enthalpy drop across turbine ($\Delta h$) × Turbine isentropic efficiency ($\eta_t$)**

**CO3 Alignment:** Understanding how governing (which controls $\dot{m}$) affects the turbine's power output is a direct application of CO3.

---

### 6. Important Points to Remember

*   **Purpose of Governing:** To maintain stable speed, meet load demands, and protect the turbine.
*   **Throttle Governing:** Simple but inefficient at part loads due to throttling losses.
*   **Nozzle Governing:** More efficient at part loads by bypassing steam to specific nozzle groups.
*   **Cogeneration:** Requires dual governing for both electrical output and process steam parameters.
*   **Combined Cycles:** Involve coordinated governing of gas and steam turbines, with HRSG control playing a vital role. Advanced digital control systems are essential.
*   **Efficiency Impact:** Governing mechanisms significantly influence turbine and plant efficiency, especially at part loads.
*   **Control Systems:** Modern plants rely heavily on sophisticated electronic and digital control systems for precise and integrated governing.

---

### 7. Practice Questions and Answers

**Question 1:** Briefly explain the difference between throttle governing and nozzle governing, highlighting the efficiency implications at part load.

**Answer:**
*   **Throttle Governing:** Controls steam flow by partially closing a single throttle valve at the turbine inlet. This causes a significant pressure drop across the valve, leading to throttling losses and reduced part-load efficiency.
*   **Nozzle Governing:** Controls steam flow by sequentially admitting steam to different groups of nozzles via individual valves. This bypasses steam to specific nozzles, minimizing pressure drops and thus improving part-load efficiency compared to throttle governing.

**Question 2:** What are the primary governing challenges in a cogeneration power plant?

**Answer:** The primary governing challenges in a cogeneration plant are:
1.  **Electrical Load Governing:** Maintaining a constant or variable electrical output as per grid demand.
2.  **Process Steam Governing:** Ensuring a stable supply of steam at the required pressure and flow rate for industrial processes.
3.  **Coordination:** Balancing the demands of both electrical power generation and thermal energy utilization.

**Question 3:** In a combined cycle power plant, how does the governing of the steam turbine relate to the operation of the gas turbine and the HRSG?

**Answer:** In a CCPP, the steam turbine governing is integrated with the gas turbine and HRSG control. The gas turbine is the primary driver. Its exhaust heat is used by the HRSG to generate steam. The steam turbine's governor controls the steam admission to maintain its speed and power output, but this control is secondary to the steam availability from the HRSG. The HRSG's steam generation is directly dependent on the gas turbine's exhaust conditions. Therefore, the steam turbine's governing essentially "follows" the steam conditions provided by the HRSG, which in turn are dictated by the gas turbine's load. Advanced control systems coordinate these elements to optimize overall plant performance based on grid demand and efficiency.

**Question 4:** A steam turbine operates with a mass flow rate of 50 kg/s. The enthalpy drop across the turbine is 600 kJ/kg, and its isentropic efficiency is 88%. Calculate the power output of the turbine.

**Answer:**
*   Power ($P$) = $\dot{m} \times \Delta h \times \eta_t$
*   $P = 50 \text{ kg/s} \times 600 \times 10^3 \text{ J/kg} \times 0.88$
*   $P = 26,400 \times 10^3 \text{ J/s}$
*   $P = 26.4 \times 10^6 \text{ Watts}$
*   $P = 26.4 \text{ MW}$

**Question 5:** Which governing method is generally considered more efficient at part loads and why?

**Answer:** Nozzle governing is generally considered more efficient at part loads than throttle governing. This is because nozzle governing avoids the significant throttling losses that occur when a single throttle valve is partially closed, by instead shutting off steam to entire nozzle groups.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
