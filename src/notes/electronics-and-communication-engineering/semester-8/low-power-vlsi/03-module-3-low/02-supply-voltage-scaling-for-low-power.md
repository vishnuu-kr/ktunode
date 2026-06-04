---
title: "Supply Voltage Scaling for Low Power:"
subject: "LOW POWER VLSI"
module: "Module 3: Low"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff683"
status: "completed"
scrapedAt: "2026-05-23T18:14:44.176Z"
---
# LOW POWER VLSI: Module 3: Low Power Design Techniques - Supply Voltage Scaling for Low Power

## Module Overview

This module delves into fundamental techniques for reducing power consumption in VLSI circuits. We will focus on **Supply Voltage Scaling (SVS)** as a primary method to achieve low power. Understanding SVS is crucial for designing energy-efficient digital ICs, aligning with Course Outcomes CO1, CO2, and CO3.

## 3.1 Supply Voltage Scaling (SVS) for Low Power

### 3.1.1 Introduction to Supply Voltage Scaling

Supply Voltage Scaling (SVS) is one of the most effective and widely used techniques to reduce power consumption in CMOS integrated circuits. The core idea is to reduce the supply voltage ($V_{DD}$) supplied to the circuit.

**Key Concept:** The power consumed by a CMOS circuit is approximately proportional to the square of the supply voltage ($V_{DD}^2$). By reducing $V_{DD}$, we can achieve significant power savings.

### 3.1.2 Power Dissipation in CMOS Circuits

Before discussing SVS, it's essential to understand the sources of power dissipation in CMOS circuits. This aligns with **CO2: Discuss the different sources of power dissipation in digital ICs.**

*   **Dynamic Power Dissipation:** This is the power consumed when transistors switch.
    *   **Switching Power ($P_{dyn\_switch}$):** This is the dominant component of dynamic power and is consumed when charging and discharging the load capacitance ($C_L$) at a switching frequency ($f_{sw}$).
        *   **Formula:** $P_{dyn\_switch} = \alpha \cdot C_L \cdot V_{DD}^2 \cdot f_{sw}$
        *   Where $\alpha$ is the activity factor (fraction of time gates switch).
        *   **Impact of $V_{DD}$:** Directly proportional to $V_{DD}^2$.
    *   **Short-Circuit Power ($P_{sc}$):** This power is dissipated when both NMOS and PMOS transistors in a logic gate are simultaneously conducting during the transition from logic 0 to 1 or 1 to 0.
        *   **Formula:** $P_{sc} \approx \frac{1}{12} \beta_{eff} \cdot (V_{DD} - V_{th})^3 \cdot \tau \cdot f_{sw}$
        *   Where $\beta_{eff}$ is the effective transconductance parameter and $\tau$ is the rise/fall time.
        *   **Impact of $V_{DD}$:** Proportional to $V_{DD}^3$. This component becomes more significant at lower $V_{DD}$ values, especially as $V_{th}$ becomes comparable to $V_{DD}$.

*   **Static Power Dissipation:** This power is consumed even when transistors are not switching.
    *   **Leakage Power ($P_{leak}$):** This is primarily due to subthreshold leakage current ($I_{sub}$) and gate leakage current.
        *   **Subthreshold Leakage ($I_{sub}$):** This is the current that flows between drain and source when the gate-to-source voltage ($V_{GS}$) is less than the threshold voltage ($V_{th}$).
            *   **Formula:** $I_{sub} \propto \frac{W}{L} e^{(V_{GS} - V_{th}) / (n V_T)}$
            *   Where $n$ is the subthreshold swing factor and $V_T$ is the thermal voltage.
            *   **Impact of $V_{DD}$:** Leakage current generally increases with decreasing $V_{DD}$ if $V_{th}$ is not scaled proportionally, as $V_{GS}$ for off transistors is $0$ and $V_{th}$ might be reduced. However, if $V_{th}$ is scaled appropriately with $V_{DD}$, leakage can be managed.

**Important Point:** The $V_{DD}^2$ dependence of switching power makes it the most sensitive to voltage scaling.

### 3.1.3 The Principle of Supply Voltage Scaling

