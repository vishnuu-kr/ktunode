---
title: "Inductive statistics - Point estimation, Interval estimation"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 1: Mathematics for Machine Learning."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36428"
status: "completed"
scrapedAt: "2026-05-23T16:22:17.955Z"
---
# Module 1: Mathematics for Machine Learning - Inductive Statistics

This module delves into the foundational mathematical concepts required for understanding and applying Machine Learning. Specifically, this topic focuses on **Inductive Statistics**, which involves drawing conclusions about a population based on a sample of data. We will explore two key aspects of inductive statistics: **Point Estimation** and **Interval Estimation**.

---

## 1. Introduction to Inductive Statistics

Inductive statistics is about making generalizations from a sample to a population. Machine learning often deals with datasets that are samples of a larger, unobserved population. Therefore, understanding how to infer population characteristics from sample data is crucial.

**Key Concepts:**

*   **Population:** The entire group of individuals or objects that we are interested in studying.
*   **Sample:** A subset of the population that is selected for analysis.
*   **Parameter:** A numerical characteristic of the population (e.g., population mean $\mu$, population standard deviation $\sigma$). Parameters are usually unknown and are what we want to estimate.
*   **Statistic:** A numerical characteristic of the sample (e.g., sample mean $\bar{x}$, sample standard deviation $s$). Statistics are calculated from sample data and are used to estimate population parameters.

**Learning Outcome Alignment:** This section directly supports understanding the underlying statistical principles that inform how we interpret data for ML.

**Textbook Reference:** Deisenroth, Faisal, & Ong (2020) covers the probabilistic foundations of statistics in Chapters 1 and 2, which are essential for understanding inference.

---

## 2. Point Estimation

Point estimation is the process of finding a single value that serves as the "best guess" for an unknown population parameter.

**Key Concepts:**

*   **Estimator:** A statistic used to estimate a population parameter. For example, the sample mean ($\bar{x}$) is an estimator for the population mean ($\mu$).
*   **Estimate:** The specific value of an estimator calculated from a particular sample.

**Properties of Good Estimators:**

We aim for estimators that have desirable properties, ensuring our "best guess" is as accurate as possible.

*   **Unbiasedness:** An estimator $\hat{\theta}$ for a parameter $\theta$ is unbiased if its expected value is equal to the true parameter value: $E[\hat{\theta}] = \theta$.
    *   **Example:** The sample mean $\bar{x} = \frac{1}{n}\sum_{i=1}^n X_i$ is an unbiased estimator of the population mean $\mu$. $E[\bar{x}] = E[\frac{1}{n}\sum X_i] = \frac{1}{n}\sum E[X_i] = \frac{1}{n}\sum \mu = \frac{1}{n}(n\mu) = \mu$.
*   **Consistency:** An estimator $\hat{\theta}_n$ is consistent if it converges in probability to the true parameter $\theta$ as the sample size $n$ increases. This means the probability that $\hat{\theta}_n$ is close to $\theta$ approaches 1 as $n \to \infty$.
    *   **Example:** The sample mean $\bar{x}$ is a consistent estimator for the population mean $\mu$. As $n$ increases, $\bar{x}$ gets closer to $\mu$.
*   **Efficiency:** If we have two unbiased estimators for the same parameter, the one with the smaller variance is considered more efficient. It provides more precise estimates.
    *   **Example:** If both the sample mean and sample median are unbiased estimators for the population mean (under certain distributional assumptions), and the sample mean has a smaller variance, it's the more efficient estimator.
*   **Sufficiency:** An estimator is sufficient if it utilizes all the information in the sample that is relevant to estimating the parameter.

**Common Point Estimators for Population Parameters:**

