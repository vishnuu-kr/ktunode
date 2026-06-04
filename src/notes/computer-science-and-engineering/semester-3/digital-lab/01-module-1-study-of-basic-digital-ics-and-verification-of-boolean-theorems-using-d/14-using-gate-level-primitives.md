---
title: "using gate level primitives"
subject: "DIGITAL LAB"
module: "Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aed6"
status: "completed"
scrapedAt: "2026-05-20T16:24:17.340Z"
---
# DIGITAL LAB: Module 1 - Gate Level Primitives

**Topic:** Using Gate Level Primitives for Digital Logic Design & Boolean Theorem Verification

**Description:** This module focuses on understanding and utilizing gate level primitives (AND, OR, NOT, NAND, NOR, XOR, XNOR) to design and implement digital circuits. We'll also verify fundamental Boolean theorems using these primitives.

**Learning Outcomes:**

*   Understand the functionality and truth tables of basic digital logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR).
*   Design and implement digital circuits using gate level primitives based on Boolean expressions.
*   Verify Boolean theorems (e.g., DeMorgan's Laws, Distributive Law) using digital logic gates.
*   Analyze and troubleshoot simple digital circuits constructed from gate level primitives.
*   Understand the concept of propagation delay in digital gates and its impact on circuit performance.

## 1. Key Concepts and Definitions

*   **Digital Logic:** A system of representing information using discrete (typically binary) values.
*   **Logic Gate:** An elementary building block of a digital circuit that performs a specific logical operation on one or more inputs and produces a single output.
*   **Gate Level Primitive:** The fundamental logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) that serve as the building blocks for more complex digital circuits.
*   **Truth Table:** A table that defines the output of a logic gate for all possible combinations of its input values.
*   **Boolean Algebra:** A system of algebra dealing with logical propositions and binary variables. It provides a mathematical framework for analyzing and simplifying digital circuits.
*   **Boolean Expression:** An algebraic expression composed of binary variables, logic operators (AND, OR, NOT), and parentheses, representing a digital circuit's functionality.
*   **Propagation Delay:** The time delay between a change in input and the corresponding change in output of a logic gate.
*   **Universal Gate:** A logic gate (NAND or NOR) that can be used to implement any other logic gate or Boolean function.

## 2. Basic Digital Logic Gates

*   **AND Gate:**
    *   Output is HIGH (1) only if *all* inputs are HIGH (1).
    *   Boolean Expression:  `Y = A AND B` or `Y = A * B` or `Y = AB`
    *   Symbol: (Refer to standard logic gate symbols - a D-shaped symbol for AND gate)
    *   Truth Table:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 0 |
        | 0 | 1 | 0 |
        | 1 | 0 | 0 |
        | 1 | 1 | 1 |

*   **OR Gate:**
    *   Output is HIGH (1) if *at least one* input is HIGH (1).
    *   Boolean Expression: `Y = A OR B` or `Y = A + B`
    *   Symbol: (Refer to standard logic gate symbols - a curved symbol for OR gate)
    *   Truth Table:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 0 |
        | 0 | 1 | 1 |
        | 1 | 0 | 1 |
        | 1 | 1 | 1 |

*   **NOT Gate (Inverter):**
    *   Output is the *inverse* of the input.
    *   Boolean Expression: `Y = NOT A` or `Y = A'` or `Y = Ā`
    *   Symbol: (Refer to standard logic gate symbols - a triangle with a circle at the output for NOT gate)
    *   Truth Table:

        | A | Y |
        |---|---|
        | 0 | 1 |
        | 1 | 0 |

*   **NAND Gate:**
    *   Output is the inverse of the AND gate output.  HIGH (1) unless *all* inputs are HIGH (1).
    *   Boolean Expression: `Y = NOT (A AND B)` or `Y = (A * B)'` or `Y = (AB)'`
    *   Symbol: (Refer to standard logic gate symbols - An AND gate with a circle at the output)
    *   Truth Table:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 1 |
        | 0 | 1 | 1 |
        | 1 | 0 | 1 |
        | 1 | 1 | 0 |

