---
title: "Comparators."
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 3: MSI Logic and Digital Building Blocks"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad5b"
status: "completed"
scrapedAt: "2026-05-20T16:23:57.438Z"
---
# DIGITAL ELECTRONICS AND LOGIC DESIGN: Module 3 - Comparators

## 1. Introduction to Comparators

*   **Definition:** A comparator is a combinational logic circuit that compares two binary numbers (A and B) and determines their relative magnitude.  It outputs one of three possible states:
    *   A > B (A is greater than B)
    *   A < B (A is less than B)
    *   A = B (A is equal to B)

*   **Purpose:**  Comparators are essential building blocks in digital systems used for:
    *   Sorting
    *   Address decoding in memory systems
    *   Control systems
    *   Process control

*   **Types of Comparators:**
    *   **Identity Comparator:** Only checks for equality (A = B).
    *   **Magnitude Comparator:** Checks for equality, greater than, and less than (A = B, A > B, A < B).

## 2. Learning Outcomes Covered

*   **Understand the function and operation of comparators.**
*   **Design and implement simple comparators using basic logic gates.**
*   **Analyze and utilize standard MSI comparator ICs.**
*   **Cascade comparator ICs to compare larger binary numbers.**
*   **Apply comparators in digital system designs.**

## 3. Key Concepts and Definitions

*   **Binary Number:** A number expressed in the base-2 numeral system, using only two digits: 0 and 1.
*   **Magnitude:** The absolute value of a number. In this context, it refers to the size of the binary number.
*   **Combinational Logic Circuit:** A digital circuit whose output(s) at any instant of time depends only on the input(s) present at that instant.  Comparators are combinational circuits.
*   **MSI (Medium-Scale Integration):**  Refers to ICs with a complexity of approximately 10 to 100 gates or equivalent components.  Common comparator ICs fall into this category.
*   **Cascading:**  Connecting the outputs of one comparator to the inputs of another to compare numbers larger than the capacity of a single comparator.

## 4. Designing Simple Comparators

### 4.1 1-Bit Comparator

*   **Truth Table:**

    | A | B | A > B | A < B | A = B |
    |---|---|-------|-------|-------|
    | 0 | 0 |   0   |   0   |   1   |
    | 0 | 1 |   0   |   1   |   0   |
    | 1 | 0 |   1   |   0   |   0   |
    | 1 | 1 |   0   |   0   |   1   |

*   **Boolean Expressions:**
    *   A > B  =  A * !B  (A AND NOT B)
    *   A < B  =  !A * B  (NOT A AND B)
    *   A = B  =  !A * !B + A * B  (XNOR)  or  !(A XOR B)

*   **Implementation using Logic Gates:**
    *   A > B: One AND gate with A as one input and NOT B as the other.
    *   A < B: One AND gate with NOT A as one input and B as the other.
    *   A = B: One XNOR gate with A and B as inputs. Alternatively, use an XOR gate and then invert the output.

### 4.2 2-Bit Comparator (Example)

*   Let A = A1A0 and B = B1B0 (where A1 and B1 are the most significant bits - MSB).
*   **Logic:**
    *   A > B if:
        *   A1 > B1  OR
        *   (A1 = B1) AND (A0 > B0)
    *   A < B if:
        *   A1 < B1  OR
        *   (A1 = B1) AND (A0 < B0)
    *   A = B if:
        *   (A1 = B1) AND (A0 = B0)

*   **Boolean Expressions (derived from the logic above):**
    *   A > B =  (A1 * !B1) + ((A1 XNOR B1) * (A0 * !B0))
    *   A < B =  (!A1 * B1) + ((A1 XNOR B1) * (!A0 * B0))
    *   A = B = (A1 XNOR B1) * (A0 XNOR B0)

*   **Implementation:**  Requires several AND, OR, and XNOR gates to implement. The circuit becomes more complex with increasing bit size.

## 5. MSI Comparator ICs

*   **Example: 74LS85 (4-Bit Magnitude Comparator)**

    *   **Features:** Compares two 4-bit binary numbers (A and B) and provides three outputs: A > B, A < B, A = B.
    *   **Inputs:**
        *   A0 - A3: 4-bit input for number A.
        *   B0 - B3: 4-bit input for number B.
        *   I(A>B): Cascading input for A > B.
        *   I(A<B): Cascading input for A < B.
        *   I(A=B): Cascading input for A = B.
    *   **Outputs:**
        *   O(A>B): Output indicating A > B.
        *   O(A<B): Output indicating A < B.
        *   O(A=B): Output indicating A = B.
    *   **Truth Table (Simplified):** The datasheet provides the complete truth table.  Key points:
        *   The I(A>B), I(A<B), and I(A=B) inputs are used for cascading comparators.  For a single comparator, these inputs are typically set as follows:
            *   I(A>B) = 0
            *   I(A<B) = 0
            *   I(A=B) = 1  (Initial equality condition)

*   **Using the 74LS85:**
    1.  Connect the A0-A3 and B0-B3 inputs to the binary numbers you want to compare.
    2.  For a single 4-bit comparison, tie I(A>B) to LOW, I(A<B) to LOW, and I(A=B) to HIGH.
    3.  Read the O(A>B), O(A<B), and O(A=B) outputs to determine the result.

