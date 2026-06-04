---
title: "Analysis of Asynchronous Sequential Circuits (ASC)"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 2: ASM Chart and its realization"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362f4"
status: "completed"
scrapedAt: "2026-05-23T16:21:04.185Z"
---
# DIGITAL SYSTEM DESIGN - Module 2: ASM Chart and its Realization

## Topic: Analysis of Asynchronous Sequential Circuits (ASC)

---

### **1. Introduction to Asynchronous Sequential Circuits (ASC)**

*   **Definition:** An asynchronous sequential circuit is a sequential circuit where the output depends not only on the present input but also on the past history of the input, and the state changes occur in response to changes in the input signals without the use of a clock signal. The state transitions are triggered by the input signals directly.

*   **Key Characteristics:**
    *   **No Clock Signal:** Unlike synchronous circuits, ASCs do not have a global clock signal to synchronize state transitions.
    *   **Input-Driven Transitions:** State changes are directly initiated by changes in input signals.
    *   **Potential for Hazards:** Due to the absence of a clock, critical races and hazards are significant concerns that need careful analysis and mitigation.
    *   **Faster Operation:** Potentially faster operation than synchronous circuits as they don't wait for clock edges.
    *   **More Complex Design:** Generally more complex to design and analyze due to the absence of a clock and the presence of races and hazards.

*   **Relevance to Module:** While Module 2 focuses on ASM charts and their realization, understanding the fundamental building blocks of sequential circuits, including asynchronous ones, provides a broader perspective. Analysis of ASCs helps in appreciating the importance of timing and synchronization in sequential circuit design.

*   **Textbook References:**
    *   **Givone, D. G. (2002). *Digital Principles & Design*. Tata McGraw Hill.** (Likely covers basic principles of sequential circuits, including asynchronous ones).
    *   **Mano, M. M., & Ciletti, M. D. (2018). *Digital Design with an introduction to HDL, VHDL and Verilog*. Pearson Education.** (May have introductory sections on asynchronous circuits or contrast them with synchronous designs).
    *   **Wakerly, J. F. (2008). *Digital Design*. Pearson Education.** (A comprehensive text that would undoubtedly cover asynchronous sequential circuits in detail).
    *   **Yarbrough, J. M. (2006). *Digital Logic Applications and Design*. Cengage India.** (Another strong contender for detailed coverage of ASCs).

---

### **2. Fundamental Concepts in ASC Analysis**

*   **State:** A configuration of the memory elements in the sequential circuit. In ASCs, memory elements are typically flip-flops or time delays.
*   **Transitions:** The change from one state to another. In ASCs, transitions are triggered by input changes.
*   **Excitation Table:** Similar to synchronous circuits, but often derived by considering the propagation delays of logic gates.
*   **State Table:** A table that lists the next state and output for each present state and input combination.
*   **Transition Diagram:** A graphical representation of the state table, showing states as nodes and transitions as directed arcs labeled with input conditions.

---

### **3. Components of an Asynchronous Sequential Circuit**

*   **Combinational Logic:** Implements the logic for determining the next state and output based on the present state and inputs.
*   **Memory Elements:** Store the present state of the circuit. These are typically realized using:
    *   **Flip-flops:** Can be used, but their clock input needs careful consideration in an asynchronous context.
    *   **Time Delays:** Often modeled as pure time delays (`τ`) introduced by logic gates or transmission lines. This is a more common approach in theoretical ASC analysis.

---

### **4. Analysis Procedure for Asynchronous Sequential Circuits**

The analysis of ASCs involves understanding how the circuit behaves over time, considering the propagation delays of the logic gates. This process can be quite involved and is crucial for identifying potential issues like races and hazards.

**Steps for Analysis:**

1.  **Identify Inputs and Outputs:** Determine the primary input signals and the primary output signals.
2.  **Identify State Variables:** Identify the internal state variables (often associated with the outputs of memory elements or feedback loops).
3.  **Write Boolean Expressions:** Derive the Boolean expressions for the next state (`Y_i`) and the outputs (`Z_j`) in terms of the present state variables (`y_i`) and inputs (`x_k`).
    *   `Y_i = f(y_1, y_2, ..., y_n, x_1, x_2, ..., x_m)`
    *   `Z_j = g(y_1, y_2, ..., y_n, x_1, x_2, ..., x_m)`
