---
title: "Discrete random variables and their probability distributions"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462eb2"
status: "completed"
scrapedAt: "2026-05-20T17:54:31.331Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Discrete Random Variables and Their Probability Distributions

---

### Introduction to Random Variables

A **random variable** is a variable whose value is a numerical outcome of a random phenomenon. It's a function that maps outcomes from a sample space to real numbers.

**Key Concept:** We use uppercase letters (e.g., $X$, $Y$) to denote random variables and the corresponding lowercase letters (e.g., $x$, $y$) to denote specific values that the random variable can take.

**Example:**
Consider flipping a coin twice. The sample space is $S = \{HH, HT, TH, TT\}$.
Let $X$ be the number of heads obtained. The possible values of $X$ are 0, 1, and 2.
*   If the outcome is $TT$, $X=0$.
*   If the outcome is $HT$ or $TH$, $X=1$.
*   If the outcome is $HH$, $X=2$.
Here, $X$ is a random variable.

---

### Discrete Random Variables

A **discrete random variable** is a random variable that can only take on a finite number of values or a countably infinite number of values. These values are typically integers.

**Key Concept:** The possible values of a discrete random variable are often the result of counting.

**Examples:**
*   The number of defective items in a sample of 10.
*   The number of cars passing a certain point on a highway in an hour.
*   The outcome of a dice roll.

**Reference (Devore, 9th ed., Ch. 3.1):** Devore defines a discrete random variable as one whose possible values can be listed (finite or countably infinite).

---

### Probability Distributions of Discrete Random Variables

The **probability distribution** of a discrete random variable $X$ specifies the probability that $X$ will take on each of its possible values. This is typically expressed as a probability mass function (PMF).

#### Probability Mass Function (PMF)

For a discrete random variable $X$, the probability mass function (PMF), denoted by $p(x)$, is defined as:

$p(x) = P(X=x)$

for all possible values $x$ that $X$ can take.

**Properties of a PMF:**
1.  $p(x) \ge 0$ for all $x$. (Probabilities are non-negative).
2.  $\sum_{x} p(x) = 1$. (The sum of probabilities over all possible values must be 1).

**Example (Continuing Coin Flip):**
For $X$ = number of heads in two coin flips:
*   $P(X=0) = P(\{TT\}) = \frac{1}{4}$
*   $P(X=1) = P(\{HT, TH\}) = \frac{2}{4} = \frac{1}{2}$
*   $P(X=2) = P(\{HH\}) = \frac{1}{4}$

The PMF is:
$p(0) = 1/4$
$p(1) = 1/2$
$p(2) = 1/4$

We can verify: $p(0) + p(1) + p(2) = 1/4 + 1/2 + 1/4 = 1$.

**Reference (Devore, 9th ed., Ch. 3.1):** Devore introduces the PMF as the function that assigns probabilities to the possible values of a discrete random variable.

---

### Cumulative Distribution Function (CDF)

The **cumulative distribution function (CDF)** of a random variable $X$, denoted by $F(x)$, is defined as:

$F(x) = P(X \le x)$

for all real numbers $x$.

**Properties of a CDF:**
1.  $0 \le F(x) \le 1$ for all $x$.
2.  $F(x)$ is non-decreasing (i.e., if $x_1 < x_2$, then $F(x_1) \le F(x_2)$).
3.  $\lim_{x \to -\infty} F(x) = 0$.
4.  $\lim_{x \to \infty} F(x) = 1$.

**Relationship between PMF and CDF for Discrete Variables:**
For a discrete random variable $X$ with possible values $x_1, x_2, \ldots$ in increasing order:
$F(x) = \sum_{x_i \le x} p(x_i)$

**Example (Continuing Coin Flip):**
*   $F(0) = P(X \le 0) = p(0) = 1/4$
*   $F(1) = P(X \le 1) = p(0) + p(1) = 1/4 + 1/2 = 3/4$
*   $F(2) = P(X \le 2) = p(0) + p(1) + p(2) = 1/4 + 1/2 + 1/4 = 1$

