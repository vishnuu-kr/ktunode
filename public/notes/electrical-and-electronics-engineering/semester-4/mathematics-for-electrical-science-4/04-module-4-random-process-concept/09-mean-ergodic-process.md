---
title: "Mean-Ergodic Process"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 4: Random process concept"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35db8"
status: "completed"
scrapedAt: "2026-05-23T16:17:12.071Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 4: Random Process Concept

### Topic: Mean-Ergodic Process

---

### **1. Introduction to Random Processes**

A **random process** (or stochastic process) is a collection of random variables indexed by time (or sometimes another parameter). It describes the evolution of a system over time, where the evolution is subject to randomness.

**Key Concepts:**

*   **State Space:** The set of all possible values that the random variables in the process can take.
*   **Index Set (Time Set):** The set of values for which the random variables are indexed (e.g., discrete time $t \in \{0, 1, 2, \dots\}$ or continuous time $t \in \mathbb{R}$).
*   **Sample Function (Realization):** A single observed outcome of the random process over time. It's a specific sequence or function of time.
*   **Ensemble:** The collection of all possible sample functions of a random process.

**Textbook References:**

*   **Devore, J. L. (2016):** Introduces random processes as collections of random variables, often focusing on their statistical properties.
*   **Veerarajan, T. (2008):** Provides a foundational understanding of random processes, their classification, and basic properties.
*   **Papoulis & Pillai (2002):** Offers a deep dive into the mathematical theory of random processes, including their probabilistic structure.

---

### **2. Types of Random Processes**

Random processes can be classified based on their state space and index set:

*   **Discrete-Time, Discrete-State:** e.g., Markov chains.
*   **Discrete-Time, Continuous-State:** e.g., sampled signals.
*   **Continuous-Time, Discrete-State:** e.g., Poisson process.
*   **Continuous-Time, Continuous-State:** e.g., thermal noise in a resistor.

---

### **3. Statistical Properties of Random Processes**

For a random process $\{X(t), t \in T\}$, we are often interested in its statistical properties, particularly averages.

**3.1. Ensemble Averages (Cross-Sectional Averages)**

These are averages taken over the ensemble of sample functions at a specific time $t$.

*   **Mean Function (First Moment Function):** $\mu_X(t) = E[X(t)]$. This represents the expected value of the process at time $t$.
*   **Autocovariance Function:** $C_X(t_1, t_2) = E[(X(t_1) - \mu_X(t_1))(X(t_2) - \mu_X(t_2))]$. Measures the covariance between the process at two different times.
*   **Autocorrelation Function:** $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$.

**3.2. Time Averages**

These are averages taken over a single sample function over time. For a sample function $x(t)$:

*   **Time Average of the function:** $\frac{1}{T} \int_0^T x(t) dt$ (for continuous time).
*   **Time Average of the function:** $\frac{1}{N} \sum_{n=1}^N x[n]$ (for discrete time).

---

### **4. Ergodic Processes**

An **ergodic process** is a random process for which time averages are equal to ensemble averages. This is a crucial property because it allows us to estimate the statistical properties of the process by observing a single sample function over a long period.

**4.1. Mean-Ergodic Process**

A random process $\{X(t), t \in T\}$ is **mean-ergodic** if its time average converges to its ensemble average in some sense (usually in mean square).

**Definition:** A random process $\{X(t)\}$ is mean-ergodic if:

$$
\lim_{T \to \infty} \frac{1}{T} \int_0^T X(t) dt = E[X(t)] \quad \text{(in mean square)}
$$

For a discrete-time process $\{X[n]\}$, it is mean-ergodic if:

$$
\lim_{N \to \infty} \frac{1}{N} \sum_{n=1}^N X[n] = E[X[n]] \quad \text{(in mean square)}
$$

**Interpretation:** This means that if you have a sufficiently long observation of the process, the average value of that observation will be a good estimate of the true mean of the process.

**Conditions for Mean-Ergodicity (for Wide-Sense Stationary Processes):**

A process that is **wide-sense stationary (WSS)** has a constant mean and an autocorrelation function that depends only on the time difference. For a WSS process, the condition for mean-ergodicity simplifies.

