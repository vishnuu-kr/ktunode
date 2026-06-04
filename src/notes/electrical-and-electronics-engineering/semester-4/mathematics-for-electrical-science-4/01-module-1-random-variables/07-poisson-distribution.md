---
title: "Poisson distribution"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d96"
status: "completed"
scrapedAt: "2026-05-23T16:16:48.561Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Poisson Distribution

---

### 1. Introduction to the Poisson Distribution

The Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space if these events occur with a known constant mean rate and independently of the time since the last event. It's particularly useful in electrical science for modeling events that happen randomly and at a constant average rate.

**Key Concepts:**

*   **Discrete Random Variable:** A variable whose value is a count of something.
*   **Events:** Occurrences of interest.
*   **Fixed Interval:** A specific period of time (e.g., an hour, a minute) or a specific region of space (e.g., a square meter, a kilometer).
*   **Average Rate (λ):** The expected number of events in the given interval. This is the *only* parameter of the Poisson distribution.

**Origin/Motivation (Devore, 9th Ed., Chapter 4):**
The Poisson distribution can be derived as a limiting case of the binomial distribution when the number of trials ($n$) is very large and the probability of success ($p$) in each trial is very small, such that their product ($np$) is a finite constant ($\lambda$). This scenario is common when dealing with rare events.

---

### 2. The Poisson Probability Mass Function (PMF)

The probability of observing exactly $k$ events in a given interval, when the average rate of events is $\lambda$, is given by the Poisson PMF:

$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$

Where:
*   $X$ is the random variable representing the number of events.
*   $k$ is the number of events we are interested in (k = 0, 1, 2, 3, ...).
*   $\lambda$ (lambda) is the average number of events in the interval (λ > 0). This is also the rate parameter.
*   $e$ is the base of the natural logarithm, approximately 2.71828.
*   $k!$ (k factorial) is the product of all positive integers up to $k$ ($k! = k \times (k-1) \times ... \times 1$). By convention, $0! = 1$.

**Example (Devore, 9th Ed., Example 4.10):**
Suppose a call center receives an average of 5 calls per hour. What is the probability that it receives exactly 3 calls in a given hour?
Here, $\lambda = 5$ and $k = 3$.
$P(X = 3) = \frac{e^{-5} 5^3}{3!} = \frac{e^{-5} \times 125}{6} \approx \frac{0.006738 \times 125}{6} \approx 0.1404$

---

### 3. Properties of the Poisson Distribution

*   **Mean (Expected Value):** $E[X] = \lambda$
    The average number of events in the interval is equal to the rate parameter.
*   **Variance:** $Var(X) = \lambda$
    The variance of the number of events is also equal to the rate parameter. This is a distinctive feature of the Poisson distribution.
*   **Standard Deviation:** $SD(X) = \sqrt{\lambda}$

**Alignment with Course Outcomes:**
*   **CO1 (Discrete Random Variables):** Understanding the PMF, mean, and variance of the Poisson distribution directly addresses the concept, properties, and application of a discrete random variable model. The knowledge level is K3 (Understand).

---

### 4. Applications in Electrical Science

The Poisson distribution is widely used in electrical science to model phenomena where events occur randomly and at a constant average rate.

**Examples:**

*   **Reliability Engineering:** Number of component failures per unit time in a system.
*   **Telecommunications:** Number of calls arriving at a switchboard, number of data packets arriving at a router per second.
*   **Semiconductor Industry:** Number of defects in a silicon wafer.
*   **Queueing Theory:** Arrival of customers (or jobs) at a service station.
*   **Radiation Detection:** Number of radioactive decays detected by a Geiger counter in a given time.

**Example (Veerarajan, 3rd Ed., Chapter 4):**
The number of defective items produced by a factory is known to follow a Poisson distribution with an average of 2 defective items per 100 units. What is the probability that in a batch of 100 units, there are exactly 0, 1, or 2 defective items?
First, we need to determine the rate parameter $\lambda$. If the average is 2 defective items per 100 units, then for a batch of 100 units, $\lambda = 2$.

