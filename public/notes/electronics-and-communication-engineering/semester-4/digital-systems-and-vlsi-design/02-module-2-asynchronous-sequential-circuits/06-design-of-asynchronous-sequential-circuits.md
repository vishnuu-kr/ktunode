---
title: "Design of Asynchronous Sequential Circuits"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 2: Asynchronous Sequential Circuits"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe754"
status: "completed"
scrapedAt: "2026-05-23T17:48:10.332Z"
---
# DIGITAL SYSTEMS AND VLSI DESIGN
## Module 2: Asynchronous Sequential Circuits
### Topic: Design of Asynchronous Sequential Circuits

---

### Introduction to Asynchronous Sequential Circuits (ASCs)

**Definition:** Asynchronous sequential circuits (ASCs) are sequential circuits where the change of state is **not** synchronized by a clock signal. The circuit's state can change whenever the inputs change, and the next state is determined solely by the current state and the current inputs.

**Key Characteristics:**

*   **No Clock:** Unlike synchronous circuits, ASCs do not have a global clock signal to control state transitions.
*   **Feedback Loops:** ASCs are built using feedback loops. The outputs of the memory elements (usually flip-flops or latches) are fed back as inputs.
*   **Input Changes Trigger Transitions:** A change in any input can potentially cause a state transition.
*   **Potential for Races and Hazards:** Due to the absence of a clock, ASCs are more susceptible to timing issues like races and hazards, which can lead to unpredictable behavior.

**Importance and Applications:**

*   **Speed:** ASCs can potentially operate faster than synchronous circuits because they don't have to wait for a clock edge.
*   **Power Efficiency:** In certain applications, ASCs can be more power-efficient as logic elements only switch when necessary.
*   **Handshaking Protocols:** Used in systems where devices need to communicate without a shared clock, such as in interfacing different speed modules or in control systems.
*   **Arbitration:** Selecting between multiple competing requests for a shared resource.

**Referenced Concepts:** Givone (2017) extensively covers the fundamental differences between synchronous and asynchronous circuits, emphasizing the lack of a clock in ASCs and the resulting timing considerations. Wakerly (2008) also highlights the speed and potential power advantages.

---

### Design Steps for Asynchronous Sequential Circuits

The design process for ASCs is more intricate than for synchronous circuits due to the absence of a clock and the inherent timing challenges. The standard design procedure involves the following steps:

#### 1. Primitive Flow Table Construction

This is the initial step where the behavior of the circuit is described in a tabular format.

*   **Identify States:** Define the stable states the circuit can exist in.
*   **Identify Inputs:** List all possible input combinations.
*   **Determine Next States:** For each current state and input combination, determine the next state. This is the core of capturing the circuit's logic.
*   **Determine Outputs:** For each current state and input combination, determine the corresponding output values.
*   **Primitive Flow Table Format:**
    *   Rows represent current states.
    *   Columns represent input combinations.
    *   Entries in the table are pairs of `(Next State, Output)`.
    *   Underscores (`_`) indicate that the input combination is not relevant for that state or that the transition is not allowed.

**Example:** Consider a simple "enable" circuit with input `E` and output `Y`. When `E` is 1, `Y` should be 1. When `E` is 0, `Y` should be 0.

| Current State | E=0 | E=1 |
| :------------ | :-- | :-- |
| **S1**        | (S1, 0) | (S2, 1) |
| **S2**        | (S1, 0) | (S2, 1) |

*   **Important Point:** Primitive flow tables typically list only stable states. Unstable states (transient states during a transition) are implied.

**Referenced Concepts:** Yarbrough (2006) and Givone (2017) provide detailed explanations and examples of constructing primitive flow tables from verbal descriptions or timing diagrams.

#### 2. State Minimization (Flow Table Reduction)

The goal is to reduce the number of states in the primitive flow table while preserving the circuit's functionality. This is crucial for simplifying the final circuit.

*   **Equivalence of States:** Two states are equivalent if, for every possible input combination, they lead to the same next state and produce the same output.
*   **Implication Table Method:** A systematic method for finding equivalent states.
    1.  Create an implication table with pairs of states to be compared.
    2.  Mark pairs of states that are equivalent if they have different outputs for any input combination.
    3.  For each un-marked pair (s_i, s_j), check their next states (s_k, s_l) for all inputs. If (s_k, s_l) is marked as equivalent, then (s_i, s_j) is also equivalent.
    4.  Continue this process iteratively until no new pairs are marked.
    5.  Group equivalent states together.

*   **Reduced Flow Table:** A new flow table is constructed with the merged equivalent states.

**Example (Continuing from above):** The states S1 and S2 are not equivalent because for E=1, S1 goes to (S2, 1) and S2 goes to (S2, 1). For E=0, S1 goes to (S1, 0) and S2 goes to (S1, 0). So in this simple example, the states are already minimal.

**Referenced Concepts:** Kohavi & Jha (2009) provides a thorough mathematical treatment of state minimization using the implication table method. Mano & Ciletti (2017) also covers state minimization with clear examples.

#### 3. State Assignment

Assign binary codes to the states to be used for implementing the memory elements. This is a critical step in ASC design as it directly impacts the possibility of races.

*   **Goal:** Assign binary codes to states such that no races occur in the resulting circuit.
*   **Race Condition:** A race condition occurs when multiple state variables change value simultaneously in response to an input change, and the final state depends on the order in which these variables change.
*   **Types of Races:**
    *   **Single-Value Race:** Only one state variable changes. This is generally not problematic.
    *   **Multiple-Value Race:** Two or more state variables change simultaneously. These are dangerous.
*   **Eliminating Races:**
    *   **Non-racy Assignment:** Assign binary codes such that for any transition between states, at most one state variable changes. This is ideal but not always possible with a minimal number of state variables.
    *   **Single-Transition-Time (STT) Assignment:** Assign codes such that during any transition, all changing state variables change only once, and in a specific order. This is achieved by assigning codes to states such that any two states that have a transition between them differ by only one bit in their assigned binary codes.
    *   **Residue Codes/Harmonic Codes:** More advanced assignment techniques to ensure safe transitions.

**Example:** If we have states A, B, C, and D, and transitions occur between:
*   A and B
*   A and C
*   B and D
*   C and D

A possible non-racy assignment (if using 3 bits for 4 states):
*   A = 000
*   B = 001
*   C = 010
*   D = 011

