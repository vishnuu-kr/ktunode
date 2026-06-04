---
title: "Mean and variance"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462eb5"
status: "completed"
scrapedAt: "2026-05-20T17:54:33.462Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Mean and Variance

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Define and calculate the mean (expected value) of a discrete random variable.
*   Define and calculate the variance and standard deviation of a discrete random variable.
*   Understand the properties of mean and variance for discrete random variables.
*   Define and interpret the mean (expected value) of a continuous random variable.
*   Define and interpret the variance and standard deviation of a continuous random variable.
*   Understand the properties of mean and variance for continuous random variables.
*   Apply the concepts of mean and variance to solve problems in physical science contexts.
*   Relate the concepts of mean and variance to measures of central tendency and dispersion.

---

### Introduction to Mean and Variance

In Module 1, we introduced the concept of random variables, which are functions that assign numerical values to the outcomes of a random experiment. To understand the behavior of a random variable, we need to summarize its probability distribution using measures of central tendency and dispersion. The **mean (or expected value)** provides a measure of the average value of the random variable, while the **variance (and its square root, the standard deviation)** quantifies the spread or variability of the random variable around its mean.

This topic delves into the definitions, properties, and calculations of the mean and variance for both discrete and continuous random variables, drawing upon key concepts from our specified textbooks.

---

### 1. Mean (Expected Value) of a Discrete Random Variable

The **mean** of a discrete random variable $X$, denoted by $E(X)$ or $\mu$, is the weighted average of all possible values that the random variable can take, where the weights are the corresponding probabilities. It represents the long-run average value of the random variable if the experiment were repeated many times.

#### Definition:

For a discrete random variable $X$ with probability mass function (PMF) $p(x)$, the expected value is given by:

$$E(X) = \mu = \sum_{x} x \cdot p(x)$$

where the sum is over all possible values $x$ that $X$ can take.

#### Key Concepts and Properties:

*   **Interpretation:** The expected value is not necessarily a value that the random variable can actually take, but rather a theoretical average.
*   **Linearity of Expectation:** For any constants $a$ and $b$, and a random variable $X$:
    $$E(aX + b) = aE(X) + b$$
    This is a crucial property for simplifying calculations.
*   **Expectation of a Function of a Random Variable:** If $g(X)$ is a function of a discrete random variable $X$, then the expected value of $g(X)$ is:
    $$E(g(X)) = \sum_{x} g(x) \cdot p(x)$$

#### Example (Referencing Devore, J. L., Chapter 3):

Let $X$ be the number of heads when a fair coin is tossed twice.
The possible values of $X$ are 0, 1, and 2.
The PMF is:
*   $P(X=0) = P(\text{TT}) = (1/2)(1/2) = 1/4$
*   $P(X=1) = P(\text{HT or TH}) = (1/2)(1/2) + (1/2)(1/2) = 1/2$
*   $P(X=2) = P(\text{HH}) = (1/2)(1/2) = 1/4$

The expected value of $X$ is:
$$E(X) = (0 \cdot \frac{1}{4}) + (1 \cdot \frac{1}{2}) + (2 \cdot \frac{1}{4})$$
$$E(X) = 0 + \frac{1}{2} + \frac{1}{2} = 1$$
On average, you expect to get 1 head when tossing a fair coin twice.

#### Practice Question:

A random variable $Y$ has the following PMF:
$P(Y=1) = 0.3$, $P(Y=2) = 0.5$, $P(Y=3) = 0.2$.
Calculate $E(Y)$.

**Answer:**
$E(Y) = (1 \cdot 0.3) + (2 \cdot 0.5) + (3 \cdot 0.2) = 0.3 + 1.0 + 0.6 = 1.9$

---

### 2. Variance and Standard Deviation of a Discrete Random Variable

The **variance** of a discrete random variable $X$, denoted by $Var(X)$ or $\sigma^2$, measures the spread or dispersion of the possible values of $X$ around its mean. It is the expected value of the squared deviation from the mean.

The **standard deviation**, denoted by $\sigma$, is the square root of the variance. It is often preferred because it has the same units as the random variable itself, making it more interpretable.

#### Definition:

For a discrete random variable $X$ with mean $\mu$:

