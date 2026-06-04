---
title: "z Tests for Hypotheses about a Population Mean (for large sample)"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 3: Confidence Intervals"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810937"
status: "completed"
scrapedAt: "2026-05-20T18:46:09.892Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 3: Confidence Intervals

### Topic: z Tests for Hypotheses about a Population Mean (for large sample)

---

### 1. Introduction to Hypothesis Testing

Hypothesis testing is a statistical method used to make decisions about a population based on sample data. It involves formulating a hypothesis about a population parameter and then using sample data to determine whether there is enough evidence to reject that hypothesis.

**Key Concepts:**

*   **Null Hypothesis ($H_0$)**: A statement about a population parameter that is assumed to be true. It typically represents the status quo or no effect.
*   **Alternative Hypothesis ($H_a$ or $H_1$)**: A statement that contradicts the null hypothesis. It represents what we are trying to find evidence for.
*   **Population Parameter**: A characteristic of the entire population (e.g., population mean, $\mu$).
*   **Sample Statistic**: A characteristic of a sample (e.g., sample mean, $\bar{x}$).
*   **Significance Level ($\alpha$)**: The probability of rejecting the null hypothesis when it is actually true (Type I error). Common values are 0.05, 0.01, or 0.10.
*   **Test Statistic**: A value calculated from sample data that is used to decide whether to reject the null hypothesis.
*   **p-value**: The probability of observing a test statistic as extreme as, or more extreme than, the one calculated from the sample, assuming the null hypothesis is true.

---

### 2. z Tests for a Population Mean (Large Sample)

When the sample size is large (typically $n \ge 30$), and the population standard deviation ($\sigma$) is known or can be reliably estimated by the sample standard deviation ($s$), we can use a z-test to test hypotheses about the population mean ($\mu$).

**Assumptions for z-Test for Population Mean (Large Sample):**

*   The sample is randomly selected from the population.
*   The population standard deviation ($\sigma$) is known, or the sample size is large enough ($n \ge 30$) that the sample standard deviation ($s$) can be used as a good estimate of $\sigma$.
*   The sampling distribution of the sample mean ($\bar{x}$) is approximately normally distributed. This is guaranteed by the Central Limit Theorem for large sample sizes.

**The z-Test Statistic Formula:**

The z-test statistic is calculated as follows:

$z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$

Where:
*   $\bar{x}$ is the sample mean.
*   $\mu_0$ is the hypothesized population mean under the null hypothesis.
*   $\sigma$ is the population standard deviation (if unknown, we use $s$).
*   $n$ is the sample size.

---

### 3. Steps for Conducting a z-Test for a Population Mean

**Step 1: State the Null and Alternative Hypotheses:**

Formulate the hypotheses based on the research question.

*   **Two-tailed test**:
    *   $H_0: \mu = \mu_0$
    *   $H_a: \mu \ne \mu_0$
*   **One-tailed test (right-tailed)**:
    *   $H_0: \mu = \mu_0$
    *   $H_a: \mu > \mu_0$
*   **One-tailed test (left-tailed)**:
    *   $H_0: \mu = \mu_0$
    *   $H_a: \mu < \mu_0$

**Step 2: Choose the Significance Level ($\alpha$):**

Select the probability of making a Type I error (e.g., $\alpha = 0.05$).

**Step 3: Calculate the Test Statistic:**

Use the z-test statistic formula: $z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$ (or using $s$ if $\sigma$ is unknown).

**Step 4: Determine the Critical Region or Calculate the p-value:**

*   **Critical Value Approach**:
    *   Find the critical z-value(s) from the standard normal distribution table corresponding to the chosen significance level $\alpha$ and the type of test (one-tailed or two-tailed).
    *   **Two-tailed test**: Critical values are $\pm z_{\alpha/2}$.
    *   **Right-tailed test**: Critical value is $z_{\alpha}$.
    *   **Left-tailed test**: Critical value is $-z_{\alpha}$.
    *   The **rejection region** (critical region) is the set of z-values that lead to rejecting $H_0$.

*   **p-value Approach**:
    *   Calculate the p-value associated with the calculated z-test statistic. This is the probability of obtaining a test statistic as extreme as, or more extreme than, the observed one, assuming $H_0$ is true.
    *   Use a standard normal distribution table or statistical software to find the p-value.

**Step 5: Make a Decision:**

*   **Critical Value Approach**:
    *   If the calculated test statistic falls within the rejection region, reject $H_0$.
    *   Otherwise, do not reject $H_0$.

