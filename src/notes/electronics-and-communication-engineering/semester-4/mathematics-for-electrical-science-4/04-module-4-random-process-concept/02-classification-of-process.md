---
title: "classification of process"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 4: Random process concept"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4d5"
status: "completed"
scrapedAt: "2026-05-23T17:50:54.115Z"
---
# Mathematics for Electrical Science – 4: Module 4 - Random Process Concepts

## Topic: Classification of Processes

**Course Outcome Addressed:** CO4: Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems. (Knowledge Level: K3)

**Learning Outcomes for this Topic:** Upon successful completion of this topic, you will be able to:

*   Understand the fundamental ways random processes can be categorized.
*   Distinguish between different types of random processes based on their characteristics.
*   Relate the classification of a random process to its analytical properties and applications.

---

### 1. Introduction to Random Processes

A **random process** (or stochastic process) is a collection of random variables indexed by time (or space). In simpler terms, it's a system that evolves randomly over time. For electrical engineers, random processes are crucial for modeling phenomena like:

*   Noise in electronic circuits (e.g., thermal noise, shot noise)
*   Signals corrupted by random fluctuations
*   Queuing systems in communication networks
*   Random variations in system parameters

**Key Concept:** A random process $X(t)$ (for continuous time) or $X[n]$ (for discrete time) is a family of random variables $\{X(t) | t \in T\}$ or $\{X[n] | n \in \mathbb{N}\}$, where $T$ is the index set (time).

**Referenced Texts:**
*   **Devore, J. L. (2016):** Introduces random variables and their distributions, laying the groundwork for understanding collections of random variables. Chapter 12 often covers stochastic processes.
*   **Veerarajan, T. (2008):** Provides a solid foundation in probability and random variables, extending to random processes and their classification. Chapters 7 onwards are relevant.
*   **Papoulis & Pillai (2002):** A classic reference, offering in-depth coverage of random processes, including their fundamental properties and classifications.

---

### 2. Classification Criteria for Random Processes

Random processes can be classified based on various characteristics, including:

*   **The nature of the index set (time):** Discrete-time vs. Continuous-time.
*   **The nature of the sample space (values taken by the random variables):** Discrete vs. Continuous.
*   **Statistical properties:** Stationarity (strict sense, wide-sense), Markovianity, Ergodicity.
*   **Mathematical properties:** Linearity, Causality.

---

### 3. Classification Based on Index Set (Time)

This is a fundamental distinction in analyzing random processes.

#### 3.1. Discrete-Time Random Processes (DTRP)

*   **Definition:** A random process where the index set is discrete. This usually represents observations taken at specific, separate points in time.
*   **Notation:** $X[n]$, where $n \in \{0, 1, 2, ...\}$ or $n \in \mathbb{Z}$.
*   **Examples:**
    *   The output of a digital filter at each sampling instant.
    *   The number of customers arriving at a service point every hour.
    *   The daily stock price of a company.
*   **Relevant Concepts:** Probability mass functions, probability distributions for discrete random variables, time series analysis.
*   **Textbook Connection:** Devore (Chapter 4 on discrete random variables) and Veerarajan (Chapter 3 on discrete random variables) provide the building blocks.

#### 3.2. Continuous-Time Random Processes (CTRP)

*   **Definition:** A random process where the index set is continuous. This represents observations taken at every instant within a time interval.
*   **Notation:** $X(t)$, where $t \in (-\infty, \infty)$ or $t \in [0, \infty)$.
*   **Examples:**
    *   Thermal noise voltage in a resistor.
    *   The position of a particle undergoing Brownian motion.
    *   The amplitude of a radio signal over time.
*   **Relevant Concepts:** Probability density functions, probability distributions for continuous random variables, calculus-based analysis.
*   **Textbook Connection:** Devore (Chapter 5 on continuous random variables) and Veerarajan (Chapter 4 on continuous random variables) cover the necessary concepts.

**Important Point to Remember:** The distinction between discrete and continuous time is crucial for choosing appropriate mathematical tools and analysis methods.

---

### 4. Classification Based on Sample Space (Values)

This classification relates to the nature of the outcomes each random variable in the process can take.

#### 4.1. Discrete Random Processes

*   **Definition:** A random process where the random variables $X(t)$ (or $X[n]$) can only take a finite or countably infinite number of values.
*   **Examples:**
    *   A process representing the state of a digital communication channel (e.g., '0' or '1').
    *   The number of successful transmissions in a block of data.
    *   The state of a finite-state machine.
