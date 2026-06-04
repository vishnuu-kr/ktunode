---
title: "Expectation"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ec0"
status: "completed"
scrapedAt: "2026-05-20T17:54:40.379Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4: Module 2 - Continuous Random Variables and Their Probability Distributions

## Topic: Expectation

This module delves into the fundamental concept of expectation for continuous random variables, a crucial tool for understanding the average behavior of random phenomena in physical science. We will build upon the concepts of probability density functions (PDFs) and cumulative distribution functions (CDFs) introduced earlier.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

1.  **Define and calculate the expected value (mean) of a continuous random variable.** This involves understanding the integral representation of expectation.
2.  **Understand and apply the properties of expectation.** This includes linearity of expectation, which is vital for analyzing sums of random variables.
3.  **Define and calculate the variance and standard deviation of a continuous random variable.** These measures quantify the spread or dispersion of the random variable around its mean.
4.  **Understand and apply the properties of variance.**
5.  **Define and calculate the expectation of a function of a continuous random variable.** This allows us to analyze the expected value of derived quantities.
6.  **Relate expectation and variance to key moments of a probability distribution.**
7.  **Recognize and apply expectation and variance for common continuous distributions relevant to physical sciences.**
8.  **Understand the conceptual link between expectation and averaging over an infinite number of trials.**

---

### 1. Introduction to Expectation for Continuous Random Variables

In Module 1, we discussed the expectation of discrete random variables as a weighted average of possible values, with weights being their probabilities. For continuous random variables, the concept is similar but involves integration due to the infinite number of possible values.

**Key Concept:** The **expected value** (or **mean**) of a continuous random variable $X$, denoted as $E(X)$ or $\mu_X$, represents the average value of $X$ over many repetitions of the random experiment.

---

#### 1.1 Definition of Expectation

Let $X$ be a continuous random variable with probability density function (PDF) $f(x)$. The expected value of $X$ is given by the integral of $x f(x)$ over the entire range of possible values of $X$:

$$E(X) = \int_{-\infty}^{\infty} x f(x) \, dx$$

**Important Note:** For the expectation to exist, the integral must converge absolutely. This means $\int_{-\infty}^{\infty} |x| f(x) \, dx < \infty$.

**Textbook Reference:** Devore (2016), Chapter 4, Section 4.1. Ross (2020), Chapter 4, Section 4.1.

---

#### 1.2 Examples of Calculating Expectation

**Example 1:** A continuous random variable $X$ has a PDF given by:
$f(x) = \begin{cases} 2x & \text{for } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$

Calculate $E(X)$.

**Solution:**
$$E(X) = \int_{-\infty}^{\infty} x f(x) \, dx$$
$$E(X) = \int_{0}^{1} x (2x) \, dx$$
$$E(X) = \int_{0}^{1} 2x^2 \, dx$$
$$E(X) = \left[ \frac{2x^3}{3} \right]_0^1$$
$$E(X) = \frac{2(1)^3}{3} - \frac{2(0)^3}{3}$$
$$E(X) = \frac{2}{3}$$

**Example 2:** Consider a random variable $Y$ representing the time to failure of a component, with an exponential PDF:
$f(y) = \lambda e^{-\lambda y}$ for $y \ge 0$, where $\lambda > 0$ is a constant.

Calculate $E(Y)$.

**Solution:**
$$E(Y) = \int_{-\infty}^{\infty} y f(y) \, dy$$
$$E(Y) = \int_{0}^{\infty} y (\lambda e^{-\lambda y}) \, dy$$
This integral can be solved using integration by parts: $\int u \, dv = uv - \int v \, du$.
Let $u = y$ and $dv = \lambda e^{-\lambda y} \, dy$.
Then $du = dy$ and $v = \int \lambda e^{-\lambda y} \, dy = -e^{-\lambda y}$.

$$E(Y) = \left[ y (-e^{-\lambda y}) \right]_0^{\infty} - \int_0^{\infty} (-e^{-\lambda y}) \, dy$$
$$E(Y) = \left[ -y e^{-\lambda y} \right]_0^{\infty} + \int_0^{\infty} e^{-\lambda y} \, dy$$

