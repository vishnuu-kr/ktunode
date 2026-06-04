---
title: "Uniform, Normal and Exponential distributions"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ec2"
status: "completed"
scrapedAt: "2026-05-20T17:54:41.799Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 2: Continuous Random Variables and Their Probability Distributions
### Topic: Uniform, Normal, and Exponential Distributions

This module delves into the fundamental concepts of continuous random variables and their associated probability distributions. We will explore three crucial distributions: the Uniform, Normal, and Exponential distributions, which are widely used to model various phenomena in physical sciences.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **LO1:** Define and describe the properties of the uniform distribution.
*   **LO2:** Define and describe the properties of the normal distribution, including its parameters and the standard normal distribution.
*   **LO3:** Calculate probabilities associated with the normal distribution using z-scores and the standard normal table (or computational tools).
*   **LO4:** Define and describe the properties of the exponential distribution.
*   **LO5:** Calculate probabilities associated with the exponential distribution.
*   **LO6:** Identify real-world applications of the uniform, normal, and exponential distributions in physical sciences.
*   **LO7:** Understand the relationship between these distributions and their potential applications in statistical inference and modeling (linking to CO2, CO3, and CO4).

---

### Course Outcomes Alignment:

This topic directly addresses **CO2: Understand the concept, properties and important models of continuous random variables and to apply in suitable random phenomena.** (Knowledge Level: K3). By understanding these distributions, you will be equipped to model and analyze continuous random phenomena encountered in physical sciences, which is a foundational step for further statistical inference (CO3) and potentially numerical methods for solving related problems (CO4).

---

### Key Concepts and Definitions:

#### 1. Continuous Random Variables

A **continuous random variable** is a variable whose value can take on any value within a given range or interval. Unlike discrete random variables, which have countable outcomes, continuous random variables can have an infinite number of possible values.

**Important Distinction:** For a continuous random variable $X$, the probability of $X$ taking on any *specific* value is zero, i.e., $P(X=x) = 0$. Instead, we consider probabilities over intervals, $P(a \le X \le b)$.

---

#### 2. Probability Density Function (PDF) for Continuous Random Variables

For a continuous random variable $X$, its probability distribution is described by a **Probability Density Function (PDF)**, denoted by $f(x)$. The PDF must satisfy the following properties:

*   $f(x) \ge 0$ for all $x$.
*   $\int_{-\infty}^{\infty} f(x) dx = 1$ (The total area under the PDF curve is 1).

The probability that $X$ falls within an interval $[a, b]$ is given by the integral of the PDF over that interval:
$P(a \le X \le b) = \int_{a}^{b} f(x) dx$

---

### 1. The Uniform Distribution

The **Uniform Distribution** is the simplest continuous probability distribution. It describes a situation where all outcomes within a given interval are equally likely.

**Types of Uniform Distribution:**

*   **Continuous Uniform Distribution:**
    *   **Definition:** A continuous random variable $X$ is said to follow a continuous uniform distribution on the interval $[a, b]$ if its PDF is given by:
        $$ f(x) = \begin{cases} \frac{1}{b-a} & \text{if } a \le x \le b \\ 0 & \text{otherwise} \end{cases} $$
        where $a$ and $b$ are the lower and upper bounds of the interval, respectively.
    *   **Properties:**
        *   The PDF is constant over the interval $[a, b]$.
        *   The area under the PDF is a rectangle with width $(b-a)$ and height $\frac{1}{b-a}$, so the total area is $(b-a) \times \frac{1}{b-a} = 1$.
    *   **Mean (Expected Value):**
        $$ E[X] = \mu = \frac{a+b}{2} $$
    *   **Variance:**
        $$ Var(X) = \sigma^2 = \frac{(b-a)^2}{12} $$
    *   **Cumulative Distribution Function (CDF):** The CDF, $F(x) = P(X \le x)$, is given by:
        $$ F(x) = \begin{cases} 0 & \text{if } x < a \\ \frac{x-a}{b-a} & \text{if } a \le x \le b \\ 1 & \text{if } x > b \end{cases} $$

