---
title: "Implement a boolean function using MUX IC"
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aee0"
status: "completed"
scrapedAt: "2026-05-20T16:24:23.858Z"
---
# DIGITAL LAB - Module 2: Implement a Boolean Function Using MUX IC

## Module Overview: Design and Implement a Combinational Logic Circuit for Arbitrary Functions

This module focuses on designing and implementing combinational logic circuits for arbitrary functions. This document specifically covers the implementation of boolean functions using Multiplexer (MUX) Integrated Circuits (ICs).

## Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the functionality of a Multiplexer (MUX) and its truth table.
*   Implement any Boolean function using a MUX IC.
*   Select the appropriate MUX size for a given Boolean function.
*   Connect the inputs of a MUX correctly to realize a desired Boolean function.
*   Simplify Boolean functions to minimize the MUX size required.

## 1. Key Concepts and Definitions:

### 1.1 Combinational Logic:

*   **Definition:** A type of digital logic circuit where the output is solely determined by the current input values.  It does not rely on past inputs or internal states (unlike sequential logic).
*   **Examples:** AND gate, OR gate, XOR gate, Multiplexer, Decoder, Encoder.

### 1.2 Boolean Function:

*   **Definition:** A mathematical function that maps inputs to outputs, where the inputs and outputs are Boolean variables (i.e., can take on only the values 0 or 1, representing False or True).
*   **Representation:** Boolean functions can be represented using:
    *   **Truth Table:** A table that lists all possible input combinations and the corresponding output.
    *   **Boolean Expression:** An algebraic expression using Boolean variables and operators (AND, OR, NOT).
    *   **Logic Gates:** A circuit diagram using AND, OR, NOT gates to implement the function.
    *   **Karnaugh Map (K-Map):** A graphical method for simplifying Boolean expressions.

### 1.3 Multiplexer (MUX):

*   **Definition:** A combinational logic circuit that selects one of several input signals and forwards the selected input to a single output line.  It's also called a data selector.
*   **Components:**
    *   **Data Inputs (I0, I1, I2, ... In-1):** The input signals to be selected.
    *   **Select Inputs (S0, S1, S2, ... Sk-1):**  Determine which data input is selected.  The number of select lines 'k' is related to the number of data inputs 'n' by:  `n = 2^k` (For standard MUXes, where the number of inputs is a power of 2).  A MUX with 'n' inputs requires 'log2(n)' select lines.
    *   **Enable Input (EN) / Strobe Input (often active low):**  Controls whether the MUX is active.  If EN is inactive, the output is typically forced to a specific value (usually 0).
    *   **Output (Y):** The single output signal, which is the selected data input.
*   **Truth Table Example (4:1 MUX):**

    | S1 | S0 | Y   |
    |----|----|-----|
    | 0  | 0  | I0  |
    | 0  | 1  | I1  |
    | 1  | 0  | I2  |
    | 1  | 1  | I3  |

*   **Common MUX Sizes:**  2:1, 4:1, 8:1, 16:1.  The "x:1" notation means "x inputs, 1 output".
*   **MUX IC Examples:** 74157 (Quad 2:1 MUX), 74151 (8:1 MUX), 74150 (16:1 MUX).

## 2. Implementing Boolean Functions with MUX ICs:

The core idea is to use the select lines of the MUX as the input variables of the Boolean function and the data inputs as either 0 or 1 (GND or VCC).

### 2.1 Implementation Procedure:

1.  **Determine the MUX Size:**  For a Boolean function with 'n' variables, you can use a MUX with `2^(n-1)` inputs.  Connect 'n-1' variables to the select lines.  The remaining variable will be used to determine the values to be connected to the data inputs.
2.  **Create the Truth Table:** Write the truth table for the Boolean function you want to implement.
3.  **Assign Input Variables to Select Lines:** Choose which input variables will be connected to the select lines of the MUX (S0, S1, etc.). The order matters and should be documented.
4.  **Determine Data Input Values:**  For each combination of select line values (i.e., each row in the truncated truth table created by using 'n-1' variables), examine the remaining input variable and the corresponding output value from the original truth table.  This will determine the value to be connected to the corresponding data input:
    *   If the output 'Y' is the same as the remaining variable, connect the data input to the remaining variable.
    *   If the output 'Y' is the complement of the remaining variable, connect the data input to the complement of the remaining variable.  (You'll likely need to use a NOT gate in this case if you can't directly access the complemented variable)
    *   If the output 'Y' is always 0, connect the data input to ground (GND).
    *   If the output 'Y' is always 1, connect the data input to the positive supply voltage (VCC).
