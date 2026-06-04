---
title: "Up/Down counters – asynchronous counters – mod-6 and mod-10 counters."
subject: "DIGITAL ELECTRONICS"
module: "Module 3: Flip"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e52"
status: "completed"
scrapedAt: "2026-05-23T16:15:53.599Z"
---
# Digital Electronics: Module 3 - Flip-Flops and Counters

## Topic: Up/Down Counters - Asynchronous Counters - Mod-6 and Mod-10 Counters

### Learning Outcomes Covered:

*   **Understand the operation of asynchronous counters.**
*   **Design and implement up/down counters.**
*   **Design and implement mod-6 counters.**
*   **Design and implement mod-10 counters (decade counters).**
*   **Apply fundamental counter design principles to practical scenarios.**

### Course Outcome Alignment:

*   **CO3: Design sequential logic circuits.** (This topic directly addresses the design and implementation of sequential logic circuits, specifically counters.)
*   **CO6: Design and realize hardware circuits. medium complexity practical digital** (Designing mod-6 and mod-10 counters involves understanding the state transitions and implementing the logic, which aligns with designing practical digital hardware circuits of medium complexity.)

---

## 1. Introduction to Counters

**Counters** are sequential logic circuits that generate a sequence of states in response to an input clock pulse. They are fundamental building blocks in digital systems for tasks like timing, frequency division, and sequence generation.

**Key Concept:** Counters count events or time intervals. The output of a counter represents the current count value.

---

## 2. Types of Counters

Counters can be broadly classified based on how their flip-flops are clocked:

### 2.1. Asynchronous Counters (Ripple Counters)

*   **Definition:** In asynchronous counters, the flip-flops are **not** connected to a common clock signal. Instead, the output of one flip-flop serves as the clock input for the next flip-flop.
*   **Operation:** The first flip-flop is clocked by the external clock. Subsequent flip-flops are triggered by the output transition of the preceding flip-flop. This cascading effect leads to a "ripple" of changes through the counter.
*   **Advantages:**
    *   Simpler to design and implement.
    *   Fewer external connections required.
*   **Disadvantages:**
    *   **Propagation Delay:** Since each flip-flop's clock depends on the previous one's output, there's a cumulative propagation delay. This limits the maximum operating frequency.
    *   **Glitches:** Can exhibit glitches in the output due to unequal propagation delays.
*   **Referenced in:**
    *   *Digital Fundamentals by Floyd T.L* (Chapter 9)
    *   *Digital Principles and Applications by Albert Paul Malvino & Donald P. Leach* (Chapter 12)

#### 2.1.1. Ripple Clocking

The clocking scheme where the output of one FF drives the clock input of the next FF is called ripple clocking.

#### 2.1.2. Modulus of a Counter

*   **Definition:** The modulus (or "modulus") of a counter is the total number of distinct states it can go through before repeating its sequence.
*   **For a binary counter using 'n' flip-flops:** The maximum modulus is $2^n$. For example, a 3-bit counter has a modulus of $2^3 = 8$.

---

## 3. Up/Down Counters

**Up/Down Counters** are a type of counter that can count in either increasing (up) or decreasing (down) order, depending on a control input.

### 3.1. Operation

*   An **Up Counter** increments its count with each clock pulse.
*   A **Down Counter** decrements its count with each clock pulse.
*   An **Up/Down Counter** uses a control signal (often labeled `UP/DOWN` or `COUNT CONTROL`) to select the counting direction.

### 3.2. Asynchronous Up/Down Counter Design

To create an asynchronous up/down counter, we utilize JK flip-flops or T flip-flops.

*   **Using JK Flip-Flops:**
    *   For an **up-counting** ripple counter, the J and K inputs of each flip-flop (except the first) are connected to the output of the previous flip-flop's Q.
    *   For a **down-counting** ripple counter, the J and K inputs of each flip-flop (except the first) are connected to the output of the previous flip-flop's $\bar{Q}$.
    *   To combine these for an up/down counter, we use the control signal to select between these two conditions.

**Example: 2-bit Asynchronous Up/Down Counter using JK Flip-Flops**

Let's denote the flip-flops as FF0 (LSB) and FF1 (MSB). The control input is `UP`.

*   **FF0:** The clock input for FF0 is the external clock. For up-counting, J=K=1. For down-counting, J=K=1. So, FF0 toggles with every clock pulse, regardless of the UP/DOWN control.
*   **FF1:**
    *   When `UP` = 1 (Up Count): FF1 should toggle when FF0's Q output goes from 1 to 0 (falling edge). So, connect J1=K1=Q0.
    *   When `UP` = 0 (Down Count): FF1 should toggle when FF0's $\bar{Q}$ output goes from 1 to 0 (falling edge). So, connect J1=K1=$\bar{Q0}$.

