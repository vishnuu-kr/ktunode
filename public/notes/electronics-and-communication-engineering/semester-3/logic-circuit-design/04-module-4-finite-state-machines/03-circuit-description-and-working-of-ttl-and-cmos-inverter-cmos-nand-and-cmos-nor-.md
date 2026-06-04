---
title: "Circuit description and working of TTL and CMOS inverter, CMOS NAND and CMOS NOR gates."
subject: "LOGIC CIRCUIT DESIGN"
module: "Module 4: Finite state machines "
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe329"
status: "completed"
scrapedAt: "2026-05-23T17:46:14.880Z"
---
# Module 4: Finite State Machines (FSMs) - Logic Families: TTL and CMOS Gates

This module delves into the fundamental building blocks of digital circuits: logic gates and their implementation using different technologies. Specifically, we will explore the circuit description and working principles of TTL and CMOS inverters, as well as CMOS NAND and NOR gates. Understanding these basic gates is crucial for designing and analyzing more complex digital systems, including Finite State Machines (FSMs).

---

## 1. Introduction to Logic Families (CO4: K2)

Logic families are groups of integrated circuits (ICs) that use different technologies to implement logic functions. Each family has its own characteristics regarding power consumption, speed, noise immunity, and cost. Understanding these characteristics is essential for selecting the appropriate logic family for a given application.

**Key Concepts:**

*   **Fan-out:** The maximum number of standard logic inputs that a single output can drive.
*   **Propagation Delay:** The time it takes for a signal to propagate through a logic gate.
*   **Power Dissipation:** The amount of power consumed by a logic gate.
*   **Noise Immunity:** The ability of a logic gate to operate correctly in the presence of noise.
*   **Voltage Levels:** The voltage ranges representing logic '0' and logic '1'.

**Textbook Reference:** Floyd's "Digital Fundamentals" (Chapter 12) provides a comprehensive overview of various logic families, including their characteristics and comparisons.

---

## 2. Transistor-Transistor Logic (TTL) Inverter (CO4: K2)

TTL is a widely used logic family that employs bipolar junction transistors (BJTs) as switching elements.

**2.1 Circuit Description:**

A basic TTL inverter is constructed using a minimum of two transistors. The most common implementation uses a multi-emitter input transistor.

**Diagram (Conceptual):**

```
     Vcc
      |
     RC
      |
   ---|>|--- Output
  /      \
 /        \
|>|--|     |>|--GND
 \  Q1    /  Q2
  \----|----/
     E
     |
    Input
```

*   **Q1 (Multi-emitter Input Transistor):** Acts as the primary switching element. The multiple emitters allow for multiple inputs to be connected to a single transistor, which is a key characteristic of TTL NAND gates, but a simplified single-emitter version can be seen in inverter diagrams.
*   **Q2 (Output Transistor):** Acts as a pull-up or pull-down transistor to drive the output.

**2.2 Working Principle:**

*   **Input is HIGH (Logic '1'):**
    *   The input voltage forward-biases the base-emitter junction of Q1.
    *   Q1 is turned ON in the active region (not fully saturated).
    *   This allows current to flow from Vcc, through RC, and then through Q1 to ground.
    *   The voltage at the collector of Q1 is low.
    *   This low voltage at the collector of Q1, which is connected to the base of Q2, turns Q2 OFF.
    *   When Q2 is OFF, its collector (the output) is pulled HIGH towards Vcc through the collector resistor.
    *   **Output is HIGH (Logic '0' inverted to '1').**

*   **Input is LOW (Logic '0'):**
    *   The input voltage reverse-biases the base-emitter junction of Q1.
    *   Q1 is effectively turned OFF (or in cutoff).
    *   No significant current flows through RC.
    *   The voltage at the collector of Q1 rises to near Vcc.
    *   This high voltage at the collector of Q1, connected to the base of Q2, turns Q2 ON (in saturation).
    *   When Q2 is ON, it pulls the output LOW towards ground.
    *   **Output is LOW (Logic '1' inverted to '0').**

**Important Points to Remember (TTL):**

*   **Active Pull-up/Pull-down:** TTL uses active components (transistors) to drive the output in both HIGH and LOW states, leading to better drive capability compared to passive pull-up resistors.
*   **Fan-in/Fan-out:** TTL gates generally have good fan-out.
*   **Power Consumption:** TTL gates consume more power than CMOS gates, especially when idle.
*   **Speed:** TTL gates are generally faster than older CMOS technologies.
*   **Noise Immunity:** TTL exhibits reasonable noise immunity.

**Textbook Reference:** Floyd's "Digital Fundamentals" (Chapter 12) covers TTL gate structures and operation in detail.

---

