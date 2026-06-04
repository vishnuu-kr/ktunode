---
title: "Special classes"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 4: Random process concept"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35db3"
status: "completed"
scrapedAt: "2026-05-23T16:17:07.480Z"
---
This is a comprehensive set of study notes for **Module 4: Random Process Concept - Special Classes** in MATHEMATICS FOR ELECTRICAL SCIENCE– 4. These notes aim to cover all learning outcomes, incorporate insights from the recommended textbooks, and align with the stated course outcomes.

---

# MATHEMATICS FOR ELECTRICAL SCIENCE– 4

## Module 4: Random Process Concept

### Topic: Special Classes of Random Processes

---

### 1. Introduction to Special Classes of Random Processes

Random processes are fundamental to modeling various phenomena in electrical science, such as noise, signal fluctuations, and system behavior over time. Understanding special classes of random processes allows us to efficiently analyze and predict their characteristics. This section delves into some of the most important and frequently encountered special classes.

**Key Concept:** A **random process** $\{X(t), t \in T\}$ is a collection of random variables indexed by time $t$.

**Learning Outcome Addressed:**
*   Understanding the concept, properties, and important models of random processes.
*   Analyzing random processes by classifying them and describing their properties. (CO4)

**Reference:**
*   Devore J. L., *Probability and Statistics for Engineering and the Sciences*, 9th ed., Chapter 10.
*   Veerarajan T., *Probability, Statistics and Random Processes*, 3rd ed., Chapter 9.

---

### 2. Classification of Random Processes

Random processes can be classified based on various attributes, including:

*   **State Space:** The set of possible values the random variables can take (e.g., discrete or continuous).
*   **Index Set:** The set of time instants considered (e.g., discrete-time or continuous-time).
*   **Statistical Properties:** Such as stationarity, ergodicity, memory, etc.

For this topic, we will focus on classifications relevant to their statistical behavior and common applications in electrical science.

---

### 3. Special Classes of Random Processes

We will explore the following key special classes:

#### 3.1. Stationary Processes

A random process is considered **stationary** if its statistical properties do not change over time. This simplifies analysis significantly.

**3.1.1. Strictly Stationary Process:**
A process $\{X(t)\}$ is strictly stationary if the joint distribution of $(X(t_1), X(t_2), ..., X(t_n))$ is the same as the joint distribution of $(X(t_1+h), X(t_2+h), ..., X(t_n+h))$ for any $t_1, ..., t_n$ and any $h$. This implies that all moments and distributions are time-invariant.

**3.1.2. Weakly Stationary (or Wide-Sense Stationary - WSS) Process:**
A process $\{X(t)\}$ is weakly stationary if:
1.  **Constant Mean:** $E[X(t)] = \mu$ for all $t$. The mean is constant and does not depend on time.
2.  **Time-Invariant Autocovariance:** $Cov(X(t), X(t+h)) = C(h)$ for all $t$ and some function $C(h)$ that depends only on the time difference $h$, not on $t$.
    *   The **autocorrelation function** $R_X(t, t+h) = E[X(t)X(t+h)]$ is also time-invariant for WSS processes. If $E[X(t)] = \mu$, then $R_X(t, t+h) = E[(X(t)-\mu+\mu)(X(t+h)-\mu+\mu)] = E[(X(t)-\mu)(X(t+h)-\mu) + \mu(X(t)-\mu) + \mu(X(t+h)-\mu) + \mu^2] = C(h) + \mu^2$. Thus, for WSS processes, $R_X(t, t+h) = R_X(h) = C(h) + \mu^2$.

**Importance in Electrical Science:** WSS processes are widely used because many physical systems exhibit statistical properties that are approximately constant over time. Their analysis is simpler due to the time-invariant nature of their mean and autocorrelation.

**Example:** Thermal noise in a resistor is often modeled as a WSS random process.

**Reference:**
*   Devore J. L., *Probability and Statistics for Engineering and the Sciences*, 9th ed., Section 10.4.
*   Veerarajan T., *Probability, Statistics and Random Processes*, 3rd ed., Section 9.1.
*   Papoulis & Pillai, *Probability, Random Variables and Stochastic Processes*, 4th ed., Chapter 11.

**Important Point to Remember:**
*   Strict stationarity implies weak stationarity, but the converse is not always true. WSS is a more practical condition for analysis.

#### 3.2. Ergodic Processes

An **ergodic process** is one where time averages converge to ensemble averages. If a process is ergodic, we can estimate its statistical properties by observing the process over a single, sufficiently long period.

