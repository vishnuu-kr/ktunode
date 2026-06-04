---
title: "Autocorrelation functions and its properties"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 4: Random process concept"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4da"
status: "completed"
scrapedAt: "2026-05-23T17:50:57.780Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 4: Random Process Concept

### Topic: Autocorrelation Functions and Its Properties

**Course Outcome Alignment:** This topic directly contributes to **CO4: Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems.** The knowledge level targeted is K3 (Applying).

### 1. Introduction to Autocorrelation Function

The autocorrelation function (ACF), often denoted as $R_X( \tau)$ or $R_{XX}( \tau)$, is a fundamental tool for analyzing the statistical properties of a wide-sense stationary (WSS) random process. It measures the similarity between the values of the random process at two different points in time, separated by a time lag $\tau$. In essence, it tells us how much a random process is correlated with a delayed version of itself.

**Key Concepts and Definitions:**

*   **Random Process:** A collection of random variables indexed by time (or space). For example, the noise voltage in an electronic circuit.
*   **Wide-Sense Stationarity (WSS):** A random process $X(t)$ is WSS if:
    *   Its mean is constant: $E[X(t)] = \mu_X$ for all $t$.
    *   Its autocorrelation depends only on the time difference (lag) $\tau$: $E[X(t)X(t+\tau)] = R_X(\tau)$ for all $t$.
    *   (Implicitly, the variance is constant and finite.)

*   **Autocorrelation Function ($R_X(\tau)$):** For a WSS random process $X(t)$, the autocorrelation function is defined as:
    $$R_X(\tau) = E[X(t)X(t+\tau)]$$
    This is the expected value of the product of the process at time $t$ and at time $t+\tau$.

**Why is it important?**

*   It reveals the temporal dependence within a random process.
*   It's crucial for understanding signal correlation, filtering, spectral analysis, and modeling of random phenomena in electrical systems.

**Reference:**

*   **Devore J. L., Chapter 13: Introduction to Probability and Statistics for Engineers:** While Devore focuses more on random variables and distributions, the underlying concepts of correlation and independence are foundational. The idea of measuring the relationship between two variables extends to time instances of a random process.
*   **Veerarajan T., Chapter 10: Random Processes:** This textbook provides a direct and comprehensive treatment of autocorrelation functions for random processes, aligning perfectly with this topic.

### 2. Properties of the Autocorrelation Function

The autocorrelation function of a WSS random process possesses several important properties:

**Property 1: Non-negativity**

*   **Statement:** The autocorrelation function is non-negative for all $\tau$.
*   **Explanation:** This property arises from the fact that the variance of any random variable is non-negative. Consider a random variable $Y = X(t) + X(t+\tau)$. Its variance is $Var(Y) = E[Y^2] - (E[Y])^2 \ge 0$. Expanding this, we get $E[(X(t) + X(t+\tau))^2] - (E[X(t) + X(t+\tau)])^2 \ge 0$. If $X(t)$ is WSS with mean $\mu_X$, then $E[X(t)] = E[X(t+\tau)] = \mu_X$. This simplifies to $E[X(t)^2 + 2X(t)X(t+\tau) + X(t+\tau)^2] - (2\mu_X)^2 \ge 0$. Further simplification leads to $2R_X(0) + 2R_X(\tau) - 2\mu_X^2 - 2\mu_X^2 \ge 0$, and eventually $R_X(0) - \mu_X^2 \ge -R_X(\tau)$. A more direct proof involves the property that for any random process, the integral of the autocorrelation function over any finite interval is non-negative, which implies $R_X(\tau)$ itself can't be arbitrarily negative. A key insight is that $R_X(\tau)$ is related to the power spectral density, which must be non-negative.
*   **Mathematical Form:** $R_X(\tau) \ge 0$ for all $\tau$.

**Property 2: Maximum Value at Zero Lag**