$$Var(X) = \sigma^2 = E[(X - \mu)^2] = \sum_{x} (x - \mu)^2 \cdot p(x)$$

An alternative and often computationally simpler formula for variance is:

$$Var(X) = E(X^2) - [E(X)]^2$$

where $E(X^2) = \sum_{x} x^2 \cdot p(x)$.

The standard deviation is:

$$\sigma = \sqrt{Var(X)}$$

#### Key Concepts and Properties:

*   **Interpretation:** A larger variance indicates that the values of the random variable are more spread out from the mean, while a smaller variance indicates that the values are clustered more closely around the mean.
*   **Non-negativity:** Variance is always non-negative ($Var(X) \ge 0$).
*   **Variance of a Constant:** $Var(c) = 0$ for any constant $c$.
*   **Scaling and Shifting:** For constants $a$ and $b$:
    $$Var(aX + b) = a^2 Var(X)$$
    This property is very important. Notice the $a^2$ factor.
*   **Independence:** If $X$ and $Y$ are independent random variables:
    *   $Var(X + Y) = Var(X) + Var(Y)$
    *   $Var(X - Y) = Var(X) + Var(Y)$

#### Example (Continuing Devore, J. L., Chapter 3):

For $X$ (number of heads in two coin tosses) with $E(X) = 1$:
$p(0) = 1/4$, $p(1) = 1/2$, $p(2) = 1/4$.

Using the first formula:
$Var(X) = (0 - 1)^2 \cdot \frac{1}{4} + (1 - 1)^2 \cdot \frac{1}{2} + (2 - 1)^2 \cdot \frac{1}{4}$
$Var(X) = (-1)^2 \cdot \frac{1}{4} + (0)^2 \cdot \frac{1}{2} + (1)^2 \cdot \frac{1}{4}$
$Var(X) = 1 \cdot \frac{1}{4} + 0 + 1 \cdot \frac{1}{4} = \frac{1}{4} + \frac{1}{4} = \frac{1}{2}$

Using the alternative formula:
First, calculate $E(X^2)$:
$E(X^2) = (0^2 \cdot \frac{1}{4}) + (1^2 \cdot \frac{1}{2}) + (2^2 \cdot \frac{1}{4})$
$E(X^2) = (0 \cdot \frac{1}{4}) + (1 \cdot \frac{1}{2}) + (4 \cdot \frac{1}{4})$
$E(X^2) = 0 + \frac{1}{2} + 1 = \frac{3}{2}$

Now, $Var(X) = E(X^2) - [E(X)]^2 = \frac{3}{2} - (1)^2 = \frac{3}{2} - 1 = \frac{1}{2}$.

The standard deviation is $\sigma = \sqrt{1/2} = 1/\sqrt{2} \approx 0.707$.

#### Practice Question:

Using the random variable $Y$ from the previous practice question ($P(Y=1) = 0.3$, $P(Y=2) = 0.5$, $P(Y=3) = 0.2$, $E(Y) = 1.9$).
Calculate $Var(Y)$ and $\sigma_Y$.

**Answer:**
First, calculate $E(Y^2)$:
$E(Y^2) = (1^2 \cdot 0.3) + (2^2 \cdot 0.5) + (3^2 \cdot 0.2)$
$E(Y^2) = (1 \cdot 0.3) + (4 \cdot 0.5) + (9 \cdot 0.2)$
$E(Y^2) = 0.3 + 2.0 + 1.8 = 4.1$

Now, calculate $Var(Y)$:
$Var(Y) = E(Y^2) - [E(Y)]^2 = 4.1 - (1.9)^2$
$Var(Y) = 4.1 - 3.61 = 0.49$

The standard deviation is $\sigma_Y = \sqrt{0.49} = 0.7$.

---

### 3. Mean (Expected Value) of a Continuous Random Variable

For a continuous random variable $X$, the probability is distributed over a range of values. The mean is still a measure of the center of the distribution.

#### Definition:

For a continuous random variable $X$ with probability density function (PDF) $f(x)$, the expected value is given by:

$$E(X) = \mu = \int_{-\infty}^{\infty} x \cdot f(x) \, dx$$

