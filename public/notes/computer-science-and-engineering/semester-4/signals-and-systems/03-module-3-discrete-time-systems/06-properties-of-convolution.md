---
title: "Properties of Convolution"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b15f"
status: "completed"
scrapedAt: "2026-05-20T16:15:51.196Z"
---
# Signals and Systems - Module 3: Discrete-Time Systems - Properties of Convolution

## Introduction

Convolution is a fundamental operation in the analysis and design of linear time-invariant (LTI) systems.  Understanding its properties is crucial for simplifying complex system analysis, designing filters, and manipulating signals effectively in the discrete-time domain. This module covers the key properties of convolution and provides examples to illustrate their application.

**Learning Outcomes:**

*   Understand the definition of convolution for discrete-time signals.
*   Explain and apply the commutative property of convolution.
*   Explain and apply the associative property of convolution.
*   Explain and apply the distributive property of convolution.
*   Understand the identity property of convolution.
*   Apply convolution properties to simplify system analysis and cascade connections.

## 1. Definition of Convolution

The convolution of two discrete-time signals,  *x[n]* and *h[n]*, is defined as:

*   *y[n] = x[n] \* h[n] = ∑<sub>k=-∞</sub><sup>∞</sup> x[k] h[n-k]*

Where:

*   *x[n]* is the input signal.
*   *h[n]* is the impulse response of the LTI system.
*   *y[n]* is the output signal.
*   `*` denotes the convolution operation.

**Key Concept:** Convolution represents the weighted sum of shifted versions of one signal, where the weights are given by the other signal.  It's how an LTI system transforms an input signal based on its impulse response.

## 2. Properties of Convolution

### 2.1 Commutative Property

*   **Statement:** The order of convolution does not affect the result.
*   **Mathematical Representation:**  *x[n] \* h[n] = h[n] \* x[n]*

*   **Explanation:** This property means that we can swap the roles of the input signal and the impulse response without changing the output.
*   **Proof:**
    *   *x[n] \* h[n] = ∑<sub>k=-∞</sub><sup>∞</sup> x[k] h[n-k]*
    *   Let m = n - k => k = n - m
    *   *x[n] \* h[n] = ∑<sub>m=∞</sub><sup>-∞</sup> x[n-m] h[m]*
    *   *x[n] \* h[n] = ∑<sub>m=-∞</sub><sup>∞</sup> h[m] x[n-m]* (Changing the limits of summation)
    *   *x[n] \* h[n] = h[n] \* x[n]*

*   **Example:**
    *   Let *x[n] = {1, 2, 3}* and *h[n] = {4, 5, 6}* (both defined for n=0,1,2)
    *   Calculate *x[n] \* h[n]* and *h[n] \* x[n]*. You will find that both convolutions yield the same result: {4, 13, 28, 27, 18} (defined for n=0,1,2,3,4).

### 2.2 Associative Property

*   **Statement:**  When convolving multiple signals, the order in which the convolutions are performed does not matter.
*   **Mathematical Representation:** *(x[n] \* h<sub>1</sub>[n]) \* h<sub>2</sub>[n] = x[n] \* (h<sub>1</sub>[n] \* h<sub>2</sub>[n])*

*   **Explanation:** This property is particularly useful when analyzing cascaded LTI systems.  If you have two systems in series with impulse responses *h<sub>1</sub>[n]* and *h<sub>2</sub>[n]*, the overall impulse response of the cascaded system is *h<sub>1</sub>[n] \* h<sub>2</sub>[n]*.

*   **Example:** Consider three signals: *x[n] = {1, 2}*, *h<sub>1</sub>[n] = {3, 4}*, and *h<sub>2</sub>[n] = {5, 6}* (all defined for n=0,1).
    1.  Calculate *(x[n] \* h<sub>1</sub>[n]) = {3, 10, 8}*
    2.  Calculate *(x[n] \* h<sub>1</sub>[n]) \* h<sub>2</sub>[n] = {15, 68, 98, 48}*
    3.  Calculate *(h<sub>1</sub>[n] \* h<sub>2</sub>[n]) = {15, 38, 24}*
    4.  Calculate *x[n] \* (h<sub>1</sub>[n] \* h<sub>2</sub>[n]) = {15, 68, 98, 48}*

    The results from steps 2 and 4 are the same, illustrating the associative property.

### 2.3 Distributive Property

*   **Statement:** Convolution distributes over addition.
*   **Mathematical Representation:** *x[n] \* (h<sub>1</sub>[n] + h<sub>2</sub>[n]) = x[n] \* h<sub>1</sub>[n] + x[n] \* h<sub>2</sub>[n]*

