---
title: "state and equilibrium"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 1: Introduction and basic concepts"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f3a"
status: "completed"
scrapedAt: "2026-05-20T17:53:14.875Z"
---
# Engineering Thermodynamics: Module 1 - Introduction and Basic Concepts
## Topic: State and Equilibrium

This module introduces the fundamental building blocks of thermodynamics, focusing on understanding what a system is and how to describe its condition. We will delve into the concepts of state and equilibrium, which are crucial for analyzing any thermodynamic process.

---

### 1. Introduction to Thermodynamics

**Definition of Thermodynamics:**
Thermodynamics is the science that deals with energy and its transformations. It is concerned with the relationships between heat, work, and the properties of matter. (Cengel & Boles, p. 3)

**Key Areas of Study:**
*   Energy transfer (heat and work)
*   Properties of substances
*   Conversion of energy from one form to another
*   Limitations on these conversions

**Relevance to Engineering:**
Thermodynamics is fundamental to the design and analysis of a vast range of engineering systems, including:
*   Power generation (power plants, engines)
*   Refrigeration and air conditioning systems
*   Chemical processes
*   Materials science
*   Aerospace and automotive engineering

---

### 2. Systems and Surroundings

Before discussing state and equilibrium, we must define what we are analyzing.

*   **System:** A quantity of matter or a region in space chosen for study. It is what we are interested in analyzing. (Cengel & Boles, p. 4)
    *   **Example:** The gas inside a piston-cylinder assembly, a power plant boiler.

*   **Surroundings:** Everything external to the system. (Cengel & Boles, p. 4)
    *   **Example:** The atmosphere surrounding the piston-cylinder, the cooling water for the boiler.

*   **Boundary:** The real or imaginary surface that separates the system from its surroundings. (Cengel & Boles, p. 4)
    *   **Example:** The cylinder walls, the piston face.

**Types of Systems:**
1.  **Closed System (Control Mass):** A system that does not exchange any mass with its surroundings. Energy (heat and work) can be exchanged across the boundary. (Cengel & Boles, p. 5)
    *   **Example:** A sealed container of gas being heated.
2.  **Open System (Control Volume):** A system that exchanges both mass and energy with its surroundings. (Cengel & Boles, p. 5)
    *   **Example:** A turbine where steam flows in and out, a pump.
3.  **Isolated System:** A system that exchanges neither mass nor energy with its surroundings. This is an idealization. (Cengel & Boles, p. 5)
    *   **Example:** A perfectly insulated, sealed container.

---

### 3. Properties of a System

**Definition of Property:**
A property is a characteristic or attribute of a system that can be observed, measured, and expressed in numerical value. Properties are used to describe the state of a system. (Cengel & Boles, p. 10)
*   Properties are point functions, meaning their values depend only on the current state of the system, not on the path taken to reach that state. (Nag, p. 8)

**Examples of Properties:**
*   **Intensive Properties:** Properties that are independent of the mass of the system. They do not change when a system is divided. (Cengel & Boles, p. 10)
    *   **Examples:** Temperature (T), Pressure (P), Density ($\rho$), Specific volume (v), Specific internal energy (u), Specific enthalpy (h), Specific entropy (s), Specific heat (c).
*   **Extensive Properties:** Properties that depend on the size or mass of the system. They change when a system is divided. (Cengel & Boles, p. 10)
    *   **Examples:** Mass (m), Volume (V), Internal energy (U), Enthalpy (H), Entropy (S).
    *   **Note:** Extensive properties can be made intensive by dividing them by mass, resulting in **specific properties** (e.g., specific volume $v = V/m$).

---

### 4. State of a System

**Definition of State:**
The state of a system is a complete description of the system at a particular instant in time. It is a collection of all the properties that define the system. (Cengel & Boles, p. 10)
*   If any property of the system changes, the state of the system changes. (Cengel & Boles, p. 10)

