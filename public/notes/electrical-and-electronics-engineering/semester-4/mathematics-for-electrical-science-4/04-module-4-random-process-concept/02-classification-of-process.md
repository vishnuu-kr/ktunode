---
title: "classification of process"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 4: Random process concept"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35db1"
status: "completed"
scrapedAt: "2026-05-23T16:17:05.796Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 4: Random Process Concepts

### Topic: Classification of Processes

---

**Course Outcome Alignment:** This topic directly contributes to **CO4: Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems.** The classification helps in understanding the fundamental nature of random processes, which is crucial for their subsequent analysis and application. (Knowledge Level: K3)

---

### 1. Introduction to Random Processes

A **random process** (or stochastic process) is a collection of random variables indexed by time (or space, or some other parameter). Essentially, it's a system that evolves randomly over time. Think of it as a function whose value at any given time $t$ is a random variable.

**Key Concepts:**

*   **Sample Function (or Sample Path):** A single realization of the random process over time. For a given random process, each outcome of the underlying experiment corresponds to a specific sequence of values taken by the random variables in the collection.
*   **Ensemble:** The collection of all possible sample functions of a random process.
*   **State Space:** The set of all possible values that the random variables in the process can take.
*   **Index Set (Time Set):** The set of values over which the process is indexed. This is typically time, which can be discrete ($t = 0, 1, 2, \dots$) or continuous ($t \in (-\infty, \infty)$).

**Textbook References:**

*   **Devore J. L. (2016):** Introduces random processes as sequences of random variables and discusses their realizations.
*   **Veerarajan T. (2008):** Defines a random process as a collection of random variables and emphasizes the distinction between the process and its sample functions.
*   **Papoulis & Pillai (2002):** Provides a rigorous mathematical framework for random processes, defining them as functions on a probability space and highlighting the role of the index set and state space.

---

### 2. Classification of Random Processes

Random processes can be classified based on various characteristics, which helps in selecting appropriate analytical tools and understanding their behavior.

#### 2.1. Based on the Index Set (Time)

This classification distinguishes processes based on whether time is discrete or continuous.

**a) Discrete-Time Random Processes:**

*   **Definition:** A random process $\{X_n, n \in \mathbb{Z}\}$ where the index $n$ takes discrete values (e.g., integers representing time steps).
*   **Key Characteristic:** The process is observed or exists only at specific, separate points in time.
*   **Examples:**
    *   The daily closing price of a stock.
    *   The output of a digital filter at each clock cycle.
    *   The number of calls arriving at a call center per hour.
*   **Textbook Reference:**
    *   **Veerarajan T. (2008):** Discusses discrete-time processes extensively, often linking them to sequences of random variables.
    *   **Devore J. L. (2016):** While often focusing on general probability, concepts like sequences of trials naturally lead to discrete-time processes.

**b) Continuous-Time Random Processes:**

*   **Definition:** A random process $\{X(t), t \in \mathbb{R}\}$ where the index $t$ takes continuous values over an interval.
*   **Key Characteristic:** The process can be observed at any point in time.
*   **Examples:**
    *   The voltage across a resistor due to thermal noise.
    *   The position of a particle undergoing Brownian motion.
    *   The temperature of a room over a day.
*   **Textbook Reference:**
    *   **Papoulis & Pillai (2002):** This is a primary source for continuous-time processes, especially in the context of signal processing and physics.
    *   **Ross S. M. (2020):** Introduces continuous-time processes and their properties like stationarity.

#### 2.2. Based on the State Space

This classification distinguishes processes based on the nature of the values the random variables can take.

**a) Discrete State Space Random Processes:**

*   **Definition:** A random process where the random variables $X(t)$ (or $X_n$) can only take values from a finite or countably infinite set.
*   **Key Characteristic:** The possible outcomes at any given time are distinct and countable.
*   **Examples:**
    *   A random walk (position is an integer).
    *   The state of a coin flip over time (Heads/Tails, represented as 0/1).
    *   The number of customers in a queue (can be $0, 1, 2, \dots$).
