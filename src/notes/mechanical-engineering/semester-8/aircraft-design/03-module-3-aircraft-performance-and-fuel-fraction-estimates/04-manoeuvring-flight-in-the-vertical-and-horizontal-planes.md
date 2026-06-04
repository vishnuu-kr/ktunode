---
title: "Manoeuvring flight in the vertical and horizontal planes"
subject: "AIRCRAFT DESIGN"
module: "Module 3: Aircraft performance and fuel fraction estimates"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464633"
status: "completed"
scrapedAt: "2026-05-20T18:19:49.709Z"
---
# Aircraft Design: Module 3 - Aircraft Performance and Fuel Fraction Estimates

## Topic: Manoeuvring Flight in the Vertical and Horizontal Planes

### Learning Outcomes:

*   **Understand the fundamental principles of aircraft manoeuvring.**
*   **Analyze the forces and moments acting on an aircraft during vertical plane manoeuvres.**
*   **Analyze the forces and moments acting on an aircraft during horizontal plane manoeuvres.**
*   **Calculate the performance limitations imposed by manoeuvring requirements.**
*   **Relate manoeuvring requirements to aircraft design decisions.**

### Course Outcomes Alignment:

*   **CO1 (K2):** This topic directly contributes to making informed decisions during the design cycle by understanding how manoeuvring requirements influence structural design (e.g., wing loading) and performance specifications.
*   **CO3 (K2):** This topic focuses on calculating performance characteristics, specifically in the context of how an aircraft handles during various manoeuvres.
*   **CO4 (K2):** Understanding manoeuvre capabilities helps evaluate and compare the layout and design of different aircraft types based on their intended roles (e.g., fighter jets vs. commercial airliners).

---

### 1. Introduction to Manoeuvring Flight

Manoeuvring flight refers to any deviation from straight and level flight, involving changes in the aircraft's velocity vector. This is crucial for fulfilling operational requirements, such as:

*   **Evasion:** Avoiding threats or obstacles.
*   **Pursuit:** Tracking targets.
*   **Navigation:** Following a desired flight path, especially in turbulent conditions or around navigational waypoints.
*   **Landing and Takeoff:** Controlling the aircraft's path and speed.
*   **Combat:** Engaging in aerial warfare.

**Key Concept:** During manoeuvres, the aircraft's acceleration is not zero, meaning the forces acting on it are not in equilibrium.

**Important Point to Remember:** The ability of an aircraft to manoeuvre is a critical design consideration, particularly for military aircraft, but also important for commercial aviation safety and efficiency (e.g., avoiding weather).

---

### 2. Manoeuvring in the Vertical Plane

Vertical plane manoeuvres primarily involve changes in altitude and/or speed, resulting in pitch and/or vertical velocity changes. Common examples include:

