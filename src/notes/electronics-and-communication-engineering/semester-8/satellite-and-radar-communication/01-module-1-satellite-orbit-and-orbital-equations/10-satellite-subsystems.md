---
title: "Satellite subsystems"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff89c"
status: "completed"
scrapedAt: "2026-05-23T18:57:11.365Z"
---
# SATELLITE AND RADAR COMMUNICATION - Module 1: Satellite Orbit and Orbital Equations

## Topic: Satellite Subsystems

### Learning Outcomes:
*   To understand the fundamental subsystems of a satellite.
*   To explain the function and importance of each subsystem.
*   To relate the design and operation of subsystems to the overall satellite mission.

### Course Outcomes Alignment:
*   **CO1 (K2): Illustrate the principles of satellite communication.** (Understanding subsystems is crucial for illustrating how satellites facilitate communication.)
*   **CO2 (K3): Design and analysis of satellite link.** (The performance of various subsystems directly impacts link budget calculations and overall system design.)

### 1. Introduction to Satellite Subsystems

A satellite, often referred to as an "orbiting platform," is a complex system composed of various interconnected subsystems. Each subsystem performs a specific function, and their coordinated operation ensures the satellite's successful mission. Understanding these subsystems is fundamental to comprehending how satellites function, communicate, and provide services.

**Key Concept:** A satellite is a complex engineering marvel where multiple specialized units work in unison to achieve a defined mission in space.

**Reference:** Pratt & Allnutt, Chapter 3: "Satellite Hardware" (Discusses the various physical components and their functions).

### 2. Major Satellite Subsystems

The following are the primary subsystems found in most modern satellites:

#### 2.1. Payload Subsystem

The payload is the primary functional part of the satellite, designed to carry out the mission's objective. It is what the satellite is built *for*.

*   **Functions:**
    *   Transmitting or receiving signals (communication satellites).
    *   Acquiring and processing data (earth observation, scientific satellites).
    *   Carrying instruments for sensing the Earth or space.
*   **Examples:**
    *   **Communication Satellites:** Transponders (receive, amplify, and re-transmit signals), antennas.
    *   **Earth Observation Satellites:** Cameras, spectrometers, radar sensors.
    *   **Navigation Satellites (e.g., GPS):** Atomic clocks, navigation signal transmitters.
    *   **Scientific Satellites:** Telescopes, particle detectors, magnetometers.
*   **Key Components:**
    *   **Transponders:** The core of a communication satellite's payload. They consist of a receiver, frequency converter, amplifier, and transmitter.
    *   **Antennas:** Crucial for transmitting and receiving radio frequency (RF) signals to and from Earth. Different types are used depending on frequency and coverage requirements (e.g., parabolic dish, horn antennas, phased arrays).
    *   **Sensors/Instruments:** For remote sensing, imaging, or scientific data collection.
*   **Importance:** The payload determines the satellite's purpose and its economic or scientific value. The design and performance of the payload are directly related to the satellite's mission requirements.

**Highlight to Remember:** The payload is the "business end" of the satellite – it's what does the primary job.

#### 2.2. Telemetry, Tracking, and Command (TT&C) Subsystem

This subsystem is the "nervous system" of the satellite, responsible for monitoring its health, determining its position and velocity, and receiving commands from ground control.

*   **Functions:**
    *   **Telemetry:** Collecting and transmitting data on the satellite's operational status, performance parameters (temperature, voltage, current, attitude), and subsystem health.
    *   **Tracking:** Determining the satellite's precise orbital position and velocity.
    *   **Command:** Receiving commands from the ground station to control satellite operations, adjust parameters, activate or deactivate subsystems, and execute maneuvers.
*   **Key Components:**
    *   **Receivers:** To receive command signals and tracking signals from the ground.
    *   **Transmitters:** To send telemetry data back to the ground.
    *   **Antennas:** Dedicated antennas for TT&C communication, often omnidirectional for reliability.
    *   **On-Board Computers (OBC):** Process telemetry data, execute commands, and manage satellite operations.
    *   **Signal Modulators/Demodulators:** For encoding and decoding TT&C signals.
*   **Importance:** Ensures the satellite remains operational, healthy, and in its correct orbit. It is vital for controlling the satellite and ensuring mission success.

**Reference:** Skolnik, Chapter 11: "Radar Measurements" (While focused on radar, the principles of tracking and receiving signals are analogous). Pratt & Allnutt, Chapter 3.4: "TT&C Subsystem."

**Practice Question 1:** What is the primary function of the Telemetry, Tracking, and Command (TT&C) subsystem?
**Answer:** To monitor the satellite's health, determine its position, and receive commands from the ground station.

#### 2.3. Power Subsystem

This subsystem generates, stores, and distributes electrical power to all other satellite subsystems.

*   **Functions:**
    *   Generate electrical power.
    *   Store energy for periods when power generation is not possible (e.g., during eclipses).
    *   Regulate and distribute power to all subsystems.