For values not in the set of possible outcomes:
*   $F(0.5) = P(X \le 0.5) = p(0) = 1/4$
*   $F(-1) = P(X \le -1) = 0$
*   $F(3) = P(X \le 3) = 1$

**Reference (Devore, 9th ed., Ch. 3.1):** Devore defines the CDF and discusses its properties, emphasizing its usefulness in calculating probabilities of intervals.

---

### Important Models of Discrete Random Variables

Several probability distributions are fundamental and widely used in physical sciences.

#### 1. Binomial Distribution

A **binomial experiment** has the following characteristics:
1.  The experiment consists of $n$ identical trials.
2.  Each trial has only two possible outcomes: "success" and "failure".
3.  The probability of success, denoted by $p$, is the same for each trial. The probability of failure is $q = 1-p$.
4.  The trials are independent.

A random variable $X$ that counts the number of successes in $n$ trials of a binomial experiment is said to follow a **binomial distribution** with parameters $n$ (number of trials) and $p$ (probability of success).

**PMF of Binomial Distribution:**
$p(x) = P(X=x) = \binom{n}{x} p^x (1-p)^{n-x}$, for $x = 0, 1, 2, \ldots, n$.
where $\binom{n}{x} = \frac{n!}{x!(n-x)!}$ is the binomial coefficient.

**Example:**
Consider testing the reliability of a component that has a probability of $p=0.8$ of working correctly. If we test $n=5$ components independently, what is the probability that exactly 4 components work correctly?
Here, $X$ is the number of working components, $n=5$, $p=0.8$.
$P(X=4) = \binom{5}{4} (0.8)^4 (1-0.8)^{5-4} = \binom{5}{4} (0.8)^4 (0.2)^1$
$P(X=4) = 5 \times (0.4096) \times (0.2) = 5 \times 0.08192 = 0.4096$

**Key Properties of Binomial Distribution:**
*   Mean (Expected Value): $E[X] = np$
*   Variance: $Var(X) = np(1-p)$

**Reference (Devore, 9th ed., Ch. 3.3):** Devore provides a detailed discussion of the binomial distribution, including its derivation and applications.

#### 2. Poisson Distribution

The **Poisson distribution** is used to model the number of events occurring in a fixed interval of time or space, given that these events occur with a known constant average rate and independently of the time since the last event.

A random variable $X$ follows a **Poisson distribution** with parameter $\lambda$ (lambda), where $\lambda$ is the average number of events in the interval.

**PMF of Poisson Distribution:**
$p(x) = P(X=x) = \frac{e^{-\lambda} \lambda^x}{x!}$, for $x = 0, 1, 2, \ldots$

**Example:**
Suppose a certain type of impurity occurs on average 2 times per 100 square meters of a material. If we examine 100 square meters of material, what is the probability of finding exactly 3 such impurities?
Here, the average rate $\lambda = 2$. We are interested in $P(X=3)$.
$P(X=3) = \frac{e^{-2} 2^3}{3!} = \frac{e^{-2} \times 8}{6} \approx \frac{0.1353 \times 8}{6} \approx \frac{1.0824}{6} \approx 0.1804$

**Key Properties of Poisson Distribution:**
*   Mean (Expected Value): $E[X] = \lambda$
*   Variance: $Var(X) = \lambda$

**Approximation of Binomial by Poisson:**
When $n$ is large and $p$ is small, the binomial distribution can be approximated by a Poisson distribution with $\lambda = np$. This is particularly useful when calculating binomial probabilities with large $n$ becomes computationally intensive.

**Reference (Devore, 9th ed., Ch. 3.4):** Devore explains the Poisson process and its associated distribution, highlighting its use in modeling rare events.

#### 3. Geometric Distribution

