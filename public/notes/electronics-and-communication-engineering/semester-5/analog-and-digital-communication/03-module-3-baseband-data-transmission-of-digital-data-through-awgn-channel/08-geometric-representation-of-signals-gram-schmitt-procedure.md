---
title: "Geometric representation of Signals-Gram-Schmitt procedure"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 3: Baseband data transmission of digital data through AWGN channel"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe911"
status: "completed"
scrapedAt: "2026-05-23T17:52:59.785Z"
---
# ANALOG AND DIGITAL COMMUNICATION - Module 3: Baseband Data Transmission through AWGN Channel

## Topic: Geometric Representation of Signals - Gram-Schmidt Procedure

This module delves into the fundamental principles of transmitting digital data over a noisy channel, specifically the Additive White Gaussian Noise (AWGN) channel. A crucial aspect of understanding this transmission is the ability to represent digital signals geometrically, which allows for efficient analysis and design of receivers. The Gram-Schmidt procedure provides a systematic way to achieve this.

---

### 1. Learning Outcomes Covered:

*   **Understanding Signal Space Representation:** Grasp the concept of representing digital signals as vectors in a multi-dimensional space.
*   **Orthogonal Basis Functions:** Learn how to construct an orthogonal set of basis functions for a given set of signals.
*   **Gram-Schmidt Orthogonalization Procedure:** Understand the step-by-step process of applying the Gram-Schmidt procedure to generate an orthonormal basis.
*   **Dimensionality of Signal Space:** Determine the minimum number of basis functions required to represent a given set of signals.
*   **Signal Representation in Terms of Basis Functions:** Express each transmitted signal as a linear combination of the orthonormal basis functions.
*   **Receiver Design Implications:** Appreciate how this geometric representation aids in the design of optimal receivers.

---

### 2. Key Concepts and Definitions:

#### 2.1 Signal Space Representation

*   **Definition:** Digital communication systems transmit sequences of symbols, where each symbol corresponds to a specific waveform. These waveforms can be represented as points or vectors in a multi-dimensional Euclidean space. This space is called the **signal space**.
*   **Analogy:** Just as a point in a 2D plane can be represented by its (x, y) coordinates, a signal waveform can be represented by a set of coefficients (coordinates) with respect to a set of **basis functions**.
*   **Why Geometric Representation?**
    *   Simplifies the analysis of signal detection.
    *   Provides a framework for understanding the distance between signals, which directly relates to the probability of error.
    *   Facilitates the design of optimal receivers (e.g., matched filters, correlators).

#### 2.2 Basis Functions

*   **Definition:** A set of functions $\{\phi_i(t)\}$ is called a set of basis functions for a given set of signals $\{s_k(t)\}$ if each signal $s_k(t)$ can be expressed as a linear combination of these basis functions.
    $$ s_k(t) = \sum_{i=1}^{N} s_{ki} \phi_i(t) $$
    where $s_{ki}$ are the coefficients (or coordinates) of the signal $s_k(t)$ with respect to the basis function $\phi_i(t)$.
*   **Dimensionality (N):** The minimum number of basis functions required to represent all signals in the set is the **dimension** of the signal space. This dimension is determined by the characteristics of the signals, particularly their duration and bandwidth. For signals bandlimited to $B$ Hertz and existing over a duration $T$, the dimension is approximately $2BT$.

#### 2.3 Orthonormal Basis Functions

*   **Definition:** A set of basis functions $\{\phi_i(t)\}$ is **orthogonal** if the integral of the product of any two distinct basis functions is zero:
    $$ \int_{-\infty}^{\infty} \phi_i(t) \phi_j(t) dt = 0 \quad \text{for } i \neq j $$
*   **Definition:** A set of basis functions $\{\phi_i(t)\}$ is **orthonormal** if they are orthogonal and each basis function has unit energy (or norm):
    $$ \int_{-\infty}^{\infty} \phi_i^2(t) dt = 1 \quad \text{for all } i $$
    This implies:
    $$ \int_{-\infty}^{\infty} \phi_i(t) \phi_j(t) dt = \delta_{ij} = \begin{cases} 1 & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases} $$
    where $\delta_{ij}$ is the Kronecker delta function.
