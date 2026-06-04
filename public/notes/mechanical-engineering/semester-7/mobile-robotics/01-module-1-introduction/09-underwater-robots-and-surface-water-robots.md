---
title: "underwater robots and surface water robots"
subject: "MOBILE ROBOTICS"
module: "Module 1: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640a3"
status: "completed"
scrapedAt: "2026-05-20T18:15:04.584Z"
---
# Mobile Robotics: Module 1 - Introduction
## Topic: Underwater Robots and Surface Water Robots

This module introduces the fundamental concepts of mobile robotics, focusing on robots operating in aquatic environments. We will explore the unique challenges and characteristics of underwater robots and their surface-water counterparts.

---

### **1. Introduction to Aquatic Robotics**

Robots operating in water, whether fully submerged or on the surface, represent a significant and growing area within mobile robotics. These robots are designed to perform tasks that are difficult, dangerous, or impossible for humans.

**Key Concepts:**

*   **Aquatic Environment:** Water is a medium that imposes significant challenges compared to terrestrial or aerial environments. These include buoyancy, drag, pressure, visibility issues, communication limitations, and the corrosive nature of water.
*   **Types of Aquatic Robots:**
    *   **Underwater Robots:** Operate entirely beneath the surface of the water.
    *   **Surface Water Robots (Surface Vehicles):** Operate on the surface of the water.
*   **Applications:** Exploration, research, surveillance, inspection, maintenance, rescue operations, and environmental monitoring.

**Textbook Reference:**
*   Siegwart & Nourbakhsh (2011) likely discusses various robot platforms and their operating environments, which would include aquatic robots as a distinct category.

**Course Outcome Alignment:**
*   **CO1 (K2): Familiarise types of locomotion for mobile Robots:** This section introduces different *types* of mobile robots based on their operating environment and inherent locomotion requirements.

---

### **2. Underwater Robots (Unmanned Underwater Vehicles - UUVs)**

UUVs are robotic vehicles designed to operate underwater. They are further categorized based on their tethering:

**2.1. Remotely Operated Vehicles (ROVs)**

*   **Definition:** ROVs are tethered underwater robots that are controlled by an operator on the surface via a physical cable. This cable provides power, communication, and data transfer.
*   **Characteristics:**
    *   **Unlimited Power & Communication:** The tether overcomes battery life limitations and allows for real-time, high-bandwidth communication.
    *   **Real-time Control:** Operators can directly manipulate the robot's actions and receive immediate feedback.
    *   **Payload Capacity:** Can often carry heavier payloads due to the absence of on-board power constraints.
    *   **Depth Limitations:** The tether can become a navigational hazard and limits the depth and maneuverability in certain situations.
    *   **Surface Support:** Requires a support vessel or platform.
*   **Locomotion:** Typically employ thrusters for propulsion and maneuvering in multiple degrees of freedom (surge, sway, heave, roll, pitch, yaw).
*   **Sensors:** Sonar (acoustic imaging), cameras (limited by water clarity), depth sensors, compasses, inertial measurement units (IMUs).
*   **Examples:**
    *   Deep-sea exploration (e.g., ROVs used in the Mariana Trench).
    *   Inspection of underwater pipelines and oil rigs.
    *   Underwater construction and maintenance.
    *   Scientific data collection.

**Textbook Reference:**
*   Siegwart & Nourbakhsh (2011) would likely detail the advantages and disadvantages of tethered vs. untethered systems, which directly applies to ROVs versus AUVs.

**2.2. Autonomous Underwater Vehicles (AUVs)**

*   **Definition:** AUVs are untethered, self-propelled underwater robots that operate without direct human intervention. They navigate and execute pre-programmed missions autonomously.
*   **Characteristics:**
    *   **Untethered Operation:** Freedom of movement, no risk of tether entanglement.
    *   **Pre-programmed Missions:** Rely on sophisticated navigation and mission planning algorithms.
    *   **Battery-Powered:** Limited by battery capacity and energy efficiency.
    *   **Communication Challenges:** Limited by acoustic communication, which is slow and low-bandwidth.
    *   **Data Logging:** Typically store data for post-mission retrieval.
