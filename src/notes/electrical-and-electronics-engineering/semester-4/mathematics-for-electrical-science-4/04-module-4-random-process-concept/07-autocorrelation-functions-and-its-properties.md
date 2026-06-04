---
title: "Autocorrelation functions and its properties"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 4: Random process concept"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35db6"
status: "completed"
scrapedAt: "2026-05-23T16:17:10.287Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE– 4
## Module 4: Random Process Concept
### Topic: Autocorrelation Functions and its Properties

**Course Outcome Alignment:** This topic directly contributes to **CO4**, which focuses on analyzing random processes by understanding their properties and utilizing autocorrelation functions in applications like signal processing and communication systems. The knowledge level expected is **K3 (Application)**.

**Learning Outcomes:**

*   Understand the definition and purpose of autocorrelation functions for random processes.
*   Identify and explain the fundamental properties of autocorrelation functions.
*   Apply the concept of autocorrelation to analyze the statistical properties of random signals.
*   Recognize the significance of autocorrelation in signal processing and communication system design.

---

### 1. Introduction to Autocorrelation Functions

**Key Concept:** The autocorrelation function measures the similarity between a random process and a delayed version of itself. It reveals how the values of a random process at different points in time are related.

**Definition:**
For a real, wide-sense stationary (WSS) random process $\{X(t)\}$, the autocorrelation function $R_X(\tau)$ is defined as:

$R_X(\tau) = E[X(t)X(t+\tau)]$

where:
*   $E[\cdot]$ denotes the expectation operator.
*   $t$ is a point in time.
*   $\tau$ is the time lag or delay.

**Purpose and Significance:**

*   **Measures Similarity:** Quantifies how strongly the process's value at time $t$ is correlated with its value at time $t+\tau$.
*   **Time-Domain Analysis:** Provides insights into the temporal structure and memory of a random process.
*   **Signal Characterization:** Helps in characterizing stationary signals by revealing their dependence on past values.
*   **Applications:** Crucial in signal processing (e.g., spectral analysis, filtering), communication systems (e.g., channel estimation, synchronization), and control systems.

**Wide-Sense Stationarity (WSS):**
A random process $\{X(t)\}$ is considered WSS if:

1.  $E[X(t)] = \mu_X$ (constant for all $t$).
2.  $E[X^2(t)] < \infty$ (finite mean square value).
3.  $E[X(t)X(t+\tau)] = R_X(\tau)$ (depends only on the time lag $\tau$, not on $t$).

*   **Note:** If a process is not WSS, the autocorrelation function would depend on both $t$ and $\tau$. For this module, we primarily focus on WSS processes.

---

### 2. Properties of Autocorrelation Functions

The autocorrelation function of a WSS random process possesses several important properties:

**Property 1: Non-negativity (Positive Semidefiniteness)**

*   **Statement:** $R_X(\tau) \ge 0$ for all $\tau$.
*   **Explanation:** The autocorrelation function is always non-negative. This is because $R_X(\tau)$ can be shown to be related to the variance of a linear combination of the process values.
*   **Reference:** Veerarajan (3rd ed., p. 490) and Devore (9th ed., Chapter 12 on Random Processes) discuss this implicitly through spectral density. Papoulis (4th ed., p. 313) explicitly proves this as a property.

**Property 2: Maximum at Zero Lag**

*   **Statement:** $R_X(\tau) \le R_X(0)$ for all $\tau$.
*   **Explanation:** The highest similarity between a process and its delayed version occurs when the delay is zero ($\tau = 0$), i.e., when comparing the process with itself.
*   **Derivation:**
    $R_X(0) = E[X(t)X(t+0)] = E[X^2(t)] = \mu_X^2 + \sigma_X^2$
    Consider the variance of $X(t+\tau) - X(t)$:
    $Var[X(t+\tau) - X(t)] = E[(X(t+\tau) - X(t))^2] \ge 0$
    $E[X^2(t+\tau) - 2X(t+\tau)X(t) + X^2(t)] \ge 0$
    Since the process is WSS, $E[X^2(t+\tau)] = E[X^2(t)] = R_X(0)$.
    $R_X(0) - 2E[X(t)X(t+\tau)] + R_X(0) \ge 0$
    $2R_X(0) - 2R_X(\tau) \ge 0$
    $R_X(0) \ge R_X(\tau)$
*   **Important Point:** $R_X(\tau) = R_X(0)$ only when $\tau = 0$ (unless the process is a constant).

**Property 3: Even Function Symmetry**

