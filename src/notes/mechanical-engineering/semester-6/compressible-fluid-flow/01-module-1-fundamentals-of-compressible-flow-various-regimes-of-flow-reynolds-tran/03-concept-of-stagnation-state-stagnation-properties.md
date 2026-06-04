---
title: "Concept of stagnation state, stagnation properties."
subject: "COMPRESSIBLE FLUID FLOW"
module: "Module 1: Fundamentals of compressible flow: Various regimes of flow, Reynolds transport theorem"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044637d8"
status: "completed"
scrapedAt: "2026-05-20T18:03:33.880Z"
---
## COMPRESSIBLE FLUID FLOW - Module 1: Fundamentals of Compressible Flow

### Topic: Concept of Stagnation State and Stagnation Properties

---

### 1. Introduction to Compressible Flow

*   **Definition:** Compressible flow is a fluid flow where the density of the fluid changes significantly due to variations in pressure and temperature. This is in contrast to incompressible flow, where density is assumed to be constant.
*   **Key Indicator:** Compressible effects become significant when the Mach number (M) of the flow is appreciable, typically M > 0.3.
*   **Governing Principles:** Compressible flow is governed by conservation laws (mass, momentum, energy) applied to fluids that can be compressed.

---

### 2. Regimes of Compressible Flow

*   **Subsonic Flow (M < 1):** Fluid velocity is less than the speed of sound. Density variations are noticeable but less dramatic than in supersonic flows.
*   **Sonic Flow (M = 1):** Fluid velocity is equal to the speed of sound. This is a critical condition.
*   **Supersonic Flow (M > 1):** Fluid velocity is greater than the speed of sound. Density changes are very significant, and phenomena like shock waves can occur.
*   **Transonic Flow (M ≈ 1):** A mixture of subsonic and supersonic regions, often found around aircraft wings at high subsonic speeds.
*   **Hypersonic Flow (M >> 1):** Extremely high Mach numbers where compressibility effects are dominant, and thermal effects (dissociation, ionization) can become important.

*(Refer to Shapiro, Vol. I, Chapter 1 for a detailed discussion on flow regimes.)*

---

### 3. Reynolds Transport Theorem (RTT)

*   **Purpose:** RTT is a fundamental theorem in fluid mechanics that relates the rate of change of a property of a system to the rate of change of that property within a control volume. It allows us to transform a property that is fixed to the fluid particles (Lagrangian description) into a form that can be evaluated in a fixed region of space (Eulerian description).
*   **General Form:**
    $$
    \frac{DB}{Dt} = \int_{CV} \frac{\partial}{\partial t}(\rho b \, dV) + \int_{CS} (\rho b \vec{v} \cdot \vec{n}) \, dA
    $$
    Where:
    *   $B$ is an extensive property of the system.
    *   $b = B/m$ is the corresponding intensive property per unit mass.
    *   $\frac{DB}{Dt}$ is the total rate of change of property $B$ for the system.
    *   $CV$ is the control volume.
    *   $CS$ is the control surface.
    *   $\rho$ is the fluid density.
    *   $\vec{v}$ is the fluid velocity vector.
    *   $\vec{n}$ is the outward normal vector to the control surface.

*   **Application in Compressible Flow:** RTT is crucial for deriving the conservation equations (mass, momentum, energy) for a control volume, which are essential for analyzing compressible flows.

*(Refer to Yahya, Chapter 2 for a detailed derivation and application of the Reynolds Transport Theorem.)*

---

### 4. Concept of Stagnation State and Stagnation Properties

#### 4.1 What is Stagnation?

*   **Definition:** Stagnation is a hypothetical process where a moving fluid is brought to rest adiabatically (without heat transfer) and isentropically (without friction or other irreversibilities).
*   **Stagnation Point:** A point in the flow where the fluid velocity is zero. This typically occurs at the surface of an object immersed in the flow, such as the nose of an airfoil or a Pitot tube.

#### 4.2 Stagnation State

*   **Definition:** The state (temperature, pressure, density, enthalpy, etc.) of a fluid when it has been brought to rest adiabatically and isentropically from its flowing state.
*   **Key Characteristics:** At the stagnation state, the kinetic energy of the fluid is completely converted into internal energy (and thus, enthalpy).

#### 4.3 Stagnation Properties

These are the thermodynamic properties of the fluid at the stagnation state.

