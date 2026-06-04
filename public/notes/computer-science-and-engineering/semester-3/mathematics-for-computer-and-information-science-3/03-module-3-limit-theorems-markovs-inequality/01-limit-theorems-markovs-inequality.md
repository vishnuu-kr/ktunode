---
title: "Limit theorems : Markov’s Inequality"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 3: Limit theorems : Markov’s Inequality"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab55"
status: "completed"
scrapedAt: "2026-05-20T16:26:04.970Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 3: Limit Theorems
## Topic: Markov's Inequality

**Description:** This topic focuses on Markov's Inequality, a fundamental result in probability theory that provides an upper bound on the probability that a non-negative random variable exceeds a certain value.  It is a weaker inequality than Chebyshev's, but requires fewer assumptions.

**Learning Outcomes:**

*   Understand the statement of Markov's Inequality.
*   Be able to apply Markov's Inequality to estimate probabilities.
*   Know the conditions under which Markov's Inequality is applicable.
*   Understand the limitations of Markov's Inequality.
*   Compare and contrast Markov's Inequality with Chebyshev's Inequality.

---

### 1. Introduction to Markov's Inequality

*   **Key Concept:** Markov's Inequality provides an upper bound on the probability that a non-negative random variable takes on a value greater than or equal to a certain threshold.  It's particularly useful when only the mean (expected value) of the random variable is known.

### 2. Statement of Markov's Inequality

*   **Definition:** Let *X* be a non-negative random variable, and let *a* > 0. Then Markov's Inequality states:

    P(X ≥ a) ≤ E[X] / a

    Where:
    *   P(X ≥ a) is the probability that the random variable *X* is greater than or equal to *a*.
    *   E[X] is the expected value (mean) of the random variable *X*.
    *   *a* is a positive real number.

### 3. Proof of Markov's Inequality (Optional - but understanding the intuition helps)

While not strictly required, a brief explanation of the proof's intuition helps understand the inequality.

*   **Intuition (Discrete Case):** Consider the discrete case for simplicity. If X can only take values 0, 1, 2, 3, ... and E[X] is relatively small, it means that the probability of X being large must also be small, otherwise the average (E[X]) would be higher.  Markov's inequality formalizes this intuition.

*   **Simplified Proof (Discrete):**  Let X be a non-negative discrete random variable.  Then

    E[X] = ∑ x * P(X = x)  where the sum is over all possible values of x.

    We can split this sum into two parts:

    E[X] =  ∑ (x * P(X = x))  over x < a  +  ∑ (x * P(X = x)) over x >= a

    Since X is non-negative, the first sum is also non-negative and can be dropped, giving us the inequality

    E[X] >= ∑ (x * P(X = x)) over x >= a

    Since x >= a in this sum, we have x >= a * 1.  Then,

    E[X] >= ∑ (a * P(X = x)) over x >= a
    E[X] >= a * ∑ P(X = x) over x >= a
    E[X] >= a * P(X >= a)

    Dividing both sides by `a` gives the desired inequality:  P(X >= a) <= E[X] / a
### 4. Applying Markov's Inequality: Examples

*   **Example 1:** Suppose the average (expected) waiting time at a certain customer service line is 10 minutes.  What is the probability that a customer will wait at least 30 minutes?

    *   Let X be the waiting time (non-negative random variable).  E[X] = 10.
    *   We want to find P(X ≥ 30).
    *   Using Markov's Inequality: P(X ≥ 30) ≤ E[X] / 30 = 10 / 30 = 1/3.
    *   Therefore, the probability that a customer waits at least 30 minutes is at most 1/3.

*   **Example 2:**  A random variable Y represents the number of emails a person receives in a day.  The average number of emails received is 25.  What is the probability that the person receives 75 or more emails?

    *   Let Y be the number of emails (non-negative random variable). E[Y] = 25.
    *   We want to find P(Y ≥ 75).
    *   Using Markov's Inequality: P(Y ≥ 75) ≤ E[Y] / 75 = 25 / 75 = 1/3.
    *   Therefore, the probability that the person receives 75 or more emails is at most 1/3.

### 5. Conditions for Applicability

*   **Crucial Requirement:** The random variable *X* **must be non-negative**. This is a critical condition for Markov's Inequality to hold. If *X* can take negative values, the inequality is not guaranteed to be true.
*   *a* **must be strictly positive** (*a* > 0).

### 6. Limitations of Markov's Inequality

