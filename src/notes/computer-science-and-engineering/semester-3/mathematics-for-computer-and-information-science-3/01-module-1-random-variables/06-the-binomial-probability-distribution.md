---
title: "the Binomial probability distribution"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 1: Random variables"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab43"
status: "completed"
scrapedAt: "2026-05-20T16:25:53.465Z"
---
## Module 1: Random Variables - The Binomial Probability Distribution

**Subject:** MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
**Module:** Module 1: Random Variables
**Topic:** The Binomial Probability Distribution

**Learning Outcomes:**

*   Understand the definition and characteristics of a Bernoulli trial.
*   Define a binomial random variable.
*   Calculate binomial probabilities using the binomial probability formula.
*   Calculate the mean (expected value) and variance of a binomial distribution.
*   Apply the binomial distribution to solve real-world problems.

---

### 1. Bernoulli Trials

*   **Definition:** A Bernoulli trial is a random experiment that has only two possible outcomes, often labeled as "success" and "failure."

*   **Characteristics:**
    *   **Two Outcomes:** Each trial results in either success or failure.
    *   **Independence:** Trials are independent of each other.  The outcome of one trial does not influence the outcome of any other trial.
    *   **Constant Probability:** The probability of success (denoted by *p*) remains the same for each trial. The probability of failure (denoted by *q*) is 1 - *p*.

*   **Examples:**
    *   Flipping a coin:  Heads (success) or Tails (failure).
    *   Testing a component: Defective (failure) or Non-defective (success).
    *   A user clicking on an ad: Click (success) or No Click (failure).

*   **Notation:**
    *   *p*: Probability of success
    *   *q*: Probability of failure,  *q = 1 - p*

### 2. Binomial Random Variable

*   **Definition:** A binomial random variable *X* represents the number of successes in *n* independent Bernoulli trials, where each trial has the same probability of success, *p*.

*   **Conditions for a Binomial Experiment:**
    1.  The experiment consists of a fixed number of trials (n).
    2.  Each trial has only two possible outcomes: success or failure.
    3.  The trials are independent.
    4.  The probability of success (p) remains constant from trial to trial.

*   **Key Parameters:**
    *   *n*: Number of trials
    *   *p*: Probability of success on a single trial
    *   *X*: The binomial random variable representing the number of successes in *n* trials.  *X* can take on values 0, 1, 2, ..., *n*.

*   **Notation:** *X ~ Bin(n, p)*.  This indicates that *X* follows a binomial distribution with parameters *n* and *p*.

### 3. Binomial Probability Formula

*   **The Formula:** The probability of obtaining exactly *x* successes in *n* trials is given by the binomial probability mass function:

    ```
    P(X = x) = (nCx) * p^x * q^(n-x)
    ```

    Where:
    *   *nCx* is the binomial coefficient, read as "n choose x," and calculated as:

        ```
        nCx = n! / (x! * (n-x)!)
        ```

    *   *n!* (n factorial) is the product of all positive integers up to *n*:  n! = n * (n-1) * (n-2) * ... * 2 * 1
    *   *p* is the probability of success on a single trial.
    *   *q* is the probability of failure on a single trial (*q = 1 - p*).
    *   *x* is the number of successes we want to find the probability for.

*   **Explanation:**
    *   *nCx* represents the number of ways to choose *x* successes from *n* trials.
    *   *p^x* represents the probability of getting *x* successes.
    *   *q^(n-x)* represents the probability of getting *n-x* failures.

*   **Example:**  Suppose we flip a fair coin 5 times. What is the probability of getting exactly 3 heads?
    *   *n = 5* (number of trials)
    *   *p = 0.5* (probability of success - getting a head)
    *   *q = 0.5* (probability of failure - getting a tail)
    *   *x = 3* (number of successes we want)

    ```
    P(X = 3) = (5C3) * (0.5)^3 * (0.5)^(5-3)
             = (5! / (3! * 2!)) * (0.125) * (0.25)
             = (10) * (0.125) * (0.25)
             = 0.3125
    ```

    Therefore, the probability of getting exactly 3 heads in 5 coin flips is 0.3125.

### 4. Mean and Variance of a Binomial Distribution

*   **Mean (Expected Value):** The mean of a binomial distribution, denoted by μ (mu) or E(X), represents the average number of successes we would expect to see in *n* trials.

    ```
    μ = E(X) = n * p
    ```

