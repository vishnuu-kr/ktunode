---
title: "Design and implement an asynchronous counter - 3 bit up counter, 3-bit down counter, 3 bit up down counter with mode control, mod-N counter"
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aee7"
status: "completed"
scrapedAt: "2026-05-20T16:24:28.735Z"
---
## DIGITAL LAB: Module 2 - Asynchronous Counters

**Topic:** Design and Implement an Asynchronous Counter - 3-bit Up Counter, 3-bit Down Counter, 3-bit Up/Down Counter with Mode Control, Mod-N Counter

**Learning Outcomes:**

*   Understand the principles of asynchronous (ripple) counters.
*   Design and implement a 3-bit asynchronous up counter.
*   Design and implement a 3-bit asynchronous down counter.
*   Design and implement a 3-bit asynchronous up/down counter with mode control.
*   Design and implement a Mod-N counter.
*   Analyze the limitations and advantages of asynchronous counters.
*   Simulate and verify the designed counters.

### 1. Key Concepts and Definitions

*   **Counter:** A sequential logic circuit that progresses through a predetermined sequence of states.  These states usually represent numbers, so the circuit is often used to count events or time intervals.

*   **Asynchronous Counter (Ripple Counter):** A type of counter where the clock input of each flip-flop (except the first) is triggered by the output of the preceding flip-flop.  This means the flip-flops don't all change state simultaneously, creating a "ripple" effect.

*   **Flip-Flop:** A bistable multivibrator; a circuit that has two stable states and can store one bit of information.  Common types used in counters are JK, T, and D flip-flops.

*   **Clock Signal:** A periodic signal that triggers state changes in sequential circuits.

*   **Up Counter:** A counter that increments its count sequence with each clock pulse (e.g., 0, 1, 2, 3...).

*   **Down Counter:** A counter that decrements its count sequence with each clock pulse (e.g., 3, 2, 1, 0...).

*   **Up/Down Counter:** A counter that can count up or down depending on a control signal.

*   **Mode Control:** An input signal that determines whether the counter counts up or down.

*   **Mod-N Counter:** A counter that counts from 0 to N-1 and then resets to 0.  'N' is the modulus or the number of states in the counting sequence.

*   **State Diagram:** A graphical representation of the states of a sequential circuit and the transitions between them.

*   **Truth Table:** A table that shows the output of a logic circuit for all possible combinations of input values.

*   **Propagation Delay:** The time it takes for the output of a flip-flop (or any logic gate) to change after the input changes. In asynchronous counters, this delay accumulates across the flip-flops.

### 2. 3-bit Asynchronous Up Counter

*   **Implementation:**  Uses three flip-flops (typically T or JK flip-flops configured as toggle flip-flops). The output of each flip-flop serves as the clock input for the next flip-flop.
*   **Behavior:** Counts up from 000 to 111 and then resets to 000.
*   **Logic:**
    *   Each flip-flop toggles (changes state) on the falling edge (or rising edge, depending on the implementation) of its clock input.
    *   The first flip-flop's clock input is connected to the external clock signal.
    *   The Q output of the first flip-flop is connected to the clock input of the second flip-flop.
    *   The Q output of the second flip-flop is connected to the clock input of the third flip-flop.
*   **Example (Using T Flip-Flops):**

    ```
    Clock --> T Flip-Flop 0 (Q0)
    Q0    --> T Flip-Flop 1 (Q1)
    Q1    --> T Flip-Flop 2 (Q2)
    T inputs of all flip-flops are tied HIGH (logic 1)
    ```

*   **Truth Table:**

    | Clock Cycle | Q2 | Q1 | Q0 | Decimal Equivalent |
    |-------------|----|----|----|--------------------|
    | 0           | 0  | 0  | 0  | 0                  |
    | 1           | 0  | 0  | 1  | 1                  |
    | 2           | 0  | 1  | 0  | 2                  |
    | 3           | 0  | 1  | 1  | 3                  |
    | 4           | 1  | 0  | 0  | 4                  |
    | 5           | 1  | 0  | 1  | 5                  |
    | 6           | 1  | 1  | 0  | 6                  |
    | 7           | 1  | 1  | 1  | 7                  |
    | 8           | 0  | 0  | 0  | 0                  |
    | ...         | ...| ...| ...| ...                |

