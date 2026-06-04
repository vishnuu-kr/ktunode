---
title: "Mean-Ergodic Theorem"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 4: Random process concept"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35db9"
status: "completed"
scrapedAt: "2026-05-23T16:17:12.790Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 4: Random Process Concept

### Topic: Mean-Ergodic Theorem

---

### 1. Introduction to Random Processes and Ergodicity

**What is a Random Process?**

A random process is a collection of random variables indexed by time (or space). Think of it as a time-varying phenomenon where the value at any given time is uncertain.

*   **Notation:** A random process is often denoted by $\{X(t), t \in T\}$ or simply $X(t)$, where $T$ is the index set (e.g., time).
*   **Realizations (Sample Functions):** For each possible outcome of the underlying probability space, we get a specific function of time, called a realization or sample function.

**Why Study Random Processes in Electrical Science?**

Many phenomena in electrical engineering are inherently random and vary over time:

*   **Noise:** Thermal noise in resistors, shot noise in semiconductor devices.
*   **Signals:** Randomly varying input signals, communication signals with random fluctuations.
*   **System Outputs:** Responses of electrical systems to random inputs.

**Ergodicity: Connecting Time Averages to Ensemble Averages**

A crucial concept in analyzing random processes is **ergodicity**. In simple terms, an ergodic process is one where the long-term average behavior of a single realization is the same as the average behavior across all possible realizations (the ensemble average).

**Why is Ergodicity Important?**

In practical scenarios, we often only have access to a single realization of a random process (e.g., a recorded noisy signal). If the process is ergodic, we can estimate the ensemble average (which characterizes the entire process) by calculating time averages from this single realization. This is a powerful tool for system analysis and parameter estimation.

---

### 2. Key Concepts and Definitions

**2.1 Ensemble Average (Mean)**

The ensemble average of a random process $X(t)$ at a specific time $t$ is the expected value of the random variable $X(t)$.

*   **Definition:** $\mu_X(t) = E[X(t)]$
*   **Interpretation:** This represents the average value of the process across all possible realizations at a specific instant in time.

**2.2 Time Average**

The time average of a single realization $x(t)$ of a random process is the average value of that realization over a long period.

*   **Definition:** $\hat{\mu}_X = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} x(t) dt$
*   **Interpretation:** This is the average value of a specific sampled history of the process.

**2.3 Stationarity**

A random process is **stationary** if its statistical properties do not change over time.

*   **Strict-Sense Stationarity:** The joint probability distribution of $\{X(t_1), X(t_2), ..., X(t_n)\}$ is the same as the joint probability distribution of $\{X(t_1+h), X(t_2+h), ..., X(t_n+h)\}$ for any $n$ and any $h$.
*   **Wide-Sense Stationarity (WSS):** A process is WSS if:
    *   $E[X(t)] = \mu$ (constant for all $t$)
    *   $E[X(t)X(t+\tau)] = R_X(\tau)$ (depends only on the time difference $\tau$, not on $t$)

**Important Note:** Strict-sense stationarity implies wide-sense stationarity, but the converse is not always true. For many practical purposes, WSS is sufficient.

---

### 3. The Mean-Ergodic Theorem

The Mean-Ergodic Theorem (also known as the **Ergodic Theorem** or **Mean-Ergodicity Theorem**) establishes the condition under which the time average of a random process is equal to its ensemble average.

**Statement of the Mean-Ergodic Theorem:**

A **wide-sense stationary (WSS)** random process $X(t)$ is **mean-ergodic** if and only if its autocorrelation function $R_X(\tau)$ satisfies:

$$ \lim_{\tau \to \infty} R_X(\tau) = \mu_X^2 $$

where $\mu_X = E[X(t)]$ is the constant mean of the WSS process.

**Simplified Explanation:**

If a process is WSS, and its "memory" decays such that its autocorrelation approaches the square of its mean as the time difference becomes very large, then the time average of any single realization will converge to the ensemble mean.

**Mathematical Formulation (for a signal x(t) that is a realization of X(t)):**

If $X(t)$ is a WSS process with mean $\mu_X$, then for any realization $x(t)$, the time average converges to the ensemble mean in the mean-square sense:

