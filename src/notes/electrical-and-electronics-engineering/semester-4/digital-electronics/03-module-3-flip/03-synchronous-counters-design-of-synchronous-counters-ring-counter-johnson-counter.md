---
title: "Synchronous counters – design of synchronous counters – Ring counter – Johnson Counter."
subject: "DIGITAL ELECTRONICS"
module: "Module 3: Flip"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e53"
status: "completed"
scrapedAt: "2026-05-23T16:15:54.347Z"
---
# Digital Electronics: Module 3 - Flip-Flops (Synchronous Counters)

This module delves into the fascinating world of synchronous counters, focusing on their design principles, and specific types like Ring and Johnson counters. Understanding these circuits is crucial for building more complex sequential logic systems, aligning with **Course Outcome CO3: Design sequential logic circuits (Knowledge Level: K3)**.

---

## 1. Introduction to Synchronous Counters

**Key Concept:** Counters are sequential logic circuits that generate a predetermined sequence of states. Synchronous counters are a specific type where all flip-flops change their state simultaneously in response to a common clock pulse. This synchronicity is key to their predictable and reliable operation.

**Definition:** A **synchronous counter** is a sequential circuit where the state transitions of all flip-flops are triggered by the same clock signal. This eliminates the ripple effect seen in asynchronous counters, leading to faster and more stable operation.

**Contrast with Asynchronous Counters (Briefly):**
*   **Asynchronous (Ripple) Counters:** Flip-flops are triggered by the output of the preceding flip-flop, leading to a delay or "ripple" in state transitions.
*   **Synchronous Counters:** All flip-flops receive the same clock signal, ensuring simultaneous state changes.

**Importance:**
*   Synchronous counters are fundamental building blocks in digital systems for tasks like:
    *   Frequency division
    *   Timing control
    *   Sequence generation
    *   Digital signal processing

**(Referenced from Floyd T.L, Digital Fundamentals, 11/e, Chapter 10)**

---

## 2. Design of Synchronous Counters

The systematic design of synchronous counters involves several key steps. This process aligns with **Course Outcome CO3: Design sequential logic circuits (Knowledge Level: K3)**.

**Design Steps:**

1.  **Determine the Sequence of States:**
    *   Clearly define the desired sequence of states the counter should produce.
    *   This involves identifying the number of states and the transition from one state to the next.

2.  **Assign State Codes:**
    *   Assign a unique binary code (state word) to each state in the sequence.
    *   The number of flip-flops required is determined by the number of states ($2^n \ge \text{Number of States}$).

3.  **Develop a State Table:**
    *   A state table lists the current state and the next state for each possible input combination (if any).
    *   For synchronous counters, the "input" is often derived from the desired next state itself, fed back through logic gates.

    **State Table Structure:**

    | Current State (Q_n ... Q_1) | Next State (Q'_n ... Q'_1) | Flip-flop Inputs (J, K, D, or T) |
    | :------------------------ | :------------------------- | :------------------------------- |
    |                           |                            |                                  |

