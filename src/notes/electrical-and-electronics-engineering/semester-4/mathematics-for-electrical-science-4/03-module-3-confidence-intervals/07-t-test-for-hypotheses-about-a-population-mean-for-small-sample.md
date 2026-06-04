---
title: "t Test for Hypotheses about a Population Mean (for small sample)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 3: Confidence Intervals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35dad"
status: "completed"
scrapedAt: "2026-05-23T16:17:03.565Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4: Module 3: Confidence Intervals

## Topic: t Test for Hypotheses about a Population Mean (for small sample)

---

### 1. Introduction to Hypothesis Testing

Hypothesis testing is a statistical method used to make decisions about a population based on sample data. It involves formulating a null hypothesis ($H_0$) and an alternative hypothesis ($H_a$) and then using sample data to determine whether there is enough evidence to reject the null hypothesis.

**Key Concepts:**

*   **Null Hypothesis ($H_0$)**: A statement about a population parameter that is assumed to be true until evidence suggests otherwise. It typically represents no effect, no difference, or a specific claimed value.
*   **Alternative Hypothesis ($H_a$)**: A statement that contradicts the null hypothesis. It represents what we are trying to find evidence for.
*   **Test Statistic**: A value calculated from sample data that is used to decide whether to reject the null hypothesis.
*   **Significance Level ($\alpha$)**: The probability of rejecting the null hypothesis when it is actually true (Type I error). Common values are 0.05, 0.01, or 0.10.
*   **P-value**: The probability of observing a test statistic as extreme as, or more extreme than, the one calculated from the sample, assuming the null hypothesis is true.
*   **Rejection Region**: The set of values for the test statistic that leads to the rejection of the null hypothesis.

**Alignment with Course Outcomes:**

This section directly supports **CO3: Estimate population parameters, assess their certainty with confidence intervals, and test hypotheses about population means and proportions using z-tests and the one-sample t-test.** We are introducing the fundamental concepts of hypothesis testing, which is a core component of this outcome.

---

### 2. The t-Distribution

When the population standard deviation ($\sigma$) is unknown and the sample size ($n$) is small (typically $n < 30$), we use the t-distribution instead of the z-distribution for hypothesis testing about a population mean.

**Key Concepts:**

*   **t-Distribution**: A probability distribution that is similar to the normal distribution but has heavier tails. This accounts for the increased uncertainty due to estimating the population standard deviation from the sample.
*   **Degrees of Freedom (df)**: A parameter that defines the shape of the t-distribution. For a one-sample t-test, the degrees of freedom are calculated as $df = n - 1$, where $n$ is the sample size. As the degrees of freedom increase, the t-distribution approaches the standard normal distribution.

**Characteristics of the t-Distribution:**

*   It is symmetric about zero.
*   It is bell-shaped, but with heavier tails than the normal distribution.
*   The mean, median, and mode are all zero.
*   The variance is $\frac{\nu}{\nu - 2}$ for $\nu > 2$, where $\nu$ is the degrees of freedom.

**Reference:**

*   **Devore (9th ed.)**: Chapter 9, "Hypothesis Testing," discusses the t-distribution extensively when dealing with small samples and unknown population standard deviation.
*   **Veerarajan (3rd ed.)**: Chapter 12, "Tests of Significance," will also cover the t-distribution and its applications in hypothesis testing.

**Alignment with Course Outcomes:**

This section is crucial for **CO3** as it introduces the specific statistical tool (t-distribution) required for hypothesis testing when dealing with small samples and unknown population standard deviation, as mentioned in the outcome.

---

### 3. Hypothesis Testing for a Population Mean ($\mu$) with Unknown $\sigma$ (Small Sample)

This procedure is used to test claims about the population mean when the population standard deviation is unknown and the sample size is small. We assume that the population from which the sample is drawn is approximately normally distributed.

**Assumptions:**

1.  **Random Sample**: The sample is a simple random sample from the population.
2.  **Independence**: Individual observations are independent.
3.  **Normality**: The population from which the sample is drawn is approximately normally distributed. For small samples, this assumption is particularly important.

