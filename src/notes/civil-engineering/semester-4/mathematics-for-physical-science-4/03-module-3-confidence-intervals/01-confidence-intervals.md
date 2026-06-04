---
title: "Confidence Intervals"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 3: Confidence Intervals"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810932"
status: "completed"
scrapedAt: "2026-05-20T18:46:06.525Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 3: Confidence Intervals

### Topic: Confidence Intervals

This module introduces the concept of **Confidence Intervals (CIs)**, a fundamental tool in statistical inference. CIs provide a range of plausible values for an unknown population parameter, based on sample data. They are essential for quantifying the uncertainty associated with estimating population characteristics from samples, particularly in physical science where measurements are subject to variability.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **LO1: Define confidence interval and its purpose.**
*   **LO2: Understand the relationship between sample statistics, population parameters, and confidence intervals.**
*   **LO3: Calculate confidence intervals for population means (when population standard deviation is known and unknown).**
*   **LO4: Calculate confidence intervals for population proportions.**
*   **LO5: Interpret confidence intervals in the context of physical science problems.**
*   **LO6: Determine the required sample size for a desired margin of error.**

---

### 1. What is a Confidence Interval and its Purpose?

#### Key Concepts and Definitions:

*   **Population Parameter:** A numerical characteristic of the entire population (e.g., the true average mass of a specific type of particle, the true proportion of successful experiments). These are usually unknown.
*   **Sample Statistic:** A numerical characteristic calculated from a sample of data drawn from the population (e.g., the sample mean mass, the sample proportion of successful experiments). These are used to estimate population parameters.
*   **Confidence Interval (CI):** A range of values within which we are reasonably confident that the true population parameter lies.
*   **Point Estimate:** A single value that is the best guess for the population parameter (e.g., the sample mean as a point estimate for the population mean).
*   **Margin of Error (ME):** The "plus or minus" part of the confidence interval. It represents the uncertainty in our estimate.
*   **Confidence Level:** The probability that the confidence interval contains the true population parameter. Common confidence levels are 90%, 95%, and 99%.

#### Purpose of Confidence Intervals:

*   **Quantify Uncertainty:** Unlike point estimates, CIs provide a measure of the precision of our estimate. A narrower CI indicates a more precise estimate.
*   **Inferential Statistics:** CIs are a key tool for making inferences about a population based on sample data.
*   **Decision Making:** CIs help in making informed decisions by providing a range of plausible values for a parameter. For example, a physicist might use a CI to determine if an observed effect is statistically significant or simply due to random variation.

#### Relationship between Sample Statistics, Population Parameters, and Confidence Intervals:

Imagine we want to estimate the average tensile strength of a new alloy. We take a sample of 100 samples, calculate the sample mean tensile strength ($\bar{x}$), and use this as a point estimate for the population mean tensile strength ($\mu$). However, if we were to take another sample of 100, we would likely get a different sample mean.

A confidence interval acknowledges this variability. It uses the sample statistic ($\bar{x}$) and a margin of error (calculated using the sample variability and the confidence level) to construct a range (e.g., $[\bar{x} - ME, \bar{x} + ME]$) that is likely to contain the true population mean ($\mu$).

**Important Point to Remember:** A confidence interval does **not** state the probability that the true population parameter falls within *a specific calculated interval*. Instead, it refers to the long-run proportion of intervals constructed from repeated sampling that would capture the true parameter. If we were to construct many CIs from different samples, approximately the stated confidence level (e.g., 95%) of those intervals would contain the true population parameter.

---

### 2. Calculating Confidence Intervals for Population Means

We will consider two scenarios:

#### 2.1. When the Population Standard Deviation ($\sigma$) is Known

This is a less common scenario in practice but is fundamental for understanding the construction of CIs.

*   **Assumptions:** The population is normally distributed, or the sample size is large enough (n > 30) due to the Central Limit Theorem.
*   **Formula:**
    $CI = \bar{x} \pm z_{\alpha/2} \left(\frac{\sigma}{\sqrt{n}}\right)$

    Where:
    *   $\bar{x}$ is the sample mean.
    *   $\sigma$ is the known population standard deviation.
    *   $n$ is the sample size.
    *   $z_{\alpha/2}$ is the critical z-value corresponding to the desired confidence level. The $\alpha$ represents the significance level (1 - confidence level). For a 95% CI, $\alpha = 0.05$, and $\alpha/2 = 0.025$. The $z_{0.025}$ value is 1.96.

