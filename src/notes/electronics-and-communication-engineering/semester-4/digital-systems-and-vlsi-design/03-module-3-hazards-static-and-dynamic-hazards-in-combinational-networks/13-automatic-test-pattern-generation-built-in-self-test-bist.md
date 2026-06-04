---
title: "Automatic test pattern generation – Built in Self-Test (BIST)"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe763"
status: "completed"
scrapedAt: "2026-05-23T17:48:20.149Z"
---
# DIGITAL SYSTEMS AND VLSI DESIGN - Module 3: Hazards & Testing

## Topic: Automatic Test Pattern Generation (ATPG) & Built-in Self-Test (BIST)

---

### **Introduction**

The previous modules focused on the design and analysis of digital systems, including combinational and sequential circuits. A critical aspect of realizing reliable digital systems, especially in VLSI, is ensuring their functionality through rigorous testing. This module introduces fundamental concepts of testing digital circuits and then delves into two key strategies: Automatic Test Pattern Generation (ATPG) and Built-in Self-Test (BIST). While the module title mentions "Hazards," this topic specifically bridges the gap between understanding circuit behavior (including potential hazards) and the practicalities of verifying that behavior through testing.

---

### **1. The Need for Testing Digital Circuits**

**Key Concept:** Manufacturing defects and design errors can lead to incorrect circuit behavior. Testing is essential to detect these faults and ensure the delivered system functions as intended.

*   **Faults in Digital Circuits:**
    *   **Manufacturing Defects:** These are physical imperfections introduced during the fabrication process. Common examples include:
        *   **Stuck-at Faults:** A signal line is permanently stuck at logic 0 (stuck-at-0, SA0) or logic 1 (stuck-at-1, SA1). This is the most commonly modeled fault.
        *   **Bridging Faults:** Two signal lines that should be separate are unintentionally connected.
        *   **Open Circuits:** A wire or connection is broken.
    *   **Design Errors:** Mistakes in the logic design itself can lead to incorrect functionality, even if the manufacturing process is perfect.
*   **Why Testing is Crucial in VLSI:**
    *   **High Integration Density:** VLSI circuits contain millions or billions of transistors, increasing the probability of defects.
    *   **Complexity:** The intricate nature of VLSI designs makes manual verification extremely difficult.
    *   **Reliability:** Faulty chips can lead to system failures, data corruption, and safety hazards.
    *   **Cost:** Failed chips are expensive to replace and can cause significant downtime.
*   **Testability:** The degree to which a circuit's internal states and outputs can be observed and controlled to detect faults. Designing for testability is a proactive approach to simplify testing.

**Referenced Textbooks/References:**
*   **Digital Systems Testing and Testable Design by Breuer, Abramovici, Friedman:** This book is a foundational text for digital system testing and covers fault modeling extensively.
*   **Digital Principles & Design by Givone:** Discusses fault models and testing in the context of digital logic.

---

### **2. Automatic Test Pattern Generation (ATPG)**

**Key Concept:** ATPG is a systematic process for generating a set of input test vectors (patterns) that can detect a significant portion of the possible faults in a digital circuit.

*   **Test Vector (Test Pattern):** A specific set of input values applied to a circuit to check its behavior. The resulting output is compared to the expected correct output.
*   **Fault Model:** A simplified representation of the physical defects that can occur in a circuit. The stuck-at fault model is the most prevalent.
*   **How ATPG Works (General Idea):**
    1.  **Fault Model Selection:** Typically, the stuck-at fault model is assumed.
    2.  **Fault Simulation:** A potential test vector is simulated on the circuit, and the outputs are compared to the fault-free circuit's outputs. If they differ, the vector detects the fault.
    3.  **Test Generation:** Algorithms are used to create test vectors that specifically target un-detected faults.
