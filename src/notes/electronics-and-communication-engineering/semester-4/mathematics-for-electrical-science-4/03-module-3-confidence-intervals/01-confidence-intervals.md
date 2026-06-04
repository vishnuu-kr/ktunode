---
title: "Confidence Intervals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4ca"
status: "completed"
scrapedAt: "2026-05-23T17:50:47.137Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 3: Confidence Intervals

### Topic: Confidence Intervals

**Learning Outcomes:**

*   Understand the concept of a confidence interval and its purpose.
*   Construct and interpret confidence intervals for population means (both known and unknown population variance).
*   Construct and interpret confidence intervals for population proportions.
*   Understand the factors that affect the width of a confidence interval.
*   Relate confidence intervals to hypothesis testing.

**Course Outcomes Addressed:**

*   **CO3:** Estimate population parameters, assess their certainty with confidence intervals, and test hypotheses about population means and proportions using z-tests and the one-sample t-test. (Knowledge Level: K3)

**Key Concepts and Definitions:**

*   **Population Parameter:** A numerical characteristic of a population (e.g., population mean ($\mu$), population proportion ($p$), population standard deviation ($\sigma$)).
*   **Sample Statistic:** A numerical characteristic of a sample, used to estimate a population parameter (e.g., sample mean ($\bar{x}$), sample proportion ($\hat{p}$), sample standard deviation ($s$)).
*   **Point Estimate:** A single value used to estimate an unknown population parameter.
*   **Confidence Interval (CI):** An interval of values, calculated from sample data, that is likely to contain the unknown population parameter with a certain level of confidence.
*   **Confidence Level:** The probability that a confidence interval constructed from random samples will contain the true population parameter. Commonly expressed as a percentage (e.g., 90%, 95%, 99%).
*   **Margin of Error:** Half the width of the confidence interval. It represents the maximum likely difference between the sample statistic and the true population parameter.
*   **Critical Value:** A value from a probability distribution (like the z-distribution or t-distribution) that corresponds to the desired confidence level. It determines the boundaries of the confidence interval.
*   **Standard Error:** The standard deviation of the sampling distribution of a statistic. For the sample mean, it's $\sigma/\sqrt{n}$ (if $\sigma$ is known) or $s/\sqrt{n}$ (if $\sigma$ is unknown).
*   **Z-distribution:** A standard normal distribution with a mean of 0 and a standard deviation of 1. Used for confidence intervals when the population standard deviation ($\sigma$) is known or when the sample size is large ($n \geq 30$).
*   **t-distribution (Student's t-distribution):** A probability distribution that is similar to the normal distribution but has heavier tails. It is used when the population standard deviation ($\sigma$) is unknown and estimated by the sample standard deviation ($s$), especially for smaller sample sizes. The shape of the t-distribution depends on the **degrees of freedom (df)**, which is typically $n-1$ for a single sample.

---

### 1. Confidence Intervals for Population Mean ($\mu$)

This section draws heavily from **Devore, J. L. (2016)** Chapters 6 and **Veerarajan, T. (2008)** Chapters 9 and 10.

#### 1.1 Case 1: Population Standard Deviation ($\sigma$) is Known

**Concept:** When the population standard deviation is known (or can be assumed known due to large sample size or prior knowledge) and the population is normally distributed or the sample size is large ($n \geq 30$), we can use the z-distribution to construct a confidence interval for the population mean $\mu$.

**Formula:**

A $(1-\alpha) \times 100\%$ confidence interval for $\mu$ is given by:

$$ \bar{x} \pm z_{\alpha/2} \left( \frac{\sigma}{\sqrt{n}} \right) $$

Where:
*   $\bar{x}$ is the sample mean.
*   $\sigma$ is the population standard deviation.
*   $n$ is the sample size.
*   $z_{\alpha/2}$ is the critical z-value such that the area to its right under the standard normal curve is $\alpha/2$. This means the area between $-z_{\alpha/2}$ and $z_{\alpha/2}$ is $1-\alpha$.

**Steps to Construct:**

1.  **Determine the confidence level** and find the corresponding $\alpha$ value (e.g., for 95% confidence, $1-\alpha = 0.95$, so $\alpha = 0.05$).
2.  **Find the critical value $z_{\alpha/2}$**. For common confidence levels:
    *   90% CI: $\alpha = 0.10$, $\alpha/2 = 0.05$, $z_{0.05} \approx 1.645$
    *   95% CI: $\alpha = 0.05$, $\alpha/2 = 0.025$, $z_{0.025} \approx 1.96$
    *   99% CI: $\alpha = 0.01$, $\alpha/2 = 0.005$, $z_{0.005} \approx 2.576$
3.  **Calculate the standard error of the mean (SEM):** $SE = \frac{\sigma}{\sqrt{n}}$.
4.  **Calculate the margin of error (ME):** $ME = z_{\alpha/2} \times SE$.
5.  **Construct the interval:** Lower bound = $\bar{x} - ME$, Upper bound = $\bar{x} + ME$.

**Interpretation:** "We are $(1-\alpha) \times 100\%$ confident that the true population mean $\mu$ lies between the lower and upper bounds of the interval."

**Example (Devore, 2016, Chapter 6):**
Suppose a manufacturer of electronic components claims that the average lifetime of a certain type of capacitor is 1000 hours. A sample of 100 capacitors is taken, and the sample mean lifetime is $\bar{x} = 985$ hours. The population standard deviation is known to be $\sigma = 50$ hours. Construct a 95% confidence interval for the true average lifetime.

*   Confidence level = 95% $\implies \alpha = 0.05 \implies z_{0.025} \approx 1.96$
*   $n = 100$, $\sigma = 50$, $\bar{x} = 985$
*   $SE = \frac{50}{\sqrt{100}} = \frac{50}{10} = 5$ hours
*   $ME = 1.96 \times 5 = 9.8$ hours
*   CI: $985 \pm 9.8$ hours $\implies (975.2, 994.8)$ hours

**Interpretation:** We are 95% confident that the true average lifetime of this type of capacitor is between 975.2 and 994.8 hours.

**Important Point:** This method is applicable when $\sigma$ is known or $n$ is large.

---

#### 1.2 Case 2: Population Standard Deviation ($\sigma$) is Unknown

**Concept:** When the population standard deviation $\sigma$ is unknown, it must be estimated from the sample using the sample standard deviation, $s$. In this case, we use the t-distribution. This is a very common scenario in real-world applications. This aligns with **CO3** for the one-sample t-test.

**Formula:**

A $(1-\alpha) \times 100\%$ confidence interval for $\mu$ is given by:

$$ \bar{x} \pm t_{\alpha/2, n-1} \left( \frac{s}{\sqrt{n}} \right) $$

Where:
*   $\bar{x}$ is the sample mean.
*   $s$ is the sample standard deviation.
*   $n$ is the sample size.
*   $t_{\alpha/2, n-1}$ is the critical t-value from the t-distribution with $n-1$ degrees of freedom, such that the area to its right is $\alpha/2$.

**Steps to Construct:**

1.  **Calculate the sample mean ($\bar{x}$) and sample standard deviation ($s$)** from the data.
2.  **Determine the confidence level** and find the corresponding $\alpha$ value.
3.  **Determine the degrees of freedom (df):** $df = n-1$.
4.  **Find the critical t-value $t_{\alpha/2, n-1}$** using a t-table or statistical software.
5.  **Calculate the standard error of the mean (SEM):** $SE = \frac{s}{\sqrt{n}}$.
6.  **Calculate the margin of error (ME):** $ME = t_{\alpha/2, n-1} \times SE$.
7.  **Construct the interval:** Lower bound = $\bar{x} - ME$, Upper bound = $\bar{x} + ME$.

**Interpretation:** Similar to Case 1, "We are $(1-\alpha) \times 100\%$ confident that the true population mean $\mu$ lies between the lower and upper bounds of the interval."

**Example (Devore, 2016, Chapter 7):**
A new process for manufacturing circuit boards is being tested. A sample of 20 circuit boards produced by this process has an average resistance of 0.52 ohms with a sample standard deviation of 0.03 ohms. Construct a 99% confidence interval for the true average resistance.

*   $n = 20$, $\bar{x} = 0.52$ ohms, $s = 0.03$ ohms
*   Confidence level = 99% $\implies \alpha = 0.01 \implies \alpha/2 = 0.005$
*   $df = n-1 = 20-1 = 19$
*   From a t-table, $t_{0.005, 19} \approx 2.861$
*   $SE = \frac{0.03}{\sqrt{20}} \approx \frac{0.03}{4.472} \approx 0.0067$ ohms
*   $ME = 2.861 \times 0.0067 \approx 0.0192$ ohms
*   CI: $0.52 \pm 0.0192$ ohms $\implies (0.5008, 0.5392)$ ohms

**Interpretation:** We are 99% confident that the true average resistance of circuit boards produced by this new process is between 0.5008 and 0.5392 ohms.

**Important Point:** The t-distribution is wider than the z-distribution, resulting in a wider confidence interval when $\sigma$ is unknown, reflecting the increased uncertainty from estimating $\sigma$. As $n$ gets larger, the t-distribution approaches the z-distribution.

---

### 2. Confidence Intervals for Population Proportion ($p$)

This section draws heavily from **Devore, J. L. (2016)** Chapter 6 and **Veerarajan, T. (2008)** Chapter 9. This aligns with **CO3** for proportions.

**Concept:** To estimate the proportion of a population that possesses a certain characteristic. We use the sample proportion ($\hat{p}$) to estimate the population proportion ($p$). For large sample sizes, the sampling distribution of $\hat{p}$ can be approximated by a normal distribution.

**Formula (Large Sample Approximation):**

A $(1-\alpha) \times 100\%$ confidence interval for $p$ is given by:

$$ \hat{p} \pm z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}} $$

