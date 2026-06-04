---
title: "Effect of Supply voltage on Delay and Power"
subject: "LOW POWER VLSI"
module: "Module 3: Low"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff684"
status: "completed"
scrapedAt: "2026-05-23T18:14:44.905Z"
---
# Low Power VLSI - Module 3: Low - Effect of Supply Voltage on Delay and Power

## 1. Introduction

This module explores the fundamental relationship between supply voltage ($V_{DD}$) and its impact on circuit delay and power consumption in VLSI design. Understanding this relationship is crucial for implementing effective low-power design strategies, a key objective in modern integrated circuit development.

**Relevance to Course Outcomes:**

*   **CO1:** Understanding the impact of $V_{DD}$ scaling is a direct consequence of technology scaling, as discussed in CO1. Lowering $V_{DD}$ is a primary method to reduce power.
*   **CO2:** The primary mechanism through which $V_{DD}$ affects power is by influencing dynamic power dissipation, a core concept in CO2.
*   **CO3:** This entire module directly addresses power management approaches by detailing how $V_{DD}$ manipulation can be used for power reduction.
*   **CO4:** The choice of logic implementation (clocked vs. non-clocked) can be influenced by the trade-offs between delay and power at different $V_{DD}$ levels.

## 2. The Relationship Between Supply Voltage and Delay

The speed of a CMOS circuit, often characterized by its propagation delay ($\tau$), is directly influenced by the supply voltage.

**Key Concept: Transistor Switching Speed**

The switching speed of a MOSFET is determined by how quickly its channel can be charged or discharged by the gate-source voltage ($V_{GS}$) relative to the threshold voltage ($V_{th}$). This charging/discharging process is facilitated by the current ($I_{DS}$) flowing through the transistor.

**Mathematical Relationship (Simplified Model):**

In the saturation region, the drain current ($I_{DS}$) of a MOSFET is approximately proportional to $(V_{GS} - V_{th})^2$. For switching, we are concerned with the current driving the load capacitance ($C_L$).

$I_{DS} \propto (V_{DD} - V_{th})^n$

where $n$ is typically 2 for long-channel transistors and can be around 1 for short-channel transistors due to velocity saturation.

The delay ($\tau$) is proportional to the time it takes to charge or discharge the load capacitance:

$\tau \propto \frac{C_L \Delta V}{I_{avg}}$

where $\Delta V$ is the voltage swing required for switching (e.g., $V_{DD}/2$ for CMOS logic), and $I_{avg}$ is the average current during switching.

Since $I_{avg}$ is proportional to $(V_{DD} - V_{th})^n$, we can infer the relationship:

$\tau \propto \frac{C_L \Delta V}{(V_{DD} - V_{th})^n}$

For CMOS logic, where the voltage swing is proportional to $V_{DD}$, and assuming $V_{DD} \gg V_{th}$:

$\tau \propto \frac{V_{DD}}{(V_{DD} - V_{th})^n}$

**Common Simplifications:**

*   **Long Channel Approximation (n=2):** $\tau \propto \frac{V_{DD}}{(V_{DD} - V_{th})^2}$. This implies a strong dependence of delay on $V_{DD}$.
*   **Short Channel Approximation (n=1, Velocity Saturation):** $\tau \propto \frac{V_{DD}}{(V_{DD} - V_{th})}$. This shows a weaker dependence, but $V_{DD}$ still significantly impacts delay.

**Practical Observation:**

*   **Lowering $V_{DD}$ increases delay:** As $V_{DD}$ decreases, the overdrive voltage $(V_{DD} - V_{th})$ decreases, reducing the available current to charge/discharge the load capacitance. This leads to slower switching speeds.
*   **Higher $V_{DD}$ decreases delay:** Conversely, increasing $V_{DD}$ provides more current, allowing faster charging/discharging of load capacitance and resulting in lower delays.

**Textbook References:**

