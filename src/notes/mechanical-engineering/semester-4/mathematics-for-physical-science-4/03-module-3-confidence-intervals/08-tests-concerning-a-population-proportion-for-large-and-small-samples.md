---
title: "Tests concerning a population proportion for large and small samples."
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ecf"
status: "completed"
scrapedAt: "2026-05-20T17:54:50.350Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4: Module 3: Confidence Intervals
## Topic: Tests Concerning a Population Proportion for Large and Small Samples

This module focuses on statistical inference, specifically on hypothesis testing related to population proportions. We will explore how to test claims about proportions, considering both large and small sample scenarios. This aligns with Course Outcome CO3, which emphasizes estimating population parameters and testing hypotheses about them.

---

### 1. Introduction to Hypothesis Testing for Proportions

Hypothesis testing is a statistical method used to determine if there is enough evidence in a sample of data to conclude that a certain condition (hypothesis) is true for the entire population. When dealing with proportions, we are interested in the proportion of individuals or items in a population that possess a certain characteristic.

**Key Concepts:**

*   **Population Proportion ($p$):** The true proportion of a characteristic in the entire population. This is typically unknown and what we want to make inferences about.
*   **Sample Proportion ($\hat{p}$):** The proportion of individuals or items in a sample that possess the characteristic. It is calculated as $\hat{p} = x/n$, where $x$ is the number of successes in the sample and $n$ is the sample size.
*   **Hypothesis:** A statement about a population parameter.
*   **Null Hypothesis ($H_0$):** A statement of no effect or no difference. It represents the status quo or a claim to be tested. For a population proportion, it is often stated as $H_0: p = p_0$, where $p_0$ is a specific hypothesized value.
*   **Alternative Hypothesis ($H_a$ or $H_1$):** A statement that contradicts the null hypothesis. It represents what we are trying to find evidence for.
    *   **Two-tailed test:** $H_a: p \neq p_0$ (the proportion is different from $p_0$).
    *   **One-tailed (right-tailed) test:** $H_a: p > p_0$ (the proportion is greater than $p_0$).
    *   **One-tailed (left-tailed) test:** $H_a: p < p_0$ (the proportion is less than $p_0$).
*   **Significance Level ($\alpha$):** The probability of rejecting the null hypothesis when it is actually true (Type I error). Common values are 0.05, 0.01, or 0.10.
*   **Test Statistic:** A value calculated from sample data that is used to decide whether to reject or fail to reject the null hypothesis.
*   **P-value:** The probability of observing a test statistic as extreme as, or more extreme than, the one computed from the sample data, assuming the null hypothesis is true.

**Devore (9th ed., Chapter 9):** Devore provides a thorough introduction to hypothesis testing, including the framework for setting up hypotheses, calculating test statistics, and interpreting p-values. He emphasizes the role of the significance level in decision-making.

**Ross (6th ed., Chapter 8):** Ross discusses hypothesis testing in the context of probability and statistical inference, detailing the steps involved and the interpretation of results.

---

### 2. Hypothesis Testing for a Population Proportion with Large Samples

When the sample size is sufficiently large, we can use the normal distribution (specifically, the z-distribution) as an approximation for the sampling distribution of the sample proportion.

**Conditions for Using the Normal Approximation:**

To use the z-test for a population proportion, the following conditions should generally be met:

1.  **Random Sample:** The sample is randomly selected from the population.
2.  **Independence:** The sample size $n$ is small relative to the population size $N$ (typically $n \le 0.10N$), or the sampling is done with replacement.
3.  **Large Sample Size:** The expected number of successes and failures in the population are both at least 10. This is checked by ensuring:
    *   $n \cdot p_0 \ge 10$
    *   $n \cdot (1 - p_0) \ge 10$
    Where $p_0$ is the hypothesized population proportion from $H_0$.

**The Z-Test for a Population Proportion:**

If the conditions are met, the sampling distribution of $\hat{p}$ is approximately normal with mean $\mu_{\hat{p}} = p_0$ and standard deviation $\sigma_{\hat{p}} = \sqrt{\frac{p_0(1-p_0)}{n}}$.

The test statistic is calculated as:

$Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$

**Decision Rule:**

*   **Using the P-value:**
    *   If $H_a: p \neq p_0$, the p-value is $2 \cdot P(Z \ge |z_{obs}|)$, where $z_{obs}$ is the calculated test statistic.
    *   If $H_a: p > p_0$, the p-value is $P(Z \ge z_{obs})$.
    *   If $H_a: p < p_0$, the p-value is $P(Z \le z_{obs})$.
    *   **Reject $H_0$ if p-value $\le \alpha$.**