*   **Statement:** The autocorrelation function attains its maximum value at $\tau = 0$.
*   **Explanation:** The maximum value of the autocorrelation function is equal to the mean square value of the random process, $R_X(0) = E[X(t)^2]$. This is because $R_X(0) = E[X(t)X(t+0)] = E[X(t)^2]$. By the Cauchy-Schwarz inequality, $|E[XY]| \le \sqrt{E[X^2]E[Y^2]}$. For $Y=X(t+\tau)$, we have $|R_X(\tau)| = |E[X(t)X(t+\tau)]| \le \sqrt{E[X(t)^2]E[X(t+\tau)^2]}$. Since $E[X(t)^2] = E[X(t+\tau)^2] = R_X(0)$ for a WSS process, we get $|R_X(\tau)| \le R_X(0)$. The equality holds when $X(t)$ and $X(t+\tau)$ are perfectly correlated or anti-correlated, which is most likely when $\tau=0$ (the process is perfectly correlated with itself).
*   **Mathematical Form:** $|R_X(\tau)| \le R_X(0)$ for all $\tau$.

**Property 3: Even Function**

*   **Statement:** The autocorrelation function is an even function of the lag $\tau$.
*   **Explanation:** The autocorrelation function is symmetric about $\tau=0$. This means the correlation between $X(t)$ and $X(t+\tau)$ is the same as the correlation between $X(t)$ and $X(t-\tau)$.
*   **Mathematical Form:** $R_X(\tau) = R_X(-\tau)$ for all $\tau$.
    *   **Proof:**
        $R_X(-\tau) = E[X(t)X(t-\tau)]$
        Let $u = t-\tau$. Then $t = u+\tau$.
        $R_X(-\tau) = E[X(u+\tau)X(u)]$
        Since the process is WSS, the expectation does not depend on the specific time index $u$. Thus, $E[X(u+\tau)X(u)] = E[X(t)X(t+\tau)] = R_X(\tau)$.

**Property 4: Relation to the Mean**

*   **Statement:** If the random process $X(t)$ has a constant mean $\mu_X$, then $R_X(0) = \sigma_X^2 + \mu_X^2$, where $\sigma_X^2$ is the variance.
*   **Explanation:** This is a direct consequence of the definition of variance: $Var(X) = E[X^2] - (E[X])^2$. For a WSS process, $E[X(t)^2] = R_X(0)$ and $E[X(t)] = \mu_X$. So, $\sigma_X^2 = R_X(0) - \mu_X^2$, which rearranges to $R_X(0) = \sigma_X^2 + \mu_X^2$.
*   **Mathematical Form:** $R_X(0) = E[X(t)^2] = Var(X(t)) + (E[X(t)])^2 = \sigma_X^2 + \mu_X^2$.

**Property 5: Correlation with a Translated Process**

*   **Statement:** For a WSS random process $X(t)$, the autocorrelation of $X(t)$ is related to the autocorrelation of $X(t+\alpha)$ for any constant $\alpha$.
*   **Explanation:** Shifting the entire process in time does not change its autocorrelation properties due to stationarity.
*   **Mathematical Form:** $R_{X(t+\alpha)X(t+\beta)} = R_X(\beta - \alpha)$.
    Setting $\beta = \alpha + \tau$, we get $R_{X(t+\alpha)X(t+\alpha+\tau)} = R_X(\tau)$. This shows that the autocorrelation is invariant to time shifts.

**Property 6: The Wiener-Khinchin Theorem (Brief Mention)**

*   **Statement:** The Wiener-Khinchin theorem establishes a fundamental relationship between the autocorrelation function and the power spectral density (PSD) of a WSS random process. The PSD is the Fourier transform of the ACF.
*   **Explanation:** This theorem is crucial for spectral analysis. It implies that an autocorrelation function must be such that its Fourier transform results in a non-negative power spectral density. This is a necessary condition for a function to be a valid autocorrelation function.
*   **Mathematical Form:**
    $$S_X(f) = \mathcal{F}\{R_X(\tau)\} = \int_{-\infty}^{\infty} R_X(\tau) e^{-j2\pi f \tau} d\tau$$
    And conversely,
    $$R_X(\tau) = \mathcal{F}^{-1}\{S_X(f)\} = \int_{-\infty}^{\infty} S_X(f) e^{j2\pi f \tau} df$$
    Where $S_X(f) \ge 0$ for all $f$.