In this assignment:
*   A(000) -> B(001): Only one bit changes.
*   A(000) -> C(010): Only one bit changes.
*   B(001) -> D(011): Only one bit changes.
*   C(010) -> D(011): Only one bit changes.

**Referenced Concepts:** Wakerly (2008) and Givone (2017) provide extensive coverage of state assignment techniques, including methods for identifying and resolving race conditions using diagrams and systematic assignment strategies. Yarbrough (2006) also offers practical examples of state assignment.

#### 4. Hazard Elimination

Hazards are transient glitches in the output of a combinational circuit caused by unequal propagation delays through different logic paths. In ASCs, these glitches can cause incorrect state transitions.

*   **Types of Hazards:**
    *   **Static Hazard:** Occurs when a single-input change causes the output to temporarily change from its correct steady-state value and then return to it.
        *   **Static-1 Hazard:** Output should remain 1 but glitches to 0.
        *   **Static-0 Hazard:** Output should remain 0 but glitches to 1.
    *   **Dynamic Hazard:** Occurs when a single-input change causes the output to change multiple times before settling to its correct steady-state value.
    *   **Function Hazard:** Occurs due to the logic function itself, causing multiple input changes simultaneously for a single input transition. This is inherent to the design and needs to be addressed during state assignment.

*   **Eliminating Static Hazards:**
    *   **Static-1 Hazard:** Cover all adjacent 1s in the K-map with product terms. Ensure each transition between adjacent 1s is covered by at least one product term that remains true for that transition. This is achieved by adding redundant product terms to the logic function.
    *   **Static-0 Hazard:** Dual of static-1 hazard elimination. Cover all adjacent 0s with sum terms.

*   **Addressing Dynamic Hazards:**
    *   Using higher-order logic gates (e.g., gates with a limited number of inputs).
    *   Buffering.
    *   For ASCs, ensuring the state assignment itself doesn't lead to functional hazards is key.

**Example:** Consider a combinational circuit with function F = AB + BC. If A changes from 0 to 1 while B=1 and C=1.
*   Path 1: AB. When A changes, this path's output changes.
*   Path 2: BC. This path's output is stable (1).
*   If B and C are common inputs to both AND gates, and the BC term is implemented by one AND gate and the AB term by another, and then their outputs are ORed. If the delay in the AB gate is slightly more than the BC gate, then when A changes from 0 to 1, the AB term will go from 0 to 1. However, if the BC term was already 1, and the AB term becomes 1, the output is 1. But if there's a glitch, the AB term might momentarily go to 0 before stabilizing to 1, causing a dip. A redundant term AC can be added to cover the transition where AB might fail. F = AB + BC + AC.

**Referenced Concepts:** Givone (2017) and Yarbrough (2006) offer detailed explanations of hazard types and systematic methods for hazard elimination in combinational logic. Mano & Ciletti (2017) also discusses hazard mitigation.

#### 5. Implementation (Excitation and Output Tables)

Once the flow table is minimized, states are assigned, and hazards are accounted for, the next step is to derive the logic for the memory elements (flip-flops or latches) and the outputs.

*   **Excitation Table:** For each state variable (y_i), derive a table showing the required next state value of y_i (Y_i) based on the current state (y_i) and input combination (X).
*   **Output Table:** For each output variable (Z_j), derive a table showing its value based on the current state (y_i) and input combination (X).
*   **K-maps:** Use K-maps to derive simplified Boolean expressions for each Y_i and Z_j.
*   **Circuit Diagram:** Draw the final circuit using the derived Boolean expressions.

**Types of Memory Elements:**

*   **Latches:** Typically SR latches or D latches are used. The design of ASCs often involves SR latches, where specific input conditions set or reset the latch.
*   **Flip-flops:** JK or T flip-flops can also be used, though they are less common in basic ASC designs.

**Example (Excitation Table for a D-Latch):**
If a state variable `y` needs to transition to state `Y` when input `D` is applied, and it's implemented with a D-latch: `Y = D`. The excitation table for `D` would simply be:

| Current State (y) | Input (X) | Next State (Y) | Input to Latch (D) |
| :---------------- | :-------- | :------------- | :----------------- |
| 0                 | x         | 0              | 0                  |
| 0                 | x         | 1              | 1                  |
| 1                 | x         | 0              | 0                  |
| 1                 | x         | 1              | 1                  |

The `D` input for the latch is determined by the state variable's required next state.

**Referenced Concepts:** Givone (2017) and Wakerly (2008) provide comprehensive guidance on deriving excitation and output equations and implementing the circuit using standard logic gates and memory elements. Yarbrough (2006) offers practical examples of translating flow tables into circuit implementations.

---

### Addressing Key Challenges in ASC Design

#### Race Conditions

**Definition:** A race condition exists when a change in an input signal causes two or more state variables to change their values simultaneously. The final state of the circuit depends on the relative delays of these state variables, leading to unpredictable behavior.

**Types:**
*   **Non-critical Race:** All possible outcomes of the race result in the same next state. These are generally acceptable.
*   **Critical Race:** Different outcomes of the race lead to different next states. These must be eliminated.

**Elimination Strategies:**

1.  **State Assignment:** The most common method. Assign binary codes to states such that any transition between states involves a change in at most one state variable. This is a non-racy assignment. If a non-racy assignment is not possible with the minimum number of state variables, a single-transition-time (STT) assignment can be used, where changing state variables change in a specific sequence.
2.  **Adding Extra States (Nonequivalent States):** Introduce intermediate states that are not equivalent to existing states. These extra states can break up critical races by ensuring that only one state variable changes at a time during transitions. This often involves using more memory elements than the minimum required.
3.  **Logic Implementation:** For D latches, the `D` input should settle to its correct value before the clock edge (in synchronous circuits). In asynchronous circuits, the equivalent is ensuring the `D` input for a state variable `y` (which is the required next state Y) is stable and correctly represents the intended next state, and this stability is guaranteed by the state assignment and hazard elimination.

**Example of a Critical Race and Resolution:**

Consider a state `S1` where an input change causes state variables `y1` and `y2` to change.
*   `S1`: `y1`=0, `y2`=0
*   Input change `X1` causes transition to `S2`: `y1`=1, `y2`=1

