---
title: "z Tests for Hypotheses about a Population Mean (for large sample)"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ecd"
status: "completed"
scrapedAt: "2026-05-20T17:54:48.924Z"
---
# Mathematics for Physical Science – 4: Module 3: Confidence Intervals

## Topic: z-Tests for Hypotheses about a Population Mean (for large samples)

---

### 1. Introduction to Hypothesis Testing

Hypothesis testing is a statistical method used to make decisions about a population based on sample data. It involves formulating two competing statements about a population parameter (e.g., the population mean, $\mu$) and then using sample data to determine which statement is more likely to be true.

**Key Concepts:**

*   **Population Parameter:** A numerical characteristic of a population (e.g., $\mu$ for population mean, $\sigma$ for population standard deviation).
*   **Sample Statistic:** A numerical characteristic of a sample (e.g., $\bar{x}$ for sample mean, $s$ for sample standard deviation).
*   **Null Hypothesis ($H_0$):** A statement about the population parameter that is assumed to be true until evidence suggests otherwise. It typically states that there is no effect, no difference, or no relationship.
*   **Alternative Hypothesis ($H_a$ or $H_1$):** A statement that contradicts the null hypothesis. It represents what we are trying to find evidence for.
*   **Test Statistic:** A value calculated from sample data that is used to decide whether to reject or fail to reject the null hypothesis.
*   **Significance Level ($\alpha$):** The probability of rejecting the null hypothesis when it is actually true (Type I error). Commonly set at 0.05, 0.01, or 0.10.
*   **P-value:** The probability of observing a test statistic as extreme as, or more extreme than, the one computed from the sample, assuming the null hypothesis is true.

**Alignment with Course Outcomes:**

This topic directly addresses **CO3: Estimate population parameters, assess their certainty with confidence intervals, and test hypotheses about population means and proportions using z-tests and the one-sample t-test.** Specifically, it focuses on testing hypotheses about population means using z-tests for large samples. (Knowledge Level: K3)

---

### 2. z-Test for a Population Mean ($\mu$) when $\sigma$ is Known (or large sample size)

When we have a large sample size ($n \ge 30$), the Central Limit Theorem (CLT) states that the sampling distribution of the sample mean ($\bar{x}$) will be approximately normally distributed, regardless of the shape of the population distribution. This allows us to use the z-distribution, even if the population standard deviation ($\sigma$) is unknown and we have to estimate it using the sample standard deviation ($s$).

**Assumptions:**

1.  The sample is a random sample from the population.
2.  The sample size is large ($n \ge 30$).
3.  The population standard deviation ($\sigma$) is known, OR if $\sigma$ is unknown, the sample size is large enough to use the sample standard deviation ($s$) as a reliable estimate of $\sigma$.

**The Test Statistic:**

The z-test statistic for a population mean is calculated as:

$$z = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$$

Where:
*   $\bar{x}$ is the sample mean.
*   $\mu_0$ is the hypothesized population mean under the null hypothesis.
*   $s$ is the sample standard deviation.
*   $n$ is the sample size.

**Note:** If the population standard deviation $\sigma$ is known, we can use $\sigma$ in the denominator instead of $s$. However, for large samples, the distinction becomes less critical as $s$ is a good estimator of $\sigma$.

**Types of Alternative Hypotheses and Corresponding Tests:**

The structure of the alternative hypothesis determines whether we use a one-tailed (left or right) or two-tailed test.

*   **Two-Tailed Test:**
    *   $H_0: \mu = \mu_0$
    *   $H_a: \mu \neq \mu_0$
    *   We reject $H_0$ if $|z| > z_{\alpha/2}$, where $z_{\alpha/2}$ is the critical z-value such that the area in the tail beyond it is $\alpha/2$.

*   **Right-Tailed Test:**
    *   $H_0: \mu \le \mu_0$
    *   $H_a: \mu > \mu_0$
    *   We reject $H_0$ if $z > z_{\alpha}$, where $z_{\alpha}$ is the critical z-value such that the area in the tail beyond it is $\alpha$.

*   **Left-Tailed Test:**
    *   $H_0: \mu \ge \mu_0$
    *   $H_a: \mu < \mu_0$
    *   We reject $H_0$ if $z < -z_{\alpha}$, where $-z_{\alpha}$ is the critical z-value such that the area in the tail to its left is $\alpha$.

**Decision Rule:**

We compare the calculated test statistic ($z$) with the critical z-value(s) determined by the significance level ($\alpha$) and the type of test.

*   **Critical Value Approach:** Reject $H_0$ if the test statistic falls into the rejection region (i.e., it exceeds the critical value for a right-tailed test, is less than the critical value for a left-tailed test, or its absolute value exceeds the critical value for a two-tailed test).
*   **P-value Approach:** Reject $H_0$ if the p-value is less than or equal to the significance level ($\alpha$).

**Procedure for Conducting a z-Test:**

