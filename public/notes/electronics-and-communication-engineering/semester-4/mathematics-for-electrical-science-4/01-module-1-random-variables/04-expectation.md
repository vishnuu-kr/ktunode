---
title: "Expectation"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4b6"
status: "completed"
scrapedAt: "2026-05-23T17:50:34.588Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Expectation

**Learning Outcomes:**

*   Understand the definition and properties of expected value for discrete and continuous random variables.
*   Calculate the expected value of functions of random variables.
*   Understand the concepts of variance and standard deviation as measures of spread.
*   Apply the linearity of expectation.
*   Recognize the importance of expectation in various electrical engineering contexts.

---

### 1. Introduction to Expectation

The **expected value** of a random variable is a fundamental concept representing the long-run average value of that random variable. It's often referred to as the mean or the first moment of the random variable. In electrical science, understanding the expected value is crucial for analyzing system performance, average power, signal levels, and many other statistical properties.

**Key Concept:** Expected value quantifies the central tendency of a random variable's probability distribution.

---

### 2. Expectation of a Discrete Random Variable

Let $X$ be a discrete random variable with probability mass function (PMF) $p_X(x)$. The expected value of $X$, denoted by $E[X]$ or $\mu_X$, is defined as:

$$E[X] = \sum_{x} x \cdot p_X(x)$$

The sum is taken over all possible values $x$ that the random variable $X$ can assume.

**Example (Devore, 9th ed., Chapter 3.2):**
Consider a random variable $X$ representing the number of heads in three independent coin flips. The possible values of $X$ are 0, 1, 2, 3.
The PMF is:
$P(X=0) = (1/2)^3 = 1/8$
$P(X=1) = 3 \cdot (1/2)^3 = 3/8$
$P(X=2) = 3 \cdot (1/2)^3 = 3/8$
$P(X=3) = (1/2)^3 = 1/8$

The expected value is:
$E[X] = (0 \cdot 1/8) + (1 \cdot 3/8) + (2 \cdot 3/8) + (3 \cdot 1/8)$
$E[X] = 0 + 3/8 + 6/8 + 3/8 = 12/8 = 1.5$

This means that, on average, we expect to get 1.5 heads in three coin flips.

**Reference (Veerarajan, 3rd ed., Chapter 4.2):**
Veerarajan defines the expectation of a discrete random variable similarly, emphasizing it as the weighted average of its possible values, with weights given by their respective probabilities.

---

### 3. Expectation of a Continuous Random Variable

Let $Y$ be a continuous random variable with probability density function (PDF) $f_Y(y)$. The expected value of $Y$, denoted by $E[Y]$ or $\mu_Y$, is defined as:

$$E[Y] = \int_{-\infty}^{\infty} y \cdot f_Y(y) dy$$

The integral is taken over all possible values $y$ that the random variable $Y$ can assume.

**Example (Devore, 9th ed., Chapter 3.2):**
Consider a random variable $Y$ representing the time until the first arrival in a Poisson process with rate $\lambda$. This follows an exponential distribution with PDF $f_Y(y) = \lambda e^{-\lambda y}$ for $y \ge 0$, and $0$ otherwise.

The expected value is:
$E[Y] = \int_{0}^{\infty} y \cdot (\lambda e^{-\lambda y}) dy$

Using integration by parts ($\int u dv = uv - \int v du$ with $u=y, dv=\lambda e^{-\lambda y} dy$), we get $du=dy, v=-e^{-\lambda y}$:
$E[Y] = [-y e^{-\lambda y}]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-\lambda y}) dy$
$E[Y] = (0 - 0) + \int_{0}^{\infty} e^{-\lambda y} dy$
$E[Y] = [-\frac{1}{\lambda} e^{-\lambda y}]_{0}^{\infty}$
$E[Y] = (0) - (-\frac{1}{\lambda} e^0) = \frac{1}{\lambda}$

