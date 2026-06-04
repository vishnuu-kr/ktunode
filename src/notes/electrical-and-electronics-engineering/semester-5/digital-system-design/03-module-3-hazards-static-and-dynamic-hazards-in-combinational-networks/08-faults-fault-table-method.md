---
title: "Faults: Fault table method"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36300"
status: "completed"
scrapedAt: "2026-05-23T16:21:12.230Z"
---
# DIGITAL SYSTEM DESIGN - Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

## Topic: Faults: Fault Table Method

### Introduction

In the realm of digital system design, ensuring the correct operation of circuits is paramount. While we strive for perfect designs, real-world implementations are susceptible to various malfunctions or "faults." Understanding these faults and developing methods to detect them is crucial for building reliable digital systems. This topic delves into a fundamental fault detection technique: the **Fault Table Method**. This method is particularly useful for combinational circuits.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of faults in digital circuits.
*   Explain the limitations of the fault table method.
*   Construct a fault table for a given combinational circuit.
*   Apply the fault table method to identify test vectors for detecting single stuck-at faults.
*   Relate fault detection to the overall goal of designing robust digital systems.

### Course Outcomes Alignment

This topic directly contributes to the following Course Outcomes (COs):

*   **CO3: Identify faults in digital circuits (Knowledge Level: K3)**: This topic focuses on a specific method for identifying potential faults, thereby directly addressing the knowledge level required for this CO.

### 1. What are Faults in Digital Circuits?

Faults are physical defects or errors that cause a digital circuit to behave incorrectly. They are typically introduced during manufacturing or due to environmental factors and aging.

**Key Concepts:**

*   **Fault Model:** A simplified representation of a physical defect that describes how the circuit's behavior deviates from its intended design. The most common fault model for combinational circuits is the **stuck-at fault model**.
*   **Stuck-at Fault:** A fault where a signal line (input or output of a gate, or an internal node) is permanently fixed at either logic '0' (stuck-at-0, SA0) or logic '1' (stuck-at-1, SA1).

**Examples of Stuck-at Faults:**

Consider a simple AND gate with inputs A and B, and output Y = A ⋅ B.
*   **A stuck-at-0 (A SA0):** The input A is always 0, regardless of its actual intended value. So, Y will always be 0.
*   **A stuck-at-1 (A SA1):** The input A is always 1, regardless of its actual intended value.
*   **B stuck-at-0 (B SA0):** The input B is always 0.
*   **B stuck-at-1 (B SA1):** The input B is always 1.
*   **Y stuck-at-0 (Y SA0):** The output Y is always 0.
*   **Y stuck-at-1 (Y SA1):** The output Y is always 1.

**Reference:**

*   **Givone, "Digital Principles & Design"**: Discusses fault models and the importance of fault analysis in Chapters on testing and verification.
*   **Mano & Ciletti, "Digital Design with an introduction to HDL, VHDL and Verilog"**: Often covers fault models in the context of design for testability.
*   **Wakerly, "Digital Design"**: Provides a thorough treatment of fault models, including stuck-at faults.

### 2. The Fault Table Method

The Fault Table Method is a systematic approach to generate test vectors (input combinations) that can detect specific stuck-at faults in a combinational circuit. It involves creating a table that lists all possible input combinations, the corresponding fault-free output, and the output for each assumed fault.

**Key Concepts:**

*   **Test Vector:** An input combination applied to the circuit.
*   **Testability:** The ability of a circuit to be tested for faults.
*   **Fault Coverage:** The percentage of detectable faults that are detected by a given set of test vectors.
*   **Fault-Free Output:** The output of the circuit when there are no faults.
*   **Faulty Output:** The output of the circuit when a specific fault is present.
*   **Detection:** A fault is detected by a test vector if the output of the circuit with the fault differs from the fault-free output for that input combination.

**Steps involved in the Fault Table Method:**

1.  **Identify all possible stuck-at faults:** For a combinational circuit with $n$ input lines and $m$ internal nodes, there are $2(n+m)$ possible single stuck-at faults (SA0 and SA1 for each line).
2.  **Generate all possible input combinations (test vectors):** For a circuit with $k$ primary inputs, there are $2^k$ possible input combinations.
3.  **Construct the fault table:**
    *   The rows of the table represent the input combinations (test vectors).
    *   The columns represent the outputs of the circuit for the fault-free case and for each assumed single stuck-at fault.
    *   For each input combination, determine the output of the fault-free circuit.
    *   For each input combination and each assumed fault, determine the output of the circuit *with that specific fault present*.
