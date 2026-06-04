---
title: "Tests concerning a population proportion for large and small samples."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 3: Confidence Intervals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35dae"
status: "completed"
scrapedAt: "2026-05-23T16:17:04.317Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 3: Confidence Intervals

## Topic: Tests concerning a population proportion for large and small samples

This topic delves into inferential statistics, specifically hypothesis testing for a population proportion. We will explore how to make statistically sound conclusions about a proportion within a population based on sample data, considering both large and small sample scenarios. This aligns with Course Outcome CO3, which emphasizes testing hypotheses about population proportions.

---

### 1. Introduction to Hypothesis Testing for a Population Proportion

**What is Hypothesis Testing?**
Hypothesis testing is a statistical method used to make decisions or draw conclusions about a population based on sample data. It involves formulating two competing statements about a population parameter (in this case, the population proportion) and then using sample evidence to determine which statement is more likely to be true.

**Key Concepts:**

*   **Population Proportion ($p$):** The true proportion of individuals in a population that possess a certain characteristic.
*   **Sample Proportion ($\hat{p}$):** The proportion of individuals in a sample that possess the same characteristic. Calculated as $\hat{p} = X/n$, where $X$ is the number of successes in the sample and $n$ is the sample size.
*   **Null Hypothesis ($H_0$):** A statement about the population proportion that is assumed to be true until evidence suggests otherwise. It usually represents the status quo or a specific claim. For a population proportion, it's often stated as $H_0: p = p_0$, where $p_0$ is a hypothesized value.
*   **Alternative Hypothesis ($H_a$ or $H_1$):** A statement that contradicts the null hypothesis. It represents what we are trying to find evidence for. It can be:
    *   **Two-tailed:** $H_a: p \neq p_0$ (the proportion is different from $p_0$)
    *   **One-tailed (right-tailed):** $H_a: p > p_0$ (the proportion is greater than $p_0$)
    *   **One-tailed (left-tailed):** $H_a: p < p_0$ (the proportion is less than $p_0$)
*   **Test Statistic:** A value calculated from the sample data that measures how far the sample proportion is from the hypothesized population proportion.
*   **Significance Level ($\alpha$):** The probability of rejecting the null hypothesis when it is actually true (Type I error). Common values are 0.05, 0.01, or 0.10.
*   **P-value:** The probability of observing a test statistic as extreme as, or more extreme than, the one calculated from the sample, assuming the null hypothesis is true.
*   **Decision Rule:**
    *   If P-value $\leq \alpha$, reject $H_0$.
    *   If P-value $> \alpha$, fail to reject $H_0$.

**Referencing Devore (9th Ed.):** Chapter 9, "Hypothesis Testing and Confidence Intervals," provides a comprehensive foundation for hypothesis testing principles, including the concepts of null and alternative hypotheses, test statistics, and decision-making based on significance levels.

---

### 2. Hypothesis Tests for a Population Proportion with Large Samples

When the sample size is large, the sampling distribution of the sample proportion ($\hat{p}$) can be approximated by a normal distribution. This allows us to use z-tests for hypothesis testing.

**Conditions for Large Sample Size:**
The Central Limit Theorem (CLT) allows us to approximate the sampling distribution of $\hat{p}$ with a normal distribution if the sample size is large enough. A common rule of thumb is that both $n \cdot p_0 \geq 10$ and $n \cdot (1 - p_0) \geq 10$, where $p_0$ is the hypothesized population proportion. In practice, if $n$ is large (e.g., $n \geq 30$), this condition is often met, especially if $p_0$ is not extremely close to 0 or 1.

**Test Statistic for Large Samples:**

The test statistic used is the z-statistic:

$$ z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}} $$

where:
*   $\hat{p}$ is the sample proportion.
*   $p_0$ is the hypothesized population proportion.
*   $n$ is the sample size.

**Steps for Large Sample Hypothesis Testing:**

