---
title: "Uniform, Normal and Exponential distributions"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81092c"
status: "completed"
scrapedAt: "2026-05-20T18:46:03.049Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Uniform, Normal, and Exponential Distributions

---

### Introduction to Continuous Random Variables

A **continuous random variable** is a variable whose values can take on any value within a given range. Unlike discrete random variables (which can only take specific, countable values), continuous random variables can have an infinite number of possible values between any two given values.

**Examples:**
*   Height of a person
*   Temperature of a room
*   Time taken to complete an experiment

For continuous random variables, we cannot assign probabilities to individual values because the probability of observing any exact value is infinitesimally small (effectively zero). Instead, we talk about the probability of a random variable falling within a certain interval.

---

### Probability Density Function (PDF) for Continuous Random Variables

For a continuous random variable $X$, the probability of $X$ falling within an interval $[a, b]$ is given by the integral of its Probability Density Function (PDF), $f(x)$, over that interval:

$P(a \le X \le b) = \int_{a}^{b} f(x) dx$

**Key Properties of a PDF:**
1.  $f(x) \ge 0$ for all $x$. The probability density cannot be negative.
2.  $\int_{-\infty}^{\infty} f(x) dx = 1$. The total probability over the entire range of possible values must be 1.

---

## 1. Uniform Distribution

The **uniform distribution** is the simplest continuous probability distribution. It describes a situation where all outcomes within a given interval are equally likely.

**Key Concepts:**
*   **Definition:** A continuous random variable $X$ is said to follow a uniform distribution over the interval $[a, b]$ if its PDF is given by:
    $$
    f(x) =
    \begin{cases}
    \frac{1}{b-a} & \text{if } a \le x \le b \\
    0 & \text{otherwise}
    \end{cases}
    $$
*   **Parameters:** The distribution is characterized by two parameters, $a$ (lower bound) and $b$ (upper bound).
*   **Geometric Interpretation:** The PDF is a rectangle with a height of $\frac{1}{b-a}$ and a width of $b-a$. The area under the PDF curve represents probability.

**Properties of the Uniform Distribution:**
*   **Expected Value (Mean):** $E(X) = \mu = \frac{a+b}{2}$
*   **Variance:** $Var(X) = \sigma^2 = \frac{(b-a)^2}{12}$
*   **Standard Deviation:** $SD(X) = \sigma = \frac{b-a}{\sqrt{12}}$
*   **Cumulative Distribution Function (CDF):** $F(x) = P(X \le x) =
    \begin{cases}
    0 & \text{if } x < a \\
    \frac{x-a}{b-a} & \text{if } a \le x \le b \\
    1 & \text{if } x > b
    \end{cases}
    $

**Examples of Uniform Distribution:**
*   **Rounding Errors:** If we assume rounding to the nearest integer, the error is uniformly distributed between -0.5 and +0.5.
*   **Arrival Times:** If a bus arrives at a station at a random time between 8:00 AM and 8:30 AM, its arrival time can be modeled by a uniform distribution.
*   **Radioactive Decay (simplified):** The time until the next decay event within a short observation window, assuming no prior information about the decay process, might be approximated as uniform.

**Example Calculation:**
Let $X$ be a random variable representing the arrival time of a bus at a station, uniformly distributed between 8:00 AM (represented as 0) and 8:30 AM (represented as 30 minutes). So, $a=0$ and $b=30$.

The PDF is $f(x) = \frac{1}{30-0} = \frac{1}{30}$ for $0 \le x \le 30$.

*   **Expected arrival time:** $E(X) = \frac{0+30}{2} = 15$ minutes past 8:00 AM.
*   **Probability of arriving between 8:10 AM and 8:20 AM:**
    $P(10 \le X \le 20) = \int_{10}^{20} \frac{1}{30} dx = \frac{1}{30} [x]_{10}^{20} = \frac{1}{30} (20 - 10) = \frac{10}{30} = \frac{1}{3}$.

---

## 2. Normal Distribution (Gaussian Distribution)

The **normal distribution** is arguably the most important continuous probability distribution in statistics and physical sciences. It is often called the "bell curve" due to the shape of its PDF. Many natural phenomena approximate a normal distribution.

**Key Concepts:**
*   **Definition:** A continuous random variable $X$ is said to follow a normal distribution with mean $\mu$ and variance $\sigma^2$ if its PDF is given by:
    $$
    f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2} \quad \text{for } -\infty < x < \infty
    $$
