---
title: "exhaust nozzles"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 3: Combustion – Theory of Combustion"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cb8"
status: "completed"
scrapedAt: "2026-05-20T18:14:05.162Z"
---
# Gas Turbine and Jet Propulsion - Module 3: Combustion – Theory of Combustion

## Topic: Exhaust Nozzles

This topic focuses on the crucial role of exhaust nozzles in converting the thermal energy of the hot combustion gases into kinetic energy for thrust generation in gas turbine engines, particularly in jet propulsion applications. We will explore the different types of nozzles, their design principles, performance characteristics, and the thermodynamic processes involved.

---

### 1. Introduction to Exhaust Nozzles

**1.1 Purpose of the Exhaust Nozzle:**
The primary function of an exhaust nozzle in a gas turbine engine is to **accelerate the hot, high-pressure exhaust gases** from the turbine outlet to produce thrust. This is achieved by converting the internal energy (enthalpy) of the gas into kinetic energy (velocity).

**1.2 Thermodynamic Basis:**
The process occurring within an exhaust nozzle is fundamentally **adiabatic expansion**. The gases expand and cool, their pressure drops, and their velocity increases significantly. This conversion of energy is governed by the principles of thermodynamics and compressible fluid flow.

**1.3 Relationship to Gas Turbine Cycle:**
The nozzle is the final component in the gas turbine cycle. The efficiency of the nozzle significantly impacts the overall performance of the engine, directly affecting thrust and specific impulse.

---

### 2. Types of Exhaust Nozzles

The design of the exhaust nozzle is highly dependent on the operating conditions and the desired performance characteristics of the gas turbine engine.

**2.1 Convergent Nozzle:**
*   **Description:** A nozzle with a decreasing cross-sectional area in the direction of flow.
*   **Function:** Accelerates subsonic flow.
*   **Choking:** At a specific pressure ratio across the nozzle, the flow at the throat (smallest cross-sectional area) reaches sonic velocity (Mach number = 1). This condition is known as **choking**. Once choked, further reduction in back pressure does not increase the mass flow rate.
*   **Application:** Primarily used in turbojet and turbofan engines where the exhaust gas velocity is typically subsonic or at most sonic at the nozzle exit under most operating conditions.

**2.2 Convergent-Divergent (C-D) Nozzle (De Laval Nozzle):**
*   **Description:** A nozzle with a convergent section followed by a divergent section. The throat is the point of minimum cross-sectional area between the two sections.
*   **Function:**
    *   **Convergent Section:** Accelerates subsonic flow to sonic velocity at the throat.
    *   **Divergent Section:** Further accelerates the flow beyond sonic velocity (supersonic flow) by allowing further expansion.
*   **Conditions for Supersonic Flow:** For supersonic flow to be achieved in the divergent section, the flow must be **choked at the throat**.
*   **Application:** Essential for high-speed aircraft (supersonic flight regimes) and rocket engines where high exhaust velocities are required to generate significant thrust.

**2.3 Variable Geometry Nozzles:**
*   **Description:** Nozzles with adjustable throat or exit areas, allowing for control over exhaust gas velocity and mass flow.
*   **Types:**
    *   **Variable Area Convergent Nozzle:** Adjusts the throat area to maintain choked flow under varying engine conditions or to control thrust.
    *   **Variable Area Convergent-Divergent (V.A.C.D.) Nozzle:** Allows for adjustment of both throat and exit areas to optimize performance across a range of flight speeds and altitudes. Often used in military aircraft for efficient operation in both subsonic and supersonic regimes.
*   **Advantages:** Improved engine performance and efficiency over a wider operating envelope, reduced noise levels, and better thrust vectoring capabilities in some advanced designs.

---

### 3. Thermodynamics of Nozzle Flow

The operation of exhaust nozzles is governed by the principles of **isentropic flow** (assuming no friction or heat transfer).