**Steps for Performing a One-Sample t-Test:**

1.  **State the Hypotheses:**
    *   **Null Hypothesis ($H_0$)**: $\mu = \mu_0$ (where $\mu_0$ is the hypothesized population mean).
    *   **Alternative Hypothesis ($H_a$)**: This can be one of three forms:
        *   $\mu > \mu_0$ (Right-tailed test)
        *   $\mu < \mu_0$ (Left-tailed test)
        *   $\mu \neq \mu_0$ (Two-tailed test)

2.  **Calculate the Test Statistic:**
    The test statistic for a one-sample t-test is given by:
    $$ t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} $$
    where:
    *   $\bar{x}$ is the sample mean.
    *   $\mu_0$ is the hypothesized population mean.
    *   $s$ is the sample standard deviation.
    *   $n$ is the sample size.

3.  **Determine the Degrees of Freedom:**
    $$ df = n - 1 $$

4.  **Determine the Critical Value(s) or P-value:**

    *   **Critical Value Approach:**
        *   Based on the significance level ($\alpha$) and the alternative hypothesis, find the critical t-value(s) from the t-distribution table.
        *   For a right-tailed test: $t_{\alpha, df}$
        *   For a left-tailed test: $-t_{\alpha, df}$
        *   For a two-tailed test: $\pm t_{\alpha/2, df}$

    *   **P-value Approach:**
        *   Calculate the p-value associated with the computed t-statistic and degrees of freedom. This is the probability of observing a test statistic as extreme as, or more extreme than, the one calculated.
        *   Most statistical software can directly provide the p-value.

5.  **Make a Decision:**

    *   **Critical Value Approach:**
        *   If the calculated t-statistic falls into the rejection region (i.e., is greater than the critical value for a right-tailed test, less than the critical value for a left-tailed test, or outside the $\pm$ critical values for a two-tailed test), reject $H_0$.
        *   Otherwise, fail to reject $H_0$.

    *   **P-value Approach:**
        *   If $P\text{-value} \le \alpha$, reject $H_0$.
        *   If $P\text{-value} > \alpha$, fail to reject $H_0$.

6.  **Interpret the Results:**
    State the conclusion in the context of the problem, making sure to mention the significance level.

**Example:**

An electrical engineer wants to test if the mean resistance of a batch of resistors produced by a new process is significantly different from the target value of 100 ohms. A random sample of 15 resistors is taken, and the sample mean resistance is found to be 102.5 ohms with a sample standard deviation of 4.0 ohms. Use a significance level of $\alpha = 0.05$.

**Solution:**

1.  **Hypotheses:**
    *   $H_0: \mu = 100$
    *   $H_a: \mu \neq 100$ (Two-tailed test)

2.  **Test Statistic:**
    *   $\bar{x} = 102.5$
    *   $\mu_0 = 100$
    *   $s = 4.0$
    *   $n = 15$
    $$ t = \frac{102.5 - 100}{4.0 / \sqrt{15}} = \frac{2.5}{4.0 / 3.873} = \frac{2.5}{1.033} \approx 2.42 $$

3.  **Degrees of Freedom:**
    *   $df = n - 1 = 15 - 1 = 14$

4.  **Critical Value:**
    *   For a two-tailed test with $\alpha = 0.05$ and $df = 14$, the critical t-values are $\pm t_{0.025, 14}$.
    *   Looking up in a t-distribution table, $t_{0.025, 14} \approx 2.145$.
    *   The rejection region is $t < -2.145$ or $t > 2.145$.

5.  **Decision:**
    *   Our calculated test statistic $t \approx 2.42$ is greater than the critical value $2.145$.
    *   Therefore, we reject $H_0$.

6.  **Interpretation:**
    *   At the 0.05 significance level, there is sufficient evidence to conclude that the mean resistance of the resistors produced by the new process is significantly different from 100 ohms.

**Reference:**