*   **Parameters:** The distribution is characterized by two parameters:
    *   $\mu$: The mean (average value), which is also the center of the distribution.
    *   $\sigma$: The standard deviation, which measures the spread or dispersion of the distribution. $\sigma^2$ is the variance.
*   **Symmetry:** The normal distribution is symmetric about its mean $\mu$. The mean, median, and mode are all equal.
*   **Shape:** The bell shape is determined by $\sigma$. A smaller $\sigma$ results in a narrower, taller bell, while a larger $\sigma$ results in a wider, flatter bell.

**Properties of the Normal Distribution:**
*   **Expected Value (Mean):** $E(X) = \mu$
*   **Variance:** $Var(X) = \sigma^2$
*   **Standard Deviation:** $SD(X) = \sigma$
*   **Total Area:** The total area under the curve is 1.
*   **Empirical Rule (68-95-99.7 Rule):** For a normal distribution:
    *   Approximately 68% of the data falls within one standard deviation of the mean ($\mu \pm \sigma$).
    *   Approximately 95% of the data falls within two standard deviations of the mean ($\mu \pm 2\sigma$).
    *   Approximately 99.7% of the data falls within three standard deviations of the mean ($\mu \pm 3\sigma$).

**Standard Normal Distribution (Z-distribution):**
*   A special case of the normal distribution where the mean is 0 and the standard deviation is 1 ($\mu=0, \sigma=1$).
*   The PDF is $f(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}$.
*   We can convert any normal random variable $X$ to a standard normal random variable $Z$ using the z-score formula:
    $$
    Z = \frac{X - \mu}{\sigma}
    $$
*   Probabilities for any normal distribution can be found by converting to Z-scores and using a standard normal distribution table (Z-table) or statistical software.

**Cumulative Distribution Function (CDF) for Normal Distribution:**
The CDF of a normal distribution, $F(x) = P(X \le x)$, does not have a simple closed-form expression in terms of elementary functions. It is usually expressed using the CDF of the standard normal distribution, $\Phi(z)$:
$F(x) = P(X \le x) = P\left(\frac{X-\mu}{\sigma} \le \frac{x-\mu}{\sigma}\right) = P(Z \le z) = \Phi(z)$, where $z = \frac{x-\mu}{\sigma}$.

**Examples of Normal Distribution in Physical Science:**
*   **Measurement Errors:** Errors in scientific measurements (e.g., experimental uncertainties) often follow a normal distribution.
*   **Physical Properties:** Heights, weights, blood pressure, and other biological/physical measurements in a large population tend to be normally distributed.
*   **Quantum Mechanics:** The probability amplitudes (wave functions) in quantum mechanics are related to probability distributions, and their statistical properties can sometimes be analyzed using normal distribution concepts (e.g., spread of a wave packet).
*   **Thermodynamics:** Fluctuations in thermodynamic quantities like energy or particle number in large systems can be approximated by normal distributions.
*   **Signal Processing:** Noise in electronic signals can often be modeled as additive white Gaussian noise, which is normally distributed.

**Example Calculation:**
Suppose the lifespan of a particular type of electronic component is normally distributed with a mean of 1000 hours and a standard deviation of 150 hours.

*   **Parameters:** $\mu = 1000$ hours, $\sigma = 150$ hours.
*   **Probability of a component lasting between 900 and 1100 hours:**
    1.  Convert to Z-scores:
        *   For $x = 900$: $z_1 = \frac{900 - 1000}{150} = \frac{-100}{150} = -\frac{2}{3} \approx -0.67$
        *   For $x = 1100$: $z_2 = \frac{1100 - 1000}{150} = \frac{100}{150} = \frac{2}{3} \approx 0.67$
    2.  Find the probability using the Z-table:
        $P(900 \le X \le 1100) = P(-0.67 \le Z \le 0.67) = \Phi(0.67) - \Phi(-0.67)$
        Using a Z-table, $\Phi(0.67) \approx 0.7486$ and $\Phi(-0.67) \approx 0.2514$.
        $P(900 \le X \le 1100) \approx 0.7486 - 0.2514 = 0.4972$.
        So, approximately 49.72% of components last between 900 and 1100 hours.

*   **Probability of a component lasting more than 1200 hours:**
    1.  Convert to Z-score for $x = 1200$:
        $z = \frac{1200 - 1000}{150} = \frac{200}{150} = \frac{4}{3} \approx 1.33$
    2.  Find the probability:
        $P(X > 1200) = P(Z > 1.33) = 1 - P(Z \le 1.33) = 1 - \Phi(1.33)$
        Using a Z-table, $\Phi(1.33) \approx 0.9082$.
        $P(X > 1200) \approx 1 - 0.9082 = 0.0918$.
        So, approximately 9.18% of components last more than 1200 hours.