**Reference:**

*   **Papoulis, A. & Pillai, S.U., Chapter 8: Spectral Properties of Random Processes:** This reference offers deep theoretical insights into the Wiener-Khinchin theorem and the relationship between time-domain correlation and frequency-domain spectral density.
*   **Veerarajan T., Chapter 10: Random Processes:** Veerarajan also covers these properties in detail, providing clear proofs and examples.

### 3. Examples of Autocorrelation Functions

Let's explore some common examples of autocorrelation functions for WSS random processes.

**Example 1: White Noise**

*   **Description:** White noise is a random process where the values at different time instances are uncorrelated. In the ideal continuous-time sense, it has a constant power spectral density.
*   **Autocorrelation Function:** For an ideal white noise process $W(t)$, the autocorrelation is a Dirac delta function.
    $$R_W(\tau) = C \delta(\tau)$$
    where $C$ is a constant representing the power of the noise.
*   **Properties Check:**
    *   Non-negativity: $\delta(\tau)$ is non-negative. $C$ must be positive for physical noise.
    *   Maximum at Zero Lag: The Dirac delta function is infinite at $\tau=0$ and zero elsewhere. This represents the maximum "correlation" with itself at zero lag.
    *   Even Function: $\delta(\tau) = \delta(-\tau)$.
    *   Relation to Mean: If the mean is zero ($\mu_W=0$), then $R_W(0) = E[W(t)^2] = C$. This is the variance (power) of the white noise.
*   **Significance:** White noise is a fundamental building block in signal processing and communication system modeling.

**Example 2: Sinusoidal Process with Random Phase**

*   **Description:** Consider a signal of the form $X(t) = A \cos(\omega_0 t + \Theta)$, where $A$ and $\omega_0$ are constants, and $\Theta$ is a random variable uniformly distributed over $[0, 2\pi]$. This process is WSS.
*   **Autocorrelation Function:**
    $$R_X(\tau) = E[X(t)X(t+\tau)]$$
    $$R_X(\tau) = E[A \cos(\omega_0 t + \Theta) \cdot A \cos(\omega_0 (t+\tau) + \Theta)]$$
    $$R_X(\tau) = A^2 E[\cos(\omega_0 t + \Theta) \cos(\omega_0 t + \omega_0 \tau + \Theta)]$$
    Using the product-to-sum identity $2\cos A \cos B = \cos(A-B) + \cos(A+B)$:
    $$R_X(\tau) = \frac{A^2}{2} E[\cos(\omega_0 \tau) + \cos(2\omega_0 t + \omega_0 \tau + 2\Theta)]$$
    Since $\Theta$ is uniformly distributed over $[0, 2\pi]$, $E[\cos(2\omega_0 t + \omega_0 \tau + 2\Theta)] = 0$.
    $$R_X(\tau) = \frac{A^2}{2} \cos(\omega_0 \tau)$$
*   **Properties Check:**
    *   Non-negativity: $|\cos(\omega_0 \tau)| \le 1$, so $R_X(\tau) \le \frac{A^2}{2}$.
    *   Maximum at Zero Lag: $R_X(0) = \frac{A^2}{2} \cos(0) = \frac{A^2}{2}$. This is the mean square value $E[X(t)^2] = E[A^2 \cos^2(\omega_0 t + \Theta)] = \frac{A^2}{2}$.
    *   Even Function: $\cos(\omega_0 \tau)$ is an even function.
*   **Significance:** This ACF shows a periodic decay in correlation, oscillating with frequency $\omega_0$.

**Example 3: Exponentially Decaying Autocorrelation**

