---
title: "z Tests for Hypotheses about a Population Mean (for large sample)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4d0"
status: "completed"
scrapedAt: "2026-05-23T17:50:51.335Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 3: Confidence Intervals

### Topic: z Tests for Hypotheses about a Population Mean (for large sample)

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles of hypothesis testing.
*   Formulate null and alternative hypotheses for a population mean.
*   Conduct z-tests for a population mean when the population standard deviation is known and the sample size is large.
*   Interpret the results of a z-test and make decisions about rejecting or failing to reject the null hypothesis.
*   Calculate and interpret p-values associated with z-tests.
*   Understand the concepts of Type I and Type II errors in hypothesis testing.
*   Apply z-tests to real-world problems relevant to electrical science.

---

### Introduction to Hypothesis Testing

Hypothesis testing is a statistical method used to make decisions about a population based on sample data. It involves setting up two competing statements about a population parameter (like the mean) and then using sample evidence to determine which statement is more likely to be true.

This topic focuses on **z-tests for hypotheses about a population mean when the sample size is large**. This scenario is particularly relevant in electrical science where we often deal with large datasets or measurements where the Central Limit Theorem allows us to approximate the sampling distribution of the mean with a normal distribution.

---

### Key Concepts and Definitions

#### 1. Population Parameter vs. Sample Statistic

*   **Population Parameter:** A numerical characteristic of a population (e.g., population mean $\mu$, population standard deviation $\sigma$). These are usually unknown and are what we aim to infer.
*   **Sample Statistic:** A numerical characteristic of a sample (e.g., sample mean $\bar{x}$, sample standard deviation $s$). These are calculated from sample data and are used to estimate population parameters.

#### 2. Hypothesis Testing Framework

Hypothesis testing involves a structured approach:

*   **Null Hypothesis ($H_0$):** A statement about the population parameter that represents the status quo or no effect. It is the statement we assume to be true until we have sufficient evidence to reject it. It always contains an equality sign ($\le$, $\ge$, or $=$).
*   **Alternative Hypothesis ($H_a$ or $H_1$):** A statement that contradicts the null hypothesis. It represents what we are trying to find evidence for. It never contains an equality sign ($<$, $>$, or $\ne$).

#### 3. Types of Tests

The alternative hypothesis determines the type of test:

*   **Two-Tailed Test:** $H_a: \mu \ne \mu_0$ (We are interested if the mean is different from a specific value).
*   **One-Tailed Test (Right-Tailed):** $H_a: \mu > \mu_0$ (We are interested if the mean is greater than a specific value).
*   **One-Tailed Test (Left-Tailed):** $H_a: \mu < \mu_0$ (We are interested if the mean is less than a specific value).

#### 4. Significance Level ($\alpha$)

*   The **significance level** ($\alpha$) is the probability of rejecting the null hypothesis when it is actually true. This is also known as the **Type I error rate**.
*   Commonly chosen values for $\alpha$ are 0.05 (5%), 0.01 (1%), or 0.10 (10%).
*   The choice of $\alpha$ depends on the consequences of making a Type I error.

#### 5. Test Statistic

For hypotheses about a population mean ($\mu$) when the population standard deviation ($\sigma$) is known and the sample size ($n$) is large ($n \ge 30$), we use the **z-test statistic**:

$$ z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}} $$

Where:
*   $\bar{x}$ is the sample mean.
*   $\mu_0$ is the hypothesized population mean (from $H_0$).
*   $\sigma$ is the known population standard deviation.
*   $n$ is the sample size.

#### 6. Sampling Distribution of the Sample Mean

According to the **Central Limit Theorem (CLT)**, for a sufficiently large sample size ($n \ge 30$), the sampling distribution of the sample mean ($\bar{x}$) is approximately normally distributed with:

*   Mean: $E(\bar{x}) = \mu$ (the true population mean)
*   Standard Deviation (Standard Error): $SE(\bar{x}) = \sigma / \sqrt{n}$

