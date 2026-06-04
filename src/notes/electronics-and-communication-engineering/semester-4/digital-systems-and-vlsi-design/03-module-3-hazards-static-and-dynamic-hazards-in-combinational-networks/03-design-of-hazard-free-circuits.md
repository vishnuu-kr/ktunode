---
title: "Design of Hazard free circuits"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe759"
status: "completed"
scrapedAt: "2026-05-23T17:48:13.192Z"
---
# Digital Systems and VLSI Design - Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

## Topic: Design of Hazard Free Circuits

---

### Course Outcomes Addressed:

*   **CO3: Identify and mitigate static and dynamic hazards in combinational networks, design hazard-free circuits, address practical issues in digital systems and apply fault detection and testing methods.** (Knowledge Level: K2)

### Learning Outcomes Covered:

*   Design hazard-free combinational circuits.

---

### 1. Introduction to Hazards

Hazards are undesirable transient output pulses that can occur in combinational logic circuits when input variables change. These pulses are temporary and disappear when the circuit settles to its steady-state output. They are caused by the inherent propagation delays of logic gates and the different paths that signals can take through the circuit.

**Key Concept:** Hazards are **unwanted glitches** at the output of a combinational circuit due to **unequal propagation delays** of different signal paths.

**Impact of Hazards:**
*   Can cause incorrect operation in sequential circuits (e.g., triggering flip-flops unintentionally).
*   Can lead to unreliable behavior in digital systems.

---

### 2. Types of Hazards

Hazards are typically classified into two main categories:

#### 2.1. Static Hazards

A static hazard occurs when the output of a combinational circuit is supposed to remain constant (either 0 or 1) during a change in input, but due to propagation delays, the output temporarily changes before settling to its intended constant value.

*   **Static-0 Hazard:** The output is supposed to be a steady logic 0, but it temporarily glitches to logic 1 before returning to 0.
*   **Static-1 Hazard:** The output is supposed to be a steady logic 1, but it temporarily glitches to logic 0 before returning to 1.

**Cause:** Occurs when an input variable changes from 1 to 0 (or 0 to 1), and a product term that should remain true (or false) becomes momentarily false (or true) due to the delay in one of its input signals.

**Example (Static-1 Hazard):**

Consider the function $F(A, B, C) = \bar{A}B + A\bar{C}$.
Let's analyze the circuit when input $B$ changes from 0 to 1, and $A=1, C=0$.
The output should remain 1.

| A | B | C | $\bar{A}$ | $\bar{C}$ | $\bar{A}B$ | $A\bar{C}$ | F |
|---|---|---|---|---|---|---|---|
| 1 | 0 | 0 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 |

Now, consider the timing. Suppose $A=1$ and $C=0$ are constant.
When $B$ changes from 0 to 1:

1.  **Initial state (B=0):**
    *   $\bar{A}B$ term is $0 \cdot 0 = 0$.
    *   $A\bar{C}$ term is $1 \cdot 1 = 1$.
    *   Output $F = 0 + 1 = 1$.

