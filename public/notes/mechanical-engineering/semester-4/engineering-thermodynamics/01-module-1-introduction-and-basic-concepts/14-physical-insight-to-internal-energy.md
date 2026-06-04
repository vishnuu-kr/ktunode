---
title: "physical insight to internal energy"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 1: Introduction and basic concepts"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f40"
status: "completed"
scrapedAt: "2026-05-20T17:53:18.939Z"
---
# Engineering Thermodynamics - Module 1: Introduction and Basic Concepts

## Topic: Physical Insight into Internal Energy

### 1. Introduction

Internal energy ($U$) is a fundamental property in thermodynamics that represents the total energy contained within a thermodynamic system due to the motion and configuration of its molecules. It's a microscopic property that, when considered collectively for a large number of molecules, contributes to the macroscopic behavior of the system. Understanding internal energy is crucial for applying the First Law of Thermodynamics, which governs energy conservation.

### 2. Learning Outcomes Covered

This topic will help you achieve the following learning outcomes:

*   **CO1: Understand basic concepts of thermodynamics (Knowledge Level: K1, K2)**
    *   Defining internal energy.
    *   Identifying components of internal energy.
    *   Differentiating between internal energy and other energy forms.
*   **CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2)**
    *   Recognizing internal energy's role in the First Law of Thermodynamics.

### 3. Key Concepts and Definitions

*   **Internal Energy (U):** The sum of all microscopic forms of energy within a system. It is an **extensive property**, meaning it depends on the amount of substance in the system.
*   **Microscopic Energy Forms:** These are the energies associated with the molecular structure and activity of the system's constituents. They can be broadly categorized into:
    *   **Kinetic Energy:** Energy due to the motion of molecules. This includes:
        *   **Translational Kinetic Energy:** Energy associated with the random movement of molecules in straight lines through space.
        *   **Rotational Kinetic Energy:** Energy associated with the rotation of molecules.
        *   **Vibrational Kinetic Energy:** Energy associated with the vibration of atoms within molecules.
    *   **Potential Energy:** Energy associated with the forces between molecules and within molecules. This includes:
        *   **Intermolecular Potential Energy:** Energy due to attractive or repulsive forces between molecules. This is significant in liquids and solids.
        *   **Intramolecular Potential Energy:** Energy associated with the chemical bonds within molecules (e.g., the energy stored in chemical bonds).
        *   **Nuclear Energy:** Energy stored within the nucleus of atoms, usually considered constant for most thermodynamic processes unless nuclear reactions occur.

*   **Macroscopic Energy:** These are energies associated with the system as a whole relative to an external reference frame. Examples include kinetic energy (of the system as a whole) and potential energy (due to gravity or electric fields). These are typically not included in the definition of *internal* energy, although they contribute to the *total* energy of the system.

### 4. Physical Insight into Internal Energy

The "physical insight" into internal energy comes from understanding that it's not a single, observable quantity but rather a sum of countless molecular-level contributions.

#### 4.1. Molecular Motion and Kinetic Energy

Imagine a gas in a container. The gas molecules are in constant, random motion – they translate, rotate, and vibrate.

*   **Translational KE:** Think of a billiard ball moving across a table. Gas molecules do this in all directions, bouncing off each other and the container walls. The average translational kinetic energy of molecules is directly proportional to the absolute temperature of an ideal gas (as per the kinetic theory of gases).
*   **Rotational KE:** Molecules, especially polyatomic ones, can rotate like tiny tops. This rotational motion also contributes to their kinetic energy.
*   **Vibrational KE:** Atoms within a molecule can vibrate relative to each other, stretching and compressing the chemical bonds like springs. This vibrational motion further adds to the kinetic energy.

For **ideal gases**, internal energy is primarily a function of the **translational and rotational kinetic energies** of the molecules. Since these are directly related to temperature, the internal energy of an ideal gas is solely a function of temperature ($U = U(T)$).

#### 4.2. Molecular Spacing and Potential Energy

In **liquids and solids**, molecules are packed much closer together than in gases. This proximity means that the forces between molecules (intermolecular forces) become significant.

*   **Intermolecular Potential Energy:** These forces can be attractive (like Van der Waals forces) or repulsive (when molecules get too close). The internal energy includes the potential energy associated with these intermolecular interactions. When molecules are far apart, this potential energy is often taken as zero. As they come closer, attractive forces do work, storing potential energy. Repulsive forces store potential energy as molecules are forced closer together.
*   **Intramolecular Potential Energy:** The energy stored within the chemical bonds holding atoms together in a molecule. While chemical reactions involve changes in this energy, for most thermodynamic processes that don't involve chemical changes, this is considered constant.