## 3. Complementary Metal-Oxide-Semiconductor (CMOS) Inverter (CO4: K2)

CMOS technology uses MOSFETs (Metal-Oxide-Semiconductor Field-Effect Transistors) as switching elements. A CMOS inverter is a fundamental building block.

**3.1 Circuit Description:**

A CMOS inverter consists of two complementary MOSFETs: one PMOS transistor and one NMOS transistor.

**Diagram:**

```
      Vdd (Vcc)
       |
     ------
     |    |
    _|_   |>|------ Output
   /   \ /      \
  / PMOS\      NMOS
 |       |    /
  \     /    /
   -----    /
     |      |
   Input   ---
             |
            GND
```

*   **PMOS Transistor:** Acts as a pull-up device. It is ON when the input is LOW and OFF when the input is HIGH.
*   **NMOS Transistor:** Acts as a pull-down device. It is OFF when the input is LOW and ON when the input is HIGH.

**3.2 Working Principle:**

*   **Input is LOW (Logic '0'):**
    *   The input voltage is low, so the gate-source voltage (Vgs) for PMOS is HIGH (positive). This turns the PMOS ON.
    *   The input voltage is low, so the gate-source voltage (Vgs) for NMOS is LOW (near zero). This turns the NMOS OFF.
    *   With PMOS ON and NMOS OFF, the output is connected to Vdd (Vcc) through the PMOS.
    *   **Output is HIGH (Logic '1').**

*   **Input is HIGH (Logic '1'):**
    *   The input voltage is high, so the gate-source voltage (Vgs) for PMOS is LOW (near zero). This turns the PMOS OFF.
    *   The input voltage is high, so the gate-source voltage (Vgs) for NMOS is HIGH (positive). This turns the NMOS ON.
    *   With PMOS OFF and NMOS ON, the output is connected to GND through the NMOS.
    *   **Output is LOW (Logic '0').**

**Important Points to Remember (CMOS Inverter):**

*   **Complementary Nature:** The use of complementary PMOS and NMOS transistors ensures that in a stable state (either HIGH or LOW input), one transistor is ON and the other is OFF, preventing a direct path between Vdd and GND.
*   **Extremely Low Static Power Consumption:** Since there's no direct path between Vdd and GND in stable states, the static power consumption of CMOS is extremely low. Power is primarily consumed during switching transitions.
*   **High Input Impedance:** MOSFET gates are insulated, resulting in very high input impedance.
*   **Noise Immunity:** CMOS generally has good noise immunity.
*   **Speed:** CMOS speed is dependent on Vdd and load capacitance.
*   **Rail-to-Rail Output:** CMOS outputs can swing from near GND to near Vdd.

**Textbook Reference:** Floyd's "Digital Fundamentals" (Chapter 12) and Brown's "Fundamentals of Digital Logic with Verilog Design" (Chapter 2, Section 2.3 on MOSFETs) are excellent resources.

---

## 4. CMOS NAND Gate (CO4: K2)

A CMOS NAND gate implements the logical NAND function: Y = $\overline{A \cdot B}$.

**4.1 Circuit Description:**

A 2-input CMOS NAND gate uses two PMOS transistors connected in parallel and two NMOS transistors connected in series.

**Diagram:**

```
      Vdd (Vcc)
       |
     ------   ------
     |    |   |    |
    _|_   _|_ ----- ----- Output
   /   \ /   \ /     \ /
  / PMOS PMOS\ NMOS  NMOS\
 | A     B | |  A     B |
  \     / \     / \     /
   -----   ----- ----- -----
     |       |       |
    Input   Input   ---
     A       B       GND
```

**4.2 Working Principle:**

The output Y is LOW (Logic '0') only when both inputs A and B are HIGH. Otherwise, the output Y is HIGH (Logic '1').

*   **A=0, B=0:**
    *   PMOS A is ON, PMOS B is ON (parallel path to Vdd).
    *   NMOS A is OFF, NMOS B is OFF (series path to GND is broken).
    *   **Output Y = HIGH (Logic '1').**

*   **A=0, B=1:**
    *   PMOS A is ON, PMOS B is OFF (parallel path to Vdd is through PMOS A).
    *   NMOS A is OFF, NMOS B is ON (series path to GND is broken by NMOS A).
    *   **Output Y = HIGH (Logic '1').**

*   **A=1, B=0:**
    *   PMOS A is OFF, PMOS B is ON (parallel path to Vdd is through PMOS B).
    *   NMOS A is ON, NMOS B is OFF (series path to GND is broken by NMOS B).
    *   **Output Y = HIGH (Logic '1').**

*   **A=1, B=1:**
    *   PMOS A is OFF, PMOS B is OFF (parallel path to Vdd is broken).
    *   NMOS A is ON, NMOS B is ON (series path to GND is complete).
    *   **Output Y = LOW (Logic '0').**

