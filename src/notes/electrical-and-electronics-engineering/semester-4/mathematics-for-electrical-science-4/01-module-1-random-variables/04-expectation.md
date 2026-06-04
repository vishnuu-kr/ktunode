---
title: "Expectation"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d93"
status: "completed"
scrapedAt: "2026-05-23T16:16:46.583Z"
---
# Mathematics for Electrical Science – 4: Module 1: Random Variables - Expectation

This module delves into the fundamental concept of expectation, a cornerstone in understanding the average behavior of random variables. We will explore its definition, properties, and applications in various electrical science contexts.

---

## 1. Introduction to Expectation

### 1.1 What is Expectation?

Expectation, also known as the **expected value** or **mean**, represents the weighted average of all possible values that a random variable can take. It essentially tells us what value we can expect the random variable to take on, on average, over many repetitions of the experiment.

**Key Concept:** Expectation quantifies the "center" or "average" of a probability distribution.

### 1.2 Notation

The expectation of a random variable $X$ is denoted by $E(X)$ or $\mu_X$.

---

## 2. Expectation of a Discrete Random Variable

### 2.1 Definition

For a discrete random variable $X$ with probability mass function (PMF) $p_X(x)$, the expectation is defined as:

$E(X) = \sum_{x} x \cdot p_X(x)$

where the sum is taken over all possible values $x$ that $X$ can take.

**In simpler terms:** Multiply each possible value of the random variable by its probability and sum up all these products.

**Reference:** Devore J. L., Chapter 4.2, "Expected Values"

### 2.2 Examples

**Example 1: Fair Die Roll**
Let $X$ be the outcome of rolling a fair six-sided die. The possible values of $X$ are $\{1, 2, 3, 4, 5, 6\}$, and the PMF is $p_X(x) = 1/6$ for each $x$.

$E(X) = (1 \times \frac{1}{6}) + (2 \times \frac{1}{6}) + (3 \times \frac{1}{6}) + (4 \times \frac{1}{6}) + (5 \times \frac{1}{6}) + (6 \times \frac{1}{6})$
$E(X) = \frac{1}{6} (1 + 2 + 3 + 4 + 5 + 6) = \frac{21}{6} = 3.5$

The expected outcome of rolling a fair die is 3.5.

**Example 2: Bernoulli Trial**
Consider a single toss of a biased coin where the probability of getting a Head (H) is $p$ and the probability of getting a Tail (T) is $1-p$. Let $X$ be a random variable such that $X=1$ if Heads and $X=0$ if Tails.

$E(X) = (1 \times p) + (0 \times (1-p)) = p$

The expected value of a Bernoulli random variable is simply the probability of success.

**Reference:** Veerarajan, T., Chapter 3.3, "Expected Value of a Random Variable"

### 2.3 Properties of Expectation (Discrete)

For any constants $a$ and $b$, and random variables $X$ and $Y$:

*   $E(c) = c$ (Expectation of a constant is the constant itself)
*   $E(aX) = aE(X)$ (Linearity of expectation)
*   $E(X+b) = E(X) + b$
*   $E(aX + b) = aE(X) + b$
*   $E(X+Y) = E(X) + E(Y)$ (Linearity of expectation holds regardless of independence)
*   $E(XY) = E(X)E(Y)$ if $X$ and $Y$ are independent.

**Important Point:** Linearity of expectation ($E(X+Y) = E(X) + E(Y)$) is a very powerful property and holds even if $X$ and $Y$ are dependent. The property $E(XY) = E(X)E(Y)$ holds only if $X$ and $Y$ are independent.

**Reference:** Devore J. L., Chapter 4.2, "Expected Values"
**Reference:** Veerarajan, T., Chapter 3.3, "Expected Value of a Random Variable"

---

## 3. Expectation of a Continuous Random Variable

### 3.1 Definition

For a continuous random variable $X$ with probability density function (PDF) $f_X(x)$, the expectation is defined as:

$E(X) = \int_{-\infty}^{\infty} x \cdot f_X(x) dx$

where the integral is taken over all possible values $x$ that $X$ can take.

**In simpler terms:** Multiply each possible value of the random variable by its probability density and integrate over the entire range of possible values.

**Reference:** Devore J. L., Chapter 4.2, "Expected Values"

### 3.2 Examples

**Example 1: Uniform Distribution**
Let $X$ be a continuous random variable uniformly distributed over the interval $[a, b]$. Its PDF is $f_X(x) = \frac{1}{b-a}$ for $a \le x \le b$, and 0 otherwise.

