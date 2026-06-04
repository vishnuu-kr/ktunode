---
title: "Confidence Intervals and One-side confidence intervals for a Population Mean for large and small samples (normal distribution and t-distribution)"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 3: Confidence Intervals"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810934"
status: "completed"
scrapedAt: "2026-05-20T18:46:07.860Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4: Module 3: Confidence Intervals

## Topic: Confidence Intervals and One-Sided Confidence Intervals for a Population Mean (Large & Small Samples, Normal & t-Distributions)

This module delves into the crucial concept of estimating an unknown population mean using confidence intervals. We will explore how to construct both two-sided and one-sided intervals, considering different sample sizes and the underlying distribution of the data.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of a confidence interval:** Explain what a confidence interval represents and its interpretation.
*   **Distinguish between population parameters and sample statistics:** Differentiate between true population values and their estimates from samples.
*   **Calculate confidence intervals for a population mean for large samples:** Apply the appropriate methods when the sample size is large ($n \ge 30$).
*   **Calculate confidence intervals for a population mean for small samples:** Apply the appropriate methods when the sample size is small ($n < 30$) and the population standard deviation is unknown.
*   **Understand and apply the z-distribution and t-distribution:** Identify when to use each distribution based on sample size and knowledge of the population standard deviation.
*   **Construct one-sided confidence intervals for a population mean:** Create intervals that provide a lower or upper bound for the population mean.
*   **Interpret the results of confidence intervals:** Explain the meaning of a confidence interval in the context of a given problem.
*   **Determine the required sample size for a desired margin of error:** Calculate the sample size needed to achieve a specific level of precision.

---

### 1. Introduction to Confidence Intervals

**Key Concept:** A confidence interval (CI) is a range of values, derived from sample statistics, that is likely to contain the true value of an unknown population parameter.

**Why do we need confidence intervals?**

*   In physical sciences, we often cannot measure every single member of a population.
*   We rely on sample data to make inferences about the population.
*   A single point estimate (like the sample mean) is unlikely to be exactly equal to the population mean.
*   A confidence interval provides a range that accounts for the variability in sampling, giving us a measure of certainty.

**Key Definitions:**

*   **Population Parameter:** A numerical characteristic of an entire population (e.g., population mean $\mu$, population standard deviation $\sigma$). These are usually unknown.
*   **Sample Statistic:** A numerical characteristic of a sample (e.g., sample mean $\bar{x}$, sample standard deviation $s$). These are calculated from sample data.
*   **Confidence Level:** The probability that the confidence interval will contain the true population parameter. Common confidence levels are 90%, 95%, and 99%. It's often expressed as $(1 - \alpha)$, where $\alpha$ is the significance level.
*   **Margin of Error (MOE):** The "plus or minus" part of the confidence interval. It represents the maximum expected difference between the sample statistic and the true population parameter.
*   **Confidence Interval Formula (General):**
    *   **Two-Sided:**  `Point Estimate ± Margin of Error`
    *   **One-Sided (Lower Bound):** `Point Estimate - Margin of Error`
    *   **One-Sided (Upper Bound):** `Point Estimate + Margin of Error`

**Interpretation of a 95% Confidence Interval:**

A 95% confidence interval means that if we were to repeatedly take samples from the same population and construct a confidence interval for each sample, approximately 95% of those intervals would contain the true population mean.

**Important Point:** It does *not* mean there is a 95% probability that the true population mean falls within *this specific* calculated interval. The true population mean is fixed, and the interval is what varies from sample to sample.

---

### 2. Confidence Intervals for Population Mean ($\mu$) - Large Samples ($n \ge 30$)

When the sample size is large ($n \ge 30$), the Central Limit Theorem (CLT) states that the sampling distribution of the sample mean ($\bar{x}$) will be approximately normally distributed, regardless of the population's distribution.

#### Case 1: Population Standard Deviation ($\sigma$) is Known

