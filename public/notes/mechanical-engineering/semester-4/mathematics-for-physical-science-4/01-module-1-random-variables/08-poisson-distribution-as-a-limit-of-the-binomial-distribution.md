---
title: "Poisson distribution as a limit of the binomial distribution"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462eb8"
status: "completed"
scrapedAt: "2026-05-20T17:54:35.523Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Poisson Distribution as a Limit of the Binomial Distribution

---

### **1. Introduction & Motivation**

The Poisson distribution is a fundamental discrete probability distribution that describes the probability of a given number of events occurring in a fixed interval of time or space if these events occur with a known constant mean rate and independently of the time since the last event.

A crucial aspect of the Poisson distribution is its relationship with the binomial distribution. Under certain conditions, the binomial distribution can be approximated by the Poisson distribution. This is particularly useful when dealing with a large number of trials and a small probability of success in a binomial experiment.

**Learning Outcome Covered:**
*   Understanding the concept, properties, and important models of discrete random variables (aligns with CO1).

**Knowledge Level:** K3 (Applying knowledge) - Understanding *why* and *when* one distribution can approximate another is an application of knowledge.

---

### **2. Review of the Binomial Distribution**

Before delving into the limit, let's briefly recap the binomial distribution.

**Definition:** A random variable $X$ follows a binomial distribution, denoted as $X \sim B(n, p)$, if it represents the number of successes in a fixed number of independent Bernoulli trials, where:
*   There are $n$ independent trials.
*   Each trial has only two possible outcomes: success or failure.
*   The probability of success, $p$, is constant for each trial.
*   The probability of failure is $q = 1 - p$.

**Probability Mass Function (PMF):**
$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$, for $k = 0, 1, 2, \ldots, n$.

**Key Properties:**
*   Expected Value (Mean): $E(X) = np$
*   Variance: $Var(X) = np(1-p)$

**Reference:** Devore, J. L. (2016), Chapter 4.

---

### **3. Conditions for the Limit**

The Poisson distribution arises as a limiting case of the binomial distribution when:

1.  **The number of trials ($n$) is very large.**
2.  **The probability of success ($p$) is very small.**

While $n$ is large and $p$ is small, the product $np$, which represents the expected number of successes, is kept constant. Let $\lambda = np$.

**Important Point to Remember:** The Poisson approximation works best when $n$ is large (typically $n \ge 20$) and $p$ is small (typically $p \le 0.05$). A common rule of thumb is that if $n \ge 100$ and $np \le 10$, the approximation is usually excellent.

---

### **4. Derivation of the Poisson Distribution from the Binomial Distribution**

We want to show that as $n \to \infty$ and $p \to 0$ such that $np = \lambda$ (a constant), the binomial PMF approaches the Poisson PMF.

Let $X \sim B(n, p)$. We have $p = \lambda/n$.
The binomial PMF is:
$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$

Substitute $p = \lambda/n$ and $1-p = 1 - \lambda/n$:
$P(X = k) = \binom{n}{k} \left(\frac{\lambda}{n}\right)^k \left(1 - \frac{\lambda}{n}\right)^{n-k}$

Let's break down the terms:

*   **Binomial Coefficient:**
    $\binom{n}{k} = \frac{n!}{k!(n-k)!} = \frac{n(n-1)(n-2)\cdots(n-k+1)}{k!}$

*   **Combining terms:**
    $P(X = k) = \frac{n(n-1)(n-2)\cdots(n-k+1)}{k!} \cdot \frac{\lambda^k}{n^k} \cdot \left(1 - \frac{\lambda}{n}\right)^{n-k}$

    Rearrange the terms:
    $P(X = k) = \frac{n(n-1)(n-2)\cdots(n-k+1)}{n^k} \cdot \frac{\lambda^k}{k!} \cdot \left(1 - \frac{\lambda}{n}\right)^{n}$

    Consider the term $\frac{n(n-1)(n-2)\cdots(n-k+1)}{n^k}$:
    As $n \to \infty$, each of the $k$ terms in the numerator ($n, n-1, \ldots, n-k+1$) is approximately equal to $n$. So, this term approaches $n^k/n^k = 1$.
    More rigorously, $\frac{n(n-1)\cdots(n-k+1)}{n^k} = \frac{n}{n} \cdot \frac{n-1}{n} \cdots \frac{n-k+1}{n} = 1 \cdot (1 - \frac{1}{n}) \cdots (1 - \frac{k-1}{n})$.
    As $n \to \infty$, each $(1 - \frac{i}{n})$ term approaches 1.

