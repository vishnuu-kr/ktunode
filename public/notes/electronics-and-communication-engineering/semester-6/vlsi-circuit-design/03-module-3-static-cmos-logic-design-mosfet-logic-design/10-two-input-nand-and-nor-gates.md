---
title: "two input NAND and NOR gates."
subject: "VLSI CIRCUIT DESIGN"
module: "Module 3: Static CMOS Logic Design : MOSFET Logic Design "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefd2"
status: "completed"
scrapedAt: "2026-05-23T18:03:47.893Z"
---
# VLSI Circuit Design: Module 3 - Static CMOS Logic Design: MOSFET Logic Design

## Topic: Two-Input NAND and NOR Gates

---

### 1. Introduction to Static CMOS Logic

**Static CMOS Logic** is a fundamental building block in digital VLSI design. It represents a class of logic gates where the output is always driven to a defined logic level (either $V_{DD}$ or GND) during both the evaluation and the hold phases, regardless of the input states. This ensures a predictable and robust output.

**Key Characteristics of Static CMOS Logic:**
*   **Complementary Structure:** Composed of complementary pull-up (P-network) and pull-down (N-network) networks made of PMOS and NMOS transistors, respectively.
*   **No Glitches:** Outputs do not exhibit spurious voltage transitions (glitches) during transitions.
*   **Low Static Power Consumption:** Ideally, no direct path exists between $V_{DD}$ and GND when the output is stable, leading to very low static power dissipation. Power is primarily consumed during switching.
*   **Rail-to-Rail Output Swing:** The output voltage swings between $V_{DD}$ (logic 1) and GND (logic 0).
*   **Robustness:** Less susceptible to noise compared to other logic styles.

**Course Outcome Alignment:**
*   **CO1 (K2):** Understanding static CMOS logic is foundational to understanding various VLSI design methodologies and the role of logic gates in ASICs and SoCs.
*   **CO3 (K3):** Designing and analyzing NAND and NOR gates is a direct application of the skills required for designing static CMOS logic circuits and their layouts.

**Textbook References:**
*   Kang, Leblebici, Kim: Chapter 3 (CMOS Logic Gates)
*   Weste, Eshraghian: Chapter 4 (CMOS Logic Design)
*   Rabaey: Chapter 3 (CMOS Logic)

---

### 2. Two-Input NAND Gate

#### 2.1. Functionality

A two-input NAND gate produces a **LOW** output only when **both** inputs are **HIGH**. Otherwise, the output is **HIGH**.

| Input A | Input B | Output |
| :------ | :------ | :----- |
| 0       | 0       | 1      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |

Boolean Expression: $Y = \overline{A \cdot B}$

#### 2.2. CMOS Implementation

The CMOS two-input NAND gate consists of:
*   **P-network (Pull-up):** Two PMOS transistors connected in **parallel**. This network pulls the output HIGH.
*   **N-network (Pull-down):** Two NMOS transistors connected in **series**. This network pulls the output LOW.

**Circuit Diagram:**

```
      VDD
       |
      .-.
      | | PMOS1
      '-'
     /   \
   A --|   |-- PMOS2
     \   /   |
      '-'    |
       |     |
       +-----+------ Output Y
       |     |
     .-.   .-.
     | | NMOS1 | | NMOS2
     '-'   '-'
      |     |
      A     B
      |     |
     GND   GND
```

**Explanation:**

*   **Pull-up Network:** For the output to be HIGH ($Y=1$), the P-network must be conducting, and the N-network must be non-conducting. The PMOS transistors are controlled by the inverted inputs. For the parallel PMOS arrangement, *at least one* PMOS transistor needs to be ON for the output to be pulled up to $V_{DD}$. This happens when $A=0$ OR $B=0$.
*   **Pull-down Network:** For the output to be LOW ($Y=0$), the N-network must be conducting, and the P-network must be non-conducting. The NMOS transistors are controlled by the direct inputs. For the series NMOS arrangement, *both* NMOS transistors must be ON for the output to be pulled down to GND. This happens when $A=1$ AND $B=1$.

