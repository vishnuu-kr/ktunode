---
title: "Random variables"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462eb1"
status: "completed"
scrapedAt: "2026-05-20T17:54:30.614Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Random Variables

This module introduces the fundamental concept of random variables, which are crucial for understanding and modeling uncertainty in physical science phenomena. We will explore both discrete and continuous random variables, their properties, and common probability distributions.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Define and distinguish between discrete and continuous random variables.** (Related to CO1 & CO2)
*   **Understand the concept of a probability mass function (PMF) for discrete random variables.** (Related to CO1)
*   **Understand the concept of a probability density function (PDF) for continuous random variables.** (Related to CO2)
*   **Calculate and interpret the cumulative distribution function (CDF) for both discrete and continuous random variables.** (Related to CO1 & CO2)
*   **Calculate and interpret expected value (mean) and variance for both discrete and continuous random variables.** (Related to CO1 & CO2)
*   **Identify and understand common probability distributions for discrete random variables (e.g., Bernoulli, Binomial, Poisson).** (Related to CO1)
*   **Identify and understand common probability distributions for continuous random variables (e.g., Uniform, Exponential, Normal).** (Related to CO2)
*   **Understand the concept of joint probability distributions for multiple random variables.** (Related to CO1 & CO2)

---

### Key Concepts and Definitions:

#### 1. What is a Random Variable?

A **random variable** is a function that assigns a numerical value to each outcome of a random experiment. It essentially translates the outcomes of an experiment into numbers, allowing us to apply mathematical tools for analysis.

*   **Notation:** Random variables are typically denoted by uppercase letters, such as $X$, $Y$, $Z$.
*   **Reference:** Devore (2016) emphasizes that a random variable is a *real-valued function* defined on the sample space of a random experiment.

**Example:**
Consider the experiment of flipping a coin twice. The sample space is $\{\text{HH, HT, TH, TT}\}$.
If $X$ is the random variable representing the number of heads, then:
*   $X(\text{HH}) = 2$
*   $X(\text{HT}) = 1$
*   $X(\text{TH}) = 1$
*   $X(\text{TT}) = 0$
So, the possible values of $X$ are 0, 1, and 2.

#### 2. Types of Random Variables

Random variables are broadly classified into two types:

**a) Discrete Random Variables:**
A random variable $X$ is **discrete** if the set of its possible values is finite or countably infinite. This means we can list all the possible values, although the list might be endless.

*   **Characteristics:**
    *   Possible values are often integers or can be put into a one-to-one correspondence with the positive integers.
    *   Typically arise from counting processes.

*   **Example:** The number of radioactive decays in a given time interval, the number of defects in a manufactured product, the number of heads in a series of coin flips.

**b) Continuous Random Variables:**
A random variable $X$ is **continuous** if its possible values form an interval or a union of intervals on the real number line. Between any two possible values, there are infinitely many other possible values.

*   **Characteristics:**
    *   Possible values are measurements.
    *   The probability of the random variable taking on any *specific* value is zero. We talk about probabilities over intervals.

*   **Example:** The height of a person, the temperature of a substance, the time it takes for a particle to travel a certain distance.

#### 3. Probability Distributions

A probability distribution describes how probabilities are distributed among the possible values of a random variable.

**a) For Discrete Random Variables: Probability Mass Function (PMF)**

The **probability mass function (PMF)** of a discrete random variable $X$, denoted by $P(X=x)$ or $p_X(x)$, gives the probability that $X$ takes on a specific value $x$.

*   **Properties of a PMF:**
    1.  $0 \le P(X=x) \le 1$ for all possible values $x$.
    2.  $\sum_{x} P(X=x) = 1$, where the sum is over all possible values of $X$.

*   **Reference:** Devore (2016) covers PMFs extensively when introducing discrete random variables. Papoulis & Pillai (2002) also provide a rigorous foundation for PMFs.

**Example (Continuing the coin flip example):**
For $X$ = number of heads in two coin flips:
*   $P(X=0) = P(\text{TT}) = 1/4$
*   $P(X=1) = P(\text{HT or TH}) = P(\text{HT}) + P(\text{TH}) = 1/4 + 1/4 = 1/2$
*   $P(X=2) = P(\text{HH}) = 1/4$