The **geometric distribution** models the number of Bernoulli trials needed to achieve the first success.

A random variable $X$ follows a **geometric distribution** if it represents the number of trials required to get the first success in a sequence of independent Bernoulli trials, each with a probability of success $p$.

**PMF of Geometric Distribution (Type 1: Number of trials):**
$p(x) = P(X=x) = (1-p)^{x-1} p$, for $x = 1, 2, 3, \ldots$

**Example:**
What is the probability that the first success in a sequence of coin flips (with $p=0.5$ for heads) occurs on the 3rd flip?
Here, $X$ is the number of flips until the first head, $p=0.5$. We want $P(X=3)$.
$P(X=3) = (1-0.5)^{3-1} (0.5) = (0.5)^2 (0.5) = (0.5)^3 = 0.125$

**Key Properties of Geometric Distribution:**
*   Mean (Expected Value): $E[X] = 1/p$
*   Variance: $Var(X) = \frac{1-p}{p^2}$

**Note:** There is another definition of the geometric distribution where $X$ is the number of failures *before* the first success. In that case, $p(x) = (1-p)^x p$ for $x=0, 1, 2, \ldots$. The mean is $(1-p)/p$ and variance is $(1-p)/p^2$. It's crucial to be clear about which definition is being used.

**Reference (Devore, 9th ed., Ch. 3.3):** Devore discusses the geometric distribution in the context of Bernoulli trials.

#### 4. Hypergeometric Distribution

The **hypergeometric distribution** describes the probability of $k$ successes in $n$ draws, without replacement, from a finite population of size $N$ that contains exactly $K$ successes.

Let:
*   $N$: population size
*   $K$: number of success states in the population
*   $n$: number of draws (sample size)
*   $k$: number of observed successes in the sample

A random variable $X$ following a **hypergeometric distribution** is the number of successes in a sample of size $n$ drawn without replacement from a population of size $N$ with $K$ successes.

**PMF of Hypergeometric Distribution:**
$p(x) = P(X=x) = \frac{\binom{K}{x} \binom{N-K}{n-x}}{\binom{N}{n}}$, for $x = \max(0, n-(N-K)), \ldots, \min(n, K)$.

**Example:**
A batch of 20 electrical components contains 5 defective ones. If a random sample of 4 components is selected from the batch without replacement, what is the probability that exactly 2 of the selected components are defective?
Here, $N=20$ (total components), $K=5$ (defective components), $n=4$ (sample size), $x=2$ (desired defective components in sample).
$P(X=2) = \frac{\binom{5}{2} \binom{20-5}{4-2}}{\binom{20}{4}} = \frac{\binom{5}{2} \binom{15}{2}}{\binom{20}{4}}$
$\binom{5}{2} = \frac{5!}{2!3!} = 10$
$\binom{15}{2} = \frac{15!}{2!13!} = \frac{15 \times 14}{2} = 105$
$\binom{20}{4} = \frac{20!}{4!16!} = \frac{20 \times 19 \times 18 \times 17}{4 \times 3 \times 2 \times 1} = 5 \times 19 \times 3 \times 17 = 4845$
$P(X=2) = \frac{10 \times 105}{4845} = \frac{1050}{4845} \approx 0.2167$

**Key Properties of Hypergeometric Distribution:**
*   Mean (Expected Value): $E[X] = n \frac{K}{N}$
*   Variance: $Var(X) = n \frac{K}{N} (1 - \frac{K}{N}) (\frac{N-n}{N-1})$

**Note:** As $N$ becomes very large relative to $n$, the hypergeometric distribution approaches the binomial distribution with $p = K/N$.

**Reference (Devore, 9th ed., Ch. 3.3):** Devore covers the hypergeometric distribution and its relationship with the binomial distribution for sampling with replacement.

#### 5. Other Discrete Distributions (Brief Mention)