We can implement this logic using AND gates:

*   **J1 = K1 = Q0 AND UP** (for counting up) **OR $\bar{Q0}$ AND $\overline{UP}$** (for counting down)

This can be simplified using the XOR gate. The truth table for the input to J and K of FF1 (for toggling) is:

| UP  | Q0  | Desired Toggle | J1/K1 Input |
| :-- | :-- | :------------- | :---------- |
| 1   | 0   | No             | 0           |
| 1   | 1   | Yes            | 1           |
| 0   | 0   | Yes            | 1           |
| 0   | 1   | No             | 0           |

This truth table matches the behavior of an **XOR gate** where J1/K1 = Q0 $\oplus$ UP.

*   **FF0:** Clock input is the external clock. J0 = K0 = 1.
*   **FF1:** Clock input is Q0. J1 = K1 = Q0 $\oplus$ UP.

**Referenced in:**
*   *Digital Design: With an Introduction to the Verilog HDL, VHDL, and System Verilog by M. Morris Mano, Michael D. Ciletti* (Chapter 6)

---

## 4. Mod-6 Counters

A **Mod-6 counter** is a counter that cycles through 6 distinct states. Since $2^2 = 4$ and $2^3 = 8$, we need at least 3 flip-flops to achieve a modulus greater than 4. A mod-6 counter will use 3 flip-flops, but it will not utilize all $2^3=8$ states.

### 4.1. Design Approach for Modulo-N Counters (where N < $2^n$)

To design a counter with a modulus less than $2^n$ (where n is the number of flip-flops), we need to introduce a mechanism to reset the counter after it reaches the desired count. This is typically done using feedback from the outputs of the flip-flops to a **clear** or **preset** input of one or more flip-flops.

### 4.2. Asynchronous Mod-6 Counter Design (using 3 Flip-Flops)

Let's design an asynchronous **up-counting mod-6 counter** that counts $000 \rightarrow 001 \rightarrow 010 \rightarrow 011 \rightarrow 100 \rightarrow 101 \rightarrow 000$.

*   We need 3 flip-flops (Q2, Q1, Q0), where Q2 is the MSB and Q0 is the LSB.
*   The counter should count from 0 (000) up to 5 (101).
*   When the count reaches 6 (110), the counter should be reset to 0 (000).

**Steps:**

1.  **Determine the number of flip-flops:** For a mod-6 counter, we need at least 3 flip-flops ($2^2=4 < 6$, $2^3=8 \ge 6$).
2.  **Draw the basic asynchronous counter:** Connect the flip-flops such that the output of Q0 clocks FF1, and the output of Q1 clocks FF2. Use T flip-flops (or JK flip-flops with J=K=1).

    *   FF0 (LSB): T0=1, Clock = External Clock
    *   FF1: T1=1, Clock = Q0
    *   FF2: T1=1, Clock = Q1