Where:
*   $\hat{p} = x/n$ is the sample proportion, where $x$ is the number of successes in the sample.
*   $n$ is the sample size.
*   $z_{\alpha/2}$ is the critical z-value for the desired confidence level.

**Conditions for Use:** The normal approximation to the binomial distribution is valid if $n\hat{p} \geq 10$ and $n(1-\hat{p}) \geq 10$.

**Steps to Construct:**

1.  **Calculate the sample proportion ($\hat{p}$)**: $\hat{p} = x/n$.
2.  **Check the conditions** for using the normal approximation. If they are not met, alternative methods (like the Wilson score interval) are needed, but for this course, we focus on the large sample approximation.
3.  **Determine the confidence level** and find the corresponding $\alpha$ value and $z_{\alpha/2}$.
4.  **Calculate the standard error of the proportion (SEP):** $SE = \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$.
5.  **Calculate the margin of error (ME):** $ME = z_{\alpha/2} \times SE$.
6.  **Construct the interval:** Lower bound = $\hat{p} - ME$, Upper bound = $\hat{p} + ME$.

**Interpretation:** "We are $(1-\alpha) \times 100\%$ confident that the true proportion of the population with the characteristic of interest lies between the lower and upper bounds of the interval."

**Example (Devore, 2016, Chapter 6):**
A survey of 400 randomly selected computer users found that 280 of them prefer using cloud storage. Construct a 95% confidence interval for the true proportion of computer users who prefer cloud storage.