When testing a hypothesis about $\mu$ under $H_0$, we assume the population mean is $\mu_0$. Thus, the sampling distribution of $\bar{x}$ under $H_0$ is approximately normal with mean $\mu_0$ and standard error $\sigma / \sqrt{n}$. The z-test statistic standardizes $\bar{x}$ to a standard normal variable.

#### 7. Decision Rules

There are two common ways to make a decision:

*   **Critical Value Approach:**
    *   Determine the critical value(s) from the standard normal (z) distribution based on $\alpha$ and the type of test (one-tailed or two-tailed).
    *   If the calculated z-test statistic falls in the rejection region (beyond the critical value(s)), reject $H_0$. Otherwise, fail to reject $H_0$.

*   **p-value Approach:**
    *   The **p-value** is the probability of observing a sample statistic as extreme as, or more extreme than, the one calculated from the sample, assuming the null hypothesis is true.
    *   If the p-value $\le \alpha$, reject $H_0$.
    *   If the p-value $> \alpha$, fail to reject $H_0$.

#### 8. Type I and Type II Errors

*   **Type I Error:** Rejecting $H_0$ when $H_0$ is actually true. The probability of this error is $\alpha$.
*   **Type II Error:** Failing to reject $H_0$ when $H_a$ is actually true (i.e., $H_0$ is false). The probability of this error is denoted by $\beta$.
*   **Power of the Test:** The probability of correctly rejecting $H_0$ when $H_a$ is true, which is $1 - \beta$.

---

### Steps for Conducting a z-Test for a Population Mean (Large Sample)

1.  **State the Hypotheses:**
    *   Formulate the null hypothesis ($H_0$) and the alternative hypothesis ($H_a$) about the population mean ($\mu$).
    *   Example: If we want to test if the average power consumption of a new circuit design is different from 50 Watts, then:
        *   $H_0: \mu = 50$
        *   $H_a: \mu \ne 50$ (This is a two-tailed test)

2.  **Specify the Significance Level ($\alpha$):**
    *   Choose a significance level (e.g., $\alpha = 0.05$).

3.  **Check Assumptions:**
    *   The sample is a random sample from the population.
    *   The population standard deviation ($\sigma$) is known.
    *   The sample size ($n$) is large ($n \ge 30$). This ensures the sampling distribution of $\bar{x}$ is approximately normal by the CLT.

4.  **Calculate the Test Statistic:**
    *   Compute the z-test statistic using the formula:
        $$ z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}} $$

5.  **Determine the Decision Rule:**
    *   **Critical Value Approach:**
        *   Find the critical z-value(s) for the given $\alpha$ and type of test.
            *   For a two-tailed test: critical values are $\pm z_{\alpha/2}$.
            *   For a right-tailed test: critical value is $z_{\alpha}$.
            *   For a left-tailed test: critical value is $-z_{\alpha}$.
        *   Use a standard normal distribution table or calculator.
    *   **p-value Approach:**
        *   Calculate the p-value associated with the calculated z-test statistic.
            *   For a two-tailed test: $p\text{-value} = 2 \times P(Z \ge |z|)$ or $2 \times P(Z \le -|z|)$.
            *   For a right-tailed test: $p\text{-value} = P(Z \ge z)$.
            *   For a left-tailed test: $p\text{-value} = P(Z \le z)$.
        *   Use a standard normal distribution table or calculator.

6.  **Make a Decision:**
    *   **Critical Value Approach:**
        *   If $|z| > z_{\alpha/2}$ (for two-tailed) or $z > z_{\alpha}$ (for right-tailed) or $z < -z_{\alpha}$ (for left-tailed), reject $H_0$.
        *   Otherwise, fail to reject $H_0$.
    *   **p-value Approach:**
        *   If $p\text{-value} \le \alpha$, reject $H_0$.
        *   Otherwise, fail to reject $H_0$.

