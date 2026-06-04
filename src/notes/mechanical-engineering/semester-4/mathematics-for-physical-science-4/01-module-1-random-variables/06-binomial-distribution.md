---
title: "Binomial distribution"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462eb6"
status: "completed"
scrapedAt: "2026-05-20T17:54:34.167Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4: Module 1: Random Variables - Binomial Distribution

## 1. Introduction to Binomial Distribution

The Binomial distribution is a fundamental discrete probability distribution that describes the number of successes in a fixed number of independent trials, each with only two possible outcomes (success or failure). It's widely used in physical sciences for modeling phenomena where an experiment is repeated and we're interested in the count of a specific outcome.

**Course Outcome Alignment:** This topic directly addresses **CO1** by introducing an important model of discrete random variables and its application to random phenomena.

### 1.1. Key Concepts and Definitions

*   **Bernoulli Trial:** An experiment with exactly two possible outcomes, typically labeled "success" and "failure."
    *   **Example:** Flipping a coin and getting heads (success) or tails (failure).
    *   **Probability of Success (p):** The probability of achieving the desired outcome in a single trial.
    *   **Probability of Failure (q):** The probability of not achieving the desired outcome in a single trial. Note that $q = 1 - p$.

*   **Binomial Experiment:** A sequence of $n$ independent Bernoulli trials, where:
    1.  The experiment consists of $n$ identical trials.
    2.  Each trial results in one of two outcomes: "success" or "failure."
    3.  The probability of success, $p$, remains constant for each trial.
    4.  The trials are independent, meaning the outcome of one trial does not affect the outcome of any other trial.

*   **Binomial Random Variable (X):** A random variable that counts the number of successes in a fixed number of $n$ independent Bernoulli trials.

**Important Point to Remember:** For a random variable to be binomially distributed, all four conditions of a binomial experiment must be met.

### 1.2. Probability Mass Function (PMF) of the Binomial Distribution

The probability of obtaining exactly $k$ successes in $n$ trials is given by the Binomial Probability Mass Function (PMF):

$$ P(X=k) = \binom{n}{k} p^k q^{n-k} $$

Where:
*   $P(X=k)$: The probability of observing exactly $k$ successes.
*   $n$: The number of independent trials.
*   $k$: The number of successes (where $0 \le k \le n$).
*   $p$: The probability of success on a single trial.
*   $q$: The probability of failure on a single trial ($q = 1-p$).
*   $\binom{n}{k}$: The binomial coefficient, read as "n choose k," which represents the number of ways to choose $k$ successes from $n$ trials. It is calculated as:
    $$ \binom{n}{k} = \frac{n!}{k!(n-k)!} $$
    where "!" denotes the factorial (e.g., $5! = 5 \times 4 \times 3 \times 2 \times 1$).

**Reference:** This formula is a cornerstone of discrete probability and is thoroughly explained in Devore (2016) and Ross (2020).

### 1.3. Properties of the Binomial Distribution

*   **Expected Value (Mean):** The average number of successes in $n$ trials.
    $$ E(X) = \mu = np $$

*   **Variance:** A measure of the spread or dispersion of the number of successes around the mean.
    $$ Var(X) = \sigma^2 = npq $$

*   **Standard Deviation:** The square root of the variance, representing the typical deviation from the mean.
    $$ \sigma = \sqrt{npq} $$

**Reference:** These properties are essential for understanding the behavior of the binomial distribution and can be found in Devore (2016).

### 1.4. Examples

**Example 1: Coin Flipping**
Suppose a fair coin is tossed 5 times. What is the probability of getting exactly 3 heads?

*   This is a binomial experiment because:
    1.  There are 5 identical trials (coin tosses).
    2.  Each trial has two outcomes: heads (success) or tails (failure).
    3.  The probability of success (heads) is $p = 0.5$, and this is constant for each toss.
    4.  The tosses are independent.

*   Here, $n = 5$, $k = 3$, $p = 0.5$, and $q = 1 - 0.5 = 0.5$.