4.  **Model with Time Delays:**
    *   Replace the memory elements or feedback paths with equivalent time delays (`τ`). This is a crucial step in ASC analysis. The delay represents the time it takes for a signal to propagate through a gate or circuit.
    *   The next state variables can be represented as `Y_i(t + τ)`.
5.  **Construct the State Table:**
    *   **Determine Steady-State Values:** For each combination of present state and input, the circuit will eventually settle to a stable state if no races occur. This steady-state value is determined by iteratively applying the Boolean expressions, considering the delays, until the state variables no longer change.
    *   **Tabulate State Transitions:** The state table shows the next state(s) for each present state and input. In ASCs, multiple next states might be possible if races occur.
6.  **Construct the Transition Diagram:**
    *   Represent states as circles and transitions as arrows.
    *   Label transitions with the input conditions that cause them.
7.  **Identify Races:** A race condition occurs when a state variable changes its value multiple times due to a single input change before settling into its final value. This can lead to incorrect state transitions.
    *   **Non-<bos>-critical Race:** The state variable eventually settles to the correct value, but intermediate states are visited.
    *   **Critical Race:** The state variable can settle into more than one final state, depending on the relative delays of the signals. This is highly undesirable.
8.  **Identify Hazards:** Hazards are temporary incorrect outputs that occur during a state transition due to differing propagation delays in different logic paths.
    *   **Static Hazard:** The output should remain constant but briefly flickers to the opposite value.
    *   **Dynamic Hazard:** The output should change once but flickers multiple times.
    *   **Functional Hazard:** Occurs when multiple inputs change simultaneously, leading to an incorrect output at any point in time.
9.  **Resolve Races and Hazards:** If races or hazards are detected, the circuit design needs to be modified. This typically involves:
    *   **Adding Redundant Gates/Logic:** To ensure that all possible paths for a given state transition have the same total delay.
    *   **Choosing Appropriate Memory Elements:**
    *   **Using Delay Elements Explicitly:**

---

### **5. Types of Races and Their Analysis**

*   **Race Condition:** Occurs when a state variable changes its value multiple times due to a single input change. This is dependent on the relative delays of signals reaching the state variable's input.

*   **Types of Races:**
    *   **Non-Critical Race:**
        *   **Definition:** All possible paths from a given state and input combination lead to the *same* next state, even if intermediate states are visited.
        *   **Analysis:** The circuit will eventually reach the correct next state. This is generally acceptable but can lead to slower operation.
    *   **Critical Race:**
        *   **Definition:** Different paths from a given state and input combination lead to *different* next states. The final state depends on which path settles first, which is unpredictable due to variations in gate delays.
        *   **Analysis:** Critical races are **unacceptable** and must be eliminated.

*   **Example of Race Condition (from Wakerly, 2008):**
    Consider a simple feedback loop with a state variable `y` and input `x`.
    Let `Y = x ⊕ y` (XOR operation).
    Suppose the present state is `y=0` and input `x` changes from `0` to `1`.
    The next state equation is `Y = 1 ⊕ y`.

    If `y=0`, then `Y = 1 ⊕ 0 = 1`. The state should change from `0` to `1`.

    Now, consider the effect of propagation delays. Let's assume the XOR gate has a delay `τ`.
    If `x` changes from `0` to `1`, the input to the XOR changes.
    *   The state variable `y` is `0`.
    *   The input `x` becomes `1`.
    *   The expression for `Y` is `Y = x ⊕ y`.

    Let's assume `y` is a D flip-flop, and the input `x` is connected to the D input. The feedback is from the Q output back to the D input.
    Present state: `Q=0`, `y=0`. Input `x=0`.
    `D = x ⊕ y = 0 ⊕ 0 = 0`. So `Q` should remain `0`.

    Now, let `x` change to `1`.
    The input to the XOR is now `x=1`.
    The state `y` is `0`.
    The output of the XOR (which is `D`) becomes `D = 1 ⊕ 0 = 1`.
    If the delay is such that `y` changes to `1` before the XOR output settles, then the new feedback value `y=1` would be fed back.
    This would make `D = 1 ⊕ 1 = 0`.
    The state variable `Q` could then transition from `0` to `1` and then back to `0`, or it might settle at `1` or `0` depending on the exact timing.

    *   **Analysis:** This is a race condition because the state variable `y` (representing the output of the flip-flop) is supposed to change based on the input `x`. The feedback path means the new value of `y` influences the input `D` of the flip-flop. If the delay of the XOR gate is comparable to or longer than the delay for the state variable to change, a race can occur.