*   **Consider the term $\left(1 - \frac{\lambda}{n}\right)^{n-k}$:**
    As $n \to \infty$, $k$ is much smaller than $n$, so $n-k \approx n$.
    We use the limit definition of $e$: $\lim_{n \to \infty} \left(1 + \frac{x}{n}\right)^n = e^x$.
    Here, we have $\left(1 - \frac{\lambda}{n}\right)^{n-k} = \left(1 - \frac{\lambda}{n}\right)^n \left(1 - \frac{\lambda}{n}\right)^{-k}$.
    As $n \to \infty$, $\left(1 - \frac{\lambda}{n}\right)^n \to e^{-\lambda}$.
    And as $n \to \infty$, $\left(1 - \frac{\lambda}{n}\right)^{-k} \to (1-0)^{-k} = 1$.
    So, $\left(1 - \frac{\lambda}{n}\right)^{n-k} \to e^{-\lambda}$.

*   **Putting it all together:**
    As $n \to \infty$ and $p \to 0$ with $np = \lambda$:
    $P(X = k) \to 1 \cdot \frac{\lambda^k}{k!} \cdot e^{-\lambda}$
    $P(X = k) \to \frac{e^{-\lambda} \lambda^k}{k!}$

This is the Probability Mass Function (PMF) of the Poisson distribution.

**Reference:** Devore, J. L. (2016), Section 4.4; Papoulis & Pillai (2002), Chapter 4.

---

### **5. The Poisson Distribution**

**Definition:** A random variable $X$ follows a Poisson distribution with parameter $\lambda$, denoted as $X \sim Pois(\lambda)$, if its PMF is given by:
$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$, for $k = 0, 1, 2, \ldots$

Here, $\lambda$ is a positive real number representing the average rate of events in the given interval.

**Key Properties:**
*   Expected Value (Mean): $E(X) = \lambda$
*   Variance: $Var(X) = \lambda$

**Important Point to Remember:** For the Poisson distribution, the mean and variance are equal ($\lambda$). This is a key characteristic that distinguishes it from other distributions.

**Reference:** Devore, J. L. (2016), Chapter 4.

---

### **6. Examples**

**Example 1: Number of Defective Items**
Suppose a factory produces light bulbs, and the probability of a bulb being defective is 0.002. If we examine a batch of 1000 bulbs, what is the approximate probability of finding exactly 3 defective bulbs?

*   **Binomial Approach:** $n=1000$, $p=0.002$.
    $E(X) = np = 1000 \times 0.002 = 2$.
    Since $n$ is large (1000) and $p$ is small (0.002), we can use the Poisson approximation.
    $\lambda = np = 2$.
    $P(X = 3) \approx \frac{e^{-2} 2^3}{3!} = \frac{e^{-2} \cdot 8}{6} = \frac{4}{3} e^{-2} \approx \frac{4}{3} \times 0.1353 \approx 0.1804$.

    *For comparison, the exact binomial probability is:*
    $P(X=3) = \binom{1000}{3} (0.002)^3 (0.998)^{997} \approx 0.1806$.
    The approximation is very close.

**Example 2: Number of Calls to a Call Center**
A call center receives an average of 5 calls per minute during peak hours. What is the probability that it receives exactly 7 calls in a given minute?

*   **Poisson Distribution:** This scenario directly fits the Poisson distribution.
    Here, the average rate $\lambda = 5$ calls per minute.
    We want to find the probability of $k=7$ calls.
    $P(X = 7) = \frac{e^{-5} 5^7}{7!} = \frac{e^{-5} \cdot 78125}{5040} \approx 0.1044$.

**Example 3: Number of Radioactive Decays**
In a sample of radioactive material, the average number of decays per second is 10. What is the probability of observing exactly 8 decays in a 1-second interval?

*   **Poisson Distribution:**
    $\lambda = 10$ decays per second.
    $k = 8$ decays.
    $P(X = 8) = \frac{e^{-10} 10^8}{8!} = \frac{e^{-10} \cdot 100,000,000}{40320} \approx 0.1126$.

**Learning Outcomes Covered:**
*   Understanding the concept, properties, and important models of discrete random variables (aligns with CO1).
*   Applying in suitable random phenomena (aligns with CO1).

**Knowledge Level:** K3 (Applying knowledge) - These examples require recognizing the scenario that fits the Poisson distribution and applying its formula.

---

### **7. Applications in Physical Sciences**

The Poisson distribution is widely used in physical sciences to model rare events or events occurring at a constant average rate. Some applications include:

*   **Nuclear Physics:** Number of radioactive decays in a given time interval.
*   **Astronomy:** Number of photons detected by a telescope in a fixed time, number of stars in a given area of the sky.
*   **Biophysics:** Number of mutations in a DNA strand, number of protein molecules binding to a receptor.
*   **Optics:** Number of photons arriving at a detector.
*   **Reliability Engineering:** Number of failures of a system component in a given period.

**Reference:** Devore, J. L. (2016), Chapter 4 discusses Poisson as a model for "rare events." Ross, S. M. (2020) also covers similar applications.

