---
title: "Eigen Sequences/ eigen functions for discrete-Time LTI Systems."
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b166"
status: "completed"
scrapedAt: "2026-05-20T16:15:56.150Z"
---
# Signals and Systems: Module 3 - Discrete-Time Systems: Eigen Sequences/Functions for Discrete-Time LTI Systems

## Introduction

This module delves into the concept of eigen sequences/eigenfunctions in the context of Discrete-Time Linear Time-Invariant (LTI) systems. Understanding eigen sequences is crucial for analyzing the behavior of LTI systems, particularly in frequency domain analysis.

## Learning Outcomes

Upon completion of this topic, you should be able to:

*   Define an eigen sequence/function for a discrete-time LTI system.
*   Determine if a given sequence is an eigen sequence of a specified LTI system.
*   Calculate the corresponding eigenvalue for a given eigen sequence and LTI system.
*   Understand the significance of complex exponentials as eigen sequences for LTI systems.
*   Apply the concept of eigen sequences to analyze the response of LTI systems to specific inputs.

## 1. Key Concepts and Definitions

*   **Discrete-Time System:** A system that operates on discrete-time signals (sequences).

*   **Linear Time-Invariant (LTI) System:** A system that satisfies the properties of linearity (superposition and scaling) and time-invariance (a time shift in the input results in an equal time shift in the output).

*   **Eigen Sequence/Function:** An input sequence to an LTI system that produces an output sequence that is a scaled version of the input sequence. In other words, if *x[n]* is an eigen sequence, then the output *y[n]* is *λx[n]*, where *λ* is a complex constant called the eigenvalue.

    *   **Mathematical Definition:** If *x[n]* is an eigen sequence for an LTI system *T*, then:
        *   *y[n] = T{x[n]} = λx[n]*
        *   where:
            *   *x[n]* is the input sequence (eigen sequence)
            *   *y[n]* is the output sequence
            *   *T{ }* represents the transformation performed by the LTI system.
            *   *λ* is the eigenvalue (a complex number).

*   **Eigenvalue:** The scaling factor (*λ*) associated with an eigen sequence.  It represents how the system scales the eigen sequence.

## 2. Complex Exponentials as Eigen Sequences

A complex exponential of the form *x[n] = z<sup>n</sup>* (where *z* is a complex number) is *always* an eigen sequence for an LTI system.  This is a fundamental property and the reason complex exponentials are so important in signal and system analysis.

*   **Proof:** Consider an LTI system with impulse response *h[n]*.  The output *y[n]* for an input *x[n]* is given by the convolution sum:

    *   *y[n] = x[n] * h[n] = Σ<sub>k=-∞</sub><sup>∞</sup> h[k]x[n-k]*

    *   Substituting *x[n] = z<sup>n</sup>*:

    *   *y[n] = Σ<sub>k=-∞</sub><sup>∞</sup> h[k]z<sup>n-k</sup> = z<sup>n</sup> Σ<sub>k=-∞</sub><sup>∞</sup> h[k]z<sup>-k</sup>*

    *   Notice that the term Σ<sub>k=-∞</sub><sup>∞</sup> h[k]z<sup>-k</sup> is a constant with respect to *n*.  Let's call it *H(z)*.  Therefore:

    *   *y[n] = H(z)z<sup>n</sup> = H(z)x[n]*

    *   This shows that the output *y[n]* is a scaled version of the input *x[n] = z<sup>n</sup>*, and *H(z)* is the eigenvalue.  *H(z)* is also known as the system's **transfer function** or **Z-transform of the impulse response**.

*   **Eigenvalue for Complex Exponentials:**  The eigenvalue corresponding to the eigen sequence *z<sup>n</sup>* is the system's transfer function evaluated at *z*, i.e., *H(z) = Σ<sub>k=-∞</sub><sup>∞</sup> h[k]z<sup>-k</sup>*.

*   **Special Case: Sinusoidal Sequences:** If *z = e<sup>jω</sup>*, then *x[n] = e<sup>jωn</sup>* is a complex sinusoid. This is a critically important case in frequency analysis because it demonstrates that complex sinusoids are eigen sequences of LTI systems. The corresponding eigenvalue is *H(e<sup>jω</sup>)*, which is the **frequency response** of the LTI system.

## 3. Determining Eigen Sequences and Eigenvalues: Examples

