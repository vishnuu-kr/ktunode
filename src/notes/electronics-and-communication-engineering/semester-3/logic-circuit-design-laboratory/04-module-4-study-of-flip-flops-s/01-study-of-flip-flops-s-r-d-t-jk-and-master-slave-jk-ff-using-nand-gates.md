---
title: "Study of Flip Flops : S-R, D, T, JK and Master slave JK FF using NAND gates"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 4: Study of Flip Flops : S"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe442"
status: "completed"
scrapedAt: "2026-05-23T17:46:19.339Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY: Module 4: Study of Flip Flops - S-R, D, T, JK, and Master-Slave JK using NAND Gates

This module delves into the fundamental building blocks of sequential logic: Flip-Flops. We will explore the operation and implementation of various flip-flop types using NAND gates, a crucial skill for understanding and designing synchronous digital systems.

## 1. Introduction to Flip-Flops

**Key Concepts:**

*   **Sequential Circuits:** Circuits whose output depends not only on the current inputs but also on the past sequence of inputs. They possess "memory."
*   **Flip-Flop:** The most basic memory element in sequential circuits. It is a bistable multivibrator, meaning it can exist in one of two stable states (0 or 1) and can be switched between these states by an input signal.
*   **Clock Signal:** A periodic signal that synchronizes the operation of flip-flops. State changes typically occur at the rising or falling edge of the clock.
*   **State:** The current output value of a flip-flop.
*   **Excitation Table:** A table that shows the required input values for a flip-flop to transition from a current state to a desired next state.

**Reference:**
*   **Roth C.H., *Fundamentals of Logic Design***: This textbook provides a strong foundation on the characteristics and operation of flip-flops, explaining their role in memory elements and state machines. (Chapter on Sequential Logic)

**Alignment with Course Outcomes:**

*   **CO1 (K3):** This section directly contributes to designing and demonstrating the functioning of sequential circuits by explaining the fundamental memory element. Understanding flip-flops is essential for building more complex sequential logic.

---

## 2. The S-R Flip-Flop (Set-Reset Flip-Flop)

The S-R flip-flop is the simplest form of flip-flop. It has two inputs, S (Set) and R (Reset), and two outputs, Q and Q' (complement of Q).

**2.1 Basic Structure and Operation:**

The S-R flip-flop can be implemented using two cross-coupled NAND gates or NOR gates. We will focus on the NAND gate implementation.

**2.1.1 S-R Flip-Flop using NAND Gates:**

```
      +-------+
  S --|       |
      | NAND  |----- Q
  R --|       |
      +-------+
        |   |
        |   +---+
        |       |
        |   +---+-------+
        |   |   |       |
        +---|   | NAND  |----- Q'
            |   |       |
            +---|       |
                +-------+
```

**Truth Table for S-R Flip-Flop (NAND Implementation):**

| S   | R   | Q (Next) | Q' (Next) | Description       |
| :-- | :-- | :------- | :-------- | :---------------- |
| 0   | 0   | 1        | 1         | Invalid/Forbidden |
| 0   | 1   | 1        | 0         | Set State         |
| 1   | 0   | 0        | 1         | Reset State       |
| 1   | 1   | Q        | Q'        | No Change (Hold)  |

**Explanation:**

*   **Set (S=0, R=1):** This input combination forces the output Q to 1 and Q' to 0.
*   **Reset (S=1, R=0):** This input combination forces the output Q to 0 and Q' to 1.
*   **Hold (S=1, R=1):** When both S and R are high, the flip-flop maintains its current state. The outputs Q and Q' will remain unchanged.
*   **Invalid/Forbidden (S=0, R=0):** This input combination leads to an unstable state where both Q and Q' become 1. This is an undesirable condition and should be avoided.

**2.2 Characteristics Table:**

| Current State (Q) | S   | R   | Next State (Q+) |
| :---------------- | :-- | :-- | :-------------- |
| 0                 | 0   | 1   | 1               |
| 0                 | 1   | 1   | 0               |
| 1                 | 0   | 1   | 1               |
| 1                 | 1   | 1   | 1               |

