---
title: "Code converters"
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aed9"
status: "completed"
scrapedAt: "2026-05-20T16:24:18.742Z"
---
## DIGITAL LAB: Module 2 - Code Converters

**Module:** Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)
**Topic:** Code Converters

**Learning Outcomes:**

*   Understand the concept of code conversion and its importance.
*   Learn about different types of code converters (e.g., Binary to Gray, Gray to Binary, BCD to Excess-3, Excess-3 to BCD).
*   Design combinational logic circuits for code conversion using K-maps or Boolean algebra simplification.
*   Implement and test code converter circuits using digital logic gates.
*   Analyze the performance and limitations of different code converter designs.

---

### 1. Introduction to Code Converters

*   **Definition:** A code converter is a combinational logic circuit that transforms data represented in one binary code (e.g., Binary, BCD, Gray) into another binary code.

*   **Importance:**
    *   **Compatibility:** Enables different systems using different coding schemes to communicate effectively.
    *   **Efficiency:** Optimizes data representation for specific applications (e.g., Gray code for reducing errors in shaft encoders).
    *   **Interface:** Provides a bridge between systems utilizing incompatible data formats.
    *   **Simplification:**  In some situations, certain codes can simplify arithmetic or logical operations.

*   **Combinational Logic:** Code converters are combinational circuits, meaning their outputs depend only on the current inputs. They do not have memory elements.

### 2. Types of Code Converters

Here are some common types of code converters:

*   **Binary to Gray Code Converter:** Converts a binary number to its equivalent Gray code representation.
*   **Gray to Binary Code Converter:** Converts a Gray code number to its equivalent binary representation.
*   **Binary Coded Decimal (BCD) to Excess-3 Code Converter:** Converts a BCD number to its Excess-3 code representation.
*   **Excess-3 to BCD Code Converter:** Converts an Excess-3 code number to its BCD code representation.
*   **BCD to 7-Segment Decoder:**  Converts BCD to a 7-segment display code.  This is a specific type of code converter used to display decimal numbers on a 7-segment display.

### 3. Design Process of Code Converters

The general design process for a code converter involves the following steps:

1.  **Define the Conversion:** Determine the input and output codes and their corresponding truth table.
2.  **Create a Truth Table:**  Develop a truth table that lists all possible input combinations and their corresponding output combinations.
3.  **Boolean Expression Derivation:**  Derive Boolean expressions for each output based on the truth table. You can use:
    *   **Sum of Products (SOP):**  Form a product term for each row in the truth table where the output is '1' and then sum these product terms.
    *   **Product of Sums (POS):** Form a sum term for each row in the truth table where the output is '0' and then multiply these sum terms.