1.  **State the Null and Alternative Hypotheses:** Clearly define $H_0$ and $H_a$.
2.  **Choose a Significance Level ($\alpha$):** Typically 0.05.
3.  **Calculate the Sample Proportion ($\hat{p}$):** $\hat{p} = X/n$.
4.  **Calculate the Test Statistic (z):** Use the formula above.
5.  **Determine the P-value or Critical Region:**
    *   **P-value approach:** Find the probability of observing a z-statistic as extreme as, or more extreme than, the calculated z-value, based on the alternative hypothesis.
    *   **Critical region approach:** Determine the critical z-value(s) from the standard normal distribution based on $\alpha$ and the type of test (one-tailed or two-tailed).
6.  **Make a Decision:**
    *   **P-value approach:** If P-value $\leq \alpha$, reject $H_0$. Otherwise, fail to reject $H_0$.
    *   **Critical region approach:** If the test statistic falls within the critical region, reject $H_0$. Otherwise, fail to reject $H_0$.
7.  **Interpret the Results:** State the conclusion in the context of the problem.

**Example (Large Sample):**

A manufacturer claims that at least 80% of their products meet a specific quality standard. A sample of 200 products reveals that 155 meet the standard. Test the manufacturer's claim at a significance level of $\alpha = 0.05$.

1.  **Hypotheses:**
    *   $H_0: p \geq 0.80$ (The proportion of products meeting the standard is at least 80%)
    *   $H_a: p < 0.80$ (The proportion of products meeting the standard is less than 80%)
    *   *(Note: We are testing if the claim is false, so we are looking for evidence that the proportion is *less* than the claimed minimum.)*

2.  **Significance Level:** $\alpha = 0.05$.

3.  **Sample Proportion:**
    *   $n = 200$
    *   $X = 155$
    *   $\hat{p} = 155 / 200 = 0.775$

4.  **Check Conditions:**
    *   $n \cdot p_0 = 200 \cdot 0.80 = 160 \geq 10$
    *   $n \cdot (1 - p_0) = 200 \cdot (1 - 0.80) = 200 \cdot 0.20 = 40 \geq 10$
    *   The conditions for a large sample z-test are met.

5.  **Calculate Test Statistic:**
    *   $p_0 = 0.80$
    *   $z = \frac{0.775 - 0.80}{\sqrt{\frac{0.80(1-0.80)}{200}}} = \frac{-0.025}{\sqrt{\frac{0.80 \cdot 0.20}{200}}} = \frac{-0.025}{\sqrt{\frac{0.16}{200}}} = \frac{-0.025}{\sqrt{0.0008}} \approx \frac{-0.025}{0.02828} \approx -0.884$

6.  **Determine P-value:**
    *   This is a left-tailed test ($H_a: p < 0.80$).
    *   P-value = $P(Z \leq -0.884)$
    *   Using a standard normal distribution table or calculator, $P(Z \leq -0.884) \approx 0.1882$.

7.  **Make a Decision:**
    *   P-value ($0.1882$) > $\alpha$ ($0.05$).
    *   Therefore, we fail to reject $H_0$.

8.  **Interpret the Results:**
    *   There is not enough statistical evidence at the 0.05 significance level to reject the manufacturer's claim that at least 80% of their products meet the quality standard.

---

### 3. Hypothesis Tests for a Population Proportion with Small Samples

When the sample size is small, or when the hypothesized proportion $p_0$ is close to 0 or 1, the normal approximation to the binomial distribution may not be accurate. In such cases, we use the **exact binomial test**.

**Conditions for Small Sample (Exact Binomial Test):**
The exact binomial test is appropriate when the conditions for the normal approximation ($n \cdot p_0 \geq 10$ and $n \cdot (1 - p_0) \geq 10$) are not met. This typically occurs when $n$ is small, or when $p_0$ is close to 0 or 1.

**The Exact Binomial Test:**

This test directly uses the binomial probability distribution to calculate the P-value. The number of successes ($X$) in a sample of size $n$ from a population with proportion $p$ follows a binomial distribution, $B(n, p)$.

