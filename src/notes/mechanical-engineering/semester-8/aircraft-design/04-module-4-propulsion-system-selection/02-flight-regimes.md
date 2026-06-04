---
title: "Flight regimes"
subject: "AIRCRAFT DESIGN"
module: "Module 4: Propulsion system selection"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446463a"
status: "completed"
scrapedAt: "2026-05-20T18:19:54.064Z"
---
## Aircraft Design: Module 4 - Propulsion System Selection

### Topic: Flight Regimes

**Knowledge Level:** K2 (Understanding and Distinction)

**Course Outcomes Addressed:**

*   **CO1:** To make the required decisions during the total design cycle of an aircraft including conceptual, preliminary and detailed design. (Understanding flight regimes is crucial for making informed propulsion selection decisions in all design phases.)
*   **CO2:** To distinguish and understand the design phases of an aircraft. (Flight regimes influence the design considerations at different phases.)
*   **CO3:** To be able to calculate the performance characteristics of aircraft. (Propulsion requirements are directly linked to flight regimes and performance.)
*   **CO4:** To evaluate and understand layout design of different aircrafts. (The choice of propulsion system, influenced by flight regimes, impacts aircraft layout.)

---

### 1. Introduction to Flight Regimes

Understanding the intended **flight regime** of an aircraft is fundamental to selecting the appropriate propulsion system. A flight regime is defined by the combination of:

*   **Speed:** The aircraft's velocity relative to the air.
*   **Altitude:** The aircraft's height above sea level or the Earth's surface.
*   **Mach Number:** The ratio of the aircraft's speed to the speed of sound.
*   **Operating Environment:** Factors like air density, temperature, and atmospheric conditions.

The propulsion system must be capable of providing the necessary thrust to overcome drag and achieve the desired performance within these defined flight conditions.

---

### 2. Key Flight Regime Classifications

Aircraft are typically designed to operate within specific flight regimes, and this dictates the type and characteristics of the propulsion system. We can broadly categorize flight regimes based on Mach number:

#### 2.1. Subsonic Flight Regime (Mach < 1.0)

This is the most common flight regime for a vast majority of aircraft.

*   **Characteristics:**
    *   Airflow over the aircraft surfaces remains below the speed of sound.
    *   Air can be considered incompressible for many initial design calculations, though compressibility effects become significant as Mach number approaches 0.7-0.8.
    *   Drag increases gradually with increasing speed.
*   **Sub-Regimes within Subsonic:**
    *   **Low Speed Subsonic (Mach < 0.3):** Typical for general aviation, trainers, helicopters, and VTOL aircraft during takeoff and landing.
        *   **Propulsion Needs:** Low thrust, high propulsive efficiency is key for fuel economy.
        *   **Examples:** Piston engines with propellers, turboshaft engines with rotors.
    *   **Medium Speed Subsonic (Mach 0.3 - 0.7):** Common for airliners, business jets, and transport aircraft.
        *   **Propulsion Needs:** Balance of thrust, fuel efficiency, and engine weight.
        *   **Examples:** Turbofan engines with medium bypass ratios.
    *   **High Speed Subsonic (Mach 0.7 - 0.95):** Experienced by high-performance airliners and business jets during cruise.
        *   **Propulsion Needs:** High thrust-to-weight ratio, good fuel efficiency at cruise Mach.
        *   **Examples:** Turbofan engines with high bypass ratios.

*   **Propulsion System Considerations (Subsonic):**
    *   **Propellers:** Highly efficient at lower speeds, but performance degrades significantly at higher subsonic speeds due to tip speed approaching Mach 1.
    *   **Turbofan Engines:** Dominant propulsion for most subsonic aircraft.
        *   **Bypass Ratio:** Crucial parameter. High bypass ratios (e.g., 5:1 and above) offer better fuel efficiency and lower noise at subsonic speeds. Low bypass ratios are more suitable for higher speeds within the subsonic regime.
        *   **Thrust Specific Fuel Consumption (TSFC):** A key metric for fuel efficiency, lower TSFC is desirable.

**Reference (Raymer):** Chapter 10, "Propulsion," discusses the characteristics of turbofan engines and their suitability for subsonic flight based on bypass ratio and cruise Mach number.

---

#### 2.2. Transonic Flight Regime (Mach 0.8 - 1.2)

This regime is characterized by the presence of both subsonic and supersonic airflow over different parts of the aircraft.