The term $\left[ -y e^{-\lambda y} \right]_0^{\infty}$:
As $y \to \infty$, $y e^{-\lambda y} \to 0$ (since exponential decay dominates polynomial growth).
At $y=0$, $-0 \cdot e^0 = 0$.
So, the first term is $0 - 0 = 0$.

Now, evaluate the second integral:
$$\int_0^{\infty} e^{-\lambda y} \, dy = \left[ \frac{e^{-\lambda y}}{-\lambda} \right]_0^{\infty}$$
$$= \left( \lim_{y \to \infty} \frac{e^{-\lambda y}}{-\lambda} \right) - \left( \frac{e^0}{-\lambda} \right)$$
$$= (0) - \left( \frac{1}{-\lambda} \right) = \frac{1}{\lambda}$$

Therefore, $E(Y) = \frac{1}{\lambda}$.

**Textbook Reference:** Devore (2016), Chapter 4, Section 4.2 (Exponential distribution). Ross (2020), Chapter 4, Section 4.2 (Exponential distribution).

---

#### 1.3 Properties of Expectation

The expectation operator $E[\cdot]$ is linear, which is a very powerful property.

**Property 1: Linearity of Expectation**
For any constants $a$ and $b$, and any continuous random variables $X$ and $Y$ (assuming their expectations exist):
$E(aX + b) = aE(X) + b$

**Property 2: Expectation of a Sum**
For any continuous random variables $X_1, X_2, \ldots, X_n$ and constants $c_1, c_2, \ldots, c_n$:
$E(c_1 X_1 + c_2 X_2 + \ldots + c_n X_n) = c_1 E(X_1) + c_2 E(X_2) + \ldots + c_n E(X_n)$

**Important Note:** This property holds regardless of whether the random variables $X_i$ are independent.

**Textbook Reference:** Devore (2016), Chapter 4, Section 4.1. Papoulis & Pillai (2002), Chapter 5.

---

#### 1.4 Expectation of a Function of a Random Variable

If $X$ is a continuous random variable with PDF $f(x)$, and $Y = g(X)$ is a function of $X$, then the expected value of $Y$ can be calculated directly without first finding the PDF of $Y$:

$$E(Y) = E(g(X)) = \int_{-\infty}^{\infty} g(x) f(x) \, dx$$

This is often referred to as the **Law of the Unconscious Statistician (LOTUS)**.

**Example 3:** For the random variable $X$ with $f(x) = 2x$ for $0 \le x \le 1$, find $E(X^2)$.

**Solution:**
Using LOTUS with $g(x) = x^2$:
$$E(X^2) = \int_{0}^{1} x^2 (2x) \, dx$$
$$E(X^2) = \int_{0}^{1} 2x^3 \, dx$$
$$E(X^2) = \left[ \frac{2x^4}{4} \right]_0^1$$
$$E(X^2) = \left[ \frac{x^4}{2} \right]_0^1$$
$$E(X^2) = \frac{1^4}{2} - \frac{0^4}{2} = \frac{1}{2}$$

**Textbook Reference:** Devore (2016), Chapter 4, Section 4.1. Ross (2020), Chapter 4, Section 4.1.

---

### 2. Variance and Standard Deviation

While the expectation gives us the average value, it doesn't tell us how spread out the distribution is. Variance and standard deviation quantify this spread.

**Key Concept:** The **variance** of a continuous random variable $X$, denoted as $Var(X)$ or $\sigma^2_X$, measures the average squared deviation of $X$ from its mean.

---

#### 2.1 Definition of Variance

There are two equivalent ways to calculate the variance:

**Method 1: Using the definition of deviation from the mean**
$$Var(X) = E[(X - \mu_X)^2]$$
Where $\mu_X = E(X)$. This is calculated as:
$$Var(X) = \int_{-\infty}^{\infty} (x - \mu_X)^2 f(x) \, dx$$

**Method 2: Using the shortcut formula**
$$Var(X) = E(X^2) - [E(X)]^2$$
This formula is often computationally simpler.

**Important Note:** Variance is always non-negative ($Var(X) \ge 0$).

**Textbook Reference:** Devore (2016), Chapter 4, Section 4.2. Ross (2020), Chapter 4, Section 4.2.

---

#### 2.2 Standard Deviation