*   **Stagnation Temperature ($T_0$ or $T_s$)**
    *   **Concept:** The temperature the fluid would reach if brought to rest isentropically.
    *   **Derivation (for isentropic process):**
        Consider a fluid particle moving with velocity $V$. If it is brought to rest adiabatically, its kinetic energy is converted into internal energy. For an ideal gas, the enthalpy $h$ is directly related to temperature $T$ by $h = c_p T$.
        From the steady-flow energy equation for an adiabatic process:
        $$
        h_{flow} + \frac{V^2}{2} = h_{stagnation}
        $$
        Since $h = c_p T$ for an ideal gas and the process is adiabatic, we have:
        $$
        c_p T_{flow} + \frac{V^2}{2} = c_p T_{stagnation}
        $$
        Therefore, the stagnation temperature is:
        $$
        T_0 = T + \frac{V^2}{2c_p}
        $$
        This can also be expressed in terms of the Mach number:
        $$
        T_0 = T \left( 1 + \frac{\gamma - 1}{2} M^2 \right)
        $$
        Where:
        *   $T_0$ is the stagnation temperature.
        *   $T$ is the static temperature (temperature of the flowing fluid).
        *   $V$ is the flow velocity.
        *   $c_p$ is the specific heat at constant pressure.
        *   $\gamma$ is the ratio of specific heats ($c_p/c_v$).
        *   $M$ is the Mach number.

*   **Stagnation Pressure ($P_0$ or $P_s$)**
    *   **Concept:** The pressure the fluid would reach if brought to rest isentropically.
    *   **Derivation (for isentropic process):**
        For an isentropic process relating pressure and temperature in an ideal gas:
        $$
        \frac{P_0}{P} = \left( \frac{T_0}{T} \right)^{\frac{\gamma}{\gamma-1}}
        $$
        Substituting the expression for $T_0/T$:
        $$
        P_0 = P \left( 1 + \frac{\gamma - 1}{2} M^2 \right)^{\frac{\gamma}{\gamma-1}}
        $$
        Where:
        *   $P_0$ is the stagnation pressure.
        *   $P$ is the static pressure (pressure of the flowing fluid).

*   **Stagnation Density ($\rho_0$ or $\rho_s$)**
    *   **Concept:** The density the fluid would reach if brought to rest isentropically.
    *   **Derivation (for isentropic process):**
        Similarly, for an isentropic process relating density and temperature:
        $$
        \frac{\rho_0}{\rho} = \left( \frac{T_0}{T} \right)^{\frac{1}{\gamma-1}}
        $$
        Substituting the expression for $T_0/T$:
        $$
        \rho_0 = \rho \left( 1 + \frac{\gamma - 1}{2} M^2 \right)^{\frac{1}{\gamma-1}}
        $$
        Where:
        *   $\rho_0$ is the stagnation density.
        *   $\rho$ is the static density (density of the flowing fluid).

*   **Stagnation Enthalpy ($h_0$ or $h_s$)**
    *   **Concept:** The enthalpy of the fluid when brought to rest isentropically.
    *   **Derivation:** From the energy equation $h_0 = h + V^2/2$. For an ideal gas, $h = c_p T$, so $h_0 = c_p T_0$.

*(Refer to Shapiro, Vol. I, Chapter 2 for a comprehensive treatment of stagnation properties and their derivation. Yahya, Chapter 3 also covers these concepts.)*

---

### 5. Importance and Applications of Stagnation Properties

*   **Reference State:** Stagnation properties are often used as reference points in compressible flow analysis because they represent the maximum possible enthalpy/temperature and pressure a fluid can reach under adiabatic conditions.
*   **Pitot-Static Tube:** This instrument measures the stagnation pressure ($P_0$) and static pressure ($P$) to determine the flow velocity and Mach number.
*   **Isentropic Flow Analysis:** Stagnation properties remain constant along an isentropic streamline. This is a powerful tool for analyzing flow in nozzles, diffusers, and other aerodynamic components.
*   **Thermodynamic Cycle Analysis:** Stagnation properties are essential for understanding the energy transfer in processes involving compressible fluids.

---

### 6. Relationship between Static and Stagnation Properties and Mach Number

The Mach number is the key parameter linking static and stagnation properties.

| Property     | Static Property | Stagnation Property                                       | Relationship with Mach Number                                                                                               |
| :----------- | :-------------- | :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| Temperature  | $T$             | $T_0$                                                     | $T_0 = T \left( 1 + \frac{\gamma - 1}{2} M^2 \right)$                                                                      |
| Pressure     | $P$             | $P_0$                                                     | $P_0 = P \left( 1 + \frac{\gamma - 1}{2} M^2 \right)^{\frac{\gamma}{\gamma-1}}$                                           |
| Density      | $\rho$          | $\rho_0$                                                  | $\rho_0 = \rho \left( 1 + \frac{\gamma - 1}{2} M^2 \right)^{\frac{1}{\gamma-1}}$                                           |
| Enthalpy     | $h$             | $h_0$                                                     | $h_0 = h + \frac{V^2}{2} \implies h_0 = c_p T_0$                                                                              |
| Velocity     | $V$             | $V = 0$ (at stagnation point)                             | $M = \frac{V}{a}$, where $a = \sqrt{\gamma R T}$ is the local speed of sound.                                              |