*   **Relevant Concepts:** Probability mass functions.
*   **Textbook Connection:** Devore (Chapter 4) and Veerarajan (Chapter 3) on discrete random variables.

#### 4.2. Continuous Random Processes

*   **Definition:** A random process where the random variables $X(t)$ (or $X[n]$) can take any value within a continuous range (an interval).
*   **Examples:**
    *   The voltage or current in an analog circuit, which can vary continuously.
    *   The temperature of a system over time.
    *   The amplitude of a modulated carrier wave.
*   **Relevant Concepts:** Probability density functions, cumulative distribution functions.
*   **Textbook Connection:** Devore (Chapter 5) and Veerarajan (Chapter 4) on continuous random variables.

**Important Point to Remember:** Many real-world electrical signals are modeled as continuous random processes, but sometimes discretizations (sampling and quantization) are applied, leading to discrete random processes.

---

### 5. Classification Based on Statistical Properties

This is where the "randomness" and its behavior over time become central.

#### 5.1. Stationarity

Stationarity describes whether the statistical properties of a random process change over time.

##### 5.1.1. Strict-Sense Stationarity (SSS)

*   **Definition:** A random process $X(t)$ is strictly-sense stationary if the joint probability distribution of $\{X(t_1), X(t_2), ..., X(t_n)\}$ is the same as the joint probability distribution of $\{X(t_1+h), X(t_2+h), ..., X(t_n+h)\}$ for any $t_1, t_2, ..., t_n$ and any $h$.
*   **Implication:** All statistical moments (mean, variance, skewness, etc.) are constant with respect to time. The process's behavior doesn't change its fundamental probabilistic character over time.
*   **Easier to Check:** For SSS, it's sufficient to check that the mean is constant and the autocorrelation function depends only on the time difference, *and* that higher-order moments are also time-invariant.

##### 5.1.2. Wide-Sense Stationarity (WSS)

*   **Definition:** A random process $X(t)$ is wide-sense stationary if:
    1.  The mean function $E[X(t)]$ is constant for all $t$.
    2.  The autocorrelation function $E[X(t)X(t+\tau)]$ depends only on the time difference $\tau$, not on $t$ itself.
*   **Notation:** $R_X(\tau) = E[X(t)X(t+\tau)]$.
*   **Implication:** While the mean and the relationship between values separated by a fixed time difference are constant, higher-order statistical properties might still change.
*   **Importance:** WSS is a weaker condition than SSS but is often easier to verify and sufficient for many analysis tasks (e.g., power spectral density calculation).
*   **Textbook Connection:** Veerarajan (Chapter 8) and Papoulis (Chapter 5) provide detailed explanations and examples of stationarity. Devore may cover this in its later chapters on stochastic processes.

**Example:**
Consider a random process $X(t) = A \cos(\omega_0 t + \Theta)$, where $A$ and $\omega_0$ are constants, and $\Theta$ is a random variable uniformly distributed over $[0, 2\pi]$.
*   $E[X(t)] = E[A] \cos(\omega_0 t + \Theta)$. If $E[A]=0$, then the mean is 0 (constant). If $E[A] \neq 0$, it's not WSS.
*   $E[X(t)X(t+\tau)] = E[A^2 \cos(\omega_0 t + \Theta) \cos(\omega_0 (t+\tau) + \Theta)]$
    $= E[A^2] E[\cos(\omega_0 t + \Theta) \cos(\omega_0 t + \omega_0 \tau + \Theta)]$
    Using $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$,
    $= \frac{E[A^2]}{2} E[\cos(\omega_0 \tau) + \cos(2\omega_0 t + \omega_0 \tau + 2\Theta)]$
    If $\Theta$ is uniform in $[0, 2\pi]$, $E[\cos(\cdot + 2\Theta)] = 0$.
    So, $E[X(t)X(t+\tau)] = \frac{E[A^2]}{2} \cos(\omega_0 \tau)$. This is constant with respect to $t$.
    If $E[A^2]$ is constant, the process is WSS.

**Important Point to Remember:** Stationarity is a key property that simplifies the analysis of random processes. If a process is not stationary, it might be possible to transform it into a stationary one or analyze segments of it.

#### 5.2. Markov Processes