So, the expected time until the first arrival in a Poisson process with rate $\lambda$ is $1/\lambda$.

**Reference (Papoulis & Pillai, 4th ed., Chapter 4):**
Papoulis and Pillai provide a thorough treatment of expectation for continuous random variables, including discussions on convergence and the conditions under which these integrals exist. They often use the term "mean value."

---

### 4. Expectation of a Function of a Random Variable

If $g(X)$ is a function of a random variable $X$, then the expected value of $g(X)$ can be calculated directly using the distribution of $X$ without explicitly finding the distribution of $Y = g(X)$.

**For a Discrete Random Variable $X$:**
$$E[g(X)] = \sum_{x} g(x) \cdot p_X(x)$$

**For a Continuous Random Variable $Y$:**
$$E[g(Y)] = \int_{-\infty}^{\infty} g(y) \cdot f_Y(y) dy$$

**Example (Devore, 9th ed., Chapter 3.2):**
Let $X$ be the outcome of a fair die roll (values 1, 2, 3, 4, 5, 6, each with probability 1/6). Let $g(X) = X^2$. We want to find $E[X^2]$.

$E[X^2] = (1^2 \cdot 1/6) + (2^2 \cdot 1/6) + (3^2 \cdot 1/6) + (4^2 \cdot 1/6) + (5^2 \cdot 1/6) + (6^2 \cdot 1/6)$
$E[X^2] = (1 + 4 + 9 + 16 + 25 + 36) / 6 = 91/6 \approx 15.17$

This is useful for calculating variance.

**Reference (Ross, 6th ed., Chapter 4):**
Ross emphasizes the "Law of the Unconscious Statistician" (LOTUS) which is the principle that allows us to calculate $E[g(X)]$ as shown above. This is a powerful tool as it avoids the often difficult step of deriving the distribution of $g(X)$.

---

### 5. Properties of Expectation

**Linearity of Expectation:**
For any random variables $X$ and $Y$, and constants $a$ and $b$:
1.  $E[aX] = a E[X]$
2.  $E[X + b] = E[X] + b$
3.  $E[aX + b] = a E[X] + b$
4.  $E[X + Y] = E[X] + E[Y]$ (This holds regardless of whether $X$ and $Y$ are independent.)

**Proof (Informal):**
The linearity property stems directly from the linearity of summation and integration.
For discrete $X, Y$:
$E[aX + bY] = \sum_{x, y} (ax + by) p_{X,Y}(x,y)$
$E[aX + bY] = a \sum_{x, y} x p_{X,Y}(x,y) + b \sum_{x, y} y p_{X,Y}(x,y)$
$E[aX + bY] = a E[X] + b E[Y]$ (since $\sum_y p_{X,Y}(x,y) = p_X(x)$ and $\sum_x p_{X,Y}(x,y) = p_Y(y)$).

**Example (Electrical Engineering Context):**
Consider a circuit with components having random resistances $R_1, R_2, \dots, R_n$. If the total resistance is $R_{total} = R_1 + R_2 + \dots + R_n$, then the expected total resistance is $E[R_{total}] = E[R_1] + E[R_2] + \dots + E[R_n]$. This means the average total resistance is the sum of the average individual resistances. This property is invaluable for analyzing the expected performance of complex systems.

**Independence:**
If $X$ and $Y$ are independent, then $E[XY] = E[X]E[Y]$.
*   **Important Note:** The converse is not always true. $E[XY] = E[X]E[Y]$ does not necessarily imply independence.

**Reference (Palaniammal, 3rd ed., Chapter 4):**
Palaniammal dedicates a section to the properties of expectation, emphasizing the linearity property and its applications in simplifying calculations for sums of random variables, which is common in electrical noise analysis.

---

### 6. Variance and Standard Deviation

While expectation gives us the average value, it doesn't tell us how spread out the values are around the average. **Variance** and **Standard Deviation** are measures of this dispersion.

