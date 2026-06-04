---
title: "Domino Logic"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 4: Pass transistors and Transmission gate logic:  Basic concepts"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefd8"
status: "completed"
scrapedAt: "2026-05-23T18:03:52.060Z"
---
# VLSI Circuit Design: Module 4 - Pass Transistors and Transmission Gate Logic: Basic Concepts

## Topic: Domino Logic

### 1. Introduction to Domino Logic

Domino logic is a high-speed dynamic logic family used in VLSI circuit design. It overcomes the limitations of static CMOS logic by eliminating the direct pull-up path for logic '0' outputs, thereby reducing the output impedance and allowing for faster switching speeds.

**Key Concepts:**

*   **Dynamic Logic:** Logic circuits that use clocked signals to control the evaluation of logic functions. The output is only valid during a specific clock phase.
*   **Precharge Phase:** In dynamic logic, a period where the output node is pre-charged to a known value (usually '1').
*   **Evaluation Phase:** The period where the logic function is evaluated based on the input signals.
*   **Charge Sharing:** A phenomenon in dynamic logic where charge stored on a capacitance is distributed to other capacitances, potentially leading to incorrect logic levels.
*   **Noise Immunity:** The ability of a logic circuit to maintain its correct logic state in the presence of noise.
*   **Power Consumption:** Dynamic logic often exhibits higher dynamic power consumption due to the precharge and discharge operations.

**Learning Outcomes Covered:**

*   Understanding the basic concepts of dynamic logic families. (Related to CO4)

**Textbook References:**

*   **Kang, Leblebici, Kim:** Discusses dynamic logic families as an alternative to static CMOS, highlighting speed advantages. (Chapter on Dynamic Logic Circuits)
*   **Wolf:** Explains the principles of dynamic logic and its application in high-performance circuits. (Chapter on Dynamic Logic)
*   **Weste, Eshraghian:** Provides a detailed analysis of the precharge-evaluate operation and the advantages of dynamic logic. (Chapter on Dynamic Logic)

### 2. The Basic Domino Gate Structure

A fundamental domino gate consists of a **precharge transistor** and an **evaluation transistor** connected to an inverter.

**Structure:**

1.  **Precharge Transistor (PMOS):** Connects the output node to the power supply (Vdd) during the precharge phase. It is controlled by the inverted clock signal ($\overline{CLK}$).
2.  **Evaluation Transistor (NMOS):** Connects the output node to ground (GND) during the evaluation phase. It is controlled by the main clock signal ($CLK$).
3.  **Logic Function:** Implemented using a series of NMOS transistors in the pull-down network, controlled by the logic inputs.
4.  **Inverter:** Buffers the output of the evaluation stage to restore signal integrity and drive subsequent gates.

**Operation:**

*   **Precharge Phase (CLK = 0, $\overline{CLK}$ = 1):**
    *   The PMOS precharge transistor is ON, pulling the output node to Vdd (logic '1').
    *   The NMOS evaluation transistor is OFF, disconnecting the output from ground.
    *   The output of the inverter is '0'.

*   **Evaluation Phase (CLK = 1, $\overline{CLK}$ = 0):**
    *   The PMOS precharge transistor is OFF, disconnecting the output from Vdd.
    *   The NMOS evaluation transistor is ON, allowing the output to be pulled down to ground if a valid pull-down path exists through the logic gates.
    *   If a pull-down path is formed by the input signals, the output node discharges to '0'.
    *   If no pull-down path exists, the output node remains at '1' (due to the precharge).
    *   The inverter then produces an output that is the inverse of the evaluated logic function.

**Diagram:**

```
       Vdd
        |
       PMOS (controlled by CLK') --+-- Output Node (Y)
                                   |
     NMOS (controlled by CLK) -----+
       |
     Logic Function (NMOS network)
       |
      GND
```
*Followed by an inverter: Output Node (Y) --> Inverter --> Final Output*

**Key Concepts:**

*   **Precharge Transistor:** Essential for setting the initial state.
*   **Evaluation Transistor:** Activates the logic function.
*   **Pull-down Network:** Implements the actual logic.

**Learning Outcomes Covered:**

*   Understanding the structure and operation of a basic domino gate. (Related to CO4)

**Textbook References:**

*   **Kang, Leblebici, Kim:** Provides detailed circuit diagrams and explanations of the precharge and evaluation phases. (Chapter on Dynamic Logic Circuits)
*   **Wolf:** Explains the role of the clock signals in controlling the domino gate's operation. (Chapter on Dynamic Logic)
*   **Weste, Eshraghian:** Illustrates the basic domino gate and its functional stages. (Chapter on Dynamic Logic)

