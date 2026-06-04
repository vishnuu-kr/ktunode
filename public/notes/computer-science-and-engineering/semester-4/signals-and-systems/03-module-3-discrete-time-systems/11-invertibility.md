---
title: "Invertibility"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b164"
status: "completed"
scrapedAt: "2026-05-20T16:15:54.736Z"
---
# Signals and Systems: Module 3 - Discrete-Time Systems - Invertibility

These notes cover the concept of invertibility in the context of discrete-time systems.

**Learning Outcomes:**

*   Understand the definition of an invertible system.
*   Determine if a given discrete-time system is invertible.
*   Find the inverse system for a given invertible discrete-time system.
*   Explain the practical significance of invertibility.

## 1. Key Concepts and Definitions

*   **System:** A system is a mapping (or transformation) that processes an input signal *x[n]* to produce an output signal *y[n]*. We can represent this as *y[n] = T{x[n]}*, where *T* is the system operator.

*   **Invertible System:** A system *T* is invertible if distinct inputs always produce distinct outputs.  In other words, knowledge of the output *y[n]* is sufficient to uniquely determine the input *x[n]*.  Mathematically, this means that for any two inputs *x1[n]* and *x2[n]*, if *x1[n] ≠ x2[n]*, then *T{x1[n]} ≠ T{x2[n]}*.

*   **Inverse System:**  If a system *T* is invertible, there exists another system *T<sup>-1</sup>* (called the inverse system) such that when *x[n]* is input to *T* to produce *y[n]*, and then *y[n]* is input to *T<sup>-1</sup>*, the output of *T<sup>-1</sup>* is *x[n]*.  Mathematically:

    *   *T<sup>-1</sup>{T{x[n]}} = x[n]*

*   **Non-Invertible System:** A system is non-invertible if different inputs can produce the same output.  In this case, it's impossible to uniquely determine the input from the output.

## 2. Determining Invertibility

Several approaches can be used to determine if a discrete-time system is invertible:

*   **Uniqueness of Output:** If you can find two *different* input signals that produce the *same* output signal, the system is *not* invertible. This is often the easiest method to use.

*   **Finding the Inverse System:**  If you can *explicitly* find a system *T<sup>-1</sup>* that satisfies the condition *T<sup>-1</sup>{T{x[n]}} = x[n]*, then the system *T* is invertible, and *T<sup>-1</sup>* is its inverse. This is a more constructive approach.

*   **Analyzing System Properties:** For LTI (Linear Time-Invariant) systems, invertibility is linked to the system's impulse response *h[n]*.  A system is invertible if and only if there exists an inverse system with impulse response *h<sub>inv</sub>[n]* such that *h[n] * h<sub>inv</sub>[n] = δ[n]*, where *δ[n]* is the unit impulse function (Kronecker delta).  In the Z-domain, this translates to  H(z)H<sub>inv</sub>(z) = 1, or H<sub>inv</sub>(z) = 1/H(z).

## 3. Examples

**Example 1: Invertible System**

Consider the system: *y[n] = 2x[n]*.

*   **Checking for uniqueness:** Suppose *y[n]* is given. Then we can determine *x[n]* as *x[n] = y[n]/2*. Since for every output there is a unique input, the system is invertible.

*   **Finding the inverse:** The inverse system is *x[n] = (1/2)y[n]*. To verify:
    *   *T<sup>-1</sup>{T{x[n]}} = T<sup>-1</sup>{2x[n]} = (1/2)(2x[n]) = x[n]*

**Example 2: Non-Invertible System**

Consider the system: *y[n] = x<sup>2</sup>[n]*.

*   **Checking for uniqueness:**  Let's say *y[n] = 4*. Then *x[n]* could be either 2 or -2.  Therefore, two different inputs can produce the same output.

*   **Conclusion:**  The system is non-invertible.  We cannot uniquely determine *x[n]* from *y[n]*.

**Example 3: Invertible System (Accumulator)**

Consider the accumulator system:  *y[n] = Σ<sub>k=-∞</sub><sup>n</sup> x[k]*.  Assume the system is initially at rest (i.e. *x[n] = 0* for *n < n<sub>0</sub>*).