*   **Locomotion:**
    *   **Propeller-driven:** Similar to ships, using propellers for forward thrust.
    *   **Biomimetic:** Mimicking fish or whale locomotion for efficiency and stealth.
    *   **Undulating fins:** For precise maneuvering and low-speed movement.
*   **Sensors:**
    *   **Navigation:** Inertial Navigation Systems (INS), Doppler Velocity Logs (DVLs), GPS (when surfaced), acoustic positioning systems (e.g., USBL, LBL).
    *   **Environmental:** Sonar (side-scan, multi-beam), cameras, CTD (Conductivity, Temperature, Depth) sensors, chemical sensors, magnetometers.
*   **Examples:**
    *   Oceanographic surveys and mapping.
    *   Mine counter-measures.
    *   Environmental monitoring (e.g., pollution detection).
    *   Underwater archaeology.

**Textbook Reference:**
*   Siegwart & Nourbakhsh (2011) will extensively cover navigation and control strategies for autonomous robots, which are core to AUV operation.
*   Thrun, Burgard, & Fox (2005) is highly relevant for AUVs due to its focus on probabilistic methods for localization, mapping, and sensor fusion, which are critical for autonomous operation in GPS-denied underwater environments.

**Important Points to Remember (UUVs):**

*   **Navigation in GPS-Denied Environments:** The primary challenge for UUVs. Relies heavily on INS, DVLs, and acoustic methods.
*   **Communication Bandwidth:** Acoustic communication is significantly slower than radio frequency communication.
*   **Pressure:** UUVs must be designed to withstand immense pressure at depth.
*   **Corrosion:** Materials must be resistant to saltwater corrosion.

---

### **3. Surface Water Robots (Surface Vehicles - SVs)**

Surface water robots operate on the water's surface, bridging the gap between land-based robots and submerged UUVs.

**3.1. Types of Surface Vehicles:**

*   **Unmanned Surface Vehicles (USVs):**
    *   **Definition:** Untethered, self-propelled surface robots. They are often remotely controlled or programmed to follow specific paths.
    *   **Characteristics:**
        *   **GPS Navigation:** Can utilize GPS for positioning, simplifying navigation compared to UUVs.
        *   **Radio Communication:** Benefit from higher bandwidth and lower latency radio communication.
        *   **Weather Dependency:** Susceptible to surface conditions like waves, wind, and currents.
        *   **Power:** Battery-powered, with options for solar or hybrid power systems.
        *   **Payload:** Can carry various sensors and equipment.
    *   **Locomotion:**
        *   **Propellers:** Common for propulsion.
        *   **Water jets:** For maneuverability.
        *   **Wheels/Treads:** For amphibious operations (moving from water to land).
    *   **Sensors:** GPS, IMU, cameras, sonar (for shallow water mapping), LiDAR, environmental sensors.
    *   **Examples:**
        *   Harbor surveillance and security.
        *   Hydrographic surveying.
        *   Environmental monitoring (e.g., detecting oil spills).
        *   Support platforms for AUVs.
        *   Autonomous cargo transport.

*   **Tethered Surface Vessels:** While less common as "robots" in the mobile robotics sense, tethered boats can be remotely operated for specific tasks. The principles of control and communication are similar to ROVs but on the surface.

**Textbook Reference:**
*   Corke (2011) provides fundamental algorithms for robotics, many of which are directly applicable to controlling surface vehicles, such as kinematic and dynamic modeling, and path planning in a 2D plane.
*   Siegwart & Nourbakhsh (2011) would likely discuss different types of robots and their locomotion, including wheeled robots and surface vehicles as distinct categories.

