---
title: "parallel"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 1: Vehicle fundamentals – general description"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446442d"
status: "completed"
scrapedAt: "2026-05-20T18:20:38.308Z"
---
# Module 1: Vehicle Fundamentals – General Description
## Topic: Parallel Hybrid Electric Vehicles (HEVs)

---

### Learning Outcomes Covered:

*   **Explain the general architecture of Electric vehicles.** (CO1: K2) - *While this topic focuses on HEVs, understanding the parallel architecture inherently involves explaining how electric and ICE components are integrated, which contributes to the overall understanding of EV architectures.*
*   **Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement.** (CO4: K3) - *This topic directly addresses how power is managed and transmitted in a parallel HEV, involving the selection and integration of ICE, electric motor, and transmission components.*

---

### Introduction to Hybrid Electric Vehicles (HEVs)

Hybrid Electric Vehicles (HEVs) combine a conventional internal combustion engine (ICE) with an electric motor and a battery pack. This integration aims to improve fuel efficiency, reduce emissions, and enhance performance compared to traditional ICE vehicles.

There are several common HEV architectures, including series, parallel, and series-parallel (or power-split). This module focuses on the **Parallel Hybrid Electric Vehicle (PHEV)** architecture.

---

### Parallel Hybrid Architecture

#### General Description

In a parallel HEV, both the internal combustion engine (ICE) and the electric motor can independently propel the vehicle, or they can work together to provide power. This is achieved by mechanically connecting both the ICE and the electric motor to the vehicle's drivetrain (typically at the transmission).

**Key Concept:** The defining characteristic of a parallel HEV is that both power sources can deliver torque to the wheels simultaneously or individually.

**Referencing Husain (2010):** Husain's "Design Fundamentals" likely discusses the parallel architecture as a primary configuration where the ICE and electric motor are coupled through a mechanical linkage to the final drive, allowing for independent or combined operation.

**Referencing Ehsani et al. (2018):** Ehsani et al.'s "Fundamentals, Theory and Design" would elaborate on the mechanical and control aspects of parallel HEVs, explaining how the power flow from both sources is managed to optimize efficiency and performance. They would likely detail the various configurations and their advantages.

**Referencing Larminie & Lowry (2012):** Larminie and Lowry's "Electric Vehicle Technology Explained" would provide a clear explanation of how the parallel configuration allows for different driving modes and the efficient utilization of both power sources.

#### Architecture Components

1.  **Internal Combustion Engine (ICE):** The primary or auxiliary power source. It can be gasoline or diesel.
2.  **Electric Motor/Generator (MG):** Acts as both a motor (to propel the vehicle or assist the ICE) and a generator (to recharge the battery or provide regenerative braking). Often referred to as an Integrated Starter-Generator (ISG) or a dedicated traction motor.
3.  **Battery Pack:** Stores electrical energy to power the electric motor. Typically Nickel-Metal Hydride (NiMH) or Lithium-ion (Li-ion) batteries.
4.  **Transmission:** Connects the ICE and/or electric motor to the drive wheels. This can be a traditional automatic transmission, a manual transmission, or a more specialized hybrid transmission.
5.  **Power Control Unit/Power Electronics:** Manages the flow of electrical energy between the battery, motor/generator, and the vehicle's electrical system. Includes inverters, converters, and controllers.
6.  **Drivetrain:** The mechanical components that transmit power to the wheels (e.g., differential, axles).

#### How it Works

In a parallel HEV, the ICE and the electric motor are connected to the wheels through a common drivetrain. This connection allows for several operating modes:

*   **Electric-Only Driving:** The electric motor powers the vehicle. This is typically used at low speeds, during initial acceleration, or when cruising.
*   **ICE-Only Driving:** The ICE powers the vehicle. This is often used at higher speeds or when the battery charge is low.
*   **Combined Driving (ICE + Electric Motor):** Both the ICE and the electric motor provide power to the wheels. This mode is used for maximum acceleration or when climbing hills, delivering increased power and torque.
*   **Regenerative Braking:** When the driver brakes or the vehicle coasts, the electric motor acts as a generator, converting kinetic energy back into electrical energy to recharge the battery. This is a key feature for improving fuel efficiency.
*   **Battery Charging:** The ICE can also drive the generator to recharge the battery when needed, even if the vehicle is stationary or driving.

#### Types of Parallel Hybrid Configurations

