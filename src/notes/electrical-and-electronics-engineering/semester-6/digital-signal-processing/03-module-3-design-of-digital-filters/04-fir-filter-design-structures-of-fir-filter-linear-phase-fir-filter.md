---
title: "FIR filter design: Structures of FIR filter, Linear phase FIR filter"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 3: Design of Digital Filters:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36667"
status: "completed"
scrapedAt: "2026-05-23T16:26:47.417Z"
---
# DIGITAL SIGNAL PROCESSING: Module 3: Design of Digital Filters

## Topic: FIR Filter Design: Structures of FIR Filters, Linear Phase FIR Filters

---

### Introduction to FIR Filters

Finite Impulse Response (FIR) filters are a fundamental class of digital filters characterized by an impulse response that is of finite duration. This means that the output of an FIR filter becomes zero after a finite number of samples following the application of an impulse. This property leads to several desirable characteristics, particularly stability and the ability to achieve linear phase response, which is crucial in many signal processing applications.

**Key Concepts:**

*   **Impulse Response:** The output of a filter when the input is a unit impulse (a signal that is 1 at time n=0 and 0 for all other times). For an FIR filter of order N, the impulse response $h[n]$ is non-zero for $0 \le n \le N$.
*   **Difference Equation:** The output $y[n]$ of an FIR filter is a weighted sum of the current and past input samples:
    $y[n] = b_0 x[n] + b_1 x[n-1] + \dots + b_N x[n-N]$
    where $x[n]$ is the input signal, $y[n]$ is the output signal, and $b_k$ are the filter coefficients.
*   **Transfer Function:** The Z-transform of the impulse response, denoted by $H(z)$:
    $H(z) = \sum_{k=0}^{N} b_k z^{-k}$

**Textbook References:**

*   **Proakis & Manolakis, Chapter 7: FIR Filter Design:** This chapter provides a thorough introduction to FIR filter design techniques, including the fundamental properties and design methods.
*   **Oppenheim & Schafer, Chapter 6: FIR Filters:** Offers a comprehensive treatment of FIR filter theory, including their realization and phase properties.

---

### Structures of FIR Filters

The way an FIR filter is implemented in hardware or software is referred to as its structure. Different structures offer trade-offs in terms of computational complexity, memory requirements, and sensitivity to coefficient quantization.

**1. Direct Form Structure:**

This is the most straightforward implementation directly derived from the difference equation.

*   **Description:** Requires $N+1$ multipliers, $N$ adders, and $N$ delay elements.
*   **Diagram:**
    ```
           x[n] ------>(+)------>(+)------> ... ------> (+) ------> y[n]
                       ^        ^                ^
                       |        |                |
                     b_0      b_1              b_N
                       |        |                |
                       z^-1     z^-1             z^-1
                       |        |                |
                       -----> z^-1 ------> ... ------> z^-1
    ```
    (Simplified representation: Each '+' represents an adder. The lines from the input to the coefficients represent multiplication by that coefficient. The 'z^-1' boxes represent delay elements.)

*   **Equations:**
    $y[n] = b_0 x[n] + b_1 x[n-1] + \dots + b_N x[n-N]$

*   **Advantages:** Simple to understand and implement.
*   **Disadvantages:** Can be computationally intensive if implemented naively. Sensitive to coefficient quantization.

**2. Transposed Direct Form Structure:**

This structure is obtained by transposing the signal flow graph of the direct form structure.

*   **Description:** Similar computational requirements as the direct form.
*   **Diagram:**
    ```
    x[n] ------>(+)------> x[n-1] ------>(+)------> ... ------> x[n-N] ------> y[n]
                ^        ^                ^
                |        |                |
              b_0      b_1              b_N
                |        |                |
                z^-1     z^-1             z^-1
                |        |                |
                ------------------------------------
                                            |
                                            v
                                           y[n]
    ```
    (This is a conceptual representation. The flow is reversed, and branches are combined.)

*   **Advantages:** Can sometimes be more efficient in certain hardware implementations.
*   **Disadvantages:** Still has sensitivity issues.

**3. Cascade Form Structure:**

This structure realizes the FIR filter by cascading simpler sub-filters, typically first-order or second-order sections. This is more common for IIR filters, but FIR filters can also be decomposed.

