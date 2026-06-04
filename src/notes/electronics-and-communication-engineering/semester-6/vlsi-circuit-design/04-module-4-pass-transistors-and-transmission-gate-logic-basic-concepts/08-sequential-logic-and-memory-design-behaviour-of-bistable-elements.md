---
title: "Sequential Logic and Memory design:  Behaviour of bistable elements"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 4: Pass transistors and Transmission gate logic:  Basic concepts"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefdb"
status: "completed"
scrapedAt: "2026-05-23T18:03:54.546Z"
---
## VLSI Circuit Design: Module 4 - Pass Transistors and Transmission Gate Logic: Basic Concepts

### Topic: Sequential Logic and Memory Design: Behaviour of Bistable Elements

This module delves into the fundamental building blocks of sequential logic and memory, focusing on bistable elements. We will explore how these elements store information and form the basis for flip-flops and latches, essential components in digital systems.

---

### Learning Outcomes:

*   **Understand the concept of bistability and its importance in sequential logic.**
*   **Analyze the behavior of basic bistable circuits, particularly those implemented using pass transistors and transmission gates.**
*   **Differentiate between latches and flip-flops in terms of their triggering mechanisms.**
*   **Understand the principles behind memory cell design, specifically how bistable elements enable data storage.**
*   **Relate the concepts of bistable elements to the broader context of VLSI design methodologies and sequential circuit implementation.**

---

### Course Outcomes Alignment:

*   **CO1 (K2):** Understanding bistable elements is crucial for comprehending sequential logic, which forms a significant part of VLSI design flows, especially in ASIC and SoC designs.
*   **CO4 (K3):** This topic directly addresses the design and analysis of basic storage cells (latches and flip-flops), which are fundamental to memory design and dynamic logic circuits.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Textbooks & Reference Books:

*   **Primary:**
    *   Kang, Leblebici, Kim - CMOS Digital Integrated Circuits: Analysis & Design (Chapter 7: Sequential Logic Design)
    *   Sze - VLSI Technology (Relevant sections on memory structures)
    *   Wolf - Modern VLSI Design (Chapter 6: Sequential Logic Design)
*   **References:**
    *   Smith - Application Specific Integrated Circuits (Chapter 7: Sequential Logic)
    *   Weste, Eshraghian - Principles of CMOS VLSI Design (Chapter 9: Sequential Logic)
    *   Rabaey - Digital Integrated Circuits (Chapter 11: Sequential Circuits)
    *   Razavi - Design of Analog CMOS Integrated Circuits (While primarily analog, principles of transistor behavior are relevant)

---

## 1. Introduction to Sequential Logic

Sequential logic circuits are distinguished from combinational logic circuits by their dependence on **past inputs** in addition to the current inputs. This "memory" capability allows them to store information and perform more complex operations.

### 1.1. Combinational vs. Sequential Logic

*   **Combinational Logic:**
    *   Output depends only on current inputs.
    *   No memory elements.
    *   Examples: Logic gates (AND, OR, NOT), multiplexers, decoders.
*   **Sequential Logic:**
    *   Output depends on current inputs **and** the past history of inputs.
    *   Contains memory elements that store state information.
    *   Essential for building state machines, registers, counters, and memory.

---

## 2. Bistable Elements: The Foundation of Memory

Bistable elements are the core of sequential logic. They possess **two stable states**, meaning they can remain indefinitely in either of these states without external excitation once set. This ability to hold one of two states is the basis for storing a single bit of information.

### 2.1. Definition of Bistability

A bistable element is a circuit that has two stable equilibrium points. It can be triggered from one stable state to the other by an external input signal.

### 2.2. Key Characteristics of Bistable Elements

*   **Two Stable States:** Can reside in either state indefinitely.
*   **Triggering:** Requires an input signal (trigger or clock) to transition between states.
*   **Memory:** Stores a single bit of information (0 or 1).

---

## 3. Basic Bistable Element Implementations

Historically, bistable elements were implemented using discrete components like vacuum tubes. In modern VLSI, they are predominantly built using CMOS transistors. We will focus on implementations relevant to pass transistors and transmission gates.

### 3.1. Bistable Multivibrator (using Inverters)

