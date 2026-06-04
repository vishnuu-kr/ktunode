---
title: "Hybrid electric vehicles – concept"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 1: Vehicle fundamentals – general description"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464429"
status: "completed"
scrapedAt: "2026-05-20T18:20:35.609Z"
---
# HYBRID ELECTRIC VEHICLES – CONCEPT

## Module 1: Vehicle Fundamentals – General Description

---

### Introduction

Hybrid Electric Vehicles (HEVs) represent a significant evolution in automotive technology, aiming to reduce fuel consumption and emissions compared to conventional internal combustion engine (ICE) vehicles. They achieve this by integrating an electric powertrain with a traditional ICE, allowing them to operate on either or both power sources. This section will delve into the fundamental concept of HEVs, their core components, and the advantages they offer.

---

### 1.1 What is a Hybrid Electric Vehicle (HEV)?

A **Hybrid Electric Vehicle (HEV)** is a vehicle that uses more than one means of propulsion. In the context of automotive engineering, it typically refers to a vehicle that combines an **internal combustion engine (ICE)** with an **electric motor**, powered by a battery pack.

**Key Concept:** The core idea behind HEVs is to leverage the strengths of both ICEs and electric powertrains.
*   **ICE:** Provides high power density and extended range, especially at higher speeds and for longer journeys.
*   **Electric Motor/Battery:** Offers high torque at low speeds, efficient regenerative braking, and zero tailpipe emissions during electric-only operation.

**Reference:**
*   **Ehsani et al. (2018), Chapter 1:** Defines HEVs as vehicles that combine ICEs with electric motor-generators and energy storage systems (batteries).

---

### 1.2 Why Hybrid Electric Vehicles? The Motivation Behind HEVs

The development and adoption of HEVs are driven by several key factors:

*   **Fuel Economy Improvement:** By utilizing electric propulsion, especially at low speeds and during acceleration (where ICEs are less efficient), HEVs can significantly reduce fuel consumption.
*   **Reduced Emissions:** HEVs can operate in electric-only mode, resulting in zero tailpipe emissions for short periods or under specific driving conditions. Even when the ICE is running, its operation can be optimized for greater efficiency and lower emissions.
*   **Enhanced Performance:** The electric motor can provide instant torque, improving acceleration and overall driving performance.
*   **Regenerative Braking:** HEVs can recapture kinetic energy during braking and deceleration, converting it back into electrical energy to recharge the battery. This further enhances fuel efficiency.
*   **Extended Range:** Unlike pure electric vehicles (EVs), HEVs have the ICE as a backup power source, eliminating "range anxiety" and allowing for longer journeys without the need for frequent recharging.

**Course Outcome Alignment:**
*   **CO1 (K2):** Understanding the fundamental architecture of EVs by recognizing that HEVs are a hybrid form, incorporating electric propulsion.
*   **CO4 (K3):** The concept of regenerative braking directly relates to power transmission and energy management within an electric vehicle system.

---

### 1.3 Basic Components of an HEV

While the specific configuration can vary, a typical HEV consists of the following primary components:

*   **Internal Combustion Engine (ICE):** The traditional gasoline or diesel engine that provides power.
*   **Electric Motor/Generator (M/G):** An electric machine that can function as both a motor (to propel the vehicle) and a generator (to recharge the battery and/or power the ICE).
*   **Battery Pack (Energy Storage System - ESS):** Stores electrical energy to power the electric motor. Common types include Nickel-Metal Hydride (NiMH) and Lithium-ion (Li-ion) batteries.
*   **Power Split Device (or Transmission):** A mechanical component that allows for the blending of power from the ICE and the electric motor to drive the wheels. This is a crucial element in differentiating HEV architectures.
*   **Power Electronics:** Includes components like inverters, converters, and controllers that manage the flow of electrical energy between the battery, motor, and other electrical systems.
*   **Control Unit (ECU):** The "brain" of the HEV, managing the operation of all components to optimize performance, fuel economy, and emissions based on driving conditions.

