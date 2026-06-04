---
title: "Cumulative distribution function"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462eb3"
status: "completed"
scrapedAt: "2026-05-20T17:54:32.040Z"
---
# Mathematics for Physical Science - 4: Module 1: Random Variables
## Topic: Cumulative Distribution Function (CDF)

---

### 1. Introduction to Cumulative Distribution Function (CDF)

The **Cumulative Distribution Function (CDF)** is a fundamental concept in probability theory that describes the probability that a random variable takes on a value less than or equal to a specific value. It provides a comprehensive way to understand the distribution of probabilities for both discrete and continuous random variables.

**Key Concepts:**

*   **Random Variable (X):** A variable whose value is a numerical outcome of a random phenomenon.
*   **Probability:** A measure of the likelihood that an event will occur.
*   **Distribution:** The way in which probabilities are spread across the possible values of a random variable.

**Learning Outcome Addressed:**

*   This section introduces the foundational concept of the CDF, which is essential for understanding the behavior of random variables, a core aspect of both discrete and continuous cases. (Aligned with CO1 and CO2 at a K3 knowledge level).

**Textbook References:**

*   **Devore J. L. (9th ed.):** Chapter 3 introduces the CDF as a key descriptor of probability distributions.
*   **Ross, S. M. (6th ed.):** Chapter 2 also details the CDF as a way to characterize random variables.

---

### 2. Definition of the Cumulative Distribution Function (CDF)

The CDF of a random variable $X$, denoted by $F_X(x)$, is defined as:

$F_X(x) = P(X \le x)$

where:
*   $X$ is the random variable.
*   $x$ is any real number.
*   $P(X \le x)$ represents the probability that the random variable $X$ takes on a value less than or equal to $x$.

**Types of Random Variables and their CDFs:**

#### 2.1 CDF for Discrete Random Variables

For a discrete random variable $X$ with probability mass function (PMF) $p_X(x_i) = P(X = x_i)$, the CDF is given by the sum of probabilities for all values less than or equal to $x$:

$F_X(x) = \sum_{x_i \le x} p_X(x_i)$

**Example (Discrete):**

Consider a discrete random variable $X$ representing the number of heads when flipping a fair coin twice. The possible values of $X$ are 0, 1, and 2.
The PMF is:
*   $P(X=0) = P(TT) = 1/4$
*   $P(X=1) = P(HT, TH) = 2/4 = 1/2$
*   $P(X=2) = P(HH) = 1/4$

Let's find the CDF $F_X(x)$:

*   For $x < 0$: $F_X(x) = P(X \le x) = 0$
*   For $0 \le x < 1$: $F_X(x) = P(X \le x) = P(X=0) = 1/4$
*   For $1 \le x < 2$: $F_X(x) = P(X \le x) = P(X=0) + P(X=1) = 1/4 + 1/2 = 3/4$
*   For $x \ge 2$: $F_X(x) = P(X \le x) = P(X=0) + P(X=1) + P(X=2) = 1/4 + 1/2 + 1/4 = 1$

The CDF for this discrete random variable is a step function, with jumps occurring at the possible values of $X$.

**Learning Outcome Addressed:**

*   This section specifically addresses how to calculate and interpret the CDF for discrete random variables, directly linking to CO1.

**Textbook References:**

*   **Devore J. L. (9th ed.):** Section 3.2 discusses the CDF for discrete random variables and its properties.
*   **Ross, S. M. (6th ed.):** Section 2.2 provides examples of CDFs for discrete random variables.

#### 2.2 CDF for Continuous Random Variables

For a continuous random variable $X$ with probability density function (PDF) $f_X(x)$, the CDF is given by the integral of the PDF from $-\infty$ to $x$:

$F_X(x) = P(X \le x) = \int_{-\infty}^{x} f_X(t) dt$

**Example (Continuous):**

Consider a continuous random variable $X$ uniformly distributed over the interval $[0, 1]$. The PDF is:
$f_X(x) = \begin{cases} 1 & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$

Let's find the CDF $F_X(x)$:

*   For $x < 0$: $F_X(x) = \int_{-\infty}^{x} 0 \, dt = 0$
*   For $0 \le x \le 1$: $F_X(x) = \int_{-\infty}^{x} f_X(t) dt = \int_{-\infty}^{0} 0 \, dt + \int_{0}^{x} 1 \, dt = 0 + [t]_{0}^{x} = x$
*   For $x > 1$: $F_X(x) = \int_{-\infty}^{x} f_X(t) dt = \int_{-\infty}^{0} 0 \, dt + \int_{0}^{1} 1 \, dt + \int_{1}^{x} 0 \, dt = 0 + [t]_{0}^{1} + 0 = 1$

So, the CDF for a uniform distribution on $[0, 1]$ is:
$F_X(x) = \begin{cases} 0 & \text{if } x < 0 \\ x & \text{if } 0 \le x \le 1 \\ 1 & \text{if } x > 1 \end{cases}$

**Learning Outcome Addressed:**

*   This section specifically addresses how to calculate and interpret the CDF for continuous random variables, directly linking to CO2.

**Textbook References:**

*   **Devore J. L. (9th ed.):** Section 3.3 discusses the CDF for continuous random variables and its relationship with the PDF.
*   **Ross, S. M. (6th ed.):** Section 2.3 provides examples of CDFs for continuous random variables.
*   **Papoulis & Pillai (4th ed.):** Chapter 2 provides a rigorous treatment of CDFs for continuous random variables.

---

### 3. Properties of the Cumulative Distribution Function (CDF)

The CDF, regardless of whether the random variable is discrete or continuous, must satisfy a set of fundamental properties. These properties are crucial for verifying if a function is a valid CDF.

**Key Properties:**

1.  **Non-decreasing:** For any $x_1 < x_2$, $F_X(x_1) \le F_X(x_2)$.
    *   **Explanation:** As $x$ increases, the probability of $X$ being less than or equal to $x$ can only increase or stay the same, never decrease.

2.  **Limits:**
    *   $\lim_{x \to -\infty} F_X(x) = 0$
        *   **Explanation:** As $x$ approaches negative infinity, the probability of $X$ being less than or equal to $x$ approaches zero.
    *   $\lim_{x \to \infty} F_X(x) = 1$
        *   **Explanation:** As $x$ approaches positive infinity, the probability of $X$ being less than or equal to $x$ approaches one, meaning $X$ must take on some value.

3.  **Right-continuity:** The CDF is right-continuous, meaning $\lim_{h \to 0^+} F_X(x+h) = F_X(x)$.
    *   **Explanation:** This property is particularly relevant for discrete random variables where the CDF has jumps. The value of the CDF at a jump point is the value approached from the right.

4.  **Probability of an Interval:** The CDF can be used to calculate the probability that $X$ falls within a specific interval $(a, b]$:
    $P(a < X \le b) = F_X(b) - F_X(a)$
    *   **Explanation:** This is derived from the definition of the CDF:
        $P(a < X \le b) = P(X \le b) - P(X \le a) = F_X(b) - F_X(a)$.

5.  **For Discrete Variables (Jump Property):** The probability of a discrete random variable taking on a specific value $x_0$ is the size of the jump in the CDF at $x_0$:
    $P(X = x_0) = F_X(x_0) - \lim_{h \to 0^+} F_X(x_0 - h) = F_X(x_0) - F_X(x_0^-)$
    where $F_X(x_0^-)$ is the left-hand limit.

**Learning Outcome Addressed:**

*   These properties are universal for all CDFs, reinforcing the understanding of random variable behavior for both discrete and continuous cases. (Aligned with CO1 and CO2 at a K3 knowledge level).

**Textbook References:**

*   **Devore J. L. (9th ed.):** Section 3.2 and 3.3 explicitly list and explain these properties.
*   **Ross, S. M. (6th ed.):** Section 2.2 and 2.3 discuss these essential properties.
*   **Papoulis & Pillai (4th ed.):** Chapter 2 provides a formal derivation and discussion of these properties.

---

### 4. Using the CDF to Calculate Probabilities

The CDF is a powerful tool for calculating various probabilities related to a random variable.

#### 4.1 Probability of $X$ in an Interval