---

### **6. Types of Hazards and Their Analysis**

*   **Hazard:** A temporary incorrect output value that occurs during a state transition due to differing propagation delays in different logic paths leading to the output or next state variables.

*   **Types of Hazards:**
    *   **Static Hazard:**
        *   **Definition:** The output should remain constant (either `0` or `1`) during a transition but briefly changes to the opposite value before settling.
        *   **Types:**
            *   **Static-1 Hazard:** Output should be `1` but briefly becomes `0`.
            *   **Static-0 Hazard:** Output should be `0` but briefly becomes `1`.
        *   **Occurrence:** Typically occurs in combinational logic circuits when a change in one input variable causes a change in another input variable, and the output logic is sensitive to this intermediate change.
    *   **Dynamic Hazard:**
        *   **Definition:** The output should change only once (from `0` to `1` or `1` to `0`) but flickers multiple times before settling to the correct value.
        *   **Occurrence:** Occurs in circuits with multiple logic levels where a change in input can propagate through different paths with different delays.
    *   **Functional Hazard:**
        *   **Definition:** Occurs when multiple input variables change simultaneously. This can lead to incorrect output values at any point during the transition.
        *   **Types:**
            *   **Single-input change:** Not possible.
            *   **Multiple-input change:** When two or more inputs change at the same time.

*   **Example of Static Hazard (from Givone, 2002):**
    Consider a combinational logic circuit with the Boolean expression `Z = AB + A'C + BC`.
    Let's analyze the case where `A=0`, `B=1`, `C=1`. The output `Z` should be `1`.
    *   `AB = 0 * 1 = 0`
    *   `A'C = 1 * 1 = 1`
    *   `BC = 1 * 1 = 1`
    *   `Z = 0 + 1 + 1 = 1`.

    Now, let `B` change from `1` to `0` while `A=0` and `C=1`.
    The ideal transition should be:
    *   `AB` changes from `0` to `0`.
    *   `A'C` remains `1`.
    *   `BC` changes from `1` to `0`.
    *   `Z = 0 + 1 + 0 = 1`. The output remains `1`.

    However, if the circuit realization is directly from the expression:
    *   The term `BC` will change from `1` to `0`.
    *   The term `A'C` will remain `1`.
    *   The term `AB` will remain `0`.

    If the delays in the `BC` term are slightly different from the `A'C` term, and if the AND gates for `BC` and `AB` have delays, and the OR gate has a delay:
    Suppose the `BC` AND gate is slower.
    *   Initially, `BC=1`. `Z` is driven by `A'C=1`, so `Z=1`.
    *   `B` changes to `0`.
    *   `BC` output starts to change towards `0`.
    *   If the `BC` AND gate is slow, its output might briefly go to `0` *after* the `A'C` term has already propagated.
    *   Consider the situation where `B` changes to `0`. The `BC` term's input changes, and its output transitions.
    *   The `AB` term's input changes and its output transitions.
    *   If `A=0`, `C=1`, `B=1` -> `0`:
        *   `AB`: `0*1=0` -> `0*0=0`
        *   `A'C`: `1*1=1` (constant)
        *   `BC`: `1*1=1` -> `0*1=0`
    *   The output `Z` is driven by `AB + A'C + BC`.

    If we directly implement `Z = AB + A'C + BC` with ANDs and an OR:
    Let `X1 = AB`, `X2 = A'C`, `X3 = BC`. Then `Z = X1 + X2 + X3`.
    When `B` changes from `1` to `0`:
    *   `X1` remains `0`.
    *   `X2` remains `1`.
    *   `X3` changes from `1` to `0`.
    *   `Z` is driven by `0 + 1 + X3`.
    *   When `X3` is `1`, `Z` is `1`.
    *   When `X3` becomes `0`, `Z` should be `1`.
    *   If the OR gate receives `X2=1` and `X3` transitions through `1->0`, and the delay for `X3` to reach `0` is longer than the time it takes for `X2` to stabilize, the output `Z` might briefly be `0` if the OR gate momentarily sees `0 + 1 + 0` (if `X3` transitions through `0` before reaching `1` or if it was `1` and now is `0`).

    A potential static hazard occurs if the expression `Z = AB + A'C` is used, and `B` changes from `1` to `0` while `A=0` and `C=1`. Here, `Z = 0*1 + 1*1 = 1`. If `B` changes to `0`, `Z = 0*0 + 1*1 = 1`.
    The problem arises if there's a path where `BC` goes to `0` and another where `A'C` is `1`.
    Consider `Z = AB + A'C`. Let `A=0`, `C=1`.
    If `B=1`: `Z = 0*1 + 1*1 = 1`.
    If `B=0`: `Z = 0*0 + 1*1 = 1`.
    The issue is when `B` changes. If `A'C` is `1`, this part of the logic keeps `Z=1`. However, if the `AB` term also changes due to `B`'s transition, and the logic path for `AB` is different, a transient `0` could appear.

    **To eliminate static hazards:** Use Karnaugh maps and add redundant terms that cover the changing input variable. For example, for `Z = AB + A'C`, adding `BC` (which is redundant in the Boolean expression `AB + A'C + BC`) can cover the transition. The covered K-map would have all `1`s covered by prime implicants, ensuring no single input change can cause a transient `0`.

