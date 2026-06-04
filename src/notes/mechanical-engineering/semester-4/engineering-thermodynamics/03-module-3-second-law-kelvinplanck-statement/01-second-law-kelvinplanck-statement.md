---
title: "Second law: Kelvin–Planck statement"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f58"
status: "completed"
scrapedAt: "2026-05-20T17:53:34.510Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Kelvin-Planck Statement

## Module Objectives:

*   Understand the fundamental principles of the Second Law of Thermodynamics, specifically the Kelvin-Planck statement.
*   Analyze the implications of the Kelvin-Planck statement on the impossibility of perpetual motion machines of the second kind.
*   Relate the Kelvin-Planck statement to the concept of heat engines and their efficiency.
*   Introduce the concept of thermal reservoirs and heat transfer.

## Course Outcomes Addressed:

*   **CO1:** Understand basic concepts of thermodynamics (Knowledge Level: K1, K2)
*   **CO2:** Understand the laws of thermodynamics (Knowledge Level: K1, K2)

---

## 1. Introduction to the Second Law of Thermodynamics

The First Law of Thermodynamics deals with the conservation of energy, stating that energy cannot be created or destroyed, only transferred or changed in form. However, it does not specify the *direction* of natural processes or the *quality* of energy. The Second Law of Thermodynamics addresses these limitations.

*   **Key Concept:** The Second Law of Thermodynamics introduces the concept of **spontaneity** and **directionality** of thermodynamic processes. It tells us which processes can occur naturally and which cannot.
*   **Purpose:** To establish criteria for the feasibility of thermodynamic processes and to define the limits on converting heat into work.

---

## 2. The Kelvin-Planck Statement

The Kelvin-Planck statement is one of the most fundamental formulations of the Second Law of Thermodynamics. It specifically addresses the performance of heat engines.

### 2.1 Statement of the Kelvin-Planck Law

**"It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a single thermal reservoir and the performance of an equivalent amount of work."**

*(Cengel, Boles, & Kanoğlu, 2011; Nag, 2017)*

### 2.2 Explanation and Implications

*   **Cycle:** The device must operate in a cycle, meaning it returns to its initial state after a series of processes.
*   **Single Thermal Reservoir:** The device interacts with only one source of heat.
*   **No Other Effect:** The sole purpose of the device is to convert heat into work.
*   **Implication:** This statement implies that **100% conversion of heat into work in a cycle is impossible.** There will always be some heat rejected to a colder reservoir.

### 2.3 Perpetual Motion Machines of the Second Kind

The Kelvin-Planck statement is equivalent to stating that **perpetual motion machines of the second kind are impossible.**

*   **Perpetual Motion Machine of the First Kind:** Violates the First Law of Thermodynamics (produces energy from nothing).
*   **Perpetual Motion Machine of the Second Kind:** Violates the Second Law of Thermodynamics (produces work by extracting heat from a single reservoir).

*(Moran & Shapiro, 2006)*

### 2.4 Analogy

Imagine trying to build a machine that runs forever by simply absorbing heat from the air and turning it into useful work. The Kelvin-Planck statement says this is impossible. You'll always have some "waste heat" that needs to be discharged.

---

## 3. Thermal Reservoirs

To understand the Kelvin-Planck statement, we need to define a thermal reservoir.

*   **Definition:** A thermal reservoir is a substance or body that can supply or absorb large amounts of heat at a constant temperature. Its thermal energy is so large that its temperature remains essentially unchanged during heat transfer.
*   **Examples:**
    *   **High-Temperature Reservoir:** The furnace of a power plant, the sun.
    *   **Low-Temperature Reservoir:** The atmosphere, a river, the ocean.
*   **Key Property:** Temperature ($T$).

*(Cengel, Boles, & Kanoğlu, 2011)*

---

## 4. Heat Engines

The Kelvin-Planck statement directly relates to the operation of heat engines.

*   **Definition:** A heat engine is a device that operates in a cycle and produces work by transferring heat from a high-temperature reservoir to a low-temperature reservoir.
*   **Basic Operation:**
    1.  **Heat Absorption ($Q_H$):** Absorbs heat from a high-temperature reservoir ($T_H$).
    2.  **Work Production ($W_{net,out}$):** Converts some of this heat into useful work.
    3.  **Heat Rejection ($Q_L$):** Rejects the remaining heat to a low-temperature reservoir ($T_L$).

*   **Energy Balance (First Law):** For a cycle, the net change in internal energy is zero. Therefore, by the First Law of Thermodynamics:
    $W_{net,out} = Q_{net,in} = Q_H - Q_L$

*   **Thermal Efficiency ($\eta_{th}$):** The ratio of the desired output (work) to the required input (heat from the high-temperature reservoir).
    $\eta_{th} = \frac{\text{Net Work Output}}{\text{Total Heat Input}} = \frac{W_{net,out}}{Q_H}$

    Substituting the work equation:
    $\eta_{th} = \frac{Q_H - Q_L}{Q_H} = 1 - \frac{Q_L}{Q_H}$

*(Nag, 2017; Sonntag, Borgnakke, & VanWylen, 2014)*

---

## 5. Relating Kelvin-Planck Statement to Heat Engines

The Kelvin-Planck statement implies that for any heat engine operating in a cycle:

*   $Q_L$ **cannot be zero**. Some heat must always be rejected to the low-temperature reservoir.
*   Therefore, the thermal efficiency ($\eta_{th}$) **cannot be 100%** (or 1).

