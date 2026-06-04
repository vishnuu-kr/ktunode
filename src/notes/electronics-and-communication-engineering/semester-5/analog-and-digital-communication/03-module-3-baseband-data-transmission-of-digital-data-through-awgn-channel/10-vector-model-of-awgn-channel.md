---
title: "Vector model of AWGN channel."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 3: Baseband data transmission of digital data through AWGN channel"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe913"
status: "completed"
scrapedAt: "2026-05-23T17:53:01.218Z"
---
# ANALOG AND DIGITAL COMMUNICATION - Module 3: Baseband Data Transmission through AWGN Channel

## Topic: Vector Model of AWGN Channel

**Learning Outcomes:** This module aims to equip students with a thorough understanding of baseband digital data transmission through Additive White Gaussian Noise (AWGN) channels, specifically focusing on the vector representation of such channels.

**Course Outcomes Alignment:**
*   **CO3: Analyse the baseband transmission of digital data through AWGN channel (Knowledge Level: K3)** - This entire topic directly addresses this outcome by providing the foundational tools for analyzing such systems.
*   **CO2: Explain the basic concepts of digital communication (Knowledge Level: K2)** - Understanding the AWGN channel is crucial for grasping basic digital communication principles.

---

### 1. Introduction to Baseband Digital Communication and Noise

Before delving into the vector model, it's essential to understand the context of baseband digital communication and the impact of noise.

*   **Baseband Transmission:** In baseband transmission, the digital data (represented as a sequence of pulses) is transmitted directly over the communication channel without modulation onto a carrier frequency. This is common in short-range communications and digital subscriber lines (DSLs).
*   **Digital Data Representation:** Digital data is typically represented as a sequence of symbols, where each symbol corresponds to a specific voltage level or pulse shape. For binary data, we have two symbols, often represented by $+A$ (for '1') and $-A$ (for '0'), or a pulse of duration $T_b$ and amplitude $A$ for '1' and zero amplitude for '0'.
*   **The Channel:** The communication channel is the medium through which the signal travels from the transmitter to the receiver. This can be a physical wire, optical fiber, or the atmosphere.
*   **Noise:** Noise is any unwanted signal that corrupts the transmitted signal, making it difficult for the receiver to accurately decode the original information.
    *   **Sources of Noise:** Thermal noise, shot noise, interference from other sources, etc.
    *   **Impact of Noise:** Noise can distort the signal's amplitude, phase, or timing, leading to errors in the received data (bit errors).

---

### 2. The Additive White Gaussian Noise (AWGN) Channel Model

The AWGN channel is a fundamental model used to characterize the behavior of many communication channels, especially in the context of digital communication. It simplifies the complex realities of a real-world channel by making specific assumptions about the noise.

*   **"Additive":** This means that the noise is simply added to the transmitted signal. The received signal $r(t)$ is the sum of the transmitted signal $s(t)$ and the noise $n(t)$.
    $$r(t) = s(t) + n(t)$$
    *(Reference: Haykin & Moher, 5th Ed., Chapter 2)*
*   **"White":** This refers to the spectral characteristics of the noise. "White noise" has a uniform power spectral density (PSD) over all frequencies. This implies that the noise components at different frequencies are uncorrelated.
    $$S_n(f) = \frac{N_0}{2} \quad \text{for all } f$$
    where $N_0/2$ is the constant power spectral density.
    *(Reference: Lathi & Ding, 5th Ed., Chapter 3)*
*   **"Gaussian":** This means that the noise is characterized by a Gaussian (normal) probability distribution function (PDF). For AWGN, the instantaneous amplitude of the noise at any point in time is a random variable with a Gaussian distribution.
    $$f_n(n) = \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{n^2}{2\sigma^2}}$$
    where $\sigma^2$ is the variance of the noise.
    *(Reference: Haykin & Moher, 5th Ed., Chapter 2)*

