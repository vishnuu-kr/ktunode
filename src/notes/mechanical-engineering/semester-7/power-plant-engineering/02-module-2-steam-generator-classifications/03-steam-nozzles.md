---
title: "Steam nozzles"
subject: "POWER PLANT ENGINEERING"
module: "Module 2: Steam generator classifications"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1951d0cf480446439f"
status: "completed"
scrapedAt: "2026-05-20T18:16:12.191Z"
---
# POWER PLANT ENGINEERING

## Module 2: Steam Generator Classifications

### Topic: Steam Nozzles

---

**Module Learning Outcomes:**

*   Explain the function and types of steam nozzles in steam power plants.
*   Analyze the thermodynamic processes occurring in steam nozzles.
*   Calculate the flow rate and velocity of steam through nozzles.
*   Understand the concept of critical pressure and its effect on nozzle performance.
*   Discuss the design considerations and applications of steam nozzles.

**Course Outcomes Addressed by this Topic:**

*   **CO1:** Explain the layout, components and working of steam, gas, hydro, and nuclear power plants. (Knowledge Level: K2) - *Understanding the role of nozzles as a key component in the steam path.*
*   **CO3:** Calculate the performance parameters of steam turbines and steam nozzles. (Knowledge Level: K3) - *Directly addresses calculation of flow rate, velocity, and efficiency.*

---

### 1. Introduction to Steam Nozzles

**Key Concept:** A nozzle is a fluid passage of varying cross-sectional area designed to accelerate a fluid. In steam power plants, steam nozzles are crucial components that convert the internal thermal energy of high-pressure, high-temperature steam into kinetic energy. This high-velocity steam is then directed onto the turbine blades to produce mechanical work.

**Definition:**
*   **Steam Nozzle:** A carefully shaped passage through which steam expands, increasing its velocity and decreasing its pressure and temperature.

**Function in Steam Power Plants:**
*   **Energy Conversion:** Convert thermal energy of steam into kinetic energy.
*   **Steam Jet Formation:** Produce a high-velocity jet of steam.
*   **Turbine Operation:** Direct the steam jet onto the turbine blades for rotational work.

**Types of Nozzles (Based on Shape and Expansion Process):**

*   **Convergent Nozzle:** The cross-sectional area increases along the direction of flow.
    *   **Function:** Used for subsonic flow, where the velocity of the fluid is less than the speed of sound. In such cases, decreasing pressure leads to increasing velocity.
    *   **Application:** Typically used in situations where the back pressure is not significantly lower than the inlet pressure.
*   **Divergent Nozzle:** The cross-sectional area decreases along the direction of flow.
    *   **Function:** Used for supersonic flow, where the velocity of the fluid is greater than the speed of sound. In such cases, decreasing pressure leads to decreasing velocity, and increasing area is required for further expansion and acceleration.
*   **Convergent-Divergent (De Laval) Nozzle:** Consists of a convergent section followed by a divergent section.
    *   **Function:** This is the most common type used in steam turbines. It is designed to handle both subsonic and supersonic flow. The convergent section accelerates the steam to sonic velocity (Mach 1) at the throat (minimum cross-sectional area), and the divergent section further accelerates it to supersonic velocities.
    *   **Application:** Essential for efficient expansion of steam to low pressures in steam turbines.

---

### 2. Thermodynamic Processes in Steam Nozzles

**Key Concept:** The expansion of steam through a nozzle is ideally an **isentropic process** (constant entropy). This means there is no heat transfer to or from the surroundings, and the process is reversible. Real nozzles, however, experience frictional losses, making the process **adiabatic and irreversible**.

**Ideal Isentropic Expansion:**
*   **Process:** $s_1 = s_2$ (where 's' denotes entropy, and subscripts 1 and 2 refer to inlet and outlet conditions, respectively).
*   **Energy Conversion:** Enthalpy drop ($h_1 - h_2$) is converted into kinetic energy.
*   **Pressure-Volume (P-V) Diagram:** Shows a smooth expansion curve.
*   **Enthalpy-Entropy (h-s) Diagram:** Represents a vertical line from the initial state to the final state.