*   **Why Orthonormal Basis?** Orthonormal basis functions simplify the calculation of signal coefficients. If $\{ \phi_i(t) \}$ is an orthonormal basis, then the coefficient $s_{ki}$ for signal $s_k(t)$ is given by:
    $$ s_{ki} = \int_{-\infty}^{\infty} s_k(t) \phi_i(t) dt $$
    This is analogous to projecting a vector onto an orthonormal basis.

---

### 3. The Gram-Schmidt Procedure:

The Gram-Schmidt procedure is a systematic algorithm for constructing an orthonormal basis from any given set of linearly independent basis functions.

**Let the given set of signals be $\{s_1(t), s_2(t), \dots, s_M(t)\}$.**

**Step 1: Initialize the first orthonormal basis function $\phi_1(t)$.**

*   Calculate the energy of the first signal $s_1(t)$:
    $$ E_1 = \int_{-\infty}^{\infty} s_1^2(t) dt $$
*   If $E_1 = 0$, then $s_1(t)$ is a zero signal and can be ignored. Assume $E_1 > 0$.
*   The first orthonormal basis function $\phi_1(t)$ is obtained by normalizing $s_1(t)$:
    $$ \phi_1(t) = \frac{s_1(t)}{\sqrt{E_1}} $$

**Step 2: Construct the second orthonormal basis function $\phi_2(t)$.**

*   Project the second signal $s_2(t)$ onto the first orthonormal basis function $\phi_1(t)$ to find the component of $s_2(t)$ that is *already covered* by $\phi_1(t)$. This component is $s_{21} \phi_1(t)$, where:
    $$ s_{21} = \int_{-\infty}^{\infty} s_2(t) \phi_1(t) dt $$
*   Define a new function $g_2(t)$ which is orthogonal to $\phi_1(t)$:
    $$ g_2(t) = s_2(t) - s_{21} \phi_1(t) $$
    This $g_2(t)$ represents the part of $s_2(t)$ that is *orthogonal* to $s_1(t)$ (or $\phi_1(t)$).
*   Calculate the energy of $g_2(t)$:
    $$ E_2 = \int_{-\infty}^{\infty} g_2^2(t) dt $$
*   If $E_2 = 0$, then $s_2(t)$ is a linear combination of $s_1(t)$ (specifically, $s_2(t) = s_{21} \phi_1(t)$), and thus does not contribute to increasing the dimension of the signal space. We skip to the next signal $s_3(t)$.
*   If $E_2 > 0$, the second orthonormal basis function $\phi_2(t)$ is obtained by normalizing $g_2(t)$:
    $$ \phi_2(t) = \frac{g_2(t)}{\sqrt{E_2}} $$

**Step 3: Construct the third orthonormal basis function $\phi_3(t)$ (if needed).**

*   Project $s_3(t)$ onto the previously found orthonormal basis functions $\phi_1(t)$ and $\phi_2(t)$:
    $$ s_{31} = \int_{-\infty}^{\infty} s_3(t) \phi_1(t) dt $$
    $$ s_{32} = \int_{-\infty}^{\infty} s_3(t) \phi_2(t) dt $$
*   Define a new function $g_3(t)$ orthogonal to $\phi_1(t)$ and $\phi_2(t)$:
    $$ g_3(t) = s_3(t) - s_{31} \phi_1(t) - s_{32} \phi_2(t) $$
*   Calculate the energy of $g_3(t)$:
    $$ E_3 = \int_{-\infty}^{\infty} g_3^2(t) dt $$
*   If $E_3 = 0$, $s_3(t)$ is linearly dependent on $s_1(t)$ and $s_2(t)$. Skip to $s_4(t)$.
*   If $E_3 > 0$, the third orthonormal basis function $\phi_3(t)$ is:
    $$ \phi_3(t) = \frac{g_3(t)}{\sqrt{E_3}} $$

**Generalizing for the $k$-th signal $s_k(t)$:**

