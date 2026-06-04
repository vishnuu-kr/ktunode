---
title: "Uniform, Normal and  Exponential distributions"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab4f"
status: "completed"
scrapedAt: "2026-05-20T16:26:01.339Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 2: Continuous Random Variables and Their Probability Distributions
### Topic: Uniform, Normal, and Exponential Distributions

**Learning Outcomes:**

*   Understand the properties of continuous random variables.
*   Define and apply the concepts of Probability Density Function (PDF) and Cumulative Distribution Function (CDF).
*   Understand and apply the uniform distribution.
*   Understand and apply the normal distribution (including standardization).
*   Understand and apply the exponential distribution.
*   Calculate probabilities and expected values for each distribution.
*   Apply these distributions to solve problems in computer and information science.

---

**1. Continuous Random Variables and Their Probability Distributions**

*   **Definition:** A continuous random variable is a variable whose value can take on any value within a given range. Unlike discrete random variables, which can only take on specific, separate values, continuous variables can take on infinitely many values between any two given values.

*   **Examples:** Height, weight, temperature, time, CPU processing time.

*   **Probability Density Function (PDF):**  A function, denoted by f(x), that describes the relative likelihood of a continuous random variable taking on a specific value.

    *   `f(x) >= 0` for all x.
    *   The total area under the curve of f(x) is equal to 1 (i.e.,  `∫ f(x) dx = 1` over the entire range of x).  This reflects that the probability of the variable taking *some* value is 1.
    *   `P(a ≤ X ≤ b) = ∫[a to b] f(x) dx`.  The probability of X falling between a and b is the area under the PDF curve between a and b.
    *   `P(X = a) = 0` for any specific value 'a'.  The probability that a continuous random variable takes on *exactly* a specific value is zero. This is because the probability is represented by the area under the curve, and the area of a single point is zero.

*   **Cumulative Distribution Function (CDF):** A function, denoted by F(x), that gives the probability that a continuous random variable X is less than or equal to a specific value x.

    *   `F(x) = P(X ≤ x) = ∫[-∞ to x] f(t) dt`
    *   `0 ≤ F(x) ≤ 1`
    *   F(x) is a non-decreasing function.
    *   `P(a ≤ X ≤ b) = F(b) - F(a)`

---

**2. Uniform Distribution**

*   **Definition:** A uniform distribution describes a situation where all values within a specified range are equally likely.

*   **Parameters:**  'a' (minimum value) and 'b' (maximum value), where a < b.

*   **PDF:**

    *   `f(x) = 1 / (b - a)`  for `a ≤ x ≤ b`
    *   `f(x) = 0` otherwise

*   **CDF:**

    *   `F(x) = 0` for `x < a`
    *   `F(x) = (x - a) / (b - a)` for `a ≤ x ≤ b`
    *   `F(x) = 1` for `x > b`

*   **Mean (Expected Value):** `E(X) = (a + b) / 2`

*   **Variance:** `Var(X) = (b - a)^2 / 12`

*   **Example:**  Consider a random number generator that produces numbers between 0 and 1, where each number is equally likely.  This is a uniform distribution with a = 0 and b = 1.

*   **Application in Computer Science:**  Modeling situations where all outcomes are equally probable within a defined range, such as in simulations or random number generation.

*   **Example:** A network server assigns a time slot between 10:00 am and 10:30 am (30 minutes) uniformly at random. What is the probability that a request will be assigned a time slot before 10:10 am?

    *   Here a = 0 (10:00 am), b = 30 (10:30 am).
    *   We want to find P(X ≤ 10), which is the probability that the time slot is assigned before 10:10 am (10 minutes after 10:00 am).
    *   `P(X ≤ 10) = F(10) = (10 - 0) / (30 - 0) = 10/30 = 1/3`

---

**3. Normal Distribution (Gaussian Distribution)**

*   **Definition:** The most important continuous probability distribution.  It is symmetrical and bell-shaped.  Many natural phenomena and aggregated data tend to follow a normal distribution due to the Central Limit Theorem.

*   **Parameters:** 'μ' (mean) and 'σ' (standard deviation), where σ > 0.

*   **PDF:**

    *   `f(x) = (1 / (σ√(2π))) * e^(-(x - μ)^2 / (2σ^2))` for all real x.

*   **CDF:**  The CDF of the normal distribution does not have a closed-form expression and is typically calculated using numerical methods or statistical tables (Z-tables).

*   **Properties:**

    *   Symmetrical around the mean μ.
    *   The mean, median, and mode are all equal to μ.
    *   Approximately 68% of the data falls within one standard deviation of the mean (μ ± σ).
    *   Approximately 95% of the data falls within two standard deviations of the mean (μ ± 2σ).
    *   Approximately 99.7% of the data falls within three standard deviations of the mean (μ ± 3σ).  This is sometimes called the "empirical rule" or the "68-95-99.7 rule".

*   **Standard Normal Distribution:**  A normal distribution with mean μ = 0 and standard deviation σ = 1. It is denoted by Z ~ N(0, 1).

*   **Standardization (Z-score):**  The process of transforming a normal random variable X with mean μ and standard deviation σ into a standard normal random variable Z.  This allows us to use standard normal tables (Z-tables) to calculate probabilities.

    *   `Z = (X - μ) / σ`

*   **Using Z-tables:** Z-tables provide the probability that a standard normal random variable is less than or equal to a given Z-score (i.e., P(Z ≤ z)).  To find probabilities for other scenarios:

    *   `P(Z > z) = 1 - P(Z ≤ z)`
    *   `P(a ≤ Z ≤ b) = P(Z ≤ b) - P(Z ≤ a)`