*   **Distribution Used:** z-distribution (standard normal distribution).
*   **Formula for Confidence Interval:**
    $$ \bar{x} \pm z_{\alpha/2} \frac{\sigma}{\sqrt{n}} $$
    Where:
    *   $\bar{x}$ is the sample mean.
    *   $z_{\alpha/2}$ is the critical z-value for a given confidence level $(1-\alpha)$. For example, for a 95% CI, $\alpha = 0.05$, so $\alpha/2 = 0.025$. The $z_{\alpha/2}$ value is found from the z-table or calculator (e.g., $z_{0.025} = 1.96$).
    *   $\sigma$ is the known population standard deviation.
    *   $n$ is the sample size.
*   **Margin of Error (MOE):** $MOE = z_{\alpha/2} \frac{\sigma}{\sqrt{n}}$

**Example:**

A scientist measures the radioactivity of a sample of material. The sample mean is 15.2 mSv, and the sample size is 100. If the population standard deviation is known to be 2.0 mSv, construct a 95% confidence interval for the true mean radioactivity.

**Solution:**

*   $\bar{x} = 15.2$
*   $n = 100$
*   $\sigma = 2.0$
*   Confidence Level = 95%, so $\alpha = 0.05$, and $\alpha/2 = 0.025$.
*   $z_{0.025} = 1.96$

CI = $15.2 \pm 1.96 \frac{2.0}{\sqrt{100}}$
CI = $15.2 \pm 1.96 \frac{2.0}{10}$
CI = $15.2 \pm 1.96 \times 0.2$
CI = $15.2 \pm 0.392$

The 95% confidence interval is $(15.2 - 0.392, 15.2 + 0.392) = (14.808, 15.592)$ mSv.

**Interpretation:** We are 95% confident that the true mean radioactivity of the material is between 14.808 mSv and 15.592 mSv.

#### Case 2: Population Standard Deviation ($\sigma$) is Unknown

When $\sigma$ is unknown, we use the sample standard deviation ($s$) as an estimate.

*   **Distribution Used:** t-distribution. The t-distribution is similar to the z-distribution but has heavier tails, accounting for the extra uncertainty introduced by estimating $\sigma$ with $s$. The shape of the t-distribution depends on the **degrees of freedom (df)**.
*   **Degrees of Freedom (df):** For a single population mean, $df = n - 1$.
*   **Formula for Confidence Interval:**
    $$ \bar{x} \pm t_{\alpha/2, df} \frac{s}{\sqrt{n}} $$
    Where:
    *   $\bar{x}$ is the sample mean.
    *   $t_{\alpha/2, df}$ is the critical t-value for a given confidence level $(1-\alpha)$ and $df = n - 1$. This value is found using a t-table or statistical software.
    *   $s$ is the sample standard deviation.
    *   $n$ is the sample size.
*   **Margin of Error (MOE):** $MOE = t_{\alpha/2, df} \frac{s}{\sqrt{n}}$

**Example:**

A researcher studies the efficiency of a new catalytic converter. A sample of 40 cars is tested, yielding a sample mean efficiency of 85% with a sample standard deviation of 5%. Construct a 99% confidence interval for the true mean efficiency.

**Solution:**

*   $\bar{x} = 85$
*   $s = 5$
*   $n = 40$
*   Confidence Level = 99%, so $\alpha = 0.01$, and $\alpha/2 = 0.005$.
*   $df = n - 1 = 40 - 1 = 39$.
*   From a t-table or calculator, $t_{0.005, 39} \approx 2.708$ (Note: If 39 is not available, use the closest df, usually the next lower value like 30 or 40 depending on the table).

CI = $85 \pm 2.708 \frac{5}{\sqrt{40}}$
CI = $85 \pm 2.708 \frac{5}{6.325}$
CI = $85 \pm 2.708 \times 0.7906$
CI = $85 \pm 2.142$

The 99% confidence interval is $(85 - 2.142, 85 + 2.142) = (82.858, 87.142)$ %.

**Interpretation:** We are 99% confident that the true mean efficiency of cars with the new catalytic converter is between 82.858% and 87.142%.

**Important Point:** As the sample size increases, the t-distribution approaches the z-distribution. For large $df$ (e.g., $> 100$ or consult your textbook/software), the critical t-value will be very close to the corresponding critical z-value.

---

### 3. Confidence Intervals for Population Mean ($\mu$) - Small Samples ($n < 30$)

