---
title: "t Test for Hypotheses about a Population Mean (for small sample)"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ece"
status: "completed"
scrapedAt: "2026-05-20T17:54:49.639Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 3: Confidence Intervals
## Topic: t Test for Hypotheses about a Population Mean (for small sample)

---

### **1. Introduction to Hypothesis Testing**

**Definition:** Hypothesis testing is a statistical method used to determine whether there is enough evidence in a sample of data to infer that a certain condition is true for the entire population. It involves formulating two competing statements about a population parameter, known as the null hypothesis ($H_0$) and the alternative hypothesis ($H_1$).

**Key Concepts:**
*   **Null Hypothesis ($H_0$):** A statement about a population parameter that is assumed to be true until evidence suggests otherwise. It typically represents the status quo or no effect.
*   **Alternative Hypothesis ($H_1$ or $H_a$):** A statement that contradicts the null hypothesis. It represents what we are trying to find evidence for.
*   **Test Statistic:** A value calculated from sample data that is used to decide whether to reject or fail to reject the null hypothesis.
*   **Significance Level ($\alpha$):** The probability of rejecting the null hypothesis when it is actually true (Type I error). Commonly set at 0.05 or 0.01.
*   **P-value:** The probability of observing a test statistic as extreme as, or more extreme than, the one computed from the sample data, assuming the null hypothesis is true.
*   **Decision Rule:**
    *   If the p-value is less than or equal to $\alpha$, we reject $H_0$.
    *   If the p-value is greater than $\alpha$, we fail to reject $H_0$.

**Types of Errors:**
*   **Type I Error:** Rejecting a true null hypothesis. The probability of this error is $\alpha$.
*   **Type II Error:** Failing to reject a false null hypothesis. The probability of this error is denoted by $\beta$.

**Relevance to Physical Science:** Hypothesis testing is crucial for validating scientific theories, experimental results, and making inferences about physical phenomena based on limited measurements. For example, testing if a new material's conductivity is significantly different from a standard material.

---

### **2. The t-Distribution: When Population Standard Deviation is Unknown (Small Samples)**

When the population standard deviation ($\sigma$) is unknown and the sample size is small (typically $n < 30$), we use the t-distribution instead of the z-distribution.

**Key Concepts:**
*   **Student's t-distribution:** A probability distribution that is symmetrical and bell-shaped, similar to the normal distribution, but with heavier tails. It is used when the population standard deviation is unknown and the sample size is small.
*   **Degrees of Freedom (df):** A parameter that characterizes the shape of the t-distribution. For a one-sample t-test, $df = n - 1$, where $n$ is the sample size. As the degrees of freedom increase, the t-distribution approaches the standard normal (z) distribution.

**Properties of the t-Distribution:**
*   It is symmetrical about zero.
*   The mean, median, and mode are all zero.
*   The total area under the curve is 1.
*   The shape depends on the degrees of freedom. As df increases, the tails become lighter.
*   It is wider than the standard normal distribution, especially for small df.

**Reference:** Devore, J. L. (2016) extensively covers the t-distribution in Chapter 8, focusing on its use in hypothesis testing and confidence intervals when $\sigma$ is unknown.

---

### **3. The One-Sample t-Test for a Population Mean**

This test is used to determine if there is a significant difference between a sample mean and a known or hypothesized population mean, especially when the population standard deviation is unknown and the sample size is small.

**Assumptions for the One-Sample t-Test:**
1.  The sample is a random sample from the population.
2.  The population from which the sample is drawn is approximately normally distributed. For small samples, this assumption is important. If the sample is reasonably large (e.g., $n \ge 30$), the Central Limit Theorem allows us to proceed even if the population is not perfectly normal.
3.  The population standard deviation ($\sigma$) is unknown.

**Steps for Conducting a One-Sample t-Test:**

**Step 1: State the Hypotheses**
*   **Null Hypothesis ($H_0$):** $\mu = \mu_0$ (where $\mu_0$ is the hypothesized population mean)
*   **Alternative Hypothesis ($H_1$):**
    *   $\mu \neq \mu_0$ (Two-tailed test)
    *   $\mu > \mu_0$ (Right-tailed test)
    *   $\mu < \mu_0$ (Left-tailed test)

