---
title: "satellite launching"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff89a"
status: "completed"
scrapedAt: "2026-05-23T18:57:09.901Z"
---
# Module 1: Satellite Orbit and Orbital Equations - Topic: Satellite Launching

## Subject: Satellite and Radar Communication

**Course Outcomes Addressed:**

*   **CO1: Illustrate the principles of satellite communication (Knowledge Level: K2)** - Understanding the initial steps in placing a satellite into its operational orbit is fundamental to grasping the overall principles of satellite communication.
*   **CO2: Design and analysis of satellite link (Knowledge Level: K3)** - While not directly about link design, the launch process significantly influences the satellite's orbital parameters, which are critical inputs for link budget calculations.

**Learning Outcomes for this Topic:**

*   Explain the fundamental principles of placing a satellite into Earth orbit.
*   Identify and describe the different types of launch vehicles used for satellite deployment.
*   Discuss the key phases of a typical satellite launch mission.
*   Explain the concept of orbital insertion and its importance.
*   Analyze the factors influencing the choice of launch site and trajectory.

---

### 1. Introduction to Satellite Launching

Satellite launching is the critical first step in establishing a satellite communication system. It involves propelling a spacecraft from the Earth's surface into a predetermined orbit around the Earth. This process requires immense energy, precise trajectory control, and sophisticated engineering to overcome Earth's gravity and atmosphere.

**Key Concepts:**

*   **Orbit:** A curved path, usually elliptical, that a celestial object or spacecraft follows around a star, planet, or moon, due to gravity.
*   **Launch Vehicle (Rocket):** A vehicle designed to carry a payload (like a satellite) into space. It typically consists of multiple stages, each with its own engines and fuel.
*   **Payload:** The satellite itself, along with any other equipment being carried into orbit.
*   **Apogee:** The point in an orbit farthest from the Earth.
*   **Perigee:** The point in an orbit closest to the Earth.
*   **Orbital Insertion:** The process of achieving the desired velocity and trajectory to enter a stable orbit.

**References:**

*   Pratt & Allnutt, 3rd Edition, Chapter 2: "Launch Vehicles and Launch Operations" provides a comprehensive overview of the hardware and processes involved.

---

### 2. Types of Launch Vehicles

Launch vehicles are categorized based on their payload capacity, number of stages, and propellant type.

**Key Concepts:**

*   **Stages:** Rockets are typically multi-stage to shed weight as they ascend. Each stage has its own engines that fire sequentially.
    *   **First Stage:** Provides the initial thrust to overcome gravity and atmospheric drag.
    *   **Second Stage:** Continues acceleration after the first stage is jettisoned.
    *   **Third/Upper Stage:** Often used for fine-tuning the orbit and precise orbital insertion.
*   **Propellant:** The substance that is expelled by the rocket engine to produce thrust.
    *   **Liquid Propellants:** Offer higher performance and controllability but are complex to handle (e.g., Liquid Oxygen (LOX) and Liquid Hydrogen (LH2), or LOX and Kerosene).
    *   **Solid Propellants:** Simpler to store and ignite but less controllable once ignited (e.g., Ammonium Perchlorate Composite Propellant (APCP)).

**Examples of Launch Vehicles:**

*   **Ariane 5 (ESA):** A heavy-lift, dual-engine launch vehicle capable of delivering large satellites to geostationary transfer orbit (GTO). (Pratt & Allnutt, p. 55)
*   **Atlas V (ULA):** A versatile launch vehicle with various configurations, capable of launching medium to heavy payloads.
*   **Falcon 9 (SpaceX):** A reusable, medium-lift launch vehicle known for its cost-effectiveness and ability to launch significant payloads. (Modern example, though not explicitly in Pratt & Allnutt 2021, its principles are covered).
*   **Proton-M (Russia):** A powerful, heavy-lift launch vehicle used for various missions, including geostationary satellites.

**Important Point to Remember:** The choice of launch vehicle depends on the satellite's mass, the target orbit, and the desired accuracy of orbital insertion.

---

### 3. Phases of a Satellite Launch Mission

