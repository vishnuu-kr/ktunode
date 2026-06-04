---
title: "Basic aircraft performance terminology( flight in the horizontal and vertical planes)"
subject: "AIRCRAFT DESIGN"
module: "Module 2: Basic aircraft terminology and conventions"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464629"
status: "completed"
scrapedAt: "2026-05-20T18:19:43.400Z"
---
# Aircraft Design: Module 2 - Basic Aircraft Terminology and Conventions

## Topic: Basic Aircraft Performance Terminology (Flight in the Horizontal and Vertical Planes)

This module focuses on understanding fundamental terms and concepts related to aircraft performance, specifically how aircraft move and operate in both horizontal and vertical directions. This knowledge is crucial for making informed decisions throughout the aircraft design cycle, from conceptualization to detailed design, and for calculating performance characteristics.

**Relevant Course Outcomes:**

*   **CO1:** To make the required decisions during the total design cycle of an aircraft including conceptual, preliminary and detailed design (Knowledge Level: K2)
*   **CO3:** To be able to calculate the performance characteristics of aircraft (Knowledge Level: K2)

---

### 1. Introduction to Aircraft Performance

Aircraft performance refers to how well an aircraft can fly and achieve its mission objectives. It encompasses various aspects like speed, altitude, range, endurance, maneuverability, and efficiency. Understanding these performance characteristics is essential for designing an aircraft that meets its intended purpose.

**Key Concept:** **Performance Metrics** are quantifiable measures that describe an aircraft's capabilities and limitations.

**Reference:**
*   **Raymer, "Aircraft Design: A Conceptual Approach"**: Emphasizes the importance of performance in the early conceptual design phase, guiding trade-offs between different design parameters.
*   **Eshelby, "Aircraft Performance"**: Provides a detailed mathematical framework for analyzing various performance aspects.

---

### 2. Flight in the Horizontal Plane

Flight in the horizontal plane primarily deals with the aircraft's movement across the ground and its ability to change direction laterally.

#### 2.1. Velocity

*   **Definition:** Velocity is the rate of change of an object's position with respect to time, including both speed and direction. In aviation, it's often broken down into different components.

*   **Key Terms:**
    *   **Airspeed:** The speed of the aircraft relative to the air it is flying through. This is the primary measure of how fast the aircraft's wings are moving through the air to generate lift.
        *   **Indicated Airspeed (IAS):** The airspeed read directly from the airspeed indicator. It's affected by instrument errors and installation effects.
        *   **Calibrated Airspeed (CAS):** IAS corrected for instrument and position errors.
        *   **Equivalent Airspeed (EAS):** CAS corrected for compressibility effects at higher speeds.
        *   **True Airspeed (TAS):** EAS corrected for air density variations with altitude and temperature. This is the actual speed of the aircraft relative to the air mass.

    *   **Groundspeed (GS):** The speed of the aircraft relative to the ground. It is TAS adjusted for the effect of wind.
        *   **GS = TAS + Wind Component** (where the wind component is positive for a tailwind and negative for a headwind).

*   **Example:** An aircraft has a TAS of 300 knots. If it encounters a headwind of 50 knots, its groundspeed will be 300 - 50 = 250 knots. If it encounters a tailwind of 50 knots, its groundspeed will be 300 + 50 = 350 knots.

*   **Important Point to Remember:** Airspeed is what drives lift, while groundspeed is what determines how quickly you cover distance over the ground.

**Reference:**
*   **Eshelby, "Aircraft Performance"**: Provides detailed equations for converting between different airspeed definitions and calculating groundspeed.
*   **Fielding, "Introduction to Aircraft Design"**: Explains the practical implications of airspeed and groundspeed in flight planning.

#### 2.2. Turning

*   **Definition:** Turning is the process of changing the aircraft's direction of flight in the horizontal plane.

*   **Key Concepts:**
    *   **Bank Angle ($\phi$):** The angle at which the aircraft's wings are tilted relative to the horizon. Ailerons are used to induce this bank.
    *   **Load Factor (n):** The ratio of the total aerodynamic force (lift) acting on the aircraft to its weight. In a level turn, the vertical component of lift balances the weight, and the horizontal component provides the centripetal force for the turn.
        *   **n = L/W** (where L is lift and W is weight)
        *   In a coordinated turn, the load factor is related to the bank angle by: **n = 1 / cos($\phi$)**
    *   **Rate of Turn:** The angular velocity at which the aircraft changes its heading. This is influenced by bank angle and airspeed.
    *   **Radius of Turn:** The radius of the circular path the aircraft follows during a turn. This is also influenced by bank angle and airspeed.
        *   **Radius of Turn (R) = (TAS²)/(g * tan($\phi$))** (where g is acceleration due to gravity)