**Step 2: Set the Significance Level ($\alpha$)**
Choose a significance level, commonly $\alpha = 0.05$.

**Step 3: Calculate the Test Statistic**
The test statistic for a one-sample t-test is calculated as:
$$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$$
where:
*   $\bar{x}$ is the sample mean.
*   $\mu_0$ is the hypothesized population mean.
*   $s$ is the sample standard deviation.
*   $n$ is the sample size.

**Step 4: Determine the Critical Region or Calculate the P-value**

*   **Critical Region Approach:**
    *   Find the critical t-value(s) from the t-distribution table using the chosen $\alpha$ and $df = n - 1$.
    *   For a two-tailed test, the critical values are $-t_{\alpha/2, df}$ and $t_{\alpha/2, df}$.
    *   For a right-tailed test, the critical value is $t_{\alpha, df}$.
    *   For a left-tailed test, the critical value is $-t_{\alpha, df}$.
    *   Reject $H_0$ if the calculated test statistic ($t$) falls into the critical region.

*   **P-value Approach:**
    *   Calculate the p-value associated with the calculated test statistic ($t$) and the degrees of freedom ($df = n - 1$).
    *   For a two-tailed test, $p\text{-value} = 2 \times P(T > |t|)$ where $T$ follows a t-distribution with $df$ degrees of freedom.
    *   For a right-tailed test, $p\text{-value} = P(T > t)$.
    *   For a left-tailed test, $p\text{-value} = P(T < t)$.
    *   Reject $H_0$ if $p\text{-value} \le \alpha$.

**Step 5: Make a Decision and Interpret the Results**
*   Based on the comparison of the test statistic with the critical value or the p-value with $\alpha$, decide whether to reject or fail to reject $H_0$.
*   Interpret the decision in the context of the problem, considering the physical science application.

**Learning Outcome Alignment:** This section directly addresses CO3 by explaining how to test hypotheses about population means using the one-sample t-test, a fundamental statistical tool for assessing certainty in parameter estimation. The use of the t-distribution for small samples is a key aspect of this process.

---

### **4. Examples and Applications in Physical Science**

**Example 1: Material Strength**
A materials scientist wants to test if the average tensile strength of a new alloy is greater than 500 MPa. A sample of 10 specimens is tested, yielding a sample mean tensile strength of 525 MPa and a sample standard deviation of 30 MPa. Use a significance level of 0.05.

*   **Step 1: Hypotheses**
    *   $H_0: \mu = 500$ MPa
    *   $H_1: \mu > 500$ MPa (Right-tailed test)

*   **Step 2: Significance Level**
    *   $\alpha = 0.05$

*   **Step 3: Test Statistic**
    *   $\bar{x} = 525$ MPa
    *   $\mu_0 = 500$ MPa
    *   $s = 30$ MPa
    *   $n = 10$
    *   $df = n - 1 = 10 - 1 = 9$
    *   $t = \frac{525 - 500}{30 / \sqrt{10}} = \frac{25}{30 / 3.162} \approx \frac{25}{9.487} \approx 2.635$

*   **Step 4: Decision (Critical Region Approach)**
    *   For a right-tailed test with $\alpha = 0.05$ and $df = 9$, the critical t-value is $t_{0.05, 9} = 1.833$ (from t-distribution tables).
    *   Since $2.635 > 1.833$, we reject $H_0$.

*   **Step 5: Interpretation**
    *   At the 0.05 significance level, there is sufficient evidence to conclude that the average tensile strength of the new alloy is greater than 500 MPa.

**Example 2: Particle Accelerator Energy**
An experiment in particle physics aims to verify that the average energy of particles produced by a new accelerator is 100 GeV. Due to limitations, only 8 particle runs can be performed. The observed energies are: 98.5, 101.2, 99.3, 100.5, 102.1, 98.9, 100.0, 101.5 GeV. Use a significance level of 0.01 for a two-tailed test.