| Population Parameter | Common Point Estimator | Formula                                                                  |
| :------------------- | :--------------------- | :----------------------------------------------------------------------- |
| Mean ($\mu$)         | Sample Mean ($\bar{x}$)  | $\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$                                     |
| Variance ($\sigma^2$) | Sample Variance ($s^2$)  | $s^2 = \frac{1}{n-1} \sum_{i=1}^n (x_i - \bar{x})^2$ (unbiased estimator) |
| Standard Deviation ($\sigma$) | Sample Standard Deviation ($s$) | $s = \sqrt{s^2}$                                                        |
| Proportion ($p$)     | Sample Proportion ($\hat{p}$) | $\hat{p} = \frac{\text{number of successes}}{\text{total number of trials}}$ |

**Important Note on Sample Variance:** We use $n-1$ in the denominator for the sample variance to make it an *unbiased* estimator of the population variance. If we used $n$, the sample variance would be a biased estimator (it would tend to underestimate the population variance).

**Reference:** Bishop (2006), Chapter 3, discusses maximum likelihood estimation (MLE), a powerful method for finding point estimators. Deisenroth, Faisal, & Ong (2020) also cover estimation methods.

---

## 3. Interval Estimation (Confidence Intervals)

While point estimation gives a single "best guess," it doesn't tell us how confident we should be in that guess. Interval estimation provides a range of values, called a **confidence interval**, within which the true population parameter is likely to lie.

**Key Concepts:**

*   **Confidence Interval (CI):** A range of values, derived from sample statistics, that is likely to contain the value of an unknown population parameter.
*   **Confidence Level:** The probability that the confidence interval contains the true population parameter. Common confidence levels are 90%, 95%, and 99%. A 95% confidence level means that if we were to take many samples and construct a confidence interval for each, about 95% of those intervals would contain the true population parameter.
*   **Margin of Error (MOE):** The "width" of the confidence interval, representing the uncertainty in our estimate. It's calculated as: MOE = (Critical Value) $\times$ (Standard Error of the Estimate).
*   **Standard Error (SE):** The standard deviation of the sampling distribution of a statistic. It measures how much the statistic is expected to vary from sample to sample.

**General Formula for a Confidence Interval:**

$$ \text{Point Estimate} \pm \text{Margin of Error} $$
$$ \text{Point Estimate} \pm (\text{Critical Value} \times \text{Standard Error}) $$

**Constructing Confidence Intervals:**

The specific formula for a confidence interval depends on the parameter being estimated, the distribution of the data, and the sample size.

**3.1. Confidence Interval for the Population Mean ($\mu$)**

*   **Scenario 1: Population standard deviation ($\sigma$) is known (rare in practice).**
    *   The sampling distribution of $\bar{x}$ is normal (or approximately normal by the Central Limit Theorem if $n$ is large).
    *   The standard error of the mean is $SE(\bar{x}) = \frac{\sigma}{\sqrt{n}}$.
    *   The critical value comes from the standard normal distribution (z-distribution).
    *   **CI for $\mu$ ( $\sigma$ known):** $\bar{x} \pm z_{\alpha/2} \frac{\sigma}{\sqrt{n}}$
        *   $z_{\alpha/2}$ is the critical z-value such that the area to its right is $\alpha/2$. For a 95% CI, $\alpha = 0.05$, so $z_{0.025} \approx 1.96$.

*   **Scenario 2: Population standard deviation ($\sigma$) is unknown (common).**
    *   We use the sample standard deviation ($s$) as an estimate for $\sigma$.
    *   The sampling distribution of $\frac{\bar{x} - \mu}{s/\sqrt{n}}$ follows a t-distribution with $n-1$ degrees of freedom.
    *   The standard error of the mean is $SE(\bar{x}) = \frac{s}{\sqrt{n}}$.
    *   **CI for $\mu$ ( $\sigma$ unknown):** $\bar{x} \pm t_{\alpha/2, n-1} \frac{s}{\sqrt{n}}$
        *   $t_{\alpha/2, n-1}$ is the critical t-value with $n-1$ degrees of freedom, leaving an area of $\alpha/2$ in each tail. The t-distribution accounts for the extra uncertainty introduced by estimating $\sigma$ with $s$.

**Example:**