When the sample size is small ($n < 30$), we rely heavily on the assumption that the **population itself is approximately normally distributed**. If the population distribution is unknown or known to be non-normal, constructing a confidence interval for the mean with a small sample is problematic.

*   **If Population Standard Deviation ($\sigma$) is Known:** Use the z-distribution.
    $$ \bar{x} \pm z_{\alpha/2} \frac{\sigma}{\sqrt{n}} $$
    *(This is less common in practice, as $\sigma$ is usually unknown when $n$ is small).*

*   **If Population Standard Deviation ($\sigma$) is Unknown:** Use the t-distribution.
    $$ \bar{x} \pm t_{\alpha/2, df} \frac{s}{\sqrt{n}} $$
    With $df = n - 1$. This is the most common scenario for small samples.

**Example (Small Sample):**

A physicist measures the wavelength of a particular emission line 10 times, obtaining the following data (in nanometers): 589.0, 589.2, 589.1, 589.3, 589.0, 589.2, 589.4, 589.1, 589.2, 589.3. Assume the population of wavelengths is normally distributed. Construct a 90% confidence interval for the true mean wavelength.

**Solution:**

1.  **Calculate Sample Mean ($\bar{x}$):**
    Sum = $589.0 + 589.2 + 589.1 + 589.3 + 589.0 + 589.2 + 589.4 + 589.1 + 589.2 + 589.3 = 5891.8$
    $\bar{x} = \frac{5891.8}{10} = 589.18$ nm.

2.  **Calculate Sample Standard Deviation ($s$):**
    *   Calculate deviations from the mean ($x_i - \bar{x}$): -0.18, 0.02, -0.08, 0.12, -0.18, 0.02, 0.22, -0.08, 0.02, 0.12
    *   Square deviations: 0.0324, 0.0004, 0.0064, 0.0144, 0.0324, 0.0004, 0.0484, 0.0064, 0.0004, 0.0144
    *   Sum of squared deviations = $0.156$
    *   $s^2 = \frac{\sum(x_i - \bar{x})^2}{n-1} = \frac{0.156}{10-1} = \frac{0.156}{9} \approx 0.01733$
    *   $s = \sqrt{0.01733} \approx 0.1316$ nm.

3.  **Determine Critical t-value:**
    *   $n = 10$
    *   $df = n - 1 = 10 - 1 = 9$.
    *   Confidence Level = 90%, so $\alpha = 0.10$, and $\alpha/2 = 0.05$.
    *   From a t-table, $t_{0.05, 9} = 1.833$.

4.  **Calculate Confidence Interval:**
    CI = $\bar{x} \pm t_{\alpha/2, df} \frac{s}{\sqrt{n}}$
    CI = $589.18 \pm 1.833 \frac{0.1316}{\sqrt{10}}$
    CI = $589.18 \pm 1.833 \frac{0.1316}{3.162}$
    CI = $589.18 \pm 1.833 \times 0.0416$
    CI = $589.18 \pm 0.0763$

The 90% confidence interval is $(589.18 - 0.0763, 589.18 + 0.0763) = (589.1037, 589.2563)$ nm.

**Interpretation:** Assuming the population of wavelengths is normally distributed, we are 90% confident that the true mean wavelength of this emission line is between 589.1037 nm and 589.2563 nm.

**Key Assumption for Small Samples:** **Normality of the population.** If the population is not normal, confidence intervals based on the t-distribution may not be accurate. Non-parametric methods might be more appropriate in such cases.

---

### 4. One-Sided Confidence Intervals for a Population Mean

Sometimes, we are interested in knowing if the population mean is *at least* a certain value or *at most* a certain value, rather than a range. This leads to one-sided confidence intervals.

*   **Purpose:** To establish a lower bound or an upper bound for the population mean with a certain level of confidence.
*   **Confidence Level:** For a one-sided interval, the confidence level is $(1 - \alpha)$. This means there is an $\alpha$ probability of the true mean falling outside of the stated bound in the undesired direction.

#### Lower Confidence Bound (at least a certain value)

