---
title: "Signal space."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 3: Baseband data transmission of digital data through AWGN channel"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe912"
status: "completed"
scrapedAt: "2026-05-23T17:53:00.502Z"
---
# Module 3: Baseband Data Transmission of Digital Data through AWGN Channel

## Topic: Signal Space

This module delves into the fundamental concepts of representing digital signals in a geometric framework, known as signal space. This representation is crucial for analyzing the performance of digital communication systems, especially in the presence of noise, which in this context is modeled as Additive White Gaussian Noise (AWGN).

---

### 1. Learning Outcomes Covered

*   **Understanding Signal Representation:** Comprehend how digital signals can be represented as vectors in a multi-dimensional space.
*   **Gram-Schmidt Orthogonalization:** Learn the process of constructing an orthonormal basis for a set of signals.
*   **Signal Space Concepts:** Grasp the geometric interpretation of signals and their properties in signal space.
*   **AWGN Channel Impact:** Understand how the AWGN channel affects the received signals in this signal space representation.
*   **Decision Regions:** Visualize and understand how decision regions are formed in signal space for optimal detection.

---

### 2. Key Concepts and Definitions

#### 2.1. Signals as Vectors

In digital communications, each possible transmitted symbol (or waveform) can be represented as a vector in a multi-dimensional Euclidean space. This is a powerful abstraction that allows us to use geometric concepts to analyze signal behavior.

*   **Definition:** A finite set of $M$ distinct signals $\{s_1(t), s_2(t), \dots, s_M(t)\}$ used to represent $M$ possible symbols can be viewed as vectors in an $N$-dimensional space, where $N$ is the minimum number of basis functions required to represent all signals in the set.

*   **Basis Functions:** These are a set of $N$ linearly independent functions $\{\phi_1(t), \phi_2(t), \dots, \phi_N(t)\}$ that can be used to express any signal in the set as a linear combination.
    *   For a set of signals to be represented in an $N$-dimensional space, there must exist $N$ basis functions.
    *   The number of dimensions $N$ is often referred to as the **memory** of the system. For example, if each transmitted symbol is a simple pulse, $N=1$. If symbols are sequences of pulses, $N$ will be greater than 1.

*   **Vector Representation:** Any signal $s_i(t)$ can be expressed as:
    $$s_i(t) = \sum_{j=1}^{N} s_{ij} \phi_j(t)$$
    where $s_{ij}$ are the coefficients of the vector representation.
    The signal $s_i(t)$ can then be represented by the vector $\mathbf{s}_i$:
    $$\mathbf{s}_i = [s_{i1}, s_{i2}, \dots, s_{iN}]$$

*   **Orthonormal Basis:** A set of basis functions $\{\phi_1(t), \phi_2(t), \dots, \phi_N(t)\}$ is orthonormal if:
    *   **Orthogonality:** The integral of the product of any two distinct basis functions is zero:
        $$\int_{-\infty}^{\infty} \phi_j(t) \phi_k(t) dt = 0 \quad \text{for } j \neq k$$
    *   **Normality (Unit Energy):** The integral of the square of each basis function is one:
        $$\int_{-\infty}^{\infty} \phi_j^2(t) dt = 1$$
    These conditions can be summarized as:
    $$\int_{-\infty}^{\infty} \phi_j(t) \phi_k(t) dt = \delta_{jk}$$
    where $\delta_{jk}$ is the Kronecker delta function ($\delta_{jk} = 1$ if $j=k$, and $\delta_{jk} = 0$ if $j \neq k$).

*   **Calculating Coefficients:** If an orthonormal basis is used, the coefficients $s_{ij}$ can be calculated by projecting the signal $s_i(t)$ onto each basis function:
    $$s_{ij} = \int_{-\infty}^{\infty} s_i(t) \phi_j(t) dt$$

---

#### 2.2. Gram-Schmidt Orthogonalization Procedure

When dealing with a set of signals that are not necessarily orthogonal, the Gram-Schmidt procedure is used to construct an orthonormal basis for the signal space.

