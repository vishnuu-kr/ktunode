---
title: "Mean and variance"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81092b"
status: "completed"
scrapedAt: "2026-05-20T18:46:02.350Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Mean and Variance

---

### Introduction

In the realm of continuous random variables, understanding their central tendency and spread is crucial. This topic delves into the concepts of **Mean (Expected Value)** and **Variance**, which are fundamental statistical measures used to characterize probability distributions. These measures provide valuable insights into the average behavior and variability of a continuous random phenomenon.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Define** the expected value (mean) of a continuous random variable.
*   **Calculate** the expected value of a continuous random variable using its probability density function (PDF).
*   **Define** the variance of a continuous random variable.
*   **Calculate** the variance of a continuous random variable using its PDF and expected value.
*   **Understand** the interpretation of the mean and variance in the context of physical science applications.
*   **Apply** the properties of expectation and variance to simplify calculations.

---

### 1. The Mean (Expected Value) of a Continuous Random Variable

The **mean**, also known as the **expected value**, of a continuous random variable represents the average value of the random variable over many repetitions of the experiment. It's the weighted average of all possible values the random variable can take, where the weights are given by the probability density function (PDF).

#### Definition

For a continuous random variable $X$ with probability density function (PDF) $f(x)$, the expected value (mean), denoted by $E[X]$ or $\mu$, is defined as:

$$E[X] = \mu = \int_{-\infty}^{\infty} x f(x) dx$$

**Explanation:**

*   The integral sums up the product of each possible value ($x$) and its corresponding probability density ($f(x)$) over the entire range of possible values.
*   The integral is taken from $-\infty$ to $\infty$ to cover all possible real values. In practical scenarios, the limits of integration will correspond to the support of the random variable (the range where $f(x) > 0$).

#### Key Concepts and Properties of Expectation

*   **Linearity of Expectation:** For any constants $a$ and $b$, and any random variables $X$ and $Y$:
    *   $E[aX] = aE[X]$
    *   $E[X+b] = E[X] + b$
    *   $E[aX + b] = aE[X] + b$
    *   $E[X+Y] = E[X] + E[Y]$ (This holds regardless of whether $X$ and $Y$ are independent).

*   **Expectation of a function of a random variable:** If $Y = g(X)$ is a function of a continuous random variable $X$, then the expected value of $Y$ is given by:
    $$E[Y] = E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) dx$$

#### Example 1: Uniform Distribution

Let $X$ be a continuous random variable uniformly distributed over the interval $[a, b]$. Its PDF is given by:
$$f(x) = \begin{cases} \frac{1}{b-a} & \text{if } a \le x \le b \\ 0 & \text{otherwise} \end{cases}$$

**Calculate the expected value of $X$.**

**Solution:**
Using the definition of expected value:
$$E[X] = \int_{-\infty}^{\infty} x f(x) dx$$
Since $f(x)$ is non-zero only between $a$ and $b$:
$$E[X] = \int_{a}^{b} x \left(\frac{1}{b-a}\right) dx$$
$$E[X] = \frac{1}{b-a} \int_{a}^{b} x dx$$
$$E[X] = \frac{1}{b-a} \left[ \frac{x^2}{2} \right]_{a}^{b}$$
$$E[X] = \frac{1}{b-a} \left( \frac{b^2}{2} - \frac{a^2}{2} \right)$$
$$E[X] = \frac{1}{b-a} \left( \frac{(b-a)(b+a)}{2} \right)$$
$$E[X] = \frac{a+b}{2}$$

**Interpretation:** The mean of a uniform distribution is the midpoint of the interval, which makes intuitive sense.

#### Example 2: Exponential Distribution

