---
title: "Sources of power dissipation in digital  ICs"
subject: "LOW POWER VLSI"
module: "Module 2: Sources of power dissipation in digital  ICs"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff675"
status: "completed"
scrapedAt: "2026-05-23T18:14:34.658Z"
---
# LOW POWER VLSI

## Module 2: Sources of Power Dissipation in Digital ICs

### Topic: Sources of Power Dissipation in Digital ICs

**Course Outcomes Addressed:**
*   **CO2:** Discuss the different sources of power dissipation in digital ICs. (Knowledge Level: K2)

**Learning Outcomes:**
*   Identify and explain the primary sources of power dissipation in digital CMOS ICs.
*   Differentiate between static and dynamic power dissipation.
*   Quantify the components of dynamic power dissipation, including switching power and short-circuit power.
*   Understand the impact of technology scaling on power dissipation.

---

### 1. Introduction to Power Dissipation in Digital ICs

Power dissipation is a critical design parameter in modern integrated circuits (ICs), especially for battery-powered devices and high-performance systems where thermal management is crucial. Reducing power consumption leads to extended battery life, lower operating temperatures, and enables higher integration densities.

**Definition:** Power dissipation refers to the energy consumed by an electronic circuit and converted into heat.

In digital CMOS ICs, power dissipation can be broadly categorized into two main types:

*   **Static Power Dissipation:** Power consumed when the circuit is not switching (i.e., no logic state changes).
*   **Dynamic Power Dissipation:** Power consumed when the circuit is switching states.

---

### 2. Static Power Dissipation

Static power dissipation arises from leakage currents within the transistors and other circuit elements. Even when transistors are turned off, small amounts of current can flow, leading to continuous power consumption.

**Key Sources of Static Power Dissipation:**

*   **Subthreshold Leakage (I_sub):** This is the dominant component of static leakage in modern scaled technologies. Even when a MOSFET is in the "off" state (gate-source voltage $V_{GS} < V_{th}$, where $V_{th}$ is the threshold voltage), a small current flows from drain to source due to the thermal diffusion of charge carriers across the channel. This current is exponential with $V_{GS}$ and inversely exponential with $V_{th}$.

    *   **Formula (Simplified):** $I_{sub} \approx I_0 \cdot e^{\frac{q(V_{GS} - V_{th})}{nkT}} (1 - e^{\frac{-qV_{DS}}{kT}})$
        *   $I_0$: a technology-dependent constant
        *   $n$: subthreshold swing factor (ideally 1)
        *   $k$: Boltzmann constant
        *   $T$: Temperature
        *   $V_{DS}$: Drain-source voltage

    *   **Impact of Scaling:** As transistors shrink, the gate oxide thickness decreases, and channel lengths become shorter. This leads to a reduction in threshold voltage ($V_{th}$) and increased control of the drain voltage over the channel, significantly increasing subthreshold leakage. (Relates to **CO1**)

*   **Gate Leakage (I_gate):** This leakage occurs through the gate oxide layer. As the gate oxide thickness is reduced to improve gate control and reduce short-channel effects, direct tunneling of carriers through the thin oxide becomes significant.

    *   **Formula (Simplified):** $I_{gate}$ depends on gate voltage, oxide thickness, and the material properties of the gate dielectric. It generally increases rapidly with decreasing oxide thickness.

    *   **Impact of Scaling:** Gate leakage becomes a major concern as oxide thicknesses are scaled down aggressively. This is a direct consequence of technology scaling. (Relates to **CO1**)

*   **Junction Leakage (I_junction or I_diode):** This leakage occurs across the reverse-biased source/drain diffusion regions and the substrate (or well). It is caused by minority carrier injection into the depletion region and thermal generation of electron-hole pairs within the depletion region.

    *   **Formula (Simplified):** $I_{junction} \approx I_S \cdot e^{\frac{qV}{kT}}$ (for forward bias) and $I_{junction} \approx A \cdot J_{dep} + A \cdot J_{gen}$ (for reverse bias)
        *   $I_S$: Saturation current
        *   $V$: Applied voltage
        *   $A$: Junction area
        *   $J_{dep}$: Diffusion current density
        *   $J_{gen}$: Generation current density

    *   **Impact of Scaling:** While junction leakage is generally less dominant than subthreshold leakage in advanced nodes, it can still be significant due to the increased junction doping concentrations and smaller junction areas.

