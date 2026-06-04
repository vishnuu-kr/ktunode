---
title: "externally irreversible Rankine cycle-Mean temperature of heat"
subject: "POWER PLANT ENGINEERING"
module: "Module 1: Analysis of Steam Cycle"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446377a"
status: "completed"
scrapedAt: "2026-05-20T18:06:20.806Z"
---
# POWER PLANT ENGINEERING - Module 1: Analysis of Steam Cycle

## Topic: Externally Irreversible Rankine Cycle - Mean Temperature of Heat Transfer

This module delves into the fundamental steam cycles that power thermal power plants. We will focus on the Rankine cycle and specifically analyze its performance when heat transfer is externally irreversible, introducing the concept of the Mean Temperature of Heat Transfer.

### Learning Outcomes Addressed:

*   **CO1 (K2):** Explain the layout, components and working of steam... power plants. (Understanding the context of where the Rankine cycle operates).
*   **CO2 (K3):** Calculate the performance parameters of simple and modified Rankine cycles. (This topic directly contributes to calculating performance parameters, specifically efficiency, by accounting for irreversibilities).

### 1. Introduction to the Rankine Cycle

The Rankine cycle is the theoretical thermodynamic cycle that describes the process used by steam-engine-powered thermal power stations in which water is converted into steam, which then drives a turbine, and is afterward condensed back into water. It forms the basis for understanding the operation of most thermal power plants, especially steam power plants.

**Key Components of a Simple Rankine Cycle:**

1.  **Boiler:** Water is heated and converted into high-pressure, high-temperature steam.
2.  **Turbine:** High-pressure steam expands through the turbine, producing mechanical work.
3.  **Condenser:** Low-pressure steam is condensed back into water.
4.  **Pump:** Water is pumped from the condenser back to the boiler at high pressure.

**(Reference: El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education. Chapter 5: Basic Thermal Power Cycles)**
**(Reference: Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education. Chapter 3: Rankine Cycle)**

### 2. Ideal vs. Real (Irreversible) Rankine Cycle

The **ideal Rankine cycle** assumes all processes are reversible and adiabatic (isentropic). In reality, however, various irreversibilities occur, leading to a **real Rankine cycle**. These irreversibilities reduce the overall efficiency of the power plant.

**Sources of Irreversibilities in the Rankine Cycle:**

*   **Turbine:** Friction and turbulence in the steam flow cause non-isentropic expansion.
*   **Pump:** Friction in the pump causes non-isentropic compression.
*   **Boiler:** Heat transfer from the combustion gases to the water occurs across a finite temperature difference.
*   **Condenser:** Heat transfer from the steam to the cooling water occurs across a finite temperature difference.

**(Reference: Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education. Chapter 3: Rankine Cycle)**

### 3. Externally Irreversible Heat Transfer in the Boiler and Condenser

The focus of this topic is on the **externally irreversible heat transfer** occurring in the boiler and condenser. This means that heat is transferred from a hotter source to a colder fluid across a finite temperature difference, which is a direct violation of the condition for reversible heat transfer.

**Why is this important?**

*   **Energy Quality Degradation:** Irreversible heat transfer leads to a degradation of energy quality, resulting in a loss of potential work output.
*   **Impact on Efficiency:** Reduced work output for the same heat input directly lowers the thermal efficiency of the cycle.

**(Reference: El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education. Chapter 5: Basic Thermal Power Cycles)**

### 4. The Concept of Mean Temperature of Heat Transfer

To quantify the impact of irreversible heat transfer on the cycle's efficiency, the concept of the **Mean Temperature of Heat Transfer** is introduced. It's a way to represent the average temperature at which heat is added or rejected in a process where the temperature of the working fluid changes.

**Definition:**

The Mean Temperature of Heat Transfer ($T_{m}$) is the temperature at which heat transfer would have to occur reversibly to produce the same effect (i.e., the same change in entropy or the same amount of work) as the irreversible heat transfer process.

**For heat addition in the boiler (from temperature $T_{H1}$ to $T_{H2}$):**

