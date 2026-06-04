---
title: "Thermodynamic cycles -Carnot Cycle -Derivation of efficiency (problems on efficiency)"
subject: "INTRODUCTION TO MECHANICAL ENGINEERING & CIVIL ENGINEERING"
module: "Module 1: General introduction to Mechanical Engineering :"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc0912aff"
status: "completed"
scrapedAt: "2026-05-20T18:30:21.595Z"
---
# Module 1: General Introduction to Mechanical Engineering - Thermodynamic Cycles: The Carnot Cycle

Welcome to our journey into the fascinating world of mechanical engineering! Today, we’re going to dive into a fundamental concept that underpins so much of what we do: **Thermodynamic Cycles**. Think of these cycles as the heartbeats of many machines, dictating how energy is converted, often from heat to useful work.

Our focus today is on perhaps the most famous and theoretically important of these cycles: the **Carnot Cycle**. Understanding the Carnot cycle is crucial because it sets the ultimate benchmark for efficiency for any heat engine operating between two temperature reservoirs. It's like the Olympic gold medal for energy conversion – the best you can possibly achieve. This topic directly relates to **Course Outcome 1 (CO1)**, as it highlights the foundational principles of energy conversion that are central to mechanical engineering, and **Course Outcome 2 (CO2)**, by introducing the core concepts of thermodynamics as applied to engines and refrigeration.

## What is a Thermodynamic Cycle?

Before we get to Carnot, let’s clarify what a thermodynamic cycle is. Imagine a process where a working substance, like a gas or a fluid, undergoes a series of changes – pressure, volume, and temperature all change. The key is that after these changes, the substance returns to its *original* state. It’s like a round trip. During this journey, the system might absorb heat, reject heat, and do work, or have work done on it.

Why do we care about cycles? Because many practical devices, like engines in cars (internal combustion engines), power plants, and refrigerators, operate on cycles. They are designed to continuously convert energy, usually thermal energy, into mechanical work, or vice-versa.

## The Carnot Cycle: A Theoretical Ideal

So, what makes the Carnot cycle so special? Developed by Sadi Carnot in the early 19th century, it’s an idealized, reversible cycle consisting of **four reversible processes**:

1.  **Isothermal Expansion:** The working substance absorbs heat from a high-temperature reservoir and expands at a constant temperature.
2.  **Adiabatic Expansion:** The working substance continues to expand, but now without any heat exchange with its surroundings. Its temperature drops.
3.  **Isothermal Compression:** The working substance rejects heat to a low-temperature reservoir and is compressed at a constant temperature.
4.  **Adiabatic Compression:** The working substance is further compressed without any heat exchange, and its temperature rises back to its initial state.

Think of it like this: Imagine a perfectly efficient steam engine. The isothermal expansion is like heating water to steam at a constant, high temperature (like boiling it). The adiabatic expansion is like the steam doing work to push a piston, losing energy (and thus temperature) as it does so. Then, isothermal compression is like cooling that steam back down at a constant, low temperature, and adiabatic compression is like compressing that cooled substance back to its starting point.

**Key Point:** The Carnot cycle is *reversible*. This means it can be run forward (as a heat engine) or backward (as a refrigerator or heat pump) with no net loss of energy due to irreversibility. Real-world cycles are always irreversible, which is why their efficiencies are always less than the Carnot efficiency.

## Derivation of Carnot Efficiency

Now, let’s get down to the math. This is where we calculate just how efficient the Carnot cycle is. We’ll be using the First Law of Thermodynamics, which states that the change in internal energy of a system is equal to the heat added to the system minus the work done by the system ($\Delta U = Q - W$). For an ideal gas, internal energy ($U$) depends only on temperature.

Let's denote:
*   $T_H$ = Temperature of the high-temperature reservoir (in Kelvin)
*   $T_L$ = Temperature of the low-temperature reservoir (in Kelvin)
*   $Q_H$ = Heat absorbed from the high-temperature reservoir
*   $Q_L$ = Heat rejected to the low-temperature reservoir
*   $W$ = Net work done by the cycle

The efficiency ($\eta$) of any heat engine is defined as the ratio of the net work done to the heat absorbed:
$\eta = \frac{W}{Q_H}$

From the First Law, for a complete cycle, the net work done is the difference between the heat absorbed and the heat rejected: $W = Q_H - Q_L$.
So, we can rewrite the efficiency as:
$\eta = \frac{Q_H - Q_L}{Q_H} = 1 - \frac{Q_L}{Q_H}$

