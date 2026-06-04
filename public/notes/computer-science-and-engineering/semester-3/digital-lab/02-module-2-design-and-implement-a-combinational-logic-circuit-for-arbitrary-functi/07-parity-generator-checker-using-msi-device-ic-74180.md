---
title: "Parity generator / checker using  MSI device IC 74180"
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aede"
status: "completed"
scrapedAt: "2026-05-20T16:24:22.244Z"
---
## DIGITAL LAB: Module 2 - Parity Generator/Checker using IC 74180

**Topic:** Parity generator / checker using MSI device IC 74180

**Learning Outcomes:**

*   Understand the concept of parity and its use in error detection.
*   Understand the operation of the IC 74180 parity generator/checker.
*   Design a parity generator circuit using the IC 74180.
*   Design a parity checker circuit using the IC 74180.
*   Implement and test parity generator/checker circuits using the IC 74180.

---

### 1. Key Concepts and Definitions

*   **Parity:** Parity refers to whether the number of 1s in a binary code is even or odd. It's a simple form of error detection.

*   **Even Parity:** A parity bit is added to a group of bits to ensure that the total number of 1s (including the parity bit) is even.

*   **Odd Parity:** A parity bit is added to a group of bits to ensure that the total number of 1s (including the parity bit) is odd.

*   **Parity Generator:** A circuit that generates a parity bit based on the input data.

*   **Parity Checker:** A circuit that checks the parity of the received data, including the parity bit, to detect errors.

*   **Error Detection:** The ability to identify whether data has been corrupted during transmission or storage.  Parity checking is a single-bit error detection technique. It cannot detect an even number of errors.

*   **MSI (Medium-Scale Integration):** A type of integrated circuit (IC) containing approximately 10 to 100 gates or equivalent components.  The 74180 is an example of an MSI device.

*   **IC 74180:** An integrated circuit designed specifically to generate and check parity.  It has multiple inputs for data and dedicated outputs for even and odd parity generation/checking.

---

### 2. Understanding Parity Generation and Checking

#### 2.1. Parity Generation

The process of adding a parity bit to a data stream to ensure either even or odd parity.

*   **Even Parity Generation:** If the number of 1s in the data is even, the parity bit is set to 0. If the number of 1s in the data is odd, the parity bit is set to 1.

*   **Odd Parity Generation:** If the number of 1s in the data is even, the parity bit is set to 1. If the number of 1s in the data is odd, the parity bit is set to 0.

#### 2.2. Parity Checking

The process of verifying the parity of the received data.

*   **Even Parity Checking:** If the total number of 1s (data + parity bit) is even, there is no error (or an even number of errors). If the total number of 1s is odd, an error is detected.

*   **Odd Parity Checking:** If the total number of 1s (data + parity bit) is odd, there is no error (or an even number of errors). If the total number of 1s is even, an error is detected.

---

### 3. IC 74180: Parity Generator/Checker

#### 3.1. Pin Diagram and Functional Description

(Include a diagram of the 74180 pinout here. Common pin names are A-I (data inputs), Σ Even Input, Σ Odd Input, Even Output, Odd Output, Vcc, and GND.)

**Key Pins and Their Functions:**

*   **A-I (Data Inputs):**  These are the inputs for the data bits for which parity needs to be generated or checked. The IC 74180 can handle up to 9 data bits.
*   **Σ Even Input (Pin 9):**  This input allows cascading multiple 74180 ICs for larger data words.  It's used to pass the parity information from a previous stage. When using only one 74180, it is typically tied to ground (LOW) for even parity generation/checking, or Vcc (HIGH) for odd parity generation/checking.
*   **Σ Odd Input (Pin 8):** Similar to the Σ Even Input, this input is used for cascading and passing parity information.  When using only one 74180, it is typically tied to Vcc (HIGH) for even parity generation/checking, or ground (LOW) for odd parity generation/checking.  Note the inverse relationship between this pin and the Σ Even Input when choosing the parity type.
*   **Even Output (Pin 6):**  This output is HIGH when the parity of the inputs (A-I, and Σ Even/Odd) is even.
*   **Odd Output (Pin 7):** This output is HIGH when the parity of the inputs (A-I, and Σ Even/Odd) is odd.
*   **Vcc (Pin 14):**  Power supply (typically +5V).
*   **GND (Pin 7):** Ground.

