---
title: "Variation of shortcircuit current with load capacitance"
subject: "LOW POWER VLSI"
module: "Module 2: Sources of power dissipation in digital  ICs"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff679"
status: "completed"
scrapedAt: "2026-05-23T18:14:37.578Z"
---
# LOW POWER VLSI: Module 2: Sources of Power Dissipation in Digital ICs

## Topic: Variation of Short-Circuit Current with Load Capacitance

---

### 1. Introduction to Short-Circuit Power Dissipation

**Definition:** Short-circuit power dissipation occurs when there is a direct conductive path between the power supply (Vdd) and ground (GND) during the switching of a CMOS logic gate. This happens when both the PMOS and NMOS transistors in a CMOS inverter are momentarily on simultaneously.

**Course Outcome Alignment:**
*   **CO2:** Discuss the different sources of power dissipation in digital ICs. (Knowledge Level: K2) - This topic directly addresses one of the primary sources of power dissipation.

**Key Concepts:**
*   **CMOS Inverter Structure:** A CMOS inverter consists of a PMOS transistor connected to Vdd and an NMOS transistor connected to GND. Their gates are tied together, and their outputs are connected.
*   **Switching Transition:** During the transition from logic '0' to '1' (or '1' to '0') at the output, there's a period where both transistors are in the saturation or triode region, allowing current to flow from Vdd to GND.
*   **Short-Circuit Current (Isc):** The current flowing from Vdd to GND through both PMOS and NMOS transistors during switching.

**Textbook Reference (General Concept):**
*   **Sedra & Smith, Microelectronic Circuits:** Provides fundamental understanding of MOSFET operation and characteristics, which is crucial for comprehending why short-circuit current flows during switching. (Chapter 4: MOSFETs)
*   **Baker, Li, Boyce, CMOS: Circuits Design, Layout and Simulation:** Details the behavior of CMOS gates, including switching characteristics and power dissipation mechanisms. (Chapter 2: CMOS Transistor Theory, Chapter 5: CMOS Inverter)

---

### 2. The Short-Circuit Current Path

**Description:**
When the input to a CMOS inverter changes, the output doesn't switch instantaneously. There's a finite rise/fall time for the input signal. During this transition, both the PMOS and NMOS transistors can be simultaneously conducting.

*   **Input at 0V (low):** PMOS is ON, NMOS is OFF. Output is Vdd.
*   **Input at Vdd (high):** PMOS is OFF, NMOS is ON. Output is 0V.
*   **During Input Transition (e.g., 0V to Vdd):**
    *   Initially, PMOS is ON, NMOS is OFF.
    *   As the input voltage rises, the PMOS starts to turn OFF.
    *   Simultaneously, as the input voltage crosses the threshold voltage (Vth), the NMOS starts to turn ON.
    *   There's an overlapping period where both PMOS and NMOS are partially or fully conducting, creating a path from Vdd to GND.

**Visualization:**
Imagine a "voltage divider" effect where both transistors act as resistors in series between Vdd and GND. The current flows through this path.

**Important Point to Remember:** The magnitude of the short-circuit current depends on the input signal's transition time. A faster input transition leads to a shorter duration of simultaneous conduction, but potentially a higher peak current. A slower transition leads to a longer duration of conduction, but possibly a lower peak current.

---

### 3. Factors Affecting Short-Circuit Current

**Key Factors:**
*   **Input Transition Time (t_rise / t_fall):** As mentioned above, this is a primary factor.
*   **Supply Voltage (Vdd):** Higher Vdd generally leads to higher short-circuit current.
*   **Transistor Characteristics:** Threshold voltage (Vth), mobility (μ), channel length (L), and width (W) of the transistors influence current.
*   **Load Capacitance (CL):** This is the focus of this topic.

---

### 4. Variation of Short-Circuit Current with Load Capacitance (CL)

**The Core Question:** How does the capacitance attached to the output of the inverter affect the short-circuit current flowing through it during switching?

**Understanding the Interaction:**
The load capacitance (CL) represents the capacitance of the wires and subsequent gates that the inverter drives. When the inverter switches, it needs to charge or discharge this capacitance.

*   **Charging CL:** The PMOS transistor pulls CL up towards Vdd.
*   **Discharging CL:** The NMOS transistor pulls CL down towards GND.

**How CL Affects the Switching Process:**
*   **Larger CL:** Requires more time to charge/discharge. This means the output voltage change (Vout) will have a slower rise/fall time.
*   **Smaller CL:** Allows for faster charging/discharging, resulting in a quicker output voltage change.

**The Impact on Short-Circuit Current:**

**Initial Intuition:** One might think that a larger load capacitance, requiring more energy to switch, would lead to *more* short-circuit current. However, the relationship is nuanced.

**Detailed Analysis:**

