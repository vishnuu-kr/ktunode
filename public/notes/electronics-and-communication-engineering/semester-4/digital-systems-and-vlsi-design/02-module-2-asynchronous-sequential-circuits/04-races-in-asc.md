---
title: "Races in ASC"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 2: Asynchronous Sequential Circuits"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe752"
status: "completed"
scrapedAt: "2026-05-23T17:48:08.799Z"
---
# Module 2: Asynchronous Sequential Circuits (ASCs) - Races in ASCs

## 1. Introduction to Asynchronous Sequential Circuits (ASCs)

Asynchronous Sequential Circuits (ASCs) are digital circuits whose operation is not synchronized by a central clock signal. Their state changes are triggered by the arrival of input signals. This makes them potentially faster than synchronous circuits but also more prone to design challenges.

**Key Concepts:**

*   **Memory Elements:** Typically implemented using latches (SR, D, JK) which are inherently asynchronous.
*   **Input Variables:** The external signals that influence the circuit's behavior.
*   **State Variables (Internal State):** The outputs of the memory elements, representing the current state of the circuit.
*   **Output Variables:** Functions of the state variables and input variables, representing the circuit's output.
*   **Primitive Flow Table:** A tabular representation of an ASC that lists all possible states and transitions based on input changes. It specifies the next state and output for each input combination in each state.
*   **Excitation Table:** Derived from the flow table, this table specifies the required inputs to the memory elements (latches) to achieve the desired next state.

**Referencing Textbooks:**

*   **Givone:** Emphasizes the fundamental difference between synchronous and asynchronous circuits, focusing on the absence of a clock and the reliance on propagation delays.
*   **Wakerly:** Provides a thorough introduction to the behavior of ASCs, including the concepts of stable and unstable states, and the critical role of input changes.
*   **Yarbrough:** Discusses the state transition diagrams and flow tables as crucial tools for designing ASCs.
*   **Mano & Ciletti:** Introduces ASCs from a system-level perspective, highlighting their potential for speed and the challenges in managing their asynchronous nature.

---

## 2. Understanding Races in ASCs

**Races** are a fundamental problem in the design of ASCs. They occur when, during a state transition, the state variables do not change in a predictable manner due to variations in propagation delays through different logic paths. This can lead to the circuit entering an unintended or erroneous state.

**Key Concepts:**

*   **Race Condition:** A situation where two or more state variables change simultaneously or in an unpredictable order due to unequal propagation delays.
*   **Critical Race:** A race condition where the final state depends on the specific order in which the state variables change. If this order is not guaranteed, the circuit's behavior is unpredictable.
*   **Non-critical Race:** A race condition where the final state is the same regardless of the order in which the state variables change. These are generally acceptable.
*   **Propagation Delay:** The time it takes for a signal to propagate through a logic gate or a combinational logic network. In ASCs, these delays are crucial and can vary between different paths.

**Types of Races:**

1.  **Simple Race:** Occurs when a single state variable is supposed to change, but its transition is affected by other changing inputs or feedback.
2.  **Conditional Race:** Occurs when the outcome of a race depends on the specific input conditions and the timing of changes.
3.  **Multiple-Feedback Race:** Occurs when multiple state variables are involved in a race condition.

**Referencing Textbooks:**

*   **Givone:** Dedicates significant attention to the definition and analysis of races, categorizing them and illustrating their impact with examples.
*   **Wakerly:** Explains races as a direct consequence of unequal delays in feedback paths, emphasizing the need for careful state assignment to resolve them.
*   **Yarbrough:** Uses state transition diagrams to visually represent potential races and how they can lead to incorrect state transitions.
*   **Kohavi & Jha:** Provides a rigorous theoretical treatment of races, including the conditions under which they occur and methods for their detection and resolution.

---

## 3. Causes of Races

Races arise from the inherent nature of asynchronous circuits:

*   **Changes in Multiple Inputs Simultaneously:** When multiple input variables change at the same time, the corresponding changes in state variables might not be processed in a predictable order.
*   **Changes in State Variables and Inputs Simultaneously:** If an input change and a state variable change occur concurrently, the combinational logic might be evaluated with inconsistent intermediate values.
*   **Changes in Multiple State Variables Simultaneously:** Similar to input changes, if multiple state variables are scheduled to change, the order can be affected by propagation delays.

**The Underlying Cause: Unequal Propagation Delays**

