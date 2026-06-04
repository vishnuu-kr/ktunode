---
title: "z Tests for Hypotheses about a Population Mean (for large sample)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 3: Confidence Intervals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35dac"
status: "completed"
scrapedAt: "2026-05-23T16:17:02.868Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 3: Confidence Intervals

### Topic: z Tests for Hypotheses about a Population Mean (for Large Sample)

---

**Learning Outcomes:**

*   Understand the purpose and structure of hypothesis testing for a population mean using z-tests.
*   Formulate null and alternative hypotheses for a population mean.
*   Identify and apply the appropriate test statistic for a z-test.
*   Determine critical regions and p-values to make decisions in hypothesis testing.
*   Interpret the results of a z-test in the context of an electrical science problem.
*   Understand the concepts of Type I and Type II errors.
*   Calculate the power of a test.

---

**Course Outcomes Alignment:**

This topic directly contributes to **CO3: Estimate population parameters, assess their certainty with confidence intervals, and test hypotheses about population means and proportions using z-tests and the one-sample t-test.** Specifically, it focuses on the hypothesis testing aspect for population means using z-tests, aligning with the "test hypotheses about population means using z-tests" component. The knowledge level is K3 (Apply), as students will be expected to apply these principles to solve problems.

---

### 1. Introduction to Hypothesis Testing

Hypothesis testing is a statistical method used to make decisions about a population based on sample data. It's a formal procedure to determine whether there is enough evidence in the sample data to reject a statement about the population.

**Key Concepts:**

*   **Population:** The entire group of interest.
*   **Sample:** A subset of the population from which data is collected.
*   **Parameter:** A numerical characteristic of a population (e.g., population mean, $\mu$).
*   **Statistic:** A numerical characteristic of a sample (e.g., sample mean, $\bar{x}$).

**Why Hypothesis Testing?**

In electrical science, we often deal with situations where we want to verify claims or assess the performance of systems or components. For example:

*   Is the average power output of a new solar panel design significantly higher than the current standard?
*   Has the average response time of a control system improved after an update?
*   Is the average lifespan of a particular electronic component at least a certain number of hours?

Hypothesis testing provides a structured framework to answer these questions using sample data.

---

### 2. The Structure of a Hypothesis Test for a Population Mean ($\mu$)

A hypothesis test involves setting up two competing statements about the population parameter and then using sample data to decide which statement is more plausible.

**Steps in Hypothesis Testing:**

1.  **State the Null and Alternative Hypotheses:**
2.  **Choose the Significance Level ($\alpha$):**
3.  **Select the Test Statistic:**
4.  **Determine the Decision Rule:**
5.  **Collect Sample Data and Compute the Test Statistic:**
6.  **Make a Decision:**
7.  **Interpret the Results:**

---

### 3. Stating the Null and Alternative Hypotheses

The first step is to translate the research question into two mutually exclusive statements: the null hypothesis ($H_0$) and the alternative hypothesis ($H_a$ or $H_1$).

**Null Hypothesis ($H_0$):**
*   This is a statement of "no effect," "no difference," or "no change." It represents the status quo or a claim that is assumed to be true until proven otherwise.
*   It always contains an equality sign (=, $\le$, or $\ge$).
*   For testing a population mean, $H_0$ is typically of the form: $H_0: \mu = \mu_0$, where $\mu_0$ is a specific hypothesized value for the population mean.

**Alternative Hypothesis ($H_a$ or $H_1$):**
*   This is the statement that contradicts the null hypothesis. It represents what we are trying to find evidence for.
*   It never contains an equality sign ($\ne$, $<$, or $>$).
*   There are three possible forms for the alternative hypothesis:
    *   **Two-tailed test:** $H_a: \mu \ne \mu_0$ (The population mean is different from $\mu_0$)
    *   **One-tailed (right-tailed) test:** $H_a: \mu > \mu_0$ (The population mean is greater than $\mu_0$)
    *   **One-tailed (left-tailed) test:** $H_a: \mu < \mu_0$ (The population mean is less than $\mu_0$)