A WSS process $\{X(t)\}$ with mean $\mu_X$ and autocorrelation $R_X(\tau)$ is mean-ergodic if and only if:

$$
\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2
$$

Alternatively, and more commonly stated:

A WSS process $\{X(t)\}$ with mean $\mu_X$ is mean-ergodic if and only if:

$$
\int_{-\infty}^{\infty} |R_X(\tau) - \mu_X^2| d\tau < \infty \quad \text{(for continuous time)}
$$

And for discrete time:

$$
\sum_{k=-\infty}^{\infty} |R_X[k] - \mu_X^2| < \infty
$$

**Key Point:** The autocorrelation function must decay sufficiently fast as the time lag $\tau$ goes to infinity for the process to be mean-ergodic.

**Textbook References:**

*   **Veerarajan, T. (2008):** Explicitly defines and discusses mean-ergodicity, often relating it to WSS processes.
*   **Papoulis & Pillai (2002):** Provides rigorous mathematical treatments of ergodicity, including mean-ergodicity.
*   **Ross, S. M. (2020):** Might cover ergodicity in the context of specific types of processes like Markov chains.

**Example:**

Consider a WSS random process $X(t)$ with mean $\mu_X = 2$ and autocorrelation function $R_X(\tau) = 4e^{-|\tau|}$.

To check for mean-ergodicity, we need to see if $\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2$.

$\lim_{\tau \to \infty} R_X(\tau) = \lim_{\tau \to \infty} 4e^{-|\tau|} = 0$.

And $\mu_X^2 = 2^2 = 4$.

Since $0 \neq 4$, this process is **not** mean-ergodic.

Let's consider another case where $R_X(\tau) = 4 + e^{-|\tau|}$.
$\lim_{\tau \to \infty} R_X(\tau) = \lim_{\tau \to \infty} (4 + e^{-|\tau|}) = 4$.
And $\mu_X^2 = 2^2 = 4$.
Here, $\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2$, so this process *could* be mean-ergodic. We would then check the integral condition.

**The Integral Condition Check:**

For $R_X(\tau) = 4 + e^{-|\tau|}$ and $\mu_X = 2$ ($\mu_X^2 = 4$):
$R_X(\tau) - \mu_X^2 = (4 + e^{-|\tau|}) - 4 = e^{-|\tau|}$.

We need to check if $\int_{-\infty}^{\infty} |e^{-|\tau|}| d\tau < \infty$.
$\int_{-\infty}^{\infty} e^{-|\tau|} d\tau = \int_{-\infty}^{0} e^{\tau} d\tau + \int_{0}^{\infty} e^{-\tau} d\tau$
$= [e^{\tau}]_{-\infty}^0 + [-e^{-\tau}]_0^\infty$
$= (e^0 - \lim_{\tau \to -\infty} e^{\tau}) + (-\lim_{\tau \to \infty} e^{-\tau} - (-e^0))$
$= (1 - 0) + (0 - (-1)) = 1 + 1 = 2$.

Since $2 < \infty$, the process with $R_X(\tau) = 4 + e^{-|\tau|}$ and $\mu_X = 2$ **is** mean-ergodic.

---

### **5. Importance and Implications of Mean-Ergodicity**

*   **Statistical Estimation:** If a process is mean-ergodic, we can estimate its mean by simply computing the time average of a single realization. This is immensely practical as collecting multiple realizations simultaneously might be impossible or impractical.
*   **System Identification:** In electrical engineering, understanding if a signal process is mean-ergodic allows us to use observed data to reliably estimate the underlying average behavior of the system generating the signal.
*   **Simplification of Analysis:** For WSS processes, mean-ergodicity allows us to use the time-averaged autocorrelation function to estimate the ensemble-averaged autocorrelation function.

**Alignment with Course Outcomes:**

*   **CO4: Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems.**
    *   Mean-ergodicity is a key property that describes the relationship between time and ensemble averages.
    *   Understanding the conditions for mean-ergodicity involves analyzing the autocorrelation function.
    *   The practical implications of mean-ergodicity directly relate to how we analyze and utilize random processes in signal processing and communications.