$$ E\left[\left(\frac{1}{T} \int_{0}^{T} x(t) dt - \mu_X\right)^2\right] \to 0 \text{ as } T \to \infty $$

This implies that:

$$ \frac{1}{T} \int_{0}^{T} x(t) dt \xrightarrow{m.s.} \mu_X \text{ as } T \to \infty $$

where $\xrightarrow{m.s.}$ denotes convergence in mean-square. For a continuous-time process, this often implies convergence with probability one (strong law of large numbers for stochastic processes), meaning the time average will almost surely equal the ensemble mean.

**Conditions for Mean-Ergodicity:**

1.  **Wide-Sense Stationarity (WSS):** The process must have a constant mean and an autocorrelation function that depends only on the time difference.
2.  **Decay of Autocorrelation:** The autocorrelation function $R_X(\tau)$ must approach $\mu_X^2$ as $\tau \to \infty$. This signifies that the correlation between values of the process diminishes as they become further apart in time.

**Textbook References:**

*   **Devore (9th ed.):** Likely discusses stationarity and its implications for averages, possibly touching on ergodicity in the context of signal processing or statistical inference for time series. Chapter 16 (Time Series Analysis) might contain relevant concepts.
*   **Veerarajan (3rd ed.):** Explicitly covers random processes and stationarity. The section on "Properties of Random Processes" and potentially "Ergodic Processes" will be key. Chapter 9 (Random Processes) is a primary reference.
*   **Papoulis & Pillai (4th ed.):** A foundational text. The concept of ergodicity and its connection to the autocorrelation function is a central theme in their treatment of random processes. Chapter 10 (Correlation Functions) and Chapter 12 (Spectral Representation) are highly relevant.
*   **Ross (6th ed.):** Might cover ergodicity in the context of limit theorems for random variables or sequences, which can be extended to processes.

---

### 4. Implications and Applications in Electrical Science

**4.1 Estimating the Mean from a Single Sample**

If a WSS process $X(t)$ is mean-ergodic, we can estimate its mean $\mu_X$ by calculating the time average of a single long realization:

$$ \hat{\mu}_X \approx \frac{1}{T} \int_{0}^{T} x(t) dt \quad \text{for large } T $$

**Example:** Consider a noisy voltage signal $v(t)$ in an electrical circuit. If the noise process is WSS and mean-ergodic with a mean voltage of 0 (e.g., zero-mean Gaussian noise), we can measure the average voltage over a long period from a single recording of $v(t)$ to estimate this mean.

**4.2 Power Spectral Density (PSD)**

The Mean-Ergodic Theorem is closely related to the concept of the Power Spectral Density (PSD). For a WSS process, the Wiener-Khinchin theorem states that the PSD $S_X(f)$ is the Fourier transform of the autocorrelation function $R_X(\tau)$.

*   **Wiener-Khinchin Theorem:** $S_X(f) = \mathcal{F}\{R_X(\tau)\}$ and $R_X(\tau) = \mathcal{F}^{-1}\{S_X(f)\}$
*   **Connection to Ergodicity:** The condition $\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2$ implies that the power at DC (zero frequency, $f=0$) in the PSD is proportional to the square of the mean. For a process with zero mean, this means $S_X(f)$ must decay sufficiently fast as $f \to 0$ for the process to be mean-ergodic.

**Important Point:** The total power of a WSS process is given by $R_X(0) = E[X^2(t)]$. If the process is mean-ergodic, the mean-square value $E[X^2(t)]$ can also be estimated from a single realization.

**4.3 Other Forms of Ergodicity**

While this topic focuses on **mean-ergodicity**, other forms exist:

*   **Autocorrelation Ergodicity (or Ergodic in Autocorrelation):** The time average of the product of two shifted realizations converges to the ensemble average of the product:
    $$ \lim_{T \to \infty} \frac{1}{T} \int_{0}^{T} x(t) x(t+\tau) dt = E[X(t)X(t+\tau)] = R_X(\tau) $$
    This allows us to estimate the autocorrelation function from a single realization. If a process is mean-ergodic and autocorrelation-ergodic, it is called **ergodic**.