*   **Calculate Sample Mean and Standard Deviation:**
    *   Sum of energies = 98.5 + 101.2 + 99.3 + 100.5 + 102.1 + 98.9 + 100.0 + 101.5 = 802 GeV
    *   $\bar{x} = 802 / 8 = 100.25$ GeV
    *   Calculate sample variance ($s^2$):
        *   Deviations from mean: -1.75, 0.95, -0.95, 0.25, 1.85, -1.35, -0.25, 1.25
        *   Squared deviations: 3.0625, 0.9025, 0.9025, 0.0625, 3.4225, 1.8225, 0.0625, 1.5625
        *   Sum of squared deviations = 11.825
        *   $s^2 = \frac{11.825}{8-1} = \frac{11.825}{7} \approx 1.6893$
    *   $s = \sqrt{1.6893} \approx 1.2997$ GeV

*   **Step 1: Hypotheses**
    *   $H_0: \mu = 100$ GeV
    *   $H_1: \mu \neq 100$ GeV (Two-tailed test)

*   **Step 2: Significance Level**
    *   $\alpha = 0.01$

*   **Step 3: Test Statistic**
    *   $\bar{x} = 100.25$ GeV
    *   $\mu_0 = 100$ GeV
    *   $s = 1.2997$ GeV
    *   $n = 8$
    *   $df = n - 1 = 8 - 1 = 7$
    *   $t = \frac{100.25 - 100}{1.2997 / \sqrt{8}} = \frac{0.25}{1.2997 / 2.828} \approx \frac{0.25}{0.4596} \approx 0.544$

*   **Step 4: Decision (P-value Approach)**
    *   For a two-tailed test, we need $P(|T| > 0.544)$ with $df = 7$.
    *   Using statistical software or a t-distribution calculator, the p-value for $|t| = 0.544$ and $df = 7$ is approximately 0.599.
    *   Since $0.599 > 0.01$, we fail to reject $H_0$.

*   **Step 5: Interpretation**
    *   At the 0.01 significance level, there is not enough evidence to conclude that the average energy of particles produced by the new accelerator is different from 100 GeV.

**Reference:** Both Devore (2016) and Ross (2020) provide numerous examples of hypothesis testing for means, including scenarios applicable to physical sciences.

---

### **5. Important Points to Remember**

*   **Use t-test for unknown population standard deviation and small samples.** If $\sigma$ is known, use the z-test. If the sample size is large ($n \ge 30$), the z-test can often be used as an approximation even if $\sigma$ is unknown (using sample standard deviation $s$ in place of $\sigma$).
*   **The assumption of normality is more critical for small samples.** If the sample size is small, check for approximate normality using graphical methods (e.g., histograms, Q-Q plots) or statistical tests for normality.
*   **Degrees of freedom are crucial for t-tests.** Always calculate $df = n - 1$.
*   **Direction of the alternative hypothesis determines the type of test (one-tailed vs. two-tailed).**
*   **P-value interpretation:** A smaller p-value indicates stronger evidence against the null hypothesis.
*   **Interpreting "Fail to Reject $H_0$"**: This does not mean $H_0$ is true, but rather that there is insufficient evidence in the sample data to conclude it is false.

**Learning Outcome Alignment:** This section reinforces the practical application of the t-test (CO3) and emphasizes the conditions under which it's appropriate, contributing to a deeper understanding of statistical inference in scientific contexts.

---

### **6. Practice Questions**

1.  A chemist is testing if the average concentration of a catalyst in a reaction mixture is 2.5 ppm. A sample of 12 readings is taken, resulting in a sample mean of 2.3 ppm and a sample standard deviation of 0.4 ppm.
    *   State the null and alternative hypotheses for a two-tailed test.
    *   Calculate the t-test statistic.
    *   Determine the degrees of freedom.
    *   If the significance level is $\alpha = 0.05$, what is the critical t-value?
    *   What is your conclusion about the average concentration?

2.  A physicist measures the wavelength of a specific spectral line from a sample. They expect the average wavelength to be 656.3 nm. A sample of 9 measurements yields a mean of 656.0 nm and a standard deviation of 0.2 nm.
    *   State the hypotheses for testing if the average wavelength is less than 656.3 nm.
    *   Calculate the t-test statistic.
    *   Calculate the p-value for this test.
    *   If the significance level is $\alpha = 0.01$, what is your conclusion?

