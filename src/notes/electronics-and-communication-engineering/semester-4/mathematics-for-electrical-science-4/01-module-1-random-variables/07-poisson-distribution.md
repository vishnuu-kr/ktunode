---
title: "Poisson distribution"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4b9"
status: "completed"
scrapedAt: "2026-05-23T17:50:36.648Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE – 4: Module 1: Random Variables

### Topic: Poisson Distribution

This module delves into discrete random variables, and the Poisson distribution is a fundamental model for understanding the occurrence of events in a fixed interval of time or space. This topic aligns with **CO1: Illustrate the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.** at a Knowledge Level K3 (Applying).

---

### 1. Introduction to the Poisson Distribution

The Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space if these events occur with a known constant mean rate and independently of the time since the last event.

**Key Concept:** It models the number of *rare events* occurring within a specified context.

**In Electrical Science, the Poisson distribution can be applied to model:**

*   The number of network failures in a given time period.
*   The number of defects in a manufactured electronic component.
*   The number of calls arriving at a customer service center in an hour.
*   The number of cosmic ray events detected by a sensor over a day.
*   The number of packet losses in a communication network during a transmission.

---

### 2. The Poisson Probability Mass Function (PMF)

The probability mass function (PMF) of a Poisson random variable $X$ is given by:

$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$$

where:
*   $X$ is the random variable representing the number of events.
*   $k$ is the number of occurrences of the event ($k = 0, 1, 2, 3, \dots$).
*   $\lambda$ (lambda) is the average number of events in the given interval (the rate parameter). It is also the mean of the distribution.
*   $e$ is the base of the natural logarithm, approximately 2.71828.
*   $k!$ is the factorial of $k$ ($k! = k \times (k-1) \times \dots \times 2 \times 1$).

**Derivation Context (Referencing Textbooks):**

*   **Devore (9th ed.):** Devore often introduces the Poisson distribution as a limiting case of the binomial distribution when the number of trials ($n$) is large and the probability of success ($p$) is small, such that $\lambda = np$ remains constant. This highlights its suitability for rare events.
*   **Veerarajan (3rd ed.):** Veerarajan likely also presents this limiting case, emphasizing the conditions under which the Poisson approximation is valid.

---

### 3. Properties of the Poisson Distribution

**a) Mean (Expected Value):**

The mean of a Poisson distribution is equal to its rate parameter $\lambda$.

$$E[X] = \lambda$$

**b) Variance:**

The variance of a Poisson distribution is also equal to its rate parameter $\lambda$.

$$Var(X) = \lambda$$

**Important Point to Remember:** The mean and variance of a Poisson distribution are equal. This is a distinctive characteristic.

**c) Probability of Zero Events:**

The probability of zero events occurring in the interval is:

$$P(X = 0) = \frac{e^{-\lambda} \lambda^0}{0!} = \frac{e^{-\lambda} \cdot 1}{1} = e^{-\lambda}$$

**d) Probabilities of Multiple Events:**

The probability of $k$ events occurring is calculated using the PMF.

**e) Sum of Independent Poisson Random Variables:**

If $X_1 \sim Poisson(\lambda_1)$ and $X_2 \sim Poisson(\lambda_2)$ are independent Poisson random variables, then their sum $Y = X_1 + X_2$ is also a Poisson random variable with parameter $\lambda_1 + \lambda_2$.

$$Y \sim Poisson(\lambda_1 + \lambda_2)$$

This property is crucial for combining counts of events from different independent sources.

---

### 4. Applications and Examples

**Example 1: Network Failures**

Suppose a network experiences an average of 3 failures per week. What is the probability that there will be exactly 5 failures in a given week?

*   Here, the interval is one week, and the average rate $\lambda = 3$.
*   We want to find $P(X = 5)$.
*   Using the PMF:
    $$P(X = 5) = \frac{e^{-3} \cdot 3^5}{5!} = \frac{e^{-3} \cdot 243}{120}$$
    $$P(X = 5) \approx \frac{0.0498 \cdot 243}{120} \approx \frac{12.1014}{120} \approx 0.1008$$