*   **Textbook Reference:**
    *   **Veerarajan T. (2008):** Frequently uses examples like coin tossing and random walks which have discrete state spaces.
    *   **Devore J. L. (2016):** Discusses binomial and Poisson processes which often operate on discrete states.

**b) Continuous State Space Random Processes:**

*   **Definition:** A random process where the random variables $X(t)$ (or $X_n$) can take any value from a continuous interval.
*   **Key Characteristic:** The possible outcomes at any given time are infinite and uncountable.
*   **Examples:**
    *   The amplitude of a radio signal.
    *   The velocity of a vehicle.
    *   The measurement of a temperature.
*   **Textbook Reference:**
    *   **Papoulis & Pillai (2002):** Deals extensively with continuous state space processes, especially in the context of noise and signal modulation.
    *   **Ross S. M. (2020):** Discusses processes like Brownian motion which have continuous state spaces.

#### 2.3. Based on Stationarity

Stationarity refers to whether the statistical properties of a random process change over time. This is a crucial concept for simplifying analysis.

**a) Strictly Stationary (or First-Order Stationary) Process:**

*   **Definition:** A random process $\{X(t)\}$ is strictly stationary if the joint probability distribution of $(X(t_1), X(t_2), \dots, X(t_n))$ is the same as the joint probability distribution of $(X(t_1+h), X(t_2+h), \dots, X(t_n+h))$ for any $n$ and any $t_1, \dots, t_n$ and $h$, provided the points $t_i$ and $t_i+h$ are in the index set.
*   **Key Characteristic:** All statistical properties are invariant with respect to time shifts. This is a very strong condition.
*   **Example:** A process where the output is always a constant value (e.g., $X(t) = c$, a constant).
*   **Important Point:** For a strictly stationary process, the mean and variance are constant for all time.

**b) Weakly Stationary (or Second-Order Stationary) Process:**

*   **Definition:** A random process $\{X(t)\}$ is weakly stationary if:
    1.  The mean function $E[X(t)] = \mu$ is constant for all $t$.
    2.  The second moment $E[X^2(t)]$ is finite for all $t$.
    3.  The autocorrelation function $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$ depends only on the time difference $\tau = t_2 - t_1$, i.e., $R_X(t_1, t_2) = R_X(\tau)$.
*   **Key Characteristic:** The mean and autocorrelation function are time-invariant. This is a weaker condition than strict stationarity but is often sufficient for analysis.
*   **Important Point:** A strictly stationary process is also weakly stationary. However, the converse is not always true.
*   **Textbook References:**
    *   **Veerarajan T. (2008):** Provides a detailed explanation of wide-sense stationarity and its conditions.
    *   **Papoulis & Pillai (2002):** Discusses stationarity in the context of spectral analysis and its implications for signal processing.
    *   **Devore J. L. (2016):** While not focusing as heavily on random processes as other books, concepts related to constant expected values and variance are foundational.

**c) Non-Stationary Process:**

*   **Definition:** A random process that does not satisfy the conditions for stationarity (either strict or weak).
*   **Key Characteristic:** Its statistical properties, such as mean or autocorrelation, change over time.
*   **Examples:**
    *   A signal with increasing amplitude over time.
    *   Noise that gets stronger or weaker as time progresses.
    *   The number of bankruptcies in an industry over several decades (economic trends change).
*   **Important Point:** Analyzing non-stationary processes is generally more complex and often requires time-varying models or decomposition techniques.

#### 2.4. Based on Memory Properties

This classification relates to how past values of the process influence future values.

**a) Markov Processes:**

*   **Definition:** A random process where the future state depends only on the present state, not on the past sequence of events that preceded it.
    *   For a discrete-time process: $P(X_{n+1} = j | X_n = i, X_{n-1} = i_{n-1}, \dots, X_0 = i_0) = P(X_{n+1} = j | X_n = i)$.
    *   For a continuous-time process: $P(X(t+h) \in A | X(s) \text{ for all } s \le t) = P(X(t+h) \in A | X(t))$ for $h>0$.
