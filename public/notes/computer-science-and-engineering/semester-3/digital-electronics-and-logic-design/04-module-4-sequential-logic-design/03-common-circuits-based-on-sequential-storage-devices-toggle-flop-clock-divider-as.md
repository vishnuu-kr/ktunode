---
title: "Common circuits based on sequential storage devices - toggle flop clock divider, asynchronous ripple counter, shift register."
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 4: Sequential Logic Design  :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad60"
status: "completed"
scrapedAt: "2026-05-20T16:24:00.437Z"
---
## DIGITAL ELECTRONICS AND LOGIC DESIGN - Module 4: Sequential Logic Design - Common Sequential Circuits

**Topic:** Common circuits based on sequential storage devices - toggle flop clock divider, asynchronous ripple counter, shift register.

**Learning Outcomes:** Upon completion of this topic, you should be able to:

*   Understand the operation of a toggle flip-flop as a frequency divider.
*   Explain the working principle of an asynchronous ripple counter.
*   Design and analyze asynchronous ripple counters for specific modulus (MOD) numbers.
*   Describe the operation of different types of shift registers (SISO, SIPO, PISO, PIPO).
*   Explain applications of shift registers.

---

### 1. Toggle Flip-Flop as a Clock Divider

*   **Key Concept:** A toggle flip-flop (T flip-flop) changes its output state with each clock pulse. When the T input is held HIGH (logic 1), the flip-flop toggles its output on every active clock edge (rising or falling, depending on the flip-flop design).

*   **Definition:** A T flip-flop is a type of flip-flop that toggles its output state (Q) whenever the T input is HIGH and a clock pulse occurs.

*   **Operation as Frequency Divider:** If the T input is permanently tied HIGH, the output frequency (f<sub>out</sub>) of the T flip-flop is half the input clock frequency (f<sub>in</sub>).  Therefore, it acts as a divide-by-2 frequency divider.

    *   **Equation:** f<sub>out</sub> = f<sub>in</sub> / 2

*   **Example:** If a T flip-flop with T=1 is clocked with a 1 MHz signal, the output will be a 500 kHz signal.

*   **Cascading:** Multiple T flip-flops can be cascaded to create frequency dividers with larger division ratios (e.g., divide-by-4, divide-by-8, etc.).  Each flip-flop divides the frequency of the preceding stage by 2.

*   **Diagram:**

    ```
    Clock --> | T Flip-Flop | --> Q (f_in / 2)
               | (T=1)       |
    ```

*   **Important Point:** The output waveform of a T flip-flop acts as a square wave with a frequency equal to half the input clock frequency.

*   **Practice Question 1:** What is the output frequency if a 4 MHz clock signal is applied to a T flip-flop with T=1?

    *   **Answer:** f<sub>out</sub> = 4 MHz / 2 = 2 MHz

*   **Practice Question 2:**  How many T flip-flops are required to create a divide-by-16 frequency divider?

    *   **Answer:** Since each flip-flop divides by 2, to get a division of 16 (2<sup>4</sup>), you need 4 flip-flops.

---

### 2. Asynchronous Ripple Counter

*   **Key Concept:** An asynchronous counter (also called a ripple counter) is a type of counter where the clock input of each successive flip-flop is triggered by the output of the preceding flip-flop.

*   **Definition:** A digital counter in which the flip-flops are not clocked simultaneously.  The output of one flip-flop triggers the clock input of the next flip-flop in the chain.

*   **Working Principle:**
    *   Typically, J-K flip-flops configured in toggle mode (J=K=1) are used.  A T flip-flop can also be used.
    *   The LSB (Least Significant Bit) flip-flop is clocked directly by the input clock signal.
    *   The output of the LSB flip-flop acts as the clock for the next flip-flop (2nd LSB).
    *   This "rippling" effect of the clock from one flip-flop to the next gives it the name "ripple counter."

*   **Counting Sequence:**
    *   **Up-Counter:** Counts upward (0, 1, 2, 3...). The Q output of each flip-flop clocks the next flip-flop.
    *   **Down-Counter:** Counts downward (..., 3, 2, 1, 0). The Q' (Q-bar) output of each flip-flop clocks the next flip-flop.

*   **Modulus (MOD) Number:**
    *   **Definition:** The MOD number of a counter represents the total number of unique states it can represent before it resets.
    *   **Formula:** For an n-bit binary counter, the maximum MOD number is 2<sup>n</sup>. A counter that counts from 0 to 2<sup>n</sup>-1 is a MOD-2<sup>n</sup> counter (also called a full-modulus counter).
    *   **Example:** A 3-bit counter can count from 0 (000) to 7 (111), so it's a MOD-8 counter.

*   **Advantages:** Simple to design and implement.

*   **Disadvantages:**
    *   **Propagation Delay:**  The cumulative delay due to each flip-flop triggering the next can be significant, especially for higher MOD numbers. This can lead to timing issues and inaccurate counts, especially at high clock frequencies. This delay is called ripple effect.
    *   **Decoding Glitches:** The output signals may exhibit glitches due to the asynchronous switching of the flip-flops.

*   **Example: MOD-4 Asynchronous Up-Counter (using J-K flip-flops)**

    *   Requires two J-K flip-flops (2 bits, 2<sup>2</sup> = 4 states: 00, 01, 10, 11).
    *   J and K inputs of both flip-flops are tied HIGH (J=K=1).
    *   The clock input is connected to the first flip-flop (LSB).
    *   The Q output of the first flip-flop is connected to the clock input of the second flip-flop.

    ```
    Clock --> | JK Flip-Flop 1 | --> Q0 (LSB) --> Clock of JK Flip-Flop 2
              | (J=K=1)       |
                              | JK Flip-Flop 2 | --> Q1 (MSB)
                              | (J=K=1)       |
    ```

