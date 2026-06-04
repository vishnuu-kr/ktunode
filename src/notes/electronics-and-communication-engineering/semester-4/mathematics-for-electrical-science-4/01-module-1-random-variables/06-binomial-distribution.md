---
title: "Binomial distribution"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4b8"
status: "completed"
scrapedAt: "2026-05-23T17:50:36.004Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4: Module 1: Random Variables - Binomial Distribution

This document provides comprehensive study notes on the Binomial Distribution, a fundamental concept within Module 1: Random Variables for the course MATHEMATICS FOR ELECTRICAL SCIENCE – 4. These notes are designed to align with the learning outcomes of the module and the broader course outcomes, particularly CO1 which focuses on discrete random variables.

## 1. Introduction to Binomial Distribution

The binomial distribution is a discrete probability distribution that describes the probability of obtaining a specific number of successes in a fixed number of independent Bernoulli trials. A Bernoulli trial is a random experiment with exactly two possible outcomes, typically labeled "success" and "failure".

**Key Concept:** The binomial distribution models situations where we have repeated, independent trials, each with the same probability of success.

### 1.1 Bernoulli Trials

A **Bernoulli trial** is an experiment that satisfies the following conditions:
*   There are exactly two possible outcomes: "success" and "failure".
*   The probability of success, denoted by $p$, is the same for every trial.
*   The probability of failure, denoted by $q = 1 - p$, is also the same for every trial.
*   The trials are independent of each other, meaning the outcome of one trial does not affect the outcome of any other trial.

**Example:**
*   Flipping a fair coin: Success = Heads (p=0.5), Failure = Tails (q=0.5).
*   Testing a manufactured component for defects: Success = Component is functional (p), Failure = Component is defective (q=1-p).

### 1.2 The Binomial Distribution

A **binomial random variable**, denoted by $X$, is a random variable that counts the number of successes in a fixed number of $n$ independent Bernoulli trials, where the probability of success in each trial is $p$.

The binomial distribution is characterized by two parameters:
*   $n$: The number of trials (a non-negative integer).
*   $p$: The probability of success in a single trial (where $0 \leq p \leq 1$).

The probability mass function (PMF) of a binomial random variable $X$ is given by:

$$ P(X=k) = \binom{n}{k} p^k (1-p)^{n-k} $$

where:
*   $k$: The number of successes ($k$ can take integer values from 0 to $n$).
*   $\binom{n}{k} = \frac{n!}{k!(n-k)!}$: This is the binomial coefficient, representing the number of ways to choose $k$ successes from $n$ trials.

**Reference (Devore J. L., 9th ed., Chapter 3.3):** Devore extensively covers the binomial distribution, defining it as the distribution of the number of successes in $n$ independent Bernoulli trials. He emphasizes the conditions for its applicability.

**Reference (Veerarajan T., 3rd ed., Chapter 4.3):** Veerarajan also provides a thorough explanation of the binomial distribution, detailing its derivation and providing numerous examples related to engineering applications.

### 1.3 Properties of the Binomial Distribution

For a binomial random variable $X \sim \text{Binomial}(n, p)$:

*   **Expected Value (Mean):**
    $$ E(X) = np $$
    The expected number of successes is the number of trials multiplied by the probability of success in each trial.

*   **Variance:**
    $$ Var(X) = np(1-p) $$
    The variance measures the spread of the distribution.

*   **Standard Deviation:**
    $$ \sigma_X = \sqrt{np(1-p)} $$
    The standard deviation is the square root of the variance.

**Important Point:** The mean and variance are crucial for understanding the central tendency and variability of the number of successes in a binomial experiment.

### 1.4 Conditions for Using the Binomial Distribution

To accurately model a situation using the binomial distribution, the following conditions must be met:

1.  **Fixed Number of Trials ($n$):** The experiment consists of a predetermined number of trials.
2.  **Two Possible Outcomes:** Each trial must have only two possible outcomes: success or failure.
3.  **Independent Trials:** The outcome of each trial must be independent of the outcomes of other trials.
4.  **Constant Probability of Success ($p$):** The probability of success must be the same for each trial.

**Reference (Ross S. M., 6th ed., Chapter 4.3):** Ross emphasizes these conditions as prerequisites for applying the binomial model.

## 2. Examples of Binomial Distribution in Electrical Science

The binomial distribution finds applications in various electrical engineering contexts.

