---
title: "Random process concept"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 4: Random process concept"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35db0"
status: "completed"
scrapedAt: "2026-05-23T16:17:05.023Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 4: Random Process Concept

### Topic: Random Process Concept

This module introduces the fundamental concepts of random processes, which are essential for understanding and analyzing time-varying phenomena in electrical science, such as signals, noise, and system outputs.

---

### **Learning Outcomes**

By the end of this module, you will be able to:

*   Understand the definition and types of random processes.
*   Characterize random processes using statistical moments (mean, variance).
*   Define and interpret the autocorrelation function and its properties.
*   Understand the concept of stationarity (strict and wide-sense) and its implications.
*   Recognize and understand basic examples of random processes relevant to electrical engineering.

---

### **1. Introduction to Random Processes**

A **random process** is a collection of random variables indexed by time (or sometimes another parameter like space). In simpler terms, it's a process whose evolution over time is governed by randomness.

**Key Concepts & Definitions:**

*   **Random Variable:** A variable whose value is a numerical outcome of a random phenomenon.
*   **Stochastic Process:** Another term for a random process.
*   **Sample Function (or Sample Path):** A single realization of a random process over time. It's a specific sequence of values the process takes.
*   **Ensemble:** The collection of all possible sample functions of a random process.

**Analogy:** Imagine observing the voltage across a resistor through which a random current is flowing. Each time you perform this experiment, you get a different voltage waveform over time. The collection of all possible voltage waveforms you could observe is the ensemble, and a single observed waveform is a sample function.

**Textbook Reference:**

*   **Devore (9th ed., 2016):** Introduces random variables and then extends these concepts to sequences and functions of random variables, forming the basis of random processes. (Chapter on Random Variables, then extending to sequences/functions).
*   **Veerarajan (3rd ed., 2008):** Defines random processes as collections of random variables and discusses their different realizations. (Chapter on Random Processes).
*   **Papoulis & Pillai (4th ed., 2002):** Provides a rigorous mathematical foundation for random processes, defining them as functions of time taking random values. (Chapter 1: Introduction to Random Processes).

---

### **2. Classification of Random Processes**

Random processes can be classified based on the nature of their index set and the set of values they can take.

**Key Concepts & Definitions:**

*   **Continuous-Time Random Process:** The index set is continuous (e.g., time, $t \in \mathbb{R}$).
    *   **Example:** The voltage signal from a noisy amplifier.
*   **Discrete-Time Random Process:** The index set is discrete (e.g., integer time steps, $n \in \mathbb{Z}$).
    *   **Example:** The output of a digital filter at discrete sampling instants.
*   **Continuous-State Random Process:** The random variables in the process can take any value within a continuous range.
    *   **Example:** Thermal noise voltage.
*   **Discrete-State Random Process:** The random variables in the process can take values from a countable set.
    *   **Example:** The number of calls arriving at a telephone exchange per minute.

**Important Note:** In electrical science, we often deal with **continuous-time, continuous-state** random processes.

---

### **3. Characterizing Random Processes: Statistical Moments**

Similar to random variables, random processes can be characterized by their statistical moments.

**Key Concepts & Definitions:**

*   **Mean Function (or Average Function), $m_X(t)$:** The expected value of the random process at a specific time $t$.
    $$m_X(t) = E[X(t)]$$
    This function describes the average behavior of the process over time.

*   **Variance Function, $\sigma_X^2(t)$:** The variance of the random process at a specific time $t$.
    $$\sigma_X^2(t) = Var(X(t)) = E[(X(t) - m_X(t))^2]$$
    This function describes the spread or variability of the process around its mean at each point in time.

**Example:**

Consider a random process $X(t) = A \cos(\omega t + \Theta)$, where $A$ and $\omega$ are constants, and $\Theta$ is a random variable uniformly distributed over $[0, 2\pi]$.

*   **Mean Function:**
    $$E[X(t)] = E[A \cos(\omega t + \Theta)] = A \cos(\omega t) E[\cos(\Theta)] - A \sin(\omega t) E[\sin(\Theta)]$$
    Since $\Theta$ is uniform on $[0, 2\pi]$, $E[\cos(\Theta)] = 0$ and $E[\sin(\Theta)] = 0$.
    Therefore, $m_X(t) = E[X(t)] = 0$ for all $t$.

