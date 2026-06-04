---
title: "Confidence Intervals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 3: Confidence Intervals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35da7"
status: "completed"
scrapedAt: "2026-05-23T16:16:59.056Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 3: Confidence Intervals

### Topic: Confidence Intervals

**Learning Outcomes:**

*   Understand the concept of a confidence interval and its interpretation.
*   Construct confidence intervals for a population mean when the population standard deviation is known.
*   Construct confidence intervals for a population mean when the population standard deviation is unknown.
*   Construct confidence intervals for a population proportion.
*   Determine the required sample size for estimating a population mean or proportion with a specified margin of error and confidence level.

---

### 1. Introduction to Confidence Intervals

**Concept:**

A **confidence interval (CI)** is a range of values, derived from sample statistics, that is likely to contain the value of an unknown population parameter. It provides a measure of the uncertainty associated with estimating a population parameter from sample data.

**Key Idea:**

Instead of providing a single point estimate for a population parameter (e.g., the sample mean as an estimate of the population mean), a confidence interval provides a range of plausible values.

**Interpretation of a Confidence Interval:**

A (1 - $\alpha$)100% confidence interval means that if we were to repeatedly draw random samples from the population and construct a confidence interval for each sample, then (1 - $\alpha$)100% of these intervals would contain the true population parameter.

**Important Note:** A specific confidence interval computed from a sample either contains the true population parameter or it doesn't. The probability statement applies to the *process* of constructing intervals, not to a single computed interval.

**Reference:** Devore (2016), Chapter 7.1: "Interval Estimation"

---

### 2. Confidence Intervals for a Population Mean ($\mu$)

#### 2.1. Case 1: Population Standard Deviation ($\sigma$) is Known

When the population standard deviation ($\sigma$) is known, and the population is normally distributed or the sample size ($n$) is large ($n \ge 30$), we can use the Z-distribution to construct the confidence interval for the population mean ($\mu$).

**Formula:**

The (1 - $\alpha$)100% confidence interval for $\mu$ is given by:

$$ \bar{x} \pm z_{\alpha/2} \left(\frac{\sigma}{\sqrt{n}}\right) $$

Where:
*   $\bar{x}$ is the sample mean.
*   $\sigma$ is the population standard deviation (known).
*   $n$ is the sample size.
*   $z_{\alpha/2}$ is the critical value from the standard normal distribution such that the area to its right is $\alpha/2$. This means the area between $-z_{\alpha/2}$ and $z_{\alpha/2}$ is $1 - \alpha$.

**Components of the CI:**

*   **Point Estimate:** $\bar{x}$
*   **Margin of Error (ME):** $ME = z_{\alpha/2} \left(\frac{\sigma}{\sqrt{n}}\right)$
*   **Lower Confidence Limit (LCL):** $\bar{x} - z_{\alpha/2} \left(\frac{\sigma}{\sqrt{n}}\right)$
*   **Upper Confidence Limit (UCL):** $\bar{x} + z_{\alpha/2} \left(\frac{\sigma}{\sqrt{n}}\right)$

**Example:**

Suppose we want to estimate the average voltage output of a new power supply. We know that the standard deviation of the voltage output is $\sigma = 0.5$ volts. We take a random sample of 36 power supplies and find the sample mean voltage to be $\bar{x} = 12.2$ volts. We want to construct a 95% confidence interval for the true average voltage.

*   Confidence Level = 95%, so $\alpha = 1 - 0.95 = 0.05$.
*   $\alpha/2 = 0.025$.
*   The critical value $z_{0.025}$ from the standard normal distribution is 1.96 (since the area to the left of 1.96 is 0.975, and the area between -1.96 and 1.96 is 0.95).

**Calculation:**

$$ CI = 12.2 \pm 1.96 \left(\frac{0.5}{\sqrt{36}}\right) $$
$$ CI = 12.2 \pm 1.96 \left(\frac{0.5}{6}\right) $$
$$ CI = 12.2 \pm 1.96 (0.0833) $$
$$ CI = 12.2 \pm 0.1633 $$

The 95% confidence interval is $(12.0367, 12.3633)$ volts.