*   **Explanation:** If a signal is convolved with the sum of two other signals, it's equivalent to convolving the signal with each of the two signals separately and then adding the results.
*   **Application:** Useful when dealing with systems in parallel.
*   **Example:**  Let *x[n] = {1, 2}*, *h<sub>1</sub>[n] = {3, 4}*, and *h<sub>2</sub>[n] = {5, 6}* (all defined for n=0,1).
    1. Calculate *h<sub>1</sub>[n] + h<sub>2</sub>[n] = {8, 10}*
    2. Calculate *x[n] \* (h<sub>1</sub>[n] + h<sub>2</sub>[n]) = {8, 26, 20}*
    3. Calculate *x[n] \* h<sub>1</sub>[n] = {3, 10, 8}*
    4. Calculate *x[n] \* h<sub>2</sub>[n] = {5, 16, 12}*
    5. Calculate *(x[n] \* h<sub>1</sub>[n]) + (x[n] \* h<sub>2</sub>[n]) = {8, 26, 20}*

The results from steps 2 and 5 are the same, demonstrating the distributive property.

### 2.4 Identity Property

*   **Statement:**  The convolution of any signal with the discrete-time impulse (unit sample) sequence results in the original signal.
*   **Mathematical Representation:** *x[n] \* δ[n] = x[n]*

Where:

*   *δ[n]* is the discrete-time impulse function, defined as:

    *   *δ[n] = 1* for *n = 0*
    *   *δ[n] = 0* for *n ≠ 0*

*   **Explanation:** The impulse function acts as the identity element for convolution.
*   **Example:**
    *   Let *x[n] = {1, 2, 3}* (defined for n=0,1,2).
    *   *δ[n] = {1}* (defined for n=0).
    *   *x[n] \* δ[n] = {1, 2, 3}*

## 3. Applications of Convolution Properties

### 3.1. Simplifying System Analysis

*   **Cascaded Systems:** Using the associative property, multiple LTI systems in cascade can be replaced by a single equivalent system whose impulse response is the convolution of the individual impulse responses. This reduces the complexity of analyzing the overall system.

*   **Parallel Systems:**  Using the distributive property, parallel LTI systems can be simplified. If the input is fed into several parallel systems, the overall system is equivalent to convolving the input with the sum of the individual impulse responses.

### 3.2. Filter Design

*   Convolution properties are instrumental in filter design.  For instance, designing FIR (Finite Impulse Response) filters relies heavily on understanding convolution and its properties.

## 4. Practice Questions and Exercises

**Question 1:**

Prove the distributive property of convolution.

**Answer:**

*x[n] \* (h<sub>1</sub>[n] + h<sub>2</sub>[n]) = ∑<sub>k=-∞</sub><sup>∞</sup> x[k] (h<sub>1</sub>[n-k] + h<sub>2</sub>[n-k])*
*= ∑<sub>k=-∞</sub><sup>∞</sup> x[k] h<sub>1</sub>[n-k] + ∑<sub>k=-∞</sub><sup>∞</sup> x[k] h<sub>2</sub>[n-k]*
*= x[n] \* h<sub>1</sub>[n] + x[n] \* h<sub>2</sub>[n]*

**Question 2:**

Two LTI systems with impulse responses *h<sub>1</sub>[n] = u[n]* (unit step) and *h<sub>2</sub>[n] = δ[n-1]* are connected in series. Determine the overall impulse response of the cascaded system.

**Answer:**

The overall impulse response, *h[n]*, is the convolution of the individual impulse responses:

*h[n] = h<sub>1</sub>[n] \* h<sub>2</sub>[n] = u[n] \* δ[n-1]*

Using the time-shifting property (which isn't explicitly covered here, but directly applies from the properties of the impulse function), convolution with *δ[n-1]* simply shifts the signal by one sample:

*h[n] = u[n-1]*

**Question 3:**

Given *x[n] = {1, 2}* and *h[n] = {3, 4}* (both defined for n=0, 1), verify the commutative property of convolution.

**Answer:**

1.  *x[n] \* h[n] = {3, 10, 8}*
2.  *h[n] \* x[n] = {3, 10, 8}*

Both convolutions result in the same output, thus verifying the commutative property.

**Question 4:**

A system has an impulse response *h[n] = {1, -1}*.  The input signal is *x[n] = {1, 2, 3}*. Determine the output *y[n]*.

**Answer:**

*y[n] = x[n] \* h[n] = {1, 1, 1, -3}*

## 5. Important Points to Remember

*   Convolution is a fundamental operation for LTI systems.
*   The commutative, associative, and distributive properties simplify system analysis and design.
*   The impulse function *δ[n]* is the identity element for convolution.
*   Convolution is used to determine the output of an LTI system given its input and impulse response.
*   Understanding convolution properties is essential for designing and analyzing filters, especially FIR filters.
*   Cascaded systems can be simplified by convolving their impulse responses.
*   Parallel systems can be simplified by summing their impulse responses and convolving with the input.