The simplest bistable element can be constructed by cross-coupling two inverters.

*   **Concept:** The output of the first inverter is fed back to the input of the second, and the output of the second inverter is fed back to the input of the first.
*   **Operation:**
    1.  **Initial State:** Assume one inverter's output is high and the other's is low.
    2.  **Stability:** If inverter A's output is high, it drives inverter B's input high, causing inverter B's output to go low. This low output from B then drives inverter A's input low, causing inverter A's output to go high, reinforcing the initial assumption. This forms a stable loop.
    3.  **Switching:** A transient imbalance or an external input can cause a transition. For example, if inverter A's output momentarily drops low, it forces inverter B's output high, which in turn forces inverter A's input low, making its output go high. This transition continues until the opposite stable state is reached.

*   **CMOS Implementation:**
    *   Two CMOS inverters are connected in a loop.
    *   **Figure:** (Imagine a circuit diagram with two inverter symbols cross-connected).
    *   **Challenge:** This basic cross-coupled inverter pair is **not directly controllable**. It will oscillate or settle to an unstable state if not designed carefully, and it cannot be reliably set to a specific state without additional circuitry.

### 3.2. Latches: Level-Sensitive Bistable Elements

Latches are bistable elements that are sensitive to the **level** of a control signal. They are often built using cross-coupled gates (like NAND or NOR) with enable inputs.

#### 3.2.1. SR Latch (Set-Reset Latch)

The SR latch is a fundamental bistable element with two inputs: Set (S) and Reset (R), and two outputs (Q and Q-bar).

*   **Functionality:**
    *   `S=1, R=0`: Sets the latch, Q becomes HIGH.
    *   `S=0, R=1`: Resets the latch, Q becomes LOW.
    *   `S=0, R=0`: Latch holds its previous state.
    *   `S=1, R=1`: Invalid or forbidden state (both outputs may go indeterminate or to the same level, depending on implementation).

*   **NAND-based SR Latch:**
    *   **Circuit:** Two cross-coupled NAND gates. One NAND has inputs S and Q-bar, the other has inputs R and Q. The outputs are Q and Q-bar respectively.
    *   **Operation Analysis (Truth Table/State Table):**
        | S   | R   | Q   | Q-bar | Next Q | Next Q-bar | Comment     |
        | :-- | :-- | :-- | :---- | :----- | :--------- | :---------- |
        | 0   | 0   | X   | Y     | 1      | 1          | Invalid State |
        | 0   | 1   | X   | Y     | 1      | 0          | Set         |
        | 1   | 0   | X   | Y     | 0      | 1          | Reset       |
        | 1   | 1   | 0   | 1     | 0      | 1          | Hold State  |
        | 1   | 1   | 1   | 0     | 1      | 0          | Hold State  |
    *   **Important Note:** The `S=0, R=0` input combination is the only one that forces the outputs to a specific state (Q=1, Q-bar=0). Any other combination depends on the previous state.
    *   **Textbook Reference:** Kang et al. (Ch 7.2.1), Weste & Eshraghian (Ch 9.2.1)

*   **NOR-based SR Latch:**
    *   **Circuit:** Two cross-coupled NOR gates. One NOR has inputs S and Q-bar, the other has inputs R and Q. The outputs are Q and Q-bar respectively.
    *   **Operation Analysis (Truth Table/State Table):**
        | S   | R   | Q   | Q-bar | Next Q | Next Q-bar | Comment     |
        | :-- | :-- | :-- | :---- | :----- | :--------- | :---------- |
        | 0   | 0   | 0   | 1     | 0      | 1          | Hold State  |
        | 0   | 0   | 1   | 0     | 1      | 0          | Hold State  |
        | 0   | 1   | X   | Y     | 0      | 1          | Reset       |
        | 1   | 0   | X   | Y     | 1      | 0          | Set         |
        | 1   | 1   | X   | Y     | 0      | 0          | Invalid State |
    *   **Important Note:** The `S=1, R=1` input combination is the only one that forces the outputs to a specific state (Q=0, Q-bar=0).
    *   **Textbook Reference:** Rabaey (Ch 11.2.1)

