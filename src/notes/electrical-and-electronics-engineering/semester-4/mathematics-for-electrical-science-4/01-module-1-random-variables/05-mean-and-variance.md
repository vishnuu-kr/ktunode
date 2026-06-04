---
title: "Mean and variance"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d94"
status: "completed"
scrapedAt: "2026-05-23T16:16:47.283Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Mean and Variance

---

### 1. Introduction to Random Variables and their Significance

Random variables are fundamental to understanding and modeling phenomena that involve uncertainty. In electrical science, this uncertainty can arise from noise in signals, variations in component values, or unpredictable events.

*   **What is a Random Variable?**
    A random variable is a function that assigns a real numerical value to each outcome in the sample space of a random experiment.
    *   **Notation:** Typically denoted by uppercase letters like $X$, $Y$, $Z$.
    *   **Types:**
        *   **Discrete Random Variable:** Takes on a finite or countably infinite number of values.
            *   *Example:* The number of defective components in a batch, the number of calls received by a system per hour.
        *   **Continuous Random Variable:** Takes on any value within a given range or interval.
            *   *Example:* The voltage of a signal at a specific time, the lifetime of a component.

*   **Significance in Electrical Science:**
    *   **Modeling Uncertainty:** Essential for quantifying and analyzing unpredictable aspects of electrical systems.
    *   **Performance Analysis:** Understanding the average performance (mean) and variability (variance) of system outputs.
    *   **System Design:** Making informed decisions about component tolerances, noise reduction, and reliability.
    *   **Signal Processing:** Characterizing the statistical properties of signals and noise.

---

### 2. Mean (Expected Value)

The mean, or expected value, of a random variable represents the average value of the outcomes over a large number of trials. It's a measure of the central tendency of the probability distribution.

*   **Definition:** The expected value of a random variable $X$, denoted by $E[X]$ or $\mu_X$, is the weighted average of all possible values that $X$ can take, where the weights are their corresponding probabilities.

*   **For a Discrete Random Variable $X$:**
    If $X$ can take values $x_1, x_2, x_3, \ldots$ with probabilities $P(X=x_1), P(X=x_2), P(X=x_3), \ldots$, then:
    $$E[X] = \sum_{i} x_i P(X=x_i)$$
    *   *Note:* The sum is over all possible values of $x_i$.

    **Example (Devore, 9th Ed., Chapter 3):**
    Consider a random variable $X$ representing the number of heads in two flips of a fair coin.
    *   Sample space: {HH, HT, TH, TT}
    *   Possible values of $X$: 0, 1, 2
    *   Probabilities: $P(X=0) = 1/4$ (TT), $P(X=1) = 2/4$ (HT, TH), $P(X=2) = 1/4$ (HH)
    *   $E[X] = (0 \times \frac{1}{4}) + (1 \times \frac{2}{4}) + (2 \times \frac{1}{4}) = 0 + \frac{2}{4} + \frac{2}{4} = 1$
    The average number of heads in two flips is 1.

*   **For a Continuous Random Variable $X$:**
    If $X$ has a probability density function (PDF) $f(x)$, then:
    $$E[X] = \int_{-\infty}^{\infty} x f(x) dx$$
    *   *Note:* The integral is over the entire range of possible values for $x$.

    **Example (Veerarajan, 3rd Ed., Chapter 4):**
    Let $X$ be a continuous random variable with PDF $f(x) = 2x$ for $0 \le x \le 1$, and $f(x) = 0$ otherwise.
    *   $E[X] = \int_{0}^{1} x (2x) dx = \int_{0}^{1} 2x^2 dx = \left[ \frac{2x^3}{3} \right]_{0}^{1} = \frac{2(1)^3}{3} - \frac{2(0)^3}{3} = \frac{2}{3}$

*   **Properties of Expected Value:**
    Let $X$ and $Y$ be random variables, and $a$ and $b$ be constants.
    1.  $E[a] = a$
    2.  $E[aX] = aE[X]$
    3.  $E[X+b] = E[X]+b$
    4.  $E[aX+b] = aE[X]+b$
    5.  $E[X+Y] = E[X] + E[Y]$ (Linearity of Expectation)
    6.  $E[XY] = E[X]E[Y]$ if $X$ and $Y$ are independent.

