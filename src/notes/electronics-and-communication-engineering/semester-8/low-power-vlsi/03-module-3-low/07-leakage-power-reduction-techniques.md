---
title: "Leakage power reduction Techniques:"
subject: "LOW POWER VLSI"
module: "Module 3: Low"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff688"
status: "completed"
scrapedAt: "2026-05-23T18:14:47.823Z"
---
# LOW POWER VLSI: Module 3: Low Power Design Techniques - Leakage Power Reduction Techniques

## Introduction to Leakage Power

Leakage power is a significant contributor to the total power consumption in modern VLSI circuits, especially as technology scales down. Unlike dynamic power, which is consumed during switching activity, leakage power is dissipated even when the circuit is idle. Understanding and mitigating leakage power is crucial for achieving ultra-low power designs.

**Key Concepts:**

*   **Leakage Current:** The unwanted current that flows through a MOSFET even when it is supposed to be turned off.
*   **Static Power Dissipation:** Power consumed due to leakage currents.

**Types of Leakage Current:**

1.  **Subthreshold Leakage (I<sub>sub</sub>):** Current flowing between drain and source when the gate-to-source voltage (V<sub>GS</sub>) is below the threshold voltage (V<sub>th</sub>). This is the dominant leakage component in modern scaled technologies.
2.  **Gate Oxide Leakage (I<sub>gate</sub>):** Current flowing through the gate insulator (e.g., SiO<sub>2</sub>) due to quantum mechanical tunneling. This becomes significant with ultra-thin gate dielectrics.
3.  **Junction Leakage (I<sub>on</sub>):** Reverse bias leakage current across the drain-substrate and source-substrate PN junctions. It consists of diffusion current and generation-recombination current.
4.  **Ambient Leakage:** Leakage current that can occur due to various parasitic effects and faulty fabrication.

**(Refer to Baker et al., Chapter 6.1.2 for details on leakage mechanisms.)**

## Leakage Power Reduction Techniques

These techniques aim to reduce the magnitude of leakage currents or the number of transistors that are prone to leakage.

### 1. Device-Level Techniques

These techniques focus on modifying the transistor characteristics or structure to reduce leakage.

**a) Threshold Voltage (V<sub>th</sub>) Engineering:**

*   **Increasing V<sub>th</sub>:** A higher V<sub>th</sub> reduces subthreshold leakage. However, it also increases the switching delay, which is a trade-off.
    *   **Body Biasing (Back-gate Biasing):**
        *   **Forward Body Bias:** Reduces V<sub>th</sub>, leading to increased leakage and faster switching. Not suitable for leakage reduction.
        *   **Reverse Body Bias:** Increases V<sub>th</sub>, significantly reducing subthreshold leakage. However, it increases switching delay and power consumption during switching due to higher V<sub>GS</sub> required.
        **(Refer to Razavi (Analog CMOS), Chapter 5.3.2 for body biasing effects.)**
        *   **Example:** In a static CMOS circuit that is not actively switching, applying a reverse body bias to the NMOS transistors will increase their V<sub>th</sub>, thus reducing subthreshold leakage.
*   **High-V<sub>th</sub> Transistors:** Using transistors with inherently higher V<sub>th</sub> in the design, especially for non-critical paths where speed is not paramount.
*   **Dual-V<sub>th</sub> Design:** Employing a mix of low-V<sub>th</sub> (for speed) and high-V<sub>th</sub> (for leakage reduction) transistors within the same chip. This is a crucial technique for balancing performance and power.

**b) Gate Oxide Engineering:**

*   **Thicker Gate Oxide:** Using thicker gate dielectric layers reduces gate oxide leakage. However, this increases gate capacitance, impacting switching speed.
*   **High-k Dielectrics:** Replacing traditional SiO<sub>2</sub> with materials having a higher dielectric constant (k). This allows for a physically thicker layer while maintaining the same electrical capacitance, thus reducing gate leakage significantly.
    **(Refer to Baker et al., Chapter 6.1.2.2 for gate leakage.)**

**c) Junction Engineering:**

*   **Shallow Trench Isolation (STI):** Improves isolation between adjacent devices, reducing junction capacitance and leakage.
*   **Halo Implantation:** Creates a localized doping profile at the channel ends, which can reduce short-channel effects and improve junction breakdown voltage, indirectly affecting leakage.

### 2. Circuit-Level Techniques

These techniques manipulate the circuit topology or operating modes to minimize leakage.

**a) Sleep Mode / Power Gating:**

*   **Concept:** Disconnecting power from idle blocks of the circuit. This is a very effective technique for reducing leakage in inactive parts of the chip.
*   **Implementation:**
    *   **Header/Footer Switches:** A high-resistance PMOS (header) or NMOS (footer) transistor is inserted in the power supply (VDD) or ground path of a circuit block.
    *   **Control Signal:** A sleep signal controls the state of these switches. When the block is idle, the switch is turned OFF, effectively cutting off the power supply and reducing leakage to near zero.
