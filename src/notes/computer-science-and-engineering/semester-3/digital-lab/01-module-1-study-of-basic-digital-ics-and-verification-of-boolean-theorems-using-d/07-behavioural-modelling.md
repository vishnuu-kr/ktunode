---
title: "behavioural modelling"
subject: "DIGITAL LAB"
module: "Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aecf"
status: "completed"
scrapedAt: "2026-05-20T16:24:12.456Z"
---
## Digital Lab: Module 1 - Behavioural Modelling

**Subject:** DIGITAL LAB
**Module:** Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates.
**Topic:** Behavioural Modelling

**Learning Outcomes:**

*   Understand the concept of behavioural modelling in digital design.
*   Learn how to describe digital circuits using behavioural descriptions.
*   Distinguish between different styles of modelling (behavioural, structural, dataflow).
*   Apply behavioural modelling techniques to simple logic gates and Boolean expressions.
*   Verify Boolean theorems using behavioural models.

---

### 1. Introduction to Behavioural Modelling

*   **Definition:** Behavioural modelling describes the *functionality* or *behaviour* of a digital circuit without explicitly specifying its internal structure or interconnections. It focuses on *what* the circuit does, rather than *how* it does it.

*   **Abstraction Level:** Behavioural modelling is a high-level abstraction, closer to a software program than a hardware description.

*   **Purpose:**
    *   **System-level design:**  Model complex systems before detailed hardware design.
    *   **Verification:** Create test benches and reference models for validating lower-level implementations.
    *   **Design exploration:** Quickly evaluate different architectural options.
    *   **Algorithm development:**  Implement and test digital algorithms.

*   **Languages:** Behavioural modelling is often done using Hardware Description Languages (HDLs) like Verilog or VHDL. We will focus on the conceptual understanding, applicable across these languages.

### 2. Modelling Styles: Behavioural vs. Structural vs. Dataflow

*   **Structural Modelling:**
    *   Describes a circuit by specifying its components (e.g., gates, flip-flops) and their interconnections.
    *   Similar to a schematic diagram.
    *   Lowest level of abstraction.
    *   Example: A full adder built from AND, OR, and XOR gates.

*   **Dataflow Modelling:**
    *   Describes a circuit by specifying the flow of data and the operations performed on it.
    *   Uses concurrent assignments (e.g., `assign sum = a ^ b ^ cin;` in Verilog) to describe data transformations.
    *   Intermediate level of abstraction.
    *   Example: Using `assign` statements to describe the logic equations for a combinational circuit.

*   **Behavioural Modelling:**
    *   Describes the functionality of a circuit using high-level constructs like `if-else`, `case`, loops, and functions.
    *   Highest level of abstraction.
    *   Example: Using an `if-else` statement to describe the truth table of a multiplexer.

*   **Key Differences Summarized:**

    | Feature       | Structural          | Dataflow            | Behavioural           |
    |---------------|-----------------------|---------------------|-----------------------|
    | Abstraction   | Low                 | Medium              | High                  |
    | Description   | Components & Wiring | Data Flow & Logic | Functionality        |
    | Constructs    | Gates, Modules      | `assign`, Equations | `if-else`, `case`, loops |
    | Complexity    | High (for complex circuits) | Medium | Low (for complex circuits) |

### 3. Behavioural Modelling Techniques

*   **Truth Table Implementation:** Directly translate a truth table into conditional statements.

    *   **Example: AND Gate**

        | A | B | Output |
        |---|---|--------|
        | 0 | 0 | 0      |
        | 0 | 1 | 0      |
        | 1 | 0 | 0      |
        | 1 | 1 | 1      |

        ```
        // Pseudo-code (Conceptual)
        function AND_Gate(A, B):
            if A == 0 or B == 0:
                return 0
            else:
                return 1
        ```

*   **Conditional Statements (`if-else`):**  Implement different behaviours based on input conditions.

    *   **Example: 2-to-1 Multiplexer**

        | Select | Input A | Input B | Output |
        |--------|---------|---------|--------|
        | 0      | X       | X       | A      |
        | 1      | X       | X       | B      |

        ```
        // Pseudo-code (Conceptual)
        function MUX_2to1(Select, A, B):
            if Select == 0:
                return A
            else:
                return B
        ```