The fundamental reason behind races is the variation in propagation delays through different combinational logic paths. Consider a scenario where two state variables, Y1 and Y2, are supposed to change simultaneously. If the logic path for Y1 has a shorter propagation delay than the path for Y2, Y1 will change before Y2. If the circuit's next state depends on this order, a race occurs.

**Example:**

Imagine a state where two feedback signals are supposed to change. Let's say the next state depends on the value of `Y1 AND Y2`.

*   **Scenario 1 (No Race):** If both Y1 and Y2 change, and the combinational logic is evaluated after both have settled to their new values.
*   **Scenario 2 (Critical Race):** If Y1 changes from 0 to 1, and Y2 changes from 1 to 0, and the combinational logic evaluates the expression `Y1 AND Y2` at intermediate stages:
    *   If Y1 changes first, and Y2 is still 1, the output might momentarily be 0 (1 AND 1).
    *   If Y2 changes first, and Y1 is still 0, the output will be 0 (0 AND 0).
    *   If Y1 becomes 1 and Y2 becomes 0, the final output is 0.

If the intermediate evaluation matters, and the order of change isn't guaranteed, a race condition exists.

**Referencing Textbooks:**

*   **Givone:** Provides detailed examples of how propagation delays affect state transitions and lead to races.
*   **Wakerly:** Uses timing diagrams to illustrate how unequal delays can cause state variables to settle in the wrong order.
*   **Mano & Ciletti:** Connects races to the fundamental limits of asynchronous operation, where precise timing is paramount.

---

## 4. Types of Races and Their Detection

**Key Concepts:**

*   **State Table Analysis:** Races are primarily detected by analyzing the state table and the associated combinational logic.
*   **Excitation Equations:** The equations for the next state of each flip-flop (or the input to a latch) are critical for understanding potential races.

**Types of Races Revisited:**

*   **Simple Race:** A state variable changes to a value, and during its transition, the input conditions change again before the state variable has settled to its final intended value. The state variable might oscillate or settle to an incorrect value.

    *   **Detection:** Look for transitions in the state table where a state variable is supposed to change, and the conditions for another transition (which might involve the same state variable) are met before the first transition is complete.

*   **Multiple-Feedback Race (or Closed-Loop Race):** This is the most common and problematic type. It involves a cycle of dependencies where changes in state variables and inputs cause a sequence of unstable states that may not return to the original stable state.

    *   **Detection:** Examine the state table. If a state is unstable, and the transition to the next unstable state involves a change in state variables that, due to delays, could lead back to the original unstable state or a different unstable state than intended, a multiple-feedback race is likely.

**Example of Detecting a Race (using a State Table Snippet):**

Consider a state where the current state is `S1` (Y1=0, Y2=0) and the inputs are `X1=0, X2=0`. The next state is `S2` (Y1=1, Y2=0), and the output is 0.

Now, suppose due to a race, `Y1` changes to 1, but `Y2` doesn't change immediately. If, during this partial transition, an input changes (e.g., `X1` becomes 1), and the combinational logic now evaluates to a state where the next state should be `S3` (Y1=1, Y2=1).

*   **If `Y1` settles to 1 and `Y2` is still 0:** The circuit is in an intermediate state.
*   **If, from this intermediate state, `Y2` then changes to 1:** The circuit reaches `S3`.
*   **But, what if the order of changes was `Y1=0->1`, then `Y2=0->1`?** This might be the intended path.
*   **However, what if `Y1=0->1` happened, and then `Y2` momentarily became 1 due to a spurious glitch, and then back to 0?** This is a race.

**Referencing Textbooks:**

*   **Givone:** Provides a systematic method for detecting races by examining the state table and identifying cycles of unstable states.
*   **Wakerly:** Emphasizes the "state cycle" concept in race detection, where a sequence of unstable states can occur.
*   **Yarbrough:** Uses state diagrams to illustrate how races can lead to loops or unintended transitions.
*   **Kohavi & Jha:** Introduces formal methods and graphical techniques for identifying and classifying races.

---

## 5. Resolving Races

Resolving races is crucial for the correct operation of ASCs. The primary methods involve **state assignment** and **using delay elements**.

**Key Strategies:**

1.  **State Assignment:**
    *   **Objective:** Assign binary codes to the states such that no critical races occur during transitions.
    *   **Non-Racy State Assignment:** Choose binary assignments for the states such that for any transition from state A to state B, the binary codes of A and B differ in only one bit position, and that bit position corresponds to a single state variable. This ensures that when a transition occurs, only one state variable needs to change, minimizing the potential for races.
    *   **Adjacent State Assignment:** Assign binary codes to adjacent states (states reachable in one transition) that differ in only one bit position. This is a key principle for avoiding races.

