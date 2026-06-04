---
title: "Second law: Clausius statement"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f59"
status: "completed"
scrapedAt: "2026-05-20T17:53:35.226Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Clausius Statement

---

## Introduction to the Second Law of Thermodynamics

The Second Law of Thermodynamics is a fundamental principle that governs the direction of natural processes and the limitations on converting heat into work. While the First Law deals with the conservation of energy, the Second Law introduces the concept of **quality of energy** and the tendency for systems to move towards a state of greater disorder or randomness.

This module focuses on the **Clausius Statement** of the Second Law, which provides a crucial perspective on heat transfer and the possibility of spontaneous processes. It complements the Kelvin-Planck statement by addressing a different, yet equally important, aspect of thermodynamic limitations.

---

## 1. The Clausius Statement of the Second Law

The Clausius statement, formulated by Rudolf Clausius, deals with the transfer of heat. It essentially states that:

**"It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a cooler body to a hotter body."**

**Key Concepts & Definitions:**

*   **Cycle:** A process or series of processes that returns a system to its initial state.
*   **Heat Transfer:** The flow of thermal energy from a region of higher temperature to a region of lower temperature.
*   **Cooler Body:** A body at a lower thermodynamic temperature.
*   **Hotter Body:** A body at a higher thermodynamic temperature.

**In simpler terms:** You cannot spontaneously move heat from a cold object to a hot object without doing some external work. To move heat against its natural direction (from cold to hot), you *must* supply energy.

---

## 2. Implications and Practical Relevance of the Clausius Statement

The Clausius statement has profound implications for various engineering applications, particularly in refrigeration and heat pumps.

**CO2 Alignment:** This section directly addresses **CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2)** by explaining the meaning and implications of the Clausius statement.

**Key Concepts & Definitions:**

*   **Refrigeration System:** A device that transfers heat from a cold reservoir to a hot reservoir. This is the primary application where the Clausius statement is directly observed.
*   **Heat Pump:** Similar to a refrigerator, but its primary purpose is to transfer heat from a cold reservoir to a hot reservoir to heat a space.

**Examples:**

1.  **Refrigerator:** A refrigerator cools the inside (cold reservoir) by transferring heat to the surrounding room (hot reservoir). This process doesn't happen naturally; the refrigerator's compressor does work to achieve this heat transfer. If a refrigerator could violate the Clausius statement, it would be able to cool its interior by simply drawing heat from the room and dumping it back into the room, without consuming electricity. This is clearly not possible.
2.  **Air Conditioner:** Similar to a refrigerator, an air conditioner moves heat from the cooler indoor air to the warmer outdoor air. This requires energy input from the compressor.
3.  **Heat Exchanger:** While heat naturally flows from hot to cold in a heat exchanger, the Clausius statement's violation would imply a device that could, for instance, spontaneously heat a hot fluid by drawing heat from a colder fluid, which is impossible.

**Important Points to Remember:**

*   The Clausius statement is about the *direction* of heat transfer. Heat naturally flows from hot to cold.
*   To reverse this natural flow (from cold to hot), work must be done on the system.
*   A device that *only* transfers heat from a colder body to a hotter body and produces no other effect would be a violation.

---

## 3. Equivalence of Clausius and Kelvin-Planck Statements

The Clausius statement and the Kelvin-Planck statement of the Second Law are **equivalent**. This means that if one statement is violated, the other must also be violated, and vice versa.

**CO2 Alignment:** Again, this section reinforces the understanding of the laws of thermodynamics (**CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2)**).

**Proof of Equivalence (Conceptual Understanding):**

Imagine a hypothetical device that violates the Clausius statement. This device can transfer heat from a cold reservoir to a hot reservoir without any work input. Now, consider a heat engine operating between the same two reservoirs (hot and cold). This heat engine takes heat from the hot reservoir, converts a portion into work, and rejects the rest to the cold reservoir.

If we couple the hypothetical Clausius-violating device with the heat engine in a specific way:

*   The Clausius-violating device takes heat $Q_L$ from the cold reservoir and delivers it to the hot reservoir.
*   The heat engine takes heat $Q_H$ from the hot reservoir, produces work $W_{out}$, and rejects heat $Q_L'$ to the cold reservoir.

By judiciously choosing the amounts of heat and work, we can make $Q_L = Q_L'$. This effectively cancels out the heat transfer to the cold reservoir. The net effect of this combined device is:

*   Heat $Q_H - W_{out}$ is absorbed from the hot reservoir.
*   Work $W_{out}$ is delivered to the surroundings.
*   No heat is exchanged with the cold reservoir.

This combined device is nothing more than a heat engine that produces work by absorbing heat from a *single* reservoir, which is a direct violation of the **Kelvin-Planck statement**.

Conversely, a violation of the Kelvin-Planck statement can be used to construct a device that violates the Clausius statement.

**Textbook Reference:** This concept is extensively discussed in **Cengel & Boles (2011)** and **P.K. Nag (2017)** in their chapters on the Second Law of Thermodynamics.

**Important Points to Remember:**

*   The equivalence highlights the fundamental nature of the Second Law.
*   Any violation of one statement implies a violation of the other.

