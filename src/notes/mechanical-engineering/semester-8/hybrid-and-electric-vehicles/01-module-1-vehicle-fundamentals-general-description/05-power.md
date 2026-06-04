---
title: "power"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 1: Vehicle fundamentals – general description"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464420"
status: "completed"
scrapedAt: "2026-05-20T18:20:29.436Z"
---
# HYBRID AND ELECTRIC VEHICLES

## Module 1: Vehicle Fundamentals – General Description

### Topic: Power

**Learning Outcomes Covered:**

*   **LO1:** Define power, energy, and their units of measurement.
*   **LO2:** Explain the difference between instantaneous power and average power.
*   **LO3:** Describe the fundamental power requirements for a vehicle.
*   **LO4:** Discuss the various sources and storage of power in electric and hybrid vehicles.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Explain the general architecture of Electric vehicles. (Understanding the role of power is fundamental to understanding EV architecture).
*   **CO4 (K3):** Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement. (This topic directly lays the groundwork for understanding power transmission).

---

### 1. Introduction to Power in Vehicles

In the context of vehicles, power is the rate at which work is done or energy is transferred. It's the "oomph" that makes a vehicle move, accelerate, climb hills, and power its accessories. Understanding power is crucial for designing, analyzing, and operating electric and hybrid vehicles (EHVs).

---

### 2. Key Concepts and Definitions

**2.1. Energy:**

*   **Definition:** Energy is the capacity to do work. It exists in various forms, such as electrical energy, mechanical energy, chemical energy, kinetic energy, and potential energy.
*   **Units of Measurement:**
    *   **Joule (J):** The SI unit of energy. 1 Joule is the energy expended when a force of 1 Newton moves an object 1 meter.
    *   **Kilowatt-hour (kWh):** A common unit for electrical energy consumption and storage, particularly in batteries. 1 kWh is the energy consumed by a 1-kilowatt device running for 1 hour.
    *   **Watt-hour (Wh):** 1/1000th of a kWh.
    *   **Electronvolt (eV):** A unit of energy commonly used in atomic and subatomic physics.
*   **Reference:** Husain, I. (2010) *Electric and Hybrid Vehicles: Design Fundamentals* (2nd ed.) defines energy as the capacity to do work.

**2.2. Power:**

*   **Definition:** Power is the rate at which energy is delivered or converted. It tells us how quickly work can be done.
*   **Units of Measurement:**
    *   **Watt (W):** The SI unit of power. 1 Watt is equal to 1 Joule per second (J/s). This means that if 1 Joule of work is done every second, the power is 1 Watt.
    *   **Kilowatt (kW):** 1000 Watts. Commonly used to express the power output of electric motors and internal combustion engines.
    *   **Horsepower (hp):** An Imperial unit of power. 1 hp ≈ 746 W (or 0.746 kW). Historically used for engines, but kW is now more prevalent for EHVs.
*   **Relationship to Energy:** Power = Energy / Time
*   **Reference:** Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018) *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design* (3rd ed.) highlights power as the rate of energy transfer.

**2.3. Instantaneous Power:**

*   **Definition:** The power delivered or consumed at a specific moment in time.
*   **Calculation:**
    *   For electrical systems: $P(t) = V(t) \times I(t)$ (where V is voltage, I is current) or $P(t) = I(t)^2 \times R$ (where R is resistance).
    *   For mechanical systems: $P(t) = Force \times Velocity$ or $P(t) = Torque \times Angular Velocity$.
*   **Relevance:** Crucial for understanding how much power is being delivered to the wheels at any given moment during acceleration or deceleration.

**2.4. Average Power:**

*   **Definition:** The total energy delivered or consumed over a period of time, divided by that time period.
*   **Calculation:** Average Power = Total Energy / Total Time
*   **Relevance:** Useful for characterizing the overall energy consumption or performance over a driving cycle (e.g., city driving, highway driving).

**Example:**
If a car's motor delivers 50 kW for 10 seconds, the energy consumed in that period is $50 \text{ kW} \times 10 \text{ s} = 500 \text{ kJ}$ (kilojoules). If this power delivery is sustained for 1 minute (60 seconds), the total energy consumed would be $50 \text{ kW} \times 60 \text{ s} = 3000 \text{ kJ}$.

---

### 3. Fundamental Power Requirements for a Vehicle

A vehicle requires power for several purposes:

*   **Propulsion:** To overcome rolling resistance, aerodynamic drag, and gravitational forces (when climbing hills). This is the primary power requirement for motion.
*   **Acceleration:** To increase the vehicle's kinetic energy and hence its speed. This requires significant power for rapid acceleration.
*   **Accessory Loads:** Powering lights, air conditioning, infotainment systems, power steering, brakes (regenerative braking systems often use motors for this too), and other onboard systems.
*   **Auxiliary Systems:** In hybrid vehicles, power is also needed for the internal combustion engine (ICE) and other components like the supercharger or water pump.

