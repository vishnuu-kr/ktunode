---
title: "Dynamic logic Design:  Pre charge, Logic evaluation"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 4: Pass transistors and Transmission gate logic:  Basic concepts"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefd6"
status: "completed"
scrapedAt: "2026-05-23T18:03:50.394Z"
---
# VLSI Circuit Design - Module 4: Pass Transistors and Transmission Gate Logic - Basic Concepts

## Topic: Dynamic Logic Design: Pre-charge, Logic Evaluation

**Course Outcomes Addressed:**
*   **CO4:** Design and analysis of dynamic logic circuits and the implementation of basic storage cells. (Knowledge Level: K3)

**Learning Outcomes:**
*   Understand the fundamental concepts of dynamic logic.
*   Explain the operation of a dynamic logic gate during the pre-charge and evaluation phases.
*   Analyze the advantages and disadvantages of dynamic logic compared to static CMOS logic.
*   Identify the basic structure and operation of a 2-phase dynamic logic gate.
*   Recognize the importance of clock signals in dynamic logic operation.

**Textbook References:**
*   Kang, Leblebici, Kim - Chapter 7 (Dynamic Logic Circuits)
*   Wolf - Chapter 6 (Advanced Techniques)
*   Weste, Eshraghian - Chapter 9 (Dynamic Logic)

---

### 1. Introduction to Dynamic Logic

Dynamic logic circuits differ from static CMOS logic in that they use clock signals to control the logic function. This allows for higher speed and lower power consumption in certain applications, but also introduces challenges like charge sharing and susceptibility to noise.

**Key Concepts:**
*   **Clocked Operation:** Dynamic logic circuits rely on a two-phase clock (e.g., pre-charge and evaluation phases) to operate.
*   **Pre-charge Phase:** During this phase, the output node is pre-charged to a known state (typically VDD).
*   **Evaluation Phase:** During this phase, the logic function is evaluated, and the output node transitions based on the input values.
*   **Dynamic Node:** The internal node whose state is determined dynamically by the inputs and clock signal.

**Comparison with Static CMOS:**
| Feature          | Static CMOS Logic                               | Dynamic Logic                                     |
| :--------------- | :---------------------------------------------- | :------------------------------------------------ |
| **Operation**    | Always produces a valid output.                 | Output is valid only during the evaluation phase. |
| **Speed**        | Generally slower due to larger transistor count. | Can be faster due to reduced transistor count.    |
| **Power**        | Higher static power consumption (leakage).      | Lower static power consumption, but dynamic power. |
| **Complexity**   | More complex structure (complementary networks). | Simpler structure (single pull-up or pull-down).  |
| **Clocking**     | No explicit clocking required for logic function. | Requires clocking for operation.                  |
| **Noise Immunity**| Generally good.                                 | Susceptible to charge sharing and noise.          |

**Reference (Kang et al., Chapter 7):** "Dynamic logic circuits rely on the sequential application of clock signals to control the operation of the logic gate. This inherent sequentiality allows for a more efficient implementation of complex logic functions, leading to potentially higher speed and lower power consumption compared to their static counterparts."

---

### 2. Two-Phase Dynamic Logic Gate

A fundamental dynamic logic gate is structured around a clock signal controlling the pre-charge and evaluation phases. The most basic form is a **N-logic dynamic gate** (where the pull-up network is controlled by the clock).

**Basic Structure of a 2-Phase Dynamic Gate:**

```
       VDD
        |
       NMOS (Pre-charge) --- Output
        |
  Input Logic (NMOS)
        |
       GND
```

**The Two Phases of Operation:**

*   **Phase 1: Pre-charge Phase (Clock = 0):**
    *   The pre-charge transistor (typically an NMOS) is turned ON.
    *   The output node is connected to VDD, effectively pre-charging the output to a logic HIGH state.
    *   The input logic network (made of NMOS transistors) is turned OFF.
    *   **Important:** The output node is being charged and its value is temporarily stored (like a capacitor).

*   **Phase 2: Evaluation Phase (Clock = 1):**
    *   The pre-charge transistor is turned OFF.
    *   The input logic network is enabled.
    *   If the input combination creates a conducting path from the output node to GND through the input logic network, the output node will discharge to logic LOW.
    *   If no conducting path to GND exists, the output node retains its pre-charged HIGH state due to parasitic capacitance.

**Example: Dynamic NAND Gate (Conceptual)**

Let's consider a simple 2-input NAND function. In a static CMOS NAND gate, we have two NMOS transistors in series to pull down to GND and two PMOS transistors in parallel to pull up to VDD.

In a dynamic NAND gate, we can use a structure where NMOS transistors implement the logic function, and a clock-controlled NMOS acts as the pre-charge switch.

*   **Pre-charge Phase (CLK = 0):**
    *   Pre-charge NMOS is ON. Output node is pre-charged to VDD.
    *   Input NMOS transistors for the NAND function are OFF.