*   **Key ATPG Algorithms:**
    *   **Path Sensitization:** A fundamental technique where a specific fault is activated (e.g., setting a line to its stuck-at value) and a path is sensitized to propagate the effect of the fault to an observable output.
        *   **Steps:**
            1.  **Fault Activation:** Set the primary input or internal node to the value it is stuck at.
            2.  **Fault Propagation:** Create a path from the faulty node to an output, ensuring all intermediate nodes on the path have a specific logic value that doesn't mask the fault effect. This often involves assigning values to other inputs.
            3.  **Consistency:** Ensure that all assignments made are consistent with the circuit's logic. If inconsistencies arise, backtracking might be necessary.
    *   **D-Algorithm:** A classic path sensitization algorithm developed by Joseph R. Breuer. It uses a special symbol 'D' to represent a signal and its inverse (D for 'difference').
    *   **PODEM (Path-Oriented Decision Making):** An improved algorithm that uses a "decision tree" approach to guide the search for test vectors, often leading to faster generation.
    *   **FAN (Fanout-Oriented Test Generation):** An algorithm that efficiently handles fanout structures, which are common in digital circuits and can complicate test generation.
*   **ATPG in Practice:**
    *   **Sequential Circuits:** Testing sequential circuits is significantly more complex than combinational circuits due to the presence of memory elements. ATPG for sequential circuits often requires identifying a *state* and then generating a sequence of inputs to reach a specific state and detect a fault. This is often handled by converting the sequential circuit into an equivalent finite state machine (FSM) for testing or by using scan-chain techniques (discussed later).
    *   **Test Coverage:** The percentage of detectable faults that are detected by a given set of test vectors. High test coverage (e.g., 99% or more) is usually desired.

**Referenced Textbooks/References:**
*   **Digital Design: Principles and Practices by Wakerly:** Discusses test patterns and their generation in the context of circuit design.
*   **Logic Design Theory by Biswas:** Provides a theoretical foundation for fault modeling and testing, including ATPG concepts.
*   **Digital Systems Testing and Testable Design by Breuer, Abramovici, Friedman:** This is a primary resource for in-depth understanding of ATPG algorithms.

---

### **3. Built-in Self-Test (BIST)**

**Key Concept:** BIST is a design technique where the testing circuitry is integrated directly into the integrated circuit (IC) itself, allowing the IC to test itself. This significantly reduces the need for external Automatic Test Equipment (ATE).

*   **Motivation for BIST:**
    *   **Reduced Test Cost:** Eliminates the need for expensive, high-speed ATE.
    *   **Easier Testing:** Testing can be performed by simpler, lower-cost equipment.
    *   **In-System Testing:** Allows for testing within the operating environment, which is crucial for field maintenance and diagnostics.
    *   **Testing Complex Circuits:** Effective for testing ASICs and FPGAs with high pin counts and internal complexity.
*   **Core Components of a BIST System:**
    1.  **Test Pattern Generator (TPG):** Generates pseudorandom or pseudoexhaustive test patterns.
    2.  **Circuit Under Test (CUT):** The main functional logic of the IC.
    3.  **Signature Analyzer (SA):** Compresses the output responses of the CUT into a compact "signature" using techniques like Linear Feedback Shift Registers (LFSRs).
    4.  **Control Logic:** Manages the test operation, including starting the test, activating the TPG and SA, and comparing the resulting signature with a pre-computed golden signature.

*   **Types of BIST:**
    *   **Random Pattern BIST (RP-BIST):**
        *   **TPG:** Typically uses an LFSR to generate pseudorandom test patterns.
        *   **Signature Analyzer:** Also uses an LFSR.
        *   **Advantages:** Simple to implement, good for detecting many common faults.
        *   **Disadvantages:** May not achieve very high fault coverage for certain types of faults (e.g., sequential faults, complex combinational faults). Requires careful design of the TPG and SA to achieve acceptable coverage.
    *   **Pseudoexhaustive BIST:**
        *   **TPG:** Generates all possible input combinations for specific "cone" of logic, ensuring that all faults within that cone are tested. This often requires partitioning the circuit and using dedicated TPGs for each partition.
        *   **Advantages:** Can achieve higher fault coverage than random pattern BIST.
        *   **Disadvantages:** More complex to implement, requires more on-chip test logic.
    *   **Stored-Response BIST (SR-BIST):**
        *   **TPG:** Generates specific, pre-computed test vectors.
        *   **Signature Analyzer:** Compares the CUT's output responses with stored "golden" responses.
        *   **Advantages:** High fault coverage, precise testing.
        *   **Disadvantages:** Requires significant on-chip memory to store the test vectors and expected responses, which can be costly in terms of silicon area.