*   **Case Statements:** Implement multiple conditions based on the value of a variable.

    *   **Example: 4-to-1 Multiplexer**

        ```
        // Pseudo-code (Conceptual)
        function MUX_4to1(Select, A, B, C, D):
            switch Select:
                case 00:
                    return A
                case 01:
                    return B
                case 10:
                    return C
                case 11:
                    return D
                default:
                    return Undefined // Handle undefined select values
        ```

*   **Loops (rare in direct hardware synthesis, but useful for test benches and algorithm modelling):**  Repeat a block of code multiple times. More suitable for high-level algorithm representation than direct hardware implementation (unless using HLS tools).

### 4. Applying Behavioural Modelling to Boolean Theorems

*   **Objective:** Use behavioural models to demonstrate the validity of Boolean theorems.

*   **Approach:**
    1.  Create behavioural models of the expressions on both sides of the theorem.
    2.  Apply all possible input combinations to both models.
    3.  Compare the outputs of both models for each input combination.
    4.  If the outputs are identical for all combinations, the theorem is verified.

*   **Example: DeMorgan's Theorem (Part 1: `NOT (A AND B) = (NOT A) OR (NOT B)` )**

    1.  **Model 1: `NOT (A AND B)`**

        ```
        // Pseudo-code (Conceptual)
        function DeMorgan_Left(A, B):
            intermediate = A and B
            return not intermediate
        ```

    2.  **Model 2: `(NOT A) OR (NOT B)`**

        ```
        // Pseudo-code (Conceptual)
        function DeMorgan_Right(A, B):
            not_A = not A
            not_B = not B
            return not_A or not_B
        ```

    3.  **Verification:** Test all combinations of A and B (00, 01, 10, 11) and compare the outputs of `DeMorgan_Left` and `DeMorgan_Right`.  If they are always the same, DeMorgan's Theorem (Part 1) is verified.

        | A | B | NOT(A AND B) | (NOT A) OR (NOT B) |
        |---|---|----------------|---------------------|
        | 0 | 0 | 1              | 1                   |
        | 0 | 1 | 1              | 1                   |
        | 1 | 0 | 1              | 1                   |
        | 1 | 1 | 0              | 0                   |

    4.  **Conclusion:** The outputs are the same, so the theorem is verified.

### 5. Practice Questions/Exercises

1.  **Write a behavioural model (pseudo-code) for a 3-input AND gate.**

    *   **Answer:**

        ```
        function AND3(A, B, C):
            if A == 1 and B == 1 and C == 1:
                return 1
            else:
                return 0
        ```

2.  **Write a behavioural model (pseudo-code) for a full adder (sum and carry outputs).**

    *   **Answer:**

        ```
        function FullAdder(A, B, Cin):
            Sum = (A xor B) xor Cin
            Carry = (A and B) or (A and Cin) or (B and Cin)
            return Sum, Carry
        ```

3.  **Using behavioural models, verify the distributive law: `A AND (B OR C) = (A AND B) OR (A AND C)`**

    *   **Answer:**  (This requires creating two behavioural models, one for each side of the equation, and then testing all 8 possible input combinations of A, B, and C.)  The verification table would look similar to the DeMorgan's Theorem example above.

4.  **Explain the advantages and disadvantages of behavioural modelling.**

    *   **Answer:**
        *   **Advantages:** High level of abstraction, easy to understand and modify, good for system-level design and verification, faster simulation.
        *   **Disadvantages:**  May not directly map to hardware, synthesis can be unpredictable if not carefully written, may not be suitable for performance-critical designs where precise control over hardware is needed.

### 6. Important Points to Remember

*   Behavioural modelling focuses on *what* a circuit does, not *how*.
*   `if-else` and `case` statements are fundamental constructs.
*   Truth tables can be easily implemented using behavioural models.
*   Behavioural modelling is useful for verifying Boolean theorems.
*   Understanding the differences between structural, dataflow, and behavioural modelling is crucial.
*   While loops are useful for testbenches and algorithm prototyping, they can be more challenging to synthesize directly into hardware. Choose appropriate coding style depending on the final application (simulation vs. hardware implementation).