*   $n = 400$, $x = 280$
*   $\hat{p} = 280/400 = 0.70$
*   Check conditions:
    *   $n\hat{p} = 400 \times 0.70 = 280 \geq 10$
    *   $n(1-\hat{p}) = 400 \times (1-0.70) = 400 \times 0.30 = 120 \geq 10$
    *   Conditions are met.
*   Confidence level = 95% $\implies \alpha = 0.05 \implies z_{0.025} \approx 1.96$
*   $SE = \sqrt{\frac{0.70(1-0.70)}{400}} = \sqrt{\frac{0.70 \times 0.30}{400}} = \sqrt{\frac{0.21}{400}} = \sqrt{0.000525} \approx 0.0229$
*   $ME = 1.96 \times 0.0229 \approx 0.0449$
*   CI: $0.70 \pm 0.0449 \implies (0.6551, 0.7449)$

**Interpretation:** We are 95% confident that the true proportion of computer users who prefer cloud storage is between 0.6551 and 0.7449.

**Important Point:** When estimating the proportion and the sample size is not given, but you need to determine the sample size to achieve a certain margin of error, you can use $\hat{p} = 0.5$ as a conservative estimate to maximize the required sample size.

---

### 3. Determining Sample Size

This section is a practical application of confidence interval concepts and is directly relevant to **CO3**.

