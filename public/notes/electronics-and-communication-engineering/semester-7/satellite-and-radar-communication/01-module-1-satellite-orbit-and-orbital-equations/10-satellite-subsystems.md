---
title: "Satellite subsystems"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff312"
status: "completed"
scrapedAt: "2026-05-23T18:10:36.101Z"
---
# SATELLITE AND RADAR COMMUNICATION - Module 1: Satellite Orbit and Orbital Equations

## Topic: Satellite Subsystems

This topic will explore the essential subsystems that constitute a satellite, enabling it to perform its intended functions. Understanding these subsystems is crucial for appreciating how satellites operate in space and fulfill their communication and observational roles.

---

### **1. Introduction to Satellite Subsystems**

A satellite, in essence, is a complex platform that carries various payloads and supporting equipment to operate in the harsh environment of space. These components are organized into distinct subsystems, each with a specialized function. These subsystems work in concert to ensure the satellite's survival, its ability to communicate with ground stations, and the effective operation of its mission payload.

**Key Concept:** A satellite is an integrated system composed of several functional units (subsystems) that enable its operation in space.

**Relevance to Course Outcomes:**

*   **CO1 (Illustrate the principles of satellite communication - K2):** Understanding the subsystems provides the foundational knowledge to grasp how satellite communication systems function from end-to-end.
*   **CO2 (Design and analysis of satellite link - K3):** Knowledge of subsystems like power and thermal management is vital for link budget calculations and overall system design.
*   **CO3 (Illustrate Radar Fundamentals like Radar Equation and Applications - K2):** While this topic focuses on satellites, understanding satellite subsystems can offer analogies to radar system design, particularly regarding power, processing, and data handling.

**Important Point to Remember:** Each subsystem plays a critical role. The failure of a single subsystem can render the entire satellite inoperable.

---

### **2. Major Satellite Subsystems**

Satellites are generally divided into the following primary subsystems:

#### **2.1. Telemetry, Tracking, and Command (TT&C) Subsystem**

This is the communication link between the satellite and the ground station. It's the satellite's "nervous system."

*   **Telemetry:**
    *   **Function:** To collect and transmit vital information about the satellite's health, status, and environmental conditions back to the ground station. This includes data from sensors monitoring temperature, voltage, current, battery levels, attitude, and subsystem performance.
    *   **Key Components:** Transponders, antennas, data encoders, multiplexers.
    *   **Example:** A satellite transmitting its battery voltage to ensure it's within operational limits.
    *   **Reference (Pratt & Allnutt):** Chapter 4, "Satellite Link Design," discusses the TT&C link as part of the overall communication system.

*   **Tracking:**
    *   **Function:** To determine the satellite's precise location and orbital parameters (position, velocity, orbit prediction). This is crucial for maintaining communication, planning maneuvers, and de-orbiting.
    *   **Key Components:** Transponders, ground-based tracking stations.
    *   **Methods:**
        *   **Range Measurement:** Sending a signal and measuring the time delay for the return echo.
        *   **Angular Measurement:** Using directional antennas to determine the satellite's direction.
        *   **Doppler Shift:** Measuring the frequency change of the received signal due to relative motion.
    *   **Example:** Ground stations constantly monitoring a GPS satellite's position to ensure accurate navigation data.

*   **Command:**
    *   **Function:** To receive and execute commands from the ground station to control the satellite's operations. This includes powering subsystems on/off, adjusting antenna pointing, executing orbital maneuvers, and initiating data transmission.
    *   **Key Components:** Receivers, decoders, command processors, actuators.
    *   **Example:** A command sent from Earth to fire a thruster to adjust a geostationary satellite's orbital position.

**Important Point to Remember:** The TT&C subsystem is vital for the satellite's operational control and survival. Without it, the ground station would have no way to monitor or direct the satellite.

---

#### **2.2. Power Subsystem**

This subsystem generates, stores, and distributes electrical power to all other satellite subsystems. Reliable power is paramount for continuous operation.