---

### 5. Practice Questions and Exercises

**Question 1:**

A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by $R_X(\tau) = 10e^{-2|\tau|} + 4$. What is the mean of this process? Is this process mean-ergodic? Justify your answer.

**Solution 1:**

For a WSS process, the mean $\mu_X$ is a constant. The autocorrelation function is given by $R_X(\tau) = E[X(t)X(t+\tau)]$.
We know that $R_X(0) = E[X^2(t)]$.
For a WSS process, if it is mean-ergodic, then $\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2$.

In this case, $R_X(\tau) = 10e^{-2|\tau|} + 4$.
As $\tau \to \infty$, $e^{-2|\tau|} \to 0$.
Therefore, $\lim_{\tau \to \infty} R_X(\tau) = 10(0) + 4 = 4$.

For the process to be mean-ergodic, this limit must be equal to $\mu_X^2$.
So, $\mu_X^2 = 4$.
This implies $\mu_X = \pm 2$.

However, the mean of a WSS process must be constant. The structure of the autocorrelation function $R_X(\tau) = E[X(t)X(t+\tau)]$ can be decomposed. If we assume $X(t) = Y(t) + \mu_X$, where $Y(t)$ is a zero-mean WSS process with autocorrelation $R_Y(\tau)$, then:
$R_X(\tau) = E[(Y(t)+\mu_X)(Y(t+\tau)+\mu_X)]$
$R_X(\tau) = E[Y(t)Y(t+\tau)] + \mu_X E[Y(t+\tau)] + \mu_X E[Y(t)] + \mu_X^2$
$R_X(\tau) = R_Y(\tau) + \mu_X(0) + \mu_X(0) + \mu_X^2$
$R_X(\tau) = R_Y(\tau) + \mu_X^2$

Comparing this general form with the given $R_X(\tau) = 10e^{-2|\tau|} + 4$:
We can identify $R_Y(\tau) = 10e^{-2|\tau|}$ and $\mu_X^2 = 4$.
Therefore, the mean is $\mu_X = \pm 2$. Let's assume $\mu_X = 2$ (often we consider the positive root for simplicity unless otherwise specified).

Now, let's check the condition for mean-ergodicity:
$\lim_{\tau \to \infty} R_X(\tau) = \lim_{\tau \to \infty} (10e^{-2|\tau|} + 4) = 4$.
And $\mu_X^2 = 2^2 = 4$.
Since $\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2$, the process is **mean-ergodic**.

**Answer:** The mean of the process is $\mu_X = \pm 2$. Yes, the process is mean-ergodic because $\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2 = 4$.

---

**Question 2:**

Consider a WSS random process $X(t)$ with mean $\mu_X = 5$ and autocorrelation function $R_X(\tau) = 25 + 2e^{-|\tau|}$. Is this process mean-ergodic?

**Solution 2:**

For a WSS process, mean-ergodicity requires $\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2$.
Given $\mu_X = 5$, so $\mu_X^2 = 25$.
The autocorrelation function is $R_X(\tau) = 25 + 2e^{-|\tau|}$.

Let's evaluate the limit:
$\lim_{\tau \to \infty} R_X(\tau) = \lim_{\tau \to \infty} (25 + 2e^{-|\tau|})$
As $\tau \to \infty$, $e^{-|\tau|} \to 0$.
So, $\lim_{\tau \to \infty} R_X(\tau) = 25 + 2(0) = 25$.

Comparing the limit with $\mu_X^2$:
$\lim_{\tau \to \infty} R_X(\tau) = 25$ and $\mu_X^2 = 25$.
Since the limit equals $\mu_X^2$, the condition for mean-ergodicity is met.

**Answer:** Yes, the process is mean-ergodic because $\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2 = 25$.

---

**Question 3:**

A random process $X(t)$ is defined as $X(t) = A \cos(\omega t + \Theta)$, where $A$ and $\omega$ are constants, and $\Theta$ is a random variable uniformly distributed over $[0, 2\pi]$.
Assume $A^2 = 10$.
The autocorrelation function is $R_X(\tau) = E[X(t)X(t+\tau)] = \frac{A^2}{2} \cos(\omega \tau) = 5 \cos(\omega \tau)$.
Is this process mean-ergodic? If so, what is its mean?

