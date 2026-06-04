---
title: "Properties of Discrete-Time Fourier Series - Linearity"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b13d"
status: "completed"
scrapedAt: "2026-05-20T16:15:29.531Z"
---
# SIGNALS AND SYSTEMS - Module 1: 1D Signals - Discrete-Time Fourier Series: Linearity

## Learning Outcomes:

*   Understand the linearity property of the Discrete-Time Fourier Series (DTFS).
*   Apply the linearity property to simplify DTFS calculations.
*   Use the linearity property to determine the DTFS coefficients of a combined signal.

## 1. Key Concepts and Definitions:

*   **Discrete-Time Fourier Series (DTFS):** Represents a periodic discrete-time signal as a sum of complex exponentials.  It's applicable only to periodic discrete-time signals.

*   **Periodic Discrete-Time Signal:** A signal x[n] is periodic if x[n] = x[n + N] for all n, where N is a positive integer called the period.

*   **DTFS Representation:**
    *   **Synthesis Equation (Inverse DTFS):**  x[n] = ∑_{k=<N>} a_k * e^(j(2π/N)kn)  where `<N>` denotes summation over one period (e.g., from k=0 to N-1).
    *   **Analysis Equation (DTFS Coefficients):** a_k = (1/N) ∑_{n=<N>} x[n] * e^(-j(2π/N)kn)

*   **DTFS Coefficients (a_k):** Also known as Fourier coefficients, represent the amplitude and phase of the complex exponentials in the DTFS representation of the signal.  a_k is periodic with period N (a_k = a_{k+N}).

*   **Linearity:**  A property stating that the response of a system to a linear combination of inputs is equal to the linear combination of the responses to each input individually.

## 2. Linearity Property of DTFS:

The Linearity property states:

*   If x[n] has DTFS coefficients a_k, i.e., x[n] <---> a_k
*   And y[n] has DTFS coefficients b_k, i.e., y[n] <---> b_k
*   Then, for any constants A and B, the signal A*x[n] + B*y[n] has DTFS coefficients A*a_k + B*b_k.

    In other words:

    A*x[n] + B*y[n]  <---> A*a_k + B*b_k

**Mathematical Proof:**

Let z[n] = A*x[n] + B*y[n].  We need to find the DTFS coefficients of z[n], which we'll call c_k.

Using the analysis equation:

c_k = (1/N) ∑_{n=<N>} z[n] * e^(-j(2π/N)kn)
c_k = (1/N) ∑_{n=<N>} (A*x[n] + B*y[n]) * e^(-j(2π/N)kn)
c_k = (1/N) ∑_{n=<N>} A*x[n] * e^(-j(2π/N)kn) + (1/N) ∑_{n=<N>} B*y[n] * e^(-j(2π/N)kn)
c_k = A * (1/N) ∑_{n=<N>} x[n] * e^(-j(2π/N)kn) + B * (1/N) ∑_{n=<N>} y[n] * e^(-j(2π/N)kn)
c_k = A * a_k + B * b_k

This proves the linearity property.

## 3. Applying the Linearity Property:

The linearity property is useful for:

*   **Simplifying DTFS calculations:** If a signal can be expressed as a linear combination of simpler signals whose DTFS coefficients are known, we can easily find the DTFS coefficients of the original signal.
*   **Analyzing systems:** When analyzing linear time-invariant (LTI) systems, the linearity property of the DTFS can be used to determine the output of the system to a linear combination of inputs.

## 4. Examples:

**Example 1: Basic Application**

Suppose x[n] = cos(2πn/4) and y[n] = sin(2πn/4).  Assume both signals have a period N=4. We know:

*   x[n] <---> a_k, where a_1 = a_{-1} = 1/2 and a_k = 0 for k ≠ 1, -1 (mod 4).  Equivalently, a_1 = a_3 = 1/2, and a_k = 0 for k=0, 2.
*   y[n] <---> b_k, where b_1 = -j/2, b_{-1} = j/2 and b_k = 0 for k ≠ 1, -1 (mod 4).  Equivalently, b_1 = -j/2, b_3 = j/2 and b_k = 0 for k=0, 2.

Now, let z[n] = 2x[n] + 3y[n] = 2cos(2πn/4) + 3sin(2πn/4).

Using the linearity property:

c_k = 2a_k + 3b_k

Therefore:

*   c_0 = 2a_0 + 3b_0 = 2(0) + 3(0) = 0
*   c_1 = 2a_1 + 3b_1 = 2(1/2) + 3(-j/2) = 1 - (3/2)j
*   c_2 = 2a_2 + 3b_2 = 2(0) + 3(0) = 0
*   c_3 = 2a_3 + 3b_3 = 2(1/2) + 3(j/2) = 1 + (3/2)j

Thus, z[n] <---> c_k, where c_0 = 0, c_1 = 1 - (3/2)j, c_2 = 0, and c_3 = 1 + (3/2)j.

**Example 2: Combining signals with different fundamental frequencies but a common period.**

Let x[n] = cos(πn/2) and y[n] = sin(πn).

* The period of x[n] is N1 = 4
* The period of y[n] is N2 = 2
The least common multiple of 4 and 2 is 4. Therefore, we can analyze both signals with a period of N=4.