*   **Formula:**
    $$ \bar{x} - \text{critical value} \times \frac{\text{standard error}}{\sqrt{n}} $$
*   **For Large Samples (known $\sigma$):**
    $$ \bar{x} - z_{\alpha} \frac{\sigma}{\sqrt{n}} $$
    (Note: we use $z_{\alpha}$ because the entire $\alpha$ is in one tail).
*   **For Large Samples (unknown $\sigma$):**
    $$ \bar{x} - t_{\alpha, df} \frac{s}{\sqrt{n}} $$
    (Note: we use $t_{\alpha, df}$ because the entire $\alpha$ is in one tail).
*   **For Small Samples (unknown $\sigma$, normal population):**
    $$ \bar{x} - t_{\alpha, df} \frac{s}{\sqrt{n}} $$
    (Note: we use $t_{\alpha, df}$ because the entire $\alpha$ is in one tail).

**Example (Lower Bound, Small Sample):**

A materials scientist wants to be 95% confident that the tensile strength of a new alloy is *at least* a certain value. A sample of 15 specimens yielded a sample mean tensile strength of 500 MPa with a sample standard deviation of 20 MPa. Assume the population of tensile strengths is normally distributed.

**Solution:**

*   $\bar{x} = 500$ MPa
*   $s = 20$ MPa
*   $n = 15$
*   Confidence Level = 95%, so $\alpha = 0.05$. Since it's a lower bound, we use $t_{\alpha, df}$.
*   $df = n - 1 = 15 - 1 = 14$.
*   From a t-table, $t_{0.05, 14} = 1.761$.

Lower Bound = $\bar{x} - t_{\alpha, df} \frac{s}{\sqrt{n}}$
Lower Bound = $500 - 1.761 \frac{20}{\sqrt{15}}$
Lower Bound = $500 - 1.761 \frac{20}{3.873}$
Lower Bound = $500 - 1.761 \times 5.164$
Lower Bound = $500 - 9.096$
Lower Bound $\approx 490.904$ MPa.

**Interpretation:** We are 95% confident that the true mean tensile strength of the alloy is at least 490.904 MPa.

#### Upper Confidence Bound (at most a certain value)

*   **Formula:**
    $$ \bar{x} + \text{critical value} \times \frac{\text{standard error}}{\sqrt{n}} $$
*   **For Large Samples (known $\sigma$):**
    $$ \bar{x} + z_{\alpha} \frac{\sigma}{\sqrt{n}} $$
    (Note: we use $z_{\alpha}$ because the entire $\alpha$ is in one tail).
*   **For Large Samples (unknown $\sigma$):**
    $$ \bar{x} + t_{\alpha, df} \frac{s}{\sqrt{n}} $$
    (Note: we use $t_{\alpha, df}$ because the entire $\alpha$ is in one tail).
*   **For Small Samples (unknown $\sigma$, normal population):**
    $$ \bar{x} + t_{\alpha, df} \frac{s}{\sqrt{n}} $$
    (Note: we use $t_{\alpha, df}$ because the entire $\alpha$ is in one tail).

**Example (Upper Bound, Large Sample):**

An environmental agency wants to be 90% confident that the mean concentration of a pollutant in a river is *at most* a certain value. A sample of 50 water specimens is collected, yielding a sample mean concentration of 15 ppm with a sample standard deviation of 3 ppm.

**Solution:**

*   $\bar{x} = 15$ ppm
*   $s = 3$ ppm
*   $n = 50$
*   Confidence Level = 90%, so $\alpha = 0.10$. Since it's an upper bound, we use $t_{\alpha, df}$.
*   $df = n - 1 = 50 - 1 = 49$.
*   From a t-table, $t_{0.10, 49} \approx 1.677$ (Using $df=40$ or $df=50$ as approximations if 49 is not available).

Upper Bound = $\bar{x} + t_{\alpha, df} \frac{s}{\sqrt{n}}$
Upper Bound = $15 + 1.677 \frac{3}{\sqrt{50}}$
Upper Bound = $15 + 1.677 \frac{3}{7.071}$
Upper Bound = $15 + 1.677 \times 0.424$
Upper Bound = $15 + 0.711$
Upper Bound $\approx 15.711$ ppm.

