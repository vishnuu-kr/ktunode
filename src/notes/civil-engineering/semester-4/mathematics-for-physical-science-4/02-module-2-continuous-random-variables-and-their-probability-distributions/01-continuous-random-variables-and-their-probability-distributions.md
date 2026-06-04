---
title: "Continuous random variables and their probability distributions"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810928"
status: "completed"
scrapedAt: "2026-05-20T18:46:00.287Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 2: Continuous Random Variables and Their Probability Distributions

---

### Topic: Continuous Random Variables and Their Probability Distributions

This module introduces the concept of continuous random variables, which are variables that can take on any value within a given range. We will explore their probability distributions, focusing on key concepts like probability density functions (PDFs), cumulative distribution functions (CDFs), and important continuous probability distributions frequently encountered in physical sciences.

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Define and differentiate between discrete and continuous random variables.**
*   **Understand and explain the properties of a probability density function (PDF) for a continuous random variable.**
*   **Calculate probabilities for a continuous random variable using its PDF.**
*   **Define and understand the properties of a cumulative distribution function (CDF) for a continuous random variable.**
*   **Relate the PDF and CDF of a continuous random variable.**
*   **Calculate the mean (expected value) and variance of a continuous random variable.**
*   **Identify and understand the characteristics of common continuous probability distributions relevant to physical sciences, including:**
    *   The Uniform Distribution
    *   The Exponential Distribution
    *   The Normal (Gaussian) Distribution
    *   The Chi-Squared Distribution
    *   The Student's t-Distribution
    *   The F-Distribution

---

### 2. Key Concepts and Definitions

#### 2.1. Discrete vs. Continuous Random Variables

*   **Discrete Random Variable:** A variable whose possible values can be listed or counted. There are gaps between the possible values.
    *   *Example:* The number of radioactive decays in a given time interval, the number of particles detected by a sensor.
*   **Continuous Random Variable:** A variable whose possible values can take on any value within a given range. There are no gaps between possible values.
    *   *Example:* The time between radioactive decays, the velocity of a particle, the measurement of a physical quantity like temperature or length.

**Important Point:** For continuous random variables, the probability of the variable taking on any *specific* value is zero. Instead, we talk about the probability of the variable falling within a *range* of values.

#### 2.2. Probability Density Function (PDF) - $f(x)$

*   **Definition:** A function that describes the relative likelihood for a continuous random variable to take on a given value. The PDF is non-negative for all possible values of the random variable.
*   **Properties of a PDF:**
    1.  $f(x) \ge 0$ for all $x$. (The density is always non-negative).
    2.  $\int_{-\infty}^{\infty} f(x) dx = 1$. (The total area under the PDF curve over its entire domain must be equal to 1, representing the total probability).
*   **Calculating Probabilities using PDF:** The probability that a continuous random variable $X$ falls between two values $a$ and $b$ is given by the integral of the PDF from $a$ to $b$:
    $$P(a \le X \le b) = \int_{a}^{b} f(x) dx$$
    For continuous variables, $P(X=a) = 0$, so $P(a \le X \le b) = P(a < X < b) = P(a \le X < b) = P(a < X \le b)$.

**Example:**
Let $X$ be a continuous random variable with PDF:
$$f(x) = \begin{cases} 2x & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$$
Calculate $P(0.2 \le X \le 0.5)$.
$$P(0.2 \le X \le 0.5) = \int_{0.2}^{0.5} 2x \, dx = [x^2]_{0.2}^{0.5} = (0.5)^2 - (0.2)^2 = 0.25 - 0.04 = 0.21$$

#### 2.3. Cumulative Distribution Function (CDF) - $F(x)$

*   **Definition:** The CDF of a random variable $X$, denoted by $F(x)$, is the probability that $X$ takes on a value less than or equal to $x$.
    $$F(x) = P(X \le x)$$
*   **Properties of a CDF:**
    1.  $0 \le F(x) \le 1$ for all $x$. (Probabilities are between 0 and 1).
    2.  $F(x)$ is non-decreasing. (As $x$ increases, the probability $P(X \le x)$ either stays the same or increases).
    3.  $\lim_{x \to -\infty} F(x) = 0$. (The probability of being less than or equal to a very small number is 0).
    4.  $\lim_{x \to \infty} F(x) = 1$. (The probability of being less than or equal to a very large number is 1).