*   **Razavi (Design of Analog CMOS Integrated Circuits):** Chapter 1 discusses MOSFET characteristics and current-voltage relationships, which underpin delay analysis. Chapters related to digital circuits would provide specific delay models.
*   **Baker (CMOS: Circuits Design, Layout and Simulation):** Chapters on basic CMOS gates and timing analysis would explicitly cover the impact of $V_{DD}$ on propagation delay.
*   **Sedra & Smith (Microelectronic Circuits):** Chapters on MOSFETs and digital logic gates detail the current-voltage characteristics and their influence on switching speed.

**Example:**

Consider a simple CMOS inverter driving a capacitive load. If $V_{DD}$ is reduced from 1.2V to 0.9V, the overdrive voltages for both PMOS and NMOS transistors will be smaller. This means less current is available to charge or discharge the load capacitance, resulting in a longer time for the output to transition, hence increased propagation delay.

**Highlight:** The relationship between delay and $V_{DD}$ is not linear; it's often super-linear, especially in older or less scaled technologies.

## 3. The Relationship Between Supply Voltage and Power Consumption

Power consumption in CMOS circuits is broadly categorized into static power and dynamic power. $V_{DD}$ has a significant impact on both.

### 3.1 Static Power Dissipation

Static power is primarily due to leakage currents (subthreshold leakage, gate leakage, junction leakage).

*   **Subthreshold Leakage:** This leakage current in a MOSFET is exponentially dependent on the gate-source voltage ($V_{GS}$) and the threshold voltage ($V_{th}$).
    $I_{subthreshold} \propto e^{(V_{GS} - V_{th})/V_T}$
    where $V_T$ is the thermal voltage.
    While $V_{DD}$ itself doesn't directly appear in the subthreshold leakage equation, **lowering $V_{DD}$ often requires lowering $V_{th}$ to maintain sufficient performance**. This reduction in $V_{th}$ can *increase* subthreshold leakage.

*   **Gate Leakage:** This is due to tunneling through the gate oxide. It is primarily dependent on the gate oxide thickness and the gate-source voltage ($V_{GS}$). Lowering $V_{DD}$ generally reduces gate leakage.

*   **Junction Leakage:** This leakage is due to reverse-biased PN junctions and is largely independent of $V_{DD}$, though it is temperature-dependent.

**Impact of $V_{DD}$ on Static Power:**

*   **Directly:** $P_{static} = V_{DD} \times I_{leakage}$. Therefore, any leakage current directly contributes to static power dissipation proportional to $V_{DD}$.
*   **Indirectly (through $V_{th}$ scaling):** Lowering $V_{DD}$ to achieve low power often necessitates lowering $V_{th}$. This increase in $V_{th}$ reduction can lead to a significant increase in subthreshold leakage, potentially offsetting some of the static power savings from reduced $V_{DD}$. This is a critical trade-off.

**Textbook References:**

*   **Baker (CMOS: Circuits Design, Layout and Simulation):** Chapters on power dissipation will detail static power sources and the impact of $V_{th}$ scaling.
*   **Sedra & Smith (Microelectronic Circuits):** Sections on device physics and leakage mechanisms are relevant.

### 3.2 Dynamic Power Dissipation

Dynamic power is consumed during the switching activity of the circuit. It has two main components: switching power and short-circuit power.

#### 3.2.1 Switching Power (Capacitive Power)

This is the dominant component of dynamic power in CMOS circuits. It is consumed when charging and discharging the load capacitances ($C_L$) associated with the circuit nodes.

$P_{switching} = \alpha \times C_L \times V_{DD}^2 \times f$

where:
*   $\alpha$ is the switching activity factor (average number of transitions per clock cycle).
*   $C_L$ is the total load capacitance being switched.
*   $V_{DD}$ is the supply voltage.
*   $f$ is the operating frequency.

**Impact of $V_{DD}$ on Switching Power:**

