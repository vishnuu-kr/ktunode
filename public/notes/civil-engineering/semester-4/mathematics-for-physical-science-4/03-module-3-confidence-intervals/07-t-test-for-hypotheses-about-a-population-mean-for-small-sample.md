---
title: "t Test for Hypotheses about a Population Mean (for small sample)"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 3: Confidence Intervals"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810938"
status: "completed"
scrapedAt: "2026-05-20T18:46:10.584Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 3: Confidence Intervals

### Topic: t-Test for Hypotheses about a Population Mean (for Small Sample)

---

### 1. Learning Outcomes

By the end of this topic, you should be able to:

*   **Understand** the conditions under which the t-test is appropriate for hypothesis testing about a population mean, especially for small sample sizes.
*   **Formulate** null and alternative hypotheses for a population mean.
*   **Calculate** the t-statistic for a sample mean.
*   **Determine** the degrees of freedom for the t-distribution.
*   **Find** critical values from the t-distribution table.
*   **Interpret** the results of a t-test in the context of the problem.
*   **Compare** the t-test to the z-test for population means.

---

### 2. Key Concepts and Definitions

#### 2.1. Hypothesis Testing

Hypothesis testing is a statistical method used to make decisions about a population based on sample data. It involves setting up two competing statements about a population parameter (in this case, the population mean, $\mu$) and using sample data to determine which statement is more likely to be true.

#### 2.2. Null Hypothesis ($H_0$) and Alternative Hypothesis ($H_1$ or $H_a$)

*   **Null Hypothesis ($H_0$)**: A statement of no effect or no difference. It typically states that the population mean is equal to a specific value.
    *   Example: $H_0: \mu = \mu_0$ (where $\mu_0$ is a hypothesized population mean).
*   **Alternative Hypothesis ($H_1$ or $H_a$)**: A statement that contradicts the null hypothesis. It can be one-sided (greater than or less than) or two-sided (not equal to).
    *   Example (Two-sided): $H_1: \mu \neq \mu_0$
    *   Example (One-sided, greater than): $H_1: \mu > \mu_0$
    *   Example (One-sided, less than): $H_1: \mu < \mu_0$

#### 2.3. When to Use the t-Test vs. the z-Test

| Feature                     | z-Test for Population Mean                                 | t-Test for Population Mean                               |
| :-------------------------- | :--------------------------------------------------------- | :------------------------------------------------------- |
| **Population Standard Deviation ($\sigma$)** | **Known**                                                  | **Unknown** (estimated by sample standard deviation, $s$) |
| **Sample Size (n)**         | Generally large ($n \ge 30$)                             | **Small ($n < 30$)**                                     |
| **Distribution of Sample Means** | Approximately normal (due to Central Limit Theorem if $n \ge 30$) | **t-distribution** (especially if population is normally distributed or $n$ is small) |

**Important:** The t-test is crucial when the population standard deviation ($\sigma$) is unknown, which is very common in real-world scenarios, and the sample size is small.

#### 2.4. The t-Distribution

*   The t-distribution is a probability distribution that is similar to the normal distribution but has heavier tails. This means there is a higher probability of observing extreme values.
*   It is characterized by its **degrees of freedom (df)**.
*   As the degrees of freedom increase, the t-distribution approaches the standard normal (z) distribution.

#### 2.5. Degrees of Freedom (df)

For a single sample t-test, the degrees of freedom are calculated as:
$df = n - 1$
where $n$ is the sample size.

#### 2.6. The t-Statistic

The t-statistic measures how many standard errors the sample mean ($\bar{x}$) is away from the hypothesized population mean ($\mu_0$).
The formula for the t-statistic is:

$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$

where:
*   $\bar{x}$ = sample mean
*   $\mu_0$ = hypothesized population mean
*   $s$ = sample standard deviation
*   $n$ = sample size

#### 2.7. Critical Values and p-Values

*   **Critical Value**: The threshold value from the t-distribution that separates the rejection region from the non-rejection region. The critical value depends on the significance level ($\alpha$) and the degrees of freedom ($df$).
*   **p-Value**: The probability of observing a test statistic as extreme as, or more extreme than, the one calculated from the sample data, assuming the null hypothesis is true.

