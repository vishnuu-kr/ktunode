---
title: "Methods of Description of Random process"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 4: Random process concept"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4d6"
status: "completed"
scrapedAt: "2026-05-23T17:50:54.812Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 4: Random Process Concept

### Topic: Methods of Description of Random Processes

This module introduces the fundamental concepts of random processes, which are essential for understanding and analyzing random phenomena in electrical science, such as noise, signal fluctuations, and system behavior under uncertainty. This topic focuses on the various ways we can formally describe and characterize these processes.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental concept of a random process and its relation to time.
*   Distinguish between different methods of describing a random process.
*   Define and explain the significance of the joint distribution functions of a random process.
*   Define and explain the properties and significance of the mean function, autocorrelation function, and autocovariance function of a random process.
*   Understand the concept of stationarity and its different types (strict stationarity and wide-sense stationarity).
*   Apply these descriptive methods to analyze and characterize random processes relevant to electrical engineering.

---

### Course Outcomes Addressed:

*   **CO4: Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems.** (Knowledge Level: K3) - This topic directly addresses the description and characterization of random processes, which is a prerequisite for their analysis and application.

---

### 1. Introduction to Random Processes

A **random process** (or stochastic process) is a collection of random variables indexed by time (or space). In essence, it's a system that evolves randomly over time. Think of it as a function of time, $X(t)$, where for each specific time $t$, $X(t)$ is a random variable.

**Key Concept:** Instead of a single random variable with a fixed outcome, a random process generates an entire *sample function* (or sample path, or realization) for each "experiment." Each sample function is a sequence or function of time that represents one possible outcome of the random process.

**Example:**
*   **Thermal noise in a resistor:** The voltage across a resistor due to random electron movement is a random process. At any given instant, the voltage is a random variable, and the collection of voltage values over time forms a sample function.
*   **Arrival times of customers at a service counter:** The number of customers arriving in a given time interval, or the time between arrivals, can be modeled as a random process.
*   **Stock market prices over time:** The fluctuating price of a stock is a classic example of a random process.

---

### 2. Methods of Describing a Random Process

Describing a random process fully requires specifying the probabilistic behavior of all its finite-dimensional distributions. However, in practice, we often use simpler characterizations that capture essential properties.

#### 2.1. Description via Joint Distribution Functions

This is the most rigorous and complete way to describe a random process.

*   **Definition:** A random process $X(t)$ is completely described by its **joint distribution functions** for any finite set of time points $t_1, t_2, ..., t_n$.
    *   The **first-order distribution function** is $F_X(x; t) = P(X(t) \le x)$. This describes the probability distribution of the process at a single time $t$.
    *   The **second-order distribution function** is $F_X(x_1, x_2; t_1, t_2) = P(X(t_1) \le x_1, X(t_2) \le x_2)$. This describes the joint probability distribution of the process at two different times $t_1$ and $t_2$.
    *   In general, the **n-th order distribution function** is $F_X(x_1, ..., x_n; t_1, ..., t_n) = P(X(t_1) \le x_1, ..., X(t_n) \le x_n)$.

**Significance:** Knowing all these joint distribution functions for all possible $n$ and all possible time sets $\{t_1, ..., t_n\}$ allows us to calculate any probability related to the random process.

**Challenge:** This method is often mathematically intractable and requires an infinite number of distribution functions to specify the process completely, which is impractical.

---

#### 2.2. Description via Statistical Averages and Functions

More practical descriptions focus on characterizing the process using its statistical averages and functions. These methods provide insights into the process's typical behavior and its dependence on time.

##### 2.2.1. Mean Function (Expected Value Function)

*   **Definition:** The mean function, denoted by $\mu_X(t)$, is the expected value of the random process at time $t$.
    $$ \mu_X(t) = E[X(t)] $$
*   **Significance:** It describes the average behavior or the "DC component" of the random process over time. For a stationary process, the mean function is constant.

**Example (from Devore, Chapter 4 - Introduction to Probability):** Consider a random process representing the output voltage of a system where the input is a random voltage. The mean function would represent the average output voltage at any given time.

