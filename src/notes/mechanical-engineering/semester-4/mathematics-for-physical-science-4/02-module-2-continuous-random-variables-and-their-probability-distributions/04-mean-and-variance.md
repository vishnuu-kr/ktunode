---
title: "Mean and variance"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ec1"
status: "completed"
scrapedAt: "2026-05-20T17:54:41.089Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 2: Continuous Random Variables and Their Probability Distributions
## Topic: Mean and Variance

---

### Introduction to Continuous Random Variables

This module focuses on understanding and quantifying the behavior of continuous random variables. Unlike discrete random variables, which can only take on a countable number of values, continuous random variables can assume any value within a given range. In physical sciences, many phenomena are modeled by continuous random variables, such as measurements of length, time, temperature, or voltage.

This topic, "Mean and Variance," is crucial for summarizing and understanding the central tendency and spread of these continuous random variables.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the definitions of the mean (expected value) and variance for a continuous random variable.
*   Calculate the mean and variance of a continuous random variable given its probability density function (PDF).
*   Interpret the mean and variance in the context of physical science applications.
*   Recognize the relationship between the mean and variance and other statistical measures.
*   Apply properties of expectation and variance to simplify calculations.

---

### Key Concepts and Definitions

#### 2.1 Probability Density Function (PDF) for Continuous Random Variables

Before delving into mean and variance, it's essential to recall the properties of a PDF for a continuous random variable $X$.

A function $f(x)$ is a probability density function (PDF) of a continuous random variable $X$ if:

1.  $f(x) \ge 0$ for all $x$.
2.  $\int_{-\infty}^{\infty} f(x) dx = 1$.

The probability that $X$ falls within an interval $[a, b]$ is given by the integral of the PDF over that interval:
$P(a \le X \le b) = \int_{a}^{b} f(x) dx$.

**(Reference: Devore, Chapter 3.1)**

---

#### 2.2 Mean (Expected Value) of a Continuous Random Variable

The mean, also known as the expected value, of a continuous random variable $X$ represents the average value of $X$ over many repetitions of the random experiment. It is a measure of the central tendency of the probability distribution.

**Definition:**
The mean (or expected value) of a continuous random variable $X$ with PDF $f(x)$ is denoted by $E(X)$ or $\mu_X$, and is calculated as:

$$E(X) = \mu_X = \int_{-\infty}^{\infty} x f(x) dx$$

**Important Points:**

*   The integral is taken over all possible values of $X$. If the PDF is defined over a specific range $[a, b]$, the integral becomes $\int_{a}^{b} x f(x) dx$.
*   The mean is a weighted average of the possible values of $X$, where the weights are given by the PDF.
*   The mean does not have to be a value that $X$ can actually take.

**(Reference: Devore, Chapter 3.3; Ross, Chapter 4.2)**

**Example 2.2.1: Calculating the Mean**
Let $X$ be a continuous random variable with PDF:
$f(x) = \begin{cases} 2x & \text{for } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$

Calculate the mean of $X$.

**Solution:**
$$E(X) = \int_{-\infty}^{\infty} x f(x) dx = \int_{0}^{1} x (2x) dx$$
$$E(X) = \int_{0}^{1} 2x^2 dx = 2 \left[ \frac{x^3}{3} \right]_{0}^{1}$$
$$E(X) = 2 \left( \frac{1^3}{3} - \frac{0^3}{3} \right) = 2 \left( \frac{1}{3} \right) = \frac{2}{3}$$

The mean of $X$ is $\frac{2}{3}$.

---

#### 2.3 Variance and Standard Deviation of a Continuous Random Variable

The variance measures the spread or dispersion of the probability distribution around its mean. A higher variance indicates that the values of $X$ are spread out over a wider range, while a lower variance indicates that the values are clustered closer to the mean. The standard deviation is the square root of the variance and is often preferred because it has the same units as the random variable.

**Definition of Variance:**
The variance of a continuous random variable $X$ with PDF $f(x)$ and mean $\mu_X$ is denoted by $Var(X)$ or $\sigma_X^2$, and is calculated as:

$$Var(X) = \sigma_X^2 = E[(X - \mu_X)^2] = \int_{-\infty}^{\infty} (x - \mu_X)^2 f(x) dx$$

**Alternative Formula for Variance:**
A more convenient formula for calculating the variance is:

$$Var(X) = E(X^2) - [E(X)]^2$$

where $E(X^2)$ is the expected value of $X^2$, calculated as:

$$E(X^2) = \int_{-\infty}^{\infty} x^2 f(x) dx$$

**Definition of Standard Deviation:**
The standard deviation of a continuous random variable $X$ is the square root of its variance:

$$\sigma_X = \sqrt{Var(X)} = \sqrt{\sigma_X^2}$$