If `S1` has state assignment `00`. If the transition logic drives both `y1` and `y2` from 0 to 1 simultaneously, and due to delays, `y1` changes to 1 first, then `y2` changes to 1. The intermediate state is `10`. If the circuit interprets `10` as a valid state that transitions to a different final state than `11`, a critical race exists.

**Resolution:**
*   **State Assignment:** If we can assign `S1` as `00` and `S2` as `01` (or `10`), then only one variable changes, resolving the race.
*   **Adding states:** If `S1` needs to transition to a state where both `y1` and `y2` change, we might introduce an intermediate state `S_int` with assignment `01`. The transition would be `S1(00) -> S_int(01) -> S2(11)`. The first transition is non-racy, and the second transition from `S_int(01)` to `S2(11)` might be designed to be non-racy or only have a single variable change.

**Referenced Concepts:** Wakerly (2008) and Givone (2017) delve deeply into race conditions, providing illustrative examples and detailed methodologies for state assignment to avoid them. Kohavi & Jha (2009) offers a more formal analysis of races.

#### Hazards

**Definition:** Glitches or transient output changes in combinational logic due to unequal propagation delays. In ASCs, these can cause incorrect state transitions or outputs.

**Elimination Strategies:**

1.  **Static Hazard Elimination:**
    *   **Static-1 Hazard:** For each output variable, derive its sum-of-products (SOP) expression. Plot this on a K-map. For every pair of adjacent 1s that are *not* covered by a single product term, add a redundant product term that covers this pair. This ensures that for any single input change, there is always at least one path that remains logically true, preventing the output from momentarily dropping to 0.
    *   **Static-0 Hazard:** For each output variable, derive its product-of-sums (POS) expression. Plot this on a K-map. For every pair of adjacent 0s that are *not* covered by a single sum term, add a redundant sum term that covers this pair. This prevents the output from momentarily going to 1.

2.  **Dynamic Hazard Elimination:**
    *   These are harder to eliminate completely in pure combinational logic.
    *   Using logic gates with fewer inputs (e.g., 2-input gates instead of 3-input gates where possible).
    *   Introducing redundant gates (similar to static hazard elimination but applied to transitions).
    *   In ASC design, a robust state assignment that avoids functional hazards (multiple input changes for a single input transition) helps mitigate dynamic hazards.

3.  **Functional Hazard Elimination:**
    *   These arise from the logic function itself, where a single input change can cause multiple input changes to the combinational logic blocks.
    *   This is typically addressed through a careful state assignment. If two input combinations are adjacent in the state table and both result in a transition, and these input combinations cause different numbers of state variables to change simultaneously, it can lead to a functional hazard. State assignment aims to ensure that the conditions leading to functional hazards are avoided.

**Example of Static-1 Hazard Elimination:**

Consider the logic function `F = A'B + AB'`. This function has a static-1 hazard when A changes from 0 to 1 (while B=1).
*   Truth Table:
    | A | B | F |
    |---|---|---|
    | 0 | 0 | 0 |
    | 0 | 1 | 1 |
    | 1 | 1 | 1 |
    | 1 | 0 | 0 |
*   K-map for `F = A'B + AB'`:
    ```
      B\A  0   1
      --- --- ---
      0   0   0
      1   1   1  <-- This 1 is covered by A'B
               ^-- This 1 is covered by AB'
    ```
    The two 1s in the K-map (for AB=01 and AB=11) are adjacent. The product term `A'B` covers the `01` minterm, and `AB'` covers the `10` minterm. There's no single product term covering both `01` and `11` minterms directly. If A changes from 0 to 1 (and B=1), we have a transition from `01` to `11`.
    *   For `01` (A=0, B=1): `F = (0')*1 + 0*1' = 1 + 0 = 1`.
    *   For `11` (A=1, B=1): `F = (1')*1 + 1*1' = 0 + 0 = 0`. **Wait, error in my example trace or formula.** Let's recheck `F = A'B + AB'`. This is the XOR function.
    *   Let's use `F = AB + BC`. (This is the example I used before, let's re-evaluate the hazard).
    *   If A changes from 0 to 1, B=1, C=1.
        *   Term AB: 0*1=0 -> 1*1=1
        *   Term BC: 1*1=1 -> 1*1=1
        *   Output: 0+1=1 -> 1+1=1.
    *   Consider the K-map for F = AB + BC:
    ```
      C\AB 00 01 11 10
      --- --- --- --- ---
      0   0  0  1  0
      1   0  1  1  0  <-- Rows for C=1, columns for AB
    ```
    For the input change where A changes from 0 to 1, with B=1, C=1:
    *   Current state: A=0, B=1, C=1. Product term AB is 0*1=0. Product term BC is 1*1=1. Output = 0+1=1.
    *   Next state: A=1, B=1, C=1. Product term AB is 1*1=1. Product term BC is 1*1=1. Output = 1+1=1.

    Let's look at the K-map for the `C=1` row. We have `AB=01` and `AB=11`.
    *   `01` (A=0, B=1, C=1) maps to 1 (covered by BC).
    *   `11` (A=1, B=1, C=1) maps to 1 (covered by AB and BC).
    *   The transition from `01` to `11` (when A changes from 0 to 1, B=1, C=1) is a change within the `C=1` row.
    *   The minterm `01` is covered by `BC`.
    *   The minterm `11` is covered by `AB` and `BC`.
    *   The issue arises if we implement `F = AB + BC`.
    *   For the transition from `(A=0, B=1, C=1)` to `(A=1, B=1, C=1)`:
        *   `BC` term is always 1.
        *   `AB` term changes from 0 to 1.
    *   If there's a delay in the `AB` gate, and the `BC` term is implemented, the output will be stable.
    *   **A more typical example of static-1 hazard:** `F = X + Y` where X and Y are products of different inputs.
    *   Let `F = A'B + AB'`. Let B=1. Then `F = A' + A`.
        *   If A changes from 0 to 1, B=1.
        *   Minterm `A'B` (01): `(0')*1 = 1`.
        *   Minterm `AB'` (10): `1*0' = 0`. This term is not relevant for B=1.
        *   The function is `F = A'B`. When B=1, `F=A'`.
        *   If A changes from 0 to 1, F changes from 1 to 0. No hazard.
    *   **Let's consider F = AB + A'C + BC:**
        *   The term `BC` is redundant in covering `AB` and `A'C`.
        *   If A changes from 0 to 1, B=1, C=1:
            *   `AB` -> 0*1 = 0 -> 1*1 = 1
            *   `A'C` -> (0')*1 = 1 -> (1')*1 = 0
            *   `BC` -> 1*1 = 1 -> 1*1 = 1
        *   Output: `0 + 1 + 1 = 1` -> `1 + 0 + 1 = 1`.
        *   The critical transition is when B=1, C=1, and A changes from 0 to 1. The minterms are `011` (A=0, B=1, C=1) and `111` (A=1, B=1, C=1).
        *   These are adjacent in the K-map.
        *   Minterm `011` is covered by `A'C` and `BC`.
        *   Minterm `111` is covered by `AB` and `BC`.
        *   If we use `F = AB + A'C`, then for `011`, `F = 0 + 1 = 1`. For `111`, `F = 1 + 0 = 1`.
        *   When A changes, `A'C` goes from 1 to 0. `AB` goes from 0 to 1. `BC` remains 1.
        *   If the delay through `A'C` is longer than `AB` and `BC`, then when A changes from 0 to 1:
            *   The `A'C` term output might momentarily drop to 0 before the `AB` term stabilizes to 1 and `BC` remains 1.
            *   `F = (A'C)_delayed + (AB)_stable + (BC)_stable`
            *   `F` could momentarily become `0 + 1 + 1 = 1` or `0 + 0 + 1 = 1`.
        *   A static-1 hazard exists if the output temporarily becomes 0. This happens if the `A'C` term drops to 0 and the `AB` term hasn't yet risen to 1.
        *   **To eliminate the static-1 hazard**, we add a redundant term `BC` which covers both `011` and `111`.
        *   The hazard-free expression is `F = AB + A'C + BC`. The redundant `BC` term ensures that when A changes from 0 to 1, the `BC` path (which is always true under these conditions) keeps the output high.