**Example 1.1 (Uniform Distribution):**
Suppose the arrival time of a bus is uniformly distributed between 7:00 AM and 7:30 AM. Let $X$ be the arrival time in minutes past 7:00 AM. So, $a=0$ and $b=30$.
*   The PDF is $f(x) = \frac{1}{30-0} = \frac{1}{30}$ for $0 \le x \le 30$.
*   What is the probability that the bus arrives between 7:10 AM and 7:20 AM?
    *   This is $P(10 \le X \le 20)$.
    *   Using the integral: $P(10 \le X \le 20) = \int_{10}^{20} \frac{1}{30} dx = \frac{1}{30} [x]_{10}^{20} = \frac{1}{30} (20 - 10) = \frac{10}{30} = \frac{1}{3}$.
*   What is the probability that the bus arrives exactly at 7:15 AM?
    *   For continuous variables, $P(X=15) = 0$.
*   Mean arrival time: $E[X] = \frac{0+30}{2} = 15$ minutes past 7:00 AM (i.e., 7:15 AM).
*   Variance of arrival time: $Var(X) = \frac{(30-0)^2}{12} = \frac{900}{12} = 75$.

**Textbook Reference:** Devore, J. L. (2016) discusses the uniform distribution in Chapter 4.

---

### 2. The Normal Distribution (Gaussian Distribution)

The **Normal Distribution** is arguably the most important and widely used probability distribution in statistics and science. It is characterized by its bell-shaped, symmetric curve. Many natural phenomena, such as heights, weights, measurement errors, and even the distribution of sample means (Central Limit Theorem), can be approximated by the normal distribution.

*   **Definition:** A continuous random variable $X$ is said to follow a normal distribution with parameters $\mu$ (mean) and $\sigma^2$ (variance), denoted as $X \sim N(\mu, \sigma^2)$, if its PDF is given by:
    $$ f(x; \mu, \sigma) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}, \quad -\infty < x < \infty $$
    where:
    *   $\mu$ is the mean (center of the distribution).
    *   $\sigma$ is the standard deviation ($\sigma > 0$).
    *   $\pi \approx 3.14159$
    *   $e \approx 2.71828$

*   **Properties of the Normal Distribution:**
    *   **Bell-shaped and Symmetric:** The curve is symmetric about its mean $\mu$. The mean, median, and mode are all equal to $\mu$.
    *   **Asymptotic:** The curve approaches the x-axis asymptotically as $x \to \pm \infty$.
    *   **Total Area is 1:** $\int_{-\infty}^{\infty} f(x; \mu, \sigma) dx = 1$.
    *   **Parameters $\mu$ and $\sigma$:**
        *   $\mu$ determines the location of the center of the distribution.
        *   $\sigma$ determines the spread or width of the distribution. A larger $\sigma$ means a wider, flatter curve, while a smaller $\sigma$ means a narrower, taller curve.
    *   **Empirical Rule (68-95-99.7 Rule):** For a normal distribution:
        *   Approximately 68% of the data falls within one standard deviation of the mean ($ \mu \pm \sigma $).
        *   Approximately 95% of the data falls within two standard deviations of the mean ($ \mu \pm 2\sigma $).
        *   Approximately 99.7% of the data falls within three standard deviations of the mean ($ \mu \pm 3\sigma $).

**The Standard Normal Distribution:**

*   **Definition:** A special case of the normal distribution is the **standard normal distribution**, denoted by $Z$. It has a mean of $\mu = 0$ and a standard deviation of $\sigma = 1$. So, $Z \sim N(0, 1)$.
    $$ f(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}, \quad -\infty < z < \infty $$
*   **Z-score:** To work with normal distributions, we often convert a normal random variable $X$ into a standard normal random variable $Z$ using the **z-score** transformation:
    $$ Z = \frac{X - \mu}{\sigma} $$
    A z-score represents how many standard deviations a particular value $x$ is away from the mean.
*   **Using the Standard Normal Table (or Calculator):** The CDF of the standard normal distribution, $P(Z \le z)$, is often denoted by $\Phi(z)$. This probability can be found using standard normal tables (z-tables) or statistical software/calculators.

**Calculating Probabilities for a General Normal Distribution:**
To find $P(a \le X \le b)$ for $X \sim N(\mu, \sigma^2)$:
1.  Convert the interval bounds to z-scores: $z_a = \frac{a - \mu}{\sigma}$ and $z_b = \frac{b - \mu}{\sigma}$.
2.  Calculate the probability using the standard normal CDF:
    $$ P(a \le X \le b) = P(z_a \le Z \le z_b) = \Phi(z_b) - \Phi(z_a) $$

