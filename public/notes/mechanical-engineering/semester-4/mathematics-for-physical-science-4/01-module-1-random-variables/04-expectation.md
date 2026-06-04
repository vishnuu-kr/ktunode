---
title: "Expectation"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462eb4"
status: "completed"
scrapedAt: "2026-05-20T17:54:32.751Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 1: Random Variables
### Topic: Expectation

This module introduces the fundamental concept of **Expectation**, a cornerstone in the study of random variables. Expectation quantifies the average value of a random variable over many trials. Understanding expectation is crucial for analyzing and predicting the behavior of physical phenomena that exhibit randomness.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Define the expected value of a discrete random variable and a continuous random variable.
*   Calculate the expected value for various probability distributions.
*   Understand and apply the properties of expectation.
*   Relate expectation to concepts like mean, average, and center of mass.
*   Utilize expectation in solving problems related to physical science.

---

### 1. Introduction to Expectation

The **expected value** of a random variable represents its long-run average value. Intuitively, if we were to repeat an experiment many times and record the values of the random variable, the average of these values would approach the expected value.

**Reference:** Devore J. L. (9th ed.) Chapter 3, Section 3.2.1.

---

### 2. Expectation of a Discrete Random Variable

**Definition:** For a discrete random variable $X$ with probability mass function (PMF) $p(x)$, the expected value of $X$, denoted by $E(X)$ or $\mu_X$, is defined as:

$$E(X) = \sum_{x} x \cdot p(x)$$

where the sum is taken over all possible values $x$ that $X$ can assume.

**Key Concepts:**

*   **PMF ($p(x)$):** The probability that a discrete random variable takes on a specific value $x$.
*   **Weighted Average:** The expected value is a weighted average of the possible values of $X$, where the weights are the probabilities of those values.

**Example (Devore J. L., Chapter 3):**

Consider a game where you roll a fair six-sided die. Let $X$ be the random variable representing the outcome of the roll. The possible values of $X$ are $\{1, 2, 3, 4, 5, 6\}$, and the PMF is $p(x) = 1/6$ for each of these values.

The expected value of the roll is:
$$E(X) = 1 \cdot \frac{1}{6} + 2 \cdot \frac{1}{6} + 3 \cdot \frac{1}{6} + 4 \cdot \frac{1}{6} + 5 \cdot \frac{1}{6} + 6 \cdot \frac{1}{6}$$
$$E(X) = \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = 3.5$$

**Physical Science Relevance:** If you were to play this game many times, your average score would approach 3.5. This concept is analogous to finding the average position of particles in a system or the average energy of a molecule.

---

### 3. Expectation of a Function of a Discrete Random Variable

**Definition:** If $Y = g(X)$ is a function of a discrete random variable $X$, then the expected value of $Y$ is given by:

$$E(Y) = E(g(X)) = \sum_{x} g(x) \cdot p(x)$$

where the sum is taken over all possible values $x$ that $X$ can assume. This is known as the **Law of the Unconscious Statistician (LOTUS)**.

**Example:**

Let $X$ be the outcome of a die roll as before, and let $Y = X^2$. We want to find the expected value of the square of the roll.

$$E(Y) = E(X^2) = \sum_{x=1}^{6} x^2 \cdot p(x)$$
$$E(X^2) = 1^2 \cdot \frac{1}{6} + 2^2 \cdot \frac{1}{6} + 3^2 \cdot \frac{1}{6} + 4^2 \cdot \frac{1}{6} + 5^2 \cdot \frac{1}{6} + 6^2 \cdot \frac{1}{6}$$
$$E(X^2) = \frac{1+4+9+16+25+36}{6} = \frac{91}{6} \approx 15.17$$

**Physical Science Relevance:** This is useful for calculating quantities like the mean squared displacement of a particle or the variance of a measurement.

---

### 4. Expectation of a Continuous Random Variable

**Definition:** For a continuous random variable $X$ with probability density function (PDF) $f(x)$, the expected value of $X$, denoted by $E(X)$ or $\mu_X$, is defined as:

$$E(X) = \int_{-\infty}^{\infty} x \cdot f(x) \, dx$$

provided the integral converges absolutely.

**Key Concepts:**

*   **PDF ($f(x)$):** A function such that $f(x) \ge 0$ for all $x$, and $\int_{-\infty}^{\infty} f(x) \, dx = 1$. The probability that $X$ falls in an interval $[a, b]$ is $\int_{a}^{b} f(x) \, dx$.
*   **Integral as Summation:** The integral represents a continuous summation over all possible values of $X$, weighted by their probability densities.

**Example (Devore J. L., Chapter 3):**

Consider a random variable $X$ uniformly distributed on the interval $[0, 1]$. Its PDF is $f(x) = 1$ for $0 \le x \le 1$, and $f(x) = 0$ otherwise.

