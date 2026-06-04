---
title: "Sequential Circuits: SR Latch, Flip flops - SR, JK, Master-Slave JK, D and T Flip flops. Conversion of Flip flops, Excitation table and characteristic equation. Shift registers-SIPO, SISO, PISO, PIPO and Universal shift registers. Ring and Johnsons counters. Design of Asynchronous, Synchronous and Mod N counters."
subject: "LOGIC CIRCUIT DESIGN"
module: "Module 3: Sequential Circuits: SR Latch, Flip flops "
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe325"
status: "completed"
scrapedAt: "2026-05-23T17:46:12.285Z"
---
# Module 3: Sequential Circuits: SR Latch, Flip-Flops, Shift Registers, and Counters

This module delves into the fundamental building blocks of sequential logic circuits: latches and flip-flops. We will explore their operation, different types, how they can be converted, and their associated design parameters. Subsequently, we will investigate shift registers and counters, crucial components for data manipulation and sequence generation, and their design methodologies.

**Target Audience:** Students of Logic Circuit Design.

**Prerequisites:** Basic understanding of Boolean algebra, combinational logic circuits, logic gates, and number systems.

**Learning Outcomes:** Upon successful completion of this module, you will be able to:

*   Understand the basic operation of SR latches and various types of flip-flops (SR, JK, Master-Slave JK, D, T).
*   Analyze the behavior of sequential circuits using characteristic equations and excitation tables.
*   Convert between different types of flip-flops.
*   Design and implement various types of shift registers (SIPO, SISO, PISO, PIPO, Universal).
*   Design and implement ring and Johnson counters.
*   Design and implement asynchronous, synchronous, and mod-N counters.

**Course Outcomes Alignment:**

*   **CO1 (K3):** Understanding the operation of flip-flops, shift registers, and counters requires applying knowledge of Boolean algebra and digital representation.
*   **CO2 (K5):** Designing and implementing these circuits directly aligns with designing sequential logic circuits and finite state machines.
*   **CO3 (K5):** While not explicitly covered in this module's description, the design principles learned here are foundational for implementing sequential circuits on FPGAs using HDLs.
*   **CO4 (K2):** Understanding the timing characteristics of flip-flops (setup, hold times) is a precursor to outlining performance parameters.

---

## 1. Sequential Circuits: The Foundation

Sequential circuits are digital circuits whose output depends not only on the current input but also on the past sequence of inputs. This "memory" element is what distinguishes them from combinational circuits.

### 1.1 Basic Concepts

*   **State:** The stored information in a sequential circuit at any given time.
*   **Memory Elements:** Components that store the state of the circuit. These are typically latches and flip-flops.
*   **Clock Signal:** A periodic signal that synchronizes the state transitions in many sequential circuits, especially synchronous ones.
*   **Synchronous vs. Asynchronous:**
    *   **Synchronous:** All memory elements change state simultaneously in response to a clock signal.
    *   **Asynchronous:** Memory elements can change state at any time, independent of a clock signal, based on input changes.

**Textbook Reference:** Floyd, Chapter 6 (Introduction to Sequential Logic), Chapter 7 (Flip-Flops and Related Devices).

---

## 2. Latches

Latches are the simplest form of memory elements. They are level-sensitive, meaning they change their output state whenever the enabling input is active (high or low, depending on the type) and the data inputs change.

### 2.1 SR Latch (Set-Reset Latch)

The SR latch is a fundamental asynchronous sequential circuit with two inputs, S (Set) and R (Reset), and two outputs, Q and its complement $\overline{Q}$.

*   **Operation:**
    *   **S=1, R=0:** Q becomes 1, $\overline{Q}$ becomes 0 (Set state).
    *   **S=0, R=1:** Q becomes 0, $\overline{Q}$ becomes 1 (Reset state).
    *   **S=0, R=0:** Q and $\overline{Q}$ retain their previous state (Hold state).
    *   **S=1, R=1:** Forbidden or indeterminate state. Both Q and $\overline{Q}$ try to go to 0, leading to an unstable condition.

*   **Circuit Diagram (NOR-based):**

    ```
      S ----| NOR |------- Q
            |     |
      R ----| NOR |------- Q_bar
            -----
              ^     ^
              |-----|
    ```

    *   The outputs of each NOR gate are connected to the other's input.