#### Critical z-values ($z_{\alpha/2}$) for Common Confidence Levels:

| Confidence Level | $\alpha$ | $\alpha/2$ | $z_{\alpha/2}$ |
| :--------------- | :------- | :--------- | :------------- |
| 90%              | 0.10     | 0.05       | 1.645          |
| 95%              | 0.05     | 0.025      | 1.960          |
| 99%              | 0.01     | 0.005      | 2.576          |

*   **Margin of Error (ME):** $ME = z_{\alpha/2} \left(\frac{\sigma}{\sqrt{n}}\right)$

**Example 1:**
A research team measures the energy output of a new fusion reactor over 50 trials. The sample mean energy output is 250 MW, and the population standard deviation of energy output is known to be 15 MW. Construct a 95% confidence interval for the true mean energy output of the reactor.

**Solution:**
*   $\bar{x} = 250$ MW
*   $\sigma = 15$ MW
*   $n = 50$
*   Confidence Level = 95%, so $z_{\alpha/2} = 1.96$

$CI = 250 \pm 1.96 \left(\frac{15}{\sqrt{50}}\right)$
$CI = 250 \pm 1.96 \left(\frac{15}{7.071}\right)$
$CI = 250 \pm 1.96 (2.121)$
$CI = 250 \pm 4.157$

The 95% confidence interval is **(245.843 MW, 254.157 MW)**.

#### 2.2. When the Population Standard Deviation ($\sigma$) is Unknown

In most real-world scenarios, the population standard deviation is unknown and must be estimated from the sample using the sample standard deviation ($s$). In this case, we use the **t-distribution**.

*   **Assumptions:** The population is normally distributed, or the sample size is large enough (n > 30).
*   **Formula:**
    $CI = \bar{x} \pm t_{\alpha/2, n-1} \left(\frac{s}{\sqrt{n}}\right)$

    Where:
    *   $\bar{x}$ is the sample mean.
    *   $s$ is the sample standard deviation.
    *   $n$ is the sample size.
    *   $t_{\alpha/2, n-1}$ is the critical t-value from the t-distribution with $n-1$ degrees of freedom, corresponding to the desired confidence level.
    *   **Degrees of Freedom (df):** $df = n-1$

*   **Margin of Error (ME):** $ME = t_{\alpha/2, n-1} \left(\frac{s}{\sqrt{n}}\right)$

**Key Differences from z-distribution:**
The t-distribution has fatter tails than the z-distribution, meaning the critical t-values are generally larger. This accounts for the additional uncertainty introduced by estimating $\sigma$ with $s$. As the sample size ($n$) increases, the t-distribution approaches the z-distribution.

**Example 2:**
A physicist measures the wavelength of a spectral line from a distant star. A sample of 10 measurements yields a mean wavelength of 589.3 nm and a sample standard deviation of 0.2 nm. Construct a 99% confidence interval for the true mean wavelength.

**Solution:**
*   $\bar{x} = 589.3$ nm
*   $s = 0.2$ nm
*   $n = 10$
*   Confidence Level = 99%
*   Degrees of Freedom ($df$) = $n-1 = 10-1 = 9$

We need to find the critical t-value $t_{\alpha/2, 9}$ for a 99% confidence level. For 99% confidence, $\alpha = 0.01$, so $\alpha/2 = 0.005$.
Looking up a t-table or using statistical software for $t_{0.005, 9}$, we find it to be approximately **3.250**.

$CI = 589.3 \pm 3.250 \left(\frac{0.2}{\sqrt{10}}\right)$
$CI = 589.3 \pm 3.250 \left(\frac{0.2}{3.162}\right)$
$CI = 589.3 \pm 3.250 (0.0633)$
$CI = 589.3 \pm 0.206$

The 99% confidence interval is **(589.094 nm, 589.506 nm)**.

**Important Point to Remember:** Always use the t-distribution when the population standard deviation is unknown, regardless of the sample size. While for very large sample sizes (n > 30), the t-values approach z-values, it's generally safer and more accurate to use the t-distribution.

---

### 3. Calculating Confidence Intervals for Population Proportions

This is used when we are interested in estimating the proportion of a population that possesses a certain characteristic.

