---
title: "Design of Hazard free circuits"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362fb"
status: "completed"
scrapedAt: "2026-05-23T16:21:08.609Z"
---
# Digital System Design: Module 3 - Hazards & Hazard-Free Circuit Design

## Introduction to Hazards

**Definition:** A hazard in a combinational logic circuit is an undesirable transient output pulse that occurs when the circuit responds to a change in one or more input variables. These transient pulses are due to the differing delays in the propagation paths of the input signals through the logic gates.

**Types of Hazards:**

*   **Static Hazards:** Occur when an output is supposed to remain constant (either 0 or 1) during a change in input variables, but it momentarily glitches to the opposite logic level before settling to the correct steady-state value.
    *   **Static-0 Hazard:** An output that should be a constant 0 glitches to 1.
    *   **Static-1 Hazard:** An output that should be a constant 1 glitches to 0.
*   **Dynamic Hazards:** Occur when an output is supposed to change from one logic level to another (e.g., 0 to 1), but it glitches multiple times (e.g., 0 -> 1 -> 0 -> 1) before settling to the final correct value.

**Sources of Hazards:**

Hazards are primarily caused by **propagation delays** in logic gates and interconnecting wires. When multiple inputs change simultaneously, the different delays in the paths can lead to temporary incorrect output values.

---

## Static Hazards in Combinational Networks

**Understanding Static-0 Hazards:**

*   **Cause:** A static-0 hazard occurs in a product term (AND gate output) that is supposed to be 0 when a specific input combination is applied. If, due to input changes, this product term momentarily becomes 1 before returning to 0, it can cause a glitch if it's part of an OR gate output.
*   **Example Scenario:** Consider a circuit designed to output 0 for a specific input combination. If one of the input signals that causes this output to be 0 has a delay, the circuit might momentarily transition to a state where the output becomes 1 before settling back to 0.

**Understanding Static-1 Hazards:**

*   **Cause:** A static-1 hazard occurs in a sum-of-products (SOP) expression where a specific product term is intended to be 1 for a given input combination. If, due to input changes, this product term momentarily becomes 0 before returning to 1, it can cause a glitch if it's part of an OR gate output.
*   **Example Scenario:** Consider a circuit with an SOP expression. If an input transition causes one of the essential product terms to momentarily become 0, the overall output might glitch to 0 before returning to 1.

**Detection of Static Hazards using K-maps:**

Static hazards in SOP implementations can be identified by examining the K-map of the function.

*   **Static-1 Hazard Detection:** A static-1 hazard exists in an SOP implementation if a specific minterm (input combination) for which the output is 1 is covered by only **one** prime implicant. This is because if that single implicant is affected by a transient change in its inputs, the output will momentarily drop to 0.
*   **Static-0 Hazard Detection:** Static-0 hazards are generally associated with POS (Product-of-Sums) implementations. In a POS form, if a maxterm (input combination) for which the output is 0 is covered by only **one** prime implicant (a prime implicant in the POS context, which corresponds to a zero on the K-map), a static-0 hazard can occur.

**Example:**

Consider a function $F(A, B, C) = \sum m(1, 3, 4, 5)$.
The K-map is:

```
     BC
A   00 01 11 10
--- --- --- --- ---
0 | 0  0  0  0 |
1 | 1  1  0  1 |
```

The minimal SOP expression is $F = \bar{A}B + A\bar{C} + AC$.
Let's map these implicants to the K-map:
*   $\bar{A}B$ covers minterms 1 and 3.
*   $A\bar{C}$ covers minterms 4 and 5.
*   $AC$ covers minterm 5.

Notice that minterm 5 is covered by two implicants ($A\bar{C}$ and $AC$). Minterms 1, 3, and 4 are covered by only one implicant each.

If we consider the transition from input combination $A=1, B=0, C=0$ (minterm 4) to $A=1, B=1, C=0$ (minterm 6).
*   Minterm 4: $F = 0 \cdot 1 + 1 \cdot 1 + 1 \cdot 0 = 0 + 1 + 0 = 1$.
*   Minterm 6: $F = 0 \cdot 0 + 1 \cdot 1 + 1 \cdot 0 = 0 + 1 + 0 = 1$.

The output should remain 1 during this transition. However, let's analyze the terms:
*   $\bar{A}B$ changes from 0 to 0.
*   $A\bar{C}$ changes from 1 to 1.
*   $AC$ changes from 0 to 1.

The sum-of-products implementation is: $F = (\bar{A}B) \lor (A\bar{C}) \lor (AC)$.
When $A=1$, the expression simplifies to $F = 0 \cdot B + 1 \cdot \bar{C} + 1 \cdot C = \bar{C} + C = 1$.

Consider a transition from $A=1, B=0, C=1$ (minterm 5) to $A=1, B=0, C=0$ (minterm 4).
*   Minterm 5: $F = 0 \cdot 0 + 1 \cdot 0 + 1 \cdot 1 = 0 + 0 + 1 = 1$.
*   Minterm 4: $F = 0 \cdot 0 + 1 \cdot 1 + 1 \cdot 0 = 0 + 1 + 0 = 1$.

The output should remain 1.
Let's analyze the terms in $F = \bar{A}B + A\bar{C} + AC$:
*   $\bar{A}B$ is 0 for both.
*   $A\bar{C}$ is 0 for minterm 5 and 1 for minterm 4.
*   $AC$ is 1 for minterm 5 and 0 for minterm 4.

When $A=1, C=1 \to A=1, C=0$:
The term $A\bar{C}$ changes from 0 to 1.
The term $AC$ changes from 1 to 0.
The term $\bar{A}B$ is 0.

The output is $F = (\text{term 1}) \lor (\text{term 2}) \lor (\text{term 3})$.
In the transition $A=1, B=0, C=1 \to A=1, B=0, C=0$:
$F = 0 \lor (0 \to 1) \lor (1 \to 0)$.

