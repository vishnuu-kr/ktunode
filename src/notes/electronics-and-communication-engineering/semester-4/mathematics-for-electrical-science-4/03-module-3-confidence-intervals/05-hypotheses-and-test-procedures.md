---
title: "Hypotheses and Test Procedures"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4ce"
status: "completed"
scrapedAt: "2026-05-23T17:50:49.931Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4: Module 3: Confidence Intervals

## Topic: Hypotheses and Test Procedures

This topic introduces the fundamental concepts of hypothesis testing, a crucial statistical tool for making inferences about population parameters based on sample data. We will learn how to formulate hypotheses, understand the logic behind test procedures, and interpret the results. This aligns with **Course Outcome 3 (CO3)**, which focuses on testing hypotheses about population means and proportions.

### 1. Introduction to Hypothesis Testing

Hypothesis testing is a formal procedure used to make a decision about a population based on sample data. It's a process of evaluating competing claims about a population parameter.

**Key Concepts:**

*   **Population Parameter:** A characteristic of the entire population (e.g., population mean $\mu$, population proportion $p$).
*   **Sample Statistic:** A characteristic of a sample drawn from the population (e.g., sample mean $\bar{x}$, sample proportion $\hat{p}$).
*   **Inference:** Using sample data to draw conclusions about the population.

**Analogy:** Imagine you suspect a new electrical component is failing more often than the manufacturer claims. Hypothesis testing allows you to use a sample of components to formally decide if your suspicion is justified.

**Reference:** Devore (2016) extensively covers the foundational principles of hypothesis testing in Chapter 9. Veerarajan (2008) also provides a thorough introduction to hypothesis testing in Chapter 10.

### 2. Formulation of Hypotheses

A hypothesis test involves setting up two competing statements about a population parameter: the null hypothesis and the alternative hypothesis.

**Key Concepts:**

*   **Null Hypothesis ($H_0$):** A statement about the population parameter that is assumed to be true until evidence suggests otherwise. It typically represents a statement of "no effect," "no difference," or the status quo.
    *   **Examples:**
        *   $H_0: \mu = 50$ (The average resistance of a batch of resistors is 50 ohms.)
        *   $H_0: p = 0.10$ (The proportion of defective chips in a production line is 10%.)
        *   $H_0: \mu_1 - \mu_2 = 0$ (There is no difference in the mean lifespan of two types of batteries.)

*   **Alternative Hypothesis ($H_a$ or $H_1$):** A statement that contradicts the null hypothesis. It represents what we are trying to find evidence for.
    *   **Types of Alternative Hypotheses:**
        *   **Two-tailed test:** $H_a: \mu \neq \mu_0$ (The population mean is different from $\mu_0$.)
        *   **One-tailed (right-tailed) test:** $H_a: \mu > \mu_0$ (The population mean is greater than $\mu_0$.)
        *   **One-tailed (left-tailed) test:** $H_a: \mu < \mu_0$ (The population mean is less than $\mu_0$.)

**Choosing the Alternative Hypothesis:** The alternative hypothesis is often determined by the research question or the problem statement. For instance, if you are testing if a new manufacturing process *improves* efficiency, you would use a right-tailed test.

**Example:** A manufacturer claims their new LED bulbs last an average of 10,000 hours. You suspect they last less.
*   Null Hypothesis ($H_0$): $\mu = 10000$ hours (The average lifespan is 10,000 hours.)
*   Alternative Hypothesis ($H_a$): $\mu < 10000$ hours (The average lifespan is less than 10,000 hours.)

**Reference:** Devore (2016) dedicates a significant portion of Chapter 9 to the proper formulation of null and alternative hypotheses for various scenarios. Veerarajan (2008) also emphasizes this in Chapter 10.

### 3. Test Procedures: The Logic of Hypothesis Testing

Hypothesis testing follows a structured procedure to decide whether to reject or fail to reject the null hypothesis.

**Steps in Hypothesis Testing:**

