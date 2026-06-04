---
title: "Gates - Inverter, AND gate, OR gate, NOR gate, NAND gate, XOR gate, XNOR gate"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 1: Introduction to digital Systems :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad48"
status: "completed"
scrapedAt: "2026-05-20T16:23:45.048Z"
---
## Digital Electronics and Logic Design: Module 1 - Introduction to Digital Systems: Gates

**Learning Outcomes:**

*   Understand the function of basic logic gates: Inverter, AND, OR, NOR, NAND, XOR, and XNOR.
*   Be able to represent each gate with its symbol, truth table, and Boolean expression.
*   Be able to analyze simple digital circuits built using these gates.
*   Understand the relationship between logic gates and Boolean algebra.
*   Understand the importance of logic gates as fundamental building blocks of digital systems.

### 1. Introduction to Logic Gates

Logic gates are fundamental building blocks of digital circuits and electronic systems. They perform basic logical operations based on one or more binary inputs, producing a single binary output.  The output is based on the input and a set of logical rules defining the gate's function. Binary signals are represented by two distinct voltage levels, usually denoted as HIGH (1) and LOW (0).

### 2. The Inverter (NOT Gate)

*   **Function:**  The inverter performs logical negation.  It takes a single input and produces an output that is the opposite of the input. If the input is 1, the output is 0, and if the input is 0, the output is 1.

*   **Symbol:**

    ```
        ---->o
        |
       -
    ```

    Or more commonly:

    ```
       --->>-o
        A   | Y = A'
       -------
    ```

*   **Boolean Expression:**  Y = A' (or Y = ¬A), where A' represents the complement (inverse) of A.

*   **Truth Table:**

    | Input (A) | Output (Y) |
    | --------- | ---------- |
    | 0         | 1          |
    | 1         | 0          |

*   **Example:**  If a sensor detects a closed door (represented by 1), an inverter could be used to generate a signal (0) indicating the door is *not* open.

*   **Important Point:** The inverter is the simplest logic gate, and it is crucial for implementing various logical operations.

### 3. The AND Gate

*   **Function:** The AND gate performs logical conjunction.  The output is 1 only if *all* inputs are 1; otherwise, the output is 0.

*   **Symbol:**

    ```
       ---->
       |    \----->
       ---->
    ```

    Or more commonly:

    ```
        A ----
              \
        B ----> & ----> Y = A.B
              /
        --------
    ```

*   **Boolean Expression:**  Y = A ⋅ B (or Y = AB), where '⋅' represents the AND operation.

*   **Truth Table (2-input):**

    | Input A | Input B | Output Y |
    | ------- | ------- | -------- |
    | 0       | 0       | 0        |
    | 0       | 1       | 0        |
    | 1       | 0       | 0        |
    | 1       | 1       | 1        |

*   **Example:**  An AND gate could be used in a security system where an alarm sounds (Y=1) only if both a motion sensor (A=1) and a door sensor (B=1) are triggered.

*   **Important Point:** The AND gate essentially acts as a "series connection" in terms of logical conditions.  All conditions must be true for the output to be true.

### 4. The OR Gate

*   **Function:** The OR gate performs logical disjunction. The output is 1 if *at least one* of the inputs is 1; the output is 0 only if *all* inputs are 0.

*   **Symbol:**

    ```
         ---->  \
         |       \----->
         ---->  /
    ```
    Or more commonly:

    ```
        A ----  \
                \
        B ---->  >=1 ----> Y = A + B
                /
        --------
    ```

*   **Boolean Expression:**  Y = A + B, where '+' represents the OR operation.

*   **Truth Table (2-input):**

    | Input A | Input B | Output Y |
    | ------- | ------- | -------- |
    | 0       | 0       | 0        |
    | 0       | 1       | 1        |
    | 1       | 0       | 1        |
    | 1       | 1       | 1        |

*   **Example:** An OR gate could be used in a lighting system where a light turns on (Y=1) if either switch A (A=1) or switch B (B=1) is flipped.

*   **Important Point:** The OR gate acts as a "parallel connection" in terms of logical conditions. Any condition being true is sufficient for the output to be true.

### 5. The NOR Gate

*   **Function:** The NOR gate is the negation of the OR gate. The output is 1 only if *all* inputs are 0; otherwise, the output is 0. It's an OR gate followed by an inverter.

*   **Symbol:**

    ```
         ---->  \     o
         |       \----->
         ---->  /     
    ```

    Or more commonly:

    ```
        A ----  \      o
                \
        B ---->  >=1 ----> Y = (A + B)'
                /
        --------
    ```

*   **Boolean Expression:**  Y = (A + B)', where '+' represents the OR operation and ' represents the complement (inversion).

*   **Truth Table (2-input):**

    | Input A | Input B | Output Y |
    | ------- | ------- | -------- |
    | 0       | 0       | 1        |
    | 0       | 1       | 0        |
    | 1       | 0       | 0        |
    | 1       | 1       | 0        |

*   **Example:** A NOR gate could be used in a system where an error signal (Y=1) is generated only if neither sensor A (A=0) nor sensor B (B=0) detects a problem.

*   **Important Point:**  NOR gates are considered a "universal gate" because any other logic gate can be constructed using only NOR gates.

### 6. The NAND Gate

*   **Function:** The NAND gate is the negation of the AND gate. The output is 0 only if *all* inputs are 1; otherwise, the output is 1.  It's an AND gate followed by an inverter.

*   **Symbol:**

    ```
       ---->      o
       |    \----->
       ---->
    ```

    Or more commonly:

    ```
        A ----
              \
        B ----> & ----> o ----> Y = (A.B)'
              /
        --------
    ```

*   **Boolean Expression:**  Y = (A ⋅ B)', where '⋅' represents the AND operation and ' represents the complement (inversion).