**Example:**
An engineer claims that the average voltage output of a new power supply is 12.5V. We want to test if the average voltage is indeed 12.5V.

*   **Null Hypothesis ($H_0$):** $\mu = 12.5$ (The average voltage output is 12.5V)
*   **Alternative Hypothesis ($H_a$):**
    *   If we want to check if it's *different* from 12.5V: $H_a: \mu \ne 12.5$ (Two-tailed test)
    *   If we want to check if it's *higher* than 12.5V: $H_a: \mu > 12.5$ (Right-tailed test)
    *   If we want to check if it's *lower* than 12.5V: $H_a: \mu < 12.5$ (Left-tailed test)

**Important Note:** The choice between a one-tailed or two-tailed test depends on the specific question being asked and the nature of the problem.

---

### 4. Choosing the Significance Level ($\alpha$)

The significance level, denoted by $\alpha$, is the probability of rejecting the null hypothesis when it is actually true. This is also known as the **Type I error**.

*   Commonly chosen values for $\alpha$ are 0.05 (5%), 0.01 (1%), and 0.10 (10%).
*   A smaller $\alpha$ makes it harder to reject $H_0$, thus reducing the risk of a Type I error but increasing the risk of a Type II error (failing to reject $H_0$ when it is false).

**Devore (9th ed., p. 291) emphasizes:** "The value of $\alpha$ is determined by the experimenter before any data are collected. It is the probability of a Type I error, which is the error of concluding that the parameter is not $\mu_0$ when in fact it is $\mu_0$."

---

### 5. Selecting the Test Statistic (z-test for Large Samples)

For large samples ($n \ge 30$ is a common rule of thumb, or when the population standard deviation $\sigma$ is known), the Central Limit Theorem guarantees that the sampling distribution of the sample mean $\bar{x}$ is approximately normal.

**Conditions for using a z-test for $\mu$:**

1.  The sample is a **random sample**.
2.  The population standard deviation ($\sigma$) is **known**.
3.  The sample size is **large** ($n \ge 30$).
    *   *Alternatively, if the population is normally distributed, a z-test can be used regardless of sample size, even if $\sigma$ is unknown and estimated by $s$ (though a t-test is generally preferred if $\sigma$ is unknown).*

**The z-test statistic:**

When the population standard deviation $\sigma$ is known, the test statistic is calculated as:

$z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$

Where:
*   $\bar{x}$ is the sample mean.
*   $\mu_0$ is the hypothesized population mean (from $H_0$).
*   $\sigma$ is the population standard deviation.
*   $n$ is the sample size.

**Veerarajan (3rd ed., p. 321) states:** "When the population standard deviation $\sigma$ is known, the test statistic for testing $H_0: \mu = \mu_0$ against $H_1: \mu \ne \mu_0$ (or other alternatives) is given by $z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$."

---

### 6. Determining the Decision Rule

The decision rule specifies when we will reject the null hypothesis. This can be done in two ways:

**a) Critical Value Approach:**

*   Based on the significance level $\alpha$ and the type of test (one-tailed or two-tailed), we find critical values from the standard normal (z) distribution.
*   **Critical Region:** The set of values for the test statistic that would lead to rejection of $H_0$.

| Alternative Hypothesis ($H_a$) | Critical Region (Reject $H_0$ if...) |
| :----------------------------- | :----------------------------------- |
| $H_a: \mu \ne \mu_0$ (Two-tailed) | $|z| > z_{\alpha/2}$ (i.e., $z > z_{\alpha/2}$ or $z < -z_{\alpha/2}$) |
| $H_a: \mu > \mu_0$ (Right-tailed) | $z > z_{\alpha}$                  |
| $H_a: \mu < \mu_0$ (Left-tailed) | $z < -z_{\alpha}$                 |