##### 2.2.2. Autocorrelation Function (ACF)

*   **Definition:** The autocorrelation function, denoted by $R_X(t_1, t_2)$, measures the linear dependence between the values of the random process at two different times, $t_1$ and $t_2$.
    $$ R_X(t_1, t_2) = E[X(t_1)X(t_2)] $$
*   **Significance:**
    *   It provides information about the **correlation** between the process values at different points in time.
    *   If $X(t)$ is a stationary process, $R_X(t_1, t_2)$ depends only on the time difference $\tau = t_2 - t_1$. In this case, it's denoted as $R_X(\tau)$ and is called the **autocorrelation function of a stationary process**.
    *   $R_X(0) = E[X(t)^2]$, which is the mean square value of the process.
    *   $|R_X(\tau)| \le R_X(0)$ for all $\tau$.
    *   $R_X(\tau) = R_X(-\tau)$ (it's an even function).

**Example (from Veerarajan, Chapter 11 - Random Processes):** Consider a random process representing the signal received by a communication receiver. The autocorrelation function would tell us how much the signal at one time is correlated with the signal at another time. If the ACF is sharply peaked at $\tau=0$ and decays quickly, it means the signal changes rapidly.

**Relationship to Variance:**
The autocovariance function is related to the autocorrelation function and the mean function.

##### 2.2.3. Autocovariance Function (ACVF)

*   **Definition:** The autocovariance function, denoted by $C_X(t_1, t_2)$, measures the covariance between the values of the random process at two different times, $t_1$ and $t_2$.
    $$ C_X(t_1, t_2) = Cov(X(t_1), X(t_2)) = E[(X(t_1) - \mu_X(t_1))(X(t_2) - \mu_X(t_2))] $$
*   **Relation to ACF and Mean:**
    $$ C_X(t_1, t_2) = R_X(t_1, t_2) - \mu_X(t_1)\mu_X(t_2) $$
*   **Significance:**
    *   It quantifies the **linear dependence** of $X(t_1)$ and $X(t_2)$, normalized by their means.
    *   If $X(t)$ is a stationary process, $C_X(t_1, t_2)$ depends only on $\tau = t_2 - t_1$, denoted as $C_X(\tau)$.
    *   $C_X(\tau) = R_X(\tau) - \mu_X^2$ (for stationary processes with constant mean $\mu_X$).
    *   $C_X(0) = Var(X(t))$, which is the variance of the process at time $t$.

**Important Point:** For stationary processes, the mean function and the autocorrelation function are often sufficient to characterize the process for many applications.

---

### 3. Stationarity of Random Processes

Stationarity describes whether the statistical properties of a random process change over time.

#### 3.1. Strict-Sense Stationarity (SSS)

*   **Definition:** A random process $X(t)$ is strictly stationary if its statistical properties do not change with time. This means that the joint distribution function of $\{X(t_1), ..., X(t_n)\}$ is the same as the joint distribution function of $\{X(t_1+h), ..., X(t_n+h)\}$ for any $n$, any set of time points $\{t_1, ..., t_n\}$, and any time shift $h$.
*   **Implication:**
    *   The probability distribution of the process at any time $t$ is the same as at any other time $t'$.
    *   The probabilistic relationship between the process at any two times $t_1$ and $t_2$ is the same as the relationship between the process at $t_1+h$ and $t_2+h$.
*   **Practicality:** Proving strict stationarity is very difficult as it requires knowledge of all order statistics.

#### 3.2. Wide-Sense Stationarity (WSS)

*   **Definition:** A random process $X(t)$ is wide-sense stationary if its mean function is constant and its autocorrelation function depends only on the time difference $\tau = t_2 - t_1$.
    1.  $E[X(t)] = \mu_X$ (constant for all $t$)
    2.  $E[X(t_1)X(t_2)] = R_X(t_2 - t_1) = R_X(\tau)$ (depends only on the time difference)
*   **Implication:**
    *   The average value of the process does not change over time.
    *   The correlation between two points in time depends only on how far apart they are, not on their absolute position in time.
*   **Practicality:** WSS is a much weaker condition than SSS and is more commonly used in practice because it is easier to verify.

**Relationship between SSS and WSS:**
*   **If a process is strictly stationary, then it is also wide-sense stationary.**
*   The converse is not always true: a process can be wide-sense stationary without being strictly stationary.

**Example (from Ross, Chapter 10 - Introduction to Probability and Statistics for Engineers and Scientists):** Consider a random process representing the output of a stable communication channel with additive white Gaussian noise. If the underlying noise process is stationary, the output signal is likely to be WSS.

**Important Distinction:**
*   **SSS:** All statistical properties are invariant to time shifts.
*   **WSS:** Only the first two statistical moments (mean and autocorrelation) are invariant in a specific way.

---

### 4. Examples and Applications

#### 4.1. White Noise

**Concept:** White noise is a random process with a constant power spectral density over all frequencies. In the context of describing random processes:

*   **Definition:** A random process $W(t)$ is called **white noise** if its autocorrelation function is an impulse at $\tau=0$ and zero elsewhere.
    $$ R_W(\tau) = E[W(t)W(t+\tau)] = c \delta(\tau) $$
    where $c$ is a constant and $\delta(\tau)$ is the Dirac delta function.
*   **Properties:**
    *   It is a WSS process with $E[W(t)] = 0$ and $R_W(\tau) = c \delta(\tau)$.
    *   The values of white noise at different times are uncorrelated. This is a very strong assumption.
*   **Electrical Science Relevance:** White noise is a fundamental model for **thermal noise** and **shot noise** in electronic components. It's used in modeling communication channels, control systems, and signal processing filters.

**Example (from Papoulis & Pillai, Chapter 3 - Random Variables and Stochastic Processes):** Consider the noise voltage in a resistor at a temperature $T$. This noise is approximated as white Gaussian noise with a mean of 0 and an autocorrelation $R(\tau) = N_0 \delta(\tau)/2$, where $N_0$ is the noise power spectral density.

#### 4.2. Sine Wave with Random Phase

Consider a process $X(t) = A \cos(\omega_0 t + \Theta)$, where $A$ and $\omega_0$ are constants, and $\Theta$ is a random variable uniformly distributed over $[0, 2\pi]$.

*   **Mean Function:**
    $$ E[X(t)] = E[A \cos(\omega_0 t + \Theta)] = A \cos(\omega_0 t) E[\cos(\Theta)] - A \sin(\omega_0 t) E[\sin(\Theta)] $$
    Since $\Theta$ is uniform on $[0, 2\pi]$, $E[\cos(\Theta)] = 0$ and $E[\sin(\Theta)] = 0$.
    Therefore, $\mu_X(t) = E[X(t)] = 0$. This is a constant mean.

*   **Autocorrelation Function:**
    $$ R_X(t_1, t_2) = E[X(t_1)X(t_2)] = E[A \cos(\omega_0 t_1 + \Theta) A \cos(\omega_0 t_2 + \Theta)] $$
    $$ R_X(t_1, t_2) = A^2 E[\cos(\omega_0 t_1 + \Theta) \cos(\omega_0 t_2 + \Theta)] $$
    Using the product-to-sum identity $2 \cos A \cos B = \cos(A-B) + \cos(A+B)$:
    $$ R_X(t_1, t_2) = \frac{A^2}{2} E[\cos(\omega_0 (t_1 - t_2)) + \cos(\omega_0 (t_1 + t_2) + 2\Theta)] $$
    $$ R_X(t_1, t_2) = \frac{A^2}{2} \cos(\omega_0 (t_1 - t_2)) + \frac{A^2}{2} E[\cos(\omega_0 (t_1 + t_2) + 2\Theta)] $$
    The expectation $E[\cos(\omega_0 (t_1 + t_2) + 2\Theta)]$ involves integrating $\cos(\omega_0 (t_1 + t_2) + 2\theta)$ over $[0, 2\pi]$ with density $1/(2\pi)$. This integral is zero because the cosine completes two full cycles over the integration interval.
    $$ R_X(t_1, t_2) = \frac{A^2}{2} \cos(\omega_0 (t_1 - t_2)) $$
    Let $\tau = t_2 - t_1$. Then $t_1 - t_2 = -\tau$. Since $\cos$ is an even function, $\cos(-\omega_0 \tau) = \cos(\omega_0 \tau)$.
    $$ R_X(\tau) = \frac{A^2}{2} \cos(\omega_0 \tau) $$
*   **Conclusion:** This process is **wide-sense stationary** because its mean is 0 and its autocorrelation depends only on the time difference $\tau$. It is not strictly stationary unless $A=0$.

**Electrical Science Relevance:** This models signals like AC voltages or currents where the phase is not precisely known but is assumed to be random.

---

### 5. Key Points to Remember

*   A random process is a collection of random variables indexed by time.
*   The most complete description involves joint distribution functions, but this is often impractical.
*   Practical descriptions rely on statistical averages like the **mean function** ($\mu_X(t)$) and the **autocorrelation function** ($R_X(t_1, t_2)$).
*   The **autocovariance function** ($C_X(t_1, t_2)$) provides a measure of correlation adjusted for the means.
*   **Stationarity** is a crucial concept:
    *   **Strict-Sense Stationarity (SSS):** All statistical properties are time-invariant.
    *   **Wide-Sense Stationarity (WSS):** Mean is constant, and autocorrelation depends only on the time difference.
*   WSS is a weaker but more practical condition. SSS implies WSS, but not vice-versa.
*   White noise is a key idealized random process with an impulse autocorrelation, used to model fundamental noise sources.
*   Understanding these descriptive methods is essential for analyzing and predicting the behavior of random signals and systems in electrical engineering.

---

### 6. Practice Questions and Exercises

**Question 1:**
A random process is defined as $X(t) = \sin(\omega t + \Phi)$, where $\omega$ is a constant and $\Phi$ is a random variable uniformly distributed in $[0, 2\pi]$.
a) Calculate the mean function $\mu_X(t)$.
b) Calculate the autocorrelation function $R_X(t_1, t_2)$.
c) Is the process wide-sense stationary? Justify your answer.

