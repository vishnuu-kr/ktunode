---
title: "the state postulate"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 1: Introduction and basic concepts"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f3b"
status: "completed"
scrapedAt: "2026-05-20T17:53:15.531Z"
---
# Engineering Thermodynamics: Module 1 - Introduction and Basic Concepts

## Topic: The State Postulate

### 1. Introduction to Thermodynamics and the State Postulate

*   **Thermodynamics** is the science that deals with energy, its forms, its transformations, and its effects on matter. It is fundamental to understanding many engineering processes, from power generation to refrigeration.
*   **State Postulate:** This is a foundational concept in thermodynamics that helps us determine the state of a system. It tells us how many independent properties we need to specify to completely define the state of a system.

### 2. Key Concepts and Definitions

*   **System:** A quantity of matter or a region in space chosen for study.
    *   **Surroundings:** The region outside the system.
    *   **Boundary:** The real or imaginary surface that separates the system from its surroundings.
*   **State:** The condition of a system at a particular instant in time, described by its properties.
*   **Property:** A characteristic of a system that is independent of the history of the system. Examples include pressure ($P$), temperature ($T$), volume ($V$), mass ($m$), internal energy ($u$), enthalpy ($h$), entropy ($s$), etc.
*   **Equilibrium:** A state where a system is in balance and no driving force exists for any change to occur.
    *   **Thermal Equilibrium:** Uniform temperature throughout the system.
    *   **Mechanical Equilibrium:** No unbalanced forces acting within the system or between the system and its surroundings.
    *   **Phase Equilibrium:** No net change in the amount of phases present.
    *   **Chemical Equilibrium:** No net change in the chemical composition of the system.
*   **Pure Substance:** A substance that is homogeneous and has a fixed chemical composition throughout. It can exist in different phases (solid, liquid, gas), but its chemical identity remains the same.
    *   **Example:** Water ($\text{H}_2\text{O}$), Nitrogen ($\text{N}_2$), Refrigerant-134a.
    *   **Non-example:** Air (a mixture of gases), Saltwater (a mixture). (Cengel et al., 2011, p. 4)
*   **Phase:** A region of a system throughout which all physical and chemical properties are essentially uniform.

### 3. The State Postulate Explained

The State Postulate is a fundamental principle that dictates how many independent intensive properties are required to completely define the state of a system.

**Statement of the State Postulate:**

"The state of a simple compressible system is completely determined by **two independent intensive properties**." (Cengel et al., 2011, p. 5)

*   **Simple Compressible System:** A system in which the only significant pressure-volume work is considered. Effects of gravity, surface tension, and electrical fields are neglected.
*   **Intensive Property:** A property that is independent of the size or mass of the system (e.g., temperature, pressure, density).
*   **Independent Property:** Two properties are independent if one can be varied while the other remains constant. If specifying one property automatically fixes another, they are dependent.

**Implications of the State Postulate:**

*   Once two independent intensive properties of a simple compressible system are known, all other intensive properties are fixed.
*   This allows us to locate a state point on thermodynamic property diagrams (e.g., P-v, T-s diagrams).

**Examples:**

1.  **Water Vapor:** If we know the pressure ($P$) and temperature ($T$) of water vapor, and they are independent (e.g., $P = 100 \text{ kPa}$ and $T = 150^\circ\text{C}$), then we can determine its specific volume ($v$), internal energy ($u$), enthalpy ($h$), and entropy ($s$) from property tables or equations of state.
2.  **Water Vapor (Dependent Properties):** If we know the pressure ($P$) and the temperature ($T$) of saturated water vapor at $100^\circ\text{C}$, the pressure is fixed at $101.325 \text{ kPa}$. In this case, $P$ and $T$ are not independent. We would need, for example, pressure and quality ($x$) to define the state of saturated vapor.

**How to Determine Independence:**

*   **Thermodynamic Surfaces:** For a pure substance, property relationships can be represented by thermodynamic surfaces (e.g., P-v-T surface). If you can move along this surface by changing one property while keeping another constant, they are independent. (Sonntag et al., 2014)
*   **Table Lookups:** If you can find a unique entry in a property table by specifying two properties, they are likely independent.

**Exceptions and Special Cases:**

*   **Phase Change Processes:** During a phase change (e.g., boiling water at constant pressure), temperature remains constant. In such cases, pressure and temperature are not independent. We need another property like quality ($x$) or specific volume ($v$) to define the state.
    *   For a pure substance undergoing phase change, we need **one independent intensive property** to determine the state (e.g., pressure or temperature in the saturation region). (Nag, 2017, p. 24)
*   **Systems with Other Interactions:** For systems where other interactions are significant (e.g., electrical work, surface tension), more than two independent properties might be needed. However, in most introductory thermodynamics courses, we focus on simple compressible systems.

### 4. Learning Outcomes Alignment

This topic directly addresses:

*   **CO1: Understand basic concepts of thermodynamics (Knowledge Level: K1, K2)**
    *   **K1:** Recalling definitions of system, surroundings, boundary, state, property, equilibrium, pure substance, phase.
    *   **K2:** Understanding the concept of intensive and independent properties and how they define a system's state.
*   **CO5: Determine the properties of pure substances (Knowledge Level: K2, K3)**
    *   **K2:** Understanding *that* properties of pure substances are determined by specifying a certain number of independent intensive properties.
    *   **K3:** The State Postulate is the basis for *how* we will later learn to find specific property values (e.g., using tables or software), which falls under K3 application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 5. Textbook and Reference Material Integration

*   **Cengel et al. (2011):** Explicitly defines the State Postulate and its application to simple compressible systems. Covers pure substances and their phases.
*   **Nag (2017):** Discusses the concept of state, properties, and equilibrium. Mentions that for a pure substance, two independent properties define the state, and highlights the exception during phase change.
*   **Moran & Shapiro (2006):** Provides a rigorous treatment of thermodynamic properties and the conditions required to define a state.
*   **Sonntag et al. (2014):** Explores the P-v-T surface and how specifying two independent properties allows interpolation or determination of other properties.
*   **Ansermet & Brechet (2019):** Offers a perspective on the fundamental nature of thermodynamic states and the role of independent variables.

### 6. Important Points to Remember

*   **Two Independent Intensive Properties** is the key to defining the state of a **simple compressible system**.
*   **Intensive properties** are independent of system size.
*   **Independence** means one property can change without necessarily changing the other.
*   **Pure substances** are crucial to this postulate.
*   Be aware of **exceptions**, especially during **phase changes**, where only one independent intensive property might be needed.
*   The State Postulate is the foundation for **property determination** using tables or equations of state.

### 7. Practice Questions and Exercises

**Question 1:**
A system contains steam at 5 MPa and $300^\circ\text{C}$. According to the State Postulate, can we determine all other thermodynamic properties of this steam? Justify your answer.

**Answer 1:**
Yes. The system is steam (water), which is a pure substance. Pressure ($P = 5 \text{ MPa}$) and Temperature ($T = 300^\circ\text{C}$) are both intensive properties. Assuming the steam is a simple compressible system, these two properties are independent (since $300^\circ\text{C}$ is well above the saturation temperature for 5 MPa, it's superheated vapor). Therefore, according to the State Postulate, specifying these two independent intensive properties completely determines the state of the steam, allowing us to find all other properties like specific volume, enthalpy, entropy, etc.

**Question 2:**
Consider a system containing saturated liquid water and saturated water vapor in equilibrium at $100^\circ\text{C}$.
a) Are pressure and temperature independent properties for this system?
b) How many independent intensive properties are needed to define the state of the *vapor phase* within this mixture?

**Answer 2:**
a) No, pressure and temperature are **not independent** properties for this system. When a pure substance exists in a saturated mixture (liquid and vapor in equilibrium), its saturation pressure is solely a function of its saturation temperature. At $100^\circ\text{C}$, the saturation pressure of water is fixed at $101.325 \text{ kPa}$.
b) Since $100^\circ\text{C}$ and $101.325 \text{ kPa}$ are not independent for this saturated mixture, we need one independent intensive property to define the state of the vapor phase. For example, if we specify the **quality ($x$)** of the vapor (the mass fraction of vapor), along with the temperature or pressure, we can determine all other properties of the vapor phase.

**Question 3:**
Which of the following are intensive properties?
(a) Temperature
(b) Specific volume
(c) Mass
(d) Pressure
(e) Internal Energy

**Answer 3:**
Intensive properties are independent of the mass or size of the system.
(a) Temperature - Intensive
(b) Specific volume (volume per unit mass) - Intensive
(c) Mass - Extensive (depends on the amount of matter)
(d) Pressure - Intensive
(e) Internal Energy - Extensive (total internal energy depends on mass). However, *specific* internal energy ($u$) is intensive. The question asks for "Internal Energy" which typically refers to the total energy. If it meant specific internal energy, it would be intensive.

**Question 4:**
A rigid tank contains helium gas at $25^\circ\text{C}$ and $500 \text{ kPa}$. Can we determine the density of helium gas from this information alone? Explain using the State Postulate.

**Answer 4:**
Yes. Helium is a pure substance (a monatomic gas). The system is a rigid tank, implying no volume change is expected, and we assume it's a simple compressible system. Temperature ($T = 25^\circ\text{C}$) and Pressure ($P = 500 \text{ kPa}$) are two independent intensive properties. According to the State Postulate, these two properties are sufficient to define the state of the helium gas. Once the state is defined, we can determine its density (or specific volume, from which density is calculated as $1/v$).

---

This concludes the study notes for "The State Postulate." Remember to practice applying this postulate when working with thermodynamic property tables and data in subsequent modules.