*   **Characteristics:**
    *   Airflow over the wing surfaces can accelerate to supersonic speeds even though the aircraft's overall Mach number is subsonic or slightly supersonic.
    *   Formation of shock waves on the wing surfaces, leading to a rapid increase in drag (drag divergence).
    *   Significant changes in aerodynamic forces and moments.
*   **Propulsion Needs:**
    *   Engines must be able to produce sufficient thrust to overcome the high drag.
    *   Engine performance should be relatively stable across the subsonic-supersonic transition.
*   **Propulsion System Considerations (Transonic):**
    *   **Low Bypass Turbofan Engines:** Generally suitable for transonic flight due to their ability to generate high thrust at higher speeds.
    *   **Turbojet Engines:** Historically used for early supersonic aircraft and still relevant for some high-speed applications. They offer good performance at high speeds but are less fuel-efficient at lower speeds and noisier.
    *   **Variable Geometry Inlets:** Often required to efficiently manage airflow into the engine at transonic speeds where shock waves can cause flow separation.

**Reference (Eshelby):** Chapter 4, "Aerodynamic Forces and Moments," explains the concept of drag divergence and its implications for aircraft performance in the transonic regime.

---

#### 2.3. Supersonic Flight Regime (Mach > 1.0)

Aircraft designed to operate at speeds greater than the speed of sound.

*   **Characteristics:**
    *   The entire aircraft is moving faster than the speed of sound.
    *   Formation of shock waves around the aircraft.
    *   Significant increase in drag compared to subsonic flight.
    *   Air is highly compressible, and temperature increases due to compression.
*   **Propulsion Needs:**
    *   High thrust is essential to overcome the substantial supersonic drag.
    *   Engines must be designed for high-speed operation and efficient performance in the rarefied atmosphere at high altitudes.
*   **Propulsion System Considerations (Supersonic):**
    *   **Turbojet Engines:** Provide excellent performance at supersonic speeds due to their efficient operation at high Mach numbers. However, they are inefficient at subsonic speeds and very noisy.
    *   **Low Bypass Turbofan Engines:** Can be used for supersonic aircraft, but their efficiency is lower than turbojets at very high Mach numbers.
    *   **Afterburners:** Often incorporated into turbojet or low bypass turbofan engines to significantly increase thrust for short periods, crucial for acceleration to supersonic speeds and combat maneuvers.
    *   **Variable Geometry Inlets and Nozzles:** Critical for optimizing engine performance across a range of supersonic speeds by managing airflow and exhaust velocity.

**Reference (Raymer):** Chapter 10, "Propulsion," details the operating principles and characteristics of turbojet engines and their application in supersonic aircraft.

---

#### 2.4. Hypersonic Flight Regime (Mach > 5.0)

Aircraft operating at speeds significantly exceeding the speed of sound, where aerodynamic heating becomes a major design consideration.

*   **Characteristics:**
    *   Extreme aerodynamic heating due to air friction and compression.
    *   Air ionization can occur.
    *   Drag is extremely high.
    *   Relatively rarefied atmosphere at the altitudes where hypersonic flight is typically achieved.
*   **Propulsion Needs:**
    *   Highly specialized propulsion systems capable of operating in extreme conditions.
    *   Requires very high thrust and efficiency.
*   **Propulsion System Considerations (Hypersonic):**
    *   **Ramjets:** Air-breathing jet engines that use the forward motion of the aircraft to compress incoming air without a rotary compressor. They are efficient at high Mach numbers (Mach 2-5) but cannot produce static thrust.
    *   **Scramjets (Supersonic Combustion Ramjets):** A type of ramjet where combustion occurs in supersonic airflow. They are designed for very high Mach numbers (Mach 5+). Scramjets are experimental and have not yet been widely implemented.
    *   **Rocket Engines:** Not air-breathing and carry their own oxidizer, making them suitable for space or extremely high-speed atmospheric flight where air-breathing is not feasible.

**Reference (Fielding):** While Fielding might not delve deeply into hypersonic propulsion, the principles of aerodynamics at high speeds and the challenges of atmospheric entry (related to heating) are relevant. Raymer's later editions or more specialized texts would be more appropriate for detailed hypersonic propulsion.

---

### 3. Key Factors Influencing Flight Regime Selection for Propulsion

When selecting a propulsion system, designers must consider how it will perform across the entire intended flight envelope.

