---
title: "Poisson distribution as a limit of the binomial distribution"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810922"
status: "completed"
scrapedAt: "2026-05-20T18:45:56.835Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Poisson Distribution as a Limit of the Binomial Distribution

---

### 1. Introduction

The Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space if these events occur with a known constant mean rate and independently of the time since the last event.

In this topic, we will explore how the Poisson distribution can be derived as a limiting case of the binomial distribution under specific conditions. This understanding is crucial as it allows us to approximate binomial probabilities with Poisson probabilities when dealing with rare events over a large number of trials.

---

### 2. Review of the Binomial Distribution

Before delving into the limit, let's briefly recap the Binomial Distribution.

**Definition:** The Binomial distribution describes the probability of obtaining exactly $k$ successes in $n$ independent Bernoulli trials, where the probability of success in each trial is constant, denoted by $p$.

**Probability Mass Function (PMF):**
$$P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$$
where:
*   $n$: number of trials (a non-negative integer)
*   $k$: number of successes (an integer from 0 to $n$)
*   $p$: probability of success in a single trial ($0 \le p \le 1$)
*   $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ (the binomial coefficient)

**Key Characteristics:**
*   Fixed number of trials ($n$).
*   Each trial is independent.
*   Each trial has only two possible outcomes: success or failure.
*   The probability of success ($p$) is constant for all trials.

---

### 3. The Limiting Case: When Binomial Approaches Poisson

We consider a scenario where the number of trials ($n$) is very large, and the probability of success ($p$) in each trial is very small. This often occurs when we are observing rare events. In such cases, the binomial distribution can be approximated by the Poisson distribution.

**Conditions for Approximation:**
1.  **Large $n$:** The number of trials is very large.
2.  **Small $p$:** The probability of success in each trial is very small.
3.  **Constant Mean:** The product $np$ (which is the mean of the binomial distribution) remains constant and finite. Let this constant mean be denoted by $\lambda$.
    $$\lambda = np$$

**Derivation of Poisson PMF from Binomial PMF:**

We start with the binomial PMF:
$$P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$$

Substitute $p = \frac{\lambda}{n}$:
$$P(X=k) = \binom{n}{k} \left(\frac{\lambda}{n}\right)^k \left(1-\frac{\lambda}{n}\right)^{n-k}$$

Now, let's expand the terms and take the limit as $n \to \infty$:

*   **Binomial Coefficient:**
    $$\binom{n}{k} = \frac{n!}{k!(n-k)!} = \frac{n(n-1)(n-2)...(n-k+1)}{k!}$$
    For large $n$, $n(n-1)(n-2)...(n-k+1)$ is approximately $n^k$.
    So, $\binom{n}{k} \approx \frac{n^k}{k!}$

*   **The term $(1-p)^{n-k}$:**
    We know that $\left(1 - \frac{x}{n}\right)^n \to e^{-x}$ as $n \to \infty$.
    Here, $(1-\frac{\lambda}{n})^{n-k} = \left(1-\frac{\lambda}{n}\right)^n \left(1-\frac{\lambda}{n}\right)^{-k}$

    As $n \to \infty$:
    *   $\left(1-\frac{\lambda}{n}\right)^n \to e^{-\lambda}$
    *   $\left(1-\frac{\lambda}{n}\right)^{-k} \to (1-0)^{-k} = 1$

Now, let's combine these approximations back into the binomial PMF:
$$P(X=k) \approx \frac{n^k}{k!} \left(\frac{\lambda}{n}\right)^k (e^{-\lambda})(1)$$
$$P(X=k) \approx \frac{n^k}{k!} \frac{\lambda^k}{n^k} e^{-\lambda}$$
$$P(X=k) \approx \frac{\lambda^k e^{-\lambda}}{k!}$$

This is the Probability Mass Function (PMF) of the Poisson distribution.

**Definition of Poisson Distribution:**
The random variable $X$ follows a Poisson distribution with parameter $\lambda$ (mean number of events) if its PMF is given by:
$$P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}$$
where:
*   $k$: number of occurrences (a non-negative integer, $k=0, 1, 2, ...$)
*   $\lambda$: average rate or mean number of events in the interval ($ \lambda > 0 $)
*   $e$: the base of the natural logarithm (approximately 2.71828)

**Key Characteristics of Poisson Distribution:**
*   Counts the number of events in a fixed interval of time or space.
*   Events occur with a known constant mean rate.
*   Events are independent of the time since the last event.
*   The probability of an event occurring is proportional to the length of the interval.
*   The probability of more than one event occurring in a very short interval is negligible.

---

### 4. Examples and Applications

The Poisson distribution is widely used in physical sciences to model phenomena like:

*   **Radioactive Decay:** The number of atomic nuclei that decay in a given time interval.
*   **Particle Detection:** The number of particles detected by a counter in a fixed period.
*   **Cosmic Rays:** The number of cosmic ray showers detected per unit area per unit time.
*   **Quantum Optics:** The number of photons detected by a photodetector.
*   **Reliability Engineering:** The number of failures in a system per unit time.

**Example 1: Radioactive Decay**

A radioactive source emits particles at an average rate of 5 particles per minute. What is the probability that in a given minute, exactly 3 particles are emitted?

**Solution:**
This scenario fits the Poisson distribution as we are counting events (particle emissions) in a fixed interval (one minute) with a known average rate.

Here, $\lambda = 5$ (particles per minute) and $k = 3$ (particles emitted).
Using the Poisson PMF:
$$P(X=3) = \frac{e^{-5} 5^3}{3!} = \frac{e^{-5} \times 125}{6}$$
$$P(X=3) \approx \frac{0.006738 \times 125}{6} \approx \frac{0.84225}{6} \approx 0.140375$$

