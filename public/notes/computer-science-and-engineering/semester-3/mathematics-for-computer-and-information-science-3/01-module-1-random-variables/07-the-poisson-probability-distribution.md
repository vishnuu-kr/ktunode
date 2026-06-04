---
title: "the Poisson probability distribution"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 1: Random variables"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab44"
status: "completed"
scrapedAt: "2026-05-20T16:25:54.183Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 1: Random Variables
### Topic: The Poisson Probability Distribution

**Learning Outcomes:**

*   Understand the definition of a Poisson random variable.
*   Calculate Poisson probabilities.
*   Apply the Poisson distribution to model real-world phenomena.
*   Calculate the mean and variance of a Poisson distribution.
*   Recognize the relationship between the Poisson and Binomial distributions.

**1. Introduction to the Poisson Distribution**

*   **Definition:** The Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a *fixed interval of time or space* if these events occur with a known average rate and independently of the time since the last event.

*   **Key Characteristics:**
    *   Events are random and independent.  The occurrence of one event does not affect the probability of another event.
    *   The average rate (λ) of events occurring is constant over the interval.
    *   Events can occur alone or in combination with other events.
    *   Used to model rare events (but not exclusively).

*   **Notation:** A random variable X follows a Poisson distribution with parameter λ if:  X ~ Poisson(λ)

**2. The Poisson Probability Mass Function (PMF)**

*   **Formula:** The probability of observing *k* events in an interval when the average rate is *λ* is given by:

    ```
    P(X = k) = (e^(-λ) * λ^k) / k!
    ```

    Where:
    *   P(X = k) is the probability of observing *k* events.
    *   λ (lambda) is the average rate of events (also the mean of the distribution).
    *   k is the number of events (k = 0, 1, 2, ...).
    *   e is Euler's number (approximately 2.71828).
    *   k! is the factorial of k (k! = k * (k-1) * (k-2) * ... * 2 * 1).

**3.  Calculating Poisson Probabilities**

*   **Direct Application of the Formula:** Substitute the values of λ and k into the formula to calculate P(X = k).

*   **Cumulative Probabilities:**  Sometimes, you need to calculate the probability of observing *at most* k events, or *at least* k events. This requires summing individual probabilities.

    *   P(X ≤ k) = P(X = 0) + P(X = 1) + P(X = 2) + ... + P(X = k)
    *   P(X ≥ k) = 1 - P(X < k) = 1 - [P(X = 0) + P(X = 1) + ... + P(X = k-1)]

*   **Example 1:**  A website receives an average of 5 hits per minute.  What is the probability of receiving exactly 3 hits in a given minute?

    *   λ = 5
    *   k = 3
    *   P(X = 3) = (e^(-5) * 5^3) / 3! = (0.006738 * 125) / 6 ≈ 0.1404

    Therefore, the probability of receiving exactly 3 hits in a minute is approximately 0.1404 or 14.04%.

*   **Example 2:** A call center receives an average of 10 calls per hour. What is the probability of receiving at least 8 calls in an hour?

    * λ = 10
    * We want to find P(X ≥ 8) = 1 - P(X < 8) = 1 - [P(X = 0) + P(X = 1) + ... + P(X = 7)]

    Calculating each term:
        * P(X=0) = (e^-10 * 10^0) / 0! ≈ 0.000045
        * P(X=1) = (e^-10 * 10^1) / 1! ≈ 0.000454
        * P(X=2) = (e^-10 * 10^2) / 2! ≈ 0.002270
        * P(X=3) = (e^-10 * 10^3) / 3! ≈ 0.007567
        * P(X=4) = (e^-10 * 10^4) / 4! ≈ 0.018917
        * P(X=5) = (e^-10 * 10^5) / 5! ≈ 0.037833
        * P(X=6) = (e^-10 * 10^6) / 6! ≈ 0.063055
        * P(X=7) = (e^-10 * 10^7) / 7! ≈ 0.090079

    So, P(X < 8) ≈ 0.000045 + 0.000454 + 0.002270 + 0.007567 + 0.018917 + 0.037833 + 0.063055 + 0.090079 ≈ 0.2202

    Therefore, P(X ≥ 8) = 1 - P(X < 8) ≈ 1 - 0.2202 ≈ 0.7798

    The probability of receiving at least 8 calls in an hour is approximately 0.7798 or 77.98%.

**4. Applications of the Poisson Distribution**

*   **Modeling rare events:** Accidents, defects, server failures, etc.
*   **Queueing theory:** Number of customers arriving at a service point.
*   **Telecommunications:** Number of phone calls arriving at a switchboard.
*   **Biology:** Number of mutations in a DNA sequence.
*   **Finance:** Number of trades executed in a given time period.
*   **Network Traffic Analysis:** The number of packets arriving at a router within a specified time interval.

**5. Mean and Variance of the Poisson Distribution**

*   **Mean (μ):** The mean of a Poisson distribution is equal to its parameter λ.
    ```
    μ = E[X] = λ
    ```

*   **Variance (σ^2):** The variance of a Poisson distribution is also equal to its parameter λ.
    ```
    σ^2 = Var[X] = λ
    ```

