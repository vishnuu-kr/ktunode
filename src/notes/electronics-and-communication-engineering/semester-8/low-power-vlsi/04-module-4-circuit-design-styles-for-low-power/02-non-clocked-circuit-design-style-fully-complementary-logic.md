---
title: "Non clocked circuit design style: Fully Complementary logic"
subject: "LOW POWER VLSI"
module: "Module 4: Circuit Design Styles for Low Power"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff690"
status: "completed"
scrapedAt: "2026-05-23T18:14:52.978Z"
---
## LOW POWER VLSI: Module 4 - Circuit Design Styles for Low Power

### Topic: Non-Clocked Circuit Design Style: Fully Complementary Logic

This document provides comprehensive study notes on the Fully Complementary Logic design style within the context of non-clocked circuit design for low power VLSI. These notes are structured to cover the learning outcomes, align with course outcomes, and incorporate relevant concepts from the specified textbooks.

---

### 1. Introduction to Non-Clocked Circuit Design Styles

**Definition:** Non-clocked circuit design styles, also known as **asynchronous circuits** or **self-timed circuits**, are digital logic designs that do not rely on a global clock signal to synchronize operations. Instead, they use local handshaking signals between functional blocks to control data flow and signal propagation.

**Relevance to Low Power:**
*   **Reduced Dynamic Power:** The absence of a continuously toggling global clock significantly reduces dynamic power dissipation, which is a major contributor to power consumption in synchronous designs.
*   **Activity-Driven Power Saving:** Power is consumed only when a computation is actually happening, unlike synchronous circuits where clock power is dissipated regardless of activity.
*   **Potential for Reduced Switching Activity:** By design, only necessary transitions occur, leading to potentially lower overall switching activity.

**Contrast with Clocked Designs:**
*   **Synchronous Designs:** Rely on a global clock signal. All state changes occur in lockstep with the clock edges.
*   **Non-Clocked Designs:** Operations are triggered by the completion of previous operations, indicated by local handshaking signals.

**Key Concepts:**
*   **Handshaking:** A protocol where two communicating components exchange control signals to ensure orderly data transfer. This typically involves request (REQ) and acknowledge (ACK) signals.
*   **Local Synchronization:** Synchronization is managed by local control signals rather than a global clock.
*   **Event-Driven Operation:** Computation is driven by the arrival of data and completion signals.

**Textbook References:**
*   While Behzad Razavi's "Design of Analog CMOS Integrated Circuits" and Sedra & Smith's "Microelectronic Circuits" focus primarily on analog design and basic digital circuits respectively, they lay the foundation for understanding transistor behavior crucial for implementing any logic style. Baker, Li, Boyce's "CMOS: Circuits Design, Layout and Simulation" provides a more in-depth look at digital circuit design, including aspects relevant to implementing different logic families.

---

### 2. Fully Complementary Logic (FCL) / Static CMOS Logic

**Definition:** Fully Complementary Logic (FCL), more commonly known as **Static CMOS Logic**, is a fundamental and widely used logic family in digital VLSI design. It utilizes both NMOS and PMOS transistors to implement logic functions.

**Core Principle:**
*   Each logic function is implemented by two complementary networks:
    *   **Pull-up Network (PUN):** Constructed using PMOS transistors, which pulls the output voltage up to the supply voltage ($V_{DD}$) when the output should be logic '1'.
    *   **Pull-down Network (PDN):** Constructed using NMOS transistors, which pulls the output voltage down to ground ($V_{SS}$) when the output should be logic '0'.
*   In a valid FCL gate, the PUN and PDN are **mutually exclusive**:
    *   When the output is being driven to $V_{DD}$ by the PUN, the PDN is guaranteed to be off (high impedance).
    *   When the output is being driven to $V_{SS}$ by the PDN, the PUN is guaranteed to be off (high impedance).
*   This ensures that there is **never a direct path between $V_{DD}$ and $V_{SS}$** when the inputs are stable, significantly reducing static power dissipation.

