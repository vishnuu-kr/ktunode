---
title: "4-bit adder and subtractor using  MSI device IC 7483."
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aedd"
status: "completed"
scrapedAt: "2026-05-20T16:24:21.544Z"
---
## DIGITAL LAB - Module 2: Combinational Logic Circuits - 4-Bit Adder/Subtractor using IC 7483

**Topic:** 4-Bit Adder and Subtractor using MSI Device IC 7483

**Description:** This module focuses on designing and implementing a combinational logic circuit for adding and subtracting two 4-bit binary numbers using the 7483 Integrated Circuit (IC).

**Learning Outcomes:**

*   Understand the principles of binary addition and subtraction.
*   Learn the functionality and pin configuration of the 7483 adder IC.
*   Design a 4-bit adder/subtractor circuit using the 7483 IC.
*   Implement and test the designed circuit.
*   Analyze the circuit's operation and troubleshoot potential issues.

---

### 1. Key Concepts and Definitions:

*   **Combinational Logic Circuit:** A digital circuit whose output(s) at any instant of time depend(s) only on the input(s) present at that instant.  It has no memory elements.
*   **Binary Addition:** The process of adding two binary numbers.  The rules are:
    *   0 + 0 = 0
    *   0 + 1 = 1
    *   1 + 0 = 1
    *   1 + 1 = 10 (0 with a carry of 1)
*   **Binary Subtraction:** The process of subtracting one binary number from another.  The rules are:
    *   0 - 0 = 0
    *   1 - 0 = 1
    *   1 - 1 = 0
    *   0 - 1 = 1 (with a borrow of 1)  This often involves using 2's complement for easier implementation.
*   **2's Complement:** A mathematical operation on binary numbers, and is widely used in computer science as a way to represent signed integers. To find the 2's complement of a binary number:
    1.  Invert all the bits (change 0s to 1s and 1s to 0s) - This is called the 1's complement.
    2.  Add 1 to the 1's complement.
*   **Full Adder:** A combinational circuit that adds two single-bit binary numbers (A and B) and a carry-in bit (Cin) to produce a sum (S) and a carry-out bit (Cout).
*   **Half Adder:** A combinational circuit that adds two single-bit binary numbers (A and B) to produce a sum (S) and a carry-out bit (Cout).  It doesn't take a carry-in.
*   **Ripple Carry Adder:** An adder circuit where the carry-out of each full adder stage is connected to the carry-in of the next higher stage.  The 7483 is an example of a ripple carry adder.
*   **MSI (Medium Scale Integration):** Refers to ICs containing between 10 and 100 gates (or equivalent complexity). The 7483 is an MSI device.
*   **IC 7483:** A 4-bit binary full adder IC.  It performs the addition of two 4-bit binary numbers along with a carry-in.  It produces a 4-bit sum and a carry-out.
*   **Sign Bit:** In signed binary number representation, the leftmost bit indicating the sign of the number (0 for positive, 1 for negative).
*   **Overflow:**  Occurs when the result of an arithmetic operation is too large to be represented in the available number of bits.

### 2. The IC 7483: 4-Bit Binary Full Adder

*   **Functionality:** The 7483 is a 4-bit binary full adder. It adds two 4-bit binary numbers (A3A2A1A0 and B3B2B1B0) and a carry-in (C0) to produce a 4-bit sum (S3S2S1S0) and a carry-out (C4).
*   **Pin Diagram (Example):**  *(Note: Pin diagrams can vary slightly based on manufacturer.  Always consult the datasheet for the specific IC being used.)*

    ```
              VCC --------------------------------- GND
              |                                   |
          A1 --| 1                               16 |-- VCC (+5V)
          B1 --| 2                               15 |-- B4
          A2 --| 3                               14 |-- A4
          B2 --| 4                               13 |-- Sum4 (S4)
          A3 --| 5                               12 |-- C4 (Carry Out)
          B3 --| 6                               11 |-- Sum3 (S3)
          C0 --| 7                               10 |-- Sum2 (S2)
        GND --| 8                                9 |-- Sum1 (S1)
              |                                   |
             --------------------------------------
    ```

    *   **A1-A4:** Input bits of the first 4-bit number. A1 is the least significant bit (LSB), A4 is the most significant bit (MSB).
    *   **B1-B4:** Input bits of the second 4-bit number. B1 is the LSB, B4 is the MSB.
    *   **C0:** Carry-in input.
    *   **S1-S4:** Sum output bits. S1 is the LSB, S4 is the MSB.
    *   **C4:** Carry-out output.
    *   **VCC:** Positive supply voltage (typically +5V).
    *   **GND:** Ground.