*   **Learning Outcome Alignment:** CO1, CO2 (understanding of concepts, calculation for both discrete and continuous RVs).

---

### 3. Variance and Standard Deviation

Variance measures the spread or dispersion of the values of a random variable around its mean. A higher variance indicates that the values are more spread out, while a lower variance indicates they are clustered closer to the mean. Standard deviation is the square root of the variance and is often preferred as it has the same units as the random variable.

*   **Definition of Variance:**
    The variance of a random variable $X$, denoted by $Var(X)$ or $\sigma_X^2$, is the expected value of the squared difference between $X$ and its mean $E[X]$.
    $$Var(X) = E[(X - E[X])^2]$$

*   **Computational Formula for Variance:**
    A more convenient formula for calculation is:
    $$Var(X) = E[X^2] - (E[X])^2$$
    Where $E[X^2]$ is the expected value of $X^2$.

*   **Calculating $E[X^2]$:**
    *   **For a Discrete Random Variable $X$:**
        $$E[X^2] = \sum_{i} x_i^2 P(X=x_i)$$
    *   **For a Continuous Random Variable $X$:**
        $$E[X^2] = \int_{-\infty}^{\infty} x^2 f(x) dx$$

*   **Example (Devore, 9th Ed., Chapter 3):**
    Using the coin flip example ($X$ = number of heads in two flips of a fair coin):
    *   $E[X] = 1$
    *   $E[X^2] = (0^2 \times \frac{1}{4}) + (1^2 \times \frac{2}{4}) + (2^2 \times \frac{1}{4}) = (0 \times \frac{1}{4}) + (1 \times \frac{2}{4}) + (4 \times \frac{1}{4}) = 0 + \frac{2}{4} + \frac{4}{4} = \frac{6}{4} = 1.5$
    *   $Var(X) = E[X^2] - (E[X])^2 = 1.5 - (1)^2 = 1.5 - 1 = 0.5$

*   **Example (Veerarajan, 3rd Ed., Chapter 4):**
    Using the continuous example ($f(x) = 2x$ for $0 \le x \le 1$):
    *   $E[X] = 2/3$
    *   $E[X^2] = \int_{0}^{1} x^2 (2x) dx = \int_{0}^{1} 2x^3 dx = \left[ \frac{2x^4}{4} \right]_{0}^{1} = \left[ \frac{x^4}{2} \right]_{0}^{1} = \frac{1^4}{2} - \frac{0^4}{2} = \frac{1}{2}$
    *   $Var(X) = E[X^2] - (E[X])^2 = \frac{1}{2} - (\frac{2}{3})^2 = \frac{1}{2} - \frac{4}{9} = \frac{9 - 8}{18} = \frac{1}{18}$

*   **Definition of Standard Deviation:**
    The standard deviation of $X$, denoted by $\sigma_X$, is the square root of the variance:
    $$\sigma_X = \sqrt{Var(X)} = \sqrt{E[(X - E[X])^2]}$$

    *   **Example (Continuing previous examples):**
        *   Coin flips: $\sigma_X = \sqrt{0.5} \approx 0.707$
        *   Continuous example: $\sigma_X = \sqrt{1/18} \approx 0.236$

*   **Properties of Variance:**
    Let $X$ and $Y$ be random variables, and $a$ and $b$ be constants.
    1.  $Var(a) = 0$ (The variance of a constant is zero).
    2.  $Var(aX) = a^2 Var(X)$
    3.  $Var(X+b) = Var(X)$
    4.  $Var(aX+b) = a^2 Var(X)$
    5.  $Var(X+Y) = Var(X) + Var(Y) + 2 Cov(X, Y)$ (where $Cov(X,Y)$ is the covariance)
    6.  If $X$ and $Y$ are independent, then $Cov(X, Y) = 0$, so $Var(X+Y) = Var(X) + Var(Y)$.

*   **Learning Outcome Alignment:** CO1, CO2 (understanding of concepts, calculation for both discrete and continuous RVs).

---

### 4. Mean and Variance of Common Distributions (Brief Overview)

Understanding the mean and variance of common probability distributions is crucial for applying them to real-world electrical engineering problems.

