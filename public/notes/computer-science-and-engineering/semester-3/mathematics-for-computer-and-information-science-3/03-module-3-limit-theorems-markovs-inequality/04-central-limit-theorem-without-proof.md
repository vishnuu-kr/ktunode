---
title: "Central Limit Theorem (without proof)"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 3: Limit theorems : Markov’s Inequality"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab58"
status: "completed"
scrapedAt: "2026-05-20T16:26:07.108Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 3: Limit Theorems - Central Limit Theorem (without proof)

### Learning Outcomes:

*   Understand the statement and implications of the Central Limit Theorem (CLT).
*   Apply the CLT to approximate probabilities involving sums and averages of independent random variables.
*   Recognize the conditions under which the CLT is applicable.
*   Interpret the significance of the CLT in statistics and its relationship to computer science.

### 1. Key Concepts and Definitions:

*   **Random Variable:** A variable whose value is a numerical outcome of a random phenomenon.
*   **Independent Random Variables:** Random variables are independent if the outcome of one does not affect the outcome of the others.
*   **Identically Distributed Random Variables:** Random variables that have the same probability distribution.
*   **Mean (Expected Value):** A measure of the central tendency of a random variable.  Denoted as E[X] or μ.
*   **Variance:** A measure of the spread of a random variable's distribution around its mean. Denoted as Var(X) or σ².
*   **Standard Deviation:** The square root of the variance, denoted as σ.  It provides a measure of the typical deviation from the mean.
*   **Sample Mean:** The average of a set of observations, often denoted as  X̄.
*   **Normal Distribution (Gaussian Distribution):** A bell-shaped, symmetric probability distribution that is characterized by its mean (μ) and standard deviation (σ). Denoted as N(μ, σ²).
*   **Standard Normal Distribution:** A normal distribution with a mean of 0 and a standard deviation of 1. Denoted as N(0, 1).
*   **Standardization:** The process of transforming a random variable X into a new random variable Z with a mean of 0 and a standard deviation of 1.  Z = (X - μ) / σ.

### 2. Central Limit Theorem (CLT): Statement (without proof)

The Central Limit Theorem (CLT) states that the sum (or average) of a large number of independent and identically distributed (i.i.d.) random variables, regardless of the original distribution of the variables, will approximately follow a normal distribution.  Formally:

Let X₁, X₂, ..., Xₙ be *n* independent and identically distributed (i.i.d.) random variables, each with mean μ and standard deviation σ.  Let Sₙ be the sum of these random variables:

Sₙ = X₁ + X₂ + ... + Xₙ

Then, as *n* approaches infinity, the distribution of the *standardized* sum (or average) approaches a standard normal distribution:

Z = (Sₙ - nμ) / (σ√n)  approximately follows N(0, 1)

Equivalently, the sample mean, X̄ = Sₙ / n, has a distribution that approaches N(μ, σ²/n).

**Key Implications:**

*   **Approximation:** The CLT provides a powerful approximation for the distribution of sums or averages.
*   **Applicability:**  It works even if the original distribution of the random variables is *not* normal.
*   **Large Sample Size:** The larger the sample size *n*, the better the normal approximation.
*   **Independence:** The random variables *must* be independent (or at least weakly dependent) for the CLT to hold.
*   **Identical Distribution:** While ideally the variables should be identically distributed, the CLT can still hold approximately if the variables have similar distributions and variances.

### 3. Applying the Central Limit Theorem

To use the CLT for probability calculations:

1.  **Identify the Random Variables:** Define the independent and identically distributed random variables X₁, X₂, ..., Xₙ. Determine their mean (μ) and standard deviation (σ).
2.  **Define the Sum or Average:**  Define the sum Sₙ or the sample mean X̄.
3.  **Apply the CLT:** Approximate the distribution of Sₙ or X̄ using a normal distribution:
    *   Sₙ ≈ N(nμ, nσ²)
    *   X̄ ≈ N(μ, σ²/n)
4.  **Standardize:** Transform the sum or average into a standard normal variable Z:
    *   Z = (Sₙ - nμ) / (σ√n)
    *   Z = (X̄ - μ) / (σ/√n)
