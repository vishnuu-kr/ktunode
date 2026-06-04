---
title: "forms of energy"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 1: Introduction and basic concepts"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f3f"
status: "completed"
scrapedAt: "2026-05-20T17:53:18.221Z"
---
# Engineering Thermodynamics: Module 1 - Introduction and Basic Concepts

## Topic: Forms of Energy

---

### 1. Introduction to Thermodynamics

Thermodynamics is the science that deals with energy and its transformations. It's fundamentally about how energy is transferred and converted from one form to another, and the limitations on these transformations. Understanding the different forms of energy is crucial for analyzing and predicting the behavior of thermodynamic systems.

**Key Concept:** A **thermodynamic system** is a region of space or a quantity of matter set aside for thermodynamic analysis. Everything outside the system is called the **surroundings**. The boundary separating the system from its surroundings is called the **boundary**.

**Course Outcome Alignment:**
*   **CO1:** Understand basic concepts of thermodynamics (Knowledge Level: K1, K2) - *This section lays the foundation for understanding what thermodynamics studies.*

**Textbook References:**
*   Cengel, Boles, & Kanoğlu: Chapter 1, Section 1-1 (Definition and scope of thermodynamics)
*   P.K. Nag: Chapter 1, Section 1.1 (Introduction)

---

### 2. Forms of Energy

Energy exists in numerous forms, and in thermodynamics, we are primarily concerned with those that can be transferred across the boundary of a system. Energy can be broadly categorized into two main types: **stored energy** and **transient energy**.

#### 2.1 Stored Energy (Internal Energy)

Stored energy refers to the energy that a system possesses due to its physical state. This is often referred to as **internal energy** ($U$) and encompasses all the microscopic forms of energy.

**Key Concepts & Definitions:**

*   **Internal Energy ($U$)**: The total energy contained within a thermodynamic system. It is the sum of all microscopic forms of energy.
    *   **Kinetic Energy (Microscopic)**: Energy associated with the random motion of molecules (translational, rotational, vibrational).
    *   **Potential Energy (Microscopic)**: Energy associated with the forces between molecules (intermolecular forces) and atoms (intramolecular forces, chemical bonds).

*   **Sensible Energy**: The energy associated with the temperature of a substance. As temperature increases, the kinetic energy of molecules increases, leading to an increase in sensible energy.
    *   **Example:** Heating water from $20^\circ\text{C}$ to $50^\circ\text{C}$ increases its sensible energy.

*   **Latent Energy**: The energy associated with the phase of a substance. Phase changes (like melting, vaporization, condensation) involve significant energy transfer without a change in temperature.
    *   **Example:** Melting ice at $0^\circ\text{C}$ to water at $0^\circ\text{C}$ requires energy input, which is stored as latent energy in the liquid phase.

*   **Chemical Energy**: Energy stored in chemical bonds within molecules. This energy is released or absorbed during chemical reactions.
    *   **Example:** Burning fuel (like wood or natural gas) releases chemical energy in the form of heat and light.

*   **Nuclear Energy**: Energy stored within the nucleus of an atom, released during nuclear reactions (fission or fusion).
    *   **Example:** Nuclear power plants harness nuclear energy.

**Textbook References:**
*   Cengel, Boles, & Kanoğlu: Chapter 1, Section 1-1 (Forms of energy)
*   P.K. Nag: Chapter 1, Section 1.2 (Energy, Work, and Heat)
*   Sonntag, Borgnakke, & VanWylen: Chapter 2 (Energy and the First Law of Thermodynamics) - *Discusses internal energy and its components.*

**Important Points to Remember:**
*   For most thermodynamic analyses involving gases, chemical and nuclear energies are usually considered constant unless a chemical reaction or nuclear process is occurring.
*   The absolute value of internal energy cannot be determined, but the *change* in internal energy ($\Delta U$) is what matters in thermodynamic calculations.

---

#### 2.2 Transient Energy (Energy Transfer Across the Boundary)

Transient energy refers to energy that crosses the boundary of a system. This energy is not stored within the system but is in transit. In thermodynamics, the two primary forms of transient energy are work and heat.

**Key Concepts & Definitions:**

