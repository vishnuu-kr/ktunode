---
title: "Magnitude Comparator using MSI device IC 7485"
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aedf"
status: "completed"
scrapedAt: "2026-05-20T16:24:23.152Z"
---
## DIGITAL LAB - Module 2: Magnitude Comparator using IC 7485

**Topic:** Magnitude Comparator using MSI device IC 7485

**Description:** Design and implement a combinational logic circuit for arbitrary functions, specifically focusing on a magnitude comparator using the 7485 integrated circuit.

**Learning Outcomes:**

*   Understand the concept of a magnitude comparator and its applications.
*   Explain the functionality of the 7485 4-bit magnitude comparator IC.
*   Design a magnitude comparator circuit using the 7485 for comparing numbers larger than 4 bits.
*   Analyze the truth table and logic diagram of the 7485 IC.
*   Implement and test a magnitude comparator circuit using the 7485 IC.
*   Understand the cascading concept for comparing numbers of higher bit length.

---

### 1. Introduction to Magnitude Comparators

*   **Definition:** A magnitude comparator is a combinational logic circuit that compares two binary numbers (A and B) and determines their relative magnitudes. It produces three output signals indicating whether A > B, A < B, or A = B.

*   **Applications:**
    *   Process control systems: Comparing measured values to setpoints.
    *   Address decoding in memory systems: Selecting specific memory locations.
    *   Data sorting and searching algorithms.
    *   ALU (Arithmetic Logic Unit) in microprocessors.
    *   Robotics and automation.
    *   Security systems (e.g., comparing a user-entered password with a stored password).

*   **Basic Principle:** The comparator examines the bits of the two numbers, starting from the most significant bit (MSB), to determine their relationship.

### 2. The 7485 4-Bit Magnitude Comparator IC

*   **Overview:** The 7485 is a popular MSI (Medium Scale Integration) device designed to compare two 4-bit binary words (A and B) and provide outputs indicating their relative magnitudes (A > B, A < B, A = B).  It also provides cascading inputs to compare numbers larger than 4 bits.

*   **Pin Diagram & Description:**

    [*(Include a visual representation of the 7485 pin diagram here.  Since I cannot render images, describe each pin and its function)*]

    *   **A[3:0]:** 4-bit input for number A (A3 is MSB, A0 is LSB).
    *   **B[3:0]:** 4-bit input for number B (B3 is MSB, B0 is LSB).
    *   **I(A>B):** Cascadable input: Input that indicates if the previous stages have determined A > B.
    *   **I(A<B):** Cascadable input: Input that indicates if the previous stages have determined A < B.
    *   **I(A=B):** Cascadable input: Input that indicates if the previous stages have determined A = B.
    *   **O(A>B):** Output: High when A > B.
    *   **O(A<B):** Output: High when A < B.
    *   **O(A=B):** Output: High when A = B.
    *   **VCC:** Positive supply voltage.
    *   **GND:** Ground.

*   **Truth Table:**  (Simplified - a complete truth table would be very large)

    | A[3:0] | B[3:0] | I(A>B) | I(A<B) | I(A=B) | O(A>B) | O(A<B) | O(A=B) |
    |---|---|---|---|---|---|---|---|
    | A > B   | Don't Care | Don't Care | Don't Care | Don't Care | 1 | 0 | 0 |
    | A < B   | Don't Care | Don't Care | Don't Care | Don't Care | 0 | 1 | 0 |
    | A = B   | Don't Care | 0 | 0 | 1 | 0 | 0 | 1 |
    | A = B   | Don't Care | 1 | 0 | 0 | 1 | 0 | 0 |
    | A = B   | Don't Care | 0 | 1 | 0 | 0 | 1 | 0 |
    | Don't Care   | Don't Care | 0 | 0 | 0 | 0 | 0 | 0 | (Invalid Input)

    *Important Note:* When cascading, the I(A>B), I(A<B), and I(A=B) inputs from the less significant stage determine the overall comparison result if the higher-order bits are equal.

*   **Logic Diagram:** (Simplified - can be represented with Boolean Equations)

    The 7485 internally uses a complex combination of AND, OR, and XOR gates to implement the comparison logic. The outputs are derived from the following logic equations (simplified for conceptual understanding):

    *   O(A>B) = (A3 > B3) + (A3 = B3) * (A2 > B2) + (A3 = B3) * (A2 = B2) * (A1 > B1) + (A3 = B3) * (A2 = B2) * (A1 = B1) * (A0 > B0) + (A3 = B3) * (A2 = B2) * (A1 = B1) * (A0 = B0) * I(A>B)
    *   O(A<B) = (A3 < B3) + (A3 = B3) * (A2 < B2) + (A3 = B3) * (A2 = B2) * (A1 < B1) + (A3 = B3) * (A2 = B2) * (A1 = B1) * (A0 < B0) + (A3 = B3) * (A2 = B2) * (A1 = B1) * (A0 = B0) * I(A<B)
    *   O(A=B) = (A3 = B3) * (A2 = B2) * (A1 = B1) * (A0 = B0) * I(A=B)

    Where (A > B), (A < B), and (A = B) represent the comparison of individual bits.

### 3. Designing Magnitude Comparators for Larger Numbers (Cascading)

*   **Cascading Principle:** To compare numbers larger than 4 bits, multiple 7485 ICs can be cascaded.  The outputs of one comparator (comparing the least significant bits) are connected to the cascading inputs of the next comparator (comparing the more significant bits).

