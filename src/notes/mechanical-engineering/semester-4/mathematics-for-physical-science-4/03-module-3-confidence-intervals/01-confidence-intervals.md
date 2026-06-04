---
title: "Confidence Intervals"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ec8"
status: "completed"
scrapedAt: "2026-05-20T17:54:45.348Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 3: Confidence Intervals

---

### Topic: Confidence Intervals

---

**Course Outcomes Addressed:**

*   **CO3:** Estimate population parameters, assess their certainty with confidence intervals, and test hypotheses about population means and proportions using z-tests and the one-sample t-test. (Knowledge Level: K3)

---

### 1. Introduction to Confidence Intervals

**Key Concept:** A confidence interval is a range of values, derived from sample statistics, that is likely to contain the value of an unknown population parameter. It provides a measure of the uncertainty associated with estimating a population parameter from sample data.

**Why are they important?**

*   In physical science, we often deal with measurements that have inherent variability.
*   We rarely have access to the entire population, so we rely on sample data to make inferences about population characteristics.
*   A single point estimate (like the sample mean) doesn't tell us how reliable that estimate is. Confidence intervals quantify this reliability.

**Analogy:** Imagine trying to estimate the average height of all adult males in a city. You can't measure everyone. You take a sample, calculate the average height of your sample, and then use that to estimate the average height of the entire city. A confidence interval would give you a range, e.g., "We are 95% confident that the true average height of adult males in this city is between 175 cm and 180 cm."

---

### 2. Key Concepts and Definitions

*   **Population Parameter:** A numerical characteristic of a population (e.g., population mean ($\mu$), population standard deviation ($\sigma$), population proportion ($p$)). These are usually unknown and what we aim to estimate.
*   **Sample Statistic:** A numerical characteristic of a sample (e.g., sample mean ($\bar{x}$), sample standard deviation ($s$), sample proportion ($\hat{p}$)). These are calculated from sample data and used to estimate population parameters.
*   **Point Estimate:** A single value calculated from sample data that estimates a population parameter. For example, $\bar{x}$ is a point estimate of $\mu$.
*   **Confidence Level:** The probability that a confidence interval constructed from a random sample will contain the true population parameter. Commonly expressed as a percentage (e.g., 90%, 95%, 99%).
*   **Confidence Coefficient (1 - $\alpha$):** The confidence level expressed as a decimal. $\alpha$ is the significance level.
*   **Margin of Error (MOE):** The "plus or minus" amount around the point estimate that defines the width of the confidence interval. It represents the maximum likely difference between the sample statistic and the true population parameter.
*   **Critical Value:** A multiplier used in calculating the margin of error. It depends on the confidence level and the sampling distribution of the statistic.

---

### 3. Constructing Confidence Intervals

The general form of a confidence interval is:

**Point Estimate ± Margin of Error**

The margin of error is typically calculated as:

**Margin of Error = Critical Value × Standard Error of the Statistic**

**Standard Error (SE):** The standard deviation of the sampling distribution of a statistic.

---

#### 3.1 Confidence Interval for a Population Mean ($\mu$)

This is a core topic for physical science applications. We often want to estimate the true mean value of a physical quantity.

**Scenario 1: Population Standard Deviation ($\sigma$) is Known**

*   **Assumption:** The population from which the sample is drawn is normally distributed, or the sample size is large ($n \ge 30$) due to the Central Limit Theorem (CLT).
*   **Statistic:** Sample Mean ($\bar{x}$)
*   **Standard Error of the Mean (SEM):** $\text{SE}(\bar{x}) = \frac{\sigma}{\sqrt{n}}$
*   **Critical Value:** The critical value comes from the standard normal distribution (z-distribution). For a confidence level $(1-\alpha)$, the critical value is $z_{\alpha/2}$. This value defines the area $\alpha/2$ in each tail of the standard normal curve.
*   **Confidence Interval Formula:**
    $$ \bar{x} \pm z_{\alpha/2} \left( \frac{\sigma}{\sqrt{n}} \right) $$

**Example (Devore, 9th ed., Chapter 8):**
Suppose we want to estimate the mean breaking strength of a particular type of steel wire. We know the population standard deviation of breaking strength is $\sigma = 3.5$ MPa. A sample of 40 wires gives a sample mean breaking strength of $\bar{x} = 150$ MPa. We want to construct a 95% confidence interval for the true mean breaking strength ($\mu$).