1.  **State the Null and Alternative Hypotheses:** Clearly define $H_0$ and $H_a$.
2.  **Choose the Significance Level ($\alpha$):** Typically 0.05.
3.  **Calculate the Test Statistic:** Use the formula $z = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$.
4.  **Determine the Critical Value(s) or P-value:**
    *   **Critical Value:** Find the z-value from the standard normal distribution table corresponding to $\alpha$ (for one-tailed tests) or $\alpha/2$ (for two-tailed tests).
    *   **P-value:** Calculate the probability of obtaining a test statistic as extreme as or more extreme than the observed one, assuming $H_0$ is true.
5.  **Make a Decision:**
    *   **Critical Value Approach:** If the test statistic falls in the rejection region, reject $H_0$. Otherwise, fail to reject $H_0$.
    *   **P-value Approach:** If p-value $\le \alpha$, reject $H_0$. Otherwise, fail to reject $H_0$.
6.  **Interpret the Results:** State the conclusion in the context of the problem.

**Relevance to Textbooks:**

*   **Devore J. L. (9th ed., 2016):** Chapter 9, "Hypothesis Testing," specifically covers the procedures and concepts of hypothesis testing for population means using z-tests and t-tests. Section 9.2 would be particularly relevant for z-tests for means with known $\sigma$ or large samples where $s$ is used.
*   **Sastry S. S. (5th ed., 2012):** While Sastry's book focuses on numerical analysis, it might touch upon statistical concepts in areas related to data analysis or modeling. However, hypothesis testing for means is more directly covered in dedicated statistics textbooks.

---

### 3. Example: Testing a claim about average material strength

**Problem:** A researcher claims that the average tensile strength of a new alloy is 500 MPa. A sample of 40 specimens of this alloy was tested, and the sample mean tensile strength was found to be 515 MPa with a sample standard deviation of 25 MPa. At a significance level of $\alpha = 0.05$, is there sufficient evidence to reject the researcher's claim?

**Solution:**

1.  **State the Hypotheses:**
    *   $H_0: \mu = 500$ MPa (The average tensile strength is 500 MPa)
    *   $H_a: \mu \neq 500$ MPa (The average tensile strength is not 500 MPa)
    *   This is a two-tailed test.

2.  **Significance Level:**
    *   $\alpha = 0.05$

3.  **Calculate the Test Statistic:**
    *   $\bar{x} = 515$ MPa
    *   $\mu_0 = 500$ MPa
    *   $s = 25$ MPa
    *   $n = 40$

    $$z = \frac{515 - 500}{25 / \sqrt{40}} = \frac{15}{25 / 6.3246} = \frac{15}{3.9528} \approx 3.79$$

4.  **Determine the Critical Value:**
    *   For a two-tailed test with $\alpha = 0.05$, we need $z_{\alpha/2} = z_{0.025}$.
    *   Looking up the standard normal distribution table, $z_{0.025} \approx 1.96$.
    *   The rejection region is $|z| > 1.96$.

5.  **Make a Decision:**
    *   The calculated test statistic is $z \approx 3.79$.
    *   Since $|3.79| > 1.96$, the test statistic falls into the rejection region.
    *   Therefore, we reject the null hypothesis ($H_0$).

6.  **Interpret the Results:**
    *   At the 0.05 significance level, there is sufficient evidence to reject the researcher's claim that the average tensile strength of the new alloy is 500 MPa. The sample data suggests that the average tensile strength is significantly different from 500 MPa.

---

### 4. Relationship to Confidence Intervals

The concept of hypothesis testing is closely related to confidence intervals. For a two-tailed test, if the hypothesized population mean ($\mu_0$) falls within the $(1-\alpha)100\%$ confidence interval for $\mu$, then we fail to reject $H_0$. Conversely, if $\mu_0$ falls outside the confidence interval, we reject $H_0$.

**Example:** For the previous problem, we can construct a 95% confidence interval for the population mean tensile strength:

*   $CI = \bar{x} \pm z_{\alpha/2} \frac{s}{\sqrt{n}}$
*   $CI = 515 \pm 1.96 \frac{25}{\sqrt{40}}$
*   $CI = 515 \pm 1.96 \times 3.9528$
*   $CI = 515 \pm 7.7475$
*   $CI = (507.25, 522.75)$

Since the hypothesized mean $\mu_0 = 500$ MPa is *not* within this confidence interval (500 < 507.25), we reject the null hypothesis. This aligns with the result from the z-test.

**Alignment with Course Outcomes:**

This connection reinforces **CO3: Estimate population parameters, assess their certainty with confidence intervals, and test hypotheses about population means and proportions using z-tests and the one-sample t-test.** (Knowledge Level: K3)

---

### 5. Practice Questions and Exercises

**Question 1:**
A manufacturer claims that the average lifespan of their light bulbs is 1200 hours. A sample of 50 light bulbs was tested, and the sample mean lifespan was 1180 hours with a sample standard deviation of 60 hours. Test the manufacturer's claim at a significance level of $\alpha = 0.01$.

**Question 2:**
A new teaching method is introduced in a university, and it is hypothesized that it will improve the average score of students in a particular subject from the previous average of 75. A sample of 35 students taught with the new method achieved an average score of 78 with a standard deviation of 8. Is there sufficient evidence to conclude that the new teaching method improves the average score? Use $\alpha = 0.05$.