*   **For $H_a: p < p_0$ (Left-tailed):** The P-value is the probability of observing $X$ or fewer successes: $P(X \leq x | n, p_0)$, where $x$ is the observed number of successes.
*   **For $H_a: p > p_0$ (Right-tailed):** The P-value is the probability of observing $X$ or more successes: $P(X \geq x | n, p_0)$, where $x$ is the observed number of successes.
*   **For $H_a: p \neq p_0$ (Two-tailed):** The P-value is the sum of probabilities of observing outcomes as extreme as, or more extreme than, the observed outcome in both tails of the distribution. This is often approximated by $2 \times \min(P(X \leq x | n, p_0), P(X \geq x | n, p_0))$.

**Calculating Probabilities for the Binomial Distribution:**
The probability mass function (PMF) for a binomial distribution is:

$$ P(X=k) = \binom{n}{k} p^k (1-p)^{n-k} $$

where:
*   $\binom{n}{k} = \frac{n!}{k!(n-k)!}$
*   $n$ is the number of trials (sample size).
*   $k$ is the number of successes.
*   $p$ is the probability of success on a single trial (hypothesized population proportion $p_0$).

**Steps for Small Sample Hypothesis Testing (Exact Binomial Test):**

1.  **State the Null and Alternative Hypotheses:** Clearly define $H_0$ and $H_a$.
2.  **Choose a Significance Level ($\alpha$):** Typically 0.05.
3.  **Identify the Observed Number of Successes ($x$) and Sample Size ($n$):**
4.  **Determine the P-value using the Binomial Distribution:**
    *   For a left-tailed test ($H_a: p < p_0$), calculate $P(X \leq x | n, p_0) = \sum_{i=0}^{x} \binom{n}{i} p_0^i (1-p_0)^{n-i}$.
    *   For a right-tailed test ($H_a: p > p_0$), calculate $P(X \geq x | n, p_0) = \sum_{i=x}^{n} \binom{n}{i} p_0^i (1-p_0)^{n-i}$.
    *   For a two-tailed test ($H_a: p \neq p_0$), calculate the sum of probabilities in both tails that are as extreme as or more extreme than the observed outcome.
5.  **Make a Decision:**
    *   If P-value $\leq \alpha$, reject $H_0$. Otherwise, fail to reject $H_0$.
6.  **Interpret the Results:** State the conclusion in the context of the problem.

**Example (Small Sample):**

A new marketing strategy is implemented for a product that historically has a 30% conversion rate. After implementing the strategy, a pilot study of 15 potential customers was conducted, and 8 of them converted. Test whether the new strategy has improved the conversion rate at a significance level of $\alpha = 0.10$.

1.  **Hypotheses:**
    *   $H_0: p \leq 0.30$ (The conversion rate is not improved or has decreased)
    *   $H_a: p > 0.30$ (The conversion rate has improved)

2.  **Significance Level:** $\alpha = 0.10$.

3.  **Observed Data:**
    *   $n = 15$
    *   $x = 8$
    *   $p_0 = 0.30$

4.  **Check Conditions:**
    *   $n \cdot p_0 = 15 \cdot 0.30 = 4.5$. This is less than 10.
    *   $n \cdot (1 - p_0) = 15 \cdot (1 - 0.30) = 15 \cdot 0.70 = 10.5$. This is $\geq 10$.
    *   Since $n \cdot p_0 < 10$, the normal approximation is not reliable. We should use the exact binomial test.

5.  **Calculate P-value (using Binomial Distribution):**
    *   This is a right-tailed test ($H_a: p > 0.30$). We need to find $P(X \geq 8 | n=15, p=0.30)$.
    *   $P(X \geq 8) = P(X=8) + P(X=9) + \dots + P(X=15)$.
    *   $P(X=k) = \binom{15}{k} (0.30)^k (0.70)^{15-k}$.
    *   Calculating these probabilities manually is tedious. We would typically use statistical software or a binomial probability calculator.
    *   Using a calculator:
        *   $P(X=8) = \binom{15}{8} (0.30)^8 (0.70)^7 \approx 0.0341$
        *   $P(X=9) = \binom{15}{9} (0.30)^9 (0.70)^6 \approx 0.0093$
        *   $P(X=10) = \binom{15}{10} (0.30)^{10} (0.70)^5 \approx 0.0020$
        *   $P(X=11) = \binom{15}{11} (0.30)^{11} (0.70)^4 \approx 0.0003$
        *   $P(X=12) = \binom{15}{12} (0.30)^{12} (0.70)^3 \approx 0.0000$ (very small)
        *   ... and so on.
    *   Summing these: $P(X \geq 8) \approx 0.0341 + 0.0093 + 0.0020 + 0.0003 \approx 0.0457$.
    *   The exact P-value is approximately 0.0457.

