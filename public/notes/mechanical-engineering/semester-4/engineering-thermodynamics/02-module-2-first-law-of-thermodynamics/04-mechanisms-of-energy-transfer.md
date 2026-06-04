---
title: "mechanisms of energy transfer"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f47"
status: "completed"
scrapedAt: "2026-05-20T17:53:23.188Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics
## Topic: Mechanisms of Energy Transfer

This module focuses on the First Law of Thermodynamics, a fundamental principle that governs energy conservation. A crucial aspect of this law is understanding how energy is transferred across the boundary of a system. This topic delves into the various mechanisms by which energy can be exchanged between a system and its surroundings.

---

### Learning Outcomes Covered:

*   **Understanding of Energy Transfer Mechanisms:** Grasp the fundamental ways energy can be transferred across system boundaries. (Aligns with CO1, CO2)
*   **Identification of Energy Forms:** Recognize and differentiate between various forms of energy that can be transferred. (Aligns with CO1, CO2)
*   **Work as an Energy Transfer:** Comprehend work as a mode of energy transfer in thermodynamic systems. (Aligns with CO1, CO2)
*   **Heat as an Energy Transfer:** Understand heat as another primary mode of energy transfer. (Aligns with CO1, CO2)
*   **Connection to the First Law:** Relate these energy transfer mechanisms to the formulation of the First Law of Thermodynamics for closed and open systems. (Aligns with CO2, CO3)

---

### Course Outcomes Addressed:

*   **CO1: Understand basic concepts of thermodynamics (Knowledge Level: K1, K2)** - This topic directly addresses understanding fundamental concepts like system, surroundings, and forms of energy transfer.
*   **CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2)** - This topic lays the groundwork for understanding the First Law by detailing how energy enters and leaves a system.
*   **CO3: Conduct first law analysis of open and closed systems (Knowledge Level: K3)** - A thorough understanding of energy transfer mechanisms is essential for applying the First Law to analyze both types of systems.

---

### Key Concepts and Definitions:

*   **System:** A region in space or a quantity of matter chosen for study.
*   **Surroundings:** Everything external to the system.
*   **Boundary:** The real or imaginary surface separating the system from its surroundings.
*   **Energy:** The capacity to do work. In thermodynamics, energy is a property of a system.
*   **Energy Transfer:** The process by which energy crosses the boundary of a system.

---

### 1. Forms of Energy Transfer:

Energy can be transferred across the boundary of a system in two primary forms:

*   **Work (W):** Energy transfer due to a force acting over a distance.
*   **Heat (Q):** Energy transfer due to a temperature difference between the system and its surroundings.

**Important Point:** Both heat and work are forms of energy *in transit*, not stored within the system as properties. They are modes of energy transfer across the system boundary. (Cengel & Boles, Ch. 4)

---

### 2. Heat Transfer (Q):

Heat is energy transferred from a region of higher temperature to a region of lower temperature. It is a spontaneous process driven by the temperature gradient.

**Key Characteristics of Heat Transfer:**

*   **Driven by Temperature Difference:** Heat transfer ceases when thermal equilibrium is reached (i.e., temperatures become equal).
*   **Not a Property:** Heat is not something a system "contains." It is a process of energy exchange.
*   **Sign Convention:**
    *   **Heat added to the system is positive (+Q).**
    *   **Heat removed from the system is negative (-Q).**
    *   This convention is widely adopted (e.g., Cengel & Boles, Nag).

**Mechanisms of Heat Transfer (Briefly touched upon, but important context):**

While the focus of this module is on *how* energy is transferred according to the First Law, understanding the *mechanisms* of heat transfer is crucial for practical applications. These are:

*   **Conduction:** Heat transfer through direct molecular contact. (e.g., heat flowing through a metal rod).
*   **Convection:** Heat transfer by the bulk movement of a fluid (liquid or gas). (e.g., hot air rising).
*   **Radiation:** Heat transfer through electromagnetic waves. (e.g., heat from the sun).

**Reference:** Cengel & Boles, Chapter 11 provides a detailed treatment of these mechanisms.

---