*   **Example of Dynamic Hazard (from Mano & Ciletti, 2018):**
    Consider a circuit with three levels of logic. If an input changes, the signal propagates through the gates. A dynamic hazard occurs if the signal flips multiple times. This often happens when a term changes from `1` to `0` and then back to `1` (or vice-versa) due to different delay paths.

*   **Elimination of Hazards:**
    *   **Static Hazards:** Can be eliminated by ensuring that every required `1` output is covered by at least two product terms (prime implicants) in the Sum of Products form, or by ensuring every `0` output is covered by at least two sum terms in the Product of Sums form. This is achieved by adding redundant terms to the Boolean expression, which are visually represented as adding extra loops in the Karnaugh map.
    *   **Dynamic Hazards:** Are generally harder to eliminate and are often avoided by using specific gate implementations or by ensuring that circuits have at most two levels of logic for combinational parts, or by using hazard-free flip-flops.

---

### **7. State Table Minimization for ASCs**

*   **Purpose:** Similar to synchronous circuits, state table minimization is crucial to reduce the complexity and number of states and memory elements.
*   **Procedure:** The standard state minimization procedures (e.g., using partitioning or implication tables) can be applied. However, special care must be taken to consider the possibility of races and hazards introduced by the minimization process.
*   **Considerations for ASCs:**
    *   **Race-Free State Assignment:** After minimization, assigning state variable codes to the states is critical. The assignment must ensure that no critical races occur during transitions between states. This is a significant challenge in ASC design.
    *   **Hazard-Free Output Logic:** The combinational logic generating the outputs and next state variables must be designed to be hazard-free for the chosen state assignment.

---

### **8. Design of Asynchronous Sequential Circuits**

While the topic is "Analysis," understanding the design process helps in analyzing why certain structures and issues arise.

**Steps for Designing an ASC:**

1.  **Primitive Flow Table Construction:** Represent the desired behavior as a primitive flow table, listing the possible next states for each state and input combination.
2.  **State Minimization:** Minimize the number of states using standard techniques, ensuring that no state merging creates new critical races.
3.  **State Assignment:** Assign binary codes to the states. This is the most critical step for ASC design. The goal is to find a state assignment that:
    *   Avoids critical races.
    *   Minimizes the complexity of the combinational logic.
    *   Is hazard-free.
    *   **Key technique:** Transition table analysis with specific state assignments to identify and eliminate critical races.
4.  **Implementation:** Realize the circuit using flip-flops or delay elements and combinational logic.
5.  **Hazard and Race Analysis:** Analyze the designed circuit for any remaining races and hazards and modify the logic if necessary (e.g., by adding redundant gates).

---

### **9. Relationship to ASM Charts**