**Example 2.1 (Normal Distribution):**
The height of adult males in a certain population is normally distributed with a mean of 175 cm and a standard deviation of 7 cm. $X \sim N(175, 7^2)$.
*   What is the probability that a randomly selected male is taller than 182 cm?
    *   We want to find $P(X > 182)$.
    *   Convert to z-score: $z = \frac{182 - 175}{7} = \frac{7}{7} = 1$.
    *   $P(X > 182) = P(Z > 1) = 1 - P(Z \le 1)$.
    *   Using a z-table, $\Phi(1) \approx 0.8413$.
    *   So, $P(X > 182) \approx 1 - 0.8413 = 0.1587$. (Approximately 15.87%)
*   What is the probability that a randomly selected male is between 168 cm and 182 cm tall?
    *   We want to find $P(168 \le X \le 182)$.
    *   Convert to z-scores:
        *   $z_{168} = \frac{168 - 175}{7} = \frac{-7}{7} = -1$.
        *   $z_{182} = \frac{182 - 175}{7} = \frac{7}{7} = 1$.
    *   $P(168 \le X \le 182) = P(-1 \le Z \le 1) = \Phi(1) - \Phi(-1)$.
    *   From the symmetry of the normal distribution, $\Phi(-1) = 1 - \Phi(1)$.
    *   So, $P(-1 \le Z \le 1) = \Phi(1) - (1 - \Phi(1)) = 2\Phi(1) - 1$.
    *   $P(-1 \le Z \le 1) \approx 2(0.8413) - 1 = 1.6826 - 1 = 0.6826$. (Approximately 68.26%, consistent with the empirical rule).

**Example 2.2 (Normal Distribution - Central Limit Theorem Context):**
In physics, experimental measurements often have random errors that are approximately normally distributed. If a measurement process has a mean error of 0 and a standard deviation of 2 units, and we take 100 independent measurements, the average of these measurements will be approximately normally distributed with a mean of 0. The standard deviation of the sample mean will be $\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}} = \frac{2}{\sqrt{100}} = \frac{2}{10} = 0.2$. This illustrates how the normal distribution is fundamental in statistical inference.

**Textbook References:**
*   Devore, J. L. (2016) provides extensive coverage of the normal distribution in Chapter 4, including the z-score transformation and usage of tables.
*   Ross, S. M. (2020) also covers the normal distribution thoroughly in its early chapters on continuous random variables.

---

### 3. The Exponential Distribution

The **Exponential Distribution** is commonly used to model the time between events in a Poisson process (a process in which events occur continuously and independently at a constant average rate). It is often used to model waiting times or the lifespan of electronic components or radioactive decay.

*   **Definition:** A continuous random variable $X$ is said to follow an exponential distribution with rate parameter $\lambda$ ($\lambda > 0$), denoted as $X \sim \text{Exp}(\lambda)$, if its PDF is given by:
    $$ f(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases} $$
    where $\lambda$ is the rate parameter, representing the average number of events per unit of time.
*   **Properties:**
    *   The support of the distribution is $[0, \infty)$.
    *   The PDF decreases exponentially as $x$ increases.
    *   **Mean (Expected Value):**
        $$ E[X] = \mu = \frac{1}{\lambda} $$
        The mean is the average waiting time.
    *   **Variance:**
        $$ Var(X) = \sigma^2 = \frac{1}{\lambda^2} $$
    *   **Cumulative Distribution Function (CDF):**
        $$ F(x) = P(X \le x) = \int_{0}^{x} \lambda e^{-\lambda t} dt $$
        Let $u = -\lambda t$, so $du = -\lambda dt$. When $t=0$, $u=0$. When $t=x$, $u=-\lambda x$.
        $$ F(x) = \int_{0}^{-\lambda x} e^{u} (-du) = -\int_{0}^{-\lambda x} e^{u} du = -[e^u]_{0}^{-\lambda x} = -(e^{-\lambda x} - e^0) = 1 - e^{-\lambda x} $$
        So, the CDF is:
        $$ F(x) = \begin{cases} 1 - e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases} $$
    *   **Memoryless Property:** This is a crucial property of the exponential distribution. It states that the probability of an event occurring in the future is independent of how much time has already passed. Mathematically:
        $$ P(X > s+t \mid X > s) = P(X > t) $$
        for any $s, t \ge 0$.
        This means that if a component has already lasted for $s$ hours, the probability that it will last for at least $t$ *additional* hours is the same as the probability that a new component would last for $t$ hours.