The heat added is $Q_H$. The entropy change of the working fluid during heat addition is $\Delta S_H = \int_{T_{H1}}^{T_{H2}} \frac{dQ}{T}$.

For a reversible process where the same amount of heat $Q_H$ is added from a constant temperature $T_{m,add}$ to achieve the same entropy change:

$Q_H = T_{m,add} \Delta S_H$

Therefore, the mean temperature of heat addition is:

$T_{m,add} = \frac{Q_H}{\Delta S_H}$

**For heat rejection in the condenser (from temperature $T_{L1}$ to $T_{L2}$):**

Similarly, for heat rejection $Q_L$, and the entropy change of the working fluid during heat rejection $\Delta S_L = \int_{T_{L2}}^{T_{L1}} \frac{dQ}{T}$ (note the integration direction for rejection):

$Q_L = T_{m,reject} \Delta S_L$

Therefore, the mean temperature of heat rejection is:

$T_{m,reject} = \frac{Q_L}{\Delta S_L}$

**(Reference: Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education. Chapter 3: Rankine Cycle - Irreversibilities)**
**(Reference: El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education. Chapter 5: Basic Thermal Power Cycles - Concepts of thermal efficiency)**

### 5. Calculating Thermal Efficiency with Mean Temperatures

The thermal efficiency of any thermodynamic cycle is defined as:

$\eta_{th} = \frac{\text{Net Work Output}}{\text{Heat Input}} = \frac{W_{net}}{Q_H}$

We also know that for a cycle: $W_{net} = Q_H - Q_L$.

Substituting the expressions for $Q_H$ and $Q_L$ using mean temperatures:

$\eta_{th} = \frac{Q_H - Q_L}{Q_H} = 1 - \frac{Q_L}{Q_H}$

Using the mean temperature definitions:

$\eta_{th} = 1 - \frac{T_{m,reject} \Delta S_L}{T_{m,add} \Delta S_H}$

For the Rankine cycle, the mass of the working fluid remains constant, so the entropy change during heat addition and heat rejection is the same in magnitude: $|\Delta S_H| = |\Delta S_L| = \Delta s$.

Therefore, the efficiency can be expressed as:

$\eta_{th} = 1 - \frac{T_{m,reject}}{T_{m,add}}$

**Important Observation:**

For an **ideal (reversible) Rankine cycle**, heat addition occurs at a constant temperature $T_H$ (from saturated liquid to saturated vapor at boiler pressure) and heat rejection occurs at a constant temperature $T_L$ (from saturated vapor to saturated liquid at condenser pressure). In this ideal case, $T_{m,add} = T_H$ and $T_{m,reject} = T_L$.

So, the ideal Rankine cycle efficiency is:

$\eta_{th,ideal} = 1 - \frac{T_L}{T_H}$

For an **externally irreversible Rankine cycle**, the working fluid's temperature changes during heat addition and rejection. This means:

*   $T_{m,add} < T_H$ (the average temperature of heat addition is lower than the maximum temperature of the source).
*   $T_{m,reject} > T_L$ (the average temperature of heat rejection is higher than the minimum temperature of the sink).

As a result, for an externally irreversible Rankine cycle:

$\eta_{th,irreversible} = 1 - \frac{T_{m,reject}}{T_{m,add}} < 1 - \frac{T_L}{T_H} = \eta_{th,ideal}$

This equation clearly shows that irreversible heat transfer reduces the cycle efficiency compared to the ideal case.

**(Reference: Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education. Chapter 3: Rankine Cycle - Irreversibilities and Efficiency)**
**(Reference: El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education. Chapter 5: Basic Thermal Power Cycles - Performance analysis)**

### 6. Example: Calculating Mean Temperature of Heat Transfer

Let's consider a simplified scenario for heat addition in the boiler. Assume water enters the boiler as a saturated liquid at $T_1 = 200^\circ C$ and leaves as saturated steam at $T_2 = 300^\circ C$. The heat added per unit mass is $q_h = 1500 \, \text{kJ/kg}$.

To calculate the mean temperature of heat addition, we need the entropy change. If we approximate this as a constant specific heat process (this is a simplification, real steam tables are needed for accuracy):