**State Postulate:**
The state of a simple compressible system is completely determined by two independent intensive properties. (Cengel & Boles, p. 11)
*   **Simple Compressible System:** A system in which the only significant work interaction is due to pressure-volume change.
*   **Independent Property:** A property whose value can be changed without changing the value of other independent properties.
    *   **Example:** For steam, if we know the temperature and pressure, and they are independent, we can determine the state. However, if we know the temperature and specific volume, and they are independent, we can also determine the state.

---

### 5. Equilibrium

**Definition of Equilibrium:**
A system is in equilibrium when it has no tendency to change its state over time. In an equilibrium state, all properties of the system are uniform and constant. (Cengel & Boles, p. 12)

**Types of Equilibrium:**
For a system to be in thermodynamic equilibrium, it must satisfy three conditions:

1.  **Thermal Equilibrium:**
    *   The system is in thermal equilibrium if there is no temperature difference within the system or between the system and its surroundings. All parts of the system are at the same temperature. (Cengel & Boles, p. 12)
    *   **Example:** A metal block at uniform temperature. If it's in contact with a colder object, it's not in thermal equilibrium with its surroundings.

2.  **Mechanical Equilibrium:**
    *   The system is in mechanical equilibrium if there are no unbalanced forces acting on it. This means that pressure throughout the system is uniform, or varies in a predictable way (e.g., due to gravity), and there are no unbalanced forces across boundaries. (Cengel & Boles, p. 12)
    *   **Example:** A gas in a cylinder with a piston. If the piston is free to move, it will adjust until the pressure inside balances the external pressure and any other forces (like spring force).

3.  **Chemical Equilibrium:**
    *   The system is in chemical equilibrium if its chemical composition does not change with time. There is no net chemical reaction occurring, or the rates of forward and reverse reactions are equal. (Cengel & Boles, p. 12)
    *   **Example:** A mixture of hydrogen and nitrogen that has reached equilibrium in a reversible reaction to form ammonia.

**Phase Equilibrium:**
*   A system is in phase equilibrium if it involves more than one phase and there is no net change in the amount of each phase over time. (Cengel & Boles, p. 13)
    *   **Example:** Liquid water in equilibrium with its vapor in a closed container at a given temperature and pressure. The rate of evaporation equals the rate of condensation.

**Thermodynamic Equilibrium:**
A system is in **thermodynamic equilibrium** when it is simultaneously in thermal, mechanical, and chemical (and phase) equilibrium. (Cengel & Boles, p. 12)

**Important Point:** A system must be in equilibrium to define its state. The properties of a system in equilibrium are well-defined and measurable.

---

### 6. Processes and Cycles

**Definition of Process:**
A process is the transformation of a system from one equilibrium state to another. (Cengel & Boles, p. 14)
*   If the initial and final states are the same, it is a **cycle**.

**Types of Processes:**
*   **Quasi-equilibrium Process (Quasistatic Process):** A process that proceeds so slowly and in such a manner that the system remains infinitesimally close to an equilibrium state at all times. This allows us to define the properties of the system at each intermediate step. (Cengel & Boles, p. 15)
    *   Quasi-equilibrium processes are idealizations, but they are very useful for analysis and understanding how thermodynamic relationships are derived.
    *   **Example:** Slow compression of a gas in a cylinder where the piston moves very slowly, allowing the gas pressure and temperature to remain uniform.
*   **Non-quasi-equilibrium Process:** A process that proceeds rapidly and involves finite gradients in properties (e.g., temperature, pressure) within the system. These processes cannot be analyzed by simply specifying the initial and final states as properties might not be well-defined during the process. (Cengel & Boles, p. 15)
    *   **Example:** Sudden expansion of a gas into a vacuum.

**Path of a Process:**
The sequence of states that a system passes through during a process is called the path of the process. (Cengel & Boles, p. 14)
*   Properties are point functions, but the changes in certain quantities (like heat and work) depend on the path taken.

