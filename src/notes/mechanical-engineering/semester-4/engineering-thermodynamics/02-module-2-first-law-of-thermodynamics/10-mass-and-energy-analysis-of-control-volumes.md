---
title: "mass and energy analysis of control volumes"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f4d"
status: "completed"
scrapedAt: "2026-05-20T17:53:27.502Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics

## Topic: Mass and Energy Analysis of Control Volumes

This topic builds upon the fundamental principles of the First Law of Thermodynamics by extending its application to systems where mass can cross the system boundary. These are known as **control volumes** or **open systems**.

---

### 1. Introduction to Control Volumes (Open Systems)

*   **Definition:** A control volume is a region in space or a quantity of matter chosen for study. It is often a device that involves the flow of mass, such as a turbine, compressor, heat exchanger, or nozzle.
*   **Control Surface:** The boundary of the control volume is called the control surface.
*   **Key Difference from Closed Systems:** In closed systems, mass does not cross the boundary. In control volumes, mass *does* cross the boundary, carrying its own energy with it. This makes the energy analysis more complex.

**(Reference: Cengel & Boles, Chapter 4.1)**

---

### 2. Conservation of Mass for Control Volumes

The **conservation of mass principle** states that mass cannot be created or destroyed. For a control volume, this can be expressed as:

**Rate of mass entering the system = Rate of mass leaving the system + Rate of accumulation of mass within the system**

This can be formulated as a general unsteady-state mass balance:

$\frac{dM_{CV}}{dt} = \sum_{in} \dot{m}_{in} - \sum_{out} \dot{m}_{out}$

Where:
*   $M_{CV}$ is the total mass within the control volume.
*   $\frac{dM_{CV}}{dt}$ is the rate of change of mass within the control volume.
*   $\dot{m}_{in}$ is the mass flow rate entering the control volume.
*   $\dot{m}_{out}$ is the mass flow rate leaving the control volume.

**Steady-Flow Process:**
A process during which the control volume properties (e.g., temperature, pressure, density) do not change with time.
For a steady-flow process:
$\frac{dM_{CV}}{dt} = 0$
Therefore, for steady-flow:
$\sum_{in} \dot{m}_{in} = \sum_{out} \dot{m}_{out}$

**For a single-inlet, single-outlet steady-flow system:**
$\dot{m}_1 = \dot{m}_2$

Since mass flow rate $\dot{m} = \rho \cdot A \cdot V$, where $\rho$ is density, $A$ is cross-sectional area, and $V$ is average velocity:
$\rho_1 A_1 V_1 = \rho_2 A_2 V_2$

**Special Case: Incompressible Flow (e.g., liquids)**
For incompressible fluids, density ($\rho$) is constant.
$\rho_1 = \rho_2$
The mass balance simplifies to the **conservation of volume flow rate**:
$A_1 V_1 = A_2 V_2$

**(Reference: Cengel & Boles, Chapter 4.1; P.K. Nag, Chapter 6.1)**

---

### 3. Conservation of Energy (First Law) for Control Volumes

The **First Law of Thermodynamics** (conservation of energy) states that energy cannot be created or destroyed. For a control volume, energy can cross the control surface via heat transfer ($\dot{Q}$), work ($\dot{W}$), and mass flow.

The general unsteady-state energy balance for a control volume is:

**Rate of energy entering = Rate of energy leaving + Rate of accumulation of energy within the control volume**

This can be expressed as:

$\dot{Q}_{in} - \dot{Q}_{out} + \sum_{in} \dot{m}_i e_i - \sum_{out} \dot{m}_e e_e + \frac{dE_{CV}}{dt} = 0$

Where:
*   $\dot{Q}_{in}$ and $\dot{Q}_{out}$ are the net rates of heat transfer into and out of the control volume, respectively.
*   $\dot{m}_i$ and $\dot{m}_e$ are the mass flow rates of the streams entering and leaving, respectively.
*   $e_i$ and $e_e$ are the specific energy of the streams entering and leaving, respectively.
*   $\frac{dE_{CV}}{dt}$ is the rate of change of total energy within the control volume.