**Referenced Concepts:** Givone (2017) provides a clear breakdown of hazard types and their elimination using redundant terms in K-maps. Yarbrough (2006) also offers practical K-map examples for hazard elimination.

---

### Design Example: Two-Button Lock Circuit

Let's design a simple ASC that unlocks when two buttons, Button 1 (`B1`) and Button 2 (`B2`), are pressed in sequence. Let's say the sequence is `B1` then `B2`.

**1. Primitive Flow Table:**

*   States:
    *   `S0`: Initial state, waiting for `B1`.
    *   `S1`: `B1` has been pressed, waiting for `B2`.
    *   `S2`: `B2` pressed after `B1`, Unlock.

*   Inputs: `B1`, `B2`. We'll consider only single input changes for primitive table.
    *   Let `x1` represent `B1` (1 when pressed, 0 when not).
    *   Let `x2` represent `B2` (1 when pressed, 0 when not).
    *   Input combinations: `00`, `01`, `10`, `11`. (This is a simplified approach; a full state table would consider all input combinations).

| Current State | x1=0, x2=0 | x1=0, x2=1 | x1=1, x2=0 | x1=1, x2=1 |
| :------------ | :--------- | :--------- | :--------- | :--------- |
| **S0**        | (S0, 0)    | (S0, 0)    | (S1, 0)    | (S0, 0)    |
| **S1**        | (S0, 0)    | (S2, 1)    | (S1, 0)    | (S1, 0)    |
| **S2**        | (S0, 0)    | (S2, 1)    | (S0, 0)    | (S2, 1)    |

*   Output `Y` (Unlock signal): 1 when unlocked, 0 when locked.
*   Notes on table:
    *   From S0, if only B2 is pressed (01), stay in S0. If only B1 pressed (10), go to S1.
    *   From S1, if only B2 pressed (01), go to S2 (unlock). If only B1 pressed (10), stay in S1 (B1 pressed again, but sequence not complete).
    *   From S2, if B2 is still pressed (01), stay unlocked. If B1 is pressed again (10), reset to S0.

**2. State Minimization:**

Let's check for equivalent states.
*   S0 vs S1: For input (x1=1, x2=0), S0 -> (S1, 0) and S1 -> (S1, 0). For other inputs, they are different. Not equivalent.
*   S0 vs S2: For input (x1=1, x2=0), S0 -> (S1, 0) and S2 -> (S0, 0). Not equivalent.
*   S1 vs S2: For input (x1=0, x2=0), S1 -> (S0, 0) and S2 -> (S0, 0). For input (x1=0, x2=1), S1 -> (S2, 1) and S2 -> (S2, 1). Not equivalent.

The states appear to be minimal. So the reduced flow table is the same as the primitive flow table.

**3. State Assignment:**

We have 3 states: S0, S1, S2. We need at least 2 state variables (`y1`, `y0`).

Let's try to assign codes to avoid races.
*   S0: 00
*   S1: 01
*   S2: 11 (This assignment attempts to isolate S2 from S0 and S1 by having both bits different).

Let's check transitions:
*   S0(00) -> S1(01): Only `y0` changes. Non-racy.
*   S0(00) -> S0(00): No change.
*   S1(01) -> S0(00): Only `y0` changes. Non-racy.
*   S1(01) -> S2(11): Both `y1` and `y0` change (0->1, 1->1). **This is a potential race!**
*   S2(11) -> S0(00): Both `y1` and `y0` change (1->0, 1->0). **This is a potential race!**
*   S2(11) -> S2(11): No change.

The assignment `S0=00`, `S1=01`, `S2=11` leads to races. Let's try another assignment:

*   S0: 00
*   S1: 01
*   S2: 10 (This might avoid some races)

Check transitions:
*   S0(00) -> S1(01): `y0` changes. Non-racy.
*   S0(00) -> S0(00): No change.
*   S1(01) -> S0(00): `y0` changes. Non-racy.
*   S1(01) -> S2(10): Both `y1` and `y0` change (0->1, 1->0). **Critical Race!**
*   S2(10) -> S0(00): `y1` changes. Non-racy.
*   S2(10) -> S2(11) **Error in my table filling. S2 is 10, so input 01 leads to (S2,1) means (10,1).**
*   Let's recheck the flow table:
    | Current State | x1=0, x2=0 | x1=0, x2=1 | x1=1, x2=0 | x1=1, x2=1 |
    | :------------ | :--------- | :--------- | :--------- | :--------- |
    | **S0 (00)**   | (S0, 0)    | (S0, 0)    | (S1, 0)    | (S0, 0)    |
    | **S1 (01)**   | (S0, 0)    | (S2, 1)    | (S1, 0)    | (S1, 0)    |
    | **S2 (10)**   | (S0, 0)    | (S2, 1)    | (S0, 0)    | (S2, 1)    |

