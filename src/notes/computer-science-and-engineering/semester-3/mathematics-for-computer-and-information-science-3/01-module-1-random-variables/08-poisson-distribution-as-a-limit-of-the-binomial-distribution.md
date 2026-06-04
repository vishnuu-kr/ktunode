---
title: "Poisson distribution as a limit of the binomial distribution"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 1: Random variables"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab45"
status: "completed"
scrapedAt: "2026-05-20T16:25:54.894Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3

## Module 1: Random Variables

### Topic: Poisson Distribution as a Limit of the Binomial Distribution

**Learning Outcomes:**

*   Understand the concept of the Poisson distribution.
*   Understand when the Poisson distribution can be used as an approximation to the binomial distribution.
*   Apply the formula for the Poisson distribution.
*   Calculate probabilities using the Poisson distribution.
*   Recognize the relationship between the binomial and Poisson distributions under specific conditions.
*   Solve problems related to the Poisson distribution, especially in scenarios where it approximates the binomial distribution.

---

**1. Introduction to the Poisson Distribution**

*   **Definition:** The Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space if these events occur with a known constant mean rate and independently of the time since the last event.

*   **Key Characteristics:**
    *   The events occur randomly and independently.
    *   The average rate (λ - lambda) of events is constant.
    *   The probability of an event occurring is proportional to the length of the interval.
    *   Events are rare compared to the possible opportunities for them to occur.

*   **Probability Mass Function (PMF):** The probability of observing *k* events in the interval is given by:

    P(X = k) = (e<sup>-λ</sup> * λ<sup>k</sup>) / k!

    where:
    *   X is the random variable representing the number of events.
    *   k is the number of events (k = 0, 1, 2, ...).
    *   λ (lambda) is the average rate of events.  This is also the mean and variance of the Poisson distribution (λ = E[X] = Var[X]).
    *   e is Euler's number (approximately 2.71828).
    *   k! is the factorial of k.

**2. Deriving the Poisson Distribution as a Limit of the Binomial Distribution**

*   **Recall Binomial Distribution:** The binomial distribution describes the probability of *k* successes in *n* independent trials, each with a probability of success *p*. Its PMF is:

    P(X = k) = (n choose k) * p<sup>k</sup> * (1 - p)<sup>(n - k)</sup>

    where (n choose k) = n! / (k! * (n - k)!)

*   **Conditions for Approximation:** The Poisson distribution can be used to approximate the binomial distribution when:
    *   *n* is large (n ≥ 20 or even larger, some suggest n>50 or n>100).
    *   *p* is small (p ≤ 0.05, or even smaller, some suggest p<0.1).
    *   *n* * p* = λ is a moderate value (usually λ < 10).

*   **Derivation Intuition:**  When *n* is large and *p* is small, each trial has a very small chance of success, but there are many trials. The average number of successes, *n* * p*, remains a manageable value (λ).

*   **Mathematical Derivation (Outline):**
    1.  Start with the binomial PMF:  P(X = k) = (n choose k) * p<sup>k</sup> * (1 - p)<sup>(n - k)</sup>
    2.  Substitute p = λ/n (since λ = n * p).
    3.  Take the limit as n approaches infinity:  lim (n→∞) P(X = k).
    4.  Use calculus and algebraic manipulations to show that this limit converges to the Poisson PMF: P(X = k) = (e<sup>-λ</sup> * λ<sup>k</sup>) / k!

*   **Key Substitution:**  p = λ/n  or λ = n*p.  This is crucial.

**3. Applying the Poisson Distribution as an Approximation**

*   **Example 1: Defective Items**
    *   A factory produces 1000 light bulbs. The probability that a bulb is defective is 0.002. What is the probability that there are exactly 3 defective bulbs in a batch?

    *   **Binomial Approach (for Comparison):**
        *   n = 1000
        *   p = 0.002
        *   k = 3
        *   P(X = 3) = (1000 choose 3) * (0.002)<sup>3</sup> * (0.998)<sup>997</sup>  ≈ 0.1804

    *   **Poisson Approximation:**
        *   n = 1000
        *   p = 0.002
        *   λ = n * p = 1000 * 0.002 = 2
        *   k = 3
        *   P(X = 3) = (e<sup>-2</sup> * 2<sup>3</sup>) / 3! = (e<sup>-2</sup> * 8) / 6 ≈ 0.1804

    *   **Observation:** The Poisson approximation yields a result very close to the binomial calculation.  Using Poisson simplifies calculation considerably in this case.

*   **Example 2: Website Visitors**
    *   A website receives an average of 5 visitors per minute. Assuming the number of visitors follows a Poisson distribution, what is the probability that the website receives exactly 8 visitors in a minute?

    *   λ = 5 (average rate of visitors per minute)
    *   k = 8 (number of visitors)
    *   P(X = 8) = (e<sup>-5</sup> * 5<sup>8</sup>) / 8! ≈ 0.0653

