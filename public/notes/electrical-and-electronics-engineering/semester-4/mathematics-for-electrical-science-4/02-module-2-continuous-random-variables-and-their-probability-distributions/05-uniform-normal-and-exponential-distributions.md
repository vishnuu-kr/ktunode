---
title: "Uniform, Normal and Exponential distributions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35da1"
status: "completed"
scrapedAt: "2026-05-23T16:16:55.631Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Uniform, Normal, and Exponential Distributions

This module delves into the fundamental continuous probability distributions that are crucial for understanding various phenomena in Electrical Science. We will explore the properties, applications, and practical usage of the Uniform, Normal, and Exponential distributions.

---

### **1. Continuous Random Variables: A Recap**

Before diving into specific distributions, let's briefly revisit the core concepts of continuous random variables.

*   **Definition:** A random variable $X$ is **continuous** if it can take any value within a given range (or set of ranges). Unlike discrete random variables, there are infinitely many possible values between any two given values.
    *   *Example:* The voltage across a resistor, the time taken for a signal to propagate, the current in a circuit.

*   **Probability Density Function (PDF):** For a continuous random variable $X$, the **probability density function (PDF)**, denoted by $f(x)$, describes the relative likelihood for $X$ to take on a given value.
    *   **Properties of a PDF:**
        *   $f(x) \geq 0$ for all $x$. (The probability density cannot be negative).
        *   $\int_{-\infty}^{\infty} f(x) dx = 1$. (The total area under the PDF curve must be 1, representing the total probability).
        *   The probability that $X$ falls within an interval $[a, b]$ is given by the integral of the PDF over that interval: $P(a \le X \le b) = \int_{a}^{b} f(x) dx$.

*   **Cumulative Distribution Function (CDF):** The **cumulative distribution function (CDF)**, denoted by $F(x)$, gives the probability that the random variable $X$ is less than or equal to a specific value $x$.
    *   $F(x) = P(X \le x) = \int_{-\infty}^{x} f(t) dt$.
    *   **Properties of a CDF:**
        *   $0 \le F(x) \le 1$.
        *   $F(x)$ is non-decreasing.
        *   $\lim_{x \to -\infty} F(x) = 0$ and $\lim_{x \to \infty} F(x) = 1$.

*   **Expected Value (Mean):** The expected value of a continuous random variable $X$ is its average value.
    *   $E[X] = \mu = \int_{-\infty}^{\infty} x f(x) dx$.

*   **Variance and Standard Deviation:** The variance measures the spread of the distribution.
    *   $Var(X) = \sigma^2 = E[(X - \mu)^2] = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) dx$.
    *   An alternative formula for variance is $Var(X) = E[X^2] - (E[X])^2$.
    *   The standard deviation ($\sigma$) is the square root of the variance.

---

### **2. Uniform Distribution**

The Uniform distribution is the simplest continuous probability distribution. It describes situations where all outcomes within a given interval are equally likely.

*   **Concept:** A continuous random variable $X$ is said to have a **uniform distribution** over the interval $[a, b]$ if its PDF is constant over this interval and zero elsewhere.
    *   *Electrical Science Application:* Random sampling of a voltage or current within a specified range, arrival times of packets in a system with no particular preference for any time within a time slot.

*   **Probability Density Function (PDF):**
    $$
    f(x) = \begin{cases} \frac{1}{b-a} & \text{if } a \le x \le b \\ 0 & \text{otherwise} \end{cases}
    $$
    *   *Explanation:* The denominator $(b-a)$ ensures that the total area under the PDF curve equals 1, as required.

*   **Cumulative Distribution Function (CDF):**
    $$
    F(x) = \begin{cases} 0 & \text{if } x < a \\ \frac{x-a}{b-a} & \text{if } a \le x \le b \\ 1 & \text{if } x > b \end{cases}
    $$

*   **Expected Value (Mean):**
    *   $E[X] = \mu = \frac{a+b}{2}$
    *   *Explanation:* The mean is simply the midpoint of the interval.

*   **Variance:**
    *   $Var(X) = \sigma^2 = \frac{(b-a)^2}{12}$
    *   *Explanation:* The variance depends on the square of the length of the interval.

*   **Key Points to Remember (Uniform Distribution):**
    *   All values in the interval $[a, b]$ are equally likely.
    *   The PDF is a rectangular shape.
    *   The mean is the center of the interval.