*   **Binomial Distribution:** $X \sim B(n, p)$
    *   Represents the number of successes in $n$ independent Bernoulli trials, each with probability of success $p$.
    *   $E[X] = np$
    *   $Var(X) = np(1-p)$

*   **Poisson Distribution:** $X \sim Poisson(\lambda)$
    *   Represents the number of events occurring in a fixed interval of time or space, given a constant average rate $\lambda$.
    *   $E[X] = \lambda$
    *   $Var(X) = \lambda$

*   **Uniform Distribution (Continuous):** $X \sim U(a, b)$
    *   Takes values uniformly over the interval $[a, b]$.
    *   $E[X] = \frac{a+b}{2}$
    *   $Var(X) = \frac{(b-a)^2}{12}$

*   **Exponential Distribution (Continuous):** $X \sim Exp(\lambda)$
    *   Often used to model the time between events in a Poisson process (e.g., component failure times).
    *   PDF: $f(x) = \lambda e^{-\lambda x}$ for $x \ge 0$.
    *   $E[X] = \frac{1}{\lambda}$
    *   $Var(X) = \frac{1}{\lambda^2}$

*   **Normal Distribution (Continuous):** $X \sim N(\mu, \sigma^2)$
    *   Bell-shaped curve, central to statistics.
    *   PDF: $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$
    *   $E[X] = \mu$
    *   $Var(X) = \sigma^2$

*   **Learning Outcome Alignment:** CO1, CO2 (application of concepts to standard models).

---

### 5. Properties of Mean and Variance in Electrical Science

The concepts of mean and variance are applied extensively in electrical engineering.

*   **Average Power in Signals:** The mean of a signal's square ($E[S(t)^2]$) can represent the average power of the signal.
    *   For a deterministic signal $s(t)$ over a long time $T$: $P = \frac{1}{T} \int_0^T s(t)^2 dt$. If $s(t)$ is random, $E[s(t)^2]$ is the mean power.
*   **Noise Characterization:** The mean of noise can indicate a DC offset, and the variance (often called noise power) indicates the intensity of the noise.
    *   A zero-mean, low-variance noise is generally desirable.
*   **System Output:** If the input to a linear system is a random variable $X$, and the output is $Y = aX + b$, then:
    *   $E[Y] = aE[X] + b$
    *   $Var(Y) = a^2 Var(X)$
    This shows how the mean and variance are transformed by a linear system.
*   **Reliability Engineering:** Mean Time Between Failures (MTBF) is related to the mean of the lifetime random variable. Variance indicates the reliability spread.
*   **Quality Control:** Mean and standard deviation are used to define control limits for manufacturing processes.

*   **Learning Outcome Alignment:** CO1, CO2, CO4 (applying concepts to random phenomena in electrical science).

---

### 6. Practice Questions

**Question 1 (Discrete RV):**
A random variable $X$ has the following probability mass function (PMF):
$P(X=0) = 0.2$
$P(X=1) = 0.5$
$P(X=2) = 0.3$
Calculate the mean ($E[X]$) and variance ($Var(X)$) of $X$.

**Question 2 (Continuous RV):**
A continuous random variable $Y$ has the probability density function (PDF):
$f(y) = \begin{cases} \frac{y}{2} & 0 \le y \le 2 \\ 0 & \text{otherwise} \end{cases}$
Calculate the mean ($E[Y]$) and variance ($Var(Y)$) of $Y$.

**Question 3 (Properties):**
Let $Z = 3X + 5$. Given that $E[X] = 2$ and $Var(X) = 4$, find $E[Z]$ and $Var(Z)$.

**Question 4 (Electrical Application):**
Consider a voltage signal $V(t)$ that is a random process. Suppose for a specific time instant $t_0$, the voltage $V(t_0)$ has a mean of 5 Volts and a variance of 0.5 Volt$^2$. If this voltage is amplified by a factor of 10, what are the new mean and variance of the amplified voltage?

---

### 7. Answers to Practice Questions

**Answer 1:**
*   **Mean ($E[X]$):**
    $E[X] = (0 \times 0.2) + (1 \times 0.5) + (2 \times 0.3)$
    $E[X] = 0 + 0.5 + 0.6 = 1.1$
