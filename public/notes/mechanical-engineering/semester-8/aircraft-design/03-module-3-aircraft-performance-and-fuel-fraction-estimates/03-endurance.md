---
title: "Endurance"
subject: "AIRCRAFT DESIGN"
module: "Module 3: Aircraft performance and fuel fraction estimates"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464632"
status: "completed"
scrapedAt: "2026-05-20T18:19:49.003Z"
---
# Aircraft Design: Module 3 - Aircraft Performance and Fuel Fraction Estimates

## Topic: Endurance

**Learning Outcomes Covered:**

*   Understanding the fundamental principles of aircraft endurance and its influencing factors.
*   Deriving and applying the Breguet endurance equation for propeller-driven aircraft.
*   Deriving and applying a similar endurance equation for jet aircraft.
*   Identifying and quantifying the impact of key design parameters on endurance.
*   Estimating endurance for different aircraft types using theoretical models.
*   Relating endurance to the overall aircraft design process and mission requirements.

**Course Outcomes Alignment:**

*   **CO1 (K2):** These notes will enable students to make decisions regarding aircraft design parameters (e.g., engine type, fuel capacity, wing loading) that directly influence endurance, a critical aspect of the total design cycle.
*   **CO3 (K2):** The notes provide the methodology and equations to calculate the performance characteristic of endurance for different aircraft.

---

### 1. Introduction to Endurance

Endurance is a crucial aircraft performance metric, representing the **total time an aircraft can remain airborne** without refueling. It is directly related to an aircraft's mission profile, especially for aircraft designed for long-duration flights such as reconnaissance, patrol, or aerial refueling.

**Key Concepts:**

*   **Time on Station:** The duration an aircraft can loiter or perform a specific task at a certain location.
*   **Range vs. Endurance:** While range is the total distance an aircraft can cover, endurance is the total time it can fly. They are related but distinct performance parameters. An aircraft optimized for maximum range might not have the maximum endurance.
*   **Fuel Fraction:** The ratio of fuel weight to the total aircraft weight. A higher fuel fraction generally leads to longer endurance, but also impacts other design aspects like structural requirements and payload.

**Why is Endurance Important?**

*   **Military Applications:** Patrol, surveillance, reconnaissance, combat air patrol (CAP), search and rescue (SAR).
*   **Civilian Applications:** Aerial surveying, flight testing, communication relay.
*   **Mission Planning:** Defining the operational capabilities and limitations of an aircraft.

---

### 2. Endurance for Propeller-Driven Aircraft

The fundamental principle behind endurance is the **rate of fuel consumption** versus the **lift-to-drag ratio (L/D)**. To maximize endurance, we want to fly at a speed that provides the best L/D while minimizing the fuel burn rate.

**Key Factors Influencing Propeller Endurance:**

*   **L/D Ratio (Lift-to-Drag Ratio):** Higher L/D means the aircraft is more aerodynamically efficient, requiring less thrust and thus less fuel for a given amount of lift.
*   **Specific Fuel Consumption (SFC):** This is the rate of fuel burned per unit of thrust produced (for jets) or power produced (for propellers). Lower SFC is better for endurance. For propeller engines, SFC is typically given in units of lb/(hp·hr) or kg/(kW·hr).
*   **Initial and Final Fuel Weights:** The amount of fuel onboard at the start of the flight and the minimum fuel required for safe landing or reserve.
*   **Aircraft Weight:** As fuel is burned, the aircraft's weight decreases. This affects the required lift, and consequently the angle of attack and drag, and hence the L/D ratio.

**Derivation of the Breguet Endurance Equation (Propeller-Driven Aircraft):**

The Breguet endurance equation is a cornerstone for estimating the endurance of propeller-driven aircraft. It's derived by considering the rate of change of weight with respect to time.

1.  **Rate of Fuel Burn:**
    *   The power required to maintain level flight is $P_{req} = \frac{T \cdot V}{ \eta_{prop}} = \frac{W \cdot V}{ (L/D) \cdot \eta_{prop}}$, where $T$ is thrust, $V$ is velocity, $\eta_{prop}$ is propeller efficiency, and $W$ is the aircraft weight.
    *   The rate of fuel consumption is related to the power produced by the engine and its SFC: $\frac{dW_f}{dt} = \frac{P_{eng}}{SFC_{hp}}$, where $P_{eng}$ is engine power and $SFC_{hp}$ is specific fuel consumption in terms of power.
    *   Substituting $P_{req}$: $\frac{dW_f}{dt} = \frac{W \cdot V}{(L/D) \cdot \eta_{prop} \cdot SFC_{hp}}$.