As mentioned in the properties, the probability that $X$ falls in an interval $(a, b]$ is:
$P(a < X \le b) = F_X(b) - F_X(a)$

**Example:**

Using the uniform distribution example from Section 2.2, calculate $P(0.3 < X \le 0.7)$.
$F_X(x) = x$ for $0 \le x \le 1$.
$P(0.3 < X \le 0.7) = F_X(0.7) - F_X(0.3) = 0.7 - 0.3 = 0.4$.

**Important Note:** For continuous random variables, $P(a < X \le b) = P(a \le X \le b) = P(a < X < b) = P(a \le X < b)$, as the probability of $X$ being exactly equal to any single value is zero.

#### 4.2 Probability of $X$ Being Less Than or Equal To a Value

This is the direct definition of the CDF:
$P(X \le x) = F_X(x)$

#### 4.3 Probability of $X$ Being Greater Than a Value

This can be calculated using the complement rule:
$P(X > x) = 1 - P(X \le x) = 1 - F_X(x)$

**Example:**

Using the uniform distribution example from Section 2.2, calculate $P(X > 0.6)$.
$P(X > 0.6) = 1 - F_X(0.6) = 1 - 0.6 = 0.4$.

#### 4.4 Probability of $X$ Being Less Than a Value

For continuous random variables: $P(X < x) = P(X \le x) = F_X(x)$.
For discrete random variables, $P(X < x) = P(X \le x^-)$, where $x^-$ is the value immediately preceding $x$ in the ordered list of possible values, or $P(X < x) = F_X(x^-)$.

**Learning Outcome Addressed:**

*   This section demonstrates the practical application of the CDF in calculating various probability scenarios, reinforcing CO1 and CO2.

**Textbook References:**

*   **Devore J. L. (9th ed.):** Chapter 3 provides numerous examples of using the CDF for probability calculations.
*   **Ross, S. M. (6th ed.):** Chapter 2 also showcases practical uses of the CDF.

---

### 5. CDF for Specific Common Distributions (Examples)

Understanding the CDF for well-known probability distributions is essential for applications in physical sciences.

#### 5.1 Binomial Distribution (Discrete)

A random variable $X$ follows a binomial distribution $B(n, p)$ if it represents the number of successes in $n$ independent Bernoulli trials, each with probability of success $p$.
$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$ for $k = 0, 1, \ldots, n$.

The CDF is:
$F_X(k) = P(X \le k) = \sum_{i=0}^{k} \binom{n}{i} p^i (1-p)^{n-i}$

**Example:**
If $X \sim B(3, 0.5)$, then:
$P(X=0) = \binom{3}{0} (0.5)^0 (0.5)^3 = 0.125$
$P(X=1) = \binom{3}{1} (0.5)^1 (0.5)^2 = 0.375$
$P(X=2) = \binom{3}{2} (0.5)^2 (0.5)^1 = 0.375$
$P(X=3) = \binom{3}{3} (0.5)^3 (0.5)^0 = 0.125$

$F_X(1) = P(X \le 1) = P(X=0) + P(X=1) = 0.125 + 0.375 = 0.5$

#### 5.2 Poisson Distribution (Discrete)

A random variable $X$ follows a Poisson distribution $\text{Po}(\lambda)$ if it represents the number of events in a fixed interval of time or space, given a constant average rate $\lambda$.
$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$ for $k = 0, 1, 2, \ldots$

The CDF is:
$F_X(k) = P(X \le k) = \sum_{i=0}^{k} \frac{e^{-\lambda} \lambda^i}{i!}$

#### 5.3 Exponential Distribution (Continuous)

A random variable $X$ follows an exponential distribution $\text{Exp}(\lambda)$ if it represents the time until the next event in a Poisson process with rate $\lambda$.
$f_X(x) = \lambda e^{-\lambda x}$ for $x \ge 0$.

The CDF is:
$F_X(x) = P(X \le x) = \int_{0}^{x} \lambda e^{-\lambda t} dt = [-e^{-\lambda t}]_{0}^{x} = 1 - e^{-\lambda x}$ for $x \ge 0$.