*   **Standard Deviation (σ):** The standard deviation is the square root of the variance.
    ```
    σ = sqrt(Var[X]) = sqrt(λ)
    ```

*   **Example:** If a server experiences an average of 2 errors per day, then:
    *   Mean (λ) = 2
    *   Variance (λ) = 2
    *   Standard Deviation = sqrt(2) ≈ 1.414

**6. Relationship between Poisson and Binomial Distributions**

*   **Approximation:**  The Poisson distribution can be used as an approximation to the binomial distribution when:
    *   The number of trials (n) is large.
    *   The probability of success (p) in each trial is small.
    *   n*p (which is the expected number of successes) is a moderate value (usually less than 20).  This is the value that becomes λ in the Poisson approximation.

*   **Why this works:**  The Poisson distribution focuses on the *rate* of events, while the binomial focuses on the number of successes in a fixed number of trials. When the probability of success is very small and the number of trials is very large, the focus shifts from individual trials to the overall rate, making the Poisson a suitable approximation.

*   **Formula for Approximation:** If X ~ Binomial(n, p), and n is large, p is small, and λ = np, then:

    ```
    P(X = k) ≈ (e^(-λ) * λ^k) / k!
    ```

*   **Example:** Suppose 1% of items produced by a machine are defective.  If 1000 items are produced, what is the probability that exactly 5 are defective?

    *   Binomial: n = 1000, p = 0.01, k = 5
    *   Poisson: λ = np = 1000 * 0.01 = 10
    *   Using Poisson: P(X = 5) ≈ (e^(-10) * 10^5) / 5! ≈ 0.0378

    *   Using Binomial: P(X=5) = (1000 choose 5) * (0.01)^5 * (0.99)^995 ≈ 0.0381

    The Poisson approximation provides a very close result and is easier to calculate in this case.

**7. Important Points to Remember**

*   The Poisson distribution is a discrete distribution.
*   λ represents both the mean and the variance of the Poisson distribution.
*   The Poisson distribution is useful for modeling events that occur randomly and independently with a known average rate.
*   The Poisson distribution can be used to approximate the binomial distribution under certain conditions.
*   Remember to use the correct units for λ (average rate).  The time interval must match the interval for which you are calculating probabilities.

**8. Practice Questions/Exercises**

1.  **Traffic:** Cars pass a certain point on a highway at an average rate of 2 per minute.  Assume that the number of cars that pass the point follows a Poisson distribution.

    *   (a) What is the probability that no car passes the point in one minute?
    *   (b) What is the probability that at least one car passes the point in one minute?
    *   (c) What is the probability that exactly 3 cars pass the point in one minute?
    *   (d) What is the probability that more than 3 cars pass the point in one minute?

2.  **Defects:**  A machine produces an average of 3 defective items per hour. Assuming the number of defects follows a Poisson distribution, what is the probability that:

    *   (a) There are exactly 2 defective items in an hour?
    *   (b) There are at least 1 defective item in an hour?
    *   (c) There are no defective items in a two-hour period? (Hint: adjust λ for the two-hour period)

3.  **Approximation:** A company ships 1000 packages. The probability of a package getting lost is 0.001. What is the probability that exactly 2 packages will be lost?  Solve this both using the binomial distribution *and* the Poisson approximation, and compare the results.

**9. Answers to Practice Questions/Exercises**

1.  **Traffic:** λ = 2 cars per minute.

    *   (a) P(X = 0) = (e^(-2) * 2^0) / 0! ≈ 0.1353
    *   (b) P(X ≥ 1) = 1 - P(X = 0) ≈ 1 - 0.1353 ≈ 0.8647
    *   (c) P(X = 3) = (e^(-2) * 2^3) / 3! ≈ 0.1804
    *   (d) P(X > 3) = 1 - [P(X = 0) + P(X = 1) + P(X = 2) + P(X = 3)] ≈ 1 - (0.1353 + 0.2707 + 0.2707 + 0.1804) ≈ 0.1429

2.  **Defects:** λ = 3 defective items per hour.

    *   (a) P(X = 2) = (e^(-3) * 3^2) / 2! ≈ 0.2240
    *   (b) P(X ≥ 1) = 1 - P(X = 0) = 1 - (e^(-3) * 3^0) / 0! ≈ 1 - 0.0498 ≈ 0.9502
    *   (c) In a two-hour period, λ = 2 * 3 = 6.
        P(X = 0) = (e^(-6) * 6^0) / 0! ≈ 0.0025

3.  **Approximation:** n = 1000, p = 0.001, k = 2

    *   **Binomial:** P(X = 2) = (1000 choose 2) * (0.001)^2 * (0.999)^998 ≈ 0.1839
    *   **Poisson:** λ = np = 1000 * 0.001 = 1
        P(X = 2) = (e^(-1) * 1^2) / 2! ≈ 0.1839

    The results are extremely close, demonstrating the accuracy of the Poisson approximation when n is large and p is small.  In this example, either method provides a good result, but the Poisson approximation can often be faster to calculate, particularly without computational tools.