*   **Multinomial Distribution:** Generalization of the binomial distribution to more than two outcomes.
*   **Negative Binomial Distribution:** Models the number of trials until a specified number of successes, or the number of failures before a specified number of successes.

---

### Expected Value (Mean) of a Discrete Random Variable

The **expected value** or **mean** of a discrete random variable $X$, denoted by $E[X]$ or $\mu$, is the weighted average of its possible values, where the weights are the corresponding probabilities.

$E[X] = \mu = \sum_{x} x \cdot p(x)$

**Interpretation:** The expected value represents the long-run average value of the random variable if the experiment were repeated many times.

**Example (Continuing Coin Flip):**
$E[X] = (0 \times \frac{1}{4}) + (1 \times \frac{1}{2}) + (2 \times \frac{1}{4}) = 0 + \frac{1}{2} + \frac{1}{2} = 1$.
So, on average, we expect to get 1 head in two coin flips.

**Reference (Devore, 9th ed., Ch. 3.2):** Devore provides the definition and interpretation of expected value for discrete random variables and calculates it for common distributions.

---

### Variance and Standard Deviation of a Discrete Random Variable

The **variance** of a discrete random variable $X$, denoted by $Var(X)$ or $\sigma^2$, measures the spread or dispersion of the distribution around its mean.

$Var(X) = E[(X - \mu)^2] = \sum_{x} (x - \mu)^2 \cdot p(x)$

An alternative and often easier-to-calculate formula for variance is:
$Var(X) = E[X^2] - (E[X])^2$
where $E[X^2] = \sum_{x} x^2 \cdot p(x)$.

The **standard deviation** of $X$, denoted by $\sigma$, is the square root of the variance:
$\sigma = \sqrt{Var(X)}$

**Interpretation:** The standard deviation gives a measure of the typical deviation of the random variable's values from the mean.

**Example (Continuing Coin Flip):**
We already found $E[X] = 1$.
$E[X^2] = (0^2 \times \frac{1}{4}) + (1^2 \times \frac{1}{2}) + (2^2 \times \frac{1}{4}) = (0 \times \frac{1}{4}) + (1 \times \frac{1}{2}) + (4 \times \frac{1}{4}) = 0 + \frac{1}{2} + 1 = 1.5$.
$Var(X) = E[X^2] - (E[X])^2 = 1.5 - (1)^2 = 1.5 - 1 = 0.5$.
$\sigma = \sqrt{0.5} \approx 0.707$.

**Reference (Devore, 9th ed., Ch. 3.2):** Devore defines variance and standard deviation, showing how to compute them for various discrete distributions.

---

### Properties of Expected Value and Variance

These properties are extremely useful for simplifying calculations.

**Properties of Expected Value:**
1.  $E[c] = c$ (where $c$ is a constant)
2.  $E[cX] = cE[X]$ (where $c$ is a constant)
3.  $E[X+Y] = E[X] + E[Y]$ (Linearity of Expectation - holds even if $X$ and $Y$ are dependent)
4.  $E[aX + b] = aE[X] + b$ (where $a$ and $b$ are constants)
5.  $E[XY] = E[X]E[Y]$ (This holds if $X$ and $Y$ are independent)

**Properties of Variance:**
1.  $Var(c) = 0$ (where $c$ is a constant)
2.  $Var(cX) = c^2 Var(X)$ (where $c$ is a constant)
3.  $Var(X+Y) = Var(X) + Var(Y) + 2Cov(X,Y)$ (where $Cov(X,Y)$ is the covariance of $X$ and $Y$)
4.  If $X$ and $Y$ are independent, then $Cov(X,Y) = 0$, so $Var(X+Y) = Var(X) + Var(Y)$.
5.  $Var(aX + b) = a^2 Var(X)$ (where $a$ and $b$ are constants)

**Reference (Devore, 9th ed., Ch. 3.2):** Devore thoroughly covers these linearity and variance properties.

---

### Applications in Physical Science