*   **Climbing:** Increasing altitude.
*   **Descending:** Decreasing altitude.
*   **Turns:** Changing direction (though a true vertical plane turn would be a loop, which we'll address later).
*   **Pull-ups/Pushes:** Rapidly changing vertical acceleration.

#### 2.1. Forces Acting on an Aircraft in Vertical Manoeuvres

In addition to the usual forces of lift ($L$), drag ($D$), thrust ($T$), and weight ($W$), inertia forces become significant during acceleration. The equation of motion in the flight path direction is:

$T - D - W \sin(\gamma) = m \frac{dV}{dt}$

Where:
*   $T$ is Thrust
*   $D$ is Drag
*   $W$ is Weight
*   $\gamma$ is the flight path angle
*   $m$ is mass
*   $\frac{dV}{dt}$ is the rate of change of velocity along the flight path

The equation of motion perpendicular to the flight path is:

$L - W \cos(\gamma) = m a_n$

Where:
*   $L$ is Lift
*   $W$ is Weight
*   $\gamma$ is the flight path angle
*   $m$ is mass
*   $a_n$ is the centripetal acceleration (normal acceleration)

**Key Concept:** In steady, unaccelerated straight flight, $a_n = 0$, so $L = W \cos(\gamma)$. During a manoeuvre, $a_n$ is non-zero, meaning $L \neq W \cos(\gamma)$.

#### 2.2. Load Factor ($n$)

The **load factor ($n$)** is a fundamental parameter in vertical plane manoeuvres. It is defined as the ratio of the total aerodynamic lift force ($L$) to the aircraft's weight ($W$):

$n = \frac{L}{W}$

*   In **straight and level flight**, $L = W$, so $n = 1$.
*   In **steady climb or descent** with zero vertical acceleration, $L = W \cos(\gamma)$, so $n = \cos(\gamma)$. For typical climbs and descents, $\gamma$ is small, so $n$ is close to 1.
*   During **pull-ups** (increasing altitude or decreasing speed rapidly), $n > 1$. The pilot feels heavier.
*   During **pushovers** (decreasing altitude or increasing speed rapidly), $n < 1$. The pilot feels lighter.

**Relationship to Normal Acceleration:** From the perpendicular force equation:

$L - W \cos(\gamma) = m a_n$

Dividing by $W$:

$\frac{L}{W} - \cos(\gamma) = \frac{m a_n}{W} = \frac{a_n}{g}$

Since $n = L/W$:

$n - \cos(\gamma) = \frac{a_n}{g}$

Therefore, $a_n = g (n - \cos(\gamma))$. For small $\gamma$, $\cos(\gamma) \approx 1$, so $a_n \approx g(n-1)$. This means a load factor of $n=2$ corresponds to a normal acceleration of $1g$ above the normal gravitational pull.

#### 2.3. Maximum Load Factor and Maneuverability

The maximum allowable load factor ($n_{max}$) is a critical design parameter dictated by structural limits (aerodynamic surfaces and fuselage can only withstand so much stress) and passenger comfort/safety limits.

*   **Structural Limits:** Aircraft are designed to withstand a certain maximum load factor without structural failure. Exceeding this can lead to catastrophic failure.
*   **Comfort/Safety Limits:** For transport aircraft, passenger comfort typically limits $n$ to values around 1.5-2. For military aircraft, $n_{max}$ can be much higher (e.g., 7-9 Gs for fighter jets).

**Impact on Performance:** A higher $n_{max}$ allows for tighter turns and more aggressive manoeuvres.

#### 2.4. Stall and Critical Angle of Attack

A key limitation during manoeuvres is the **stall angle of attack ($\alpha_{stall}$)**. When the angle of attack exceeds $\alpha_{stall}$, the airflow separates from the upper surface of the wing, leading to a dramatic loss of lift.

**Relationship to Load Factor:**
$L = n W$
And we know $L = \frac{1}{2} \rho V^2 S C_L$, where $C_L$ is the lift coefficient.
So, $n W = \frac{1}{2} \rho V^2 S C_L$.

$n = \frac{L}{W} = \frac{\frac{1}{2} \rho V^2 S C_L}{W}$

If we consider the maximum lift coefficient achievable at a given Reynolds number ($C_{L_{max}}$), the maximum load factor that can be sustained at a certain speed is:

$n_{max} = \frac{\frac{1}{2} \rho V^2 S C_{L_{max}}}{W}$

This equation highlights that:
*   For a given aircraft (fixed $W, S, C_{L_{max}}$), the maximum achievable load factor increases with airspeed ($V$).
*   To achieve a high load factor at lower speeds, the aircraft requires a very high lift coefficient, which might be limited by the airfoil's stall characteristics.

**Raymer (2012), Chapter 10 (Performance), Section 10.3.3 (Maneuverability):** Raymer discusses concepts like sustained turn rate and instantaneous turn rate, which are directly influenced by the aircraft's ability to achieve and sustain high load factors. He emphasizes that fighter aircraft need to be able to generate high load factors at lower speeds to be effective in combat.

**Eshelby (2000), Chapter 6 (Performance in Level Flight) and Chapter 7 (Performance in Climbing and Diving Flight):** While focusing on level and climbing flight, Eshelby's principles of lift and drag are foundational. The concepts of thrust available and required, and how they relate to speed and altitude, are essential for understanding how much excess power is available to initiate or sustain a manoeuvre.

#### 2.5. Types of Vertical Manoeuvres and their Performance Implications

*   **Pull-up (e.g., loop):**
    *   To initiate a loop, the pilot pulls back on the stick, increasing the angle of attack and thus lift.
    *   This increased lift generates a normal acceleration ($a_n$), causing the flight path to curve upwards.
    *   $L = W + m a_n = W (1 + a_n/g) = n W$.
    *   The minimum speed for a loop is at the top, where $L$ is minimal and must be sufficient to keep the aircraft from falling.
    *   **Raymer:** Likely discusses g-loading and stall margins in the context of aerobatics.

*   **Sustained Turn (in the vertical plane, e.g., Immelmann turn):**
    *   Involves a combination of turning and changing altitude.
    *   Requires sufficient excess power to maintain speed while generating the necessary lift for the turn and climbing/descending.

*   **Bailout (e.g., Split-S):**
    *   A rapid descent involving a half-roll and half-loop.
    *   Requires the pilot to push the stick forward, decreasing angle of attack and lift.
    *   $L < W$, allowing gravity to assist in the descent.
    *   Load factor is typically less than 1.

---

### 3. Manoeuvring in the Horizontal Plane

Horizontal plane manoeuvres involve changes in heading, primarily through banking the aircraft. The most common horizontal manoeuvre is a **turn**.

#### 3.1. Forces Acting on an Aircraft in Horizontal Turns

When an aircraft banks, a component of the lift force is directed horizontally, providing the centripetal force needed to curve the flight path.

*   **Lift ($L$):** The total aerodynamic lift force.
*   **Weight ($W$):** Acts vertically downwards.
*   **Drag ($D$):** Acts parallel to the flight path.
*   **Thrust ($T$):** Acts parallel to the flight path.

Consider an aircraft in a banked turn with bank angle $\phi$.

*   **Vertical Equilibrium:** The vertical component of lift must balance weight:
    $L \cos(\phi) = W$

*   **Horizontal Force:** The horizontal component of lift provides the centripetal force:
    $L \sin(\phi) = m \frac{V^2}{R}$

Where:
*   $m$ is mass
*   $V$ is airspeed
*   $R$ is the radius of the turn

**Key Concept:** In a banked turn, the pilot must increase the aircraft's angle of attack (pull back on the stick) to increase the total lift ($L$) to compensate for the loss of vertical lift component due to banking.

#### 3.2. Load Factor in Horizontal Turns

From the vertical equilibrium equation ($L \cos(\phi) = W$), we can express the load factor $n$ as:

$n = \frac{L}{W} = \frac{1}{\cos(\phi)}$

This equation is critical:
*   As the bank angle $\phi$ increases, $\cos(\phi)$ decreases, and therefore the load factor $n$ increases.
*   For a bank angle of 60 degrees ($\phi = 60^\circ$), $n = 1/\cos(60^\circ) = 1/0.5 = 2$. The pilot feels twice their normal weight.
*   For a bank angle of 75 degrees ($\phi = 75^\circ$), $n = 1/\cos(75^\circ) \approx 1/0.259 = 3.86$.
*   As $\phi$ approaches 90 degrees (vertical bank), $n$ approaches infinity, which is structurally impossible.

**Important Point to Remember:** To maintain a level turn, the pilot *must* increase the angle of attack to generate more lift. This also increases drag.

#### 3.3. Turn Rate and Turn Radius

*   **Turn Rate ($\omega$):** The angular speed of the turn.
    $\omega = \frac{V}{R}$
    From the horizontal force equation, $R = \frac{m V^2}{L \sin(\phi)}$.
    Substituting $L = nW = n(mg)$:
    $R = \frac{m V^2}{n m g \sin(\phi)} = \frac{V^2}{n g \sin(\phi)}$

    So, the turn rate is:
    $\omega = \frac{V}{R} = \frac{V}{V^2 / (n g \sin(\phi))} = \frac{n g \sin(\phi)}{V}$

    Using $n = 1/\cos(\phi)$:
    $\omega = \frac{g \sin(\phi)}{V \cos(\phi)} = \frac{g \tan(\phi)}{V}$

    This is a very important equation: **Turn Rate = (g * tan(Bank Angle)) / Airspeed**

*   **Turn Radius ($R$):**
    $R = \frac{V^2}{n g \sin(\phi)}$
    Substituting $n = 1/\cos(\phi)$:
    $R = \frac{V^2}{(1/\cos(\phi)) g \sin(\phi)} = \frac{V^2 \cos(\phi)}{g \sin(\phi)} = \frac{V^2}{g \tan(\phi)}$

    This is also a crucial equation: **Turn Radius = Airspeed² / (g * tan(Bank Angle))**

**Summary of Turn Performance Parameters:**

| Parameter     | Equation                             | To Increase   | Key Factors Affected                  |
| :------------ | :----------------------------------- | :------------ | :------------------------------------ |
| Load Factor $n$ | $n = 1/\cos(\phi)$                   | Bank Angle $\phi$ | Lift required, structural stress      |
| Turn Rate $\omega$ | $\omega = g \tan(\phi) / V$          | Bank Angle $\phi$, Airspeed $V$ | Maneuverability (how quickly turn) |
| Turn Radius $R$   | $R = V^2 / (g \tan(\phi))$           | Airspeed $V$, Bank Angle $\phi$ | Space required for turn             |

**Eshelby (2000), Chapter 7 (Performance in Climbing and Diving Flight) and Chapter 8 (Maximum Speed and Range):** Eshelby would touch upon the forces and speeds involved. While he might not directly use the term "load factor" extensively for horizontal turns, the principles of lift being greater than weight to achieve a turn are covered. The concept of excess power for acceleration or climbs is also relevant as increased drag in turns requires more thrust.

**Booth (2018), Aircraft Engineering Design, Structures and Systems:** Booth's book would likely delve into the structural implications of high load factors. Designing aircraft to withstand the stresses imposed by high-G manoeuvres is a significant aspect of structural engineering. He would discuss material selection, stress analysis, and component design for such conditions.

#### 3.4. Design Implications of Manoeuvring Requirements

*   **Wing Loading ($W/S$):** Lower wing loading (larger wing area for a given weight) generally leads to better manoeuvrability. It allows the aircraft to achieve higher lift coefficients at lower speeds or generate the required lift with smaller angles of attack, reducing induced drag and delay in manoeuvres.
    *   Fighter aircraft have low wing loading.
    *   Transport aircraft have high wing loading for efficiency during cruise.

*   **Thrust-to-Weight Ratio ($T/W$):** A high $T/W$ ratio is essential for rapid acceleration and for maintaining speed during manoeuvres that increase drag (like turns).
    *   Fighter aircraft have high $T/W$.
    *   Transport aircraft have moderate $T/W$.

*   **Aerodynamic Control Surfaces:** The size, effectiveness, and response of control surfaces (ailerons for roll, elevators for pitch, rudder for yaw) are crucial for initiating and controlling manoeuvres. For high-G turns, powerful and responsive ailerons are needed to achieve the required bank angles quickly.

*   **Stall Characteristics:** The aircraft must have predictable and safe stall characteristics, especially at high angles of attack encountered during manoeuvres. The design of airfoils and wing configurations plays a vital role.

*   **Structural Strength:** As discussed, the structure must be robust enough to handle the maximum anticipated load factors. This impacts the weight of the airframe.

**Raymer (2012), Chapter 10 (Performance):** Raymer's discussion on maneuverability would cover these design trade-offs explicitly. He might introduce concepts like the "corner speed" – the speed at which an aircraft can achieve its maximum load factor while also being at its maximum lift coefficient. This is a critical speed for fighter aircraft.

#### 3.5. Example: Designing for a Fighter Aircraft

A fighter aircraft needs to be highly manoeuvrable. This means it should have:

*   **Low Wing Loading:** Achieved by large wing areas relative to its weight, or by keeping the aircraft weight low through advanced materials and integrated systems.
*   **High Thrust-to-Weight Ratio:** Multiple powerful jet engines are common.
*   **Advanced Aerodynamics:** Delta wings, leading-edge extensions (LEX), and canards are often used to improve lift and control at high angles of attack and during aggressive turns.
*   **Powerful Control Systems:** Fly-by-wire systems with advanced flight control laws are essential to manage the high G-loads and provide responsiveness.

---

### 4. Design Considerations for Different Aircraft Types

*   **Commercial Airliners:** Prioritize fuel efficiency, passenger comfort, and safety. Manoeuvring is generally limited to gentle turns for navigation and avoiding turbulence. High load factors (typically $n=1.5$ for gusts, $n=2.5$ for manoeuvring) are considered, but extreme manoeuvres are not a design driver. Load factor is limited by passenger comfort and structural limits.
    *   **Raymer:** Would discuss cruise performance and passenger comfort as primary design drivers.
    *   **Fielding:** Might emphasize the overall stability and control requirements for transport aircraft in the context of their typical flight envelopes.

*   **Military Fighter Jets:** Extreme manoeuvrability is a primary design goal. This includes high turn rates, rapid acceleration, and the ability to sustain high G-loads. Design features focus on low wing loading, high thrust-to-weight, and advanced aerodynamics and control systems.
    *   **Raymer:** Dedicates significant attention to fighter aircraft performance and manoeuvrability.

*   **Agility/Attack Aircraft:** Need a balance of speed, manoeuvrability, and payload. Often capable of combat manoeuvres but not to the same extent as dedicated air superiority fighters.

*   **General Aviation Aircraft:** Typically designed for ease of handling and safety. Manoeuvring capabilities are modest, with load factor limits often dictated by structural requirements (e.g., $n=3.8$ for utility category, $n=4.4$ for aerobatic category in FAR regulations).

---

### 5. Practice Questions and Answers

**Question 1:**
What is the load factor ($n$) for an aircraft in a level turn with a bank angle of $30^\circ$? If the aircraft's weight is $20,000$ kg, what is the total lift force required?

**Answer 1:**
The load factor $n$ in a level turn is given by $n = 1/\cos(\phi)$.
For $\phi = 30^\circ$, $n = 1/\cos(30^\circ) = 1 / (\sqrt{3}/2) = 2/\sqrt{3} \approx 1.155$.
The lift force ($L$) is $L = n \times W$.
$W = m \times g = 20,000 \text{ kg} \times 9.81 \text{ m/s}^2 = 196,200 \text{ N}$.
$L = 1.155 \times 196,200 \text{ N} \approx 226,521 \text{ N}$.

**Question 2:**
An aircraft has a wing loading of $2500$ N/m² and is flying at an altitude where air density ($\rho$) is $1.0$ kg/m³. The aircraft's maximum lift coefficient ($C_{L_{max}}$) is $1.5$. What is the maximum speed at which the aircraft can sustain a load factor of $n=2$ in a level turn without stalling? (Assume $g = 9.81$ m/s²)

**Answer 2:**
We know that $L = nW$.
In a turn, $L = \frac{1}{2} \rho V^2 S C_L$.
The wing loading is $W/S = 2500$ N/m². So, $W = 2500S$.
For a load factor of $n=2$, the required lift is $L = 2W$.
To avoid stall, $C_L \le C_{L_{max}} = 1.5$.
So, $2W = \frac{1}{2} \rho V^2 S C_{L_{max}}$.
$2(2500S) = \frac{1}{2} (1.0) V^2 S (1.5)$.
$5000S = 0.75 S V^2$.
Divide by $S$: $5000 = 0.75 V^2$.
$V^2 = 5000 / 0.75 = 6666.67$.
$V = \sqrt{6666.67} \approx 81.65$ m/s.

**Question 3:**
Describe the trade-offs between wing loading and thrust-to-weight ratio in the design of fighter aircraft versus commercial airliners.

**Answer 3:**
*   **Fighter Aircraft:** Prioritize high manoeuvrability. They achieve this with **low wing loading** (allowing for higher load factors at lower speeds and quicker response) and **high thrust-to-weight ratio** (enabling rapid acceleration and sustained high-G manoeuvres). The penalty for low wing loading is increased drag, especially at high speeds, and potentially lower cruise efficiency.
*   **Commercial Airliners:** Prioritize fuel efficiency and passenger comfort. They have **high wing loading** (reducing induced drag in cruise, increasing speed, and lowering structural weight) and a **moderate thrust-to-weight ratio** (sufficient for takeoff and climb, but not optimized for aggressive manoeuvres). They sacrifice extreme manoeuvrability for economic operation.

**Question 4:**
What is the formula for turn rate ($\omega$) and turn radius ($R$) in a level turn, and what are the primary design parameters that influence them?

**Answer 4:**
*   **Turn Rate ($\omega$):** $\omega = \frac{g \tan(\phi)}{V}$
    *   Influenced by: Bank Angle ($\phi$) and Airspeed ($V$). Higher bank angle and lower airspeed increase turn rate.
*   **Turn Radius ($R$):** $R = \frac{V^2}{g \tan(\phi)}$
    *   Influenced by: Airspeed ($V$) and Bank Angle ($\phi$). Higher airspeed and lower bank angle increase turn radius.

**Design Parameters influencing Turn Performance:**
*   **Wing Loading ($W/S$):** Lower wing loading allows for higher load factors at lower speeds, benefiting both turn rate and radius.
*   **Thrust-to-Weight Ratio ($T/W$):** A higher $T/W$ allows the aircraft to maintain its speed in a turn, which is crucial for sustained manoeuvrability.
*   **Aerodynamic Control Surfaces:** Effectiveness and responsiveness of ailerons and elevators to achieve and maintain bank angles and lift.
*   **Structural Limits:** Dictate the maximum achievable load factor.

---

### 6. Important Points to Remember

*   **Load Factor ($n$)** is the ratio of lift to weight and is a key metric for manoeuvring.
*   In vertical manoeuvres, $n$ directly relates to the normal acceleration experienced by the aircraft and pilot.
*   In level turns, $n = 1/\cos(\phi)$, meaning higher bank angles result in higher load factors.
*   **Stall Angle of Attack ($\alpha_{stall}$)** limits the maximum lift coefficient ($C_L$) and thus the maximum load factor achievable at a given speed.
*   **Maneuverability** is influenced by wing loading ($W/S$), thrust-to-weight ratio ($T/W$), and aerodynamic control effectiveness.
*   **Turn Rate ($\omega$)** increases with bank angle and decreases with airspeed.
*   **Turn Radius ($R$)** increases with airspeed and decreases with bank angle.
*   Design decisions for manoeuvring capabilities are a direct trade-off with other performance metrics like range and cruise efficiency.

---

This concludes the notes for Manoeuvring Flight in the Vertical and Horizontal Planes. Understanding these concepts is crucial for performing performance calculations and making informed design decisions related to aircraft capabilities and limitations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
