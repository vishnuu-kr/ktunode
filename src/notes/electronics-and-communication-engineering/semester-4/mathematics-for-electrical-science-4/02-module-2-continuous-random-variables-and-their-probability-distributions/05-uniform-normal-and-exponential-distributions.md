---
title: "Uniform, Normal and Exponential distributions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4c4"
status: "completed"
scrapedAt: "2026-05-23T17:50:43.681Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Uniform, Normal, and Exponential Distributions

---

This module delves into the fundamental concepts of continuous random variables and explores three of the most important probability distributions in engineering and science: the Uniform, Normal, and Exponential distributions. Understanding these distributions is crucial for modeling various real-world phenomena encountered in electrical science.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Define and describe the properties of the Uniform distribution.** (K3 - Apply)
*   **Define and describe the properties of the Normal distribution.** (K3 - Apply)
*   **Define and describe the properties of the Exponential distribution.** (K3 - Apply)
*   **Calculate probabilities and cumulative probabilities for each of these distributions.** (K3 - Apply)
*   **Identify real-world scenarios where these distributions are applicable.** (K3 - Apply)
*   **Understand the significance of the parameters associated with each distribution.** (K3 - Apply)

---

### Module Overview and Relevance to Course Outcomes:

This topic directly addresses **CO2: Describe the concept, properties and important models of continuous random variables and to apply in suitable random phenomena.** The Uniform, Normal, and Exponential distributions are key "important models" of continuous random variables. The ability to calculate probabilities and identify applications aligns with the "apply in suitable random phenomena" aspect of CO2.

---

## 1. Continuous Random Variables: A Quick Recap

Before diving into specific distributions, let's briefly recall the essentials of continuous random variables.

*   **Definition:** A random variable $X$ is continuous if its possible values form an interval or a set of intervals.
*   **Probability Density Function (PDF):** For a continuous random variable $X$, the probability of $X$ taking on a specific value $x$ is zero, i.e., $P(X=x) = 0$. Instead, we use a **Probability Density Function (PDF)**, denoted by $f(x)$, which describes the relative likelihood for the random variable to take on a given value.
*   **Properties of PDF:**
    *   $f(x) \ge 0$ for all $x$.
    *   $\int_{-\infty}^{\infty} f(x) \, dx = 1$ (The total area under the PDF curve is 1).
*   **Cumulative Distribution Function (CDF):** The CDF, denoted by $F(x)$, gives the probability that the random variable $X$ is less than or equal to a specific value $x$:
    $F(x) = P(X \le x) = \int_{-\infty}^{x} f(t) \, dt$
*   **Properties of CDF:**
    *   $0 \le F(x) \le 1$ for all $x$.
    *   $F(x)$ is non-decreasing.
    *   $\lim_{x \to -\infty} F(x) = 0$ and $\lim_{x \to \infty} F(x) = 1$.
*   **Probability between two values:** $P(a \le X \le b) = F(b) - F(a) = \int_{a}^{b} f(x) \, dx$.

---

## 2. The Uniform Distribution

The Uniform distribution is the simplest continuous probability distribution. It describes situations where outcomes are equally likely over a specific range.

### 2.1 Definition and Properties

A continuous random variable $X$ is said to have a **Uniform distribution** over the interval $[a, b]$ if its PDF is given by:

$$
f(x; a, b) = \begin{cases}
\frac{1}{b-a} & \text{if } a \le x \le b \\
0 & \text{otherwise}
\end{cases}
$$

*   **Parameters:** The distribution is characterized by two parameters, $a$ and $b$, representing the lower and upper bounds of the interval, respectively.
*   **PDF Shape:** The PDF is a constant rectangle of height $\frac{1}{b-a}$ over the interval $[a, b]$ and zero elsewhere.
*   **Expected Value (Mean):** $E[X] = \mu = \frac{a+b}{2}$
*   **Variance:** $Var(X) = \sigma^2 = \frac{(b-a)^2}{12}$
*   **Standard Deviation:** $\sigma = \frac{b-a}{\sqrt{12}}$
*   **CDF:**
    $$
    F(x; a, b) = \begin{cases}
    0 & \text{if } x < a \\
    \frac{x-a}{b-a} & \text{if } a \le x \le b \\
    1 & \text{if } x > b
    \end{cases}
    $$

