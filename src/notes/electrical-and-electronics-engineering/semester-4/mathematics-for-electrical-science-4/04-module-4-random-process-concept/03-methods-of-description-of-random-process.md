---
title: "Methods of Description of Random process"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 4: Random process concept"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35db2"
status: "completed"
scrapedAt: "2026-05-23T16:17:06.597Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4: Module 4 - Random Process Concept

## Topic: Methods of Description of Random Process

### Introduction

Random processes are fundamental to understanding and analyzing systems that evolve randomly over time, which is ubiquitous in electrical engineering, especially in areas like signal processing, communication systems, control systems, and noise analysis. This module focuses on how to describe and characterize these random processes.

### 1. What is a Random Process?

A **random process** (or stochastic process) is a collection of random variables indexed by time (or sometimes another parameter like space). For each point in time $t$, the value of the random process $X(t)$ is a random variable.

**Key Concepts:**

*   **State Space:** The set of all possible values that the random variables in the process can take.
*   **Index Set:** The set of time instants (or other parameters) over which the process is defined. This can be discrete (e.g., integer time steps) or continuous (e.g., real-valued time).
*   **Sample Function (or Sample Path):** A single realization of the random process over time. It's a deterministic function of time that represents one possible outcome of the random experiment.

**Example (Devore, 9th ed., Chapter 13):**

Imagine measuring the voltage across a resistor with thermal noise. At any given time $t$, the voltage $X(t)$ is a random variable. The collection of all such random variables $\{X(t) | t \ge 0\}$ constitutes a random process. A specific measurement of this voltage over a period of time would be a sample function.

**Connection to Course Outcomes:**
*   **CO4:** This forms the foundation for analyzing random processes by classifying them and understanding their properties.

---

### 2. Methods of Describing a Random Process

There are several ways to describe a random process, ranging from elementary descriptions to more advanced statistical characterizations.

#### 2.1. Elementary Description: Sample Functions

The most intuitive way to understand a random process is by observing its sample functions. However, this is not a complete mathematical description as it only provides one realization.

**Example:**
Consider the process of coin flips at discrete time steps: $X_n$, where $X_n = 1$ if the $n$-th flip is heads, and $X_n = 0$ if tails.
A sample function could be: 1, 0, 1, 1, 0, 0, 1, ...

**Important Point:** A single sample function does not tell us about the randomness or the probability distributions involved.

#### 2.2. Statistical Description: Probability Distributions

A more rigorous description involves specifying the probability distributions of the random variables in the process.

**2.2.1. Finite-Dimensional Distributions (Joint Distributions)**

A complete statistical description of a random process is given by the collection of all finite-dimensional joint distribution functions. For any set of time instants $t_1, t_2, ..., t_n$, the joint distribution function $F(x_1, x_2, ..., x_n; t_1, t_2, ..., t_n)$ is defined as:

$F(x_1, x_2, ..., x_n; t_1, t_2, ..., t_n) = P(X(t_1) \le x_1, X(t_2) \le x_2, ..., X(t_n) \le x_n)$

**Example (Veerarajan, 3rd ed., Chapter 9):**
Consider a discrete-time random process $X_n$ representing the number of customers arriving at a store in the $n$-th hour. To describe this process statistically, we might need to know:
*   $P(X_1 \le k_1)$ (distribution of arrivals in the first hour)
*   $P(X_1 \le k_1, X_2 \le k_2)$ (joint distribution of arrivals in the first two hours)
*   And so on for any number of hours.

**Connection to Course Outcomes:**
*   **CO1, CO2:** Relates to understanding the properties of random variables, which are the building blocks of random processes.
*   **CO4:** Understanding these distributions is crucial for characterizing the behavior of the process.

**Important Point:** Specifying all finite-dimensional distributions is often difficult or impossible in practice.

#### 2.3. Moments and Characteristic Functions

Since specifying all joint distributions is complex, we often resort to describing the process using its moments (mean, variance) and characteristic functions.

**2.3.1. Mean Function (Expected Value Function)**

The mean function of a random process $X(t)$ is defined as the expected value of the random variable $X(t)$ at each time $t$:

$\mu_X(t) = E[X(t)]$

**Example (Ross, 6th ed., Chapter 10):**
If $X(t)$ represents the temperature at time $t$ in a room, $\mu_X(t)$ would be the average temperature at time $t$ over many observations.

**2.3.2. Autocovariance Function**

The autocovariance function measures the linear dependence between the random variables $X(t_1)$ and $X(t_2)$ at different times $t_1$ and $t_2$:

$C_X(t_1, t_2) = Cov(X(t_1), X(t_2)) = E[(X(t_1) - \mu_X(t_1))(X(t_2) - \mu_X(t_2))]$

**2.3.3. Autocorrelation Function**

The autocorrelation function is defined as:

$R_X(t_1, t_2) = E[X(t_1)X(t_2)]$

**Relationship between Autocovariance and Autocorrelation:**
$C_X(t_1, t_2) = R_X(t_1, t_2) - \mu_X(t_1)\mu_X(t_2)$