*   **Statement:** $R_X(\tau) = R_X(-\tau)$ for all $\tau$.
*   **Explanation:** The correlation between $X(t)$ and $X(t+\tau)$ is the same as the correlation between $X(t)$ and $X(t-\tau)$. This means the similarity depends on the *magnitude* of the time difference, not its direction.
*   **Derivation:**
    $R_X(-\tau) = E[X(t)X(t-\tau)]$
    Let $u = t - \tau$, so $t = u + \tau$.
    $R_X(-\tau) = E[X(u+\tau)X(u)]$
    Since the process is WSS, this expectation depends only on the lag, which is $\tau$. So, $E[X(u+\tau)X(u)] = R_X(\tau)$.
    Therefore, $R_X(-\tau) = R_X(\tau)$.

**Property 4: Relationship with Variance**

*   **Statement:** $R_X(0) = E[X^2(t)] = \mu_X^2 + \sigma_X^2$.
*   **Explanation:** The autocorrelation at zero lag is equal to the mean square value of the process. If the process has zero mean ($\mu_X = 0$), then $R_X(0) = \sigma_X^2$, which is the variance.

**Property 5: Boundedness**

*   **Statement:** $|R_X(\tau)| \le R_X(0)$.
*   **Explanation:** This is a more general statement of Property 2. The absolute value of the autocorrelation at any lag is less than or equal to its value at zero lag.

**Property 6: Correlation and Independence**

*   **Statement:** If $\tau \to \infty$, and the process is such that values at distant times become uncorrelated, then $R_X(\tau) \to \mu_X^2$.
*   **Explanation:** For a WSS process, as the time lag $\tau$ becomes very large, the values $X(t)$ and $X(t+\tau)$ become increasingly independent. If $X(t)$ and $X(t+\tau)$ are uncorrelated, then $E[X(t)X(t+\tau)] = E[X(t)]E[X(t+\tau)]$. Since the process is WSS, $E[X(t)] = E[X(t+\tau)] = \mu_X$. Thus, $R_X(\tau) \to \mu_X^2$.
*   **Special Case:** If the process has zero mean ($\mu_X = 0$), then $R_X(\tau) \to 0$ as $\tau \to \infty$.

**Property 7: Relationship with Power Spectral Density (PSD)**

*   **Statement:** The autocorrelation function and the power spectral density (PSD) are Fourier transform pairs (Wiener-Khinchine Theorem).
*   **Explanation:** This is a fundamental theorem in random process theory. The PSD, $S_X(f)$, describes how the power of a random process is distributed over different frequencies.
    *   $S_X(f) = \mathcal{F}\{R_X(\tau)\}$ (Fourier Transform of Autocorrelation)
    *   $R_X(\tau) = \mathcal{F}^{-1}\{S_X(f)\}$ (Inverse Fourier Transform of PSD)
*   **Significance:** Allows for a transition between the time domain (autocorrelation) and the frequency domain (PSD), providing complementary views of the random process. This is extensively covered in many signal processing contexts.
*   **Reference:** Veerarajan (3rd ed., Chapter 12, p. 491 onwards) provides a detailed treatment of this theorem. Papoulis (4th ed., Chapter 10) also covers this comprehensively.

---

### 3. Examples of Autocorrelation Functions

Let's consider some common random processes and their autocorrelation functions.

**Example 1: White Noise Process**

*   **Description:** A random process with constant power spectral density over all frequencies. In the time domain, this implies that values at different time points are uncorrelated.
*   **Ideal White Noise (Discrete-time):** $X[n] = A \cdot \delta[n]$ (where $\delta[n]$ is the Kronecker delta). This is not a WSS process in the usual sense.
*   **Continuous-Time White Noise (Idealized):** Let $\{W(t)\}$ be an idealized white noise process with constant PSD $S_W(f) = \eta/2$.
    *   $R_W(\tau) = E[W(t)W(t+\tau)] = \frac{\eta}{2} \delta(\tau)$ (where $\delta(\tau)$ is the Dirac delta function).
    *   **Properties:**
        *   $R_W(0) = \infty$ (idealized).
        *   $R_W(\tau) = 0$ for $\tau \ne 0$.
        *   Even function: $R_W(\tau) = R_W(-\tau)$.
        *   Mean square value is infinite, violating WSS condition in strict sense. However, it's a useful approximation.
*   **Practical White Noise (Gaussian White Noise):** Often approximated by a process with a very small but non-zero bandwidth, such that its autocorrelation is a narrow pulse around $\tau = 0$. For example, $R_W(\tau) \approx A e^{-a|\tau|}$ for large $a$.

**Example 2: Sine Wave Process**