**Important Points:**

*   The variance is always non-negative ($\sigma_X^2 \ge 0$).
*   The standard deviation has the same units as the random variable $X$, making it easier to interpret.
*   The alternative formula for variance ($E(X^2) - [E(X)]^2$) is often computationally simpler.

**(Reference: Devore, Chapter 3.3; Ross, Chapter 4.2)**

**Example 2.3.1: Calculating Variance and Standard Deviation**
Using the same random variable $X$ from Example 2.2.1, where $f(x) = 2x$ for $0 \le x \le 1$ and $E(X) = \frac{2}{3}$.

Calculate the variance and standard deviation of $X$.

**Solution:**

**Step 1: Calculate $E(X^2)$**
$$E(X^2) = \int_{-\infty}^{\infty} x^2 f(x) dx = \int_{0}^{1} x^2 (2x) dx$$
$$E(X^2) = \int_{0}^{1} 2x^3 dx = 2 \left[ \frac{x^4}{4} \right]_{0}^{1}$$
$$E(X^2) = 2 \left( \frac{1^4}{4} - \frac{0^4}{4} \right) = 2 \left( \frac{1}{4} \right) = \frac{1}{2}$$

**Step 2: Calculate Variance using the alternative formula**
$$Var(X) = E(X^2) - [E(X)]^2$$
$$Var(X) = \frac{1}{2} - \left(\frac{2}{3}\right)^2 = \frac{1}{2} - \frac{4}{9}$$
To subtract these fractions, find a common denominator, which is 18:
$$Var(X) = \frac{9}{18} - \frac{8}{18} = \frac{1}{18}$$

**Step 3: Calculate Standard Deviation**
$$\sigma_X = \sqrt{Var(X)} = \sqrt{\frac{1}{18}} = \frac{1}{\sqrt{18}} = \frac{1}{3\sqrt{2}} = \frac{\sqrt{2}}{6}$$

The variance of $X$ is $\frac{1}{18}$, and the standard deviation is $\frac{\sqrt{2}}{6}$.

---

### Properties of Expectation and Variance

These properties are fundamental for simplifying calculations involving linear transformations of random variables and for deriving the variance of sums of independent random variables.

#### 2.4 Properties of Expectation

Let $X$ and $Y$ be continuous random variables, and let $a$ and $b$ be constants.

1.  **Linearity of Expectation:** $E(aX + b) = aE(X) + b$
    This is a cornerstone property. It implies that the expected value of a linear transformation of a random variable is the linear transformation of its expected value.

2.  **Expectation of a Constant:** $E(c) = c$, where $c$ is a constant.

3.  **Expectation of a Sum:** $E(X + Y) = E(X) + E(Y)$
    This property holds regardless of whether $X$ and $Y$ are independent. This is known as the **linearity of expectation**.

4.  **Expectation of a Product (for independent variables):** If $X$ and $Y$ are independent, then $E(XY) = E(X)E(Y)$.
    **Important:** This property does *not* hold if $X$ and $Y$ are not independent.

**(Reference: Devore, Chapter 3.3; Ross, Chapter 4.2; Papoulis & Pillai, Chapter 4)**

**Example 2.4.1: Using Properties of Expectation**
Suppose a random variable $Y = 3X + 5$. If $E(X) = 10$, find $E(Y)$.

**Solution:**
Using the linearity of expectation:
$E(Y) = E(3X + 5) = 3E(X) + 5$
$E(Y) = 3(10) + 5 = 30 + 5 = 35$

---

#### 2.5 Properties of Variance

Let $X$ be a continuous random variable, and let $a$ and $b$ be constants.

1.  **Variance of a Constant:** $Var(c) = 0$, where $c$ is a constant.
    This makes sense as a constant has no variability.

2.  **Variance of a Linear Transformation:** $Var(aX + b) = a^2 Var(X)$
    Notice that adding a constant $b$ does not affect the variance, but multiplying by a constant $a$ scales the variance by $a^2$.

3.  **Variance of a Sum of Independent Variables:** If $X$ and $Y$ are independent random variables, then $Var(X + Y) = Var(X) + Var(Y)$.
    This is a very important property for dealing with sums of independent quantities in physical science.

4.  **Variance of a Difference of Independent Variables:** If $X$ and $Y$ are independent random variables, then $Var(X - Y) = Var(X) + Var(Y)$.
    Note that the variance of the difference is the sum of the variances, similar to the sum, because variance is a measure of squared deviations.

**(Reference: Devore, Chapter 3.3; Ross, Chapter 4.2; Papoulis & Pillai, Chapter 4)**

**Example 2.5.1: Using Properties of Variance**
Suppose $X$ is a random variable with $Var(X) = 4$. Find the variance of $Y = 2X - 3$.