*   **Finding the inverse:** The inverse system is the first difference system: *x[n] = y[n] - y[n-1]*.
    *   To verify, apply the inverse system to the output of the original system:
        *   *y[n] - y[n-1] = Σ<sub>k=-∞</sub><sup>n</sup> x[k] - Σ<sub>k=-∞</sub><sup>n-1</sup> x[k] = x[n]*

*   **Conclusion:** The accumulator system is invertible, and its inverse is the first difference system.

**Example 4: Non-Invertible System (Downsampler)**

Consider the downsampler system: *y[n] = x[2n]*.

*   **Checking for uniqueness:** Many different *x[n]* sequences can produce the same *y[n]*. For example,  *x<sub>1</sub>[n] = {1, 2, 3, 4, 5, 6...}* and *x<sub>2</sub>[n] = {1, 99, 3, 100, 5, 101...}* both produce *y[n] = {1, 3, 5...}*.

*   **Conclusion:** The downsampler is non-invertible because information is lost in the downsampling process.

## 4. Practical Significance of Invertibility

*   **Signal Recovery:** Invertibility is crucial when you need to recover the original signal after it has been processed by a system. If a system is non-invertible, some information is lost during processing, and perfect signal recovery is impossible.

*   **System Design:** Understanding invertibility helps in designing systems where the effects of certain operations need to be undone. For example, in communication systems, the receiver needs to "undo" the effects of the channel on the transmitted signal.

*   **Analysis:** Invertibility properties can be used to analyze the behavior and characteristics of systems.

## 5. Practice Questions

**Question 1:** Is the system *y[n] = 5x[n] + 2* invertible? If so, find its inverse.

**Answer:**

*   **Invertibility:**  Yes, the system is invertible.  For any given *y[n]*, we can uniquely determine *x[n]*:  *x[n] = (y[n] - 2)/5*.

*   **Inverse System:** *x[n] = (y[n] - 2)/5*

**Question 2:** Is the system *y[n] = |x[n]|* invertible? Explain.

**Answer:**

*   **Invertibility:** No, the system is not invertible.  The absolute value operation makes it impossible to determine the sign of *x[n]* from *y[n]*. For example, if *y[n] = 3*, *x[n]* could be either 3 or -3.

**Question 3:** Consider a system described by *y[n] = x[n+1] - x[n-1]*.  Find its Z-transform and determine if it is invertible by analyzing the Z-transform. (Assume ROC includes the unit circle).

**Answer:**

*   **Z-Transform:**  *Y(z) = zX(z) - z<sup>-1</sup>X(z) = (z - z<sup>-1</sup>)X(z)*. Therefore, *H(z) = Y(z)/X(z) = z - z<sup>-1</sup>*.

*   **Invertibility:**  For the system to be invertible, its inverse system transfer function must exist: *H<sub>inv</sub>(z) = 1/H(z) = 1/(z - z<sup>-1</sup>) = z/(z<sup>2</sup> - 1)*.
    The ROC must include the unit circle for a stable and causal inverse system. The poles of H<sub>inv</sub>(z) are at z = 1 and z = -1, both of which lie on the unit circle.  Therefore, a stable inverse system does *not* exist.  Hence, the original system is *not* invertible.

**Question 4:**  Is the system *y[n] = x[3n]* invertible? Explain.

**Answer:**

*   **Invertibility:** No, the system is not invertible. This is an example of an upsampler. The upsampler inserts zeros between samples of the input. This information is lost, and therefore the system is not invertible.

## 6. Important Points to Remember

*   Invertibility is a system property that determines whether the input can be uniquely recovered from the output.
*   If a system is invertible, it has an inverse system that "undoes" the effects of the original system.
*   Non-invertible systems lose information, making perfect signal recovery impossible.
*   Finding two different inputs that produce the same output is a good way to prove non-invertibility.
*   For LTI systems, invertibility is related to the existence of an inverse system with the appropriate impulse response or transfer function.
*   The ROC of the inverse system transfer function must include the unit circle for stability and causality if such a system is required.

These notes provide a foundation for understanding invertibility in discrete-time systems. Further exploration and practice are encouraged to solidify your understanding.