*   **Variance ($Var(X)$):**
    First, calculate $E[X^2]$:
    $E[X^2] = (0^2 \times 0.2) + (1^2 \times 0.5) + (2^2 \times 0.3)$
    $E[X^2] = (0 \times 0.2) + (1 \times 0.5) + (4 \times 0.3)$
    $E[X^2] = 0 + 0.5 + 1.2 = 1.7$
    Now, calculate $Var(X)$:
    $Var(X) = E[X^2] - (E[X])^2$
    $Var(X) = 1.7 - (1.1)^2$
    $Var(X) = 1.7 - 1.21 = 0.49$

**Answer 2:**
*   **Mean ($E[Y]$):**
    $E[Y] = \int_{-\infty}^{\infty} y f(y) dy = \int_{0}^{2} y \left(\frac{y}{2}\right) dy$
    $E[Y] = \int_{0}^{2} \frac{y^2}{2} dy = \left[ \frac{y^3}{6} \right]_{0}^{2}$
    $E[Y] = \frac{2^3}{6} - \frac{0^3}{6} = \frac{8}{6} = \frac{4}{3}$
*   **Variance ($Var(Y)$):**
    First, calculate $E[Y^2]$:
    $E[Y^2] = \int_{-\infty}^{\infty} y^2 f(y) dy = \int_{0}^{2} y^2 \left(\frac{y}{2}\right) dy$
    $E[Y^2] = \int_{0}^{2} \frac{y^3}{2} dy = \left[ \frac{y^4}{8} \right]_{0}^{2}$
    $E[Y^2] = \frac{2^4}{8} - \frac{0^4}{8} = \frac{16}{8} = 2$
    Now, calculate $Var(Y)$:
    $Var(Y) = E[Y^2] - (E[Y])^2$
    $Var(Y) = 2 - \left(\frac{4}{3}\right)^2$
    $Var(Y) = 2 - \frac{16}{9} = \frac{18 - 16}{9} = \frac{2}{9}$

**Answer 3:**
Given $Z = 3X + 5$.
*   **Mean ($E[Z]$):**
    Using the property $E[aX+b] = aE[X]+b$:
    $E[Z] = 3E[X] + 5$
    $E[Z] = 3(2) + 5 = 6 + 5 = 11$
*   **Variance ($Var(Z)$):**
    Using the property $Var(aX+b) = a^2 Var(X)$:
    $Var(Z) = 3^2 Var(X)$
    $Var(Z) = 9 \times 4 = 36$

**Answer 4:**
Let $V$ be the voltage at time $t_0$. We are given $E[V] = 5$ Volts and $Var(V) = 0.5$ Volt$^2$.
The amplified voltage is $V_{amp} = 10V$.
*   **New Mean ($E[V_{amp}]$):**
    $E[V_{amp}] = E[10V] = 10E[V]$
    $E[V_{amp}] = 10 \times 5 = 50$ Volts
*   **New Variance ($Var(V_{amp})$):**
    $Var(V_{amp}) = Var(10V) = 10^2 Var(V)$
    $Var(V_{amp}) = 100 \times 0.5 = 50$ Volt$^2$

---

### 8. Important Points to Remember

*   **Mean (Expected Value):** The average outcome of a random variable. It's a measure of central tendency.
*   **Variance:** A measure of the spread or dispersion of a random variable around its mean. Higher variance means more spread.
*   **Standard Deviation:** The square root of variance, providing a measure of spread in the same units as the random variable.
*   **Computational Formula for Variance:** $Var(X) = E[X^2] - (E[X])^2$ is often easier for calculations.
*   **Linearity of Expectation:** $E[aX + b] = aE[X] + b$ and $E[X+Y] = E[X] + E[Y]$ are powerful tools.
*   **Variance Transformation:** $Var(aX + b) = a^2 Var(X)$. Note the squaring of the constant multiplier.
*   **Independence:** If $X$ and $Y$ are independent, $E[XY] = E[X]E[Y]$ and $Var(X+Y) = Var(X) + Var(Y)$.
*   **Applications:** Mean and variance are critical for characterizing signals, noise, system performance, and reliability in electrical science.

---
