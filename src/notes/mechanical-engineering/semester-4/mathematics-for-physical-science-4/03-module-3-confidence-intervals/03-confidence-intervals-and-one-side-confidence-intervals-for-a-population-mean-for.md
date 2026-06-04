---
title: "Confidence Intervals and One-side confidence intervals for a Population Mean for large and small samples (normal distribution and  t-distribution)"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462eca"
status: "completed"
scrapedAt: "2026-05-20T17:54:46.797Z"
---
# Mathematics for Physical Science – 4: Module 3 - Confidence Intervals

This module focuses on estimating unknown population parameters using confidence intervals, specifically for the population mean. We will explore how to construct and interpret these intervals for both large and small sample sizes, considering scenarios where the population standard deviation is known or unknown. We will also delve into one-sided confidence intervals.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the concept of a confidence interval for a population mean.
*   Construct and interpret confidence intervals for a population mean when the population standard deviation is known, using the z-distribution (for large samples).
*   Construct and interpret confidence intervals for a population mean when the population standard deviation is unknown, using the t-distribution (for small samples).
*   Understand the relationship between sample size, confidence level, and the width of the confidence interval.
*   Understand and construct one-sided confidence intervals for a population mean.
*   Relate the concepts of confidence intervals to the estimation of population parameters, as outlined in CO3.

## Key Concepts and Definitions

### 1. Point Estimation vs. Interval Estimation

*   **Point Estimate:** A single value that is our "best guess" for an unknown population parameter. For example, the sample mean ($\bar{x}$) is a point estimate for the population mean ($\mu$).
*   **Interval Estimate:** A range of values that is likely to contain the unknown population parameter. This provides a measure of the uncertainty associated with the point estimate.

### 2. Confidence Interval (CI)

A confidence interval for a population parameter is an interval calculated from sample data that is likely to contain the true value of the parameter.

### 3. Confidence Level

The confidence level is the probability that the method used to construct the interval will produce an interval that contains the true population parameter. Common confidence levels are 90%, 95%, and 99%.

*   **Interpretation:** A 95% confidence interval means that if we were to repeat the sampling process many times and construct a confidence interval each time, approximately 95% of those intervals would contain the true population mean. It does *not* mean there is a 95% probability that the true mean falls within *this specific* calculated interval.

### 4. Margin of Error (ME)

The margin of error is half the width of the confidence interval. It represents the maximum likely difference between the point estimate and the true population parameter.

$$ \text{Confidence Interval} = \text{Point Estimate} \pm \text{Margin of Error} $$

### 5. Factors Affecting the Width of a Confidence Interval

*   **Confidence Level:** Higher confidence levels lead to wider intervals. To be more certain, we need a larger range.
*   **Sample Size (n):** Larger sample sizes lead to narrower intervals. More data provides a more precise estimate.
*   **Population Standard Deviation ($\sigma$ or $s$):** A larger standard deviation leads to wider intervals. Greater variability in the population necessitates a wider range.

## Confidence Intervals for the Population Mean ($\mu$)

We will consider two main scenarios:

*   **Scenario 1: Population standard deviation ($\sigma$) is known.**
*   **Scenario 2: Population standard deviation ($\sigma$) is unknown.**

### Scenario 1: Population Standard Deviation ($\sigma$) is Known

This scenario is less common in practice but is fundamental for understanding confidence intervals. It applies when we have historical data or a strong theoretical basis for knowing $\sigma$.

#### For Large Samples (n > 30)

When the sample size is large, the Central Limit Theorem (CLT) states that the sampling distribution of the sample mean ($\bar{x}$) is approximately normally distributed, regardless of the population's distribution.