**Actual Adiabatic Irreversible Expansion:**
*   **Process:** $s_2 > s_1$ due to friction.
*   **Energy Conversion:** Only a portion of the enthalpy drop is converted into kinetic energy. Some energy is lost due to friction, which increases the internal energy of the steam and leads to a higher final enthalpy ($h_2' > h_2$).
*   **Nozzle Efficiency:** A measure of how effectively a nozzle converts thermal energy into kinetic energy.

---

### 3. Flow of Steam Through Nozzles

**Key Concept:** The flow of steam through a nozzle is governed by the principles of fluid dynamics and thermodynamics, particularly the conservation of mass, momentum, and energy.

**Governing Equations (Ideal Isentropic Flow):**

*   **Continuity Equation (Conservation of Mass):**
    *   $\dot{m} = \rho_1 A_1 v_1 = \rho_2 A_2 v_2$
    *   Where:
        *   $\dot{m}$ is the mass flow rate (kg/s)
        *   $\rho$ is the density (kg/m³)
        *   A is the cross-sectional area (m²)
        *   v is the velocity (m/s)

*   **Energy Equation (Steady Flow Energy Equation for Adiabatic Process):**
    *   $h_1 + \frac{v_1^2}{2} = h_2 + \frac{v_2^2}{2}$
    *   For negligible inlet velocity ($v_1 \approx 0$):
        *   $v_2 = \sqrt{2 (h_1 - h_2)}$

*   **Isentropic Relation for Steam:**
    *   $\frac{P_2}{P_1} = \left(\frac{v_2}{v_1}\right)^n = \left(\frac{T_2}{T_1}\right)^{\frac{n}{n-1}}$
    *   Where 'n' is the exponent for the isentropic process. For superheated steam, $n \approx 1.3$. For saturated steam, $n \approx 1.135$.

**Derivation of Velocity in terms of Pressure Drop:**

Combining the energy equation and the isentropic relation, we can derive the velocity of steam at any point in the nozzle. For a small pressure drop $dP$ and corresponding enthalpy drop $dh$:
*   $v dv = -dh$
*   From isentropic relation: $P v^n = C$ (constant) $\implies v = (C/P)^{1/n}$
*   Differentiating: $dv = -\frac{1}{n} \left(\frac{C}{P}\right)^{\frac{1}{n}-1} \frac{C}{P^2} dP = -\frac{1}{n} \frac{v}{P} dP$
*   Substituting dv in the energy equation: $v \left(-\frac{1}{n} \frac{v}{P} dP\right) = -dh$
*   $dh = \frac{1}{n} \frac{v^2}{P} dP$
*   From $v^2 = 2(h_1 - h)$, $dh = d(v^2/2) = v dv$. This approach is getting complicated.

Let's use a simpler approach for deriving velocity from enthalpy.
*   Assuming $v_1 \approx 0$, the final velocity $v_2$ for an isentropic expansion from state 1 to state 2 is:
    *   $v_2 = \sqrt{2(h_1 - h_2)}$
*   The change in enthalpy ($h_1 - h_2$) is the "enthalpy of the fluid available for conversion into kinetic energy."

**Mass Flow Rate:**
*   $\dot{m} = \rho A v$
*   For a given nozzle area A, the mass flow rate depends on the density and velocity of the steam at that section.

---

### 4. Critical Pressure and Choking

**Key Concept:** When steam expands through a convergent-divergent nozzle, there is a minimum area called the **throat**. At the throat, the steam velocity reaches the speed of sound (Mach 1). The pressure at the throat corresponding to this sonic velocity is called the **critical pressure** ($P_c$) or **choking pressure**.

**Definition:**
*   **Critical Pressure Ratio ($\beta_c$):** The ratio of the critical pressure at the throat to the inlet stagnation pressure ($P_c / P_0$).
*   **Throat:** The narrowest cross-sectional area in a convergent-divergent nozzle.
*   **Choking:** The condition where the mass flow rate through the nozzle reaches its maximum value and cannot be increased further, even if the back pressure is further reduced. This occurs when the velocity at the throat reaches sonic velocity.

**Conditions for Choking:**

*   **Critical Pressure Ratio:** For isentropic flow of steam, the critical pressure ratio is a function of the exponent 'n' in the isentropic relation.
    *   $\frac{P_c}{P_0} = \left(\frac{2}{n+1}\right)^{\frac{n}{n-1}}$
    *   For superheated steam ($n \approx 1.3$): $\beta_c \approx \left(\frac{2}{1.3+1}\right)^{\frac{1.3}{1.3-1}} \approx (0.8696)^{4.333} \approx 0.546$
    *   For saturated steam ($n \approx 1.135$): $\beta_c \approx \left(\frac{2}{1.135+1}\right)^{\frac{1.135}{1.135-1}} \approx (0.9365)^{7.017} \approx 0.606$

*   **Maximum Mass Flow Rate:** When choking occurs, the mass flow rate is maximized for a given inlet stagnation condition and nozzle geometry.
    *   $\dot{m}_{max} = A_{throat} \sqrt{\frac{2n}{n-1} P_0 \rho_0 \left(\frac{P_c}{P_0}\right)^{\frac{2}{n}} \left(1 - \left(\frac{P_c}{P_0}\right)^{\frac{n-1}{n}}\right)}$
    *   Where $\rho_0$ is the density at stagnation conditions.

**Behavior of Flow with Varying Back Pressure:**

*   **Case 1: Back Pressure ($P_b$) > Critical Pressure ($P_c$)**
    *   The steam expands through the nozzle, but the velocity at the throat is still subsonic.
    *   The flow is **subsonic** throughout the nozzle.
    *   The pressure at the throat will be equal to the back pressure if the nozzle is purely convergent.
    *   If it's a C-D nozzle, the flow will decelerate in the divergent section.
*   **Case 2: Back Pressure ($P_b$) = Critical Pressure ($P_c$)**
    *   The steam reaches sonic velocity at the throat.
    *   The flow is **choked**. The mass flow rate is maximum.
*   **Case 3: Back Pressure ($P_b$) < Critical Pressure ($P_c$)**
    *   The steam reaches sonic velocity at the throat and continues to accelerate in the divergent section to **supersonic velocities**.
    *   The pressure at the throat remains at the critical pressure ($P_{throat} = P_c$).
    *   The pressure at the exit of the nozzle will be equal to the back pressure, but this expansion from $P_c$ to $P_b$ occurs in a supersonic regime.

**Important Note:** Even if the back pressure is reduced further below the critical pressure, the mass flow rate through the nozzle will not increase, and the pressure at the throat will remain at the critical pressure. The expansion from the throat to the back pressure will be a supersonic expansion, potentially involving expansion waves.

---

### 5. Nozzle Efficiency and Losses

**Key Concept:** Real nozzles are not ideal. Friction between the steam and the nozzle walls, as well as internal turbulence, causes losses, reducing the kinetic energy gained by the steam.

**Types of Losses:**

*   **Friction Loss:** The primary loss mechanism, causing a reduction in velocity and an increase in enthalpy.
*   **Eddy Formation:** Turbulent eddies can form, especially in the divergent section if the expansion is too rapid, leading to further energy dissipation.
*   **Incomplete Expansion:** If the back pressure is higher than the pressure corresponding to the final enthalpy achieved, the steam may not expand fully, leading to a lower velocity than theoretically possible.
*   **Supersonic Flow Losses:** If the divergent section is not properly designed for supersonic flow, shock waves can form, causing significant energy loss.

**Nozzle Efficiency ($\eta_{nozzle}$):**

*   **Definition:** The ratio of the actual kinetic energy per unit mass delivered by the nozzle to the ideal kinetic energy per unit mass that could be delivered by isentropic expansion.
*   **Formula:**
    *   $\eta_{nozzle} = \frac{\text{Actual Kinetic Energy}}{\text{Isentropic Kinetic Energy}} = \frac{\frac{1}{2} v_{actual}^2}{\frac{1}{2} v_{isentropic}^2} = \frac{h_1 - h_{2, actual}}{h_1 - h_{2, isentropic}}$
    *   Alternatively, in terms of velocity: $\eta_{nozzle} = \left(\frac{v_{actual}}{v_{isentropic}}\right)^2$

*   **Actual Velocity:** $v_{actual} = \sqrt{2 \eta_{nozzle} (h_1 - h_{2, isentropic})}$

*   **Typical Values:** Nozzle efficiencies typically range from 90% to 98%.

**Influence of Nozzle Shape on Efficiency:**

*   **Convergent Section:** The shape of the convergent section is less critical, but a smooth curve is preferred.
*   **Throat:** The throat should be rounded to minimize flow separation and turbulence.
*   **Divergent Section:** The angle of the divergent cone is crucial.
    *   If the angle is too small, the length of the nozzle will be excessive, increasing friction losses.
    *   If the angle is too large, flow separation and eddy formation can occur, reducing efficiency.
    *   The optimum angle for the divergent section is typically around 6-10 degrees.

---

### 6. Design of Steam Nozzles

**Key Considerations:**

*   **Inlet Stagnation Conditions:** Inlet pressure ($P_0$) and temperature ($T_0$) determine the initial enthalpy ($h_0$).
*   **Back Pressure:** The exhaust pressure ($P_b$) from the turbine stage influences the required expansion ratio.
*   **Mass Flow Rate ($\dot{m}$):** The required amount of steam to be delivered to the turbine.
*   **Desired Exit Velocity:** To achieve the desired impulse on the turbine blades.
*   **Material:** Nozzle materials must withstand high temperatures, pressures, and erosive effects of steam. Common materials include stainless steel and alloys.
*   **Shape Optimization:** For C-D nozzles, the shape of the convergent and divergent sections is critical for achieving desired velocities and minimizing losses.

**Design Steps (Simplified):**

1.  **Determine Inlet Conditions ($P_0, T_0$) and Required Mass Flow Rate ($\dot{m}$).**
2.  **Calculate the Critical Pressure ($P_c$) and Critical Velocity ($v_c$) at the throat.**
    *   Use the critical pressure ratio formula to find $P_c$.
    *   Calculate the enthalpy at the throat ($h_c$) corresponding to $P_c$ and the inlet stagnation entropy ($s_0$).
    *   $v_c = \sqrt{2(h_0 - h_c)}$
3.  **Determine the Throat Area ($A_{throat}$).**
    *   Calculate the specific volume at the throat ($v_{c, specific}$).
    *   $A_{throat} = \frac{\dot{m} v_{c, specific}}{v_c}$
4.  **Determine the Exit Conditions and Exit Area ($A_{exit}$).**
    *   If the back pressure ($P_b$) is less than the critical pressure ($P_c$), the flow is supersonic. The expansion continues in the divergent section.
    *   The pressure at the exit of the divergent section is usually designed to match the back pressure ($P_b$).
    *   Calculate the enthalpy at the exit ($h_{exit}$) corresponding to $P_b$ and $s_0$.
    *   Calculate the exit velocity ($v_{exit}$) using $v_{exit} = \sqrt{2(h_0 - h_{exit})}$.
    *   Calculate the specific volume at the exit ($v_{exit, specific}$).
    *   $A_{exit} = \frac{\dot{m} v_{exit, specific}}{v_{exit}}$
    *   If $P_b > P_c$, the nozzle is typically only convergent, and the exit area is determined by the back pressure.

**References from Textbooks:**

*   **El Wakil, M. M. (2017) - Power Plant Technology:** Likely covers the fundamental thermodynamic principles of nozzle flow, isentropic expansion, critical pressure, and the derivation of velocity and mass flow rate equations. May discuss different types of nozzles and their application in turbines.
*   **Nag, P. K. (2017) - Power Plant Engineering:** Expected to detail the classification of nozzles, the thermodynamic processes, the concept of choking, critical pressure ratio calculation, and the design aspects for steam turbines. It will likely include specific formulas for mass flow rate and velocity.
*   **Nagpal, G. R., & Sharma, S. C. (2012) - Power Plant Engineering:** Will likely provide a good overview of nozzle types, thermodynamic analysis, and practical design considerations, possibly with examples of nozzle calculations for steam turbines.
*   **Gupta, Manoj Kumar (2012) - Power Plant Engineering:** Could offer a clear explanation of the fundamental physics behind nozzle operation, including Bernoulli's equation application for compressible flow and the influence of Mach number.

---

### 7. Practice Questions and Exercises

**Question 1:**
A steam nozzle is supplied with steam at 40 bar, 400°C. The steam expands isentropically to a pressure of 10 bar. Calculate:
a) The specific enthalpy at the inlet and outlet.
b) The velocity of steam at the outlet.
c) The mass flow rate per unit area at the outlet.