Assuming we have found $j$ orthonormal basis functions $\{\phi_1(t), \dots, \phi_j(t)\}$ from the previous $k-1$ signals, we construct the $j+1$-th orthonormal basis function as follows:

*   Calculate the projections of $s_k(t)$ onto the existing orthonormal basis:
    $$ s_{ki} = \int_{-\infty}^{\infty} s_k(t) \phi_i(t) dt \quad \text{for } i = 1, 2, \dots, j $$
*   Define $g_{k+1}(t)$ orthogonal to $\phi_1(t), \dots, \phi_j(t)$:
    $$ g_{k+1}(t) = s_k(t) - \sum_{i=1}^{j} s_{ki} \phi_i(t) $$
*   Calculate the energy of $g_{k+1}(t)$:
    $$ E_{k+1} = \int_{-\infty}^{\infty} g_{k+1}^2(t) dt $$
*   If $E_{k+1} > 0$, the next orthonormal basis function is:
    $$ \phi_{j+1}(t) = \frac{g_{k+1}(t)}{\sqrt{E_{k+1}}} $$
    If $E_{k+1} = 0$, the signal $s_k(t)$ is linearly dependent on the previous signals.

The dimension of the signal space is the number of non-zero energy orthonormal basis functions generated.

---

### 4. Signal Representation in Terms of Basis Functions:

Once an orthonormal basis $\{\phi_1(t), \dots, \phi_N(t)\}$ of dimension $N$ is obtained for the set of $M$ signals $\{s_1(t), \dots, s_M(t)\}$, each signal $s_k(t)$ can be uniquely represented as a vector in this $N$-dimensional signal space:

$$ s_k(t) = \sum_{i=1}^{N} s_{ki} \phi_i(t) $$

The vector representation of signal $s_k(t)$ is then:
$$ \mathbf{s}_k = [s_{k1}, s_{k2}, \dots, s_{kN}]^T $$
where $s_{ki} = \int_{-\infty}^{\infty} s_k(t) \phi_i(t) dt$.

**Geometric Interpretation:**

*   Each transmitted signal waveform $s_k(t)$ is mapped to a point (or vector) $\mathbf{s}_k$ in an $N$-dimensional Euclidean space.
*   The basis functions $\phi_i(t)$ act as the coordinate axes of this space.
*   The coefficients $s_{ki}$ are the coordinates of the signal vector along these axes.

---

### 5. Receiver Design Implications:

The geometric representation of signals is fundamental to designing optimal receivers, particularly in the context of minimizing the probability of error.

*   **Decision Regions:** In the $N$-dimensional signal space, each transmitted signal $\mathbf{s}_k$ is represented by a vector. The receiver's task is to determine which signal was transmitted based on the received noisy signal $r(t) = s_k(t) + n(t)$, where $n(t)$ is the AWGN.
*   **Optimal Receiver (Correlator/Matched Filter):** An optimal receiver performs correlation (or matched filtering) of the received signal $r(t)$ with each of the basis functions $\phi_i(t)$ to obtain the corresponding signal coordinates.
    $$ r_i = \int_{-\infty}^{\infty} r(t) \phi_i(t) dt = \int_{-\infty}^{\infty} (s_k(t) + n(t)) \phi_i(t) dt = s_{ki} + n_i $$
    Here, $s_{ki}$ are the true coordinates of the transmitted signal, and $n_i$ are the noisy components due to AWGN. The vector $\mathbf{r} = [r_1, r_2, \dots, r_N]^T$ is the received vector in the signal space.
*   **Minimum Distance Receiver:** The optimal receiver chooses the signal $\mathbf{s}_j$ that is closest to the received vector $\mathbf{r}$ in the $N$-dimensional space. The distance is typically the Euclidean distance:
    $$ d^2(\mathbf{r}, \mathbf{s}_j) = \|\mathbf{r} - \mathbf{s}_j\|^2 = \sum_{i=1}^{N} (r_i - s_{ji})^2 $$
    The receiver decides that $s_j(t)$ was transmitted if $d(\mathbf{r}, \mathbf{s}_j)$ is the minimum among all possible signals.
