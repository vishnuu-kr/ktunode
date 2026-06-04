---
title: "Poisson distribution as a limit of the binomial distribution"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d97"
status: "completed"
scrapedAt: "2026-05-23T16:16:49.265Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Poisson Distribution as a Limit of the Binomial Distribution

This topic explores how the Poisson distribution can be used as a good approximation for the binomial distribution under specific conditions, a crucial concept in understanding rare events and modeling phenomena in electrical science.

---

### 1. Review of Binomial Distribution

Before diving into the limit, let's briefly revisit the binomial distribution.

*   **Definition:** The binomial distribution describes the probability of obtaining a specific number of successes in a fixed number of independent Bernoulli trials, where each trial has only two possible outcomes (success or failure) with a constant probability of success.

*   **Parameters:**
    *   $n$: The number of trials.
    *   $p$: The probability of success in a single trial.

*   **Probability Mass Function (PMF):**
    $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$, for $k = 0, 1, 2, \dots, n$.

*   **Key Characteristics:**
    *   Fixed number of trials ($n$).
    *   Each trial is independent.
    *   Two possible outcomes per trial (success/failure).
    *   Constant probability of success ($p$).

*   **When is it used?** Useful for modeling situations like:
    *   Number of defective items in a sample.
    *   Number of heads in a series of coin flips.
    *   Number of successful transmissions in a communication channel.

---

### 2. The Need for Approximation: When the Binomial Becomes Difficult

While powerful, the binomial distribution can become computationally intensive or conceptually challenging when:

*   **$n$ is very large:** Calculating $\binom{n}{k}$ and powers of $p$ and $(1-p)$ becomes cumbersome.
*   **$p$ is very small (rare events):** The probability of success is very low.

In these scenarios, the Poisson distribution offers a convenient and accurate approximation.

---

### 3. Introducing the Poisson Distribution

*   **Definition:** The Poisson distribution describes the probability of a given number of events occurring in a fixed interval of time or space, if these events occur with a known constant mean rate and independently of the time since the last event.

*   **Parameter:**
    *   $\lambda$ (lambda): The average number of events in the given interval (mean).

*   **Probability Mass Function (PMF):**
    $P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$, for $k = 0, 1, 2, \dots$

*   **Key Characteristics:**
    *   Deals with counts of events.
    *   Events occur independently.
    *   The average rate of occurrence ($\lambda$) is constant.

*   **When is it used?** Useful for modeling situations like:
    *   Number of customer arrivals at a service point per hour.
    *   Number of defects per unit area of a material.
    *   Number of errors in a block of data transmitted.
    *   Number of radioactive decays in a given time interval.

---

### 4. The Limiting Process: Binomial to Poisson

The Poisson distribution arises as a limiting case of the binomial distribution when:

1.  **The number of trials ($n$) tends to infinity ($n \to \infty$).**
2.  **The probability of success ($p$) tends to zero ($p \to 0$).**
3.  **The product $np$ remains constant and finite.** Let this constant be $\lambda = np$.

This scenario perfectly describes situations where we have a very large number of opportunities for an event to occur, but the probability of any single opportunity resulting in an event is very small.

**Derivation (Conceptual Outline):**

We want to show that for a binomial distribution $B(n, p)$, when $n \to \infty$ and $p \to 0$ such that $np = \lambda$, the PMF approaches the Poisson PMF.