*   **Confidence Level:** 95%, so $1-\alpha = 0.95$, which means $\alpha = 0.05$.
*   **Significance Level:** $\alpha/2 = 0.025$.
*   **Critical Value ($z_{\alpha/2}$):** For 95% confidence, $z_{0.025} = 1.96$ (This value can be found in z-tables or statistical software. It's the z-score such that 95% of the area under the standard normal curve is between $-1.96$ and $1.96$).
*   **Standard Error:** $\text{SE}(\bar{x}) = \frac{3.5}{\sqrt{40}} \approx \frac{3.5}{6.32} \approx 0.554$ MPa.
*   **Margin of Error:** $1.96 \times 0.554 \approx 1.086$ MPa.
*   **Confidence Interval:** $150 \pm 1.086$
    *   Lower Bound: $150 - 1.086 = 148.914$ MPa
    *   Upper Bound: $150 + 1.086 = 151.086$ MPa

**Conclusion:** We are 95% confident that the true mean breaking strength of this type of steel wire is between 148.914 MPa and 151.086 MPa.

**Scenario 2: Population Standard Deviation ($\sigma$) is Unknown**

This is more common in practice. We use the sample standard deviation ($s$) as an estimate for $\sigma$.

*   **Assumption:** The population from which the sample is drawn is normally distributed. If the sample size is small ($n < 30$), normality is crucial. For larger sample sizes, the t-distribution still applies, and for very large samples, it approximates the z-distribution.
*   **Statistic:** Sample Mean ($\bar{x}$)
*   **Standard Error of the Mean (SEM):** $\text{SE}(\bar{x}) = \frac{s}{\sqrt{n}}$, where $s$ is the sample standard deviation.
*   **Critical Value:** The critical value comes from the **t-distribution**. The t-distribution depends on the degrees of freedom (df), which for a one-sample mean is $df = n-1$. For a confidence level $(1-\alpha)$, the critical value is $t_{\alpha/2, df}$.
*   **Confidence Interval Formula:**
    $$ \bar{x} \pm t_{\alpha/2, n-1} \left( \frac{s}{\sqrt{n}} \right) $$

**Key Point from Devore (9th ed.):** The t-distribution is bell-shaped, symmetric, and centered at 0, similar to the z-distribution. However, it has heavier tails, meaning that for the same confidence level, the critical t-values are larger than the critical z-values. This accounts for the additional uncertainty introduced by using $s$ instead of $\sigma$. As $n$ increases (and df increases), the t-distribution approaches the z-distribution.

**Example (Devore, 9th ed., Chapter 8):**
We want to estimate the mean lifetime of a certain type of light bulb. A sample of 15 bulbs had a mean lifetime of $\bar{x} = 1200$ hours, and a sample standard deviation of $s = 150$ hours. We want to construct a 90% confidence interval for the true mean lifetime ($\mu$). Assume the lifetimes are normally distributed.

*   **Confidence Level:** 90%, so $1-\alpha = 0.90$, which means $\alpha = 0.10$.
*   **Significance Level:** $\alpha/2 = 0.05$.
*   **Degrees of Freedom:** $df = n-1 = 15-1 = 14$.
*   **Critical Value ($t_{\alpha/2, df}$):** We need to find $t_{0.05, 14}$. Using a t-table or calculator, $t_{0.05, 14} \approx 1.761$. (This means there is 5% of the area in the upper tail, and 5% in the lower tail, for a total of 10% outside the interval).
*   **Standard Error:** $\text{SE}(\bar{x}) = \frac{s}{\sqrt{n}} = \frac{150}{\sqrt{15}} \approx \frac{150}{3.873} \approx 38.73$ hours.
*   **Margin of Error:** $1.761 \times 38.73 \approx 68.27$ hours.
*   **Confidence Interval:** $1200 \pm 68.27$
    *   Lower Bound: $1200 - 68.27 = 1131.73$ hours
    *   Upper Bound: $1200 + 68.27 = 1268.27$ hours

**Conclusion:** We are 90% confident that the true mean lifetime of this type of light bulb is between 1131.73 hours and 1268.27 hours.

---

#### 3.2 Confidence Interval for a Population Proportion ($p$)

Physical scientists might be interested in the proportion of materials that meet a certain specification, or the proportion of experimental trials that yield a specific outcome.

*   **Assumption:** The sample size is sufficiently large such that the sampling distribution of the sample proportion ($\hat{p}$) can be approximated by a normal distribution. This is usually met if $n\hat{p} \ge 10$ and $n(1-\hat{p}) \ge 10$.
*   **Statistic:** Sample Proportion ($\hat{p} = x/n$, where $x$ is the number of successes in $n$ trials).
*   **Standard Error of the Proportion:** $\text{SE}(\hat{p}) = \sqrt{\frac{p(1-p)}{n}}$. Since $p$ is unknown, we use $\hat{p}$: $\text{SE}(\hat{p}) \approx \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$.
*   **Critical Value:** For large samples, we use the z-distribution: $z_{\alpha/2}$.
*   **Confidence Interval Formula:**
    $$ \hat{p} \pm z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}} $$