---

## 3. Exponential Distribution

The **exponential distribution** is often used to model the time between events in a Poisson process, where events occur at a constant average rate and independently of the time since the last event. It is commonly used to describe waiting times or lifetimes.

**Key Concepts:**
*   **Definition:** A continuous random variable $X$ is said to follow an exponential distribution with rate parameter $\lambda$ if its PDF is given by:
    $$
    f(x) =
    \begin{cases}
    \lambda e^{-\lambda x} & \text{if } x \ge 0 \\
    0 & \text{if } x < 0
    \end{cases}
    $$
    The parameter $\lambda$ is the rate parameter, representing the average number of events per unit of time. The unit of $\lambda$ is events per unit time (e.g., events per second, events per hour).
*   **Relationship to Poisson Process:** If the number of events in a given interval follows a Poisson distribution with mean $\lambda t$, then the time between consecutive events follows an exponential distribution with parameter $\lambda$.
*   **Memoryless Property:** This is a crucial property of the exponential distribution. It means that the probability of an event occurring in the future is independent of how much time has already passed. In other words, $P(X > s+t | X > s) = P(X > t)$. The system "forgets" how long it has been running.

**Properties of the Exponential Distribution:**
*   **Expected Value (Mean):** $E(X) = \mu = \frac{1}{\lambda}$
*   **Variance:** $Var(X) = \sigma^2 = \frac{1}{\lambda^2}$
*   **Standard Deviation:** $SD(X) = \sigma = \frac{1}{\lambda}$
*   **Cumulative Distribution Function (CDF):** $F(x) = P(X \le x) =
    \begin{cases}
    1 - e^{-\lambda x} & \text{if } x \ge 0 \\
    0 & \text{if } x < 0
    \end{cases}
    $
*   **Survival Function:** $S(x) = P(X > x) = 1 - F(x) = e^{-\lambda x}$ for $x \ge 0$.

**Examples of Exponential Distribution in Physical Science:**
*   **Radioactive Decay:** The time until a radioactive atom decays. If the decay rate is constant, the time to decay follows an exponential distribution.
*   **Component Lifetimes:** The lifetime of electronic components, mechanical parts, or other items that fail due to random chance (and not wear-out from use) can often be modeled by the exponential distribution.
*   **Time Between Arrivals:** The time between successive arrivals of particles at a detector, or between successive calls in a telecommunications system, can be modeled as exponential if the arrival rate is constant.
*   **Plasma Physics:** The time between collisions of particles in a plasma.
*   **Reliability Engineering:** Modeling the time until failure of systems or components.

**Example Calculation:**
Suppose the number of photons emitted by a certain laser follows a Poisson process with an average rate of 5 photons per microsecond. Let $X$ be the time (in microseconds) between successive photon emissions.

*   **Rate Parameter:** $\lambda = 5$ photons/$\mu s$.
*   **PDF:** $f(x) = 5e^{-5x}$ for $x \ge 0$.

*   **Average time between photon emissions:**
    $E(X) = \frac{1}{\lambda} = \frac{1}{5} = 0.2$ microseconds.

*   **Probability that the time between emissions is less than 0.1 microseconds:**
    $P(X < 0.1) = F(0.1) = 1 - e^{-5 \times 0.1} = 1 - e^{-0.5}$
    $e^{-0.5} \approx 0.6065$
    $P(X < 0.1) \approx 1 - 0.6065 = 0.3935$.
    So, there is about a 39.35% chance that the time between emissions is less than 0.1 microseconds.

*   **Probability that the time between emissions is more than 0.3 microseconds:**
    $P(X > 0.3) = S(0.3) = e^{-\lambda x} = e^{-5 \times 0.3} = e^{-1.5}$
    $e^{-1.5} \approx 0.2231$
    So, there is about a 22.31% chance that the time between emissions is more than 0.3 microseconds.

---

### Summary Table

| Distribution     | PDF                                                                    | Mean ($E(X)$) | Variance ($Var(X)$) | Key Properties                                  | Common Applications in Physical Science                                                              |
| :--------------- | :--------------------------------------------------------------------- | :------------ | :------------------ | :---------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| **Uniform**      | $\frac{1}{b-a}$ for $a \le x \le b$, 0 otherwise                     | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ | All outcomes equally likely within $[a, b]$     | Rounding errors, random sampling within a range, simple models of uncertainty.                     |
| **Normal**       | $\frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$ | $\mu$         | $\sigma^2$          | Bell-shaped, symmetric, 68-95-99.7 rule         | Measurement errors, physical properties, noise in signals, statistical mechanics, quantum mechanics. |
| **Exponential**  | $\lambda e^{-\lambda x}$ for $x \ge 0$, 0 otherwise                   | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$ | Memoryless property, models waiting times      | Radioactive decay, component lifetimes, time between events in Poisson processes.                   |