The **standard deviation** of $X$, denoted as $\sigma_X$ or $SD(X)$, is the square root of the variance. It provides a measure of spread in the same units as $X$.

$$\sigma_X = \sqrt{Var(X)} = \sqrt{E[(X - \mu_X)^2]}$$

**Importance:** The standard deviation is often preferred as a measure of spread because it has the same units as the random variable, making it more interpretable.

---

#### 2.3 Examples of Calculating Variance and Standard Deviation

**Example 4:** For the random variable $X$ with $f(x) = 2x$ for $0 \le x \le 1$:
We found $E(X) = 2/3$ and $E(X^2) = 1/2$. Calculate $Var(X)$ and $\sigma_X$.

**Solution:**
Using the shortcut formula:
$$Var(X) = E(X^2) - [E(X)]^2$$
$$Var(X) = \frac{1}{2} - \left(\frac{2}{3}\right)^2$$
$$Var(X) = \frac{1}{2} - \frac{4}{9}$$
$$Var(X) = \frac{9 - 8}{18} = \frac{1}{18}$$

The standard deviation is:
$$\sigma_X = \sqrt{\frac{1}{18}} = \frac{1}{\sqrt{18}} = \frac{1}{3\sqrt{2}} = \frac{\sqrt{2}}{6}$$

**Example 5:** For the exponential distribution with PDF $f(y) = \lambda e^{-\lambda y}$ for $y \ge 0$:
We found $E(Y) = 1/\lambda$. Let's find $E(Y^2)$ and then $Var(Y)$.

We need to calculate $E(Y^2) = \int_0^{\infty} y^2 (\lambda e^{-\lambda y}) \, dy$.
Again, use integration by parts. Let $u = y^2$ and $dv = \lambda e^{-\lambda y} \, dy$.
Then $du = 2y \, dy$ and $v = -e^{-\lambda y}$.

$$E(Y^2) = \left[ y^2 (-e^{-\lambda y}) \right]_0^{\infty} - \int_0^{\infty} (-e^{-\lambda y}) (2y \, dy)$$
$$E(Y^2) = 0 - \int_0^{\infty} -2y e^{-\lambda y} \, dy$$
$$E(Y^2) = 2 \int_0^{\infty} y e^{-\lambda y} \, dy$$

Notice that $\int_0^{\infty} y e^{-\lambda y} \, dy = E(Y)$, which we already know is $1/\lambda$.
So, $E(Y^2) = 2 \left(\frac{1}{\lambda}\right) = \frac{2}{\lambda^2}$.

Now, calculate the variance:
$$Var(Y) = E(Y^2) - [E(Y)]^2$$
$$Var(Y) = \frac{2}{\lambda^2} - \left(\frac{1}{\lambda}\right)^2$$
$$Var(Y) = \frac{2}{\lambda^2} - \frac{1}{\lambda^2} = \frac{1}{\lambda^2}$$

The standard deviation is:
$$\sigma_Y = \sqrt{\frac{1}{\lambda^2}} = \frac{1}{\lambda}$$

**Summary for Exponential Distribution:**
For $X \sim \text{Exponential}(\lambda)$: $E(X) = 1/\lambda$, $Var(X) = 1/\lambda^2$, $\sigma_X = 1/\lambda$.

**Textbook Reference:** Devore (2016), Chapter 4, Section 4.2. Ross (2020), Chapter 4, Section 4.2.

---

#### 2.4 Properties of Variance

Unlike expectation, variance is not linear in the same way.

**Property 1: Variance of a Constant**
For any constant $c$:
$Var(c) = 0$

**Property 2: Variance of a Scaled Random Variable**
For any constant $a$:
$Var(aX) = a^2 Var(X)$

**Property 3: Variance of a Shifted Random Variable**
For any constant $b$:
$Var(X + b) = Var(X)$

**Combining Properties 2 & 3:**
$Var(aX + b) = a^2 Var(X)$

**Property 4: Variance of a Sum of Independent Random Variables**
If $X_1, X_2, \ldots, X_n$ are **independent** random variables:
$Var(X_1 + X_2 + \ldots + X_n) = Var(X_1) + Var(X_2) + \ldots + Var(X_n)$