#### 2.8. Decision Rule

*   **Using Critical Values**:
    *   If the calculated t-statistic falls into the rejection region (i.e., is more extreme than the critical value), we reject $H_0$.
    *   If the calculated t-statistic does not fall into the rejection region, we fail to reject $H_0$.
*   **Using p-Values**:
    *   If $p \text{-value} \le \alpha$, reject $H_0$.
    *   If $p \text{-value} > \alpha$, fail to reject $H_0$.

The significance level ($\alpha$) is the probability of rejecting the null hypothesis when it is actually true (Type I error). Common values for $\alpha$ are 0.05, 0.01, or 0.10.

#### 2.9. Conditions for Using the t-Test

1.  **Random Sample**: The data should be collected from a random sample of the population.
2.  **Independence**: The observations within the sample should be independent of each other.
3.  **Normality (or approximately normal)**: The population from which the sample is drawn should be approximately normally distributed. For small samples, this condition is more critical. If the sample size is very small ($n < 10$), the data should be reasonably close to normal. If the sample size is moderate ($10 \le n < 30$), the t-test is still robust to moderate deviations from normality.

---

### 3. Steps for Conducting a t-Test

1.  **State the Hypotheses**: Clearly define $H_0$ and $H_1$.
2.  **Determine the Significance Level ($\alpha$)**: Choose the desired level of significance.
3.  **Calculate the Test Statistic**: Compute the t-statistic using the formula: $t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$.
4.  **Determine the Degrees of Freedom**: Calculate $df = n - 1$.
5.  **Find the Critical Value(s) or p-Value**:
    *   **Critical Value Approach**: Look up the critical t-value in a t-distribution table for the given $\alpha$ and $df$. This will be a one-tailed or two-tailed value depending on $H_1$.
    *   **p-Value Approach**: Use statistical software or a t-distribution calculator to find the p-value associated with the calculated t-statistic and $df$.
6.  **Make a Decision**: Compare the test statistic to the critical value(s) or compare the p-value to $\alpha$.
7.  **Interpret the Results**: State the conclusion in the context of the original problem, specifying whether $H_0$ is rejected or not and what that means.

---

### 4. Examples

#### Example 1: One-Tailed t-Test (Increased Strength)

A researcher is investigating whether a new training program increases the strength of athletes. A sample of 15 athletes who underwent the program had an average increase in lifting weight of 25 kg with a sample standard deviation of 8 kg. The historical average increase for athletes without the program is 20 kg.

**Problem:** Test the hypothesis that the new training program increases the average lifting weight by more than 20 kg. Use a significance level of $\alpha = 0.05$.

**Solution:**

1.  **State the Hypotheses**:
    *   $H_0: \mu = 20$ (The mean increase in lifting weight is 20 kg)
    *   $H_1: \mu > 20$ (The mean increase in lifting weight is greater than 20 kg)
    *   This is a one-tailed (right-tailed) test.

2.  **Significance Level**: $\alpha = 0.05$.

3.  **Calculate the Test Statistic**:
    *   $\bar{x} = 25$ kg
    *   $\mu_0 = 20$ kg
    *   $s = 8$ kg
    *   $n = 15$
    *   $t = \frac{25 - 20}{8 / \sqrt{15}} = \frac{5}{8 / 3.873} = \frac{5}{2.065} \approx 2.421$

4.  **Determine Degrees of Freedom**:
    *   $df = n - 1 = 15 - 1 = 14$

5.  **Find the Critical Value**:
    *   For a one-tailed test with $\alpha = 0.05$ and $df = 14$, we look up the value in the t-distribution table.
    *   From a t-table, the critical value for a one-tailed test with $\alpha = 0.05$ and $df = 14$ is approximately $1.761$.
    *   **Critical Value = 1.761**

6.  **Make a Decision**:
    *   Our calculated t-statistic (2.421) is greater than the critical value (1.761).
    *   **Decision**: Reject $H_0$.