*   Using the PMF:
    $$ P(X=3) = \binom{5}{3} (0.5)^3 (0.5)^{5-3} $$
    $$ P(X=3) = \binom{5}{3} (0.5)^3 (0.5)^2 $$
    $$ P(X=3) = \frac{5!}{3!(5-3)!} (0.5)^5 $$
    $$ P(X=3) = \frac{5!}{3!2!} (0.5)^5 $$
    $$ P(X=3) = \frac{120}{(6)(2)} (0.03125) $$
    $$ P(X=3) = 10 \times 0.03125 $$
    $$ P(X=3) = 0.3125 $$

**Example 2: Quality Control**
A manufacturer produces light bulbs, and historically, 2% of them are defective. If a random sample of 10 light bulbs is taken, what is the probability that exactly one bulb in the sample is defective?

*   This is a binomial experiment because:
    1.  There are 10 identical trials (testing each bulb).
    2.  Each trial has two outcomes: defective (success) or not defective (failure).
    3.  The probability of success (defective) is $p = 0.02$, and this is assumed to be constant.
    4.  The bulbs are assumed to be independently manufactured.

*   Here, $n = 10$, $k = 1$, $p = 0.02$, and $q = 1 - 0.02 = 0.98$.

*   Using the PMF:
    $$ P(X=1) = \binom{10}{1} (0.02)^1 (0.98)^{10-1} $$
    $$ P(X=1) = \binom{10}{1} (0.02)^1 (0.98)^9 $$
    $$ P(X=1) = 10 \times 0.02 \times (0.98)^9 $$
    $$ P(X=1) \approx 0.2 \times 0.833747 $$
    $$ P(X=1) \approx 0.1667 $$

**Example 3: Expected Value and Standard Deviation**
For the light bulb example (Example 2), what is the expected number of defective bulbs in a sample of 10, and what is the standard deviation?

*   $n = 10$, $p = 0.02$.
*   Expected Value:
    $$ E(X) = np = 10 \times 0.02 = 0.2 $$
    On average, we expect 0.2 defective bulbs in a sample of 10.

*   Variance:
    $$ Var(X) = npq = 10 \times 0.02 \times 0.98 = 0.196 $$

*   Standard Deviation:
    $$ \sigma = \sqrt{npq} = \sqrt{0.196} \approx 0.4427 $$
    The typical deviation from the mean number of defective bulbs is about 0.4427.

## 2. Cumulative Binomial Probabilities

Often, we are interested in the probability of getting *at most* or *at least* a certain number of successes.

*   **$P(X \le k)$ (Cumulative Probability):** The probability of getting $k$ or fewer successes.
    $$ P(X \le k) = \sum_{i=0}^{k} \binom{n}{i} p^i q^{n-i} $$

*   **$P(X < k)$:** The probability of getting fewer than $k$ successes.
    $$ P(X < k) = P(X \le k-1) = \sum_{i=0}^{k-1} \binom{n}{i} p^i q^{n-i} $$

*   **$P(X \ge k)$:** The probability of getting $k$ or more successes.
    $$ P(X \ge k) = \sum_{i=k}^{n} \binom{n}{i} p^i q^{n-i} $$
    This can also be calculated as:
    $$ P(X \ge k) = 1 - P(X < k) = 1 - P(X \le k-1) $$

*   **$P(X > k)$:** The probability of getting more than $k$ successes.
    $$ P(X > k) = 1 - P(X \le k) $$

**Reference:** Calculating cumulative probabilities often involves using binomial tables or statistical software, as manual summation can be tedious for large $n$. Devore (2016) and Ross (2020) provide detailed explanations and examples of using these tables.

### 2.1. Example: Cumulative Probability

Consider the light bulb example again ($n=10, p=0.02$). What is the probability of finding at most 2 defective bulbs?

*   We need to calculate $P(X \le 2)$:
    $$ P(X \le 2) = P(X=0) + P(X=1) + P(X=2) $$

    *   $P(X=0) = \binom{10}{0} (0.02)^0 (0.98)^{10} = 1 \times 1 \times (0.98)^{10} \approx 0.8171$
    *   $P(X=1) = \binom{10}{1} (0.02)^1 (0.98)^9 = 10 \times 0.02 \times (0.98)^9 \approx 0.1636$
    *   $P(X=2) = \binom{10}{2} (0.02)^2 (0.98)^8 = 45 \times 0.0004 \times (0.98)^8 \approx 0.0176$

    $$ P(X \le 2) \approx 0.8171 + 0.1636 + 0.0176 \approx 0.9983 $$

    So, there is approximately a 99.83% chance of finding at most 2 defective bulbs in a sample of 10.