**Referencing:** Devore (9th ed.) discusses the Uniform distribution in Chapter 4. Veerarajan (3rd ed.) also covers it in Chapter 5.

### 2.2 Applications in Electrical Science

*   **Signal Quantization Error:** In digital signal processing, when an analog signal is quantized to a discrete level, the quantization error can often be modeled as uniformly distributed over a small interval.
*   **Phase of a Random Signal:** The phase of a uniformly distributed random signal over $[0, 2\pi]$ is uniformly distributed.
*   **Arrival Times of Events:** If events occur at a constant average rate, the time between consecutive events can sometimes be approximated by an exponential distribution, but the *location* of an event within a fixed interval might be uniform.
*   **Random Number Generation:** Uniform random number generators are fundamental in simulation and Monte Carlo methods used in electrical engineering for performance analysis.

### 2.3 Examples

**Example 1:** A bus arrives at a station every 20 minutes. If a passenger arrives at the station at a random time, the waiting time $W$ is uniformly distributed between 0 and 20 minutes.

*   **PDF:** $f(w) = \frac{1}{20-0} = \frac{1}{20}$ for $0 \le w \le 20$, and 0 otherwise.
*   **Mean Waiting Time:** $E[W] = \frac{0+20}{2} = 10$ minutes.
*   **Variance of Waiting Time:** $Var(W) = \frac{(20-0)^2}{12} = \frac{400}{12} = \frac{100}{3} \approx 33.33$ minutes$^2$.
*   **Probability of waiting less than 5 minutes:**
    $P(W \le 5) = F(5) = \frac{5-0}{20-0} = \frac{5}{20} = 0.25$
*   **Probability of waiting between 5 and 15 minutes:**
    $P(5 \le W \le 15) = F(15) - F(5) = \frac{15-0}{20-0} - \frac{5-0}{20-0} = \frac{15}{20} - \frac{5}{20} = \frac{10}{20} = 0.5$

### 2.4 Practice Questions

1.  A signal's voltage fluctuates randomly between -5V and +5V, with all values equally likely. What is the PDF of the voltage? What is the probability that the voltage is between -2V and +3V?
2.  The time taken to process a packet of data by a network device is uniformly distributed between 10 ms and 30 ms. Calculate the mean and variance of the processing time. What is the probability that processing takes longer than 25 ms?

---

## 3. The Normal Distribution (Gaussian Distribution)

The Normal distribution is arguably the most important probability distribution in statistics and engineering. It's ubiquitous due to the Central Limit Theorem, which states that the sum/average of many independent random variables tends to be normally distributed, regardless of their original distribution.

### 3.1 Definition and Properties

A continuous random variable $X$ is said to have a **Normal distribution** with mean $\mu$ and variance $\sigma^2$ (and standard deviation $\sigma$) if its PDF is given by:

$$
f(x; \mu, \sigma^2) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}, \quad -\infty < x < \infty
$$

*   **Parameters:** The distribution is characterized by its mean $\mu$ (location) and variance $\sigma^2$ (spread).
*   **PDF Shape:** The PDF is a bell-shaped, symmetric curve centered at $\mu$. The spread is determined by $\sigma$.
    *   The peak of the curve is at $x = \mu$.
    *   The curve is symmetric about the mean $\mu$.
    *   The curve approaches the x-axis asymptotically as $x \to \pm \infty$.
*   **Expected Value (Mean):** $E[X] = \mu$
*   **Variance:** $Var(X) = \sigma^2$
*   **Standard Deviation:** $\sigma$

**Referencing:** Devore (9th ed.) dedicates a significant portion of Chapter 4 to the Normal distribution and its properties. Veerarajan (3rd ed.) also covers it extensively in Chapter 5.