*   **Relationship between PDF and CDF:**
    *   $F(x) = \int_{-\infty}^{x} f(t) dt$ (The CDF is the integral of the PDF up to $x$).
    *   $f(x) = \frac{d}{dx} F(x)$ (The PDF is the derivative of the CDF).
*   **Calculating Probabilities using CDF:**
    $$P(a \le X \le b) = F(b) - F(a)$$

**Example (Continuing from above):**
For $f(x) = \begin{cases} 2x & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$
Let's find the CDF, $F(x)$.
For $x < 0$: $F(x) = \int_{-\infty}^{x} 0 \, dt = 0$
For $0 \le x \le 1$: $F(x) = \int_{-\infty}^{0} 0 \, dt + \int_{0}^{x} 2t \, dt = 0 + [t^2]_{0}^{x} = x^2$
For $x > 1$: $F(x) = \int_{-\infty}^{0} 0 \, dt + \int_{0}^{1} 2t \, dt + \int_{1}^{x} 0 \, dt = 0 + [t^2]_{0}^{1} + 0 = 1^2 - 0^2 = 1$

So, the CDF is:
$$F(x) = \begin{cases} 0 & \text{if } x < 0 \\ x^2 & \text{if } 0 \le x \le 1 \\ 1 & \text{if } x > 1 \end{cases}$$

Now, calculate $P(0.2 \le X \le 0.5)$ using the CDF:
$$P(0.2 \le X \le 0.5) = F(0.5) - F(0.2) = (0.5)^2 - (0.2)^2 = 0.25 - 0.04 = 0.21$$
This matches the result obtained using the PDF.

#### 2.4. Mean (Expected Value) and Variance of a Continuous Random Variable

*   **Mean (Expected Value) - $E[X]$ or $\mu$:** The average value of the random variable.
    $$E[X] = \mu = \int_{-\infty}^{\infty} x f(x) dx$$
*   **Variance - $Var(X)$ or $\sigma^2$:** A measure of the spread or dispersion of the random variable around its mean.
    $$Var(X) = \sigma^2 = E[(X - \mu)^2] = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) dx$$
    An alternative formula for variance is:
    $$Var(X) = E[X^2] - (E[X])^2 = \left(\int_{-\infty}^{\infty} x^2 f(x) dx\right) - \mu^2$$
*   **Standard Deviation - $\sigma$:** The square root of the variance, which is in the same units as the random variable.
    $$\sigma = \sqrt{Var(X)}$$

**Example (Continuing from above):**
For $f(x) = \begin{cases} 2x & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$
Calculate the mean and variance.

**Mean:**
$$E[X] = \int_{-\infty}^{\infty} x f(x) dx = \int_{0}^{1} x (2x) dx = \int_{0}^{1} 2x^2 dx = \left[\frac{2x^3}{3}\right]_{0}^{1} = \frac{2(1)^3}{3} - \frac{2(0)^3}{3} = \frac{2}{3}$$

**Variance:**
First, calculate $E[X^2]$:
$$E[X^2] = \int_{-\infty}^{\infty} x^2 f(x) dx = \int_{0}^{1} x^2 (2x) dx = \int_{0}^{1} 2x^3 dx = \left[\frac{2x^4}{4}\right]_{0}^{1} = \left[\frac{x^4}{2}\right]_{0}^{1} = \frac{(1)^4}{2} - \frac{(0)^4}{2} = \frac{1}{2}$$

Now, calculate the variance:
$$Var(X) = E[X^2] - (E[X])^2 = \frac{1}{2} - \left(\frac{2}{3}\right)^2 = \frac{1}{2} - \frac{4}{9} = \frac{9 - 8}{18} = \frac{1}{18}$$

The mean is $\frac{2}{3}$ and the variance is $\frac{1}{18}$.

---

### 3. Common Continuous Probability Distributions in Physical Science

#### 3.1. Uniform Distribution

*   **Description:** A distribution where all values within a given range are equally likely.
*   **Parameters:**
    *   $a$: Lower bound of the interval
    *   $b$: Upper bound of the interval ($a < b$)
*   **PDF:**
    $$f(x) = \begin{cases} \frac{1}{b-a} & \text{if } a \le x \le b \\ 0 & \text{otherwise} \end{cases}$$