### 2.1 Component Reliability

Consider a batch of $n$ identical electronic components. Each component has a probability $p$ of functioning correctly after a certain period. If we assume that the functioning of each component is independent, then the number of components that function correctly in the batch follows a binomial distribution.

**Example:**
Suppose a manufacturer produces microchips, and the probability that a single microchip is defective is $p = 0.05$. If we test a random sample of $n = 10$ microchips, what is the probability that exactly 2 of them are defective?

Here, $X$ = number of defective microchips.
$n = 10$ (number of trials)
$p = 0.05$ (probability of a chip being defective, i.e., "success")
$k = 2$ (number of successes, i.e., defective chips)

Using the binomial PMF:
$$ P(X=2) = \binom{10}{2} (0.05)^2 (1-0.05)^{10-2} $$
$$ P(X=2) = \frac{10!}{2!8!} (0.0025) (0.95)^8 $$
$$ P(X=2) = 45 \times 0.0025 \times (0.95)^8 $$
$$ P(X=2) \approx 45 \times 0.0025 \times 0.6634 $$
$$ P(X=2) \approx 0.0746 $$

So, the probability of finding exactly 2 defective microchips in a sample of 10 is approximately 0.0746.

### 2.2 Quality Control

In a quality control process, a batch of items is inspected. If the proportion of defective items is known, the number of defective items in a sample can be modeled using a binomial distribution.

**Example:**
A quality inspector checks a batch of 20 light bulbs. The historical defect rate for this type of bulb is 10% ($p = 0.10$). What is the probability that the inspector finds no defective bulbs in the batch?

Here, $X$ = number of defective bulbs.
$n = 20$
$p = 0.10$
$k = 0$

$$ P(X=0) = \binom{20}{0} (0.10)^0 (1-0.10)^{20-0} $$
$$ P(X=0) = 1 \times 1 \times (0.90)^{20} $$
$$ P(X=0) \approx 0.1216 $$

The probability of finding no defective bulbs is approximately 0.1216.

### 2.3 Signal Transmission

Consider a communication system where bits are transmitted. If each bit has a probability $p$ of being transmitted correctly, and the transmission of each bit is independent, then the number of correctly transmitted bits in a block of $n$ bits can be approximated by a binomial distribution.

**Example:**
In a digital communication system, a block of 50 bits is transmitted. The probability of a single bit being transmitted without error is $p = 0.99$. What is the expected number of correctly transmitted bits?

Here, $X$ = number of correctly transmitted bits.
$n = 50$
$p = 0.99$

$$ E(X) = np = 50 \times 0.99 = 49.5 $$

The expected number of correctly transmitted bits is 49.5.

## 3. Binomial Probabilities Calculation

Calculating binomial probabilities can be done using the PMF directly, or by using binomial probability tables or statistical software.

### 3.1 Using the PMF Directly

As shown in the examples above, plugging the values of $n$, $p$, and $k$ into the PMF formula is the fundamental way to calculate probabilities.

### 3.2 Binomial Probability Tables

Many textbooks and online resources provide tables of binomial probabilities for various values of $n$ and $p$. These tables can be used to quickly find $P(X=k)$, $P(X \leq k)$, or $P(X \geq k)$.

**Reference (Devore J. L., 9th ed., Appendix B):** Devore's textbook includes extensive tables for binomial probabilities, which can be very useful for manual calculations.

### 3.3 Cumulative Binomial Probabilities

Often, we are interested in the probability of getting *at most* $k$ successes ($P(X \leq k)$) or *at least* $k$ successes ($P(X \geq k)$).

*   $$ P(X \leq k) = \sum_{i=0}^{k} P(X=i) = \sum_{i=0}^{k} \binom{n}{i} p^i (1-p)^{n-i} $$

*   $$ P(X \geq k) = \sum_{i=k}^{n} P(X=i) = \sum_{i=k}^{n} \binom{n}{i} p^i (1-p)^{n-i} $$

Alternatively, $P(X \geq k) = 1 - P(X < k) = 1 - P(X \leq k-1)$.

**Example:**
Using the microchip defect example ($n=10, p=0.05$), what is the probability of finding at most 2 defective chips?