### 3.2 The Standard Normal Distribution

It's often convenient to work with a standardized version of the Normal distribution, called the **Standard Normal Distribution**, which has a mean of 0 and a variance of 1 ($\mu=0, \sigma^2=1$).

A random variable $X \sim N(\mu, \sigma^2)$ can be transformed into a standard normal random variable $Z$ by:

$$
Z = \frac{X - \mu}{\sigma}
$$

The PDF of $Z$ is denoted by $\phi(z)$ and the CDF by $\Phi(z)$:

$$
\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}z^2}, \quad -\infty < z < \infty
$$

$$
\Phi(z) = P(Z \le z) = \int_{-\infty}^{z} \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}t^2} \, dt
$$

The values of $\Phi(z)$ are available in standard normal distribution tables (Z-tables) or can be computed using statistical software/calculators.

**Key Properties of $\Phi(z)$:**

*   $\Phi(0) = 0.5$
*   $\Phi(-z) = 1 - \Phi(z)$ (Symmetry)
*   $P(a \le Z \le b) = \Phi(b) - \Phi(a)$
*   $P(Z \ge a) = 1 - \Phi(a)$

### 3.3 The Empirical Rule (68-95-99.7 Rule)

For a Normal distribution, approximately:

*   **68%** of the data falls within one standard deviation of the mean ($ \mu \pm \sigma$).
*   **95%** of the data falls within two standard deviations of the mean ($ \mu \pm 2\sigma$).
*   **99.7%** of the data falls within three standard deviations of the mean ($ \mu \pm 3\sigma$).

### 3.4 Applications in Electrical Science

*   **Measurement Errors:** Many physical measurement errors in electrical systems tend to follow a Normal distribution due to the accumulation of small, independent random disturbances.
*   **Noise in Electronic Circuits:** Thermal noise, shot noise, and other forms of noise in electronic components are often modeled as Normal distributions.
*   **Component Tolerances:** The values of manufactured components (resistors, capacitors) deviate from their nominal values due to manufacturing processes, and these deviations are often normally distributed.
*   **Signal-to-Noise Ratio (SNR):** The probability of errors in digital communication systems is often related to the SNR, which can involve Normal distributions.
*   **Reliability Engineering:** The lifespan of electronic components can sometimes be modeled by distributions related to the Normal distribution (e.g., the Lognormal distribution, which is derived from the Normal distribution).

### 3.5 Examples

**Example 2:** The output voltage of a power supply is normally distributed with a mean of 5V and a standard deviation of 0.1V.

*   **Parameters:** $\mu = 5$, $\sigma = 0.1$.
*   **What is the probability that the output voltage is between 4.9V and 5.1V?**
    We need to find $P(4.9 \le X \le 5.1)$.
    First, standardize the values:
    $Z_1 = \frac{4.9 - 5}{0.1} = \frac{-0.1}{0.1} = -1$
    $Z_2 = \frac{5.1 - 5}{0.1} = \frac{0.1}{0.1} = 1$
    So, $P(4.9 \le X \le 5.1) = P(-1 \le Z \le 1)$.
    Using the CDF of the standard normal distribution:
    $P(-1 \le Z \le 1) = \Phi(1) - \Phi(-1)$.
    From Z-tables, $\Phi(1) \approx 0.8413$.
    Using the symmetry property, $\Phi(-1) = 1 - \Phi(1) \approx 1 - 0.8413 = 0.1587$.
    Therefore, $P(-1 \le Z \le 1) \approx 0.8413 - 0.1587 = 0.6826$.
    This aligns with the empirical rule (68%).

*   **What is the probability that the output voltage is greater than 5.2V?**
    We need to find $P(X > 5.2)$.
    Standardize 5.2:
    $Z = \frac{5.2 - 5}{0.1} = \frac{0.2}{0.1} = 2$
    So, $P(X > 5.2) = P(Z > 2) = 1 - P(Z \le 2) = 1 - \Phi(2)$.
    From Z-tables, $\Phi(2) \approx 0.9772$.
    Therefore, $P(X > 5.2) \approx 1 - 0.9772 = 0.0228$.

