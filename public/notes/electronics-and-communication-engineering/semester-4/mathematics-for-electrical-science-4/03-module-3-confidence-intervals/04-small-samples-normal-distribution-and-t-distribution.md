---
title: "small samples (normal distribution and  t-distribution)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4cd"
status: "completed"
scrapedAt: "2026-05-23T17:50:49.218Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4: Confidence Intervals

## Module 3: Confidence Intervals

### Topic: Small Samples (Normal Distribution and t-Distribution)

This module focuses on constructing confidence intervals for population parameters when dealing with small sample sizes. We will explore the use of the t-distribution, a crucial tool when the population standard deviation is unknown and the sample size is small.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of confidence intervals for population means with small sample sizes.
*   Distinguish between scenarios where the z-distribution and the t-distribution are appropriate.
*   Calculate confidence intervals for a population mean when the population standard deviation is unknown and the sample size is small, using the t-distribution.
*   Interpret confidence intervals in the context of engineering problems.
*   Understand the role of degrees of freedom in the t-distribution.
*   Relate the construction of confidence intervals to hypothesis testing concepts (as per CO3).

---

### 1. Introduction to Confidence Intervals

**Definition:** A confidence interval (CI) is a range of values, derived from sample statistics, that is likely to contain the value of an unknown population parameter.

**Purpose:** To provide a measure of the uncertainty associated with estimating a population parameter from a sample.

**Key Components of a Confidence Interval:**

*   **Point Estimate:** A single value calculated from the sample that estimates the population parameter. For the population mean ($\mu$), the point estimate is the sample mean ($\bar{x}$).
*   **Margin of Error:** A value that defines the width of the confidence interval. It represents the maximum likely difference between the point estimate and the true population parameter.

---

### 2. Confidence Intervals for the Population Mean ($\mu$)

#### 2.1 Large Sample Case (Recap)

When the sample size ($n$) is large (typically $n \ge 30$) and the population standard deviation ($\sigma$) is known, we use the **z-distribution** to construct a confidence interval for the population mean:

$$ CI = \bar{x} \pm z_{\alpha/2} \frac{\sigma}{\sqrt{n}} $$

Where:
*   $\bar{x}$ is the sample mean.
*   $z_{\alpha/2}$ is the critical z-value for a given confidence level ($1-\alpha$).
*   $\sigma$ is the population standard deviation.
*   $n$ is the sample size.

**Important Note:** The z-distribution is also often used when $\sigma$ is unknown but the sample size is large, by replacing $\sigma$ with the sample standard deviation ($s$). This is due to the Central Limit Theorem.

#### 2.2 Small Sample Case: The Problem

When the sample size ($n$) is small (typically $n < 30$) and the population standard deviation ($\sigma$) is **unknown**, the z-distribution is no longer appropriate for constructing confidence intervals for the population mean. This is because the sample standard deviation ($s$) becomes a less reliable estimate of $\sigma$ for small samples, leading to an underestimation of the true variability.

**Devore (9th ed., p. 260) highlights:** "When $\sigma$ is unknown, we must use the sample standard deviation $s$ to estimate $\sigma$. If the sample size is small, using $s$ instead of $\sigma$ leads to a wider interval than would be obtained if $\sigma$ were known, and the distribution used must account for this extra variability."

#### 2.3 The t-Distribution

To address the issue of unknown population standard deviation with small samples, we use the **Student's t-distribution** (or simply t-distribution).

**Key Characteristics of the t-Distribution:**

*   **Family of Distributions:** The t-distribution is not a single distribution but a family of distributions, each characterized by a parameter called **degrees of freedom (df)**.
*   **Symmetric:** Like the normal distribution, the t-distribution is symmetric about zero.
*   **Heavier Tails:** The t-distribution has heavier tails than the standard normal (z) distribution. This means that extreme values are more likely to occur in the t-distribution. This accounts for the extra uncertainty introduced by estimating $\sigma$ with $s$.
*   **Depends on Degrees of Freedom:** As the degrees of freedom increase, the t-distribution approaches the standard normal distribution.
*   **Notation:** $t_{\nu}$ where $\nu$ represents the degrees of freedom.

**Veerarajan (3rd ed., p. 276) states:** "If $X$ is a normally distributed random variable with mean $\mu$ and unknown variance $\sigma^2$, then the statistic $T = \frac{\bar{X} - \mu}{S/\sqrt{n}}$ follows a t-distribution with $n-1$ degrees of freedom."

**Degrees of Freedom (df):**

For a confidence interval for a single population mean, the degrees of freedom are calculated as:

$$ df = n - 1 $$

Where $n$ is the sample size. The subtraction of 1 accounts for the fact that the sample mean is used to calculate the sample standard deviation.

#### 2.4 Constructing a Confidence Interval using the t-Distribution