**Example 1:**

Consider an LTI system defined by the difference equation:

*   *y[n] = x[n] + 0.5x[n-1]*

Determine if *x[n] = (1/2)<sup>n</sup>u[n]* is an eigen sequence for this system, and if so, find the eigenvalue.

**Solution:**

1.  Calculate the output *y[n]* for the given input *x[n]*:

    *   *y[n] = x[n] + 0.5x[n-1] = (1/2)<sup>n</sup>u[n] + 0.5(1/2)<sup>n-1</sup>u[n-1]*
    *   *y[n] = (1/2)<sup>n</sup>u[n] + (1/2)<sup>n</sup>u[n-1]*
    *   *For n >= 1: y[n] = (1/2)<sup>n</sup> + (1/2)<sup>n</sup> = 2 * (1/2)<sup>n</sup>*
    *   *For n = 0: y[0] = (1/2)<sup>0</sup> = 1*

2.  Express *y[n]* in terms of *x[n]*. Notice that:
    *   *y[n] = 2(1/2)<sup>n</sup> = 2x[n]  for n >= 1*
    *   *y[0] = 1 while 2x[0] = 2*

3.  Since *y[n]* is *NOT* a scaled version of *x[n]* for *all* *n*,  *x[n] = (1/2)<sup>n</sup>u[n]* is *NOT* an eigen sequence for this system.  The scaling is inconsistent, especially at n=0 due to the unit step.

**Example 2:**

Consider an LTI system with impulse response *h[n] = δ[n] - δ[n-1]*. Is *x[n] = (1/3)<sup>n</sup>* an eigen sequence? If so, find the eigenvalue.

**Solution:**

1.  Calculate the output: *y[n] = x[n] * h[n] = x[n] * (δ[n] - δ[n-1]) = x[n] - x[n-1]*

2.  Substitute *x[n] = (1/3)<sup>n</sup>*: *y[n] = (1/3)<sup>n</sup> - (1/3)<sup>n-1</sup> = (1/3)<sup>n</sup> - 3(1/3)<sup>n</sup> = -2(1/3)<sup>n</sup>*

3.  Express *y[n]* in terms of *x[n]*. *y[n] = -2(1/3)<sup>n</sup> = -2x[n]*

4.  Since *y[n] = -2x[n]*, *x[n] = (1/3)<sup>n</sup>* *is* an eigen sequence. The eigenvalue is *λ = -2*.

**Example 3:**

Find the eigenvalue for the system *y[n] = 2x[n-1]* given the input *x[n] = e<sup>j(π/4)n</sup>*.

**Solution:**

1.  *y[n] = 2x[n-1] = 2e<sup>j(π/4)(n-1)</sup> = 2e<sup>j(π/4)n</sup>e<sup>-j(π/4)</sup>*

2.  Rewrite *y[n]* in terms of *x[n] = e<sup>j(π/4)n</sup>*: *y[n] = (2e<sup>-j(π/4)</sup>)e<sup>j(π/4)n</sup> = (2e<sup>-j(π/4)</sup>)x[n]*

3.  Therefore, the eigenvalue is *λ = 2e<sup>-j(π/4)</sup> = 2(cos(-π/4) + jsin(-π/4)) = 2(√2/2 - j√2/2) = √2 - j√2*.

**Alternative Solution (Using Transfer Function):**

1.  The impulse response of the system is *h[n] = 2δ[n-1]*.

2.  The transfer function is *H(z) = Σ<sub>k=-∞</sub><sup>∞</sup> h[k]z<sup>-k</sup> = Σ<sub>k=-∞</sub><sup>∞</sup> 2δ[n-1]z<sup>-k</sup> = 2z<sup>-1</sup>*.

3.  Since *x[n] = e<sup>j(π/4)n</sup>*, we have *z = e<sup>j(π/4)</sup>*.  The eigenvalue is then *H(e<sup>j(π/4)</sup>) = 2e<sup>-j(π/4)</sup>*, which is the same result as before.

## 4. Significance of Eigen Sequences

*   **Frequency Analysis:**  Complex exponentials (and thus sinusoidal sequences) are eigen sequences for LTI systems. This is the foundation of frequency analysis. The Fourier transform decomposes signals into a sum of complex exponentials. Knowing how an LTI system affects each frequency component (through its frequency response, *H(e<sup>jω</sup>)*) allows us to predict the system's response to arbitrary inputs.

