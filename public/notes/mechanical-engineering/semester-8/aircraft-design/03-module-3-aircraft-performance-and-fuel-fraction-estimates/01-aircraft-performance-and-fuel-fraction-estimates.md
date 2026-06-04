---
title: "Aircraft performance and fuel fraction estimates"
subject: "AIRCRAFT DESIGN"
module: "Module 3: Aircraft performance and fuel fraction estimates"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464630"
status: "completed"
scrapedAt: "2026-05-20T18:19:47.571Z"
---
# Aircraft Design: Module 3 - Aircraft Performance and Fuel Fraction Estimates

## Introduction to Aircraft Performance and Fuel Fraction Estimates

This module delves into the critical aspects of aircraft performance and how fuel fraction is estimated, a fundamental element in the conceptual and preliminary design phases. Understanding these concepts is vital for making informed decisions throughout the aircraft design cycle (CO1).

### Key Concepts and Definitions

*   **Aircraft Performance:** Refers to the ability of an aircraft to perform its intended mission. This includes aspects like speed, range, endurance, climb rate, maneuverability, and takeoff/landing distances.
*   **Fuel Fraction:** The ratio of the aircraft's fuel weight to its total initial weight. It is a crucial parameter that directly impacts the aircraft's range, payload capacity, and overall economic viability.
*   **Mission Profile:** A sequence of flight segments (e.g., takeoff, climb, cruise, descent, landing) that an aircraft undertakes to complete its mission. Each segment has specific performance requirements.
*   **Weight Categories:** Understanding the various weight breakdowns of an aircraft is essential for performance calculations:
    *   **Empty Weight (W<sub>E</sub>):** The weight of the aircraft without fuel, payload, or crew.
    *   **Operating Empty Weight (OEW):** Empty weight plus the weight of essential operating items like crew, crew baggage, and unusable fuel.
    *   **Payload Weight (W<sub>P</sub>):** The weight of passengers, cargo, or weapons.
    *   **Fuel Weight (W<sub>F</sub>):** The weight of the fuel carried.
    *   **Takeoff Weight (W<sub>TO</sub>):** The total weight of the aircraft at the beginning of takeoff roll (W<sub>TO</sub> = OEW + W<sub>P</sub> + W<sub>F</sub>).
    *   **Landing Weight (W<sub>L</sub>):** The weight of the aircraft upon landing (W<sub>L</sub> = W<sub>TO</sub> - Fuel Burned).

**Raymer (2012):** Emphasizes that fuel fraction is a primary driver in aircraft design, influencing everything from wing size to engine selection. He dedicates significant portions of his book to mission analysis and the calculation of fuel required for various flight segments.

**Fielding (2017):** Provides a thorough grounding in the fundamental aerodynamic and propulsion principles that dictate aircraft performance, laying the groundwork for understanding how fuel is consumed.

**Eshelby (2000):** Focuses on the quantitative aspects of aircraft performance, presenting the equations and methodologies for calculating specific performance parameters and fuel burn.

---

## Understanding Aircraft Performance Metrics

Aircraft performance is quantified through various parameters, each related to specific aspects of flight.

### 1. Speed

*   **Cruising Speed (V<sub>c</sub>):** The typical speed maintained during the cruise phase of flight. This is often a trade-off between time and fuel efficiency.
*   **Maximum Speed (V<sub>max</sub>):** The highest speed the aircraft can achieve, usually limited by structural integrity or engine power.
*   **Stall Speed (V<sub>s</sub>):** The minimum speed at which the aircraft can maintain controlled flight.

### 2. Climb Performance

*   **Rate of Climb (ROC):** The vertical speed at which the aircraft gains altitude.
*   **Angle of Climb (γ):** The angle of the aircraft's flight path relative to the horizontal during climb.
*   **Specific Fuel Consumption (SFC):** The amount of fuel consumed per unit of thrust (or power) per unit of time. For jet engines, it's typically given in kg/(kN·h) or lb/(lbf·h). For piston engines, it's often given in kg/(kW·h) or lb/(hp·h).

**Eshelby (2000):** Presents detailed methods for calculating climb performance, including the derivation of the ROC equation and the impact of altitude and aircraft configuration.

### 3. Range and Endurance