*   **Trade-offs:**
    *   **Wake-up Latency:** Time taken to turn ON the sleep switch and restore power to the block.
    *   **Rush Current:** A surge of current when the block is powered ON due to the charging of internal capacitances.
    *   **State Retention:** The state of the circuit block is lost when powered off, requiring it to be re-initialized upon wake-up.
    **(Refer to Baker et al., Chapter 14.3.1 for power gating.)**
    *   **Example:** In a complex SoC, entire functional units like a graphics processor or a DSP can be put into a sleep mode when not in use, saving significant leakage power.

**b) Multi-V<sub>th</sub> Design (Revisited in circuit context):**

*   **Concept:** Using different threshold voltages for transistors in different parts of the circuit based on their criticality.
*   **Application:**
    *   **Critical Paths:** Use low-V<sub>th</sub> transistors for speed.
    *   **Non-critical Paths:** Use high-V<sub>th</sub> transistors to reduce leakage.
    *   **Memory Cells:** Often use high-V<sub>th</sub> to minimize standby leakage.

**c) Multiple Threshold Voltages with Adaptive Body Biasing (ABB):**

*   **Concept:** Combines the benefits of multiple V<sub>th</sub> values with dynamic body biasing to further optimize leakage and performance.
*   **Mechanism:** The body bias can be adjusted based on the workload to dynamically change the V<sub>th</sub>, reducing leakage during idle periods and improving performance when needed.

**d) Stasis Mode / Sleep Transistor:**

*   **Concept:** Placing a high-V<sub>th</sub> NMOS transistor in series with the pull-down network of a logic gate.
*   **Operation:** When the gate of this "sleep transistor" is turned OFF (connected to ground), it disconnects the output from ground, preventing subthreshold leakage through the pull-down transistors.
*   **Trade-offs:** Adds a series transistor, increasing the pull-down resistance and thus the delay.
    **(Refer to Baker et al., Chapter 6.1.3.2 for sleep transistors.)**
    *   **Example:** For a NAND gate, a sleep transistor in series with the PMOS pull-up network can reduce leakage when the gate is idle.

**e) Stack Effect:**

*   **Concept:** Placing transistors in series in a logic gate. When both transistors in the series stack are OFF, the voltage at the intermediate node is likely to be pulled to an intermediate voltage, creating a "reverse bias" effect on the source-drain junction of the upper transistor, thus reducing its leakage.
*   **Application:** This is an inherent benefit of certain logic styles like CMOS. Using series transistors in the OFF path of a logic gate can reduce leakage.
    **(Refer to Sedra & Smith, Chapter 4.2.3 for MOSFET operation and leakage considerations.)**
    *   **Example:** In a series of NMOS transistors in the pull-down path, if all are OFF, the voltage at the drain of the lowest OFF NMOS will be closer to VDD, effectively reverse-biasing its source-drain junction and reducing leakage compared to a single OFF NMOS.

### 3. System-Level Techniques

These techniques involve managing power at the system architecture level.

**a) Clock Gating:**

*   **Concept:** Disabling the clock signal to blocks that are not currently performing any operations. While primarily a dynamic power reduction technique, it also indirectly reduces leakage in those blocks as the transistors are not switching.
*   **Mechanism:** A clock gating cell (typically a NOR or NAND gate with enable signal) is used to enable or disable the clock.
    **(Refer to Baker et al., Chapter 14.2 for clock gating.)**

**b) Power Management Units (PMUs):**

*   **Concept:** Dedicated hardware units that control the power states of different blocks in a system. They can implement complex power management strategies, including sleep modes, dynamic voltage and frequency scaling (DVFS), and power gating.

**c) Architectural Modifications:**

*   **Concept:** Designing the system architecture to minimize the number of active transistors or to efficiently manage power states.
*   **Example:** Using specialized low-power cores for idle periods or sleep modes.

## Impact of Technology Scaling on Leakage

As technology scales down (smaller feature sizes, thinner gate oxides, lower supply voltages):

*   **Short-Channel Effects:** V<sub>th</sub> roll-off, DIBL (Drain-Induced Barrier Lowering) become more pronounced, leading to increased leakage.
*   **Thinner Gate Oxides:** Increase gate oxide tunneling current.
*   **Lower Supply Voltages:** While reducing dynamic power, they also reduce the ON-state current, making subthreshold leakage a larger proportion of total power.
*   **Increased Transistor Density:** More transistors on a chip mean a larger total leakage power even if individual transistor leakage is reduced.

**(Refer to CO1: Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.)**

**Important Points to Remember:**

