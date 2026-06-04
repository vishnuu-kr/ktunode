---
title: "Mean and variance"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4c3"
status: "completed"
scrapedAt: "2026-05-23T17:50:42.988Z"
---
# Mathematics for Electrical Science – 4: Module 2 - Continuous Random Variables and Their Probability Distributions

## Topic: Mean and Variance

This module delves into the fundamental characteristics of continuous random variables, focusing on their central tendency and spread. Understanding the mean and variance is crucial for describing and analyzing random phenomena in electrical science, such as signal noise, component tolerances, and system performance.

### Learning Outcomes Covered:

*   **LO1: Understand the concepts of expected value (mean) for continuous random variables.** This involves grasping the theoretical definition and practical interpretation of the mean for a continuous distribution.
*   **LO2: Understand the concepts of variance and standard deviation for continuous random variables.** This includes understanding how these measures quantify the spread or dispersion of the random variable's values around its mean.
*   **LO3: Compute the mean and variance for common continuous probability distributions.** This involves applying formulas and techniques to calculate these statistics for widely used distributions like the uniform, exponential, and normal distributions.
*   **LO4: Apply the properties of expectation and variance to simplify calculations involving linear combinations of random variables.** This enables efficient analysis of systems with multiple random components.

### Course Outcomes Alignment:

*   **CO2: Describe the concept, properties and important models of continuous random variables and to apply in suitable random phenomena.** The mean and variance are core properties that describe continuous random variables and are essential for their application in various electrical engineering scenarios. (Knowledge Level: K3)

---

### 1. Expected Value (Mean) of a Continuous Random Variable

The expected value, or mean, of a continuous random variable $X$, denoted by $E[X]$ or $\mu$, represents the weighted average of all possible values that $X$ can take. For a continuous random variable, this weighted average is calculated using integration.

#### 1.1 Definition

If $X$ is a continuous random variable with probability density function (PDF) $f(x)$, then the expected value of $X$ is given by:

$$E[X] = \int_{-\infty}^{\infty} x f(x) \, dx$$

**Key Points:**

*   The integral is taken over the entire range of possible values for $X$.
*   $x$ represents each possible value, and $f(x)$ acts as the "weight" for that value.
*   The expected value doesn't necessarily have to be one of the possible values $X$ can take.

#### 1.2 Interpretation of the Mean

*   **Long-run average:** If we were to repeatedly sample from the distribution of $X$, the average of these samples would converge to $E[X]$ as the number of samples increases (Law of Large Numbers).
*   **Center of mass:** The mean can be thought of as the "balancing point" or center of mass of the probability distribution.

#### 1.3 Expected Value of a Function of a Random Variable

If $Y = g(X)$ is a function of a continuous random variable $X$ with PDF $f(x)$, then the expected value of $Y$ is:

$$E[Y] = E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) \, dx$$

**Important Property (Linearity of Expectation):**

For any constants $a$ and $b$, and any random variables $X_1, X_2, \dots, X_n$:
$E[aX + b] = aE[X] + b$
$E[X_1 + X_2 + \dots + X_n] = E[X_1] + E[X_2] + \dots + E[X_n]$

This property is extremely useful for simplifying calculations, especially when dealing with linear combinations of random variables.

#### 1.4 Examples of Mean Calculation

**Example 1: Uniform Distribution**
Let $X$ be a continuous random variable uniformly distributed on the interval $[a, b]$. Its PDF is:
$f(x) = \begin{cases} \frac{1}{b-a} & \text{for } a \le x \le b \\ 0 & \text{otherwise} \end{cases}$

The mean is:
$E[X] = \int_{a}^{b} x \cdot \frac{1}{b-a} \, dx = \frac{1}{b-a} \left[ \frac{x^2}{2} \right]_{a}^{b} = \frac{1}{b-a} \left( \frac{b^2}{2} - \frac{a^2}{2} \right) = \frac{1}{b-a} \frac{(b-a)(b+a)}{2} = \frac{a+b}{2}$
*This confirms the intuitive result that the mean of a uniform distribution is the midpoint of the interval.*

**Example 2: Exponential Distribution**
Let $X$ be an exponentially distributed random variable with rate parameter $\lambda$. Its PDF is:
$f(x) = \begin{cases} \lambda e^{-\lambda x} & \text{for } x \ge 0 \\ 0 & \text{otherwise} \end{cases}$