*   **Key Components:**
    *   **Solar Panels (Photovoltaic Arrays):** The primary source of power in most satellites. They convert sunlight directly into electrical energy.
    *   **Batteries:** Store energy generated by solar panels and provide power when the sun is not available (e.g., during Earth's eclipse). Common types include Nickel-Cadmium (NiCd) and Lithium-ion (Li-ion).
    *   **Power Conditioning and Distribution Unit (PCDU):** Regulates voltage and current, protects against overloads, and distributes power to various subsystems.
    *   **Battery Charge/Discharge Controllers:** Manage the charging and discharging of batteries to optimize their lifespan and performance.
*   **Importance:** Without a reliable power supply, no other subsystem can function. The power budget is a critical aspect of satellite design.

**Reference:** Pratt & Allnutt, Chapter 3.2: "Power Subsystem."

**Highlight to Remember:** Solar panels and batteries are the heart of the power subsystem, providing continuous power even during orbital eclipses.

#### 2.4. Attitude Determination and Control Subsystem (ADCS) / Attitude Control System (ACS)

This subsystem determines and controls the satellite's orientation (attitude) in space.

*   **Functions:**
    *   **Attitude Determination:** Measuring the satellite's orientation relative to a reference frame (e.g., Earth, Sun, stars).
    *   **Attitude Control:** Actuating the satellite to maintain or change its orientation according to mission requirements.
*   **Key Components:**
    *   **Attitude Sensors:**
        *   **Sun Sensors:** Detect the direction of the Sun.
        *   **Earth Sensors (Horizon Sensors):** Detect the Earth's horizon.
        *   **Star Trackers:** Identify specific stars to determine precise orientation.
        *   **Gyroscopes/Inertial Reference Units (IRUs):** Measure rotational rates.
    *   **Actuators:**
        *   **Reaction Wheels (Momentum Wheels):** Electrically driven wheels that spin to create a torque, changing the satellite's attitude without expelling mass.
        *   **Control Moment Gyroscopes (CMGs):** Larger, more powerful versions of reaction wheels, used for faster and more precise attitude changes.
        *   **Thrusters (Reaction Control System - RCS):** Small rocket engines that expel propellant to generate torque for attitude control and orbital maneuvers.
        *   **Magnetic Torquers (Magnetorquers):** Electromagnets that interact with the Earth's magnetic field to produce torque.
    *   **On-Board Computer (OBC):** Processes sensor data and commands actuators to achieve the desired attitude.
*   **Importance:** Crucial for pointing antennas towards Earth, orienting solar panels towards the Sun, and directing payload sensors towards their targets. Incorrect attitude can render the satellite useless.

**Reference:** Pratt & Allnutt, Chapter 3.3: "Attitude Determination and Control Subsystem."

**Practice Question 2:** Why is the Attitude Determination and Control Subsystem (ADCS) critical for a geostationary communication satellite?
**Answer:** It ensures the satellite's antennas are precisely pointed towards their intended ground stations on Earth, maintaining a continuous communication link.

#### 2.5. Propulsion Subsystem

This subsystem provides the means to change the satellite's velocity, which is necessary for orbital maneuvers and station-keeping.

*   **Functions:**
    *   **Orbit Insertion:** Helping to place the satellite into its final operational orbit.
    *   **Station-Keeping:** Maintaining the satellite in its designated orbit, counteracting perturbations like atmospheric drag (in LEO) or solar radiation pressure and gravitational anomalies (in GEO).
    *   **Attitude Control:** Thrusters within the propulsion subsystem can also be used for attitude control (as mentioned in ADCS).
    *   **Orbit Adjustments:** Changing the orbit for de-orbiting at the end of life or moving to a different orbital slot.
*   **Key Components:**
    *   **Propellant Tanks:** Store fuel and oxidizer (if applicable).
    *   **Thrusters:** Generate thrust by expelling propellant.
        *   **Chemical Thrusters:** Use chemical reactions (e.g., hydrazine) to produce hot gas.
        *   **Electric Thrusters (Ion Thrusters, Hall Effect Thrusters):** Use electric fields to accelerate ions, providing very high specific impulse but low thrust.
    *   **Feed Systems:** Pipes, valves, and regulators to deliver propellant to the thrusters.
*   **Importance:** Essential for maintaining the satellite's correct position and orientation in orbit. Without it, satellites would drift out of their operational orbits.

**Reference:** Pratt & Allnutt, Chapter 3.5: "Propulsion Subsystem."

#### 2.6. Thermal Control Subsystem

This subsystem manages the satellite's temperature to keep its components within their operational limits.

*   **Functions:**
    *   Prevent components from overheating due to solar radiation, internal heat dissipation, or operational inefficiencies.
    *   Prevent components from becoming too cold during eclipses or in shaded areas.
*   **Key Components:**
    *   **Thermal Coatings and Paints:** Applied to the satellite's exterior to control absorption and emission of thermal radiation.
    *   **Radiators:** Dissipate excess heat into space.
    *   **Heat Pipes:** Efficiently transfer heat from hot components to radiators.
    *   **Heaters:** Provide heat to components that are too cold.
    *   **Louvers:** Adjustable panels that can vary the emissivity of a surface to control heat radiation.
    *   **Multi-Layer Insulation (MLI):** Blankets used to reduce heat transfer by radiation.
*   **Importance:** Extreme temperatures can damage or destroy electronic components. Effective thermal control is vital for the long-term reliability and performance of the satellite.

**Reference:** Pratt & Allnutt, Chapter 3.6: "Thermal Control Subsystem."

**Highlight to Remember:** Space is a vacuum, so heat transfer is primarily through radiation and conduction. Thermal control aims to balance these.

#### 2.7. Structure Subsystem

This subsystem provides the physical framework for the satellite, housing and supporting all other subsystems.

*   **Functions:**
    *   Withstand the mechanical stresses of launch (vibration, acceleration).
    *   Provide a stable platform for the operation of other subsystems.
    *   Protect internal components from the space environment.
    *   Provide attachment points for solar arrays, antennas, and other deployable structures.
*   **Key Components:**
    *   **Chassis/Bus Structure:** The main load-bearing framework.
    *   **Antenna Masts and Mounts.**
    *   **Solar Array Deployment Mechanisms.**
    *   **Thermal Blankets and Shields.**
*   **Materials:** Typically made from lightweight but strong materials like aluminum alloys, titanium, or composite materials (e.g., carbon fiber).
*   **Importance:** Ensures the integrity of the satellite during launch and operation in the harsh space environment.

**Reference:** Pratt & Allnutt, Chapter 3.1: "Structural Subsystem."

#### 2.8. On-Board Computer (OBC) / Command and Data Handling (C&DH) Subsystem

While the OBC is part of TT&C, a broader C&DH subsystem encompasses the management of data, processing, and command execution.

*   **Functions:**
    *   Receive and process commands from the TT&C subsystem.
    *   Collect, format, and store telemetry data.
    *   Control and synchronize the operation of other satellite subsystems.
    *   Perform onboard data processing (if applicable).
    *   Manage the overall data flow within the satellite.
*   **Key Components:**
    *   **Microprocessors/CPUs.**
    *   **Memory (RAM, ROM, Non-Volatile Memory).**
    *   **Data Bus interfaces.**
    *   **Analog-to-Digital Converters (ADCs).**
*   **Importance:** The "brain" of the satellite, coordinating and managing all activities.

**Reference:** Pratt & Allnutt, Chapter 3.4: "TT&C Subsystem" (often includes C&DH aspects).

### 3. Interdependence of Subsystems

It's crucial to understand that these subsystems are not isolated but are highly interdependent.

*   **Example:** The Payload (transponders) requires power from the Power Subsystem. It needs to be pointed correctly by the ADCS. Its signals are managed by the C&DH and transmitted/received via antennas managed by the structure and potentially part of the payload itself. The TT&C subsystem monitors the health of all these components.

**Highlight to Remember:** Satellite design is a complex balancing act where the requirements of one subsystem impact the others.

### 4. Practice Questions & Answers

**Question 1:**
Which subsystem is responsible for generating and distributing electrical power to all other satellite subsystems?
a) Payload Subsystem
b) TT&C Subsystem
c) Power Subsystem
d) Propulsion Subsystem