**Interpretation:** We are 90% confident that the true mean concentration of the pollutant in the river is at most 15.711 ppm.

---

### 5. Determining Required Sample Size

To achieve a desired margin of error (MOE) for a confidence interval, we can calculate the necessary sample size.

*   **For Large Samples (known $\sigma$):**
    The margin of error is $MOE = z_{\alpha/2} \frac{\sigma}{\sqrt{n}}$.
    To find $n$, we rearrange:
    $\sqrt{n} = z_{\alpha/2} \frac{\sigma}{MOE}$
    $$ n = \left( \frac{z_{\alpha/2} \sigma}{MOE} \right)^2 $$

*   **For Large Samples (unknown $\sigma$):**
    We use the sample standard deviation $s$ as an estimate for $\sigma$. The formula is the same:
    $$ n = \left( \frac{z_{\alpha/2} s}{MOE} \right)^2 $$
    *Note: This requires a preliminary estimate of $s$. If no estimate is available, a pilot study might be needed.*

*   **For Small Samples (unknown $\sigma$):**
    The calculation for sample size is the same as for large samples using the t-distribution:
    $$ n = \left( \frac{t_{\alpha/2, df} s}{MOE} \right)^2 $$
    *However, this creates a circular problem because $t_{\alpha/2, df}$ depends on $n$. In practice, we often use the z-value as an approximation for large $n$, or we iterate. A common approach is to use $z_{\alpha/2}$ to get an initial estimate of $n$, then find the corresponding $t_{\alpha/2}$ for that estimated $n$, and recalculate $n$. If the values are significantly different, repeat.*
    A simpler practical approach for small samples is to use the z-value from the large sample calculation, as the t-value will be close for moderate sample sizes and we want to ensure we meet the MOE.

**Example (Sample Size):**

A physicist wants to estimate the mass of a subatomic particle with a margin of error of 0.01 atomic mass units. From previous experiments, the population standard deviation is estimated to be 0.5 atomic mass units. How many measurements are needed to be 95% confident?

**Solution:**

*   $MOE = 0.01$
*   $\sigma = 0.5$
*   Confidence Level = 95%, so $\alpha = 0.05$, and $\alpha/2 = 0.025$.
*   $z_{0.025} = 1.96$.

$n = \left( \frac{z_{\alpha/2} \sigma}{MOE} \right)^2$
$n = \left( \frac{1.96 \times 0.5}{0.01} \right)^2$
$n = \left( \frac{0.98}{0.01} \right)^2$
$n = (98)^2$
$n = 9604$

**Interpretation:** 9604 measurements are needed to estimate the particle's mass with a margin of error of 0.01 atomic mass units at a 95% confidence level.

**Important Note on Sample Size:** Always round UP to the nearest whole number when calculating sample size, as you cannot have a fraction of a measurement.

---

### 6. Practice Questions

**Question 1:** A study of a new material's conductivity yields a sample mean of 5.2 S/m with a sample standard deviation of 0.8 S/m. If a sample of 60 readings was taken, calculate a 95% confidence interval for the population mean conductivity.

**Question 2:** A chemist measures the concentration of a catalyst in 12 trials, obtaining a sample mean of 25.5 ppm and a sample standard deviation of 1.2 ppm. Assuming the concentration data is normally distributed, calculate a 99% confidence interval for the true mean concentration.

**Question 3:** A physicist wants to be 90% confident that the true mean lifetime of a certain type of vacuum tube is *at least* a certain value. A sample of 20 tubes has a mean lifetime of 5000 hours and a standard deviation of 400 hours. Calculate the lower confidence bound for the mean lifetime.

**Question 4:** An engineer wants to estimate the average thickness of a coating with a margin of error of 2 micrometers. From prior knowledge, the population standard deviation is estimated to be 15 micrometers. How many samples are needed for a 98% confidence interval?

---

### 7. Answers to Practice Questions