7.  **Interpret the Results:**
    *   State the conclusion in the context of the original problem, referring to the population mean and the significance level.

---

### Examples

**Example 1: Power Consumption of Electronic Components**

An engineer is testing a new type of power regulator for electronic devices. The historical average power consumption for the previous model was 250 mA with a known standard deviation of 20 mA. The engineer takes a random sample of 100 of the new regulators and finds the sample mean power consumption to be 240 mA. Use a z-test to determine if the new regulators consume significantly less power than the old ones, at a significance level of $\alpha = 0.05$.

**Solution:**

1.  **State the Hypotheses:**
    *   We want to know if the new regulators consume *less* power.
    *   $H_0: \mu = 250$ mA (The mean power consumption is 250 mA)
    *   $H_a: \mu < 250$ mA (The mean power consumption is less than 250 mA) - This is a left-tailed test.

2.  **Specify the Significance Level:**
    *   $\alpha = 0.05$

3.  **Check Assumptions:**
    *   Sample is random.
    *   Population standard deviation ($\sigma = 20$ mA) is known.
    *   Sample size ($n = 100$) is large ($n \ge 30$).

4.  **Calculate the Test Statistic:**
    *   $\bar{x} = 240$ mA, $\mu_0 = 250$ mA, $\sigma = 20$ mA, $n = 100$.
    *   $z = \frac{240 - 250}{20 / \sqrt{100}} = \frac{-10}{20 / 10} = \frac{-10}{2} = -5.00$

5.  **Determine the Decision Rule:**
    *   **Critical Value Approach:** For a left-tailed test with $\alpha = 0.05$, we need to find the critical z-value such that $P(Z < z_{critical}) = 0.05$. From the z-table, this value is approximately $-1.645$.
        *   Reject $H_0$ if $z < -1.645$.
    *   **p-value Approach:** We need to find $P(Z < -5.00)$. Using a z-table or calculator, this probability is extremely small, very close to 0.
        *   $p\text{-value} \approx 0$
        *   Reject $H_0$ if $p\text{-value} \le 0.05$.

6.  **Make a Decision:**
    *   **Critical Value Approach:** Our calculated z-statistic (-5.00) is less than the critical value (-1.645). So, we reject $H_0$.
    *   **p-value Approach:** The p-value (approximately 0) is less than or equal to $\alpha$ (0.05). So, we reject $H_0$.

7.  **Interpret the Results:**
    *   At the 0.05 significance level, there is sufficient evidence to conclude that the new regulators consume significantly less power than the old ones.

**Example 2: Signal Strength of a Transmitter**

A telecommunications company claims that the average signal strength of their new transmitters is 80 dBm. A research team tests a random sample of 64 transmitters and finds a sample mean signal strength of 78 dBm. The population standard deviation of signal strength is known to be 8 dBm. Test the company's claim at a significance level of $\alpha = 0.01$.

**Solution:**

1.  **State the Hypotheses:**
    *   We want to test the company's claim that the mean is 80 dBm. We are not specifying a direction (more or less), just if it's different.
    *   $H_0: \mu = 80$ dBm
    *   $H_a: \mu \ne 80$ dBm - This is a two-tailed test.

2.  **Specify the Significance Level:**
    *   $\alpha = 0.01$

3.  **Check Assumptions:**
    *   Sample is random.
    *   Population standard deviation ($\sigma = 8$ dBm) is known.
    *   Sample size ($n = 64$) is large ($n \ge 30$).

4.  **Calculate the Test Statistic:**
    *   $\bar{x} = 78$ dBm, $\mu_0 = 80$ dBm, $\sigma = 8$ dBm, $n = 64$.
    *   $z = \frac{78 - 80}{8 / \sqrt{64}} = \frac{-2}{8 / 8} = \frac{-2}{1} = -2.00$