### 3. 3-bit Asynchronous Down Counter

*   **Implementation:** Similar to the up counter, but uses the complemented output (Q') of each flip-flop as the clock input for the next.
*   **Behavior:** Counts down from 111 to 000 and then resets to 111.
*   **Logic:**
    *   Each flip-flop toggles on the falling edge (or rising edge, depending on the implementation) of its clock input.
    *   The first flip-flop's clock input is connected to the external clock signal.
    *   The Q' output of the first flip-flop is connected to the clock input of the second flip-flop.
    *   The Q' output of the second flip-flop is connected to the clock input of the third flip-flop.
*   **Example (Using T Flip-Flops):**

    ```
    Clock --> T Flip-Flop 0 (Q0)
    Q0'   --> T Flip-Flop 1 (Q1)
    Q1'   --> T Flip-Flop 2 (Q2)
    T inputs of all flip-flops are tied HIGH (logic 1)
    ```

*   **Truth Table:**

    | Clock Cycle | Q2 | Q1 | Q0 | Decimal Equivalent |
    |-------------|----|----|----|--------------------|
    | 0           | 1  | 1  | 1  | 7                  |
    | 1           | 1  | 1  | 0  | 6                  |
    | 2           | 1  | 0  | 1  | 5                  |
    | 3           | 1  | 0  | 0  | 4                  |
    | 4           | 0  | 1  | 1  | 3                  |
    | 5           | 0  | 1  | 0  | 2                  |
    | 6           | 0  | 0  | 1  | 1                  |
    | 7           | 0  | 0  | 0  | 0                  |
    | 8           | 1  | 1  | 1  | 7                  |
    | ...         | ...| ...| ...| ...                |

### 4. 3-bit Asynchronous Up/Down Counter with Mode Control

*   **Implementation:**  Uses three flip-flops and additional logic gates (typically AND and OR gates) to control whether the counter counts up or down.
*   **Logic:**
    *   A "Mode" input determines the counting direction.
    *   If Mode = 1, the counter counts up.
    *   If Mode = 0, the counter counts down.
    *   The clock input of each flip-flop (except the first) is derived from a combination of the Q and Q' outputs of the preceding flip-flop, depending on the mode.
    *   Typically implemented using multiplexers to select Q or Q' based on the mode control.

*   **Example (Conceptual):**

    ```
    Clock --> Flip-Flop 0 (Q0)

    Mode  ---\   AND Gate --\
               >-------------  >--- OR Gate --> Flip-Flop 1 Clock
    Q0    ---/   AND Gate --/  |
                                |
    Mode' ---\   AND Gate --\  |
               >-------------  >---/
    Q0'   ---/   AND Gate --/
    ```

    *Q0 is connected to an AND gate where one of the inputs is Mode, the output of this AND gate is connected to an OR gate. Q0' is connected to another AND gate where one of the inputs is Mode', the output of this AND gate is connected to the OR gate where the output of the first AND gate is connected. This OR gate outputs the clock signal for Flip-Flop 1.*
    *Similar arrangement for other flip-flops*

*   **Truth Table (Simplified):**

    | Mode | Clock Cycle | Q2 | Q1 | Q0 |
    |------|-------------|----|----|----|
    | 1 (Up) | 0           | 0  | 0  | 0  |
    | 1 (Up) | 1           | 0  | 0  | 1  |
    | 1 (Up) | 2           | 0  | 1  | 0  |
    | 1 (Up) | 3           | 0  | 1  | 1  |
    | ...    | ...         | ...| ...| ...|
    | 0 (Down)| 0           | 1  | 1  | 1  |
    | 0 (Down)| 1           | 1  | 1  | 0  |
    | 0 (Down)| 2           | 1  | 0  | 1  |
    | 0 (Down)| 3           | 1  | 0  | 0  |
    | ...    | ...         | ...| ...| ...|

### 5. Mod-N Counter

*   **Concept:**  A counter that counts from 0 to N-1 and then resets to 0. 'N' is the modulus.
*   **Implementation:**  Uses a standard binary counter (e.g., an up counter) and a combinational logic circuit to detect the count N and reset the counter.
*   **Logic:**
    *   The binary counter counts up.
    *   A decoding circuit (typically a NAND gate) detects when the count reaches N.  The inputs to the decoding circuit are the Q outputs of the flip-flops.
    *   The output of the decoding circuit is used to reset the flip-flops asynchronously (or synchronously) to 000.
*   **Example: Mod-5 Counter (counts from 0 to 4):**

    *   Requires 3 flip-flops (because 5 is between 2^2 and 2^3, so we need 3 bits to represent the states from 0 to 4)
    *   Decoding: We want the counter to reset when the count reaches 5 (101 in binary).  Therefore, the NAND gate should have inputs Q2 and Q0.
    *   Circuit:
        *   Standard 3-bit asynchronous up counter.
        *   NAND gate with inputs Q2 and Q0.
        *   The output of the NAND gate is connected to the asynchronous reset (CLR) inputs of all the flip-flops.  (This will reset the flip-flops to 000 when the NAND gate output goes low).

*   **Mod-N Calculation:** To design a MOD-N counter, determine the smallest integer power of 2 (2^k) greater than or equal to N. Then the number of flip-flops required is k.

### 6. Advantages and Limitations of Asynchronous Counters

*   **Advantages:**
    *   Simple to design and implement.
    *   Requires fewer components compared to synchronous counters.

*   **Limitations:**
    *   **Propagation Delay:** The cumulative delay of the flip-flops can limit the maximum operating frequency of the counter. This is because the output changes ripple through the flip-flops, and the final output might not be stable until after a certain delay.
    *   **Spurious Outputs (Glitches):**  Due to the propagation delay, intermediate states can appear briefly at the outputs before the counter settles to its final state. These brief, unwanted pulses are called glitches.
    *   **Not Suitable for High-Speed Applications:** Due to the cumulative delay, asynchronous counters are not suitable for applications that require high-speed counting.

### 7. Simulation and Verification

*   Use digital logic simulation software (e.g., Logisim, Multisim, Proteus) to simulate the designed counters.
*   Verify that the counters operate correctly according to their specified functionality (up, down, up/down, mod-N).
*   Observe the propagation delay and potential glitches in the simulation.
*   Experiment with different clock frequencies to determine the maximum operating frequency of the counter.

### Practice Questions/Exercises

1.  **Design a 3-bit asynchronous down counter using JK flip-flops.**  Provide the logic diagram.
    *   **Answer:** Similar to the T flip-flop implementation, but with J and K inputs tied HIGH (logic 1) for toggle behavior. Connect the Q' output of each flip-flop to the clock input of the next.

2.  **Design a Mod-7 counter using a 3-bit asynchronous up counter and a NAND gate.** Show the connections.
    *   **Answer:** Mod-7 means it counts from 0 to 6 (000 to 110).  Therefore, reset when the count reaches 7 (111).  Connect Q2, Q1, and Q0 to the inputs of the NAND gate. The output of the NAND gate is connected to the CLR of each flip-flop.

3.  **What is the maximum frequency at which a 3-bit asynchronous counter can operate if each flip-flop has a propagation delay of 10 ns?**
    *   **Answer:** The total propagation delay is 3 * 10 ns = 30 ns. The period of the clock signal must be greater than the propagation delay. Therefore, the minimum period is 30 ns, and the maximum frequency is 1 / (30 * 10^-9) = 33.33 MHz.

4.  **Explain why asynchronous counters are not suitable for high-speed applications.**
    *   **Answer:** Due to the cumulative propagation delay.  Each flip-flop adds to the delay, making the total delay significant at higher frequencies, resulting in incorrect counting.

5.  **How can you eliminate glitches in an asynchronous counter?**
    *   **Answer:**  While you can't completely eliminate them in asynchronous counters, you can reduce their impact.  One technique is to use a *synchronous* counter design, where all flip-flops are clocked simultaneously, thus mitigating the ripple effect and associated glitches. Additionally, adding output latches or filters can help mask these brief transients.

### Important Points to Remember

*   Asynchronous counters are simple but have limitations.
*   Propagation delay is a critical factor in determining the maximum operating frequency.
*   Glitches can occur due to the ripple effect.
*   Mod-N counters use combinational logic to reset the counter at a specific count.
*   Synchronous counters are generally preferred for high-speed applications due to their reduced propagation delay.