*   **Key Characteristic:** "Memoryless" property with respect to the future, given the present.
*   **Examples:**
    *   A random walk where the next step depends only on the current position.
    *   The state of a system in a Markov chain.
*   **Textbook References:**
    *   **Veerarajan T. (2008):** Dedicates significant sections to Markov chains and processes, explaining the Markov property in detail.
    *   **Papoulis & Pillai (2002):** Discusses Markov processes, particularly in the context of differential equations and state-space representations.
    *   **Ross S. M. (2020):** Provides a foundational understanding of Markov chains.

**b) Martingales:**

*   **Definition:** A random process $\{X_n, n \ge 0\}$ adapted to a filtration $\{\mathcal{F}_n, n \ge 0\}$ such that $E[|X_n|] < \infty$ for all $n$ and $E[X_{n+1} | \mathcal{F}_n] = X_n$ for all $n$. (Intuitively, the expected future value, given all past information, is the current value).
*   **Key Characteristic:** A fair game; the expected future gain is zero.
*   **Example:** A fair coin tossing game where you win/lose \$1 on each toss. Your expected future fortune is your current fortune.
*   **Important Point:** Martingales are a powerful tool in probability theory and have applications in financial mathematics and stochastic control.

**c) Processes with Memory:**

*   **Definition:** Processes where past values influence future values beyond just the immediate preceding state.
*   **Key Characteristic:** Exhibits dependence on a longer history.
*   **Examples:**
    *   Autoregressive (AR) processes in time series analysis, where a value depends on several previous values.
    *   Processes with long-range dependence.

#### 2.5. Based on Other Properties

**a) Gaussian Processes:**

*   **Definition:** A random process $\{X(t)\}$ where for any finite set of indices $t_1, t_2, \dots, t_n$, the random vector $(X(t_1), X(t_2), \dots, X(t_n))$ has a multivariate normal (Gaussian) distribution.
*   **Key Characteristic:** Completely characterized by its mean function and covariance function.
*   **Examples:**
    *   Brownian motion (Wiener process).
    *   Thermal noise in electrical circuits.
*   **Textbook References:**
    *   **Papoulis & Pillai (2002):** Discusses Gaussian processes extensively, especially in the context of noise and filtering.
    *   **Ross S. M. (2020):** Introduces Gaussian processes and their properties.
    *   **Devore J. L. (2016):** While not a primary focus, the principles of multivariate normal distributions are fundamental.

**b) Poisson Processes:**

*   **Definition:** A counting process $\{N(t), t \ge 0\}$ that counts the number of events occurring in a given time interval, satisfying specific properties:
    1.  $N(0) = 0$.
    2.  The increments are independent: For $0 \le t_1 < t_2 < \dots < t_n$, the random variables $N(t_2) - N(t_1), N(t_3) - N(t_2), \dots, N(t_n) - N(t_{n-1})$ are independent.
    3.  The increment $N(t+h) - N(t)$ depends only on $h$, not on $t$.
    4.  The probability of more than one event in a small interval is negligible.
*   **Key Characteristic:** Models the occurrence of events randomly in time, with a constant average rate (for homogeneous Poisson processes).
*   **Examples:**
    *   Arrival of customers at a service facility.
    *   Arrival of photons at a detector.
    *   The occurrence of radioactive decay events.
*   **Textbook References:**
    *   **Veerarajan T. (2008):** Provides a thorough treatment of Poisson processes.
    *   **Devore J. L. (2016):** Covers Poisson processes as a key application of discrete random variables and probability distributions.
    *   **Ross S. M. (2020):** Discusses Poisson processes and their relation to exponential distributions.

**c) Wiener Process (Brownian Motion):**