*   **Cascading Procedure:**

    1.  **Divide the Numbers:**  Divide the numbers A and B into 4-bit groups, starting from the least significant bits.

    2.  **Least Significant Stage:**  The comparator that compares the least significant 4 bits has its cascading inputs set as follows:
        *   I(A>B) = 0
        *   I(A<B) = 0
        *   I(A=B) = 1

    3.  **Intermediate Stages (if any):** For each subsequent stage (comparing the more significant bits), connect the outputs of the previous stage to its cascading inputs.  Specifically:
        *   I(A>B) = O(A>B) from the previous stage.
        *   I(A<B) = O(A<B) from the previous stage.
        *   I(A=B) = O(A=B) from the previous stage.

    4.  **Most Significant Stage:** The outputs of the most significant stage represent the overall comparison result of the entire number.

*   **Example: Comparing two 8-bit numbers (A[7:0] and B[7:0])**

    *   Use two 7485 ICs.
    *   **IC 1 (Least Significant):**
        *   A[3:0] connected to A[3:0] of IC 1.
        *   B[3:0] connected to B[3:0] of IC 1.
        *   I(A>B) = 0
        *   I(A<B) = 0
        *   I(A=B) = 1

    *   **IC 2 (Most Significant):**
        *   A[7:4] connected to A[3:0] of IC 2.
        *   B[7:4] connected to B[3:0] of IC 2.
        *   I(A>B) = O(A>B) from IC 1.
        *   I(A<B) = O(A<B) from IC 1.
        *   I(A=B) = O(A=B) from IC 1.

    *   **Final Result:** The outputs O(A>B), O(A<B), and O(A=B) from IC 2 provide the final comparison result for the 8-bit numbers A and B.

### 4. Implementation and Testing

*   **Hardware Setup:**  (Describe how to wire the circuit on a breadboard or using simulation software).  This should include:
    *   Connecting the power supply (VCC and GND) to the 7485 IC(s).
    *   Connecting the A and B input bits to appropriate switches or logic levels.
    *   Connecting the cascading inputs (for multi-IC implementations).
    *   Connecting the outputs to LEDs or other visual indicators.

*   **Testing Procedure:**

    1.  **Initial Setup:** Set up the initial conditions for the cascading inputs (as described in the cascading procedure).

    2.  **Vary Inputs:** Vary the input bits (A and B) for different combinations.

    3.  **Observe Outputs:** Observe the output LEDs or indicators and record the results.

    4.  **Verify Truth Table:**  Compare the observed outputs with the expected outputs based on the magnitude comparison rules.

    5.  **Troubleshooting:** If the outputs do not match the expected values, check the wiring connections, power supply, and input signals for any errors.

### 5. Important Points to Remember

*   The 7485 compares unsigned binary numbers.
*   When cascading, the carry inputs of the least significant comparator are initialized to 0, 0, and 1 for A>B, A<B, and A=B, respectively.
*   Proper wiring is crucial for the correct operation of the circuit.
*   Consider propagation delay when using multiple cascaded comparators in high-speed applications. The more stages, the higher the delay.
*   Be aware of the voltage and current limitations of the 7485 IC.

### 6. Practice Questions and Exercises

**Question 1:**  Design a magnitude comparator using 7485 IC(s) to compare two 12-bit numbers.  Draw the circuit diagram and specify the connections between the ICs.

**Answer:**

*   You will need three 7485 ICs.
*   **IC 1 (Least Significant):** A[3:0] and B[3:0] connected to the inputs.  I(A>B)=0, I(A<B)=0, I(A=B)=1.
*   **IC 2 (Intermediate):** A[7:4] and B[7:4] connected to the inputs. I(A>B), I(A<B), and I(A=B) connected to the corresponding outputs of IC 1.
*   **IC 3 (Most Significant):** A[11:8] and B[11:8] connected to the inputs. I(A>B), I(A<B), and I(A=B) connected to the corresponding outputs of IC 2.
*   The outputs of IC 3 (O(A>B), O(A<B), O(A=B)) give the final comparison result for the 12-bit numbers.

**Question 2:**  What are the initial values for the cascading inputs of the least significant 7485 comparator when comparing two 16-bit numbers?

**Answer:**

*   I(A>B) = 0
*   I(A<B) = 0
*   I(A=B) = 1

**Question 3:**  If the output of the least significant stage (IC1) of a cascaded comparator is O(A>B) = 1, O(A<B) = 0, and O(A=B) = 0, what does this indicate about the lower 4 bits of the two numbers being compared?

**Answer:** This indicates that the lower 4 bits of number A are greater than the lower 4 bits of number B.

**Question 4:**  Explain why the I(A=B) input must be HIGH for the least significant comparator stage in a cascaded configuration.

**Answer:** The I(A=B) input of the least significant comparator must be HIGH (1) because initially, we assume that the two numbers are equal until proven otherwise by comparing their corresponding bits. The least significant bits' comparison is the *first* comparison made, and if those bits are equal (A=B), then the rest of the circuit must start with the assumption that the entire numbers *could* still be equal.  If the least significant bits are not equal, then the ouput of the first comparator sets the cascade inputs for the next one.

---

This comprehensive study guide should provide a thorough understanding of magnitude comparators using the 7485 IC and the cascading principles involved in comparing numbers of higher bit lengths. Remember to practice designing and implementing circuits to solidify your understanding. Good luck!