3.  Explain the conditions under which a one-sample t-test is appropriate for testing hypotheses about a population mean. How does the sample size influence the choice between a z-test and a t-test?

---

### **7. Answers to Practice Questions**

**Question 1:**

*   **Hypotheses:**
    *   $H_0: \mu = 2.5$ ppm
    *   $H_1: \mu \neq 2.5$ ppm
*   **Test Statistic:**
    *   $t = \frac{2.3 - 2.5}{0.4 / \sqrt{12}} = \frac{-0.2}{0.4 / 3.464} \approx \frac{-0.2}{0.1155} \approx -1.73$
*   **Degrees of Freedom:**
    *   $df = 12 - 1 = 11$
*   **Critical t-value:**
    *   For a two-tailed test with $\alpha = 0.05$ and $df = 11$, the critical t-values are $\pm t_{0.025, 11}$. From t-tables, this value is approximately $\pm 2.201$.
*   **Conclusion:**
    *   Since $|-1.73| < 2.201$ (i.e., -1.73 is between -2.201 and 2.201), we fail to reject $H_0$.
    *   There is not enough evidence at the 0.05 significance level to conclude that the average concentration of the catalyst is different from 2.5 ppm.

**Question 2:**

*   **Hypotheses:**
    *   $H_0: \mu = 656.3$ nm
    *   $H_1: \mu < 656.3$ nm (Left-tailed test)
*   **Test Statistic:**
    *   $t = \frac{656.0 - 656.3}{0.2 / \sqrt{9}} = \frac{-0.3}{0.2 / 3} = \frac{-0.3}{0.0667} \approx -4.50$
*   **P-value:**
    *   For $t = -4.50$ and $df = 8$ (left-tailed), the p-value is $P(T < -4.50)$. Using statistical software or a t-distribution calculator, this p-value is very small, approximately 0.0014.
*   **Conclusion:**
    *   Since the p-value (0.0014) is less than $\alpha = 0.01$, we reject $H_0$.
    *   There is sufficient evidence at the 0.01 significance level to conclude that the average wavelength of the spectral line is less than 656.3 nm.

**Question 3:**

*   **Conditions for One-Sample t-Test:**
    1.  The sample is a random sample from the population.
    2.  The population from which the sample is drawn is approximately normally distributed. This is particularly important for small sample sizes.
    3.  The population standard deviation ($\sigma$) is unknown.
*   **Influence of Sample Size:**
    *   If the population standard deviation ($\sigma$) is known, the z-test is used regardless of sample size.
    *   If $\sigma$ is unknown:
        *   For **large sample sizes** ($n \ge 30$), the Central Limit Theorem allows us to use the z-test approximation even if the population is not perfectly normal, by using the sample standard deviation ($s$) as an estimate of $\sigma$.
        *   For **small sample sizes** ($n < 30$), the t-test is preferred because the t-distribution accounts for the extra uncertainty introduced by estimating $\sigma$ with $s$. The normality assumption becomes more critical for small sample sizes.

---

### **7. Alignment with Course Outcomes**

*   **CO1 & CO2:** While this module focuses on hypothesis testing for means, the underlying understanding of probability distributions and data characteristics is foundational. The t-distribution is a key probability model.
*   **CO3:** This entire topic directly addresses CO3 by providing the methodology for testing hypotheses about population means using the one-sample t-test, which is explicitly mentioned. It covers estimating population parameters (implicitly, by testing a hypothesis about the mean) and assessing certainty (through the hypothesis testing framework).
*   **CO4:** This topic is primarily statistical inference. While numerical methods (as in Sastry, 2012 and Chapra & Canale, 2021) are used to calculate t-statistics or find p-values, they are not the core focus of this statistical module. However, the ability to perform these calculations relies on numerical precision.

This study module provides a practical application of statistical inference principles vital for physical scientists to draw conclusions from experimental data, particularly when dealing with limited observations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
