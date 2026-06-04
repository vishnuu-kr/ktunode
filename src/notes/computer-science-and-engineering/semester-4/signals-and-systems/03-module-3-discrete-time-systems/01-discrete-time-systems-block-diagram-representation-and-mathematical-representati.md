---
title: "Discrete time systems - Block diagram representation and mathematical representation of discrete-time systems-Some common elements of Discrete-time systems (adder, constant multiplier, signal multiplier, unit delay, unit advance)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b15a"
status: "completed"
scrapedAt: "2026-05-20T16:15:47.655Z"
---
# SIGNALS AND SYSTEMS - Module 3: Discrete-Time Systems

## Topic: Discrete-Time Systems - Block Diagram and Mathematical Representation, Common Elements

**Learning Outcomes:**

*   Understand the concept of a discrete-time system.
*   Represent discrete-time systems using block diagrams.
*   Represent discrete-time systems mathematically using difference equations.
*   Recognize and understand the function of common discrete-time system elements (adder, constant multiplier, signal multiplier, unit delay, unit advance).
*   Analyze simple discrete-time systems constructed from these basic elements.

**1. Discrete-Time Systems: Introduction**

*   **Definition:** A discrete-time system is a system that operates on a discrete-time input signal, *x[n]*, and produces a discrete-time output signal, *y[n]*.  Discrete-time means the signal is defined only at discrete points in time, typically integer values of *n*.

*   **Representation:**  A discrete-time system is often represented conceptually as a transformation *T* that maps the input signal *x[n]* to the output signal *y[n]*.  Mathematically:

    `y[n] = T{x[n]}`

*   **Examples:**
    *   A digital filter processing audio samples.
    *   A control system adjusting a machine based on sensor readings taken at regular intervals.
    *   An algorithm calculating the moving average of a stock price.

**2. Block Diagram Representation of Discrete-Time Systems**

Block diagrams are a visual way to represent the interconnection of various elements within a discrete-time system. They provide a clear picture of the signal flow and the operations performed.

*   **Advantages:**
    *   Easy to understand and visualize system structure.
    *   Facilitates system analysis and design.
    *   Helps in identifying and isolating system components.

*   **Basic Elements and their Block Diagram Symbols:**

    *   **Adder:**  Adds two or more input signals to produce an output signal that is the sum of the inputs.

        *   Symbol:  A circle with '+' inside. Multiple arrows pointing towards the circle (inputs), and one arrow pointing away (output).

        *   Equation: `y[n] = x1[n] + x2[n] + ... + xk[n]`

    *   **Constant Multiplier:** Multiplies the input signal by a constant value (gain).

        *   Symbol:  A triangle with the constant value (e.g., 'A') inside. One input and one output.

        *   Equation: `y[n] = A * x[n]`

    *   **Signal Multiplier:**  Multiplies two input signals to produce an output signal that is the product of the inputs.

        *   Symbol: A circle with 'x' inside. Two arrows pointing towards the circle (inputs), and one arrow pointing away (output).

        *   Equation: `y[n] = x1[n] * x2[n]`

    *   **Unit Delay:**  Delays the input signal by one sample period.  Often denoted as z<sup>-1</sup> in the z-transform domain.

        *   Symbol: A box labeled 'z<sup>-1</sup>'. One input and one output.

        *   Equation: `y[n] = x[n-1]`

    *   **Unit Advance:** Advances the input signal by one sample period.  Often denoted as z in the z-transform domain.

        *   Symbol: A box labeled 'z'. One input and one output.

        *   Equation: `y[n] = x[n+1]`

**Example Block Diagram:**

Consider a system defined by the equation `y[n] = 0.5x[n] + 0.5x[n-1]`.  This is a simple moving average filter.  The block diagram would consist of:

1.  A Unit Delay element (z<sup>-1</sup>) taking `x[n]` as input and producing `x[n-1]` as output.
2.  A Constant Multiplier with a value of 0.5, multiplying `x[n]`.
3.  A Constant Multiplier with a value of 0.5, multiplying `x[n-1]`.
4.  An Adder adding the outputs of the two Constant Multipliers to produce `y[n]`.

**3. Mathematical Representation of Discrete-Time Systems: Difference Equations**

Difference equations are mathematical expressions that relate the output of a discrete-time system at a given time *n* to the present and past values of the input and output.  They are the discrete-time equivalent of differential equations.

*   **General Form (for Linear Time-Invariant (LTI) systems):**

    `y[n] + a1y[n-1] + a2y[n-2] + ... + aNy[n-N] = b0x[n] + b1x[n-1] + b2x[n-2] + ... + bMx[n-M]`

    Where:
    *   `y[n]` is the current output.
    *   `y[n-i]` are past outputs (i = 1 to N).
    *   `x[n]` is the current input.
    *   `x[n-i]` are past inputs (i = 1 to M).
    *   `a_i` and `b_i` are constant coefficients.
    *   N is the order of the system (related to the number of delays of the output).

