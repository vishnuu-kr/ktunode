---
title: "Static Power Dissipation:"
subject: "LOW POWER VLSI"
module: "Module 2: Sources of power dissipation in digital  ICs"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff67d"
status: "completed"
scrapedAt: "2026-05-23T18:14:40.505Z"
---
# Low Power VLSI - Module 2: Sources of Power Dissipation in Digital ICs

## Topic: Static Power Dissipation

This topic delves into the power consumed by digital integrated circuits (ICs) even when they are not actively switching states. Understanding static power dissipation is crucial for designing energy-efficient digital systems.

---

### 1. Introduction to Static Power Dissipation

Static power dissipation, also known as **quiescent power dissipation** or **leakage power**, is the power consumed by an IC when it is in a stable state and no switching activity is occurring. This power is primarily due to **leakage currents** that flow through transistors and other components.

*   **Why is it important?** As semiconductor technologies scale down, transistor sizes decrease, and the number of transistors per IC increases. This leads to a proportionally higher leakage current, making static power dissipation a significant contributor to the overall power consumption of modern ICs.
*   **Impact:** High static power can lead to:
    *   Reduced battery life in portable devices.
    *   Increased heat generation, requiring more complex cooling solutions.
    *   Degradation of device performance and reliability.
    *   Environmental concerns due to energy waste.

**(Relates to CO2: Discuss the different sources of power dissipation in digital ICs.)**

---

### 2. Sources of Static Power Dissipation

The primary sources of static power dissipation in CMOS digital ICs are:

#### 2.1. Subthreshold Leakage Current (I<sub>sub</sub>)

This is the most dominant static leakage current in scaled CMOS technologies.

*   **Mechanism:** Even when a MOSFET is supposed to be in the **OFF** state (i.e., $V_{GS} < V_{th}$, where $V_{GS}$ is the gate-source voltage and $V_{th}$ is the threshold voltage), a small current still flows between the drain and source. This is because the gate voltage doesn't perfectly deplete the channel, and some charge carriers still have enough thermal energy to cross the channel.
*   **Factors Affecting I<sub>sub</sub>:**
    *   **Threshold Voltage ($V_{th}$):** A lower $V_{th}$ significantly increases subthreshold leakage.
    *   **Temperature:** Leakage current is highly sensitive to temperature. It increases exponentially with temperature.
    *   **Drain-Source Voltage ($V_{DS}$):** Increased $V_{DS}$ in the OFF state (reverse bias of the source-body junction) can increase leakage through the **Band-to-Band Tunneling (BTBT)** mechanism (more prominent in advanced technologies).
    *   **Gate Oxide Thickness:** Thicker gate oxides reduce electric field and thus leakage, but this is limited by scaling.
    *   **Channel Length:** Shorter channel lengths can exacerbate short-channel effects, increasing leakage.

*   **Mathematical Expression (Simplified):**
    $$I_{sub} \approx I_0 \left(1 - e^{\frac{-V_{DS}}{V_T}}\right) e^{\frac{V_{GS} - V_{th}}{nV_T}}$$
    Where:
    *   $I_0$ is a technology-dependent constant.
    *   $V_T = kT/q$ is the thermal voltage.
    *   $n$ is the subthreshold swing factor (typically 1 to 2).

**(Referenced in Razavi, Baker et al., Sedra & Smith regarding MOSFET operation and leakage.)**

#### 2.2. Gate Oxide Leakage Current (I<sub>ox</sub>)

This leakage occurs through the gate dielectric (e.g., SiO$_2$) into the channel.

*   **Mechanism:** As the gate oxide thickness ($T_{ox}$) is reduced with scaling, quantum mechanical tunneling allows charge carriers (electrons or holes) to tunnel through the oxide layer.
*   **Types of Gate Leakage:**
    *   **Direct Tunneling:** Occurs when the oxide is very thin (e.g., < 1.5 nm). Carriers tunnel directly through the triangular potential barrier.
    *   **Fowler-Nordheim Tunneling:** Occurs at higher electric fields (thinner effective oxide thickness) where carriers tunnel through a trapezoidal potential barrier.