1.  **State the Hypotheses:** Formulate the null ($H_0$) and alternative ($H_a$) hypotheses.
2.  **Choose the Significance Level ($\alpha$):** This is the probability of rejecting the null hypothesis when it is actually true (Type I error). Common values are 0.05, 0.01, or 0.10.
    *   **Important Point:** The significance level is chosen *before* data collection.
3.  **Select the Appropriate Test Statistic:** Based on the parameter being tested, sample size, and knowledge of population parameters.
    *   For population means when population standard deviation ($\sigma$) is known: z-test statistic.
    *   For population means when population standard deviation ($\sigma$) is unknown (using sample standard deviation $s$): t-test statistic.
    *   For population proportions: z-test statistic.
4.  **Determine the Critical Region (Rejection Region):** This is the set of values for the test statistic that leads to the rejection of the null hypothesis. It's defined by the significance level ($\alpha$) and the type of test (one-tailed or two-tailed).
5.  **Calculate the Test Statistic from Sample Data:** Compute the value of the chosen test statistic using the observed sample data.
6.  **Make a Decision:**
    *   **Critical Value Approach:** Compare the calculated test statistic to the critical value(s) from the appropriate distribution. If the test statistic falls into the critical region, reject $H_0$. Otherwise, fail to reject $H_0$.
    *   **p-value Approach:** Calculate the p-value, which is the probability of observing a test statistic as extreme as, or more extreme than, the one calculated from the sample, assuming $H_0$ is true. If the p-value is less than or equal to $\alpha$, reject $H_0$. Otherwise, fail to reject $H_0$.
7.  **Interpret the Results:** State the conclusion in the context of the original problem.

**Reference:** Devore (2016) provides a comprehensive overview of these steps in Chapter 9. Veerarajan (2008) also outlines this procedure in Chapter 10.

### 4. Types of Errors in Hypothesis Testing

When making a decision in hypothesis testing, there's a chance of making an incorrect conclusion.

**Key Concepts:**

*   **Type I Error (False Positive):** Rejecting the null hypothesis ($H_0$) when it is actually true.
    *   The probability of a Type I error is denoted by $\alpha$ (the significance level).
*   **Type II Error (False Negative):** Failing to reject the null hypothesis ($H_0$) when it is actually false.
    *   The probability of a Type II error is denoted by $\beta$.
*   **Power of the Test:** The probability of correctly rejecting the null hypothesis when it is false. It is equal to $1 - \beta$.

**Decision Matrix:**

| Decision           | $H_0$ is True | $H_0$ is False |
| :----------------- | :------------ | :------------- |
| **Fail to Reject $H_0$** | Correct       | Type II Error ($\beta$) |
| **Reject $H_0$**   | Type I Error ($\alpha$) | Correct ($1-\beta$) |

**Important Point:** There's a trade-off between Type I and Type II errors. Decreasing $\alpha$ (to reduce Type I errors) generally increases $\beta$ (making Type II errors more likely), and vice-versa, for a fixed sample size.

**Example:**
*   **Scenario:** Testing if a new circuit design improves signal-to-noise ratio.
*   **Type I Error:** Concluding the new design improves the ratio when it actually doesn't.
*   **Type II Error:** Concluding the new design does not improve the ratio when it actually does.

**Reference:** Devore (2016) discusses the concepts of Type I and Type II errors and power in Chapter 9. Veerarajan (2008) also covers these in Chapter 10.

### 5. Test Statistics for Means

We will primarily focus on tests for population means, as covered in **CO3**.

#### 5.1 Z-test for Population Mean ( $\sigma$ Known)

This test is used when the population standard deviation ($\sigma$) is known and the population is normally distributed or the sample size is large ($n \ge 30$).

**Test Statistic:**
$$ z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}} $$
where:
*   $\bar{x}$ is the sample mean.
*   $\mu_0$ is the hypothesized population mean (from $H_0$).
*   $\sigma$ is the population standard deviation.
*   $n$ is the sample size.