Discrete random variables and their distributions are ubiquitous in physical sciences:

*   **Particle Physics:** Number of particles detected in a given time interval (Poisson), number of decays from a sample (Exponential, related to Poisson).
*   **Materials Science:** Number of defects in a material sample (Binomial, Poisson, Hypergeometric).
*   **Reliability Engineering:** Lifetime of components, number of failures before system operation (Geometric, Exponential).
*   **Statistical Mechanics:** Distribution of energy levels among particles.
*   **Quantum Mechanics:** Probabilities of finding a particle in a certain state.

**Example Scenario:**
In a semiconductor manufacturing process, the number of defects per wafer is a critical quality metric. If it's known that, on average, there are 3 defects per wafer, we can model the number of defects on a given wafer using a Poisson distribution with $\lambda = 3$.
*   Probability of no defects: $P(X=0) = \frac{e^{-3} 3^0}{0!} = e^{-3} \approx 0.0498$
*   Probability of exactly 2 defects: $P(X=2) = \frac{e^{-3} 3^2}{2!} = \frac{e^{-3} \times 9}{2} \approx 0.2240$

**Course Outcome Alignment:**
*   **CO1:** This entire topic directly addresses CO1 by covering the concept, properties, and important models of discrete random variables and their application to random phenomena (like defects, particle counts).

---

### Practice Questions and Exercises

**Question 1:**
A machine produces electronic components. The probability that a component is defective is 0.05. If we randomly select 10 components, what is the probability that exactly 2 are defective?
(a) Using Binomial distribution
(b) Calculate the expected number of defective components.
(c) Calculate the variance of the number of defective components.

**Question 2:**
A cosmic ray detector registers an average of 4 events per minute. What is the probability that in a given minute, it registers exactly 3 events?
(a) Model this using a Poisson distribution.
(b) What is the probability that it registers more than 1 event?

**Question 3:**
In a quality control process for manufacturing screws, a batch of 50 screws is examined. It is known that 5 screws in the batch are slightly undersized. If 10 screws are randomly sampled from this batch without replacement, what is the probability that exactly 2 of the sampled screws are undersized?

**Question 4:**
Let $X$ be a discrete random variable with the following PMF:
$p(x) = kx$ for $x = 1, 2, 3$
$p(x) = 0$ otherwise.
(a) Find the value of $k$.
(b) Find the CDF of $X$.
(c) Calculate $E[X]$ and $Var(X)$.

---

### Answers to Practice Questions

**Answer 1:**
(a) This is a binomial experiment with $n=10$ trials and probability of success (defective component) $p=0.05$. We want $P(X=2)$.
$P(X=2) = \binom{10}{2} (0.05)^2 (1-0.05)^{10-2} = \frac{10!}{2!8!} (0.05)^2 (0.95)^8$
$P(X=2) = 45 \times 0.0025 \times (0.95)^8 \approx 45 \times 0.0025 \times 0.6634 \approx 0.0746$

(b) Expected number of defective components: $E[X] = np = 10 \times 0.05 = 0.5$.

(c) Variance of the number of defective components: $Var(X) = np(1-p) = 10 \times 0.05 \times (1-0.05) = 10 \times 0.05 \times 0.95 = 0.475$.

**Answer 2:**
(a) Modeling with Poisson distribution, $\lambda = 4$ events per minute.
$P(X=x) = \frac{e^{-4} 4^x}{x!}$
For exactly 3 events: $P(X=3) = \frac{e^{-4} 4^3}{3!} = \frac{e^{-4} \times 64}{6} \approx \frac{0.0183 \times 64}{6} \approx 0.1954$.

(b) Probability of more than 1 event: $P(X>1) = 1 - P(X \le 1) = 1 - [P(X=0) + P(X=1)]$.
$P(X=0) = \frac{e^{-4} 4^0}{0!} = e^{-4} \approx 0.0183$
$P(X=1) = \frac{e^{-4} 4^1}{1!} = 4e^{-4} \approx 4 \times 0.0183 \approx 0.0733$
$P(X>1) = 1 - (0.0183 + 0.0733) = 1 - 0.0916 = 0.9084$.

