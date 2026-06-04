---
title: "Poisson distribution as a limit of the binomial distribution"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4ba"
status: "completed"
scrapedAt: "2026-05-23T17:50:37.355Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Poisson Distribution as a Limit of the Binomial Distribution

---

**Learning Outcomes:**

*   Understand the conditions under which the Poisson distribution can approximate the binomial distribution.
*   Derive the Poisson probability mass function (PMF) as a limit of the binomial PMF.
*   Identify scenarios in electrical science where the Poisson distribution is applicable due to its relationship with the binomial distribution.
*   Apply the Poisson distribution to solve problems involving rare events, especially in the context of electrical systems.

---

**Course Outcomes Alignment:**

*   **CO1: Illustrate the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.**
    *   This topic directly addresses CO1 by focusing on the Poisson distribution, a key discrete random variable model. It demonstrates how this model arises as a limit from another important discrete model (binomial), deepening the understanding of their relationship and applicability. The examples will illustrate its use in suitable random phenomena encountered in electrical science. (Knowledge Level: K3 - Application)

---

### 1. Introduction: The Binomial Distribution

Before diving into the Poisson limit, it's crucial to recall the Binomial distribution.

*   **Definition:** A binomial random variable $X$ represents the number of successes in a fixed number of independent Bernoulli trials, each with the same probability of success.
*   **Parameters:**
    *   $n$: The number of trials.
    *   $p$: The probability of success in a single trial.
*   **Probability Mass Function (PMF):**
    $$P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad \text{for } k = 0, 1, 2, \dots, n$$
    where $\binom{n}{k} = \frac{n!}{k!(n-k)!}$.

**Key Characteristics of Binomial Distribution:**

*   Fixed number of trials ($n$).
*   Each trial is independent.
*   Two possible outcomes for each trial (success/failure).
*   Constant probability of success ($p$) for each trial.

**Example Scenario (Binomial):**
Consider the number of defective components in a batch of 100 components, where the probability of any single component being defective is 0.02. Here, $n=100$ and $p=0.02$. The number of defective components follows a Binomial distribution $B(100, 0.02)$.

---

### 2. The Need for an Approximation: When Binomial Becomes Difficult

Calculating binomial probabilities can become computationally intensive when:

*   $n$ is very large.
*   $p$ is very small.

In such cases, the binomial distribution can often be approximated by another distribution, which simplifies calculations and provides valuable insights. This approximation is the Poisson distribution.

---

### 3. The Poisson Distribution

*   **Definition:** A Poisson random variable $Y$ represents the number of events occurring in a fixed interval of time or space, given that these events occur with a known constant mean rate and independently of the time since the last event.
*   **Parameter:**
    *   $\lambda$ (lambda): The average number of events in the interval. $\lambda > 0$.
*   **Probability Mass Function (PMF):**
    $$P(Y=k) = \frac{e^{-\lambda} \lambda^k}{k!}, \quad \text{for } k = 0, 1, 2, \dots$$

**Key Characteristics of Poisson Distribution:**

*   Events occur at a constant average rate.
*   Events are independent of the time since the last event.
*   The number of events in disjoint intervals are independent.

**Example Scenario (Poisson):**
The number of electrical faults occurring per hour on a particular transmission line, given an average rate of 2 faults per hour. Here, $\lambda = 2$.

---

### 4. Deriving the Poisson Distribution as a Limit of the Binomial Distribution

We want to find the limit of the binomial PMF $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$ as $n \to \infty$ and $p \to 0$, under the condition that the mean $np = \lambda$ (a constant).

Let $\lambda = np$. This implies $p = \frac{\lambda}{n}$.

Now, substitute $p = \frac{\lambda}{n}$ into the binomial PMF:

$$P(X=k) = \binom{n}{k} \left(\frac{\lambda}{n}\right)^k \left(1-\frac{\lambda}{n}\right)^{n-k}$$

Let's break down the terms and take the limit as $n \to \infty$:

**Step 1: Expand the Binomial Coefficient**
$$\binom{n}{k} = \frac{n!}{k!(n-k)!} = \frac{n(n-1)(n-2)\dots(n-k+1)}{k!}$$

**Step 2: Rewrite the PMF**
$$P(X=k) = \frac{n(n-1)(n-2)\dots(n-k+1)}{k!} \cdot \frac{\lambda^k}{n^k} \cdot \left(1-\frac{\lambda}{n}\right)^{n-k}$$

Rearrange the terms:
$$P(X=k) = \frac{n(n-1)\dots(n-k+1)}{n^k} \cdot \frac{\lambda^k}{k!} \cdot \left(1-\frac{\lambda}{n}\right)^n \cdot \left(1-\frac{\lambda}{n}\right)^{-k}$$

**Step 3: Analyze Each Term as $n \to \infty$**