*   **Range (R):** The maximum distance an aircraft can fly.
*   **Endurance (E):** The maximum time an aircraft can stay airborne.

These are directly influenced by the aircraft's fuel fraction, engine efficiency (SFC), and aerodynamic efficiency (Lift-to-Drag ratio, L/D).

**Raymer (2012):** Introduces the Breguet Range Equation and Breguet Endurance Equation, fundamental tools for estimating the range and endurance of jet and propeller-driven aircraft, respectively.

**The Breguet Range Equation (for jet aircraft):**

$$R = \frac{V}{SFC} \times \frac{L}{D} \times \ln\left(\frac{W_{initial}}{W_{final}}\right)$$

Where:
*   $R$ = Range
*   $V$ = True airspeed
*   $SFC$ = Specific Fuel Consumption
*   $L/D$ = Lift-to-Drag ratio
*   $W_{initial}$ = Initial weight (takeoff weight)
*   $W_{final}$ = Final weight (landing weight)

**The Breguet Endurance Equation (for jet aircraft):**

$$E = \frac{1}{SFC} \times \frac{L}{D} \times \ln\left(\frac{W_{initial}}{W_{final}}\right)$$

Where:
*   $E$ = Endurance
*   $V$ = True airspeed (often assumed constant for simplicity, though optimal endurance occurs at a specific speed)
*   $SFC$ = Specific Fuel Consumption
*   $L/D$ = Lift-to-Drag ratio
*   $W_{initial}$ = Initial weight (takeoff weight)
*   $W_{final}$ = Final weight (landing weight)

**Important Point:** The term $\ln\left(\frac{W_{initial}}{W_{final}}\right)$ is directly related to the fuel fraction. If $W_{initial}$ is the takeoff weight and $W_{final}$ is the landing weight, and the fuel burned is $W_F = W_{initial} - W_{final}$, then the fuel fraction ($f$) can be defined in various ways. A common definition used in the context of the Breguet equations is the ratio of initial fuel to initial weight, or the ratio of initial fuel to takeoff weight. If we consider the weight at the start of a segment and the weight at the end of a segment where fuel is burned, then $\frac{W_{initial}}{W_{final}} = \frac{1}{1 - \frac{W_{fuel\_burned}}{W_{initial}}}$. More precisely, if $W_0$ is takeoff weight and $W_1$ is landing weight, $W_F = W_0 - W_1$. Then the fuel fraction can be related to the weight ratio.

Let $W_{takeoff}$ be the initial weight and $W_{landing}$ be the final weight of a segment.
The weight of fuel burned in that segment is $W_{fuel\_burned} = W_{takeoff} - W_{landing}$.
The fuel fraction for that segment can be approximated as $\frac{W_{fuel\_burned}}{W_{takeoff}}$.
The ratio $\frac{W_{initial}}{W_{final}}$ in the Breguet equations can be expressed in terms of the fuel fraction for the entire mission.

If $f_f$ is the final fuel fraction (fuel weight to landing weight), and $f_i$ is the initial fuel fraction (fuel weight to takeoff weight). Let $W_{TO}$ be takeoff weight and $W_L$ be landing weight.
$W_{TO} = W_{OEW} + W_{Payload} + W_{Fuel\_Initial}$
$W_L = W_{OEW} + W_{Payload}$
$W_{Fuel\_Initial} = W_{TO} - W_L$
Fuel Fraction ($FF$) is typically defined as $FF = \frac{W_{Fuel\_Initial}}{W_{TO}}$.

Then $\frac{W_{TO}}{W_L} = \frac{W_{OEW} + W_{Payload} + W_{Fuel\_Initial}}{W_{OEW} + W_{Payload}} = 1 + \frac{W_{Fuel\_Initial}}{W_{OEW} + W_{Payload}}$.

Alternatively, relating it to the fuel fraction $f = \frac{W_{fuel}}{W_{initial}}$:
$\frac{W_{initial}}{W_{final}} = \frac{W_{initial}}{W_{initial} - W_{fuel}} = \frac{1}{1 - \frac{W_{fuel}}{W_{initial}}} = \frac{1}{1-f}$

This is a crucial link between fuel fraction and the Breguet equations.

**CO3:** These equations are directly applicable to calculating performance characteristics.

