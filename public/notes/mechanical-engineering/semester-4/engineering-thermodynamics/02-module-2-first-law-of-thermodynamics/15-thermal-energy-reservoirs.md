---
title: "Thermal energy reservoirs"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f52"
status: "completed"
scrapedAt: "2026-05-20T17:53:31.010Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics

## Topic: Thermal Energy Reservoirs

---

### 1. Introduction to Thermal Energy Reservoirs (K1, K2)

**Definition:**
A **thermal energy reservoir** is a substance or body of matter that can supply or absorb large amounts of thermal energy with an **infinitesimal change in its temperature**. In essence, it is a source or sink of thermal energy.

**Key Characteristics:**

*   **Large Heat Capacity:** Reservoirs possess an extremely large heat capacity, meaning they can absorb or release significant amounts of heat without a noticeable change in their temperature.
*   **Constant Temperature:** Due to their large heat capacity, their temperature remains practically constant during heat transfer processes.
*   **Infinite Source/Sink:** They are often idealized as infinite sources or sinks of thermal energy.

**Relevance to Thermodynamics:**
Thermal energy reservoirs are fundamental concepts in understanding heat transfer and the application of the First Law of Thermodynamics, especially in the context of heat engines and refrigerators. They act as the thermal environment with which thermodynamic systems interact.

---

### 2. Types of Thermal Energy Reservoirs (K1, K2)

Thermal energy reservoirs are broadly classified into two types based on their interaction with thermal energy:

#### 2.1. Heat Source (Thermal Reservoir)

*   **Definition:** A heat source is a reservoir that supplies thermal energy to a system.
*   **Temperature:** Its temperature ($T_H$) is higher than the temperature of the system it interacts with.
*   **Mechanism:** It transfers heat *to* the system.
*   **Examples:**
    *   **Furnace:** In a power plant, the burning fuel in a furnace acts as a heat source, supplying heat to the boiler. (Cengel et al., Thermodynamics: an engineering approach)
    *   **Solar Energy:** The Sun is a vast natural heat source.
    *   **Combustion Chamber:** In internal combustion engines, the combustion of fuel provides the heat.
    *   **Nuclear Reactor:** Provides heat in nuclear power plants.
    *   **Geothermal Sources:** Hot springs or underground reservoirs.

#### 2.2. Heat Sink (Rejection Reservoir)

*   **Definition:** A heat sink is a reservoir that absorbs thermal energy from a system.
*   **Temperature:** Its temperature ($T_L$) is lower than the temperature of the system it interacts with.
*   **Mechanism:** It receives heat *from* the system.
*   **Examples:**
    *   **Atmosphere:** The surrounding air often acts as a heat sink for many devices. (P.K. Nag, Engineering Thermodynamics)
    *   **Rivers/Lakes/Oceans:** Used as heat sinks in thermal power plants to condense steam.
    *   **Cooling Towers:** Artificial structures designed to dissipate heat to the atmosphere.
    *   **Ice:** Can act as a heat sink at 0°C.

---

### 3. Idealized Nature and Practical Considerations (K1, K2)

*   **Idealization:** Real-world reservoirs are not truly infinite. However, they are considered "large" enough that their temperature change is negligible for the purpose of thermodynamic analysis.
*   **Practical Approximation:** In engineering applications, we select substances or bodies that have sufficiently large thermal mass (mass x specific heat) to approximate reservoir behavior.
*   **Temperature Difference:** A finite temperature difference is always required for heat transfer to occur between a system and a reservoir. However, for idealized reservoirs, this temperature difference is assumed to be infinitesimally small, allowing for quasi-equilibrium heat transfer.

---

### 4. Applications in Thermodynamic Cycles (K3, CO3)

Thermal energy reservoirs are central to the analysis of thermodynamic cycles, particularly heat engines and refrigeration cycles.

#### 4.1. Heat Engines