*   **Devore (9th ed.)**: Chapter 9, Section 9.3, "Hypothesis Testing for a Population Mean (Unknown $\sigma$)," provides detailed examples and explanations.
*   **Veerarajan (3rd ed.)**: Chapter 12, Section 12.4, "Tests of Significance for Small Samples," will cover the t-test procedure.

**Alignment with Course Outcomes:**

This section directly addresses **CO3** by detailing the procedure for testing hypotheses about population means using the one-sample t-test.

---

### 4. Types of Errors in Hypothesis Testing

When conducting a hypothesis test, there are two types of errors we can make:

*   **Type I Error**: Rejecting the null hypothesis ($H_0$) when it is actually true. The probability of making a Type I error is denoted by $\alpha$ (the significance level).
*   **Type II Error**: Failing to reject the null hypothesis ($H_0$) when it is actually false. The probability of making a Type II error is denoted by $\beta$.

**Relationship between $\alpha$ and $\beta$**:

*   For a fixed sample size, decreasing $\alpha$ (making it harder to reject $H_0$) will generally increase $\beta$ (making it harder to detect a false $H_0$).
*   Increasing the sample size ($n$) can decrease both $\alpha$ and $\beta$.

**Power of a Test**:

The power of a test is the probability of correctly rejecting a false null hypothesis. It is calculated as $1 - \beta$.

**Reference:**

*   **Devore (9th ed.)**: Chapter 9, Section 9.2, "Hypothesis Testing -- The Logic," discusses Type I and Type II errors.
*   **Veerarajan (3rd ed.)**: Chapter 12, Section 12.2, "Type I and Type II Errors," provides a clear explanation of these concepts.

**Alignment with Course Outcomes:**

Understanding the types of errors is fundamental to interpreting the results of hypothesis tests, thus supporting **CO3**. It helps in understanding the certainty (or lack thereof) of our conclusions.

---

### 5. Relationship between Confidence Intervals and Hypothesis Tests

There is a direct relationship between constructing a confidence interval and performing a hypothesis test for a population mean.

*   **For a Two-Tailed Test:**
    If a $(1-\alpha) \times 100\%$ confidence interval for $\mu$ contains the hypothesized value $\mu_0$, then we fail to reject $H_0: \mu = \mu_0$ at the $\alpha$ significance level.
    If the confidence interval does *not* contain $\mu_0$, then we reject $H_0: \mu = \mu_0$ at the $\alpha$ significance level.

**Why this works:**

A $(1-\alpha) \times 100\%$ confidence interval provides a range of plausible values for the population mean $\mu$. If $\mu_0$ is within this range, it is a plausible value, and we don't have enough evidence to reject $H_0$. If $\mu_0$ is outside this range, it is considered implausible, and we have enough evidence to reject $H_0$.

**Example (Continuing the resistor example):**

Let's construct a 95% confidence interval for the mean resistance from the previous example.
*   $\bar{x} = 102.5$, $s = 4.0$, $n = 15$, $df = 14$.
*   For a 95% confidence interval, $\alpha = 0.05$. We need $t_{\alpha/2, df} = t_{0.025, 14} \approx 2.145$.
*   The confidence interval is:
    $$ \bar{x} \pm t_{\alpha/2, df} \times \frac{s}{\sqrt{n}} $$
    $$ 102.5 \pm 2.145 \times \frac{4.0}{\sqrt{15}} $$
    $$ 102.5 \pm 2.145 \times 1.033 $$
    $$ 102.5 \pm 2.216 $$
    The 95% confidence interval is $(100.284, 104.716)$.

**Comparison with Hypothesis Test:**

*   The hypothesized value $\mu_0 = 100$ is *not* within the 95% confidence interval $(100.284, 104.716)$.
*   This aligns with our hypothesis test result, where we rejected $H_0: \mu = 100$ at $\alpha = 0.05$.

**Reference:**

*   **Devore (9th ed.)**: Chapter 9, Section 9.5, "The Relationship Between Confidence Intervals and Hypothesis Tests," discusses this connection.
*   **Veerarajan (3rd ed.)**: Chapter 12, Section 12.6, "Relationship Between Confidence Intervals and Tests of Hypotheses," will also cover this.