Check: $P(X=0) + P(X=1) + P(X=2) = 1/4 + 1/2 + 1/4 = 1$.

**b) For Continuous Random Variables: Probability Density Function (PDF)**

The **probability density function (PDF)** of a continuous random variable $X$, denoted by $f_X(x)$ or $f(x)$, describes the relative likelihood for $X$ to take on a given value. The probability of $X$ falling within a certain interval $[a, b]$ is given by the integral of the PDF over that interval.

*   **Properties of a PDF:**
    1.  $f(x) \ge 0$ for all $x$.
    2.  $\int_{-\infty}^{\infty} f(x) dx = 1$.

*   **Important Note:** For a continuous random variable, $P(X=x) = 0$ for any specific value $x$. Probabilities are associated with intervals.
    $P(a \le X \le b) = \int_{a}^{b} f(x) dx$

*   **Reference:** Devore (2016) and Ross (2020) provide clear explanations of PDFs and their integration.

**Example:**
Consider a random variable $X$ representing the time (in hours) a certain electronic component operates before failure, with a PDF given by:
$f(x) = \begin{cases} 0.5e^{-0.5x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases}$

To find the probability that the component operates for at least 2 hours ($P(X \ge 2)$):
$P(X \ge 2) = \int_{2}^{\infty} 0.5e^{-0.5x} dx = [-e^{-0.5x}]_{2}^{\infty} = 0 - (-e^{-0.5 \times 2}) = e^{-1} \approx 0.368$

#### 4. Cumulative Distribution Function (CDF)

The **cumulative distribution function (CDF)** of any random variable $X$, denoted by $F_X(x)$ or $F(x)$, gives the probability that $X$ takes on a value less than or equal to a specific value $x$.

*   **Definition:** $F(x) = P(X \le x)$

*   **For Discrete Random Variables:** $F(x) = \sum_{t \le x} P(X=t)$
*   **For Continuous Random Variables:** $F(x) = \int_{-\infty}^{x} f(t) dt$

*   **Properties of a CDF:**
    1.  $0 \le F(x) \le 1$ for all $x$.
    2.  $F(x)$ is non-decreasing: If $x_1 < x_2$, then $F(x_1) \le F(x_2)$.
    3.  $\lim_{x \to -\infty} F(x) = 0$
    4.  $\lim_{x \to \infty} F(x) = 1$

*   **Reference:** All textbooks provide detailed coverage of CDFs. Devore (2016) highlights its importance as a unified way to describe probability distributions.

**Example (Discrete - Coin Flip):**
For $X$ = number of heads in two coin flips:
*   $F(0) = P(X \le 0) = P(X=0) = 1/4$
*   $F(1) = P(X \le 1) = P(X=0) + P(X=1) = 1/4 + 1/2 = 3/4$
*   $F(2) = P(X \le 2) = P(X=0) + P(X=1) + P(X=2) = 1/4 + 1/2 + 1/4 = 1$
For any $x < 0$, $F(x) = 0$. For any $x \ge 2$, $F(x) = 1$.

**Example (Continuous - Component Failure Time):**
For $f(x) = 0.5e^{-0.5x}$ for $x \ge 0$:
$F(x) = \int_{0}^{x} 0.5e^{-0.5t} dt = [-e^{-0.5t}]_{0}^{x} = -e^{-0.5x} - (-e^0) = 1 - e^{-0.5x}$ for $x \ge 0$.
So, $F(x) = \begin{cases} 0 & \text{if } x < 0 \\ 1 - e^{-0.5x} & \text{if } x \ge 0 \end{cases}$

To find $P(X \le 2)$: $F(2) = 1 - e^{-0.5 \times 2} = 1 - e^{-1} \approx 0.632$.
Note that $P(X \ge 2) = 1 - P(X < 2) = 1 - P(X \le 2)$ (since $P(X=2)=0$ for continuous RV).
$P(X \ge 2) = 1 - F(2) = 1 - (1 - e^{-1}) = e^{-1}$, which matches our previous calculation.

#### 5. Expected Value (Mean)

The **expected value** (or mean) of a random variable is the weighted average of its possible values, where the weights are the probabilities. It represents the long-run average value of the random variable.

*   **For Discrete Random Variables:**
    $E[X] = \mu_X = \sum_{x} x \cdot P(X=x)$