*   **Example:**
    Let $X$ be a random variable representing the time (in minutes) that a communication signal spends in a buffer before being transmitted. Assume $X$ follows a uniform distribution over the interval $[0, 10]$ minutes.

    *   **a) What is the PDF of $X$?**
        Here, $a = 0$ and $b = 10$.
        $f(x) = \frac{1}{10-0} = \frac{1}{10}$ for $0 \le x \le 10$, and $f(x) = 0$ otherwise.

    *   **b) What is the probability that the signal spends between 2 and 5 minutes in the buffer?**
        $P(2 \le X \le 5) = \int_{2}^{5} f(x) dx = \int_{2}^{5} \frac{1}{10} dx = \left[\frac{x}{10}\right]_{2}^{5} = \frac{5}{10} - \frac{2}{10} = \frac{3}{10} = 0.3$.
        Alternatively, using the CDF: $F(5) - F(2) = \frac{5-0}{10} - \frac{2-0}{10} = \frac{5}{10} - \frac{2}{10} = \frac{3}{10}$.

    *   **c) What is the expected time the signal spends in the buffer?**
        $E[X] = \frac{a+b}{2} = \frac{0+10}{2} = 5$ minutes.

    *   **d) What is the variance of the time spent in the buffer?**
        $Var(X) = \frac{(b-a)^2}{12} = \frac{(10-0)^2}{12} = \frac{100}{12} = \frac{25}{3} \approx 8.33$.

*   **Practice Question 1:**
    The voltage output of a sensor fluctuates uniformly between 1.5V and 3.0V. Let $V$ be the voltage output.
    *   Find the PDF of $V$.
    *   Calculate the probability that the voltage is between 2.0V and 2.5V.
    *   Determine the mean voltage.

    **Answer:**
    *   $a = 1.5$, $b = 3.0$. $f(v) = \frac{1}{3.0 - 1.5} = \frac{1}{1.5} = \frac{2}{3}$ for $1.5 \le v \le 3.0$, and $f(v) = 0$ otherwise.
    *   $P(2.0 \le V \le 2.5) = \int_{2.0}^{2.5} \frac{2}{3} dv = \left[\frac{2}{3}v\right]_{2.0}^{2.5} = \frac{2}{3}(2.5 - 2.0) = \frac{2}{3}(0.5) = \frac{1}{3}$.
    *   $E[V] = \frac{1.5 + 3.0}{2} = \frac{4.5}{2} = 2.25$V.

---

### **3. Normal Distribution (Gaussian Distribution)**

The Normal distribution is arguably the most important continuous probability distribution in statistics and science. Many natural phenomena, measurement errors, and phenomena in electrical engineering are approximated by this distribution. It is characterized by its bell-shaped curve.

*   **Concept:** A continuous random variable $X$ follows a **Normal distribution** with parameters $\mu$ (mean) and $\sigma^2$ (variance) if its PDF is given by:
    *   *Electrical Science Application:* Distribution of component values (resistors, capacitors), measurement errors in instruments, noise in communication systems, variations in signal amplitude.

*   **Probability Density Function (PDF):**
    $$
    f(x; \mu, \sigma) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}, \quad -\infty < x < \infty
    $$
    where:
    *   $\mu$ is the mean of the distribution.
    *   $\sigma$ is the standard deviation ($\sigma > 0$).
    *   $\pi$ and $e$ are mathematical constants.

*   **Key Properties of the Normal Distribution:**
    *   **Symmetric:** The curve is perfectly symmetric about its mean, $\mu$. The mean, median, and mode are all equal to $\mu$.
    *   **Bell-shaped:** The curve is unimodal and bell-shaped.
    *   **Asymptotic:** The tails of the curve approach the x-axis but never touch it.
    *   **Total Area:** The total area under the curve is 1.
    *   **Empirical Rule (68-95-99.7 Rule):**
        *   Approximately 68.27% of the data falls within one standard deviation of the mean ($ \mu \pm \sigma $).
        *   Approximately 95.45% of the data falls within two standard deviations of the mean ($ \mu \pm 2\sigma $).
        *   Approximately 99.73% of the data falls within three standard deviations of the mean ($ \mu \pm 3\sigma $).