**Important Point:** While real-world noise might not be perfectly white and Gaussian, the AWGN model provides a robust and analytically tractable framework for understanding the fundamental performance limits of digital communication systems.

---

### 3. Vector Model of the AWGN Channel

To analyze the performance of digital communication systems, especially those employing techniques like optimum detection, it's beneficial to represent the signals and noise in a vector space. This approach allows us to use tools from linear algebra and probability theory more effectively.

**3.1 Signal Representation in a Vector Space:**

*   **Gram-Schmidt Orthogonalization Procedure:** This procedure is used to convert a set of $M$ linearly independent basis functions (or signals) $\{\phi_i(t)\}$ into an orthonormal set $\{\psi_i(t)\}$.
    *   **Basis Functions:** In digital communication, transmitted pulses can be represented as linear combinations of a set of basis functions. For efficient representation, these basis functions should be orthonormal.
    *   **Orthonormal Set:** A set of functions $\{\psi_i(t)\}$ is orthonormal over a time interval $[0, T]$ if:
        *   **Orthogonality:** $\int_0^T \psi_i(t) \psi_j(t) dt = 0$ for $i \neq j$
        *   **Normalization:** $\int_0^T \psi_i^2(t) dt = 1$ for all $i$
    *   **Dimensionality:** If we can represent $M$ distinct transmitted signals $s_m(t)$ using $N$ orthonormal basis functions, then the signal space has dimension $N$.
        $$s_m(t) = \sum_{i=1}^N s_{m,i} \psi_i(t) \quad \text{for } m=1, 2, \ldots, M$$
        where $s_{m,i} = \int_0^T s_m(t) \psi_i(t) dt$ are the coefficients of the $i$-th signal.
    *(Reference: Proakis & Salehi, Digital Communications, 6th Ed., Chapter 3)*

*   **Vector Representation of Signals:** Each transmitted signal $s_m(t)$ can be represented as an $N$-dimensional vector $\mathbf{s}_m$ in this signal space:
    $$\mathbf{s}_m = [s_{m,1}, s_{m,2}, \ldots, s_{m,N}]$$

**Example:** Consider binary antipodal signaling where two signals are transmitted:
    *   $s_1(t) = \sqrt{E_b} \psi(t)$ for a '1'
    *   $s_2(t) = -\sqrt{E_b} \psi(t)$ for a '0'
    where $E_b$ is the energy per bit and $\psi(t)$ is a single orthonormal basis function over the symbol duration $T_b$.
    In this case, the signal space dimension $N=1$.
    *   $\mathbf{s}_1 = [\sqrt{E_b}]$
    *   $\mathbf{s}_2 = [-\sqrt{E_b}]$

**Example:** Consider binary orthogonal signaling where two signals are transmitted over $2T_b$:
    *   $s_1(t) = \sqrt{E_b} \psi_1(t)$ for a '1', for $0 \le t \le 2T_b$
    *   $s_2(t) = \sqrt{E_b} \psi_2(t)$ for a '0', for $0 \le t \le 2T_b$
    where $\psi_1(t)$ and $\psi_2(t)$ are orthonormal over $[0, 2T_b]$ ($\int_0^{2T_b} \psi_1(t)\psi_2(t) dt = 0$ and $\int_0^{2T_b} \psi_i^2(t) dt = 1$).
    In this case, the signal space dimension $N=2$.
    *   $\mathbf{s}_1 = [\sqrt{E_b}, 0]$
    *   $\mathbf{s}_2 = [0, \sqrt{E_b}]$

**3.2 The AWGN Channel in Vector Form:**

The received signal $r(t)$ can be expressed in terms of the basis functions:
$$r(t) = s(t) + n(t)$$
$$r(t) = \sum_{i=1}^N s_i \psi_i(t) + n(t)$$
where $s(t)$ is one of the transmitted signals $s_m(t)$, and $n(t)$ is the additive white Gaussian noise.