**Question 2:**
Consider a random process $Y(t) = 5 + W(t)$, where $W(t)$ is a white noise process with $E[W(t)] = 0$ and $R_W(\tau) = 2\delta(\tau)$.
a) Calculate the mean function $\mu_Y(t)$.
b) Calculate the autocorrelation function $R_Y(t_1, t_2)$.
c) Is the process $Y(t)$ wide-sense stationary? Justify your answer.

**Question 3:**
Which of the following statements about random processes is FALSE?
a) A strictly stationary process is always wide-sense stationary.
b) A wide-sense stationary process is always strictly stationary.
c) The autocorrelation function of white noise is an impulse at $\tau=0$.
d) The mean function describes the average behavior of a random process over time.

---

### Answers to Practice Questions

**Answer 1:**
a) $\mu_X(t) = E[\sin(\omega t + \Phi)] = E[\sin(\omega t)\cos(\Phi) + \cos(\omega t)\sin(\Phi)]$
   Since $\Phi$ is uniform on $[0, 2\pi]$, $E[\cos(\Phi)] = 0$ and $E[\sin(\Phi)] = 0$.
   Thus, $\mu_X(t) = \sin(\omega t) \cdot 0 + \cos(\omega t) \cdot 0 = 0$.

b) $R_X(t_1, t_2) = E[X(t_1)X(t_2)] = E[\sin(\omega t_1 + \Phi) \sin(\omega t_2 + \Phi)]$
   $R_X(t_1, t_2) = E[\sin(\omega t_1)\cos(\Phi) + \cos(\omega t_1)\sin(\Phi)] \cdot [\sin(\omega t_2)\cos(\Phi) + \cos(\omega t_2)\sin(\Phi)]$
   Expanding this and using $E[\cos^2(\Phi)] = 1/2$, $E[\sin^2(\Phi)] = 1/2$, $E[\sin(\Phi)\cos(\Phi)] = 0$:
   $R_X(t_1, t_2) = E[\sin(\omega t_1)\sin(\omega t_2)\cos^2(\Phi) + (\sin(\omega t_1)\cos(\omega t_2) + \cos(\omega t_1)\sin(\omega t_2)) \sin(\Phi)\cos(\Phi) + \cos(\omega t_1)\cos(\omega t_2)\sin^2(\Phi)]$
   $R_X(t_1, t_2) = \sin(\omega t_1)\sin(\omega t_2) E[\cos^2(\Phi)] + \cos(\omega t_1)\cos(\omega t_2) E[\sin^2(\Phi)]$
   $R_X(t_1, t_2) = \sin(\omega t_1)\sin(\omega t_2) \frac{1}{2} + \cos(\omega t_1)\cos(\omega t_2) \frac{1}{2}$
   Using $\cos(A-B) = \cos A \cos B + \sin A \sin B$:
   $R_X(t_1, t_2) = \frac{1}{2} (\cos(\omega t_1)\cos(\omega t_2) + \sin(\omega t_1)\sin(\omega t_2)) = \frac{1}{2} \cos(\omega(t_1 - t_2))$.

