---
title: "Domino logic"
subject: "LOW POWER VLSI"
module: "Module 4: Circuit Design Styles for Low Power"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff695"
status: "completed"
scrapedAt: "2026-05-23T18:14:56.652Z"
---
# LOW POWER VLSI - Module 4: Circuit Design Styles for Low Power

## Topic: Domino Logic

This module delves into various circuit design styles crucial for achieving low power consumption in VLSI circuits. Domino logic is a high-speed logic family that, with proper optimization, can also contribute to low-power designs. This topic will explore its operation, advantages, disadvantages, and low-power considerations.

---

### Learning Outcomes Addressed by this Topic:

*   **CO4: Apply various clocked and non-clocked design styles for logic implementation (Knowledge Level: K3)**
    *   Domino logic is a clocked logic style. Understanding its operation and variations allows for its application in logic implementation with a focus on speed and power.

---

### 1. Introduction to Domino Logic

Domino logic is a form of **precharged dynamic logic**. It combines the speed of complementary pass transistor logic with the output swing of static CMOS. The name "Domino" comes from the cascading effect of logic gates; when the first gate transitions from its precharged state, it triggers the next gate, similar to a row of dominoes falling.

#### Key Concepts:

*   **Dynamic Logic:** Logic circuits that require a clock signal to control their operation. The output is stored on parasitic capacitance and needs to be refreshed periodically.
*   **Precharging:** A phase where the output node of the logic gate is charged to a known value (usually Vdd) before the evaluation of the logic function.
*   **Evaluation:** The phase where the input signals are applied, and the precharged output is either discharged or remains at Vdd based on the logic function.
*   **NMOS-only Output Stage:** The core of a domino gate typically uses an NMOS transistor tree to discharge the output node.

#### Important Points to Remember:

*   Domino logic is generally faster than static CMOS due to reduced transistor count and no need for complementary pull-up networks.
*   It is susceptible to noise and charge sharing issues.
*   Requires a clock signal for proper operation.

---

### 2. Operation of a Basic Domino Gate

A basic domino gate consists of two main parts: a **precharge transistor** (usually a PMOS) and an **evaluation transistor** (usually an NMOS) connected to a logic network of NMOS transistors.

#### Components:

1.  **Precharge Transistor (PMOS):** Connects the output node to Vdd during the precharge phase. It is controlled by the inverted clock signal ($\overline{CLK}$).
2.  **Evaluation Transistor (NMOS):** Connects the output node to ground during the evaluation phase. It is controlled by the clock signal ($CLK$).
3.  **NMOS Logic Network:** A series/parallel combination of NMOS transistors that implements the desired logic function. If the function evaluates to true, the output node is discharged to ground.

#### Operation Phases:

1.  **Precharge Phase ($\overline{CLK}=1, CLK=0$):**
    *   The PMOS precharge transistor is ON, charging the output node (Out) to Vdd.
    *   The NMOS evaluation transistor is OFF.
    *   The output is held at a high voltage (Vdd).

2.  **Evaluation Phase ($CLK=1, \overline{CLK}=0$):**
    *   The PMOS precharge transistor is OFF.
    *   The NMOS evaluation transistor is ON.
    *   The NMOS logic network is evaluated based on the input signals.
        *   If the logic function evaluates to **true** (i.e., a conducting path from the output to ground is formed through the NMOS network), the output node is discharged to ground (0V).
        *   If the logic function evaluates to **false** (i.e., no conducting path to ground), the output node remains at Vdd due to charge retained on the parasitic capacitance.

#### Example: NOT Gate

A basic inverter using domino logic:

```
     Vdd
      |
     PMOS (controlled by CLK_bar)
      |
Out --+-------> To next gate's input
      |
     NMOS (controlled by CLK)
      |
     Input --- NMOS (logic network) --- Ground
```

*   **Precharge ($\overline{CLK}=1, CLK=0$):** Output is precharged to Vdd.
*   **Evaluation ($CLK=1, \overline{CLK}=0$):**
    *   If Input = 1, the NMOS in the logic network is ON, discharging the output to 0.
    *   If Input = 0, the NMOS in the logic network is OFF, and the output remains at Vdd.

#### Example: NAND Gate (2-input)

```
     Vdd
      |
     PMOS (controlled by CLK_bar)
      |
Out --+-------> To next gate's input
      |
     NMOS (controlled by CLK)
      |
     Input A --- NMOS (series) --- Input B --- NMOS --- Ground
```