To obtain the vector representation of the received signal, we project $r(t)$ onto each of the orthonormal basis functions:
$$r_i = \int_0^T r(t) \psi_i(t) dt$$
$$r_i = \int_0^T (s(t) + n(t)) \psi_i(t) dt$$
$$r_i = \int_0^T s(t) \psi_i(t) dt + \int_0^T n(t) \psi_i(t) dt$$
$$r_i = s_i + n_i \quad \text{for } i=1, 2, \ldots, N$$
Here, $s_i$ are the known coefficients of the transmitted signal $s(t)$, and $n_i$ are the coefficients of the noise $n(t)$.

The received signal is thus represented by a vector $\mathbf{r}$:
$$\mathbf{r} = [r_1, r_2, \ldots, r_N]$$
And this vector can be written as:
$$\mathbf{r} = \mathbf{s} + \mathbf{n}$$
where $\mathbf{s} = [s_1, s_2, \ldots, s_N]$ is the vector representing the transmitted signal, and $\mathbf{n} = [n_1, n_2, \ldots, n_N]$ is the vector representing the noise components.

**Properties of the Noise Vector $\mathbf{n}$:**

Since the noise $n(t)$ is AWGN, the noise components $n_i$ obtained by projecting it onto the orthonormal basis functions have the following properties:

*   **Independence:** The noise components $n_i$ are statistically independent. This is a consequence of the white nature of the noise.
    *(Reference: Haykin & Moher, 5th Ed., Chapter 2)*
*   **Gaussian Distribution:** Each $n_i$ is a Gaussian random variable.
*   **Zero Mean:** The mean of each $n_i$ is zero: $E[n_i] = E[\int_0^T n(t) \psi_i(t) dt] = \int_0^T E[n(t)] \psi_i(t) dt = 0$.
*   **Variance:** The variance of each $n_i$ is the same.
    $$E[n_i^2] = E\left[\left(\int_0^T n(t) \psi_i(t) dt\right)^2\right]$$
    For AWGN with PSD $S_n(f) = N_0/2$, the variance of the projection $n_i$ is given by:
    $$E[n_i^2] = \sigma^2 = \int_0^T \int_0^T E[n(\tau)n(t)] \psi_i(\tau) \psi_i(t) d\tau dt$$
    The autocorrelation of white noise is $E[n(\tau)n(t)] = \frac{N_0}{2} \delta(\tau-t)$.
    $$E[n_i^2] = \int_0^T \int_0^T \frac{N_0}{2} \delta(\tau-t) \psi_i(\tau) \psi_i(t) d\tau dt$$
    $$E[n_i^2] = \int_0^T \frac{N_0}{2} \psi_i^2(t) dt$$
    Since $\psi_i(t)$ is normalized ($\int_0^T \psi_i^2(t) dt = 1$),
    $$E[n_i^2] = \frac{N_0}{2}$$
    Thus, $\sigma^2 = N_0/2$.

**The Noise Vector $\mathbf{n}$ is a Gaussian Random Vector with:**
*   Mean: $E[\mathbf{n}] = \mathbf{0}$
*   Covariance Matrix: $\mathbf{\Sigma}_{\mathbf{n}} = E[\mathbf{n} \mathbf{n}^T] = \frac{N_0}{2} \mathbf{I}_N$, where $\mathbf{I}_N$ is the $N \times N$ identity matrix. This indicates that the components are uncorrelated and have equal variance.

*(Reference: Lathi & Ding, 5th Ed., Chapter 3, discussing the properties of Gaussian noise)*
*(Reference: Haykin & Moher, 5th Ed., Chapter 2, for noise variance)*

**3.3 The Vector Model of the AWGN Channel:**

The AWGN channel can be modeled as a linear transformation followed by the addition of noise. In the vector space representation, this is quite straightforward:

*   **Transmitted Signal:** Represented by a vector $\mathbf{s}_m$ in an $N$-dimensional signal space.
*   **Channel Effect:** In the simplest baseband scenario with AWGN, the channel doesn't distort the signal itself, but rather corrupts it with noise. The "transformation" part is essentially an identity operation on the signal vector, and then noise is added.
*   **Received Signal:** Represented by a vector $\mathbf{r} = \mathbf{s}_m + \mathbf{n}$, where $\mathbf{n}$ is a vector of independent Gaussian random variables, each with zero mean and variance $N_0/2$.

**Key Takeaway:** The vector model of the AWGN channel allows us to view the received signal as a point in an $N$-dimensional Euclidean space, which is the transmitted signal's vector plus a noise vector whose components are independent Gaussian random variables. This representation is crucial for designing optimal receivers (e.g., Maximum Likelihood or Maximum A Posteriori detectors).

*(Reference: Proakis & Salehi, Digital Communications, 6th Ed., Chapter 3, for a detailed explanation of the vector channel model)*
*(Reference: Stark, Introduction to Digital Communications, Chapter 4, for an overview of channel models)*

---

### 4. Decision Regions and Performance Analysis

The vector model is fundamental to understanding how a receiver makes decisions about the transmitted symbol.

*   **Receiver Structure:** A typical coherent receiver for an $N$-dimensional signal space consists of $N$ correlators (or matched filters) followed by samplers, and then a decision device.
    *   The correlator $r_i$ computes the projection of the received signal $r(t)$ onto the $i$-th basis function $\psi_i(t)$.
    *   The decision device uses the vector $\mathbf{r} = [r_1, r_2, \ldots, r_N]$ to decide which of the $M$ possible transmitted signals was most likely sent.

*   **Decision Regions:** In an $N$-dimensional space, each transmitted signal vector $\mathbf{s}_m$ can be associated with a region called its "decision region" or "Voronoi region." The receiver decides that signal $\mathbf{s}_m$ was transmitted if the received vector $\mathbf{r}$ falls within the decision region $D_m$.
    *   These regions are typically defined by boundaries that are equidistant from the vectors of two adjacent signals.
    *   For an AWGN channel, the probability of error is minimized by choosing the decision region for signal $\mathbf{s}_m$ as the set of all vectors $\mathbf{r}$ such that the Euclidean distance between $\mathbf{r}$ and $\mathbf{s}_m$ is less than or equal to the distance between $\mathbf{r}$ and any other signal vector $\mathbf{s}_k$ ($k \neq m$). This is the Maximum Likelihood (ML) detection criterion.
        $$D_m = \{\mathbf{r} \mid ||\mathbf{r} - \mathbf{s}_m||^2 \le ||\mathbf{r} - \mathbf{s}_k||^2 \quad \forall k \neq m\}$$

*   **Probability of Error (Bit Error Rate - BER):** The performance of a digital communication system is often measured by its probability of error.
    *   In the vector space model, the probability of error for a specific signal $\mathbf{s}_m$ is the probability that the received vector $\mathbf{r}$ falls into a decision region $D_k$ where $k \neq m$.
    *   For Gaussian noise, the probability of error can be expressed in terms of the signal-to-noise ratio (SNR).
    *   A common metric used is the ratio of energy per bit ($E_b$) to the noise power spectral density ($N_0$), often denoted as $E_b/N_0$.

**Example: Binary Antipodal Signaling (NRZ)**
*   Signals: $s_1(t) = \sqrt{E_b}$ and $s_2(t) = -\sqrt{E_b}$ for $0 \le t \le T_b$.
*   Single basis function: $\psi(t) = \sqrt{1/T_b}$ for $0 \le t \le T_b$.
*   Signal space dimension $N=1$.
*   Transmitted vectors: $\mathbf{s}_1 = [\sqrt{E_b}]$ and $\mathbf{s}_2 = [-\sqrt{E_b}]$.
*   Received vector: $\mathbf{r} = [r_1]$.
*   $r_1 = s_1 + n_1 = \pm \sqrt{E_b} + n_1$, where $n_1$ is a Gaussian random variable with mean 0 and variance $\sigma^2 = N_0/2$.
*   Decision rule: If $r_1 > 0$, decide $s_1$ was sent. If $r_1 < 0$, decide $s_2$ was sent.
*   Probability of error: $P_e = Q(\sqrt{E_b/N_0})$, where $Q(x)$ is the Q-function.
    *(Reference: Haykin & Moher, 5th Ed., Chapter 3, for BER analysis of BPSK)*
    *(Reference: Lathi & Ding, 5th Ed., Chapter 4, for BER of various modulation schemes)*

