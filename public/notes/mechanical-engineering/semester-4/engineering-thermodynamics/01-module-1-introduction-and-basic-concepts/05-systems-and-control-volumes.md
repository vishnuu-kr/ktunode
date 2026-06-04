---
title: "systems and control volumes"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 1: Introduction and basic concepts"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f37"
status: "completed"
scrapedAt: "2026-05-20T17:53:12.806Z"
---
# Engineering Thermodynamics: Module 1 - Introduction and Basic Concepts

## Topic: Systems and Control Volumes

This module introduces the fundamental building blocks of thermodynamics: systems and control volumes. Understanding these concepts is crucial for applying thermodynamic principles to analyze various engineering processes and devices.

**Relevant Course Outcomes:**

*   **CO1:** Understand basic concepts of thermodynamics (Knowledge Level: K1, K2) - This topic directly addresses the foundational concepts of thermodynamics.

---

### 1. What is a System?

A **system** is a quantity of matter or a region in space chosen for study. It's the "what" we are interested in analyzing in a thermodynamic process.

**Key Characteristics:**

*   **Defined Boundaries:** A system is separated from its surroundings by a **boundary**. This boundary can be real or imaginary, fixed or movable.
*   **Surroundings:** Everything external to the system is called the **surroundings**.
*   **Universe:** The system and its surroundings together constitute the **universe**.
*   **Interactions:** Systems can interact with their surroundings by exchanging **mass** and **energy**.

**Textbook References:**

*   **Cengel & Boles:** Defines a system as "a quantity of matter or a region in space chosen for study." (Chapter 1)
*   **P.K. Nag:** Emphasizes the "chosen region of interest" and its separation from the surroundings. (Chapter 1)
*   **Moran & Shapiro:** Highlights the importance of clearly defining the system and its boundary. (Chapter 1)

---

### 2. Types of Systems

Systems are classified based on how they interact with their surroundings regarding mass and energy transfer.

#### 2.1. Closed System (Control Mass)

*   **Definition:** A closed system is a system that contains a fixed amount of mass, and no mass can cross its boundary.
*   **Mass Transfer:** No mass enters or leaves the system.
*   **Energy Transfer:** Energy (in the form of heat or work) can cross the boundary.
*   **Boundary:** The boundary of a closed system is typically a surface.

**Examples:**

*   A sealed container of gas being heated or cooled.
*   A piston-cylinder device with a sealed piston, where the gas inside is being compressed or expanded.
*   A kettle of water with a lid on top, where heat is added, but no steam escapes.

**Important Point to Remember:** The mass within a closed system is constant.

#### 2.2. Open System (Control Volume)

*   **Definition:** An open system, also known as a **control volume**, is a region in space or a quantity of matter that has mass crossing its boundary.
*   **Mass Transfer:** Mass can enter and leave the system.
*   **Energy Transfer:** Energy can also cross the boundary, often associated with the mass flow.
*   **Boundary:** The boundary of an open system is called the **control surface**.

**Examples:**

*   A turbine: Steam enters, does work, and exits.
*   A pump: Fluid enters, is pressurized, and exits.
*   A heat exchanger: Two fluids flow through, exchanging heat without mixing.
*   A jet engine: Air enters, fuel is added, combustion occurs, and exhaust gases exit.
*   A boiling pot of water with no lid: Steam (mass) leaves the system.

**Important Point to Remember:** The mass within an open system is not necessarily constant.

#### 2.3. Isolated System

*   **Definition:** An isolated system is a system that does not interact with its surroundings in any way; neither mass nor energy can cross its boundary.
*   **Mass Transfer:** No mass enters or leaves.
*   **Energy Transfer:** No energy enters or leaves (neither heat nor work).
*   **Boundary:** An insulated and impermeable boundary.

**Examples:**

*   A perfectly insulated and sealed thermos flask containing hot water. (In reality, perfect isolation is an idealization).
*   The universe as a whole is often considered an isolated system.