*   **Linear Feedback Shift Registers (LFSRs):**
    *   **Function:** LFSRs are widely used in BIST as both TPGs and Signature Analyzers due to their ability to generate maximal-length pseudorandom sequences or to compact responses efficiently.
    *   **Structure:** A shift register where the input bit is a linear function (XOR) of some of the bits in the register. The taps from which feedback is taken determine the sequence generated.
    *   **Polynomial:** The behavior of an LFSR is defined by its characteristic polynomial. A primitive polynomial is required for maximal-length sequences.
    *   **Example of LFSR as TPG:**
        ```
        +---+---+---+
        | Q0| Q1| Q2|
        +---+---+---+
         ^   ^   ^
         |   |   |
         +---+---|-----> XOR ------> Input
             |       ^
             +-------|
        ```
        In this example, the feedback is `Q0 XOR Q2`. The state `000` is usually avoided as it will remain `000`.
    *   **Example of LFSR as Signature Analyzer:**
        When applied to the outputs of a circuit, the circuit outputs are XORed into the LFSR's input. The final state of the LFSR after the test is the "signature."

*   **Scan Chain Design for BIST:**
    *   **Scan Chains:** A design-for-testability technique where the flip-flops in a sequential circuit are interconnected to form a shift register (scan chain). This allows direct access to the internal state of the sequential circuit.
    *   **BIST with Scan:**
        1.  The scan chain is used to load test patterns into the flip-flops.
        2.  The functional logic is activated.
        3.  The outputs of the functional logic are captured into the scan chain flip-flops.
        4.  The scan chain is then shifted out to be analyzed by the signature analyzer.
        5.  This process is repeated for different scan chains.
    *   **Advantages:** Significantly improves controllability and observability, making ATPG easier and BIST more effective for sequential circuits.

**Referenced Textbooks/References:**
*   **Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog by Mano & Ciletti:** Discusses testing and might cover BIST concepts in the context of design methodologies.
*   **Introduction to Digital Design Using Digilent FPGA Boards by Haskell & Hanna:** May provide practical examples of implementing testing techniques, potentially including BIST concepts on FPGAs.
*   **Digital Systems Testing and Testable Design by Breuer, Abramovici, Friedman:** Covers various testing techniques, including BIST architecture and implementation details.
*   **Digital Logic Applications and Design by Yarbrough:** Likely to discuss testing methodologies and potentially BIST as a practical approach.

---

### **4. Relationship to Hazards**

**Key Concept:** While ATPG and BIST are primarily about fault detection, understanding hazards (static and dynamic) is crucial for ensuring the *correctness* of the circuit's behavior that is being tested.

*   **How Hazards Impact Testing:**
    *   **Static Hazards:** Can cause temporary incorrect outputs during stable input changes. If the test vector is applied during a transient state caused by a static hazard, it might be falsely identified as a fault or a correct output might be misinterpreted.
    *   **Dynamic Hazards:** Can cause a signal to transition multiple times before settling to its final value. This can lead to race conditions in sequential circuits or intermittent errors in combinational circuits that are being clocked.
*   **BIST and Hazards:**
    *   BIST, especially random pattern BIST, might not explicitly target hazard conditions. However, if a circuit is designed to be hazard-free (e.g., by using multiple-output prime implicants in K-maps), it's less likely to exhibit problematic hazard behavior during testing.
    *   For pseudoexhaustive or stored-response BIST, the generated test sequences are designed to cover specific input transitions, and if the circuit is hazard-free for these transitions, the test will be more reliable.