*   **Directly Proportional to $V_{DD}^2$:** This is the most significant observation. **Reducing $V_{DD}$ quadratically reduces switching power.** This makes voltage scaling an extremely powerful technique for power reduction.

**Example:**

If $V_{DD}$ is reduced from 1.2V to 0.6V (halved), the switching power will be reduced by a factor of $(0.6/1.2)^2 = (1/2)^2 = 1/4$. This is a massive saving.

#### 3.2.2 Short-Circuit Power

This occurs when both the PMOS and NMOS transistors in a logic gate are simultaneously conducting during the switching transition. A direct path exists from $V_{DD}$ to ground, allowing a brief pulse of current.

$P_{short-circuit} \approx \frac{1}{12} \beta_{eff} (V_{DD} - V_{th})^3 \tau_{sc} f$

where:
*   $\beta_{eff}$ is the effective transconductance parameter.
*   $V_{th}$ is the threshold voltage.
*   $\tau_{sc}$ is the duration of the short-circuit current.

**Impact of $V_{DD}$ on Short-Circuit Power:**

*   **Proportional to $V_{DD}^3$ (approximately):** The short-circuit power is also highly dependent on $V_{DD}$, typically cubically. This is because the current is proportional to $(V_{DD} - V_{th})^3$ (for long channel) or $(V_{DD}-V_{th})^2$ (for short channel), and the duration $\tau_{sc}$ is also related to $V_{DD}$.
*   **Lowering $V_{DD}$ significantly reduces short-circuit power.**

**Textbook References:**

*   **Razavi (Design of Analog CMOS Integrated Circuits):** Analog circuit design principles apply to understanding current flow during switching.
*   **Baker (CMOS: Circuits Design, Layout and Simulation):** Explicitly covers dynamic power, including switching and short-circuit components, and their dependence on $V_{DD}$.
*   **Sedra & Smith (Microelectronic Circuits):** Provides the foundational physics of MOSFET operation which explains the current flow during switching.

**Highlight:** The quadratic dependence of switching power on $V_{DD}$ is the primary reason for aggressive voltage scaling in low-power design.

## 4. The $V_{DD}$-Delay-Power Trade-off

The relationship between supply voltage, delay, and power is a fundamental trade-off that designers must manage.

**Summary of Relationships:**

*   **Lowering $V_{DD}$:**
    *   **Decreases Delay:** **Increases Delay** (Makes circuit slower)
    *   **Decreases Dynamic Power:** Significantly (quadratically for switching, cubically for short-circuit)
    *   **Can Increase Static Power:** Due to $V_{th}$ reduction requirement to maintain performance.

*   **Increasing $V_{DD}$:**
    *   **Increases Delay:** **Decreases Delay** (Makes circuit faster)
    *   **Increases Dynamic Power:** Significantly (quadratically for switching, cubically for short-circuit)
    *   **Can Decrease Static Power:** By allowing higher $V_{th}$ (if performance allows).

**The Trade-off Curve:**

A plot of delay versus power for a circuit at different supply voltages typically shows a curve. As $V_{DD}$ is lowered to reduce power, the delay increases. As $V_{DD}$ is raised to reduce delay, the power consumption increases significantly.

**Design Implications:**

*   **Voltage Scaling:** This is a primary technique for low-power design. By reducing $V_{DD}$ to the lowest acceptable level for the required performance (i.e., maximum allowed delay), significant power savings can be achieved.
*   **Adaptive Voltage and Frequency Scaling (AVFS):** Modern processors often employ techniques where $V_{DD}$ and the clock frequency are dynamically adjusted based on the workload. If the workload is light and performance is not critical, $V_{DD}$ and frequency are lowered to save power. If the workload is heavy, they are increased to meet performance targets.
*   **Dual/Multi-Voltage Domains:** Different parts of a chip can operate at different voltage levels. High-performance critical paths might use a higher $V_{DD}$, while less critical logic can operate at a lower $V_{DD}$.

**Reference Books:**

