---
title: "Kinetic energy: Mechanical- Flywheel"
subject: "INTRODUCTION TO ENERGY STORAGE SYSTEMS"
module: "Module 2: Kinetic energy: Mechanical"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36ab1"
status: "completed"
scrapedAt: "2026-05-23T16:37:24.566Z"
---
# Introduction to Energy Storage Systems

## Module 2: Kinetic Energy: Mechanical

### Topic: Kinetic Energy: Mechanical - Flywheel

---

### 1. Introduction to Flywheels as Mechanical Kinetic Energy Storage Systems

Flywheels are a fundamental technology in mechanical kinetic energy storage. They store energy by rotating. The kinetic energy stored in a flywheel is directly proportional to its moment of inertia and the square of its rotational speed.

**Key Concept:** Kinetic energy storage relies on the principle of converting electrical or mechanical energy into rotational kinetic energy of a massive, fast-spinning rotor.

**Definition:** A **flywheel** is a rotating mechanical device that stores rotational energy. It is essentially a heavy wheel or disk attached to an axle.

**Relevance to Course Outcomes:**
*   **CO2 (Classify thermal, kinetic and potential energy storage systems and their applications):** This topic directly addresses kinetic energy storage systems, specifically flywheels and their applications. (Knowledge Level: K3)
*   **CO1 (Identify the role of energy storage in power systems):** Flywheels play a role in power systems by providing rapid response and smoothing power fluctuations, thus contributing to grid stability. (Knowledge Level: K3)

**Content from Textbooks:**

*   **Ter-Gazarian (2011):** Likely discusses flywheels as a class of mechanical energy storage, emphasizing their ability to provide high power output for short durations. The focus might be on their inherent characteristics and mechanical construction.
*   **Díaz-González, Sumper, Gomis-Bellmunt (2016):** May provide more modern context, potentially including advancements in flywheel technology, integration with power electronics for grid interfacing, and specific application scenarios like grid stabilization or renewable energy smoothing.

---

### 2. Principles of Operation and Energy Storage Capacity

The fundamental principle behind flywheel energy storage is the storage of kinetic energy due to rotation.

**Key Concepts:**

*   **Kinetic Energy (KE):** The energy an object possesses due to its motion. For a rotating object, it's rotational kinetic energy.
    *   Formula: $KE = \frac{1}{2} I \omega^2$
        *   $I$: Moment of inertia (kg·m²) - a measure of an object's resistance to changes in its rotation. It depends on the mass distribution and shape of the rotor.
        *   $\omega$: Angular velocity (rad/s) - the rate of rotation.
*   **Moment of Inertia ($I$):** For a solid cylinder or disk rotating about its central axis, $I = \frac{1}{2} m r^2$, where $m$ is mass and $r$ is radius. For a thin rim of mass $m$ and radius $r$, $I = m r^2$. Flywheels are often designed with mass concentrated at the rim to maximize $I$.
*   **Energy Storage Capacity:** The amount of energy a flywheel can store. This is directly proportional to the moment of inertia and the square of the maximum allowable rotational speed.
    *   $E_{stored} \propto I \times \omega_{max}^2$

**Factors Affecting Energy Storage Capacity:**

*   **Rotor Mass:** Higher mass generally leads to higher moment of inertia.
*   **Rotor Radius:** Larger radius increases moment of inertia.
*   **Material Strength:** Determines the maximum safe rotational speed before the rotor fails due to centrifugal forces. High-strength materials like composites (carbon fiber) allow for much higher speeds and thus higher energy densities.
*   **Rotational Speed:** The stored energy increases with the square of the speed.

**Example:**
Consider two flywheels of the same mass. If one has its mass concentrated at a larger radius, it will have a higher moment of inertia and can store more energy at the same rotational speed. If one flywheel can safely spin twice as fast as another (with the same moment of inertia), it can store four times as much energy.

**Content from Textbooks/References:**

*   **Ter-Gazarian (2011):** Would detail the physics of rotational kinetic energy and how material properties dictate the performance limits of flywheels. It might present equations for calculating moment of inertia for various rotor geometries.
*   **Díaz-González, Sumper, Gomis-Bellmunt (2016):** Might discuss the practical limitations imposed by material science and engineering on achieving very high rotational speeds and energy densities. It could also touch upon advanced rotor designs.
*   **Rastler (2010):** Likely provides practical figures for energy density and power density of flywheel systems compared to other storage technologies, highlighting their strengths (high power) and weaknesses (lower energy density).