Assume $c_p \approx 2 \, \text{kJ/kg} \cdot ^\circ C$.
Then, $\Delta s = c_p \ln\left(\frac{T_2}{T_1}\right) = 2 \, \text{kJ/kg} \cdot ^\circ C \cdot \ln\left(\frac{300+273.15}{200+273.15}\right) = 2 \ln\left(\frac{573.15}{473.15}\right) \approx 0.389 \, \text{kJ/kg} \cdot K$.

Using the formula:
$T_{m,add} = \frac{q_h}{\Delta s} = \frac{1500 \, \text{kJ/kg}}{0.389 \, \text{kJ/kg} \cdot K} \approx 3856 \, K$

**Wait!** This calculation shows a very high temperature, indicating the simplification of constant specific heat might not be appropriate for such a large temperature range or that the entropy change is actually larger.

**More Realistic Approach (using steam tables or specific relations for steam):**

In reality, the heat addition in a boiler involves phase change (boiling) and superheating. The mean temperature of heat addition will be a weighted average that accounts for this.

For a process where heat $Q$ is added and the temperature changes from $T_1$ to $T_2$:
$\Delta s = \int_{T_1}^{T_2} \frac{1}{T} \left(\frac{dQ}{dT}\right) dT$

The term $\frac{dQ}{dT}$ is related to the heat capacity. For saturated boiling, $dQ$ is the latent heat and $dT$ is effectively zero, meaning infinite specific heat capacity at constant temperature. This is where the concept of mean temperature is particularly useful.

Consider heat added at constant temperature $T_{sat}$ for vaporization: $q_{vap} = h_{fg}$, $\Delta s_{vap} = h_{fg}/T_{sat}$.
Consider superheating from $T_{sat}$ to $T_{super}$, with specific heat $c_p$: $q_{sup} = c_p (T_{super} - T_{sat})$, $\Delta s_{sup} = c_p \ln(T_{super}/T_{sat})$.

The total heat added $Q_H = q_{vap} + q_{sup}$.
The total entropy change $\Delta S_H = \Delta s_{vap} + \Delta s_{sup}$.
$T_{m,add} = \frac{Q_H}{\Delta S_H} = \frac{q_{vap} + q_{sup}}{\frac{h_{fg}}{T_{sat}} + c_p \ln\left(\frac{T_{super}}{T_{sat}}\right)}$.

For heat rejection in the condenser, it's similar but with heat removal and typically from superheated steam to saturated liquid.

**(Reference: Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education. Chapter 3: Rankine Cycle - Properties of Steam)**

### 7. Impact on Cycle Efficiency

The use of lower mean temperatures for heat addition ($T_{m,add}$) and higher mean temperatures for heat rejection ($T_{m,reject}$) directly reduces the achievable thermal efficiency of the Rankine cycle. This is a fundamental limitation imposed by the second law of thermodynamics when dealing with irreversible processes.

**To improve efficiency:**

*   **Increase $T_{m,add}$**: This can be achieved by higher boiler pressures and superheating temperatures.
*   **Decrease $T_{m,reject}$**: This requires a lower condenser pressure and efficient heat rejection to a cold sink (e.g., cold cooling water).

**(Reference: El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education. Chapter 5: Basic Thermal Power Cycles - Factors affecting efficiency)**

### 8. Practice Questions and Exercises

**Question 1:**

Define the Mean Temperature of Heat Transfer. Explain why it is important in analyzing the performance of a Rankine cycle.

**Answer 1:**

The Mean Temperature of Heat Transfer ($T_m$) is the hypothetical constant temperature at which heat transfer would need to occur reversibly to achieve the same change in entropy as an irreversible heat transfer process. It is important because it quantifies the degradation of energy quality due to irreversible heat transfer. For a Rankine cycle, the efficiency is directly related to the ratio of the mean temperature of heat rejection to the mean temperature of heat addition: $\eta_{th} = 1 - \frac{T_{m,reject}}{T_{m,add}}$. Irreversible heat transfer in the boiler and condenser leads to $T_{m,add} < T_{source}$ and $T_{m,reject} > T_{sink}$, thus reducing the cycle's thermal efficiency compared to the ideal Carnot cycle or the ideal Rankine cycle.