When the population is normally distributed (or approximately so), the sample size is small, and the population standard deviation ($\sigma$) is unknown, the confidence interval for the population mean ($\mu$) is given by:

$$ CI = \bar{x} \pm t_{\alpha/2, df} \frac{s}{\sqrt{n}} $$

Where:
*   $\bar{x}$ is the sample mean.
*   $t_{\alpha/2, df}$ is the critical t-value for a given confidence level ($1-\alpha$) and degrees of freedom ($df = n-1$). This value is obtained from a t-distribution table or statistical software.
*   $s$ is the sample standard deviation.
*   $n$ is the sample size.

**Margin of Error (ME) for t-distribution:**

$$ ME = t_{\alpha/2, df} \frac{s}{\sqrt{n}} $$

---

### 3. Assumptions for Using the t-Distribution for Confidence Intervals

1.  **Random Sample:** The data must be from a random sample of the population.
2.  **Normality:** The population from which the sample is drawn is approximately normally distributed.
    *   **How to check?** For small samples, graphical methods like histograms, Q-Q plots, or formal normality tests (like the Shapiro-Wilk test) can be used. However, the t-distribution is relatively robust to moderate departures from normality, especially if the sample is reasonably symmetric.
3.  **Independence:** The sample observations are independent.

**Ross (6th ed., p. 250) emphasizes:** "The validity of the t-distribution confidence interval relies on the assumption that the data are sampled from a normal population. While the procedure is reasonably robust to mild departures from normality, significant skewness or outliers can distort the interval."

---

### 4. Using the t-Distribution Table (or Software)

To find the critical t-value ($t_{\alpha/2, df}$), you need a t-distribution table or statistical software.

**How to read a t-distribution table:**

*   **Rows:** Typically represent the degrees of freedom ($df$).
*   **Columns:** Represent the cumulative probability (or the area in the tail).
*   You need to find the t-value such that the area in the upper tail is $\alpha/2$. This corresponds to a cumulative probability of $1 - \alpha/2$.

**Example:** For a 95% confidence interval ($\alpha = 0.05$) and a sample size of $n=10$ ($df = 9$), you would look for the t-value in the row for $df=9$ and the column corresponding to an upper tail area of $0.025$ (or a cumulative probability of $0.975$).

---

### 5. Examples

**Example 1: Average Strength of a New Material**

An engineer wants to estimate the average tensile strength of a new composite material. A random sample of 15 specimens yielded the following strengths (in MPa):

320, 315, 325, 330, 310, 322, 318, 328, 335, 312, 324, 319, 326, 332, 317

Construct a 95% confidence interval for the average tensile strength of the material.

**Solution:**

1.  **Calculate Sample Mean ($\bar{x}$):**
    Sum of strengths = 320 + 315 + 325 + 330 + 310 + 322 + 318 + 328 + 335 + 312 + 324 + 319 + 326 + 332 + 317 = 4833
    $\bar{x} = \frac{4833}{15} = 322.2$ MPa

2.  **Calculate Sample Standard Deviation ($s$):**
    First, calculate the variance ($s^2$):
    $\sum (x_i - \bar{x})^2 =$ (320-322.2)^2 + (315-322.2)^2 + ... + (317-322.2)^2
    $\sum (x_i - \bar{x})^2 \approx 1173.73$
    $s^2 = \frac{\sum (x_i - \bar{x})^2}{n-1} = \frac{1173.73}{14} \approx 83.838$
    $s = \sqrt{83.838} \approx 9.156$ MPa

3.  **Determine Degrees of Freedom ($df$):**
    $n = 15$
    $df = n - 1 = 15 - 1 = 14$

4.  **Find the Critical t-value ($t_{\alpha/2, df}$):**
    For a 95% confidence interval, $\alpha = 0.05$. We need $t_{\alpha/2, 14} = t_{0.025, 14}$.
    Looking at a t-distribution table, $t_{0.025, 14} \approx 2.145$.

5.  **Calculate the Margin of Error (ME):**
    $ME = t_{\alpha/2, df} \frac{s}{\sqrt{n}} = 2.145 \times \frac{9.156}{\sqrt{15}} = 2.145 \times \frac{9.156}{3.873} \approx 2.145 \times 2.364 \approx 5.072$ MPa

6.  **Construct the Confidence Interval:**
    $CI = \bar{x} \pm ME = 322.2 \pm 5.072$
    Lower bound = $322.2 - 5.072 = 317.128$ MPa
    Upper bound = $322.2 + 5.072 = 327.272$ MPa

    **Interpretation:** We are 95% confident that the true average tensile strength of the new composite material lies between 317.13 MPa and 327.27 MPa.

**Example 2: Performance of a Sensor**