**Course Outcome Alignment:**
*   **CO1 (K2): Familiarise types of locomotion for mobile Robots:** This section introduces different locomotion methods for surface vehicles.
*   **CO2 (K4): Derive the kinematic model of mobile robots:** Understanding the kinematics of a surface vehicle (e.g., a car-like mobile robot or a holonomic platform) is crucial for navigation and control.
*   **CO3 (K4): Derive dynamic model of mobile robots:** Modeling the dynamics of a surface vehicle, considering forces like drag and propulsion, is essential for precise control.
*   **CO4 (K3): Choose appropriate Sensors for mobile robot navigation:** Discusses sensors used by surface vehicles for navigation and data acquisition.
*   **CO5 (K3): Perform navigation and path planning mobile robots:** GPS and mapping are key components of surface robot navigation.
*   **CO6 (K3): Control the mobile robots to follow different paths:** Surface vehicles can be controlled to follow waypoints or complex trajectories.

**Important Points to Remember (Surface Water Robots):**

*   **Environmental Awareness:** Must be robust to weather and sea state.
*   **Navigation Simplicity:** GPS availability simplifies localization significantly compared to UUVs.
*   **Communication Reliability:** Radio communication is generally reliable.
*   **Power Management:** Efficient energy usage is still crucial for extended missions.

---

### **4. Challenges and Considerations in Aquatic Robotics**

Both underwater and surface water robots face unique challenges:

*   **Energy Constraints:** Limited battery life for autonomous systems (AUVs, USVs) requires efficient power management and mission planning.
*   **Navigation and Localization:**
    *   **UUVs:** GPS unavailable underwater. Reliance on INS, DVLs, acoustic positioning, and sensor-based navigation (e.g., terrain matching).
    *   **USVs:** GPS is available but can be affected by signal blockage in certain conditions.
*   **Communication:**
    *   **UUVs:** Acoustic communication is slow, low-bandwidth, and affected by environmental factors.
    *   **USVs:** Radio communication is more robust but has range limitations.
*   **Sensing in Water:**
    *   **Visibility:** Water turbidity, scattering, and absorption significantly limit optical sensors (cameras).
    *   **Acoustic Sensing:** Sonar is essential for underwater sensing but has limitations in resolution and can be affected by acoustic noise.
*   **Control and Dynamics:**
    *   **UUVs:** Water exerts significant drag forces and buoyancy effects that must be accounted for in control algorithms. 3D movement (surge, sway, heave, roll, pitch, yaw).
    *   **USVs:** Subject to wind, waves, and currents, requiring robust control to maintain desired trajectories. Often operate in a 2D plane with potential for heave.
*   **Environmental Impact:** Designing robots that minimize disturbance to marine ecosystems.
*   **Maintenance and Durability:** Resistance to corrosion, biofouling, and pressure.

**Textbook Reference:**
*   Siegwart & Nourbakhsh (2011) likely has sections on sensor integration and environmental interaction, which are highly relevant to the challenges of aquatic robots.
*   Tzafestas ( ), while more focused on control, will offer foundational principles for handling the dynamics and control of mobile robots in challenging environments.

**Course Outcome Alignment:**
*   **CO4 (K3): Choose appropriate Sensors for mobile robot navigation:** This section implicitly guides sensor selection by outlining the limitations and capabilities of sensing in aquatic environments.
*   **CO5 (K3): Perform navigation and path planning mobile robots:** Highlights the specific challenges in navigation and planning for these environments.

---

### **5. Kinematic and Dynamic Models (Brief Overview for Context)**

While detailed derivations are in later modules, it's important to understand *why* these models are crucial for aquatic robots.

*   **Kinematic Model:** Describes the robot's motion without considering forces and torques. It relates the robot's joint velocities (e.g., thruster speeds) to its end-effector (robot body) velocities in the world frame.
    *   **Importance for Aquatic Robots:** Crucial for understanding how thruster commands translate into desired movements, especially in 3D for UUVs. For USVs, it's similar to wheeled robots but might include added terms for drift due to water currents.
    *   **Reference:** Corke (2011) and Tzafestas ( ) will provide fundamental kinematic formulations for various robot types.