**3.2.1. Mean Ergodicity:**
A process $\{X(t)\}$ is mean ergodic if:
$$ \lim_{T \to \infty} \frac{1}{T} \int_0^T X(t) dt = E[X(t)] \quad \text{with probability 1} $$
This means the time-averaged mean converges to the ensemble mean.

**3.2.2. Autocorrelation Ergodicity (or Welford Ergodicity):**
A WSS process $\{X(t)\}$ is autocorrelation ergodic if its autocorrelation function can be estimated from a single sample function:
$$ \lim_{T \to \infty} \frac{1}{T} \int_0^T X(t)X(t+h) dt = E[X(t)X(t+h)] \quad \text{with probability 1} $$
For a WSS process, this becomes:
$$ \lim_{T \to \infty} \frac{1}{T} \int_0^T X(t)X(t+h) dt = R_X(h) \quad \text{with probability 1} $$

**Importance in Electrical Science:** Ergodicity is crucial for practical measurements. We often have access to only one realization (sample function) of a random process and need to estimate its properties. If the process is ergodic, these estimates are reliable.

**Example:** A stationary Gaussian process is ergodic if its autocorrelation function decays sufficiently rapidly.

**Reference:**
*   Veerarajan T., *Probability, Statistics and Random Processes*, 3rd ed., Section 9.2.
*   Papoulis & Pillai, *Probability, Random Variables and Stochastic Processes*, 4th ed., Chapter 11.

**Important Point to Remember:**
*   Ergodicity allows us to substitute time averages for ensemble averages, which is essential for experimental analysis.
*   Ergodicity is a stronger condition than stationarity.

#### 3.3. Markov Processes (or Markov Chains for Discrete State)

A **Markov process** is characterized by the **Markov property**: the future state of the process depends only on the present state, not on the past sequence of events.

**3.3.1. Markov Property:**
For a discrete-time process $\{X_n\}$, the property is:
$$ P(X_{n+1} \le x | X_n = x_n, X_{n-1} = x_{n-1}, ..., X_0 = x_0) = P(X_{n+1} \le x | X_n = x_n) $$
For a continuous-time process $\{X(t)\}$, the property is:
$$ P(X(t+s) \le x | X(u) = x(u) \text{ for } 0 \le u \le t) = P(X(t+s) \le x | X(t) = x(t)) $$

**3.3.2. Markov Chains (Discrete State Space, Discrete Time):**
A discrete-time process with a countable state space is a Markov chain if it satisfies the Markov property. Key characteristics include:
*   **Transition Probability Matrix:** A matrix $P = [p_{ij}]$ where $p_{ij} = P(X_{n+1} = j | X_n = i)$ is the probability of transitioning from state $i$ to state $j$ in one time step.
*   **Stationary Transition Probabilities:** If $p_{ij}$ are independent of $n$.

**3.3.3. Continuous-Time Markov Chains:**
Processes that change state at random times, with the future state depending only on the current state. Characterized by:
*   **Infinitesimal Generator Matrix:** A matrix $Q = [q_{ij}]$ where $q_{ij} = \lim_{\Delta t \to 0} \frac{1}{\Delta t} P(X(t+\Delta t) = j | X(t) = i)$ for $i \neq j$, and $q_{ii} = -\sum_{j \neq i} q_{ij}$.

**Importance in Electrical Science:** Markov processes are used to model systems with memoryless transitions, such as queuing systems, reliability analysis, and machine state transitions in control systems.

**Example:** The state of a component (working/failed) can be modeled as a Markov chain. The arrival of customers at a service point can be modeled using Poisson processes, which are a type of Markov process.

**Reference:**
*   Devore J. L., *Probability and Statistics for Engineering and the Sciences*, 9th ed., Section 10.5.
*   Veerarajan T., *Probability, Statistics and Random Processes*, 3rd ed., Chapter 7.
*   Ross S. M., *Introduction to Probability and Statistics for Engineers and Scientists*, 6th ed., Chapter 7.
*   Palaniammal S., *Probability and Random Processes*, 3rd ed., Chapter 6.

**Important Point to Remember:**
*   The "memoryless" property is the defining characteristic of Markov processes.

#### 3.4. Poisson Process

A **Poisson process** is a counting process that counts the number of events occurring in a given interval of time or space, where events occur independently and at a constant average rate.