*   **p-value Approach**:
    *   If the p-value is less than or equal to the significance level ($\alpha$), reject $H_0$.
    *   Otherwise, do not reject $H_0$.

**Step 6: Interpret the Results:**

State the conclusion in the context of the original problem, making a decision about the null hypothesis.

---

### 4. Examples of z Tests for Population Mean

**Example 1: Two-Tailed Test**

A researcher claims that the average height of adult males in a certain city is 175 cm. A sample of 100 adult males from this city is taken, and their average height is found to be 177 cm. The population standard deviation of adult male heights in this city is known to be 10 cm. Test the researcher's claim at a significance level of $\alpha = 0.05$.

**Solution:**

*   **Step 1: Hypotheses**
    *   $H_0: \mu = 175$ cm
    *   $H_a: \mu \ne 175$ cm (Two-tailed test)

*   **Step 2: Significance Level**
    *   $\alpha = 0.05$

*   **Step 3: Calculate Test Statistic**
    *   $\bar{x} = 177$ cm
    *   $\mu_0 = 175$ cm
    *   $\sigma = 10$ cm
    *   $n = 100$
    *   $z = \frac{177 - 175}{10 / \sqrt{100}} = \frac{2}{10 / 10} = \frac{2}{1} = 2.00$

*   **Step 4: Determine Critical Region/p-value**
    *   **Critical Value Approach**: For a two-tailed test with $\alpha = 0.05$, the critical values are $\pm z_{0.025}$. From the z-table, $z_{0.025} \approx 1.96$. The rejection region is $z < -1.96$ or $z > 1.96$.
    *   **p-value Approach**: The p-value for $z = 2.00$ in a two-tailed test is $2 \times P(Z > 2.00)$. From the z-table, $P(Z > 2.00) \approx 0.0228$. So, the p-value is $2 \times 0.0228 = 0.0456$.

*   **Step 5: Make a Decision**
    *   **Critical Value Approach**: The calculated z-statistic (2.00) is greater than the critical value (1.96), so it falls in the rejection region. Reject $H_0$.
    *   **p-value Approach**: The p-value (0.0456) is less than the significance level (0.05). Reject $H_0$.

*   **Step 6: Interpret the Results**
    *   At the 0.05 significance level, there is sufficient evidence to reject the researcher's claim that the average height of adult males in this city is 175 cm. The sample data suggests that the average height is different from 175 cm.

**Example 2: One-Tailed Test (Right-tailed)**

A pharmaceutical company claims that its new drug reduces blood pressure by an average of at least 10 mmHg. A clinical trial with 50 patients is conducted, and the average reduction in blood pressure is found to be 8 mmHg. The population standard deviation of the blood pressure reduction is 5 mmHg. Test the company's claim at a significance level of $\alpha = 0.01$.

**Solution:**