*   **Assumptions:** The sample is random and representative. The sample size is large enough such that $n\hat{p} \ge 10$ and $n(1-\hat{p}) \ge 10$, where $\hat{p}$ is the sample proportion. This ensures the sampling distribution of the proportion is approximately normal.
*   **Formula:**
    $CI = \hat{p} \pm z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$

    Where:
    *   $\hat{p}$ (p-hat) is the sample proportion (number of successes / sample size).
    *   $n$ is the sample size.
    *   $z_{\alpha/2}$ is the critical z-value corresponding to the desired confidence level.

*   **Margin of Error (ME):** $ME = z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$

**Example 3:**
A physicist tests a new material for its superconductivity at a certain temperature. Out of 100 tested samples, 75 exhibit superconductivity. Construct a 90% confidence interval for the true proportion of samples that superconduct at this temperature.

**Solution:**
*   Number of successes (superconductors) = 75
*   $n = 100$
*   $\hat{p} = \frac{75}{100} = 0.75$
*   Confidence Level = 90%
*   Check assumptions: $n\hat{p} = 100 \times 0.75 = 75 \ge 10$. $n(1-\hat{p}) = 100 \times (1-0.75) = 100 \times 0.25 = 25 \ge 10$. Assumptions are met.

We need to find $z_{\alpha/2}$ for a 90% confidence level. For 90% confidence, $\alpha = 0.10$, so $\alpha/2 = 0.05$.
The critical z-value $z_{0.05}$ is **1.645**.

$CI = 0.75 \pm 1.645 \sqrt{\frac{0.75(1-0.75)}{100}}$
$CI = 0.75 \pm 1.645 \sqrt{\frac{0.75(0.25)}{100}}$
$CI = 0.75 \pm 1.645 \sqrt{\frac{0.1875}{100}}$
$CI = 0.75 \pm 1.645 \sqrt{0.001875}$
$CI = 0.75 \pm 1.645 (0.0433)$
$CI = 0.75 \pm 0.0712$

The 90% confidence interval for the true proportion of samples that superconduct is **(0.6788, 0.8212)**.

**Important Point to Remember:** When calculating the confidence interval for a proportion, use the sample proportion ($\hat{p}$) in the standard error calculation. This is because the true population proportion ($p$) is unknown.

---

### 4. Interpreting Confidence Intervals in Physical Science

Interpreting CIs correctly is crucial for drawing valid conclusions.

*   **For a CI for the Mean:** "We are 95% confident that the true mean [physical quantity, e.g., energy output] of the [population, e.g., fusion reactor] lies between [lower bound] and [upper bound]."
    *   **Example Interpretation (Example 1):** We are 95% confident that the true mean energy output of the fusion reactor is between 245.843 MW and 254.157 MW.

*   **For a CI for the Proportion:** "We are 90% confident that the true proportion of [items with characteristic, e.g., samples that superconduct] in the [population, e.g., new material] at the given temperature is between [lower bound] and [upper bound]."
    *   **Example Interpretation (Example 3):** We are 90% confident that the true proportion of the new material that exhibits superconductivity at this temperature is between 0.6788 and 0.8212.

*   **What it doesn't mean:**
    *   It does not mean that there is a 95% probability that the true mean falls within *this specific* calculated interval. The true mean is fixed; it's the interval that varies with each sample.
    *   It does not mean that 95% of the *sample data* falls within the interval. The interval is for the population parameter.

*   **Impact of Confidence Level and Sample Size:**
    *   **Higher Confidence Level:** Leads to a wider interval (more uncertainty). To be more confident, you need a larger range.
    *   **Larger Sample Size:** Leads to a narrower interval (more precision). More data reduces uncertainty.
    *   **Smaller Standard Deviation (or Margin of Error):** Leads to a narrower interval. Less variability in the data results in a more precise estimate.

**Physical Science Application Example:**
A particle physicist measures the mass of a newly discovered particle. The sample mean is 105.6 GeV/c², with a sample standard deviation of 1.2 GeV/c² and a sample size of 25. They want to construct a 95% confidence interval for the true mass.

*   $\bar{x} = 105.6$ GeV/c²
*   $s = 1.2$ GeV/c²
*   $n = 25$, so $df = 24$.
*   For 95% confidence, $t_{0.025, 24} \approx 2.064$.