---

## 4. Refrigerators and Heat Pumps: Applications of the Clausius Statement

The Clausius statement is the very foundation of how refrigerators and heat pumps operate. To move heat from a cold space to a warm space, work must be done.

**CO2 Alignment:** This section demonstrates the practical application of thermodynamic laws (**CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2)**) and relates to understanding system performance.

**Key Components and Working Principle:**

*   **Refrigeration Cycle:** Involves a working fluid (refrigerant) that undergoes phase changes (evaporation and condensation) to absorb and release heat.
    1.  **Evaporation:** Refrigerant at low pressure and low temperature absorbs heat from the cold space (e.g., inside the refrigerator), causing it to vaporize. This fulfills the Clausius statement's challenge: moving heat from cold to hot.
    2.  **Compression:** The vaporized refrigerant is compressed by a compressor (work input), increasing its pressure and temperature.
    3.  **Condensation:** The high-pressure, high-temperature refrigerant releases heat to the warmer surroundings (e.g., the kitchen), condensing back into a liquid.
    4.  **Expansion:** The high-pressure liquid refrigerant passes through an expansion valve, reducing its pressure and temperature, preparing it to absorb heat again in the evaporator.

*   **Heat Pump Cycle:** Essentially the same as a refrigeration cycle, but the objective is to deliver the heat rejected in the condenser to a warm space (e.g., a house).

**Performance Metrics:**

*   **Coefficient of Performance (COP):** A measure of the efficiency of refrigerators and heat pumps.
    *   **COP of Refrigeration ($COP_R$):** Ratio of the desired output (heat removed from the cold space) to the required input (work done).
        $$COP_R = \frac{\text{Desired Output}}{\text{Required Input}} = \frac{Q_L}{W_{in}}$$
        Where:
        *   $Q_L$ is the heat absorbed from the cold reservoir.
        *   $W_{in}$ is the work input to the compressor.
    *   **COP of Heating ($COP_H$):** Ratio of the desired output (heat delivered to the hot space) to the required input (work done).
        $$COP_H = \frac{\text{Desired Output}}{\text{Required Input}} = \frac{Q_H}{W_{in}}$$
        Where:
        *   $Q_H$ is the heat rejected to the hot reservoir.
        *   $W_{in}$ is the work input to the compressor.

**Relationship between $COP_R$ and $COP_H$:**

For a given system operating between two reservoirs with heat transfers $Q_L$ and $Q_H$, and work input $W_{in}$:
From the First Law applied to the cycle: $W_{in} = Q_H - Q_L$.

Therefore:
$$COP_H = \frac{Q_H}{W_{in}} = \frac{Q_H}{Q_H - Q_L}$$
$$COP_R = \frac{Q_L}{W_{in}} = \frac{Q_L}{Q_H - Q_L}$$

Adding these two equations:
$$COP_H + COP_R = \frac{Q_H}{Q_H - Q_L} + \frac{Q_L}{Q_H - Q_L} = \frac{Q_H + Q_L}{Q_H - Q_L}$$
This is not the most direct relationship. A more useful relationship is:
$$COP_H = COP_R + 1$$
This is because $Q_H = Q_L + W_{in}$.
$$COP_H = \frac{Q_L + W_{in}}{W_{in}} = \frac{Q_L}{W_{in}} + \frac{W_{in}}{W_{in}} = COP_R + 1$$

**Example:** A refrigerator removes 500 kJ of heat from the cold compartment ($Q_L = 500$ kJ) and requires 100 kJ of work ($W_{in} = 100$ kJ).
*   $COP_R = \frac{500 \text{ kJ}}{100 \text{ kJ}} = 5$.
*   The heat rejected to the surroundings is $Q_H = Q_L + W_{in} = 500 \text{ kJ} + 100 \text{ kJ} = 600 \text{ kJ}$.
*   If used as a heat pump, its $COP_H = \frac{600 \text{ kJ}}{100 \text{ kJ}} = 6$.
*   Check: $COP_H = COP_R + 1 \Rightarrow 6 = 5 + 1$, which is correct.

**Reference Books:** This is thoroughly covered in **Sonntag, Borgnakke, & VanWylen (2014)** and **Moran & Shapiro (2006)**.

**Important Points to Remember:**

*   $COP$ for refrigerators and heat pumps are always greater than 1.
*   The purpose of the work input is to facilitate the "unnatural" transfer of heat.

---

## 5. Statement of Violation of the Clausius Statement

The Clausius statement asserts that a process that solely transfers heat from a colder body to a hotter body without any work input is impossible.

**CO2 Alignment:** This reinforces the understanding of the Second Law's limitations (**CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2)**).

**What Constitutes a Violation:**

A device would violate the Clausius statement if:
*   It operates in a cycle.
*   Its *sole* effect is to transfer heat from a cold reservoir to a hot reservoir.
*   It does not produce any work, nor does it change the state of any other object in the surroundings.