**Example (Papoulis & Pillai, 4th ed., Chapter 7):**
In signal processing, the autocorrelation function describes how a signal is correlated with a time-shifted version of itself. A high autocorrelation at a particular time shift indicates strong similarity between the signal at $t$ and $t + \tau$.

**Connection to Course Outcomes:**
*   **CO4:** This directly relates to utilizing autocorrelation functions to analyze random processes and understanding their applications.

**Important Points to Remember:**
*   The mean function describes the average behavior of the process.
*   The autocorrelation function captures the dependency structure of the process over time.
*   For stationary processes, the autocorrelation function depends only on the time difference $\tau = t_2 - t_1$.

#### 2.4. Classification of Random Processes

Random processes can be classified based on various criteria, which helps in understanding their behavior and choosing appropriate analytical tools.

**2.4.1. Based on State Space:**

*   **Discrete State Space:** The random variables $X(t)$ can take values from a countable set (e.g., integers).
    *   **Example:** Bernoulli process (sequence of successes/failures), Poisson process (number of events in intervals).
*   **Continuous State Space:** The random variables $X(t)$ can take values from a continuous range (e.g., real numbers).
    *   **Example:** Thermal noise voltage, Brownian motion.

**2.4.2. Based on Index Set:**

*   **Discrete-Time Random Process (or Random Sequence):** The index set is discrete, typically integers ($\mathbb{Z}$ or $\mathbb{N}$).
    *   **Notation:** $\{X_n\}$, $n \in \mathbb{Z}$ or $n \in \mathbb{N}$.
    *   **Example:** Daily stock prices, sampled signals.
*   **Continuous-Time Random Process:** The index set is continuous, typically real numbers ($\mathbb{R}$).
    *   **Notation:** $\{X(t)\}$, $t \in \mathbb{R}$.
    *   **Example:** A radio signal, temperature fluctuations.

**2.4.3. Based on Stationarity:**

A process is **stationary** if its statistical properties do not change over time. This simplifies analysis significantly.

*   **Strict-Sense Stationarity (SSS):** The joint distribution of $\{X(t_1), ..., X(t_n)\}$ is the same as the joint distribution of $\{X(t_1+h), ..., X(t_n+h)\}$ for all $t_1, ..., t_n$ and all $h$. This means all finite-dimensional distributions are time-invariant.
*   **Wide-Sense Stationarity (WSS):**
    1.  The mean function is constant: $E[X(t)] = \mu$ for all $t$.
    2.  The autocorrelation function depends only on the time difference: $E[X(t_1)X(t_2)] = R_X(t_2 - t_1) = R_X(\tau)$.

**Example (Anderson et al., 1st ed., Chapter 8):**
Consider a random process representing the amplitude of a constant sine wave with a random phase. This process might be wide-sense stationary if the phase is uniformly distributed.

**Connection to Course Outcomes:**
*   **CO4:** Classifying random processes is a direct learning outcome. Understanding stationarity is key to utilizing autocorrelation functions.

**Important Point:** WSS is a weaker condition than SSS and is often sufficient for many engineering applications.

#### 2.5. Other Descriptors

*   **Power Spectral Density (PSD):** For WSS processes, the PSD describes how the power of the process is distributed over different frequencies. It is the Fourier transform of the autocorrelation function.
*   **Correlation Function:** Similar to autocorrelation, but may refer to cross-correlation between two different processes.

---

### 3. Summary of Description Methods

| Method                               | Description                                                                                                            | Pros                                               | Cons                                                                                               |
| :----------------------------------- | :--------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| **Sample Functions**                 | Individual time-domain realizations of the process.                                                                    | Intuitive visualization.                           | Not a complete statistical description; only one realization.                                      |
| **Finite-Dimensional Distributions** | Joint probability distributions for any finite set of time points.                                                     | Complete statistical description.                  | Very complex to specify and work with in practice.                                                 |
| **Moments (Mean, Autocorrelation)**  | Expected value and expected product of values at different times.                                                      | Captures key statistical properties (average, correlation). Easier to calculate than distributions. | Not a complete description unless specific types of processes (e.g., Gaussian) are assumed.        |
| **Characteristic Functions**         | Fourier transforms of probability distributions.                                                                       | Powerful for analytical derivations.               | Still tied to probability distributions, can be complex.                                           |
| **Classification**                   | Categorizing processes based on state space, index set, and stationarity.                                              | Simplifies analysis and understanding.             | Provides a framework but doesn't fully describe individual processes.                              |
| **Power Spectral Density (for WSS)** | Frequency-domain representation of the process's power distribution.                                                   | Essential for signal processing and system analysis. | Applicable primarily to WSS processes.                                                             |

---

### 4. Practice Questions and Exercises

**Question 1:**
Define a random process. Distinguish between a sample function and a random process.

**Answer:**
A random process is a collection of random variables indexed by time (or another parameter). A sample function (or sample path) is a single realization of this collection over the index set, representing one specific outcome of the random experiment. The random process encompasses all possible sample functions and their associated probabilities.