*   **Definition:** A random process $X(t)$ is a Markov process if the future state of the process depends only on the present state, and not on the past sequence of events that preceded it.
*   **Markov Property:** For discrete time: $P(X[n+1] \le x | X[n]=x_n, X[n-1]=x_{n-1}, ..., X[0]=x_0) = P(X[n+1] \le x | X[n]=x_n)$.
*   **For continuous time:** $P(X(t+s) \le x | X(u), 0 \le u \le t) = P(X(t+s) \le x | X(t))$.
*   **Examples:**
    *   The number of customers in a queue (under certain arrival/service assumptions).
    *   The state of a communication channel in a discrete memoryless channel.
    *   Many physical systems where the next state only depends on the current state.
*   **Types:**
    *   **Markov Chain:** Discrete-time, discrete-state Markov process.
    *   **Continuous-Time Markov Chain (CTMC):** Continuous-time, discrete-state Markov process.
    *   **Diffusion Processes:** Continuous-time, continuous-state Markov processes.
*   **Textbook Connection:** Veerarajan (Chapter 9 on Markov chains) and Papoulis (Chapter 10) cover Markov processes extensively.

**Important Point to Remember:** The Markov property significantly simplifies the modeling and analysis of systems that exhibit memorylessness in their future evolution.

#### 5.3. Ergodic Processes

*   **Definition:** An ergodic process is one where time averages are equal to ensemble averages. This means that by observing the process over a sufficiently long time, you can obtain the same statistical information as you would by averaging over all possible realizations (the ensemble).
*   **Key Idea:** The process "explores" all its possible states or values in a representative way over time.
*   **Conditions for Ergodicity:** Specific conditions need to be met, often related to the autocorrelation function and the absence of any constant deterministic components.
*   **Implication:** If a process is ergodic, we can estimate its statistical properties (like mean and autocorrelation) from a single realization by taking time averages. This is extremely useful in practice where we often only have access to one "run" of the random phenomenon.
*   **Textbook Connection:** Papoulis (Chapter 5) is a primary source for ergodicity concepts. Veerarajan also discusses it, often in the context of WSS processes.

**Example:**
If a process $X(t)$ is WSS and ergodic, then:
*   $\lim_{T \to \infty} \frac{1}{T} \int_0^T X(t) dt = E[X(t)]$ (Time average of the signal equals the ensemble mean).
*   $\lim_{T \to \infty} \frac{1}{T} \int_0^T X(t)X(t+\tau) dt = R_X(\tau)$ (Time average of the product equals the ensemble autocorrelation).

**Important Point to Remember:** Ergodicity is a powerful assumption that allows us to infer ensemble properties from single-time observations.

---

### 6. Classification Based on Mathematical Properties

#### 6.1. Linear Processes

*   **Definition:** A random process that can be expressed as a linear operation on another random process, typically white noise.
*   **Example:** Many signal processing filters can be described as linear operations on an input random process. For example, an FIR filter output $Y[n]$ for an input $X[n]$ is $Y[n] = \sum_{k=-\infty}^{\infty} h[k] X[n-k]$. If $X[n]$ is a random process, $Y[n]$ is also a random process.
*   **Importance:** Linear processes are amenable to analysis using tools like the Fourier transform and convolution.

#### 6.2. Gaussian Processes

*   **Definition:** A random process $X(t)$ is Gaussian if, for any set of time points $t_1, t_2, ..., t_n$, the random vector $(X(t_1), X(t_2), ..., X(t_n))$ has a multivariate Gaussian (normal) distribution.
*   **Characterization:** A Gaussian process is completely characterized by its mean function $m(t) = E[X(t)]$ and its autocorrelation function $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$.
*   **Importance:** Gaussian processes are widely used in modeling noise and signals. They are also important because many linear transformations of Gaussian processes are also Gaussian.
*   **Textbook Connection:** Devore (Chapter 6 on multivariate distributions) and Veerarajan (Chapter 5 on joint distributions) cover the foundations of multivariate normal distributions. Papoulis (Chapter 7) is excellent on Gaussian processes.

**Important Point to Remember:** The sum of independent Gaussian random variables is Gaussian. This property extends to Gaussian random processes.

---

### 7. Summary of Classifications and Their Relevance in Electrical Science