**2.3 Excitation Table:**

| Current State (Q) | Next State (Q+) | S   | R   |
| :---------------- | :-------------- | :-- | :-- |
| 0                 | 0               | 1   | 1   |
| 0                 | 1               | 0   | 1   |
| 1                 | 0               | 1   | 0   |
| 1                 | 1               | 1   | 1   |

**Important Points to Remember:**

*   The S-R flip-flop is level-sensitive, meaning the state can change whenever S or R inputs are active (low in NAND implementation).
*   The S=0, R=0 condition is invalid and must be avoided in practical designs.

**Practice Question:**

If an S-R flip-flop (using NAND gates) is in state Q=1, and the inputs are S=0 and R=1, what will be the next state of Q?

**Answer:** Q=1. The input S=0, R=1 is the "Set" condition, forcing Q to 1 regardless of the current state.

---

## 3. The Gated S-R Flip-Flop

To make the S-R flip-flop more useful in synchronous systems, a clock input is added. This creates a Gated S-R flip-flop.

**3.1 Basic Structure and Operation:**

A clock signal is introduced, and the S and R inputs are enabled only when the clock is active.

**3.1.1 Gated S-R Flip-Flop using NAND Gates:**

The S and R inputs are first gated by the clock using NAND gates. The outputs of these NAND gates then feed into the basic S-R flip-flop.

```
      +-------+       +-------+
  S --| NAND  |-------|       |
      +-------+       |       |
      +-------+       | NAND  |----- Q
  R --| NAND  |-------|       |
      +-------+       |       |
      +-------+       +-------+
  CLK-| NAND  |-------|   |
      +-------+       |   +---+
                      |       |
                      |   +---+-------+
                      |   |   |       |
                      +---|   | NAND  |----- Q'
                          |   |       |
                          +---|       |
                              +-------+
```

**Truth Table for Gated S-R Flip-Flop (NAND Implementation):**

| CLK | S   | R   | Q (Next) | Q' (Next) | Description       |
| :-- | :-- | :-- | :------- | :-------- | :---------------- |
| 0   | X   | X   | Q        | Q'        | No Change (Hold)  |
| 1   | 0   | 0   | 1        | 1         | Invalid/Forbidden |
| 1   | 0   | 1   | 1        | 0         | Set State         |
| 1   | 1   | 0   | 0        | 1         | Reset State       |
| 1   | 1   | 1   | Q        | Q'        | No Change (Hold)  |

**Explanation:**

*   When CLK is 0, the outputs of the first set of NAND gates will be 1, effectively disabling the S and R inputs. The flip-flop will hold its previous state.
*   When CLK is 1, the flip-flop behaves like the basic S-R flip-flop, with the state changing according to the S and R inputs. The S=0, R=0 condition remains invalid.

**Important Points to Remember:**

*   The Gated S-R flip-flop is controlled by the clock signal. State changes only occur when the clock is active (high in this case).
*   The invalid condition (S=0, R=0) still exists when CLK=1.

**Practice Question:**

For a Gated S-R flip-flop (NAND implementation), what is the next state of Q if CLK=0, S=0, and R=1?

**Answer:** Q remains unchanged. When CLK=0, the flip-flop holds its previous state, irrespective of the S and R inputs.

---

## 4. The D Flip-Flop (Delay Flip-Flop)

The D flip-flop is a very useful flip-flop that stores the value of its input D when the clock transitions. It is essentially an S-R flip-flop with an added logic to ensure S and R are never simultaneously active.

**4.1 Basic Structure and Operation:**

The D flip-flop can be constructed from a Gated S-R flip-flop by adding an inverter and some logic to connect D to S and its complement to R.

**4.1.1 D Flip-Flop using NAND Gates:**