The mean is:
$E[X] = \int_{0}^{\infty} x \cdot \lambda e^{-\lambda x} \, dx$
*We can solve this using integration by parts ($\int u \, dv = uv - \int v \, du$), where $u=x$ and $dv = \lambda e^{-\lambda x} \, dx$. Then $du = dx$ and $v = -e^{-\lambda x}$.*
$E[X] = \left[ x (-e^{-\lambda x}) \right]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-\lambda x}) \, dx$
$E[X] = (0 - 0) + \int_{0}^{\infty} e^{-\lambda x} \, dx$
$E[X] = \left[ -\frac{1}{\lambda} e^{-\lambda x} \right]_{0}^{\infty} = (0) - \left(-\frac{1}{\lambda}\right) = \frac{1}{\lambda}$
*The mean of an exponential distribution is the reciprocal of the rate parameter.*

**Example 3: Normal Distribution**
For a normal distribution $N(\mu, \sigma^2)$ with PDF:
$f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$
The mean is, by definition, $\mu$. Proving this involves complex integration, but it can be understood by the symmetry of the bell curve around $\mu$.

---

### 2. Variance and Standard Deviation of a Continuous Random Variable

The variance and standard deviation are measures of the spread or dispersion of a random variable's values around its mean.

#### 2.1 Definition of Variance

The variance of a continuous random variable $X$, denoted by $Var(X)$ or $\sigma^2$, is the expected value of the squared deviation from the mean:

$$Var(X) = E[(X - \mu)^2]$$

where $\mu = E[X]$. Substituting the definition of expected value:

$$Var(X) = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) \, dx$$

#### 2.2 Alternative Formula for Variance

A more convenient formula for calculating variance is:

$$Var(X) = E[X^2] - (E[X])^2$$

This formula is often easier to work with as it avoids calculating $(x-\mu)^2$ directly in the integral. It requires calculating the expected value of $X$ and the expected value of $X^2$.

$$E[X^2] = \int_{-\infty}^{\infty} x^2 f(x) \, dx$$

#### 2.3 Standard Deviation

The standard deviation of a continuous random variable $X$, denoted by $\sigma$, is the square root of the variance:

$$\sigma = \sqrt{Var(X)}$$

**Key Points about Variance and Standard Deviation:**

*   **Measures of spread:** They quantify how much the values of $X$ tend to deviate from the mean $\mu$.
*   **Non-negativity:** Variance and standard deviation are always non-negative ($\sigma^2 \ge 0$, $\sigma \ge 0$).
*   **Units:** The standard deviation has the same units as the random variable $X$, while the variance has units that are the square of the units of $X$.
*   **Interpretation:** A small variance/standard deviation indicates that the values of $X$ are clustered closely around the mean, while a large variance/standard deviation indicates that the values are more spread out.

#### 2.4 Properties of Variance

For constants $a$ and $b$, and a random variable $X$:

*   $Var(X+b) = Var(X)$
*   $Var(aX) = a^2 Var(X)$
*   $Var(aX+b) = a^2 Var(X)$

**For independent random variables $X_1, X_2, \dots, X_n$:**

*   $Var(X_1 + X_2 + \dots + X_n) = Var(X_1) + Var(X_2) + \dots + Var(X_n)$
*   $Var(a_1 X_1 + a_2 X_2 + \dots + a_n X_n) = a_1^2 Var(X_1) + a_2^2 Var(X_2) + \dots + a_n^2 Var(X_n)$

**Important Note:** If $X_1$ and $X_2$ are *not* independent, then $Var(X_1 + X_2) = Var(X_1) + Var(X_2) + 2Cov(X_1, X_2)$, where $Cov$ is the covariance. The independence assumption is critical for the additivity property.

#### 2.5 Examples of Variance and Standard Deviation Calculation

**Example 1: Uniform Distribution on $[a, b]$**
$f(x) = \frac{1}{b-a}$ for $a \le x \le b$, and $E[X] = \frac{a+b}{2}$.

First, calculate $E[X^2]$:
$E[X^2] = \int_{a}^{b} x^2 \cdot \frac{1}{b-a} \, dx = \frac{1}{b-a} \left[ \frac{x^3}{3} \right]_{a}^{b} = \frac{1}{b-a} \left( \frac{b^3}{3} - \frac{a^3}{3} \right)$
$E[X^2] = \frac{1}{3(b-a)} (b^3 - a^3) = \frac{1}{3(b-a)} (b-a)(b^2 + ab + a^2) = \frac{b^2 + ab + a^2}{3}$