**Question 3:**
A pharmaceutical company claims that its new drug reduces blood pressure by an average of at least 10 mmHg. A study with 45 patients using the drug found an average reduction of 9.5 mmHg with a standard deviation of 2 mmHg. At a significance level of $\alpha = 0.05$, is there evidence to support the company's claim?

---

### 6. Answers to Practice Questions

**Answer 1:**
*   $H_0: \mu = 1200$ hours
*   $H_a: \mu \neq 1200$ hours
*   $\alpha = 0.01$
*   $\bar{x} = 1180$, $s = 60$, $n = 50$
*   $z = \frac{1180 - 1200}{60 / \sqrt{50}} = \frac{-20}{60 / 7.071} = \frac{-20}{8.485} \approx -2.357$
*   For a two-tailed test with $\alpha = 0.01$, $z_{0.005} \approx 2.576$.
*   Decision: $|-2.357| < 2.576$. Fail to reject $H_0$.
*   Conclusion: There is not enough evidence at the 0.01 significance level to reject the manufacturer's claim that the average lifespan of their light bulbs is 1200 hours.

**Answer 2:**
*   $H_0: \mu \le 75$ (The new method does not improve the average score)
*   $H_a: \mu > 75$ (The new method improves the average score)
*   $\alpha = 0.05$
*   $\bar{x} = 78$, $s = 8$, $n = 35$
*   $z = \frac{78 - 75}{8 / \sqrt{35}} = \frac{3}{8 / 5.916} = \frac{3}{1.352} \approx 2.219$
*   For a right-tailed test with $\alpha = 0.05$, $z_{0.05} \approx 1.645$.
*   Decision: $2.219 > 1.645$. Reject $H_0$.
*   Conclusion: At the 0.05 significance level, there is sufficient evidence to conclude that the new teaching method improves the average score.

**Answer 3:**
*   $H_0: \mu \ge 10$ mmHg (The drug reduces blood pressure by at least 10 mmHg)
*   $H_a: \mu < 10$ mmHg (The drug reduces blood pressure by less than 10 mmHg)
*   $\alpha = 0.05$
*   $\bar{x} = 9.5$, $s = 2$, $n = 45$
*   $z = \frac{9.5 - 10}{2 / \sqrt{45}} = \frac{-0.5}{2 / 6.708} = \frac{-0.5}{0.298} \approx -1.678$
*   For a left-tailed test with $\alpha = 0.05$, $-z_{0.05} \approx -1.645$.
*   Decision: $-1.678 < -1.645$. Reject $H_0$.
*   Conclusion: At the 0.05 significance level, there is evidence to suggest that the drug reduces blood pressure by less than the claimed 10 mmHg on average.

---

### 7. Important Points to Remember

*   **Large Sample Assumption:** The z-test for the mean is appropriate for large samples ($n \ge 30$) because the Central Limit Theorem ensures the sampling distribution of the mean is approximately normal.
*   **Known $\sigma$ vs. Unknown $\sigma$:** When $\sigma$ is known, the z-test is theoretically exact. When $\sigma$ is unknown and $n$ is large, we use the sample standard deviation ($s$) as an estimate for $\sigma$, and the z-test is still considered a good approximation. For small samples with unknown $\sigma$, the t-test should be used.
*   **Hypothesis Formulation:** Carefully state the null ($H_0$) and alternative ($H_a$) hypotheses. The null hypothesis is the statement of no effect or status quo, while the alternative is what we are trying to find evidence for.
*   **Type of Test:** The direction of the inequality in the alternative hypothesis determines whether it's a one-tailed (left or right) or two-tailed test.
*   **Significance Level ($\alpha$):** This is the risk of a Type I error (rejecting a true $H_0$). It must be set *before* conducting the test.
*   **P-value:** A smaller p-value indicates stronger evidence against the null hypothesis. If p-value $\le \alpha$, reject $H_0$.
*   **Contextual Interpretation:** Always interpret the statistical conclusion in the context of the original problem.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 8. Further Reading and References

*   **Devore J. L. (2016).** *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Focus on Chapters 8 and 9 for confidence intervals and hypothesis testing.)
*   **Ross, S. M. (2020).** *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press. (Provides a strong foundation in statistical inference, including hypothesis testing for means.)
*   **Papoulis, A., & Pillai, S. U. (2002).** *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill. (While more advanced, it provides the theoretical underpinnings of probability and random variables relevant to statistical inference.)
*   **Sastry, S. S. (2012).** *Introductory Methods of Numerical Analysis* (5th ed.). PHI Learning Pvt Limited. (Useful for understanding the computational aspects that might underlie statistical software but less direct on hypothesis testing methodology.)
*   **Chapra, S. C., & Canale, R. P. (2021).** *Numerical Methods for Engineers* (8th ed.). McGraw Hill Education. (Similar to Sastry, relevant for computational aspects.)

This module provides a foundational understanding of hypothesis testing for population means using z-tests, a crucial tool in analyzing scientific data.