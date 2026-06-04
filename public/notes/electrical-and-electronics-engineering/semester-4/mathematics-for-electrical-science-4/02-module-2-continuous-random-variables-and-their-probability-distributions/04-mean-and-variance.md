---
title: "Mean and variance"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35da0"
status: "completed"
scrapedAt: "2026-05-23T16:16:54.934Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Mean and Variance

This topic focuses on understanding and calculating the central tendency and spread of continuous random variables, crucial for analyzing various electrical phenomena modeled probabilistically.

**Learning Outcomes Covered:**

*   Understand the concept and properties of the mean of a continuous random variable.
*   Understand the concept and properties of the variance of a continuous random variable.
*   Apply these concepts to analyze and interpret the behavior of continuous random variables in electrical science contexts.

**Course Outcomes Alignment:**

*   **CO2: Understand the concept, properties and important models of continuous random variables and to apply in suitable random phenomena. (Knowledge Level: K3)** This topic directly addresses the understanding and application of fundamental statistical measures (mean and variance) for continuous random variables, which are essential for modeling and analyzing electrical phenomena.

---

### 1. Introduction to Mean and Variance for Continuous Random Variables

In Module 1, we introduced discrete random variables and their probability mass functions (PMFs). Now, we extend these concepts to **continuous random variables (CRVs)**, which can take any value within a given range. For CRVs, we use probability density functions (PDFs) to describe the probability distribution.

The **mean (or expected value)** provides a measure of the central location of a continuous random variable, representing the average value we would expect to observe over many trials.

The **variance** quantifies the spread or dispersion of the random variable around its mean. A higher variance indicates a greater spread of values, while a lower variance suggests that the values are clustered more closely around the mean.

---

### 2. Mean (Expected Value) of a Continuous Random Variable

#### Definition:

For a continuous random variable $X$ with probability density function $f(x)$, the **mean** or **expected value**, denoted by $E(X)$ or $\mu$, is defined as:

$$ E(X) = \mu = \int_{-\infty}^{\infty} x f(x) dx $$

**Explanation:**

*   This definition is analogous to the sum in the discrete case, where we multiply each possible value by its probability. Here, we integrate the product of the value ($x$) and its corresponding probability density ($f(x)$) over all possible values of $X$.
*   The integral sums up the "weighted average" of all possible values, where the weights are given by the PDF.

**Properties of Expectation:**

*   **Linearity of Expectation:** For any constants $a$ and $b$, and any random variable $X$:
    *   $E(aX) = aE(X)$
    *   $E(aX + b) = aE(X) + b$
*   **Expectation of a Sum of Random Variables:** For random variables $X_1, X_2, ..., X_n$:
    *   $E(X_1 + X_2 + ... + X_n) = E(X_1) + E(X_2) + ... + E(X_n)$ (This holds regardless of whether the variables are independent).

#### Example: Exponential Distribution

The exponential distribution is commonly used to model the time until an event occurs, such as the lifetime of a component or the time between arrivals of packets in a communication system. Its PDF is given by:

$$ f(x; \lambda) = \begin{cases} \lambda e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases} $$

where $\lambda > 0$ is the rate parameter.

Let's calculate the mean of an exponential random variable $X$:

$$ E(X) = \int_{-\infty}^{\infty} x f(x) dx = \int_{0}^{\infty} x (\lambda e^{-\lambda x}) dx $$

To solve this integral, we can use integration by parts: $\int u dv = uv - \int v du$.
Let $u = x$ and $dv = \lambda e^{-\lambda x} dx$.
Then $du = dx$ and $v = \int \lambda e^{-\lambda x} dx = -e^{-\lambda x}$.

$$ E(X) = \left[ x (-e^{-\lambda x}) \right]_0^\infty - \int_{0}^{\infty} (-e^{-\lambda x}) dx $$
$$ E(X) = \left[ -x e^{-\lambda x} \right]_0^\infty + \int_{0}^{\infty} e^{-\lambda x} dx $$

The first term, $\lim_{x \to \infty} (-x e^{-\lambda x})$, is 0 (since the exponential decay dominates the linear growth). At $x=0$, the term is $0 \cdot e^0 = 0$. So, the first term is 0.

The second term is:
$$ \int_{0}^{\infty} e^{-\lambda x} dx = \left[ \frac{e^{-\lambda x}}{-\lambda} \right]_0^\infty = \left( \frac{e^{-\infty}}{-\lambda} \right) - \left( \frac{e^{0}}{-\lambda} \right) = 0 - \left( \frac{1}{-\lambda} \right) = \frac{1}{\lambda} $$