*   **Band-to-Band Tunneling (BTBT) Leakage:** In heavily doped junctions or under high electric fields, carriers can tunnel directly from the valence band to the conduction band, creating electron-hole pairs and contributing to leakage. This is more prevalent in short-channel devices. (Relates to **CO1**)

**Total Static Power Dissipation:**
$P_{static} = V_{DD} \cdot I_{static} = V_{DD} \cdot (I_{sub} + I_{gate} + I_{junction} + I_{BTBT} + ...)$

**Highlight:** Static power is a constant drain on battery life and must be managed, especially in standby modes.

---

### 3. Dynamic Power Dissipation

Dynamic power dissipation is consumed when the circuit is actively switching states. It is a function of the switching activity, voltage, and capacitance.

**Key Sources of Dynamic Power Dissipation:**

*   **Switching Power (or Dynamic Power) ($P_{switch}$):** This is the most significant component of dynamic power in most CMOS circuits. It arises from charging and discharging the load capacitances (internal and external) associated with the switching transistors.

    *   **Explanation:** When a logic gate switches from one state to another, its output capacitance ($C_L$) needs to be charged to $V_{DD}$ (for a '1' output) or discharged to 0V (for a '0' output). This charging and discharging process involves current flow and thus power dissipation.

    *   **Formula:** $P_{switch} = \alpha \cdot C_L \cdot V_{DD}^2 \cdot f$
        *   $\alpha$: Activity factor (average number of transitions per clock cycle, representing the probability of switching).
        *   $C_L$: Total load capacitance (sum of internal gate capacitances and external interconnect capacitances).
        *   $V_{DD}$: Supply voltage.
        *   $f$: Operating frequency of the circuit.

    *   **Impact of Scaling:**
        *   $V_{DD}$: Scaling of $V_{DD}$ is a primary method for reducing switching power. The power reduction is quadratic with $V_{DD}$.
        *   $C_L$: As transistors shrink, their intrinsic capacitances decrease. However, interconnect capacitances can become more dominant in scaled technologies due to increased interconnect density and smaller feature sizes.
        *   $f$: Increasing frequency increases switching power linearly.

    *   **Reference (Baker et al., 4/e, Chapter 9):** Baker discusses the importance of load capacitance ($C_L$) and how it is composed of gate capacitance, diffusion capacitance, and interconnect capacitance. The power equation $P_{switch} = C_{eff} V_{DD}^2 f$ is fundamental.

    *   **Example:** Consider a simple inverter driving a load capacitance $C_L$. Each time the input switches, the output switches, charging and discharging $C_L$. If the input switches at frequency $f$, the output also switches at frequency $f$. The energy dissipated per transition is $C_L V_{DD}^2$. Over time, this leads to the power consumption.

*   **Short-Circuit Power ($P_{sc}$):** This occurs during the transient phase of switching when both NMOS and PMOS transistors in a CMOS gate are simultaneously conductive for a brief period. During this overlap, a direct path exists from $V_{DD}$ to ground, allowing current to flow through both transistors.

    *   **Explanation:** When the input to a CMOS gate transitions, there's a finite time for the transistors to turn on and off. Before the pull-down NMOS transistor is fully "on" and the pull-up PMOS transistor is fully "off" (or vice versa), both can be partially on, creating a temporary short circuit.

    *   **Formula:** $P_{sc} = \frac{1}{6} V_{DD} I_{peak} (t_{sc}) \cdot f$ (This is a simplified approximation)
        *   $I_{peak}$: Peak short-circuit current.
        *   $t_{sc}$: Duration of the short-circuit condition.

    *   **Dependence:** Short-circuit power depends on the input transition time (slower transitions lead to longer $t_{sc}$ and higher $P_{sc}$), the output load capacitance (which affects the switching speed), the supply voltage ($V_{DD}$), and the transistor characteristics.

    *   **Impact of Scaling:** As feature sizes shrink, transistors switch faster, potentially reducing the duration of the short-circuit condition ($t_{sc}$). However, increased doping concentrations can also lead to higher peak currents. The overall impact can be complex and technology-dependent.

    *   **Reference (Razavi, 2/e, Chapter 2):** Razavi touches upon CMOS switching characteristics, including the overlap between NMOS and PMOS conduction. While not a dedicated section on power dissipation, the fundamental understanding of transistor switching behavior is crucial.

    *   **Example:** For an inverter, when the input goes from high to low, the NMOS turns on and the PMOS turns off. However, there's a period where both are partially conducting, allowing current to flow from $V_{DD}$ to ground.

