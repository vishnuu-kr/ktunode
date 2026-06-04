---
title: "Discrete time LTI systems - Discrete time convolution"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b15e"
status: "completed"
scrapedAt: "2026-05-20T16:15:50.490Z"
---
# SIGNALS AND SYSTEMS - MODULE 3: DISCRETE-TIME SYSTEMS
## Topic: Discrete-Time LTI Systems - Discrete-Time Convolution

**Learning Outcomes:**

*   Understand the concept of a Linear Time-Invariant (LTI) system in the discrete-time domain.
*   Define and compute the discrete-time convolution sum.
*   Determine the output of a discrete-time LTI system given its impulse response and input signal.
*   Understand and apply the properties of convolution.
*   Apply convolution to system analysis and response determination.

---

### 1. Introduction to Discrete-Time LTI Systems

*   **Discrete-Time System:** A system that operates on a discrete-time input signal *x[n]* and produces a discrete-time output signal *y[n]*.

*   **Linearity:**  A system is linear if it satisfies the superposition principle:
    *   If *x1[n]* produces *y1[n]* and *x2[n]* produces *y2[n]*, then *a* *x1[n]* + *b* *x2[n]* produces *a* *y1[n]* + *b* *y2[n]* for any constants *a* and *b*.

*   **Time-Invariance:** A system is time-invariant if a time shift in the input signal results in the same time shift in the output signal.
    *   If *x[n]* produces *y[n]*, then *x[n - k]* produces *y[n - k]* for any integer *k*.

*   **LTI System:**  A system that is both linear and time-invariant. LTI systems are fundamental because their behavior is completely characterized by their impulse response.

### 2. The Impulse Response of a Discrete-Time LTI System

*   **Unit Impulse (or Unit Sample) Function:**  δ[n] = 1 for n = 0, and δ[n] = 0 for n ≠ 0.

*   **Impulse Response:**  The impulse response *h[n]* of a discrete-time LTI system is the output of the system when the input is the unit impulse function δ[n].
    *   *h[n]* completely characterizes the behavior of the LTI system.

### 3. Discrete-Time Convolution Sum

*   **Definition:** The output *y[n]* of a discrete-time LTI system with impulse response *h[n]* to an input signal *x[n]* is given by the convolution sum:

    ```
    y[n] = x[n] * h[n] = Σ (from k = -∞ to ∞) x[k] * h[n - k]
    ```

    where '*' denotes the convolution operation.

*   **Interpretation:**  Convolution sum represents the weighted sum of time-shifted impulse responses, where the weights are the input signal values.

*   **Practical Computation:**  To compute the convolution sum, follow these steps:
    1.  **Folding:**  Flip the impulse response *h[k]* about the vertical axis to get *h[-k]*.
    2.  **Shifting:** Shift *h[-k]* by *n* to get *h[n-k]*.
    3.  **Multiplication:** Multiply *x[k]* by *h[n-k]* for all values of *k*.
    4.  **Summation:** Sum the product *x[k] * h[n-k]* over all values of *k* to obtain *y[n]*.
    5.  **Repeat:** Repeat steps 2-4 for all desired values of *n*.

*   **Important Note:** The limits of the summation can be adjusted based on the support of the signals *x[n]* and *h[n]*.  If *x[n] = 0* for *n < N1* and *n > N2* and *h[n] = 0* for *n < M1* and *n > M2*, then the output *y[n] = 0* for *n < N1 + M1* and *n > N2 + M2*.

### 4. Properties of Convolution

*   **Commutativity:** x[n] * h[n] = h[n] * x[n]
    *   The order of convolution does not matter.

*   **Associativity:** (x[n] * h1[n]) * h2[n] = x[n] * (h1[n] * h2[n])
    *   Convolution can be performed in stages.

*   **Distributivity:** x[n] * (h1[n] + h2[n]) = x[n] * h1[n] + x[n] * h2[n]
    *   Convolution distributes over addition.

*   **Convolution with the Impulse Function:** x[n] * δ[n] = x[n]
    *   Convolving a signal with the unit impulse yields the original signal.

*   **Shift Property:** If x[n] * h[n] = y[n], then x[n - n0] * h[n] = y[n - n0] and x[n] * h[n - n0] = y[n - n0]

### 5. Examples of Discrete-Time Convolution

**Example 1:**