Therefore, the mean of an exponential distribution is $E(X) = \frac{1}{\lambda}$.

**Key Takeaway from Devore (Chapter 4, Section 4.2):** The expected value of a continuous random variable is analogous to the weighted average of possible values, with weights determined by the probability density function.

---

### 3. Variance of a Continuous Random Variable

#### Definition:

The **variance** of a continuous random variable $X$, denoted by $Var(X)$ or $\sigma^2$, measures the spread of the distribution around its mean. It is defined as the expected value of the squared difference between $X$ and its mean $\mu$:

$$ Var(X) = \sigma^2 = E[(X - \mu)^2] = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) dx $$

**Alternative Formula for Variance:**

A more computationally convenient formula for variance is:

$$ Var(X) = E(X^2) - [E(X)]^2 = \sigma^2 $$

where $E(X^2)$ is the expected value of $X^2$, calculated as:

$$ E(X^2) = \int_{-\infty}^{\infty} x^2 f(x) dx $$

**Standard Deviation:**

The **standard deviation**, denoted by $\sigma$, is the square root of the variance:

$$ \sigma = \sqrt{Var(X)} = \sqrt{\sigma^2} $$

The standard deviation has the same units as the random variable and provides a more direct measure of spread.

**Properties of Variance:**

*   $Var(aX) = a^2 Var(X)$ for a constant $a$.
*   $Var(X + b) = Var(X)$ for a constant $b$.
*   $Var(aX + b) = a^2 Var(X)$ for constants $a$ and $b$.
*   If $X_1, X_2, ..., X_n$ are independent random variables, then $Var(X_1 + X_2 + ... + X_n) = Var(X_1) + Var(X_2) + ... + Var(X_n)$.

#### Example: Exponential Distribution (Continued)

Let's calculate the variance of the exponential distribution with PDF $f(x) = \lambda e^{-\lambda x}$ for $x \ge 0$. We already know $E(X) = \frac{1}{\lambda}$.

We need to calculate $E(X^2)$:

$$ E(X^2) = \int_{0}^{\infty} x^2 (\lambda e^{-\lambda x}) dx $$

Again, we use integration by parts. Let $u = x^2$ and $dv = \lambda e^{-\lambda x} dx$.
Then $du = 2x dx$ and $v = -e^{-\lambda x}$.

$$ E(X^2) = \left[ x^2 (-e^{-\lambda x}) \right]_0^\infty - \int_{0}^{\infty} (-e^{-\lambda x}) (2x dx) $$
$$ E(X^2) = \left[ -x^2 e^{-\lambda x} \right]_0^\infty + 2 \int_{0}^{\infty} x e^{-\lambda x} dx $$