2.  **Using Delay Elements (Pulse Mode and Level Mode):**
    *   **Pulse Mode:** In pulse mode operation, inputs are asserted for a short duration (a pulse). The circuit is designed such that the input pulse disappears before any state variable can change. This inherently avoids races as the input change is transient.
    *   **Level Mode:** In level mode, inputs are asserted and remain at a logic level until explicitly changed. This is where races are more prevalent. To resolve races in level mode:
        *   **Adding Delay Elements:** Inserting delay elements in feedback paths can ensure that state variables settle before subsequent logic evaluations. However, this can reduce speed and introduce synchronization issues if not done carefully.
        *   **Ensuring Single State Variable Changes:** The goal of state assignment is to ensure that for any transition, only one state variable changes at a time. If this is not achievable, specific logic design might be needed.

**Referencing Textbooks:**

*   **Givone:** Presents detailed strategies for state assignment and uses Karnaugh maps to find non-racy assignments.
*   **Wakerly:** Offers practical guidance on selecting state assignments to avoid critical races and explains the limitations of using added delays.
*   **Yarbrough:** Demonstrates how to modify flow tables and assign binary codes to achieve race-free operation.
*   **Mano & Ciletti:** Discusses the trade-offs between speed and reliability when designing ASCs, highlighting how race resolution can impact performance.
*   **Biswas:** Covers advanced techniques for state assignment and race detection in asynchronous circuits.

---

## 6. Techniques for Race-Free Design

The core of designing race-free ASCs lies in careful analysis and systematic design procedures.

**Key Techniques:**

1.  **Flow Table Reduction:**
    *   **Purpose:** To minimize the number of states in the circuit, making state assignment easier and reducing the complexity of the logic.
    *   **Process:** Merge equivalent states in the primitive flow table.

2.  **State Assignment:**
    *   **Goal:** Assign unique binary codes to each state such that no critical races occur.
    *   **Methods:**
        *   **Adjancency Requirement:** States that are reachable from each other in a single transition should have binary codes that differ in only one bit position.
        *   **Partitioning Method:** Group states based on input combinations and output requirements. States within a group should be assignable to codes that differ in only one bit.
        *   **Heuristic Methods:** Using Karnaugh maps or other graphical techniques to find optimal assignments that satisfy adjacency requirements.

3.  **Generating the Excitation and Output Tables:**
    *   Once a non-racy state assignment is made, the excitation requirements for the memory elements (latches) and the output logic can be determined.

4.  **Implementing the Logic:**
    *   Using latches (e.g., SR or D latches) for memory elements.
    *   Designing combinational logic for the latch inputs (excitation) and the circuit outputs.

**Example: Resolving a Race with State Assignment**

Let's consider a simplified transition from state `S0` (00) to `S1` (01) with input `X=0`. If `S0` is assigned `00` and `S1` is assigned `01`, the transition only requires the second bit to change from 0 to 1. This is a non-critical race if only one bit changes.

However, if `S0` is `00` and `S1` is `11`, the transition requires both bits to change. If the logic path for the first bit has a different delay than the path for the second bit, a critical race can occur.

**Referencing Textbooks:**

*   **Givone:** Provides a step-by-step procedure for race-free design, including state assignment using Karnaugh maps.
*   **Wakerly:** Offers a practical methodology for designing ASCs, emphasizing the iterative process of state assignment and verification.
*   **Yarbrough:** Illustrates how to modify flow tables and choose state assignments to eliminate races.
*   **Mano & Ciletti:** Discusses the inherent challenges of asynchronous design and the need for structured approaches to ensure correctness.

---

## 7. Handling Hazards in ASCs

Hazards are another critical issue in digital design, particularly in ASCs. While the focus of this topic is races, it's important to note that hazards can exacerbate race conditions.

**Key Concepts:**

*   **Hazard:** An undesirable transient output pulse that occurs during a state transition when the output should remain constant.
*   **Static Hazard:** Occurs when an output should remain at a constant value (0 or 1) but momentarily glitches to the opposite value during a transition.
*   **Dynamic Hazard:** Occurs when an output should change only once but glitches multiple times before settling to the final value.

**Relation to Races:**

*   If a hazard occurs in the combinational logic that determines the next state of a latch, it can cause the state variable to transition erratically, potentially leading to a race condition.
*   The timing of hazard pulses can be unpredictable, making them difficult to manage alongside propagation delay variations.

**Resolving Hazards:**