7.  **Interpret the Results**:
    *   At the 0.05 significance level, there is sufficient evidence to conclude that the new training program increases the average lifting weight by more than 20 kg.

---

#### Example 2: Two-Tailed t-Test (Difference from Standard)

A manufacturer claims that the average lifespan of their light bulbs is 1000 hours. A quality control engineer tests a sample of 10 bulbs and finds the following lifespans (in hours): 950, 980, 1020, 990, 1010, 970, 1030, 960, 1000, 995.

**Problem:** Test the manufacturer's claim that the average lifespan is 1000 hours. Use a significance level of $\alpha = 0.01$.

**Solution:**

1.  **State the Hypotheses**:
    *   $H_0: \mu = 1000$ (The mean lifespan is 1000 hours)
    *   $H_1: \mu \neq 1000$ (The mean lifespan is not 1000 hours)
    *   This is a two-tailed test.

2.  **Significance Level**: $\alpha = 0.01$.

3.  **Calculate the Test Statistic**:
    *   First, calculate the sample mean ($\bar{x}$) and sample standard deviation ($s$).
    *   Data: 950, 980, 1020, 990, 1010, 970, 1030, 960, 1000, 995
    *   $\sum x = 950 + 980 + 1020 + 990 + 1010 + 970 + 1030 + 960 + 1000 + 995 = 9905$
    *   $\bar{x} = \frac{9905}{10} = 990.5$ hours

    *   To calculate $s$, we first find the sample variance ($s^2$):
        $s^2 = \frac{\sum (x_i - \bar{x})^2}{n-1}$
        *   $(950-990.5)^2 = (-40.5)^2 = 1640.25$
        *   $(980-990.5)^2 = (-10.5)^2 = 110.25$
        *   $(1020-990.5)^2 = (29.5)^2 = 870.25$
        *   $(990-990.5)^2 = (-0.5)^2 = 0.25$
        *   $(1010-990.5)^2 = (19.5)^2 = 380.25$
        *   $(970-990.5)^2 = (-20.5)^2 = 420.25$
        *   $(1030-990.5)^2 = (39.5)^2 = 1560.25$
        *   $(960-990.5)^2 = (-30.5)^2 = 930.25$
        *   $(1000-990.5)^2 = (9.5)^2 = 90.25$
        *   $(995-990.5)^2 = (4.5)^2 = 20.25$
        *   $\sum (x_i - \bar{x})^2 = 1640.25 + 110.25 + 870.25 + 0.25 + 380.25 + 420.25 + 1560.25 + 930.25 + 90.25 + 20.25 = 6022.5$
        *   $s^2 = \frac{6022.5}{10-1} = \frac{6022.5}{9} \approx 669.17$
        *   $s = \sqrt{669.17} \approx 25.87$ hours

    *   Now, calculate the t-statistic:
        *   $\bar{x} = 990.5$
        *   $\mu_0 = 1000$
        *   $s = 25.87$
        *   $n = 10$
        *   $t = \frac{990.5 - 1000}{25.87 / \sqrt{10}} = \frac{-9.5}{25.87 / 3.162} = \frac{-9.5}{8.18} \approx -1.161$

4.  **Determine Degrees of Freedom**:
    *   $df = n - 1 = 10 - 1 = 9$

5.  **Find the Critical Values**:
    *   For a two-tailed test with $\alpha = 0.01$, we need to look up the critical values for $\alpha/2 = 0.005$ in each tail.
    *   From a t-distribution table, the critical t-values for $df = 9$ and $\alpha/2 = 0.005$ are approximately $\pm 3.250$.
    *   **Critical Values = $\pm 3.250$**

6.  **Make a Decision**:
    *   Our calculated t-statistic (-1.161) does not fall into the rejection region (i.e., it is between -3.250 and +3.250).
    *   **Decision**: Fail to reject $H_0$.

7.  **Interpret the Results**:
    *   At the 0.01 significance level, there is not enough evidence to reject the manufacturer's claim that the average lifespan of their light bulbs is 1000 hours.

---

### 5. Practice Questions