The core idea behind SVS is to reduce the supply voltage ($V_{DD}$) to a level just sufficient to meet the performance requirements of the circuit.

**Relationship between Performance and $V_{DD}$:**
The delay of a CMOS inverter (and thus a complex circuit) is inversely proportional to $V_{DD}$ and inversely proportional to $(V_{DD} - V_{th})^2$ (for NMOS). A simplified relationship for delay is often given as:

*   **Delay $\propto \frac{V_{DD}}{(V_{DD} - V_{th})^2}$** (or similar dependencies)

**Key Observation:**
*   As $V_{DD}$ decreases, the delay increases.
*   As $V_{DD}$ decreases, dynamic power ($P_{dyn\_switch}$) decreases quadratically.

This creates a trade-off: lower voltage leads to lower power but also lower speed.

### 3.1.4 Types of Supply Voltage Scaling

There are two primary approaches to SVS:

1.  **Low-Voltage Scaling (or Constant-Field Scaling):**
    *   In this method, both $V_{DD}$ and the device dimensions (channel length $L$) are scaled by the same factor, say $1/S$ (where $S > 1$).
    *   $V_{DD}' = V_{DD}/S$
    *   $L' = L/S$
    *   **Impact on Delay:** Delay is reduced by factor $S$.
    *   **Impact on Power:** Power is reduced by factor $S^2$.
    *   **Reference:** This is a classical scaling technique discussed in device physics and early CMOS scaling literature (often covered in introductory semiconductor device courses, relevant to **CO1**).

2.  **Variable-Voltage Scaling (or)--More Common in Low-Power Design:**
    *   In modern low-power design, we often don't scale device dimensions as aggressively. Instead, we focus on reducing $V_{DD}$ to meet specific performance targets while maximizing power savings.
    *   **Process:**
        *   Start with a nominal technology node (e.g., 180nm, 90nm).
        *   Determine the maximum required operating frequency or performance level for the application.
        *   Calculate the minimum $V_{DD}$ required to achieve this performance, considering device characteristics (threshold voltage $V_{th}$, mobility $\mu$, etc.) and circuit design.
        *   Set $V_{DD}$ to this calculated minimum value.
    *   **Goal:** Minimize power while ensuring the circuit meets its functional and performance requirements.
    *   **Reference:** This approach is central to low-power design strategies discussed in textbooks like Razavi and Baker.

### 3.1.5 Threshold Voltage ($V_{th}$) Scaling in Conjunction with $V_{DD}$ Scaling

As $V_{DD}$ is reduced, the margin between $V_{DD}$ and $V_{th}$ decreases. This has several implications:

*   **Increased Delay:** As noted earlier, delay increases significantly as $V_{DD}$ approaches $V_{th}$.
*   **Increased Leakage:** Subthreshold leakage current ($I_{sub}$) becomes more significant relative to the drive current when $V_{DD}$ is close to $V_{th}$. $I_{sub}$ increases exponentially as $V_{GS}$ approaches $V_{th}$ (or when $V_{DD}$ is reduced, making the "off" voltage closer to $V_{th}$).
*   **Short-Circuit Power:** Becomes more pronounced as $V_{DD}$ decreases if $V_{th}$ is not scaled.

**Solutions and Considerations:**

*   **Threshold Voltage ($V_{th}$) Scaling:** To mitigate these issues, $V_{th}$ is often scaled down along with $V_{DD}$. This is known as **Threshold Voltage Scaling**.
    *   **$V_{DD}$ and $V_{th}$ Scaling:** A common rule of thumb is to scale both $V_{DD}$ and $V_{th}$ by the same factor. This helps maintain a consistent overdrive voltage ($V_{GS} - V_{th}$), thereby reducing the impact of voltage scaling on delay and leakage relative to performance.
    *   **Reference:** This concept is integral to device scaling principles (CO1) and has direct implications for the power trade-offs discussed in this module. Razavi's "Design of Analog CMOS Integrated Circuits" and Sedra & Smith's "Microelectronic Circuits" cover these device-level relationships.

