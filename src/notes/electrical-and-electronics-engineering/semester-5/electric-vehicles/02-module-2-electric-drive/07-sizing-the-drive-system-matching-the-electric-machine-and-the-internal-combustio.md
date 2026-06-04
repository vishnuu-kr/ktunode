---
title: "Sizing the drive system : Matching the electric machine and the Internal Combustion Engine (ICE) "
subject: "ELECTRIC VEHICLES"
module: "Module 2: Electric Drive"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362a7"
status: "completed"
scrapedAt: "2026-05-23T16:21:34.975Z"
---
# ELECTRIC VEHICLES - Module 2: Electric Drive

## Topic: Sizing the Drive System: Matching the Electric Machine and the Internal Combustion Engine (ICE)

**Course Outcomes Addressed:** CO1 (K2), CO2 (K3), CO3 (K3)

**Learning Outcomes:**

*   Understand the fundamental principles of sizing electric machines and ICEs for EV applications.
*   Analyze the factors influencing the selection of electric machine and ICE ratings.
*   Discuss the role of matching the electric machine and ICE for optimal performance and efficiency.
*   Explore different drive train topologies and their impact on sizing requirements.
*   Identify key parameters for drive system sizing, including torque, power, speed, and duty cycles.

---

### 1. Introduction to Drive System Sizing for Electric Vehicles

The successful design of an electric vehicle (EV) hinges on the appropriate sizing of its propulsion system. This involves selecting electric machines (motors), internal combustion engines (ICEs – for hybrid vehicles), batteries, power electronics, and other auxiliary components. This topic focuses on the crucial aspect of **matching the electric machine and the Internal Combustion Engine (ICE)** in the context of hybrid electric vehicles (HEVs). While pure EVs primarily focus on electric machine sizing, understanding HEV drive train sizing provides valuable insights into the interaction and optimization of different power sources.

**Key Concepts:**

*   **Propulsion System:** The collection of components that generate and transmit power to move the vehicle.
*   **Drive Train Topology:** The arrangement of the electric motor, ICE, transmission, and power split devices.
*   **Vehicle Performance Requirements:** Factors like acceleration, top speed, gradability, and driving range that dictate the required power and torque.
*   **Efficiency and Fuel Economy:** Optimizing the operation of both the electric machine and ICE to minimize energy consumption.
*   **Cost and Packaging:** Practical constraints that influence component selection and system design.

**Important Points to Remember:**

*   Sizing is an iterative process that involves balancing various performance, efficiency, and cost objectives.
*   The interaction and complementarity of the electric machine and ICE are critical for HEV efficiency and performance.

---

### 2. Vehicle Performance Requirements and Load Analysis

Before sizing any component, it's essential to define the vehicle's performance requirements and understand the typical load demands.

**Key Concepts:**

*   **Tractive Effort:** The force exerted by the vehicle's wheels on the road to overcome resistive forces.
    *   **Resistive Forces:**
        *   **Aerodynamic Drag ($F_D$):** Proportional to the square of velocity. $F_D = 0.5 \times \rho \times C_D \times A \times v^2$
        *   **Rolling Resistance ($F_R$):** Relatively constant with speed but dependent on tire pressure, road surface, and vehicle load. $F_R = C_{rr} \times m \times g$ (where $C_{rr}$ is the coefficient of rolling resistance)
        *   **Gradient Resistance ($F_G$):** The force needed to climb an incline. $F_G = m \times g \times \sin(\theta)$
        *   **Inertial Resistance ($F_I$):** The force required to accelerate the vehicle. $F_I = m_{eff} \times a$ (where $m_{eff}$ is the effective mass, including rotating components).
*   **Maximum Tractive Effort:** Determines the vehicle's acceleration capability and gradability.
*   **Maximum Power:** Determines the vehicle's top speed and rate of acceleration at higher speeds.
*   **Duty Cycle:** The pattern of acceleration, cruising, braking, and idling that a vehicle experiences during typical operation. This is crucial for component thermal management and efficiency analysis.

**Example:**

Consider a passenger car with a target acceleration of 0-60 mph (0-26.8 m/s) in 8 seconds. This requires a certain tractive effort, which translates to power at the wheels. The power required at the wheels is given by $P_{wheel} = \text{Tractive Effort} \times \text{Velocity}$.

