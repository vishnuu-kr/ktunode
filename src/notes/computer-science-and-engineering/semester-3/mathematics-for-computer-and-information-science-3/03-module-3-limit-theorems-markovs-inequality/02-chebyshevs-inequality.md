---
title: "Chebyshev’s Inequality"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 3: Limit theorems : Markov’s Inequality"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab56"
status: "completed"
scrapedAt: "2026-05-20T16:26:05.682Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 3: Limit Theorems – Markov's Inequality
## Topic: Chebyshev's Inequality

**Learning Outcomes:**

*   Understand the statement of Chebyshev's Inequality.
*   Apply Chebyshev's Inequality to bound probabilities.
*   Understand the relationship between Chebyshev's Inequality and Markov's Inequality.
*   Recognize the conditions under which Chebyshev's Inequality is applicable.
*   Solve problems involving probability bounds using Chebyshev's Inequality.

**1. Introduction**

Chebyshev's Inequality provides a way to bound the probability that a random variable deviates from its mean by a certain amount, using only the mean and variance of the random variable.  It's a weaker but more general result than those that require knowledge of the full probability distribution. It is less precise than other bounds if more information is known about the underlying distribution, but it is applicable more broadly.

**2. Key Concepts and Definitions**

*   **Random Variable (RV):** A variable whose value is a numerical outcome of a random phenomenon.  We'll denote a random variable by *X*.

*   **Mean (Expected Value):** The average value of a random variable.  Denoted by E[X] or μ.

*   **Variance:** A measure of how spread out the values of a random variable are. Denoted by Var(X) or σ².  Defined as Var(X) = E[(X - μ)²] = E[X²] - (E[X])².

*   **Standard Deviation:** The square root of the variance. Denoted by σ.

**3. Chebyshev's Inequality: Statement**

Let *X* be a random variable with finite mean μ and finite variance σ².  Then, for any *k > 0*:

P(|X - μ| ≥ k) ≤ σ² / k²

This inequality states that the probability that *X* deviates from its mean μ by at least *k* is bounded above by the ratio of the variance σ² to the square of *k*.

**4. Understanding Chebyshev's Inequality**

*   **Intuition:** A larger variance (σ²) implies a greater spread of the distribution, thus a higher probability of deviating from the mean.  Conversely, a smaller variance implies a more concentrated distribution around the mean, leading to a lower probability of deviation.