For a reversible cycle, like the Carnot cycle, there's a crucial relationship between heat transfer and temperature. For any reversible process involving heat transfer $Q$ at a constant absolute temperature $T$, the entropy change of the system is $\Delta S = Q/T$. Since the Carnot cycle is a cycle, the total entropy change of the system must be zero.

Consider the entropy changes for each process:
1.  **Isothermal Expansion (1-2):** Heat $Q_H$ is absorbed at $T_H$. Entropy change $\Delta S_1 = Q_H/T_H$.
2.  **Adiabatic Expansion (2-3):** No heat transfer, so entropy change $\Delta S_2 = 0$.
3.  **Isothermal Compression (3-4):** Heat $Q_L$ is rejected at $T_L$. Since heat is rejected, $Q_L$ is negative. Entropy change $\Delta S_3 = -Q_L/T_L$.
4.  **Adiabatic Compression (4-1):** No heat transfer, so entropy change $\Delta S_4 = 0$.

For the entire cycle to be reversible, the total entropy change of the system must be zero:
$\Delta S_{total} = \Delta S_1 + \Delta S_2 + \Delta S_3 + \Delta S_4 = 0$
$\frac{Q_H}{T_H} + 0 - \frac{Q_L}{T_L} + 0 = 0$
$\frac{Q_H}{T_H} = \frac{Q_L}{T_L}$

This is a *very* important result for reversible cycles! It tells us that the ratio of heat absorbed to heat rejected is equal to the ratio of the absolute temperatures of the reservoirs. From this, we get:
$\frac{Q_L}{Q_H} = \frac{T_L}{T_H}$

Now, substitute this back into our efficiency formula:
$\eta_{Carnot} = 1 - \frac{Q_L}{Q_H} = 1 - \frac{T_L}{T_H}$

**This is the Carnot efficiency formula!** Remember, $T_L$ and $T_H$ **must be in Kelvin**. This is a common pitfall – always convert Celsius to Kelvin (K = °C + 273.15).

**Why is this significant?** It means that the efficiency of a heat engine is fundamentally limited by the temperatures of the hot and cold reservoirs it operates between. No engine can be more efficient than a Carnot engine operating between the same two temperatures. This is a cornerstone of **Course Outcome 1 (CO1)**, as it defines the theoretical limits of energy conversion processes.

## Problems on Carnot Efficiency

Let’s solidify our understanding with some examples. These types of problems are common in exams, so pay close attention to the units and the concept.

**Example 1: A Simple Carnot Engine**

A Carnot engine operates between a hot reservoir at 600 K and a cold reservoir at 300 K. If it absorbs 1000 kJ of heat from the hot reservoir, how much work does it produce, and how much heat does it reject?

*   **Given:**
    *   $T_H = 600$ K
    *   $T_L = 300$ K
    *   $Q_H = 1000$ kJ

*   **Find:**
    *   $\eta_{Carnot}$
    *   $W$
    *   $Q_L$

*   **Solution:**
    1.  **Calculate Carnot Efficiency:**
        $\eta_{Carnot} = 1 - \frac{T_L}{T_H} = 1 - \frac{300 \text{ K}}{600 \text{ K}} = 1 - 0.5 = 0.5$
        So, the efficiency is 50%. This means that for every 100 kJ of heat supplied, 50 kJ will be converted into work.

    2.  **Calculate Work Done (W):**
        We know $\eta = W/Q_H$.
        $W = \eta \times Q_H = 0.5 \times 1000 \text{ kJ} = 500 \text{ kJ}$

    3.  **Calculate Heat Rejected ($Q_L$):**
        Using $W = Q_H - Q_L$:
        $Q_L = Q_H - W = 1000 \text{ kJ} - 500 \text{ kJ} = 500 \text{ kJ}$
        Alternatively, using the ratio: $Q_L/Q_H = T_L/T_H \implies Q_L = Q_H \times (T_L/T_H) = 1000 \text{ kJ} \times (300/600) = 500 \text{ kJ}$.

*   **Remember this:** A 50% efficient engine converts half the heat input into work and rejects the other half.

**Example 2: Improving Efficiency**

A Carnot engine operates between $127^\circ$C and $27^\circ$C. What is its efficiency? If we want to increase the efficiency by 20% of its original value, what is the new hot reservoir temperature if the cold reservoir temperature remains the same?

*   **Given:**
    *   $T_{H1} = 127^\circ$C
    *   $T_{L1} = 27^\circ$C
    *   Desired efficiency increase = 20% of original $\eta$.

*   **Find:**
    *   Initial $\eta_{Carnot}$
    *   New $T_{H2}$ for a 20% increase in efficiency.