*   **Definition:** A heat engine is a device that operates in a cycle and produces work by receiving heat from a high-temperature reservoir and rejecting waste heat to a low-temperature reservoir.
*   **Interaction with Reservoirs:**
    *   **High-Temperature Reservoir ($T_H$):** Supplies heat ($Q_H$) to the working substance.
    *   **Low-Temperature Reservoir ($T_L$):** Receives rejected heat ($Q_L$) from the working substance.
*   **First Law Analysis:** For a heat engine operating in a cycle, the net work output ($W_{net,out}$) is equal to the net heat transfer, which is the difference between the heat absorbed from the high-temperature reservoir and the heat rejected to the low-temperature reservoir.
    $$W_{net,out} = Q_H - Q_L$$
    (Cengel et al., Thermodynamics: an engineering approach)

#### 4.2. Refrigerators and Heat Pumps

*   **Definition:** Refrigerators and heat pumps are devices that operate in a cycle and transfer heat from a low-temperature reservoir to a high-temperature reservoir, requiring work input.
*   **Interaction with Reservoirs:**
    *   **Low-Temperature Reservoir ($T_L$):** Heat ($Q_L$) is absorbed from this reservoir by the working substance.
    *   **High-Temperature Reservoir ($T_H$):** Heat ($Q_H$) is rejected to this reservoir by the working substance.
    *   **Work Input ($W_{net,in}$):** Required to accomplish this heat transfer.
*   **First Law Analysis:**
    *   **Refrigerator:** The goal is to remove heat from the cold space. The performance is measured by the coefficient of performance ($COP_R$).
        $$Q_L + W_{net,in} = Q_H$$
        $$COP_R = \frac{Q_L}{W_{net,in}}$$
    *   **Heat Pump:** The goal is to deliver heat to the hot space. The performance is measured by the coefficient of performance ($COP_{HP}$).
        $$Q_H = Q_L + W_{net,in}$$
        $$COP_{HP} = \frac{Q_H}{W_{net,in}}$$
    (P.K. Nag, Engineering Thermodynamics)
    (Moran & Shapiro, Fundamentals of Engineering Thermodynamics)

---

### 5. Examples of Thermal Energy Reservoir Applications (K3)

*   **Steam Power Plant:**
    *   **High-Temperature Reservoir:** Furnace (burning coal, natural gas, etc.) providing heat to the boiler.
    *   **Low-Temperature Reservoir:** River, lake, or atmosphere (via cooling towers) where steam is condensed.
*   **Internal Combustion Engine:**
    *   **High-Temperature Reservoir:** Combustion gases within the cylinder.
    *   **Low-Temperature Reservoir:** The surrounding atmosphere, or a cooling system (radiator) that dissipates heat to the atmosphere.
*   **Household Refrigerator:**
    *   **Low-Temperature Reservoir:** The interior of the refrigerator (food and air).
    *   **High-Temperature Reservoir:** The kitchen or ambient air.

---

### 6. Practice Questions and Exercises

**Question 1 (K1, K2):**
Define a thermal energy reservoir and list its two main types.

**Answer:**
A thermal energy reservoir is a body or substance that can supply or absorb large amounts of thermal energy with negligible change in its temperature. The two main types are heat sources (which supply heat) and heat sinks (which absorb heat).

**Question 2 (K3):**
A heat engine absorbs 1000 kJ of heat from a high-temperature reservoir at 600 K and rejects 600 kJ of heat to a low-temperature reservoir at 300 K.
(a) Calculate the net work output of the heat engine.
(b) Calculate the thermal efficiency of the heat engine.

**Answer:**
(a) Using the First Law for a cycle: $W_{net,out} = Q_H - Q_L = 1000 \text{ kJ} - 600 \text{ kJ} = 400 \text{ kJ}$.
(b) Thermal efficiency ($\eta_{th}$) is defined as the ratio of net work output to heat input:
$\eta_{th} = \frac{W_{net,out}}{Q_H} = \frac{400 \text{ kJ}}{1000 \text{ kJ}} = 0.40$ or 40%.

**Question 3 (K3):**
A refrigerator is to remove heat from the refrigerated space at a rate of 60 kJ/min to maintain its temperature at 4°C. If the heat is rejected to the ambient air at 25°C, determine the minimum power input required to operate the refrigerator.