$CI = 105.6 \pm 2.064 \left(\frac{1.2}{\sqrt{25}}\right)$
$CI = 105.6 \pm 2.064 \left(\frac{1.2}{5}\right)$
$CI = 105.6 \pm 2.064 (0.24)$
$CI = 105.6 \pm 0.495$

The 95% CI is **(105.105 GeV/c², 106.095 GeV/c²)**.

**Interpretation:** "We are 95% confident that the true mass of this new particle lies between 105.105 GeV/c² and 106.095 GeV/c²."

---

### 5. Determining the Required Sample Size for a Desired Margin of Error

Often, we need to determine the sample size required to achieve a certain level of precision (margin of error) for our estimate.

#### 5.1. For Population Means (when $\sigma$ is known)

*   **Formula:**
    $n = \left(\frac{z_{\alpha/2} \sigma}{ME}\right)^2$

    Where:
    *   $z_{\alpha/2}$ is the critical z-value for the desired confidence level.
    *   $\sigma$ is the estimated population standard deviation.
    *   $ME$ is the desired margin of error.

*   **If $\sigma$ is unknown:** You might need to conduct a pilot study to estimate $\sigma$, or use a conservative estimate (e.g., based on the range of expected values, range/4).

**Example 4:**
A materials scientist wants to estimate the mean tensile strength of a new polymer with a margin of error of ±5 MPa, with 95% confidence. Previous studies suggest the population standard deviation is approximately 20 MPa. What sample size is needed?

**Solution:**
*   $z_{\alpha/2}$ for 95% confidence = 1.96
*   $\sigma = 20$ MPa
*   $ME = 5$ MPa

$n = \left(\frac{1.96 \times 20}{5}\right)^2$
$n = \left(\frac{39.2}{5}\right)^2$
$n = (7.84)^2$
$n = 61.4656$

Since we cannot have a fraction of a sample, we always **round up** to the nearest whole number.
Therefore, a sample size of **62** is required.

#### 5.2. For Population Proportions

*   **Formula:**
    $n = \frac{z_{\alpha/2}^2 \hat{p}(1-\hat{p})}{ME^2}$

    Where:
    *   $z_{\alpha/2}$ is the critical z-value for the desired confidence level.
    *   $\hat{p}$ is an estimate of the population proportion.
    *   $ME$ is the desired margin of error.

*   **If $\hat{p}$ is unknown:** Use the most conservative estimate for $\hat{p}$, which is **0.5**. This maximizes the product $\hat{p}(1-\hat{p})$, resulting in the largest required sample size, ensuring the margin of error is met.

**Example 5:**
An environmental physicist wants to estimate the proportion of a certain pollutant in the air in a city. They want to be 99% confident that the margin of error is no more than ±0.03. What sample size is needed? Assume no prior knowledge of the proportion.

**Solution:**
*   $z_{\alpha/2}$ for 99% confidence = 2.576
*   $ME = 0.03$
*   Since we have no prior knowledge, we use the most conservative estimate: $\hat{p} = 0.5$.

$n = \frac{(2.576)^2 \times 0.5(1-0.5)}{(0.03)^2}$
$n = \frac{(6.635776) \times 0.5(0.5)}{0.0009}$
$n = \frac{6.635776 \times 0.25}{0.0009}$
$n = \frac{1.658944}{0.0009}$
$n = 1843.271$

Rounding up to the nearest whole number, a sample size of **1844** is needed.

**Important Point to Remember:** Always round *up* when calculating sample size. If you round down, your achieved margin of error will be slightly larger than desired.

---

### Practice Questions:

**Question 1:**
A chemist measures the concentration of a specific chemical in water samples. From a sample of 30 samples, the mean concentration is 15.2 ppm with a sample standard deviation of 2.1 ppm. Calculate a 95% confidence interval for the true mean concentration of the chemical.

**Question 2:**
A nuclear physicist monitors the rate of decay of a radioactive isotope. In a sample of 200 readings, they observe an average decay rate of 150 decays per minute, and the population standard deviation of the decay rate is known to be 25 decays per minute. Construct a 90% confidence interval for the true mean decay rate.

**Question 3:**
A materials scientist is testing a new type of solar cell. In a batch of 500 solar cells, 420 meet a specific efficiency threshold. Calculate a 98% confidence interval for the true proportion of solar cells that meet the threshold.

**Question 4:**
An astrophysicist wants to estimate the average redshift of a galaxy cluster. They want to be 95% confident that their estimate is within ±0.02 of the true average redshift. Based on preliminary data, the standard deviation is estimated to be 0.15. What sample size is required?