#### 3.2. Truth Table of IC 74180

(Include a simplified truth table here, showing the outputs (Even Output and Odd Output) based on the number of HIGH inputs (A-I) and the states of Σ Even Input and Σ Odd Input.)

A simplified table would show:

| Number of HIGH Inputs (A-I) | Σ Even Input | Σ Odd Input | Even Output | Odd Output |
|---|---|---|---|---|
| Even | LOW | HIGH | HIGH | LOW |
| Even | HIGH | LOW | LOW | HIGH |
| Odd | LOW | HIGH | LOW | HIGH |
| Odd | HIGH | LOW | HIGH | LOW |

**Understanding the Truth Table:**

*   The number of HIGH inputs (A-I) represents the number of 1s in the data.
*   The Σ Even Input and Σ Odd Input are used for cascading and to select the desired parity (even or odd).
*   The Even Output goes HIGH if the total parity (data inputs and Σ inputs) is even.
*   The Odd Output goes HIGH if the total parity (data inputs and Σ inputs) is odd.

#### 3.3. Configuring for Even Parity

To configure the 74180 for even parity generation/checking when *not* cascading:

*   Connect **Σ Even Input** to **GND (LOW)**.
*   Connect **Σ Odd Input** to **Vcc (HIGH)**.

#### 3.4. Configuring for Odd Parity

To configure the 74180 for odd parity generation/checking when *not* cascading:

*   Connect **Σ Even Input** to **Vcc (HIGH)**.
*   Connect **Σ Odd Input** to **GND (LOW)**.

---

### 4. Design Examples

#### 4.1. 4-bit Even Parity Generator

1.  **Inputs:** 4 data bits (e.g., D3, D2, D1, D0). Connect these to any four of the A-I inputs on the 74180. Leave the remaining inputs (A-I) unconnected or connect them to ground (LOW).
2.  **Σ Inputs:** Configure for even parity: Σ Even Input = GND, Σ Odd Input = Vcc.
3.  **Parity Bit:** The **Odd Output** is the even parity bit.  Connect this output to the parity bit position in your transmitted data. If the Even Output is needed (e.g., for indication) invert the Odd output to get Even.

**Explanation:** The Odd Output will be HIGH (1) when the number of 1s in the data inputs (D3-D0) is odd. This ensures the total number of 1s (data + parity bit) will be even.

#### 4.2. 4-bit Even Parity Checker

1.  **Inputs:** 4 data bits (e.g., D3, D2, D1, D0) *and* the parity bit (generated by the even parity generator). Connect these five bits to any five of the A-I inputs on the 74180. Leave the remaining inputs (A-I) unconnected or connect them to ground (LOW).
2.  **Σ Inputs:** Configure for even parity: Σ Even Input = GND, Σ Odd Input = Vcc.
3.  **Error Detection:**
    *   The **Odd Output** is HIGH, an error is detected.
    *   The **Even Output** is HIGH, no error is detected (or there are an even number of errors).

**Explanation:** If there are no errors (or an even number of errors), the total number of 1s in the inputs (D3-D0 + parity bit) will be even, and the Even Output will be HIGH. If an error occurs, the total number of 1s will be odd, and the Odd Output will be HIGH.

#### 4.3. 4-bit Odd Parity Generator

1.  **Inputs:** 4 data bits (e.g., D3, D2, D1, D0). Connect these to any four of the A-I inputs on the 74180. Leave the remaining inputs (A-I) unconnected or connect them to ground (LOW).
2.  **Σ Inputs:** Configure for odd parity: Σ Even Input = Vcc, Σ Odd Input = GND.
3.  **Parity Bit:** The **Even Output** is the odd parity bit. If the Odd output is needed invert the Even output to get odd.

**Explanation:** The Even Output will be HIGH (1) when the number of 1s in the data inputs (D3-D0) is even. This ensures the total number of 1s (data + parity bit) will be odd.

#### 4.4. 4-bit Odd Parity Checker

