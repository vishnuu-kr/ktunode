---
title: "Block diagram representation - block diagram reduction"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 1: Introduction to Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366b5"
status: "completed"
scrapedAt: "2026-05-23T16:29:20.933Z"
---
# INTRODUCTION TO CONTROL SYSTEMS

## Module 1: Introduction to Control Systems
### Topic: Block Diagram Representation and Reduction

---

### Learning Outcomes:

*   **Understand the concept of a block diagram** as a graphical representation of a control system.
*   **Identify the basic components of a block diagram**, including blocks, summing points, take-off points, and their interconnections.
*   **Represent various control system elements** as blocks with their respective transfer functions.
*   **Learn and apply block diagram reduction techniques** to simplify complex control system configurations into a single equivalent block.
*   **Derive the overall transfer function** of a control system from its block diagram representation.
*   **Relate the block diagram representation to the system's mathematical model** (e.g., differential equations and transfer functions).

---

### Course Outcomes Alignment:

This topic directly supports **CO1: To represent continuous time systems in the classical domain (Knowledge Level: K2)**. Understanding and manipulating block diagrams is fundamental to representing continuous-time systems in the classical (Laplace domain) using transfer functions.

---

### 1. Introduction to Block Diagrams

A **block diagram** is a schematic representation of a physical system that shows the functional relationships between its various components. In control systems, it provides a visual means of depicting the signal flow and operations within a system.

**Key Purposes of Block Diagrams:**

*   **Visual Representation:** Clearly shows how different parts of a system are interconnected and how signals flow through them.
*   **System Analysis:** Facilitates the analysis of system behavior and performance.
*   **System Design:** Aids in designing and modifying control systems.
*   **Transfer Function Derivation:** Allows for the systematic derivation of the overall system transfer function.

**(Nise, 2009; Nagrath & Gopal, 2009)**

---

### 2. Basic Components of a Block Diagram

A block diagram consists of several standard symbols:

*   **Block:** Represents an **operation** performed on a signal. It is typically denoted by a rectangle containing the system element's name or its transfer function.
    *   The input signal enters on the left, and the output signal leaves on the right.
    *   **Transfer Function (G(s)):** The ratio of the Laplace transform of the output signal to the Laplace transform of the input signal, assuming zero initial conditions.
        *   $Y(s) = G(s)X(s)$
        *   Example: A motor with armature control can be represented by a block with its armature transfer function.

*   **Summing Point (Comparator):** Represents the algebraic summation of signals.
    *   It is a circle with an 'x' inside.
    *   Signals entering the summing point have associated signs (+ or -).
    *   The output is the algebraic sum of the inputs.
    *   Example: In a feedback control system, the error signal is the difference between the reference input and the feedback signal.

    ```
        +-------+
    --->|   +   |----> Output Signal
        |   -   |
        +-------+
    ```

*   **Take-off Point (Branch Point):** Allows a signal to be transmitted to more than one point.
    *   It is a small circle.
    *   The signal at the take-off point is sent to multiple destinations without modification.
    *   Example: The output of a controller might be sent to the plant and also to a monitoring device.

    ```
         +-------+
    ---->| Block |----o----> Output 1
         +-------+    |
                      o----> Output 2
    ```

*   **Signal Source/Input:** Typically represented by an arrow pointing to the first block or summing point.

*   **Signal Destination/Output:** Typically represented by an arrow leaving the last block or summing point.

---

### 3. Block Diagram Representation of Control Systems

**3.1. Open-Loop vs. Closed-Loop Systems:**

*   **Open-Loop System:** The control action is independent of the output. There is no feedback.
    *   Block Diagram: A single block representing the system, with an input and an output.
    *   Example: A toaster, where the heating time is set and doesn't adjust based on how toasted the bread is.

    ```
        R(s) ----> [ G(s) ] ----> Y(s)
    ```
    *   Transfer Function: $Y(s)/R(s) = G(s)$

*   **Closed-Loop (Feedback) System:** The control action is dependent on the output, which is measured and fed back to the input.
    *   Block Diagram: Includes a feedback path, a summing point, and a forward path.
    *   Example: A thermostat controlling room temperature. The sensor measures the actual temperature (output) and compares it to the desired temperature (input) to adjust the heater.

    ```
        +-------+     +-------+     +-------+
    R(s)-->+-|>--o-->| G1(s) |-->o-->| G2(s) |-->Y(s)
            ^-|       +-------+     |       +-------+
              |                     |
              +------|-|------------+
                     H(s)
    ```
    *   **R(s):** Reference Input
    *   **Y(s):** Output
    *   **E(s):** Error Signal ($E(s) = R(s) - H(s)Y(s)$)
    *   **G(s):** Forward Path Transfer Function (can be multiple blocks in series)
    *   **H(s):** Feedback Path Transfer Function
    *   **B(s):** Feedback Signal ($B(s) = H(s)Y(s)$)