*   **Truth Table (2-input):**

    | Input A | Input B | Output Y |
    | ------- | ------- | -------- |
    | 0       | 0       | 1        |
    | 0       | 1       | 1        |
    | 1       | 0       | 1        |
    | 1       | 1       | 0        |

*   **Example:** A NAND gate could be used to prevent a dangerous operation (Y=0) only if both a safety switch (A=1) and a confirmation button (B=1) are activated.

*   **Important Point:** NAND gates are also considered a "universal gate" because any other logic gate can be constructed using only NAND gates. They are frequently used in integrated circuits because of their efficiency.

### 7. The XOR Gate (Exclusive OR)

*   **Function:** The XOR gate produces a 1 output if *exactly one* of the inputs is 1. If both inputs are the same (both 0 or both 1), the output is 0.

*   **Symbol:**

    ```
        ---->  \
         |       \----->
        ---->  /
    ```

    Or more commonly:
    ```
    A ---->o \
               >-------> Y = A ⊕ B
    B ---->  /
    ```

*   **Boolean Expression:**  Y = A ⊕ B = A'B + AB'

*   **Truth Table (2-input):**

    | Input A | Input B | Output Y |
    | ------- | ------- | -------- |
    | 0       | 0       | 0        |
    | 0       | 1       | 1        |
    | 1       | 0       | 1        |
    | 1       | 1       | 0        |

*   **Example:** An XOR gate can be used in a parity checker circuit.  If the number of 1s in the input is odd, the output will be 1, indicating odd parity.

*   **Important Point:** XOR is used for comparing two bits. It's fundamental in arithmetic circuits and error detection.

### 8. The XNOR Gate (Exclusive NOR)

*   **Function:** The XNOR gate is the negation of the XOR gate. It produces a 1 output if both inputs are the same (both 0 or both 1). If the inputs are different, the output is 0.

*   **Symbol:**

    ```
        ---->  \     o
         |       \----->
        ---->  /
    ```
    Or more commonly:

    ```
    A ---->o \
               >-------> o ----> Y = (A ⊕ B)' = A'B' + AB
    B ---->  /
    ```

*   **Boolean Expression:** Y = (A ⊕ B)' = A'B' + AB

*   **Truth Table (2-input):**

    | Input A | Input B | Output Y |
    | ------- | ------- | -------- |
    | 0       | 0       | 1        |
    | 0       | 1       | 0        |
    | 1       | 0       | 0        |
    | 1       | 1       | 1        |

*   **Example:**  An XNOR gate can be used in a comparator circuit to check if two binary numbers are equal.  If the numbers are equal, the output will be 1.

*   **Important Point:** XNOR is useful for detecting equality between two bits.

### 9. Practice Questions/Exercises

1.  **Draw the symbol and write the Boolean expression for a 3-input AND gate.**

    *Answer:* Symbol: Similar to a 2-input AND gate but with three inputs. Boolean Expression: Y = A ⋅ B ⋅ C
2.  **Construct the truth table for a 3-input OR gate.**

    *Answer:*

    | Input A | Input B | Input C | Output Y |
    | ------- | ------- | ------- | -------- |
    | 0       | 0       | 0       | 0        |
    | 0       | 0       | 1       | 1        |
    | 0       | 1       | 0       | 1        |
    | 0       | 1       | 1       | 1        |
    | 1       | 0       | 0       | 1        |
    | 1       | 0       | 1       | 1        |
    | 1       | 1       | 0       | 1        |
    | 1       | 1       | 1       | 1        |

3.  **What is the output of a NAND gate if the inputs are A=1 and B=0?**

    *Answer:* 1
4.  **Write the Boolean expression for the output Y of the following circuit, where A and B are inputs: A is fed to an inverter, the output of the inverter and B are then fed to an AND gate.**

    *Answer:* Y = A' ⋅ B
5.  **Which gate is known as an 'equality' gate?**

    *Answer:* XNOR gate

### 10. Summary of Key Concepts

| Gate      | Function                                      | Symbol (Example)             | Boolean Expression | Truth Table (2-input)                             |
| --------- | --------------------------------------------- | ----------------------------- | ------------------ | ------------------------------------------------- |
| Inverter  | Negation (NOT)                               |  --->-o                     | Y = A'             | A=0, Y=1; A=1, Y=0                               |
| AND       | Conjunction (All inputs must be 1)          | A--> & --> Y                 | Y = A ⋅ B          | 00=0, 01=0, 10=0, 11=1                             |
| OR        | Disjunction (At least one input must be 1)   | A--> >=1 --> Y                | Y = A + B          | 00=0, 01=1, 10=1, 11=1                             |
| NOR       | Negation of OR                              | A--> >=1 --> o --> Y           | Y = (A + B)'       | 00=1, 01=0, 10=0, 11=0                             |
| NAND      | Negation of AND                              | A--> & --> o --> Y           | Y = (A ⋅ B)'       | 00=1, 01=1, 10=1, 11=0                             |
| XOR       | Exclusive OR (Exactly one input must be 1) | A-->o >--> Y                 | Y = A ⊕ B          | 00=0, 01=1, 10=1, 11=0                             |
| XNOR      | Negation of XOR                              | A-->o >--> o --> Y           | Y = (A ⊕ B)'       | 00=1, 01=0, 10=0, 11=1                             |

### 11. Important Points to Remember

*   Understanding the truth tables for each gate is crucial.
*   The Boolean expression represents the logic implemented by the gate.
*   NAND and NOR gates are universal gates.
*   XOR and XNOR are used for comparison operations.
*   Logic gates are the foundation of all digital circuits, from simple calculators to complex microprocessors. They are the hardware implementation of Boolean algebra, the mathematical framework describing logical operations.