$$ P(X \leq 2) = P(X=0) + P(X=1) + P(X=2) $$
We already calculated $P(X=2) \approx 0.0746$.
Let's calculate $P(X=0)$ and $P(X=1)$:
$$ P(X=0) = \binom{10}{0} (0.05)^0 (0.95)^{10} \approx 1 \times 1 \times 0.5987 \approx 0.5987 $$
$$ P(X=1) = \binom{10}{1} (0.05)^1 (0.95)^{9} \approx 10 \times 0.05 \times 0.6302 \approx 0.3151 $$

So, $$ P(X \leq 2) \approx 0.5987 + 0.3151 + 0.0746 \approx 0.9884 $$

The probability of finding at most 2 defective microchips is approximately 0.9884.

## 4. Approximations to the Binomial Distribution

When $n$ is very large, calculating binomial probabilities directly can be computationally intensive. In such cases, approximations can be used.

### 4.1 Normal Approximation to the Binomial Distribution

When $n$ is large, and $np \geq 5$ and $n(1-p) \geq 5$, the binomial distribution can be approximated by a normal distribution with mean $\mu = np$ and standard deviation $\sigma = \sqrt{np(1-p)}$.

$$ X \sim \text{Binomial}(n, p) \approx N(np, np(1-p)) $$

**Continuity Correction:** When using the normal distribution to approximate a discrete distribution, a continuity correction is often applied. For example, $P(X \leq k)$ in the binomial distribution is approximated by $P(Y \leq k + 0.5)$ where $Y$ is the normal random variable. Similarly, $P(X \geq k)$ is approximated by $P(Y \geq k - 0.5)$.

**Example:**
Suppose a complex system has 1000 independent components, and each component has a probability of failure of 0.01. What is the probability that exactly 15 components fail?

Here, $n = 1000$, $p = 0.01$.
$np = 1000 \times 0.01 = 10$.
$n(1-p) = 1000 \times 0.99 = 990$.
Since $np \geq 5$ and $n(1-p) \geq 5$, we can use the normal approximation.
Mean $\mu = np = 10$.
Standard deviation $\sigma = \sqrt{np(1-p)} = \sqrt{1000 \times 0.01 \times 0.99} = \sqrt{9.9} \approx 3.146$.

We want to find $P(X=15)$. Using continuity correction, we approximate this with $P(14.5 \leq Y \leq 15.5)$, where $Y \sim N(10, 9.9)$.
$Z_1 = \frac{14.5 - 10}{3.146} = \frac{4.5}{3.146} \approx 1.430$
$Z_2 = \frac{15.5 - 10}{3.146} = \frac{5.5}{3.146} \approx 1.748$

$P(X=15) \approx P(1.430 \leq Z \leq 1.748) = P(Z \leq 1.748) - P(Z \leq 1.430)$
From Z-tables:
$P(Z \leq 1.748) \approx 0.9598$
$P(Z \leq 1.430) \approx 0.9236$

$P(X=15) \approx 0.9598 - 0.9236 = 0.0362$

**Reference (Veerarajan T., 3rd ed., Chapter 4.4):** Veerarajan discusses the normal approximation to the binomial distribution, providing guidelines and examples for its use.

### 4.2 Poisson Approximation to the Binomial Distribution

When $n$ is large and $p$ is small (typically $np \leq 5$), the binomial distribution can be approximated by a Poisson distribution with parameter $\lambda = np$.

$$ X \sim \text{Binomial}(n, p) \approx \text{Poisson}(\lambda = np) $$

The PMF of a Poisson distribution is:
$$ P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!} $$

**Example:**
Consider a very large batch of transistors, where the probability of a single transistor being faulty is $p = 0.001$. If we randomly select $n = 500$ transistors, what is the probability that exactly 3 are faulty?

Here, $n = 500$, $p = 0.001$.
$np = 500 \times 0.001 = 0.5$.
Since $n$ is large and $p$ is small ($np=0.5 \leq 5$), we can use the Poisson approximation.
$\lambda = np = 0.5$.

We want to find $P(X=3)$.
$$ P(X=3) = \frac{e^{-0.5} (0.5)^3}{3!} = \frac{e^{-0.5} \times 0.125}{6} $$
Using $e^{-0.5} \approx 0.6065$:
$$ P(X=3) \approx \frac{0.6065 \times 0.125}{6} \approx \frac{0.0758125}{6} \approx 0.0126 $$

**Reference (Devore J. L., 9th ed., Chapter 3.4):** Devore explains the Poisson approximation, highlighting the conditions under which it is appropriate and providing its formula.