*   **Description:** The transfer function $H(z)$ is factored into a product of lower-order transfer functions:
    $H(z) = \prod_{i=1}^{M} H_i(z)$
    where each $H_i(z)$ is a first or second-order FIR section.
*   **Advantages:** Can improve numerical stability and reduce the effects of coefficient quantization by distributing the overall filter characteristic among smaller sections.
*   **Disadvantages:** Can be more complex to design the factorization.

**4. Parallel Form Structure:**

The transfer function is decomposed into a sum of simpler transfer functions.

*   **Description:**
    $H(z) = \sum_{i=1}^{M} H_i(z)$
    where each $H_i(z)$ is a simpler filter. This is less common for FIR filters compared to IIR filters.

**5. Lattice Structure:**

This structure is based on the concept of reflection coefficients and is derived from Levinson's algorithm for solving the Yule-Walker equations.

*   **Description:** Implemented using a cascade of sections, each with two inputs and two outputs. Each section is characterized by a single parameter (a reflection coefficient).
*   **Advantages:**
    *   **Good numerical properties:** Less sensitive to coefficient quantization.
    *   **Orthogonal realization:** Coefficients are often less correlated, leading to better numerical behavior.
    *   **Step-by-step design:** Coefficients can be related to the reflection coefficients of autoregressive processes.
*   **Diagram:** (A typical lattice section involves feedback and feedforward paths with multipliers.)
    *   For a single lattice stage $k$, with input $x_k$ and output $y_k$:
        *   $e_k = e_{k-1} + K_k f_{k-1}$
        *   $f_k = f_{k-1} + K_k e_{k-1}$
        where $e_k$ is the forward prediction error and $f_k$ is the backward prediction error. $K_k$ is the reflection coefficient.

**6. Direct-Form II Transposed Structure:**

This structure aims to reduce the number of delay elements by sharing them.

*   **Description:** Combines the numerator and denominator delays of the direct form.
*   **Advantages:** Can reduce memory requirements.
*   **Disadvantages:** Not directly applicable to FIR filters as they have only a numerator polynomial. However, understanding transposed structures is key in filter realization.

**Important Note on FIR Structures:** For FIR filters, the core implementation remains a weighted sum of past inputs. The choice of structure primarily impacts the efficiency and numerical robustness of the implementation. The direct form is the most fundamental.

**Textbook References:**

*   **Proakis & Manolakis, Chapter 7.3: Realization of FIR Filters:** Discusses various structures including direct form, cascade, and lattice.
*   **Oppenheim & Schafer, Chapter 6.3: FIR Filter Implementation:** Details the direct form and its transposed version, along with considerations for other structures.
*   **Ifeachor & Jervis, Chapter 5: FIR Filter Realisation:** Explains different structures with block diagrams and trade-offs.

---

### Linear Phase FIR Filters

One of the most significant advantages of FIR filters is their ability to achieve a linear phase response. A linear phase response is essential in applications where the shape of the signal must be preserved, such as in speech processing, image processing, and data transmission.

**Key Concepts:**

*   **Phase Response:** The argument of the frequency response $H(e^{j\omega})$.
    $\phi(\omega) = \angle H(e^{j\omega})$
*   **Linear Phase:** A phase response that is a linear function of frequency:
    $\phi(\omega) = -\omega \tau$
    where $\tau$ is a constant representing the group delay.
*   **Group Delay:** The negative derivative of the phase response with respect to angular frequency:
    $\tau_g(\omega) = -\frac{d\phi(\omega)}{d\omega}$
    For a linear phase response, $\tau_g(\omega) = \tau$ (constant).

**Why is Linear Phase Important?**

A constant group delay means that all frequency components of the input signal are delayed by the same amount of time. This prevents distortion of the signal's waveform, ensuring that the shape of the output signal is preserved, only shifted in time. Non-linear phase response leads to phase distortion, where different frequency components are delayed by different amounts, resulting in a distorted output waveform.

**Conditions for Linear Phase FIR Filters:**

An FIR filter $H(z) = \sum_{k=0}^{N} b_k z^{-k}$ has a linear phase response if and only if its coefficients $b_k$ satisfy certain symmetry or anti-symmetry properties. There are four types of linear phase FIR filters, classified by the length of the impulse response (odd or even) and the symmetry of the coefficients.