*   **Example:** To achieve a load factor of 2 (e.g., during aggressive maneuvering or in turbulence), the aircraft needs to be banked at an angle where cos($\phi$) = 1/2, which means $\phi$ = 60 degrees.

*   **Important Point to Remember:** To turn, the pilot must bank the aircraft. The tighter the turn (smaller radius) for a given airspeed, the greater the bank angle and thus the higher the load factor experienced by the aircraft and its occupants.

**Reference:**
*   **Eshelby, "Aircraft Performance"**: Provides the mathematical basis for understanding turning dynamics, including the relationship between bank angle, load factor, rate of turn, and radius of turn.
*   **Raymer, "Aircraft Design: A Conceptual Approach"**: Discusses the impact of turning performance on mission requirements and aircraft design trade-offs.

---

### 3. Flight in the Vertical Plane

Flight in the vertical plane deals with the aircraft's ascent, descent, and level flight, as well as its speed and altitude control.

#### 3.1. Altitude

*   **Definition:** Altitude is the vertical distance of the aircraft above a reference point, usually sea level or the ground.

*   **Key Terms:**
    *   **True Altitude:** The actual vertical distance above mean sea level (MSL).
    *   **Pressure Altitude:** The altitude indicated when the altimeter is set to standard atmospheric pressure (1013.25 hPa or 29.92 inHg). It's used for performance calculations at higher altitudes.
    *   **Density Altitude:** Pressure altitude corrected for non-standard temperature. It's a measure of how the aircraft will perform, as air density affects engine power and aerodynamic forces. Higher density altitude means poorer performance.
    *   **Above Ground Level (AGL):** The vertical distance above the surface directly beneath the aircraft. This is important for terrain clearance.

*   **Example:** An aircraft flying at 10,000 feet MSL might have a different AGL depending on the terrain elevation below it.

*   **Important Point to Remember:** Density altitude is a critical parameter for performance, especially in hot or high-altitude conditions.

**Reference:**
*   **Eshelby, "Aircraft Performance"**: Explains the concepts of atmospheric pressure and temperature and their impact on altitude definitions and aircraft performance.
*   **Fielding, "Introduction to Aircraft Design"**: Discusses altitude considerations for operational envelopes and design requirements.

#### 3.2. Climb

*   **Definition:** Climb is the process of increasing the aircraft's altitude.

*   **Key Concepts:**
    *   **Rate of Climb (ROC):** The vertical speed at which the aircraft is gaining altitude (e.g., feet per minute or meters per second).
    *   **Angle of Climb ($\gamma$):** The angle between the flight path and the horizontal plane.
    *   **Climb Performance:** The ability of an aircraft to climb, often expressed as the maximum ROC or the angle of climb achievable at a given speed and altitude.
    *   **Thrust Available (T_a):** The total thrust produced by the engines.
    *   **Thrust Required (T_r):** The thrust needed to overcome drag and maintain a given flight condition.
    *   **Excess Thrust:** The difference between Thrust Available and Thrust Required ($T_e = T_a - T_r$). This excess thrust is converted into an increase in potential energy (altitude) or kinetic energy (airspeed).

*   **Climb Equation (Simplified):**
    *   $T_e = W \sin(\gamma) + D \sin(\gamma)$  (where D is drag)
    *   Assuming a small angle of climb ($\sin(\gamma) \approx \gamma$ in radians), and $T_e \approx$ Power Available - Power Required:
    *   $T_e = W \sin(\gamma) \approx W \gamma$
    *   $ROC = V_y = TAS \sin(\gamma) = TAS \times (T_e / W)$

*   **Example:** If an aircraft has excess thrust that allows it to climb at a specific airspeed, the rate of climb will be proportional to that airspeed and the fraction of excess thrust relative to weight.

*   **Important Point to Remember:** For a given aircraft, climb performance is highly dependent on airspeed, altitude, and engine power settings. Optimal climb speed is usually chosen to maximize the rate of climb or the angle of climb, depending on the mission.

**Reference:**
*   **Eshelby, "Aircraft Performance"**: Provides detailed derivations of climb performance equations and discusses factors affecting climb rate.
*   **Raymer, "Aircraft Design: A Conceptual Approach"**: Covers climb performance requirements and how they influence engine selection and wing design.

#### 3.3. Descent

*   **Definition:** Descent is the process of decreasing the aircraft's altitude.