---

### 7. State Variables and Equation of State

*   **State Variables:** These are properties that define the state of a system. For a simple compressible substance, commonly used state variables are Pressure (P), Temperature (T), and Specific Volume (v). (Nag, p. 9)

*   **Equation of State:** An equation that relates the properties of a substance in equilibrium. For many substances, pressure, specific volume, and temperature are related by an equation of state of the form:
    $$P = f(T, v)$$
    or
    $$v = g(T, P)$$
    or
    $$T = h(P, v)$$
    (Cengel & Boles, p. 11)

**Examples of Equations of State:**

1.  **Ideal Gas Equation of State:**
    *   This is a good approximation for many gases at low pressures and high temperatures.
    *   It is expressed as: $PV = nRT$ or $PV = mRT$.
    *   Where:
        *   $P$ is pressure
        *   $V$ is volume
        *   $n$ is the number of moles
        *   $m$ is the mass
        *   $R$ is the universal gas constant ($8.314 \text{ J/mol} \cdot \text{K}$)
        *   $R_u$ is the characteristic gas constant ($R/M$, where $M$ is molar mass)
        *   $T$ is absolute temperature (Kelvin or Rankine)
    *   In terms of specific volume ($v = V/m$): $Pv = RT$. (Cengel & Boles, p. 31)

2.  **Real Gas Equations of State:**
    *   For more accurate representation, especially at higher pressures and lower temperatures, real gas equations are used.
    *   **Van der Waals Equation:** $(P + \frac{a}{v^2})(v-b) = RT$. This equation accounts for intermolecular forces and the finite volume of molecules. (Cengel & Boles, p. 38)
    *   **Other equations** like the Redlich-Kwong equation and Benedict-Webb-Rubin equation are also used.

**Phase Change and State:**
*   For pure substances, the relationship between properties can be complex, especially during phase changes (e.g., boiling water). (Cengel & Boles, p. 20)
*   During phase change (e.g., boiling at constant pressure), temperature remains constant, but specific volume changes significantly. This means temperature alone is not sufficient to define the state during phase change.
*   **Saturated Liquid:** A liquid that is about to vaporize.
*   **Saturated Vapor:** A vapor that is about to condense.
*   **Saturated Liquid-Vapor Mixture:** When both saturated liquid and saturated vapor are present.
    *   In this case, we often use **quality (x)**, the ratio of the mass of vapor to the total mass of the mixture ($x = m_g / m_{total}$), in conjunction with another property (like temperature or pressure) to define the state. (Cengel & Boles, p. 22)

---

### 8. Importance of State and Equilibrium in Thermodynamics

*   **Defining System Conditions:** State and equilibrium are fundamental to describing the condition of a thermodynamic system at any given time.
*   **Predicting Behavior:** Understanding equilibrium allows us to predict whether a system will change or remain constant.
*   **Analyzing Processes:** By defining initial and final states, we can analyze the changes in system properties during a process. Quasi-equilibrium processes are particularly important for deriving thermodynamic relationships.
*   **Foundation for Laws:** The laws of thermodynamics are typically stated for systems in equilibrium or undergoing reversible (quasi-equilibrium) processes.

---

### 9. Practice Questions and Exercises

**Question 1:**
Define the following terms: system, surroundings, boundary, intensive property, extensive property. (CO1, K1)

**Answer 1:**
*   **System:** A quantity of matter or a region in space chosen for study.
*   **Surroundings:** Everything external to the system.
*   **Boundary:** The real or imaginary surface that separates the system from its surroundings.
*   **Intensive Property:** A property independent of the mass of the system (e.g., temperature, pressure).
*   **Extensive Property:** A property dependent on the mass of the system (e.g., mass, volume).

**Question 2:**
A closed container filled with steam is being heated. Is this a closed system or an open system? Explain why. (CO1, K2)

