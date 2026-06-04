---
title: "Random process concept"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 4: Random process concept"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4d4"
status: "completed"
scrapedAt: "2026-05-23T17:50:53.417Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 4: Random Process Concepts

This module introduces the fundamental concepts of random processes, which are crucial for understanding and modeling phenomena that evolve randomly over time in electrical science. We will explore how to classify random processes, describe their key properties, and utilize important tools like autocorrelation functions for analysis and application in areas such as signal processing and communication systems.

---

### Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   **Understand the definition and fundamental concepts of a random process.**
*   **Distinguish between different types of random processes and identify their key characteristics.**
*   **Describe and compute important properties of random processes, such as mean, variance, and autocorrelation.**
*   **Apply the concepts of random processes to analyze and model real-world phenomena in electrical science.**

---

### 1. Introduction to Random Processes (Stochastic Processes)

A **random process** (or stochastic process) is a collection of random variables indexed by time (or another parameter). It can be thought of as a system or phenomenon that evolves randomly over time.

**Key Concepts and Definitions:**

*   **Random Variable:** A function that assigns a numerical value to each outcome in a sample space. (Recall from previous modules).
*   **Sample Space ($\Omega$):** The set of all possible outcomes of an experiment.
*   **Sample Function (or Sample Path):** A single realization of the random process. For a given realization of the underlying random experiment, the random process generates a specific sequence of random variables over time, forming a sample function.
    *   *Example:* Imagine observing the voltage across a resistor with thermal noise. Each time you measure, you get a different voltage reading over time. A single continuous measurement over a period would be a sample function.
*   **State Space:** The set of all possible values that the random variables in the process can take.
*   **Index Set (Time Set $T$):** The set of indices that parameterize the random variables. This is typically time, but can also be space or other parameters.
    *   **Discrete-Time Random Process:** The index set $T$ is countable (e.g., $T = \{0, 1, 2, \dots\}$ or $T = \{\dots, -1, 0, 1, \dots\}$). These are also called **discrete-time stochastic processes** or **sequences of random variables**.
    *   **Continuous-Time Random Process:** The index set $T$ is an interval of real numbers (e.g., $T = [0, \infty)$ or $T = (-\infty, \infty)$). These are also called **continuous-time stochastic processes**.
*   **Ensemble:** The collection of all possible sample functions of a random process.

**Mathematical Definition:**

A random process $\{X(t) : t \in T\}$ is a collection of random variables, where $t$ is the index parameter (often time) and $X(t)$ is a random variable for each $t \in T$.

**Relationship to Course Outcomes:**

*   **CO4:** This module directly addresses the core concepts of analyzing random processes by classifying them and describing their properties.

**Textbook References:**

*   **Devore (9th ed.):** Introduces random variables and their distributions. While not explicitly on random processes, the foundation of random variables is essential. Chapters on discrete and continuous random variables will be foundational.
*   **Veerarajan (3rd ed.):** Chapter 10, "Random Processes," provides a direct introduction to the topic, covering definitions, classifications, and basic properties.
*   **Papoulis & Pillai (4th ed.):** Chapter 11, "Stochastic Processes," offers a more advanced and rigorous treatment.
*   **Ross (6th ed.):** Chapter 8, "Stochastic Processes," provides a solid introduction to the fundamentals.

---

### 2. Classification of Random Processes

Random processes can be classified based on their index set, state space, and statistical properties.

**Key Concepts and Definitions:**

*   **By Index Set:**
    *   **Discrete-Time Random Process:** As defined above (e.g., signal sampled at discrete time intervals).
    *   **Continuous-Time Random Process:** As defined above (e.g., voltage from a sensor continuously measuring).
*   **By State Space:**
    *   **Discrete-State Random Process:** The random variables $X(t)$ can take values from a discrete set (e.g., $\{0, 1\}$ for a binary signal).
    *   **Continuous-State Random Process:** The random variables $X(t)$ can take values from a continuous range (e.g., any real number for a noise voltage).