4.  **Identify detecting test vectors:** A test vector detects a particular fault if the output for that input combination in the fault-free column is different from the output in the column corresponding to the assumed fault.

**Important Point:** The fault table method is generally applied to *small* combinational circuits due to the exponential growth in the number of test vectors ($2^k$) and the number of faults ($2(n+m)$) as the circuit size increases.

**Reference:**

*   **Abramovici, Breuer, & Friedman, "Digital Systems Testing and Testable Design"**: Provides a comprehensive treatment of fault modeling and test generation techniques, including fault table analysis.
*   **Lee, "Digital Circuits and Logic Design"**: May cover fault detection methods for combinational circuits.

### Example: Fault Table for a 2-input AND Gate

Let's consider a 2-input AND gate with inputs A, B and output Y.
$Y = A \cdot B$

**1. Possible Stuck-at Faults:**

*   A SA0
*   A SA1
*   B SA0
*   B SA1
*   Y SA0
*   Y SA1

**2. Possible Input Combinations (Test Vectors):**

| A | B |
|---|---|
| 0 | 0 |
| 0 | 1 |
| 1 | 0 |
| 1 | 1 |

**3. Constructing the Fault Table:**

We need to determine the output for the fault-free circuit and for each of the assumed faults for each input combination.

Let's analyze for each fault:

*   **Fault-Free:** Y = A ⋅ B
*   **A SA0:** A is always 0. So, Y = 0 ⋅ B = 0.
*   **A SA1:** A is always 1. So, Y = 1 ⋅ B = B.
*   **B SA0:** B is always 0. So, Y = A ⋅ 0 = 0.
*   **B SA1:** B is always 1. So, Y = A ⋅ 1 = A.
*   **Y SA0:** Y is always 0.
*   **Y SA1:** Y is always 1.

Now, let's fill the fault table:

| Test Vector (A, B) | Fault-Free (Y) | A SA0 (Y) | A SA1 (Y) | B SA0 (Y) | B SA1 (Y) | Y SA0 (Y) | Y SA1 (Y) |
|--------------------|----------------|-----------|-----------|-----------|-----------|-----------|-----------|
| 00                 | 0              | 0         | 0         | 0         | 0         | 0         | 1         |
| 01                 | 0              | 0         | 1         | 0         | 0         | 0         | 1         |
| 10                 | 0              | 0         | 0         | 0         | 1         | 0         | 1         |
| 11                 | 1              | 0         | 1         | 0         | 1         | 0         | 1         |

**4. Identifying Detecting Test Vectors:**

A fault is detected if there is a difference between the "Fault-Free (Y)" column and a specific fault column.

*   **A SA0:**
    *   For (0,0), Fault-Free Y=0, A SA0 Y=0 (No detection)
    *   For (0,1), Fault-Free Y=0, A SA0 Y=0 (No detection)
    *   For (1,0), Fault-Free Y=0, A SA0 Y=0 (No detection)
    *   For (1,1), Fault-Free Y=1, A SA0 Y=0 ( **Detection!** )
    *   **Test vector (1,1) detects A SA0.**

*   **A SA1:**
    *   For (0,0), Fault-Free Y=0, A SA1 Y=0 (No detection)
    *   For (0,1), Fault-Free Y=0, A SA1 Y=1 ( **Detection!** )
    *   For (1,0), Fault-Free Y=0, A SA1 Y=0 (No detection)
    *   For (1,1), Fault-Free Y=1, A SA1 Y=1 (No detection)
    *   **Test vector (0,1) detects A SA1.**

*   **B SA0:**
    *   For (0,0), Fault-Free Y=0, B SA0 Y=0 (No detection)
    *   For (0,1), Fault-Free Y=0, B SA0 Y=0 (No detection)
    *   For (1,0), Fault-Free Y=0, B SA0 Y=0 (No detection)
    *   For (1,1), Fault-Free Y=1, B SA0 Y=0 ( **Detection!** )
    *   **Test vector (1,1) detects B SA0.**