---

## Practice Questions

1.  **Uniform Distribution:** A radio signal's arrival time at a detector, within a 10-millisecond window, can be modeled as a uniform random variable. What is the probability that the signal arrives within the first 3 milliseconds of the window?
2.  **Normal Distribution:** The acceleration due to gravity measured at various locations on Earth is approximately normally distributed with a mean of $9.81 \, m/s^2$ and a standard deviation of $0.05 \, m/s^2$.
    a) What is the probability that a measurement of gravity will be between $9.75 \, m/s^2$ and $9.85 \, m/s^2$?
    b) What is the probability that a measurement of gravity will be greater than $9.90 \, m/s^2$?
3.  **Exponential Distribution:** The time between successive cosmic ray detections at a particular observatory follows an exponential distribution with an average rate of 2 detections per hour.
    a) What is the average time between detections?
    b) What is the probability that the time between detections is less than 30 minutes (0.5 hours)?
    c) What is the probability that the time between detections is more than 1 hour?
4.  **Comparing Distributions:** In a certain experiment, the error in a measurement is uniformly distributed between -5 and +5 units. The lifetime of a detector component is exponentially distributed with a mean of 100 hours.
    a) What is the probability that the measurement error is less than 2 units?
    b) What is the probability that the detector component lasts for more than 150 hours?
    c) If the mean and standard deviation of the measurement error were somehow equal to the mean and standard deviation of the component's lifetime, what distribution would that describe?

---

## Answers to Practice Questions

1.  **Uniform Distribution:**
    The window is from 0 to 10 ms. So $a=0$ and $b=10$.
    The PDF is $f(x) = \frac{1}{10-0} = \frac{1}{10}$ for $0 \le x \le 10$.
    $P(0 \le X \le 3) = \int_{0}^{3} \frac{1}{10} dx = \frac{1}{10} [x]_{0}^{3} = \frac{3}{10} = 0.3$.
    **Answer:** 0.3 or 30%.

2.  **Normal Distribution:**
    $\mu = 9.81 \, m/s^2$, $\sigma = 0.05 \, m/s^2$.

    a) Probability between $9.75$ and $9.85 \, m/s^2$:
    $z_1 = \frac{9.75 - 9.81}{0.05} = \frac{-0.06}{0.05} = -1.2$
    $z_2 = \frac{9.85 - 9.81}{0.05} = \frac{0.04}{0.05} = 0.8$
    $P(9.75 \le X \le 9.85) = P(-1.2 \le Z \le 0.8) = \Phi(0.8) - \Phi(-1.2)$
    From Z-table: $\Phi(0.8) \approx 0.7881$, $\Phi(-1.2) \approx 0.1151$.
    $P \approx 0.7881 - 0.1151 = 0.6730$.
    **Answer (a):** Approximately 0.6730 or 67.30%.

    b) Probability greater than $9.90 \, m/s^2$:
    $z = \frac{9.90 - 9.81}{0.05} = \frac{0.09}{0.05} = 1.8$
    $P(X > 9.90) = P(Z > 1.8) = 1 - P(Z \le 1.8) = 1 - \Phi(1.8)$
    From Z-table: $\Phi(1.8) \approx 0.9641$.
    $P \approx 1 - 0.9641 = 0.0359$.
    **Answer (b):** Approximately 0.0359 or 3.59%.

3.  **Exponential Distribution:**
    Average rate $\lambda_{rate} = 2$ detections/hour.
    The parameter for the exponential distribution is $\lambda_{param} = \lambda_{rate} = 2$.

    a) Average time between detections:
    $E(X) = \frac{1}{\lambda_{param}} = \frac{1}{2}$ hours.
    **Answer (a):** 0.5 hours or 30 minutes.

    b) Probability that time is less than 30 minutes (0.5 hours):
    $P(X < 0.5) = 1 - e^{-\lambda_{param} x} = 1 - e^{-2 \times 0.5} = 1 - e^{-1}$
    $e^{-1} \approx 0.3679$.
    $P \approx 1 - 0.3679 = 0.6321$.
    **Answer (b):** Approximately 0.6321 or 63.21%.

    c) Probability that time is more than 1 hour:
    $P(X > 1) = e^{-\lambda_{param} x} = e^{-2 \times 1} = e^{-2}$
    $e^{-2} \approx 0.1353$.
    **Answer (c):** Approximately 0.1353 or 13.53%.

