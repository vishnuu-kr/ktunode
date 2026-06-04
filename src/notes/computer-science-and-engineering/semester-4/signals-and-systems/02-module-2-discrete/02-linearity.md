---
title: "Linearity"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b149"
status: "completed"
scrapedAt: "2026-05-20T16:15:36.406Z"
---
# SIGNALS AND SYSTEMS - Module 2: Discrete - Linearity

## Introduction

This module focuses on Linearity in the context of discrete-time signals and systems. Linearity is a fundamental property of systems and understanding it is crucial for analyzing and designing systems effectively. A linear system is one that obeys the principles of superposition and homogeneity (scaling).

## Learning Outcomes

By the end of this topic, you should be able to:

*   Define linearity in the context of discrete-time systems.
*   Explain the principle of superposition.
*   Explain the principle of homogeneity (scaling).
*   Determine whether a given discrete-time system is linear or not.
*   Apply the linearity property to analyze and simplify system behavior.

## 1. Key Concepts and Definitions

### 1.1. Discrete-Time System

A discrete-time system is a system that operates on a discrete-time input signal, `x[n]`, and produces a discrete-time output signal, `y[n]`.  We often represent this as:

`x[n]  -->  System  --> y[n]`  or  `y[n] = T{x[n]}`

Where `T{}` is the transformation that the system performs on the input.

### 1.2. Linearity

A system is said to be linear if it satisfies both the properties of **superposition** and **homogeneity (scaling)**.

*   **Superposition:**  If an input signal `x1[n]` produces an output signal `y1[n]` and another input signal `x2[n]` produces an output signal `y2[n]`, then the input signal `x1[n] + x2[n]` must produce an output signal `y1[n] + y2[n]`.

    Mathematically:  If `x1[n]  --> y1[n]` and `x2[n]  --> y2[n]`, then `x1[n] + x2[n]  --> y1[n] + y2[n]`

*   **Homogeneity (Scaling):**  If an input signal `x[n]` produces an output signal `y[n]`, then multiplying the input signal by a constant `a` must result in multiplying the output signal by the same constant `a`.

    Mathematically:  If `x[n]  --> y[n]`, then `a*x[n]  --> a*y[n]`

A system is considered linear if and only if **both** superposition and homogeneity hold. If either property fails, the system is non-linear.  Equivalently, Linearity can be written as a single equation. A system T{x[n]} is linear if:

`T{a*x1[n] + b*x2[n]} = a*T{x1[n]} + b*T{x2[n]}`

where *a* and *b* are constants.

## 2. Superposition

The principle of superposition states that the response of a linear system to a sum of inputs is equal to the sum of the responses to each input individually. This is a powerful tool for analyzing complex systems by breaking down the input signal into simpler components.

**Example:**

Consider a system `y[n] = x[n] + x[n-1]`.

*   Let `x1[n] = n` then `y1[n] = x1[n] + x1[n-1] = n + (n-1) = 2n - 1`
*   Let `x2[n] = n^2` then `y2[n] = x2[n] + x2[n-1] = n^2 + (n-1)^2 = n^2 + n^2 - 2n + 1 = 2n^2 - 2n + 1`
*   Now, let `x3[n] = x1[n] + x2[n] = n + n^2`
*   Then, `y3[n] = x3[n] + x3[n-1] = (n + n^2) + ((n-1) + (n-1)^2) = n + n^2 + n - 1 + n^2 - 2n + 1 = 2n^2 - 2n + n + n = 2n^2 - 2n = (2n-1) + (2n^2-2n+1) = y1[n] + y2[n]`

Therefore, the system satisfies the superposition property.

## 3. Homogeneity (Scaling)

The homogeneity or scaling property states that if the input to a linear system is scaled by a constant factor, the output will be scaled by the same factor.

**Example:**

Consider the same system `y[n] = x[n] + x[n-1]`.

*   Let `x[n] = n` then `y[n] = x[n] + x[n-1] = n + (n-1) = 2n - 1`
*   Now, let `x'[n] = a*x[n] = a*n` where *a* is a constant.
*   Then, `y'[n] = x'[n] + x'[n-1] = a*n + a*(n-1) = a*n + a*n - a = 2an - a = a*(2n - 1) = a*y[n]`

Therefore, the system satisfies the homogeneity property.

## 4. Determining Linearity

To determine if a system is linear, you need to test both superposition and homogeneity. If both properties hold, the system is linear; otherwise, it is non-linear.

**Steps:**

1.  **Assume two arbitrary inputs `x1[n]` and `x2[n]`**.
2.  **Find the corresponding outputs `y1[n]` and `y2[n]`**.
3.  **Find the output `y3[n]` for the input `x3[n] = a*x1[n] + b*x2[n]`**, where `a` and `b` are arbitrary constants.
4.  **Check if `y3[n] = a*y1[n] + b*y2[n]`**.
    *   If it holds, the system is linear.
    *   If it doesn't hold, the system is non-linear.

**Examples:**

**Example 1:  `y[n] = n*x[n]`**

1.  `x1[n]  --> y1[n] = n*x1[n]`
2.  `x2[n]  --> y2[n] = n*x2[n]`
3.  `x3[n] = a*x1[n] + b*x2[n]  --> y3[n] = n*x3[n] = n*(a*x1[n] + b*x2[n]) = a*n*x1[n] + b*n*x2[n]`
4.  `a*y1[n] + b*y2[n] = a*n*x1[n] + b*n*x2[n]`

Since `y3[n] = a*y1[n] + b*y2[n]`, the system is **linear**.

**Example 2:  `y[n] = x[n]^2`**