*   **CDF:**
    $$F(x) = \begin{cases} 0 & \text{if } x < a \\ \frac{x-a}{b-a} & \text{if } a \le x \le b \\ 1 & \text{if } x > b \end{cases}$$
*   **Mean:** $E[X] = \frac{a+b}{2}$
*   **Variance:** $Var(X) = \frac{(b-a)^2}{12}$
*   **Applications:** Model for random events where any outcome in an interval is equally probable, such as the position of a particle in a confined region with no preference for any specific location.

**Example:**
The position of a particle on a line segment of length 10 units, starting at 0, is uniformly distributed. What is the probability that the particle is between 3 and 7?
Here, $a=0$ and $b=10$. The PDF is $f(x) = \frac{1}{10-0} = \frac{1}{10}$ for $0 \le x \le 10$.
$$P(3 \le X \le 7) = \int_{3}^{7} \frac{1}{10} dx = \left[\frac{x}{10}\right]_{3}^{7} = \frac{7}{10} - \frac{3}{10} = \frac{4}{10} = 0.4$$
Alternatively, using the CDF:
$F(x) = \frac{x-0}{10-0} = \frac{x}{10}$ for $0 \le x \le 10$.
$P(3 \le X \le 7) = F(7) - F(3) = \frac{7}{10} - \frac{3}{10} = \frac{4}{10} = 0.4$.

#### 3.2. Exponential Distribution

*   **Description:** A distribution often used to model the time until an event occurs in a Poisson process (where events occur continuously and independently at a constant average rate). It has a "memoryless" property.
*   **Parameters:**
    *   $\lambda$ (lambda): Rate parameter (average number of events per unit time or space). $\lambda > 0$.
*   **PDF:**
    $$f(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases}$$
*   **CDF:**
    $$F(x) = \begin{cases} 1 - e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases}$$
*   **Mean:** $E[X] = \frac{1}{\lambda}$
*   **Variance:** $Var(X) = \frac{1}{\lambda^2}$
*   **Applications:** Time between radioactive decays, lifespan of electronic components, time between arrivals of customers at a service point, distance between successive events in a spatial process.

**Example:**
The time (in minutes) between successive arrivals of cosmic rays at a detector follows an exponential distribution with a rate parameter $\lambda = 0.5$ arrivals per minute. What is the probability that the time between two successive arrivals is between 1 and 3 minutes?
Here, $\lambda = 0.5$. We want to calculate $P(1 \le X \le 3)$.
$$P(1 \le X \le 3) = F(3) - F(1) = (1 - e^{-0.5 \times 3}) - (1 - e^{-0.5 \times 1})$$
$$= (1 - e^{-1.5}) - (1 - e^{-0.5}) = e^{-0.5} - e^{-1.5} \approx 0.6065 - 0.2231 = 0.3834$$

**Memoryless Property:** $P(X > t+s | X > s) = P(X > t)$. This means the probability of an event occurring in the future is independent of how much time has already passed.

#### 3.3. Normal (Gaussian) Distribution

*   **Description:** The most important continuous distribution in statistics and science. It's bell-shaped and symmetric about its mean. Many natural phenomena, when aggregated over many independent factors, tend to follow this distribution (Central Limit Theorem).
*   **Parameters:**
    *   $\mu$ (mu): Mean (location of the peak)
    *   $\sigma$ (sigma): Standard deviation (spread of the distribution). $\sigma > 0$.
*   **PDF:**
    $$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}, \quad -\infty < x < \infty$$
*   **CDF:** There is no simple closed-form expression for the CDF of the normal distribution. It is usually calculated using tables or statistical software, often in terms of the standard normal distribution.
    $$F(x) = \int_{-\infty}^{x} \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{t-\mu}{\sigma}\right)^2} dt$$
*   **Standard Normal Distribution (Z-distribution):** A special case of the normal distribution with $\mu = 0$ and $\sigma = 1$. Its PDF is $\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}$, and its CDF is $\Phi(z)$.
    *   Any normal random variable $X$ with mean $\mu$ and standard deviation $\sigma$ can be transformed into a standard normal variable $Z$ using the z-score: $Z = \frac{X - \mu}{\sigma}$.
    *   $P(a \le X \le b) = P\left(\frac{a-\mu}{\sigma} \le Z \le \frac{b-\mu}{\sigma}\right) = \Phi\left(\frac{b-\mu}{\sigma}\right) - \Phi\left(\frac{a-\mu}{\sigma}\right)$