**Specific Energy ($e$) of a Flow Stream:**
The total energy carried by a unit mass of a fluid stream includes:
*   Internal energy ($u$)
*   Kinetic energy ($\frac{V^2}{2}$)
*   Potential energy ($gz$)

So, $e = u + \frac{V^2}{2} + gz$

Substituting this into the energy balance:

$\dot{Q}_{in} - \dot{Q}_{out} + \sum_{in} \dot{m}_i (h_i + \frac{V_i^2}{2} + gz_i) - \sum_{out} \dot{m}_e (h_e + \frac{V_e^2}{2} + gz_e) + \frac{dE_{CV}}{dt} = 0$

Where $h = u + Pv$ is the specific enthalpy. Enthalpy ($h$) conveniently combines the internal energy and the flow work ($Pv$) associated with the mass crossing the boundary.

**(Reference: Cengel & Boles, Chapter 4.2; P.K. Nag, Chapter 6.2)**

---

### 4. Steady-Flow Energy Equation (SFEE)

The **Steady-Flow Energy Equation (SFEE)** is a crucial application of the First Law for control volumes operating under steady-flow conditions.

For a steady-flow process:
*   $\frac{dE_{CV}}{dt} = 0$
*   Properties at each point within the control volume are constant with time.
*   The mass flow rate is constant for each inlet and outlet.

The energy balance simplifies to:

**Net rate of energy transfer by heat and work = Net rate of energy transported by mass**

$\dot{Q}_{net,in} + \dot{W}_{net,in} + \sum_{in} \dot{m}_i (h_i + \frac{V_i^2}{2} + gz_i) = \sum_{out} \dot{m}_e (h_e + \frac{V_e^2}{2} + gz_e)$

Where:
*   $\dot{Q}_{net,in} = \dot{Q}_{in} - \dot{Q}_{out}$ (net heat transfer into the CV)
*   $\dot{W}_{net,in} = \dot{W}_{in} - \dot{W}_{out}$ (net work transfer into the CV)

**For a single-inlet, single-outlet steady-flow system:**
$\dot{Q}_{net,in} + \dot{W}_{net,in} + \dot{m}(h_1 + \frac{V_1^2}{2} + gz_1) = \dot{m}(h_2 + \frac{V_2^2}{2} + gz_2)$

Dividing by mass flow rate $\dot{m}$:

$q_{net,in} + w_{net,in} + (h_1 + \frac{V_1^2}{2} + gz_1) = (h_2 + \frac{V_2^2}{2} + gz_2)$

Where:
*   $q_{net,in} = \frac{\dot{Q}_{net,in}}{\dot{m}}$ (net heat transfer per unit mass)
*   $w_{net,in} = \frac{\dot{W}_{net,in}}{\dot{m}}$ (net work transfer per unit mass)

**Important Note on Work:** Work can be done by the fluid on the surroundings (e.g., shaft work in a turbine) or work can be done on the fluid by the surroundings (e.g., shaft work in a compressor). Conventionally, work done *by* the system is positive. However, in the SFEE as presented above, work *into* the CV is positive. It's crucial to be consistent with sign conventions.

**(Reference: Cengel & Boles, Chapter 4.3; P.K. Nag, Chapter 6.3)**

---

### 5. Analysis of Common Steady-Flow Devices

The SFEE is applied to analyze the performance of various engineering devices.

**a) Turbines and Compressors (Shaft Work)**

*   **Turbine:** A device that extracts energy from a fluid and converts it into useful work (usually shaft work). The fluid expands through the turbine.
    *   **Work output:** $\dot{W}_{out}$ is typically positive.
    *   SFEE: $\dot{Q}_{net,in} + \dot{W}_{out} + \dot{m}(h_1 + \frac{V_1^2}{2} + gz_1) = \dot{m}(h_2 + \frac{V_2^2}{2} + gz_2)$
    *   If heat transfer is negligible ($\dot{Q}_{net,in} \approx 0$): $\dot{W}_{out} = \dot{m}[(h_1 - h_2) + \frac{V_1^2 - V_2^2}{2} + g(z_1 - z_2)]$
    *   Often, kinetic and potential energy changes are small and can be neglected. Then, $\dot{W}_{out} \approx \dot{m}(h_1 - h_2)$.