*   **Variance Function:**
    $$Var(X(t)) = E[X^2(t)] - (E[X(t)])^2$$
    Since $E[X(t)] = 0$, $Var(X(t)) = E[X^2(t)]$.
    $$E[X^2(t)] = E[(A \cos(\omega t + \Theta))^2] = A^2 \cos^2(\omega t) E[\cos^2(\Theta)]$$
    Using the identity $\cos^2(\theta) = \frac{1 + \cos(2\theta)}{2}$:
    $$E[\cos^2(\Theta)] = E\left[\frac{1 + \cos(2\Theta)}{2}\right] = \frac{1}{2} + \frac{1}{2} E[\cos(2\Theta)]$$
    Since $\Theta$ is uniform on $[0, 2\pi]$, $E[\cos(2\Theta)] = 0$.
    So, $E[\cos^2(\Theta)] = \frac{1}{2}$.
    Therefore, $E[X^2(t)] = A^2 \cos^2(\omega t) \left(\frac{1}{2}\right) = \frac{A^2}{2} \cos^2(\omega t)$.
    And, $\sigma_X^2(t) = Var(X(t)) = \frac{A^2}{2} \cos^2(\omega t)$.

**Textbook Reference:**

*   **Veerarajan (3rd ed., 2008):** Discusses the mean and variance functions for random processes. (Chapter 10: Random Processes).
*   **Ross (6th ed., 2020):** Explains how to characterize random processes using their expected values and variances. (Chapter 11: Stochastic Processes).

---

### **4. Stationarity of Random Processes**

Stationarity is a crucial property that simplifies the analysis of random processes. A stationary process is one whose statistical properties do not change over time.

**Key Concepts & Definitions:**

*   **Strict-Sense Stationarity (SSS):** A random process $X(t)$ is strictly stationary if the statistical properties of its sample functions are invariant under translation in time. This means the joint distribution of $X(t_1), X(t_2), \ldots, X(t_n)$ is the same as the joint distribution of $X(t_1+h), X(t_2+h), \ldots, X(t_n+h)$ for any $t_i$ and any $h$.

    *   **Implication:** If a process is strictly stationary, its mean and all its higher-order moments are constant over time.
        *   $E[X(t)] = m$ (constant)
        *   $E[X(t_1)X(t_2)] = R(t_2 - t_1)$ (depends only on the time difference)

*   **Wide-Sense Stationarity (WSS) / Weak-Sense Stationarity (WSS):** A random process $X(t)$ is wide-sense stationary if:
    1.  Its mean function is constant: $E[X(t)] = m$ for all $t$.
    2.  Its autocorrelation function depends only on the time difference between the two points: $E[X(t)X(t+h)] = R(h)$ for all $t$ and $h$.

    *   **Relationship to SSS:** Strict-sense stationarity implies wide-sense stationarity. However, the converse is not always true.
    *   **Practical Importance:** WSS is often easier to check and is sufficient for many analyses, especially in electrical engineering where power spectral density is important.

**Textbook Reference:**

*   **Devore (9th ed., 2016):** While Devore primarily focuses on random variables, the concepts of independence and memorylessness in random variables can be extended to understand stationarity. The focus shifts more to sequences.
*   **Veerarajan (3rd ed., 2008):** Provides a clear explanation of strict-sense and wide-sense stationarity, along with examples. (Chapter 10: Random Processes).
*   **Papoulis & Pillai (4th ed., 2002):** Delves into the mathematical definitions and properties of stationary processes. (Chapter 1: Introduction to Random Processes).
*   **Ross (6th ed., 2020):** Discusses stationarity in the context of stochastic processes, differentiating between strict and wide-sense stationarity. (Chapter 11: Stochastic Processes).

---

### **5. Autocorrelation Function (ACF)**

The autocorrelation function measures the similarity between a random process and a time-delayed version of itself. It's a fundamental tool for analyzing the structure and properties of random processes.

**Key Concepts & Definitions:**

*   **Autocorrelation Function (ACF), $R_X(t_1, t_2)$:** The expected value of the product of the random process at two different times $t_1$ and $t_2$.
    $$R_X(t_1, t_2) = E[X(t_1)X(t_2)]$$