One common implementation uses a Gated S-R flip-flop modified to accept a single D input. The D input is fed to one NAND gate, and its inverted version (D') is fed to the other NAND gate that controls the S and R lines of the internal S-R flip-flop.

```
      +-------+       +-------+
  D --|       |-------| NAND  |-----
      | INV   |       +-------+
      +-------+         |
                        |   +-------+
                        |   |       |
      +-------+-------+-+---| NAND  |----- Q
  CLK-| NAND  |       | |   |       |
      +-------+       | |   +-------+
                      | |     |   |
                      | |     |   +---+
                      | |     |       |
                      | | +---+-------+
                      | | |   |       |
                      +-+-|   | NAND  |----- Q'
                          |   |       |
                          +---|       |
                              +-------+
```

A simpler representation of the D flip-flop logic can be seen as:
If CLK = 1, then the internal SR flip-flop inputs are:
S = D
R = D'
This ensures that S and R are always complementary, thus avoiding the invalid state.

**Truth Table for D Flip-Flop (NAND Implementation, assuming CLK=1):**

| D   | Q (Next) | Q' (Next) | Description |
| :-- | :------- | :-------- | :---------- |
| 0   | 0        | 1         | Store 0     |
| 1   | 1        | 0         | Store 1     |

**Truth Table for D Flip-Flop (with CLK):**

| CLK | D   | Q (Next) | Q' (Next) | Description |
| :-- | :-- | :------- | :-------- | :---------- |
| 0   | X   | Q        | Q'        | No Change   |
| 1   | 0   | 0        | 1         | Store 0     |
| 1   | 1   | 1        | 0         | Store 1     |

**Explanation:**

*   When CLK=0, the flip-flop holds its current state.
*   When CLK=1, the value of D is transferred to Q. If D=0, Q becomes 0. If D=1, Q becomes 1.
*   The D flip-flop always stores the value of D at the active clock edge.

**4.2 Characteristics Table:**

| Current State (Q) | D   | CLK | Next State (Q+) |
| :---------------- | :-- | :-- | :-------------- |
| 0                 | 0   | 1   | 0               |
| 0                 | 1   | 1   | 1               |
| 1                 | 0   | 1   | 0               |
| 1                 | 1   | 1   | 1               |

**4.3 Excitation Table:**

| Current State (Q) | Next State (Q+) | D   |
| :---------------- | :-------------- | :-- |
| 0                 | 0               | 0   |
| 0                 | 1               | 1   |
| 1                 | 0               | 0   |
| 1                 | 1               | 1   |

**Important Points to Remember:**

*   The D flip-flop is synchronous and edge-triggered (or level-triggered, depending on implementation details, but typically edge-triggered in advanced designs).
*   It is widely used as a fundamental building block for registers, memory, and shift registers.
*   The D flip-flop avoids the invalid state of the S-R flip-flop by ensuring S and R are always complements.

**Reference:**
*   **Bhasker, J., *Verilog HDL Synthesis: A Practical Primer***: This book can be useful for understanding how D flip-flops are synthesized in hardware description languages, which is a precursor to actual circuit implementation. (Chapter on Sequential Logic Constructs)

**Practice Question:**

If a D flip-flop has Q=0 and the inputs are CLK=1 and D=1, what is the next state of Q?

**Answer:** Q=1. The D flip-flop samples the D input when the clock is active.

---

## 5. The T Flip-Flop (Toggle Flip-Flop)

The T flip-flop is used to toggle its output state when the clock pulse is applied. This is achieved by connecting the Q and Q' outputs of a D flip-flop to the inputs of an XOR gate, and then feeding the output of the XOR gate to the D input. Alternatively, it can be derived from an S-R flip-flop.

**5.1 Basic Structure and Operation:**

**5.1.1 T Flip-Flop using NAND Gates (derived from D flip-flop):**

The T flip-flop can be constructed from a D flip-flop by feeding the Q output and Q' output to an XOR gate, and then feeding the output of the XOR gate to the D input.

```
      +-------+       +-------+
  T --| XOR   |-------| D FF  |----- Q
      +-------+       |       |
        |             +-------+
        |               |
        +---------------+
```

If the T flip-flop is constructed from an S-R flip-flop:
When T=0, the flip-flop holds its state.
When T=1, the flip-flop toggles its state.

**Truth Table for T Flip-Flop (NAND Implementation):**

| CLK | T   | Q (Next) | Q' (Next) | Description |
| :-- | :-- | :------- | :-------- | :---------- |
| 0   | X   | Q        | Q'        | No Change   |
| 1   | 0   | Q        | Q'        | No Change   |
| 1   | 1   | Q'       | Q         | Toggle      |

**Explanation:**

*   When T=0 and CLK=1, the flip-flop maintains its current state.
*   When T=1 and CLK=1, the flip-flop changes its state to the opposite of its current state (Q becomes Q' and Q' becomes Q).

**5.2 Characteristics Table:**

| Current State (Q) | T   | CLK | Next State (Q+) |
| :---------------- | :-- | :-- | :-------------- |
| 0                 | 0   | 1   | 0               |
| 0                 | 1   | 1   | 1               |
| 1                 | 0   | 1   | 1               |
| 1                 | 1   | 1   | 0               |

**5.3 Excitation Table:**

| Current State (Q) | Next State (Q+) | T   |
| :---------------- | :-------------- | :-- |
| 0                 | 0               | 0   |
| 0                 | 1               | 1   |
| 1                 | 0               | 1   |
| 1                 | 1               | 0   |

**Important Points to Remember:**

*   The T flip-flop is useful for counting applications (e.g., frequency division).
*   It can be thought of as a D flip-flop where D is connected to the XOR of T and Q.

**Practice Question:**

A T flip-flop is in state Q=1. If the inputs are CLK=1 and T=1, what is the next state of Q?

**Answer:** Q=0. When T=1 and CLK=1, the T flip-flop toggles its state.

---

## 6. The JK Flip-Flop

The JK flip-flop is a versatile flip-flop that overcomes the limitations of the S-R flip-flop. It has two inputs, J and K, and the "forbidden" state of the S-R flip-flop is resolved by the JK flip-flop's ability to toggle.

**6.1 Basic Structure and Operation:**

The JK flip-flop is typically implemented using NAND gates. The J and K inputs are connected to the S and R inputs of an internal S-R flip-flop, but with additional feedback from the Q and Q' outputs.

**6.1.1 JK Flip-Flop using NAND Gates:**

```
      +-------+       +-------+
  J --|       |-------| NAND  |-----
      |       |       +-------+
      | NAND  |         |
      |       |   +-----+-----+
      +-------+   |           |
        |         |   +-------+
        |         |   |       |
        |         +---| NAND  |----- Q
        |             |       |
        |   +-------+ +-------+
        |   |       |   |   |
      K --|       |---|   +---+
          | NAND  |   |       |
          |       |   |   +---+-------+
          +-------+   |   |   |       |
            |         +---|   | NAND  |----- Q'
            |             |   |       |
            |     +-------+---|       |
            +-----| Q     |   +-------+
                  +-------+
```

In this NAND gate implementation, J is connected to the input of one NAND gate, and K is connected to the input of another NAND gate. The output of the first NAND gate is fed to the S input of the SR flip-flop, and the output of the second NAND gate is fed to the R input. The feedback loops from Q and Q' make it a JK flip-flop.

**Truth Table for JK Flip-Flop (NAND Implementation):**

| J   | K   | Q (Current) | Q (Next) | Q' (Next) | Description       |
| :-- | :-- | :---------- | :------- | :-------- | :---------------- |
| 0   | 0   | 0           | 0        | 1         | No Change (Hold)  |
| 0   | 0   | 1           | 1        | 0         | No Change (Hold)  |
| 0   | 1   | 0           | 0        | 1         | Reset State       |
| 0   | 1   | 1           | 0        | 1         | Reset State       |
| 1   | 0   | 0           | 1        | 0         | Set State         |
| 1   | 0   | 1           | 1        | 0         | Set State         |
| 1   | 1   | 0           | 1        | 0         | Toggle            |
| 1   | 1   | 1           | 0        | 1         | Toggle            |

**Explanation:**

*   **Hold (J=0, K=0):** The flip-flop retains its current state.
*   **Reset (J=0, K=1):** The flip-flop is reset to 0, regardless of its current state.
*   **Set (J=1, K=0):** The flip-flop is set to 1, regardless of its current state.
*   **Toggle (J=1, K=1):** The flip-flop changes to the opposite of its current state. This is the key advantage over the S-R flip-flop.

**6.2 Characteristics Table:**

| Current State (Q) | J   | K   | Next State (Q+) |
| :---------------- | :-- | :-- | :-------------- |
| 0                 | 0   | 0   | 0               |
| 0                 | 0   | 1   | 0               |
| 0                 | 1   | 0   | 1               |
| 0                 | 1   | 1   | 1               |
| 1                 | 0   | 0   | 1               |
| 1                 | 0   | 1   | 0               |
| 1                 | 1   | 0   | 1               |
| 1                 | 1   | 1   | 0               |

**6.3 Excitation Table:**

| Current State (Q) | Next State (Q+) | J   | K   |
| :---------------- | :-------------- | :-- | :-- |
| 0                 | 0               | 0   | X   |
| 0                 | 1               | 1   | X   |
| 1                 | 0               | X   | 1   |
| 1                 | 1               | X   | 0   |

**Important Points to Remember:**

*   The JK flip-flop is the most versatile of the basic flip-flops.
*   The J=1, K=1 condition (toggle) is well-defined, unlike the S-R flip-flop's invalid state.
*   It can be converted to a D flip-flop by connecting J=D and K=D'.
*   It can be converted to a T flip-flop by connecting J=T and K=T.

**Reference:**
*   **Roth C.H., *Fundamentals of Logic Design***: This book provides a comprehensive explanation of the JK flip-flop, its truth table, characteristic table, and excitation table, highlighting its advantages. (Chapter on Sequential Logic)

**Practice Question:**

If a JK flip-flop has Q=1 and the inputs are J=1 and K=1, what will be the next state of Q?

**Answer:** Q=0. With J=1 and K=1, the JK flip-flop toggles its state.

---

## 7. The Master-Slave JK Flip-Flop

The Master-Slave JK flip-flop is a variation that addresses the issue of **race-around conditions** that can occur in simple JK flip-flops when the clock pulse width is too long. It achieves this by using two JK flip-flops: a master and a slave.

**7.1 Basic Structure and Operation:**

The Master-Slave JK flip-flop consists of a master flip-flop that receives the J and K inputs and is activated by the leading edge of the clock. The slave flip-flop receives the outputs of the master flip-flop and is activated by the trailing edge of the clock.

**7.1.1 Master-Slave JK Flip-Flop using NAND Gates:**

A common implementation involves two JK flip-flops, often constructed using NAND gates.

1.  **Master Stage:** A JK flip-flop that is sensitive to the positive (or negative) edge of the clock. It takes the external J and K inputs.
2.  **Slave Stage:** Another JK flip-flop that receives the Q and Q' outputs from the master stage. It is sensitive to the negative (or positive) edge of the clock.

**Operation:**

*   When the clock is HIGH (for positive-edge triggered master), the master flip-flop is enabled. It captures the J and K inputs and sets its outputs Q_master and Q'_master accordingly. The slave flip-flop is disabled.
*   When the clock transitions from HIGH to LOW (falling edge), the master flip-flop is disabled, and its state is held. Simultaneously, the slave flip-flop is enabled by the trailing edge. The slave flip-flop receives the Q_master and Q'_master from the master stage and transfers these values to its outputs Q and Q'.

**Advantages:**

*   **Eliminates Race-Around Condition:** By separating the input sampling (master) from the output change (slave), it prevents the output from changing multiple times within a single clock cycle.

**7.2 Truth Table for Master-Slave JK Flip-Flop:**

The truth table is essentially the same as the JK flip-flop, but the output change is synchronized to the clock edge that triggers the slave stage (typically the falling edge if the master is rising edge triggered).

| CLK | J   | K   | Q (Current) | Q (Next) | Q' (Next) | Description       |
| :-- | :-- | :-- | :---------- | :------- | :-------- | :---------------- |
| ↑   | 0   | 0   | 0           | 0        | 1         | No Change (Hold)  |
| ↑   | 0   | 0   | 1           | 1        | 0         | No Change (Hold)  |
| ↑   | 0   | 1   | 0           | 0        | 1         | Reset State       |
| ↑   | 0   | 1   | 1           | 0        | 1         | Reset State       |
| ↑   | 1   | 0   | 0           | 1        | 0         | Set State         |
| ↑   | 1   | 0   | 1           | 1        | 0         | Set State         |
| ↑   | 1   | 1   | 0           | 1        | 0         | Toggle            |
| ↑   | 1   | 1   | 1           | 0        | 1         | Toggle            |

*Note: '↑' indicates the active clock edge that triggers the master stage.*
*The actual output Q changes when the slave stage is triggered.*

**Important Points to Remember:**

*   Master-Slave flip-flops are edge-triggered (either positive-edge or negative-edge).
*   They are crucial for building reliable synchronous counters and registers, especially in older technologies where propagation delays were more critical.
*   Modern edge-triggered flip-flops are often implemented using more advanced techniques (e.g., CML flip-flops) but the master-slave concept is fundamental.

**Practice Question:**

Describe the main advantage of a Master-Slave JK flip-flop over a simple JK flip-flop in the context of synchronous circuit design.

**Answer:** The main advantage is the elimination of the race-around condition. The master-slave design ensures that the output only changes once per clock cycle, even if the J and K inputs change multiple times during the clock pulse.

---

## 8. Design and Demonstration (Practical Aspects)

**Alignment with Course Outcomes:**

*   **CO1 (K3):** This section directly addresses the practical implementation and demonstration of these flip-flops using ICs.
*   **CO2 (K3):** While this module focuses on discrete gate implementations, understanding the underlying logic is crucial for HDL synthesis. The design principles learned here are transferable to Verilog HDL.
*   **CO3 (K3):** Understanding flip-flop operation is fundamental for designing circuits that can be implemented on FPGA boards.
*   **CO4 (K2):** Laboratory exercises involving these flip-flops will require effective teamwork for circuit assembly, testing, and troubleshooting.

**8.1 Implementation using ICs:**

*   **NAND Gate ICs:** 74LS00 (Quad 2-input NAND gates) or 74LS02 (Quad 2-input NOR gates) can be used to build the basic flip-flop circuits.
*   **Flip-Flop ICs:** Dedicated flip-flop ICs like the 74LS74 (Dual D Flip-Flop) or 74LS109 (Dual JK Master-Slave Flip-Flop) can be used to verify the behavior of these flip-flops directly.

**8.2 Laboratory Procedure (General Outline):**

1.  **Circuit Diagram:** Draw the schematic for the desired flip-flop (S-R, D, T, JK, Master-Slave JK) using NAND gates.
2.  **Component Identification:** Identify the necessary ICs (e.g., 74LS00), power supply, clock source, input switches, and output LEDs.
3.  **Breadboarding:** Carefully construct the circuit on a breadboard, ensuring correct power and ground connections for all ICs.
4.  **Clock Signal Generation:** Use a function generator or a dedicated clock module to provide a stable clock signal.
5.  **Input Control:** Use switches or logic level generators for the S, R, J, K, D, and T inputs.
6.  **Output Observation:** Connect LEDs to the Q and Q' outputs to visually observe the state changes.
7.  **Testing:**
    *   Apply different input combinations according to the truth tables.
    *   Observe the output states at the active clock edge.
    *   Verify that the observed behavior matches the expected truth tables and characteristics.
    *   For Master-Slave JK, test the toggle functionality and ensure no race-around condition.
8.  **Documentation:** Record all observations, readings, and any discrepancies.

**Example: Testing a Gated S-R Flip-Flop:**

*   Wire up the gated S-R flip-flop.
*   Apply a clock signal.
*   Set S=0, R=1, CLK=1. Observe Q=1.
*   Set S=1, R=0, CLK=1. Observe Q=0.
*   Set S=1, R=1, CLK=1. Observe that Q holds its previous value.
*   Set S=0, R=0, CLK=1. Observe that Q becomes 1 and Q' becomes 1 (invalid state). Note this and avoid repeating this input.
*   Set CLK=0 and change S and R. Observe that Q does not change.

**8.3 Verilog HDL Synthesis (Brief Mention):**

*   While this lab focuses on hardware implementation, understanding how these flip-flops are described in Verilog is crucial.
*   A D flip-flop can be synthesized using `always @(posedge clk)` or `always @(negedge clk)` blocks.
*   JK flip-flops are often synthesized using conditional assignments within `always` blocks, mapping J and K inputs to the desired next state.

**Reference:**
*   **Palnitkar, S., *Verilog HDL: A guide to digital design and synthesis***: This reference is excellent for understanding the Verilog constructs used to describe sequential logic, including flip-flops. (Chapter on Sequential Logic Design)

---

## 9. Practice Questions for Review

1.  **Explain the "forbidden state" of an S-R flip-flop and how it is resolved in a JK flip-flop.**
2.  **What is the primary function of a D flip-flop? How does it differ from an S-R flip-flop?**
3.  **Under what conditions does a T flip-flop change its state?**
4.  **Describe the working principle of a Master-Slave JK flip-flop and why it is preferred over a simple JK flip-flop in certain applications.**
5.  **If you were to design a simple binary counter using flip-flops, which type of flip-flop would be most suitable and why?**
6.  **Draw the logic diagram for a T flip-flop using a D flip-flop and an XOR gate.**
7.  **Using the excitation table for a JK flip-flop, determine the inputs J and K required to transition the flip-flop from state Q=0 to state Q=0.**
8.  **How can a JK flip-flop be converted into a D flip-flop? Show the connections.**

---

## 10. Answers to Practice Questions

1.  The "forbidden state" of an S-R flip-flop occurs when both S and R inputs are simultaneously active (0 in NAND implementation). This leads to an unstable condition where both outputs Q and Q' can become 1. In a JK flip-flop, the J=1, K=1 condition is used to implement the "toggle" functionality, where the flip-flop changes its state. This effectively resolves the invalid state issue.
2.  The primary function of a D flip-flop is to store the value of its D input when the clock pulse occurs. It differs from an S-R flip-flop in that it has only one data input (D) and avoids the invalid state by ensuring that the S and R inputs are always complements of each other.
3.  A T flip-flop changes its state (toggles) when the clock pulse is active and the T input is high (T=1). If the T input is low (T=0), the flip-flop holds its current state.
4.  A Master-Slave JK flip-flop consists of two JK flip-flops: a master and a slave. The master is activated by one clock edge (e.g., rising), capturing the J and K inputs. The slave is activated by the opposite clock edge (e.g., falling), and transfers the master's output to the final output. This separation prevents the "race-around condition," where the output might change multiple times within a single clock pulse in a simple JK flip-flop. This makes it more reliable for sequential circuit design.
5.  A **T flip-flop** is most suitable for designing a simple binary counter. When T=1, it toggles its state with each clock pulse, allowing it to count sequentially (0, 1, 0, 1...).
6.  The logic diagram for a T flip-flop using a D flip-flop and an XOR gate: Connect the T input to one input of the XOR gate. Connect the current output Q of the D flip-flop to the other input of the XOR gate. Connect the output of the XOR gate to the D input of the D flip-flop. The clock input of the D flip-flop receives the clock signal.
7.  To transition from Q=0 to Q=0:
    *   Current State (Q) = 0
    *   Next State (Q+) = 0
    *   From the JK excitation table: When Q=0 and Q+=0, J=0 and K=X (don't care).
    *   Therefore, the inputs are **J=0, K=X**.
8.  To convert a JK flip-flop into a D flip-flop, connect the D input to the J input of the JK flip-flop, and connect the inverted D input (D') to the K input of the JK flip-flop. The clock inputs of both are connected together.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