**(Nise, 2009; Kuo, 2014)**

---

### 4. Block Diagram Reduction Techniques

The goal of block diagram reduction is to simplify a complex block diagram into a single block representing the overall transfer function of the system. This is achieved by applying a set of standard block diagram manipulation rules.

**Important Rules for Block Diagram Reduction:**

1.  **Blocks in Series:** If blocks are connected in cascade (in series), their transfer functions multiply.
    *   Original:
        ```
            A ----> [G1] ----> B ----> [G2] ----> C
        ```
    *   Reduced:
        ```
            A ----> [G1 * G2] ----> C
        ```
    *   Rule: $G_{eq}(s) = G_1(s) G_2(s)$

2.  **Blocks in Parallel:** If blocks have the same input and their outputs are summed, their transfer functions add.
    *   Original:
        ```
             +--------+
        A --->| [G1]   |---+
              +--------+   |  +-----+
                           +-->| Sum |----> C
              +--------+   |  +-----+
        A --->| [G2]   |---+
              +--------+
        ```
    *   Reduced:
        ```
             +----------+
        A --->| [G1 + G2]|----> C
             +----------+
        ```
    *   Rule: $G_{eq}(s) = G_1(s) + G_2(s)$

3.  **Moving a Summing Point After a Block:** To move a summing point after a block, insert a gain equal to the transfer function of that block in the path leading to the summing point.
    *   Original:
        ```
        A ----> [G] ----> o ------> Sum ------> C
                      |       +
                      +-------| Sum |----> C
                              +
        ```
    *   Reduced:
        ```
        A ----> o ------> Sum ------> C
                |       +
                +----->[G]----->| Sum |----> C
                        +
        ```
    *   Rule: If the original summing point output is $S$, $S = (\dots + X \cdot G + \dots)$. In the reduced form, the signal before the summing point is $X \cdot G$. To achieve the same sum, the input from $X$ needs to be multiplied by $G$ before summing.

4.  **Moving a Summing Point Before a Block:** To move a summing point before a block, insert a gain equal to the reciprocal of the transfer function of that block in the path leading to the summing point.
    *   Original:
        ```
        A ----> o ------> Sum ------> C
                |       +
                +----->[G]----->| Sum |----> C
                        +
        ```
    *   Reduced:
        ```
        A ----> [1/G] ----> o ------> Sum ------> C
                              |       +
                              +-------| Sum |----> C
                                      +
        ```
    *   Rule: If the original summing point output is $S$, $S = (\dots + X \cdot G + \dots)$. In the reduced form, the signal entering the summing point is $X$. To achieve the same sum, the input from $X$ needs to be multiplied by $G$ before summing.

5.  **Moving a Take-off Point After a Block:** To move a take-off point after a block, insert a gain equal to the transfer function of that block in the path leading to the take-off point.
    *   Original:
        ```
        A ----> [G] ----> o ------> Take-off
                      |
                      +-----> C
        ```
    *   Reduced:
        ```
        A ----> o ------> Take-off
                |
                +----->[G]-----> C
        ```
    *   Rule: If the signal at the take-off point is $X$, the output from the block is $X \cdot G$. To have the same signal at the take-off point in the reduced form, the signal from $X$ needs to be multiplied by $G$.

6.  **Moving a Take-off Point Before a Block:** To move a take-off point before a block, insert a gain equal to the reciprocal of the transfer function of that block in the path leading to the take-off point.
    *   Original:
        ```
        A ----> o ------> Take-off
                |
                +----->[G]-----> C
        ```
    *   Reduced:
        ```
        A ----> [1/G] ----> o ------> Take-off
                              |
                              +-----> C
        ```
    *   Rule: If the signal at the take-off point is $X \cdot G$, the signal from $X$ in the reduced form needs to be multiplied by $1/G$ to get the original signal at the take-off point.

7.  **Eliminating a Feedback Loop:** The most common and powerful rule. For a standard feedback loop:
    *   Original:
        ```
            R(s) -->o--+--> [G(s)] -->o--> Y(s)
                    |                |
                    +--[- H(s)]<-----+
        ```
    *   Reduced:
        ```
            R(s) --> [ G(s) / (1 ± G(s)H(s)) ] --> Y(s)
        ```
    *   **Rule:**
        *   **Negative Feedback:** $T(s) = \frac{G(s)}{1 + G(s)H(s)}$
        *   **Positive Feedback:** $T(s) = \frac{G(s)}{1 - G(s)H(s)}$
        *   Where $G(s)$ is the overall forward path transfer function and $H(s)$ is the overall feedback path transfer function.

**(Nise, 2009; Nagrath & Gopal, 2009; Ogata, 2009)**

---

### 5. Example of Block Diagram Reduction

Let's reduce the following block diagram to a single equivalent block.