**Important Point:** Stagnation properties ($T_0$, $P_0$, $\rho_0$, $h_0$) are constant for an isentropic flow from the inlet to any point in the flow path. Only static properties ($T$, $P$, $\rho$, $h$, $V$) change along the flow.

---

### 7. Examples

**Example 1: Airflow in a Nozzle**

Consider air flowing through a nozzle. At the inlet (station 1), the conditions are:
$T_1 = 300$ K, $P_1 = 1$ atm, $V_1 = 50$ m/s.
Assume air is an ideal gas with $\gamma = 1.4$ and $c_p = 1005$ J/kg.K.

**Calculate the stagnation properties at the inlet.**

*   **Stagnation Temperature ($T_{01}$):**
    First, calculate the Mach number at the inlet. The speed of sound at $T_1=300$ K is $a_1 = \sqrt{\gamma R T_1} = \sqrt{1.4 \times 287 \times 300} \approx 347.2$ m/s.
    $M_1 = \frac{V_1}{a_1} = \frac{50}{347.2} \approx 0.144$
    $T_{01} = T_1 \left( 1 + \frac{\gamma - 1}{2} M_1^2 \right) = 300 \left( 1 + \frac{1.4 - 1}{2} (0.144)^2 \right)$
    $T_{01} = 300 (1 + 0.2 \times 0.020736) = 300 (1 + 0.0041472) \approx 301.24$ K

*   **Stagnation Pressure ($P_{01}$):**
    $P_{01} = P_1 \left( 1 + \frac{\gamma - 1}{2} M_1^2 \right)^{\frac{\gamma}{\gamma-1}} = 1 \text{ atm} \left( 1 + \frac{1.4 - 1}{2} (0.144)^2 \right)^{\frac{1.4}{1.4-1}}$
    $P_{01} = 1 \text{ atm} (1 + 0.0041472)^{3.5} \approx 1 \text{ atm} (1.0145) \approx 1.0145$ atm

*   **Stagnation Density ($\rho_{01}$):**
    First, calculate the static density $\rho_1 = \frac{P_1}{R T_1} = \frac{101325 \text{ Pa}}{287 \text{ J/kg.K} \times 300 \text{ K}} \approx 1.177$ kg/m³
    $\rho_{01} = \rho_1 \left( 1 + \frac{\gamma - 1}{2} M_1^2 \right)^{\frac{1}{\gamma-1}} = 1.177 \left( 1 + \frac{1.4 - 1}{2} (0.144)^2 \right)^{\frac{1}{1.4-1}}$
    $\rho_{01} = 1.177 (1 + 0.0041472)^{2.5} \approx 1.177 (1.0104) \approx 1.19$ kg/m³

**Example 2: Stagnation Point on an Airfoil**

Consider airflow at $T = 250$ K, $P = 0.5$ atm, and $M = 0.8$.
Calculate the stagnation temperature and pressure.

*   **Stagnation Temperature ($T_0$):**
    $T_0 = T \left( 1 + \frac{\gamma - 1}{2} M^2 \right) = 250 \left( 1 + \frac{1.4 - 1}{2} (0.8)^2 \right)$
    $T_0 = 250 (1 + 0.2 \times 0.64) = 250 (1 + 0.128) = 250 \times 1.128 = 282$ K

*   **Stagnation Pressure ($P_0$):**
    $P_0 = P \left( 1 + \frac{\gamma - 1}{2} M^2 \right)^{\frac{\gamma}{\gamma-1}} = 0.5 \text{ atm} \left( 1 + \frac{1.4 - 1}{2} (0.8)^2 \right)^{\frac{1.4}{1.4-1}}$
    $P_0 = 0.5 \text{ atm} (1.128)^{3.5} \approx 0.5 \text{ atm} \times 1.546 \approx 0.773$ atm

---

### 8. Practice Questions and Exercises

1.  **Question:** A subsonic aircraft flies at an altitude where the air temperature is -40°C and the static pressure is 0.1 atm. The aircraft's speed is 700 km/h. Calculate the stagnation temperature and stagnation pressure of the air relative to the aircraft. Assume air behaves as an ideal gas with $\gamma = 1.4$ and $R = 287$ J/kg.K.

    **Answer:**
    *   Convert temperature to Kelvin: $T = -40 + 273.15 = 233.15$ K.
    *   Convert speed to m/s: $V = 700 \text{ km/h} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{3600 \text{ s}} \approx 194.44$ m/s.
    *   Calculate speed of sound: $a = \sqrt{\gamma R T} = \sqrt{1.4 \times 287 \times 233.15} \approx 311.7$ m/s.
    *   Calculate Mach number: $M = V/a = 194.44 / 311.7 \approx 0.624$.
    *   Stagnation Temperature ($T_0$):
        $T_0 = T \left( 1 + \frac{\gamma - 1}{2} M^2 \right) = 233.15 \left( 1 + \frac{1.4 - 1}{2} (0.624)^2 \right)$
        $T_0 = 233.15 (1 + 0.2 \times 0.389376) = 233.15 (1 + 0.0778752) \approx 233.15 \times 1.0778752 \approx 251.30$ K.
    *   Stagnation Pressure ($P_0$):
        $P_0 = P \left( 1 + \frac{\gamma - 1}{2} M^2 \right)^{\frac{\gamma}{\gamma-1}} = 0.1 \text{ atm} \left( 1 + \frac{1.4 - 1}{2} (0.624)^2 \right)^{\frac{1.4}{1.4-1}}$
        $P_0 = 0.1 \text{ atm} (1.0778752)^{3.5} \approx 0.1 \text{ atm} \times 1.344 \approx 0.1344$ atm.