*   **Using Critical Values:**
    *   For a given significance level $\alpha$, find the critical z-value(s) from the standard normal distribution table.
    *   **Two-tailed:** Reject $H_0$ if $Z \le -z_{\alpha/2}$ or $Z \ge z_{\alpha/2}$.
    *   **Right-tailed:** Reject $H_0$ if $Z \ge z_{\alpha}$.
    *   **Left-tailed:** Reject $H_0$ if $Z \le -z_{\alpha}$.

**Example (Devore, 9th ed., Section 9.2):**

A manufacturer of small electronic components claims that at most 5% of their components are defective. A random sample of 200 components is taken, and 15 are found to be defective. Test the manufacturer's claim at a significance level of $\alpha = 0.05$.

**Solution:**

1.  **Hypotheses:**
    *   $H_0: p \le 0.05$ (manufacturer's claim)
    *   $H_a: p > 0.05$ (claim is false)
    *   (We will use $p_0 = 0.05$ for the calculation of the test statistic.)

2.  **Sample Statistics:**
    *   Sample size $n = 200$.
    *   Number of defects $x = 15$.
    *   Sample proportion $\hat{p} = 15/200 = 0.075$.

3.  **Check Conditions:**
    *   Random sample: Assumed.
    *   Independence: $200$ is likely much less than 10% of the total production.
    *   Large sample size:
        *   $n \cdot p_0 = 200 \cdot 0.05 = 10 \ge 10$.
        *   $n \cdot (1 - p_0) = 200 \cdot (1 - 0.05) = 200 \cdot 0.95 = 190 \ge 10$.
    Conditions are met.

4.  **Test Statistic:**
    $Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}} = \frac{0.075 - 0.05}{\sqrt{\frac{0.05(1-0.05)}{200}}} = \frac{0.025}{\sqrt{\frac{0.05 \cdot 0.95}{200}}} = \frac{0.025}{\sqrt{\frac{0.0475}{200}}} = \frac{0.025}{\sqrt{0.0002375}} \approx \frac{0.025}{0.01541} \approx 1.62$

5.  **Decision:**
    *   This is a right-tailed test ($H_a: p > 0.05$).
    *   Significance level $\alpha = 0.05$.
    *   Using critical value: The critical z-value for $\alpha = 0.05$ in a right-tailed test is $z_{0.05} \approx 1.645$.
    *   Since our calculated test statistic $Z = 1.62$ is not greater than or equal to the critical value $1.645$, we fail to reject $H_0$.
    *   Using p-value: $P(Z \ge 1.62) \approx 0.0526$. Since $0.0526 > 0.05$, we fail to reject $H_0$.

6.  **Conclusion:**
    At the 0.05 significance level, there is not enough evidence to conclude that the proportion of defective components is greater than 5%.

---

### 3. Hypothesis Testing for a Population Proportion with Small Samples

When the sample size is small, the normal approximation to the binomial distribution may not be accurate. In such cases, we use the **exact binomial test**.

**Conditions for Exact Binomial Test:**

The exact binomial test can be used for any sample size, but it is particularly useful when the conditions for the normal approximation ($np_0 \ge 10$ and $n(1-p_0) \ge 10$) are not met.

**The Exact Binomial Test:**

For a test concerning a population proportion $p$, the null hypothesis is $H_0: p = p_0$.
We observe $x$ successes in a sample of size $n$. The sample proportion is $\hat{p} = x/n$.

*   **To calculate the p-value for a specific outcome:**
    *   **Right-tailed test ($H_a: p > p_0$):** The p-value is the probability of observing a sample proportion as large as or larger than the observed $\hat{p}$, assuming $p = p_0$.
        $P(X \ge x | n, p_0) = \sum_{k=x}^{n} \binom{n}{k} p_0^k (1-p_0)^{n-k}$
    *   **Left-tailed test ($H_a: p < p_0$):** The p-value is the probability of observing a sample proportion as small as or smaller than the observed $\hat{p}$, assuming $p = p_0$.
        $P(X \le x | n, p_0) = \sum_{k=0}^{x} \binom{n}{k} p_0^k (1-p_0)^{n-k}$
    *   **Two-tailed test ($H_a: p \neq p_0$):** The p-value is calculated by summing the probabilities of all outcomes that are as extreme or more extreme than the observed outcome in either tail. For discrete distributions, this can be tricky. A common approach is to sum the probabilities of outcomes with a probability less than or equal to the probability of the observed outcome. A more conservative approach is to double the smaller of the one-tailed p-values.
        $P(X \le x | n, p_0) + P(X \ge x | n, p_0)$, where probabilities are for outcomes as or more extreme.

