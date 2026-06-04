---
title: "Hypotheses and Test Procedures"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ecb"
status: "completed"
scrapedAt: "2026-05-20T17:54:47.505Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 3: Confidence Intervals
### Topic: Hypotheses and Test Procedures

---

### 1. Introduction to Hypothesis Testing

Hypothesis testing is a formal statistical method used to make decisions about population parameters based on sample data. It's a cornerstone of inferential statistics, allowing us to determine if observed effects or differences in data are likely due to a real phenomenon or simply random chance.

**Key Concepts:**

*   **Population:** The entire group of individuals or objects that we are interested in studying.
*   **Sample:** A subset of the population from which data is collected.
*   **Parameter:** A numerical characteristic of the population (e.g., population mean $\mu$, population proportion $p$).
*   **Statistic:** A numerical characteristic of the sample (e.g., sample mean $\bar{x}$, sample proportion $\hat{p}$).

**Purpose in Physical Sciences:**

In physical sciences, hypothesis testing is crucial for:

*   **Validating Theories:** Testing if experimental results support or refute a scientific hypothesis or a theoretical prediction.
*   **Comparing Treatments/Conditions:** Determining if different experimental conditions (e.g., different catalysts, temperatures, materials) lead to statistically significant differences in outcomes.
*   **Quality Control:** Assessing if manufactured products meet certain specifications.
*   **Model Fitting:** Evaluating how well a proposed model fits observed data.

**Alignment with Course Outcomes:**

This topic directly contributes to **CO3**, as it focuses on testing hypotheses about population means and proportions, which is a fundamental aspect of statistical inference used in physical science research.

**Textbook References:**

*   **Devore (2016):** Chapter 10 introduces the fundamental concepts and procedures of hypothesis testing for means and proportions.
*   **Ross (2020):** Chapter 8 also covers hypothesis testing, often with a focus on practical applications.

---

### 2. The Null and Alternative Hypotheses

The foundation of hypothesis testing lies in formulating two competing statements about a population parameter.

**Key Concepts & Definitions:**

*   **Null Hypothesis ($H_0$):**
    *   A statement about the population parameter that represents the status quo, no effect, or no difference.
    *   It is the hypothesis that we assume to be true until evidence suggests otherwise.
    *   Often stated using an equality sign ($=$, $\le$, or $\ge$).
    *   **Example:** $H_0: \mu = 10$ (The average height of a specific type of crystal is 10 micrometers).

*   **Alternative Hypothesis ($H_a$ or $H_1$):**
    *   A statement that contradicts the null hypothesis.
    *   It represents what we are trying to find evidence for – a significant effect, a difference, or a change.
    *   It is often formulated based on prior research, theory, or the objective of the study.
    *   Uses the inequality signs ($\ne$, $<$, or $>$).

**Types of Alternative Hypotheses:**

1.  **Two-tailed Test:**
    *   $H_a: \mu \ne \mu_0$ (The population mean is different from a specific value $\mu_0$).
    *   We are looking for evidence of a difference in either direction.

2.  **One-tailed Test (Left-tailed):**
    *   $H_a: \mu < \mu_0$ (The population mean is less than a specific value $\mu_0$).
    *   We are looking for evidence that the mean has decreased.

3.  **One-tailed Test (Right-tailed):**
    *   $H_a: \mu > \mu_0$ (The population mean is greater than a specific value $\mu_0$).
    *   We are looking for evidence that the mean has increased.

**Example in Physical Science:**

Consider an experiment to test a new catalyst for a chemical reaction.

*   **Null Hypothesis ($H_0$):** The new catalyst has no effect on the average reaction yield. $H_0: \mu_{new} = \mu_{old}$ (or $H_0: \mu_{new} - \mu_{old} = 0$).
*   **Alternative Hypothesis ($H_a$):** The new catalyst increases the average reaction yield. $H_a: \mu_{new} > \mu_{old}$ (or $H_a: \mu_{new} - \mu_{old} > 0$). This would be a right-tailed test.