*   **Factors Affecting I<sub>ox</sub>:**
    *   **Gate Oxide Thickness ($T_{ox}$):** Most critical factor; thinner oxides lead to higher leakage.
    *   **Gate Voltage ($V_{GS}$):** Higher gate voltage increases the electric field across the oxide, leading to higher tunneling currents.
    *   **Gate Material:** Metal gates with different work functions can influence leakage.
    *   **Oxide Material:** High-k dielectrics are introduced to reduce leakage by allowing thicker physical layers while maintaining capacitance.

**(Referenced in Razavi, Baker et al., Sedra & Smith regarding MOS capacitor physics and advanced gate dielectrics.)**

#### 2.3. Junction Leakage Current (I<sub>j</sub>)

This leakage occurs across the reverse-biased PN junctions of the drain and source regions with the substrate.

*   **Mechanism:**
    *   **Reverse Bias Current:** This is due to minority carriers generated by thermal energy in the depletion region being swept across the junction. This is often called **generation-recombination leakage**.
    *   **Band-to-Band Tunneling (BTBT):** At high reverse bias voltages, carriers can tunnel across the PN junction depletion region. This becomes more significant in scaled technologies with shorter channel lengths and higher doping concentrations.
    *   **Tunneling-Assisted by Traps:** Leakage through defect states within the depletion region.
*   **Factors Affecting I<sub>j</sub>:**
    *   **Reverse Bias Voltage ($V_{DS}$ for drain-substrate, $V_{SB}$ for source-substrate):** Leakage increases with reverse bias.
    *   **Temperature:** Thermal generation of carriers increases with temperature.
    *   **Doping Concentration:** Higher doping levels can increase BTBT.
    *   **Junction Area:** Larger junction areas lead to higher total leakage current.

**(Referenced in Sedra & Smith, Razavi regarding PN junction characteristics.)**

#### 2.4. Body Leakage Current (I<sub>body</sub>)

This is essentially the junction leakage of the source-to-body and drain-to-body junctions. It's often grouped with junction leakage but specifically refers to the current flowing into or out of the body terminal.

---

### 3. Static Power Dissipation in Digital Gates (CMOS Inverter Example)

Consider a simple CMOS inverter. When the input is stable (e.g., logic '0' or logic '1'), one of the transistors (PMOS or NMOS) is ideally turned OFF. However, due to leakage currents, a small current still flows.

*   **Input = Logic '0' (Low Voltage, $V_{in} \approx 0$):**
    *   The PMOS transistor is ON.
    *   The NMOS transistor is OFF.
    *   **Leakage Current Path:** Subthreshold leakage through the NMOS transistor from $V_{DD}$ to GND.
    *   **Static Power:** $P_{static} \approx V_{DD} \times I_{sub, NMOS}$

*   **Input = Logic '1' (High Voltage, $V_{in} \approx V_{DD}$):**
    *   The PMOS transistor is OFF.
    *   The NMOS transistor is ON.
    *   **Leakage Current Path:** Subthreshold leakage through the PMOS transistor from $V_{DD}$ to GND.
    *   **Static Power:** $P_{static} \approx V_{DD} \times I_{sub, PMOS}$

**Important Note:** In a perfectly designed CMOS circuit with ideal transistors, the static power dissipation would be zero. However, due to the leakage mechanisms discussed above, it is never truly zero in real-world devices.

**(Example calculation can be done using the $I_{sub}$ formula and typical $V_{th}$ and $V_{DD}$ values.)**

---

### 4. Impact of Technology Scaling on Static Power Dissipation

Technology scaling, driven by Moore's Law, has profound implications for static power dissipation.