**Important Point to Remember:** Isolated systems are idealizations; real systems usually have some degree of interaction with their surroundings.

**Textbook References:**

*   **Cengel & Boles:** Clearly distinguishes between closed and control volume systems and introduces the concept of isolated systems as an idealization. (Chapter 1)
*   **P.K. Nag:** Provides a detailed explanation of the differences, with emphasis on mass and energy transfer across boundaries. (Chapter 1)
*   **Sonntag, Borgnakke, & VanWylen:** Uses the terms "closed system" and "control mass" interchangeably, and "open system" and "control volume." (Chapter 1)

---

### 3. Control Volumes and Control Surfaces

*   **Control Volume (CV):** A region in space, not necessarily containing a fixed mass, chosen for the study of open systems. The term "control volume" is often used synonymously with "open system."
*   **Control Surface (CS):** The boundary of the control volume. All mass and energy interactions with the surroundings occur across the control surface.

**Key Considerations for Control Volumes:**

*   **Fixed vs. Moving Boundaries:** Control volumes can have fixed or moving boundaries. For example, a pump has a fixed control volume, while a reciprocating compressor can have moving boundaries.
*   **Fixed vs. Deforming Boundaries:** Control volumes can have fixed or deforming boundaries. A cylinder with a piston has deforming boundaries.
*   **Rigid Boundaries:** Control volumes can have rigid boundaries, which do not move or change shape.

**Textbook References:**

*   **Cengel & Boles:** Introduces the concept of control volume and control surface, discussing different types of control volume boundaries. (Chapter 1)
*   **P.K. Nag:** Explains the rationale behind using control volumes for analyzing flow processes, such as in turbomachinery. (Chapter 1)
*   **Moran & Shapiro:** Discusses the advantages of the control volume approach for analyzing devices with mass flow. (Chapter 1)

---

### 4. Properties of Systems

**Properties** are characteristics of a system that are used to describe its state. These are observable and measurable quantities.

*   **Examples:** Pressure (P), Temperature (T), Volume (V), Density ($\rho$), Internal Energy (u), Enthalpy (h), Entropy (s), Specific Volume (v).

**Key Properties of State:**

*   **State:** The condition of a system at any given time, defined by a set of its properties.
*   **Intensive Properties:** Properties that are independent of the mass of the system. They do not depend on how much substance there is.
    *   Examples: Temperature (T), Pressure (P), Density ($\rho$), Specific volume (v), Specific internal energy (u), Specific enthalpy (h), Specific entropy (s).
    *   **Important Point:** Intensive properties can be measured at a point within the system.
*   **Extensive Properties:** Properties that depend on the mass or size of the system. They are additive for subsystems.
    *   Examples: Total Volume (V), Total Internal Energy (U), Total Enthalpy (H), Total Entropy (S), Mass (m).
    *   **Important Point:** Extensive properties are usually denoted by uppercase letters. To make them intensive, they are often expressed per unit mass (specific properties) or per unit mole.

**Specific Properties:**

*   An extensive property per unit mass is called a **specific property**.
*   Example: Specific volume ($v = V/m$), Specific internal energy ($u = U/m$).
*   **Important Point:** Specific properties are intensive properties.

**State Postulate (or Equilibrium Postulate):**

*   The state of a simple compressible system is completely defined by two independent intensive properties.
*   "Simple compressible system" refers to a system where only pressure-volume work is significant.
*   **Independence:** The properties must be independent of each other. For example, for a pure substance (like water), pressure and temperature are generally independent. However, for some substances or under specific conditions, they might not be.

**Textbook References:**

*   **Cengel & Boles:** Provides a thorough explanation of properties, state, intensive and extensive properties, and the state postulate. (Chapter 1)
*   **P.K. Nag:** Defines properties and distinguishes between intensive and extensive properties with clear examples. (Chapter 1)
*   **Moran & Shapiro:** Explains the concept of thermodynamic properties and how they define the state of a system. (Chapter 1)
*   **Sonntag, Borgnakke, & VanWylen:** Discusses the importance of properties in defining the state and introduces the state postulate. (Chapter 1)