If the propagation delay of the term $AC$ (which goes from 1 to 0) is greater than the propagation delay of the term $A\bar{C}$ (which goes from 0 to 1), the output will momentarily become $0 \lor 1 \lor 0 = 1$, then $0 \lor 0 \lor 1 = 1$.
However, if the delay of $AC$ (going to 0) is *less* than the delay of $A\bar{C}$ (going to 1), the output can momentarily be $0 \lor 0 \lor 0 = 0$ before settling to $0 \lor 1 \lor 0 = 1$. This is a static-1 hazard.

**Key Insight for Static-1 Hazards:** A static-1 hazard exists in an SOP form if there is an input transition between two minterms that both result in a 1 output, and these two minterms are covered by a single implicant, but there's another input transition in the same change that momentarily makes that implicant 0. This happens when a 1 in the K-map is covered by only one prime implicant, and the input transition is such that the variables involved in that implicant are changing in a way that would cause that implicant to become 0.

---

## Dynamic Hazards in Combinational Networks

**Understanding Dynamic Hazards:**

*   **Cause:** Dynamic hazards occur when an output is supposed to transition from one state to another (e.g., 0 to 1), but due to multiple propagation delays, the output glitches multiple times before settling to the final value. This typically happens in circuits implemented with multiple levels of logic.
*   **Example Scenario:** Imagine a circuit where an input change is supposed to flip the output from 0 to 1. If the circuit has, for instance, three parallel paths from the input change to the output, and these paths have different propagation delays, the output might go 0 -> 1 (fastest path), then 1 -> 0 (intermediate path arriving later), then 0 -> 1 (slowest path).

**Detection of Dynamic Hazards:**

Dynamic hazards are more difficult to detect from a K-map directly. They are more commonly analyzed by considering the circuit's implementation and the delays of its components.

*   **Multiple Levels of Logic:** Dynamic hazards are more likely to occur in circuits with multiple levels of logic. For example, a circuit implemented using AND-OR-Invert (AOI) or OR-AND-Invert (OAI) gates can be more susceptible.
*   **Input Transitions:** They are associated with input transitions that require the output to change its state.

**Example:**

Consider the function $F(A, B, C) = \sum m(0, 1, 2, 3)$.
K-map:
```
     BC
A   00 01 11 10
--- --- --- --- ---
0 | 1  1  1  1 |
1 | 0  0  0  0 |
```
The minimal SOP is $F = \bar{A}$. This is a single-level implementation and will not have dynamic hazards.

Now consider a non-minimal SOP expression for the same function: $F = \bar{A}\bar{B} + \bar{A}B + \bar{A}\bar{C} + \bar{A}C$.
This can be implemented as:
$F = (\bar{A}\bar{B}) + (\bar{A}B) + (\bar{A}\bar{C}) + (\bar{A}C)$

This is a two-level implementation. Let's consider a transition that requires the output to change, e.g., from $A=1, B=0, C=0$ (minterm 4, output 0) to $A=0, B=0, C=0$ (minterm 0, output 1).

In the given non-minimal SOP:
Term 1: $\bar{A}\bar{B}$ (covers minterms 0, 2)
Term 2: $\bar{A}B$ (covers minterms 1, 3)
Term 3: $\bar{A}\bar{C}$ (covers minterms 0, 1)
Term 4: $\bar{A}C$ (covers minterms 2, 3)

This implementation is redundant. A simplified implementation of the same function is $\bar{A}$.
If we had a more complex implementation, for example, if the function was $F = AB + \bar{A}\bar{B}$, and we wanted to implement it using AND gates and an OR gate.
Suppose A changes from 0 to 1.
The term AB changes from $0 \cdot B$ to $1 \cdot B$. If B=1, AB changes from 0 to 1.
The term $\bar{A}\bar{B}$ changes from $1 \cdot \bar{B}$ to $0 \cdot \bar{B}$. If B=1, $\bar{A}\bar{B}$ changes from 0 to 0.

If the implementation involves multiple levels of logic, for example, $F = (AB) \lor (\bar{A}\bar{B})$, and A changes from 0 to 1:
*   Term AB: If B=1, changes 0 -> 1.
*   Term $\bar{A}\bar{B}$: If B=1, changes 0 -> 0.

Now, let's consider the possibility of dynamic hazards. A common scenario for dynamic hazards is when a glitch from one part of the circuit can affect another part that is also transitioning.

**Important Point:** Dynamic hazards are inherently linked to the specific gate-level implementation and propagation delays, and they are more likely to occur when the output is supposed to change.

---

## Design of Hazard-Free Circuits

**Goal:** To design combinational circuits that do not exhibit any static or dynamic hazards.

### Methods for Eliminating Static Hazards

**1. Covering Uncovered Minterms in SOP Implementation:**

For SOP implementations, static-1 hazards occur when a minterm producing a '1' output is covered by only a single prime implicant. To eliminate this, we can add redundant prime implicants to cover these "uncovered" minterms.

*   **Procedure:**
    1.  Obtain the minimal sum-of-products expression for the function using K-maps.
    2.  Identify all minterms for which the output is 1.
    3.  For each minterm that is covered by only one prime implicant, find an additional, possibly redundant, prime implicant that also covers this minterm.
    4.  Add these additional prime implicants to the SOP expression.

**Example:**
From the previous example, $F(A, B, C) = \sum m(1, 3, 4, 5)$.
Minimal SOP: $F = \bar{A}B + A\bar{C} + AC$.
Minterms 1, 3, and 4 are covered by only one implicant each.
*   Minterm 1 is covered by $\bar{A}B$.
*   Minterm 3 is covered by $\bar{A}B$.
*   Minterm 4 is covered by $A\bar{C}$.

To cover minterms 1 and 3, which are covered by $\bar{A}B$, we can consider another implicant that covers them. In the K-map, minterms 1 and 3 are adjacent to minterm 0 (covered by $\bar{A}\bar{C}$) and minterm 2 (covered by $\bar{A}C$). The implicant $\bar{A}$ covers minterms 0, 1, 2, 3.
So, to cover minterms 1 and 3 with an additional implicant, we could add $\bar{A}$ to the expression (although $\bar{A}$ alone covers more). However, looking at the adjacency on the K-map, minterms 1 and 3 are also covered by $A\bar{C}$ (minterm 4) and $AC$ (minterm 5). The issue is more about *which* prime implicants cover the minterm.