*   **By Statistical Properties:**
    *   **Stationary Process:** A process whose statistical properties do not change over time. This is a crucial concept for simplifying analysis.
        *   **Strict-Sense Stationarity (SSS):** The joint distribution of $\{X(t_1), X(t_2), \dots, X(t_n)\}$ is the same as the joint distribution of $\{X(t_1+h), X(t_2+h), \dots, X(t_n+h)\}$ for any $t_1, \dots, t_n$ and any $h$. This is a very strong condition.
        *   **Wide-Sense Stationarity (WSS):** A weaker condition that requires:
            1.  The mean function $E[X(t)]$ is constant for all $t$.
            2.  The autocorrelation function $E[X(t)X(t+\tau)]$ depends only on the time difference $\tau$, not on $t$.
    *   **Non-Stationary Process:** A process whose statistical properties change over time.
    *   **Independent Increment Process:** A process $X(t)$ where for any $t_0 < t_1 < \dots < t_n$, the random variables $X(t_1)-X(t_0), X(t_2)-X(t_1), \dots, X(t_n)-X(t_{n-1})$ are mutually independent.
    *   **Markov Process:** A process where the future state depends only on the present state, not on the past sequence of states. Formally, for $t_0 < t_1 < \dots < t_n$, $P(X(t_n) \leq x_n | X(t_0)=x_0, \dots, X(t_{n-1})=x_{n-1}) = P(X(t_n) \leq x_n | X(t_{n-1})=x_{n-1})$.
    *   **Ergodic Process:** A process where time averages are equal to ensemble averages. If a process is ergodic, we can estimate its statistical properties by observing a single sample function over a long period.

**Example:**

*   **Thermal noise in a resistor:** Often modeled as a continuous-time, continuous-state, WSS random process.
*   **Number of phone calls arriving at a switchboard:** Can be modeled as a discrete-time or continuous-time, discrete-state, independent increment process (Poisson process).
*   **Stock prices:** Typically modeled as continuous-time, continuous-state, non-stationary processes.

**Important Points to Remember:**

*   WSS is a more common and practical assumption than SSS.
*   Many important results in signal processing and communications rely on the assumption of WSS.

**Textbook References:**

*   **Veerarajan (3rd ed.):** Chapter 10 covers stationary processes (WSS and SSS) and Markov processes.
*   **Ross (6th ed.):** Chapter 8 discusses Markov chains (discrete-time Markov processes) and Poisson processes.
*   **Palaniammal (3rd ed.):** Chapter 1, "Random Processes," details classification, including stationary and Markov processes.

---

### 3. Properties of Random Processes

The key to analyzing random processes lies in understanding their statistical properties.

**Key Concepts and Definitions:**

*   **Mean Function (or Expected Value Function):**
    *   $m_X(t) = E[X(t)]$ for a continuous-time process.
    *   $m_X[n] = E[X[n]]$ for a discrete-time process.
    *   *Significance:* Represents the average value of the process at each point in time. For a WSS process, $m_X(t)$ is a constant.

*   **Autocorrelation Function (ACF):**
    *   $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$ for a continuous-time process.
    *   $R_X[n_1, n_2] = E[X[n_1]X[n_2]]$ for a discrete-time process.
    *   *Significance:* Measures the linear dependence between the process at two different time points. It tells us how correlated the process is with itself at different times.

*   **Autocovariance Function (ACVF):**
    *   $C_X(t_1, t_2) = Cov(X(t_1), X(t_2)) = E[(X(t_1) - m_X(t_1))(X(t_2) - m_X(t_2))] = R_X(t_1, t_2) - m_X(t_1)m_X(t_2)$.
    *   *Significance:* Measures the covariance between the process at two different time points. For a WSS process, $C_X(t_1, t_2) = C_X(\tau) = R_X(\tau) - m^2$, where $\tau = t_2 - t_1$.

*   **Variance Function:**
    *   $\sigma_X^2(t) = Var(X(t)) = E[(X(t) - m_X(t))^2] = R_X(t, t) - (m_X(t))^2$.
    *   *Significance:* Represents the spread or variability of the process at a specific time $t$. For a WSS process, $\sigma_X^2(t)$ is a constant.