*   **NOR Gate:**
    *   Output is the inverse of the OR gate output.  HIGH (1) only if *all* inputs are LOW (0).
    *   Boolean Expression: `Y = NOT (A OR B)` or `Y = (A + B)'`
    *   Symbol: (Refer to standard logic gate symbols - An OR gate with a circle at the output)
    *   Truth Table:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 1 |
        | 0 | 1 | 0 |
        | 1 | 0 | 0 |
        | 1 | 1 | 0 |

*   **XOR Gate (Exclusive OR):**
    *   Output is HIGH (1) if the inputs are *different*.
    *   Boolean Expression: `Y = A XOR B` or `Y = A ⊕ B` or `Y = A'B + AB'`
    *   Symbol: (Refer to standard logic gate symbols - A curved OR gate with another curved line before it)
    *   Truth Table:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 0 |
        | 0 | 1 | 1 |
        | 1 | 0 | 1 |
        | 1 | 1 | 0 |

*   **XNOR Gate (Exclusive NOR):**
    *   Output is HIGH (1) if the inputs are the *same*.
    *   Boolean Expression: `Y = A XNOR B` or `Y = (A ⊕ B)'` or `Y = A'B' + AB`
    *   Symbol: (Refer to standard logic gate symbols - An XOR gate with a circle at the output)
    *   Truth Table:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 1 |
        | 0 | 1 | 0 |
        | 1 | 0 | 0 |
        | 1 | 1 | 1 |

## 3. Designing Circuits with Gate Level Primitives

*   **Steps:**
    1.  **Understand the Functionality:** Clearly define the desired behavior of the circuit.  Create a truth table if needed.
    2.  **Obtain the Boolean Expression:**  Derive the Boolean expression that represents the desired functionality.  You can often use the truth table to derive the expression. Consider using Sum of Products (SOP) or Product of Sums (POS) forms.
    3.  **Simplify the Boolean Expression (Optional):** Use Boolean algebra rules and Karnaugh Maps (K-maps) to simplify the expression, leading to a circuit with fewer gates.
    4.  **Implement the Circuit:** Draw the logic diagram using the appropriate gate level primitives based on the simplified (or unsimplified) Boolean expression.
    5.  **Test and Verify:** Simulate or build the circuit and verify its functionality against the defined truth table or specifications.

*   **Example:** Design a circuit that implements the following Boolean expression:  `Y = (A * B) + C`

    1.  **Functionality:** The output Y is HIGH if both A and B are HIGH, OR if C is HIGH.
    2.  **Boolean Expression:** `Y = (A * B) + C` (Already provided)
    3.  **Simplification:** The expression is already relatively simple.
    4.  **Implementation:**  The circuit would consist of:
        *   An AND gate with inputs A and B.
        *   An OR gate.  One input to the OR gate is the output of the AND gate, and the other input is C.
        *   The output of the OR gate is Y.
    5.  **Testing:**  Test with all combinations of A, B, and C (2<sup>3</sup> = 8 combinations) to verify the output matches the defined functionality.

## 4. Verification of Boolean Theorems

*   **DeMorgan's Laws:**

    *   Law 1:  `(A + B)' = A' * B'`  (The complement of the sum is the product of the complements)
    *   Law 2:  `(A * B)' = A' + B'`  (The complement of the product is the sum of the complements)

    *   **Verification using Gates:**
        *   Build circuits for both sides of each equation using AND, OR, and NOT gates.
        *   Apply all possible input combinations (00, 01, 10, 11).
        *   Verify that the outputs of both circuits are identical for each input combination.

*   **Distributive Law:**

    *   `A * (B + C) = (A * B) + (A * C)`

    *   **Verification using Gates:**
        *   Build circuits for both sides of the equation using AND and OR gates.
        *   Apply all possible input combinations (2<sup>3</sup> = 8 combinations).
        *   Verify that the outputs of both circuits are identical for each input combination.

*   **Other Theorems (Absorption, Associative, Commutative):** Follow the same method – construct circuits for both sides of the equation and compare their truth tables.

## 5. Propagation Delay