*   **Redundant Gates:** Adding redundant terms to the Boolean expression and implementing them with extra gates can eliminate static hazards.
*   **Careful State Assignment:** Often, a good state assignment that also avoids races can indirectly help in mitigating hazards.
*   **Using Specific Gate Types:** Some logic gates are less prone to hazards than others.

**Referencing Textbooks:**

*   **Givone:** Covers hazard detection and elimination techniques in detail.
*   **Wakerly:** Explains how hazards can impact ASCs and how to design hazard-free combinational logic.
*   **Yarbrough:** Provides examples of hazards and methods to remove them.
*   **Mano & Ciletti:** Discusses the practical implications of hazards in digital systems.
*   **Biswas:** Offers a comprehensive treatment of hazard analysis and synthesis.

---

## 8. Practice Questions and Answers

**Question 1:**
What is a critical race in an asynchronous sequential circuit, and why is it problematic?

**Answer:**
A critical race is a race condition where the final state of the circuit depends on the specific order in which state variables change due to unequal propagation delays. It is problematic because the output is unpredictable and can lead to incorrect circuit operation.

**Question 2:**
Explain one method to detect a race condition in an ASC.

**Answer:**
One method to detect a race condition is to analyze the state table. Look for transitions where multiple state variables are supposed to change simultaneously. If, for any sequence of state variable changes, the circuit can enter an unintended state or loop through a series of unstable states, a race condition exists. This often involves examining cycles of unstable states in the state transition diagram.

**Question 3:**
Describe the primary goal of state assignment in resolving races.

**Answer:**
The primary goal of state assignment is to assign binary codes to the states such that for any transition between states, only one state variable changes at a time. This minimizes the likelihood of critical races caused by differing propagation delays in the logic paths for multiple state variables. Ideally, adjacent states in the state diagram should have binary codes that differ in only one bit position.

**Question 4:**
How can adding a delay element help resolve a race condition?

**Answer:**
Adding a delay element in a feedback path can ensure that a state variable has settled to its final value before the combinational logic is re-evaluated based on that state variable's updated value. This can prevent intermediate, unstable states from causing incorrect transitions. However, the placement and value of the delay are critical to avoid introducing new synchronization problems.

**Question 5:**
Consider the following snippet of a primitive flow table for an ASC.
| Current State | X=0 | X=1 |
|---|---|---|
| a (00) | a, 0 | b, 0 |
| b (??) | c, 1 | a, 0 |
| c (??) | b, 1 | c, 0 |

Assume state 'a' is stable for X=0. If we assign binary codes: a=00, b=01, c=11.
Describe a potential race condition that might occur during a transition from 'a' to 'b' when input X changes from 0 to 1.

**Answer:**
*   **Initial State:** State 'a' (00), X=0. Output = 0.
*   **Transition Trigger:** Input X changes from 0 to 1.
*   **Intended Next State:** State 'b' (01). Output = 0.

Let's examine the state variables:
*   From 'a' (00) to 'b' (01) with X=1:
    *   The first state variable (Y1) remains 0.
    *   The second state variable (Y2) needs to change from 0 to 1.

Now, consider the combinational logic for Y2. If its excitation equation is something like `Y2 = Y1 OR X`, and the transition is from X=0 to X=1, and Y1 is 0:
*   When X changes from 0 to 1, Y2 might be affected.
*   If the delay for the Y1 input to the latch for Y2 is different from the delay for the X input to that latch, a race can occur.

**Potential Race:**
If the state assignment was different, e.g., a=00, b=10. Then, the transition from a (00) to b (10) would require Y1 to change from 0 to 1, and Y2 to remain 0. If the logic for Y1 is sensitive to the order of changes in Y1 itself (feedback) or other inputs, a race can happen.

In the provided example with a=00, b=01, c=11:
The transition from 'a' (00) to 'b' (01) with X=1 involves Y2 changing from 0 to 1. Y1 stays at 0.
The transition from 'a' (00) to 'c' (11) with X=0 (if b was skipped) would involve Y1 changing from 0 to 1, and Y2 changing from 0 to 1. If the logic for Y1 and Y2 has different delays, a critical race can occur.

Let's re-evaluate the question's provided state assignment and the typical flow table logic:
From state 'a' (00) to state 'b' (01) when X changes from 0 to 1.
*   Y1 remains 0.
*   Y2 changes from 0 to 1.

If the excitation equation for Y2 is, for example, `Y2_next = (!Y1 & X) | (Y1 & !X) | ...` (for a JK latch, or similar for a D latch).
Let's assume it's a simple D latch where `Y2_next = D2`.

