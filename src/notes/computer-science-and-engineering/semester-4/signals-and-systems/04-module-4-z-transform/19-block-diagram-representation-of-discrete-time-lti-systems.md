---
title: "Block Diagram Representation of Discrete-Time LTI Systems"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b17a"
status: "completed"
scrapedAt: "2026-05-20T16:16:09.904Z"
---
# SIGNALS AND SYSTEMS - MODULE 4: Z-TRANSFORM - BLOCK DIAGRAM REPRESENTATION OF DISCRETE-TIME LTI SYSTEMS

## Introduction

This module explores the block diagram representation of Discrete-Time Linear Time-Invariant (LTI) systems using the Z-transform. Block diagrams offer a visual and intuitive way to represent and analyze complex systems. We'll cover the fundamental building blocks, how to combine them, and relate them to the system's transfer function.

## Learning Outcomes

By the end of this topic, you should be able to:

1.  Understand the basic building blocks for discrete-time LTI system block diagrams: adder, multiplier, and delay element.
2.  Represent a difference equation as a block diagram.
3.  Derive the transfer function H(z) from a given block diagram.
4.  Construct a block diagram from a given transfer function H(z).
5.  Recognize and implement canonical forms of block diagrams: Direct Form I, Direct Form II, Cascade Form, and Parallel Form.
6.  Analyze and simplify interconnected block diagrams.

## 1. Basic Building Blocks

Discrete-time LTI systems can be represented using three fundamental building blocks:

*   **Adder:**  The adder sums two or more input signals to produce an output signal. Mathematically:

    ```
    y[n] = x1[n] + x2[n] + ... + xk[n]
    ```

    Symbolically:

    ```
       x1[n]  -----> (+) -----> y[n]
       x2[n]  -----> |
               .....> |
       xk[n]  -----> |
    ```

*   **Multiplier:** The multiplier multiplies an input signal by a constant coefficient. Mathematically:

    ```
    y[n] = a * x[n]
    ```

    Symbolically:

    ```
    x[n] -----> [a] -----> y[n]
    ```

*   **Delay Element (Unit Delay):** The delay element delays the input signal by one sample. Mathematically:

    ```
    y[n] = x[n-1]
    ```

    Taking the Z-transform of both sides:

    ```
    Y(z) = z^(-1) * X(z)
    ```

    Symbolically:

    ```
    x[n] -----> [z^(-1)] -----> y[n]  (or)   X(z) -----> [z^(-1)] -----> Y(z)
    ```

    **Key Point:**  `z^(-1)` represents a delay of one sample in the time domain.

## 2. Representing a Difference Equation as a Block Diagram

A difference equation describes the relationship between the input and output of a discrete-time LTI system. We can represent a difference equation using the basic building blocks described above.

**Example:**

Consider the difference equation:

```
y[n] = a*y[n-1] + b*x[n]
```

**Steps to construct the block diagram:**

1.  Isolate the highest-order term (in this case, `y[n]`).
2.  Represent the remaining terms using adders, multipliers, and delay elements.
3.  Connect the components to form the output `y[n]`.

**Block Diagram:**

```
    x[n] ----> [b] ----> (+) -----> y[n]
                       ^    |
                       |    [a] ----> [z^(-1)] ---->|
```

**Explanation:**

*   `x[n]` is multiplied by `b`.
*   `y[n]` is delayed by one sample (`z^(-1)`), multiplied by `a`, and fed back to the adder.
*   The adder sums `b*x[n]` and `a*y[n-1]` to produce `y[n]`.

## 3. Deriving the Transfer Function H(z) from a Block Diagram

The transfer function H(z) is the ratio of the output Z-transform to the input Z-transform, assuming zero initial conditions.  `H(z) = Y(z) / X(z)`.

**Steps:**

1.  Represent each block by its Z-transform equivalent (e.g., `z^(-1)` for a delay).
2.  Write equations for the intermediate signals at the output of each block.
3.  Solve for Y(z) in terms of X(z).
4.  Calculate H(z) = Y(z)/X(z).

**Example:**

Consider the block diagram from the previous example:

```
    X(z) ----> [b] ----> (+) -----> Y(z)
                       ^    |
                       |    [a] ----> [z^(-1)] ---->|
```