*   **For Continuous Random Variables:**
    $E[X] = \mu_X = \int_{-\infty}^{\infty} x \cdot f(x) dx$

*   **Reference:** Devore (2016) and Ross (2020) dedicate significant sections to expected value, illustrating its use in various physical science contexts.

**Example (Discrete - Coin Flip):**
$E[X] = (0 \cdot P(X=0)) + (1 \cdot P(X=1)) + (2 \cdot P(X=2))$
$E[X] = (0 \cdot 1/4) + (1 \cdot 1/2) + (2 \cdot 1/4) = 0 + 1/2 + 1/2 = 1$.
On average, we expect to get 1 head in two coin flips.

**Example (Continuous - Component Failure Time):**
$E[X] = \int_{0}^{\infty} x \cdot (0.5e^{-0.5x}) dx$
This integral can be solved using integration by parts, or by recognizing it as the mean of an exponential distribution. For an exponential distribution with parameter $\lambda$, the mean is $1/\lambda$. Here, $\lambda = 0.5$, so $E[X] = 1/0.5 = 2$.
The average operating time before failure is 2 hours.

#### 6. Variance and Standard Deviation

The **variance** of a random variable measures the spread or dispersion of its values around the mean. The **standard deviation** is the square root of the variance and is often easier to interpret as it is in the same units as the random variable.

*   **Variance ($Var(X)$ or $\sigma^2_X$):**
    $Var(X) = E[(X - \mu_X)^2]$

    *   **For Discrete Random Variables:** $Var(X) = \sum_{x} (x - \mu_X)^2 \cdot P(X=x)$
    *   **For Continuous Random Variables:** $Var(X) = \int_{-\infty}^{\infty} (x - \mu_X)^2 \cdot f(x) dx$

    An alternative and often more convenient formula for variance is:
    $Var(X) = E[X^2] - (E[X])^2$
    where $E[X^2] = \sum x^2 P(X=x)$ (discrete) or $E[X^2] = \int x^2 f(x) dx$ (continuous).

*   **Standard Deviation ($\sigma_X$):**
    $\sigma_X = \sqrt{Var(X)}$

*   **Reference:** Devore (2016) and Ross (2020) provide practical methods for calculating variance and standard deviation for various distributions.

**Example (Discrete - Coin Flip):**
First, calculate $E[X^2]$:
$E[X^2] = (0^2 \cdot P(X=0)) + (1^2 \cdot P(X=1)) + (2^2 \cdot P(X=2))$
$E[X^2] = (0 \cdot 1/4) + (1 \cdot 1/2) + (4 \cdot 1/4) = 0 + 1/2 + 1 = 3/2$

$Var(X) = E[X^2] - (E[X])^2 = 3/2 - (1)^2 = 3/2 - 1 = 1/2$.
$\sigma_X = \sqrt{1/2} = 1/\sqrt{2} \approx 0.707$.

**Example (Continuous - Component Failure Time):**
For an exponential distribution with parameter $\lambda$, the variance is $1/\lambda^2$.
Here, $\lambda = 0.5$, so $Var(X) = 1/(0.5)^2 = 1/0.25 = 4$.
$\sigma_X = \sqrt{4} = 2$.
The standard deviation of the operating time is 2 hours.

---

### Common Probability Distributions

#### 7. Discrete Probability Distributions

**a) Bernoulli Distribution**
A Bernoulli random variable $X$ takes on two values, typically 0 and 1, with probabilities $p$ and $1-p$, respectively. It models a single trial with two possible outcomes (success or failure).

*   **PMF:** $P(X=1) = p$, $P(X=0) = 1-p$.
*   **Expected Value:** $E[X] = p$
*   **Variance:** $Var(X) = p(1-p)$
*   **Reference:** Devore (2016) introduces this as the simplest discrete distribution.

**Example:** Flipping a fair coin once, where $X=1$ for heads and $X=0$ for tails. Here $p=0.5$.
$E[X] = 0.5$, $Var(X) = 0.5(1-0.5) = 0.25$.

**b) Binomial Distribution**
A Binomial random variable $X$ counts the number of successes in $n$ independent Bernoulli trials, each with the same probability of success $p$.

