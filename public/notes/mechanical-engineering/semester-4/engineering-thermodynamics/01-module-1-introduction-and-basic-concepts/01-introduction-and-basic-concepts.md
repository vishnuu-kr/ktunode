---
title: "Introduction and basic concepts"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 1: Introduction and basic concepts"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f33"
status: "completed"
scrapedAt: "2026-05-20T17:53:10.016Z"
---
# Engineering Thermodynamics: Module 1 - Introduction and Basic Concepts

This module introduces the fundamental principles and terminology of thermodynamics, laying the groundwork for understanding energy transformations and their applications.

## 1.1 What is Thermodynamics?

Thermodynamics is the science of energy, its transformations, and its relationship with matter. It deals with the conversion of heat and work into different forms of energy and the feasibility of such conversions.

*   **Key Concept:** Energy is a fundamental property of systems that can exist in various forms (heat, work, kinetic, potential, chemical, etc.) and can be transferred or transformed.
*   **Focus:** Thermodynamics primarily focuses on the macroscopic behavior of systems, looking at bulk properties rather than the behavior of individual molecules.
*   **Applications:** Thermodynamics is crucial in designing and analyzing power plants, engines, refrigeration systems, chemical processes, and understanding biological systems.

**Reference:** Cengel & Boles, Chapter 1; P.K. Nag, Chapter 1.

## 1.2 Macroscopic vs. Microscopic Approaches

Thermodynamics can be studied using two approaches:

*   **Macroscopic Approach:**
    *   Deals with bulk properties of matter (e.g., pressure, temperature, volume, density) that can be measured directly without considering the molecular structure.
    *   Relies on concepts like thermodynamic equilibrium and state.
    *   This is the **classical thermodynamics** approach.
    *   **Example:** Measuring the pressure of a gas in a container with a manometer.

*   **Microscopic Approach:**
    *   Deals with the behavior of matter at the molecular level, considering the motion and interactions of individual atoms and molecules.
    *   Relies on statistical methods and probability.
    *   This is the **statistical thermodynamics** approach.
    *   **Example:** Understanding the pressure of a gas as the result of molecular collisions with the container walls.

**Important Point:** For most engineering applications, the macroscopic approach is sufficient and easier to use. The microscopic approach provides a deeper understanding of the underlying physical mechanisms.

**Reference:** Cengel & Boles, Chapter 1; P.K. Nag, Chapter 1.

---

## 1.3 Thermodynamic System, Surroundings, and Boundary

These are fundamental terms used to define the scope of a thermodynamic analysis.

*   **System:**
    *   A quantity of matter or a region in space chosen for study.
    *   It's what we are interested in analyzing.
    *   **Example:** A gas in a cylinder, a turbine, a power plant.

*   **Surroundings:**
    *   Everything outside the system.
    *   The environment with which the system can interact.

*   **Boundary:**
    *   The real or imaginary surface that separates the system from its surroundings.
    *   The boundary can be:
        *   **Rigid:** Does not move or deform.
        *   **Flexible:** Can move or deform.
        *   **Adiabatic:** No heat transfer across it.
        *   **Diathermal:** Allows heat transfer across it.
        *   **Permeable:** Allows mass transfer across it.
        *   **Impermeable:** Does not allow mass transfer across it.

**Reference:** Cengel & Boles, Chapter 1; P.K. Nag, Chapter 1.

---

## 1.4 Types of Systems

Systems are classified based on their interaction with the surroundings:

*   **Closed System (Control Mass):**
    *   A fixed amount of mass.
    *   Energy can cross the boundary, but **mass cannot**.
    *   The boundary is impermeable.
    *   **Example:** A sealed container of gas, a piston-cylinder assembly without fluid leakage.

*   **Open System (Control Volume):**
    *   A region in space through which mass and energy can cross the boundary.
    *   The boundary is called a **control surface**.
    *   **Example:** A turbine, a pump, a boiler, a jet engine, a room with airflow.