**Total Dynamic Power Dissipation:**
$P_{dynamic} = P_{switch} + P_{sc}$

**Highlight:** Dynamic power is directly proportional to the frequency and voltage. Reducing $V_{DD}$ is the most effective way to reduce dynamic power.

---

### 4. Total Power Dissipation

The total power dissipated by a digital IC is the sum of static and dynamic power.

$P_{total} = P_{static} + P_{dynamic}$

**Reference (Sedra & Smith, 8/e, Chapter 13):** Sedra and Smith provide a comprehensive overview of MOSFET behavior and circuit analysis, which forms the foundation for understanding current flow and power dissipation. They discuss leakage currents and switching characteristics in their chapters on MOSFETs and digital logic circuits.

---

### 5. Impact of Technology Scaling on Power Dissipation

Technology scaling, driven by Moore's Law, involves reducing the feature sizes of transistors. This has profound effects on power dissipation, both positive and negative.

**Key Aspects of Scaling and Power:**

*   **Voltage Scaling ($V_{DD}$):** To maintain reliability and reduce electric fields, supply voltage ($V_{DD}$) is also scaled down with technology nodes. This is the most effective way to reduce power (quadratically for switching power).
    *   **Constant-Field Scaling:** Both dimensions and voltage are scaled by the same factor $\lambda$. $V_{DD}/\lambda$, $W/\lambda$, $L/\lambda$. This leads to reduced power per gate but potentially slower speeds.
    *   **Lateral Scaling (Dennard Scaling):** Dimensions and voltage are scaled by $\lambda$. $V_{DD}/\lambda$, $W/\lambda$, $L/\lambda$, oxide thickness $t_{ox}/\lambda$. Threshold voltage $V_{th}/\lambda$. This aims to maintain constant power density.
        *   **Power per gate:** Scales by $\lambda^2$.
        *   **Delay:** Scales by $\lambda$.
        *   **Speed:** Improves by $1/\lambda$.
        *   **Power density:** Remains constant.

*   **Device Miniaturization:** Smaller transistors have smaller capacitances ($C_L$), which helps reduce switching power (linearly). However, shorter channel lengths lead to increased short-channel effects like higher leakage currents (subthreshold, BTBT) and reduced threshold voltages.

*   **Increased Leakage Currents:** As mentioned, reduced gate oxide thickness and shorter channel lengths in scaled technologies lead to significant increases in static power dissipation due to subthreshold leakage and gate leakage. This can make static power a dominant factor in future technologies, especially in idle states.

*   **Increased Density:** More transistors on a chip mean that even if power per transistor is reduced, the total power can still increase due to the sheer number of active components.

*   **Interconnect Scaling:** While transistors shrink, interconnects also shrink. However, the resistance and capacitance of interconnects do not always scale down favorably, potentially leading to increased resistance-voltage drops and larger interconnect capacitances, which can increase switching power.

**Reference (CO1):** All textbooks will discuss technology scaling. For instance, Baker et al. likely dedicates sections to the impact of scaling on device performance and power. Razavi's "Fundamentals of Microelectronics" would also offer insights into scaling principles.

**Highlight:** While scaling reduces $V_{DD}$ and intrinsic capacitance to lower dynamic power, it exacerbates leakage currents, increasing static power. Managing both static and dynamic power becomes crucial.

---

### 6. Practice Questions

**Question 1 (CO2):**
A CMOS circuit operates at a supply voltage $V_{DD} = 1.0V$ and a frequency $f = 200MHz$. The effective load capacitance $C_L$ is $50fF$. The circuit spends 90% of its time switching and 10% in an idle state. In the idle state, the average static leakage current is $10\mu A$. Calculate:
a) The switching power dissipation.
b) The static power dissipation when the circuit is idle.
c) The average power dissipation over a period of time where it is idle 10% of the time and switching 90% of the time.
d) If $V_{DD}$ is reduced to $0.8V$, by what factor does the switching power change?