**Calculating Probabilities for Exponential Distribution:**
*   $P(X \le x) = F(x) = 1 - e^{-\lambda x}$ (for $x \ge 0$)
*   $P(X > x) = 1 - P(X \le x) = 1 - (1 - e^{-\lambda x}) = e^{-\lambda x}$ (for $x \ge 0$)
*   $P(a \le X \le b) = P(X \le b) - P(X \le a) = (1 - e^{-\lambda b}) - (1 - e^{-\lambda a}) = e^{-\lambda a} - e^{-\lambda b}$ (for $0 \le a \le b$)

**Example 3.1 (Exponential Distribution):**
The time to failure of a certain type of electronic component is exponentially distributed with a mean time to failure of 1000 hours.
*   Here, the mean is $E[X] = 1/\lambda = 1000$ hours.
*   Therefore, the rate parameter is $\lambda = \frac{1}{1000} = 0.001$ per hour.
*   The PDF is $f(x) = 0.001 e^{-0.001x}$ for $x \ge 0$.
*   What is the probability that a component fails within the first 500 hours?
    *   $P(X \le 500) = 1 - e^{-0.001 \times 500} = 1 - e^{-0.5}$.
    *   Using a calculator, $e^{-0.5} \approx 0.6065$.
    *   $P(X \le 500) \approx 1 - 0.6065 = 0.3935$. (Approximately 39.35%)
*   What is the probability that a component lasts longer than 2000 hours?
    *   $P(X > 2000) = e^{-0.001 \times 2000} = e^{-2}$.
    *   Using a calculator, $e^{-2} \approx 0.1353$. (Approximately 13.53%)
*   What is the probability that a component that has already lasted 1500 hours will last for at least another 500 hours?
    *   Due to the memoryless property, $P(X > 1500 + 500 \mid X > 1500) = P(X > 500)$.
    *   $P(X > 500) = e^{-0.001 \times 500} = e^{-0.5} \approx 0.6065$.

**Example 3.2 (Exponential Distribution in Physics):**
In nuclear physics, the decay of radioactive isotopes follows an exponential distribution. The half-life of an isotope is related to the decay constant ($\lambda$) by $t_{1/2} = \frac{\ln(2)}{\lambda}$. If the half-life of a substance is 10 years, then $\lambda = \frac{\ln(2)}{10} \approx 0.0693$ per year. The probability of a nucleus not decaying within $t$ years is $P(X > t) = e^{-\lambda t}$.

**Textbook References:**
*   Devore, J. L. (2016) covers the exponential distribution in Chapter 4, including its relation to the Poisson process and the memoryless property.
*   Ross, S. M. (2020) also provides a comprehensive treatment of the exponential distribution.

---

### Relationship between Distributions and Applications:

*   **Uniform Distribution:** Useful for modeling random sampling where each value in a range is equally likely, or for random number generation.
*   **Normal Distribution:** Central to statistics due to the Central Limit Theorem. It models many natural phenomena and is the basis for many statistical tests (linking to CO3). In physical sciences, it's used for measurement errors, signal noise, and statistical properties of large systems.
*   **Exponential Distribution:** Models waiting times and lifetimes. It's crucial in reliability engineering, queueing theory, and understanding phenomena like radioactive decay and the time between cosmic ray detections.

The understanding of these continuous distributions is foundational for **CO2**. For example, confidence intervals (CO3) are often based on the assumption of normality or derived from properties of distributions that are related to the normal distribution. Numerical methods (CO4) might be used to approximate integrals of these PDFs when analytical solutions are difficult, especially for complex variations of these distributions.

---

### Important Points to Remember:

*   For continuous random variables, probabilities are calculated over intervals using integrals of the PDF. $P(X=x) = 0$.
*   **Uniform Distribution:** Constant PDF over an interval $[a, b]$. Mean is $(a+b)/2$.
*   **Normal Distribution:** Bell-shaped, symmetric curve. Characterized by mean $\mu$ and standard deviation $\sigma$. Use z-scores to standardize and work with tables/calculators. The empirical rule (68-95-99.7) is a useful approximation.
*   **Exponential Distribution:** Models waiting times/lifetimes. Rate parameter $\lambda$. Mean is $1/\lambda$. Key property: memoryless.
*   The parameters of these distributions ($\mu, \sigma, \lambda$) are crucial for defining the shape and location of the probability curve.

