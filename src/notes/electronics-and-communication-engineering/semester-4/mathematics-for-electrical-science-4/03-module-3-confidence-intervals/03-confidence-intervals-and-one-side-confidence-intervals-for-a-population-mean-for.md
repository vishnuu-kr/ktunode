---
title: "Confidence Intervals and One-side confidence intervals for a Population Mean for large and"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4cc"
status: "completed"
scrapedAt: "2026-05-23T17:50:48.520Z"
---
# Mathematics for Electrical Science – 4: Module 3: Confidence Intervals

## Topic: Confidence Intervals and One-Sided Confidence Intervals for a Population Mean (Large Samples)

### 1. Introduction to Inference for a Population Mean

This module focuses on statistical inference, specifically estimating unknown population parameters based on sample data. For electrical science applications, understanding the average performance, operating characteristics, or failure rates of components (represented by a population mean, $\mu$) is crucial. When it's impractical or impossible to measure every single component, we rely on samples to make educated guesses about the population.

**Key Concept: Statistical Inference**
The process of using sample statistics to draw conclusions about population parameters.

**Relevance to Electrical Science:**
*   Estimating the average voltage output of a power supply.
*   Determining the mean lifetime of a batch of LEDs.
*   Assessing the average resistance of manufactured resistors.

### 2. Confidence Intervals for a Population Mean ($\mu$) - Large Samples

When we have a large sample (typically $n \ge 30$), we can use the Central Limit Theorem (CLT) to approximate the sampling distribution of the sample mean ($\bar{X}$) as normal, regardless of the population distribution. This allows us to construct confidence intervals for the population mean $\mu$.

#### 2.1. The Central Limit Theorem (CLT)

**Statement:** If $X_1, X_2, ..., X_n$ is a random sample from a population with mean $\mu$ and finite variance $\sigma^2$, and $n$ is sufficiently large ($n \ge 30$), then the sampling distribution of the sample mean $\bar{X} = \frac{1}{n}\sum_{i=1}^{n} X_i$ is approximately normally distributed with mean $E(\bar{X}) = \mu$ and variance $Var(\bar{X}) = \frac{\sigma^2}{n}$.

This means that the standardized sample mean, $Z = \frac{\bar{X} - \mu}{\sigma/\sqrt{n}}$, follows approximately a standard normal distribution $N(0,1)$.

**Textbook Reference:** Devore, Chapter 7.2 (The Central Limit Theorem)

#### 2.2. Constructing a Confidence Interval for $\mu$ (when $\sigma$ is known or $n$ is large)

If the population standard deviation $\sigma$ is known, or if the sample size $n$ is large enough for the sample standard deviation $s$ to be a reliable estimate of $\sigma$, we can construct a confidence interval for $\mu$.

**Formula for a $(1-\alpha) \times 100\%$ Confidence Interval for $\mu$ (large $n$):**

$$ \bar{x} - z_{\alpha/2} \left(\frac{s}{\sqrt{n}}\right) \le \mu \le \bar{x} + z_{\alpha/2} \left(\frac{s}{\sqrt{n}}\right) $$

or equivalently:

$$ \bar{x} \pm z_{\alpha/2} \left(\frac{s}{\sqrt{n}}\right) $$

Where:
*   $\bar{x}$ is the sample mean.
*   $s$ is the sample standard deviation.
*   $n$ is the sample size.
*   $z_{\alpha/2}$ is the critical value from the standard normal distribution such that the area in the upper tail is $\alpha/2$. This value corresponds to a $(1-\alpha) \times 100\%$ confidence level. Common values:
    *   90% confidence ($1-\alpha = 0.90 \implies \alpha = 0.10 \implies \alpha/2 = 0.05$): $z_{0.05} \approx 1.645$
    *   95% confidence ($1-\alpha = 0.95 \implies \alpha = 0.05 \implies \alpha/2 = 0.025$): $z_{0.025} \approx 1.960$
    *   99% confidence ($1-\alpha = 0.99 \implies \alpha = 0.01 \implies \alpha/2 = 0.005$): $z_{0.005} \approx 2.576$
*   $\frac{s}{\sqrt{n}}$ is the **standard error of the mean**.

**Interpretation:**
A $(1-\alpha) \times 100\%$ confidence interval for $\mu$ means that if we were to take many random samples of the same size and construct intervals in the same way, then $(1-\alpha) \times 100\%$ of these intervals would contain the true population mean $\mu$. It does **not** mean there is a $(1-\alpha) \times 100\%$ probability that the true $\mu$ lies within a *specific* calculated interval.

**Textbook Reference:** Devore, Chapter 7.3 (Interval Estimation of a Population Mean - Large Sample Case)