*   **Application in Computer Science:**

    *   Modeling network traffic.
    *   Error analysis in algorithms.
    *   Performance evaluation of systems.
    *   Machine learning (e.g., as a prior distribution in Bayesian inference).

*   **Example:** The processing time of a certain task on a server follows a normal distribution with a mean of 5 seconds and a standard deviation of 1 second. What is the probability that the task will take less than 6 seconds?

    *   μ = 5, σ = 1, X = 6
    *   `Z = (X - μ) / σ = (6 - 5) / 1 = 1`
    *   We want to find `P(X ≤ 6) = P(Z ≤ 1)`.  Look up Z = 1 in a standard normal table (Z-table).
    *   `P(Z ≤ 1) ≈ 0.8413`
    *   Therefore, the probability that the task will take less than 6 seconds is approximately 0.8413 or 84.13%.

---

**4. Exponential Distribution**

*   **Definition:**  Describes the time until an event occurs in a Poisson process (a process where events occur randomly and independently at a constant average rate).  It is memoryless, meaning that the probability of the event occurring in the future is independent of how much time has already passed.

*   **Parameter:** 'λ' (lambda), the rate parameter.  λ > 0. It represents the average number of events per unit of time.

*   **PDF:**

    *   `f(x) = λe^(-λx)` for `x ≥ 0`
    *   `f(x) = 0` for `x < 0`

*   **CDF:**

    *   `F(x) = 1 - e^(-λx)` for `x ≥ 0`
    *   `F(x) = 0` for `x < 0`

*   **Mean (Expected Value):** `E(X) = 1 / λ`

*   **Variance:** `Var(X) = 1 / λ^2`

*   **Memoryless Property:** `P(X > s + t | X > s) = P(X > t)` for all s, t ≥ 0.  This means that if the event has not occurred by time 's', the probability of it occurring after an additional time 't' is the same as the probability of it occurring after time 't' from the beginning.

*   **Application in Computer Science:**

    *   Modeling the time between server failures.
    *   Modeling the time between arrivals of packets in a network.
    *   Modeling the lifetime of a device.
    *   Queueing theory.

*   **Example:** The average time between server crashes is 50 hours. Assuming an exponential distribution, what is the probability that the server will crash within the next 24 hours?

    *   `λ = 1 / 50` (crashes per hour)
    *   We want to find `P(X ≤ 24)`.
    *   `P(X ≤ 24) = F(24) = 1 - e^(-(1/50)*24) = 1 - e^(-0.48) ≈ 1 - 0.6188 = 0.3812`
    *   Therefore, the probability that the server will crash within the next 24 hours is approximately 0.3812 or 38.12%.

---

**5. Practice Questions/Exercises**

1.  **Uniform Distribution:** A random number is generated uniformly between 10 and 20. What is the probability that the number is greater than 15?

    *   **Answer:** `P(X > 15) = (20 - 15) / (20 - 10) = 5 / 10 = 0.5`

2.  **Normal Distribution:** The scores on a test are normally distributed with a mean of 75 and a standard deviation of 8. What percentage of students scored above 85?

    *   **Answer:** `Z = (85 - 75) / 8 = 1.25`.  `P(Z > 1.25) = 1 - P(Z ≤ 1.25)`.  From a Z-table, `P(Z ≤ 1.25) ≈ 0.8944`. Therefore, `P(Z > 1.25) ≈ 1 - 0.8944 = 0.1056`, or 10.56%.

3.  **Exponential Distribution:** The average time to failure for a hard drive is 3 years. Assuming an exponential distribution, what is the probability that the hard drive will fail within the first year?

    *   **Answer:** `λ = 1 / 3`.  `P(X ≤ 1) = 1 - e^(-(1/3)*1) = 1 - e^(-1/3) ≈ 1 - 0.7165 = 0.2835`, or 28.35%.

4.  **Normal Distribution & Standardization:** A certain computer process is known to take, on average, 10 seconds with a standard deviation of 2 seconds. Assuming a normal distribution, what is the probability that a given process will take between 8 and 12 seconds?

    *   **Answer:** `μ = 10, σ = 2`.
    *   `Z1 = (8 - 10) / 2 = -1`
    *   `Z2 = (12 - 10) / 2 = 1`
    *   `P(8 ≤ X ≤ 12) = P(-1 ≤ Z ≤ 1) = P(Z ≤ 1) - P(Z ≤ -1)`
    *   From Z-table: `P(Z ≤ 1) = 0.8413` and `P(Z ≤ -1) = 0.1587`
    *   `P(-1 ≤ Z ≤ 1) = 0.8413 - 0.1587 = 0.6826`
    *   Therefore, the probability is approximately 68.26%.

---

**6. Important Points to Remember**

*   **PDF vs. CDF:** Understand the difference. The PDF gives the *likelihood* of a specific value, while the CDF gives the *probability* of being less than or equal to a value.
*   **Area Under the Curve:** Remember that the total area under a PDF curve must equal 1.
*   **Normal Distribution:** The normal distribution is central to many statistical concepts. Be familiar with its properties and how to use Z-tables.
*   **Exponential Distribution & Memorylessness:** The memoryless property is crucial for understanding the behavior of systems modeled by the exponential distribution.
*   **Units:** Always pay attention to the units of the parameters (λ for exponential, μ and σ for normal) to ensure consistent calculations.
*   **Applications:** Think about how these distributions can be applied to model real-world phenomena in computer science.

This detailed study guide provides a comprehensive overview of the Uniform, Normal, and Exponential distributions, including definitions, properties, formulas, examples, and practice exercises. Good luck!
