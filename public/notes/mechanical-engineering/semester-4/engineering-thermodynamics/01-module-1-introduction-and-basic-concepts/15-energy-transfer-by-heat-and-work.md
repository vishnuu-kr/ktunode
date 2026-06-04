---
title: "energy transfer by heat and work"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 1: Introduction and basic concepts"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f41"
status: "completed"
scrapedAt: "2026-05-20T17:53:19.655Z"
---
# ENGINEERING THERMODYNAMICS: Module 1: Introduction and Basic Concepts

## Topic: Energy Transfer by Heat and Work

This module introduces the fundamental concepts of thermodynamics, focusing on how energy is transferred into or out of a thermodynamic system. Understanding these energy transfer mechanisms is crucial for analyzing and predicting the behavior of systems.

---

### Learning Outcomes:

*   **Define and differentiate between heat and work as forms of energy transfer.** (Aligns with CO1)
*   **Understand the sign conventions for heat and work transfer.** (Aligns with CO1)
*   **Identify and describe various forms of work encountered in thermodynamic systems.** (Aligns with CO1, K2)
*   **Explain the relationship between work, heat, and internal energy for simple thermodynamic processes.** (Aligns with CO1, CO3)
*   **Recognize the limitations of heat and work as exact differentials.** (Aligns with CO1)

---

### Key Concepts and Definitions:

*   **Thermodynamic System:** A quantity of matter or a region in space chosen for study.
    *   **Surroundings:** Everything external to the system.
    *   **Boundary:** The real or imaginary surface that separates the system from its surroundings.
*   **Closed System:** A system where no mass can cross its boundary, but energy can. (Cengel et al., Ch. 1)
*   **Open System (Control Volume):** A system where both mass and energy can cross its boundary. (Cengel et al., Ch. 1)
*   **Isolated System:** A system where neither mass nor energy can cross its boundary. (Cengel et al., Ch. 1)

---

### 1. Energy Transfer by Heat ($Q$)

**Definition:** Heat is the transfer of thermal energy between systems due to a temperature difference. It is energy in transit.

*   **Mechanism:** Heat transfer occurs naturally from a region of higher temperature to a region of lower temperature.
*   **Nature:** Heat is not a property of a system; it is a **process quantity**. It exists only when energy is being transferred.
*   **Sign Convention (Cengel et al., Nag):**
    *   **$Q > 0$:** Heat is transferred *to* the system (heat gain).
    *   **$Q < 0$:** Heat is transferred *from* the system (heat loss).

**Modes of Heat Transfer (Briefly mentioned for context, detailed study in heat transfer courses):**

*   **Conduction:** Heat transfer through direct contact within a material or between materials in direct contact, due to molecular vibrations and collisions.
*   **Convection:** Heat transfer due to the bulk movement of a fluid (liquid or gas), which carries thermal energy with it.
*   **Radiation:** Heat transfer through electromagnetic waves, which can travel through a vacuum.

**Example:**
Consider a hot cup of coffee placed on a table in a room. The coffee loses heat to the surrounding air due to convection and radiation. The air in contact with the cup gains heat through conduction.

---

### 2. Energy Transfer by Work ($W$)

**Definition:** Work is the transfer of energy by mechanical means, typically involving the displacement of a force. It is also energy in transit.

*   **Nature:** Like heat, work is not a property of a system; it is a **process quantity**.
*   **Sign Convention (Cengel et al., Nag):**
    *   **$W > 0$:** Work is done *by* the system on the surroundings (work output).
    *   **$W < 0$:** Work is done *on* the system by the surroundings (work input).

**Forms of Work:**

*   **Boundary Work (or $Pv$ Work):** This is the most common type of work encountered in thermodynamics, especially for systems undergoing volume changes. It occurs when the boundary of a system moves due to pressure forces.
    *   **Description:** If a system expands and pushes against its surroundings, it does work on the surroundings. Conversely, if the surroundings compress the system, work is done on the system.
    *   **Calculation (for a closed system with a moving boundary):**
        $W_b = \int_{V_1}^{V_2} P dV$
        Where:
        *   $W_b$ is the boundary work
        *   $P$ is the pressure
        *   $V_1$ is the initial volume
        *   $V_2$ is the final volume
        *   $dV$ is the infinitesimal change in volume

    *   **Important Note on $W_b$:** The integral $\int P dV$ signifies that work depends on the *path* of the process. This means $W_b$ is not a state function. The amount of work done depends on how the system moves from state 1 to state 2. (Shapiro, Ch. 2)