*   $z_{\alpha}$ is the z-score such that the area to its right under the standard normal curve is $\alpha$.
*   $z_{\alpha/2}$ is the z-score such that the area to its right under the standard normal curve is $\alpha/2$. (This means the area between $-z_{\alpha/2}$ and $z_{\alpha/2}$ is $1-\alpha$).

**b) p-value Approach:**

*   The p-value is the probability of observing a test statistic as extreme as, or more extreme than, the one computed from the sample data, assuming the null hypothesis is true.
*   **Decision Rule:** Reject $H_0$ if the p-value is less than or equal to the significance level $\alpha$ (p-value $\le \alpha$).

| Alternative Hypothesis ($H_a$) | p-value Calculation                      |
| :----------------------------- | :--------------------------------------- |
| $H_a: \mu \ne \mu_0$ (Two-tailed) | $p = 2 \times P(Z \ge |z_{obs}|)$ or $p = 2 \times P(Z \le -|z_{obs}|)$ |
| $H_a: \mu > \mu_0$ (Right-tailed) | $p = P(Z \ge z_{obs})$                  |
| $H_a: \mu < \mu_0$ (Left-tailed) | $p = P(Z \le z_{obs})$                 |

Where $z_{obs}$ is the calculated value of the test statistic.

**Devore (9th ed., p. 294) explains the p-value:** "The p-value is the smallest significance level at which the observed result or a more extreme result would cause rejection of the null hypothesis."

---

### 7. Collecting Sample Data and Computing the Test Statistic

This involves taking a random sample from the population and calculating the sample mean ($\bar{x}$) and, if $\sigma$ is unknown, the sample standard deviation ($s$).

**If $\sigma$ is unknown, we can use the sample standard deviation ($s$) as an estimate of $\sigma$. The test statistic becomes:**

$z = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$

This is still referred to as a z-test if the sample size is large ($n \ge 30$), as the distribution of $s/\sqrt{n}$ will be close to the distribution of $\sigma/\sqrt{n}$ by the Law of Large Numbers and the Central Limit Theorem.

**Reference:** According to Ross (6th ed., p. 228), for large sample sizes, the sample standard deviation $s$ can be used to estimate $\sigma$ in the z-test formula.

---

### 8. Making a Decision and Interpreting the Results

**Decision:**

*   **Critical Value Approach:** If the computed test statistic falls into the critical region, reject $H_0$. Otherwise, do not reject $H_0$.
*   **p-value Approach:** If the p-value is less than or equal to $\alpha$, reject $H_0$. Otherwise, do not reject $H_0$.

**Interpretation:**

*   **If $H_0$ is rejected:** There is sufficient statistical evidence to conclude that the alternative hypothesis is true.
*   **If $H_0$ is not rejected:** There is not enough statistical evidence to conclude that the alternative hypothesis is true. This does **not** mean $H_0$ is true, only that the sample data does not provide enough evidence to reject it.

**Example Scenario:**
An electrical engineer wants to test if the average lifespan of a new type of LED bulb is greater than 50,000 hours. A sample of 100 bulbs is tested, and the sample mean lifespan is $\bar{x} = 51,500$ hours. The population standard deviation is known to be $\sigma = 5,000$ hours. We will use a significance level of $\alpha = 0.05$.

1.  **Hypotheses:**
    *   $H_0: \mu = 50,000$
    *   $H_a: \mu > 50,000$ (Right-tailed test)

2.  **Significance Level:** $\alpha = 0.05$

3.  **Test Statistic:** Since $\sigma$ is known and $n=100 \ge 30$, we use the z-test.
    $z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}} = \frac{51,500 - 50,000}{5,000 / \sqrt{100}} = \frac{1,500}{5,000 / 10} = \frac{1,500}{500} = 3.0$

4.  **Decision Rule (Critical Value Approach):**
    For a right-tailed test with $\alpha = 0.05$, the critical value is $z_{0.05} = 1.645$.
    We reject $H_0$ if $z > 1.645$.