*   **Work ($W$ or $W_{cv}$ for control volume)**: Energy transfer associated with a force acting through a distance. It's a mechanical form of energy transfer.
    *   **Work done by a system**: Positive ($W > 0$).
    *   **Work done on a system**: Negative ($W < 0$).
    *   **Forms of Work**:
        *   **Shaft Work**: Work done by a rotating shaft (e.g., in a motor or turbine).
        *   **Electrical Work**: Work done by the movement of electric charges.
        *   **Boundary Work (or $PV$ Work)**: Work done when a system boundary moves due to a pressure difference. This is particularly important in fluid systems like pistons in cylinders.
            *   For a quasi-equilibrium process, $W_b = \int_{V_1}^{V_2} P dV$.
        *   **Flow Work (or Displacement Work)**: The work required to push a fluid into or out of a control volume. It's defined as $W_{flow} = PV$. This is often incorporated into the **enthalpy** ($H = U + PV$).

*   **Heat ($Q$ or $Q_{cv}$ for control volume)**: Energy transfer due to a temperature difference between a system and its surroundings. It is energy in transit from a region of higher temperature to a region of lower temperature.
    *   **Heat added to a system**: Positive ($Q > 0$).
    *   **Heat removed from a system**: Negative ($Q < 0$).
    *   **Modes of Heat Transfer**:
        *   **Conduction**: Heat transfer through direct molecular contact.
        *   **Convection**: Heat transfer through the movement of fluids.
        *   **Radiation**: Heat transfer through electromagnetic waves.

**Textbook References:**
*   Cengel, Boles, & Kanoğlu: Chapter 1, Section 1-1 (Forms of energy)
*   P.K. Nag: Chapter 1, Section 1.2 (Energy, Work, and Heat)
*   Moran & Shapiro: Chapter 2 (Energy and the First Law of Thermodynamics) - *Focuses on work and heat as energy transfers.*
*   Sonntag, Borgnakke, & VanWylen: Chapter 2 (Energy and the First Law of Thermodynamics) - *Detailed discussion on work and heat interactions.*

**Important Points to Remember:**
*   Work and heat are **boundary phenomena**; they represent energy crossing the boundary of a system.
*   A system cannot "contain" work or heat; it can only possess energy.
*   The terms "work" and "heat" are only meaningful when referring to energy transfer.

---

### 3. Energy in Transit

In thermodynamics, we often analyze systems in terms of their energy content and how energy is transferred across their boundaries. The most common forms of energy in transit that we will encounter are heat and work.

**Key Concepts & Definitions:**

*   **Energy Balance**: The principle that energy is conserved. For a system undergoing a process, the net change in the total energy of the system is equal to the net energy transfer across the boundary.
    *   **General Energy Balance Equation:**
        $E_{in} - E_{out} = \Delta E_{system}$
        Where:
        *   $E_{in}$ is the total energy entering the system.
        *   $E_{out}$ is the total energy leaving the system.
        *   $\Delta E_{system}$ is the change in the total energy of the system.

*   **Kinetic Energy (Macroscopic)**: Energy possessed by a system due to its motion relative to some reference frame.
    *   $KE = \frac{1}{2} m V^2$, where $m$ is mass and $V$ is velocity.

*   **Potential Energy (Macroscopic)**: Energy possessed by a system due to its elevation in a gravitational field.
    *   $PE = m g z$, where $m$ is mass, $g$ is acceleration due to gravity, and $z$ is elevation.

**Total Energy of a System ($E$)**:
The total energy of a system is the sum of its internal energy ($U$) and its macroscopic kinetic ($KE$) and potential ($PE$) energies.
$E = U + KE + PE$

Therefore, the change in total energy is:
$\Delta E = \Delta U + \Delta KE + \Delta PE$

The energy balance equation for a system can be written as:
$Q_{net,in} - W_{net,out} = \Delta E_{system}$
Where:
*   $Q_{net,in} = Q_{in} - Q_{out}$ is the net heat transfer *into* the system.
*   $W_{net,out} = W_{out} - W_{in}$ is the net work transfer *out of* the system.

**Textbook References:**
*   Cengel, Boles, & Kanoğlu: Chapter 1, Section 1-1 (Forms of energy), Chapter 4 (Energy Analysis of Closed Systems) - *Introduces the concept of energy balance.*
*   P.K. Nag: Chapter 1, Section 1.2 (Energy, Work, and Heat), Chapter 2 (First Law of Thermodynamics) - *Detailed explanation of energy balance and its application.*
*   Moran & Shapiro: Chapter 2 (Energy and the First Law of Thermodynamics)
*   Sonntag, Borgnakke, & VanWylen: Chapter 2 (Energy and the First Law of Thermodynamics)

