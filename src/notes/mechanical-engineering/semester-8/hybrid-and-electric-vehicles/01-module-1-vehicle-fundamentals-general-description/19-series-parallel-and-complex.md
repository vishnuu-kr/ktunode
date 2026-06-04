---
title: "series-parallel and complex"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 1: Vehicle fundamentals – general description"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446442e"
status: "completed"
scrapedAt: "2026-05-20T18:20:39.010Z"
---
# HYBRID AND ELECTRIC VEHICLES

## Module 1: Vehicle Fundamentals – General Description

### Topic: Series-Parallel and Complex Hybrid Architectures

---

### 1. Introduction to Hybrid Vehicle Architectures

Hybrid Electric Vehicles (HEVs) combine an internal combustion engine (ICE) with an electric motor to improve fuel efficiency and reduce emissions. The way these two power sources are integrated defines the vehicle's architecture. This topic focuses on the more complex configurations beyond simple series or parallel systems.

**Key Concepts:**

*   **Hybrid Powertrain:** A system that utilizes more than one form of energy or propulsion.
*   **Power Split Device:** A mechanical component that distributes power from different sources to the wheels.
*   **Clutch:** Used for engaging/disengaging components in the powertrain.
*   **Gearbox:** Provides mechanical advantage for the ICE and/or electric motor.

**Course Outcome Alignment:**

*   **CO1 (K2):** Explain the general architecture of Electric vehicles. (Understanding different HEV architectures contributes to this).
*   **CO4 (K3):** Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement. (Understanding power flow in complex architectures is crucial here).

**Textbook References:**

*   Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals*. (Chapter on Hybrid Architectures)
*   Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design*. (Chapter on Hybrid Powertrain Configurations)
*   Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained*. (Chapter on Hybrid Vehicle Architectures)

---

### 2. Series-Parallel Hybrid Architecture (Power-Split Architecture)

This architecture is the most sophisticated and flexible, allowing for seamless blending of power from the ICE and electric motor(s). It typically uses a **power split device**, often a planetary gearset, to combine and distribute power.

**Key Concepts:**

*   **Planetary Gearset:** A complex gear mechanism consisting of a sun gear, planet gears (mounted on a carrier), and a ring gear. This allows for multiple input and output speeds and torques.
*   **Mode of Operation:** The ability to operate in pure electric mode, pure ICE mode, series hybrid mode, parallel hybrid mode, or a combination thereof.
*   **Power Flow Control:** Sophisticated control strategies are required to manage the power distribution from the ICE, electric motor, and battery to the wheels and generator.

**General Description of a Series-Parallel Hybrid:**

In a typical series-parallel configuration (e.g., Toyota Prius), the ICE is connected to a generator and the drive wheels via a planetary gearset. An electric motor is also connected to the planetary gearset, and a second electric motor (or the same motor in a different configuration) can be used for driving or regeneration.

**How it Works:**

1.  **Electric Only Drive:** The electric motor drives the wheels directly. The ICE can be off or idling, or its output can be used to charge the battery.
2.  **ICE Drive:** The ICE powers the wheels. The electric motor can assist, drive, or be used for regenerative braking.
3.  **Series Hybrid Mode:** The ICE drives a generator, which produces electricity. This electricity can power the electric motor driving the wheels or charge the battery. The ICE is not directly connected to the wheels.
4.  **Parallel Hybrid Mode:** Both the ICE and the electric motor directly drive the wheels, either independently or together.
5.  **Power-Split Mode:** The planetary gearset allows the ICE's power to be split. A portion goes to the wheels, and another portion goes to the generator to charge the battery or power the electric motor.

**Example:**

*   **Toyota Prius:** The most famous example. It uses an electronically controlled continuously variable transmission (e-CVT) based on a planetary gearset. This allows for flexible power splitting between the ICE, generator, and drive motor.

**Advantages:**

*   **High Fuel Efficiency:** Can operate in optimal modes for various driving conditions.
*   **Flexibility:** Offers the benefits of both series and parallel architectures.
*   **Smooth Operation:** e-CVT provides seamless transitions between power sources.
*   **Effective Regenerative Braking:** Can capture significant energy during deceleration.

**Disadvantages:**

*   **Complexity:** The power split device and control system are complex and expensive.
*   **Weight:** Additional components add weight to the vehicle.

**Textbook References:**