| Classification Criteria        | Types                                                              | Relevance in Electrical Science                                                                                                                                       |
| :----------------------------- | :----------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Index Set (Time)**           | Discrete-Time (DTRP), Continuous-Time (CTRP)                       | Dictates the mathematical tools: Difference equations/Z-transforms for DTRP; Differential equations/Laplace transforms for CTRP. Sampling theory bridges the gap.       |
| **Sample Space (Values)**      | Discrete, Continuous                                               | Discrete values are common in digital systems, error detection/correction. Continuous values are ubiquitous in analog signals and noise.                               |
| **Statistical Properties**     | Stationary (SSS, WSS), Markovian, Ergodic                          | **Stationarity:** Simplifies analysis, especially WSS for power spectral density. **Markovian:** Models systems with memoryless future evolution (e.g., queueing). **Ergodic:** Allows estimation of properties from single observations. |
| **Mathematical Properties**    | Linear, Gaussian                                                   | **Linear:** Analysis of LTI systems. **Gaussian:** Modeling of noise, signal propagation under noise.                                                                |

---

### 8. Practice Questions and Exercises

**Question 1:**
Which of the following is NOT a criterion for classifying random processes?
(a) Nature of the index set
(b) Nature of the sample space
(c) Amplitude of the process
(d) Statistical properties

**Answer:** (c) Amplitude of the process is a characteristic of the process, but not a fundamental classification criterion in the same vein as the others.

---

**Question 2:**
A random process $X(t)$ is observed to have $E[X(t)] = 5$ for all $t$, and $E[X(t)X(t+\tau)] = 10e^{-2|\tau|}$. Is this process wide-sense stationary? Justify your answer.

**Answer:**
Yes, the process is wide-sense stationary.
1.  The mean function $E[X(t)] = 5$ is a constant, independent of $t$.
2.  The autocorrelation function $E[X(t)X(t+\tau)] = 10e^{-2|\tau|}$ depends only on the time difference $\tau$, not on $t$.

---

**Question 3:**
Consider a discrete-time random process $Y[n]$ which is the output of an LTI system with impulse response $h[n] = a^n u[n]$ (where $0 < a < 1$ and $u[n]$ is the unit step function) fed by a discrete-time white noise process $X[n]$ with $E[X[n]] = 0$ and $E[X[n]X[m]] = \sigma^2 \delta[n-m]$. Classify the output process $Y[n]$ based on:
(a) Index set (time)
(b) Sample space (values)
(c) Stationarity (assume $E[X[n]^2]$ is constant)

**Answer:**
(a) **Index set (time):** Since $X[n]$ is a discrete-time process, and $Y[n]$ is obtained by a linear operation on $X[n]$ over discrete time indices, $Y[n]$ is a **Discrete-Time Random Process (DTRP)**.

(b) **Sample space (values):** The output $Y[n] = \sum_{k=-\infty}^{\infty} h[k] X[n-k]$ is a weighted sum of random variables $X[n-k]$. Since $X[n]$ can take any real value (assuming it's continuous white noise), and it's a sum of scaled continuous random variables, $Y[n]$ will generally take **Continuous** values.

(c) **Stationarity:**
    *   **Mean:** $E[Y[n]] = E[\sum_{k=-\infty}^{\infty} h[k] X[n-k]] = \sum_{k=-\infty}^{\infty} h[k] E[X[n-k]]$. Since $E[X[n]] = 0$, $E[Y[n]] = \sum_{k=-\infty}^{\infty} h[k] \cdot 0 = 0$. The mean is constant (0).
    *   **Autocorrelation:** $R_Y[n, m] = E[Y[n]Y[m]]$. Due to the properties of white noise and LTI systems, if the input is WSS, the output is also WSS. White noise is WSS. Therefore, $Y[n]$ is **Wide-Sense Stationary (WSS)**. (Strict-sense stationarity would require further assumptions on $X[n]$, like Gaussianity).

---

### 9. Key Takeaways

*   Random processes are fundamental to understanding random phenomena in electrical systems.
*   Classification helps in selecting appropriate analysis tools.
*   **Time domain** (discrete vs. continuous) dictates signal processing techniques.
*   **State domain** (discrete vs. continuous) relates to digital vs. analog system modeling.
*   **Stationarity** (WSS, SSS) simplifies analysis by ensuring time-invariant statistical properties.
*   **Markov property** is key for systems with memoryless future states.
*   **Ergodicity** allows us to infer ensemble properties from single time observations.
*   **Gaussian processes** are vital for noise modeling and have convenient mathematical properties.

This comprehensive overview of random process classification provides a solid foundation for further study in signal processing, communications, control systems, and other areas of electrical science where randomness plays a significant role.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