**Concept:** To ensure a desired level of precision (margin of error) for a confidence interval, we need to determine the appropriate sample size.

#### 3.1 Sample Size for Population Mean ($\mu$)

When $\sigma$ is known:
The margin of error for a confidence interval for $\mu$ is $ME = z_{\alpha/2} \left( \frac{\sigma}{\sqrt{n}} \right)$.
To achieve a desired margin of error $ME_{desired}$, we solve for $n$:
$n = \left( \frac{z_{\alpha/2} \sigma}{ME_{desired}} \right)^2$

When $\sigma$ is unknown:
We use an estimate of $\sigma$, often $s$ from a pilot study, or if no prior estimate is available, we might use a value based on the range of possible data values (e.g., Range/4 or Range/6).
$n = \left( \frac{z_{\alpha/2} s}{ME_{desired}} \right)^2$

**Important Point:** Always round up the sample size to the next whole number, as you cannot have a fraction of a sample.

**Example:**
An engineer wants to estimate the average resistance of a new type of resistor with a margin of error of $\pm 0.01$ ohms, with 95% confidence. From previous studies, the standard deviation is estimated to be 0.05 ohms. What sample size is needed?

*   $ME_{desired} = 0.01$
*   $z_{\alpha/2}$ for 95% confidence is 1.96.
*   $s \approx 0.05$
*   $n = \left( \frac{1.96 \times 0.05}{0.01} \right)^2 = \left( \frac{0.098}{0.01} \right)^2 = (9.8)^2 = 96.04$
*   Round up to $n=97$.

---

#### 3.2 Sample Size for Population Proportion ($p$)

The margin of error for a confidence interval for $p$ is $ME = z_{\alpha/2} \sqrt{\frac{p(1-p)}{n}}$.
To achieve a desired margin of error $ME_{desired}$, we solve for $n$.
$n = \left( \frac{z_{\alpha/2}}{ME_{desired}} \right)^2 p(1-p)$

If the value of $p$ is unknown, we use $p=0.5$ to get the largest possible sample size (most conservative estimate).
$n = \left( \frac{z_{\alpha/2}}{ME_{desired}} \right)^2 (0.5)(0.5) = \left( \frac{z_{\alpha/2}}{ME_{desired}} \right)^2 0.25$

**Important Point:** Always round up the sample size to the next whole number.

**Example:**
A company wants to estimate the proportion of defective electronic components produced by a new manufacturing process. They want to be 99% confident that the margin of error is no more than 0.03. What sample size is needed?

*   $ME_{desired} = 0.03$
*   $z_{\alpha/2}$ for 99% confidence is 2.576.
*   Assuming $p=0.5$ (unknown proportion):
*   $n = \left( \frac{2.576}{0.03} \right)^2 \times 0.25 = \left( 85.867 \right)^2 \times 0.25 \approx 7373.19 \times 0.25 \approx 1843.3$
*   Round up to $n=1844$.

