---
title: "CMOS D latch and edge triggered flip flop"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 4: Pass transistors and Transmission gate logic:  Basic concepts"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefdc"
status: "completed"
scrapedAt: "2026-05-23T18:03:55.360Z"
---
# VLSI CIRCUIT DESIGN - Module 4: Pass Transistors and Transmission Gate Logic - Basic Concepts

## Topic: CMOS D Latch and Edge-Triggered Flip-Flop

---

### 1. Introduction to Latches and Flip-Flops

**Importance:** Latches and flip-flops are fundamental building blocks in synchronous digital systems. They are used to store state, enabling the creation of sequential logic circuits like counters, registers, and finite state machines.

**Key Difference:**

*   **Latch:** A level-sensitive sequential circuit. It is transparent to its input when the enable signal is active. Changes to the input during the transparent phase are immediately reflected at the output.
*   **Flip-Flop:** An edge-sensitive sequential circuit. It changes its state only on the rising or falling edge of a clock signal. This edge-triggering provides precise timing control crucial for synchronous designs.

---

### 2. CMOS D Latch

**Concept:** A D latch stores the value of the data input (D) when the enable signal (E) is high. When E goes low, the latch holds the last value of D.

**Structure:** A basic D latch can be constructed using two cross-coupled SR latches or NOR gates. However, in CMOS, we often use transmission gates and inverters.

**CMOS D Latch Implementation using Transmission Gates (Reference: Kang et al., Chapter 7; Rabaey, Chapter 8):**

A common implementation uses two transmission gates and two inverters.

**Circuit Diagram:**

```
      +-------+
  D---|       |---Q
      |  TG1  |
      +-------+---+
          |       |
          |       |
      E---+-------+
          |       |
      +-------+   |
      |       |   |
      |  Inv1 |---+
      +-------+   |
          |       |
      E---+---+   |
          |   |   |
          +---+---+-------+
              |           |
              |           |
          +-------+       |
          |       |-------Q_bar
          |  TG2  |
          +-------+
              |
              |
          E---+
```

**Operation:**

*   **E = High (1):**
    *   Transmission gate TG1 is ON (passes D to Q).
    *   Transmission gate TG2 is OFF (blocks Q_bar).
    *   The inverter (Inv1) continues to invert the previous output.
    *   **Result:** Q takes the value of D. The latch is **transparent**.
*   **E = Low (0):**
    *   Transmission gate TG1 is OFF (blocks D).
    *   Transmission gate TG2 is ON (passes Q_bar to Q).
    *   The inverter (Inv1) continues to invert its input. Since TG1 is off, the input to Inv1 is the previous value of Q (which is Q_bar due to Inv1). So, Inv1 outputs Q.
    *   **Result:** Q holds the last value of D that was present when E was high, as TG2 now feeds the output of the inverter back to Q. The latch is **opaque** or **held**.

**Truth Table for D Latch:**

| E   | D   | Q (Next State) |
| :-- | :-- | :------------- |
| 0   | X   | Q (Hold)       |
| 1   | 0   | 0              |
| 1   | 1   | 1              |

**Analysis (Kang et al., Chapter 7.4.2):**

*   **Power Consumption:** When E is low, one inverter is active, consuming static power. When E is high, both TG1 and Inv1 are active. The transmission gates themselves have a small resistance, leading to some power dissipation when conducting.
*   **Speed:** The speed is limited by the propagation delay through the transmission gate and the inverter.

**Learning Outcome Alignment:**

*   **CO4 (K3):** Design and analysis of dynamic logic circuits and the implementation of basic storage cells. The D latch is a basic storage cell.

---

### 3. Edge-Triggered Flip-Flops

**Concept:** Unlike latches, edge-triggered flip-flops capture their input data only at the specific moment of a clock edge (either rising or falling). This ensures that all state changes in a synchronous system occur simultaneously, preventing race conditions and simplifying design.

**Types of Edge-Triggered Flip-Flops:**

*   **Master-Slave Flip-Flops:**
    *   Consist of two stages: a master latch and a slave latch.
    *   The master latch is enabled by one clock edge (e.g., rising edge), and the slave latch is enabled by the opposite clock edge (e.g., falling edge).
    *   **Master Stage:** Activated by the primary clock edge. It captures the input data (D).
    *   **Slave Stage:** Activated by the inverted clock edge. It transfers the data from the master stage to the output.
    *   This two-stage approach isolates the input from the output, preventing glitches during the clock transition.
*   **Edge-Triggered Flip-Flops (using transmission gates):**
    *   Can be implemented using a single latch with a more sophisticated clocking scheme.

**CMOS D Flip-Flop Implementation using Transmission Gates (Reference: Kang et al., Chapter 7.4.3; Rabaey, Chapter 8.3):**

A common and efficient implementation uses a master-slave configuration, often built with transmission gates.

**Circuit Diagram (Simplified Master-Slave D Flip-Flop):**