*   **System Characterization:** Eigen sequences and their corresponding eigenvalues provide a way to characterize an LTI system. Knowing the eigenvalues for a set of eigen sequences can tell us a lot about the system's behavior.

*   **Simplifying Analysis:**  If an input signal can be expressed as a linear combination of eigen sequences, the output can be easily calculated as a linear combination of the corresponding scaled eigen sequences. This simplifies the analysis of LTI systems.

## 5. Practice Questions/Exercises

**Question 1:**

An LTI system is described by the difference equation *y[n] = x[n] - 2x[n-1] + x[n-2]*.

a) Determine the impulse response *h[n]* of the system.
b) Is *x[n] = (2)<sup>n</sup>* an eigen sequence for this system? If so, find the eigenvalue.
c) Is *x[n] = cos(πn)* an eigen sequence for this system? If so, find the eigenvalue.

**Question 2:**

Determine if the sequence *x[n] = n* is an eigen sequence for the system defined by *y[n] = x[n-1]*.

**Question 3:**

The impulse response of an LTI system is given by *h[n] = a<sup>n</sup>u[n]*, where |a| < 1.  Find the eigenvalue corresponding to the eigen sequence *x[n] = e<sup>jωn</sup>*. Express your answer in terms of *a* and *ω*.

## 6. Answers to Practice Questions

**Answer 1:**

a)  The impulse response *h[n]* is the output when *x[n] = δ[n]*. Therefore, *h[n] = δ[n] - 2δ[n-1] + δ[n-2]*.

b)  *y[n] = x[n] - 2x[n-1] + x[n-2] = (2)<sup>n</sup> - 2(2)<sup>n-1</sup> + (2)<sup>n-2</sup> = (2)<sup>n</sup> - (2)<sup>n</sup> + (1/4)(2)<sup>n</sup> = (1/4)(2)<sup>n</sup>*
    Since *y[n] = (1/4)x[n]*, *x[n] = (2)<sup>n</sup>* *is* an eigen sequence, and the eigenvalue is *λ = 1/4*.

c) *x[n] = cos(πn) = (-1)<sup>n</sup>*.  Using the same difference equation:
    *y[n] = x[n] - 2x[n-1] + x[n-2] = (-1)<sup>n</sup> - 2(-1)<sup>n-1</sup> + (-1)<sup>n-2</sup> = (-1)<sup>n</sup> + 2(-1)<sup>n</sup> + (-1)<sup>n</sup> = 4(-1)<sup>n</sup>*
    Since *y[n] = 4x[n]*, *x[n] = cos(πn)* *is* an eigen sequence, and the eigenvalue is *λ = 4*.

**Answer 2:**

*y[n] = x[n-1] = n-1*.  This is not a scaled version of *x[n] = n*.  Therefore, *x[n] = n* is *not* an eigen sequence.

**Answer 3:**

The transfer function is *H(z) = Σ<sub>n=-∞</sub><sup>∞</sup> h[n]z<sup>-n</sup> = Σ<sub>n=0</sub><sup>∞</sup> a<sup>n</sup>z<sup>-n</sup> = Σ<sub>n=0</sub><sup>∞</sup> (az<sup>-1</sup>)<sup>n</sup>*.  This is a geometric series which converges to *1/(1 - az<sup>-1</sup>)* if |az<sup>-1</sup>| < 1. Since *x[n] = e<sup>jωn</sup>*, *z = e<sup>jω</sup>*. Therefore, *H(e<sup>jω</sup>) = 1/(1 - ae<sup>-jω</sup>)*.  The eigenvalue is *λ = 1/(1 - ae<sup>-jω</sup>)*.

## 7. Important Points to Remember

*   Complex exponentials *z<sup>n</sup>* are *always* eigen sequences for LTI systems.
*   The eigenvalue associated with the eigen sequence *z<sup>n</sup>* is the system's transfer function *H(z)*.
*   When *z = e<sup>jω</sup>*, *H(e<sup>jω</sup>)* is the frequency response of the system, and *e<sup>jωn</sup>* is an eigen sequence.
*   If an input is a linear combination of eigen sequences, the output is the same linear combination of the corresponding scaled eigen sequences.
*   Understanding eigen sequences is fundamental for understanding frequency domain analysis of LTI systems.