*   **Truth Table:**

    | S | R | Q   | $\overline{Q}$ | Operation |
    |---|---|-----|-------|-----------|
    | 0 | 0 | $Q_{prev}$ | $\overline{Q}_{prev}$ | Hold      |
    | 0 | 1 | 0   | 1     | Reset     |
    | 1 | 0 | 1   | 0     | Set       |
    | 1 | 1 | 0   | 0     | Forbidden |

*   **Gated SR Latch:** An SR latch with an Enable (E) input. The latch only operates when E is active.

    ```
      S ----| NOR |------- Q
            |     |       ^
      E ----| NOR |-------|
            -----       |
              ^     ^     |
              |-----|-----|
              R
    ```

**Important Point:** The SR latch is asynchronous and can suffer from the forbidden state.

**Textbook Reference:** Floyd, Chapter 7.1.

---

## 3. Flip-Flops

Flip-flops are edge-sensitive memory elements. They change their state only at a specific edge (rising or falling) of a clock pulse. This clock synchronization is crucial for designing stable and predictable sequential circuits.

### 3.1 SR Flip-Flop

An SR flip-flop is essentially a gated SR latch that is triggered by a clock pulse.

*   **Operation:** Similar to the gated SR latch, but transitions occur at the active clock edge.
*   **Circuit Diagram:** Can be implemented using NAND or NOR gates, with clock input controlling the enable function.

**Textbook Reference:** Floyd, Chapter 7.2.

### 3.2 JK Flip-Flop

The JK flip-flop is a more versatile flip-flop. It overcomes the forbidden state of the SR latch.

*   **Inputs:** J (Set), K (Reset), Clock (CLK).
*   **Operation:**
    *   **J=0, K=0:** Hold state (Q retains previous value).
    *   **J=0, K=1:** Reset state (Q becomes 0 at the active clock edge).
    *   **J=1, K=0:** Set state (Q becomes 1 at the active clock edge).
    *   **J=1, K=1:** Toggle state (Q complements its previous value at the active clock edge).

*   **Characteristic Equation:** $Q_{next} = J \overline{Q} + \overline{K} Q$
    *   This equation describes the next state of the flip-flop based on current state (Q) and inputs (J, K).

*   **Excitation Table:** Shows the required inputs (J, K) to transition from a current state ($Q$) to a desired next state ($Q_{next}$).

    | Q   | $Q_{next}$ | J | K |
    |-----|------------|---|---|
    | 0   | 0          | 0 | X |
    | 0   | 1          | 1 | X |
    | 1   | 0          | X | 1 |
    | 1   | 1          | X | 0 |
    *   'X' denotes "don't care".

*   **Circuit Diagram (Example using SR latches):** Can be constructed from SR latches by adding logic gates to generate the J and K inputs based on the SR flip-flop behavior, particularly the toggle condition.

**Textbook Reference:** Floyd, Chapter 7.3. Brown, Chapter 3.2.

### 3.3 Master-Slave JK Flip-Flop

This is a modification of the JK flip-flop designed to prevent race-around conditions. It consists of two JK flip-flops: a master and a slave.

*   **Operation:**
    1.  The master flip-flop receives the J and K inputs and is sensitive to the first half of the clock pulse (e.g., rising edge). It captures the input state.
    2.  When the clock pulse goes to the opposite level (e.g., falling edge), the master's output is transferred to the slave flip-flop, and the slave's output changes accordingly. The master is then disabled.
*   **Advantage:** Prevents the output from changing more than once during a single clock pulse, especially in the toggle state (J=1, K=1).

**Textbook Reference:** Floyd, Chapter 7.3.

### 3.4 D Flip-Flop (Data or Delay Flip-Flop)

The D flip-flop is used for data storage. It has a single data input (D) and a clock input.

*   **Operation:** The output Q takes the value of the D input at the active clock edge. Effectively, it delays the D input by one clock cycle.
*   **Characteristic Equation:** $Q_{next} = D$

*   **Excitation Table:**

    | Q   | $Q_{next}$ | D |
    |-----|------------|---|
    | 0   | 0          | 0 |
    | 0   | 1          | 1 |
    | 1   | 0          | 0 |
    | 1   | 1          | 1 |

*   **Implementation:** Can be easily implemented from a JK flip-flop by connecting J to D and K to $\overline{D}$.