*   **ATPG and Hazards:**
    *   ATPG algorithms aim to detect faults. They generally assume a functional model of the circuit. If a circuit has persistent hazards that cause incorrect outputs under specific input conditions, these conditions might be covered by the ATPG process if they manifest as a fault (e.g., stuck-at). However, transient issues due to hazards are harder for ATPG to directly address.
    *   A common strategy is to design circuits to be hazard-free first, and then apply ATPG and BIST.

**Referenced Textbooks/References:**
*   **Digital Principles & Design by Givone:** Covers hazards in combinational networks.
*   **Digital Design: Principles and Practices by Wakerly:** Also discusses hazards and their mitigation.
*   **Digital Logic Applications and Design by Yarbrough:** Provides insights into hazard-free design.
*   **Switching and Finite Automata Theory by Kohavi & Jha:** Offers a deep theoretical treatment of hazards and their implications.

---

### **5. Learning Outcomes Addressed**

*   **LO 1:** Understand the necessity and basic principles of testing digital circuits. (Covered in Section 1)
*   **LO 2:** Explain the concept of Automatic Test Pattern Generation (ATPG) and its role in digital testing. (Covered in Section 2)
*   **LO 3:** Describe the basic architecture and operation of Built-in Self-Test (BIST) systems. (Covered in Section 3)
*   **LO 4:** Discuss the relationship between circuit hazards and the effectiveness of testing strategies like ATPG and BIST. (Covered in Section 4)
*   **LO 5:** Identify different types of BIST (e.g., random pattern, pseudoexhaustive) and their characteristics. (Covered in Section 3)
*   **LO 6:** Understand the role of LFSRs in BIST for test pattern generation and response compaction. (Covered in Section 3)
*   **LO 7:** Recognize the importance of design-for-testability techniques like scan chains in facilitating BIST. (Covered in Section 3)

---

### **6. Course Outcomes Alignment**

*   **CO1 (Sequential Networks):** While ATPG and BIST are not directly about designing sequential networks, testing these complex systems relies heavily on these techniques. Understanding BIST and ATPG is crucial for verifying the CSSNs designed according to CO1. (Knowledge Level: K2 for understanding testing of CSSNs)
*   **CO2 (Asynchronous Circuits, ALUs):** Similar to CO1, testing ASCs and ALUs requires effective ATPG and BIST strategies. The principles are transferable. (Knowledge Level: K2 for understanding testing of ASCs/ALUs)
*   **CO3 (Hazards & Fault Detection):** This is the most direct alignment. Understanding hazards is a prerequisite for effective testing. ATPG and BIST are the primary methods for fault detection, which is the ultimate goal after addressing hazards. (Knowledge Level: K2 for identifying/applying fault detection methods)
*   **CO4 (VLSI Design Flow, VHDL):** Testing is an integral part of the VLSI design flow. While this topic doesn't focus on VHDL modeling itself, the *need* for testing arises from the complexity managed by VHDL and the overall design process. BIST and ATPG are implemented using HDL constructs. (Knowledge Level: K2 for explaining VLSI design flow aspects related to testing)

---

### **7. Important Points to Remember**

*   **Fault Models:** The Stuck-at fault model is the most common.
*   **ATPG:** Aims to automatically generate input patterns to detect faults. Path sensitization is a key technique.
*   **BIST:** Integrates test logic into the IC to enable self-testing, reducing reliance on external ATE.
*   **LFSRs:** Play a dual role in BIST as Test Pattern Generators (TPG) and Signature Analyzers (SA).
*   **Test Coverage:** A metric for the effectiveness of a test set.
*   **Design-for-Testability (DFT):** Techniques like scan chains are essential for efficient testing, especially for sequential circuits.
*   **Hazards:** Can complicate testing by causing transient errors; designing hazard-free circuits is beneficial.