Now, calculate the variance:
$Var(X) = E[X^2] - (E[X])^2 = \frac{b^2 + ab + a^2}{3} - \left(\frac{a+b}{2}\right)^2$
$Var(X) = \frac{b^2 + ab + a^2}{3} - \frac{a^2 + 2ab + b^2}{4}$
$Var(X) = \frac{4(b^2 + ab + a^2) - 3(a^2 + 2ab + b^2)}{12}$
$Var(X) = \frac{4b^2 + 4ab + 4a^2 - 3a^2 - 6ab - 3b^2}{12}$
$Var(X) = \frac{a^2 - 2ab + b^2}{12} = \frac{(b-a)^2}{12}$

The standard deviation is $\sigma = \sqrt{\frac{(b-a)^2}{12}} = \frac{b-a}{\sqrt{12}} = \frac{b-a}{2\sqrt{3}}$.

**Example 2: Exponential Distribution with rate $\lambda$**
$f(x) = \lambda e^{-\lambda x}$ for $x \ge 0$, and $E[X] = \frac{1}{\lambda}$.

First, calculate $E[X^2]$:
$E[X^2] = \int_{0}^{\infty} x^2 \cdot \lambda e^{-\lambda x} \, dx$
*We use integration by parts twice. For the first time, let $u=x^2$, $dv = \lambda e^{-\lambda x} \, dx$. Then $du = 2x \, dx$, $v = -e^{-\lambda x}$.*
$E[X^2] = \left[ x^2 (-e^{-\lambda x}) \right]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-\lambda x}) (2x \, dx)$
$E[X^2] = 0 + 2 \int_{0}^{\infty} x e^{-\lambda x} \, dx$
*The integral $\int_{0}^{\infty} x e^{-\lambda x} \, dx$ is $E[X]$ from the previous calculation, which is $1/\lambda$.*
$E[X^2] = 2 \left( \frac{1}{\lambda^2} \right) = \frac{2}{\lambda^2}$

Now, calculate the variance:
$Var(X) = E[X^2] - (E[X])^2 = \frac{2}{\lambda^2} - \left(\frac{1}{\lambda}\right)^2 = \frac{2}{\lambda^2} - \frac{1}{\lambda^2} = \frac{1}{\lambda^2}$

The standard deviation is $\sigma = \sqrt{\frac{1}{\lambda^2}} = \frac{1}{\lambda}$.

**Example 3: Normal Distribution $N(\mu, \sigma^2)$**
For a normal distribution, the variance is, by definition, $\sigma^2$. The standard deviation is $\sigma$.

**Referencing Textbooks:**

*   **Devore, J. L. (2016) "Probability and Statistics for Engineering and the Sciences"**: Chapter 4 (Discrete Random Variables) and Chapter 5 (Continuous Random Variables) discuss expected values and variance extensively. Section 5.2 specifically covers "Expected Value and Variance of a Continuous Random Variable," including definitions and properties. The examples of uniform and exponential distributions are typically covered here.
*   **Veerarajan, T. (2008) "Probability, Statistics and Random Processes"**: Chapter 5 ("Probability Distributions") and Chapter 6 ("Mathematical Expectation") are relevant. The concept of expectation is introduced in Chapter 6, with specific sections on moments (including mean and variance) for continuous random variables.

---

### 3. Important Points to Remember

*   **Continuous vs. Discrete:** For continuous random variables, we use integration to find expected values and probabilities. For discrete variables, we use summation.
*   **PDF is not probability:** $f(x)$ is not the probability of $X=x$. The probability of $X$ falling within an interval $[a, b]$ is $P(a \le X \le b) = \int_{a}^{b} f(x) \, dx$. For continuous variables, $P(X=x) = 0$.
*   **Linearity of Expectation:** $E[aX+b] = aE[X]+b$. This is always true, even if $X$ is not normally distributed or if you have multiple random variables.
*   **Variance of a Constant:** $Var(c) = 0$ for any constant $c$.
*   **Variance of a Scaled Variable:** $Var(aX) = a^2 Var(X)$. The scale factor is squared.
*   **Variance of a Shifted Variable:** $Var(X+b) = Var(X)$. Shifting the random variable does not change its spread.
*   **Independence for Variance:** The property $Var(X_1 + X_2) = Var(X_1) + Var(X_2)$ *only* holds if $X_1$ and $X_2$ are independent.
*   **Standard Deviation is the "typical" deviation:** It provides a measure of spread in the same units as the random variable.

---

### 4. Practice Questions and Exercises

**Instructions:** For each question, identify the relevant probability distribution (if applicable) and use the appropriate formulas for mean and variance.

**Question 1:**
A random voltage $V$ in an electrical circuit is uniformly distributed over the interval $[0, 5]$ Volts.
a) Calculate the mean voltage $E[V]$.
b) Calculate the variance of the voltage $Var(V)$.
c) Calculate the standard deviation of the voltage $\sigma_V$.

