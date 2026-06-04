---
title: "Expectation"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81091e"
status: "completed"
scrapedAt: "2026-05-20T18:45:54.278Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4: Module 1: Random Variables - Expectation

This module introduces the fundamental concept of **Expectation** in the context of random variables. Expectation, often referred to as the mean or expected value, provides a measure of the central tendency of a random variable. It represents the average value we would expect to observe if we were to repeat a random experiment many times.

---

## Learning Outcomes

By the end of this topic, you will be able to:

*   **Define** the expectation of a discrete random variable.
*   **Define** the expectation of a continuous random variable.
*   **Apply** the linearity property of expectation.
*   **Calculate** the expectation of common discrete and continuous probability distributions.
*   **Understand** and apply the concept of conditional expectation.
*   **Relate** expectation to the average outcome of a random process.

---

## 1. Expectation of a Discrete Random Variable

### Key Concept: Expected Value (Mean)

The **expected value** of a discrete random variable $X$, denoted as $E[X]$ or $\mu_X$, is the weighted average of all possible values that $X$ can take, where the weights are the probabilities of those values occurring.

### Definition

If $X$ is a discrete random variable with probability mass function (PMF) $P(X=x)$, then the expectation of $X$ is given by:

$E[X] = \sum_{x} x P(X=x)$

where the sum is taken over all possible values $x$ that $X$ can take.

### Interpretation

*   **Average Value:** It's the average value of $X$ if the experiment is repeated an infinite number of times.
*   **Center of Mass:** Think of it as the "center of mass" of the probability distribution.

### Examples

**Example 1.1: Fair Six-Sided Die**

Let $X$ be the outcome of rolling a fair six-sided die. The possible values of $X$ are $\{1, 2, 3, 4, 5, 6\}$, and the PMF is $P(X=x) = \frac{1}{6}$ for each $x$.

$E[X] = 1 \cdot \frac{1}{6} + 2 \cdot \frac{1}{6} + 3 \cdot \frac{1}{6} + 4 \cdot \frac{1}{6} + 5 \cdot \frac{1}{6} + 6 \cdot \frac{1}{6}$
$E[X] = \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = 3.5$

**Example 1.2: Bernoulli Distribution**

A Bernoulli random variable $X$ represents a single trial with two outcomes: success (1) and failure (0). Let $P(X=1) = p$ and $P(X=0) = 1-p$.

$E[X] = 1 \cdot P(X=1) + 0 \cdot P(X=0)$
$E[X] = 1 \cdot p + 0 \cdot (1-p) = p$

**Example 1.3: Binomial Distribution**

For a Binomial random variable $X \sim \text{Binomial}(n, p)$, which counts the number of successes in $n$ independent Bernoulli trials with probability of success $p$. The PMF is $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$ for $k = 0, 1, \ldots, n$.

The expectation is $E[X] = np$. (Proof involves series manipulation, often covered in more advanced probability courses, but the result is important).

---

## 2. Expectation of a Continuous Random Variable

### Key Concept: Expected Value (Mean)

The **expected value** of a continuous random variable $Y$, denoted as $E[Y]$ or $\mu_Y$, is the weighted average of all possible values that $Y$ can take, where the weights are given by its probability density function (PDF).

### Definition

If $Y$ is a continuous random variable with probability density function (PDF) $f(y)$, then the expectation of $Y$ is given by:

$E[Y] = \int_{-\infty}^{\infty} y f(y) dy$

where the integral is taken over the entire range of possible values for $Y$.

### Interpretation

*   **Average Value:** Similar to the discrete case, it's the average value over many repetitions of the random experiment.
*   **Center of Mass:** Again, it represents the center of mass of the probability distribution.

### Examples

**Example 2.1: Uniform Distribution**

Let $Y$ be a continuous random variable uniformly distributed over the interval $[a, b]$. Its PDF is $f(y) = \frac{1}{b-a}$ for $a \le y \le b$, and $f(y) = 0$ otherwise.