*   **Precharge ($\overline{CLK}=1, CLK=0$):** Output is precharged to Vdd.
*   **Evaluation ($CLK=1, \overline{CLK}=0$):**
    *   If Input A = 1 AND Input B = 1, both NMOS transistors are ON, discharging the output to 0.
    *   In all other cases (A=0 or B=0 or both), at least one NMOS is OFF, and the output remains at Vdd.

---

### 3. Advantages of Domino Logic

*   **High Speed:**
    *   Fewer transistors per gate compared to static CMOS (e.g., a NAND gate uses 4 transistors in static CMOS vs. 3 in domino).
    *   The NMOS-only pull-down network leads to faster discharge than complementary pull-down networks in static CMOS.
    *   Full output voltage swing (0 to Vdd).
    *   (Refer to *Baker et al.* for detailed speed comparisons and analyses).
*   **Reduced Transistor Count:** Generally requires fewer transistors than equivalent static CMOS gates, leading to smaller area.
*   **Lower Power Consumption (under certain conditions):** While dynamic power is a concern (explained later), the reduced switching activity and elimination of static power dissipation (due to the absence of direct paths from Vdd to ground when precharge is off) can offer power savings.

---

### 4. Disadvantages of Domino Logic

*   **Charge Sharing:** During the evaluation phase, if the output node is precharged to Vdd and then evaluated by a chain of NMOS transistors, any internal nodes in the NMOS network that were precharged to Vdd might discharge through the ON evaluation transistor to ground. This can cause the output to incorrectly transition from Vdd to a lower voltage, leading to logic failure.
*   **Clock Loading:** Requires a clock signal, which can be a significant power consumer for large domino circuits. The clock distribution network needs careful design.
*   **Cascading Issues:** A direct cascade of domino gates can lead to:
    *   **Voltage Degradation (Voltage Drop):** If a gate's output is supposed to be '0' but is only partially discharged, this voltage drop can propagate to the next gate, potentially causing it to evaluate incorrectly.
    *   **Limited Fan-in:** A large fan-in in the NMOS evaluation network increases the ON resistance, slowing down the discharge and potentially leading to voltage degradation.
    *   **Threshold Voltage Drop:** The output voltage of a domino gate whose function evaluates to true is not exactly 0V but rather $V_{th,NMOS}$ (the threshold voltage of the NMOS transistors in the discharge path). This voltage drop can prevent the next gate from being properly evaluated.
*   **Susceptibility to Noise:** The dynamic nature makes it vulnerable to noise, especially during the precharge phase.
*   **Non-inverting Nature:** Basic domino gates are inverting. Creating non-inverting functions requires an additional inverter.

---

### 5. Low Power Design Considerations for Domino Logic

While domino logic is known for speed, several techniques can be employed to reduce its power consumption, addressing CO3 and CO4.

#### 5.1 Reducing Dynamic Power

Dynamic power is the dominant power component in CMOS circuits, proportional to $CV^2f$. In domino logic, key contributors are:

*   **Clock Power:** The clock signal drives the precharge and evaluation transistors of every domino gate.
    *   **Clock Gating:** Turn off the clock to blocks of domino logic that are not actively computing. This is a crucial technique for power saving.
    *   **Optimized Clock Drivers:** Use efficient clock buffers and tree structures.
*   **Output Capacitance Charging/Discharging:** Charging and discharging the output node capacitance ($C_{out}$) to Vdd and ground.
    *   **Reduce $C_{out}$:** Minimize gate fan-out. Where possible, use gate duplication to drive multiple gates instead of a single wide domino gate.
    *   **Reduce Swing Voltage ($V_{dd}$):** Lowering $V_{dd}$ quadratically reduces dynamic power. However, this can impact speed and may require careful design to overcome threshold voltage drops in cascaded gates.
*   **Short-Circuit Power:** Occurs during the brief interval when both PMOS and NMOS are ON. This is inherent in standard CMOS but less prominent in basic domino if designed correctly, as the precharge and evaluation transistors are gated by complementary clocks.

#### 5.2 Addressing Static Power

Domino logic inherently eliminates static power (direct Vdd-to-ground leakage) during the precharge phase when the evaluation transistor is OFF. However, leakage through the NMOS network when it's supposed to be OFF can still be a concern, especially with scaling.

#### 5.3 Low-Power Domino Variants and Techniques

To mitigate the disadvantages and enhance low-power operation, several variations and techniques are used:

*   **Standard Domino Logic (as described above):**
    *   **Advantages:** Fast, good output swing.
    *   **Disadvantages:** Charge sharing, limited fan-in, voltage drop.
    *   **Low Power Aspects:** No static power if designed correctly; clock gating can be applied.