**Example of a Hypothetical Violation (and why it's impossible):**

Imagine a perfectly insulated box with a cold object inside and a warmer object outside. If a device could simply draw heat from the warmer object and transfer it to the colder object, the colder object would become even colder, and the warmer object would become even warmer, without any external intervention (work input). This would defy the natural tendency of heat to flow from hot to cold and would be a perpetual motion machine of the second kind (which is impossible).

**Important Points to Remember:**

*   The emphasis is on the *sole effect* being heat transfer from cold to hot. Any work output or interaction with another body would be a different scenario.

---

## 6. Practice Questions and Exercises

**Question 1:**

State the Clausius statement of the Second Law of Thermodynamics. Explain its fundamental meaning in your own words.

**Answer:** The Clausius statement states that it is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a cooler body to a hotter body. This means that heat will not spontaneously flow from a cold object to a hot object. To move heat against its natural direction, work must be performed.

**Question 2:**

A refrigerator is used to cool the interior of a room from 25°C to 5°C. The heat absorbed from the room is 1000 kJ. The work input to the refrigerator is 200 kJ.
(a) What is the COP of this refrigerator?
(b) How much heat is rejected to the surroundings (outside the room)?
(c) If this same machine were used as a heat pump to heat the room, what would be its COP?

**Answer:**
Given:
$Q_L = 1000$ kJ (heat absorbed from the cold space)
$W_{in} = 200$ kJ (work input)

(a) $COP_R = \frac{Q_L}{W_{in}} = \frac{1000 \text{ kJ}}{200 \text{ kJ}} = 5$

(b) From the First Law for a cycle: $W_{in} = Q_H - Q_L$
$Q_H = Q_L + W_{in} = 1000 \text{ kJ} + 200 \text{ kJ} = 1200 \text{ kJ}$
The heat rejected to the surroundings is 1200 kJ.

(c) For a heat pump, the desired output is $Q_H$.
$COP_H = \frac{Q_H}{W_{in}} = \frac{1200 \text{ kJ}}{200 \text{ kJ}} = 6$
Alternatively, $COP_H = COP_R + 1 = 5 + 1 = 6$.

**Question 3:**

Is it possible for a heat pump to have a COP of 1? Explain.

**Answer:** Yes, it is theoretically possible for a heat pump to have a COP of 1. This would occur if the work input ($W_{in}$) were equal to the heat absorbed from the cold reservoir ($Q_L$). In this scenario, $Q_H = Q_L + W_{in} = Q_L + Q_L = 2Q_L$.
$COP_H = \frac{Q_H}{W_{in}} = \frac{2Q_L}{Q_L} = 2$.
My apologies, let's re-evaluate the question and my answer.

**Corrected Answer for Question 3:**

No, it is not possible for a heat pump to have a COP of 1. The COP of a heat pump is defined as $COP_H = \frac{Q_H}{W_{in}}$. For any real or ideal heat pump operating between two distinct temperatures, $Q_H = Q_L + W_{in}$. Since $Q_L$ must be a positive amount of heat absorbed from the cold reservoir for the cycle to occur, $Q_H$ will always be greater than $W_{in}$ (i.e., $Q_H > W_{in}$). Therefore, $COP_H = \frac{Q_H}{W_{in}} > 1$. A COP of 1 would imply $Q_H = W_{in}$, which would mean $Q_L = 0$, meaning no heat is being absorbed from the cold reservoir, which defeats the purpose of a heat pump.

---

## 7. Summary and Key Takeaways

*   **Clausius Statement:** It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a cooler body to a hotter body.
*   **Natural Heat Flow:** Heat naturally flows from hotter to colder bodies.
*   **Work Requirement:** To move heat from colder to hotter bodies, work must be supplied.
*   **Equivalence:** The Clausius and Kelvin-Planck statements are equivalent; a violation of one implies a violation of the other.
*   **Applications:** Refrigerators and heat pumps are practical devices that rely on the Second Law, requiring work input to move heat against its natural gradient.
*   **COP:** The Coefficient of Performance quantifies the efficiency of refrigerators ($COP_R$) and heat pumps ($COP_H$), where $COP_H = COP_R + 1$.
*   **Impossibility:** Devices that violate the Clausius statement would be perpetual motion machines of the second kind.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## 8. Further Reading and References

*   **Cengel, Y. A., Boles, M. A., & Kanoğlu, M. (2011).** *Thermodynamics: An Engineering Approach.* McGraw-hill. (Chapter 6 - Second Law of Thermodynamics)
*   **P.K. Nag. (2017).** *Engineering Thermodynamics.* McGraw-Hill Education. (Chapter 5 - Second Law of Thermodynamics)
*   **Moran, J. M., & Shapiro, N. M. (2006).** *Fundamentals of Engineering Thermodynamics.* Wiley. (Chapter 7 - The Second Law of Thermodynamics)
*   **Sonntag, R. E., Borgnakke, C., & VanWylen, G. J. (2014).** *Fundamentals of Thermodynamics.* Wiley. (Chapter 6 - The Second Law of Thermodynamics)

---
This concludes Module 3's topic on the Clausius Statement. Remember that understanding the Second Law is crucial for analyzing the efficiency and limitations of energy conversion processes in engineering.