*   **Decision Boundaries:** The signal space is partitioned into decision regions. Each region corresponds to a transmitted signal. The boundaries between these regions are hyperplanes that are equidistant from the vectors representing two different signals. For equiprobable and equally spaced signals, these boundaries often form Voronoi regions.

---

### 6. Examples:

#### Example 1: Binary Phase Shift Keying (BPSK)

*   **Signals:** Two signals, $s_1(t) = A \cos(2\pi f_c t)$ and $s_2(t) = -A \cos(2\pi f_c t)$, for $0 \le t \le T$. Let $f_c = 1/(2T)$. This simplifies $s_1(t) = A$ and $s_2(t) = -A$ over the interval $[0, T]$. (Note: This is a simplified representation, actual BPSK involves a carrier. For baseband signals, we can consider pulses of alternating polarity).
*   **Let's use a simpler baseband example:** $s_1(t) = A$ for $0 \le t \le T$ and $s_2(t) = -A$ for $0 \le t \le T$.
*   **Gram-Schmidt Procedure:**
    *   Signal $s_1(t) = A$.
    *   Energy of $s_1(t)$: $E_1 = \int_0^T A^2 dt = A^2 T$.
    *   First orthonormal basis function: $\phi_1(t) = \frac{s_1(t)}{\sqrt{E_1}} = \frac{A}{\sqrt{A^2 T}} = \frac{1}{\sqrt{T}}$ for $0 \le t \le T$.
    *   Consider $s_2(t) = -A$.
    *   Project $s_2(t)$ onto $\phi_1(t)$:
        $$ s_{21} = \int_0^T s_2(t) \phi_1(t) dt = \int_0^T (-A) \frac{1}{\sqrt{T}} dt = -\frac{A}{\sqrt{T}} \int_0^T dt = -\frac{A}{\sqrt{T}} T = -A\sqrt{T} $$
    *   Define $g_2(t) = s_2(t) - s_{21} \phi_1(t) = -A - (-A\sqrt{T}) \frac{1}{\sqrt{T}} = -A + A = 0$.
    *   Energy of $g_2(t)$ is $E_2 = 0$. This means $s_2(t)$ is linearly dependent on $s_1(t)$.
*   **Dimensionality:** The signal space is 1-dimensional ($N=1$).
*   **Signal Representation:**
    *   $s_1(t) = s_{11} \phi_1(t)$. We found $s_{11} = \int_0^T s_1(t) \phi_1(t) dt = \int_0^T A \frac{1}{\sqrt{T}} dt = A\sqrt{T}$.
        So, $s_1(t) = (A\sqrt{T}) \frac{1}{\sqrt{T}}$.
    *   $s_2(t) = s_{21} \phi_1(t)$. We found $s_{21} = -A\sqrt{T}$.
        So, $s_2(t) = (-A\sqrt{T}) \frac{1}{\sqrt{T}}$.
*   **Vector Representation:**
    *   $\mathbf{s}_1 = [A\sqrt{T}]$
    *   $\mathbf{s}_2 = [-A\sqrt{T}]$
*   **Geometric Interpretation:** Both signals are represented by points on a single line (the axis defined by $\phi_1(t)$). The distance between them is $2A\sqrt{T}$.

#### Example 2: Quadrature Phase Shift Keying (QPSK)