**Decision Rules (using $\alpha$):**

*   **Right-tailed test ($H_a: \mu > \mu_0$):** Reject $H_0$ if $z > z_{\alpha}$.
*   **Left-tailed test ($H_a: \mu < \mu_0$):** Reject $H_0$ if $z < -z_{\alpha}$.
*   **Two-tailed test ($H_a: \mu \neq \mu_0$):** Reject $H_0$ if $|z| > z_{\alpha/2}$.

**Example:** A power supply is designed to output 12V. The population standard deviation is known to be 0.5V. A sample of 40 power supplies yields a mean output of 11.9V. Test if the mean output is significantly different from 12V at $\alpha = 0.05$.

*   $H_0: \mu = 12$
*   $H_a: \mu \neq 12$
*   $\alpha = 0.05$
*   $\bar{x} = 11.9$, $\sigma = 0.5$, $n = 40$

Calculate z:
$$ z = \frac{11.9 - 12}{0.5/\sqrt{40}} = \frac{-0.1}{0.5/6.324} \approx \frac{-0.1}{0.079} \approx -1.266 $$
For a two-tailed test with $\alpha = 0.05$, the critical values are $z_{\alpha/2} = z_{0.025} = \pm 1.96$.
Since $|-1.266| < 1.96$, we fail to reject $H_0$.
**Conclusion:** There is not enough evidence to conclude that the mean output voltage is significantly different from 12V.

**Reference:** Devore (2016) covers the z-test for a mean in Section 9.2. Veerarajan (2008) also discusses this in Chapter 10.

#### 5.2 T-test for Population Mean ( $\sigma$ Unknown)

This test is used when the population standard deviation ($\sigma$) is unknown and must be estimated from the sample using the sample standard deviation ($s$). It assumes the population is normally distributed or the sample size is large ($n \ge 30$).

**Sample Standard Deviation ($s$):**
$$ s = \sqrt{\frac{\sum_{i=1}^n (x_i - \bar{x})^2}{n-1}} $$

**Test Statistic:**
$$ t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} $$
This statistic follows a t-distribution with $n-1$ degrees of freedom (df).

**Decision Rules (using $\alpha$ and degrees of freedom $v = n-1$):**

*   **Right-tailed test ($H_a: \mu > \mu_0$):** Reject $H_0$ if $t > t_{\alpha, v}$.
*   **Left-tailed test ($H_a: \mu < \mu_0$):** Reject $H_0$ if $t < -t_{\alpha, v}$.
*   **Two-tailed test ($H_a: \mu \neq \mu_0$):** Reject $H_0$ if $|t| > t_{\alpha/2, v}$.

**Important Point:** The t-distribution is similar to the normal distribution but has fatter tails, especially for small degrees of freedom. As df increases, the t-distribution approaches the normal distribution.

**Example:** A new alloy is being tested for tensile strength. The target strength is 500 MPa. A sample of 15 specimens yields a mean tensile strength of 485 MPa and a sample standard deviation of 25 MPa. Test if the mean tensile strength is significantly less than 500 MPa at $\alpha = 0.05$.

*   $H_0: \mu = 500$
*   $H_a: \mu < 500$
*   $\alpha = 0.05$
*   $\bar{x} = 485$, $s = 25$, $n = 15$

Degrees of freedom: $v = n-1 = 15-1 = 14$.
Calculate t:
$$ t = \frac{485 - 500}{25/\sqrt{15}} = \frac{-15}{25/3.873} \approx \frac{-15}{6.455} \approx -2.323 $$
For a left-tailed test with $\alpha = 0.05$ and $v = 14$, the critical value is $t_{0.05, 14} \approx -1.761$.
Since $-2.323 < -1.761$, we reject $H_0$.
**Conclusion:** There is enough evidence to conclude that the mean tensile strength of the new alloy is significantly less than 500 MPa.

**Reference:** Devore (2016) covers the t-test for a mean in Section 9.3. Veerarajan (2008) also discusses this in Chapter 10.

