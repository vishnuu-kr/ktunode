---
title: "Kohavi algorithm"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe762"
status: "completed"
scrapedAt: "2026-05-23T17:48:19.456Z"
---
# Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

## Topic: Kohavi Algorithm

This module delves into the critical topic of hazards in combinational networks, focusing on identifying and eliminating static and dynamic hazards. We will explore the Kohavi algorithm as a systematic approach to hazard detection and elimination in asynchronous sequential circuits, a concept closely related to ensuring reliable operation of digital systems, particularly in the context of asynchronous design.

**Relevant Course Outcomes:**

*   **CO3:** Identify and mitigate static and dynamic hazards in combinational networks, design hazard-free circuits, address practical issues in digital systems and apply fault detection and testing methods. (Knowledge Level: K2) - **Directly addressed by understanding hazard detection and elimination.**

**Learning Outcomes:**

*   Understand the concept of hazards in combinational logic.
*   Differentiate between static and dynamic hazards.
*   Learn the principles of the Kohavi algorithm for hazard detection.
*   Apply the Kohavi algorithm to identify potential hazards in a given combinational circuit.
*   Understand the relationship between hazards and race conditions in asynchronous circuits.
*   Learn techniques to eliminate static and dynamic hazards.

---

### 1. Introduction to Hazards

**Definition:** A hazard in a combinational logic circuit is an undesirable transient output voltage that occurs when there is a change in one or more input variables. These transient outputs are temporary and can cause the circuit to produce incorrect results before settling to its stable, intended output.

**Types of Hazards:**

*   **Static Hazards:** Occur when the output of a combinational circuit should remain constant (either 0 or 1) during a change in inputs, but instead, it momentarily changes to the opposite value.
    *   **Static-0 Hazard:** The output should be 0 but momentarily becomes 1.
    *   **Static-1 Hazard:** The output should be 1 but momentarily becomes 0.
*   **Dynamic Hazards:** Occur when the output of a combinational circuit changes multiple times for a single input change, when it should only change once. This is often a result of multiple propagation delays through different paths.

**Causes of Hazards:**

Hazards are primarily caused by **unequal propagation delays** through different logic gates and signal paths in a circuit. When multiple input changes occur simultaneously, or a single input change propagates through different paths with varying delays, the logic may momentarily evaluate incorrectly.

**Importance of Hazard Elimination:**

*   **Reliability:** Hazards can lead to incorrect operation of digital systems, especially in sequential circuits where the momentary incorrect output can be latched.
*   **Asynchronous Circuits:** Hazards are particularly problematic in asynchronous sequential circuits, as they can cause state misinterpretations and unpredictable behavior (related to race conditions).
*   **VLSI Design:** In VLSI, controlling delays is crucial. Understanding and eliminating hazards ensures predictable and reliable circuit performance.

---

### 2. Hazards in Combinational Networks

**Understanding the Root Cause:**

Hazards arise when a change in an input variable causes the output to temporarily change its value when it should have remained constant. This often happens when a specific input combination causes a *feedback path* of sorts, where a change in an input variable, through different gate delays, causes a brief change in the output that then gets propagated back as if it were a new input change.

**Example of Static Hazard (Static-1 Hazard):**

Consider a simple two-input OR gate: $F = A + B$.
If $A$ changes from 0 to 1, and $B$ is 0, the output should remain 1.
However, if both $A$ and $B$ are 1, and $A$ changes from 1 to 0, while $B$ is 1, the output should remain 1.
Let's analyze a scenario with a glitch:
Suppose we have a circuit with the function $Y = A \overline{B} + \overline{A} B$. This is an XOR gate.
If input $A$ changes from 1 to 0, while $B$ is 0, the output should change from 1 to 0.
Consider the Karnaugh map (K-map) for $Y = A \overline{B} + \overline{A} B$.

| A\B | 0   | 1   |
| :-- | :-- | :-- |
| 0   | 0   | 1   |
| 1   | 1   | 0   |

Let's represent the circuit using AND and OR gates: $Y = (A \land \overline{B}) \lor (\overline{A} \land B)$.

Now, consider the scenario where $A$ transitions from 1 to 0, and $B$ is held at 0.
*   **Initial state:** $A=1, B=0$. Output $Y = (1 \land \overline{0}) \lor (\overline{1} \land 0) = (1 \land 1) \lor (0 \land 0) = 1 \lor 0 = 1$.
*   **Input change:** $A$ changes from 1 to 0. $B$ remains 0.
*   **Expected output:** $Y = (0 \land \overline{0}) \lor (\overline{0} \land 0) = (0 \land 1) \lor (1 \land 0) = 0 \lor 0 = 0$.

**Scenario with a Hazard:**
Let's assume delays:
*   Delay of $\overline{A}$ gate: $d_1$
*   Delay of $\overline{B}$ gate: $d_2$
*   Delay of first AND gate ($A \overline{B}$): $d_3$
*   Delay of second AND gate ($\overline{A} B$): $d_4$
*   Delay of OR gate: $d_5$

When $A$ changes from 1 to 0, $\overline{A}$ changes from 0 to 1.
*   Path 1: $A \rightarrow \text{AND1} \rightarrow \text{OR}$ (term $A \overline{B}$)
*   Path 2: $\overline{A} \rightarrow \text{AND2} \rightarrow \text{OR}$ (term $\overline{A} B$)

When $A$ goes from 1 to 0, and $B=0$:
*   Term 1 ($A \overline{B}$): The input $A$ to the first AND gate changes from 1 to 0. This will cause the output of the first AND gate to go from 1 to 0.
*   Term 2 ($\overline{A} B$): The input $\overline{A}$ to the second AND gate changes from 0 to 1. Since $B=0$, the output of the second AND gate will go from 0 to 0.

**Hazard Scenario:** If the delay through the path that should be 0 (term $\overline{A} B$) is *longer* than the delay through the path that should be 1 (term $A \overline{B}$), then the output of the first AND gate might go to 0 *after* the output of the second AND gate has settled to 0 (or before it has changed from 0).

Let's re-examine $Y = A \overline{B} + \overline{A} B$ when $A$ changes from 1 to 0 and $B=0$.
*   $A$ changes from 1 to 0.
*   $\overline{A}$ changes from 0 to 1.
*   $\overline{B}$ remains 1.