**Answer 2:**
This is a **closed system** because the container is described as "closed," implying that no mass can enter or leave the system. Energy (heat) is being added to the steam, which is allowed in a closed system.

**Question 3:**
State the conditions required for a system to be in thermodynamic equilibrium. (CO1, K2)

**Answer 3:**
A system is in thermodynamic equilibrium if it is simultaneously in:
1.  **Thermal Equilibrium:** Uniform temperature throughout.
2.  **Mechanical Equilibrium:** No unbalanced forces; uniform pressure or predictable pressure variation.
3.  **Chemical Equilibrium:** No net change in chemical composition.
4.  **Phase Equilibrium:** No net change in the amount of each phase present.

**Question 4:**
What is the state postulate for a simple compressible system? (CO1, K2)

**Answer 4:**
The state of a simple compressible system is completely determined by two independent intensive properties.

**Question 5:**
A gas in a cylinder with a piston is undergoing a rapid compression. Would this likely be a quasi-equilibrium process? Explain. (CO1, K2)

**Answer 5:**
No, this would **not** likely be a quasi-equilibrium process. Rapid compression implies that the process is not occurring infinitesimally slowly. This rapid change would likely lead to non-uniformities in pressure and temperature within the gas, meaning the system is not infinitesimally close to an equilibrium state at each step.

**Question 6:**
Consider a sealed, insulated container containing liquid water and water vapor in equilibrium.
a) Is this system isolated, closed, or open?
b) Is this system in thermal, mechanical, and chemical equilibrium? Explain your reasoning. (CO1, K2)

**Answer 6:**
a) This is a **closed system**. The container is sealed, so no mass is exchanged. It is not necessarily isolated because heat could potentially be exchanged with the surroundings if the insulation is not perfect.
b)
*   **Thermal Equilibrium:** Yes, if the temperature is uniform throughout the water and vapor phases.
*   **Mechanical Equilibrium:** Yes, if the pressure is uniform throughout the phases and there are no unbalanced forces (e.g., the piston is not moving).
*   **Chemical Equilibrium:** Yes, if the rate of evaporation equals the rate of condensation. There is no net change in the amount of liquid or vapor.
*   **Phase Equilibrium:** Yes, as described above, the rates of phase transfer are balanced.
If all these conditions are met, the system is in **thermodynamic equilibrium**.

---

### 10. Important Points to Remember

*   **Thermodynamics is about energy and its transformations.**
*   **The definition of a system, surroundings, and boundary is crucial.**
*   **Understand the difference between closed, open, and isolated systems.**
*   **Properties are characteristics that describe the state of a system.**
*   **Intensive properties are independent of mass; extensive properties depend on mass.**
*   **Specific properties are extensive properties divided by mass, making them intensive.**
*   **The state is a complete description of a system at a given time.**
*   **Equilibrium is a state of no tendency to change.**
*   **For thermodynamic equilibrium, thermal, mechanical, and chemical equilibrium must all be present.**
*   **The state postulate simplifies defining the state of simple systems.**
*   **Quasi-equilibrium processes are idealized, slow processes that maintain equilibrium.**
*   **Equations of state relate P, T, and v.**
*   **The ideal gas equation is a simplified model for gas behavior.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References

*   Cengel, Yunus A., Michael A. Boles, and Mehmet Kanoğlu. *Thermodynamics: An Engineering Approach*. McGraw-hill, 2011.
*   Nag, P.K. *Engineering Thermodynamics*. McGraw-Hill Education, 6th Edition, 2017.
*   Moran J. Shapiro N. M. *Fundamentals of Engineering Thermodynamics*. Wiley, 2006.
*   Sonntag, Richard E., Claus Borgnakke, Gordon J. VanWylen. *Fundamentals of Thermodynamics*. Wiley, 8th Edition, 2014.
*   Ansermet, Jean-Philippe, Sylvain D. Brechet. *Thermodynamics: Principles and Applications*. Cambridge University Press, 1st Edition, 2019.

---