#### 2.3. Margin of Error

The margin of error (ME) is the "plus or minus" part of the confidence interval.

$$ ME = z_{\alpha/2} \left(\frac{s}{\sqrt{n}}\right) $$

The width of the confidence interval is $2 \times ME$.

**Factors Affecting Margin of Error:**
*   **Confidence Level:** Higher confidence level $\implies$ larger $z_{\alpha/2}$ $\implies$ larger ME.
*   **Sample Size ($n$):** Larger $n$ $\implies$ smaller $\frac{s}{\sqrt{n}}$ $\implies$ smaller ME.
*   **Sample Standard Deviation ($s$):** Larger $s$ $\implies$ larger ME.

#### 2.4. Sample Size Determination

If we want to achieve a specific margin of error ($ME$) for a given confidence level, we can determine the required sample size ($n$).

**Formula for Sample Size:**

$$ n = \left( \frac{z_{\alpha/2} \cdot \sigma}{ME} \right)^2 $$

*   **Important Note:** This formula requires knowing the population standard deviation $\sigma$. If $\sigma$ is unknown, we can use an estimate from a pilot study or a prior experience. If the calculated $n$ is not an integer, we round up to the next whole number.

**Textbook Reference:** Devore, Chapter 7.3 (Sample Size Determination)

**Example 1: Power Supply Output**
An engineer wants to estimate the average voltage output of a new power supply design. A random sample of 50 power supplies is tested, and the sample mean voltage is 12.05 V with a sample standard deviation of 0.15 V. Construct a 95% confidence interval for the true average voltage output.

*   $n = 50$ (large sample)
*   $\bar{x} = 12.05$ V
*   $s = 0.15$ V
*   Confidence level = 95%, so $\alpha = 0.05$, and $z_{\alpha/2} = z_{0.025} \approx 1.96$.

**Calculation:**
Standard Error = $\frac{s}{\sqrt{n}} = \frac{0.15}{\sqrt{50}} \approx \frac{0.15}{7.071} \approx 0.0212$ V
Margin of Error = $z_{\alpha/2} \times \frac{s}{\sqrt{n}} = 1.96 \times 0.0212 \approx 0.0416$ V

**Confidence Interval:**
$12.05 \pm 0.0416$
$12.05 - 0.0416 \le \mu \le 12.05 + 0.0416$
$12.0084 \le \mu \le 12.0916$

**Conclusion:** We are 95% confident that the true average voltage output of the power supply design is between 12.0084 V and 12.0916 V.

**Example 2: Sample Size for Desired Precision**
An electrical component manufacturer wants to estimate the mean resistance of a new type of resistor. They want to be 99% confident that the estimate is within 0.1 ohms of the true mean resistance. A preliminary study yielded a sample standard deviation of 2.5 ohms. How many resistors should be sampled?

*   Desired ME = 0.1 ohms
*   Confidence level = 99%, so $\alpha = 0.01$, and $z_{\alpha/2} = z_{0.005} \approx 2.576$.
*   Estimated $\sigma \approx s_{pilot} = 2.5$ ohms.

**Calculation:**
$n = \left( \frac{z_{\alpha/2} \cdot \sigma}{ME} \right)^2 = \left( \frac{2.576 \cdot 2.5}{0.1} \right)^2 = \left( \frac{6.44}{0.1} \right)^2 = (64.4)^2 \approx 4147.36$

**Conclusion:** The manufacturer should sample at least 4148 resistors to achieve the desired precision and confidence level.

### 3. One-Sided Confidence Intervals for a Population Mean ($\mu$) - Large Samples

Sometimes, we are interested in establishing a bound on the population mean, rather than an interval. For instance, an engineer might want to be confident that the mean lifetime of a component is *at least* a certain value, or that the mean power consumption is *no more than* a certain value. This is where one-sided confidence intervals are useful.

#### 3.1. Upper Confidence Bound

We want to find a value $U$ such that we are $(1-\alpha) \times 100\%$ confident that $\mu \le U$.

**Formula for a $(1-\alpha) \times 100\%$ Upper Confidence Bound for $\mu$ (large $n$):**

$$ \mu \le \bar{x} + z_{\alpha} \left(\frac{s}{\sqrt{n}}\right) $$

Here, $z_{\alpha}$ is the critical value from the standard normal distribution such that the area in the upper tail is $\alpha$. This corresponds to a $(1-\alpha)$ confidence level for the upper bound. For example, for 95% confidence in the upper bound ($\alpha = 0.05$), $z_{0.05} \approx 1.645$.

**Interpretation:**
We are $(1-\alpha) \times 100\%$ confident that the true population mean $\mu$ is less than or equal to $\bar{x} + z_{\alpha} \left(\frac{s}{\sqrt{n}}\right)$.