**Solution 3:**

First, let's find the mean of the process:
$\mu_X = E[X(t)] = E[A \cos(\omega t + \Theta)]$
Since $A$ and $\omega$ are constants, $\mu_X = A E[\cos(\omega t + \Theta)]$.
Given $\Theta$ is uniformly distributed over $[0, 2\pi]$, its probability density function is $f_\Theta(\theta) = \frac{1}{2\pi}$ for $0 \le \theta \le 2\pi$, and 0 otherwise.

$E[\cos(\omega t + \Theta)] = \int_{0}^{2\pi} \cos(\omega t + \theta) \frac{1}{2\pi} d\theta$
Let $\phi = \omega t + \theta$. Then $d\phi = d\theta$. When $\theta=0, \phi=\omega t$. When $\theta=2\pi, \phi=\omega t+2\pi$.
$E[\cos(\omega t + \Theta)] = \frac{1}{2\pi} \int_{\omega t}^{\omega t+2\pi} \cos(\phi) d\phi$
$E[\cos(\omega t + \Theta)] = \frac{1}{2\pi} [\sin(\phi)]_{\omega t}^{\omega t+2\pi}$
$E[\cos(\omega t + \Theta)] = \frac{1}{2\pi} (\sin(\omega t + 2\pi) - \sin(\omega t))$
$E[\cos(\omega t + \Theta)] = \frac{1}{2\pi} (\sin(\omega t) - \sin(\omega t)) = 0$.

So, $\mu_X = A \times 0 = 0$. The mean of this process is 0.
This process is also wide-sense stationary since $\mu_X=0$ is constant and $R_X(\tau) = 5 \cos(\omega \tau)$ depends only on $\tau$.

Now, let's check the condition for mean-ergodicity:
We need to check if $\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2$.
We have $R_X(\tau) = 5 \cos(\omega \tau)$ and $\mu_X^2 = 0^2 = 0$.

Consider the limit $\lim_{\tau \to \infty} 5 \cos(\omega \tau)$.
If $\omega \ne 0$, the term $\cos(\omega \tau)$ oscillates between -1 and 1 as $\tau \to \infty$. Therefore, the limit does not exist.
Specifically, the limit is not equal to 0.

**Answer:** No, this process is not mean-ergodic because the limit of its autocorrelation function as $\tau \to \infty$ does not exist (it oscillates). The mean is $\mu_X = 0$.

---

### 6. Important Points to Remember

*   **Ergodicity links time averages and ensemble averages.** This is crucial because we often only have access to single realizations.
*   **Mean-Ergodicity:** A WSS process is mean-ergodic if and only if its autocorrelation function $R_X(\tau)$ approaches the square of its mean $\mu_X^2$ as $\tau \to \infty$.
*   **Implication:** If a process is mean-ergodic, the time average of any realization converges to the ensemble mean.
*   **WSS is a prerequisite:** The Mean-Ergodic Theorem applies to WSS processes.
*   **Autocorrelation decay is key:** For a process with a non-zero mean, the autocorrelation must decay such that its constant offset equals $\mu_X^2$. For a zero-mean process, the autocorrelation must decay to zero.
*   **Examples:** Sinusoidal signals with random phase are WSS but *not* mean-ergodic if $\omega \ne 0$ because their autocorrelation oscillates. Many physical noise processes (like thermal noise) are modeled as WSS and mean-ergodic.

---

### 7. Alignment with Course Outcomes

*   **CO4: Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems.**
    *   This topic directly addresses the properties of random processes (stationarity, ergodicity) and the crucial role of the autocorrelation function in determining these properties. Understanding mean-ergodicity is fundamental for analyzing signals and systems in electrical science, as it justifies using time-domain measurements to estimate fundamental process parameters like the mean.

---
This concludes the study notes on the Mean-Ergodic Theorem. Remember to consult the recommended textbooks for a deeper understanding and more examples.