5.  **Connect the MUX:**  Connect the select lines to the chosen input variables, the data inputs to the determined values (0, 1, or the remaining input variable), and the enable pin appropriately (often to ground). Connect the output to the desired output signal.

### 2.2 Example 1: Implementing F(A, B, C) = A'BC + AB'C' + ABC + A'B'C' using a 4:1 MUX

1.  **MUX Size:** Since there are 3 variables (A, B, C), we can use a 4:1 MUX (2^(3-1) = 4).

2.  **Truth Table:**

    | A | B | C | F |
    |---|---|---|---|
    | 0 | 0 | 0 | 1 |
    | 0 | 0 | 1 | 0 |
    | 0 | 1 | 0 | 0 |
    | 0 | 1 | 1 | 1 |
    | 1 | 0 | 0 | 1 |
    | 1 | 0 | 1 | 0 |
    | 1 | 1 | 0 | 0 |
    | 1 | 1 | 1 | 1 |

3.  **Select Line Assignment:** Let's use A and B as the select lines: S1 = A, S0 = B.

4.  **Data Input Determination:** Now, create a condensed table based on A and B values, and analyze the C and F columns:

    | A | B | C | F | Data Input |
    |---|---|---|---|------------|
    | 0 | 0 | 0 | 1 | F = C'     |
    | 0 | 0 | 1 | 0 |            |
    | 0 | 1 | 0 | 0 | F = C      |
    | 0 | 1 | 1 | 1 |            |
    | 1 | 0 | 0 | 1 | F = C'     |
    | 1 | 0 | 1 | 0 |            |
    | 1 | 1 | 0 | 0 | F = C      |
    | 1 | 1 | 1 | 1 |            |

    *   When A=0, B=0, F = C' (When C is 0, F is 1, and when C is 1, F is 0).  So, I0 = C'.
    *   When A=0, B=1, F = C (When C is 0, F is 0, and when C is 1, F is 1). So, I1 = C.
    *   When A=1, B=0, F = C' (When C is 0, F is 1, and when C is 1, F is 0).  So, I2 = C'.
    *   When A=1, B=1, F = C (When C is 0, F is 0, and when C is 1, F is 1). So, I3 = C.

5.  **Connections:**

    *   S1 = A
    *   S0 = B
    *   I0 = C' (C through an inverter)
    *   I1 = C
    *   I2 = C' (C through an inverter)
    *   I3 = C
    *   Enable = GND (or as required by the specific MUX IC)
    *   Output = F

### 2.3 Example 2: Implementing F(A, B, C) = A + B'C using an 8:1 MUX

1.  **MUX Size:** Since there are 3 variables (A, B, C), we can also use an 8:1 MUX directly.

2.  **Truth Table:**

    | A | B | C | F |
    |---|---|---|---|
    | 0 | 0 | 0 | 1 |
    | 0 | 0 | 1 | 1 |
    | 0 | 1 | 0 | 0 |
    | 0 | 1 | 1 | 0 |
    | 1 | 0 | 0 | 1 |
    | 1 | 0 | 1 | 1 |
    | 1 | 1 | 0 | 1 |
    | 1 | 1 | 1 | 1 |

3.  **Select Line Assignment:** S2 = A, S1 = B, S0 = C.

4.  **Data Input Determination:**  Now, directly read the F values from the truth table:

    *   I0 = 1 (A=0, B=0, C=0, F=1)
    *   I1 = 1 (A=0, B=0, C=1, F=1)
    *   I2 = 0 (A=0, B=1, C=0, F=0)
    *   I3 = 0 (A=0, B=1, C=1, F=0)
    *   I4 = 1 (A=1, B=0, C=0, F=1)
    *   I5 = 1 (A=1, B=0, C=1, F=1)
    *   I6 = 1 (A=1, B=1, C=0, F=1)
    *   I7 = 1 (A=1, B=1, C=1, F=1)