**Given:**
*   Inlet Pressure ($P_0$) = 40 bar
*   Inlet Temperature ($T_0$) = 400°C
*   Outlet Pressure ($P_b$) = 10 bar
*   Assume isentropic expansion.

**Data Extraction (Illustrative - actual values would come from steam tables):**
*   From steam tables for 40 bar, 400°C:
    *   $h_0 \approx 3214 \, \text{kJ/kg}$
    *   $s_0 \approx 6.769 \, \text{kJ/kg} \cdot \text{K}$
    *   $v_0 \approx 0.0864 \, \text{m³/kg}$
*   For isentropic expansion to 10 bar, find state 2 where $s_2 = s_0 = 6.769 \, \text{kJ/kg} \cdot \text{K}$ and $P_2 = 10 \, \text{bar}$.
    *   Assume steam is superheated at 10 bar. Interpolating from tables for $s = 6.769 \, \text{kJ/kg} \cdot \text{K}$:
        *   At 10 bar, $s = 6.693$ (at $T=232.8^\circ$C) and $s = 7.003$ (at $T=260.0^\circ$C).
        *   Thus, $h_2 \approx 2828 \, \text{kJ/kg}$ (interpolating for entropy).

**Solution:**

a)  **Specific enthalpy at inlet ($h_0$):** $3214 \, \text{kJ/kg}$ (from steam tables)
    **Specific enthalpy at outlet ($h_2$):** $2828 \, \text{kJ/kg}$ (from steam tables, assuming isentropic expansion)

