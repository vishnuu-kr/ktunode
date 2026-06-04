---
title: "t Test for Hypotheses about a Population Mean (for small sample)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4d1"
status: "completed"
scrapedAt: "2026-05-23T17:50:52.028Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4
## Module 3: Confidence Intervals
## Topic: t-Test for Hypotheses about a Population Mean (for small samples)

---

### **1. Introduction to Hypothesis Testing**

Hypothesis testing is a statistical method used to make decisions about a population based on sample data. It involves formulating a null hypothesis ($H_0$) and an alternative hypothesis ($H_1$) and then using sample statistics to determine whether there is enough evidence to reject the null hypothesis.

**Key Concepts:**

*   **Null Hypothesis ($H_0$):** A statement about a population parameter that is assumed to be true until evidence suggests otherwise. It typically states that there is no effect or no difference.
*   **Alternative Hypothesis ($H_1$ or $H_a$):** A statement that contradicts the null hypothesis. It represents what we are trying to find evidence for.
*   **Test Statistic:** A value calculated from sample data that is used to decide whether to reject the null hypothesis.
*   **Significance Level ($\alpha$):** The probability of rejecting the null hypothesis when it is actually true (Type I error). Commonly set at 0.05, 0.01, or 0.10.
*   **P-value:** The probability of observing a test statistic as extreme as, or more extreme than, the one computed from the sample, assuming the null hypothesis is true.
*   **Decision Rule:** If the P-value is less than or equal to the significance level ($\alpha$), we reject the null hypothesis. Otherwise, we fail to reject the null hypothesis.

---

### **2. The t-Test for a Population Mean (Small Samples)**

When the population standard deviation ($\sigma$) is unknown and the sample size is small (typically $n < 30$), we use the t-distribution to perform hypothesis tests about a population mean ($\mu$). The t-distribution is similar to the normal distribution but has heavier tails, accounting for the extra uncertainty introduced by estimating $\sigma$ with the sample standard deviation ($s$).

**Conditions for using the t-test:**

*   The sample is a random sample from the population.
*   The population from which the sample is drawn is approximately normally distributed. (This assumption is less critical for larger sample sizes due to the Central Limit Theorem, but for small samples, normality is important).
*   The population standard deviation ($\sigma$) is unknown.

**The t-Test Statistic:**

The t-test statistic for a population mean is calculated as:

$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$

Where:
*   $\bar{x}$ is the sample mean.
*   $\mu_0$ is the hypothesized population mean (from the null hypothesis).
*   $s$ is the sample standard deviation.
*   $n$ is the sample size.

**Degrees of Freedom (df):**

The t-distribution is characterized by its degrees of freedom, which is given by $df = n - 1$.

---

### **3. Types of t-Tests for a Population Mean**

We can perform three types of t-tests, depending on the alternative hypothesis:

#### **3.1. One-Tailed t-Test (Right-Tailed)**

*   **Null Hypothesis ($H_0$):** $\mu = \mu_0$ (The population mean is equal to a specific value.)
*   **Alternative Hypothesis ($H_1$):** $\mu > \mu_0$ (The population mean is greater than a specific value.)

**Decision Rule:** Reject $H_0$ if $t \ge t_{\alpha, df}$. The critical value $t_{\alpha, df}$ is the value from the t-distribution with $df$ degrees of freedom such that the area to its right is $\alpha$.

#### **3.2. One-Tailed t-Test (Left-Tailed)**

*   **Null Hypothesis ($H_0$):** $\mu = \mu_0$
*   **Alternative Hypothesis ($H_1$):** $\mu < \mu_0$ (The population mean is less than a specific value.)

**Decision Rule:** Reject $H_0$ if $t \le -t_{\alpha, df}$. The critical value $-t_{\alpha, df}$ is the value from the t-distribution with $df$ degrees of freedom such that the area to its left is $\alpha$.

#### **3.3. Two-Tailed t-Test**

*   **Null Hypothesis ($H_0$):** $\mu = \mu_0$
*   **Alternative Hypothesis ($H_1$):** $\mu \ne \mu_0$ (The population mean is different from a specific value.)

**Decision Rule:** Reject $H_0$ if $|t| \ge t_{\alpha/2, df}$. The critical value $t_{\alpha/2, df}$ is the value from the t-distribution with $df$ degrees of freedom such that the area in the right tail is $\alpha/2$. This means we reject $H_0$ if $t \ge t_{\alpha/2, df}$ or $t \le -t_{\alpha/2, df}$.

---