*   **Standard Normal Distribution:**
    *   A special case of the Normal distribution where the mean $\mu = 0$ and the standard deviation $\sigma = 1$. It is denoted by $Z$.
    *   **PDF of Standard Normal Distribution:** $f(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}$
    *   **CDF of Standard Normal Distribution:** Typically denoted by $\Phi(z)$. Values of $\Phi(z)$ are found using standard normal distribution tables (Z-tables) or statistical software.
    *   **Transformation:** Any Normal random variable $X$ with mean $\mu$ and standard deviation $\sigma$ can be transformed into a standard Normal random variable $Z$ using the formula: $Z = \frac{X - \mu}{\sigma}$. This is also known as **standardization**.

*   **Cumulative Distribution Function (CDF):**
    *   $F(x) = P(X \le x) = \int_{-\infty}^{x} \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{t-\mu}{\sigma}\right)^2} dt$.
    *   This integral cannot be solved in a closed form, so we use the standard normal distribution's CDF, $\Phi(z)$.
    *   $P(X \le x) = P\left(\frac{X-\mu}{\sigma} \le \frac{x-\mu}{\sigma}\right) = P(Z \le z) = \Phi\left(\frac{x-\mu}{\sigma}\right)$.

*   **Expected Value and Variance:**
    *   $E[X] = \mu$
    *   $Var(X) = \sigma^2$

*   **Key Points to Remember (Normal Distribution):**
    *   Bell-shaped, symmetric about the mean.
    *   Defined by mean ($\mu$) and standard deviation ($\sigma$).
    *   Standardization ($Z = \frac{X-\mu}{\sigma}$) is crucial for using Z-tables.
    *   The Empirical Rule (68-95-99.7) provides quick estimates of probabilities.

*   **Example:**
    The noise voltage $N$ in a communication channel is normally distributed with a mean of 0 volts and a standard deviation of 0.1 volts. ($N \sim \mathcal{N}(0, (0.1)^2)$).

    *   **a) What is the probability that the noise voltage is between -0.05V and 0.05V?**
        Here $\mu = 0$ and $\sigma = 0.1$.
        We need to find $P(-0.05 \le N \le 0.05)$.
        Standardize the values:
        $z_1 = \frac{-0.05 - 0}{0.1} = -0.5$
        $z_2 = \frac{0.05 - 0}{0.1} = 0.5$
        $P(-0.5 \le Z \le 0.5) = \Phi(0.5) - \Phi(-0.5)$.
        Using a Z-table, $\Phi(0.5) \approx 0.6915$ and $\Phi(-0.5) \approx 0.3085$.
        $P(-0.5 \le Z \le 0.5) \approx 0.6915 - 0.3085 = 0.3830$.
        So, the probability is approximately 38.30%.

    *   **b) What is the probability that the noise voltage exceeds 0.2V?**
        We need to find $P(N > 0.2)$.
        Standardize: $z = \frac{0.2 - 0}{0.1} = 2$.
        $P(N > 0.2) = P(Z > 2) = 1 - P(Z \le 2) = 1 - \Phi(2)$.
        Using a Z-table, $\Phi(2) \approx 0.9772$.
        $P(Z > 2) \approx 1 - 0.9772 = 0.0228$.
        So, the probability is approximately 2.28%.

    *   **c) What is the probability that the noise voltage is within one standard deviation of the mean?**
        By the Empirical Rule, this is approximately 68.27%.
        $P(\mu - \sigma \le N \le \mu + \sigma) = P(-0.1 \le N \le 0.1)$.
        $z_1 = \frac{-0.1 - 0}{0.1} = -1$
        $z_2 = \frac{0.1 - 0}{0.1} = 1$
        $P(-1 \le Z \le 1) = \Phi(1) - \Phi(-1) \approx 0.8413 - 0.1587 = 0.6826$.

*   **Devore J. L. (9th Ed., Chapter 4):** This textbook provides a thorough introduction to continuous random variables, including detailed explanations of the Normal distribution, its properties, and the use of Z-tables. It emphasizes the practical applications of the Normal distribution in various engineering contexts.

*   **Veerarajan T. (3rd Ed., Chapter 5):** Veerarajan also covers the Normal distribution extensively, focusing on its mathematical formulation and its role as an approximation to other distributions (like the Binomial).