*   **Term 1: $\frac{n(n-1)\dots(n-k+1)}{n^k}$**
    $$ \frac{n}{n} \cdot \frac{n-1}{n} \cdot \frac{n-2}{n} \cdot \dots \cdot \frac{n-k+1}{n} = 1 \cdot \left(1-\frac{1}{n}\right) \cdot \left(1-\frac{2}{n}\right) \cdot \dots \cdot \left(1-\frac{k-1}{n}\right) $$
    As $n \to \infty$, each term $\left(1-\frac{i}{n}\right) \to 1$ for a fixed $k$.
    So, this entire term approaches $1 \cdot 1 \cdot 1 \cdot \dots \cdot 1 = 1$.

*   **Term 2: $\frac{\lambda^k}{k!}$**
    This term is independent of $n$, so it remains $\frac{\lambda^k}{k!}$.

*   **Term 3: $\left(1-\frac{\lambda}{n}\right)^n$**
    This is a standard limit. Recall the definition of $e^x$:
    $$e^x = \lim_{n \to \infty} \left(1+\frac{x}{n}\right)^n$$
    In our case, $x = -\lambda$.
    So, $\lim_{n \to \infty} \left(1-\frac{\lambda}{n}\right)^n = e^{-\lambda}$.

*   **Term 4: $\left(1-\frac{\lambda}{n}\right)^{-k}$**
    As $n \to \infty$, $\frac{\lambda}{n} \to 0$.
    So, $\left(1-\frac{\lambda}{n}\right)^{-k} \to (1-0)^{-k} = 1^{-k} = 1$.

**Step 4: Combine the Limits**
Taking the limit of the entire PMF as $n \to \infty$:

$$ \lim_{n \to \infty} P(X=k) = \left(\lim_{n \to \infty} \frac{n(n-1)\dots(n-k+1)}{n^k}\right) \cdot \left(\lim_{n \to \infty} \frac{\lambda^k}{k!}\right) \cdot \left(\lim_{n \to \infty} \left(1-\frac{\lambda}{n}\right)^n\right) \cdot \left(\lim_{n \to \infty} \left(1-\frac{\lambda}{n}\right)^{-k}\right) $$

$$ \lim_{n \to \infty} P(X=k) = 1 \cdot \frac{\lambda^k}{k!} \cdot e^{-\lambda} \cdot 1 = \frac{e^{-\lambda} \lambda^k}{k!} $$

This is the PMF of the Poisson distribution with parameter $\lambda$.

**Important Point to Remember:**
The Poisson distribution is a good approximation to the binomial distribution when $n$ is large and $p$ is small, such that $\lambda = np$ is a moderate value. A common rule of thumb is $n \ge 20$ and $p \le 0.05$, or $n \ge 100$ and $np \le 10$.

---

**Referencing Textbooks:**

*   **Devore J. L. (9th ed., 2016):** Devore discusses the Poisson distribution as a limiting case of the binomial distribution in Chapter 4. He emphasizes the conditions for approximation and provides examples of its use in quality control and reliability engineering, areas relevant to electrical science.
*   **Veerarajan T. (3rd ed., 2008):** Veerarajan also covers this topic in Chapter 5, detailing the derivation and conditions for approximation. He highlights scenarios like the number of defects or calls in a given period, which can be modeled by the Poisson process.

---

### 5. Applications in Electrical Science

The Poisson distribution, as a limit of the binomial, is incredibly useful for modeling rare events in electrical systems.

*   **Number of component failures:** The number of vacuum tubes failing in a large batch of radios per month, where the failure rate of each tube is low.
*   **Number of signal errors:** The number of bit errors in a digital communication system over a fixed transmission period, assuming errors are rare and independent.
*   **Number of power outages:** The number of short-term power interruptions on a particular feeder line per year, where prolonged outages are rare but minor disruptions might occur randomly.
*   **Number of traffic accidents:** While not strictly electrical, similar principles apply to modeling rare events. For instance, the number of vehicle breakdowns per hour on a specific highway segment monitored by an electrical traffic control system.
*   **Number of calls to a support center:** The number of urgent calls received by an electrical grid operator per minute during off-peak hours.

**Why it's a limit of Binomial here?**
Imagine a very large number of components ($n$) in an electrical system. Each component has a small probability ($p$) of failing within a certain period. If we consider the number of failures in that period, it can be modeled by a binomial distribution. When $n$ is extremely large and $p$ is tiny, this binomial distribution can be well-approximated by a Poisson distribution with $\lambda = np$ (the expected number of failures).

---

### 6. Examples

**Example 1: Component Failure**

A semiconductor manufacturer claims that its transistors have a 0.1% defect rate. If a batch of 1000 transistors is tested, what is the probability that exactly 3 are defective?

*   **Binomial Approach:**
    *   $n = 1000$ (large)
    *   $p = 0.001$ (small)
    *   $np = 1000 \times 0.001 = 1$. This is a moderate value.
    *   We can approximate using Poisson.

