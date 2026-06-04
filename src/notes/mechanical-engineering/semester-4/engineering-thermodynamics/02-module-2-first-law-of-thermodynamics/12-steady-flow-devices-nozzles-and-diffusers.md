---
title: "steady-flow devices: nozzles and diffusers"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f4f"
status: "completed"
scrapedAt: "2026-05-20T17:53:28.926Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics

## Topic: Steady-Flow Devices: Nozzles and Diffusers

This topic focuses on the application of the First Law of Thermodynamics to common steady-flow devices: nozzles and diffusers. We will analyze these devices, understanding how energy is conserved as fluid flows through them under steady-state conditions.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Apply the First Law of Thermodynamics to steady-flow devices.** (CO3)
*   **Analyze the performance of nozzles and diffusers.** (CO3)
*   **Understand the concepts of velocity, pressure, and area changes in nozzles and diffusers.** (CO2)
*   **Relate changes in kinetic energy to enthalpy and pressure changes.** (CO3)
*   **Recognize and apply common simplifying assumptions for nozzle and diffuser analysis.** (CO3)

---

### Key Concepts and Definitions:

*   **Steady-Flow Process:** A process during which the mass and energy flow rates through a control volume are constant. Properties at any point within the control volume do not change with time.
    *   *(Cengel & Boles, Ch 4.1)*
    *   *(P.K. Nag, Ch 5.1)*
*   **Control Volume:** A fixed or moving region in space chosen for the study of the mass and energy transfers.
*   **Steady-Flow Energy Equation (SFEE):** A statement of the conservation of energy for steady-flow systems. For a single inlet and single outlet, it can be expressed as:

    $$ \dot{Q}_{in} - \dot{Q}_{out} + \dot{m}(h_1 + \frac{V_1^2}{2} + gz_1) = \dot{m}(h_2 + \frac{V_2^2}{2} + gz_2) $$

    Where:
    *   $\dot{Q}$ is the net rate of heat transfer into the control volume (kW)
    *   $\dot{m}$ is the mass flow rate (kg/s)
    *   $h$ is the specific enthalpy (kJ/kg)
    *   $V$ is the flow velocity (m/s)
    *   $g$ is the acceleration due to gravity (m/s²)
    *   $z$ is the elevation (m)
    *   Subscripts 1 and 2 denote the inlet and outlet, respectively.

    This equation can also be written per unit mass as:

    $$ q_{in} - q_{out} + (h_1 + \frac{V_1^2}{2} + gz_1) = (h_2 + \frac{V_2^2}{2} + gz_2) $$

    Where $q$ is the heat transfer per unit mass (kJ/kg).
    *   *(Cengel & Boles, Ch 4.1)*
    *   *(P.K. Nag, Ch 5.1)*
    *   *(Sonntag, Borgnakke, VanWylen, Ch 7.1)*
*   **Nozzle:** A device that increases the kinetic energy of a fluid by decreasing its pressure and enthalpy. Typically used to accelerate fluids.
    *   *(Cengel & Boles, Ch 4.7)*
    *   *(P.K. Nag, Ch 5.8)*
*   **Diffuser:** A device that increases the pressure of a fluid by decreasing its kinetic energy. Typically used to decelerate fluids.
    *   *(Cengel & Boles, Ch 4.7)*
    *   *(P.K. Nag, Ch 5.8)*

---

### Analysis of Nozzles:

**Purpose:** To increase the velocity of a fluid.

**Typical Applications:** Jet engines, rocket engines, steam turbines, etc.

**Key Characteristics:**
*   Converging passages (cross-sectional area decreases in the direction of flow).
*   Fluid enters at a high pressure and exits at a lower pressure.
*   The primary purpose is to convert thermal or potential energy into kinetic energy.