**Reference:** Larminie, J., & Lowry, J. (2012) *Electric Vehicle Technology Explained* (2nd ed.) details the various forces a vehicle needs to overcome, directly relating to its power requirements.

**3.1. Power to Overcome Forces:**

*   **Rolling Resistance ($F_r$):** The force opposing motion due to the deformation of tires and the road surface.
    *   $F_r = C_r \times m \times g$, where $C_r$ is the coefficient of rolling resistance, $m$ is the vehicle mass, and $g$ is the acceleration due to gravity.
    *   **Power required for rolling resistance ($P_r$):** $P_r = F_r \times v$, where $v$ is the vehicle velocity.
*   **Aerodynamic Drag ($F_d$):** The force of air resistance opposing motion.
    *   $F_d = 0.5 \times \rho \times C_d \times A \times v^2$, where $\rho$ is air density, $C_d$ is the drag coefficient, $A$ is the frontal area, and $v$ is the vehicle velocity.
    *   **Power required for aerodynamic drag ($P_d$):** $P_d = F_d \times v = 0.5 \times \rho \times C_d \times A \times v^3$.
*   **Grade Resistance ($F_g$):** The force due to gravity when the vehicle is on an incline.
    *   $F_g = m \times g \times \sin(\theta)$, where $\theta$ is the angle of the incline.
    *   **Power required for grade resistance ($P_g$):** $P_g = F_g \times v = m \times g \times v \times \sin(\theta)$.
*   **Acceleration Force ($F_a$):** The force required to accelerate the vehicle.
    *   $F_a = m \times a$, where $a$ is the acceleration.
    *   **Power required for acceleration ($P_a$):** $P_a = F_a \times v = m \times a \times v$.

**Total Propulsion Power Required ($P_{propulsion}$):**
$P_{propulsion} = P_r + P_d + P_g + P_a$

**Important Point to Remember:** Aerodynamic drag power increases with the cube of velocity ($v^3$), making it a dominant factor at higher speeds.

**Example:**
Consider a vehicle with mass $m = 1500 \text{ kg}$ accelerating at $a = 2 \text{ m/s}^2$ on a level road ($F_g=0$) at a velocity of $v = 20 \text{ m/s}$ (approx. 72 km/h).
Assuming $C_r = 0.01$, $g = 9.81 \text{ m/s}^2$, $C_d = 0.3$, $\rho = 1.225 \text{ kg/m}^3$, $A = 2.0 \text{ m}^2$.

1.  **Rolling Resistance Force:** $F_r = 0.01 \times 1500 \times 9.81 \approx 147.15 \text{ N}$
    $P_r = 147.15 \text{ N} \times 20 \text{ m/s} = 2943 \text{ W} = 2.94 \text{ kW}$
2.  **Aerodynamic Drag Force:** $F_d = 0.5 \times 1.225 \times 0.3 \times 2.0 \times (20)^2 \approx 735 \text{ N}$
    $P_d = 735 \text{ N} \times 20 \text{ m/s} = 14700 \text{ W} = 14.7 \text{ kW}$
3.  **Acceleration Force:** $F_a = 1500 \text{ kg} \times 2 \text{ m/s}^2 = 3000 \text{ N}$
    $P_a = 3000 \text{ N} \times 20 \text{ m/s} = 60000 \text{ W} = 60 \text{ kW}$

**Total Propulsion Power (excluding accessories):** $2.94 \text{ kW} + 14.7 \text{ kW} + 60 \text{ kW} \approx 77.6 \text{ kW}$. This shows that acceleration is a major power consumer.

---

### 4. Sources and Storage of Power in EHVs

EHVs utilize a combination of power sources and storage mechanisms:

**4.1. Power Sources:**

*   **Internal Combustion Engine (ICE):** In hybrid vehicles, the ICE is a primary source of mechanical power, which can be converted to electrical power by an alternator or generator.
    *   **Reference:** Denton, T. (2020) *Electric and hybrid vehicles* (2nd ed.) discusses the dual power sources in hybrids.
*   **Fuel Cells:** Convert chemical energy (from hydrogen) directly into electrical energy.
*   **Onboard Generators:** In some hybrid architectures, a dedicated generator is driven by the ICE.
*   **Regenerative Braking:** Energy captured from kinetic energy during deceleration and braking, converted into electrical energy by the electric motor (acting as a generator).

**4.2. Power Storage:**

*   **Batteries:** The most common energy storage device in EVs and EHVs. They store electrical energy chemically.
    *   **Types:** Lead-acid (older, lower energy density), Nickel-Metal Hydride (NiMH), Lithium-ion (Li-ion) – various chemistries like LiFePO4, NMC, NCA offer different characteristics.
    *   **Key Parameters:** Voltage, capacity (Ampere-hours, Ah), energy density (Wh/kg or Wh/L), power density (W/kg or W/L), State of Charge (SoC), State of Health (SoH).
    *   **Reference:** Dhameja, S. (2001) *Electric Vehicle Battery Systems* provides in-depth information on battery technologies. Husain (2010) also details battery types and their electrical characteristics.