**3.1 Isentropic Expansion:**
*   **Definition:** An adiabatic process where entropy remains constant. In ideal nozzles, the expansion process is approximated as isentropic.
*   **Key Equations:**
    *   **Mach number (M):** $M = \frac{V}{a}$, where $V$ is the flow velocity and $a$ is the speed of sound.
    *   **Speed of sound (a):** $a = \sqrt{\gamma R T}$, where $\gamma$ is the ratio of specific heats, $R$ is the specific gas constant, and $T$ is the absolute temperature.
    *   **Pressure-Velocity Relationship:** $\frac{P_0}{P} = \left(1 + \frac{\gamma-1}{2}M^2\right)^{\frac{\gamma}{\gamma-1}}$, where $P_0$ is the stagnation pressure and $P$ is the static pressure.
    *   **Temperature-Velocity Relationship:** $\frac{T_0}{T} = 1 + \frac{\gamma-1}{2}M^2$, where $T_0$ is the stagnation temperature and $T$ is the static temperature.
    *   **Area-Velocity Relationship (for isentropic flow):** $\frac{dA}{A} = \frac{M^2-1}{M} \frac{dV}{V}$.
        *   This equation demonstrates that in a convergent section ($dA < 0$), if $M < 1$ (subsonic), $dV > 0$ (velocity increases).
        *   In a divergent section ($dA > 0$), if $M > 1$ (supersonic), $dV > 0$ (velocity increases).

**3.2 Choked Flow at the Throat:**
*   **Condition:** When the flow reaches the throat of a C-D nozzle, the Mach number is $M = 1$.
*   **Throat Area (A*):** The area at which $M=1$.
*   **Pressure Ratio for Choking:** $\frac{P_0}{P^*} = \left(1 + \frac{\gamma-1}{2}\right)^{\frac{\gamma}{\gamma-1}} = \left(\frac{\gamma+1}{2}\right)^{\frac{\gamma}{\gamma-1}}$. This is the critical pressure ratio.
*   **Mass Flow Rate:** The mass flow rate through a choked nozzle is constant and given by:
    $\dot{m} = A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{2(\gamma-1)}}$

**3.3 Flow in the Divergent Section:**
*   **Supersonic Acceleration:** If the nozzle is C-D and the throat is choked, the flow in the divergent section expands supersonically, leading to a further increase in velocity and a decrease in pressure and temperature.
*   **Over-expansion and Under-expansion:**
    *   **Ideal Expansion:** The nozzle exit pressure ($P_e$) equals the ambient pressure ($P_a$). This is ideal and maximizes thrust for a given nozzle geometry.
    *   **Over-expansion:** $P_e < P_a$. The nozzle has expanded the gas too much. This leads to flow separation from the nozzle walls and reduced thrust.
    *   **Under-expansion:** $P_e > P_a$. The nozzle has not expanded the gas enough. The gas continues to expand outside the nozzle, creating a weaker expansion wave and reducing thrust.

---

### 4. Nozzle Performance and Thrust

**4.1 Thrust Equation:**
The net thrust ($F_{net}$) produced by a jet engine is given by:
$F_{net} = \dot{m} (V_e - V_a) + (P_e - P_a) A_e$
Where:
*   $\dot{m}$ is the mass flow rate of exhaust gases.
*   $V_e$ is the exhaust gas velocity.
*   $V_a$ is the aircraft velocity (airspeed).
*   $P_e$ is the exhaust pressure at the nozzle exit.
*   $P_a$ is the ambient atmospheric pressure.
*   $A_e$ is the nozzle exit area.

**4.2 Thrust Components:**
*   **Momentum Thrust:** $\dot{m} (V_e - V_a)$. This is the thrust due to the change in momentum of the air/gas.
*   **Pressure Thrust:** $(P_e - P_a) A_e$. This is the thrust due to the pressure difference between the exhaust and the ambient air acting on the nozzle exit area.

**4.3 Ideal Nozzle Thrust:**
For an ideally expanded nozzle ($P_e = P_a$), the pressure thrust is zero. The total thrust is purely momentum thrust.

**4.4 Nozzle Efficiency:**
Nozzle efficiency is a measure of how effectively the nozzle converts the available thermal energy into kinetic energy. It is often defined in terms of the actual thrust compared to the ideal thrust achievable for the given conditions.

**4.5 Specific Impulse ($I_{sp}$):**
A key performance parameter for jet engines, defined as the thrust produced per unit weight flow rate of propellant.
$I_{sp} = \frac{F_{net}}{\dot{W}} = \frac{F_{net}}{\dot{m} g}$
Where $\dot{W}$ is the weight flow rate and $g$ is the acceleration due to gravity. A more efficient nozzle will contribute to a higher specific impulse.

---

### 5. Factors Affecting Nozzle Performance

*   **Nozzle Geometry:** The shape and area ratio of the nozzle significantly influence the exhaust velocity and pressure distribution.
*   **Back Pressure:** The ambient atmospheric pressure influences the pressure thrust component and whether the nozzle operates at ideal expansion, over-expansion, or under-expansion.
*   **Flow Properties:** The temperature, pressure, and composition of the exhaust gases affect the speed of sound and the flow behavior.
*   **Friction and Viscosity:** Real nozzles have friction, which reduces the isentropic efficiency by dissipating energy. This leads to lower exit velocities than predicted by ideal isentropic flow.
*   **Flow Separation:** In over-expanded nozzles, flow separation can occur, reducing thrust and potentially damaging the nozzle.