**Question 5:**
An electrical engineer is assessing the reliability of a new component. They want to estimate the proportion of components that will fail within the first 1000 hours of operation. They aim for a 95% confidence interval with a margin of error of ±0.05. What is the minimum sample size needed if they have no prior information about the failure rate?

---

### Answers to Practice Questions:

**Answer 1:**
*   $\bar{x} = 15.2$ ppm, $s = 2.1$ ppm, $n = 30$.
*   $df = n-1 = 29$.
*   For 95% confidence, $t_{0.025, 29} \approx 2.045$.
*   $CI = 15.2 \pm 2.045 \left(\frac{2.1}{\sqrt{30}}\right)$
*   $CI = 15.2 \pm 2.045 (0.383)$
*   $CI = 15.2 \pm 0.783$
*   The 95% CI is **(14.417 ppm, 15.983 ppm)**.

**Answer 2:**
*   $\bar{x} = 150$ decays/min, $\sigma = 25$ decays/min, $n = 200$.
*   For 90% confidence, $z_{0.05} = 1.645$.
*   $CI = 150 \pm 1.645 \left(\frac{25}{\sqrt{200}}\right)$
*   $CI = 150 \pm 1.645 (1.768)$
*   $CI = 150 \pm 2.908$
*   The 90% CI is **(147.092 decays/min, 152.908 decays/min)**.

**Answer 3:**
*   Number of successes = 420, $n = 500$.
*   $\hat{p} = \frac{420}{500} = 0.84$.
*   For 98% confidence, $\alpha = 0.02$, $\alpha/2 = 0.01$. $z_{0.01} \approx 2.326$.
*   Check assumptions: $n\hat{p} = 500 \times 0.84 = 420 \ge 10$. $n(1-\hat{p}) = 500 \times 0.16 = 80 \ge 10$.
*   $CI = 0.84 \pm 2.326 \sqrt{\frac{0.84(1-0.84)}{500}}$
*   $CI = 0.84 \pm 2.326 \sqrt{\frac{0.84 \times 0.16}{500}}$
*   $CI = 0.84 \pm 2.326 \sqrt{\frac{0.1344}{500}}$
*   $CI = 0.84 \pm 2.326 \sqrt{0.0002688}$
*   $CI = 0.84 \pm 2.326 (0.0164)$
*   $CI = 0.84 \pm 0.0381$
*   The 98% CI is **(0.8019, 0.8781)**.

**Answer 4:**
*   $z_{\alpha/2} = 1.96$ (for 95% confidence).
*   $\sigma = 0.15$.
*   $ME = 0.02$.
*   $n = \left(\frac{z_{\alpha/2} \sigma}{ME}\right)^2 = \left(\frac{1.96 \times 0.15}{0.02}\right)^2 = \left(\frac{0.294}{0.02}\right)^2 = (14.7)^2 = 216.09$.
*   Required sample size = **217**.

**Answer 5:**
*   $z_{\alpha/2} = 1.96$ (for 95% confidence).
*   $ME = 0.05$.
*   Since no prior info, $\hat{p} = 0.5$.
*   $n = \frac{z_{\alpha/2}^2 \hat{p}(1-\hat{p})}{ME^2} = \frac{(1.96)^2 \times 0.5(0.5)}{(0.05)^2} = \frac{3.8416 \times 0.25}{0.0025} = \frac{0.9604}{0.0025} = 384.16$.
*   Required sample size = **385**.

---

### Important Points to Remember:

*   **Confidence Intervals are ranges, not single points.** They quantify the uncertainty in our estimates.
*   **The confidence level (e.g., 95%) refers to the long-run success rate of the method.** It's the proportion of intervals that would contain the true parameter if we repeated the sampling process many times.
*   **Always use the t-distribution when the population standard deviation ($\sigma$) is unknown.**
*   **For proportions, ensure the sample size is large enough** ($n\hat{p} \ge 10$ and $n(1-\hat{p}) \ge 10$).
*   **To determine sample size, always round up** to ensure the desired margin of error is met.
*   **A wider interval implies less precision, while a narrower interval implies more precision.** This is influenced by the confidence level, sample size, and variability of the data.
*   **The interpretation of a confidence interval should always refer to the population parameter, not the sample data.**