5.  **Connections:**

    *   S2 = A
    *   S1 = B
    *   S0 = C
    *   I0 = VCC (1)
    *   I1 = VCC (1)
    *   I2 = GND (0)
    *   I3 = GND (0)
    *   I4 = VCC (1)
    *   I5 = VCC (1)
    *   I6 = VCC (1)
    *   I7 = VCC (1)
    *   Enable = GND (or as required by the specific MUX IC)
    *   Output = F

## 3. Selecting the Appropriate MUX Size

*   **General Rule:** For a Boolean function with 'n' variables:
    *   You can always use a MUX with `2^n` inputs (e.g., 8:1 MUX for 3 variables, 16:1 MUX for 4 variables, etc.). In this case, all the input variables of the function will be connected to select lines of the MUX and all the MUX input pins will be either HIGH or LOW.
    *   Alternatively, you can use a MUX with `2^(n-1)` inputs. In this case, you connect 'n-1' variables to the select lines. The remaining variable (or its complement) and constants (0 or 1) are connected to the data inputs. This usually reduces the number of external connections (specifically to VCC and GND).
*   **Considerations:**
    *   **Availability of ICs:** Choose a size that is readily available and cost-effective.
    *   **Complexity:**  Using a smaller MUX may require more external gates (like a NOT gate to implement C').  Balance this against the cost of a larger MUX.
    *   **Simplification:**  Simplifying the Boolean function before implementing it can sometimes allow for a smaller MUX to be used.

## 4. Simplifying Boolean Functions to Minimize MUX Size

*   **Karnaugh Maps (K-Maps):** A visual method for simplifying Boolean expressions. By grouping adjacent 1s (or 0s) in the K-Map, you can derive a simplified expression.
*   **Boolean Algebra:**  Use Boolean algebra identities (e.g., DeMorgan's Law, Distributive Law) to simplify the function before implementing it.

**Example (from Example 2):** F(A, B, C) = A + B'C

This function is already reasonably simplified.  Trying to simplify it further doesn't lead to a much simpler implementation.

## 5. Important Points to Remember:

*   **Polarity of Enable Input:** Pay close attention to whether the enable input is active-high or active-low.  Connect it correctly to enable the MUX.
*   **Grounding and Power Supply:** Properly connect VCC and GND to the MUX IC.
*   **Unused Inputs:** Leaving inputs floating is bad practice.  Tie unused data inputs to either VCC or GND (depending on the specific application).

## 6. Practice Questions/Exercises:

1.  **Implement F(A, B) = AB + A'B' using a 2:1 MUX.**

    *   **Answer:**
        *   S0 = A
        *   I0 = B'
        *   I1 = B

2.  **Implement F(A, B, C) = A'BC' + ABC' using a 4:1 MUX.**

    *   **Answer:**
        *   S1 = A
        *   S0 = B
        *   I0 = C'
        *   I1 = 0
        *   I2 = 0
        *   I3 = C'

3.  **Design a circuit to implement a full adder using two 4:1 MUXes.  The full adder has three inputs (A, B, Cin) and two outputs (Sum, Cout).**

    *   **Answer (Outline):**
        *   Create the truth table for Sum and Cout in terms of A, B, and Cin.
        *   Implement Sum with one 4:1 MUX: S1=A, S0=B. Determine I0, I1, I2, I3 based on the truth table and Cin.  You will connect either Cin or its compliment to each of the input pins.
        *   Implement Cout with another 4:1 MUX: S1=A, S0=B. Determine I0, I1, I2, I3 based on the truth table and Cin.  You will connect either Cin or its compliment to each of the input pins.

4. **Explain what a MUX is and its applications in digital circuits.**
    *   **Answer:** A multiplexer (MUX) is a combinational logic circuit that selects one of several input signals and forwards the selected input to a single output line based on the values of its select lines. Applications of MUXes include:
        *   Data selection
        *   Parallel-to-serial conversion
        *   Function generation
        *   Address decoding in memory systems.

## 7. Conclusion:

Understanding Multiplexers and how to use them to implement Boolean functions is a fundamental skill in digital logic design. By mastering the techniques outlined above, you can effectively design and build combinational logic circuits for a wide range of applications. Remember to consider the tradeoffs between MUX size, complexity, and simplification when choosing the optimal implementation strategy.