**Properties of ACF for WSS Processes:**

If $X(t)$ is a WSS process, its ACF $R_X(\tau)$ has the following properties:

1.  $R_X(\tau) = R_X(-\tau)$ (Even function).
2.  $|R_X(\tau)| \leq R_X(0)$ (Maximum at $\tau=0$).
3.  $R_X(0) = E[X(t)^2] = \sigma_X^2 + m^2$ (Mean square value).
4.  $R_X(\tau)$ is non-negative definite.

**Power Spectral Density (PSD):**

For a WSS process, the Power Spectral Density $S_X(f)$ is the Fourier Transform of the autocorrelation function $R_X(\tau)$:

$S_X(f) = \mathcal{F}\{R_X(\tau)\} = \int_{-\infty}^{\infty} R_X(\tau) e^{-j2\pi f \tau} d\tau$

The Wiener-Khinchin theorem states that $R_X(\tau)$ is the inverse Fourier Transform of $S_X(f)$:

$R_X(\tau) = \mathcal{F}^{-1}\{S_X(f)\} = \int_{-\infty}^{\infty} S_X(f) e^{j2\pi f \tau} df$

*   *Significance:* The PSD describes how the power of a random process is distributed over frequency. It is a fundamental tool in signal processing.

**Relationship to Course Outcomes:**

*   **CO4:** Directly addresses utilizing autocorrelation functions and understanding properties of random processes.
*   **CO1 & CO2:** Understanding these properties builds upon the concepts of mean and variance for individual random variables.

**Example:**

Consider a WSS random process $X(t)$ with mean $m_X(t) = 2$ and autocorrelation function $R_X(\tau) = 5e^{-|\tau|}$.

*   **Mean Function:** $m_X(t) = 2$.
*   **Autocorrelation Function:** $R_X(\tau) = 5e^{-|\tau|}$.
*   **Autocovariance Function:** $C_X(\tau) = R_X(\tau) - m_X^2 = 5e^{-|\tau|} - 2^2 = 5e^{-|\tau|} - 4$.
*   **Variance:** $\sigma_X^2 = R_X(0) - m_X^2 = 5e^{-0} - 4 = 5 - 4 = 1$.

Let's find the PSD:
$S_X(f) = \int_{-\infty}^{\infty} 5e^{-|\tau|} e^{-j2\pi f \tau} d\tau$
$S_X(f) = 5 \int_{-\infty}^{\infty} e^{-|\tau|} (\cos(2\pi f \tau) - j\sin(2\pi f \tau)) d\tau$
Since $e^{-|\tau|}$ is even, the integral of $e^{-|\tau|}\sin(2\pi f \tau)$ is zero.
$S_X(f) = 5 \int_{-\infty}^{\infty} e^{-|\tau|} \cos(2\pi f \tau) d\tau$
$S_X(f) = 5 \left( \int_{-\infty}^{0} e^{\tau} \cos(2\pi f \tau) d\tau + \int_{0}^{\infty} e^{-\tau} \cos(2\pi f \tau) d\tau \right)$
Using the integral $\int_{0}^{\infty} e^{-a\tau} \cos(b\tau) d\tau = \frac{a}{a^2+b^2}$ and noting that $\cos(x)$ is even, the integral from $-\infty$ to $0$ is the same as from $0$ to $\infty$.
$S_X(f) = 5 \left( \frac{1}{1^2 + (2\pi f)^2} + \frac{1}{1^2 + (2\pi f)^2} \right) = 5 \frac{2}{1 + 4\pi^2 f^2} = \frac{10}{1 + 4\pi^2 f^2}$.

**Textbook References:**

*   **Devore (9th ed.):** Chapters on expected value and variance for random variables.
*   **Veerarajan (3rd ed.):** Chapter 10 details mean, autocorrelation, and PSD.
*   **Papoulis & Pillai (4th ed.):** Chapter 11 extensively covers correlation functions and spectral densities.
*   **Ross (6th ed.):** Discusses properties of random processes, especially in the context of specific models.
*   **Anderson et al. (1st ed.):** Chapters on expectations and correlations of random variables.