*   **Challenges with $V_{th}$ Scaling:**
    *   **Reduced Noise Margin:** Lowering $V_{th}$ can reduce the noise margin of the logic gates, making them more susceptible to noise.
    *   **Increased Leakage:** Despite scaling, as $V_{th}$ becomes very low, subthreshold leakage can still become a dominant power source, especially in deep submicron technologies. This is an ongoing challenge addressed by techniques like **Multiple Threshold Voltages (MTCMOS)**, which can be considered an extension or complement to SVS (related to CO3).

### 3.1.6 Trade-offs and Design Considerations

| Parameter          | Impact of Reducing $V_{DD}$ | Comments                                                              |
| :----------------- | :--------------------------- | :-------------------------------------------------------------------- |
| **Dynamic Power**  | Decreases ($V_{DD}^2$)       | Significant power savings.                                            |
| **Delay**          | Increases                    | Circuit becomes slower.                                               |
| **Noise Margin**   | Decreases (if $V_{th}$ not scaled) | Circuit more susceptible to noise.                                    |
| **Leakage Power**  | Increases (if $V_{th}$ not scaled) | Becomes more dominant if $V_{th}$ is not reduced appropriately.       |
| **Short-Circuit Power** | Increases ($V_{DD}^3$, if $V_{th}$ not scaled) | Becomes more pronounced.                                              |
| **Device Reliability** | Generally improves           | Lower electric fields within devices can reduce stress.               |
| **Process Variations** | Amplified impact             | Smaller voltage margins mean variations can have a larger relative effect. |

**Design Strategy:**

The goal is to find the optimal $V_{DD}$ (and potentially $V_{th}$) that meets the required performance while minimizing power. This often involves:

*   **Performance Target Analysis:** Defining the maximum clock frequency or latency requirement.
*   **Static Timing Analysis (STA):** To accurately predict delays at various $V_{DD}$ and temperature conditions.
*   **Power Analysis:** Estimating dynamic and static power consumption.
*   **Adaptive Voltage Scaling (AVS):** In advanced systems, $V_{DD}$ can be dynamically adjusted based on workload and temperature to further optimize power consumption. This is a form of SVS that is dynamic rather than static. (Relates to **CO3**).

**Example:** Consider a processor core that needs to operate at 500 MHz.
*   At $V_{DD} = 1.2V$, the critical path delay is 1.8ns (meeting the 2ns requirement for 500MHz).
*   If the performance requirement is relaxed to 250 MHz (critical path delay of 4ns), we might be able to reduce $V_{DD}$ to, say, 0.8V.
*   At 0.8V, the delay might become 3.8ns, satisfying the 250 MHz requirement.
*   The power reduction would be approximately $(0.8V/1.2V)^2 = (2/3)^2 = 4/9$, a saving of over 55%.

### 3.1.7 Impact of Technology Scaling on $V_{DD}$ and $V_{th}$ (Relates to CO1)

As transistors shrink in size (technology scaling, e.g., from 180nm to 90nm to 45nm and below), several challenges arise:

*   **Threshold Voltage Rollover:** $V_{th}$ becomes difficult to control accurately as channel lengths shrink, leading to variations.
*   **Short Channel Effects (SCEs):**
    *   **Drain-Induced Barrier Lowering (DIBL):** The drain voltage influences the threshold voltage, making it harder to turn off the transistor.
    *   **Velocity Saturation:** Carrier velocity saturates at high electric fields, deviating from simpler models.
    *   **Gate-Induced Drain Leakage (GIDL):** Another leakage mechanism at small geometries.
*   **Increased Leakage:** Due to reduced $V_{th}$ and SCEs, leakage power becomes a major concern in deep submicron technologies.

**Scaling $V_{DD}$ and $V_{th}$ in Advanced Technologies:**

*   **Constant-Field Scaling ($S > 1$):** $V_{DD}'=V_{DD}/S$, $L'=L/S$. While reducing power, it doesn't keep electric fields constant, leading to increased SCEs.
*   **General Purpose Scaling ($S > 1$ for $L$, $S_V$ for $V_{DD}$ where $S_V \ne S$):** Devices are scaled for performance ($L$ reduction), but $V_{DD}$ is reduced less aggressively than $L$ to maintain drive current and mitigate SCEs. This results in higher electric fields and increased leakage. $V_{DD}$ scaling typically lags behind feature size scaling.
*   **Reduced $V_{DD}$:** Despite challenges, $V_{DD}$ has been aggressively reduced over technology generations (e.g., from 5V in older technologies to 1.8V, 1.2V, 1.0V, 0.9V, and even lower for high-performance processors).
*   **$V_{th}$ Management:** To combat leakage and maintain reasonable performance at low $V_{DD}$, techniques like **Multiple Threshold Voltages (MTCMOS)** are employed, where critical paths use low-$V_{th}$ devices for speed, and non-critical paths use high-$V_{th}$ devices to reduce leakage. This is a key power management strategy (**CO3**).