5.  **Determine the Decision Rule:**
    *   **Critical Value Approach:** For a two-tailed test with $\alpha = 0.01$, we need to find the critical z-values that divide the tails. Each tail has an area of $\alpha/2 = 0.01/2 = 0.005$. The critical z-values are approximately $\pm 2.576$.
        *   Reject $H_0$ if $z < -2.576$ or $z > 2.576$.
    *   **p-value Approach:** We need to find the probability of getting a z-score as extreme as -2.00 or more extreme in either tail.
        *   $p\text{-value} = 2 \times P(Z \le -2.00)$ (since the distribution is symmetric)
        *   From the z-table, $P(Z \le -2.00) \approx 0.0228$.
        *   $p\text{-value} = 2 \times 0.0228 = 0.0456$.
        *   Reject $H_0$ if $p\text{-value} \le 0.01$.

6.  **Make a Decision:**
    *   **Critical Value Approach:** Our calculated z-statistic (-2.00) is not in the rejection region (it is between -2.576 and 2.576). So, we fail to reject $H_0$.
    *   **p-value Approach:** The p-value (0.0456) is greater than $\alpha$ (0.01). So, we fail to reject $H_0$.

7.  **Interpret the Results:**
    *   At the 0.01 significance level, there is not enough evidence to conclude that the average signal strength of the new transmitters is different from the claimed 80 dBm.

---

### Important Points to Remember

*   **Large Sample Size:** The z-test for the mean is appropriate when $n \ge 30$ due to the Central Limit Theorem, even if the population distribution is not normal.
*   **Known Population Standard Deviation:** This method requires that the population standard deviation ($\sigma$) be known. If $\sigma$ is unknown and $n \ge 30$, we typically use the sample standard deviation ($s$) as an estimate for $\sigma$, and the t-distribution is technically more accurate, but the z-distribution provides a very close approximation. However, for strict adherence to the z-test for the mean, $\sigma$ is assumed known. (Devore, Chapter 7.2).
*   **Hypotheses Structure:** Always ensure $H_0$ contains the equality sign.
*   **Type of Test:** Carefully choose between one-tailed and two-tailed tests based on the research question.
*   **Significance Level ($\alpha$):** This controls the risk of a Type I error. A smaller $\alpha$ leads to a smaller rejection region and thus less power to detect a true effect.
*   **p-value Interpretation:** The p-value is the probability of observing the data (or more extreme data) *if the null hypothesis were true*. It is *not* the probability that the null hypothesis is true.
*   **Decision:** "Fail to reject $H_0$" does not mean $H_0$ is true; it means there isn't enough evidence to reject it. "Reject $H_0$" means there is sufficient evidence against $H_0$.

---

### Practice Questions/Exercises

**Question 1:**
A manufacturer of electronic resistors claims that the average resistance of their components is 100 ohms. A sample of 100 resistors is taken, and the sample mean resistance is found to be 101.5 ohms. The population standard deviation of the resistance is known to be 5 ohms.

(a) State the null and alternative hypotheses for testing the manufacturer's claim, assuming we want to check if the average resistance is *different* from 100 ohms.
(b) Calculate the z-test statistic.
(c) If the significance level is $\alpha = 0.05$, what is the critical z-value for this test?
(d) Make a decision regarding the null hypothesis using the critical value approach.
(e) What is the p-value for this test? Make a decision using the p-value approach.
(f) Interpret the results in the context of the problem.

**Question 2:**
An electrical engineer is working with a new type of sensor that is supposed to detect a signal with a mean amplitude of 5.0 volts. The population standard deviation of the sensor's detection is known to be 0.4 volts. A sample of 40 sensor readings is taken, and the sample mean amplitude is 4.9 volts.

(a) State the null and alternative hypotheses to test if the mean signal amplitude is *less than* 5.0 volts.
(b) Calculate the z-test statistic.
(c) If the significance level is $\alpha = 0.01$, what is the critical z-value for this test?
(d) Make a decision regarding the null hypothesis using the critical value approach.
(e) What is the p-value for this test? Make a decision using the p-value approach.
(f) Interpret the results in the context of the problem.