**Answer 1:**
*   $\bar{x} = 5.2$
*   $s = 0.8$
*   $n = 60$ (large sample, use t-distribution, but z is a good approximation for $n > 30$)
*   Confidence = 95%, $\alpha = 0.05$, $\alpha/2 = 0.025$.
*   $df = 59$. $t_{0.025, 59} \approx 2.000$ (close to $z_{0.025} = 1.96$)
*   CI = $5.2 \pm 2.000 \frac{0.8}{\sqrt{60}}$
*   CI = $5.2 \pm 2.000 \frac{0.8}{7.746}$
*   CI = $5.2 \pm 2.000 \times 0.103$
*   CI = $5.2 \pm 0.206$
*   **95% CI = (4.994, 5.406) S/m**

**Answer 2:**
*   $\bar{x} = 25.5$ ppm
*   $s = 1.2$ ppm
*   $n = 12$ (small sample, normal population assumed, use t-distribution)
*   Confidence = 99%, $\alpha = 0.01$, $\alpha/2 = 0.005$.
*   $df = n - 1 = 11$.
*   $t_{0.005, 11} = 3.106$.
*   CI = $25.5 \pm 3.106 \frac{1.2}{\sqrt{12}}$
*   CI = $25.5 \pm 3.106 \frac{1.2}{3.464}$
*   CI = $25.5 \pm 3.106 \times 0.346$
*   CI = $25.5 \pm 1.075$
*   **99% CI = (24.425, 26.575) ppm**

**Answer 3:**
*   $\bar{x} = 5000$ hours
*   $s = 400$ hours
*   $n = 20$ (small sample, normal population assumed, use t-distribution for one-sided)
*   Confidence = 90%, $\alpha = 0.10$. For lower bound, use $t_{\alpha, df}$.
*   $df = n - 1 = 19$.
*   $t_{0.10, 19} = 1.328$.
*   Lower Bound = $5000 - 1.328 \frac{400}{\sqrt{20}}$
*   Lower Bound = $5000 - 1.328 \frac{400}{4.472}$
*   Lower Bound = $5000 - 1.328 \times 89.44$
*   Lower Bound = $5000 - 118.78$
*   **Lower Confidence Bound $\approx 4881.22$ hours**

**Answer 4:**
*   $MOE = 2$ micrometers
*   $\sigma = 15$ micrometers (estimate)
*   Confidence = 98%, $\alpha = 0.02$, $\alpha/2 = 0.01$.
*   $z_{0.01} = 2.326$.
*   $n = \left( \frac{z_{\alpha/2} \sigma}{MOE} \right)^2$
*   $n = \left( \frac{2.326 \times 15}{2} \right)^2$
*   $n = \left( \frac{34.89}{2} \right)^2$
*   $n = (17.445)^2$
*   $n \approx 304.33$
*   **Required Sample Size = 305 samples** (always round up).

---

### 8. Important Points to Remember:

*   **Large Sample ($n \ge 30$):** Generally use the z-distribution if $\sigma$ is known, and the t-distribution if $\sigma$ is unknown.
*   **Small Sample ($n < 30$):** **Crucially, assume the population is normally distributed.** Use the t-distribution if $\sigma$ is unknown. If the population is not normal, the t-distribution may not be reliable.
*   **Population Standard Deviation ($\sigma$):** If $\sigma$ is known, use the z-distribution (regardless of sample size, though this scenario is rare). If $\sigma$ is unknown, use the sample standard deviation $s$ and the t-distribution.
*   **Degrees of Freedom (df):** For a single population mean, $df = n - 1$. This is essential for the t-distribution.
*   **Interpretation:** A confidence interval is about the *process* of interval creation. For a 95% CI, if repeated many times, 95% of the intervals will capture the true mean.
*   **One-Sided Intervals:** Use $z_{\alpha}$ or $t_{\alpha}$ (not $\alpha/2$) when constructing one-sided intervals.
*   **Sample Size Calculation:** Always round up the calculated sample size to ensure the desired margin of error is met.
*   **Normality Assumption:** The validity of confidence intervals for small samples hinges on the normality of the population. Always consider this assumption.

---
This detailed set of notes should provide a strong foundation for understanding confidence intervals for population means in various scenarios relevant to physical science studies. Remember to practice with different examples and consult your course materials for specific critical values or software usage.