where the integral is taken over the entire range of possible values of $X$. For the integral to converge and for $E(X)$ to exist, $f(x)$ must satisfy $\int_{-\infty}^{\infty} |x| f(x) \, dx < \infty$.

#### Key Concepts and Properties:

*   **Interpretation:** The expected value represents the center of mass of the probability distribution if the PDF is considered as a mass density.
*   **Linearity of Expectation:** For any constants $a$ and $b$, and a random variable $X$:
    $$E(aX + b) = aE(X) + b$$
    This property remains the same as for discrete random variables.
*   **Expectation of a Function of a Random Variable:** If $g(X)$ is a function of a continuous random variable $X$, then the expected value of $g(X)$ is:
    $$E(g(X)) = \int_{-\infty}^{\infty} g(x) \cdot f(x) \, dx$$

#### Example (Referencing Devore, J. L., Chapter 4):

Let $X$ be a continuous random variable with PDF:
$f(x) = 2x$ for $0 \le x \le 1$, and $f(x) = 0$ otherwise.

The expected value of $X$ is:
$$E(X) = \int_{0}^{1} x \cdot (2x) \, dx$$
$$E(X) = \int_{0}^{1} 2x^2 \, dx$$
$$E(X) = \left[ \frac{2x^3}{3} \right]_{0}^{1}$$
$$E(X) = \frac{2(1)^3}{3} - \frac{2(0)^3}{3} = \frac{2}{3}$$
The mean of this distribution is $2/3$.

#### Practice Question:

A continuous random variable $Z$ has a PDF:
$f(z) = 3z^2$ for $0 \le z \le 1$, and $f(z) = 0$ otherwise.
Calculate $E(Z)$.

**Answer:**
$E(Z) = \int_{0}^{1} z \cdot (3z^2) \, dz = \int_{0}^{1} 3z^3 \, dz$
$E(Z) = \left[ \frac{3z^4}{4} \right]_{0}^{1} = \frac{3(1)^4}{4} - \frac{3(0)^4}{4} = \frac{3}{4}$

---

### 4. Variance and Standard Deviation of a Continuous Random Variable

The variance and standard deviation for continuous random variables are defined analogously to their discrete counterparts, using integrals instead of sums.

#### Definition:

For a continuous random variable $X$ with mean $\mu$ and PDF $f(x)$:

$$Var(X) = \sigma^2 = E[(X - \mu)^2] = \int_{-\infty}^{\infty} (x - \mu)^2 \cdot f(x) \, dx$$

The alternative computational formula is:

$$Var(X) = E(X^2) - [E(X)]^2$$

where $E(X^2) = \int_{-\infty}^{\infty} x^2 \cdot f(x) \, dx$.

The standard deviation is:

$$\sigma = \sqrt{Var(X)}$$

#### Key Concepts and Properties:

*   **Interpretation:** Similar to discrete variables, variance quantifies the spread of the distribution around the mean.
*   **Non-negativity:** $Var(X) \ge 0$.
*   **Variance of a Constant:** $Var(c) = 0$.
*   **Scaling and Shifting:** $Var(aX + b) = a^2 Var(X)$.
*   **Independence:** If $X$ and $Y$ are independent random variables:
    *   $Var(X + Y) = Var(X) + Var(Y)$
    *   $Var(X - Y) = Var(X) + Var(Y)$

#### Example (Continuing Devore, J. L., Chapter 4):

For $X$ with PDF $f(x) = 2x$ for $0 \le x \le 1$, and $E(X) = 2/3$.

Using the alternative formula:
First, calculate $E(X^2)$:
$$E(X^2) = \int_{0}^{1} x^2 \cdot (2x) \, dx$$
$$E(X^2) = \int_{0}^{1} 2x^3 \, dx$$
$$E(X^2) = \left[ \frac{2x^4}{4} \right]_{0}^{1}$$
$$E(X^2) = \frac{2(1)^4}{4} - \frac{2(0)^4}{4} = \frac{2}{4} = \frac{1}{2}$$

Now, calculate $Var(X)$:
$Var(X) = E(X^2) - [E(X)]^2 = \frac{1}{2} - (\frac{2}{3})^2$
$Var(X) = \frac{1}{2} - \frac{4}{9} = \frac{9 - 8}{18} = \frac{1}{18}$

