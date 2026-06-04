---
title: "Type I and Type II error"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ecc"
status: "completed"
scrapedAt: "2026-05-20T17:54:48.215Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 3: Confidence Intervals
### Topic: Type I and Type II Errors

---

### 1. Introduction to Hypothesis Testing

Hypothesis testing is a fundamental statistical method used to make decisions about a population based on sample data. It involves setting up two competing hypotheses: the **null hypothesis ($H_0$)** and the **alternative hypothesis ($H_1$)**.

*   **Null Hypothesis ($H_0$)**: This is a statement of no effect, no difference, or no relationship. It represents the status quo or the prevailing belief.
*   **Alternative Hypothesis ($H_1$ or $H_a$)**: This is a statement that contradicts the null hypothesis. It is what we are trying to find evidence for.

The goal of hypothesis testing is to determine whether there is enough evidence in the sample data to reject the null hypothesis in favor of the alternative hypothesis.

**Relevance to Physical Sciences:** Hypothesis testing is crucial for validating scientific theories, interpreting experimental results, and making informed decisions in research. For example, a physicist might test if a new material has a significantly different electrical conductivity than a standard material.

**Alignment with Course Outcomes:** This topic directly supports **CO3**, which focuses on testing hypotheses about population means and proportions.

---

### 2. Errors in Hypothesis Testing

When conducting a hypothesis test, we make a decision based on sample data. Since sample data is subject to random variation, there's always a possibility of making an incorrect decision. These incorrect decisions are classified into two types: Type I error and Type II error.

#### 2.1. Type I Error (False Positive)

*   **Definition**: A Type I error occurs when we **reject the null hypothesis ($H_0$)** when it is actually **true**.
*   **Analogy**: In a medical context, this would be diagnosing a healthy person as having a disease. In a legal context, it's convicting an innocent person.
*   **Symbol**: The probability of committing a Type I error is denoted by the Greek letter **alpha ($\alpha$)**.
*   **Significance Level**: The probability $\alpha$ is also known as the **significance level** of the test. When we set a significance level (e.g., $\alpha = 0.05$), we are pre-determining the maximum risk we are willing to take of making a Type I error.
*   **Control**: The researcher directly controls the probability of a Type I error by choosing the significance level $\alpha$. Common values for $\alpha$ are 0.01, 0.05, and 0.10.

**Example**:
Suppose a manufacturing company tests if the average weight of its product is 500 grams.
*   $H_0$: The average weight is 500 grams ($\mu = 500$).
*   $H_1$: The average weight is not 500 grams ($\mu \neq 500$).

A Type I error would occur if the company concludes that the average weight is *not* 500 grams (rejects $H_0$), when in reality, the average weight *is* 500 grams ( $H_0$ is true). This might lead to unnecessary adjustments in the manufacturing process.

**Textbook Reference**: Devore J. L. (9th ed., 2016), Chapter 9, discusses the general principles of hypothesis testing and the potential for errors.

---

#### 2.2. Type II Error (False Negative)

*   **Definition**: A Type II error occurs when we **fail to reject the null hypothesis ($H_0$)** when it is actually **false**.
*   **Analogy**: In a medical context, this would be failing to diagnose a sick person with the disease (they are actually sick but the test says they are not). In a legal context, it's acquitting a guilty person.
*   **Symbol**: The probability of committing a Type II error is denoted by the Greek letter **beta ($\beta$)**.
*   **Power of the Test**: The **power of a test** is defined as $1 - \beta$. It represents the probability of correctly rejecting a false null hypothesis. Higher power is desirable.
*   **Control**: The probability $\beta$ is not directly controlled by the researcher in the same way as $\alpha$. It depends on several factors, including the chosen significance level ($\alpha$), the sample size ($n$), the variability of the data (e.g., population standard deviation), and the magnitude of the true effect (the difference between the true parameter and the value stated in $H_0$).

**Example (Continuing the manufacturing example)**:
*   $H_0$: The average weight is 500 grams ($\mu = 500$).
*   $H_1$: The average weight is not 500 grams ($\mu \neq 500$).

A Type II error would occur if the company concludes that the average weight *is* 500 grams (fails to reject $H_0$), when in reality, the average weight is *not* 500 grams ( $H_0$ is false). This might lead to the company continuing to produce products with an incorrect average weight, potentially leading to customer dissatisfaction or regulatory issues.

**Textbook Reference**: Devore J. L. (9th ed., 2016), Chapter 9, elaborates on Type II errors and the concept of the power of a test.

---

### 3. Relationship Between Type I and Type II Errors