*   **Buffer Domino Logic (Footer/Header Transistors):**
    *   To combat voltage drop and charge sharing, additional transistors (footer or header) can be added.
    *   **Footer Transistor (NMOS):** Placed in series with the NMOS logic network and the evaluation NMOS. It is controlled by the same clock as the evaluation NMOS. This helps to isolate the output from the ground during evaluation, preventing charge sharing if the output is not fully discharged.
    *   **Header Transistor (PMOS):** Placed in series with the PMOS precharge transistor. It is controlled by the same clock as the PMOS precharge. This helps in faster precharging.
    *   **Low Power Aspect:** Can improve noise immunity and reduce voltage drop, indirectly allowing for lower $V_{dd}$ operation or better performance at a given $V_{dd}$, thus saving power.

*   **Dual-Rail Domino Logic:**
    *   Each logic gate is implemented using two complementary domino gates (one for the function, one for its inverse).
    *   **Advantages:** Eliminates voltage drop issues because the output is always driven to a valid logic level (either Vdd or 0V). It also prevents charge sharing.
    *   **Disadvantages:** Doubles the transistor count and thus increases area and capacitance, potentially increasing power consumption if not managed.
    *   **Low Power Aspect:** While it uses more transistors, the improved reliability can allow for operation at lower $V_{dd}$ or with reduced margins, potentially leading to power savings in complex designs where static domino would be problematic.

*   **Domino Logic with Keeper Circuits:**
    *   A weak PMOS pull-up transistor (keeper) is added in parallel to the NMOS evaluation transistor and the logic network.
    *   The keeper transistor is always ON when the evaluation transistor is ON.
    *   **Function:** If the output node is not fully discharged by the NMOS network (e.g., due to charge sharing or high resistance in the NMOS network), the keeper provides a weak pull-up to Vdd, maintaining a valid high output.
    *   **Disadvantages:** The keeper is always ON during evaluation, drawing static current from Vdd if the output is discharged. This is a significant power dissipation issue for keepers.
    *   **Low Power Aspect:** Can improve noise immunity and functionality at lower $V_{dd}$ by preventing unwanted discharge, but the keeper current is a direct power overhead. Techniques like pulsed keepers (keepers that are only ON for a short duration) can mitigate this.

*   **High-Threshold Voltage (Vth) Transistors:**
    *   Using high-Vth transistors for the keeper or for transistors in the NMOS evaluation network can reduce leakage current, thereby reducing static power.
    *   **Trade-off:** High-Vth transistors are slower, impacting performance.

*   **Input Signal Ordering:**
    *   For gates with inputs arriving at different times, order the inputs to the NMOS evaluation network such that the input that causes discharge appears first (or earlier) if possible. This can help reduce charge sharing.
    *   **Low Power Aspect:** Optimizing input arrival times can prevent unnecessary discharges or spurious transitions, saving power.

---

### 6. Comparison with Static CMOS and Other Dynamic Logic Styles

#### 6.1 Static CMOS vs. Domino Logic

| Feature              | Static CMOS                                     | Domino Logic                                        |
| :------------------- | :---------------------------------------------- | :-------------------------------------------------- |
| **Speed**            | Slower (complementary pull-up/down)             | Faster (NMOS-only pull-down, no complementary load) |
| **Transistor Count** | Higher (e.g., 4 for NAND)                       | Lower (e.g., 3 for NAND)                            |
| **Static Power**     | Zero (ideally, leakage is the only static power) | Zero (if correctly designed with no keeper)         |
| **Dynamic Power**    | Proportional to $CV^2f$                         | Proportional to $CV^2f$, plus clock power           |
| **Noise Immunity**   | Good                                            | Poor (susceptible to charge sharing)                |
| **Clock Required**   | No                                              | Yes                                                 |
| **Complexity**       | Simpler design and analysis                     | More complex analysis (charge sharing, voltage drop) |
| **Area**             | Generally larger                                | Generally smaller                                   |
| **Low Power Focus**  | Primarily by reducing $C$, $V$, $f$, and leakage | Primarily by clock gating, reducing $C$, $V$, $f$, and optimizing domino variants |

#### 6.2 Other Dynamic Logic Styles (e.g., NP Domino, C²MOS)

*   **NP Domino:** Uses both NMOS and PMOS networks for pull-down and pull-up. Offers better noise margins and no voltage drop issue but is slower and more complex than standard domino.
*   **C²MOS (Clocked CMOS):** Uses a clock to turn ON/OFF both PMOS and NMOS pull-up/down transistors. It is a form of domino logic where the evaluation transistor is explicitly a PMOS and the precharge transistor is an NMOS. It's generally slower than standard domino but simpler to analyze.