6.  **Make a Decision:**
    *   P-value ($0.0457$) $\leq \alpha$ ($0.10$).
    *   Therefore, we reject $H_0$.

7.  **Interpret the Results:**
    *   There is sufficient statistical evidence at the 0.10 significance level to conclude that the new marketing strategy has improved the conversion rate.

**Referencing Veerarajan (3rd Ed.):** Chapter 11, "Statistical Inference," covers hypothesis testing for means and proportions. While it may focus more on the normal approximation, understanding the fundamental principles of setting up hypotheses and interpreting results is crucial. For exact binomial tests, you might need to consult more specialized resources or use statistical software, but the conceptual framework remains the same.

---

### 4. Important Considerations and Refinements

*   **Continuity Correction:** For large samples where we use the normal approximation to the binomial, a continuity correction can improve the accuracy of the P-value. For a left-tailed test ($H_a: p < p_0$), we use $P(X \leq x)$ as $P(Z \leq \frac{(x + 0.5) - n p_0}{\sqrt{n p_0 (1-p_0)}})$. For a right-tailed test ($H_a: p > p_0$), we use $P(X \geq x)$ as $P(Z \geq \frac{(x - 0.5) - n p_0}{\sqrt{n p_0 (1-p_0)}})$.
*   **Confidence Intervals vs. Hypothesis Tests:** There's a close relationship between confidence intervals and hypothesis tests. If a hypothesized value $p_0$ falls outside the $(1-\alpha) \times 100\%$ confidence interval for $p$, then we would reject $H_0: p = p_0$ at significance level $\alpha$.
*   **Type I and Type II Errors:**
    *   **Type I Error:** Rejecting $H_0$ when it is true (probability $\alpha$).
    *   **Type II Error:** Failing to reject $H_0$ when it is false (probability $\beta$).
*   **Power of a Test:** The probability of correctly rejecting $H_0$ when it is false, which is $1 - \beta$.
*   **Choosing the Right Test:** The decision to use a z-test (normal approximation) or an exact binomial test depends critically on the sample size and the hypothesized proportion. Always check the conditions.

**Referencing Ross (6th Ed.):** Chapter 9, "Hypothesis Testing," provides a solid introduction to hypothesis testing, including the concepts of Type I and Type II errors and the power of a test. He likely also discusses the conditions for using the normal approximation to the binomial.

**Referencing Papoulis & Pillai (4th Ed.):** While more focused on stochastic processes, the foundational principles of probability and statistical inference discussed in introductory chapters would underpin the understanding of sampling distributions and hypothesis testing.

---

### 5. Practice Questions

1.  **Large Sample Z-test:** A quality control engineer for a semiconductor manufacturer claims that the proportion of defective chips produced is less than 2%. In a sample of 500 chips, 10 were found to be defective. Test the engineer's claim at the $\alpha = 0.01$ significance level.
    *   $H_0: p \geq 0.02$
    *   $H_a: p < 0.02$
    *   $\hat{p} = 10/500 = 0.02$
    *   $n = 500, p_0 = 0.02$
    *   $n \cdot p_0 = 500 \cdot 0.02 = 10 \geq 10$
    *   $n \cdot (1-p_0) = 500 \cdot 0.98 = 490 \geq 10$ (Normal approximation is valid)
    *   $z = \frac{0.02 - 0.02}{\sqrt{\frac{0.02(0.98)}{500}}} = \frac{0}{\sqrt{\frac{0.0196}{500}}} = 0$
    *   P-value for a left-tailed test: $P(Z \leq 0) = 0.50$.
    *   Decision: $0.50 > 0.01$, fail to reject $H_0$.
    *   Conclusion: There is not enough evidence to support the claim that the proportion of defective chips is less than 2%.