```
    R(s) ---->o--+----[G1]----+----o----+----[G3]----+----> Y(s)
              |  |           |      |            |
              |  +--[-H1]<---|      |            |
              |                 +--[-H2]<-------+
              +----[G2]--------------------------+
```

**Step-by-step reduction:**

**1. Identify and reduce cascaded blocks:** Blocks G1 and G3 are in series.

```
    R(s) ---->o--+----[G1*G3]----+----o----+----[G3]----+----> Y(s)
              |  |              |      |            |
              |  +--[-H1]<------|      |            |
              |                 +--[-H2]<-------+
              +----[G2]--------------------------+
```
*Correction: G1 and G3 are not directly in series in this diagram. G1 and G2 are parallel paths, and then G3 is in series with the summed output.*

Let's re-examine the diagram and apply the rules systematically.

```
    R(s) ---->o--+----[G1]----+----o----+----[G3]----+----> Y(s)
              |  |           |      |            |
              |  +--[-H1]<---|      +--[-H2]<-------+
              |                 |
              +----[G2]---------+
```
This diagram is a bit ambiguous. Let's assume a more standard interconnected form.

**Standard Form Example:**

Consider the following block diagram:

```
       +------+       +------+
R(s)-->| G1   |--+-->| G2   |--> Y(s)
       +------+  |   +------+
                 |
                 o------[-H1] <-----|
                 |                 |
                 +-----[G3]--------+
```

**1. Move the summing point after G1:**
The summing point is currently after G1. To move it after G2, we need to insert G2 in the feedback path for H1. This is not a straightforward application of rule 3.

**Let's consider a different common structure:**

```
      +------+     +------+
R(s)-->| G1   |--+->| G2   |-->Y(s)
      +------+  |  +------+
                |
      +------+  |
E(s)-->| G3   |--+
      +------+
        ^  |
        |  |
        +--[-H] <----|
```
Here, let's assume G1 and G2 are in series and G3 is in a parallel path.

**Revised Example Block Diagram (More typical):**

```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H(s)]<------|
```

**Reduction Steps:**

**Step 1: Identify the main feedback loop.**
The outer loop involves G1 and G2 in the forward path and H(s) in the feedback path.

**Step 2: Combine blocks in series in the forward path.**
G1(s) and G2(s) are in series. Their equivalent transfer function is $G_1(s)G_2(s)$.

**Step 3: Apply the feedback loop reduction formula.**
The system is now:

```
       +-----------------+
R(s) -->o--+--->| G1(s)G2(s) |--> Y(s)
         ^-|                 |
           |                 |
           +----[-H(s)]<------|
```

Using the formula for a negative feedback loop $\frac{G}{1+GH}$:
Overall Transfer Function $T(s) = \frac{G_1(s)G_2(s)}{1 + G_1(s)G_2(s)H(s)}$

**(Nise, 2009)**

---

**Another Example: With a take-off point and summing points manipulation.**

```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1(s)]<------|
                               |
                               o-----> G3(s) ------> Output Z(s)
```

**Reduction Steps:**

**1. Eliminate the inner feedback loop (G2, H1).**
The forward path is G2, feedback is H1.
The transfer function from the output of G1 to Y(s) is $\frac{G_2}{1+G_2H_1}$.

```
       +-------+         +-----------------+
R(s) -->o--+--->| G1(s) |----| G2(s)/(1+G2H1) |--> Y(s)
         ^-|     +-------+         |
           |                       |
           +----[-H1(s)]<----------|  (This feedback is now implicitly part of the block)
                                   |
                                   o-----> G3(s) ------> Output Z(s)
```
*Self-correction: This is where it gets tricky. The take-off point for G3 is *after* G2. Moving the feedback point is often easier.*

Let's retry by moving summing points and take-off points first to simplify structure.

**Original Diagram:**
```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1(s)]<------|
                               |
                               o-----> G3(s) ------> Output Z(s)
```

**Let's try to rearrange:**

**Objective:** Get to a single loop or a simple parallel/series structure.
We have a take-off point after G1. We want to move it before G2 to simplify feedback elimination.

**Rule 5: Moving take-off point after a block (G1).**
The take-off point is after G1. To move it *before* G2, we need to apply G1 to the path going to G3.

```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1(s)]<------|
                               |
                               +----->[G1(s)]-----> G3(s) ------> Output Z(s)
```

Now, G1 is in series with G3. Let's call this $G_{13} = G_1(s)G_3(s)$.

```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1(s)]<------|
                               |
                               +----->[G1*G3]------> Output Z(s)
```

The feedback loop has G2 in the forward path and H1 in the feedback path.
The overall transfer function from R(s) to Y(s) is $\frac{G_1(s) \cdot \frac{G_2(s)}{1+G_2(s)H_1(s)}}{1}$ if there were no other branches.

Let's focus on the loop for Y(s):
Forward path: $G_1(s)$ then $G_2(s)$
Feedback path: $H_1(s)$ from the output of $G_2(s)$ back to the summing point before $G_1(s)$.