1.  Write the equation for Y(z):

    ```
    Y(z) = b*X(z) + a*z^(-1)*Y(z)
    ```

2.  Solve for Y(z):

    ```
    Y(z) - a*z^(-1)*Y(z) = b*X(z)
    Y(z) * (1 - a*z^(-1)) = b*X(z)
    ```

3.  Calculate H(z):

    ```
    H(z) = Y(z) / X(z) = b / (1 - a*z^(-1))
    ```

    Or, multiplying numerator and denominator by z:

    ```
    H(z) = b*z / (z - a)
    ```

## 4. Constructing a Block Diagram from a Transfer Function H(z)

This is the reverse process of deriving H(z).  We need to decompose H(z) into simpler components that can be implemented using adders, multipliers, and delay elements. This often involves recognizing different canonical forms.

**Example:**

Given the transfer function:

```
H(z) = (b0 + b1*z^(-1)) / (1 + a1*z^(-1))
```

We can construct a block diagram as follows:

```
    X(z) ----> [b0] ----> (+) -----> Y(z)
             |           ^    |
             |----->[z^(-1)]--->[b1]--->|
             |           |    [a1]----> [z^(-1)] ---->[(-)] ----> |
             ------------|--------------------------
```

**Explanation:**

1. Multiply the numerator and denominator by *z<sup>-1</sup>* as needed to create a proper transfer function (highest power of *z* in numerator ≤ highest power of *z* in denominator).

2. The numerator coefficients (b0, b1) are associated with the feedforward path.

3. The denominator coefficients (a1) are associated with the feedback path and have a negative sign applied to them since they're subtracted in the denominator of *H(z)*.

## 5. Canonical Forms of Block Diagrams

Canonical forms are specific block diagram structures that minimize the number of delay elements required to implement a given transfer function. They are important for efficient hardware implementation.  We will cover four common canonical forms:

*   **Direct Form I:**  This form directly implements the difference equation. It requires separate delay elements for the input and output signals, which is generally not efficient.

*   **Direct Form II:** This form is obtained by reversing the order of the delay elements in Direct Form I and combining the cascaded delay elements. It minimizes the number of delay elements and is generally preferred over Direct Form I. It is also known as *canonical form*.

*   **Cascade Form:**  The transfer function is factored into a product of simpler transfer functions (typically first-order or second-order sections).  Each section is implemented in either Direct Form I or Direct Form II, and then the sections are cascaded (connected in series).

*   **Parallel Form:** The transfer function is expressed as a sum of simpler transfer functions using partial fraction expansion.  Each term in the sum is implemented in either Direct Form I or Direct Form II, and the outputs of these parallel sections are summed to produce the overall output.

**Example: Direct Form I and Direct Form II for H(z) = (b0 + b1*z^(-1)) / (1 + a1*z^(-1))**

**Direct Form I:**

```
    X(z) ----> [b0] ----> (+) -----> Y1(z) ----> (+) -----> Y(z)
             |           |           ^
             |----->[z^(-1)]--->[b1]--->|           |
             ---------------------------[z^(-1)]--->[(-a1)]--->|
                                                    ------------
```

```
Y1(z) = b0*X(z) + b1*z^(-1)*X(z)
Y(z)  = Y1(z) - a1*z^(-1)*Y(z)
```

**Direct Form II (Canonical Form):**

```
    X(z) ----> (+) -----> W(z) ----> [b0] ----> (+) -----> Y(z)
             |      ^    |                |
             |      |    |---->[b1]---->|
             |---->[(-a1)]-->[z^(-1)]-->|
             -----------------------
```

```
W(z) = X(z) - a1*z^(-1)*W(z)
Y(z) = b0*W(z) + b1*z^(-1)*W(z)
```

Notice that Direct Form II uses only one delay element compared to two in Direct Form I. The signal W(z) is called the "state variable".

**General Form of Direct Form II for H(z) = (b0 + b1*z^(-1) + ... + bm*z^(-m)) / (1 + a1*z^(-1) + ... + an*z^(-n))**