**Answer:**
The refrigerator absorbs heat ($Q_L$) from the cold space and rejects heat ($Q_H$) to the ambient air (hot reservoir). The temperatures must be in Kelvin.
$T_L = 4^\circ\text{C} + 273.15 = 277.15 \text{ K}$
$T_H = 25^\circ\text{C} + 273.15 = 298.15 \text{ K}$
The rate of heat removal $Q_L = 60 \text{ kJ/min}$.

For a refrigerator, the maximum coefficient of performance ($COP_R$) is achieved when operating on the Carnot cycle, which is given by:
$COP_{R,max} = \frac{T_L}{T_H - T_L}$
$COP_{R,max} = \frac{277.15 \text{ K}}{298.15 \text{ K} - 277.15 \text{ K}} = \frac{277.15}{21} \approx 13.20$

From the definition of COP: $COP_R = \frac{Q_L}{W_{net,in}}$
Therefore, the minimum power input ($W_{net,in}$) required is:
$W_{net,in} = \frac{Q_L}{COP_{R,max}}$
$W_{net,in} = \frac{60 \text{ kJ/min}}{13.20}$
$W_{net,in} \approx 4.545 \text{ kJ/min}$

To express this in kW (kJ/s):
$W_{net,in} \approx \frac{4.545 \text{ kJ/min}}{60 \text{ s/min}} \approx 0.0758 \text{ kW}$

The minimum power input required is approximately 0.0758 kW.

---

### 7. Important Points to Remember

*   **Constant Temperature Assumption:** The core idea of a thermal reservoir is its ability to exchange heat without changing its temperature.
*   **Scale Matters:** The "largeness" of a reservoir is relative to the system it interacts with.
*   **Heat Transfer Requires $\Delta T$:** A finite (though often idealized as infinitesimal) temperature difference is necessary for heat transfer.
*   **Foundation for Cycles:** Reservoirs are critical for defining and analyzing the performance of heat engines, refrigerators, and heat pumps.
*   **Ideal vs. Real:** While idealized reservoirs are used in theoretical analysis, practical applications involve approximations using substances with high thermal mass.
*   **Energy Balance:** The First Law of Thermodynamics applied to cycles always involves the heat interactions with these reservoirs.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 8. Textbook References and Alignment with Course Outcomes

This topic directly supports several course outcomes:

*   **CO1: Understand basic concepts of thermodynamics (K1, K2):** The definition and types of thermal energy reservoirs are fundamental thermodynamic concepts.
*   **CO2: Understand the laws of thermodynamics (K1, K2):** Reservoirs are essential for understanding the operation and energy balance of devices governed by the First Law.
*   **CO3: Conduct first law analysis of open and closed systems (K3):** The calculations in the practice questions demonstrate how the First Law is applied to cyclic devices that interact with reservoirs.

**Textbook References:**

*   **Cengel et al., Thermodynamics: an engineering approach:** Provides a thorough introduction to reservoirs in the context of heat engines, refrigerators, and heat pumps, emphasizing the First Law analysis. (Chapter 1 & 6 in relevant editions)
*   **P.K. Nag, Engineering Thermodynamics:** Similar to Cengel, it covers reservoirs as essential components for thermodynamic cycles and their energy balances. (Chapter 2 & 5 in relevant editions)
*   **Moran & Shapiro, Fundamentals of Engineering Thermodynamics:** Discusses reservoirs in the context of thermodynamic cycles and the second law, but the First Law implications are foundational. (Chapter 1 & 7 in relevant editions)
*   **Sonntag, Borgnakke, & VanWylen, Fundamentals of Thermodynamics:** Presents reservoirs as idealized concepts for analyzing energy transfer in cycles. (Chapter 1 & 9 in relevant editions)
*   **Ansermet & Brechet, Thermodynamics: Principles and Applications:** While focusing on fundamental principles, the role of thermal reservoirs in defining heat transfer and energy conversion is implicitly covered.

---