---
title: "Average Values of Random Process"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 4: Random process concept"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4d8"
status: "completed"
scrapedAt: "2026-05-23T17:50:56.355Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4: Module 4: Random Process Concept

## Topic: Average Values of Random Processes

### 1. Introduction to Random Processes

A **random process** (or stochastic process) is a collection of random variables indexed by time (or sometimes space). Think of it as a signal that evolves randomly over time. Examples in electrical science include:

*   **Noise voltage in a resistor:** The voltage fluctuates randomly over time.
*   **Signal strength in a communication channel:** Fades and variations occur randomly.
*   **Arrival times of packets in a network:** Packets arrive at random intervals.

**Key Concept:** A random process $\{X(t), t \in T\}$ consists of a set of random variables $\{X_t, t \in T\}$, where $T$ is an index set (often representing time). For each realization (or sample function) of the process, we get a specific time function.

**Textbook Reference:**
*   **Devore (9th ed.):** Introduces random variables and their properties, which form the foundation for understanding random processes. Chapter 13 often touches upon time series and basic concepts.
*   **Veerarajan (3rd ed.):** Chapter 10 "Random Processes" provides a dedicated and comprehensive introduction.

### 2. Classification of Random Processes

Random processes can be classified based on the nature of their index set and the sample space of the random variables.

**2.1. Based on Index Set ($T$):**

*   **Continuous-Time Random Process:** The index set $T$ is a continuous interval of time (e.g., $T = [0, \infty)$).
    *   *Example:* Thermal noise in a circuit.
*   **Discrete-Time Random Process:** The index set $T$ is a set of discrete time points (e.g., $T = \{0, 1, 2, ...\}$).
    *   *Example:* Sampled data from a sensor at regular intervals.

**2.2. Based on Sample Space:**

*   **Continuous Random Process:** The random variables $X_t$ can take any real value.
    *   *Example:* Amplitude of a signal corrupted by Gaussian noise.
*   **Discrete Random Process:** The random variables $X_t$ can only take a finite or countably infinite set of values.
    *   *Example:* Number of customers arriving at a service point in each hour.

**2.3. Other Classifications (briefly):**

*   **Stationary Processes:** Properties (like mean, variance, autocorrelation) do not change with time.
    *   **Strict-Sense Stationary (SSS):** The joint distribution of any finite collection of random variables is invariant under translation of time.
    *   **Wide-Sense Stationary (WSS):** The mean is constant, and the autocorrelation depends only on the time difference, not the absolute time. This is more commonly used in electrical engineering.
*   **Markov Processes:** Future states depend only on the current state, not on the sequence of events that preceded it.

**Course Outcome Alignment:** CO4 (Analyze random processes by classifying them, describing their properties...).

### 3. Average Values of Random Processes

The "average value" of a random process usually refers to its **mean function** or **expected value function**. This describes the average behavior of the process over time.

**3.1. Mean Function (Expected Value Function)**

For a random process $\{X(t), t \in T\}$, the mean function is defined as:

$m_X(t) = E[X(t)]$

This is the expected value of the random variable $X(t)$ at a specific time $t$.

**Calculation:** To calculate $m_X(t)$, we need to know the probability distribution of $X(t)$ for each $t$.

*   **For a discrete random variable $X(t)$:** $m_X(t) = \sum_{x} x P(X(t) = x)$
*   **For a continuous random variable $X(t)$:** $m_X(t) = \int_{-\infty}^{\infty} x f_{X(t)}(x) dx$, where $f_{X(t)}(x)$ is the probability density function of $X(t)$.

**Interpretation:** The mean function represents the average value of the process at each point in time. If we were to observe many independent realizations of the process and average them at a specific time $t$, we would get a value close to $m_X(t)$.

**Example 1: A Simple Random Process**
Let $X(t) = A \cos(\omega_0 t + \Phi)$, where $A$ and $\omega_0$ are constants, and $\Phi$ is a random variable uniformly distributed over $[0, 2\pi]$.

To find the mean function $m_X(t)$:
$m_X(t) = E[A \cos(\omega_0 t + \Phi)]$
$m_X(t) = A E[\cos(\omega_0 t + \Phi)]$

Since $\Phi$ is uniformly distributed over $[0, 2\pi]$, its probability density function is $f_\Phi(\phi) = \frac{1}{2\pi}$ for $0 \le \phi \le 2\pi$, and 0 otherwise.

$E[\cos(\omega_0 t + \Phi)] = \int_{0}^{2\pi} \cos(\omega_0 t + \phi) \frac{1}{2\pi} d\phi$