---

## Fuel Fraction Estimation: A Multi-Segment Approach

Estimating the total fuel fraction for an aircraft requires breaking down the mission into distinct segments and calculating the fuel required for each.

### Mission Segment Analysis

A typical mission profile includes:

1.  **Taxi, Takeoff, and Climb to Cruise Altitude:**
    *   Fuel for taxiing.
    *   Fuel for takeoff roll and climb.
    *   Fuel for reaching cruise altitude and speed.
2.  **Cruise:**
    *   The longest segment, consuming the most fuel.
3.  **Descent and Landing:**
    *   Fuel for descent.
    *   Fuel for approach and landing.
    *   Reserve fuel (e.g., for holding, diversion).

**Raymer (2012):** Advocates for a "bottom-up" approach where fuel for each segment is estimated and then summed to determine the total fuel weight. He provides methods for calculating fuel burn in each phase, considering factors like climb gradients, cruise speed, and descent profiles.

### Methods for Fuel Burn Calculation

*   **Segmental Integration:**
    For each segment, the fuel burn rate ($W_f$) is calculated, often as a function of weight, speed, and altitude. The fuel consumed during a segment is then the integral of the fuel burn rate over the duration of the segment.

    $$W_{fuel, segment} = \int_{t_1}^{t_2} \dot{W}_f(t) dt$$

    If the fuel burn rate can be considered constant over a short time $\Delta t$:
    $$W_{fuel, segment} \approx \dot{W}_f \times \Delta t$$

    Or, if the rate of fuel consumption can be expressed in terms of weight change:
    $$W_{fuel, segment} = W_{initial\_segment} - W_{final\_segment}$$

*   **Specific Fuel Consumption (SFC) based calculations:**
    As seen in the Breguet equations, SFC is a direct measure of engine fuel efficiency.

    *   **For Jet Engines:**
        $\dot{W}_f = SFC_{jet} \times Thrust$
        For cruise, $Thrust = Drag = \frac{W}{L/D}$.
        So, $\dot{W}_f = SFC_{jet} \times \frac{W}{L/D}$.

    *   **For Propeller Engines:**
        $\dot{W}_f = SFC_{prop} \times Power$
        For cruise, $Power = \frac{Thrust \times V}{(L/D)}$.
        So, $\dot{W}_f = SFC_{prop} \times \frac{V}{L/D} \times W$.

**Eshelby (2000):** Provides detailed derivations and methodologies for calculating fuel burn in each segment, incorporating effects of changing weight, altitude, and engine settings. He also discusses the importance of "reserve fuel" which is crucial for safety and operational flexibility.

### Fuel Fraction Estimation Techniques

1.  **Analytical Methods (Breguet Equations):**
    *   Use the Breguet equations to estimate the fuel required for the cruise phase based on the initial and final weights of that phase, and the aircraft's L/D and SFC.
    *   Fuel for non-cruise segments is estimated using specific formulas or empirical data.
    *   Summing up the fuel for all segments gives the total mission fuel.

2.  **Numerical Integration / Simulation:**
    *   More sophisticated methods involve simulating the flight path segment by segment, integrating performance equations over time. This allows for more accurate modeling of changing parameters.

3.  **Empirical Methods and Historical Data:**
    *   For conceptual design, historical data from similar aircraft is often used to establish initial estimates for fuel fraction.
    *   Rules of thumb and empirical correlations can provide quick estimates.

**Raymer (2012) - Example of Fuel Fraction Estimation:**

Consider a simplified mission for a jet transport:
*   Takeoff and climb to cruise altitude: 15 minutes
*   Cruise: 5 hours
*   Descent and landing: 10 minutes
*   Reserve: 30 minutes of cruise fuel

Let's assume:
*   Average cruise SFC = 0.6 kg/(kN·h)
*   Average cruise Thrust = 100 kN
*   Average Cruise Speed = 250 m/s (approx 485 knots)
*   Average L/D = 15
*   Average aircraft weight during cruise = 50,000 kg

**Fuel burn rate during cruise:**
$\dot{W}_f = SFC \times Thrust = 0.6 \text{ kg/(kN·h)} \times 100 \text{ kN} = 60 \text{ kg/h}$