#### 3.2.2. Gated Latches (Level-Sensitive)

To make latches controllable, an "enable" (EN) signal is introduced.

*   **Gated SR Latch:**
    *   **Circuit:** SR latch with enable signal. When EN is HIGH, the S and R inputs control the latch. When EN is LOW, the latch holds its previous state.
    *   **Implementation:** The S and R inputs are ANDed with the enable signal before being fed to the SR latch.
    *   **Behavior:** The latch changes state only when EN is HIGH and the S/R inputs are active. When EN goes LOW, the latch is effectively disconnected from the S/R inputs and maintains its current state.

*   **Gated D Latch (Data Latch):**
    *   **Functionality:** A D latch has a single data input (D) and an enable input (EN). The output Q follows the D input only when EN is HIGH. When EN is LOW, Q holds its last value.
    *   **Circuit:** Can be implemented using an SR latch with D connected to S and D-bar connected to R, gated by the enable signal.
    *   **Behavior:**
        *   If EN = 1: Q = D
        *   If EN = 0: Q holds its previous value.
    *   **Advantages:** Simpler input than SR latch, avoids the forbidden state.
    *   **Textbook Reference:** Wolf (Ch 6.2.2), Kang et al. (Ch 7.2.2)

---

## 4. Bistable Elements with Pass Transistors and Transmission Gates

Pass transistors and transmission gates offer an alternative and often more efficient way to implement latches and flip-flops in CMOS VLSI, especially for low-power and high-speed applications.

### 4.1. Understanding Pass Transistors and Transmission Gates

*   **Pass Transistor:** A single MOSFET (NMOS or PMOS) used as a switch. The gate terminal controls the flow of the signal between the source and drain terminals.
    *   **NMOS Pass Transistor:** Conducts when gate voltage is HIGH, blocks when LOW. Can pass a logic '1' well, but a logic '0' is degraded due to the threshold voltage drop.
    *   **PMOS Pass Transistor:** Conducts when gate voltage is LOW, blocks when HIGH. Can pass a logic '0' well, but a logic '1' is degraded due to the threshold voltage drop.
    *   **Textbook Reference:** Kang et al. (Ch 4.3.1), Rabaey (Ch 5.4)

*   **Transmission Gate (TG):** A complementary pair of NMOS and PMOS transistors connected in parallel. Controlled by complementary control signals (e.g., CLK and CLK-bar).
    *   **Operation:** When the control signals are asserted, both transistors turn ON, allowing bidirectional signal transmission with minimal voltage drop.
    *   **Advantages:** Can pass both logic '0' and logic '1' efficiently. Acts as a very good bidirectional switch.
    *   **Textbook Reference:** Kang et al. (Ch 4.3.2), Wolf (Ch 5.3.2)

### 4.2. Pass-Transistor Logic Latches

#### 4.2.1. Pass-Transistor SR Latch

*   **Circuit:** Typically uses two cross-coupled CMOS inverters (as described earlier) but the data input/output is multiplexed using pass transistors controlled by S, R, and an enable.
*   **A more common approach for pass-transistor based memory:** Use cross-coupled **gates** (like NAND/NOR) with pass-transistor based multiplexing for input.

#### 4.2.2. Pass-Transistor D Latch

*   **Circuit:** A D latch can be implemented using a transmission gate controlled by the enable signal, along with an inverter to break the feedback loop when disabled.
*   **Structure:**
    1.  A transmission gate controlled by the enable signal (EN) connects the input D to the output of an inverter.
    2.  The output of the transmission gate is fed back to the input of the inverter.
    3.  This creates a feedback loop that stores the state.
*   **Operation:**
    *   When `EN = 1`: The transmission gate is ON. The inverter is active. The output Q follows the input D. The feedback loop maintains the state of D.
    *   When `EN = 0`: The transmission gate is OFF. The feedback loop is broken. The inverter holds the last state driven by the transmission gate.
*   **Figure:** (Visualize a transmission gate connecting D to an inverter's input, and the inverter's output feeding back to the transmission gate's output and the inverter's input. The transmission gate is controlled by EN and its complement.)
*   **Textbook Reference:** Wolf (Ch 6.2.3), Weste & Eshraghian (Ch 9.2.3 - often shows TG based latches)