### 3. Advantages of Domino Logic

Domino logic offers significant advantages over static CMOS, particularly in terms of speed.

**Key Advantages:**

*   **Higher Speed:**
    *   **Reduced Output Impedance:** During the evaluation phase, the output node is driven directly to ground by the evaluation NMOS transistor, which has a lower resistance compared to the pull-up network in static CMOS. This leads to faster discharge times.
    *   **No Load Inverter Delay in Evaluation:** The inverter is placed *after* the evaluation stage, so its delay does not contribute to the evaluation path delay.
*   **Reduced Transistor Count for Certain Logic Functions:** For some complex logic functions, domino logic can achieve the same functionality with fewer transistors than equivalent static CMOS gates.
*   **Improved Noise Immunity (compared to other dynamic families):** The precharge phase ensures that the output is always at a valid level before evaluation, providing some immunity against spurious switching.
*   **Reduced Glitching:** The monolithic pull-down path in domino logic can help reduce spurious output transitions (glitches) that can occur in static CMOS.

**Learning Outcomes Covered:**

*   Explaining the benefits of dynamic logic families. (Related to CO4)

**Textbook References:**

*   **Kang, Leblebici, Kim:** Compares the performance metrics (speed, power) of domino logic with static CMOS. (Chapter on Dynamic Logic Circuits)
*   **Wolf:** Discusses the speed advantages and trade-offs associated with domino logic. (Chapter on Dynamic Logic)
*   **Smith:** Highlights the speed benefits of domino logic in the context of ASIC design. (Chapter on Logic Families)

### 4. Disadvantages and Challenges of Domino Logic

While fast, domino logic is not without its drawbacks.

**Key Disadvantages:**

*   **Charge Sharing:** If the NMOS evaluation transistor is turned off before the output node has discharged to logic '0', any charge stored on the intermediate nodes in the NMOS pull-down network can be shared with the output capacitance, potentially causing the output to rise to an incorrect logic level ('1' when it should be '0').
*   **Clock Skew and Load:** Sensitive to clock skew and the capacitive load on the clock signal, which can impact the timing and correct operation of the precharge and evaluation phases.
*   **Higher Dynamic Power Consumption:** The continuous charging and discharging of the output capacitance during each clock cycle can lead to higher dynamic power dissipation.
*   **Input Signal Restrictions:** Inputs to a domino gate must be monotonic. They should transition from '0' to '1' or '1' to '0' but not from '0' to '1' and then back to '0' within the same evaluation phase, as this can lead to charge sharing issues.
*   **Limited Fan-in:** Large fan-in (many series NMOS transistors) in the pull-down network can increase the resistance and slow down the discharge, making domino logic less suitable for very wide gates.
*   **Need for Buffering:** The output of a domino gate is always inverted, requiring an additional inverter to produce the true output. This inverter can also introduce delay.

**Learning Outcomes Covered:**

*   Understanding the limitations and challenges of dynamic logic circuits. (Related to CO4)

**Textbook References:**

*   **Kang, Leblebici, Kim:** Thoroughly explains charge sharing and methods to mitigate it. (Chapter on Dynamic Logic Circuits)
*   **Wolf:** Discusses the impact of clock skew and the constraints on input signals. (Chapter on Dynamic Logic)
*   **Weste, Eshraghian:** Details the charge sharing problem and introduces techniques like keeper circuits. (Chapter on Dynamic Logic)
*   **Rabaey:** Addresses the power consumption aspects and input signal monotonicity requirements. (Chapter on Dynamic Logic)

### 5. Techniques to Mitigate Domino Logic Issues

Several techniques are employed to overcome the disadvantages of basic domino logic.

**Key Mitigation Techniques:**

*   **Keeper Circuits (Weak PMOS Pull-up):** A weak PMOS transistor is added in parallel with the NMOS evaluation transistor.
    *   **Purpose:** To counteract charge sharing effects. If the output node starts to rise due to charge sharing, the weak PMOS will weakly pull it back towards Vdd, helping to maintain the '0' state.
    *   **Design:** The PMOS is sized such that it is weak enough not to significantly interfere with the fast discharge during evaluation but strong enough to retain the '0' state against small charge leakage.
    *   **Drawback:** Adds static power consumption when the output is '0'.