**Total cruise fuel:**
$W_{F\_cruise} = \dot{W}_f \times Time_{cruise} = 60 \text{ kg/h} \times 5 \text{ h} = 300 \text{ kg}$

**Fuel for reserve:**
$W_{F\_reserve} = \dot{W}_f \times Time_{reserve} = 60 \text{ kg/h} \times 0.5 \text{ h} = 30 \text{ kg}$

**Fuel for takeoff/climb/descent:** This is more complex and often estimated using empirical data or specific climb/descent formulas. For illustration, let's assume a combined fuel burn for these phases is 15% of the total mission fuel weight.

**Raymer's approach often involves calculating weight at the start and end of each segment.**
Let's use a simplified weight progression:
*   Takeoff Weight ($W_{TO}$) = $W_{OEW} + W_{Payload} + W_{Fuel\_Total}$
*   Weight at start of cruise ($W_{cruise\_start}$) = $W_{TO} - W_{fuel\_taxi\_takeoff\_climb}$
*   Weight at end of cruise ($W_{cruise\_end}$) = $W_{cruise\_start} - W_{fuel\_cruise}$
*   Weight at landing ($W_L$) = $W_{cruise\_end} - W_{fuel\_descent}$

**A common method is to express fuel required for each segment as a fraction of the weight at the start of that segment.**

Let:
*   $f_{taxi\_TO\_climb}$ = Fuel for taxi, takeoff, climb as a fraction of takeoff weight.
*   $f_{cruise}$ = Fuel for cruise as a fraction of weight at start of cruise.
*   $f_{descent\_landing}$ = Fuel for descent and landing as a fraction of weight at start of descent.
*   $f_{reserve}$ = Reserve fuel as a fraction of weight at end of mission (or cruise).

Then, the total fuel fraction can be built iteratively.

**Example using Raymer's weight-based calculation approach (simplified):**

Assume:
*   OEW = 20,000 kg
*   Payload = 5,000 kg
*   For a specific mission, the required cruise range implies a certain weight ratio $\frac{W_{cruise\_start}}{W_{cruise\_end}} = 1.2$.
*   Fuel for taxi/TO/climb = 10% of Takeoff Weight ($W_{TO}$).
*   Fuel for descent/landing = 5% of weight at start of descent ($W_{cruise\_end}$).
*   Reserve fuel = 5% of landing weight ($W_L$).

Let $W_{fuel\_total}$ be the total fuel weight.
$W_{TO} = W_{OEW} + W_{Payload} + W_{fuel\_total} = 20000 + 5000 + W_{fuel\_total} = 25000 + W_{fuel\_total}$

$W_{fuel\_taxi\_TO\_climb} = 0.10 \times W_{TO}$

$W_{cruise\_start} = W_{TO} - W_{fuel\_taxi\_TO\_climb} = W_{TO} (1 - 0.10) = 0.90 \times W_{TO}$

From the cruise weight ratio:
$W_{cruise\_end} = \frac{W_{cruise\_start}}{1.2} = \frac{0.90 \times W_{TO}}{1.2} = 0.75 \times W_{TO}$

$W_{fuel\_cruise} = W_{cruise\_start} - W_{cruise\_end} = 0.90 \times W_{TO} - 0.75 \times W_{TO} = 0.15 \times W_{TO}$

$W_{fuel\_descent\_landing} = 0.05 \times W_{cruise\_end} = 0.05 \times (0.75 \times W_{TO}) = 0.0375 \times W_{TO}$

$W_L = W_{cruise\_end} - W_{fuel\_descent\_landing} = 0.75 \times W_{TO} - 0.0375 \times W_{TO} = 0.7125 \times W_{TO}$

$W_{fuel\_reserve} = 0.05 \times W_L = 0.05 \times (0.7125 \times W_{TO}) = 0.035625 \times W_{TO}$

Now, sum up all fuel components:
$W_{fuel\_total} = W_{fuel\_taxi\_TO\_climb} + W_{fuel\_cruise} + W_{fuel\_descent\_landing} + W_{fuel\_reserve}$
$W_{fuel\_total} = (0.10 \times W_{TO}) + (0.15 \times W_{TO}) + (0.0375 \times W_{TO}) + (0.035625 \times W_{TO})$
$W_{fuel\_total} = (0.10 + 0.15 + 0.0375 + 0.035625) \times W_{TO}$
$W_{fuel\_total} = 0.323125 \times W_{TO}$