#### 3.2. Lower Confidence Bound

We want to find a value $L$ such that we are $(1-\alpha) \times 100\%$ confident that $\mu \ge L$.

**Formula for a $(1-\alpha) \times 100\%$ Lower Confidence Bound for $\mu$ (large $n$):**

$$ \mu \ge \bar{x} - z_{\alpha} \left(\frac{s}{\sqrt{n}}\right) $$

Here, $z_{\alpha}$ is the critical value from the standard normal distribution such that the area in the lower tail is $\alpha$. This corresponds to a $(1-\alpha)$ confidence level for the lower bound. For example, for 95% confidence in the lower bound ($\alpha = 0.05$), $z_{0.05} \approx 1.645$.

**Interpretation:**
We are $(1-\alpha) \times 100\%$ confident that the true population mean $\mu$ is greater than or equal to $\bar{x} - z_{\alpha} \left(\frac{s}{\sqrt{n}}\right)$.

**Textbook Reference:** Devore, Chapter 7.3 (The concept of confidence is extended to one-sided intervals)

**Example 3: Component Lifetime**
An engineer wants to ensure that a new type of capacitor has a mean lifetime of at least 10,000 hours with 90% confidence. A sample of 60 capacitors is tested, yielding a sample mean lifetime of 10,350 hours and a sample standard deviation of 800 hours.

*   $n = 60$ (large sample)
*   $\bar{x} = 10,350$ hours
*   $s = 800$ hours
*   Confidence level for lower bound = 90%, so $\alpha = 0.10$, and $z_{\alpha} = z_{0.10} \approx 1.282$.

**Calculation:**
Standard Error = $\frac{s}{\sqrt{n}} = \frac{800}{\sqrt{60}} \approx \frac{800}{7.746} \approx 103.28$ hours
Lower Bound = $\bar{x} - z_{\alpha} \times \frac{s}{\sqrt{n}} = 10,350 - 1.282 \times 103.28$
Lower Bound $\approx 10,350 - 132.41 \approx 10,217.59$ hours

**Conclusion:** We are 90% confident that the true mean lifetime of the capacitors is at least 10,217.59 hours. Since this lower bound (10,217.59) is greater than the desired minimum of 10,000 hours, the engineer can be confident.

**Example 4: Power Consumption Limit**
A manufacturer of electronic devices wants to set an upper limit on the average power consumption of a new model. They want to be 99% confident that the mean power consumption is no more than 2.5 Watts. A sample of 40 devices is tested, and the sample mean power consumption is 2.3 Watts with a sample standard deviation of 0.4 Watts.

*   $n = 40$ (large sample)
*   $\bar{x} = 2.3$ W
*   $s = 0.4$ W
*   Confidence level for upper bound = 99%, so $\alpha = 0.01$, and $z_{\alpha} = z_{0.01} \approx 2.326$.

**Calculation:**
Standard Error = $\frac{s}{\sqrt{n}} = \frac{0.4}{\sqrt{40}} \approx \frac{0.4}{6.325} \approx 0.0632$ W
Upper Bound = $\bar{x} + z_{\alpha} \times \frac{s}{\sqrt{n}} = 2.3 + 2.326 \times 0.0632$
Upper Bound $\approx 2.3 + 0.147 \approx 2.447$ W

**Conclusion:** We are 99% confident that the true mean power consumption of the devices is no more than 2.447 Watts. Since this upper bound (2.447) is less than the desired maximum of 2.5 Watts, the manufacturer can confidently set the upper limit at 2.5 Watts.

### 4. Connection to Course Outcomes (COs)

*   **CO1 & CO2 (Discrete & Continuous Random Variables):** While this module focuses on parameters, the concept of random variables and their distributions (especially the normal distribution via CLT) is foundational. The sample mean $\bar{X}$ is itself a random variable with a distribution.
*   **CO3 (Estimate population parameters, assess certainty with confidence intervals):** This module directly addresses estimating the population mean ($\mu$) using confidence intervals (both two-sided and one-sided) and quantifying the certainty of these estimates. The use of sample statistics ($\bar{x}, s$) to infer about population parameters ($\mu$) is the core of this CO. The knowledge level K3 (Apply) is met by being able to calculate these intervals and interpret their meaning in practical scenarios.
*   **CO4 (Analyze random processes):** Not directly covered in this specific topic, but the understanding of statistical properties like mean and variance is a precursor to analyzing random processes.

### 5. Important Points to Remember