**Example: Binary Orthogonal Signaling**
*   Signals: $s_1(t) = \sqrt{E_b} \psi_1(t)$ and $s_2(t) = \sqrt{E_b} \psi_2(t)$ for $0 \le t \le 2T_b$, where $\psi_1(t)$ and $\psi_2(t)$ are orthonormal.
*   Signal space dimension $N=2$.
*   Transmitted vectors: $\mathbf{s}_1 = [\sqrt{E_b}, 0]$ and $\mathbf{s}_2 = [0, \sqrt{E_b}]$.
*   Received vector: $\mathbf{r} = [r_1, r_2]$.
*   $r_1 = s_{1,1} + n_1 = \sqrt{E_b} + n_1$ (if $s_1$ sent) or $n_1$ (if $s_2$ sent).
*   $r_2 = s_{2,2} + n_2 = \sqrt{E_b} + n_2$ (if $s_2$ sent) or $n_2$ (if $s_1$ sent).
*   $n_1, n_2$ are independent Gaussian with mean 0 and variance $N_0/2$.
*   Decision rule (ML): Compare $r_1$ and $r_2$. If $r_1 > r_2$, decide $s_1$ was sent. If $r_2 > r_1$, decide $s_2$ was sent.
*   Probability of error: $P_e = Q(\sqrt{E_b/N_0})$. Note that binary orthogonal and antipodal signaling have the same BER for the same $E_b/N_0$.
    *(Reference: Proakis & Salehi, Digital Communications, 6th Ed., Chapter 3, for analysis of orthogonal signaling)*

---

### 5. Key Concepts and Important Points to Remember

*   **AWGN Channel:** A fundamental model where noise is added to the signal, the noise is white (uniform PSD), and the noise amplitude is Gaussian.
*   **Vector Space Representation:** Allows us to represent signals as vectors in an $N$-dimensional space defined by an orthonormal basis.
*   **Orthonormal Basis Functions:** Essential for constructing the vector space and ensuring efficient representation of signals. The Gram-Schmidt procedure helps create these.
*   **Signal Vectors:** Each unique transmitted symbol corresponds to a specific vector $\mathbf{s}_m$ in the signal space.
*   **Noise Vector:** The received signal is the transmitted signal vector plus a noise vector $\mathbf{n}$. The components of $\mathbf{n}$ are independent Gaussian random variables with mean 0 and variance $N_0/2$.
*   **Signal-to-Noise Ratio (SNR):** A critical parameter that determines system performance. In the vector model, it relates to the squared distance between signal vectors and the noise variance.
*   **Decision Regions:** The signal space is partitioned into decision regions, one for each transmitted signal, to aid in detection.
*   **Maximum Likelihood (ML) Detection:** The optimal detection strategy in an AWGN channel, which aims to minimize the probability of error by choosing the signal vector closest to the received vector.
*   **Probability of Error (BER):** Quantifies the performance of the system and is a function of the SNR and the modulation scheme.

---

### 6. Practice Questions and Exercises

**Question 1:**
Consider a binary communication system that uses Amplitude Shift Keying (ASK) with two signals:
$s_1(t) = \sqrt{E_b}$ for $0 \le t \le T_b$ (representing '1')
$s_2(t) = 0$ for $0 \le t \le T_b$ (representing '0')