Suppose we measure the heights of 30 randomly selected adult males and find the sample mean height to be 175 cm with a sample standard deviation of 7 cm. We want to construct a 95% confidence interval for the true mean height of all adult males.

*   Sample mean ($\bar{x}$) = 175 cm
*   Sample standard deviation ($s$) = 7 cm
*   Sample size ($n$) = 30
*   Confidence level = 95% ($\alpha = 0.05$)
*   Degrees of freedom ($n-1$) = 29

We need the critical t-value for $\alpha/2 = 0.025$ and $df=29$. Using a t-table or calculator, $t_{0.025, 29} \approx 2.045$.

Standard Error: $SE(\bar{x}) = \frac{s}{\sqrt{n}} = \frac{7}{\sqrt{30}} \approx \frac{7}{5.477} \approx 1.278$ cm.

Margin of Error: MOE = $t_{0.025, 29} \times SE(\bar{x}) \approx 2.045 \times 1.278 \approx 2.613$ cm.

Confidence Interval: $\bar{x} \pm \text{MOE} = 175 \pm 2.613$ cm.

The 95% confidence interval for the true mean height is approximately (172.387 cm, 177.613 cm).

**Interpretation:** We are 95% confident that the true average height of all adult males lies between 172.387 cm and 177.613 cm.

**3.2. Confidence Interval for the Population Proportion ($p$)**

For a large sample size ($n \hat{p} \ge 10$ and $n (1-\hat{p}) \ge 10$), the sampling distribution of the sample proportion $\hat{p}$ is approximately normal.

*   The standard error of the proportion is $SE(\hat{p}) = \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$.
*   **CI for $p$:** $\hat{p} \pm z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$

**Example:**

In a survey of 200 randomly selected voters, 110 indicated they would vote for candidate A. Construct a 95% confidence interval for the true proportion of voters who will vote for candidate A.

*   Sample proportion ($\hat{p}$) = 110 / 200 = 0.55
*   Sample size ($n$) = 200
*   Confidence level = 95% ($\alpha = 0.05$), so $z_{\alpha/2} = 1.96$.

Check conditions: $n\hat{p} = 200 \times 0.55 = 110 \ge 10$ and $n(1-\hat{p}) = 200 \times 0.45 = 90 \ge 10$. Conditions met.

Standard Error: $SE(\hat{p}) = \sqrt{\frac{0.55(1-0.55)}{200}} = \sqrt{\frac{0.55 \times 0.45}{200}} = \sqrt{\frac{0.2475}{200}} \approx \sqrt{0.0012375} \approx 0.0352$

Margin of Error: MOE = $1.96 \times 0.0352 \approx 0.0690$

Confidence Interval: $\hat{p} \pm \text{MOE} = 0.55 \pm 0.0690$

The 95% confidence interval for the true proportion of voters is approximately (0.481, 0.619).

**Interpretation:** We are 95% confident that the true proportion of all voters who will vote for candidate A is between 48.1% and 61.9%.

**Learning Outcome Alignment:** This section directly supports CO1 by explaining how to estimate population characteristics (mean, proportion) from samples using summary statistics and the concept of confidence.

**Textbook Reference:** Deisenroth, Faisal, & Ong (2020) cover statistical inference and estimation in later chapters, providing a more rigorous mathematical treatment. Bishop (2006) also touches upon inference in the context of model fitting. Python Data Science Handbook (Vander Plas, 2016) and Hands-On ML (Géron, 2019) often demonstrate the practical application of these concepts using libraries like SciPy and Statsmodels.

---

## 4. Key Points to Remember