### **4. Steps for Performing a t-Test**

1.  **State the null and alternative hypotheses.**
2.  **Choose the significance level ($\alpha$).**
3.  **Calculate the sample statistic:** sample mean ($\bar{x}$) and sample standard deviation ($s$).
4.  **Determine the degrees of freedom:** $df = n - 1$.
5.  **Calculate the test statistic ($t$).**
6.  **Determine the critical region or P-value.**
    *   **Critical Region Approach:** Find the critical value(s) from the t-distribution table based on $\alpha$ and $df$.
    *   **P-value Approach:** Calculate the probability of observing a test statistic as extreme as or more extreme than the calculated one.
7.  **Make a decision:**
    *   If the test statistic falls in the critical region (or if P-value $\le \alpha$), reject $H_0$.
    *   Otherwise, fail to reject $H_0$.
8.  **Interpret the results in the context of the problem.**

---

### **5. Example (Referencing Devore J. L. - Chapter 9)**

**Problem:** An engineer working on optimizing the performance of a new electrical component claims that the average lifespan of the component is at least 500 hours. To test this claim, a sample of 15 components is taken, and their lifespans are recorded. The sample mean lifespan is 485 hours, and the sample standard deviation is 30 hours. Using a significance level of $\alpha = 0.05$, is there enough evidence to reject the engineer's claim?

**Solution:**

1.  **Hypotheses:**
    *   $H_0: \mu \ge 500$ (The average lifespan is at least 500 hours.)
    *   $H_1: \mu < 500$ (The average lifespan is less than 500 hours.)
    *(Note: For hypothesis testing about a claim, it's often better to set the null hypothesis as the status quo or the claim being tested. Here, the engineer's claim is that the mean is *at least* 500. So, $H_0: \mu \ge 500$ is appropriate. However, for calculation purposes, we often use the boundary value: $H_0: \mu = 500$. The alternative becomes $H_1: \mu < 500$, indicating we are testing if the mean is *less than* 500.)*

2.  **Significance Level:** $\alpha = 0.05$.

3.  **Sample Statistics:**
    *   $\bar{x} = 485$ hours
    *   $s = 30$ hours
    *   $n = 15$

4.  **Degrees of Freedom:** $df = n - 1 = 15 - 1 = 14$.

5.  **Test Statistic:**
    $t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} = \frac{485 - 500}{30 / \sqrt{15}} = \frac{-15}{30 / 3.873} \approx \frac{-15}{7.746} \approx -1.936$

6.  **Critical Region:** Since this is a left-tailed test ($H_1: \mu < 500$) with $\alpha = 0.05$ and $df = 14$, we look up the critical value $t_{0.05, 14}$ in the t-distribution table. From the t-table, $t_{0.05, 14} \approx 1.761$. For a left-tailed test, the critical value is $-1.761$.

7.  **Decision:**
    Our calculated test statistic is $t = -1.936$.
    Since $-1.936 \le -1.761$, our test statistic falls in the critical region. Therefore, we reject $H_0$.

8.  **Interpretation:**
    At the 0.05 significance level, there is sufficient evidence to conclude that the average lifespan of the electrical component is less than 500 hours, contradicting the engineer's claim.

---

### **6. Using P-values for the t-Test**

We can also use the P-value approach.

**For the example above:**

*   Test statistic $t = -1.936$.
*   This is a left-tailed test. We need to find $P(T \le -1.936)$ where $T$ follows a t-distribution with $df = 14$.
*   Using a t-distribution table or statistical software, we find that for $df = 14$:
    *   $P(T \le -1.761) = 0.05$
    *   $P(T \le -2.145) = 0.025$
*   Since $-1.936$ is between $-1.761$ and $-2.145$, the P-value is between 0.025 and 0.05. Let's estimate it's around 0.037.
*   **Decision:** Since P-value (approx. 0.037) $\le \alpha$ (0.05), we reject $H_0$.

---

### **7. Connection to Confidence Intervals (CO3)**

The t-test for a population mean is closely related to confidence intervals for the population mean. For a one-tailed test:

*   If the hypothesized mean $\mu_0$ falls outside the $(1-\alpha)100\%$ confidence interval for $\mu$, we reject $H_0$ in favor of $H_1$.
*   For a left-tailed test ($H_1: \mu < \mu_0$), we reject $H_0$ if $\mu_0$ is less than the lower bound of the $(1-\alpha)100\%$ confidence interval. This is equivalent to the upper bound of the $\alpha \times 100\%$ confidence interval being less than $\mu_0$.
*   For a right-tailed test ($H_1: \mu > \mu_0$), we reject $H_0$ if $\mu_0$ is greater than the upper bound of the $(1-\alpha)100\%$ confidence interval. This is equivalent to the lower bound of the $\alpha \times 100\%$ confidence interval being greater than $\mu_0$.