**Question 2:**
Let $X(t) = A \cos(\omega t + \Phi)$, where $A$ and $\omega$ are constants, and $\Phi$ is a random variable uniformly distributed in $[0, 2\pi]$.
a) Is $X(t)$ a discrete-time or continuous-time random process?
b) Find the mean function, $\mu_X(t)$.
c) Find the autocorrelation function, $R_X(t_1, t_2)$.
d) Is this process wide-sense stationary? Justify your answer.

**Answer:**
a) This is a continuous-time random process because the index $t$ is a continuous variable.

b) Mean function:
$\mu_X(t) = E[X(t)] = E[A \cos(\omega t + \Phi)]$
Since $A$ and $\omega$ are constants,
$\mu_X(t) = A E[\cos(\omega t + \Phi)]$
Since $\Phi$ is uniformly distributed in $[0, 2\pi]$, $E[\cos(\theta)] = 0$ for any $\theta$ if the expectation is over a full period of cosine.
$E[\cos(\omega t + \Phi)] = \int_{0}^{2\pi} \cos(\omega t + \phi) \frac{1}{2\pi} d\phi = \frac{1}{2\pi} [\frac{\sin(\omega t + \phi)}{\omega}]_{0}^{2\pi} = \frac{1}{2\pi \omega} [\sin(\omega t + 2\pi) - \sin(\omega t)] = \frac{1}{2\pi \omega} [\sin(\omega t) - \sin(\omega t)] = 0$.
So, $\mu_X(t) = A \cdot 0 = 0$. The mean function is a constant, 0.

c) Autocorrelation function:
$R_X(t_1, t_2) = E[X(t_1)X(t_2)]$
$R_X(t_1, t_2) = E[A \cos(\omega t_1 + \Phi) \cdot A \cos(\omega t_2 + \Phi)]$
$R_X(t_1, t_2) = A^2 E[\cos(\omega t_1 + \Phi) \cos(\omega t_2 + \Phi)]$
Using the product-to-sum identity $2 \cos A \cos B = \cos(A-B) + \cos(A+B)$:
$R_X(t_1, t_2) = \frac{A^2}{2} E[\cos((\omega t_1 + \Phi) - (\omega t_2 + \Phi)) + \cos((\omega t_1 + \Phi) + (\omega t_2 + \Phi))]$
$R_X(t_1, t_2) = \frac{A^2}{2} E[\cos(\omega (t_1 - t_2)) + \cos(\omega (t_1 + t_2) + 2\Phi)]$
$R_X(t_1, t_2) = \frac{A^2}{2} [\cos(\omega (t_1 - t_2)) + E[\cos(\omega (t_1 + t_2) + 2\Phi)]]$
The expectation of $\cos(\omega (t_1 + t_2) + 2\Phi)$ where $\Phi \sim U[0, 2\pi]$ is:
$E[\cos(\omega (t_1 + t_2) + 2\Phi)] = \int_{0}^{2\pi} \cos(\omega (t_1 + t_2) + 2\phi) \frac{1}{2\pi} d\phi$
$= \frac{1}{2\pi} [\frac{\sin(\omega (t_1 + t_2) + 2\phi)}{2}]_{0}^{2\pi} = \frac{1}{4\pi} [\sin(\omega (t_1 + t_2) + 4\pi) - \sin(\omega (t_1 + t_2))]$
$= \frac{1}{4\pi} [\sin(\omega (t_1 + t_2)) - \sin(\omega (t_1 + t_2))] = 0$.
So, $R_X(t_1, t_2) = \frac{A^2}{2} [\cos(\omega (t_1 - t_2)) + 0] = \frac{A^2}{2} \cos(\omega (t_1 - t_2))$.

d) Yes, the process is wide-sense stationary.
1. The mean function $\mu_X(t) = 0$ is constant.
2. The autocorrelation function $R_X(t_1, t_2) = \frac{A^2}{2} \cos(\omega (t_1 - t_2))$ depends only on the time difference $\tau = t_1 - t_2$. Therefore, $R_X(\tau) = \frac{A^2}{2} \cos(\omega \tau)$.

**Question 3:**
Which method of description is generally considered the most complete, and why is it often impractical?

**Answer:**
The most complete statistical description is given by the **finite-dimensional distributions**. This is because specifying all these distributions for all possible combinations of time points and values completely defines the probabilistic behavior of the random process. However, it is often impractical because it requires specifying an infinite number of joint distribution functions for continuous-time processes, which is mathematically and computationally challenging.

---

### 5. Important Points to Remember

*   **Random Process:** A collection of random variables indexed by time.
*   **Sample Function:** A single, deterministic realization of a random process.
*   **Complete Description:** Defined by all finite-dimensional joint distributions.
*   **Practical Description:** Mean function and autocorrelation function are commonly used for their simplicity and ability to capture essential statistical properties.
*   **Stationarity:** A key property that simplifies analysis. Wide-Sense Stationarity (WSS) is widely used in engineering.
*   **Autocorrelation:** Measures the similarity of the process with a time-shifted version of itself.
*   **Power Spectral Density (PSD):** The frequency-domain counterpart of the autocorrelation function for WSS processes, crucial for signal processing.

---
