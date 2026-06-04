---
title: "Linear Convolution using Circular Convolution"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 1: Definition of a digital signal processing system"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7da"
status: "completed"
scrapedAt: "2026-05-20T16:46:03.578Z"
---
## DIGITAL SIGNAL PROCESSING - Module 1: Definition of a Digital Signal Processing System

### Topic: Linear Convolution using Circular Convolution

**Introduction:**

This topic explores how we can compute linear convolution, a fundamental operation in digital signal processing, by leveraging circular convolution.  While conceptually different, circular convolution, when performed correctly, can provide the same result as linear convolution. This is particularly useful in implementations that are more efficient for circular convolution, such as those using the Fast Fourier Transform (FFT).

**Learning Outcomes:**

*   Understand the definitions of linear and circular convolution.
*   Explain why direct circular convolution might not yield the same result as linear convolution.
*   Apply the concept of zero-padding to make circular convolution equivalent to linear convolution.
*   Calculate the required length of zero-padding for given input sequences.
*   Compute linear convolution using circular convolution with proper zero-padding.

**1. Definitions & Key Concepts:**

*   **Linear Convolution:**
    *   The mathematical operation that expresses the amount of overlap of one function as it is shifted over another.
    *   Given two sequences *x[n]* of length *N* and *h[n]* of length *M*, their linear convolution *y[n]* is defined as:

        *y[n] =  ∑_{k=-∞}^{∞} x[k]h[n-k]*

    *   For causal signals (signals that are zero for n < 0), and sequences of finite length N and M, this simplifies to:

        *y[n] =  ∑_{k=0}^{N-1} x[k]h[n-k]*   for *n = 0, 1, ..., N+M-2*
    *   The length of the resulting linear convolution sequence *y[n]* is *N + M - 1*.

*   **Circular Convolution (N-point Circular Convolution):**
    *   Also known as periodic convolution.
    *   It involves treating the input sequences as if they were periodic with period *N*.
    *   Given two sequences *x[n]* and *h[n]*, both of length *N*, their N-point circular convolution *y[n]* is defined as:

        *y[n] =  ∑_{k=0}^{N-1} x[k]h[(n-k) mod N]*

    *   `mod N` signifies the modulo operation, which returns the remainder after division by N. This effectively "wraps around" the index.
    *   The length of the resulting circular convolution sequence *y[n]* is *N*.

*   **Zero-Padding:**
    *   Appending zeros to the end of a sequence to increase its length.  This is crucial for making circular convolution equivalent to linear convolution.

**2. Why Direct Circular Convolution Fails (Without Zero-Padding):**

*   Circular convolution inherently assumes periodicity in the input sequences.  This assumption leads to "wrap-around" effects where the tail of one sequence overlaps and adds to the head of the other sequence during the convolution process.
*   Linear convolution, on the other hand, doesn't have this periodicity assumption.
*   When we directly perform circular convolution on two sequences without modification, the wrap-around effect causes the resulting sequence to be different from the linear convolution result.  Specifically, portions of the linear convolution output become aliased or superimposed onto other parts of the sequence.

**3. Achieving Linear Convolution using Circular Convolution: Zero-Padding**

*   **The Solution: Zero-Padding:** To make circular convolution equivalent to linear convolution, we need to pad the input sequences *x[n]* and *h[n]* with zeros such that the length *L* of the zero-padded sequences is at least *N + M - 1*, where *N* is the length of *x[n]* and *M* is the length of *h[n]*.
*   **Reasoning:**  Zero-padding effectively eliminates the "wrap-around" effect in circular convolution.  By extending the length of the sequences, we provide enough space for the linear convolution to occur without any overlap due to periodicity.  Since the linear convolution result is of length *N + M - 1*, padding to that length (or greater) avoids any aliasing.

**4. Steps to Compute Linear Convolution using Circular Convolution:**

1.  **Determine the lengths of the input sequences:** Let *N* be the length of *x[n]* and *M* be the length of *h[n]*.
2.  **Calculate the required length for zero-padding:** The length *L* of the zero-padded sequences should be *L ≥ N + M - 1*.
3.  **Zero-pad both sequences:**
    *   Append *L - N* zeros to the end of *x[n]*.
    *   Append *L - M* zeros to the end of *h[n]*.
4.  **Perform L-point circular convolution** of the zero-padded sequences. The result will be the same as the linear convolution of the original sequences.

**5. Example:**

