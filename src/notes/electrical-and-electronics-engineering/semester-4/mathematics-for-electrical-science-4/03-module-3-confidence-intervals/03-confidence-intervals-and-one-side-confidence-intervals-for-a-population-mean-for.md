---
title: "Confidence Intervals and One-side confidence intervals for a Population Mean for large and small samples (normal distribution and t-distribution)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 3: Confidence Intervals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35da9"
status: "completed"
scrapedAt: "2026-05-23T16:17:00.563Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 3: Confidence Intervals

### Topic: Confidence Intervals and One-side Confidence Intervals for a Population Mean for Large and Small Samples (Normal Distribution and t-Distribution)

---

### 1. Introduction to Confidence Intervals (CO3: K3)

Confidence intervals provide a range of plausible values for an unknown population parameter (like the mean) based on sample data. They quantify the uncertainty associated with estimating a population parameter from a sample.

**Key Concepts:**

*   **Population Parameter:** A numerical characteristic of a population (e.g., population mean $\mu$, population standard deviation $\sigma$).
*   **Sample Statistic:** A numerical characteristic calculated from a sample (e.g., sample mean $\bar{x}$, sample standard deviation $s$).
*   **Point Estimate:** A single value used to estimate a population parameter. For the population mean, the sample mean $\bar{x}$ is the best point estimate.
*   **Interval Estimate:** A range of values within which the population parameter is likely to lie.

**Why are Confidence Intervals Important?**

*   They provide a more realistic assessment of the unknown parameter than a point estimate alone.
*   They indicate the precision of our estimate. A narrower interval suggests a more precise estimate.
*   They are crucial for making informed decisions in engineering and science when dealing with variability and uncertainty.

---

### 2. Confidence Intervals for the Population Mean ($\mu$) - Large Samples (n > 30) (CO3: K3)

When the sample size is large ($n > 30$), the Central Limit Theorem (CLT) states that the sampling distribution of the sample mean ($\bar{x}$) is approximately normally distributed, regardless of the population's distribution.

**Assumption:** The population standard deviation ($\sigma$) is known or can be reliably estimated from a large sample.

**Formula for a $(1-\alpha) \times 100\%$ Confidence Interval for $\mu$:**

$$ \bar{x} \pm z_{\alpha/2} \left( \frac{\sigma}{\sqrt{n}} \right) $$

Where:

*   $\bar{x}$ is the sample mean.
*   $\sigma$ is the population standard deviation.
*   $n$ is the sample size.
*   $z_{\alpha/2}$ is the critical z-value from the standard normal distribution such that the area to its right is $\alpha/2$. This means the area between $-z_{\alpha/2}$ and $z_{\alpha/2}$ is $1-\alpha$.

**Explanation of Terms:**

*   **Confidence Level ($1-\alpha$):** The probability that the interval contains the true population mean. Common confidence levels are 90%, 95%, and 99%.
*   **Significance Level ($\alpha$):** The probability that the interval does *not* contain the true population mean. $\alpha = 1 - (1-\alpha)$. For a 95% confidence level, $\alpha = 0.05$.
*   **Standard Error of the Mean ($\text{SE}_{\bar{x}}$):** $\frac{\sigma}{\sqrt{n}}$. This measures the variability of sample means around the population mean.
*   **Margin of Error (ME):** $z_{\alpha/2} \left( \frac{\sigma}{\sqrt{n}} \right)$. This is the "plus or minus" value added to the sample mean to form the interval.

**Finding Critical z-values ($z_{\alpha/2}$):**

| Confidence Level | $\alpha$ | $\alpha/2$ | $z_{\alpha/2}$ | Area between $-z_{\alpha/2}$ and $z_{\alpha/2}$ |
| :--------------- | :------- | :--------- | :------------- | :--------------------------------------------- |
| 90%              | 0.10     | 0.05       | 1.645          | 0.90                                           |
| 95%              | 0.05     | 0.025      | 1.96           | 0.95                                           |
| 99%              | 0.01     | 0.005      | 2.576          | 0.99                                           |