```
      CLK --------------+----------+
                      |          |
                      |          |
      D -----+-------+ |          |
             | TG1(M)| |          |
             +-------+ |          |
                 |     | TG2(M)  |
                 |     +-------+ |
     CLK -----+--+-------+       |
              |          |       |
              |          |       |
              | TG3(S)   | TG4(S) |
              | +-------+ | +-------+
              +-+       | | +-------+
                |       | |       |
                |       | |       |
                |       | |       |
                |       | |       |
                | Q_bar | | Q     |
                |       | |       |
                |       | |       |
                |       | |       |
                +-------+-+-------+---- Q
                        |
                        +----------> Q_bar (inverted output)
```

*   **Master Latch:** Consists of TG1 and TG2, controlled by CLK and CLK_bar respectively. The D input is fed into the master latch.
*   **Slave Latch:** Consists of TG3 and TG4, controlled by CLK_bar and CLK respectively. The output of the master latch is fed into the slave latch.

**Operation (Rising-Edge Triggered D Flip-Flop):**

*   **Rising Edge of CLK:**
    *   CLK goes from 0 to 1.
    *   CLK_bar goes from 1 to 0.
    *   **Master Stage:** TG1 (connected to CLK) is ON. TG2 (connected to CLK_bar) is OFF. The master latch captures the value of D.
    *   **Slave Stage:** TG3 (connected to CLK_bar) is OFF. TG4 (connected to CLK) is ON. The slave latch holds the value that was transferred from the master stage on the previous falling edge of CLK (or its initial state).
*   **During the High Phase of CLK (after rising edge):**
    *   CLK = 1, CLK_bar = 0.
    *   **Master Stage:** TG1 is ON, TG2 is OFF. The master latch is transparent to D. Any change in D is reflected at the master latch output (which becomes the input to the slave stage).
    *   **Slave Stage:** TG3 is OFF, TG4 is ON. The slave latch is holding the value captured from the master on the previous falling edge. It does not change.
*   **Falling Edge of CLK:**
    *   CLK goes from 1 to 0.
    *   CLK_bar goes from 0 to 1.
    *   **Master Stage:** TG1 is OFF. TG2 is ON. The master latch becomes opaque and holds the value of D captured at the rising edge.
    *   **Slave Stage:** TG3 is ON. TG4 is OFF. The slave latch becomes transparent and captures the value from the master stage (which was stable since the rising edge).
*   **During the Low Phase of CLK (after falling edge):**
    *   CLK = 0, CLK_bar = 1.
    *   **Master Stage:** TG1 is OFF, TG2 is ON. The master latch holds its state.
    *   **Slave Stage:** TG3 is ON, TG4 is OFF. The slave stage is transparent to its input (the master output). It updates its output Q based on the master's held value.
    *   **Result:** The output Q updates to the value of D that was present at the **rising edge** of the clock.

**Truth Table for D Flip-Flop (Edge-Triggered):**

| CLK Edge | D   | Q (Next State) |
| :------- | :-- | :------------- |
| Rising   | 0   | 0              |
| Rising   | 1   | 1              |
| Falling  | X   | Q (Hold)       |

**Analysis (Kang et al., Chapter 7.4.3; Smith, Chapter 5.2.1):**

*   **Setup Time ($t_{su}$):** The minimum time the data (D) must be stable before the active clock edge.
*   **Hold Time ($t_{h}$):** The minimum time the data (D) must be stable after the active clock edge.
*   **Propagation Delay ($t_{p}$, CLK to Q):** The time from the active clock edge until the output Q changes.
*   **Power Consumption:** Similar to latches, power is consumed by the clocked transistors and the inverters. The master-slave structure can lead to slightly higher power consumption due to the additional transistors and latches.
*   **Area:** Master-slave flip-flops typically require more transistors and thus occupy a larger silicon area compared to simple latches.

**Alternative Implementation (Single-Clock Edge Triggering):**

More advanced edge-triggered flip-flops can be implemented with fewer transistors by carefully designing the clock gating. For example, a pulse-generating circuit or a differential clocking scheme can be used.

**Learning Outcome Alignment:**

*   **CO4 (K3):** Design and analysis of dynamic logic circuits and the implementation of basic storage cells. The D flip-flop is a key basic storage cell.

---

### 4. Important Points to Remember

*   **Latches are level-sensitive:** The output follows the input as long as the enable signal is active.
*   **Flip-flops are edge-sensitive:** The output changes only on the active edge of the clock signal.
*   **Master-Slave design:** A common technique to build edge-triggered flip-flops by cascading two latches clocked by complementary clock signals.
*   **Transmission Gates:** Crucial for implementing latches and flip-flops in CMOS, offering low static power consumption when off.
*   **Timing Parameters:** Setup time and hold time are critical for the correct operation of edge-triggered flip-flops and define the valid window for data input.
*   **Glitches:** Latches are susceptible to glitches on the input during their transparent phase. Flip-flops, due to their edge-triggering, are more robust against glitches that occur between clock edges.
*   **Design Flow:** Understanding latches and flip-flops is essential for building sequential circuits, which are the backbone of most digital systems. This relates to **CO1** (VLSI design methodologies).

