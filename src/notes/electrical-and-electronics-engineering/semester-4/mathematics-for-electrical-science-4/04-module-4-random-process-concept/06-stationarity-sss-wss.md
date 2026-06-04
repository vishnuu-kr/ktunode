---
title: "Stationarity- SSS, WSS"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 4: Random process concept"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35db5"
status: "completed"
scrapedAt: "2026-05-23T16:17:09.342Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 4: Random Process Concepts

### Topic: Stationarity – SSS, WSS

**Learning Outcomes:**

*   Understand the definition of a stationary random process.
*   Differentiate between Strict-Sense Stationarity (SSS) and Wide-Sense Stationarity (WSS).
*   Analyze the properties of SSS and WSS random processes.
*   Apply the concepts of stationarity to analyze random phenomena in electrical science.

**Course Outcomes Alignment:**

*   **CO4:** Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems. (Knowledge Level: K3)
    *   This topic directly addresses the classification and properties of random processes, particularly focusing on stationarity, which is crucial for understanding their behavior in electrical systems.

---

### 1. Introduction to Random Processes

A **random process** is a collection of random variables indexed by time (or another parameter). Think of it as a system whose output evolves randomly over time.

*   **Examples in Electrical Science:**
    *   The voltage across a resistor subjected to thermal noise.
    *   The output of a communication channel with random noise.
    *   The arrival times of packets at a network router.
    *   The signal strength from a mobile device.

Let $\{X(t), t \in T\}$ denote a random process, where $T$ is the index set (usually time).

---

### 2. Stationarity: The Concept of Stability