**Important Point to Remember:**

*   The null hypothesis ($H_0$) always contains an equality sign. The alternative hypothesis ($H_a$) contains an inequality sign. They are mutually exclusive and exhaustive.

---

### 3. Test Procedures and Test Statistics

A test procedure outlines the steps to be taken to decide whether to reject or fail to reject the null hypothesis. The core of this procedure involves a test statistic.

**Key Concepts & Definitions:**

*   **Test Statistic:** A value computed from the sample data that summarizes the information relevant to the hypothesis being tested. It measures how far the sample statistic is from the value specified in the null hypothesis.
*   **Sampling Distribution:** The probability distribution of a sample statistic (e.g., $\bar{x}$ or $\hat{p}$) if we were to draw many samples from the population. Under the assumption that $H_0$ is true, the test statistic follows a known sampling distribution (e.g., Z-distribution, t-distribution).

**Common Test Statistics:**

The choice of test statistic depends on the population parameter being tested, the sample size, and whether the population standard deviation is known.

**a) Test for Population Mean ($\mu$)**

*   **Case 1: Population standard deviation ($\sigma$) is known (or sample size is large, $n \ge 30$)**
    *   Test Statistic: **Z-statistic**
        $$Z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$$
        where:
        *   $\bar{x}$ is the sample mean.
        *   $\mu_0$ is the hypothesized population mean under $H_0$.
        *   $\sigma$ is the known population standard deviation.
        *   $n$ is the sample size.
    *   This statistic follows a standard normal (Z) distribution under $H_0$.
    *   **Textbook Reference:** Devore (2016), Chapter 10.3.

*   **Case 2: Population standard deviation ($\sigma$) is unknown and sample size is small ($n < 30$)**
    *   Test Statistic: **t-statistic**
        $$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$$
        where:
        *   $\bar{x}$ is the sample mean.
        *   $\mu_0$ is the hypothesized population mean under $H_0$.
        *   $s$ is the sample standard deviation (an estimate of $\sigma$).
        *   $n$ is the sample size.
    *   This statistic follows a **t-distribution** with $n-1$ degrees of freedom ($df$).
    *   **Textbook Reference:** Devore (2016), Chapter 10.4.

**b) Test for Population Proportion ($p$)**

*   For large sample sizes ($np_0 \ge 10$ and $n(1-p_0) \ge 10$), the sampling distribution of the sample proportion $\hat{p}$ can be approximated by a normal distribution.
*   Test Statistic: **Z-statistic**
    $$Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$$
    where:
    *   $\hat{p}$ is the sample proportion ($\hat{p} = x/n$, where $x$ is the number of successes).
    *   $p_0$ is the hypothesized population proportion under $H_0$.
    *   $n$ is the sample size.
*   This statistic follows a standard normal (Z) distribution under $H_0$.
*   **Textbook Reference:** Devore (2016), Chapter 10.5.

**Example in Physical Science:**

A researcher is investigating the tensile strength of a new alloy. They hypothesize that the average tensile strength is at least 500 MPa. They take a sample of 25 specimens and find a sample mean of 480 MPa and a sample standard deviation of 50 MPa. Assuming the tensile strength is normally distributed, which test statistic should be used?

*   We don't know the population standard deviation ($\sigma$).
*   The sample size is small ($n=25$).
*   Therefore, the **t-statistic** is the appropriate test statistic.

---

### 4. Decision Making: Critical Regions and p-values

Once the test statistic is calculated, we need a rule to decide whether to reject $H_0$. This is done using critical regions or p-values.

**Key Concepts & Definitions:**

*   **Significance Level ($\alpha$):**
    *   The probability of rejecting the null hypothesis when it is actually true (Type I error).
    *   Commonly set at 0.05 (5%), 0.01 (1%), or 0.10 (10%).
    *   This value is chosen *before* conducting the test.

*   **Critical Region:**
    *   The set of all possible values of the test statistic that would lead to the rejection of the null hypothesis.
    *   The size of the critical region is equal to the significance level $\alpha$.