**3.4.1. Definition:**
A counting process $\{N(t), t \ge 0\}$ is a Poisson process with rate $\lambda > 0$ if:
1.  $N(0) = 0$.
2.  The increments of the process are independent: for any $0 \le t_1 < t_2 < ... < t_n$, the random variables $N(t_2)-N(t_1), N(t_3)-N(t_2), ..., N(t_n)-N(t_{n-1})$ are independent.
3.  The distribution of the number of events in any interval of length $s$ depends only on $s$: $P(N(t+s) - N(t) = k) = e^{-\lambda s} \frac{(\lambda s)^k}{k!}$ for $k = 0, 1, 2, ...$. This means the number of events in an interval of length $s$ follows a Poisson distribution with parameter $\lambda s$.

**3.4.2. Properties:**
*   **Stationarity of Increments:** The distribution of $N(t+s) - N(t)$ depends only on $s$.
*   **Memoryless Property:** The number of events in future intervals is independent of the number of events in past intervals.
*   **Interarrival Times:** The time between consecutive events follows an exponential distribution with parameter $\lambda$. $P(\text{time between events} \le t) = 1 - e^{-\lambda t}$.

**Importance in Electrical Science:** Poisson processes are fundamental for modeling arrival processes in communication systems, fault occurrences in hardware, and signal counts in detection systems.

**Example:** The number of phone calls arriving at a call center per hour, the number of defects on a circuit board per square meter.

**Reference:**
*   Devore J. L., *Probability and Statistics for Engineering and the Sciences*, 9th ed., Section 10.3.
*   Veerarajan T., *Probability, Statistics and Random Processes*, 3rd ed., Chapter 4.
*   Ross S. M., *Introduction to Probability and Statistics for Engineers and Scientists*, 6th ed., Chapter 5.
*   Anderson, Benedek, *Introduction to Probability*, 1st ed., Chapter 6.

**Important Point to Remember:**
*   The rate $\lambda$ is the average number of events per unit time.
*   The Poisson process is a fundamental building block for more complex stochastic models.

#### 3.5. Gaussian Process (or Normal Process)

A **Gaussian process** is a collection of random variables $\{X(t), t \in T\}$ such that every finite subset of these random variables has a multivariate normal (Gaussian) distribution.

**3.5.1. Definition:**
For any finite set of time points $\{t_1, t_2, ..., t_n\}$, the random vector $(X(t_1), X(t_2), ..., X(t_n))$ has a multivariate normal distribution.

**3.5.2. Properties:**
*   **Completely Specified by Mean and Autocovariance:** A Gaussian process is fully characterized by its mean function $E[X(t)]$ and its autocovariance function $C_X(t_1, t_2) = Cov(X(t_1), X(t_2))$.
*   **Linear Operations Preserve Gaussianity:** If $\{X(t)\}$ is a Gaussian process and $Y(t) = aX(t) + b$ or $Y(t) = \int h(u)X(t-u)du$, then $\{Y(t)\}$ is also a Gaussian process.

**3.5.3. WSS Gaussian Process:**
If a Gaussian process is also weakly stationary, its mean is constant ($E[X(t)] = \mu$) and its autocovariance function depends only on the time difference: $C_X(t_1, t_2) = C_X(\tau)$, where $\tau = t_2 - t_1$. The autocorrelation function is $R_X(\tau) = C_X(\tau) + \mu^2$.

**Importance in Electrical Science:** Gaussian processes are ubiquitous in modeling noise (e.g., thermal noise, shot noise), signal propagation in channels, and the output of linear systems driven by random inputs.

**Example:** White noise, filtered noise, the output of a linear system driven by white noise.

**Reference:**
*   Devore J. L., *Probability and Statistics for Engineering and the Sciences*, 9th ed., Section 10.4.
*   Veerarajan T., *Probability, Statistics and Random Processes*, 3rd ed., Section 9.3.
*   Papoulis & Pillai, *Probability, Random Variables and Stochastic Processes*, 4th ed., Chapter 12.
*   Ross S. M., *Introduction to Probability and Statistics for Engineers and Scientists*, 6th ed., Section 10.5.

**Important Point to Remember:**
*   The sum of independent Gaussian random variables is Gaussian. This property extends to Gaussian processes, making them easy to combine and transform.

#### 3.6. White Noise Processes

**White noise** is an idealized random process that has a constant power spectral density across all frequencies. In practice, it's a mathematical construct used to represent a signal that is highly random and uncorrelated over time.