5.  **Calculate Probabilities:** Use the standard normal distribution table (Z-table) or a calculator to find probabilities related to Z.

### 4. Examples

**Example 1:**

A fair die is rolled 100 times.  What is the approximate probability that the sum of the rolls is greater than 380?

*   **Step 1:**  Let Xᵢ be the outcome of the i-th roll. Xᵢ are i.i.d. and each follows a discrete uniform distribution on {1, 2, 3, 4, 5, 6}.  Therefore,  E[Xᵢ] = μ = 3.5 and Var(Xᵢ) = σ² = (36-1)/12 = 35/12 ≈ 2.917.  σ ≈ √2.917 ≈ 1.708.
*   **Step 2:**  S₁₀₀ = X₁ + X₂ + ... + X₁₀₀ is the sum of the 100 rolls.
*   **Step 3:**  By the CLT, S₁₀₀ ≈ N(nμ, nσ²) = N(100 * 3.5, 100 * 2.917) = N(350, 291.7).
*   **Step 4:**  Standardize: Z = (S₁₀₀ - 350) / √291.7
*   **Step 5:**  We want P(S₁₀₀ > 380).  So, P(S₁₀₀ > 380) = P(Z > (380 - 350) / √291.7) = P(Z > 30 / 17.08) = P(Z > 1.756).
Using a Z-table (or calculator), P(Z > 1.756) ≈ 1 - P(Z ≤ 1.76) ≈ 1 - 0.9608 ≈ 0.0392.

Therefore, the approximate probability that the sum of the rolls is greater than 380 is about 3.92%.

**Example 2:**

The average height of adult women in a certain country is 162 cm with a standard deviation of 7 cm. If we randomly select 49 women, what is the probability that the average height of these women will be between 160 cm and 164 cm?

*   **Step 1:** Let Xᵢ be the height of the i-th woman.  Xᵢ are i.i.d. with μ = 162 cm and σ = 7 cm.
*   **Step 2:**  X̄ is the average height of the 49 women.
*   **Step 3:**  By the CLT, X̄ ≈ N(μ, σ²/n) = N(162, 7²/49) = N(162, 1).
*   **Step 4:**  Standardize: Z = (X̄ - 162) / (7/√49) = (X̄ - 162) / 1
*   **Step 5:**  We want P(160 < X̄ < 164).  So, P(160 < X̄ < 164) = P((160 - 162)/1 < Z < (164 - 162)/1) = P(-2 < Z < 2).
Using a Z-table, P(-2 < Z < 2) = P(Z < 2) - P(Z < -2) = P(Z < 2) - (1 - P(Z < 2)) = 2 * P(Z < 2) - 1.
P(Z < 2) ≈ 0.9772.
Therefore, P(-2 < Z < 2) ≈ 2 * 0.9772 - 1 = 1.9544 - 1 = 0.9544.

Therefore, the approximate probability that the average height of these women is between 160 cm and 164 cm is about 95.44%.

### 5. Conditions for Applying the CLT

The Central Limit Theorem is a powerful tool, but it is important to remember its limitations:

*   **Independence:**  The random variables should be independent (or at least weakly dependent).  If the variables are strongly correlated, the CLT may not apply.
*   **Sample Size:** The sample size *n* should be sufficiently large.  There is no strict rule for what constitutes "large enough," but a common guideline is *n* ≥ 30.  However, if the underlying distribution is close to normal, the CLT may provide a good approximation even for smaller *n*.  If the underlying distribution is highly skewed or has heavy tails, a larger *n* may be required.
*   **Finite Variance:** The random variables should have a finite variance. If the variance is infinite, the CLT does not apply.
*   **Identical Distribution (Relaxation):** While ideal, it's not strictly required for variables to be *identically* distributed. What's crucial is that no *single* variable dominates the sum. The Lindeberg condition provides a more general (and more complex) condition to ensure the CLT's applicability when variables aren't identically distributed.

### 6. Significance of the CLT in Statistics and Computer Science