**Assumptions for Steady-Flow Nozzle Analysis:**
1.  **Steady Flow:** Mass and energy flow rates are constant. (CO2, CO3)
2.  **Single Inlet, Single Outlet:** Only one entry and one exit point for the fluid. (CO3)
3.  **Negligible Potential Energy Change:** The change in elevation is small compared to other energy changes ($gz_1 \approx gz_2$, so $g(z_2 - z_1) \approx 0$). This is often true for horizontal nozzles. (CO3)
4.  **Adiabatic Operation:** No heat transfer occurs across the boundary of the control volume ($\dot{Q} = 0$ or $q = 0$). This is a common and reasonable assumption for well-insulated nozzles, especially in high-velocity flows where the time for heat transfer is short. (CO3)
5.  **No Work Interactions:** No shaft work or electrical work is done by or on the fluid ($W = 0$ or $w = 0$). This is inherently true for simple nozzles. (CO3)

**Applying the First Law (SFEE) to a Nozzle with Assumptions:**

With assumptions 3, 4, and 5, the SFEE simplifies to:

$$ \dot{m}(h_1 + \frac{V_1^2}{2}) = \dot{m}(h_2 + \frac{V_2^2}{2}) $$

Dividing by the mass flow rate ($\dot{m}$), we get the per-unit-mass form:

$$ h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2} $$

Rearranging to find the change in kinetic energy:

$$ \frac{V_2^2 - V_1^2}{2} = h_1 - h_2 $$

$$ V_2^2 - V_1^2 = 2(h_1 - h_2) $$

$$ V_2 = \sqrt{V_1^2 + 2(h_1 - h_2)} $$

**Interpretation:**
*   The increase in kinetic energy ($\frac{V_2^2 - V_1^2}{2}$) is equal to the decrease in enthalpy ($h_1 - h_2$).
*   For an ideal gas, the enthalpy change is related to the temperature change: $h_1 - h_2 = c_p (T_1 - T_2)$.
*   Therefore, $V_2 = \sqrt{V_1^2 + 2c_p (T_1 - T_2)}$.

**Important Point for Nozzles:**
*   For velocity to increase, enthalpy (and thus temperature, for ideal gases) must decrease. This typically happens as the fluid expands through a pressure drop.
*   Converging passages are suitable for subsonic flow ($M < 1$).
*   For supersonic flow ($M > 1$), a **converging-diverging (de Laval) nozzle** is required to achieve further acceleration beyond Mach 1. The converging section accelerates the flow to Mach 1 (the throat), and the diverging section then accelerates it to supersonic speeds.

---

### Analysis of Diffusers:

**Purpose:** To decrease the velocity of a fluid, thereby increasing its pressure.

**Typical Applications:** Air intakes of jet engines, wind tunnels.

**Key Characteristics:**
*   Diverging passages (cross-sectional area increases in the direction of flow).
*   Fluid enters at a high velocity and exits at a lower velocity and higher pressure.
*   The primary purpose is to convert kinetic energy back into internal energy (enthalpy) and pressure.

**Assumptions for Steady-Flow Diffuser Analysis:**
The same assumptions as for nozzles are generally applicable:
1.  **Steady Flow.** (CO2, CO3)
2.  **Single Inlet, Single Outlet.** (CO3)
3.  **Negligible Potential Energy Change.** (CO3)
4.  **Adiabatic Operation** ($q = 0$). (CO3)
5.  **No Work Interactions** ($w = 0$). (CO3)

**Applying the First Law (SFEE) to a Diffuser with Assumptions:**

The simplified SFEE is identical to that of a nozzle:

$$ h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2} $$

Rearranging to find the change in kinetic energy:

$$ \frac{V_2^2 - V_1^2}{2} = h_1 - h_2 $$

**Interpretation:**
*   In a diffuser, the velocity decreases ($V_2 < V_1$). This means $\frac{V_2^2 - V_1^2}{2}$ is negative.
*   Therefore, $h_1 - h_2$ must also be negative, implying $h_2 > h_1$. The enthalpy (and thus temperature for ideal gases) increases as the fluid is decelerated.
*   The kinetic energy lost by the fluid is converted into internal energy (enthalpy) and potentially used to do work on the surroundings (though we assume no work for simple diffusers). In practical terms, this increase in enthalpy manifests as an increase in static pressure.

**Important Point for Diffusers:**
*   Diffusers typically have diverging passages to reduce velocity. If the diverging section is too steep, the flow can separate from the walls, leading to inefficient operation or stalling.