*   **Step 1: Hypotheses**
    *   The claim is that the average reduction is *at least* 10 mmHg ($\mu \ge 10$). The null hypothesis is the opposite or the boundary case of the claim we are testing.
    *   $H_0: \mu = 10$ mmHg (or $\mu \ge 10$ mmHg)
    *   $H_a: \mu < 10$ mmHg (Right-tailed test for the claim we are *testing against*)
    *   *Correction*: The claim is $\mu \ge 10$. We want to see if the data contradicts this claim. If we find evidence that $\mu < 10$, then we reject the claim that it's at least 10. So, the alternative hypothesis should be the one representing the claim we are *testing for*.
    *   Let's rephrase: We want to test if the average reduction is *less than* 10 mmHg. If we find sufficient evidence for this, it means the company's claim (at least 10 mmHg) is likely false.
    *   $H_0: \mu = 10$ mmHg (Company's claim is that it's *at least* 10, so we test the boundary)
    *   $H_a: \mu < 10$ mmHg (We are testing if the reduction is *less than* what's claimed)

*   **Step 2: Significance Level**
    *   $\alpha = 0.01$

*   **Step 3: Calculate Test Statistic**
    *   $\bar{x} = 8$ mmHg
    *   $\mu_0 = 10$ mmHg
    *   $\sigma = 5$ mmHg
    *   $n = 50$
    *   $z = \frac{8 - 10}{5 / \sqrt{50}} = \frac{-2}{5 / 7.071} = \frac{-2}{0.7071} \approx -2.83$

*   **Step 4: Determine Critical Region/p-value**
    *   **Critical Value Approach**: For a left-tailed test with $\alpha = 0.01$, the critical value is $-z_{0.01}$. From the z-table, $z_{0.01} \approx 2.33$. So, the critical value is $-2.33$. The rejection region is $z < -2.33$.
    *   **p-value Approach**: The p-value for $z = -2.83$ in a left-tailed test is $P(Z < -2.83)$. From the z-table, $P(Z < -2.83) \approx 0.0023$.

*   **Step 5: Make a Decision**
    *   **Critical Value Approach**: The calculated z-statistic (-2.83) is less than the critical value (-2.33), so it falls in the rejection region. Reject $H_0$.
    *   **p-value Approach**: The p-value (0.0023) is less than the significance level (0.01). Reject $H_0$.

*   **Step 6: Interpret the Results**
    *   At the 0.01 significance level, there is sufficient evidence to reject the company's claim that the new drug reduces blood pressure by an average of at least 10 mmHg. The sample data suggests that the average reduction is likely less than 10 mmHg.

---

### 5. Using Sample Standard Deviation ($s$) when Population Standard Deviation ($\sigma$) is Unknown

In many real-world scenarios, the population standard deviation ($\sigma$) is unknown. In such cases, if the sample size is large ($n \ge 30$), we can use the sample standard deviation ($s$) as an estimate for $\sigma$. The test statistic formula remains the same, but we replace $\sigma$ with $s$.

$z = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$

**Important Note:** This is valid because for large sample sizes, the sampling distribution of $s$ is very close to the sampling distribution of $\sigma$, and $s$ is a good estimator for $\sigma$.

**Example 3: Using Sample Standard Deviation**

A study investigates the average resting heart rate of adult athletes. A sample of 64 athletes is taken, and their average resting heart rate is 62 beats per minute (bpm). The sample standard deviation is 8 bpm. Test the hypothesis that the average resting heart rate of adult athletes is 60 bpm at a significance level of $\alpha = 0.05$.

**Solution:**

*   **Step 1: Hypotheses**
    *   $H_0: \mu = 60$ bpm
    *   $H_a: \mu \ne 60$ bpm (Two-tailed test)

*   **Step 2: Significance Level**
    *   $\alpha = 0.05$

*   **Step 3: Calculate Test Statistic**
    *   $\bar{x} = 62$ bpm
    *   $\mu_0 = 60$ bpm
    *   $s = 8$ bpm
    *   $n = 64$
    *   $z = \frac{62 - 60}{8 / \sqrt{64}} = \frac{2}{8 / 8} = \frac{2}{1} = 2.00$

*   **Step 4: Determine Critical Region/p-value**
    *   **Critical Value Approach**: For a two-tailed test with $\alpha = 0.05$, the critical values are $\pm z_{0.025} \approx \pm 1.96$.
    *   **p-value Approach**: The p-value for $z = 2.00$ in a two-tailed test is $2 \times P(Z > 2.00) \approx 2 \times 0.0228 = 0.0456$.

*   **Step 5: Make a Decision**
    *   **Critical Value Approach**: The calculated z-statistic (2.00) is greater than the critical value (1.96). Reject $H_0$.
    *   **p-value Approach**: The p-value (0.0456) is less than the significance level (0.05). Reject $H_0$.

*   **Step 6: Interpret the Results**
    *   At the 0.05 significance level, there is sufficient evidence to reject the hypothesis that the average resting heart rate of adult athletes is 60 bpm. The sample data suggests it is different from 60 bpm.

---

### 6. Important Points to Remember

*   **Sample Size is Key**: This z-test is specifically for *large* sample sizes ($n \ge 30$). For small sample sizes, you would typically use a t-test.
*   **Population Standard Deviation**: The z-test is most appropriate when the population standard deviation ($\sigma$) is known. When it's unknown and the sample is large, using the sample standard deviation ($s$) is a common and acceptable practice.
*   **Central Limit Theorem**: The validity of this test relies heavily on the Central Limit Theorem, which states that the sampling distribution of the sample mean will be approximately normal for large sample sizes, regardless of the population's distribution.
*   **Hypotheses Direction**: Carefully define your null ($H_0$) and alternative ($H_a$) hypotheses. The direction of the alternative hypothesis determines whether it's a one-tailed (left or right) or two-tailed test, which dictates how you find your critical values or calculate your p-value.
*   **Interpretation**: Always interpret your statistical conclusion back into the context of the original problem. Don't just say "reject $H_0$"; explain what that means for the research question.
*   **Significance Level ($\alpha$)**: The choice of $\alpha$ determines the threshold for statistical significance and the risk of a Type I error.
*   **p-value vs. Critical Value**: Both approaches (p-value and critical value) lead to the same decision but offer different ways of understanding the strength of the evidence against the null hypothesis.

---

### 7. Practice Questions

**Question 1:**
A manufacturing company claims that the average lifespan of its light bulbs is 1500 hours. A sample of 60 light bulbs is tested, and the average lifespan is found to be 1470 hours. The population standard deviation is known to be 120 hours.
a) State the null and alternative hypotheses for a test of the company's claim.
b) Calculate the z-test statistic.
c) If the significance level is $\alpha = 0.05$, determine the critical region for a two-tailed test.
d) Make a decision regarding the null hypothesis.
e) Interpret the results in the context of the problem.

