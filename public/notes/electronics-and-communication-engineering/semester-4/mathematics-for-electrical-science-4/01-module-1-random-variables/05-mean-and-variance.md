---
title: "Mean and variance"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4b7"
status: "completed"
scrapedAt: "2026-05-23T17:50:35.292Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Mean and Variance

---

This module introduces the fundamental concepts of random variables, their probability distributions, and key measures of their central tendency and spread. Understanding the mean and variance is crucial for characterizing the behavior of random phenomena encountered in electrical science.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Define and calculate the mean (expected value) of a discrete and continuous random variable.
*   Define and calculate the variance and standard deviation of a discrete and continuous random variable.
*   Understand and apply the properties of expectation and variance.
*   Relate the concepts of mean and variance to practical applications in electrical science, such as signal analysis and noise characterization.

---

### Key Concepts and Definitions:

A **random variable** is a variable whose value is a numerical outcome of a random phenomenon.

#### 1. Mean (Expected Value)

The **mean**, also known as the **expected value**, of a random variable represents the average value of the random variable over many trials. It is a measure of the central tendency of the probability distribution.

**Notation:** $E[X]$ or $\mu$

**1.1 For a Discrete Random Variable:**

If $X$ is a discrete random variable with possible values $x_1, x_2, \dots, x_n$ and corresponding probabilities $P(X=x_i)$, then the expected value is calculated as:

$$E[X] = \sum_{i=1}^{n} x_i P(X=x_i)$$

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016):** Chapter 3, Section 3.1 - Expected Value of a Discrete Random Variable.
*   **Veerarajan T. (3rd ed., 2008):** Chapter 4, Section 4.1 - Expected Value.

**Example 1.1 (Discrete):**
Consider a random variable $X$ representing the number of heads in two coin flips. The possible values of $X$ are 0, 1, and 2.
The probabilities are:
*   $P(X=0) = P(TT) = 1/4$
*   $P(X=1) = P(HT \text{ or } TH) = 2/4$
*   $P(X=2) = P(HH) = 1/4$

The mean (expected value) is:
$$E[X] = (0 \times \frac{1}{4}) + (1 \times \frac{2}{4}) + (2 \times \frac{1}{4}) = 0 + \frac{2}{4} + \frac{2}{4} = \frac{4}{4} = 1$$
This means that, on average, you expect to get 1 head in two coin flips.

**1.2 For a Continuous Random Variable:**

If $X$ is a continuous random variable with probability density function (PDF) $f(x)$, then the expected value is calculated as:

$$E[X] = \int_{-\infty}^{\infty} x f(x) dx$$

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016):** Chapter 4, Section 4.1 - Expected Value of a Continuous Random Variable.
*   **Veerarajan T. (3rd ed., 2008):** Chapter 5, Section 5.1 - Expected Value.

**Example 1.2 (Continuous):**
Consider a random variable $X$ representing the lifetime of a component, with a PDF $f(x) = \lambda e^{-\lambda x}$ for $x \ge 0$ and $f(x) = 0$ for $x < 0$ (Exponential distribution).
The mean is:
$$E[X] = \int_{0}^{\infty} x (\lambda e^{-\lambda x}) dx$$
Using integration by parts, we can solve this integral:
Let $u = x$ and $dv = \lambda e^{-\lambda x} dx$. Then $du = dx$ and $v = -e^{-\lambda x}$.
$$E[X] = [-x e^{-\lambda x}]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-\lambda x}) dx$$
$$E[X] = (0 - 0) + \int_{0}^{\infty} e^{-\lambda x} dx$$
$$E[X] = [-\frac{1}{\lambda} e^{-\lambda x}]_{0}^{\infty} = 0 - (-\frac{1}{\lambda}) = \frac{1}{\lambda}$$
The mean lifetime of a component with an exponential distribution is $1/\lambda$.

#### 2. Variance and Standard Deviation

The **variance** measures the spread or dispersion of the random variable's values around its mean. A higher variance indicates that the values are more spread out, while a lower variance indicates that the values are clustered closer to the mean.

The **standard deviation** is the square root of the variance and provides a measure of spread in the same units as the random variable.

**Notation for Variance:** $Var(X)$ or $\sigma^2$
**Notation for Standard Deviation:** $\sigma$

**2.1 For a Discrete Random Variable:**

The variance is calculated as the expected value of the squared difference between the random variable and its mean:

$$Var(X) = E[(X - \mu)^2] = \sum_{i=1}^{n} (x_i - \mu)^2 P(X=x_i)$$

An alternative and often more convenient formula is:

$$Var(X) = E[X^2] - (E[X])^2$$

where $E[X^2] = \sum_{i=1}^{n} x_i^2 P(X=x_i)$.

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016):** Chapter 3, Section 3.2 - Variance and Standard Deviation.
*   **Veerarajan T. (3rd ed., 2008):** Chapter 4, Section 4.2 - Variance.