Let's compute the linear convolution of *x[n] = {1, 2, 3}* and *h[n] = {4, 5, 6}* using circular convolution.

1.  *N = 3*, *M = 3*
2.  *L ≥ N + M - 1 = 3 + 3 - 1 = 5*  So, *L = 5* (or any value greater than 5)
3.  **Zero-padding:**
    *   *x[n] = {1, 2, 3, 0, 0}*  (added 2 zeros)
    *   *h[n] = {4, 5, 6, 0, 0}*  (added 2 zeros)
4.  **5-point Circular Convolution:**  Let's denote the circular convolution operation by ⊛.

    *   *y[n] = x[n] ⊛ h[n]*

    We need to calculate *y[0]*, *y[1]*, *y[2]*, *y[3]*, and *y[4]*.

    *   *y[0] = (1\*4 + 2\*0 + 3\*0 + 0\*6 + 0\*5) mod 5 = 4*
    *   *y[1] = (1\*5 + 2\*4 + 3\*0 + 0\*0 + 0\*6) mod 5 = 5 + 8 = 13*
    *   *y[2] = (1\*6 + 2\*5 + 3\*4 + 0\*0 + 0\*0) mod 5 = 6 + 10 + 12 = 28*
    *   *y[3] = (1\*0 + 2\*6 + 3\*5 + 0\*4 + 0\*0) mod 5 = 12 + 15 = 27*
    *   *y[4] = (1\*0 + 2\*0 + 3\*6 + 0\*5 + 0\*4) mod 5 = 18*

    Therefore, *y[n] = {4, 13, 28, 27, 18}*.  This is the same result we would obtain using direct linear convolution.

    **Linear Convolution Verification:**

    *   *y[0] = (1\*4) = 4*
    *   *y[1] = (1\*5 + 2\*4) = 5 + 8 = 13*
    *   *y[2] = (1\*6 + 2\*5 + 3\*4) = 6 + 10 + 12 = 28*
    *   *y[3] = (2\*6 + 3\*5) = 12 + 15 = 27*
    *   *y[4] = (3\*6) = 18*

**6. Practice Questions & Exercises:**

1.  Given *x[n] = {1, 2}* and *h[n] = {3, 4}*, calculate their linear convolution directly. Then, calculate their 4-point circular convolution after appropriate zero-padding. Verify that the results are the same.

    *   **Answer:**
        *   **Linear Convolution:** *y[n] = {3, 10, 8}*
        *   **Zero-padded sequences:** *x'[n] = {1, 2, 0}*, *h'[n] = {3, 4, 0}*
        *   **4-point Circular Convolution:** *y[n] = {3, 10, 8, 0}*
          *Corrected answer: Zero padding must be done such that final length is `N+M-1`. Here, N+M-1 = 2+2-1 = 3. Therefore, zero padded sequences will be x[n]={1,2,0} and h[n]={3,4,0}. With L=3, we get y[n]={3,10,8}. We now pad this result to length 4 which is used for calculating circular convolution using DFT and IDFT (FFT and IFFT to be precise). Zero padding in frequency domain would not change the output in the time domain.*

2.  What is the minimum length of zero-padding required to compute the linear convolution of a sequence of length 10 with a sequence of length 5 using circular convolution?

    *   **Answer:** *10 + 5 - 1 = 14*

3.  Explain why zero-padding is necessary when using circular convolution to compute linear convolution.

    *   **Answer:** Zero-padding eliminates the wrap-around effect inherent in circular convolution by creating sufficient space for the linear convolution result to exist without overlap.  Without it, the periodicity assumption of circular convolution introduces aliasing and a result different from linear convolution.

4.  You have sequences *x[n]* of length 7 and *h[n]* of length 9. What's the minimum length *L* for zero-padding so that you can perform L-point circular convolution to obtain the linear convolution result?

    *   **Answer:** *L = 7 + 9 - 1 = 15*

**7. Important Points to Remember:**

*   Zero-padding is *essential* for making circular convolution equivalent to linear convolution.
*   The minimum zero-padding length is *N + M - 1*, where N and M are the lengths of the input sequences. Using a length greater than *N + M - 1* will also work but is not necessary.
*   Understanding the wrap-around effect of circular convolution is crucial to understanding why zero-padding is needed.
*   Using the FFT to compute circular convolution is significantly faster than directly computing linear convolution for large input sequences.
*   The zero-padded length is important for choosing the appropriate FFT size, especially in applications where you are implementing convolution with FFTs/IFFTs.