*   **Inductive statistics** moves from sample to population.
*   **Point estimation** provides a single best guess for a population parameter.
*   **Unbiasedness**, **consistency**, and **efficiency** are desirable properties of estimators.
*   **Sample mean** is an unbiased and consistent estimator for the population mean.
*   **Sample variance ($s^2$ with $n-1$ denominator)** is an unbiased estimator for the population variance.
*   **Interval estimation** (confidence intervals) provides a range of plausible values for a population parameter.
*   The **confidence level** indicates the reliability of the interval construction process.
*   The **margin of error** quantifies the uncertainty in the estimate.
*   When population standard deviation is unknown, use the **t-distribution** for confidence intervals of the mean.
*   For proportions, use the **z-distribution** when sample size conditions are met.
*   Confidence intervals are crucial for understanding the reliability of estimates derived from data, a key aspect in evaluating machine learning model performance and understanding data.

---

## 5. Practice Questions

1.  **Point Estimation:**
    A machine learning practitioner collects a sample of 50 transaction amounts from an e-commerce platform. The sample mean transaction amount is $125.50. What is the point estimate for the true average transaction amount of all transactions on the platform?
    *   **Answer:** The point estimate is the sample mean, which is $125.50.

2.  **Point Estimation (Variance):**
    A dataset of image pixel values has a sample variance of 150. What is the best point estimate for the population variance of pixel values?
    *   **Answer:** The sample variance (150) is the unbiased point estimate for the population variance.

3.  **Interval Estimation (Mean):**
    A researcher measures the response times of a new algorithm on 25 different tasks. The sample mean response time is 0.85 seconds, and the sample standard deviation is 0.15 seconds. Construct a 90% confidence interval for the true mean response time of the algorithm.
    *   **Steps:**
        *   Identify $\bar{x}$, $s$, $n$, and confidence level.
        *   Find the critical t-value for 90% confidence and $n-1=24$ degrees of freedom.
        *   Calculate the standard error: $SE(\bar{x}) = s/\sqrt{n}$.
        *   Calculate the margin of error: MOE = $t_{\alpha/2, n-1} \times SE(\bar{x})$.
        *   Construct the interval: $\bar{x} \pm \text{MOE}$.
    *   **Answer:**
        *   $\bar{x} = 0.85$, $s = 0.15$, $n = 25$, Confidence = 90% ($\alpha = 0.10$).
        *   $t_{0.05, 24} \approx 1.711$.
        *   $SE(\bar{x}) = 0.15 / \sqrt{25} = 0.15 / 5 = 0.03$.
        *   MOE = $1.711 \times 0.03 \approx 0.0513$.
        *   CI = $0.85 \pm 0.0513 = (0.7987, 0.9013)$.
        The 90% confidence interval is approximately (0.799 seconds, 0.901 seconds).

4.  **Interval Estimation (Proportion):**
    In a sample of 100 data points from a classification problem, the model achieved an accuracy of 75%. Construct a 99% confidence interval for the true accuracy of the model.
    *   **Steps:**
        *   Identify $\hat{p}$, $n$, and confidence level.
        *   Find the critical z-value for 99% confidence.
        *   Calculate the standard error: $SE(\hat{p}) = \sqrt{\hat{p}(1-\hat{p})/n}$.
        *   Calculate the margin of error: MOE = $z_{\alpha/2} \times SE(\hat{p})$.
        *   Construct the interval: $\hat{p} \pm \text{MOE}$.
    *   **Answer:**
        *   $\hat{p} = 0.75$, $n = 100$, Confidence = 99% ($\alpha = 0.01$).
        *   $z_{0.005} \approx 2.576$.
        *   $SE(\hat{p}) = \sqrt{0.75(1-0.75)/100} = \sqrt{0.75 \times 0.25 / 100} = \sqrt{0.1875 / 100} = \sqrt{0.001875} \approx 0.0433$.
        *   MOE = $2.576 \times 0.0433 \approx 0.1115$.
        *   CI = $0.75 \pm 0.1115 = (0.6385, 0.8615)$.
        The 99% confidence interval for the true accuracy is approximately (0.639, 0.861).

---

This foundational understanding of point and interval estimation is critical for interpreting the results of statistical analyses and the performance metrics of machine learning models. It allows us to move beyond simple numbers and quantify our uncertainty, which is essential for making informed decisions.