**(Refer to Devore, J. L., Chapter 7, Section 7.2 for detailed explanations and examples on confidence intervals for the mean with known population standard deviation.)**

**Example:**

A manufacturing plant produces resistors. A random sample of 100 resistors has a mean resistance of 100.5 ohms. If the population standard deviation of the resistance is known to be 2.0 ohms, construct a 95% confidence interval for the true mean resistance of all resistors produced by the plant.

**Solution:**

*   $\bar{x} = 100.5$ ohms
*   $\sigma = 2.0$ ohms
*   $n = 100$
*   Confidence Level = 95%, so $\alpha = 0.05$, and $\alpha/2 = 0.025$.
*   From the table, $z_{0.025} = 1.96$.

The confidence interval is:
$100.5 \pm 1.96 \left( \frac{2.0}{\sqrt{100}} \right)$
$100.5 \pm 1.96 \left( \frac{2.0}{10} \right)$
$100.5 \pm 1.96 (0.2)$
$100.5 \pm 0.392$

The 95% confidence interval is $(100.108, 100.892)$ ohms.

**Interpretation:** We are 95% confident that the true mean resistance of all resistors produced by the plant lies between 100.108 and 100.892 ohms.

---

### 3. Confidence Intervals for the Population Mean ($\mu$) - Small Samples (n < 30) (CO3: K3)

When the sample size is small ($n < 30$), and the population standard deviation ($\sigma$) is **unknown**, we use the **t-distribution** (also known as Student's t-distribution).

**Assumptions:**

1.  The population from which the sample is drawn is approximately normally distributed.
2.  The population standard deviation ($\sigma$) is unknown and is estimated by the sample standard deviation ($s$).

**Formula for a $(1-\alpha) \times 100\%$ Confidence Interval for $\mu$:**

$$ \bar{x} \pm t_{\alpha/2, \nu} \left( \frac{s}{\sqrt{n}} \right) $$

Where:

*   $\bar{x}$ is the sample mean.
*   $s$ is the sample standard deviation.
*   $n$ is the sample size.
*   $\nu$ (nu) is the **degrees of freedom**, calculated as $\nu = n-1$.
*   $t_{\alpha/2, \nu}$ is the critical t-value from the t-distribution with $\nu$ degrees of freedom such that the area to its right is $\alpha/2$.

**Explanation of Terms:**

*   **Sample Standard Deviation ($s$):** Calculated as $s = \sqrt{\frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n-1}}$.
*   **Degrees of Freedom ($\nu$):** Represents the number of independent pieces of information available to estimate a parameter. For a single sample mean, it's $n-1$.
*   **t-distribution:** A probability distribution that is similar to the normal distribution but has heavier tails. This accounts for the additional uncertainty introduced by estimating $\sigma$ with $s$. As the degrees of freedom increase, the t-distribution approaches the standard normal distribution.

**(Refer to Devore, J. L., Chapter 8, Section 8.1 for detailed explanations and examples on confidence intervals for the mean with unknown population standard deviation using the t-distribution.)**
**(Refer to T. Veerarajan, Chapter 6, Section 6.2 for details on sampling distributions and confidence intervals using t-distribution.)**

**Finding Critical t-values ($t_{\alpha/2, \nu}$):**

You'll need to use a t-table or statistical software to find these values. The table typically lists probabilities in the tails ($\alpha/2$) and the corresponding t-values for different degrees of freedom ($\nu$).

**Example:**

An engineer wants to estimate the average lifespan of a new type of capacitor. A sample of 16 capacitors is tested and yields a mean lifespan of 520 hours with a sample standard deviation of 30 hours. Construct a 95% confidence interval for the true mean lifespan of these capacitors.

**Solution:**

*   $\bar{x} = 520$ hours
*   $s = 30$ hours
*   $n = 16$
*   Confidence Level = 95%, so $\alpha = 0.05$, and $\alpha/2 = 0.025$.
*   Degrees of freedom, $\nu = n-1 = 16-1 = 15$.

Now, we need to find $t_{0.025, 15}$ from a t-table. Looking up the intersection of the row for 15 degrees of freedom and the column for a tail probability of 0.025 (or a two-tailed probability of 0.05), we find $t_{0.025, 15} = 2.131$.