**Important Note on the Exact Binomial Test:**
Calculating these binomial probabilities manually for larger $n$ can be cumbersome. Statistical software or calculators with binomial distribution functions are typically used.

**Example (Conceptual - illustrating small sample issues):**

Suppose a researcher claims that a new treatment is effective in curing 80% of patients. A small pilot study is conducted with 10 patients, and 7 are cured. Test the claim at $\alpha = 0.05$.

**Solution:**

1.  **Hypotheses:**
    *   $H_0: p = 0.80$ (treatment is effective in 80% of patients)
    *   $H_a: p < 0.80$ (treatment is less effective)

2.  **Sample Statistics:**
    *   Sample size $n = 10$.
    *   Number cured $x = 7$.
    *   Sample proportion $\hat{p} = 7/10 = 0.70$.

3.  **Check Conditions for Normal Approximation:**
    *   $n \cdot p_0 = 10 \cdot 0.80 = 8 < 10$.
    *   $n \cdot (1 - p_0) = 10 \cdot (1 - 0.80) = 10 \cdot 0.20 = 2 < 10$.
    The conditions for the normal approximation are not met. We should use the exact binomial test.

4.  **Exact Binomial Test (Left-tailed):**
    We need to calculate $P(X \le 7 | n=10, p=0.80)$.
    This involves summing binomial probabilities:
    $P(X \le 7) = P(X=0) + P(X=1) + ... + P(X=7)$
    where $P(X=k) = \binom{10}{k} (0.80)^k (0.20)^{10-k}$.

    Alternatively, it's easier to calculate the probability of the complementary event (the number of failures) or use statistical software. The number of failures is $n-x = 10-7 = 3$. The probability of failure is $1-p_0 = 0.20$.
    So, we are looking for $P(X \ge 7)$ with $p=0.80$, or $P(Y \le 3)$ where $Y$ is the number of failures and the probability of failure is $0.20$.
    $P(Y \le 3 | n=10, p_{failure}=0.20) = \sum_{k=0}^{3} \binom{10}{k} (0.20)^k (0.80)^{10-k}$
    $P(Y=0) = \binom{10}{0} (0.20)^0 (0.80)^{10} = 1 \cdot 1 \cdot 0.10737 = 0.10737$
    $P(Y=1) = \binom{10}{1} (0.20)^1 (0.80)^9 = 10 \cdot 0.20 \cdot 0.13422 = 0.26844$
    $P(Y=2) = \binom{10}{2} (0.20)^2 (0.80)^8 = 45 \cdot 0.04 \cdot 0.16777 = 0.30199$
    $P(Y=3) = \binom{10}{3} (0.20)^3 (0.80)^7 = 120 \cdot 0.008 \cdot 0.20972 = 0.20133$

    P-value = $P(Y \le 3) = 0.10737 + 0.26844 + 0.30199 + 0.20133 = 0.87913$

5.  **Decision:**
    Since the p-value ($0.87913$) is much greater than the significance level $\alpha = 0.05$, we fail to reject $H_0$.

6.  **Conclusion:**
    There is not enough evidence to conclude that the treatment is less effective than the claimed 80% cure rate.

**Devore (9th ed., Section 9.3):** Devore discusses approximate methods and the conditions under which they are valid. While he might not go into extensive detail on the exact binomial test calculations, he emphasizes the need for appropriate methods when approximations fail.

**Ross (6th ed., Chapter 8):** Ross also covers hypothesis testing principles and may touch upon the binomial distribution in the context of proportions, particularly for smaller sample sizes where approximations might not hold.

---

### 4. Connection to Confidence Intervals

The concept of hypothesis testing is closely related to confidence intervals. For a proportion, we can perform hypothesis testing by checking if the hypothesized proportion ($p_0$) falls within the confidence interval for the population proportion.

*   **If $p_0$ falls within the $(1-\alpha)100\%$ confidence interval for $p$, then we fail to reject $H_0$ at the $\alpha$ significance level.**
*   **If $p_0$ falls outside the $(1-\alpha)100\%$ confidence interval for $p$, then we reject $H_0$ at the $\alpha$ significance level.**

**Devore (9th ed., Chapter 8 & 9):** Devore explicitly links confidence intervals and hypothesis testing, showing how they are complementary methods of statistical inference.