Consider the two product terms:
1.  $T_1 = A \overline{B}$: At $A=1, B=0$, $T_1 = 1 \cdot 1 = 1$. When $A$ becomes 0, $T_1$ becomes $0 \cdot 1 = 0$.
2.  $T_2 = \overline{A} B$: At $A=1, B=0$, $T_2 = 0 \cdot 0 = 0$. When $A$ becomes 0, $\overline{A}$ becomes 1, so $T_2$ becomes $1 \cdot 0 = 0$.

The output is $Y = T_1 + T_2$.
*   Initially: $Y = 1 + 0 = 1$.
*   After $A$ change: $Y = 0 + 0 = 0$.

**Where is the hazard?**
The hazard occurs if the propagation delay of $T_1$ (which goes from 1 to 0) is such that the OR gate output momentarily goes to 0 *before* $T_2$ is evaluated to 0 (which it stays at 0 in this case).

Let's consider the case where the circuit is meant to be hazard-free using a redundant term.
The K-map for $Y = A \overline{B} + \overline{A} B$ can be covered by two prime implicants: $A \overline{B}$ and $\overline{A} B$.

**Example of Static-1 Hazard in a Sum-of-Products (SOP) implementation:**

Consider the function $F = AC + BC$.
K-map:
| A\BC | 00 | 01 | 11 | 10 |
| :--- | :--- | :--- | :--- | :--- |
| 0    | 0  | 0  | 0  | 0  |
| 1    | 0  | 1  | 1  | 0  |

The minterms are $m_2$ (A=0, B=1, C=0) - oops, K-map is usually arranged differently.
Let's use a standard 3-variable K-map for $F = AC + BC$.
Variables: A, B, C. Function: $F(A, B, C)$
Minterms for $AC$: $m_5 (A=1, B=0, C=1), m_7 (A=1, B=1, C=1)$
Minterms for $BC$: $m_6 (A=0, B=1, C=1), m_7 (A=1, B=1, C=1)$

| A\BC | 00 (0) | 01 (1) | 11 (3) | 10 (2) |
| :--- | :----- | :----- | :----- | :----- |
| 0    | 0      | 0      | 1      | 0      |
| 1    | 0      | 0      | 1      | 1      |

The function is $F = A \cdot B \cdot C + A \cdot \overline{B} \cdot C + \overline{A} \cdot B \cdot C$.
The minimal SOP is $F = AC + BC$.

Let's analyze the transition from $A=0, B=1, C=1$ to $A=1, B=1, C=1$.
*   Input change: $A$ changes from 0 to 1. $B=1, C=1$ are constant.
*   Output should change from $F = 0 \cdot 1 + 1 \cdot 1 = 0 + 1 = 1$ to $F = 1 \cdot 1 + 1 \cdot 1 = 1 + 1 = 1$.
*   The output should remain 1.

Circuit implementation: $F = (A \land C) \lor (B \land C)$

Consider the paths when $A$ changes from 0 to 1, with $B=1, C=1$:
1.  Path 1 ($A \land C$): $A$ goes from 0 to 1, $C$ is 1. Output of this AND gate goes from $0 \land 1 = 0$ to $1 \land 1 = 1$.
2.  Path 2 ($B \land C$): $B$ is 1, $C$ is 1. Output of this AND gate is $1 \land 1 = 1$. This output remains 1.

The OR gate combines the outputs of Path 1 and Path 2.
*   When $A=0, B=1, C=1$: OR input are 0 and 1. Output = $0 \lor 1 = 1$.
*   When $A=1, B=1, C=1$: OR input are 1 and 1. Output = $1 \lor 1 = 1$.

**Hazard Scenario:**
If the propagation delay through Path 1 (which goes from 0 to 1) is *longer* than the propagation delay through Path 2 (which stays at 1), or if the propagation delay of the OR gate is such, the output might momentarily drop to 0.
Specifically, when $A$ goes from 0 to 1:
*   The first AND gate's output goes from 0 to 1.
*   The second AND gate's output remains 1.
*   The OR gate's output should be $0 \lor 1 = 1$ initially, and $1 \lor 1 = 1$ finally.

If the term $(A \land C)$ momentarily goes to 0 as $A$ transitions, and the term $(B \land C)$ also momentarily goes to 0 due to its own internal logic or delays (though unlikely in this simple case), then the OR gate output could briefly become $0 \lor 0 = 0$ before settling to 1. This is a **static-1 hazard**.

**Elimination of Static Hazards:**
Static hazards can be eliminated by ensuring that for any single input variable change, the output of the circuit remains constant. This is achieved by covering *all adjacent 1s* in the K-map with product terms. In minimal SOP forms, adjacent 1s that are covered by separate prime implicants can lead to static hazards.

For $F = AC + BC$, the 1s at minterms $m_5$ and $m_7$ are covered by $AC$. The 1s at minterms $m_6$ and $m_7$ are covered by $BC$.
Notice that minterm $m_7$ (A=1, B=1, C=1) is covered by *both* prime implicants. This is good.
The hazard occurs when transitioning between states where different prime implicants are responsible for the output being 1.

The problematic transition is between $m_5$ (011) and $m_7$ (111), and between $m_6$ (111) and $m_7$ (111). Ah, wait.
Let's re-evaluate the transition between $m_5 (011)$ and $m_7 (111)$ where $A$ changes.
$m_5 = \overline{A}BC$ (should be $AC$, so A=0, B=1, C=1 is $\overline{A} \cdot 1 \cdot 1 = 1$).
Let's use the original K-map correctly for $F=AC+BC$.
Minterms: $m_5 (A=1, B=0, C=1)$, $m_7 (A=1, B=1, C=1)$, $m_6 (A=0, B=1, C=1)$.

| A\BC | 00 (0) | 01 (1) | 11 (3) | 10 (2) |
| :--- | :----- | :----- | :----- | :----- |
| 0    | 0      | 0      | **1**  | 0      |  (m6)
| 1    | 0      | 0      | **1**  | **1**  |  (m7, m5)

Prime implicants:
*   $AC$: Covers $m_5$ and $m_7$. (Cells (1,2) and (1,3) in a 2x4 K-map, or (1,0) and (1,1) if using BC)
*   $BC$: Covers $m_6$ and $m_7$. (Cells (0,3) and (1,3) in a 2x4 K-map, or (0,1) and (1,1) if using BC)

The transition from $A=0, B=1, C=1$ ($m_6$) to $A=1, B=1, C=1$ ($m_7$) is where $A$ changes.
$m_6$ is covered by $BC$. $m_7$ is covered by both $AC$ and $BC$.