*   **B SA1:**
    *   For (0,0), Fault-Free Y=0, B SA1 Y=0 (No detection)
    *   For (0,1), Fault-Free Y=0, B SA1 Y=0 (No detection)
    *   For (1,0), Fault-Free Y=0, B SA1 Y=1 ( **Detection!** )
    *   For (1,1), Fault-Free Y=1, B SA1 Y=1 (No detection)
    *   **Test vector (1,0) detects B SA1.**

*   **Y SA0:**
    *   For (0,0), Fault-Free Y=0, Y SA0 Y=0 (No detection)
    *   For (0,1), Fault-Free Y=0, Y SA0 Y=0 (No detection)
    *   For (1,0), Fault-Free Y=0, Y SA0 Y=0 (No detection)
    *   For (1,1), Fault-Free Y=1, Y SA0 Y=0 ( **Detection!** )
    *   **Test vector (1,1) detects Y SA0.**

*   **Y SA1:**
    *   For (0,0), Fault-Free Y=0, Y SA1 Y=1 ( **Detection!** )
    *   For (0,1), Fault-Free Y=0, Y SA1 Y=1 ( **Detection!** )
    *   For (1,0), Fault-Free Y=0, Y SA1 Y=1 ( **Detection!** )
    *   For (1,1), Fault-Free Y=1, Y SA1 Y=1 (No detection)
    *   **Test vectors (0,0), (0,1), and (1,0) detect Y SA1.**

**Summary of Detecting Test Vectors:**

*   A SA0: (1,1)
*   A SA1: (0,1)
*   B SA0: (1,1)
*   B SA1: (1,0)
*   Y SA0: (1,1)
*   Y SA1: (0,0), (0,1), (1,0)

To detect *all* faults, we need a set of test vectors that cover each fault at least once.
A minimal set of test vectors to detect all faults is {(0,1), (1,0), (1,1)}.
*   (0,1) detects A SA1.
*   (1,0) detects B SA1.
*   (1,1) detects A SA0, B SA0, Y SA0, and Y SA1 (as one of its detections).

The fault coverage for the set {(0,1), (1,0), (1,1)} is 100% for single stuck-at faults.

### Limitations of the Fault Table Method

The fault table method, while systematic, has significant limitations:

*   **Scalability:** The number of test vectors grows exponentially with the number of inputs ($2^k$). For circuits with more than a few inputs, generating and evaluating the full fault table becomes computationally infeasible.
*   **Fault Model Dependency:** It is only effective for the specific fault model it is designed for (typically single stuck-at faults). It doesn't account for multiple faults, bridging faults, or other types of physical defects.
*   **Combinational Circuits Only:** This method is inherently designed for combinational circuits. Applying it to sequential circuits is not straightforward, as the output depends on the current input and the internal state.
*   **Redundancy:** It doesn't inherently address redundant faults (faults that cannot be detected by any input combination).
*   **Test Set Minimization:** While it identifies detecting vectors, it doesn't necessarily provide the *minimal* set of test vectors. Finding the minimal set is a separate, often complex, problem (Set Cover problem).

**Reference:**

*   **Yarbrough, "Logic Design Applications and Design"**: Might discuss the practical limitations of brute-force testing methods.
*   **Biswas, "Logic Design Theory"**: Could offer insights into the complexity and limitations of fault detection algorithms.

### 3. Application to a More Complex Combinational Circuit (Conceptual)

Let's consider a circuit with a few more gates to illustrate the complexity.

**Example: 2-to-1 Multiplexer (MUX)**

A 2-to-1 MUX can be implemented using logic gates.
Let the inputs be I0, I1, and Select (S). The output Y is given by:
$Y = (\bar{S} \cdot I0) + (S \cdot I1)$

Let's assume a simplified implementation with AND gates, an OR gate, and an inverter.

**Circuit Diagram:**

```
      +---+
I0 ---|   |-----+
      | AND |     |
S ----|   |-----+     +----+
      +---+     |     |    |
                |-----| OR |---- Y
      +---+     |     |    |
I1 ---|   |-----+     +----+
      | AND |
S ----|   |
      +---+
      |
      |     +----+
      +-----|    |
            |INV |
            +----+
             |
             | (NOT S)
```