There is an inherent trade-off between Type I and Type II errors.

*   **Decreasing $\alpha$ (reducing the risk of Type I error) generally increases $\beta$ (increases the risk of Type II error)**. If we make it harder to reject $H_0$ (by using a smaller $\alpha$), we are more likely to fail to reject $H_0$ even when it is false.
*   **Increasing $\alpha$ (increasing the risk of Type I error) generally decreases $\beta$ (decreases the risk of Type II error)**. If we make it easier to reject $H_0$ (by using a larger $\alpha$), we are less likely to miss detecting a false $H_0$.

The decision on how to balance these errors depends on the consequences of each type of error in a specific context. In physical sciences, the cost of a Type I error (e.g., claiming a new discovery that isn't real) might be different from the cost of a Type II error (e.g., failing to detect a real phenomenon).

**Visualizing the Trade-off**: Imagine two bell curves representing the sampling distribution of a test statistic under $H_0$ and $H_1$. The significance level $\alpha$ defines a critical region for rejecting $H_0$. If you move the boundary for this critical region to make $\alpha$ smaller, you also move it further away from the center of the distribution under $H_1$, thereby increasing $\beta$.

**Key Point**: The primary goal is often to minimize both errors, but when a trade-off is necessary, the context dictates which error is more critical to avoid.

---

### 4. Calculating Type II Error Probability ($\beta$)

Calculating $\beta$ requires knowing the true value of the population parameter under the alternative hypothesis. This is often more complex than calculating $\alpha$.

The steps generally involve:
1.  **Specifying the null and alternative hypotheses**.
2.  **Choosing a significance level ($\alpha$)**.
3.  **Determining the test statistic and its sampling distribution**.
4.  **Defining a specific value for the parameter under $H_1$** (e.g., a specific value for $\mu$ if $H_1$ is $\mu \neq \mu_0$).
5.  **Identifying the critical region** based on $\alpha$.
6.  **Calculating the probability of the test statistic falling into the acceptance region** (i.e., not rejecting $H_0$) *given that the true parameter has the value specified in $H_1$*. This probability is $\beta$.

**Example (Continued from manufacturing, assuming known population variance)**:
*   $H_0$: $\mu = 500$ (Company assumes average weight is 500g)
*   $H_1$: $\mu \neq 500$
*   Population standard deviation $\sigma = 10$ grams (assumed known for simplicity in this example)
*   Sample size $n = 100$
*   Significance level $\alpha = 0.05$.
*   Suppose the true average weight is actually $\mu = 502$ grams.

**Steps to calculate $\beta$**:
1.  **Test Statistic**: For a known population variance, we use the z-test. The test statistic is $z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$.
2.  **Critical Region**: For $\alpha = 0.05$ and a two-tailed test, the critical values are $z_{critical} = \pm 1.96$. We reject $H_0$ if $|z| > 1.96$.
3.  **Acceptance Region**: We fail to reject $H_0$ if $-1.96 \le z \le 1.96$.
4.  **Calculate $\beta$**: We need to find the probability that the test statistic falls into the acceptance region when the true mean is $\mu = 502$.
    *   The sampling distribution of $\bar{x}$ when $\mu = 502$ is normal with mean $502$ and standard deviation $\sigma/\sqrt{n} = 10/\sqrt{100} = 1$.
    *   The acceptance region for $\bar{x}$ is determined by the critical z-values:
        *   Lower bound: $\bar{x}_{lower} = \mu_0 - 1.96 \times (\sigma/\sqrt{n}) = 500 - 1.96 \times 1 = 498.04$
        *   Upper bound: $\bar{x}_{upper} = \mu_0 + 1.96 \times (\sigma/\sqrt{n}) = 500 + 1.96 \times 1 = 501.96$
    *   So, we fail to reject $H_0$ if $498.04 \le \bar{x} \le 501.96$.
    *   Now, we find the probability of $\bar{x}$ falling in this range *given that the true mean is 502*. We convert the $\bar{x}$ values to z-scores using the true mean of 502:
        *   $z_{lower\_actual} = \frac{498.04 - 502}{1} = -3.96$
        *   $z_{upper\_actual} = \frac{501.96 - 502}{1} = -0.04$
    *   $\beta = P(-3.96 \le Z \le -0.04)$, where Z is a standard normal variable.
    *   Using a standard normal table or calculator:
        $P(Z \le -0.04) \approx 0.4840$
        $P(Z \le -3.96) \approx 0.00004$
        $\beta \approx 0.4840 - 0.00004 \approx 0.4840$

This means there is about a 48.4% chance of failing to detect that the average weight has shifted to 502 grams. This is a very high probability for $\beta$, indicating a low power ($1 - \beta \approx 0.516$).

**Textbook Reference**: Devore J. L. (9th ed., 2016), Chapter 9, provides detailed examples and methods for calculating Type II error probabilities for various hypothesis tests. Ross S. M. (6th ed., 2020) also covers these concepts in his treatment of hypothesis testing.

---

### 5. Factors Affecting Type II Error ($\beta$)

As mentioned earlier, several factors influence $\beta$:

1.  **Significance Level ($\alpha$)**: As $\alpha$ decreases, $\beta$ increases (and vice versa).
2.  **Sample Size ($n$)**: Increasing the sample size ($n$) decreases both $\alpha$ and $\beta$. A larger sample provides more information about the population, leading to more precise estimates and a greater ability to detect true differences.
3.  **Population Variability ($\sigma$ or $s$)**: Higher population variability (larger $\sigma$ or $s$) leads to a larger $\beta$. This is because more variability makes it harder to distinguish between the null and alternative hypotheses.
4.  **Magnitude of the Effect Size**: The difference between the true parameter value and the value specified in $H_0$ (the effect size) directly impacts $\beta$. A larger effect size makes it easier to detect the difference, thus reducing $\beta$. Conversely, a small effect size increases $\beta$.

**Example (Impact of Sample Size)**:
In the previous example, if we increased the sample size from $n=100$ to $n=400$, the standard error would decrease from $10/\sqrt{100}=1$ to $10/\sqrt{400}=0.5$. This would likely lead to a smaller $\beta$ for the same true mean of 502.

**Textbook Reference**: Devore J. L. (9th ed., 2016) details how sample size and effect size influence the power of a test and the probability of Type II error.

---

### 6. Strategies to Reduce Errors

*   **To Reduce Type I Error**: Primarily by choosing a smaller significance level ($\alpha$). However, this increases the risk of a Type II error.
*   **To Reduce Type II Error**:
    *   **Increase the sample size ($n$)**: This is often the most effective method as it reduces both $\alpha$ and $\beta$ simultaneously.
    *   **Increase the significance level ($\alpha$)**: This directly reduces $\beta$ but increases $\alpha$.
    *   **Improve the experimental design**: Reduce variability in measurements.
    *   **Increase the effect size**: While often not controllable, designing experiments to maximize the expected difference can help.

**Important Point**: The best strategy depends on the specific context and the relative costs of each type of error. In many scientific applications, maintaining a small $\alpha$ (e.g., 0.05) is standard, and efforts are focused on increasing the sample size to increase the power of the test (reduce $\beta$).

---

### 7. Practice Questions and Exercises

**Question 1:**
Define Type I error and Type II error in the context of hypothesis testing.

**Answer 1:**
*   **Type I Error**: Rejecting the null hypothesis ($H_0$) when it is actually true. The probability is denoted by $\alpha$.
*   **Type II Error**: Failing to reject the null hypothesis ($H_0$) when it is actually false. The probability is denoted by $\beta$.

---

**Question 2:**
A researcher is testing a new drug for its effectiveness.
$H_0$: The drug has no effect on the disease.
$H_1$: The drug has an effect on the disease.

Describe a scenario for a Type I error and a Type II error in this situation.

**Answer 2:**
*   **Type I Error**: The researcher concludes that the drug *does* have an effect (rejects $H_0$), when in reality, the drug has *no* effect. This would lead to marketing an ineffective drug.
*   **Type II Error**: The researcher concludes that the drug has *no* effect (fails to reject $H_0$), when in reality, the drug *does* have an effect. This would lead to withholding a potentially beneficial treatment from patients.

---

**Question 3:**
Consider a hypothesis test with $\alpha = 0.05$.
If the significance level is decreased to $\alpha = 0.01$, what is likely to happen to the probability of a Type II error ($\beta$)? Explain why.

**Answer 3:**
If the significance level is decreased from $\alpha = 0.05$ to $\alpha = 0.01$, the probability of a Type II error ($\beta$) is likely to **increase**.
**Explanation**: Decreasing $\alpha$ means making the rejection region for $H_0$ smaller. This makes it harder to reject $H_0$. Consequently, there is a higher chance of failing to reject $H_0$ even when it is false, thus increasing $\beta$. This illustrates the trade-off between Type I and Type II errors.

---

**Question 4:**
How does increasing the sample size ($n$) affect the probabilities of Type I and Type II errors?

**Answer 4:**
*   **Type I Error ($\alpha$)**: The probability of a Type I error ($\alpha$) is *not directly affected* by the sample size. It is determined by the chosen significance level.
*   **Type II Error ($\beta$)**: The probability of a Type II error ($\beta$) *decreases* as the sample size ($n$) increases. This is because a larger sample size leads to a more precise estimate of the population parameter, making it easier to detect a true difference if one exists, and thus reducing the chance of failing to reject a false null hypothesis.

---

**Question 5:**
A physicist is testing if a new experimental setup produces results with a mean value of $\mu = 10.5$. The population standard deviation is known to be $\sigma = 0.3$. The test is performed with a sample size of $n=36$ and a significance level of $\alpha = 0.05$.
$H_0: \mu = 10.5$
$H_1: \mu \neq 10.5$

Suppose the true mean of the experiment is $\mu = 10.6$. Calculate the probability of a Type II error ($\beta$).

**Answer 5:**
*   $H_0: \mu = 10.5$, $H_1: \mu \neq 10.5$
*   $\sigma = 0.3$, $n = 36$, $\alpha = 0.05$
*   True mean under $H_1$ is $\mu = 10.6$.

1.  **Test Statistic**: Z-test, $z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$
2.  **Critical Region**: For $\alpha = 0.05$ (two-tailed), $z_{critical} = \pm 1.96$.
    *   Acceptance region for $\bar{x}$:
        *   Lower bound: $\bar{x}_{lower} = \mu_0 - 1.96 \times (\sigma/\sqrt{n}) = 10.5 - 1.96 \times (0.3/\sqrt{36}) = 10.5 - 1.96 \times (0.3/6) = 10.5 - 1.96 \times 0.05 = 10.5 - 0.098 = 10.402$
        *   Upper bound: $\bar{x}_{upper} = \mu_0 + 1.96 \times (\sigma/\sqrt{n}) = 10.5 + 1.96 \times 0.05 = 10.5 + 0.098 = 10.598$
    *   We fail to reject $H_0$ if $10.402 \le \bar{x} \le 10.598$.

3.  **Calculate $\beta$**: Probability of $\bar{x}$ falling in the acceptance region given the true mean is $\mu = 10.6$.
    *   The sampling distribution of $\bar{x}$ when $\mu = 10.6$ has mean $10.6$ and standard deviation $\sigma/\sqrt{n} = 0.05$.
    *   Convert acceptance region bounds to z-scores using the true mean (10.6):
        *   $z_{lower\_actual} = \frac{10.402 - 10.6}{0.05} = \frac{-0.198}{0.05} = -3.96$
        *   $z_{upper\_actual} = \frac{10.598 - 10.6}{0.05} = \frac{-0.002}{0.05} = -0.04$
    *   $\beta = P(-3.96 \le Z \le -0.04)$

4.  **Using Z-tables/calculator**:
    *   $P(Z \le -0.04) \approx 0.4840$
    *   $P(Z \le -3.96) \approx 0.00004$
    *   $\beta \approx 0.4840 - 0.00004 \approx 0.4840$

**Answer**: The probability of a Type II error ($\beta$) is approximately 0.4840.

---

### 8. Important Points to Remember

*   **Hypothesis testing is a decision-making process based on sample data.**
*   **Type I error ($\alpha$)**: Rejecting a true $H_0$ (False Positive). Controlled by the significance level.
*   **Type II error ($\beta$)**: Failing to reject a false $H_0$ (False Negative). Influenced by $\alpha$, sample size, variability, and effect size.
*   **Power of the test is $1 - \beta$**: The probability of correctly rejecting a false $H_0$.
*   **Trade-off**: Decreasing $\alpha$ increases $\beta$, and vice versa.
*   **Sample size is key**: Increasing sample size generally reduces both $\alpha$ and $\beta$ (by increasing power).
*   The interpretation of results must consider the potential for these errors.

---

### 9. Connection to Course Outcomes

This topic directly supports **CO3** by providing the theoretical foundation for hypothesis testing. Understanding Type I and Type II errors is essential for:
*   **Assessing the certainty of estimates**: Knowing the potential for errors in hypothesis tests helps us understand the reliability of conclusions drawn from sample data.
*   **Testing hypotheses about population means and proportions**: The concepts of $\alpha$ and $\beta$ are integral to setting up and interpreting the results of z-tests and t-tests.

---

This concludes the study notes on Type I and Type II errors. Remember to consult Devore J. L. and other recommended texts for more in-depth coverage and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