*   **Autocovariance Function, $C_X(t_1, t_2)$:** The covariance of the random process at two different times $t_1$ and $t_2$.
    $$C_X(t_1, t_2) = E[(X(t_1) - m_X(t_1))(X(t_2) - m_X(t_2))]$$
    Note that $C_X(t_1, t_2) = R_X(t_1, t_2) - m_X(t_1)m_X(t_2)$.

**Properties of the Autocorrelation Function:**

For any random process $X(t)$:

1.  **Non-negativity:** $R_X(\tau, \tau) = E[X^2(\tau)] \ge 0$. This means the autocorrelation at zero lag is always non-negative.
2.  **Symmetry:** $R_X(t_1, t_2) = R_X(t_2, t_1)$.
3.  **Maximum at Zero Lag:** $|R_X(t_1, t_2)| \le \sqrt{E[X^2(t_1)]E[X^2(t_2)]}$. The maximum value is attained when $t_1 = t_2$.

**For Wide-Sense Stationary (WSS) Processes:**

If $X(t)$ is WSS, its ACF depends only on the time difference $\tau = t_2 - t_1$. Let $t_1 = t$ and $t_2 = t + \tau$. Then:
$$R_X(t, t+\tau) = E[X(t)X(t+\tau)] = R_X(\tau)$$

**Properties of ACF for WSS Processes:**

1.  **Even Function:** $R_X(\tau) = R_X(-\tau)$.
2.  **Maximum at Zero Lag:** $R_X(0) = E[X^2] = \sigma_X^2 + m_X^2$. This is the mean square value of the process, and it's the maximum value of $R_X(\tau)$.
3.  **Non-negativity:** $R_X(\tau)$ is related to the power spectral density via the Fourier Transform, and it must be non-negative to ensure a valid power spectral density.
4.  **Bounded:** $|R_X(\tau)| \le R_X(0)$.

**Example:**

Consider the WSS random process $X(t)$ with mean $m_X=0$ and autocorrelation function $R_X(\tau) = Ae^{-\alpha|\tau|}$, where $A$ and $\alpha > 0$ are constants.

*   **Mean Function:** $m_X(t) = E[X(t)] = 0$.
*   **Autocorrelation Function:** $R_X(\tau) = Ae^{-\alpha|\tau|}$.
    *   This is an even function: $R_X(-\tau) = Ae^{-\alpha|-\tau|} = Ae^{-\alpha|\tau|} = R_X(\tau)$.
    *   Maximum at zero lag: $R_X(0) = Ae^{-\alpha|0|} = A$. This is the mean square value.
    *   The variance $\sigma_X^2 = R_X(0) - m_X^2 = A - 0^2 = A$.

**Textbook Reference:**

*   **Veerarajan (3rd ed., 2008):** Dedicates significant coverage to the autocorrelation function and its properties, particularly for WSS processes. (Chapter 10: Random Processes).
*   **Papoulis & Pillai (4th ed., 2002):** Provides a comprehensive treatment of autocorrelation and its relation to the spectral properties of random processes. (Chapter 1: Introduction to Random Processes, Chapter 6: Spectral Representation).
*   **Ross (6th ed., 2020):** Explains autocorrelation as a measure of dependence between values of a stochastic process at different times. (Chapter 11: Stochastic Processes).

---

### **6. Important Examples of Random Processes**

Understanding common random processes is crucial for their application.

**Key Concepts & Definitions:**

*   **White Noise:** A random process with a constant power spectral density. In discrete time, this often means that the values at different time instants are uncorrelated (or independent).
    *   **Ideal White Noise:** Has a constant spectral density over all frequencies, which is not physically realizable.
    *   **Physical Approximation:** White noise has a very wide bandwidth that encompasses the frequencies of interest for a particular system.
    *   **Discrete-Time White Noise:** $X[n]$ is white noise if $E[X[n]] = m$ and $E[X[n]X[m]] = \sigma^2 \delta[n-m]$ for $n \neq m$. This means values at different times are uncorrelated and have constant variance $\sigma^2$.
        *   The autocorrelation function is $R_X[k] = \sigma^2 \delta[k]$.