Let the length of the impulse response be $N+1$.

**Type I Linear Phase FIR Filters:**

*   **Condition:** Impulse response length $N+1$ is odd, and the coefficients are symmetric about the center tap:
    $b_k = b_{N-k}$ for $k = 0, 1, \dots, N$
*   **Range of Symmetry:** $k$ goes from $0$ to $N$. The center tap is at $k = N/2$.
*   **Transfer Function:** Can be expressed as:
    $H(z) = z^{-N/2} \sum_{k=0}^{N/2} a_k (z^k + z^{-k})$
    where $a_k = b_{N/2 + k}$ for $k=0, \dots, N/2$. (Note: $b_{N/2+k} = b_{N/2-k}$)
    Or, more commonly:
    $H(z) = z^{-N/2} [b_{N/2} + \sum_{k=1}^{N/2} b_{N/2-k} (z^k + z^{-k})]$
*   **Phase Response:** $\phi(\omega) = -\omega (N/2)$. The group delay is $\tau = N/2$.
*   **Example:** A 3-tap filter with $b_0=b_2$. $N=2$. $N+1=3$ (odd). Center tap at $k=1$.
    $H(z) = b_0 + b_1 z^{-1} + b_2 z^{-2}$.
    If $b_0 = b_2$, then $H(z) = b_0(1 + z^{-2}) + b_1 z^{-1}$.
    $H(z) = z^{-1} [b_0 (z^1 + z^{-1}) + b_1]$.
    Here, $N/2 = 1$. The phase is $\phi(\omega) = -\omega(1) = -\omega$. Group delay $\tau=1$.

**Type II Linear Phase FIR Filters:**

*   **Condition:** Impulse response length $N+1$ is even, and the coefficients are symmetric about the center point between two taps:
    $b_k = b_{N-k}$ for $k = 0, 1, \dots, N$
*   **Range of Symmetry:** $k$ goes from $0$ to $N$. The center is between $N/2-1$ and $N/2$.
*   **Transfer Function:** Can be expressed as:
    $H(z) = z^{-N/2} \sum_{k=0}^{N/2-1} a_k (z^k + z^{-k})$
    where $a_k = b_{N/2 + k}$ for $k=0, \dots, N/2-1$. (Note: $b_{N/2+k} = b_{N/2-1-k}$)
    Or, more commonly:
    $H(z) = z^{-N/2} [\sum_{k=0}^{N/2-1} b_{N/2-1-k} (z^k + z^{-k})]$
*   **Phase Response:** $\phi(\omega) = -\omega (N/2)$. The group delay is $\tau = N/2$.
*   **Example:** A 4-tap filter with $b_0=b_3$ and $b_1=b_2$. $N=3$. $N+1=4$ (even). Center is between $k=1$ and $k=2$.
    $H(z) = b_0 + b_1 z^{-1} + b_2 z^{-2} + b_3 z^{-3}$.
    If $b_0 = b_3$ and $b_1 = b_2$, then $H(z) = b_0(1 + z^{-3}) + b_1(z^{-1} + z^{-2})$.
    $H(z) = z^{-3/2} [b_0 (z^{3/2} + z^{-3/2}) + b_1(z^{1/2} + z^{-1/2})]$.
    Here, $N/2 = 1.5$. The phase is $\phi(\omega) = -\omega(1.5)$. Group delay $\tau=1.5$.

**Type III Linear Phase FIR Filters:**

*   **Condition:** Impulse response length $N+1$ is odd, and the coefficients are anti-symmetric about the center tap:
    $b_k = -b_{N-k}$ for $k = 0, 1, \dots, N$
*   **Implication:** For this condition to hold, the center coefficient $b_{N/2}$ must be zero.
*   **Range of Symmetry:** $k$ goes from $0$ to $N$. The center tap is at $k = N/2$.
*   **Transfer Function:** Can be expressed as:
    $H(z) = z^{-N/2} \sum_{k=1}^{N/2} a_k (z^k - z^{-k})$
    where $a_k = b_{N/2 + k}$ for $k=1, \dots, N/2$. (Note: $b_{N/2+k} = -b_{N/2-k}$)