**Example:** The Toyota Prius, a pioneer in the HEV market, features a 1.8L gasoline engine, an electric motor-generator, and a NiMH battery pack, all managed by a sophisticated control system.

**Reference:**
*   **Husain (2010), Chapter 1:** Provides a general overview of HEV architectures and their fundamental components.
*   **Larminie & Lowry (2012), Chapter 1:** Discusses the basic building blocks of HEVs, including the role of electric machines and energy storage.

---

### 1.4 Classifications of HEVs

HEVs can be classified based on how the ICE and electric motor are integrated and how they contribute to vehicle propulsion. The most common classifications are:

#### 1.4.1 Series Hybrid Electric Vehicle (SHEV)

*   **Concept:** The ICE is mechanically disconnected from the wheels. The ICE acts solely as a generator, powering an electric motor that drives the wheels. The battery can also power the electric motor.
*   **Architecture:** ICE -> Generator -> Battery/Motor -> Wheels
*   **Advantages:**
    *   Engine can operate at its most efficient speed, independent of vehicle speed.
    *   Simpler mechanical design for power delivery.
*   **Disadvantages:**
    *   Lower overall efficiency due to multiple energy conversions (mechanical to electrical, electrical to mechanical).
    *   Requires a larger, more powerful electric motor and battery to handle all propulsion needs.
*   **Example:** Some buses and specialized vehicles use series hybrid configurations.

#### 1.4.2 Parallel Hybrid Electric Vehicle (PHEV)

*   **Concept:** Both the ICE and the electric motor can independently or together propel the vehicle. They are connected to the drivetrain in parallel.
*   **Architecture:** ICE -> Transmission -> Wheels AND Electric Motor -> Transmission -> Wheels
*   **Advantages:**
    *   Higher overall efficiency as power can be delivered directly from the ICE to the wheels.
    *   Electric motor can assist the ICE, improving acceleration.
    *   Can operate in ICE-only, electric-only, or combined modes.
*   **Disadvantages:**
    *   More complex mechanical integration.
    *   Requires a transmission capable of handling power from both sources.
*   **Example:** Honda Insight (earlier models), many mild hybrids.

#### 1.4.3 Series-Parallel (or Power-Split) Hybrid Electric Vehicle (SPHEV)

*   **Concept:** Combines features of both series and parallel hybrids. A planetary gear set (power split device) is often used to blend power from the ICE and electric motor.
*   **Architecture:** Typically, the ICE is connected to the power split device, which also connects to the electric motor/generator and the output shaft to the wheels.
*   **Advantages:**
    *   Offers the highest flexibility and efficiency across a wide range of operating conditions.
    *   Can achieve optimal engine operation and efficient electric-only propulsion.
*   **Disadvantages:**
    *   Most complex mechanical and control system.
*   **Example:** Toyota Prius, Ford Escape Hybrid.

**Reference:**
*   **Ehsani et al. (2018), Chapter 2:** Provides detailed explanations and diagrams for different HEV configurations (series, parallel, series-parallel).
*   **Husain (2010), Chapter 2:** Discusses various HEV architectures and their operational characteristics.

---

### 1.5 Operating Modes of an HEV (Focusing on Parallel and Series-Parallel)

HEVs can operate in various modes to optimize efficiency and performance:

*   **Electric-Only Driving (EV Mode):** The vehicle is propelled solely by the electric motor, with the ICE off. This is typically used at low speeds or for short distances to minimize emissions and fuel consumption.
*   **ICE-Only Driving:** The vehicle is propelled solely by the ICE. This usually occurs at higher speeds or when the battery charge is low.
*   **Hybrid Driving (ICE + Electric Motor):** Both the ICE and the electric motor work together to propel the vehicle. The electric motor can assist the ICE for acceleration or provide supplemental power.
*   **Regenerative Braking:** When the driver brakes or decelerates, the electric motor acts as a generator, converting kinetic energy into electrical energy to recharge the battery.
*   **Battery Charging (Engine-Generates Power):** The ICE can drive the generator to recharge the battery, either while the vehicle is stationary or while it's moving.

