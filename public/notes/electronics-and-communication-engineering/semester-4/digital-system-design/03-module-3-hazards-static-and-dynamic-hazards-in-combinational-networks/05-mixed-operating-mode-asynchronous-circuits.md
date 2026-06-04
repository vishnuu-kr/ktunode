---
title: "Mixed operating mode asynchronous circuits"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe71c"
status: "completed"
scrapedAt: "2026-05-23T17:47:53.330Z"
---
# Digital System Design - Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

## Topic: Mixed Operating Mode Asynchronous Circuits

This topic explores asynchronous circuits that operate in different modes, focusing on how the interaction between these modes can lead to hazards and the strategies for their mitigation.

### 1. Introduction to Asynchronous Circuits and Operating Modes

*   **Asynchronous Circuits:** These circuits do not have a global clock signal. Their operation is governed by the arrival of input signals and the propagation delays within the circuit. They are generally faster and consume less power than synchronous circuits.
*   **Operating Modes in Asynchronous Circuits:** Asynchronous circuits can exhibit different behaviors or "modes" of operation depending on the input conditions and the circuit's state. These modes can be static (the output should ideally remain constant) or dynamic (the output is expected to change).

### 2. Understanding Hazards in Combinational Networks

Hazards are undesirable transient output spikes or glitches that occur in combinational circuits when one or more inputs change. These glitches are caused by differing propagation delays of different signal paths.

*   **Static Hazards:**
    *   **Definition:** A static hazard occurs when a single-input change is expected to result in a constant output, but due to unequal propagation delays, the output momentarily changes to the opposite logic level before settling to its correct value.
    *   **Types:**
        *   **Static-0 Hazard:** The output should remain '0' but momentarily glitches to '1'.
        *   **Static-1 Hazard:** The output should remain '1' but momentarily glitches to '0'.
    *   **Cause:** Occurs in circuits implementing product-of-sums (POS) or sum-of-products (SOP) forms where a single input change might turn off one product term (or sum term) before another product term (or sum term) that should keep the output at the desired level turns on.

*   **Dynamic Hazards:**
    *   **Definition:** A dynamic hazard occurs when a single-input change is expected to result in a transition of the output (e.g., 0 to 1), but due to unequal propagation delays, the output might change multiple times before settling to its final value (e.g., 0 to 1 to 0 to 1).
    *   **Cause:** Occurs in circuits implementing functions with more than two levels of logic (e.g., AND-OR-Invert or OR-AND-Invert structures) where a single input change can cause intermediate signals to change multiple times.

### 3. Mixed Operating Mode Asynchronous Circuits and Hazard Manifestation

In mixed operating mode asynchronous circuits, the interaction between different operating states and input transitions can exacerbate hazard issues.

*   **Scenario:** Consider a circuit where, for certain input combinations, it operates in a "static" mode (output should be stable), and for other input combinations, it operates in a "dynamic" mode (output should transition). A transition from a static mode input condition to another static mode input condition, or a transition that passes through a state where it would have been in a static mode, can be prone to hazards.
*   **Example:** Imagine an asynchronous circuit designed to control a system.
    *   **Mode 1 (Static-0):** When a specific set of inputs are active, the output should remain at '0' to indicate a "standby" state.
    *   **Mode 2 (Dynamic):** When a different set of inputs change, the output is expected to transition from '0' to '1' to signal an "active" state.
    *   **Problematic Transition:** If an input change causes the circuit to temporarily enter a state that would have been interpreted as "standby" (output should be '0') before transitioning to the "active" state, a static hazard could occur. Alternatively, if the path to the final "active" state involves multiple logic transitions due to differing delays, a dynamic hazard might manifest.

### 4. Hazard Detection and Mitigation in Mixed Mode Circuits

The principles for detecting and mitigating hazards in combinational circuits apply to mixed operating mode asynchronous circuits.

#### 4.1. Hazard Detection

*   **Karnaugh Maps (K-maps):** A common tool for visualizing and identifying hazards in SOP and POS forms.
    *   **Static Hazard Detection:** For SOP forms, a static-1 hazard exists if there's a cube in the K-map that covers a particular input change, but this cube is not covered by another larger, overlapping cube that also covers the input change. For POS forms, a static-0 hazard exists under similar conditions.
    *   **Dynamic Hazard Detection:** Dynamic hazards are harder to detect directly with K-maps alone as they involve multiple logic levels and signal propagation. They are typically identified by analyzing the circuit's gate-level implementation and considering propagation delays.

