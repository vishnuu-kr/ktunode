---
title: "Random variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d90"
status: "completed"
scrapedAt: "2026-05-23T16:16:44.544Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4: Module 1: Random Variables - Study Notes

This module introduces the fundamental concept of random variables, a cornerstone for understanding probabilistic phenomena in electrical science. We will explore both discrete and continuous random variables, their properties, and common probability distributions.

---

## Learning Outcomes:

By the end of this module, you will be able to:

*   **Define and differentiate between discrete and continuous random variables.**
*   **Understand and calculate the probability mass function (PMF) for discrete random variables.**
*   **Understand and calculate the probability density function (PDF) and cumulative distribution function (CDF) for continuous random variables.**
*   **Calculate and interpret the expected value (mean) and variance of random variables.**
*   **Identify and apply common probability distributions (e.g., Binomial, Poisson, Exponential, Normal).**
*   **Understand the concept of joint probability distributions for multiple random variables.**

---

## 1. Introduction to Random Variables

### 1.1 What is a Random Variable?

*   **Definition:** A random variable is a function that assigns a real number to each outcome in the sample space of a random experiment. It essentially quantifies the outcome of a random event.
*   **Notation:** Random variables are typically denoted by uppercase letters (e.g., X, Y, Z). The specific value a random variable takes is denoted by the corresponding lowercase letter (e.g., x, y, z).

### 1.2 Types of Random Variables

We broadly classify random variables into two categories based on the nature of the values they can take:

#### 1.2.1 Discrete Random Variables

*   **Definition:** A discrete random variable is a random variable that can only take a finite number of values or a countably infinite number of values. The values are typically integers.
    *   **Example (Finite):** The number of heads in 3 coin flips (can be 0, 1, 2, or 3).
    *   **Example (Countably Infinite):** The number of attempts needed to get the first success in a series of Bernoulli trials.
*   **Key Concept:** The possible values of a discrete random variable are separated by gaps.

#### 1.2.2 Continuous Random Variables

*   **Definition:** A continuous random variable is a random variable that can take any value within a given range or interval. The values are real numbers and are not restricted to a discrete set.
    *   **Example:** The voltage of a signal at a specific time, the time it takes for a component to fail, the temperature of a resistor.
*   **Key Concept:** The possible values of a continuous random variable form a continuum.

---

## 2. Probability Distributions for Discrete Random Variables

### 2.1 Probability Mass Function (PMF)

*   **Definition:** For a discrete random variable $X$, the probability mass function (PMF), denoted by $P(X=x)$ or $p_X(x)$, gives the probability that $X$ takes on a specific value $x$.
*   **Properties of a PMF:**
    1.  $0 \le p_X(x) \le 1$ for all possible values $x$.
    2.  $\sum_{x} p_X(x) = 1$, where the summation is over all possible values of $X$.

*   **Example (Devore, 9th ed., Chapter 3):** Consider a single Bernoulli trial where a component is either defective or not. Let $X=1$ if defective, $X=0$ if not defective. If the probability of being defective is $p$, then the PMF is:
    *   $p_X(1) = p$
    *   $p_X(0) = 1-p$
    *   $p_X(x) = 0$ for any other value of $x$.

### 2.2 Expected Value (Mean) of a Discrete Random Variable

*   **Definition:** The expected value (or mean) of a discrete random variable $X$, denoted by $E[X]$ or $\mu_X$, is the weighted average of its possible values, where the weights are the probabilities.
*   **Formula:** $E[X] = \sum_{x} x \cdot p_X(x)$

*   **Example (Devore, 9th ed., Chapter 3):** For the Bernoulli trial above, $E[X] = 0 \cdot (1-p) + 1 \cdot p = p$. This makes intuitive sense: the average outcome is the probability of success.

### 2.3 Variance and Standard Deviation of a Discrete Random Variable

*   **Definition of Variance:** The variance of a discrete random variable $X$, denoted by $Var(X)$ or $\sigma^2_X$, measures the spread or dispersion of the random variable around its mean. It is the expected value of the squared difference from the mean.
*   **Formula:** $Var(X) = E[(X - \mu_X)^2] = \sum_{x} (x - \mu_X)^2 \cdot p_X(x)$
*   **Alternative Formula for Variance:** $Var(X) = E[X^2] - (E[X])^2$, where $E[X^2] = \sum_{x} x^2 \cdot p_X(x)$. This is often easier to compute.
*   **Definition of Standard Deviation:** The standard deviation of a discrete random variable $X$, denoted by $\sigma_X$, is the square root of the variance. It is also a measure of spread but is in the same units as the random variable.
*   **Formula:** $\sigma_X = \sqrt{Var(X)}$