*   **Allen & Holbery (CMOS Analog Circuit Design):** While focused on analog, the principles of voltage and current relationships are universal.
*   **Razavi (Fundamentals of Microelectronics):** Provides a strong foundation in semiconductor device physics, crucial for understanding these trade-offs.
*   **Gray, Hurst, Lewis (Analysis and Design of Analog Integrated Circuits):** Advanced analysis of circuit behavior, including power and speed, is discussed.

**Highlight:** The $V_{DD}^2$ dependency of switching power makes it the most potent lever for power reduction, but it comes at the cost of increased delay.

## 5. Low Voltage Operation Challenges and Techniques

Operating at very low supply voltages ($V_{DD} < 1V$) presents significant challenges:

*   **Reduced Noise Margins:** The difference between logic high and logic low levels shrinks, making the circuit more susceptible to noise.
*   **Increased Sensitivity to Threshold Voltage Variations:** As $V_{DD}$ approaches $V_{th}$, small variations in $V_{th}$ (due to manufacturing process variations) can have a disproportionately large impact on circuit speed and functionality.
*   **Increased Subthreshold Leakage:** To compensate for the reduced overdrive voltage and maintain functionality at low $V_{DD}$, $V_{th}$ must often be reduced. This significantly increases subthreshold leakage, which becomes a dominant power consumption factor.
*   **Limited Driving Current:** The reduced overdrive voltage means transistors can deliver less current, limiting the speed at which capacitive loads can be charged or discharged.

**Low Voltage Design Techniques:**

*   **Threshold Voltage Optimization:** Carefully selecting $V_{th}$ values for NMOS and PMOS transistors to balance performance and leakage. Using High Threshold Voltage (HVT) transistors for non-critical paths can reduce leakage, while Low Threshold Voltage (LVT) transistors might be used for critical paths if the higher leakage is acceptable.
*   **Body Biasing:** Applying a voltage to the transistor's body terminal can dynamically adjust the threshold voltage. Forward body biasing reduces $V_{th}$ (improving speed but increasing leakage), while reverse body biasing increases $V_{th}$ (reducing leakage but slowing down the transistor).
*   **Advanced Circuit Design:** Employing techniques like sleep transistors to turn off power to idle blocks, reducing leakage. Careful layout to minimize parasitic capacitances.
*   **Leveraging Short-Channel Effects:** In advanced technologies, short-channel effects can lead to a weaker dependence of delay on $V_{DD}$ (closer to $V_{DD}$ than $V_{DD}^2$), offering a slightly better trade-off.

**Reference Books:**

*   **Baker (CMOS: Circuits Design, Layout and Simulation):** Discusses practical aspects of low-voltage design and the challenges associated with it.
*   **Razavi (Fundamentals of Microelectronics):** Provides the physics to understand leakage and the impact of voltage scaling.

## 6. Practice Questions and Exercises

**Question 1:**

Explain the relationship between supply voltage ($V_{DD}$) and propagation delay ($\tau$) in a CMOS inverter. Provide a simplified mathematical expression and discuss its implications for low-power design.

**Answer 1:**

The propagation delay ($\tau$) of a CMOS inverter is inversely related to the driving current of the transistors, which is strongly dependent on the supply voltage ($V_{DD}$) and the threshold voltage ($V_{th}$). A simplified expression is $\tau \propto \frac{C_L \cdot V_{DD}}{(V_{DD} - V_{th})^n}$, where $n$ is typically 1 or 2.

*   **Implication:** As $V_{DD}$ is lowered to reduce power, the $(V_{DD} - V_{th})$ term decreases, reducing the driving current and significantly *increasing* the propagation delay. This creates a trade-off: lower power means slower operation.

**Question 2:**

What is the primary component of dynamic power dissipation in CMOS circuits, and how does it depend on the supply voltage?

**Answer 2:**

The primary component of dynamic power dissipation is **switching power** (or capacitive power), given by $P_{switching} = \alpha C_L V_{DD}^2 f$. This power is **quadratically dependent on the supply voltage ($V_{DD}$)**.