*   **Definition:** A continuous-time Gaussian process $\{W(t), t \ge 0\}$ with the following properties:
    1.  $W(0) = 0$.
    2.  Independent increments: For $0 \le s < t$, $W(t) - W(s)$ is independent of the past values $W(u)$ for $u \le s$.
    3.  Stationary increments: $W(t) - W(s)$ has the same distribution as $W(t-s)$.
    4.  $W(t) - W(s) \sim N(0, \sigma^2(t-s))$ for some constant $\sigma^2$. (Often $\sigma^2 = 1$ for the standard Wiener process).
*   **Key Characteristic:** Models continuous random movement and is fundamental in areas like finance and physics.
*   **Textbook References:**
    *   **Papoulis & Pillai (2002):** A key resource for understanding the mathematical properties of the Wiener process.
    *   **Ross S. M. (2020):** Introduces the Wiener process and its properties.

---

### 3. Important Points to Remember

*   **Process vs. Sample Function:** A random process is a collection of random variables, while a sample function is one specific realization of that process.
*   **Classification is Key:** The way a random process is classified dictates the mathematical tools and assumptions needed for its analysis. For instance, stationary processes are significantly easier to analyze than non-stationary ones.
*   **Stationarity:** Weak stationarity is more commonly assumed and used in practice due to its less stringent requirements compared to strict stationarity.
*   **Markov Property:** Simplifies the analysis of processes by making them dependent only on the present state.
*   **Gaussian Processes:** Their complete characterization by mean and covariance makes them analytically tractable and widely applicable.
*   **Applications in Electrical Science:** Understanding these classifications is crucial for modeling phenomena like noise (often Gaussian and stationary), communication signals, and system dynamics.

---

### 4. Practice Questions/Exercises

**Question 1:**
Classify the following random processes based on their index set and state space.

a) The voltage output of a noisy amplifier over time, where the voltage can take any real value.
b) The number of defective items produced by a machine each day for a week.
c) The position of a particle undergoing Brownian motion.
d) The sequence of results of flipping a fair coin repeatedly.

**Answer 1:**

a) **Continuous-time, Continuous state space.** (Time is continuous, voltage can be any real number).
b) **Discrete-time, Discrete state space.** (Observed daily, number of defective items is countable).
c) **Continuous-time, Continuous state space.** (Time is continuous, position can be any real number).
d) **Discrete-time, Discrete state space.** (Observed at each flip, results are Heads/Tails, which can be represented by {0, 1}).

---

**Question 2:**
Explain the difference between a strictly stationary process and a weakly stationary process. Provide a condition under which a process is guaranteed to be weakly stationary.

**Answer 2:**
*   **Strictly Stationary:** The joint probability distribution of any finite set of random variables from the process is invariant under time shifts. This means all statistical properties (mean, variance, skewness, kurtosis, higher-order moments) are time-invariant.
*   **Weakly Stationary:** Only requires that the mean function is constant and the autocorrelation function depends only on the time difference between the two points.
*   **Guarantee for Weak Stationarity:** If a process is strictly stationary, it is also weakly stationary. Another condition for weak stationarity is if the mean $E[X(t)] = \mu$ is constant and the autocorrelation function $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$ depends only on $\tau = t_2 - t_1$, i.e., $R_X(t_1, t_2) = R_X(\tau)$.

---

**Question 3:**
Consider a random process $X(t) = A \cos(\omega t + \Theta)$, where $\omega$ is a constant, $A$ is a positive constant, and $\Theta$ is a random variable uniformly distributed in $[0, 2\pi]$. Is this process stationary? Justify your answer.

**Answer 3:**
To check for weak stationarity, we need to examine the mean and autocorrelation functions.

1.  **Mean Function:**
    $E[X(t)] = E[A \cos(\omega t + \Theta)] = A E[\cos(\omega t + \Theta)]$
    $E[\cos(\omega t + \Theta)] = \int_0^{2\pi} \cos(\omega t + \theta) \frac{1}{2\pi} d\theta$
    Let $u = \omega t + \theta$, $du = d\theta$. When $\theta = 0, u = \omega t$. When $\theta = 2\pi, u = \omega t + 2\pi$.
    $\int_{\omega t}^{\omega t+2\pi} \cos(u) \frac{1}{2\pi} du = \frac{1}{2\pi} [\sin(u)]_{\omega t}^{\omega t+2\pi} = \frac{1}{2\pi} (\sin(\omega t + 2\pi) - \sin(\omega t)) = \frac{1}{2\pi} (\sin(\omega t) - \sin(\omega t)) = 0$.
    So, $E[X(t)] = A \cdot 0 = 0$. The mean is a constant (0) for all $t$.