**Example 2.1 (Discrete):**
Using the same coin flip example ($X$ = number of heads in two flips):
$E[X] = 1$
$E[X^2] = (0^2 \times \frac{1}{4}) + (1^2 \times \frac{2}{4}) + (2^2 \times \frac{1}{4}) = (0 \times \frac{1}{4}) + (1 \times \frac{2}{4}) + (4 \times \frac{1}{4}) = 0 + \frac{2}{4} + \frac{4}{4} = \frac{6}{4} = 1.5$

$Var(X) = E[X^2] - (E[X])^2 = 1.5 - (1)^2 = 1.5 - 1 = 0.5$

The standard deviation is $\sigma = \sqrt{0.5} \approx 0.707$.

**2.2 For a Continuous Random Variable:**

The variance is calculated as:

$$Var(X) = E[(X - \mu)^2] = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) dx$$

The alternative formula is:

$$Var(X) = E[X^2] - (E[X])^2$$

where $E[X^2] = \int_{-\infty}^{\infty} x^2 f(x) dx$.

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016):** Chapter 4, Section 4.2 - Variance and Standard Deviation.
*   **Veerarajan T. (3rd ed., 2008):** Chapter 5, Section 5.2 - Variance.

**Example 2.2 (Continuous):**
Using the exponential distribution $f(x) = \lambda e^{-\lambda x}$ for $x \ge 0$ and $E[X] = 1/\lambda$.
We need to calculate $E[X^2]$:
$$E[X^2] = \int_{0}^{\infty} x^2 (\lambda e^{-\lambda x}) dx$$
Using integration by parts twice, or by recognizing this relates to the Gamma function, we can find $E[X^2] = 2/\lambda^2$.

$Var(X) = E[X^2] - (E[X])^2 = \frac{2}{\lambda^2} - (\frac{1}{\lambda})^2 = \frac{2}{\lambda^2} - \frac{1}{\lambda^2} = \frac{1}{\lambda^2}$

The standard deviation is $\sigma = \sqrt{1/\lambda^2} = 1/\lambda$.

#### 3. Properties of Expectation and Variance

These properties are fundamental for simplifying calculations and understanding the behavior of transformations of random variables.

**3.1 Properties of Expectation:**

Let $X$ and $Y$ be random variables and $a, b$ be constants.

*   **Constant Rule:** $E[c] = c$, where $c$ is a constant.
    *   *Example:* If $X$ is always 5, $E[X] = 5$.
*   **Scalar Multiple Rule:** $E[aX] = aE[X]$
    *   *Example:* If $Y = 2X$, then $E[Y] = 2E[X]$.
*   **Sum Rule:** $E[X + Y] = E[X] + E[Y]$ (This holds regardless of whether $X$ and $Y$ are independent).
    *   *Example:* The expected value of the sum of two random variables is the sum of their expected values.
*   **Linear Combination Rule:** $E[aX + bY] = aE[X] + bE[Y]$
*   **Product Rule (for independent variables):** If $X$ and $Y$ are independent, then $E[XY] = E[X]E[Y]$. This is a crucial property for analyzing independent components.

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016):** Chapter 3, Section 3.1 (Discrete) and Chapter 4, Section 4.1 (Continuous) for properties.
*   **Veerarajan T. (3rd ed., 2008):** Chapter 4, Section 4.1 (Discrete) and Chapter 5, Section 5.1 (Continuous) for properties.
*   **Papoulis & Pillai (4th ed., 2002):** Chapter 4 - Expectation and Properties.

**3.2 Properties of Variance:**

Let $X$ and $Y$ be random variables and $a, b$ be constants.

*   **Constant Rule:** $Var(c) = 0$, where $c$ is a constant.
    *   *Example:* If $X$ is always 5, its variance is 0 because there is no spread.
*   **Scalar Multiple Rule:** $Var(aX) = a^2 Var(X)$
    *   *Example:* If $Y = 2X$, then $Var(Y) = 2^2 Var(X) = 4 Var(X)$. Notice the square.
*   **Addition of a Constant:** $Var(X + c) = Var(X)$
    *   *Example:* Adding a constant to a random variable shifts its distribution but does not change its spread.
*   **Linear Combination Rule:** $Var(aX + b) = a^2 Var(X)$ (combining the scalar multiple and addition of constant rules)
*   **Sum of Independent Variables:** If $X$ and $Y$ are independent, then $Var(X + Y) = Var(X) + Var(Y)$. This is extremely important for analyzing systems with independent noise sources.
*   **Difference of Independent Variables:** If $X$ and $Y$ are independent, then $Var(X - Y) = Var(X) + Var(Y)$. The variance of the difference is the sum of variances for independent variables.

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016):** Chapter 3, Section 3.2 (Discrete) and Chapter 4, Section 4.2 (Continuous) for properties.
*   **Veerarajan T. (3rd ed., 2008):** Chapter 4, Section 4.2 (Discrete) and Chapter 5, Section 5.2 (Continuous) for properties.
*   **Ross S. M. (6th ed., 2020):** Chapter 4 - Expected Value and Variance.

#### 4. Applications in Electrical Science

The concepts of mean and variance are pervasive in electrical engineering:

*   **Signal Analysis:** The mean of a signal can represent its DC component, while the variance can quantify the AC component or signal fluctuations.
*   **Noise Characterization:** Random noise in circuits is often modeled using random variables. The mean of the noise might be zero (for unbiased noise), but the variance is critical in determining the noise power or its impact on signal integrity. For example, thermal noise in resistors is often modeled by a random process whose variance is proportional to temperature.
*   **System Performance:** The mean and variance of system outputs help assess their reliability, accuracy, and stability. For instance, in communication systems, the variance of the received signal might be related to the signal-to-noise ratio (SNR).
*   **Reliability Engineering:** The mean time to failure (MTTF) is an expected value, and the variance of the lifetime of components indicates their reliability characteristics.

**Course Outcome Alignment:**
*   **CO1 & CO2:** Understanding the mean and variance is fundamental to describing and applying discrete and continuous random variables.
*   **CO4:** The concept of variance is closely linked to the power of a random process, and understanding autocorrelation functions often involves understanding how the mean and variance evolve over time.

---

### Practice Questions:

**Question 1 (Discrete):**
A discrete random variable $X$ has the following probability mass function (PMF):
$P(X=1) = 0.2$
$P(X=2) = 0.5$
$P(X=3) = 0.3$

Calculate the mean $E[X]$ and the variance $Var(X)$ of $X$.

**Question 2 (Continuous):**
Let $X$ be a continuous random variable with the probability density function (PDF):
$f(x) = 2e^{-2x}$ for $x \ge 0$
$f(x) = 0$ for $x < 0$

This is an Exponential distribution. Calculate the mean $E[X]$ and the variance $Var(X)$.

**Question 3 (Properties):**
Suppose $X$ is a random variable with $E[X] = 5$ and $Var(X) = 4$.
Calculate the following:
a) $E[2X + 3]$
b) $Var(2X + 3)$
c) $Var(X - 5)$

**Question 4 (Application - Electrical Science):**
In a communication system, the received signal power is modeled by a random variable $S$. The DC component of the signal is given by $E[S] = 10$ Watts. The AC component (noise and fluctuations) is such that $Var(S) = 2$ Watts$^2$. If the signal is amplified by a factor of 3, what is the new mean and variance of the amplified signal power?

---

### Answers to Practice Questions:

**Answer 1:**
*   **Mean ($E[X]$):**
    $E[X] = (1 \times 0.2) + (2 \times 0.5) + (3 \times 0.3) = 0.2 + 1.0 + 0.9 = 2.1$

*   **Variance ($Var(X)$):**
    First, calculate $E[X^2]$:
    $E[X^2] = (1^2 \times 0.2) + (2^2 \times 0.5) + (3^2 \times 0.3) = (1 \times 0.2) + (4 \times 0.5) + (9 \times 0.3) = 0.2 + 2.0 + 2.7 = 4.9$
    Now, calculate the variance:
    $Var(X) = E[X^2] - (E[X])^2 = 4.9 - (2.1)^2 = 4.9 - 4.41 = 0.49$

**Answer 2:**
This is an Exponential distribution with parameter $\lambda = 2$.
*   **Mean ($E[X]$):**
    For an Exponential distribution $f(x) = \lambda e^{-\lambda x}$ with $x \ge 0$, the mean is $1/\lambda$.
    $E[X] = 1/2 = 0.5$

*   **Variance ($Var(X)$):**
    For an Exponential distribution, the variance is $1/\lambda^2$.
    $Var(X) = 1/(2^2) = 1/4 = 0.25$

**Answer 3:**
Given $E[X] = 5$ and $Var(X) = 4$.
a) $E[2X + 3] = 2E[X] + 3 = 2(5) + 3 = 10 + 3 = 13$
b) $Var(2X + 3) = 2^2 Var(X) = 4 \times 4 = 16$
c) $Var(X - 5) = Var(X) = 4$ (Adding/subtracting a constant does not change the variance)

**Answer 4:**
Let $S_{new}$ be the new amplified signal power. $S_{new} = 3S$.
*   **New Mean:**
    $E[S_{new}] = E[3S] = 3E[S] = 3 \times 10 = 30$ Watts.
*   **New Variance:**
    $Var(S_{new}) = Var(3S) = 3^2 Var(S) = 9 \times 2 = 18$ Watts$^2$.

---

### Important Points to Remember:

*   The **mean** is the "average" value of a random variable.
*   The **variance** measures the "spread" or "dispersion" of a random variable around its mean.
*   The **standard deviation** is the square root of the variance and is in the same units as the random variable.
*   The formulas for mean and variance differ for discrete and continuous random variables, involving summations for discrete and integrals for continuous.
*   Always use the correct formula for $E[X^2]$ when using the $Var(X) = E[X^2] - (E[X])^2$ shortcut.
*   The properties of expectation are linear: $E[aX + bY] = aE[X] + bE[Y]$.
*   The properties of variance are not strictly linear: $Var(aX) = a^2 Var(X)$ and $Var(X+Y) = Var(X) + Var(Y)$ **only if X and Y are independent.** This independence assumption is crucial.
*   Mean and variance are fundamental tools for characterizing random signals and noise in electrical engineering.

---

This concludes the study notes for Mean and Variance of Random Variables. Ensure you practice the examples and exercises to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