### 3.6 Practice Questions

1.  The time it takes for a signal to propagate through a transmission line is normally distributed with a mean of 50 ns and a standard deviation of 5 ns. What is the probability that the propagation time is:
    a) Less than 40 ns?
    b) Between 45 ns and 55 ns?
    c) Greater than 60 ns?
2.  The noise voltage in a circuit is normally distributed with a mean of 0V and a standard deviation of 0.5mV. If a threshold is set at 1mV, what is the probability that the noise voltage exceeds this threshold?

---

## 4. The Exponential Distribution

The Exponential distribution is closely related to the Poisson process. It models the time *between* events in a Poisson process, where events occur at a constant average rate.

### 4.1 Definition and Properties

A continuous random variable $X$ is said to have an **Exponential distribution** with rate parameter $\lambda$ if its PDF is given by:

$$
f(x; \lambda) = \begin{cases}
\lambda e^{-\lambda x} & \text{if } x \ge 0 \\
0 & \text{if } x < 0
\end{cases}
$$

*   **Parameter:** The distribution is characterized by a single parameter, the rate parameter $\lambda$, which represents the average number of events per unit of time (or space). The unit of $\lambda$ is typically inverse time (e.g., events per second).
*   **PDF Shape:** The PDF is a decreasing function that starts at $\lambda$ when $x=0$ and approaches 0 as $x \to \infty$.
*   **Expected Value (Mean):** $E[X] = \mu = \frac{1}{\lambda}$
*   **Variance:** $Var(X) = \sigma^2 = \frac{1}{\lambda^2}$
*   **Standard Deviation:** $\sigma = \frac{1}{\lambda}$
*   **CDF:**
    $$
    F(x; \lambda) = \begin{cases}
    1 - e^{-\lambda x} & \text{if } x \ge 0 \\
    0 & \text{if } x < 0
    \end{cases}
    $$

**Referencing:** Devore (9th ed.) discusses the Exponential distribution in Chapter 4, often in relation to the Poisson process. Veerarajan (3rd ed.) covers it in Chapter 5.

### 4.2 Memoryless Property

A crucial property of the Exponential distribution is its **memoryless property**. This means that the probability of an event occurring in the future is independent of how much time has already passed.

Mathematically, for $s, t \ge 0$:

$$
P(X > s+t \mid X > s) = P(X > t)
$$

**Proof:**
$P(X > s+t \mid X > s) = \frac{P(X > s+t \text{ and } X > s)}{P(X > s)}$
Since $s+t \ge s$, the event $(X > s+t \text{ and } X > s)$ is the same as $(X > s+t)$.
So, $P(X > s+t \mid X > s) = \frac{P(X > s+t)}{P(X > s)}$.
From the CDF, $P(X > x) = 1 - F(x) = 1 - (1 - e^{-\lambda x}) = e^{-\lambda x}$ for $x \ge 0$.
Therefore, $P(X > s+t \mid X > s) = \frac{e^{-\lambda (s+t)}}{e^{-\lambda s}} = e^{-\lambda s} e^{-\lambda t} e^{\lambda s} = e^{-\lambda t}$.
And $P(X > t) = e^{-\lambda t}$.
Thus, $P(X > s+t \mid X > s) = P(X > t)$.

### 4.3 Applications in Electrical Science

*   **Time Between Arrivals:** The time between consecutive arrivals of data packets at a router, or the time between customer calls at a call center, if arrivals follow a Poisson process.
*   **Component Lifetimes:** The time to failure of electronic components that fail randomly and independently of their age (e.g., certain semiconductor devices or passive components under specific operating conditions) can be modeled by the exponential distribution. This is common in reliability engineering.
*   **Time Between Failures:** The time between successive failures of a system or subsystem.
*   **Inter-event Times in Queuing Systems:** Modeling arrival processes in communication networks and other queuing systems.
*   **Breakdown Times:** The time until a system breaks down, given a constant failure rate.

### 4.4 Examples