*   **Signals:** Four signals, $s_1(t), s_2(t), s_3(t), s_4(t)$, each for $0 \le t \le T$. These signals are often orthogonal over the symbol duration $T$. For simplicity, let's assume we have two basis functions that represent these signals.
*   Consider $s_1(t) = A$ for $0 \le t \le T$.
*   $s_2(t) = -A$ for $0 \le t \le T$.
*   $s_3(t) = A$ for $T \le t \le 2T$ and $0$ otherwise. (This is a different example, let's stick to signals within the same duration $T$).
*   Let's assume signals are $s_1(t) = A u(t)$, $s_2(t) = -A u(t)$, $s_3(t) = B v(t)$, $s_4(t) = -B v(t)$, where $u(t)$ and $v(t)$ are orthogonal pulses over $0 \le t \le T$. For example, $u(t) = 1$ and $v(t) = \cos(\pi t/T)$ for $0 \le t \le T$. (This is a simplified representation).
*   More standard QPSK signals:
    $s_1(t) = \sqrt{\frac{2E_s}{T}} \cos(\omega_c t + \pi/4)$, $0 \le t \le T$
    $s_2(t) = \sqrt{\frac{2E_s}{T}} \cos(\omega_c t + 3\pi/4)$, $0 \le t \le T$
    $s_3(t) = \sqrt{\frac{2E_s}{T}} \cos(\omega_c t + 5\pi/4)$, $0 \le t \le T$
    $s_4(t) = \sqrt{\frac{2E_s}{T}} \cos(\omega_c t + 7\pi/4)$, $0 \le t \le T$
*   If we consider the signals to be bandlimited and use basis functions related to $\cos(\omega_c t)$ and $\sin(\omega_c t)$, we can represent them.
*   Let the basis functions be:
    $\phi_1(t) = \sqrt{\frac{2}{T}} \cos(\omega_c t)$
    $\phi_2(t) = \sqrt{\frac{2}{T}} \sin(\omega_c t)$
*   The signals can be written as:
    $s_1(t) = \sqrt{E_s} (\frac{1}{\sqrt{2}} \phi_1(t) + \frac{1}{\sqrt{2}} \phi_2(t))$
    $s_2(t) = \sqrt{E_s} (-\frac{1}{\sqrt{2}} \phi_1(t) + \frac{1}{\sqrt{2}} \phi_2(t))$
    $s_3(t) = \sqrt{E_s} (-\frac{1}{\sqrt{2}} \phi_1(t) - \frac{1}{\sqrt{2}} \phi_2(t))$
    $s_4(t) = \sqrt{E_s} (\frac{1}{\sqrt{2}} \phi_1(t) - \frac{1}{\sqrt{2}} \phi_2(t))$
*   **Vector Representation:**
    $\mathbf{s}_1 = [\sqrt{E_s/2}, \sqrt{E_s/2}]$
    $\mathbf{s}_2 = [-\sqrt{E_s/2}, \sqrt{E_s/2}]$
    $\mathbf{s}_3 = [-\sqrt{E_s/2}, -\sqrt{E_s/2}]$
    $\mathbf{s}_4 = [\sqrt{E_s/2}, -\sqrt{E_s/2}]$
*   **Geometric Interpretation:** The four QPSK signals are represented by four points in a 2-dimensional signal space. These points form the vertices of a square centered at the origin. The distance between any two signal points is $\sqrt{2E_s}$, which is crucial for calculating the probability of error.

---

### 7. Practice Questions:

**Question 1:** (CO2, CO3)
What is the primary purpose of representing digital signals geometrically in signal space?

**Answer:** The primary purpose is to simplify the analysis of signal detection and to provide a framework for understanding the distance between signals, which directly relates to the probability of error. This geometric representation also aids in the design of optimal receivers.

**Question 2:** (CO3)
Explain the difference between orthogonal and orthonormal basis functions. Why are orthonormal bases preferred in signal representation?

**Answer:** Orthogonal basis functions have a zero inner product (integral of their product). Orthonormal basis functions are orthogonal and have a unit norm (integral of their square is 1). Orthonormal bases are preferred because they simplify the calculation of signal coefficients (projections) and provide a direct vector representation with unit-length axes.

**Question 3:** (CO3)
Consider the following two signals:
$s_1(t) = 1$ for $0 \le t \le 1$, and $s_1(t) = 0$ otherwise.
$s_2(t) = 1$ for $0 \le t \le 0.5$, and $s_2(t) = 0$ otherwise.
Use the Gram-Schmidt procedure to find an orthonormal basis for these two signals. Determine the dimension of the signal space.

**Solution:**
1.  **Signal $s_1(t)$:** $s_1(t) = u(t)$, where $u(t)$ is the unit step function.
    *   Energy $E_1 = \int_0^1 1^2 dt = 1$.
    *   First orthonormal basis function: $\phi_1(t) = \frac{s_1(t)}{\sqrt{E_1}} = 1$ for $0 \le t \le 1$.

2.  **Signal $s_2(t)$:** $s_2(t) = u(t)$ for $0 \le t \le 0.5$.
    *   Project $s_2(t)$ onto $\phi_1(t)$:
        $s_{21} = \int_0^1 s_2(t) \phi_1(t) dt = \int_0^{0.5} 1 \cdot 1 dt = 0.5$.
    *   Define $g_2(t) = s_2(t) - s_{21} \phi_1(t)$.
        For $0 \le t \le 0.5$: $g_2(t) = 1 - 0.5 \cdot 1 = 0.5$.
        For $0.5 < t \le 1$: $g_2(t) = 0 - 0.5 \cdot 1 = -0.5$. (Assuming $\phi_1(t)$ is defined from 0 to 1, but $s_2(t)$ is 0 after 0.5).
        Let's be precise: $s_2(t)$ is non-zero only for $0 \le t \le 0.5$.
        $s_{21} = \int_0^{0.5} 1 \cdot 1 dt = 0.5$.
        $g_2(t) = s_2(t) - s_{21} \phi_1(t) = u(t)[0 \le t \le 0.5] - 0.5 \cdot u(t)[0 \le t \le 1]$.
        For $0 \le t \le 0.5$: $g_2(t) = 1 - 0.5(1) = 0.5$.
        For $0.5 < t \le 1$: $g_2(t) = 0 - 0.5(1) = -0.5$.

    *   Let's redefine the basis functions over the total signal duration, which is $[0, 1]$.
    $s_1(t) = 1$ for $0 \le t \le 1$.
    $s_2(t) = 1$ for $0 \le t \le 0.5$, $0$ for $0.5 < t \le 1$.

    *   $\phi_1(t) = 1$ for $0 \le t \le 1$.
    *   $s_{21} = \int_0^1 s_2(t) \phi_1(t) dt = \int_0^{0.5} 1 \cdot 1 dt + \int_{0.5}^1 0 \cdot 1 dt = 0.5$.
    *   $g_2(t) = s_2(t) - s_{21} \phi_1(t)$.
        For $0 \le t \le 0.5$: $g_2(t) = 1 - 0.5(1) = 0.5$.
        For $0.5 < t \le 1$: $g_2(t) = 0 - 0.5(1) = -0.5$.
    *   Energy $E_2 = \int_0^1 g_2^2(t) dt = \int_0^{0.5} (0.5)^2 dt + \int_{0.5}^1 (-0.5)^2 dt = \int_0^{0.5} 0.25 dt + \int_{0.5}^1 0.25 dt = 0.25(0.5) + 0.25(0.5) = 0.125 + 0.125 = 0.25$.
    *   Second orthonormal basis function: $\phi_2(t) = \frac{g_2(t)}{\sqrt{E_2}} = \frac{g_2(t)}{\sqrt{0.25}} = \frac{g_2(t)}{0.5} = 2 g_2(t)$.
        So, $\phi_2(t) = 1$ for $0 \le t \le 0.5$, and $\phi_2(t) = -1$ for $0.5 < t \le 1$.

*   **Orthonormal Basis:** $\{\phi_1(t), \phi_2(t)\}$, where:
    $\phi_1(t) = 1$ for $0 \le t \le 1$.
    $\phi_2(t) = 1$ for $0 \le t \le 0.5$, and $-1$ for $0.5 < t \le 1$.

*   **Dimension of Signal Space:** $N=2$, because we found two non-zero energy basis functions and $s_2(t)$ was not a simple multiple of $s_1(t)$.

*   **Signal Representation:**
    $s_1(t) = s_{11} \phi_1(t) + s_{12} \phi_2(t)$
    $s_{11} = \int_0^1 s_1(t) \phi_1(t) dt = \int_0^1 1 \cdot 1 dt = 1$.
    $s_{12} = \int_0^1 s_1(t) \phi_2(t) dt = \int_0^{0.5} 1 \cdot 1 dt + \int_{0.5}^1 1 \cdot (-1) dt = 0.5 - 0.5 = 0$.
    So, $s_1(t) = 1 \cdot \phi_1(t) + 0 \cdot \phi_2(t)$. Vector: $\mathbf{s}_1 = [1, 0]^T$.

    $s_2(t) = s_{21} \phi_1(t) + s_{22} \phi_2(t)$
    $s_{21} = 0.5$ (calculated earlier).
    $s_{22} = \int_0^1 s_2(t) \phi_2(t) dt = \int_0^{0.5} 1 \cdot 1 dt + \int_{0.5}^1 0 \cdot (-1) dt = 0.5$.
    So, $s_2(t) = 0.5 \cdot \phi_1(t) + 0.5 \cdot \phi_2(t)$. Vector: $\mathbf{s}_2 = [0.5, 0.5]^T$.

**Question 4:** (CO3, CO4)
In a certain digital communication system, the transmitted signals are $s_1(t) = 2u(t)$ and $s_2(t) = -2u(t)$ for $0 \le t \le T$, where $u(t)$ is a unit pulse.
a) Find an orthonormal basis for these signals.
b) Represent these signals as vectors in the signal space.
c) If the received signal is $r(t) = s_1(t) + n(t)$, where $n(t)$ is AWGN with zero mean, what decision would an optimal receiver make? Explain.