*   **Importance of k:**  A larger *k* (meaning we're looking at deviations further from the mean) will result in a smaller upper bound on the probability. This makes sense, as the probability of extreme deviations should generally be smaller.

*   **Relationship to Markov's Inequality:**  Chebyshev's Inequality is derived from Markov's Inequality by considering the random variable (X - μ)².  This is explained later.

**5. Conditions for Applicability**

Chebyshev's Inequality only requires that the random variable *X* has a finite mean (μ) and a finite variance (σ²). It *does not* require knowledge of the specific distribution of *X*. This is a key advantage.

**6. Applying Chebyshev's Inequality: Examples**

**Example 1:**

Suppose a random variable *X* has a mean of 50 and a variance of 25.  Use Chebyshev's Inequality to find an upper bound on the probability that *X* differs from 50 by more than 10.

*   μ = 50
*   σ² = 25
*   k = 10

Applying Chebyshev's Inequality:

P(|X - 50| ≥ 10) ≤ 25 / (10)² = 25 / 100 = 0.25

Therefore, the probability that *X* differs from 50 by more than 10 is at most 0.25.

**Example 2:**

The number of messages arriving at a server in an hour has a mean of 100 and a standard deviation of 10.  What is the probability that between 80 and 120 messages arrive in an hour? Use Chebyshev's Inequality.

*   μ = 100
*   σ = 10, so σ² = 100

We want to find P(80 ≤ X ≤ 120).  This is equivalent to finding P(|X - 100| ≤ 20).  Chebyshev's Inequality gives us a bound on P(|X - 100| ≥ 20).  Therefore:

P(|X - 100| ≥ 20) ≤ 100 / (20)² = 100 / 400 = 0.25

Since P(|X - 100| ≥ 20) + P(|X - 100| < 20) = 1, we have:

P(|X - 100| < 20) = 1 - P(|X - 100| ≥ 20) ≥ 1 - 0.25 = 0.75

Since P(|X - 100| ≤ 20) is very close to P(|X - 100| < 20), we can approximate it.

Therefore,  P(80 ≤ X ≤ 120) ≈ 0.75.  The probability that between 80 and 120 messages arrive in an hour is at least 0.75.

**7. Relationship to Markov's Inequality**

Markov's Inequality states that for a non-negative random variable *Y* and any *a > 0*:

P(Y ≥ a) ≤ E[Y] / a

To derive Chebyshev's Inequality from Markov's Inequality, let Y = (X - μ)² and a = k².  Then:

P((X - μ)² ≥ k²) ≤ E[(X - μ)²] / k²

P(|X - μ| ≥ k) ≤ Var(X) / k² = σ² / k²

This shows that Chebyshev's Inequality is a specific application of Markov's Inequality.  Chebyshev's inequality applies Markov's inequality to the *squared* deviation from the mean.

**8. Important Points to Remember**

*   Chebyshev's Inequality provides an *upper bound* on probabilities.  The actual probability could be much lower.
*   It only requires knowledge of the mean and variance.
*   It's useful when the distribution of the random variable is unknown or too complex to work with directly.
*   The bound provided by Chebyshev's Inequality can be loose, especially for distributions that are well-behaved (e.g., normal distribution). Other bounds, such as Chernoff bounds, can provide tighter estimates if more information is available.

**9. Practice Questions/Exercises**

**Question 1:**

A random variable *Y* has a mean of 10 and a variance of 4.  Use Chebyshev's Inequality to bound the probability that *Y* is between 6 and 14.

**Answer:**

We want to find P(6 ≤ Y ≤ 14), which is equivalent to P(|Y - 10| ≤ 4).  Chebyshev's Inequality bounds P(|Y - 10| ≥ 4).

P(|Y - 10| ≥ 4) ≤ 4 / (4)² = 4 / 16 = 0.25

P(|Y - 10| ≤ 4) = 1 - P(|Y - 10| ≥ 4) ≥ 1 - 0.25 = 0.75

Therefore, P(6 ≤ Y ≤ 14) ≥ 0.75.  The probability that *Y* is between 6 and 14 is at least 0.75.

**Question 2:**

The average score on a test is 75 with a standard deviation of 5.  What percentage of students scored between 65 and 85? Use Chebyshev's Inequality to find a lower bound.

**Answer:**

*   μ = 75
*   σ = 5, so σ² = 25

We want to find P(65 ≤ X ≤ 85), which is equivalent to P(|X - 75| ≤ 10).

P(|X - 75| ≥ 10) ≤ 25 / (10)² = 25 / 100 = 0.25

P(|X - 75| ≤ 10) = 1 - P(|X - 75| ≥ 10) ≥ 1 - 0.25 = 0.75

Therefore, P(65 ≤ X ≤ 85) ≥ 0.75.  At least 75% of students scored between 65 and 85.

**Question 3:**

A machine produces parts with a mean weight of 50 grams and a standard deviation of 2 grams.  Use Chebyshev's Inequality to estimate the probability that a randomly selected part will weigh between 46 and 54 grams.

**Answer:**

*   μ = 50
*   σ = 2, so σ² = 4

We want to find P(46 ≤ X ≤ 54), which is equivalent to P(|X - 50| ≤ 4).

P(|X - 50| ≥ 4) ≤ 4 / (4)² = 4 / 16 = 0.25

P(|X - 50| ≤ 4) = 1 - P(|X - 50| ≥ 4) ≥ 1 - 0.25 = 0.75

Therefore, P(46 ≤ X ≤ 54) ≥ 0.75. The probability that a randomly selected part will weigh between 46 and 54 grams is at least 0.75.