The expected value is:
$$E(X) = \int_{-\infty}^{\infty} x \cdot f(x) \, dx = \int_{0}^{1} x \cdot 1 \, dx$$
$$E(X) = \left[ \frac{x^2}{2} \right]_{0}^{1} = \frac{1^2}{2} - \frac{0^2}{2} = \frac{1}{2}$$

**Physical Science Relevance:** This represents the average value of a physical quantity that is continuously distributed, such as the average position of a charge distribution or the average temperature in a material.

---

### 5. Expectation of a Function of a Continuous Random Variable

**Definition:** If $Y = g(X)$ is a function of a continuous random variable $X$ with PDF $f(x)$, then the expected value of $Y$ is given by:

$$E(Y) = E(g(X)) = \int_{-\infty}^{\infty} g(x) \cdot f(x) \, dx$$

This is again the Law of the Unconscious Statistician (LOTUS).

**Example:**

Let $X$ be uniformly distributed on $[0, 1]$ with $f(x)=1$ for $0 \le x \le 1$. Let $Y = X^2$.

$$E(Y) = E(X^2) = \int_{0}^{1} x^2 \cdot 1 \, dx$$
$$E(X^2) = \left[ \frac{x^3}{3} \right]_{0}^{1} = \frac{1^3}{3} - \frac{0^3}{3} = \frac{1}{3}$$

**Physical Science Relevance:** Consider the kinetic energy of a particle which might be proportional to the square of its velocity. Calculating the expected kinetic energy involves $E(v^2)$.

---

### 6. Properties of Expectation

Let $X$ and $Y$ be random variables, and let $a$ and $b$ be constants.

1.  **Linearity of Expectation:**
    *   $E(aX) = aE(X)$
    *   $E(X+Y) = E(X) + E(Y)$
    *   **Combined:** $E(aX + bY) = aE(X) + bE(Y)$

2.  **Expectation of a Constant:**
    *   $E(c) = c$, where $c$ is a constant.

3.  **Monotonicity:**
    *   If $X \ge 0$ for all outcomes, then $E(X) \ge 0$.
    *   If $X \ge Y$ for all outcomes, then $E(X) \ge E(Y)$.

4.  **Expectation of a Product (Independent Variables):**
    *   If $X$ and $Y$ are independent, then $E(XY) = E(X)E(Y)$.

**Reference:** Devore J. L. (9th ed.) Chapter 3, Section 3.2.2.
**Reference:** Papoulis, A. & Pillai, S.U. (4th ed.) Chapter 5.

**Example of Linearity:**
Suppose we have two independent dice rolls, $X_1$ and $X_2$. Let $S = X_1 + X_2$ be the sum of the outcomes.
We know $E(X_1) = 3.5$ and $E(X_2) = 3.5$.
Using linearity, $E(S) = E(X_1 + X_2) = E(X_1) + E(X_2) = 3.5 + 3.5 = 7$.

**Example of Independent Product:**
Let $X$ be the outcome of a die roll and $Y$ be the outcome of a coin toss (1 for heads, 0 for tails), where $P(\text{Heads}) = 0.5$.
$E(X) = 3.5$.
$E(Y) = 1 \cdot 0.5 + 0 \cdot 0.5 = 0.5$.
If the die roll and coin toss are independent, then $E(XY) = E(X)E(Y) = 3.5 \cdot 0.5 = 1.75$.

**Physical Science Relevance:** Linearity is extremely powerful. It means the expected value of a sum of random quantities is the sum of their expected values, regardless of whether they are independent. This is useful in analyzing systems with multiple interacting components, like the total energy in a system of particles. The independence property is crucial when dealing with independent sources of noise or measurement errors.

---

### 7. Expectation for Specific Distributions

Understanding the expected values for common probability distributions is essential.

*   **Binomial Distribution:** $X \sim \text{Binomial}(n, p)$
    $E(X) = np$
    *   $n$: number of trials, $p$: probability of success in a single trial.
    **Reference:** Devore J. L. (9th ed.) Chapter 4, Section 4.2.

*   **Poisson Distribution:** $X \sim \text{Poisson}(\lambda)$
    $E(X) = \lambda$
    *   $\lambda$: average rate of occurrence.
    **Reference:** Devore J. L. (9th ed.) Chapter 4, Section 4.3.

*   **Exponential Distribution:** $X \sim \text{Exponential}(\lambda)$
    $E(X) = 1/\lambda$
    *   $\lambda$: rate parameter.
    **Reference:** Devore J. L. (9th ed.) Chapter 5, Section 5.2.

*   **Normal Distribution:** $X \sim \text{Normal}(\mu, \sigma^2)$
    $E(X) = \mu$
    *   $\mu$: mean, $\sigma^2$: variance.
    **Reference:** Devore J. L. (9th ed.) Chapter 5, Section 5.3.