Let's re-examine the definition: A static-1 hazard exists if a minterm is covered by only one prime implicant, and that minterm is part of a transition that would momentarily make the implicant zero. This happens if the minterm is covered by only one prime implicant.

In $F = \bar{A}B + A\bar{C} + AC$:
*   Minterm 1 ($010$): Covered by $\bar{A}B$.
*   Minterm 3 ($011$): Covered by $\bar{A}B$.
*   Minterm 4 ($100$): Covered by $A\bar{C}$.
*   Minterm 5 ($101$): Covered by $A\bar{C}$ and $AC$.

Minterms 1, 3, and 4 are covered by only one prime implicant. Let's focus on minterm 4.
Minterm 4 is covered by $A\bar{C}$. The function value at minterm 4 is 1.
Consider a transition from minterm 0 ($000$, $F=0$) to minterm 4 ($100$, $F=1$).
*   Minterm 0 is covered by $\bar{A}\bar{C}$ (if we considered it).
*   Minterm 4 is covered by $A\bar{C}$.

The transition is $A: 0 \to 1$.
The term $\bar{A}B$ changes from $1 \cdot 0 = 0$ to $0 \cdot 0 = 0$.
The term $A\bar{C}$ changes from $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.
The term $AC$ changes from $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.

The output is $F = (\bar{A}B) \lor (A\bar{C}) \lor (AC)$.
When $A=0, C=0$, $F = 0 \lor 0 \lor 0 = 0$.
When $A=1, C=0$, $F = 0 \lor 1 \lor 0 = 1$.

The problematic transition for minterm 4 is related to when $A$ changes, and $\bar{C}$ is 1 (or $C$ is 0).
Let's consider the transition from $A=0, C=0$ to $A=1, C=0$.
The implicant $A\bar{C}$ is responsible for covering minterm 4. If $A\bar{C}$ momentarily becomes 0, a hazard can occur.
If we add a redundant implicant to cover minterm 4, for example, $\bar{B}\bar{C}$ (which covers minterm 4 and 0), then:
$F_{hazard\_free} = \bar{A}B + A\bar{C} + AC + \bar{B}\bar{C}$.

Let's verify this. Minterm 4 ($100$) is covered by $A\bar{C}$ and $\bar{B}\bar{C}$. Now it's covered by two implicants.
Minterm 1 ($010$) is covered by $\bar{A}B$.
Minterm 3 ($011$) is covered by $\bar{A}B$.
Minterm 5 ($101$) is covered by $A\bar{C}$ and $AC$.

The terms $\bar{A}B$ covers minterms 1 and 3.
The terms $A\bar{C}$ covers minterms 4 and 5.
The term $AC$ covers minterm 5.
The term $\bar{B}\bar{C}$ covers minterms 0 and 4.

With $F = \bar{A}B + A\bar{C} + AC + \bar{B}\bar{C}$:
*   Minterm 4 is covered by $A\bar{C}$ and $\bar{B}\bar{C}$.
*   Minterm 1 is covered by $\bar{A}B$.
*   Minterm 3 is covered by $\bar{A}B$.

The problematic scenario for minterm 4 was related to the transition of $A$ alone. The additional term $\bar{B}\bar{C}$ covers minterm 4.

**Key Principle:** The goal is to ensure that for any input transition, if a prime implicant responsible for a '1' output momentarily drops to '0', there must be at least one other prime implicant that covers the current state and maintains the '1' output.

**2. Using Product-of-Sums (POS) Implementation for Static-0 Hazards:**