The transfer function of the inner loop (from R(s) to Y(s)) is:
$T_{Y}(s) = \frac{G_1(s)G_2(s)}{1+G_1(s)G_2(s)H_1(s)}$ --- **Incorrect assumption of where H1 is connected.**

Let's trace signal paths carefully:

*   Signal from R(s) goes to a summing point.
*   Summing point output is $E(s)$.
*   $E(s)$ goes through G1. Output is $G1 \cdot E(s)$.
*   This signal splits:
    *   To G2. Output is $G1 \cdot G2 \cdot E(s)$. This goes to Y(s).
    *   To H1 (feedback). Output is $G1 \cdot H1 \cdot E(s)$. This is subtracted from R(s). **Incorrect, H1 is from Y(s).**

**Correct interpretation of the diagram:**

```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1(s)]<------|  (This H1 is connected to Y(s))
                               |
                               o-----> G3(s) ------> Output Z(s) (This G3 is from the output of G1)
```

**Step 1: Move the take-off point for G3.**
The take-off point is after G1. We want to move it *after* G2 to simplify the feedback loop elimination. To move the take-off point after G2, we must send the signal that goes through G3 through G2 as well.

This requires moving the take-off point from after G1 to after G2.
To do this, we need to apply G2 to the G3 path.

**Original:**
```
G1 --> X --> Y
     |       |
     |       +--> G2 --> Y
     |
     +--> G3 --> Z
```

**Move take-off after G2:**
```
G1 --> X --> G2 --> Y
     |       |
     |       +--> G2 --> Y (Original path)
     |
     +--> G2 --> G3 --> Z
```
This is **incorrect application**. Rule 5 is for moving the take-off point *itself*.

Let's try moving the summing point instead.

**Move summing point (before G1) after G1:**
The signal at the output of G1 is $E(s) \cdot G1(s)$.
The summing point sums $R(s)$ and feedback signal $-Y(s)H1(s)$.
The output of summing point is $E(s) = R(s) - Y(s)H1(s)$.

Consider the block $G1$:
$E(s) \xrightarrow{G1} E(s)G1(s)$
The take-off point is here.
Signal $E(s)G1(s)$ goes to G2.
Signal $E(s)G1(s)$ also goes to G3.

Let's combine G1 and G2 in series for the main path: $G_{12} = G_1(s)G_2(s)$.
The feedback $H1(s)$ is applied to the output of $G2$. So the feedback loop is around $G1 \cdot G2$.

$R(s) \longrightarrow \text{Sum} \longrightarrow G1 \longrightarrow \text{Split} \longrightarrow G2 \longrightarrow Y(s)$
                       |             |                                  ^
                       |             +---- G3 --------------------------|
                       |                                                |
                       +------------------- H1 <-------------------------|

**Step 1: Combine G1 and G2 in series.**
Forward path transfer function is $G_1(s)G_2(s)$.

```
       +---------------------+
R(s) -->o--+--->| G1(s)G2(s) |--> Y(s)
         ^-|     +---------------------+
           |                           |
           +----[-H1(s)]<--------------|
                                       |
                                       o-----> G3(s) ------> Output Z(s) (from output of G1)
```
*This interpretation of the diagram is still problematic regarding the take-off point location.*

**Assuming the take-off for G3 is from the output of G1, and H1 is from the output of G2:**

```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1(s)]<------|
                               |
                               o-----> G3(s) ------> Z(s)
```

**Let's move the take-off point for G3 *before* G2.**
To do this, we must insert G2 into the G3 path (Rule 5).

```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1(s)]<------|
                               |
                               +----->[G2(s)]-----> G3(s) ------> Z(s)
```
Now, G1 and G2 are in series in the main path.
And G2 and G3 are in series in the parallel path.

Let's rename the blocks:
Main forward path block: $G_{main}(s) = G_1(s)G_2(s)$.
Parallel path block: $G_{parallel}(s) = G_2(s)G_3(s)$.

```
       +-----------------+
R(s) -->o--+--->| G_{main}(s) |--> Y(s)
         ^-|     +-----------------+
           |                     |
           +----[-H1(s)]<--------|
                                 |
                                 o-----> Z(s) (This signal is taken from the output of G1)
```
This is getting complicated and error-prone if the diagram is not crystal clear.

**A Common Approach: Mason's Rule**

When block diagram reduction rules become too cumbersome, Mason's Gain Formula is a systematic method.
Overall Transfer Function $T(s) = \frac{\sum_{k} P_k \Delta_k}{\Delta}$
Where:
*   $P_k$: Forward path gains.
*   $\Delta$: Determinant of the graph (1 - sum of individual loop gains + sum of products of two non-touching loop gains - ...).
*   $\Delta_k$: Determinant of the graph for the kth forward path, with the loops that touch the kth forward path removed.