**Advantages of FCL for Low Power:**
*   **Zero Static Power Dissipation:** This is the primary low-power advantage. As long as the input signals are valid (not in the transition region), one network (PUN or PDN) is always off, preventing DC current flow from $V_{DD}$ to $V_{SS}$.
*   **High Noise Immunity:** The complementary nature and strong drive from both PMOS and NMOS networks provide excellent noise margins.
*   **Full Swing Output:** The output voltage swings rail-to-rail (from $V_{SS}$ to $V_{DD}$), which is ideal for driving subsequent logic gates.
*   **Reduced Switching Power (under certain conditions):** While FCL gates do consume dynamic power during switching, the complementary structure and efficient switching characteristics can contribute to lower dynamic power compared to some other logic families when designed appropriately.

**Disadvantages of FCL:**
*   **Larger Area:** Requires both PMOS and NMOS transistors for each logic function, leading to a larger silicon area compared to pseudo-NMOS or NTL logic.
*   **Higher Capacitive Load:** The presence of both transistor types can lead to larger parasitic capacitances, affecting speed.
*   **PMOS Transistor Speed:** PMOS transistors are generally slower than NMOS transistors due to lower hole mobility, which can limit the performance of complex FCL gates.

**Circuit Design Style (as a non-clocked style):**
While FCL itself is a logic family, it can be *used* within a non-clocked design methodology. In such a scenario, the FCL gates would be interconnected and controlled by handshaking signals rather than a global clock. The "non-clocked" aspect refers to the *system-level control*, not necessarily the internal operation of a single FCL gate, which is inherently combinational and responds to input changes. However, the *absence of a global clock* is what defines it as a non-clocked circuit design *style*.

**Learning Outcomes Addressed:**
*   **CO4 (K3):** Apply various clocked and non-clocked design styles for logic implementation. Understanding FCL is crucial for applying it in non-clocked or asynchronous designs.

---

### 3. Implementation of Basic Logic Gates using FCL

**3.1. NOT Gate (Inverter)**

*   **Function:** $Y = \overline{A}$
*   **Structure:** A single PMOS transistor connected between $V_{DD}$ and the output, and a single NMOS transistor connected between the output and $V_{SS}$. Both transistors share the input $A$.

```
      VDD
       |
      PMOS (A)
       |
Y -----+----- NMOS (A)
       |
      VSS
```

*   **Operation:**
    *   If $A=0$ (low): PMOS is ON, NMOS is OFF. $Y$ is pulled up to $V_{DD}$.
    *   If $A=1$ (high): PMOS is OFF, NMOS is ON. $Y$ is pulled down to $V_{SS}$.
*   **Low Power Aspect:** No static power consumption. Dynamic power is consumed only during the transition of $A$.

**3.2. NAND Gate (2-input)**

*   **Function:** $Y = \overline{A \cdot B}$
*   **Structure:**
    *   **PUN:** Two PMOS transistors in parallel, connected to $V_{DD}$. Their gates are connected to inputs $A$ and $B$ respectively. The drain of both PMOS transistors is connected to the output $Y$.
    *   **PDN:** Two NMOS transistors in series, connected to $V_{SS}$. Their gates are connected to inputs $A$ and $B$ respectively. The drain of the series combination is connected to the output $Y$.

```
      VDD
       |
      PMOS (A) || PMOS (B)
       |       |
Y -----+-------+-----
       |       |
      NMOS (A) -- NMOS (B)
       |
      VSS
```

*   **Operation:**
    *   If $A=0$ or $B=0$ (or both): At least one PMOS in PUN is ON, and at least one NMOS in PDN is OFF. The PUN pulls $Y$ to $V_{DD}$.
    *   If $A=1$ AND $B=1$: Both PMOS transistors in PUN are OFF, and both NMOS transistors in PDN are ON. The PDN pulls $Y$ to $V_{SS}$.
*   **Low Power Aspect:** No static power consumption. Static power is only dissipated during transitions.