**Important Points to Remember (CMOS NAND):**

*   **NAND Implementation:** Two PMOS transistors in parallel for the pull-up network and two NMOS transistors in series for the pull-down network.
*   **Output LOW only when all inputs HIGH:** This is characteristic of the NAND function.

**Textbook Reference:** Floyd's "Digital Fundamentals" and Brown's "Fundamentals of Digital Logic with Verilog Design" will illustrate these configurations.

---

## 5. CMOS NOR Gate (CO4: K2)

A CMOS NOR gate implements the logical NOR function: Y = $\overline{A + B}$.

**5.1 Circuit Description:**

A 2-input CMOS NOR gate uses two PMOS transistors connected in series and two NMOS transistors connected in parallel.

**Diagram:**

```
      Vdd (Vcc)
       |
     ------ -----
     |    | |    |
    _|_   _|_ ----- ----- Output
   /   \ /   \ /     \ /
  / PMOS PMOS\ NMOS  NMOS\
 | A     B | |  A     B |
  \     / \     / \     /
   -----   ----- ----- -----
     |       |       |
    Input   Input   ---
     A       B       GND
```

**5.2 Working Principle:**

The output Y is LOW (Logic '0') when either input A or input B (or both) are HIGH. The output Y is HIGH (Logic '1') only when both inputs are LOW.

*   **A=0, B=0:**
    *   PMOS A is ON, PMOS B is ON (series path to Vdd is complete).
    *   NMOS A is OFF, NMOS B is OFF (parallel path to GND is broken).
    *   **Output Y = HIGH (Logic '1').**

*   **A=0, B=1:**
    *   PMOS A is ON, PMOS B is OFF (series path to Vdd is broken by PMOS B).
    *   NMOS A is OFF, NMOS B is ON (parallel path to GND is through NMOS B).
    *   **Output Y = LOW (Logic '0').**

*   **A=1, B=0:**
    *   PMOS A is OFF, PMOS B is ON (series path to Vdd is broken by PMOS A).
    *   NMOS A is ON, NMOS B is OFF (parallel path to GND is through NMOS A).
    *   **Output Y = LOW (Logic '0').**

*   **A=1, B=1:**
    *   PMOS A is OFF, PMOS B is OFF (series path to Vdd is broken).
    *   NMOS A is ON, NMOS B is ON (parallel path to GND is complete).
    *   **Output Y = LOW (Logic '0').**

**Important Points to Remember (CMOS NOR):**

*   **NOR Implementation:** Two PMOS transistors in series for the pull-up network and two NMOS transistors in parallel for the pull-down network.
*   **Output HIGH only when all inputs LOW:** This is characteristic of the NOR function.

**Textbook Reference:** Floyd's "Digital Fundamentals" and Brown's "Fundamentals of Digital Logic with Verilog Design" are excellent resources for understanding CMOS gate implementations.

---

## 6. Application to Finite State Machines (FSMs) (CO2: K5)

The logic gates discussed (inverters, NAND, NOR) are the fundamental building blocks for constructing more complex digital circuits, including the combinational and sequential logic required for FSMs.

*   **Combinational Logic:** FSMs use combinational logic to determine the next state based on the current state and inputs. This combinational logic is implemented using basic gates. For example, to implement an XOR gate (often used in FSMs), you can use NAND and NOR gates.
    *   **XOR using NAND gates:**
        *   $A \oplus B = \overline{\overline{A}\cdot B + A\cdot\overline{B}}$
        *   This can be realized using multiple NAND gates.