---

### 4. Important Models of Random Processes

Several standard random process models are widely used in electrical science.

**Key Concepts and Definitions:**

*   **White Noise:**
    *   A random process with a constant power spectral density $S_X(f) = N_0/2$ for all frequencies (or $S_X(\omega) = N_0/2$ if using angular frequency $\omega$).
    *   In discrete time, white noise often refers to a sequence of independent random variables with zero mean and constant variance. If they are also Gaussian, it's called **Gaussian White Noise**.
    *   *Ideal White Noise:* Theoretically has infinite bandwidth.
    *   *Practical Approximation:* Often approximated by a process with a very wide, but finite, bandwidth.
    *   *ACF:* For a continuous-time WSS process, $R_X(\tau) = (N_0/2)\delta(\tau)$, where $\delta(\tau)$ is the Dirac delta function. This implies that samples at different times are uncorrelated.

*   **Gaussian Process:**
    *   A process where any finite collection of random variables $\{X(t_1), X(t_2), \dots, X(t_n)\}$ has a multivariate Gaussian distribution.
    *   A WSS Gaussian process is fully characterized by its mean function $m_X(t)$ and its autocorrelation function $R_X(\tau)$.

*   **Poisson Process:**
    *   A counting process that models the number of events occurring in a given time interval.
    *   Key properties:
        *   $N(0) = 0$.
        *   The number of events in non-overlapping intervals are independent.
        *   The probability of exactly one event occurring in a very small interval $\Delta t$ is approximately $\lambda \Delta t$.
        *   The probability of more than one event in $\Delta t$ is negligible.
    *   If $N(t)$ is a Poisson process with rate $\lambda$, then $E[N(t)] = \lambda t$ and $Var(N(t)) = \lambda t$.
    *   The inter-arrival times (time between consecutive events) are exponentially distributed with mean $1/\lambda$.

*   **Random Walk:**
    *   A process that starts at some value and at each step moves by a random amount.
    *   Example: $X[n] = X[n-1] + Z[n]$, where $Z[n]$ are independent random variables.

**Applications in Electrical Science:**

*   **White Noise:** Modeling thermal noise, shot noise, atmospheric noise in communication systems, signal processing filters.
*   **Gaussian Process:** Modeling signals corrupted by additive Gaussian noise, channel modeling.
*   **Poisson Process:** Modeling arrivals of packets in a network, call arrivals in a telecommunication system, photon counts in optical systems.
*   **Random Walk:** Modeling the movement of particles, stock prices, error accumulation in digital systems.

**Relationship to Course Outcomes:**

*   **CO4:** Understanding these models is crucial for applying random process concepts in areas like signal processing and communication systems.
*   **CO1 & CO2:** These models are examples of discrete and continuous random variables evolving over time.

**Example:**

Consider the arrival of data packets at a router. If packets arrive independently at an average rate of 10 packets per second, and the arrival of any packet is independent of the arrival of other packets, this can be modeled by a Poisson process with rate $\lambda = 10$.

*   The expected number of packets arriving in 5 seconds is $E[N(5)] = 10 \times 5 = 50$.
*   The probability of exactly 3 packets arriving in a 1-second interval can be calculated using the Poisson probability mass function: $P(N(1)=k) = \frac{e^{-\lambda t}(\lambda t)^k}{k!} = \frac{e^{-10}(10)^3}{3!}$.

**Textbook References:**

*   **Devore (9th ed.):** Chapter 3 on discrete random variables covers the Poisson distribution, which is fundamental to the Poisson process. Chapter 4 on continuous random variables covers the exponential distribution for inter-arrival times.
*   **Veerarajan (3rd ed.):** Chapter 10 discusses Poisson processes and Gaussian processes.
*   **Ross (6th ed.):** Chapter 8 discusses Poisson processes and random walks.
*   **Palaniammal (3rd ed.):** Chapter 1 covers white noise and Poisson processes.