*   **Practice Question 2:**
    The lifetime of a certain electronic component is normally distributed with a mean of 50,000 hours and a standard deviation of 5,000 hours.
    *   What is the probability that a randomly selected component will fail before 40,000 hours?
    *   What is the probability that a component will last between 45,000 and 55,000 hours?
    *   What is the 90th percentile of the component's lifetime?

    **Answer:**
    *   $\mu = 50000$, $\sigma = 5000$. $P(X < 40000)$.
        $z = \frac{40000 - 50000}{5000} = \frac{-10000}{5000} = -2$.
        $P(X < 40000) = P(Z < -2) = \Phi(-2) \approx 0.0228$. (Approximately 2.28%)
    *   $P(45000 \le X \le 55000)$.
        $z_1 = \frac{45000 - 50000}{5000} = -1$.
        $z_2 = \frac{55000 - 50000}{5000} = 1$.
        $P(-1 \le Z \le 1) = \Phi(1) - \Phi(-1) \approx 0.8413 - 0.1587 = 0.6826$. (Approximately 68.26%)
    *   For the 90th percentile, we need to find $x$ such that $P(X \le x) = 0.90$.
        This means $P(Z \le z) = 0.90$, where $z = \frac{x - 50000}{5000}$.
        From Z-tables, $\Phi(1.28) \approx 0.90$. So, $z \approx 1.28$.
        $1.28 = \frac{x - 50000}{5000} \implies x - 50000 = 1.28 \times 5000 = 6400$.
        $x = 50000 + 6400 = 56400$ hours.

---

### **4. Exponential Distribution**

The Exponential distribution is used to model the time between events in a Poisson process, where events occur at a constant average rate.

*   **Concept:** A continuous random variable $X$ has an **Exponential distribution** with rate parameter $\lambda$ ($\lambda > 0$) if its PDF is given by:
    *   *Electrical Science Application:* Time to failure of electronic components, time between successive arrivals of data packets at a router, time until a system experiences a fault.

*   **Probability Density Function (PDF):**
    $$
    f(x; \lambda) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases}
    $$
    *   *Explanation:* The parameter $\lambda$ represents the rate of events (e.g., events per unit time). The mean time between events is $1/\lambda$.

*   **Cumulative Distribution Function (CDF):**
    $$
    F(x) = P(X \le x) = \begin{cases} 1 - e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases}
    $$

*   **Expected Value (Mean):**
    *   $E[X] = \mu = \frac{1}{\lambda}$
    *   *Explanation:* The mean is the reciprocal of the rate parameter, representing the average time between events.

*   **Variance:**
    *   $Var(X) = \sigma^2 = \frac{1}{\lambda^2}$
    *   *Explanation:* The standard deviation is $\sigma = \frac{1}{\lambda}$, which is equal to the mean.

*   **Memoryless Property:**
    *   This is a key characteristic of the Exponential distribution. It means that the probability of an event occurring in the future is independent of how much time has already passed.
    *   For $s \ge 0$ and $t \ge 0$, $P(X > s+t | X > s) = P(X > t)$.
    *   *Interpretation:* If a component has already been working for $s$ hours, the probability that it will continue to work for at least an additional $t$ hours is the same as the probability that a new component will work for at least $t$ hours.

*   **Key Points to Remember (Exponential Distribution):**
    *   Models time between events in a Poisson process.
    *   Defined by the rate parameter $\lambda$.
    *   The mean is $1/\lambda$.
    *   Possesses the **memoryless property**.
    *   The PDF is a decaying exponential.

*   **Example:**
    The time between successive arrivals of data packets at a network router follows an exponential distribution with an average rate of 20 packets per second. Let $T$ be the time (in seconds) between arrivals.

    *   **a) What is the rate parameter $\lambda$ and the mean time between arrivals?**
        The rate is given as 20 packets per second, so $\lambda = 20$.
        The mean time between arrivals is $E[T] = \frac{1}{\lambda} = \frac{1}{20} = 0.05$ seconds.

    *   **b) What is the probability that the time between two successive arrivals is less than 0.02 seconds?**
        We need to find $P(T \le 0.02)$.
        $P(T \le 0.02) = F(0.02) = 1 - e^{-\lambda \times 0.02} = 1 - e^{-20 \times 0.02} = 1 - e^{-0.4}$.
        Using a calculator, $e^{-0.4} \approx 0.6703$.
        $P(T \le 0.02) \approx 1 - 0.6703 = 0.3297$.
        So, the probability is approximately 32.97%.

    *   **c) What is the probability that the time between arrivals is greater than 0.1 seconds?**
        We need to find $P(T > 0.1)$.
        $P(T > 0.1) = 1 - P(T \le 0.1) = 1 - F(0.1) = 1 - (1 - e^{-20 \times 0.1}) = e^{-20 \times 0.1} = e^{-2}$.
        Using a calculator, $e^{-2} \approx 0.1353$.
        So, the probability is approximately 13.53%.

    *   **d) If we know that 0.05 seconds have already passed since the last arrival, what is the probability that the next arrival will occur within the next 0.03 seconds?**
        This is where the memoryless property comes into play.
        $P(T > 0.05 + 0.03 | T > 0.05) = P(T > 0.03)$.
        $P(T > 0.03) = 1 - F(0.03) = 1 - (1 - e^{-20 \times 0.03}) = e^{-20 \times 0.03} = e^{-0.6}$.
        Using a calculator, $e^{-0.6} \approx 0.5488$.
        So, the probability is approximately 54.88%.