---

### Examples and Practice Problems:

**Example 1: Steam Nozzle**

**Problem:** Steam enters a nozzle at 4 MPa and 500°C with a velocity of 30 m/s. It exits the nozzle at 1 MPa with a velocity of 600 m/s. Assuming the nozzle is adiabatic and potential energy changes are negligible, determine the rate of heat transfer per unit mass.

**Solution:**
We use the SFEE per unit mass:
$q_{in} - q_{out} + (h_1 + \frac{V_1^2}{2}) = (h_2 + \frac{V_2^2}{2})$

Assumptions:
*   Adiabatic: $q_{in} = 0$, $q_{out} = q$.
*   Negligible potential energy.

So, $-q + (h_1 + \frac{V_1^2}{2}) = (h_2 + \frac{V_2^2}{2})$

Rearranging for $q$:
$q = (h_1 - h_2) + (\frac{V_1^2 - V_2^2}{2})$

From steam tables for superheated steam:
At 4 MPa and 500°C, $h_1 = 3446.5$ kJ/kg (from Cengel & Boles, Table A-6, or P.K. Nag, Table A-6).

We need to find $h_2$ at 1 MPa. The problem statement doesn't give the exit temperature or quality. However, if we assume the nozzle is *isentropic* (though the problem doesn't state it), we could use that. But the problem asks for heat transfer, so we must assume we can find $h_2$ independently. Let's assume the exit enthalpy is given or can be found. *Self-correction: The problem statement implies we should be able to solve it with the given info. Let's re-read. The problem implies we should calculate q. This means $h_1$ and $h_2$ must be obtainable.*

Let's assume there's a typo and we're expected to find the enthalpy change or some other property, or perhaps the problem is structured to show that if $h_2$ were known, $q$ could be found.

**Revised approach if $h_2$ were provided or determinable (e.g., if it was an isentropic nozzle and we had exit pressure):**

Let's assume the exit state is specified such that $h_2 = 3052.6$ kJ/kg (this value corresponds to 1 MPa and 300°C, for illustration).

$V_1 = 30$ m/s
$V_2 = 600$ m/s

$h_1 = 3446.5$ kJ/kg
$h_2 = 3052.6$ kJ/kg

$q = (3446.5 - 3052.6) \text{ kJ/kg} + \frac{(30 \text{ m/s})^2 - (600 \text{ m/s})^2}{2 \times 1000 \text{ J/kJ}}$
$q = 393.9 \text{ kJ/kg} + \frac{900 - 360000}{2000} \text{ kJ/kg}$
$q = 393.9 \text{ kJ/kg} + \frac{-359100}{2000} \text{ kJ/kg}$
$q = 393.9 \text{ kJ/kg} - 179.55 \text{ kJ/kg}$
$q = 214.35 \text{ kJ/kg}$

**Answer:** The rate of heat transfer per unit mass is 214.35 kJ/kg (heat is leaving the system if q is negative, entering if positive. Here q is positive, so heat is entering. But nozzle assumptions usually imply adiabatic, meaning q=0. This problem as stated leads to a non-adiabatic scenario if solvable.)

**Important Note on Nozzle/Diffuser Problems:** Most introductory problems assume adiabatic conditions ($q=0$) and then ask to calculate the exit velocity or enthalpy change. If the problem explicitly asks for heat transfer, it might not be adiabatic.

**Let's reformulate Example 1 to be more typical:**

**Example 1 (Revised): Adiabatic Steam Nozzle**

**Problem:** Steam enters an adiabatic nozzle at 4 MPa and 500°C with a velocity of 30 m/s. It exits the nozzle at 1 MPa. Assuming potential energy changes are negligible, determine the exit velocity of the steam.

**Solution:**
SFEE per unit mass: $h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2}$ (since $q=0$ and $\Delta PE = 0$)

*   Inlet state (State 1): $P_1 = 4$ MPa, $T_1 = 500^\circ$C.
    From steam tables (e.g., Cengel & Boles, Table A-6), $h_1 = 3446.5$ kJ/kg.
    $V_1 = 30$ m/s.