*   **Weak Bound:** Markov's Inequality provides a relatively weak upper bound.  It often overestimates the probability, especially when more information about the distribution of *X* is available.
*   **Only Uses Mean:** It only utilizes the expected value (mean) of the random variable. It doesn't consider other statistical properties like the variance or shape of the distribution.

### 7. Comparison with Chebyshev's Inequality

*   **Chebyshev's Inequality:** Let *X* be a random variable with mean μ and variance σ².  For any *k* > 0, Chebyshev's Inequality states:

    P(|X - μ| ≥ k) ≤ σ² / k²

*   **Key Differences:**
    *   **Assumptions:** Chebyshev's Inequality requires knowledge of both the mean (μ) and variance (σ²) of the random variable *X*. Markov's Inequality only requires knowledge of the mean E[X] and that X is non-negative.
    *   **Bound:** Chebyshev's Inequality typically provides a tighter bound than Markov's Inequality (if the variance is known).  Chebyshev's inequality considers the variance, which provides more information about the spread of the data around the mean.
    *   **Random Variable:**  Chebyshev's Inequality applies to *any* random variable (not just non-negative ones), whereas Markov's Inequality requires a non-negative random variable.

*   **Relationship:**  Markov's Inequality can be used as a building block to prove Chebyshev's Inequality. (Consider applying Markov's to (X - μ)^2 ).

*   **When to Use Which:**
    *   If you only know the mean and the random variable is non-negative, use Markov's Inequality.
    *   If you know both the mean and variance, use Chebyshev's Inequality (it will usually give a better bound).
    *   If the random variable can be negative, you cannot directly apply Markov's Inequality.  Chebyshev's Inequality is suitable in this case if the mean and variance are known.

### 8. Important Points to Remember

*   Markov's Inequality is a simple but powerful tool for estimating probabilities.
*   It provides an *upper bound*, not the exact probability. The actual probability may be much lower.
*   The random variable *must* be non-negative for Markov's Inequality to be valid.
*   Chebyshev's Inequality provides a tighter bound when the variance is known.
*   Understand the conditions under which each inequality is applicable.

### 9. Practice Questions/Exercises

**Question 1:** A server handles an average of 100 requests per second.  What is the probability that the server handles at least 300 requests in a second?

**Answer 1:**

*   Let X be the number of requests handled in a second (non-negative random variable). E[X] = 100.
*   We want to find P(X ≥ 300).
*   Using Markov's Inequality: P(X ≥ 300) ≤ E[X] / 300 = 100 / 300 = 1/3.
*   Therefore, the probability that the server handles at least 300 requests is at most 1/3.

**Question 2:**  The average length of a file stored on a server is 5 MB.  What is the probability that a randomly selected file is at least 20 MB in size?

**Answer 2:**

*   Let Y be the size of a file (non-negative random variable). E[Y] = 5 MB.
*   We want to find P(Y ≥ 20).
*   Using Markov's Inequality: P(Y ≥ 20) ≤ E[Y] / 20 = 5 / 20 = 1/4.
*   Therefore, the probability that a randomly selected file is at least 20 MB is at most 1/4.

**Question 3:** A random variable Z has a mean of 10.  You know nothing else about Z.  What's the upper bound on P(Z ≥ 50) if Z is non-negative? What can you say if Z is *not* known to be non-negative?

**Answer 3:**

*   If Z is non-negative, E[Z] = 10, we can apply Markov's:  P(Z ≥ 50) ≤ E[Z] / 50 = 10 / 50 = 1/5.

*   If Z is *not* known to be non-negative, we *cannot* apply Markov's Inequality. It provides no valid bound in this case.  We would need more information (such as the variance) to use a different inequality, like Chebyshev's.

**Question 4:** A company ships packages. The average weight of a package is 2 kg. What's the probability a package weighs at least 10 kg?

**Answer 4:**
Let X be the weight of the package. E[X] = 2 kg. X is a non-negative random variable.
P(X >= 10) <= E[X]/10 = 2/10 = 1/5 = 0.2
The probability that the package weighs at least 10 kg is at most 0.2.

**Question 5:** Given that the average time for a customer service representative to resolve a complaint is 5 minutes. What is the upper bound on the probability that it will take at least 25 minutes to resolve a complaint?

**Answer 5:**
Let X be the time to resolve a complaint. E[X] = 5 minutes.
P(X >= 25) <= E[X]/25 = 5/25 = 1/5 = 0.2
The upper bound on the probability is 0.2.