*   **Parameters:** $n$ (number of trials), $p$ (probability of success).
*   **Possible Values:** $x = 0, 1, 2, \dots, n$.
*   **PMF:** $P(X=x) = \binom{n}{x} p^x (1-p)^{n-x}$, for $x = 0, 1, \dots, n$.
    *   $\binom{n}{x} = \frac{n!}{x!(n-x)!}$ is the binomial coefficient.
*   **Expected Value:** $E[X] = np$
*   **Variance:** $Var(X) = np(1-p)$
*   **Reference:** Devore (2016) and Ross (2020) provide detailed examples and applications, such as quality control or analyzing series of events.

**Example:** If a manufacturing process produces items with a 2% defect rate ($p=0.02$), what is the probability of finding exactly 3 defects in a batch of 100 items ($n=100$)?
$P(X=3) = \binom{100}{3} (0.02)^3 (0.98)^{97}$.
$E[X] = 100 \times 0.02 = 2$ (on average, 2 defects per batch).
$Var(X) = 100 \times 0.02 \times 0.98 = 1.96$.

**c) Poisson Distribution**
A Poisson random variable $X$ counts the number of events occurring in a fixed interval of time or space, given that these events occur with a known constant mean rate and independently of the time since the last event.

*   **Parameter:** $\lambda$ (average number of events in the interval).
*   **Possible Values:** $x = 0, 1, 2, \dots$ (countably infinite).
*   **PMF:** $P(X=x) = \frac{e^{-\lambda} \lambda^x}{x!}$, for $x = 0, 1, 2, \dots$.
*   **Expected Value:** $E[X] = \lambda$
*   **Variance:** $Var(X) = \lambda$
*   **Reference:** Devore (2016) highlights its use in modeling rare events. Poisson distribution is a good approximation for the Binomial distribution when $n$ is large and $p$ is small.

**Example:** The number of phone calls received by a call center per hour follows a Poisson distribution with a mean of 5 calls per hour ($\lambda=5$). What is the probability of receiving exactly 3 calls in an hour?
$P(X=3) = \frac{e^{-5} 5^3}{3!} = \frac{e^{-5} \cdot 125}{6} \approx 0.140$.
$E[X] = 5$, $Var(X) = 5$.

#### 8. Continuous Probability Distributions

**a) Uniform Distribution**
A Uniform random variable $X$ is equally likely to take any value within a given interval $[a, b]$.

*   **Parameters:** $a$ (lower bound), $b$ (upper bound).
*   **PDF:** $f(x) = \begin{cases} \frac{1}{b-a} & \text{if } a \le x \le b \\ 0 & \text{otherwise} \end{cases}$
*   **Expected Value:** $E[X] = \frac{a+b}{2}$
*   **Variance:** $Var(X) = \frac{(b-a)^2}{12}$
*   **Reference:** Devore (2016) uses this to model situations where all outcomes are equally likely over a range.

**Example:** A bus arrives at a station every 10 minutes. If you arrive at a random time, the waiting time $X$ (in minutes) until the next bus is uniformly distributed between 0 and 10.
$a=0, b=10$.
$f(x) = \frac{1}{10-0} = \frac{1}{10}$ for $0 \le x \le 10$.
$E[X] = \frac{0+10}{2} = 5$ minutes.
$Var(X) = \frac{(10-0)^2}{12} = \frac{100}{12} = \frac{25}{3} \approx 8.33$.
Probability of waiting between 2 and 5 minutes: $P(2 \le X \le 5) = \int_{2}^{5} \frac{1}{10} dx = [\frac{x}{10}]_{2}^{5} = \frac{5}{10} - \frac{2}{10} = \frac{3}{10} = 0.3$.

**b) Exponential Distribution**
An Exponential random variable $X$ models the time until the first event in a Poisson process or the time between events. It is memoryless, meaning the past history does not affect the future probability of an event.