Consider the transition from `a` (Y1=0, Y2=0) to `b` (Y1=0, Y2=1) when X changes from 0 to 1.
The logic for Y2 will receive a new input based on X=1 and the current state Y1=0.

If there's a path where the change in X from 0 to 1 is processed, and this change in X influences the excitation for Y2, and Y2 is also fed back into the combinational logic that determines its own next state, a race can occur.

**A more concrete example:** If the state 'b' was assigned '10' instead of '01'.
Transition a(00) -> b(10) with X=1.
Y1: 0 -> 1
Y2: 0 -> 0

Here, only Y1 changes. This is generally fine.

The original assignment a=00, b=01, c=11 is problematic.
*   a(00) -> b(01) when X=1: Y2 changes from 0 to 1.
*   a(00) -> c(11) when X=0 (hypothetically, if X=0 leads to c): Y1 changes 0->1, Y2 changes 0->1. This could be a critical race if the delays differ.
*   b(01) -> c(11) when X=0: Y1 changes 0->1, Y2 changes 1->1. Only Y1 changes.
*   c(11) -> b(01) when X=0: Y1 changes 1->0, Y2 changes 1->1. Only Y1 changes.

The issue arises if the *intermediate* state during a transition can be misinterpreted. For instance, if Y1 is supposed to change from 0 to 1, and Y2 from 0 to 1, and due to delays, Y1 becomes 1, but Y2 is still 0, the circuit might momentarily be in state `10`. If this `10` state leads to an unintended transition, a race occurs.

**Focusing on the given assignment (a=00, b=01, c=11):**
Consider transition from 'a' (00) to 'b' (01) with X changing from 0 to 1.
*   Y1 stays 0.
*   Y2 changes from 0 to 1.

If the logic for Y2 has some feedback path or is influenced by other signals that change simultaneously, and the delay through that path is different from the direct path for Y2, a race is possible. However, in a simple Y2 = Y1 | X scenario, if Y1=0, then Y2 = X. When X goes from 0 to 1, Y2 simply follows.

**The problematic aspect of this assignment comes from the possibility of multiple state variables changing:**
Consider if there was a transition from 'a' (00) to 'c' (11) due to some input change. Both Y1 and Y2 would need to change. If the combinational logic producing Y1 and Y2 has unequal delays, a critical race is likely. The assignment itself creates adjacency that requires two bits to change, which is a red flag for race conditions.

---

## 9. Important Points to Remember

*   **ASCs are clockless:** State changes are driven by input signals and propagate through combinational logic.
*   **Propagation delays are critical:** Variations in delays are the root cause of races.
*   **Critical races are dangerous:** They lead to unpredictable behavior.
*   **State assignment is key:** Assign binary codes to states to ensure only one state variable changes per transition.
*   **Adjacent states should differ by only one bit.**
*   **Flow table analysis is essential:** For detecting and resolving races.
*   **Hazards can worsen races:** Design hazard-free combinational logic.
*   **Level mode vs. Pulse mode:** Pulse mode is generally easier to design race-free but limits operation. Level mode requires careful race resolution.

---

## 10. Alignment with Course Outcomes

*   **CO1 (CSSNs):** While this module focuses on ASCs, understanding the fundamental differences in timing and state transitions from synchronous circuits is a prerequisite for a comprehensive understanding of sequential logic. (Indirectly supports CO1 by contrast).
*   **CO2 (ASCs):** This module directly addresses the design and analysis of ASCs. It covers:
    *   **Design and analysis of ASCs:** The entire module is dedicated to this.
    *   **Flow table reduction:** A crucial step in ASC design.
    *   **Address race conditions:** The core topic of this module.
    *   **State assignment problems:** How to choose assignments to avoid races.
    *   **Design of ASCs:** The overall goal is to design functional ASCs.
    (Directly covers CO2 at Knowledge Level K3 – applying knowledge to design and analyze).
*   **CO3 (Hazards):** This module touches upon hazards as they relate to ASCs, explaining how they can interact with races. (Supports CO3 at Knowledge Level K2 – explaining concepts).
*   **CO4 (VLSI Design Flow, VHDL):** While this module focuses on theoretical design principles, understanding these fundamental issues is essential for anyone moving into VLSI design. The principles learned here inform how circuits are implemented and the challenges designers face, which is relevant to the practical aspects of VHDL modeling and simulation in VLSI. (Supports CO4 at Knowledge Level K2 – understanding foundational concepts).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