$P_{binomial}(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$

Substitute $p = \frac{\lambda}{n}$:

$P_{binomial}(X=k) = \frac{n!}{k!(n-k)!} \left(\frac{\lambda}{n}\right)^k \left(1-\frac{\lambda}{n}\right)^{n-k}$

$P_{binomial}(X=k) = \frac{n(n-1)\dots(n-k+1)}{k!} \frac{\lambda^k}{n^k} \left(1-\frac{\lambda}{n}\right)^n \left(1-\frac{\lambda}{n}\right)^{-k}$

Now, consider the limits as $n \to \infty$:

*   $\frac{n(n-1)\dots(n-k+1)}{n^k} \approx \frac{n \cdot n \dots n}{n^k} = \frac{n^k}{n^k} = 1$ (since $k$ is typically small relative to $n$). More formally, $\frac{n(n-1)\dots(n-k+1)}{n^k} \to 1$ as $n \to \infty$.
*   $\left(1-\frac{\lambda}{n}\right)^{-k} \to 1$ as $n \to \infty$ (since $k$ is fixed, and $\frac{\lambda}{n} \to 0$).
*   The crucial part: $\left(1-\frac{\lambda}{n}\right)^n$. Recall the definition of $e$: $e^x = \lim_{n \to \infty} \left(1 + \frac{x}{n}\right)^n$. Here, $x = -\lambda$. So, $\lim_{n \to \infty} \left(1-\frac{\lambda}{n}\right)^n = e^{-\lambda}$.

Combining these limits:

$\lim_{n \to \infty, np=\lambda} P_{binomial}(X=k) = 1 \cdot \frac{\lambda^k}{k!} \cdot e^{-\lambda} \cdot 1 = \frac{e^{-\lambda} \lambda^k}{k!}$

This is exactly the Poisson PMF.

**Key Takeaway:** When you have a situation with a large number of trials and a small probability of success per trial, such that the expected number of successes ($np$) is moderate, the Poisson distribution is an excellent approximation.

---

### 5. Conditions for Approximation

To use the Poisson distribution as an approximation for the binomial distribution:

*   **$n$ is large** (e.g., $n \ge 20$ or $n \ge 50$ are common rules of thumb, but the larger, the better).
*   **$p$ is small** (e.g., $p \le 0.05$ or $p \le 0.1$ are common rules of thumb).
*   **The product $np$ is moderate** (e.g., $np < 10$). The value $\lambda = np$ should not be too large, as the approximation's accuracy can decrease for very large $\lambda$.

**Textbook Reference:** Devore J. L. (9th ed.) discusses this approximation in its chapter on discrete random variables, highlighting the conditions under which the binomial can be approximated by the Poisson. Veerarajan (3rd ed.) also covers this limit in its treatment of Poisson distribution.

---

### 6. Examples and Applications in Electrical Science

**Example 1: Component Failure**

A critical component in an electronic circuit has a very low probability of failure during its operational life. If we have a large batch of these components, we can use the Poisson distribution to estimate the probability of a certain number of failures in a given period.

*   **Scenario:** A manufacturer produces integrated circuits. The probability of a single circuit having a manufacturing defect is $p = 0.001$. In a production run of $n = 1000$ circuits, what is the probability that exactly 2 circuits are defective?

*   **Binomial Approach:**
    $P(X=2) = \binom{1000}{2} (0.001)^2 (1-0.001)^{1000-2}$
    $P(X=2) = \binom{1000}{2} (0.001)^2 (0.999)^{998}$

    Calculating this directly is tedious.

*   **Poisson Approximation:**
    Check conditions:
    *   $n = 1000$ (large)
    *   $p = 0.001$ (small)
    *   $\lambda = np = 1000 \times 0.001 = 1$ (moderate)

    The conditions are met. Using the Poisson PMF with $\lambda = 1$:
    $P(X=2) = \frac{e^{-1} (1)^2}{2!} = \frac{e^{-1}}{2}$
    $P(X=2) \approx \frac{0.36788}{2} \approx 0.18394$

    Using a calculator for the binomial: $\binom{1000}{2} (0.001)^2 (0.999)^{998} \approx 0.1838$
    The approximation is very good.

**Example 2: Data Transmission Errors**

In digital communication, errors can occur during data transmission. If the probability of an error in a single bit is very low, and we consider a large block of bits, the number of errors can be modeled by a Poisson distribution.

*   **Scenario:** A data transmission system has a bit error rate of $p = 10^{-6}$. A packet contains $n = 10^5$ bits. What is the probability that a packet contains exactly 0 errors?

*   **Poisson Approximation:**
    *   $n = 10^5$ (very large)
    *   $p = 10^{-6}$ (very small)
    *   $\lambda = np = 10^5 \times 10^{-6} = 0.1$ (moderate)

    Using the Poisson PMF with $\lambda = 0.1$:
    $P(X=0) = \frac{e^{-0.1} (0.1)^0}{0!} = \frac{e^{-0.1} \cdot 1}{1} = e^{-0.1}$
    $P(X=0) \approx 0.90484$

    This suggests that the packet is highly likely to have no errors.

**Example 3: Network Traffic**

The number of requests arriving at a server per second can be modeled using a Poisson process, which directly relates to the Poisson distribution for counts within a fixed interval.

*   **Scenario:** A web server receives an average of $\lambda = 5$ requests per second. What is the probability of receiving exactly 3 requests in a given second?

*   **Poisson Distribution (directly applicable here as it's already framed as a count over an interval):**
    $P(X=3) = \frac{e^{-5} (5)^3}{3!} = \frac{e^{-5} \cdot 125}{6}$
    $P(X=3) \approx \frac{0.006738 \cdot 125}{6} \approx \frac{0.84225}{6} \approx 0.14038$

---

### 7. Practice Questions and Exercises

**Question 1:**
A machine produces bolts, and the probability that a bolt is defective is $0.01$. If a sample of 200 bolts is taken, what is the probability that exactly 3 bolts are defective? Use the Poisson approximation.

**Question 2:**
In a certain region, the average number of power outages per month is 2. Model the number of outages in a month using a Poisson distribution. What is the probability of having exactly 1 outage in a month?

**Question 3:**
A telecommunication company experiences signal failures at a rate of $1$ per $10^4$ transmission blocks. If a data stream consists of $10^4$ transmission blocks, what is the probability that there are no signal failures?

**Question 4:**
A batch of 500 electronic components is inspected. The probability of a component being faulty is $0.003$.
a) Calculate the exact probability that exactly 2 components are faulty using the binomial distribution.
b) Calculate the probability that exactly 2 components are faulty using the Poisson approximation.
c) Compare the results from (a) and (b).