* x[n] = cos(πn/2) = cos(2πn/4) <---> a_1 = a_3 = 1/2, and a_k = 0 for k=0, 2.
* y[n] = sin(πn) = sin(2π(2n)/4) <---> b_2 = -j/2, b_{N-2}=b_2=j/2; so b_2 = -j/2, and b_6= b_2 mod(4) = j/2; This means b_2= j/2.  All other b_k are zero

Now, let z[n] = x[n] + y[n].

Using the linearity property:

c_k = a_k + b_k

Therefore:

*   c_0 = a_0 + b_0 = 0 + 0 = 0
*   c_1 = a_1 + b_1 = 1/2 + 0 = 1/2
*   c_2 = a_2 + b_2 = 0 + j/2 = j/2
*   c_3 = a_3 + b_3 = 1/2 + 0 = 1/2

Thus, z[n] <---> c_k, where c_0 = 0, c_1 = 1/2, c_2 = j/2, and c_3 = 1/2.

## 5. Practice Questions/Exercises:

**Question 1:**

Given that x[n] has DTFS coefficients a_k and y[n] has DTFS coefficients b_k, what are the DTFS coefficients of the signal z[n] = -3x[n] + 5y[n]?

**Answer:**  -3a_k + 5b_k

**Question 2:**

A periodic signal x[n] with period N=8 has DTFS coefficients a_0 = 2, a_1 = 1-j, a_2 = j, a_3 = -1, and a_k = 0 for k = 4, 5, 6, 7.  Another periodic signal y[n] with the same period has DTFS coefficients b_0 = 1, b_1 = j, b_2 = 1-j, b_3 = 1, and b_k = 0 for k = 4, 5, 6, 7. What are the DTFS coefficients c_k of the signal z[n] = x[n] + 2y[n]?

**Answer:**

*   c_0 = a_0 + 2b_0 = 2 + 2(1) = 4
*   c_1 = a_1 + 2b_1 = (1-j) + 2(j) = 1 + j
*   c_2 = a_2 + 2b_2 = j + 2(1-j) = 2 - j
*   c_3 = a_3 + 2b_3 = -1 + 2(1) = 1
*   c_k = 0 + 2(0) = 0 for k = 4, 5, 6, 7

Therefore, c_0 = 4, c_1 = 1+j, c_2 = 2-j, c_3 = 1, and c_k = 0 for k = 4, 5, 6, 7.

**Question 3:**

Suppose x[n] = sin(πn/4)  and y[n] = cos(πn/2).  They are combined to form z[n] = x[n] + y[n]. Determine the DTFS coefficients of z[n] given a period of N=8. Assume you already know how to calculate DTFS of sine and cosine terms (or can look them up).

**Answer:**

1.  **DTFS of x[n] = sin(πn/4):** N=8, so πn/4 = 2πn/(2N) = 2πn/(2\*8). Therefore,  k = N/4. This is a single frequency component. Recall that sin(2πk0n/N) has DTFS coefficients b_k = (1/2j) for k=k0 and b_k = (-1/2j) for k=N-k0 and 0 otherwise.

    Thus, a_2 = 1/(2j) = -j/2, a_6 = -1/(2j) = j/2, and a_k = 0 otherwise.

2.  **DTFS of y[n] = cos(πn/2):** N=8, so πn/2 = 2π(2n)/8. Therefore,  k = 2.  Recall that cos(2πk0n/N) has DTFS coefficients c_k = 1/2 for k=k0 and k=N-k0 and 0 otherwise.

    Thus, b_2 = 1/2, b_6 = 1/2, and b_k = 0 otherwise.

3.  **DTFS of z[n] = x[n] + y[n]:**  c_k = a_k + b_k

    *   c_0 = a_0 + b_0 = 0 + 0 = 0
    *   c_1 = a_1 + b_1 = 0 + 0 = 0
    *   c_2 = a_2 + b_2 = -j/2 + 1/2 = (1 - j)/2
    *   c_3 = a_3 + b_3 = 0 + 0 = 0
    *   c_4 = a_4 + b_4 = 0 + 0 = 0
    *   c_5 = a_5 + b_5 = 0 + 0 = 0
    *   c_6 = a_6 + b_6 = j/2 + 1/2 = (1 + j)/2
    *   c_7 = a_7 + b_7 = 0 + 0 = 0

Therefore, the DTFS coefficients of z[n] are: c_0 = c_1 = c_3 = c_4 = c_5 = c_7 = 0, c_2 = (1-j)/2, and c_6 = (1+j)/2.

## 6. Important Points to Remember:

*   The linearity property applies only to DTFS, which requires the signals to be **periodic**. Make sure the period N is clearly defined and the same for all signals involved.
*   Be careful with complex arithmetic when applying the linearity property, especially when dealing with sine and cosine functions.
*   The DTFS coefficients are periodic with a period of N. When computing `c_k = A*a_k + B*b_k`, ensure that both `a_k` and `b_k` are computed for the same indices over one period.
*   While this module focuses on Linearity, remember other DTFS properties like Time Shifting, Frequency Shifting, Convolution, and Multiplication. They are all important for signal analysis and system design.