*   **Compressor/Pump:** A device that adds energy to a fluid (usually work) to increase its pressure. The fluid is compressed.
    *   **Work input:** $\dot{W}_{in}$ is typically positive.
    *   SFEE: $\dot{Q}_{net,in} + \dot{W}_{in} + \dot{m}(h_1 + \frac{V_1^2}{2} + gz_1) = \dot{m}(h_2 + \frac{V_2^2}{2} + gz_2)$
    *   If heat transfer is negligible ($\dot{Q}_{net,in} \approx 0$): $\dot{W}_{in} = \dot{m}[(h_2 - h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1)]$
    *   Often, kinetic and potential energy changes are small and can be neglected. Then, $\dot{W}_{in} \approx \dot{m}(h_2 - h_1)$.

**(Reference: Cengel & Boles, Chapter 4.3; P.K. Nag, Chapter 6.4)**

**b) Heat Exchangers (No Work Output)**

*   **Examples:** Condensers, boilers, radiators.
*   **Work transfer:** $\dot{W}_{net} = 0$ (no shaft work or moving boundaries).
*   SFEE: $\dot{Q}_{net,in} + \sum_{in} \dot{m}_i (h_i + \frac{V_i^2}{2} + gz_i) = \sum_{out} \dot{m}_e (h_e + \frac{V_e^2}{2} + gz_e)$
*   Assuming negligible kinetic and potential energy changes: $\dot{Q}_{net,in} = \sum_{out} \dot{m}_e h_e - \sum_{in} \dot{m}_i h_i$
*   For two streams (e.g., stream 1 entering, stream 2 entering, stream 1 leaving, stream 2 leaving):
    $\dot{m}_1(h_1 - h_2) = \dot{m}_2(h_3 - h_4)$ (heat lost by one fluid equals heat gained by the other).

**(Reference: Cengel & Boles, Chapter 4.3; P.K. Nag, Chapter 6.4)**

**c) Nozzles and Diffusers (No Work Output)**

*   **Nozzle:** A device that increases the velocity of a fluid by decreasing its pressure and kinetic energy.
*   **Diffuser:** A device that decreases the velocity of a fluid by increasing its pressure and kinetic energy.
*   **Work transfer:** $\dot{W}_{net} = 0$.
*   SFEE: $\dot{Q}_{net,in} + \sum_{in} \dot{m}_i (h_i + \frac{V_i^2}{2} + gz_i) = \sum_{out} \dot{m}_e (h_e + \frac{V_e^2}{2} + gz_e)$
*   Assuming negligible heat transfer ($\dot{Q}_{net,in} \approx 0$) and potential energy changes ($gz$ terms):
    *   **For a nozzle (1 to 2, V2 > V1):** $\dot{m}(h_1 + \frac{V_1^2}{2}) = \dot{m}(h_2 + \frac{V_2^2}{2})$
        $\frac{V_2^2 - V_1^2}{2} = h_1 - h_2$
    *   **For a diffuser (1 to 2, V2 < V1):** $\dot{m}(h_1 + \frac{V_1^2}{2}) = \dot{m}(h_2 + \frac{V_2^2}{2})$
        $\frac{V_1^2 - V_2^2}{2} = h_2 - h_1$

**(Reference: Cengel & Boles, Chapter 4.3; P.K. Nag, Chapter 6.4)**

**d) Throttling Valves (No Work Output, No Heat Transfer)**