The channel is an AWGN channel with power spectral density $N_0/2$.

**(a)** Represent these signals using an appropriate orthonormal basis function. What is the dimension of the signal space?
**(b)** Express the signal vectors $\mathbf{s}_1$ and $\mathbf{s}_2$.
**(c)** Describe the received vector $\mathbf{r}$ in this signal space. What are the properties of the noise vector components?
**(d)** What is the optimal decision rule for detecting the transmitted signal?

**Answer 1:**
**(a)** The signals are defined over the interval $[0, T_b]$. A single orthonormal basis function can be used:
$\psi(t) = \sqrt{1/T_b}$ for $0 \le t \le T_b$, and $\psi(t) = 0$ otherwise.
The dimension of the signal space is $N=1$.

**(b)** The signal vectors are:
$\mathbf{s}_1 = \int_0^{T_b} s_1(t) \psi(t) dt = \int_0^{T_b} \sqrt{E_b} \sqrt{1/T_b} dt = \sqrt{E_b/T_b} \int_0^{T_b} dt = \sqrt{E_b/T_b} \cdot T_b = \sqrt{E_b T_b}$
Since energy $E_b = \int_0^{T_b} s_1^2(t) dt = \int_0^{T_b} E_b dt = E_b T_b$, we have $\sqrt{E_b T_b} = \sqrt{E_b}$.
So, $\mathbf{s}_1 = [\sqrt{E_b}]$.

$\mathbf{s}_2 = \int_0^{T_b} s_2(t) \psi(t) dt = \int_0^{T_b} 0 \cdot \sqrt{1/T_b} dt = 0$
So, $\mathbf{s}_2 = [0]$.

**(c)** The received signal is $r(t) = s(t) + n(t)$. The received vector is obtained by projecting $r(t)$ onto $\psi(t)$:
$r_1 = \int_0^{T_b} r(t) \psi(t) dt = \int_0^{T_b} (s(t) + n(t)) \psi(t) dt = \int_0^{T_b} s(t) \psi(t) dt + \int_0^{T_b} n(t) \psi(t) dt$
$r_1 = s_{1,1} + n_1$, where $s_{1,1}$ is the coefficient of the transmitted signal, and $n_1$ is the noise component.
$\mathbf{r} = [r_1]$.
The noise component $n_1$ is a Gaussian random variable with mean $E[n_1] = 0$ and variance $\sigma^2 = N_0/2$.

**(d)** The optimal decision rule (ML detection) is to choose the signal whose vector is closest to the received vector.
We need to compare the distance between $\mathbf{r}$ and $\mathbf{s}_1$, and between $\mathbf{r}$ and $\mathbf{s}_2$.
$||\mathbf{r} - \mathbf{s}_1||^2 = (r_1 - \sqrt{E_b})^2$
$||\mathbf{r} - \mathbf{s}_2||^2 = (r_1 - 0)^2 = r_1^2$

We decide $\mathbf{s}_1$ was sent if $||\mathbf{r} - \mathbf{s}_1||^2 \le ||\mathbf{r} - \mathbf{s}_2||^2$:
$(r_1 - \sqrt{E_b})^2 \le r_1^2$
$r_1^2 - 2r_1\sqrt{E_b} + E_b \le r_1^2$
$-2r_1\sqrt{E_b} + E_b \le 0$
$E_b \le 2r_1\sqrt{E_b}$
$\sqrt{E_b} \le 2r_1$
$r_1 \ge \frac{\sqrt{E_b}}{2}$

Wait, let's recheck the distances. The distance is $d(\mathbf{r}, \mathbf{s}_m)$.
We want to choose $\mathbf{s}_m$ such that $d(\mathbf{r}, \mathbf{s}_m)$ is minimized.
Compare $|r_1 - \sqrt{E_b}|$ and $|r_1 - 0| = |r_1|$.