**Example:** In city driving, a series-parallel HEV might primarily use EV mode or a combination of ICE and electric motor for smooth acceleration. On the highway, it might primarily use the ICE, with the electric motor assisting during overtakes. During braking, regenerative braking will capture energy.

---

### 1.6 Advantages and Disadvantages of HEVs

| Advantages                                        | Disadvantages                                                                                                      |
| :------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| **Improved Fuel Economy**                         | **Higher Initial Cost:** More complex technology leads to higher purchase prices.                                 |
| **Reduced Emissions**                             | **Increased Weight:** Battery packs and electric motors add weight, potentially affecting handling and efficiency. |
| **Quieter Operation (in EV mode)**                | **Battery Degradation:** Batteries have a finite lifespan and can degrade over time.                                |
| **Enhanced Performance (torque from motor)**      | **Battery Replacement Cost:** Replacing the battery pack can be expensive.                                         |
| **Extended Range (compared to pure EVs)**         | **Complexity:** Managing the interaction between ICE and electric powertrain requires sophisticated control.        |
| **Reduced Reliance on Fossil Fuels**              | **Potential for Reduced Trunk/Interior Space:** Battery placement can impact cabin and cargo volume.               |
| **Regenerative Braking**                          |                                                                                                                    |
| **Smooth Acceleration (due to electric motor)** |                                                                                                                    |

**Reference:**
*   **Denton (2020), Chapter 3:** Discusses the pros and cons of HEVs in comparison to conventional vehicles.

---

### Important Points to Remember

*   HEVs are a transitional technology, bridging the gap between conventional vehicles and pure electric vehicles.
*   The primary goal of HEVs is to improve fuel efficiency and reduce emissions.
*   The integration of ICE and electric powertrains is key to HEV operation, with different architectures (series, parallel, series-parallel) offering varying levels of complexity and efficiency.
*   Regenerative braking is a critical feature that enhances energy efficiency in HEVs.

---

### Practice Questions

1.  **Define a Hybrid Electric Vehicle (HEV) and explain its fundamental purpose.**
2.  **List the main components of a typical HEV.**
3.  **Briefly describe the difference between a Series Hybrid and a Parallel Hybrid.**
4.  **What is regenerative braking, and how does it contribute to the efficiency of an HEV?**
5.  **Identify two advantages and two disadvantages of HEVs compared to conventional vehicles.**

---

### Answers to Practice Questions

1.  **Definition:** A Hybrid Electric Vehicle (HEV) is a vehicle that uses more than one means of propulsion, typically combining an internal combustion engine (ICE) with an electric motor powered by a battery. **Purpose:** The fundamental purpose is to improve fuel economy and reduce emissions by leveraging the strengths of both ICEs and electric powertrains.
2.  **Main Components:**
    *   Internal Combustion Engine (ICE)
    *   Electric Motor/Generator (M/G)
    *   Battery Pack (Energy Storage System - ESS)
    *   Power Split Device (or Transmission)
    *   Power Electronics
    *   Control Unit (ECU)
3.  **Series vs. Parallel Hybrid:**
    *   **Series Hybrid:** The ICE is used only to generate electricity, which then powers an electric motor that drives the wheels. The ICE is mechanically disconnected from the wheels.
    *   **Parallel Hybrid:** Both the ICE and the electric motor can independently or together propel the vehicle. They are connected to the drivetrain in parallel.
4.  **Regenerative Braking:** Regenerative braking is a process where the electric motor acts as a generator during braking or deceleration, converting the vehicle's kinetic energy into electrical energy. This captured energy is then stored in the battery, thus improving the overall energy efficiency of the vehicle by reducing energy wasted as heat during conventional braking.
5.  **Advantages of HEVs:**
    *   Improved Fuel Economy
    *   Reduced Emissions
    *   Enhanced Performance
    *   Quieter Operation (in EV mode)
    *   Extended Range (compared to pure EVs)

    **Disadvantages of HEVs:**
    *   Higher Initial Cost
    *   Increased Weight
    *   Battery Degradation and Replacement Cost
    *   Greater Complexity

---

### End of Module 1 - Concept of Hybrid Electric Vehicles

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