**Truth Table and Transistor States:**

| Input A | Input B | Output Y | PMOS1 (on when A=0) | PMOS2 (on when B=0) | NMOS1 (on when A=1) | NMOS2 (on when B=1) |
| :------ | :------ | :----- | :------------------ | :------------------ | :------------------ | :------------------ |
| 0       | 0       | 1      | ON                  | ON                  | OFF                 | OFF                 |
| 0       | 1       | 1      | ON                  | OFF                 | OFF                 | ON                  |
| 1       | 0       | 1      | OFF                 | ON                  | ON                  | OFF                 |
| 1       | 1       | 0      | OFF                 | OFF                 | ON                  | ON                  |

**Important Points:**
*   The parallel connection of PMOS transistors in the pull-up network corresponds to the OR function in the inverted expression (i.e., $\overline{A}$ OR $\overline{B}$ contributes to pulling up).
*   The series connection of NMOS transistors in the pull-down network corresponds to the AND function in the direct expression (i.e., $A$ AND $B$ contributes to pulling down).
*   **Load Capacitance:** The output node Y is connected to the gates of subsequent transistors, representing a load capacitance ($C_L$). The speed of the NAND gate depends on how quickly this capacitance can be charged and discharged.

#### 2.3. Transistor Sizing (Width-to-Length Ratios - W/L)

For a symmetric rise and fall time, the effective resistance of the pull-up network should match the effective resistance of the pull-down network.

*   **Pull-down Network:** Two NMOS transistors in series. The effective resistance is the sum of their individual resistances. For identical NMOS transistors with $W/L = (W/L)_{NMOS}$, the resistance is $2 R_{on,NMOS}$. To match this resistance with PMOS transistors, we need a P-network resistance of $2 R_{on,PMOS}$. Since PMOS transistors are inherently slower and have higher resistance than NMOS transistors for the same $W/L$ due to lower hole mobility, their $W/L$ ratio needs to be increased.
    *   The effective resistance of two series NMOS transistors is approximately $2 \frac{V_{th,n}}{I_{dsat,n}} + 2 \frac{L_{eff}}{W_{eff} \mu_n C_{ox} (V_{DD} - V_{th,n})}$. A simpler approximation for matching is to consider the resistance contribution. For series NMOS, total $R_{pull-down} \propto \frac{2}{(W/L)_{NMOS}}$.
    *   To match this, the pull-up network (parallel PMOS) needs an effective resistance $R_{pull-up} \propto \frac{1}{(W/L)_{PMOS}}$.
    *   For symmetric switching, $R_{pull-up} = R_{pull-down}$.
    *   Since $\mu_p \approx 0.5 \mu_n$, we typically need $(W/L)_{PMOS} = 2 \times (W/L)_{NMOS}$ for a single transistor.
    *   For the series NMOS, the resistance is effectively doubled compared to a single NMOS. So, to match the resistance of two series NMOS, the parallel PMOS network needs to provide a similar resistance.
    *   Thus, for two PMOS in parallel to match two NMOS in series: $(W/L)_{PMOS} = 2 \times (2 \times (W/L)_{NMOS}) = 4 \times (W/L)_{NMOS}$.
    *   **Rule of Thumb:** $(W/L)_{PMOS} = 2 \times (W/L)_{NMOS}$ for single transistor gates. For a 2-input NAND, the NMOS are in series, so their resistance adds up. The PMOS are in parallel, so their conductance adds up. To have $R_{pull-down} \approx R_{pull-up}$:
        *   Let $R_{NMOS}$ be the resistance of one NMOS with desired $(W/L)_{NMOS}$.
        *   $R_{pull-down} \approx 2 R_{NMOS}$.
        *   Let $R_{PMOS}$ be the resistance of one PMOS with desired $(W/L)_{PMOS}$.
        *   $R_{pull-up} \approx R_{PMOS} / 2$.
        *   For symmetry, $2 R_{NMOS} = R_{PMOS} / 2 \implies R_{PMOS} = 4 R_{NMOS}$.
        *   Since resistance is inversely proportional to $W/L$ (for same length), $(W/L)_{PMOS} = 4 \times (W/L)_{NMOS}$.