*   Exit state (State 2): $P_2 = 1$ MPa.
    To proceed, we usually assume the nozzle is isentropic. If not specified, we cannot determine $h_2$ and hence $V_2$. Let's assume isentropic for this example.
    For isentropic flow, $s_1 = s_2$.
    From steam tables at $P_1 = 4$ MPa, $T_1 = 500^\circ$C, $s_1 = 7.2185$ kJ/kg$\cdot$K.
    Now, at $P_2 = 1$ MPa and $s_2 = 7.2185$ kJ/kg$\cdot$K, find $h_2$.
    From steam tables, at 1 MPa:
    Saturated vapor: $h_g = 2778.1$ kJ/kg, $s_g = 6.8210$ kJ/kg$\cdot$K.
    $T = 300^\circ$C: $h = 3052.6$ kJ/kg, $s = 7.1205$ kJ/kg$\cdot$K.
    $T = 350^\circ$C: $h = 3158.0$ kJ/kg, $s = 7.2757$ kJ/kg$\cdot$K.
    Since $s_2 = 7.2185$ kJ/kg$\cdot$K is between 7.1205 and 7.2757, the exit is superheated steam. We can interpolate to find $h_2$.
    $h_2 = 3052.6 + \frac{7.2185 - 7.1205}{7.2757 - 7.1205} \times (3158.0 - 3052.6)$
    $h_2 = 3052.6 + \frac{0.0980}{0.1552} \times 105.4$
    $h_2 = 3052.6 + 0.6314 \times 105.4$
    $h_2 = 3052.6 + 66.54$
    $h_2 = 3119.14$ kJ/kg

Now, calculate $V_2$:
$3446.5 \text{ kJ/kg} + \frac{(30 \text{ m/s})^2}{2 \times 1000 \text{ J/kJ}} = 3119.14 \text{ kJ/kg} + \frac{V_2^2}{2 \times 1000 \text{ J/kJ}}$
$3446.5 + \frac{900}{2000} = 3119.14 + \frac{V_2^2}{2000}$
$3446.5 + 0.45 = 3119.14 + \frac{V_2^2}{2000}$
$3446.95 - 3119.14 = \frac{V_2^2}{2000}$
$327.81 = \frac{V_2^2}{2000}$
$V_2^2 = 327.81 \times 2000 = 655620$
$V_2 = \sqrt{655620} \approx 809.7$ m/s

**Answer:** The exit velocity of the steam is approximately 809.7 m/s.

**Example 2: Air Diffuser**

**Problem:** Air enters a diffuser with a velocity of 250 m/s, a pressure of 60 kPa, and a temperature of -10°C. The air exits the diffuser with a velocity of 40 m/s. Assuming air behaves as an ideal gas with constant specific heats ($c_p = 1.005$ kJ/kg$\cdot$K, $R = 0.287$ kJ/kg$\cdot$K), and the diffuser is adiabatic with negligible potential energy change, determine the exit pressure and temperature.

**Solution:**
SFEE per unit mass: $h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2}$

*   Inlet state (State 1): $V_1 = 250$ m/s, $P_1 = 60$ kPa, $T_1 = -10^\circ$C $= 263.15$ K.
*   Exit state (State 2): $V_2 = 40$ m/s.

**1. Calculate Exit Temperature ($T_2$):**
For ideal gases with constant specific heats: $h_2 - h_1 = c_p (T_2 - T_1)$.
Substitute into SFEE:
$c_p T_1 + \frac{V_1^2}{2} = c_p T_2 + \frac{V_2^2}{2}$
$c_p (T_2 - T_1) = \frac{V_1^2 - V_2^2}{2}$
$T_2 - T_1 = \frac{V_1^2 - V_2^2}{2c_p}$

$T_2 = T_1 + \frac{V_1^2 - V_2^2}{2c_p}$
$T_2 = 263.15 \text{ K} + \frac{(250 \text{ m/s})^2 - (40 \text{ m/s})^2}{2 \times 1005 \text{ J/kg}\cdot\text{K} \times 1000 \text{ J/kJ}}$
$T_2 = 263.15 \text{ K} + \frac{62500 - 1600}{2010000} \text{ K}$
$T_2 = 263.15 \text{ K} + \frac{60900}{2010000} \text{ K}$
$T_2 = 263.15 \text{ K} + 0.0303 \text{ K}$
$T_2 = 263.18$ K