Let $X$ be a continuous random variable with an exponential distribution with rate parameter $\lambda > 0$. Its PDF is given by:
$$f(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{otherwise} \end{cases}$$

**Calculate the expected value of $X$.**

**Solution:**
$$E[X] = \int_{-\infty}^{\infty} x f(x) dx$$
$$E[X] = \int_{0}^{\infty} x (\lambda e^{-\lambda x}) dx$$
We can solve this integral using integration by parts ($\int u dv = uv - \int v du$).
Let $u = x$ and $dv = \lambda e^{-\lambda x} dx$.
Then $du = dx$ and $v = \int \lambda e^{-\lambda x} dx = -e^{-\lambda x}$.

$$E[X] = \left[ x (-e^{-\lambda x}) \right]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-\lambda x}) dx$$
$$E[X] = \left[ -x e^{-\lambda x} \right]_{0}^{\infty} + \int_{0}^{\infty} e^{-\lambda x} dx$$

Evaluate the first term:
As $x \to \infty$, $-x e^{-\lambda x} \to 0$ (because the exponential term goes to zero much faster than $x$ goes to infinity).
At $x=0$, $-0 \cdot e^0 = 0$.
So, $\left[ -x e^{-\lambda x} \right]_{0}^{\infty} = 0 - 0 = 0$.

Evaluate the second term:
$$\int_{0}^{\infty} e^{-\lambda x} dx = \left[ \frac{e^{-\lambda x}}{-\lambda} \right]_{0}^{\infty}$$
$$= \left( \frac{e^{-\infty}}{-\lambda} \right) - \left( \frac{e^0}{-\lambda} \right)$$
$$= 0 - \left( \frac{1}{-\lambda} \right) = \frac{1}{\lambda}$$

Therefore, $E[X] = 0 + \frac{1}{\lambda} = \frac{1}{\lambda}$.

**Interpretation:** The mean of an exponential distribution represents the average time until an event occurs.

---

### 2. The Variance of a Continuous Random Variable

The **variance** of a continuous random variable measures the spread or dispersion of the random variable around its mean. A high variance indicates that the values are spread out over a wide range, while a low variance indicates that the values are clustered closely around the mean.

#### Definition

For a continuous random variable $X$ with expected value $E[X] = \mu$, the variance, denoted by $Var(X)$ or $\sigma^2$, is defined as the expected value of the squared deviation from the mean:

$$Var(X) = \sigma^2 = E[(X - \mu)^2]$$

This can also be calculated using the formula:

$$Var(X) = E[X^2] - (E[X])^2$$

**Explanation:**

*   The term $(X - \mu)^2$ represents the squared difference between a random outcome $X$ and its mean $\mu$. This squared difference is always non-negative.
*   The expected value of this squared difference gives us the average squared deviation from the mean.
*   The second formula ($E[X^2] - (E[X])^2$) is often easier to compute, as it involves calculating the expected value of $X$ and the expected value of $X^2$.

The **standard deviation**, denoted by $\sigma$, is the square root of the variance: $\sigma = \sqrt{Var(X)}$. It is often preferred because it has the same units as the random variable itself.

#### Key Concepts and Properties of Variance

*   **Variance of a constant:** $Var(c) = 0$ for any constant $c$.
*   **Variance of a scaled random variable:** $Var(aX) = a^2 Var(X)$ for any constant $a$.
*   **Variance of a shifted random variable:** $Var(X + b) = Var(X)$ for any constant $b$.
*   **Variance of a linear transformation:** $Var(aX + b) = a^2 Var(X)$.
*   **Variance of the sum of independent random variables:** If $X$ and $Y$ are independent random variables, then $Var(X+Y) = Var(X) + Var(Y)$.

#### Calculating $E[X^2]$

To use the formula $Var(X) = E[X^2] - (E[X])^2$, we need to calculate $E[X^2]$. Using the expectation of a function of a random variable, where $g(X) = X^2$:

$$E[X^2] = \int_{-\infty}^{\infty} x^2 f(x) dx$$

#### Example 3: Uniform Distribution (Continued)

For a uniform distribution over $[a, b]$, with $E[X] = \frac{a+b}{2}$.

**Calculate the variance of $X$.**