2.  **Relating Fuel Burn to Weight Change:**
    *   The rate of decrease in aircraft weight is equal to the rate of fuel burn: $\frac{dW}{dt} = - \frac{dW_f}{dt} = - \frac{W \cdot V}{(L/D) \cdot \eta_{prop} \cdot SFC_{hp}}$.

3.  **Separating Variables and Integrating:**
    *   Rearranging: $\frac{dW}{W} = - \frac{V}{(L/D) \cdot \eta_{prop} \cdot SFC_{hp}} dt$.
    *   Let $c_p = \frac{1}{SFC_{hp}}$ be the specific fuel consumption in terms of power per unit fuel weight (reciprocal of SFC).
    *   $\frac{dW}{W} = - \frac{V \cdot c_p}{(L/D)} dt$.
    *   Integrating from initial weight $W_0$ (including fuel) to final weight $W_f$ (without fuel):
        $\int_{W_0}^{W_f} \frac{dW}{W} = - \int_{0}^{E} \frac{V \cdot c_p}{(L/D)} dt$
        $\ln(\frac{W_f}{W_0}) = - \frac{V \cdot c_p}{(L/D)} E$

4.  **The Breguet Endurance Equation:**
    *   Solving for Endurance ($E$):
        $E = \frac{(L/D) \cdot c_p}{V} \ln(\frac{W_0}{W_f})$

    *   **Important Note:** This equation is valid under the assumption that $L/D$, $V$, $c_p$, and $\eta_{prop}$ are constant during the flight. In reality, they change as weight decreases. For more accurate estimates, integration over the flight profile is needed.

**Simplification for Constant Velocity and L/D:**

If we assume the aircraft flies at a constant velocity and maintains an optimal L/D for that velocity, the equation becomes more manageable.

*   **Thrust Required ($T_R$):** $T_R = \frac{W}{L/D}$
*   **Power Required ($P_R$):** $P_R = T_R \cdot V = \frac{W \cdot V}{L/D}$
*   **Rate of Fuel Consumption:** $\frac{dW_f}{dt} = \frac{P_R}{SFC_{hp}} = \frac{W \cdot V}{(L/D) \cdot SFC_{hp}}$
*   **Rearranging:** $\frac{dW}{W} = - \frac{V}{(L/D) \cdot SFC_{hp}} dt$
*   **Integrating:** $\int_{W_0}^{W_f} \frac{dW}{W} = \int_{0}^{E} - \frac{V}{(L/D) \cdot SFC_{hp}} dt$
    $\ln(\frac{W_f}{W_0}) = - \frac{V \cdot E}{(L/D) \cdot SFC_{hp}}$
*   **Endurance ($E$):**
    $E = \frac{(L/D) \cdot SFC_{hp}}{V} \ln(\frac{W_0}{W_f})$

    *   **Key Insight:** To maximize endurance for a propeller-driven aircraft, we need to:
        *   Maximize the $(L/D)$ ratio.
        *   Maximize the specific fuel consumption in terms of power ($SFC_{hp}$). This implies minimizing the SFC value itself.
        *   Fly at the velocity $V$ that provides the best $L/D$ for the aircraft.
        *   Maximize the fuel fraction $\ln(\frac{W_0}{W_f})$.

**Raymer's Perspective (Aircraft Design: A Conceptual Approach):**

Raymer emphasizes the importance of the **"specific range"** concept for endurance. Specific range is the distance traveled per unit of fuel consumed. For endurance, we consider the **"specific endurance"** or time per unit of fuel.

*   Raymer presents the equation in terms of **specific fuel consumption ($c_t$)** which is typically thrust specific fuel consumption for jets (lb/hr/lb thrust) or power specific fuel consumption for props (lb/hr/hp).

*   For propeller aircraft:
    $E = \frac{1}{V} \frac{(L/D)}{c_p} \ln(\frac{W_{initial}}{W_{final}})$
    where $c_p$ is the power specific fuel consumption.

*   **Example:** A twin-engine turboprop aircraft designed for long endurance patrols will prioritize high $(L/D)$ wings and efficient engines with low SFC. The fuel capacity will be a significant portion of the takeoff weight.

**Practice Question (Propeller Aircraft):**