**3.6.1. Ideal White Noise (Continuous-Time):**
An idealized continuous-time white noise process, often denoted as $W(t)$ or $\eta(t)$, has the following properties:
*   **Zero Mean:** $E[W(t)] = 0$ for all $t$.
*   **Delta-Correlated:** $E[W(t)W(s)] = \sigma^2 \delta(t-s)$, where $\sigma^2$ is the variance (or power spectral density) and $\delta(\cdot)$ is the Dirac delta function.
*   **Infinite Bandwidth:** The power spectral density $S_W(f) = \sigma^2$ for all $f$.

**Important Note:** Ideal white noise is not a WSS process because its autocorrelation function is a Dirac delta function, which is not a well-behaved function in the traditional sense. However, it is often treated as a WSS process in the context of distributions or generalized functions.

**3.6.2. Discrete-Time White Noise:**
A discrete-time white noise process $\{W_n\}$ has:
*   **Zero Mean:** $E[W_n] = 0$ for all $n$.
*   **Uncorrelated Samples:** $E[W_n W_m] = \sigma^2 \delta_{nm}$, where $\delta_{nm}$ is the Kronecker delta. This means $E[W_n W_m] = \sigma^2$ if $n=m$ and $0$ if $n \neq m$.

**Importance in Electrical Science:** White noise is a fundamental concept for:
*   **System Modeling:** As an input signal to linear systems, where the output's characteristics can be easily determined.
*   **Noise Analysis:** Represents broadband noise that can corrupt signals.
*   **Stochastic Differential Equations:** Used extensively in modeling physical phenomena.

**Example:** The noise generated by a large number of independent random physical processes.

**Reference:**
*   Veerarajan T., *Probability, Statistics and Random Processes*, 3rd ed., Section 9.4.
*   Papoulis & Pillai, *Probability, Random Variables and Stochastic Processes*, 4th ed., Chapter 15.
*   Ross S. M., *Introduction to Probability and Statistics for Engineers and Scientists*, 6th ed., Section 10.5.

**Important Point to Remember:**
*   White noise represents a signal with maximum randomness and no temporal correlation.
*   Its key characteristic is a flat power spectral density.

---

### 4. Course Outcomes Alignment and Knowledge Levels

This topic directly supports **CO4: Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems.** (Knowledge Level: K3)

*   **Classification:** We have classified processes into stationary, ergodic, Markov, Poisson, Gaussian, and white noise, understanding their distinguishing features.
*   **Properties:** The key properties of each class (mean, autocorrelation, memory, transition probabilities, spectral density) have been described.
*   **Autocorrelation Functions:** Implicit in the discussion of stationary and Gaussian processes, the autocorrelation function is a critical tool for characterizing these processes.
*   **Applications:** The practical relevance of each class in electrical science, such as signal processing and communication systems, has been highlighted.

---

### 5. Practice Questions and Exercises

**Question 1:**
A continuous-time random process is described by $X(t) = A \cos(\omega t + \Phi)$, where $A$ and $\omega$ are constants, and $\Phi$ is a random variable uniformly distributed in $[0, 2\pi]$.
(a) Is this process WSS if $E[A] = 0$?
(b) Calculate the autocorrelation function $R_X(\tau)$.

**Answer 1:**
(a) For the process to be WSS, we need $E[X(t)]$ to be constant and $Cov(X(t), X(t+h))$ to depend only on $h$.
$E[X(t)] = E[A \cos(\omega t + \Phi)]$. If $E[A] = 0$, then $E[X(t)] = 0$, which is constant.
$R_X(t, t+h) = E[X(t)X(t+h)] = E[A \cos(\omega t + \Phi) A \cos(\omega (t+h) + \Phi)]$
$R_X(t, t+h) = E[A^2] E[\cos(\omega t + \Phi) \cos(\omega t + \omega h + \Phi)]$
Using $\cos(u)\cos(v) = \frac{1}{2}[\cos(u-v) + \cos(u+v)]$:
$\cos(\omega t + \Phi) \cos(\omega t + \omega h + \Phi) = \frac{1}{2}[\cos(\omega h) + \cos(2\omega t + \omega h + 2\Phi)]$
$E[\cos(\omega h) + \cos(2\omega t + \omega h + 2\Phi)] = \cos(\omega h) + E[\cos(2\omega t + \omega h + 2\Phi)]$
Since $\Phi$ is uniformly distributed in $[0, 2\pi]$, $E[\cos(2\omega t + \omega h + 2\Phi)] = 0$.
So, $E[\cos(\omega t + \Phi) \cos(\omega t + \omega h + \Phi)] = \frac{1}{2} \cos(\omega h)$.
$R_X(t, t+h) = E[A^2] \frac{1}{2} \cos(\omega h)$.
This is independent of $t$ and depends only on $h$. Thus, if $E[A]=0$, the process is WSS.