*   **Truth Table (Partial - Shows basic functionality):**  A complete truth table would be quite large for 4-bit numbers. This example shows the addition of two 2-bit numbers for simplicity and understanding:

    | A1 | A0 | B1 | B0 | C0 | S1 | S0 | C2 |
    |---|---|---|---|---|---|---|---|
    | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
    | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
    | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
    | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
    | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 0 |
    | ... | ... | ... | ... | ... | ... | ... | ... |
    | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

### 3. Designing a 4-Bit Adder/Subtractor Circuit:

The core idea is to use the 7483 for addition and then cleverly modify one of the inputs to perform subtraction using 2's complement.

**Steps:**

1.  **Addition:**  For simple addition, connect the two 4-bit numbers (A and B) to the A and B inputs of the 7483, set C0 (carry-in) to 0, and the output will be the sum (S) along with the carry-out (C4).
2.  **Subtraction (A - B):**  To subtract B from A (A - B), we need to:
    *   Take the 2's complement of B.
    *   Add the 2's complement of B to A.

    The 2's complement of B is found by inverting all the bits of B (1's complement) and then adding 1.  We can achieve this using XOR gates and the carry-in (C0) of the 7483.

3.  **Implementation:**
    *   **XOR Gates:** Use four XOR gates. Connect one input of each XOR gate to a bit of the B input (B1, B2, B3, B4). Connect the other input of all the XOR gates to a control signal (SUB/ADD).
    *   **SUB/ADD Control Signal:** This signal determines whether the circuit performs addition or subtraction.
        *   **SUB/ADD = 0 (Addition):** The XOR gates act as buffers (passing B through unchanged). C0 is set to 0.  The 7483 performs A + B.
        *   **SUB/ADD = 1 (Subtraction):** The XOR gates invert the bits of B (1's complement).  C0 is set to 1.  The 7483 effectively performs A + (2's complement of B), which is equivalent to A - B.
    *   **Connect XOR outputs:** Connect the outputs of the XOR gates to the B inputs of the 7483. Connect the A inputs of the 7483 directly to the A input bits.  Connect C0 to the SUB/ADD control signal.
    *   **Outputs:** The sum outputs (S1-S4) of the 7483 represent the result of either A + B (if SUB/ADD = 0) or A - B (if SUB/ADD = 1).  C4 acts as the carry or borrow output.

4.  **Overflow Detection:**  Important for signed numbers.  Overflow occurs if the carry-in to the MSB adder is different from the carry-out of the MSB adder. In our case, overflow happens if the carry-in to the full adder for S4 (i.e., C3) is different than the carry-out from the full adder for S4 (C4).  An XOR gate can be used to detect overflow.

**Circuit Diagram (Conceptual):**

```
                                            SUB/ADD
                                              |
                                              |
                A1 --- 7483 (A1)            |
                A2 --- 7483 (A2)            |
                A3 --- 7483 (A3)            |
                A4 --- 7483 (A4)            |
                |                           |
B1 --- XOR --- 7483 (B1)       -----------|------- C0
B2 --- XOR --- 7483 (B2)                    |
B3 --- XOR --- 7483 (B3)                    |
B4 --- XOR --- 7483 (B4)                    |
                |                           |
                S1 ---                  ---- S1
                S2 ---                  ---- S2
                S3 ---                  ---- S3
                S4 ---                  ---- S4
                                            C4
```

### 4. Implementation and Testing:

1.  **Hardware:**
    *   7483 4-bit adder IC
    *   7486 Quad XOR Gate IC (or equivalent)
    *   Breadboard
    *   Connecting wires
    *   Power supply (+5V)
    *   Logic probe or multimeter (for debugging)
    *   DIP switches or jumpers (for inputting binary numbers)
    *   LEDs with current-limiting resistors (for displaying outputs)

2.  **Wiring:**  Carefully wire the circuit according to the circuit diagram. Double-check all connections before applying power.
3.  **Testing:**
    *   Apply various binary inputs to A and B, and set SUB/ADD to 0 (addition) and 1 (subtraction).
    *   Observe the outputs (S1-S4 and C4).
    *   Verify that the outputs correspond to the correct sum or difference.
    *   Test edge cases and boundary conditions to ensure the circuit's robustness.
4.  **Debugging:**  If the circuit does not function correctly:
    *   Use a logic probe or multimeter to trace the signals through the circuit and identify any errors.
    *   Check for loose connections or short circuits.
    *   Verify the power supply voltage is correct.
    *   Consult the datasheets for the ICs to ensure proper pin configurations and operating conditions.

### 5. Analysis and Troubleshooting:

*   **Propagation Delay:**  The 7483, being a ripple carry adder, has a propagation delay.  The carry bit needs to propagate through all the full adder stages. This can limit the speed of the circuit for very high-frequency applications.
*   **Fan-out:** The output of each gate can only drive a limited number of inputs.  Consider the fan-out limitations of the ICs when designing larger circuits.
*   **Ground Bounce:**  Fast switching signals can cause voltage fluctuations on the ground line, leading to errors.  Use decoupling capacitors (typically 0.1uF) close to the VCC and GND pins of the ICs to minimize ground bounce.
*   **Unused Inputs:** Tie any unused inputs of logic gates to either VCC or GND (depending on the gate type) to prevent them from floating and causing unpredictable behavior.  For example, if using a quad XOR gate and only needing three, tie one input of the fourth XOR to GND.
*   **Number Representation:** Remember that the output S1-S4 and C4 represent a binary number. When subtracting, interpret the result correctly considering whether it is positive or negative. If you are representing the result as a signed number, the MSB (S4) represents the sign bit.
*   **Overflow/Underflow:** Pay careful attention to overflow when performing addition of signed numbers or subtraction that results in a number too negative to represent with the available bits.

### 6. Examples:

**Example 1: Addition (A = 5, B = 3)**

*   A = 0101
*   B = 0011
*   SUB/ADD = 0
*   C0 = 0
*   7483 Output: S = 1000 (8), C4 = 0
*   Result: 5 + 3 = 8

**Example 2: Subtraction (A = 5, B = 3)**

*   A = 0101
*   B = 0011
*   SUB/ADD = 1
*   C0 = 1
*   B after XOR gates: 1100 (1's complement of 3)
*   Carry in to the 7483 = 1 (SUB/ADD)
*   7483 effectively computes 0101 + 1100 + 1 = 0101 + 1101 = 0010 with C4 = 1
*   7483 Output: S = 0010 (2), C4 = 1 (Discard C4, as we have already taken it into account with 2s complement)
*   Result: 5 - 3 = 2

**Example 3: Subtraction (A = 3, B = 5)**

*   A = 0011
*   B = 0101
*   SUB/ADD = 1
*   C0 = 1
*   B after XOR gates: 1010 (1's complement of 5)
*   Carry in to the 7483 = 1 (SUB/ADD)
*   7483 effectively computes 0011 + 1010 + 1 = 0011 + 1011 = 1110 with C4 = 0
*   7483 Output: S = 1110 (-2 in 2's complement), C4 = 0
*   Result: 3 - 5 = -2 (Correct representation using 2's complement)

### 7. Practice Questions/Exercises:

1.  Design a 4-bit adder/subtractor circuit using the 7483 IC and XOR gates.  Draw the complete circuit diagram.

    *Answer: See the "Circuit Diagram (Conceptual)" section above. A more detailed diagram will show the specific pin connections of the 7483 and 7486 ICs.*

2.  What is the purpose of the SUB/ADD control signal in the adder/subtractor circuit?

    *Answer: The SUB/ADD control signal determines whether the circuit performs addition (SUB/ADD = 0) or subtraction (SUB/ADD = 1).*

3.  Explain how 2's complement is used in the subtraction process.

    *Answer: To subtract B from A (A - B), we take the 2's complement of B, then add the 2's complement of B to A. The 2's complement is found by inverting all the bits of B (1's complement) and adding 1.  The SUB/ADD signal and XOR gates facilitate this process.*

4.  What IC can be used to implement the XOR gates and what is the part number?

    *Answer: The 7486 IC is a quad XOR gate IC.*

5.  What is the range of signed decimal numbers that can be represented by our 4-bit adder/subtractor output?

    *Answer:  With four bits, the range of signed numbers represented using 2's complement is -8 to +7.*

6.  If A= 1100 and B = 0011 and SUB/ADD = 1, what will be the output of the 7483? Verify the answer by computing by hand.

    *Answer: B after XOR gates with SUB/ADD = 1: 1100 (1's complement of 3).  C0 = 1. The 7483 will compute 1100 + 1100 + 1 = 1100 + 1101 = 1001 with C4 = 1. Output S = 1001 and C4 = 1.  In 2's complement, 1001 represents -7. Therefore, 12 - 3 = 9 (12 is 1100, -3 represented in 2s complement is 1101). The answer with C4=1 and S = 1001 will only work correctly if C4 is added.  *

### 8. Important Points to Remember:

*   Always consult the datasheets for the ICs to verify pin configurations and operating characteristics.
*   Pay attention to signal polarity and voltage levels.
*   Proper grounding and decoupling are crucial for stable operation.
*   Understand the limitations of ripple carry adders in terms of propagation delay.
*   Be aware of overflow conditions when performing arithmetic operations.
*   When subtracting, remember to interpret the 2's complement output correctly if the result is negative.
*   Test the circuit thoroughly with various inputs to ensure proper functionality.