**Reference (Chau, 2015):** Chapter 3 of "Electric Vehicles Machines and Drives" by K. T. Chau discusses vehicle dynamics and tractive effort calculations in detail, providing the foundation for understanding load analysis.

---

### 3. Electric Machine Sizing

The electric machine (motor) is the primary propulsor in EVs and a significant contributor in HEVs. Its sizing is dictated by the required torque and speed profiles.

**Key Concepts:**

*   **Torque-Speed Characteristics:** The operational envelope of the electric motor, defining the torque it can deliver at various speeds.
    *   **Constant Torque Region:** The motor can deliver a constant maximum torque from standstill up to a certain base speed. This is crucial for low-speed acceleration and overcoming static friction.
    *   **Constant Power Region:** Beyond the base speed, the motor can deliver power at a decreasing torque until its maximum speed is reached. This is important for high-speed performance.
*   **Peak Torque and Power:** The maximum torque and power the motor can deliver for short durations (e.g., during acceleration).
*   **Continuous Torque and Power:** The torque and power the motor can deliver continuously without overheating.
*   **Rated Torque and Power:** The nominal operating torque and power of the motor, typically corresponding to its continuous capability.
*   **Efficiency Map:** A graph showing the motor's efficiency at different torque and speed combinations.
*   **Types of Electric Machines:**
    *   **Permanent Magnet Synchronous Machines (PMSM):** High efficiency, high power density, excellent torque control.
    *   **Induction Machines (IM):** Robust, cost-effective, good performance at higher speeds.
    *   **Brushless DC (BLDC) Motors:** Simple control, good efficiency at lower speeds.

**Sizing Procedure:**

1.  **Determine Required Torque Profile:** Based on vehicle acceleration, gradability, and other performance targets.
2.  **Determine Required Speed Profile:** Based on the intended operating speed range of the vehicle.
3.  **Select Motor Type:** Based on efficiency, power density, cost, and control requirements.
4.  **Map Vehicle Requirements onto Motor Characteristics:** Ensure the chosen motor can meet the peak and continuous torque/speed demands.
5.  **Consider Efficiency:** Select a motor that operates efficiently within the typical duty cycle.
6.  **Thermal Management:** Ensure the motor can dissipate heat generated during operation, especially under continuous high loads.

**Example:**

An electric SUV needs to accelerate rapidly. This requires high instantaneous torque from the motor at low speeds. The motor must also be capable of delivering sufficient power to achieve the desired top speed. A PMSM might be chosen for its high torque density and efficiency across a wide speed range.

**Reference (Krishnan, 2011):** R. Krishnan's "Permanent Magnet Synchronous and Brushless DC Motors Drives" provides in-depth coverage of PMSM and BLDC motor characteristics, design considerations, and control strategies relevant to EV applications.

---

### 4. Internal Combustion Engine (ICE) Sizing (for HEVs)

In HEVs, the ICE is often downsized compared to conventional vehicles and works in conjunction with the electric machine. Its sizing is influenced by the powertrain architecture and the role it plays (e.g., primary power source, generator, or range extender).

**Key Concepts:**

*   **Downsizing:** Using a smaller ICE than would be required for a conventional vehicle.
*   **Operating Point Optimization:** HEV control strategies aim to operate the ICE at its most efficient points.
*   **Peak vs. Average Power Demand:** The ICE is typically sized to meet the average or a significant portion of the power demand, while the electric machine handles peak loads and low-speed operation.
*   **ICE Types:**
    *   **Naturally Aspirated:** Simpler, lower cost, but less efficient at part load.
    *   **Turbocharged/Supercharged:** Improved power density and efficiency at part load, but more complex.
    *   **Atkinson Cycle/Miller Cycle:** Optimized for thermal efficiency, often used in hybrid powertrains.
*   **Engine Mapping:** Understanding the ICE's fuel consumption and emissions at various torque and speed operating points.

**Sizing Considerations for HEVs:**

*   **Hybrid Architecture:**
    *   **Series Hybrid:** ICE acts as a generator, directly charging the battery or powering the electric motor. The ICE can be sized for optimal generator operation, often at its most efficient speed.
    *   **Parallel Hybrid:** ICE and electric motor can drive the wheels independently or together. ICE sizing is more critical for overall vehicle performance and fuel economy.
    *   **Series-Parallel (Power-Split) Hybrid:** Offers flexibility in power flow. ICE sizing can be optimized for a range of operating conditions.