---

### 6. Applications and Examples

*   **Turbojet Engines:** Typically use convergent nozzles to accelerate exhaust gases to high subsonic or sonic velocities.
*   **Turbofan Engines:** Similar to turbojets, often use convergent nozzles for the core exhaust, while the fan bypass air can be expanded through a nozzle as well.
*   **Supersonic Aircraft:** Employ C-D nozzles to achieve supersonic exhaust velocities for efficient thrust generation at high speeds.
*   **Rocket Engines:** Exclusively use C-D nozzles for extreme acceleration of combustion products to very high velocities, essential for space propulsion.
*   **Variable Geometry Nozzles (e.g., in military jets):** Allow for efficient operation across different flight regimes, from takeoff to supersonic cruise, by optimizing the expansion of exhaust gases. For example, a variable geometry nozzle can be adjusted to have a larger exit area at higher flight speeds to minimize over-expansion.

---

### 7. Important Points to Remember

*   **Nozzle Function:** Convert thermal energy into kinetic energy for thrust.
*   **Convergent Nozzle:** Accelerates subsonic flow, can choke at $M=1$.
*   **C-D Nozzle:** Accelerates flow to supersonic speeds ($M>1$).
*   **Choking:** Occurs at the throat ($M=1$) when the pressure ratio is critical.
*   **Isentropic Flow:** Idealized flow with constant entropy, used for theoretical analysis.
*   **Thrust Equation:** Net thrust is from momentum and pressure differences.
*   **Ideal Expansion:** Exit pressure equals ambient pressure ($P_e = P_a$).
*   **Variable Geometry:** Enhances performance over a range of conditions.
*   **Nozzle efficiency** is crucial for overall engine performance.

---

### 8. Practice Questions and Exercises

**Question 1:**
A convergent nozzle is supplied with a stagnation pressure of 500 kPa and a stagnation temperature of 800 K. The ambient pressure is 100 kPa. The ratio of specific heats for the gas is 1.3, and the gas constant is 297 J/kg·K. Assuming isentropic flow, calculate:
a) The critical pressure at the throat.
b) The Mach number at the throat.
c) The mass flow rate per unit area at the throat, if the throat area is 0.01 m².
d) The exit velocity if the nozzle is choked and the exit pressure is 100 kPa.

**Answer 1:**
Given: $P_0 = 500 \text{ kPa}$, $T_0 = 800 \text{ K}$, $P_a = 100 \text{ kPa}$, $\gamma = 1.3$, $R = 297 \text{ J/kg·K}$.

a) Critical pressure ($P^*$):
$P^* = P_0 \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}}$
$P^* = 500 \text{ kPa} \left(\frac{2}{1.3+1}\right)^{\frac{1.3}{1.3-1}} = 500 \text{ kPa} \left(\frac{2}{2.3}\right)^{\frac{1.3}{0.3}} = 500 \text{ kPa} (0.8696)^{4.333}$
$P^* \approx 500 \text{ kPa} \times 0.537 \approx 268.5 \text{ kPa}$

b) Mach number at the throat ($M^*$):
By definition, $M^* = 1$ in a choked nozzle.

c) Mass flow rate per unit area at the throat ($\frac{\dot{m}}{A^*}$):
$\frac{\dot{m}}{A^*} = P_0 \sqrt{\frac{\gamma}{R T_0}} \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{2(\gamma-1)}}$
$\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{2(\gamma-1)}} = \left(\frac{2}{2.3}\right)^{\frac{2.3}{2(0.3)}} = (0.8696)^{3.833} \approx 0.607$
$\frac{\dot{m}}{A^*} = 500 \times 10^3 \text{ Pa} \sqrt{\frac{1.3}{297 \text{ J/kg·K} \times 800 \text{ K}}} \times 0.607$
$\frac{\dot{m}}{A^*} = 500 \times 10^3 \sqrt{\frac{1.3}{237600}} \times 0.607$
$\frac{\dot{m}}{A^*} = 500 \times 10^3 \times 0.002324 \times 0.607 \approx 706.2 \text{ kg/m}^2\text{s}$