## 3. Approximations to the Binomial Distribution

When $n$ is large and $p$ is close to 0 or 1, calculating binomial probabilities directly can be computationally intensive. In such cases, approximations can be used.

### 3.1. Poisson Approximation to the Binomial Distribution

If $n$ is large (typically $n \ge 20$) and $p$ is small (typically $p \le 0.05$), such that $np \le 5$, the binomial distribution can be approximated by a Poisson distribution with parameter $\lambda = np$.

*   **Poisson PMF:** $P(Y=k) = \frac{e^{-\lambda} \lambda^k}{k!}$, where $Y \sim Poisson(\lambda)$.

**Reference:** This approximation is useful when dealing with rare events, a common scenario in scientific measurements. Sastry (2012) covers Poisson distribution and its relation to binomial.

**Example:** A factory produces items, and the probability of an item being defective is 0.001. If we take a sample of 1000 items, what is the probability that exactly 3 items are defective?

*   Binomial approach: $n=1000, p=0.001, k=3$. $np = 1000 \times 0.001 = 1$. Since $np = 1 \le 5$ and $p=0.001$ is small, Poisson approximation is suitable.
*   Poisson approximation: $\lambda = np = 1$.
    $$ P(X=3) \approx P(Y=3) = \frac{e^{-1} (1)^3}{3!} = \frac{e^{-1}}{6} $$
    $$ P(X=3) \approx \frac{0.367879}{6} \approx 0.0613 $$

### 3.2. Normal Approximation to the Binomial Distribution

If $n$ is sufficiently large such that $np \ge 5$ and $nq \ge 5$, the binomial distribution can be approximated by a normal distribution with mean $\mu = np$ and standard deviation $\sigma = \sqrt{npq}$.

*   **Continuity Correction:** When using the normal distribution to approximate a discrete distribution, a continuity correction is applied.
    *   To approximate $P(X \le k)$, use $P(Z \le \frac{k + 0.5 - np}{\sqrt{npq}})$.
    *   To approximate $P(X \ge k)$, use $P(Z \ge \frac{k - 0.5 - np}{\sqrt{npq}})$.
    *   To approximate $P(X = k)$, use $P(\frac{k - 0.5 - np}{\sqrt{npq}} \le Z \le \frac{k + 0.5 - np}{\sqrt{npq}})$.

**Reference:** The normal approximation is a powerful tool for simplifying calculations with large binomial probabilities. Devore (2016) and Ross (2020) provide comprehensive coverage of this approximation.

**Example:** A quality control process produces items, and the probability that an item meets a specific standard is 0.7. If a sample of 100 items is taken, what is the probability that exactly 75 items meet the standard?

*   Binomial approach: $n=100, p=0.7, k=75$.
    *   $np = 100 \times 0.7 = 70 \ge 5$
    *   $nq = 100 \times (1-0.7) = 100 \times 0.3 = 30 \ge 5$
    *   Normal approximation is suitable.

*   Mean: $\mu = np = 70$
*   Standard Deviation: $\sigma = \sqrt{npq} = \sqrt{100 \times 0.7 \times 0.3} = \sqrt{21} \approx 4.5826$

*   We want to approximate $P(X=75)$ using continuity correction:
    $$ P(X=75) \approx P(74.5 \le Y \le 75.5) $$
    where $Y \sim N(70, 21)$.

*   Convert to Z-scores:
    *   $Z_1 = \frac{74.5 - 70}{4.5826} = \frac{4.5}{4.5826} \approx 0.9820$
    *   $Z_2 = \frac{75.5 - 70}{4.5826} = \frac{5.5}{4.5826} \approx 1.1990$

*   Using a standard normal table or calculator:
    $$ P(0.9820 \le Z \le 1.1990) = P(Z \le 1.1990) - P(Z \le 0.9820) $$
    $$ \approx 0.8848 - 0.8369 \approx 0.0479 $$

    So, the probability of exactly 75 items meeting the standard is approximately 0.0479.

**Course Outcome Alignment:** While this topic primarily focuses on CO1, the approximations and calculations involved can indirectly relate to numerical methods (CO4) if computational tools are used for evaluation.