*   **Shaft Work ($W_{shaft}$):** Work transmitted through a rotating shaft.
    *   **Description:** Think of a motor connected to a fan or a pump. The rotating shaft transfers work.
    *   **Calculation (for a rotating shaft):**
        $W_{shaft} = \int_{1}^{2} \tau \omega dt$ or for a steady rotation, $W_{shaft} = \tau \omega \Delta t$
        Where:
        *   $\tau$ is the torque
        *   $\omega$ is the angular velocity
        *   $dt$ is the infinitesimal time interval
        *   $\Delta t$ is the total time interval

*   **Electrical Work ($W_{elec}$):** Work done by the movement of electric charges.
    *   **Description:** Occurs in systems with electrical circuits, like batteries or resistors.
    *   **Calculation:**
        $W_{elec} = V I \Delta t$
        Where:
        *   $V$ is the voltage difference
        *   $I$ is the electric current
        *   $\Delta t$ is the time interval

*   **Stirring Work ($W_{stir}$):** Work done to stir a fluid in a stationary container.
    *   **Description:** Similar to shaft work but the energy input is usually dissipated as heat due to viscosity.

*   **Moving Boundary Work in Open Systems:** In open systems (control volumes), mass crossing the boundary also involves work transfer.
    *   **Flow Work (or Displacement Work):** This is the work done by the fluid entering the control volume to push the fluid already in the control volume. It's essentially boundary work at the inlet and outlet of the control volume.
        *   **Flow work per unit mass:** $w_{flow} = P v$, where $v$ is the specific volume.
        *   **Total flow work for mass flow:** $\dot{m} P v$ (rate form), where $\dot{m}$ is mass flow rate.
    *   **Total Work in Open Systems:** The total work for an open system is the sum of shaft work, electrical work, and the net flow work across the boundaries.

---

### 3. Relationship Between Heat, Work, and Internal Energy (First Law of Thermodynamics)

The First Law of Thermodynamics is a statement of conservation of energy. For a closed system, the change in internal energy of the system is equal to the net heat transferred to the system minus the net work done by the system.

*   **For a closed system:**
    $\Delta E_{system} = Q_{net} - W_{net}$
    Where:
    *   $\Delta E_{system}$ is the change in the total energy of the system.
    *   $Q_{net}$ is the net heat transfer *to* the system ($Q_{in} - Q_{out}$).
    *   $W_{net}$ is the net work done *by* the system ($W_{out} - W_{in}$).

*   **In terms of internal energy ($U$) for systems where only $Pv$ work is considered and changes in kinetic and potential energy are negligible:**
    $\Delta U = Q - W$ (Cengel et al., Ch. 4, Nag, Ch. 4)

    This equation signifies:
    *   If heat is added to a system ($Q > 0$) and no work is done ($W = 0$), the internal energy increases ($\Delta U > 0$).
    *   If work is done by the system ($W > 0$) and no heat is transferred ($Q = 0$), the internal energy decreases ($\Delta U < 0$).

*   **Rate Form:**
    $\dot{E}_{system} = \dot{Q}_{net} - \dot{W}_{net}$
    Or for internal energy:
    $\frac{dU}{dt} = \dot{Q} - \dot{W}$
    Where the dot indicates the rate.

**Important Point (CO3, K3):** The First Law analysis of closed systems involves accounting for all heat and work interactions to determine the change in the system's internal energy.

---

### 4. Heat and Work as Path Functions

**Definition:** Path functions are quantities whose value depends on the sequence of states through which a system passes, not just the initial and final states.

*   **Heat ($Q$) and Work ($W$) are path functions.** This is a fundamental concept in thermodynamics.
    *   **Why?** The amount of heat transferred and work done depends on *how* a system transitions from one state to another. Different processes connecting the same two states will involve different amounts of heat and work.
*   **Symbolic Representation:**
    *   Instead of $\Delta Q$ and $\Delta W$, we use $Q$ and $W$ to denote the energy transferred during a process.
    *   The differential forms $dQ$ and $dW$ are used, and these differentials are **irreversible** (inexact differentials).
*   **State Functions:** Properties like internal energy ($U$), enthalpy ($H$), temperature ($T$), pressure ($P$), and volume ($V$) are state functions. Their values depend only on the current state of the system, not on the path taken to reach that state. The change in a state function is always $\Delta X = X_{final} - X_{initial}$. (Shapiro, Ch. 2)

**Example:**
Consider a gas in a cylinder.
*   **Process 1:** Expand the gas by heating it while allowing it to push a piston outwards. This involves heat transfer and boundary work.
*   **Process 2:** Expand the gas by rapidly releasing pressure through a valve, allowing it to do work on the atmosphere. This might involve different heat transfer and work interactions.
Both processes might start and end at the same pressure and volume, but the amount of heat and work exchanged will likely be different.