*   **ASM Charts (Algorithmic State Machine Charts):** These charts are used to describe the behavior of sequential circuits, both synchronous and asynchronous. They provide a graphical representation of states, decisions (based on inputs), and actions (output generation).
*   **Analysis of ASCs and ASM Charts:**
    *   An ASM chart can represent the behavior of an ASC. The state transitions in the ASM chart correspond to the state transitions in the ASC.
    *   However, analyzing an ASC from its circuit diagram involves deriving a state table and transition diagram, and then identifying races and hazards. An ASM chart provides a higher-level abstraction of the functionality.
    *   The analysis of ASCs helps in understanding the underlying timing issues that are abstracted away in a typical ASM chart description for synchronous circuits. For ASCs, the timing aspects are paramount.
    *   For an ASC derived from an ASM chart, one would still need to perform the detailed circuit analysis (steps 4-9 above) to ensure its correctness and identify potential timing problems.

---

### **10. Course Outcomes Alignment**

*   **CO1: Analyze asynchronous and clocked synchronous sequential circuits (Knowledge Level: K3)**
    *   This topic directly addresses the analysis of asynchronous sequential circuits. Understanding races, hazards, and the underlying state transition mechanisms is key to analyzing their behavior. The comparison with synchronous circuits is implicit.
*   **CO2: Design hazard-free digital circuits (Knowledge Level: K3)**
    *   The analysis of hazards in ASCs is a prerequisite for designing hazard-free circuits. Identifying and understanding the causes of static, dynamic, and functional hazards is covered.
*   **CO3: Identify faults in digital circuits (Knowledge Level: K3)**
    *   While not explicitly about fault injection, understanding races and hazards in ASCs involves analyzing the circuit's behavior under various signal propagation conditions. These conditions can be analogous to certain types of faults or timing degradations. A faulty gate with incorrect delay could manifest as an unexpected race or hazard.
*   **CO4: Apply VHDL programming in digital system design (Knowledge Level: K3)**
    *   While this topic focuses on analytical procedures, the concepts learned here are crucial when implementing ASCs (or synchronous circuits) using Hardware Description Languages like VHDL. Understanding timing issues, races, and hazards informs how one models and simulates these circuits effectively in VHDL. For instance, modeling propagation delays in VHDL is essential for simulating ASC behavior accurately.

---

### **11. Important Points to Remember**

*   **No Clock:** The defining characteristic of asynchronous circuits.
*   **Input-Driven Transitions:** State changes are direct responses to input changes.
*   **Races:** Occur when state variables change multiple times for a single input change.
    *   **Critical races are unacceptable.**
*   **Hazards:** Temporary incorrect outputs due to propagation delay differences.
    *   **Static, Dynamic, and Functional hazards.**
*   **Time Delays:** Explicitly modeled in ASC analysis.
*   **State Assignment is Crucial:** For eliminating critical races and designing hazard-free ASCs.
*   **Analysis is Complex:** Requires careful consideration of all possible delay paths.
*   **Mitigation:** Adding redundant logic, careful state assignment, and choosing appropriate components are key.

---

### **12. Practice Questions & Exercises**

**Question 1:**
What is the primary difference between synchronous and asynchronous sequential circuits? Explain why races and hazards are more critical concerns in asynchronous sequential circuits.

**Answer:**
The primary difference is the absence of a global clock signal in asynchronous circuits. Synchronous circuits rely on a clock pulse to synchronize state transitions, ensuring all state changes occur at predictable times. Asynchronous circuits, however, respond directly to input changes, making their state transitions dependent on the propagation delays of logic gates and signal paths. This lack of synchronization makes them susceptible to race conditions (where state variables can change unpredictably due to differing signal arrival times) and hazards (temporary incorrect outputs due to unequal path delays), which are much less of a concern in synchronously clocked systems where transitions are synchronized to clock edges.

---

**Question 2:**
Consider an asynchronous sequential circuit with a single state variable `y` and input `x`. The next state logic is given by the Boolean expression `Y = x'y + xy'`. If `y=1` and `x` changes from `0` to `1`, analyze the circuit for potential race conditions. Assume the XOR operation has a propagation delay `τ`.