This means the total fuel fraction ($FF = W_{fuel\_total} / W_{TO}$) is approximately 0.323 or 32.3%.

Now, we can estimate the Takeoff Weight:
$W_{TO} = 25000 + W_{fuel\_total}$
$W_{TO} = 25000 + 0.323125 \times W_{TO}$
$W_{TO} (1 - 0.323125) = 25000$
$W_{TO} \times 0.676875 = 25000$
$W_{TO} = \frac{25000}{0.676875} \approx 36933 \text{ kg}$

$W_{fuel\_total} = 0.323125 \times 36933 \approx 11933 \text{ kg}$

So, the fuel fraction is $\frac{11933}{36933} \approx 0.323$ or 32.3%.

**Important Point:** This is a simplified example. In reality, each segment's fuel burn is a complex calculation considering varying weight, altitude, and engine settings. Raymer's book provides detailed charts and equations for these calculations.

**CO3:** This example demonstrates how to calculate performance (total fuel weight and fraction) based on mission requirements.

---

## Factors Affecting Fuel Fraction

*   **Mission Range and Endurance:** Longer ranges and endurance require more fuel, thus increasing fuel fraction.
*   **Payload:** Increased payload reduces the available weight for fuel and structure, impacting range and endurance.
*   **Aerodynamic Efficiency (L/D):** A higher L/D ratio means the aircraft is more aerodynamically efficient, requiring less lift to be generated, leading to lower drag and reduced fuel consumption, thus a lower fuel fraction for a given mission.
*   **Propulsion System Efficiency (SFC):** More fuel-efficient engines (lower SFC) lead to lower fuel fractions.
*   **Flight Profile:** Optimizing cruise altitude, speed, climb and descent profiles can significantly reduce fuel consumption.
*   **Atmospheric Conditions:** Headwinds, tailwinds, temperature, and air density affect fuel burn.
*   **Reserve Fuel Requirements:** Regulatory requirements for reserve fuel (e.g., fuel to fly to an alternate airport and hold) directly increase fuel fraction.

**Booth (2018):** Discusses how design choices in aerodynamics, propulsion, and structures all have a cascading effect on the fuel fraction and overall aircraft performance.

---

## Design Implications of Fuel Fraction

*   **Weight:** A higher fuel fraction means a larger portion of the aircraft's takeoff weight is fuel. This necessitates a stronger and heavier structure to support the initial fuel load and affects the wing loading.
*   **Range and Payload Trade-off:** Increasing payload generally means reducing fuel capacity for a fixed takeoff weight, which reduces range. Conversely, increasing fuel capacity to achieve longer range reduces payload capacity.
*   **Economic Viability:** Fuel is a significant operating cost. A lower fuel fraction contributes to lower operating costs and improved profitability.
*   **Aircraft Size and Configuration:** The required fuel fraction can influence the overall size and layout of the aircraft. For example, aircraft designed for very long ranges (e.g., ultra-long-range airliners) will have a substantial fuel fraction, often requiring larger wings and fuselage tankage.

**CO1:** Understanding fuel fraction is paramount for making trade-offs during the design cycle. For example, deciding between carrying more passengers or having a longer range directly involves manipulating the fuel fraction.

**CO2:** The emphasis on mission analysis and fuel calculation clearly delineates a crucial phase in preliminary design.

---

## Practice Questions

1.  **Define Fuel Fraction** and explain its importance in aircraft design.
2.  State the **Breguet Range Equation** for jet aircraft and briefly explain each term.
3.  What are the typical **segments of a mission profile** used for fuel estimation?
4.  How does an increase in the **Lift-to-Drag ratio (L/D)** affect the fuel fraction for a given mission?
5.  An aircraft has an OEW of 30,000 kg and a payload of 10,000 kg. If the total fuel fraction (fuel weight/takeoff weight) is estimated to be 0.30, what is the aircraft's takeoff weight?
6.  Explain two **factors** that would lead to an increase in an aircraft's fuel fraction.

---

## Answers to Practice Questions