For **real gases, liquids, and solids**, internal energy depends not only on temperature but also on **pressure and phase**. This is because changes in pressure and phase alter the average distance between molecules, thereby changing the intermolecular potential energy.

### 5. Relationship with Other Energy Forms

It's important to distinguish internal energy from other forms of energy associated with a system:

*   **Kinetic Energy (Macroscopic):** Energy due to the bulk motion of the system (e.g., a moving car, a flowing fluid). $KE = \frac{1}{2}mv^2$.
*   **Potential Energy (Macroscopic):** Energy due to the position of the system in a force field (e.g., gravitational potential energy, $PE = mgh$).
*   **Total Energy (E):** The sum of all forms of energy, both macroscopic and microscopic.
    $E = U + KE + PE$

In many thermodynamic analyses, the macroscopic kinetic and potential energies are negligible. Therefore, changes in the total energy of a system are often approximated as changes in internal energy: $\Delta E \approx \Delta U$.

### 6. Internal Energy and the First Law of Thermodynamics

The First Law of Thermodynamics is a statement of conservation of energy. For a closed system undergoing a process, it states:

$\Delta U = Q - W$

Where:
*   $\Delta U$ is the change in internal energy of the system.
*   $Q$ is the net heat added *to* the system.
*   $W$ is the net work done *by* the system.

**Physical Interpretation:**
The change in the total internal energy of a closed system is equal to the net energy transferred to the system by heat, minus the net energy transferred from the system by work.

**Example:** If you heat a gas in a sealed, rigid container (no work done, $W=0$), any heat added ($Q > 0$) will increase the internal energy of the gas. This increase in internal energy manifests as an increase in the kinetic and potential energies of the gas molecules, leading to a higher temperature.

### 7. State Function

Internal energy ($U$) is a **state function**. This means that the change in internal energy between two states depends only on the initial and final states, not on the path taken to get from one state to another.

**Implication:** $\Delta U = U_{final} - U_{initial}$

This is a powerful concept because it allows us to calculate changes in internal energy even for complex processes by devising simpler, equivalent processes.

### 8. How to Determine Internal Energy (Practical Considerations)

*   **Ideal Gases:** For ideal gases, internal energy is only a function of temperature. $u = c_v T$, where $u$ is specific internal energy and $c_v$ is the specific heat at constant volume. Thus, $\Delta u = c_v \Delta T$ and $\Delta U = m c_v \Delta T$. (Ref: Cengel & Boles, Ch 3; Nag, Ch 2)
*   **Real Gases, Liquids, and Solids:** For these substances, tables of thermodynamic properties (like steam tables) provide values for specific internal energy ($u$) at different temperatures and pressures, or as a function of other properties. (Ref: Cengel & Boles, Ch 4, 5; Nag, Ch 4)
*   **Specific Heat at Constant Volume ($c_v$):** This property relates the change in internal energy to the change in temperature: $c_v = (\partial u / \partial T)_v$. For ideal gases, $c_v$ is a function of temperature only. For real substances, it can be a more complex function.

### 9. Examples

**Example 1: Ideal Gas in a Closed System**
Consider 2 kg of nitrogen gas ($\text{N}_2$) as an ideal gas at 27°C. If the temperature is increased to 227°C in a constant-volume process, determine the change in internal energy. Assume $c_v = 0.743 \text{ kJ/kg} \cdot ^\circ\text{C}$ for nitrogen.

*   **Given:**
    *   Mass ($m$) = 2 kg
    *   Initial Temperature ($T_1$) = 27°C
    *   Final Temperature ($T_2$) = 227°C
    *   $c_v = 0.743 \text{ kJ/kg} \cdot ^\circ\text{C}$
    *   Process is constant volume (so $W=0$)

*   **Solution:**
    *   $\Delta T = T_2 - T_1 = 227^\circ\text{C} - 27^\circ\text{C} = 200^\circ\text{C}$
    *   $\Delta U = m \cdot c_v \cdot \Delta T$
    *   $\Delta U = 2 \text{ kg} \cdot 0.743 \text{ kJ/kg} \cdot ^\circ\text{C} \cdot 200^\circ\text{C}$
    *   $\Delta U = 297.2 \text{ kJ}$

    *Physical Insight:* The increase in temperature means the molecules are moving faster (higher translational and rotational kinetic energy), leading to an increase in the internal energy of the gas.