*   **Evaluation Phase (CLK = 1):**
    *   Pre-charge NMOS is OFF.
    *   If `Input A = 1` AND `Input B = 1`, then both NMOS transistors in series are ON, creating a path to GND. The output discharges to 0.
    *   If `Input A = 0` OR `Input B = 0`, at least one NMOS transistor is OFF, breaking the path to GND. The output remains at its pre-charged HIGH state (1).

**Important Point (Kang et al.):** "The output of a dynamic logic gate is valid only during the evaluation phase. During the pre-charge phase, the output node is unconditionally driven to a known logic state."

**Visual Representation (Conceptual):**

```
       VDD
        |
       NMOS_precharge (controlled by CLK) --- Output (Q)
        |
     +-------+
     |       |
    NMOS_A  NMOS_B  (Inputs A and B for NAND logic)
     |       |
     +-------+
        |
       GND
```

**Note:** This is a simplified representation. The actual implementation might involve PMOS for the pull-up or a more complex structure for different logic gates.

---

### 3. Advantages of Dynamic Logic

*   **Higher Speed:** Dynamic logic gates generally have fewer transistors compared to their static counterparts. For example, a dynamic gate might use one clock-controlled switch and the logic transistors, whereas a static gate requires complementary pull-up and pull-down networks. This reduced transistor count leads to lower load capacitance and faster switching speeds.
*   **Lower Power Consumption (Static Power):** In the static state (during pre-charge when no path to GND exists), dynamic gates have no direct path from VDD to GND, resulting in significantly lower static power consumption compared to static CMOS gates, which have leakage current through the complementary networks.
*   **Area Efficiency:** The reduced transistor count can lead to smaller gate areas.
*   **Can implement complex logic functions with fewer transistors.**

**Reference (Weste & Eshraghian, Chapter 9):** "The primary advantages of dynamic logic circuits stem from their reduced transistor count, which translates into higher speed and lower power consumption. By eliminating the complementary pull-up or pull-down network of static CMOS, dynamic gates can achieve faster switching times and reduced static power dissipation."

---

### 4. Disadvantages and Challenges of Dynamic Logic

*   **Charge Sharing:** If intermediate nodes in the logic network are pre-charged and then disconnected from the power supply before evaluation, their charge can be shared with other nodes, leading to incorrect logic levels. This is a major concern in dynamic logic.
    *   **Mitigation:** Careful design and clocking strategies are employed to minimize charge sharing.
*   **Clock Feedthrough:** The clock signal can capacitively couple to the output node, causing glitches or incorrect switching, especially when the pre-charge transistor turns off.
*   **Require a clock signal:** This adds complexity to the overall system design.
*   **Susceptible to Noise:** Dynamic nodes can be more susceptible to noise due to their pre-charged state and the limited time window for evaluation.
*   **Floating Nodes:** During certain clock phases, internal nodes might be floating, requiring careful design to avoid unintended charge accumulation.
*   **Output Validity:** The output is only valid during the evaluation phase, which requires proper synchronization with subsequent logic.

**Reference (Wolf, Chapter 6):** "The benefits of dynamic logic are often offset by several critical challenges, including charge sharing, clock feedthrough, and sensitivity to noise. These issues necessitate careful circuit design and clocking discipline to ensure reliable operation."

---

### 5. Pre-charge and Logic Evaluation: Detailed Operation

Let's revisit the two phases with more detail, considering the role of capacitance.

**Key Elements:**
*   **Pre-charge Transistor (M_p):** Typically an NMOS transistor, controlled by the clock signal (CLK). When CLK is low, M_p is ON, connecting the output node to VDD. When CLK is high, M_p is OFF.
*   **Logic Network (M_logic):** A network of NMOS transistors that implement the logic function. These transistors are controlled by the primary input signals.
*   **Output Node (Q):** The node where the logic function's output is realized. It has parasitic capacitance (C_out) to GND.

**Phase 1: Pre-charge (CLK = 0)**

1.  **M_p ON:** The NMOS pre-charge transistor M_p is turned ON because CLK is low.
2.  **Output Pre-charged:** The output node Q is connected to VDD through M_p. The capacitor C_out is charged to VDD.
3.  **M_logic OFF:** The NMOS transistors in the logic network M_logic are turned OFF because their gates are either low or their series/parallel configurations are broken when M_p is ON.
4.  **Output State:** The output node Q is at logic HIGH (VDD). This state is held until the evaluation phase begins.

**Phase 2: Evaluation (CLK = 1)**

1.  **M_p OFF:** The NMOS pre-charge transistor M_p is turned OFF because CLK is high. The output node Q is now isolated from VDD.
2.  **M_logic Enabled:** The NMOS transistors in the logic network M_logic are now enabled by the input signals.
3.  **Evaluation of Logic:**
    *   **If the input combination creates a conducting path from Q to GND through M_logic:** The output node Q will discharge through this path. The rate of discharge depends on the series/parallel combination of NMOS transistors and the total capacitance at Q. If the discharge is fast enough, the output will transition to logic LOW (GND).
    *   **If no conducting path exists from Q to GND through M_logic:** The output node Q will retain its pre-charged HIGH state due to the parasitic capacitance C_out. This represents a logic HIGH output.