For a two-tailed test ($H_1: \mu \ne \mu_0$):

*   We reject $H_0$ if $\mu_0$ falls outside the $(1-\alpha)100\%$ confidence interval for $\mu$. This means if $\mu_0$ is less than the lower bound or greater than the upper bound.

**Confidence Interval Formula for $\mu$ (when $\sigma$ is unknown):**

$\bar{x} \pm t_{\alpha/2, n-1} \left( \frac{s}{\sqrt{n}} \right)$

**Example (using the previous problem):** Let's construct a 95% confidence interval for the mean lifespan.
*   $\alpha = 0.05$, so $\alpha/2 = 0.025$.
*   $df = 14$.
*   $t_{0.025, 14} \approx 2.145$.
*   $CI = 485 \pm 2.145 \left( \frac{30}{\sqrt{15}} \right) = 485 \pm 2.145 (7.746) \approx 485 \pm 16.62$.
*   The 95% CI is approximately $(468.38, 501.62)$.

**Relating back to the test:**
Our $H_0$ was $\mu = 500$. Since 500 falls within the 95% confidence interval $(468.38, 501.62)$, we would **fail to reject** $H_0$ for a two-tailed test at $\alpha = 0.05$.

However, our original test was a **left-tailed test** ($H_1: \mu < 500$). For a left-tailed test with significance level $\alpha$, we are interested in whether the upper bound of the $(1-\alpha)100\%$ confidence interval for $\mu$ is less than $\mu_0$.
Alternatively, we can consider a $(1-2\alpha)100\%$ confidence interval. Or, for a one-tailed test, we can check if the hypothesized value falls outside the one-sided confidence interval.

A more direct connection for a left-tailed test ($H_1: \mu < \mu_0$) at significance level $\alpha$:
We reject $H_0$ if the lower bound of the $(1-\alpha)$ upper confidence bound is less than $\mu_0$.
The $(1-\alpha)$ upper confidence bound for $\mu$ is $\bar{x} + t_{\alpha, n-1} \left( \frac{s}{\sqrt{n}} \right)$.
In our example, the upper bound for a 95% confidence interval ($\alpha=0.05$) is $485 + 1.761 (7.746) \approx 485 + 13.65 \approx 498.65$.
Since $498.65 < 500$, we reject $H_0$.

This highlights the dual nature of hypothesis testing and confidence intervals.

---

### **8. Practice Questions**

**Question 1:** A researcher claims that the average reaction time of a particular sensory stimulus is 0.2 seconds. A sample of 10 subjects is taken, and their reaction times (in seconds) are recorded as: 0.22, 0.19, 0.21, 0.20, 0.18, 0.23, 0.20, 0.21, 0.19, 0.22.
Perform a hypothesis test at the $\alpha = 0.05$ significance level to determine if the average reaction time is different from 0.2 seconds.

**Question 2:** A manufacturer of electrical fuses claims that the average breaking strength of their fuses is at least 150 psi. A sample of 12 fuses is tested, and the mean breaking strength is found to be 145 psi with a standard deviation of 8 psi. Is there sufficient evidence to support the manufacturer's claim at the $\alpha = 0.01$ significance level?

---

### **9. Answers to Practice Questions**

**Answer to Question 1:**

1.  **Hypotheses:**
    *   $H_0: \mu = 0.20$
    *   $H_1: \mu \ne 0.20$ (This is a two-tailed test because we are testing if it's "different from".)

2.  **Significance Level:** $\alpha = 0.05$.

3.  **Sample Statistics:**
    *   Calculate the sample mean ($\bar{x}$):
        $\bar{x} = \frac{0.22+0.19+0.21+0.20+0.18+0.23+0.20+0.21+0.19+0.22}{10} = 0.205$ seconds.
    *   Calculate the sample standard deviation ($s$):
        First, calculate variance ($s^2$): $\frac{\sum(x_i - \bar{x})^2}{n-1}$
        $\sum(x_i - \bar{x})^2 = (0.015)^2 + (-0.015)^2 + (0.005)^2 + (-0.005)^2 + (-0.025)^2 + (0.025)^2 + (-0.005)^2 + (0.005)^2 + (-0.015)^2 + (0.015)^2$
        $= 0.000225 + 0.000225 + 0.000025 + 0.000025 + 0.000625 + 0.000625 + 0.000025 + 0.000025 + 0.000225 + 0.000225 = 0.00225$
        $s^2 = \frac{0.00225}{10-1} = \frac{0.00225}{9} = 0.00025$
        $s = \sqrt{0.00025} = 0.01581$ seconds.
    *   $n = 10$.

4.  **Degrees of Freedom:** $df = n - 1 = 10 - 1 = 9$.

5.  **Test Statistic:**
    $t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} = \frac{0.205 - 0.20}{0.01581 / \sqrt{10}} = \frac{0.005}{0.01581 / 3.162} \approx \frac{0.005}{0.005} \approx 1.00$