3.  **Identify the reset condition:** The counter should reset when it reaches the state corresponding to decimal 6, which is binary 110 (Q2=1, Q1=1, Q0=0).
4.  **Implement the reset logic:** We need to detect the state 110 and force all flip-flops to 0. This can be done by using the `CLEAR` input of the flip-flops. The `CLEAR` input is typically active-low (meaning it resets the flip-flop when it's logic 0).

    *   The condition for reset is Q2=1, Q1=1, and Q0=0.
    *   We can use a logic gate (AND gate) to detect this condition: `Reset_Condition = Q2 AND Q1 AND NOT Q0`.
    *   This `Reset_Condition` signal should be fed to the `CLEAR` inputs of all flip-flops. Since `CLEAR` is usually active-low, we need to invert the `Reset_Condition` signal: `Clear_Input = NOT (Q2 AND Q1 AND NOT Q0)`.

**Circuit Diagram:**

*   FF0: J0=K0=1 (or T0=1), Clock = External Clock. $\overline{CLR0}$ connected to `Clear_Input`.
*   FF1: J1=K1=1 (or T1=1), Clock = Q0. $\overline{CLR1}$ connected to `Clear_Input`.
*   FF2: J2=K2=1 (or T2=1), Clock = Q1. $\overline{CLR2}$ connected to `Clear_Input`.
*   `Clear_Input` logic: An AND gate with inputs Q2, Q1, and $\overline{Q0}$. The output of this AND gate is connected to $\overline{CLR0}$, $\overline{CLR1}$, and $\overline{CLR2}$.

**State Sequence:**

| Clock | Q2 | Q1 | Q0 | Count | Next State Logic (Q2Q1Q0) | $\overline{Q0}$ | Q1 AND $\overline{Q0}$ | Q2 AND (Q1 AND $\overline{Q0}$) | Reset Trigger |
| :---- | :--- | :--- | :--- | :------ | :------------------------ | :------------ | :-------------------- | :---------------------------- | :------------ |
| Start | 0   | 0   | 0   | 0       |                           | 1             | 0                     | 0                             | No            |
| 1     | 0   | 0   | 1   | 1       |                           | 1             | 0                     | 0                             | No            |
| 2     | 0   | 1   | 0   | 2       |                           | 0             | 0                     | 0                             | No            |
| 3     | 0   | 1   | 1   | 3       |                           | 0             | 0                     | 0                             | No            |
| 4     | 1   | 0   | 0   | 4       |                           | 1             | 0                     | 0                             | No            |
| 5     | 1   | 0   | 1   | 5       |                           | 1             | 0                     | 0                             | No            |
| 6     | 1   | 1   | 0   | 6       | Reset to 000              | 0             | 0                     | 0                             | **YES**       |
| 7     | 0   | 0   | 0   | 0       | (After Reset)             | 1             | 0                     | 0                             | No            |

**Important Note on Resetting:** When the counter reaches the state 110, the output of the AND gate becomes 0, triggering the active-low `CLEAR` inputs of all flip-flops, forcing them to their reset state (0). This happens before the next clock edge that would transition the counter to state 110.

**Referenced in:**
*   *Digital Fundamentals by Floyd T.L* (Chapter 9 - Designing Counters for Any Number of States)
*   *Digital Integrated Electronics by Herbert Taub and Donald Schilling* (Chapter 15)

---

## 5. Mod-10 Counters (Decade Counters)

A **Mod-10 counter** is a counter that cycles through 10 distinct states. These are commonly known as **decade counters**. The most common decade counter counts from 0000 to 1001 (0 to 9).

*   We need at least 4 flip-flops, as $2^3 = 8 < 10$ and $2^4 = 16 \ge 10$.

### 5.1. Asynchronous Mod-10 Counter Design (using 4 Flip-Flops)

Let's design an asynchronous **up-counting mod-10 counter** that counts from 0 (0000) to 9 (1001).

*   We need 4 flip-flops (Q3, Q2, Q1, Q0), where Q3 is the MSB and Q0 is the LSB.
*   The counter should count from 0 (0000) up to 9 (1001).
*   When the count reaches 10 (1010), the counter should be reset to 0 (0000).

**Steps:**

1.  **Determine the number of flip-flops:** For a mod-10 counter, we need 4 flip-flops.
2.  **Draw the basic asynchronous counter:** Connect the flip-flops such that Q0 clocks FF1, Q1 clocks FF2, and Q2 clocks FF3. Use T flip-flops (or JK flip-flops with J=K=1).

    *   FF0 (LSB): T0=1, Clock = External Clock
    *   FF1: T1=1, Clock = Q0
    *   FF2: T2=1, Clock = Q1
    *   FF3: T3=1, Clock = Q2

3.  **Identify the reset condition:** The counter should reset when it reaches the state corresponding to decimal 10, which is binary 1010 (Q3=1, Q2=0, Q1=1, Q0=0).
4.  **Implement the reset logic:** Detect the state 1010 and reset all flip-flops to 0.

    *   The condition for reset is Q3=1, Q2=0, Q1=1, and Q0=0.
    *   Use an AND gate: `Reset_Condition = Q3 AND NOT Q2 AND Q1 AND NOT Q0`.
    *   Feed this to the active-low `CLEAR` inputs: `Clear_Input = NOT (Q3 AND NOT Q2 AND Q1 AND NOT Q0)`.

**Circuit Diagram:**

*   FF0: J0=K0=1, Clock = External Clock. $\overline{CLR0}$ connected to `Clear_Input`.
*   FF1: J1=K1=1, Clock = Q0. $\overline{CLR1}$ connected to `Clear_Input`.
*   FF2: J2=K2=1, Clock = Q1. $\overline{CLR2}$ connected to `Clear_Input`.
*   FF3: J3=K3=1, Clock = Q2. $\overline{CLR3}$ connected to `Clear_Input`.
*   `Clear_Input` logic: An AND gate with inputs Q3, $\overline{Q2}$, Q1, and $\overline{Q0}$. The output of this AND gate is connected to $\overline{CLR0}$, $\overline{CLR1}$, $\overline{CLR2}$, and $\overline{CLR3}$.

**State Sequence (Partial):**

| Clock | Q3 | Q2 | Q1 | Q0 | Count | Next State Logic (Q3Q2Q1Q0) | $\overline{Q2}$ | Q1 | $\overline{Q0}$ | Q3 AND $\overline{Q2}$ AND Q1 AND $\overline{Q0}$ | Reset Trigger |
| :---- | :--- | :--- | :--- | :--- | :------ | :------------------------ | :---- | :-- | :---- | :--------------------------------------------- | :------------ |
| ...   | ...  | ...  | ...  | ...  | ...     |                           | ...   | ... | ...   | ...                                            | ...           |
| 9     | 1   | 0   | 0   | 1   | 9       |                           | 1     | 0   | 0     | 0                                              | No            |
| 10    | 1   | 0   | 1   | 0   | 10      | Reset to 0000             | 1     | 1   | 1     | 1                                              | **YES**       |
| 11    | 0   | 0   | 0   | 0   | 0       | (After Reset)             | 1     | 0   | 1     | 0                                              | No            |

**Alternative Mod-10 Counter (IC 74LS90):**

Many integrated circuits (ICs) are available that implement common counter functions. The 74LS90 is a BCD (Binary Coded Decimal) counter that naturally divides by 10. It's constructed internally using a divide-by-2 flip-flop and a divide-by-5 counter. It often requires external connections to connect the outputs appropriately to achieve the modulo-10 count.

**Referenced in:**
*   *Digital Fundamentals by Floyd T.L* (Chapter 9 - Designing Counters for Any Number of States)
*   *Digital Principles and Applications by Albert Paul Malvino & Donald P. Leach* (Chapter 12 - Decade Counters)

---

## 6. Important Points to Remember

*   **Asynchronous counters** rely on the output of previous flip-flops to clock subsequent ones, leading to ripple delays.
*   The **modulus** of a counter is the number of unique states it cycles through.
*   To design a **modulo-N counter** with N $< 2^n$, you need 'n' flip-flops and a reset mechanism to detect the Nth state and return to the initial state.
*   **Up/Down counters** require a control input to switch between counting directions, often implemented using XOR gates for the JK/T inputs.
*   **Mod-6 counters** typically use 3 flip-flops and require reset logic for the 6th state.
*   **Mod-10 (decade) counters** typically use 4 flip-flops and require reset logic for the 10th state (usually 1010 for an up-counter).
*   The choice of flip-flop (JK, D, T) and the specific clocking edge (rising or falling) are critical for correct counter operation. Asynchronous counters usually use flip-flops that trigger on the opposite edge of the output of the previous flip-flop. For example, if Q is falling edge triggered, it clocks the next FF.

---

## 7. Practice Questions and Exercises

**Question 1:**
What is the primary characteristic that distinguishes an asynchronous counter from a synchronous counter?
*   **(A)** The clock signal is applied to all flip-flops simultaneously in an asynchronous counter.
*   **(B)** The output of one flip-flop serves as the clock input for the next flip-flop in an asynchronous counter.
*   **(C)** Asynchronous counters are faster than synchronous counters.
*   **(D)** Asynchronous counters always have a modulus of $2^n$.

**Answer:** (B)

**Question 2:**
A 3-bit ripple counter made of JK flip-flops (all J=K=1) is triggered by the negative-going edge of the clock. If the initial state is 000, what will be the output sequence (Q2Q1Q0) after 5 clock pulses?
*   **(A)** 000, 001, 010, 011, 100, 101
*   **(B)** 000, 100, 010, 110, 000, 100
*   **(C)** 000, 001, 010, 011, 100, 101
*   **(D)** 000, 111, 110, 101, 100, 011

**Answer:** (C)
*Explanation: With negative-going edge triggered flip-flops, the count sequence will be: 000 -> 001 -> 010 -> 011 -> 100 -> 101. After 5 pulses, it will be in the state 101.*

**Question 3:**
Design an asynchronous up/down counter that counts from 00 to 11 (mod-4) and has a control input `UP`. When `UP` is high, it counts up. When `UP` is low, it counts down. Use JK flip-flops.
**Answer:**
*   FF0 (LSB): Clock = External Clock, J0=K0=1.
*   FF1 (MSB): Clock = Q0. J1=K1 = Q0 $\oplus$ UP.

**Question 4:**
Draw the logic diagram for a 3-bit asynchronous mod-6 counter that counts from 000 to 101. Assume negative-edge triggered JK flip-flops with active-low asynchronous clear inputs.
**Answer:** (Refer to Section 4.2 for the circuit diagram description.) The reset condition is detected when Q2=1, Q1=1, and $\overline{Q0}=1$. This signal should be ANDed and fed to the $\overline{CLR}$ inputs of all three flip-flops.

**Question 5:**
What is the modulus of a counter made of 5 JK flip-flops, if it's designed to reset after reaching the count of 20?
*   **(A)** 20
*   **(B)** 25
*   **(C)** 32
*   **(D)** 10

**Answer:** (A)
*Explanation: The modulus of a counter is defined as the number of states it cycles through. If it resets after reaching 20, it will cycle through 20 states (0 to 19).*

---