*   **Mean:** $E[X] = \mu$
*   **Variance:** $Var(X) = \sigma^2$
*   **Applications:** Measurement errors, distribution of heights, IQ scores, natural phenomena that are the result of many small, independent random effects.

**Example:**
The height of adult males in a certain population is normally distributed with a mean of 175 cm and a standard deviation of 7 cm. What is the probability that a randomly selected male is between 170 cm and 180 cm tall?
Here, $\mu = 175$ and $\sigma = 7$. We want $P(170 \le X \le 180)$.
First, calculate the z-scores:
$z_1 = \frac{170 - 175}{7} = \frac{-5}{7} \approx -0.714$
$z_2 = \frac{180 - 175}{7} = \frac{5}{7} \approx 0.714$
$$P(170 \le X \le 180) = P(-0.714 \le Z \le 0.714) = \Phi(0.714) - \Phi(-0.714)$$
Using a standard normal table or calculator, $\Phi(0.714) \approx 0.7625$ and $\Phi(-0.714) \approx 0.2375$.
$$P(170 \le X \le 180) \approx 0.7625 - 0.2375 = 0.5250$$

**Important Points about Normal Distribution:**
*   **Empirical Rule (68-95-99.7 Rule):** For a normal distribution:
    *   Approximately 68% of the data falls within 1 standard deviation of the mean ($\mu \pm \sigma$).
    *   Approximately 95% of the data falls within 2 standard deviations of the mean ($\mu \pm 2\sigma$).
    *   Approximately 99.7% of the data falls within 3 standard deviations of the mean ($\mu \pm 3\sigma$).

#### 3.4. Chi-Squared ($\chi^2$) Distribution

*   **Description:** A distribution arising from the sum of the squares of independent standard normal random variables. It is widely used in statistical hypothesis testing, particularly for goodness-of-fit tests and tests of independence. It is always non-negative.
*   **Parameters:**
    *   $k$ (degrees of freedom): A positive integer. The shape of the distribution depends on $k$.
*   **PDF:**
    $$f(x; k) = \frac{1}{2^{k/2} \Gamma(k/2)} x^{k/2 - 1} e^{-x/2}, \quad \text{for } x > 0$$
    where $\Gamma(x)$ is the Gamma function.
*   **Mean:** $E[X] = k$
*   **Variance:** $Var(X) = 2k$
*   **Applications:** Analyzing variances, goodness-of-fit tests, contingency table analysis.

**Example:**
If $Z_1, Z_2, Z_3$ are independent standard normal random variables, then $X = Z_1^2 + Z_2^2 + Z_3^2$ follows a Chi-Squared distribution with $k=3$ degrees of freedom.

#### 3.5. Student's t-Distribution

*   **Description:** Used when the sample size is small and the population standard deviation is unknown. It is bell-shaped and symmetric like the normal distribution but has heavier tails, meaning it's more spread out.
*   **Parameters:**
    *   $\nu$ (nu) or $df$: Degrees of freedom. Typically, $n-1$ where $n$ is the sample size. $\nu > 0$.
*   **PDF:**
    $$f(x; \nu) = \frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\sqrt{\nu\pi}\Gamma\left(\frac{\nu}{2}\right)} \left(1 + \frac{x^2}{\nu}\right)^{-\frac{\nu+1}{2}}, \quad -\infty < x < \infty$$
*   **Mean:** $E[X] = 0$ (for $\nu > 1$)
*   **Variance:** $Var(X) = \frac{\nu}{\nu-2}$ (for $\nu > 2$)
*   **Applications:** Hypothesis testing for means when the population standard deviation is unknown, confidence intervals for means with small sample sizes. As degrees of freedom ($\nu$) increase, the t-distribution approaches the standard normal distribution.

**Example:**
If you are testing a hypothesis about a population mean using a sample of size $n=10$, you would use a t-distribution with $df = 10-1 = 9$.

#### 3.6. F-Distribution