**Answer:**
a) **Orthonormal Basis:**
   *   $s_1(t) = 2u(t)$, $0 \le t \le T$.
   *   Energy $E_1 = \int_0^T (2)^2 dt = 4T$.
   *   $\phi_1(t) = \frac{s_1(t)}{\sqrt{E_1}} = \frac{2u(t)}{\sqrt{4T}} = \frac{u(t)}{\sqrt{T}}$ for $0 \le t \le T$.
   *   $s_2(t) = -2u(t)$.
   *   $s_{21} = \int_0^T s_2(t) \phi_1(t) dt = \int_0^T (-2u(t)) \frac{u(t)}{\sqrt{T}} dt = -\frac{2}{\sqrt{T}} \int_0^T 1 dt = -\frac{2}{\sqrt{T}} T = -2\sqrt{T}$.
   *   $g_2(t) = s_2(t) - s_{21} \phi_1(t) = -2u(t) - (-2\sqrt{T}) \frac{u(t)}{\sqrt{T}} = -2u(t) + 2u(t) = 0$.
   *   Since $g_2(t)=0$, the signal space is 1-dimensional. The orthonormal basis is $\{\phi_1(t)\}$, where $\phi_1(t) = \frac{1}{\sqrt{T}}$ for $0 \le t \le T$.

