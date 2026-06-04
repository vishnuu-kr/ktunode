---
title: "Continuous random variables and their probability distributions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4c0"
status: "completed"
scrapedAt: "2026-05-23T17:50:40.963Z"
---
# Mathematics for Electrical Science – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

This module delves into the world of continuous random variables, which are fundamental to modeling many phenomena in electrical engineering. We will explore their properties, probability distributions, and how they are used to analyze random events that can take on any value within a given range.

### Course Outcomes Addressed in this Module:

*   **CO2: Describe the concept, properties and important models of continuous random variables and to apply in suitable random phenomena. (Knowledge Level: K3)** This module directly addresses this outcome by defining continuous random variables, explaining their probability density functions, cumulative distribution functions, and introducing key continuous distributions.

### Learning Outcomes for this Module:

*   Define a continuous random variable and its properties.
*   Understand and utilize the probability density function (PDF) and cumulative distribution function (CDF) for continuous random variables.
*   Calculate the expected value and variance of continuous random variables.
*   Explore important continuous probability distributions, including the Uniform, Exponential, and Normal distributions.
*   Apply these concepts to solve problems in electrical science.

---

### 1. Introduction to Continuous Random Variables

#### 1.1 What is a Continuous Random Variable?

*   **Definition:** A random variable $X$ is called **continuous** if its possible values are intervals of real numbers. This means that $X$ can take on any value within a specified range, often an infinite number of values.

*   **Contrast with Discrete Random Variables:** Unlike discrete random variables (covered in previous modules) that can only take on a countable number of values (e.g., number of defects, number of arrivals), continuous random variables can assume any value within an interval.

*   **Examples in Electrical Science:**
    *   The voltage across a resistor at a specific time.
    *   The current flowing through a circuit.
    *   The time until a component fails.
    *   The amplitude of a signal.
    *   The temperature of an electronic device.

#### 1.2 Probability Density Function (PDF)

*   **Definition:** For a continuous random variable $X$, its **probability density function (PDF)**, denoted by $f_X(x)$, is a function that describes the relative likelihood for $X$ to take on a given value.

*   **Key Properties of a PDF:**
    1.  $f_X(x) \geq 0$ for all $x$. (The density is always non-negative).
    2.  $\int_{-\infty}^{\infty} f_X(x) dx = 1$. (The total area under the PDF curve must be 1, representing the total probability).
    3.  The probability that $X$ falls within an interval $[a, b]$ is given by the integral of the PDF over that interval:
        $P(a \leq X \leq b) = \int_{a}^{b} f_X(x) dx$.

*   **Important Note:** For a continuous random variable, the probability of it taking on any *single specific value* is zero. That is, $P(X = x) = 0$ for any $x$. This is because there are infinitely many possible values, so the probability mass at any single point is infinitesimally small.
    *   Therefore, $P(a \leq X \leq b) = P(a < X \leq b) = P(a \leq X < b) = P(a < X < b)$.

*   **Visual Representation:** The PDF is a curve, and the area under the curve represents probability.

*   **Reference:**
    *   Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapter 4: Discrete Random Variables and Probability Distributions - this chapter often provides a good contrast and sets the stage for continuous variables).
    *   Veerarajan, T. (2008). *Probability, Statistics and Random Processes* (3rd ed.). The McGraw-Hill. (Chapter 6: Probability Distributions - Discrete and Continuous).

#### 1.3 Cumulative Distribution Function (CDF)

*   **Definition:** The **cumulative distribution function (CDF)** of a random variable $X$, denoted by $F_X(x)$, is a function that gives the probability that $X$ will take a value less than or equal to $x$.
    *   $F_X(x) = P(X \leq x)$

*   **Relationship between PDF and CDF:** The CDF can be obtained by integrating the PDF:
    *   $F_X(x) = \int_{-\infty}^{x} f_X(t) dt$
    *   Conversely, if $F_X(x)$ is differentiable, the PDF can be obtained by differentiating the CDF:
    *   $f_X(x) = \frac{d}{dx} F_X(x)$

*   **Key Properties of a CDF:**
    1.  $0 \leq F_X(x) \leq 1$ for all $x$.
    2.  $F_X(x)$ is non-decreasing. As $x$ increases, the probability $P(X \leq x)$ can only increase or stay the same.
    3.  $\lim_{x \to -\infty} F_X(x) = 0$. (The probability of being less than or equal to negative infinity is 0).
    4.  $\lim_{x \to \infty} F_X(x) = 1$. (The probability of being less than or equal to infinity is 1).