---

### 5. Applications in Electrical Science

Random processes are ubiquitous in electrical engineering.

**Key Areas of Application:**

*   **Signal Processing:**
    *   **Filtering:** Designing filters to remove noise or extract specific frequency components from signals. The properties of the noise (e.g., its PSD) are critical here.
    *   **Spectral Analysis:** Understanding the frequency content of signals and noise using PSD.
    *   **Detection and Estimation:** Estimating unknown signal parameters or detecting signals in the presence of noise.
*   **Communication Systems:**
    *   **Channel Modeling:** Modeling noise and interference in communication channels (e.g., additive white Gaussian noise - AWGN).
    *   **Error Control Coding:** Analyzing the probability of errors in transmission due to noise.
    *   **Modulation and Demodulation:** Understanding how random processes affect the performance of communication systems.
*   **Control Systems:**
    *   **System Identification:** Estimating system parameters from noisy measurements.
    *   **Stochastic Control:** Designing controllers for systems with random disturbances.
*   **Reliability Engineering:**
    *   Modeling the time to failure of components or systems, often using processes like the Poisson process.
*   **Image Processing:**
    *   Modeling noise in images and developing denoising algorithms.

**Example:**

In a digital communication system, a transmitted binary signal is corrupted by Additive White Gaussian Noise (AWGN). The received signal $Y(t)$ can be modeled as $Y(t) = S(t) + N(t)$, where $S(t)$ is the transmitted signal (which might be deterministic or a random process itself) and $N(t)$ is AWGN. The AWGN is typically modeled as a Gaussian process with zero mean and a constant power spectral density $N_0/2$. Understanding the properties of $N(t)$ is crucial for designing receivers that can reliably detect the transmitted bits.

**Relationship to Course Outcomes:**

*   **CO4:** This outcome is directly focused on understanding applications of random processes in signal processing and communication systems.

**Textbook References:**

*   All textbooks provide examples of applications in various engineering domains. Devore and Ross often have specific examples in signal processing contexts. Papoulis is a classic for signal processing applications.

---

### Practice Questions and Exercises

**Instructions:** Attempt the following questions to test your understanding.

**Question 1:**
Define a random process. Differentiate between a discrete-time and a continuous-time random process. Provide an example of each in the context of electrical science.

**Question 2:**
Explain the concept of Wide-Sense Stationarity (WSS). What are the two conditions required for a process to be WSS?

**Question 3:**
Consider a WSS random process $X(t)$ with mean $E[X(t)] = 5$ and autocorrelation function $R_X(\tau) = 25 + 10e^{-0.5|\tau|}$.
a) Calculate the variance of the process.
b) Calculate the autocovariance function $C_X(\tau)$.
c) If $X(t)$ is sampled at $t_1=0$ and $t_2=2$, what is $E[X(0)X(2)]$?

**Question 4:**
What is the physical interpretation of the Power Spectral Density (PSD) of a random process? If the autocorrelation function of a WSS process is $R_X(\tau) = Ae^{-\alpha|\tau|}$, find its PSD.

**Question 5:**
Describe the key characteristics of a Poisson process. What is the probability of exactly 4 events occurring in a 10-second interval for a Poisson process with a rate of $\lambda = 0.2$ events per second?

---

### Answers to Practice Questions

**Answer 1:**
A **random process** is a collection of random variables indexed by time (or another parameter). It describes systems or phenomena that evolve randomly over time.

*   **Discrete-time random process:** The index set is countable. Example: The sequence of voltage measurements of a signal taken at regular intervals, e.g., $V[n]$ where $n=0, 1, 2, \dots$.
*   **Continuous-time random process:** The index set is an interval of real numbers. Example: The continuous voltage output of a temperature sensor over time, $T(t)$ where $t \in [0, \infty)$.