*   **Devore J. L. (9th Ed., Chapter 4):** Devore introduces the Exponential distribution as the continuous analogue to the Geometric distribution and highlights its use in reliability and queueing theory. The memoryless property is a key focus.

*   **Veerarajan T. (3rd Ed., Chapter 5):** Veerarajan provides a good exposition of the Exponential distribution, including its relationship with the Poisson process and its applications in modeling waiting times.

*   **Practice Question 3:**
    The time $X$ (in years) until a critical electronic component in a power system fails is exponentially distributed with a mean of 2 years.
    *   What is the rate parameter $\lambda$?
    *   What is the probability that the component fails within the first year?
    *   What is the probability that the component fails between year 3 and year 5?
    *   Given that the component has already lasted 4 years, what is the probability that it will fail in the next year?

    **Answer:**
    *   Mean = 2 years, so $E[X] = 1/\lambda = 2$. Thus, $\lambda = 1/2 = 0.5$ failures per year.
    *   $P(X \le 1) = F(1) = 1 - e^{-0.5 \times 1} = 1 - e^{-0.5} \approx 1 - 0.6065 = 0.3935$. (Approximately 39.35%)
    *   $P(3 \le X \le 5) = F(5) - F(3) = (1 - e^{-0.5 \times 5}) - (1 - e^{-0.5 \times 3}) = e^{-1.5} - e^{-2.5}$.
        $e^{-1.5} \approx 0.2231$
        $e^{-2.5} \approx 0.0821$
        $P(3 \le X \le 5) \approx 0.2231 - 0.0821 = 0.1410$. (Approximately 14.10%)
    *   Due to the memoryless property: $P(X > 4+1 | X > 4) = P(X > 1)$.
        $P(X > 1) = 1 - F(1) = e^{-0.5 \times 1} = e^{-0.5} \approx 0.6065$. (Approximately 60.65%)

---

### **5. Connection to Course Outcomes (COs)**

*   **CO1: Understand the concept, properties and important models of discrete random variables and to apply in suitable random phenomena. (Knowledge Level: K3)**
    *   While this module focuses on continuous variables, understanding the distinction from discrete variables is implied. The properties of these continuous distributions help in modeling phenomena previously handled by discrete distributions in simpler cases. (Indirect relevance, foundational knowledge).

*   **CO2: Understand the concept, properties and important models of continuous random variables and to apply in suitable random phenomena. (Knowledge Level: K3)**
    *   **Directly addressed.** This module explicitly covers the concepts, properties, and models (Uniform, Normal, Exponential) of continuous random variables. The examples demonstrate their application in electrical science scenarios.

*   **CO3: Estimate population parameters, assess their certainty with confidence intervals, and test hypotheses about population means and proportions using z-tests and the one-sample t-test. (Knowledge Level: K3)**
    *   **Foundation for CO3.** The Normal distribution is the bedrock for many statistical inference techniques like confidence intervals and hypothesis testing (z-tests and t-tests). Understanding the properties of the Normal distribution (especially its mean and variance) is essential before learning how to estimate these parameters for populations.

*   **CO4: Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems. (Knowledge Level: K3)**
    *   **Foundation for CO4.** The Exponential distribution is directly linked to the Poisson process, which is a fundamental concept in random processes. Understanding these distributions provides the building blocks for analyzing the behavior of signals and systems over time, which is a core aspect of random processes in signal processing and communication systems. The Normal distribution is also crucial for modeling noise in these systems.

---