---

### 5. Practice Questions and Exercises

**Question 1 (CO1, K1):**
Define heat and work in the context of thermodynamics. How do they differ from properties of a system?

**Answer:**
Heat is the transfer of thermal energy due to a temperature difference, while work is the transfer of energy by mechanical or electrical means. Both heat and work are **energy in transit** and are **process quantities**, meaning they describe the energy exchanged during a process and are not properties that a system possesses at a given state. Properties are characteristic of the state of the system itself.

**Question 2 (CO1, K2):**
State the sign conventions for heat and work transfer to a system.

**Answer:**
*   **Heat ($Q$):**
    *   $Q > 0$ when heat is transferred *to* the system.
    *   $Q < 0$ when heat is transferred *from* the system.
*   **Work ($W$):**
    *   $W > 0$ when work is done *by* the system on the surroundings.
    *   $W < 0$ when work is done *on* the system by the surroundings.

**Question 3 (CO1, K3):**
A gas in a cylinder is heated and expands, pushing a piston outward. If 50 kJ of heat is supplied to the gas and the gas does 20 kJ of work on the piston, what is the change in the internal energy of the gas?

**Answer:**
Using the First Law for a closed system: $\Delta U = Q - W$
Given: $Q = +50$ kJ (heat supplied to the system)
Given: $W = +20$ kJ (work done by the system)

$\Delta U = 50 \text{ kJ} - 20 \text{ kJ} = 30 \text{ kJ}$
The change in the internal energy of the gas is 30 kJ.

**Question 4 (CO1, K2):**
List at least three different forms of work that can be transferred across the boundary of a thermodynamic system.

**Answer:**
1.  **Boundary Work (Pv Work):** Work associated with the expansion or compression of a system's boundary.
2.  **Shaft Work:** Work transmitted by a rotating shaft.
3.  **Electrical Work:** Work done by the movement of electric charges.
    (Other valid answers include stirring work, spring work, etc.)

**Question 5 (CO1, K3):**
Consider a system that undergoes a process from state 1 to state 2. Is the amount of work done by the system the same for all possible processes connecting state 1 and state 2? Justify your answer.

**Answer:**
No, the amount of work done by the system is generally **not** the same for all possible processes connecting state 1 and state 2. Work is a **path function**. The amount of work done depends on the specific path taken during the process, which is determined by how the system's state variables (like pressure and volume) change during the process. This is mathematically represented by the integral $\int P dV$ for boundary work. Different paths will result in different values for this integral.

---

### 6. Important Points to Remember:

*   **Heat ($Q$) and Work ($W$) are energy in transit, not properties.**
*   **Sign Convention is crucial:** Heat *to* system is positive, work *by* system is positive.
*   **$Q$ and $W$ are path functions.** Their values depend on the process, not just the initial and final states.
*   **The First Law of Thermodynamics ($\Delta U = Q - W$) applies to closed systems.** It's a statement of energy conservation.
*   **Boundary work ($\int P dV$) is a fundamental mode of work transfer** for systems with changing volumes.
*   **Open systems have additional work considerations:** flow work and net work transferred via shafts or electricity.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. References and Textbook Content Integration:

*   **Cengel et al. (Chapter 1 & 4):** Provides foundational definitions of systems, surroundings, boundaries, and introduces the First Law for closed systems, emphasizing heat and work as forms of energy transfer.
*   **Nag (Chapter 1 & 4):** Similar to Cengel, this text covers basic concepts, energy interactions, and the First Law, with a focus on the difference between heat and work and their sign conventions.
*   **Shapiro (Chapter 2):** Elaborates on the concepts of state and path functions, providing a rigorous mathematical basis for why heat and work are path-dependent.
*   **Sonntag, Borgnakke, VanWylen (Chapter 2 & 3):** These chapters discuss energy, work, and heat transfer, often presenting work in terms of $\int P dV$ and discussing different types of work.

---

### 8. Alignment with Course Outcomes:

*   **CO1: Understand basic concepts of thermodynamics (K1, K2):** This entire topic directly addresses CO1 by defining systems, energy transfer forms (heat and work), and their fundamental characteristics. Questions 1, 2, and 4 assess K1 and K2 knowledge levels.
*   **CO3: Conduct first law analysis of open and closed systems (K3):** Question 3 applies the First Law to a closed system to calculate the change in internal energy, directly aligning with CO3 at a K3 (application) level. Understanding heat and work is a prerequisite for First Law analysis.

---