## 4. Practice Questions

1.  A biased coin has a probability of landing heads of $p=0.6$. If the coin is tossed 10 times, what is the probability of getting exactly 7 heads?
2.  In a large population, 5% of people have a rare blood disorder. If a random sample of 20 people is selected, what is the probability that exactly 2 people have the disorder?
3.  For the scenario in question 2, calculate the expected number of people with the disorder and the standard deviation of this number.
4.  A machine produces electronic components, and the probability of a component being faulty is 0.01. If 500 components are tested, what is the probability that fewer than 4 components are faulty? (You may use the Poisson approximation).
5.  In a survey, 60% of people agree with a certain policy. If 150 people are surveyed, what is the probability that between 85 and 95 people (inclusive) agree with the policy? (You may use the Normal approximation).

---

## Answers to Practice Questions

1.  $n=10, k=7, p=0.6, q=0.4$
    $P(X=7) = \binom{10}{7} (0.6)^7 (0.4)^{10-7} = \binom{10}{7} (0.6)^7 (0.4)^3$
    $\binom{10}{7} = \frac{10!}{7!3!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$
    $P(X=7) = 120 \times (0.6)^7 \times (0.4)^3 = 120 \times 0.0279936 \times 0.064 \approx 0.215$

2.  $n=20, p=0.05, k=2, q=0.95$
    $P(X=2) = \binom{20}{2} (0.05)^2 (0.95)^{20-2} = \binom{20}{2} (0.05)^2 (0.95)^{18}$
    $\binom{20}{2} = \frac{20!}{2!18!} = \frac{20 \times 19}{2 \times 1} = 190$
    $P(X=2) = 190 \times (0.05)^2 \times (0.95)^{18} = 190 \times 0.0025 \times 0.37677 \approx 0.1779$

3.  Expected number: $E(X) = np = 20 \times 0.05 = 1$
    Standard deviation: $\sigma = \sqrt{npq} = \sqrt{20 \times 0.05 \times 0.95} = \sqrt{0.95} \approx 0.9747$

4.  $n=500, p=0.01$. $np = 500 \times 0.01 = 5$.
    Poisson approximation: $\lambda = np = 5$. We want $P(X < 4) = P(X \le 3)$.
    $P(X \le 3) = P(Y=0) + P(Y=1) + P(Y=2) + P(Y=3)$
    $P(Y=k) = \frac{e^{-5} 5^k}{k!}$
    $P(Y=0) = \frac{e^{-5} 5^0}{0!} = e^{-5} \approx 0.006738$
    $P(Y=1) = \frac{e^{-5} 5^1}{1!} = 5e^{-5} \approx 0.033690$
    $P(Y=2) = \frac{e^{-5} 5^2}{2!} = \frac{25e^{-5}}{2} \approx 0.084225$
    $P(Y=3) = \frac{e^{-5} 5^3}{3!} = \frac{125e^{-5}}{6} \approx 0.140375$
    $P(X < 4) \approx 0.006738 + 0.033690 + 0.084225 + 0.140375 \approx 0.2650$

5.  $n=150, p=0.6, q=0.4$.
    $np = 150 \times 0.6 = 90 \ge 5$
    $nq = 150 \times 0.4 = 60 \ge 5$
    Normal approximation is suitable.
    $\mu = np = 90$
    $\sigma = \sqrt{npq} = \sqrt{150 \times 0.6 \times 0.4} = \sqrt{36} = 6$
    We want $P(85 \le X \le 95)$. Using continuity correction:
    $P(84.5 \le Y \le 95.5)$
    $Z_1 = \frac{84.5 - 90}{6} = \frac{-5.5}{6} \approx -0.9167$
    $Z_2 = \frac{95.5 - 90}{6} = \frac{5.5}{6} \approx 0.9167$
    $P(-0.9167 \le Z \le 0.9167) = P(Z \le 0.9167) - P(Z \le -0.9167)$
    Using a standard normal table: $P(Z \le 0.9167) \approx 0.8202$ and $P(Z \le -0.9167) \approx 0.1798$.
    $P(85 \le X \le 95) \approx 0.8202 - 0.1798 \approx 0.6404$

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