**Textbook Reference:** Floyd, Chapter 7.4. Brown, Chapter 3.2.

### 3.5 T Flip-Flop (Toggle Flip-Flop)

The T flip-flop changes its state (toggles) when the T input is high and the clock edge occurs. When T is low, it holds its state.

*   **Operation:**
    *   **T=0:** Hold state.
    *   **T=1:** Toggle state (Q complements its previous value).
*   **Characteristic Equation:** $Q_{next} = T \oplus Q$ (where $\oplus$ is XOR)

*   **Excitation Table:**

    | Q   | $Q_{next}$ | T |
    |-----|------------|---|
    | 0   | 0          | 0 |
    | 0   | 1          | 1 |
    | 1   | 0          | 1 |
    | 1   | 1          | 0 |

*   **Implementation:** Can be implemented from a JK flip-flop by connecting J and K to T. Or from a D flip-flop by connecting D to $T \oplus Q$.

**Textbook Reference:** Floyd, Chapter 7.5.

---

## 4. Flip-Flop Conversion

It's often necessary to convert one type of flip-flop to another. This involves using the characteristic equation of the target flip-flop and the excitation table of the source flip-flop to derive the logic for the inputs of the source flip-flop.

**Procedure:**

1.  **Determine the characteristic equation of the *target* flip-flop.** This defines the relationship between the next state and the current state and the target flip-flop's inputs.
2.  **Create the excitation table for the *source* flip-flop.** This table shows the required inputs for the source flip-flop to achieve a given state transition.
3.  **Combine the two:** Use the target flip-flop's characteristic equation to determine the desired next state ($Q_{next}$) based on the current state ($Q$) and the *original* inputs to the target flip-flop.
4.  **Derive the source flip-flop's inputs:** Use the source flip-flop's excitation table, substituting the desired $Q_{next}$ values derived in step 3. This will give you the logic for the source flip-flop's inputs in terms of the original inputs and the current state.

**Example: Convert a JK Flip-Flop to a D Flip-Flop**

*   **Target:** D Flip-Flop. Characteristic Equation: $Q_{next} = D$.
*   **Source:** JK Flip-Flop. Excitation Table as above.

Let the input to the desired D flip-flop be $D_{in}$. We want the JK flip-flop's next state to be $Q_{next} = D_{in}$.

| Q   | $D_{in}$ (Desired $Q_{next}$) | Required J | Required K |
|-----|-----------------------------|------------|------------|
| 0   | $D_{in}$                    | $D_{in}$   | X          |
| 1   | $D_{in}$                    | X          | $\overline{D_{in}}$ |

Now, we need to express J and K in terms of $D_{in}$ and Q:

*   **For J:** J = $D_{in}$ when Q=0, J is X when Q=1. Using K-map or Boolean algebra: $J = D_{in} \overline{Q}$
*   **For K:** K = $\overline{D_{in}}$ when Q=1, K is X when Q=0. Using K-map or Boolean algebra: $K = \overline{D_{in}} Q$

**Circuit:** Connect J input of JK flip-flop to $D_{in} \overline{Q}$ and K input to $\overline{D_{in}} Q$.

**Textbook Reference:** Floyd, Chapter 7.6.

---

## 5. Shift Registers

Shift registers are sequential circuits that shift the data stored in them from one flip-flop to another upon the application of a clock pulse. They are used for serial-to-parallel conversion, parallel-to-serial conversion, and data manipulation.

### 5.1 Types of Shift Registers

Shift registers are classified based on how data enters and leaves them.

*   **SISO (Serial-In, Serial-Out):** Data enters serially (one bit at a time) and leaves serially.
    *   **Structure:** A chain of flip-flops where the output of each flip-flop is connected to the input of the next. The serial input goes to the first flip-flop, and the serial output is taken from the last flip-flop.
    *   **Operation:** Each clock pulse shifts the data one position to the right (or left).

    ```
    Serial In --> FF1 --> FF2 --> FF3 --> ... --> FFn --> Serial Out
                  ^       ^       ^               ^
                  |       |       |               |
                 CLK     CLK     CLK             CLK
    ```