*   **Boolean Algebra:** Algebraic manipulation can be used to simplify expressions and identify potential hazard-prone terms.

*   **Circuit Simulation:** Using simulation tools to observe the circuit's behavior with specific input sequences and varying propagation delays is crucial for detecting hazards, especially dynamic ones.

#### 4.2. Hazard Mitigation Strategies

The goal is to ensure that for any single input change, the output remains stable and does not glitch.

*   **Covering Loops (for Static Hazards):**
    *   **Concept:** In K-maps, static hazards are eliminated by ensuring that for every input change that should result in a constant output, there is at least one *redundant* or *overlapping* product term (in SOP) or sum term (in POS) that maintains the correct output level.
    *   **Procedure (SOP - Static-1 Hazard):**
        1.  Map the function onto a K-map.
        2.  Identify all minterms for which the output is '1'.
        3.  Cover all essential prime implicants.
        4.  For any remaining '1' minterms that are not covered by essential prime implicants, identify groups of two minterms that correspond to a single input change. If such a pair is not covered by a prime implicant, add a new prime implicant (a loop) that covers these two minterms. This redundant loop ensures that when one product term turns off, another covers the transition.
    *   **Procedure (POS - Static-0 Hazard):** Similar logic applies to covering '0's on the K-map for POS forms.

*   **Multiple Levels of Logic (for Dynamic Hazards):**
    *   **Concept:** Dynamic hazards arise from hazards in intermediate signals within multi-level logic. To eliminate them, the circuit needs to be implemented in a way that ensures any transition on an input causes a direct and single transition on the output.
    *   **Strategy:** Implement the function using only two levels of logic (e.g., a two-level SOP or POS circuit). This often involves using consensus terms or other algebraic manipulation to create a hazard-free two-level representation. For example, if a circuit is implemented as AND-OR-Invert, a dynamic hazard can occur if any of the AND gates feeding into the OR gate experience a glitch, or if the OR gate itself experiences a glitch. By ensuring the logic is two-level, these intermediate hazards are removed.

*   **Consensus Theorem:** The consensus theorem ($XY + \overline{X}Z + YZ = XY + \overline{X}Z$) can be used to add redundant terms that eliminate dynamic hazards. The added term $YZ$ is the consensus of $XY$ and $\overline{X}Z$.

#### 4.3. Hazard-Free Implementation of Mixed Mode Circuits

*   **Two-Level Logic:** The most common way to ensure hazard-free operation in combinational circuits, including those with mixed operating modes, is to implement them using two-level SOP or POS forms.
    *   **SOP (Sum of Products):** Implemented using AND gates followed by an OR gate. To eliminate static-1 hazards, ensure all adjacent '1's on the K-map are covered by at least one product term. To eliminate static-0 hazards in the corresponding POS form, ensure all adjacent '0's are covered.
    *   **POS (Product of Sums):** Implemented using OR gates followed by an AND gate. To eliminate static-0 hazards, ensure all adjacent '0's on the K-map are covered by at least one sum term.

