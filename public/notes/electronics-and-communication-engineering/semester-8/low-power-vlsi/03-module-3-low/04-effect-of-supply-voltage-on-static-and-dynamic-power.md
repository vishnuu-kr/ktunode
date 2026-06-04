---
title: "Effect of Supply voltage on Static and Dynamic Power"
subject: "LOW POWER VLSI"
module: "Module 3: Low"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff685"
status: "completed"
scrapedAt: "2026-05-23T18:14:45.633Z"
---
# LOW POWER VLSI - Module 3: Low Power Techniques

## Topic: Effect of Supply Voltage on Static and Dynamic Power

### Introduction

The supply voltage ($V_{DD}$) is a critical parameter in VLSI design, directly impacting both performance and power consumption. Reducing $V_{DD}$ is one of the most effective strategies for achieving low power dissipation in integrated circuits. This module focuses on understanding how changes in supply voltage affect the two primary components of power consumption: static power and dynamic power.

### Course Outcomes Addressed

*   **CO1:** Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects. (While this topic is specifically about $V_{DD}$, scaling often involves voltage reduction, making this relevant).
*   **CO2:** Discuss the different sources of power dissipation in digital ICs. (This topic directly addresses how $V_{DD}$ influences these sources).
*   **CO3:** Describe the various approaches for power management in digital ICs. (Voltage scaling is a fundamental power management technique).

### Learning Outcomes Covered

*   Understanding the relationship between supply voltage and static power.
*   Understanding the relationship between supply voltage and dynamic power.
*   Analyzing the trade-offs between power, performance, and supply voltage.
*   Exploring techniques for reducing supply voltage.

---

## 1. Static Power Dissipation

Static power is the power consumed by an IC when its transistors are not actively switching. It is primarily due to leakage currents.

### Key Concepts & Definitions

*   **Leakage Current:** The small current that flows through a transistor even when it is supposed to be "off." This is a significant concern in modern scaled technologies.
*   **Subthreshold Leakage ($I_{sub}$):** The primary component of leakage in MOSFETs, especially in scaled technologies. It is exponentially dependent on the threshold voltage ($V_{th}$) and linearly dependent on the supply voltage ($V_{DD}$) and temperature.
*   **Gate Leakage ($I_{gate}$):** The current flowing through the gate oxide due to quantum mechanical tunneling. It becomes significant as the gate oxide thickness is reduced in advanced technologies.
*   **Junction Leakage ($I_{junction}$):** Leakage current from the drain and source diffusion regions to the substrate.

### Effect of Supply Voltage on Static Power

The relationship between supply voltage and static power is generally **less direct and less pronounced** compared to dynamic power. However, there are subtle effects:

*   **Subthreshold Leakage:** The subthreshold leakage current ($I_{sub}$) is **inversely exponential** to the threshold voltage ($V_{th}$). While it's not directly proportional to $V_{DD}$, reducing $V_{DD}$ can sometimes indirectly influence $V_{th}$ (e.g., through body biasing or short-channel effects).
    *   A simplified model for subthreshold leakage is often given as:
        $I_{sub} \propto e^{(V_{GS} - V_{th}) / (n V_T)}$
        where:
        *   $V_{GS}$ is the gate-source voltage (typically $V_{DD}$)
        *   $V_{th}$ is the threshold voltage
        *   $n$ is the subthreshold swing factor (ideally 1)
        *   $V_T$ is the thermal voltage ($kT/q$)

    *   **Observation:** As $V_{DD}$ decreases, $V_{GS}$ decreases. If $V_{DD}$ is reduced below or close to $V_{th}$, the subthreshold current will decrease. However, this also severely impacts performance.

*   **Gate Leakage:** Gate leakage is primarily dependent on the gate oxide thickness and the gate voltage. Reducing $V_{DD}$ generally **reduces the voltage across the gate oxide**, thus **decreasing gate leakage**. This is because the gate-source voltage ($V_{GS}$) is capped by $V_{DD}$.
    *   $I_{gate}$ is typically modeled as an exponential or Fowler-Nordheim tunneling current, which is highly sensitive to the voltage across the oxide.

*   **Junction Leakage:** Junction leakage is primarily dependent on the reverse bias voltage across the PN junction. As $V_{DD}$ is reduced, the reverse bias voltage across the drain-to-substrate junction (when the transistor is off) also reduces, leading to a **slight decrease in junction leakage**.

**Summary of Static Power vs. $V_{DD}$:**