1.  **During the Input Transition:** The short-circuit current is primarily driven by the input signal's transition and the instantaneous voltages across the PMOS and NMOS transistors.
2.  **Output Voltage Response:** The load capacitance (CL) affects the *output voltage's* response to the switching. A larger CL slows down the output transition.
3.  **Overlap Period:** The duration of the short-circuit current flow is related to the time it takes for the input to transition from a state where PMOS is fully ON and NMOS is OFF to a state where NMOS is fully ON and PMOS is OFF. This transition also influences the output transition.
4.  **Current Magnitude:** The peak short-circuit current is roughly proportional to $(V_{in} - V_{th,n})^2 / R_{on,n}$ for NMOS and $(V_{dd} - V_{in} - V_{th,p})^2 / R_{on,p}$ for PMOS (where $R_{on}$ is the effective resistance during the transition and $V_{in}$ is the input voltage).

**The Key Insight:**
While CL doesn't directly *cause* the short-circuit current, it influences the *rate* at which the output voltage changes. The *input* transition time is the dominant factor controlling the duration of the simultaneous conduction state.

However, CL *does* influence the total energy dissipated as short-circuit power during a switching event.

**Formal Derivation (Simplified):**
The short-circuit current ($I_{sc}$) can be approximated as the sum of the drain currents of the PMOS ($I_{D,p}$) and NMOS ($I_{D,n}$) transistors during the transition.

$I_{sc} \approx I_{D,p} + I_{D,n}$

For a CMOS inverter switching from 0 to Vdd, at a given input voltage $V_{in}$:
*   $I_{D,n} \approx \frac{\beta_n}{2} (V_{in} - V_{th,n})^2$ (assuming saturation)
*   $I_{D,p} \approx \frac{\beta_p}{2} (V_{dd} - V_{in} - V_{th,p})^2$ (assuming saturation)

The values of $V_{in}$ and $V_{out}$ are related by the load capacitance:
$C_L \frac{dV_{out}}{dt} = I_{D,n} - I_{D,p}$ (This equation describes the charging/discharging of CL, not the short-circuit current itself directly, but it shows how CL affects the voltage dynamics).

**The crucial point is how CL affects the *timing* of the output transition, which indirectly impacts the *duration* and *average value* of the short-circuit current.**

*   **Larger CL:** Leads to a slower output transition. This means the input and output transitions overlap for a longer effective period, *potentially* increasing the total energy dissipated as short-circuit power. However, the *peak* short-circuit current might not necessarily increase significantly if the input transition time remains the same.
*   **Smaller CL:** Leads to a faster output transition. This reduces the overlap period.

**Empirical Observation & Simulation:**
Simulations and practical measurements show that the total short-circuit energy (and thus average power) per transition generally *increases* with increasing load capacitance. This is because the period during which both transistors are conducting, while influenced by input slope, is also effectively extended by the slower output response to charge/discharge the larger CL.

**Course Outcome Alignment:**
*   **CO1:** Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects (Knowledge Level: K2). Understanding how CL affects SC power contributes to this broader understanding of power trends.
*   **CO2:** Discuss the different sources of power dissipation in digital ICs. (Knowledge Level: K2) - This topic is a direct elaboration of short-circuit power.

**Reference Material Example:**
*   **Baker, Li, Boyce, CMOS: Circuits Design, Layout and Simulation:** Chapter 5 discusses CMOS inverter delays, which are directly related to load capacitance. The equations for delay implicitly show how CL affects the output voltage waveform, and thus the overlap of transistor conduction. They might present graphs or equations showing SC power increasing with CL.
*   **Razavi, Design of Analog CMOS Integrated Circuits:** While focused on analog, Razavi's treatment of MOSFET behavior and transient analysis (Chapter 10: MOSFETs in small-signal operation, but the principles of transient analysis apply) can be used to understand the underlying physics.

---

### 5. Power Dissipation Equation and CL

**Short-Circuit Power ($P_{sc}$):**
$P_{sc} = V_{dd} \times I_{sc,avg}$

Where $I_{sc,avg}$ is the average short-circuit current during a switching transition.

The total short-circuit energy per transition ($E_{sc}$) is given by:
$E_{sc} = \int V_{dd} \times I_{sc}(t) dt$

And for a frequency 'f' of switching:
$P_{sc} = E_{sc} \times f$

**How CL Influences $E_{sc}$:**
As discussed, a larger CL slows down the output transition. This effectively extends the time duration where $I_{sc}(t)$ is non-zero. Even if the peak $I_{sc}$ doesn't drastically change, the integral (energy) will increase.

**Simplified Model:**
Consider the input voltage as a linear ramp: $V_{in}(t) = V_{dd} \frac{t}{t_{tr}}$, where $t_{tr}$ is the input transition time.
During the transition, the effective resistance of the inverter can be modeled. The load capacitance adds to the effective resistance when charging.

**Example Scenario:**
*   **Gate A driving Gate B:**
    *   Gate A is a CMOS inverter.
    *   Gate B is another CMOS gate, contributing to the load capacitance CL on Gate A's output.
    *   If Gate B has significant input capacitance, CL is large.
    *   When Gate A switches, it has to charge/discharge this larger CL. This slows down Gate A's output.
    *   The slower output transition means the PMOS and NMOS in Gate A are conducting simultaneously for a longer duration.
    *   This longer duration of conduction leads to higher average short-circuit current and therefore higher short-circuit power dissipation in Gate A.