A typical satellite launch mission can be divided into several distinct phases:

**Key Concepts:**

*   **Pre-Launch Preparations:**
    *   Satellite integration with the launch vehicle.
    *   Fueling of the launch vehicle.
    *   Final checks and countdown.
*   **Launch and Ascent:**
    *   Ignition of the first-stage engines.
    *   Liftoff and vertical ascent.
    *   Pitch maneuver to begin trajectory change.
    *   Max Q (Maximum Dynamic Pressure): The point of highest aerodynamic stress on the rocket.
    *   Stage separation: Jettisoning spent rocket stages.
    *   Second stage ignition and burn.
*   **Transfer Orbit (if applicable):**
    *   The rocket (or its upper stage) places the satellite into an initial, often elliptical, orbit.
    *   This orbit is usually a Geostationary Transfer Orbit (GTO) for satellites destined for geostationary orbit (GEO).
*   **Satellite Deployment:**
    *   The satellite is released from the launch vehicle's upper stage.
*   **Orbital Insertion and Checkout:**
    *   The satellite uses its own onboard propulsion system to maneuver into its final operational orbit (e.g., GEO, MEO, LEO).
    *   Systems checkout and verification.

**Example:** Launching a satellite to Geostationary Orbit (GEO) typically involves reaching a GTO first. The GTO is an elliptical orbit with perigee near Earth and apogee at GEO altitude. The satellite then uses its apogee kick motor (AKM) to circularize its orbit at GEO altitude. (Pratt & Allnutt, p. 60)

---

### 4. Orbital Insertion

Orbital insertion is arguably the most critical phase after launch, as it determines the satellite's final orbital parameters.

**Key Concepts:**

*   **Velocity Change ($\Delta V$):** A maneuver involving firing the rocket engines to change the spacecraft's velocity. This is used to transition from one orbit to another.
*   **Tangential Burn:** Firing the engine in the direction of motion to increase velocity and raise the apogee of an orbit.
*   **Retrograde Burn:** Firing the engine opposite to the direction of motion to decrease velocity and lower the perigee of an orbit.
*   **Circularization Burn:** A burn performed at apogee to raise the perigee and create a circular orbit.

**Importance:**

*   **Achieving the Correct Orbit:** Ensures the satellite is in its intended operational orbit (LEO, MEO, GEO, etc.).
*   **Satellite Lifespan:** Incorrect insertion can lead to premature fuel depletion or loss of control.
*   **Payload Functionality:** The satellite needs to be in the correct orbit for its communication antennas to point towards the intended ground stations or coverage areas.

**Example:** To move a satellite from a Geostationary Transfer Orbit (GTO) to Geostationary Orbit (GEO), a significant tangential burn is performed at apogee. This burn increases the satellite's velocity at that point, raising its perigee to match the apogee altitude (approximately 35,786 km) and creating a circular orbit. (Pratt & Allnutt, Figure 2.8, p. 59)

---

### 5. Factors Influencing Launch Site and Trajectory

The selection of a launch site and the trajectory of the launch are crucial for mission success and efficiency.

**Key Concepts:**

*   **Launch Site Location:**
    *   **Equator Proximity:** Launching from or near the equator is highly advantageous for achieving GEO. This is because the Earth's rotational velocity at the equator provides a significant velocity boost to the rocket, reducing the amount of fuel required.
    *   **Eastward Launch Direction:** Launches are typically directed eastward, capitalizing on Earth's rotation.
    *   **Downrange Safety:** The launch trajectory must be planned to avoid populated areas, especially during the initial ascent and stage separation. This often dictates launch corridors over oceans.
*   **Trajectory Design:**
    *   **Ascent Profile:** The path the rocket takes from launch to orbital insertion. This is optimized to balance aerodynamic forces, gravity losses, and engine performance.
    *   **Gravity Turn:** A maneuver where the rocket gradually pitches over from a vertical ascent to a horizontal trajectory, allowing gravity to assist in bending the flight path into orbit.
    *   **Range Safety:** Ensuring that any failed stages or debris fall into safe zones.