*   **Calculating Probabilities using CDF:**
    *   $P(a \leq X \leq b) = F_X(b) - F_X(a)$

*   **Reference:**
    *   Papoulis, A., & Pillai, S.U. (2002). *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill. (Chapter 4: Random Variables).
    *   Veerarajan, T. (2008). *Probability, Statistics and Random Processes* (3rd ed.). The McGraw-Hill. (Chapter 6: Probability Distributions - Discrete and Continuous).

---

### 2. Expected Value and Variance of Continuous Random Variables

#### 2.1 Expected Value (Mean)

*   **Definition:** The **expected value** (or mean) of a continuous random variable $X$, denoted by $E[X]$ or $\mu_X$, is the weighted average of all possible values of $X$, where the weights are given by the PDF.

*   **Formula:**
    *   $E[X] = \mu_X = \int_{-\infty}^{\infty} x f_X(x) dx$

*   **Interpretation:** The expected value represents the long-run average value of the random variable if the experiment were repeated many times.

*   **Reference:**
    *   Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapter 4).
    *   Ross, S. M. (2020). *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press. (Chapter 4: Random Variables).

#### 2.2 Variance and Standard Deviation

*   **Definition:** The **variance** of a continuous random variable $X$, denoted by $Var(X)$ or $\sigma_X^2$, measures the spread or dispersion of the random variable around its mean.

*   **Formula:**
    *   $Var(X) = \sigma_X^2 = E[(X - \mu_X)^2] = \int_{-\infty}^{\infty} (x - \mu_X)^2 f_X(x) dx$

*   **Alternative Formula for Variance:** A more computationally convenient formula is:
    *   $Var(X) = \sigma_X^2 = E[X^2] - (E[X])^2$
    *   Where $E[X^2] = \int_{-\infty}^{\infty} x^2 f_X(x) dx$.

*   **Standard Deviation:** The **standard deviation** is the square root of the variance, denoted by $\sigma_X$. It is often more interpretable as it has the same units as the random variable.
    *   $\sigma_X = \sqrt{Var(X)}$

*   **Reference:**
    *   Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapter 4).
    *   Veerarajan, T. (2008). *Probability, Statistics and Random Processes* (3rd ed.). The McGraw-Hill. (Chapter 6).

---

### 3. Important Continuous Probability Distributions

This section introduces some of the most commonly used continuous probability distributions in electrical science.

#### 3.1 Uniform Distribution

*   **Description:** The **uniform distribution** is used when all values within a given interval are equally likely.

*   **Parameters:**
    *   $a$: lower bound of the interval.
    *   $b$: upper bound of the interval.

*   **PDF:**
    $$
    f_X(x) = \begin{cases} \frac{1}{b-a} & \text{if } a \leq x \leq b \\ 0 & \text{otherwise} \end{cases}
    $$

*   **CDF:**
    $$
    F_X(x) = \begin{cases} 0 & \text{if } x < a \\ \frac{x-a}{b-a} & \text{if } a \leq x \leq b \\ 1 & \text{if } x > b \end{cases}
    $$

*   **Expected Value:** $E[X] = \frac{a+b}{2}$ (The midpoint of the interval).

*   **Variance:** $Var(X) = \frac{(b-a)^2}{12}$

*   **Applications in Electrical Science:**
    *   Random phase of a signal.
    *   Error in measurements that are uniformly distributed within a certain range.
    *   Arrival times of events in certain queuing systems.

*   **Example:** Consider the voltage output of a power supply that is supposed to be 5V but can fluctuate uniformly between 4.8V and 5.2V. Here, $a=4.8$ and $b=5.2$.
    *   The PDF is $f_X(x) = \frac{1}{5.2 - 4.8} = \frac{1}{0.4} = 2.5$ for $4.8 \leq x \leq 5.2$.
    *   The probability that the voltage is between 4.9V and 5.1V is:
        $P(4.9 \leq X \leq 5.1) = \int_{4.9}^{5.1} 2.5 dx = 2.5 [x]_{4.9}^{5.1} = 2.5 (5.1 - 4.9) = 2.5 \times 0.2 = 0.5$.