*   **Definition:** The time it takes for a logic gate's output to change in response to a change in its input.
*   **Importance:** Propagation delay affects the speed at which a digital circuit can operate. In complex circuits, the cumulative propagation delay of multiple gates can limit the overall performance.
*   **Measurement:** Typically measured in nanoseconds (ns) or picoseconds (ps).
*   **Impact:**  Longer propagation delays can lead to timing issues such as glitches (spurious transitions) and setup/hold time violations in sequential circuits.
*   **Considerations:** When designing circuits, it's essential to consider the propagation delays of the chosen gates and minimize their impact on performance by optimizing the circuit's architecture and selecting faster gates.

## 6. Universal Gates (NAND and NOR)

*   **Definition:** A universal gate is a logic gate that can be used to implement any other logic gate or Boolean function.
*   **NAND as a Universal Gate:**
    *   **NOT:** Connect the two inputs of a NAND gate together.
    *   **AND:**  Connect the output of a NAND gate to a NOT gate (implemented with another NAND gate).
    *   **OR:** Use DeMorgan's Law: A + B = (A' * B')'. Implement A' and B' with NAND gates, then NAND their outputs.
*   **NOR as a Universal Gate:**
    *   **NOT:** Connect the two inputs of a NOR gate together.
    *   **OR:** Connect the output of a NOR gate to a NOT gate (implemented with another NOR gate).
    *   **AND:** Use DeMorgan's Law: A * B = (A' + B')'. Implement A' and B' with NOR gates, then NOR their outputs.

## 7. Practice Questions/Exercises

1.  **Design a circuit that implements the Boolean expression `Y = (A + B)' * C` using gate level primitives.**
    *   **Answer:**
        *   An OR gate with inputs A and B.
        *   A NOT gate connected to the output of the OR gate.
        *   An AND gate. One input is the output of the NOT gate, and the other input is C.
        *   The output of the AND gate is Y.

2.  **Verify DeMorgan's Law (A + B)' = A' * B' using logic gates. Create a truth table to prove the equality.**
    *   **Answer:**
        *   Circuit 1: A and B connected to an OR gate, the output of which is connected to a NOT gate.
        *   Circuit 2: A and B connected to NOT gates, the outputs of which are connected to an AND gate.
        *   Truth Table:

            | A | B | A+B | (A+B)' | A' | B' | A'*B' |
            |---|---|-----|--------|----|----|-------|
            | 0 | 0 |  0  |    1   | 1  | 1  |   1   |
            | 0 | 1 |  1  |    0   | 1  | 0  |   0   |
            | 1 | 0 |  1  |    0   | 0  | 1  |   0   |
            | 1 | 1 |  1  |    0   | 0  | 0  |   0   |

        *   Since the (A+B)' column and the A'*B' column are identical, the theorem is verified.

3.  **Implement an XOR gate using only NAND gates.**
    *   **Answer:** `A ⊕ B = (A NAND (A NAND B)) NAND (B NAND (A NAND B))`
        *   Requires four NAND gates. Draw the circuit diagram based on this expression.

4.  **What is the significance of propagation delay in digital circuits?**
    *   **Answer:** Propagation delay limits the maximum operating frequency of the circuit and can cause timing issues like glitches if not properly considered during the design process.

5.  **Why are NAND and NOR gates called universal gates?**
    *   **Answer:** Because any other logic gate (AND, OR, NOT, XOR, XNOR) can be implemented using only NAND gates or only NOR gates.

## 8. Important Points to Remember

*   **Truth Tables are Key:**  Always start by defining the desired functionality using a truth table.
*   **Boolean Algebra is your Friend:** Use Boolean algebra rules to simplify expressions and reduce the number of gates needed.
*   **DeMorgan's Laws are Essential:** Master DeMorgan's Laws for circuit simplification and NAND/NOR gate implementations.
*   **Propagation Delay Matters:**  Be aware of propagation delay and its impact, especially in complex circuits.
*   **NAND and NOR are Powerful:** Understand how to implement other gates using NAND and NOR gates.
*   **Practice Makes Perfect:**  The best way to learn is by working through examples and building circuits.