When $A$ changes from 0 to 1, $B=1, C=1$ are constant:
*   Term $AC$: goes from $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.
*   Term $BC$: stays at $1 \cdot 1 = 1$.

If the path for $AC$ has a delay such that its output momentarily drops to 0 *after* the OR gate has received the stable 1 from $BC$, then the OR gate output will momentarily become $0 \lor 1 = 0$. This is a static-1 hazard.

To eliminate this, we can add a redundant prime implicant that covers both $m_6$ and $m_5$. This would be the implicant $AC$ (which covers $m_5, m_7$) and $BC$ (which covers $m_6, m_7$).
The problematic transition is between adjacent cells in the K-map that share only one prime implicant for covering the '1's. For $F=AC+BC$, the transition between $m_6$ and $m_7$ (where A changes) involves $BC$ and $AC$.
The transition between $m_5$ and $m_7$ (where A changes) involves $AC$ and $BC$.
The transition between $m_6$ and $m_7$ (where B changes, C is constant) is problematic because they are adjacent.

To fix this, we can add a redundant term that covers all adjacent 1s that could cause a hazard.
In the K-map for $F = AC + BC$, the 1s are at $m_5, m_6, m_7$.
$AC$ covers $(A=1, B=0, C=1)$ and $(A=1, B=1, C=1)$.
$BC$ covers $(A=0, B=1, C=1)$ and $(A=1, B=1, C=1)$.

To eliminate the hazard on the transition where only $A$ changes (between $m_6$ and $m_7$), we can add a term that spans these two cells. This term would be $ABC$.
So, the hazard-free implementation would be $F = AC + BC + ABC$.
This means we need to add a third term: $(A \land B \land C)$.
The circuit now has three AND gates and a 3-input OR gate.

**Example of Static-0 Hazard:**
Consider $F = \overline{A}\overline{B} + AB$. This is an XNOR gate.
K-map:
| A\B | 0   | 1   |
| :-- | :-- | :-- |
| 0   | 1   | 0   |
| 1   | 0   | 1   |

Minimal SOP: $F = \overline{A}\overline{B} + AB$.

Consider the transition from $A=0, B=1$ to $A=1, B=1$.
*   Initial state ($A=0, B=1$): $F = \overline{0}\overline{1} + 0 \cdot 1 = 1 \cdot 0 + 0 = 0$.
*   Input change: $A$ changes from 0 to 1. $B=1$ is constant.
*   Expected output: $A=1, B=1$: $F = \overline{1}\overline{1} + 1 \cdot 1 = 0 \cdot 0 + 1 = 1$.
*   The output should change from 0 to 1.

Circuit: $F = (\overline{A} \land \overline{B}) \lor (A \land B)$.
Let's analyze the transition when $A$ changes from 0 to 1, and $B=1$.
1.  Term 1 ($\overline{A}\overline{B}$): $\overline{A}$ changes from 1 to 0. $\overline{B}$ is 0. Output of this AND gate goes from $1 \cdot 0 = 0$ to $0 \cdot 0 = 0$.
2.  Term 2 ($A B$): $A$ changes from 0 to 1. $B$ is 1. Output of this AND gate goes from $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.

The OR gate combines these.
*   Initial ($A=0, B=1$): OR inputs are 0 and 0. Output = $0 \lor 0 = 0$.
*   Final ($A=1, B=1$): OR inputs are 0 and 1. Output = $0 \lor 1 = 1$.

**Hazard Scenario (Static-0 Hazard):**
If the path for Term 2 ($A B$) goes from 0 to 1 *after* the path for Term 1 ($\overline{A}\overline{B}$) goes to 0 (which it stays at 0), this doesn't immediately suggest a static-0 hazard.
A static-0 hazard happens when the output should remain 0, but momentarily becomes 1.
Let's consider a different transition.
Transition from $A=0, B=0$ to $A=1, B=0$.
*   Initial state ($A=0, B=0$): $F = \overline{0}\overline{0} + 0 \cdot 0 = 1 \cdot 1 + 0 = 1$.
*   Input change: $A$ changes from 0 to 1. $B=0$ is constant.
*   Expected output: $A=1, B=0$: $F = \overline{1}\overline{0} + 1 \cdot 0 = 0 \cdot 1 + 0 = 0$.
*   The output should change from 1 to 0.

Circuit: $F = (\overline{A} \land \overline{B}) \lor (A \land B)$.
Let's analyze the transition when $A$ changes from 0 to 1, and $B=0$.
1.  Term 1 ($\overline{A}\overline{B}$): $\overline{A}$ changes from 1 to 0. $\overline{B}$ is 1. Output of this AND gate goes from $1 \cdot 1 = 1$ to $0 \cdot 1 = 0$.
2.  Term 2 ($A B$): $A$ changes from 0 to 1. $B$ is 0. Output of this AND gate goes from $0 \cdot 0 = 0$ to $1 \cdot 0 = 0$.

The OR gate combines these.
*   Initial ($A=0, B=0$): OR inputs are 1 and 0. Output = $1 \lor 0 = 1$.
*   Final ($A=1, B=0$): OR inputs are 0 and 0. Output = $0 \lor 0 = 0$.

**Hazard Scenario (Static-0 Hazard):**
If the path for Term 1 ($\overline{A}\overline{B}$) goes to 0 *after* the path for Term 2 ($A B$) also goes to 0 (which it stays at 0), it doesn't create a problem.
However, if the path for Term 1 ($\overline{A}\overline{B}$) goes to 0, and the path for Term 2 ($A B$) momentarily goes to 1 due to some glitch or delay mismatch, then the OR gate output could momentarily become $0 \lor 1 = 1$ before settling to $0 \lor 0 = 0$. This would be a static-0 hazard.

**Elimination of Static-0 Hazards:**
Static-0 hazards can occur in Product-of-Sums (POS) implementations. The elimination process is analogous to static-1 hazards in SOPs, by adding redundant terms in the POS form to cover adjacent 0s in the K-map.

**Dynamic Hazards:**
These are more complex and occur when the output changes multiple times for a single input change. They are a consequence of multiple paths with different delays leading to the output.
Consider $F = (A \land B) \lor (\overline{A} \land C)$.
If A changes, the output may flicker. For example, if A changes from 0 to 1, $\overline{A}$ changes from 1 to 0.
*   Term 1: $A \land B$. Changes based on $A$.
*   Term 2: $\overline{A} \land C$. Changes based on $\overline{A}$.