Now let's check assignment S0=00, S1=01, S2=10:
*   S0(00) -> S1(01): `y0` changes. OK.
*   S1(01) -> S0(00): `y0` changes. OK.
*   S1(01) -> S2(10): `y1` changes from 0 to 1, `y0` changes from 1 to 0. **Critical Race!**
*   S2(10) -> S0(00): `y1` changes from 1 to 0. OK.
*   S2(10) -> S2(10): No change.

The assignment `S0=00`, `S1=01`, `S2=10` has a critical race between S1 and S2.

**To resolve the critical race:** We can add an intermediate state.
*   S0: 00
*   S1: 01
*   S2': 10 (intermediate state)
*   S2: 11 (final unlocked state)

Now we need to re-map and potentially modify the flow table. This is where it gets complex.

**Let's try a simpler assignment for the original 3 states:**
*   S0: 00
*   S1: 10
*   S2: 01 (This looks like a single-bit change between S0 and S2, and S0 and S1).

Check transitions with S0=00, S1=10, S2=01:
*   S0(00) -> S1(10): `y1` changes. OK.
*   S0(00) -> S0(00): No change. OK.
*   S1(10) -> S0(00): `y1` changes. OK.
*   S1(10) -> S2(01): Both `y1` and `y0` change (1->0, 0->1). **Critical Race!**
*   S2(01) -> S0(00): `y0` changes. OK.
*   S2(01) -> S2(01): No change. OK.

It seems a race is unavoidable with 3 states and 2 variables if we try to cover all transitions. Let's consider if the flow table can be modified or if a 3-variable assignment is needed. For this example, let's proceed with a potentially racy assignment and highlight the issue. A common approach in practice is to ensure that for critical races, the resulting transient state is *not* interpreted as a valid new state, or the circuit is designed to be robust.

Let's go back to `S0=00`, `S1=01`, `S2=10` and the race between S1 and S2.
**4. Excitation and Output Tables (with S0=00, S1=01, S2=10):**

We have state variables `y1` and `y0`. Inputs are `x1` and `x2`. Output is `Y`.

**State Table with Assigned Codes:**

| Current State (y1y0) | Input (x1x2) | Next State (y1'y0') | Output Y |
| :----------------- | :----------- | :------------------ | :------- |
| S0 (00)            | 00           | 00                  | 0        |
| S0 (00)            | 01           | 00                  | 0        |
| S0 (00)            | 10           | 01                  | 0        |
| S0 (00)            | 11           | 00                  | 0        |
| S1 (01)            | 00           | 00                  | 0        |
| S1 (01)            | 01           | 10                  | 1        |
| S1 (01)            | 10           | 01                  | 0        |
| S1 (01)            | 11           | 01                  | 0        |
| S2 (10)            | 00           | 00                  | 0        |
| S2 (10)            | 01           | 10                  | 1        |
| S2 (10)            | 10           | 00                  | 0        |
| S2 (10)            | 11           | 10                  | 1        |

**Excitation Table (for D-latches):**
We need expressions for `D1` (for `y1`) and `D0` (for `y0`). `D1 = Y1_next`, `D0 = Y0_next`.

| y1y0 | x1x2 | Y1'Y0' | D1 | D0 |
|------|------|--------|----|----|
| 00   | 00   | 00     | 0  | 0  |
| 00   | 01   | 00     | 0  | 0  |
| 00   | 10   | 01     | 0  | 1  |
| 00   | 11   | 00     | 0  | 0  |
| 01   | 00   | 00     | 0  | 0  |
| 01   | 01   | 10     | 1  | 0  |  <-- Race condition here: S1(01) + 01 -> S2(10). Transition (01) -> (10)
| 01   | 10   | 01     | 0  | 1  |
| 01   | 11   | 01     | 0  | 1  |
| 10   | 00   | 00     | 0  | 0  |
| 10   | 01   | 10     | 1  | 0  |
| 10   | 10   | 00     | 0  | 0  |
| 10   | 11   | 10     | 1  | 0  |

**Output Table:**
We need expression for `Y`.

| y1y0 | x1x2 | Y    |
|------|------|------|
| 00   | 00   | 0    |
| 00   | 01   | 0    |
| 00   | 10   | 0    |
| 00   | 11   | 0    |
| 01   | 00   | 0    |
| 01   | 01   | 1    |
| 01   | 10   | 0    |
| 01   | 11   | 0    |
| 10   | 00   | 0    |
| 10   | 01   | 1    |
| 10   | 10   | 0    |
| 10   | 11   | 1    |

**Deriving K-maps for D1, D0, and Y:**

**K-map for D1:** (based on y1y0, x1, x2)

```
      x2x1\y1y0  00  01  11  10
      -------- --- --- --- ---
      00       0   0   -   0
      01       0   1   -   1
      11       0   0   -   0
      10       0   1   -   0
```
(Note: "-" denotes unused states for this assignment).

From K-map: `D1 = y0*x2 + y1*x2` (this is not quite right, need to consider all inputs)

Let's create a combined K-map for D1:
Inputs: `y1`, `y0`, `x1`, `x2`.
Current state `y1y0`, input `x1x2`.

K-map for D1 (required next state of y1):
```
         y1y0
       00   01   11   10
x1x2
00     0    0    -    0
01     0    1    -    1  <-- 01 for y1y0, 01 for x1x2 -> D1=1
11     0    0    -    0
10     0    1    -    1  <-- 01 for y1y0, 10 for x1x2 -> D1=0
```
This is incorrect. The K-map should have states `y1y0` as the "rows" and inputs `x1x2` as "columns" within each state.

Let's list the minterms for D1:
`D1` should be 1 when:
*   `y1y0=01`, `x1x2=01` => `y1'y0`, `x1'x2` => `0001`
*   `y1y0=01`, `x1x2=11` => `y1'y0`, `x1x2` => `0011`
*   `y1y0=10`, `x1x2=01` => `y1y0'`, `x1'x2` => `1001`
*   `y1y0=10`, `x1x2=11` => `y1y0'`, `x1x2` => `1011`