---

### Practice Questions/Exercises:

**Question 1 (Uniform Distribution):**
A random number generator produces values that are uniformly distributed between 0 and 10. What is the probability that a generated number is between 3 and 7?
(a) 0.2
(b) 0.4
(c) 0.5
(d) 0.7

**Question 2 (Normal Distribution):**
The breaking strength of a certain type of rope is normally distributed with a mean of 1000 kg and a standard deviation of 50 kg. What is the probability that a rope will break with a load less than 925 kg?
(a) 0.0668
(b) 0.0808
(c) 0.9192
(d) 0.9332

**Question 3 (Exponential Distribution):**
The time (in hours) between successive arrivals of customers at a service counter follows an exponential distribution with a rate parameter $\lambda = 0.5$ customers per hour. What is the probability that the time between arrivals is less than 2 hours?
(a) $1 - e^{-1}$
(b) $e^{-1}$
(c) $1 - e^{-0.5}$
(d) $e^{-0.5}$

**Question 4 (Exponential Distribution - Memoryless Property):**
A light bulb has a lifetime that follows an exponential distribution with a mean of 1000 hours. If a light bulb has already been working for 800 hours, what is the probability that it will last for at least another 500 hours?

**Question 5 (Normal Distribution - Application):**
In a physics experiment, the error in measuring a certain quantity is normally distributed with a mean of 0 and a standard deviation of 0.1 units. What is the probability that the absolute error is greater than 0.2 units?

---

### Answers to Practice Questions:

**Answer 1:**
The interval is $[0, 10]$, so $a=0$, $b=10$. The PDF is $f(x) = \frac{1}{10-0} = \frac{1}{10}$.
$P(3 \le X \le 7) = \int_{3}^{7} \frac{1}{10} dx = \frac{1}{10} [x]_{3}^{7} = \frac{1}{10} (7-3) = \frac{4}{10} = 0.4$.
**Correct Answer: (b)**

**Answer 2:**
$X \sim N(1000, 50^2)$. We want $P(X < 925)$.
$z = \frac{925 - 1000}{50} = \frac{-75}{50} = -1.5$.
$P(X < 925) = P(Z < -1.5)$. Using a z-table, $\Phi(-1.5) \approx 0.0668$.
**Correct Answer: (a)**

**Answer 3:**
$\lambda = 0.5$. We want $P(X < 2)$.
$P(X < 2) = 1 - e^{-\lambda x} = 1 - e^{-0.5 \times 2} = 1 - e^{-1}$.
**Correct Answer: (a)**

**Answer 4:**
The distribution is exponential, so it is memoryless. The probability that it will last for at least another 500 hours, given it has already lasted 800 hours, is the same as the probability that a new bulb will last for 500 hours.
Mean $E[X] = 1000$ hours, so $\lambda = 1/1000 = 0.001$.
$P(X > 500) = e^{-\lambda x} = e^{-0.001 \times 500} = e^{-0.5}$.
Using a calculator, $e^{-0.5} \approx 0.6065$.

**Answer 5:**
$X \sim N(0, 0.1^2)$. We want $P(|X| > 0.2)$.
$P(|X| > 0.2) = P(X > 0.2) + P(X < -0.2)$.
Due to symmetry, $P(X < -0.2) = P(X > 0.2)$.
So, $P(|X| > 0.2) = 2 \times P(X > 0.2)$.
For $P(X > 0.2)$: $z = \frac{0.2 - 0}{0.1} = 2$.
$P(X > 0.2) = P(Z > 2) = 1 - \Phi(2)$.
Using a z-table, $\Phi(2) \approx 0.9772$.
$P(X > 0.2) \approx 1 - 0.9772 = 0.0228$.
Therefore, $P(|X| > 0.2) \approx 2 \times 0.0228 = 0.0456$.

---
This concludes the notes for Uniform, Normal, and Exponential Distributions. Remember to practice applying these concepts to various problems in your physical science studies.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