*   **Sequential Logic:** FSMs also incorporate sequential elements like flip-flops to store the current state. Flip-flops are typically built using NAND or NOR gates.
    *   **SR Latch using NOR gates:**
        ```
            Q
           / \
          /   \
         ----- -----
        /     \ /     \
       NOR   NOR
      /   \ /   \
     S     Q'    R     Q
        ```
        *   When S=0, R=0: Q remains unchanged.
        *   When S=0, R=1: Q=0.
        *   When S=1, R=0: Q=1.
        *   When S=1, R=1: Invalid state (Q and Q' both become 0).

**Example (Conceptual):**

Consider a simple FSM that detects a sequence. It would involve:

1.  **Flip-flops:** To store the current state (e.g., D flip-flops, which are built from NAND gates).
2.  **Combinational Logic (next-state logic):** This logic, implemented using NAND, NOR, and AND/OR gates (all of which can be constructed from NAND/NOR), would take the current state bits and input bits to compute the next state bits.
3.  **Combinational Logic (output logic):** This logic would determine the output based on the current state and/or inputs.

**How these gates relate to FSM design:**

*   **Building Blocks:** Inverters, NAND, and NOR gates are the primitive gates from which all other logic gates (AND, OR, XOR) and sequential elements (flip-flops) are constructed.
*   **Universality:** NAND and NOR gates are considered universal gates because any logic function can be implemented using only NAND gates or only NOR gates. This is a key principle in logic design.
*   **Optimizing FSMs:** The choice of logic family (TTL vs. CMOS) affects the FSM's performance (speed, power consumption). CMOS is generally preferred for its low power consumption, making it ideal for battery-powered devices and large-scale integration.

**Textbook Reference:** Floyd's "Digital Fundamentals" (Chapters 6, 7, 8) covers flip-flops and sequential circuits. Brown's "Fundamentals of Digital Logic with Verilog Design" provides excellent coverage of FSM design and implementation. Mano's "Digital Design" is also a strong reference for FSM theory and design.

---

## 7. Practice Questions and Exercises

**Question 1:**
Describe the working principle of a TTL inverter when the input is HIGH. (CO4: K2)

**Answer 1:**
When the input of a TTL inverter is HIGH, the base-emitter junction of the input transistor (Q1) is forward-biased. Q1 operates in the active region, allowing current to flow through the collector resistor (RC). This results in a low voltage at the collector of Q1, which is connected to the base of the output transistor (Q2). This low voltage turns Q2 OFF, and the output is pulled HIGH towards Vcc.

**Question 2:**
Explain why CMOS circuits have very low static power consumption. (CO4: K2)

**Answer 2:**
CMOS circuits use complementary PMOS and NMOS transistors. In any stable logic state (input HIGH or LOW), one transistor is ON, and the other is OFF. This creates an effective open circuit between the power supply (Vdd) and ground (GND), preventing a direct current path. Power is primarily consumed during switching transitions when both transistors might be momentarily conducting.

**Question 3:**
Draw the circuit diagram for a 2-input CMOS NOR gate and explain its operation when input A is LOW and input B is HIGH. (CO4: K2, CO2: K5 - conceptually for logic function)

**Answer 3:**
*(Refer to the diagram in Section 5.1 for the circuit)*

When input A is LOW (Logic '0') and input B is HIGH (Logic '1'):
*   The two PMOS transistors are connected in series between Vdd and the output.
*   PMOS A is ON because its input is LOW.
*   PMOS B is OFF because its input is HIGH.
*   Since PMOS A is ON and PMOS B is OFF, the series path to Vdd is broken.
*   The two NMOS transistors are connected in parallel between the output and GND.
*   NMOS A is OFF because its input is LOW.
*   NMOS B is ON because its input is HIGH.
*   Since NMOS B is ON, there is a path from the output to GND.
*   Therefore, the output Y is LOW (Logic '0'). This aligns with the NOR function: $\overline{0 + 1} = \overline{1} = 0$.

**Question 4:**
How can a basic SR latch be constructed using NOR gates? (CO2: K5)

**Answer 4:**
An SR latch can be constructed using two cross-coupled NOR gates. The output of the first NOR gate is connected to one input of the second NOR gate, and the output of the second NOR gate is connected to one input of the first. The set (S) input is connected to one input of the first NOR gate, and the reset (R) input is connected to one input of the second NOR gate. The outputs are labeled Q and Q'. (Refer to the conceptual diagram in Section 6).

**Question 5:**
Identify the transistor configuration in a CMOS NAND gate for the pull-up and pull-down networks. (CO4: K2)

**Answer 5:**
For a CMOS NAND gate:
*   **Pull-up network:** Two PMOS transistors connected in parallel between Vdd and the output.
*   **Pull-down network:** Two NMOS transistors connected in series between the output and GND.

---

## 8. Key Points to Remember

*   **TTL vs. CMOS:** Understand the fundamental differences in their switching elements (BJTs vs. MOSFETs) and the implications for power consumption, speed, and input impedance.
*   **CMOS Universality:** CMOS gates are built using complementary pairs of PMOS and NMOS transistors, with specific configurations for NAND (PMOS parallel, NMOS series) and NOR (PMOS series, NMOS parallel).
*   **Static Power:** CMOS excels in low static power consumption due to its design preventing direct Vdd-GND paths in stable states.
*   **Universality of NAND/NOR:** These gates can be used to implement any logic function, making them fundamental for circuit design.
*   **Foundation for FSMs:** Basic gates are the building blocks for the combinational logic (next-state and output logic) and sequential elements (flip-flops) within Finite State Machines.

---

This module provides the foundational understanding of how basic logic gates are physically realized using different semiconductor technologies. This knowledge is critical for comprehending the behavior and design of more complex digital systems like Finite State Machines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