**Interpretation:** We are 95% confident that the true average voltage output of the new power supply is between 12.0367 volts and 12.3633 volts.

**Reference:** Devore (2016), Chapter 7.2: "Large-Sample Confidence Intervals for a Population Mean"
Veerarajan (2008), Chapter 10.1: "Confidence Intervals for the Mean"

#### 2.2. Case 2: Population Standard Deviation ($\sigma$) is Unknown

When the population standard deviation ($\sigma$) is unknown, we use the sample standard deviation ($s$) as an estimate for $\sigma$. In this case, if the population is normally distributed or the sample size is large, we use the t-distribution to construct the confidence interval.

**Formula:**

The (1 - $\alpha$)100% confidence interval for $\mu$ is given by:

$$ \bar{x} \pm t_{\alpha/2, n-1} \left(\frac{s}{\sqrt{n}}\right) $$

Where:
*   $\bar{x}$ is the sample mean.
*   $s$ is the sample standard deviation.
*   $n$ is the sample size.
*   $t_{\alpha/2, n-1}$ is the critical value from the t-distribution with $n-1$ degrees of freedom such that the area to its right is $\alpha/2$.

**Key Difference from Z-distribution:** The t-distribution has fatter tails than the Z-distribution, meaning the critical values are larger for the same confidence level, especially for small sample sizes. This accounts for the additional uncertainty introduced by estimating $\sigma$ with $s$. As $n$ increases, the t-distribution approaches the Z-distribution.

**Example:**

Suppose we want to estimate the average resistance of a resistor type. We take a random sample of 16 resistors and find the sample mean resistance to be $\bar{x} = 100$ ohms and the sample standard deviation to be $s = 5$ ohms. We want to construct a 99% confidence interval for the true average resistance.

*   Confidence Level = 99%, so $\alpha = 1 - 0.99 = 0.01$.
*   $\alpha/2 = 0.005$.
*   Degrees of freedom ($df$) = $n - 1 = 16 - 1 = 15$.
*   We need to find $t_{0.005, 15}$ from the t-table. This value is 2.947.

**Calculation:**

$$ CI = 100 \pm 2.947 \left(\frac{5}{\sqrt{16}}\right) $$
$$ CI = 100 \pm 2.947 \left(\frac{5}{4}\right) $$
$$ CI = 100 \pm 2.947 (1.25) $$
$$ CI = 100 \pm 3.68375 $$

The 99% confidence interval is $(96.31625, 103.68375)$ ohms.

**Interpretation:** We are 99% confident that the true average resistance of this resistor type is between 96.31625 ohms and 103.68375 ohms.

**Reference:** Devore (2016), Chapter 7.3: "Confidence Intervals for a Population Mean - Unknown $\sigma$"
Veerarajan (2008), Chapter 10.1: "Confidence Intervals for the Mean"
Ross (2020), Chapter 6.4: "Confidence Intervals for Means"

**When to use Z vs. t:**

*   Use Z-distribution if $\sigma$ is known.
*   Use t-distribution if $\sigma$ is unknown and we use $s$.
*   The t-distribution is appropriate when the population is normally distributed or the sample size is large ($n \ge 30$).

---

### 3. Confidence Intervals for a Population Proportion ($p$)

We often need to estimate the proportion of a population that possesses a certain characteristic (e.g., the proportion of defective components in a manufacturing process).

**Conditions for using the Normal Approximation:**

When estimating a population proportion ($p$), we use the sample proportion ($\hat{p} = x/n$, where $x$ is the number of successes and $n$ is the sample size) to construct the confidence interval. For the normal approximation to be valid, the following conditions should be met:
*   $n\hat{p} \ge 10$
*   $n(1 - \hat{p}) \ge 10$

If these conditions are met, the sampling distribution of $\hat{p}$ is approximately normal with mean $p$ and standard deviation $\sqrt{\frac{p(1-p)}{n}}$. Since $p$ is unknown, we use $\hat{p}$ to estimate the standard deviation: $\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$.

**Formula:**