**3.3. NOR Gate (2-input)**

*   **Function:** $Y = \overline{A + B}$
*   **Structure:**
    *   **PUN:** Two PMOS transistors in series, connected to $V_{DD}$. Their gates are connected to inputs $A$ and $B$ respectively.
    *   **PDN:** Two NMOS transistors in parallel, connected to $V_{SS}$. Their gates are connected to inputs $A$ and $B$ respectively. Their drains are connected to the output $Y$.

```
      VDD
       |
      PMOS (A) -- PMOS (B)
       |
Y -----+-------+-----
       |       |
      NMOS (A) || NMOS (B)
       |       |
      VSS
```

*   **Operation:**
    *   If $A=0$ AND $B=0$: Both PMOS transistors in PUN are ON, and both NMOS transistors in PDN are OFF. The PUN pulls $Y$ to $V_{DD}$.
    *   If $A=1$ or $B=1$ (or both): At least one PMOS in PUN is OFF, and at least one NMOS in PDN is ON. The PDN pulls $Y$ to $V_{SS}$.
*   **Low Power Aspect:** No static power consumption. Dynamic power is consumed only during transitions.

**3.4. CMOS Combinational Logic:**

*   Complex combinational logic functions are implemented by cascading these basic gates or by constructing more complex PUNs and PDNs.
*   **General Structure:**
    *   **PUN:** Consists of PMOS transistors connected in series (for AND function) or parallel (for OR function) to form paths from $V_{DD}$ to the output. If a branch needs to implement an inverted input signal ($\overline{A}$), an inverter is used internally or the PUN structure is modified.
    *   **PDN:** Consists of NMOS transistors connected in series (for OR function) or parallel (for AND function) to form paths from the output to $V_{SS}$. If a branch needs to implement an inverted input signal ($\overline{A}$), an inverter is used internally or the PDN structure is modified.
*   **Key Design Rule:** The PUN and PDN must be **dual** in structure. For every series connection in the PUN, there is a corresponding parallel connection in the PDN, and vice-versa. This ensures that for any input combination, there is exactly one path from $V_{DD}$ to the output OR one path from the output to $V_{SS}$, but never both or neither.

**Example: 2-input XOR Gate**

*   **Function:** $Y = A \oplus B = A\overline{B} + \overline{A}B$
*   **Structure:** Requires a more complex PUN and PDN.

```
      VDD
       |
      PMOS(A) -- PMOS(B)
       |       |
Y -----+-------+-----
       |       |
      NMOS(A) || NMOS(B)
       |
      VSS

      VDD
       |
      PMOS(A)
       |
Y -----+----- NMOS(B)
       |
      VSS

(This represents a simplified view. A full XOR gate implementation is more complex and involves multiple transistors.)
```
*   A typical CMOS XOR gate implementation might look like this:

```
      VDD
       |
      PMOS(A) -- PMOS(B)    (Path for A=0, B=0 -> Y=1)
       |       |
Y -----+-------+-----
       |       |
      NMOS(B) -- NMOS(A)    (Path for A=1, B=1 -> Y=0)
       |
      VSS

      VDD
       |
      PMOS(B)               (Path for A=0, B=1 -> Y=1)
       |
Y -----+----- NMOS(A)
       |
      VSS

      VDD
       |
      PMOS(A)               (Path for A=1, B=0 -> Y=1)
       |
Y -----+----- NMOS(B)
       |
      VSS
```
*   This is a simplified representation. The actual structure involves careful arrangement of series and parallel PMOS/NMOS to ensure the dual property and correct logic. The key is that when $A=0, B=0$, the top branch (PMOS A || PMOS B) is ON, and the bottom (NMOS B -- NMOS A) is OFF. When $A=1, B=1$, the top branch is OFF, and the bottom is ON. For the cross-coupled paths, one PMOS and one NMOS are ON for the remaining cases.