*   **Dual-Rail Domino Logic:** Uses both true and complementary inputs to implement logic functions. This eliminates the need for input signal monotonicity and can improve noise immunity and speed.
    *   **Structure:** Each input signal is presented as both its true and complement form.
    *   **Benefit:** Prevents accidental discharge during precharge if one of the inputs is temporarily stuck at a '1' and the other is '0', by ensuring that both pull-down paths are not simultaneously activated.

*   **Clocked-Inverters:** Using clocked inverters can help control the precharge/evaluate transition more effectively.

*   **Buffer Insertion:** Adding buffers judiciously can help manage signal integrity and fan-out issues.

*   **Minimized Fan-in:** Designing logic to avoid very wide gates with long series of NMOS transistors.

**Learning Outcomes Covered:**

*   Understanding design techniques for dynamic logic circuits. (Related to CO4)

**Textbook References:**

*   **Kang, Leblebici, Kim:** Details keeper circuits and their design considerations. (Chapter on Dynamic Logic Circuits)
*   **Wolf:** Discusses dual-rail domino logic and its advantages. (Chapter on Dynamic Logic)
*   **Weste, Eshraghian:** Provides comprehensive coverage of charge sharing mitigation strategies, including keeper circuits. (Chapter on Dynamic Logic)
*   **Rabaey:** Explains dual-rail logic and its application in domino circuits. (Chapter on Dynamic Logic)

### 6. Examples of Domino Logic Gates

Let's consider a simple **NAND** gate implemented using domino logic.

**2-Input Domino NAND Gate:**

*   **Logic Function:** $Y = \overline{(A \cdot B)}$
*   **Domino Logic Implementation:**
    *   The pull-down network consists of NMOS transistors for A and B connected in series between the evaluation transistor and ground.
    *   The output of the evaluation transistor is fed to an inverter.

**Circuit Diagram (Conceptual):**

```
       Vdd
        |
       PMOS (CLK') --+-- Output Node (Y_out) -- Inverter -- Final Output (Y)
                     |
     NMOS (CLK) -----+
       |
     NMOS (A)
       |
     NMOS (B)
       |
      GND
```

**Operation:**

*   **Precharge (CLK=0):** $Y_{out}$ is precharged to '1'.
*   **Evaluate (CLK=1):**
    *   If A=1 and B=1, both series NMOS are ON, forming a path to ground. $Y_{out}$ discharges to '0'. The inverter outputs '1'.
    *   If A=0 or B=0 (or both), at least one series NMOS is OFF. No path to ground is formed. $Y_{out}$ remains '1'. The inverter outputs '0'.

**Example of Charge Sharing:**

Consider the 2-input NAND gate. If A=1, B=0, and CLK transitions from 0 to 1:
1.  **Precharge:** $Y_{out}$ = 1.
2.  **Evaluation:** CLK goes to 1. The evaluation NMOS turns ON. The NMOS for A is ON. The NMOS for B is OFF.
3.  **Problem:** If the transition from CLK=0 to CLK=1 happens very quickly and B is still transitioning from 1 to 0, there might be a moment where the NMOS for B is not fully OFF. If A is already ON, and B is not fully OFF, a partial path to ground exists. If there is a small capacitance at the node between A and B, and this node is precharged to '1' (due to the previous state), this charge can leak through the partially ON NMOS for B to ground. If the output node has a significant capacitance, this leakage might not be enough to discharge it fully to '0'. If CLK then transitions back to '0' before B is fully OFF, the output might be incorrectly held at a logic '1'.
    *   A keeper circuit would help here by weakly pulling up $Y_{out}$ if it starts to rise.

**Learning Outcomes Covered:**

*   Implementing logic functions using domino gates. (Related to CO4)
*   Analyzing the operation of domino gates with examples. (Related to CO4)

**Textbook References:**

*   **Kang, Leblebici, Kim:** Provides detailed examples of domino implementations for various logic gates (NAND, NOR, XOR). (Chapter on Dynamic Logic Circuits)
*   **Wolf:** Illustrates domino implementations of common logic functions. (Chapter on Dynamic Logic)
*   **Weste, Eshraghian:** Explains the design of domino gates for specific logic functions. (Chapter on Dynamic Logic)

### 7. Relation to Course Outcomes

*   **CO1: Explain VLSI design methodologies including ASIC types, SoC and FPGA devices, design flows, methodologies. (Knowledge Level: K2)**
    *   Domino logic is a key dynamic logic family used in high-performance VLSI designs, particularly in ASICs and SoCs for speed-critical paths. Understanding domino logic is crucial for comprehending advanced VLSI design methodologies.