*   **Power Split Device (e.g., Planetary Gearset):** The sizing and characteristics of the power split device influence how the ICE and electric motor power are combined.
*   **Battery Capacity:** The battery's ability to store and deliver energy impacts how much the ICE needs to contribute.

**Example:**

In a parallel hybrid, the ICE might be sized to provide 70-80% of the peak power required for comfortable cruising and moderate acceleration. The electric motor then provides the remaining power, especially during high-demand acceleration and regenerative braking. An Atkinson cycle engine might be chosen for its inherent fuel efficiency.

**Reference (Miller, 2010):** John M. Miller's "Propulsion Systems for Hybrid Vehicles" provides a comprehensive overview of ICE integration in hybrid powertrains, including downsizing strategies and the impact of different engine technologies.

**Reference (Mi et al., 2011):** Chris Mi, M A Masrur, and D W Gao's "Hybrid Electric Vehicles – Principles and applications with practical perspectives" delves into various HEV architectures and the specific considerations for sizing ICEs within these systems.

---

### 5. Matching the Electric Machine and ICE

This is the core of drive system sizing for HEVs. The goal is to achieve synergy between the two power sources for optimal vehicle performance, fuel economy, and emissions.

**Key Concepts:**

*   **Complementary Operation:** The electric machine excels at low-speed torque and rapid acceleration/deceleration, while the ICE is more efficient at higher speeds and steady loads.
*   **Power Buffering:** The battery acts as a buffer, storing energy from regenerative braking and the ICE (when operating as a generator) and delivering it to the electric motor.
*   **Optimal Operating Points:** HEV control algorithms are designed to utilize the most efficient operating points of both the electric machine and the ICE.
*   **Peak Shaving:** The electric motor can handle peak power demands, allowing the ICE to be smaller and operate closer to its optimal efficiency.
*   **Transient Response:** The electric motor's quick response is crucial for smooth transitions and immediate torque delivery.

**Sizing Strategy:**

1.  **Define Vehicle Performance Targets:** (Acceleration, top speed, gradability, range, fuel economy).
2.  **Analyze Vehicle Load Profile:** (Duty cycles for city driving, highway driving, etc.).
3.  **Initial Electric Machine Sizing:** Based on required low-speed torque, peak acceleration power, and regenerative braking capabilities.
4.  **Initial ICE Sizing:** Based on the remaining power demand not met by the electric machine, considering the most efficient operating range.
5.  **Drive Train Topology Consideration:** The chosen topology (series, parallel, series-parallel) will significantly influence the sizing and interaction of the electric machine and ICE.
6.  **Iterative Refinement:**
    *   Simulate the system's performance under various driving conditions using the initial sizing.
    *   Evaluate fuel economy, emissions, and acceleration.
    *   Adjust the sizing of the electric machine and ICE to meet targets. For instance, if the ICE is too small, it might constantly operate at low efficiency or be unable to provide sufficient power for sustained cruising. If it's too large, it adds unnecessary weight and cost, and may not achieve its efficiency benefits.
7.  **Component Matching:** Ensure that the torque and speed capabilities of the electric machine, ICE, and transmission are compatible. For example, the maximum torque of the electric motor shouldn't exceed the torque handling capacity of the gearbox or power split device.

**Example (Series Hybrid):**

In a series hybrid, the ICE is primarily used to generate electricity. It can be sized to run at its most efficient speed and load to charge the battery. The electric motor, therefore, needs to be sized to handle the full propulsion power and acceleration requirements. The ICE's power rating might be considerably lower than the electric motor's peak power rating.

**Example (Parallel Hybrid):**

In a parallel hybrid, both the ICE and electric motor can directly drive the wheels. The ICE might be sized to provide the primary power for highway cruising, while the electric motor assists during acceleration and handles low-speed driving. The electric motor might be sized to provide 30-50% of the peak power, and the ICE 70-80%, with their combined capability meeting the overall peak demand.

**Reference (Ehsani et al., ) :** "Modern Electric, Hybrid and Fuel Cell Vehicles" provides a broad perspective on hybrid vehicle architectures and the rationale behind component sizing, emphasizing the integrated approach.

---

### 6. Drive Train Topologies and Their Impact on Sizing

The arrangement of the electric machine and ICE significantly influences how they are sized and matched.

**Key Concepts:**