*   **Poisson Approximation:**
    *   $\lambda = np = 1$
    *   We want to find $P(X=3)$ using the Poisson PMF:
        $$P(X=3) = \frac{e^{-1} (1)^3}{3!} = \frac{e^{-1}}{6}$$
    *   Using a calculator, $e^{-1} \approx 0.36788$.
    *   $P(X=3) \approx \frac{0.36788}{6} \approx 0.06131$

*   **Exact Binomial Calculation (for comparison):**
    $$P(X=3) = \binom{1000}{3} (0.001)^3 (1-0.001)^{997}$$
    $$P(X=3) = \frac{1000 \times 999 \times 998}{3 \times 2 \times 1} (0.001)^3 (0.999)^{997}$$
    $$P(X=3) \approx 166,167,000 \times 10^{-9} \times 0.36809 \approx 0.06124$$
    The Poisson approximation is very close to the exact binomial probability.

**Example 2: Signal Errors**

In a digital communication system, the probability of a single bit error is $10^{-5}$. If 1 million bits are transmitted, what is the probability that exactly 5 bits are in error?

*   **Binomial Approach:**
    *   $n = 1,000,000$ (very large)
    *   $p = 10^{-5}$ (very small)
    *   $np = 1,000,000 \times 10^{-5} = 10$. This is a moderate value.
    *   Poisson approximation is suitable.

*   **Poisson Approximation:**
    *   $\lambda = np = 10$
    *   We want to find $P(X=5)$:
        $$P(X=5) = \frac{e^{-10} (10)^5}{5!} = \frac{e^{-10} \times 100,000}{120}$$
    *   Using a calculator, $e^{-10} \approx 0.0000454$.
    *   $P(X=5) \approx \frac{0.0000454 \times 100,000}{120} \approx \frac{4.54}{120} \approx 0.03783$

---

### 7. Practice Questions

1.  A faulty resistor has a probability of $0.005$ of occurring in any given batch of resistors. If a shipment contains 500 resistors, what is the probability that exactly 2 are faulty?
    *(Hint: Use Poisson approximation.)*

2.  In a manufacturing process, the probability of a defect in a single item is $0.01$. If 200 items are produced in a day, calculate the probability of finding exactly 3 defective items.
    *(Hint: Check if Poisson approximation is valid and use it.)*

3.  A telephone exchange receives an average of 5 calls per minute during the peak hours. Assuming calls arrive independently, what is the probability that in a particular minute, the exchange receives exactly 3 calls?
    *(Hint: This is a direct Poisson problem, but conceptually, you can think of it as a limit of binomial if you consider tiny time intervals within a minute, each with a very small probability of a call.)*

---

### 8. Answers to Practice Questions

1.  **Solution:**
    *   $n = 500$, $p = 0.005$.
    *   $np = 500 \times 0.005 = 2.5$. This is a moderate value, so Poisson approximation is appropriate.
    *   $\lambda = 2.5$. We need to find $P(X=2)$.
    *   $P(X=2) = \frac{e^{-2.5} (2.5)^2}{2!} = \frac{e^{-2.5} \times 6.25}{2}$
    *   $e^{-2.5} \approx 0.082085$.
    *   $P(X=2) \approx \frac{0.082085 \times 6.25}{2} \approx \frac{0.51303}{2} \approx 0.2565$

2.  **Solution:**
    *   $n = 200$, $p = 0.01$.
    *   $np = 200 \times 0.01 = 2$. This is a moderate value, and $n$ is reasonably large, so Poisson approximation is suitable.
    *   $\lambda = 2$. We need to find $P(X=3)$.
    *   $P(X=3) = \frac{e^{-2} (2)^3}{3!} = \frac{e^{-2} \times 8}{6} = \frac{4}{3} e^{-2}$
    *   $e^{-2} \approx 0.135335$.
    *   $P(X=3) \approx \frac{4}{3} \times 0.135335 \approx 4 \times 0.04511 \approx 0.1804$

3.  **Solution:**
    *   This is a direct application of the Poisson distribution.
    *   The average rate is $\lambda = 5$ calls per minute.
    *   We need to find $P(X=3)$.
    *   $P(X=3) = \frac{e^{-5} (5)^3}{3!} = \frac{e^{-5} \times 125}{6}$
    *   $e^{-5} \approx 0.006738$.
    *   $P(X=3) \approx \frac{0.006738 \times 125}{6} \approx \frac{0.84225}{6} \approx 0.1404$

---

### 9. Summary and Key Takeaways

*   The Poisson distribution can be derived as a limiting case of the binomial distribution when the number of trials ($n$) becomes very large, the probability of success ($p$) becomes very small, and the product $np = \lambda$ remains constant.
*   This approximation is useful for modeling rare events, such as component failures, errors, or occurrences in a fixed interval of time or space.
*   The parameter $\lambda$ of the Poisson distribution represents the average rate of occurrence of the event.
*   The Poisson PMF is given by $P(Y=k) = \frac{e^{-\lambda} \lambda^k}{k!}$.
*   In electrical science, this relationship allows us to simplify calculations for many phenomena that inherently have a low probability of occurring in many individual trials.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