*   Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals*. (Discusses power-split devices and their control)
*   Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design*. (Detailed analysis of power-split architectures and planetary gearset functionality)
*   Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained*. (Explains the operating principles of series-parallel hybrids)

---

### 3. Complex Hybrid Architectures

Beyond the fundamental series-parallel, there are further variations and more complex configurations, often involving multiple electric motors and more intricate power flow management. These aim to further optimize efficiency, performance, or packaging.

**Key Concepts:**

*   **Multi-Mode Hybrid:** Systems that can operate in a wider range of distinct modes, often with multiple planetary gearsets or electric motors.
*   **Electric Variable Transmission (EVT):** Similar to e-CVT, but often emphasizing the electric drive capabilities more explicitly.
*   **Dual-Motor Systems:** Using two electric motors for improved torque vectoring, regeneration, and independent control.

**Types of Complex Architectures:**

*   **Through-the-Road (TTR) Hybrids:**
    *   **Description:** One axle is driven by the ICE, and the other by an electric motor. They are not mechanically connected at the transmission. The ICE can also be used to charge the battery of the electric axle.
    *   **Example:** Volvo V60 Plug-in Hybrid (older models).
    *   **Advantages:** Simpler mechanical integration, can be retrofitted to existing FWD/RWD platforms.
    *   **Disadvantages:** Less efficient power blending compared to integrated systems, potential for torque steer if not controlled well.

*   **Electric Drive with ICE Generator (Extended Range Electric Vehicle - EREV):**
    *   **Description:** The ICE's primary role is to drive a generator, which charges the battery or directly powers an electric motor that drives the wheels. The ICE is decoupled from the wheels. The vehicle operates predominantly as an electric vehicle.
    *   **Example:** Chevrolet Volt (first generation).
    *   **Advantages:** Excellent NVH (Noise, Vibration, Harshness) characteristics as the ICE can operate at its most efficient speed, high electric driving range.
    *   **Disadvantages:** Less efficient than a direct-drive parallel hybrid when the ICE is actively powering the wheels (energy conversion losses).

*   **Multiple Electric Motors:**
    *   **Description:** Vehicles using two or more electric motors. This can be for redundancy, enhanced torque vectoring, or to create more sophisticated power-split configurations.
    *   **Example:** Some AWD hybrid systems use electric motors on each axle, or even two motors on one axle for advanced traction control.
    *   **Advantages:** Improved traction and stability control, potential for higher performance and efficiency through precise torque distribution.
    *   **Disadvantages:** Increased cost and complexity of motors and control systems.

**Textbook References:**

*   Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design*. (Covers EREV, TTR, and multi-motor configurations)
*   Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained*. (May touch upon variations in hybrid system design)

---

### 4. Power Flow and Control Strategies

The complexity of series-parallel and complex hybrid architectures necessitates sophisticated control systems to manage the interaction between the ICE, electric motors, battery, and power split devices.

**Key Concepts:**

*   **Control Unit:** The electronic brain that dictates power flow.
*   **Operating Modes:** The control system selects the most efficient or appropriate mode based on driver input, battery state of charge (SoC), vehicle speed, and other parameters.
*   **Optimization Algorithms:** Algorithms that determine the optimal balance of power from different sources to maximize fuel economy and minimize emissions.

**Control Strategies:**

*   **Charge-Sustaining:** The system aims to maintain the battery's state of charge within a defined range, using the ICE to charge the battery when it's low or using regenerative braking to replenish it.
*   **Charge-Depleting:** The system primarily uses battery power, with the ICE acting as a generator to extend the range. This is common in Plug-in Hybrid Electric Vehicles (PHEVs).
*   **Power Blending:** Continuously adjusting the contribution of the ICE and electric motor(s) to meet the power demand at the wheels.
*   **Regenerative Braking Control:** Maximizing the recovery of kinetic energy during deceleration, often prioritizing electric motor regeneration before blending in friction brakes.

**Important Considerations for Control:**

*   **Battery State of Charge (SoC):** Critical for determining when to activate the ICE as a generator.
*   **Driver Demand:** Throttle position and brake pedal input.
*   **Vehicle Speed and Load:** Affects the efficiency of both ICE and electric motors.
*   **Emissions Targets:** Control strategies can be tuned to meet specific emission standards.

**Textbook References:**