*   **Example 3: Telephone Calls**
    *   Suppose that on average, 8 customers per hour come to the checkout stand of a supermarket. Find the probability that no customer comes to the checkout stand in a given hour.

    *   λ = 8 (average rate of customers per hour)
    *   k = 0 (no customers)
    *   P(X = 0) = (e<sup>-8</sup> * 8<sup>0</sup>) / 0! = e<sup>-8</sup> ≈ 0.000335

**4. Important Points to Remember**

*   The Poisson distribution is useful for modeling rare events occurring in a large number of trials or over a long period.
*   The mean and variance of a Poisson distribution are both equal to λ.
*   The Poisson approximation works best when *n* is large, *p* is small, and λ = n*p is moderate.
*   Always check if the conditions for approximation are reasonably met before using the Poisson distribution in place of the binomial.
*   Understanding the relationship between the binomial and Poisson distributions helps choose the appropriate distribution for a given problem.

**5. Practice Questions & Exercises**

1.  **Flaws in Fabric:** A roll of fabric contains 200 meters. The average number of flaws per meter is 0.01.  Using the Poisson approximation, what is the probability that the roll has exactly 3 flaws? Compare this to what you'd expect using a Binomial distribution calculation.
    *   **Answer:**
        *   n = 200
        *   p = 0.01
        *   λ = n * p = 200 * 0.01 = 2
        *   k = 3
        *   P(X = 3) = (e<sup>-2</sup> * 2<sup>3</sup>) / 3! = (e<sup>-2</sup> * 8) / 6 ≈ 0.1804

        *  **Binomial (approximately)**: P(X=3) = (200 choose 3) * 0.01^3 * 0.99^197 ≈ 0.1813

2.  **Typographical Errors:** A book has 500 pages. The average number of typographical errors per page is 0.02. What is the probability that a randomly selected page contains no errors?
    *   **Answer:**
        *   n = 500
        *   p = 0.02
        *   λ = n * p = 500 * 0.02 = 10
        *   k = 0
        *   P(X = 0) = (e<sup>-10</sup> * 10<sup>0</sup>) / 0! = e<sup>-10</sup> ≈ 0.000045

3.  **Phone Calls at a Help Desk:** On average, a technical support help desk receives 3 calls per hour. What is the probability that they will receive at least 5 calls in a given hour?  (Hint: Calculate P(X < 5) and subtract from 1.)
    *   **Answer:**
        *   λ = 3
        *   P(X ≥ 5) = 1 - P(X < 5) = 1 - [P(X = 0) + P(X = 1) + P(X = 2) + P(X = 3) + P(X = 4)]
        *   P(X = 0) = e<sup>-3</sup> ≈ 0.0498
        *   P(X = 1) = (e<sup>-3</sup> * 3) / 1! ≈ 0.1494
        *   P(X = 2) = (e<sup>-3</sup> * 3<sup>2</sup>) / 2! ≈ 0.2240
        *   P(X = 3) = (e<sup>-3</sup> * 3<sup>3</sup>) / 3! ≈ 0.2240
        *   P(X = 4) = (e<sup>-3</sup> * 3<sup>4</sup>) / 4! ≈ 0.1680
        *   P(X < 5) ≈ 0.0498 + 0.1494 + 0.2240 + 0.2240 + 0.1680 ≈ 0.8152
        *   P(X ≥ 5) = 1 - 0.8152 ≈ 0.1848

4. A certain type of computer component has a probability of 0.001 of failing during a 4-hour period. If 2000 components are in use, approximate the probability that more than two components fail during that time.

    * **Answer:**
        * n = 2000
        * p = 0.001
        * lambda = n * p = 2000 * 0.001 = 2
        * P(X > 2) = 1 - P(X <= 2) = 1 - [P(X=0) + P(X=1) + P(X=2)]
        * P(X=0) = e^-2 * 2^0 / 0! = e^-2 ≈ 0.1353
        * P(X=1) = e^-2 * 2^1 / 1! = 2e^-2 ≈ 0.2707
        * P(X=2) = e^-2 * 2^2 / 2! = 2e^-2 ≈ 0.2707
        * P(X <= 2) = 0.1353 + 0.2707 + 0.2707 ≈ 0.6767
        * P(X > 2) = 1 - 0.6767 ≈ 0.3233

**6. Further Exploration**

*   Investigate applications of the Poisson distribution in fields like queuing theory, telecommunications, and epidemiology.
*   Explore the use of statistical software or libraries (e.g., R, Python's `scipy.stats`) to calculate Poisson probabilities.
*   Research other discrete probability distributions, such as the geometric and negative binomial distributions, and their relationships to the Poisson distribution.