*   **Reference:**
    *   Veerarajan, T. (2008). *Probability, Statistics and Random Processes* (3rd ed.). The McGraw-Hill. (Chapter 6).
    *   Anderson, D.F., Timo, B. (2017). *Introduction to Probability* (1st ed.). Cambridge. (Chapter 5: Continuous Random Variables).

#### 3.2 Exponential Distribution

*   **Description:** The **exponential distribution** is often used to model the time between events in a Poisson process, such as the time between arrivals of components on an assembly line or the time until the failure of an electronic component. It is characterized by its "memoryless" property.

*   **Parameter:**
    *   $\lambda$: The rate parameter (positive constant). In reliability, $\lambda$ is often the failure rate.

*   **PDF:**
    $$
    f_X(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \geq 0 \\ 0 & \text{if } x < 0 \end{cases}
    $$

*   **CDF:**
    $$
    F_X(x) = \begin{cases} 1 - e^{-\lambda x} & \text{if } x \geq 0 \\ 0 & \text{if } x < 0 \end{cases}
    $$

*   **Expected Value:** $E[X] = \frac{1}{\lambda}$

*   **Variance:** $Var(X) = \frac{1}{\lambda^2}$

*   **Memoryless Property:** This is a crucial property of the exponential distribution. For any $s, t \geq 0$:
    *   $P(X > s+t \mid X > s) = P(X > t)$
    *   **Interpretation:** The probability that an event will occur in the future, given that it has not occurred yet, is independent of how long we have already waited. For example, if $X$ is the lifetime of a component, the probability that it will last another $t$ hours, given that it has already lasted $s$ hours, is the same as the probability that a new component will last $t$ hours.

*   **Applications in Electrical Science:**
    *   Time until the first arrival of a packet in a communication system.
    *   Lifetime of electronic components (e.g., capacitors, transistors).
    *   Time between calls in a telecommunications network.
    *   Time between failures in a system.

*   **Example:** The time (in hours) until the first failure of a particular type of transistor is exponentially distributed with a rate parameter $\lambda = 0.001$ failures per hour.
    *   The PDF is $f_X(x) = 0.001 e^{-0.001 x}$ for $x \geq 0$.
    *   The expected lifetime is $E[X] = \frac{1}{0.001} = 1000$ hours.
    *   The probability that a transistor lasts for more than 500 hours is:
        $P(X > 500) = \int_{500}^{\infty} 0.001 e^{-0.001 x} dx = [-e^{-0.001 x}]_{500}^{\infty} = 0 - (-e^{-0.001 \times 500}) = e^{-0.5} \approx 0.6065$.
        Alternatively, using the CDF: $P(X > 500) = 1 - F_X(500) = 1 - (1 - e^{-0.001 \times 500}) = e^{-0.5} \approx 0.6065$.

*   **Reference:**
    *   Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapter 4).
    *   Veerarajan, T. (2008). *Probability, Statistics and Random Processes* (3rd ed.). The McGraw-Hill. (Chapter 6).
    *   Palaniammal, S. (2015). *Probability and Random Processes* (3rd ed.). PHI Learning Private Limited. (Chapter 4: Continuous Random Variables).

#### 3.3 Normal Distribution (Gaussian Distribution)

*   **Description:** The **normal distribution** is arguably the most important probability distribution in statistics and science. It is bell-shaped and symmetrical. Many natural phenomena and measurement errors tend to follow a normal distribution.

*   **Parameters:**
    *   $\mu$: The mean (location parameter).
    *   $\sigma$: The standard deviation (scale parameter, $\sigma > 0$).

*   **PDF:**
    $$
    f_X(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2} \left(\frac{x-\mu}{\sigma}\right)^2}, \quad -\infty < x < \infty
    $$

*   **CDF:** There is no simple closed-form expression for the CDF of the normal distribution. It is typically denoted by $\Phi(z)$ when the distribution is standardized and evaluated using tables or software.
    *   $F_X(x) = \Phi\left(\frac{x-\mu}{\sigma}\right)$

*   **Standard Normal Distribution:** A special case of the normal distribution with $\mu = 0$ and $\sigma = 1$. Its PDF is $\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}$, and its CDF is $\Phi(z)$.