---

### 6. Practical Implications and Design Considerations

*   **Impact on Overall Power:** Short-circuit power, while often smaller than dynamic power (charging/discharging capacitance), can become significant in high-performance circuits with fast clock speeds and complex data paths where many gates switch simultaneously.
*   **Process Variation:** Variations in transistor characteristics and input signal slopes due to manufacturing processes can influence short-circuit power.
*   **Design Choices:**
    *   **Gate Sizing:** While sizing transistors to reduce dynamic power or meet timing requirements, designers must also consider the impact on short-circuit power. Larger transistors (wider W) can lead to higher peak currents and potentially higher short-circuit power.
    *   **Logic Style:** Different logic styles (e.g., static CMOS, dynamic logic) have varying levels of short-circuit power dissipation.
    *   **Input Transition Time Control:** In some critical paths, ensuring controlled input transition times can help manage short-circuit power. This is often achieved through buffer insertion or specific circuit design techniques.
    *   **Technology Scaling (CO1 Relevance):** As technology scales down (smaller transistors, lower Vdd), the impact of short-channel effects (like velocity saturation) changes transistor behavior. These effects can alter the short-circuit current characteristics. Also, lower Vdd generally reduces both dynamic and short-circuit power.

**Course Outcome Alignment:**
*   **CO1:** Describe the impact of technology scaling on power dissipation... (K2) - Understanding CL impact is part of this.
*   **CO3:** Describe the various approaches for power management... (K2) - Managing short-circuit power through design choices falls under this.

---

### 7. Practice Questions and Answers

**Question 1:**
Which of the following factors has the most direct impact on the duration of the simultaneous conduction of PMOS and NMOS transistors in a CMOS inverter during switching?
(a) Load Capacitance (CL)
(b) Supply Voltage (Vdd)
(c) Input Signal Transition Time
(d) Transistor Threshold Voltage

**Answer 1:**
(c) Input Signal Transition Time. While CL affects the output transition, the fundamental period where both devices are "on" is dictated by how quickly the input signal crosses the mid-point of its transition and turns on the second transistor while the first is still partially on.

---

**Question 2:**
True or False: Increasing the load capacitance (CL) on a CMOS inverter output will always increase the peak short-circuit current.

**Answer 2:**
False. The peak short-circuit current is more directly influenced by the input signal transition time and the transistor overdrive. While CL affects the output transition, it doesn't necessarily increase the peak current, but rather the duration of the short-circuit current flow, thus increasing total energy.

---

**Question 3:**
Explain why short-circuit power dissipation increases with increasing load capacitance, even though the load capacitance doesn't directly create the current path.

**Answer 3:**
Increasing load capacitance (CL) slows down the output voltage transition of the CMOS inverter. This slower output transition extends the time duration during which both the PMOS and NMOS transistors are simultaneously conducting. Since short-circuit current flows during this overlap period, a longer duration of overlap means a larger total short-circuit energy is dissipated per switching event. This translates to higher average short-circuit power dissipation, especially at higher switching frequencies.

---

**Question 4:**
Consider two identical CMOS inverters.
*   Inverter A drives a load capacitance of 10 fF.
*   Inverter B drives a load capacitance of 50 fF.
Assuming identical input transition times and supply voltage, which inverter will dissipate more short-circuit power, and why?

**Answer 4:**
Inverter B will dissipate more short-circuit power. This is because the larger load capacitance (50 fF) will cause a slower output voltage transition compared to the smaller load capacitance (10 fF) of Inverter A. The slower output transition means that the PMOS and NMOS transistors in Inverter B will be simultaneously conducting for a longer period during each switching cycle. This extended overlap leads to a higher average short-circuit current and consequently, greater short-circuit power dissipation.

---

### 8. Summary of Key Points

*   **Short-circuit power** arises from the momentary direct path between Vdd and GND during CMOS gate switching.
*   This path exists when both PMOS and NMOS transistors are simultaneously conducting.
*   The **input signal transition time** is a primary factor determining the duration and peak magnitude of short-circuit current.
*   **Load capacitance (CL)** indirectly affects short-circuit power by influencing the **output voltage transition time**.
*   **Increasing CL** leads to slower output transitions, extending the overlap period of PMOS and NMOS conduction.
*   This extended overlap increases the total **short-circuit energy dissipated per transition** and thus the average **short-circuit power**.
*   Designers must consider CL when sizing transistors and choosing logic styles to manage short-circuit power dissipation.

---

### 9. Further Exploration (Optional)

*   **Mathematical Modeling:** For a deeper understanding, study detailed models of short-circuit current that incorporate transistor characteristics, input voltage slopes, and load capacitance effects (e.g., models presented in advanced VLSI design textbooks or research papers).
*   **SPICE Simulation:** Use a SPICE simulator to observe the behavior of short-circuit current for varying load capacitances and input slopes. Plotting $I_{sc}(t)$ and integrating it will provide energy values.
*   **Advanced Topics:** Explore how short-circuit power is affected by different fabrication technologies (e.g., FinFETs) and their unique short-channel effects.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