**Important Points to Remember:**
*   Energy storage is proportional to the *square* of the rotational speed.
*   Moment of inertia is crucial; distributing mass further from the axis of rotation increases it.
*   Material strength is a key limiting factor for safe operating speed.

---

### 3. Components of a Flywheel Energy Storage System (FESS)

A typical FESS consists of several key components that work together to store and release energy efficiently.

**Key Components:**

1.  **Rotor (or Flywheel):** The core component that stores rotational energy.
    *   **Materials:**
        *   **Steel:** Traditional, robust, but limited in speed due to tensile strength.
        *   **Composites (e.g., Carbon Fiber Reinforced Polymers - CFRP):** Offer much higher tensile strength, allowing for significantly higher rotational speeds and thus greater energy densities. The material is often wound into a rim or cylinder.
    *   **Shape:** Often designed with mass concentrated at the rim to maximize the moment of inertia.
2.  **Bearings:** Support the rotor and allow it to rotate with minimal friction.
    *   **Types:**
        *   **Mechanical Bearings:** Traditional ball or roller bearings, but friction is a significant loss factor at high speeds.
        *   **Magnetic Bearings (Active Magnetic Bearings - AMBs):** Levitate the rotor using electromagnetic forces. This significantly reduces friction and allows for very high rotational speeds, improving efficiency and lifespan. AMBs require complex control systems.
3.  **Vacuum Enclosure:** The rotor spins in a low-pressure or vacuum chamber to minimize aerodynamic drag and friction losses, which are substantial at high rotational speeds.
4.  **Motor/Generator:** Converts electrical energy to rotational mechanical energy (during charging) and rotational mechanical energy back to electrical energy (during discharging).
    *   **Types:** AC motors, DC motors, synchronous motors, induction motors. The choice depends on the application and the power conversion system.
5.  **Power Conversion System (PCS) / Motor-Generator Controller:**
    *   Manages the flow of electrical energy to and from the motor/generator.
    *   Controls the rotor speed, ensuring efficient charging and discharging.
    *   Often involves power electronics like inverters, converters, and rectifiers for interfacing with the electrical grid or load.

**Diagram (Conceptual):**

```
+---------------------+
| Power Source / Grid |
+---------+-----------+
          |
          v
+---------------------+
| Power Conversion    |
| System (PCS)        |
+---------+-----------+
          | (AC/DC)
          v
+---------------------+
| Motor/Generator     |
+---------+-----------+
          ^
          | (Mechanical Shaft)
          v
+---------------------+
| Bearings (Magnetic/ |
| Mechanical)         |
+---------+-----------+
          |
          v
+---------------------+
| Rotor (Flywheel)    |  <-- Spinning in Vacuum
+---------------------+
```

**Content from Textbooks/References:**

*   **Ter-Gazarian (2011):** Will likely describe the mechanical aspects, including rotor materials, bearings, and the motor-generator function.
*   **Díaz-González, Sumper, Gomis-Bellmunt (2016):** Will probably focus more on the power conversion system and the integration of FESS with power electronics for grid-level applications, including the role of magnetic bearings for efficiency.
*   **Rastler (2010):** Might provide information on typical component costs and the trade-offs between different bearing technologies (e.g., cost vs. efficiency).

**Important Points to Remember:**
*   Minimizing friction is critical for efficiency, hence the vacuum enclosure and magnetic bearings.
*   The motor/generator and PCS are vital for energy conversion and grid interface.
*   Rotor material dictates the maximum speed and energy density.

---

### 4. Performance Characteristics: Power Density, Energy Density, Efficiency, Response Time

Flywheels have distinct performance characteristics that make them suitable for specific applications.

**Key Characteristics:**

1.  **Power Density:** The rate at which energy can be delivered or absorbed per unit of volume or mass.
    *   **Flywheel Strength:** Very high power density. Flywheels can charge and discharge rapidly, making them excellent for power buffering.
    *   **Reason:** The power is limited by the motor/generator and the power electronics, which can typically handle high power flows.
2.  **Energy Density:** The amount of energy stored per unit of volume or mass.
    *   **Flywheel Weakness:** Generally lower energy density compared to batteries or pumped hydro.
    *   **Reason:** The energy is stored in the kinetic energy of the rotor, which is limited by material strength and size. While composite flywheels have improved this, they are still generally less energy-dense than chemical storage.