**Example: Dynamic NOR Gate (Conceptual)**

For a 2-input NOR gate, the static CMOS implementation requires two PMOS in parallel for pull-up and two NMOS in series for pull-down.

In a dynamic NOR gate:
*   **Pre-charge Phase (CLK = 0):** Pre-charge NMOS is ON, output Q is pre-charged to VDD.
*   **Evaluation Phase (CLK = 1):** Pre-charge NMOS is OFF.
    *   If `Input A = 0` AND `Input B = 0`, both NMOS transistors in series for the NOR pull-down path are OFF. Q remains HIGH.
    *   If `Input A = 1` OR `Input B = 1`, at least one NMOS transistor in the series path is ON, creating a path to GND. Q discharges to LOW.

**Important Point:** The transition from pre-charged HIGH to LOW during evaluation is called **evaluation**. If the output remains HIGH, it's because no discharge path was formed.

**Reference (Rabaey, Chapter 7):** "The two critical phases in dynamic logic operation are pre-charge, where the output node is initialized to a known state, and evaluation, where the input signals determine whether the output discharges to ground or remains at its pre-charged level."

---

### 6. Practice Questions and Answers

**Question 1:**
What is the primary purpose of the pre-charge phase in dynamic logic design?
a) To evaluate the logic function.
b) To discharge the output node to ground.
c) To set the output node to a known logic state (typically HIGH).
d) To turn off the input transistors.

**Answer:** c) To set the output node to a known logic state (typically HIGH).

**Question 2:**
During the evaluation phase of a dynamic logic gate, if the input combination creates a conducting path from the output node to GND, what will happen to the output node?
a) It will remain at the pre-charged HIGH state.
b) It will be pre-charged to VDD again.
c) It will discharge to GND (logic LOW).
d) It will float indefinitely.

**Answer:** c) It will discharge to GND (logic LOW).

**Question 3:**
What is one of the main disadvantages of dynamic logic compared to static CMOS?
a) Higher static power consumption.
b) Susceptibility to charge sharing and clock feedthrough.
c) Requires a larger number of transistors for the same logic function.
d) Always produces a valid output regardless of the clock phase.

**Answer:** b) Susceptibility to charge sharing and clock feedthrough.

**Question 4:**
In a typical 2-phase dynamic logic gate, the pre-charge transistor is usually controlled by:
a) The input signals.
b) The output signal.
c) The clock signal.
d) VDD.

**Answer:** c) The clock signal.

**Question 5 (Conceptual Design):**
Consider a dynamic logic gate that implements the function F = AB.
Describe the operation of this gate during the pre-charge and evaluation phases. What type of transistor would be used for the pre-charge switch, and why?

**Answer:**
*   **Pre-charge Phase (CLK = 0):** A pre-charge transistor (typically an NMOS controlled by CLK) turns ON, connecting the output node to VDD. The output is pre-charged to HIGH (1). The NMOS transistors implementing the "AB" logic function (both A and B must be 1) are OFF.
*   **Evaluation Phase (CLK = 1):** The pre-charge NMOS turns OFF. The two NMOS transistors for the AB logic function are in series.
    *   If A=1 and B=1, both NMOS transistors are ON, creating a conducting path from the output node to GND. The output discharges to LOW (0).
    *   If A=0 or B=0, at least one NMOS transistor is OFF, breaking the path to GND. The output remains at its pre-charged HIGH state (1).
*   The pre-charge switch is typically an **NMOS transistor**. This is because during the pre-charge phase, we want to connect the output node to VDD (the positive supply). An NMOS transistor can effectively conduct when its gate voltage (from the clock signal) is higher than its source voltage (which is VDD or close to it during pre-charge). Using a PMOS for pre-charge would require connecting it to GND and the output to VDD, which is less common for the basic dynamic gate structure where the logic function typically pulls down to GND.

---

### 7. Important Points to Remember

*   **Two Phases:** Dynamic logic fundamentally operates in two distinct phases: pre-charge and evaluation.
*   **Clock Dependency:** The operation is entirely dependent on the clock signal controlling the pre-charge/evaluation switches.
*   **Output Validity:** Outputs are only meaningful during the evaluation phase.
*   **Charge Sharing Risk:** Be mindful of intermediate nodes that might lose their charge if not properly handled.
*   **NMOS for Logic Pull-down:** Dynamic gates often use NMOS transistors to implement the logic function, pulling the output down to GND.
*   **Pre-charge to HIGH:** The pre-charge phase typically sets the output to VDD.
*   **Speed vs. Complexity:** Dynamic logic offers speed and power advantages but introduces design challenges.

---

This concludes the basic concepts of dynamic logic, focusing on the pre-charge and logic evaluation phases. Subsequent modules will delve into specific dynamic logic families and more advanced techniques to overcome the inherent challenges.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