1.  `x1[n]  --> y1[n] = x1[n]^2`
2.  `x2[n]  --> y2[n] = x2[n]^2`
3.  `x3[n] = a*x1[n] + b*x2[n]  --> y3[n] = (a*x1[n] + b*x2[n])^2 = a^2*x1[n]^2 + 2*a*b*x1[n]*x2[n] + b^2*x2[n]^2`
4.  `a*y1[n] + b*y2[n] = a*x1[n]^2 + b*x2[n]^2`

Since `y3[n] != a*y1[n] + b*y2[n]`, the system is **non-linear**.  Notice the extra `2*a*b*x1[n]*x2[n]` term.

**Example 3: `y[n] = x[n] + 2`**

1.  `x1[n] -> y1[n] = x1[n] + 2`
2.  `x2[n] -> y2[n] = x2[n] + 2`
3.  `x3[n] = a*x1[n] + b*x2[n] -> y3[n] = a*x1[n] + b*x2[n] + 2`
4.  `a*y1[n] + b*y2[n] = a*(x1[n] + 2) + b*(x2[n] + 2) = a*x1[n] + 2a + b*x2[n] + 2b = a*x1[n] + b*x2[n] + 2(a+b)`

Since `y3[n] != a*y1[n] + b*y2[n]`  (because `2 != 2(a+b)` unless `a+b = 1`), the system is **non-linear**.  Even though there is no exponent, the addition of a constant makes the system non-linear.

**Important Note:**  The presence of a constant term in the system equation (e.g., adding a constant to `x[n]`) generally indicates that the system is non-linear. However, it is crucial to prove this by testing superposition and homogeneity.

## 5. Application of Linearity

The linearity property allows us to analyze and simplify complex system behavior in several ways:

*   **Decomposition:** We can decompose complex input signals into simpler components (e.g., using Fourier analysis) and analyze the system's response to each component separately.  The total output is then the sum of the individual responses (superposition).
*   **System Analysis:**  Knowing that a system is linear allows us to predict its behavior for arbitrary inputs based on its response to a few well-chosen inputs.
*   **System Design:** Linearity is a desirable property in many systems because it simplifies analysis and control. System designers often strive to create linear systems or to approximate non-linear systems with linear models.

## 6. Practice Questions/Exercises

**Question 1:** Determine if the following system is linear:  `y[n] = x[n] - x[n-2]`

**Answer:**

1.  `x1[n] --> y1[n] = x1[n] - x1[n-2]`
2.  `x2[n] --> y2[n] = x2[n] - x2[n-2]`
3.  `x3[n] = a*x1[n] + b*x2[n] --> y3[n] = x3[n] - x3[n-2] = (a*x1[n] + b*x2[n]) - (a*x1[n-2] + b*x2[n-2]) = a*(x1[n] - x1[n-2]) + b*(x2[n] - x2[n-2])`
4.  `a*y1[n] + b*y2[n] = a*(x1[n] - x1[n-2]) + b*(x2[n] - x2[n-2])`

Since `y3[n] = a*y1[n] + b*y2[n]`, the system is **linear**.

**Question 2:** Determine if the following system is linear: `y[n] = x[-n]`

**Answer:**

1.  `x1[n] --> y1[n] = x1[-n]`
2.  `x2[n] --> y2[n] = x2[-n]`
3.  `x3[n] = a*x1[n] + b*x2[n] --> y3[n] = x3[-n] = a*x1[-n] + b*x2[-n]`
4.  `a*y1[n] + b*y2[n] = a*x1[-n] + b*x2[-n]`

Since `y3[n] = a*y1[n] + b*y2[n]`, the system is **linear**.  Time reversal preserves linearity.

**Question 3:** Determine if the following system is linear:  `y[n] = e^{x[n]}`

**Answer:**

1.  `x1[n] --> y1[n] = e^{x1[n]}`
2.  `x2[n] --> y2[n] = e^{x2[n]}`
3.  `x3[n] = a*x1[n] + b*x2[n] --> y3[n] = e^{a*x1[n] + b*x2[n]}`
4.  `a*y1[n] + b*y2[n] = a*e^{x1[n]} + b*e^{x2[n]}`

Since `y3[n] != a*y1[n] + b*y2[n]`, the system is **non-linear**.  Exponential functions generally lead to non-linear systems.

**Question 4:** Determine if the following system is linear:  `y[n] = x[n]u[n]` where `u[n]` is the unit step function.

**Answer:**

1.  `x1[n] -> y1[n] = x1[n]u[n]`
2.  `x2[n] -> y2[n] = x2[n]u[n]`
3.  `x3[n] = ax1[n] + bx2[n] -> y3[n] = x3[n]u[n] = (ax1[n] + bx2[n])u[n] = ax1[n]u[n] + bx2[n]u[n]`
4.  `a*y1[n] + b*y2[n] = a*x1[n]u[n] + b*x2[n]u[n]`

Since `y3[n] = a*y1[n] + b*y2[n]`, the system is **linear**.  Multiplying by a function of *n* (like u[n]) does NOT automatically make a system nonlinear.  The key is to check the formal definition of linearity.

## 7. Important Points to Remember

*   Linearity requires both superposition and homogeneity.
*   The presence of a constant term added to the input signal typically indicates a non-linear system.
*   Squaring, exponentiating, or applying other non-linear functions to the input signal generally results in a non-linear system.
*   Time-reversal (e.g., `x[-n]`) maintains linearity.
*   Multiplication by a function of *n* like u[n] might still be linear, check carefully.
*   Understanding linearity is crucial for simplifying system analysis and design.

This comprehensive guide provides a solid foundation for understanding Linearity in discrete-time signals and systems. Remember to practice with different system equations to solidify your understanding. Good luck!