The confidence interval is:
$520 \pm 2.131 \left( \frac{30}{\sqrt{16}} \right)$
$520 \pm 2.131 \left( \frac{30}{4} \right)$
$520 \pm 2.131 (7.5)$
$520 \pm 15.9825$

The 95% confidence interval is $(504.0175, 535.9825)$ hours.

**Interpretation:** We are 95% confident that the true mean lifespan of this new type of capacitor is between 504.0175 and 535.9825 hours.

---

### 4. How to Determine the Sample Size for a Desired Margin of Error (CO3: K3)

If we want to achieve a specific margin of error (ME) for our confidence interval, we can pre-determine the required sample size.

**For large samples (when $\sigma$ is known or estimated):**

The margin of error is given by: $ME = z_{\alpha/2} \left( \frac{\sigma}{\sqrt{n}} \right)$.
We want to solve for $n$:
$\sqrt{n} = z_{\alpha/2} \left( \frac{\sigma}{ME} \right)$
$n = \left( \frac{z_{\alpha/2} \sigma}{ME} \right)^2$

**Important Note:** Since $n$ must be an integer, always round *up* to the nearest whole number to ensure the desired margin of error is met or exceeded. If $\sigma$ is unknown, a preliminary estimate of $\sigma$ can be used, or the range of expected values can be used to estimate $\sigma$ (e.g., $\sigma \approx \text{Range}/4$).

**Example:**

An electrical engineer wants to estimate the average voltage of a power supply with a margin of error of $\pm 0.1$ V. From previous studies, the standard deviation of the voltage is known to be 1.5 V. If a 95% confidence level is desired, what sample size is needed?

**Solution:**

*   $ME = 0.1$ V
*   $\sigma = 1.5$ V
*   Confidence Level = 95%, so $z_{\alpha/2} = 1.96$.

$n = \left( \frac{1.96 \times 1.5}{0.1} \right)^2$
$n = \left( \frac{2.94}{0.1} \right)^2$
$n = (29.4)^2$
$n = 864.36$

Rounding up, the engineer needs a sample size of **865** capacitors.

---

### 5. One-Sided Confidence Intervals (CO3: K3)

While two-sided confidence intervals provide a range for the parameter, one-sided confidence intervals are used when we are interested in whether the parameter is greater than or less than a certain value.

**Uses of One-Sided Intervals:**

*   **Lower Confidence Bound:** To establish a minimum acceptable value (e.g., minimum lifespan, minimum efficiency).
*   **Upper Confidence Bound:** To establish a maximum acceptable value (e.g., maximum impurity level, maximum response time).

**5.1 Upper Confidence Bound for $\mu$**

We want to find an upper bound $U$ such that $P(\mu \le U) = 1-\alpha$.

*   **For large samples (using z-distribution):**
    The interval is of the form $(\text{Lower Bound, } \bar{x} + z_{\alpha} \frac{\sigma}{\sqrt{n}})$.
    The upper bound is $\bar{x} + z_{\alpha} \frac{\sigma}{\sqrt{n}}$. Note that we use $z_{\alpha}$ instead of $z_{\alpha/2}$ because the entire $\alpha$ is in one tail.

*   **For small samples (using t-distribution):**
    The interval is of the form $(\text{Lower Bound, } \bar{x} + t_{\alpha, \nu} \frac{s}{\sqrt{n}})$.
    The upper bound is $\bar{x} + t_{\alpha, \nu} \frac{s}{\sqrt{n}}$.

**5.2 Lower Confidence Bound for $\mu$**

We want to find a lower bound $L$ such that $P(\mu \ge L) = 1-\alpha$.

*   **For large samples (using z-distribution):**
    The interval is of the form $(\bar{x} - z_{\alpha} \frac{\sigma}{\sqrt{n}}, \text{Upper Bound})$.
    The lower bound is $\bar{x} - z_{\alpha} \frac{\sigma}{\sqrt{n}}$.

