---
title: "Poisson distribution"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810921"
status: "completed"
scrapedAt: "2026-05-20T18:45:56.193Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Poisson Distribution

---

### 1. Introduction to Poisson Distribution

The Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space if these events occur with a known constant mean rate and independently of the time since the last event. It's particularly useful in physical sciences for modeling rare events.

**Key Idea:** The Poisson distribution models the number of occurrences of an event in a fixed interval (time, space, volume, etc.) when the average rate of occurrence is known and events are independent.

---

### 2. Learning Outcomes Covered:

*   **Understand the conditions under which the Poisson distribution is applicable.**
*   **Know the probability mass function (PMF) of the Poisson distribution and be able to calculate probabilities using it.**
*   **Understand the mean and variance of the Poisson distribution.**
*   **Be able to approximate the binomial distribution using the Poisson distribution.**
*   **Apply the Poisson distribution to solve problems in physical sciences.**

---

### 3. Conditions for Poisson Distribution Applicability

The Poisson distribution is appropriate when the following conditions are met:

*   **Events occur one at a time:** There's no possibility of two events occurring simultaneously in the given interval.
*   **The rate of events is constant:** The average number of events in any interval of a given size is the same.
*   **Events are independent:** The occurrence of one event does not affect the probability of another event occurring.
*   **The probability of an event occurring in a very small interval is proportional to the length of the interval:** For infinitesimal intervals, the probability of more than one event is negligible.

---

### 4. The Poisson Probability Mass Function (PMF)

Let $X$ be a random variable representing the number of events occurring in a fixed interval. If $X$ follows a Poisson distribution, its PMF is given by:

$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$$

Where:
*   $P(X = k)$: The probability of exactly $k$ events occurring.
*   $k$: The number of events (a non-negative integer: $k = 0, 1, 2, \dots$).
*   $\lambda$ (lambda): The average number of events in the given interval (also known as the rate parameter). It's a positive real number ($\lambda > 0$).
*   $e$: The base of the natural logarithm, approximately $2.71828$.
*   $k!$: The factorial of $k$ ($k! = k \times (k-1) \times \dots \times 2 \times 1$, and $0! = 1$).

---

### 5. Mean and Variance of the Poisson Distribution

For a Poisson distribution with parameter $\lambda$:

*   **Mean (Expected Value):** $E(X) = \mu = \lambda$
*   **Variance:** $Var(X) = \sigma^2 = \lambda$

**Important Point:** In a Poisson distribution, the mean and the variance are equal. This is a distinguishing characteristic.

---

### 6. Examples of Poisson Distribution in Physical Sciences

*   **Radioactive Decay:** The number of radioactive atoms that decay in a fixed time interval.
*   **Particle Detection:** The number of particles detected by a sensor in a given time period.
*   **Cosmic Rays:** The number of cosmic ray showers detected per unit area per unit time.
*   **Quantum Optics:** The number of photons emitted by a source in a specific time interval.
*   **Faults in Materials:** The number of defects or impurities found in a specific volume or surface area of a material.
*   **Customer Arrivals (less physical, but often used as an analogy):** The number of customers arriving at a service point in a given hour.

---

### 7. Calculating Probabilities Using the Poisson PMF

**Example 1:**
Suppose a Geiger counter detects an average of 3 radioactive decays per minute. What is the probability that in a given minute, it detects exactly 2 decays?

*   **Identify the parameters:**
    *   The average rate $\lambda = 3$ decays per minute.
    *   We want to find the probability of $k = 2$ decays.
*   **Apply the PMF:**
    $P(X = 2) = \frac{e^{-3} 3^2}{2!} = \frac{e^{-3} \times 9}{2} = 4.5 \times e^{-3}$
*   **Calculate:** Using a calculator, $e^{-3} \approx 0.049787$.
    $P(X = 2) \approx 4.5 \times 0.049787 \approx 0.2240$

So, the probability of detecting exactly 2 decays in a given minute is approximately 0.2240.

**Example 2:**
A telecommunication switchboard receives an average of 5 calls per hour. What is the probability that in a particular hour, it receives more than 3 calls?

*   **Identify the parameters:** $\lambda = 5$ calls per hour.
*   We want to find $P(X > 3)$.
*   It's easier to calculate the complement: $P(X > 3) = 1 - P(X \le 3) = 1 - [P(X=0) + P(X=1) + P(X=2) + P(X=3)]$.
*   **Calculate individual probabilities:**
    *   $P(X=0) = \frac{e^{-5} 5^0}{0!} = e^{-5}$
    *   $P(X=1) = \frac{e^{-5} 5^1}{1!} = 5e^{-5}$
    *   $P(X=2) = \frac{e^{-5} 5^2}{2!} = \frac{25}{2}e^{-5} = 12.5e^{-5}$
    *   $P(X=3) = \frac{e^{-5} 5^3}{3!} = \frac{125}{6}e^{-5} \approx 20.833e^{-5}$
*   **Sum them up:**
    $P(X \le 3) = e^{-5}(1 + 5 + 12.5 + 20.833) = e^{-5}(39.333)$
    Using $e^{-5} \approx 0.006738$:
    $P(X \le 3) \approx 0.006738 \times 39.333 \approx 0.2650$
*   **Calculate the final probability:**
    $P(X > 3) = 1 - P(X \le 3) \approx 1 - 0.2650 = 0.7350$

So, the probability of receiving more than 3 calls in a particular hour is approximately 0.7350.

---

### 8. Poisson Approximation to the Binomial Distribution

The Poisson distribution can be used to approximate the binomial distribution when:

*   The number of trials ($n$) is very large.
*   The probability of success ($p$) in each trial is very small.
*   The product $\lambda = np$ is moderate (not too large or too small).

