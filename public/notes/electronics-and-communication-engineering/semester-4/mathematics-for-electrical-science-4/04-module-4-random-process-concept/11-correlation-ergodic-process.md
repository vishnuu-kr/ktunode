---
title: "Correlation Ergodic Process"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 4: Random process concept"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4de"
status: "completed"
scrapedAt: "2026-05-23T17:51:00.609Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 4: Random Process Concepts

### Topic: Correlation Ergodic Process

**Learning Outcomes:**

*   Understand the concept of a random process and its statistical properties.
*   Define and analyze the autocorrelation function of a random process.
*   Understand the concept of stationarity and its different types.
*   Define and understand the properties of an ergodic process.
*   Relate the autocorrelation function to the concept of ergodicity.
*   Apply these concepts to analyze signals in electrical engineering contexts.

**Course Outcomes Alignment:**

This topic directly aligns with **CO4: Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems.** The knowledge level required is K3, implying the ability to apply these concepts.

---

### 1. Introduction to Random Processes

A random process (or stochastic process) is a collection of random variables indexed by time (or space). It can be thought of as a function of time whose values are random.

**Key Concepts:**

*   **Random Variable vs. Random Process:** A random variable takes on a single numerical value with a certain probability. A random process takes on an entire function of time as its outcome.
*   **Ensemble:** The collection of all possible outcomes (realizations or sample functions) of a random process.
*   **Realization (Sample Function):** A single observed time history of the random process.

**Example:**

Consider the noise voltage across a resistor due to thermal agitation. At any given instant, the voltage is a random variable. Over time, this voltage fluctuates randomly, forming a time-varying function. This collection of all possible voltage fluctuations over time is the random process. A single recorded voltage fluctuation is a realization.

**Textbook References:**

*   **Devore (9th ed.):** Introduces random variables and then extends to random processes as collections of random variables. Emphasis on understanding the probabilistic nature of these time-varying phenomena.
*   **Veerarajan (3rd ed.):** Provides a solid foundation in defining random processes, distinguishing between discrete and continuous time processes, and introducing the concept of an ensemble.

---

### 2. Statistical Description of Random Processes

To analyze random processes, we use statistical measures, similar to how we describe random variables.

**Key Concepts:**

*   **Probability Distributions/Densities:** For a random process $X(t)$, we can define probability distributions for the random variables $X(t_1), X(t_2), ..., X(t_n)$ at different time instants.
    *   **First-order distribution:** Describes the probability of $X(t)$ being in a certain range at a single time $t$.
    *   **Second-order distribution:** Describes the joint probability of $X(t_1)$ and $X(t_2)$ being in certain ranges at two different times $t_1$ and $t_2$.
    *   And so on for higher-order distributions.
*   **Mean Function (Average of the Ensemble):** $\mu_X(t) = E[X(t)]$. This represents the average value of the random process at time $t$ over all possible realizations.
*   **Autocovariance Function:** $C_X(t_1, t_2) = E[(X(t_1) - \mu_X(t_1))(X(t_2) - \mu_X(t_2))]$. Measures the linear dependence between the values of the process at two different times.
*   **Autocorrelation Function:** $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$. This is a fundamental function that characterizes the temporal dependence of the random process.

**Relationship between Autocovariance and Autocorrelation:**

$R_X(t_1, t_2) = C_X(t_1, t_2) + \mu_X(t_1)\mu_X(t_2)$

**Properties of Autocorrelation Function:**

1.  $R_X(t_1, t_2) = R_X^*(t_2, t_1)$ (Conjugate symmetry for complex processes)
2.  $R_X(t, t) = E[X^2(t)] \ge 0$ (Non-negativity on the diagonal)
3.  $|R_X(t_1, t_2)| \le \sqrt{E[X^2(t_1)]E[X^2(t_2)]} = \sqrt{R_X(t_1, t_1)R_X(t_2, t_2)}$ (Boundedness)
4.  For real processes, $R_X(t_1, t_2) = R_X(t_2, t_1)$.

**Textbook References:**

*   **Papoulis & Pillai (4th ed.):** Dedicates significant chapters to the statistical description of random processes, including detailed derivations of the properties of autocorrelation functions and their significance.
*   **Ross (6th ed.):** Introduces autocorrelation as a measure of similarity between different time instances of a random process, often in the context of queueing theory and signal processing applications.

---

### 3. Stationarity

Stationarity is a crucial property that simplifies the analysis of random processes. A stationary process has statistical properties that do not change over time.

**Key Concepts:**