The decision boundary is where $|r_1 - \sqrt{E_b}| = |r_1|$.
This occurs when $r_1 - \sqrt{E_b} = -r_1$ (since $r_1$ is likely positive for s1 and negative for s2 if noise is small).
$2r_1 = \sqrt{E_b}$
$r_1 = \frac{\sqrt{E_b}}{2}$. This is not the standard threshold for ASK.

Let's rethink the ML criterion:
If $s_1(t) = \sqrt{E_b}$ and $s_2(t) = 0$, then:
$r_1 = \sqrt{E_b} + n_1$ (if '1' sent)
$r_1 = 0 + n_1$ (if '0' sent)
The decision rule is to choose the symbol whose mean value (plus noise) is closer to $r_1$.
This means comparing $r_1$ with the midpoint between the signal values, which is $(\sqrt{E_b} + 0)/2 = \sqrt{E_b}/2$.
So, if $r_1 > \sqrt{E_b}/2$, decide '1'. If $r_1 < \sqrt{E_b}/2$, decide '0'.

Let's verify this using the distance criterion again.
We choose $s_1$ if $|r_1 - \sqrt{E_b}|^2 \le |r_1 - 0|^2$.
$r_1^2 - 2r_1\sqrt{E_b} + E_b \le r_1^2$
$E_b \le 2r_1\sqrt{E_b}$
$r_1 \ge \sqrt{E_b}/2$.
So, the decision rule is: If $r_1 \ge \sqrt{E_b}/2$, decide '1'; otherwise, decide '0'.

**Question 2:**
What is the role of the Gram-Schmidt orthogonalization procedure in the context of the vector model of communication channels?

**Answer 2:**
The Gram-Schmidt procedure is used to convert a set of linearly independent signal waveforms into an orthonormal set of basis functions. These orthonormal basis functions form the dimensions of the signal space. By using an orthonormal basis, we simplify the mathematical representation of signals and noise in vector form, making analysis and design of receivers more straightforward. The number of basis functions required determines the dimensionality of the signal space, which is a key parameter in communication system design.

**Question 3:**
Explain why the noise components $n_i$ in the vector model of the AWGN channel are independent.

**Answer 3:**
The independence of the noise components $n_i$ stems from the "white" nature of the AWGN channel. White noise has a constant power spectral density, meaning that its components at different frequencies are uncorrelated. When we project this white noise onto a set of orthonormal basis functions $\psi_i(t)$ over a finite interval, the resulting coefficients $n_i = \int n(t)\psi_i(t) dt$ are also statistically independent. This property is a direct consequence of the fact that the autocorrelation of white noise is a Dirac delta function, indicating no correlation between noise samples at different time instances, and this property extends to the projections onto orthogonal functions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. References

*   **Communication Systems** by Simon Haykin and Michael Moher (Wiley, 5th Edition, 2020) - Chapters 2 and 3 are highly relevant for understanding noise models and digital communication fundamentals.
*   **Modern Digital and Analog Communication Systems** by B.P. Lathi and Zhi Ding (Oxford University Press, 5th Edition, 2018) - Chapters 3 and 4 provide a solid foundation for AWGN channels and basic digital modulation.
*   **Introduction to Analog and Digital Communication, An Indian adaptation** by Simon Haykin and Michael Moher (Wiley, 2nd Edition, 2022) - Similar content to the 5th edition, useful for contextual understanding.
*   **Digital Communications** by John G. Proakis and Masoud Salehi (McGraw-Hill Education, 6th Edition, 2020) - Chapters 3 and 4 are particularly relevant for detailed treatment of vector spaces, channel models, and optimal detection.
*   **Introduction to Digital Communications** by Wayne Stark (Cambridge University Press, 1st edition 2023) - Chapter 4 provides an excellent overview of channel models and their vector representations.

This concludes the study notes for the Vector Model of the AWGN Channel. Understanding this model is crucial for proceeding to more advanced topics in digital communication, such as specific modulation schemes and their performance analysis.