*   **Mission Profile:** What is the primary purpose of the aircraft? (e.g., long-range transport, high-speed interceptor, close air support). This dictates the typical speeds and altitudes the aircraft will operate at.
*   **Required Performance:**
    *   **Thrust:** The force needed to overcome drag and achieve desired acceleration and climb rates.
    *   **Fuel Efficiency (TSFC):** Crucial for range and endurance.
    *   **Takeoff and Landing Requirements:** Thrust needed for short field operations.
    *   **Climb Performance:** Rate of climb.
    *   **Cruise Performance:** Sustained flight at desired speed and altitude.
*   **Operating Altitude:** Air density and temperature vary significantly with altitude, affecting engine thrust and efficiency.
*   **Environmental Conditions:** Extreme temperatures or atmospheric composition can impact engine operation.
*   **Cost and Maintainability:** The complexity and reliability of the propulsion system.
*   **Noise and Emissions:** Increasingly important considerations, especially for commercial aircraft.

---

### 4. How Flight Regimes Impact Propulsion System Selection - Examples

*   **Commercial Airliner (e.g., Boeing 787):**
    *   **Flight Regime:** High speed subsonic (Mach 0.85) at high altitude (35,000 ft).
    *   **Propulsion Choice:** High bypass ratio turbofan engines. These provide excellent fuel efficiency for long-range flights and acceptable noise levels.
    *   **Why:** The high bypass ratio ensures high propulsive efficiency at cruise Mach and altitude. Lower bypass ratios would be less fuel efficient and noisier.

*   **Fighter Jet (e.g., F-22 Raptor):**
    *   **Flight Regime:** Transonic to supersonic (Mach 2+) at various altitudes, with requirements for high maneuverability and acceleration.
    *   **Propulsion Choice:** Low bypass ratio turbofan engines with afterburners.
    *   **Why:** The low bypass ratio and afterburners provide the high thrust-to-weight ratio needed for supersonic flight, acceleration, and combat maneuvers. Afterburners are crucial for achieving and sustaining supersonic speeds.

*   **Business Jet (e.g., Gulfstream G650):**
    *   **Flight Regime:** High speed subsonic (Mach 0.90+) at high altitude.
    *   **Propulsion Choice:** High bypass ratio turbofan engines, but with a lower bypass ratio than commercial airliners.
    *   **Why:** Offers a good balance of speed, range, and fuel efficiency for business travel. The slightly lower bypass ratio compared to a large airliner is optimized for higher cruise speeds.

*   **Trainer Aircraft (e.g., Cessna 172):**
    *   **Flight Regime:** Low speed subsonic (Mach 0.1 - 0.2) at low to medium altitudes.
    *   **Propulsion Choice:** Piston engine with propeller.
    *   **Why:** Highly fuel-efficient at these speeds and altitudes. The propeller is very effective at generating thrust at low speeds. Turboprops (turboshaft engines driving propellers) are also common for higher performance trainers.

---

### 5. Key Points to Remember

*   **Flight regime is not a single point but an envelope:** Aircraft are designed to operate efficiently within a range of speeds and altitudes.
*   **Propulsion system selection is a trade-off:** No single propulsion system is optimal for all flight regimes.
*   **Mach number is a critical parameter:** It dictates aerodynamic behavior and influences engine performance significantly.
*   **Altitude affects air density and temperature:** These directly impact engine thrust and efficiency.
*   **Bypass ratio is a key differentiator for turbofan engines:** Higher bypass ratios for subsonic efficiency, lower for supersonic performance.
*   **Afterburners are for high-thrust, short-duration demands:** Essential for supersonic acceleration and combat.
*   **Variable geometry is crucial for engines operating across multiple regimes:** It optimizes airflow and exhaust for different conditions.

---

### 6. Practice Questions and Exercises

**Question 1 (CO1, CO3):**
An aircraft designer is considering two propulsion options for a new long-range passenger aircraft:
Option A: High bypass ratio turbofan (BPR = 9:1)
Option B: Low bypass ratio turbofan (BPR = 1.5:1)

The intended flight regime is predominantly high-speed subsonic cruise (Mach 0.85 at 35,000 ft).

**(a)** Which propulsion option is likely to be more suitable and why?
**(b)** What key performance metric would you use to compare the fuel efficiency of these two options for this mission?
**(c)** If the aircraft also needed to perform short bursts of supersonic flight, how might this change your preference or introduce additional requirements?