$E[Y] = \int_{a}^{b} y \cdot \frac{1}{b-a} dy$
$E[Y] = \frac{1}{b-a} \int_{a}^{b} y dy$
$E[Y] = \frac{1}{b-a} \left[ \frac{y^2}{2} \right]_{a}^{b}$
$E[Y] = \frac{1}{b-a} \left( \frac{b^2}{2} - \frac{a^2}{2} \right)$
$E[Y] = \frac{1}{b-a} \cdot \frac{(b-a)(b+a)}{2} = \frac{a+b}{2}$

This makes intuitive sense: the average value of a uniform distribution is the midpoint of the interval.

**Example 2.2: Exponential Distribution**

Let $Y$ be an exponential random variable with rate parameter $\lambda > 0$. Its PDF is $f(y) = \lambda e^{-\lambda y}$ for $y \ge 0$, and $f(y) = 0$ for $y < 0$.

$E[Y] = \int_{0}^{\infty} y \cdot \lambda e^{-\lambda y} dy$

This integral can be solved using integration by parts. Let $u = y$ and $dv = \lambda e^{-\lambda y} dy$. Then $du = dy$ and $v = -e^{-\lambda y}$.

$E[Y] = [-y e^{-\lambda y}]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-\lambda y}) dy$
$E[Y] = (0 - 0) + \int_{0}^{\infty} e^{-\lambda y} dy$
$E[Y] = \left[ -\frac{1}{\lambda} e^{-\lambda y} \right]_{0}^{\infty}$
$E[Y] = (0 - (-\frac{1}{\lambda})) = \frac{1}{\lambda}$

---

## 3. Properties of Expectation

Expectation is a linear operator. This means it satisfies the following important properties:

### Linearity Property

For any random variables $X$ and $Y$, and constants $a$ and $b$:

1.  **Scaling:** $E[aX] = a E[X]$
2.  **Shift:** $E[X + b] = E[X] + b$
3.  **Linear Combination:** $E[aX + bY] = a E[X] + b E[Y]$

**Note:** The linearity property $E[aX + bY] = a E[X] + b E[Y]$ holds **regardless of whether $X$ and $Y$ are independent**.

### Proof Sketch (Discrete Case)

Let $X$ and $Y$ be discrete random variables.

*   $E[aX] = \sum_{x} (ax) P(X=x) = a \sum_{x} x P(X=x) = a E[X]$.
*   $E[X+b] = \sum_{x} (x+b) P(X=x) = \sum_{x} x P(X=x) + \sum_{x} b P(X=x)$
    $= E[X] + b \sum_{x} P(X=x) = E[X] + b \cdot 1 = E[X] + b$.
*   $E[aX + bY] = \sum_{x, y} (ax+by) P(X=x, Y=y)$
    $= \sum_{x, y} ax P(X=x, Y=y) + \sum_{x, y} by P(X=x, Y=y)$
    $= a \sum_{x} x \sum_{y} P(X=x, Y=y) + b \sum_{y} y \sum_{x} P(X=x, Y=y)$
    $= a \sum_{x} x P(X=x) + b \sum_{y} y P(Y=y)$
    $= a E[X] + b E[Y]$.

### Examples

**Example 3.1: Sum of two dice rolls**

Let $X_1$ be the outcome of the first die and $X_2$ be the outcome of the second die. We know $E[X_1] = 3.5$ and $E[X_2] = 3.5$.
The sum of the two rolls is $S = X_1 + X_2$.
$E[S] = E[X_1 + X_2] = E[X_1] + E[X_2]$ (due to linearity)
$E[S] = 3.5 + 3.5 = 7$.

**Example 3.2: Expected value of a linear transformation**

Let $Y = 2X - 3$, where $X \sim \text{Binomial}(n, p)$. We know $E[X] = np$.
$E[Y] = E[2X - 3]$
$E[Y] = 2 E[X] - 3$ (using linearity)
$E[Y] = 2(np) - 3 = 2np - 3$.

---

## 4. Expectation of Common Distributions

Knowing the expectations of common distributions is crucial for problem-solving.

### Discrete Distributions

*   **Bernoulli(p):** $E[X] = p$
*   **Binomial(n, p):** $E[X] = np$
*   **Poisson($\lambda$):** $E[X] = \lambda$
*   **Geometric(p):** $E[X] = \frac{1}{p}$ (number of trials until first success)
*   **Negative Binomial(r, p):** $E[X] = \frac{r}{p}$ (number of trials until $r$ successes)