*   **Series Hybrid:**
    *   **Architecture:** ICE -> Generator -> Battery -> Electric Motor -> Wheels.
    *   **Sizing Implications:** ICE is sized as a generator to meet average power demand and battery charging needs, often operating at its optimal efficiency point. The electric motor is sized for the full vehicle propulsion power.
*   **Parallel Hybrid:**
    *   **Architecture:** ICE and Electric Motor can independently or jointly drive the wheels.
    *   **Sizing Implications:** Both ICE and electric motor are sized to contribute to peak power demands. The ICE is often downsized, with the electric motor compensating for its limitations. Careful matching of torque and speed characteristics is crucial.
*   **Series-Parallel (Power-Split) Hybrid:**
    *   **Architecture:** Utilizes a power split device (e.g., planetary gearset) to blend power from ICE and electric motor.
    *   **Sizing Implications:** Offers the most flexibility. The ICE can be downsized significantly, and the electric motor can handle a wider range of operating conditions. The power split device's capacity and efficiency are also critical sizing factors.

**Example:**

A series hybrid designed for city driving might have a small ICE (e.g., 40 kW) acting as a generator, coupled with a powerful electric motor (e.g., 100 kW) capable of rapid acceleration and regenerative braking. A parallel hybrid might have a 1.5L turbocharged ICE (e.g., 100 kW) and a 40 kW electric motor, with their combined power exceeding 140 kW for peak performance.

**Reference (Hussein, 2003):** Iqbal Hussein's "Electric and Hybrid Vehicles: Design Fundamentals" offers detailed explanations of various HEV topologies and their inherent advantages and disadvantages, including how they affect component sizing.

---

### 7. Key Parameters for Drive System Sizing

Several critical parameters must be considered during the sizing process.

**Key Parameters:**

*   **Torque:**
    *   **Peak Torque:** Required for maximum acceleration and gradeability.
    *   **Continuous Torque:** The torque the motor can sustain without overheating.
    *   **Starting Torque:** The torque needed to overcome static friction.
*   **Power:**
    *   **Peak Power:** Required for high-speed performance.
    *   **Continuous Power:** The power the motor can sustain continuously.
*   **Speed:**
    *   **Maximum Speed:** The highest rotational speed the motor can safely operate at.
    *   **Base Speed:** The speed at which the motor transitions from constant torque to constant power operation.
*   **Efficiency:** The ratio of mechanical output power to electrical input power (for electric motors) or the ratio of mechanical output power to fuel input power (for ICEs).
*   **Power Density:** Power output per unit volume or mass of the component. Important for vehicle packaging and weight.
*   **Thermal Limits:** The maximum operating temperature of the components to prevent damage.
*   **Cost:** The manufacturing and purchase cost of the components.
*   **Durability and Reliability:** The expected lifespan and robustness of the components.

**Important Considerations:**

*   **Duty Cycle Analysis:** Understanding how often components operate at peak loads versus average loads is crucial for determining continuous vs. peak ratings.
*   **Drive Cycle Simulation:** Using software tools to simulate the vehicle's performance over standard drive cycles (e.g., FTP-75, HWFET) is essential for validating sizing decisions and optimizing efficiency.

---

### 8. Practical Considerations and Design Trade-offs

Sizing is not just about meeting performance targets; it involves numerous practical considerations and trade-offs.

**Key Trade-offs:**

*   **Performance vs. Cost:** Higher performance generally means larger, more powerful, and more expensive components.
*   **Performance vs. Efficiency:** Aggressive performance targets can sometimes lead to reduced overall fuel economy if not carefully managed.
*   **Weight vs. Power:** Larger motors and ICEs are heavier, impacting vehicle efficiency and handling.
*   **Packaging Constraints:** The physical size and shape of components must fit within the vehicle's chassis.
*   **Thermal Management Complexity:** Higher power densities and more demanding duty cycles require more sophisticated cooling systems.

**Design Process Steps (Summary):**

1.  **Define Vehicle Requirements:** Performance, range, cost, packaging.
2.  **Analyze Load Profile:** Duty cycles, acceleration, braking.
3.  **Select Drive Train Topology:** Series, parallel, series-parallel.
4.  **Size Electric Machine:** Based on torque, speed, and power requirements, considering efficiency and power density.
5.  **Size ICE (for HEVs):** Based on the power contribution required from the ICE, considering its most efficient operating points and the chosen architecture.
6.  **Match Components:** Ensure compatibility between electric machine, ICE, transmission, battery, and power electronics.
7.  **Simulate and Optimize:** Use modeling and simulation tools to predict performance, efficiency, and emissions.
8.  **Refine Sizing:** Adjust component ratings based on simulation results and practical constraints.

