---
title: "Binomial distribution"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d95"
status: "completed"
scrapedAt: "2026-05-23T16:16:47.923Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE– 4: Module 1: Random Variables - Binomial Distribution

This module introduces you to the fundamental concepts of random variables and their distributions. We will delve into discrete probability distributions, with a specific focus on the Binomial Distribution, a crucial tool for analyzing phenomena with a fixed number of independent trials and two possible outcomes.

## Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the conditions under which the binomial distribution can be applied.
*   Identify the parameters of a binomial distribution.
*   Calculate probabilities associated with binomial experiments using the probability mass function (PMF).
*   Determine the mean and variance of a binomial distribution.
*   Recognize and solve problems involving binomial experiments in various contexts, particularly those relevant to electrical science.

## Introduction to Binomial Distribution

The binomial distribution is a discrete probability distribution that describes the number of successes in a fixed number of independent Bernoulli trials. A Bernoulli trial is a random experiment with only two possible outcomes, typically labeled "success" and "failure."

**Key Concept:** The binomial distribution is applicable when the following four conditions are met (as per Devore, 2016, Ch. 3.3):

1.  **Fixed Number of Trials:** The experiment consists of a fixed number of trials, denoted by '$n$'.
2.  **Independent Trials:** Each trial is independent of the others, meaning the outcome of one trial does not affect the outcome of any other trial.
3.  **Two Possible Outcomes:** Each trial has only two possible outcomes, conventionally called "success" and "failure."
4.  **Constant Probability of Success:** The probability of success, denoted by '$p$', is the same for every trial. Consequently, the probability of failure is '$q = 1 - p$'.

**Connection to Course Outcomes:** This topic directly contributes to **CO1: Understand the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.** The binomial distribution is a prime example of such a model.

### 1.1 Parameters of the Binomial Distribution

A binomial distribution is completely characterized by two parameters:

*   **$n$:** The number of trials.
*   **$p$:** The probability of success in a single trial.

We denote a binomial distribution as $X \sim Bin(n, p)$, where $X$ is the random variable representing the number of successes.

### 1.2 Probability Mass Function (PMF) of the Binomial Distribution

The probability of obtaining exactly $k$ successes in $n$ trials is given by the binomial probability mass function (PMF):

$$P(X=k) = \binom{n}{k} p^k q^{n-k}$$

where:

*   $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ is the binomial coefficient, representing the number of ways to choose $k$ successes from $n$ trials.
*   $p^k$ is the probability of getting $k$ successes.
*   $q^{n-k}$ is the probability of getting $(n-k)$ failures.
*   $k$ can take values $0, 1, 2, \dots, n$.

**Example (Veerarajan, 2008, Ch. 4.3):**
Suppose a manufacturer produces light bulbs, and the probability that a bulb is defective is 0.05. If we test a random sample of 10 bulbs, what is the probability that exactly 2 of them are defective?

Here, $n = 10$ (number of bulbs tested), $p = 0.05$ (probability of a defective bulb, i.e., success), and $k = 2$ (number of defective bulbs we want). The probability of failure is $q = 1 - p = 1 - 0.05 = 0.95$.

Using the PMF:
$$P(X=2) = \binom{10}{2} (0.05)^2 (0.95)^{10-2}$$
$$P(X=2) = \frac{10!}{2!(10-2)!} (0.05)^2 (0.95)^8$$
$$P(X=2) = \frac{10 \times 9}{2 \times 1} (0.0025) (0.6634)$$
$$P(X=2) = 45 \times 0.0025 \times 0.6634 \approx 0.0746$$

So, the probability of exactly 2 defective bulbs in a sample of 10 is approximately 0.0746.

### 1.3 Mean and Variance of the Binomial Distribution

For a binomial distribution $X \sim Bin(n, p)$:

*   **Mean (Expected Value):** $\mu = E[X] = np$
    The mean represents the average number of successes we expect in $n$ trials.

*   **Variance:** $\sigma^2 = Var(X) = npq = np(1-p)$
    The variance measures the spread or dispersion of the number of successes around the mean.

*   **Standard Deviation:** $\sigma = \sqrt{npq} = \sqrt{np(1-p)}$

**Example (Devore, 2016, Ch. 3.3):**
Consider the light bulb example from before. For $n=10$ and $p=0.05$:
*   Mean: $\mu = np = 10 \times 0.05 = 0.5$
    On average, we expect 0.5 defective bulbs in a sample of 10.

*   Variance: $\sigma^2 = npq = 10 \times 0.05 \times 0.95 = 0.475$
    The spread of the number of defective bulbs is 0.475.