*   **Phase Response:** $\phi(\omega) = -\omega (N/2) - \pi/2$. The group delay is $\tau = N/2$. The phase is shifted by $-\pi/2$.
*   **Example:** A 3-tap filter with $b_0 = -b_2$ and $b_1 = 0$. $N=2$. $N+1=3$ (odd). Center tap at $k=1$.
    $H(z) = b_0 + b_1 z^{-1} + b_2 z^{-2}$.
    If $b_1 = 0$ and $b_0 = -b_2$, then $H(z) = b_0(1 - z^{-2})$.
    $H(z) = z^{-1} [b_0 (z^1 - z^{-1})]$.
    Here, $N/2 = 1$. The phase is $\phi(\omega) = -\omega(1) - \pi/2$. Group delay $\tau=1$.

**Type IV Linear Phase FIR Filters:**

*   **Condition:** Impulse response length $N+1$ is even, and the coefficients are anti-symmetric about the center point between two taps:
    $b_k = -b_{N-k}$ for $k = 0, 1, \dots, N$
*   **Implication:** For this condition to hold, the sum of coefficients equidistant from the center must be zero, meaning $b_k + b_{N-k} = 0$. This implies that coefficients like $b_{N/2-1}$ and $b_{N/2}$ must cancel out if they were to be the same magnitude. The sum of coefficients $b_k$ for $k=0$ to $N$ is $0$ if $N+1$ is even and the coefficients are anti-symmetric.
*   **Range of Symmetry:** $k$ goes from $0$ to $N$. The center is between $N/2-1$ and $N/2$.
*   **Transfer Function:** Can be expressed as:
    $H(z) = z^{-N/2} \sum_{k=0}^{N/2-1} a_k (z^k - z^{-k})$
    where $a_k = b_{N/2-1-k}$ for $k=0, \dots, N/2-1$. (Note: $b_{N/2-1-k} = -b_{N/2+k}$)
*   **Phase Response:** $\phi(\omega) = -\omega (N/2) - \pi/2$. The group delay is $\tau = N/2$. The phase is shifted by $-\pi/2$.
*   **Example:** A 4-tap filter with $b_0 = -b_3$ and $b_1 = -b_2$. $N=3$. $N+1=4$ (even). Center is between $k=1$ and $k=2$.
    $H(z) = b_0 + b_1 z^{-1} + b_2 z^{-2} + b_3 z^{-3}$.
    If $b_0 = -b_3$ and $b_1 = -b_2$, then $H(z) = b_0(1 - z^{-3}) + b_1(z^{-1} - z^{-2})$.
    $H(z) = z^{-3/2} [b_0 (z^{3/2} - z^{-3/2}) + b_1(z^{1/2} - z^{-1/2})]$.
    Here, $N/2 = 1.5$. The phase is $\phi(\omega) = -\omega(1.5) - \pi/2$. Group delay $\tau=1.5$.

**Summary Table for Linear Phase FIR Filters:**

| Type | Impulse Response Length ($N+1$) | Coefficient Symmetry        | Phase Response $\phi(\omega)$ | Group Delay $\tau_g(\omega)$ | Example Coefficient Relations                                   |
| :--- | :------------------------------ | :-------------------------- | :---------------------------- | :--------------------------- | :-------------------------------------------------------------- |
| I    | Odd                             | $b_k = b_{N-k}$             | $-\omega(N/2)$                | $N/2$                        | $b_0=b_N, b_1=b_{N-1}, \dots$                                   |
| II   | Even                            | $b_k = b_{N-k}$             | $-\omega(N/2)$                | $N/2$                        | $b_0=b_N, b_1=b_{N-1}, \dots$                                   |
| III  | Odd                             | $b_k = -b_{N-k}$, $b_{N/2}=0$ | $-\omega(N/2) - \pi/2$        | $N/2$                        | $b_0=-b_N, b_1=-b_{N-1}, \dots, b_{N/2}=0$                     |
| IV   | Even                            | $b_k = -b_{N-k}$            | $-\omega(N/2) - \pi/2$        | $N/2$                        | $b_0=-b_N, b_1=-b_{N-1}, \dots$                                 |

**Textbook References:**