**Answer 3:**
This is a hypergeometric distribution problem.
$N=50$ (total screws), $K=5$ (undersized screws), $n=10$ (sample size), $x=2$ (desired undersized screws).
$P(X=2) = \frac{\binom{5}{2} \binom{50-5}{10-2}}{\binom{50}{10}} = \frac{\binom{5}{2} \binom{45}{8}}{\binom{50}{10}}$
$\binom{5}{2} = 10$
$\binom{45}{8} = \frac{45!}{8!37!} = 176,432,300$
$\binom{50}{10} = \frac{50!}{10!40!} = 10,272,278,170$
$P(X=2) = \frac{10 \times 176,432,300}{10,272,278,170} \approx \frac{1,764,323,000}{10,272,278,170} \approx 0.17176$

**Answer 4:**
The PMF is $p(x) = kx$ for $x = 1, 2, 3$.
(a) The sum of probabilities must be 1:
$\sum_{x=1}^3 p(x) = p(1) + p(2) + p(3) = k(1) + k(2) + k(3) = 6k$.
$6k = 1 \implies k = 1/6$.
So, $p(1) = 1/6$, $p(2) = 2/6 = 1/3$, $p(3) = 3/6 = 1/2$.

(b) CDF of $X$:
$F(x) = P(X \le x)$
$F(x) = 0$ for $x < 1$.
$F(x) = p(1) = 1/6$ for $1 \le x < 2$.
$F(x) = p(1) + p(2) = 1/6 + 2/6 = 3/6 = 1/2$ for $2 \le x < 3$.
$F(x) = p(1) + p(2) + p(3) = 1/6 + 2/6 + 3/6 = 6/6 = 1$ for $x \ge 3$.

(c) Expected Value $E[X]$:
$E[X] = \sum x \cdot p(x) = 1 \cdot \frac{1}{6} + 2 \cdot \frac{2}{6} + 3 \cdot \frac{3}{6} = \frac{1}{6} + \frac{4}{6} + \frac{9}{6} = \frac{14}{6} = \frac{7}{3}$.

Variance $Var(X)$:
$E[X^2] = \sum x^2 \cdot p(x) = 1^2 \cdot \frac{1}{6} + 2^2 \cdot \frac{2}{6} + 3^2 \cdot \frac{3}{6} = 1 \cdot \frac{1}{6} + 4 \cdot \frac{2}{6} + 9 \cdot \frac{3}{6} = \frac{1}{6} + \frac{8}{6} + \frac{27}{6} = \frac{36}{6} = 6$.
$Var(X) = E[X^2] - (E[X])^2 = 6 - (\frac{7}{3})^2 = 6 - \frac{49}{9} = \frac{54-49}{9} = \frac{5}{9}$.

---

### Important Points to Remember

*   **Discrete Random Variable:** Takes on a finite or countably infinite number of values, often integers.
*   **PMF ($p(x)$):** $P(X=x)$. Must satisfy $p(x) \ge 0$ and $\sum p(x) = 1$.
*   **CDF ($F(x)$):** $P(X \le x)$. Non-decreasing, ranges from 0 to 1.
*   **Binomial:** Fixed number of independent trials, two outcomes, constant probability of success.
*   **Poisson:** Counts events in a fixed interval with a constant average rate. Good for rare events.
*   **Geometric:** Number of trials until the first success.
*   **Hypergeometric:** Sampling without replacement from a finite population.
*   **Expected Value ($E[X]$):** The "average" outcome over many trials.
*   **Variance ($Var(X)$):** Measures the spread of the distribution.

---

This concludes the notes for Discrete Random Variables and Their Probability Distributions. Ensure you practice problems from the textbooks to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