*   **Recursive vs. Non-Recursive Systems:**

    *   **Recursive (IIR - Infinite Impulse Response):**  The output *y[n]* depends on past values of the output *y[n-i]*.  These systems have feedback. The general difference equation form above represents a recursive system if any `a_i` (i > 0) is non-zero.

    *   **Non-Recursive (FIR - Finite Impulse Response):** The output *y[n]* depends only on the present and past values of the input *x[n-i]*. These systems do not have feedback.  In the general difference equation form, if all `a_i` (i > 0) are zero, the system is non-recursive.

**Example 1: Moving Average Filter (FIR)**

*   Equation: `y[n] = (1/3)x[n] + (1/3)x[n-1] + (1/3)x[n-2]`
*   This is a non-recursive filter because the output `y[n]` depends only on the current and past input values.

**Example 2: Simple Recursive Filter (IIR)**

*   Equation: `y[n] = 0.8y[n-1] + x[n]`
*   This is a recursive filter because the output `y[n]` depends on the previous output value `y[n-1]`.

**4. Combining Block Diagrams and Difference Equations**

A key skill is being able to move between the block diagram representation and the difference equation representation of a discrete-time system.

*   **From Block Diagram to Difference Equation:**  Trace the signal flow through the block diagram, writing down the equations for each element and combining them to obtain the overall difference equation.

*   **From Difference Equation to Block Diagram:** Start with the output `y[n]` and represent it as the sum of terms involving past outputs `y[n-i]` and present/past inputs `x[n-i]`. Use adders, constant multipliers, and unit delays to construct the diagram.

**Example:  System defined by the block diagram below**

*Imagine a block diagram with x[n] going into an adder.  One branch from the adder goes directly to y[n].  Another branch from the adder is multiplied by constant 'a', and then goes to a unit delay (z<sup>-1</sup>). The output of the unit delay is fed back into the other input of the adder.*

**Derivation:**

1.  `y[n] = x[n] + w[n]`  (Where w[n] is the signal being fed back into the adder)
2.  `w[n] = a * v[n]` (Where v[n] is the output of the delay element)
3.  `v[n] = y[n-1]`

Substituting (2) and (3) into (1):

`y[n] = x[n] + a * y[n-1]`

This is the difference equation representing the system.

**5. Important Points to Remember**

*   Discrete-time systems process signals defined at discrete points in time.
*   Block diagrams are visual representations that aid in understanding system structure.
*   Difference equations provide a mathematical description of the input-output relationship of the system.
*   Unit delay (z<sup>-1</sup>) is a fundamental element used extensively in discrete-time systems.
*   Recursive systems have feedback and can have infinite impulse responses (IIR).
*   Non-recursive systems do not have feedback and have finite impulse responses (FIR).

**Practice Questions/Exercises**

**Question 1:**

Draw the block diagram for the discrete-time system described by the following difference equation:

`y[n] = 0.6y[n-1] - 0.2y[n-2] + x[n] + 0.5x[n-1]`

**Answer 1:**

1.  Start with `x[n]` which is directly added to other terms.
2.  Add a constant multiplier of 0.5 to `x[n]` and then use a unit delay z<sup>-1</sup>.
3.  Add 0.5x[n-1] from step 2 to the current output.
4.  Create a feedback loop with two delay elements (z<sup>-1</sup> followed by another z<sup>-1</sup>) to get y[n-1] and y[n-2].
5.  Multiply y[n-1] by 0.6 and y[n-2] by -0.2.  These are added to the output of the adder described in step 3 to create y[n].

**Question 2:**

Determine the difference equation corresponding to the following block diagram:

*Imagine a block diagram where x[n] enters a constant multiplier with a value of 2. The output of the constant multiplier is added to another signal 'w[n]' to produce the output y[n]. The signal 'w[n]' is created by taking y[n], passing it through a unit delay z<sup>-1</sup>, and then multiplying the output of the delay element by a constant multiplier of -0.5.*

**Answer 2:**

1.  `y[n] = 2x[n] + w[n]`
2.  `w[n] = -0.5 * y[n-1]`

Substituting (2) into (1):

`y[n] = 2x[n] - 0.5y[n-1]`

**Question 3:**

Classify the following system as recursive or non-recursive:

`y[n] = x[n] - 2x[n-1] + x[n-2]`

**Answer 3:**

Non-recursive (FIR). The output `y[n]` depends only on present and past values of the input `x[n]`. There are no past values of `y` used to calculate `y[n]`.

**Question 4:**

What is the output *y[n]* of a unit delay system if the input is *x[n] = {1, 2, 3, 4}* (where the first element corresponds to *n=0*)?

**Answer 4:**

*y[n] = {0, 1, 2, 3}*  (The sequence is shifted to the right by one sample, and we assume initial conditions are zero.)

**Question 5:**

Describe the function of a constant multiplier with a value of 0.5.

**Answer 5:**

The constant multiplier with a value of 0.5 scales the input signal by a factor of 0.5 (halves the amplitude of the input signal).