This seems like a very small temperature rise. Let's double-check the units and calculations.
$c_p = 1.005$ kJ/kg$\cdot$K.
$T_2 = 263.15 \text{ K} + \frac{(250^2 - 40^2) \text{ m}^2/\text{s}^2}{2 \times 1.005 \text{ kJ/kg}\cdot\text{K}}$
$T_2 = 263.15 \text{ K} + \frac{62500 - 1600}{2.010} \text{ kJ/kg}$
$T_2 = 263.15 \text{ K} + \frac{60900}{2.010} \text{ K}$
$T_2 = 263.15 \text{ K} + 30300 \text{ K}$ ??? This is clearly wrong.

**Error in unit conversion for kinetic energy term:**
The kinetic energy term is $\frac{V^2}{2}$.
$\frac{(250 \text{ m/s})^2}{2} = \frac{62500 \text{ m}^2/\text{s}^2}{2} = 31250 \text{ J/kg} = 31.25 \text{ kJ/kg}$.
$\frac{(40 \text{ m/s})^2}{2} = \frac{1600 \text{ m}^2/\text{s}^2}{2} = 800 \text{ J/kg} = 0.80 \text{ kJ/kg}$.

Let's recalculate $T_2$:
$h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2}$
$c_p T_1 + 31.25 = c_p T_2 + 0.80$
$c_p (T_2 - T_1) = 31.25 - 0.80 = 30.45$ kJ/kg
$T_2 - T_1 = \frac{30.45 \text{ kJ/kg}}{1.005 \text{ kJ/kg}\cdot\text{K}} = 30.30$ K
$T_2 = T_1 + 30.30 \text{ K} = 263.15 \text{ K} + 30.30 \text{ K} = 293.45$ K

So, the exit temperature is $T_2 = 293.45$ K or $20.3^\circ$C. This is a more reasonable temperature rise.

**2. Calculate Exit Pressure ($P_2$):**
We need to find $P_2$. We can use the steady-flow energy equation implicitly to relate pressure and temperature for an adiabatic process. For an ideal gas, we know:
$P V = R T \implies \frac{P}{\rho} = R T$
$h = u + Pv$. For ideal gases, $u = c_v T$ and $h = c_p T$.
Also, $c_p = c_v + R$, so $c_v = c_p - R = 1.005 - 0.287 = 0.718$ kJ/kg$\cdot$K.

We can use the isentropic relation for ideal gases if the diffuser is assumed to be isentropic. However, the problem doesn't state it's isentropic. For a diffuser to recover pressure efficiently, it ideally operates isentropically. Let's proceed assuming an isentropic process to find the maximum possible pressure recovery.

For an isentropic process of an ideal gas:
$\frac{P_2}{P_1} = (\frac{T_2}{T_1})^{\frac{k}{k-1}}$
where $k = \frac{c_p}{c_v} = \frac{1.005}{0.718} \approx 1.4$.
$\frac{k}{k-1} = \frac{1.4}{0.4} = 3.5$.

$P_2 = P_1 (\frac{T_2}{T_1})^{3.5}$
$P_2 = 60 \text{ kPa} (\frac{293.45 \text{ K}}{263.15 \text{ K}})^{3.5}$
$P_2 = 60 \text{ kPa} (1.1151)^{3.5}$
$P_2 = 60 \text{ kPa} \times 1.4758$
$P_2 = 88.55$ kPa

**Answer:** The exit temperature is approximately 293.45 K (20.3°C) and the exit pressure is approximately 88.55 kPa (assuming isentropic operation).

---

### Practice Questions:

1.  **Nozzle Velocity Calculation:** Air enters a nozzle at 500 kPa, 100°C, and 50 m/s. It expands isentropically to a pressure of 100 kPa. Assuming constant specific heats ($c_p = 1.05$ kJ/kg·K, $k=1.4$), determine the exit velocity.
    *   *(CO3, K3)*