*   **Description:** Consider a random process with an autocorrelation function like $R_X(\tau) = P e^{-a|\tau|}$, where $P > 0$ and $a > 0$. This is characteristic of processes where the correlation decays exponentially with the time lag.
*   **Properties Check:**
    *   Non-negativity: $e^{-a|\tau|} > 0$.
    *   Maximum at Zero Lag: $R_X(0) = P e^0 = P$. This is the power of the process.
    *   Even Function: $|\tau|$ is an even function, so $e^{-a|\tau|}$ is also even.
*   **Significance:** This type of ACF is often associated with physical processes like the output of a first-order linear system driven by white noise.

**Reference:**

*   **Ross, S. M., Chapter 7: Random Processes:** Ross provides examples of common random processes and their statistical characteristics, including autocorrelation for processes like Poisson processes (though the ACF of Poisson processes requires careful definition).
*   **Palaniammal, S., Chapter 5: Random Processes:** This book likely contains specific examples of ACF for various types of random processes relevant to electrical engineering.

### 4. Applications of Autocorrelation Functions

The autocorrelation function is a cornerstone in various fields of electrical science:

*   **Signal Processing:**
    *   **Filtering:** Designing filters (e.g., Wiener filters) to estimate a desired signal from noisy observations relies heavily on the ACF of the signal and noise.
    *   **Detection:** Correlators use the ACF to detect the presence of a known signal in a noisy environment.
    *   **System Identification:** By observing the output of a system driven by a known random input (or by using random probing signals), the ACF of the output can help infer the system's characteristics.
*   **Communications Systems:**
    *   **Modulation and Demodulation:** Understanding the correlation properties of modulated signals is crucial for efficient transmission and reception.
    *   **Channel Estimation:** The ACF of channel impairments can inform adaptive equalization techniques.
*   **Control Systems:**
    *   **System Stability and Performance:** The correlation properties of disturbances and system noise affect the stability and performance of control systems.
*   **Image Processing:**
    *   **Texture Analysis:** The ACF can be used to characterize the spatial correlation of pixel values in an image, helping to identify textures.
*   **Time Series Analysis:**
    *   **Forecasting:** Models like ARIMA use autocorrelations to predict future values of time series data.

**Reference:**

*   **Anderson, D. F., Timo, B., Chapter 10: Signal Processing:** While this might not be a primary source for ACF theory itself, it would likely discuss applications where ACF is used in signal processing contexts.
*   **Devore J. L. & Veerarajan T.:** Both textbooks, in their sections on applications or case studies, might touch upon scenarios where ACF is used in engineering problems.

### 5. Practice Questions and Exercises

**Question 1:**
A WSS random process $X(t)$ has an autocorrelation function $R_X(\tau) = 10 e^{-2|\tau|} + 5$.
(a) What is the mean square value of the process?
(b) What is the variance of the process if its mean is 0?
(c) Is this autocorrelation function valid? Justify your answer based on its properties.

**Answer 1:**
(a) The mean square value is $R_X(0) = 10 e^{-2|0|} + 5 = 10(1) + 5 = 15$.
(b) If the mean is 0 ($\mu_X = 0$), then the variance $\sigma_X^2 = R_X(0) - \mu_X^2 = 15 - 0^2 = 15$.
(c) This autocorrelation function is valid.
    *   It is always non-negative since $e^{-2|\tau|} > 0$ and the sum is positive.
    *   It attains its maximum at $\tau=0$, where $R_X(0) = 15$. For any other $\tau$, $e^{-2|\tau|} < 1$, so $R_X(\tau) < 10(1) + 5 = 15$. Thus, $|R_X(\tau)| \le R_X(0)$.
    *   It is an even function of $\tau$ because $|\tau|$ is even, so $e^{-2|\tau|}$ is even.

**Question 2:**
Let $Y(t) = X(t) + c$, where $X(t)$ is a WSS random process with autocorrelation $R_X(\tau)$ and $c$ is a constant.
(a) Find the autocorrelation function of $Y(t)$, $R_Y(\tau)$.
(b) Find the mean of $Y(t)$, $E[Y(t)]$.