*   **For small samples (using t-distribution):**
    The interval is of the form $(\bar{x} - t_{\alpha, \nu} \frac{s}{\sqrt{n}}, \text{Upper Bound})$.
    The lower bound is $\bar{x} - t_{\alpha, \nu} \frac{s}{\sqrt{n}}$.

**(Refer to Devore, J. L., Chapter 7, Section 7.2 and Chapter 8, Section 8.1 for specific details on one-sided confidence intervals.)**
**(Refer to T. Veerarajan, Chapter 6, Section 6.2 and 6.3 for discussions on one-sided confidence intervals.)**

**Example (One-Sided):**

A semiconductor manufacturer wants to ensure that the mean etch rate of a plasma etching process is at least 150 nm/min. A sample of 20 wafers is taken, yielding a sample mean etch rate of 145 nm/min with a sample standard deviation of 10 nm/min. Construct a 95% lower confidence bound for the mean etch rate.

**Solution:**

*   $\bar{x} = 145$ nm/min
*   $s = 10$ nm/min
*   $n = 20$
*   Confidence Level = 95%, so $\alpha = 0.05$.
*   Degrees of freedom, $\nu = n-1 = 20-1 = 19$.

We need the lower confidence bound, so we use $t_{\alpha, \nu} = t_{0.05, 19}$. From a t-table, $t_{0.05, 19} = 1.729$.

The lower confidence bound is:
$L = \bar{x} - t_{\alpha, \nu} \left( \frac{s}{\sqrt{n}} \right)$
$L = 145 - 1.729 \left( \frac{10}{\sqrt{20}} \right)$
$L = 145 - 1.729 \left( \frac{10}{4.472} \right)$
$L = 145 - 1.729 (2.236)$
$L = 145 - 3.867$
$L = 141.133$ nm/min

**Interpretation:** We are 95% confident that the true mean etch rate is at least 141.133 nm/min. Since this lower bound (141.133) is less than the desired minimum of 150 nm/min, we cannot conclude with 95% confidence that the mean etch rate meets the requirement.

---

### 6. Relationship between Confidence Intervals and Hypothesis Testing (CO3: K3)

There's a close link between constructing confidence intervals and performing hypothesis tests.

*   If a hypothesized value for the population mean ($\mu_0$) falls *outside* a $(1-\alpha) \times 100\%$ confidence interval for $\mu$, then we can reject the null hypothesis $H_0: \mu = \mu_0$ at the $\alpha$ significance level.
*   If a hypothesized value falls *inside* the confidence interval, we fail to reject $H_0$.

For example, if a 95% confidence interval for $\mu$ is $(100.1, 100.9)$, and we want to test $H_0: \mu = 100$ at $\alpha = 0.05$, we would fail to reject $H_0$ because 100 is outside the interval. If we want to test $H_0: \mu = 100.5$, we would fail to reject $H_0$ because 100.5 is inside the interval.

**(Refer to Devore, J. L., Chapter 8, Section 8.3 for a discussion on the duality between confidence intervals and hypothesis testing.)**

---

### 7. Key Points to Remember

*   **Large Samples (n > 30):** Use the z-distribution if $\sigma$ is known or can be reliably estimated from a large sample.
*   **Small Samples (n < 30):** Use the t-distribution if $\sigma$ is unknown and the population is approximately normally distributed.
*   **Degrees of Freedom ($\nu$):** Crucial for the t-distribution, calculated as $\nu = n-1$.
*   **Interpretation:** A confidence interval quantifies the range of plausible values for the population parameter. It doesn't guarantee the parameter is within the interval, but states the confidence in the method used to construct it.
*   **Factors affecting CI width:**
    *   **Confidence Level:** Higher confidence level leads to a wider interval.
    *   **Sample Size:** Larger sample size leads to a narrower interval.
    *   **Variability ( $\sigma$ or $s$ ):** Higher variability leads to a wider interval.
*   **One-Sided Intervals:** Used when interest is in a one-directional estimate (e.g., minimum or maximum).
*   **Sample Size Determination:** Round *up* to ensure the desired margin of error is met.

---

### 8. Practice Questions and Exercises