**Example:**
If $X \sim \text{Exp}(0.5)$ (e.g., average of 0.5 events per unit time), then $\lambda=0.5$.
$F_X(x) = 1 - e^{-0.5x}$ for $x \ge 0$.
$P(X \le 2) = F_X(2) = 1 - e^{-0.5 \times 2} = 1 - e^{-1} \approx 1 - 0.368 = 0.632$.

#### 5.4 Normal Distribution (Continuous)

A random variable $X$ follows a normal distribution $N(\mu, \sigma^2)$ with mean $\mu$ and variance $\sigma^2$.
$f_X(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$ for $-\infty < x < \infty$.

The CDF is:
$F_X(x) = P(X \le x) = \int_{-\infty}^{x} \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}(\frac{t-\mu}{\sigma})^2} dt$

**Standard Normal Distribution:**
For the standard normal distribution $Z \sim N(0, 1)$, the CDF is denoted by $\Phi(z)$.
$\Phi(z) = \int_{-\infty}^{z} \frac{1}{\sqrt{2\pi}} e^{-\frac{t^2}{2}} dt$

The CDF of any normal distribution can be related to the standard normal CDF:
$F_X(x) = P(X \le x) = P\left(\frac{X-\mu}{\sigma} \le \frac{x-\mu}{\sigma}\right) = P\left(Z \le \frac{x-\mu}{\sigma}\right) = \Phi\left(\frac{x-\mu}{\sigma}\right)$

**Important Note:** The integral for the normal CDF cannot be evaluated in a simple closed form using elementary functions. Values of $\Phi(z)$ are typically found using standard normal tables or statistical software.

**Learning Outcome Addressed:**

*   This section provides practical examples of CDFs for commonly encountered distributions in physical science, aiding in the application of CO1 and CO2.

**Textbook References:**

*   **Devore J. L. (9th ed.):** Chapters 3 and 4 cover the CDFs of binomial, Poisson, exponential, and normal distributions with detailed explanations and tables for normal distribution.
*   **Ross, S. M. (6th ed.):** Chapters 2 and 3 also discuss these distributions and their CDFs.
*   **Sastry, S. S. (5th ed.):** While primarily focused on numerical analysis, concepts related to integration for continuous functions are foundational to understanding CDFs of continuous distributions.
*   **Chapra & Canale (8th ed.):** Their work on numerical methods is implicitly relevant as numerical integration is often used to approximate CDFs when closed-form solutions are not available (e.g., for the normal distribution).

---

### 6. Relation to Other Distribution Functions

#### 6.1 Probability Density Function (PDF) for Continuous Variables

The CDF is the integral of the PDF: $F_X(x) = \int_{-\infty}^{x} f_X(t) dt$.
The PDF is the derivative of the CDF: $f_X(x) = \frac{d}{dx} F_X(x)$.

#### 6.2 Probability Mass Function (PMF) for Discrete Variables

The CDF is the sum of the PMF values: $F_X(x) = \sum_{x_i \le x} p_X(x_i)$.
The PMF can be found from the CDF by looking at the jumps: $p_X(x_0) = F_X(x_0) - F_X(x_0^-)$.

**Learning Outcome Addressed:**

*   Understanding these relationships is key to grasping the equivalence between different ways of describing probability distributions, supporting CO1 and CO2.

---

### 7. Applications in Physical Science

The CDF is a ubiquitous tool in physical science for modeling and analyzing random phenomena.

*   **Reliability Engineering:** CDF of failure time for components.
*   **Statistical Mechanics:** Describing the distribution of particle energies or velocities.
*   **Quantum Mechanics:** Probability of finding a particle in a certain region.
*   **Signal Processing:** Noise distribution in signals.
*   **Climate Science:** Probability of exceeding certain temperature thresholds.
*   **Particle Physics:** Probability of detecting a particle within a certain energy range.

**Example Scenario (Physical Science):**
Consider a scientist measuring the arrival times of cosmic ray particles at a detector. The arrival times might be modeled by an exponential distribution. The CDF of this distribution would allow the scientist to calculate the probability of a cosmic ray arriving within a specific time window.