**Physical Science Relevance:**
*   **Binomial:** Number of successful events in a series of experiments (e.g., number of radioactive decays in a fixed time interval if each atom has a small probability of decaying).
*   **Poisson:** Number of events in a fixed interval of time or space (e.g., number of photons detected by a sensor, number of defects in a material sample).
*   **Exponential:** Time between events in a Poisson process (e.g., time between radioactive decays, time until the next arrival at a detector).
*   **Normal:** Many physical phenomena approximate a normal distribution (e.g., measurement errors, heights of particles, particle speeds).

---

### 8. Expectation as a Measure of Central Tendency

**Key Point:** The expected value of a random variable is its **mean** or **average value**. It represents the center of the probability distribution.

**Connection to Center of Mass:** In physics, the expected value of a random variable can be interpreted as the center of mass of a system where the values of the variable are located at their respective points and the probability (or probability density) acts as the mass distribution.

**Reference:** Sastry S. S. (5th ed.) Chapter 2 (for general concepts of average and integration).

---

### 9. Connection to Numerical Analysis (for advanced understanding and Course Outcome CO4)

While this topic primarily focuses on probabilistic definitions, the *calculation* of expectations for complex continuous distributions might involve numerical integration.

*   **Numerical Integration:** If the integral $\int x \cdot f(x) \, dx$ is difficult or impossible to solve analytically, numerical methods (like the trapezoidal rule or Simpson's rule) can be used to approximate the expected value.
*   **Monte Carlo Methods:** For high-dimensional or very complex distributions, Monte Carlo integration (generating random samples from the distribution and averaging the function of these samples) is a powerful technique to estimate expectations.

**Reference:** Sastry S. S. (5th ed.) Chapters 4-7 (Numerical Integration).
**Reference:** Chapra C. & Canale R. (8th ed.) Chapters 18-20 (Numerical Integration).

**Physical Science Relevance:** In simulations of complex physical systems (e.g., molecular dynamics, climate modeling), numerical methods are essential for calculating average properties or expected values of various physical quantities.

---

### Important Points to Remember

*   **Expectation is a weighted average:** Values with higher probabilities contribute more to the expected value.
*   **LOTUS (Law of the Unconscious Statistician):** Allows us to find the expectation of a function of a random variable without finding the distribution of the function itself.
*   **Linearity of Expectation:** $E(aX + bY) = aE(X) + bE(Y)$ holds regardless of independence.
*   **Independence is required for $E(XY) = E(X)E(Y)$.**
*   **Expected value is a property of the *distribution*, not a single outcome.**

---

### Practice Questions

1.  **Discrete Expectation:** A random variable $X$ has the following probability distribution:
    $P(X=0) = 0.2$, $P(X=1) = 0.5$, $P(X=2) = 0.3$.
    Calculate $E(X)$ and $E(X^2)$.

2.  **Continuous Expectation:** Let $X$ be a continuous random variable with PDF $f(x) = 2e^{-2x}$ for $x \ge 0$, and $f(x) = 0$ for $x < 0$.
    Calculate $E(X)$ and $E(X^2)$.

3.  **Linearity of Expectation:** Two independent experiments are conducted. Let $X$ be the outcome of the first experiment with $E(X) = 10$ and $Y$ be the outcome of the second experiment with $E(Y) = 5$. What is $E(3X - 2Y + 7)$?

4.  **Expectation of a Function:** A particle's position along a line is given by a random variable $X$ with PDF $f(x) = \frac{1}{2}$ for $-1 \le x \le 1$. What is the expected kinetic energy if kinetic energy $K = \frac{1}{2}mv^2$, and for this scenario, we can assume $v=x$ (so $K = \frac{1}{2}mx^2$)? Calculate $E(K)$.

5.  **Binomial Expectation:** In a quality control process, 10% of manufactured items are defective. If a random sample of 20 items is taken, what is the expected number of defective items in the sample?

---

### Answers to Practice Questions

1.  **Discrete Expectation:**
    $E(X) = (0 \cdot 0.2) + (1 \cdot 0.5) + (2 \cdot 0.3) = 0 + 0.5 + 0.6 = 1.1$
    $E(X^2) = (0^2 \cdot 0.2) + (1^2 \cdot 0.5) + (2^2 \cdot 0.3) = (0 \cdot 0.2) + (1 \cdot 0.5) + (4 \cdot 0.3) = 0 + 0.5 + 1.2 = 1.7$

2.  **Continuous Expectation:** (This is an Exponential distribution with $\lambda = 2$)
    $E(X) = \int_{0}^{\infty} x \cdot 2e^{-2x} \, dx$
    Using integration by parts: $\int u \, dv = uv - \int v \, du$.
    Let $u = x$, $dv = 2e^{-2x} \, dx$. Then $du = dx$, $v = -e^{-2x}$.
    $E(X) = [-xe^{-2x}]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-2x}) \, dx$
    $E(X) = (0 - 0) + \int_{0}^{\infty} e^{-2x} \, dx$
    $E(X) = [-\frac{1}{2}e^{-2x}]_{0}^{\infty} = (0) - (-\frac{1}{2}) = \frac{1}{2}$.
    Alternatively, for Exponential($\lambda$), $E(X) = 1/\lambda = 1/2$.

    $E(X^2) = \int_{0}^{\infty} x^2 \cdot 2e^{-2x} \, dx$
    Using integration by parts again: Let $u = x^2$, $dv = 2e^{-2x} \, dx$. Then $du = 2x \, dx$, $v = -e^{-2x}$.
    $E(X^2) = [-x^2e^{-2x}]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-2x}) \cdot 2x \, dx$
    $E(X^2) = (0 - 0) + \int_{0}^{\infty} 2xe^{-2x} \, dx = 2 \int_{0}^{\infty} xe^{-2x} \, dx$.
    We already calculated $\int_{0}^{\infty} xe^{-2x} \, dx = \frac{1}{2}$.
    So, $E(X^2) = 2 \cdot \frac{1}{2} = 1$.
    Alternatively, for Exponential($\lambda$), $E(X^2) = 2/\lambda^2 = 2/(2^2) = 2/4 = 1/2$.
    Wait, check calculation. $\int_{0}^{\infty} x \cdot 2e^{-2x} \, dx = E(X)$ from above, which is $1/2$.
    So $E(X^2) = 2 \cdot (1/2) = 1$.
    Let's recheck the formula for $E(X^2)$ for Exponential distribution. It's $2/\lambda^2$.
    $E(X^2) = 2/(2^2) = 2/4 = 1/2$.
    Let's re-evaluate the integration carefully.
    $E(X) = \int_{0}^{\infty} x \cdot 2e^{-2x} \, dx$. $u=x, dv=2e^{-2x}dx \implies du=dx, v=-e^{-2x}$.
    $E(X) = [-xe^{-2x}]_0^\infty - \int_0^\infty -e^{-2x} dx = 0 + \int_0^\infty e^{-2x} dx = [-1/2 e^{-2x}]_0^\infty = 0 - (-1/2) = 1/2$. Correct.

    $E(X^2) = \int_{0}^{\infty} x^2 \cdot 2e^{-2x} \, dx$. $u=x^2, dv=2e^{-2x}dx \implies du=2xdx, v=-e^{-2x}$.
    $E(X^2) = [-x^2e^{-2x}]_0^\infty - \int_0^\infty -e^{-2x} (2x) dx = 0 + \int_0^\infty 2xe^{-2x} dx$.
    We know $\int_0^\infty xe^{-2x} dx = E(X)/2 = (1/2)/2 = 1/4$ from the previous integration.
    So $E(X^2) = 2 \times (1/4) = 1/2$. This matches the formula $2/\lambda^2$.

    **Answer for Q2:** $E(X) = 1/2$, $E(X^2) = 1/2$.