*   **Example (Devore, 9th ed., Chapter 3):** For the Bernoulli trial, $Var(X) = E[X^2] - (E[X])^2$.
    *   $E[X^2] = 0^2 \cdot (1-p) + 1^2 \cdot p = p$.
    *   $Var(X) = p - p^2 = p(1-p)$.
    *   $\sigma_X = \sqrt{p(1-p)}$.

---

## 3. Probability Distributions for Continuous Random Variables

### 3.1 Probability Density Function (PDF)

*   **Definition:** For a continuous random variable $X$, the probability density function (PDF), denoted by $f_X(x)$ or $f(x)$, describes the relative likelihood for the random variable to take on a given value.
*   **Key Difference from PMF:** For a continuous random variable, the probability of $X$ taking on any *specific* value is zero, i.e., $P(X=x) = 0$. Instead, we talk about the probability of $X$ falling within an interval.
*   **Properties of a PDF:**
    1.  $f_X(x) \ge 0$ for all $x$.
    2.  $\int_{-\infty}^{\infty} f_X(x) dx = 1$.
*   **Calculating Probabilities from PDF:** The probability that $X$ falls between two values $a$ and $b$ is given by the integral of the PDF over that interval:
    *   $P(a \le X \le b) = \int_{a}^{b} f_X(x) dx$.
    *   Therefore, $P(X=x) = \int_{x}^{x} f_X(t) dt = 0$.

*   **Example (Veerarajan, 3rd ed., Chapter 4):** Consider an exponential distribution, often used to model the time between events in a Poisson process. The PDF is:
    *   $f_X(x) = \lambda e^{-\lambda x}$ for $x \ge 0$, and $0$ otherwise.
    *   Here, $\lambda > 0$ is the rate parameter.
    *   Let's verify the second property: $\int_{0}^{\infty} \lambda e^{-\lambda x} dx = [ -e^{-\lambda x} ]_{0}^{\infty} = -e^{-\infty} - (-e^0) = 0 - (-1) = 1$.
    *   The probability that the time to failure is between $t_1$ and $t_2$ is $P(t_1 \le X \le t_2) = \int_{t_1}^{t_2} \lambda e^{-\lambda x} dx = [-e^{-\lambda x}]_{t_1}^{t_2} = e^{-\lambda t_1} - e^{-\lambda t_2}$.

### 3.2 Cumulative Distribution Function (CDF)

*   **Definition:** The cumulative distribution function (CDF) of a random variable $X$ (both discrete and continuous), denoted by $F_X(x)$ or $F(x)$, gives the probability that $X$ takes on a value less than or equal to $x$.
*   **Formula (for continuous RV):** $F_X(x) = P(X \le x) = \int_{-\infty}^{x} f_X(t) dt$.
*   **Properties of a CDF:**
    1.  $0 \le F_X(x) \le 1$ for all $x$.
    2.  $F_X(x)$ is non-decreasing.
    3.  $\lim_{x \to -\infty} F_X(x) = 0$.
    4.  $\lim_{x \to \infty} F_X(x) = 1$.
*   **Relationship between PDF and CDF:** $f_X(x) = \frac{d}{dx} F_X(x)$ (where the derivative exists).

*   **Example (Exponential Distribution again):** For $f_X(x) = \lambda e^{-\lambda x}$ for $x \ge 0$:
    *   $F_X(x) = \int_{0}^{x} \lambda e^{-\lambda t} dt = [-e^{-\lambda t}]_{0}^{x} = -e^{-\lambda x} - (-e^0) = 1 - e^{-\lambda x}$ for $x \ge 0$.
    *   $F_X(x) = 0$ for $x < 0$.

### 3.3 Expected Value (Mean) of a Continuous Random Variable

*   **Definition:** Similar to discrete random variables, the expected value (mean) of a continuous random variable $X$, denoted by $E[X]$ or $\mu_X$, is the weighted average of its possible values, where the weights are given by the PDF.
*   **Formula:** $E[X] = \int_{-\infty}^{\infty} x \cdot f_X(x) dx$.