*   **Formula:**
    The confidence interval for $\mu$ when $\sigma$ is known is:
    $$ \bar{x} \pm z_{\alpha/2} \frac{\sigma}{\sqrt{n}} $$
    Where:
    *   $\bar{x}$ is the sample mean.
    *   $\sigma$ is the population standard deviation.
    *   $n$ is the sample size.
    *   $z_{\alpha/2}$ is the critical z-value from the standard normal distribution corresponding to the desired confidence level. For a $(1-\alpha) \times 100\%$ confidence level, we look for the z-value that leaves $\alpha/2$ in each tail.

*   **Finding $z_{\alpha/2}$:**
    *   For 90% CI: $1-\alpha = 0.90 \implies \alpha = 0.10 \implies \alpha/2 = 0.05$. $z_{0.05} \approx 1.645$.
    *   For 95% CI: $1-\alpha = 0.95 \implies \alpha = 0.05 \implies \alpha/2 = 0.025$. $z_{0.025} \approx 1.96$.
    *   For 99% CI: $1-\alpha = 0.99 \implies \alpha = 0.01 \implies \alpha/2 = 0.005$. $z_{0.005} \approx 2.576$.

*   **Margin of Error (ME):** $ME = z_{\alpha/2} \frac{\sigma}{\sqrt{n}}$

*   **Example:**
    A quality control engineer wants to estimate the average weight of a new type of metal rod. The population standard deviation is known to be $\sigma = 0.5$ grams. A random sample of 100 rods yielded a sample mean weight of $\bar{x} = 15.2$ grams. Construct a 95% confidence interval for the population mean weight.

    *   $\bar{x} = 15.2$
    *   $\sigma = 0.5$
    *   $n = 100$
    *   Confidence Level = 95%, so $z_{\alpha/2} = 1.96$.

    *   $ME = 1.96 \times \frac{0.5}{\sqrt{100}} = 1.96 \times \frac{0.5}{10} = 1.96 \times 0.05 = 0.098$

    *   Confidence Interval: $15.2 \pm 0.098 = (15.102, 15.298)$ grams.

    *   **Interpretation:** We are 95% confident that the true average weight of the metal rods is between 15.102 grams and 15.298 grams.

#### For Small Samples (n <= 30)