### Continuous Distributions

*   **Uniform([a, b]):** $E[X] = \frac{a+b}{2}$
*   **Exponential($\lambda$):** $E[X] = \frac{1}{\lambda}$
*   **Normal($\mu, \sigma^2$):** $E[X] = \mu$
*   **Gamma(k, $\theta$):** $E[X] = k\theta$

---

## 5. Conditional Expectation

### Key Concept: Conditional Expectation

**Conditional expectation** is the expected value of a random variable given that another random variable (or event) has taken a specific value. It tells us the average outcome of $X$ given some information about another related variable.

### Definition

*   **For Discrete Random Variables:**
    If $X$ and $Y$ are discrete random variables, the conditional expectation of $X$ given $Y=y$ is:
    $E[X | Y=y] = \sum_{x} x P(X=x | Y=y)$

*   **For Continuous Random Variables:**
    If $X$ and $Y$ are continuous random variables, the conditional expectation of $X$ given $Y=y$ is:
    $E[X | Y=y] = \int_{-\infty}^{\infty} x f_{X|Y}(x|y) dx$
    where $f_{X|Y}(x|y)$ is the conditional PDF of $X$ given $Y=y$.

### Law of Total Expectation (Iterated Expectation)

A very important property relating conditional expectation to unconditional expectation is the Law of Total Expectation:

$E[X] = E[E[X | Y]]$

This means the overall expectation of $X$ can be found by taking the expectation of the conditional expectation of $X$ given $Y$.

### Examples

**Example 5.1: Conditional Expectation of a Die Roll**

Let $X$ be the outcome of a fair six-sided die. Let $Y$ be an indicator variable such that $Y=1$ if $X$ is even, and $Y=0$ if $X$ is odd.
Possible values for $X$ are $\{1, 2, 3, 4, 5, 6\}$.
Possible values for $Y$ are $\{0, 1\}$.

*   $P(Y=1) = P(X \in \{2, 4, 6\}) = \frac{3}{6} = \frac{1}{2}$
*   $P(Y=0) = P(X \in \{1, 3, 5\}) = \frac{3}{6} = \frac{1}{2}$

Now let's calculate the conditional expectations:

*   $E[X | Y=1]$: Given $X$ is even, the possible values are $\{2, 4, 6\}$, each with probability $\frac{1}{3}$ (since $P(X=x|Y=1) = \frac{P(X=x \cap Y=1)}{P(Y=1)}$).
    $E[X | Y=1] = 2 \cdot \frac{1}{3} + 4 \cdot \frac{1}{3} + 6 \cdot \frac{1}{3} = \frac{12}{3} = 4$.

*   $E[X | Y=0]$: Given $X$ is odd, the possible values are $\{1, 3, 5\}$, each with probability $\frac{1}{3}$.
    $E[X | Y=0] = 1 \cdot \frac{1}{3} + 3 \cdot \frac{1}{3} + 5 \cdot \frac{1}{3} = \frac{9}{3} = 3$.

Now, let's use the Law of Total Expectation:
$E[X] = E[E[X | Y]]$
$E[X] = E[X | Y=1] P(Y=1) + E[X | Y=0] P(Y=0)$
$E[X] = 4 \cdot \frac{1}{2} + 3 \cdot \frac{1}{2} = 2 + 1.5 = 3.5$.
This matches our earlier calculation for $E[X]$.

**Example 5.2: Conditional Expectation in Physics (Conceptual)**

Imagine you are studying the velocity of a particle. The velocity $V$ might depend on time $t$. If you are interested in the average velocity at a specific time $t=t_0$, you are looking for $E[V | T=t_0]$. The Law of Total Expectation allows you to then find the overall average velocity by averaging over all possible times, weighted by the probability of being at that time.

---

## 6. Expectation and Average Outcome

The expectation of a random variable is precisely the **average outcome** you would expect over many trials. This is a direct consequence of the Law of Large Numbers, which states that the sample mean of independent and identically distributed random variables converges to the true expectation as the number of samples increases.

**Physical Science Context:**