**Textbook References:**
*   **Baker, Li, Boyce:** Chapter 3 (CMOS Inverter), Chapter 4 (Combinational Logic Design) provides detailed explanations of FCL gate structures and their operation.
*   **Sedra & Smith:** Chapter 10 (CMOS Technology and Logic Design) offers a foundational understanding of CMOS inverter and basic gates.

---

### 4. Power Dissipation in FCL

**4.1. Static Power Dissipation:**

*   **Ideal Case:** In a perfectly designed FCL gate, static power dissipation is **zero**. This is because there is never a direct conductive path between $V_{DD}$ and $V_{SS}$ when inputs are stable.
*   **Leakage Power:** In reality, transistors are not perfect switches. Even when "off," there is a small leakage current that flows from $V_{DD}$ to $V_{SS}$. This leakage current depends on:
    *   **Threshold Voltage ($V_{th}$):** Lower $V_{th}$ increases leakage.
    *   **Device Scaling:** Smaller devices often have higher leakage.
    *   **Temperature:** Leakage increases with temperature.
    *   **Substrate Bias:** Can affect leakage.
*   **Short-Channel Effects:** As transistors scale down (CO1), effects like DIBL (Drain-Induced Barrier Lowering) and GIDL (Gate-Induced Drain Leakage) can increase leakage current.
*   **Substrate Current:** High electric fields near the drain can generate carriers that flow into the substrate, contributing to leakage.

**4.2. Dynamic Power Dissipation:**

Dynamic power is dissipated during switching events. It has two main components:

*   **Capacitive Load Power ($P_{CL}$):** This is the dominant component of dynamic power. It arises from charging and discharging the load capacitance ($C_L$) at the output node.
    *   **Formula:** $P_{CL} = \alpha \cdot f \cdot C_L \cdot V_{DD}^2$
        *   $\alpha$: Activity factor (average number of transitions per clock cycle, or per input transition in asynchronous circuits).
        *   $f$: Operating frequency.
        *   $C_L$: Total load capacitance (includes gate capacitance of next stage, diffusion capacitance, interconnect capacitance).
        *   $V_{DD}$: Supply voltage.

    *   **Low Power Strategy:** Reducing $V_{DD}$ (voltage scaling) and reducing $C_L$ are key strategies for reducing this power component. Minimizing the number of switching transistors and optimizing layout to reduce interconnect capacitance are also important.

*   **Short-Circuit Current Power ($P_{SC}$):** This occurs when both the PMOS and NMOS transistors in a gate are simultaneously conducting (during the transition phase of the input signal).
    *   **Cause:** Input signals do not transition instantaneously from logic '0' to '1' or vice-versa. During the transition, both PMOS and NMOS can be in the saturation or triode region, creating a temporary conductive path between $V_{DD}$ and $V_{SS}$.
    *   **Formula (approximate):** $P_{SC} \approx \frac{1}{12} \cdot \alpha \cdot f \cdot \tau_{sc} \cdot V_{DD} \cdot I_{peak}$
        *   $\tau_{sc}$: Duration of the short-circuit current.
        *   $I_{peak}$: Peak short-circuit current.
    *   **Low Power Strategy:** Slowing down the rise/fall times of input signals can reduce the duration and peak current of the short-circuit path, thus reducing this power. However, this can also impact performance. Optimizing transistor sizing is crucial.

**Learning Outcomes Addressed:**
*   **CO1 (K2):** Describe the impact of technology scaling on power dissipation. Scaling increases leakage power.
*   **CO2 (K2):** Discuss the different sources of power dissipation. Identifies static (leakage) and dynamic (capacitive, short-circuit) power in FCL.
*   **CO3 (K2):** Describe the various approaches for power management. Explicitly mentions voltage scaling and capacitance reduction as strategies.

**Textbook References:**
*   **Baker, Li, Boyce:** Chapter 4 discusses dynamic and static power in CMOS circuits.
*   **Razavi (Analog):** While focused on analog, the understanding of device physics and leakage mechanisms is foundational.

---

### 5. FCL in Non-Clocked (Asynchronous) Design