*   **Power Generation:**
    *   **Solar Arrays (Photovoltaic Cells):** The most common method. Convert sunlight directly into electrical energy.
        *   **Types:** Monocrystalline silicon, polycrystalline silicon, Gallium Arsenide (GaAs). GaAs cells are more efficient and radiation-hardened but more expensive.
        *   **Considerations:** Degradation due to radiation and atomic oxygen, orientation towards the sun.
    *   **Radioisotope Thermoelectric Generators (RTGs):** Used for missions where solar power is insufficient (e.g., deep space missions, missions to outer planets). Convert heat from radioactive decay into electricity.
        *   **Example:** Voyager probes use RTGs.

*   **Power Storage (Batteries):**
    *   **Function:** To store energy generated by solar arrays for use when the satellite is eclipsed by the Earth (during orbital passes) or when peak power demand exceeds generation.
    *   **Types:** Nickel-Cadmium (NiCd), Nickel-Hydrogen (NiH), Lithium-Ion (Li-ion). NiH batteries are commonly used in satellites for their long life and high energy density.
    *   **Example:** During an eclipse, the satellite draws power from its batteries.

*   **Power Distribution and Control:**
    *   **Function:** To regulate voltage and current, distribute power to various subsystems, and protect against overloads.
    *   **Key Components:** Voltage regulators, power converters, circuit breakers, power management units.

**Important Point to Remember:** The power subsystem dictates the satellite's operational lifetime. The capacity of solar arrays and batteries must be sufficient to meet the power demands of all subsystems throughout the mission, considering orbital dynamics and environmental factors.

**Reference (Pratt & Allnutt):** Chapter 2, "Satellite Power Requirements," details the various power generation and management techniques.

---

#### **2.3. Attitude Determination and Control Subsystem (ADCS) / Altitude Control**

This subsystem determines and controls the satellite's orientation (attitude) in space. Precise attitude control is crucial for pointing antennas, solar arrays, and payloads accurately.

*   **Attitude Determination (Sensing):**
    *   **Star Trackers:** Identify star patterns to determine precise attitude. Highly accurate.
    *   **Sun Sensors:** Detect the direction of the Sun.
    *   **Earth Sensors (Horizon Sensors):** Detect the Earth's infrared radiation horizon to determine the satellite's orientation relative to Earth.
    *   **Gyroscopes:** Measure angular velocity and maintain a known attitude state.
    *   **Magnetometers:** Measure the Earth's magnetic field, providing attitude information in certain orbits.

*   **Attitude Control (Actuation):**
    *   **Reaction Wheels/Momentum Wheels:** Electric motors with rotating flywheels. By changing the speed of the wheels, their angular momentum changes, which, by conservation of angular momentum, causes the satellite to rotate in the opposite direction. This is a "momentum exchange" device.
    *   **Reaction Control System (RCS) Thrusters:** Small rocket engines that fire bursts of propellant to generate torque and change the satellite's attitude. Used for large attitude changes or when reaction wheels are saturated.
    *   **Magnetic Torquers (Magnetorquers):** Electromagnets that interact with the Earth's magnetic field to generate torque. Useful for desaturation of reaction wheels and for attitude control in LEO.

**Example:** A satellite needs to constantly point its high-gain antenna towards its ground station for communication. The ADCS ensures this accurate pointing.

**Important Point to Remember:** The ADCS is responsible for keeping the satellite "on target." Its accuracy directly impacts communication link quality, sensor performance, and overall mission success.

**Reference (Pratt & Allnutt):** Chapter 3, "Satellite Orbit and Attitude Control," covers the principles and components of ADCS.

---

#### **2.4. Propulsion Subsystem**

This subsystem provides the means to maneuver the satellite in orbit.

*   **Function:**
    *   **Orbit Insertion:** To achieve the final desired orbit after separation from the launch vehicle.
    *   **Station Keeping:** To maintain the satellite's orbital position, especially for geostationary satellites to counteract gravitational perturbations (e.g., from the Moon and Sun, non-spherical Earth) and solar radiation pressure.
    *   **Attitude Control (as part of RCS):** Small thrusters can also be used for attitude control.
    *   **Orbit Raising/Lowering:** To adjust the orbital altitude.
    *   **De-orbiting:** To safely dispose of the satellite at the end of its mission.