2.  **Diffuser Pressure Rise:** Nitrogen gas enters a diffuser at 100 kPa, 10°C, and 300 m/s. The exit velocity is 50 m/s. Assuming the process is adiabatic and potential energy changes are negligible, and nitrogen behaves as an ideal gas with constant specific heats ($c_p = 1.04$ kJ/kg·K), calculate the exit pressure and temperature.
    *   *(CO3, K3)*

3.  **Heat Transfer in a Nozzle:** Steam enters a nozzle with an enthalpy of 3000 kJ/kg and kinetic energy of 10 kJ/kg. It exits with an enthalpy of 2700 kJ/kg and kinetic energy of 50 kJ/kg. If the heat transfer is 20 kJ/kg (out of the system), what is the work interaction per unit mass?
    *   *(CO3, K3)*
    *   *Hint: Recall the full SFEE: $q_{in} - q_{out} + \dot{m}(h_1 + \frac{V_1^2}{2} + gz_1) + \dot{W}_{in} = \dot{m}(h_2 + \frac{V_2^2}{2} + gz_2) + \dot{W}_{out}$. Assume $\dot{W}_{in} = \dot{W}$ and $\dot{W}_{out}=0$ for the work term, and $q_{in}=0, q_{out}=q$. So, $-q + h_1 + \frac{V_1^2}{2} + w_{in} = h_2 + \frac{V_2^2}{2}$. Here q=20 kJ/kg (out of system), so $-20$. Calculate $w_{in}$.*

---

### Answers to Practice Questions:

1.  **Nozzle Velocity Calculation:**
    *   $P_1 = 500$ kPa, $T_1 = 100^\circ$C = 373.15 K, $V_1 = 50$ m/s.
    *   $P_2 = 100$ kPa.
    *   For isentropic process ($s_1=s_2$) for ideal gas with constant specific heats:
        $\frac{T_2}{T_1} = (\frac{P_2}{P_1})^{\frac{k-1}{k}}$
        $\frac{T_2}{373.15} = (\frac{100}{500})^{\frac{1.4-1}{1.4}} = (0.2)^{0.2857} = 0.6446$
        $T_2 = 373.15 \times 0.6446 = 240.55$ K.
    *   SFEE (adiabatic, negligible PE): $h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2}$
    *   $c_p T_1 + \frac{V_1^2}{2} = c_p T_2 + \frac{V_2^2}{2}$
    *   $V_2^2 = V_1^2 + 2c_p (T_1 - T_2)$
    *   $V_2^2 = (50 \text{ m/s})^2 + 2 \times (1050 \text{ J/kg}\cdot\text{K}) \times (373.15 \text{ K} - 240.55 \text{ K})$
    *   $V_2^2 = 2500 + 2100 \times (132.6)$
    *   $V_2^2 = 2500 + 278460 = 280960$ m²/s²
    *   $V_2 = \sqrt{280960} \approx 530.06$ m/s.
    *   **Answer:** $V_2 \approx 530.06$ m/s.

2.  **Diffuser Pressure Rise:**
    *   Nitrogen: $P_1 = 100$ kPa, $T_1 = 10^\circ$C = 283.15 K, $V_1 = 300$ m/s.
    *   $V_2 = 50$ m/s. Adiabatic, negligible PE.
    *   $c_p = 1.04$ kJ/kg·K. $k \approx 1.4$ for diatomic gases.
    *   SFEE: $h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2}$
    *   $c_p T_1 + \frac{V_1^2}{2} = c_p T_2 + \frac{V_2^2}{2}$
    *   $T_2 = T_1 + \frac{V_1^2 - V_2^2}{2c_p}$
    *   $T_2 = 283.15 \text{ K} + \frac{(300 \text{ m/s})^2 - (50 \text{ m/s})^2}{2 \times 1040 \text{ J/kg}\cdot\text{K}}$
    *   $T_2 = 283.15 \text{ K} + \frac{90000 - 2500}{2080} \text{ K}$
    *   $T_2 = 283.15 \text{ K} + \frac{87500}{2080} \text{ K} = 283.15 + 42.07 = 325.22$ K.
    *   **Exit Temperature:** $T_2 = 325.22$ K (or $52.07^\circ$C).
    *   Assuming isentropic flow to find exit pressure:
        $\frac{P_2}{P_1} = (\frac{T_2}{T_1})^{\frac{k}{k-1}}$
        $\frac{P_2}{100 \text{ kPa}} = (\frac{325.22}{283.15})^{\frac{1.4}{0.4}} = (1.1486)^{3.5} = 1.8574$
        $P_2 = 100 \times 1.8574 = 185.74$ kPa.
    *   **Exit Pressure:** $P_2 = 185.74$ kPa.