### 4.3. Transmission-Gate Latches

Transmission gates are widely used to build transparent latches.

#### 4.3.1. Transmission-Gate D Latch

*   **Circuit:**
    1.  A transmission gate controlled by `EN` connects the D input to the latch's internal node.
    2.  An inverter is used for feedback to store the state. The output of the inverter is fed to the input of the transmission gate.
    3.  The output of the transmission gate is the latch's output Q, and also the input to the inverter.
*   **Operation:**
    *   When `EN = 1`: The transmission gate is ON. The inverter is active. The latch is transparent, and Q = D. The state is updated.
    *   When `EN = 0`: The transmission gate is OFF. The inverter continues to operate, but it is disconnected from the input D. The latch holds its previous state (Q maintains its value).
*   **Advantages:**
    *   **Transparency:** When enabled, the output directly follows the input.
    *   **Simplicity:** Relatively simple circuit.
    *   **Bidirectional:** Transmission gates allow data flow in both directions, which is useful for feedback.
*   **Textbook Reference:** Kang et al. (Ch 7.2.2), Rabaey (Ch 11.3.2)

---

## 5. Bistable Elements and Memory Design

Bistable elements are the fundamental building blocks for all types of memory in VLSI, from small registers to large RAM arrays.

### 5.1. Latches in Memory

*   **Static RAM (SRAM) Cells:** The most common type of memory cell in SRAM is based on a bistable element, typically a cross-coupled pair of NAND or NOR gates, or more advanced pass-transistor logic.
*   **How it works:**
    *   The bistable element forms the core storage.
    *   Pass transistors are used to read from or write to the cell, controlled by word lines.
    *   Bit lines carry the data to and from the cell.
*   **Example:** A 6T SRAM cell uses six transistors: two for the bistable latch and four pass transistors for read/write access.
    *   **Textbook Reference:** Sze (Ch 5 - Memory Devices), Wolf (Ch 6.4)

### 5.2. Flip-Flops (Edge-Triggered Bistable Elements)

While latches are level-sensitive, flip-flops are **edge-sensitive**. They change their state only on the rising or falling edge of a clock signal. This is crucial for synchronous digital systems to avoid timing issues.

*   **Master-Slave Flip-Flop:** A common implementation consists of a master latch and a slave latch.
    *   The master latch is enabled during one half of the clock cycle (e.g., when CLK is HIGH) and samples the input.
    *   The slave latch is enabled during the other half (e.g., when CLK is LOW) and passes the output of the master latch to the final output.
    *   This ensures that the output changes only at the transition of the clock.

*   **Edge-Triggered Flip-Flops using Transmission Gates:**
    *   Can be constructed using two latches with complementary clock signals. For example, a master D latch enabled by CLK and a slave D latch enabled by CLK-bar.
    *   **Operation:** When CLK goes from LOW to HIGH, the master latch captures the D input. When CLK goes from HIGH to LOW, the master latch is disabled, and the slave latch is enabled by CLK-bar (which is HIGH at this point), passing the captured value to Q.
    *   **Textbook Reference:** Kang et al. (Ch 7.3), Weste & Eshraghian (Ch 9.3)

---

## 6. Behavior of Bistable Elements: Key Concepts Summarized

*   **Bistability:** The property of having two stable states.
*   **Memory:** Bistable elements store one bit of information.
*   **Latches:** Level-sensitive. Change state when the enable signal is active.
*   **Flip-Flops:** Edge-sensitive. Change state on the clock edge.
*   **Pass Transistors:** Used as voltage-controlled switches.
*   **Transmission Gates:** Complementary NMOS/PMOS pair, excellent switches for both logic levels.
*   **SRAM Cells:** Built using bistable elements for data storage.

---

## 7. Examples and Practice Questions

### Question 1:

Describe the functionality of a NOR-based SR latch. What is the state of the latch when S=0 and R=0? What is the forbidden input condition?