**Textbook References:**
*   Kang, Leblebici, Kim: Section 3.2.2 (CMOS NAND Gate)
*   Wolf: Section 4.3.1 (CMOS Inverter) - Principle of complementary networks applies.
*   Rabaey: Section 3.4.2 (CMOS Inverter) - Principle of complementary networks applies.

---

### 3. Two-Input NOR Gate

#### 3.1. Functionality

A two-input NOR gate produces a **HIGH** output only when **both** inputs are **LOW**. Otherwise, the output is **LOW**.

| Input A | Input B | Output |
| :------ | :------ | :----- |
| 0       | 0       | 1      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 0      |

Boolean Expression: $Y = \overline{A + B}$

#### 3.2. CMOS Implementation

The CMOS two-input NOR gate consists of:
*   **P-network (Pull-up):** Two PMOS transistors connected in **series**. This network pulls the output HIGH.
*   **N-network (Pull-down):** Two NMOS transistors connected in **parallel**. This network pulls the output LOW.

**Circuit Diagram:**

```
      VDD
       |
      .-.
      | | PMOS1
      '-'
       |
      .-.
      | | PMOS2
      '-'
       |
       +-----+------ Output Y
       |     |
     .-.   .-.
     | | NMOS1 | | NMOS2
     '-'   '-'
      |     |
      A     B
      |     |
     GND   GND
```

**Explanation:**

*   **Pull-up Network:** For $Y=1$, the P-network must be conducting. The series PMOS transistors mean *both* PMOS transistors must be ON for the output to be pulled up to $V_{DD}$. This happens when $A=0$ AND $B=0$.
*   **Pull-down Network:** For $Y=0$, the N-network must be conducting. The parallel NMOS transistors mean *at least one* NMOS transistor must be ON for the output to be pulled down to GND. This happens when $A=1$ OR $B=1$.

**Truth Table and Transistor States:**

| Input A | Input B | Output Y | PMOS1 (on when A=0) | PMOS2 (on when B=0) | NMOS1 (on when A=1) | NMOS2 (on when B=1) |
| :------ | :------ | :----- | :------------------ | :------------------ | :------------------ | :------------------ |
| 0       | 0       | 1      | ON                  | ON                  | OFF                 | OFF                 |
| 0       | 1       | 0      | ON                  | OFF                 | OFF                 | ON                  |
| 1       | 0       | 0      | OFF                 | ON                  | ON                  | OFF                 |
| 1       | 1       | 0      | OFF                 | OFF                 | ON                  | ON                  |

**Important Points:**
*   The series connection of PMOS transistors in the pull-up network corresponds to the AND function in the inverted expression (i.e., $\overline{A}$ AND $\overline{B}$ contributes to pulling up).
*   The parallel connection of NMOS transistors in the pull-down network corresponds to the OR function in the direct expression (i.e., $A$ OR $B$ contributes to pulling down).
*   **Speed:** NOR gates are generally slower than NAND gates in CMOS. This is because the pull-up network in a NOR gate consists of series PMOS transistors, which have higher resistance than series NMOS transistors in a NAND gate's pull-down network for the same $W/L$.

#### 3.3. Transistor Sizing (Width-to-Length Ratios - W/L)

For symmetric rise and fall times:

*   **Pull-up Network:** Two PMOS transistors in series. Effective resistance is $2 R_{on,PMOS}$.
*   **Pull-down Network:** Two NMOS transistors in parallel. Effective resistance is $R_{on,NMOS} / 2$.
*   For symmetry, $2 R_{on,PMOS} = R_{on,NMOS} / 2 \implies R_{on,NMOS} = 4 R_{on,PMOS}$.
*   Since $R_{on} \propto L/W$, we have:
    *   $L_{NMOS} / (W/L)_{NMOS} = 4 \times (L_{PMOS} / (W/L)_{PMOS})$.
    *   Assuming $L_{NMOS} = L_{PMOS} = L_{min}$: $1 / (W/L)_{NMOS} = 4 / (W/L)_{PMOS} \implies (W/L)_{PMOS} = 4 \times (W/L)_{NMOS}$.