3.  **Heat Transfer in a Nozzle:**
    *   $h_1 = 3000$ kJ/kg, KE$_1 = 10$ kJ/kg.
    *   $h_2 = 2700$ kJ/kg, KE$_2 = 50$ kJ/kg.
    *   Heat transfer $q_{out} = 20$ kJ/kg. This means $q_{in}=0$ and $q_{out}=20$.
    *   SFEE per unit mass (including work): $q_{in} - q_{out} + h_1 + \text{KE}_1 + \text{PE}_1 + w_{in} = h_2 + \text{KE}_2 + \text{PE}_2 + w_{out}$.
    *   Assuming $\Delta PE = 0$ and $w_{out}=0$:
        $0 - 20 + 3000 + 10 + w_{in} = 2700 + 50 + 0$
        $2990 + w_{in} = 2750$
        $w_{in} = 2750 - 2990 = -240$ kJ/kg.
    *   The work interaction is -240 kJ/kg, meaning 240 kJ/kg of work is done *by* the system (e.g., a turbine nozzle). If the question implies work is done *on* the system, then $w_{in}$ would be positive. The phrasing "work interaction" is general. Let's assume $w_{in}$ represents work entering the system.
    *   **Answer:** Work interaction is -240 kJ/kg (i.e., 240 kJ/kg work done by the system).

---

### Important Points to Remember:

*   **Steady-flow devices** are analyzed using the Steady-Flow Energy Equation (SFEE).
*   **Nozzles** accelerate fluids, converting enthalpy/thermal energy into kinetic energy.
*   **Diffusers** decelerate fluids, converting kinetic energy into enthalpy/pressure.
*   For both nozzles and diffusers, the simplified SFEE with common assumptions is: $h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2}$.
*   In nozzles, $h_1 > h_2$ (enthalpy decreases) and $V_2 > V_1$ (velocity increases).
*   In diffusers, $h_2 > h_1$ (enthalpy increases) and $V_2 < V_1$ (velocity decreases).
*   **Adiabatic assumption ($q=0$)** is very common and simplifies the analysis significantly.
*   **Negligible potential energy change ($gz_1 \approx gz_2$)** is also a frequent assumption for horizontal or short devices.
*   For ideal gases with constant specific heats, enthalpy is directly proportional to temperature: $\Delta h = c_p \Delta T$.
*   The **mass flow rate** is constant in steady flow: $\dot{m}_1 = \dot{m}_2$. This links velocity and area changes by $\dot{m} = \rho_1 A_1 V_1 = \rho_2 A_2 V_2$.

---

### Alignment with Course Outcomes:

*   **CO1 (Understand basic concepts):** Covered through definitions of steady-flow, control volume, enthalpy, kinetic energy.
*   **CO2 (Understand the laws of thermodynamics):** Covered by applying the First Law in the form of SFEE.
*   **CO3 (Conduct first law analysis of open and closed systems):** Directly addressed by applying SFEE to open systems (nozzles and diffusers).
*   **CO4 (Determine entropy changes):** While not the primary focus, isentropic analysis for determining exit properties (as seen in practice problem 1 and 2) indirectly involves understanding entropy, although entropy changes themselves are not calculated.
*   **CO5 (Determine the properties of pure substances):** Required for solving problems involving steam, necessitating the use of steam tables to find enthalpy and entropy.

---
This concludes the study notes for steady-flow devices: nozzles and diffusers. Remember to practice applying the SFEE and understand the energy transformations involved.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