*   **Purpose:** To convert a set of linearly independent signals into an orthonormal set of basis functions.
*   **Steps:**
    1.  Start with the first signal $s_1(t)$. Define the first basis function $\phi_1(t)$ by normalizing $s_1(t)$:
        $$\phi_1(t) = \frac{s_1(t)}{\sqrt{\int_{-\infty}^{\infty} s_1^2(t) dt}}$$
        The corresponding vector is $\mathbf{s}_1 = [\sqrt{\int_{-\infty}^{\infty} s_1^2(t) dt}]$.
        The dimension $N_1$ is 1.

    2.  Consider the second signal $s_2(t)$. Remove the component of $s_2(t)$ that lies in the direction of $\phi_1(t)$:
        $$s_2'(t) = s_2(t) - \left( \int_{-\infty}^{\infty} s_2(\tau) \phi_1(\tau) d\tau \right) \phi_1(t)$$
        The second coefficient for $s_2(t)$ is $s_{21} = \int_{-\infty}^{\infty} s_2(\tau) \phi_1(\tau) d\tau$.
        The remaining signal $s_2'(t)$ is orthogonal to $\phi_1(t)$.

    3.  Normalize $s_2'(t)$ to get the second basis function $\phi_2(t)$:
        $$\phi_2(t) = \frac{s_2'(t)}{\sqrt{\int_{-\infty}^{\infty} (s_2'(\tau))^2 d\tau}}$$
        The second coefficient for $s_2(t)$ is $s_{22} = \sqrt{\int_{-\infty}^{\infty} (s_2'(\tau))^2 d\tau}$.
        The vector for $s_2(t)$ is $\mathbf{s}_2 = [s_{21}, s_{22}]$.
        The dimension $N_2$ is 2.

    4.  Continue this process for subsequent signals. For the $k$-th signal $s_k(t)$:
        $$s_k'(t) = s_k(t) - \sum_{j=1}^{k-1} \left( \int_{-\infty}^{\infty} s_k(\tau) \phi_j(\tau) d\tau \right) \phi_j(t)$$
        The coefficients are $s_{kj} = \int_{-\infty}^{\infty} s_k(\tau) \phi_j(\tau) d\tau$ for $j=1, \dots, k-1$.
        If $s_k'(t)$ is not identically zero, normalize it to get $\phi_k(t)$:
        $$\phi_k(t) = \frac{s_k'(t)}{\sqrt{\int_{-\infty}^{\infty} (s_k'(\tau))^2 d\tau}}$$
        The $k$-th coefficient is $s_{kk} = \sqrt{\int_{-\infty}^{\infty} (s_k'(\tau))^2 d\tau}$.
        The vector for $s_k(t)$ is $\mathbf{s}_k = [s_{k1}, s_{k2}, \dots, s_{kk}]$.
        The dimension of the signal space is the maximum $k$ for which $s_k'(t)$ is non-zero.

*   **Textbook Reference:** This procedure is extensively covered in **Haykin & Moher (5th Ed.)** and **Lathi & Ding (5th Ed.)**. For instance, Haykin & Moher often uses the Karhunen-Loeve expansion, which is related to Gram-Schmidt, to find optimal basis functions.

---

#### 2.3. Geometric Interpretation of Signals

Once signals are represented as vectors in an $N$-dimensional signal space, we can visualize them as points or vectors in this space.

*   **Signal Constellation:** For a given modulation scheme (e.g., BPSK, QPSK, 8-PSK), the set of $M$ possible transmitted signals can be represented as $M$ points in the $N$-dimensional signal space. This collection of points is called the **signal constellation**.
    *   The coordinates of each point are the coefficients of the corresponding signal vector.
    *   For example, in BPSK with antipodal signals $s_1(t) = \sqrt{E_b} P(t)$ and $s_2(t) = -\sqrt{E_b} P(t)$ where $P(t)$ is a unit-energy pulse, using $P(t)$ as the single basis function $\phi_1(t) = P(t)$, the signal vectors are $\mathbf{s}_1 = [\sqrt{E_b}]$ and $\mathbf{s}_2 = [-\sqrt{E_b}]$. This is a 1-dimensional signal space, and the constellation has two points on a line.

*   **Distance between Signals:** The Euclidean distance between two signal vectors $\mathbf{s}_i$ and $\mathbf{s}_j$ is given by:
    $$d_{ij} = ||\mathbf{s}_i - \mathbf{s}_j|| = \sqrt{\sum_{k=1}^{N} (s_{ik} - s_{jk})^2}$$
    This distance is a crucial measure of how distinguishable two signals are. Larger distances generally lead to lower error probabilities.

*   **Energy of a Signal:** The energy of a signal $s_i(t)$ is related to its vector representation:
    $$E_i = \int_{-\infty}^{\infty} s_i^2(t) dt = \sum_{k=1}^{N} s_{ik}^2 = ||\mathbf{s}_i||^2$$

---

#### 2.4. The AWGN Channel

The Additive White Gaussian Noise (AWGN) channel is a standard model for communication channels where noise is a primary concern.

*   **Definition:** The received signal $r(t)$ at the output of the AWGN channel is the sum of the transmitted signal $s(t)$ and the additive noise $w(t)$:
    $$r(t) = s(t) + w(t)$$
    where $w(t)$ is a zero-mean, white Gaussian noise process with a constant power spectral density (PSD) of $\mathcal{N}_0/2$ W/Hz.

*   **Impact on Signal Space:** When a transmitted signal $s_i(t)$ is corrupted by AWGN, the received signal in the signal space representation becomes a noisy version of the signal vector.
    Let the transmitted signal be represented by the vector $\mathbf{s}_i$. The received signal $r(t)$ can be projected onto the orthonormal basis $\{\phi_1(t), \dots, \phi_N(t)\}$ to obtain a received vector $\mathbf{r}$:
    $$r(t) = \sum_{j=1}^{N} r_j \phi_j(t) + n(t)$$
    where $r_j = \int_{-\infty}^{\infty} r(t) \phi_j(t) dt$.
    Substituting $r(t) = s_i(t) + w(t)$:
    $$r_j = \int_{-\infty}^{\infty} (s_i(t) + w(t)) \phi_j(t) dt = \int_{-\infty}^{\infty} s_i(t) \phi_j(t) dt + \int_{-\infty}^{\infty} w(t) \phi_j(t) dt$$
    $$r_j = s_{ij} + n_j$$
    So, the received vector is $\mathbf{r} = \mathbf{s}_i + \mathbf{n}$, where $\mathbf{n} = [n_1, n_2, \dots, n_N]$ is a vector of Gaussian random variables representing the noise components.

*   **Properties of Noise Vector Components:** The components $n_j$ of the noise vector are independent Gaussian random variables with zero mean and variance $\sigma^2 = \mathcal{N}_0/2$. This is because the basis functions are orthonormal and the noise is white.
    $$E[n_j] = E\left[\int_{-\infty}^{\infty} w(t) \phi_j(t) dt\right] = \int_{-\infty}^{\infty} E[w(t)] \phi_j(t) dt = 0$$
    $$E[n_j^2] = E\left[\left(\int_{-\infty}^{\infty} w(t) \phi_j(t) dt\right)^2\right] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} E[w(t)w(\tau)] \phi_j(t) \phi_j(\tau) dt d\tau$$
    Since $E[w(t)w(\tau)] = \frac{\mathcal{N}_0}{2} \delta(t-\tau)$:
    $$E[n_j^2] = \frac{\mathcal{N}_0}{2} \int_{-\infty}^{\infty} \phi_j^2(t) dt = \frac{\mathcal{N}_0}{2} \times 1 = \frac{\mathcal{N}_0}{2}$$
    The signal-to-noise ratio (SNR) is often expressed in terms of energy per bit ($E_b$) and noise power spectral density ($\mathcal{N}_0$).

*   **Textbook Reference:** The detailed analysis of the AWGN channel's effect on signal vectors is a cornerstone of **Proakis & Salehi (6th Ed.)** and **Haykin (Indian Adaptation, 4th Ed.)**. They clearly explain how the PSD of noise translates to variances of the noise vector components.

---

#### 2.5. Decision Regions

In the receiver, the goal is to determine which of the $M$ possible transmitted signals was sent, given the received vector $\mathbf{r}$. This is done by partitioning the signal space into decision regions.

*   **Optimum Receiver (Maximum Likelihood):** The receiver chooses the signal $s_i(t)$ that is closest to the received vector $\mathbf{r}$ in the Euclidean sense. This is equivalent to finding the signal point in the constellation that minimizes the distance $||\mathbf{r} - \mathbf{s}_i||$.

*   **Decision Regions:** The signal space is divided into $M$ regions, $R_1, R_2, \dots, R_M$. The received vector $\mathbf{r}$ falls into region $R_i$ if the corresponding transmitted signal was $s_i(t)$.
    Mathematically, $\mathbf{r} \in R_i$ if:
    $$||\mathbf{r} - \mathbf{s}_i||^2 \leq ||\mathbf{r} - \mathbf{s}_j||^2 \quad \text{for all } j \neq i$$

*   **Geometric Interpretation:** The boundaries of these decision regions are defined by the perpendicular bisectors of the lines connecting pairs of signal points in the constellation.
    *   For two signals $s_i$ and $s_j$, the boundary is the set of points $\mathbf{r}$ such that $||\mathbf{r} - \mathbf{s}_i||^2 = ||\mathbf{r} - \mathbf{s}_j||^2$.
    *   If $N=2$, these are lines in a 2D plane. If $N=3$, these are planes in a 3D space. In higher dimensions, they are hyperplanes.

*   **Minimum Distance:** The error probability is minimized when the minimum distance between any two signal points in the constellation is maximized. This is known as the **minimum Euclidean distance** ($d_{min}$).
    $$d_{min} = \min_{i \neq j} ||\mathbf{s}_i - \mathbf{s}_j||$$

*   **Textbook Reference:** The concept of decision regions and their formation based on minimum distance is a core topic in **Taub & Schilling (4th Ed.)** and **Stark (1st Ed.)**, particularly when discussing digital receiver design.

---

### 3. Examples

#### 3.1. Example: BPSK Signal Constellation

*   **Signals:**
    *   $s_1(t) = \sqrt{E_b} p(t)$ for symbol '0'
    *   $s_2(t) = -\sqrt{E_b} p(t)$ for symbol '1'
    where $p(t)$ is a unit energy pulse over the symbol duration $T$, i.e., $\int_0^T p^2(t) dt = 1$.
*   **Basis Function:** We can use $p(t)$ as our single basis function: $\phi_1(t) = p(t)$.
*   **Signal Space:** 1-dimensional space ($N=1$).
*   **Signal Vectors:**
    *   $\mathbf{s}_1 = [\sqrt{E_b}]$
    *   $\mathbf{s}_2 = [-\sqrt{E_b}]$
*   **Signal Constellation:** Two points on a line at coordinates $\sqrt{E_b}$ and $-\sqrt{E_b}$.
*   **Distance:** $d_{12} = ||\mathbf{s}_1 - \mathbf{s}_2|| = |\sqrt{E_b} - (-\sqrt{E_b})| = |2\sqrt{E_b}| = 2\sqrt{E_b}$.
*   **Decision Regions:** The received signal is $r(t)$. In the signal space, this is represented by $r_1 = \int_0^T r(t) p(t) dt$.
    The decision rule is:
    *   If $r_1 > 0$, decide $s_1(t)$ was sent.
    *   If $r_1 < 0$, decide $s_2(t)$ was sent.
    The decision boundary is at $r_1 = 0$. This is the perpendicular bisector of the line segment connecting $\mathbf{s}_1$ and $\mathbf{s}_2$.

#### 3.2. Example: Orthogonal Basis for Two Amplitude Levels

Consider two signals $s_1(t)$ and $s_2(t)$ over an interval $[0, T]$.

*   $s_1(t) = A_1$ for $0 \leq t \leq T/2$ and $0$ for $T/2 < t \leq T$.
*   $s_2(t) = A_2$ for $0 \leq t \leq T/2$ and $0$ for $T/2 < t \leq T$.

These are scalar multiples of the same function, so they lie in a 1-dimensional space.
Let $\phi_1(t) = \sqrt{2/T} \cdot \begin{cases} 1 & 0 \leq t \leq T/2 \\ 0 & T/2 < t \leq T \end{cases}$. This is a unit-energy pulse.
*   $s_1(t) = A_1 \frac{\sqrt{T/2}}{\sqrt{T/2}} \cdot \begin{cases} 1 & 0 \leq t \leq T/2 \\ 0 & T/2 < t \leq T \end{cases} = A_1 \sqrt{T/2} \phi_1(t)$
*   $s_2(t) = A_2 \sqrt{T/2} \phi_1(t)$

The signal vectors are $\mathbf{s}_1 = [A_1 \sqrt{T/2}]$ and $\mathbf{s}_2 = [A_2 \sqrt{T/2}]$.

Now consider signals that are not simply scaled versions:

*   $s_1(t) = A$ for $0 \leq t \leq T/2$, $0$ otherwise.
*   $s_2(t) = 0$ for $0 \leq t \leq T/2$, $B$ for $T/2 < t \leq T$.

Let's apply Gram-Schmidt:
1.  **Basis 1:** $\int_0^T s_1^2(t) dt = \int_0^{T/2} A^2 dt = A^2 (T/2)$.
    $\phi_1(t) = \frac{s_1(t)}{\sqrt{A^2 T/2}} = \frac{1}{\sqrt{A^2 T/2}} \cdot \begin{cases} A & 0 \leq t \leq T/2 \\ 0 & T/2 < t \leq T \end{cases} = \sqrt{2/T} \cdot \begin{cases} 1 & 0 \leq t \leq T/2 \\ 0 & T/2 < t \leq T \end{cases}$.
    The first coefficient for $s_1(t)$ is $s_{11} = \sqrt{A^2 T/2} = A \sqrt{T/2}$.
    So, $\mathbf{s}_1 = [A \sqrt{T/2}]$.

2.  **Basis 2:** For $s_2(t)$:
    $s_{21} = \int_0^T s_2(t) \phi_1(t) dt = \int_0^{T/2} 0 \cdot \phi_1(t) dt = 0$.
    $s_2'(t) = s_2(t) - s_{21} \phi_1(t) = s_2(t) - 0 \cdot \phi_1(t) = s_2(t)$.
    Now, find the energy of $s_2'(t)$: $\int_0^T (s_2'(t))^2 dt = \int_{T/2}^T B^2 dt = B^2 (T/2)$.
    $\phi_2(t) = \frac{s_2'(t)}{\sqrt{B^2 T/2}} = \frac{1}{\sqrt{B^2 T/2}} \cdot \begin{cases} 0 & 0 \leq t \leq T/2 \\ B & T/2 < t \leq T \end{cases} = \sqrt{2/T} \cdot \begin{cases} 0 & 0 \leq t \leq T/2 \\ 1 & T/2 < t \leq T \end{cases}$.
    The second coefficient for $s_2(t)$ is $s_{22} = \sqrt{B^2 T/2} = B \sqrt{T/2}$.
    So, $\mathbf{s}_2 = [0, B \sqrt{T/2}]$.

The signal space is 2-dimensional, with basis functions $\phi_1(t)$ and $\phi_2(t)$. The signal constellation points are $(A\sqrt{T/2}, 0)$ and $(0, B\sqrt{T/2})$ in this 2D space.

---

### 4. Important Points to Remember

*   **Signal Space is Geometric:** Visualizing signals as vectors in a multi-dimensional space simplifies analysis.
*   **Basis Functions Define Dimension:** The number of linearly independent basis functions determines the dimensionality of the signal space.
*   **Orthonormality Simplifies Calculations:** Using an orthonormal basis simplifies the calculation of signal coefficients and the analysis of noise.
*   **Gram-Schmidt for Basis Construction:** This procedure is essential when the given signals are not already orthogonal.
*   **Constellation Points:** Each transmitted symbol corresponds to a point (vector) in the signal space.
*   **Distance and Errors:** Larger distances between constellation points lead to lower error probabilities in the presence of noise.
*   **AWGN Adds Noise Vectors:** Noise in the AWGN channel manifests as additive noise vectors with Gaussian components.
*   **Decision Regions Optimize Detection:** The signal space is partitioned to facilitate the optimal detection of transmitted symbols.

---

### 5. Practice Questions and Exercises

**Question 1:**
Consider the following two signals:
$s_1(t) = \sqrt{\frac{2}{T}} \cos\left(\frac{\pi t}{T}\right)$ for $0 \leq t \leq T$
$s_2(t) = -\sqrt{\frac{2}{T}} \cos\left(\frac{\pi t}{T}\right)$ for $0 \leq t \leq T$

(a) Do these signals require an orthonormal basis? If so, what is the basis function?
(b) Represent these signals as vectors in the signal space.
(c) Calculate the Euclidean distance between these two signal vectors.
(d) If these signals are transmitted over an AWGN channel, and the received vector is $\mathbf{r} = [r_1]$, what is the decision rule to distinguish between $s_1(t)$ and $s_2(t)$?

**Answer 1:**
(a) Yes, these signals are antipodal and can be represented by a single basis function. The basis function is $\phi_1(t) = \sqrt{\frac{2}{T}} \cos\left(\frac{\pi t}{T}\right)$ for $0 \leq t \leq T$. This function has unit energy over $[0, T]$.
(b) The energy of $s_1(t)$ is $\int_0^T s_1^2(t) dt = \int_0^T \frac{2}{T} \cos^2\left(\frac{\pi t}{T}\right) dt = \frac{2}{T} \left[\frac{t}{2} + \frac{1}{2}\frac{T}{\pi}\sin\left(\frac{2\pi t}{T}\right)\right]_0^T = \frac{2}{T} \left[\frac{T}{2}\right] = 1$.
So, $\phi_1(t)$ is indeed a unit energy pulse.
$s_1(t) = 1 \cdot \phi_1(t)$, so $\mathbf{s}_1 = [1]$.
$s_2(t) = -1 \cdot \phi_1(t)$, so $\mathbf{s}_2 = [-1]$.

(c) The Euclidean distance is $d_{12} = ||\mathbf{s}_1 - \mathbf{s}_2|| = |1 - (-1)| = |2| = 2$.

(d) The received vector is $\mathbf{r} = [r_1]$, where $r_1 = \int_0^T r(t) \phi_1(t) dt$.
The decision rule is based on which signal vector is closer to $\mathbf{r}$:
*   If $|r_1 - 1|^2 < |r_1 - (-1)|^2$, decide $s_1(t)$ was sent.
*   If $|r_1 + 1|^2 < |r_1 - 1|^2$, decide $s_2(t)$ was sent.
Simplifying the inequality $|r_1 + 1|^2 < |r_1 - 1|^2$:
$(r_1+1)^2 < (r_1-1)^2$
$r_1^2 + 2r_1 + 1 < r_1^2 - 2r_1 + 1$
$4r_1 < 0 \implies r_1 < 0$.
So, the decision rule is:
*   If $r_1 > 0$, decide $s_1(t)$ was transmitted.
*   If $r_1 < 0$, decide $s_2(t)$ was transmitted.
If $r_1 = 0$, an arbitrary decision can be made (e.g., error).

---

**Question 2:**
Apply the Gram-Schmidt orthogonalization procedure to the following set of signals:
$x_1(t) = \begin{cases} 1 & 0 \leq t \leq T/2 \\ 0 & T/2 < t \leq T \end{cases}$
$x_2(t) = \begin{cases} 1 & T/4 \leq t \leq 3T/4 \\ 0 & \text{otherwise} \end{cases}$

(a) Determine the minimum number of basis functions required to represent this set of signals.
(b) Find an orthonormal basis $\{\phi_1(t), \phi_2(t)\}$ for these signals.
(c) Represent $x_1(t)$ and $x_2(t)$ as vectors in terms of this basis.

**Answer 2:**
(a) Both signals are non-zero over segments of time. $x_1(t)$ is non-zero over $[0, T/2]$ and $x_2(t)$ is non-zero over $[T/4, 3T/4]$. The union of these intervals is $[0, 3T/4]$. Therefore, at least two basis functions will be needed to represent these signals accurately. The signals are linearly independent, so we expect a 2-dimensional signal space.

(b) **Step 1: Find $\phi_1(t)$ from $x_1(t)$**
Energy of $x_1(t)$: $E_1 = \int_0^T x_1^2(t) dt = \int_0^{T/2} 1^2 dt = T/2$.
$\phi_1(t) = \frac{x_1(t)}{\sqrt{E_1}} = \frac{1}{\sqrt{T/2}} \begin{cases} 1 & 0 \leq t \leq T/2 \\ 0 & T/2 < t \leq T \end{cases} = \sqrt{\frac{2}{T}} \begin{cases} 1 & 0 \leq t \leq T/2 \\ 0 & T/2 < t \leq T \end{cases}$.

**Step 2: Find $\phi_2(t)$ from $x_2(t)$**
First, find the projection of $x_2(t)$ onto $\phi_1(t)$:
$x_{21} = \int_0^T x_2(t) \phi_1(t) dt = \int_{T/4}^{3T/4} x_2(t) \phi_1(t) dt$
In the interval $[T/4, T/2]$, $x_2(t)=1$ and $\phi_1(t) = \sqrt{2/T}$.
In the interval $(T/2, 3T/4]$, $x_2(t)=1$ and $\phi_1(t) = 0$.
$x_{21} = \int_{T/4}^{T/2} 1 \cdot \sqrt{\frac{2}{T}} dt + \int_{T/2}^{3T/4} 1 \cdot 0 dt = \sqrt{\frac{2}{T}} [t]_{T/4}^{T/2} = \sqrt{\frac{2}{T}} (\frac{T}{2} - \frac{T}{4}) = \sqrt{\frac{2}{T}} \frac{T}{4} = \frac{\sqrt{2T}}{4} = \sqrt{\frac{T}{8}}$.

Now, construct the orthogonal component $x_2'(t)$:
$x_2'(t) = x_2(t) - x_{21} \phi_1(t)$
$x_2'(t) = \begin{cases} 1 & T/4 \leq t \leq 3T/4 \\ 0 & \text{otherwise} \end{cases} - \sqrt{\frac{T}{8}} \sqrt{\frac{2}{T}} \begin{cases} 1 & 0 \leq t \leq T/2 \\ 0 & T/2 < t \leq T \end{cases}$
$x_2'(t) = \begin{cases} 1 & T/4 \leq t \leq 3T/4 \\ 0 & \text{otherwise} \end{cases} - \begin{cases} 1/2 & 0 \leq t \leq T/2 \\ 0 & T/2 < t \leq T \end{cases}$

Let's evaluate $x_2'(t)$ in different intervals:
*   $0 \leq t < T/4$: $x_2'(t) = 0 - 0 = 0$.
*   $T/4 \leq t \leq T/2$: $x_2'(t) = 1 - 1/2 = 1/2$.
*   $T/2 < t \leq 3T/4$: $x_2'(t) = 1 - 0 = 1$.
*   $3T/4 < t \leq T$: $x_2'(t) = 0 - 0 = 0$.

So, $x_2'(t) = \begin{cases} 1/2 & T/4 \leq t \leq T/2 \\ 1 & T/2 < t \leq 3T/4 \\ 0 & \text{otherwise} \end{cases}$.

Now, find the energy of $x_2'(t)$:
$E_2' = \int_0^T (x_2'(t))^2 dt = \int_{T/4}^{T/2} (1/2)^2 dt + \int_{T/2}^{3T/4} 1^2 dt$
$E_2' = \int_{T/4}^{T/2} (1/4) dt + \int_{T/2}^{3T/4} 1 dt$
$E_2' = (1/4) [t]_{T/4}^{T/2} + [t]_{T/2}^{3T/4}$
$E_2' = (1/4) (T/2 - T/4) + (3T/4 - T/2)$
$E_2' = (1/4) (T/4) + (T/4) = T/16 + T/4 = 5T/16$.