Similar to SOP for static-1 hazards, POS implementations can have static-0 hazards. These occur when a maxterm that should result in a '0' is covered by only one implicant (a minterm in the complement function's K-map).

*   **Procedure:**
    1.  Obtain the minimal product-of-sums expression.
    2.  Identify all maxterms for which the output is 0.
    3.  For each maxterm that is covered by only one prime implicant in the POS expression, add a redundant prime implicant that also covers this maxterm.

**3. Total Sum-of-Products (or Product-of-Sums) without Minimization:**

A full, unminimized SOP (or POS) expression will inherently not have static hazards. This is because each minterm (for SOP) or maxterm (for POS) is implemented independently. However, this leads to highly complex and inefficient circuits.

**4. Using Hazard-Free Two-Level Logic (Routledge's Method):**

This method aims to create hazard-free two-level implementations by ensuring that every essential prime implicant is augmented with "redundant" prime implicants where necessary.

*   **Procedure for Static-1 Hazard Free SOP:**
    1.  Map the function and identify all prime implicants.
    2.  For each minterm that is covered by exactly one prime implicant, find another prime implicant that covers this minterm.
    3.  The final hazard-free SOP expression includes all original prime implicants plus the newly identified ones for the "covered by one" minterms.

**Example Revisited with Routledge's Method:**
$F(A, B, C) = \sum m(1, 3, 4, 5)$.
K-map:
```
     BC
A   00 01 11 10
--- --- --- --- ---
0 | 0  0  0  0 |
1 | 1  1  0  1 |
```
Prime implicants:
*   $P_1 = \bar{A}B$ (covers 1, 3)
*   $P_2 = A\bar{C}$ (covers 4, 5)
*   $P_3 = AC$ (covers 5)

Minterm coverage:
*   Minterm 1: Covered by $P_1$ only.
*   Minterm 3: Covered by $P_1$ only.
*   Minterm 4: Covered by $P_2$ only.
*   Minterm 5: Covered by $P_2$ and $P_3$.

Minterms 1, 3, and 4 are covered by only one prime implicant. We need to add redundant implicants.
*   For minterms 1 and 3 (covered by $P_1$): We need another implicant to cover them. Looking at the K-map, $\bar{A}$ covers minterms 0, 1, 2, 3. If we use $\bar{A}$, it covers 1 and 3.
*   For minterm 4 (covered by $P_2$): We need another implicant. $\bar{B}\bar{C}$ covers minterms 0 and 4.

So, the hazard-free expression would be:
$F_{hazard\_free} = P_1 + P_2 + P_3 + (\text{an implicant for minterms 1,3}) + (\text{an implicant for minterm 4})$

A simpler approach to ensure hazard-free SOP is to ensure that *every pair* of adjacent 1s in the K-map is covered by *at least one* common prime implicant.

Consider the K-map and all adjacencies:
*   1-3: Covered by $\bar{A}B$.
*   4-5: Covered by $A\bar{C}$.
*   1-5 (diagonal): Not directly adjacent.
*   3-2: Not adjacent for 1s.
*   4-0: Not adjacent for 1s.

The issue arises from single-input changes that flip a single variable and affect only one prime implicant.
Transition between minterms that are adjacent:
*   $A=0, B=1, C=0$ (1) to $A=0, B=1, C=1$ (3): Both covered by $\bar{A}B$. No hazard.
*   $A=1, B=0, C=1$ (5) to $A=1, B=0, C=0$ (4): Both covered by $A\bar{C}$. No hazard.

The hazard appears when a single-variable change causes the output to remain '1', but the primary implicant creating that '1' momentarily disappears. This happens when the minterm is covered by only one prime implicant.

**The most common and practical method to ensure hazard-free SOP is to add "all possible essential prime implicants" that cover these single-implicant-covered minterms.**

**A well-accepted method for hazard-free SOP implementation:**
1.  Find all prime implicants of the function.
2.  Include all essential prime implicants in the sum.
3.  For any minterm that is covered by only one prime implicant (which must be essential), ensure it is covered by at least one additional prime implicant.
4.  If a minterm is covered by exactly one prime implicant, identify all possible larger prime implicants that also cover this minterm. Include at least one such prime implicant.

In our example $F = \sum m(1, 3, 4, 5)$:
*   Minterm 1 is covered by $\bar{A}B$.
*   Minterm 3 is covered by $\bar{A}B$.
*   Minterm 4 is covered by $A\bar{C}$.
*   Minterm 5 is covered by $A\bar{C}$ and $AC$.

Minterms 1, 3, 4 are covered by only one prime implicant.
For minterms 1 and 3 (covered by $\bar{A}B$): Consider larger implicants that cover them.
The implicant $\bar{A}$ covers 1, 3.
For minterm 4 (covered by $A\bar{C}$): Consider larger implicants that cover it.
The implicant $\bar{B}\bar{C}$ covers 4.

Thus, the hazard-free expression is $F_{HF} = \bar{A}B + A\bar{C} + AC + \bar{A} + \bar{B}\bar{C}$.
Since $\bar{A}$ already covers $\bar{A}B$, and also covers minterms 1 and 3, a simpler form might emerge.
Let's check $F_{HF} = \bar{A} + A\bar{C} + AC$.
$\bar{A}$ covers minterms 0, 1, 2, 3.
$A\bar{C}$ covers minterms 4, 5.
$AC$ covers minterm 5.
This sum covers: 0, 1, 2, 3, 4, 5. This is the correct set of minterms.

The hazard-free SOP expression derived from the method is:
$F_{HF} = \bar{A}B + A\bar{C} + AC + \text{redundant implicant for 1,3} + \text{redundant implicant for 4}$.
If we choose $\bar{A}$ for 1,3 and $\bar{B}\bar{C}$ for 4:
$F_{HF} = \bar{A}B + A\bar{C} + AC + \bar{A} + \bar{B}\bar{C}$.
Simplifying this:
$\bar{A}B$ is covered by $\bar{A}$.
So, $F_{HF} = \bar{A} + A\bar{C} + AC + \bar{B}\bar{C}$.
This covers all minterms and has redundant coverage for minterms 1, 3, 4, 5.

The core idea is: for every set of adjacent 1s in the K-map, ensure they are covered by at least one common prime implicant. If a particular pair of adjacent 1s is only covered by one prime implicant, add another prime implicant that also covers these two 1s.

**Simplified Rule for SOP Hazard-Free:**
For every pair of adjacent 1's in the K-map, they must be covered by at least one common prime implicant. If they are covered by only one prime implicant, add another prime implicant that also covers these two 1s.

In our example:
*   1 and 3 are adjacent. Covered by $\bar{A}B$. This is a prime implicant.
*   4 and 5 are adjacent. Covered by $A\bar{C}$. This is a prime implicant.
The issue with the original $F = \bar{A}B + A\bar{C} + AC$ is not the adjacency between essential prime implicants, but the *single implicant coverage* of a minterm.

**The most straightforward and commonly taught method to make an SOP implementation hazard-free:**
1.  Find all prime implicants.
2.  Select a minimal set of prime implicants to cover all 1s (essential prime implicants first).
3.  Identify minterms covered by only one prime implicant.
4.  For each such minterm, add another prime implicant that also covers it.

Let's use the example $F(A,B) = \sum m(1,2)$ with K-map:
```
   B
A 0  1
-- --
0| 0  1| (1)
1| 1  0| (2)
```
Prime implicants: $A\bar{B}$ (covers 2), $\bar{A}B$ (covers 1).
Both minterms 1 and 2 are covered by only one prime implicant.
To make it hazard-free, we need to add redundant implicants.
For minterm 1 ($\bar{A}B$), we can add $\bar{A}$ which covers 0,1.
For minterm 2 ($A\bar{B}$), we can add $\bar{B}$ which covers 0,2.
So, $F_{HF} = \bar{A}B + A\bar{B} + \bar{A} + \bar{B}$.
Simplifying: $F_{HF} = \bar{A} + \bar{B}$. This is XOR.
Let's check this: $A \oplus B$.
If A=0, B=1, output = 1.
If A=1, B=0, output = 1.

Let's check the implementation of $F = \bar{A}B + A\bar{B}$.
Consider $A: 0 \to 1$ while $B=1$.
Term $\bar{A}B$: $1 \cdot 1 \to 0 \cdot 1$, so $1 \to 0$.
Term $A\bar{B}$: $0 \cdot 0 \to 1 \cdot 0$, so $0 \to 0$.
Output $F = (\bar{A}B) \lor (A\bar{B})$.
When $A=0, B=1$, $F = 1 \lor 0 = 1$.
When $A=1, B=1$, $F = 0 \lor 0 = 0$.
The output should transition from 1 to 0.
If the term $\bar{A}B$ has a delay, it can momentarily become 0. If $A\bar{B}$ is still 0, the output can glitch to 0. This is a static-1 hazard.

To fix this, we add redundancy.
$F_{HF} = \bar{A}B + A\bar{B} + \text{implicant covering 1} + \text{implicant covering 2}$.
For minterm 1: $\bar{A}B$ is the only covering implicant. $\bar{A}$ covers 1.
For minterm 2: $A\bar{B}$ is the only covering implicant. $\bar{B}$ covers 2.
$F_{HF} = \bar{A}B + A\bar{B} + \bar{A} + \bar{B}$.
$\bar{A}$ covers $\bar{A}B$.
$\bar{B}$ covers $A\bar{B}$.
So, $F_{HF} = \bar{A} + \bar{B}$.
This is the implementation of XOR. Let's check if XOR is hazard-free.
$A \oplus B$ as $(A+\bar{B})(B+\bar{A})$.
Consider the implementation of $A \oplus B$ using AND-OR logic, where $F = \bar{A}B + A\bar{B}$.
If $A$ goes from 0 to 1, and $B=1$:
$\bar{A}B$: $1 \to 0$.
$A\bar{B}$: $0 \to 0$.
Output $F = 1 \lor 0 = 1$. Then $0 \lor 0 = 0$.
If the path for $\bar{A}B$ is faster than any other path that could influence the output, and $A\bar{B}$ momentarily drops to 0, the output will glitch.

The standard way to create a hazard-free SOP is to ensure that any pair of adjacent 1s in the K-map are covered by at least two different prime implicants.

**Revised Method for Hazard-Free SOP:**
1.  Find all prime implicants.
2.  Identify all pairs of adjacent 1s in the K-map.
3.  For each pair of adjacent 1s that is covered by only one prime implicant, select an additional prime implicant that also covers this pair.
4.  The hazard-free sum includes all original prime implicants plus the selected additional prime implicants.

Example: $F(A, B, C) = \sum m(1, 3, 4, 5)$.
K-map:
```
     BC
A   00 01 11 10
--- --- --- --- ---
0 | 0  0  0  0 |
1 | 1  1  0  1 |
```
Prime implicants: $P_1 = \bar{A}B$ (covers 1, 3), $P_2 = A\bar{C}$ (covers 4, 5), $P_3 = AC$ (covers 5).
Adjacencies of 1s:
*   1 and 3: Covered by $P_1 = \bar{A}B$. This is one prime implicant. We need another one that covers 1 and 3. $\bar{A}$ covers 0,1,2,3. So we can add $\bar{A}$.
*   4 and 5: Covered by $P_2 = A\bar{C}$. This is one prime implicant. We need another one. $\bar{B}\bar{C}$ covers 0,4. Wait, $\bar{B}\bar{C}$ covers 0 and 4, not a pair of 1s together.
The rule is about covering the *specific 1s*.

Let's use the method from "Digital Design" by Mano and Ciletti (6th Edition, Chapter 5 on Hazards):
To eliminate static-1 hazards in a two-level SOP circuit:
1.  Map the function and find all prime implicants.
2.  Identify essential prime implicants.
3.  For each minterm that is covered by only one prime implicant (whether essential or not), find another prime implicant that also covers this minterm.
4.  The hazard-free expression is the union of all prime implicants selected in step 3, plus all essential prime implicants not already included.

In our example:
$F = \sum m(1, 3, 4, 5)$.
Prime Implicants: $P_1 = \bar{A}B$ (covers 1,3), $P_2 = A\bar{C}$ (covers 4,5), $P_3 = AC$ (covers 5).
Minterm coverage check:
*   Minterm 1: Covered only by $P_1$.
*   Minterm 3: Covered only by $P_1$.
*   Minterm 4: Covered only by $P_2$.
*   Minterm 5: Covered by $P_2$ and $P_3$.

Minterms 1, 3, and 4 are covered by only one prime implicant.
*   For minterm 1 (covered by $P_1$): Find another prime implicant covering 1. $P_1$ itself covers 1 and 3. If we consider $\bar{A}$ as a prime implicant (it's not minimal, but could be part of a hazard-free design), it covers 0,1,2,3.
*   For minterm 3 (covered by $P_1$): Same as above.
*   For minterm 4 (covered by $P_2$): Find another prime implicant covering 4. $P_2$ covers 4 and 5. If we consider $\bar{B}\bar{C}$ as a prime implicant (covers 0,4), it covers 4.

The method suggests adding redundant implicants that cover these problematic minterms.
The hazard-free expression is $F_{HF} = P_1 + P_2 + P_3 + (\text{redundant for } 1,3) + (\text{redundant for } 4)$.
We need a prime implicant that covers 1 and 3 besides $P_1$. There isn't a single larger prime implicant from the minimal set covering *both* 1 and 3. However, if we consider the structure:
$F = \bar{A}B + A\bar{C} + AC$.
The transition $A:0 \to 1$ with $B=1, C=1$ is minterm 3 to minterm 7 (not in function).
Transition $A:0 \to 1$ with $B=1, C=0$ is minterm 1 to minterm 5.
*   Minterm 1 ($010$): $\bar{A}B = 1$. $A\bar{C}=0$. $AC=0$. $F=1$.
*   Minterm 5 ($101$): $\bar{A}B=0$. $A\bar{C}=0$. $AC=1$. $F=1$.

The output is 1 for both. $A$ changes from 0 to 1.
Path $\bar{A}B$: changes $1 \to 0$.
Path $A\bar{C}$: changes $0 \to 0$.
Path $AC$: changes $0 \to 1$.

$F = (\bar{A}B) \lor (A\bar{C}) \lor (AC)$
Transition: $F = (1 \to 0) \lor 0 \lor (0 \to 1)$.
If $(\bar{A}B)$ drops to 0 faster than $(AC)$ rises to 1, the output can momentarily be $0 \lor 0 \lor 0 = 0$, creating a static-1 hazard.
To prevent this, we need another implicant covering minterm 1 and minterm 5 (as these are involved in transitions where A changes).
The implicant $\bar{A}$ covers minterm 1.
The implicant $\bar{B}\bar{C}$ covers minterm 4.

**The MOST straightforward method to ensure hazard-free SOP:**
Ensure that *every pair* of adjacent 1s in the K-map is covered by *at least two* prime implicants.

Example: $F(A, B, C) = \sum m(1, 3, 4, 5)$.
K-map:
```
     BC
A   00 01 11 10
--- --- --- --- ---
0 | 0  0  0  0 |
1 | 1  1  0  1 |
```
Prime implicants covering 1s:
$P_1 = \bar{A}B$ (covers 1, 3)
$P_2 = A\bar{C}$ (covers 4, 5)
$P_3 = AC$ (covers 5)

Adjacencies of 1s:
*   1 and 3: Covered by $P_1 = \bar{A}B$. $P_1$ is the *only* prime implicant covering both 1 and 3. We need to add another prime implicant that covers 1 and 3. Looking at the K-map, no other minimal prime implicant covers *both* 1 and 3. However, the implicant $\bar{A}$ covers 1 and 3 (along with 0 and 2). If we include $\bar{A}$ as a redundant implicant: $F_{HF} = \bar{A}B + A\bar{C} + AC + \bar{A}$. This simplifies to $F_{HF} = \bar{A} + A\bar{C} + AC$.
*   4 and 5: Covered by $P_2 = A\bar{C}$. $P_2$ is the *only* prime implicant covering both 4 and 5. We need to add another prime implicant that covers 4 and 5. Looking at the K-map, no other minimal prime implicant covers *both* 4 and 5. However, consider the function. $F=1$ for 1,3,4,5.
    If we add $\bar{B}\bar{C}$ (covers 0,4), it covers 4. $F_{HF} = \bar{A}B + A\bar{C} + AC + \bar{B}\bar{C}$.

The simplest strategy to avoid static-1 hazards is to add redundant terms that cover all the "single-implicant-covered" minterms.

**Final Method for SOP Hazard-Free (Mano & Ciletti):**
1.  Find all prime implicants.
2.  Identify essential prime implicants.
3.  For each minterm covered by only one prime implicant, select another prime implicant that also covers this minterm.
4.  Form the union of all prime implicants identified in step 3, plus all essential prime implicants not already included.

Using $F = \sum m(1, 3, 4, 5)$:
Prime implicants: $P_1 = \bar{A}B$, $P_2 = A\bar{C}$, $P_3 = AC$.
Essential prime implicants: None are strictly essential as all minterms can be covered by multiple combinations.
Minterms covered by only one prime implicant: 1 (by $P_1$), 3 (by $P_1$), 4 (by $P_2$).
*   For minterm 1 (covered by $P_1$): Select another prime implicant that covers 1. $P_1$ covers 1 and 3. No other minimal prime implicant covers 1. If we consider the adjacency between 1 and 3 covered by $P_1$, we need another implicant to cover 1 and 3. If we consider the adjacency between 4 and 5 covered by $P_2$, we need another implicant to cover 4 and 5.

A key insight from textbooks like Wakerly (4th Ed.) and Givone is that static hazards are associated with specific gate implementations, particularly sum-of-products and product-of-sums forms when the output is 1 and 0 respectively. The addition of redundant prime implicants to cover "covered-by-one" minterms is the primary technique.

---

### Methods for Eliminating Dynamic Hazards

Dynamic hazards are more complex and depend on the circuit's gate structure and delays.

*   **Using Hazard-Free Logic Styles:** Certain logic styles or implementations are inherently less prone to dynamic hazards. For instance, building complex functions from AND-OR-Invert (AOI) or OR-AND-Invert (OAI) structures can be done in a way that minimizes dynamic hazards.
*   **Ensuring Sufficient Delay in Critical Paths:** While not a design method per se, ensuring that all paths from input to output have comparable delays can mitigate dynamic hazards. This is often achieved by adding buffers or carefully selecting gate types.
*   **Using Synchronous Design Principles:** In synchronous systems, all combinational logic outputs are fed into flip-flops. If the combinational logic has hazards, they occur during the setup or hold time window of the flip-flop. Synchronous design, with proper clocking and timing, can mask the effects of transient glitches. However, the underlying combinatorial logic might still have hazards that could lead to incorrect state transitions if timing is not managed carefully.
*   **Redundant Logic (Similar to Static Hazards):** Sometimes, adding redundant gates and logic paths can create alternative signal paths that cancel out transient effects. This is often the result of going back to a less minimized form of the logic.

**Practical Approach:**
For dynamic hazards, the primary strategy is to avoid multi-level logic implementations where possible, or if unavoidable, to ensure that all paths from input change to output settling have similar delays. This is difficult to guarantee without detailed delay analysis. In many digital design contexts, especially with synchronous systems, the impact of dynamic hazards is often mitigated by the clocking mechanism and the timing margins of the sequential elements.

---

## Practice Questions and Answers

**Question 1:**
What is the primary cause of hazards in combinational logic circuits?
**Answer:** Propagation delays through logic gates and interconnecting wires.

**Question 2:**
Differentiate between static-1 and static-0 hazards.
**Answer:**
*   **Static-1 Hazard:** An output that should remain at logic '1' momentarily glitches to '0' during an input change.
*   **Static-0 Hazard:** An output that should remain at logic '0' momentarily glitches to '1' during an input change.

**Question 3:**
Consider the function $F(A, B) = \sum m(0, 1, 3)$. Draw the K-map, find the minimal SOP expression, and identify potential static hazards in this minimal implementation.
**K-map:**
```
   B
A 0  1
-- --
0| 1  1| (0, 1)
1| 0  1| (3)
```
**Prime Implicants:**
*   $\bar{A}B$ (covers 1, 3)
*   $\bar{A}$ (covers 0, 1)

**Minimal SOP Expression:** $F = \bar{A}B + \bar{A}$.
This simplifies to $F = \bar{A}$ because $\bar{A}$ covers $\bar{A}B$.

**Analysis for Hazards:**
The minimal SOP expression is $\bar{A}$. This is a single-level implementation and is inherently hazard-free. Therefore, there are no static or dynamic hazards in this minimal implementation.

**Question 4:**
Consider the function $G(A, B, C) = \sum m(0, 1, 2, 4, 5, 6)$. Find the minimal SOP expression. Does this minimal expression have any static hazards? If so, how can they be eliminated?
**K-map:**
```
     BC
A   00 01 11 10
--- --- --- --- ---
0 | 1  1  1  1 | (0, 1, 3, 2) -> This row should be 1 1 1 1 if minterm 3 is included.
1 | 1  1  0  1 | (4, 5, 7, 6) -> Assuming the minterms given are correct.
```
Let's correct the K-map based on $G(A, B, C) = \sum m(0, 1, 2, 4, 5, 6)$.
```
     BC
A   00 01 11 10
--- --- --- --- ---
0 | 1  1  0  1 | (0, 1, -, 2)
1 | 1  1  0  1 | (4, 5, -, 6)
```
**Prime Implicants:**
*   $P_1 = \bar{A}\bar{B}$ (covers 0, 4)
*   $P_2 = \bar{A}B$ (covers 1, 5)
*   $P_3 = A\bar{B}$ (covers 4, 6)
*   $P_4 = \bar{A}\bar{C}$ (covers 0, 2)
*   $P_5 = A\bar{C}$ (covers 4, 6)

Let's group them for minimality:
*   $\bar{A}\bar{B}$ (covers 0, 4)
*   $\bar{A}B$ (covers 1, 5)
*   $A\bar{B}$ (covers 4, 6)
*   $\bar{A}\bar{C}$ (covers 0, 2)
*   $A\bar{C}$ (covers 4, 6)

The set of prime implicants is: $\bar{A}\bar{B}$, $\bar{A}B$, $A\bar{B}$, $\bar{A}\bar{C}$.
Essential prime implicants:
*   Minterm 1: Covered by $\bar{A}B$ only. $\bar{A}B$ is essential.
*   Minterm 2: Covered by $\bar{A}\bar{C}$ only. $\bar{A}\bar{C}$ is essential.
*   Minterm 3: Not in function.
*   Minterm 5: Covered by $\bar{A}B$ only. $\bar{A}B$ is essential.
*   Minterm 6: Covered by $A\bar{B}$ only. $A\bar{B}$ is essential.

Essential Prime Implicants: $\bar{A}B$, $\bar{A}\bar{C}$, $A\bar{B}$.
These cover: (1, 5), (0, 2), (4, 6).
Minterm 0 is covered by $\bar{A}\bar{C}$.
Minterm 1 is covered by $\bar{A}B$.
Minterm 2 is covered by $\bar{A}\bar{C}$.
Minterm 4 is covered by $A\bar{B}$.
Minterm 5 is covered by $\bar{A}B$.
Minterm 6 is covered by $A\bar{B}$.

Minterm 0 is covered by $\bar{A}\bar{C}$.
Minterm 4 is covered by $A\bar{B}$.
Is there any minterm covered by only one prime implicant?
Let's list all prime implicants and their coverage:
$P_1 = \bar{A}\bar{B}$ (covers 0, 4)
$P_2 = \bar{A}B$ (covers 1, 5)
$P_3 = A\bar{B}$ (covers 4, 6)
$P_4 = \bar{A}\bar{C}$ (covers 0, 2)
$P_5 = A\bar{C}$ (covers 4, 6)

Minimal SOP cover:
Select $P_2 (\bar{A}B)$ for 1, 5.
Select $P_4 (\bar{A}\bar{C})$ for 0, 2.
Select $P_3 (A\bar{B})$ for 4, 6.
This covers all minterms: 0, 1, 2, 4, 5, 6.

Minimal SOP expression: $G = \bar{A}B + \bar{A}\bar{C} + A\bar{B}$.

**Static Hazard Analysis:**
Check coverage of minterms by prime implicants:
*   Minterm 0: Covered by $P_1 (\bar{A}\bar{B})$ and $P_4 (\bar{A}\bar{C})$.
*   Minterm 1: Covered by $P_2 (\bar{A}B)$ only. (Potential static-1 hazard source)
*   Minterm 2: Covered by $P_4 (\bar{A}\bar{C})$ only. (Potential static-1 hazard source)
*   Minterm 4: Covered by $P_1 (\bar{A}\bar{B})$ and $P_3 (A\bar{B})$.
*   Minterm 5: Covered by $P_2 (\bar{A}B)$ only. (Potential static-1 hazard source)
*   Minterm 6: Covered by $P_3 (A\bar{B})$ only. (Potential static-1 hazard source)

Minterms 1, 2, 5, 6 are covered by only one prime implicant from the minimal set. This indicates potential static-1 hazards in this minimal SOP implementation.

**Eliminating Static Hazards:**
We need to add redundant prime implicants to cover minterms 1, 2, 5, 6.
*   For minterm 1 (covered by $P_2$): Find another prime implicant that covers 1. No other *minimal* prime implicant covers 1.
    However, consider the adjacencies:
    *   1 and 5 are covered by $P_2$.
    *   0 and 2 are covered by $P_4$.
    *   4 and 6 are covered by $P_3$.

    Let's follow the rule: "For each minterm covered by only one prime implicant, find another prime implicant that also covers this minterm."
    *   Minterm 1 (covered by $P_2$): We need another prime implicant that covers 1. $P_1$ covers 0,4. $P_3$ covers 4,6. $P_4$ covers 0,2. $P_5$ covers 4,6. There is no other *minimal* prime implicant that covers minterm 1. This implies we might need to consider non-minimal terms or a different set of prime implicants.
    Let's reconsider the prime implicants carefully.
    $P_1 = \bar{A}\bar{B}$ (0, 4)
    $P_2 = \bar{A}B$ (1, 5)
    $P_3 = A\bar{B}$ (4, 6)
    $P_4 = \bar{A}\bar{C}$ (0, 2)
    $P_5 = A\bar{C}$ (4, 6)

    All possible prime implicants: $\bar{A}\bar{B}$, $\bar{A}B$, $A\bar{B}$, $\bar{A}\bar{C}$, $A\bar{C}$.
    Essential prime implicants: $\bar{A}B$ (covers 1, 5), $\bar{A}\bar{C}$ (covers 0, 2), $A\bar{B}$ (covers 4, 6).
    The minterm 0 is covered by $\bar{A}\bar{C}$ and $\bar{A}\bar{B}$.
    The minterm 1 is covered by $\bar{A}B$.
    The minterm 2 is covered by $\bar{A}\bar{C}$.
    The minterm 4 is covered by $\bar{A}\bar{B}$ and $A\bar{B}$.
    The minterm 5 is covered by $\bar{A}B$.
    The minterm 6 is covered by $A\bar{B}$.

    Minterms 1 and 5 are covered only by $\bar{A}B$.
    Minterms 2 is covered only by $\bar{A}\bar{C}$.
    Minterms 4 and 6 are covered by $A\bar{B}$ and either $\bar{A}\bar{B}$ (for 4) or $A\bar{C}$ (for 6).

    The rule states: for minterms covered by *only one prime implicant*.
    Minterm 1: Covered by $P_2$.
    Minterm 5: Covered by $P_2$.
    Minterm 2: Covered by $P_4$.

    We need to add other prime implicants to cover these.
    *   For minterm 1 (covered by $P_2$): Add $P_1 (\bar{A}\bar{B})$ which covers 0,4. No. Add $P_3 (A\bar{B})$ which covers 4,6. No. Add $P_4 (\bar{A}\bar{C})$ which covers 0,2. No. Add $P_5 (A\bar{C})$ which covers 4,6. No.
    This implies that the set of prime implicants $\bar{A}\bar{B}$, $\bar{A}B$, $A\bar{B}$, $\bar{A}\bar{C}$ is not sufficient to remove all hazards. We might need to consider $A\bar{C}$ as well.

    Let's use the simpler rule: "Ensure every pair of adjacent 1s is covered by at least two prime implicants."
    *   Adjacency (0,1): Covered by $\bar{A}B$ and $\bar{A}\bar{C}$. (This is a pair of 1s, but 0 and 1 are adjacent). Both are covered by at least two unique prime implicants. $\bar{A}B$ covers 1, 5. $\bar{A}\bar{C}$ covers 0, 2. So (0,1) are covered by different implicants.

    Let's re-evaluate the minterms covered by only one PI:
    Minterm 1: $\bar{A}B$ only.
    Minterm 5: $\bar{A}B$ only.
    Minterm 2: $\bar{A}\bar{C}$ only.

    We need to ensure these are covered by at least one additional prime implicant.
    If we include all prime implicants: $G_{HF} = \bar{A}\bar{B} + \bar{A}B + A\bar{B} + \bar{A}\bar{C} + A\bar{C}$.
    Let's simplify this:
    $\bar{A}\bar{B} + \bar{A}B = \bar{A}(\bar{B}+B) = \bar{A}$.
    $A\bar{B} + A\bar{C}$ covers 4, 6.
    So, $G_{HF} = \bar{A} + A\bar{B} + A\bar{C}$.
    Let's check if this covers all minterms:
    $\bar{A}$ covers 0, 1, 2, 3. (Minterm 3 is not in the function, but this is ok).
    $A\bar{B}$ covers 4, 6.
    $A\bar{C}$ covers 4, 5.
    So, this covers: 0, 1, 2, 3, 4, 5, 6. This covers all required minterms (0,1,2,4,5,6) and includes minterm 3.
    This expression $G_{HF} = \bar{A} + A\bar{B} + A\bar{C}$ is a valid hazard-free implementation.

    The problem highlights the complexity of identifying and eliminating all hazards.

**Question 5:**
What is a dynamic hazard and in what type of circuit implementation is it most likely to occur?
**Answer:** A dynamic hazard occurs when an output that is supposed to change from one logic level to another glitches multiple times before settling to the final value. It is most likely to occur in multi-level logic implementations where different signal paths have significantly different propagation delays.

---

## Important Points to Remember

*   **Hazards are transient:** They are temporary glitches and do not affect the final steady-state output value. However, they can cause erroneous operation if they are sampled by a flip-flop at the wrong time.
*   **Propagation delay is the root cause:** Differences in delays through logic gates and wires are responsible for hazards.
*   **K-maps are useful for static hazards:** Static-1 hazards in SOP circuits are indicated by minterms covered by only one prime implicant. Static-0 hazards in POS circuits are indicated by maxterms covered by only one prime implicant.
*   **Eliminating static hazards:** Add redundant prime implicants to cover minterms that are covered by only one prime implicant. The goal is to ensure that for any input transition that causes a '1' output, if one implicant momentarily becomes '0', another implicant is still active to maintain the '1'.
*   **Dynamic hazards are more implementation-dependent:** They are often associated with multi-level logic and are harder to detect purely from a K-map.
*   **Hazard-free design:** The goal is to produce combinational logic that does not produce transient pulses when inputs change.
*   **Synchronous design helps:** While not eliminating hazards, the synchronous nature of clocked systems and proper timing can mitigate the effects of glitches by ensuring they don't coincide with clock edges.

---

## Alignment with Course Outcomes

*   **CO1: Analyze asynchronous and clocked synchronous sequential circuits:** Understanding hazards is crucial for analyzing the behavior of asynchronous circuits. For synchronous circuits, hazards in the combinational logic feeding into flip-flops can lead to metastable states or incorrect state transitions if not managed.
*   **CO2: Design hazard-free digital circuits:** This topic directly addresses the methods and techniques for designing combinational circuits that are free from static and dynamic hazards, ensuring reliable operation.
*   **CO3: Identify faults in digital circuits:** Hazards can be viewed as a type of transient fault that arises from design flaws (related to delays) rather than manufacturing defects. Identifying them is a step towards robust design.
*   **CO4: Apply VHDL programming in digital system design:** While this topic focuses on theoretical design principles, the concepts of hazard-free design translate directly into HDL coding practices. For instance, using synthesis tools that can infer hazard-free logic or writing HDL code that avoids certain structures known to cause hazards. Understanding hazards informs the choice of synthesis options and verification strategies.

---