$E(X) = \int_{a}^{b} x \cdot \frac{1}{b-a} dx = \frac{1}{b-a} \int_{a}^{b} x dx$
$E(X) = \frac{1}{b-a} \left[ \frac{x^2}{2} \right]_{a}^{b} = \frac{1}{b-a} \left( \frac{b^2}{2} - \frac{a^2}{2} \right)$
$E(X) = \frac{1}{b-a} \frac{(b-a)(b+a)}{2} = \frac{a+b}{2}$

The expected value of a uniform distribution is the midpoint of the interval.

**Example 2: Exponential Distribution**
Let $X$ be an exponentially distributed random variable with rate parameter $\lambda > 0$. Its PDF is $f_X(x) = \lambda e^{-\lambda x}$ for $x \ge 0$, and 0 otherwise.

$E(X) = \int_{0}^{\infty} x \cdot \lambda e^{-\lambda x} dx$
Using integration by parts ($\int u dv = uv - \int v du$), let $u=x$ and $dv = \lambda e^{-\lambda x} dx$. Then $du = dx$ and $v = -e^{-\lambda x}$.

$E(X) = \left[ -x e^{-\lambda x} \right]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-\lambda x}) dx$
$E(X) = (0 - 0) + \int_{0}^{\infty} e^{-\lambda x} dx$
$E(X) = \left[ -\frac{1}{\lambda} e^{-\lambda x} \right]_{0}^{\infty} = (0 - (-\frac{1}{\lambda})) = \frac{1}{\lambda}$

The expected value of an exponential distribution is $1/\lambda$. This is often used to model waiting times in systems.

**Reference:** Devore J. L., Chapter 4.2, "Expected Values"
**Reference:** Veerarajan, T., Chapter 3.3, "Expected Value of a Random Variable"

### 3.3 Properties of Expectation (Continuous)

The properties of expectation are the same for continuous random variables as for discrete ones:

*   $E(c) = c$
*   $E(aX) = aE(X)$
*   $E(X+b) = E(X) + b$
*   $E(aX + b) = aE(X) + b$
*   $E(X+Y) = E(X) + E(Y)$
*   $E(XY) = E(X)E(Y)$ if $X$ and $Y$ are independent.

**Reference:** Devore J. L., Chapter 4.2, "Expected Values"
**Reference:** Veerarajan, T., Chapter 3.3, "Expected Value of a Random Variable"

---

## 4. Expectation of a Function of a Random Variable

### 4.1 Definition

If $Y = g(X)$, where $g$ is a function and $X$ is a random variable, then the expectation of $Y$ can be found directly without first finding the distribution of $Y$.

**For a Discrete Random Variable X:**
$E(g(X)) = \sum_{x} g(x) \cdot p_X(x)$

**For a Continuous Random Variable X:**
$E(g(X)) = \int_{-\infty}^{\infty} g(x) \cdot f_X(x) dx$

This is also known as the **Law of the Unconscious Statistician (LOTUS)**.

**Reference:** Devore J. L., Chapter 4.3, "The Variance and Standard Deviation of a Random Variable" (discusses moments which are expectations of functions of X)
**Reference:** Veerarajan, T., Chapter 3.3, "Expected Value of a Random Variable"

### 4.2 Examples

**Example 1: Square of a Random Variable (Discrete)**
Let $X$ be a random variable with the following PMF: $p_X(0) = 0.5$, $p_X(1) = 0.5$. Let $Y = X^2$.

$E(Y) = E(X^2) = (0^2 \times 0.5) + (1^2 \times 0.5) = 0 + 0.5 = 0.5$

**Example 2: Square of a Random Variable (Continuous)**
Let $X$ be uniformly distributed over $[-1, 1]$, so $f_X(x) = 1/2$ for $-1 \le x \le 1$. Let $Y = X^2$.

$E(Y) = E(X^2) = \int_{-1}^{1} x^2 \cdot \frac{1}{2} dx = \frac{1}{2} \int_{-1}^{1} x^2 dx$
$E(Y) = \frac{1}{2} \left[ \frac{x^3}{3} \right]_{-1}^{1} = \frac{1}{2} \left( \frac{1^3}{3} - \frac{(-1)^3}{3} \right) = \frac{1}{2} \left( \frac{1}{3} - (-\frac{1}{3}) \right)$
$E(Y) = \frac{1}{2} \left( \frac{2}{3} \right) = \frac{1}{3}$

**Reference:** Papoulis, A. & Pillai, S.U., Chapter 3, "Expectation" (covers moments and functions of random variables)

---

## 5. Variance and Standard Deviation

While not strictly "Expectation" itself, variance and standard deviation are derived from expectation and are crucial measures of the spread or dispersion of a random variable around its mean.

### 5.1 Variance

