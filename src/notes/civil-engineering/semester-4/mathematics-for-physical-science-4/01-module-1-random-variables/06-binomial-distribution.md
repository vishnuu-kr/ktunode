---
title: "Binomial distribution"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810920"
status: "completed"
scrapedAt: "2026-05-20T18:45:55.553Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Binomial Distribution

---

### Introduction

The Binomial Distribution is a fundamental probability distribution that describes the probability of obtaining a specific number of successes in a fixed number of independent trials, where each trial has only two possible outcomes (success or failure). It is widely used in various fields, including physical sciences, to model phenomena like the number of defective items in a batch, the number of heads in coin flips, or the number of successful experiments in a series.

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   **Define** the conditions under which a random variable follows a binomial distribution.
*   **Calculate** the probability of a specific number of successes in a fixed number of trials using the binomial probability formula.
*   **Determine** the mean and variance of a binomial distribution.
*   **Apply** the binomial distribution to solve problems in physical science contexts.

---

### Key Concepts and Definitions

#### 1. Bernoulli Trial

A Bernoulli trial is a random experiment with exactly two mutually exclusive outcomes: "success" and "failure."

*   **Example:** Flipping a coin and observing whether it lands on heads (success) or tails (failure).

#### 2. Binomial Distribution

A random variable $X$ is said to follow a **Binomial Distribution** if it satisfies the following four conditions:

1.  **Fixed Number of Trials ($n$):** The experiment consists of a fixed number of identical trials.
2.  **Independent Trials:** Each trial is independent of the others, meaning the outcome of one trial does not affect the outcome of any other trial.
3.  **Two Possible Outcomes:** Each trial has only two possible outcomes, typically labeled as "success" and "failure."
4.  **Constant Probability of Success ($p$):** The probability of success ($p$) remains the same for each trial. Consequently, the probability of failure ($q = 1-p$) is also constant.

If a random variable $X$ follows a binomial distribution with parameters $n$ and $p$, it is denoted as $X \sim B(n, p)$.

#### 3. Binomial Probability Formula

The probability of obtaining exactly $k$ successes in $n$ independent Bernoulli trials, where the probability of success in each trial is $p$, is given by the binomial probability formula:

$P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$

Where:
*   $P(X=k)$: The probability of exactly $k$ successes.
*   $n$: The total number of trials.
*   $k$: The number of successes we are interested in ($0 \le k \le n$).
*   $p$: The probability of success in a single trial.
*   $q = 1-p$: The probability of failure in a single trial.
*   $\binom{n}{k}$: The binomial coefficient, read as "n choose k," which represents the number of ways to choose $k$ successes from $n$ trials. It is calculated as:
    $\binom{n}{k} = \frac{n!}{k!(n-k)!}$

#### 4. Mean (Expected Value) of a Binomial Distribution

The mean (or expected value) of a binomial distribution represents the average number of successes expected in $n$ trials.

$E(X) = \mu = np$

#### 5. Variance of a Binomial Distribution

The variance of a binomial distribution measures the spread or dispersion of the distribution around its mean.

$Var(X) = \sigma^2 = np(1-p)$

#### 6. Standard Deviation of a Binomial Distribution

The standard deviation is the square root of the variance and represents the typical deviation from the mean.

$\sigma = \sqrt{np(1-p)}$

---

### Applications in Physical Science

The binomial distribution can be applied to model various scenarios in physical sciences:

*   **Quality Control:** Probability of finding a certain number of defective items in a sample from a production line.
*   **Particle Physics:** Probability of detecting a certain number of particles in a given time interval, assuming each detection attempt has a fixed probability.
*   **Materials Science:** Probability of a certain number of atoms in a material exhibiting a specific property.
*   **Genetics (simplified):** Probability of a certain number of offspring inheriting a particular trait.
*   **Reliability Engineering:** Probability of a certain number of components in a system failing within a specified period.

---

### Examples

**Example 1: Coin Flipping**

A fair coin is tossed 5 times. What is the probability of getting exactly 3 heads?

*   **Analysis:**
    *   Number of trials, $n = 5$.
    *   Each toss is independent.
    *   Two outcomes: heads (success) or tails (failure).
    *   Probability of success (getting a head), $p = 0.5$.
    *   We want to find $P(X=3)$.

*   **Calculation:**
    *   Using the binomial probability formula: $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$
    *   $P(X=3) = \binom{5}{3} (0.5)^3 (1-0.5)^{5-3}$
    *   $\binom{5}{3} = \frac{5!}{3!(5-3)!} = \frac{5!}{3!2!} = \frac{5 \times 4}{2 \times 1} = 10$
    *   $P(X=3) = 10 \times (0.5)^3 \times (0.5)^2$
    *   $P(X=3) = 10 \times 0.125 \times 0.25$
    *   $P(X=3) = 10 \times 0.03125 = 0.3125$

*   **Answer:** The probability of getting exactly 3 heads in 5 coin tosses is 0.3125 or 31.25%.

**Example 2: Manufacturing Defect**