*   Standard Deviation: $\sigma = \sqrt{0.475} \approx 0.689$

**Important Point to Remember:** The mean and variance formulas are simple and very useful for understanding the central tendency and spread of the binomial distribution without having to calculate individual probabilities.

### 1.4 Applications in Electrical Science

The binomial distribution finds applications in various areas of electrical science:

*   **Reliability Engineering:** Estimating the probability of a certain number of components failing in a system after a given period, assuming component failures are independent.
*   **Quality Control:** Determining the probability of finding a specific number of defective items in a batch of manufactured goods.
*   **Communication Systems:** Analyzing the number of successful transmissions in a series of communication attempts, where each attempt has a fixed probability of success.
*   **Circuit Testing:** Evaluating the number of circuits that pass or fail a given test under specific conditions.

**Example:**
A busy communication link has an average of 3 errors in every 100 transmitted bits. If we consider 20 consecutive bits, what is the probability that exactly 1 bit has an error?

Here, $n = 20$ (number of bits), $p = 3/100 = 0.03$ (probability of an error in a single bit, considered a "success" in this context), and $k = 1$ (number of errors). $q = 1 - 0.03 = 0.97$.

$$P(X=1) = \binom{20}{1} (0.03)^1 (0.97)^{20-1}$$
$$P(X=1) = 20 \times 0.03 \times (0.97)^{19}$$
$$P(X=1) = 0.6 \times 0.5606 \approx 0.3364$$

So, the probability of exactly 1 error in 20 bits is approximately 0.3364.

## Practice Questions

**Question 1:**
A semiconductor manufacturer tests its transistors for a specific defect. The probability that a randomly selected transistor has this defect is 0.01. If a batch contains 50 transistors, what is the probability that:
a) Exactly 0 transistors are defective?
b) Exactly 2 transistors are defective?
c) At least 1 transistor is defective?

**Question 2:**
In a system, each of the 10 components has an independent probability of 0.9 of functioning correctly. What is the probability that exactly 8 components function correctly? What is the expected number of functioning components?

**Question 3:**
A signal is transmitted through a noisy channel. The probability of a bit error is $p = 0.1$. If 5 bits are transmitted, what is the probability of at most one bit error?

## Answers to Practice Questions

**Answer 1:**
Here, $n = 50$ and $p = 0.01$, so $q = 1 - 0.01 = 0.99$.
a) $P(X=0) = \binom{50}{0} (0.01)^0 (0.99)^{50} = 1 \times 1 \times (0.99)^{50} \approx 0.6050$
b) $P(X=2) = \binom{50}{2} (0.01)^2 (0.99)^{48} = \frac{50 \times 49}{2} \times 0.0001 \times (0.99)^{48} \approx 25 \times 0.0001 \times 0.6116 \approx 0.0153$
c) $P(X \ge 1) = 1 - P(X=0) = 1 - 0.6050 = 0.3950$

**Answer 2:**
Here, $n = 10$ and $p = 0.9$, so $q = 1 - 0.9 = 0.1$.
$P(X=8) = \binom{10}{8} (0.9)^8 (0.1)^{10-8} = \binom{10}{2} (0.9)^8 (0.1)^2$
$P(X=8) = \frac{10 \times 9}{2} \times (0.4305) \times 0.01$
$P(X=8) = 45 \times 0.4305 \times 0.01 \approx 0.1937$
Expected number of functioning components: $\mu = np = 10 \times 0.9 = 9$.

**Answer 3:**
Here, $n = 5$ and $p = 0.1$, so $q = 1 - 0.1 = 0.9$.
"At most one bit error" means $X=0$ or $X=1$.
$P(X=0) = \binom{5}{0} (0.1)^0 (0.9)^5 = 1 \times 1 \times (0.9)^5 \approx 0.5905$
$P(X=1) = \binom{5}{1} (0.1)^1 (0.9)^4 = 5 \times 0.1 \times (0.9)^4 \approx 5 \times 0.1 \times 0.6561 = 0.32805$
$P(X \le 1) = P(X=0) + P(X=1) \approx 0.5905 + 0.32805 = 0.91855$

## Important Points to Remember

*   The binomial distribution is for a fixed number of independent trials, each with two outcomes and constant probability of success.
*   The PMF is $P(X=k) = \binom{n}{k} p^k q^{n-k}$.
*   Mean: $\mu = np$.
*   Variance: $\sigma^2 = npq$.
*   Recognize the conditions for its applicability to avoid misapplication.