### 6. Test Statistics for Proportions

This section aligns with **CO3** by covering hypothesis testing for population proportions.

#### 6.1 Z-test for Population Proportion

This test is used to test hypotheses about a population proportion. It is appropriate when the sample size is large enough such that $np_0 \ge 10$ and $n(1-p_0) \ge 10$, where $p_0$ is the hypothesized proportion.

**Test Statistic:**
$$ z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}} $$
where:
*   $\hat{p}$ is the sample proportion ($\hat{p} = x/n$, where $x$ is the number of successes in the sample).
*   $p_0$ is the hypothesized population proportion (from $H_0$).
*   $n$ is the sample size.

**Decision Rules (using $\alpha$):**

*   **Right-tailed test ($H_a: p > p_0$):** Reject $H_0$ if $z > z_{\alpha}$.
*   **Left-tailed test ($H_a: p < p_0$):** Reject $H_0$ if $z < -z_{\alpha}$.
*   **Two-tailed test ($H_a: p \neq p_0$):** Reject $H_0$ if $|z| > z_{\alpha/2}$.

**Example:** A manufacturer of electronic components claims that no more than 3% of their components are defective. A sample of 500 components is taken, and 20 are found to be defective. Test the manufacturer's claim at $\alpha = 0.05$.

*   $H_0: p \le 0.03$ (The proportion of defective components is at most 3%)
*   $H_a: p > 0.03$ (The proportion of defective components is greater than 3%)
*   $\alpha = 0.05$
*   $n = 500$, $x = 20$

Sample proportion: $\hat{p} = 20/500 = 0.04$.
Check conditions for $H_0: p = 0.03$:
$n p_0 = 500 \times 0.03 = 15 \ge 10$
$n (1-p_0) = 500 \times (1-0.03) = 500 \times 0.97 = 485 \ge 10$
Conditions are met.

Calculate z:
$$ z = \frac{0.04 - 0.03}{\sqrt{\frac{0.03(1-0.03)}{500}}} = \frac{0.01}{\sqrt{\frac{0.03 \times 0.97}{500}}} = \frac{0.01}{\sqrt{\frac{0.0291}{500}}} = \frac{0.01}{\sqrt{0.0000582}} \approx \frac{0.01}{0.00763} \approx 1.31 $$
For a right-tailed test with $\alpha = 0.05$, the critical value is $z_{0.05} = 1.645$.
Since $1.31 < 1.645$, we fail to reject $H_0$.
**Conclusion:** There is not enough evidence to reject the manufacturer's claim that no more than 3% of their components are defective.

**Reference:** Devore (2016) covers the z-test for a proportion in Section 9.6. Veerarajan (2008) also discusses this in Chapter 10.

### 7. p-value Approach

The p-value approach provides an alternative to the critical region approach for making a decision.

**Key Concept:**
*   **p-value:** The probability of obtaining a test statistic at least as extreme as the one observed, assuming the null hypothesis is true.

**Decision Rule:**
*   If p-value $\le \alpha$, reject $H_0$.
*   If p-value $> \alpha$, fail to reject $H_0$.

**Calculating p-values:**

*   **Right-tailed test:** p-value = P(Test Statistic $\ge$ calculated value)
*   **Left-tailed test:** p-value = P(Test Statistic $\le$ calculated value)
*   **Two-tailed test:** p-value = 2 * P(Test Statistic $\ge$ |calculated value|) (assuming symmetry of the distribution)

**Example (using the t-test example from Section 5.2):**
We calculated $t = -2.323$ with $v = 14$ df for a left-tailed test ($H_a: \mu < 500$).
We need to find P($t_{14} \le -2.323$).
Using a t-table or statistical software, we find that the probability of getting a t-value less than or equal to -2.326 (which is very close to -2.323) for 14 df is 0.016.
So, p-value $\approx 0.016$.
Since p-value ($0.016$) $\le \alpha$ ($0.05$), we reject $H_0$.
This confirms the decision made using the critical value approach.