(b) $R_X(\tau) = E[A^2] \frac{1}{2} \cos(\omega \tau)$.

---

**Question 2:**
Consider a Poisson process with rate $\lambda = 5$ events per hour.
(a) What is the probability that exactly 10 events occur in a 2-hour period?
(b) What is the probability that the time between two consecutive events is less than 30 minutes?

**Answer 2:**
(a) The number of events in a 2-hour period follows a Poisson distribution with parameter $\lambda s = 5 \text{ events/hour} \times 2 \text{ hours} = 10$.
$P(N(2) = 10) = e^{-10} \frac{10^{10}}{10!} \approx 0.1251$.

(b) The time between events in a Poisson process follows an exponential distribution with rate $\lambda$. The mean time between events is $1/\lambda$.
Here, $\lambda = 5$ events/hour, so the mean time is $1/5$ hour or 12 minutes.
We need the probability that the time $T$ is less than 30 minutes (0.5 hours).
$P(T \le 0.5) = 1 - e^{-\lambda t} = 1 - e^{-5 \times 0.5} = 1 - e^{-2.5} \approx 1 - 0.0821 = 0.9179$.

---

**Question 3:**
If $\{X(t)\}$ is a WSS Gaussian process with mean $\mu=0$ and autocorrelation function $R_X(\tau) = 5 e^{-2|\tau|}$, what is $E[X(3)X(5)]$?

**Answer 3:**
Since the process is WSS, its autocorrelation function $R_X(t_1, t_2)$ depends only on the time difference $\tau = t_2 - t_1$.
$E[X(t_1)X(t_2)] = R_X(t_2 - t_1)$.
Here, $t_1 = 3$ and $t_2 = 5$. The time difference is $\tau = 5 - 3 = 2$.
$E[X(3)X(5)] = R_X(2) = 5 e^{-2|2|} = 5 e^{-4} \approx 5 \times 0.0183 = 0.0916$.

---

**Question 4:**
Explain why an ideal white noise process is not strictly stationary.

**Answer 4:**
An ideal white noise process $W(t)$ has $E[W(t)W(s)] = \sigma^2 \delta(t-s)$.
For strict stationarity, the joint distributions of $(W(t_1), ..., W(t_n))$ must be the same as $(W(t_1+h), ..., W(t_n+h))$ for all $t_i$ and $h$.
Consider $n=2$ and the joint distribution of $(W(t_1), W(t_2))$.
If $t_1 \neq t_2$, $E[W(t_1)W(t_2)] = 0$ (since $\delta(t_1-t_2)=0$).
If $t_1 = t_2 = t$, $E[W(t)W(t)] = E[W(t)^2] = \sigma^2$.
The nature of the correlations (or lack thereof) between different time points is essential.
More fundamentally, strict stationarity requires that the probability density functions of the process at different time instances are identical. For example, the first-order PDF $f_{X(t)}(x)$ must be the same for all $t$.
In ideal white noise, the samples are delta-correlated, meaning they are completely independent and identically distributed (often assumed Gaussian). However, strict stationarity is a very strong condition that implies all finite-dimensional distributions are time-invariant. For a process like ideal white noise, while its marginal distributions might be time-invariant (e.g., if $W(t)$ is Gaussian with mean 0 and variance $\sigma^2$), the instantaneous correlation of $W(t)$ with itself at a different time $s$ is zero unless $t=s$. The concept of time-invariant joint distributions for all $t_i$ and $h$ is what makes strict stationarity complex to satisfy for processes with such strong instantaneous correlations (or independence). The Dirac delta function, representing infinite bandwidth and no correlation, inherently makes it not strictly stationary in the conventional sense of smooth probability density functions and correlations.

---

### 6. Important Points to Remember

*   **Stationarity:** Simplifies analysis by making statistical properties time-invariant. WSS is a more practical condition than strict stationarity.
*   **Ergodicity:** Allows time averages to estimate ensemble averages, crucial for experimental data analysis.
*   **Markov Property:** The future state depends only on the present state, simplifying probabilistic modeling of dynamic systems.
*   **Poisson Process:** Models the occurrence of random events at a constant average rate; characterized by exponential interarrival times.
*   **Gaussian Process:** Defined by multivariate Gaussian distributions for any finite collection of random variables; fully specified by mean and autocovariance functions.
*   **White Noise:** Idealized process with constant power spectral density and zero correlation between samples at different times. A fundamental input for system analysis.

---