**Variance:**
The variance of a random variable $X$, denoted by $Var(X)$ or $\sigma_X^2$, measures the average squared deviation from the mean.
$$Var(X) = E[(X - E[X])^2]$$

Using the property of expectation of a function:
$$Var(X) = \sum_{x} (x - E[X])^2 \cdot p_X(x) \quad \text{(for discrete X)}$$
$$Var(X) = \int_{-\infty}^{\infty} (y - E[Y])^2 \cdot f_Y(y) dy \quad \text{(for continuous Y)}$$

**Alternative Formula for Variance:**
A more computationally convenient formula for variance is:
$$Var(X) = E[X^2] - (E[X])^2$$

**Standard Deviation:**
The standard deviation, denoted by $\sigma_X$, is the square root of the variance. It's in the same units as the random variable itself, making it easier to interpret.
$$\sigma_X = \sqrt{Var(X)}$$

**Example (Continuing the Die Roll):**
For the fair die roll $X$, we found $E[X] = (1+2+3+4+5+6)/6 = 3.5$ and $E[X^2] = 91/6$.

$Var(X) = E[X^2] - (E[X])^2 = 91/6 - (3.5)^2 = 91/6 - 12.25$
$Var(X) = 15.1667 - 12.25 = 2.9167$ (approximately)

$\sigma_X = \sqrt{2.9167} \approx 1.71$