*   **Trade-offs:** Most leakage reduction techniques involve a trade-off with performance (speed) or area.
*   **Leakage Dominance:** Leakage power becomes increasingly dominant in deep sub-micron technologies, especially in standby modes.
*   **Context is Key:** The choice of technique depends on the specific application, performance requirements, and the acceptable leakage budget.
*   **Power Gating is Powerful:** Power gating is one of the most effective techniques for drastic leakage reduction in idle blocks.
*   **Body Biasing is Dynamic:** Reverse body bias is effective but can impact switching power and delay.

## Practice Questions and Exercises

**Question 1:**
Which type of leakage current is dominant in modern scaled CMOS technologies?
(a) Gate Oxide Leakage
(b) Junction Leakage
(c) Subthreshold Leakage
(d) Ambient Leakage

**Question 2:**
What is the primary trade-off when increasing the threshold voltage (V<sub>th</sub>) of a MOSFET to reduce leakage?
(a) Increased fabrication cost
(b) Increased switching delay
(c) Reduced breakdown voltage
(d) Increased gate capacitance

**Question 3:**
Describe the concept of power gating and list its advantages and disadvantages.

**Question 4:**
How does the "stack effect" help in reducing leakage power in CMOS circuits? Provide a simple example.

**Question 5:**
A critical path in your design requires high speed, while a non-critical path has relaxed timing. How would you use multi-V<sub>th</sub> design principles to optimize power for these two paths?

---

### Answers

**Answer 1:**
(c) Subthreshold Leakage. As devices scale down, the gate oxide becomes thinner (increasing gate leakage), but the subthreshold slope (S) also tends to degrade, and the supply voltage is reduced, making the OFF current (subthreshold leakage) more significant relative to the ON current.

**Answer 2:**
(b) Increased switching delay. A higher V<sub>th</sub> requires a larger gate-to-source voltage (V<sub>GS</sub>) to turn the transistor ON sufficiently, leading to a longer switching time.

**Answer 3:**
**Concept of Power Gating:** Power gating involves disconnecting the power supply (VDD) or ground from inactive blocks of a circuit to reduce leakage power to near zero. This is typically achieved by inserting a high-resistance transistor (header or footer switch) in series with the power or ground rail of the block, controlled by a sleep signal.

**Advantages:**
*   Significant reduction in leakage power for idle blocks.
*   Can be applied to large circuit blocks.

**Disadvantages:**
*   **Wake-up Latency:** Time taken to power up the block.
*   **Rush Current:** Inrush of current when the block is powered on.
*   **State Loss:** The internal state of the block is lost and needs re-initialization.
*   Requires additional circuitry (sleep switch, control logic).

**Answer 4:**
The "stack effect" refers to the reduction in leakage current when multiple transistors are connected in series in the OFF state. When transistors are in series and OFF, the voltage at the intermediate node tends to settle at a voltage that reverse-biases the drain-source junction of the upper transistor. This reverse bias reduces the leakage current compared to a single transistor in the OFF state.

**Example:** Consider a series of two NMOS transistors, M1 (top) and M2 (bottom), both with their gates tied together to ground (OFF state). If M1's drain is connected to VDD and M2's source to ground, and they are both OFF, the voltage at the drain of M2 (which is the source of M1) will not be exactly at ground. It will be at some intermediate voltage. This intermediate voltage, applied to the source of M1, while its drain is at VDD, creates a reverse-biased junction for M1, reducing its subthreshold leakage.

**Answer 5:**
For the **critical path**, you would use **low-V<sub>th</sub> transistors**. This ensures that the transistors switch quickly, meeting the timing requirements for high speed. However, these transistors will have higher leakage.

For the **non-critical path**, where timing is relaxed, you would use **high-V<sub>th</sub> transistors**. These transistors will switch slower, but their leakage current will be significantly lower, thus reducing the overall power consumption of this path during idle periods.

---

## Alignment with Course Outcomes:

*   **CO1 (Technology Scaling):** Discussed in the "Impact of Technology Scaling on Leakage" section. Techniques like high-k dielectrics and V<sub>th</sub> engineering are direct responses to scaling challenges.
*   **CO2 (Sources of Power Dissipation):** The entire note is dedicated to leakage power, which is a major source of static power dissipation. Various types of leakage are detailed.
*   **CO3 (Power Management Approaches):** Leakage reduction techniques are a key aspect of power management. Power gating, sleep modes, and architectural modifications fall under this.
*   **CO4 (Logic Implementation Styles):** While not directly about clocked/non-clocked styles, techniques like the "stack effect" are inherent to the structure of CMOS logic gates. Power gating also impacts how blocks are managed within a clocked system.
*   **CO5 (Adiabatic Switching):** Adiabatic switching is a technique for reducing dynamic power and, in some contexts, can also reduce leakage by minimizing voltage swings. While not directly covered in detail here (as the topic is solely leakage reduction), it's a complementary low-power strategy.

---
This set of notes provides a comprehensive overview of leakage power reduction techniques, integrating concepts from the specified textbooks and aligning with the provided course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