*   **Isolated System:**
    *   No interaction with the surroundings in terms of both mass and energy.
    *   Both the boundary and the system itself are isolated.
    *   **Example:** An insulated rigid tank that does not interact with its surroundings (a theoretical idealization).

**Reference:** Cengel & Boles, Chapter 1; P.K. Nag, Chapter 1.

---

## 1.5 Properties of a System

*   **Property:**
    *   A characteristic or attribute of a system that can be observed or measured.
    *   Properties define the state of the system.
    *   They are **state functions**, meaning their value depends only on the current state of the system, not on the process or history of how the system reached that state.
    *   **Examples:** Pressure ($P$), Temperature ($T$), Volume ($V$), Mass ($m$), Density ($\rho$), Internal Energy ($U$), Enthalpy ($H$), Entropy ($S$), Specific Volume ($v = V/m$).

*   **State:**
    *   A condition of a system described by its properties.
    *   A system is in a given state when all its properties have fixed values.

*   **Process:**
    *   A transformation from one state to another.
    *   A system undergoes a process when its properties change.

*   **Path:**
    *   The sequence of states through which a system passes during a process.

*   **Cycle:**
    *   A process that returns a system to its initial state.

**Reference:** Cengel & Boles, Chapter 1; P.K. Nag, Chapter 1.

---

## 1.6 State and Equilibrium

*   **Equilibrium:**
    *   A state of balance where no significant change occurs in the system as long as it remains isolated from the surroundings.
    *   For a system to be in thermodynamic equilibrium, it must satisfy three conditions:
        *   **Thermal Equilibrium:** Uniform temperature throughout the system. No net heat flow.
        *   **Mechanical Equilibrium:** No unbalanced forces within the system or between the system and its surroundings. Pressure is uniform or changes in a predictable way.
        *   **Phase Equilibrium:** If a system involves multiple phases (e.g., liquid and vapor), the mass of each phase remains constant, meaning no net phase transformation.
        *   **Chemical Equilibrium:** The chemical composition of the system does not change with time.

*   **State Postulate:**
    *   The state of a simple compressible system is completely defined by two independent intensive properties.
    *   **Intensive Property:** Property that is independent of the mass of the system (e.g., temperature, pressure, density).
    *   **Extensive Property:** Property whose value depends on the size or mass of the system (e.g., mass, volume, energy). Extensive properties per unit mass or mole are intensive.

**Reference:** Cengel & Boles, Chapter 1; P.K. Nag, Chapter 1.

---

## 1.7 Pure Substances and Property Tables

*   **Pure Substance:**
    *   A substance that is homogeneous and has a constant chemical composition.
    *   It can exist in multiple phases (solid, liquid, vapor), but the chemical composition remains the same.
    *   **Examples:** Water ($H_2O$), Nitrogen ($N_2$), Ammonia ($NH_3$), Refrigerant-134a.
    *   **Non-examples:** Air (a mixture of gases), smoke.