**Learning Outcomes Covered:**
*   Understanding the concept, properties, and important models of discrete random variables and to apply in suitable random phenomena (aligns with CO1).

**Knowledge Level:** K3 (Applying knowledge) - Recognizing the applicability of the Poisson distribution in diverse scientific contexts.

---

### **8. Relationship to Other Distributions**

*   **Binomial Distribution:** As established, Poisson is a limit of Binomial.
*   **Exponential Distribution:** The time *between* events in a Poisson process (where events occur at a constant average rate) follows an exponential distribution. This is a crucial link for continuous-time modeling.
*   **Gamma Distribution:** The sum of $k$ independent exponential random variables follows a Gamma distribution, which can be related to waiting times for the $k$-th event in a Poisson process.

**Reference:** Devore, J. L. (2016), Chapter 4 and Chapter 6.

**Learning Outcomes Covered:**
*   Understanding the concept, properties, and important models of discrete random variables (aligns with CO1).

**Knowledge Level:** K3 (Applying knowledge) - Understanding how different distributions relate to each other builds a deeper conceptual understanding.

---

### **9. Practice Questions/Exercises**

1.  A manufacturer of microchips finds that, on average, 1 in 1000 microchips produced is defective. If a batch of 5000 microchips is produced, what is the approximate probability that there are exactly 3 defective microchips in the batch? (Use Poisson approximation).

2.  The number of errors per page in a book follows a Poisson distribution with an average of 0.5 errors per page. What is the probability that a randomly selected page has no errors?

3.  In a certain city, the average number of traffic accidents per week is 5. What is the probability that in a given week there will be exactly 3 accidents?

4.  A factory produces widgets, and the probability of a widget being defective is 0.01. If 200 widgets are inspected, what is the probability of finding fewer than 2 defective widgets? (Use Poisson approximation).

---

### **10. Answers to Practice Questions**

1.  **Solution:**
    *   This is a binomial scenario: $n=5000$, $p=0.001$.
    *   The mean is $np = 5000 \times 0.001 = 5$.
    *   Since $n$ is large and $p$ is small, we can approximate with a Poisson distribution with $\lambda = 5$.
    *   We need $P(X=3)$:
        $P(X = 3) \approx \frac{e^{-5} 5^3}{3!} = \frac{e^{-5} \cdot 125}{6} \approx \frac{0.006738 \cdot 125}{6} \approx \frac{0.84225}{6} \approx 0.1404$.
    *   **Answer:** Approximately 0.1404.

2.  **Solution:**
    *   This is a direct Poisson distribution problem.
    *   Average errors per page, $\lambda = 0.5$.
    *   We want the probability of $k=0$ errors.
    *   $P(X = 0) = \frac{e^{-0.5} (0.5)^0}{0!} = \frac{e^{-0.5} \cdot 1}{1} = e^{-0.5} \approx 0.6065$.
    *   **Answer:** Approximately 0.6065.

3.  **Solution:**
    *   This is a direct Poisson distribution problem.
    *   Average accidents per week, $\lambda = 5$.
    *   We want the probability of $k=3$ accidents.
    *   $P(X = 3) = \frac{e^{-5} 5^3}{3!} = \frac{e^{-5} \cdot 125}{6} \approx \frac{0.006738 \cdot 125}{6} \approx 0.1404$.
    *   **Answer:** Approximately 0.1404.

4.  **Solution:**
    *   Binomial scenario: $n=200$, $p=0.01$.
    *   Mean $np = 200 \times 0.01 = 2$.
    *   Approximate with Poisson distribution with $\lambda = 2$.
    *   We need $P(X < 2) = P(X=0) + P(X=1)$.
    *   $P(X=0) = \frac{e^{-2} 2^0}{0!} = \frac{e^{-2} \cdot 1}{1} = e^{-2} \approx 0.1353$.
    *   $P(X=1) = \frac{e^{-2} 2^1}{1!} = \frac{e^{-2} \cdot 2}{1} = 2e^{-2} \approx 0.2707$.
    *   $P(X < 2) \approx 0.1353 + 0.2707 = 0.4060$.
    *   **Answer:** Approximately 0.4060.

---

### **11. Summary and Key Takeaways**

*   The Poisson distribution is a valuable model for counting the number of rare events occurring in a fixed interval of time or space.
*   It serves as a limit to the binomial distribution when the number of trials ($n$) is large and the probability of success ($p$) is small, with the product $np = \lambda$ remaining constant.
*   The PMF of the Poisson distribution is $P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}$.
*   A key characteristic of the Poisson distribution is that its mean and variance are both equal to $\lambda$.
*   The Poisson distribution has numerous applications in various scientific fields, particularly for modeling events that occur randomly and independently at a constant average rate.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