**Learning Outcome Addressed:**

*   This section directly links the theoretical concept of CDFs to practical applications in physical science, emphasizing the relevance and utility for CO1, CO2, and potentially CO3 if considering parameter estimation.

---

### 8. Practice Questions and Exercises

**Question 1 (Discrete CDF):**
A random variable $X$ has the following PMF:
$P(X=1) = 0.2$, $P(X=2) = 0.5$, $P(X=3) = 0.3$.
Calculate and sketch the CDF of $X$.

**Answer 1:**
*   $F_X(x) = 0$ for $x < 1$
*   $F_X(x) = 0.2$ for $1 \le x < 2$
*   $F_X(x) = 0.2 + 0.5 = 0.7$ for $2 \le x < 3$
*   $F_X(x) = 0.7 + 0.3 = 1.0$ for $x \ge 3$

The sketch would be a step function with jumps at $x=1$ (height 0.2), $x=2$ (height 0.5), and $x=3$ (height 0.3).

**Question 2 (Continuous CDF):**
Let $X$ be a continuous random variable with PDF $f_X(x) = 2x$ for $0 \le x \le 1$, and $f_X(x) = 0$ otherwise.
a) Find the CDF of $X$.
b) Calculate $P(0.2 < X \le 0.5)$.
c) Calculate $P(X > 0.8)$.

**Answer 2:**
a) For $0 \le x \le 1$: $F_X(x) = \int_{0}^{x} 2t \, dt = [t^2]_{0}^{x} = x^2$.
So, the CDF is:
$F_X(x) = \begin{cases} 0 & \text{if } x < 0 \\ x^2 & \text{if } 0 \le x \le 1 \\ 1 & \text{if } x > 1 \end{cases}$

b) $P(0.2 < X \le 0.5) = F_X(0.5) - F_X(0.2) = (0.5)^2 - (0.2)^2 = 0.25 - 0.04 = 0.21$.

c) $P(X > 0.8) = 1 - P(X \le 0.8) = 1 - F_X(0.8) = 1 - (0.8)^2 = 1 - 0.64 = 0.36$.

**Question 3 (Normal Distribution CDF):**
Suppose a measurement in an experiment follows a normal distribution with a mean of 100 units and a standard deviation of 10 units. What is the probability that a measurement falls between 95 and 115 units? (Use standard normal table or $\Phi(z)$ values).

**Answer 3:**
Let $X \sim N(100, 10^2)$. We want to find $P(95 < X < 115)$.
We convert to z-scores:
$z_1 = \frac{95 - 100}{10} = \frac{-5}{10} = -0.5$
$z_2 = \frac{115 - 100}{10} = \frac{15}{10} = 1.5$

$P(95 < X < 115) = P(-0.5 < Z < 1.5) = \Phi(1.5) - \Phi(-0.5)$.
From standard normal tables:
$\Phi(1.5) \approx 0.9332$
$\Phi(-0.5) \approx 0.3085$

$P(95 < X < 115) \approx 0.9332 - 0.3085 = 0.6247$.

**Learning Outcome Addressed:**

*   These questions directly test the understanding of calculating CDFs for discrete and continuous random variables, as well as applying them for probability calculations, directly addressing CO1 and CO2. Question 3 also touches upon the application of the normal distribution's CDF, relevant to CO2.

---

### 9. Important Points to Remember

*   The CDF $F_X(x)$ is defined as $P(X \le x)$.
*   It is always non-decreasing and ranges from 0 to 1.
*   For discrete variables, the CDF is a step function. The height of the step at a value $x_i$ is $P(X=x_i)$.
*   For continuous variables, the CDF is a continuous function, and its derivative is the PDF.
*   The CDF can be used to find the probability of a random variable falling within any interval.
*   Standard normal distribution tables (for $\Phi(z)$) are crucial for calculations involving the normal distribution CDF.
*   Understanding the CDF is fundamental to probability theory and its applications in physical sciences.

---

This comprehensive set of notes covers the definition, properties, and applications of the Cumulative Distribution Function (CDF), providing a solid foundation for understanding random variables in Mathematics for Physical Science – 4.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