*   **Using the Standard Normal Distribution:** To find probabilities for any normal distribution, we standardize the variable by converting it to a Z-score: $Z = \frac{X-\mu}{\sigma}$. Then, we use the CDF of the standard normal distribution, $\Phi(z)$.
    *   $P(a \leq X \leq b) = P\left(\frac{a-\mu}{\sigma} \leq \frac{X-\mu}{\sigma} \leq \frac{b-\mu}{\sigma}\right) = P\left(\frac{a-\mu}{\sigma} \leq Z \leq \frac{b-\mu}{\sigma}\right) = \Phi\left(\frac{b-\mu}{\sigma}\right) - \Phi\left(\frac{a-\mu}{\sigma}\right)$.

*   **Expected Value:** $E[X] = \mu$

*   **Variance:** $Var(X) = \sigma^2$

*   **Central Limit Theorem (CLT):** A fundamental theorem stating that the sum (or average) of a large number of independent and identically distributed random variables, regardless of their original distribution, will be approximately normally distributed. This is why the normal distribution is so prevalent.

*   **Applications in Electrical Science:**
    *   Noise in electronic circuits (e.g., thermal noise, shot noise).
    *   Errors in signal measurements.
    *   Variations in manufacturing tolerances of electronic components.
    *   Modelling signal amplitudes that are subject to random fluctuations.

*   **Example:** The output voltage of a regulated power supply is normally distributed with a mean $\mu = 12V$ and a standard deviation $\sigma = 0.1V$.
    *   We want to find the probability that the output voltage is between 11.8V and 12.2V.
    *   We need to calculate the Z-scores for these values:
        *   $Z_1 = \frac{11.8 - 12}{0.1} = \frac{-0.2}{0.1} = -2$
        *   $Z_2 = \frac{12.2 - 12}{0.1} = \frac{0.2}{0.1} = 2$
    *   $P(11.8 \leq X \leq 12.2) = P(-2 \leq Z \leq 2) = \Phi(2) - \Phi(-2)$.
    *   Using a standard normal table or calculator, $\Phi(2) \approx 0.9772$. Since the normal distribution is symmetric, $\Phi(-2) = 1 - \Phi(2) \approx 1 - 0.9772 = 0.0228$.
    *   Therefore, $P(11.8 \leq X \leq 12.2) \approx 0.9772 - 0.0228 = 0.9544$. This means about 95.44% of the time, the output voltage will be within $\pm 0.2V$ of the mean.

*   **Reference:**
    *   Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapter 4).
    *   Veerarajan, T. (2008). *Probability, Statistics and Random Processes* (3rd ed.). The McGraw-Hill. (Chapter 6).
    *   Papoulis, A., & Pillai, S.U. (2002). *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill. (Chapter 4).

---

### 4. Practice Questions and Exercises

**Question 1:**
Let $X$ be a continuous random variable with PDF:
$$
f_X(x) = \begin{cases} kx & \text{if } 0 \leq x \leq 2 \\ 0 & \text{otherwise} \end{cases}
$$
Find the value of $k$ and then calculate $P(1 \leq X \leq 1.5)$.

**Answer 1:**
To find $k$, we use the property $\int_{-\infty}^{\infty} f_X(x) dx = 1$:
$\int_{0}^{2} kx dx = 1$
$k \left[\frac{x^2}{2}\right]_{0}^{2} = 1$
$k \left(\frac{2^2}{2} - \frac{0^2}{2}\right) = 1$
$k \left(\frac{4}{2}\right) = 1$
$2k = 1 \implies k = \frac{1}{2}$.

So, $f_X(x) = \frac{1}{2}x$ for $0 \leq x \leq 2$.

Now, calculate $P(1 \leq X \leq 1.5)$:
$P(1 \leq X \leq 1.5) = \int_{1}^{1.5} \frac{1}{2}x dx$
$= \frac{1}{2} \left[\frac{x^2}{2}\right]_{1}^{1.5}$
$= \frac{1}{4} [x^2]_{1}^{1.5}$
$= \frac{1}{4} ((1.5)^2 - 1^2)$
$= \frac{1}{4} (2.25 - 1)$
$= \frac{1}{4} (1.25) = 0.3125$.

**Question 2:**
The time $T$ (in minutes) that a customer has to wait for a bus is exponentially distributed with a mean waiting time of 5 minutes.
a) What is the rate parameter $\lambda$?
b) What is the probability that a customer waits for more than 10 minutes?
c) What is the probability that a customer waits for more than 10 minutes given that they have already waited for 5 minutes?