*   **Strict-Sense Stationarity (SSS):** A random process $X(t)$ is strictly-sense stationary if the joint probability distribution of $\{X(t_1), X(t_2), ..., X(t_n)\}$ is the same as the joint probability distribution of $\{X(t_1+c), X(t_2+c), ..., X(t_n+c)\}$ for any $n$, any set of time instants $\{t_1, ..., t_n\}$, and any time shift $c$.
    *   This is a very strong condition and often difficult to verify.
*   **Wide-Sense Stationarity (WSS):** A random process $X(t)$ is wide-sense stationary if:
    1.  $E[X(t)] = \mu$ (a constant, independent of time $t$).
    2.  $E[X(t_1)X(t_2)] = R_X(t_2 - t_1)$ (depends only on the time difference, not on $t_1$ or $t_2$ individually).

**Implications of WSS:**

*   If a process is WSS, its autocorrelation function depends only on the time lag $\tau = t_2 - t_1$. We can then denote it as $R_X(\tau)$.
*   $R_X(\tau) = E[X(t)X(t+\tau)]$.
*   For a WSS process, the mean function $\mu_X(t)$ is constant, $\mu_X(t) = \mu$.
*   The autocovariance function becomes $C_X(\tau) = R_X(\tau) - \mu^2$.

**Properties of Autocorrelation Function for WSS processes ($R_X(\tau)$):**

1.  $R_X(\tau) = R_X^*(-\tau)$ (Conjugate symmetry)
2.  $R_X(0) = E[X^2(t)] = \sigma_X^2 + \mu^2$ (Maximum value, variance plus mean squared)
3.  $|R_X(\tau)| \le R_X(0)$ (Boundedness)
4.  For real processes, $R_X(\tau) = R_X(-\tau)$ (Even function).
5.  $R_X(\tau)$ is a non-negative definite function. This property is crucial for spectral analysis (Wiener-Khinchin theorem).

**Textbook References:**

*   **Devore (9th ed.):** Introduces stationarity as a simplifying assumption in random process analysis, focusing on WSS for its practical implications in correlation and spectral analysis.
*   **Veerarajan (3rd ed.):** Clearly defines both SSS and WSS, highlighting that WSS is often more practical to work with. Provides examples of processes that are WSS but not SSS.
*   **Palaniammal (3rd ed.):** Discusses stationarity extensively, linking it to the properties of the autocorrelation function and providing examples of stationary and non-stationary processes.

---

### 4. Ergodic Processes

Ergodicity is a powerful concept that relates the time averages of a single realization to the ensemble averages of the random process.

**Key Concepts:**

*   **Ergodic Process:** A random process $X(t)$ is ergodic if its time averages are equal to its ensemble averages. This means we can infer the properties of the entire ensemble by observing just one sufficiently long realization.
*   **Time Average of a Realization:** $\langle X(t) \rangle = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} X(t) dt$ (for the mean)
    $\langle X(t)X(t+\tau) \rangle = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} X(t)X(t+\tau) dt$ (for the autocorrelation)

**Types of Ergodicity:**

*   **Mean Ergodic:** The time average of the process equals the ensemble mean.
    $\lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} X(t) dt = E[X(t)]$
*   **Autocorrelation Ergodic (or Ergodic in Correlation):** The time-averaged product of the process with a time-shifted version equals the ensemble autocorrelation.
    $\lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} X(t)X(t+\tau) dt = E[X(t)X(t+\tau)] = R_X(\tau)$

**Important Link: WSS and Ergodicity**

A **WSS process is ergodic (in correlation) if and only if** the time average of its autocorrelation function equals the ensemble autocorrelation function at lag $\tau$. This is the core of the "Correlation Ergodic Process" topic.

If a WSS process is correlation ergodic, then:

1.  **Mean:** The time average of the sample function $X(t)$ converges to the ensemble mean $\mu$.
    $\langle X(t) \rangle = \mu$
2.  **Autocorrelation:** The time average of $X(t)X(t+\tau)$ converges to the ensemble autocorrelation $R_X(\tau)$.
    $\langle X(t)X(t+\tau) \rangle = R_X(\tau)$

**What does this mean for electrical science?**

If a signal is a correlation ergodic process, we can estimate its autocorrelation function by simply taking a single sample function, shifting it, multiplying it by itself, and averaging over time. This is practically very useful, as it avoids the need to collect data from many different realizations of the same process.

**Textbook References:**

*   **Papoulis & Pillai (4th ed.):** Provides a rigorous mathematical treatment of ergodicity, defining different types of ergodicity and their implications. The focus is on the relationship between time and ensemble averages.
*   **Veerarajan (3rd ed.):** Clearly explains the concept of ergodicity as the interchangeability of time and ensemble averages. Highlights that if a process is ergodic, its statistical properties can be estimated from a single realization.
*   **Palaniammal (3rd ed.):** Defines ergodicity and explains how it allows for the estimation of process parameters from a single sample function. Examples are given to illustrate the concept.
*   **Anderson, Benedek (1st ed.):** Might touch upon ergodicity in the context of system identification or parameter estimation, where understanding if a process is ergodic is crucial for using time-domain measurements.