*   **Description:** Used to compare variances of two populations or in analysis of variance (ANOVA). It is related to the ratio of two independent chi-squared variables. It is always non-negative.
*   **Parameters:**
    *   $\nu_1$ (numerator degrees of freedom)
    *   $\nu_2$ (denominator degrees of freedom)
*   **PDF:** Complex, involves Gamma functions.
*   **Mean:** $E[X] = \frac{\nu_2}{\nu_2 - 2}$ (for $\nu_2 > 2$)
*   **Variance:** $Var(X) = \frac{2\nu_2^2 (\nu_1 + \nu_2 - 2)}{\nu_1 (\nu_2 - 2)^2 (\nu_2 - 4)}$ (for $\nu_2 > 4$)
*   **Applications:** Comparing variances, ANOVA.

**Example:**
If you are comparing the variances of two samples from normal populations, you would use an F-test involving the F-distribution.

---

### 4. Practice Questions/Exercises

**Question 1:**
A continuous random variable $X$ has a PDF given by:
$$f(x) = \begin{cases} c x^2 & \text{if } 0 \le x \le 2 \\ 0 & \text{otherwise} \end{cases}$$
a) Find the value of the constant $c$.
b) Calculate the probability $P(0.5 \le X \le 1.5)$.
c) Calculate the mean ($E[X]$) and variance ($Var(X)$) of $X$.

**Question 2:**
The time (in hours) it takes for a certain chemical reaction to complete is exponentially distributed with a rate parameter $\lambda = 0.1$ per hour.
a) What is the probability that the reaction completes in less than 5 hours?
b) What is the probability that the reaction takes between 5 and 10 hours to complete?
c) What is the probability that the reaction takes longer than 8 hours, given that it has already taken 3 hours?

**Question 3:**
A researcher measures the breaking strength of a new alloy. The breaking strengths are normally distributed with a mean of 100 MPa and a standard deviation of 5 MPa.
a) What is the probability that a randomly selected sample has a breaking strength between 95 MPa and 105 MPa?
b) What is the probability that a randomly selected sample has a breaking strength greater than 110 MPa?
c) If samples are tested one by one, what is the probability that the first sample to break with a strength greater than 110 MPa is the third sample tested?

**Question 4:**
Which of the following are properties of a Probability Density Function (PDF) for a continuous random variable?
(i) $f(x) \ge 0$ for all $x$.
(ii) $\int_{-\infty}^{\infty} f(x) dx = 1$.
(iii) $P(X=a) = f(a)$ for any specific value $a$.

**Question 5:**
For a normally distributed variable with mean $\mu$ and standard deviation $\sigma$, approximately what percentage of the data falls within the range $[\mu - 2\sigma, \mu + 2\sigma]$?

---

### 5. Answers to Practice Questions

**Answer 1:**
a) To find $c$, we use the property $\int_{-\infty}^{\infty} f(x) dx = 1$.
$\int_{0}^{2} c x^2 dx = c \left[\frac{x^3}{3}\right]_{0}^{2} = c \left(\frac{2^3}{3} - \frac{0^3}{3}\right) = c \frac{8}{3}$.
Setting this to 1: $c \frac{8}{3} = 1 \implies c = \frac{3}{8}$.

b) $P(0.5 \le X \le 1.5) = \int_{0.5}^{1.5} \frac{3}{8} x^2 dx = \frac{3}{8} \left[\frac{x^3}{3}\right]_{0.5}^{1.5} = \frac{1}{8} [x^3]_{0.5}^{1.5}$.
$= \frac{1}{8} ((1.5)^3 - (0.5)^3) = \frac{1}{8} (3.375 - 0.125) = \frac{1}{8} (3.25) = \frac{3.25}{8} = 0.40625$.

c) Mean $E[X] = \int_{0}^{2} x \left(\frac{3}{8} x^2\right) dx = \int_{0}^{2} \frac{3}{8} x^3 dx = \frac{3}{8} \left[\frac{x^4}{4}\right]_{0}^{2} = \frac{3}{32} [x^4]_{0}^{2}$.
$= \frac{3}{32} (2^4 - 0^4) = \frac{3}{32} (16) = \frac{48}{32} = \frac{3}{2} = 1.5$.