**Example 3:** The time $T$ (in hours) between successive electrical surges in a transmission line is exponentially distributed with a rate parameter $\lambda = 0.01$ surges per hour.

*   **Parameters:** $\lambda = 0.01$.
*   **Mean time between surges:** $E[T] = \frac{1}{\lambda} = \frac{1}{0.01} = 100$ hours.
*   **Variance of time between surges:** $Var(T) = \frac{1}{\lambda^2} = \frac{1}{(0.01)^2} = \frac{1}{0.0001} = 10000$ hours$^2$.
*   **What is the probability that the time between surges is less than 50 hours?**
    We need to find $P(T \le 50)$.
    $P(T \le 50) = F(50) = 1 - e^{-\lambda \times 50} = 1 - e^{-0.01 \times 50} = 1 - e^{-0.5}$.
    Using a calculator, $e^{-0.5} \approx 0.6065$.
    So, $P(T \le 50) \approx 1 - 0.6065 = 0.3935$.

*   **What is the probability that the time between surges is greater than 150 hours?**
    We need to find $P(T > 150)$.
    $P(T > 150) = 1 - F(150) = 1 - (1 - e^{-\lambda \times 150}) = e^{-\lambda \times 150} = e^{-0.01 \times 150} = e^{-1.5}$.
    Using a calculator, $e^{-1.5} \approx 0.2231$.

*   **What is the probability that the time between surges is greater than 150 hours, given that it has already been 100 hours since the last surge?**
    This is a direct application of the memoryless property.
    $P(T > 100 + 50 \mid T > 100) = P(T > 50)$.
    We already calculated $P(T > 50) = e^{-0.5} \approx 0.6065$.

### 4.5 Practice Questions

1.  The time between failures of a certain type of electronic relay is exponentially distributed with a mean of 500 hours.
    a) What is the rate parameter $\lambda$?
    b) What is the probability that the relay fails within the first 200 hours?
    c) What is the probability that the relay lasts for more than 700 hours?
    d) Given that the relay has already operated for 400 hours, what is the probability that it will fail in the next 100 hours?
2.  Data packets arrive at a server at an average rate of 5 packets per second. The time between arrivals is exponentially distributed. What is the probability that the time between two consecutive arrivals is less than 0.1 seconds?

---

## Important Points to Remember:

*   **Continuous vs. Discrete:** Remember that for continuous random variables, we talk about probability density functions (PDFs), not probability mass functions (PMFs). The probability of a continuous variable taking on any *exact* value is zero.
*   **Uniform Distribution:** Equal likelihood over an interval $[a, b]$. Mean is $\frac{a+b}{2}$, variance is $\frac{(b-a)^2}{12}$.
*   **Normal Distribution:** Bell-shaped, symmetric, defined by mean $\mu$ and variance $\sigma^2$. Crucial for modeling sums/averages of random variables due to the Central Limit Theorem. Use Z-scores for calculations.
*   **Exponential Distribution:** Models time between events in a Poisson process. Defined by rate $\lambda$. Mean is $\frac{1}{\lambda}$, variance is $\frac{1}{\lambda^2}$. Possesses the memoryless property.
*   **Standardization:** Transforming any Normal random variable $X$ into a Standard Normal variable $Z = \frac{X - \mu}{\sigma}$ is key for using Z-tables or standard statistical functions.
*   **Empirical Rule:** A quick check for Normal distributions: 68-95-99.7 within 1, 2, and 3 standard deviations, respectively.
*   **Memoryless Property:** For Exponential distributions, the future is independent of the past. $P(X > s+t | X > s) = P(X > t)$.

---

## Practice Questions with Answers:

**Question 1 (Uniform):** A signal's voltage fluctuates randomly between -5V and +5V, with all values equally likely. What is the PDF of the voltage? What is the probability that the voltage is between -2V and +3V?