---

### 5. Practice Questions and Exercises

**Question 1:**

Describe the difference between a D latch and a D flip-flop in terms of their sensitivity to the enable/clock signal.

**Answer 1:**
A D latch is **level-sensitive**. Its output Q will follow the input D as long as the enable signal (E) is high (level-sensitive). When E goes low, it holds its last state. A D flip-flop is **edge-sensitive**. It only captures the value of the input D at the specific moment of a clock edge (either rising or falling). The output Q changes only on this edge and remains stable between clock edges.

---

**Question 2:**

Consider a CMOS D latch circuit as described above. If the input D is changing rapidly while the enable signal E is high, what will be the behavior of the output Q?

**Answer 2:**
If the input D is changing rapidly while the enable signal E is high, the output Q will continuously track these changes. This is because the transmission gate TG1 is ON when E is high, making the latch transparent. This can lead to the output Q reflecting the rapid changes of D.

---

**Question 3:**

Explain why a master-slave flip-flop design helps to prevent race conditions.

**Answer 3:**
In a master-slave flip-flop, the master latch captures the input data on one clock edge, and the slave latch captures the data from the master on the opposite clock edge. This two-stage process ensures that the input data is stable and captured by the master before the slave stage starts to transfer it. This separation prevents the output from the slave stage from immediately feeding back and affecting the master stage's capture of new data during the same clock cycle, thus avoiding race conditions and ensuring that the flip-flop changes state only once per clock cycle based on the data present at the specific edge.

---

**Question 4:**

For a rising-edge triggered D flip-flop, if the data D is `0110` and the clock pulses are applied, what will be the sequence of outputs Q? Assume the flip-flop is initially reset to `0`.

**Answer 4:**
Let's trace the output Q for a rising-edge triggered D flip-flop.
Initial Q = 0.

Clock 1 (Rising Edge): D = 0. Q becomes 0.
Clock 2 (Rising Edge): D = 1. Q becomes 1.
Clock 3 (Rising Edge): D = 1. Q becomes 1.
Clock 4 (Rising Edge): D = 0. Q becomes 0.

So, the sequence of outputs Q will be **0, 1, 1, 0**, corresponding to the data captured on each rising clock edge.

---

**Question 5:**

Draw a schematic of a simple SR latch using two cross-coupled NAND gates. Explain its operation. (This is a precursor to latches and provides context).

**Answer 5:**

**Schematic:**

```
     S ---+-------+
          |       |
          | NAND1 |
          +-------+---+
              |       |
              |       |
     R ---+---+---+   |
          |   |   |   |
          | NAND2 |---+---- Q
          +-------+   |
              |       |
              |       |
              +-------+---- Q_bar
```

**Operation:**

*   **Set (S=1, R=0):** When S=1, the output of NAND1 (Q) is forced to 0. This makes the input to NAND2 (which is Q_bar) become 0. Since R=0, the output of NAND2 (Q_bar) is forced to 1. This is a stable state where Q=0, Q_bar=1.
*   **Reset (S=0, R=1):** When R=1, the output of NAND2 (Q_bar) is forced to 0. This makes the input to NAND1 (which is Q) become 0. Since S=1, the output of NAND1 (Q) is forced to 1. This is a stable state where Q=1, Q_bar=0.
*   **Hold (S=1, R=1):** When S=1 and R=1, the outputs Q and Q_bar depend on the previous state. If Q was 0, the input to NAND2 is 1, and the output of NAND2 is 1 (Q_bar). The input to NAND1 is 1, and the output of NAND1 is 0 (Q). This state is held.
*   **Invalid State (S=0, R=0):** When S=0 and R=0, both NAND gates have a 0 input. This forces both outputs Q and Q_bar to 1, which is an invalid state for an SR latch (Q and Q_bar should be complements).

This basic SR latch, while not directly using transmission gates, forms the fundamental memory element upon which more complex latches and flip-flops are built.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 6. References

*   **CMOS Digital Integrated Circuits - Analysis & Design by Sung-Mo Kang, Yusuf Leblebici, Chulwoo Kim:** Chapters 7 (Sequential Logic Circuits) extensively covers latches and flip-flops, including transmission gate implementations and their analysis.
*   **Digital Integrated Circuits by Jan M. Rabaey:** Chapter 8 (Sequential Circuits) provides a detailed understanding of sequential logic design, including latches and flip-flops.
*   **Modern VLSI Design by Wayne Wolf:** Chapter 6 (Sequential Circuits) covers the fundamentals of sequential logic design.
*   **Principles of CMOS VLSI Design - A Systems Perspective by Neil H. E. Weste, Kamran Eshraghian:** Chapter 5 (Sequential Logic) offers insights into the design and implementation of sequential circuits.
*   **Application Specific Integrated Circuits by Michael John Sebastian Smith:** Chapter 5 (Sequential Logic) discusses sequential circuit design concepts.

---