*   **Types of Propulsion Systems:**
    *   **Chemical Propulsion:**
        *   **Monopropellant Thrusters:** Use a single propellant that decomposes over a catalyst (e.g., hydrazine). Simpler but less efficient.
        *   **Bipropellant Thrusters:** Use two propellants (oxidizer and fuel) that react upon ignition (e.g., NTO/MMH). More complex but more efficient and higher thrust.
    *   **Electric Propulsion:**
        *   **Ion Thrusters:** Accelerate ions using electric fields. Very high specific impulse (fuel efficiency) but very low thrust.
        *   **Hall Effect Thrusters:** Similar to ion thrusters but use a combination of electric and magnetic fields.
        *   **Electric Arcjet Thrusters:** Use electrical energy to heat a propellant and expel it.

**Example:** Geostationary satellites use their propulsion systems to counteract the drift caused by the Moon and Sun's gravity, keeping them centered over their assigned longitude.

**Important Point to Remember:** The amount of propellant carried by a satellite is a significant design constraint, as it directly limits the mission's duration and maneuverability.

**Reference (Pratt & Allnutt):** Chapter 3, "Satellite Orbit and Attitude Control," also discusses the role of propulsion in orbit maintenance.

---

#### **2.5. Thermal Control Subsystem (TCS)**

This subsystem manages the extreme temperature variations encountered by the satellite in space to keep all components within their operational temperature ranges.

*   **Heat Sources:** Solar radiation, Earth's albedo and infrared radiation, internal heat generated by electronic components.
*   **Heat Sinks:** Deep space (very cold), shadowed regions of the Earth.
*   **Functions:**
    *   **Heat Dissipation:** Remove excess heat from components.
    *   **Heat Retention:** Prevent components from becoming too cold, especially during eclipses.
    *   **Temperature Uniformity:** Minimize temperature gradients across the satellite.

*   **Components and Techniques:**
    *   **Passive Thermal Control:**
        *   **Surface Treatments:** High-reflectivity coatings (e.g., silver-Teflon, white paint) to reflect sunlight; low-emissivity coatings (e.g., gold-plated Kapton) to radiate heat.
        *   **Multi-Layer Insulation (MLI):** Multiple thin, reflective layers separated by vacuum to reduce radiative heat transfer.
        *   **Heat Pipes:** Passive devices that transfer heat from a hot area to a cold area using a working fluid's phase change.
        *   **Radiators:** Large surfaces designed to efficiently radiate heat into space.
    *   **Active Thermal Control:**
        *   **Heaters:** Electrical heaters used to warm components that might otherwise get too cold.
        *   **Thermostats/Thermistors:** Sensors to monitor temperatures and control heaters.
        *   **Louvers:** Mechanically adjustable blinds that can control heat radiation.
        *   **Fluid Loops:** Circulate a fluid to transfer heat from hot components to radiators.

**Example:** Sensitive electronic components might require heaters to stay warm during periods when the satellite is not receiving direct sunlight.

**Important Point to Remember:** Thermal management is crucial for the longevity and reliability of electronic components. Overheating or overcooling can lead to malfunction or permanent damage.

**Reference (Pratt & Allnutt):** Chapter 3, "Satellite Orbit and Attitude Control," discusses thermal considerations.

---

#### **2.6. Payload Subsystem**

This is the primary purpose of the satellite, carrying the equipment that performs the mission. The nature of the payload varies greatly depending on the satellite's application.

*   **Communication Satellites:**
    *   **Transponders:** The core of a communication payload. They receive a signal on one frequency, amplify it, shift its frequency, and retransmit it back to Earth.
    *   **Antennas:** High-gain antennas for narrow-beam transmission (e.g., to specific regions) or wide-beam antennas for broader coverage.
    *   **Frequency Converters, Amplifiers, Filters.**

*   **Earth Observation/Remote Sensing Satellites:**
    *   **Optical Cameras:** Visible, infrared, and ultraviolet sensors.
    *   **Radar Systems (SAR - Synthetic Aperture Radar):** Active sensors that emit microwave pulses and analyze the backscattered signal to create images, often capable of penetrating clouds. (Connects to Radar topic).
    *   **Spectrometers:** Analyze light across different wavelengths to identify materials or atmospheric composition.