**Important Points to Remember:**
*   The energy balance principle is a fundamental concept in thermodynamics, directly related to the First Law of Thermodynamics (Conservation of Energy).
*   We typically focus on the *net* heat transfer and *net* work transfer across the system boundary.

---

### 4. Practice Questions and Exercises

**Question 1:**
Identify whether the following are forms of stored energy or transient energy:
a) The energy stored in a battery.
b) The heat transferred from a hot stove to a pan.
c) The energy of a moving car.
d) The chemical energy released when wood burns.
e) The work done by a rotating fan.

**Answer 1:**
a) Stored energy (chemical energy).
b) Transient energy (heat).
c) Stored energy (macroscopic kinetic energy).
d) Stored energy (chemical energy).
e) Transient energy (work).

**Question 2:**
A system gains 50 kJ of heat and does 20 kJ of work during a process. What is the net change in the energy of the system?

**Answer 2:**
Using the energy balance equation: $Q_{net,in} - W_{net,out} = \Delta E_{system}$
$Q_{in} = +50$ kJ
$W_{out} = +20$ kJ
$\Delta E_{system} = 50 \text{ kJ} - 20 \text{ kJ} = 30 \text{ kJ}$
The net change in the energy of the system is +30 kJ.

**Question 3:**
A rigid tank contains steam at a certain state. Heat is transferred to the steam, and the steam does no work. If the internal energy of the steam increases by 100 kJ, how much heat was transferred to the steam?

**Answer 3:**
For a rigid tank (constant volume), boundary work ($PV$ work) is zero. Also, if no other work interactions are specified, we assume $W_{net,out} = 0$.
The energy balance equation simplifies to: $Q_{net,in} = \Delta E_{system}$.
Since no work is done, $\Delta E_{system} = \Delta U_{system}$ (assuming no changes in KE or PE).
So, $Q_{in} = \Delta U_{system} = 100$ kJ.
100 kJ of heat was transferred to the steam.

**Question 4:**
Consider a person holding a heavy object. Classify the different forms of energy involved.

**Answer 4:**
*   **Internal Energy (Stored Energy):** The person's body has internal energy due to the chemical energy in their food, which is converted into mechanical and thermal energy through metabolic processes.
*   **Macroscopic Potential Energy (Stored Energy):** If the object is held above the ground, it possesses potential energy due to its height in the gravitational field.
*   **Work (Transient Energy):** Although the object is held stationary, the person's muscles are doing work at a microscopic level to maintain posture and counteract fatigue. This is often referred to as "isometric muscular work" or maintaining tension. If the person lifts the object, they are doing work against gravity, increasing the object's potential energy.

---

### 5. Learning Outcome Checklist & Course Outcome Alignment

| Learning Outcome | Covered? | Course Outcome Alignment | Knowledge Level | Notes                                                    |
| :--------------- | :------- | :----------------------- | :-------------- | :------------------------------------------------------- |
| Forms of Energy  | Yes      | CO1                      | K1, K2          | Introduced various forms: internal, kinetic, potential, heat, work. |
| Stored Energy    | Yes      | CO1                      | K1, K2          | Detailed the components of internal energy.              |
| Transient Energy | Yes      | CO1                      | K1, K2          | Defined heat and work as energy in transit.              |
| Energy Balance   | Yes      | CO1                      | K1, K2          | Introduced the fundamental principle of energy conservation. |

---

### 6. Key Takeaways

*   Thermodynamics is about energy and its transformations.
*   Energy can be stored within a system (internal energy) or transfer across its boundary (heat and work).
*   Internal energy comprises microscopic kinetic and potential energies.
*   Heat is energy transfer due to temperature difference.
*   Work is energy transfer due to a force acting over a distance.
*   Macroscopic kinetic and potential energies are also forms of stored energy related to the motion and position of the system as a whole.
*   The First Law of Thermodynamics is the principle of conservation of energy, expressed through the energy balance equation.

---

This concludes Module 1, Topic: Forms of Energy. The next topics will build upon these fundamental concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