b)  **Velocity of steam at the outlet ($v_2$):**
    $v_2 = \sqrt{2 (h_0 - h_2)}$
    $v_2 = \sqrt{2 \times (3214 - 2828) \, \text{kJ/kg} \times 1000 \, \text{J/kJ}}$
    $v_2 = \sqrt{2 \times 386 \times 1000} \, \text{m/s}$
    $v_2 = \sqrt{772000} \, \text{m/s}$
    $v_2 \approx 878.6 \, \text{m/s}$

c)  **Mass flow rate per unit area at the outlet ($\dot{m}/A_2$):**
    $\frac{\dot{m}}{A_2} = \rho_2 v_2$
    Need specific volume at state 2 ($v_2'$): From steam tables at 10 bar and $s_2 = 6.769 \, \text{kJ/kg} \cdot \text{K}$, assuming superheated steam.
    At 10 bar, $T=232.8^\circ$C, $v' = 0.2327 \, \text{m³/kg}$ and $s=6.693$.
    At 10 bar, $T=260.0^\circ$C, $v' = 0.2451 \, \text{m³/kg}$ and $s=7.003$.
    Interpolating for $s_2 = 6.769$:
    $v_2' \approx 0.2327 + \frac{6.769 - 6.693}{7.003 - 6.693} \times (0.2451 - 0.2327)$
    $v_2' \approx 0.2327 + \frac{0.076}{0.31} \times 0.0124 \approx 0.2327 + 0.00305 \approx 0.23575 \, \text{m³/kg}$
    $\rho_2 = \frac{1}{v_2'} = \frac{1}{0.23575} \approx 4.242 \, \text{kg/m³}$

    Mass flow rate per unit area:
    $\frac{\dot{m}}{A_2} = 4.242 \, \text{kg/m³} \times 878.6 \, \text{m/s}$
    $\frac{\dot{m}}{A_2} \approx 3726 \, \text{kg/m² \cdot s}$

**Answer:**
a) Inlet enthalpy = 3214 kJ/kg, Outlet enthalpy = 2828 kJ/kg
b) Outlet velocity $\approx 878.6$ m/s
c) Mass flow rate per unit area $\approx 3726$ kg/m²·s