**Solution:**
Using the property $Var(aX + b) = a^2 Var(X)$:
$Var(Y) = Var(2X - 3) = 2^2 Var(X)$
$Var(Y) = 4 \times 4 = 16$

**Example 2.5.2: Variance of a Sum of Independent Variables**
Let $X_1, X_2, \dots, X_n$ be independent random variables, each with mean $\mu$ and variance $\sigma^2$. Let $Y = \sum_{i=1}^n X_i$.
Find $E(Y)$ and $Var(Y)$.

**Solution:**
Using linearity of expectation:
$E(Y) = E(\sum_{i=1}^n X_i) = \sum_{i=1}^n E(X_i) = \sum_{i=1}^n \mu = n\mu$

Using the property of variance for independent variables:
$Var(Y) = Var(\sum_{i=1}^n X_i) = \sum_{i=1}^n Var(X_i) = \sum_{i=1}^n \sigma^2 = n\sigma^2$

This result is fundamental in statistics, particularly in the study of sample means.

---

### Applications in Physical Science

The concepts of mean and variance are ubiquitous in physical science.

*   **Mean:**
    *   **Average measurement:** The mean of a set of measurements of a physical quantity gives the best estimate of the true value.
    *   **Center of mass:** In mechanics, the center of mass of a system can be thought of as the expected position of its constituent parts.
    *   **Average energy:** In thermodynamics and statistical mechanics, the average energy of particles in a system is a key quantity.

*   **Variance:**
    *   **Error/Uncertainty:** The variance (or standard deviation) quantifies the uncertainty or spread in experimental measurements. A high variance implies high uncertainty.
    *   **Dispersion of particles:** In diffusion processes, the variance of the particle positions over time describes how spread out the particles become.
    *   **Signal-to-noise ratio:** In signal processing, the variance of the noise component is crucial in determining the quality of a signal.

**(Reference: General application context from all textbooks, particularly Devore and Ross when discussing real-world examples)**

---

### Important Points to Remember

*   **Mean ($E(X)$):** A measure of central tendency, the average value. Calculated by $\int_{-\infty}^{\infty} x f(x) dx$.
*   **Variance ($Var(X)$):** A measure of spread or dispersion around the mean. Calculated by $\int_{-\infty}^{\infty} (x - \mu_X)^2 f(x) dx$ or $E(X^2) - [E(X)]^2$.
*   **Standard Deviation ($\sigma_X$):** The square root of the variance, providing a measure of spread in the same units as the random variable.
*   **Linearity of Expectation:** $E(aX + b) = aE(X) + b$ and $E(X+Y) = E(X) + E(Y)$ (always true).
*   **Variance of Linear Transformation:** $Var(aX + b) = a^2 Var(X)$.
*   **Independence is Key for Variance of Sums:** $Var(X+Y) = Var(X) + Var(Y)$ *only if X and Y are independent*.

---

### Practice Questions

**Question 2.1:**
A continuous random variable $T$ has the following probability density function:
$f(t) = \begin{cases} \frac{1}{2}t & \text{for } 0 \le t \le 2 \\ 0 & \text{otherwise} \end{cases}$

Calculate the mean and variance of $T$.

**Question 2.2:**
Let $X$ be a continuous random variable with PDF $f(x) = e^{-x}$ for $x \ge 0$. Calculate $E(X)$ and $Var(X)$. (Hint: You may need integration by parts for $E(X^2)$).

**Question 2.3:**
Suppose $X$ and $Y$ are independent continuous random variables with $E(X) = 5$, $Var(X) = 2$, $E(Y) = 3$, and $Var(Y) = 1$.
Calculate:
a) $E(2X + 1)$
b) $Var(2X + 1)$
c) $E(X - Y)$
d) $Var(X - Y)$
e) $E(XY)$
f) $Var(X + Y)$

---

### Answers to Practice Questions

**Answer 2.1:**
First, let's verify that $f(t)$ is a valid PDF:
$\int_{0}^{2} \frac{1}{2}t dt = \frac{1}{2} \left[\frac{t^2}{2}\right]_0^2 = \frac{1}{2} (\frac{4}{2} - 0) = \frac{1}{2} (2) = 1$.
The PDF is valid.

**Mean ($E(T)$):**
$E(T) = \int_{0}^{2} t f(t) dt = \int_{0}^{2} t \left(\frac{1}{2}t\right) dt = \int_{0}^{2} \frac{1}{2}t^2 dt$
$E(T) = \frac{1}{2} \left[\frac{t^3}{3}\right]_0^2 = \frac{1}{2} \left(\frac{8}{3} - 0\right) = \frac{1}{2} \left(\frac{8}{3}\right) = \frac{4}{3}$

