---
title: "Design and implement a synchronous counter - 3 bit up counter, 3-bit down counter, sequence generator."
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aee8"
status: "completed"
scrapedAt: "2026-05-20T16:24:29.435Z"
---
## Digital Lab - Module 2: Combinational Logic & Synchronous Counters

**Topic:** Design and implement a synchronous counter - 3 bit up counter, 3-bit down counter, sequence generator.

**Learning Outcomes:**

*   Understand the difference between asynchronous and synchronous counters.
*   Design and implement a 3-bit synchronous up counter.
*   Design and implement a 3-bit synchronous down counter.
*   Design and implement a synchronous sequence generator.
*   Verify the functionality of the designed counters through truth tables and timing diagrams.
*   Utilize Karnaugh maps (K-maps) for simplification of Boolean expressions in counter design.

### 1. Introduction to Counters

*   **Definition:** A counter is a sequential circuit that sequences through a predetermined series of states or counts.
*   **Types of Counters:**
    *   **Asynchronous (Ripple) Counters:** The output of one flip-flop triggers the next flip-flop. Simpler to design but prone to propagation delays, limiting the maximum clock frequency.
    *   **Synchronous Counters:** All flip-flops are triggered simultaneously by the same clock pulse. Faster operation and more reliable.  This is what we'll focus on.

### 2. Key Concepts and Definitions

*   **Flip-Flops:** Basic building blocks of counters.  Typically, D or JK flip-flops are used.
*   **Clock Signal:** A periodic signal that triggers state changes in the flip-flops.
*   **State Transition:** The change from one count value to the next.
*   **Modulus (MOD):** The number of states the counter cycles through before repeating. A 3-bit counter has a maximum modulus of 2<sup>3</sup> = 8.
*   **State Table:** A table that lists the present state, next state, and flip-flop inputs.
*   **Karnaugh Map (K-Map):** A graphical tool used to simplify Boolean expressions, minimizing the number of gates required in the implementation.
*   **Truth Table:** Shows the output for all possible input combinations.  For a counter, it usually lists the present state and the corresponding next state.
*   **Sequence Generator:** A counter specifically designed to cycle through a custom, non-standard sequence of states.
*   **Up Counter:** A counter that increments its count value with each clock pulse.
*   **Down Counter:** A counter that decrements its count value with each clock pulse.

### 3. Design of a 3-Bit Synchronous Up Counter

*   **Steps:**
    1.  **Determine the number of flip-flops:**  For a 3-bit counter, we need 3 flip-flops (e.g., Q2, Q1, Q0, where Q2 is the MSB).
    2.  **Choose the type of flip-flop:**  We'll use JK flip-flops for flexibility.
    3.  **Construct the State Table:**  This table shows the desired sequence of states.
        | Present State (Q2 Q1 Q0) | Next State (Q2 Q1 Q0) |
        | :-----------------------: | :----------------------: |
        |           0 0 0           |           0 0 1           |
        |           0 0 1           |           0 1 0           |
        |           0 1 0           |           0 1 1           |
        |           0 1 1           |           1 0 0           |
        |           1 0 0           |           1 0 1           |
        |           1 0 1           |           1 1 0           |
        |           1 1 0           |           1 1 1           |
        |           1 1 1           |           0 0 0           |

    4.  **Derive the Flip-Flop Input Equations using Excitation Table:**  The excitation table defines the required inputs (J, K) to achieve a specific transition for each flip-flop.  Here's the JK excitation table:

        | Q(t) | Q(t+1) | J | K |
        |------|--------|---|---|
        |  0   |   0    | 0 | X |
        |  0   |   1    | 1 | X |
        |  1   |   0    | X | 1 |
        |  1   |   1    | X | 0 |

        Now, create a table showing the Present State, Next State, and the Required JK Inputs for each flip-flop:

        | Q2 Q1 Q0 | Q2+1 Q1+1 Q0+1 | J2 K2 | J1 K1 | J0 K0 |
        |--------|--------|-------|-------|-------|
        | 0 0 0  | 0 0 1  | 0 X  | 0 X  | 1 X  |
        | 0 0 1  | 0 1 0  | 0 X  | 1 X  | X 1  |
        | 0 1 0  | 0 1 1  | 0 X  | X 0  | 1 X  |
        | 0 1 1  | 1 0 0  | 1 X  | X 1  | X 1  |
        | 1 0 0  | 1 0 1  | X 0  | 0 X  | 1 X  |
        | 1 0 1  | 1 1 0  | X 0  | 1 X  | X 1  |
        | 1 1 0  | 1 1 1  | X 0  | X 0  | 1 X  |
        | 1 1 1  | 0 0 0  | X 1  | X 1  | X 1  |

    5.  **Simplify the Flip-Flop Input Equations using K-Maps:**  Create separate K-Maps for J2, K2, J1, K1, J0, and K0, using Q2, Q1, and Q0 as variables. Fill in the K-Map based on the JK values in the table above.

        After simplification, you'll find:

        *   J0 = 1
        *   K0 = 1
        *   J1 = Q0
        *   K1 = Q0
        *   J2 = Q0 * Q1
        *   K2 = Q0 * Q1

    6.  **Draw the Logic Diagram:**  Implement the simplified Boolean equations using AND gates and JK flip-flops.  Connect the clock signal to all flip-flops simultaneously.
        *   Flip-flop 0 (Q0) is a toggle flip-flop (J=K=1).
        *   Flip-flop 1 (Q1) toggles when Q0 is 1.
        *   Flip-flop 2 (Q2) toggles when Q0 AND Q1 are 1.

### 4. Design of a 3-Bit Synchronous Down Counter