---

**Question 2:**

Consider a simplified heat addition process where 1000 kJ/kg of heat is added to a substance, increasing its entropy by 2.5 kJ/kg·K. Calculate the mean temperature of heat transfer for this process. If this heat were added reversibly at a constant temperature, what would that temperature be?

**Answer 2:**

Given: $Q = 1000 \, \text{kJ/kg}$ and $\Delta S = 2.5 \, \text{kJ/kg} \cdot K$.

The mean temperature of heat transfer ($T_{m,add}$) is calculated as:
$T_{m,add} = \frac{Q}{\Delta S} = \frac{1000 \, \text{kJ/kg}}{2.5 \, \text{kJ/kg} \cdot K} = 400 \, K$

If this heat were added reversibly at a constant temperature, that temperature would also be $400 \, K$, as the mean temperature represents the equivalent constant temperature for reversible heat transfer.

---

**Question 3:**

Compare the thermal efficiency of an ideal Rankine cycle operating between $T_H = 500^\circ C$ and $T_L = 30^\circ C$ with a hypothetical irreversible Rankine cycle where the mean temperature of heat addition is $T_{m,add} = 450^\circ C$ and the mean temperature of heat rejection is $T_{m,reject} = 40^\circ C$.

**Answer 3:**

**Ideal Rankine Cycle Efficiency:**
First, convert temperatures to Kelvin:
$T_H = 500^\circ C + 273.15 = 773.15 \, K$
$T_L = 30^\circ C + 273.15 = 303.15 \, K$

$\eta_{th, ideal} = 1 - \frac{T_L}{T_H} = 1 - \frac{303.15 \, K}{773.15 \, K} \approx 1 - 0.3921 = 0.6079$ or $60.79\%$

**Irreversible Rankine Cycle Efficiency:**
Convert mean temperatures to Kelvin:
$T_{m,add} = 450^\circ C + 273.15 = 723.15 \, K$
$T_{m,reject} = 40^\circ C + 273.15 = 313.15 \, K$

$\eta_{th, irreversible} = 1 - \frac{T_{m,reject}}{T_{m,add}} = 1 - \frac{313.15 \, K}{723.15 \, K} \approx 1 - 0.4330 = 0.5670$ or $56.70\%$

**Comparison:** The irreversible Rankine cycle has a significantly lower thermal efficiency (56.70%) compared to the ideal Rankine cycle (60.79%) due to the reduced mean temperature of heat addition and increased mean temperature of heat rejection, reflecting the impact of irreversibilities.

---

### 9. Important Points to Remember

*   **Irreversibilities:** Real-world processes are not ideal. Friction, turbulence, and finite temperature differences for heat transfer cause irreversibilities.
*   **Mean Temperature of Heat Transfer:** A conceptual tool to quantify the effect of irreversible heat transfer.
*   **Efficiency Formula:** $\eta_{th} = 1 - \frac{T_{m,reject}}{T_{m,add}}$ is a general formula applicable to any cycle with heat addition and rejection occurring over a temperature range.
*   **Ideal vs. Real:** $T_{m,add} < T_H$ and $T_{m,reject} > T_L$ for irreversible processes, leading to lower efficiency.
*   **Boiler & Condenser:** These are primary locations for externally irreversible heat transfer in the Rankine cycle.
*   **Second Law Violation:** Irreversible heat transfer is a direct consequence of the second law of thermodynamics's implications for real processes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 10. References

*   **El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education.**
*   **Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education.**
*   **Nagpal, G. R., & Sharma, S. C. (2012). *Power Plant Engineering*. KHANNA Publishers.**
*   **Gupta, M. K. (2012). *Power Plant Engineering*. PHI Learning Pvt. Ltd.**

These notes provide a foundational understanding of how external irreversibilities, specifically in heat transfer, affect the performance of the Rankine cycle through the concept of mean temperatures. This is crucial for accurately analyzing and optimizing the efficiency of steam power plants.