*   **Overall Trend:** Static power generally **decreases** as $V_{DD}$ is reduced, but the relationship is **not as steep** as dynamic power.
*   **Dominant Factor:** In sub-90nm technologies and beyond, gate leakage can become a dominant static power component and is directly reduced by lowering $V_{DD}$. Subthreshold leakage, while exponential with $V_{th}$, also sees a reduction when $V_{DD}$ is brought closer to $V_{th}$.

**Reference (Conceptual):**
*   **Razavi (Design of Analog CMOS Integrated Circuits):** Discusses leakage mechanisms in detail, particularly subthreshold leakage in weak inversion, and how device parameters affect them. While focusing on analog circuits, the fundamental physics of leakage applies to digital circuits.
*   **Baker et al. (CMOS: Circuits Design, Layout and Simulation):** Provides insights into modern CMOS technology scaling, where leakage becomes a major power concern and the impact of reduced oxide thickness on gate leakage.

---

## 2. Dynamic Power Dissipation

Dynamic power is the power consumed when transistors are switching states. It is the dominant power component in most digital circuits during operation.

### Key Concepts & Definitions

*   **Switching Power ($P_{switch}$):** Power consumed during charging and discharging of the load capacitance.
*   **Short-Circuit Power ($P_{sc}$):** Power consumed when there is a direct path from $V_{DD}$ to ground through both the PMOS and NMOS transistors simultaneously during a switching event.
*   **Load Capacitance ($C_L$):** The total capacitance that needs to be charged or discharged for a transistor to switch state. This includes gate capacitance of subsequent transistors, diffusion capacitance, and interconnect capacitance.
*   **Switching Frequency ($f$):** The rate at which gates switch states.
*   **Activity Factor ($\alpha$):** The average number of times a gate switches per clock cycle.

### Effect of Supply Voltage on Dynamic Power

Dynamic power has a **strong and direct relationship** with the supply voltage.

*   **Switching Power:** The primary component of dynamic power is switching power, which is given by:
    $P_{switch} = \alpha C_L V_{DD}^2 f$

    *   **Impact of $V_{DD}$:** This equation clearly shows that switching power is **quadratically dependent** on the supply voltage.
    *   **Example:** If $V_{DD}$ is reduced by half, the switching power is reduced by a factor of four ($ (V_{DD}/2)^2 = V_{DD}^2/4 $). This is a significant reduction.

*   **Short-Circuit Power:** Short-circuit power occurs when both PMOS and NMOS are momentarily on during a transition. The current during this phase is approximately related to $(V_{DD} - V_{th})$.
    *   $P_{sc} \approx \frac{1}{3} \beta_{eq} (V_{DD} - V_{th})^2 T_{sc} f$
        where $\beta_{eq}$ is the equivalent transconductance parameter and $T_{sc}$ is the duration of the short circuit.
    *   **Impact of $V_{DD}$:** This component is **quadratically dependent** on $(V_{DD} - V_{th})$. Therefore, reducing $V_{DD}$ significantly reduces short-circuit power.

**Summary of Dynamic Power vs. $V_{DD}$:**

*   **Overall Trend:** Dynamic power **decreases quadratically** as $V_{DD}$ is reduced.
*   **Dominant Component:** Since dynamic power is often the dominant component of total power, reducing $V_{DD}$ is the most effective method for power reduction.

**Reference (Conceptual):**
*   **Sedra & Smith (Microelectronic Circuits):** Provides the fundamental physics of MOSFET operation and the derivation of current-voltage characteristics, which underpin the power equations. They explain how $V_{GS}$ (related to $V_{DD}$) influences drain current and thus power.
*   **Baker et al. (CMOS: Circuits Design, Layout and Simulation):** Explicitly details the dynamic power equation and its components ($C_L$, $f$, $V_{DD}$), emphasizing the quadratic relationship with $V_{DD}$ for power reduction strategies.

---

## 3. Trade-offs between Power, Performance, and Supply Voltage

Reducing $V_{DD}$ is a powerful technique for power reduction, but it comes with significant trade-offs, primarily in terms of performance (speed).

### Key Concepts & Definitions

*   **Performance (Speed):** The delay of a logic gate or a critical path in the circuit.
*   **Gate Delay:** The time it takes for a gate's output to respond to a change in its input. Gate delay is roughly proportional to $V_{DD} / (V_{DD} - V_{th})^2$ or similar expressions involving $V_{DD}$ and $V_{th}$ and load capacitance.
*   **Threshold Voltage ($V_{th}$):** The minimum gate-source voltage required to turn on a MOSFET.
*   **Body Biasing:** Applying a voltage to the substrate (body) of a transistor to alter its threshold voltage.
*   **Dynamic Voltage Scaling (DVS):** A power management technique where the supply voltage and clock frequency are dynamically adjusted based on the workload to optimize power consumption.