2.  **Autocorrelation Function:**
    $R_X(t_1, t_2) = E[X(t_1)X(t_2)] = E[A \cos(\omega t_1 + \Theta) \cdot A \cos(\omega t_2 + \Theta)]$
    $R_X(t_1, t_2) = A^2 E[\cos(\omega t_1 + \Theta) \cos(\omega t_2 + \Theta)]$
    Using the identity $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$:
    $\cos(\omega t_1 + \Theta) \cos(\omega t_2 + \Theta) = \frac{1}{2}[\cos((\omega t_1 + \Theta) - (\omega t_2 + \Theta)) + \cos((\omega t_1 + \Theta) + (\omega t_2 + \Theta))]$
    $= \frac{1}{2}[\cos(\omega(t_1 - t_2)) + \cos(\omega(t_1 + t_2) + 2\Theta)]$

    Now, take the expectation with respect to $\Theta$:
    $E[\cos(\omega(t_1 - t_2)) + \cos(\omega(t_1 + t_2) + 2\Theta)] = \cos(\omega(t_1 - t_2)) + E[\cos(\omega(t_1 + t_2) + 2\Theta)]$
    $E[\cos(\omega(t_1 + t_2) + 2\Theta)] = \int_0^{2\pi} \cos(\omega(t_1 + t_2) + 2\theta) \frac{1}{2\pi} d\theta$
    Let $v = \omega(t_1 + t_2) + 2\theta$, $dv = 2 d\theta$. When $\theta=0, v = \omega(t_1+t_2)$. When $\theta=2\pi, v = \omega(t_1+t_2) + 4\pi$.
    $\int_{\omega(t_1+t_2)}^{\omega(t_1+t_2)+4\pi} \cos(v) \frac{1}{4\pi} dv = \frac{1}{4\pi} [\sin(v)]_{\omega(t_1+t_2)}^{\omega(t_1+t_2)+4\pi} = \frac{1}{4\pi} (\sin(\omega(t_1+t_2)+4\pi) - \sin(\omega(t_1+t_2))) = 0$.
    So, $E[\cos(\omega(t_1 + t_2) + 2\Theta)] = 0$.

    Therefore, $R_X(t_1, t_2) = A^2 \cdot \frac{1}{2} \cos(\omega(t_1 - t_2))$.
    Let $\tau = t_2 - t_1$, then $t_1 - t_2 = -\tau$.
    $R_X(\tau) = \frac{A^2}{2} \cos(-\omega\tau) = \frac{A^2}{2} \cos(\omega\tau)$.
    Since the autocorrelation function depends only on the time difference $\tau$, the process is weakly stationary.

    **Conclusion:** The process is weakly stationary because its mean is constant (0) and its autocorrelation function depends only on the time difference $\tau$.

---

### 5. Additional Exercises (Self-Study)

**Exercise 1:**
Consider a discrete-time random process where $X_n$ is the number of arrivals in the $n$-th hour. If the arrivals follow a Poisson process with rate $\lambda$, how would you classify this process based on its index set and state space? Is it likely to be stationary?

**Exercise 2:**
Let $X(t)$ be a random process such that $X(t) = \sin(t) + N(t)$, where $N(t)$ is a stationary Gaussian noise process with zero mean and autocorrelation $R_N(\tau) = \sigma^2 e^{-\alpha|\tau|}$. Is $X(t)$ stationary? Justify your answer.

---
This concludes the study notes for the classification of random processes. Understanding these classifications is a foundational step for analyzing and applying random processes in various electrical science domains.