The variance of a random variable $X$, denoted by $Var(X)$ or $\sigma^2_X$, measures the average squared deviation from the mean.

**Definition:**
$Var(X) = E[(X - E(X))^2]$

**Computational Formula:**
A more convenient formula for calculation is:
$Var(X) = E(X^2) - [E(X)]^2$

**Reference:** Devore J. L., Chapter 4.3, "The Variance and Standard Deviation of a Random Variable"
**Reference:** Veerarajan, T., Chapter 3.5, "Variance of a Random Variable"

### 5.2 Standard Deviation

The standard deviation of a random variable $X$, denoted by $\sigma_X$, is the square root of the variance. It provides a measure of spread in the same units as the random variable.

**Definition:**
$\sigma_X = \sqrt{Var(X)} = \sqrt{E[(X - E(X))^2]}$

**Reference:** Devore J. L., Chapter 4.3, "The Variance and Standard Deviation of a Random Variable"
**Reference:** Veerarajan, T., Chapter 3.5, "Variance of a Random Variable"

### 5.3 Properties of Variance

For any constants $a$ and $b$:

*   $Var(c) = 0$ (Variance of a constant is zero)
*   $Var(aX) = a^2 Var(X)$
*   $Var(X+b) = Var(X)$
*   $Var(aX + b) = a^2 Var(X)$
*   If $X$ and $Y$ are independent, then $Var(X+Y) = Var(X) + Var(Y)$.

**Important Point:** $Var(X+Y) = Var(X) + Var(Y)$ holds only if $X$ and $Y$ are independent.

**Reference:** Devore J. L., Chapter 4.3, "The Variance and Standard Deviation of a Random Variable"
**Reference:** Veerarajan, T., Chapter 3.5, "Variance of a Random Variable"

---

## 6. Covariance and Correlation

Covariance and correlation are measures of how two random variables change together.

### 6.1 Covariance

The covariance between two random variables $X$ and $Y$, denoted by $Cov(X, Y)$ or $\sigma_{XY}$, measures the degree of linear relationship between them.

**Definition:**
$Cov(X, Y) = E[(X - E(X))(Y - E(Y))]$

**Computational Formula:**
$Cov(X, Y) = E(XY) - E(X)E(Y)$

*   If $Cov(X, Y) > 0$, $X$ and $Y$ tend to increase or decrease together.
*   If $Cov(X, Y) < 0$, one variable tends to increase as the other decreases.
*   If $Cov(X, Y) = 0$, there is no linear relationship between $X$ and $Y$ (but they might be dependent in a non-linear way).

**Reference:** Devore J. L., Chapter 4.4, "Covariance and Correlation"
**Reference:** Veerarajan, T., Chapter 3.6, "Covariance"

### 6.2 Correlation Coefficient

The correlation coefficient, denoted by $\rho_{XY}$, is a standardized version of covariance, ranging from -1 to +1.

**Definition:**
$\rho_{XY} = \frac{Cov(X, Y)}{\sigma_X \sigma_Y}$

*   $\rho_{XY} = 1$: Perfect positive linear correlation.
*   $\rho_{XY} = -1$: Perfect negative linear correlation.
*   $\rho_{XY} = 0$: No linear correlation.

**Reference:** Devore J. L., Chapter 4.4, "Covariance and Correlation"
**Reference:** Veerarajan, T., Chapter 3.6, "Correlation Coefficient"

### 6.3 Properties of Covariance and Correlation

*   $Cov(X, X) = Var(X)$
*   $Cov(aX, bY) = ab Cov(X, Y)$
*   $Cov(X+Y, Z) = Cov(X, Z) + Cov(Y, Z)$
*   If $X$ and $Y$ are independent, $Cov(X, Y) = 0$. (The converse is not necessarily true).
*   If $X$ and $Y$ are independent, $\rho_{XY} = 0$.
*   $Var(X+Y) = Var(X) + Var(Y) + 2 Cov(X, Y)$

**Reference:** Devore J. L., Chapter 4.4, "Covariance and Correlation"
**Reference:** Veerarajan, T., Chapter 3.6, "Covariance"

---

## 7. Expectation in Electrical Science Contexts

Expectation is fundamental in analyzing the behavior of electrical systems and signals.

*   **Average Power:** In signal processing, the average power of a signal $x(t)$ is related to the expected value of its squared magnitude. For a random process $X(t)$, the mean-square value $E[X(t)^2]$ is crucial.
*   **System Output:** If $X$ is the input to a linear system and $Y$ is the output, then $E[Y] = E[g(X)]$, where $g$ represents the system's operation.
*   **Reliability Analysis:** Expected values can be used to calculate the expected lifetime of components or systems.
*   **Performance Metrics:** In communication systems, expected values are used to define and analyze performance metrics like Signal-to-Noise Ratio (SNR).