1.  **Inputs:** 4 data bits (e.g., D3, D2, D1, D0) *and* the parity bit (generated by the odd parity generator). Connect these five bits to any five of the A-I inputs on the 74180. Leave the remaining inputs (A-I) unconnected or connect them to ground (LOW).
2.  **Σ Inputs:** Configure for odd parity: Σ Even Input = Vcc, Σ Odd Input = GND.
3.  **Error Detection:**
    *   The **Even Output** is HIGH, an error is detected.
    *   The **Odd Output** is HIGH, no error is detected (or there are an even number of errors).

**Explanation:** If there are no errors (or an even number of errors), the total number of 1s in the inputs (D3-D0 + parity bit) will be odd, and the Odd Output will be HIGH. If an error occurs, the total number of 1s will be even, and the Even Output will be HIGH.

#### 4.5 Cascading 74180 ICs

For data words larger than 9 bits, multiple 74180 ICs can be cascaded.

1. The Even and Odd Outputs from the first 74180 become the Σ Even and Σ Odd Inputs to the second 74180.
2. Ensure both ICs are configured for the *same* parity type (either even or odd).
3.  If cascading more than two 74180s, the Even/Odd outputs of the previous ICs become the Σ Even/Odd inputs to the next IC.
4. The final parity bits will be on the last 74180.

---

### 5. Implementation and Testing

#### 5.1. Materials Required

*   IC 74180
*   Breadboard
*   Connecting wires
*   Logic probe or multimeter
*   DC power supply (+5V)
*   Data input switches or signal generator (optional)
*   LEDs (optional, for visual indication of outputs)

#### 5.2. Implementation Steps

1.  Connect the IC 74180 to the breadboard.
2.  Connect the power supply (Vcc and GND).
3.  Wire the data inputs (A-I) to switches or a signal generator.
4.  Configure the Σ Even Input and Σ Odd Input for the desired parity type (even or odd).
5.  Connect the Even Output and Odd Output to LEDs (with current limiting resistors) or a logic probe.

#### 5.3. Testing Steps

1.  Apply different data patterns to the inputs (A-I).
2.  Observe the outputs (Even Output and Odd Output).
3.  Verify that the parity is generated/checked correctly according to the chosen parity type (even or odd).
4.  If using LEDs, observe the LED states to confirm the parity.
5.  If using a logic probe, check the logic levels of the outputs.

---

### 6. Practice Questions/Exercises

1.  **Design a 7-bit even parity generator using the 74180.** Show the pin connections.
    *   **Answer:** Connect the 7 data bits to any 7 of the A-I inputs. Connect Σ Even Input to GND, Σ Odd Input to Vcc. The Odd Output is the even parity bit.

2.  **Design a 5-bit odd parity checker using the 74180.**  Specify which output indicates an error.
    *   **Answer:** Connect the 5 bits (4 data bits + parity bit) to any 5 of the A-I inputs. Connect Σ Even Input to Vcc, Σ Odd Input to GND. The Even Output is HIGH when an error is detected.

3.  **What are the roles of the Σ Even and Σ Odd inputs in the 74180?**
    *   **Answer:** They are used for cascading multiple 74180 ICs for larger data words and for selecting either even or odd parity when not cascading.

4.  **Explain why parity checking can only detect single-bit errors (or an odd number of errors).**
    *   **Answer:** Because if two bits (or any even number of bits) are flipped, the parity (even or odd) remains the same, so the checker will not detect an error.

5.  **How do you configure the 74180 for even parity generation (without cascading)?**
    *   **Answer:** Connect Σ Even Input to GND and Σ Odd Input to Vcc.

---

### 7. Important Points to Remember

*   **Parity checking is a simple but limited form of error detection.** It can only detect single-bit errors (or odd numbers of errors). It cannot detect an even number of errors.
*   **The Σ Even Input and Σ Odd Input are crucial for cascading and selecting the parity type.**
*   **Properly grounding unused inputs (A-I) is good practice, although not strictly necessary for functionality.** Floating inputs can lead to unpredictable behavior in some digital circuits.
*   **Always refer to the 74180 datasheet for detailed specifications and timing characteristics.**
*   **Ensure you understand the difference between parity generation and parity checking.**
*   **When cascading, all ICs must be configured for the same parity type (even or odd).**

These notes should provide a solid foundation for understanding and implementing parity generation/checking using the IC 74180. Remember to experiment and practice to solidify your knowledge!