d) Exit velocity ($V_e$) if choked and $P_e = P_a = 100 \text{ kPa}$:
Since $P_e = 100 \text{ kPa} < P^* = 268.5 \text{ kPa}$, the nozzle is indeed choked.
We need to find the Mach number ($M_e$) at the exit where $P_e = 100 \text{ kPa}$.
$\frac{P_0}{P_e} = \left(1 + \frac{\gamma-1}{2}M_e^2\right)^{\frac{\gamma}{\gamma-1}}$
$\frac{500}{100} = 5 = \left(1 + \frac{1.3-1}{2}M_e^2\right)^{\frac{1.3}{1.3-1}} = \left(1 + 0.15M_e^2\right)^{4.333}$
$5^{1/4.333} = 1 + 0.15M_e^2$
$1.477 \approx 1 + 0.15M_e^2$
$0.477 \approx 0.15M_e^2$
$M_e^2 \approx \frac{0.477}{0.15} \approx 3.18$
$M_e \approx \sqrt{3.18} \approx 1.78$ (supersonic flow)

Now, find the exit temperature ($T_e$):
$\frac{T_0}{T_e} = 1 + \frac{\gamma-1}{2}M_e^2 = 1 + 0.15 \times (1.78)^2 = 1 + 0.15 \times 3.1684 \approx 1 + 0.475 \approx 1.475$
$T_e = \frac{T_0}{1.475} = \frac{800 \text{ K}}{1.475} \approx 542.4 \text{ K}$

Finally, calculate the exit velocity ($V_e$):
$V_e = M_e \times a_e = M_e \sqrt{\gamma R T_e}$
$V_e = 1.78 \sqrt{1.3 \times 297 \text{ J/kg·K} \times 542.4 \text{ K}}$
$V_e = 1.78 \sqrt{209856} \approx 1.78 \times 458.1 \approx 815.4 \text{ m/s}$

**Question 2:**
Why are convergent-divergent nozzles essential for achieving supersonic exhaust velocities? Explain using the area-velocity relationship.

**Answer 2:**
Convergent-divergent (C-D) nozzles are essential for achieving supersonic exhaust velocities due to the area-velocity relationship in compressible flow: $\frac{dA}{A} = \frac{M^2-1}{M} \frac{dV}{V}$.

1.  **Convergent Section:** In the convergent section ($dA < 0$), as long as the flow is subsonic ($M < 1$), the term $\frac{M^2-1}{M}$ is negative. Thus, $dA/A$ and $dV/V$ have opposite signs, meaning velocity increases ($dV > 0$) as the area decreases ($dA < 0$). This accelerates the flow from subsonic to sonic velocity at the throat.
2.  **Throat:** At the throat, the area is minimum. If the flow is choked, $M=1$. At $M=1$, the term $\frac{M^2-1}{M} = \frac{1^2-1}{1} = 0$. This means $dA/A = 0$, which implies that $dV/V$ can also be zero or change sign. The throat is where the flow reaches sonic speed.
3.  **Divergent Section:** In the divergent section ($dA > 0$), for the flow to become supersonic ($M > 1$), the term $\frac{M^2-1}{M}$ becomes positive. Thus, $dA/A$ and $dV/V$ have the same sign, meaning velocity continues to increase ($dV > 0$) as the area increases ($dA > 0$). This further expansion and acceleration of the already sonic flow to supersonic speeds is only possible in a divergent section.

A purely convergent nozzle can only accelerate flow up to sonic speed at its exit. To go beyond sonic speed, the area must increase to allow for further expansion and acceleration.

---

### 9. Alignment with Course Outcomes

*   **CO1 (Thermodynamics & Fluid Dynamics of Gas Turbine Cycles):** This topic directly applies principles of thermodynamics (isentropic expansion, pressure-temperature-velocity relationships) and fluid dynamics (compressible flow, Mach number, choking) to the exhaust nozzle, a critical component of the gas turbine cycle. (Knowledge Level: K3)
*   **CO3 (Analyze Gas Turbine System Performance):** Understanding nozzle performance is essential for analyzing the overall performance of a gas turbine engine, as it dictates the thrust output and influences efficiency. (Knowledge Level: K4)
*   **CO4 (Principles and Characteristics of Jet Propulsion):** The exhaust nozzle is fundamental to jet propulsion; its ability to accelerate exhaust gases is the direct mechanism for generating thrust. This topic covers the core principles of how jet engines achieve propulsion. (Knowledge Level: K2)

---
This comprehensive set of notes provides a strong foundation for understanding exhaust nozzles in gas turbine and jet propulsion systems. Remember to refer to the textbooks and reference books for deeper insights and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