*   **Key Concepts:**
    *   **Rate of Descent (ROD):** The vertical speed at which the aircraft is losing altitude (e.g., feet per minute or meters per second).
    *   **Angle of Descent ($\gamma_d$):** The angle between the flight path and the horizontal plane (negative in descent).
    *   **Descent Performance:** The ability of an aircraft to descend, often characterized by the rate of descent and the glide ratio.
    *   **Excess Power (descent):** In a normal descent (without power), the aircraft is essentially using gravity to overcome drag. Excess power is negative, meaning the component of weight acting along the flight path is less than the drag.

*   **Descent Equation (Simplified, Power Off):**
    *   The aircraft's glide path is established when the component of weight along the flight path balances the drag.
    *   $W \sin(\gamma_d) = D$
    *   For small angles, $W \gamma_d \approx D$.
    *   $ROD = -V_y = TAS \sin(\gamma_d) \approx TAS \times (D / W)$
    *   This implies that ROD is proportional to TAS and the lift-to-drag ratio (L/D), where L=W in a glide. Thus, $ROD \approx TAS / (L/D)_{glide}$.

*   **Example:** An aircraft descending at a constant speed will have a constant rate of descent if the glide ratio is constant. A higher glide ratio (more efficient glide) results in a lower rate of descent for the same speed.

*   **Important Point to Remember:** Descent can be performed with or without engine power. Power-off descents are critical for emergency procedures and fuel efficiency. Descent performance is primarily governed by the aircraft's aerodynamic efficiency (lift-to-drag ratio) and airspeed.

**Reference:**
*   **Eshelby, "Aircraft Performance"**: Details the physics of descent and power-off glides.
*   **Fielding, "Introduction to Aircraft Design"**: Discusses descent profiles for efficiency and air traffic control compliance.

#### 3.4. Level Flight

*   **Definition:** Level flight is sustained flight at a constant altitude and constant airspeed.

*   **Key Concepts:**
    *   **Thrust = Drag (T = D):** For the aircraft to maintain constant speed in level flight, the thrust generated by the engines must equal the total aerodynamic drag.
    *   **Lift = Weight (L = W):** For the aircraft to maintain a constant altitude, the total aerodynamic lift must equal the aircraft's weight.
    *   **Specific Range (SR):** The distance an aircraft can travel per unit of fuel consumed. It is related to airspeed, lift-to-drag ratio, and engine fuel efficiency. $SR = V / (TSFC \times (T/W))$ or $SR = V \times (L/D) / (TSFC \times W)$, where TSFC is Thrust Specific Fuel Consumption. Maximizing SR typically involves flying at a speed that maximizes $(L/D) / V$.
    *   **Endurance:** The total time an aircraft can remain airborne. It is related to fuel capacity, engine fuel efficiency, and the power setting. Maximum endurance is typically achieved at a speed that minimizes power required (or maximizes $(L/D)^{3/2} / D$).

*   **Example:** To maintain level flight at Mach 0.8, the engines must produce enough thrust to overcome the drag at that speed, and the wings must generate enough lift to equal the aircraft's weight.

*   **Important Point to Remember:** Level flight is the baseline for many performance calculations. The balance between thrust and drag, and lift and weight, dictates the aircraft's ability to sustain level flight and its efficiency in doing so.

**Reference:**
*   **Eshelby, "Aircraft Performance"**: Provides in-depth analysis of level flight performance, including range and endurance calculations.
*   **Raymer, "Aircraft Design: A Conceptual Approach"**: Discusses how design choices influence level flight characteristics like range and endurance, which are key mission requirements.
*   **Booth, "Aircraft Engineering Design, Structures and Systems"**: Might touch upon the structural loads experienced during level flight and their implications.

---

### 4. Forces and Their Effects in Flight

Understanding the fundamental forces acting on an aircraft is crucial for comprehending its performance in both horizontal and vertical planes.

*   **Lift (L):** The aerodynamic force that opposes weight and keeps the aircraft airborne. It is generated by the difference in air pressure above and below the wings.
*   **Weight (W):** The force of gravity acting on the aircraft.
*   **Thrust (T):** The force generated by the engines that propels the aircraft forward.
*   **Drag (D):** The aerodynamic force that opposes motion through the air.

**Newton's Laws of Motion are fundamental:**
*   **First Law (Inertia):** An object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force. This applies to maintaining constant speed and altitude in level flight.
*   **Second Law (F=ma):** The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. This explains how excess thrust causes acceleration (change in airspeed) and excess lift causes a climb.
*   **Third Law (Action-Reaction):** For every action, there is an equal and opposite reaction. This underlies how engines produce thrust.

---

### 5. Practice Questions and Exercises

**Question 1:**
An aircraft has a True Airspeed (TAS) of 400 knots. If it encounters a 30-knot crosswind from the left, what is its groundspeed? (Assume no headwind or tailwind component).