*   **Example (Exponential Distribution again):**
    *   $E[X] = \int_{0}^{\infty} x \cdot \lambda e^{-\lambda x} dx$.
    *   Using integration by parts ($u=x, dv=\lambda e^{-\lambda x} dx \implies du=dx, v=-e^{-\lambda x}$):
    *   $E[X] = [-x e^{-\lambda x}]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-\lambda x}) dx$
    *   $E[X] = (0 - 0) + \int_{0}^{\infty} e^{-\lambda x} dx$
    *   $E[X] = [- \frac{1}{\lambda} e^{-\lambda x}]_{0}^{\infty} = 0 - (-\frac{1}{\lambda}) = \frac{1}{\lambda}$.
    *   The mean time to failure for an exponential distribution is $1/\lambda$.

### 3.4 Variance and Standard Deviation of a Continuous Random Variable

*   **Definition of Variance:** The variance of a continuous random variable $X$, denoted by $Var(X)$ or $\sigma^2_X$, measures the spread around the mean.
*   **Formula:** $Var(X) = E[(X - \mu_X)^2] = \int_{-\infty}^{\infty} (x - \mu_X)^2 \cdot f_X(x) dx$.
*   **Alternative Formula for Variance:** $Var(X) = E[X^2] - (E[X])^2$, where $E[X^2] = \int_{-\infty}^{\infty} x^2 \cdot f_X(x) dx$.
*   **Definition of Standard Deviation:** $\sigma_X = \sqrt{Var(X)}$.

*   **Example (Exponential Distribution again):**
    *   We need $E[X^2] = \int_{0}^{\infty} x^2 \cdot \lambda e^{-\lambda x} dx$.
    *   Using integration by parts twice, or recognizing a pattern, we find $E[X^2] = \frac{2}{\lambda^2}$.
    *   $Var(X) = E[X^2] - (E[X])^2 = \frac{2}{\lambda^2} - (\frac{1}{\lambda})^2 = \frac{2}{\lambda^2} - \frac{1}{\lambda^2} = \frac{1}{\lambda^2}$.
    *   $\sigma_X = \sqrt{\frac{1}{\lambda^2}} = \frac{1}{\lambda}$.
    *   For the exponential distribution, the mean and standard deviation are equal.

---

## 4. Common Probability Distributions

We will now look at some important probability distributions used in electrical science.

### 4.1 Discrete Distributions

#### 4.1.1 Binomial Distribution

*   **Scenario:** Represents the number of successes in a fixed number of independent Bernoulli trials, where each trial has only two possible outcomes (success/failure) and the probability of success is constant.
*   **Parameters:** $n$ (number of trials), $p$ (probability of success in a single trial).
*   **Random Variable:** $X$ = number of successes.
*   **Possible Values:** $X \in \{0, 1, 2, \dots, n\}$.
*   **PMF:** $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$ for $k = 0, 1, \dots, n$.
    *   $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ is the binomial coefficient.
*   **Mean:** $E[X] = np$.
*   **Variance:** $Var(X) = np(1-p)$.
*   **Electrical Science Applications:** Number of defective components in a batch, number of signal pulses detected correctly in a block, number of successful transmissions in a communication channel.
*   **Reference (Devore, 9th ed., Chapter 4):** Detailed coverage of the binomial distribution, including its derivation and properties.

#### 4.1.2 Poisson Distribution

*   **Scenario:** Describes the number of events occurring in a fixed interval of time or space, given that these events occur with a known average rate and independently of the time since the last event.
*   **Parameters:** $\lambda$ (average number of events in the interval).
*   **Random Variable:** $X$ = number of events.
*   **Possible Values:** $X \in \{0, 1, 2, \dots\}$ (countably infinite).
*   **PMF:** $P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}$ for $k = 0, 1, 2, \dots$.
*   **Mean:** $E[X] = \lambda$.
*   **Variance:** $Var(X) = \lambda$.
*   **Electrical Science Applications:** Number of customer calls arriving at a call center per hour, number of faults occurring in a transmission line per day, number of photoelectrons emitted from a photodetector per second.
*   **Reference (Devore, 9th ed., Chapter 4):** Discusses the Poisson process and its relation to the Poisson distribution.

### 4.2 Continuous Distributions

#### 4.2.1 Uniform Distribution