Stationarity is a fundamental property of random processes that describes how their statistical characteristics change (or don't change) over time. A stationary random process is one whose statistical properties are constant over time. This simplifies analysis significantly.

**Why is Stationarity Important?**

*   **Predictability:** If a process is stationary, its future behavior can be predicted based on its past behavior, as the underlying statistical structure remains the same.
*   **Analysis Simplification:** Many complex analytical techniques for random processes rely on the assumption of stationarity.
*   **System Modeling:** Many real-world systems in electrical science can be approximated as stationary over certain periods.

**Two Key Types of Stationarity:**

1.  **Strict-Sense Stationarity (SSS)**
2.  **Wide-Sense Stationarity (WSS)**

---

### 3. Strict-Sense Stationarity (SSS)

A random process $\{X(t), t \in T\}$ is said to be **Strict-Sense Stationary (SSS)** if its probability distributions are invariant to shifts in time. This is the most rigorous definition of stationarity.

**Formal Definition:**

For any time $t_1, t_2, \dots, t_n$ and any time shift $\tau$, the joint distribution of $X(t_1), X(t_2), \dots, X(t_n)$ is the same as the joint distribution of $X(t_1 + \tau), X(t_2 + \tau), \dots, X(t_n + \tau)$.

In simpler terms:
*   The probability that $X(t)$ falls in a certain range at time $t_1$ is the same as the probability that $X(t+\tau)$ falls in that same range at time $t_1+\tau$, for any $\tau$.
*   This applies to any number of random variables from the process.

**Implications of SSS:**

*   **Constant Mean:** $E[X(t)] = \mu$ for all $t$. The mean value does not change with time.
*   **Constant Variance:** $Var[X(t)] = E[(X(t) - \mu)^2] = \sigma^2$ for all $t$. The spread of the data around the mean is constant.
*   **Time-Invariant Autocovariance:** The autocovariance function $C_X(t_1, t_2) = E[(X(t_1) - \mu)(X(t_2) - \mu)]$ depends only on the time difference $t_2 - t_1$, not on the absolute times $t_1$ and $t_2$. Let $\tau = t_2 - t_1$. Then $C_X(t_1, t_2) = C_X(t_1+\tau, t_2+\tau) = C_X(0, t_2-t_1) = C_X(\tau)$.

**Checking for SSS:**

To prove a process is SSS, one would ideally need to show that all its finite-dimensional distributions are invariant to time shifts. This is often difficult in practice.

**Example (Illustrative):**

Consider a random process that outputs a constant value $\pm A$ with equal probability, where the sign is chosen randomly at $t=0$ and remains constant for all time.
Let $X(t) = S$, where $S$ is a random variable such that $P(S=A) = 0.5$ and $P(S=-A) = 0.5$.
*   **Mean:** $E[X(t)] = E[S] = A(0.5) + (-A)(0.5) = 0$. This is constant for all $t$.
*   **Autocovariance:** $E[X(t_1)X(t_2)] = E[S \cdot S] = E[S^2] = A^2(0.5) + (-A)^2(0.5) = A^2$.
    $C_X(t_1, t_2) = E[X(t_1)X(t_2)] - E[X(t_1)]E[X(t_2)] = A^2 - 0 \cdot 0 = A^2$.
    This depends only on the time difference $t_2 - t_1$. Specifically, for this process, $C_X(t_1, t_2) = A^2$ for all $t_1, t_2$.
The distributions of this process are clearly invariant to time shifts.

**From Devore J. L. (9th ed., Chapter 10):** Stationarity concepts are introduced in the context of time series analysis. SSS is the strongest form, requiring complete invariance of joint distributions under time shifts.

---

### 4. Wide-Sense Stationarity (WSS)

A random process $\{X(t), t \in T\}$ is said to be **Wide-Sense Stationary (WSS)** if:

1.  **Constant Mean:** $E[X(t)] = \mu$ for all $t$ (a finite constant).
2.  **Time-Invariant Autocovariance:** The autocovariance function $C_X(t_1, t_2) = E[(X(t_1) - \mu)(X(t_2) - \mu)]$ depends only on the time difference $\tau = t_2 - t_1$.

If these two conditions are met, we can write the autocovariance as a function of $\tau$ only:
$C_X(t_1, t_1+\tau) = R_X(\tau) - \mu^2$, where $R_X(\tau) = E[X(t)X(t+\tau)]$ is the **autocorrelation function**.

So, for a WSS process:
*   $E[X(t)] = \mu$ (constant)
*   $E[X(t_1)X(t_2)] = R_X(t_2 - t_1)$ (depends only on time difference)

**Implications of WSS:**

*   WSS is a weaker condition than SSS. If a process is SSS, it is also WSS. However, the converse is not always true.
*   The variance of a WSS process is also constant:
    $Var[X(t)] = E[(X(t) - \mu)^2] = E[(X(t) - \mu)(X(t) - \mu)] = C_X(t, t)$.
    Since $C_X(t_1, t_2)$ depends only on $t_2 - t_1$, $C_X(t, t)$ depends on $t - t = 0$.
    So, $Var[X(t)] = C_X(0)$, which is a constant.

**Checking for WSS:**

To prove a process is WSS, we only need to verify the two conditions:
1.  Calculate $E[X(t)]$ and check if it's a constant.
2.  Calculate $E[X(t_1)X(t_2)]$ and check if it depends only on $t_2 - t_1$.

**Example 1 (WSS but not SSS - if distributions are non-Gaussian):**

Consider a Gaussian random process $Y(t)$ with mean 0 and autocovariance $C_Y(\tau) = e^{-|\tau|}$. A process $X(t)$ constructed from $Y(t)$ might be WSS but not SSS if its probability distributions are not invariant to time shifts. For example, if we take $X(t) = Y(t)^2$, its mean and autocovariance might be constant, but its higher-order distributions might not be.

**Example 2 (WSS):**

Let $X(t) = A \cos(\omega_0 t + \Phi)$, where $A$ and $\omega_0$ are constants, and $\Phi$ is a random variable uniformly distributed in $[0, 2\pi]$.

1.  **Mean:**
    $E[X(t)] = E[A \cos(\omega_0 t + \Phi)]$
    $= A \int_0^{2\pi} \cos(\omega_0 t + \phi) \frac{1}{2\pi} d\phi$
    $= \frac{A}{2\pi} \left[ \frac{\sin(\omega_0 t + \phi)}{\omega_0} \right]_0^{2\pi}$
    $= \frac{A}{2\pi \omega_0} (\sin(\omega_0 t + 2\pi) - \sin(\omega_0 t))$
    $= \frac{A}{2\pi \omega_0} (\sin(\omega_0 t) - \sin(\omega_0 t)) = 0$.
    The mean is a constant (0).

2.  **Autocorrelation:**
    $E[X(t_1)X(t_2)] = E[A \cos(\omega_0 t_1 + \Phi) A \cos(\omega_0 t_2 + \Phi)]$
    $= A^2 E[\cos(\omega_0 t_1 + \Phi) \cos(\omega_0 t_2 + \Phi)]$
    Using the product-to-sum identity: $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$
    $= A^2 E[\frac{1}{2} (\cos(\omega_0(t_1-t_2)) + \cos(\omega_0(t_1+t_2) + 2\Phi))]$
    $= \frac{A^2}{2} E[\cos(\omega_0(t_1-t_2)) + \cos(\omega_0(t_1+t_2) + 2\Phi)]$
    $= \frac{A^2}{2} [\cos(\omega_0(t_1-t_2)) + E[\cos(\omega_0(t_1+t_2) + 2\Phi)]]$

    Now, let's evaluate $E[\cos(\omega_0(t_1+t_2) + 2\Phi)]$:
    $= \int_0^{2\pi} \cos(\omega_0(t_1+t_2) + 2\phi) \frac{1}{2\pi} d\phi$
    $= \frac{1}{2\pi} \left[ \frac{\sin(\omega_0(t_1+t_2) + 2\phi)}{2} \right]_0^{2\pi}$
    $= \frac{1}{4\pi} [\sin(\omega_0(t_1+t_2) + 4\pi) - \sin(\omega_0(t_1+t_2))]$
    $= \frac{1}{4\pi} [\sin(\omega_0(t_1+t_2)) - \sin(\omega_0(t_1+t_2))] = 0$.

    So, $E[X(t_1)X(t_2)] = \frac{A^2}{2} \cos(\omega_0(t_1-t_2))$.
    This autocorrelation function depends only on the time difference $\tau = t_2 - t_1$.
    $R_X(\tau) = \frac{A^2}{2} \cos(\omega_0 \tau)$.

Since both conditions are met, $X(t) = A \cos(\omega_0 t + \Phi)$ with $\Phi \sim U[0, 2\pi]$ is a **WSS** random process.

**From Veerarajan T. (3rd ed., Chapter 12):** WSS is also known as covariance stationary. The emphasis is on the mean and autocorrelation function. The autocorrelation of a WSS process is an even function of $\tau$, and its maximum value occurs at $\tau=0$.

**From Papoulis & Pillai (4th ed., Chapter 3):** Stationarity is a key property. SSS implies WSS. WSS simplifies spectral analysis using the Wiener-Khinchin theorem.

---

### 5. Relationship Between SSS and WSS

*   **SSS ⇒ WSS:** If a process is strictly stationary, its first and second-order statistics must be invariant to time shifts, which are precisely the conditions for WSS.
*   **WSS ⇏ SSS:** A process can be WSS without being SSS. This happens when the higher-order moments or joint distributions are not invariant to time shifts, even if the mean and autocovariance are.

**Example of WSS but not SSS:**

Consider a random process $X(t)$ that is Gaussian with $E[X(t)] = 0$ and $E[X(t_1)X(t_2)] = e^{-|t_1-t_2|}$. This process is WSS.
Now, consider a process $Y(t) = X(t)^2$.
*   $E[Y(t)] = E[X(t)^2] = Var[X(t)] + (E[X(t)])^2 = E[X(t_1)X(t_1)] + 0^2 = e^{-0} = 1$. This is constant.
*   $E[Y(t_1)Y(t_2)] = E[X(t_1)^2 X(t_2)^2]$. For a Gaussian process, $E[X_1^2 X_2^2] = E[X_1^2]E[X_2^2] + 2(E[X_1 X_2])^2$.
    $E[Y(t_1)Y(t_2)] = E[X(t_1)^2]E[X(t_2)^2] + 2(E[X(t_1)X(t_2)])^2$
    $= 1 \cdot 1 + 2(e^{-|t_1-t_2|})^2 = 1 + 2e^{-2|t_1-t_2|}$.
    This depends only on $|t_1-t_2|$. So, $Y(t)$ is also WSS.

However, to prove $Y(t)$ is SSS, we would need to show that its entire probability distribution is invariant to time shifts. For a Gaussian process, the complete probability distribution is determined by the mean and covariance. For $Y(t)=X(t)^2$, the distribution is non-Gaussian, and its invariance to time shifts is not guaranteed just because the mean and autocovariance of $X(t)$ are. Higher-order statistics of $Y(t)$ might reveal a lack of SSS.

**Key Point:** For Gaussian processes, SSS is equivalent to WSS. This is because all higher-order moments of a Gaussian process can be expressed in terms of its mean and autocovariance. If the mean and autocovariance are time-invariant, then all higher-order moments will also be time-invariant, implying SSS.

---

### 6. Properties of Stationary Processes (especially WSS)

*   **Autocorrelation Function $R_X(\tau)$:**
    *   $R_X(0) = E[X(t)^2] = \text{Mean Square Value}$.
    *   $R_X(\tau) = R_X(-\tau)$ (even function of $\tau$).
    *   $|R_X(\tau)| \le R_X(0)$ (maximum at $\tau=0$).
    *   If $X(t)$ is SSS, then $R_X(\tau)$ is the autocorrelation function for all finite orders.
*   **Power Spectral Density (PSD):** For WSS processes, the Power Spectral Density (PSD), denoted by $S_X(f)$ or $S_X(\omega)$, is the Fourier transform of the autocorrelation function.
    $S_X(f) = \int_{-\infty}^{\infty} R_X(\tau) e^{-j2\pi f \tau} d\tau$
    $R_X(\tau) = \int_{-\infty}^{\infty} S_X(f) e^{j2\pi f \tau} df$
    The PSD describes how the "power" of the random process is distributed over frequency. This is a crucial concept in signal processing and communication systems (CO4).

**From Ross S. M. (6th ed., Chapter 11):** Stationarity is discussed in the context of time series. The connection between autocorrelation and the frequency domain (spectrum) is highlighted.

---

### 7. Importance in Electrical Science

Stationarity is a cornerstone for analyzing and designing many electrical systems:

*   **Communications:** Analyzing noise in communication channels, designing filters, characterizing signal fading. WSS assumption is often used to model channel noise (e.g., Additive White Gaussian Noise - AWGN).
*   **Signal Processing:** Designing filters (e.g., Wiener filters), spectral estimation, system identification. The PSD of a WSS process is essential for filter design.
*   **Control Systems:** Analyzing system stability with random inputs.
*   **Reliability Engineering:** Modeling failure rates of components.

**Practical Consideration:** Many real-world processes are not perfectly stationary. However, they might be **piecewise stationary**, meaning they are stationary over short periods. In such cases, the techniques for stationary processes can be applied to segments of the data.

---

### 8. Summary of Key Concepts

| Feature             | Strict-Sense Stationarity (SSS)                                 | Wide-Sense Stationarity (WSS)                                      |
| :------------------ | :-------------------------------------------------------------- | :----------------------------------------------------------------- |
| **Mean**            | $E[X(t)] = \mu$ (constant)                                     | $E[X(t)] = \mu$ (constant)                                        |
| **Variance**        | $Var[X(t)] = \sigma^2$ (constant)                               | $Var[X(t)] = \sigma^2$ (constant)                                  |
| **Autocovariance**  | $C_X(t_1, t_2) = C_X(t_1+\tau, t_2+\tau)$ for all $\tau$        | $C_X(t_1, t_2) = R_X(t_2-t_1) - \mu^2$ (depends only on time diff) |
| **Autocorrelation** | $E[X(t_1)X(t_2)] = R_X(t_2-t_1)$ (depends only on time diff)   | $E[X(t_1)X(t_2)] = R_X(t_2-t_1)$ (depends only on time diff)      |
| **Distributions**   | All finite-dimensional joint distributions are time-invariant. | Only mean and second-order statistics are time-invariant.          |
| **Relationship**    | SSS ⇒ WSS                                                       | WSS ⇏ SSS (Exception: Gaussian processes SSS <=> WSS)            |

---

### 9. Practice Questions

**Question 1:**
A random process is defined as $X(t) = C$, where $C$ is a random variable with mean $E[C] = 5$ and variance $Var[C] = 2$. Is this process SSS? Is it WSS? Justify your answers.

**Question 2:**
Consider the random process $X(t) = \cos(\omega_0 t + \Theta)$, where $\omega_0$ is a constant and $\Theta$ is a random variable uniformly distributed over $[0, \pi]$.
(a) Calculate the mean of $X(t)$.
(b) Calculate the autocorrelation function $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$.
(c) Is $X(t)$ a WSS process? Justify your answer.

**Question 3:**
Let $Y(t)$ be a WSS random process with mean $\mu$ and autocorrelation function $R_Y(\tau)$. Consider a new process $Z(t) = Y(t) - \mu$.
(a) What is the mean of $Z(t)$?
(b) What is the autocorrelation function of $Z(t)$?
(c) Is $Z(t)$ WSS?

**Question 4:**
Explain why the assumption of stationarity is useful in the analysis of random processes in electrical science.

---

### 10. Answers to Practice Questions

**Answer 1:**
The random process is $X(t) = C$.
(a) **Mean:** $E[X(t)] = E[C] = 5$. This is a constant for all $t$.
(b) **Autocorrelation:** $E[X(t_1)X(t_2)] = E[C \cdot C] = E[C^2]$.
    We know $Var[C] = E[C^2] - (E[C])^2$.
    So, $E[C^2] = Var[C] + (E[C])^2 = 2 + 5^2 = 2 + 25 = 27$.
    Thus, $E[X(t_1)X(t_2)] = 27$, which is a constant and depends only on the time difference $t_2 - t_1$ (in fact, it's constant for any time difference).

*   **WSS:** Since the mean is constant and the autocorrelation depends only on the time difference (it's a constant), the process $X(t)$ is **WSS**.
*   **SSS:** For a process to be SSS, all its joint probability distributions must be time-invariant. Since $X(t)$ is a constant random variable $C$ for all $t$, the value of $X(t)$ at any time $t$ is the same as the value of $X(t+\tau)$ at time $t+\tau$. If the distribution of $C$ is such that it only depends on its own value, and not on time, then the process is SSS. If $C$ is simply a random variable, and $X(t)=C$, then the underlying distribution of $C$ is the same for any $t$. Thus, this process is **SSS**.

**Answer 2:**
$X(t) = \cos(\omega_0 t + \Theta)$, with $\Theta \sim U[0, \pi]$.

(a) **Mean:**
    $E[X(t)] = E[\cos(\omega_0 t + \Theta)]$
    $= \int_0^{\pi} \cos(\omega_0 t + \theta) \frac{1}{\pi} d\theta$
    $= \frac{1}{\pi} \left[ \frac{\sin(\omega_0 t + \theta)}{\omega_0} \right]_0^{\pi}$
    $= \frac{1}{\pi \omega_0} [\sin(\omega_0 t + \pi) - \sin(\omega_0 t)]$
    $= \frac{1}{\pi \omega_0} [-\sin(\omega_0 t) - \sin(\omega_0 t)]$
    $= \frac{-2 \sin(\omega_0 t)}{\pi \omega_0}$

    The mean is $\frac{-2 \sin(\omega_0 t)}{\pi \omega_0}$. This mean **depends on time $t$**.

(b) **Autocorrelation:**
    $E[X(t_1)X(t_2)] = E[\cos(\omega_0 t_1 + \Theta) \cos(\omega_0 t_2 + \Theta)]$
    $= E[\frac{1}{2} (\cos(\omega_0(t_1-t_2)) + \cos(\omega_0(t_1+t_2) + 2\Theta))]$
    $= \frac{1}{2} \cos(\omega_0(t_1-t_2)) + \frac{1}{2} E[\cos(\omega_0(t_1+t_2) + 2\Theta)]$

    Now, evaluate $E[\cos(\omega_0(t_1+t_2) + 2\Theta)]$:
    $= \int_0^{\pi} \cos(\omega_0(t_1+t_2) + 2\theta) \frac{1}{\pi} d\theta$
    $= \frac{1}{\pi} \left[ \frac{\sin(\omega_0(t_1+t_2) + 2\theta)}{2} \right]_0^{\pi}$
    $= \frac{1}{2\pi} [\sin(\omega_0(t_1+t_2) + 2\pi) - \sin(\omega_0(t_1+t_2))]$
    $= \frac{1}{2\pi} [\sin(\omega_0(t_1+t_2)) - \sin(\omega_0(t_1+t_2))] = 0$.

    So, $E[X(t_1)X(t_2)] = \frac{1}{2} \cos(\omega_0(t_1-t_2))$.
    This autocorrelation function **depends only on the time difference** $t_2-t_1$.

(c) **WSS:** For a process to be WSS, its mean must be constant, and its autocorrelation must depend only on the time difference.
    From (a), the mean is $\frac{-2 \sin(\omega_0 t)}{\pi \omega_0}$, which is time-dependent.
    Therefore, $X(t)$ is **NOT WSS**.

**Answer 3:**
Let $Y(t)$ be a WSS random process with mean $\mu$ and autocorrelation $R_Y(\tau)$. Let $Z(t) = Y(t) - \mu$.

(a) **Mean of $Z(t)$:**
    $E[Z(t)] = E[Y(t) - \mu] = E[Y(t)] - E[\mu]$
    Since $Y(t)$ is WSS, $E[Y(t)] = \mu$. And $\mu$ is a constant.
    $E[Z(t)] = \mu - \mu = 0$.
    The mean of $Z(t)$ is 0, which is a constant.

(b) **Autocorrelation of $Z(t)$:**
    $R_Z(t_1, t_2) = E[Z(t_1)Z(t_2)]$
    $= E[(Y(t_1) - \mu)(Y(t_2) - \mu)]$
    $= E[Y(t_1)Y(t_2) - \mu Y(t_1) - \mu Y(t_2) + \mu^2]$
    $= E[Y(t_1)Y(t_2)] - \mu E[Y(t_1)] - \mu E[Y(t_2)] + E[\mu^2]$
    Since $Y(t)$ is WSS:
    $E[Y(t_1)Y(t_2)] = R_Y(t_2-t_1)$
    $E[Y(t_1)] = \mu$
    $E[Y(t_2)] = \mu$
    $E[\mu^2] = \mu^2$ (since $\mu$ is a constant)

    $R_Z(t_1, t_2) = R_Y(t_2-t_1) - \mu(\mu) - \mu(\mu) + \mu^2$
    $R_Z(t_1, t_2) = R_Y(t_2-t_1) - \mu^2 - \mu^2 + \mu^2$
    $R_Z(t_1, t_2) = R_Y(t_2-t_1) - \mu^2$

    This is the autocovariance function of $Y(t)$. Let $\tau = t_2-t_1$.
    $R_Z(\tau) = R_Y(\tau) - \mu^2$. This depends only on the time difference $\tau$.

(c) **Is $Z(t)$ WSS?**
    Yes. The mean of $Z(t)$ is 0 (constant), and its autocorrelation function $R_Z(\tau) = R_Y(\tau) - \mu^2$ depends only on the time difference $\tau$. Therefore, $Z(t)$ is **WSS**. This process $Z(t)$ is often called a **centered** WSS process.

**Answer 4:**
The assumption of stationarity (both SSS and WSS) is crucial for simplifying the analysis and modeling of random processes in electrical science due to the following reasons:

1.  **Predictability:** Stationary processes exhibit statistical consistency over time. This means that their future behavior can be predicted based on their past behavior, as the underlying probability distributions and statistical moments remain constant.
2.  **Analytical Tractability:** Many powerful mathematical tools and techniques used in analyzing random processes, such as Fourier analysis (Power Spectral Density), Wiener filtering, and spectral estimation, are either directly applicable or significantly simplified when applied to stationary processes. Without stationarity, the analysis would often require knowledge of probability distributions at every single point in time, which is generally impossible to obtain.
3.  **System Design:** In designing electrical systems like communication receivers, filters, and control systems, engineers often need to model the random noise or signals present. Assuming stationarity allows for the use of well-established models and design methodologies that lead to robust and predictable system performance. For instance, modeling noise as Additive White Gaussian Noise (AWGN) relies on stationarity assumptions.
4.  **Parameter Estimation:** When dealing with real-world data from electrical systems, estimation of process parameters (like mean and variance) is necessary. If a process is stationary, we can average observations over time to obtain reliable estimates of these parameters, as the underlying true values are not changing.
5.  **Computational Efficiency:** Algorithms designed for stationary processes are often computationally more efficient. For example, calculating the Power Spectral Density using methods like the Fast Fourier Transform (FFT) is efficient and directly applicable to stationary signals.

While many real-world processes are not perfectly stationary, they might be stationary over limited time intervals. In such cases, the techniques for stationary processes are applied piecewise or adapted to handle non-stationarity. Nevertheless, the fundamental understanding and analytical framework provided by stationarity remain invaluable in electrical science.

---

### Important Points to Remember:

*   **SSS** is a very strong condition, requiring complete invariance of all probability distributions under time shifts.
*   **WSS** is a weaker condition, requiring only time-invariant mean and autocorrelation.
*   **SSS implies WSS**, but the converse is not generally true.
*   For **Gaussian random processes**, SSS is equivalent to WSS.
*   The **autocorrelation function** of a WSS process is an **even function** of the time difference and is **maximized at zero lag**.
*   The **Power Spectral Density (PSD)** is the Fourier transform of the autocorrelation function and is a fundamental tool for analyzing WSS processes in the frequency domain.

---