*   **Description:** A random process whose amplitude is a random variable, but the frequency and phase are fixed. Let $X(t) = A \cos(\omega_0 t + \Phi)$, where $A$ is a random variable, $\Phi$ is a uniformly distributed random variable in $[0, 2\pi]$, and $\omega_0$ is a constant. If we consider $A$ to be a constant, and $\Phi$ to be random, this is a WSS process.
*   **Autocorrelation:** $R_X(\tau) = E[X(t)X(t+\tau)]$
    $R_X(\tau) = E[A \cos(\omega_0 t + \Phi) \cdot A \cos(\omega_0 (t+\tau) + \Phi)]$
    $R_X(\tau) = A^2 E[\cos(\omega_0 t + \Phi) \cos(\omega_0 t + \omega_0 \tau + \Phi)]$
    Using the identity $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$:
    $R_X(\tau) = A^2 E[\frac{1}{2} \{\cos(-\omega_0 \tau) + \cos(2\omega_0 t + \omega_0 \tau + 2\Phi)\}]$
    $R_X(\tau) = \frac{A^2}{2} \{\cos(\omega_0 \tau) + E[\cos(2\omega_0 t + \omega_0 \tau + 2\Phi)]\}$
    Since $\Phi$ is uniform on $[0, 2\pi]$, $E[\cos(\theta + 2\Phi)] = 0$.
    So, $R_X(\tau) = \frac{A^2}{2} \cos(\omega_0 \tau)$.
*   **Properties:**
    *   $R_X(0) = \frac{A^2}{2}$ (This is $E[X^2(t)]$ if $A$ is constant).
    *   Even function: $R_X(\tau) = R_X(-\tau)$.
    *   Periodic with period $2\pi/\omega_0$.

**Example 3: Random Walk (Wiener Process)**

*   **Description:** A process where the increment over a small time interval is a random variable. A continuous-time Wiener process $W(t)$ is a WSS process if we consider its increments.
*   **Autocorrelation for Wiener Process:** $R_W(\tau) = E[W(t)W(t+\tau)]$. If $W(0)=0$, then $E[W(t)] = 0$.
    $R_W(\tau) = E[(W(t+\tau) - W(t) + W(t))W(t+\tau)]$
    $R_W(\tau) = E[(W(t+\tau) - W(t))W(t+\tau)] + E[W(t)W(t+\tau)]$
    Let $\Delta W = W(t+\tau) - W(t)$. If $\tau$ is small, $\Delta W \approx N(0, \sigma^2 \tau)$.
    $R_W(\tau) = E[\Delta W \cdot W(t+\tau)] + E[W(t)W(t+\tau)]$
    For a Wiener process, $E[W(t)]=0$. The increments are independent of the past.
    $R_W(\tau) = E[W(t)]E[W(t+\tau)] = 0 \cdot 0 = 0$ if $\tau \neq 0$ and $t$ and $t+\tau$ are distinct.
    *   **Correction/Clarification:** The autocorrelation for a standard Wiener process (with variance proportional to time) is $R_W(t_1, t_2) = \min(t_1, t_2) \sigma^2$. This is not WSS. However, if we consider the *derivative* of a Wiener process (white noise), its autocorrelation is a delta function as seen in Example 1.

**Example 4: Exponentially Decaying Autocorrelation**

*   **Description:** Many physical systems, when excited by noise, exhibit an autocorrelation that decays exponentially with time.
*   **Function:** $R_X(\tau) = P e^{-a|\tau|}$, where $P$ is the power (variance if mean is zero) and $a > 0$ is a decay constant.
*   **Properties:**
    *   $R_X(0) = P$.
    *   Even function: $R_X(\tau) = R_X(-\tau)$.
    *   Decays to 0 as $|\tau| \to \infty$.
    *   This is the autocorrelation of an OU (Ornstein-Uhlenbeck) process with appropriate scaling.

---

### 4. Applications in Signal Processing and Communications

**1. Spectral Analysis:**
The Power Spectral Density (PSD), which is the Fourier Transform of the autocorrelation function, is fundamental for understanding the frequency content of a random signal.
*   **Example:** Analyzing the frequency components of noise in an audio signal or the bandwidth of a communication signal.

**2. System Identification and Characterization:**
The autocorrelation of the output of a Linear Time-Invariant (LTI) system driven by a known input (or noise) can be used to infer properties of the system.
*   If the input is white noise, the output's autocorrelation directly reflects the impulse response of the system.

**3. Filtering:**
The autocorrelation function is essential for designing optimal filters, such as the Wiener filter.
*   The Wiener filter minimizes the mean squared error between the desired signal and the estimated signal by using the autocorrelation of the signal and the noise.

**4. Synchronization:**
In communication systems, the autocorrelation of a received signal (often a modulated carrier or a unique preamble) is used to detect the presence of the signal and determine its timing.
*   A sharp peak in the autocorrelation function at a specific lag indicates a high degree of similarity, useful for aligning transmitter and receiver.

**5. Modulation and Demodulation:**
Understanding the autocorrelation of modulated signals helps in designing effective demodulation schemes.