**Question 2:**
The lifetime $T$ (in hours) of a particular electronic component is exponentially distributed with a rate parameter $\lambda = 0.002$ failures per hour.
a) What is the expected lifetime of this component?
b) What is the variance of the lifetime?
c) What is the standard deviation of the lifetime?
d) What is the probability that a component lasts for more than 100 hours? ($P(T > 100)$)

**Question 3:**
Consider a random variable $X$ with the following PDF:
$f(x) = \begin{cases} 2e^{-2x} & \text{for } x \ge 0 \\ 0 & \text{otherwise} \end{cases}$
This is an exponential distribution.
a) Calculate $E[X]$.
b) Calculate $Var(X)$.
c) Let $Y = 3X + 2$. Calculate $E[Y]$ and $Var(Y)$.

**Question 4:**
Let $X_1$ and $X_2$ be two independent continuous random variables with $E[X_1] = 5$, $Var(X_1) = 2$, $E[X_2] = 10$, and $Var(X_2) = 4$. Let $Y = 2X_1 - X_2$.
a) Calculate $E[Y]$.
b) Calculate $Var(Y)$.

---

### 5. Answers to Practice Questions

**Answer 1:**
Given $V$ is uniformly distributed on $[0, 5]$. Here $a=0, b=5$.
a) $E[V] = \frac{a+b}{2} = \frac{0+5}{2} = \boxed{2.5 \text{ Volts}}$
b) $Var(V) = \frac{(b-a)^2}{12} = \frac{(5-0)^2}{12} = \frac{25}{12} \approx \boxed{2.083 \text{ Volts}^2}$
c) $\sigma_V = \sqrt{Var(V)} = \sqrt{\frac{25}{12}} = \frac{5}{\sqrt{12}} = \frac{5}{2\sqrt{3}} \approx \boxed{1.443 \text{ Volts}}$

**Answer 2:**
Given $T$ is exponentially distributed with $\lambda = 0.002$.
a) $E[T] = \frac{1}{\lambda} = \frac{1}{0.002} = \boxed{500 \text{ hours}}$
b) $Var(T) = \frac{1}{\lambda^2} = \frac{1}{(0.002)^2} = \frac{1}{0.000004} = \boxed{250000 \text{ hours}^2}$
c) $\sigma_T = \sqrt{Var(T)} = \sqrt{250000} = \boxed{500 \text{ hours}}$
d) For exponential distribution, $P(T > t) = e^{-\lambda t}$.
   $P(T > 100) = e^{-0.002 \times 100} = e^{-0.2} \approx \boxed{0.8187}$

**Answer 3:**
Given $f(x) = 2e^{-2x}$ for $x \ge 0$. This is an exponential distribution with rate $\lambda=2$.
a) $E[X] = \frac{1}{\lambda} = \frac{1}{2} = \boxed{0.5}$
b) $Var(X) = \frac{1}{\lambda^2} = \frac{1}{2^2} = \frac{1}{4} = \boxed{0.25}$
c) For $Y = 3X + 2$:
   $E[Y] = E[3X + 2] = 3E[X] + 2 = 3(0.5) + 2 = 1.5 + 2 = \boxed{3.5}$
   $Var(Y) = Var(3X + 2) = 3^2 Var(X) = 9 \times 0.25 = \boxed{2.25}$

**Answer 4:**
Given $E[X_1] = 5$, $Var(X_1) = 2$, $E[X_2] = 10$, $Var(X_2) = 4$, and $X_1, X_2$ are independent. $Y = 2X_1 - X_2$.
a) $E[Y] = E[2X_1 - X_2] = E[2X_1] - E[X_2] = 2E[X_1] - E[X_2]$ (using linearity of expectation)
   $E[Y] = 2(5) - 10 = 10 - 10 = \boxed{0}$
b) $Var(Y) = Var(2X_1 - X_2)$
   Since $X_1$ and $X_2$ are independent, we can use the property $Var(aX_1 + bX_2) = a^2 Var(X_1) + b^2 Var(X_2)$. Here, $a=2$ and $b=-1$.
   $Var(Y) = Var(2X_1) + Var(-X_2)$
   $Var(Y) = (2)^2 Var(X_1) + (-1)^2 Var(X_2)$
   $Var(Y) = 4 \cdot Var(X_1) + 1 \cdot Var(X_2)$
   $Var(Y) = 4(2) + 1(4) = 8 + 4 = \boxed{12}$

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