---

### 5. Equilibrium

**Equilibrium** is a state of balance where there are no unbalanced potentials or driving forces within the system or between the system and its surroundings. A system in equilibrium is not undergoing any change.

**Types of Equilibrium:**

1.  **Thermal Equilibrium:** When the temperature is uniform throughout the system. There is no net flow of heat within the system or between the system and its surroundings.
2.  **Mechanical Equilibrium:** When there is no change in pressure at any point within the system, and no unbalanced force acting on the system.
3.  **Phase Equilibrium:** When a system exists in multiple phases (e.g., liquid and vapor) and the mass of each phase remains constant over time.
4.  **Chemical Equilibrium:** When the chemical composition of the system remains unchanged over time. No net chemical reactions occur.

**Important Point to Remember:** For a system to be in thermodynamic equilibrium, it must be in thermal, mechanical, and phase (and chemical, if applicable) equilibrium simultaneously.

**Textbook References:**

*   **Cengel & Boles:** Defines equilibrium and its different types. (Chapter 1)
*   **P.K. Nag:** Explains the conditions for thermodynamic equilibrium. (Chapter 1)
*   **Moran & Shapiro:** Discusses the concept of equilibrium as a prerequisite for defining the state of a system. (Chapter 1)

---

### 6. Processes and States

*   **Process:** A transformation of a system from one equilibrium state to another.
*   **Path:** The sequence of states a system passes through during a process.
*   **Quasi-equilibrium Process (Quasistatic Process):** A process that occurs so slowly and so smoothly that the system remains infinitesimally close to an equilibrium state at all times.
    *   **Importance:** Quasi-equilibrium processes are idealized and allow for the use of property relations throughout the process. Most thermodynamic analyses assume quasi-equilibrium processes.
    *   **Textbook Reference (Cengel & Boles):** Defines quasi-equilibrium processes as those that occur very slowly, allowing the system to remain in equilibrium. (Chapter 1)
*   **Type of Processes:**
    *   **Isothermal Process:** Temperature remains constant ($\Delta T = 0$).
    *   **Isobaric Process:** Pressure remains constant ($\Delta P = 0$).
    *   **Isochoric Process (Isometric Process):** Volume remains constant ($\Delta V = 0$).
    *   **Adiabatic Process:** No heat transfer occurs across the boundary ($Q = 0$).
    *   **Isentropic Process:** Entropy remains constant ($\Delta s = 0$). (Introduced later in the course, but the term is relevant).
    *   **Polytropic Process:** A process described by $PV^n = \text{constant}$, where 'n' is a constant. This is a generalization of other processes.

**Textbook References:**

*   **Cengel & Boles:** Defines process, path, and introduces different types of processes. (Chapter 1)
*   **P.K. Nag:** Explains the meaning of process and state, and the significance of quasi-equilibrium processes. (Chapter 1)
*   **Sonntag, Borgnakke, & VanWylen:** Differentiates between processes and paths, and the importance of idealized processes. (Chapter 1)

---

### 7. Properties for Control Volumes

While the basic concepts of properties apply to both closed systems and control volumes, the analysis of control volumes often involves properties related to mass flow.

*   **Specific Flow Energy:** For mass entering or leaving a control volume, it possesses energy due to its motion and pressure. This is often referred to as **flow work** or **flow energy**.
    *   **Flow Work:** $P \times v$ (Pressure times specific volume). This represents the energy required to push the mass into or out of the control volume.
*   **Enthalpy (h):** Enthalpy is defined as $h = u + Pv$. It is a convenient property for analyzing open systems because it includes the internal energy ($u$) and the flow work ($Pv$).
    *   **Total Enthalpy:** $H = U + PV$.
    *   **Specific Enthalpy:** $h = u + Pv$.