**Answer 2:**
Let $E[X(t)] = \mu_X$.
(a) $R_Y(\tau) = E[Y(t)Y(t+\tau)]$
    $R_Y(\tau) = E[(X(t)+c)(X(t+\tau)+c)]$
    $R_Y(\tau) = E[X(t)X(t+\tau) + cX(t) + cX(t+\tau) + c^2]$
    $R_Y(\tau) = E[X(t)X(t+\tau)] + cE[X(t)] + cE[X(t+\tau)] + E[c^2]$
    Since $X(t)$ is WSS, $E[X(t)] = E[X(t+\tau)] = \mu_X$.
    $R_Y(\tau) = R_X(\tau) + c\mu_X + c\mu_X + c^2$
    $R_Y(\tau) = R_X(\tau) + 2c\mu_X + c^2$

(b) $E[Y(t)] = E[X(t)+c]$
    $E[Y(t)] = E[X(t)] + E[c]$
    $E[Y(t)] = \mu_X + c$

**Question 3:**
Consider a random process $X(t) = \cos(\omega_0 t + \Theta)$, where $\omega_0$ is a constant and $\Theta$ is a random variable uniformly distributed on $[0, \pi]$. Assume $E[X(t)] = 0$.
(a) Find the autocorrelation function $R_X(\tau)$.
(b) What is the power of this process?

**Answer 3:**
(a) $R_X(\tau) = E[X(t)X(t+\tau)]$
    $R_X(\tau) = E[\cos(\omega_0 t + \Theta) \cos(\omega_0 (t+\tau) + \Theta)]$
    $R_X(\tau) = E[\cos(\omega_0 t + \Theta) \cos(\omega_0 t + \omega_0 \tau + \Theta)]$
    Using $2\cos A \cos B = \cos(A-B) + \cos(A+B)$:
    $R_X(\tau) = \frac{1}{2} E[\cos(\omega_0 \tau) + \cos(2\omega_0 t + \omega_0 \tau + 2\Theta)]$
    Since $\Theta$ is uniformly distributed on $[0, \pi]$, $E[\cos(2\omega_0 t + \omega_0 \tau + 2\Theta)] = 0$ (because the argument covers two full cycles as $\Theta$ goes from $0$ to $\pi$, and the average of cosine over full cycles is zero).
    $R_X(\tau) = \frac{1}{2} \cos(\omega_0 \tau)$

(b) The power of the process is its mean square value, $R_X(0)$.
    $R_X(0) = \frac{1}{2} \cos(0) = \frac{1}{2}$.
    Alternatively, $E[X(t)^2] = E[\cos^2(\omega_0 t + \Theta)]$. Using $\cos^2 A = \frac{1+\cos(2A)}{2}$,
    $E[\cos^2(\omega_0 t + \Theta)] = E[\frac{1+\cos(2(\omega_0 t + \Theta))}{2}] = \frac{1}{2} + \frac{1}{2} E[\cos(2\omega_0 t + 2\Theta)]$.
    Since $E[\cos(\dots)] = 0$ (as shown in part a), the power is $\frac{1}{2}$.

### 6. Important Points to Remember

*   **WSS is Key:** Autocorrelation functions as discussed are primarily for Wide-Sense Stationary (WSS) random processes.
*   **Correlation vs. Causation:** The ACF measures statistical correlation, not necessarily a direct causal relationship.
*   **Time Domain and Frequency Domain Link:** The Wiener-Khinchin theorem connects the ACF (time domain) to the Power Spectral Density (frequency domain). This is a fundamental link.
*   **ACF tells about memory:** A process with a rapidly decaying ACF has "short memory," meaning its future values are highly dependent on its recent past. A slowly decaying ACF implies a "long memory."
*   **Non-negativity and Maximum at Zero:** These are critical checks for a valid autocorrelation function.
*   **Even Function Property:** $R_X(\tau) = R_X(-\tau)$ is a direct consequence of the definition.

This comprehensive set of notes covers the fundamental concepts, properties, and applications of autocorrelation functions within the context of random processes, aligning with the learning outcomes for Module 4.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