**Important Point:** Technology scaling forces a careful re-evaluation of the $V_{DD}/V_{th}$ scaling relationship to balance performance, power, and reliability.

### 3.1.8 Applying SVS for Low Power Design

**Practical Steps:**

1.  **Define Performance Requirements:** Determine the maximum frequency, minimum throughput, or maximum latency for the circuit.
2.  **Characterize Devices:** Obtain accurate SPICE models or characterization data for the transistors at various $V_{DD}$ and $V_{th}$ levels.
3.  **Perform Timing Analysis:** Use tools like Synopsys PrimeTime or Cadence Tempus to perform Static Timing Analysis (STA) for the design at different $V_{DD}$ values.
4.  **Estimate Power Consumption:** Use power analysis tools to estimate dynamic power (switching and short-circuit) and static power (leakage).
5.  **Iterate:** Select a $V_{DD}$ that meets performance requirements. If power is still too high, consider further reducing $V_{DD}$ and re-evaluating performance. If performance is not met, $V_{DD}$ might need to be increased or the design optimized (e.g., logic restructuring, clock gating).
6.  **Consider Adaptive Voltage Scaling (AVS):** For highly dynamic workloads, implement AVS to adjust $V_{DD}$ on-the-fly based on the current performance needs.

**Example of Design Style (Relates to CO4):**

*   **Clocked Design Styles:** Techniques like **Clock Gating** are often used in conjunction with SVS. By gating the clock to idle modules, their dynamic power is eliminated. When these modules are reactivated, they might operate at a reduced $V_{DD}$ if their performance requirements are not immediate.
*   **Non-Clocked Design Styles:** For highly optimized paths that require continuous operation, careful selection of the minimum viable $V_{DD}$ is critical.

### 3.1.9 Adiabatic Switching (Brief Introduction - further covered in other modules/topics)

Adiabatic switching is an advanced technique that aims to reduce the energy dissipated during switching events. Instead of dissipating energy as heat when charging/discharging capacitors, adiabatic circuits aim to transfer energy back to the source or store it temporarily.

*   **Principle:** Gradually charge/discharge the load capacitance using a time-varying voltage source.
*   **Power Reduction:** Can offer significant power savings, theoretically approaching zero dynamic power if perfectly implemented.
*   **Challenges:** Requires specialized circuit techniques (e.g., resonant clocking, charge recovery circuits) and often leads to increased area and reduced speed compared to conventional CMOS.
*   **Relevance to SVS:** Adiabatic techniques are a complementary approach to SVS. They reduce the energy per transition, allowing circuits to potentially operate at even lower supply voltages or achieve higher performance at a given voltage.