The first term $\left[ -x^2 e^{-\lambda x} \right]_0^\infty$ evaluates to 0 (limit as $x \to \infty$ is 0, and at $x=0$ it's 0).

The integral $\int_{0}^{\infty} x e^{-\lambda x} dx$ is the integral we solved to find $E(X)$, but missing the $\lambda$ factor. Let's re-evaluate it:

$$ \int_{0}^{\infty} x e^{-\lambda x} dx $$
Let $u = x$, $dv = e^{-\lambda x} dx$.
$du = dx$, $v = -\frac{1}{\lambda} e^{-\lambda x}$.

$$ \left[ x (-\frac{1}{\lambda} e^{-\lambda x}) \right]_0^\infty - \int_{0}^{\infty} (-\frac{1}{\lambda} e^{-\lambda x}) dx $$
$$ \left[ -\frac{x}{\lambda} e^{-\lambda x} \right]_0^\infty + \frac{1}{\lambda} \int_{0}^{\infty} e^{-\lambda x} dx $$
The first term is 0. The second integral is $\frac{1}{\lambda^2}$ (from our previous calculation of $\int_{0}^{\infty} e^{-\lambda x} dx = \frac{1}{\lambda}$).

So, $\int_{0}^{\infty} x e^{-\lambda x} dx = \frac{1}{\lambda^2}$.

Substituting this back into the expression for $E(X^2)$:

$$ E(X^2) = 0 + 2 \left( \frac{1}{\lambda^2} \right) = \frac{2}{\lambda^2} $$

Now, we can calculate the variance using the alternative formula:

$$ Var(X) = E(X^2) - [E(X)]^2 $$
$$ Var(X) = \frac{2}{\lambda^2} - \left( \frac{1}{\lambda} \right)^2 $$
$$ Var(X) = \frac{2}{\lambda^2} - \frac{1}{\lambda^2} = \frac{1}{\lambda^2} $$

The standard deviation is $\sigma = \sqrt{\frac{1}{\lambda^2}} = \frac{1}{\lambda}$.

**Key Takeaway from Devore (Chapter 4, Section 4.3):** The variance measures the spread by averaging the squared deviations from the mean, and the alternative formula $E(X^2) - [E(X)]^2$ simplifies calculations.

---

### 4. Expected Value of a Function of a Continuous Random Variable

The **Law of the Unconscious Statistician (LOTUS)** states that for a continuous random variable $X$ with PDF $f(x)$, and a function $h(x)$:

$$ E[h(X)] = \int_{-\infty}^{\infty} h(x) f(x) dx $$

This means we don't need to find the PDF of $Y = h(X)$ to calculate its expected value. We can directly compute it using the PDF of $X$.

**Example:** For the exponential distribution, let's find the expected value of $Y = X^2$. Using LOTUS:

$$ E(X^2) = \int_{0}^{\infty} x^2 (\lambda e^{-\lambda x}) dx $$
We already calculated this integral and found $E(X^2) = \frac{2}{\lambda^2}$.

---

### 5. Application in Electrical Science

**Example 1: Signal Amplitude**

Consider the amplitude $A$ of a random signal, modeled by a uniform distribution over the interval $[0, V_{max}]$. The PDF is:

$$ f(a) = \begin{cases} \frac{1}{V_{max}} & 0 \le a \le V_{max} \\ 0 & \text{otherwise} \end{cases} $$

**Calculate the mean amplitude:**

$$ E(A) = \int_{0}^{V_{max}} a \left( \frac{1}{V_{max}} \right) da = \frac{1}{V_{max}} \int_{0}^{V_{max}} a da $$
$$ E(A) = \frac{1}{V_{max}} \left[ \frac{a^2}{2} \right]_0^{V_{max}} = \frac{1}{V_{max}} \left( \frac{V_{max}^2}{2} - 0 \right) = \frac{V_{max}}{2} $$
The average amplitude is half the maximum possible amplitude.

**Calculate the variance of the amplitude:**

First, find $E(A^2)$:
$$ E(A^2) = \int_{0}^{V_{max}} a^2 \left( \frac{1}{V_{max}} \right) da = \frac{1}{V_{max}} \int_{0}^{V_{max}} a^2 da $$
$$ E(A^2) = \frac{1}{V_{max}} \left[ \frac{a^3}{3} \right]_0^{V_{max}} = \frac{1}{V_{max}} \left( \frac{V_{max}^3}{3} - 0 \right) = \frac{V_{max}^2}{3} $$

Now, calculate the variance:
$$ Var(A) = E(A^2) - [E(A)]^2 = \frac{V_{max}^2}{3} - \left( \frac{V_{max}}{2} \right)^2 $$
$$ Var(A) = \frac{V_{max}^2}{3} - \frac{V_{max}^2}{4} = \left( \frac{4 - 3}{12} \right) V_{max}^2 = \frac{V_{max}^2}{12} $$

The standard deviation is $\sigma_A = \sqrt{\frac{V_{max}^2}{12}} = \frac{V_{max}}{2\sqrt{3}}$.

This tells us that the amplitude of the signal is centered at $V_{max}/2$ and has a spread of $\frac{V_{max}}{2\sqrt{3}}$.

**Example 2: Noise Voltage**

Consider a noise voltage $N$ in a circuit, modeled by a normal distribution with mean 0 and variance $\sigma^2$. The PDF is:

$$ f(n) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(n-0)^2}{2\sigma^2}} = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{n^2}{2\sigma^2}} $$

For a normal distribution, the mean is indeed $E(N) = 0$ and the variance is $Var(N) = \sigma^2$. (These properties are usually stated for the normal distribution and can be derived using integration, though they are more complex than the previous examples).

If we have a signal $S$ and add noise $N$ to it, resulting in $Y = S + N$. If $S$ is a constant, say $s_0$, then:
$E(Y) = E(s_0 + N) = s_0 + E(N) = s_0 + 0 = s_0$.
$Var(Y) = Var(s_0 + N) = Var(N) = \sigma^2$.

If $S$ is also a random variable, and $S$ and $N$ are independent:
$E(Y) = E(S + N) = E(S) + E(N)$.
$Var(Y) = Var(S + N) = Var(S) + Var(N)$.

This demonstrates how mean and variance are used to analyze signal corruption by noise.