*   **Parameter:** $\lambda$ (rate parameter, often related to the mean of a Poisson process). The mean of the Exponential distribution is $1/\lambda$.
*   **PDF:** $f(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{otherwise} \end{cases}$
*   **Expected Value:** $E[X] = \frac{1}{\lambda}$
*   **Variance:** $Var(X) = \frac{1}{\lambda^2}$
*   **CDF:** $F(x) = 1 - e^{-\lambda x}$ for $x \ge 0$.
*   **Reference:** Devore (2016) and Ross (2020) discuss its applications in reliability, queuing theory, and radioactive decay.

**Example:** The lifetime of a certain type of electronic component follows an exponential distribution with a mean lifetime of 1000 hours. What is the probability that a component will last at least 1500 hours?
Here, $E[X] = 1000$, so $1/\lambda = 1000 \implies \lambda = 1/1000$.
The PDF is $f(x) = \frac{1}{1000} e^{-x/1000}$ for $x \ge 0$.
$P(X \ge 1500) = \int_{1500}^{\infty} \frac{1}{1000} e^{-x/1000} dx = [-e^{-x/1000}]_{1500}^{\infty} = 0 - (-e^{-1500/1000}) = e^{-1.5} \approx 0.223$.

**c) Normal (Gaussian) Distribution**
The Normal distribution is arguably the most important distribution in statistics and physical sciences. It is characterized by its bell-shaped curve and is often used to model phenomena that are the sum of many small, independent random effects.

*   **Parameters:** $\mu$ (mean), $\sigma^2$ (variance), or $\sigma$ (standard deviation).
*   **PDF:** $f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$, for $-\infty < x < \infty$.
*   **Expected Value:** $E[X] = \mu$
*   **Variance:** $Var(X) = \sigma^2$
*   **Standard Deviation:** $\sigma_X = \sigma$
*   **Reference:** Devore (2016), Ross (2020), and Papoulis & Pillai (2002) provide comprehensive coverage. The Central Limit Theorem (CLT) states that the sum of a large number of independent random variables (even if not normally distributed) will be approximately normally distributed, making the Normal distribution ubiquitous.

**Standard Normal Distribution:** A special case where $\mu = 0$ and $\sigma^2 = 1$. The random variable is usually denoted by $Z$.
*   **PDF:** $f(z) = \frac{1}{\sqrt{2\pi}} e^{-z^2/2}$
*   **CDF:** $\Phi(z) = P(Z \le z)$. Values are typically found using standard normal tables or statistical software.

**Example:** The height of adult males in a certain population is normally distributed with a mean of 175 cm and a standard deviation of 7 cm. What is the probability that a randomly selected male is between 170 cm and 180 cm tall?
Here, $X \sim N(\mu=175, \sigma^2=7^2)$.
We need to find $P(170 \le X \le 180)$.
First, convert to z-scores:
$z_1 = \frac{170 - 175}{7} = \frac{-5}{7} \approx -0.714$
$z_2 = \frac{180 - 175}{7} = \frac{5}{7} \approx 0.714$

$P(170 \le X \le 180) = P(-0.714 \le Z \le 0.714) = \Phi(0.714) - \Phi(-0.714)$.
Using a z-table or calculator, $\Phi(0.714) \approx 0.7625$ and $\Phi(-0.714) \approx 0.2375$.
So, $P(170 \le X \le 180) \approx 0.7625 - 0.2375 = 0.525$.

---

#### 9. Joint Probability Distributions

When we consider two or more random variables simultaneously, we use **joint probability distributions**. This allows us to understand the relationship between these variables.

*   **Joint PMF (for discrete random variables $X$ and $Y$):**
    $P(X=x, Y=y)$ = Probability that $X$ takes value $x$ AND $Y$ takes value $y$.

*   **Joint PDF (for continuous random variables $X$ and $Y$):**
    $f(x, y)$ = Probability density at $(x, y)$.
    $P(a \le X \le b, c \le Y \le d) = \int_{a}^{b} \int_{c}^{d} f(x, y) dy dx$.

*   **Marginal Distributions:**
    *   For discrete $X, Y$: $P(X=x) = \sum_{y} P(X=x, Y=y)$.
    *   For continuous $X, Y$: $f_X(x) = \int_{-\infty}^{\infty} f(x, y) dy$.

*   **Independence:**
    *   Discrete: $X$ and $Y$ are independent if $P(X=x, Y=y) = P(X=x) P(Y=y)$ for all $x, y$.
    *   Continuous: $X$ and $Y$ are independent if $f(x, y) = f_X(x) f_Y(y)$ for all $x, y$.

*   **Reference:** Devore (2016) and Ross (2020) provide thorough coverage of joint and marginal distributions, including concepts like covariance and correlation.