4.  **Comparing Distributions:**
    Measurement error: Uniformly distributed over $[-5, 5]$.
    $a = -5, b = 5$.
    Mean of error: $E(\text{Error}) = \frac{-5+5}{2} = 0$.
    Variance of error: $Var(\text{Error}) = \frac{(5 - (-5))^2}{12} = \frac{10^2}{12} = \frac{100}{12} = \frac{25}{3} \approx 8.33$.
    Standard Deviation of error: $SD(\text{Error}) = \sqrt{\frac{25}{3}} = \frac{5}{\sqrt{3}} \approx 2.89$.

    Detector lifetime: Exponentially distributed with mean 100 hours.
    Mean of lifetime: $E(\text{Lifetime}) = 100$ hours.
    Since $E(\text{Lifetime}) = \frac{1}{\lambda}$, we have $\lambda = \frac{1}{100} = 0.01$ per hour.
    Variance of lifetime: $Var(\text{Lifetime}) = \frac{1}{\lambda^2} = \frac{1}{(0.01)^2} = \frac{1}{0.0001} = 10000$.
    Standard Deviation of lifetime: $SD(\text{Lifetime}) = \frac{1}{\lambda} = 100$ hours.

    a) Probability that the measurement error is less than 2 units:
    $P(-5 \le X \le 2) = \int_{-5}^{2} \frac{1}{5 - (-5)} dx = \int_{-5}^{2} \frac{1}{10} dx = \frac{1}{10} [x]_{-5}^{2} = \frac{1}{10} (2 - (-5)) = \frac{7}{10} = 0.7$.
    **Answer (a):** 0.7 or 70%.

    b) Probability that the detector component lasts for more than 150 hours:
    Using the survival function $P(X > x) = e^{-\lambda x}$.
    $P(X > 150) = e^{-0.01 \times 150} = e^{-1.5}$
    $e^{-1.5} \approx 0.2231$.
    **Answer (b):** Approximately 0.2231 or 22.31%.

    c) If the mean and standard deviation of the measurement error were equal to the mean and standard deviation of the component's lifetime:
    This scenario requires the mean error to be 100 hours and the standard deviation of error to be 100 hours.
    For a normal distribution, if the mean is 100 and the standard deviation is 100, it would be a normal distribution $N(100, 100^2)$.
    For an exponential distribution, the mean and standard deviation are both $1/\lambda$. If this value is 100, then $\lambda = 1/100 = 0.01$. This describes an exponential distribution with parameter 0.01.
    The question asks what distribution *it* (presumably the error) would describe if it had these properties. Since both the mean and standard deviation are positive and non-zero, and it's a continuous distribution, both Normal and Exponential are candidates. However, the specific nature of the error (symmetry around 0, bounded range) makes it less likely to be a typical scenario for an exponential distribution. If we're talking about a single parameter describing both mean and standard deviation for a continuous variable, the **Exponential distribution** is the one where the mean and standard deviation are inherently the same ($1/\lambda$).

    **Answer (c):** An Exponential distribution with $\lambda = 0.01$ (mean and standard deviation of 100 hours). If the error distribution was to be described by a distribution where mean = std dev, exponential is the direct fit. However, if the question implies a distribution where we *set* the mean and std dev to be 100, then a Normal distribution $N(100, 100^2)$ would also be a possibility. The wording leans towards the inherent property of the exponential distribution.

---

### Important Points to Remember

*   **Continuous vs. Discrete:** Understand the fundamental difference and how probabilities are calculated (integrals vs. sums).
*   **PDF Properties:** Always ensure $f(x) \ge 0$ and the total area under the PDF is 1.
*   **Uniform:** Equal likelihood, simple interval calculation.
*   **Normal:** Bell curve, symmetry, mean=median=mode, empirical rule, Z-scores for standardization. Essential for modeling many physical phenomena and errors.
*   **Exponential:** Memoryless property, models waiting times and lifetimes, related to Poisson processes. $\lambda$ is the rate.
*   **Units:** Pay close attention to units when working with distributions, especially the exponential distribution where $\lambda$ is a rate.
*   **Parameters:** Identify the parameters of each distribution ($\lambda$ for Exponential, $\mu$ and $\sigma$ for Normal, $a$ and $b$ for Uniform) as they define the distribution's shape and location.