## 6. Cascading Comparators

*   **Purpose:** To compare binary numbers with a bit length greater than the capacity of a single comparator IC.
*   **Method:**  Connect the outputs of the least significant comparator (LSC) to the cascading inputs of the next most significant comparator (MSC). This process is repeated until all bits are compared.
*   **Example: Comparing two 8-bit numbers using two 74LS85 ICs:**

    1.  **IC 1 (LSC):** Compares the lower 4 bits (A0-A3 and B0-B3). Set I(A>B) = 0, I(A<B) = 0, and I(A=B) = 1.
    2.  **IC 2 (MSC):** Compares the upper 4 bits (A4-A7 and B4-B7). Connect the outputs of IC 1 to the cascading inputs of IC 2:
        *   I(A>B) of IC 2 = O(A>B) of IC 1
        *   I(A<B) of IC 2 = O(A<B) of IC 1
        *   I(A=B) of IC 2 = O(A=B) of IC 1
    3.  The outputs of IC 2 (O(A>B), O(A<B), O(A=B)) represent the final comparison result for the entire 8-bit numbers.

*   **Generalization:**  For *n* bits, where *n* is a multiple of 4, you'll need *n/4* comparator ICs.

## 7. Applications of Comparators

*   **Address Decoding:** In memory systems, comparators are used to determine if a given address matches a specific memory location. This allows the CPU to access the correct data.
*   **Process Control:** In industrial applications, comparators are used to compare process variables (e.g., temperature, pressure) with setpoint values. The output of the comparator can trigger control actions to maintain the desired process conditions.
*   **Analog-to-Digital Conversion (ADC):** Some ADC architectures, like flash ADCs, utilize comparators to determine the voltage level of an analog signal.
*   **Sorting Algorithms:** Comparators are a fundamental building block in many sorting algorithms. They are used to compare pairs of numbers and arrange them in the correct order.
*   **Threshold Detection:** Detecting when a signal exceeds a certain threshold value.

## 8. Practice Questions & Exercises

1.  **Design a 3-bit identity comparator using XOR gates and a single NOR gate.**
    *   **Answer:**
        *   Use three XOR gates. Each XOR gate takes one bit from A and the corresponding bit from B as inputs (A0 XOR B0, A1 XOR B1, A2 XOR B2).
        *   Connect the outputs of the three XOR gates to a 3-input NOR gate.
        *   The output of the NOR gate will be HIGH (1) only if all three XOR gate outputs are LOW (0), which means A0=B0, A1=B1, and A2=B2, i.e., A = B.

2.  **How many 74LS85 ICs are required to compare two 16-bit numbers?  Explain how they would be connected.**
    *   **Answer:**  4 ICs are required.
        *   Connect the first IC to the least significant 4 bits of A and B. Set its cascading inputs I(A>B)=0, I(A<B)=0, and I(A=B)=1.
        *   Connect the outputs of the first IC to the cascading inputs of the second IC.
        *   Connect the second IC to the next 4 bits of A and B.
        *   Connect the outputs of the second IC to the cascading inputs of the third IC.
        *   Connect the third IC to the next 4 bits of A and B.
        *   Connect the outputs of the third IC to the cascading inputs of the fourth IC.
        *   Connect the fourth IC to the most significant 4 bits of A and B.
        *   The outputs of the fourth IC represent the final comparison result (A > B, A < B, A = B).

3.  **Explain the purpose of the cascading inputs on the 74LS85 comparator IC.**
    *   **Answer:** The cascading inputs allow multiple 74LS85 comparator ICs to be connected together to compare binary numbers that are larger than 4 bits. They pass the comparison result from a lower-order comparator to a higher-order comparator, allowing for a comparison of the entire number.

4.  **What is the output of a 74LS85 comparator if A = 1011, B = 1010, I(A>B) = 0, I(A<B) = 0, and I(A=B) = 1?**
    *   **Answer:** O(A>B) = 1, O(A<B) = 0, O(A=B) = 0.  Since A is greater than B, the A>B output will be high, and the other two outputs will be low.

5.  **In what applications can comparators be used?  Give at least three examples.**
    *   **Answer:**
        *   **Address Decoding:**  Identifying a specific memory location.
        *   **Process Control:** Maintaining process variables within desired limits.
        *   **Analog-to-Digital Conversion (ADC):** Converting analog signals to digital representations.

## 9. Important Points to Remember

*   Comparators are combinational logic circuits, meaning their outputs depend only on the current inputs.
*   The 74LS85 is a common MSI 4-bit magnitude comparator.
*   Cascading allows you to compare numbers larger than the capacity of a single comparator IC.
*   Always refer to the IC datasheet for the complete truth table and detailed specifications.
*   Understanding the concept of cascading is crucial for using comparators effectively in larger digital systems.
*   The cascading inputs of the least significant comparator are usually tied to I(A>B) = 0, I(A<B) = 0, and I(A=B) = 1 for a standalone or initial comparison.