**Important Note:** This independence is crucial for the sum of variances property. If the variables are not independent, the variance of the sum is more complex and involves covariances.

**Textbook Reference:** Devore (2016), Chapter 4, Section 4.2. Papoulis & Pillai (2002), Chapter 5.

---

### 3. Moments of a Probability Distribution

Expectation and variance are specific examples of a broader class of quantities called **moments**.

**Key Concepts:**
*   **k-th Moment about the Origin (Raw Moment):** $E(X^k) = \int_{-\infty}^{\infty} x^k f(x) \, dx$
    *   $E(X^1)$ is the first moment about the origin, which is the mean.
    *   $E(X^2)$ is the second moment about the origin.
*   **k-th Moment about the Mean (Central Moment):** $E[(X - \mu_X)^k] = \int_{-\infty}^{\infty} (x - \mu_X)^k f(x) \, dx$
    *   $E[(X - \mu_X)^1] = 0$.
    *   $E[(X - \mu_X)^2]$ is the second central moment, which is the variance.

**Relationship between Variance and Moments:**
$Var(X) = E(X^2) - [E(X)]^2$ (Second central moment = Second raw moment - (First raw moment)^2)

**Textbook Reference:** Devore (2016), Chapter 4, Section 4.1. Papoulis & Pillai (2002), Chapter 5.

---

### 4. Common Continuous Distributions and Their Expectations/Variances

Understanding the expectation and variance of common distributions is essential for applying probability theory to physical science problems.

**a) Uniform Distribution:**
A random variable $X$ is uniformly distributed on the interval $[a, b]$, denoted $X \sim U(a, b)$, if its PDF is:
$f(x) = \begin{cases} \frac{1}{b-a} & \text{for } a \le x \le b \\ 0 & \text{otherwise} \end{cases}$

*   **Expectation:** $E(X) = \frac{a+b}{2}$ (The midpoint of the interval)
*   **Variance:** $Var(X) = \frac{(b-a)^2}{12}$

**Example:** A point is chosen uniformly at random on a line segment of length 5 units. Let $X$ be the position of the point, where the segment is from 0 to 5. $X \sim U(0, 5)$.
$E(X) = \frac{0+5}{2} = 2.5$
$Var(X) = \frac{(5-0)^2}{12} = \frac{25}{12} \approx 2.083$

**b) Normal Distribution:**
A random variable $X$ is normally distributed with mean $\mu$ and variance $\sigma^2$, denoted $X \sim N(\mu, \sigma^2)$, if its PDF is:
$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$ for $-\infty < x < \infty$.

*   **Expectation:** $E(X) = \mu$ (By definition)
*   **Variance:** $Var(X) = \sigma^2$ (By definition)

**Standard Normal Distribution:** $Z \sim N(0, 1)$ has $E(Z) = 0$ and $Var(Z) = 1$.

**c) Exponential Distribution:**
As seen in Example 2 and 5, for $X \sim \text{Exponential}(\lambda)$:
*   **Expectation:** $E(X) = \frac{1}{\lambda}$
*   **Variance:** $Var(X) = \frac{1}{\lambda^2}$

**d) Gamma Distribution:**
A random variable $X$ follows a Gamma distribution with shape parameter $k$ and scale parameter $\theta$, denoted $X \sim \text{Gamma}(k, \theta)$, if its PDF is:
$f(x) = \frac{1}{\Gamma(k)\theta^k} x^{k-1} e^{-x/\theta}$ for $x > 0$, where $\Gamma(k)$ is the Gamma function.

*   **Expectation:** $E(X) = k\theta$
*   **Variance:** $Var(X) = k\theta^2$

**Physical Science Relevance:** The Gamma distribution is useful for modeling waiting times, especially when the waiting time is a sum of exponential waiting times.

**e) Beta Distribution:**
A random variable $X$ follows a Beta distribution with parameters $\alpha > 0$ and $\beta > 0$, denoted $X \sim \text{Beta}(\alpha, \beta)$, if its PDF is:
$f(x) = \frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)} x^{\alpha-1} (1-x)^{\beta-1}$ for $0 \le x \le 1$.

*   **Expectation:** $E(X) = \frac{\alpha}{\alpha+\beta}$
*   **Variance:** $Var(X) = \frac{\alpha\beta}{(\alpha+\beta)^2 (\alpha+\beta+1)}$