*   **Decreasing Threshold Voltage ($V_{th}$):** To maintain proper switching speeds and drive currents in smaller transistors, $V_{th}$ is often reduced. This dramatically increases subthreshold leakage ($I_{sub}$) as it's exponentially dependent on $V_{th}$.
*   **Decreasing Gate Oxide Thickness ($T_{ox}$):** To maintain gate control over the channel, $T_{ox}$ must decrease. This leads to increased gate oxide leakage ($I_{ox}$) due to quantum mechanical tunneling.
*   **Increasing Transistor Density:** More transistors on a chip mean that even small leakage currents per transistor, when summed up, contribute significantly to the overall static power.
*   **Short-Channel Effects:** As channel lengths shrink, effects like **drain-induced barrier lowering (DIBL)** and **G GTI (Gate-Induced Drain Leakage)** can further increase leakage currents.

**(Relates to CO1: Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.)**

---

### 5. Techniques to Reduce Static Power Dissipation

Several design techniques are employed to mitigate static power dissipation:

#### 5.1. High Threshold Voltage ($V_{th}$) Transistors

*   **Concept:** Use transistors with higher $V_{th}$ in non-critical paths or for transistors that are expected to be OFF for extended periods.
*   **Trade-off:** Higher $V_{th}$ leads to slower switching speeds and reduced performance.
*   **Implementation:** **Multiple $V_{th}$ processes** allow designers to select transistors with different $V_{th}$ values for different parts of the circuit.

#### 5.2. Stacking Effect

*   **Concept:** When multiple transistors are connected in series in the OFF state (e.g., in a NAND gate inputting a '1' or in a NOR gate inputting a '0'), the voltage drop across the series stack can reduce the voltage across individual OFF-state transistors. This can significantly reduce subthreshold leakage compared to a single OFF-state transistor.
*   **Example:** In a NAND gate, if both inputs are '1', both NMOS transistors are ON. If one input is '0', one NMOS is OFF. If we have a 3-input NAND, and two inputs are '1' and one is '0', the OFF NMOS has the source connected to a conducting NMOS, which drops the voltage across the OFF NMOS, reducing its leakage.

#### 5.3. Power Gating (or Voltage Gating)

*   **Concept:** This is a powerful technique where entire blocks or sections of the IC are completely shut off by inserting a **sleep transistor** (typically a high-$V_{th}$ PMOS transistor) in the power supply rail ($V_{DD}$) or ground rail of that block.
*   **Mechanism:** When the block is not needed, the sleep transistor is turned OFF, effectively disconnecting the block from the power supply, thus eliminating static power consumption in that block.
*   **Wake-up:** To reactivate the block, the sleep transistor is turned ON.
*   **Challenges:**
    *   **State Retention:** The state of the block is lost when powered down. **State retention registers** or **backup power domains** are needed to preserve critical data.
    *   **Wake-up Latency:** The time it takes to power up the block can be significant.
    *   **Inrush Current:** When the sleep transistor turns ON, a large current can flow, potentially causing voltage droop. This can be mitigated with **header/footer transistors** or controlled ramp-up of voltage.

**(Relates to CO3: Describe the various approaches for power management in digital ICs.)**

#### 5.4. Body Biasing

*   **Concept:** Applying a voltage to the body terminal of a MOSFET can modulate its threshold voltage.
*   **Forward Body Bias (FBB):** Applying a negative voltage to the body of an NMOS (or positive to PMOS body) reduces $V_{th}$, improving speed but increasing leakage.
*   **Reverse Body Bias (RBB):** Applying a positive voltage to the body of an NMOS (or negative to PMOS body) increases $V_{th}$, reducing leakage but decreasing speed.
*   **Application:** RBB can be used to reduce static power in idle blocks. FBB can be used for performance boost when needed.

#### 5.5. Leakage Reduction in Gate Oxides

*   **High-k Dielectrics:** Using materials with a higher dielectric constant than SiO$_2$ allows for a physically thicker gate dielectric layer while maintaining the same gate capacitance. This significantly reduces direct tunneling leakage.
*   **Different Gate Electrode Materials:** Choosing appropriate gate electrode materials can also help in optimizing leakage.

---