**Example 2: Water in a Piston-Cylinder Device**
Consider 1 kg of saturated water vapor at 100°C. It is cooled in a piston-cylinder device to 20°C while maintaining constant pressure. Determine the change in internal energy. (Assume specific heat at constant pressure, $c_p$, can be used as an approximation for the change in internal energy for liquid phase, or use tables).

*   **Given:**
    *   Mass ($m$) = 1 kg
    *   Initial state: Saturated vapor at 100°C. From steam tables, $u_g$ at 100°C $\approx 2506.0 \text{ kJ/kg}$.
    *   Final state: Liquid at 20°C. From steam tables, $u_f$ at 20°C $\approx 83.85 \text{ kJ/kg}$.

*   **Solution:**
    *   $\Delta U = m (u_{final} - u_{initial})$
    *   $\Delta U = 1 \text{ kg} (83.85 \text{ kJ/kg} - 2506.0 \text{ kJ/kg})$
    *   $\Delta U = -2422.15 \text{ kJ}$

    *Physical Insight:* The water vapor cools and condenses into liquid. The molecules lose kinetic energy due to cooling and also experience a change in intermolecular potential energy as they become more closely packed in the liquid phase. The negative $\Delta U$ signifies a decrease in the internal energy of the water.

### 10. Practice Questions and Exercises

1.  **What are the main microscopic components of internal energy?**
    *   **Answer:** Translational kinetic energy, rotational kinetic energy, vibrational kinetic energy, intermolecular potential energy, intramolecular potential energy (chemical bonds), and nuclear energy.

2.  **For an ideal gas, what properties determine its internal energy?**
    *   **Answer:** Only temperature.

3.  **Explain why internal energy is considered a state function.**
    *   **Answer:** Because the change in internal energy between two states depends only on the initial and final states, regardless of the path taken.

4.  **A rigid tank contains 5 kg of air at 300 kPa and 25°C. Heat is added to the tank until the temperature reaches 100°C. Assuming air behaves as an ideal gas with $c_v = 0.720 \text{ kJ/kg} \cdot ^\circ\text{C}$, calculate the change in internal energy of the air.**
    *   **Answer:**
        *   $\Delta T = 100^\circ\text{C} - 25^\circ\text{C} = 75^\circ\text{C}$
        *   $\Delta U = m \cdot c_v \cdot \Delta T = 5 \text{ kg} \cdot 0.720 \text{ kJ/kg} \cdot ^\circ\text{C} \cdot 75^\circ\text{C} = 270 \text{ kJ}$

5.  **Differentiate between internal energy and the total energy of a system.**
    *   **Answer:** Internal energy is the sum of microscopic energies within a system. Total energy includes internal energy plus macroscopic energies like kinetic energy of the system as a whole and potential energy of the system as a whole.

### 11. Important Points to Remember

*   **Internal energy is a property of the substance itself, representing the total energy contained within it at a molecular level.**
*   **For ideal gases, $U$ is solely a function of temperature.**
*   **For real substances, $U$ is a function of temperature, pressure, and phase.**
*   **Internal energy is a state function, meaning $\Delta U$ depends only on the initial and final states.**
*   **The First Law of Thermodynamics relates changes in internal energy to heat transfer and work done.**
*   **When analyzing energy changes, distinguish between microscopic internal energy and macroscopic kinetic/potential energies.**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 12. References

*   **Cengel & Boles, Thermodynamics: an engineering approach.**
    *   Chapter 3: Energy, Energy Transfer, and General Energy Analysis (Discusses internal energy, its components, and its relation to the First Law for ideal gases).
    *   Chapter 4: Properties of Pure Substances (Introduces tables for determining internal energy for real substances).
*   **Nag, P.K., Engineering Thermodynamics.**
    *   Chapter 2: Properties of Steam (Shows how to find internal energy from property tables).
    *   Chapter 3: First Law of Thermodynamics (Relates internal energy to heat and work).
*   **Moran & Shapiro, Fundamentals of Engineering Thermodynamics.**
    *   Chapter 4: Energy and the First Law of Thermodynamics (Provides detailed discussion on internal energy and its components).
*   **Sonntag, VanWylen, Borgnakke, Fundamentals of Thermodynamics.**
    *   Chapter 4: Energy and the First Law of Thermodynamics (Covers internal energy as a property and its role in energy balances).
*   **Ansermet & Brechet, Thermodynamics: Principles and Applications.**
    *   Chapter 2: The First Law (Offers a foundational understanding of internal energy within the context of energy conservation).

This topic provides the foundational understanding of internal energy, which is critical for all subsequent analyses in thermodynamics, particularly for applying the First Law to various engineering systems.