*   **Variance:** The variance of a binomial distribution, denoted by σ² (sigma squared) or Var(X), measures the spread or variability of the distribution.

    ```
    σ² = Var(X) = n * p * q
    ```

*   **Standard Deviation:** The standard deviation, denoted by σ (sigma), is the square root of the variance and provides a measure of the typical deviation from the mean.

    ```
    σ = sqrt(Var(X)) = sqrt(n * p * q)
    ```

*   **Example:** A machine produces defective items with a probability of 0.05.  If we randomly select 100 items produced by the machine, what is the expected number of defective items and the standard deviation?

    *   *n = 100*
    *   *p = 0.05*
    *   *q = 1 - 0.05 = 0.95*

    ```
    μ = n * p = 100 * 0.05 = 5
    σ² = n * p * q = 100 * 0.05 * 0.95 = 4.75
    σ = sqrt(4.75) ≈ 2.179
    ```

    We expect to find approximately 5 defective items, and the standard deviation is approximately 2.179.

### 5. Applications of the Binomial Distribution

*   **Quality Control:** Determining the probability of finding a certain number of defective items in a sample from a production line.
*   **Marketing:**  Predicting the probability of a certain number of customers responding to a marketing campaign.
*   **Genetics:** Calculating the probability of offspring inheriting specific traits.
*   **Polling and Surveys:** Estimating the proportion of a population that holds a particular opinion.
*   **Network Reliability:** Determining the probability of a certain number of nodes failing in a network.
*   **Computer Science:**  Modeling bit errors in data transmission.  Consider a data transmission system where each bit has a probability of `p=0.01` of being corrupted during transmission. If a message of 1000 bits is sent, what is the probability that exactly 5 bits are corrupted?  Here, n=1000, p=0.01, x=5.

### Practice Questions/Exercises

1.  **Question:** A fair die is rolled 8 times. What is the probability of getting a 6 exactly 2 times?

    **Answer:**
    *   *n = 8*
    *   *p = 1/6* (probability of rolling a 6)
    *   *q = 5/6* (probability of not rolling a 6)
    *   *x = 2*

    ```
    P(X = 2) = (8C2) * (1/6)^2 * (5/6)^6
             = (28) * (1/36) * (15625/46656)
             ≈ 0.2605
    ```

2.  **Question:** A basketball player makes 70% of their free throws.  If they take 10 free throws, what is the probability that they make at least 8 of them?

    **Answer:**  "At least 8" means 8, 9, or 10. We need to calculate P(X=8) + P(X=9) + P(X=10).
    *   *n = 10*
    *   *p = 0.7*
    *   *q = 0.3*

    ```
    P(X = 8) = (10C8) * (0.7)^8 * (0.3)^2 ≈ 0.2335
    P(X = 9) = (10C9) * (0.7)^9 * (0.3)^1 ≈ 0.1211
    P(X = 10) = (10C10) * (0.7)^10 * (0.3)^0 ≈ 0.0282
    ```
    Therefore, P(X >= 8) = 0.2335 + 0.1211 + 0.0282 ≈ 0.3828

3.  **Question:** A company finds that 3% of the items they manufacture are defective. If a random sample of 200 items is selected, what is the expected number of defective items and the standard deviation?

    **Answer:**
    *   *n = 200*
    *   *p = 0.03*
    *   *q = 0.97*

    ```
    μ = n * p = 200 * 0.03 = 6
    σ² = n * p * q = 200 * 0.03 * 0.97 = 5.82
    σ = sqrt(5.82) ≈ 2.412
    ```

4. **Question:**  A certain brand of light bulb has a 90% chance of lasting at least 500 hours. If you buy 12 of these light bulbs, what's the probability that exactly 10 of them will last at least 500 hours?

    **Answer:**
    * n = 12
    * p = 0.9
    * x = 10
    * q = 0.1

    P(X = 10) = (12C10) * (0.9)^10 * (0.1)^2
               = (66) * (0.3486784401) * (0.01)
               ≈ 0.2301

### Important Points to Remember

*   The binomial distribution applies only when trials are independent and the probability of success is constant.
*   Make sure you correctly identify *n*, *p*, and *x* before applying the binomial probability formula.
*   Remember that the sum of probabilities for all possible values of a binomial random variable must equal 1.  (  ∑ P(X=x) = 1, for x = 0 to n)
*   The mean and variance provide valuable insights into the center and spread of the binomial distribution.
*   Tools like statistical calculators or software can be used to compute binomial probabilities and related statistics, especially for larger values of *n*.