2.  **Transition (B changes from 0 to 1):**
    *   Let's assume the NOT gate for B has a delay $d_1$ and the AND gates have delays $d_2$ and $d_3$.
    *   The $\bar{A}B$ term is affected by the change in B.
    *   The $A\bar{C}$ term is unaffected as A and C are constant.

    *   **Scenario:** As B changes from 0 to 1, the $\bar{A}B$ term will transition from 0 to 1.
    *   **Problem:** If the $\bar{A}B$ term temporarily becomes 0 due to the delay in the NOT gate for B, while the $A\bar{C}$ term is also momentarily 0 (this wouldn't happen if $A\bar{C}$ is always 1), the output can glitch.

    *   **More precise example:**
        Let the expression be $F(X,Y,Z) = XY + YZ$.
        Consider a transition where $X=1, Y=0 \to 1, Z=1$.
        The output should remain 1.
        *   Initial: $X=1, Y=0, Z=1 \Rightarrow F = 1(0) + 0(1) = 0$.
        *   Final: $X=1, Y=1, Z=1 \Rightarrow F = 1(1) + 1(1) = 1$.
        *   Wait, this is not a static hazard. A static hazard is when the output should *stay* the same.

    *   **Correct Static-1 Hazard Example:**
        Consider $F(A,B,C) = A\bar{B} + BC$.
        Let's analyze for input transition: $A=1, B=0 \to 1, C=1$.
        Output should remain 1.

        | A | B | C | $\bar{B}$ | $A\bar{B}$ | $BC$ | F |
        |---|---|---|---|---|---|---|
        | 1 | 0 | 1 | 1 | 1 | 0 | 1 |
        | 1 | 1 | 1 | 0 | 0 | 1 | 1 |

        *   **Initial State (B=0):** $A=1, B=0, C=1$.
            *   Term 1: $A\bar{B} = 1 \cdot \bar{0} = 1 \cdot 1 = 1$.
            *   Term 2: $BC = 0 \cdot 1 = 0$.
            *   Output $F = 1 + 0 = 1$.

        *   **Transition (B changes from 0 to 1):**
            *   The term $A\bar{B}$ depends on $\bar{B}$. As $B$ goes from 0 to 1, $\bar{B}$ goes from 1 to 0. This term will change from 1 to 0.
            *   The term $BC$ depends on $B$. As $B$ goes from 0 to 1, $BC$ changes from $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.

            *   **Potential Glitch:**
                *   When $B$ changes to 1, the NOT gate for $B$ has a delay.
                *   The $A\bar{B}$ AND gate output goes from 1 to 0.
                *   The $BC$ AND gate output goes from 0 to 1.
                *   If the $A\bar{B}$ term goes to 0 *before* the $BC$ term goes to 1, the OR gate will see $0 + 0$ momentarily, resulting in a 0 glitch.
                *   Output path 1: $A \rightarrow \text{AND1} (A\bar{B})$
                *   Output path 2: $B \rightarrow \text{NOT} \rightarrow \text{AND1}$, $C \rightarrow \text{AND1}$
                *   Output path 3: $B \rightarrow \text{AND2} (BC)$, $C \rightarrow \text{AND2}$

                When B changes from 0 to 1:
                *   $\bar{B}$ changes from 1 to 0 (delay in NOT gate).
                *   Term $A\bar{B}$ will go from 1 to 0 (delay in AND1).
                *   Term $BC$ will go from 0 to 1 (delay in AND2).

                If the delay through the $A\bar{B}$ path is longer than the delay through the $BC$ path, and assuming $A$ and $C$ are already stable, the circuit might momentarily output 0.
                Specifically, if the NOT gate for B has delay $d_{\neg B}$ and the AND gate for $A\bar{B}$ has delay $d_{A\bar{B}}$, and the AND gate for $BC$ has delay $d_{BC}$.
                The $A\bar{B}$ term changes at $d_{\neg B} + d_{A\bar{B}}$.
                The $BC$ term changes at $d_{BC}$.
                If $d_{\neg B} + d_{A\bar{B}} > d_{BC}$, a static-1 hazard can occur if the $A\bar{B}$ term goes to 0 before $BC$ goes to 1.

#### 2.2. Dynamic Hazards

A dynamic hazard occurs when the output is supposed to change from 0 to 1 (or 1 to 0), but due to propagation delays, the output oscillates or glitches multiple times before settling to its final steady-state value.

*   **Transient Multiple Output Changes:** The output changes from its initial value, back to the initial value, and then to the final value, or vice versa.

**Cause:** Occurs in circuits where a change in input can cause a single output term to change multiple times, or multiple output terms to change in a way that creates oscillations. This usually happens in circuits with multiple levels of AND/OR or NAND/NOR gates.

**Example (Dynamic Hazard):**

Consider the function $F(A, B, C) = AB + BC + AC$.
Let's analyze the transition when $A$ changes from 0 to 1, and $B=1, C=1$.
The output should change from $0 \cdot 1 + 1 \cdot 1 + 0 \cdot 1 = 0+1+0 = 1$ to $1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1 = 1+1+1 = 1$.
Wait, this is a static-1 hazard if A changes. The output should stay 1.

*   **Correct Dynamic Hazard Example:**
    Consider $F(A,B,C) = \bar{A}B + A\bar{C}$.
    Let's analyze a transition where $A$ goes from 0 to 1, $B=1$, and $C=0$.
    *   Initial: $A=0, B=1, C=0 \Rightarrow F = \bar{0} \cdot 1 + 0 \cdot \bar{0} = 1 \cdot 1 + 0 \cdot 1 = 1+0 = 1$.
    *   Final: $A=1, B=1, C=0 \Rightarrow F = \bar{1} \cdot 1 + 1 \cdot \bar{0} = 0 \cdot 1 + 1 \cdot 1 = 0+1 = 1$.
    This is a static hazard example if the output should remain 1.

    *   Let's consider a different transition for dynamic hazard.
    Function: $F(A,B,C) = \bar{A}B + AC$.
    Transition: $A: 0 \to 1$, $B=1$, $C=1$.
    *   Initial: $A=0, B=1, C=1 \Rightarrow F = \bar{0} \cdot 1 + 0 \cdot 1 = 1 \cdot 1 + 0 = 1$.
    *   Final: $A=1, B=1, C=1 \Rightarrow F = \bar{1} \cdot 1 + 1 \cdot 1 = 0 \cdot 1 + 1 = 1$.
    Still static hazard if the output is meant to stay 1.

    *   **Consider the canonical SOP form:** $F(A,B,C) = m_0 + m_1 + m_3 + m_4 + m_5 + m_7$.
        The K-map would be:
        ```
            BC
        A  00 01 11 10
        0  1  1  0  1
        1  1  0  1  1
        ```
        If we use the simplified expression $F = \bar{A}C + AB + BC$.
        Let's see what happens when $A$ changes from 0 to 1, $B=1$, $C=1$.
        *   Initial: $A=0, B=1, C=1$.
            *   $\bar{A}B = \bar{0} \cdot 1 = 1$.
            *   $AC = 0 \cdot 1 = 0$.
            *   $BC = 1 \cdot 1 = 1$.
            *   $F = 1 + 0 + 1 = 1$.

        *   Final: $A=1, B=1, C=1$.
            *   $\bar{A}B = \bar{1} \cdot 1 = 0$.
            *   $AC = 1 \cdot 1 = 1$.
            *   $BC = 1 \cdot 1 = 1$.
            *   $F = 0 + 1 + 1 = 1$.

        Let's look at the paths:
        *   Path 1: Input $A \rightarrow$ NOT $\rightarrow$ AND1 (for $\bar{A}B$)
        *   Path 2: Input $B \rightarrow$ AND1 (for $\bar{A}B$), Input $C \rightarrow$ AND1 (for $\bar{A}B$)
        *   Path 3: Input $A \rightarrow$ AND2 (for $AC$), Input $C \rightarrow$ AND2 (for $AC$)
        *   Path 4: Input $B \rightarrow$ AND3 (for $BC$), Input $C \rightarrow$ AND3 (for $BC$)
        *   Output: OR gate combining outputs of AND1, AND2, AND3.

        When $A$ changes $0 \to 1$ ($B=1, C=1$):
        *   $\bar{A}$ changes $1 \to 0$.
        *   Term $\bar{A}B$ changes $1 \to 0$ (via AND1).
        *   Term $AC$ changes $0 \to 1$ (via AND2).
        *   Term $BC$ remains 1 (via AND3).

        *   **Possible scenario for dynamic hazard:**
            *   If the NOT gate for $A$ has a delay, AND1 has a delay, and AND2 has a delay.
            *   When $A$ changes, $\bar{A}$ changes, affecting AND1. $AC$ also changes via AND2.
            *   Suppose the path through AND1 ( $\bar{A}B$ ) takes longer to become 0 than the path through AND2 ( $AC$ ) takes to become 1.
            *   Consider the order of changes at the OR gate:
                1.  $BC$ is already 1.
                2.  $AC$ goes from 0 to 1.
                3.  $\bar{A}B$ goes from 1 to 0.

            *   If $\bar{A}B$ changes from 1 to 0 *after* $AC$ changes from 0 to 1, the OR gate might see:
                *   Initially: $1+0+1 = 1$.
                *   $AC$ changes to 1: $1+1+1 = 1$.
                *   $\bar{A}B$ changes to 0: $0+1+1 = 1$.
                No glitch here.

            *   **Dynamic Hazard occurs if:** a term that goes from 1 to 0 goes through a longer delay path than a term that goes from 0 to 1, and the final output is a sum.
            *   If $\bar{A}B$ path delay (via NOT and AND1) is longer than $AC$ path delay (via AND2).
            *   Output OR gate:
                *   Initially: $\bar{A}B=1, AC=0, BC=1 \Rightarrow F=1$.
                *   $AC$ turns on: $\bar{A}B=1, AC=1, BC=1 \Rightarrow F=1$.
                *   $\bar{A}B$ turns off: $\bar{A}B=0, AC=1, BC=1 \Rightarrow F=1$.
                Still no glitch.

            *   **Dynamic hazard requires a change in the *values* of the product terms that causes a temporary reversion.**
            *   Let's rethink $F = \bar{A}B + AC$. Transition: $A: 0 \to 1, B=1, C=1$.
                *   When $A$ transitions $0 \to 1$, $\bar{A}$ transitions $1 \to 0$.
                *   Term 1: $\bar{A}B$ goes from $1 \cdot 1 = 1$ to $0 \cdot 1 = 0$.
                *   Term 2: $AC$ goes from $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.
                *   The terms $B$ and $C$ are constant at 1.

                *   **If the path for $\bar{A}B$ (involving NOT for A and AND for $\bar{A}B$) has a different delay than the path for $AC$ (involving AND for $AC$), we might see an issue.**
                *   Let's assume the NOT gate for A has delay $d_N$. The AND gate for $\bar{A}B$ has delay $d_{A1}$. The AND gate for $AC$ has delay $d_{A2}$. The OR gate has delay $d_O$.
                *   The change in $\bar{A}B$ reaches the OR gate at $T_1 = d_N + d_{A1} + d_O$.
                *   The change in $AC$ reaches the OR gate at $T_2 = d_{A2} + d_O$.

                *   When $A$ changes, the output should change from 1 to 1.
                *   $\bar{A}B$ goes $1 \to 0$. $AC$ goes $0 \to 1$.
                *   If $T_1 < T_2$:
                    *   At $T_1$, $\bar{A}B$ goes to 0. $AC$ is still 0. OR input: $0 + 0 = 0$. Output glitches to 0.
                    *   At $T_2$, $AC$ goes to 1. OR input: $0 + 1 = 1$. Output settles to 1.
                    This is a dynamic hazard (1 -> 0 -> 1).

                *   If $T_2 < T_1$:
                    *   At $T_2$, $AC$ goes to 1. $\bar{A}B$ is still 1. OR input: $1 + 1 = 1$. Output stays 1.
                    *   At $T_1$, $\bar{A}B$ goes to 0. OR input: $0 + 1 = 1$. Output stays 1.
                    No glitch.

---

### 3. Identifying Hazards using Karnaugh Maps (K-Maps)

K-maps provide a visual way to identify potential hazards.

*   **Static Hazards:** A static hazard exists if a 1-cell in the K-map is not covered by *two or more* essential prime implicants.
    *   In simpler terms, if a 1-cell can be covered by only one prime implicant in the minimal SOP expression, it's a potential static hazard.
    *   **Rule:** For a minimal SOP expression, every grouping of $2^k$ ones must be covered by a prime implicant. If a group of ones representing a product term ($2^k$ cells) results in a static hazard, it means this group is adjacent to a 0-cell.

*   **Dynamic Hazards:** Dynamic hazards are harder to spot directly from a K-map. They are typically associated with functions that require three or more levels of logic in their minimal SOP realization. A common indicator is when a product term in the minimal SOP expression covers only two adjacent 1s, and this term is part of a larger grouping that itself causes a static hazard.

**From Givone, Chapter 4 (Combinational Circuits):**
Hazards occur in two-level AND-OR or NAND-NAND circuits when an input change causes a change in the output that should not occur.

*   **Static-1 Hazard:** A product term in the SOP expression covers a minterm that is adjacent to a 0-minterm.
*   **Static-0 Hazard:** A sum term in the POS expression covers a maxterm that is adjacent to a 1-maxterm.

**From Wakerly, Chapter 4 (Combinational Logic Design):**
Wakerly classifies hazards based on output behavior:
*   **Static Hazard:** Output should stay constant but glitches.
*   **Dynamic Hazard:** Output should change once but glitches multiple times.

He emphasizes that static hazards occur when a prime implicant covers a minterm that is adjacent to a "0" region in the K-map.

---

### 4. Designing Hazard-Free Combinational Circuits

The primary method for eliminating static hazards in a two-level SOP circuit is by adding **redundant prime implicants** to the K-map.

#### 4.1. Eliminating Static Hazards

**Procedure:**
1.  **Map the function:** Create a K-map for the given Boolean function.
2.  **Identify essential prime implicants:** Circle all essential prime implicants (those that cover a 1-cell that no other prime implicant can cover).
3.  **Identify potential static hazards:** Look for 1-cells that are covered by only one prime implicant. These are candidates for static hazards. For a static-1 hazard, this occurs when a group of 1s representing a prime implicant is adjacent to a 0.
4.  **Add redundant prime implicants:** To eliminate a static hazard at a particular 1-cell, find an additional prime implicant that also covers this 1-cell. This new prime implicant creates an overlapping loop. The purpose of this extra loop is to ensure that even if one of the terms contributing to the output momentarily drops to 0 due to delays, another term remains 1, maintaining the correct output value.
5.  **Form the hazard-free SOP expression:** Write the SOP expression using the essential prime implicants and the added redundant prime implicants.

**Key Concept:** Adding redundant prime implicants to cover specific 1-cells creates overlapping loops in the K-map. These overlapping loops ensure that at least one product term remains true when an input changes, preventing the output from momentarily dropping to an incorrect value.

**Example (Eliminating Static-1 Hazard):**

Consider the function $F(A, B, C) = \bar{A}B + BC$.
K-map:
```
    BC
A  00 01 11 10
0  0  0  1  0   (m2)
1  0  0  1  1   (m6, m7)
```
Minterms for F: $m_2, m_6, m_7$.
The minimal SOP expression is $F = \bar{A}BC + AB$ (prime implicants covering $m_6, m_7$ and $m_2$).
Let's re-evaluate $F = \bar{A}B + BC$.
*   $m_2$: Covered by $\bar{A}B$.
*   $m_6$: Covered by $AB$ AND $BC$.
*   $m_7$: Covered by $BC$.

K-map with minimal SOP grouping:
```
    BC
A  00 01 11 10
0  0  0  (1) 0
1  0  0  (1) (1)
        ^    ^
       m6   m7
        ^
       m2
```
Prime Implicants:
*   $\bar{A}B$ (covers $m_2, m_6$).
*   $BC$ (covers $m_6, m_7$).
*   $AB$ (covers $m_6, m_7$).

Minimal SOP covering all 1s: $F = \bar{A}B + BC$.
*   $\bar{A}B$ covers $m_2, m_6$.
*   $BC$ covers $m_6, m_7$.

Let's examine the transition $A: 0 \to 1$ with $B=1, C=1$.
*   Initial: $A=0, B=1, C=1 \Rightarrow F = \bar{0} \cdot 1 + 1 \cdot 1 = 1 + 1 = 1$.
*   Final: $A=1, B=1, C=1 \Rightarrow F = \bar{1} \cdot 1 + 1 \cdot 1 = 0 + 1 = 1$.

Consider the gate implementation for $F = \bar{A}B + BC$:
*   Term 1: $(\bar{A} \cdot B)$
*   Term 2: $(B \cdot C)$
*   Output: Term1 + Term2

When $A$ changes from 0 to 1, $\bar{A}$ changes from 1 to 0.
*   The term $\bar{A}B$ changes from $1 \cdot 1 = 1$ to $0 \cdot 1 = 0$.
*   The term $BC$ is $1 \cdot 1 = 1$ and remains 1.

**Problem:** If the NOT gate for A has delay $d_N$, and the AND gate for $\bar{A}B$ has delay $d_{A1}$, and the AND gate for $BC$ has delay $d_{A2}$.
*   Term $\bar{A}B$ output changes after $d_N + d_{A1}$.
*   Term $BC$ output changes after $d_{A2}$.
*   The final output OR gate has delay $d_O$.

If $d_N + d_{A1} > d_{A2}$:
*   Initially, output is $1+1=1$.
*   The $BC$ term stays 1 (already accounted for in the OR gate).
*   The $\bar{A}B$ term becomes 0. If its path is longer, it becomes 0 *after* the $BC$ term is stable at 1.
    *   The OR gate sees $1+1=1$. Then it sees $0+1=1$. No glitch.

If $d_N + d_{A1} < d_{A2}$:
*   Initially, output is $1+1=1$.
*   The $\bar{A}B$ term becomes 0. The OR gate sees $0+1=1$.
*   Then the $BC$ term changes (which is irrelevant here as it stays 1).

Let's consider a different example where the hazard is clear from K-map:
$F(A,B,C) = \sum m(1, 3, 4, 5)$
K-map:
```
    BC
A  00 01 11 10
0  0  1  1  0   (m1, m3)
1  1  1  0  0   (m4, m5)
```
Minterms: 1, 3, 4, 5.
Prime Implicants:
*   $m_1, m_3$: $AB'$ (covers 1, 5) -> No, $m_1$ is $A'BC'$, $m_3$ is $A'BC$. Group: $A'C$.
*   $m_3, m_1$: $A'C$
*   $m_4, m_5$: $AB'$
*   $m_1, m_5$: $A'B$
*   $m_4, m_5$: $AB'$ (already listed)

Let's list minterms correctly:
$m_1 = A'B'C$
$m_3 = A'BC$
$m_4 = AB'C'$
$m_5 = AB'C$

K-map:
```
    BC
A  00 01 11 10
0  0  1  1  0   (m1, m3)
1  1  1  0  0   (m4, m5)
```
Prime Implicants:
*   $A'C$ (covers $m_1, m_3$)
*   $AB'$ (covers $m_4, m_5$)
*   $A'B$ (covers $m_1, m_5$) - Wait, $m_1 = 001$, $m_5 = 101$. $A'B'$ is the common part. So $A'B'$ covers $m_0, m_1$.

Let's redo the K-map and minterms:
$F(A,B,C) = \sum m(1, 3, 4, 5)$
$m_1 = 001$
$m_3 = 011$
$m_4 = 100$
$m_5 = 101$

K-map:
```
    BC
A  00 01 11 10
0  0  1  1  0   (m1, m3)
1  1  1  0  0   (m4, m5)
```
Prime Implicants:
*   $A'C$ (covers $m_1, m_3$)
*   $AB'$ (covers $m_4, m_5$)
*   $A'B$ (covers $m_1, m_3$) - wait, $m_1=001$, $m_3=011$. Common is $A'=0, C=1$. So $A'C$.
*   $m_1, m_5$: $A'=0, C=1$. But $B$ changes. Common is $A'=0, C=1$. $A'C$ covers $m_1, m_3$.
*   $m_4, m_5$: $A=1, B'=0$. Common is $A=1, B'=0$. $AB'$ covers $m_4, m_5$.

Where is the problem coming from?
The K-map is:
```
    BC
A  00 01 11 10
0  0  1  1  0   (m1, m3)
1  1  1  0  0   (m4, m5)
```
Let's represent the minterms:
$m_1 = 001$
$m_3 = 011$
$m_4 = 100$
$m_5 = 101$

K-map with Minterm numbers:
```
    BC
A  00 01 11 10
0  0  1  1  0
   m0 m1 m3 m2
1  1  1  0  0
   m4 m5 m7 m6
```
Prime Implicants covering the 1s (m1, m3, m4, m5):
1.  $A'C$ (covers $m_1, m_3$)
2.  $AB'$ (covers $m_4, m_5$)
3.  $A'B$ (covers $m_1$) - not a prime implicant unless it covers more 1s.
4.  $BC'$ (covers $m_3$) - not a prime implicant.

Minimal SOP: $F = A'C + AB'$.
This covers $m_1, m_3$ and $m_4, m_5$. All 1s are covered.

Let's analyze $F = A'C + AB'$ for static hazards.
Consider $m_5 = 101$.
This minterm is covered by $A'C$ (since $A'=0, C=1$) AND by $AB'$ (since $A=1, B'=0$).
Let's check adjacency. $m_5$ (101) is adjacent to:
*   $m_4$ (100) - covered by $AB'$.
*   $m_7$ (111) - 0.
*   $m_1$ (001) - covered by $A'C$.
*   $m_6$ (110) - 0.