*   **Steps:**  Follow the same steps as the up counter, but modify the state table to reflect the decrementing sequence.

    1.  **State Table:**

        | Present State (Q2 Q1 Q0) | Next State (Q2 Q1 Q0) |
        | :-----------------------: | :----------------------: |
        |           0 0 0           |           1 1 1           |
        |           0 0 1           |           0 0 0           |
        |           0 1 0           |           0 0 1           |
        |           0 1 1           |           0 1 0           |
        |           1 0 0           |           0 1 1           |
        |           1 0 1           |           1 0 0           |
        |           1 1 0           |           1 0 1           |
        |           1 1 1           |           1 1 0           |

    2.  **Excitation Table and Flip-Flop Input Determination:** Similar to the up counter, create the excitation table and determine the required JK inputs for each flip-flop.

    3.  **K-Map Simplification:**  Use K-Maps to simplify the Boolean expressions for J2, K2, J1, K1, J0, and K0. You will get:

        *   J0 = 1
        *   K0 = 1
        *   J1 = Q0' (Q0 bar or NOT Q0)
        *   K1 = Q0'
        *   J2 = Q0' * Q1'
        *   K2 = Q0' * Q1'

    4.  **Logic Diagram:**  Implement the simplified equations. Notice the difference: now Q0 *inverted* is used to control the toggling of the subsequent flip-flops.

### 5. Design of a Synchronous Sequence Generator

*   **Concept:**  A sequence generator is a counter that follows a specific, predefined sequence of states that is *not* the standard counting sequence (up or down).
*   **Example:** Design a sequence generator that cycles through the states: 000, 010, 101, 111, and then repeats.

    1.  **State Table:**

        | Present State (Q2 Q1 Q0) | Next State (Q2 Q1 Q0) |
        | :-----------------------: | :----------------------: |
        |           0 0 0           |           0 1 0           |
        |           0 1 0           |           1 0 1           |
        |           1 0 1           |           1 1 1           |
        |           1 1 1           |           0 0 0           |
        |           0 0 1           |           X X X           |  // Unused States, can be Don't Cares
        |           0 1 1           |           X X X           |  // Unused States, can be Don't Cares
        |           1 0 0           |           X X X           |  // Unused States, can be Don't Cares
        |           1 1 0           |           X X X           |  // Unused States, can be Don't Cares

        *Note:* Unused states are assigned "Don't Cares" (X) in the K-Maps to simplify the equations further.

    2.  **Excitation Table and Flip-Flop Input Determination:** Create the excitation table and determine the required JK inputs.  Remember to fill the entries for the unused states with Don't Cares ("X").

    3.  **K-Map Simplification:** Use K-Maps to simplify the Boolean expressions for J2, K2, J1, K1, J0, and K0.  The presence of Don't Cares usually leads to simpler expressions.

    4.  **Logic Diagram:**  Implement the simplified equations using logic gates and flip-flops.

### 6. Verification and Testing

*   **Truth Table Verification:**  Ensure the output of the implemented counter matches the desired state table for all possible states.
*   **Timing Diagram:**  Simulate the counter using software or hardware to generate a timing diagram.  This shows the changes in the flip-flop outputs over time, confirming the correct sequence.
*   **Handling Unused States:**  If the sequence generator has unused states, consider what will happen if the counter accidentally enters one of those states.  Design the circuit to transition to a valid state from any unused state.

### 7. Important Points to Remember

*   **Synchronous counters are faster than asynchronous counters** due to the simultaneous clocking of all flip-flops.
*   **K-Maps are essential for simplifying Boolean expressions** and minimizing gate count.
*   **Excitation tables are crucial for determining the flip-flop inputs** required for a specific state transition.
*   **Unused states in sequence generators must be considered**, and the circuit should be designed to handle them gracefully.
*   **The choice of flip-flop (D, JK, T) depends on the specific design requirements.** JK flip-flops are often preferred due to their versatility.
*   **Always verify your design** using truth tables and timing diagrams to ensure correct operation.

### 8. Practice Questions/Exercises

1.  **Design a 3-bit synchronous up counter using D flip-flops.** (Hint: Use the characteristic equation of a D flip-flop, which is Q(t+1) = D, to simplify the design process).
    *   **Answer:**
        *   **D0 = Q0'** (XOR gate with Q0 and Clock will also work)
        *   **D1 = Q1 XOR Q0**
        *   **D2 = Q2 XOR (Q0 AND Q1)**
2.  **Design a 3-bit synchronous down counter using T flip-flops.** (Hint: A T flip-flop toggles its output when the T input is high).
    *   **Answer:**
        *   **T0 = 1**
        *   **T1 = Q0'**
        *   **T2 = Q0' AND Q1'**
3.  **What are the advantages of a synchronous counter over an asynchronous counter?**
    *   **Answer:**
        *   Higher operating speed (faster clock frequency) due to simultaneous clocking.
        *   Reduced propagation delay issues.
        *   More predictable and reliable operation.
4.  **A 4-bit synchronous up counter starts at 0000. What will its state be after 7 clock pulses?**
    *   **Answer:** 0111 (Binary representation of 7).
5.  **For the sequence generator example (000, 010, 101, 111), write the truth table including all unused states and assigning all "Don't Cares" to '0'. Then simplify the boolean equations.** (This allows you to compare how the choice of "Don't Care" assignment impacts the complexity of the logic).

This comprehensive set of notes covers the design and implementation of synchronous counters, including up counters, down counters, and sequence generators. It also emphasizes the importance of simplification techniques like K-Maps and provides practice questions to solidify understanding. Remember to practice these designs in a digital logic simulator to fully grasp the concepts.