*   **Examples:** Expansion valves in refrigeration systems, porous plugs.
*   **Work transfer:** $\dot{W}_{net} = 0$.
*   **Heat transfer:** $\dot{Q}_{net,in} = 0$ (usually insulated).
*   SFEE: $\sum_{in} \dot{m}_i (h_i + \frac{V_i^2}{2} + gz_i) = \sum_{out} \dot{m}_e (h_e + \frac{V_e^2}{2} + gz_e)$
*   Assuming negligible kinetic and potential energy changes:
    *   **For a single-inlet, single-outlet throttling process:** $\dot{m}(h_1 + \frac{V_1^2}{2} + gz_1) = \dot{m}(h_2 + \frac{V_2^2}{2} + gz_2)$
    *   If kinetic and potential energy changes are also negligible: **$h_1 = h_2$**. This is known as an **isenthalpic process**.

**(Reference: Cengel & Boles, Chapter 4.3; P.K. Nag, Chapter 6.4)**

---

### 6. Unsteady-Flow Energy Analysis

While steady-flow is common, many processes involve changes in mass and energy within the control volume over time (e.g., filling or emptying a tank). The general unsteady-state energy balance is used here:

$\dot{Q}_{in} - \dot{Q}_{out} + \sum_{in} \dot{m}_i e_i - \sum_{out} \dot{m}_e e_e = \frac{dE_{CV}}{dt}$

where $e$ is the specific energy carried by mass, $e = h + \frac{V^2}{2} + gz$.

For a control volume with a single inlet and a single outlet, the total energy within the CV is $E_{CV} = m_{CV} e_{CV} = m_{CV}(u_{CV} + \frac{V_{CV}^2}{2} + gz_{CV})$.

$\frac{dE_{CV}}{dt} = \frac{d}{dt}(m_{CV} e_{CV}) = \frac{dm_{CV}}{dt} e_{CV} + m_{CV} \frac{de_{CV}}{dt}$

Using the mass balance $\frac{dm_{CV}}{dt} = \dot{m}_{in} - \dot{m}_{out}$, the energy equation becomes:

$\dot{Q}_{in} - \dot{W}_{cv} + \dot{m}_{in}(h_{in} + \frac{V_{in}^2}{2} + gz_{in}) - \dot{m}_{out}(h_{out} + \frac{V_{out}^2}{2} + gz_{out}) = m_{CV,2} e_{CV,2} - m_{CV,1} e_{CV,1}$

*   **Filling or Emptying a Tank:**
    *   Consider a tank being filled with a gas from a high-pressure line. The gas entering has properties $P_{in}, T_{in}, h_{in}$. The tank initially contains gas with properties $P_1, T_1, u_1$. The tank is filled until it reaches final state $P_2, T_2, u_2$.
    *   During filling, there is no outlet ($\dot{m}_{out} = 0$). The work done by the system is often negligible.
    *   The mass within the control volume changes: $m_{CV,2} = m_{CV,1} + m_{in}$.
    *   The energy balance simplifies to:
        $\dot{Q}_{in} + \dot{m}_{in}h_{in} = \frac{dE_{CV}}{dt}$
    *   Integrating over time or considering states:
        $Q_{in} + m_{in}h_{in} = m_{CV,2}u_{CV,2} - m_{CV,1}u_{CV,1}$ (assuming PE and KE are negligible and no boundary work)
    *   From mass balance: $m_{in} = m_{CV,2} - m_{CV,1}$.
    *   $Q_{in} + (m_{CV,2} - m_{CV,1})h_{in} = m_{CV,2}u_{CV,2} - m_{CV,1}u_{CV,1}$
    *   $Q_{in} + m_{CV,2}h_{in} - m_{CV,1}h_{in} = m_{CV,2}u_{CV,2} - m_{CV,1}u_{CV,1}$
    *   $Q_{in} + m_{CV,2}(h_{in} - u_{CV,2}) = m_{CV,1}(h_{in} - u_{CV,1})$
    *   Since $h = u + Pv$: $Q_{in} + m_{CV,2}(Pv)_{in} = m_{CV,1}(h_{in} - u_{CV,1})$. This is often written as:
        $Q_{in} + m_{in}h_{in} = \Delta U_{CV}$
        $Q_{in} + (m_{final} - m_{initial})h_{in} = m_{final}u_{final} - m_{initial}u_{initial}$