If $\sigma$ is known and the population is normally distributed, we can still use the z-distribution. However, if $\sigma$ is known and the population is *not* normally distributed, and the sample size is small, we cannot reliably construct a confidence interval for the mean using the z-distribution (CLT doesn't apply effectively for small samples without normality). In such cases, non-parametric methods might be considered, but for this course, we'll focus on situations where the z-distribution is applicable when $\sigma$ is known.

*   **Important Note:** For small samples, it's more likely that $\sigma$ is *unknown*, leading to the use of the t-distribution.

### Scenario 2: Population Standard Deviation ($\sigma$) is Unknown

This is the more common scenario in real-world applications. When $\sigma$ is unknown, we use the sample standard deviation ($s$) as an estimate for $\sigma$.

#### For Large Samples (n > 30)

Even if $\sigma$ is unknown, for large sample sizes, the sample standard deviation ($s$) is a good estimator of $\sigma$. The CLT ensures the sampling distribution of $\bar{x}$ is approximately normal. We can still use the z-distribution as an approximation.

*   **Formula:**
    The confidence interval for $\mu$ when $\sigma$ is unknown and $n$ is large is:
    $$ \bar{x} \pm z_{\alpha/2} \frac{s}{\sqrt{n}} $$
    Where:
    *   $\bar{x}$ is the sample mean.
    *   $s$ is the sample standard deviation.
    *   $n$ is the sample size.
    *   $z_{\alpha/2}$ is the critical z-value.

*   **Margin of Error (ME):** $ME = z_{\alpha/2} \frac{s}{\sqrt{n}}$

*   **Example:**
    A researcher studying the behavior of electrons in a semiconductor alloy collects data on the velocity of a sample of 50 electrons. The sample mean velocity is $\bar{x} = 1.2 \times 10^5$ m/s, and the sample standard deviation is $s = 0.3 \times 10^5$ m/s. Construct a 90% confidence interval for the population mean velocity.

    *   $\bar{x} = 1.2 \times 10^5$ m/s
    *   $s = 0.3 \times 10^5$ m/s
    *   $n = 50$
    *   Confidence Level = 90%, so $z_{\alpha/2} = 1.645$.

    *   $ME = 1.645 \times \frac{0.3 \times 10^5}{\sqrt{50}} \approx 1.645 \times \frac{0.3 \times 10^5}{7.071} \approx 1.645 \times 0.04243 \times 10^5 \approx 0.0698 \times 10^5$

    *   Confidence Interval: $(1.2 \pm 0.0698) \times 10^5 = (1.1302 \times 10^5, 1.2698 \times 10^5)$ m/s.

    *   **Interpretation:** We are 90% confident that the true average velocity of the electrons is between $1.1302 \times 10^5$ m/s and $1.2698 \times 10^5$ m/s.

#### For Small Samples (n <= 30)

When $\sigma$ is unknown and the sample size is small, we use the **t-distribution** (also known as Student's t-distribution). This distribution accounts for the extra uncertainty introduced by estimating $\sigma$ with $s$.

*   **The t-Distribution:**
    *   It is symmetric around zero, similar to the standard normal distribution.
    *   It has heavier tails than the standard normal distribution, meaning there is a higher probability of observing values far from the mean. This is because $s$ is an estimate and can vary from sample to sample.
    *   The shape of the t-distribution depends on the **degrees of freedom (df)**, which are usually $n-1$ for inference about a population mean.
    *   As the degrees of freedom increase, the t-distribution approaches the standard normal distribution.

*   **Formula:**
    The confidence interval for $\mu$ when $\sigma$ is unknown and $n$ is small (and the population is approximately normally distributed) is:
    $$ \bar{x} \pm t_{\alpha/2, df} \frac{s}{\sqrt{n}} $$
    Where:
    *   $\bar{x}$ is the sample mean.
    *   $s$ is the sample standard deviation.
    *   $n$ is the sample size.
    *   $df = n-1$ are the degrees of freedom.
    *   $t_{\alpha/2, df}$ is the critical t-value from the t-distribution with $df$ degrees of freedom, such that the area in the upper tail is $\alpha/2$.

*   **Finding $t_{\alpha/2, df}$:**
    You will need a t-table or statistical software to find these values. The table typically has rows for degrees of freedom and columns for tail probabilities (or confidence levels).

    *   **Example (using a t-table):**
        For a 95% CI and $n=20$, $df = 19$. The column for $0.025$ (for $\alpha/2$ when $1-\alpha=0.95$) and row for $df=19$ gives $t_{0.025, 19} \approx 2.093$.

*   **Margin of Error (ME):** $ME = t_{\alpha/2, df} \frac{s}{\sqrt{n}}$

*   **Example:**
    A physicist measures the decay rate of a radioactive isotope from 15 independent measurements. The sample mean decay rate is $\bar{x} = 155.3$ decays per minute, and the sample standard deviation is $s = 8.7$ decays per minute. Construct a 99% confidence interval for the true mean decay rate. Assume the decay rates are approximately normally distributed.

    *   $\bar{x} = 155.3$
    *   $s = 8.7$
    *   $n = 15$
    *   $df = n-1 = 14$
    *   Confidence Level = 99%, so $\alpha = 0.01$, $\alpha/2 = 0.005$.
    *   From a t-table, $t_{0.005, 14} \approx 2.977$.

    *   $ME = 2.977 \times \frac{8.7}{\sqrt{15}} \approx 2.977 \times \frac{8.7}{3.873} \approx 2.977 \times 2.246 \approx 6.687$

    *   Confidence Interval: $155.3 \pm 6.687 = (148.613, 161.987)$ decays per minute.

    *   **Interpretation:** We are 99% confident that the true mean decay rate of the radioactive isotope is between 148.613 and 161.987 decays per minute.

*   **Reference from Textbooks:**
    *   **Devore (9th ed.):** Chapter 8 (Hypothesis Testing and Confidence Intervals) discusses the t-distribution extensively in the context of confidence intervals for the mean when $\sigma$ is unknown. Section 8.3 specifically covers confidence intervals for $\mu$ when $\sigma$ is unknown.
    *   **Sastry (5th ed.):** While Sastry's book focuses more on numerical analysis, Chapter 13 ("Interpolation") might touch upon how functions (like the CDF of distributions) are approximated, which is indirectly related to how t-tables are generated. However, direct application of t-distribution for confidence intervals is more likely in a statistics-focused text like Devore.

## Calculating Sample Size for a Desired Margin of Error

We can determine the required sample size to achieve a specific margin of error for a given confidence level.

*   **When $\sigma$ is known:**
    $$ ME = z_{\alpha/2} \frac{\sigma}{\sqrt{n}} $$
    Rearranging for $n$:
    $$ \sqrt{n} = \frac{z_{\alpha/2} \sigma}{ME} $$
    $$ n = \left( \frac{z_{\alpha/2} \sigma}{ME} \right)^2 $$
    We always round *up* to the nearest whole number to ensure the margin of error is met or exceeded.

*   **When $\sigma$ is unknown:**
    We use an estimate for $\sigma$. Often, a preliminary sample is taken to estimate $s$, or prior knowledge is used. If no estimate is available, a conservative estimate of $\sigma$ might be used, or the problem statement will provide a value.
    $$ n = \left( \frac{z_{\alpha/2} \times (\text{estimated } \sigma)}{ME} \right)^2 $$
    (Note: When $n$ is small and $\sigma$ is unknown, and we need a specific ME, the calculation becomes more complex as $t_{\alpha/2, n-1}$ depends on $n$. Usually, for sample size determination, we rely on the z-distribution approximation, assuming the sample will be large enough for it to be valid.)

*   **Example:**
    An engineer wants to estimate the average stress experienced by a new material with a margin of error of at most 5 psi and a 95% confidence level. A pilot study suggests the standard deviation of stress is approximately 30 psi. What sample size is needed?

    *   $ME = 5$ psi
    *   Confidence Level = 95%, so $z_{\alpha/2} = 1.96$.
    *   Estimated $\sigma = 30$ psi.

    *   $n = \left( \frac{1.96 \times 30}{5} \right)^2 = \left( \frac{58.8}{5} \right)^2 = (11.76)^2 \approx 138.3$

    *   We need a sample size of at least 139.

## One-Sided Confidence Intervals

Sometimes, we are only interested in an upper or lower bound for the population mean. This is common when we want to be sure that a process is meeting a certain minimum standard or not exceeding a maximum limit.

### Upper Confidence Bound

An upper confidence bound provides a value that we are confident the population mean is less than or equal to.

*   **Formula for $(1-\alpha) \times 100\%$ upper confidence bound:**
    *   **When $\sigma$ is known:**
        $$ \mu \le \bar{x} + z_{\alpha} \frac{\sigma}{\sqrt{n}} $$
        (Here, $z_{\alpha}$ leaves $\alpha$ in the upper tail.)
    *   **When $\sigma$ is unknown (small sample, normal population):**
        $$ \mu \le \bar{x} + t_{\alpha, df} \frac{s}{\sqrt{n}} $$
        (Here, $t_{\alpha, df}$ leaves $\alpha$ in the upper tail.)

### Lower Confidence Bound

A lower confidence bound provides a value that we are confident the population mean is greater than or equal to.

*   **Formula for $(1-\alpha) \times 100\%$ lower confidence bound:**
    *   **When $\sigma$ is known:**
        $$ \mu \ge \bar{x} - z_{\alpha} \frac{\sigma}{\sqrt{n}} $$
        (Here, $z_{\alpha}$ leaves $\alpha$ in the upper tail, meaning the lower tail has $1-\alpha$, and we are looking for the boundary at $1-\alpha$ from the left, which is the same z-value as for $\alpha$ in the upper tail.)
    *   **When $\sigma$ is unknown (small sample, normal population):**
        $$ \mu \ge \bar{x} - t_{\alpha, df} \frac{s}{\sqrt{n}} $$
        (Here, $t_{\alpha, df}$ leaves $\alpha$ in the upper tail.)

*   **Important Note on $z_{\alpha}$ and $t_{\alpha}$:**
    For one-sided intervals, we use $\alpha$ directly (not $\alpha/2$) because the entire confidence (e.g., 95%) is placed in one tail.
    *   For a 95% upper confidence bound, we look for $z_{0.05} \approx 1.645$.
    *   For a 95% lower confidence bound, we also look for $z_{0.05} \approx 1.645$ (as the critical value from the left tail would be $-1.645$, but in the formula we subtract it).

*   **Example (One-Sided):**
    A research scientist is testing a new fertilizer. They want to be 95% confident that the average increase in crop yield is at least a certain amount. A sample of 25 plots showed an average increase of $\bar{x} = 7.5$ kg/hectare with a sample standard deviation of $s = 2.2$ kg/hectare.

    We want to find a 95% lower confidence bound for the mean increase in yield.

    *   $\bar{x} = 7.5$
    *   $s = 2.2$
    *   $n = 25$
    *   $df = n-1 = 24$
    *   Confidence Level = 95% (lower bound), so $\alpha = 0.05$.
    *   From a t-table, $t_{0.05, 24} \approx 1.711$.

    *   Lower Bound: $\bar{x} - t_{0.05, 24} \frac{s}{\sqrt{n}} = 7.5 - 1.711 \times \frac{2.2}{\sqrt{25}}$
    *   $= 7.5 - 1.711 \times \frac{2.2}{5} = 7.5 - 1.711 \times 0.44 = 7.5 - 0.75284 \approx 6.747$

    *   **Interpretation:** We are 95% confident that the true mean increase in crop yield is at least 6.747 kg/hectare.

*   **Reference from Textbooks:**
    *   **Devore (9th ed.):** Section 8.3.4 discusses one-sided confidence intervals for the mean.

## Important Points to Remember

*   **Normality Assumption:** For small sample sizes ($n \le 30$) when $\sigma$ is unknown, the t-distribution is used, but it relies on the assumption that the underlying population is approximately normally distributed. This is a crucial assumption for the validity of the interval.
*   **CLT for Large Samples:** For large samples ($n > 30$), the Central Limit Theorem allows us to use the z-distribution (or approximate with it when $\sigma$ is unknown) even if the population is not normally distributed.
*   **$\sigma$ Known vs. Unknown:** The distinction between knowing and not knowing the population standard deviation dictates whether you use the z-distribution or the t-distribution.
*   **Degrees of Freedom:** Always remember to calculate the degrees of freedom correctly for the t-distribution ($df = n-1$).
*   **Interpretation of Confidence:** The confidence level applies to the *method* of constructing the interval, not to a specific calculated interval.
*   **Sample Size:** Increasing the sample size or decreasing the confidence level will narrow the confidence interval, leading to a more precise estimate. Increasing the confidence level or decreasing the sample size will widen the interval.
*   **One-Sided vs. Two-Sided:** Choose the appropriate interval based on the research question. If you are interested in an upper or lower bound, use a one-sided interval. For estimating a mean within a range, use a two-sided interval.

## Practice Questions and Exercises

**Question 1:**
A physicist measures the kinetic energy of a particle in eV. A sample of 40 measurements yields a sample mean of $\bar{x} = 150.5$ eV and a sample standard deviation of $s = 10.2$ eV. Construct a 90% confidence interval for the population mean kinetic energy.

**Question 2:**
A metallurgist wants to estimate the melting point of a new alloy. A sample of 15 specimens is tested, and the following melting points are recorded: 850, 862, 855, 870, 848, 865, 858, 872, 852, 860, 845, 868, 856, 875, 853 (°C). Construct a 95% confidence interval for the mean melting point. Assume the melting points are approximately normally distributed.

**Question 3:**
A civil engineer is designing a new bridge and needs to estimate the maximum load capacity of a specific type of steel beam. They want to be 99% confident that the average load capacity is at least 50 tons. A sample of 10 beams provided a sample mean of 53.5 tons and a sample standard deviation of 3.0 tons. Calculate a 99% lower confidence bound for the mean load capacity.

**Question 4:**
What sample size is required to estimate the mean breaking strength of a new polymer with a margin of error of 2 psi and a 98% confidence level? Assume the population standard deviation is known to be 15 psi.

---

### Answers to Practice Questions

**Answer 1:**
*   $\bar{x} = 150.5$ eV
*   $s = 10.2$ eV
*   $n = 40$ (Since $n > 30$, we can use the z-distribution)
*   Confidence Level = 90%, so $z_{\alpha/2} = 1.645$.
*   $ME = 1.645 \times \frac{10.2}{\sqrt{40}} \approx 1.645 \times \frac{10.2}{6.325} \approx 1.645 \times 1.6125 \approx 2.653$
*   Confidence Interval: $150.5 \pm 2.653 = (147.847, 153.153)$ eV.

**Answer 2:**
*   First, calculate the sample mean and sample standard deviation:
    *   Sample data: 850, 862, 855, 870, 848, 865, 858, 872, 852, 860, 845, 868, 856, 875, 853
    *   $\bar{x} = \frac{\sum x_i}{n} = \frac{12828}{15} = 855.2$ °C
    *   $s = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n-1}} \approx 9.67$ °C