*   **Dynamic Model:** Describes the relationship between forces/torques and the robot's motion (acceleration). It includes inertial properties, forces (gravity, buoyancy, drag), and torques.
    *   **Importance for Aquatic Robots:** Essential for accurate control, especially to counteract significant hydrodynamic forces (drag, added mass). Understanding these forces is key to achieving precise maneuvers and stability.
    *   **Reference:** Tzafestas ( ) is a prime resource for dynamic modeling of robotic systems.

**Course Outcome Alignment:**
*   **CO2 (K4): Derive the kinematic model of mobile robots:** This section previews the necessity of kinematic models for aquatic robots.
*   **CO3 (K4): Derive dynamic model of mobile robots:** This section previews the necessity of dynamic models, emphasizing the unique forces (hydrodynamic) in aquatic environments.

---

### **6. Practice Questions and Answers**

**Question 1:**
What is the primary advantage of an ROV over an AUV in terms of operational capability, and what is the main drawback?

**Answer 1:**
*   **Advantage:** ROVs have unlimited power and real-time, high-bandwidth communication due to their tether, allowing for immediate operator control and complex manipulation tasks.
*   **Drawback:** The tether can limit maneuverability, pose a snagging hazard, and restricts the operational range.

**Question 2:**
Name two key sensors crucial for the navigation of an AUV operating underwater and explain why they are important.

**Answer 2:**
1.  **Inertial Navigation System (INS):** Essential because GPS is unavailable underwater. INS uses accelerometers and gyroscopes to track changes in velocity and orientation, providing dead reckoning over time.
2.  **Doppler Velocity Log (DVL):** Measures the AUV's velocity relative to the seabed or water column. This data is critical for correcting drift in the INS and improving positional accuracy.

**Question 3:**
Compare the communication capabilities of UUVs and USVs, and explain the typical technologies used.

**Answer 3:**
*   **UUVs:** Rely on **acoustic communication**. This is slow, has low bandwidth, and is affected by water conditions, limiting real-time high-definition video or complex command streams.
*   **USVs:** Utilize **radio frequency (RF) communication** (e.g., Wi-Fi, cellular, satellite). This offers much higher bandwidth, lower latency, and greater reliability, similar to communication with terrestrial robots.

**Question 4:**
What are the main forces that a UUV's dynamic model must account for, which might be less significant or absent in a terrestrial robot's model?

**Answer 4:**
A UUV's dynamic model must account for:
*   **Hydrodynamic Drag:** Resistance from water flow around the robot's body.
*   **Buoyancy Forces:** The upward force exerted by the water, which can significantly affect stability and motion control.
*   **Added Mass:** The inertia of the water that is accelerated along with the robot's body.
*   **Hydrodynamic Damping:** Forces that resist changes in velocity.

**Question 5:**
A surface water robot (USV) is programmed to survey a lake. What sensor would be most appropriate for global positioning, and what sensor would be needed to detect obstacles on the surface or just below?

**Answer 5:**
*   **Global Positioning:** **GPS (Global Positioning System)** would be the most appropriate sensor for global positioning on a surface water robot.
*   **Obstacle Detection:** **Sonar** (e.g., forward-looking sonar or side-scan sonar) would be suitable for detecting obstacles on the surface or submerged. **LiDAR** or **cameras** could also be used for surface obstacle detection, but their effectiveness might be reduced by spray or waves.

---

### **7. Important Points to Remember**

*   **Aquatic environments present unique challenges** to robot design, navigation, sensing, and control due to the properties of water.
*   **UUVs (ROVs and AUVs)** face significant hurdles in communication and navigation due to the lack of GPS and the limitations of acoustic signaling.
*   **USVs benefit from GPS and radio communication**, making their navigation and control more analogous to terrestrial robots, but they are still subject to environmental factors like waves and wind.
*   **Understanding kinematic and dynamic models** is crucial for effective control and maneuverability in water, especially accounting for hydrodynamic forces.
*   **Sensor selection is heavily influenced by the operating environment** – optical sensors are limited underwater, while acoustic sensors are paramount.

---

This concludes Module 1's introduction to underwater and surface water robots. The subsequent modules will delve deeper into the kinematic and dynamic modeling, sensing, and control strategies necessary to build and operate such sophisticated mobile robots.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