**(Reference: Cengel & Boles, Chapter 4.7; P.K. Nag, Chapter 6.6)**

---

### 7. Summary of Key Concepts and Learning Outcomes

*   **CO1 (Understand basic concepts):** Definition of control volume, control surface, mass flow rate, steady-flow.
*   **CO2 (Understand laws):** Conservation of mass and conservation of energy applied to control volumes.
*   **CO3 (First law analysis of open/closed systems):** Application of SFEE to various devices (turbines, compressors, nozzles, heat exchangers, throttling valves). Understanding unsteady-flow analysis for filling/emptying processes.
*   **CO4 (Entropy changes):** While this module focuses on the First Law, understanding mass and energy transfer is foundational for later entropy analysis.
*   **CO5 (Properties of pure substances):** Essential for determining enthalpy ($h$), internal energy ($u$), and specific volume ($v$) of substances like steam, refrigerants, etc., which are needed for the SFEE calculations.

---

### 8. Important Points to Remember

*   **Control Volume vs. Closed System:** The primary distinction is the ability of mass to cross the boundary.
*   **Conservation of Mass:** For steady flow, mass in equals mass out. For unsteady flow, there's an accumulation term.
*   **Conservation of Energy:** Energy enters/leaves via heat, work, and mass flow (carrying enthalpy, kinetic, and potential energy).
*   **Enthalpy ($h = u + Pv$):** Crucial for energy analysis of flow streams as it conveniently includes internal energy and flow work.
*   **Steady-Flow Energy Equation (SFEE):** A powerful tool for analyzing devices where properties don't change with time.
*   **Assumptions:** Always be aware of the assumptions made when applying the SFEE (e.g., steady flow, negligible KE/PE changes, adiabatic processes).
*   **Sign Conventions:** Consistently use sign conventions for heat and work. Work done *by* the system is often positive, but the SFEE as written earlier uses work *into* the CV as positive.
*   **Unsteady Flow:** Requires accounting for the rate of change of energy within the control volume.

---

### 9. Practice Questions and Exercises

**Question 1 (SFEE - Turbine):**
Steam enters a turbine at 4 MPa and 400°C with a velocity of 80 m/s and exits at 30 kPa with a quality of 0.92 and a velocity of 50 m/s. The steam flow rate is 12 kg/s. The turbine produces 8 MW of shaft power. Assume the process is adiabatic. Calculate the change in specific enthalpy ($\Delta h = h_2 - h_1$) between the inlet and exit.

*   **Solution:**
    *   From steam tables:
        *   At 4 MPa, 400°C: $h_1 \approx 3214.7 \, \text{kJ/kg}$
    *   At 30 kPa: $h_f \approx 289.2 \, \text{kJ/kg}$, $h_g \approx 2624.4 \, \text{kJ/kg}$
        $h_2 = h_f + x h_{fg} = 289.2 + 0.92 \times (2624.4 - 289.2) = 289.2 + 0.92 \times 2335.2 \approx 2437.2 \, \text{kJ/kg}$
    *   SFEE (adiabatic, $\dot{Q}=0$): $\dot{W}_{out} = \dot{m}[(h_1 - h_2) + \frac{V_1^2 - V_2^2}{2} + g(z_1 - z_2)]$
    *   Neglecting potential energy change $g(z_1 - z_2)$:
        $\dot{W}_{out} = \dot{m}[(h_1 - h_2) + \frac{V_1^2 - V_2^2}{2}]$
    *   Convert $\dot{W}_{out}$ to kW: $8 \, \text{MW} = 8000 \, \text{kW}$
    *   $8000 \, \text{kW} = 12 \, \text{kg/s} \times [(h_1 - h_2) + \frac{(80 \, \text{m/s})^2 - (50 \, \text{m/s})^2}{2 \times 1000 \, \text{J/kJ} \times 1 \, \text{kg/(kg m}^2/\text{s}^2)}] $
    *   $8000 \, \text{kW} = 12 \, \text{kg/s} \times [(h_1 - h_2) + \frac{6400 - 2500}{2000} \, \text{kJ/kg}]$
    *   $8000 \, \text{kW} = 12 \, \text{kg/s} \times [(h_1 - h_2) + \frac{3900}{2000} \, \text{kJ/kg}]$
    *   $8000 \, \text{kW} = 12 \, \text{kg/s} \times [(h_1 - h_2) + 1.95 \, \text{kJ/kg}]$
    *   $\frac{8000}{12} \, \text{kW} = (h_1 - h_2) + 1.95 \, \text{kJ/kg}$
    *   $666.67 \, \text{kJ/kg} \approx (h_1 - h_2) + 1.95 \, \text{kJ/kg}$
    *   $h_1 - h_2 \approx 664.72 \, \text{kJ/kg}$
    *   $\Delta h = h_2 - h_1 \approx -664.72 \, \text{kJ/kg}$