---

**Question 2:**
A convergent-divergent nozzle is designed to expand steam from a stagnation pressure of 30 bar and 1.5 kg/s. The critical pressure ratio for steam is 0.55. If the nozzle efficiency is 95%, calculate the velocity and area at the throat, assuming the enthalpy drop from stagnation to the throat is $150 \, \text{kJ/kg}$.

**Given:**
*   $P_0 = 30 \, \text{bar}$
*   $\dot{m} = 1.5 \, \text{kg/s}$
*   Critical Pressure Ratio ($P_c/P_0$) = 0.55
*   Nozzle Efficiency ($\eta_{nozzle}$) = 0.95
*   Enthalpy drop from stagnation to throat ($h_0 - h_c$) = $150 \, \text{kJ/kg}$ (This is the *actual* enthalpy drop)

**Solution:**

1.  **Calculate Critical Pressure ($P_c$):**
    $P_c = P_0 \times (P_c/P_0) = 30 \, \text{bar} \times 0.55 = 16.5 \, \text{bar}$

2.  **Calculate Velocity at the Throat ($v_c$):**
    The enthalpy drop given is the actual drop. Since the nozzle efficiency is given, we should use the ideal enthalpy drop to calculate the theoretical maximum velocity. However, the question provides the *actual* enthalpy drop to the throat. Assuming this is the enthalpy drop achieved for the velocity calculation at the throat for efficiency assessment:
    $v_c = \sqrt{2 \times \eta_{nozzle} \times (h_0 - h_{c, ideal})}$
    If we interpret $(h_0 - h_c)$ as the enthalpy drop to achieve sonic velocity, then:
    $v_c = \sqrt{2 \times (h_0 - h_c)}$ (using the actual enthalpy drop to calculate actual velocity at the throat). Let's assume the given enthalpy drop is the ideal one corresponding to the throat conditions for simplicity of calculation if efficiency is applied to the entire nozzle.

    Let's re-interpret: The question states "enthalpy drop from stagnation to the throat is 150 kJ/kg". This is typically interpreted as the *ideal* enthalpy drop for the throat condition. If the efficiency is applied to the nozzle as a whole, and this is the drop to the throat, then the actual velocity at the throat is:
    $v_{c, actual} = \sqrt{2 \times \eta_{nozzle} \times (h_0 - h_{c, ideal})}$
    This formula is used when calculating velocity at the exit of the nozzle where $\eta_{nozzle}$ is applied to the total available enthalpy drop. For the throat, we usually consider the ideal velocity corresponding to the ideal enthalpy drop to the throat.

    Let's assume the 150 kJ/kg is the *ideal* enthalpy drop that *would* occur isentropically to the throat. Then the actual velocity achieved at the throat would be:
    $v_{c, actual} = \sqrt{2 \times \eta_{nozzle} \times (h_0 - h_{c, ideal})}$
    This interpretation might be flawed as efficiency is usually applied to the entire nozzle to get the final exit velocity. Let's assume the question implies an *ideal* enthalpy drop of 150 kJ/kg to the throat, and we need to calculate the actual velocity *at* the throat using this ideal drop and efficiency.

    If the enthalpy drop *to the throat* is 150 kJ/kg (ideal), then the ideal velocity at the throat would be:
    $v_{c, ideal} = \sqrt{2 \times 150 \, \text{kJ/kg} \times 1000 \, \text{J/kJ}} = \sqrt{300000} \approx 547.7 \, \text{m/s}$

    However, nozzle efficiency is defined based on the kinetic energy produced. If the enthalpy drop *to the throat* (which achieves sonic velocity) is effectively 150 kJ/kg, then the actual velocity at the throat should be derived from the available energy.

    Let's reconsider the formula for actual velocity: $v_{actual} = \sqrt{2 \eta_{nozzle} (h_1 - h_{2, isentropic})}$.
    If $(h_0 - h_{c, isentropic}) = 150 \, \text{kJ/kg}$, then the actual velocity at the throat is:
    $v_{c, actual} = \sqrt{2 \times 0.95 \times 150 \, \text{kJ/kg} \times 1000 \, \text{J/kJ}}$
    $v_{c, actual} = \sqrt{2 \times 0.95 \times 150000} \, \text{m/s} = \sqrt{285000} \approx 533.85 \, \text{m/s}$

    This seems to be the correct application of efficiency at the throat, assuming the 150 kJ/kg is the ideal available enthalpy drop to reach that point.