*   **Rule of Thumb:** $(W/L)_{PMOS} = 4 \times (W/L)_{NMOS}$.

**Textbook References:**
*   Kang, Leblebici, Kim: Section 3.2.3 (CMOS NOR Gate)
*   Wolf: Section 4.3.2 (CMOS NAND Gate) - The principle of complementary networks applies, just the connections are swapped.
*   Rabaey: Section 3.4.3 (CMOS NOR Gate)

---

### 4. Comparison of NAND and NOR Gates

| Feature          | Two-Input NAND Gate                               | Two-Input NOR Gate                                |
| :--------------- | :------------------------------------------------ | :------------------------------------------------ |
| **Boolean Fn.**  | $\overline{A \cdot B}$                            | $\overline{A + B}$                                |
| **Pull-up**      | 2 PMOS in Parallel                                | 2 PMOS in Series                                  |
| **Pull-down**    | 2 NMOS in Series                                  | 2 NMOS in Parallel                                |
| **Speed (Worst)**| Fall time (when A=1, B=1)                         | Rise time (when A=0, B=0)                         |
| **Worst Case**   | Fall time (high resistance in pull-down)          | Rise time (high resistance in pull-up)            |
| **Sizing**       | $(W/L)_{PMOS} = 4 \times (W/L)_{NMOS}$            | $(W/L)_{PMOS} = 4 \times (W/L)_{NMOS}$            |
| **Area**         | Generally smaller due to series NMOS (lower $W/L$) | Generally larger due to parallel NMOS (higher $W/L$ for PMOS) |
| **Propagation Delay** | Typically faster than NOR for similar transistor counts. | Typically slower than NAND for similar transistor counts. |

**Important Note on Speed:**
*   **NAND Gate:** The worst-case delay is usually the **fall time** when both inputs transition from 0 to 1. This is because the pull-down path (series NMOS) has higher resistance than the pull-up path (parallel PMOS) for a given $W/L$.
*   **NOR Gate:** The worst-case delay is usually the **rise time** when both inputs transition from 1 to 0. This is because the pull-up path (series PMOS) has higher resistance than the pull-down path (parallel NMOS) for a given $W/L$.

**Why is NAND generally faster than NOR?**
This is primarily due to the difference in carrier mobility. Hole mobility ($\mu_p$) in PMOS transistors is typically about half of electron mobility ($\mu_n$) in NMOS transistors.
*   **NAND:** The critical path for switching speed in a 2-input NAND is the pull-down network (series NMOS), which has lower effective resistance compared to the pull-up network (parallel PMOS).
*   **NOR:** The critical path for switching speed in a 2-input NOR is the pull-up network (series PMOS), which has higher effective resistance due to the series connection and the lower mobility of holes. To compensate for the series connection and the lower mobility, the PMOS transistors in the pull-up network need larger $W/L$ ratios, leading to higher capacitance and slower switching.

**Textbook References:**
*   Kang, Leblebici, Kim: Section 3.2.4 (Delay in CMOS Gates)
*   Weste, Eshraghian: Chapter 4 (CMOS Logic Design) - Discusses the trade-offs.
*   Rabaey: Section 3.4.5 (Performance Considerations)

---

### 5. Layout Considerations

*   **Stick Diagrams:** Represent the physical layout of transistors and interconnections.
*   **Transistor Placement:** NMOS transistors are placed at the bottom (connected to GND), and PMOS transistors are placed at the top (connected to $V_{DD}$).
*   **Layout Area:** The total area is influenced by the number and size of transistors, as well as routing. Series connections tend to stretch the layout in one dimension, while parallel connections tend to stretch it in another.
*   **Stick Diagram Example (NAND):**
    *   Inputs A and B run horizontally.
    *   NMOS transistors are in series, typically placed one after another along a vertical path connected to GND.
    *   PMOS transistors are in parallel, typically placed side-by-side along a vertical path connected to $V_{DD}$.
    *   The output is taken from the common drain connection of the P-network and N-network.