5.  **Decision:**
    Our calculated test statistic is $z_{obs} = 3.0$. Since $3.0 > 1.645$, we reject $H_0$.

6.  **Interpretation:**
    At the 0.05 significance level, there is sufficient statistical evidence to conclude that the average lifespan of the new type of LED bulb is greater than 50,000 hours.

**Decision Rule (p-value Approach):**
*   For $H_a: \mu > 50,000$, the p-value is $P(Z \ge 3.0)$.
*   Using a z-table or calculator, $P(Z \ge 3.0) \approx 0.0013$.
*   Since $0.0013 \le 0.05$, we reject $H_0$.

---

### 9. Errors in Hypothesis Testing

When making decisions based on sample data, there's always a risk of making an incorrect conclusion.

**Types of Errors:**

*   **Type I Error:** Rejecting the null hypothesis ($H_0$) when it is actually true.
    *   The probability of a Type I error is denoted by $\alpha$ (the significance level).
    *   **Example:** Concluding that the average lifespan of LED bulbs is greater than 50,000 hours when it is actually 50,000 hours.

*   **Type II Error:** Failing to reject the null hypothesis ($H_0$) when it is false and the alternative hypothesis ($H_a$) is true.
    *   The probability of a Type II error is denoted by $\beta$.
    *   **Example:** Concluding that the average lifespan of LED bulbs is not greater than 50,000 hours when it actually is greater than 50,000 hours.

**Devore (9th ed., p. 298) notes the trade-off:** "To decrease the probability of a Type I error, we must decrease $\alpha$, which in turn will increase the probability of a Type II error, $\beta$."

---

### 10. Power of a Test

The **power** of a hypothesis test is the probability of correctly rejecting the null hypothesis when it is false. It is the complement of the probability of a Type II error.

*   **Power = $1 - \beta$**

*   A higher power is desirable, as it means the test is more likely to detect a true effect or difference.

**Calculating Power:**
To calculate the power, we need to consider a specific value of the population mean ($\mu_a$) that is different from $\mu_0$ (i.e., a value that makes $H_0$ false).

Let's use the LED bulb example with $H_0: \mu = 50,000$ and $H_a: \mu > 50,000$, with $\alpha = 0.05$, $\sigma = 5000$, and $n=100$. The critical value is $z_{0.05} = 1.645$.

Suppose the true average lifespan is actually $\mu_a = 51,000$ hours. We want to calculate the power of the test, which is the probability of rejecting $H_0$ when $\mu = 51,000$.

1.  **Identify the rejection region:** We reject $H_0$ if $z_{obs} > 1.645$.
    The corresponding sample mean value that triggers rejection is:
    $\frac{\bar{x}_{crit} - \mu_0}{\sigma / \sqrt{n}} = 1.645$
    $\bar{x}_{crit} = \mu_0 + 1.645 \times (\sigma / \sqrt{n})$
    $\bar{x}_{crit} = 50,000 + 1.645 \times (5000 / 10) = 50,000 + 1.645 \times 500 = 50,000 + 822.5 = 50,822.5$ hours.

2.  **Calculate $\beta$:** This is the probability of *not* rejecting $H_0$ when $\mu = 51,000$. This happens if the sample mean is less than or equal to the critical value (50,822.5 hours).
    We need to find the probability that the sample mean $\bar{x}$ is $\le 50,822.5$ when the true mean is $\mu_a = 51,000$.
    First, convert $\bar{x} = 50,822.5$ to a z-score using $\mu_a = 51,000$:
    $z' = \frac{50,822.5 - \mu_a}{\sigma / \sqrt{n}} = \frac{50,822.5 - 51,000}{5000 / 10} = \frac{-177.5}{500} = -0.355$

    $\beta = P(\bar{x} \le 50,822.5 \text{ when } \mu=51,000) = P(Z \le -0.355)$
    Using a z-table or calculator, $P(Z \le -0.355) \approx 0.3613$. So, $\beta \approx 0.3613$.