**Answer 1:**
a) $P_{switch} = \alpha \cdot C_L \cdot V_{DD}^2 \cdot f$
   Assuming $\alpha \approx 1$ for maximum switching power calculation (or if the question implies it's always switching for this part). Let's assume $\alpha=0.5$ for a more general case, but the question is about the "switching power" which implies the power *while* switching. For simplicity, let's take $\alpha=1$ for this component.
   $f = 200 \times 10^6 Hz$
   $C_L = 50 \times 10^{-15} F$
   $V_{DD} = 1.0V$
   $P_{switch} = 1 \cdot (50 \times 10^{-15} F) \cdot (1.0V)^2 \cdot (200 \times 10^6 Hz) = 10 \times 10^{-3} W = 10mW$

b) $P_{static} = V_{DD} \cdot I_{leakage\_idle}$
   $P_{static} = 1.0V \cdot 10\mu A = 1.0V \cdot 10 \times 10^{-6} A = 10 \times 10^{-6} W = 10\mu W$

c) Average Power $P_{avg} = P_{switching} \times (\% \text{ switching time}) + P_{static} \times (\% \text{ idle time})$
   Let's assume the $10mW$ calculated in (a) is the power when it's *actively* switching.
   $P_{avg} = (10mW) \cdot (0.90) + (10\mu W) \cdot (0.10)$
   $P_{avg} = 9mW + 1\mu W = 9.001mW$

d) Let the original switching power be $P_{switch1}$ at $V_{DD1} = 1.0V$.
   Let the new switching power be $P_{switch2}$ at $V_{DD2} = 0.8V$.
   $P_{switch1} \propto V_{DD1}^2$
   $P_{switch2} \propto V_{DD2}^2$
   The factor of change is $\frac{P_{switch2}}{P_{switch1}} = \frac{V_{DD2}^2}{V_{DD1}^2} = \frac{(0.8V)^2}{(1.0V)^2} = \frac{0.64}{1.0} = 0.64$.
   The switching power changes by a factor of 0.64 (i.e., it reduces to 64% of its original value).

**Question 2 (CO2):**
Explain why short-circuit power is a transient phenomenon and how it relates to the input transition time of a logic gate.

**Answer 2:**
Short-circuit power occurs during the brief interval when both the pull-up (PMOS) and pull-down (NMOS) transistors in a CMOS gate are simultaneously partially conductive. This happens during the input voltage transition. As the input voltage sweeps through the switching threshold voltage of the gate, one transistor is turning off while the other is turning on. If this transition is slow, the period where both transistors are conductive is extended, allowing a direct path for current from $V_{DD}$ to ground, thus dissipating short-circuit power. A faster input transition time reduces this overlap period, thereby decreasing short-circuit power.

**Question 3 (CO1, CO2):**
How does the reduction in gate oxide thickness due to technology scaling affect both static and dynamic power dissipation?

**Answer 3:**
*   **Static Power:** Reducing gate oxide thickness significantly increases **gate leakage** current. As the oxide becomes thinner, carriers can tunnel directly through it, even when the transistor is supposed to be off. This directly increases static power dissipation.
*   **Dynamic Power:** Reduced oxide thickness improves gate control, allowing transistors to switch faster. This can contribute to higher operating frequencies. While reduced oxide thickness also means smaller intrinsic gate capacitance (potentially reducing $P_{switch}$ slightly per gate), the overall impact on dynamic power is complex. However, the primary concern related to thin oxide is the increase in gate leakage (static power). The ability to operate at higher frequencies ($f$) due to improved switching speed can increase dynamic power if not managed.

---

### 7. Important Points to Remember

*   **Two Main Categories:** Static Power (leakage) and Dynamic Power (switching).
*   **Dominant Static Component:** Subthreshold leakage is often the most significant static component in modern technologies.
*   **Dominant Dynamic Component:** Switching power ($P_{switch} = \alpha C_L V_{DD}^2 f$) is usually the largest contributor to dynamic power.
*   **$V_{DD}$ Scaling:** The most effective strategy to reduce dynamic power is to lower the supply voltage ($V_{DD}$), as power scales quadratically with voltage.
*   **Short-Circuit Power:** Occurs during transient switching when both NMOS and PMOS are partially on. It depends on input transition time.
*   **Scaling Trade-offs:** Technology scaling reduces dynamic power by lowering $V_{DD}$ and capacitances but increases static power due to enhanced leakage currents.

---
This concludes Module 2, Topic: Sources of Power Dissipation in Digital ICs. Understanding these sources is fundamental for designing low-power VLSI systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