**Textbook References:**

*   **Cengel & Boles:** Introduces enthalpy as a combination of internal energy and flow work, crucial for control volume analysis. (Chapter 1, specifically when discussing energy of fluid streams)
*   **P.K. Nag:** Defines enthalpy and its importance in the first law analysis of open systems. (Chapter 1 and 6)
*   **Moran & Shapiro:** Explains the concept of flow work and how enthalpy is used to account for energy transport with mass flow. (Chapter 1)

---

### 8. Practice Questions and Exercises

**Question 1:**

Identify whether the following are closed systems or control volumes:

a)  A sealed can of soup being heated.
b)  A car engine during operation.
c)  A steam turbine.
d)  A gas cylinder with a valve that can be opened.
e)  A swimming pool.

**Answer 1:**

a)  Closed System (mass is fixed, heat can enter)
b)  Control Volume (fuel and air enter, exhaust gases exit, work is produced)
c)  Control Volume (steam enters, work is extracted, steam exits)
d)  Can be analyzed as a closed system when sealed, or a control volume when the valve is open and gas flows out.
e)  Control Volume (water can evaporate or be added, but generally considered a large system with negligible mass transfer unless specified).

**Question 2:**

Distinguish between intensive and extensive properties. Give one example of each.

**Answer 2:**

*   **Intensive Property:** Independent of mass. Example: Temperature, Pressure, Density.
*   **Extensive Property:** Dependent on mass. Example: Volume, Mass, Energy.

**Question 3:**

What are the conditions for a system to be in thermodynamic equilibrium?

**Answer 3:**

For a system to be in thermodynamic equilibrium, it must be in thermal, mechanical, and phase equilibrium simultaneously. If chemical reactions are possible, it must also be in chemical equilibrium.

**Question 4:**

Consider a piston-cylinder device containing steam.

a)  If the piston is locked in place and the system is heated, what type of system is it?
b)  If the piston is free to move, and the system is heated such that the volume increases but the pressure remains constant, what type of system is it?

**Answer 4:**

a)  Closed system (mass is fixed, heat transfer occurs).
b)  This is a closed system with a movable boundary. If the boundary is considered the cylinder walls and the piston face, then no mass crosses it. The process is isobaric.

**Question 5:**

Define enthalpy and explain its significance in thermodynamic analysis, particularly for control volumes.

**Answer 5:**

Enthalpy ($h$) is defined as $h = u + Pv$, where $u$ is specific internal energy and $Pv$ is specific flow work. It is significant because it conveniently accounts for both the internal energy and the energy required to push a fluid into or out of a control volume. This makes it essential for the first law analysis of open systems (control volumes) where mass flow occurs.

---

### 9. Summary and Key Takeaways

*   **System:** A region of interest defined by a boundary.
*   **Surroundings:** Everything outside the system.
*   **Closed System (Control Mass):** Fixed mass, no mass transfer.
*   **Open System (Control Volume):** Mass transfer across boundaries.
*   **Isolated System:** No mass or energy transfer.
*   **Properties:** Characteristics of a system (P, T, V, u, h, s, etc.).
*   **State:** The condition of a system defined by its properties.
*   **Intensive Properties:** Independent of mass (e.g., T, P, $\rho$, v).
*   **Extensive Properties:** Dependent on mass (e.g., V, m, U, H).
*   **Specific Properties:** Extensive properties per unit mass (e.g., v = V/m).
*   **Equilibrium:** A state of balance (thermal, mechanical, phase, chemical).
*   **Process:** A change from one state to another.
*   **Quasi-equilibrium Process:** Slow process where the system remains near equilibrium.
*   **Enthalpy ($h = u + Pv$):** Crucial for analyzing control volumes, combining internal energy and flow work.

---

This concludes the notes for Topic: Systems and Control Volumes from Module 1. Mastering these fundamental concepts is essential for all subsequent analyses in Engineering Thermodynamics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