The standard deviation is $\sigma = \sqrt{1/18} = 1/(3\sqrt{2}) \approx 0.2357$.

#### Practice Question:

Using the random variable $Z$ from the previous practice question ($f(z) = 3z^2$ for $0 \le z \le 1$, $E(Z) = 3/4$).
Calculate $Var(Z)$ and $\sigma_Z$.

**Answer:**
First, calculate $E(Z^2)$:
$E(Z^2) = \int_{0}^{1} z^2 \cdot (3z^2) \, dz = \int_{0}^{1} 3z^4 \, dz$
$E(Z^2) = \left[ \frac{3z^5}{5} \right]_{0}^{1} = \frac{3(1)^5}{5} - \frac{3(0)^5}{5} = \frac{3}{5}$

Now, calculate $Var(Z)$:
$Var(Z) = E(Z^2) - [E(Z)]^2 = \frac{3}{5} - (\frac{3}{4})^2$
$Var(Z) = \frac{3}{5} - \frac{9}{16} = \frac{48 - 45}{80} = \frac{3}{80}$

The standard deviation is $\sigma_Z = \sqrt{3/80} \approx 0.1936$.

---

### 5. Applications in Physical Science (Connecting to Course Outcomes)

The concepts of mean and variance are fundamental in physical sciences for analyzing experimental data and understanding physical phenomena.

*   **Mean:** Often represents the average measurement, an estimate of a true physical constant (e.g., the average velocity of particles in a gas, the average temperature of a system).
    *   **Relates to CO1 & CO2:** When modeling physical processes with random variables (e.g., the number of radioactive decays in an interval for CO1, or the lifetime of a component for CO2), the mean tells us the expected outcome.
*   **Variance/Standard Deviation:** Quantifies the uncertainty or variability in measurements or the spread of a physical quantity.
    *   **Measurement Error:** In experiments, the standard deviation of repeated measurements provides an estimate of the precision of the measurement.
    *   **Physical Variability:** In statistical mechanics, variance relates to concepts like heat capacity (related to fluctuations in energy).
    *   **Relates to CO1 & CO2:** For discrete distributions like the Poisson distribution (modeling events like photon counts in physics), the mean and variance are crucial parameters. For continuous distributions like the Gaussian (Normal) distribution (modeling random errors in physics experiments), mean and variance completely define the distribution.
    *   **Relates to CO3:** While CO3 focuses on confidence intervals and hypothesis testing for population parameters, the sample mean and sample variance are used to estimate these population parameters. The mean is the central point of estimation, and the variance informs us about the uncertainty of this estimation.

#### Example: Radioactive Decay (Referencing physical science context)

Suppose the number of alpha particles emitted by a radioactive source in a 1-second interval is a random variable $N$. If $N$ follows a Poisson distribution with rate $\lambda$, then $E(N) = \lambda$ and $Var(N) = \lambda$.
*   If we measure an average of 5 particles per second over many intervals, our estimate for $\lambda$ is 5.
*   The variance also being 5 tells us about the expected spread of counts around 5. If we expect a count of 5, a variance of 5 suggests that observing counts like 0 or 10 might be plausible.

#### Example: Measurement Errors (Referencing physical science context)

When measuring a physical quantity, say the length of a rod, multiple measurements are often taken. Let $L_i$ be the $i$-th measurement. We can assume $L_i = L_{true} + \epsilon_i$, where $L_{true}$ is the actual length and $\epsilon_i$ is the measurement error. If $\epsilon_i$ is assumed to have a mean of 0 and a variance $\sigma_{\epsilon}^2$:
*   The sample mean of measurements, $\bar{L} = \frac{1}{n} \sum L_i$, is an estimate of $L_{true}$.
*   The sample variance of measurements, $s^2$, is an estimate of $\sigma_{\epsilon}^2$, indicating the precision of our measurement tool.

---

### Important Points to Remember:

*   **Mean ($E(X)$):** The average or expected value of a random variable.
*   **Variance ($Var(X)$):** A measure of the spread or dispersion of a random variable around its mean.
*   **Standard Deviation ($\sigma$):** The square root of the variance, providing a measure of spread in the same units as the random variable.
*   **Computational Formulas:** $Var(X) = E(X^2) - [E(X)]^2$ is often easier for calculations.
*   **Linearity of Expectation:** $E(aX + b) = aE(X) + b$.
*   **Variance Scaling:** $Var(aX + b) = a^2 Var(X)$.
*   **Independence:** $Var(X+Y) = Var(X) + Var(Y)$ for independent $X, Y$.
*   **Discrete vs. Continuous:** Use summation for discrete RVs and integration for continuous RVs.
*   **Physical Interpretation:** Mean represents the central tendency, while variance/standard deviation represents the variability or uncertainty.

---

### Practice Questions (Comprehensive)

**Question 1 (Discrete):**
A random variable $X$ represents the number of defective items in a sample of 3 items from a batch where 10% of items are defective. Assume the number of defective items follows a Binomial distribution $B(n=3, p=0.1)$.
a) Calculate the mean number of defective items.
b) Calculate the variance of the number of defective items.
c) Calculate the standard deviation of the number of defective items.

**Question 2 (Continuous):**
Let $T$ be the lifetime (in years) of a certain electronic component, with PDF:
$f(t) = \lambda e^{-\lambda t}$ for $t \ge 0$, where $\lambda > 0$ (Exponential distribution).
a) Calculate $E(T)$.
b) Calculate $Var(T)$.
c) Calculate $\sigma_T$.
*(Hint: You'll need to evaluate $\int_0^\infty t \lambda e^{-\lambda t} dt$ and $\int_0^\infty t^2 \lambda e^{-\lambda t} dt$. These are standard integrals often found in tables or can be solved using integration by parts.)*

**Question 3 (Properties):**
Let $X$ be a random variable with $E(X) = 5$ and $Var(X) = 2$. Let $Y = 3X - 4$.
a) Calculate $E(Y)$.
b) Calculate $Var(Y)$.

---

### Answers to Practice Questions

**Answer 1:**
For a Binomial distribution $B(n, p)$, $E(X) = np$ and $Var(X) = np(1-p)$.
Here, $n=3$ and $p=0.1$.
a) $E(X) = 3 \times 0.1 = 0.3$
b) $Var(X) = 3 \times 0.1 \times (1 - 0.1) = 0.3 \times 0.9 = 0.27$
c) $\sigma_X = \sqrt{0.27} \approx 0.5196$

**Answer 2:**
For an Exponential distribution $f(t) = \lambda e^{-\lambda t}$ for $t \ge 0$:
a) $E(T) = 1/\lambda$
b) $Var(T) = 1/\lambda^2$
c) $\sigma_T = 1/\lambda$

*(To verify: Using integration by parts for $E(T)$: $\int_0^\infty t \lambda e^{-\lambda t} dt$. Let $u=t, dv=\lambda e^{-\lambda t} dt$. Then $du=dt, v=-e^{-\lambda t}$.
$E(T) = [-t e^{-\lambda t}]_0^\infty - \int_0^\infty (-e^{-\lambda t}) dt = (0-0) + \int_0^\infty e^{-\lambda t} dt = [-1/\lambda e^{-\lambda t}]_0^\infty = 0 - (-1/\lambda) = 1/\lambda$.
Similarly, $E(T^2) = 1/\lambda^2 \times 2! = 2/\lambda^2$.
$Var(T) = E(T^2) - [E(T)]^2 = 2/\lambda^2 - (1/\lambda)^2 = 2/\lambda^2 - 1/\lambda^2 = 1/\lambda^2$. )*

**Answer 3:**
Given $E(X) = 5$ and $Var(X) = 2$. $Y = 3X - 4$.
a) $E(Y) = E(3X - 4) = 3E(X) - 4 = 3(5) - 4 = 15 - 4 = 11$.
b) $Var(Y) = Var(3X - 4) = 3^2 Var(X) = 9 \times 2 = 18$.

---

This concludes the notes on the Mean and Variance of Random Variables. Understanding these measures is critical for analyzing data and describing the behavior of random phenomena in physical sciences.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