**Example (Devore, 9th ed., Chapter 8):**
A new catalytic converter design is tested for its efficiency in reducing emissions. In a sample of 200 converters, 170 meet the required efficiency standard. We want to construct a 99% confidence interval for the true proportion ($p$) of all converters that meet the standard.

*   **Confidence Level:** 99%, so $1-\alpha = 0.99$, which means $\alpha = 0.01$.
*   **Significance Level:** $\alpha/2 = 0.005$.
*   **Critical Value ($z_{\alpha/2}$):** For 99% confidence, $z_{0.005} \approx 2.576$.
*   **Sample Proportion:** $\hat{p} = \frac{170}{200} = 0.85$.
*   **Check Assumptions:** $n\hat{p} = 200 \times 0.85 = 170 \ge 10$ and $n(1-\hat{p}) = 200 \times 0.15 = 30 \ge 10$. Assumptions met.
*   **Standard Error:** $\text{SE}(\hat{p}) = \sqrt{\frac{0.85(1-0.85)}{200}} = \sqrt{\frac{0.85 \times 0.15}{200}} = \sqrt{\frac{0.1275}{200}} = \sqrt{0.0006375} \approx 0.0252$.
*   **Margin of Error:** $2.576 \times 0.0252 \approx 0.065$.
*   **Confidence Interval:** $0.85 \pm 0.065$
    *   Lower Bound: $0.85 - 0.065 = 0.785$
    *   Upper Bound: $0.85 + 0.065 = 0.915$

**Conclusion:** We are 99% confident that the true proportion of catalytic converters that meet the required efficiency standard is between 0.785 and 0.915.

---

### 4. Factors Affecting the Width of a Confidence Interval

The width of a confidence interval is determined by the Margin of Error. Understanding what influences MOE is crucial for designing experiments and interpreting results.

*   **Confidence Level:**
    *   **Higher confidence level** $\implies$ **Larger critical value** $\implies$ **Wider interval**. (To be more confident, you need to cast a wider net).
*   **Sample Size ($n$):**
    *   **Larger sample size** $\implies$ **Smaller standard error** (since $n$ is in the denominator) $\implies$ **Smaller margin of error** $\implies$ **Narrower interval**. (More data leads to a more precise estimate).
*   **Population Standard Deviation ($\sigma$ or $s$):**
    *   **Larger population standard deviation** $\implies$ **Larger standard error** $\implies$ **Larger margin of error** $\implies$ **Wider interval**. (More variability in the population leads to less certainty in the estimate).

**Relationship to CO3:** This directly relates to assessing the certainty of parameter estimates. A narrower interval implies higher certainty.

---

### 5. Sample Size Determination

We can pre-determine the sample size needed to achieve a desired margin of error for a given confidence level.

**For Population Mean ($\mu$):**

We want $z_{\alpha/2} \left( \frac{\sigma}{\sqrt{n}} \right) \le MOE$.

Solving for $n$:
$$ \sqrt{n} \ge \frac{z_{\alpha/2} \sigma}{MOE} $$
$$ n \ge \left( \frac{z_{\alpha/2} \sigma}{MOE} \right)^2 $$

*   **Important:** This formula requires knowing $\sigma$. If $\sigma$ is unknown, we can use an estimate from a pilot study or a previous similar experiment. If using the t-distribution, precise sample size calculation is iterative because the t-critical value depends on $n$. However, for reasonably large samples, the z-approximation is often used for planning.

**For Population Proportion ($p$):**

We want $z_{\alpha/2} \sqrt{\frac{p(1-p)}{n}} \le MOE$.

Solving for $n$:
$$ \sqrt{n} \ge \frac{z_{\alpha/2} \sqrt{p(1-p)}}{MOE} $$
$$ n \ge \left( \frac{z_{\alpha/2} \sqrt{p(1-p)}}{MOE} \right)^2 $$

*   **Important:** This formula requires knowing $p$. The most conservative estimate for $p(1-p)$ that maximizes the required sample size is when $p=0.5$, giving $p(1-p) = 0.25$. So, a safe sample size is:
    $$ n \ge \left( \frac{z_{\alpha/2}}{2 \times MOE} \right)^2 $$

**Example (Devore, 9th ed.):**
A physicist wants to estimate the mean thermal conductivity of a new alloy. They want a 95% confidence interval with a margin of error of at most 0.5 W/(m·K). From previous studies, the population standard deviation is estimated to be $\sigma = 4.0$ W/(m·K). How many samples are needed?