3.  **Calculate Power:**
    Power = $1 - \beta = 1 - 0.3613 = 0.6387$.

**Interpretation:** If the true average lifespan of the LED bulbs is 51,000 hours, there is a 63.87% chance that our test will correctly detect this difference (i.e., reject $H_0$).

**Factors Affecting Power:**
*   **Significance Level ($\alpha$):** Increasing $\alpha$ increases power (but also increases Type I error).
*   **Sample Size ($n$):** Increasing $n$ increases power.
*   **Magnitude of the Effect Size:** The larger the difference between $\mu_a$ and $\mu_0$, the higher the power.
*   **Population Standard Deviation ($\sigma$):** Decreasing $\sigma$ increases power.

---

### 11. Connection to Confidence Intervals

There's a strong relationship between confidence intervals and hypothesis testing.

*   For a **two-tailed test** ($H_a: \mu \ne \mu_0$) with significance level $\alpha$, we can reject $H_0$ if the hypothesized value $\mu_0$ falls outside the $(1-\alpha) \times 100\%$ confidence interval for $\mu$.

**Example:**
If we are performing a two-tailed z-test at $\alpha = 0.05$, we would reject $H_0: \mu = \mu_0$ if $\mu_0$ is not contained within the 95% confidence interval for $\mu$.

This is because a 95% confidence interval for $\mu$ is typically calculated as $\bar{x} \pm z_{0.025} (\sigma / \sqrt{n})$. If $\mu_0$ is outside this interval, it implies that the observed sample mean $\bar{x}$ is statistically unlikely if $\mu_0$ were the true population mean.

**Devore (9th ed., p. 301) states:** "A $(1-\alpha) \times 100\%$ confidence interval provides a range of plausible values for the population parameter. If the hypothesized parameter value $\mu_0$ is not in this interval, then it is not a plausible value, and we reject $H_0$."

---

### Practice Questions/Exercises

**Instructions:** Solve the following problems. Clearly state your hypotheses, significance level, test statistic, decision rule, calculated test statistic, decision, and interpretation.

**Question 1:**
A semiconductor manufacturer claims that the average resistance of a new type of resistor is $100 \ \Omega$. A sample of 50 resistors is taken, and the sample mean resistance is found to be $102.5 \ \Omega$. The population standard deviation of the resistance is known to be $4.0 \ \Omega$. Test the manufacturer's claim at a significance level of $\alpha = 0.01$. Is there evidence to suggest the average resistance is different from $100 \ \Omega$?

**Question 2:**
An electrical engineer is working on improving the efficiency of a solar panel. The current average efficiency is 18%. The engineer implements a new design and tests a sample of 40 solar panels. The sample mean efficiency is 19.5%, and the population standard deviation is known to be 3.0%. Test the hypothesis that the new design has improved the average efficiency (i.e., it is greater than 18%) at a significance level of $\alpha = 0.05$.

**Question 3:**
A battery manufacturer states that their AA batteries have an average lifespan of 30 hours under continuous use. A consumer watchdog group tests a sample of 60 batteries. The sample mean lifespan is 28.5 hours. The population standard deviation is known to be 5.0 hours. Use a z-test to determine if there is sufficient evidence to conclude that the average lifespan is less than 30 hours at a significance level of $\alpha = 0.10$.

---

### Answers to Practice Questions

**Answer to Question 1:**

1.  **Hypotheses:**
    *   $H_0: \mu = 100 \ \Omega$
    *   $H_a: \mu \ne 100 \ \Omega$ (Two-tailed test)

2.  **Significance Level:** $\alpha = 0.01$

3.  **Test Statistic:** $z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$
    $z = \frac{102.5 - 100}{4.0 / \sqrt{50}} = \frac{2.5}{4.0 / 7.071} \approx \frac{2.5}{0.5657} \approx 4.42$