*   **Proakis & Manolakis, Chapter 7.2: Properties of FIR Filters:** This section extensively covers the properties of linear phase FIR filters, including the four types.
*   **Oppenheim & Schafer, Chapter 6.2: Properties of FIR Filters:** Discusses linear phase FIR filters, their types, and the implications for frequency response.
*   **Ifeachor & Jervis, Chapter 5.3: Linear Phase FIR Filters:** Provides a clear explanation of the different types of linear phase FIR filters with examples.
*   **Salivahanan, Vallavaraj, & Gnapriya, Chapter 8.2: Linear Phase FIR Filters:** Details the conditions and properties of linear phase FIR filters.

**Course Outcome Alignment:**

*   **CO2: Realise IIR and FIR filters:** The structures discussed (direct form, lattice, etc.) are the methods for realizing FIR filters.
*   **CO3: Design of IIR and FIR filters:** Understanding linear phase properties is crucial for designing FIR filters with desired phase characteristics. This module lays the groundwork for FIR filter design methodologies (though specific design methods like windowing or frequency sampling are covered in other sections of the module).

---

### Practice Questions

**Question 1 (Structures):**

Sketch the direct form structure for a 4th-order FIR filter. Write down its difference equation and transfer function.

**Answer:**
*   **Difference Equation:** $y[n] = b_0 x[n] + b_1 x[n-1] + b_2 x[n-2] + b_3 x[n-3] + b_4 x[n-4]$
*   **Transfer Function:** $H(z) = b_0 + b_1 z^{-1} + b_2 z^{-2} + b_3 z^{-3} + b_4 z^{-4}$
*   **Structure Sketch:** (As described in the Direct Form Structure section, with 5 coefficients and 4 delay elements).

**Question 2 (Linear Phase):**

Determine the type of linear phase response for an FIR filter with the following coefficients: $b_0 = 1, b_1 = 2, b_2 = 3, b_3 = 2, b_4 = 1$.
Also, determine its group delay.

**Answer:**
*   **Coefficients:** $b = [1, 2, 3, 2, 1]$
*   **Length of Impulse Response:** $N+1 = 5$ (Odd).
*   **Symmetry Check:**
    *   $b_0 = 1, b_4 = 1 \implies b_0 = b_4$
    *   $b_1 = 2, b_3 = 2 \implies b_1 = b_3$
    *   $b_2 = 3$ (Center tap)
*   **Conclusion:** The coefficients are symmetric ($b_k = b_{N-k}$). Since the length is odd, this is a **Type I Linear Phase FIR Filter**.
*   **Group Delay:** $N = 4$. The group delay $\tau = N/2 = 4/2 = 2$.

**Question 3 (Linear Phase):**

Consider an FIR filter with impulse response $h[n] = \{1, -2, 3, -2, 1\}$.
(a) Is this a linear phase filter? If yes, what type?
(b) What is its phase response at $\omega = \pi/2$?
(c) What is its group delay?

**Answer:**
*   **Coefficients:** $b = [1, -2, 3, -2, 1]$
*   **Length of Impulse Response:** $N+1 = 5$ (Odd).
*   **Symmetry Check:**
    *   $b_0 = 1, b_4 = 1 \implies b_0 = b_4$
    *   $b_1 = -2, b_3 = -2 \implies b_1 = b_3$
    *   $b_2 = 3$ (Center tap)
*   **(a) Linear Phase:** Yes, the coefficients are symmetric ($b_k = b_{N-k}$). Since the length is odd, this is a **Type I Linear Phase FIR Filter**.
*   **(b) Phase Response:** For Type I, $\phi(\omega) = -\omega (N/2)$. Here $N=4$, so $N/2=2$.
    $\phi(\omega) = -2\omega$.
    At $\omega = \pi/2$: $\phi(\pi/2) = -2(\pi/2) = -\pi$.
*   **(c) Group Delay:** For Type I, $\tau_g(\omega) = N/2$.
    $\tau_g = 4/2 = 2$.

**Question 4 (Structures & Phase):**

Design a 3-tap FIR filter with linear phase and a low-pass characteristic. Sketch its direct form structure and write its transfer function.

**Answer:**
A simple linear phase FIR filter can be designed using the windowing method (e.g., Hamming window). However, for a basic example of a linear phase FIR filter without specifying cutoff frequencies, we can construct one based on the symmetry properties.