2.  **Question:** Air enters a diffuser at $M=2.5$, $T=250$ K, and $P=0.2$ atm. If the diffuser slows down the flow isentropically to $M=1.5$, what are the temperature and pressure at the diffuser exit?

    **Answer:**
    *   The stagnation properties are constant throughout the isentropic process. We need to find the stagnation properties at the inlet and then use them to find the exit static properties.
    *   Inlet conditions: $M_1 = 2.5$, $T_1 = 250$ K, $P_1 = 0.2$ atm.
    *   Calculate $T_0$ and $P_0$ at the inlet:
        $T_0 = T_1 \left( 1 + \frac{\gamma - 1}{2} M_1^2 \right) = 250 \left( 1 + \frac{1.4 - 1}{2} (2.5)^2 \right)$
        $T_0 = 250 (1 + 0.2 \times 6.25) = 250 (1 + 1.25) = 250 \times 2.25 = 562.5$ K.
        $P_0 = P_1 \left( 1 + \frac{\gamma - 1}{2} M_1^2 \right)^{\frac{\gamma}{\gamma-1}} = 0.2 \text{ atm} (2.25)^{3.5} \approx 0.2 \text{ atm} \times 11.85 \approx 2.37$ atm.
    *   Exit conditions: $M_2 = 1.5$, $T_0 = 562.5$ K, $P_0 = 2.37$ atm.
    *   Calculate exit static temperature ($T_2$):
        $T_0 = T_2 \left( 1 + \frac{\gamma - 1}{2} M_2^2 \right)$
        $562.5 = T_2 \left( 1 + \frac{1.4 - 1}{2} (1.5)^2 \right) = T_2 (1 + 0.2 \times 2.25) = T_2 (1 + 0.45) = 1.45 T_2$
        $T_2 = 562.5 / 1.45 \approx 387.93$ K.
    *   Calculate exit static pressure ($P_2$):
        $P_0 = P_2 \left( 1 + \frac{\gamma - 1}{2} M_2^2 \right)^{\frac{\gamma}{\gamma-1}}$
        $2.37 = P_2 (1.45)^{3.5} \approx P_2 \times 3.06$
        $P_2 = 2.37 / 3.06 \approx 0.775$ atm.

---

### 9. Important Points to Remember

*   **Compressibility:** Density changes are significant.
*   **Mach Number:** The key parameter indicating compressibility effects (M > 0.3).
*   **Stagnation State:** Fluid brought to rest adiabatically and isentropically.
*   **Stagnation Properties:** Properties at the stagnation state ($T_0, P_0, \rho_0$).
*   **Isentropic Flow:** $T_0, P_0, \rho_0, h_0$ remain constant.
*   **Stagnation Temperature:** Always higher than static temperature for a moving fluid (unless M=0).
*   **Stagnation Pressure:** Always higher than static pressure for a moving fluid (unless M=0).
*   **Applications:** Pitot tubes, nozzle/diffuser analysis, reference conditions.
*   The relationship between static and stagnation properties is directly linked to the Mach number.

---

### 10. Alignment with Course Outcomes

*   **CO1: Understand the basic concepts of compressible fluid mechanics:** This topic introduces the fundamental differences from incompressible flow and defines key concepts like Mach number, regimes of flow, and stagnation states, which are foundational to compressible fluid mechanics. (Knowledge Level: K3)
*   **CO2: Analyze problems in one dimensional isentropic compressible flow:** The calculations of stagnation properties and their invariance during isentropic processes are directly applicable to analyzing isentropic flows, e.g., in nozzles and diffusers, where flow properties at different points are related through stagnation properties and Mach number. (Knowledge Level: K4)

---
This module provides the foundational understanding of compressible flow behavior, with stagnation properties serving as a critical reference point for subsequent analyses. Understanding these concepts is essential for tackling more complex compressible flow phenomena like shock waves and flow in ducts with friction and heat transfer.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