The (1 - $\alpha$)100% confidence interval for $p$ is given by:

$$ \hat{p} \pm z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}} $$

Where:
*   $\hat{p}$ is the sample proportion.
*   $n$ is the sample size.
*   $z_{\alpha/2}$ is the critical value from the standard normal distribution.

**Example:**

In a sample of 200 electronic components, 15 were found to be defective. We want to construct a 95% confidence interval for the true proportion of defective components.

*   $n = 200$
*   $x = 15$ (number of defective components)
*   $\hat{p} = \frac{15}{200} = 0.075$
*   Confidence Level = 95%, so $\alpha = 0.05$, and $z_{\alpha/2} = z_{0.025} = 1.96$.

**Check conditions:**
*   $n\hat{p} = 200 \times 0.075 = 15 \ge 10$ (satisfied)
*   $n(1-\hat{p}) = 200 \times (1 - 0.075) = 200 \times 0.925 = 185 \ge 10$ (satisfied)

**Calculation:**

$$ CI = 0.075 \pm 1.96 \sqrt{\frac{0.075(1-0.075)}{200}} $$
$$ CI = 0.075 \pm 1.96 \sqrt{\frac{0.075 \times 0.925}{200}} $$
$$ CI = 0.075 \pm 1.96 \sqrt{\frac{0.069375}{200}} $$
$$ CI = 0.075 \pm 1.96 \sqrt{0.000346875} $$
$$ CI = 0.075 \pm 1.96 (0.01862) $$
$$ CI = 0.075 \pm 0.0365 $$

The 95% confidence interval is $(0.0385, 0.1115)$.

**Interpretation:** We are 95% confident that the true proportion of defective electronic components is between 3.85% and 11.15%.

**Reference:** Devore (2016), Chapter 7.4: "Large-Sample Confidence Intervals for a Population Proportion"
Veerarajan (2008), Chapter 10.3: "Confidence Intervals for the Proportion"
Ross (2020), Chapter 6.5: "Confidence Intervals for Proportions"

---

### 4. Determining Sample Size

We often need to determine the sample size required to estimate a population parameter with a desired margin of error (ME) and confidence level.

#### 4.1. Sample Size for Estimating a Population Mean ($\mu$)

When $\sigma$ is known:

The margin of error is $ME = z_{\alpha/2} \left(\frac{\sigma}{\sqrt{n}}\right)$.
To find $n$, we rearrange the formula:

$$ \sqrt{n} = \frac{z_{\alpha/2} \sigma}{ME} $$
$$ n = \left(\frac{z_{\alpha/2} \sigma}{ME}\right)^2 $$

When $\sigma$ is unknown:
We need an estimate of $\sigma$. This can be obtained from a pilot study, previous research, or by using the range rule of thumb (range/4). If an estimate is available, use $s$ instead of $\sigma$:

$$ n = \left(\frac{z_{\alpha/2} s}{ME}\right)^2 $$

**Important:** Always round up the sample size to the next whole number.

**Example:**

We want to estimate the average voltage output of a power supply with a margin of error of 0.2 volts and a 95% confidence level. We know the population standard deviation is $\sigma = 0.5$ volts.

*   $ME = 0.2$
*   Confidence Level = 95%, so $z_{\alpha/2} = 1.96$.
*   $\sigma = 0.5$

**Calculation:**

$$ n = \left(\frac{1.96 \times 0.5}{0.2}\right)^2 $$
$$ n = \left(\frac{0.98}{0.2}\right)^2 $$
$$ n = (4.9)^2 $$
$$ n = 24.01 $$

We need a sample size of at least 25 to ensure the margin of error is no more than 0.2 volts with 95% confidence.

**Reference:** Devore (2016), Chapter 7.2: "Determining the Sample Size"
Veerarajan (2008), Chapter 10.1: "Determination of Sample Size"

#### 4.2. Sample Size for Estimating a Population Proportion ($p$)

The margin of error for a proportion is $ME = z_{\alpha/2} \sqrt{\frac{p(1-p)}{n}}$.
To find $n$, we rearrange the formula:

$$ \sqrt{n} = \frac{z_{\alpha/2} \sqrt{p(1-p)}}{ME} $$
$$ n = \left(\frac{z_{\alpha/2} \sqrt{p(1-p)}}{ME}\right)^2 $$

To ensure the required margin of error, we need an estimate of $p$.
*   If a prior estimate of $p$ is available, use it.
*   If no prior estimate is available, use $p=0.5$, as this maximizes the product $p(1-p)$ and thus results in the largest (most conservative) sample size.

**Example:**

We want to estimate the proportion of components that fail a quality test with a margin of error of 0.03 and a 99% confidence level. No prior estimate of the proportion is available.

*   $ME = 0.03$
*   Confidence Level = 99%, so $z_{\alpha/2} = z_{0.005} = 2.576$.
*   Since no prior estimate is available, we use $p = 0.5$.

**Calculation:**

$$ n = \left(\frac{2.576 \sqrt{0.5(1-0.5)}}{0.03}\right)^2 $$
$$ n = \left(\frac{2.576 \sqrt{0.25}}{0.03}\right)^2 $$
$$ n = \left(\frac{2.576 \times 0.5}{0.03}\right)^2 $$
$$ n = \left(\frac{1.288}{0.03}\right)^2 $$
$$ n = (42.933)^2 $$
$$ n = 1843.238 $$

We need a sample size of at least 1844 to ensure the margin of error is no more than 0.03 with 99% confidence.

**Reference:** Devore (2016), Chapter 7.4: "Determining Sample Size for a Proportion"
Veerarajan (2008), Chapter 10.3: "Determination of Sample Size"

---

### 5. Important Points to Remember

*   **Confidence Level:** Higher confidence level leads to a wider interval.
*   **Sample Size:** Larger sample size leads to a narrower interval (more precision).
*   **Variability:** Higher population variability (larger $\sigma$ or $s$) leads to a wider interval.
*   **Point Estimate vs. Interval Estimate:** A point estimate is a single value, while an interval estimate provides a range of plausible values.
*   **Interpretation is Crucial:** Always interpret the confidence interval in the context of the problem. The probability applies to the *method*, not to a specific interval.
*   **Assumptions:** Be aware of the assumptions made when constructing confidence intervals (e.g., normality or large sample size for mean estimation, conditions for proportion estimation).
*   **t-distribution:** Use the t-distribution when the population standard deviation is unknown and estimated by the sample standard deviation. The degrees of freedom ($n-1$) are critical.
*   **Proportion Sample Size:** Use $p=0.5$ for the most conservative sample size estimate when no prior information is available.

---

### 6. Practice Questions and Exercises

**Question 1 (Mean, $\sigma$ known):**
A manufacturing process for resistors aims for an average resistance of 100 Ohms. The standard deviation of the resistance is known to be 2 Ohms. A sample of 64 resistors is taken, and the sample mean resistance is found to be 100.5 Ohms. Construct a 95% confidence interval for the true average resistance.

**Question 2 (Mean, $\sigma$ unknown):**
An engineer is testing the performance of a new sensor. They collect data from 25 sensors, finding a sample mean output voltage of 3.5V and a sample standard deviation of 0.3V. Construct a 90% confidence interval for the true average output voltage.

**Question 3 (Proportion):**
In a survey of 500 randomly selected users of a particular software, 350 reported being satisfied with its performance. Construct a 98% confidence interval for the proportion of all users who are satisfied.

**Question 4 (Sample Size for Mean):**
A telecommunications company wants to estimate the average call duration for its customers. They want to be 95% confident that the margin of error is no more than 0.5 minutes. Based on historical data, the population standard deviation of call duration is estimated to be 3 minutes. What sample size is required?

**Question 5 (Sample Size for Proportion):**
A pollster wants to estimate the proportion of voters who will vote for a particular candidate. They want to be 99% confident that the margin of error is within 4%. What is the minimum sample size needed if no prior estimate of the proportion is available?

---

### 7. Answers to Practice Questions