**Variance ($Var(T)$):**
First, calculate $E(T^2)$:
$E(T^2) = \int_{0}^{2} t^2 f(t) dt = \int_{0}^{2} t^2 \left(\frac{1}{2}t\right) dt = \int_{0}^{2} \frac{1}{2}t^3 dt$
$E(T^2) = \frac{1}{2} \left[\frac{t^4}{4}\right]_0^2 = \frac{1}{2} \left(\frac{16}{4} - 0\right) = \frac{1}{2} (4) = 2$

Now, calculate the variance:
$Var(T) = E(T^2) - [E(T)]^2 = 2 - \left(\frac{4}{3}\right)^2 = 2 - \frac{16}{9}$
$Var(T) = \frac{18}{9} - \frac{16}{9} = \frac{2}{9}$

**Answer for Question 2.1:** Mean $E(T) = \frac{4}{3}$, Variance $Var(T) = \frac{2}{9}$.

---

**Answer 2.2:**
PDF: $f(x) = e^{-x}$ for $x \ge 0$.

**Mean ($E(X)$):**
$E(X) = \int_{0}^{\infty} x e^{-x} dx$
We use integration by parts: $\int u dv = uv - \int v du$.
Let $u = x$, so $du = dx$.
Let $dv = e^{-x} dx$, so $v = -e^{-x}$.
$E(X) = [-xe^{-x}]_0^\infty - \int_{0}^{\infty} (-e^{-x}) dx$
$E(X) = \lim_{b \to \infty} (-be^{-b} - 0) + \int_{0}^{\infty} e^{-x} dx$
As $b \to \infty$, $be^{-b} \to 0$ (by L'Hopital's rule on $b/e^b$).
$E(X) = 0 + [-e^{-x}]_0^\infty = \lim_{b \to \infty} (-e^{-b} - (-e^0)) = 0 - (-1) = 1$.
So, $E(X) = 1$.

**Variance ($Var(X)$):**
First, calculate $E(X^2)$:
$E(X^2) = \int_{0}^{\infty} x^2 e^{-x} dx$
Again, use integration by parts.
Let $u = x^2$, so $du = 2x dx$.
Let $dv = e^{-x} dx$, so $v = -e^{-x}$.
$E(X^2) = [-x^2e^{-x}]_0^\infty - \int_{0}^{\infty} (-e^{-x})(2x) dx$
$E(X^2) = \lim_{b \to \infty} (-b^2e^{-b} - 0) + 2 \int_{0}^{\infty} x e^{-x} dx$
$b^2e^{-b} \to 0$ as $b \to \infty$. The integral $\int_{0}^{\infty} x e^{-x} dx$ is exactly $E(X)$, which we found to be 1.
$E(X^2) = 0 + 2(1) = 2$.

Now, calculate the variance:
$Var(X) = E(X^2) - [E(X)]^2 = 2 - (1)^2 = 2 - 1 = 1$.

**Answer for Question 2.2:** Mean $E(X) = 1$, Variance $Var(X) = 1$.
(This is the Exponential distribution with rate $\lambda=1$, which has mean $1/\lambda = 1$ and variance $1/\lambda^2 = 1$).

---

**Answer 2.3:**
Given $E(X) = 5$, $Var(X) = 2$, $E(Y) = 3$, $Var(Y) = 1$, and $X, Y$ are independent.

a) $E(2X + 1)$:
$E(2X + 1) = 2E(X) + 1 = 2(5) + 1 = 10 + 1 = 11$.

b) $Var(2X + 1)$:
$Var(2X + 1) = 2^2 Var(X) = 4 \times 2 = 8$.

c) $E(X - Y)$:
$E(X - Y) = E(X) - E(Y) = 5 - 3 = 2$.

d) $Var(X - Y)$:
Since $X$ and $Y$ are independent:
$Var(X - Y) = Var(X) + Var(Y) = 2 + 1 = 3$.

e) $E(XY)$:
Since $X$ and $Y$ are independent:
$E(XY) = E(X)E(Y) = 5 \times 3 = 15$.

f) $Var(X + Y)$:
Since $X$ and $Y$ are independent:
$Var(X + Y) = Var(X) + Var(Y) = 2 + 1 = 3$.

---

### Alignment with Course Outcomes

This topic directly contributes to the following Course Outcomes:

*   **CO2: Understand the concept, properties and important models of continuous random variables and to apply in suitable random phenomena.**
    *   This topic covers the fundamental concepts of mean and variance for continuous random variables, which are essential for understanding their properties and for applying them to model real-world phenomena in physical science. The calculations and properties of mean and variance are demonstrated with examples.
    *   Knowledge Level: K3 (Applying knowledge) is demonstrated through calculating mean and variance and using properties.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