6.  **Critical Region:** For a two-tailed test with $\alpha = 0.05$ and $df = 9$, we need $t_{\alpha/2, df} = t_{0.025, 9}$. From the t-table, $t_{0.025, 9} \approx 2.262$. The critical region is $|t| \ge 2.262$.

7.  **Decision:**
    Our calculated test statistic is $t = 1.00$.
    Since $|1.00| < 2.262$, our test statistic does not fall in the critical region. Therefore, we fail to reject $H_0$.

8.  **Interpretation:**
    At the 0.05 significance level, there is not enough evidence to conclude that the average reaction time of the sensory stimulus is different from 0.2 seconds.

---

**Answer to Question 2:**

1.  **Hypotheses:**
    *   $H_0: \mu \ge 150$ psi (Manufacturer's claim)
    *   $H_1: \mu < 150$ psi

2.  **Significance Level:** $\alpha = 0.01$.

3.  **Sample Statistics:**
    *   $\bar{x} = 145$ psi
    *   $s = 8$ psi
    *   $n = 12$

4.  **Degrees of Freedom:** $df = n - 1 = 12 - 1 = 11$.

5.  **Test Statistic:**
    $t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} = \frac{145 - 150}{8 / \sqrt{12}} = \frac{-5}{8 / 3.464} \approx \frac{-5}{2.309} \approx -2.165$

6.  **Critical Region:** Since this is a left-tailed test ($H_1: \mu < 150$) with $\alpha = 0.01$ and $df = 11$, we look up $t_{0.01, 11}$. From the t-table, $t_{0.01, 11} \approx 2.718$. For a left-tailed test, the critical value is $-2.718$.

7.  **Decision:**
    Our calculated test statistic is $t = -2.165$.
    Since $-2.165 > -2.718$, our test statistic does not fall in the critical region. Therefore, we fail to reject $H_0$.

8.  **Interpretation:**
    At the 0.01 significance level, there is not enough evidence to reject the manufacturer's claim that the average breaking strength of their fuses is at least 150 psi. The observed mean of 145 psi could be due to random sampling variability.

---

### **10. Important Points to Remember**

*   **When to use t-test:** Use when the population standard deviation ($\sigma$) is unknown and the sample size is small ($n < 30$), *provided* the population is approximately normally distributed.
*   **Degrees of Freedom:** Crucial for using the t-distribution table correctly ($df = n-1$).
*   **Type of Test:** Be careful to identify whether the test is one-tailed (left or right) or two-tailed based on the alternative hypothesis.
*   **P-value vs. Critical Value:** Both methods lead to the same conclusion. Understand how to use both.
*   **Interpretation:** Always state your conclusion in the context of the original problem, referencing the significance level.
*   **Connection to Confidence Intervals:** Hypothesis testing and confidence intervals are complementary tools for making inferences about population parameters.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### **11. Textbook References**

*   **Devore J. L. (2016), *Probability and Statistics for Engineering and the Sciences* (9th ed.):** Chapter 9 covers Hypothesis Testing, including the t-test for a single mean. This is the primary resource for detailed explanations and examples.
*   **T Veerarajan (2008), *Probability, Statistics and Random Processes* (3rd ed.):** Likely covers hypothesis testing in its statistical inference chapters. You can refer to its treatment of small sample tests.

---

### **12. Alignment with Course Outcomes**

*   **CO3:** This topic directly addresses the ability to "test hypotheses about population means" using the "one-sample t-test," which is precisely what has been covered. This aligns with a Knowledge Level of K3 (Apply). The connection to confidence intervals further reinforces this outcome.
*   **CO1 & CO2:** While not directly about random variables themselves, the understanding of sample statistics ($\bar{x}$, $s$) and their distributions (t-distribution) builds upon the concepts of random variables and their properties.

---