*   **Large Sample Assumption ($n \ge 30$):** The formulas using $z$-scores for confidence intervals for the mean are valid for large sample sizes due to the Central Limit Theorem.
*   **Population Standard Deviation ($\sigma$):** If $\sigma$ is known, use $z_{\alpha/2} (\sigma/\sqrt{n})$ as the standard error. If $\sigma$ is unknown and $n$ is large, use the sample standard deviation $s$ as an estimate: $z_{\alpha/2} (s/\sqrt{n})$.
*   **Interpretation of Confidence Intervals:** Confidence intervals express the reliability of the *method*, not the probability of a specific interval containing the true parameter.
*   **One-Sided Intervals:** Useful for establishing lower or upper bounds on a parameter. For an upper bound $\mu \le U$, use $z_{\alpha}$. For a lower bound $\mu \ge L$, use $z_{\alpha}$. The choice of $z_{\alpha}$ depends on the tail probability for the desired confidence.
*   **Sample Size Calculation:** Crucial for ensuring a desired level of precision (margin of error) at a specified confidence level. Always round up the calculated sample size.

### 6. Practice Questions

**Question 1:**
A batch of resistors is manufactured with an expected average resistance. A sample of 100 resistors is taken, and the sample mean resistance is measured as 100.5 ohms with a sample standard deviation of 5.0 ohms.
a) Calculate a 95% confidence interval for the true mean resistance of the resistors.
b) Calculate a 99% confidence interval for the true mean resistance of the resistors.
c) Interpret the difference between the intervals calculated in (a) and (b).

**Question 2:**
An engineer is testing the durability of electronic components. They want to be 90% confident that the mean time to failure is at least 5000 hours. A sample of 80 components is tested, yielding a sample mean time to failure of 5250 hours and a sample standard deviation of 600 hours.
a) Calculate a 90% lower confidence bound for the mean time to failure.
b) Based on your result, can the engineer be confident that the mean time to failure is at least 5000 hours?

**Question 3:**
A company wants to estimate the average processing time for a new algorithm used in signal processing. They want the margin of error to be no more than 0.2 seconds with 98% confidence. A preliminary study suggests the standard deviation is around 1.5 seconds. How many runs of the algorithm are needed to achieve this?

---

### Answers to Practice Questions

**Answer 1:**
*   $n = 100$, $\bar{x} = 100.5$ ohms, $s = 5.0$ ohms. Standard Error = $\frac{s}{\sqrt{n}} = \frac{5.0}{\sqrt{100}} = \frac{5.0}{10} = 0.5$ ohms.

    a) **95% CI:** $z_{0.025} \approx 1.96$.
       Margin of Error = $1.96 \times 0.5 = 0.98$ ohms.
       CI: $100.5 \pm 0.98 \implies [99.52, 110.48]$ ohms.

    b) **99% CI:** $z_{0.005} \approx 2.576$.
       Margin of Error = $2.576 \times 0.5 = 1.288$ ohms.
       CI: $100.5 \pm 1.288 \implies [99.212, 111.788]$ ohms.

    c) **Interpretation:** The 99% confidence interval is wider than the 95% confidence interval. This is because to be more confident (99% vs 95%), we need to capture a larger range of possible values for the true mean, thus increasing the margin of error.

**Answer 2:**
*   $n = 80$, $\bar{x} = 5250$ hours, $s = 600$ hours. Confidence = 90% (lower bound), so $\alpha = 0.10$, $z_{0.10} \approx 1.282$.
    Standard Error = $\frac{s}{\sqrt{n}} = \frac{600}{\sqrt{80}} \approx \frac{600}{8.944} \approx 67.08$ hours.

    a) **90% Lower Confidence Bound:**
       Lower Bound = $\bar{x} - z_{\alpha} \times \frac{s}{\sqrt{n}} = 5250 - 1.282 \times 67.08$
       Lower Bound $\approx 5250 - 85.95 \approx 5164.05$ hours.
       So, $\mu \ge 5164.05$ hours.

    b) **Conclusion:** Yes, the engineer can be confident. The 90% lower confidence bound for the mean time to failure is approximately 5164.05 hours, which is greater than the desired minimum of 5000 hours.

**Answer 3:**
*   Desired ME = 0.2 seconds. Confidence = 98%, so $\alpha = 0.02$, $z_{0.01} \approx 2.326$.
    Estimated $\sigma = 1.5$ seconds.

    **Sample Size Calculation:**
    $n = \left( \frac{z_{\alpha/2} \cdot \sigma}{ME} \right)^2 = \left( \frac{2.326 \cdot 1.5}{0.2} \right)^2$
    $n = \left( \frac{3.489}{0.2} \right)^2 = (17.445)^2 \approx 304.31$

    **Conclusion:** The company needs to run the algorithm at least 305 times.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