3.  **Efficiency:** The ratio of energy output to energy input.
    *   **Typical Values:** 85-95%.
    *   **Losses:**
        *   **Friction:** From bearings and aerodynamic drag (minimized by vacuum).
        *   **Motor/Generator Losses:** Electrical and mechanical losses.
        *   **Power Electronics Losses:** In the PCS.
    *   **Factors Affecting Efficiency:** Rotational speed, bearing type (magnetic bearings are more efficient at high speeds), quality of PCS.
4.  **Response Time:** The time taken for the system to deliver or absorb power once a demand is detected.
    *   **Flywheel Strength:** Very fast response time, often in milliseconds.
    *   **Reason:** Kinetic energy is directly converted by the motor/generator without complex chemical or physical transformations.

**Comparison with Other Storage Technologies:**
*   **vs. Batteries:** Flywheels have higher power density, faster response, and longer cycle life (no chemical degradation). Batteries have higher energy density and are generally cheaper per kWh.
*   **vs. Pumped Hydro:** Pumped hydro has very high energy density but much slower response times and requires specific geographical conditions.
*   **vs. Supercapacitors:** Flywheels are more energy-dense than supercapacitors but less power-dense. Supercapacitors have even faster response times than flywheels.

**Content from Textbooks/References:**

*   **Ter-Gazarian (2011):** Likely presents performance metrics and graphs comparing FESS to other storage technologies in terms of power/energy density and efficiency.
*   **Díaz-Gazález, Sumper, Gomis-Bellmunt (2016):** May provide updated performance data for modern FESS and discuss how their characteristics are leveraged in specific power system applications.
*   **Rastler (2010):** Offers a comparative overview of various energy storage technologies, including FESS, based on technical parameters, costs, and applications. It's a good source for understanding where flywheels fit in the broader landscape.
*   **Denholm, Ela, Kirby, Milligan (2010):** Might touch upon the role of FESS in renewable energy integration, highlighting their rapid response capabilities for grid stabilization and power smoothing.

**Important Points to Remember:**
*   Flywheels excel at high-power, short-duration energy storage.
*   Their energy density is a limiting factor for long-duration applications.
*   Fast response time is a key advantage for grid stabilization and power quality applications.

---

### 5. Applications of Flywheel Energy Storage Systems

Flywheels are used in various applications where rapid power delivery or absorption is required.

**Key Applications:**

1.  **Grid Stabilization and Power Quality:**
    *   **Frequency Regulation:** Flywheels can quickly inject or absorb power to counteract sudden changes in grid frequency, helping to maintain stability.
    *   **Voltage Support:** Can help stabilize voltage fluctuations.
    *   **Load Leveling/Peak Shaving:** Used to store energy during off-peak hours and release it during peak demand, reducing stress on the grid.
    *   **Uninterruptible Power Supply (UPS):** Providing instantaneous backup power during grid outages before other, slower backup systems (like generators or batteries) can engage. This is a very common application.
2.  **Renewable Energy Integration:**
    *   **Smoothing Output from Intermittent Sources:** Flywheels can absorb rapid fluctuations in the output of solar PV or wind turbines (e.g., due to cloud cover or wind gusts), providing a more stable power feed to the grid.
    *   **Ramp Rate Control:** Managing the rate at which renewable sources inject power into the grid.
    *   **Example:** A flywheel coupled with a wind turbine can absorb excess energy during a sudden gust of wind and release it when the wind drops, smoothing the output.
3.  **Electric Vehicle (EV) Systems:**
    *   **Regenerative Braking:** Capturing kinetic energy during braking and storing it in a flywheel for later use during acceleration.
    *   **Power Buffering:** Providing a burst of power for acceleration, reducing the load on the battery.
4.  **Industrial Applications:**
    *   **Machine Tool Stabilization:** Stabilizing the power demands of heavy machinery that have fluctuating power requirements.
    *   **Energy Recovery:** Capturing energy from falling loads or braking mechanisms.
5.  **Spacecraft and Satellites:**
    *   **Attitude Control:** Used as reaction wheels for precise control of spacecraft orientation.
    *   **Energy Storage:** Storing solar energy for use when the spacecraft is in shadow.

**Content from Textbooks/References:**