**How FCL fits into a Non-Clocked Style:**

In a non-clocked design, FCL gates are interconnected using a handshaking protocol. This protocol dictates when a gate should operate based on the availability of valid inputs and the completion of the previous stage.

**Example: Data Path with FCL in a 2-Phase Handshake Protocol**

Let's consider a simple data path where an FCL NAND gate receives data from an FCL NOR gate.

*   **Components:**
    *   **Stage 1 (NOR):** Inputs A, B. Output Y1.
    *   **Stage 2 (NAND):** Inputs Y1, C. Output Y2.
*   **Handshaking Signals:**
    *   **Request (REQ):** Sent from a preceding stage to the current stage.
    *   **Acknowledge (ACK):** Sent from the current stage back to the preceding stage to indicate completion.
*   **Data Path Control:**
    *   The NOR gate receives $A$, $B$, and a REQ signal.
    *   When REQ arrives, if $A$ and $B$ are valid, the NOR gate computes $Y1$.
    *   Once $Y1$ is stable, the NOR gate asserts an ACK signal to its preceding stage (if any) and sends its output $Y1$ and a REQ signal (derived from its own completion) to the NAND gate.
    *   The NAND gate receives $Y1$, $C$, and a REQ signal from the NOR gate.
    *   When the NAND gate's REQ arrives, if $Y1$ and $C$ are valid, it computes $Y2$.
    *   Once $Y2$ is stable, the NAND gate asserts its ACK signal to the NOR gate and potentially sends its output and a REQ signal to the next stage.

**Power Saving in this context:**

1.  **No Global Clock Power:** The primary saving is the elimination of the global clock signal and its associated power consumption.
2.  **Activity-Driven Computation:** The NAND gate only performs its computation when it receives a REQ signal from the NOR gate, indicating that its input ($Y1$) is ready. If the NOR gate is idle, the NAND gate remains idle and consumes only minimal leakage power.
3.  **Reduced Glitching:** Properly designed asynchronous circuits can mitigate glitch propagation, which can be a significant source of dynamic power in synchronous designs. FCL's inherent property of having a valid output only after stable inputs helps in this regard.

**FCL as a "Non-Clocked" Style:**

It's important to clarify that "non-clocked circuit design style" refers to the *system-level synchronization mechanism*. FCL itself is a static, combinational logic family. When used in an asynchronous system, the *control signals* that manage data flow are not derived from a global clock. The FCL gates are the building blocks that perform the logic computation based on these asynchronous control signals.

**Learning Outcomes Addressed:**
*   **CO4 (K3):** Apply various clocked and non-clocked design styles for logic implementation. This section explains *how* FCL is applied in a non-clocked context.
*   **CO3 (K2):** Describe the various approaches for power management. Directly demonstrates power savings achieved by avoiding a global clock.

**Reference Books:**
*   While not explicitly covered in the listed textbooks as a primary focus, asynchronous design principles are a separate field. However, understanding logic families like FCL (from Baker et al.) is a prerequisite for implementing them in any design style.

---

### 6. Advanced Concepts and Considerations

*   **Adiabatic Switching:** While FCL itself is not adiabatic, it can be a target for adiabatic techniques. Adiabatic circuits aim to minimize energy loss during switching by charging and discharging capacitors gradually, often using oscillating power supplies. FCL's inherent low static power and predictable switching behavior make it compatible with some adiabatic approaches, though implementation is complex. (CO5: Describe the use of Adiabatic switching for power management).
*   **Threshold Voltage Optimization:** For low leakage, higher $V_{th}$ devices are preferred. However, this can reduce switching speed. A trade-off is necessary. Techniques like Forward Body Biasing can temporarily lower $V_{th}$ for speed, then return it to a higher value for low leakage.
*   **Transistor Sizing:** Proper sizing of PMOS and NMOS transistors is critical for balancing speed, power consumption (dynamic and short-circuit), and area. PMOS transistors are typically made wider than their NMOS counterparts to compensate for lower hole mobility, ensuring matched rise and fall times.
*   **Gate Leakage:** As transistors shrink, gate leakage (current through the gate insulator) becomes more significant. This is a form of static power dissipation that FCL cannot entirely eliminate.