**Rule of Thumb:**
*   $n \ge 20$
*   $p \le 0.05$
*   $np \le 5$ (some sources suggest up to 10, but smaller values are better approximations)

If $X \sim Binomial(n, p)$, then for large $n$ and small $p$, $X \approx Poisson(\lambda)$, where $\lambda = np$.

**Example 3:**
A semiconductor manufacturer produces microchips. On average, 1 in 1000 microchips produced is defective. If a batch of 500 microchips is produced, what is the probability that exactly 2 microchips are defective?

*   **Binomial Approach (exact):**
    *   $n = 500$ (number of trials)
    *   $p = 1/1000 = 0.001$ (probability of a defective chip)
    *   $k = 2$ (number of defective chips)
    *   $P(X = 2) = \binom{500}{2} (0.001)^2 (1 - 0.001)^{500-2}$
    *   $\binom{500}{2} = \frac{500 \times 499}{2} = 124750$
    *   $P(X = 2) = 124750 \times (0.000001) \times (0.999)^{498}$
    *   $P(X = 2) \approx 124750 \times 0.000001 \times 0.60647 \approx 0.0756$

*   **Poisson Approximation:**
    *   Check conditions: $n=500$ (large), $p=0.001$ (small), $np = 500 \times 0.001 = 0.5$ (moderate). The approximation is suitable.
    *   $\lambda = np = 0.5$
    *   We want $P(X = 2)$ using the Poisson PMF with $\lambda = 0.5$.
    *   $P(X = 2) = \frac{e^{-0.5} (0.5)^2}{2!} = \frac{e^{-0.5} \times 0.25}{2} = 0.125 \times e^{-0.5}$
    *   Using $e^{-0.5} \approx 0.60653$:
    *   $P(X = 2) \approx 0.125 \times 0.60653 \approx 0.0758$

The Poisson approximation gives a very close result to the exact binomial calculation, demonstrating its utility.

---

### 9. Practice Questions

**Question 1:**
The average number of traffic accidents at a certain intersection per week is 3. What is the probability that there will be exactly 5 accidents in a week?

**Question 2:**
A book has an average of 2 typos per 10 pages. If you pick a chapter of 50 pages, what is the probability that it contains exactly 3 typos?

**Question 3:**
In a certain manufacturing process, the probability of a particular component failing is 0.002. If 1000 components are used in a large assembly, what is the probability that exactly 1 component fails? Use the Poisson approximation.

**Question 4:**
The number of emails received by a researcher per hour follows a Poisson distribution with a mean of 10.
a) What is the probability of receiving exactly 8 emails in an hour?
b) What is the probability of receiving at least 12 emails in an hour?

---

### 10. Answers to Practice Questions

**Answer 1:**
*   $\lambda = 3$ accidents per week.
*   $k = 5$ accidents.
*   $P(X = 5) = \frac{e^{-3} 3^5}{5!} = \frac{e^{-3} \times 243}{120} = 2.025 \times e^{-3}$
*   $P(X = 5) \approx 2.025 \times 0.049787 \approx 0.1008$

**Answer 2:**
*   First, find the average rate per page: $\lambda_{page} = 2 \text{ typos} / 10 \text{ pages} = 0.2 \text{ typos per page}$.
*   For a 50-page chapter, the average number of typos is $\lambda = 0.2 \text{ typos/page} \times 50 \text{ pages} = 10$ typos.
*   We want to find the probability of $k = 3$ typos.
*   $P(X = 3) = \frac{e^{-10} 10^3}{3!} = \frac{e^{-10} \times 1000}{6} = \frac{500}{3} \times e^{-10}$
*   $P(X = 3) \approx 166.67 \times 0.0000454 \approx 0.007567$

**Answer 3:**
*   This is a binomial problem that can be approximated by Poisson.
*   $n = 1000$, $p = 0.002$.
*   $\lambda = np = 1000 \times 0.002 = 2$.
*   We want to find $P(X = 1)$ using the Poisson distribution with $\lambda = 2$.
*   $P(X = 1) = \frac{e^{-2} 2^1}{1!} = 2e^{-2}$
*   $P(X = 1) \approx 2 \times 0.135335 \approx 0.2707$

**Answer 4:**
*   $\lambda = 10$ emails per hour.
*   a) Probability of exactly 8 emails:
    *   $P(X = 8) = \frac{e^{-10} 10^8}{8!} = \frac{e^{-10} \times 100,000,000}{40320} \approx 2480.16 \times e^{-10}$
    *   $P(X = 8) \approx 2480.16 \times 0.0000454 \approx 0.1126$
*   b) Probability of at least 12 emails:
    *   $P(X \ge 12) = 1 - P(X \le 11)$
    *   $P(X \le 11) = P(X=0) + P(X=1) + \dots + P(X=11)$
    *   This requires summing many terms. Using statistical tables or software, $P(X \le 11) \approx 0.6968$.
    *   $P(X \ge 12) = 1 - P(X \le 11) \approx 1 - 0.6968 = 0.3032$

---

### 11. Important Points to Remember

*   **Discrete Distribution:** The Poisson distribution deals with counts of events, so the random variable is discrete.
*   **Parameter $\lambda$:** This single parameter dictates the entire distribution. It represents the average rate of events in the specified interval.
*   **Mean = Variance:** $E(X) = Var(X) = \lambda$. This is a unique characteristic of the Poisson distribution.
*   **Approximation Power:** The Poisson distribution is a powerful tool for approximating the binomial distribution when $n$ is large and $p$ is small.
*   **Interpreting $\lambda$:** Ensure $\lambda$ is for the correct interval. If the rate is given per hour, and you need to calculate for a day, multiply $\lambda$ by 24.
*   **Rare Events:** It's particularly suited for modeling rare events occurring over time or space.

---