**Key Takeaway from Veerarajan (Chapter 6, Section 6.3):** The mean and variance provide crucial statistical descriptors for continuous random variables, enabling analysis of signal characteristics, noise effects, and system performance.

---

### 6. Practice Questions and Exercises

**Question 1:**
A continuous random variable $X$ has the probability density function:
$$ f(x) = \begin{cases} 2x & 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases} $$
Calculate the mean ($E(X)$) and variance ($Var(X)$) of $X$.

**Answer 1:**
*   **Mean ($E(X)$):**
    $$ E(X) = \int_{0}^{1} x (2x) dx = \int_{0}^{1} 2x^2 dx = 2 \left[ \frac{x^3}{3} \right]_0^1 = 2 \left( \frac{1}{3} - 0 \right) = \frac{2}{3} $$
*   **Variance ($Var(X)$):**
    First, calculate $E(X^2)$:
    $$ E(X^2) = \int_{0}^{1} x^2 (2x) dx = \int_{0}^{1} 2x^3 dx = 2 \left[ \frac{x^4}{4} \right]_0^1 = 2 \left( \frac{1}{4} - 0 \right) = \frac{1}{2} $$
    Now, calculate the variance:
    $$ Var(X) = E(X^2) - [E(X)]^2 = \frac{1}{2} - \left( \frac{2}{3} \right)^2 = \frac{1}{2} - \frac{4}{9} = \frac{9 - 8}{18} = \frac{1}{18} $$

**Question 2:**
The time $T$ (in hours) a certain electronic device operates before failing is exponentially distributed with a mean of 500 hours.
a) What is the rate parameter $\lambda$ for this distribution?
b) What is the variance of the operating time?
c) What is the probability that the device operates for more than 1000 hours?

**Answer 2:**
We know that for an exponential distribution, $E(T) = \frac{1}{\lambda}$.
a) Given $E(T) = 500$ hours, so $\frac{1}{\lambda} = 500 \implies \lambda = \frac{1}{500}$ failures per hour.
b) The variance of an exponential distribution is $Var(T) = \frac{1}{\lambda^2}$.
   $Var(T) = \frac{1}{(\frac{1}{500})^2} = 500^2 = 250000$ hours$^2$.
c) The PDF is $f(t) = \frac{1}{500} e^{-\frac{1}{500} t}$ for $t \ge 0$.
   The probability of operating for more than 1000 hours is $P(T > 1000)$:
   $$ P(T > 1000) = \int_{1000}^{\infty} \frac{1}{500} e^{-\frac{1}{500} t} dt $$
   $$ P(T > 1000) = \left[ -e^{-\frac{1}{500} t} \right]_{1000}^{\infty} = (0) - (-e^{-\frac{1000}{500}}) = e^{-2} $$
   $e^{-2} \approx 0.1353$.

**Question 3:**
Let $X$ be a random variable with $E(X) = 5$ and $Var(X) = 4$. Find $E(3X + 2)$ and $Var(3X + 2)$.

**Answer 3:**
Using the properties of expectation and variance:
*   $E(3X + 2) = 3E(X) + 2 = 3(5) + 2 = 15 + 2 = 17$.
*   $Var(3X + 2) = 3^2 Var(X) = 9 \times 4 = 36$.

---

### 7. Important Points to Remember

*   **Mean ($\mu$ or $E(X)$):** The average value of a continuous random variable, calculated by $\int_{-\infty}^{\infty} x f(x) dx$. It represents the center of the distribution.
*   **Variance ($\sigma^2$ or $Var(X)$):** A measure of the spread or dispersion of the random variable around its mean, calculated by $\int_{-\infty}^{\infty} (x - \mu)^2 f(x) dx$ or $E(X^2) - [E(X)]^2$.
*   **Standard Deviation ($\sigma$):** The square root of the variance, providing a measure of spread in the same units as the random variable.
*   **LOTUS:** $E[h(X)] = \int_{-\infty}^{\infty} h(x) f(x) dx$. This is a powerful tool for finding the expected value of functions of a random variable without explicitly finding the transformed variable's PDF.
*   **Properties of Expectation:** Linearity ($E(aX+b) = aE(X)+b$) is crucial.
*   **Properties of Variance:** $Var(aX+b) = a^2 Var(X)$. Independence is required for $Var(X+Y) = Var(X)+Var(Y)$.
*   These measures are fundamental for understanding and predicting the behavior of random phenomena in electrical systems, such as signal amplitudes, noise levels, and component lifetimes.

---