*   **SIPO (Serial-In, Parallel-Out):** Data enters serially and can be read out in parallel from all flip-flops simultaneously.
    *   **Structure:** Similar to SISO, but all flip-flop outputs are available as parallel outputs.
    *   **Operation:** After N clock pulses, N bits of serial data are stored in the N flip-flops and can be read out in parallel.

    ```
    Serial In --> FF1 --> FF2 --> FF3 --> ... --> FFn
                  |       |       |               |
                  v       v       v               v
                 Q1      Q2      Q3              Qn
                  ^       ^       ^               ^
                  |       |       |               |
                 CLK     CLK     CLK             CLK
    ```

*   **PISO (Parallel-In, Serial-Out):** Data enters in parallel and is shifted out serially.
    *   **Structure:** Requires control signals (e.g., Shift/Load) to select between parallel loading and serial shifting.
    *   **Operation:** Data is loaded into all flip-flops simultaneously (when in Load mode). Then, in Shift mode, data is shifted serially out from the last flip-flop.

*   **PIPO (Parallel-In, Parallel-Out):** Data enters in parallel and is also read out in parallel.
    *   **Structure:** A chain of flip-flops where data can be loaded in parallel. All flip-flop outputs are available as parallel outputs.
    *   **Operation:** Data is loaded into all flip-flops simultaneously. The clock pulse then shifts the data to the next flip-flop. This is useful for creating parallel delay lines.

*   **Universal Shift Registers:** These can perform all the above operations (SISO, SIPO, PISO, PIPO) and potentially bidirectional shifting. They have additional control inputs to select the mode of operation.
    *   **Example:** A 4-bit universal shift register might have:
        *   Serial Data Input (SER_IN)
        *   Parallel Data Inputs ($D_0, D_1, D_2, D_3$)
        *   Mode Control Inputs (e.g., S1, S0)
        *   Parallel Outputs ($Q_0, Q_1, Q_2, Q_3$)
        *   Serial Output (SER_OUT)

**Textbook Reference:** Floyd, Chapter 7.7. Brown, Chapter 3.4.

---

## 6. Counters

Counters are sequential circuits that count a sequence of events. They are essential for timing, frequency division, and sequence generation.

### 6.1 Asynchronous Counters (Ripple Counters)

In asynchronous counters, flip-flops are not all triggered by the same clock signal. The output of one flip-flop serves as the clock input for the next.

*   **Operation:** The first flip-flop toggles on each clock pulse. The subsequent flip-flops toggle when the output of the preceding flip-flop changes from 1 to 0 (or 0 to 1, depending on the design). This cascading effect causes a ripple of changes through the counter.
*   **Types:**
    *   **Up Counter:** Counts in increasing order (0, 1, 2, 3, ...).
    *   **Down Counter:** Counts in decreasing order (..., 3, 2, 1, 0).
*   **Implementation:** Typically uses JK flip-flops (with J=K=1 to achieve toggle) or T flip-flops (with T=1).
*   **Drawback:** Propagation delay. The ripple effect can cause glitches and limit the maximum operating frequency. The time for the counter to settle is proportional to the number of flip-flops.

**Example: 3-bit Asynchronous Up Counter**

Using T flip-flops (or JK flip-flops with J=K=1):

```
         CLK --> T1 ----- Q1
                 |      ^
                 |      |
                 +------T2 ----- Q2
                        |      ^
                        |      |
                        +------T3 ----- Q3
```

*   **Count Sequence:** 000, 001, 010, 011, 100, 101, 110, 111, 000, ... (for Q3, Q2, Q1 order)

**Textbook Reference:** Floyd, Chapter 8.2. Brown, Chapter 4.1.

### 6.2 Synchronous Counters

In synchronous counters, all flip-flops are triggered by the same clock signal. Control logic determines when each flip-flop should toggle.

*   **Operation:** All flip-flops change state simultaneously at the active clock edge.
*   **Advantages:** No ripple delay, faster operation.
*   **Design:** Requires Karnaugh maps (K-maps) or state tables to determine the logic for the flip-flop inputs (J, K, or D).

**Example: 3-bit Synchronous Up Counter**

We need to determine the J and K inputs for each flip-flop to achieve the sequence 000 to 111.

Let the counter state be represented by $Q_2 Q_1 Q_0$.
We'll use JK flip-flops.