**Reference (Ross S. M., 6th ed., Chapter 4.4):** Ross also covers the Poisson approximation, often demonstrating its utility in scenarios with rare events.

## 5. Practice Questions and Exercises

1.  **Question:** A communication system transmits packets of data. Each packet has an independent probability of being corrupted as $p = 0.02$. If a transmission consists of 50 packets, what is the probability that exactly 3 packets are corrupted?
    *   **Hint:** Use the binomial distribution.
    *   **Answer:** $P(X=3) = \binom{50}{3} (0.02)^3 (0.98)^{47} \approx 0.0606$

2.  **Question:** An electrical component has a reliability of 0.95 (i.e., the probability of not failing is 0.95). If 10 such components are used in a system, and the system fails if at least two components fail, what is the probability that the system fails?
    *   **Hint:** Consider the number of failing components. The system fails if $X \geq 2$. It's easier to calculate $1 - P(X < 2) = 1 - (P(X=0) + P(X=1))$.
    *   **Answer:** $n=10$, $p$ (failure) $= 1 - 0.95 = 0.05$.
        $P(X=0) = \binom{10}{0} (0.05)^0 (0.95)^{10} \approx 0.5987$
        $P(X=1) = \binom{10}{1} (0.05)^1 (0.95)^9 \approx 0.3151$
        $P(\text{system fails}) = P(X \geq 2) = 1 - (P(X=0) + P(X=1)) \approx 1 - (0.5987 + 0.3151) \approx 1 - 0.9138 = 0.0862$

3.  **Question:** In a manufacturing process, 1% of the items produced are defective. If a sample of 300 items is taken, what is the approximate probability that exactly 5 items are defective? Use the Poisson approximation.
    *   **Hint:** $n=300$, $p=0.01$. Calculate $\lambda = np$.
    *   **Answer:** $\lambda = np = 300 \times 0.01 = 3$.
        $P(X=5) = \frac{e^{-3} 3^5}{5!} = \frac{0.0498 \times 243}{120} \approx \frac{12.1014}{120} \approx 0.1008$

4.  **Question:** A quality control engineer randomly samples 20 resistors from a production line. The probability that a resistor meets the specified tolerance is 0.8. What is the probability that at least 18 resistors meet the tolerance?
    *   **Hint:** Use the binomial distribution. $P(X \geq 18) = P(X=18) + P(X=19) + P(X=20)$.
    *   **Answer:** $n=20$, $p=0.8$.
        $P(X=18) = \binom{20}{18} (0.8)^{18} (0.2)^2 \approx 190 \times 0.01801 \times 0.04 \approx 0.1369$
        $P(X=19) = \binom{20}{19} (0.8)^{19} (0.2)^1 \approx 20 \times 0.01441 \times 0.2 \approx 0.0576$
        $P(X=20) = \binom{20}{20} (0.8)^{20} (0.2)^0 \approx 1 \times 0.01153 \times 1 \approx 0.0115$
        $P(X \geq 18) \approx 0.1369 + 0.0576 + 0.0115 \approx 0.2060$

## 6. Important Points to Remember

*   The binomial distribution is a cornerstone for understanding count data in a fixed number of trials with constant probabilities.
*   **Conditions are Key:** Always verify the four conditions (fixed trials, two outcomes, independence, constant probability) before applying the binomial model.
*   **Parameters:** Remember that a binomial distribution is defined by $n$ (number of trials) and $p$ (probability of success).
*   **Formula:** The PMF is $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$.
*   **Mean and Variance:** $E(X) = np$ and $Var(X) = np(1-p)$ are essential properties.
*   **Approximations:** The Normal and Poisson distributions serve as valuable approximations for the binomial distribution when $n$ is large, under specific conditions.

## 7. Alignment with Course Outcomes

*   **CO1: Illustrate the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.**
    This entire module on the binomial distribution directly addresses CO1. The notes cover the concept, properties (mean, variance), and the binomial distribution as a key model for discrete random phenomena (reliability, quality control, etc.). The examples provided demonstrate its application. The knowledge level K3 is achieved by understanding and applying these concepts.

These notes provide a comprehensive foundation for understanding the binomial distribution within the context of Mathematics for Electrical Science – 4, equipping you to apply these principles to various electrical engineering problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