### 3. Work Transfer (W):

Work is the transfer of energy that is *not* due to a temperature difference. It is associated with a force acting over a distance.

**Key Characteristics of Work Transfer:**

*   **Force and Displacement:** Work is done when a force causes a displacement.
*   **Not a Property:** Like heat, work is energy in transit and not a property stored within the system.
*   **Sign Convention:**
    *   **Work done *by* the system is positive (+W).**
    *   **Work done *on* the system is negative (-W).**
    *   This is the most common convention in thermodynamics (e.g., Cengel & Boles, Nag, Moran & Shapiro).

**Types of Work Transfer:**

*   **Boundary Work (or Piston-Cylinder Work):** The most common type of work encountered in closed systems. It occurs when the boundary of the system moves due to pressure forces.
    *   **Formula for Boundary Work:** $W_b = \int_{V_1}^{V_2} P dV$
        *   Where $P$ is the pressure and $dV$ is the infinitesimal change in volume.
    *   **Example:** A gas expanding in a cylinder, pushing a piston outwards. The gas does work on the piston.
    *   **Reference:** Cengel & Boles, Chapter 4; Nag, Chapter 3.

*   **Shaft Work:** Work transmitted by a rotating shaft.
    *   **Formula:** $W_{shaft} = \int_{t_1}^{t_2} \tau \omega dt$
        *   Where $\tau$ is the torque and $\omega$ is the angular velocity.
    *   **Example:** A motor driving a fan or a pump.

*   **Electrical Work:** Work done by the movement of electric charge.
    *   **Formula:** $W_{elec} = \int_{t_1}^{t_2} V I dt$
        *   Where $V$ is the voltage and $I$ is the current.
    *   **Example:** An electric heater or motor.

*   **Spring Work:** Work done when a spring is stretched or compressed.
    *   **Formula:** $W_{spring} = \frac{1}{2} k (x_2^2 - x_1^2)$
        *   Where $k$ is the spring constant and $x$ is the displacement.

*   **Flow Work (or Displacement Work):** Work done by a fluid entering or leaving a control volume (open system). This is a crucial concept for open systems.
    *   **Definition:** The work required to push a fluid into or out of a control volume.
    *   **Formula:** $W_{flow} = P \times V$ (for a unit mass of fluid)
        *   Where $P$ is the pressure and $V$ is the specific volume.
    *   **Reference:** Cengel & Boles, Chapter 6; Nag, Chapter 5.

---

### 4. Energy Transfer in Relation to the First Law:

The First Law of Thermodynamics, also known as the conservation of energy principle, states that energy cannot be created or destroyed, only transformed from one form to another.

**For a Closed System (No Mass Transfer):**

The First Law is expressed as the change in internal energy of the system is equal to the net heat transfer into the system minus the net work transfer out of the system.

*   **Equation (Rate Form):** $\dot{Q}_{net,in} - \dot{W}_{net,out} = \frac{dE_{system}}{dt} = \dot{E}_{in} - \dot{E}_{out}$
    *   $\dot{Q}_{net,in}$: Net rate of heat transfer *into* the system.
    *   $\dot{W}_{net,out}$: Net rate of work transfer *out of* the system.
    *   $E_{system}$: Total energy of the system.
    *   $\dot{E}_{in}$: Rate of energy transfer *into* the system.
    *   $\dot{E}_{out}$: Rate of energy transfer *out of* the system.

*   **Equation (Integral Form):** $Q_{net,in} - W_{net,out} = \Delta E_{system}$
    *   $Q_{net,in}$: Net heat transfer *into* the system.
    *   $W_{net,out}$: Net work transfer *out of* the system.
    *   $\Delta E_{system}$: Change in the total energy of the system.

    **$\Delta E_{system} = \Delta U + \Delta KE + \Delta PE$**
    *   $\Delta U$: Change in internal energy (related to molecular motion).
    *   $\Delta KE$: Change in kinetic energy.
    *   $\Delta PE$: Change in potential energy.

    **For stationary closed systems where kinetic and potential energy changes are negligible:**
    *   $Q_{net,in} - W_{net,out} = \Delta U$
    *   $Q - W = \Delta U$ (Often used when net heat and work are considered)
    *   **Reference:** Cengel & Boles, Chapter 4; Nag, Chapter 3.