*   **Navigation Satellites (e.g., GPS, GLONASS):**
    *   **Atomic Clocks:** Highly accurate timing sources.
    *   **Transmitters:** To broadcast navigation signals.

*   **Scientific Satellites (e.g., Hubble Space Telescope):**
    *   **Telescopes, Spectrographs, Particle Detectors.**

**Example:** A telecommunications satellite carries transponders and antennas to relay television signals. An Earth observation satellite carries imaging sensors to monitor climate change.

**Important Point to Remember:** The payload is the reason the satellite exists. Its design and performance are the primary drivers for the requirements of all other subsystems.

**Reference (Pratt & Allnutt):** Chapters focusing on specific application areas (e.g., Chapter 9 on "Mobile Satellite Communications," Chapter 10 on "Broadcasting Satellite Services") will detail payload configurations.

---

#### **2.7. Structural Subsystem**

This subsystem provides the physical support for all other subsystems and the payload. It must withstand the launch forces and the space environment.

*   **Function:**
    *   **Structural Integrity:** To maintain the shape and stability of the satellite during launch (vibration, acceleration, acoustic loads) and in orbit (thermal expansion/contraction, internal stresses).
    *   **Mounting Platform:** To provide attachment points for all subsystems, antennas, and solar arrays.
    *   **Protection:** To shield sensitive components from the space environment.

*   **Materials:**
    *   Lightweight but strong materials like aluminum alloys, titanium, and advanced composites (carbon fiber reinforced polymers - CFRP).
    *   Materials are selected for their strength-to-weight ratio, thermal expansion properties, and resistance to space conditions.

*   **Key Components:**
    *   **Bus Structure:** The main frame or chassis that holds everything together.
    *   **Truss Structures:** For deploying large solar arrays or antennas.
    *   **Deployable Mechanisms:** Hinges, latches, and actuators for deploying solar arrays, antennas, and booms.

**Example:** The main body of a satellite is its structural subsystem, providing a stable platform for all equipment.

**Important Point to Remember:** The structural subsystem must be robust enough for launch and light enough to minimize launch costs and maximize payload capacity.

---

#### **2.8. On-Board Computer (OBC) / Command and Data Handling (C&DH) Subsystem**

This is the "brain" of the satellite. It manages and controls the satellite's operations, processes data, and executes commands.

*   **Function:**
    *   **Command Processing:** Receiving, decoding, and executing commands from the TT&C subsystem.
    *   **Data Handling:** Collecting, formatting, storing, and transmitting telemetry data from all subsystems.
    *   **Autonomy:** Performing pre-programmed sequences, fault detection, isolation, and recovery (FDIR) routines.
    *   **Payload Operations:** Managing the operation of the payload based on received commands or pre-programmed schedules.
    *   **Navigation and Attitude Control Interface:** Receiving sensor data and sending control commands to the ADCS.

*   **Key Components:**
    *   **On-Board Computer(s):** Central processing units, memory (RAM, ROM).
    *   **Data Storage:** Solid-state recorders for buffering data.
    *   **Data Buses:** Communication links between different subsystems.
    *   **Analog-to-Digital Converters (ADCs) and Digital-to-Analog Converters (DACs):** For interfacing analog sensors and actuators.

**Example:** The OBC schedules the transmission of scientific data collected by a payload during specific time windows when a ground station is in view.

**Important Point to Remember:** The OBC is critical for the satellite's intelligent operation and its ability to manage itself, especially in situations where immediate ground intervention is not possible.

---

### **3. Interdependence of Subsystems**

It is crucial to understand that these subsystems are not isolated but are highly interdependent.

*   **Power** is needed by all other subsystems.
*   **TT&C** is needed to command and monitor all other subsystems.
*   **ADCS** needs power and OBC for operation and controls antenna pointing for TT&C and payload transmission.
*   **Propulsion** needs power and OBC for execution of maneuvers, and ADCS for attitude control during burns.
*   **Thermal Control** manages the temperature of all subsystems and the payload.
*   **Structure** provides the mounting for all subsystems and the payload.
*   **OBC/C&DH** orchestrates the operation of almost all other subsystems.