**Example 2: Defects in Components**

A manufacturer of electronic components finds that, on average, 1 in every 1000 components has a critical defect. If a batch of 500 components is inspected, what is the probability of finding exactly 2 defective components?

*   This is a situation where the binomial distribution could be used. However, the number of trials ($n = 500$) is large, and the probability of defect ($p = 1/1000 = 0.001$) is small.
*   We can approximate this using the Poisson distribution with $\lambda = np = 500 \times 0.001 = 0.5$.
*   We want to find $P(X = 2)$.
*   Using the PMF:
    $$P(X = 2) = \frac{e^{-0.5} \cdot (0.5)^2}{2!} = \frac{e^{-0.5} \cdot 0.25}{2}$$
    $$P(X = 2) \approx \frac{0.6065 \cdot 0.25}{2} \approx \frac{0.151625}{2} \approx 0.0758$$

**Example 3: Customer Arrivals**

Customers arrive at a service desk according to a Poisson process at an average rate of 10 customers per hour. What is the probability that exactly 7 customers arrive in a 30-minute period?

*   The average rate is 10 customers per hour.
*   The interval of interest is 30 minutes, which is 0.5 hours.
*   The average number of customers in a 30-minute period is $\lambda = 10 \text{ customers/hour} \times 0.5 \text{ hours} = 5$.
*   We want to find $P(X = 7)$.
*   Using the PMF:
    $$P(X = 7) = \frac{e^{-5} \cdot 5^7}{7!} = \frac{e^{-5} \cdot 78125}{5040}$$
    $$P(X = 7) \approx \frac{0.006738 \cdot 78125}{5040} \approx \frac{526.445}{5040} \approx 0.1044$$

---

### 5. Poisson Approximation to the Binomial Distribution

**Conditions for Approximation:**

The Poisson distribution can be used as an approximation to the binomial distribution when:

1.  The number of trials ($n$) is large.
2.  The probability of success ($p$) is small.
3.  The product $np$ is moderate (often $np < 10$ is a good rule of thumb).

In this case, the Poisson parameter $\lambda$ is set equal to $np$.

**Why this is important (Referencing Textbooks):**

*   **Devore:** Devore emphasizes that the Poisson distribution provides a simpler way to calculate probabilities in rare event scenarios where direct binomial calculation might be computationally intensive due to large $n$.
*   **Veerarajan:** Veerarajan likely details the mathematical justification for this approximation, showing how the binomial PMF converges to the Poisson PMF as $n \to \infty$ and $p \to 0$ with $np = \lambda$.

**Example (Revisited):**

In Example 2, we saw that the probability of finding exactly 2 defective components in a batch of 500, where the defect rate is 1 in 1000, could be approximated using Poisson.

*   Binomial calculation: $P(X=2) = \binom{500}{2} (0.001)^2 (0.999)^{498}$. This involves calculating a large binomial coefficient and a high power.
*   Poisson approximation: $\lambda = np = 500 \times 0.001 = 0.5$. $P(X=2) \approx \frac{e^{-0.5} (0.5)^2}{2!} \approx 0.0758$.

The Poisson approximation is significantly easier to compute.

---

### 6. Relationship with Exponential Distribution (Brief Mention for Context)

While the Poisson distribution models the *number of events* in an interval, the **exponential distribution** models the *time between events* in a Poisson process. If events occur according to a Poisson distribution with rate $\lambda$, the time between consecutive events follows an exponential distribution with rate $\lambda$. This connection is a key concept in **CO4: Analyze random processes...** as it links discrete event counts to continuous time intervals.

---

### 7. Practice Questions/Exercises

**Instructions:** Use the Poisson probability mass function $P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$ to solve the following problems.

**Question 1:**
A call center receives an average of 15 calls per hour. What is the probability that in a given hour, the center receives exactly 10 calls?

**Question 2:**
In a certain manufacturing process, the average number of defects per square meter of fabric is 0.5. What is the probability that a randomly selected square meter of fabric has no defects?

**Question 3:**
A traffic counter on a highway records an average of 20 cars passing a point per minute during a certain period. What is the probability that exactly 25 cars pass the point in a given minute?