b) **Vector Representation:**
   *   $s_1(t) = s_{11} \phi_1(t)$. $s_{11} = \int_0^T s_1(t) \phi_1(t) dt = \int_0^T (2u(t)) \frac{u(t)}{\sqrt{T}} dt = \frac{2}{\sqrt{T}} T = 2\sqrt{T}$.
      $\mathbf{s}_1 = [2\sqrt{T}]$.
   *   $s_2(t) = s_{21} \phi_1(t)$. $s_{21} = -2\sqrt{T}$ (calculated in part a).
      $\mathbf{s}_2 = [-2\sqrt{T}]$.

c) **Optimal Receiver Decision:**
   The received signal is $r(t) = s_1(t) + n(t)$.
   An optimal receiver will project $r(t)$ onto the basis function $\phi_1(t)$ to get a single coordinate:
   $r_1 = \int_0^T r(t) \phi_1(t) dt = \int_0^T (s_1(t) + n(t)) \phi_1(t) dt = \int_0^T s_1(t) \phi_1(t) dt + \int_0^T n(t) \phi_1(t) dt$
   $r_1 = s_{11} + n_1 = 2\sqrt{T} + n_1$.
   The receiver compares this observed coordinate $r_1$ with the known signal coordinates $s_{11} = 2\sqrt{T}$ and $s_{21} = -2\sqrt{T}$.
   The decision is made based on which signal vector is closer to the received vector $[r_1]$.
   *   Distance to $\mathbf{s}_1$: $|r_1 - s_{11}| = |(2\sqrt{T} + n_1) - 2\sqrt{T}| = |n_1|$.
   *   Distance to $\mathbf{s}_2$: $|r_1 - s_{21}| = |(2\sqrt{T} + n_1) - (-2\sqrt{T})| = |4\sqrt{T} + n_1|$.

   Since $n_1$ is a zero-mean random variable due to AWGN, if $|n_1|$ is small, then $|r_1 - s_{11}|$ will be smaller than $|r_1 - s_{21}|$.
   An optimal receiver will decide that $s_1(t)$ was transmitted if $r_1 > 0$ (or $r_1$ is closer to $s_{11}$ than $s_{21}$). The decision boundary is at the midpoint between $s_{11}$ and $s_{21}$, which is $\frac{2\sqrt{T} + (-2\sqrt{T})}{2} = 0$.
   Therefore, if $r_1 > 0$, the receiver decides $s_1(t)$ was transmitted.