*   **Scenario:** All values within a given interval are equally likely.
*   **Parameters:** $a$ (lower bound), $b$ (upper bound).
*   **Random Variable:** $X$.
*   **PDF:**
    *   $f_X(x) = \frac{1}{b-a}$ for $a \le x \le b$.
    *   $f_X(x) = 0$ otherwise.
*   **CDF:**
    *   $F_X(x) = 0$ for $x < a$.
    *   $F_X(x) = \frac{x-a}{b-a}$ for $a \le x \le b$.
    *   $F_X(x) = 1$ for $x > b$.
*   **Mean:** $E[X] = \frac{a+b}{2}$.
*   **Variance:** $Var(X) = \frac{(b-a)^2}{12}$.
*   **Electrical Science Applications:** Initial phase of a signal, random sampling of a continuous signal within a given range.
*   **Reference (Veerarajan, 3rd ed., Chapter 4):** Introduces the uniform distribution and its properties.

#### 4.2.2 Exponential Distribution

*   **Scenario:** Often used to model the time between events in a Poisson process, or the lifetime of components that exhibit no "memory" (memoryless property).
*   **Parameters:** $\lambda > 0$ (rate parameter).
*   **Random Variable:** $X$ (e.g., time to failure).
*   **PDF:** $f_X(x) = \lambda e^{-\lambda x}$ for $x \ge 0$, and $0$ otherwise.
*   **CDF:** $F_X(x) = 1 - e^{-\lambda x}$ for $x \ge 0$, and $0$ otherwise.
*   **Mean:** $E[X] = \frac{1}{\lambda}$.
*   **Variance:** $Var(X) = \frac{1}{\lambda^2}$.
*   **Memoryless Property:** $P(X > t+s | X > t) = P(X > s)$ for all $s, t \ge 0$. This means that if a component has already survived for time $t$, the probability of surviving for an additional time $s$ is the same as the probability of a new component surviving for time $s$.
*   **Electrical Science Applications:** Lifetimes of electronic components, time between arrivals of packets at a router, time between successive electrical breakdowns.
*   **Reference (Veerarajan, 3rd ed., Chapter 4):** Comprehensive treatment of the exponential distribution, including the memoryless property.

#### 4.2.3 Normal Distribution (Gaussian Distribution)

*   **Scenario:** A fundamental distribution in statistics, often appearing due to the Central Limit Theorem. It is bell-shaped and symmetric.
*   **Parameters:** $\mu$ (mean), $\sigma^2$ (variance), where $\sigma > 0$.
*   **Random Variable:** $X$.
*   **PDF:** $f_X(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$ for $-\infty < x < \infty$.
*   **CDF:** $F_X(x) = \int_{-\infty}^{x} \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}(\frac{t-\mu}{\sigma})^2} dt$. This integral does not have a simple closed-form solution and is typically computed using standard normal tables or software.
*   **Standard Normal Distribution:** A special case of the normal distribution with $\mu=0$ and $\sigma^2=1$. Denoted by $Z$. Its PDF is $\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}$, and its CDF is $\Phi(z)$.
*   **Relationship:** If $X \sim N(\mu, \sigma^2)$, then $Z = \frac{X-\mu}{\sigma} \sim N(0, 1)$.
*   **Mean:** $E[X] = \mu$.
*   **Variance:** $Var(X) = \sigma^2$.
*   **Electrical Science Applications:** Measurement errors, noise in communication systems, signal amplitude fluctuations, voltage and current distributions in circuits under random influences.
*   **Reference (Devore, 9th ed., Chapter 5):** Extensive coverage of the normal distribution, including its properties and applications.

---

## 5. Jointly Distributed Random Variables

### 5.1 Introduction

Often, we are interested in the behavior of two or more random variables simultaneously. This requires understanding their joint probability distributions.

### 5.2 Joint Probability Mass Function (for discrete RVs)

*   **Definition:** For two discrete random variables $X$ and $Y$, the joint PMF is $P(X=x, Y=y)$ or $p_{X,Y}(x, y)$.
*   **Properties:**
    1.  $0 \le p_{X,Y}(x, y) \le 1$ for all $x, y$.
    2.  $\sum_{x} \sum_{y} p_{X,Y}(x, y) = 1$.
*   **Marginal PMF:** The PMF of $X$ alone can be obtained from the joint PMF: $p_X(x) = \sum_{y} p_{X,Y}(x, y)$. Similarly, $p_Y(y) = \sum_{x} p_{X,Y}(x, y)$.