**Example:** A communication satellite's high-gain antenna must be precisely pointed towards Earth for reliable communication. This requires the ADCS to be operational, which in turn requires power from the Power subsystem and commands from the OBC/TT&C subsystem, all while the Thermal subsystem keeps the electronics within temperature limits.

**Important Point to Remember:** Designing a satellite involves balancing the requirements and interactions of all these subsystems to achieve the mission objectives within mass, power, and cost constraints.

---

### **4. Practice Questions and Answers**

**Question 1:** Which subsystem is responsible for receiving commands from the ground and transmitting data about the satellite's health?
    a) Payload Subsystem
    b) Power Subsystem
    c) TT&C Subsystem
    d) Thermal Control Subsystem

**Answer 1:** c) TT&C Subsystem. The TT&C subsystem handles both the reception of commands and the transmission of telemetry data.

---

**Question 2:** What is the primary function of the Attitude Determination and Control Subsystem (ADCS)?
    a) Generating electrical power.
    b) Controlling the satellite's orientation in space.
    c) Storing and processing data.
    d) Generating thrust for orbital maneuvers.

**Answer 2:** b) Controlling the satellite's orientation in space. The ADCS ensures the satellite is pointed in the correct direction for communication, observation, or solar power generation.

---

**Question 3:** A satellite experiences a sudden drop in temperature during an orbital eclipse. Which subsystem is most likely to activate its components to counteract this to prevent component failure?
    a) Propulsion Subsystem
    b) Power Subsystem
    c) Thermal Control Subsystem
    d) Structural Subsystem

**Answer 3:** c) Thermal Control Subsystem. The TCS actively manages temperature by employing heaters to prevent components from becoming too cold.

---

**Question 4:** Briefly explain the role of reaction wheels in the Attitude Determination and Control Subsystem.

**Answer 4:** Reaction wheels are rotating flywheels driven by electric motors. By accelerating or decelerating these wheels, their angular momentum is changed. Due to the conservation of angular momentum, the satellite body rotates in the opposite direction to maintain the total angular momentum of the system. This allows for precise, fuel-free attitude control.

---

**Question 5:** Why are solar arrays considered the primary power generation method for most satellites in Earth orbit? What are their limitations?

**Answer 5:** Solar arrays are primary because they are a reliable and continuous source of power in orbit where sunlight is abundant (except during eclipses). They are relatively efficient at converting sunlight to electricity and are well-understood technology.
**Limitations:**
*   **Degradation:** Over time, solar cells degrade due to radiation, atomic oxygen, and micrometeoroid impacts, reducing their power output.
*   **Eclipses:** During orbital passes where the Earth blocks sunlight, solar arrays cannot generate power, necessitating energy storage (batteries).
*   **Orientation:** They must be precisely oriented towards the Sun for maximum power generation, requiring the ADCS.
*   **Surface Area:** Large surface areas are needed for significant power output, which can be a constraint on satellite size and deployment.

---

### **5. Summary and Key Takeaways**

*   **Satellite subsystems are specialized functional units that enable a satellite to operate in space.**
*   The **TT&C subsystem** is the communication lifeline between the satellite and the ground.
*   The **Power subsystem** is critical for the satellite's operational lifetime, relying on solar arrays and batteries.
*   The **ADCS** ensures the satellite maintains its desired orientation for optimal performance.
*   The **Propulsion subsystem** allows for orbital and attitude adjustments.
*   The **Thermal Control Subsystem** protects components from extreme temperatures.
*   The **Payload subsystem** performs the satellite's primary mission function.
*   The **Structural subsystem** provides mechanical integrity.
*   The **OBC/C&DH subsystem** acts as the satellite's central control unit.
*   **Interdependence is key:** The failure or suboptimal performance of one subsystem can impact others and the overall mission.

This understanding of satellite subsystems forms the basis for analyzing satellite communication links and appreciating the engineering challenges involved in space missions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