**Answer:** c) Power Subsystem

**Question 2:**
If a satellite's antenna needs to be accurately pointed towards a ground station on Earth, which subsystem would be primarily responsible for this task?
a) Thermal Control Subsystem
b) Attitude Determination and Control Subsystem (ADCS)
c) Structure Subsystem
d) Propulsion Subsystem

**Answer:** b) Attitude Determination and Control Subsystem (ADCS)

**Question 3:**
What is the main function of the "payload" subsystem in a satellite?
a) To provide power to the satellite.
b) To control the satellite's orientation.
c) To perform the primary mission objective of the satellite.
d) To track the satellite's orbit.

**Answer:** c) To perform the primary mission objective of the satellite.

**Question 4:**
During an eclipse (when the satellite is in Earth's shadow), which subsystem component is essential for providing power?
a) Solar Panels
b) Batteries
c) Heat Pipes
d) Radiators

**Answer:** b) Batteries

**Question 5:**
A satellite needs to maintain its precise orbital position despite small external forces. Which subsystem is responsible for this "station-keeping"?
a) TT&C Subsystem
b) Propulsion Subsystem
c) C&DH Subsystem
d) Thermal Control Subsystem

**Answer:** b) Propulsion Subsystem

### 5. Summary and Key Takeaways

*   Satellites are composed of several critical subsystems, each with a distinct role.
*   The **Payload** performs the primary mission.
*   **TT&C** ensures communication with the ground for monitoring and control.
*   The **Power Subsystem** (solar panels, batteries) provides essential energy.
*   **ADCS** maintains the correct orientation in space.
*   The **Propulsion Subsystem** enables orbital maneuvers.
*   **Thermal Control** manages temperatures to protect components.
*   The **Structure** provides the physical framework.
*   The **C&DH** subsystem acts as the satellite's brain, managing data and commands.
*   All subsystems are interconnected and rely on each other for the satellite's successful operation.

This understanding of satellite subsystems is foundational for analyzing satellite link budgets (CO2) and illustrating the overall principles of satellite communication (CO1).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