*   **Particle Physics:** The expected energy of a particle in a given state.
*   **Thermodynamics:** The average kinetic energy of molecules in a gas (related to temperature).
*   **Quantum Mechanics:** Expectation values of observables (e.g., position, momentum) represent the average outcome of measuring those quantities.
*   **Signal Processing:** The average signal strength or noise level.

---

## Important Points to Remember

*   **Expectation is a scalar value**, representing the average.
*   For both discrete and continuous random variables, expectation is a **weighted average**.
*   **Linearity of Expectation is powerful:** $E[aX + bY] = aE[X] + bE[Y]$ holds even if $X$ and $Y$ are dependent.
*   The expectation does **not** necessarily have to be one of the possible values of the random variable (e.g., rolling a 3.5 on a die).
*   **Conditional Expectation** provides the average given specific information.
*   The **Law of Total Expectation** ($E[X] = E[E[X | Y]]$) is a crucial tool for calculating expectations.
*   In physical science, expectation values are often the quantities that are directly measurable or predictable on average.

---

## Practice Questions

**Question 1 (Discrete):**
A random variable $X$ has the following probability distribution:
$P(X=-2) = 0.3$
$P(X=0) = 0.4$
$P(X=5) = 0.3$
Calculate $E[X]$.

**Question 2 (Continuous):**
Let $Y$ be a continuous random variable with PDF $f(y) = 2y$ for $0 \le y \le 1$, and $f(y) = 0$ otherwise. Calculate $E[Y]$.

**Question 3 (Linearity):**
Let $X_1$ and $X_2$ be two independent random variables with $E[X_1] = 10$ and $E[X_2] = -5$. Calculate $E[3X_1 - 2X_2 + 7]$.

**Question 4 (Common Distribution):**
If $Z$ follows a standard normal distribution (mean 0, variance 1), what is $E[Z]$?

**Question 5 (Conditional Expectation):**
Consider the die roll example from Section 5. Let $W$ be an indicator variable such that $W=1$ if $X \ge 4$, and $W=0$ if $X < 4$.
Calculate $E[X | W=1]$.

---

## Answers

**Answer 1:**
$E[X] = (-2)(0.3) + (0)(0.4) + (5)(0.3)$
$E[X] = -0.6 + 0 + 1.5 = 0.9$

**Answer 2:**
$E[Y] = \int_{0}^{1} y \cdot (2y) dy$
$E[Y] = \int_{0}^{1} 2y^2 dy$
$E[Y] = \left[ \frac{2y^3}{3} \right]_{0}^{1}$
$E[Y] = \frac{2(1)^3}{3} - \frac{2(0)^3}{3} = \frac{2}{3}$

**Answer 3:**
Using linearity:
$E[3X_1 - 2X_2 + 7] = 3 E[X_1] - 2 E[X_2] + 7$
$= 3(10) - 2(-5) + 7$
$= 30 + 10 + 7 = 47$

**Answer 4:**
For a standard normal distribution $Z \sim N(0, 1)$, the mean is $\mu = 0$. Therefore, $E[Z] = 0$.

**Answer 5:**
If $W=1$, it means $X \ge 4$. The possible values for $X$ are $\{4, 5, 6\}$.
$P(X=4) = \frac{1}{6}$, $P(X=5) = \frac{1}{6}$, $P(X=6) = \frac{1}{6}$.
$P(W=1) = P(X \ge 4) = P(X=4) + P(X=5) + P(X=6) = \frac{1}{6} + \frac{1}{6} + \frac{1}{6} = \frac{3}{6} = \frac{1}{2}$.

The conditional probabilities $P(X=x | W=1)$ are:
$P(X=4 | W=1) = \frac{P(X=4 \cap W=1)}{P(W=1)} = \frac{P(X=4)}{P(W=1)} = \frac{1/6}{1/2} = \frac{1}{3}$.
Similarly, $P(X=5 | W=1) = \frac{1}{3}$ and $P(X=6 | W=1) = \frac{1}{3}$.

$E[X | W=1] = 4 \cdot \frac{1}{3} + 5 \cdot \frac{1}{3} + 6 \cdot \frac{1}{3}$
$E[X | W=1] = \frac{4+5+6}{3} = \frac{15}{3} = 5$.