*   **Property Tables:**
    *   Tabulated data that provide values of thermodynamic properties of pure substances at various conditions.
    *   These tables are essential for solving thermodynamic problems and are typically based on experimental data.
    *   Commonly found properties include:
        *   Temperature ($T$)
        *   Pressure ($P$)
        *   Specific volume ($v$)
        *   Internal energy ($u$)
        *   Enthalpy ($h$)
        *   Entropy ($s$)
        *   Specific heat ($c_p$, $c_v$)

    *   **Phases of Pure Substances:**
        *   **Compressed Liquid:** Liquid at a pressure higher than its saturation pressure at that temperature.
        *   **Saturated Liquid:** Liquid at the boiling point, ready to vaporize.
        *   **Saturated Vapor:** Vapor at the condensation point, ready to condense.
        *   **Saturated Liquid-Vapor Mixture:** Both liquid and vapor phases exist in equilibrium. Characterized by quality ($x$).
        *   **Superheated Vapor:** Vapor at a temperature higher than its saturation temperature at that pressure.

    *   **Quality ($x$):**
        *   Defined only for saturated mixtures.
        *   It is the ratio of the mass of vapor to the total mass of the mixture.
        *   $x = m_{vapor} / m_{total}$
        *   $0 \leq x \leq 1$.
        *   $x=0$: Saturated liquid.
        *   $x=1$: Saturated vapor.

    *   **Property Relations for Saturated Mixtures:**
        *   Specific volume: $v = v_f + x v_{fg} = v_f + x (v_g - v_f)$
        *   Internal energy: $u = u_f + x u_{fg} = u_f + x (u_g - u_f)$
        *   Enthalpy: $h = h_f + x h_{fg} = h_f + x (h_g - h_f)$
        *   Entropy: $s = s_f + x s_{fg} = s_f + x (s_g - s_f)$
        *   Where $f$ denotes saturated liquid, $g$ denotes saturated vapor, and $fg$ denotes the difference ($g-f$).

    *   **Property Relations for Superheated Vapor and Compressed Liquid:**
        *   These are generally found directly from tables or by interpolation.
        *   For compressed liquids, properties are often approximated using saturated liquid values at the same temperature, especially if the pressure is not excessively high. $u \approx u_f(T)$, $h \approx h_f(T)$.

**Reference:** Cengel & Boles, Chapter 3; P.K. Nag, Chapter 2.
**Course Outcomes Addressed:** CO5 (Determine the properties of pure substances).
**Knowledge Level:** K2 (Understand), K3 (Apply).

---

## 1.8 Specific Heat

*   **Specific Heat:**
    *   The amount of heat required to raise the temperature of a unit mass of a substance by one degree Celsius (or Kelvin).
    *   It is a measure of a substance's ability to store thermal energy.

*   **Specific Heat at Constant Volume ($c_v$):**
    *   The heat transfer required to raise the temperature of a unit mass by one degree at constant volume.
    *   $c_v = \frac{1}{m} \left( \frac{\partial Q}{\partial T} \right)_v$

*   **Specific Heat at Constant Pressure ($c_p$):**
    *   The heat transfer required to raise the temperature of a unit mass by one degree at constant pressure.
    *   $c_p = \frac{1}{m} \left( \frac{\partial Q}{\partial T} \right)_p$

**Important Points:**
*   For solids and liquids, $c_p$ and $c_v$ are nearly identical because the volume change due to pressure is negligible.
*   For gases, $c_p > c_v$ because additional energy is required to perform work due to expansion at constant pressure.
*   Specific heats are generally functions of temperature.

**Reference:** Cengel & Boles, Chapter 1; P.K. Nag, Chapter 1 & 2.
**Course Outcomes Addressed:** CO2 (Understand the laws of thermodynamics - implicitly through energy balance), CO5 (Determine the properties of pure substances - specific heats).
**Knowledge Level:** K1 (Remember), K2 (Understand).

---

## 1.9 Property Diagrams

*   **Property Diagrams:** Visual representations of the relationship between thermodynamic properties. They are invaluable for visualizing processes and understanding the behavior of substances.

*   **Common Diagrams:**
    *   **T-v Diagram (Temperature-Specific Volume):**
        *   Shows the relationship between temperature and specific volume.
        *   Illustrates the phases of a pure substance.
        *   Lines of constant pressure are horizontal in the two-phase region.
        *   The critical point is the termination of the liquid-vapor dome.

    *   **P-v Diagram (Pressure-Specific Volume):**
        *   Shows the relationship between pressure and specific volume.
        *   Lines of constant temperature are curves in the two-phase region.
        *   Shows the behavior of substances at various pressures and volumes.

    *   **T-s Diagram (Temperature-Entropy):**
        *   Shows the relationship between temperature and entropy.
        *   The area under the process curve on a T-s diagram represents heat transfer ($Q$).
        *   Isothermal process: horizontal line.
        *   Adiabatic process: vertical line (for reversible processes).

    *   **h-s Diagram (Enthalpy-Entropy) or Mollier Diagram:**
        *   Shows the relationship between enthalpy and entropy.
        *   Useful for analyzing processes in turbines, compressors, and nozzles.
        *   Lines of constant pressure and temperature are shown.