Let's choose a Type I linear phase filter (odd length, symmetric coefficients). A 3-tap filter has $N=2$.
$b_0, b_1, b_2$.
For Type I, $b_0 = b_2$. Let's choose $b_0=1, b_1=2, b_2=1$.
*   **Coefficients:** $b = [1, 2, 1]$
*   **Transfer Function:** $H(z) = 1 + 2z^{-1} + z^{-2}$.
*   **Phase Response:** For Type I, $N=2$, $N/2=1$. $\phi(\omega) = -\omega(1) = -\omega$. This is linear phase.
*   **Frequency Response:**
    $H(e^{j\omega}) = 1 + 2e^{-j\omega} + e^{-j2\omega}$
    $H(e^{j\omega}) = e^{-j\omega}(e^{j\omega} + 2 + e^{-j\omega})$
    $H(e^{j\omega}) = e^{-j\omega}(2 + 2\cos(\omega))$
    The magnitude response is $|H(e^{j\omega})| = |2 + 2\cos(\omega)|$.
    At $\omega=0$, $|H(e^{j0})| = |2+2| = 4$ (Passes DC).
    At $\omega=\pi$, $|H(e^{j\pi})| = |2-2| = 0$ (Blocks Nyquist frequency).
    This suggests a low-pass characteristic.
*   **Direct Form Structure:**
    ```
           x[n] ------>(+)------>(+)------> y[n]
                       ^        ^
                       |        |
                     b_0=1    b_1=2
                       |        |
                       z^-1     z^-1
                       |        |
                       -----> z^-1
    ```
    (The last tap $b_2=1$ is associated with $x[n-2]$, which would require another delay).
    Correct structure for $y[n] = b_0 x[n] + b_1 x[n-1] + b_2 x[n-2]$:
    ```
           x[n] ------>(+)------>(+)------>(+) ------> y[n]
                       ^        ^        ^
                       |        |        |
                     b_0=1    b_1=2    b_2=1
                       |        |        |
                       z^-1     z^-1     z^-1
                       |        |        |
                       -----> z^-1 ------> z^-1
    ```
    Wait, for a 3-tap filter, N=2.
    $y[n] = b_0 x[n] + b_1 x[n-1] + b_2 x[n-2]$
    ```
           x[n] ------>(+)------>(+)------>(+) ------> y[n]
                       ^        ^        ^
                       |        |        |
                     b_0      b_1      b_2
                       |        |        |
                       z^-1     z^-1     z^-1
                       |        |        |
                       ---------------------> z^-1
                                            |
                                            ---------------------> z^-1
    ```
    The diagram for direct form structure:
    ```
           x[n] ------[ b0 ]------(+)------[ b1 ]------(+)------[ b2 ]------ y[n]
                       |           ^        |           ^
                       |           |        |           |
                       ---------[ z^-1 ]----|---------[ z^-1 ]----|
    ```
    Let's draw it more clearly:
    ```
    x[n] --->[b0]--->o--->[b1]--->o--->[b2]---+---> y[n]
                |       ^       |       ^
                |       |       |       |
                +-----[z^-1]----+-----[z^-1]----+
    ```
    Here, 'o' represents an adder.

---

### Important Points to Remember

*   **FIR filters are always stable** due to their finite impulse response.
*   **Linear phase response** is a key advantage of FIR filters, preventing waveform distortion.
*   **Four types of linear phase FIR filters** exist, distinguished by the length of the impulse response (odd/even) and the symmetry/anti-symmetry of their coefficients.
*   **Symmetric coefficients ($b_k = b_{N-k}$)** lead to $\phi(\omega) = -\omega(N/2)$.
*   **Anti-symmetric coefficients ($b_k = -b_{N-k}$)** lead to $\phi(\omega) = -\omega(N/2) - \pi/2$.
*   **The group delay** for all linear phase FIR filters is constant and equal to $N/2$, where $N+1$ is the number of taps (length of impulse response).
*   **Direct form** is the most basic FIR structure.
*   **Lattice structures** offer good numerical properties and robustness.
*   The choice of FIR filter structure affects computational complexity, memory usage, and sensitivity to coefficient quantization.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