**Alignment with Course Outcomes:**

This section explicitly connects hypothesis testing with confidence intervals, which is a key aspect of **CO3**. It reinforces the understanding of how these two statistical tools are related and can be used to draw similar conclusions.

---

### 6. Important Points to Remember

*   **Small Sample Size and Unknown $\sigma$**: The t-test is specifically designed for situations where the sample size is small and the population standard deviation is unknown.
*   **Normality Assumption**: The t-test relies on the assumption that the underlying population is approximately normally distributed. If the sample size is large, the Central Limit Theorem can often compensate for non-normality, but for small samples, this assumption is critical.
*   **Degrees of Freedom**: Always calculate the correct degrees of freedom ($df = n-1$) for the t-test. This is essential for finding the correct critical values or p-values.
*   **Type of Test**: Clearly identify whether the test is one-tailed (left or right) or two-tailed, as this determines how you set up your hypotheses and find critical values/interpret p-values.
*   **Interpretation**: Always interpret your results in the context of the original problem, including the chosen significance level.
*   **P-value vs. Critical Value**: Both approaches to hypothesis testing (p-value and critical value) should lead to the same conclusion.

**Alignment with Course Outcomes:**

These reminders reinforce the practical application of the t-test as described in **CO3**, ensuring students understand the conditions and mechanics of the procedure.

---

### 7. Practice Questions

**Question 1:**

A sample of 10 silicon wafers from a semiconductor manufacturing process has an average thickness of 0.50 mm with a standard deviation of 0.02 mm. Test the hypothesis that the mean thickness of wafers produced by this process is equal to 0.51 mm, using a significance level of $\alpha = 0.01$. Assume the thickness of wafers is approximately normally distributed.

**Question 2:**

A researcher is testing a new algorithm for signal processing, claiming it reduces noise by an average of 5 dB. A sample of 12 trials yields a mean noise reduction of 4.2 dB with a sample standard deviation of 1.0 dB. Is there sufficient evidence to support the researcher's claim at a significance level of $\alpha = 0.05$? Assume noise reduction is normally distributed.

**Question 3:**

Suppose you want to construct a 90% confidence interval for the mean voltage of a power supply based on a sample of 16 readings. The sample mean voltage is 11.9 V and the sample standard deviation is 0.3 V.
a) Calculate the 90% confidence interval for the mean voltage.
b) If the manufacturer claims the mean voltage is 12.0 V, what conclusion can you draw regarding this claim based on your confidence interval at a significance level of $\alpha = 0.10$?

---

### 8. Answers to Practice Questions

**Answer 1:**

1.  **Hypotheses:**
    *   $H_0: \mu = 0.51$
    *   $H_a: \mu \neq 0.51$ (Two-tailed test)
2.  **Test Statistic:**
    *   $\bar{x} = 0.50$, $\mu_0 = 0.51$, $s = 0.02$, $n = 10$
    $$ t = \frac{0.50 - 0.51}{0.02 / \sqrt{10}} = \frac{-0.01}{0.02 / 3.162} = \frac{-0.01}{0.00632} \approx -1.58 $$
3.  **Degrees of Freedom:** $df = 10 - 1 = 9$
4.  **Critical Value:** For $\alpha = 0.01$ and $df = 9$ (two-tailed), $t_{0.005, 9} \approx 3.250$. Rejection region: $t < -3.250$ or $t > 3.250$.
5.  **Decision:** The calculated $t$-statistic ($-1.58$) does not fall in the rejection region. Fail to reject $H_0$.
6.  **Interpretation:** At the 0.01 significance level, there is not enough evidence to conclude that the mean wafer thickness is different from 0.51 mm.

**Answer 2:**