1.  **Question:** A researcher measures the inductance of a coil and obtains the following values (in mH): 15.2, 16.1, 15.5, 15.8, 16.3, 15.9.
    a) Calculate the sample mean and sample standard deviation.
    b) Construct a 95% confidence interval for the true mean inductance. (Assume the inductance is normally distributed).
    c) Construct a 99% confidence interval for the true mean inductance.

    **Answer:**
    a) $\bar{x} = 15.8$ mH, $s \approx 0.3899$ mH
    b) $\nu = 6-1=5$. $t_{0.025, 5} = 2.571$.
       $15.8 \pm 2.571 \left( \frac{0.3899}{\sqrt{6}} \right) = 15.8 \pm 2.571 (0.1591) \approx 15.8 \pm 0.41$
       CI: $(15.39, 16.21)$ mH
    c) $t_{0.005, 5} = 4.032$.
       $15.8 \pm 4.032 \left( \frac{0.3899}{\sqrt{6}} \right) = 15.8 \pm 4.032 (0.1591) \approx 15.8 \pm 0.64$
       CI: $(15.16, 16.44)$ mH

2.  **Question:** A power utility company monitors the voltage of electricity supplied. A sample of 64 readings shows a mean voltage of 238.5 V with a population standard deviation of 5.0 V.
    a) Construct a 90% confidence interval for the true mean voltage.
    b) Construct a 98% confidence interval for the true mean voltage.

    **Answer:**
    a) $\bar{x} = 238.5$, $\sigma = 5.0$, $n = 64$. $z_{0.05} = 1.645$.
       $238.5 \pm 1.645 \left( \frac{5.0}{\sqrt{64}} \right) = 238.5 \pm 1.645 \left( \frac{5.0}{8} \right) = 238.5 \pm 1.645 (0.625) \approx 238.5 \pm 1.03$
       CI: $(237.47, 239.53)$ V
    b) $\bar{x} = 238.5$, $\sigma = 5.0$, $n = 64$. $z_{0.01} = 2.326$.
       $238.5 \pm 2.326 \left( \frac{5.0}{8} \right) = 238.5 \pm 2.326 (0.625) \approx 238.5 \pm 1.45$
       CI: $(237.05, 239.95)$ V

3.  **Question:** An engineer needs to estimate the mean thermal conductivity of a new composite material. She wants a margin of error of 0.5 W/(m·K) with 95% confidence. Previous research suggests the standard deviation is around 4.0 W/(m·K). How many samples are needed?

    **Answer:**
    $ME = 0.5$, $\sigma = 4.0$, $z_{0.025} = 1.96$.
    $n = \left( \frac{1.96 \times 4.0}{0.5} \right)^2 = \left( \frac{7.84}{0.5} \right)^2 = (15.68)^2 \approx 245.86$.
    Need **246** samples.

4.  **Question:** A manufacturing process for optical fibers aims for a mean tensile strength of at least 3.0 GPa. A sample of 15 fibers yields a mean tensile strength of 2.8 GPa with a sample standard deviation of 0.3 GPa. Construct a 90% *lower* confidence bound for the mean tensile strength. Can the manufacturer be 90% confident that the process meets its target?

    **Answer:**
    $\bar{x} = 2.8$, $s = 0.3$, $n = 15$. $\alpha = 0.10$. $\nu = 14$.
    $t_{0.10, 14} = 1.345$.
    Lower Bound = $2.8 - 1.345 \left( \frac{0.3}{\sqrt{15}} \right) = 2.8 - 1.345 (0.07746) \approx 2.8 - 0.1042$.
    Lower Bound $\approx 2.6958$ GPa.
    Since the lower bound (2.6958 GPa) is less than the target of 3.0 GPa, the manufacturer cannot be 90% confident that the process meets its target.

---

This concludes Module 3, Topic: Confidence Intervals and One-side Confidence Intervals for a Population Mean for large and small samples (normal distribution and t-distribution).

**(Note: For specific numerical values in t-tables, always refer to the t-distribution table provided in your textbook or statistical software.)**
**(Refer to Devore, J. L. and T. Veerarajan for a comprehensive understanding and additional examples.)**