**Physical Science Relevance:** The Beta distribution is useful for modeling probabilities or proportions that are constrained between 0 and 1.

**Textbook Reference:** Devore (2016), Chapter 4, Sections 4.3 (Uniform), 4.4 (Normal), 4.5 (Exponential), 4.6 (Gamma and Beta). Ross (2020), Chapter 4 (Uniform, Exponential), Chapter 5 (Normal).

---

### 5. Numerical Methods for Expectation and Variance

In cases where the PDF is complex or the integral is difficult to solve analytically, numerical integration techniques can be employed.

**Key Concept:** Numerical integration approximates the value of a definite integral. Common methods include the Trapezoidal rule and Simpson's rule.

**Application:** To calculate $E(X) = \int_{a}^{b} x f(x) \, dx$ numerically, one would discretize the interval $[a, b]$ into subintervals and apply the numerical integration formula to the integrand $g(x) = x f(x)$.

**Textbook Reference:** Sastry (2012) provides detailed explanations of numerical integration methods (e.g., Chapter 5 for Trapezoidal Rule, Chapter 6 for Simpson's Rule). Chapra & Canale (2021) also covers these topics extensively (e.g., Chapter 17 for numerical integration).

**Relevance to Course Outcome CO4:** This topic directly supports CO4 by emphasizing the application of numerical methods to solve problems that might arise in physical science contexts, even if not directly calculating expectation itself, but by using similar techniques for definite integrals.

---

### 6. Practice Questions and Exercises

**Question 1:**
A continuous random variable $X$ has the PDF $f(x) = \frac{1}{2\pi} e^{-x^2/2}$ for $-\infty < x < \infty$.
(a) What is the name of this distribution?
(b) Calculate $E(X)$.
(c) Calculate $Var(X)$.

**Answer 1:**
(a) This is the standard normal distribution, $Z \sim N(0, 1)$.
(b) For a standard normal distribution, the mean is $\mu = 0$, so $E(X) = 0$.
(c) For a standard normal distribution, the variance is $\sigma^2 = 1$, so $Var(X) = 1$.

**Question 2:**
Let $X$ be a random variable with PDF $f(x) = 3x^2$ for $0 \le x \le 1$ and 0 otherwise.
(a) Calculate $E(X)$.
(b) Calculate $E(X^2)$.
(c) Calculate $Var(X)$.

**Answer 2:**
(a) $E(X) = \int_{0}^{1} x(3x^2) \, dx = \int_{0}^{1} 3x^3 \, dx = \left[\frac{3x^4}{4}\right]_0^1 = \frac{3}{4}$.
(b) $E(X^2) = \int_{0}^{1} x^2(3x^2) \, dx = \int_{0}^{1} 3x^4 \, dx = \left[\frac{3x^5}{5}\right]_0^1 = \frac{3}{5}$.
(c) $Var(X) = E(X^2) - [E(X)]^2 = \frac{3}{5} - \left(\frac{3}{4}\right)^2 = \frac{3}{5} - \frac{9}{16} = \frac{48 - 45}{80} = \frac{3}{80}$.

**Question 3:**
Consider a random variable $Y$ that follows an exponential distribution with rate parameter $\lambda = 0.5$.
(a) What is the expected value of $Y$?
(b) What is the variance of $Y$?
(c) What is the probability that $Y$ is greater than its expected value?

**Answer 3:**
(a) $E(Y) = 1/\lambda = 1/0.5 = 2$.
(b) $Var(Y) = 1/\lambda^2 = 1/(0.5)^2 = 1/0.25 = 4$.
(c) We need $P(Y > E(Y)) = P(Y > 2)$. For an exponential distribution, $P(Y > y) = e^{-\lambda y}$.
So, $P(Y > 2) = e^{-0.5 \times 2} = e^{-1} \approx 0.3679$.

**Question 4:**
Let $X \sim U(2, 7)$.
(a) Find $E(X)$.
(b) Find $Var(X)$.
(c) Find $E(3X - 5)$.

**Answer 4:**
(a) $E(X) = \frac{2+7}{2} = \frac{9}{2} = 4.5$.
(b) $Var(X) = \frac{(7-2)^2}{12} = \frac{5^2}{12} = \frac{25}{12} \approx 2.083$.
(c) Using linearity of expectation: $E(3X - 5) = 3E(X) - 5 = 3(4.5) - 5 = 13.5 - 5 = 8.5$.

**Question 5:**
Suppose the time to failure $T$ of a certain electronic component is exponentially distributed with a mean lifetime of 1000 hours.
(a) Find the rate parameter $\lambda$.
(b) Write down the PDF of $T$.
(c) Calculate the variance of the time to failure.

**Answer 5:**
(a) The mean lifetime is $E(T) = 1/\lambda$. So, $1000 = 1/\lambda \implies \lambda = 1/1000 = 0.001$.
(b) The PDF is $f(t) = \lambda e^{-\lambda t} = 0.001 e^{-0.001t}$ for $t \ge 0$.
(c) The variance of an exponential distribution is $Var(T) = 1/\lambda^2 = 1/(0.001)^2 = 1/0.000001 = 1,000,000$.

---

### 7. Important Points to Remember

*   **Definition of Expectation:** $E(X) = \int_{-\infty}^{\infty} x f(x) \, dx$. This is the weighted average of $X$ values, with weights given by the PDF.
*   **Definition of Variance:** $Var(X) = E[(X - \mu_X)^2] = E(X^2) - [E(X)]^2$. It measures the spread of the distribution.
*   **Standard Deviation:** $\sigma_X = \sqrt{Var(X)}$. It is in the same units as $X$.
*   **LOTUS (Law of the Unconscious Statistician):** $E(g(X)) = \int_{-\infty}^{\infty} g(x) f(x) \, dx$. This is extremely useful for calculating expectations of functions of random variables.
*   **Linearity of Expectation:** $E(aX + b) = aE(X) + b$. This property holds for any random variables, regardless of independence.
*   **Variance of Sums:** $Var(\sum c_i X_i) = \sum c_i^2 Var(X_i)$ is ONLY true if the $X_i$ are independent. For sums, it's $Var(\sum X_i) = \sum Var(X_i) + 2 \sum_{i<j} Cov(X_i, X_j)$. If independent, all covariances are zero.
*   **Moments:** $E(X^k)$ are raw moments, $E[(X-\mu)^k]$ are central moments. Variance is the second central moment.
*   **Numerical Integration:** Essential for complex PDFs or when analytical integration is not feasible.
*   **Interpreting Expectation:** The expected value is the long-run average of a random variable if an experiment is repeated many times. It's not necessarily a value that the random variable can take.
*   **Interpreting Variance/Standard Deviation:** A larger variance/standard deviation indicates that the values of the random variable tend to be further from the mean.

---

### 8. Alignment with Course Outcomes (COs)

*   **CO1 (Discrete Random Variables):** While this topic focuses on continuous variables, the foundational concept of expectation as a weighted average is built upon the discrete case. Understanding expectation for continuous variables strengthens the understanding for discrete ones.
*   **CO2 (Continuous Random Variables):** This entire topic directly addresses CO2 by defining, calculating, and applying expectation and variance for continuous random variables and their distributions.
*   **CO3 (Estimation and Confidence Intervals):** Expectation is the population mean, a key parameter estimated by sample means. Variance is related to the uncertainty in these estimates and forms the basis for confidence intervals and hypothesis tests.
*   **CO4 (Numerical Methods):** The reliance on integration for defining and calculating expectation/variance necessitates the use of numerical methods when analytical solutions are not available, directly linking to CO4.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### 9. Further Reading and Resources

*   **Devore, J. L. (2016).** *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapters 4, 5)
*   **Sastry, S. S. (2012).** *Introductory Methods of Numerical Analysis* (5th ed.). PHI Learning Pvt Limited. (Chapters related to integration)
*   **Ross, S. M. (2020).** *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press. (Chapters 4, 5)
*   **Chapra, S. C., & Canale, R. P. (2021).** *Numerical Methods for Engineers* (8th ed.). McGraw Hill Education. (Chapters on numerical integration)
*   **Papoulis, A., & Pillai, S. U. (2002).** *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill. (Advanced concepts of expectation and moments)