**Question 3:**

Discuss the impact of reducing $V_{DD}$ on static power dissipation. What factor can cause static power to increase despite a lower $V_{DD}$?

**Answer 3:**

Reducing $V_{DD}$ has a direct impact on static power: $P_{static} = V_{DD} \times I_{leakage}$. So, if leakage current ($I_{leakage}$) remains constant, reducing $V_{DD}$ will reduce static power.

However, to maintain sufficient performance (i.e., acceptable delay) at very low $V_{DD}$, the threshold voltage ($V_{th}$) must often be reduced. This **reduction in $V_{th}$ significantly increases subthreshold leakage current ($I_{subthreshold}$)**. This increased leakage can be substantial enough to cause the *total static power to increase*, even though $V_{DD}$ has been lowered.

**Question 4:**

If you halve the supply voltage of a digital circuit, by what factor would you ideally expect the dynamic power consumption to reduce? Explain your reasoning.

**Answer 4:**

The dynamic power, primarily switching power, is proportional to $V_{DD}^2$. If the supply voltage ($V_{DD}$) is halved (e.g., from $V_{DD\_old}$ to $V_{DD\_old}/2$), the new dynamic power ($P_{new}$) would be:

$P_{new} \propto (\frac{V_{DD\_old}}{2})^2 = \frac{V_{DD\_old}^2}{4}$

Therefore, the dynamic power would ideally reduce by a factor of **4 (a 75% reduction)**.

**Question 5:**

(Conceptual) Imagine you are designing a low-power system. You have the choice between two operating modes:
Mode A: $V_{DD} = 1.2V$, Frequency = 500 MHz
Mode B: $V_{DD} = 0.8V$, Frequency = 200 MHz

Which mode would likely consume significantly less power? Justify your answer by considering the $V_{DD}$ dependencies of power and delay.

**Answer 5:**

Mode B ($V_{DD} = 0.8V$, Frequency = 200 MHz) would likely consume significantly less power.

**Justification:**

1.  **Dynamic Power ($V_{DD}^2$ dependence):** The dynamic power is strongly dependent on $V_{DD}^2$. While the frequency is also reduced in Mode B, the $V_{DD}^2$ reduction is more dominant.
    *   Ratio of $V_{DD}$ squared: $(0.8/1.2)^2 = (2/3)^2 = 4/9$. So, switching power alone would be reduced by roughly $1 - 4/9 = 5/9$, a substantial saving.
2.  **Frequency:** The frequency is also reduced from 500 MHz to 200 MHz, which is a factor of $200/500 = 0.4$. This also reduces dynamic power linearly.
3.  **Overall Power:** The combined effect of reduced $V_{DD}$ (quadratically) and reduced frequency (linearly) will lead to a significant overall reduction in dynamic power in Mode B.
4.  **Delay:** Mode B will have a much higher delay per gate compared to Mode A, which is why the frequency had to be reduced. This illustrates the power-delay trade-off. However, for a "low-power" goal, Mode B is the clear choice.

## 7. Important Points to Remember

*   **$V_{DD}$ is the most effective knob for power reduction.**
*   **Dynamic Power is proportional to $V_{DD}^2$.** Reducing $V_{DD}$ quadratically reduces switching power.
*   **Propagation Delay is inversely related to $V_{DD}$.** Reducing $V_{DD}$ increases delay.
*   **Low $V_{DD}$ operation requires careful $V_{th}$ management.** Reducing $V_{th}$ to maintain performance at low $V_{DD}$ can significantly increase subthreshold leakage, potentially increasing static power.
*   The trade-off between power and delay is intrinsic to $V_{DD}$ scaling.
*   Adaptive Voltage and Frequency Scaling (AVFS) is a key technique to exploit this trade-off dynamically.

This concludes the notes for Module 3, Topic: Effect of Supply Voltage on Delay and Power.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