**Reference:** For detailed comparisons and analyses of these logic styles, consult *Baker et al.* and *Razavi (Design of Analog CMOS Integrated Circuits)* for general CMOS principles and speed/power trade-offs. *Sedra & Smith* provides foundational concepts of logic gates and CMOS circuits.

---

### 7. Practical Considerations and Power Optimization

*   **Granularity of Domino:** Avoid wide domino gates. Break down complex logic into smaller, manageable domino stages.
*   **Clock Skew and Jitter:** These can severely impact domino performance and lead to failures. Careful clock tree synthesis is essential.
*   **Technology Node:** In advanced technology nodes, leakage power becomes a dominant factor. Careful transistor sizing and stacking of transistors in the evaluation network can help reduce leakage.
*   **$V_{dd}$ Scaling:** Domino logic is highly sensitive to voltage scaling. Thorough simulation is required to ensure functionality at reduced supply voltages.
*   **Tool Support:** EDA tools provide options for implementing and simulating domino logic, including analysis of charge sharing and noise.

---

### 8. Examples and Applications

*   **High-Speed Arithmetic Circuits:** Adders, multipliers, and other data-path elements benefit from the speed of domino logic.
*   **Memory Interfaces:** Can be used in sense amplifiers and output buffers for high-speed memory access.
*   **Pipelined Architectures:** Domino logic can be effectively used in pipelined processors where the clock frequency is critical.

---

### 9. Practice Questions and Exercises

**Question 1:**
Explain the two phases of operation for a standard domino logic gate. (K2)

**Answer:**
1.  **Precharge Phase:** The output node is charged to Vdd by a PMOS transistor controlled by the inverted clock ($\overline{CLK}$). The evaluation transistor (controlled by $CLK$) is OFF.
2.  **Evaluation Phase:** The PMOS precharge transistor turns OFF. The NMOS evaluation transistor turns ON. The NMOS logic network is evaluated. If the logic function is true, the output node is discharged to ground through the NMOS evaluation transistor and the logic network. If false, it remains at Vdd.

**Question 2:**
What is charge sharing in domino logic, and how can it lead to a logic failure? (K2)

**Answer:**
Charge sharing occurs when internal nodes within the NMOS evaluation network, which may have been precharged to Vdd, are connected to the output node (also precharged to Vdd). During the evaluation phase, if the output node is discharged to ground, these internal nodes can also discharge through the conducting path to ground, causing the output to transition from a "high" state to a "low" state unexpectedly, leading to incorrect logic.

**Question 3:**
Describe one technique to mitigate the voltage drop issue in cascaded domino logic gates. (K3)

**Answer:**
*   **Using a Keeper Circuit:** A weak PMOS transistor connected between the output and Vdd, controlled by the evaluation clock, can help pull up the output if it's not fully discharged, thus combating voltage drop.
*   **Using Dual-Rail Domino Logic:** Implementing both the function and its inverse ensures a proper pull-up or pull-down, eliminating voltage drop issues entirely.
*   **Buffering the Output:** Adding a buffer stage after a domino gate can help restore the voltage level before driving the next gate.

**Question 4:**
Which component of domino logic is the primary consumer of clock power, and how can this be reduced? (K2, K3)

**Answer:**
The precharge and evaluation transistors (typically a PMOS and an NMOS) driven by the clock signals are the primary consumers of clock power. Clock power can be reduced by implementing **clock gating**, which disables the clock signal to blocks of domino logic that are not actively computing.

**Question 5:**
Consider a domino NAND gate driving another domino gate. If the output of the NAND gate is supposed to be '1' (due to inputs A=0 or B=0), but due to charge sharing, it discharges to 0.5V. If the next gate's evaluation transistor requires a minimum input voltage of 0.8V to turn ON, what is the likely outcome for the second gate? (K3)

**Answer:**
The second gate's evaluation transistor will likely not turn ON properly, as its input voltage (0.5V) is below the required threshold (0.8V). This will result in the second gate not discharging its output, even if its logic function would otherwise demand it, leading to incorrect operation.

---

### Key Points to Remember:

*   Domino logic is **precharged dynamic logic** offering high speed.
*   It operates in **precharge** and **evaluation** phases.
*   Primary issues are **charge sharing**, **voltage drop**, and **limited fan-in**.
*   Low-power techniques include **clock gating**, **reducing capacitance**, **voltage scaling**, and using optimized domino variants (e.g., dual-rail, pulsed keepers).
*   Careful **clock tree design** and **input ordering** are crucial for reliable and efficient domino operation.

---
This concludes the study notes for Domino Logic in Module 4 of Low Power VLSI. Remember to consult the specified textbooks for deeper insights and detailed mathematical analyses.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