**Example:** Consider two random variables $X$ and $Y$ representing the position and momentum of a particle. Their joint behavior is described by a joint distribution.

---

### Important Points to Remember:

*   **Random variables are numerical representations of random experiment outcomes.**
*   **Discrete RVs have countable values; Continuous RVs have values over intervals.**
*   **PMF is for discrete, PDF is for continuous. Crucially, $P(X=x)=0$ for continuous RVs.**
*   **CDF is universally applicable, $F(x) = P(X \le x)$.**
*   **Expected value is the average outcome; Variance measures spread.**
*   **Many physical phenomena can be modeled using standard probability distributions like Binomial, Poisson, Uniform, Exponential, and Normal.**
*   **The Normal distribution is central due to the Central Limit Theorem.**
*   **Joint distributions are essential for analyzing relationships between multiple random variables.**

---

### Practice Questions:

1.  **Discrete vs. Continuous:** For each of the following, state whether the random variable is discrete or continuous:
    a) The number of heads when flipping a coin 10 times.
    b) The exact time it takes for a chemical reaction to complete.
    c) The amount of rainfall in a city in a day.
    d) The number of patients admitted to a hospital per hour.

2.  **Binomial Distribution:** A biased coin has a probability of landing heads equal to 0.7. If the coin is flipped 5 times, what is the probability of getting exactly 3 heads?
    *   **Answer:** $P(X=3) = \binom{5}{3} (0.7)^3 (0.3)^2 = 10 \times 0.343 \times 0.09 = 0.3087$.

3.  **Poisson Distribution:** The average number of customers arriving at a checkout counter per minute is 3. Assuming the arrivals follow a Poisson process, what is the probability that exactly 5 customers arrive in a given minute?
    *   **Answer:** $P(X=5) = \frac{e^{-3} 3^5}{5!} = \frac{e^{-3} \cdot 243}{120} \approx 0.1008$.

4.  **Exponential Distribution:** The time between successive arrivals of photons at a detector follows an exponential distribution with a mean of 5 seconds.
    a) What is the parameter $\lambda$?
    b) What is the probability that the time between arrivals is less than 3 seconds?
    c) What is the probability that the time between arrivals is greater than 7 seconds?
    *   **Answers:**
        a) $\lambda = 1/5 = 0.2$
        b) $P(X < 3) = F(3) = 1 - e^{-0.2 \times 3} = 1 - e^{-0.6} \approx 0.4512$.
        c) $P(X > 7) = 1 - P(X \le 7) = 1 - F(7) = 1 - (1 - e^{-0.2 \times 7}) = e^{-1.4} \approx 0.2466$.

5.  **Normal Distribution:** The breaking strength of a particular type of cable is normally distributed with a mean of 1000 kg and a standard deviation of 50 kg. What is the probability that a randomly selected cable will break at a strength less than 900 kg?
    *   **Answer:**
        $X \sim N(\mu=1000, \sigma=50)$
        $z = \frac{900 - 1000}{50} = \frac{-100}{50} = -2.0$
        $P(X < 900) = P(Z < -2.0) = \Phi(-2.0) \approx 0.0228$.

6.  **Expected Value and Variance:** For a discrete random variable $X$ with the following PMF:
    $P(X=0) = 0.1$
    $P(X=1) = 0.4$
    $P(X=2) = 0.3$
    $P(X=3) = 0.2$
    Calculate $E[X]$ and $Var(X)$.
    *   **Answers:**
        $E[X] = (0 \times 0.1) + (1 \times 0.4) + (2 \times 0.3) + (3 \times 0.2) = 0 + 0.4 + 0.6 + 0.6 = 1.6$.
        $E[X^2] = (0^2 \times 0.1) + (1^2 \times 0.4) + (2^2 \times 0.3) + (3^2 \times 0.2) = 0 + 0.4 + (4 \times 0.3) + (9 \times 0.2) = 0.4 + 1.2 + 1.8 = 3.4$.
        $Var(X) = E[X^2] - (E[X])^2 = 3.4 - (1.6)^2 = 3.4 - 2.56 = 0.84$.

---
This concludes the introduction to Random Variables. The subsequent modules will build upon these foundational concepts by introducing sampling distributions, estimation, and hypothesis testing, all of which are critical for data analysis in physical sciences.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