*   **Ter-Gazarian (2011):** Might provide detailed examples of FESS in UPS systems and industrial applications, emphasizing their role in managing transient power demands.
*   **Díaz-González, Sumper, Gomis-Bellmunt (2016):** Likely elaborates on modern grid applications, including their role in ancillary services and the integration of renewables.
*   **Rastler (2010):** Offers a broad overview of applications across different sectors, highlighting the suitability of flywheels for applications requiring high power and fast response.
*   **Denholm, Ela, Kirby, Milligan (2010):** Specifically addresses the use of FESS for renewable energy integration, detailing how they can mitigate intermittency issues.
*   **Nezamabadi and Gharehpetian (2011):** May discuss the integration of flywheels within virtual power plants (VPPs) and distribution networks, showcasing their role in managing distributed energy resources and improving grid reliability.

**Relevance to Course Outcomes:**
*   **CO1 (Identify the role of energy storage in power systems):** Applications like grid stabilization, UPS, and renewable integration clearly define the role of FESS in power systems. (Knowledge Level: K3)
*   **CO4 (Illustrate energy storage technology in renewable energy integration):** The application in smoothing renewable output directly addresses this outcome. (Knowledge Level: K2)
*   **CO5 (Summarise energy storage technology applications for smart grids):** Grid stabilization, load leveling, and integration of distributed resources are key smart grid functions where FESS contribute. (Knowledge Level: K2)

**Important Points to Remember:**
*   Flywheels are best suited for applications requiring rapid power exchange.
*   UPS and renewable smoothing are prominent examples of their utility.
*   Their application in grid services is growing.

---

### 6. Advantages and Disadvantages of Flywheel Energy Storage Systems

Like all energy storage technologies, flywheels have their pros and cons.

**Advantages:**

*   **High Power Capability:** Can deliver and absorb large amounts of power very quickly.
*   **Fast Response Time:** Can respond to changes in power demand in milliseconds.
*   **Long Cycle Life:** No degradation from electrochemical processes, allowing for millions of charge/discharge cycles.
*   **High Round-Trip Efficiency:** Typically 85-95% when properly designed.
*   **Environmental Friendliness:** No toxic materials involved in the basic operation (though manufacturing processes may vary).
*   **Predictable Performance:** Performance is not significantly affected by temperature fluctuations.
*   **Low Self-Discharge (when not operating):** Unlike batteries, once stopped, they don't lose much stored energy until started again.

**Disadvantages:**

*   **Low Energy Density:** Cannot store as much energy per unit of mass or volume as batteries or pumped hydro, limiting their use for long-duration storage.
*   **Self-Discharge (when operating):** Even in a vacuum, some energy is lost due to bearing friction and internal losses. This means they are not ideal for storing energy for very long periods (days/weeks) without some level of power input to maintain speed.
*   **High Initial Cost:** The cost of advanced composite materials, magnetic bearings, and precision engineering can make the initial investment high.
*   **Safety Concerns:** At very high rotational speeds, a catastrophic rotor failure can release a significant amount of energy, posing a safety hazard. Robust containment systems are essential.
*   **Limited Storage Duration:** Primarily suited for short-duration applications (seconds to minutes) due to energy density limitations and self-discharge when running.

**Content from Textbooks/References:**

*   **Ter-Gazarian (2011):** Likely presents a balanced view of advantages and disadvantages, perhaps focusing on the engineering challenges and limitations.
*   **Díaz-González, Sumper, Gomis-Bellmunt (2016):** May highlight how modern advancements are mitigating some disadvantages, like improved energy density in advanced composite flywheels.
*   **Rastler (2010):** Provides a comprehensive comparison of pros and cons across all storage technologies, contextualizing flywheels within the broader market.
*   **Denholm, Ela, Kirby, Milligan (2010):** Might discuss the specific advantages flywheels bring to renewable integration (e.g., speed) while acknowledging limitations in energy capacity for broader grid storage needs.

**Important Points to Remember:**
*   Balance the strengths (power, speed, cycle life) against weaknesses (energy density, self-discharge when running).
*   Choose flywheels for applications where high power for short durations is key.

---

### 7. Advanced Flywheel Designs and Future Trends

Research and development continue to improve flywheel technology.

**Key Advancements and Trends:**

*   **Advanced Rotor Materials:**
    *   **Carbon Fiber Composites:** Continued development of stronger, lighter, and more cost-effective composite materials.
    *   **Hybrid Designs:** Combining materials to optimize strength, mass distribution, and cost.
*   **Magnetic Bearings:**
    *   **Improved Control Systems:** More efficient, reliable, and cost-effective magnetic bearing systems.
    *   **Passive Magnetic Bearings:** Exploring designs that require less active control.
*   **Motor/Generator and Power Electronics:**
    *   **Higher Efficiency:** Development of more efficient motor/generator designs and power electronics for reduced losses.
    *   **Integration:** More compact and integrated PCS solutions.