4.  **Decision Rule (Critical Value Approach):**
    For a two-tailed test with $\alpha = 0.01$, we need to find $z_{\alpha/2} = z_{0.005}$.
    From the z-table, $z_{0.005} \approx 2.576$.
    We reject $H_0$ if $|z| > 2.576$.

5.  **Decision:**
    Our calculated test statistic is $z_{obs} \approx 4.42$. Since $|4.42| > 2.576$, we reject $H_0$.

6.  **Interpretation:**
    At the 0.01 significance level, there is sufficient statistical evidence to conclude that the average resistance of the new type of resistor is different from $100 \ \Omega$.

**Answer to Question 2:**

1.  **Hypotheses:**
    *   $H_0: \mu = 18\%$
    *   $H_a: \mu > 18\%$ (Right-tailed test)

2.  **Significance Level:** $\alpha = 0.05$

3.  **Test Statistic:** $z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$
    $z = \frac{19.5 - 18}{3.0 / \sqrt{40}} = \frac{1.5}{3.0 / 6.325} \approx \frac{1.5}{0.4743} \approx 3.16$

4.  **Decision Rule (Critical Value Approach):**
    For a right-tailed test with $\alpha = 0.05$, we need to find $z_{\alpha} = z_{0.05}$.
    From the z-table, $z_{0.05} \approx 1.645$.
    We reject $H_0$ if $z > 1.645$.

5.  **Decision:**
    Our calculated test statistic is $z_{obs} \approx 3.16$. Since $3.16 > 1.645$, we reject $H_0$.

6.  **Interpretation:**
    At the 0.05 significance level, there is sufficient statistical evidence to conclude that the new solar panel design has improved the average efficiency, and it is greater than 18%.

**Answer to Question 3:**

1.  **Hypotheses:**
    *   $H_0: \mu = 30$ hours
    *   $H_a: \mu < 30$ hours (Left-tailed test)

2.  **Significance Level:** $\alpha = 0.10$

3.  **Test Statistic:** $z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$
    $z = \frac{28.5 - 30}{5.0 / \sqrt{60}} = \frac{-1.5}{5.0 / 7.746} \approx \frac{-1.5}{0.6455} \approx -2.32$

4.  **Decision Rule (Critical Value Approach):**
    For a left-tailed test with $\alpha = 0.10$, we need to find $-z_{\alpha} = -z_{0.10}$.
    From the z-table, $z_{0.10} \approx 1.282$. So, the critical value is $-1.282$.
    We reject $H_0$ if $z < -1.282$.

5.  **Decision:**
    Our calculated test statistic is $z_{obs} \approx -2.32$. Since $-2.32 < -1.282$, we reject $H_0$.

6.  **Interpretation:**
    At the 0.10 significance level, there is sufficient statistical evidence to conclude that the average lifespan of the AA batteries is less than 30 hours.

---

### Important Points to Remember

*   **Large Sample Size:** This z-test procedure is generally valid for large sample sizes ($n \ge 30$) or when the population is normally distributed.
*   **Known Population Standard Deviation ($\sigma$):** The ideal scenario for a z-test is when $\sigma$ is known. If $\sigma$ is unknown and the sample size is large, we can use the sample standard deviation $s$ as an estimate, and the z-test remains a good approximation.
*   **Random Sample:** The validity of hypothesis testing relies heavily on the assumption that the data comes from a random sample.
*   **Hypothesis Formulation:** Correctly stating $H_0$ and $H_a$ is crucial. $H_0$ always contains an equality.
*   **Type I vs. Type II Errors:** Understand the distinction and the trade-off between $\alpha$ and $\beta$.
*   **p-value Interpretation:** The p-value is the probability of observing data as extreme as, or more extreme than, the current sample, *assuming $H_0$ is true*.
*   **"Not Reject $H_0$" vs. "Accept $H_0$":** Failing to reject $H_0$ does not prove $H_0$ is true, only that the evidence is insufficient to reject it.

---
This concludes the study notes for z-tests for hypotheses about a population mean for large samples. Remember to practice applying these concepts to various problems in electrical science.