A quality control engineer for a sensor manufacturing company wants to estimate the average voltage output of a particular sensor type. A sample of 8 sensors is tested, and the voltage outputs (in Volts) are:

1.52, 1.49, 1.55, 1.51, 1.53, 1.50, 1.54, 1.56

Construct a 90% confidence interval for the average voltage output.

**Solution:**

1.  **Sample Mean ($\bar{x}$):**
    Sum = 1.52 + 1.49 + 1.55 + 1.51 + 1.53 + 1.50 + 1.54 + 1.56 = 12.20
    $\bar{x} = \frac{12.20}{8} = 1.525$ Volts

2.  **Sample Standard Deviation ($s$):**
    $\sum (x_i - \bar{x})^2 =$ (1.52-1.525)^2 + (1.49-1.525)^2 + ... + (1.56-1.525)^2
    $\sum (x_i - \bar{x})^2 \approx 0.00725$
    $s^2 = \frac{0.00725}{8-1} = \frac{0.00725}{7} \approx 0.0010357$
    $s = \sqrt{0.0010357} \approx 0.03218$ Volts

3.  **Degrees of Freedom ($df$):**
    $n = 8$
    $df = n - 1 = 8 - 1 = 7$

4.  **Critical t-value ($t_{\alpha/2, df}$):**
    For a 90% confidence interval, $\alpha = 0.10$. We need $t_{\alpha/2, 7} = t_{0.05, 7}$.
    From a t-distribution table, $t_{0.05, 7} \approx 1.895$.

5.  **Margin of Error (ME):**
    $ME = t_{\alpha/2, df} \frac{s}{\sqrt{n}} = 1.895 \times \frac{0.03218}{\sqrt{8}} = 1.895 \times \frac{0.03218}{2.828} \approx 1.895 \times 0.01138 \approx 0.02157$ Volts

6.  **Confidence Interval:**
    $CI = \bar{x} \pm ME = 1.525 \pm 0.02157$
    Lower bound = $1.525 - 0.02157 = 1.50343$ Volts
    Upper bound = $1.525 + 0.02157 = 1.54657$ Volts

    **Interpretation:** We are 90% confident that the true average voltage output of this sensor type is between 1.503 Volts and 1.547 Volts.

---

### 6. Relationship to Hypothesis Testing (CO3)

The construction of a confidence interval is closely related to hypothesis testing.

*   **Confidence Interval as a Range of Plausible Values:** A confidence interval provides a range of values for the population parameter that are considered plausible, given the sample data.
*   **Hypothesis Testing:** In hypothesis testing, we test a specific null hypothesis about the population parameter.
*   **Connection:** If a specific value for the population mean ($\mu_0$) falls within a $(1-\alpha)$ confidence interval for $\mu$, then we would not reject the null hypothesis $H_0: \mu = \mu_0$ at the $\alpha$ significance level. Conversely, if $\mu_0$ falls outside the confidence interval, we would reject $H_0$.

**Example:** If our 95% confidence interval for the average tensile strength was (317.13, 327.27) MPa, and we wanted to test $H_0: \mu = 320$ MPa at $\alpha = 0.05$, since 320 falls within the interval, we would not reject $H_0$. If we wanted to test $H_0: \mu = 330$ MPa, since 330 is outside the interval, we would reject $H_0$.

---

### 7. Important Points to Remember

*   **When to use t-distribution:** Use the t-distribution when the sample size is small ($n < 30$) AND the population standard deviation ($\sigma$) is unknown.
*   **Assumption of Normality:** The t-distribution method relies on the assumption that the population is normally distributed. While robust to minor deviations, significant departures can impact the validity.
*   **Degrees of Freedom:** Crucial for identifying the correct t-value. Always calculate as $df = n - 1$.
*   **Heavier Tails:** The t-distribution's heavier tails account for the increased uncertainty due to estimating $\sigma$ with $s$.
*   **Interval Width:** For a fixed confidence level, the width of a t-interval increases as the sample size decreases (due to a larger $t_{\alpha/2, df}$ and a smaller $\sqrt{n}$).
*   **Confidence Level vs. Interval Width:** A higher confidence level (e.g., 99% vs. 95%) leads to a wider interval, reflecting greater certainty but less precision.

---

### 8. Practice Questions

1.  A sample of 20 measurements of the diameter of a precision shaft is taken. The sample mean is 10.05 mm and the sample standard deviation is 0.02 mm. Assuming the population of diameters is normally distributed, construct a 99% confidence interval for the true mean diameter.
    *(Hint: $df = 19$, $t_{0.005, 19} \approx 2.861$)*

2.  An electrical engineer tests a sample of 12 integrated circuits to estimate the average resistance of a new design. The sample resistances (in k$\Omega$) are: 4.7, 4.9, 4.6, 4.8, 5.0, 4.7, 4.9, 4.8, 5.1, 4.7, 4.9, 4.8.
    Construct a 95% confidence interval for the average resistance.
    *(Hint: Calculate $\bar{x}$ and $s$ first. $df=11$. You will need to find $t_{0.025, 11}$ from a t-table.)*