| Current State ($Q_2 Q_1 Q_0$) | Next State ($Q_2 Q_1 Q_0$) | $J_0$ | $K_0$ | $J_1$ | $K_1$ | $J_2$ | $K_2$ |
|-------------------------------|----------------------------|-------|-------|-------|-------|-------|-------|
| 000                           | 001                        | 1     | X     | 0     | X     | 0     | X     |
| 001                           | 010                        | X     | 1     | 1     | X     | 0     | X     |
| 010                           | 011                        | 1     | X     | 0     | X     | 0     | X     |
| 011                           | 100                        | X     | 1     | 1     | X     | 1     | X     |
| 100                           | 101                        | 1     | X     | 0     | X     | 0     | X     |
| 101                           | 110                        | X     | 1     | 1     | X     | 0     | X     |
| 110                           | 111                        | 1     | X     | 0     | X     | 0     | X     |
| 111                           | 000                        | X     | 1     | X     | 1     | 1     | X     |

Now, create K-maps for $J_0, K_0, J_1, K_1, J_2, K_2$ based on the current state variables ($Q_2, Q_1, Q_0$).

*   **$J_0$:** $J_0=1$ when $Q_0$ is 0 and the counter increments. This is always true for an up counter for $Q_0$. So, $J_0 = 1$.
*   **$K_0$:** $K_0=1$ when $Q_0$ is 1 and the counter increments. This is always true for an up counter for $Q_0$. So, $K_0 = 1$.
    *   This implies $Q_0$ toggles on every clock pulse.
*   **$J_1$:** $J_1=1$ when $Q_1$ is 0 and the counter increments. This happens when $Q_0=1$. So, $J_1 = Q_0$.
*   **$K_1$:** $K_1=1$ when $Q_1$ is 1 and the counter increments. This happens when $Q_0=1$. So, $K_1 = Q_0$.
*   **$J_2$:** $J_2=1$ when $Q_2$ is 0 and the counter increments. This happens when $Q_1=1$ AND $Q_0=1$. So, $J_2 = Q_1 Q_0$.
*   **$K_2$:** $K_2=1$ when $Q_2$ is 1 and the counter increments. This happens when $Q_1=1$ AND $Q_0=1$. So, $K_2 = Q_1 Q_0$.

**Circuit Logic:**
*   $J_0 = K_0 = 1$
*   $J_1 = K_1 = Q_0$
*   $J_2 = K_2 = Q_1 Q_0$

Connect the flip-flop inputs according to these derived expressions.

**Textbook Reference:** Floyd, Chapter 8.3. Brown, Chapter 4.2.

### 6.3 Modulo-N Counters (Mod-N Counters)

A Modulo-N counter counts through a sequence of N distinct states before repeating.

*   **Operation:** To design a Mod-N counter, we need to introduce a mechanism to reset or clear the counter after it reaches the Nth state. This is typically done by detecting the Nth state and using that detection signal to reset the flip-flops or force them into the initial state (usually 000...).
*   **Design Steps:**
    1.  **Determine the number of flip-flops required:** For N states, you need $m$ flip-flops such that $2^m \geq N$.
    2.  **List the states:** Write down the sequence of N states the counter should go through.
    3.  **Design a synchronous counter:** Determine the next state logic for each flip-flop.
    4.  **Detect the terminal state:** Implement logic to detect the state just before the counter should reset (i.e., the Nth state in the sequence).
    5.  **Implement the reset mechanism:** Use the detected terminal state to reset the counter. This can be done by forcing the flip-flop preset or clear inputs.

**Example: Mod-5 Counter (000 to 100)**

We need 3 flip-flops ($2^2 < 5 \leq 2^3$).
States: 000, 001, 010, 011, 100.

Let's use JK flip-flops.

| Current State ($Q_2 Q_1 Q_0$) | Next State ($Q_2 Q_1 Q_0$) | $J_0$ | $K_0$ | $J_1$ | $K_1$ | $J_2$ | $K_2$ |
|-------------------------------|----------------------------|-------|-------|-------|-------|-------|-------|
| 000                           | 001                        | 1     | X     | 0     | X     | 0     | X     |
| 001                           | 010                        | X     | 1     | 1     | X     | 0     | X     |
| 010                           | 011                        | 1     | X     | 0     | X     | 0     | X     |
| 011                           | 100                        | X     | 1     | 1     | X     | 1     | X     |
| 100                           | 000 (Reset)                | X     | 1     | X     | 0     | X     | 1     |

Now, derive logic for inputs. Note that when the state is 100, we want the next state to be 000.