Variance $Var(X) = E[X^2] - (E[X])^2$.
$E[X^2] = \int_{0}^{2} x^2 \left(\frac{3}{8} x^2\right) dx = \int_{0}^{2} \frac{3}{8} x^4 dx = \frac{3}{8} \left[\frac{x^5}{5}\right]_{0}^{2} = \frac{3}{40} [x^5]_{0}^{2}$.
$= \frac{3}{40} (2^5 - 0^5) = \frac{3}{40} (32) = \frac{96}{40} = \frac{12}{5} = 2.4$.
$Var(X) = 2.4 - (1.5)^2 = 2.4 - 2.25 = 0.15$.

**Answer 2:**
$\lambda = 0.1$.
a) $P(X < 5) = F(5) = 1 - e^{-0.1 \times 5} = 1 - e^{-0.5} \approx 1 - 0.6065 = 0.3935$.
b) $P(5 \le X \le 10) = F(10) - F(5) = (1 - e^{-0.1 \times 10}) - (1 - e^{-0.1 \times 5}) = (1 - e^{-1}) - (1 - e^{-0.5})$.
$= e^{-0.5} - e^{-1} \approx 0.6065 - 0.3679 = 0.2386$.
c) Using the memoryless property, $P(X > 8 | X > 3) = P(X > 5)$.
$P(X > 5) = 1 - P(X \le 5) = 1 - F(5) = 1 - (1 - e^{-0.1 \times 5}) = e^{-0.5} \approx 0.6065$.

**Answer 3:**
$\mu = 100$ MPa, $\sigma = 5$ MPa.
a) $P(95 \le X \le 105) = P\left(\frac{95-100}{5} \le Z \le \frac{105-100}{5}\right) = P(-1 \le Z \le 1)$.
Using the Empirical Rule, this is approximately 68%. Using $\Phi(1) - \Phi(-1) \approx 0.8413 - 0.1587 = 0.6826$.

b) $P(X > 110) = P\left(Z > \frac{110-100}{5}\right) = P(Z > 2)$.
$P(Z > 2) = 1 - P(Z \le 2) = 1 - \Phi(2) \approx 1 - 0.9772 = 0.0228$.

c) Let $p$ be the probability that a sample has a strength greater than 110 MPa, so $p = 0.0228$. We are looking for the probability that the first success occurs on the 3rd trial in a sequence of independent Bernoulli trials. This is a geometric distribution scenario. The probability is $(1-p)^{3-1} p = (1-p)^2 p$.
$(1 - 0.0228)^2 \times 0.0228 = (0.9772)^2 \times 0.0228 \approx 0.9549 \times 0.0228 \approx 0.0218$.

**Answer 4:**
(i) $f(x) \ge 0$ for all $x$. - **Yes**, this is a property of a PDF.
(ii) $\int_{-\infty}^{\infty} f(x) dx = 1$. - **Yes**, this is a property of a PDF.
(iii) $P(X=a) = f(a)$ for any specific value $a$. - **No**, for continuous random variables, the probability of any single value is zero, $P(X=a)=0$. The PDF gives density, not probability.

So, only (i) and (ii) are properties of a PDF.

**Answer 5:**
Approximately **95%**. This is directly from the Empirical Rule (68-95-99.7 rule) for normal distributions.

---

### 6. Important Points to Remember

*   **Continuous vs. Discrete:** The key difference is whether the variable can take any value in a range (continuous) or only specific values (discrete).
*   **PDF for Continuous:** $f(x) \ge 0$ and $\int_{-\infty}^{\infty} f(x) dx = 1$. Probabilities are found by integrating the PDF over an interval.
*   **CDF for Continuous:** $F(x) = P(X \le x)$. Probabilities are $P(a \le X \le b) = F(b) - F(a)$. The PDF is the derivative of the CDF.
*   **$P(X=a) = 0$ for Continuous Variables:** Always use intervals for probabilities.
*   **Mean and Variance:** Calculated using integration of $x f(x)$ and $(x-\mu)^2 f(x)$ (or $x^2 f(x)$) respectively.
*   **Normal Distribution:** Crucial in science due to the Central Limit Theorem. Use z-scores to standardize and find probabilities using tables or software.
*   **Exponential Distribution:** Characterized by the memoryless property and used for time-until-event modeling.
*   **Chi-Squared, t, and F Distributions:** Important for statistical inference and hypothesis testing, particularly in analyzing variances and comparing group means.

---