**Question 2:**
A new teaching method is implemented in a school district. The average score on a standardized test for students in previous years was 75. A sample of 40 students taught with the new method achieved an average score of 78. The sample standard deviation is 10. Test the hypothesis that the new teaching method leads to a higher average score than the previous method, using a significance level of $\alpha = 0.01$.
a) State the null and alternative hypotheses.
b) Calculate the z-test statistic.
c) Determine the p-value.
d) Make a decision regarding the null hypothesis.
e) Interpret the results.

**Question 3:**
A researcher wants to determine if the average weight of a particular species of fish has decreased. The historical average weight is 5 kg, with a known population standard deviation of 1.5 kg. A sample of 35 fish is caught, and their average weight is 4.7 kg. Test the hypothesis that the average weight has decreased, using $\alpha = 0.05$.
a) State the null and alternative hypotheses.
b) Calculate the z-test statistic.
c) Determine the critical value for the appropriate test.
d) Make a decision regarding the null hypothesis.
e) Interpret the results.

---

### 8. Answers to Practice Questions

**Answer to Question 1:**
a)
*   $H_0: \mu = 1500$ hours
*   $H_a: \mu \ne 1500$ hours (Two-tailed test)
b) $z = \frac{1470 - 1500}{120 / \sqrt{60}} = \frac{-30}{120 / 7.746} = \frac{-30}{15.49} \approx -1.94$
c) For $\alpha = 0.05$ (two-tailed), the critical values are $\pm z_{0.025} \approx \pm 1.96$. The critical region is $z < -1.96$ or $z > 1.96$.
d) The calculated z-statistic (-1.94) does not fall within the rejection region ($z < -1.96$ or $z > 1.96$). Therefore, we do not reject $H_0$.
e) At the 0.05 significance level, there is not enough evidence to conclude that the average lifespan of the light bulbs is different from 1500 hours.

**Answer to Question 2:**
a)
*   $H_0: \mu = 75$
*   $H_a: \mu > 75$ (Right-tailed test, as we are testing if the new method leads to a *higher* score)
b) $z = \frac{78 - 75}{10 / \sqrt{40}} = \frac{3}{10 / 6.325} = \frac{3}{1.581} \approx 1.90$
c) For a right-tailed test with $\alpha = 0.01$, the p-value is $P(Z > 1.90)$. From the z-table, $P(Z > 1.90) \approx 0.0287$.
d) The p-value (0.0287) is greater than the significance level (0.01). Therefore, we do not reject $H_0$.
e) At the 0.01 significance level, there is not enough evidence to conclude that the new teaching method leads to a higher average score than the previous method.

**Answer to Question 3:**
a)
*   $H_0: \mu = 5$ kg
*   $H_a: \mu < 5$ kg (Left-tailed test, as we are testing if the weight has *decreased*)
b) $z = \frac{4.7 - 5}{1.5 / \sqrt{35}} = \frac{-0.3}{1.5 / 5.916} = \frac{-0.3}{0.2535} \approx -1.18$
c) For a left-tailed test with $\alpha = 0.05$, the critical value is $-z_{0.05}$. From the z-table, $z_{0.05} \approx 1.645$. So, the critical value is -1.645.
d) The calculated z-statistic (-1.18) is greater than the critical value (-1.645). It does not fall within the rejection region ($z < -1.645$). Therefore, we do not reject $H_0$.
e) At the 0.05 significance level, there is not enough evidence to conclude that the average weight of this species of fish has decreased from the historical average of 5 kg.