*   **Stick Diagram Example (NOR):**
    *   Inputs A and B run horizontally.
    *   PMOS transistors are in series, typically placed one after another along a vertical path connected to $V_{DD}$.
    *   NMOS transistors are in parallel, typically placed side-by-side along a vertical path connected to GND.
    *   The output is taken from the common drain connection.

**Course Outcome Alignment:**
*   **CO3 (K3):** Understanding layout principles for basic gates is essential for creating the layout of more complex static CMOS logic circuits.

**Textbook References:**
*   Kang, Leblebici, Kim: Chapter 7 (Layout Design and Technology Mapping)
*   Wolf: Chapter 6 (Physical Design)
*   Rabaey: Chapter 4 (Physical Design)

---

### 6. Learning Outcome Coverage

*   **CO1 (K2):** The understanding of NAND and NOR gates forms the basis for constructing complex combinational and sequential circuits, which are the building blocks of ASICs and SoCs. Their behavior and implementation in CMOS are fundamental to these design methodologies.
*   **CO3 (K3):** This entire topic directly addresses the design, analysis, and implicit creation of layouts for static CMOS logic circuits. The concepts of complementary networks, transistor sizing, and understanding signal flow are critical for adhering to design rules and specifications.

---

### 7. Practice Questions and Answers

**Question 1:**
What is the primary advantage of static CMOS logic over dynamic logic in terms of power consumption?
**Answer:** Static CMOS logic has very low **static** power consumption because there is no direct path between $V_{DD}$ and GND when the output is stable. Dynamic logic gates (like domino logic) have a short circuit path during the evaluation phase, leading to higher static power consumption.

**Question 2:**
Draw the CMOS circuit diagram for a two-input NAND gate. Label all transistors and nodes.

**Answer:**
*(Refer to the circuit diagram provided in Section 2.2)*

**Question 3:**
For a symmetric rise and fall time in a 2-input NOR gate, what is the typical W/L ratio relationship between PMOS and NMOS transistors if their minimum channel lengths are the same?
**Answer:** $(W/L)_{PMOS} = 4 \times (W/L)_{NMOS}$. This is because the pull-up network has two PMOS transistors in series (resistance adds), and the pull-down network has two NMOS transistors in parallel (conductance adds). To equalize the resistance of the pull-up path with the pull-down path, considering the lower hole mobility in PMOS and the series connection, the PMOS W/L ratio needs to be significantly larger.

**Question 4:**
Which gate is generally faster in CMOS technology: a 2-input NAND or a 2-input NOR? Briefly explain why.
**Answer:** The 2-input NAND gate is generally faster. This is because the critical path for switching speed in a NAND gate is the pull-down network (series NMOS), which offers lower resistance compared to the pull-up network (series PMOS) in a NOR gate due to the lower mobility of holes in PMOS transistors and the series connection.

**Question 5:**
What is the Boolean expression for a two-input CMOS NOR gate?
**Answer:** $Y = \overline{A + B}$.

---

### 8. Important Points to Remember

*   **Static CMOS:** Always has a defined output state, no glitches.
*   **Complementary Networks:** P-network (PMOS) for pull-up, N-network (NMOS) for pull-down.
*   **NAND:** P-network parallel, N-network series.
*   **NOR:** P-network series, N-network parallel.
*   **Transistor Sizing for Symmetry:**
    *   NAND: $(W/L)_{PMOS} = 4 \times (W/L)_{NMOS}$ (for series NMOS vs parallel PMOS).
    *   NOR: $(W/L)_{PMOS} = 4 \times (W/L)_{NMOS}$ (for series PMOS vs parallel NMOS).
*   **Speed:** NAND is generally faster than NOR due to electron mobility being higher than hole mobility and the nature of series/parallel connections.
*   **Area:** NOR gates often occupy more area than NAND gates due to larger PMOS transistors required for speed.
*   **Static Power:** Very low, consumed only during switching.

---

This concludes the study notes for Two-Input NAND and NOR gates in Static CMOS Logic Design. Remember to consult the provided textbooks for deeper insights and more detailed derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