**Important Point to Remember:**

*   A process is not necessarily ergodic just because it is WSS. However, WSS is a prerequisite for most practical forms of ergodicity.
*   If a process is WSS and correlation ergodic, then its autocorrelation function $R_X(\tau)$ can be estimated as the time average: $R_X(\tau) = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} X(t)X(t+\tau) dt$.

---

### 5. Examples and Applications

**Example 1: White Noise (Idealized)**

An idealized white noise process $W(t)$ is defined by:
*   $E[W(t)] = 0$ for all $t$.
*   $R_W(\tau) = E[W(t)W(t+\tau)] = \sigma_w^2 \delta(\tau)$, where $\delta(\tau)$ is the Dirac delta function.

This process is WSS. It can be shown that idealized white noise is also correlation ergodic.

**Implication:** We can estimate the "power spectral density" (related to $\sigma_w^2$) from a single sample of white noise by observing its average squared value over time.

**Example 2: Sinusoidal Signal with Random Phase**

Let $X(t) = A \cos(\omega_0 t + \Theta)$, where $A$ and $\omega_0$ are constants, and $\Theta$ is a random variable uniformly distributed over $[0, 2\pi)$.

*   **Mean:** $E[X(t)] = E[A \cos(\omega_0 t + \Theta)] = A \cos(\omega_0 t) E[\cos(\Theta)] - A \sin(\omega_0 t) E[\sin(\Theta)]$. Since $\Theta$ is uniform on $[0, 2\pi)$, $E[\cos(\Theta)] = 0$ and $E[\sin(\Theta)] = 0$. So, $E[X(t)] = 0$. This is a constant, so the first condition for WSS is met.
*   **Autocorrelation:**
    $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$
    $R_X(t_1, t_2) = E[A \cos(\omega_0 t_1 + \Theta) A \cos(\omega_0 t_2 + \Theta)]$
    $R_X(t_1, t_2) = A^2 E[\cos(\omega_0 t_1 + \Theta) \cos(\omega_0 t_2 + \Theta)]$
    Using $\cos A \cos B = \frac{1}{2}(\cos(A-B) + \cos(A+B))$:
    $R_X(t_1, t_2) = \frac{A^2}{2} E[\cos(\omega_0(t_1-t_2)) + \cos(\omega_0(t_1+t_2) + 2\Theta)]$
    $R_X(t_1, t_2) = \frac{A^2}{2} [\cos(\omega_0(t_1-t_2)) + E[\cos(\omega_0(t_1+t_2) + 2\Theta)]]$
    The expectation of $\cos(\omega_0(t_1+t_2) + 2\Theta)$ is zero because $2\Theta$ is also uniformly distributed over $[0, 4\pi)$.
    So, $R_X(t_1, t_2) = \frac{A^2}{2} \cos(\omega_0(t_1-t_2))$.

    This autocorrelation function depends only on the time difference $\tau = t_2 - t_1$.
    $R_X(\tau) = \frac{A^2}{2} \cos(\omega_0 \tau)$.
    This confirms the process is WSS.

*   **Ergodicity:** This process is also correlation ergodic. This means the time average of $X(t)X(t+\tau)$ will converge to $\frac{A^2}{2} \cos(\omega_0 \tau)$.

**Applications in Electrical Science:**

*   **Signal Processing:** Estimating the power spectral density of signals corrupted by noise. Understanding correlation helps in designing filters and detectors.
*   **Communication Systems:** Analyzing the performance of communication channels, characterizing noise, and designing modulation/demodulation schemes.
*   **Control Systems:** Analyzing the stability and response of systems subjected to random inputs.
*   **Image Processing:** Analyzing textures and patterns in images, which can be modeled as 2D random processes.

**Textbook References:**

*   **All textbooks** provide examples of signals (like modulated carriers, noise, etc.) and analyze their stationarity and ergodicity. Devore and Ross often use practical engineering examples.

---

### 6. Practice Questions and Answers

**Question 1:**
A random process $X(t)$ has an autocorrelation function $R_X(\tau) = 10 e^{-2|\tau|}$. Is this process WSS? If so, what is its mean and variance, assuming the process is also mean ergodic?

**Answer 1:**
Yes, the process is WSS because the autocorrelation function $R_X(\tau)$ depends only on the time lag $\tau$.
*   The mean is $\mu = E[X(t)]$. For a correlation ergodic process, the mean can be found by taking the limit of $R_X(\tau)$ as $\tau \to \infty$:
    $\mu = \lim_{\tau \to \infty} R_X(\tau) = \lim_{\tau \to \infty} 10 e^{-2|\tau|} = 0$.
    So, $E[X(t)] = 0$.