---

### 8. Answers to Practice Questions

**Answer 1:**
*   $n = 200$, $p = 0.01$.
*   $\lambda = np = 200 \times 0.01 = 2$.
*   Conditions are met ($n$ is large, $p$ is small, $np$ is moderate).
*   Using Poisson PMF for $k=3$:
    $P(X=3) = \frac{e^{-2} (2)^3}{3!} = \frac{e^{-2} \cdot 8}{6} = \frac{4}{3} e^{-2}$
    $P(X=3) \approx \frac{4}{3} \times 0.13534 \approx 0.18045$

**Answer 2:**
*   This is directly a Poisson process. The average rate $\lambda = 2$ outages per month.
*   We want $P(X=1)$ for a month.
*   Using Poisson PMF:
    $P(X=1) = \frac{e^{-2} (2)^1}{1!} = 2e^{-2}$
    $P(X=1) \approx 2 \times 0.13534 \approx 0.27067$

**Answer 3:**
*   Here, $n = 10^4$ transmission blocks and $p = 1/10^4 = 0.0001$ is the probability of failure per block.
*   $\lambda = np = 10^4 \times 0.0001 = 1$.
*   We want $P(X=0)$.
*   Using Poisson PMF:
    $P(X=0) = \frac{e^{-1} (1)^0}{0!} = \frac{e^{-1} \cdot 1}{1} = e^{-1}$
    $P(X=0) \approx 0.36788$

**Answer 4:**
*   $n = 500$, $p = 0.003$.
*   $\lambda = np = 500 \times 0.003 = 1.5$.

*   **a) Binomial Probability:**
    $P(X=2) = \binom{500}{2} (0.003)^2 (1-0.003)^{500-2}$
    $P(X=2) = \binom{500}{2} (0.003)^2 (0.997)^{498}$
    Calculating $\binom{500}{2} = \frac{500 \times 499}{2} = 124750$.
    $P(X=2) = 124750 \times (0.000009) \times (0.997)^{498}$
    Using a calculator: $(0.997)^{498} \approx 0.2337$
    $P(X=2) \approx 124750 \times 0.000009 \times 0.2337 \approx 0.2613$

*   **b) Poisson Approximation:**
    Using Poisson PMF with $\lambda = 1.5$ for $k=2$:
    $P(X=2) = \frac{e^{-1.5} (1.5)^2}{2!} = \frac{e^{-1.5} \cdot 2.25}{2}$
    $P(X=2) = 1.125 \times e^{-1.5}$
    $P(X=2) \approx 1.125 \times 0.22313 \approx 0.2510$

*   **c) Comparison:**
    The binomial probability is approximately $0.2613$, and the Poisson approximation is approximately $0.2510$. The approximation is reasonably good, with a difference of about $0.0103$. The conditions for approximation ($n$ large, $p$ small) are met, although $n=500$ is not as extremely large as in some other examples, and $p=0.003$ is small but not minuscule. The approximation improves as $n$ gets larger and $p$ gets smaller.

---

### 9. Important Points to Remember

*   The Poisson distribution is a **limiting form** of the binomial distribution when $n \to \infty$, $p \to 0$, and $np = \lambda$ (constant).
*   This approximation is particularly useful for modeling **rare events** occurring in a large number of trials or over a large interval.
*   **Key conditions for approximation:** Large $n$, small $p$, moderate $np$. Common rules of thumb: $n \ge 20$, $p \le 0.05$, and $np < 10$.
*   The Poisson distribution is defined by a single parameter, $\lambda$, which represents the average rate of occurrence.
*   The Poisson distribution is fundamental in understanding **Poisson processes**, which are used extensively in modeling arrival times, events in queues, and reliability.
*   When applying the Poisson approximation, ensure that the problem context truly represents a scenario that can be framed as a large number of independent trials with a small probability of success.

---

### 10. Alignment with Course Outcomes

This topic directly supports:

*   **CO1: Understand the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.**
    *   **K3 Knowledge Level:** Students will understand the properties of both binomial and Poisson distributions and learn how to apply the Poisson as an approximation to the binomial when modeling phenomena like component failures, transmission errors, or arrival processes.

---