*   **Critical Value:**
    *   The boundary value(s) that separate the critical region from the non-critical region.
    *   These values are obtained from the sampling distribution of the test statistic.

*   **p-value:**
    *   The probability of observing a test statistic as extreme as, or more extreme than, the one computed from the sample, assuming the null hypothesis is true.
    *   A *small* p-value indicates that the observed data is unlikely to have occurred if $H_0$ were true, providing evidence against $H_0$.

**Decision Rules:**

1.  **Using Critical Regions:**
    *   **If the calculated test statistic falls within the critical region, reject $H_0$.**
    *   **If the calculated test statistic falls outside the critical region, fail to reject $H_0$.**

2.  **Using p-values:**
    *   **If p-value $\le \alpha$, reject $H_0$.**
    *   **If p-value $> \alpha$, fail to reject $H_0$.**

**Finding Critical Values and p-values:**

*   **Z-distribution:** Use standard normal tables or statistical software.
*   **t-distribution:** Use t-distribution tables (which require degrees of freedom) or statistical software.

**Example: Two-tailed Z-test for Mean**

Suppose $H_0: \mu = \mu_0$ and $H_a: \mu \ne \mu_0$, with $\alpha = 0.05$.

*   **Critical Region Approach:**
    *   For a two-tailed Z-test, $\alpha$ is split equally into two tails: $\alpha/2 = 0.025$.
    *   The critical values are $Z_{0.025} = 1.96$ and $Z_{-0.025} = -1.96$.
    *   The critical region is $|Z| > 1.96$ (i.e., $Z < -1.96$ or $Z > 1.96$).
    *   If the calculated Z-statistic is, say, 2.10, it falls in the critical region, and we reject $H_0$.

*   **p-value Approach:**
    *   If the calculated Z-statistic is 2.10, the p-value is the probability of getting a Z value of 2.10 or more extreme (in either tail).
    *   p-value = $P(Z \le -2.10) + P(Z \ge 2.10) = 2 \times P(Z \ge 2.10)$.
    *   From Z-tables, $P(Z \ge 2.10) \approx 0.0179$.
    *   So, p-value $\approx 2 \times 0.0179 = 0.0358$.
    *   Since $0.0358 \le 0.05$, we reject $H_0$.

**Textbook References:**

*   **Devore (2016):** Chapter 10.2 discusses Type I and Type II errors, and Chapter 10.3-10.5 detail critical regions and p-values for various tests.
*   **Sastry (2012):** While primarily for numerical analysis, it might touch upon statistical concepts if relevant to specific applications, though Devore and Ross are the primary sources here.

---

### 5. Types of Errors in Hypothesis Testing

It's important to understand the potential mistakes we can make when conducting a hypothesis test.

**Key Concepts & Definitions:**

*   **Type I Error:**
    *   Rejecting the null hypothesis ($H_0$) when it is actually true.
    *   The probability of making a Type I error is denoted by $\alpha$ (the significance level).
    *   **Analogy:** Convicting an innocent person.

*   **Type II Error:**
    *   Failing to reject the null hypothesis ($H_0$) when it is actually false.
    *   The probability of making a Type II error is denoted by $\beta$.
    *   **Analogy:** An innocent person going free.

*   **Power of a Test:**
    *   The probability of correctly rejecting the null hypothesis when it is false.
    *   Power = $1 - \beta$.
    *   A higher power is desirable.

**Trade-off between $\alpha$ and $\beta$:**