3.  Explain the difference between using a z-distribution and a t-distribution for constructing confidence intervals for the population mean. Under what conditions is each used?

4.  A manufacturing process produces bolts. A quality inspector takes a sample of 10 bolts and measures their lengths. The sample mean is 50.1 mm and the sample standard deviation is 0.3 mm.
    a. Construct a 90% confidence interval for the mean length of the bolts.
    b. Interpret the interval.
    *(Hint: $df=9$, $t_{0.05, 9} \approx 1.833$)*

---

### 9. Answers to Practice Questions

1.  **Calculations:**
    $\bar{x} = 10.05$ mm
    $s = 0.02$ mm
    $n = 20$
    $df = 19$
    Confidence level = 99%, so $\alpha = 0.01$. We need $t_{\alpha/2, 19} = t_{0.005, 19} \approx 2.861$.

    **Margin of Error (ME):**
    $ME = t_{\alpha/2, df} \frac{s}{\sqrt{n}} = 2.861 \times \frac{0.02}{\sqrt{20}} \approx 2.861 \times \frac{0.02}{4.472} \approx 2.861 \times 0.00447 \approx 0.0128$ mm

    **Confidence Interval:**
    $CI = 10.05 \pm 0.0128$
    Lower bound = $10.0372$ mm
    Upper bound = $10.0628$ mm

    **Answer:** The 99% confidence interval is (10.037 mm, 10.063 mm).

2.  **Calculations:**
    Resistances: 4.7, 4.9, 4.6, 4.8, 5.0, 4.7, 4.9, 4.8, 5.1, 4.7, 4.9, 4.8
    Sum = 57.7
    $\bar{x} = \frac{57.7}{12} = 4.8083$ k$\Omega$

    $\sum (x_i - \bar{x})^2 \approx 0.38375$
    $s^2 = \frac{0.38375}{11} \approx 0.034886$
    $s = \sqrt{0.034886} \approx 0.18678$ k$\Omega$

    $n = 12$
    $df = 11$
    Confidence level = 95%, so $\alpha = 0.05$. We need $t_{\alpha/2, 11} = t_{0.025, 11}$. From a t-table, $t_{0.025, 11} \approx 2.201$.

    **Margin of Error (ME):**
    $ME = 2.201 \times \frac{0.18678}{\sqrt{12}} \approx 2.201 \times \frac{0.18678}{3.464} \approx 2.201 \times 0.05392 \approx 0.1187$ k$\Omega$

    **Confidence Interval:**
    $CI = 4.8083 \pm 0.1187$
    Lower bound = $4.6896$ k$\Omega$
    Upper bound = $4.9270$ k$\Omega$

    **Answer:** The 95% confidence interval is (4.690 k$\Omega$, 4.927 k$\Omega$).

3.  **Answer:**
    *   **z-distribution:** Used when the population standard deviation ($\sigma$) is **known**, regardless of sample size, or when the sample size is **large** ($n \ge 30$) and $\sigma$ is unknown (using $s$ as an estimate).
    *   **t-distribution:** Used when the sample size is **small** ($n < 30$) AND the population standard deviation ($\sigma$) is **unknown**. It accounts for the additional uncertainty from estimating $\sigma$ with the sample standard deviation ($s$). The t-distribution has heavier tails than the z-distribution to reflect this extra variability.

4.  **Answer:**
    a. **Calculations:**
       $\bar{x} = 50.1$ mm
       $s = 0.3$ mm
       $n = 10$
       $df = 9$
       Confidence level = 90%, so $\alpha = 0.10$. We need $t_{\alpha/2, 9} = t_{0.05, 9} \approx 1.833$.

       **Margin of Error (ME):**
       $ME = 1.833 \times \frac{0.3}{\sqrt{10}} \approx 1.833 \times \frac{0.3}{3.162} \approx 1.833 \times 0.09487 \approx 0.1739$ mm

       **Confidence Interval:**
       $CI = 50.1 \pm 0.1739$
       Lower bound = $49.9261$ mm
       Upper bound = $50.2739$ mm

       **Answer:** The 90% confidence interval for the mean length of the bolts is (49.926 mm, 50.274 mm).

    b. **Interpretation:** We are 90% confident that the true average length of the bolts produced by this process lies between 49.926 mm and 50.274 mm.

---
This concludes Module 3, Topic: Small Samples (Normal Distribution and t-Distribution). This topic is fundamental for making reliable inferences about population means when dealing with limited data. Remember to always check the assumptions and use the appropriate distribution (z or t) based on the information available about the population standard deviation and the sample size.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