1.  **Hypotheses:**
    *   $H_0: \mu = 5$ (The mean noise reduction is 5 dB)
    *   $H_a: \mu < 5$ (The mean noise reduction is less than 5 dB - researcher's claim implies an *improvement*, which would be a reduction *greater* than 5dB if noise is positive, or if the "reduction" value is interpreted as the amount by which noise is reduced. However, the wording "reduces noise by an average of 5 dB" implies $\mu=5$. If the researcher claims their algorithm *achieves* the claimed reduction, we test if it's at least 5. Let's assume the claim is that the average reduction *is* 5 dB and we want to see if it's *less* than claimed if it performs poorly, or *more* if it performs exceptionally well. The most standard interpretation for "claiming it reduces noise by an average of 5 dB" is to test $\mu=5$ against $\mu \neq 5$. However, the question asks if there's evidence to support the claim. If we found $\bar{x} < 5$, it would suggest the claim isn't met. Let's frame it to test if the reduction is *at least* 5 dB.
    *   Revised Hypotheses for testing if the new algorithm *meets or exceeds* the claimed reduction:
        *   $H_0: \mu \ge 5$
        *   $H_a: \mu < 5$ (Left-tailed test - if we find evidence of less than 5 dB reduction, we reject the claim.)
        *   Alternatively, if the researcher claims the average reduction is *exactly* 5 dB, and we want to see if it deviates:
        *   $H_0: \mu = 5$
        *   $H_a: \mu \neq 5$ (Two-tailed test)

    Let's proceed with the common interpretation: testing if the sample provides evidence that the true mean is different from the claimed value.

    *   $H_0: \mu = 5$
    *   $H_a: \mu \neq 5$ (Two-tailed test)

2.  **Test Statistic:**
    *   $\bar{x} = 4.2$, $\mu_0 = 5$, $s = 1.0$, $n = 12$
    $$ t = \frac{4.2 - 5}{1.0 / \sqrt{12}} = \frac{-0.8}{1.0 / 3.464} = \frac{-0.8}{0.289} \approx -2.77 $$
3.  **Degrees of Freedom:** $df = 12 - 1 = 11$
4.  **Critical Value:** For $\alpha = 0.05$ and $df = 11$ (two-tailed), $t_{0.025, 11} \approx 2.201$. Rejection region: $t < -2.201$ or $t > 2.201$.
5.  **Decision:** The calculated $t$-statistic ($-2.77$) falls into the rejection region ($t < -2.201$). Reject $H_0$.
6.  **Interpretation:** At the 0.05 significance level, there is sufficient evidence to conclude that the mean noise reduction achieved by the new algorithm is significantly different from the claimed 5 dB. In fact, the sample data suggests the mean reduction is *less* than 5 dB.

**Answer 3:**

a) **90% Confidence Interval:**
    *   $\bar{x} = 11.9$ V, $s = 0.3$ V, $n = 16$.
    *   For 90% confidence, $\alpha = 0.10$. $df = 16 - 1 = 15$.
    *   $t_{\alpha/2, df} = t_{0.05, 15} \approx 1.753$ (from t-table).
    *   Confidence Interval:
        $$ \bar{x} \pm t_{\alpha/2, df} \times \frac{s}{\sqrt{n}} $$
        $$ 11.9 \pm 1.753 \times \frac{0.3}{\sqrt{16}} $$
        $$ 11.9 \pm 1.753 \times \frac{0.3}{4} $$
        $$ 11.9 \pm 1.753 \times 0.075 $$
        $$ 11.9 \pm 0.131 $$
    *   The 90% confidence interval is $(11.769, 12.031)$ V.

b) **Conclusion regarding the claim $\mu = 12.0$ V:**
    *   The hypothesized value $\mu_0 = 12.0$ V is within the 90% confidence interval $(11.769, 12.031)$ V.
    *   Therefore, at the $\alpha = 0.10$ significance level, we **fail to reject** the null hypothesis that the mean voltage is 12.0 V. There is not enough evidence to conclude that the mean voltage differs from the manufacturer's claim.

---

This module provides the foundational understanding for testing claims about population means, particularly when dealing with the practical scenario of small sample sizes and unknown population variances. The t-test is a critical tool in a statistician's or engineer's arsenal.