**Faults to Consider:**

*   Inputs to AND gates: I0 SA0/SA1, I1 SA0/SA1, S SA0/SA1, $\bar{S}$ SA0/SA1
*   Outputs of AND gates: Let's call them $O_0$ and $O_1$. $O_0$ SA0/SA1, $O_1$ SA0/SA1
*   Output of Inverter: $\bar{S}$ (already listed, but its internal nodes could also fail)
*   Output of OR gate: Y SA0/SA1

This quickly leads to a large number of faults.

**Test Vectors:**

The input combinations are (I0, I1, S). There are $2^3 = 8$ test vectors.

| I0 | I1 | S | $\bar{S}$ | $I0 \cdot \bar{S}$ ($O_0$) | $I1 \cdot S$ ($O_1$) | Y = $O_0 + O_1$ (Fault-Free) |
|----|----|---|-----------|--------------------------|--------------------------|----------------------------|
| 0  | 0  | 0 | 1         | 0                        | 0                        | 0                          |
| 0  | 0  | 1 | 0         | 0                        | 0                        | 0                          |
| 0  | 1  | 0 | 1         | 0                        | 0                        | 0                          |
| 0  | 1  | 1 | 0         | 0                        | 1                        | 1                          |
| 1  | 0  | 0 | 1         | 1                        | 0                        | 1                          |
| 1  | 0  | 1 | 0         | 0                        | 0                        | 0                          |
| 1  | 1  | 0 | 1         | 1                        | 0                        | 1                          |
| 1  | 1  | 1 | 0         | 0                        | 1                        | 1                          |

**Constructing the Fault Table:**

Now, you would systematically add columns for each potential stuck-at fault (e.g., I0 SA0, I0 SA1, S SA0, S SA1, $O_0$ SA0, $O_0$ SA1, $O_1$ SA0, $O_1$ SA1, Y SA0, Y SA1). For each test vector, you'd calculate the output with the fault present.

**Example: Detecting I0 SA0**

*   If I0 is SA0, then $I0 \cdot \bar{S}$ will always be 0.
*   In the table, this means the "$I0 \cdot \bar{S}$ ($O_0$)" column would be all 0s.
*   Comparing "Fault-Free (Y)" with the output affected by "I0 SA0":
    *   Vector (1,0,0): Fault-Free Y=1. If I0 SA0, $O_0$=0, $O_1$=0, Y=0. **Detection!**
    *   Vector (1,1,0): Fault-Free Y=1. If I0 SA0, $O_0$=0, $O_1$=0, Y=0. **Detection!**

**Key Takeaway for Complex Circuits:** The fault table becomes very large. More efficient methods are needed for larger designs.

**Reference:**

*   **Mano & Ciletti, "Digital Design with an introduction to HDL, VHDL and Verilog"**: Provides examples of MUX design and might touch upon testing these modules.

### 4. Practice Questions and Exercises

**Question 1:**
Consider a 2-input NOR gate with inputs A and B, and output Y. The Boolean expression is $Y = \overline{A+B}$.
List all possible single stuck-at faults for this gate.
Construct a fault table for this NOR gate and identify a minimal set of test vectors to detect all single stuck-at faults.

**Answer 1:**

**Possible Single Stuck-at Faults:**
*   A SA0
*   A SA1
*   B SA0
*   B SA1
*   Y SA0
*   Y SA1

**Fault Table:**

| Test Vector (A, B) | Fault-Free (Y) | A SA0 (Y) | A SA1 (Y) | B SA0 (Y) | B SA1 (Y) | Y SA0 (Y) | Y SA1 (Y) |
|--------------------|----------------|-----------|-----------|-----------|-----------|-----------|-----------|
| 00                 | 1              | 0         | 1         | 0         | 1         | 0         | 1         |
| 01                 | 0              | 0         | 0         | 0         | 0         | 0         | 1         |
| 10                 | 0              | 0         | 0         | 0         | 0         | 0         | 1         |
| 11                 | 0              | 0         | 0         | 0         | 0         | 0         | 1         |

**Analysis of Detecting Test Vectors:**

*   **A SA0:**
    *   (0,0): FF=1, A SA0=0. **Detects!**
    *   Test Vector: (0,0)