1.  **Fuel Fraction** is the ratio of the aircraft's fuel weight to its total initial weight (e.g., takeoff weight). It is crucial because it directly impacts the aircraft's range, endurance, payload capacity, and overall economic viability. A higher fuel fraction means less weight is available for payload or structure, or the aircraft must be larger to accommodate the fuel.

2.  The Breguet Range Equation for jet aircraft is:
    $$R = \frac{V}{SFC} \times \frac{L}{D} \times \ln\left(\frac{W_{initial}}{W_{final}}\right)$$
    *   $R$: Range
    *   $V$: True airspeed
    *   $SFC$: Specific Fuel Consumption of the engine
    *   $L/D$: Lift-to-Drag ratio of the aircraft
    *   $W_{initial}$: Initial weight at the start of the segment
    *   $W_{final}$: Final weight at the end of the segment

3.  Typical segments of a mission profile include:
    *   Taxi, Takeoff, and Climb to Cruise Altitude
    *   Cruise
    *   Descent and Landing
    *   Reserve (for diversions, holding patterns)

4.  An increase in the Lift-to-Drag ratio (L/D) means the aircraft is more aerodynamically efficient. For a given mission, a higher L/D will result in less fuel being consumed, thus leading to a **lower fuel fraction**.

5.  Let $W_{fuel}$ be the fuel weight and $W_{TO}$ be the takeoff weight.
    Given:
    OEW = 30,000 kg
    Payload = 10,000 kg
    Fuel Fraction ($FF$) = $W_{fuel} / W_{TO} = 0.30$

    We know that $W_{TO} = OEW + Payload + W_{fuel}$.
    Substituting the fuel fraction:
    $W_{TO} = OEW + Payload + (FF \times W_{TO})$
    $W_{TO} = 30000 + 10000 + (0.30 \times W_{TO})$
    $W_{TO} = 40000 + 0.30 \times W_{TO}$
    $W_{TO} - 0.30 \times W_{TO} = 40000$
    $0.70 \times W_{TO} = 40000$
    $W_{TO} = \frac{40000}{0.70} \approx 57143 \text{ kg}$

    The aircraft's takeoff weight is approximately 57,143 kg.

6.  Two factors that would lead to an increase in an aircraft's fuel fraction are:
    *   **Increased Mission Range/Endurance:** A longer flight requires more fuel to be carried.
    *   **Lower Engine Efficiency (Higher SFC):** Less efficient engines consume more fuel for the same amount of thrust or power.
    *   **Increased Reserve Fuel Requirements:** Higher regulatory or operational requirements for fuel reserves directly add to the total fuel weight.
    *   **Reduced Aerodynamic Efficiency (Lower L/D):** A less aerodynamically efficient aircraft requires more thrust (and thus burns more fuel) to overcome drag.

---

## Important Points to Remember

*   **Fuel fraction is a primary driver of aircraft design.** It dictates a large portion of the aircraft's empty weight and impacts all other design aspects.
*   **Mission analysis is key.** Breaking down the flight into segments allows for accurate fuel estimation.
*   **The Breguet equations are fundamental tools** for estimating range and endurance, and they directly incorporate fuel fraction.
*   **There is always a trade-off** between payload, range, endurance, and fuel fraction.
*   **Engine efficiency (SFC) and aerodynamic efficiency (L/D) are critical parameters** influencing fuel consumption.
*   **Reserve fuel is a non-negotiable requirement** for safety and operational flexibility and must be included in fuel fraction calculations.

---

## Alignment with Course Outcomes

*   **CO1 (Decision Making):** This module provides the quantitative basis (fuel fraction, performance metrics) needed to make informed decisions about design trade-offs, such as payload vs. range.
*   **CO2 (Design Phases):** Fuel fraction estimation is a core activity in the conceptual and preliminary design phases, directly aligning with understanding these phases.
*   **CO3 (Calculate Performance):** The module directly addresses how to calculate performance characteristics like range and endurance through the application of equations and mission analysis.
*   **CO4 (Evaluate Layout):** While not directly about layout, understanding fuel requirements influences the aircraft's overall size, wing area, and the placement of fuel tanks, which are aspects of layout design. A high fuel fraction might necessitate larger fuel tanks, impacting the fuselage or wing design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