*   $P(X=0) = \frac{e^{-2} 2^0}{0!} = e^{-2} \approx 0.1353$
*   $P(X=1) = \frac{e^{-2} 2^1}{1!} = 2e^{-2} \approx 0.2707$
*   $P(X=2) = \frac{e^{-2} 2^2}{2!} = \frac{4e^{-2}}{2} = 2e^{-2} \approx 0.2707$

The probability of having 0, 1, or 2 defective items is $P(X=0) + P(X=1) + P(X=2) \approx 0.1353 + 0.2707 + 0.2707 \approx 0.6767$.

---

### 5. Relationship with the Exponential Distribution

The Poisson and Exponential distributions are intimately related. If the number of events occurring in a fixed interval follows a Poisson distribution with rate $\lambda$, then the time between consecutive events follows an Exponential distribution with the same rate parameter $\lambda$.

*   **Poisson:** Models the number of events in an interval.
*   **Exponential:** Models the time between events.

**Formula for Exponential Distribution (Veerarajan, 3rd Ed., Chapter 4):**
$f(t) = \lambda e^{-\lambda t}$ for $t \ge 0$.

**Example:**
If customer arrivals at a service desk follow a Poisson process with an average rate of 10 customers per hour ($\lambda = 10$), then the time between customer arrivals follows an exponential distribution with $\lambda = 10$ per hour.

**Alignment with Course Outcomes:**
*   **CO1 (Discrete Random Variables):** While the exponential distribution is continuous (CO2), understanding its link to the Poisson distribution enhances the grasp of related probability models.
*   **CO2 (Continuous Random Variables):** Recognizing the relationship helps bridge discrete and continuous probability concepts.

---

### 6. Poisson Process

A Poisson process is a model used to describe the timing of events that occur randomly and independently at a constant average rate. It's a fundamental concept in stochastic processes.

**Key Characteristics of a Poisson Process:**

1.  **Independent Increments:** The number of events in disjoint intervals are independent.
2.  **Stationary Increments:** The probability of a certain number of events occurring in an interval depends only on the length of the interval, not its starting time.
3.  **The probability of exactly one event in a small interval $\Delta t$ is approximately $\lambda \Delta t$.**
4.  **The probability of more than one event in a small interval $\Delta t$ is negligible.**

If $N(t)$ is the number of events in the interval $[0, t]$, then for a Poisson process with rate $\lambda$, $N(t)$ follows a Poisson distribution with parameter $\lambda t$.
$P(N(t) = k) = \frac{e^{-\lambda t} (\lambda t)^k}{k!}$

**Example (Papoulis & Pillai, 4th Ed., Chapter 10):**
Consider a radioactive source emitting particles. The number of particles emitted per second follows a Poisson distribution with rate $\lambda = 0.5$ particles/sec. What is the probability that exactly 3 particles are emitted in 10 seconds?
Here, the rate is $\lambda = 0.5$ per second. The interval length is $t = 10$ seconds. So, the parameter for the Poisson distribution is $\lambda t = 0.5 \times 10 = 5$.
We want to find $P(N(10) = 3)$ where $N(t)$ is the number of particles emitted in $t$ seconds.
$P(N(10) = 3) = \frac{e^{-5} 5^3}{3!} = \frac{e^{-5} \times 125}{6} \approx 0.1404$

**Alignment with Course Outcomes:**
*   **CO4 (Random Processes):** The Poisson process is a direct example of a random process, and understanding its properties, like independent and stationary increments, is crucial for classifying and describing random processes. The knowledge level here is K3.

---

### 7. Important Points to Remember