**Reference:** Devore (2016) explains the p-value approach in Section 9.2 and onwards. Veerarajan (2008) also introduces the p-value concept in Chapter 10.

### 8. Practice Questions

1.  A quality control engineer for a resistor manufacturer claims that the average resistance of a batch of resistors is 100 ohms. A sample of 30 resistors yields a mean resistance of 101.5 ohms with a sample standard deviation of 2 ohms.
    *   State the null and alternative hypotheses for testing if the mean resistance is greater than 100 ohms.
    *   Calculate the appropriate test statistic.
    *   Using a significance level of $\alpha = 0.05$, what is your decision?

2.  A researcher is investigating the effectiveness of a new training program for technicians. The program claims to increase the average number of completed tasks per day from 8 to at least 10. A sample of 25 technicians who underwent the program had an average of 9.5 completed tasks with a sample standard deviation of 1.5 tasks.
    *   Formulate the null and alternative hypotheses to test the program's claim.
    *   Calculate the test statistic.
    *   Using $\alpha = 0.01$, would you reject or fail to reject the null hypothesis?

3.  A company claims that its new battery lasts longer than its old model, which had an average lifespan of 50 hours. A sample of 40 new batteries has a mean lifespan of 53 hours with a known population standard deviation of 8 hours.
    *   State the hypotheses.
    *   Calculate the z-test statistic.
    *   Using $\alpha = 0.05$, what is the conclusion about the new battery's lifespan?

4.  A study is conducted to determine if the proportion of engineers who prefer using a particular software package has changed from the historically known proportion of 0.60. A sample of 200 engineers found that 130 prefer the software.
    *   State the null and alternative hypotheses for testing if the proportion has changed.
    *   Calculate the test statistic and its p-value.
    *   Using $\alpha = 0.10$, what is the conclusion?

### 9. Answers to Practice Questions

1.  *   $H_0: \mu = 100$, $H_a: \mu > 100$
    *   This is a t-test as $\sigma$ is unknown.
        $t = \frac{101.5 - 100}{2/\sqrt{30}} = \frac{1.5}{2/5.477} \approx \frac{1.5}{0.365} \approx 4.11$
        Degrees of freedom $v = 30 - 1 = 29$.
    *   For a right-tailed test with $\alpha = 0.05$ and $v=29$, the critical value $t_{0.05, 29} \approx 1.699$.
        Since $4.11 > 1.699$, we reject $H_0$.
        **Decision:** Reject $H_0$. The mean resistance is significantly greater than 100 ohms.