*   **Brownian Motion (Wiener Process):** A continuous-time stochastic process that models the random movement of particles. It's characterized by independent increments and normally distributed changes.
    *   $W(t)$ is a Brownian motion if:
        1.  $W(0) = 0$.
        2.  $W(t)$ has independent increments (i.e., for $0 \le t_1 < t_2 \le t_3 < t_4$, $W(t_2) - W(t_1)$ and $W(t_4) - W(t_3)$ are independent).
        3.  For any $t > 0$, $W(t)$ is normally distributed with mean 0 and variance $\sigma^2 t$. $W(t) \sim N(0, \sigma^2 t)$.
        4.  The sample paths are continuous with probability 1.
    *   The mean of Brownian motion is $E[W(t)] = 0$.
    *   The autocorrelation is $R_W(t_1, t_2) = E[W(t_1)W(t_2)] = \sigma^2 \min(t_1, t_2)$.

*   **Random Telegraph Signal:** A process that switches randomly between two values (e.g., +a and -a) at random times.

**Textbook Reference:**

*   **Devore (9th ed., 2016):** While not a primary focus, concepts of Poisson processes and their relation to random events can provide intuition.
*   **Veerarajan (3rd ed., 2008):** Covers white noise and provides an introduction to processes like Poisson processes, which are related to random events. (Chapter 10: Random Processes, Chapter 11: Poisson Processes).
*   **Papoulis & Pillai (4th ed., 2002):** Provides in-depth treatments of various random processes, including white noise and Gaussian processes. (Chapter 1: Introduction to Random Processes).
*   **Ross (6th ed., 2020):** Discusses various stochastic processes, including Brownian motion and Poisson processes. (Chapter 11: Stochastic Processes, Chapter 12: Brownian Motion and Poisson Processes).
*   **Palaniammal (3rd ed., 2015):** Likely covers common random processes and their applications.

---

### **7. Connection to Course Outcomes**

*   **CO1 & CO2:** While this module focuses on processes, understanding the underlying random variables that constitute them is crucial. Concepts like expectation and variance are directly applied to random variables within a process.
*   **CO4:** This module directly addresses the core of CO4.
    *   **Classifying them:** Understanding continuous-time vs. discrete-time, and state space.
    *   **Describing their properties:** Mean function, variance function, stationarity.
    *   **Utilizing autocorrelation functions:** This is a key tool for analysis.
    *   **Understanding their applications:** White noise is fundamental in signal processing and communications (e.g., modeling noise in channels). The concept of random processes underpins understanding random signals and system responses to them.

---

### **Important Points to Remember**

*   A random process is a collection of random variables indexed by time.
*   **Sample function** is a single realization; **ensemble** is the collection of all sample functions.
*   **Mean function** $m_X(t) = E[X(t)]$ and **variance function** $\sigma_X^2(t) = Var(X(t))$ characterize the process at each time point.
*   **Stationarity** simplifies analysis:
    *   **WSS:** Constant mean, ACF depends only on time difference.
    *   **SSS:** All statistical properties invariant to time shifts (stronger condition).
*   **Autocorrelation Function (ACF)** $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$ measures temporal dependence. For WSS, $R_X(\tau) = E[X(t)X(t+\tau)]$.
*   Key properties of ACF for WSS: Even, maximum at $\tau=0$, $R_X(0)$ is the mean square value.
*   **White Noise** has constant spectral density (uncorrelated samples in discrete time).
*   **Brownian Motion** is a fundamental continuous-time process with independent, normally distributed increments.

---

### **Practice Questions and Exercises**

**Question 1:**

A discrete-time random process is defined as $X[n] = A \cos(\omega n + \Theta)$, where $A$ and $\omega$ are constants, and $\Theta$ is a random variable uniformly distributed over $[0, 2\pi]$.

(a) Find the mean function $m_X[n] = E[X[n]]$.
(b) Find the autocorrelation function $R_X[n, m] = E[X[n]X[m]]$.
(c) Is this process wide-sense stationary? Justify your answer.

**Solution 1:**

(a) $E[X[n]] = E[A \cos(\omega n + \Theta)] = A \cos(\omega n) E[\cos(\Theta)] - A \sin(\omega n) E[\sin(\Theta)]$.
Since $\Theta \sim U[0, 2\pi]$, $E[\cos(\Theta)] = 0$ and $E[\sin(\Theta)] = 0$.
Therefore, $m_X[n] = 0$ for all $n$.