*   **Supercapacitors (Ultracapacitors):** Store energy electrostatically. They offer very high power density and very fast charging/discharging capabilities, making them ideal for capturing regenerative braking energy and providing rapid power bursts. Their energy density is lower than batteries.
*   **Flywheels:** Mechanical energy storage devices that store rotational kinetic energy. They can provide very high power but have limited energy storage capacity. Less common in mainstream automotive applications due to safety and packaging challenges.

**4.3. Power Conversion and Management:**

*   **Power Electronics:** Crucial for managing the flow of power between sources, storage devices, and the motor(s). This includes:
    *   **DC-DC Converters:** To step voltage up or down (e.g., from battery pack to auxiliary systems).
    *   **DC-AC Inverters:** To convert DC power from the battery to AC power for the electric motor.
    *   **AC-DC Rectifiers:** To convert AC power from an external source (charging) to DC for the battery.
*   **Electric Motors:** Convert electrical energy into mechanical energy to drive the wheels.

**Important Point to Remember:** The selection of power sources and storage devices depends on the vehicle's intended application, range requirements, performance targets, and cost constraints.

---

### 5. Power Flow in EHVs

The power flow in EHVs is complex and dynamic, managed by a sophisticated control system.

*   **EVs:** Power typically flows from the battery pack, through an inverter, to the electric motor. During regenerative braking, power flows from the motor (acting as a generator) back to the battery.
*   **Hybrid EVs:** Power can flow from the ICE to the wheels directly, or to a generator to charge the battery or power the electric motor. The electric motor can also drive the wheels, supplement the ICE, or recapture energy during braking.

**Reference:** Ehsani et al. (2018) extensively covers various EHV architectures and their power flow diagrams.

---

### 6. Practice Questions and Exercises

**Question 1:**
Define power and state its SI unit. What is the relationship between power and energy?

**Answer 1:**
Power is the rate at which energy is transferred or converted. Its SI unit is the Watt (W), which is equal to one Joule per second (J/s). The relationship is: Power = Energy / Time.

**Question 2:**
A vehicle's electric motor needs to produce 60 kW of power to maintain a constant speed on a highway. If the motor operates at this power for 30 minutes, how much energy (in kWh) does it consume?

**Answer 2:**
Energy = Power $\times$ Time
Power = 60 kW
Time = 30 minutes = 0.5 hours
Energy = $60 \text{ kW} \times 0.5 \text{ h} = 30 \text{ kWh}$.

**Question 3:**
Explain why aerodynamic drag power is more significant than rolling resistance power at high speeds. Use the formulas for $P_d$ and $P_r$.

**Answer 3:**
The power required to overcome rolling resistance is given by $P_r = F_r \times v = C_r \times m \times g \times v$. This power is linearly proportional to velocity ($v$).
The power required to overcome aerodynamic drag is given by $P_d = F_d \times v = (0.5 \times \rho \times C_d \times A \times v^2) \times v = 0.5 \times \rho \times C_d \times A \times v^3$. This power is proportional to the cube of velocity ($v^3$).
Since $v^3$ increases much faster than $v$ as velocity increases, aerodynamic drag power becomes the dominant factor at higher speeds.

**Question 4:**
List three primary reasons why a vehicle needs power.

**Answer 4:**
1.  Propulsion (overcoming rolling resistance, aerodynamic drag, grade resistance).
2.  Acceleration (increasing kinetic energy).
3.  Powering accessory loads (lights, HVAC, infotainment, etc.).

**Question 5:**
What are the two primary energy storage devices commonly used in modern Electric Vehicles? Briefly describe one advantage of each.

**Answer 5:**
1.  **Batteries (e.g., Lithium-ion):**
    *   Advantage: High energy density, allowing for longer driving ranges.
2.  **Supercapacitors (Ultracapacitors):**
    *   Advantage: High power density and very fast charge/discharge rates, making them excellent for capturing regenerative braking energy.

---

### 7. Summary and Key Takeaways

*   **Power** is the rate of energy transfer, measured in Watts (W) or Kilowatts (kW).
*   **Energy** is the capacity to do work, measured in Joules (J) or Kilowatt-hours (kWh).
*   Vehicles require power for **propulsion**, **acceleration**, and **accessories**.
*   The power required for propulsion is influenced by rolling resistance (linear with velocity), aerodynamic drag (cubed with velocity), grade resistance, and acceleration.
*   EHVs utilize **ICEs**, **batteries**, and **regenerative braking** as power sources and storage.
*   **Batteries** are the primary energy storage for EVs, offering good energy density.
*   **Supercapacitors** offer high power density and fast response, useful for regenerative braking.
*   **Power electronics** are critical for managing power flow in EHVs.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