**Example (using the first example's data):**

Test the claim $H_0: p \le 0.05$ vs. $H_a: p > 0.05$ at $\alpha=0.05$. We found $\hat{p}=0.075$ from $n=200$.

1.  **Calculate a 95% Confidence Interval for $p$:**
    The formula for a confidence interval for a proportion is:
    $\hat{p} \pm z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$
    For a 95% CI, $\alpha = 0.05$, so $z_{\alpha/2} = z_{0.025} = 1.96$.
    $0.075 \pm 1.96 \sqrt{\frac{0.075(1-0.075)}{200}}$
    $0.075 \pm 1.96 \sqrt{\frac{0.075 \cdot 0.925}{200}}$
    $0.075 \pm 1.96 \sqrt{\frac{0.069375}{200}}$
    $0.075 \pm 1.96 \sqrt{0.000346875}$
    $0.075 \pm 1.96 \cdot 0.01862$
    $0.075 \pm 0.0365$
    The 95% confidence interval is $(0.0385, 0.1115)$.

2.  **Decision:**
    The hypothesized value from $H_0$ is $p_0 = 0.05$.
    Since $0.05$ is within the interval $(0.0385, 0.1115)$, we fail to reject $H_0$. This aligns with our p-value approach.

**Important Point:** While this connection is strong for large samples (where the z-test and z-based confidence intervals are used), direct comparisons with exact binomial tests can be more nuanced. However, the underlying principle of checking consistency between the data and the null hypothesis remains.

---

### 5. Power of a Test (Brief Mention)

While not explicitly detailed in the topic, understanding the power of a test is crucial for a complete picture. The power of a test is the probability of correctly rejecting a false null hypothesis ($1 - \beta$, where $\beta$ is the probability of a Type II error). When designing studies or interpreting results from small samples, considering the power is important to ensure the test is sensitive enough to detect meaningful differences.

**Devore (9th ed., Section 9.4):** Devore discusses the power of tests and how it is influenced by factors like sample size, significance level, and the true value of the parameter.

---

### 6. Practice Questions

**Question 1 (Large Sample):**
A national poll reported that 58% of Americans favor stricter gun control laws. A local newspaper conducted a survey of 400 randomly selected residents and found that 210 favored stricter gun control laws. Test the claim that the proportion of residents in this locality who favor stricter gun control laws is different from the national proportion, using a significance level of $\alpha = 0.05$.

**Question 2 (Small Sample - Exact Binomial):**
A manufacturer of light bulbs claims that their bulbs have a lifespan of at least 1000 hours. A consumer group tests a sample of 15 bulbs and finds that the average lifespan is 980 hours, with a standard deviation of 50 hours. While this is about the mean, let's adapt it to proportion for practice. Suppose instead, the claim is that at least 90% of bulbs last at least 1000 hours. In a sample of 15 bulbs, 12 lasted at least 1000 hours. Test the manufacturer's claim at $\alpha = 0.05$.

**Question 3 (Conceptual Connection):**
If a 90% confidence interval for a population proportion is calculated to be (0.45, 0.55), what would be the decision regarding the null hypothesis $H_0: p = 0.60$ at a significance level of $\alpha = 0.10$? What about for $H_0: p = 0.50$?

---

### 7. Answers to Practice Questions

**Answer 1:**

1.  **Hypotheses:**
    *   $H_0: p = 0.58$
    *   $H_a: p \neq 0.58$ (two-tailed test)
2.  **Sample Statistics:**
    *   $n = 400$
    *   $x = 210$
    *   $\hat{p} = 210/400 = 0.525$
3.  **Check Conditions:**
    *   $n \cdot p_0 = 400 \cdot 0.58 = 232 \ge 10$
    *   $n \cdot (1 - p_0) = 400 \cdot (1 - 0.58) = 400 \cdot 0.42 = 168 \ge 10$
    Conditions are met.
4.  **Test Statistic:**
    $Z = \frac{0.525 - 0.58}{\sqrt{\frac{0.58(1-0.58)}{400}}} = \frac{-0.055}{\sqrt{\frac{0.58 \cdot 0.42}{400}}} = \frac{-0.055}{\sqrt{\frac{0.2436}{400}}} = \frac{-0.055}{\sqrt{0.000609}} = \frac{-0.055}{0.02468} \approx -2.23$
5.  **Decision:**
    For a two-tailed test at $\alpha = 0.05$, the critical values are $\pm 1.96$.
    Since $-2.23 \le -1.96$, we reject $H_0$.
    (P-value approach: $P(Z \le -2.23 \text{ or } Z \ge 2.23) = 2 \cdot P(Z \le -2.23) \approx 2 \cdot 0.0129 = 0.0258$. Since $0.0258 \le 0.05$, reject $H_0$.)
6.  **Conclusion:**
    There is sufficient evidence to conclude that the proportion of residents in this locality who favor stricter gun control laws is different from the national proportion.

**Answer 2:**

1.  **Hypotheses:**
    *   $H_0: p \ge 0.90$
    *   $H_a: p < 0.90$ (left-tailed test)
    *   We use $p_0 = 0.90$ for calculation.
2.  **Sample Statistics:**
    *   $n = 15$
    *   $x = 12$
    *   $\hat{p} = 12/15 = 0.80$
3.  **Check Conditions for Normal Approximation:**
    *   $n \cdot p_0 = 15 \cdot 0.90 = 13.5 \ge 10$
    *   $n \cdot (1 - p_0) = 15 \cdot (1 - 0.90) = 15 \cdot 0.10 = 1.5 < 10$
    Conditions are NOT met for normal approximation. Use Exact Binomial Test.
4.  **Exact Binomial Test (Left-tailed):**
    We need to calculate $P(X \le 12 | n=15, p=0.90)$.
    This is equivalent to $P(Y \ge 3 | n=15, p_{failure}=0.10)$, where $Y$ is the number of failures.
    $P(Y \ge 3) = 1 - P(Y \le 2) = 1 - [P(Y=0) + P(Y=1) + P(Y=2)]$
    Using a binomial probability calculator or tables for $n=15, p=0.10$:
    $P(Y=0) = \binom{15}{0}(0.10)^0(0.90)^{15} \approx 0.20589$
    $P(Y=1) = \binom{15}{1}(0.10)^1(0.90)^{14} \approx 0.34315$
    $P(Y=2) = \binom{15}{2}(0.10)^2(0.90)^{13} \approx 0.26690$
    $P(Y \le 2) \approx 0.20589 + 0.34315 + 0.26690 = 0.81594$
    P-value = $P(Y \ge 3) = 1 - 0.81594 = 0.18406$
5.  **Decision:**
    Since the p-value ($0.18406$) is greater than $\alpha = 0.05$, we fail to reject $H_0$.
6.  **Conclusion:**
    There is not enough evidence to conclude that the proportion of bulbs lasting at least 1000 hours is less than 90%.

**Answer 3:**

*   **For $H_0: p = 0.60$ at $\alpha = 0.10$:**
    The 90% confidence interval is $(0.45, 0.55)$.
    The hypothesized value $p_0 = 0.60$ falls **outside** this interval.
    Therefore, we **reject** $H_0$ at the 0.10 significance level.

*   **For $H_0: p = 0.50$ at $\alpha = 0.10$:**
    The 90% confidence interval is $(0.45, 0.55)$.
    The hypothesized value $p_0 = 0.50$ falls **inside** this interval.
    Therefore, we **fail to reject** $H_0$ at the 0.10 significance level.

---

### 8. Important Points to Remember

*   **Distinguish between large and small sample sizes:** The method of testing differs significantly. Large samples generally allow for normal approximation (z-test), while small samples require the exact binomial test.
*   **Verify conditions for approximation:** Always check the conditions ($np_0 \ge 10$ and $n(1-p_0) \ge 10$) before using the z-test for proportions.
*   **Understand the null and alternative hypotheses:** Clearly state $H_0$ and $H_a$, and identify whether the test is one-tailed or two-tailed.
*   **P-value interpretation:** A small p-value (less than $\alpha$) indicates strong evidence against $H_0$.
*   **Confidence Intervals and Hypothesis Testing:** They are complementary. If $p_0$ is outside the $(1-\alpha)100\%$ CI, reject $H_0$ at level $\alpha$.
*   **Exact Binomial Test:** Essential for small samples where normal approximation is invalid. Probabilities can be calculated using software or tables.
*   **Type I vs. Type II Errors:** Be aware of the possibility of making errors in hypothesis testing.

---

### 9. Relevance to Course Outcomes

*   **CO3: Estimate population parameters, assess their certainty with confidence intervals, and test hypotheses about population means and proportions using z-tests and the one-sample t-test.**
    This entire topic directly addresses testing hypotheses about population proportions, utilizing the z-test for large samples and providing the foundation for understanding tests for means. The connection to confidence intervals also reinforces this outcome.

---

This concludes Module 3, Topic: Tests Concerning a Population Proportion for Large and Small Samples. Remember to consult your textbooks (Devore, Sastry) and reference materials for deeper understanding and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