A manufacturing process produces electronic components, and it is known that 2% of the components are defective. If a random sample of 10 components is selected, what is the probability that exactly 1 component is defective?

*   **Analysis:**
    *   Number of trials, $n = 10$.
    *   Each component selection is independent.
    *   Two outcomes: defective (success) or non-defective (failure).
    *   Probability of success (component being defective), $p = 0.02$.
    *   We want to find $P(X=1)$.

*   **Calculation:**
    *   $P(X=1) = \binom{10}{1} (0.02)^1 (1-0.02)^{10-1}$
    *   $\binom{10}{1} = \frac{10!}{1!(10-1)!} = \frac{10!}{1!9!} = 10$
    *   $P(X=1) = 10 \times (0.02)^1 \times (0.98)^9$
    *   $P(X=1) \approx 10 \times 0.02 \times 0.8337$
    *   $P(X=1) \approx 0.1667$

*   **Answer:** The probability that exactly 1 component is defective in a sample of 10 is approximately 0.1667 or 16.67%.

**Example 3: Calculating Mean and Variance**

For the electronic component example (Example 2), calculate the mean and variance of the number of defective components in a sample of 10.

*   **Analysis:**
    *   $n = 10$
    *   $p = 0.02$

*   **Calculation:**
    *   **Mean:** $E(X) = np = 10 \times 0.02 = 0.2$
    *   **Variance:** $Var(X) = np(1-p) = 10 \times 0.02 \times (1-0.02) = 0.2 \times 0.98 = 0.196$

*   **Answer:** The mean number of defective components is 0.2, and the variance is 0.196.

---

### Practice Questions

**Question 1:**
A scientist is conducting an experiment where a specific chemical reaction occurs with a probability of 0.7 for each trial. If the experiment is repeated 8 times, what is the probability that the reaction occurs exactly 6 times?

**Question 2:**
In a series of measurements, there's a 5% chance of obtaining an outlier value. If 15 measurements are taken, what is the probability of obtaining no outliers?

**Question 3:**
A machine produces bolts, and it's known that 3% of them are slightly underweight. If a batch of 50 bolts is inspected, what is the probability that at least 2 bolts are underweight? (Hint: It's easier to calculate the complement probability).

**Question 4:**
Consider a nuclear reactor where each atom has a 0.001 probability of decaying in a given second. If there are 1000 atoms in a sample, what is the expected number of decays in that second?

---

### Answers to Practice Questions

**Answer 1:**
*   $n = 8$
*   $p = 0.7$
*   $k = 6$
*   $P(X=6) = \binom{8}{6} (0.7)^6 (0.3)^2$
*   $\binom{8}{6} = \frac{8!}{6!2!} = \frac{8 \times 7}{2 \times 1} = 28$
*   $P(X=6) = 28 \times (0.7)^6 \times (0.3)^2$
*   $P(X=6) \approx 28 \times 0.117649 \times 0.09$
*   $P(X=6) \approx 0.2965$

**Answer 2:**
*   $n = 15$
*   $p = 0.05$
*   $k = 0$ (no outliers)
*   $P(X=0) = \binom{15}{0} (0.05)^0 (0.95)^{15}$
*   $\binom{15}{0} = 1$
*   $(0.05)^0 = 1$
*   $P(X=0) = 1 \times 1 \times (0.95)^{15}$
*   $P(X=0) \approx 0.4633$

**Answer 3:**
*   $n = 50$
*   $p = 0.03$
*   We want $P(X \ge 2)$. It's easier to calculate $1 - P(X < 2) = 1 - [P(X=0) + P(X=1)]$.
    *   $P(X=0) = \binom{50}{0} (0.03)^0 (0.97)^{50} = 1 \times 1 \times (0.97)^{50} \approx 0.2181$
    *   $P(X=1) = \binom{50}{1} (0.03)^1 (0.97)^{49} = 50 \times 0.03 \times (0.97)^{49} \approx 1.5 \times 0.2249 \approx 0.3373$
*   $P(X \ge 2) = 1 - (0.2181 + 0.3373) = 1 - 0.5554 = 0.4446$

**Answer 4:**
*   This question asks for the expected number, which is the mean.
*   $n = 1000$
*   $p = 0.001$
*   Expected number of decays = $np = 1000 \times 0.001 = 1$

---

### Important Points to Remember

*   **Identify the conditions:** Always ensure that the scenario meets the four criteria for a binomial distribution (fixed $n$, independence, two outcomes, constant $p$) before applying the formulas.
*   **Binomial Coefficient:** $\binom{n}{k}$ is crucial for calculating the number of ways to achieve $k$ successes.
*   **Cumulative Probabilities:** For questions asking "at least," "at most," or "between," you might need to sum multiple binomial probabilities or use the complement rule.
*   **Mean and Variance:** Remember the simple formulas $np$ and $np(1-p)$. These are very useful for understanding the central tendency and spread of the distribution.
*   **Approximations:** For very large $n$ and small $p$ (or large $p$), the binomial distribution can sometimes be approximated by the Poisson or Normal distribution, but these are advanced topics. Focus on the exact binomial calculation first.

---