---

### Practice Questions

**Question 1:**
In a parallel hybrid electric vehicle, what is the primary role of sizing the ICE to be slightly smaller than what would be required for a conventional vehicle?
**(a) To increase the overall power of the vehicle.**
**(b) To reduce the cost and weight of the ICE.**
**(c) To ensure the electric motor handles all peak power demands.**
**(d) To improve the aerodynamic drag of the vehicle.**

**Answer:** (b) To reduce the cost and weight of the ICE. By down-sizing the ICE and relying on the electric motor for peak power assistance, the overall cost and weight of the ICE can be reduced.

**Question 2:**
Explain why the duty cycle of a vehicle is a critical parameter when sizing an electric machine.
**Answer:** The duty cycle dictates the load profile of the electric machine. If the vehicle frequently operates under high load conditions for extended periods (high duty cycle), the electric machine must be sized to handle continuous power and torque without overheating. If it primarily operates at low loads, a smaller, less powerful machine might suffice, but its peak power capability for acceleration still needs to be considered. Understanding the duty cycle helps differentiate between peak and continuous power requirements for accurate sizing.

**Question 3:**
Compare and contrast the ICE sizing considerations for a series hybrid versus a parallel hybrid.
**Answer:**
*   **Series Hybrid:** The ICE is primarily a generator. It can be sized to operate at its most efficient speed and load for battery charging. Its power rating is often dictated by the charging requirements and the overall energy needs of the vehicle rather than direct propulsion power. It doesn't directly contribute to peak propulsion torque.
*   **Parallel Hybrid:** Both the ICE and electric motor contribute to propulsion. The ICE is typically downsized and sized to meet a significant portion of the average power demand and moderate acceleration. It needs to be matched with the electric motor's torque and speed characteristics to provide the required peak propulsion power and ensure smooth power delivery.

**Question 4:**
What is the significance of the "constant torque region" and "constant power region" for an electric motor's sizing?
**Answer:**
*   **Constant Torque Region:** This region is critical for low-speed acceleration, starting from a standstill, and climbing gradients. The motor must be able to deliver its maximum torque from zero speed up to a certain base speed. Sizing the motor to provide sufficient torque in this region ensures good initial acceleration and gradeability.
*   **Constant Power Region:** This region is important for maintaining performance at higher speeds and reaching the vehicle's top speed. Beyond the base speed, the motor can deliver power at a decreasing torque. Sizing the motor to provide adequate power in this region ensures the vehicle can achieve its desired top speed and maintain speed on highways.

**Question 5:**
A vehicle's acceleration requirement is 0-100 km/h in 10 seconds. How would this requirement directly influence the sizing of the electric motor in a pure electric vehicle?
**Answer:** This requirement directly dictates the **peak torque** and **peak power** the electric motor needs to deliver. Higher acceleration requires higher tractive effort, which translates to higher torque at the wheels. As the vehicle accelerates, the speed increases, and to maintain acceleration, the motor must also be capable of delivering sufficient power. Therefore, the motor must be sized to meet these specific peak torque and power demands within the specified time frame, considering the vehicle's mass and drivetrain efficiency.

---

### Important Points to Remember Summary:

*   **Vehicle performance requirements (acceleration, top speed, gradability) are the starting point for sizing.**
*   **Understanding the vehicle's load profile (duty cycle) is crucial for determining continuous vs. peak power needs.**
*   **Electric motors excel at low-speed torque and fast response, while ICEs are more efficient at steady, higher loads.**
*   **In HEVs, the goal is to match the electric machine and ICE to complement each other, leveraging their strengths and minimizing their weaknesses.**
*   **Drive train topology significantly impacts how the electric machine and ICE are sized and integrated.**
*   **Downsizing the ICE in HEVs offers benefits in cost and weight but requires careful matching with the electric propulsion system.**
*   **Sizing is an iterative process involving simulation and optimization to balance performance, efficiency, cost, and packaging.**
*   **Component matching ensures that all parts of the drive train can operate together effectively.**

---