An aircraft has the following characteristics:
*   Initial Weight ($W_0$): 10,000 lbs
*   Final Weight ($W_f$): 3,000 lbs (allowing for climb, cruise, and reserve)
*   Maximum L/D Ratio: 15
*   Velocity at max L/D: 150 knots
*   Power Specific Fuel Consumption ($SFC_{hp}$): 0.5 lb/(hp·hr)
*   Engine Power Output ($P_{eng}$): 1000 hp

Estimate the endurance of this aircraft assuming constant L/D and velocity.

**Answer:**

First, we need to calculate the power required to maintain level flight at the velocity corresponding to the maximum L/D.
$P_{req} = \frac{W \cdot V}{(L/D) \cdot \eta_{prop}}$. Assuming $\eta_{prop} = 1$ for simplicity in this context (though it's usually less than 1).
However, the equation we derived uses SFC based on engine power, not propeller power. Let's use the form directly derived:
$E = \frac{(L/D) \cdot SFC_{hp}}{V} \ln(\frac{W_0}{W_f})$

Here, $SFC_{hp}$ is given as 0.5 lb/(hp·hr). This is the rate of fuel consumed per horsepower.

$E = \frac{15 \cdot 0.5}{150 \text{ knots}} \ln(\frac{10000}{3000})$

Note: We need consistent units. 150 knots = 150 * 1.68781 ft/s ≈ 253.17 ft/s.
It's more common to express SFC in $\frac{lb}{hr \cdot hp}$ and Velocity in knots or ft/s. Let's assume $SFC_{hp}$ is indeed power specific consumption.

Let's re-examine the derivation from a power perspective.
Rate of fuel burn $\frac{dW_f}{dt} = \frac{P_{required}}{SFC_{hp}}$.
$P_{required} = \frac{W \cdot V}{L/D}$.
So, $\frac{dW_f}{dt} = \frac{W \cdot V}{(L/D) \cdot SFC_{hp}}$.
$\frac{dW}{dt} = - \frac{W \cdot V}{(L/D) \cdot SFC_{hp}}$.
$\frac{dW}{W} = - \frac{V}{(L/D) \cdot SFC_{hp}} dt$.

Integrating: $\ln(\frac{W_f}{W_0}) = - \frac{V}{(L/D) \cdot SFC_{hp}} E$.
$E = - \frac{(L/D) \cdot SFC_{hp}}{V} \ln(\frac{W_f}{W_0}) = \frac{(L/D) \cdot SFC_{hp}}{V} \ln(\frac{W_0}{W_f})$.

Wait, the units are tricky here. If $SFC_{hp}$ is in lb/hr/hp, then:
$E = \frac{(L/D)}{V} \cdot \frac{1}{SFC_{hp}} \ln(\frac{W_0}{W_f})$. This is the structure from some sources.
Let's clarify the common forms.

A common form using **power-specific fuel consumption ($c_p$)** in terms of fuel weight per unit power per unit time, e.g., lb/(hp-hr).
$E = \frac{(L/D)_{max}}{V_{cruise}} \cdot \frac{1}{c_p} \ln(\frac{W_0}{W_f})$

Let's assume the problem implies the correct units for $SFC_{hp}$ such that the equation works.
$SFC_{hp} = 0.5 \frac{lb}{hr \cdot hp}$.
$V = 150 \text{ knots} = 150 \times 1.68781 \text{ ft/s} \approx 253.17 \text{ ft/s}$.

The equation should relate to power and thrust.
Thrust required $T_R = \frac{W}{L/D}$.
Power required $P_R = T_R \cdot V = \frac{W \cdot V}{L/D}$.

Fuel flow rate $\dot{W}_f = \frac{P_R}{SFC_{hp}} = \frac{W \cdot V}{(L/D) \cdot SFC_{hp}}$.
$\frac{dW}{dt} = -\dot{W}_f = - \frac{W \cdot V}{(L/D) \cdot SFC_{hp}}$.
$\frac{dW}{W} = - \frac{V}{(L/D) \cdot SFC_{hp}} dt$.

Integrating $\int_{W_0}^{W_f} \frac{dW}{W} = \int_0^E - \frac{V}{(L/D) \cdot SFC_{hp}} dt$.
$\ln(\frac{W_f}{W_0}) = - E \frac{V}{(L/D) \cdot SFC_{hp}}$.
$E = - \frac{(L/D) \cdot SFC_{hp}}{V} \ln(\frac{W_f}{W_0}) = \frac{(L/D) \cdot SFC_{hp}}{V} \ln(\frac{W_0}{W_f})$.

Let's stick to the units as given and the direct formula.
$E = \frac{15 \cdot 0.5}{150} \ln(\frac{10000}{3000})$
$E = \frac{7.5}{150} \ln(3.333)$
$E = 0.05 \cdot 1.204$
$E = 0.0602$ hours. This seems very low.

**Let's check a standard reference for unit consistency:**

Eshelby (Aircraft Performance) often uses the form:
$E = \frac{1}{V} \frac{(L/D)}{c_p} \ln(\frac{W_0}{W_f})$ where $c_p$ is fuel weight per unit power per unit time (e.g., kg/kW-hr or lb/hp-hr).

If $SFC_{hp} = 0.5 \frac{lb}{hr \cdot hp}$ then $c_p = 0.5$.
$V = 150 \text{ knots} \approx 253.17 \text{ ft/s}$.

$E = \frac{1}{253.17 \text{ ft/s}} \frac{15}{0.5 \frac{lb}{hr \cdot hp}} \ln(\frac{10000}{3000})$
The units of $c_p$ seem to require conversion of $V$.
If $V$ is in knots and $c_p$ in lb/hp-hr:
$E = \frac{(L/D)}{V \cdot c_p} \ln(\frac{W_0}{W_f})$. This is also a common form.

Let's try this form:
$E = \frac{15}{150 \text{ knots} \cdot 0.5 \frac{lb}{hr \cdot hp}} \ln(\frac{10000}{3000})$
$E = \frac{15}{75} \ln(3.333)$
$E = 0.2 \cdot 1.204 = 0.2408$ hours. Still quite low.

**Revisiting the Derivation with Power:**

Power required: $P_R = \frac{W \cdot V}{L/D}$.
Fuel flow rate: $\dot{W}_f = \frac{P_R}{SFC_{hp}} = \frac{W \cdot V}{(L/D) \cdot SFC_{hp}}$.
Let $k = \frac{V}{(L/D) \cdot SFC_{hp}}$. This $k$ has units of $1/hr$ if $V$ is in knots and $SFC_{hp}$ in $lb/hr/hp$.
$\frac{dW}{dt} = -k W$.
$\int_{W_0}^{W_f} \frac{dW}{W} = \int_0^E -k dt$.
$\ln(\frac{W_f}{W_0}) = -kE$.
$E = \frac{1}{k} \ln(\frac{W_0}{W_f}) = \frac{(L/D) \cdot SFC_{hp}}{V} \ln(\frac{W_0}{W_f})$.

Let's assume $SFC_{hp}$ is indeed $0.5 \frac{lb}{hr \cdot hp}$.
And $V$ is in knots.
Then $E = \frac{(L/D) \cdot SFC_{hp}}{V} \ln(\frac{W_0}{W_f})$.
$E = \frac{15 \cdot 0.5}{150} \ln(\frac{10000}{3000}) = \frac{7.5}{150} \times 1.204 = 0.05 \times 1.204 = 0.0602$ hours.

**There might be an issue with how $SFC_{hp}$ is defined or used in this specific context or the typical values expected.**
A more realistic SFC for a turboprop might be around $0.45-0.6 \frac{lb}{hp \cdot hr}$.
A more realistic $L/D$ for a cruise aircraft might be 12-18.
A cruise speed of 150 knots is reasonable for a turboprop.

**Let's assume $SFC_{hp}$ is a factor related to fuel flow per unit weight of aircraft per unit time.**

Let's consider the fundamental relation:
Rate of fuel consumption $(\frac{dW_f}{dt})$ is proportional to Power Required $(\frac{W \cdot V}{L/D})$ and $SFC_{hp}$.
$\frac{dW_f}{dt} = \frac{W \cdot V}{(L/D) \cdot SFC_{hp}}$

Let's use the specific fuel consumption $c_p$ directly as in lbs of fuel per hour per horsepower.
$E = \frac{L/D}{V} \times \frac{1}{c_p} \ln(\frac{W_0}{W_f})$.

If $V$ is in knots, $c_p$ in $lb/(hp \cdot hr)$, and $L/D$ is dimensionless:
The units for $\frac{L/D}{V \cdot c_p}$ would be $\frac{1}{knots \cdot (lb/hp/hr)} = \frac{hp \cdot hr}{knots \cdot lb}$. This is not hours.

Let's use $V$ in ft/s. $V = 150 \text{ knots} = 253.17 \text{ ft/s}$.
$c_p = 0.5 \frac{lb}{hr \cdot hp}$.
$1 \text{ hp} = 550 \frac{ft \cdot lb}{s}$.

$E = \frac{(L/D)}{V (\text{ft/s})} \times \frac{1}{c_p (\frac{lb}{hr \cdot hp}) \cdot (550 \frac{ft \cdot lb}{s \cdot hp})} \ln(\frac{W_0}{W_f})$
$E = \frac{(L/D) \cdot 550}{V (\text{ft/s}) \cdot c_p (\frac{lb}{hr \cdot hp})} \ln(\frac{W_0}{W_f})$

$E = \frac{15 \cdot 550}{253.17 \cdot 0.5} \ln(\frac{10000}{3000})$
$E = \frac{8250}{126.585} \ln(3.333)$
$E = 65.17 \cdot 1.204$
$E = 78.47$ hours.

This is a much more realistic endurance figure for an aircraft with a large fuel fraction and efficient L/D. The key is the consistent unit usage for $SFC$ and velocity. The prompt's $SFC_{hp}$ likely implies $lb/(hp \cdot hr)$.

**Corrected Answer:**

$V = 150 \text{ knots} \approx 253.17 \text{ ft/s}$.
$SFC_{hp} = 0.5 \frac{lb}{hr \cdot hp}$.
$E = \frac{(L/D) \cdot 550}{V (\text{ft/s}) \cdot SFC_{hp} (\frac{lb}{hr \cdot hp})} \ln(\frac{W_0}{W_f})$
$E = \frac{15 \cdot 550}{253.17 \cdot 0.5} \ln(\frac{10000}{3000})$
$E = \frac{8250}{126.585} \times 1.204 \approx 65.17 \times 1.204 \approx \mathbf{78.47 \text{ hours}}$.

**Important Point:** Always ensure consistent units when using endurance equations. Conversion of velocity to ft/s is often necessary when SFC is given in imperial units with horsepower.

---

### 3. Endurance for Jet Aircraft

Jet aircraft have a different thrust generation mechanism than propeller aircraft. Their specific fuel consumption is typically given in terms of **thrust specific fuel consumption (TSFC)**, denoted as $c_t$, in units of lb/(hr·lbf) or kg/(s·N).

**Key Factors Influencing Jet Endurance:**

*   **L/D Ratio:** Still the most critical aerodynamic factor for efficiency.
*   **Thrust Specific Fuel Consumption ($c_t$):** Lower $c_t$ is better for endurance.
*   **Weight:** As fuel is burned, weight decreases, affecting the required thrust and L/D.
*   **Cruise Velocity:** Jet aircraft typically cruise at higher speeds than propeller aircraft.

**Derivation of the Breguet Endurance Equation (Jet Aircraft):**

1.  **Thrust Required ($T_R$):** For level flight, $T_R = W / (L/D)$.
2.  **Rate of Fuel Burn:**
    *   The rate of fuel consumption is related to the thrust produced and the TSFC: $\frac{dW_f}{dt} = c_t \cdot T$.
    *   For level flight, $T = T_R = \frac{W}{L/D}$.
    *   So, $\frac{dW_f}{dt} = c_t \cdot \frac{W}{L/D}$.

3.  **Relating Fuel Burn to Weight Change:**
    *   $\frac{dW}{dt} = - \frac{dW_f}{dt} = - c_t \cdot \frac{W}{L/D}$.

4.  **Separating Variables and Integrating:**
    *   $\frac{dW}{W} = - c_t \cdot \frac{1}{(L/D)} dt$.
    *   Integrating from initial weight $W_0$ to final weight $W_f$:
        $\int_{W_0}^{W_f} \frac{dW}{W} = \int_{0}^{E} - c_t \cdot \frac{1}{(L/D)} dt$.
        $\ln(\frac{W_f}{W_0}) = - E \cdot c_t \cdot \frac{1}{(L/D)}$.

5.  **The Breguet Endurance Equation (Jet):**
    *   Solving for Endurance ($E$):
        $E = \frac{(L/D)}{c_t} \ln(\frac{W_0}{W_f})$

    *   **Important Note:** Similar to the propeller case, this assumes constant $L/D$ and $c_t$. Jet engines' $c_t$ can vary with altitude and throttle setting.

**Key Insight:** To maximize endurance for a jet aircraft, we need to:

*   Maximize the $(L/D)$ ratio.
*   Minimize the thrust specific fuel consumption ($c_t$).
*   Maximize the fuel fraction $\ln(\frac{W_0}{W_f})$.

**Raymer's Perspective:**

Raymer also presents this equation, emphasizing that the $(L/D)_{max}$ is often used for cruise performance estimation. He highlights that jet aircraft typically have lower $(L/D)$ ratios than propeller aircraft but operate at higher speeds.

**Fielding's Perspective (Introduction to Aircraft Design):**

Fielding likely covers the same fundamental equations, perhaps discussing the practical implications of TSFC variation with altitude and Mach number, which are crucial for accurate mission planning. He might also touch upon the trade-offs between engine size and fuel consumption for endurance-focused designs.

**Example:**

A jet aircraft has the following characteristics for its cruise phase:
*   Initial Weight ($W_0$): 50,000 lbs
*   Final Weight ($W_f$): 20,000 lbs (allowing for climb, cruise, and reserve)
*   Cruise L/D Ratio: 12
*   Thrust Specific Fuel Consumption ($c_t$): 0.75 lb/(hr·lbf)

Estimate the endurance of this aircraft during the cruise phase.

**Answer:**

Using the Breguet endurance equation for jet aircraft:
$E = \frac{(L/D)}{c_t} \ln(\frac{W_0}{W_f})$

$E = \frac{12}{0.75 \text{ lb/(hr·lbf)}} \ln(\frac{50000}{20000})$
$E = 16 \text{ hr} \cdot \text{lbf} \cdot \ln(2.5)$
$E = 16 \text{ hr} \cdot \text{lbf} \cdot 0.91629$
$E = 14.66 \text{ hours}$

**Important Point:** The units of $c_t$ (lb/(hr·lbf)) correctly result in hours for the endurance when multiplied by the dimensionless $L/D$ and the logarithm term.

---

### 4. Factors Affecting Endurance and Design Implications

Understanding the factors that influence endurance allows designers to make informed decisions during the conceptual and preliminary design phases.

**Key Design Parameters and Their Impact:**

*   **Aerodynamic Efficiency (L/D):**
    *   **Impact:** Higher $L/D$ directly increases endurance.
    *   **Design Choices:**
        *   **Wing Design:** High aspect ratio wings, efficient airfoils, minimizing induced drag and parasite drag.
        *   **Fuselage and Nacelle Design:** Streamlining to reduce parasite drag.
        *   **High-Lift Devices:** While useful for takeoff/landing, their drag at cruise must be minimized.

*   **Engine Specific Fuel Consumption ($SFC$ or $c_t$):**
    *   **Impact:** Lower SFC (propeller) or $c_t$ (jet) directly increases endurance.
    *   **Design Choices:**
        *   **Engine Selection:** Choosing more fuel-efficient engines (e.g., modern turboprops for lower speeds, high-bypass turbofans for jet aircraft).
        *   **Propeller Design:** Optimized propeller pitch and blade design for cruise efficiency.
        *   **Engine Integration:** Minimizing drag from engine nacelles and inlets.

*   **Fuel Capacity and Fuel Fraction:**
    *   **Impact:** The $\ln(W_0/W_f)$ term directly scales endurance. A larger fuel fraction (more fuel) leads to longer endurance.
    *   **Design Choices:**
        *   **Fuel Tank Design:** Integrating large fuel tanks within the wing and fuselage.
        *   **Weight Management:** Minimizing the empty weight of the aircraft (structure, systems, engines, payload) to maximize the proportion of fuel.
        *   **Structural Considerations:** Increased fuel load requires stronger structures, which can increase empty weight, creating a trade-off.

*   **Cruise Velocity ($V$):**
    *   **Impact:** For propeller aircraft, endurance is inversely proportional to velocity. For jet aircraft, velocity is not in the denominator of the simplified Breguet equation but is implicitly linked to $L/D$ and $c_t$, which are often optimized at specific cruise Mach numbers.
    *   **Design Choices:**
        *   **Propeller Aircraft:** Flying at a slightly lower cruise speed can significantly increase endurance. This is a key trade-off for endurance-optimized propeller aircraft.
        *   **Jet Aircraft:** Selecting a cruise Mach number that balances aerodynamic efficiency, engine performance, and $c_t$.

*   **Aircraft Weight:**
    *   **Impact:** As weight decreases due to fuel burn, the aircraft can fly at a lower angle of attack, potentially improving the $L/D$ ratio. The Breguet equation simplifies this by using the ratio of initial to final weight.
    *   **Design Choices:**
        *   **Lightweight Structures:** Using advanced materials and efficient structural designs.
        *   **System Optimization:** Minimizing the weight of non-propulsive systems.

**Booth's Perspective (Aircraft Engineering Design, Structures and Systems):**

Booth would likely emphasize the structural implications of carrying large fuel loads. Designing fuel tanks that are integral to the wing structure (wet wings) or using conformal fuel tanks will be discussed. He would also touch upon the systems required to manage fuel, such as pumps, valves, and fuel quantity indication systems, which add to the empty weight.

**How Endurance Influences Design (CO1):**

*   **Mission Requirements:** If a mission requires long loiter times, endurance becomes a primary design driver. This will dictate:
    *   The size of the fuel tanks and thus the overall aircraft size and wing loading.
    *   The choice of efficient engines.
    *   A focus on maximizing the $L/D$ ratio.
*   **Payload vs. Endurance Trade-off:** More fuel means less space and weight capacity for payload (passengers, cargo, weapons). Designers must balance these competing requirements.
*   **Cost:** Larger fuel capacity and more efficient engines can increase the acquisition and operating costs of the aircraft.
*   **Safety:** Reserve fuel requirements are crucial and must be factored into $W_f$.

---

### 5. Estimating Endurance for Different Aircraft Types

**General Approach:**

1.  **Define Mission Profile:** Determine the required flight segments (climb, cruise, loiter, descent).
2.  **Estimate Performance Parameters:**
    *   $L/D$ ratios for each flight segment.
    *   Specific fuel consumption ($SFC_{hp}$ or $c_t$) for the chosen engines at the relevant altitudes and power/thrust settings.
    *   Cruise velocities.
    *   Initial and final weights ($W_0$, $W_f$).
3.  **Use Breguet Equations:** Apply the appropriate Breguet equation for each cruise segment.
4.  **Account for Non-Cruise Phases:**
    *   **Climb:** Fuel consumed during climb is significant. It can be estimated using climb power/thrust and SFC, and the duration of the climb.
    *   **Loiter:** If loitering is required, it's typically done at a speed that maximizes endurance (often slower than cruise speed, leading to a lower $L/D$ but much lower fuel burn rate). A separate endurance calculation for loiter might be needed.
    *   **Descent:** Fuel consumption during descent is usually minimal if the engines are at idle.
5.  **Iterative Process:** Due to changing weight and performance, a more accurate estimate involves integrating over the flight profile, often using a step-wise approach where weight, $L/D$, and SFC are updated for each segment.

**Example: Long-Range Patrol Aircraft (e.g., P-8 Poseidon - Jet, or a large turboprop like a Dash 8 with extended range)**

*   **Mission:** Long duration surveillance, typically at high altitude and moderate speed.
*   **Design Focus:** High fuel fraction, efficient high-bypass turbofan engines (for jets) or turboprops, high aspect ratio wings for good $L/D$.
*   **Endurance Estimate:** Likely uses the jet Breguet equation. The cruise speed will be optimized for a balance between $L/D$ and $c_t$.

**Example: Light Sport Aircraft (e.g., Cessna 172 - Propeller)**

*   **Mission:** General aviation, training, short-range travel.
*   **Design Focus:** Simplicity, low cost, moderate performance. Fuel fraction is important but not as extreme as patrol aircraft.
*   **Endurance Estimate:** Uses the propeller Breguet equation. Typically flown at speeds that balance fuel efficiency with travel time.

---

### 6. Summary and Key Takeaways

*   **Endurance** is the time an aircraft can stay airborne.
*   The **Breguet Endurance Equations** are fundamental tools for estimating endurance for propeller-driven and jet aircraft.
    *   Propeller: $E = \frac{(L/D) \cdot SFC_{hp}}{V} \ln(\frac{W_0}{W_f})$ (Requires careful unit conversion for $V$ and $SFC_{hp}$)
    *   Jet: $E = \frac{(L/D)}{c_t} \ln(\frac{W_0}{W_f})$
*   **Maximizing Endurance** requires maximizing $L/D$, minimizing fuel consumption rate (low $SFC_{hp}$ or $c_t$), and maximizing the fuel fraction $\ln(W_0/W_f)$.
*   **Design Implications:** Endurance requirements heavily influence the choice of engines, wing design, fuel capacity, and overall aircraft configuration.
*   **Trade-offs:** Endurance often competes with payload, speed, and cost.
*   **Accuracy:** The Breguet equations provide useful initial estimates. For precise calculations, a detailed mission profile analysis with integration over changing parameters is necessary.

---

### 7. Practice Questions

1.  **Propeller Aircraft Endurance:** A small trainer aircraft has a maximum $L/D$ of 10 at a cruise speed of 120 knots. Its piston engine has a power-specific fuel consumption ($SFC_{hp}$) of 0.6 lb/(hp·hr). If the aircraft starts with 50 gallons of fuel (density of 6 lb/gallon) and needs 5 gallons for reserves, calculate its maximum endurance. Assume engine power output is 200 hp.
    *   $W_0 = 2000$ lbs (Aircraft empty weight + pilot + usable fuel)
    *   Usable fuel = 50 gal * 6 lb/gal = 300 lbs.
    *   $W_0 = 2000 + 300 = 2300$ lbs.
    *   $W_f = 2000 + (300-5 \times 6) = 2000 + 270 = 2270$ lbs.
    *   No, $W_0$ is the weight at the start of the endurance calculation. If we are calculating total endurance, $W_0$ is the takeoff weight. Let's assume the question is about cruise endurance, so $W_0$ is weight at start of cruise and $W_f$ is weight at end of cruise.
    *   Let's assume $W_0$ is aircraft weight *with* fuel at the start of the endurance segment, and $W_f$ is the minimum weight at the end of the endurance segment.
    *   Assume aircraft empty weight = 1800 lbs. Pilot = 200 lbs.
    *   Total fuel = 300 lbs. Reserve fuel = 30 lbs. Usable fuel for endurance = 270 lbs.
    *   $W_0 = 1800 + 200 + 300 = 2300$ lbs.
    *   $W_f = 1800 + 200 + 30 = 2030$ lbs.
    *   $V = 120 \text{ knots} \approx 202.5 \text{ ft/s}$.
    *   $SFC_{hp} = 0.6 \frac{lb}{hr \cdot hp}$.
    *   $L/D = 10$.

    **Answer:**
    $E = \frac{(L/D) \cdot 550}{V (\text{ft/s}) \cdot SFC_{hp} (\frac{lb}{hr \cdot hp})} \ln(\frac{W_0}{W_f})$
    $E = \frac{10 \cdot 550}{202.5 \cdot 0.6} \ln(\frac{2300}{2030})$
    $E = \frac{5500}{121.5} \ln(1.133)$
    $E = 45.267 \times 0.1249 \approx \mathbf{5.65 \text{ hours}}$.

2.  **Jet Aircraft Endurance:** A business jet has a cruise $L/D$ of 14 and a TSFC ($c_t$) of 0.6 lb/(hr·lbf). If the aircraft's weight at the start of cruise is 40,000 lbs and it will reach its final weight of 25,000 lbs at the end of the cruise segment, what is its endurance?

    **Answer:**
    $E = \frac{(L/D)}{c_t} \ln(\frac{W_0}{W_f})$
    $E = \frac{14}{0.6 \text{ lb/(hr·lbf)}} \ln(\frac{40000}{25000})$
    $E = 23.333 \text{ hr} \cdot \text{lbf} \cdot \ln(1.6)$
    $E = 23.333 \times 0.4700 \approx \mathbf{10.97 \text{ hours}}$.

3.  **Design Impact:** Explain how increasing the fuel fraction of an aircraft affects its endurance and potentially its empty weight.

    **Answer:**
    Increasing the fuel fraction means a larger proportion of the aircraft's total weight is fuel. This directly increases endurance by increasing the $\ln(W_0/W_f)$ term in the Breguet equations. However, carrying more fuel requires larger and stronger fuel tanks and possibly a strengthened airframe to handle the higher gross weight and bending moments. These additions increase the aircraft's empty weight, which can partially offset the gains in endurance and reduce the payload capacity. It's a critical design trade-off.

---

### 8. Important Points to Remember

*   **Units Consistency:** Crucial for accurate endurance calculations, especially with propeller SFC.
*   **Assumptions:** The Breguet equations assume constant $L/D$, $c_p$/$c_t$, and $V$. Real-world endurance can deviate due to these variations.
*   **Mission Segment Analysis:** Endurance is often calculated for specific segments (e.g., cruise), but total mission endurance includes climb and any loiter phases.
*   **Design Trade-offs:** Endurance is a performance parameter that must be balanced with other requirements like speed, payload, and cost.
*   **Fuel Fraction:** Maximizing fuel fraction is a direct path to maximizing endurance, but it comes with structural and weight penalties.

---
This concludes the study notes for Endurance in Module 3. Remember to consult your textbooks for further details and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