---

### Answers to Practice Questions

**Answer 1:**
(a)
*   $H_0: \mu = 100$ ohms
*   $H_a: \mu \ne 100$ ohms (Two-tailed test)

(b)
*   $\bar{x} = 101.5$, $\mu_0 = 100$, $\sigma = 5$, $n = 100$
*   $z = \frac{101.5 - 100}{5 / \sqrt{100}} = \frac{1.5}{5 / 10} = \frac{1.5}{0.5} = 3.00$

(c)
*   For a two-tailed test with $\alpha = 0.05$, the critical z-values are $\pm z_{\alpha/2} = \pm z_{0.025}$.
*   Critical z-values = $\pm 1.96$.

(d)
*   The calculated z-statistic is 3.00.
*   Since $|3.00| > 1.96$, we reject $H_0$.

(e)
*   For a two-tailed test, $p\text{-value} = 2 \times P(Z \ge 3.00)$.
*   From the z-table, $P(Z \ge 3.00) \approx 0.0013$.
*   $p\text{-value} = 2 \times 0.0013 = 0.0026$.
*   Since $0.0026 \le 0.05$, we reject $H_0$.

(f)
*   At the 0.05 significance level, there is sufficient evidence to conclude that the average resistance of the resistors is different from 100 ohms.

**Answer 2:**
(a)
*   $H_0: \mu = 5.0$ volts
*   $H_a: \mu < 5.0$ volts (Left-tailed test)

(b)
*   $\bar{x} = 4.9$, $\mu_0 = 5.0$, $\sigma = 0.4$, $n = 40$
*   $z = \frac{4.9 - 5.0}{0.4 / \sqrt{40}} = \frac{-0.1}{0.4 / 6.3245} = \frac{-0.1}{0.063245} \approx -1.58$

(c)
*   For a left-tailed test with $\alpha = 0.01$, we need to find the critical z-value such that $P(Z < z_{critical}) = 0.01$.
*   Critical z-value = $-2.33$.

(d)
*   The calculated z-statistic is approximately -1.58.
*   Since -1.58 is not less than -2.33, we fail to reject $H_0$.

(e)
*   For a left-tailed test, $p\text{-value} = P(Z \le -1.58)$.
*   From the z-table, $P(Z \le -1.58) \approx 0.0571$.
*   Since $0.0571 > 0.01$, we fail to reject $H_0$.

(f)
*   At the 0.01 significance level, there is not enough evidence to conclude that the mean signal amplitude detected by the new sensors is less than 5.0 volts.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### References and Further Reading

*   **Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning.**
    *   Chapter 7: Hypothesis Testing (Specifically sections dealing with z-tests for means).
*   **Veerarajan, T. (2008). *Probability, Statistics and Random Processes* (3rd ed.). The McGraw-Hill.**
    *   Chapters related to testing of statistical hypotheses and applications.
*   **Ross, S. M. (2020). *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press.**
    *   Sections covering hypothesis testing for population means.
*   **Papoulis, A., & Pillai, S. U. (2002). *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill.**
    *   While more advanced, this text provides foundational concepts of probability that underpin statistical inference.
*   **Palaniammal, S. (2015). *Probability and Random Processes* (3rd ed.). PHI Learning Private Limited.**
    *   Relevant chapters on hypothesis testing.
*   **Anderson, D. F., Timo, Benedek. (2017). *Introduction to Probability* (1st ed.). Cambridge.**
    *   Provides foundational probability theory.

---

This topic aligns with **Course Outcome 3 (CO3)** by enabling students to estimate population parameters, assess their certainty with confidence intervals (implicitly, as hypothesis testing is closely related to confidence intervals), and test hypotheses about population means using z-tests, demonstrating a **Knowledge Level of K3 (Application)**.