2.  *   $H_0: \mu = 8$ (or $H_0: \mu \le 8$), $H_a: \mu > 10$ (This formulation is tricky. If the claim is that the *new* average is at least 10, and the old is 8, then it's likely comparing to the old benchmark. However, if the claim is that the program *achieves* an average of at least 10, and we want to test if the program is successful in reaching that, then $H_0: \mu \le 8$ or $H_0: \mu = 8$ against $H_a: \mu > 8$ or $H_a: \mu \ge 10$. Let's assume the claim is that the program *raises* the average to *at least* 10, so we test against the baseline of 8. A better phrasing for the program's goal would be to check if the mean is significantly *higher* than the original 8, or specifically if it reaches 10. Given the phrasing "increase from 8 to at least 10", we can test against the lower bound of the claim.)

    Let's rephrase to test if the program achieves the claimed *increase* in average tasks:
    *   $H_0: \mu = 8$ (The program does not increase the average number of tasks)
    *   $H_a: \mu > 8$ (The program increases the average number of tasks)
    *   If we specifically want to test if the program *meets* the "at least 10" claim, and the old average is 8, we might test:
        *   $H_0: \mu \le 8$
        *   $H_a: \mu \ge 10$ (This is a composite hypothesis that might require more advanced methods or specific focus on the boundary. For simplicity and within the scope of basic tests, let's test if the program *improves* the performance, i.e., from 8).

    Let's go with testing if the program achieves the *claimed improvement* starting from the baseline of 8.
    *   $H_0: \mu = 8$ (The program does not improve the average number of tasks beyond the baseline)
    *   $H_a: \mu > 8$ (The program improves the average number of tasks)

    *   $\bar{x} = 9.5$, $s = 1.5$, $n = 25$.
    *   Degrees of freedom $v = 25 - 1 = 24$.
    *   $t = \frac{9.5 - 8}{1.5/\sqrt{25}} = \frac{1.5}{1.5/5} = \frac{1.5}{0.3} = 5$

    *   For a right-tailed test with $\alpha = 0.01$ and $v=24$, the critical value $t_{0.01, 24} \approx 2.492$.
    *   Since $5 > 2.492$, we reject $H_0$.
    *   **Decision:** Reject $H_0$. There is strong evidence that the training program increases the average number of completed tasks.

3.  *   $H_0: \mu = 50$, $H_a: \mu > 50$
    *   This is a z-test as $\sigma$ is known.
        $z = \frac{53 - 50}{8/\sqrt{40}} = \frac{3}{8/6.324} \approx \frac{3}{1.265} \approx 2.37$
    *   For a right-tailed test with $\alpha = 0.05$, the critical value $z_{0.05} = 1.645$.
    *   Since $2.37 > 1.645$, we reject $H_0$.
    *   **Conclusion:** The new battery's lifespan is significantly longer than the old model's.

4.  *   $H_0: p = 0.60$ (The proportion has not changed)
        $H_a: p \neq 0.60$ (The proportion has changed)
    *   $n = 200$, $x = 130$.
        $\hat{p} = 130/200 = 0.65$.
        Check conditions for $H_0: p = 0.60$:
        $n p_0 = 200 \times 0.60 = 120 \ge 10$
        $n (1-p_0) = 200 \times 0.40 = 80 \ge 10$
        Conditions are met.
        $z = \frac{0.65 - 0.60}{\sqrt{\frac{0.60(1-0.60)}{200}}} = \frac{0.05}{\sqrt{\frac{0.60 \times 0.40}{200}}} = \frac{0.05}{\sqrt{\frac{0.24}{200}}} = \frac{0.05}{\sqrt{0.0012}} \approx \frac{0.05}{0.0346} \approx 1.445$
        For a two-tailed test with $\alpha = 0.10$, we need $z_{\alpha/2} = z_{0.05} = 1.645$.
        The p-value is $2 \times P(Z \ge |1.445|) \approx 2 \times 0.0735 = 0.147$.
    *   Since p-value ($0.147$) $> \alpha$ ($0.10$), we fail to reject $H_0$.
    *   **Decision:** Fail to reject $H_0$. There is not enough evidence to conclude that the proportion of engineers who prefer the software has changed.

### 10. Important Points to Remember

*   **Clear Hypothesis Formulation:** Always state $H_0$ and $H_a$ clearly, specifying the population parameter and the type of test (one-tailed or two-tailed).
*   **Significance Level ($\alpha$):** Choose $\alpha$ *before* data analysis. It represents the acceptable risk of a Type I error.
*   **Test Statistic Choice:** Select the correct test statistic (z-test or t-test) based on whether the population standard deviation ($\sigma$) is known or unknown, and the sample size.
*   **Degrees of Freedom:** For t-tests, correctly calculate degrees of freedom ($n-1$ for a single sample mean).
*   **Decision Criteria:** Consistently use either the critical value approach or the p-value approach to make a decision.
*   **Contextual Interpretation:** Always interpret the statistical conclusion in the context of the original problem. Failing to reject $H_0$ does not mean $H_0$ is true, but rather that there isn't enough evidence to reject it.

This topic lays the groundwork for making statistically sound decisions in various electrical engineering applications, from quality control to performance evaluation. Understanding these principles is essential for applying statistical inference effectively, which is a core aspect of **CO3**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