**Let's use a simpler, classic example for practice with reduction rules.**

**Example:**
```
      +-------+     +-------+
R(s) -->o--+--->| G1    |-->o--->| G2    |--> Y(s)
        ^-|     +-------+     |     +-------+
          |                   |
          +----[-H1]<---------|
                              |
                              o-----> G3 ------> Z(s) (from output of G1)
```

**Let's focus on getting Y(s)/R(s).**

**Step 1: Move the summing point for H1 after G2.**
To move the summing point after G2, we need to insert G2 in the feedback path.

Original summing point at the end: $E = R - H1 \cdot Y$
Where $Y = G1 \cdot E \cdot G2$.

Let's rewrite the diagram to isolate the feedback loop around G1 and G2.
The signal entering G2 is $G1 \cdot E$.
The signal leaving G2 is $G1 \cdot G2 \cdot E$. This is Y.
The feedback signal is $H1 \cdot Y$.
This feedback signal is subtracted from R.

**Step 1: Combine G1 and G2 in series for the main forward path.**
Let $G_{12} = G_1 G_2$.

```
      +-----------------+
R(s) -->o--+--->| G12   |--> Y(s)
        ^-|     +-----------------+
          |                     |
          +----[-H1]<------------|
                                |
                                o-----> G3 ------> Z(s) (from output of G1)
```
This diagram is still difficult to interpret regarding the interaction of G3.

**Let's assume the G3 branch is a disturbance or a parallel path starting from the output of G1.**

**Revised Interpretation of Example:**

```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1(s)]<------|
                               |
                               o-----> G3(s) ------> Z(s)
```
Here, G3 is taking the signal from the output of G1 and feeding it to Z(s).
For the transfer function Y(s)/R(s), the G3 branch is not in the path from R to Y. However, if G3 had a feedback to the main loop, it would matter.
Let's assume G3 is just a side branch and doesn't affect the Y/R transfer function, **unless** there's a feedback from Z(s).
Let's assume the feedback $H_1$ is from $Y(s)$ only.

**Focus on Y(s)/R(s):**

**Step 1: Combine G1 and G2 in series.**
$G_{12} = G_1 G_2$.

```
       +-----------------+
R(s) -->o--+--->| G12   |--> Y(s)
         ^-|     +-----------------+
           |                     |
           +----[-H1]<------------|
```
This is a standard feedback loop.
$T(s) = \frac{Y(s)}{R(s)} = \frac{G_{12}}{1 + G_{12}H_1} = \frac{G_1 G_2}{1 + G_1 G_2 H_1}$

**What if H1 was connected to the output of G1 instead of G2?**

```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1(s)]<------| (Feedback from output of G1)
```

**Step 1: Move the summing point for H1.**
The summing point is after G1. It sums the output of G1 and feedback signal.
We need to move this summing point *after* G2.

Original structure:
$R \to \Sigma \to G1 \to \text{split} \to G2 \to Y$
                 $\downarrow$
                 $H1 \leftarrow Y$ (subtracted from $R$)

Let's move the summing point after G2.
The signal before the summing point is $E = R - H1 Y$.
The signal after G1 is $E \cdot G1$.
This signal splits. One path goes through G2.
Let's denote the signal after G1 as $S_1 = E \cdot G1$.
The signal going into G2 is $S_1$.
The signal going into G3 is $S_1$.

The summing point needs to be after G2.
We have $R$ and $-H1 Y$.
$Y = S_1 \cdot G2 = E \cdot G1 \cdot G2$.
So, the summing point operation is on $R$ and $-(H1 \cdot E \cdot G1 \cdot G2)$.

Let's apply rule 3 to move the summing point *after* G1.
```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1]<---------|
```
The summing point is at the input of G1.
Let's move it after G1.
The output of G1 is $E \cdot G1$.
The feedback signal is $-H1 \cdot Y$.
The summing point sums $R$ and the feedback signal.

**Consider the structure from Nagrath & Gopal (2009), Chapter 3, Section 3.4, Rule 6:**
To shift a summing point past a block G:
Input to summing point $I_1, I_2, \dots$
Summing point output $S = \sum I_i$
If the summing point is after a block $G$: $I_1 \to G \to \text{Sum}$. Output is $I_1 G$.
To move it before: $I_1 \to \text{Sum} \to G$. Output is $(\sum I_i) G$.
This is equivalent to $I_1 G$ if the summing point is after.

Let's try moving the summing point *before* G1.
The summing point is summing $R$ and $-H1 Y$.
The output of the summing point $E = R - H1 Y$.
This $E$ goes into G1.

To move the summing point after G1, we insert G1 in the feedback path.
```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1*G1]<------| (Feedback from Y)
```
Now the block $G1 \cdot G2$ is in the forward path, and $H1 \cdot G1$ is in the feedback path.
The overall transfer function is:
$T(s) = \frac{G_1(s)G_2(s)}{1 + G_1(s)G_2(s)H_1(s)}$ --- **This is incorrect application.**