**Question 2 (SFEE - Nozzle):**
Air enters a steady-flow nozzle at 500 kPa, 150°C, and 30 m/s with a cross-sectional area of 0.05 m². The air exits the nozzle at 100 kPa. Assuming the nozzle is adiabatic and the kinetic energy of the exiting fluid is much larger than that of the entering fluid, determine the exit velocity of the air. Use $c_p = 1.005 \, \text{kJ/kg} \cdot ^\circ\text{C}$ and $R = 0.287 \, \text{kJ/kg} \cdot ^\circ\text{C}$ for air.

*   **Solution:**
    *   Air enters as an ideal gas.
    *   Exit velocity is desired, so assume $V_2 \gg V_1$ and neglect $V_1$. Assume adiabatic ($\dot{Q}=0$) and no work ($\dot{W}=0$). Also neglect potential energy.
    *   SFEE: $\dot{m}(h_1 + \frac{V_1^2}{2}) = \dot{m}(h_2 + \frac{V_2^2}{2})$
    *   With assumptions: $h_1 = h_2 + \frac{V_2^2}{2}$
    *   Since $h = c_p T$: $c_p T_1 = c_p T_2 + \frac{V_2^2}{2}$
    *   This means $T_2 < T_1$ for $V_2$ to be significant. However, we don't know $T_2$. The problem statement "kinetic energy of the exiting fluid is much larger than that of the entering fluid" allows us to simplify $h_1 \approx h_2$ in the SFEE when looking for $V_2$ *if* we are not given enough info to calculate $h_2$. But here, we have exit pressure, which implies we can find $T_2$ if we knew the process.
    *   **Revisiting the SFEE for nozzle with negligible inlet KE:** $h_1 = h_2 + \frac{V_2^2}{2}$ which means $\frac{V_2^2}{2} = h_1 - h_2 = c_p(T_1 - T_2)$.
    *   The problem statement implies we should use the full equation and look for $T_2$. Let's re-read the problem. "Assuming the nozzle is adiabatic and the kinetic energy of the exiting fluid is much larger than that of the entering fluid". This means we can neglect $V_1^2/2$ in the SFEE.
    *   $h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2}$
    *   $c_p T_1 + \frac{V_1^2}{2} = c_p T_2 + \frac{V_2^2}{2}$
    *   $1.005 \frac{\text{kJ}}{\text{kg}\cdot^\circ\text{C}} \times (150+273.15) \, \text{K} + \frac{(30 \, \text{m/s})^2}{2 \times 1000} = 1.005 \frac{\text{kJ}}{\text{kg}\cdot^\circ\text{C}} \times T_2 + \frac{V_2^2}{2000}$
    *   $422.1 \, \text{kJ/kg} + 0.45 \, \text{kJ/kg} = 1.005 \, \text{kJ/kg}\cdot\text{K} \times T_2 + \frac{V_2^2}{2000}$
    *   $422.55 \, \text{kJ/kg} = 1.005 \, T_2 + \frac{V_2^2}{2000}$
    *   We need $T_2$. For an adiabatic nozzle, we can consider it isentropic if the flow is reversible. If it's isentropic for an ideal gas: $T_2 = T_1 (P_2/P_1)^{(k-1)/k}$. For air, $k \approx 1.4$.
    *   $T_2 = (150+273.15) \, \text{K} \times (100/500)^{(1.4-1)/1.4} = 423.15 \, \text{K} \times (0.2)^{0.4/1.4} = 423.15 \, \text{K} \times (0.2)^{0.2857} \approx 423.15 \times 0.6408 \approx 271.2 \, \text{K}$
    *   Now, substitute $T_2$ back into the energy equation:
    *   $422.55 \, \text{kJ/kg} = 1.005 \, \text{kJ/kg}\cdot\text{K} \times 271.2 \, \text{K} + \frac{V_2^2}{2000}$
    *   $422.55 \, \text{kJ/kg} = 272.56 \, \text{kJ/kg} + \frac{V_2^2}{2000}$
    *   $\frac{V_2^2}{2000} = 422.55 - 272.56 = 149.99 \, \text{kJ/kg}$
    *   $V_2^2 = 149.99 \times 2000 = 299980 \, (\text{m/s})^2$
    *   $V_2 = \sqrt{299980} \approx 547.7 \, \text{m/s}$