4.  **Simplification:** Simplify the Boolean expressions using:
    *   **Boolean Algebra:** Apply Boolean algebra laws (e.g., DeMorgan's Theorem, distributive law, associative law).
    *   **Karnaugh Map (K-map):**  A graphical method for simplifying Boolean expressions.
5.  **Logic Circuit Design:** Draw the logic circuit diagram based on the simplified Boolean expressions.  Use logic gates (AND, OR, NOT, XOR, etc.) to implement the circuit.
6.  **Implementation and Testing:**  Build the circuit using discrete logic gates or simulate it using hardware description languages (HDLs) and test its functionality with different input combinations.

### 4. Examples of Code Converter Design

Let's walk through two common examples:

#### 4.1. Binary to Gray Code Converter

*   **Definition:** Converts a binary number to its equivalent Gray code representation.  Gray code is a non-weighted code where only one bit changes between successive code words, minimizing errors in applications like rotary encoders.

*   **Example:** Consider a 3-bit Binary to Gray code converter.

    1.  **Truth Table:**

        | Binary (B2 B1 B0) | Gray (G2 G1 G0) |
        | :----------------: | :---------------: |
        |       0 0 0        |       0 0 0       |
        |       0 0 1        |       0 0 1       |
        |       0 1 0        |       0 1 1       |
        |       0 1 1        |       0 1 0       |
        |       1 0 0        |       1 1 0       |
        |       1 0 1        |       1 1 1       |
        |       1 1 0        |       1 0 1       |
        |       1 1 1        |       1 0 0       |

    2.  **Boolean Expressions:**  By observation from the truth table:

        *   G2 = B2
        *   G1 = B2 XOR B1
        *   G0 = B1 XOR B0

    3.  **Logic Circuit Diagram:**

        *   G2 is simply B2.
        *   G1 is implemented using an XOR gate with inputs B2 and B1.
        *   G0 is implemented using an XOR gate with inputs B1 and B0.

#### 4.2. BCD to Excess-3 Code Converter

*   **Definition:** Converts a Binary Coded Decimal (BCD) number to its equivalent Excess-3 code representation. Excess-3 is a non-weighted code derived from BCD by adding 3 to each digit.

*   **Example:** Consider a BCD to Excess-3 code converter.

    1.  **Truth Table:**  BCD uses only the first ten binary numbers (0-9).  Excess-3 is created by adding 3 to each BCD digit.

        | BCD (B3 B2 B1 B0) | Excess-3 (E3 E2 E1 E0) |
        | :-----------------: | :---------------------: |
        |       0 0 0 0       |       0 0 1 1       |
        |       0 0 0 1       |       0 1 0 0       |
        |       0 0 1 0       |       0 1 0 1       |
        |       0 0 1 1       |       0 1 1 0       |
        |       0 1 0 0       |       0 1 1 1       |
        |       0 1 0 1       |       1 0 0 0       |
        |       0 1 1 0       |       1 0 0 1       |
        |       0 1 1 1       |       1 0 1 0       |
        |       1 0 0 0       |       1 0 1 1       |
        |       1 0 0 1       |       1 1 0 0       |

        Note:  BCD values 1010 through 1111 are *invalid* in BCD. We can use these in the K-map simplification as "don't cares" (X) to further simplify our logic.

    2.  **Boolean Expressions (using K-maps):**  Let's focus on obtaining the simplified Boolean expression for E3.

        *   Draw a 4-variable K-map with B3, B2, B1, and B0 as variables.
        *   Place '1's in the K-map cells corresponding to the rows in the truth table where E3 is '1'.
        *   Place 'X's in the K-map cells corresponding to the invalid BCD values (1010 through 1111).
        *   Group the 1's and X's in the largest possible groups (powers of 2).
        *   From the K-map, the simplified expression for E3 will be:  `E3 = B3 + B2(B1 + B0)`

    3.  **Logic Circuit Diagram:** Based on the Boolean expression `E3 = B3 + B2(B1 + B0)`, the logic circuit requires:

        *   One OR gate with inputs B1 and B0.
        *   One AND gate with inputs B2 and the output of the first OR gate.
        *   One OR gate with inputs B3 and the output of the AND gate (the final E3 output).

    *   You would repeat this K-map simplification process for E2, E1, and E0.

### 5. Implementation and Testing

*   **Discrete Logic Gates:**  Use individual logic gates (e.g., 7400 series ICs) to construct the circuit on a breadboard.
*   **Simulation Software:** Use software like:
    *   **Logisim:** A free and open-source digital logic simulator.
    *   **Multisim:** A circuit simulation software package.
    *   **Hardware Description Languages (HDLs):** Use Verilog or VHDL to describe the circuit's behavior and simulate it using a simulator like ModelSim.  This allows you to test the circuit thoroughly before potentially implementing it on an FPGA or ASIC.
*   **Testing:**  Apply all possible input combinations and verify that the outputs match the expected values according to the truth table.  Use a logic analyzer or oscilloscope to observe the waveforms.

### 6. Performance and Limitations

*   **Propagation Delay:** The time it takes for the output to change after a change in the input. This is an important performance metric, especially in high-speed applications.
*   **Gate Count:** The number of logic gates used in the circuit. A lower gate count generally means a simpler and more cost-effective design.
*   **Power Consumption:** The amount of power the circuit consumes.  Lower power consumption is desirable for portable and energy-efficient applications.
*   **Fan-out:**  The number of gate inputs that a gate output can drive without significant degradation of the signal.
*   **Complexity:** For complex code conversions, the design and implementation can become challenging, requiring more sophisticated simplification techniques and potentially multi-level logic.
*   **Practical Considerations:**
    *   **Availability of Components:**  Ensure that the required logic gates are readily available and cost-effective.
    *   **Board Space:**  Minimize the physical size of the circuit board.
    *   **Noise Immunity:** Design the circuit to be robust against noise.

### 7. Practice Questions/Exercises

1.  **Design a Gray to Binary code converter for 3-bit numbers.**
    *   *Answer:*

        | Gray (G2 G1 G0) | Binary (B2 B1 B0) |
        | :---------------: | :----------------: |
        |       0 0 0       |       0 0 0        |
        |       0 0 1       |       0 0 1        |
        |       0 1 1       |       0 1 0        |
        |       0 1 0       |       0 1 1        |
        |       1 1 0       |       1 0 0        |
        |       1 1 1       |       1 0 1        |
        |       1 0 1       |       1 1 0        |
        |       1 0 0       |       1 1 1        |

        *   B2 = G2
        *   B1 = B2 XOR G1  (which is equivalent to G2 XOR G1)
        *   B0 = B1 XOR G0  (which is equivalent to G2 XOR G1 XOR G0)

2.  **Explain the importance of Gray code in shaft encoders.**
    *   *Answer:* In shaft encoders, which measure angular position, using binary code can lead to ambiguous readings when multiple bits change simultaneously. This can cause errors. Gray code minimizes this problem because only one bit changes at a time, ensuring a more reliable and accurate position measurement.

3.  **What are "don't cares" in K-map simplification, and how are they used in BCD to Excess-3 code conversion?**
    *   *Answer:*  "Don't cares" are input combinations that will never occur in a specific application (e.g., the invalid BCD values 1010-1111).  In K-map simplification, "don't cares" can be treated as either '0' or '1' depending on which assignment allows for larger groupings and thus simplifies the resulting Boolean expression. In BCD to Excess-3 conversion, the invalid BCD values are used as "don't cares" to further simplify the logic circuit.

4.  **Compare and contrast the advantages and disadvantages of using Boolean algebra versus K-maps for simplifying Boolean expressions.**
    *   *Answer:*

        | Feature          | Boolean Algebra                                                                 | K-maps                                                                                                |
        | :----------------- | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
        | Method           | Algebraic manipulation using Boolean laws.                                      | Graphical method using a grid representation.                                                       |
        | Complexity        | Can become complex and time-consuming for functions with many variables.         | Relatively easier to handle more variables (up to 5-6) visually.                                    |
        | Error Prone       | More prone to human error during manipulation.                               | Less prone to error once the K-map is correctly constructed.                                      |
        | Automation        | Difficult to automate directly (requires symbolic manipulation).               | Can be automated relatively easily (e.g., by algorithms that find the largest possible groupings). |
        | Suitability       | Suitable for simpler functions and when a formal proof of simplification is needed. | Suitable for functions with up to 5-6 variables where a quick and visual simplification is desired. |

### 8. Important Points to Remember

*   **Truth Table is Key:**  The truth table is the foundation for designing any code converter.
*   **Simplification is Crucial:**  Simplifying the Boolean expressions minimizes the gate count and reduces the complexity of the circuit.
*   **Don't Cares Can Help:**  Utilize "don't care" conditions effectively to achieve further simplification.
*   **Consider Performance Metrics:**  Evaluate the performance of your code converter design based on factors like propagation delay, gate count, and power consumption.
*   **Test Thoroughly:**  Thorough testing is essential to ensure the correct functionality of the code converter for all possible input combinations.
*   **Choose the Right Tool:** Select the appropriate tool (discrete logic gates, simulation software, HDL) based on the project requirements and available resources.