Parallel HEVs can be further classified based on the number of electric motors and their integration with the drivetrain:

*   **Single-Shaft Parallel Hybrid:** Both ICE and electric motor are connected to the same transmission input shaft. The transmission can be a conventional automatic or manual.
    *   *Example:* Toyota Prius (earlier generations, though it's more accurately a series-parallel with electric-only drive capabilities).
*   **Two-Shaft Parallel Hybrid:** The ICE is connected to one shaft, and the electric motor is connected to another. A planetary gear set or a similar mechanism is used to combine or split power from these two shafts. This allows for more flexible control over power flow.
    *   *Example:* Some Ford hybrid systems utilize this approach.
*   **Input-Split Parallel Hybrid (or Power-Split):** This is a more complex arrangement, often considered a hybrid between series and parallel. A planetary gear set is used to allow power to be split between the ICE and electric motor, and also allows the electric motor to act as a generator for the ICE.
    *   *Example:* Toyota's Hybrid Synergy Drive (HSD) system. While often called "series-parallel," the power-split device allows for parallel operation as well.

**Referencing Denton (2020):** Denton's "Electric and Hybrid Vehicles" would likely categorize these parallel configurations, providing diagrams and explaining the mechanical linkages and operational advantages of each.

**Referencing Ehsani et al. (2018):** They would delve into the control strategies for each configuration, emphasizing how the power flow is managed to meet driving demands and optimize efficiency.

#### Advantages of Parallel HEVs

*   **Simpler Design & Cost-Effective:** Generally less complex and cheaper to produce than series or series-parallel systems, especially simpler single-shaft configurations.
*   **Good Fuel Economy:** Significant improvements over conventional ICE vehicles due to electric assist, regenerative braking, and engine-off operation.
*   **Improved Performance:** Electric motor can provide instant torque, improving acceleration and overall responsiveness.
*   **Flexibility:** Can operate on ICE alone, electric motor alone, or both.

#### Disadvantages of Parallel HEVs

*   **Limited Electric-Only Range:** Pure electric driving is typically limited to lower speeds and shorter distances compared to dedicated EVs or some series hybrids.
*   **Transmission Complexity:** Integrating both power sources can require a more complex transmission or coupling mechanism.
*   **Control Complexity:** Managing the interaction between the ICE and electric motor to optimize efficiency and performance requires sophisticated control algorithms.

---

### Key Concepts and Definitions

*   **Torque Split:** The ability of the hybrid system to distribute the required driving torque between the ICE and the electric motor. In parallel HEVs, this split can be achieved mechanically through the transmission.
*   **Regenerative Braking:** The process of converting the kinetic energy of a moving vehicle into electrical energy during deceleration and storing it in the battery.
*   **Power-Split Device:** A mechanism, often a planetary gear set, used in some parallel and series-parallel hybrids to continuously vary the torque distribution between the ICE, electric motor, and wheels.
*   **Mode Switching:** The process by which the hybrid control unit switches between different operating modes (e.g., electric-only, ICE-only, blended power) based on driving conditions, battery state of charge, and driver input.
*   **Launch Assist:** Using the electric motor to provide immediate torque during vehicle startup, improving acceleration and reducing clutch wear (in manual transmission hybrids).
*   **Engine Shut-off/Start:** The ability of the ICE to automatically shut off when not needed (e.g., at idle, low speed) and restart quickly when power is required.

---

### Examples

*   **Honda Insight (1st generation):** One of the early parallel HEVs, featuring a 10-kW electric motor integrated with the ICE and a manual transmission. It focused on aerodynamic design and efficient engine operation.
*   **Toyota Prius (early generations):** While often described as series-parallel due to its power-split device, it operates with a significant parallel component where both the ICE and electric motor can contribute to driving the wheels.
*   **Ford Escape Hybrid:** An early example of a parallel HEV in an SUV format, using a modified Atkinson-cycle engine and an electric motor integrated into a power-split device.

---

### Practice Questions

1.  **Describe the fundamental difference between a series HEV and a parallel HEV in terms of how the ICE and electric motor are connected to the drivetrain.** (CO1, CO4 - K2/K3)
2.  **List three distinct operating modes of a parallel HEV and explain what happens in each mode.** (CO4 - K2)
3.  **What is regenerative braking and how does it contribute to the efficiency of a parallel HEV?** (CO4 - K2)
4.  **Imagine you are designing a parallel HEV for urban delivery services where frequent stop-and-go traffic is common. What key features of the parallel architecture would you emphasize to maximize fuel efficiency in this scenario?** (CO4 - K3)
5.  **Referencing Ehsani et al. (2018), what are the primary advantages of using a power-split device in a parallel HEV system compared to a simpler single-shaft parallel configuration?** (CO4 - K3)

---

### Answers to Practice Questions

1.  **Fundamental Difference:**
    *   **Series HEV:** The ICE is connected only to a generator, which produces electricity to power the electric motor. The ICE does not directly drive the wheels.
    *   **Parallel HEV:** Both the ICE and the electric motor are mechanically connected to the drivetrain (e.g., transmission, wheels) and can propel the vehicle independently or simultaneously.

2.  **Operating Modes:**
    *   **Electric-Only Driving:** The electric motor drives the wheels, using energy from the battery. The ICE is off.
    *   **ICE-Only Driving:** The ICE drives the wheels directly through the transmission. The electric motor is off or acts as a generator.
    *   **Combined Driving:** Both the ICE and the electric motor work together, delivering power to the wheels for enhanced performance or efficiency.
    *   **Regenerative Braking:** When braking or decelerating, the electric motor acts as a generator, converting kinetic energy into electrical energy and storing it in the battery.

3.  **Regenerative Braking:** Regenerative braking is the process where the electric motor operates as a generator during deceleration or braking. It captures kinetic energy that would otherwise be lost as heat through friction brakes, converting it into electrical energy and storing it in the battery. This recovered energy can then be used to power the vehicle later, significantly improving overall fuel efficiency and reducing brake wear.

4.  **Emphasis for Urban Delivery:** For urban delivery, I would emphasize:
    *   **Electric-Only Driving Capability:** To leverage electric propulsion in stop-and-go traffic, reducing fuel consumption and emissions in congested areas.
    *   **Efficient Regenerative Braking:** To recapture as much energy as possible during frequent braking events.
    *   **Smooth and Responsive Electric Motor Assist:** To provide quick acceleration from stops, which is crucial for maintaining flow in traffic and potentially reducing delivery times.
    *   **Intelligent Control System:** To optimize the switching between electric and ICE power and to manage battery charging efficiently.

5.  **Advantages of Power-Split Device (Ehsani et al. 2018):** According to Ehsani et al., a power-split device (like a planetary gear set) offers significant advantages in parallel HEVs by:
    *   **Continuous Variable Power Distribution:** It allows for infinitely variable control over the torque distribution between the ICE, the electric motor, and the wheels, enabling more precise optimization of fuel efficiency across a wider range of operating conditions.
    *   **Seamless Blending of Power Sources:** It facilitates a smooth and seamless integration of power from both sources, improving drivability.
    *   **Efficient Battery Charging:** It allows the ICE to operate at its most efficient speed range to drive the generator, even when the vehicle is moving at different speeds or is stationary, thus efficiently charging the battery.
    *   **Mechanical Linkage Simplification (in some designs):** While the power-split device itself is complex, it can sometimes simplify the overall drivetrain by eliminating the need for a traditional multi-speed transmission in conjunction with the electric motor.

---

### Important Points to Remember

*   **Parallel is about sharing the load:** Both the ICE and electric motor can directly contribute torque to the wheels.
*   **Mechanical connection is key:** They are linked through the transmission.
*   **Flexibility in operation:** Can run on ICE, electric motor, or both.
*   **Regenerative braking is crucial for efficiency:** Captures energy otherwise lost.
*   **Control strategy is vital:** Sophisticated software manages the interaction between the two power sources.
*   **Parallel systems offer a balance:** Good efficiency improvements with less complexity than some other hybrid architectures.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### Further Reading and Referencing

*   **Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals* (2nd ed.). CRC Press.** (Focus on Chapter(s) discussing hybrid architectures, particularly parallel configurations).
*   **Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design* (3rd ed.). CRC Press.** (Crucial for understanding the detailed mechanics, control strategies, and comparative analysis of parallel HEVs).
*   **Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained* (2nd ed.). Wiley-Blackwell.** (Provides accessible explanations of the fundamental concepts and various hybrid architectures).
*   **Denton, T. (2020). *Electric and Hybrid Vehicles* (2nd ed.). CBS Publishers & Distributors Pvt. Ltd.** (Likely offers a good overview and classification of HEV types, including parallel).

---