**Important Point to Remember:** A heat engine *must* reject some heat to a colder sink to operate in a cycle.

*(Cengel, Boles, & Kanoğlu, 2011; Moran & Shapiro, 2006)*

---

## 6. Examples Illustrating the Kelvin-Planck Statement

**Example 1: A Hypothetical 100% Efficient Engine**

Consider a hypothetical engine that absorbs 1000 kJ of heat from a reservoir at 500 K and produces 1000 kJ of work, rejecting no heat to a colder reservoir.

*   According to the Kelvin-Planck statement, such a device is impossible. It would be a perpetual motion machine of the second kind.

**Example 2: Real-World Heat Engines**

*   **Automobile Engine:** Absorbs heat from burning fuel, produces work to move the car, and rejects waste heat through the exhaust and cooling system (radiator).
*   **Power Plant (e.g., Steam Turbine):** Absorbs heat from burning coal/gas or nuclear reaction, produces work to drive a generator, and rejects heat to cooling towers or a river.

*(Nag, 2017)*

---

## 7. Practice Questions and Exercises

**Question 1:** State the Kelvin-Planck statement of the Second Law of Thermodynamics in your own words. (CO2 - K1)

**Answer:** It is impossible to create a machine that, while operating in a cycle, solely converts heat from a single heat source into an equivalent amount of work without any other effects. This means that not all heat absorbed can be converted into work; some must always be discarded.

**Question 2:** What is a perpetual motion machine of the second kind? (CO2 - K1)

**Answer:** A perpetual motion machine of the second kind is a hypothetical device that violates the Second Law of Thermodynamics by converting heat entirely into work without rejecting any heat to a colder reservoir, or by spontaneously transferring heat from a colder body to a hotter body.

**Question 3:** A heat engine absorbs 1500 kJ of heat from a high-temperature reservoir at 600 K and rejects 900 kJ of heat to a low-temperature reservoir at 300 K. Calculate the net work output and the thermal efficiency of this engine. (CO2 - K3, CO3 - K3 - *though CO3 is for First Law, the principle applies here to the energy balance*)

**Answer:**
Given:
$Q_H = 1500 \text{ kJ}$
$T_H = 600 \text{ K}$
$Q_L = 900 \text{ kJ}$
$T_L = 300 \text{ K}$

1.  **Net Work Output ($W_{net,out}$):**
    Using the First Law for a cycle: $W_{net,out} = Q_H - Q_L$
    $W_{net,out} = 1500 \text{ kJ} - 900 \text{ kJ} = 600 \text{ kJ}$

2.  **Thermal Efficiency ($\eta_{th}$):**
    $\eta_{th} = 1 - \frac{Q_L}{Q_H}$
    $\eta_{th} = 1 - \frac{900 \text{ kJ}}{1500 \text{ kJ}}$
    $\eta_{th} = 1 - 0.6 = 0.4$
    $\eta_{th} = 40\%$

**Question 4:** True or False: A heat engine can have a thermal efficiency of 100%. Explain why. (CO2 - K2)

**Answer:** False. According to the Kelvin-Planck statement of the Second Law, it is impossible to construct a heat engine that converts all the absorbed heat into work. Some amount of heat must always be rejected to a lower-temperature reservoir to complete the cycle. Therefore, $\eta_{th}$ can never be 100%.

**Question 5:** Imagine a hypothetical device that cools the ocean and uses the absorbed heat to power a ship, with no other heat interaction. Is this device possible according to the Kelvin-Planck statement? Explain. (CO2 - K2)

**Answer:** No, this device is not possible according to the Kelvin-Planck statement. The ocean acts as a single thermal reservoir (a source of heat). The device is attempting to convert heat solely from this single reservoir into work. This directly violates the Kelvin-Planck statement, as it would require rejecting no heat to a colder reservoir, which is impossible for a cyclic device.

---

## 8. Important Points to Remember

*   The Second Law of Thermodynamics is about the **direction** of processes and the **quality** of energy.
*   The Kelvin-Planck statement specifically addresses **heat engines**.
*   **No cyclic device can convert heat entirely into work.**
*   A heat engine requires **both a high-temperature reservoir and a low-temperature reservoir** to operate.
*   **Waste heat rejection ($Q_L > 0$) is unavoidable** for a heat engine.
*   The Kelvin-Planck statement is equivalent to the **impossibility of perpetual motion machines of the second kind.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## 9. Textual References Incorporated

This study material has been formulated by referencing the key concepts and principles found in:

*   **Cengel, Yunus A., Michael A. Boles, and Mehmet Kanoğlu.** *Thermodynamics: An Engineering Approach.* McGraw-hill, 2011. (Specifically, the introductory chapters on the Second Law and heat engines.)
*   **Nag, P.K.** *Engineering Thermodynamics.* McGraw-Hill Education, 6th Edition, 2017. (Sections covering the statements of the Second Law and basic heat engine analysis.)
*   **Moran J. Shapiro N. M.** *Fundamentals of Engineering Thermodynamics.* Wiley, 2006. (Discussions on the Second Law, its implications, and the concept of perpetual motion machines.)
*   **Sonntag, Richard E., Claus Borgnakke, Gordon J. VanWylen.** *Fundamentals of Thermodynamics.* Wiley, 8th Edition, 2014. (Emphasis on the fundamental statements of the Second Law and their relation to system performance.)

*(Note: While specific page numbers are not cited for brevity, the core concepts and phrasing used are directly derived from the established principles within these textbooks.)*