*   **Confidence Level:** 95% $\implies z_{0.025} = 1.96$.
*   **Desired MOE:** 0.5 W/(m·K).
*   **Estimated $\sigma$:** 4.0 W/(m·K).

$$ n \ge \left( \frac{1.96 \times 4.0}{0.5} \right)^2 = \left( \frac{7.84}{0.5} \right)^2 = (15.68)^2 \approx 245.86 $$
Therefore, $n = 246$ samples are needed.

---

### 6. Interpretation of Confidence Intervals

**Crucial Point:** "We are [confidence level]% confident that the true population parameter lies within this interval."

**Common Misinterpretations to Avoid:**

*   **Incorrect:** "There is a 95% probability that the true population mean falls between [lower bound] and [upper bound]."
    *   **Why it's wrong:** The true population parameter is a fixed, unknown value. It either is or is not in the interval. The probability applies to the *method* of constructing the interval, not to a specific calculated interval.
*   **Incorrect:** "95% of the sample data falls within the confidence interval."
    *   **Why it's wrong:** The confidence interval is about estimating a *population parameter* (like the mean), not about describing the spread of the *sample data*.

**Correct Interpretation:** If we were to repeat the sampling process many times and construct a confidence interval for each sample, approximately 95% of those intervals would contain the true population parameter.

---

### 7. Connection to Course Outcomes and Textbooks

*   **CO3:** This entire module directly addresses CO3. We are estimating population parameters ($\mu$, $p$) and assessing their certainty using confidence intervals. The z-tests and t-tests mentioned in CO3 are used to construct these intervals.
*   **Devore J. L. (9th ed.):** Chapters 7 and 8 are highly relevant. Chapter 7 introduces sampling distributions and the Central Limit Theorem, foundational for understanding why these intervals work. Chapter 8 is dedicated to confidence intervals for means and proportions, including the use of z and t distributions.
*   **Sastry S. S. (5th ed.):** While Sastry focuses on Numerical Analysis, concepts like approximations and error analysis can be related. However, Devore is the primary resource for the statistical concepts of confidence intervals.
*   **Reference Books:**
    *   **Papoulis & Pillai:** Useful for the theoretical underpinnings of probability and random processes, which inform the sampling distributions used in confidence interval construction.
    *   **Ross S. M. (6th ed.):** Provides further examples and explanations for confidence intervals, often with an engineering perspective.
    *   **Chapra & Canale:** Primarily for numerical methods, but the chapter on statistics and data analysis might touch upon confidence intervals in the context of experimental data analysis.

---

### 8. Practice Questions and Exercises

**Instructions:** For each question, clearly state your assumptions, the formula used, and show your calculations.

1.  **Mean with Known $\sigma$:** A researcher studying air pollution measures the concentration of particulate matter (in $\mu g/m^3$) at various locations. A sample of 30 measurements yields a mean of $\bar{x} = 45.5 \mu g/m^3$. Assume the population standard deviation is $\sigma = 8.2 \mu g/m^3$. Construct a 90% confidence interval for the true mean concentration of particulate matter.

2.  **Mean with Unknown $\sigma$:** A material scientist tests the tensile strength of a new polymer. A sample of 20 specimens has a mean tensile strength of $\bar{x} = 550$ MPa and a sample standard deviation of $s = 35$ MPa. Assume the tensile strength is normally distributed. Construct a 95% confidence interval for the true mean tensile strength.

3.  **Proportion:** A quality control engineer in a semiconductor manufacturing plant examines a batch of 500 microchips. Out of these, 480 are found to be free of defects. Construct a 98% confidence interval for the true proportion of defect-free microchips in the production process.

4.  **Sample Size for Mean:** A civil engineer wants to estimate the average load-bearing capacity of a new type of concrete beam. They want to be 99% confident that the margin of error is no more than 500 kg. Based on previous data, the population standard deviation is estimated to be 5000 kg. What sample size is required?

5.  **Sample Size for Proportion:** A pharmacologist wants to estimate the proportion of patients who experience a specific side effect from a new drug. They want a 90% confidence interval with a margin of error of at most 0.03. How many patients should be included in the study?

---

### 9. Answers to Practice Questions