*   **CO2: Describe VLSI fabrication techniques. (Knowledge Level: K2)**
    *   While domino logic itself is a circuit design technique, its implementation relies on underlying VLSI fabrication processes. The performance characteristics of domino logic are directly influenced by transistor sizing, interconnect capacitance, and voltage levels, all of which are determined by fabrication technology.

*   **CO3: Design, analyse and create the layout of static CMOS logic circuits adhering to design rules and specifications. (Knowledge Level: K3)**
    *   This module focuses on dynamic logic, contrasting it with static CMOS. Understanding domino logic helps in appreciating the trade-offs and design choices made when moving from static to dynamic implementations, and vice-versa, for performance optimization.

*   **CO4: Design and analysis of dynamic logic circuits and the implementation of basic storage cells. (Knowledge Level: K3)**
    *   **Direct Relevance:** This is the primary CO addressed by the Domino Logic topic. The entire section is dedicated to the design, analysis, advantages, disadvantages, and mitigation techniques for dynamic logic circuits, with domino logic being a prime example.

### 8. Important Points to Remember

*   **Speed Advantage:** Domino logic is significantly faster than static CMOS due to its direct pull-down path and reduced output impedance.
*   **Dynamic Nature:** Operates in precharge and evaluation phases, meaning the output is only valid during the evaluation phase.
*   **Charge Sharing is Critical:** A major challenge that can lead to incorrect logic output. Always consider charge sharing when analyzing or designing domino gates.
*   **Keeper Circuits:** Essential for mitigating charge sharing, but introduce static power.
*   **Input Monotonicity:** Basic domino gates require inputs to be monotonic. Dual-rail domino logic overcomes this limitation.
*   **Inverted Output:** The basic domino gate produces an inverted output, requiring an inverter for true logic.
*   **Power Consumption:** Can have higher dynamic power consumption due to continuous charging/discharging.

### 9. Practice Questions and Answers

**Question 1:** Explain the two main phases of operation for a domino logic gate.
**Answer:** The two phases are:
1.  **Precharge Phase:** The output node is pre-charged to a logic '1' (Vdd) by turning ON a PMOS transistor. The evaluation transistor is OFF.
2.  **Evaluation Phase:** The precharge transistor turns OFF. The evaluation transistor turns ON. The logic function is evaluated. If a path to ground exists through the NMOS pull-down network, the output node discharges to '0'; otherwise, it remains at '1'.

**Question 2:** What is the primary advantage of domino logic over static CMOS logic?
**Answer:** The primary advantage is its significantly higher switching speed, achieved by reducing output impedance during the evaluation phase and eliminating the inverter delay from the evaluation path.

**Question 3:** Describe the charge sharing problem in domino logic and one technique to mitigate it.
**Answer:** Charge sharing occurs when the evaluation transistor turns OFF before the output node has fully discharged to '0'. Charge stored on internal capacitances within the NMOS pull-down network can then be shared with the output capacitance, causing the output to rise and potentially be interpreted as a '1' when it should be a '0'.
A common mitigation technique is the use of a **keeper circuit**, which is a weak PMOS transistor connected between Vdd and the output node. It weakly pulls the output up, helping to retain the '0' state against charge leakage.

**Question 4:** What are the implications of input signal monotonicity for domino logic?
**Answer:** Basic domino gates require that input signals transition monotonically (either 0 to 1 or 1 to 0) within the evaluation phase. If an input transitions from 0 to 1 and then back to 0 within the evaluation phase, it can lead to charge sharing problems, as intermediate nodes in the pull-down network might be discharged and then partially recharged.

**Question 5:** Draw a schematic of a 2-input domino NAND gate.
**Answer:** (Refer to the conceptual diagram in Section 5). The schematic includes a PMOS for precharge, an NMOS for evaluation, and two NMOS transistors in series for the NAND function (controlled by inputs A and B) connected to ground. This is followed by an inverter.

**Question 6:** Why is dual-rail domino logic often preferred over single-rail domino logic?
**Answer:** Dual-rail domino logic uses both true and complementary inputs. This eliminates the input monotonicity constraint of single-rail domino logic and can improve noise immunity by ensuring that a valid discharge path is always present (or absent) during evaluation, reducing the likelihood of spurious transitions and charge sharing issues.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