```
X(z) ----> (+) -----> W(z)
         |       ^    |
         |       |    |---->[b0]---->(+)----->Y(z)
         |       |    |---->[z^(-1)]>[b1]---->(+)----->
         |       |    |---->[z^(-1)]>[z^(-1)]>[b2]---->(+)----->
         |       |    |  ...
         |       |    |---->[z^(-1)]...[z^(-1)]>[bm]---->(+)----->
         |       |
         |---->[(-a1)]>[z^(-1)]---->(+)
         |---->[(-a2)]>[z^(-1)]>[z^(-1)]---->(+)
         |  ...
         |---->[(-an)]>[z^(-1)]...[z^(-1)]---->(+)
```

## 6. Analyzing and Simplifying Interconnected Block Diagrams

Complex systems often involve interconnected subsystems represented by block diagrams. To analyze such systems, we need to simplify the block diagram to obtain a single equivalent transfer function.

**Common Simplification Rules:**

*   **Cascade Connection:** H(z) = H1(z) * H2(z)
*   **Parallel Connection:** H(z) = H1(z) + H2(z)
*   **Feedback Connection:** H(z) = H1(z) / (1 + H1(z) * H2(z))  (For negative feedback)
                                    H(z) = H1(z) / (1 - H1(z) * H2(z))  (For positive feedback)

**Steps for Simplification:**

1.  Identify cascade, parallel, and feedback connections.
2.  Apply the appropriate simplification rules to reduce the complexity of the diagram.
3.  Repeat steps 1 and 2 until a single equivalent transfer function is obtained.

**Example:**

Consider a system with the following interconnected block diagram:

```
    X(z) ----> [H1(z)] ----> (+) -----> Y(z)
                       ^    |
                       |    [H2(z)] ----> (-) ----> |
```

This is a negative feedback system. The equivalent transfer function is:

```
H(z) = H1(z) / (1 + H1(z) * H2(z))
```

## Important Points to Remember

*   `z^(-1)` represents a delay of one sample in the time domain.
*   The transfer function `H(z)` is the ratio of the output Z-transform `Y(z)` to the input Z-transform `X(z)`.
*   Canonical forms minimize the number of delay elements required for implementation. Direct Form II is usually the preferred implementation.
*   When simplifying block diagrams, carefully identify cascade, parallel, and feedback connections and apply the appropriate rules.
*   Always pay attention to the signs in feedback loops (positive or negative).

## Practice Questions/Exercises

**Question 1:** Draw the Direct Form II block diagram for the transfer function: `H(z) = (1 + 2z^(-1)) / (1 - 0.5z^(-1) + 0.25z^(-2))`

**Answer:**

```
    X(z) ----> (+) -----> W(z)
         |       ^    |
         |       |    |---->[1]---->(+)----->Y(z)
         |       |    |---->[z^(-1)]>[2]---->(+)----->
         |       |
         |---->[0.5]>[z^(-1)]---->(+)
         |---->[(-0.25)]>[z^(-1)]>[z^(-1)]---->(+)
```

**Question 2:**  Find the transfer function H(z) for the following block diagram:

```
    X(z) ----> [2] ----> (+) -----> Y(z)
                       ^    |
                       |    [z^(-1)] ----> (+)---->|
```

**Answer:**

```
Y(z) = 2*X(z) + z^(-1)*Y(z)
Y(z) - z^(-1)*Y(z) = 2*X(z)
Y(z)(1 - z^(-1)) = 2*X(z)
H(z) = Y(z)/X(z) = 2 / (1 - z^(-1))
```

**Question 3:** Simplify the following block diagram to find the overall transfer function H(z):

```
    X(z) ----> [H1(z)] ----> (+) -----> [H2(z)] ----> Y(z)
                      |
                      |------>[H3(z)]<------(-)--------|
```

**Answer:**

First, find the transfer function of the feedback loop: `G(z) = H1(z) / (1 + H1(z)*H3(z))`

Then, since the feedback loop is in cascade with H2(z), the overall transfer function is: `H(z) = G(z) * H2(z) = [H1(z) * H2(z)] / [1 + H1(z) * H3(z)]`

This set of notes provides a comprehensive overview of block diagram representation of discrete-time LTI systems in the context of the Z-transform.  Understanding these concepts and practicing the examples will significantly improve your understanding of signals and systems.