*   $J_0$: $1$ for states 000, 010. X for 100. So $J_0 = \overline{Q_2} \overline{Q_1} \overline{Q_0} + \overline{Q_2} Q_1 \overline{Q_0}$. This simplifies to $J_0 = \overline{Q_2} \overline{Q_0}$.
*   $K_0$: $1$ for states 001, 011, 100. X for others. So $K_0 = \overline{Q_2} \overline{Q_1} Q_0 + \overline{Q_2} Q_1 Q_0 + Q_2 \overline{Q_1} \overline{Q_0}$. This simplifies to $K_0 = \overline{Q_2} Q_0 + Q_2 \overline{Q_1} \overline{Q_0}$.

Similarly, derive logic for $J_1, K_1, J_2, K_2$.

**Alternative for Reset:** A simpler approach for Mod-N is to detect the Nth state (e.g., 100 for Mod-5) and use a NAND gate with the appropriate flip-flop outputs. If the Nth state is detected, this NAND gate output can be used to reset all flip-flops simultaneously. For a Mod-5 counter, we detect 100. The NAND gate inputs would be $Q_2, \overline{Q_1}, \overline{Q_0}$. If the state is 100, the output of the NAND gate is 0. If this output is connected to the CLEAR inputs of all flip-flops, they will reset to 000.

**Textbook Reference:** Floyd, Chapter 8.4. Brown, Chapter 4.3.

---

## 7. Ring and Johnson Counters

These are special types of shift registers configured as counters.

### 7.1 Ring Counter

A ring counter is created by connecting the output of the last flip-flop in a shift register back to the input of the first flip-flop, and initializing with a single '1' bit in the register.

*   **Structure:** A shift register where $Q_n$ is fed back to the serial input of the first flip-flop.
*   **Operation:** The single '1' bit circulates around the register, causing one flip-flop to be in the '1' state at a time.
*   **Number of States:** An N-flip-flop ring counter has N states.
*   **Example (4-bit):** Shift register $FF_3, FF_2, FF_1, FF_0$. $Q_0$ is connected to the input of $FF_3$.
    *   Initial state: 1000.
    *   Clock pulse 1: 0100.
    *   Clock pulse 2: 0010.
    *   Clock pulse 3: 0001.
    *   Clock pulse 4: 1000 (repeats).
*   **Advantages:** Simple to design, produces a unique output for each state.
*   **Disadvantages:** Requires N flip-flops for N states (inefficient).

**Textbook Reference:** Floyd, Chapter 7.7.

### 7.2 Johnson Counter (Twisted Ring Counter)

A Johnson counter is formed by connecting the *complement* of the output of the last flip-flop back to the input of the first flip-flop.

*   **Structure:** A shift register where $\overline{Q_n}$ is fed back to the serial input of the first flip-flop.
*   **Operation:** The pattern of '1's and '0's shifts and inverts, creating a sequence of states.
*   **Number of States:** An N-flip-flop Johnson counter has 2N states.
*   **Example (4-bit):** Shift register $FF_3, FF_2, FF_1, FF_0$. $\overline{Q_0}$ is connected to the input of $FF_3$.
    *   Initial state: 0000.
    *   Clock pulse 1: 1000 (assume $\overline{Q_0}$ is 1 initially if $Q_0$ is 0).
    *   Clock pulse 2: 1100.
    *   Clock pulse 3: 1110.
    *   Clock pulse 4: 1111.
    *   Clock pulse 5: 0111.
    *   Clock pulse 6: 0011.
    *   Clock pulse 7: 0001.
    *   Clock pulse 8: 0000 (repeats).
*   **Advantages:** Requires N/2 flip-flops for 2N states, more efficient than a ring counter for larger counts.
*   **Disadvantages:** The decoding logic for each state is more complex than in a ring counter.

**Textbook Reference:** Floyd, Chapter 7.7.

---

## 8. Practice Questions

**Section 1: Flip-Flops**

1.  **What is the main difference between a latch and a flip-flop?**
2.  **Explain the operation of an SR latch and identify its forbidden state.**
3.  **Describe the conditions for each input (J, K) for a JK flip-flop to perform the following actions: hold, set, reset, toggle.**
4.  **Write the characteristic equation for a D flip-flop.**
5.  **Design a T flip-flop using a JK flip-flop.**
6.  **Convert a JK flip-flop to a T flip-flop.** (Answer: J = T, K = T)

