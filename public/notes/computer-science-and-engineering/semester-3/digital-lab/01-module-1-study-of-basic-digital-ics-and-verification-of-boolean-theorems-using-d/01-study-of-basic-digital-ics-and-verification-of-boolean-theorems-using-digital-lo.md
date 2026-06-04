---
title: "Study of basic digital ICs and verification of Boolean theorems using digital logic gates."
subject: "DIGITAL LAB"
module: "Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aec9"
status: "completed"
scrapedAt: "2026-05-20T16:24:08.254Z"
---
## DIGITAL LAB - Module 1: Basic Digital ICs & Boolean Theorems

**Topic:** Study of basic digital ICs and verification of Boolean theorems using digital logic gates.

**Learning Outcomes:**

*   Identify and describe the basic digital ICs (AND, OR, NOT, NAND, NOR, XOR, XNOR).
*   Understand the truth tables and logic expressions of basic digital logic gates.
*   Implement basic logic functions using digital logic gates.
*   Verify Boolean theorems (Commutative, Associative, Distributive, De Morgan's Laws) using digital logic gates and truth tables.
*   Understand and use pin diagrams of common digital ICs like 7400, 7402, 7404, 7408, 7432, 7486.

---

**1. Introduction to Digital Integrated Circuits (ICs)**

*   **Definition:** An Integrated Circuit (IC), also known as a microchip or chip, is a set of electronic circuits on one small flat piece (or "chip") of semiconductor material, usually silicon.
*   **Digital ICs:** These ICs operate on discrete signals (usually binary, 0 and 1) and perform digital logic operations.
*   **Advantages of ICs:**
    *   Small size
    *   Low power consumption
    *   High reliability
    *   Low cost (mass production)
    *   Increased speed

**2. Basic Digital Logic Gates**

*   **Logic Gates:** Fundamental building blocks of digital circuits. They perform basic logic operations on one or more input signals and produce a single output signal.

    *   **AND Gate:**
        *   **Definition:** Output is HIGH (1) only if *all* inputs are HIGH (1).
        *   **Symbol:** Typically a "D" shape.
        *   **Logic Expression:** Y = A · B  (or Y = AB)
        *   **Truth Table:**

            | A | B | Y |
            |---|---|---|
            | 0 | 0 | 0 |
            | 0 | 1 | 0 |
            | 1 | 0 | 0 |
            | 1 | 1 | 1 |

        *   **Example:** If A represents "Is the door locked?" and B represents "Is the alarm set?", then the output Y represents "The security system is armed." The system is armed only if the door is locked AND the alarm is set.
    *   **OR Gate:**
        *   **Definition:** Output is HIGH (1) if *at least one* input is HIGH (1).
        *   **Symbol:** Typically a curved shape.
        *   **Logic Expression:** Y = A + B
        *   **Truth Table:**

            | A | B | Y |
            |---|---|---|
            | 0 | 0 | 0 |
            | 0 | 1 | 1 |
            | 1 | 0 | 1 |
            | 1 | 1 | 1 |

        *   **Example:** If A represents "Is the light switch ON?" and B represents "Is the motion sensor triggered?", then the output Y represents "The light is ON."  The light is on if either the switch is ON OR the motion sensor is triggered.
    *   **NOT Gate (Inverter):**
        *   **Definition:** Output is the *inverse* of the input.
        *   **Symbol:** A triangle with a circle at the output.
        *   **Logic Expression:** Y = Ā (or Y = A')
        *   **Truth Table:**

            | A | Y |
            |---|---|
            | 0 | 1 |
            | 1 | 0 |

        *   **Example:** If A represents "Is the signal active?", then the output Y represents "The signal is NOT active."
    *   **NAND Gate:**
        *   **Definition:** Output is LOW (0) only if *all* inputs are HIGH (1). It's the inverse of AND.
        *   **Symbol:** AND gate followed by a circle (inversion).
        *   **Logic Expression:** Y = (A · B)̄ (or Y = (AB)')
        *   **Truth Table:**

            | A | B | Y |
            |---|---|---|
            | 0 | 0 | 1 |
            | 0 | 1 | 1 |
            | 1 | 0 | 1 |
            | 1 | 1 | 0 |

        *   **NAND Gate as a Universal Gate:**  Any logic function can be implemented using only NAND gates.
    *   **NOR Gate:**
        *   **Definition:** Output is HIGH (1) only if *all* inputs are LOW (0). It's the inverse of OR.
        *   **Symbol:** OR gate followed by a circle (inversion).
        *   **Logic Expression:** Y = (A + B)̄ (or Y = (A+B)')
        *   **Truth Table:**

            | A | B | Y |
            |---|---|---|
            | 0 | 0 | 1 |
            | 0 | 1 | 0 |
            | 1 | 0 | 0 |
            | 1 | 1 | 0 |

        *   **NOR Gate as a Universal Gate:** Any logic function can be implemented using only NOR gates.
    *   **XOR Gate (Exclusive OR):**
        *   **Definition:** Output is HIGH (1) if the inputs are *different*.
        *   **Symbol:** OR gate with an extra curved line before it.
        *   **Logic Expression:** Y = A ⊕ B = A'B + AB'
        *   **Truth Table:**

            | A | B | Y |
            |---|---|---|
            | 0 | 0 | 0 |
            | 0 | 1 | 1 |
            | 1 | 0 | 1 |
            | 1 | 1 | 0 |

        *   **Example:** If A represents "Is it raining?" and B represents "Do I have an umbrella?", then the output Y represents "I need an umbrella *only* if it's raining and I *don't* have one, OR if it's *not* raining and I *do* have one (which is unusual but still needs one)."
    *   **XNOR Gate (Exclusive NOR):**
        *   **Definition:** Output is HIGH (1) if the inputs are the *same*.  It's the inverse of XOR.
        *   **Symbol:** XOR gate followed by a circle (inversion).
        *   **Logic Expression:** Y = (A ⊕ B)̄ = A'B' + AB
        *   **Truth Table:**

            | A | B | Y |
            |---|---|---|
            | 0 | 0 | 1 |
            | 0 | 1 | 0 |
            | 1 | 0 | 0 |
            | 1 | 1 | 1 |

**3. Common Digital ICs**

*   **7400 Quad 2-Input NAND Gate:** Contains four independent 2-input NAND gates.
*   **7402 Quad 2-Input NOR Gate:** Contains four independent 2-input NOR gates.
*   **7404 Hex Inverter:** Contains six independent NOT gates (inverters).
*   **7408 Quad 2-Input AND Gate:** Contains four independent 2-input AND gates.
*   **7432 Quad 2-Input OR Gate:** Contains four independent 2-input OR gates.
*   **7486 Quad 2-Input XOR Gate:** Contains four independent 2-input XOR gates.

*   **Pin Diagrams:** Consult datasheets for the specific pin configurations of these ICs.  Typically, VCC (power supply) and GND (ground) are located at diagonally opposite corners of the chip.  Inputs and outputs are arranged around the chip.  Proper power supply and ground connections are essential for correct operation.

**4. Boolean Algebra Theorems**

*   **Importance:**  Boolean algebra provides the mathematical foundation for analyzing and simplifying digital circuits.
*   **Variables:** Represented by letters (e.g., A, B, C).  Can have a value of 0 or 1.
*   **Operators:** AND (·), OR (+), NOT (')

    *   **Commutative Law:**
        *   A + B = B + A
        *   A · B = B · A
        *   **Verification:** Create truth tables for both sides of the equation.  The output columns must be identical.
    *   **Associative Law:**
        *   A + (B + C) = (A + B) + C
        *   A · (B · C) = (A · B) · C
        *   **Verification:** Create truth tables for both sides of the equation.  The output columns must be identical.
    *   **Distributive Law:**
        *   A · (B + C) = (A · B) + (A · C)
        *   A + (B · C) = (A + B) · (A + C)
        *   **Verification:** Create truth tables for both sides of the equation.  The output columns must be identical.
    *   **Identity Law:**
        *   A + 0 = A
        *   A · 1 = A
    *   **Null Law:**
        *   A + 1 = 1
        *   A · 0 = 0
    *   **Idempotent Law:**
        *   A + A = A
        *   A · A = A
    *   **Inverse Law:**
        *   A + Ā = 1
        *   A · Ā = 0
    *   **De Morgan's Laws:**
        *   (A + B)̄ = Ā · B̄
        *   (A · B)̄ = Ā + B̄
        *   **Importance:**  These laws are critical for simplifying complex logic expressions and implementing them with fewer gates (NAND/NOR based designs).
        *   **Verification:**  Create truth tables for both sides of the equation. The output columns must be identical.

**5. Verification of Boolean Theorems using Digital Logic Gates and Truth Tables**

*   **Procedure:**
    1.  **Choose a Boolean Theorem:**  For example, De Morgan's Law: (A + B)̄ = Ā · B̄
    2.  **Implement the Left-Hand Side (LHS) of the equation using logic gates:**  This requires an OR gate followed by a NOT gate (inverter).
    3.  **Implement the Right-Hand Side (RHS) of the equation using logic gates:** This requires two NOT gates followed by an AND gate.
    4.  **Create a Truth Table:**  List all possible input combinations (A and B in this case).
    5.  **Calculate the output of the LHS circuit for each input combination.**
    6.  **Calculate the output of the RHS circuit for each input combination.**
    7.  **Compare the outputs:** If the outputs of the LHS and RHS circuits are identical for all input combinations, the theorem is verified.

*   **Example: Verifying De Morgan's Law: (A + B)̄ = Ā · B̄**

    *   **LHS Circuit:**
        *   Inputs: A, B
        *   Gate 1: OR gate (inputs A, B; output A + B)
        *   Gate 2: NOT gate (input A + B; output (A + B)̄ )
    *   **RHS Circuit:**
        *   Inputs: A, B
        *   Gate 1: NOT gate (input A; output Ā)
        *   Gate 2: NOT gate (input B; output B̄)
        *   Gate 3: AND gate (inputs Ā, B̄; output Ā · B̄)
    *   **Truth Table:**

        | A | B | A + B | (A + B)̄ | Ā | B̄ | Ā · B̄ |
        |---|---|-------|---------|---|---|-------|
        | 0 | 0 |   0   |     1   | 1 | 1 |   1   |
        | 0 | 1 |   1   |     0   | 1 | 0 |   0   |
        | 1 | 0 |   1   |     0   | 0 | 1 |   0   |
        | 1 | 1 |   1   |     0   | 0 | 0 |   0   |

    *   **Conclusion:** The columns for (A + B)̄ and Ā · B̄ are identical, thus verifying De Morgan's Law.

**6. Important Points to Remember:**

*   Always consult the datasheet for the correct pin configurations and operating voltage ranges of digital ICs.
*   Proper grounding and power supply connections are crucial for correct operation.
*   Unused inputs of gates should be tied HIGH or LOW as appropriate (refer to the datasheet).  For example, unused inputs of a NAND gate should be tied HIGH. Unused inputs of a NOR gate should be tied LOW.
*   Use a logic probe or multimeter to verify the logic levels (HIGH/LOW) at various points in the circuit.
*   When building circuits, start with a clear schematic diagram.
*   Troubleshooting requires systematic testing and careful observation.

---

**Practice Questions/Exercises:**

1.  **Draw the logic gate circuit diagram for the expression Y = (A + B) · C.**
    *   **Answer:** An OR gate with inputs A and B, and an AND gate with inputs from the output of the OR gate and C.

2.  **Simplify the following Boolean expression using Boolean algebra theorems:  Y = A · B + A · B̄**
    *   **Answer:** Y = A · (B + B̄) = A · 1 = A

3.  **Design a circuit using only NAND gates to implement an AND gate.**
    *   **Answer:**
        1.  Use a NAND gate.
        2.  Connect the two inputs of the NAND gate together.
        3.  The output of this NAND gate will be the NOT of the input.
        4.  Connect the output of this NAND gate to another NAND gate, where both inputs are connected together.
        5. The output of the second NAND gate will now be the AND of the original input.

4.  **Design a circuit using only NOR gates to implement an OR gate.**
        *   **Answer:**
        1.  Use a NOR gate for input A.
        2.  Use a NOR gate for input B.
        3.  Connect the outputs of the two NOR gates to the inputs of another NOR gate.
        4.  The output of the last NOR gate is the OR output.

5.  **Verify the Distributive Law A · (B + C) = (A · B) + (A · C) using a truth table.**
    *   **Answer:** Construct a truth table with inputs A, B, C. Calculate A · (B + C) and (A · B) + (A · C) for each row. Verify that the columns are identical.

6.  **Given a 7408 IC (Quad 2-input AND gate), how many independent AND gates are available in the IC?**
    *   **Answer:** Four.

7.  **What is the output of a NOR gate when both inputs are HIGH?**
    *   **Answer:** LOW (0)

8.  **What is the output of an XOR gate when both inputs are LOW?**
    *   **Answer:** LOW (0)

9.  **What is the output of an XNOR gate when one input is HIGH and the other is LOW?**
    *   **Answer:** LOW (0)

10. **Why are NAND and NOR gates considered universal gates?**
    *   **Answer:** Because any other logic gate (AND, OR, NOT, XOR, XNOR) can be created using only NAND gates, or only NOR gates.

This comprehensive study guide should provide a solid foundation for understanding basic digital ICs and verifying Boolean theorems using logic gates. Remember to supplement this material with practical experimentation in the lab to solidify your understanding. Good luck!