**Properties of Variance:**
*   $Var(aX) = a^2 Var(X)$
*   $Var(X + b) = Var(X)$ (Adding a constant shifts the distribution but doesn't change its spread.)
*   $Var(aX + b) = a^2 Var(X)$
*   If $X$ and $Y$ are independent, $Var(X + Y) = Var(X) + Var(Y)$.

**Reference (Anderson, Benedek, 1st ed., Chapter 5):**
Anderson and Benedek introduce variance and standard deviation as crucial metrics for quantifying variability. They highlight the importance of the variance formula $E[X^2] - (E[X])^2$ for practical calculations.

**Knowledge Level Alignment:**
*   **CO1 & CO2 (K3):** Understanding and applying the definitions of expectation and variance for discrete and continuous random variables falls under "Knowledge Level: K3" as it requires applying concepts to solve problems.
*   **CO4 (K3):** While CO4 focuses on random processes, the underlying expectation of random variables is a foundational element. Understanding average signal power, for instance, relies on expectation.

---

### 7. Importance in Electrical Science

Expectation and its related concepts (variance, standard deviation) are ubiquitous in electrical engineering:

*   **Signal Processing:**
    *   **Average Power:** For a voltage signal $V(t)$ across a resistor $R$, the instantaneous power is $P(t) = V(t)^2/R$. The average power is $E[P(t)] = E[V(t)^2/R] = E[V(t)^2]/R$. If $V(t)$ is a random process, $E[V(t)^2]$ is the mean squared value, and its square root is the RMS (Root Mean Square) value, which represents the effective amplitude.
    *   **Signal-to-Noise Ratio (SNR):** SNR is often defined as the ratio of the expected power of the signal to the expected power of the noise, $SNR = E[P_{signal}] / E[P_{noise}]$.

*   **Communication Systems:**
    *   **Channel Capacity:** Concepts of expected information content per symbol are used in information theory.
    *   **Error Probability:** The average probability of error in a digital communication system often involves integrating error probabilities weighted by the expected values of signal amplitudes or noise levels.

*   **Control Systems:**
    *   **System Stability:** Expected values of system parameters can be used in deterministic analysis to predict behavior. For systems with random disturbances, expected values of state variables are crucial.

*   **Reliability Engineering:**
    *   **Mean Time Between Failures (MTBF):** This is the expected value of the time until a component or system fails.

**Reference (Veerarajan, 3rd ed., Chapter 4):**
Veerarajan provides examples relating to reliability and queueing theory, which are often relevant to electrical systems analysis.

---

### 8. Practice Questions

**Question 1 (Discrete Expectation):**
A communication system transmits bits. The probability of transmitting a '1' is 0.6, and the probability of transmitting a '0' is 0.4. Let $X$ be a random variable representing the value of the transmitted bit (1 for '1', 0 for '0'). Calculate $E[X]$.

**Question 2 (Continuous Expectation):**
The voltage $V$ of a noisy signal can be modeled by a continuous random variable with PDF $f_V(v) = \frac{1}{2}e^{-|v|}$ for $-\infty < v < \infty$. Calculate $E[V]$.

**Question 3 (Function of a Random Variable):**
Consider the previous noisy signal voltage $V$ with $f_V(v) = \frac{1}{2}e^{-|v|}$. Calculate $E[V^2]$. Use this to find the variance of $V$.

**Question 4 (Linearity of Expectation):**
In a communication link, the signal power is affected by two independent noise sources, $N_1$ and $N_2$. The received signal power is $S = P_{ideal} + N_1 + N_2$, where $P_{ideal}$ is the ideal power and $N_1, N_2$ are random noise powers. If $E[N_1] = 5$ units and $E[N_2] = 3$ units, and $P_{ideal} = 100$ units, what is the expected received signal power $E[S]$?

---

### 9. Answers to Practice Questions

**Answer 1:**
$X$ is a Bernoulli random variable with $p = 0.6$.
$E[X] = (1 \cdot 0.6) + (0 \cdot 0.4) = 0.6$.

**Answer 2:**
$E[V] = \int_{-\infty}^{\infty} v \cdot \frac{1}{2}e^{-|v|} dv$
Since $v \cdot e^{-|v|}$ is an odd function, and the integration is symmetric around 0, the integral evaluates to 0.
$E[V] = 0$.

**Answer 3:**
$E[V^2] = \int_{-\infty}^{\infty} v^2 \cdot \frac{1}{2}e^{-|v|} dv$
Since $v^2 e^{-|v|}$ is an even function, we can write:
$E[V^2] = 2 \int_{0}^{\infty} v^2 \cdot \frac{1}{2}e^{-v} dv = \int_{0}^{\infty} v^2 e^{-v} dv$
This is the Gamma function $\Gamma(3)$ or $2!$ for integer arguments.
$E[V^2] = 2$.

Variance:
$Var(V) = E[V^2] - (E[V])^2 = 2 - (0)^2 = 2$.

**Answer 4:**
Using the linearity of expectation:
$E[S] = E[P_{ideal} + N_1 + N_2]$
$E[S] = E[P_{ideal}] + E[N_1] + E[N_2]$
Since $P_{ideal}$ is a constant, $E[P_{ideal}] = P_{ideal}$.
$E[S] = 100 + 5 + 3 = 108$ units.

---

### 10. Important Points to Remember

*   **Expectation (Mean):** The long-run average value of a random variable.
*   **Calculation:** Sum of (value * probability) for discrete RVs; Integral of (value * PDF) for continuous RVs.
*   **Linearity of Expectation:** $E[aX + bY] = aE[X] + bE[Y]$ is a crucial property that holds regardless of independence.
*   **Variance:** Measures the spread of a random variable around its mean. $Var(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$.
*   **Standard Deviation:** The square root of variance, providing a measure of spread in the same units as the random variable.
*   **Independence:** If $X$ and $Y$ are independent, $E[XY] = E[X]E[Y]$ and $Var(X+Y) = Var(X) + Var(Y)$.
*   **Applications:** Expectation is fundamental for analyzing average power, noise, system performance, and reliability in electrical science.

---
This comprehensive study note covers the essential aspects of expectation for Module 1 of Mathematics for Electrical Science – 4, aligning with the learning outcomes and drawing upon the provided textbooks and references. The examples and practice questions are designed to reinforce understanding and prepare students for applying these concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