*   **Solution:**
    1.  **Convert temperatures to Kelvin:**
        $T_{H1} = 127 + 273.15 = 400.15$ K (let's use 400 K for simplicity in calculations, common in textbook problems)
        $T_{L1} = 27 + 273.15 = 300.15$ K (let's use 300 K)

    2.  **Calculate initial Carnot Efficiency ($\eta_1$):**
        $\eta_1 = 1 - \frac{T_L}{T_H} = 1 - \frac{300 \text{ K}}{400 \text{ K}} = 1 - 0.75 = 0.25$
        So, the initial efficiency is 25%.

    3.  **Calculate the target efficiency ($\eta_2$):**
        We want to increase efficiency by 20% *of its original value*.
        Increase in efficiency = 20% of 0.25 = $0.20 \times 0.25 = 0.05$.
        New efficiency $\eta_2 = \eta_1 + \text{Increase} = 0.25 + 0.05 = 0.30$ or 30%.

    4.  **Calculate the new hot reservoir temperature ($T_{H2}$):**
        The cold reservoir temperature remains $T_L = 300$ K. The new efficiency is $\eta_2 = 0.30$.
        $\eta_2 = 1 - \frac{T_L}{T_{H2}}$
        $0.30 = 1 - \frac{300 \text{ K}}{T_{H2}}$
        $\frac{300 \text{ K}}{T_{H2}} = 1 - 0.30 = 0.70$
        $T_{H2} = \frac{300 \text{ K}}{0.70} \approx 428.57$ K

    5.  **Convert back to Celsius if required:**
        $T_{H2} (\text{°C}) = 428.57 - 273.15 \approx 155.42^\circ$C.

*   **Takeaway:** To increase the efficiency from 25% to 30%, the hot reservoir temperature needs to be raised from $127^\circ$C to approximately $155.4^\circ$C, while keeping the cold reservoir at $27^\circ$C. This highlights that increasing the temperature difference between the reservoirs is a key way to improve engine efficiency, a principle used in designing more efficient power plants and engines. This relates to **Course Outcome 2 (CO2)** as it shows a practical aspect of improving thermal systems.

**Example 3: What if the efficiency *is* the Carnot efficiency?**

Suppose a heat engine operates with an efficiency of 40%. If it rejects 600 kJ of heat to the surroundings, what is the heat input and the work output? Assume this engine is operating on a Carnot cycle.

*   **Given:**
    *   $\eta = 0.40$
    *   $Q_L = 600$ kJ
    *   Cycle is Carnot (meaning $Q_L/Q_H = T_L/T_H$)

*   **Find:**
    *   $Q_H$
    *   $W$

*   **Solution:**
    1.  **Use efficiency formula:**
        $\eta = 1 - \frac{Q_L}{Q_H}$
        $0.40 = 1 - \frac{600 \text{ kJ}}{Q_H}$
        $\frac{600 \text{ kJ}}{Q_H} = 1 - 0.40 = 0.60$
        $Q_H = \frac{600 \text{ kJ}}{0.60} = 1000 \text{ kJ}$

    2.  **Calculate work output:**
        $W = Q_H - Q_L = 1000 \text{ kJ} - 600 \text{ kJ} = 400 \text{ kJ}$
        Alternatively, $W = \eta \times Q_H = 0.40 \times 1000 \text{ kJ} = 400 \text{ kJ}$.

*   **Important Note:** The fact that it's a Carnot cycle in this problem isn't strictly needed for calculating $Q_H$ and $W$ from efficiency and $Q_L$. However, if the question had asked for the temperatures of the reservoirs, then the Carnot assumption ($Q_L/Q_H = T_L/T_H$) would be essential. For instance, if we were told $T_L = 300$ K, we could find $T_H$ because $300/T_H = 600/1000 = 0.6$, so $T_H = 300/0.6 = 500$ K.

## Connection to Civil Engineering

While the Carnot cycle is primarily a mechanical engineering concept related to energy conversion in engines and power systems (directly linking to **CO1** and **CO2**), its fundamental principles of energy transfer and efficiency have broader implications that touch upon civil engineering, especially in areas like building energy systems and sustainable design.

For example, in **HVAC (Heating, Ventilation, and Air Conditioning)** systems, which are a significant part of civil infrastructure design (**CO6**), the efficiency of heat pumps and refrigerators is governed by thermodynamic principles. The Carnot cycle provides the theoretical maximum efficiency for these systems, guiding engineers in selecting and designing systems that minimize energy consumption. Understanding these limits helps civil engineers make informed decisions about material selection, building insulation, and system design to achieve energy-efficient buildings, aligning with the growing focus on sustainability in construction, a concept within **CO4** and **CO5**.

Furthermore, the concept of **energy conservation** and **efficiency** is paramount in modern civil engineering practices, from power generation for infrastructure to the operational efficiency of buildings.

## Summary and Key Takeaways

*   **Thermodynamic Cycle:** A process where a working substance returns to its initial state, often involving heat and work transfer.
*   **Carnot Cycle:** An idealized, reversible cycle with four processes (isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression).
*   **Carnot Efficiency:** The maximum possible efficiency for any heat engine operating between two given temperatures, given by $\eta_{Carnot} = 1 - \frac{T_L}{T_H}$.
*   **Absolute Temperatures:** Always use Kelvin for $T_L$ and $T_H$ in the efficiency formula.
*   **Significance:** The Carnot cycle sets the theoretical limit for heat engine efficiency, directly related to the operating temperatures.

Remember this: The Carnot cycle is a benchmark. Real engines will always be less efficient due to irreversibilities like friction and heat loss. However, understanding the ideal helps us quantify the losses and strive for improvements.

***

## Sample Questions with Answers

**1. Conceptual Question:**
**Q1:** Why is the Carnot cycle considered the most efficient cycle possible between two given temperature reservoirs?
**A1:** The Carnot cycle is the most efficient because all its processes are reversible. Reversible processes have no inherent losses due to friction, turbulence, or finite rate of heat transfer. By definition, the Carnot cycle consists of two isothermal and two adiabatic reversible processes. Any deviation from these conditions, or the introduction of irreversibilities, would result in a lower efficiency. This aligns with the Second Law of Thermodynamics, which states that no heat engine can be more efficient than a reversible engine operating between the same temperature limits.

**2. Calculation-Based Question (Exam-Oriented):**
**Q2:** A geothermal power plant extracts heat from the Earth's crust at $150^\circ$C and rejects waste heat to the atmosphere at $20^\circ$C. What is the maximum possible efficiency of this power plant, assuming it operates as a Carnot engine?
**A2:**
*   **Identify given temperatures:**
    *   Hot reservoir temperature, $T_H = 150^\circ$C
    *   Cold reservoir temperature, $T_L = 20^\circ$C
*   **Convert temperatures to Kelvin:**
    *   $T_H = 150 + 273.15 = 423.15$ K
    *   $T_L = 20 + 273.15 = 293.15$ K
*   **Apply Carnot efficiency formula:**
    $\eta_{Carnot} = 1 - \frac{T_L}{T_H}$
    $\eta_{Carnot} = 1 - \frac{293.15 \text{ K}}{423.15 \text{ K}}$
    $\eta_{Carnot} \approx 1 - 0.6927$
    $\eta_{Carnot} \approx 0.3073$ or 30.73%
*   **Answer:** The maximum possible efficiency of this power plant is approximately 30.73%.

**3. Application/Comparison Question:**
**Q3:** If a real heat engine operating between the same temperature limits as in Q2 has an efficiency of 25%, what does this tell us about the engine?
**A3:** This tells us that the real heat engine is less efficient than the ideal Carnot engine. The difference in efficiency (30.73% - 25% = 5.73%) is due to irreversibilities present in the real engine. These irreversibilities could include friction, heat loss to the surroundings, incomplete combustion, or non-ideal expansion/compression processes. This highlights the practical challenge of achieving theoretical efficiencies and the importance of minimizing losses in engineering design. This connects to **CO1** and **CO2**.

**4. Derivation-Related Question (Conceptual Understanding):**
**Q4:** Explain how the First and Second Laws of Thermodynamics are implicitly used in the derivation of Carnot efficiency.
**A4:**
*   **First Law of Thermodynamics:** Used to establish the relationship between heat added ($Q_H$), heat rejected ($Q_L$), and work done ($W$). Specifically, for a cycle, the net work done is $W = Q_H - Q_L$. The efficiency is then expressed as $\eta = W/Q_H = (Q_H - Q_L)/Q_H = 1 - Q_L/Q_H$.
*   **Second Law of Thermodynamics:** Crucially, the Second Law, when applied to reversible processes (specifically in the context of entropy), leads to the relationship $Q_L/Q_H = T_L/T_H$ for a reversible cycle. This allows us to replace the heat ratio with the temperature ratio, yielding the Carnot efficiency formula $\eta_{Carnot} = 1 - T_L/T_H$. The Second Law also establishes that no engine can be more efficient than a reversible engine operating between the same temperature limits.