**Answer 1:**
*   $n = 64$, $\bar{x} = 100.5$, $\sigma = 2$, Confidence Level = 95% ($\alpha = 0.05$, $z_{0.025} = 1.96$)
*   $CI = \bar{x} \pm z_{\alpha/2} \left(\frac{\sigma}{\sqrt{n}}\right)$
*   $CI = 100.5 \pm 1.96 \left(\frac{2}{\sqrt{64}}\right)$
*   $CI = 100.5 \pm 1.96 \left(\frac{2}{8}\right)$
*   $CI = 100.5 \pm 1.96 (0.25)$
*   $CI = 100.5 \pm 0.49$
*   **95% CI = (100.01, 100.99) Ohms**

**Answer 2:**
*   $n = 25$, $\bar{x} = 3.5$, $s = 0.3$, Confidence Level = 90% ($\alpha = 0.10$, $\alpha/2 = 0.05$)
*   Degrees of freedom ($df$) = $n - 1 = 25 - 1 = 24$.
*   From the t-table, $t_{0.05, 24} = 1.711$.
*   $CI = \bar{x} \pm t_{\alpha/2, n-1} \left(\frac{s}{\sqrt{n}}\right)$
*   $CI = 3.5 \pm 1.711 \left(\frac{0.3}{\sqrt{25}}\right)$
*   $CI = 3.5 \pm 1.711 \left(\frac{0.3}{5}\right)$
*   $CI = 3.5 \pm 1.711 (0.06)$
*   $CI = 3.5 \pm 0.10266$
*   **90% CI = (3.397, 3.603) V**

**Answer 3:**
*   $n = 500$, $x = 350$
*   $\hat{p} = \frac{350}{500} = 0.7$
*   Confidence Level = 98% ($\alpha = 0.02$, $\alpha/2 = 0.01$, $z_{0.01} = 2.326$)
*   Check conditions: $n\hat{p} = 500 \times 0.7 = 350 \ge 10$; $n(1-\hat{p}) = 500 \times 0.3 = 150 \ge 10$. Conditions met.
*   $CI = \hat{p} \pm z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$
*   $CI = 0.7 \pm 2.326 \sqrt{\frac{0.7(1-0.7)}{500}}$
*   $CI = 0.7 \pm 2.326 \sqrt{\frac{0.7 \times 0.3}{500}}$
*   $CI = 0.7 \pm 2.326 \sqrt{\frac{0.21}{500}}$
*   $CI = 0.7 \pm 2.326 \sqrt{0.00042}$
*   $CI = 0.7 \pm 2.326 (0.02049)$
*   $CI = 0.7 \pm 0.04766$
*   **98% CI = (0.652, 0.748)**

**Answer 4:**
*   $ME = 0.5$, Confidence Level = 95% ($z_{\alpha/2} = 1.96$), $\sigma = 3$
*   $n = \left(\frac{z_{\alpha/2} \sigma}{ME}\right)^2$
*   $n = \left(\frac{1.96 \times 3}{0.5}\right)^2$
*   $n = \left(\frac{5.88}{0.5}\right)^2$
*   $n = (11.76)^2$
*   $n = 138.3$
*   **Required Sample Size = 139**

**Answer 5:**
*   $ME = 0.04$, Confidence Level = 99% ($z_{\alpha/2} = 2.576$), $p = 0.5$ (no prior estimate)
*   $n = \left(\frac{z_{\alpha/2} \sqrt{p(1-p)}}{ME}\right)^2$
*   $n = \left(\frac{2.576 \sqrt{0.5(1-0.5)}}{0.04}\right)^2$
*   $n = \left(\frac{2.576 \sqrt{0.25}}{0.04}\right)^2$
*   $n = \left(\frac{2.576 \times 0.5}{0.04}\right)^2$
*   $n = \left(\frac{1.288}{0.04}\right)^2$
*   $n = (32.2)^2$
*   $n = 1036.84$
*   **Required Sample Size = 1037**

---

This module provides the foundational understanding and practical application of confidence intervals, which is crucial for estimating population parameters with a specified degree of certainty in electrical science and engineering applications. This aligns with **CO3** by enabling students to estimate population parameters and assess their certainty with confidence intervals.