(b) $R_X[n, m] = E[X[n]X[m]]$
$R_X[n, m] = E[(A \cos(\omega n + \Theta))(A \cos(\omega m + \Theta))]$
$R_X[n, m] = A^2 E[\cos(\omega n + \Theta)\cos(\omega m + \Theta)]$
Using the product-to-sum formula: $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$
$A = \omega n + \Theta$, $B = \omega m + \Theta$
$A-B = \omega n - \omega m = \omega(n-m)$
$A+B = \omega n + \omega m + 2\Theta$
$R_X[n, m] = A^2 E\left[\frac{1}{2}[\cos(\omega(n-m)) + \cos(\omega(n+m) + 2\Theta)]\right]$
$R_X[n, m] = \frac{A^2}{2} E[\cos(\omega(n-m))] + \frac{A^2}{2} E[\cos(\omega(n+m) + 2\Theta)]$
Since $E[\cos(\phi + 2\Theta)]$ for $\Theta \sim U[0, 2\pi]$ is 0:
$E[\cos(\omega(n+m) + 2\Theta)] = 0$.
Thus, $R_X[n, m] = \frac{A^2}{2} \cos(\omega(n-m))$.

(c) For the process to be WSS, its mean must be constant (which it is, 0) and its autocorrelation function must depend only on the time difference $m-n$.
In our case, $R_X[n, m] = \frac{A^2}{2} \cos(\omega(n-m))$.
Let $\tau = m-n$. Then $R_X[n, m] = \frac{A^2}{2} \cos(\omega\tau)$.
This expression depends only on the difference $\tau = m-n$.
Therefore, the process is **wide-sense stationary**.

---

**Question 2:**

Consider a wide-sense stationary random process $Y(t)$ with mean $E[Y(t)] = 2$ and autocorrelation function $R_Y(\tau) = 5 \operatorname{sinc}(2\tau)$, where $\operatorname{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$.

(a) What is the mean square value of $Y(t)$?
(b) Is $Y(t)$ a power process or a deterministic process?
(c) Calculate the autocovariance function $C_Y(t_1, t_2)$.

**Solution 2:**

(a) The mean square value of a WSS process is $R_Y(0)$.
$R_Y(0) = 5 \operatorname{sinc}(2 \times 0) = 5 \operatorname{sinc}(0)$.
The limit of $\operatorname{sinc}(x)$ as $x \to 0$ is 1. So, $\operatorname{sinc}(0) = 1$.
Mean square value = $R_Y(0) = 5 \times 1 = 5$.

(b) A process is called a power process if its mean square value is finite and it does not tend to a constant value as $t \to \infty$. A deterministic process has a predictable future based on its current state.
Since the mean square value $R_Y(0) = 5$ is finite, and the autocorrelation $R_Y(\tau) = 5 \operatorname{sinc}(2\tau)$ tends to 0 as $|\tau| \to \infty$ (because $\operatorname{sinc}(x) \to 0$ as $|x| \to \infty$), the process is **a power process**. It is not deterministic because its autocorrelation is not of the form $(m_Y + \text{deterministic signal})^2$.

(c) The autocovariance function $C_Y(t_1, t_2)$ for a WSS process is given by:
$C_Y(t_1, t_2) = R_Y(t_1, t_2) - E[Y(t_1)]E[Y(t_2)]$
Since it's WSS, $R_Y(t_1, t_2) = R_Y(t_2 - t_1)$.
And $E[Y(t_1)] = E[Y(t_2)] = m_Y = 2$.
So, $C_Y(t_1, t_2) = R_Y(t_2 - t_1) - m_Y^2$
$C_Y(t_1, t_2) = 5 \operatorname{sinc}(2(t_2 - t_1)) - 2^2$
$C_Y(t_1, t_2) = 5 \frac{\sin(\pi \cdot 2(t_2 - t_1))}{\pi \cdot 2(t_2 - t_1)} - 4$
$C_Y(t_1, t_2) = \frac{5}{2\pi (t_2 - t_1)} \sin(2\pi (t_2 - t_1)) - 4$

---

### **Further Study Recommendations:**

*   Explore the relationship between autocorrelation functions and power spectral density (Fourier Transform of ACF). This is a cornerstone of signal processing.
*   Investigate specific applications of random processes in electrical engineering, such as modeling thermal noise, channel noise in communications, and random signals in control systems.
*   Understand the properties of Gaussian random processes, which are very common and mathematically tractable.

---