*   **Modularization:** Creating modular FESS that can be scaled to meet different power and energy requirements.
*   **Cost Reduction:** Efforts to reduce the cost of manufacturing and components to make flywheels more competitive.
*   **Hybrid Storage Systems:** Combining flywheels with other storage technologies (e.g., batteries) to leverage the strengths of each for optimized performance. For example, a flywheel for rapid power response and a battery for longer-duration energy buffering.

**Content from Textbooks/References:**

*   **Díaz-González, Sumper, Gomis-Bellmunt (2016):** This textbook, being more recent, is likely to cover these advanced designs and future trends in detail.
*   **Ter-Gazarian (2011):** Might offer a foundation on which these future trends are built, discussing the basic principles that newer designs aim to improve.
*   **Rastler (2010):** May offer insights into the market drivers and challenges that are pushing for these technological advancements.

**Important Points to Remember:**
*   The future of flywheels involves improving energy density, reducing costs, and enhancing integration.
*   Hybrid systems are a key area of development to overcome inherent limitations.

---

### 8. Practice Questions and Answers

**Question 1:**
What is the primary factor that determines the amount of kinetic energy a flywheel can store, besides its mass?
a) Its diameter
b) Its rotational speed
c) Its shape
d) The type of bearings used

**Answer:**
b) Its rotational speed. The energy stored is proportional to the square of the rotational speed ($KE = \frac{1}{2} I \omega^2$).

**Question 2:**
Which of the following is a significant advantage of flywheels compared to electrochemical batteries for energy storage?
a) Higher energy density
b) Longer operational duration
c) Longer cycle life
d) Lower self-discharge rate when operating

**Answer:**
c) Longer cycle life. Flywheels do not suffer from chemical degradation associated with repeated charge/discharge cycles like batteries do.

**Question 3:**
Name two key components of a Flywheel Energy Storage System (FESS) that are crucial for minimizing energy losses during operation.

**Answer:**
Two key components are:
1.  **Vacuum Enclosure:** Minimizes aerodynamic drag losses.
2.  **Magnetic Bearings:** Minimize friction losses compared to mechanical bearings, especially at high speeds.

**Question 4:**
Explain why flywheels are well-suited for grid stabilization applications.

**Answer:**
Flywheels are well-suited for grid stabilization due to their very fast response time (milliseconds) and high power capability. They can rapidly inject or absorb power to counteract frequency deviations or voltage fluctuations, helping to maintain grid stability. Their long cycle life also makes them reliable for frequent grid service operations.

**Question 5:**
A flywheel has a moment of inertia $I$ and is spinning at an angular velocity $\omega$. If the angular velocity is doubled to $2\omega$, what happens to the stored kinetic energy?

**Answer:**
The stored kinetic energy will be quadrupled.
Original KE: $KE_1 = \frac{1}{2} I \omega^2$
New KE: $KE_2 = \frac{1}{2} I (2\omega)^2 = \frac{1}{2} I (4\omega^2) = 4 \times (\frac{1}{2} I \omega^2) = 4 \times KE_1$.

**Question 6:**
Provide an example of a renewable energy integration challenge that a flywheel can help address.

**Answer:**
Flywheels can help address the challenge of **intermittency** in renewable energy sources like wind and solar. For instance, if a sudden gust of wind causes a rapid increase in wind turbine power output, a flywheel can absorb this excess energy to prevent overloading the grid. Conversely, if the wind suddenly drops, the flywheel can release stored energy to smooth out the power delivery.

---

### 9. Summary of Key Takeaways

*   **Definition:** Flywheels store energy kinetically through rotation.
*   **Energy Storage:** $KE = \frac{1}{2} I \omega^2$. Storage is proportional to moment of inertia ($I$) and the square of angular velocity ($\omega$).
*   **Components:** Rotor, bearings (often magnetic), vacuum enclosure, motor/generator, power conversion system (PCS).
*   **Performance:** High power density, fast response time, long cycle life, but lower energy density.
*   **Applications:** UPS, grid stabilization, renewable smoothing, EV acceleration bursts, industrial power quality.
*   **Advantages:** Speed, cycle life, efficiency.
*   **Disadvantages:** Energy density, cost, self-discharge when running.
*   **Future:** Advanced materials, better bearings, integration, cost reduction, hybrid systems.

---

This concludes the study notes for Flywheel Energy Storage Systems. Remember to refer to the provided textbooks and reference materials for more in-depth understanding and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