c) Yes, the process is wide-sense stationary.
   - The mean function $\mu_X(t) = 0$, which is a constant.
   - The autocorrelation function $R_X(t_1, t_2) = \frac{1}{2} \cos(\omega(t_1 - t_2))$. This depends only on the time difference $\tau = t_1 - t_2$ (or $t_2 - t_1$). Let $\tau = t_2 - t_1$, then $R_X(\tau) = \frac{1}{2} \cos(\omega\tau)$.

**Answer 2:**
a) $\mu_Y(t) = E[5 + W(t)] = E[5] + E[W(t)] = 5 + 0 = 5$. The mean function is constant.

b) $R_Y(t_1, t_2) = E[Y(t_1)Y(t_2)] = E[(5 + W(t_1))(5 + W(t_2))]$
   $R_Y(t_1, t_2) = E[25 + 5W(t_1) + 5W(t_2) + W(t_1)W(t_2)]$
   $R_Y(t_1, t_2) = 25 + 5E[W(t_1)] + 5E[W(t_2)] + E[W(t_1)W(t_2)]$
   $R_Y(t_1, t_2) = 25 + 5(0) + 5(0) + R_W(t_1 - t_2)$
   Since $W(t)$ is white noise with $R_W(\tau) = 2\delta(\tau)$, we have $R_W(t_1 - t_2) = 2\delta(t_1 - t_2)$.
   $R_Y(t_1, t_2) = 25 + 2\delta(t_1 - t_2)$.