*   For a fixed sample size, decreasing $\alpha$ (making it harder to reject $H_0$) generally increases $\beta$ (making it easier to fail to reject $H_0$ when it's false).
*   Increasing the sample size ($n$) is the most effective way to reduce both $\alpha$ and $\beta$ (or increase power) simultaneously.

**Controlling Errors:**

*   **Type I error ($\alpha$)** is directly controlled by the researcher by setting the significance level.
*   **Type II error ($\beta$)** is influenced by $\alpha$, sample size ($n$), the variability of the data, and the magnitude of the true effect (the difference between the true parameter value and $\mu_0$ or $p_0$).

**Example in Physical Science:**

A company claims their new battery lasts for 10 hours on average. A consumer advocacy group wants to test this claim.

*   $H_0: \mu \ge 10$ hours (The battery meets the claim).
*   $H_a: \mu < 10$ hours (The battery does not meet the claim).

    *   **Type I Error:** The group concludes the battery is worse than claimed, but in reality, it meets or exceeds the 10-hour average. This could lead to a premature recall or negative publicity for the company.
    *   **Type II Error:** The group concludes the battery is acceptable, but in reality, it performs worse than claimed. This harms consumers.

**Textbook References:**

*   **Devore (2016):** Chapter 10.2 provides a detailed explanation of Type I and Type II errors and the power of a test.

---

### 6. Step-by-Step Hypothesis Testing Procedure

A systematic approach ensures accuracy and consistency in hypothesis testing.

**The 7-Step Procedure:**

1.  **State the Hypotheses:** Clearly formulate the null hypothesis ($H_0$) and the alternative hypothesis ($H_a$).
2.  **Choose the Significance Level ($\alpha$):** Decide on the acceptable probability of a Type I error.
3.  **Select the Appropriate Test Statistic:** Based on the parameter, data type, and known/unknown population standard deviation.
4.  **Determine the Decision Rule:** Define the critical region (by finding critical values) or establish the p-value threshold.
5.  **Collect Data and Compute the Test Statistic:** Gather sample data and calculate the chosen test statistic.
6.  **Make the Statistical Decision:** Compare the test statistic to the critical value(s) or compare the p-value to $\alpha$.
    *   If test statistic is in critical region OR p-value $\le \alpha$: Reject $H_0$.
    *   If test statistic is NOT in critical region OR p-value $> \alpha$: Fail to reject $H_0$.
7.  **Interpret the Results in the Context of the Problem:** State the conclusion in plain language, relating it back to the original research question or physical science problem.

**Example: Testing the Average Resistance of a Resistor**

A manufacturer produces resistors with a nominal resistance of 100 ohms. A quality control engineer suspects the average resistance of a batch is higher than 100 ohms. A sample of 16 resistors is taken, and the sample mean resistance is 102 ohms with a sample standard deviation of 4 ohms. Assume resistance is normally distributed.

1.  **Hypotheses:**
    *   $H_0: \mu = 100$ (The average resistance is 100 ohms).
    *   $H_a: \mu > 100$ (The average resistance is greater than 100 ohms). (This is a right-tailed test).

2.  **Significance Level:** Let $\alpha = 0.05$.

3.  **Test Statistic:**
    *   Population standard deviation ($\sigma$) is unknown.
    *   Sample size ($n=16$) is small.
    *   Therefore, use the **t-statistic**.
    *   $t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$

4.  **Decision Rule:**
    *   Degrees of freedom ($df$) = $n - 1 = 16 - 1 = 15$.
    *   This is a right-tailed test with $\alpha = 0.05$.
    *   Find the critical t-value for $df=15$ and $\alpha=0.05$ (one-tailed). From t-tables, $t_{0.05, 15} = 1.753$.
    *   **Decision Rule:** Reject $H_0$ if $t > 1.753$.

5.  **Collect Data and Compute Test Statistic:**
    *   $\bar{x} = 102$, $s = 4$, $n = 16$, $\mu_0 = 100$.
    *   $t = \frac{102 - 100}{4 / \sqrt{16}} = \frac{2}{4 / 4} = \frac{2}{1} = 2$.

6.  **Make the Statistical Decision:**
    *   Our calculated t-statistic is $2$.
    *   Our decision rule is to reject $H_0$ if $t > 1.753$.
    *   Since $2 > 1.753$, we **reject $H_0$**.

7.  **Interpret the Results:**
    *   At the 5% significance level, there is sufficient evidence to conclude that the average resistance of the resistors in this batch is greater than 100 ohms.

**Using p-value for the same example:**

*   Calculated $t = 2$.
*   $df = 15$.
*   The p-value is the probability $P(t_{15} \ge 2)$.
*   Using t-tables or software, this probability is approximately 0.032.
*   Since $0.032 \le \alpha (0.05)$, we reject $H_0$. This confirms the decision made using the critical region approach.

**Textbook References:**

*   **Devore (2016):** Chapter 10 provides the full framework for this procedure.
*   **Ross (2020):** Chapter 8 reinforces these procedural steps.

---

### 7. Practice Questions and Exercises

**Instructions:** For each question, state the null and alternative hypotheses, identify the appropriate test statistic, calculate the test statistic, determine the p-value or critical value, make a decision, and interpret the result.

**Question 1 (Mean, $\sigma$ unknown):**
A materials scientist claims that the average tensile strength of a new polymer composite is 60 MPa. A sample of 10 specimens is tested, yielding a mean tensile strength of 58 MPa and a sample standard deviation of 3 MPa. Assume the tensile strength is normally distributed. Test the scientist's claim at a significance level of $\alpha = 0.05$.

**Question 2 (Mean, $\sigma$ known - use Z-test):**
A manufacturer of light bulbs claims that the average lifetime of their bulbs is 1500 hours. It is known that the population standard deviation of the lifetime is 100 hours. A sample of 25 bulbs is taken, and the sample mean lifetime is 1450 hours. Test the manufacturer's claim at $\alpha = 0.01$.

**Question 3 (Proportion, use Z-test):**
A pharmaceutical company claims that their new drug is effective in 80% of patients. In a clinical trial, 100 patients were treated, and the drug was effective in 75 patients. Test the company's claim at a significance level of $\alpha = 0.05$.

---

### 8. Answers to Practice Questions

**Answer 1:**
1.  **Hypotheses:**
    *   $H_0: \mu = 60$ MPa
    *   $H_a: \mu \ne 60$ MPa (Two-tailed test)
2.  **Significance Level:** $\alpha = 0.05$.
3.  **Test Statistic:** Since $\sigma$ is unknown and $n=10$ (small), use the **t-statistic**.
    $t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$
4.  **Decision Rule:**
    *   $df = n - 1 = 10 - 1 = 9$.
    *   For a two-tailed test with $\alpha = 0.05$, we need to find $t_{\alpha/2, df} = t_{0.025, 9}$.
    *   From t-tables, $t_{0.025, 9} \approx 2.262$.
    *   **Decision Rule:** Reject $H_0$ if $|t| > 2.262$.
5.  **Compute Test Statistic:**
    *   $\bar{x} = 58$, $s = 3$, $n = 10$, $\mu_0 = 60$.
    *   $t = \frac{58 - 60}{3 / \sqrt{10}} = \frac{-2}{3 / 3.162} = \frac{-2}{0.949} \approx -2.107$.
6.  **Make Decision:**
    *   $|t| = |-2.107| = 2.107$.
    *   Since $2.107 \ngtr 2.262$, we **fail to reject $H_0$**.
7.  **Interpretation:** At the 5% significance level, there is not enough evidence to conclude that the average tensile strength of the polymer composite is different from 60 MPa.

**Answer 2:**
1.  **Hypotheses:**
    *   $H_0: \mu = 1500$ hours
    *   $H_a: \mu < 1500$ hours (The claim is that it's *at least* 1500, so if it's less, the claim is false. This is a left-tailed test).
2.  **Significance Level:** $\alpha = 0.01$.
3.  **Test Statistic:** Since $\sigma$ is known, use the **Z-statistic**.
    $Z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$
4.  **Decision Rule:**
    *   For a left-tailed test with $\alpha = 0.01$, the critical value is $Z_{\alpha} = Z_{0.01}$.
    *   From Z-tables, $Z_{0.01} \approx -2.326$.
    *   **Decision Rule:** Reject $H_0$ if $Z < -2.326$.
5.  **Compute Test Statistic:**
    *   $\bar{x} = 1450$, $\sigma = 100$, $n = 25$, $\mu_0 = 1500$.
    *   $Z = \frac{1450 - 1500}{100 / \sqrt{25}} = \frac{-50}{100 / 5} = \frac{-50}{20} = -2.5$.
6.  **Make Decision:**
    *   Our calculated Z-statistic is $-2.5$.
    *   Since $-2.5 < -2.326$, we **reject $H_0$**.
7.  **Interpretation:** At the 1% significance level, there is sufficient evidence to conclude that the average lifetime of the light bulbs is less than 1500 hours, meaning the manufacturer's claim is not supported.

**Answer 3:**
1.  **Hypotheses:**
    *   $H_0: p = 0.80$ (The proportion of effective patients is 80%).
    *   $H_a: p \ne 0.80$ (The proportion is different from 80%). (Two-tailed test).
2.  **Significance Level:** $\alpha = 0.05$.
3.  **Test Statistic:** Since we are testing a proportion and the sample size is large enough ($n=100$, $np_0 = 100 \times 0.80 = 80 \ge 10$, $n(1-p_0) = 100 \times 0.20 = 20 \ge 10$), use the **Z-statistic**.
    $Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$
4.  **Decision Rule:**
    *   For a two-tailed test with $\alpha = 0.05$, the critical values are $Z_{\alpha/2} = Z_{0.025}$ and $Z_{-\alpha/2} = Z_{-0.025}$.
    *   From Z-tables, $Z_{0.025} = 1.96$ and $Z_{-0.025} = -1.96$.
    *   **Decision Rule:** Reject $H_0$ if $|Z| > 1.96$.
5.  **Compute Test Statistic:**
    *   Sample proportion $\hat{p} = x/n = 75/100 = 0.75$.
    *   $p_0 = 0.80$, $n = 100$.
    *   $Z = \frac{0.75 - 0.80}{\sqrt{\frac{0.80(1-0.80)}{100}}} = \frac{-0.05}{\sqrt{\frac{0.80 \times 0.20}{100}}} = \frac{-0.05}{\sqrt{\frac{0.16}{100}}} = \frac{-0.05}{\sqrt{0.0016}} = \frac{-0.05}{0.04} = -1.25$.
6.  **Make Decision:**
    *   Our calculated Z-statistic is $-1.25$.
    *   $|Z| = |-1.25| = 1.25$.
    *   Since $1.25 \ngtr 1.96$, we **fail to reject $H_0$**.
7.  **Interpretation:** At the 5% significance level, there is not enough evidence to conclude that the proportion of patients for whom the drug is effective is different from 80%. The observed difference could be due to sampling variability.

---

### 9. Key Points to Remember

*   **Hypothesis testing is a process of making decisions about population parameters based on sample evidence.**
*   The **null hypothesis ($H_0$)** always contains an equality statement ($\le, =, \ge$).
*   The **alternative hypothesis ($H_a$)** represents what you want to find evidence for.
*   The **significance level ($\alpha$)** is the probability of a Type I error.
*   The **test statistic** summarizes sample data and follows a known distribution under $H_0$.
*   **Reject $H_0$** if the test statistic falls in the critical region or if the p-value $\le \alpha$.
*   **Fail to reject $H_0$** if the test statistic does not fall in the critical region or if the p-value $> \alpha$.
*   **Failing to reject $H_0$ does NOT mean $H_0$ is true; it means there's not enough evidence to reject it.**
*   **Type I error** is rejecting a true $H_0$; **Type II error** is failing to reject a false $H_0$.
*   The **power of a test** ($1 - \beta$) is the probability of correctly rejecting a false $H_0$.
*   **Sample size** is crucial for controlling both Type I and Type II errors.
*   Always **interpret results in the context of the problem**.

This module's focus on hypothesis testing directly supports **CO3**, enabling the assessment of population parameters and the testing of claims, which is fundamental for scientific investigation in the physical sciences.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