*   $n = 15$ (Since $n \le 30$ and $\sigma$ is unknown, use t-distribution)
*   $df = n-1 = 14$.
*   Confidence Level = 95%, so $\alpha/2 = 0.025$.
*   From a t-table, $t_{0.025, 14} \approx 2.145$.
*   $ME = 2.145 \times \frac{9.67}{\sqrt{15}} \approx 2.145 \times \frac{9.67}{3.873} \approx 2.145 \times 2.497 \approx 5.356$
*   Confidence Interval: $855.2 \pm 5.356 = (849.844, 860.556)$ °C.

**Answer 3:**
*   $\bar{x} = 53.5$ tons
*   $s = 3.0$ tons
*   $n = 10$
*   $df = n-1 = 9$.
*   Confidence Level = 99% (lower bound), so $\alpha = 0.01$.
*   From a t-table, $t_{0.01, 9} \approx 2.821$.
*   Lower Bound: $\bar{x} - t_{0.01, 9} \frac{s}{\sqrt{n}} = 53.5 - 2.821 \times \frac{3.0}{\sqrt{10}}$
*   $= 53.5 - 2.821 \times \frac{3.0}{3.162} \approx 53.5 - 2.821 \times 0.949 \approx 53.5 - 2.677 \approx 50.823$ tons.
*   We are 99% confident that the true mean load capacity is at least 50.823 tons.

**Answer 4:**
*   $ME = 2$ psi
*   Confidence Level = 98%, so $1-\alpha = 0.98 \implies \alpha = 0.02 \implies \alpha/2 = 0.01$.
*   $z_{0.01} \approx 2.326$.
*   $\sigma = 15$ psi.
*   $n = \left( \frac{z_{0.01} \sigma}{ME} \right)^2 = \left( \frac{2.326 \times 15}{2} \right)^2 = \left( \frac{34.89}{2} \right)^2 = (17.445)^2 \approx 304.33$
*   We need a sample size of at least 305.

---
This module provides the foundation for estimating population parameters, a crucial skill in physical sciences for drawing conclusions from experimental data. Remember to always check your assumptions, especially the normality assumption for small samples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