---

### **6. Other Types of Ergodicity (Brief Mention)**

While this topic focuses on mean-ergodicity, it's worth noting that there are other types of ergodicity:

*   **Autocorrelation Ergodicity:** Time average of the product of process values equals the ensemble average of the product.
*   **Variance Ergodicity:** Time average of the squared deviation from the mean equals the ensemble average of the squared deviation from the mean.
*   **General Ergodicity:** All statistical properties can be estimated from a single sample function.

A process is **ergodic** if it is ergodic in all these senses.

---

### **7. Practice Questions and Exercises**

**Question 1:**

Consider a discrete-time random process $X[n]$ with the following properties:
$E[X[n]] = 5$ for all $n$.
$R_X[n, k] = 25 + 10 \cdot (0.9)^{|n-k|}$.

Is this process mean-ergodic? Justify your answer.

**Answer 1:**

First, check if the process is WSS.
The mean is constant: $E[X[n]] = 5$.
The autocorrelation function $R_X[n, k]$ depends only on the time difference $|n-k|$, specifically $R_X[n, k] = 25 + 10 \cdot (0.9)^{|n-k|}$.
So, the process is WSS.

For a WSS process, mean-ergodicity is satisfied if $\sum_{k=-\infty}^{\infty} |R_X[k] - \mu_X^2| < \infty$, where $R_X[k]$ is the autocorrelation function $R_X[n, n-k]$ and $\mu_X = E[X[n]]$.

Here, $\mu_X = 5$, so $\mu_X^2 = 25$.
The autocorrelation function is $R_X[k] = 25 + 10 \cdot (0.9)^{|k|}$.

We need to check the sum:
$\sum_{k=-\infty}^{\infty} |R_X[k] - \mu_X^2| = \sum_{k=-\infty}^{\infty} |(25 + 10 \cdot (0.9)^{|k|}) - 25|$
$= \sum_{k=-\infty}^{\infty} |10 \cdot (0.9)^{|k|}|$
$= 10 \sum_{k=-\infty}^{\infty} (0.9)^{|k|}$
$= 10 \left( \sum_{k=-\infty}^{-1} (0.9)^{-k} + (0.9)^0 + \sum_{k=1}^{\infty} (0.9)^{k} \right)$
Let $j = -k$ in the first sum:
$= 10 \left( \sum_{j=1}^{\infty} (0.9)^{j} + 1 + \sum_{k=1}^{\infty} (0.9)^{k} \right)$
This is a geometric series with first term $a = 0.9$ and common ratio $r = 0.9$. The sum of an infinite geometric series is $a/(1-r)$.
$\sum_{k=1}^{\infty} (0.9)^{k} = \frac{0.9}{1-0.9} = \frac{0.9}{0.1} = 9$.

So the sum becomes:
$= 10 (9 + 1 + 9) = 10 (19) = 190$.

Since $190 < \infty$, the process **is** mean-ergodic.

**Question 2:**

A continuous-time random process is defined as $X(t) = A \cos(\omega_0 t + \Theta)$, where $A$ and $\omega_0$ are constants, and $\Theta$ is a random variable uniformly distributed in $[0, 2\pi]$. The autocorrelation function is $R_X(\tau) = \frac{A^2}{2} \cos(\omega_0 \tau)$.

Is this process mean-ergodic?

**Answer 2:**

First, we need to find the mean of the process.
$E[X(t)] = E[A \cos(\omega_0 t + \Theta)]$
Since $A$ and $\omega_0$ are constants, $E[X(t)] = A E[\cos(\omega_0 t + \Theta)]$.
$\Theta$ is uniformly distributed in $[0, 2\pi]$, so its probability density function is $f(\theta) = \frac{1}{2\pi}$ for $0 \le \theta \le 2\pi$, and 0 otherwise.