1.  **Mean with Known $\sigma$:**
    *   Confidence Level: 90% $\implies \alpha = 0.10 \implies \alpha/2 = 0.05$.
    *   Critical Value ($z_{0.05}$): $1.645$.
    *   $\bar{x} = 45.5$, $\sigma = 8.2$, $n = 30$.
    *   SE = $\frac{8.2}{\sqrt{30}} \approx 1.497$.
    *   MOE = $1.645 \times 1.497 \approx 2.462$.
    *   CI = $45.5 \pm 2.462 \implies (43.038, 47.962) \mu g/m^3$.
    *   **Answer:** We are 90% confident that the true mean concentration of particulate matter is between $43.04$ and $47.96 \mu g/m^3$.

2.  **Mean with Unknown $\sigma$:**
    *   Confidence Level: 95% $\implies \alpha = 0.05 \implies \alpha/2 = 0.025$.
    *   $n = 20 \implies df = 19$.
    *   Critical Value ($t_{0.025, 19}$): $2.093$ (from t-table).
    *   $\bar{x} = 550$, $s = 35$, $n = 20$.
    *   SE = $\frac{35}{\sqrt{20}} \approx 7.826$.
    *   MOE = $2.093 \times 7.826 \approx 16.377$.
    *   CI = $550 \pm 16.377 \implies (533.623, 566.377)$ MPa.
    *   **Answer:** We are 95% confident that the true mean tensile strength is between $533.62$ and $566.38$ MPa.

3.  **Proportion:**
    *   Confidence Level: 98% $\implies \alpha = 0.02 \implies \alpha/2 = 0.01$.
    *   Critical Value ($z_{0.01}$): $2.326$.
    *   $x = 480$, $n = 500$.
    *   $\hat{p} = \frac{480}{500} = 0.96$.
    *   Check assumptions: $n\hat{p} = 500 \times 0.96 = 480 \ge 10$, $n(1-\hat{p}) = 500 \times 0.04 = 20 \ge 10$. Met.
    *   SE = $\sqrt{\frac{0.96(1-0.96)}{500}} = \sqrt{\frac{0.96 \times 0.04}{500}} = \sqrt{\frac{0.0384}{500}} = \sqrt{0.0000768} \approx 0.00876$.
    *   MOE = $2.326 \times 0.00876 \approx 0.02038$.
    *   CI = $0.96 \pm 0.02038 \implies (0.93962, 0.98038)$.
    *   **Answer:** We are 98% confident that the true proportion of defect-free microchips is between $0.9396$ and $0.9804$.

4.  **Sample Size for Mean:**
    *   Confidence Level: 99% $\implies \alpha = 0.01 \implies \alpha/2 = 0.005$.
    *   Critical Value ($z_{0.005}$): $2.576$.
    *   Desired MOE = 500 kg.
    *   Estimated $\sigma = 5000$ kg.
    *   $n \ge \left( \frac{2.576 \times 5000}{500} \right)^2 = \left( \frac{12880}{500} \right)^2 = (25.76)^2 \approx 663.5776$.
    *   **Answer:** $n = 664$ specimens are required.

5.  **Sample Size for Proportion:**
    *   Confidence Level: 90% $\implies \alpha = 0.10 \implies \alpha/2 = 0.05$.
    *   Critical Value ($z_{0.05}$): $1.645$.
    *   Desired MOE = 0.03.
    *   Use conservative estimate $p=0.5$: $p(1-p) = 0.25$.
    *   $n \ge \left( \frac{1.645 \sqrt{0.25}}{0.03} \right)^2 = \left( \frac{1.645 \times 0.5}{0.03} \right)^2 = \left( \frac{0.8225}{0.03} \right)^2 \approx (27.4167)^2 \approx 751.65$.
    *   **Answer:** $n = 752$ patients should be included.

---

### 10. Important Points to Remember

*   **Confidence Interval = Point Estimate ± Margin of Error**
*   **Margin of Error = Critical Value × Standard Error**
*   **Know when to use z vs. t:** Use z when $\sigma$ is known (or for proportions with large samples). Use t when $\sigma$ is unknown and estimated by $s$, especially for small sample sizes. Remember degrees of freedom for t ($n-1$).
*   **Central Limit Theorem (CLT):** For large sample sizes ($n \ge 30$), the sampling distribution of the sample mean is approximately normal, even if the population distribution is not. This justifies using z or t intervals for larger samples.
*   **Interpretation is Key:** State your confidence level and the range of values for the parameter. Avoid common misinterpretations.
*   **Sample Size Matters:** Larger sample sizes lead to narrower, more precise confidence intervals.
*   **Variability Increases Width:** Higher population variability (larger $\sigma$ or $s$) leads to wider intervals.
*   **Confidence Level Increases Width:** Higher confidence levels require wider intervals.

---

This comprehensive study guide covers the core concepts of confidence intervals, their construction, interpretation, and the factors influencing their width, directly aligning with CO3 and utilizing the provided textbook references.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