*   **A SA1:**
    *   (0,1): FF=0, A SA1=0. (No detect)
    *   (1,0): FF=0, A SA1=0. (No detect)
    *   (1,1): FF=0, A SA1=0. (No detect)
    *   *Correction*: Let's re-evaluate A SA1. If A is SA1, Y = $\overline{1+B}$.
        *   (0,0): Y = $\overline{1+0} = \overline{1} = 0$. FF=1. Detects!
        *   (0,1): Y = $\overline{1+1} = \overline{1} = 0$. FF=0. No detect.
        *   (1,0): Y = $\overline{1+0} = \overline{1} = 0$. FF=0. No detect.
        *   (1,1): Y = $\overline{1+1} = \overline{1} = 0$. FF=0. No detect.
    *   Test Vector: (0,0)

*   **B SA0:**
    *   (0,0): FF=1, B SA0=0. **Detects!**
    *   Test Vector: (0,0)

*   **B SA1:**
    *   (0,0): FF=1, B SA1=0. **Detects!**
    *   Test Vector: (0,0)

*   **Y SA0:**
    *   (0,0): FF=1, Y SA0=0. **Detects!**
    *   Test Vector: (0,0)

*   **Y SA1:**
    *   (0,1): FF=0, Y SA1=1. **Detects!**
    *   (1,0): FF=0, Y SA1=1. **Detects!**
    *   (1,1): FF=0, Y SA1=1. **Detects!**
    *   Test Vectors: (0,1), (1,0), (1,1)

**Minimal Set of Test Vectors:**
From the above, test vector (0,0) detects A SA0, B SA0, Y SA0.
Test vector (0,0) also detects A SA1.
The faults Y SA1 require any input combination other than (0,0).

Let's check the fault coverage for the set {(0,0), (0,1)}:
*   (0,0) detects A SA0, A SA1, B SA0, B SA1, Y SA0.
*   (0,1) detects Y SA1.

Therefore, a minimal set of test vectors to detect all single stuck-at faults is **{(0,0), (0,1)}**.

**Question 2:**
What are the primary limitations of the fault table method that make it impractical for large digital systems? Briefly explain each limitation.

**Answer 2:**

The primary limitations of the fault table method are:

1.  **Scalability/Complexity:** The number of possible input test vectors grows exponentially with the number of primary inputs ($2^k$). Similarly, the number of potential faults also grows with circuit size. This makes the fault table extremely large and computationally expensive (time and memory) to generate and analyze for circuits with more than a few inputs or gates.
2.  **Fault Model Dependency:** The method is only effective for the specific fault model it is designed to detect, most commonly single stuck-at faults. It does not account for multiple stuck-at faults (where more than one line is stuck at a logic value) or other types of physical defects like bridging faults, open faults, or timing faults, which are prevalent in real hardware.
3.  **Combinational Circuits Only:** The fault table method is designed for combinational circuits, where the output is solely a function of the current inputs. It is not directly applicable to sequential circuits, as their outputs depend on both current inputs and their internal state (memory elements), making fault analysis significantly more complex.

### 5. Important Points to Remember

*   **Faults** are deviations from the intended behavior of a digital circuit.
*   The **stuck-at fault model** (SA0, SA1) is a fundamental model for fault analysis.
*   The **Fault Table Method** is a systematic way to generate test vectors for detecting single stuck-at faults in combinational circuits.
*   A **test vector** detects a fault if the circuit's output under that vector differs between the fault-free and faulty cases.
*   The method's **scalability** is its major drawback, making it suitable only for small combinational circuits.
*   It does not cover **multiple faults** or other fault models.
*   Efficient test generation for larger systems relies on more advanced algorithms and design-for-testability techniques.

### 6. Relation to Hazards

While this topic focuses on faults, it's important to note that hazards (static and dynamic) are also forms of incorrect behavior. However, hazards are typically caused by **propagation delays** in the gates and are transient in nature, occurring during input changes. Faults, on the other hand, are usually considered permanent physical defects. The fault table method does not directly address hazards. Designing hazard-free circuits (CO2) requires different techniques like Karnaugh maps simplification, race conditions analysis, and careful circuit synthesis. However, understanding faults is crucial for verifying the overall reliability and correctness of the designed system (CO3).

---