If the delay through Term 1 is shorter than Term 2, and the delay through the OR gate is also a factor, the output could momentarily change its value multiple times.
Dynamic hazards are more common in circuits implemented with AND-OR logic where a direct implementation of the SOP or POS expression is used without considering redundant terms that smooth out transitions.

Eliminating dynamic hazards requires a more careful selection of prime implicants and potentially adding redundant terms.

---

### 3. The Kohavi Algorithm for Hazard Detection

The Kohavi algorithm, primarily attributed to Zvi Kohavi, provides a systematic way to detect hazards in asynchronous sequential circuits. While the algorithm is generally applied to sequential circuits, its underlying principles are rooted in analyzing the behavior of combinational logic under input changes and considering the impact of delays. For combinational circuits, this approach focuses on identifying input transitions that can lead to hazardous behavior.

**Core Idea:**
The algorithm essentially traces the effect of input changes through the circuit's logic, considering all possible paths and their potential delays. It involves analyzing the circuit in terms of its state table or flow table representation (for sequential circuits) and examining transitions. For combinational networks, we can adapt this by looking at input transitions and the corresponding output changes.

**Simplified approach for Combinational Networks (Kohavi's principles applied):**

1.  **Represent the Combinational Network:** Obtain the truth table or K-map of the combinational circuit.
2.  **Identify Input Transitions:** Consider all possible input transitions that result in a change in the output value.
3.  **Analyze Each Output Function Independently:** For each output of the combinational circuit, analyze its behavior during these input transitions.
4.  **Trace Paths:** For a given input transition that should result in a constant output, analyze the paths through the combinational logic that contribute to that output.
5.  **Hazard Condition:** A hazard exists if, for a single input change, the output momentarily changes to the incorrect value or oscillates. This typically happens when a change in an input variable causes a product term that was 1 to go to 0, and another product term that was 0 does not become 1 sufficiently quickly (or also momentarily goes to 0).

**Kohavi's Method for Static Hazards in SOP:**

For a Sum-of-Products expression, a static hazard can occur when a single input variable changes.
Consider a transition between two adjacent minterms in the K-map (differing by one variable). Let these minterms be $m_i$ and $m_j$, and the output be $Y$.
If $Y$ should be 1 during this transition, and the SOP expression is $Y = P_1 + P_2 + \dots + P_k$, where $P_l$ are product terms.
A hazard can occur if, for the transition between $m_i$ and $m_j$:
*   $m_i$ is covered by $P_a$.
*   $m_j$ is covered by $P_b$.
*   $P_a$ and $P_b$ are the only terms that evaluate to 1 for $m_i$ and $m_j$ respectively, and they are different.

The classic way to identify static hazards in SOP is:
A static-1 hazard exists if there is a change in a single input variable that causes the output to be 1, and the minterms corresponding to the initial and final states of the input are covered by different prime implicants, AND these minterms are adjacent in the K-map.

**The Kohavi Algorithm (adapted for combinational hazard detection):**

Let's take the example $F = AC + BC$ again.
K-map:
| A\BC | 00 | 01 | 11 | 10 |
| :--- | :--- | :--- | :--- | :--- |
| 0    | 0  | 0  | **1**  | 0    |
| 1    | 0  | 0  | **1**  | **1**  |

Prime Implicants: $P_1 = AC$, $P_2 = BC$.
The SOP is $F = P_1 + P_2$.

**Transition of interest:** Change in A from 0 to 1, while B=1, C=1.
*   Initial state: A=0, B=1, C=1 (minterm $m_6$). $F=1$. $P_1$ covers $m_6$? No, $AC$ requires $A=1$. $P_2$ covers $m_6$? Yes, $BC$ requires $B=1, C=1$. So, $m_6$ is covered by $P_2$.
*   Final state: A=1, B=1, C=1 (minterm $m_7$). $F=1$. $P_1$ covers $m_7$? Yes, $AC$ requires $A=1, C=1$. $P_2$ covers $m_7$? Yes, $BC$ requires $B=1, C=1$. So, $m_7$ is covered by both $P_1$ and $P_2$.

**Hazard Analysis:**
The transition is from $m_6$ to $m_7$.
*   At $m_6$, $P_1=0, P_2=1$. $F = 0+1 = 1$.
*   At $m_7$, $P_1=1, P_2=1$. $F = 1+1 = 1$.

The transition involves $A$ changing.
*   Term $P_1 = AC$: When A changes from 0 to 1 (with C=1), the output of the AND gate for $AC$ changes from $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.
*   Term $P_2 = BC$: With B=1, C=1, the output of the AND gate for $BC$ is always $1 \cdot 1 = 1$.

When A changes from 0 to 1:
The output of $AC$ goes from 0 to 1.
The output of $BC$ remains 1.
The OR gate output is $AC_{out} \lor BC_{out}$.
Initially: $0 \lor 1 = 1$.
Finally: $1 \lor 1 = 1$.

**Where is the potential hazard?**
The hazard can occur if the $AC$ term, which should go from 0 to 1, momentarily goes to 0 during the transition of $A$. If this happens when the $BC$ term (which is stable at 1) is also momentarily disrupted or if the OR gate has a delay, the output could dip.
The problem is that the transition $m_6 \leftrightarrow m_7$ is solely dependent on the change in $A$. The term $AC$ is responsible for this change. The term $BC$ is stable.
The specific rule for SOPs: A static-1 hazard occurs if a transition exists between two adjacent minterms which are covered by different prime implicants. $m_6$ is covered only by $BC$, while $m_7$ is covered by both $AC$ and $BC$. The transition $m_6 \to m_7$ is thus covered by $P_2$ and $P_1$. This is not the criteria for a hazard.

The criteria is: A static-1 hazard exists if a transition between two adjacent minterms is covered by *only one* prime implicant.

Let's use the K-map again and look at the adjacencies of '1's.
The '1's are at $m_5 (101), m_6 (011), m_7 (111)$.
*   $AC$ covers $m_5$ and $m_7$. These are adjacent when $B$ changes.
*   $BC$ covers $m_6$ and $m_7$. These are adjacent when $A$ changes.

Consider the transition from $m_6 (011)$ to $m_7 (111)$. This transition is covered by $BC$ and $AC$. This is fine.
Consider the transition from $m_5 (101)$ to $m_7 (111)$. This transition is covered by $AC$ and $BC$. This is fine.

Let's check the case that *is* problematic:
Consider $F = A + \overline{A}B$.
K-map:
| A\B | 0   | 1   |
| :-- | :-- | :-- |
| 0   | 1   | 1   |
| 1   | 1   | 1   |

Minimal SOP: $F = A + B$. (Covers all 1s).
Prime implicants: $P_1 = A$ (covers $m_2, m_3$), $P_2 = B$ (covers $m_1, m_3$).
The SOP is $F = A + B$.

Let's look at the transition where $A$ changes from 0 to 1, and $B$ stays at 0.
*   Initial state: $A=0, B=0$ ($m_0$). $F=0$ (should be 1 - my K-map is wrong or the function is wrong).
Let's re-do the K-map for $F = A + \overline{A}B$.
Minterms:
$A$: $m_2 (010), m_3 (011), m_6 (110), m_7 (111)$
$\overline{A}B$: $m_1 (001), m_3 (011)$

| A\BC | 00 (0) | 01 (1) | 11 (3) | 10 (2) |
| :--- | :----- | :----- | :----- | :----- |
| 0    | 0      | **1**  | **1**  | 0      | (m1, m3)
| 1    | 0      | **1**  | **1**  | **1**  | (m2, m3, m6, m7) - Error in reading K-map.

Let's restart with a simpler example for clarity on Kohavi's principles.
Consider the function: $F(A, B, C) = A \overline{B} + B C$
K-map:
| A\BC | 00 | 01 | 11 | 10 |
| :--- | :--- | :--- | :--- | :--- |
| 0    | 0  | 0  | **1**  | 0    | (m6)
| 1    | 0  | **1**  | **1**  | 0    | (m5, m7)

Prime implicants:
*   $P_1 = A \overline{B}$: covers $m_5$ (101). This should be $A \overline{B} C$? No, $A \overline{B}$ should cover $m_4$ and $m_5$. Let's assume variables are A, B, C.
Let's use 2 variables A, B. $F = A \overline{B} + B$.
K-map:
| A\B | 0   | 1   |
| :-- | :-- | :-- |
| 0   | 1   | 1   | (m0, m1)
| 1   | 1   | 1   | (m2, m3)

This function is always 1. My examples are proving unhelpful.

Let's go back to $F = AC + BC$.
K-map:
| A\BC | 00 | 01 | 11 | 10 |
| :--- | :--- | :--- | :--- | :--- |
| 0    | 0  | 0  | **1**  | 0    | (m6)
| 1    | 0  | 0  | **1**  | **1**  | (m7, m5)

Prime Implicants: $P_1 = AC$ (covers $m_5, m_7$), $P_2 = BC$ (covers $m_6, m_7$).
SOP: $F = AC + BC$.

**Hazard Check (Transition $m_6 \leftrightarrow m_7$):**
*   $m_6$: A=0, B=1, C=1. Covered by $P_2$ ($BC$). $P_1$ is 0.
*   $m_7$: A=1, B=1, C=1. Covered by $P_1$ ($AC$) and $P_2$ ($BC$).

When A changes from 0 to 1 (B=1, C=1):
*   Term $P_1 = AC$: changes from $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.
*   Term $P_2 = BC$: remains $1 \cdot 1 = 1$.

The output of the OR gate is $P_1 + P_2$.
Initially: $0 + 1 = 1$.
Finally: $1 + 1 = 1$.

The hazard occurs if the term $AC$ momentarily goes to 0 when $A$ changes. If this happens, and $BC$ is stable at 1, the OR gate would momentarily receive $0 \lor 1$, which is 1. This doesn't cause a dip.
The hazard arises if *both* terms momentarily go to 0 or if the path carrying the stable '1' also has a disruption.

**Kohavi's rule for static-1 hazard in SOP:**
A static-1 hazard exists for a transition between adjacent minterms $m_i$ and $m_j$ if *both* $m_i$ and $m_j$ are covered by $P_k$, and the transition is covered by another implicant $P_l$.

Let's consider the specific transition where A changes from 0 to 1, and B=1, C=1.
This is the transition from minterm $m_6$ (011) to minterm $m_7$ (111).
$m_6$ is covered by $BC$ ($P_2$).
$m_7$ is covered by $AC$ ($P_1$) and $BC$ ($P_2$).

The transition is covered by $P_1$ (as $A$ changes from 0 to 1 within $AC$) and $P_2$ (as $B$ and $C$ are constant).
The K-map shows that $m_6$ and $m_7$ are adjacent and are covered by the implicant $BC$ ($P_2$).
The transition is also covered by $AC$ ($P_1$) because $m_7$ is covered by $AC$.

The crucial observation for static-1 hazards in SOP:
A static-1 hazard exists in an SOP form if there is a transition between two adjacent minterms that are covered by *only one* prime implicant.
Here, the transition $m_6 \leftrightarrow m_7$ is covered by $BC$ (for both $m_6$ and $m_7$).
The transition is also covered by $AC$ for $m_7$.

The problem arises when a specific implicant causes the change. The implicant $AC$ is responsible for the change in the $A$ input.
The K-map shows the adjacency between $m_6$ and $m_7$. This adjacency is covered by $BC$.
The adjacency between $m_5$ and $m_7$ is covered by $AC$.

Consider the transition $m_6 \leftrightarrow m_7$.
This is covered by $BC$.
The issue is that the output $F$ is 1 because of $BC$ at $m_6$. At $m_7$, $F$ is 1 because of both $AC$ and $BC$.
The term $AC$ is the one whose inputs are changing ($A$ changes from 0 to 1).

**To eliminate the hazard, we must add a redundant implicant that covers the transition.**
The problematic transition is between the state covered by $m_6$ and $m_7$. These two cells are adjacent, and they are both covered by $BC$.
The transition is also captured by $AC$ for $m_7$.

To ensure that no matter how delays propagate, the output remains stable, we can add the implicant $ABC$, which covers $m_7$. This doesn't help directly with the $m_6 \leftrightarrow m_7$ transition which relies on $BC$.

Let's re-state the rule:
A static-1 hazard can exist in an SOP expression if a transition between two adjacent minterms, $m_i$ and $m_j$, that are covered by a prime implicant $P_k$, is also covered by another prime implicant $P_l$.
In our case, the transition $m_6 \leftrightarrow m_7$ is covered by $P_2 = BC$. And $m_7$ is also covered by $P_1 = AC$.
This means that the path for $AC$ changing might interact with the stable $BC$ path.

The correct approach to eliminate the hazard in $F = AC + BC$ when A changes from 0 to 1 (with B=1, C=1) is to add a redundant term. This redundant term must cover all adjacent 1's that are *not* covered by the same prime implicant.
The transition $m_6 \leftrightarrow m_7$ involves $BC$ covering both, but $AC$ also covers $m_7$. This is the scenario for a potential hazard.
The hazard is on the transition of $A$ where $B$ and $C$ are held constant.

To fix this, we must add a redundant implicant that covers this specific transition. The implicant $ABC$ covers $m_7$. This does not help directly.
The rule to eliminate static hazards in SOP: Add redundant prime implicants to cover all groups of adjacent 1s. A minimal SOP might not cover all adjacencies.

The hazard in $F = AC + BC$ occurs on the transition $m_6 \leftrightarrow m_7$ (A changes) and $m_5 \leftrightarrow m_7$ (B changes).
The transition $m_6 \leftrightarrow m_7$ is covered by $BC$. It is also covered by $AC$ for $m_7$.
The transition $m_5 \leftrightarrow m_7$ is covered by $AC$. It is also covered by $BC$ for $m_7$.

To eliminate the hazard, we need to ensure that for any single input change, the output is consistently 1. We can add the implicant $ABC$, which covers $m_7$. The hazard-free expression is $F = AC + BC + ABC$.
This is because the term $ABC$ ensures that if $A, B, C$ are all 1, the output is definitely 1, regardless of the transitions in other terms. The added term $ABC$ covers the adjacency between $m_6$ and $m_7$ indirectly, and $m_5$ and $m_7$ indirectly.

**How to identify the need for $ABC$ using Kohavi's principles:**
1.  Identify all possible input transitions.
2.  For each transition, if the output should remain constant, trace the contributing product terms.
3.  If a product term is responsible for the '1' output at one state of the transition, and that same product term must go to '0' at the other state (while another product term takes over), a hazard may occur.

**Key Insight for Kohavi:** For SOP, a static-1 hazard is associated with a transition between two minterms covered by a specific prime implicant, where one of these minterms is *also* covered by a different prime implicant.

In $F = AC + BC$:
Transition $m_6 \leftrightarrow m_7$.
$m_6$ is covered by $BC$.
$m_7$ is covered by $BC$ AND $AC$.
The transition is covered by $BC$.
The transition is also "covered" by $AC$ at $m_7$. This is the condition for a hazard.
The missing implicant to cover this transition is $ABC$.

---

### 4. Techniques to Eliminate Hazards

**1. Redundant Prime Implicants (for Static Hazards):**
The most common method for eliminating static hazards in SOP (static-1) or POS (static-0) forms is to add redundant prime implicants.
*   **For SOP (Static-1 Hazards):** If a minimal SOP form has a hazard, add all prime implicants that cover groups of adjacent 1s that are not covered by a single prime implicant. In essence, ensure all adjacent 1s in the K-map are covered by at least two overlapping prime implicants.
    *   The hazard-free SOP for $F = AC + BC$ is $F = AC + BC + ABC$. The term $ABC$ is the redundant implicant.
*   **For POS (Static-0 Hazards):** Similar to SOP, but applied to the complement function and covering adjacent 0s.

**2. Additional Levels of Logic (for Dynamic Hazards):**
Dynamic hazards are more complex to eliminate. They often require adding additional logic levels or carefully selecting implementations. A common technique is to ensure that all paths contributing to an output have roughly equal propagation delays. This can involve:
*   **Adding extra gates:** Inserting delay elements or gates to balance path delays.
*   **Using specific circuit structures:** Some circuit structures are inherently less prone to dynamic hazards.

**3. Hazard-Free Circuit Design:**
Designing circuits directly in a hazard-free manner is the best approach. This often involves:
*   **Canonical Sum-of-Products or Product-of-Sums:** These forms can be less prone to hazards but might not be minimal.
*   **Careful K-map Analysis:** Always check for adjacent 1s (for SOP) or 0s (for POS) that are covered by only a single prime implicant. If such adjacencies exist for transitions, add redundant prime implicants.

**Example of Hazard-Free Implementation (revisiting $F = AC + BC$):**
Original minimal SOP: $F = AC + BC$
K-map:
| A\BC | 00 | 01 | 11 | 10 |
| :--- | :--- | :--- | :--- | :--- |
| 0    | 0  | 0  | **1**  | 0    |
| 1    | 0  | 0  | **1**  | **1**  |

The adjacencies for the '1's are:
*   $m_5$ (101) and $m_7$ (111) are adjacent (B changes). Covered by $AC$.
*   $m_6$ (011) and $m_7$ (111) are adjacent (A changes). Covered by $BC$.

The problem arises because:
*   The transition $m_6 \leftrightarrow m_7$ is covered by $BC$. Also, $m_7$ is covered by $AC$. This suggests a hazard.
*   The transition $m_5 \leftrightarrow m_7$ is covered by $AC$. Also, $m_7$ is covered by $BC$. This suggests a hazard.

To eliminate these, we add a term that covers the "remaining" adjacency.
The common term $m_7$ is covered by both.
The added term needs to cover the transitions.
Consider the implication $ABC$. It covers $m_7$.

The hazard-free SOP is $F = AC + BC + ABC$.
Let's verify this is hazard-free.
When A changes (B=1, C=1):
*   $AC$: 0 to 1
*   $BC$: 1 (stable)
*   $ABC$: 0 to 1
The output is $F = AC_{out} + BC_{out} + ABC_{out}$.
Initially (A=0): $F = 0 + 1 + 0 = 1$.
Finally (A=1): $F = 1 + 1 + 1 = 1$.
The intermediate state of $AC$ going to 0 will be compensated by $BC$ being 1 and $ABC$ going to 1.

**Important Point to Remember:** The Kohavi algorithm, when applied to combinational circuits, essentially formalizes the process of examining all relevant input transitions and identifying situations where different gate delays can cause temporary incorrect output values. The key is to ensure that for any single input change, all possible paths leading to an output that should remain constant do not momentarily produce a value that violates the intended state.

---

### 5. Practice Questions and Answers

**Question 1:**
What is a static hazard? Differentiate between static-0 and static-1 hazards.

**Answer 1:**
A static hazard is an undesirable transient output that occurs when the output of a combinational circuit should remain constant during a change in input variables, but instead, it momentarily changes to the opposite value.
*   **Static-0 Hazard:** The output should remain 0 but momentarily becomes 1.
*   **Static-1 Hazard:** The output should remain 1 but momentarily becomes 0.

---

**Question 2:**
Consider the combinational circuit implementing the function $F = A \overline{B} + \overline{A}C$.
Draw the K-map for this function (assuming 3 variables A, B, C). Identify if there are any static hazards. If so, which input transition is problematic?

**Answer 2:**
The function is $F(A, B, C) = A \overline{B} + \overline{A}C$.
K-map:
Minterms for $A \overline{B}$: $m_4 (100), m_5 (101)$
Minterms for $\overline{A}C$: $m_1 (001), m_3 (011)$

| A\BC | 00 | 01 | 11 | 10 |
| :--- | :--- | :--- | :--- | :--- |
| 0    | 0  | **1**  | **1**  | 0    | ($m_1, m_3$)
| 1    | **1**  | **1**  | 0  | 0    | ($m_4, m_5$)

Prime Implicants:
*   $P_1 = A \overline{B}$ (covers $m_4, m_5$)
*   $P_2 = \overline{A}C$ (covers $m_1, m_3$)

Minimal SOP is $F = A \overline{B} + \overline{A}C$.

**Hazard Analysis:**
Look for adjacencies of 1s that are covered by only one prime implicant.
*   $m_1 (001)$ and $m_3 (011)$: Adjacent, covered by $\overline{A}C$.
*   $m_4 (100)$ and $m_5 (101)$: Adjacent, covered by $A \overline{B}$.
*   $m_3 (011)$ and $m_5 (101)$: These are not directly adjacent in the K-map. The adjacency is across the diagonal.

Let's check transitions:
*   **Transition $m_1 \leftrightarrow m_3$ (B changes from 0 to 1, A=0, C=1):**
    *   $m_1$ (001): Covered by $\overline{A}C$. $A\overline{B} = 0 \cdot 1 = 0$. $\overline{A}C = 1 \cdot 1 = 1$. $F=0+1=1$.
    *   $m_3$ (011): Covered by $\overline{A}C$. $A\overline{B} = 0 \cdot 0 = 0$. $\overline{A}C = 1 \cdot 1 = 1$. $F=0+1=1$.
    *   This transition is covered by $P_2 = \overline{A}C$. It is not covered by $P_1 = A\overline{B}$. This transition is *not* covered by a single prime implicant, so it's fine.

*   **Transition $m_4 \leftrightarrow m_5$ (C changes from 0 to 1, A=1, B=0):**
    *   $m_4$ (100): Covered by $A \overline{B}$. $A\overline{B} = 1 \cdot 1 = 1$. $\overline{A}C = 0 \cdot 0 = 0$. $F=1+0=1$.
    *   $m_5$ (101): Covered by $A \overline{B}$. $A\overline{B} = 1 \cdot 1 = 1$. $\overline{A}C = 0 \cdot 1 = 0$. $F=1+0=1$.
    *   This transition is covered by $P_1 = A \overline{B}$. It is not covered by $P_2 = \overline{A}C$. This transition is *not* covered by a single prime implicant, so it's fine.

**Wait, let's re-examine the adjacencies and implications:**
The issue is when *two* prime implicants cover the '1's, and a transition occurs that *only* one of them covers.
The problem transition is when $A$ changes from 0 to 1, and $B=1, C=0$. This is $m_2$ to $m_6$.
The problem transition is when $A$ changes from 0 to 1, and $B=0, C=1$. This is $m_1$ to $m_5$.

Let's consider the transition $m_1 (001) \leftrightarrow m_5 (101)$.
*   $m_1$ is covered by $\overline{A}C$ ($P_2$).
*   $m_5$ is covered by $A \overline{B}$ ($P_1$).

These two minterms ($m_1$ and $m_5$) are *not* adjacent in the K-map if we consider standard adjacency. However, they are both covered by different prime implicants, and the function should be 1 for both.

**The critical transition is when a single input variable changes, and the two product terms contributing to the output momentarily cancel out or become 0.**
Consider the function $F = A\overline{B} + \overline{A}C$.
Transition: A from 0 to 1, B=0, C=1 (i.e., $m_1 \to m_5$).
*   Term $A\overline{B}$: $A$ changes 0 to 1, $\overline{B}$ is 1. Term goes from $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.
*   Term $\overline{A}C$: $\overline{A}$ changes 1 to 0, $C$ is 1. Term goes from $1 \cdot 1 = 1$ to $0 \cdot 1 = 0$.
The output is $F = (A\overline{B})_{out} + (\overline{A}C)_{out}$.
Initially ($A=0$): $F = 0 + 1 = 1$.
Finally ($A=1$): $F = 1 + 0 = 1$.

**Hazard Scenario:** If the path for $\overline{A}C$ takes longer to go to 0 than the path for $A\overline{B}$ takes to go to 1, the OR gate output could momentarily become $0 \lor 0 = 0$. This is a static-0 hazard.
The problematic transition is indeed $m_1 \leftrightarrow m_5$ (where A changes, B=0, C=1).

To fix this, we need to add a redundant prime implicant.
The current SOP is $F = A \overline{B} + \overline{A}C$.
We need a term that covers the "gap" between $m_1$ and $m_5$ when A changes.
The implicant $\overline{A}B$ covers $m_1$ and $m_3$. $m_3$ is not part of the transition.
The implicant $A\overline{B}$ covers $m_4$ and $m_5$. $m_4$ is not part of the transition.
The problematic transition $m_1 \leftrightarrow m_5$ must be covered.
The adjacency in K-map is between $m_1$ and $m_3$ (covered by $\overline{A}C$), and $m_4$ and $m_5$ (covered by $A\overline{B}$).
There is no single prime implicant covering both $m_1$ and $m_5$.
The required redundant term would be $AC$, which covers $m_5$ and $m_7$. This does not cover $m_1$.

The correct redundant implicant to add is $A\overline{B}C$. This is not a prime implicant.
The rule is to add *prime implicants* that are not in the minimal set.
The adjacencies that are covered by only one prime implicant must be covered again.
Consider adjacencies:
*   $m_1, m_3$ covered by $\overline{A}C$.
*   $m_4, m_5$ covered by $A\overline{B}$.
These cover all the 1s.
The problematic transition is $m_1 \leftrightarrow m_5$.
This transition is covered by $P_2$ for $m_1$ and $P_1$ for $m_5$.
The crucial condition for a static-1 hazard is when a transition between two adjacent minterms is covered by *only one* prime implicant.

In $F = A \overline{B} + \overline{A}C$, the transition $m_1 \leftrightarrow m_5$ is *not* a standard adjacency.
The correct understanding of hazard detection is to consider all possible input transitions.

For $F = A \overline{B} + \overline{A}C$, the hazard is on the transition $m_1 \to m_5$ (A changes 0 to 1, B=0, C=1).
The redundant term needed is $AC$ is not correct. The term required is $A \overline{B} C$? No.
The correct hazard-free SOP is $F = A\overline{B} + \overline{A}C + A C$.
Let's verify this with the K-map. We are adding $AC$, which covers $m_5$ and $m_7$.
The original minterms are $m_1, m_3, m_4, m_5$.
Adding $AC$ means adding $m_5$ and $m_7$.
The function becomes $F = m_1 + m_3 + m_4 + m_5 + m_5 + m_7 = m_1 + m_3 + m_4 + m_5 + m_7$.
K-map with redundant term:
| A\BC | 00 | 01 | 11 | 10 |
| :--- | :--- | :--- | :--- | :--- |
| 0    | 0  | **1**  | **1**  | 0    | ($m_1, m_3$)
| 1    | **1**  | **1** + **1** | **1**  | 0    | ($m_4, m_5, m_7$)

Now, the adjacencies are:
*   $m_1, m_3$ covered by $\overline{A}C$.
*   $m_4, m_5$ covered by $A\overline{B}$.
*   $m_5, m_7$ covered by $AC$.
*   $m_3, m_7$ covered by $AC$? No. $m_3, m_7$ covered by C? No. $m_3, m_7$ covered by $AC$? No.
*   $m_3, m_7$ are adjacent, covered by $C$. The function $C$ covers $m_1, m_3, m_5, m_7$.

With $F = A\overline{B} + \overline{A}C + AC$:
The transition $m_1 \to m_5$ (A changes):
*   $A\overline{B}$: 0 to 1
*   $\overline{A}C$: 1 to 0
*   $AC$: 0 to 1
$F = (0 \to 1) + (1 \to 0) + (0 \to 1)$
Initially: $0 + 1 + 0 = 1$.
Finally: $1 + 0 + 1 = 1$.
The term $AC$ being added ensures that when A changes from 0 to 1 (and C=1), the AC term becomes 1, compensating for the $\overline{A}C$ term going to 0.

Therefore, a static hazard exists at the transition $m_1 \leftrightarrow m_5$ (where A changes, B=0, C=1).

---

**Question 3:**
Explain the principle behind using redundant prime implicants to eliminate static hazards.

**Answer 3:**
Static hazards in SOP implementations arise when a transition between two adjacent minterms that should result in a constant output (e.g., '1') is not adequately covered by the minimal set of prime implicants. Specifically, if a transition between minterms $m_i$ and $m_j$ is covered by a prime implicant $P_k$, but this transition is not "supported" by another prime implicant that also covers the minterms involved, a hazard can occur.

Using redundant prime implicants ensures that for any single input variable change that affects the output:
1.  If an output should remain '1' (static-1 hazard in SOP), adding redundant prime implicants ensures that even if one product term momentarily goes to '0' due to propagation delays, there is at least one other product term that remains '1' (or also becomes '1') to maintain the output at '1'. This is achieved by ensuring that all adjacencies of '1's in the K-map are covered by overlapping prime implicants.
2.  If an output should remain '0' (static-0 hazard in POS), adding redundant prime implicants to the complement function ensures that even if one maxterm momentarily evaluates to '0', there's another maxterm that remains '0' to keep the final output at '0'.

Essentially, redundant prime implicants provide multiple paths that contribute to the desired output state, making the circuit more robust against variations in propagation delays.

---

**Question 4:**
What is a dynamic hazard? Can a circuit with no static hazards also have dynamic hazards? Explain.

**Answer 4:**
A dynamic hazard occurs when the output of a combinational circuit changes multiple times for a single input transition, when it should only change once. This typically happens in circuits with more than two levels of logic, where different paths through the circuit have significantly different propagation delays.

Yes, a circuit with no static hazards can still have dynamic hazards. Static hazards deal with the output momentarily going to the wrong *stable* value. Dynamic hazards deal with the output oscillating or changing multiple times *before* settling to its final correct value.

For example, consider a circuit implemented with multiple levels of AND-OR-Invert gates. If the delays through the various AND gates and the subsequent OR gates are not carefully managed, a single input change could cause the output to flicker between '0' and '1' multiple times before stabilizing.

Eliminating dynamic hazards is more complex than eliminating static hazards and often requires careful logic minimization, adding extra delay elements, or using hazard-free circuit structures.

---

### 6. Important Points to Remember

*   **Hazards are transient faulty outputs** caused by unequal propagation delays in combinational circuits.
*   **Static hazards** occur when an output should be constant but momentarily flips.
    *   **Static-1 hazard:** Output should be 1, momentarily becomes 0.
    *   **Static-0 hazard:** Output should be 0, momentarily becomes 1.
*   **Dynamic hazards** occur when an output changes multiple times for a single input change.
*   **Root Cause:** Unequal path delays in logic gates.
*   **SOP Implementation:** Static-1 hazards are most common. They occur when a transition between two adjacent minterms is covered by only one prime implicant.
*   **POS Implementation:** Static-0 hazards are most common.
*   **Kohavi Algorithm's Principle:** Systematically analyze input transitions and logic paths to identify potential for transient errors due to delays.
*   **Elimination of Static Hazards:** Add redundant prime implicants to cover all adjacencies of '1's (for SOP) or '0's (for POS) that are not covered by a single prime implicant.
*   **Elimination of Dynamic Hazards:** More complex; may involve balancing path delays, adding logic levels, or using specific circuit structures.
*   **Hazard-free design:** Crucial for reliable operation, especially in asynchronous circuits and high-speed VLSI.

---
This detailed study note covers the fundamentals of hazards in combinational networks, the principles related to the Kohavi algorithm for hazard detection (especially its application to identifying conditions for static hazards), and techniques for hazard elimination, aligning with the learning outcomes and course outcomes for Module 3.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