c) Yes, the process $Y(t)$ is wide-sense stationary.
   - The mean function $\mu_Y(t) = 5$, which is constant.
   - The autocorrelation function $R_Y(t_1, t_2) = 25 + 2\delta(t_1 - t_2)$. This depends only on the time difference $\tau = t_1 - t_2$. Let $\tau = t_1 - t_2$, then $R_Y(\tau) = 25 + 2\delta(\tau)$.

**Answer 3:**
b) A wide-sense stationary process is NOT always strictly stationary. For example, a random process that is deterministic (e.g., a fixed sine wave) is strictly stationary but has an autocorrelation that doesn't decay. However, the statement implies a general case. The correct answer is **b**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### References

*   **Devore J. L. (2016).** *Probability and Statistics for Engineering and the Sciences (9th ed.).* Cengage Learning. (Chapters on Random Variables and Random Processes)
*   **Veerarajan T. (2008).** *Probability, Statistics and Random Processes (3rd ed.).* The McGraw-Hill. (Chapter 11: Random Processes)
*   **Papoulis, A. & Pillai, S.U. (2002).** *Probability, Random Variables and Stochastic Processes (4th ed.).* McGraw Hill. (Chapter 3: Random Processes)
*   **Ross, S. M. (2020).** *Introduction to Probability and Statistics for Engineers and Scientists (6th ed.).* Academic Press. (Chapters on Random Processes)

---