$E[\cos(\omega_0 t + \Theta)] = \int_{0}^{2\pi} \cos(\omega_0 t + \theta) f(\theta) d\theta$
$= \int_{0}^{2\pi} \cos(\omega_0 t + \theta) \frac{1}{2\pi} d\theta$
$= \frac{1}{2\pi} \left[ \frac{\sin(\omega_0 t + \theta)}{\omega_0} \right]_0^{2\pi}$
$= \frac{1}{2\pi \omega_0} [\sin(\omega_0 t + 2\pi) - \sin(\omega_0 t)]$
$= \frac{1}{2\pi \omega_0} [\sin(\omega_0 t) - \sin(\omega_0 t)] = 0$ (assuming $\omega_0 \neq 0$).

Therefore, $E[X(t)] = A \cdot 0 = 0$.
The mean is $\mu_X = 0$.

Now, we check the condition for mean-ergodicity for a WSS process (this process is WSS because its mean is 0 and its autocorrelation $R_X(\tau)$ depends only on $\tau$).
The condition is $\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2$.

We have $R_X(\tau) = \frac{A^2}{2} \cos(\omega_0 \tau)$ and $\mu_X^2 = 0^2 = 0$.

Let's evaluate $\lim_{\tau \to \infty} R_X(\tau)$:
$\lim_{\tau \to \infty} \frac{A^2}{2} \cos(\omega_0 \tau)$

As $\tau \to \infty$, $\cos(\omega_0 \tau)$ oscillates between -1 and 1. It does not approach a single value. Therefore, the limit does not exist, unless $A=0$ (trivial case).
Since $\lim_{\tau \to \infty} R_X(\tau)$ does not exist and is not equal to $\mu_X^2=0$, this process is **not** mean-ergodic.

**Question 3:**

A random process is described by $X(t) = C$, where $C$ is a random variable with mean $E[C] = 10$ and variance $Var(C) = 4$.

Is this process mean-ergodic?

**Answer 3:**

This is a WSS process since $X(t)$ is constant for any realization, so $E[X(t)] = E[C] = 10$ (constant mean).
The autocorrelation function is $R_X(t_1, t_2) = E[X(t_1)X(t_2)] = E[C \cdot C] = E[C^2]$.
We know that $Var(C) = E[C^2] - (E[C])^2$.
So, $4 = E[C^2] - (10)^2$.
$4 = E[C^2] - 100$.
$E[C^2] = 104$.

Thus, $R_X(t_1, t_2) = 104$ for all $t_1, t_2$. This means $R_X(\tau) = 104$ (a constant) for any time lag $\tau$.

Now we check the mean-ergodicity condition for a WSS process: $\lim_{\tau \to \infty} R_X(\tau) = \mu_X^2$.
$\mu_X = 10$, so $\mu_X^2 = 100$.
$\lim_{\tau \to \infty} R_X(\tau) = \lim_{\tau \to \infty} 104 = 104$.

Since $104 \neq 100$, this process is **not** mean-ergodic.

**Important Note:** A process that is a constant (deterministic) value is *not* random, and therefore cannot be ergodic. The definition of ergodicity is about estimating random properties from a single sample. If there's no randomness, there's nothing to estimate. However, the mathematical check using the autocorrelation property still applies.

---

### **8. Important Points to Remember**

*   **Mean-ergodicity** allows estimating the mean of a random process from a single, long observation.
*   It's a property that connects **time averages** (from one sample function) with **ensemble averages** (across many sample functions).
*   For **WSS processes**, mean-ergodicity holds if the autocorrelation function $R_X(\tau)$ decays to $\mu_X^2$ as $|\tau| \to \infty$, or more precisely, if the integral/sum of $|R_X(\tau) - \mu_X^2|$ is finite.
*   If a process is not WSS, the definition of mean-ergodicity still involves comparing time averages $\frac{1}{T} \int X(t) dt$ with ensemble averages $E[X(t)]$, but the conditions are more complex.
*   Mean-ergodicity is a fundamental concept for practical signal analysis and system characterization in electrical science.

---

This concludes the study notes for the Mean-Ergodic Process topic. Ensure you practice the examples and understand the conditions for mean-ergodicity for WSS processes, as these are frequently tested.