**Answer 1:**
The groundspeed is not directly affected by a pure crosswind in terms of its magnitude when only considering the TAS. The crosswind primarily affects the aircraft's track over the ground and requires the pilot to use aileron and rudder to maintain a desired heading. If the question implies a direct calculation of magnitude without considering drift correction, the groundspeed magnitude would remain close to the TAS magnitude if the crosswind component is zero relative to the direction of flight. However, in a practical sense, to maintain a straight track *over the ground*, the pilot would need to angle the aircraft into the wind (crab), which would slightly alter the true airspeed for a given groundspeed. **Assuming the question is asking for the groundspeed magnitude if the aircraft were flying directly into the wind with no other components, the groundspeed would be 400 knots.** (Clarification: If the crosswind component is purely lateral, it does not directly change the magnitude of the groundspeed relative to the TAS if the aircraft is not correcting for it. If the question implies a correctable track, the situation becomes more complex involving vector addition. For this basic terminology, it's often assumed that groundspeed is TAS +/- head/tailwind component).

**Question 2:**
During a coordinated turn, an aircraft is banked at 45 degrees. Calculate the load factor experienced by the occupants.

**Answer 2:**
The load factor (n) is given by $n = 1 / \cos(\phi)$, where $\phi$ is the bank angle.
For $\phi = 45$ degrees, $\cos(45^\circ) \approx 0.707$.
$n = 1 / 0.707 \approx 1.414$.
The load factor is approximately 1.414g.

**Question 3:**
An aircraft with a lift-to-drag ratio (L/D) of 15 is gliding at a true airspeed of 120 knots. What is its approximate rate of descent?

**Answer 3:**
For a power-off glide, the rate of descent (ROD) can be approximated by:
$ROD \approx TAS / (L/D)$
$ROD \approx 120 \text{ knots} / 15$
$ROD \approx 8 \text{ knots}$
To convert knots to feet per minute (fpm):
$8 \text{ knots} \times 6076.12 \text{ ft/nautical mile} / 60 \text{ min/hour} \approx 810 \text{ fpm}$.
The approximate rate of descent is 810 fpm.

**Question 4:**
In level flight, what are the primary force balances that must be maintained?

**Answer 4:**
In steady, unaccelerated level flight, the primary force balances are:
*   **Lift (L) = Weight (W)**
*   **Thrust (T) = Drag (D)**

**Question 5:**
Explain the difference between Indicated Airspeed (IAS) and True Airspeed (TAS). Why is TAS more relevant for aerodynamic performance calculations?

**Answer 5:**
*   **Indicated Airspeed (IAS):** The speed directly read from the airspeed indicator. It's based on the dynamic pressure measured by the pitot-static system. IAS is affected by errors in the instruments and the airflow around the aircraft.
*   **True Airspeed (TAS):** The actual speed of the aircraft relative to the air mass. It's IAS corrected for instrument errors, position errors, compressibility effects, and air density variations (altitude and temperature).

TAS is more relevant for aerodynamic performance calculations because aerodynamic forces (like lift and drag) are directly proportional to the density of the air and the square of the TAS. Engine thrust is also related to TAS. Therefore, TAS provides the true measure of how the aircraft is interacting with the air.

---

### 6. Important Points to Remember

*   **Airspeed vs. Groundspeed:** Airspeed is crucial for aerodynamics (lift, stall), while groundspeed dictates travel time and distance covered over the ground.
*   **Turning Load Factor:** Banking an aircraft increases the load factor, which is directly related to the bank angle. Higher load factors increase structural stress and stall speed.
*   **Density Altitude:** A critical factor affecting engine power and aerodynamic performance; it's not just about how high you are, but how dense the air is at that altitude (due to temperature and pressure).
*   **Thrust and Drag Balance:** Essential for maintaining level flight or accelerating/decelerating.
*   **Lift and Weight Balance:** Essential for maintaining altitude.
*   **Range and Endurance:** Key performance metrics influenced by the balance of forces and engine efficiency.

---

### 7. Self-Assessment and Application (Connecting to Course Outcomes)

*   **CO1:** How would understanding these basic performance terms influence your decisions during the conceptual design phase of a new aircraft? For example, how might the required climb performance affect your choice of engines or wing loading?
*   **CO3:** Practice deriving or recalling the basic equations for rate of climb and rate of descent. Consider how changes in airspeed or engine thrust would affect these values.

---

This concludes the notes for Basic Aircraft Performance Terminology (Flight in the Horizontal and Vertical Planes). A solid understanding of these concepts is foundational for all subsequent modules in Aircraft Design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