*   **Example: Designing a Hazard-Free Circuit**

    Consider a combinational circuit with inputs A, B, C, and output F.
    The truth table is as follows:

    | A | B | C | F |
    |---|---|---|---|
    | 0 | 0 | 0 | 0 |
    | 0 | 0 | 1 | 1 |
    | 0 | 1 | 0 | 1 |
    | 0 | 1 | 1 | 0 |
    | 1 | 0 | 0 | 1 |
    | 1 | 0 | 1 | 0 |
    | 1 | 1 | 0 | 1 |
    | 1 | 1 | 1 | 1 |

    **K-map for F:**

    ```
         BC
      A  00 01 11 10
      0  0  1  0  1
      1  1  0  1  1
    ```

    **Identifying Prime Implicants:**

    *   $\overline{A}B$ (covers minterms 2, 010, 011) - incorrect, should be A'B (010, 011) -> 2, 3
    *   $A\overline{B}$ (covers minterms 4, 100) - incorrect, should be AB' (100, 101) -> 4, 5
    *   $AB$ (covers minterms 6, 7)
    *   $\overline{A}\overline{B}C$ (covers minterm 1)
    *   $A\overline{B}\overline{C}$ (covers minterm 4) - already covered by $A\overline{B}$
    *   $ABC$ (covers minterm 7) - already covered by $AB$

    Let's re-evaluate the K-map and prime implicants correctly:

    ```
         BC
      A  00 01 11 10
      0  0  1  0  1    (m0, m1, m3, m2)
      1  1  0  1  1    (m4, m5, m7, m6)
    ```

    *   Prime Implicant 1: $\overline{A}B$ (covering m2, m3)
    *   Prime Implicant 2: $A\overline{B}$ (covering m4, m5)
    *   Prime Implicant 3: $AB$ (covering m6, m7)
    *   Prime Implicant 4: $\overline{A}\overline{B}C$ (covering m1)
    *   Prime Implicant 5: $A\overline{B}\overline{C}$ (covering m4) - Not prime, covered by PI 2.
    *   Prime Implicant 6: $ABC$ (covering m7) - Not prime, covered by PI 3.
    *   Prime Implicant 7: $A\overline{C}$ (covering m4, m6) - This is a prime implicant.

    Let's re-map and find essential and non-essential primes:

    ```
         BC
      A  00 01 11 10
      0  0  1  0  1    (m0, m1, m3, m2)
      1  1  0  1  1    (m4, m5, m7, m6)
    ```

    *   Essential Prime Implicant 1: $\overline{A}B$ (covers m2). m2 is only covered by this PI.
    *   Essential Prime Implicant 2: $A\overline{B}$ (covers m5). m5 is only covered by this PI.
    *   Essential Prime Implicant 3: $AB$ (covers m6). m6 is only covered by this PI.

    Now, consider the remaining uncovered '1's: m1 and m4.

    *   m1 is covered by $\overline{A}\overline{B}C$. This is a prime implicant.
    *   m4 is covered by $A\overline{B}$ (already essential) and $A\overline{C}$. $A\overline{C}$ is a prime implicant.

    Let's try a minimal SOP expression and check for static hazards.
    The minimal SOP derived from essential primes and covering remaining minterms is:
    $F = \overline{A}B + A\overline{B} + AB + \overline{A}\overline{B}C$

    Now, let's map again and think about adjacent cells that are '1'.
    Look at the transition from $A=0, B=1, C=0$ (m2, F=1) to $A=0, B=1, C=1$ (m3, F=0).
    The term $\overline{A}B$ covers both m2 and m3. This transition should be hazard-free.

    Consider the transition from $A=0, B=0, C=1$ (m1, F=1) to $A=1, B=0, C=1$ (m5, F=0).
    m1 is covered by $\overline{A}\overline{B}C$.
    m5 is covered by $A\overline{B}$.
    These terms are not directly related by a single input change.

    Let's examine the K-map for adjacent '1's that are covered by a single implicant.
    The groups are:
    1.  $\overline{A}B$ (covers m2, m3)
    2.  $A\overline{B}$ (covers m4, m5)
    3.  $AB$ (covers m6, m7)
    4.  $\overline{A}\overline{B}C$ (covers m1)
    5.  $A\overline{C}$ (covers m4, m6)

    *   m2 -> m3: Covered by $\overline{A}B$. Safe.
    *   m4 -> m5: Covered by $A\overline{B}$. Safe.
    *   m6 -> m7: Covered by $AB$. Safe.
    *   m0 -> m1: $000 \to 001$. F goes $0 \to 1$. Covered by $\overline{A}\overline{B}C$. Safe.
    *   m0 -> m2: $000 \to 010$. F goes $0 \to 1$. Covered by $\overline{A}B$. Safe.
    *   m0 -> m4: $000 \to 100$. F goes $0 \to 1$. This transition involves changes in A and C.
        *   For m0, output is 0.
        *   For m4, output is 1.
        *   Terms covering m4: $A\overline{B}$ and $A\overline{C}$.
        *   If we use $F = \overline{A}B + A\overline{B} + AB + \overline{A}\overline{B}C + A\overline{C}$:
            *   $m_0 (000)$: $0+0+0+0+0=0$
            *   $m_4 (100)$: $0+1+0+0+1=1$
            *   Transition $000 \to 100$: Output $0 \to 1$.
            *   When B changes $0 \to 1$, A and C stay the same.
            *   When A changes $0 \to 1$, B and C stay the same.
            *   When C changes $0 \to 1$, A and B stay the same.

    Let's consider a specific input transition: A=0, B=0, C=0 (m0) to A=1, B=0, C=0 (m4).
    The output should change from 0 to 1.
    The current SOP expression is $F = \overline{A}B + A\overline{B} + AB + \overline{A}\overline{B}C$.
    Let's analyze the terms during the transition $A=0 \to 1$, $B=0$, $C=0$:
    *   $\overline{A}B$: $1 \cdot 0 = 0 \to 0 \cdot 0 = 0$. (No change)
    *   $A\overline{B}$: $0 \cdot 1 = 0 \to 1 \cdot 1 = 1$. (Changes $0 \to 1$)
    *   $AB$: $0 \cdot 0 = 0 \to 1 \cdot 0 = 0$. (No change)
    *   $\overline{A}\overline{B}C$: $1 \cdot 1 \cdot 0 = 0 \to 0 \cdot 1 \cdot 0 = 0$. (No change)

    During the transition $A=0 \to 1$:
    *   $\overline{A}$ changes from $1 \to 0$.
    *   The term $A\overline{B}$ depends on A. When $A=0$, it's 0. When $A=1$, it's 1.
    *   The term $\overline{A}B$ depends on $\overline{A}$. When $\overline{A}=1$, it's contributing. When $\overline{A}=0$, it's not.

    Consider the transition $A=0, B=0, C=0$ (m0, F=0) to $A=1, B=0, C=0$ (m4, F=1).
    The intermediate signal for $\overline{A}$ might temporarily be '0' while A is still '0', or vice versa.
    If $\overline{A}$ glitches to '0' while A is $0$, then $\overline{A}B$ would go $0 \to 0$, but the change in $\overline{A}$ would be $1 \to 0$.

    Let's consider a different viewpoint: when A changes from 0 to 1, the term $\overline{A}B$ should turn OFF. If there are delay differences, $\overline{A}$ might transition slightly faster than A.
    At $A=0$, $\overline{A}=1$. Term $\overline{A}B = 1 \cdot B = B$. If $B=0$, this term is 0.
    At $A=1$, $\overline{A}=0$. Term $\overline{A}B = 0 \cdot B = 0$.

    The critical part is when A changes from 0 to 1.
    The term $A\overline{B}$ is $0 \to 1$.
    The term $\overline{A}B$ is $1 \to 0$ (as $\overline{A}$ goes $1 \to 0$).
    If $\overline{A}$ changes to 0 *before* A changes to 1, then the term $\overline{A}B$ will turn off. If $A\overline{B}$ has not yet turned on, there can be a momentary lapse where both terms are 0, leading to a static-0 hazard.
    However, for a static-1 hazard, the output should stay 1 but glitches to 0.
    For a static-0 hazard, the output should stay 0 but glitches to 1.

    In our K-map, let's look at transitions that should keep the output constant, but are covered by a single implicant.
    Consider the transition from m0 (000, F=0) to m2 (010, F=1). Only B changes.
    Covered by $\overline{A}B$. Safe.

    Consider the transition from m4 (100, F=1) to m6 (110, F=1). Only B changes.
    Covered by $A\overline{B}$ (covers m4, m5) and $AB$ (covers m6, m7).
    Transition $100 \to 110$ is $A=1$, $C=0$ constant. B goes $0 \to 1$.
    Terms:
    *   $A\overline{B}$: $1 \cdot 1 = 1 \to 1 \cdot 0 = 0$. (Changes $1 \to 0$)
    *   $AB$: $1 \cdot 0 = 0 \to 1 \cdot 1 = 1$. (Changes $0 \to 1$)
    *   $A\overline{C}$: $1 \cdot 1 = 1$. (Constant)

    The function is $F = \overline{A}B + A\overline{B} + AB + \overline{A}\overline{B}C$.
    At $m4 (100)$: $F = 0 + 1 + 0 + 0 = 1$.
    At $m5 (101)$: $F = 0 + 1 + 0 + 0 = 1$.
    At $m6 (110)$: $F = 1 + 0 + 1 + 0 = 1$.
    At $m7 (111)$: $F = 1 + 0 + 1 + 0 = 1$.

    Transition $m4(100) \to m6(110)$. $A=1, C=0$ constant, $B: 0 \to 1$.
    Terms:
    *   $\overline{A}B$: $0 \cdot 0 = 0 \to 0 \cdot 1 = 0$.
    *   $A\overline{B}$: $1 \cdot 1 = 1 \to 1 \cdot 0 = 0$.
    *   $AB$: $1 \cdot 0 = 0 \to 1 \cdot 1 = 1$.
    *   $\overline{A}\overline{B}C$: $0 \cdot 1 \cdot 0 = 0 \to 0 \cdot 0 \cdot 0 = 0$.

    Summing up:
    $m4 (100)$: $0 + 1 + 0 + 0 = 1$.
    $m6 (110)$: $0 + 0 + 1 + 0 = 1$.

    Consider the propagation delays. When B changes from 0 to 1:
    *   The term $A\overline{B}$ turns OFF.
    *   The term $AB$ turns ON.
    If $A\overline{B}$ turns OFF *before* $AB$ turns ON, there could be a momentary state where both are 0, causing the output F to momentarily drop to 0 (a static-0 hazard), even though the final state should be 1.

    To fix this, we need to ensure that these adjacent '1's (m4 and m6) are covered by a common implicant that remains '1' during the transition.
    The implicant $A\overline{C}$ covers both m4 and m6. If we add this term:
    $F_{hazard\_free} = \overline{A}B + A\overline{B} + AB + \overline{A}\overline{B}C + A\overline{C}$

    Let's check again:
    $m4 (100)$: $0 + 1 + 0 + 0 + 1 = 1$
    $m6 (110)$: $1 + 0 + 1 + 0 + 1 = 1$

    During the transition $B: 0 \to 1$ ($A=1, C=0$):
    *   $A\overline{B}$: $1 \to 0$
    *   $AB$: $0 \to 1$
    *   $A\overline{C}$: $1$ (constant)

    The sum will be $(A\overline{B}) + (AB) + (A\overline{C})$.
    When $B=0$: $1 + 0 + 1 = 1$.
    When $B=1$: $0 + 1 + 1 = 1$.
    The presence of the $A\overline{C}$ term guarantees that the output remains 1 throughout the transition.

    **Final Hazard-Free SOP expression:**
    $F = \overline{A}B + \overline{A}\overline{B}C + A\overline{B} + AB + A\overline{C}$

    This can be simplified further. The set of prime implicants is $\{\overline{A}B, \overline{A}\overline{B}C, A\overline{B}, AB, A\overline{C}\}$.
    The essential prime implicants are $\overline{A}B$ (covers m2), $A\overline{B}$ (covers m5), $AB$ (covers m7).
    We still need to cover m1 and m4.
    m1 is covered by $\overline{A}\overline{B}C$.
    m4 is covered by $A\overline{B}$ (essential) and $A\overline{C}$.

    So the minimal SOP expression covering all '1's is $F = \overline{A}B + A\overline{B} + AB + \overline{A}\overline{B}C$.
    However, as shown, this can have a static-0 hazard.
    To make it hazard-free, we need to add the implicant $A\overline{C}$ which covers the transition $m4 \to m6$.
    Thus, $F_{hazard\_free} = \overline{A}B + \overline{A}\overline{B}C + A\overline{B} + AB + A\overline{C}$.
    This expression has redundant terms, but it's hazard-free.
    Simplifying this expression:
    $F_{hazard\_free} = \overline{A}B + \overline{A}\overline{B}C + A(\overline{B} + B + \overline{C})$
    $F_{hazard\_free} = \overline{A}B + \overline{A}\overline{B}C + A(1 + \overline{C})$
    $F_{hazard\_free} = \overline{A}B + \overline{A}\overline{B}C + A$
    Let's check this simplified form:
    $m4 (100)$: $0 + 0 + 1 = 1$.
    $m6 (110)$: $0 + 0 + 1 = 1$.
    This simplification seems incorrect. The goal is to add terms to *ensure* hazard-freedom, not necessarily to simplify to a minimal hazard-free form (though that's ideal).

    The set of prime implicants that covers all 1s minimally is $\{\overline{A}B, A\overline{B}, AB, \overline{A}\overline{B}C\}$.
    The potential hazard occurs in $m4 \to m6$ transition where $A\overline{B}$ turns off and $AB$ turns on. Both are part of the SOP.
    To prevent this, we add $A\overline{C}$.
    So the hazard-free SOP is $\overline{A}B + \overline{A}\overline{B}C + A\overline{B} + AB + A\overline{C}$.
    This expression can be implemented directly as a two-level SOP circuit.

    **Implementation:**
    *   AND gates for each product term: $\overline{A}B$, $\overline{A}\overline{B}C$, $A\overline{B}$, $AB$, $A\overline{C}$.
    *   An OR gate to sum the outputs of the AND gates.

    This ensures that for any single input change, the output will transition correctly without glitches, regardless of the operating mode.

### 5. Course Outcome Alignment

*   **CO1: Analyze asynchronous and clocked synchronous sequential circuits (Knowledge Level: K3)**
    *   This topic analyzes asynchronous circuits and their behavior under different operating modes, which is fundamental to understanding sequential circuit analysis. The concept of hazards directly impacts the stability and predictability of these circuits.

*   **CO2: Design hazard-free digital circuits (Knowledge Level: K3)**
    *   This is the core of the topic. It provides methods (K-maps, Boolean algebra, two-level implementation) and strategies (covering loops, consensus) to design combinational networks that are free from static and dynamic hazards, even in mixed operating mode scenarios.

*   **CO3: Identify faults in digital circuits (Knowledge Level: K3)**
    *   Hazards can be considered a type of transient fault or timing error that affects the correct operation of a digital circuit. Understanding hazards helps in identifying potential failure points related to timing.

*   **CO4: Apply VHDL programming in digital system design (Knowledge Level: K3)**
    *   While this topic focuses on the conceptual design and mitigation, the principles learned are directly translatable to VHDL. A designer using VHDL would aim to write code that synthesizes into hazard-free logic, often by sticking to two-level structures or employing specific synthesis attributes. Understanding the underlying hardware behavior is crucial for writing efficient and correct VHDL.

### 6. Key Points to Remember

*   **Mixed Operating Modes:** Asynchronous circuits can switch between different operational behaviors based on inputs.
*   **Hazards:** Undesirable transient output changes due to propagation delays.
    *   **Static Hazards:** Output momentarily changes to the wrong level, but then settles to the correct level.
    *   **Dynamic Hazards:** Output changes multiple times before settling.
*   **Two-Level Logic:** Implementing combinational circuits in SOP or POS form is the most effective way to eliminate static and dynamic hazards.
*   **K-maps:** Essential tool for identifying static hazards and designing hazard-free two-level SOP/POS circuits by ensuring proper covering of '1's (for SOP) or '0's (for POS).
*   **Consensus:** Can be used to add terms and eliminate dynamic hazards.
*   **Hazard-Free Design:** Requires careful consideration of all possible input transitions and ensuring redundant covering for static hazards and two-level implementation for dynamic hazards.

### 7. Practice Questions and Exercises

1.  **Question:** What is the fundamental difference between a static-1 hazard and a static-0 hazard in a combinational circuit?
    **Answer:** A static-1 hazard occurs when an output that should remain '1' momentarily glitches to '0'. A static-0 hazard occurs when an output that should remain '0' momentarily glitches to '1'.

2.  **Question:** Explain how propagation delays can lead to dynamic hazards in a multi-level logic circuit.
    **Answer:** Dynamic hazards occur in multi-level circuits when a single input change causes an intermediate signal to change multiple times due to differing delays in various logic gates and paths. This cascaded effect leads to the output glitching multiple times before settling.

3.  **Question:** Consider the following Boolean function: $F(A, B, C) = A\overline{B} + \overline{B}C$.
    (a) Draw the K-map for this function.
    (b) Identify any static hazards present in this two-level SOP implementation.
    (c) Provide a hazard-free SOP expression for the function.
    **Answer:**
    (a) K-map for $F(A, B, C) = A\overline{B} + \overline{B}C$:
        ```
             BC
          A  00 01 11 10
          0  0  0  0  1   (m0, m1, m3, m2)
          1  1  1  1  0   (m4, m5, m7, m6)
        ```
        The terms are:
        $A\overline{B}$: Covers m4, m5.
        $\overline{B}C$: Covers m2, m6.

    (b) Let's check transitions:
        *   Transition $m4(100) \to m5(101)$: Covered by $A\overline{B}$. Safe.
        *   Transition $m2(010) \to m6(110)$: Covered by $\overline{B}C$. Safe.
        *   Transition $m4(100) \to m6(110)$: This is a transition where B changes from 0 to 1. Both A and C are constant at 1 and 0 respectively. Output F should remain 1.
            *   $A\overline{B}$ term: $1 \cdot 1 = 1 \to 1 \cdot 0 = 0$. This term turns OFF.
            *   $\overline{B}C$ term: $1 \cdot 0 = 0 \to 0 \cdot 0 = 0$. This term remains OFF.
            *   When $A\overline{B}$ turns OFF, and if there's no other term keeping the output '1' at this intermediate stage, a static-0 hazard might occur (output momentarily going to 0).

        The adjacent cells m4 and m6 both have output F=1. They are covered by separate prime implicants ($A\overline{B}$ and $\overline{B}C$ respectively). A static hazard exists because when the input changes from $100$ to $110$, the term $A\overline{B}$ turns off, and the term $\overline{B}C$ remains zero. The output should stay 1, but the turning off of $A\overline{B}$ can cause a glitch.

    (c) To make it hazard-free, we need to add a covering term for the adjacent '1's at m4 and m6. The implicant $AC'$ would cover m4 and m6. However, $A\overline{B}$ covers m4 and m5. $A\overline{C}$ would cover m4 and m6 if C was 0.
        Looking at the K-map, m4 and m6 are adjacent through B changing.
        A prime implicant that covers both m4 and m6 is $A\overline{C}$ if C was 0 for both. Wait, m4 is $100$ and m6 is $110$. Both have $A=1$ and $C=0$. So $A\overline{C}$ covers m4 and m6.

        The minimal SOP expression is $F = A\overline{B} + \overline{B}C$.
        To eliminate the static hazard in the transition $m4 \to m6$, we need to add the implicant $A\overline{C}$.
        Hazard-free SOP expression: $F_{hazard\_free} = A\overline{B} + \overline{B}C + A\overline{C}$.

4.  **Question:** How can VHDL be used to synthesize hazard-free combinational logic? Give a simple example.
    **Answer:** VHDL can be used by adhering to good coding practices that map to hazard-free hardware. This often means:
    *   Implementing logic in two levels (AND-OR or OR-AND).
    *   Using a `case` statement or `with-select` structure for clarity and to guide synthesis tools towards simpler, hazard-free implementations.
    *   Avoiding complex feedback loops within purely combinational logic descriptions.

    **Example:**
    ```vhdl
    library ieee;
    use ieee.std_logic_1164.all;

    entity hazard_free_logic is
        port (
            A, B, C : in std_logic;
            F       : out std_logic
        );
    end entity hazard_free_logic;

    architecture behavior of hazard_free_logic is
    begin
        -- Implement F = A * B + B * C  (hazard-free version: A*B + B*C + A*C)
        F <= (A and B) or (B and C) or (A and C); -- Hazard-free SOP form
    end architecture behavior;
    ```
    In this example, the direct implementation of the hazard-free SOP form ensures that the synthesized logic will be free of static hazards.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. References and Further Reading

*   **Digital Principles & Design by Donald G Givone:** Provides foundational concepts of digital logic, including hazards and their elimination in combinational circuits.
*   **Digital Design with an introduction to HDL, VHDL and Verilog by M.Morris Mano and Michel.D.Ciletti:** This book offers a comprehensive treatment of combinational and sequential circuit design, including detailed sections on hazards and how to avoid them, often with K-map examples. It also introduces HDL for design.
*   **Digital Design by John F Wakerly:** A classic text that thoroughly covers hazards in combinational logic and methods for designing hazard-free circuits, with clear explanations and examples.
*   **Logic Design Theory by N. N. Biswas:** Explores the theoretical aspects of logic design, which includes rigorous analysis of hazards and their mitigation techniques.

---