**Section 2: Shift Registers**

7.  **Draw a block diagram of a 4-bit SIPO shift register and explain its operation.**
8.  **What is the primary use of a universal shift register?**
9.  **If a serial data stream "10110" is input into a 5-bit SIPO shift register, what will be the parallel output after 5 clock pulses? Assume the register is initially cleared (all zeros).**
    *   Answer: 10110 (assuming MSB comes first in the serial stream and Q0 is the first FF)

**Section 3: Counters**

10. **Explain the concept of a ripple counter and its main disadvantage.**
11. **Design a 4-bit synchronous up counter using JK flip-flops. Show the logic for the JK inputs.**
    *   Answer: $J_0=K_0=1$, $J_1=K_1=Q_0$, $J_2=K_2=Q_1Q_0$, $J_3=K_3=Q_2Q_1Q_0$
12. **Design a Mod-3 counter (00, 01, 10, 00, ...). Use D flip-flops.**
    *   States: 00, 01, 10.
    *   Let's use D flip-flops: $Q_1 Q_0$.
    *   | Current ($Q_1 Q_0$) | Next ($Q_1 Q_0$) | $D_0$ | $D_1$ |
    *   |-----------------|-----------------|-------|-------|
    *   | 00              | 01              | 1     | 0     |
    *   | 01              | 10              | 0     | 1     |
    *   | 10              | 00              | 0     | 0     |
    *   | 11 (Don't care) | 00              | 0     | 0     |
    *   K-maps:
    *   $D_0 = \overline{Q_1} \overline{Q_0} + Q_1 \overline{Q_0} = \overline{Q_0}$ (Wait, this is wrong. From table $D_0 = \overline{Q_0}$ for state 00 and 10, and $D_0=1$ for state 01. So $D_0 = Q_1 \overline{Q_0} + \overline{Q_1} \overline{Q_0} = \overline{Q_0}$. Let's recheck the table.
    *   Ah, state sequence is 00 -> 01 -> 10 -> 00.
    *   | Current ($Q_1 Q_0$) | Next ($Q_1 Q_0$) | $D_0$ | $D_1$ |
    *   |-----------------|-----------------|-------|-------|
    *   | 00              | 01              | 1     | 0     |
    *   | 01              | 10              | 0     | 1     |
    *   | 10              | 00              | 0     | 0     |
    *   K-maps:
    *   $D_0$: Q1=0, Q0=0 -> 1; Q1=0, Q0=1 -> 0; Q1=1, Q0=0 -> 0. $D_0 = \overline{Q_1} \overline{Q_0}$.
    *   $D_1$: Q1=0, Q0=0 -> 0; Q1=0, Q0=1 -> 1; Q1=1, Q0=0 -> 0. $D_1 = \overline{Q_1} Q_0$.
    *   **Answer:** $D_0 = \overline{Q_1} \overline{Q_0}$, $D_1 = \overline{Q_1} Q_0$.
13. **What is the number of states in an N-flip-flop Johnson counter?**
    *   Answer: 2N

---

## 9. Important Points to Remember

*   **Sequential circuits depend on past inputs (state).**
*   **Latches are level-sensitive; Flip-flops are edge-sensitive.**
*   **SR latch has a forbidden state (S=1, R=1).**
*   **JK flip-flops overcome the SR forbidden state, with J=1, K=1 causing a toggle.**
*   **Master-Slave configuration prevents race-around conditions.**
*   **D flip-flops are ideal for data storage.**
*   **T flip-flops toggle when T=1.**
*   **Flip-flop conversion involves using the characteristic equation of the target and the excitation table of the source.**
*   **Shift registers move data serially.**
*   **Asynchronous counters have ripple delays; synchronous counters do not.**
*   **Mod-N counters have N states.**
*   **Ring counters have N states and use $\overline{Q_{n}}$ to input $Q_0$.**
*   **Johnson counters have 2N states and use $\overline{Q_{n}}$ to input $Q_0$.**

---

This comprehensive set of notes covers the essential concepts of sequential circuits, including latches, flip-flops, their conversions, shift registers, and various types of counters. The provided examples, practice questions, and key takeaways should aid in understanding and mastering this module. Refer to the listed textbooks for detailed proofs, circuit diagrams, and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