**For an Open System (Control Volume, Mass Transfer Allowed):**

The First Law considers the energy transported by mass crossing the boundary in addition to heat and work transfer.

*   **Equation (Rate Form):**
    $\dot{Q}_{net,in} - \dot{W}_{net,out} + \sum_{i} \dot{m}_i e_i - \sum_{j} \dot{m}_j e_j = \frac{dE_{CV}}{dt}$
    *   $\dot{m}_i$: Mass flow rate of stream $i$ entering the control volume.
    *   $e_i$: Specific energy of stream $i$ entering.
    *   $\dot{m}_j$: Mass flow rate of stream $j$ leaving the control volume.
    *   $e_j$: Specific energy of stream $j$ leaving.
    *   $E_{CV}$: Total energy within the control volume.

*   **Specific Energy ($e$):** The total energy per unit mass.
    $e = u + ke + pe = u + \frac{V^2}{2} + gz$
    *   $u$: Specific internal energy.
    *   $V$: Velocity.
    *   $z$: Elevation.

*   **Including Flow Work:** The energy entering or leaving with mass flow includes internal energy, kinetic energy, potential energy, *and* flow work.
    $e_{in} = u_{in} + \frac{V_{in}^2}{2} + gz_{in} + P_{in}v_{in}$
    $e_{out} = u_{out} + \frac{V_{out}^2}{2} + gz_{out} + P_{out}v_{out}$
    Note that $u + Pv$ is the specific **enthalpy (h)**.

*   **Simplified Equation for Steady-Flow Processes:**
    $\dot{Q}_{net,in} - \dot{W}_{net,out} + \sum_{i} \dot{m}_i (h_i + \frac{V_i^2}{2} + gz_i) - \sum_{j} \dot{m}_j (h_j + \frac{V_j^2}{2} + gz_j) = 0$
    *   In many steady-flow applications, the work term $\dot{W}_{net,out}$ includes shaft work and electrical work, but *not* flow work, as flow work is accounted for by the enthalpy term.
    *   **Reference:** Cengel & Boles, Chapter 6; Nag, Chapter 5.

---

### 5. Energy Transfer by Other Means (Less Common in Basic First Law Analysis):

While heat and work are the primary modes, energy can also be transferred via mass. This is explicitly accounted for in open systems (control volumes).

*   **Mass Transfer:** When mass enters or leaves a system, it carries its internal energy, kinetic energy, potential energy, and flow work. This is a significant energy transfer mechanism for open systems.

---

### Important Points to Remember:

*   **Heat and Work are Transient:** They are energy in *transit* across system boundaries, not stored forms of energy.
*   **Sign Conventions are Crucial:** Be consistent with the sign conventions for heat and work. The convention of "+Q in" and "+W out" is standard.
*   **Internal Energy (U):** This is a property of the system, representing the sum of all microscopic forms of energy within the system. Changes in internal energy are directly related to temperature changes for ideal gases.
*   **Enthalpy (h):** Defined as $h = u + Pv$. It is particularly useful for analyzing open systems because it conveniently bundles internal energy and flow work.
*   **Closed vs. Open Systems:** The formulation of the First Law differs significantly based on whether mass transfer is allowed.
*   **Stationary Systems:** For closed systems that are stationary (no change in velocity or elevation), the energy balance simplifies to $Q - W = \Delta U$.

---

### Examples:

**Example 1: Gas Expansion in a Piston-Cylinder (Closed System)**

Consider a gas in a piston-cylinder device. The gas is heated ($Q_{in} = 100$ kJ) and expands, doing $20$ kJ of work on the piston ($W_{out} = 20$ kJ).

*   **System:** The gas.
*   **Boundary:** The piston-cylinder walls.
*   **Energy Transfer:** Heat added to the gas, work done by the gas.
*   **First Law Analysis:**
    $Q_{in} - W_{out} = \Delta U$
    $100 \text{ kJ} - 20 \text{ kJ} = \Delta U$
    $\Delta U = 80 \text{ kJ}$
    This means the internal energy of the gas increased by 80 kJ. (Cengel & Boles, Chapter 4)