*   Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals*. (Focuses on control aspects of HEV powertrains)
*   Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design*. (Provides in-depth coverage of control strategies for various hybrid architectures)
*   Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained*. (Discusses basic control principles for hybrid systems)

---

### 5. Important Points to Remember

*   **Series-Parallel hybrids (Power-Split)** offer the highest flexibility and efficiency due to the power split device (typically a planetary gearset).
*   **Complex architectures** (e.g., TTR, EREV) are variations that optimize specific aspects like integration, NVH, or driving feel, often at the cost of some efficiency in certain operating points.
*   **Planetary gearsets** are crucial mechanical components enabling the unique functionality of power-split hybrids.
*   **Sophisticated control systems** are essential for managing power flow and optimizing the operation of these complex powertrains.
*   **The goal of hybrid architectures** is to leverage the strengths of both ICEs and electric motors to improve fuel economy and reduce emissions across a wide range of driving conditions.

---

### 6. Practice Questions and Exercises

**Question 1 (CO1, K2):**
Describe the fundamental difference between a series hybrid and a parallel hybrid.

**Answer 1:**
In a **series hybrid**, the Internal Combustion Engine (ICE) is used solely to generate electricity, which then powers an electric motor that drives the wheels. The ICE is not mechanically connected to the wheels. In a **parallel hybrid**, both the ICE and the electric motor can independently or simultaneously provide power to the wheels.

---

**Question 2 (CO4, K3):**
Explain how a planetary gearset contributes to the operation of a series-parallel hybrid vehicle.

**Answer 2:**
A planetary gearset is a key component in series-parallel (power-split) hybrids. It acts as a mechanical power splitter. By having its sun gear, planet carrier, and ring gear connected to the ICE, generator, and electric motor (or wheels) in different configurations, it allows for:
*   **Combining power:** Power from the ICE and electric motor can be blended at the gearset.
*   **Splitting power:** The ICE's output can be split between driving the wheels and driving the generator.
*   **Variable gear ratios:** It allows for continuously variable transmission (CVT) functionality, enabling the ICE to operate at its most efficient speed regardless of vehicle speed.

---

**Question 3 (CO1, K2):**
What is the primary function of the ICE in an Extended Range Electric Vehicle (EREV)?

**Answer 3:**
In an EREV, the primary function of the ICE is to act as an **onboard generator** to produce electricity. This electricity is used to charge the battery or directly power the electric motor that drives the wheels. The ICE is generally decoupled from the wheels, meaning it does not directly contribute mechanical torque to the drivetrain.

---

**Question 4 (CO4, K3):**
A vehicle designer is considering a series-parallel hybrid architecture for a new passenger car. What are the key advantages and disadvantages they would need to consider compared to a simpler parallel hybrid system?

**Answer 4:**

**Advantages of Series-Parallel Hybrid:**
*   **Higher Fuel Efficiency:** Can operate in more optimized modes for various driving conditions by effectively blending power and operating the ICE at its peak efficiency.
*   **Greater Flexibility:** Can operate in pure electric, series, parallel, or blended modes.
*   **Improved Regenerative Braking:** Can capture more energy through the electric motor(s) and potentially the ICE in certain configurations.
*   **Smoother Operation:** Often uses an e-CVT (electronically controlled Continuously Variable Transmission) for seamless power transitions.

**Disadvantages of Series-Parallel Hybrid:**
*   **Increased Complexity:** Requires a power split device (like a planetary gearset), more motors, and a sophisticated control system.
*   **Higher Cost:** More components and complex engineering lead to higher manufacturing costs.
*   **Increased Weight:** Additional components add to the overall vehicle weight.
*   **Control System Challenges:** Developing and calibrating the control unit for optimal performance across all modes is complex.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. Further Reading / Study Guidance

*   **Focus on Diagrams:** Pay close attention to the schematic diagrams in the textbooks illustrating the power flow in different hybrid architectures. Understanding these diagrams is crucial.
*   **Understand the Role of the Planetary Gearset:** For series-parallel systems, deeply understanding how the planetary gearset works and how its components can be driven by different sources is fundamental.
*   **Control Strategy Logic:** While this module focuses on architecture, be aware that the control strategy is what makes these complex systems work effectively.
*   **Examples are Key:** Relate the theoretical architectures to real-world examples like the Toyota Prius or Chevrolet Volt to solidify understanding.

---