**Reference:** Cengel & Boles, Chapter 3; P.K. Nag, Chapter 2.
**Course Outcomes Addressed:** CO5 (Determine the properties of pure substances).
**Knowledge Level:** K2 (Understand).

---

## 1.10 Units and Dimensions

*   **Dimension:** A physical quantity that can be measured (e.g., length, mass, time, temperature).
*   **Unit:** A specific magnitude assigned to a dimension (e.g., meter, kilogram, second, Kelvin).
*   **Systeme International (SI):** The internationally recognized system of units.
    *   Length: meter (m)
    *   Mass: kilogram (kg)
    *   Time: second (s)
    *   Temperature: Kelvin (K)
    *   Force: Newton (N) = kg⋅m/s²
    *   Energy (Work, Heat): Joule (J) = N⋅m = kg⋅m²/s²
    *   Power: Watt (W) = J/s = kg⋅m²/s³
    *   Pressure: Pascal (Pa) = N/m² = kg/(m⋅s²)

*   **Force and Mass:**
    *   Newton's Second Law: $F = ma$
    *   In SI, $1 \, \text{N} = 1 \, \text{kg} \cdot 1 \, \text{m/s}^2$.
    *   In the English system, pound-force (lbf) is a unit of force, and slug is a unit of mass. $1 \, \text{lbf} \approx 32.174 \, \text{lbm} \cdot \text{ft/s}^2$.
    *   **Pound-mass (lbm):** Often used in the English system. $1 \, \text{lbf}$ is the force that accelerates $1 \, \text{lbm}$ at $32.174 \, \text{ft/s}^2$.
    *   **Gravitational Constant ($g_c$):** Used to reconcile units in the English system. $g_c = 32.174 \, \text{lbm} \cdot \text{ft / (lbf} \cdot \text{s}^2)$.

*   **Energy Units:**
    *   Joule (J)
    *   Kilojoule (kJ)
    *   Calorie (cal): $1 \, \text{cal} \approx 4.184 \, \text{J}$
    *   British Thermal Unit (BTU)
    *   Kilowatt-hour (kWh)

*   **Pressure Units:**
    *   Pascal (Pa)
    *   Kilopascal (kPa)
    *   Megapascal (MPa)
    *   Bar ($1 \, \text{bar} = 100 \, \text{kPa}$)
    *   Atmosphere ($1 \, \text{atm} \approx 101.325 \, \text{kPa}$)
    *   psi (pounds per square inch)

**Important Point:** Consistency in units is crucial for accurate thermodynamic calculations. Always check and convert units as necessary.

**Reference:** Cengel & Boles, Chapter 1; P.K. Nag, Chapter 1.
**Course Outcomes Addressed:** CO1 (Understand basic concepts of thermodynamics).
**Knowledge Level:** K1 (Remember), K2 (Understand).

---

## Practice Questions and Exercises

**Q1.1 (CO1, K2):** Define the following terms:
    a) System
    b) Surroundings
    c) Boundary
    d) State
    e) Process

**Answer:**
    a) **System:** A quantity of matter or a region in space chosen for study.
    b) **Surroundings:** Everything outside the system.
    c) **Boundary:** The real or imaginary surface separating the system from its surroundings.
    d) **State:** A condition of a system described by its properties.
    e) **Process:** A transformation from one state to another.

**Q1.2 (CO1, K2):** Differentiate between closed, open, and isolated systems. Provide an example for each.