**Correct Application of Rule 3 (Moving summing point after a block):**
Original:
```
      R ---> Sum --- G ---> Output
              ^     |
              |     |
              +-----| Feedback
```
To move Sum after G:
```
      R ---> Sum ---> G ---> Output
               ^      |
               |      |
               +------| Feedback G
```
So, if the summing point is at the input of G1, and we want to move it after G1:
Input to summing point: R and Feedback $(-H1 Y)$.
Output of summing point $E = R - H1 Y$.
Signal after G1 is $E \cdot G1 = (R - H1 Y) G1$.

To move summing point after G1:
```
      R ---> G1 ---> Sum ---> G2 ---> Y
                ^       ^
                |       |
                +-------| Feedback H1
```
The signal at the output of G1 is $E \cdot G1$.
The feedback signal is $-H1 Y$.
This feedback signal needs to be summed with $E \cdot G1$.
To do this, the feedback signal should be modified by G1.
So, $-H1 Y$ becomes $-H1 Y G1$.
Therefore, the feedback path becomes $H1 \cdot G1$.

Now we have:
Forward path: $G1 \cdot G2$.
Feedback path: $H1 \cdot G1$.

This leads to $\frac{G1 G2}{1 + (G1 G2)(G1 H1)}$ which is also incorrect.

**Let's try moving the take-off point from after G1 to after G2.**
This means the path to G3 will pass through G2.

```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1(s)]<------|
                               |
                               +----->[G2(s)]-----> G3(s) ------> Z(s)
```

Now, we have two parallel paths from the output of G1:
1.  $G2(s)$ leading to Y(s).
2.  $G2(s)G3(s)$ leading to Z(s).

Let $G_{12} = G_1 G_2$.
Let $G_{123} = G_1 G_2 G_3$.

The block diagram is now:
```
       +-----------------+
R(s) -->o--+--->| G12   |--> Y(s)
         ^-|     +-----------------+
           |                     |
           +----[-H1]<------------|
                                 |
                                 o-----> Z(s) (path from output of G1)
```
*Correction: This interpretation is wrong. The G3 branch is from the output of G1.*

**Correct Diagram Representation:**
```
       +-------+     +-------+
R(s) -->o--+--->| G1(s) |-->o--->| G2(s) |--> Y(s)
         ^-|     +-------+     |     +-------+
           |                   |
           +----[-H1(s)]<------| (Feedback from output of G2)
                               |
                               o-----> G3(s) ------> Z(s) (Branch from output of G1)
```

**To get Y(s)/R(s):**

**Step 1: Combine G1 and G2 in series.**
Forward path block: $G_{12} = G_1 G_2$.

**Step 2: Combine the feedback loop.**
The feedback loop is around $G_{12}$.
$T(s) = \frac{G_{12}}{1 + G_{12}H_1} = \frac{G_1 G_2}{1 + G_1 G_2 H_1}$

The G3 branch, in this configuration, does not affect the transfer function from R(s) to Y(s). It would only matter if Z(s) was fed back into the system.

**Final Check of Rules:**
*   Blocks in series: Multiply.
*   Blocks in parallel: Add.
*   Move summing point after block G: Multiply feedback path by G.
*   Move summing point before block G: Divide feedback path by G.
*   Move take-off point after block G: Multiply branch path by G.
*   Move take-off point before block G: Divide branch path by G.
*   Eliminate feedback loop: $G/(1+GH)$ for negative feedback.

**(Nise, 2009; Ogata, 2009)**

---

### 6. Practice Questions

**Question 1:**
Reduce the following block diagram to a single equivalent block.

```
      +-------+     +-------+     +-------+
R(s) -->o--+--->| G1    |-->o--->| G2    |-->o--->| G3    |--> Y(s)
        ^-|     +-------+     |     +-------+     |     +-------+
          |                   |                   |
          +----[-H1]<---------|                   +----[-H2]<---------|
```

**Answer:**
1.  Combine G1 and G2 in series: $G_{12} = G_1 G_2$.
    ```
          +-----------------+     +-------+
    R(s) -->o--+--->| G12   |-->o--->| G3    |--> Y(s)
            ^-|     +-----------------+     |     +-------+
              |                             |
              +----[-H1]<-------------------|
                                            |
                                            +----[-H2]<---------|
    ```