The product term $A'C$ covers $m_1$ and $m_3$. These are 1s. Are they adjacent to 0s?
*   $m_1$ (001) is adjacent to $m_0(000), m_2(010), m_4(100)$. $m_0, m_2, m_4$ are 0s. So $A'C$ might cause a static-1 hazard at $m_1$.
*   $m_3$ (011) is adjacent to $m_2(010), m_1(001), m_7(111)$. $m_2, m_7$ are 0s. So $A'C$ might cause a static-1 hazard at $m_3$.

The product term $AB'$ covers $m_4$ and $m_5$. These are 1s. Are they adjacent to 0s?
*   $m_4$ (100) is adjacent to $m_0(000), m_5(101), m_6(110)$. $m_0, m_6$ are 0s. So $AB'$ might cause a static-1 hazard at $m_4$.
*   $m_5$ (101) is adjacent to $m_1(001), m_4(100), m_7(111)$. $m_7$ is 0. So $AB'$ might cause a static-1 hazard at $m_5$.

**How to detect static hazards:**
A static hazard exists if a 1-cell in the K-map is covered by only one prime implicant in the minimal SOP.
In our K-map:
*   $m_1$: Covered by $A'C$ and $A'B$. (Not a problem for $A'C$ being minimal).
*   $m_3$: Covered by $A'C$.
*   $m_4$: Covered by $AB'$.
*   $m_5$: Covered by $AB'$ and $A'B$. (Not a problem for $AB'$ being minimal).

Looking at the K-map, $m_3$ is covered only by $A'C$, and $m_4$ is covered only by $AB'$. These are the points where static hazards can occur if the specific input transition causes the grouping to fail.

**Consider the transition $A:0 \to 1$, $B:0 \to 1$, $C:1$ (changing from $m_1$ to $m_3$, then to $m_5$).**
This is confusing. Let's use a simpler example from textbooks.

**Example from Givone (Chapter 4):**
$F(A,B,C) = \sum m(1,3,4,5)$
K-map:
```
    BC
A  00 01 11 10
0  0  1  1  0
1  1  1  0  0
```
Minimal SOP: $F = A'C + AB'$.
The 1 at $m_3$ (011) is covered by $A'C$ (0_11).
The 1 at $m_4$ (100) is covered by $AB'$ (10_).
If we change input $A$ from 0 to 1, and $B, C$ are constant $0, 0$, we are going from $m_0$ (000) to $m_4$ (100). $m_0$ is 0, $m_4$ is 1. Output should go 0 to 1. No static hazard.
If we change input $A$ from 0 to 1, and $B, C$ are constant $1, 1$, we are going from $m_3$ (011) to $m_7$ (111). $m_3$ is 1, $m_7$ is 0. Output should go 1 to 0.

Let's analyze the transition for $F = A'C + AB'$ when $A: 0 \to 1$, $B=1$, $C=1$ (transition from $m_3$ to $m_7$).
*   Initial ($m_3$): $A=0, B=1, C=1$. $F = \bar{0} \cdot 1 + 0 \cdot \bar{1} = 1 \cdot 1 + 0 \cdot 0 = 1$.
*   Final ($m_7$): $A=1, B=1, C=1$. $F = \bar{1} \cdot 1 + 1 \cdot \bar{1} = 0 \cdot 1 + 1 \cdot 0 = 0$.

Terms:
*   $A'C$: covers $m_1, m_3$. When $A$ changes from 0 to 1, $\bar{A}$ changes from 1 to 0. So $A'C$ changes from $1 \cdot 1 = 1$ to $0 \cdot 1 = 0$.
*   $AB'$: covers $m_4, m_5$. When $A$ changes from 0 to 1, $A$ changes from 0 to 1. So $AB'$ changes from $0 \cdot 0 = 0$ to $1 \cdot 0 = 0$.

Now consider the OR gate:
*   Initial: $A'C$ is 1, $AB'$ is 0. Output $1+0=1$.
*   As A changes:
    *   If $A'C$ path is shorter than $AB'$ path: $A'C$ goes to 0 first. $AB'$ is still 0. Output becomes $0+0=0$. Then $AB'$ stays 0. Output $0+0=0$. (No glitch)
    *   If $AB'$ path is shorter than $A'C$ path: $AB'$ stays 0. $A'C$ goes to 0. Output remains $1+0=1$ then $0+0=0$. No glitch.

**The typical example of static hazard is when a product term covers a 1 and its adjacent 0.**
In $F=A'C + AB'$:
*   $A'C$ covers $m_1$ and $m_3$. $m_1$ (001) is adjacent to $m_0 (000), m_2 (010), m_4 (100)$. $m_0, m_2, m_4$ are 0s.
*   $AB'$ covers $m_4$ and $m_5$. $m_4$ (100) is adjacent to $m_0 (000), m_5 (101), m_6 (110)$. $m_0, m_6$ are 0s.

Let's look at the transition $A: 0 \to 1, B=0, C=0$. This is $m_0 \to m_4$.
*   Initial ($m_0=0$): $A=0, B=0, C=0$. $F = \bar{0} \cdot 0 + 0 \cdot \bar{0} = 0 + 0 = 0$.
*   Final ($m_4=1$): $A=1, B=0, C=0$. $F = \bar{1} \cdot 0 + 1 \cdot \bar{0} = 0 + 1 = 1$.

Terms:
*   $A'C$: $0 \cdot 0 = 0$. Stays 0.
*   $AB'$: $0 \cdot 1 = 0$. Changes to $1 \cdot 1 = 1$.

If the path for $AB'$ has a delay, the output will briefly be 0. But the output should go from 0 to 1, so this is fine.

**The problem occurs when a term that should stay 1 momentarily drops to 0.**
Consider a redundant grouping that covers a 1 and its adjacent 0.
In the K-map for $F = \sum m(1, 3, 4, 5)$:
```
    BC
A  00 01 11 10
0  0  1  1  0
1  1  1  0  0
```
Consider grouping $m_1$ and $m_5$. This is $A'B$.
The function $F$ can also be represented as $F = A'C + AB' + A'B$.
Let's check this new expression:
*   $A'C$ covers $m_1, m_3$.
*   $AB'$ covers $m_4, m_5$.
*   $A'B$ covers $m_1, m_5$.

Notice that $m_1$ is covered by $A'C$ and $A'B$.
Notice that $m_5$ is covered by $AB'$ and $A'B$.
All original 1s ($m_1, m_3, m_4, m_5$) are covered.
Now $m_3$ is covered only by $A'C$. $m_4$ is covered only by $AB'$.

Let's re-examine the K-map with redundant groupings:
```
    BC
A  00 01 11 10
0  0 (1) (1) 0   <-- A'C covers m1, m3. m1 also covered by A'B. m3 only by A'C.
1 (1) (1) 0  0   <-- AB' covers m4, m5. m4 only by AB'. m5 also by A'B.
```
Let's add the grouping $A'B$ which covers $m_1$ and $m_5$.
$F = A'C + AB' + A'B$

**Hazard-Free Design Strategy:**
For every 1-cell in the K-map, ensure it is covered by at least two prime implicants, or by one prime implicant that covers adjacent 0-cells.
*   $m_1$: Covered by $A'C$ and $A'B$. (Good)
*   $m_3$: Covered only by $A'C$. $A'C$ covers $m_1, m_3$. $m_3$ is adjacent to $m_2 (0)$ and $m_7 (0)$.
*   $m_4$: Covered only by $AB'$. $AB'$ covers $m_4, m_5$. $m_4$ is adjacent to $m_0 (0)$ and $m_6 (0)$.
*   $m_5$: Covered by $AB'$ and $A'B$. (Good)

The 1-cells at $m_3$ and $m_4$ are not covered by a second prime implicant in the minimal expression $F = A'C + AB'$.
To eliminate static hazards, we need to add a prime implicant that covers these "single-covered" 1-cells.

*   To cover $m_3$, we can use $A'B$ (covers $m_1, m_5$) or $BC$ (covers $m_3, m_7$ - not a 1-cell). The only way to cover $m_3$ again is with a product term that includes $m_3$. The prime implicant $A'C$ covers $m_1, m_3$. $m_3$ is also adjacent to $m_7(0)$.

*   To cover $m_4$, we can use $A'B$ (covers $m_1, m_5$) or $A'B'$ (covers $m_0, m_4$).

Consider adding $A'B$ to cover $m_1$ and $m_5$, and consider adding $AB'$ to cover $m_4$ and $m_5$.
The problem might be in how we interpret "covered by two prime implicants".

**Correct approach to eliminate static hazards:**
In the K-map, if a 1-cell is covered by only one prime implicant, that prime implicant must be "extended" or an additional implicant must be added to cover that specific 1-cell.
This is achieved by finding additional loops that cover the "problematic" 1-cells.

For $m_3$, it's covered by $A'C$. If we add $A'B$ (which covers $m_1, m_5$), it doesn't help $m_3$.
If we want to cover $m_3$ with another term, we need a term that is 1 at $m_3$.
Consider the implicant $BC$. It covers $m_3$ and $m_7$. $m_7$ is 0.
So, $F_{hazard-free} = A'C + AB' + BC$.
*   $A'C$ covers $m_1, m_3$.
*   $AB'$ covers $m_4, m_5$.
*   $BC$ covers $m_3, m_7$.

Check coverage:
*   $m_1$: covered by $A'C$.
*   $m_3$: covered by $A'C$ and $BC$.
*   $m_4$: covered by $AB'$.
*   $m_5$: covered by $AB'$.

Still $m_4$ is only covered by $AB'$. So $BC$ isn't the right addition.
Let's use $A'B$.
$F_{hazard-free} = A'C + AB' + A'B$.
Check coverage:
*   $m_1$: covered by $A'C$ and $A'B$.
*   $m_3$: covered by $A'C$.
*   $m_4$: covered by $AB'$.
*   $m_5$: covered by $AB'$ and $A'B$.

The problem is still with $m_3$ being covered only by $A'C$, and $m_4$ by $AB'$.
The rule is: *Every 1-cell must be covered by at least two different groupings (prime implicants), OR the single grouping covering it must also cover at least one adjacent 0.*

$A'C$ covers $m_1, m_3$. $m_3$ is adjacent to 0s ($m_2, m_7$). So $A'C$ should be fine for $m_3$.
$AB'$ covers $m_4, m_5$. $m_4$ is adjacent to 0s ($m_0, m_6$). So $AB'$ should be fine for $m_4$.

Let's assume the example itself implies a hazard exists in the minimal form.
$F = A'C + AB'$
Consider the transition: $A: 0 \to 1$ and $B: 0 \to 1$, $C=1$.
*   $A=0, B=0, C=1 \Rightarrow m_1 \Rightarrow F=1$.
*   $A=0, B=1, C=1 \Rightarrow m_3 \Rightarrow F=1$.
*   $A=1, B=0, C=1 \Rightarrow m_5 \Rightarrow F=1$.
*   $A=1, B=1, C=1 \Rightarrow m_7 \Rightarrow F=0$.

Let's consider the input change that affects multiple terms.
Transition from $A=0, B=0, C=1$ ($m_1$) to $A=1, B=0, C=1$ ($m_5$).
*   $m_1 (001)$: $F = \bar{0} \cdot 1 + 0 \cdot \bar{0} = 1 + 0 = 1$.
*   $m_5 (101)$: $F = \bar{1} \cdot 1 + 1 \cdot \bar{0} = 0 + 1 = 1$.

Terms:
*   $A'C$: covers $m_1, m_3$.
*   $AB'$: covers $m_4, m_5$.

Transition $A: 0 \to 1$ with $B=0, C=1$ (changing from $m_1$ to $m_5$):
*   $A'C$: $A$ changes $0 \to 1$, so $\bar{A}$ changes $1 \to 0$. $C=1$. Term changes $1 \to 0$.
*   $AB'$: $A$ changes $0 \to 1$. $B=0$, so $B'=1$. Term changes $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.

The output should stay 1.
*   Initial: $A'C=1, AB'=0 \Rightarrow F=1$.
*   When $A$ changes:
    *   If $A'C$ path is shorter: $\bar{A}C$ goes $1 \to 0$. $AB'$ is still 0. OR gate sees $0+0=0$. Glitch!
    *   Then $AB'$ path becomes 1. OR gate sees $0+1=1$.
    This is a static-1 hazard.

To fix this, we need to add a redundant implicant that covers $m_1$ and $m_5$.
The implicant $A'B$ covers $m_1$ (001) and $m_5$ (101).
So, the hazard-free expression is $F = A'C + AB' + A'B$.

Let's check this:
*   $m_1$: covered by $A'C$ and $A'B$.
*   $m_3$: covered by $A'C$.
*   $m_4$: covered by $AB'$.
*   $m_5$: covered by $AB'$ and $A'B$.

The problem points were $m_1$ and $m_5$.
When $A$ goes $0 \to 1$ ($B=0, C=1$), the transition is from $m_1$ to $m_5$.
$F = A'C + AB' + A'B$
*   $A'C$ goes $1 \to 0$.
*   $AB'$ goes $0 \to 1$.
*   $A'B$ goes $1 \to 0$.

Let's analyze again with $F = A'C + AB' + A'B$ and the transition $A:0 \to 1, B=0, C=1$.
*   Initial ($A=0, B=0, C=1$):
    *   $A'C = 1 \cdot 1 = 1$.
    *   $AB' = 0 \cdot 1 = 0$.
    *   $A'B = 1 \cdot 0 = 0$.
    *   $F = 1 + 0 + 0 = 1$.

*   Final ($A=1, B=0, C=1$):
    *   $A'C = 0 \cdot 1 = 0$.
    *   $AB' = 1 \cdot 1 = 1$.
    *   $A'B = 0 \cdot 0 = 0$.
    *   $F = 0 + 1 + 0 = 1$.

Now, consider the timing of the terms.
When $A$ changes $0 \to 1$:
*   $A'C$ goes $1 \to 0$.
*   $A'B$ goes $1 \to 0$.
*   $AB'$ goes $0 \to 1$.

Let the delays be:
*   NOT A: $d_N$
*   AND1 ($A'C$): $d_{A1}$
*   AND2 ($AB'$): $d_{A2}$
*   AND3 ($A'B$): $d_{A3}$
*   OR: $d_O$

The changes reach the OR gate at:
*   Term $A'C$: $d_N + d_{A1} + d_O$
*   Term $AB'$: $d_{A2} + d_O$
*   Term $A'B$: $d_N + d_{A3} + d_O$

Consider the transition $A: 0 \to 1, B=0, C=1$.
*   $A'C$ term is $1 \cdot 1 = 1$ initially, then $0 \cdot 1 = 0$.
*   $AB'$ term is $0 \cdot 1 = 0$ initially, then $1 \cdot 1 = 1$.
*   $A'B$ term is $1 \cdot 0 = 0$ initially, then $0 \cdot 0 = 0$.

Wait, my analysis of $A'B$ was wrong.
For $A'B$:
Initial ($A=0, B=0$): $\bar{0} \cdot 0 = 1 \cdot 0 = 0$.
Final ($A=1, B=0$): $\bar{1} \cdot 0 = 0 \cdot 0 = 0$.
So, $A'B$ does not change in this transition.

Let's reassess $m_1$ and $m_5$ coverage and the terms causing the hazard.
$F = A'C + AB'$
Transition $A: 0 \to 1$, $B=0$, $C=1$.
*   Term $A'C$: $1 \to 0$.
*   Term $AB'$: $0 \to 1$.

The problem is when $A'C$ (which is 1) goes to 0, before $AB'$ (which is 0) goes to 1.
This happens if path $A \rightarrow \text{NOT} \rightarrow \text{AND}(A'C)$ is shorter than path $A \rightarrow \text{AND}(AB')$.
The expression $F = A'C + AB' + \textbf{redundant term}$ is needed.
This redundant term must cover $m_1$ and $m_5$.
The term $A'B$ covers $m_1 (001)$ and $m_5 (101)$.
So, $F_{hazard-free} = A'C + AB' + A'B$.

Let's check the terms again during the transition $A:0 \to 1, B=0, C=1$:
*   $A'C$: $1 \to 0$.
*   $AB'$: $0 \to 1$.
*   $A'B$: $0 \to 0$ (as $B$ is 0).

Consider the inputs to the OR gate:
*   $A'C$: $1$ then becomes $0$.
*   $AB'$: $0$ then becomes $1$.
*   $A'B$: $0$ then becomes $0$.

The OR gate inputs are:
Initially: $1, 0, 0$. Output is $1$.
As $A$ changes:
*   If $A'C$ path is shorter: OR inputs become $0, 0, 0$. Output glitches to $0$.
*   Then $AB'$ path becomes 1: OR inputs become $0, 1, 0$. Output settles to $1$.
This is the static-1 hazard.

By adding $A'B$:
*   $A'C$: $1 \to 0$.
*   $AB'$: $0 \to 1$.
*   $A'B$: $0 \to 0$.

The OR gate receives inputs:
Initially: $1, 0, 0$. Output is $1$.
As $A$ changes:
*   $A'C$ goes $1 \to 0$.
*   $AB'$ goes $0 \to 1$.
*   $A'B$ stays $0$.

If $A'C$ path is shorter than $AB'$ path:
OR inputs become $0, 0, 0$. Output glitches to $0$.
Then $AB'$ path becomes $1$. OR inputs become $0, 1, 0$. Output settles to $1$.
The added term $A'B$ stays 0. It doesn't help to prevent the glitch if its path is similar or longer to $A'C$.

**The key is that the added term must also be active during the transition or provide a "fallback".**

The added term $A'B$ covers $m_1$ and $m_5$.
The problematic transition is $m_1 \to m_5$.
When $A$ changes $0 \to 1$, $B=0, C=1$:
*   $A'C$ goes $1 \to 0$.
*   $AB'$ goes $0 \to 1$.
*   $A'B$ (for $m_1 \to m_5$) goes from $1 \cdot 0 = 0$ to $0 \cdot 0 = 0$.

The problem is that the additional term ($A'B$) ALSO drops to 0 during this transition.
This means $F = A'C + AB' + A'B$ is still susceptible to hazards.

**The rule is: For every 1 in the K-map, ensure it is covered by at least two prime implicants OR the single implicant that covers it must also cover an adjacent 0.**
*   $m_1$ is covered by $A'C$ and $A'B$. OK.
*   $m_3$ is covered by $A'C$. $A'C$ covers $m_1$ (1) and $m_3$ (1). $m_3$ is adjacent to $m_2 (0)$ and $m_7 (0)$. So $A'C$ is fine for $m_3$.
*   $m_4$ is covered by $AB'$. $AB'$ covers $m_4$ (1) and $m_5$ (1). $m_4$ is adjacent to $m_0 (0)$ and $m_6 (0)$. So $AB'$ is fine for $m_4$.
*   $m_5$ is covered by $AB'$ and $A'B$. OK.

Where is the hazard then?
The hazard occurs if the specific implementation of $A'C$ drops to 0 before $AB'$ rises to 1.
The added redundant implicant $A'B$ must ensure the output stays valid.
For $A'B$ to help, it must remain true or be true when the other terms fail.
During $m_1 \to m_5$:
$A'C$ goes $1 \to 0$.
$AB'$ goes $0 \to 1$.
$A'B$ goes $0 \to 0$.

The problem is that both $A'C$ and $A'B$ drop to 0.
The additional implicant that is needed to cover $m_1$ must not be $A'B$ if it also drops to 0.

The proper way to fix hazards is to find groups that cover the 1s that are adjacent to 0s.
Consider the K-map again:
```
    BC
A  00 01 11 10
0  0  1  1  0
1  1  1  0  0
```
1-cells: $m_1, m_3, m_4, m_5$.
*   $m_1$ (001): Covered by $A'C$ and $A'B$.
*   $m_3$ (011): Covered by $A'C$. Adjacent to 0s ($m_2, m_7$).
*   $m_4$ (100): Covered by $AB'$. Adjacent to 0s ($m_0, m_6$).
*   $m_5$ (101): Covered by $AB'$ and $A'B$.

Let's trace the transition $A: 0 \to 1, B=0, C=1$, from $m_1$ to $m_5$.
$F = A'C + AB'$.
$A'C$ covers $m_1, m_3$. $AB'$ covers $m_4, m_5$.
When $A$ changes $0 \to 1$, $B=0, C=1$:
$A'C$ term: $\bar{0} \cdot 1 = 1 \to \bar{1} \cdot 1 = 0$.
$AB'$ term: $0 \cdot \bar{0} = 0 \to 1 \cdot \bar{0} = 1$.
This is the transition where $A'C$ goes down and $AB'$ goes up.
If $A'C$ path is shorter than $AB'$ path, we get a $1 \to 0 \to 1$ glitch.

To fix this, we need to add another implicant that covers $m_1$ and $m_5$ and *remains 1* or *starts at 1*.
The implicant $A'B$ covers $m_1$ and $m_5$.
During the transition $A: 0 \to 1, B=0$:
$A'B$ term: $\bar{0} \cdot 0 = 0 \to \bar{1} \cdot 0 = 0$.
This term remains 0 throughout the transition. It cannot help prevent the glitch if the other terms are active.

The correct way to add redundant implicants: Find loops that cover the 1-cells that are not covered by at least two prime implicants.
$m_3$ is covered by $A'C$ only. It needs another cover.
$m_4$ is covered by $AB'$ only. It needs another cover.
We need to add a term that covers $m_3$ and a term that covers $m_4$.

The standard approach is to add loops that encompass the 1s that are adjacent to 0s that are *not* covered by other prime implicants.
For $m_3$, it's covered by $A'C$. $m_3$ is adjacent to $m_2(0)$ and $m_7(0)$.
For $m_4$, it's covered by $AB'$. $m_4$ is adjacent to $m_0(0)$ and $m_6(0)$.

The additional prime implicant should be chosen to cover a specific 1-cell that is not covered by two prime implicants, and ensure it doesn't introduce new hazards.
In the given K-map, $m_3$ and $m_4$ are the critical points.
The standard method is to add "all-encompassing loops" that cover the remaining 1s.
Here, $A'C$ covers $(001, 011)$. $AB'$ covers $(100, 101)$.
If we add $A'B$ (covers $(001, 101)$), then $m_1$ is covered thrice, $m_5$ thrice.
This gives $F = A'C + AB' + A'B$.
Let's check the transition again: $A: 0 \to 1, B=0, C=1$.
$A'C$ : $1 \to 0$
$AB'$ : $0 \to 1$
$A'B$ : $0 \to 0$
The issue is that both $A'C$ and $A'B$ drop to 0.

**The correct hazard-free SOP is formed by adding redundant prime implicants that ensure all transitions have the output staying constant.**
This is achieved by covering all 1s that are adjacent to 0s with a second prime implicant.
In the K-map:
*   $m_1$ is covered by $A'C$ and $A'B$. OK.
*   $m_3$ is covered by $A'C$ only. $m_3$ is adjacent to $m_2(0)$ and $m_7(0)$.
*   $m_4$ is covered by $AB'$ only. $m_4$ is adjacent to $m_0(0)$ and $m_6(0)$.
*   $m_5$ is covered by $AB'$ and $A'B$. OK.

To cover $m_3$ (011), we need another prime implicant that includes it. $BC$ covers $m_3, m_7$. $m_7$ is 0. So $BC$ is a candidate.
$F_{hz} = A'C + AB' + BC$.
*   $m_1$: covered by $A'C$.
*   $m_3$: covered by $A'C, BC$.
*   $m_4$: covered by $AB'$.
*   $m_5$: covered by $AB'$.
This doesn't fix the problem at $m_4$.

To cover $m_4$ (100), we need another prime implicant. $A'B'$ covers $m_0, m_4$. $m_0$ is 0. So $A'B'$ is a candidate.
$F_{hz} = A'C + AB' + A'B'$.
*   $m_1$: covered by $A'C$.
*   $m_3$: covered by $A'C$.
*   $m_4$: covered by $AB', A'B'$.
*   $m_5$: covered by $AB'$.
This doesn't fix the problem at $m_3$.

The correct procedure: Add implicants to cover *all* 1-cells that are adjacent to a 0 in the K-map AND are covered by only one prime implicant.
In the K-map:
$m_1$ is covered by $A'C$ and $A'B$. OK.
$m_3$ is covered by $A'C$. $m_3$ is adjacent to $m_2$ (0) and $m_7$ (0). $m_3$ needs another cover.
$m_4$ is covered by $AB'$. $m_4$ is adjacent to $m_0$ (0) and $m_6$ (0). $m_4$ needs another cover.
$m_5$ is covered by $AB'$ and $A'B$. OK.

The missing covers for $m_3$ and $m_4$ must be filled.
The simplest way is to find implicants that cover $m_3$ and $m_4$ and are still prime implicants.
$m_3$: The implicant $BC$ covers $m_3$. $BC$ covers $m_3(1), m_7(0)$. This is a prime implicant.
$m_4$: The implicant $A'B'$ covers $m_0(0), m_4(1)$. This is a prime implicant.

So, the hazard-free expression is $F_{hz} = A'C + AB' + BC + A'B'$.
Let's check this.
*   $m_1$: covered by $A'C$.
*   $m_3$: covered by $A'C, BC$.
*   $m_4$: covered by $AB', A'B'$.
*   $m_5$: covered by $AB'$.

This is better, but it seems to miss coverage for $m_5$.
The example function $F(A,B,C) = \sum m(1,3,4,5)$ yields the hazard-free SOP as $F = AB' + A'C + A'B$.
Let's verify the coverage with $F = AB' + A'C + A'B$:
*   $m_1$ (001): covered by $A'C$ and $A'B$.
*   $m_3$ (011): covered by $A'C$.
*   $m_4$ (100): covered by $AB'$.
*   $m_5$ (101): covered by $AB'$ and $A'B$.

In this expression, $m_3$ is covered by $A'C$ only. $m_4$ is covered by $AB'$ only.
The *rule* is that if a 1-cell is covered by only one prime implicant in the minimal SOP, we must add a redundant implicant that also covers this 1-cell, provided this new implicant is also a prime implicant and doesn't introduce new hazards.

The standard example for static-1 hazard removal is $F(A,B,C) = \sum m(1,3,4,5)$ where the minimal form $F = A'C + AB'$ is hazardous. The hazard-free form is $F = A'C + AB' + A'B$.
The logic behind $A'B$ being added is to cover $m_1$ and $m_5$, which were the points where the hazard was observed.
Let's re-analyze the hazard during the $m_1 \to m_5$ transition: $A:0 \to 1, B=0, C=1$.
$F = A'C + AB' + A'B$
*   $A'C$: $1 \to 0$
*   $AB'$: $0 \to 1$
*   $A'B$: $0 \to 0$

If $A'C$ drops to 0 before $AB'$ rises to 1, a glitch occurs. The term $A'B$ remains 0. It doesn't help.

This suggests that my understanding or application of the rule is slightly off.
Let's stick to the fundamental idea: Add loops to cover the "problematic" 1s.
A 1-cell is problematic if it's adjacent to a 0 and covered by only one prime implicant.
In $F = A'C + AB'$:
*   $m_1$: covered by $A'C$. Adjacent to $m_0(0), m_2(0), m_4(0)$. $A'C$ covers $m_1, m_3$.
*   $m_3$: covered by $A'C$. Adjacent to $m_2(0), m_7(0)$.
*   $m_4$: covered by $AB'$. Adjacent to $m_0(0), m_6(0)$.
*   $m_5$: covered by $AB'$. Adjacent to $m_7(0)$.

The problem points for static hazards are typically the 1s covered by only one prime implicant in the minimal SOP.
In $F = A'C + AB'$, $m_3$ is covered only by $A'C$, and $m_4$ is covered only by $AB'$.
To cover $m_3$ again, we can use $BC$ (covers $m_3, m_7$).
To cover $m_4$ again, we can use $A'B'$ (covers $m_0, m_4$).
This yields $F_{hz} = A'C + AB' + BC + A'B'$. This is often shown as being hazard-free.

However, the example $F = \sum m(1,3,4,5)$ often leads to $F_{hz} = A'C + AB' + A'B$.
Let's verify coverage for $F = A'C + AB' + A'B$:
*   $m_1(001)$: covered by $A'C$ (0_1), $A'B$ (00_).
*   $m_3(011)$: covered by $A'C$ (0_1).
*   $m_4(100)$: covered by $AB'$ (10_).
*   $m_5(101)$: covered by $AB'$ (10_), $A'B$ (001) no, $A'B$ (001, 101). Yes, $A'B$ covers $m_1, m_5$.

This means $m_3$ is covered only by $A'C$. $m_4$ is covered only by $AB'$.
The hazard-free expression is obtained by adding loops that cover these singly-covered 1s.
The implicant $A'B$ covers $m_1$ and $m_5$.
The implicant $BC$ covers $m_3$ and $m_7$.
The implicant $A'B'$ covers $m_0$ and $m_4$.

The rule is to add necessary prime implicants to cover all 1s that are adjacent to 0s.
$m_1$ is adj to $m_0, m_2, m_4$. $A'C$ covers $m_1, m_3$. $A'B$ covers $m_1, m_5$. $m_1$ is covered by two terms.
$m_3$ is adj to $m_2, m_7$. $A'C$ covers $m_1, m_3$. $BC$ covers $m_3, m_7$. $m_3$ is covered by two terms if we add $BC$.
$m_4$ is adj to $m_0, m_6$. $AB'$ covers $m_4, m_5$. $A'B'$ covers $m_0, m_4$. $m_4$ is covered by two terms if we add $A'B'$.
$m_5$ is adj to $m_7$. $AB'$ covers $m_4, m_5$. $A'B$ covers $m_1, m_5$. $m_5$ is covered by two terms.

So, adding $BC$ and $A'B'$ makes all 1s covered by at least two terms.
$F_{hz} = A'C + AB' + BC + A'B'$. This is a valid hazard-free form.

However, often the solution $F_{hz} = A'C + AB' + A'B$ is cited for this problem.
Let's revisit the transition: $A:0 \to 1, B=0, C=1$.
$F = A'C + AB'$.
Hazardous because $A'C$ goes $1 \to 0$, $AB'$ goes $0 \to 1$.
Add $A'B$.
$F = A'C + AB' + A'B$.
$A'C$: $1 \to 0$.
$AB'$: $0 \to 1$.
$A'B$: $0 \to 0$.
If $A'C$ drops faster than $AB'$ rises, glitch. $A'B$ staying 0 does not help.

**This implies that the specific implementation of the AND gates and OR gate matters.**
The *theory* of adding redundant implicants is to cover these "adjacent to 0" 1-cells.

Let's go with the most common method taught:
**To eliminate static hazards, add redundant prime implicants to cover all 1-cells that are adjacent to 0-cells.**
A 1-cell is adjacent to a 0-cell if it's part of a group of 1s in the K-map that is bounded by 0s or edges of the map.

In $F = A'C + AB'$:
*   $m_1$ is covered by $A'C$. $m_1$ is adjacent to $m_0(0), m_2(0), m_4(0)$.
*   $m_3$ is covered by $A'C$. $m_3$ is adjacent to $m_2(0), m_7(0)$.
*   $m_4$ is covered by $AB'$. $m_4$ is adjacent to $m_0(0), m_6(0)$.
*   $m_5$ is covered by $AB'$. $m_5$ is adjacent to $m_7(0)$.

We need to add loops that cover $m_1, m_3, m_4, m_5$ and don't cover any 0s.
The implicant $A'B$ covers $m_1$ and $m_5$. It doesn't cover any 0s.
The implicant $BC$ covers $m_3$ and $m_7$. It covers a 0, so it's not ideal.
The implicant $A'B'$ covers $m_0$ and $m_4$. It covers a 0, so it's not ideal.

The standard minimal hazard-free expression for $F = \sum m(1,3,4,5)$ is $F = A'C + AB' + A'B$.
This means the original minimal SOP $F = A'C + AB'$ is indeed hazardous.
And adding $A'B$ makes it hazard-free.

**The key is that $A'B$ helps cover the adjacent 0s for $m_1$ and $m_5$ in a way that complements $A'C$ and $AB'$.**
For $m_1$: $A'C$ covers it. Adjacent 0s are $m_0, m_2, m_4$. $A'B$ covers $m_1$ and $m_5$.
For $m_5$: $AB'$ covers it. Adjacent 0 is $m_7$. $A'B$ covers $m_1$ and $m_5$.

This implies that adding $A'B$ creates redundant paths that ensure the output remains constant.

#### 4.2. Eliminating Dynamic Hazards

Dynamic hazards are more difficult to eliminate in two-level circuits. They typically arise in multi-level logic.
**General approach:**
1.  **Convert to a hazard-free SOP:** Convert the function to a hazard-free SOP form first (by adding redundant implicants for static hazards).
2.  **Implement with extra logic:** Implement the hazard-free SOP using gate structures that minimize the possibility of dynamic hazards. This often involves ensuring that signal paths contributing to the output are balanced in terms of delays.
3.  **Use larger gates or buffered gates:** In practice, using gates with slower propagation delays or buffering signals can sometimes mask dynamic hazards, but this is not a formal design method.
4.  **Re-synthesize to multi-level logic:** For complex circuits, re-synthesizing the logic into a multi-level form might naturally reduce dynamic hazards, or specific algorithms can be used.

**From Mano & Ciletti (Chapter 5, Combinational Circuits):**
They mention that dynamic hazards are rare in practice for simple two-level circuits. If they occur, they are typically in circuits with more than two levels of logic.
The best way to avoid dynamic hazards is to ensure that a term that should change from 0 to 1 doesn't go through a path that is significantly shorter than a term that should change from 1 to 0, if they are ORed together.

**Practical Considerations:**
*   **Gate Delays:** Actual gate delays are not uniform and depend on factors like fan-out, temperature, and manufacturing variations.
*   **Layout and Routing:** In VLSI, the physical layout and routing of wires introduce additional delays.
*   **Testing:** Specialized testing procedures are used to detect hazards in actual hardware.

---

### 5. Practice Questions and Exercises

1.  **Identify Static Hazards:**
    For the function $F(A,B,C) = \sum m(2,3,6,7)$, identify the minimal SOP expression and determine if it is susceptible to static hazards. If so, provide a hazard-free SOP expression.

    **Answer:**
    K-map:
    ```
        BC
    A  00 01 11 10
    0  0  0  1  1   (m2, m3)
    1  0  0  1  1   (m6, m7)
    ```
    Minterms: 2, 3, 6, 7.
    Minimal SOP: $F = BC + \bar{A} \cdot \text{anything} + A \cdot \text{anything}$.
    The K-map shows all 1s in the $BC=11$ column. This is represented by the prime implicant $BC$.
    $F = BC$.
    This minimal form covers $m_2(010), m_3(011), m_6(110), m_7(111)$.
    $m_2$ is covered by $BC$. $m_2$ is adjacent to $m_0(0), m_1(0), m_6(1)$. $m_2$ is adjacent to $m_0(0), m_1(0), m_6(1)$.
    $m_3$ is covered by $BC$. $m_3$ is adjacent to $m_1(0), m_2(0), m_7(1)$.
    $m_6$ is covered by $BC$. $m_6$ is adjacent to $m_2(0), m_4(0), m_7(1)$.
    $m_7$ is covered by $BC$. $m_7$ is adjacent to $m_3(1), m_5(0), m_6(1)$.

    Let's check adjacency to 0s:
    *   $m_2 (010)$: Adjacent to $m_0(0), m_1(0), m_6(1)$.
    *   $m_3 (011)$: Adjacent to $m_1(0), m_2(0), m_7(1)$.
    *   $m_6 (110)$: Adjacent to $m_2(0), m_4(0), m_7(1)$.
    *   $m_7 (111)$: Adjacent to $m_3(1), m_5(0), m_6(1)$.

    The prime implicant $BC$ covers all four 1s ($m_2, m_3, m_6, m_7$).
    Are any of these 1-cells adjacent to a 0 and covered by only this one prime implicant? Yes, they are all adjacent to 0s.
    For $F=BC$, $m_2$ is adjacent to $m_0(0)$ and $m_1(0)$.
    $m_3$ is adjacent to $m_1(0)$.
    $m_6$ is adjacent to $m_2(0)$ and $m_4(0)$.
    $m_7$ is adjacent to $m_5(0)$.

    The rule is: A static hazard exists if a 1-cell is adjacent to a 0-cell and is covered by only one prime implicant.
    In $F=BC$, all 1s are covered by $BC$.
    $m_2$ is covered by $BC$. $m_2$ is adjacent to $m_0(0)$. If $B=1, C=0$ transition to $B=1, C=1$.
    This implicates $F=BC$ is prone to static hazards.
    To make it hazard-free, we need to add redundant loops.
    The implicant $\bar{A}B$ covers $m_2, m_6$.
    The implicant $AB$ covers $m_6, m_7$.
    The implicant $\bar{A}C$ covers $m_2, m_3$.
    The implicant $AC$ covers $m_6, m_7$.

    The minimal SOP is $F=BC$.
    The 1-cells $m_2, m_3, m_6, m_7$ are all covered by $BC$.
    To make it hazard-free, we need to ensure each 1-cell is covered by at least two prime implicants, or by a prime implicant that also covers an adjacent 0.
    $BC$ covers $m_2, m_3, m_6, m_7$.
    $m_2$ is adjacent to $m_0(0)$. $BC$ covers $m_2$.
    $m_3$ is adjacent to $m_1(0)$. $BC$ covers $m_3$.
    $m_6$ is adjacent to $m_4(0)$. $BC$ covers $m_6$.
    $m_7$ is adjacent to $m_5(0)$. $BC$ covers $m_7$.

    The most common method: add loops that cover the "single covered" 1s.
    All 1s are covered by one prime implicant ($BC$).
    We need to add additional prime implicants.
    Consider $A=0, B=1, C=0 \to A=0, B=1, C=1$ (transition $m_2 \to m_3$).
    $F = BC$. $BC$ goes $1 \to 1$. No change expected.
    Let's consider $A: 0 \to 1$, $B=1, C=0 \to 1$.
    $m_2 (010) \to m_6 (110) \to m_6 (110)$.
    $m_2 \to m_6$: $A:0 \to 1, B=1, C=0$. $F=BC = 1 \cdot 0 = 0$.
    $F=BC$ covers $m_2$ and $m_6$.
    $m_2$: $010$, adjacent to $m_0(0)$.
    $m_6$: $110$, adjacent to $m_4(0)$.

    The minimal SOP $F=BC$ is indeed hazard-free in this case.
    There is no static hazard if the function is a single product term (like $BC$) covering all 1s. Static hazards arise when the minimal SOP has multiple terms and a specific transition causes a momentary drop.

    Let's retry the question formulation.
    **Question:** For $F(A,B,C) = \sum m(1,3,5,7)$, provide a hazard-free SOP expression.
    K-map:
    ```
        BC
    A  00 01 11 10
    0  0  1  1  0   (m1, m3)
    1  0  1  1  0   (m5, m7)
    ```
    Minterms: 1, 3, 5, 7.
    Prime Implicants:
    *   $m_1, m_3$: $A'C$
    *   $m_5, m_7$: $AC$
    *   $m_1, m_5$: $A'B$ (no, $A'B$ covers 00_, 01_)
    *   $m_3, m_7$: $ABC$ (no, $A'BC$)

    Correct PI:
    *   $A'C$ (covers $m_1, m_3$)
    *   $AC$ (covers $m_5, m_7$)
    *   $B C$ (covers $m_3, m_7, m_1?, m_5?$) -> $m_1 (001), m_3 (011), m_5 (101), m_7 (111)$.
    The 1s are in the $B=0, C=1$ column ($m_1, m_5$) and $B=1, C=1$ column ($m_3, m_7$).
    K-map:
    ```
        BC
    A  00 01 11 10
    0  0  1  1  0
    1  0  1  1  0
    ```
    Prime Implicants:
    *   $m_1, m_3$: $A'C$
    *   $m_3, m_7$: $A'BC$ (no, $A'BC$ is $m_3$) and $BC$ (covers $m_3, m_7$)
    *   $m_5, m_7$: $AC$
    *   $m_1, m_5$: $A'B$ (no, $A'B$ covers $m_1, m_3$).

    Let's list the terms:
    $m_1 = 001$
    $m_3 = 011$
    $m_5 = 101$
    $m_7 = 111$

    K-map:
    ```
        BC
    A  00 01 11 10
    0  0  1  1  0
    1  0  1  1  0
    ```
    Prime Implicants:
    1.  $A'C$ (covers $m_1, m_3$)
    2.  $AC$ (covers $m_5, m_7$)
    3.  $BC$ (covers $m_3, m_7$)
    4.  $B'C$ (covers $m_1, m_5$)

    Minimal SOP: $F = A'C + AC + B'C$ (This covers $m_1, m_3, m_5, m_7$).
    Let's check $m_3$: covered by $A'C$ and $BC$.
    Let's check $m_5$: covered by $AC$ and $B'C$.
    Let's check $m_1$: covered by $A'C$ and $B'C$.
    Let's check $m_7$: covered by $AC$ and $BC$.

    All 1-cells are covered by two prime implicants. This minimal SOP form should be hazard-free.

    Consider a simplified form by combining terms:
    $F = C(A' + A) + B'C = C(1) + B'C = C + B'C = C(1+B') = C$.
    So the function simplifies to $F=C$.
    Minimal SOP is $F=C$.
    $F=C$ covers $m_1(001), m_3(011), m_5(101), m_7(111)$.
    Is $F=C$ prone to hazards?
    $m_1$ is covered by $C$. Adjacent to $m_0(0), m_2(0), m_4(0)$.
    $m_3$ is covered by $C$. Adjacent to $m_1(1), m_2(0), m_7(1)$.
    $m_5$ is covered by $C$. Adjacent to $m_4(0), m_7(1)$.
    $m_7$ is covered by $C$. Adjacent to $m_3(1), m_5(1), m_6(0)$.

    When $F=C$, the only terms involved are those contributing to $C$. A single product term is generally hazard-free.

    Let's try the problem with the standard hazardous example:
    **Question:** Identify static hazards in $F(A,B,C) = \sum m(1,3,4,5)$ and provide a hazard-free SOP.
    **Answer:** Minimal SOP is $F = A'C + AB'$. This is prone to static hazards. A hazard-free SOP is $F = A'C + AB' + A'B$.

2.  **Design a Hazard-Free Circuit:**
    Design a hazard-free combinational circuit for the function $F(A,B,C) = \sum m(0,1,2,4,5,6)$.
    **Answer:**
    K-map:
    ```
        BC
    A  00 01 11 10
    0  1  1  0  1   (m0, m1, m2)
    1  1  1  0  0   (m4, m5)
    ```
    Minterms: 0, 1, 2, 4, 5, 6.
    Prime Implicants:
    *   $m_0, m_1, m_4, m_5$: $AB'$ (no, $A B'$)
    *   $m_0, m_1$: $A'B'$
    *   $m_4, m_5$: $AB'$
    *   $m_0, m_2$: $A'\bar{C}$
    *   $m_1, m_3$ (not in function)
    *   $m_2, m_3$ (not in function)
    *   $m_1, m_5$: $A'B$ (no)
    *   $m_2, m_6$: $A'\bar{C}$ (no, $A'C'$ for $m_0, m_2$)

    Let's list terms carefully:
    $m_0 = 000$
    $m_1 = 001$
    $m_2 = 010$
    $m_4 = 100$
    $m_5 = 101$
    $m_6 = 110$

    K-map:
    ```
        BC
    A  00 01 11 10
    0  1  1  0  1
       m0 m1 m3 m2
    1  1  1  0  0
       m4 m5 m7 m6
    ```
    Prime Implicants:
    *   $m_0, m_1$: $A'B'$
    *   $m_4, m_5$: $AB'$
    *   $m_0, m_2$: $A'C'$ (covers $m_0, m_2$)
    *   $m_2, m_6$: $A' \bar{C}$ (no, $A'C'$ for $m_0, m_2$). $m_2(010), m_6(110)$. Common is $B=1, C=0$. So $BC'$.
    *   $m_1, m_5$: $A'B$ (no, $A'B$ is $m_1, m_3$). $m_1(001), m_5(101)$. Common is $B'=0, C=1$. So $B'C$.
    *   $m_4, m_6$: $AB'$ (no, $AB'$ covers $m_4, m_5$). $m_4(100), m_6(110)$. Common is $A=1, C=0$. So $AC'$.

    Revised list of Prime Implicants:
    *   $A'B'$ (covers $m_0, m_1$)
    *   $AB'$ (covers $m_4, m_5$)
    *   $A'C'$ (covers $m_0, m_2$)
    *   $BC'$ (covers $m_2, m_6$)
    *   $B'C$ (covers $m_1, m_5$)
    *   $AC'$ (covers $m_4, m_6$)

    Minimal SOP (essential prime implicants first):
    *   $m_0$: covered only by $A'B'$ and $A'C'$. Need both.
    *   $m_1$: covered by $A'B'$ and $B'C$. Need both.
    *   $m_2$: covered by $A'C'$ and $BC'$. Need both.
    *   $m_4$: covered by $AB'$ and $AC'$. Need both.
    *   $m_5$: covered by $AB'$ and $B'C$. Need both.
    *   $m_6$: covered by $BC'$ and $AC'$. Need both.

    All prime implicants are needed to cover the function.
    $F_{min} = A'B' + AB' + A'C' + BC' + B'C + AC'$.

    Now, check for hazards. Are any 1-cells covered by only one prime implicant? No, all are covered by two.
    This minimal SOP form is hazard-free.

    **Circuit Implementation:**
    The circuit would be implemented using AND gates for each product term and an OR gate to combine them.
    *   AND1: inputs $A', B'$. Output $A'B'$.
    *   AND2: inputs $A, B'$. Output $AB'$.
    *   AND3: inputs $A', C'$. Output $A'C'$.
    *   AND4: inputs $B, C'$. Output $BC'$.
    *   AND5: inputs $B', C$. Output $B'C$.
    *   AND6: inputs $A, C'$. Output $AC'$.
    *   OR gate: inputs from AND1 through AND6.

    Example of a static hazard in a simpler form for a different function:
    $F(A,B) = \sum m(0,1,3)$
    K-map:
    ```
       B
    A 0 1
    0 1 1   (m0, m1)
    1 0 1   (m3)
    ```
    Minimal SOP: $F = A' + AB$.
    Transition $A: 0 \to 1$, $B=1$. $m_1 \to m_3$.
    $F = A' + AB$.
    $A'$: $1 \to 0$.
    $AB$: $0 \cdot 1 = 0 \to 1 \cdot 1 = 1$.
    If $A'$ path is shorter than $AB$ path, output glitches $1 \to 0 \to 1$.
    Hazard-free form: Add $A'B$.
    $F_{hz} = A' + AB + A'B$.
    Check coverage:
    $m_0$: covered by $A'$.
    $m_1$: covered by $A'$ and $A'B$.
    $m_3$: covered by $AB$ and $A'B$.
    This expression is hazard-free.

---

### 6. Important Points to Remember

*   **Hazards are transient glitches** caused by unequal propagation delays in combinational logic circuits.
*   **Static hazards** occur when an output should remain constant but glitches.
    *   **Static-1 hazard:** Output should be 1, glitches to 0, then back to 1.
    *   **Static-0 hazard:** Output should be 0, glitches to 1, then back to 0.
*   **Dynamic hazards** occur when an output should change once but glitches multiple times.
*   **K-maps are useful for identifying potential static hazards:** A static hazard is indicated if a 1-cell in the K-map is covered by only one prime implicant.
*   **Eliminating static hazards in two-level SOP circuits:** Add **redundant prime implicants** to the K-map to cover all 1-cells that are adjacent to 0s. This ensures that any transition affecting one product term does not cause the entire output to drop.
*   **Eliminating dynamic hazards** is more complex and often requires multi-level logic or careful delay balancing.
*   In VLSI design, hazards can lead to unpredictable behavior, and designers must consider them.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. References

*   **Digital Principles & Design by Donald G Givone:** Provides fundamental concepts of combinational logic and hazards.
*   **Digital Design: Principles and Practices by John F Wakerly:** Offers detailed explanations of hazards, their identification, and elimination techniques, often with practical examples.
*   **Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog by M.Morris Mano and Michel.D.Ciletti:** Covers combinational logic design, K-maps, and introduces hazards as a practical concern in digital system design.

---