### 5.3 Joint Probability Density Function (for continuous RVs)

*   **Definition:** For two continuous random variables $X$ and $Y$, the joint PDF is $f_{X,Y}(x, y)$.
*   **Properties:**
    1.  $f_{X,Y}(x, y) \ge 0$ for all $x, y$.
    2.  $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{X,Y}(x, y) dx dy = 1$.
*   **Marginal PDF:** The PDF of $X$ alone is $f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) dy$. Similarly, $f_Y(y) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) dx$.
*   **Calculating Joint Probabilities:** $P((X,Y) \in A) = \iint_{A} f_{X,Y}(x, y) dx dy$.

### 5.4 Independence of Random Variables

*   **Definition:** Two random variables $X$ and $Y$ are independent if the probability of $X$ taking on a certain value does not affect the probability of $Y$ taking on any value, and vice versa.
*   **For Discrete RVs:** $X$ and $Y$ are independent if $p_{X,Y}(x, y) = p_X(x) p_Y(y)$ for all $x, y$.
*   **For Continuous RVs:** $X$ and $Y$ are independent if $f_{X,Y}(x, y) = f_X(x) f_Y(y)$ for all $x, y$.
*   **Important Consequence of Independence:** If $X$ and $Y$ are independent, then:
    *   $E[XY] = E[X]E[Y]$.
    *   $Var(X+Y) = Var(X) + Var(Y)$.

*   **Reference (Devore, 9th ed., Chapter 6):** Explores joint distributions, independence, and conditional distributions.

---

## 6. Important Points to Remember

*   **Random Variable:** A bridge between a random experiment and numerical analysis.
*   **Discrete vs. Continuous:** Key distinction based on the nature of possible values.
*   **PMF (Discrete):** Probabilities at specific points. Sums to 1.
*   **PDF (Continuous):** Density of probability. Integral over a range gives probability. Integral to infinity is 1.
*   **CDF:** Probability of being less than or equal to a value. Always non-decreasing.
*   **Mean (Expected Value):** The average value of a random variable.
*   **Variance/Standard Deviation:** Measures of spread or dispersion.
*   **Key Distributions:** Binomial (counts in trials), Poisson (counts in intervals), Uniform (equal likelihood), Exponential (time between events/memoryless), Normal (bell curve, common in nature/measurement).
*   **Independence:** Crucial property simplifying calculations, especially for expectations and variances of sums.

---

## 7. Practice Questions

**(Answers provided below)**

### Question 1 (Discrete RV)
A communication system transmits packets of data. The probability of a packet being lost is $p=0.05$. If 10 packets are sent, what is the probability that exactly 2 packets are lost?
(Hint: Use the Binomial Distribution)

### Question 2 (Discrete RV - Mean/Variance)
Consider a random variable $X$ with the following PMF:
$P(X=0) = 0.2$
$P(X=1) = 0.5$
$P(X=2) = 0.3$
Calculate the expected value $E[X]$ and the variance $Var(X)$.

### Question 3 (Continuous RV)
The time $T$ (in hours) for a particular electronic component to fail is exponentially distributed with a rate parameter $\lambda = 0.1$ failures per hour.
a) What is the probability that a component fails within the first 5 hours?
b) What is the probability that a component fails between 5 and 10 hours?
c) What is the probability that a component lasts for at least 10 hours, given that it has already lasted for 8 hours?
(Hint: Use the Exponential Distribution)

### Question 4 (Continuous RV - Mean/Variance)
A continuous random variable $X$ has a PDF given by:
$f_X(x) = 2x$ for $0 \le x \le 1$, and $0$ otherwise.
Calculate the expected value $E[X]$ and the variance $Var(X)$.

### Question 5 (Normal Distribution)
The output voltage of a circuit is normally distributed with a mean of 5V and a standard deviation of 0.2V. What is the probability that the voltage is between 4.8V and 5.2V?
(You may need a standard normal (Z) table or calculator for $\Phi(z)$ values. $\Phi(1) \approx 0.8413$, $\Phi(-1) \approx 0.1587$)

---

## 8. Practice Questions - Answers

### Answer 1

This is a Binomial distribution with $n=10$ and $p=0.05$. We want to find $P(X=2)$.
$P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$
$P(X=2) = \binom{10}{2} (0.05)^2 (1-0.05)^{10-2}$
$P(X=2) = \frac{10!}{2!8!} (0.05)^2 (0.95)^8$
$P(X=2) = 45 \cdot (0.0025) \cdot (0.6634)$
$P(X=2) \approx 0.0746$