Let $u = \omega_0 t + \phi$. Then $du = d\phi$. When $\phi=0$, $u=\omega_0 t$. When $\phi=2\pi$, $u=\omega_0 t + 2\pi$.
$E[\cos(\omega_0 t + \Phi)] = \frac{1}{2\pi} \int_{\omega_0 t}^{\omega_0 t + 2\pi} \cos(u) du$
$E[\cos(\omega_0 t + \Phi)] = \frac{1}{2\pi} [\sin(u)]_{\omega_0 t}^{\omega_0 t + 2\pi}$
$E[\cos(\omega_0 t + \Phi)] = \frac{1}{2\pi} [\sin(\omega_0 t + 2\pi) - \sin(\omega_0 t)]$
$E[\cos(\omega_0 t + \Phi)] = \frac{1}{2\pi} [\sin(\omega_0 t) - \sin(\omega_0 t)] = 0$

Therefore, $m_X(t) = A \times 0 = 0$.
The mean function of this random process is 0.

**Textbook Reference:**
*   **Veerarajan (3rd ed.):** Section 10.2 "Classification of Random Processes" and Section 10.3 "Average Value of Random Processes" are directly relevant.
*   **Papoulis & Pillai (4th ed.):** Chapter 4 "The Mean and Correlation Functions" covers this in detail.

**Important Point to Remember:** The mean function $m_X(t)$ is a deterministic function of time.

**3.2. Mean Square Value**

The **mean square value** of a random process is the expected value of the square of the process:

$E[X^2(t)]$

This gives us an idea of the average power of the process.

**3.3. Variance Function**

The **variance function** of a random process is:

$\text{Var}[X(t)] = E[(X(t) - m_X(t))^2] = E[X^2(t)] - [m_X(t)]^2$

This measures the spread of the process around its mean at each time $t$.

**Stationarity and Average Values**

*   **For a Wide-Sense Stationary (WSS) process:**
    *   The mean function is constant: $m_X(t) = E[X(t)] = \mu$ (a constant).
    *   The variance function is also constant: $\text{Var}[X(t)] = E[(X(t) - \mu)^2] = \sigma^2$ (a constant).

**Example 2: WSS Process**
Consider a random process $X(t)$ with $E[X(t)] = 5$ for all $t$, and $\text{Var}[X(t)] = 4$ for all $t$. This process is WSS. Its mean function is $m_X(t) = 5$.

**Course Outcome Alignment:** CO4 (describing their properties).

### 4. Time Averages vs. Ensemble Averages

A crucial distinction when dealing with random processes is between time averages and ensemble averages.

*   **Ensemble Average:** The average over all possible realizations of the random process at a *fixed* point in time. This is what we calculate as $E[X(t)]$ (the mean function).
    *   *Mathematical Notation:* $\langle X(t) \rangle_E$ or $E[X(t)]$
*   **Time Average:** The average of a *single* realization of the random process over time.
    *   *Mathematical Notation:* $\langle X(t) \rangle_T$ or $\lim_{T \to \infty} \frac{1}{T} \int_{-T/2}^{T/2} X(t) dt$

**Ergodicity:** A property that links time averages and ensemble averages. An **ergodic process** is one where the time averages are equal to the corresponding ensemble averages for any realization. For example, if a process is ergodic, its time-averaged mean is equal to its ensemble-averaged mean.

*   **Ergodic Mean:** $\lim_{T \to \infty} \frac{1}{T} \int_{-T/2}^{T/2} X(t) dt = E[X(t)]$

**Textbook Reference:**
*   **Veerarajan (3rd ed.):** Section 10.3 discusses average values and their relation to stationary processes. Ergodicity is also introduced here.
*   **Papoulis & Pillai (4th ed.):** Chapter 4 further elaborates on the relationship between time and ensemble averages, particularly for stationary processes.

**Important Point to Remember:** In many practical applications, we assume processes are ergodic, allowing us to estimate ensemble averages (like the mean) by taking time averages of a single observed realization.

### 5. Practice Questions and Exercises

**Question 1:**
A random process is defined as $X(t) = B$, where $B$ is a random variable uniformly distributed over the interval $[-2, 2]$.
(a) Find the mean function, $m_X(t)$.
(b) Find the mean square value, $E[X^2(t)]$.
(c) Find the variance function, $\text{Var}[X(t)]$.