### Impact of $V_{DD}$ on Performance

*   **Gate Delay:** Gate delay is **inversely related** to the drive strength of the transistors. The drive strength (current) of a MOSFET is approximately proportional to $(V_{GS} - V_{th})^2$ in saturation.
    *   When $V_{DD}$ is reduced, $V_{GS}$ is reduced. This directly **reduces the drive current**.
    *   A lower drive current means it takes longer to charge or discharge the load capacitance, thus **increasing gate delay**.
    *   **Example:** If $V_{DD}$ is halved, the drive current can reduce significantly (e.g., by a factor of 4 or more depending on the $V_{th}$), leading to a substantial increase in delay.

*   **Critical Path Delay:** The overall performance of a digital circuit is determined by the delay of its critical path. Reducing $V_{DD}$ increases the delay of all gates in the circuit, potentially increasing the critical path delay and reducing the maximum operating frequency.

### The Power-Performance Trade-off Curve

There exists a fundamental trade-off between power consumption and performance.
*   **High $V_{DD}$:** High performance, high dynamic power, high static power (potentially).
*   **Low $V_{DD}$:** Low performance, low dynamic power, lower static power.

This trade-off can be visualized as a curve where reducing $V_{DD}$ moves the design point towards lower power but lower speed.

### Voltage Scaling Techniques

To mitigate the performance degradation associated with low $V_{DD}$, several techniques can be employed:

1.  **Threshold Voltage Scaling ($V_{th}$ Scaling):**
    *   Lowering $V_{th}$ improves the drive current and reduces gate delay, allowing for lower $V_{DD}$ operation while maintaining acceptable performance.
    *   **Problem:** Lowering $V_{th}$ significantly increases subthreshold leakage ($I_{sub}$), which increases static power. This is a major challenge in modern scaling.
    *   **Reference:** Discussed in detail in chapters concerning MOSFET device physics and scaling in texts like **Sedra & Smith** and **Razavi (Fundamentals of Microelectronics)**.

2.  **Body Biasing:**
    *   **Forward Body Biasing:** Applying a forward bias between the source and the substrate reduces $V_{th}$, improving performance at lower $V_{DD}$.
    *   **Reverse Body Biasing:** Applying a reverse bias increases $V_{th}$, reducing leakage but increasing delay. This is used for leakage control in idle blocks.
    *   **Reference:** **Razavi (Design of Analog CMOS Integrated Circuits)** and **Allen & Holbery (CMOS Analog Circuit Design)** often cover body biasing techniques for performance and leakage control.

3.  **Dynamic Voltage and Frequency Scaling (DVFS):**
    *   This is a system-level technique. The operating voltage and clock frequency are adjusted dynamically based on the current computational demand.
    *   When high performance is needed, $V_{DD}$ and $f$ are increased.
    *   When the system is idle or requires less computation, $V_{DD}$ and $f$ are reduced to save power.
    *   **Reference:** A key power management technique covered in broader context of low power design in various digital design books, and implicitly linked to the power-speed relationship discussed in **Baker et al.**

**Reference (Conceptual):**
*   **Baker et al. (CMOS: Circuits Design, Layout and Simulation):** Provides practical considerations of scaling, including the voltage-performance relationship and the implications of $V_{DD}$ reduction on clock speeds.
*   **Meyer Gray, Hurst, Lewis (Analysis and Design of Analog Integrated Circuits):** While analog-focused, their discussions on device behavior and performance limitations at different operating voltages are transferable to understanding digital circuit behavior.

---

## 4. Voltage Scaling for Low Power

### Strategies for $V_{DD}$ Reduction

*   **Lowering the Nominal $V_{DD}$:** For new designs, choosing a lower nominal $V_{DD}$ (e.g., 1.0V instead of 1.2V) can significantly reduce dynamic power, but the chip will operate at a lower maximum frequency. This is suitable for applications where power efficiency is prioritized over maximum speed.
*   **Multiple $V_{DD}$ Domains:** Different parts of a chip can be operated at different voltage levels. High-performance blocks might use a higher $V_{DD}$, while less critical or frequently idle blocks can use a lower $V_{DD}$ to save power. This requires level shifters for interfaces between domains.
    *   **Example:** A processor might have a high-performance core operating at 1.2V and a memory controller operating at 1.0V.