---

### 4. Factors Affecting the Width of a Confidence Interval

The width of a confidence interval is $2 \times ME$. Understanding these factors helps in designing studies and interpreting results.

*   **Confidence Level ( $(1-\alpha) \times 100\%$ ):**
    *   **Higher confidence level $\implies$ Wider interval.** To be more confident that the interval captures the true parameter, you need a wider range of values. For example, a 99% CI will be wider than a 95% CI. This is because $z_{\alpha/2}$ (or $t_{\alpha/2, n-1}$) increases as the confidence level increases.
*   **Sample Size ($n$):**
    *   **Larger sample size $\implies$ Narrower interval.** As $n$ increases, the standard error ( $\sigma/\sqrt{n}$ or $s/\sqrt{n}$ ) decreases, leading to a smaller margin of error and thus a narrower interval. This reflects increased precision from more data.
*   **Population Standard Deviation ($\sigma$ or $s$):**
    *   **Larger standard deviation $\implies$ Wider interval.** A larger spread in the population data leads to a larger standard deviation, which in turn increases the standard error and the margin of error.

**Important Point:** There is a trade-off between confidence level and precision (interval width). To achieve high confidence and a narrow interval, a large sample size is required.

---

### 5. Relationship to Hypothesis Testing

**Concept:** Confidence intervals and hypothesis tests are complementary tools for statistical inference. A confidence interval provides a range of plausible values for a population parameter, while a hypothesis test evaluates evidence against a specific claim about the parameter. This connects to **CO3**.

*   **Two-Sided Hypothesis Test:**
    *   Consider testing $H_0: \mu = \mu_0$ vs. $H_a: \mu \neq \mu_0$.
    *   If the hypothesized value $\mu_0$ falls **outside** the $(1-\alpha) \times 100\%$ confidence interval for $\mu$, we **reject** $H_0$ at the $\alpha$ significance level.
    *   If the hypothesized value $\mu_0$ falls **inside** the $(1-\alpha) \times 100\%$ confidence interval for $\mu$, we **fail to reject** $H_0$ at the $\alpha$ significance level.

**Example:**
Suppose we construct a 95% confidence interval for the average resistance of a new resistor to be $(0.5008, 0.5392)$ ohms.
If we want to test the hypothesis that the true average resistance is 0.55 ohms ($H_0: \mu = 0.55$), since 0.55 is outside the 95% CI, we would reject $H_0$ at $\alpha=0.05$.
If we wanted to test $H_0: \mu = 0.52$, since 0.52 is inside the 95% CI, we would fail to reject $H_0$ at $\alpha=0.05$.

**Important Point:** A $(1-\alpha) \times 100\%$ confidence interval corresponds to a two-sided hypothesis test with a significance level of $\alpha$.

---

### Practice Questions/Exercises:

**Question 1:**
A sample of 30 voltage readings from a circuit shows a mean of 12.1 V. The population standard deviation is known to be 0.5 V. Calculate a 90% confidence interval for the true mean voltage.

**Question 2:**
A quality control engineer takes a sample of 25 integrated circuits. The sample mean processing time is 3.5 seconds, and the sample standard deviation is 0.4 seconds. Calculate a 95% confidence interval for the true mean processing time.

**Question 3:**
In a sample of 200 manufactured electrical insulators, 18 were found to be defective. Construct a 98% confidence interval for the true proportion of defective insulators.

**Question 4:**
An electrical engineer wants to estimate the average voltage drop across a component. She wants a margin of error of $\pm 0.2$ V with 95% confidence. If the standard deviation is estimated to be 1.5 V, how many samples are needed?

**Question 5:**
A polling organization wants to estimate the proportion of voters who support a new technology bill. They want to be 90% confident that the margin of error is no more than $\pm 0.04$. How many voters should be surveyed?

---

### Answers to Practice Questions:

**Answer 1:**
*   $n=30$, $\bar{x}=12.1$ V, $\sigma=0.5$ V.
*   Confidence level = 90% $\implies \alpha = 0.10 \implies z_{0.05} \approx 1.645$.
*   $SE = \frac{0.5}{\sqrt{30}} \approx 0.0913$ V.
*   $ME = 1.645 \times 0.0913 \approx 0.150$ V.
*   CI: $12.1 \pm 0.150$ V $\implies (11.950, 12.250)$ V.

**Answer 2:**
*   $n=25$, $\bar{x}=3.5$ s, $s=0.4$ s.
*   Confidence level = 95% $\implies \alpha = 0.05$.
*   $df = n-1 = 24$.
*   $t_{0.025, 24} \approx 2.064$.
*   $SE = \frac{0.4}{\sqrt{25}} = \frac{0.4}{5} = 0.08$ s.
*   $ME = 2.064 \times 0.08 \approx 0.165$ s.
*   CI: $3.5 \pm 0.165$ s $\implies (3.335, 3.665)$ s.

**Answer 3:**
*   $n=200$, $x=18$.
*   $\hat{p} = 18/200 = 0.09$.
*   Check conditions: $n\hat{p} = 200 \times 0.09 = 18 \geq 10$; $n(1-\hat{p}) = 200 \times 0.91 = 182 \geq 10$. Conditions met.
*   Confidence level = 98% $\implies \alpha = 0.02 \implies z_{0.01} \approx 2.326$.
*   $SE = \sqrt{\frac{0.09(1-0.09)}{200}} = \sqrt{\frac{0.09 \times 0.91}{200}} = \sqrt{\frac{0.0819}{200}} = \sqrt{0.0004095} \approx 0.0202$.
*   $ME = 2.326 \times 0.0202 \approx 0.0470$.
*   CI: $0.09 \pm 0.0470 \implies (0.0430, 0.1370)$.

**Answer 4:**
*   $ME_{desired} = 0.2$ V, Confidence = 95% $\implies z_{0.025} \approx 1.96$, $s = 1.5$ V.
*   $n = \left( \frac{1.96 \times 1.5}{0.2} \right)^2 = \left( \frac{2.94}{0.2} \right)^2 = (14.7)^2 = 216.09$.
*   Round up to $n=217$ samples.

**Answer 5:**
*   $ME_{desired} = 0.04$, Confidence = 90% $\implies z_{0.05} \approx 1.645$.
*   Assume $p=0.5$.
*   $n = \left( \frac{1.645}{0.04} \right)^2 \times 0.25 = (41.125)^2 \times 0.25 \approx 1691.26 \times 0.25 \approx 422.8$.
*   Round up to $n=423$ voters.

---

### Important Points to Remember:

*   **Confidence intervals provide a range of plausible values**, not a single best estimate.
*   The **confidence level** is about the *process* of creating intervals, not the probability that a *specific* interval contains the true parameter.
*   When $\sigma$ is unknown, **always use the t-distribution** (especially for small sample sizes).
*   The **width of the CI** is influenced by confidence level, sample size, and data variability ($\sigma$ or $s$).
*   For proportions, the **normal approximation is valid** only if $n\hat{p} \geq 10$ and $n(1-\hat{p}) \geq 10$.
*   Confidence intervals and hypothesis tests are **two sides of the same coin** and can be used to make inferences about population parameters.

---

**References Integrated:**

*   **Devore, J. L. (2016):** The concepts and formulas for confidence intervals for means (both known and unknown $\sigma$) and proportions are directly from Chapters 6 and 7. The examples are representative of those found in the text.
*   **Veerarajan, T. (2008):** Chapters 9 and 10 provide foundational material on estimation and confidence intervals, reinforcing the concepts and methods presented here, particularly for means and proportions.

This module provides a crucial link between understanding random variables (Modules 1 & 2) and making inferences about populations based on sample data, directly supporting **CO3**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