---

### **8. Practice Questions and Exercises**

**Question 1 (Conceptual):**
What is the primary difference between ATPG and BIST in terms of how tests are generated and applied?

**Answer:**
ATPG is a software/algorithmic process that generates test patterns which are then applied to the circuit using external test equipment. BIST, on the other hand, embeds test pattern generation and response analysis circuitry directly into the chip, allowing the chip to test itself with minimal external support.

---

**Question 2 (LFSRs):**
Consider an LFSR with the following feedback connections: `Input = Q0 XOR Q2`. If the initial state is `101` (Q2=1, Q1=0, Q0=1), what will be the sequence of states for the next 5 clock cycles? (Assume Q0 is the rightmost bit).

**Answer:**
Let the state be represented as `[Q2, Q1, Q0]`.
Initial state: `[1, 0, 1]`

*   **Cycle 1:**
    *   Input = Q0 XOR Q2 = 1 XOR 1 = 0
    *   New state: `[Q1, Q0, Input]` = `[0, 1, 0]`
*   **Cycle 2:**
    *   Input = Q0 XOR Q2 = 0 XOR 0 = 0
    *   New state: `[Q1, Q0, Input]` = `[1, 0, 0]`
*   **Cycle 3:**
    *   Input = Q0 XOR Q2 = 0 XOR 1 = 1
    *   New state: `[Q1, Q0, Input]` = `[0, 0, 1]`
*   **Cycle 4:**
    *   Input = Q0 XOR Q2 = 1 XOR 0 = 1
    *   New state: `[Q1, Q0, Input]` = `[0, 1, 1]`
*   **Cycle 5:**
    *   Input = Q0 XOR Q2 = 1 XOR 0 = 1
    *   New state: `[Q1, Q0, Input]` = `[1, 1, 1]`

Sequence of states: `101` -> `010` -> `100` -> `001` -> `011` -> `111`

---

**Question 3 (BIST Architecture):**
Draw a block diagram of a typical Random Pattern BIST system for a combinational circuit. Label the main components.

**Answer:**
```
      +--------------------+
      | Test Pattern       |
      | Generator (TPG)    |
      | (e.g., LFSR)       |
      +--------+-----------+
               | (Test Patterns)
               v
      +--------------------+
      | Circuit Under Test |
      | (CUT)              |
      +--------+-----------+
               | (Outputs)
               v
      +--------------------+
      | Signature Analyzer |
      | (e.g., LFSR)       |
      +--------+-----------+
               | (Signature)
               v
      +--------------------+
      | Comparator/        |
      | Control Logic      | ----> (Match/Mismatch)
      | (vs. Golden Sig.)  |
      +--------------------+
```

---

**Question 4 (ATPG & Hazards):**
How can the presence of static hazards in a combinational circuit affect the outcome of an ATPG process?

**Answer:**
If a circuit exhibits static hazards, a signal might briefly transition to an incorrect value before settling to its final intended logic level during the application of a test vector. If the ATPG process is sensitive to these transient glitches (e.g., if the test equipment or simulation captures these glitches), it could lead to a false failure indication (reporting a fault when none exists) or, conversely, a correct output might be masked by a glitch. A well-designed circuit that is hazard-free simplifies the ATPG process and makes the test results more reliable.

---

**Question 5 (Scan Chains):**
Explain why scan chains are particularly useful for implementing BIST in sequential circuits.

**Answer:**
Sequential circuits have internal state stored in flip-flops, making their internal nodes difficult to observe or control directly. Scan chains convert flip-flops into shift registers, allowing them to be chained together. This enables:
1.  **Controllability:** Test patterns can be shifted directly into the flip-flops, initializing the internal state as required by the test.
2.  **Observability:** After applying inputs and allowing the circuit to operate, the internal states captured by the flip-flops can be shifted out and analyzed (e.g., by a signature analyzer in BIST).
This significantly enhances the testability of sequential circuits, allowing BIST to be effectively applied to them.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