**Answer:**
A NOR-based SR latch consists of two cross-coupled NOR gates.
*   When S=1 and R=0, the latch is **Set** (Q=1, Q-bar=0).
*   When S=0 and R=1, the latch is **Reset** (Q=0, Q-bar=1).
*   When S=0 and R=0, the latch **holds its previous state**.
*   The forbidden input condition is S=1 and R=1, which leads to an indeterminate state where both Q and Q-bar might become 0, violating the desired complementary output.

### Question 2:

Explain the operation of a transmission-gate D latch when the enable signal (EN) transitions from HIGH to LOW.

**Answer:**
When EN is HIGH, the transmission gate is ON, and the output Q follows the input D. The inverter forms a feedback loop, storing the current value of D. When EN transitions from HIGH to LOW, the transmission gate turns OFF. This breaks the connection to the input D. The inverter, however, continues to operate and holds the last value that was present at its input (which was the value of D just before EN went low). Thus, the latch **holds its previous state**.

### Question 3:

What is the main difference between a D latch and a D flip-flop in terms of their response to the control signal?

**Answer:**
A D latch is **level-sensitive**. It will continuously follow the input D as long as the enable signal is active (HIGH). In contrast, a D flip-flop is **edge-sensitive**. It samples the input D and updates its output only at a specific transition (rising or falling edge) of the clock signal.

### Question 4:

Consider a pass-transistor based D latch with the following circuit configuration: A transmission gate controlled by `EN` connects the data input `D` to an inverter. The output of the inverter is connected back to the input of the transmission gate, and also becomes the output `Q`. Analyze the behavior of this latch.

**Answer:**
*   **When EN = 1:** The transmission gate is ON. The inverter is enabled. The output `Q` will follow the input `D`. This means `Q = D`. The circuit is transparent.
*   **When EN = 0:** The transmission gate is OFF. The connection to `D` is broken. The inverter continues to operate, but its input is now held at whatever voltage was present at the output of the inverter just before `EN` went low. This effectively latches the previous state. So, `Q` holds its previous value.

### Question 5:

Design a simple 2-transistor SRAM cell using pass transistors. Sketch the circuit and explain its read and write operations. (Note: This is a conceptual question to apply the learned principles. A full 6T cell is more complex).

**Answer:**
*(Sketch a circuit with two cross-coupled inverters, where the inputs/outputs of the inverters are connected to data lines (D and D-bar) via pass transistors controlled by a word line (WL).)*

*   **Conceptual 2T Cell:** Imagine two cross-coupled CMOS inverters forming a bistable latch. To access this latch, we would add two pass transistors (e.g., NMOS) to connect the latch's nodes to the bit lines (BL and BL-bar). A word line (WL) would control these pass transistors.

*   **Read Operation:**
    1.  The latch holds a stable state (e.g., Q=1, Q-bar=0).
    2.  The Word Line (WL) is asserted HIGH.
    3.  The pass transistors connect the latch nodes to the Bit Lines (BL and BL-bar).
    4.  The state of the latch will be reflected on the bit lines. For example, if Q=1, BL will be HIGH, and BL-bar (connected to Q-bar which is 0) will be LOW.
    5.  Sense amplifiers on the bit lines detect this difference.

*   **Write Operation:**
    1.  The desired data (e.g., data to write is HIGH) is placed on the Bit Lines (BL=HIGH, BL-bar=LOW).
    2.  The Word Line (WL) is asserted HIGH.
    3.  The pass transistors connect the bit lines to the latch nodes.
    4.  The HIGH value on BL is driven into the node connected to Q-bar, forcing it LOW. This then forces Q HIGH, and the latch flips to the new state.

    *(Self-correction: A true 2T SRAM cell is not practical due to stability issues. The standard is 6T. This question tests the understanding of using pass transistors to access a bistable element.)*

---

## 8. Important Points to Remember

*   Bistability is the core property for memory.
*   Latches are level-sensitive; flip-flops are edge-sensitive.
*   Transmission gates offer efficient, bidirectional switching.
*   Pass transistors, while simpler, can have voltage drop issues.
*   SRAM cells are built using bistable elements and pass transistors for access.
*   The choice between latches and flip-flops depends on the system's timing requirements (synchronous vs. asynchronous).
*   Careful consideration of the invalid states (especially in SR latches) is important for robust design.

---