**Examples:**

*   **Kourou, French Guiana (ESA):** Located near the equator, making it ideal for launching satellites into GEO.
*   **Cape Canaveral, Florida, USA:** While not on the equator, it is located at a latitude of approximately 28.5° North, providing some benefit from Earth's rotation and offers ocean downrange for safety.
*   **Baikonur Cosmodrome, Kazakhstan:** A major launch site used by Russia, located at approximately 46° North latitude. Launches are often directed eastward over Kazakhstan or the Caspian Sea.

**Important Point to Remember:** The Earth's rotation at the equator provides a velocity of about 0.46 km/s, which can significantly reduce the launch vehicle's propellant requirements for equatorial orbits.

---

### Practice Questions and Answers

**Question 1:** Why is launching a satellite from near the equator advantageous for geostationary orbits?

**Answer:** Launching from near the equator provides a direct boost from the Earth's rotational velocity. This added velocity reduces the amount of propellant the launch vehicle needs to carry to reach the necessary orbital velocity for geostationary orbit, making the launch more fuel-efficient and cost-effective. (Relates to CO1 and factors influencing trajectory)

**Question 2:** Describe the role of the different stages of a multi-stage launch vehicle.

**Answer:**
*   **First Stage:** Provides the initial high thrust to lift off and overcome gravity and atmospheric drag.
*   **Second Stage:** Continues the acceleration after the first stage is jettisoned, pushing the payload higher and faster.
*   **Third/Upper Stage:** Typically used for fine-tuning the orbit, performing the final orbital insertion burn, and releasing the satellite accurately into its intended path. (Relates to CO1 and types of launch vehicles)

**Question 3:** What is the primary purpose of a tangential velocity change maneuver in satellite launching?

**Answer:** A tangential velocity change maneuver, usually performed by firing the engine in the direction of motion, increases the satellite's orbital velocity. This is crucial for raising the apogee of an orbit or circularizing an orbit at a higher altitude, such as transitioning from a Geostationary Transfer Orbit (GTO) to Geostationary Orbit (GEO). (Relates to CO1 and orbital insertion)

**Question 4:** If a satellite launch vehicle has a problem during its ascent and the trajectory must be altered to ensure safety, what is a primary consideration for the launch trajectory design?

**Answer:** A primary consideration is the downrange safety, ensuring that any debris from stage separation or a failed component lands in a safe, unpopulated area, typically over the ocean. This dictates the launch corridor. (Relates to CO1 and factors influencing trajectory)

**Question 5:** Explain the term "orbital insertion" and why it is a critical phase.

**Answer:** Orbital insertion is the process of achieving the specific velocity and trajectory required to place a satellite into its stable, operational orbit. It is critical because the accuracy of this maneuver directly determines the satellite's final orbital parameters (altitude, inclination, eccentricity). Incorrect insertion can lead to the satellite being in the wrong orbit, unable to function as intended, or even a loss of the satellite and its payload. (Relates to CO1 and orbital insertion)

---

### Important Points to Remember

*   **Energy is Key:** Launching a satellite requires overcoming Earth's gravity and atmospheric drag, necessitating powerful launch vehicles.
*   **Equatorial Advantage:** Proximity to the equator is highly beneficial for geostationary satellite launches due to Earth's rotation.
*   **Staged Approach:** Multi-stage rockets are used to efficiently shed mass as they ascend, increasing overall performance.
*   **Orbital Insertion Accuracy:** The precise execution of orbital insertion maneuvers is paramount for the satellite's mission success and longevity.
*   **Safety First:** Launch site and trajectory planning prioritize the safety of people and property on the ground.

---

**Further Reading Suggestions:**

*   **Pratt & Allnutt, 3rd Edition:** Review Chapter 2, focusing on the different types of launch vehicles and the mechanics of orbital insertion. Pay attention to figures illustrating launch trajectories and GTO to GEO transfers.
*   **Pritchard (Pearson Education):** Chapter 1 or introductory chapters often provide context on the initial steps of satellite deployment.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