### Answer 2

**Expected Value $E[X]$:**
$E[X] = (0 \cdot 0.2) + (1 \cdot 0.5) + (2 \cdot 0.3)$
$E[X] = 0 + 0.5 + 0.6 = 1.1$

**Variance $Var(X)$:**
First, calculate $E[X^2]$:
$E[X^2] = (0^2 \cdot 0.2) + (1^2 \cdot 0.5) + (2^2 \cdot 0.3)$
$E[X^2] = (0 \cdot 0.2) + (1 \cdot 0.5) + (4 \cdot 0.3)$
$E[X^2] = 0 + 0.5 + 1.2 = 1.7$

Now, calculate variance:
$Var(X) = E[X^2] - (E[X])^2$
$Var(X) = 1.7 - (1.1)^2$
$Var(X) = 1.7 - 1.21 = 0.49$

### Answer 3

The PDF is $f_T(t) = 0.1 e^{-0.1 t}$ for $t \ge 0$.
The CDF is $F_T(t) = 1 - e^{-0.1 t}$ for $t \ge 0$.

a) Probability of failure within the first 5 hours:
$P(T \le 5) = F_T(5) = 1 - e^{-0.1 \cdot 5} = 1 - e^{-0.5}$
$P(T \le 5) \approx 1 - 0.6065 = 0.3935$

b) Probability of failure between 5 and 10 hours:
$P(5 \le T \le 10) = F_T(10) - F_T(5)$
$P(5 \le T \le 10) = (1 - e^{-0.1 \cdot 10}) - (1 - e^{-0.1 \cdot 5})$
$P(5 \le T \le 10) = (1 - e^{-1}) - (1 - e^{-0.5})$
$P(5 \le T \le 10) = e^{-0.5} - e^{-1}$
$P(5 \le T \le 10) \approx 0.6065 - 0.3679 = 0.2386$

c) Probability of lasting at least 10 hours given it lasted 8 hours (memoryless property):
Due to the memoryless property of the exponential distribution, $P(T > 8+10 | T > 8) = P(T > 10)$.
$P(T > 10) = 1 - F_T(10) = 1 - (1 - e^{-0.1 \cdot 10}) = e^{-1}$
$P(T > 10) \approx 0.3679$

### Answer 4

**Expected Value $E[X]$:**
$E[X] = \int_{0}^{1} x \cdot (2x) dx = \int_{0}^{1} 2x^2 dx$
$E[X] = [\frac{2x^3}{3}]_{0}^{1} = \frac{2(1)^3}{3} - \frac{2(0)^3}{3} = \frac{2}{3}$

**Variance $Var(X)$:**
First, calculate $E[X^2]$:
$E[X^2] = \int_{0}^{1} x^2 \cdot (2x) dx = \int_{0}^{1} 2x^3 dx$
$E[X^2] = [\frac{2x^4}{4}]_{0}^{1} = [\frac{x^4}{2}]_{0}^{1} = \frac{1^4}{2} - \frac{0^4}{2} = \frac{1}{2}$

Now, calculate variance:
$Var(X) = E[X^2] - (E[X])^2$
$Var(X) = \frac{1}{2} - (\frac{2}{3})^2$
$Var(X) = \frac{1}{2} - \frac{4}{9} = \frac{9 - 8}{18} = \frac{1}{18}$

### Answer 5

The voltage $V$ is normally distributed with $\mu = 5$V and $\sigma = 0.2$V. We want $P(4.8 \le V \le 5.2)$.
First, standardize the values:
$Z_1 = \frac{4.8 - 5}{0.2} = \frac{-0.2}{0.2} = -1$
$Z_2 = \frac{5.2 - 5}{0.2} = \frac{0.2}{0.2} = 1$

So, $P(4.8 \le V \le 5.2) = P(-1 \le Z \le 1)$.
$P(-1 \le Z \le 1) = \Phi(1) - \Phi(-1)$
Using the provided values:
$P(-1 \le Z \le 1) \approx 0.8413 - 0.1587 = 0.6826$
This means approximately 68.26% of the output voltages fall within one standard deviation of the mean.

---
This concludes Module 1. In the next module, we will build upon these concepts to explore distributions of sample statistics and hypothesis testing.