### 6. Key Concepts and Definitions

*   **Static Power Dissipation:** Power consumed when the circuit is idle and not switching.
*   **Leakage Current:** Undesired current flow through transistors even in their OFF state.
*   **Subthreshold Leakage ($I_{sub}$):** Leakage current flowing between drain and source when $V_{GS} < V_{th}$.
*   **Gate Oxide Leakage ($I_{ox}$):** Leakage current through the gate dielectric.
*   **Junction Leakage ($I_{j}$):** Leakage across reverse-biased PN junctions.
*   **Threshold Voltage ($V_{th}$):** The minimum gate-source voltage required to turn on a MOSFET.
*   **Power Gating:** A technique to turn off power to idle blocks using a sleep transistor.
*   **Stacking Effect:** Reduced leakage in series-connected OFF transistors due to voltage division.
*   **Multiple $V_{th}$ Design:** Using transistors with different threshold voltages to balance performance and leakage.
*   **High-k Dielectrics:** Advanced gate insulating materials used to reduce gate leakage.

---

### 7. Important Points to Remember

*   Static power is becoming increasingly dominant in scaled technologies.
*   Subthreshold leakage is typically the largest contributor to static power.
*   Temperature has a significant impact on leakage currents.
*   Reducing $V_{th}$ is a primary enabler of performance but a major cause of leakage.
*   Power gating is a highly effective but complex technique for eliminating static power in idle blocks.
*   The choice of transistors (e.g., $V_{th}$) and their placement is critical for static power management.

---

### 8. Practice Questions with Answers

**Question 1:** What is the primary source of static power dissipation in modern scaled CMOS technologies?

**Answer:** Subthreshold leakage current ($I_{sub}$).

**Question 2:** How does a decrease in threshold voltage ($V_{th}$) affect static power dissipation?

**Answer:** A decrease in $V_{th}$ significantly increases static power dissipation because subthreshold leakage is exponentially dependent on $V_{th}$.

**Question 3:** Explain the concept of "power gating" and its advantage in reducing static power.

**Answer:** Power gating involves inserting a sleep transistor (typically a PMOS) in the power supply path to an idle block. When the block is not in use, the sleep transistor is turned OFF, completely cutting off the power supply and thus eliminating static power consumption in that block.

**Question 4:** The "stacking effect" reduces static power consumption. Describe the condition under which this effect is observed and why it occurs.

**Answer:** The stacking effect is observed when multiple transistors are connected in series in the OFF state. It occurs because the voltage drop across the series stack is distributed among the OFF transistors. This voltage division means that the effective gate-source voltage ($V_{GS}$) for each OFF transistor is lower than it would be if it were isolated, thereby reducing its subthreshold leakage current.

**Question 5:** Which of the following factors will **not** directly increase static power dissipation in a MOSFET?
    a) Increased temperature
    b) Decreased threshold voltage
    c) Increased gate oxide thickness
    d) Increased drain-source voltage (in the OFF state for NMOS)

**Answer:** c) Increased gate oxide thickness. While increased gate oxide thickness generally reduces gate leakage, it doesn't directly cause an increase in static power. The other options directly increase leakage currents (subthreshold, gate oxide tunneling, junction leakage/BTBT).

---

### 9. Alignment with Course Outcomes

*   **CO1: Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.**
    *   This topic directly addresses the impact of scaling on static power (reduced $V_{th}$, $T_{ox}$) and mentions short-channel effects like DIBL influencing leakage.
*   **CO2: Discuss the different sources of power dissipation in digital ICs.**
    *   This topic thoroughly covers the primary sources: subthreshold leakage, gate oxide leakage, and junction leakage.
*   **CO3: Describe the various approaches for power management in digital ICs.**
    *   This topic details several static power reduction techniques, including high $V_{th}$, stacking, and power gating, which are key power management approaches.

---

This comprehensive study note provides a detailed understanding of static power dissipation, its causes, its impact due to technology scaling, and the various techniques used to mitigate it, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