**Example 2: Steam Turbine (Open System - Steady Flow)**

Steam enters a turbine at high pressure and temperature and exits as a lower-pressure vapor. The turbine produces shaft work.

*   **System:** The turbine (control volume).
*   **Boundaries:** The turbine casing.
*   **Energy Transfer:**
    *   Heat transfer (often negligible in a well-insulated turbine, $Q_{in} \approx 0$).
    *   Shaft work output ($\dot{W}_{out}$).
    *   Energy carried in by steam (mass flow rate $\dot{m}_1$, specific enthalpy $h_1$).
    *   Energy carried out by steam (mass flow rate $\dot{m}_2$, specific enthalpy $h_2$).
*   **First Law Analysis (Steady Flow, assuming negligible KE and PE changes):**
    $\dot{Q}_{in} - \dot{W}_{out} + \dot{m}_1 h_1 - \dot{m}_2 h_2 = 0$
    Assuming $\dot{Q}_{in} = 0$ and $\dot{m}_1 = \dot{m}_2 = \dot{m}$:
    $\dot{W}_{out} = \dot{m} (h_1 - h_2)$
    This equation shows that the work output from the turbine is directly related to the change in enthalpy of the steam. (Cengel & Boles, Chapter 6)

---

### Practice Questions/Exercises:

1.  **Distinguish between heat and work as modes of energy transfer. What is the fundamental difference that defines them?**
    *   **Answer:** Heat is energy transfer due to a temperature difference, while work is energy transfer due to a force acting over a distance (or any other non-temperature difference driven transfer).

2.  **A resistor heats a fluid in an insulated container. The resistor consumes 200 W of electrical power for 10 seconds. If the fluid has a mass of 0.5 kg and a specific heat of 4.2 kJ/kg°C, what is the temperature rise of the fluid? (Assume negligible KE and PE changes for the fluid).**
    *   **Solution:**
        *   Electrical work done *on* the system (fluid) = Power $\times$ Time
        *   $W_{on} = 200 \text{ W} \times 10 \text{ s} = 2000 \text{ Ws} = 2000 \text{ J} = 2 \text{ kJ}$.
        *   Since it's work done *on* the system, $W_{out} = -2$ kJ.
        *   The container is insulated, so $Q_{in} = 0$.
        *   From the First Law for a closed system: $Q_{in} - W_{out} = \Delta U$.
        *   $0 - (-2 \text{ kJ}) = \Delta U$
        *   $\Delta U = 2 \text{ kJ}$.
        *   For a liquid/incompressible substance, $\Delta U \approx c \Delta T$.
        *   $2 \text{ kJ} = (0.5 \text{ kg}) \times (4.2 \text{ kJ/kg°C}) \times \Delta T$
        *   $\Delta T = \frac{2}{0.5 \times 4.2} = \frac{2}{2.1} \approx 0.952 \text{ °C}$.
    *   **Answer:** The temperature rise of the fluid is approximately 0.952 °C.

3.  **A cooking pot on a stove is heated by the stove burner. Identify the system, surroundings, and the primary mode of energy transfer.**
    *   **Answer:**
        *   **System:** The cooking pot and its contents (e.g., water).
        *   **Surroundings:** The stove burner, the kitchen air, etc.
        *   **Primary Mode of Energy Transfer:** Heat (from the hot burner to the pot).

4.  **Define enthalpy and explain why it is a useful property for analyzing open systems.**
    *   **Answer:** Enthalpy ($h$) is defined as $h = u + Pv$, where $u$ is specific internal energy and $Pv$ is the flow work per unit mass. It is useful because it conveniently accounts for the energy entering or leaving a control volume with the mass flow, combining the internal energy with the energy required to push that mass into or out of the system.

---

This concludes the notes on Mechanisms of Energy Transfer. A solid understanding of these concepts is foundational for applying the First Law of Thermodynamics to analyze various engineering systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