**Answer 2:**
A process $X(t)$ is **Wide-Sense Stationary (WSS)** if:
1.  Its mean function is constant for all time: $E[X(t)] = m$ for all $t$.
2.  Its autocorrelation function depends only on the time difference $\tau = t_2 - t_1$: $E[X(t)X(t+\tau)] = R_X(\tau)$.

**Answer 3:**
Given $E[X(t)] = 5$ and $R_X(\tau) = 25 + 10e^{-0.5|\tau|}$.
a) **Variance:** $\sigma_X^2 = R_X(0) - (E[X(t)])^2 = (25 + 10e^{-0.5|0|}) - 5^2 = (25 + 10) - 25 = 10$.
b) **Autocovariance function:** $C_X(\tau) = R_X(\tau) - (E[X(t)])^2 = (25 + 10e^{-0.5|\tau|}) - 5^2 = 25 + 10e^{-0.5|\tau|} - 25 = 10e^{-0.5|\tau|}$.
c) $E[X(0)X(2)] = R_X(t_1, t_2) = R_X(t_2 - t_1)$. Here, $t_1=0, t_2=2$, so $\tau = 2 - 0 = 2$.
$E[X(0)X(2)] = R_X(2) = 25 + 10e^{-0.5|2|} = 25 + 10e^{-1}$.

**Answer 4:**
The **Power Spectral Density (PSD)**, $S_X(f)$, describes how the power of a random process is distributed across different frequencies. It represents the rate at which energy is transmitted or processed at each frequency.

For $R_X(\tau) = Ae^{-\alpha|\tau|}$, its PSD is:
$S_X(f) = \int_{-\infty}^{\infty} Ae^{-\alpha|\tau|} e^{-j2\pi f \tau} d\tau$
Using the integral $\int_{-\infty}^{\infty} e^{-a|\tau|} \cos(b\tau) d\tau = \frac{2a}{a^2+b^2}$:
$S_X(f) = A \left( \int_{-\infty}^{\infty} e^{-\alpha|\tau|} (\cos(2\pi f \tau) - j\sin(2\pi f \tau)) d\tau \right)$
Since $e^{-\alpha|\tau|}$ is even and $\sin(2\pi f \tau)$ is odd, the sine term integral is zero.
$S_X(f) = A \int_{-\infty}^{\infty} e^{-\alpha|\tau|} \cos(2\pi f \tau) d\tau = A \left( \frac{2\alpha}{\alpha^2 + (2\pi f)^2} \right) = \frac{2A\alpha}{\alpha^2 + 4\pi^2 f^2}$.

**Answer 5:**
A **Poisson process** counts the number of events that occur in a given time interval. Its key characteristics are:
1.  $N(0) = 0$.
2.  The number of events in non-overlapping time intervals are independent.
3.  The probability of exactly one event in a small interval $\Delta t$ is approximately $\lambda \Delta t$.
4.  The probability of more than one event in $\Delta t$ is negligible.

For a Poisson process with rate $\lambda = 0.2$ events per second, we want to find the probability of exactly 4 events in $t=10$ seconds.
The expected number of events in 10 seconds is $\lambda t = 0.2 \times 10 = 2$.
Using the Poisson probability formula $P(N(t)=k) = \frac{e^{-\lambda t}(\lambda t)^k}{k!}$:
$P(N(10)=4) = \frac{e^{-2}(2)^4}{4!} = \frac{e^{-2} \times 16}{24} = \frac{2}{3}e^{-2} \approx 0.0902$.

---

### Important Points to Remember:

*   Random processes generalize random variables to phenomena evolving over time.
*   The distinction between discrete-time and continuous-time, and discrete-state and continuous-state processes is fundamental.
*   Stationarity (especially WSS) simplifies analysis significantly by making statistical properties time-invariant.
*   The mean function and autocorrelation function are key descriptors of a random process.
*   The PSD provides a frequency-domain representation of a random process's power.
*   White noise is a fundamental model with constant PSD, crucial for modeling noise in systems.
*   Poisson processes are essential for counting random events over time.
*   Understanding these concepts is vital for analyzing and designing electrical systems operating in the presence of randomness.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