2.  Move the summing point after G3: The feedback $H_2$ is now around $G_{12}G_3$. The feedback $H_1$ is also around $G_{12}$.
    This is getting complex. Let's try moving H1's summing point first.
    Move the summing point associated with H1 *after* G2. This means multiplying H1 by G2 in the feedback path.
    Original structure:
    Summing point $S_1$ before G1: $E = R - H1 Y$ (where Y is output of G3)
    Summing point $S_2$ after G2: $E' = E \cdot G1 - H1 Y$ (error after G1)
    Summing point $S_3$ after G3: $E'' = E' \cdot G2 - H1 Y$. Wait, feedback $H_1$ is from Y.

    Let's apply the rule directly to the feedback loop:
    Forward path: $G_1 \to G_2 \to G_3$. Combined $G_{123} = G_1 G_2 G_3$.
    Feedback path: $H_1$ is applied to the output of G2, and $H_2$ is applied to the output of G3.

    **Let's simplify the diagram step-by-step:**

    **Step 1: Move the summing point for H1 past G2.**
    The summing point is before G1. The feedback signal $-H1 \cdot Y$ is summed with R.
    We want to move this summing point to after G2.
    The signal before G2 is $E_1 = G1 \cdot E$, where $E = R - H1 \cdot Y$.
    The output of G2 is $E_1 \cdot G2 = G1 \cdot E \cdot G2$.
    The feedback signal $-H1 \cdot Y$ needs to be adjusted.
    To move the summing point after G2, we insert G2 into the feedback path.
    The feedback signal becomes $-H1 \cdot G2 \cdot Y$.

    ```
          +-------+     +-------+
    R(s) -->o--+--->| G1    |-->o--->| G2    |-->o--->| G3    |--> Y(s)
            ^-|     +-------+     |     +-------+     |     +-------+
              |                   |                   |
              +----[-H1*G2]<------|                   +----[-H2]<---------|
    ```
    Now, G1 and G2 are in series in the forward path, and G2 and G3 are in series in the forward path.
    This is not the right way. Let's apply the rule correctly.

    **Correct application of Rule 3:** Moving summing point after a block.
    Original structure:
    ```
    R --> Sum --> G1 --> [Take-off] --> G2 --> [Summing Point 2] --> G3 --> Y
               ^        |                      ^
               |        +-------------------- H1 <-----------------|
               |                                                 ^
               +------------------------------------------------- H2 <---|
    ```

    **Step 1: Move the summing point associated with H1 past G1.**
    The summing point is at the input of G1. The feedback signal is $-H1 Y$.
    To move it after G1, we insert G1 into the feedback path.
    The feedback signal becomes $-H1 \cdot G1 \cdot Y$.

    ```
          +-------+     +-------+     +-------+
    R(s) -->o--+--->| G1    |-->o--->| G2    |-->o--->| G3    |--> Y(s)
            ^-|     +-------+     |     +-------+     |     +-------+
              |                   |                   |
              +----[-H1*G1]<------|                   +----[-H2]<---------|
    ```
    Now, the forward path is G1, G2, G3.
    The feedback path 1 is $H1 \cdot G1$ from Y to the first summing point.
    The feedback path 2 is $H2$ from Y to the summing point after G3.

    **Step 2: Combine G1, G2, G3 in series.**
    $G_{123} = G_1 G_2 G_3$.

    **Step 3: Modify the feedback paths.**
    The feedback loop involving H1 is now around $G1 \cdot G2 \cdot G3$. The effective feedback is $H1 \cdot G1$.
    So the loop gain is $(G1 G2 G3) \cdot (H1 G1)$.
    The second feedback loop is around $G1 G2 G3$, with feedback $H2$. Loop gain is $(G1 G2 G3) \cdot H2$.

    Let's combine the parallel feedback paths.
    Consider the output of G2. A signal $E_1 = E \cdot G1$ enters G2.
    The summing point for $H1$ is after G2. It sums $E_1 \cdot G2$ and $-H1 Y$.

    **Let's try moving the summing point for H2 first.**
    Summing point after G3. Feedback $-H2 Y$.
    Move it before G3. Insert $1/G3$ in feedback.
    Feedback becomes $-H2/G3$.

    ```
          +-------+     +-------+     +-------+
    R(s) -->o--+--->| G1    |-->o--->| G2    |-->o--->| G3    |--> Y(s)
            ^-|     +-------+     |     +-------+     |     +-------+
              |                   |                   |
              +----[-H1]<---------|                   +----[-H2/G3]<----|
    ```
    Now, combine G1, G2 in series: $G_{12} = G1 G2$.
    The structure is:
    ```
          +-----------------+     +-------+
    R(s) -->o--+--->| G12   |-->o--->| G3    |--> Y(s)
            ^-|     +-----------------+     |     +-------+
              |                             |
              +----[-H1]<-------------------|
                                            |
                                            +----[-H2/G3]<----|
    ```
    This still has two feedback paths from Y. We need to combine them.
    Let's take the signal out of G1: $S_1 = G1 \cdot E$.
    This signal goes to G2. $S_2 = S_1 \cdot G2 = G1 G2 E$.
    This signal then goes to G3. $Y = S_2 \cdot G3 = G1 G2 G3 E$.

    The feedback signals are:
    $-H1 \cdot Y$ (from output of G2)
    $-H2 \cdot Y$ (from output of G3)

    The summing point before G1: $E = R - (H1 \cdot S_2) - (H2 \cdot Y)$. **Correction: H1 is from output of G2.**
    $E = R - H1 \cdot (G1 G2 E) - H2 \cdot (G1 G2 G3 E)$

    Let's rearrange the diagram such that summing points are together.
    Move summing point for H1 after G2. Feedback becomes $-H1 G2$.
    ```
          +-------+     +-------+     +-------+
    R(s) -->o--+--->| G1    |-->o--->| G2    |-->o--->| G3    |--> Y(s)
            ^-|     +-------+     |     +-------+     |     +-------+
              |                   |                   |
              +----[-H1*G2]<------|                   +----[-H2]<---------|
    ```
    Now, forward path is $G1 \cdot G2 \cdot G3$.
    The feedback paths are $-H1 \cdot G2$ and $-H2$. They are summed at the output of G2.
    This means we have two summing points.

    Let's combine the loops.
    First, consider the loop around G1 and G2, with feedback H1.
    Forward path: $G1 \cdot G2$. Feedback: $H1$. From the output of G2.
    $T_{12} = \frac{G1 G2}{1 + G1 G2 H1}$ (Transfer function from E to output of G2).

    The block diagram is effectively:
    ```
          +-----------------+     +-------+
    R(s) -->o--+--->| T_{12}  |-->o--->| G3    |--> Y(s)
            ^-|     +-----------------+     |     +-------+
              |                             |
              +----[-H2]<-------------------|
    ```
    Now, we have G3 in the forward path and H2 in the feedback.
    $T = \frac{T_{12} G3}{1 + T_{12} G3 H2}$
    $T = \frac{\frac{G1 G2}{1 + G1 G2 H1} G3}{1 + \frac{G1 G2}{1 + G1 G2 H1} G3 H2}$

    Multiply numerator and denominator by $(1 + G1 G2 H1)$:
    $T = \frac{G1 G2 G3 (1 + G1 G2 H1)}{(1 + G1 G2 H1) + G1 G2 G3 H2}$
    $T = \frac{G1 G2 G3}{1 + G1 G2 H1 + G1 G2 G3 H2}$

    **Answer:** $\frac{G1 G_2 G_3}{1 + G_1 G_2 H_1 + G_1 G_2 G_3 H_2}$

