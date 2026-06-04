---
title: "Essential Hazards"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362fa"
status: "completed"
scrapedAt: "2026-05-23T16:21:07.889Z"
---
# Digital System Design - Module 3: Hazards

## Topic: Essential Hazards

### 1. Introduction to Hazards

**Definition:** A hazard in a digital circuit is an undesirable transient output that occurs when a change in input variables should ideally produce a smooth transition to a new steady-state output, but instead, the output briefly goes to an incorrect logic level before settling. These are particularly problematic in asynchronous sequential circuits, but can also occur in synchronous circuits if not properly accounted for.

**Context:** Hazards are a consequence of the physical limitations of logic gates, such as propagation delays. Different paths from input changes to the output can have different propagation delays, leading to temporary discrepancies in the logic states.

**Types of Hazards:**
*   **Static Hazards:** Occur when the output should remain constant (either 0 or 1) during a change in input, but it momentarily changes to the opposite level.
*   **Dynamic Hazards:** Occur when the output should transition only once from 0 to 1 or 1 to 0, but it transitions multiple times before settling to the final correct value.

This module focuses on **Essential Hazards**, which are a specific type of static hazard that cannot be eliminated by standard two-level minimization techniques alone.

### 2. Essential Hazards

**Definition:** An essential hazard is a hazard that will occur regardless of the gate delays in the circuit, as long as certain conditions are met regarding the input changes and the circuit's logic structure. It's an inherent property of certain logic implementations.

**How Essential Hazards Arise:** Essential hazards are caused by situations where an input variable changes, and the intended output should remain constant, but the logic function is implemented in such a way that *all* paths from the changing input to the output are momentarily affected, leading to a temporary incorrect output.

**Key Characteristic:** Essential hazards are often associated with **multilevel logic implementations** or specific gate arrangements where a single input change can affect multiple terms in a sum-of-products or product-of-sums expression in a way that leads to a race condition.

**Example Scenario (Conceptual):**
Consider a circuit where an input 'A' changes from 0 to 1. The output 'Y' should remain 1.
If the logic is implemented as $Y = A'B + AB'$, this is an XOR function. If 'B' is also changing or constant, an essential hazard could manifest.

Let's consider a specific case related to **static-1 hazards**.

**Static-1 Hazard Example:**
Consider a function $F(A, B, C) = AB + BC$.
Let's analyze the transition where A changes from 0 to 1, while B and C are held constant at B=1 and C=1.

*   **Initial State:** A=0, B=1, C=1.
    *   $F = (0)(1) + (1)(1) = 0 + 1 = 1$. (Correct)
*   **Input Change:** A changes from 0 to 1.
*   **Expected Output:** F should remain 1.

Let's examine the logic implementation $F = AB + BC$:

Assume propagation delays for the AND gates (delays $d_1$, $d_2$) and the OR gate (delay $d_3$).

*   **Term AB:**
    *   When A changes from 0 to 1, and B=1, the input to the first AND gate changes from (0, 1) to (1, 1).
    *   The output of the AB AND gate will transition from $0 \times 1 = 0$ to $1 \times 1 = 1$. This transition takes $d_1$ time.
*   **Term BC:**
    *   When A changes, this term (BC) is unaffected as B and C are constant.
    *   The output of the BC AND gate remains $1 \times 1 = 1$. This output is available at time 0 (relative to the input change).

**Analyzing the Output (Y):** $Y = \text{output of AB} + \text{output of BC}$

*   **Before A changes:** Output of AB = 0, Output of BC = 1. Y = 0 + 1 = 1.
*   **Immediately after A changes (assuming AB path is faster):**
    *   Output of AB becomes 1 (after $d_1$).
    *   Output of BC is 1.
    *   Y = 1 + 1 = 1.
*   **Potential Issue:** What if the OR gate receives the signal from BC (which is 1) and then the signal from AB (which becomes 1 after $d_1$)?
    *   If the OR gate receives the constant 1 from BC, its output is 1.
    *   When the output of AB becomes 1 after delay $d_1$, the OR gate will have inputs (1, 1), and its output remains 1.

This specific example ($AB+BC$) does *not* directly show an essential hazard in the standard sense where the output *should not* change. The function itself changes value if you were to implement it as sum of minterms without considering the specific transition.

**Let's refine the understanding of Essential Hazards for Static-1 and Static-0:**

**Essential Static-1 Hazard:**
*   **Condition:** A circuit exhibits an essential static-1 hazard if there exists a set of input values $X$ such that when a single input variable $x_i$ changes, the output $F$ should remain logic 1, but due to the logic structure, the output momentarily goes to logic 0.
*   **Cause:** This happens when a product term that is 1 due to a specific input combination becomes 0, and there is no other product term that remains 1 to keep the output at 1.
*   **Textbook Reference:** Givone (2002) discusses static hazards in Chapter 5. Mano & Ciletti (2018) covers hazards in Chapter 4. Wakerly (2008) dedicates a section to hazards.

**Example of Essential Static-1 Hazard:**
Consider the function $F(A, B, C) = A'B + BC$.
Let's analyze the transition where **B changes from 0 to 1**, while A=0 and C=1.

*   **Initial State:** A=0, B=0, C=1.
    *   $F = (0)'(0) + (0)(1) = (1)(0) + 0 = 0 + 0 = 0$. (Correct)
*   **Input Change:** B changes from 0 to 1. A=0, C=1.
*   **Expected Output:** F should remain 0.

Let's examine the logic implementation $F = A'B + BC$:

Assume propagation delays:
*   AND gate 1 (for A'B): delay $d_1$
*   AND gate 2 (for BC): delay $d_2$
*   OR gate: delay $d_3$
*   NOT gate (for A'): delay $d_4$

**Analyzing the Output (Y):** $Y = \text{output of A'B} + \text{output of BC}$

*   **Before B changes (B=0):**
    *   Input to AND 1: A'=1, B=0. Output of AND 1 = 0.
    *   Input to AND 2: B=0, C=1. Output of AND 2 = 0.
    *   Y = 0 + 0 = 0.

*   **During the transition of B from 0 to 1 (A=0, C=1):**

    *   **Path 1 (A'B):**
        *   A' is 1.
        *   B changes from 0 to 1.
        *   Input to AND 1 changes from (1, 0) to (1, 1).
        *   Output of AND 1 changes from 0 to 1 after delay $d_1$.

    *   **Path 2 (BC):**
        *   B changes from 0 to 1.
        *   C is 1.
        *   Input to AND 2 changes from (0, 1) to (1, 1).
        *   Output of AND 2 changes from 0 to 1 after delay $d_2$.

    *   **Output Y:** $Y = (\text{output of A'B}) + (\text{output of BC})$
        *   At the instant B changes, both AND gates might see a change.
        *   Consider the worst-case scenario for a hazard:
            *   When B changes from 0 to 1, the input to AND 1 (A'B) might transiently become '1' (if it takes time for B to reach the input of AND 1) while the input to AND 2 (BC) is still '0'.
            *   Let's re-evaluate the function and the intended transition carefully. The function is $F = A'B + BC$.
            *   The transition is A=0, C=1, and B changes from 0 to 1.
            *   Initial: $F = (0)'(0) + (0)(1) = 0 + 0 = 0$.
            *   Final: $F = (0)'(1) + (1)(1) = 1 + 1 = 1$.
            *   The output *should* transition from 0 to 1.

**Where is the Essential Hazard?**
The term "essential hazard" is more strongly associated with situations where the output *should not* change, but does. Let's look at a standard example of static hazard that can be essential.

Consider the function $F(A, B, C) = A'B + AC$.
Let's analyze the transition where **A changes from 0 to 1**, while B=0 and C=1.

*   **Initial State:** A=0, B=0, C=1.
    *   $F = (0)'(0) + (0)(1) = (1)(0) + 0 = 0 + 0 = 0$. (Correct)
*   **Input Change:** A changes from 0 to 1. B=0, C=1.
*   **Expected Output:** F should remain 0.

Logic implementation: $F = A'B + AC$.

*   **Path 1 (A'B):**
    *   A changes from 0 to 1, so A' changes from 1 to 0.
    *   B is 0.
    *   Input to AND 1 changes from (1, 0) to (0, 0).
    *   Output of AND 1 changes from 0 to 0. (No change contributing to hazard here).

*   **Path 2 (AC):**
    *   A changes from 0 to 1.
    *   C is 1.
    *   Input to AND 2 changes from (0, 1) to (1, 1).
    *   Output of AND 2 changes from 0 to 1 after delay $d_2$.

*   **Output Y:** $Y = (\text{output of A'B}) + (\text{output of AC})$
    *   Output of A'B is 0.
    *   Output of AC becomes 1 after delay $d_2$.
    *   Y = 0 + 1 = 1.

In this case, the output correctly transitions from 0 to 1. This isn't an essential static hazard in the sense of an unwanted transient change *while the output should be constant*.

**Revisiting the Definition and Cause:**

**Essential Static Hazard (Static-1 Hazard):** Occurs when a single input change causes the output to momentarily go from 1 to 0, even though it should remain 1. This typically arises in sum-of-products (SOP) forms when a change in input causes a term that was 1 to become 0, and the other term(s) that keep the function 1 are momentarily also 0.

Consider $F(A, B, C) = AB + B'C$.
Transition: **B changes from 1 to 0**, while A=1 and C=1.

*   **Initial State:** A=1, B=1, C=1.
    *   $F = (1)(1) + (1)'(1) = 1 + (0)(1) = 1 + 0 = 1$. (Correct)
*   **Input Change:** B changes from 1 to 0. A=1, C=1.
*   **Expected Output:** F should remain 1.

Logic implementation: $F = AB + B'C$.

*   **Path 1 (AB):**
    *   A is 1.
    *   B changes from 1 to 0.
    *   Input to AND 1 changes from (1, 1) to (1, 0).
    *   Output of AND 1 changes from 1 to 0 after delay $d_1$.

*   **Path 2 (B'C):**
    *   B changes from 1 to 0, so B' changes from 0 to 1.
    *   C is 1.
    *   Input to AND 2 changes from (0, 1) to (1, 1).
    *   Output of AND 2 changes from 0 to 1 after delay $d_2$.

*   **Output Y:** $Y = (\text{output of AB}) + (\text{output of BC})$
    *   Output of AB goes from 1 to 0 (after $d_1$).
    *   Output of B'C goes from 0 to 1 (after $d_2$).

**Scenario of Hazard:**
Let's assume $d_1 > d_2$.
1.  B changes.
2.  After $d_2$, the output of B'C becomes 1. The OR gate receives 1 and output is 1.
3.  After $d_1$, the output of AB becomes 0. The OR gate receives (0, 1), output remains 1. (No hazard in this sub-case).

Let's assume $d_2 > d_1$.
1.  B changes.
2.  After $d_1$, the output of AB becomes 0. The OR gate receives 0.
3.  After $d_2$, the output of B'C becomes 1. The OR gate receives (0, 1), output becomes 1. (No hazard in this sub-case either).

The confusion often arises from how the terms are implemented and when signals arrive at the OR gate.

**The "Essential" Part:**
An essential hazard is characterized by the fact that no matter how you choose your gate delays, the hazard can still occur. This is because the hazard is inherent to the structure of the logic, specifically the implicants used in the minimized sum-of-products form.

In SOP form, a static-1 hazard occurs if there's a change in input variables that cause a minterm to change from 1 to 0, and all other minterms that cover this state are also 0 at that instant.

**Covering All Input Combinations:**
To prevent static hazards in two-level SOP circuits, each product term must cover a minterm. If a transition between two adjacent input states results in the output changing, and this transition is not covered by a single product term in the SOP expression, then a static hazard may occur.

Consider the Karnaugh map (K-map) for $F(A, B, C) = AB + B'C$:

      BC
    A 00 01 11 10
    0 -- -- -- --
    1 1  1  1  0  (AB is 1 when A=1, B=1)
      -- -- -- --
    0 0  1  1  0  (B'C is 1 when B=0, C=1)

Let's look at the specific transition where B changes from 1 to 0, with A=1 and C=1.
*   Input state: A=1, B=1, C=1. F = 1. (Covered by AB)
*   Input state: A=1, B=0, C=1. F = 1. (Covered by B'C)

The K-map shows that the transition from (1,1,1) to (1,0,1) involves the input states where the function F should be 1.
The SOP form $AB + B'C$ covers these states.

The issue arises because the SOP form $AB + B'C$ can be simplified by grouping 1s.
If we group AB (cells 111 and 110), and B'C (cells 001 and 011).

Let's re-evaluate the transition: B changes from 1 to 0, with A=1 and C=1.
*   State 1: (A=1, B=1, C=1). Term AB = 1. Term B'C = (1)'(1) = 0. F = 1 + 0 = 1.
*   State 2: (A=1, B=0, C=1). Term AB = 0. Term B'C = (0)'(1) = 1. F = 0 + 1 = 1.

The transition is between two states where F=1.
The problem is that in the transition from B=1 to B=0, both terms AB and B'C are affected.
*   Term AB goes from 1 to 0.
*   Term B'C goes from 0 to 1.

If the term AB disappears (becomes 0) *before* the term B'C becomes 1, the OR gate will momentarily see inputs (0, 0), resulting in an output of 0, a static-1 hazard. This is precisely what happens if the delay through the AB path is shorter than the delay through the B'C path.

**Why is it "Essential"?**
In a two-level SOP implementation, the product terms directly correspond to implicants that cover groups of 1s in the K-map. If a transition occurs between two adjacent states that are covered by *different* prime implicants in the minimal SOP form, and if these two prime implicants are the *only* ones that cover these respective states for that particular transition, then it's an essential hazard.

In our example $F = AB + B'C$:
*   For state (1,1,1), only AB covers it among the prime implicants.
*   For state (1,0,1), only B'C covers it among the prime implicants.

When B changes from 1 to 0 (keeping A=1, C=1), we are transitioning between these two states.
The SOP form requires *both* terms to contribute to the output. If the circuit implementation makes one term disappear before the other appears, we get a glitch.

**To eliminate essential static hazards, we need to add redundant product terms (implicants) that cover the critical transition.** These redundant terms are often identified by looking at adjacent 1s in the K-map that are covered by only one prime implicant.

**K-map for $F = AB + B'C$ with redundant covering:**

      BC
    A 00 01 11 10
    0 -- -- -- --
    1 1  1  1  0   (AB covers 111, 110)
      -- -- -- --
    0 0  1  1  0   (B'C covers 001, 011)

Consider the transition between (1,1,1) and (1,0,1).
*   (1,1,1): Covered by AB.
*   (1,0,1): Covered by B'C.

In the K-map, the states (1,1,1) and (1,0,1) are adjacent (differ by B).
The current SOP implementation uses two separate terms for these adjacent 1s.
The minimal SOP is $AB + B'C$.

To cover the transition between (1,1,1) and (1,0,1) and prevent the hazard, we need a product term that spans across these two cells. This would be the term $AC$.

So, a hazard-free implementation would be $F_{hazard-free} = AB + B'C + AC$.

Let's re-analyze the transition with $F = AB + B'C + AC$:
Transition: B changes from 1 to 0, with A=1 and C=1.

*   **Initial State:** A=1, B=1, C=1.
    *   $AB = (1)(1) = 1$
    *   $B'C = (1)'(1) = 0$
    *   $AC = (1)(1) = 1$
    *   $F = 1 + 0 + 1 = 1$. (Correct)

*   **Input Change:** B changes from 1 to 0. A=1, C=1.

*   **Analysis of terms:**
    *   **Term AB:** A=1, B changes from 1 to 0. Output goes from 1 to 0 (after $d_1$).
    *   **Term B'C:** B changes from 1 to 0, so B' changes from 0 to 1. C=1. Output goes from 0 to 1 (after $d_2$).
    *   **Term AC:** A=1, C=1. This term is unaffected by the change in B. Its output remains 1.

*   **Output Y:** $Y = (\text{output of AB}) + (\text{output of B'C}) + (\text{output of AC})$

    *   **Case $d_1 < d_2$:**
        *   Initially: AB=1, B'C=0, AC=1. Y = 1+0+1 = 1.
        *   After $d_1$: AB becomes 0. Inputs are (0, 0, 1). Y = 0+0+1 = 1.
        *   After $d_2$: B'C becomes 1. Inputs are (0, 1, 1). Y = 0+1+1 = 1.
        *   No glitch.

    *   **Case $d_2 < d_1$:**
        *   Initially: AB=1, B'C=0, AC=1. Y = 1+0+1 = 1.
        *   After $d_2$: B'C becomes 1. Inputs are (1, 1, 1). Y = 1+1+1 = 1.
        *   After $d_1$: AB becomes 0. Inputs are (0, 1, 1). Y = 0+1+1 = 1.
        *   No glitch.

By adding the redundant term AC, we ensure that the output of the OR gate is always 1 during the transition because at least one of the terms (AB or AC) remains 1 throughout the transition.

**Essential Static-0 Hazard:**
*   **Condition:** A circuit exhibits an essential static-0 hazard if there exists a set of input values $X$ such that when a single input variable $x_i$ changes, the output $F$ should remain logic 0, but due to the logic structure, the output momentarily goes to logic 1.
*   **Cause:** This typically happens in product-of-sums (POS) forms when a change in input causes a term that was 0 to become 1, and all other terms that keep the function 0 are momentarily also 1.

**Example of Essential Static-0 Hazard (Conceptual):**
Consider a POS function that simplifies to $(A+B)(A'+C)$.
Let's analyze a transition where the output should remain 0.
Suppose the terms are $(A+B)$ and $(A'+C)$.

Consider a transition where A changes from 1 to 0, and the output should remain 0.
Let A=1, B=0, C=0.
$F = (1+0)(1'+0) = (1)(0+0) = (1)(0) = 0$.

Let A=0, B=0, C=0.
$F = (0+0)(0'+0) = (0)(1+0) = (0)(1) = 0$.

The function $F = (A+B)(A'+C)$ can be expanded to $F = AA' + AC + BA' + BC = 0 + AC + BA' + BC = AC + A'B + BC$. This is the SOP form we saw earlier.

Let's use the POS form for a clearer example of static-0 hazards.
Consider $F(A, B) = (A'+B)(A+B')$. This is an XOR function.
Let's analyze the transition A=0 to A=1, with B=0.
*   Initial: A=0, B=0. $F = (0'+0)(0+0') = (1)(0) = 0$.
*   Final: A=1, B=0. $F = (1'+0)(1+0') = (0)(1) = 0$.
*   The output should remain 0.

Implementation: $F = (A'+B)(A+B')$

*   Term 1: $(A'+B)$. A changes 0->1, A' changes 1->0. B=0.
    *   Input to first OR gate: A' (1->0), B (0).
    *   Output of first OR gate: $(A'+B)$ changes from $(1+0)=1$ to $(0+0)=0$ after delay $d_1$.

*   Term 2: $(A+B')$. A changes 0->1. B=0, B'=1->0.
    *   Input to second OR gate: A (0->1), B' (1->0).
    *   Output of second OR gate: $(A+B')$ changes from $(0+1)=1$ to $(1+0)=1$ after delay $d_2$.

*   Final AND gate: Inputs are outputs of the two OR gates.
    *   Output Y = (output of Term 1) * (output of Term 2).

    *   **Case $d_1 < d_2$:**
        *   Initially: Term 1 = 1, Term 2 = 1. Y = 1 * 1 = 1. (Wait, my initial states were wrong. Let's re-evaluate).

Re-evaluating: $F(A, B) = (A'+B)(A+B')$.
Transition: A changes from 0 to 1, with B=0.

*   **State 1:** A=0, B=0.
    *   $A'+B = (0)' + 0 = 1 + 0 = 1$.
    *   $A+B' = 0 + (0)' = 0 + 1 = 1$.
    *   $F = (1)(1) = 1$. (The output should be 1, not 0).

Let's pick a transition where the output should remain 0.
Consider $F(A, B) = (A'+B)(A+B')$.
Transition: A changes from 0 to 1, with B=1.

*   **State 1:** A=0, B=1.
    *   $A'+B = (0)' + 1 = 1 + 1 = 1$.
    *   $A+B' = 0 + (1)' = 0 + 0 = 0$.
    *   $F = (1)(0) = 0$. (Correct)

*   **State 2:** A=1, B=1.
    *   $A'+B = (1)' + 1 = 0 + 1 = 1$.
    *   $A+B' = 1 + (1)' = 1 + 0 = 1$.
    *   $F = (1)(1) = 1$. (The output should transition from 0 to 1).

This is not a static hazard example. The issue with essential hazards is subtle and related to the specific minterm/maxterm coverage.

**According to Wakerly (2008), essential hazards are associated with single-input changes that cause a change in output for *all* possible delays.**

A common way to illustrate an essential static-1 hazard is a single-gate implementation of a function.
Example: $F(A, B, C) = A + B + C$.
Transition: A=0, B=0, C changes from 0 to 1. Expected output F=1.

If implemented directly as $F = A+B+C$:
*   A=0, B=0, C=0 => F=0.
*   A=0, B=0, C=1 => F=1.
*   The output should transition from 0 to 1.

Let's consider the transition where the output should *stay* 1.
A=1, B=0, C=0. F=1.
A=1, B=0, C changes from 0 to 1.
*   Initial: A=1, B=0, C=0. $F = 1+0+0 = 1$.
*   Final: A=1, B=0, C=1. $F = 1+0+1 = 1$.
*   Expected Output: F remains 1.

Logic: $F = A+B+C$. Let's implement this with a 3-input OR gate.
The input C changes from 0 to 1.
If the gate has a propagation delay ($d$), the output will follow the change. This is expected.

**The "Essential" nature usually implies a problem with minimal SOP/POS forms.**

Consider the function $F(A,B,C,D) = \sum m(1,3,5,7,9,11,13,15)$ (a checkerboard pattern, which is $(A \oplus B) \oplus (C \oplus D)$ or similar, but for simplicity, let's assume a different function that yields an essential hazard).

**A more robust example of Essential Static-1 Hazard:**
Function $F = A'B + AB'$. This is XOR.
Let's consider a sum of products that doesn't directly implement XOR but is equivalent.
For example, if F is derived from a K-map where adjacent 1s are covered by different implicants.

Consider the K-map for $F(W,X,Y,Z) = WX + XY$.
Assume W=1, Y=1, and X changes from 0 to 1.

*   **Initial State:** W=1, X=0, Y=1, Z=don't care.
    *   $WX = (1)(0) = 0$.
    *   $XY = (0)(1) = 0$.
    *   $F = 0 + 0 = 0$. (Correct)

*   **Input Change:** X changes from 0 to 1. W=1, Y=1, Z=don't care.
*   **Expected Output:** F should remain 0.

Logic implementation: $F = WX + XY$.

*   **Term WX:** W=1, X changes 0->1.
    *   Output of WX changes from (1)(0)=0 to (1)(1)=1 after delay $d_1$.

*   **Term XY:** X changes 0->1, Y=1.
    *   Output of XY changes from (0)(1)=0 to (1)(1)=1 after delay $d_2$.

*   **Output Y:** $F = (\text{output of WX}) + (\text{output of XY})$.

    *   **Case $d_1 < d_2$:**
        *   Initially: WX=0, XY=0. F=0.
        *   After $d_1$: WX becomes 1. Inputs to OR: (1, 0). F = 1+0 = 1. **Hazard!**
        *   After $d_2$: XY becomes 1. Inputs to OR: (1, 1). F = 1+1 = 1.

    *   **Case $d_2 < d_1$:**
        *   Initially: WX=0, XY=0. F=0.
        *   After $d_2$: XY becomes 1. Inputs to OR: (0, 1). F = 0+1 = 1. **Hazard!**
        *   After $d_1$: WX becomes 1. Inputs to OR: (1, 1). F = 1+1 = 1.

In this case, the function $F=WX+XY$ has an essential static-1 hazard when X changes from 0 to 1, while W=1 and Y=1. The output should remain 0, but it momentarily glitches to 1.

**Why Essential?**
The terms WX and XY are prime implicants covering adjacent cells in the K-map.
K-map for $F = WX + XY$:
      YZ
    WX 00 01 11 10
    00 -- -- -- --
    01 -- -- -- --
    11 1  1  1  1  (WX covers 1100, 1101, 1111, 1110)
    10 1  1  1  1  (XY covers 0100, 0101, 0111, 0110)
    This K-map is not for WX+XY.

Let's draw a K-map for $F = WX + XY$:
Consider W,X,Y,Z.
Let's simplify the analysis to 3 variables for clarity.
$F(X, Y, Z) = XY + YZ$.
Transition: Y changes from 0 to 1, with X=1, Z=1.

*   **Initial State:** X=1, Y=0, Z=1.
    *   $XY = (1)(0) = 0$.
    *   $YZ = (0)(1) = 0$.
    *   $F = 0 + 0 = 0$. (Correct)

*   **Input Change:** Y changes from 0 to 1. X=1, Z=1.
*   **Expected Output:** F should remain 0.

Logic implementation: $F = XY + YZ$.

*   **Term XY:** X=1, Y changes 0->1.
    *   Output of XY changes from (1)(0)=0 to (1)(1)=1 after delay $d_1$.

*   **Term YZ:** Y changes 0->1, Z=1.
    *   Output of YZ changes from (0)(1)=0 to (1)(1)=1 after delay $d_2$.

*   **Output Y:** $F = (\text{output of XY}) + (\text{output of YZ})$.

    *   **Case $d_1 < d_2$:**
        *   Initially: XY=0, YZ=0. F=0.
        *   After $d_1$: XY becomes 1. Inputs to OR: (1, 0). F = 1+0 = 1. **Hazard!**
        *   After $d_2$: YZ becomes 1. Inputs to OR: (1, 1). F = 1+1 = 1.

    *   **Case $d_2 < d_1$:**
        *   Initially: XY=0, YZ=0. F=0.
        *   After $d_2$: YZ becomes 1. Inputs to OR: (0, 1). F = 0+1 = 1. **Hazard!**
        *   After $d_1$: XY becomes 1. Inputs to OR: (1, 1). F = 1+1 = 1.

This is an essential static-1 hazard. The function $F=XY+YZ$ has this hazard for the transition X=1, Z=1, Y: 0->1.

**Elimination of Essential Hazards:**
Essential hazards are eliminated by adding redundant prime implicants to the SOP or POS expression. These redundant terms cover the transitions that cause the hazards. In a K-map, this means adding implicants that span across adjacent cells where the hazard occurs. The goal is to ensure that during any input transition, at least one product term (for SOP) or sum term (for POS) is always evaluated correctly to maintain the desired output state.

**Example of eliminating the hazard in $F = XY + YZ$ (for X=1, Z=1, Y: 0->1):**
The critical states are (X=1, Y=0, Z=1) and (X=1, Y=1, Z=1).
In the K-map, these are adjacent cells.
The current SOP uses one implicant for each state.
We need a term that covers both these states. The term $XZ$ covers both.

So, the hazard-free implementation is $F_{hazard-free} = XY + YZ + XZ$.

Let's re-analyze the transition with $F = XY + YZ + XZ$:
Transition: Y changes from 0 to 1, with X=1, Z=1.

*   **Initial State:** X=1, Y=0, Z=1.
    *   $XY = (1)(0) = 0$.
    *   $YZ = (0)(1) = 0$.
    *   $XZ = (1)(1) = 1$.
    *   $F = 0 + 0 + 1 = 1$. (Wait, the initial state output should be 0. My K-map interpretation for $F=XY+YZ$ was incorrect).

Let's re-draw K-map for $F(X,Y,Z) = XY + YZ$:
      YZ
    X 00 01 11 10
    0 -- -- -- --
    1 0  0  1  0  (XY is 1 for X=1, Y=1)
      -- -- -- --
    0 0  1  1  0  (YZ is 1 for Y=1, Z=1 and Y=1, Z=0)

Correct K-map for $F = XY + YZ$:
      YZ
    X 00 01 11 10
    0 -- -- -- --
    1 0  0  1  0   (Row 1: X=1)
      -- -- -- --
    0 0  1  1  0   (Row 0: X=0)

The problematic transition was X=1, Z=1, and Y changes from 0 to 1.
*   State: X=1, Y=0, Z=1. (Cell 101 in K-map). Value is 0.
*   State: X=1, Y=1, Z=1. (Cell 111 in K-map). Value is 1.

The output *should* transition from 0 to 1.
My definition of the hazard was wrong for this example.
Let's revisit the example $F = AB + B'C$ with transition B: 1->0, A=1, C=1.
*   Initial State: A=1, B=1, C=1. $F = (1)(1) + (1)'(1) = 1 + 0 = 1$.
*   Final State: A=1, B=0, C=1. $F = (1)(0) + (0)'(1) = 0 + 1 = 1$.
*   Expected Output: F remains 1.

The hazard occurs because term AB goes from 1 to 0, and term B'C goes from 0 to 1. If AB disappears before B'C appears, the output glitches to 0.

**K-map for $F = AB + B'C$:**
      BC
    A 00 01 11 10
    0 -- -- -- --
    1 0  0  1  1   (AB covers 111, 110)
      -- -- -- --
    0 0  1  1  0   (B'C covers 001, 011)

Transition: B changes from 1 to 0, with A=1, C=1.
*   State: A=1, B=1, C=1. (Cell 111). Value is 1. Covered by AB.
*   State: A=1, B=0, C=1. (Cell 101). Value is 1. Covered by B'C.

The transition is between two adjacent 1s (111 and 101).
The SOP $AB + B'C$ covers these two 1s using separate prime implicants.
This separation leads to the essential static-1 hazard.

Hazard-free form: $F = AB + B'C + AC$.
The term AC covers both 111 and 101.
Let's re-analyze the transition with $F = AB + B'C + AC$:
Transition: B changes from 1 to 0, with A=1, C=1.

*   **Initial State:** A=1, B=1, C=1.
    *   $AB = (1)(1) = 1$.
    *   $B'C = (1)'(1) = 0$.
    *   $AC = (1)(1) = 1$.
    *   $F = 1 + 0 + 1 = 1$.

*   **Input Change:** B changes from 1 to 0. A=1, C=1.

*   **Analysis of terms:**
    *   **Term AB:** A=1, B changes 1->0. Output goes from 1 to 0 (after $d_1$).
    *   **Term B'C:** B changes 1->0, B' changes 0->1. C=1. Output goes from 0 to 1 (after $d_2$).
    *   **Term AC:** A=1, C=1. Unaffected. Output remains 1.

*   **Output Y:** $F = (\text{output of AB}) + (\text{output of B'C}) + (\text{output of AC})$.
    *   At all times, AC is 1. So the OR gate will always have at least one input as 1, preventing a glitch.

**Summary of Essential Hazards:**
*   They are inherent to the logic structure when minimal SOP/POS forms are used.
*   They occur when a single input change causes the output to momentarily flip state, while it should have remained constant.
*   Essential static-1 hazards are found in SOP forms, and essential static-0 hazards in POS forms.
*   They can be eliminated by adding redundant prime implicants that cover the critical input transitions. This is equivalent to adding consensus terms or using a more complete covering of the K-map.

### 3. Static Hazards vs. Essential Hazards

*   **Static Hazard:** A transient change in output when it should remain constant. Can be static-0 or static-1.
*   **Essential Hazard:** A static hazard that *cannot* be eliminated by simply changing gate delays or reorganizing the logic using the same set of prime implicants. It's inherent to the choice of minimal cover.
*   **Relationship:** Essential hazards are a *type* of static hazard that requires a modification of the logic function (adding redundant terms) for elimination, rather than just a covering or redundant gate logic.

### 4. Dynamic Hazards

**Definition:** A dynamic hazard occurs when the output of a logic circuit is supposed to change from 0 to 1 (or 1 to 0) only once, but instead, it changes multiple times (e.g., 0 -> 1 -> 0 -> 1) before settling to its final correct value.

**Cause:** Dynamic hazards are caused by a combination of different propagation delays through multiple logic levels in a circuit, particularly in multilevel logic. A specific input change might trigger multiple changes in intermediate signals, and the timing of these changes arriving at the final output gate can cause spurious transitions.

**Example Scenario:**
Consider a circuit implementing $F = (A+B)(C+D)$.
This is a two-level SOP.
Let's look at $F = ABC + ABD + ACD + BCD$.
This is a sum of four product terms.
Consider the transition where A changes from 0 to 1, while B=1, C=1, D=1.

*   **Initial State:** A=0, B=1, C=1, D=1.
    *   $ABC = (0)(1)(1) = 0$.
    *   $ABD = (0)(1)(1) = 0$.
    *   $ACD = (0)(1)(1) = 0$.
    *   $BCD = (1)(1)(1) = 1$.
    *   $F = 0 + 0 + 0 + 1 = 1$. (Correct)

*   **Input Change:** A changes from 0 to 1. B=1, C=1, D=1.
*   **Expected Output:** F should remain 1.

Let's look at the terms:
*   $ABC$: A(0->1), B=1, C=1. Term changes 0 -> 1.
*   $ABD$: A(0->1), B=1, D=1. Term changes 0 -> 1.
*   $ACD$: A(0->1), C=1, D=1. Term changes 0 -> 1.
*   $BCD$: B=1, C=1, D=1. Term remains 1.

Let's assume different delays for the 3-input AND gates and the 4-input OR gate.
If the transition of A causes the first three terms to change their state and arrival times at the OR gate, and if the BCD term also has a delay, it's possible for the OR gate to momentarily see inputs that cause it to transition multiple times.

For example, if the AND gates have delays $d_{ABC}, d_{ABD}, d_{ACD}$ and the OR gate has delay $d_{OR}$.
If BCD (which is 1) arrives at OR gate at time $t_0$.
If $d_{ABC}$ is very short, ABC becomes 1. OR input (1,0,0,1) -> output 1.
If $d_{ABD}$ is slightly longer, ABD becomes 1. OR input (1,1,0,1) -> output 1.
If $d_{ACD}$ is even longer, ACD becomes 1. OR input (1,1,1,1) -> output 1.

A dynamic hazard occurs when intermediate signals have delays that cause the final output to oscillate.
For $F = ABC + ABD + ACD + BCD$, the transition X: 0->1 (with Y=1, Z=1, W=1) caused terms WX, XY, XZ to change from 0 to 1. If W=1, X:0->1, Y=1, Z=1.
$F = WX + XY + XZ$.

Let's re-examine the example $F=XY+YZ+XZ$ and transition Y:0->1, X=1, Z=1.
*   Initial: X=1, Y=0, Z=1.
    *   $XY = 1*0 = 0$
    *   $YZ = 0*1 = 0$
    *   $XZ = 1*1 = 1$
    *   $F = 0+0+1 = 1$. (Initial output is 1, not 0 as I assumed earlier).

The problem statement implies we are focusing on Essential Hazards. Dynamic hazards are distinct and require different mitigation techniques (like adding redundant terms or using different logic structures).

### 5. Mitigation of Essential Hazards

The primary method for eliminating essential hazards is by **adding redundant prime implicants** to the SOP or POS expression. This is done by identifying critical input transitions in the K-map and adding implicants that cover these transitions.

*   **For Static-1 Hazards:** Add prime implicants that cover adjacent 1s in the K-map which are currently covered by different prime implicants.
*   **For Static-0 Hazards:** Add prime implicants (in POS context, this means adding sum terms) that cover adjacent 0s (maxterms) in the K-map which are currently covered by different sum terms.

**Process:**
1.  Generate the minimal SOP (or POS) expression for the desired function.
2.  Identify input transitions that could cause a static hazard. This often occurs when a change in a single input variable affects multiple product terms in a way that they all momentarily become 0.
3.  Examine the K-map. If two adjacent cells corresponding to the critical transition are covered by different prime implicants, and these are the only implicants covering those specific states for that transition, an essential hazard exists.
4.  Add a new prime implicant that covers both these problematic adjacent cells. This new implicant will be redundant in the minimal sum, but it ensures that the circuit output remains stable during the transition.

**Textbook Cross-Reference:**
*   Mano & Ciletti (2018), Chapter 4, discusses hazard elimination by adding redundant implicants.
*   Wakerly (2008) provides detailed methods for hazard detection and elimination, emphasizing K-map analysis for identifying necessary redundant terms.
*   Givone (2002) also covers hazard elimination by adding terms to cover critical races.

### 6. Practice Questions and Exercises

**Question 1:**
Consider the function $F(A, B, C) = AB + A'C$. Does this function have an essential static-1 hazard? If so, for which input transition? Provide a hazard-free implementation.

**Answer 1:**
Let's analyze the function $F(A, B, C) = AB + A'C$.
We need to look for transitions where the output should remain 1, but might glitch to 0.

Consider the K-map for $F = AB + A'C$:
      BC
    A 00 01 11 10
    0 0  0  1  1   (A'C covers 011, 010)
      -- -- -- --
    1 0  0  1  0   (AB covers 111, 110)

The transition between (A=0, B=0, C=1) and (A=1, B=0, C=1) involves adjacent cells where F=1.
*   State 1: A=0, B=0, C=1.
    *   $AB = (0)(0) = 0$.
    *   $A'C = (0)'(1) = 1$.
    *   $F = 0 + 1 = 1$.
*   State 2: A=1, B=0, C=1.
    *   $AB = (1)(0) = 0$.
    *   $A'C = (1)'(1) = 0$.
    *   $F = 0 + 0 = 0$.

This is not a static hazard, but a functional change. The output should transition from 1 to 0.

Let's consider the transition where the output should remain 1.
The only part of the K-map where F=1 is when $C=1$.
The function is essentially $F = C \cdot (A B + A')$. No, that's not correct.

Let's re-examine the K-map and look for transitions between adjacent 1s that are covered by different prime implicants.
The prime implicants are AB (covers 111 and 110) and A'C (covers 011 and 010).

Consider the transition where **A changes from 0 to 1**, with B=0 and C=1.
*   Initial State: A=0, B=0, C=1.
    *   $AB = (0)(0) = 0$.
    *   $A'C = (0)'(1) = 1$.
    *   $F = 0 + 1 = 1$. (Correct)
*   Final State: A=1, B=0, C=1.
    *   $AB = (1)(0) = 0$.
    *   $A'C = (1)'(1) = 0$.
    *   $F = 0 + 0 = 0$. (Incorrect change).

This is a **static-1 hazard**. The output should remain 1, but it becomes 0.
The problematic transition is **A: 0 -> 1, with B=0, C=1**.

The two states involved are:
1.  (A=0, B=0, C=1) - covered by A'C
2.  (A=1, B=0, C=1) - covered by AB (oops, AB is 0 here. The cell A=1, B=0, C=1 is 0 in the K-map).

Let's re-draw the K-map correctly for $F = AB + A'C$:
      BC
    A 00 01 11 10
    0 0  0  1  1   (A'C covers 011, 010)
      -- -- -- --
    1 0  0  1  0   (AB covers 111, 110)

The adjacent 1s are:
*   (0,1,1) and (0,1,0) covered by A'C.
*   (1,1,1) and (1,1,0) covered by AB.

Consider the transition between (A=0, B=1, C=1) and (A=1, B=1, C=1).
*   State 1: A=0, B=1, C=1.
    *   $AB = (0)(1) = 0$.
    *   $A'C = (0)'(1) = 1$.
    *   $F = 0 + 1 = 1$.
*   State 2: A=1, B=1, C=1.
    *   $AB = (1)(1) = 1$.
    *   $A'C = (1)'(1) = 0$.
    *   $F = 1 + 0 = 1$.
*   Expected Output: F remains 1.

Now, let's analyze the implementation $F = AB + A'C$.
Transition: **A changes from 0 to 1**, with B=1, C=1.

*   **Term AB:** A(0->1), B=1. Output changes from 0 to 1 (after $d_1$).
*   **Term A'C:** A changes 0->1, so A' changes 1->0. C=1.
    *   Output of A'C changes from (1)(1)=1 to (0)(1)=0 (after $d_2$).

*   **Output F:** $F = (\text{output of AB}) + (\text{output of A'C})$.

    *   **Case $d_1 < d_2$:**
        *   Initially: AB=0, A'C=1. F=1.
        *   After $d_1$: AB becomes 1. Inputs to OR: (1, 1). F=1.
        *   After $d_2$: A'C becomes 0. Inputs to OR: (1, 0). F=1. (No hazard here).

    *   **Case $d_2 < d_1$:**
        *   Initially: AB=0, A'C=1. F=1.
        *   After $d_2$: A'C becomes 0. Inputs to OR: (0, 0). F=0. **Hazard!**
        *   After $d_1$: AB becomes 1. Inputs to OR: (1, 0). F=1.

Yes, there is an essential static-1 hazard for the transition **A: 0 -> 1, with B=1, C=1**.

**Hazard-Free Implementation:**
The problematic transition is between states (0,1,1) and (1,1,1).
These are covered by prime implicants A'C and AB respectively.
We need a redundant term that covers both these states.
Looking at the K-map, the term **B** covers both (0,1,1) and (1,1,1).
So, the hazard-free implementation is $F_{hazard-free} = AB + A'C + B$.

Let's check the function $AB + A'C + B$.
This simplifies to $AB + B + A'C = B + A'C$.
If $F = B + A'C$, let's check the K-map.
      BC
    A 00 01 11 10
    0 0  0  1  1
      -- -- -- --
    1 0  0  1  0
This is incorrect. $B + A'C$ should yield:
      BC
    A 00 01 11 10
    0 0  1  1  0  (A'C covers 011, 010. B covers all where B=1)
      -- -- -- --
    1 0  1  1  0  (AB covers 111, 110. B covers all where B=1)

Let's draw the K-map for $B + A'C$ correctly.
      BC
    A 00 01 11 10
    0 0  1  1  0   (A'C covers 011, 010. B covers 001, 011)
      -- -- -- --
    1 0  1  1  0   (B covers 101, 111)

The combined coverage for $B + A'C$:
      BC
    A 00 01 11 10
    0 0  1  1  0
      -- -- -- --
    1 0  1  1  0

This K-map matches the function $B + A'C$.
Now, let's check the transition A: 0 -> 1, with B=1, C=1 using $F = B + A'C$.
*   Initial state: A=0, B=1, C=1.
    *   $B = 1$.
    *   $A'C = (0)'(1) = 1$.
    *   $F = 1 + 1 = 1$.
*   Final state: A=1, B=1, C=1.
    *   $B = 1$.
    *   $A'C = (1)'(1) = 0$.
    *   $F = 1 + 0 = 1$.
The output remains 1. The hazard is eliminated.

**Question 2:**
Explain the difference between static and dynamic hazards and provide an example of each in a simple combinational circuit.

**Answer 2:**
*   **Static Hazard:** An unwanted transient change in the output when the output should remain constant.
    *   **Static-1 Hazard:** Output should be 1, but glitches to 0 momentarily.
    *   **Static-0 Hazard:** Output should be 0, but glitches to 1 momentarily.
    *   **Example:** $F(X,Y,Z) = XY + YZ$. Transition X: 0->1, Y=1, Z=1. Output should be 0, but can glitch to 1. (This was an incorrect example earlier, needs correction).

    Let's use the correct example from earlier: $F(A, B, C) = AB + A'C$. Transition A: 0 -> 1, with B=1, C=1. Output should be 1, but glitches to 0.
*   **Dynamic Hazard:** An unwanted transient change in the output when the output is supposed to change only once.
    *   **Example:** Consider a circuit with three levels of logic.
        $F = ((A+B) \cdot C) + D$.
        Let $F = (A \cdot C) + (B \cdot C) + D$.
        Assume A changes from 0 to 1, while B=1, C=1, D=0.
        *   Initial: A=0, B=1, C=1, D=0.
            *   $AC = 0*1 = 0$.
            *   $BC = 1*1 = 1$.
            *   $F = 0 + 1 + 0 = 1$.
        *   Final: A=1, B=1, C=1, D=0.
            *   $AC = 1*1 = 1$.
            *   $BC = 1*1 = 1$.
            *   $F = 1 + 1 + 0 = 1$.
        *   Output should change from 0 to 1.

        Let's analyze the intermediate signals and their delays.
        $F = (A \cdot C) + (B \cdot C) + D$
        *   Term AC: A(0->1), C=1. Output 0->1 after $d_1$.
        *   Term BC: B=1, C=1. Output is 1 (constant, maybe some internal delay $d_2$).
        *   Term D: D=0. Output is 0 (constant, maybe some internal delay $d_3$).
        *   Output F is OR of these.

        If $d_1$ is very small:
        *   Initially: AC=0, BC=1, D=0. F = 0+1+0 = 1.
        *   After $d_1$: AC=1. Inputs to OR are (1, 1, 0). F = 1+1+0 = 1.
        *   No dynamic hazard here.

        A classic example of dynamic hazard involves a circuit implemented with AND-OR logic where terms might disappear and reappear.
        Consider $F = A'B + AB'$. If implemented as $(A'+B)(A+B')$, this is POS.
        Let's think of multilevel logic.
        If $F = (A \cdot B) \text{ XOR } (C \cdot D)$.
        Let $X = A \cdot B$, $Y = C \cdot D$. $F = X \text{ XOR } Y$.
        The XOR gate itself can be implemented as $X Y' + X' Y$.
        $F = (A \cdot B)(C \cdot D)' + (A \cdot B)'(C \cdot D)$.
        If A changes, this affects AB. If C changes, this affects CD.
        The delays in evaluating $(A \cdot B)'$ and $(C \cdot D)'$ and their interaction with the other terms at the final OR gate can cause a dynamic hazard.

        **Simpler Dynamic Hazard Example:**
        Consider the function $F = A B + \overline{A} C$.
        Suppose it is implemented as:
        $X = \overline{A}$ (NOT gate, delay $d_1$)
        $Y = A \cdot B$ (AND gate, delay $d_2$)
        $Z = X \cdot C = \overline{A} \cdot C$ (AND gate, delay $d_3$)
        $F = Y + Z = (A \cdot B) + (\overline{A} \cdot C)$ (OR gate, delay $d_4$)

        Consider the transition where A changes from 1 to 0, and B=1, C=1.
        *   Initial: A=1, B=1, C=1.
            *   $X = \overline{1} = 0$.
            *   $Y = 1 \cdot 1 = 1$.
            *   $Z = 0 \cdot 1 = 0$.
            *   $F = 1 + 0 = 1$. (Correct)
        *   Final: A=0, B=1, C=1.
            *   $X = \overline{0} = 1$.
            *   $Y = 0 \cdot 1 = 0$.
            *   $Z = 1 \cdot 1 = 1$.
            *   $F = 0 + 1 = 1$. (Correct)
        *   Output should change from 1 to 1.

        Let's analyze the signal transitions:
        *   A changes from 1 to 0.
        *   $\overline{A}$ changes from 0 to 1 after $d_1$.
        *   Term Y ($A \cdot B$): A(1->0), B=1. Output 1->0 after $d_2$.
        *   Term Z ($X \cdot C$): X(0->1), C=1. Output 0->1 after $d_3$.
        *   Output F = Y + Z.

        **Dynamic Hazard Scenario:**
        Assume $d_2 < d_3$.
        1.  A changes.
        2.  After $d_2$, Y becomes 0.
        3.  After $d_3$, Z becomes 1.
        4.  The OR gate receives (0, 1), F becomes 1. (No hazard yet).

        Assume $d_3 < d_2$.
        1.  A changes.
        2.  After $d_1$, X becomes 1.
        3.  After $d_3$, Z becomes 1.
        4.  After $d_2$, Y becomes 0.
        5.  Let's consider the OR gate inputs:
            *   Initially: Y=1, Z=0. F=1.
            *   After $d_3$: Z becomes 1. Inputs are (Y, 1). If Y is still 1, F=1. If Y transiently becomes 0 (due to A's change), inputs could be (0, 1), F=1.
            *   After $d_2$: Y becomes 0. Inputs are (0, Z). If Z is still 0, F=0. If Z has already become 1, F=1.

        This is complex. A simpler way to get dynamic hazards is when a signal passes through multiple gates whose delays sum up.
        Consider $F = (A+B)(C+D)$.
        $F = AC + AD + BC + BD$.
        If $A=1, B=1, C=0, D=0$.
        $F = 1*0 + 1*0 + 0*0 + 0*0 = 0$.
        If $A=1, B=1, C=1, D=1$.
        $F = 1*1 + 1*1 + 1*1 + 1*1 = 1$.
        Output should change from 0 to 1.
        Consider the transition from (1,1,0,0) to (1,1,1,1).
        Terms: AC (0->1), AD (0->1), BC (0->1), BD (0->1).
        If the delays of these four AND gates and the final OR gate are such that the OR gate sees intermediate states like (0,0,0,0) then (1,0,0,0) then (1,1,0,0) then (1,1,1,0) then (1,1,1,1), it's fine.
        But if it sees (0,0,0,0) then (1,0,0,0) then (0,0,0,0) again then (1,0,0,0) ... this is a dynamic hazard.
        This typically happens in multilevel logic.

**Question 3:**
What is the significance of Course Outcome CO2: "Design hazard-free digital circuits"? Explain how the concepts of essential hazards relate to achieving this outcome.

**Answer 3:**
**Significance of CO2: "Design hazard-free digital circuits"**
This outcome is critical for the reliable operation of digital systems, especially those that involve asynchronous behavior or where timing sensitivities are high.
*   **Reliability:** Hazards can cause incorrect operation. A transient glitch might be interpreted as a valid logic state change by subsequent logic, leading to erroneous computations or state transitions in sequential circuits.
*   **Predictability:** Hazard-free design ensures that the circuit's output behaves as expected, regardless of minor variations in gate delays, temperature, or manufacturing processes.
*   **Asynchronous Systems:** In asynchronous sequential circuits, hazards are a primary concern because the circuit's operation depends directly on the timing of signal transitions, not on a clock. Uncontrolled hazards can lead to race conditions and unpredictable behavior.
*   **Synchronous Systems:** While synchronous systems use clocks to synchronize state changes, hazards can still occur if they affect the setup or hold times of flip-flops, or if they appear in combinational logic that feeds other parts of the system.

**Relationship of Essential Hazards to CO2:**
Essential hazards are a specific and challenging type of static hazard that must be addressed to achieve hazard-free design.
*   **Inherent Problem:** Essential hazards are not due to worst-case delays but are inherent in the minimal SOP or POS implementations of a function. This means simply choosing faster gates won't solve them.
*   **Design Choice Impact:** The choice of a minimal sum-of-products or product-of-sums form, while efficient in terms of gate count, can inadvertently introduce essential hazards.
*   **Mitigation Strategy:** To achieve hazard-free design (CO2), designers must be able to identify potential essential hazards (e.g., by analyzing K-maps) and implement mitigation strategies. The most common strategy is to add redundant prime implicants. This slightly increases the complexity of the logic expression but guarantees the elimination of the hazard.
*   **Systematic Approach:** Understanding essential hazards allows for a systematic approach to designing robust combinational logic. It moves beyond simply minimizing a Boolean expression to minimizing it *while also ensuring hazard-freedom*.

Therefore, learning about essential hazards is fundamental to mastering CO2, as it teaches the designer to look beyond minimal complexity and consider the practical implications of logic implementation and signal propagation delays.

### 7. Important Points to Remember

*   **Hazards are temporary, unintended output pulses or oscillations.**
*   **Static hazards** occur when an output should remain constant but momentarily changes.
*   **Dynamic hazards** occur when an output should change once but changes multiple times.
*   **Essential hazards** are static hazards inherent to the logic structure that cannot be fixed by delay adjustments alone.
*   **Static-1 hazards** typically occur in SOP forms; static-0 hazards in POS forms.
*   **K-maps are crucial** for identifying potential static hazards by examining adjacent input states.
*   **Essential hazards arise** when adjacent states producing the same output are covered by different prime implicants in a minimal SOP/POS expression.
*   **Elimination of essential static hazards** requires adding redundant prime implicants to the logic expression.
*   **Dynamic hazards** are more common in multilevel logic and arise from complex timing interactions.

---