**Reference:** Papoulis, A. & Pillai, S.U., Chapters on "Random Processes" and "Spectral Characteristics" often use expectation in the context of signal analysis.
**Reference:** Ross, S. M., "Introduction to Probability and Statistics for Engineers and Scientists" often provides application examples in engineering.

---

## 8. Practice Questions and Exercises

**Instructions:** Solve the following problems to test your understanding.

**Question 1 (Discrete Expectation):**
A manufacturing process produces bolts. The number of defects per bolt ($X$) follows a Poisson distribution with parameter $\lambda = 0.5$. Calculate the expected number of defects per bolt.

**Question 2 (Continuous Expectation):**
The voltage $V$ of a sensor output is uniformly distributed between 2V and 5V. What is the expected voltage?

**Question 3 (Expectation of a Function):**
Let $X$ be a discrete random variable with $P(X=0) = 0.2$, $P(X=1) = 0.5$, $P(X=2) = 0.3$. Find $E(X^2)$.

**Question 4 (Variance):**
For the random variable $X$ in Question 3, calculate $Var(X)$.

**Question 5 (Covariance/Correlation - Conceptual):**
If the correlation coefficient between the input voltage and output current of a circuit is positive and close to 1, what does this imply about their relationship?

---

## 9. Answers to Practice Questions

**Answer 1:**
For a Poisson distribution with parameter $\lambda$, the expected value is $\lambda$.
Therefore, $E(X) = 0.5$.

**Answer 2:**
For a uniform distribution over $[a, b]$, the expected value is $\frac{a+b}{2}$.
Here, $a = 2$ and $b = 5$.
$E(V) = \frac{2+5}{2} = \frac{7}{2} = 3.5$V.

**Answer 3:**
We need to calculate $E(X^2) = \sum x^2 \cdot P(X=x)$.
$E(X^2) = (0^2 \times 0.2) + (1^2 \times 0.5) + (2^2 \times 0.3)$
$E(X^2) = (0 \times 0.2) + (1 \times 0.5) + (4 \times 0.3)$
$E(X^2) = 0 + 0.5 + 1.2 = 1.7$.

**Answer 4:**
First, calculate $E(X)$:
$E(X) = (0 \times 0.2) + (1 \times 0.5) + (2 \times 0.3)$
$E(X) = 0 + 0.5 + 0.6 = 1.1$.
Now, use the formula $Var(X) = E(X^2) - [E(X)]^2$.
$Var(X) = 1.7 - (1.1)^2$
$Var(X) = 1.7 - 1.21 = 0.49$.

**Answer 5:**
A positive correlation coefficient close to 1 indicates a strong positive linear relationship. This implies that as the input voltage increases, the output current also tends to increase in a linear fashion.

---

## 10. Key Points to Remember

*   **Expectation is the average value:** It's the weighted average of all possible outcomes, weighted by their probabilities.
*   **LOTUS:** You can find the expectation of a function of a random variable without finding the distribution of the function itself.
*   **Linearity is key:** $E(aX+b) = aE(X)+b$ and $E(X+Y)=E(X)+E(Y)$ are crucial and always hold.
*   **Independence for products:** $E(XY) = E(X)E(Y)$ ONLY if $X$ and $Y$ are independent.
*   **Variance measures spread:** It's the average squared deviation from the mean.
*   **$\sigma_X^2 = E(X^2) - [E(X)]^2$:** The computational formula for variance is very useful.
*   **Covariance and Correlation:** Measure the linear relationship between two random variables. $\rho=0$ implies no linear relationship, but not necessarily independence.

---

## 11. Alignment with Course Outcomes

*   **CO1 (Discrete RVs):** This section heavily covers the definition and properties of expectation for discrete random variables, enabling application in scenarios like defect counts or coin tosses. (Knowledge Level: K3)
*   **CO2 (Continuous RVs):** The notes detail the expectation for continuous random variables, applicable to modeling sensor outputs, signal amplitudes, or waiting times. (Knowledge Level: K3)
*   **CO3 (Parameter Estimation):** While this module focuses on expectation, understanding the expected value is foundational for estimating population parameters (like the mean) and for understanding confidence intervals and hypothesis testing, where the mean is central. (Knowledge Level: K3)
*   **CO4 (Random Processes):** Expectation is a fundamental property of random processes. For a stationary process, the mean (which is an expectation) is constant over time. Concepts like mean-square value are directly related to expectation and are used in autocorrelation functions. (Knowledge Level: K3)

---
This concludes the study notes for the topic of Expectation. Remember to practice the exercises and refer back to the textbooks for further details and examples.