4.  **Determine Flip-Flop Excitation Requirements:**
    *   Based on the type of flip-flop used (JK, D, or T), determine the required inputs (J, K, D, or T) for each flip-flop to transition from the current state to the next state.

    *   **For JK Flip-Flops:**
        | Current Output (Q) | Next Output (Q') | J | K |
        | :----------------- | :--------------- | :-: | :-: |
        | 0                  | 0                | 0 | X |
        | 0                  | 1                | 1 | X |
        | 1                  | 0                | X | 1 |
        | 1                  | 1                | X | 0 |
        (X = Don't Care)

    *   **For D Flip-Flops:**
        | Current Output (Q) | Next Output (Q') | D |
        | :----------------- | :--------------- | :-: |
        | 0                  | 0                | 0 |
        | 0                  | 1                | 1 |
        | 1                  | 0                | 0 |
        | 1                  | 1                | 1 |
        (In essence, D = Q')

    *   **For T Flip-Flops:**
        | Current Output (Q) | Next Output (Q') | T |
        | :----------------- | :--------------- | :-: |
        | 0                  | 0                | 0 |
        | 0                  | 1                | 1 |
        | 1                  | 0                | 1 |
        | 1                  | 1                | 0 |

5.  **Create Excitation Tables (or directly derive expressions):**
    *   Combine the state table with the flip-flop excitation requirements.
    *   This table shows the flip-flop inputs needed for each current state.

6.  **Derive Boolean Expressions for Flip-Flop Inputs:**
    *   Use Karnaugh Maps (K-maps) or Boolean algebra to derive simplified logic expressions for each flip-flop's input (J, K, D, or T) in terms of the current state bits (Q_n ... Q_1).

7.  **Draw the Logic Diagram:**
    *   Construct the circuit diagram using flip-flops and the logic gates determined by the Boolean expressions.
    *   Ensure all flip-flops are connected to the common clock signal.

**(Referenced from Malvino & Leach, Digital Principles and Applications, 4/e, Chapter 14)**
**(Referenced from Mano & Ciletti, Digital Design, 6/e, Chapter 6)**

**Example: Design a 2-bit synchronous up-counter (00 -> 01 -> 10 -> 11 -> 00...)**

*   **Step 1 & 2: States and Codes:**
    *   States: 00, 01, 10, 11
    *   Flip-flops needed: 2 ($2^2 = 4$)
    *   Let's use Q1 (MSB) and Q0 (LSB).

*   **Step 3: State Table (using JK flip-flops):**

    | Current State (Q1 Q0) | Next State (Q1' Q0') | FF1 Inputs (J1 K1) | FF0 Inputs (J0 K0) |
    | :-------------------- | :------------------- | :----------------- | :----------------- |
    | 00                    | 01                   | J1=0, K1=X         | J0=1, K0=X         |
    | 01                    | 10                   | J1=1, K1=X         | J0=X, K0=1         |
    | 10                    | 11                   | J1=X, K1=0         | J0=1, K0=X         |
    | 11                    | 00                   | J1=X, K1=1         | J0=X, K0=1         |

*   **Step 4 & 5: Excitation Table & K-maps:**
    *   We need to derive expressions for J1, K1, J0, K0 based on Q1 and Q0.

    *   **For J1:**
        | Q1 | Q0 | J1 |
        | :-: | :-: | :-: |
        | 0  | 0  | 0  |
        | 0  | 1  | 1  |
        | 1  | 0  | X  |
        | 1  | 1  | X  |
        K-map for J1:
        ```
           Q0
        Q1 0   1
        0  0   1
        1  X   X
        ```
        From K-map, **J1 = Q0**

    *   **For K1:**
        | Q1 | Q0 | K1 |
        | :-: | :-: | :-: |
        | 0  | 0  | X  |
        | 0  | 1  | X  |
        | 1  | 0  | 0  |
        | 1  | 1  | 1  |
        K-map for K1:
        ```
           Q0
        Q1 0   1
        0  X   X
        1  0   1
        ```
        From K-map, **K1 = Q0**

    *   **For J0:**
        | Q1 | Q0 | J0 |
        | :-: | :-: | :-: |
        | 0  | 0  | 1  |
        | 0  | 1  | X  |
        | 1  | 0  | 1  |
        | 1  | 1  | X  |
        K-map for J0:
        ```
           Q0
        Q1 0   1
        0  1   X
        1  1   X
        ```
        From K-map, **J0 = 1** (a constant)

    *   **For K0:**
        | Q1 | Q0 | K0 |
        | :-: | :-: | :-: |
        | 0  | 0  | X  |
        | 0  | 1  | 1  |
        | 1  | 0  | X  |
        | 1  | 1  | 1  |
        K-map for K0:
        ```
           Q0
        Q1 0   1
        0  X   1
        1  X   1
        ```
        From K-map, **K0 = 1** (a constant)

*   **Step 6: Boolean Expressions:**
    *   J1 = Q0
    *   K1 = Q0
    *   J0 = 1
    *   K0 = 1

*   **Step 7: Logic Diagram:**
    *   Two JK flip-flops.
    *   Clock connected to both.
    *   J1 and K1 of FF1 connected to Q0.
    *   J0 and K0 of FF0 connected to logic HIGH (1).

**(Referenced from Floyd T.L, Digital Fundamentals, 11/e, Chapter 10)**

---

## 3. Ring Counter

**Key Concept:** A Ring counter is a specific type of synchronous counter that circulates a single '1' (or '0') bit through a closed loop of flip-flops. It's simple to implement but has limited state count.

**Definition:** A **Ring counter** is a shift register with its output fed back to its input, creating a ring structure. It typically starts with one flip-flop having a '1' and the rest '0'. This '1' is shifted one position to the right on each clock pulse.

**Operation:**
*   **Initial State:** All flip-flops are initialized to '0', except for one which is set to '1'.
*   **Clock Pulse:** On each clock pulse, the '1' shifts to the next flip-flop.
*   **Looping:** When the '1' reaches the last flip-flop, it shifts back to the first flip-flop, completing the ring.
*   **States:** For an N-bit ring counter, there are N unique states.

**Types:**
*   **Standard Ring Counter (Johnson Counter in its simplest form, but usually distinguished):** The output of the last flip-flop is fed back to the input of the first flip-flop.
*   **Twisted Ring Counter (Johnson Counter):** The inverted output of the last flip-flop is fed back to the input of the first flip-flop. (Discussed in the next section).

**Design with JK Flip-Flops (Example: 4-bit Ring Counter):**

*   **States:** 0001, 0010, 0100, 1000 (and repeating)
*   Number of flip-flops: 4 (Q3, Q2, Q1, Q0)
*   Desired sequence:
    *   0001 -> 0010 -> 0100 -> 1000 -> 0001 ...

*   **State Table:**
    | Current State (Q3 Q2 Q1 Q0) | Next State (Q3' Q2' Q1' Q0') | FF3 (J3 K3) | FF2 (J2 K2) | FF1 (J1 K1) | FF0 (J0 K0) |
    | :------------------------ | :--------------------------- | :---------- | :---------- | :---------- | :---------- |
    | 0001                      | 0010                         | J3=0, K3=X  | J2=0, K2=X  | J1=1, K1=X  | J0=X, K0=1  |
    | 0010                      | 0100                         | J3=0, K3=X  | J2=1, K2=X  | J2=X, K2=1  | J0=0, K0=X  |
    | 0100                      | 1000                         | J3=1, K3=X  | J3=X, K3=0  | J1=0, K0=X  | J0=0, K0=X  |
    | 1000                      | 0001                         | J3=X, K3=1  | J2=0, K2=X  | J1=0, K0=X  | J0=1, K0=X  |

*   **Deriving Expressions (simplified view for clarity, K-maps are essential for formal derivation):**
    *   To get Q0' = 1 (from 0001 to 0010), J0 must be 1 and K0 can be X. Here, Q3 is 0, so K0=Q3=0 is not correct. We need to feed the previous state's output.
    *   Let's consider feeding the output of the previous FF (shifted).
    *   Q0' should be Q3 (output of last FF). So, J0 = Q3, K0 = X.
    *   Q1' should be Q0. So, J1 = Q0, K1 = X.
    *   Q2' should be Q1. So, J2 = Q1, K2 = X.
    *   Q3' should be Q2. So, J3 = Q2, K3 = X.

*   **Simplified Logic:**
    *   J0 = Q3, K0 = X
    *   J1 = Q0, K1 = X
    *   J2 = Q1, K2 = X
    *   J3 = Q2, K3 = X

*   **Logic Diagram:**
    *   Connect the output of FF_i to the J input of FF_{i+1} (modulo N).
    *   Set K inputs to X (or connect them to logic HIGH if J-K is used and we only need to control J). For simplicity, using D flip-flops where D_i = Q_{i-1} (modulo N) is more direct.

    *   **Using D Flip-Flops:**
        *   D0 = Q3
        *   D1 = Q0
        *   D2 = Q1
        *   D3 = Q2

**(Referenced from Floyd T.L, Digital Fundamentals, 11/e, Chapter 10)**

**Advantages of Ring Counters:**
*   Simple design and decoding.
*   Provides N distinct states with N flip-flops.

**Disadvantages of Ring Counters:**
*   Limited number of states for a given number of flip-flops (1 out of $2^n$ possible states).
*   Susceptible to errors if an incorrect state is entered (e.g., all zeros). The counter might get stuck in a zero state.

---

## 4. Johnson Counter (Twisted Ring Counter)

**Key Concept:** The Johnson counter is a variation of the ring counter where the inverted output of the last flip-flop is fed back to the input of the first flip-flop. This allows it to cycle through twice the number of states compared to a standard ring counter.

**Definition:** A **Johnson counter**, also known as a twisted ring counter, is a type of shift register counter where the complement of the output of the last flip-flop is connected to the input of the first flip-flop.

**Operation:**
*   **Initial State:** Similar to a ring counter, it starts with one flip-flop set to '1' and the rest to '0'. However, the sequence of transitions is different.
*   **Clock Pulse:** On each clock pulse, the '1' shifts to the right. As the '1' moves, a '0' is introduced from the inverted output of the last flip-flop. This '0' also shifts to the right.
*   **Effect of Inverted Feedback:** When the '1' reaches the last flip-flop, its inverted output (a '0') is fed to the first flip-flop, which is already '0'. This '0' then propagates. When the last '1' has shifted all the way through, the inverted output of the last FF (which was '1' before the shift, now '0') feeds into the first FF. Then the '0's propagate.
*   **States:** For an N-bit Johnson counter, there are 2N distinct states.

**Design with JK Flip-Flops (Example: 3-bit Johnson Counter):**

*   **States:** 000, 001, 011, 111, 110, 100, 000 ...
*   Number of flip-flops: 3 (Q2, Q1, Q0)
*   Desired sequence:
    *   000 -> 001 -> 011 -> 111 -> 110 -> 100 -> 000 ...

*   **State Table (using JK flip-flops):**
    | Current State (Q2 Q1 Q0) | Next State (Q2' Q1' Q0') | FF2 (J2 K2) | FF1 (J1 K1) | FF0 (J0 K0) |
    | :------------------------ | :--------------------------- | :---------- | :---------- | :---------- |
    | 000                       | 001                          | J2=0, K2=X  | J1=0, K2=X  | J0=1, K2=X  | (Inputs from Q1, Q0, not Q2')
    | 001                       | 011                          | J2=0, K2=X  | J1=1, K2=X  | J0=X, K2=1  |
    | 011                       | 111                          | J2=1, K2=X  | J1=X, K2=1  | J0=X, K2=1  |
    | 111                       | 110                          | J2=X, K2=1  | J1=X, K2=0  | J0=X, K2=1  |
    | 110                       | 100                          | J2=X, K2=0  | J1=X, K2=1  | J0=X, K2=0  |
    | 100                       | 000                          | J2=X, K2=1  | J1=0, K2=X  | J0=X, K2=0  |

*   **Deriving Expressions (using Q-bar of last FF):**
    *   The feedback is from the inverted output of the last flip-flop. For a 3-bit counter (Q2, Q1, Q0), the feedback is from Q0'. So, the input to FF2 (Q2') will be derived from Q0'.
    *   Q0' should be Q1. So, J0 = Q1, K0 = X.
    *   Q1' should be Q2. So, J1 = Q2, K1 = X.
    *   Q2' should be $\overline{Q0}$. So, J2 = $\overline{Q0}$, K2 = X.

*   **Simplified Logic (using D flip-flops for ease of understanding):**
    *   D0 = Q1
    *   D1 = Q2
    *   D2 = $\overline{Q0}$

*   **Logic Diagram:**
    *   Three JK flip-flops (or D flip-flops).
    *   Clock connected to all.
    *   Output of FF0 (Q0) connected to J1 of FF1.
    *   Output of FF1 (Q1) connected to J0 of FF0.
    *   Output of FF2 (Q2) connected to J1 of FF1.
    *   Inverted output of FF0 ($\overline{Q0}$) connected to J2 of FF2.
    *   All K inputs are don't cares (or connected to logic HIGH).

**(Referenced from Floyd T.L, Digital Fundamentals, 11/e, Chapter 10)**
**(Referenced from Taub & Schilling, Digital Integrated Electronics, 2017, Chapter 13)**

**Advantages of Johnson Counters:**
*   More states for a given number of flip-flops (2N states).
*   Simpler decoding logic compared to arbitrary synchronous counters for many sequences.

**Disadvantages of Johnson Counters:**
*   The sequence of states is fixed.
*   When all flip-flops are '1' (in an up-counting Johnson counter), the next state will have all '0's. This transition needs careful handling in some applications.
*   The number of '1's in the sequence increases and then decreases, which can be a disadvantage if a constant number of active outputs is required.

**Special Consideration for Johnson Counters:** If the initial state is not carefully chosen, the counter might not enter the desired sequence. For example, if all flip-flops are zero, the sequence will remain all zeros. Pre-setting initial states is important.

---

## 5. Key Concepts and Important Points to Remember

*   **Synchronous Operation:** All flip-flops change state simultaneously based on a common clock pulse. This is the defining characteristic.
*   **Design Process:** The systematic design process (sequence, state table, excitation table, K-maps, logic diagram) is crucial for creating correct synchronous counters.
*   **JK Flip-Flops:** Often preferred for their versatility in toggling (J=1, K=1) and holding (J=0, K=0) states.
*   **D Flip-Flops:** Simpler to design with as D = Q' for next state.
*   **T Flip-Flops:** Useful for toggle operations.
*   **Karnaugh Maps (K-maps):** Essential tool for simplifying Boolean expressions for flip-flop inputs, leading to minimal hardware. **(Aligns with CO2: Design combinational logic circuits, as K-maps are used to design the combinational logic driving the flip-flops)**.
*   **Ring Counter:** Shifts a single '1' around a loop. N flip-flops yield N states. Requires careful initialization.
*   **Johnson Counter:** Shifts a '1' around a loop, with inverted feedback. 2N flip-flops yield 2N states. More states than a ring counter.
*   **State Diagram:** A graphical representation of the counter's states and transitions, very helpful during the design phase.
*   **Modulo-N Counter:** A counter that counts up to N states and then repeats. The number of flip-flops required is $\lceil \log_2 N \rceil$.
*   **Clock Skew:** In real-world synchronous circuits, slight variations in clock arrival times (clock skew) can lead to timing issues. Synchronous counters are generally more robust to skew than asynchronous ones, but it's still a factor.

**(Referenced from all textbooks, particularly chapters on sequential circuits and counters)**

---

## 6. Practice Questions and Exercises

**Question 1:**
Design a 3-bit synchronous binary counter that counts in the sequence 000 -> 001 -> 010 -> 011 -> 100 -> 101 -> 110 -> 111 -> 000. Use JK flip-flops.
(Knowledge Level: K3 - aligns with CO3)

**Answer 1:**
*   **States:** 3 bits, 8 states (000 to 111).
*   **Flip-flops:** 3 (Q2, Q1, Q0).
*   **State Table and Excitation Table:** (You would construct this by listing current state, next state, and deriving J/K values).
    *   Example transition: 000 -> 001
        *   Q2: 0 -> 0 (J2=0, K2=X)
        *   Q1: 0 -> 0 (J1=0, K1=X)
        *   Q0: 0 -> 1 (J0=1, K0=X)
    *   Example transition: 111 -> 000
        *   Q2: 1 -> 0 (J2=X, K2=1)
        *   Q1: 1 -> 0 (J1=X, K1=1)
        *   Q0: 1 -> 0 (J0=X, K0=1)
*   **Boolean Expressions (after K-map minimization):**
    *   J0 = 1
    *   K0 = 1
    *   J1 = Q0
    *   K1 = $\overline{Q0}$
    *   J2 = Q1 $\cdot$ Q0
    *   K2 = $\overline{Q1} \cdot \overline{Q0}$
*   **Logic Diagram:** Connect the derived logic to the JK inputs of three flip-flops clocked together.

**Question 2:**
What is the main advantage of a synchronous counter over an asynchronous counter?
(Knowledge Level: K2 - aligns with CO3)

**Answer 2:**
The main advantage is that all flip-flops in a synchronous counter change their state simultaneously in response to the common clock pulse. This eliminates the propagation delay (ripple effect) associated with asynchronous counters, leading to faster and more reliable operation.

**Question 3:**
A 4-bit Johnson counter cycles through how many unique states? What is the feedback connection for a Johnson counter?
(Knowledge Level: K2 - aligns with CO3)

**Answer 3:**
A 4-bit Johnson counter cycles through $2 \times 4 = 8$ unique states. The feedback connection for a Johnson counter is the inverted output of the last flip-flop connected to the input of the first flip-flop.

**Question 4:**
Design a 2-bit synchronous counter that counts in the sequence 00 -> 10 -> 01 -> 00. Use D flip-flops.
(Knowledge Level: K3 - aligns with CO3)

**Answer 4:**
*   **States:** 2 bits, 3 states (00, 10, 01). This is a non-binary sequence.
*   **Flip-flops:** 2 (Q1, Q0).
*   **State Table:**
    | Current State (Q1 Q0) | Next State (Q1' Q0') | FF1 Input (D1) | FF0 Input (D0) |
    | :-------------------- | :------------------- | :------------- | :------------- |
    | 00                    | 10                   | 1              | 0              |
    | 10                    | 01                   | 0              | 1              |
    | 01                    | 00                   | 0              | 0              |
    *   The state 11 is not part of the desired sequence. If the counter enters 11, it should ideally go back to a valid state. For simplicity, we can use K-maps and treat 11 as a "don't care" state for determining D inputs.

*   **Deriving Expressions (K-maps for D1 and D0):**
    *   **K-map for D1:**
        ```
           Q0
        Q1 0   1
        0  1   0
        1  0   X  (Don't care)
        ```
        From K-map, **D1 = $\overline{Q1}$ $\cdot$ $\overline{Q0}$ + Q1 $\cdot$ Q0**  (This simplifies to D1 = $\overline{Q1 \oplus Q0}$ or $D1 = \overline{Q1}$ $\cdot$ $\overline{Q0}$ using common logic for XNOR)
        Let's re-examine.
        D1 = 1 when Q1Q0 is 00.
        D1 = 0 when Q1Q0 is 10.
        D1 = 0 when Q1Q0 is 01.
        D1 = X when Q1Q0 is 11.

        K-map for D1:
        ```
           Q0
        Q1 0   1
        0  1   0
        1  0   X
        ```
        This K-map simplifies to **D1 = $\overline{Q0}$**.

    *   **K-map for D0:**
        ```
           Q0
        Q1 0   1
        0  0   1
        1  1   X  (Don't care)
        ```
        From K-map, **D0 = $\overline{Q1}$ $\cdot$ Q0 + Q1 $\cdot$ Q0** (This simplifies to D0 = Q0)

    Let's re-check the transitions and K-maps.
    Current State | Next State | D1 | D0
    --------------|------------|----|----
    00            | 10         | 1  | 0
    10            | 01         | 0  | 1
    01            | 00         | 0  | 0
    11            | X          | X  | X

    K-map for D1:
    ```
       Q0
    Q1 0   1
    0  1   0
    1  0   X
    ```
    This indeed simplifies to **D1 = $\overline{Q0}$**.

    K-map for D0:
    ```
       Q0
    Q1 0   1
    0  0   1
    1  1   X
    ```
    This simplifies to **D0 = Q0 $\oplus$ Q1**.

*   **Final Boolean Expressions:**
    *   D1 = $\overline{Q0}$
    *   D0 = Q0 $\oplus$ Q1 (XOR gate)

*   **Logic Diagram:** Two D flip-flops. Clock connected to both. D1 connected to $\overline{Q0}$ (output of FF0 inverted). D0 connected to the output of an XOR gate whose inputs are Q0 and Q1.

**Question 5:**
A synchronous counter is designed using D flip-flops. The state transition table is given below. Derive the Boolean expressions for the D inputs of the flip-flops.
Current State | Next State
--------------|------------
000           | 001
001           | 010
010           | 011
011           | 100
100           | 101
101           | 000

(Knowledge Level: K3 - aligns with CO3)

**Answer 5:**
*   **States:** 3 bits (Q2, Q1, Q0). 6 states in the sequence, so it's a non-binary counter.
*   **Flip-flops:** 3 (for Q2, Q1, Q0).
*   **State Table and D input requirements:**

    | Current State (Q2 Q1 Q0) | Next State (Q2' Q1' Q0') | D2 | D1 | D0 |
    | :------------------------ | :--------------------------- | :-: | :-: | :-: |
    | 000                       | 001                          | 0   | 0   | 1   |
    | 001                       | 010                          | 0   | 1   | 0   |
    | 010                       | 011                          | 0   | 1   | 1   |
    | 011                       | 100                          | 1   | 0   | 0   |
    | 100                       | 101                          | 1   | 0   | 1   |
    | 101                       | 000                          | 0   | 0   | 0   |
    *   We need to consider unused states (110, 111) and treat their D inputs as "don't care" for simplification.

*   **Deriving Expressions (K-maps):**

    *   **K-map for D2:**
        ```
           Q1Q0
        Q2 00 01 11 10
        0  0  0  1  0
        1  1  1  X  X
        ```
        Simplifies to **D2 = Q1 $\cdot$ Q0 + $\overline{Q1}$ $\cdot$ $\overline{Q0}$** (XNOR gate: $D2 = Q1 \odot Q0$).

    *   **K-map for D1:**
        ```
           Q1Q0
        Q2 00 01 11 10
        0  0  1  1  0
        1  0  0  X  X
        ```
        Simplifies to **D1 = $\overline{Q2}$ $\cdot$ Q0 + $\overline{Q2}$ $\cdot$ Q1** or **D1 = $\overline{Q2}$ $\cdot$ (Q0 + Q1)**.

    *   **K-map for D0:**
        ```
           Q1Q0
        Q2 00 01 11 10
        0  1  0  0  0
        1  1  0  X  X
        ```
        Simplifies to **D0 = $\overline{Q2}$ $\cdot$ $\overline{Q1}$ $\cdot$ $\overline{Q0}$ + Q2 $\cdot$ $\overline{Q1}$ $\cdot$ $\overline{Q0}$ + $\overline{Q2}$ $\cdot$ Q1 $\cdot$ Q0**.
        This simplifies to **D0 = $\overline{Q1}$ $\cdot$ $\overline{Q0}$ + Q1 $\cdot$ Q0**. (This seems incorrect from K-map. Let's retry D0.)

    Let's redo K-maps carefully:
    **K-map for D2:**
    ```
       Q1Q0
    Q2 00 01 11 10
    0  0  0  1  0
    1  1  1  X  X
    ```
    Grouping: (00,10) from Q2=1 gives $\overline{Q0}$. (01,11) from Q2=1 gives Q1. No, this is incorrect grouping.
    Correct grouping for D2:
    The '1's are at 011, 100, 101.
    ```
       Q1Q0
    Q2 00 01 11 10
    0  0  0  1  0
    1  1  1  X  X
    ```
    Group the two '1's in the Q2=1 row: This covers states 100 and 101. The common terms are Q2 and $\overline{Q1}$. So, $Q2 \cdot \overline{Q1}$.
    Now consider the '1' at state 011. D2=1.
    Let's use the full K-map:
    D2:
    | Q2 | Q1 | Q0 | D2 |
    |----|----|----|----|
    | 0  | 0  | 0  | 0  |
    | 0  | 0  | 1  | 0  |
    | 0  | 1  | 0  | 0  |
    | 0  | 1  | 1  | 1  |
    | 1  | 0  | 0  | 1  |
    | 1  | 0  | 1  | 1  |
    | 1  | 1  | 0  | X  |
    | 1  | 1  | 1  | X  |

    K-map for D2:
    ```
       Q1Q0
    Q2 00 01 11 10
    0  0  0  1  0
    1  1  1  X  X
    ```
    This simplifies to **D2 = $\overline{Q1}$ $\cdot$ Q0 + Q2 $\cdot$ $\overline{Q1}$**.

    **K-map for D1:**
    | Q2 | Q1 | Q0 | D1 |
    |----|----|----|----|
    | 0  | 0  | 0  | 0  |
    | 0  | 0  | 1  | 1  |
    | 0  | 1  | 0  | 1  |
    | 0  | 1  | 1  | 1  |
    | 1  | 0  | 0  | 0  |
    | 1  | 0  | 1  | 0  |
    | 1  | 1  | 0  | X  |
    | 1  | 1  | 1  | X  |

    K-map for D1:
    ```
       Q1Q0
    Q2 00 01 11 10
    0  0  1  1  0
    1  0  0  X  X
    ```
    This simplifies to **D1 = $\overline{Q2}$ $\cdot$ Q0 + $\overline{Q2}$ $\cdot$ Q1**.

    **K-map for D0:**
    | Q2 | Q1 | Q0 | D0 |
    |----|----|----|----|
    | 0  | 0  | 0  | 1  |
    | 0  | 0  | 1  | 0  |
    | 0  | 1  | 0  | 0  |
    | 0  | 1  | 1  | 0  |
    | 1  | 0  | 0  | 1  |
    | 1  | 0  | 1  | 0  |
    | 1  | 1  | 0  | X  |
    | 1  | 1  | 1  | X  |

    K-map for D0:
    ```
       Q1Q0
    Q2 00 01 11 10
    0  1  0  0  0
    1  1  0  X  X
    ```
    This simplifies to **D0 = $\overline{Q2}$ $\cdot$ $\overline{Q1}$ $\cdot$ $\overline{Q0}$ + Q2 $\cdot$ $\overline{Q1}$ $\cdot$ $\overline{Q0}$**. This can be simplified to **D0 = $\overline{Q1}$ $\cdot$ $\overline{Q0}$**.

*   **Final Boolean Expressions:**
    *   D2 = $\overline{Q1}$ $\cdot$ Q0 + Q2 $\cdot$ $\overline{Q1}$
    *   D1 = $\overline{Q2}$ $\cdot$ (Q0 + Q1)
    *   D0 = $\overline{Q1}$ $\cdot$ $\overline{Q0}$

---

## 7. Course Outcome Alignment

This module directly contributes to:

*   **CO3: Design sequential logic circuits (Knowledge Level: K3):** The entire process of designing synchronous counters, including state table development, excitation logic derivation, and logic diagram creation, directly addresses this outcome. The ability to design Ring and Johnson counters also falls under this.
*   **CO6: Design and realize hardware circuits. medium complexity practical digital (Knowledge Level: K6):** While this module focuses on the design part (K3), the understanding gained is a prerequisite for physically realizing these circuits in a lab setting. Designing a counter is a medium-complexity practical digital task.
*   **CO2: Design combinational logic circuits (Knowledge Level: K3):** The derivation of Boolean expressions for flip-flop inputs using K-maps or Boolean algebra is essentially designing combinational logic circuits that feed the sequential elements.

The module provides foundational knowledge for understanding how sequential circuits operate and how to design them systematically.

---
This concludes the study notes for Synchronous Counters, Ring Counters, and Johnson Counters. Remember to practice the design steps and work through more examples from your textbooks!