Normalize $x_2'(t)$ to get $\phi_2(t)$:
$\phi_2(t) = \frac{x_2'(t)}{\sqrt{E_2'}} = \frac{1}{\sqrt{5T/16}} \begin{cases} 1/2 & T/4 \leq t \leq T/2 \\ 1 & T/2 < t \leq 3T/4 \\ 0 & \text{otherwise} \end{cases}$
$\phi_2(t) = \sqrt{\frac{16}{5T}} \begin{cases} 1/2 & T/4 \leq t \leq T/2 \\ 1 & T/2 < t \leq 3T/4 \\ 0 & \text{otherwise} \end{cases}$

The orthonormal basis is $\{\phi_1(t), \phi_2(t)\}$.

(c) **Vector for $x_1(t)$:**
We already found the first coefficient: $x_{11} = \sqrt{T/2}$.
Since $x_1(t)$ has no component along $\phi_2(t)$ (because $x_1(t)=0$ for $t>T/2$), the second coefficient $x_{12} = 0$.
So, $\mathbf{x}_1 = [x_{11}, x_{12}] = [\sqrt{T/2}, 0]$.

**Vector for $x_2(t)$:**
We found the coefficients: $x_{21} = \sqrt{T/8}$ and the energy of the orthogonal component $E_2'$, from which we defined $\phi_2$. The coefficient $x_{22}$ is the scaling factor used to normalize $x_2'(t)$, which is $\sqrt{E_2'}$.
$x_{22} = \sqrt{5T/16}$.
So, $\mathbf{x}_2 = [x_{21}, x_{22}] = [\sqrt{T/8}, \sqrt{5T/16}]$.

---

### 6. Alignment with Course Outcomes

*   **CO1 (Illustrate principles of analog communication):** While this module focuses on digital data, the concept of signal representation and basis functions is fundamental to both analog and digital communications. Signal space is a unifying concept.
*   **CO2 (Explain basic concepts of digital communication):** This module directly addresses core concepts of digital communication, such as signal representation, waveform design, and the geometric interpretation of digital signals.
*   **CO3 (Analyse baseband transmission through AWGN):** Signal space provides the framework for analyzing how digital signals are affected by noise. The calculation of distances between signal points and the understanding of decision regions are crucial for this analysis. The AWGN model directly impacts the formation of noisy signal vectors.
*   **CO4 (Apply digital modulation techniques):** Understanding signal space is a prerequisite for understanding and designing digital modulation schemes. The signal constellation diagrams are direct visualizations of modulation techniques in signal space.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Further Reading and Textbook References

*   **Haykin & Moher (5th Ed.):** Chapters on signal representation, vector spaces, and optimum detection provide detailed explanations and mathematical rigor.
*   **Lathi & Ding (5th Ed.):** Similar to Haykin, this textbook offers comprehensive coverage of signal space representation and its application in digital communications.
*   **Proakis & Salehi (6th Ed.):** Excellent for understanding the probabilistic aspects of signal reception in the presence of noise within the signal space framework.
*   **Taub & Schilling (4th Ed.):** Provides a classic introduction to signal space and its geometric interpretations, particularly for simpler modulation schemes.
*   **Stark (1st Ed.):** Offers a modern perspective on digital communications, including signal space concepts and their use in performance analysis.

This topic is foundational for understanding the performance limitations and design choices in digital communication systems. By mastering signal space concepts, one can better appreciate the trade-offs between data rate, bandwidth, and error probability.