**Question 2:**
Consider the random process $X(t) = 2 \cos(3t + \Theta)$, where $\Theta$ is a random variable uniformly distributed over $[0, \pi]$.
(a) Find the mean function, $m_X(t)$.
(b) Is this process WSS? Justify your answer. (Hint: You'll need to consider autocorrelation for WSS, but for now, focus on the mean.)

**Question 3:**
Let $Y(t) = 5 + N(t)$, where $N(t)$ is a random process with $E[N(t)] = 0$ for all $t$.
(a) Find the mean function of $Y(t)$, $m_Y(t)$.
(b) If $N(t)$ is a WSS process with variance 2, what is the variance of $Y(t)$?

---

### Answers to Practice Questions

**Answer 1:**
The random variable $B$ has a PDF $f_B(b) = \frac{1}{4}$ for $-2 \le b \le 2$, and 0 otherwise.
(a) **Mean Function:**
$m_X(t) = E[X(t)] = E[B]$
$m_X(t) = \int_{-2}^{2} b \cdot \frac{1}{4} db = \frac{1}{4} \left[ \frac{b^2}{2} \right]_{-2}^{2} = \frac{1}{4} \left( \frac{4}{2} - \frac{4}{2} \right) = \frac{1}{4} (2 - 2) = 0$.
So, $m_X(t) = 0$ for all $t$.

(b) **Mean Square Value:**
$E[X^2(t)] = E[B^2]$
$E[B^2] = \int_{-2}^{2} b^2 \cdot \frac{1}{4} db = \frac{1}{4} \left[ \frac{b^3}{3} \right]_{-2}^{2} = \frac{1}{4} \left( \frac{8}{3} - \frac{-8}{3} \right) = \frac{1}{4} \left( \frac{16}{3} \right) = \frac{4}{3}$.
So, $E[X^2(t)] = \frac{4}{3}$ for all $t$.

(c) **Variance Function:**
$\text{Var}[X(t)] = E[X^2(t)] - [m_X(t)]^2$
$\text{Var}[X(t)] = \frac{4}{3} - (0)^2 = \frac{4}{3}$.
So, $\text{Var}[X(t)] = \frac{4}{3}$ for all $t$.

**Answer 2:**
$X(t) = 2 \cos(3t + \Theta)$, where $\Theta \sim U[0, \pi]$. The PDF of $\Theta$ is $f_\Theta(\theta) = \frac{1}{\pi}$ for $0 \le \theta \le \pi$.
(a) **Mean Function:**
$m_X(t) = E[X(t)] = E[2 \cos(3t + \Theta)]$
$m_X(t) = 2 E[\cos(3t + \Theta)]$
$m_X(t) = 2 \int_{0}^{\pi} \cos(3t + \theta) \frac{1}{\pi} d\theta$
$m_X(t) = \frac{2}{\pi} \left[ \frac{\sin(3t + \theta)}{3} \right]_{0}^{\pi}$
$m_X(t) = \frac{2}{3\pi} [\sin(3t + \pi) - \sin(3t)]$
$m_X(t) = \frac{2}{3\pi} [-\sin(3t) - \sin(3t)]$
$m_X(t) = \frac{2}{3\pi} [-2\sin(3t)] = -\frac{4}{3\pi} \sin(3t)$.

(b) **Is this process WSS?**
For a process to be WSS, its mean must be constant. In this case, $m_X(t) = -\frac{4}{3\pi} \sin(3t)$, which is a function of time. Therefore, this process is **not WSS**.

**Answer 3:**
$Y(t) = 5 + N(t)$, with $E[N(t)] = 0$.
(a) **Mean function of Y(t):**
$m_Y(t) = E[Y(t)] = E[5 + N(t)]$
$m_Y(t) = E[5] + E[N(t)]$ (by linearity of expectation)
$m_Y(t) = 5 + 0 = 5$.
The mean function of $Y(t)$ is $m_Y(t) = 5$.

(b) **Variance of Y(t):**
We need the variance of $N(t)$. If $N(t)$ is a WSS process with variance 2, then $\text{Var}[N(t)] = 2$ for all $t$.
$\text{Var}[Y(t)] = \text{Var}[5 + N(t)]$
Using the property $\text{Var}[aX+b] = a^2 \text{Var}[X]$, where $a=1$ and $b=5$:
$\text{Var}[Y(t)] = \text{Var}[N(t)] = 2$.
The variance of $Y(t)$ is 2.

### 6. Important Points to Remember

*   A random process is a collection of random variables indexed by time.
*   The **mean function** $m_X(t) = E[X(t)]$ describes the average behavior of the process at each time instant.
*   The mean function is a deterministic function of time.
*   For a **Wide-Sense Stationary (WSS)** process, the mean function is constant ($E[X(t)] = \mu$).
*   The **variance function** $\text{Var}[X(t)]$ measures the spread of the process around its mean at each time instant. For a WSS process, the variance is also constant.
*   The concept of ergodicity links time averages and ensemble averages. If a process is ergodic, time averages can be used to estimate ensemble averages.

### 7. Alignment with Course Outcomes

*   **CO1 & CO2:** While this topic directly deals with processes, the calculation of expected values relies on the understanding of probability distributions of individual random variables, which are covered in CO1 and CO2.
*   **CO4:** This entire topic is dedicated to understanding random processes. Specifically, it covers:
    *   Classifying random processes (implicitly, as we define their properties).
    *   Describing their properties (mean function, variance function).
    *   Understanding their applications (noise, signals) is the broader context of why we study these properties.

This module builds the foundation for analyzing more complex random processes, including their autocorrelation and spectral properties, which are crucial for signal processing and communication systems as mentioned in CO4.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