*   Let x[n] = {1, 2, 1} for n = {0, 1, 2}, and 0 otherwise.
*   Let h[n] = {1, 1, 1} for n = {0, 1, 2}, and 0 otherwise.

Find y[n] = x[n] * h[n]

**Solution:**

Using the convolution sum formula:

*   y[n] = Σ (from k = -∞ to ∞) x[k] * h[n - k]

We can tabulate the values:

| n   | h[n-k] for k=0 | h[n-k] for k=1 | h[n-k] for k=2 | x[0]*h[n-0] | x[1]*h[n-1] | x[2]*h[n-2] | y[n]  |
|-----|----------------|----------------|----------------|---------------|---------------|---------------|-------|
| -1  | 0              | 0              | 0              | 0             | 0             | 0             | 0     |
| 0   | 1              | 0              | 0              | 1             | 0             | 0             | 1     |
| 1   | 1              | 1              | 0              | 1             | 2             | 0             | 3     |
| 2   | 1              | 1              | 1              | 1             | 2             | 1             | 4     |
| 3   | 0              | 1              | 1              | 0             | 2             | 1             | 3     |
| 4   | 0              | 0              | 1              | 0             | 0             | 1             | 1     |
| 5   | 0              | 0              | 0              | 0             | 0             | 0             | 0     |

Therefore, y[n] = {1, 3, 4, 3, 1} for n = {0, 1, 2, 3, 4}, and 0 otherwise.

**Example 2:**

*   x[n] = u[n] (unit step function)
*   h[n] = a^n * u[n], where |a| < 1

Find y[n] = x[n] * h[n]

**Solution:**

```
y[n] = Σ (from k = -∞ to ∞) x[k] * h[n - k]
     = Σ (from k = -∞ to ∞) u[k] * a^(n-k) * u[n-k]

Since u[k] = 0 for k < 0 and u[n-k] = 0 for k > n:

y[n] = Σ (from k = 0 to n) 1 * a^(n-k)  for n >= 0
     = a^n * Σ (from k = 0 to n) a^(-k)
     = a^n * [1 - a^(-(n+1))] / [1 - a^(-1)]
     = a^n * [1 - a^(-n-1)] / [(a-1)/a]
     = [a^(n+1) - 1] / (a - 1) for n >= 0
     = 0  for n < 0
```
Therefore,  y[n] = [a^(n+1) - 1] / (a - 1) * u[n]

### 6. Application of Convolution in System Analysis

*   **System Response:** Convolution allows us to determine the output of an LTI system to any arbitrary input, given the impulse response.
*   **Cascade Systems:** The overall impulse response of two LTI systems in cascade (series) is the convolution of their individual impulse responses.

### 7. Practice Questions/Exercises

**Question 1:**

Let x[n] = {1, 2, 3} for n = {0, 1, 2}, and 0 otherwise. Let h[n] = {2, 1} for n = {0, 1}, and 0 otherwise.  Find y[n] = x[n] * h[n].

**Answer:**

y[n] = {2, 5, 8, 3} for n = {0, 1, 2, 3}, and 0 otherwise.

**Question 2:**

An LTI system has an impulse response h[n] = δ[n] - δ[n-1].  Determine the output y[n] when the input is x[n] = u[n].

**Answer:**

y[n] = u[n] - u[n-1] = δ[n]

**Question 3:**

If x[n] * h[n] = y[n], what is the result of x[n-2] * h[n+1]?

**Answer:**

y[n-1]

**Question 4:**

Consider an LTI system with impulse response *h[n] = (1/2)^n u[n]*. The input is *x[n] = δ[n] + 2δ[n-1]*. Determine the output *y[n]*.

**Answer:**

*y[n] = (1/2)^n u[n] + 2(1/2)^(n-1) u[n-1]*  (Apply linearity and time-invariance properties)

### 8. Important Points to Remember

*   The convolution sum is a fundamental operation in discrete-time signal processing.
*   The impulse response completely characterizes a discrete-time LTI system.
*   Understanding the properties of convolution can simplify system analysis and computations.
*   Be mindful of the limits of summation based on the support of the input signal and impulse response.
*   Convolution represents the superposition of weighted, time-shifted impulse responses.

---
This comprehensive guide covers the core concepts of discrete-time LTI systems and convolution. Practicing with more examples and exercises will solidify your understanding.  Good luck!