**Answer 1:**
**(a)** Option A (High bypass ratio turbofan) is likely to be more suitable. High bypass ratio engines are significantly more fuel-efficient at subsonic cruise speeds due to their higher propulsive efficiency at these conditions. They also tend to be quieter.
**(b)** The key performance metric to compare fuel efficiency would be **Thrust Specific Fuel Consumption (TSFC)**. A lower TSFC indicates better fuel efficiency.
**(c)** If the aircraft needed supersonic capability, Option B (Low bypass ratio turbofan) would become more attractive. However, for sustained supersonic flight, a turbojet or a low bypass turbofan with an afterburner would be necessary. The need for supersonic flight would likely require a different engine choice or a more complex engine design with variable geometry and afterburning capabilities, significantly impacting weight, complexity, and cost.

---

**Question 2 (CO2, CO4):**
Distinguish between the primary propulsion system considerations for an aircraft designed for:
**(a)** Low-speed tactical reconnaissance (e.g., operating at low altitudes and speeds < Mach 0.5).
**(b)** High-speed interceptor (e.g., operating at high altitudes and speeds > Mach 2).

**Answer 2:**
**(a)** For low-speed tactical reconnaissance, the primary considerations for propulsion would be:
    *   **Fuel Efficiency:** Long endurance is often critical for reconnaissance missions.
    *   **Low Speed Performance:** High propulsive efficiency at low speeds is paramount.
    *   **Low Observable Characteristics:** Stealth might be a consideration, influencing engine inlet and exhaust design.
    *   **Propulsion Choice:** Turboprop or low-bypass turbofan engines are typically suitable. Propellers offer excellent efficiency at very low speeds.

**(b)** For a high-speed interceptor, the primary considerations would be:
    *   **High Thrust-to-Weight Ratio:** Essential for rapid acceleration and climb to engage targets.
    *   **Supersonic Performance:** Ability to achieve and sustain speeds above Mach 2.
    *   **Afterburning Capability:** Crucial for high-thrust demands during acceleration and combat.
    *   **High-Altitude Performance:** Efficient operation in the thin air at high altitudes.
    *   **Propulsion Choice:** Turbojet engines or low-bypass turbofan engines with afterburners are the standard choices. Variable geometry inlets and nozzles are typically required.

---

**Question 3 (CO1, CO3):**
A small unmanned aerial vehicle (UAV) is being designed for aerial surveillance at an altitude of 10,000 ft and a cruise speed of Mach 0.4.

**(a)** What type of engine would you recommend? Justify your choice based on flight regime.
**(b)** What are the potential advantages and disadvantages of using a propeller-driven system compared to a small jet engine (e.g., turbojet or small turbofan) for this UAV?

**Answer 3:**
**(a)** For a UAV operating at Mach 0.4 and 10,000 ft, a **turboprop engine** or a **small, low-bypass turbofan engine** would be suitable.
    *   **Turboprop:** Offers excellent fuel efficiency at these moderate speeds and altitudes, providing good endurance for surveillance. The propeller is efficient at generating thrust at Mach 0.4.
    *   **Small Turbofan:** Can also be used, providing a simpler airframe integration and potentially higher top speed if required, but might be less fuel-efficient than a turboprop at this specific cruise condition.
    *   **Justification:** The flight regime is high-subsonic, where propulsive efficiency is key. Turboprops excel in this area.

**(b)**
    *   **Propeller-Driven System (Turboprop):**
        *   **Advantages:** Higher propulsive efficiency and better fuel economy at subsonic speeds (especially below Mach 0.5). Potentially lower initial cost and simpler operation compared to small jet engines. Quieter operation.
        *   **Disadvantages:** Propeller tip speed limitations at higher speeds, reducing efficiency as Mach approaches 0.7. Can be more complex mechanically (gearbox, propeller pitch control). May require larger nacelles.
    *   **Small Jet Engine (Turbojet/Small Turbofan):**
        *   **Advantages:** Simpler airframe integration, can achieve higher speeds more easily. Generally more compact.
        *   **Disadvantages:** Less fuel-efficient at low subsonic speeds and altitudes compared to turboprops. Higher noise levels. Turbojets lack the bypass air which improves efficiency. Small turbofans can be less efficient than turboprops at lower Mach numbers.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