**(This topic is touched upon here to satisfy the mention in the learning outcomes, but will likely be expanded upon in a dedicated section if it's a separate topic in the syllabus.)**

## 3.2 Summary and Key Takeaways

*   **Supply Voltage Scaling (SVS)** is a fundamental low-power technique that reduces dynamic power by $\mathbf{V_{DD}^2}$.
*   The primary trade-off is **performance degradation** (increased delay) as $V_{DD}$ is reduced.
*   **Threshold Voltage ($V_{th}$) scaling** is often employed alongside $V_{DD}$ scaling to maintain performance and manage leakage and short-circuit power.
*   **Technology scaling** introduces challenges like Short Channel Effects (SCEs) and increased leakage, requiring careful $V_{DD}/V_{th}$ management.
*   **Adaptive Voltage Scaling (AVS)** provides dynamic power optimization by adjusting $V_{DD}$ based on workload.
*   SVS must be considered in conjunction with other power management techniques like clock gating.

## Practice Questions

**Question 1 (CO1, CO2, CO3):**
Explain the relationship between supply voltage ($V_{DD}$) and dynamic power dissipation in a CMOS circuit. If you reduce $V_{DD}$ by half, what is the theoretical maximum reduction in dynamic power? What are the primary consequences of significantly reducing $V_{DD}$ without adjusting the threshold voltage ($V_{th}$)?

**Question 2 (CO1, CO3):**
How does technology scaling (e.g., shrinking feature sizes) impact the effectiveness and challenges of Supply Voltage Scaling? Discuss at least two Short Channel Effects (SCEs) and how they relate to low-voltage operation.

**Question 3 (CO3, CO4):**
Describe how Supply Voltage Scaling can be effectively combined with a design style like clock gating to achieve maximum power savings. Provide a scenario where this combined approach would be particularly beneficial.

**Question 4 (CO1):**
Consider a simple CMOS inverter. Its delay is roughly proportional to $\frac{V_{DD}}{(V_{DD} - V_{th})^2}$. If $V_{DD} = 1V$ and $V_{th} = 0.3V$, calculate the relative delay. Now, if you reduce $V_{DD}$ to $0.7V$ and also reduce $V_{th}$ to $0.2V$, how does the delay change relative to the original case? Discuss the implications for performance.

---

## Answers to Practice Questions

**Answer 1:**
The dynamic power dissipation in a CMOS circuit is primarily governed by the switching power, given by $P_{dyn\_switch} = \alpha \cdot C_L \cdot V_{DD}^2 \cdot f_{sw}$. This formula shows that dynamic power is directly proportional to the square of the supply voltage ($V_{DD}^2$).

If $V_{DD}$ is reduced by half (e.g., from $V_{DD}$ to $V_{DD}/2$), the theoretical maximum reduction in dynamic power is by a factor of $(1/2)^2 = 1/4$. This means a potential 75% reduction in dynamic power.

**Consequences of reducing $V_{DD}$ without adjusting $V_{th}$:**
1.  **Increased Delay:** As $V_{DD}$ approaches $V_{th}$, the overdrive voltage $(V_{DD} - V_{th})$ decreases significantly, leading to a substantial increase in transistor switching delay. The circuit becomes much slower.
2.  **Increased Leakage Power:** Subthreshold leakage current increases exponentially as $V_{GS}$ gets closer to $V_{th}$. If $V_{th}$ remains high while $V_{DD}$ is reduced, the "off" state $V_{GS}$ for PMOS (which is $V_{DD}$) becomes closer to $V_{th}$, increasing leakage.
3.  **Increased Short-Circuit Power:** The short-circuit power is often proportional to $(V_{DD} - V_{th})^3$. If $V_{DD}$ is reduced while $V_{th}$ stays the same, this term becomes larger relative to $V_{DD}$, potentially increasing short-circuit power as a percentage of total power.
4.  **Reduced Noise Margin:** The voltage difference between logic '0' and logic '1' levels is directly related to $V_{DD}$. A lower $V_{DD}$ reduces the noise margin, making the circuit more susceptible to noise.

**Answer 2:**
Technology scaling (shrinking feature sizes, e.g., 180nm to 90nm to 45nm and below) leads to:

*   **Increased Electric Fields:** As devices shrink, the lateral and vertical electric fields increase for a given $V_{DD}$, leading to SCEs.
*   **Difficulty in Controlling $V_{th}$:** Precisely controlling the threshold voltage becomes harder due to short channels, leading to increased $V_{th}$ variation.
*   **Increased Leakage:** Reduced gate oxide thickness and shorter channels lead to higher leakage currents (gate leakage, subthreshold leakage).

**Short Channel Effects (SCEs) and their relation to low-voltage operation:**

1.  **Drain-Induced Barrier Lowering (DIBL):** The drain voltage has a significant influence on the channel potential and the barrier height for carriers to flow from source to drain. As $V_{DD}$ is reduced, the difference between drain voltages (e.g., $V_{DD}$ and $0$) can still influence the channel potential. However, in the context of scaling and low-voltage operation, DIBL exacerbates the issue of turning off the transistor. As $V_{DD}$ decreases, the electric field in the channel changes, and DIBL can cause the effective $V_{th}$ to drop further, increasing leakage. For very low $V_{DD}$, the impact of DIBL on the switching characteristics can become pronounced.
2.  **Subthreshold Slope Degradation:** Ideally, the subthreshold swing (SS) is $60mV/decade$ at room temperature. However, as channel lengths decrease, the electric field from the drain can influence the channel potential more strongly, degrading the subthreshold slope. A worse (higher) subthreshold slope means the transistor turns off more gradually, leading to higher subthreshold leakage for a given $V_{GS}$ in the subthreshold region. This is particularly problematic when $V_{DD}$ is reduced close to $V_{th}$, as the device operates predominantly in the subthreshold region.

These SCEs, combined with the inherent $V_{th}$ variations, make it challenging to maintain performance and control leakage when aggressively scaling down $V_{DD}$ in advanced technologies. This necessitates careful $V_{th}$ management and often leads to dynamic voltage and frequency scaling (DVFS) or adaptive voltage scaling (AVS) for optimal power management.

**Answer 3:**
Supply Voltage Scaling (SVS) reduces dynamic power by $V_{DD}^2$, but also reduces performance. Clock gating eliminates the dynamic power of idle circuit blocks by disabling their clock signal, effectively setting their activity factor ($\alpha$) to zero.

Combining SVS and Clock Gating:
*   **Synergy:** When a block is gated off by the clock, it consumes very little dynamic power (ideally zero, excluding leakage). If this block is not needed for an extended period, its operating $V_{DD}$ can be further reduced to an even lower "sleep voltage" or turned off completely.
*   **Scenario:** Consider a complex digital system with multiple functional units (e.g., a CPU core with different processing units, a GPU, a media accelerator).
    *   During normal operation, all units might run at a nominal $V_{DD}$ for maximum performance.
    *   When a specific unit (e.g., the graphics processor) is not actively used for a given task, its clock is gated.
    *   If the system determines that this unit will remain idle for a significant duration, the voltage supplied to this unit can be dynamically reduced to a lower $V_{DD\_sleep}$ value. This further reduces leakage power in the idle state and any residual dynamic power if gating is not perfect.
    *   When the unit is needed again, its voltage is "ramped up" to the operating $V_{DD}$ before the clock is un-gated, ensuring correct operation.

This combined approach allows for significant power savings by both reducing the power of active blocks (via SVS) and eliminating the power of inactive blocks (via clock gating and potentially voltage reduction in idle states).

**Answer 4:**
Let's analyze the delay calculation for the CMOS inverter: Delay $\propto \frac{V_{DD}}{(V_{DD} - V_{th})^2}$

**Case 1: Original Operation**
*   $V_{DD} = 1V$
*   $V_{th} = 0.3V$
*   Delay $\propto \frac{1}{(1 - 0.3)^2} = \frac{1}{(0.7)^2} = \frac{1}{0.49} \approx 2.04$

**Case 2: Reduced Voltage and Threshold**
*   $V_{DD}' = 0.7V$
*   $V_{th}' = 0.2V$
*   Delay $\propto \frac{0.7}{(0.7 - 0.2)^2} = \frac{0.7}{(0.5)^2} = \frac{0.7}{0.25} = 2.8$

**Comparison of Delays:**
*   Original Delay (relative): 2.04
*   New Delay (relative): 2.8

The ratio of new delay to original delay is $2.8 / 2.04 \approx 1.37$.
This means the delay has increased by approximately 37%.

**Implications:**
By reducing $V_{DD}$ from 1V to 0.7V and simultaneously reducing $V_{th}$ from 0.3V to 0.2V, the delay has increased by about 37%. This demonstrates that while scaling both voltages helps mitigate the performance degradation compared to scaling $V_{DD}$ alone, there is still a performance penalty. The goal of SVS is to find the operating point where this performance degradation is acceptable for the given application, in exchange for significant power savings. If the performance target was 500 MHz (requiring a delay of around 2 ns), the original setting might be appropriate. However, if the target could be relaxed to accommodate a 37% increase in delay, then the lower voltage setting would be preferred for power savings.

---

This concludes the detailed study notes for Supply Voltage Scaling for Low Power. Remember to refer to your textbooks for further in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