**Solution:**
First, we need to calculate $E[X^2]$:
$$E[X^2] = \int_{a}^{b} x^2 \left(\frac{1}{b-a}\right) dx$$
$$E[X^2] = \frac{1}{b-a} \int_{a}^{b} x^2 dx$$
$$E[X^2] = \frac{1}{b-a} \left[ \frac{x^3}{3} \right]_{a}^{b}$$
$$E[X^2] = \frac{1}{b-a} \left( \frac{b^3}{3} - \frac{a^3}{3} \right)$$
$$E[X^2] = \frac{b^3 - a^3}{3(b-a)}$$
Using the difference of cubes formula ($b^3 - a^3 = (b-a)(b^2 + ab + a^2)$):
$$E[X^2] = \frac{(b-a)(b^2 + ab + a^2)}{3(b-a)}$$
$$E[X^2] = \frac{a^2 + ab + b^2}{3}$$

Now, use the variance formula:
$$Var(X) = E[X^2] - (E[X])^2$$
$$Var(X) = \frac{a^2 + ab + b^2}{3} - \left(\frac{a+b}{2}\right)^2$$
$$Var(X) = \frac{a^2 + ab + b^2}{3} - \frac{a^2 + 2ab + b^2}{4}$$
To subtract these fractions, find a common denominator (12):
$$Var(X) = \frac{4(a^2 + ab + b^2) - 3(a^2 + 2ab + b^2)}{12}$$
$$Var(X) = \frac{4a^2 + 4ab + 4b^2 - 3a^2 - 6ab - 3b^2}{12}$$
$$Var(X) = \frac{a^2 - 2ab + b^2}{12}$$
$$Var(X) = \frac{(b-a)^2}{12}$$

**Interpretation:** The variance of a uniform distribution is proportional to the square of the length of the interval.

#### Example 4: Exponential Distribution (Continued)

For an exponential distribution with rate $\lambda$, $E[X] = \frac{1}{\lambda}$.

**Calculate the variance of $X$.**

**Solution:**
First, we need to calculate $E[X^2]$:
$$E[X^2] = \int_{0}^{\infty} x^2 (\lambda e^{-\lambda x}) dx$$
Again, we use integration by parts.
Let $u = x^2$ and $dv = \lambda e^{-\lambda x} dx$.
Then $du = 2x dx$ and $v = -e^{-\lambda x}$.

$$E[X^2] = \left[ x^2 (-e^{-\lambda x}) \right]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-\lambda x}) (2x dx)$$
$$E[X^2] = \left[ -x^2 e^{-\lambda x} \right]_{0}^{\infty} + 2 \int_{0}^{\infty} x e^{-\lambda x} dx$$

Evaluate the first term:
As $x \to \infty$, $-x^2 e^{-\lambda x} \to 0$ (exponential decay dominates polynomial growth).
At $x=0$, $-0^2 e^0 = 0$.
So, $\left[ -x^2 e^{-\lambda x} \right]_{0}^{\infty} = 0 - 0 = 0$.

Now, we need to evaluate the integral in the second term: $2 \int_{0}^{\infty} x e^{-\lambda x} dx$.
Notice that $\int_{0}^{\infty} x e^{-\lambda x} dx$ is exactly $E[X]$ for the exponential distribution, which we calculated to be $\frac{1}{\lambda}$.

Therefore, $E[X^2] = 0 + 2 \left( \frac{1}{\lambda} \right) = \frac{2}{\lambda}$.

Now, use the variance formula:
$$Var(X) = E[X^2] - (E[X])^2$$
$$Var(X) = \frac{2}{\lambda} - \left(\frac{1}{\lambda}\right)^2$$
$$Var(X) = \frac{2}{\lambda} - \frac{1}{\lambda^2}$$
$$Var(X) = \frac{2\lambda - 1}{\lambda^2}$$