*   **Parameter:** The Poisson distribution has only *one* parameter, $\lambda$ (the average rate).
*   **Count Data:** It's used for counting the number of events.
*   **Rate:** $\lambda$ represents the average number of events in a *specific interval* (time or space). Ensure your $\lambda$ matches the interval you're considering.
*   **Rare Events:** Often used to model rare events where the probability of success in a binomial distribution is very small.
*   **Independence:** Assumes events occur independently of each other.
*   **Mean and Variance:** Both are equal to $\lambda$.
*   **Relationship with Binomial:** Poisson is an approximation to the Binomial distribution when $n$ is large and $p$ is small, with $\lambda \approx np$.
*   **Relationship with Exponential:** The time between Poisson events follows an Exponential distribution.

---

### 8. Practice Questions and Exercises

**Question 1:**
A telecommunications network experiences an average of 10 network failures per month. Assuming the number of failures follows a Poisson distribution, what is the probability that there will be exactly 5 failures in a given month?

**Question 2:**
The number of typos on a page of a book follows a Poisson distribution with an average of 0.5 typos per page. What is the probability that a randomly selected page has no typos? What is the probability that it has at least one typo?

**Question 3:**
A component in an electronic circuit is expected to fail on average once every 1000 operating hours. If the component failures are modeled by a Poisson process, what is the probability that it will operate for 500 hours without failure? What is the probability it will fail within the first 200 hours of operation?

**Question 4:**
Given that $X$ is a Poisson random variable with mean 3, find:
a) $P(X=0)$
b) $P(X=1)$
c) $P(X \ge 2)$

---

### 9. Answers to Practice Questions

**Answer 1:**
Here, $\lambda = 10$ (average failures per month) and we want to find $P(X=5)$.
$P(X=5) = \frac{e^{-10} 10^5}{5!} = \frac{e^{-10} \times 100000}{120} \approx \frac{0.0000454 \times 100000}{120} \approx \frac{4.54}{120} \approx 0.0378$

**Answer 2:**
Here, $\lambda = 0.5$ typos per page.
*   Probability of no typos ($k=0$):
    $P(X=0) = \frac{e^{-0.5} (0.5)^0}{0!} = e^{-0.5} \approx 0.6065$
*   Probability of at least one typo:
    $P(X \ge 1) = 1 - P(X=0) = 1 - 0.6065 = 0.3935$

**Answer 3:**
The rate of failure is $\lambda = 1/1000$ failures per hour.
*   Probability of operating for 500 hours without failure:
    This is equivalent to having 0 failures in 500 hours. The parameter for this interval is $\lambda t = (1/1000) \times 500 = 0.5$.
    $P(N(500) = 0) = \frac{e^{-0.5} (0.5)^0}{0!} = e^{-0.5} \approx 0.6065$
*   Probability of failing within the first 200 hours:
    This is equivalent to having at least 1 failure in 200 hours. The parameter for this interval is $\lambda t = (1/1000) \times 200 = 0.2$.
    $P(N(200) \ge 1) = 1 - P(N(200) = 0)$
    $P(N(200) = 0) = \frac{e^{-0.2} (0.2)^0}{0!} = e^{-0.2} \approx 0.8187$
    $P(N(200) \ge 1) = 1 - 0.8187 = 0.1813$

**Answer 4:**
Given $X \sim Poisson(\lambda=3)$.
a) $P(X=0) = \frac{e^{-3} 3^0}{0!} = e^{-3} \approx 0.0498$
b) $P(X=1) = \frac{e^{-3} 3^1}{1!} = 3e^{-3} \approx 3 \times 0.0498 = 0.1494$
c) $P(X \ge 2) = 1 - P(X < 2) = 1 - [P(X=0) + P(X=1)]$
   $P(X \ge 2) = 1 - [0.0498 + 0.1494] = 1 - 0.1992 = 0.8008$

---

This concludes the study notes for the Poisson distribution within Module 1: Random Variables for Mathematics for Electrical Science – 4. Remember to consult the provided textbooks for deeper explanations and additional examples.