3.  **Linearity of Expectation:**
    $E(3X - 2Y + 7) = 3E(X) - 2E(Y) + E(7)$
    $= 3(10) - 2(5) + 7$
    $= 30 - 10 + 7 = 27$.

4.  **Expectation of a Function:**
    $X$ is uniform on $[-1, 1]$, so $f(x) = 1/2$ for $-1 \le x \le 1$.
    $E(K) = E(\frac{1}{2}mX^2) = \frac{1}{2}m E(X^2)$ (using linearity).
    $E(X^2) = \int_{-1}^{1} x^2 \cdot f(x) \, dx = \int_{-1}^{1} x^2 \cdot \frac{1}{2} \, dx$
    $E(X^2) = \frac{1}{2} \int_{-1}^{1} x^2 \, dx = \frac{1}{2} \left[ \frac{x^3}{3} \right]_{-1}^{1}$
    $E(X^2) = \frac{1}{2} \left( \frac{1^3}{3} - \frac{(-1)^3}{3} \right) = \frac{1}{2} \left( \frac{1}{3} - (-\frac{1}{3}) \right) = \frac{1}{2} \left( \frac{2}{3} \right) = \frac{1}{3}$.
    Therefore, $E(K) = \frac{1}{2}m \left(\frac{1}{3}\right) = \frac{m}{6}$.

5.  **Binomial Expectation:**
    This is a binomial distribution with $n=20$ (sample size) and $p=0.10$ (probability of defect).
    Expected number of defective items = $np = 20 \times 0.10 = 2$.

---

This concludes the topic on Expectation. A solid understanding of expectation is vital for many subsequent topics in probability and statistics, including variance, covariance, and various statistical inference methods.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