**Wait, there was a mistake in the integration for $E[X^2]$!** Let's re-do it carefully.
The integral $2 \int_{0}^{\infty} x e^{-\lambda x} dx$ is correct as $2 E[X]$.
However, let's re-evaluate the $E[X]$ calculation itself to ensure accuracy.
$E[X] = \int_{0}^{\infty} x (\lambda e^{-\lambda x}) dx = \lambda \int_{0}^{\infty} x e^{-\lambda x} dx$
Using integration by parts: $u=x, dv=\lambda e^{-\lambda x} dx \implies du=dx, v=-e^{-\lambda x}$
$E[X] = \lambda \left[ -x e^{-\lambda x} \right]_0^\infty - \lambda \int_0^\infty (-e^{-\lambda x}) dx$
$E[X] = \lambda (0 - 0) + \lambda \int_0^\infty e^{-\lambda x} dx$
$E[X] = \lambda \left[ \frac{e^{-\lambda x}}{-\lambda} \right]_0^\infty = \lambda \left( 0 - \frac{1}{-\lambda} \right) = \lambda \left( \frac{1}{\lambda} \right) = 1$.

**Correction:** The expected value of an exponential distribution with parameter $\lambda$ is $1/\lambda$. My initial calculation was correct.

Let's retry $E[X^2]$ for the exponential distribution.
$$E[X^2] = \int_{0}^{\infty} x^2 (\lambda e^{-\lambda x}) dx$$
Using integration by parts twice:
First integration by parts: $u = x^2$, $dv = \lambda e^{-\lambda x} dx \implies du = 2x dx$, $v = -e^{-\lambda x}$.
$$E[X^2] = [-x^2 e^{-\lambda x}]_0^\infty - \int_0^\infty (-e^{-\lambda x}) (2x dx)$$
$$E[X^2] = 0 + 2 \int_0^\infty x e^{-\lambda x} dx$$
Now, we need to evaluate $\int_0^\infty x e^{-\lambda x} dx$. Let's use integration by parts again.
Let $u = x$, $dv = e^{-\lambda x} dx \implies du = dx$, $v = -\frac{1}{\lambda} e^{-\lambda x}$.
$$\int_0^\infty x e^{-\lambda x} dx = \left[ x \left(-\frac{1}{\lambda} e^{-\lambda x}\right) \right]_0^\infty - \int_0^\infty \left(-\frac{1}{\lambda} e^{-\lambda x}\right) dx$$
$$= \left[ -\frac{x}{\lambda} e^{-\lambda x} \right]_0^\infty + \frac{1}{\lambda} \int_0^\infty e^{-\lambda x} dx$$
$$= (0 - 0) + \frac{1}{\lambda} \left[ \frac{e^{-\lambda x}}{-\lambda} \right]_0^\infty$$
$$= \frac{1}{\lambda} \left( 0 - \frac{1}{-\lambda} \right) = \frac{1}{\lambda} \left( \frac{1}{\lambda} \right) = \frac{1}{\lambda^2}$$

So, $E[X^2] = 2 \times \left( \frac{1}{\lambda^2} \right) = \frac{2}{\lambda^2}$.

Now, calculate the variance:
$$Var(X) = E[X^2] - (E[X])^2$$
$$Var(X) = \frac{2}{\lambda^2} - \left(\frac{1}{\lambda}\right)^2$$
$$Var(X) = \frac{2}{\lambda^2} - \frac{1}{\lambda^2}$$
$$Var(X) = \frac{1}{\lambda^2}$$

**Interpretation:** The variance of an exponential distribution is equal to the square of its mean.

#### Example 5: Variance of a Linear Transformation

Let $X$ be a continuous random variable with $E[X] = 5$ and $Var(X) = 10$.
Find $Var(2X + 3)$.

**Solution:**
Using the property $Var(aX + b) = a^2 Var(X)$:
Here, $a=2$ and $b=3$.
$Var(2X + 3) = 2^2 Var(X)$
$Var(2X + 3) = 4 \times 10$
$Var(2X + 3) = 40$

---

### 3. Interpretation in Physical Science

The mean and variance are indispensable tools in physical science for several reasons:

*   **Mean (Expected Value):**
    *   **Central Tendency:** Represents the average outcome of a physical process. For example, the average lifespan of a particle, the average temperature of a system, or the average velocity of molecules.
    *   **Predictive Power:** Provides a central prediction for the value of a random phenomenon.
    *   **Parameter Estimation:** In experiments, the sample mean is used to estimate the true mean of a distribution.

*   **Variance (and Standard Deviation):**
    *   **Spread and Uncertainty:** Quantifies the variability or "noise" in measurements or outcomes. A high variance in experimental data might indicate significant fluctuations or experimental errors.
    *   **Precision and Reliability:** A low variance suggests that the outcomes are consistently close to the mean, indicating higher precision.
    *   **System Stability:** In dynamic systems, variance can indicate the degree of fluctuation around an equilibrium state. A stable system might have low variance.
    *   **Risk Assessment:** In fields like finance or engineering, variance is used to assess the risk associated with unpredictable outcomes.

#### Physical Science Applications

*   **Particle Physics:** The mean of a particle's decay time follows an exponential distribution. The variance tells us how spread out these decay times are.
*   **Thermodynamics:** The distribution of molecular speeds can be described by probability distributions. The mean speed and the variance of speeds provide information about the thermal energy and the distribution of kinetic energies.
*   **Signal Processing:** Noise in a signal can be modeled as a random variable. The mean of the noise might be zero, but its variance indicates the signal-to-noise ratio.
*   **Materials Science:** The strength of materials might follow a distribution. The mean strength gives the average load a material can withstand, and the variance indicates the reliability of its performance.

---

### Practice Questions/Exercises

1.  A continuous random variable $X$ has the PDF:
    $$f(x) = \begin{cases} 2x & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$$
    Calculate the expected value ($E[X]$) and the variance ($Var(X)$) of $X$.

2.  Let $Y$ be a continuous random variable with PDF:
    $$f(y) = \begin{cases} e^{-y} & \text{if } y \ge 0 \\ 0 & \text{otherwise} \end{cases}$$
    (This is an exponential distribution with $\lambda=1$).
    Calculate $E[Y]$ and $Var(Y)$.

3.  Consider the random variable $X$ from Question 1. Calculate the expected value of $g(X) = X^2$. Does this match $E[X^2]$ from your variance calculation?

4.  If $Z$ is a random variable with $E[Z] = 3$ and $Var(Z) = 5$, find:
    a) $E[4Z - 2]$
    b) $Var(4Z - 2)$

5.  A scientist is measuring the rate of a chemical reaction. The rate, $R$, is a continuous random variable with a PDF given by $f(r) = 3(1-r)^2$ for $0 \le r \le 1$, and $f(r)=0$ otherwise.
    a) Calculate the average reaction rate ($E[R]$).
    b) Calculate the variance of the reaction rate ($Var(R)$).
    c) What is the standard deviation of the reaction rate?

---

### Answers to Practice Questions/Exercises

1.  **Calculate $E[X]$:**
    $$E[X] = \int_{0}^{1} x (2x) dx = \int_{0}^{1} 2x^2 dx = 2 \left[ \frac{x^3}{3} \right]_{0}^{1} = 2 \left( \frac{1}{3} - 0 \right) = \frac{2}{3}$$

    **Calculate $Var(X)$:**
    First, calculate $E[X^2]$:
    $$E[X^2] = \int_{0}^{1} x^2 (2x) dx = \int_{0}^{1} 2x^3 dx = 2 \left[ \frac{x^4}{4} \right]_{0}^{1} = 2 \left( \frac{1}{4} - 0 \right) = \frac{1}{2}$$
    Now, use the variance formula:
    $$Var(X) = E[X^2] - (E[X])^2 = \frac{1}{2} - \left(\frac{2}{3}\right)^2 = \frac{1}{2} - \frac{4}{9} = \frac{9 - 8}{18} = \frac{1}{18}$$

2.  This is an exponential distribution with $\lambda=1$.
    $E[Y] = \frac{1}{\lambda} = \frac{1}{1} = 1$.
    $Var(Y) = \frac{1}{\lambda^2} = \frac{1}{1^2} = 1$.