**Question 1:**
A sample of 20 students from a small college were tested on their knowledge of physics. The average score was 75 with a standard deviation of 12. The national average score for this test is 70.

a) State the null and alternative hypotheses to test if the students at this college score significantly higher than the national average.
b) Calculate the t-statistic.
c) Determine the degrees of freedom.
d) If the significance level is $\alpha = 0.05$, what is the critical value for this one-tailed test?
e) What is your decision regarding the null hypothesis? Interpret the result.

**Question 2:**
A new process for manufacturing small electronic components is being evaluated. The desired mean diameter is 5.00 mm. A sample of 8 components produced by the new process has a mean diameter of 5.03 mm and a sample standard deviation of 0.05 mm.

a) State the null and alternative hypotheses to test if the mean diameter of the components produced by the new process is different from 5.00 mm.
b) Calculate the t-statistic.
c) Determine the degrees of freedom.
d) If the significance level is $\alpha = 0.10$, what are the critical values for this two-tailed test?
e) What is your decision regarding the null hypothesis? Interpret the result.

---

### 6. Answers to Practice Questions

**Question 1:**

a) **Hypotheses**:
    *   $H_0: \mu = 70$ (The mean score for students at this college is 70)
    *   $H_1: \mu > 70$ (The mean score for students at this college is greater than 70)

b) **t-statistic**:
    *   $\bar{x} = 75$, $\mu_0 = 70$, $s = 12$, $n = 20$
    *   $t = \frac{75 - 70}{12 / \sqrt{20}} = \frac{5}{12 / 4.472} = \frac{5}{2.683} \approx 1.864$

c) **Degrees of Freedom**:
    *   $df = n - 1 = 20 - 1 = 19$

d) **Critical Value**:
    *   For a one-tailed test ($\alpha = 0.05$) and $df = 19$, the critical t-value is approximately $1.729$.

e) **Decision and Interpretation**:
    *   Since the calculated t-statistic (1.864) is greater than the critical value (1.729), we **reject $H_0$**.
    *   **Interpretation**: At the 0.05 significance level, there is sufficient evidence to conclude that the students at this college score significantly higher than the national average.

---

**Question 2:**

a) **Hypotheses**:
    *   $H_0: \mu = 5.00$ mm (The mean diameter is 5.00 mm)
    *   $H_1: \mu \neq 5.00$ mm (The mean diameter is different from 5.00 mm)

b) **t-statistic**:
    *   $\bar{x} = 5.03$, $\mu_0 = 5.00$, $s = 0.05$, $n = 8$
    *   $t = \frac{5.03 - 5.00}{0.05 / \sqrt{8}} = \frac{0.03}{0.05 / 2.828} = \frac{0.03}{0.0177} \approx 1.695$

c) **Degrees of Freedom**:
    *   $df = n - 1 = 8 - 1 = 7$

d) **Critical Values**:
    *   For a two-tailed test ($\alpha = 0.10$, so $\alpha/2 = 0.05$) and $df = 7$, the critical t-values are approximately $\pm 1.895$.

e) **Decision and Interpretation**:
    *   Since the calculated t-statistic (1.695) is not more extreme than the critical values ($\pm 1.895$), we **fail to reject $H_0$**.
    *   **Interpretation**: At the 0.10 significance level, there is not enough evidence to conclude that the mean diameter of components produced by the new process is different from 5.00 mm.

---

### 7. Important Points to Remember

*   **t-test is for unknown population standard deviation ($\sigma$)**, especially when the sample size ($n$) is small.
*   **Degrees of freedom ($df = n - 1$)** are crucial for finding the correct critical values from the t-distribution table.
*   **The t-distribution has heavier tails than the z-distribution**, meaning you need more extreme values to reject the null hypothesis.
*   **Check the conditions for using the t-test**: random sample, independence, and approximate normality of the population.
*   **Always state your hypotheses clearly** and identify whether it's a one-tailed or two-tailed test.
*   **Interpret your results in the context of the original problem**, not just in statistical terms.
*   **Failing to reject $H_0$ does not mean $H_0$ is true**, it simply means there isn't enough evidence to reject it at the chosen significance level.

---
---