**Answer:**
The voltage $V$ is uniformly distributed over $[-5, 5]$.
So, $a = -5$ and $b = 5$.
The PDF is $f(v) = \frac{1}{b-a} = \frac{1}{5 - (-5)} = \frac{1}{10}$ for $-5 \le v \le 5$, and 0 otherwise.
The probability that the voltage is between -2V and +3V is:
$P(-2 \le V \le 3) = \int_{-2}^{3} \frac{1}{10} \, dv = \frac{1}{10} [v]_{-2}^{3} = \frac{1}{10} (3 - (-2)) = \frac{1}{10} (5) = 0.5$.

**Question 2 (Normal):** The time it takes for a signal to propagate through a transmission line is normally distributed with a mean of 50 ns and a standard deviation of 5 ns. What is the probability that the propagation time is:
    a) Less than 40 ns?
    b) Between 45 ns and 55 ns?
    c) Greater than 60 ns?

**Answer:**
Let $T$ be the propagation time. $T \sim N(\mu=50, \sigma^2=5^2)$.
a) $P(T < 40)$:
Standardize 40: $Z = \frac{40 - 50}{5} = \frac{-10}{5} = -2$.
$P(T < 40) = P(Z < -2) = \Phi(-2) = 1 - \Phi(2)$.
Using Z-tables, $\Phi(2) \approx 0.9772$.
So, $P(T < 40) \approx 1 - 0.9772 = 0.0228$.

b) $P(45 \le T \le 55)$:
Standardize 45: $Z_1 = \frac{45 - 50}{5} = \frac{-5}{5} = -1$.
Standardize 55: $Z_2 = \frac{55 - 50}{5} = \frac{5}{5} = 1$.
$P(45 \le T \le 55) = P(-1 \le Z \le 1) = \Phi(1) - \Phi(-1) = \Phi(1) - (1 - \Phi(1)) = 2\Phi(1) - 1$.
Using Z-tables, $\Phi(1) \approx 0.8413$.
So, $P(45 \le T \le 55) \approx 2(0.8413) - 1 = 1.6826 - 1 = 0.6826$. (This matches the empirical rule).

c) $P(T > 60)$:
Standardize 60: $Z = \frac{60 - 50}{5} = \frac{10}{5} = 2$.
$P(T > 60) = P(Z > 2) = 1 - P(Z \le 2) = 1 - \Phi(2)$.
Using Z-tables, $\Phi(2) \approx 0.9772$.
So, $P(T > 60) \approx 1 - 0.9772 = 0.0228$.

**Question 3 (Exponential):** The time between failures of a certain type of electronic relay is exponentially distributed with a mean of 500 hours.
    a) What is the rate parameter $\lambda$?
    b) What is the probability that the relay fails within the first 200 hours?
    c) Given that the relay has already operated for 400 hours, what is the probability that it will fail in the next 100 hours?

**Answer:**
The mean of an exponential distribution is $E[T] = \frac{1}{\lambda}$.
Given mean = 500 hours.
a) $\frac{1}{\lambda} = 500 \implies \lambda = \frac{1}{500} = 0.002$ failures per hour.

b) Probability of failing within the first 200 hours: $P(T \le 200)$.
$P(T \le 200) = F(200) = 1 - e^{-\lambda \times 200} = 1 - e^{-0.002 \times 200} = 1 - e^{-0.4}$.
Using a calculator, $e^{-0.4} \approx 0.6703$.
So, $P(T \le 200) \approx 1 - 0.6703 = 0.3297$.

c) Given that the relay has operated for 400 hours, what is the probability that it will fail in the next 100 hours?
This is the memoryless property: $P(T > 400 + 100 \mid T > 400) = P(T > 100)$.
$P(T > 100) = 1 - F(100) = 1 - (1 - e^{-\lambda \times 100}) = e^{-\lambda \times 100}$.
$P(T > 100) = e^{-0.002 \times 100} = e^{-0.2}$.
Using a calculator, $e^{-0.2} \approx 0.8187$.
So, the probability is approximately 0.8187.

---
This concludes our study of the Uniform, Normal, and Exponential distributions. These are fundamental building blocks for understanding more complex probabilistic models in electrical science.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