**Answer:**
The next state equation is `Y = x'y + xy'`. This is equivalent to `Y = x ⊕ y` (XOR).
Present state: `y=1`. Input `x=0`.
`Y = (0)'(1) + (0)(1)' = 1*1 + 0*0 = 1`. So, `y` should remain `1`.

Now, input `x` changes from `0` to `1`.
The input to the XOR gate changes from `0` to `1`. The other input to the XOR is `y=1`.
The output `Y` is `Y = x ⊕ y`.

Let's trace the transition:
*   Initially: `x=0`, `y=1`. `Y = 0 ⊕ 1 = 1`. The state `y` is stable at `1`.
*   Input `x` changes to `1`.
*   The XOR gate receives new inputs `x=1` and `y=1`.
*   The output `Y` should become `1 ⊕ 1 = 0`.
*   This transition of `Y` from `1` to `0` will cause the state variable `y` to change from `1` to `0`.

**Race Condition Analysis:**
If the XOR gate has a delay `τ`, the output `Y` will change after `τ`.
*   As soon as `Y` changes to `0`, the state variable `y` becomes `0`.
*   Now, the inputs to the XOR gate become `x=1` (new input) and `y=0` (new state).
*   The XOR output `Y` will then be calculated as `1 ⊕ 0 = 1`.
*   This new change in `Y` from `0` to `1` will cause the state variable `y` to change from `0` back to `1`.

This scenario describes a **critical race**. The state variable `y` is supposed to transition from `1` to `0` when `x` changes from `0` to `1`. However, due to the feedback path (`y` being an input to the XOR gate that determines `Y`), the change in `y` itself alters the output of the XOR gate. If the XOR gate's delay `τ` is such that `y` changes from `1` to `0` and this new `y=0` value is fed back before the initial `Y=0` output has settled or been registered, the XOR gate will re-evaluate with `x=1` and `y=0`, producing `Y=1`. This can lead to `y` oscillating between `0` and `1` or settling unpredictably.

---

**Question 3:**
Describe the difference between static and dynamic hazards and provide a method to eliminate static hazards.

**Answer:**
*   **Static Hazard:** A static hazard is a transient glitch in the output of a combinational circuit that should remain constant (either 0 or 1) during a specific input transition.
    *   **Static-1 Hazard:** The output should be 1 but briefly drops to 0.
    *   **Static-0 Hazard:** The output should be 0 but briefly goes to 1.
    These occur in multi-level logic where different paths from input to output have different propagation delays.

*   **Dynamic Hazard:** A dynamic hazard is a transient glitch where the output should change only once (e.g., from 0 to 1) but instead flickers multiple times (e.g., 0-1-0-1) before settling to the final correct value. These occur in circuits with three or more levels of logic where signal propagation through different paths leads to multiple transitions.

*   **Elimination of Static Hazards:**
    Static hazards can be eliminated by ensuring that for any input change that should result in a constant output, all possible paths contributing to that output are covered by redundant terms in the Boolean expression. This is typically achieved by using Karnaugh maps (K-maps). When constructing a Sum of Products (SOP) expression from a K-map, ensure that every '1' cell in the map is covered by at least two prime implicants. This is done by adding "redundant" prime implicants that cover a '1' that is already covered by other prime implicants. These redundant implicants effectively create parallel logic paths with equal delays that cancel out the glitch.

    For example, consider the function `F(A,B,C) = AB + A'C`. If `A=0`, `C=1`, and `B` changes from `1` to `0`, the output should remain `1`.
    *   `AB` term: `0*1=0` -> `0*0=0`
    *   `A'C` term: `1*1=1` (constant)
    *   `F = AB + A'C`.
    When `B` changes, `AB` term changes. If the path through `A'C` is faster, the output remains `1`. However, if the path through `AB` is slower, the output might briefly dip to `0` when `AB` changes from `0` to `0` (if the logic is such that the `AB` AND gate is slow and the OR gate momentarily sees the other term changing or not properly gated).
    By adding the redundant term `BC`, the expression becomes `F = AB + A'C + BC`. This ensures that for the case `A=0`, `C=1`, and `B` transitions, the `BC` term (`0*1=0` initially, then `1*1=1` when `B=1`, and `0*1=0` when `B=0`) might cover the transition. A more robust elimination would ensure that all '1' cells in the K-map are covered by at least two loops.

---