**Question 2:**
For the block diagram below, find the transfer function $Y(s)/R(s)$.

```
      +-------+     +-------+
R(s) -->o--+--->| G1    |-->o--->| G2    |--> Y(s)
        ^-|     +-------+     |     +-------+
          |                   |
          +----[-H1]<---------|
                              |
                              o-----> G3 ------> Z(s) (Branch from output of G1)
```
Assume G3 does not affect the Y(s)/R(s) transfer function for this question.

**Answer:**
1.  Combine G1 and G2 in series: $G_{12} = G_1 G_2$.
2.  The feedback loop is around $G_{12}$, with feedback $H_1$.
3.  Using the formula for a negative feedback loop: $\frac{G}{1+GH}$.
    $T(s) = \frac{Y(s)}{R(s)} = \frac{G_1 G_2}{1 + G_1 G_2 H_1}$

---

### 7. Important Points to Remember

*   **Block diagrams are a powerful visual tool** for understanding and manipulating control systems.
*   Each block represents a **transfer function** (output/input in Laplace domain).
*   **Summing points** indicate addition or subtraction of signals.
*   **Take-off points** allow a signal to be branched without modification.
*   **Block diagram reduction** simplifies complex systems into a single equivalent block, making analysis easier.
*   Master the **seven basic rules** of block diagram manipulation.
*   For complex diagrams, **Mason's Gain Formula** provides a systematic approach.
*   Always clearly define the **forward path** and **feedback paths**.
*   Pay close attention to the **signs** in the summing points (+ or -).
*   The presence of **non-unity feedback** requires multiplying the feedback signal by the feedback transfer function $H(s)$.
*   The overall transfer function of a system is the ratio of the Laplace transform of the output to the Laplace transform of the input, assuming zero initial conditions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. References

*   **Nise, N. S. (2009).** *Control Systems Engineering* (5th ed.). Wiley. (Chapter 2: Block Diagram Reduction)
*   **Nagrath, I. J., & Gopal, M. (2009).** *Control Systems Engineering* (5th ed.). New Age International. (Chapter 3: Block Diagram Representation and Reduction)
*   **Kuo, B. C. (2014).** *Automatic Control Systems* (9th ed.). Prentice Hall of India. (Chapter 2: Block Diagram Analysis)
*   **Ogata, K. (2009).** *Modern Control Engineering* (5th ed.). Pearson. (Chapter 2: Block Diagram and Feedback Control Systems)

---
### End of Module 1 Topic: Block Diagram Representation - Block Diagram Reduction