So, the probability of exactly 3 particles being emitted in a given minute is approximately 0.1404.

**Example 2: Approximating Binomial with Poisson**

Consider a manufacturing process where the probability of a defect in a single item is 0.001. If we inspect a batch of 1000 items, what is the probability of finding exactly 2 defective items?

**Solution:**
This is a binomial problem with $n=1000$ and $p=0.001$.
The binomial probability would be:
$$P(X=2) = \binom{1000}{2} (0.001)^2 (1-0.001)^{1000-2}$$
$$P(X=2) = \binom{1000}{2} (0.001)^2 (0.999)^{998}$$

Calculating this directly can be tedious. Let's check the conditions for Poisson approximation:
*   $n = 1000$ (large)
*   $p = 0.001$ (small)
*   $\lambda = np = 1000 \times 0.001 = 1$ (constant and finite)

So, we can approximate this using the Poisson distribution with $\lambda = 1$.
$$P(X=2) \approx \frac{e^{-1} 1^2}{2!} = \frac{e^{-1}}{2}$$
$$P(X=2) \approx \frac{0.36788}{2} \approx 0.18394$$

Let's compare with the exact binomial calculation:
$\binom{1000}{2} = \frac{1000 \times 999}{2} = 499500$
$P(X=2) = 499500 \times (0.001)^2 \times (0.999)^{998}$
$P(X=2) = 499500 \times 0.000001 \times (0.999)^{998}$
$P(X=2) = 0.4995 \times (0.999)^{998} \approx 0.4995 \times 0.36803 \approx 0.18386$

The Poisson approximation (0.18394) is very close to the exact binomial probability (0.18386), demonstrating the effectiveness of the approximation.

---

### 5. Practice Questions

**Question 1:**
A quantum physicist is studying the number of photons detected by a sensor in a given second. The average detection rate is 3 photons per second. What is the probability that exactly 5 photons are detected in a given second?
(a) $\frac{e^{-3} 3^5}{5!}$
(b) $\frac{e^{-5} 5^3}{3!}$
(c) $\frac{e^{-3} 5^3}{3!}$
(d) $\frac{e^{-5} 3^5}{5!}$

**Question 2:**
In a city, the average number of traffic accidents per week is 2. What is the probability that in a given week there will be exactly 0 accidents?

**Question 3:**
A rare genetic mutation occurs in 1 in every 10,000 people. If a sample of 5000 people is taken, what is the probability that exactly 3 people in the sample have the mutation? Use the Poisson approximation.

**Question 4:**
A signal transmission system has a bit error rate of $10^{-5}$. If 1 million bits are transmitted, what is the probability that exactly 10 bits are in error? Use the Poisson approximation.

---

### 6. Answers to Practice Questions

**Answer 1:**
The average rate is $\lambda = 3$ photons per second. We want to find the probability of $k = 5$ photons.
Using the Poisson PMF $P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}$:
$P(X=5) = \frac{e^{-3} 3^5}{5!}$
The correct option is **(a)**.

**Answer 2:**
Here, $\lambda = 2$ accidents per week. We want to find the probability of $k = 0$ accidents.
$P(X=0) = \frac{e^{-2} 2^0}{0!} = \frac{e^{-2} \times 1}{1} = e^{-2}$
$P(X=0) \approx 0.1353$

**Answer 3:**
This is a binomial problem with $n = 5000$ and $p = \frac{1}{10000} = 0.0001$.
We need to use the Poisson approximation.
Calculate $\lambda = np = 5000 \times 0.0001 = 0.5$.
We want the probability of $k = 3$ people having the mutation.
$P(X=3) \approx \frac{e^{-0.5} (0.5)^3}{3!} = \frac{e^{-0.5} \times 0.125}{6}$
$P(X=3) \approx \frac{0.60653 \times 0.125}{6} \approx \frac{0.075816}{6} \approx 0.012636$

**Answer 4:**
This is a binomial problem with $n = 1,000,000$ and $p = 10^{-5}$.
We use the Poisson approximation.
Calculate $\lambda = np = 1,000,000 \times 10^{-5} = 10$.
We want the probability of $k = 10$ bit errors.
$P(X=10) \approx \frac{e^{-10} 10^{10}}{10!} = \frac{e^{-10} \times 10^{10}}{3628800}$
$P(X=10) \approx \frac{0.000045399 \times 10^{10}}{3628800} \approx \frac{453999.3}{3628800} \approx 0.1251$

---

### 7. Important Points to Remember

*   **Conditions for Poisson Approximation:** Always check if $n$ is large, $p$ is small, and $np$ is a finite constant ($\lambda$) before using the Poisson distribution to approximate the binomial distribution.
*   **$\lambda$ is the Mean:** In both the Poisson and the limiting binomial context, $\lambda = np$ represents the mean number of events.
*   **Poisson is for Rare Events:** The Poisson distribution is particularly useful for modeling the number of rare events occurring in a fixed interval.
*   **Binomial vs. Poisson:** The binomial distribution requires a fixed number of trials, while the Poisson distribution models events occurring over a continuous interval. The Poisson distribution can be seen as an extension of the binomial distribution when $n$ is very large and $p$ is very small.
*   **Applications:** The Poisson distribution has broad applicability in physical sciences, including fields like nuclear physics, optics, and material science, for modeling count data.

---
This concludes the study notes on the Poisson distribution as a limit of the binomial distribution. Remember to practice these concepts with various problems to solidify your understanding.