**Question 3 (Unsteady Flow - Filling Tank):**
An evacuated, insulated rigid tank is initially filled with air at 100 kPa and 15°C. Air is allowed to flow into the tank from a large reservoir at 500 kPa and 25°C. Determine the final temperature of the air in the tank when the tank pressure reaches 500 kPa. Assume air behaves as an ideal gas with constant specific heats $c_v = 0.718 \, \text{kJ/kg} \cdot ^\circ\text{C}$ and $c_p = 1.005 \, \text{kJ/kg} \cdot ^\circ\text{C}$.

*   **Solution:**
    *   Tank is insulated ($Q_{in}=0$). Tank is rigid, so no boundary work ($W_{cv}=0$).
    *   Mass balance: $m_{final} = m_{initial} + m_{in}$
    *   Energy balance for unsteady flow (ignoring KE/PE): $Q_{in} - W_{cv} + m_{in}h_{in} = U_{final} - U_{initial}$
    *   $0 - 0 + m_{in}h_{in} = m_{final}u_{final} - m_{initial}u_{initial}$
    *   For an ideal gas, $h = c_p T$ and $u = c_v T$. Also $Pv = RT$, so $u = \frac{R}{k-1} T$.
    *   $m_{in} c_p T_{in} = m_{final} c_v T_{final} - m_{initial} c_v T_{initial}$
    *   Substitute $m_{in} = m_{final} - m_{initial}$:
    *   $(m_{final} - m_{initial})c_p T_{in} = m_{final} c_v T_{final} - m_{initial} c_v T_{initial}$
    *   $m_{final} c_p T_{in} - m_{initial} c_p T_{in} = m_{final} c_v T_{final} - m_{initial} c_v T_{initial}$
    *   $m_{final}(c_p T_{in} - c_v T_{final}) = m_{initial}(c_p T_{in} - c_v T_{initial})$
    *   From ideal gas law $m = PV/RT$. Let the tank volume be $V_{tank}$.
    *   $m_{initial} = \frac{P_{initial}V_{tank}}{RT_{initial}}$
    *   $m_{final} = \frac{P_{final}V_{tank}}{RT_{final}}$
    *   $\frac{P_{final}V_{tank}}{RT_{final}}(c_p T_{in} - c_v T_{final}) = \frac{P_{initial}V_{tank}}{RT_{initial}}(c_p T_{in} - c_v T_{initial})$
    *   Cancel $V_{tank}/R$:
    *   $\frac{P_{final}}{T_{final}}(c_p T_{in} - c_v T_{final}) = \frac{P_{initial}}{T_{initial}}(c_p T_{in} - c_v T_{initial})$
    *   $\frac{500}{T_{final}}(1.005 \times 298.15 - 0.718 T_{final}) = \frac{100}{288.15}(1.005 \times 298.15 - 0.718 \times 288.15)$
    *   $\frac{500}{T_{final}}(299.65 - 0.718 T_{final}) = \frac{100}{288.15}(299.65 - 206.79)$
    *   $\frac{149825 - 2500 \times 500}{T_{final}} = \frac{100}{288.15}(92.86)$
    *   $\frac{149825 - 250000}{T_{final}} = 32.225$
    *   $\frac{149825}{T_{final}} - 2500 = 32.225$
    *   $\frac{149825}{T_{final}} = 2532.225$
    *   $T_{final} = \frac{149825}{2532.225} \approx 59.16 \, \text{K}$
    *   **Wait, something is wrong. Let's re-evaluate the equation $m_{final}(c_p T_{in} - c_v T_{final}) = m_{initial}(c_p T_{in} - c_v T_{initial})$**
    *   It is known that for filling an evacuated tank with an ideal gas, the final temperature $T_{final}$ is related to $T_{in}$ by: $T_{final} = T_{in} \frac{P_{final}}{P_{initial}} \frac{c_v}{c_p}$? No.
    *   The correct relationship derived from the energy equation for an ideal gas filling an evacuated, insulated tank is:
        $T_{final} = T_{in} \frac{c_p}{c_v} = T_{in} \cdot k$ IF the tank was initially evacuated and no mass was present initially.
    *   When there is initial mass: $\frac{P_{final}}{T_{final}} (c_p T_{in} - c_v T_{final}) = \frac{P_{initial}}{T_{initial}} (c_p T_{in} - c_v T_{initial})$
    *   Let's simplify the energy equation $m_{in}h_{in} = m_{final}u_{final} - m_{initial}u_{initial}$
    *   Using $u = RT/(k-1)$ and $h=RTk/(k-1)$:
        $m_{in} \frac{R T_{in} k}{k-1} = m_{final} \frac{R T_{final}}{k-1} - m_{initial} \frac{R T_{initial}}{k-1}$
    *   $m_{in} T_{in} k = m_{final} T_{final} - m_{initial} T_{initial}$
    *   $(m_{final} - m_{initial}) T_{in} k = m_{final} T_{final} - m_{initial} T_{initial}$
    *   $m_{final} T_{in} k - m_{initial} T_{in} k = m_{final} T_{final} - m_{initial} T_{initial}$
    *   $m_{final}(T_{in} k - T_{final}) = m_{initial}(T_{in} k - T_{initial})$
    *   Substitute $m = PV/RT$:
    *   $\frac{P_{final} V_{tank}}{RT_{final}}(T_{in} k - T_{final}) = \frac{P_{initial} V_{tank}}{RT_{initial}}(T_{in} k - T_{initial})$
    *   $\frac{P_{final}}{T_{final}}(T_{in} k - T_{final}) = \frac{P_{initial}}{T_{initial}}(T_{in} k - T_{initial})$
    *   $\frac{500}{T_{final}}(298.15 \times 1.4 - T_{final}) = \frac{100}{288.15}(298.15 \times 1.4 - 288.15)$
    *   $\frac{500}{T_{final}}(417.41 - T_{final}) = \frac{100}{288.15}(417.41 - 288.15)$
    *   $\frac{208705}{T_{final}} - 500 = \frac{100}{288.15}(129.26)$
    *   $\frac{208705}{T_{final}} - 500 = 44.85$
    *   $\frac{208705}{T_{final}} = 544.85$
    *   $T_{final} = \frac{208705}{544.85} \approx 383.04 \, \text{K}$
    *   $T_{final} \approx 383.04 - 273.15 = 109.89 \, ^\circ\text{C}$

---

This concludes the study notes for Mass and Energy Analysis of Control Volumes. Remember to practice these concepts with varied problems from your textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