**Answer 2:**
a) The mean of an exponential distribution is $E[T] = \frac{1}{\lambda}$. Given $E[T] = 5$ minutes, we have:
$\frac{1}{\lambda} = 5 \implies \lambda = \frac{1}{5} = 0.2$ customers per minute.

b) The PDF is $f_T(t) = 0.2 e^{-0.2 t}$ for $t \geq 0$.
The probability that a customer waits for more than 10 minutes is $P(T > 10)$.
Using the CDF, $F_T(t) = 1 - e^{-0.2 t}$ for $t \geq 0$.
$P(T > 10) = 1 - F_T(10) = 1 - (1 - e^{-0.2 \times 10}) = e^{-2} \approx 0.1353$.

c) Due to the memoryless property of the exponential distribution, the probability that a customer waits for more than 10 minutes given they have already waited for 5 minutes is the same as the probability that a new customer waits for more than 5 minutes.
$P(T > 10 \mid T > 5) = P(T > 5)$
$P(T > 5) = 1 - F_T(5) = 1 - (1 - e^{-0.2 \times 5}) = e^{-1} \approx 0.3679$.

**Question 3:**
The noise voltage $V$ in a communication channel is normally distributed with a mean of 0 volts and a standard deviation of 0.5 volts.
a) What is the probability that the noise voltage is between -0.75V and 0.75V?
b) What is the probability that the noise voltage is greater than 0.25V?

**Answer 3:**
Here, $\mu = 0$ and $\sigma = 0.5$.

a) We need to find $P(-0.75 \leq V \leq 0.75)$.
Calculate Z-scores:
$Z_1 = \frac{-0.75 - 0}{0.5} = -1.5$
$Z_2 = \frac{0.75 - 0}{0.5} = 1.5$
$P(-0.75 \leq V \leq 0.75) = P(-1.5 \leq Z \leq 1.5) = \Phi(1.5) - \Phi(-1.5)$.
Using a standard normal table, $\Phi(1.5) \approx 0.9332$.
$\Phi(-1.5) = 1 - \Phi(1.5) \approx 1 - 0.9332 = 0.0668$.
$P(-0.75 \leq V \leq 0.75) \approx 0.9332 - 0.0668 = 0.8664$.

b) We need to find $P(V > 0.25)$.
Calculate Z-score:
$Z = \frac{0.25 - 0}{0.5} = 0.5$
$P(V > 0.25) = P(Z > 0.5) = 1 - P(Z \leq 0.5) = 1 - \Phi(0.5)$.
Using a standard normal table, $\Phi(0.5) \approx 0.6915$.
$P(V > 0.25) \approx 1 - 0.6915 = 0.3085$.

---

### 5. Important Points to Remember

*   **Continuous vs. Discrete:** The fundamental difference is the set of possible values. Continuous variables can take any value in an interval, while discrete variables take countable values.
*   **PDF vs. Probability:** For continuous variables, the PDF $f(x)$ is not a probability. Probability is represented by the *area* under the PDF curve over an interval: $P(a \leq X \leq b) = \int_{a}^{b} f(x) dx$.
*   **$P(X=x) = 0$:** For any continuous random variable, the probability of it taking on a single specific value is zero.
*   **CDF is Key:** The CDF $F(x) = P(X \leq x)$ provides a way to calculate probabilities for intervals and is directly related to the PDF by integration and differentiation.
*   **Memoryless Property:** The exponential distribution is unique in its memoryless property, which is critical for modeling time-to-event data.
*   **Normal Distribution Ubiquity:** The normal distribution is prevalent due to the Central Limit Theorem and its use in modeling noise and errors. Understanding how to use Z-scores and standard normal tables is essential.
*   **Expected Value and Variance:** These are crucial summary statistics that describe the center and spread of a distribution.

---

### 6. Alignment with Course Outcomes

*   **CO2: Describe the concept, properties and important models of continuous random variables and to apply in suitable random phenomena.** This module directly addresses this by defining continuous random variables, explaining their PDFs and CDFs, calculating expected values and variances, and detailing the properties and applications of Uniform, Exponential, and Normal distributions. The examples provided throughout demonstrate the application of these concepts to electrical science phenomena.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