2.  **Small Sample Exact Binomial Test:** A survey of 12 students at an electrical engineering department found that 9 of them regularly use a specific type of simulation software. The historical usage rate for this software in the department is 50%. Test, at the $\alpha = 0.05$ significance level, whether the current usage rate is higher than the historical rate.
    *   $H_0: p \leq 0.50$
    *   $H_a: p > 0.50$
    *   $n = 12, x = 9, p_0 = 0.50$
    *   $n \cdot p_0 = 12 \cdot 0.50 = 6 < 10$. Exact binomial test is needed.
    *   We need to calculate $P(X \geq 9 | n=12, p=0.50)$.
    *   $P(X=k) = \binom{12}{k} (0.50)^k (0.50)^{12-k} = \binom{12}{k} (0.50)^{12}$.
    *   $P(X=9) = \binom{12}{9} (0.50)^{12} = 792 \times (0.50)^{12} \approx 0.0730$
    *   $P(X=10) = \binom{12}{10} (0.50)^{12} = 66 \times (0.50)^{12} \approx 0.0061$
    *   $P(X=11) = \binom{12}{11} (0.50)^{12} = 12 \times (0.50)^{12} \approx 0.0005$
    *   $P(X=12) = \binom{12}{12} (0.50)^{12} = 1 \times (0.50)^{12} \approx 0.0000$ (very small)
    *   P-value = $P(X \geq 9) \approx 0.0730 + 0.0061 + 0.0005 + 0.0000 \approx 0.0796$.
    *   Decision: $0.0796 \leq 0.05$? No. Fail to reject $H_0$.
    *   Conclusion: There is not enough evidence at the 0.05 significance level to conclude that the current usage rate of the simulation software is higher than the historical rate.

3.  **Two-tailed Test:** A survey in an electrical engineering program found that 40% of students preferred online learning. A new pedagogical approach is introduced, and a sample of 100 students is taken, with 48 students now preferring online learning. Test at $\alpha = 0.05$ whether the preference for online learning has changed.
    *   $H_0: p = 0.40$
    *   $H_a: p \neq 0.40$
    *   $\hat{p} = 48/100 = 0.48$
    *   $n = 100, p_0 = 0.40$
    *   $n \cdot p_0 = 100 \cdot 0.40 = 40 \geq 10$
    *   $n \cdot (1-p_0) = 100 \cdot 0.60 = 60 \geq 10$ (Normal approximation is valid)
    *   $z = \frac{0.48 - 0.40}{\sqrt{\frac{0.40(0.60)}{100}}} = \frac{0.08}{\sqrt{\frac{0.24}{100}}} = \frac{0.08}{\sqrt{0.0024}} \approx \frac{0.08}{0.04899} \approx 1.633$
    *   For a two-tailed test, $\alpha = 0.05$, so critical values are $\pm 1.96$.
    *   P-value = $2 \times P(Z \geq 1.633) \approx 2 \times 0.0512 = 0.1024$.
    *   Decision: P-value ($0.1024$) > $\alpha$ ($0.05$). Fail to reject $H_0$.
    *   Conclusion: There is not enough evidence to conclude that the preference for online learning has changed.

---

### 6. Important Points to Remember

*   **Distinguish between $p_0$ and $\hat{p}$:** $p_0$ is the hypothesized population proportion, while $\hat{p}$ is the sample proportion.
*   **Always check the conditions:** The validity of the z-test for proportions relies on the sample size being large enough for the normal approximation. If conditions aren't met, use the exact binomial test.
*   **Hypotheses must be about the population parameter ($p$), not the sample statistic ($\hat{p}$).**
*   **The denominator of the test statistic for hypothesis testing of a proportion uses $p_0$ (under the null hypothesis), not $\hat{p}$.** This is different from confidence intervals.
*   **Understand the direction of the alternative hypothesis:** This determines whether you perform a one-tailed (left or right) or two-tailed test, which affects how you find the P-value or critical region.
*   **Interpret your results in context:** Always relate your statistical conclusion back to the original problem statement.

This module on hypothesis testing for proportions is a fundamental skill in statistical inference, allowing us to make data-driven decisions about population characteristics.