3.  **Calculate Throat Area ($A_{throat}$):**
    To calculate area, we need the specific volume at the throat. This requires knowing the conditions at the throat.
    *   Pressure at throat = $P_c = 16.5 \, \text{bar}$.
    *   Entropy at throat = $s_0$ (assuming the ideal enthalpy drop is isentropic). We don't have $s_0$ or $h_0$ to find $s_0$.
    *   However, we can use the mass flow rate equation directly if we can assume conditions or use the relationship between pressure and specific volume.

    Let's assume that the isentropic enthalpy drop to the throat is indeed 150 kJ/kg.
    We need the specific volume at the throat ($v_{c, specific}$). This requires knowing the state (pressure, temperature, or entropy). Without initial conditions ($P_0, T_0$), we cannot determine $s_0$ and thus cannot find $v_{c, specific}$.

    **Let's make a simplifying assumption or try a different approach:**
    If the problem intends to directly use the given mass flow rate and velocity, we are missing the density.

    **Alternative approach: Using mass flow rate equation and assuming ideal conditions for density calculation if $s_0$ is unknown.**
    $\dot{m} = \rho_c A_{throat} v_{c, actual}$
    We know $\dot{m}$ and $v_{c, actual}$. We need $\rho_c$.

    **Let's assume the question implies that the enthalpy drop *to the throat* is 150 kJ/kg, and we need to find the conditions at the throat.**
    We know $P_c = 16.5 \, \text{bar}$. If we knew $h_0$ and $s_0$, we could find $h_c$ and $v_{c, specific}$.
    Let's assume a typical steam condition for 30 bar, e.g., superheated steam. If $P_0 = 30$ bar, $T_0 = 300^\circ$C, then $h_0 \approx 2942 \, \text{kJ/kg}$ and $s_0 \approx 6.545 \, \text{kJ/kg} \cdot \text{K}$.
    Then, at the throat, $P_c = 16.5 \, \text{bar}$ and $s_c = s_0 = 6.545 \, \text{kJ/kg} \cdot \text{K}$.
    Interpolating for $s=6.545$ at $P=16.5 \, \text{bar}$ (which is between 15 and 20 bar):
    *   At 15 bar, $s=6.523$ (T=201.3°C), $h=2800.7$ kJ/kg, $v=0.1362$ m³/kg
    *   At 20 bar, $s=6.432$ (T=191.5°C), $h=2760.0$ kJ/kg, $v=0.1090$ m³/kg
    This is not working, as entropy is decreasing with pressure for superheated steam.

    **Let's stick to the interpretation that 150 kJ/kg is the ideal enthalpy drop, and we need to find the velocity and then use the mass flow rate to find the area.**

    Let's assume the specific volume at the throat ($v_{c, specific}$) can be found. If the question implied an ideal throat condition, it might relate to the critical velocity.

    **Correct interpretation for throat conditions:**
    The throat is where velocity is sonic (Mach 1). The enthalpy drop to the throat from stagnation conditions ($h_0 - h_{c, isentropic}$) is such that the velocity achieved is sonic. The value 150 kJ/kg is likely given as the *ideal* enthalpy drop to the throat.

    We have $v_{c, actual} = 533.85 \, \text{m/s}$.
    We need $v_{c, specific}$ at the throat. This requires knowing $s_0$.
    Let's assume a common value for the isentropic enthalpy drop to the throat for similar conditions.

    **Let's use the definition of nozzle efficiency more precisely:**
    $\eta_{nozzle} = \frac{v_{actual}^2}{v_{ideal}^2}$.
    So, $v_{actual} = \sqrt{\eta_{nozzle}} \times v_{ideal}$.
    If $v_{ideal}$ at the throat corresponds to the full enthalpy drop to the throat, then this is problematic.

    **Let's assume a different interpretation of the question.**
    Perhaps the question means: The actual enthalpy drop is 95% of the ideal. And the ideal enthalpy drop to the throat is 150 kJ/kg.
    Actual enthalpy drop to throat = $0.95 \times 150 \, \text{kJ/kg} = 142.5 \, \text{kJ/kg}$.
    Then, $v_{c, actual} = \sqrt{2 \times 142.5 \, \text{kJ/kg} \times 1000 \, \text{J/kJ}} = \sqrt{285000} \approx 533.85 \, \text{m/s}$. (Same as before, this interpretation aligns).

    Now, we still need the specific volume at the throat.
    Let's consider a typical steam condition at throat pressure $P_c = 16.5 \, \text{bar}$.
    We are missing information to find the specific volume at the throat.

    **Let's assume the question is flawed or some information is missing about $s_0$ or $T_0$ for the initial state.**

    **If we *must* provide an answer for Area:**
    Let's assume that the specific volume at the throat ($v_{c, specific}$) is approximately $0.12 \, \text{m³/kg}$ for these conditions (a guess to proceed).
    Then, $A_{throat} = \frac{\dot{m} \times v_{c, specific}}{v_{c, actual}} = \frac{1.5 \, \text{kg/s} \times 0.12 \, \text{m³/kg}}{533.85 \, \text{m/s}} \approx 0.000337 \, \text{m²}$.

    **Re-evaluating the question:** "If the nozzle efficiency is 95%, calculate the velocity and area at the throat". This implies efficiency applies to the throat condition.

    **Let's assume the 150 kJ/kg is the ISENTROPIC enthalpy drop to the throat.**
    Then the IDEAL velocity at the throat is $v_{c, ideal} = \sqrt{2 \times 150 \times 1000} = 547.7 \, \text{m/s}$.
    The ACTUAL velocity at the throat is $v_{c, actual} = \sqrt{2 \times \eta_{nozzle} \times 150 \times 1000} = \sqrt{2 \times 0.95 \times 150 \times 1000} = 533.85 \, \text{m/s}$.

    We still need the specific volume at the throat.
    Let's try to use the mass flow rate equation with velocity to find density, then specific volume.
    $\dot{m} = \rho_c A_{throat} v_{c, actual}$
    $\rho_c = \frac{\dot{m}}{A_{throat} v_{c, actual}}$

    Let's assume the specific volume at the throat is $v_{c, specific}$ and it's known.
    $\dot{m} = A_{throat} / v_{c, specific} \times v_{c, actual}$
    $A_{throat} = \frac{\dot{m} \times v_{c, specific}}{v_{c, actual}}$

    **Let's assume a typical specific volume for steam at 16.5 bar, say $v_c \approx 0.12 \, \text{m³/kg}$.**
    $A_{throat} = \frac{1.5 \, \text{kg/s} \times 0.12 \, \text{m³/kg}}{533.85 \, \text{m/s}} \approx 0.000337 \, \text{m²}$ or $3.37 \, \text{cm²}$.

    **Answer (with assumed specific volume):**
    *   Velocity at the throat $\approx 533.85 \, \text{m/s}$.
    *   Area at the throat $\approx 3.37 \, \text{cm²}$ (assuming $v_{c, specific} = 0.12 \, \text{m³/kg}$).

    **Note on Question 2:** This question is problematic due to missing initial conditions to determine the specific volume at the throat, which is essential for calculating the area. The interpretation of "enthalpy drop" and where the efficiency applies at the throat is also a common point of confusion. For a real exam, one would look for more explicit statements or typical assumptions.

---

### 8. Important Points to Remember

*   **Nozzle Function:** Convert thermal energy (enthalpy) to kinetic energy.
*   **Ideal Process:** Isentropic expansion ($s = const$).
*   **Actual Process:** Adiabatic and irreversible (friction losses).
*   **Convergent-Divergent Nozzle:** Essential for supersonic expansion and high velocities.
*   **Throat:** Minimum area, sonic velocity (Mach 1) achieved here.
*   **Choking:** Maximum mass flow rate achieved when velocity at the throat is sonic.
*   **Critical Pressure Ratio ($\beta_c$):** Ratio of throat pressure to stagnation pressure, dependent on the isentropic exponent 'n'.
*   **Nozzle Efficiency ($\eta_{nozzle}$):** Ratio of actual kinetic energy to isentropic kinetic energy, typically 90-98%.
*   **Actual Velocity:** $v_{actual} = \sqrt{2 \eta_{nozzle} (h_1 - h_2)}$
*   **Design:** Consider inlet conditions, back pressure, mass flow rate, and material properties. The angle of the divergent section is critical for efficiency.

---

This concludes the study notes for Steam Nozzles. Remember to consult the provided textbooks and reference books for more detailed explanations and examples. Practice the calculations thoroughly to build confidence.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