3.  **Calculate $g(X) = X^2$:**
    $$E[g(X)] = E[X^2] = \int_{0}^{1} x^2 (2x) dx = \int_{0}^{1} 2x^3 dx$$
    $$E[X^2] = 2 \left[ \frac{x^4}{4} \right]_{0}^{1} = 2 \left( \frac{1}{4} - 0 \right) = \frac{1}{2}$$
    Yes, this matches the value of $E[X^2]$ calculated in Question 1.

4.  a) $E[4Z - 2] = 4E[Z] - 2 = 4(3) - 2 = 12 - 2 = 10$.
    b) $Var(4Z - 2) = 4^2 Var(Z) = 16 \times 5 = 80$.

5.  a) **Calculate $E[R]$:**
    $$E[R] = \int_{0}^{1} r [3(1-r)^2] dr = \int_{0}^{1} 3r(1 - 2r + r^2) dr$$
    $$E[R] = \int_{0}^{1} (3r - 6r^2 + 3r^3) dr$$
    $$E[R] = \left[ \frac{3r^2}{2} - \frac{6r^3}{3} + \frac{3r^4}{4} \right]_{0}^{1}$$
    $$E[R] = \left[ \frac{3r^2}{2} - 2r^3 + \frac{3r^4}{4} \right]_{0}^{1}$$
    $$E[R] = \left( \frac{3}{2} - 2 + \frac{3}{4} \right) - (0) = \frac{6 - 8 + 3}{4} = \frac{1}{4}$$
    The average reaction rate is $1/4$.

    b) **Calculate $Var(R)$:**
    First, calculate $E[R^2]$:
    $$E[R^2] = \int_{0}^{1} r^2 [3(1-r)^2] dr = \int_{0}^{1} 3r^2(1 - 2r + r^2) dr$$
    $$E[R^2] = \int_{0}^{1} (3r^2 - 6r^3 + 3r^4) dr$$
    $$E[R^2] = \left[ \frac{3r^3}{3} - \frac{6r^4}{4} + \frac{3r^5}{5} \right]_{0}^{1}$$
    $$E[R^2] = \left[ r^3 - \frac{3r^4}{2} + \frac{3r^5}{5} \right]_{0}^{1}$$
    $$E[R^2] = \left( 1 - \frac{3}{2} + \frac{3}{5} \right) - (0) = \frac{10 - 15 + 6}{10} = \frac{1}{10}$$
    Now, calculate the variance:
    $$Var(R) = E[R^2] - (E[R])^2 = \frac{1}{10} - \left(\frac{1}{4}\right)^2$$
    $$Var(R) = \frac{1}{10} - \frac{1}{16} = \frac{8 - 5}{80} = \frac{3}{80}$$
    The variance of the reaction rate is $3/80$.

    c) **Calculate the standard deviation:**
    $$\sigma_R = \sqrt{Var(R)} = \sqrt{\frac{3}{80}}$$
    $\sigma_R \approx \sqrt{0.0375} \approx 0.1936$

---

### Important Points to Remember

*   **Mean ($E[X]$):** The average value of a continuous random variable. Calculated by integrating $x f(x)$ over the variable's support.
*   **Variance ($Var(X)$):** A measure of the spread or dispersion of the random variable around its mean. Calculated as $E[(X - \mu)^2]$ or $E[X^2] - (E[X])^2$.
*   **Standard Deviation ($\sigma$):** The square root of the variance, providing a measure of spread in the same units as the random variable.
*   **Properties of Expectation and Variance:** These properties are crucial for simplifying calculations, especially for linear transformations of random variables.
*   **Interpretation is Key:** Understand what the mean and variance tell you about the physical phenomenon you are modeling. They are not just mathematical values but provide physical insights.
*   **Integration Techniques:** Be comfortable with integration, including integration by parts, as it's frequently used to compute expectations and variances.

---