*   **Example: MOD-8 Asynchronous Up-Counter:** This would require three J-K flip-flops similarly configured.

*   **Designing for Specific MOD Numbers (< 2<sup>n</sup>):**  To create an asynchronous counter with a MOD number less than 2<sup>n</sup> (where n is the number of flip-flops), you can use combinational logic (e.g., AND gate, NAND gate) to detect a specific count and reset all the flip-flops to 0.

    *   **Example: MOD-6 Counter (using 3 flip-flops):** We need to count from 0 to 5 (000 to 101). When the counter reaches 6 (110), the combinational logic must reset all flip-flops to 0.  A NAND gate connected to the Q outputs corresponding to '1' in the binary representation of 6 (i.e., Q2 and Q1) can be used. The output of the NAND gate is connected to the CLEAR (CLR) input of all flip-flops.

*   **Practice Question 3:** Design an asynchronous MOD-10 up-counter using J-K flip-flops.

    *   **Answer:**
        *   Requires 4 flip-flops (since 2<sup>3</sup> < 10 < 2<sup>4</sup>).
        *   Use J-K flip-flops configured in toggle mode (J=K=1).
        *   Connect the Q outputs corresponding to the binary representation of 10 (1010) to a NAND gate.
        *   The output of the NAND gate is connected to the CLEAR inputs of all flip-flops.

*   **Practice Question 4:** What is the maximum possible count for an asynchronous counter constructed using 5 flip-flops?

    *   **Answer:** 2<sup>5</sup> - 1 = 31

*   **Important Point:** Ripple counters suffer from propagation delay, limiting their use in high-speed applications. Decoding glitches can also be a problem.

---

### 3. Shift Registers

*   **Key Concept:** A shift register is a sequential logic circuit that can store and shift data bits in a serial or parallel manner. It consists of a series of flip-flops connected in a chain.

*   **Definition:** A digital circuit used to store and transfer data bits serially or in parallel, controlled by a clock signal.

*   **Types of Shift Registers (Based on Input and Output Methods):**

    *   **SISO (Serial In, Serial Out):** Data is entered serially (one bit at a time) and retrieved serially.
        *   **Operation:** Each clock pulse shifts the data one position to the right. The data at the rightmost flip-flop is the serial output.
        *   **Application:** Serial data communication, delay lines.

    *   **SIPO (Serial In, Parallel Out):** Data is entered serially, but all bits are available as parallel outputs simultaneously.
        *   **Operation:** Data is shifted in serially. After a certain number of clock pulses, all the bits are available at the outputs of the flip-flops.
        *   **Application:** Serial-to-parallel data conversion.

    *   **PISO (Parallel In, Serial Out):** Data is entered in parallel, but retrieved serially.
        *   **Operation:** Parallel data is loaded into the flip-flops. Then, data is shifted out serially one bit at a time.  Often requires a LOAD/SHIFT control signal.
        *   **Application:** Parallel-to-serial data conversion.

    *   **PIPO (Parallel In, Parallel Out):** Data is entered in parallel, and retrieved in parallel.
        *   **Operation:** Data is loaded in parallel and available in parallel. It essentially acts as a register for storing data.
        *   **Application:** Data storage, buffer register.

*   **Basic Shift Register Circuit (Using D Flip-Flops):** Each D flip-flop stores one bit. The Q output of one flip-flop is connected to the D input of the next flip-flop.

    ```
    Serial Data In --> | D Flip-Flop 1 | --> Q1 --> D input of | D Flip-Flop 2 | --> Q2 --> ... --> Serial Data Out
                      |                |                       |                |
                      | Clock          |                       | Clock          |
    ```

*   **Shift Left vs. Shift Right:**

    *   **Shift Right:** Data is shifted from left to right (as shown in the basic circuit above).
    *   **Shift Left:** The connections are reversed, data is shifted from right to left.

*   **Applications of Shift Registers:**

    *   **Serial-to-Parallel and Parallel-to-Serial Data Conversion:** As mentioned above.
    *   **Delay Lines:**  Introducing a specific delay to a signal. The delay is proportional to the number of flip-flops and the clock frequency.
    *   **Sequence Generators:** Generating specific sequences of bits.
    *   **Arithmetic Operations:**  Shift registers can be used for multiplication and division by powers of 2 (shifting left is equivalent to multiplication by 2, shifting right is equivalent to division by 2).
    *   **Ring Counter:** A shift register where the output of the last flip-flop is connected to the input of the first flip-flop.  The ring counter generates a repeating sequence of pulses.
    *   **Johnson Counter (Twisted Ring Counter):**  A ring counter where the complemented output of the last flip-flop is connected to the input of the first flip-flop. It generates a unique sequence twice the length of the ring counter.

*   **Example: 4-bit SIPO Shift Register:** This register can convert a 4-bit serial data stream into a 4-bit parallel output. After 4 clock pulses, the 4 bits of data are available on the parallel outputs.

*   **Practice Question 5:** Explain the difference between a ring counter and a Johnson counter.

    *   **Answer:** Both are based on shift registers. In a ring counter, the output of the last flip-flop is directly connected to the input of the first flip-flop.  In a Johnson counter, the *complemented* output of the last flip-flop is connected to the input of the first flip-flop. The Johnson counter generates a sequence twice the length of the ring counter.

*   **Practice Question 6:**  A 5-bit serial-in, serial-out shift register initially contains all zeros.  The input sequence 10110 is applied. After how many clock pulses will the register contain the sequence 10110?

    *   **Answer:** After 5 clock pulses. Each clock pulse shifts one bit into the register.

*   **Important Point:** Shift registers are fundamental building blocks in many digital systems, especially for data handling and communication. Understanding the different types and their applications is crucial.