**Learning Outcomes Addressed:**
*   **CO1 (K2):** Impact of scaling on power dissipation (gate leakage, $V_{th}$ effects).
*   **CO5 (K2):** Adiabatic switching compatibility with FCL.

---

### 7. Practice Questions and Answers

**Q1. What is the primary advantage of using Fully Complementary Logic (FCL) for low-power design?**
    *   **Answer:** Zero static power dissipation when inputs are stable, due to the absence of a direct path between $V_{DD}$ and $V_{SS}$.

**Q2. Explain why the Pull-up Network (PUN) and Pull-down Network (PDN) in an FCL gate must be complementary and mutually exclusive.**
    *   **Answer:** To prevent a direct short circuit between $V_{DD}$ and $V_{SS}$, which would lead to excessive static power consumption. When the output is to be high, the PMOS network is active and the NMOS network is off. When the output is to be low, the NMOS network is active and the PMOS network is off.

**Q3. Identify the two main components of dynamic power dissipation in an FCL gate and their respective formulas.**
    *   **Answer:**
        1.  **Capacitive Load Power ($P_{CL}$):** $P_{CL} = \alpha \cdot f \cdot C_L \cdot V_{DD}^2$
        2.  **Short-Circuit Current Power ($P_{SC}$):** $P_{SC} \approx \frac{1}{12} \cdot \alpha \cdot f \cdot \tau_{sc} \cdot V_{DD} \cdot I_{peak}$

**Q4. How does using FCL in a non-clocked (asynchronous) design contribute to low power consumption compared to a clocked synchronous design?**
    *   **Answer:** The primary saving comes from eliminating the power consumed by the global clock signal. Additionally, computation is event-driven, meaning gates only switch when their inputs are ready and a computation is required, reducing unnecessary switching activity and power.

**Q5. Besides capacitive load and short-circuit current, what other source of static power dissipation is inherent in FCL gates, especially with modern scaling?**
    *   **Answer:** Leakage current (including subthreshold leakage, gate leakage, etc.).

**Q6. Design the PUN and PDN for a 2-input NOR gate using FCL.**
    *   **Answer:**
        *   **PUN:** Two PMOS transistors in series, connected to $V_{DD}$. Gates connected to inputs $A$ and $B$.
        *   **PDN:** Two NMOS transistors in parallel, connected to $V_{SS}$. Gates connected to inputs $A$ and $B$. The drains of both NMOS transistors are connected to the output.

**Q7. True or False: FCL is a clocked logic style.**
    *   **Answer:** False. FCL is a logic *family*. It can be implemented in either clocked (synchronous) or non-clocked (asynchronous) design *styles*. The question refers to the design style.

---

### 8. Important Points to Remember

*   **Zero Static Power is the Goal:** The defining feature of FCL is its ability to achieve zero static power under ideal conditions.
*   **Dual Network Design:** The complementary PUN and PDN are essential for FCL operation and low power. They must be duals.
*   **$V_{DD}^2$ Dependence:** Dynamic power (especially capacitive load) is highly sensitive to $V_{DD}$. Voltage scaling is a very effective low-power technique.
*   **Asynchronous Advantage:** Non-clocked (asynchronous) design styles using logic families like FCL offer significant power savings by eliminating global clock distribution power and enabling activity-driven computation.
*   **Leakage is a Growing Concern:** As devices scale, leakage power becomes increasingly important and requires careful management through device design and circuit techniques.
*   **Trade-offs Exist:** FCL offers low power but at the cost of area and potentially speed due to the larger transistor count and PMOS performance.

---

This concludes the study notes for Fully Complementary Logic as a non-clocked circuit design style for low power VLSI. The principles discussed are fundamental to modern digital design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