**6. Channel Estimation:**
In wireless communications, the autocorrelation of pilot signals or the channel's impulse response is used to estimate the characteristics of the communication channel.

---

### 5. Practice Questions and Exercises

**Question 1:**
Let $X(t)$ be a WSS random process with autocorrelation function $R_X(\tau) = 10 e^{-2|\tau|}$.
a) What is the mean square value of the process?
b) Is the process even or odd?
c) What is the correlation at a lag of $\tau = 0.5$?
d) What is the limiting value of the autocorrelation as $\tau \to \infty$?

**Answer 1:**
a) The mean square value is $R_X(0) = 10 e^{-2|0|} = 10$.
b) The process is even, as $R_X(\tau) = 10 e^{-2|\tau|} = 10 e^{-2|-\tau|} = R_X(-\tau)$.
c) $R_X(0.5) = 10 e^{-2|0.5|} = 10 e^{-1} \approx 3.68$.
d) As $\tau \to \infty$, $|\tau| \to \infty$, so $e^{-2|\tau|} \to 0$. Thus, $\lim_{\tau \to \infty} R_X(\tau) = 0$. This implies the process has a mean of zero.

**Question 2:**
Consider a random process $Y(t) = X(t) + N(t)$, where $X(t)$ and $N(t)$ are independent WSS random processes with autocorrelation functions $R_X(\tau) = P_X e^{-a|\tau|}$ and $R_N(\tau) = P_N e^{-b|\tau|}$, respectively. Assume $E[X(t)] = 0$ and $E[N(t)] = 0$.
a) Find the autocorrelation function of $Y(t)$, $R_Y(\tau)$.
b) What is the power of the process $Y(t)$?

**Answer 2:**
a) $R_Y(\tau) = E[Y(t)Y(t+\tau)] = E[(X(t)+N(t))(X(t+\tau)+N(t+\tau))]$
$R_Y(\tau) = E[X(t)X(t+\tau) + X(t)N(t+\tau) + N(t)X(t+\tau) + N(t)N(t+\tau)]$
Since $X(t)$ and $N(t)$ are independent, $E[X(t)N(t+\tau)] = E[X(t)]E[N(t+\tau)] = 0 \cdot 0 = 0$, and $E[N(t)X(t+\tau)] = E[N(t)]E[X(t+\tau)] = 0 \cdot 0 = 0$.
So, $R_Y(\tau) = E[X(t)X(t+\tau)] + E[N(t)N(t+\tau)] = R_X(\tau) + R_N(\tau)$.
$R_Y(\tau) = P_X e^{-a|\tau|} + P_N e^{-b|\tau|}$.

b) The power of the process $Y(t)$ is its mean square value, which is $R_Y(0)$.
$R_Y(0) = P_X e^{-a|0|} + P_N e^{-b|0|} = P_X + P_N$.
This is expected, as the power of the sum of independent zero-mean random processes is the sum of their powers.

**Question 3:**
Which of the following statements about the autocorrelation function $R_X(\tau)$ of a WSS random process $X(t)$ is FALSE?
a) $R_X(\tau) \ge 0$ for all $\tau$.
b) $R_X(\tau) = R_X(-\tau)$ for all $\tau$.
c) $R_X(\tau) \le R_X(0)$ for all $\tau$.
d) $R_X(\tau)$ is a periodic function if $X(t)$ is a periodic signal with a random phase.

**Answer 3:**
The false statement is **(d)**. While a periodic signal with a random phase *does* result in a periodic autocorrelation function (as seen in the sine wave example), the autocorrelation function itself is defined as $R_X(\tau)$, which is always an *even* function and non-negative. The periodicity is a specific characteristic derived from the signal's structure, not a general property of *all* autocorrelations. The other properties are fundamental to the definition of autocorrelation for WSS processes.

---

### 6. Important Points to Remember

*   **Definition:** $R_X(\tau) = E[X(t)X(t+\tau)]$ for WSS processes.
*   **Symmetry:** $R_X(\tau)$ is an **even** function ($R_X(\tau) = R_X(-\tau)$).
*   **Maximum:** $R_X(\tau)$ has its maximum value at $\tau=0$ ($R_X(\tau) \le R_X(0)$).
*   **Power:** $R_X(0)$ is the mean square value (power if mean is zero).
*   **Decay:** For many realistic processes, $R_X(\tau) \to E[X(t)]^2$ as $|\tau| \to \infty$. If the mean is zero, $R_X(\tau) \to 0$.
*   **Fourier Transform:** The autocorrelation function and the Power Spectral Density (PSD) are Fourier transform pairs (Wiener-Khinchine Theorem). This is a cornerstone for understanding signal frequency content.
*   **Applications:** Autocorrelation is key for analyzing signal similarity, filtering, synchronization, and system characterization.

---