*   The variance is $\sigma_X^2 = Var(X(t)) = E[X^2(t)] - (E[X(t)])^2$.
    For a WSS process, $E[X^2(t)] = R_X(0)$.
    $R_X(0) = 10 e^{-2|0|} = 10$.
    So, $\sigma_X^2 = R_X(0) - \mu^2 = 10 - 0^2 = 10$.
    The variance is 10.

**Question 2:**
Consider a random process $Y(t) = S \cos(\omega_0 t + \Phi)$, where $S$ is a constant, $\omega_0$ is a constant, and $\Phi$ is a random variable uniformly distributed in $[0, 2\pi)$. Calculate the autocorrelation function $R_Y(\tau)$ and determine if the process is WSS.

**Answer 2:**
*   **Mean:** $E[Y(t)] = E[S \cos(\omega_0 t + \Phi)] = S \cos(\omega_0 t) E[\cos(\Phi)] - S \sin(\omega_0 t) E[\sin(\Phi)]$.
    Since $\Phi$ is uniform on $[0, 2\pi)$, $E[\cos(\Phi)] = 0$ and $E[\sin(\Phi)] = 0$.
    Thus, $E[Y(t)] = 0$. This is constant.
*   **Autocorrelation:**
    $R_Y(t_1, t_2) = E[Y(t_1)Y(t_2)]$
    $R_Y(t_1, t_2) = E[S \cos(\omega_0 t_1 + \Phi) \cdot S \cos(\omega_0 t_2 + \Phi)]$
    $R_Y(t_1, t_2) = S^2 E[\cos(\omega_0 t_1 + \Phi) \cos(\omega_0 t_2 + \Phi)]$
    Using $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$:
    $R_Y(t_1, t_2) = \frac{S^2}{2} E[\cos(\omega_0(t_1-t_2)) + \cos(\omega_0(t_1+t_2) + 2\Phi)]$
    $R_Y(t_1, t_2) = \frac{S^2}{2} [\cos(\omega_0(t_1-t_2)) + E[\cos(\omega_0(t_1+t_2) + 2\Phi)]]$
    Since $2\Phi$ is uniformly distributed over $[0, 4\pi)$, its cosine expectation is zero.
    $R_Y(t_1, t_2) = \frac{S^2}{2} \cos(\omega_0(t_1-t_2))$.
    Let $\tau = t_2 - t_1$. Then $R_Y(\tau) = \frac{S^2}{2} \cos(\omega_0 \tau)$.
*   **WSS:** Since $E[Y(t)]$ is constant and $R_Y(t_1, t_2)$ depends only on $\tau = t_2 - t_1$, the process $Y(t)$ is WSS.

**Question 3:**
What is the fundamental difference in how we estimate the autocorrelation function of a process if it is WSS versus WSS and correlation ergodic?

**Answer 3:**
*   **WSS (but not necessarily ergodic):** The autocorrelation function $R_X(\tau)$ is defined as an *ensemble average*: $R_X(\tau) = E[X(t)X(t+\tau)]$. To estimate this, we would ideally need to observe many different realizations of the process at the same time instances $t$ and $t+\tau$, multiply them, and average.
*   **WSS and Correlation Ergodic:** The autocorrelation function $R_X(\tau)$ can be estimated from a *single realization* using a time average: $R_X(\tau) = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} X(t)X(t+\tau) dt$. This makes estimation much more practical in many real-world scenarios.

---

### 7. Important Points to Remember

*   **Random Process:** A time-varying random phenomenon.
*   **WSS:** Mean is constant, autocorrelation depends only on time lag.
*   **Autocorrelation Function ($R_X(\tau)$ for WSS):** Describes the correlation between values of the process at different time instances separated by $\tau$.
*   **Ergodicity:** Time averages equal ensemble averages.
*   **Correlation Ergodicity:** Specifically, time average of $X(t)X(t+\tau)$ equals ensemble average $E[X(t)X(t+\tau)]$.
*   **Practical Significance:** If a process is WSS and correlation ergodic, we can estimate its autocorrelation function (and hence its power spectral density) from a single observed sample function. This is a cornerstone of statistical signal processing.
*   **$\boldsymbol{R_X(0)}$:** Represents the mean-square value $E[X^2(t)]$. For a WSS process with mean $\mu$, $R_X(0) = \sigma_X^2 + \mu^2$.

---

This set of notes covers the fundamental concepts of correlation and ergodic processes, essential for analyzing random signals in electrical science. The provided textbook references will offer deeper insights and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