*   **Statistical Inference:** The CLT is fundamental to many statistical inference procedures, such as hypothesis testing and confidence interval estimation.  It allows us to make inferences about population parameters based on sample statistics, even when we don't know the distribution of the population.
*   **Simulation and Modeling:**  The CLT is used in simulations and modeling to approximate complex systems. For example, in queuing theory, the CLT can be used to approximate the distribution of waiting times.
*   **Machine Learning:**  The CLT provides theoretical justification for many machine learning algorithms. For example, it justifies the use of linear models when the underlying data is not normally distributed.
*   **Algorithm Analysis:** In computer science, the CLT is used to analyze the performance of algorithms. For example, it can be used to estimate the probability that an algorithm will exceed a certain runtime.
*   **Random Number Generation:** Understanding the CLT is crucial in the creation and analysis of random number generators, ensuring they produce distributions that meet requirements.

### 7. Practice Questions and Exercises

**Question 1:**

A company manufactures light bulbs.  The lifespan of a light bulb is known to have a mean of 800 hours and a standard deviation of 50 hours.  If a random sample of 25 light bulbs is selected, what is the approximate probability that the sample mean lifespan will be less than 790 hours?

**Solution:**

1.  Xᵢ = lifespan of i-th bulb, μ = 800, σ = 50, n = 25
2.  X̄ = sample mean lifespan
3.  X̄ ≈ N(800, 50²/25) = N(800, 100)
4.  Z = (X̄ - 800) / (50/√25) = (X̄ - 800) / 10
5.  P(X̄ < 790) = P(Z < (790 - 800) / 10) = P(Z < -1)
    Using a Z-table, P(Z < -1) ≈ 0.1587

Answer: Approximately 0.1587 or 15.87%.

**Question 2:**

The number of calls received by a call center per hour has a mean of 50 and a standard deviation of 10.  Approximate the probability that the call center will receive more than 550 calls in a 10-hour period.

**Solution:**

1.  Xᵢ = number of calls in the i-th hour, μ = 50, σ = 10, n = 10
2.  S₁₀ = total number of calls in 10 hours
3.  S₁₀ ≈ N(10 * 50, 10 * 10²) = N(500, 1000)
4.  Z = (S₁₀ - 500) / √(1000) = (S₁₀ - 500) / (10√10) ≈ (S₁₀ - 500) / 31.62
5.  P(S₁₀ > 550) = P(Z > (550 - 500) / 31.62) = P(Z > 50 / 31.62) ≈ P(Z > 1.58)
    Using a Z-table, P(Z > 1.58) ≈ 1 - P(Z < 1.58) ≈ 1 - 0.9429 ≈ 0.0571

Answer: Approximately 0.0571 or 5.71%.

**Question 3:**

A random sample of 64 observations is taken from a population with a mean of 100 and a standard deviation of 16.  Find the 95% confidence interval for the population mean.

**Solution:**

1.  μ = 100, σ = 16, n = 64. We need to use the CLT to estimate the confidence interval.  Since the population standard deviation is known, we can use a Z-interval.
2. Sample mean X̄  ≈ N(μ, σ²/n) = N(100, 16²/64) = N(100, 4)
3. Z = (X̄ - 100)/2
4. For a 95% confidence interval, the critical Z-value is Z* = 1.96 (you can find this in a Z-table).

The formula for the confidence interval is:  X̄ ± Z* * (σ/√n)  Since we only know μ=100, and we are asked to find the confidence interval around the population mean (μ), we are missing the sample mean. Therefore, the problem is ill-defined, and it is implied that we should use the population mean, which is not usually done, but is the only valid approach here. Therefore, we are estimating a population parameter using knowledge of that population parameter, which makes no sense, but it is what the problem suggests.

Therefore, the confidence interval is: 100 ± 1.96 * (16/√64) = 100 ± 1.96 * 2 = 100 ± 3.92

Answer: (96.08, 103.92).

### 8. Important Points to Remember

*   The CLT is an *approximation*. It is not exact, especially for small sample sizes.
*   The CLT is most accurate when the underlying distribution is close to normal.
*   The CLT requires *independence* among the random variables.  Violations of independence can lead to inaccurate results.
*   The CLT applies to *sums and averages*. It does not necessarily apply to other functions of random variables.
*   The CLT is a powerful tool, but it is not a substitute for understanding the underlying principles of probability and statistics.