**Answer:**
    *   **Closed System:** Fixed mass, energy exchange allowed, mass exchange not allowed. Example: A sealed cylinder of gas.
    *   **Open System:** Mass and energy exchange allowed across the boundary. Example: A gas turbine.
    *   **Isolated System:** No mass or energy exchange with surroundings. Example: A perfectly insulated, sealed container (ideal).

**Q1.3 (CO5, K3):** Water at 100 kPa pressure is in a saturated liquid-vapor mixture state with a quality of 0.6. Determine the specific volume, internal energy, and enthalpy of this mixture.

**Data needed:** From saturated water tables at 100 kPa.
    *   $v_f = 0.001043 \, \text{m}^3/\text{kg}$
    *   $v_g = 1.6941 \, \text{m}^3/\text{kg}$
    *   $u_f = 391.96 \, \text{kJ/kg}$
    *   $u_{fg} = 2067.4 \, \text{kJ/kg}$
    *   $h_f = 417.51 \, \text{kJ/kg}$
    *   $h_{fg} = 2257.5 \, \text{kJ/kg}$

**Solution:**
    *   Specific volume: $v = v_f + x (v_g - v_f)$
        $v = 0.001043 + 0.6 (1.6941 - 0.001043) = 0.001043 + 0.6(1.693057) \approx 1.01687 \, \text{m}^3/\text{kg}$
    *   Specific internal energy: $u = u_f + x u_{fg}$
        $u = 391.96 + 0.6 (2067.4) = 391.96 + 1240.44 \approx 1632.4 \, \text{kJ/kg}$
    *   Specific enthalpy: $h = h_f + x h_{fg}$
        $h = 417.51 + 0.6 (2257.5) = 417.51 + 1354.5 \approx 1772.0 \, \text{kJ/kg}$

**Q1.4 (CO1, K2):** What are the conditions for a system to be in thermodynamic equilibrium?

**Answer:** Thermal equilibrium (uniform temperature), mechanical equilibrium (uniform pressure/no unbalanced forces), phase equilibrium (no net phase change), and chemical equilibrium (no chemical reactions).

**Q1.5 (CO1, K1):** State Newton's second law of motion in terms of force and acceleration and relate it to the SI unit of force.

**Answer:** $F = ma$. In SI, force is measured in Newtons (N), where $1 \, \text{N} = 1 \, \text{kg} \cdot 1 \, \text{m/s}^2$.

---

## Important Points to Remember

*   **Thermodynamics is about energy and its transformations.**
*   **The macroscopic approach is primarily used in classical thermodynamics.**
*   **Clearly define your system, surroundings, and boundary.**
*   **Properties are state functions; their values depend only on the current state.**
*   **A system is in equilibrium when no driving force exists for any change.**
*   **Pure substances are essential for using property tables.**
*   **Quality ($x$) is a property specific to saturated mixtures.**
*   **Unit consistency is paramount in all calculations.**
*   **Property diagrams are powerful tools for visualization and analysis.**

---

## Learning Outcomes Check

*   **CO1: Understand basic concepts of thermodynamics (K1, K2):** Covered through definitions, system types, properties, equilibrium, units, and property diagrams.
*   **CO2: Understand the laws of thermodynamics (K1, K2):** While laws are introduced in later modules, concepts like specific heat relate to energy and temperature changes which are foundational to the First Law.
*   **CO3: Conduct first law analysis of open and closed systems (K3):** Not directly covered in this introductory module, but understanding system types is essential for later analysis.
*   **CO4: Determine entropy changes associated with different processes (K3):** Not covered in this introductory module.
*   **CO5: Determine the properties of pure substances (K2, K3):** Extensively covered through definitions of properties, phase behavior, quality, and the use of property tables.

This module provides the foundational vocabulary and concepts necessary for all subsequent topics in Engineering Thermodynamics. Mastering these basics will greatly facilitate understanding more complex analyses.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