**Question 4:**
A company's website experiences an average of 4 broken links per day. What is the probability that there will be more than 3 broken links in a day?
(Hint: Calculate $P(X > 3) = 1 - P(X \le 3) = 1 - [P(X=0) + P(X=1) + P(X=2) + P(X=3)]$)

**Question 5:**
A rare medical condition occurs in approximately 1 in 10,000 people. In a city of 100,000 people, what is the probability that exactly 5 people have this condition? (Use Poisson approximation).

---

### 8. Answers to Practice Questions

**Question 1:**
$\lambda = 15$, $k = 10$
$P(X = 10) = \frac{e^{-15} \cdot 15^{10}}{10!} \approx \frac{0.00000306 \cdot 5.7665 \times 10^{11}}{3628800} \approx \frac{1766}{3628800} \approx 0.0487$

**Question 2:**
$\lambda = 0.5$, $k = 0$
$P(X = 0) = \frac{e^{-0.5} \cdot (0.5)^0}{0!} = e^{-0.5} \approx 0.6065$

**Question 3:**
$\lambda = 20$, $k = 25$
$P(X = 25) = \frac{e^{-20} \cdot 20^{25}}{25!} \approx \frac{2.06 \times 10^{-9} \cdot 3.355 \times 10^{32}}{1.551 \times 10^{25}} \approx \frac{6.90 \times 10^{23}}{1.551 \times 10^{25}} \approx 0.0445$

**Question 4:**
$\lambda = 4$
$P(X \le 3) = P(X=0) + P(X=1) + P(X=2) + P(X=3)$
$P(X=0) = \frac{e^{-4} 4^0}{0!} = e^{-4} \approx 0.0183$
$P(X=1) = \frac{e^{-4} 4^1}{1!} = 4e^{-4} \approx 0.0733$
$P(X=2) = \frac{e^{-4} 4^2}{2!} = \frac{16e^{-4}}{2} = 8e^{-4} \approx 0.1465$
$P(X=3) = \frac{e^{-4} 4^3}{3!} = \frac{64e^{-4}}{6} = \frac{32}{3}e^{-4} \approx 0.1954$
$P(X \le 3) \approx 0.0183 + 0.0733 + 0.1465 + 0.1954 = 0.4335$
$P(X > 3) = 1 - P(X \le 3) \approx 1 - 0.4335 = 0.5665$

**Question 5:**
$n = 100,000$, $p = 1/10000 = 0.0001$. $k = 5$.
$\lambda = np = 100,000 \times 0.0001 = 10$.
$P(X = 5) = \frac{e^{-10} \cdot 10^5}{5!} = \frac{e^{-10} \cdot 100000}{120} \approx \frac{0.0000454 \cdot 100000}{120} \approx \frac{4.54}{120} \approx 0.0378$

---

### 9. Important Points to Remember

*   **Rare Events:** The Poisson distribution is ideal for modeling counts of events that occur randomly and infrequently in a fixed interval.
*   **Rate Parameter ($\lambda$):** This single parameter ($\lambda$) defines the entire distribution. It represents both the mean and the variance.
*   **Units of $\lambda$:** Ensure the rate parameter $\lambda$ is consistent with the interval of interest. If the rate is per hour, and you're interested in a 30-minute interval, adjust $\lambda$ accordingly.
*   **Poisson Approximation:** A powerful tool when binomial conditions ($n$ large, $p$ small) are met.
*   **Memoryless Property (Implicit):** The Poisson process underlying the Poisson distribution has a memoryless property, meaning the probability of an event occurring in the next interval does not depend on when the last event occurred. This is related to the exponential distribution of inter-arrival times.
*   **Discretely Defined:** The random variable can only take non-negative integer values ($0, 1, 2, \dots$).

---

This set of notes provides a comprehensive overview of the Poisson distribution as required for Module 1 of Mathematics for Electrical Science – 4, aligning with CO1. The content draws upon the principles outlined in standard probability and statistics textbooks, with specific emphasis on its application in electrical science contexts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