K-map for D1 (using y1, y0, x1, x2 as variables):
```
      y0y1\x1x2  00   01   11   10
      -------- ---  ---  ---  ---
      00       0    0    0    0
      01       0    1    1    0  <-- 01 state, x1x2=01 -> D1=1; x1x2=11 -> D1=1
      11       -    -    -    -
      10       0    1    1    0  <-- 10 state, x1x2=01 -> D1=1; x1x2=11 -> D1=1
```
The cells for `y1y0 = 11` are not used with this assignment.
Let's rewrite the K-map for D1 (variables: `y1`, `y0`, `x1`, `x2`):

| y1y0 | x1x2 | D1 |
|------|------|----|
| 00   | 00   | 0  |
| 00   | 01   | 0  |
| 00   | 10   | 0  |
| 00   | 11   | 0  |
| 01   | 00   | 0  |
| 01   | 01   | 1  |
| 01   | 10   | 0  |
| 01   | 11   | 0  |
| 10   | 00   | 0  |
| 10   | 01   | 1  |
| 10   | 10   | 0  |
| 10   | 11   | 1  |

K-map for D1:
```
      y0y1\x1x2  00   01   11   10
      -------- ---  ---  ---  ---
      00       0    0    0    0
      01       0    1    0    0
      11       -    -    -    -  (unused)
      10       0    1    1    0
```
Simplified D1 expression: `D1 = y0*x2 + y1*x2`  (This is the same as my initial incorrect one. Let's regroup.)

```
      y0y1\x1x2  00   01   11   10
      -------- ---  ---  ---  ---
      00       0    0    0    0
      01       0    1    0    0  <-- D1 is 1 at y0=1, x1x2=01 (y0*x2*y1')
      10       0    1    1    0  <-- D1 is 1 at y0=0, x1=0, x2=1, y1=1 (y1*x2*y1') - Wait, y1 is 1
                                   This should be D1 is 1 at y0=0, x1=0, x2=1, y1=1 (y1*y0'*x1'*x2)
                                   And D1 is 1 at y0=0, x1=1, x2=1, y1=1 (y1*y0'*x1*x2)
```
Correct Minterms for D1:
`0001` (y1'y0, x1'x2) -> D1=1
`0011` (y1'y0, x1x2) -> D1=1
`1001` (y1y0', x1'x2) -> D1=1
`1011` (y1y0', x1x2) -> D1=1

K-map for D1 (y1, y0, x1, x2):
```
        y0y1\x1x2  00   01   11   10
        -------- ---  ---  ---  ---
        00       0    0    0    0
        01       0    1    0    0  <-- y0=1, y1=0, x1=0, x2=1 -> 1
        11       -    -    -    -
        10       0    1    1    0  <-- y0=0, y1=1, x1=0, x2=1 -> 1
                                   y0=0, y1=1, x1=1, x2=1 -> 1
```
`D1 = y0*x2 + y1*x2` is indeed the simplification of the terms `y1'y0*x2` and `y1*x2`.
So, `D1 = (y0 + y1)*x2`. Let's verify:
*   State `01` (`y1=0, y0=1`), input `01` (`x1=0, x2=1`): `D1 = (1+0)*1 = 1`. Correct.
*   State `10` (`y1=1, y0=0`), input `01` (`x1=0, x2=1`): `D1 = (0+1)*1 = 1`. Correct.
*   State `10` (`y1=1, y0=0`), input `11` (`x1=1, x2=1`): `D1 = (0+1)*1 = 1`. Correct.

**K-map for D0:**

| y1y0 | x1x2 | D0 |
|------|------|----|
| 00   | 00   | 0  |
| 00   | 01   | 0  |
| 00   | 10   | 1  |
| 00   | 11   | 0  |
| 01   | 00   | 0  |
| 01   | 01   | 0  |
| 01   | 10   | 1  |
| 01   | 11   | 1  |
| 10   | 00   | 0  |
| 10   | 01   | 0  |
| 10   | 10   | 0  |
| 10   | 11   | 0  |

K-map for D0:
```
        y0y1\x1x2  00   01   11   10
        -------- ---  ---  ---  ---
        00       0    0    0    1  <-- y0=0, y1=0, x1=1, x2=0 -> D0=1
        01       0    0    1    1  <-- y0=1, y1=0, x1=1, x2=1 -> D0=1
                                   y0=1, y1=0, x1=1, x2=0 -> D0=1
        11       -    -    -    -
        10       0    0    0    0
```
Simplified D0 expression: `D0 = y0'x1 + y0x2` (This is XOR). Let's re-check.
Minterms for D0:
`0010` (y1'y0', x1x2') -> D0=1
`0101` (y1'y0, x1'x2) -> D0=1
`0111` (y1'y0, x1x2) -> D0=1

K-map for D0:
```
        y0y1\x1x2  00   01   11   10
        -------- ---  ---  ---  ---
        00       0    0    0    1  <-- y0=0, y1=0, x1=1, x2=0 -> D0=1
        01       0    0    1    1  <-- y0=1, y1=0, x1=1, x2=1 -> D0=1
                                   y0=1, y1=0, x1=1, x2=0 -> D0=1
        11       -    -    -    -
        10       0    0    0    0
```
Simplified D0: `D0 = x1*x2' + x1*x2*y0` -- this doesn't look right.
Let's group:
Group 1: `y0=1`, `x1=1` (minterms `0111` and `0110` - wait, the map is `x1x2`).
`y0=1`, `x1=1` across `x2=1` and `x2=0`. This is `y0*x1`.
Group 2: `y0=0`, `x1=1`, `x2=0` (minterm `0010`). This is covered by `y0'*x1*x2'`.

Let's look at the `D0` column:
`D0 = y1'y0'x1 + y1'y0x1x2 + y1'y0x1`
`D0 = y1'x1 * (y0' + y0x2 + y0)`
`D0 = y1'x1 * (y0' + y0*(1+x2))`
`D0 = y1'x1 * (y0' + y0)`
`D0 = y1'x1`
Let's verify:
*   `0010` (y1'y0', x1x2'): D0=1. `y1'x1` = 1*1 = 1. Correct.
*   `0111` (y1'y0, x1x2): D0=1. `y1'x1` = 1*1 = 1. Correct.
*   `0110` (y1'y0, x1x2'): D0=1. `y1'x1` = 1*1 = 1. Correct.

So, `D0 = y1'x1`.

**K-map for Y (Output):**

| y1y0 | x1x2 | Y |
|------|------|---|
| 00   | 00   | 0 |
| 00   | 01   | 0 |
| 00   | 10   | 0 |
| 00   | 11   | 0 |
| 01   | 00   | 0 |
| 01   | 01   | 1 |
| 01   | 10   | 0 |
| 01   | 11   | 0 |
| 10   | 00   | 0 |
| 10   | 01   | 1 |
| 10   | 10   | 0 |
| 10   | 11   | 1 |

K-map for Y:
```
        y0y1\x1x2  00   01   11   10
        -------- ---  ---  ---  ---
        00       0    0    0    0
        01       0    1    0    0  <-- y0=1, y1=0, x1=0, x2=1 -> Y=1
        11       -    -    -    -
        10       0    1    1    0  <-- y0=0, y1=1, x1=0, x2=1 -> Y=1
                                   y0=0, y1=1, x1=1, x2=1 -> Y=1
```
Simplified Y expression: `Y = y0*x2 + y1*x2` (Same as D1).
So, `Y = (y0 + y1)*x2`.

**Logic Expressions:**
*   `D1 = (y0 + y1)*x2`
*   `D0 = y1'*x1`
*   `Y = (y0 + y1)*x2`

**Circuit Diagram:**
We would use two D-latches for `y1` and `y0`, and logic gates (AND, OR, NOT) to implement `D1`, `D0`, and `Y` based on the inputs `x1`, `x2` and state variables `y1`, `y0`.

**Hazard Consideration:**
Let's check for static hazards in the derived logic for `D1`, `D0`, `Y`.
*   `D1 = (y0 + y1)*x2 = y0*x2 + y1*x2`. This is already a sum of products. If `x2` is the input that changes, and `y0` and `y1` are stable.
    *   If `y0=1, y1=0` (state 01), `D1` depends on `x2`. If `x2` changes, `y0*x2` changes. `y1*x2` is 0. The function is `y0*x2`.
    *   If `y0=0, y1=1` (state 10), `D1` depends on `x2`. If `x2` changes, `y1*x2` changes. `y0*x2` is 0. The function is `y1*x2`.
    *   The expression `y0*x2 + y1*x2` can be rewritten as `(y0+y1)*x2`.
    *   If `y0=1, y1=0`, expression is `1*x2`. If `x2` changes from 0 to 1, `D1` goes from 0 to 1. No hazard.
    *   If `y0=0, y1=1`, expression is `1*x2`. If `x2` changes from 0 to 1, `D1` goes from 0 to 1. No hazard.
    *   **Crucially, the race between S1 (01) and S2 (10) when input is 01:**
        *   State S1 (01). Input 01.
        *   `D1 = (0+1)*1 = 1`.
        *   `D0 = 0'*1 = 1`.
        *   The next state should be `y1=1, y0=1` (state 11).
        *   However, our assignment was `S2=10`. The table indicated that for `S1(01)` and input `01`, the next state is `S2(10)`. This means `D1=1, D0=0`.
        *   My derived K-map for D1 gave `D1=1` for state `01`, input `01`.
        *   My derived K-map for D0 gave `D0=0` for state `01`, input `01`.
        *   So, the derived logic seems to correctly follow the table. The issue is that the original flow table transition `S1(01) -> S2(10)` for input `01` is problematic with the assignment `S0=00, S1=01, S2=10`.

**Resolution for the Race:**

To resolve the race between S1(01) and S2(10) during input 01, we would typically need to:
1.  **Use a different state assignment:** This might require 3 state variables to ensure single bit changes between all relevant states. For 3 states, we technically only need 2 bits. However, to avoid races, we might need to use a "dummy" state or a specific assignment strategy that ensures STT.
2.  **Introduce an intermediate state:** Let's say `S0=00, S1=01, S_intermediate=10, S2=11`. The transition `S1(01)` to unlock state would then be `S1(01) -> S_intermediate(10) -> S2(11)`. This requires modifying the flow table and re-deriving the logic.

**Referenced Concepts:** The entire example demonstrates the iterative process of state assignment, derivation of logic, and the critical need to check for races and hazards, as discussed extensively in Givone (2017) and Wakerly (2008).

---

### Practice Questions and Exercises

**Question 1:**
Define an asynchronous sequential circuit and list its key advantages and disadvantages compared to synchronous sequential circuits.
*   **Answer:** An asynchronous sequential circuit (ASC) is a sequential logic circuit where state transitions are not synchronized by a clock signal. State changes occur immediately when inputs change and are detected by the circuit.
    *   **Advantages:** Potential for higher speed (no clock delay), can be more power-efficient as logic only switches when inputs change.
    *   **Disadvantages:** More susceptible to race conditions and hazards, design process is more complex and less structured than synchronous design.

**Question 2:**
Explain the concept of a critical race condition in ASCs. Provide an example of a state assignment that might lead to a critical race and explain why.
*   **Answer:** A critical race condition occurs when a change in input causes two or more state variables to change simultaneously, and the final state depends on the order in which these variables change. If different orders lead to different final states, it's critical.
    *   **Example:** Consider 3 states S0, S1, S2.
        *   Assignment: S0=00, S1=01, S2=10.
        *   If a transition exists from S1 (01) to S2 (10), both `y1` (0->1) and `y0` (1->0) change. If `y1` changes before `y0`, the intermediate state is `11`. If `y0` changes before `y1`, the intermediate state is `00`. If either `11` or `00` leads to a different final state than `10` (the intended state), a critical race exists.

**Question 3:**
What is a static-1 hazard, and how can it be eliminated in a combinational circuit used within an ASC?
*   **Answer:** A static-1 hazard is a condition where a single input change causes the output of a combinational circuit to momentarily glitch to 0 before settling to its correct steady-state value of 1.
    *   **Elimination:** It is eliminated by adding redundant product terms to the sum-of-products expression. For each pair of adjacent 1s in the K-map that are not covered by a single product term, a new product term covering that pair is added. This ensures that at least one path remains true for the duration of the input change.

**Question 4:**
Design a primitive flow table for a 2-input sequence detector that outputs a '1' only when the sequence "01" is detected on inputs `x1` and `x2` (where `x1` is the first input, `x2` is the second).
*   **Answer:**
    *   States:
        *   S0: Initial state, no part of sequence detected.
        *   S1: '0' detected (waiting for '1').
    *   Output Y: 1 when sequence '01' detected.

    | Current State | x1=0, x2=0 | x1=0, x2=1 | x1=1, x2=0 | x1=1, x2=1 |
    | :------------ | :--------- | :--------- | :--------- | :--------- |
    | **S0**        | (S0, 0)    | (S1, 0)    | (S0, 0)    | (S0, 0)    |
    | **S1**        | (S0, 0)    | (S1, 1)    | (S0, 0)    | (S0, 0)    |

    *   Explanation:
        *   From S0: If input is 00 or 10 (or 11), we stay in S0. If input is 01, it's the start of our sequence, so we go to S1.
        *   From S1: We have seen a '0'. If input is 00 or 10 (or 11), the sequence is broken, reset to S0. If input is 01, we have detected "01", so output 1 and stay in S1 (or reset to S0 depending on how you want to handle overlaps, but staying in S1 is common for repeated sequences). Let's say it resets to S0 after detecting the sequence. So, (S1, 1) -> (S0, 1) or (S1, 1) -> (S1, 1) if we want to detect overlapping sequences like 0101. For simplicity, let's reset to S0.
    *   Revised Flow Table (resetting after detection):
    | Current State | x1=0, x2=0 | x1=0, x2=1 | x1=1, x2=0 | x1=1, x2=1 |
    | :------------ | :--------- | :--------- | :--------- | :--------- |
    | **S0**        | (S0, 0)    | (S1, 0)    | (S0, 0)    | (S0, 0)    |
    | **S1**        | (S0, 0)    | (S0, 1)    | (S0, 0)    | (S0, 0)    |

**Question 5:**
Given the state assignment `S0=00`, `S1=01` for the sequence detector in Question 4. Derive the excitation equations for `D1` and `D0` and the output equation for `Y`. Assume your inputs are `x1`, `x2` and state variables are `y1`, `y0`.
*   **Answer:**
    *   Flow Table with assignment:
    | Current State (y1y0) | Input (x1x2) | Next State (y1'y0') | Output Y |
    | :----------------- | :----------- | :------------------ | :------- |
    | S0 (00)            | 00           | 00                  | 0        |
    | S0 (00)            | 01           | 01                  | 0        |
    | S0 (00)            | 10           | 00                  | 0        |
    | S0 (00)            | 11           | 00                  | 0        |
    | S1 (01)            | 00           | 00                  | 0        |
    | S1 (01)            | 01           | 00                  | 1        |
    | S1 (01)            | 10           | 00                  | 0        |
    | S1 (01)            | 11           | 00                  | 0        |

    *   **K-map for D1 (Next state of y1):**
        ```
              y0y1\x1x2  00   01   11   10
              -------- ---  ---  ---  ---
              00       0    0    0    0
              01       0    0    0    0  <-- State S1(01) always goes to 00
              11       -    -    -    -
              10       -    -    -    -
        ```
        `D1 = 0`. This means `y1` should always be 0.

    *   **K-map for D0 (Next state of y0):**
        ```
              y0y1\x1x2  00   01   11   10
              -------- ---  ---  ---  ---
              00       0    1    0    0  <-- State S0(00), input 01 -> D0=1
              01       0    0    0    0  <-- State S1(01) always goes to 00
              11       -    -    -    -
              10       -    -    -    -
        ```
        `D0 = y0'x1'x2` (This is the minterm for `0001`).
        Simplified: `D0 = x1'*x2`. (Checking my map, it should be y0' * x1' * x2).
        Wait, the K-map is indexed `y0y1`. So state `00` is `y0=0, y1=0`.
        The input `01` corresponds to `x1=0, x2=1`.
        So, `D0` is 1 when `y0=0, y1=0, x1=0, x2=1`. This is `y0'y1'*x1'*x2`.
        Simplified: `D0 = x1'*x2`.

    *   **K-map for Y (Output):**
        ```
              y0y1\x1x2  00   01   11   10
              -------- ---  ---  ---  ---
              00       0    0    0    0
              01       0    1    0    0  <-- State S1(01), input 01 -> Y=1
              11       -    -    -    -
              10       -    -    -    -
        ```
        `Y = y0*y1'*x1'*x2`.
        Simplified: `Y = x1'*x2`.

    *   **Final Equations:**
        *   `D1 = 0`
        *   `D0 = x1'*x2`
        *   `Y = x1'*x2`

    *   **Circuit Implementation:**
        *   We need one D-latch for `y0`. The `D` input to this latch is `x1'*x2`.
        *   `y1` is always 0, so it doesn't need a latch or can be connected to ground.
        *   The output `Y` is directly connected to `x1'*x2`.

---

### Important Points to Remember

*   **No Clock, No Synchronous Operations:** The core difference of ASCs is the absence of a clock. State transitions are event-driven.
*   **Race Conditions are Critical:** Careful state assignment is paramount to avoid critical races, which can lead to unpredictable behavior.
*   **Hazards Require Mitigation:** Static and dynamic hazards must be addressed using techniques like redundant logic and appropriate state assignments.
*   **Design Flow is Iterative:** The design of ASCs often involves moving back and forth between steps (e.g., state assignment might reveal races that require flow table modification).
*   **Potential for Complexity:** While powerful, the design and analysis of ASCs are more complex than synchronous circuits.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### Further Reading and References

*   **Digital Principles & Design by Donald G Givone (2017):** Excellent foundational text for sequential circuits, including detailed sections on asynchronous design principles, state reduction, and race condition analysis.
*   **Digital Design: Principles and Practices by John F Wakerly (2008):** Another highly recommended book covering sequential circuit design, with a good balance of theory and practical examples.
*   **Digital Logic Applications and Design by John M Yarbrough (2006):** Offers a practical approach to digital design, including specific chapters on asynchronous sequential circuits and their design methodology.
*   **Switching and Finite Automata Theory by Zvi Kohavi, Niraj K. Jha (2009):** For a more theoretical and rigorous understanding of state machines, minimization, and the mathematical underpinnings of sequential circuit design.

---