---

### 8. Important Points to Remember:

*   **Signal Space Dimension:** The dimension of the signal space ($N$) is the minimum number of basis functions required to represent all signals. It's related to the time-bandwidth product ($2BT$).
*   **Gram-Schmidt:** A systematic way to obtain an orthonormal basis from any set of linearly independent signals.
*   **Vector Representation:** Each signal waveform can be uniquely represented as a vector in the signal space, with coefficients determined by projections onto the orthonormal basis.
*   **Receiver Design:** Geometric interpretation simplifies receiver design. Optimal receivers aim to find the signal vector closest to the received noisy vector.
*   **Distance and Error:** The distance between signal vectors in the signal space is directly related to the probability of error in the presence of noise. Larger distances generally lead to lower error rates.
*   **Linear Dependence:** If a signal can be expressed as a linear combination of other signals in the set, it doesn't increase the dimension of the signal space. The Gram-Schmidt procedure will result in a zero-energy function for such signals.

---

### 9. Alignment with Course Outcomes:

*   **CO1 (Illustrate principles of analog communication systems):** While this module focuses on digital, understanding signal representation is a building block for comprehending analog signal processing as well. (Indirectly related)
*   **CO2 (Explain basic concepts of digital communication):** Explains the core concept of how digital signals are represented and manipulated.
*   **CO3 (Analyze baseband transmission of digital data through AWGN channel):** This is the direct application. Geometric representation is crucial for analyzing detection performance and designing receivers in AWGN.
*   **CO4 (Apply various digital modulation techniques):** Understanding signal space and basis functions is essential for understanding how different modulation schemes (like QPSK, M-PSK, M-QAM) map symbols to signals in signal space.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References:

*   **Communication Systems by Simon Haykin and Michael Moher (Wiley, 5th Edition, 2020):** Chapter 3 (Vector Space Approach to Signal Representation) is highly relevant.
*   **Modern Digital and Analog Communication Systems by B.P. Lathi and Zhi Ding (Oxford University Press, 5th Edition, 2018):** Chapter 7 (Signal Space and the Gram-Schmidt Orthogonalization Procedure) provides excellent coverage.
*   **Introduction to Analog and Digital Communication, An Indian adaptation by Simon Haykin and Michael Moher (Wiley, 2nd Edition, 2022):** Similar content to the 5th edition of Haykin, likely focusing on the signal space concepts.
*   **Digital Communications by John G. Proakis and Masoud Salehi (McGraw-Hill Education, 6th Edition, 2020):** Chapter 2 (Representation of Digital Waveforms) covers signal space and basis functions extensively.
*   **Principles of Communication Systems by Herbert Taub and Donald L. Schilling (McGraw-Hill Education, 4th Edition, 2013):** Chapters on optimum detection will utilize signal space concepts.

This comprehensive study note aims to provide a thorough understanding of the geometric representation of signals and the Gram-Schmidt procedure, its applications, and its importance in digital communication systems.