*   **Adaptive Voltage Scaling (AVS):** Similar to DVS, but AVS uses feedback from the circuit (e.g., critical path delay) to precisely adjust $V_{DD}$ to meet performance requirements with minimal power overhead.

### Impact on Technology Scaling (CO1 Relevance)

As CMOS technology scales down (smaller transistors, thinner oxides, shorter channel lengths):
*   **Leakage Currents ($I_{sub}$, $I_{gate}$) increase significantly.** This makes static power a more prominent concern.
*   **Threshold voltage ($V_{th}$) cannot be scaled down proportionally** with $V_{DD}$ without causing excessive leakage and short-channel effects (like drain-induced barrier lowering - DIBL).
*   **$V_{DD}$ scaling becomes crucial for managing power** as transistors shrink and operating frequencies increase.
*   However, the benefits of $V_{DD}$ scaling on dynamic power become more pronounced, while the penalty on performance due to increased $V_{th}$ (to combat leakage) becomes more severe. This highlights the intricate interplay.

---

## 5. Practice Questions and Exercises

**Question 1:**
If the supply voltage ($V_{DD}$) of a digital circuit is reduced from 1.2V to 0.6V, and assuming the switching frequency and load capacitance remain constant, by what factor does the dynamic power consumption change?

**Answer:**
Dynamic power ($P_{switch}$) is proportional to $V_{DD}^2$.
New $V_{DD}' = V_{DD} / 2$.
New Power $P_{switch}' \propto (V_{DD}/2)^2 = V_{DD}^2 / 4$.
The dynamic power consumption changes by a factor of **1/4** (i.e., it is reduced to one-fourth of its original value).

**Question 2:**
Explain why reducing $V_{DD}$ has a more significant impact on dynamic power than on static power.

**Answer:**
*   **Dynamic Power:** The dominant component is switching power, which is proportional to $V_{DD}^2$. This quadratic relationship means even moderate reductions in $V_{DD}$ lead to substantial power savings. Short-circuit power is also roughly proportional to $V_{DD}^2$ (or $(V_{DD}-V_{th})^2$).
*   **Static Power:** Primarily due to leakage currents. Subthreshold leakage is exponentially dependent on $V_{th}$, not directly on $V_{DD}$. While $V_{DD}$ reduction might indirectly affect leakage, the impact is less dramatic. Gate leakage does decrease with reduced $V_{DD}$ as the voltage across the oxide reduces, but historically, subthreshold leakage was the larger concern for static power until very advanced nodes. Therefore, the reduction in static power with $V_{DD}$ reduction is less pronounced compared to dynamic power.

**Question 3:**
What is the main trade-off when reducing the supply voltage ($V_{DD}$) in a CMOS circuit? How can this trade-off be partially mitigated?

**Answer:**
The main trade-off when reducing $V_{DD}$ is a **significant degradation in performance (speed)**. This is because the drive current of transistors decreases, leading to increased gate delays and longer critical paths.

This trade-off can be partially mitigated by:
1.  **Lowering the threshold voltage ($V_{th}$):** This improves transistor drive current and reduces delay, but it increases static leakage power.
2.  **Employing body biasing techniques:** Specifically, forward body biasing can reduce $V_{th}$ and improve performance at lower $V_{DD}$.
3.  **Optimizing circuit design:** Using techniques like pipelining or re-timing can help manage increased delays.
4.  **Using Dynamic Voltage and Frequency Scaling (DVFS):** Adjusting voltage and frequency based on workload.

---

## 6. Important Points to Remember

*   **Dynamic power dominates total power** in most active digital circuits.
*   Dynamic power is **quadratically dependent on $V_{DD}$** ($P_{dyn} \propto V_{DD}^2$).
*   Static power is less dependent on $V_{DD}$, but it generally **decreases with $V_{DD}$ reduction** due to reduced gate and subthreshold leakage.
*   Reducing $V_{DD}$ is the **most effective strategy for reducing dynamic power**.
*   The major **trade-off for $V_{DD}$ reduction is performance degradation** (increased delay).
*   **Lowering $V_{th}$** can help recover performance lost due to $V_{DD}$ reduction but **increases static power**.
*   **Technology scaling** brings benefits in density and speed but exacerbates leakage issues, making $V_{DD}$ management even more critical.
*   Techniques like **DVFS, multiple $V_{DD}$ domains, and AVS** are used to exploit the power-performance trade-off.

---

This concludes the study notes for the "Effect of Supply Voltage on Static and Dynamic Power" from Module 3 of LOW POWER VLSI. Remember to consult the recommended textbooks for deeper theoretical understanding and detailed derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
