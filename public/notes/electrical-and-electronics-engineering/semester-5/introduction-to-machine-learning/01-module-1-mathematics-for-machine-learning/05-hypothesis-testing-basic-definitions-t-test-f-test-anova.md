---
title: "Hypothesis Testing - Basic definitions, t-test, F-test, ANOVA"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 1: Mathematics for Machine Learning."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36429"
status: "completed"
scrapedAt: "2026-05-23T16:22:18.702Z"
---
# Module 1: Mathematics for Machine Learning - Hypothesis Testing

## Topic: Hypothesis Testing - Basic Definitions, t-test, F-test, ANOVA

### 1. Introduction to Hypothesis Testing

Hypothesis testing is a fundamental statistical method used to make decisions about population parameters based on sample data. It provides a framework for evaluating claims or hypotheses about a population.

**Key Concepts:**

*   **Population:** The entire group of individuals or objects about which we want to draw conclusions.
*   **Sample:** A subset of the population from which data is collected.
*   **Parameter:** A numerical characteristic of a population (e.g., population mean $\mu$, population standard deviation $\sigma$).
*   **Statistic:** A numerical characteristic of a sample (e.g., sample mean $\bar{x}$, sample standard deviation $s$).

**Why is Hypothesis Testing Important in Machine Learning?**

*   **Model Evaluation:** Assessing whether observed improvements in model performance are statistically significant or due to random chance.
*   **Feature Selection:** Determining if a feature has a significant impact on the target variable.
*   **A/B Testing:** Comparing different versions of a model or feature to see which performs better.
*   **Understanding Data:** Making informed decisions about relationships between variables.

**(Referenced from Deisenroth, Faisal, & Ong, "Mathematics for Machine Learning", Chapter 2: Linear Algebra - Foundations for machine learning often rely on understanding data through statistical inference.)**

### 2. Basic Definitions in Hypothesis Testing

The process of hypothesis testing involves setting up competing hypotheses and using sample data to decide which hypothesis is more likely to be true.

**2.1. Null Hypothesis ($H_0$)**

*   **Definition:** A statement about a population parameter that is assumed to be true until evidence suggests otherwise. It typically represents the status quo, no effect, or no difference.
*   **Example:** $H_0$: The average height of adult males in a city is 175 cm. ($ \mu = 175 $)
*   **Key Point:** We aim to find evidence *against* the null hypothesis.

**2.2. Alternative Hypothesis ($H_1$ or $H_a$)**

*   **Definition:** A statement that contradicts the null hypothesis. It represents what we are trying to find evidence *for*.
*   **Example:** $H_1$: The average height of adult males in a city is not 175 cm. ($ \mu \neq 175 $)
*   **Types of Alternative Hypotheses:**
    *   **Two-tailed:** $H_1: \mu \neq \mu_0$ (e.g., the average height is different from 175 cm).
    *   **One-tailed (Right-tailed):** $H_1: \mu > \mu_0$ (e.g., the average height is greater than 175 cm).
    *   **One-tailed (Left-tailed):** $H_1: \mu < \mu_0$ (e.g., the average height is less than 175 cm).

**2.3. Test Statistic**

*   **Definition:** A value calculated from sample data that is used to decide whether to reject the null hypothesis. The specific test statistic depends on the type of data and the hypothesis being tested.
*   **Example:** For testing a population mean, the test statistic is often a t-score or a z-score.

**2.4. p-value**

*   **Definition:** The probability of observing a test statistic as extreme as, or more extreme than, the one calculated from the sample, assuming the null hypothesis is true.
*   **Interpretation:**
    *   A **small p-value** (typically $< \alpha$) indicates strong evidence against the null hypothesis.
    *   A **large p-value** (typically $ \geq \alpha $) indicates weak evidence against the null hypothesis.
*   **Important Point:** The p-value is NOT the probability that the null hypothesis is true.

**2.5. Significance Level ($\alpha$)**

*   **Definition:** The probability of rejecting the null hypothesis when it is actually true (Type I error). It is set *before* conducting the test.
*   **Common Values:** $\alpha = 0.05$ (5%), $\alpha = 0.01$ (1%), $\alpha = 0.10$ (10%).
*   **Decision Rule:** If $p\text{-value} < \alpha$, reject $H_0$. If $p\text{-value} \geq \alpha$, fail to reject $H_0$.

**2.6. Critical Region (Rejection Region)**

*   **Definition:** The set of values for the test statistic that lead to the rejection of the null hypothesis.
*   **Relationship to $\alpha$:** The size of the critical region is equal to $\alpha$.

**2.7. Type I and Type II Errors**

*   **Type I Error (False Positive):** Rejecting the null hypothesis when it is actually true. The probability of this error is $\alpha$.
*   **Type II Error (False Negative):** Failing to reject the null hypothesis when it is actually false. The probability of this error is $\beta$.
*   **Power of a Test:** $1 - \beta$, the probability of correctly rejecting a false null hypothesis.

**(Referenced from Deisenroth, Faisal, & Ong, "Mathematics for Machine Learning", Chapter 1: Probability and Statistics - Foundations of statistical inference are crucial for understanding hypothesis testing.)**

### 3. The t-test

The t-test is a statistical hypothesis test used to determine if there is a significant difference between the means of two groups, or between the mean of a sample and a known population mean. It is used when the population standard deviation is unknown and the sample size is relatively small.

**Assumptions of the t-test:**

*   The data are continuous.
*   The data are randomly sampled from the population.
*   The data are approximately normally distributed (especially for small sample sizes).
*   The variances of the two groups are approximately equal (for independent samples t-test, but there's a version for unequal variances).

**3.1. One-Sample t-test**

*   **Purpose:** To test if the mean of a single sample is significantly different from a known or hypothesized population mean ($\mu_0$).
*   **Hypotheses:**
    *   $H_0: \mu = \mu_0$
    *   $H_1: \mu \neq \mu_0$ (two-tailed) or $H_1: \mu > \mu_0$ (right-tailed) or $H_1: \mu < \mu_0$ (left-tailed)
*   **Test Statistic:**
    $$ t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} $$
    Where:
    *   $\bar{x}$ is the sample mean.
    *   $\mu_0$ is the hypothesized population mean.
    *   $s$ is the sample standard deviation.
    *   $n$ is the sample size.
*   **Degrees of Freedom (df):** $df = n - 1$
*   **Example:** A researcher wants to know if the average IQ score of students in a particular school is different from the national average of 100. They collect a sample of 30 students and find an average IQ of 105 with a sample standard deviation of 15.
    *   $H_0: \mu = 100$
    *   $H_1: \mu \neq 100$
    *   $t = \frac{105 - 100}{15 / \sqrt{30}} = \frac{5}{15 / 5.477} \approx \frac{5}{2.739} \approx 1.825$
    *   $df = 30 - 1 = 29$.
    *   Using a t-table or software with $\alpha = 0.05$, the critical values for a two-tailed test with 29 df are approximately $\pm 2.045$. Since $|1.825| < 2.045$, we fail to reject $H_0$. The evidence does not suggest the average IQ of students in this school is significantly different from 100.

**3.2. Independent Samples t-test**

*   **Purpose:** To compare the means of two independent groups.
*   **Hypotheses:**
    *   $H_0: \mu_1 = \mu_2$ (or $\mu_1 - \mu_2 = 0$)
    *   $H_1: \mu_1 \neq \mu_2$ (or $\mu_1 - \mu_2 \neq 0$) or $H_1: \mu_1 > \mu_2$ or $H_1: \mu_1 < \mu_2$
*   **Test Statistic (Assuming Equal Variances - Pooled t-test):**
    $$ t = \frac{(\bar{x}_1 - \bar{x}_2) - 0}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} $$
    Where $s_p$ is the pooled standard deviation:
    $$ s_p = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}} $$
*   **Degrees of Freedom (df):** $df = n_1 + n_2 - 2$
*   **Test Statistic (Assuming Unequal Variances - Welch's t-test):** A more robust version that does not assume equal variances. The calculation of the test statistic and df is more complex and often handled by statistical software.
*   **Example:** A machine learning engineer wants to compare the performance (e.g., accuracy) of two different algorithms, Alg A and Alg B, on a dataset.
    *   Sample 1 (Alg A): $n_1=25$, $\bar{x}_1=0.85$, $s_1=0.05$
    *   Sample 2 (Alg B): $n_2=28$, $\bar{x}_2=0.88$, $s_2=0.06$
    *   Assume equal variances for simplicity.
    *   $s_p = \sqrt{\frac{(25-1)(0.05)^2 + (28-1)(0.06)^2}{25 + 28 - 2}} = \sqrt{\frac{24(0.0025) + 27(0.0036)}{51}} = \sqrt{\frac{0.06 + 0.0972}{51}} = \sqrt{\frac{0.1572}{51}} \approx \sqrt{0.00308} \approx 0.0555$
    *   $t = \frac{(0.85 - 0.88) - 0}{0.0555 \sqrt{\frac{1}{25} + \frac{1}{28}}} = \frac{-0.03}{0.0555 \sqrt{0.04 + 0.0357}} = \frac{-0.03}{0.0555 \sqrt{0.0757}} \approx \frac{-0.03}{0.0555 \times 0.275} \approx \frac{-0.03}{0.01526} \approx -1.966$
    *   $df = 25 + 28 - 2 = 51$.
    *   With $\alpha=0.05$ and $df=51$, the critical values are approximately $\pm 2.009$. Since $|-1.966| < 2.009$, we fail to reject $H_0$. There is no statistically significant difference in accuracy between Alg A and Alg B at the 0.05 significance level.

**3.3. Paired Samples t-test**

*   **Purpose:** To compare the means of two related groups (e.g., measurements from the same subjects before and after an intervention, or matched pairs).
*   **Hypotheses:**
    *   $H_0: \mu_d = 0$ (where $\mu_d$ is the mean of the differences)
    *   $H_1: \mu_d \neq 0$ (or $H_1: \mu_d > 0$ or $H_1: \mu_d < 0$)
*   **Test Statistic:**
    $$ t = \frac{\bar{d} - 0}{s_d / \sqrt{n}} $$
    Where:
    *   $\bar{d}$ is the mean of the differences between paired observations.
    *   $s_d$ is the standard deviation of the differences.
    *   $n$ is the number of pairs.
*   **Degrees of Freedom (df):** $df = n - 1$
*   **Example:** A company implements a new training program for its sales staff. They measure the sales performance of 10 employees before and after the training.
    *   Differences in sales performance (After - Before): [500, 800, 300, 1000, 600, 700, 400, 900, 1100, 650]
    *   $n=10$
    *   $\bar{d} = \frac{500+800+...+650}{10} = 7050 / 10 = 705$
    *   $s_d \approx 266.5$ (calculated from the differences)
    *   $t = \frac{705 - 0}{266.5 / \sqrt{10}} \approx \frac{705}{84.27} \approx 8.367$
    *   $df = 10 - 1 = 9$.
    *   With $\alpha=0.05$ and $df=9$ (two-tailed), the critical values are approximately $\pm 2.262$. Since $|8.367| > 2.045$, we reject $H_0$. The training program significantly increased sales performance.

**(Referenced from Deisenroth, Faisal, & Ong, "Mathematics for Machine Learning", Chapter 1: Probability and Statistics - Understanding sampling distributions and basic statistical tests is covered here.)**
**(Referenced from Müller & Guido, "Introduction to Machine Learning with Python", Chapter 1: Introduction - While focusing on ML, the book touches upon the importance of understanding data properties which relate to statistical tests.)**

### 4. The F-test and ANOVA

The F-test is used to compare variances between two or more populations. Analysis of Variance (ANOVA) is a powerful statistical technique that uses F-tests to compare the means of three or more groups.

**4.1. The F-test (for Equality of Variances)**

*   **Purpose:** To test if the variances of two populations are equal.
*   **Hypotheses:**
    *   $H_0: \sigma_1^2 = \sigma_2^2$
    *   $H_1: \sigma_1^2 \neq \sigma_2^2$ (or $H_1: \sigma_1^2 > \sigma_2^2$ or $H_1: \sigma_1^2 < \sigma_2^2$)
*   **Test Statistic:**
    $$ F = \frac{s_1^2}{s_2^2} $$
    Where $s_1^2$ and $s_2^2$ are the sample variances. The larger variance is typically placed in the numerator.
*   **Degrees of Freedom (df):**
    *   Numerator df: $df_1 = n_1 - 1$
    *   Denominator df: $df_2 = n_2 - 1$
*   **Interpretation:** Compare the calculated F-statistic to critical values from the F-distribution or use the p-value. A small p-value suggests unequal variances.
*   **Application in ML:** Can be used to assess if the variability of errors is similar across different models or if feature variances are comparable.

**4.2. Analysis of Variance (ANOVA)**

*   **Purpose:** To test if there is a statistically significant difference between the means of three or more independent groups.
*   **Key Idea:** ANOVA works by partitioning the total variation in the data into variation *between* groups and variation *within* groups.
*   **Hypotheses:**
    *   $H_0:$ All group means are equal ($\mu_1 = \mu_2 = \dots = \mu_k$)
    *   $H_1:$ At least one group mean is different from the others.
*   **Assumptions of ANOVA:**
    *   The samples are independent.
    *   The data are approximately normally distributed within each group.
    *   The variances of the groups are approximately equal (homoscedasticity).
*   **Partitioning Variation:**
    *   **Total Sum of Squares (SST):** Measures the total variation in the data around the overall mean.
    *   **Between-Group Sum of Squares (SSB) or Sum of Squares Treatment (SSTr):** Measures the variation between the group means and the overall mean. This represents the variation explained by the group differences.
    *   **Within-Group Sum of Squares (SSW) or Sum of Squares Error (SSE):** Measures the variation of individual data points around their respective group means. This represents the unexplained variation or random error.
    *   **Relationship:** $SST = SSB + SSW$
*   **Mean Squares:**
    *   **Mean Square Between (MSB):** $MSB = \frac{SSB}{df_B}$, where $df_B = k - 1$ ($k$ is the number of groups).
    *   **Mean Square Within (MSW):** $MSW = \frac{SSW}{df_W}$, where $df_W = N - k$ ($N$ is the total number of observations across all groups).
*   **Test Statistic (F-statistic):**
    $$ F = \frac{MSB}{MSW} $$
*   **Interpretation:**
    *   If the group means are similar, $MSB$ will be close to $MSW$, resulting in an F-statistic close to 1.
    *   If there are significant differences between group means, $MSB$ will be larger than $MSW$, resulting in a larger F-statistic.
    *   We compare this F-statistic to the F-distribution with $df_B$ and $df_W$ degrees of freedom. A large F-statistic (and a small p-value) leads to the rejection of $H_0$.

*   **Example:** A data scientist wants to compare the performance (e.g., prediction accuracy) of three different clustering algorithms (K-Means, DBSCAN, Hierarchical) on a dataset. They run each algorithm multiple times and get the following accuracies:
    *   K-Means: [0.78, 0.82, 0.79, 0.81, 0.77] ($n_1=5$, $\bar{x}_1=0.794$)
    *   DBSCAN: [0.85, 0.88, 0.86, 0.87, 0.84] ($n_2=5$, $\bar{x}_2=0.860$)
    *   Hierarchical: [0.75, 0.77, 0.76, 0.78, 0.74] ($n_3=5$, $\bar{x}_3=0.760$)

    *   Overall mean ($\bar{\bar{x}}$) = (0.794 + 0.860 + 0.760) / 3 = 0.8047
    *   Calculate SST, SSB, SSW, MSB, MSW.
    *   $k=3$ (number of groups), $N=15$ (total observations).
    *   $df_B = k-1 = 3-1 = 2$
    *   $df_W = N-k = 15-3 = 12$

    *(Detailed calculation of SST, SSB, SSW is often tedious manually and typically done using software. The concept is the focus here.)*

    Let's assume the calculations yield:
    *   $MSB = 0.015$
    *   $MSW = 0.002$
    *   $F = \frac{0.015}{0.002} = 7.5$

    *   Compare $F=7.5$ to the F-distribution with $df_1=2$ and $df_2=12$. For $\alpha=0.05$, the critical F-value is approximately $3.89$.
    *   Since $7.5 > 3.89$, we reject $H_0$. This suggests that there is a significant difference in the average accuracy among the three clustering algorithms.

**4.3. Post-hoc Tests**

*   **Purpose:** If ANOVA rejects the null hypothesis (meaning at least one mean is different), post-hoc tests are used to determine *which specific* group means differ from each other.
*   **Common Post-hoc Tests:** Tukey's HSD (Honestly Significant Difference), Bonferroni, Scheffé.
*   **Application in ML:** After finding that some models perform differently, post-hoc tests can pinpoint which pairs of models are significantly different.

**(Referenced from Deisenroth, Faisal, & Ong, "Mathematics for Machine Learning", Chapter 1: Probability and Statistics - Introduces foundational concepts for statistical testing, including variance and comparisons.)**
**(Referenced from Hastie, Tibshirani, & Friedman, "The Elements of Statistical Learning", Chapter 2: Linear Regression - While focused on regression, this chapter implicitly uses concepts of variance partitioning and hypothesis testing for model coefficients.)**
**(Referenced from Bishop, "Pattern Recognition and Machine Learning", Chapter 1: Introduction - Discusses the role of statistical modeling and inference in machine learning, laying the groundwork for understanding tests.)**

### 5. Practical Implementation and Tools

*   **Python Libraries:**
    *   **SciPy (`scipy.stats`):** Provides a comprehensive suite of statistical functions, including `ttest_1samp`, `ttest_ind`, `ttest_rel` (for paired t-tests), `f_oneway` (for one-way ANOVA), and `f_test` (for F-test of variances).
    *   **Statsmodels:** A more extensive library for statistical modeling and hypothesis testing.
    *   **Pandas:** For data manipulation and often used to prepare data for statistical analysis.

**(Referenced from Vander Plas, "Python Data Science Handbook", Chapter 10: Working with Time Series Data - Although focused on time series, it highlights the use of statistical methods and libraries like Pandas and SciPy for data analysis.)**
**(Referenced from Géron, "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow", Chapter 1: Introduction to Machine Learning - Discusses evaluating models and the importance of statistical significance in comparing them.)**
**(Referenced from Raschka & Mirjalili, "Python Machine Learning", Chapter 2: Introduction to Machine Learning with SciPy - Covers essential SciPy functions, including statistical tests.)**

### 6. Practice Questions and Exercises

1.  **Question:** A new marketing campaign is launched for a product. The company wants to know if the average daily sales have increased after the campaign. They have sales data for 30 days before the campaign and 30 days after.
    *   **Data (hypothetical):**
        *   Before Campaign: Mean sales = $1500, Standard Deviation = $200
        *   After Campaign: Mean sales = $1650, Standard Deviation = $250
    *   **Task:** Which type of t-test should be used? State the null and alternative hypotheses. Assuming the samples are independent and have equal variances, calculate the t-statistic. (You don't need to find the p-value or make a decision without a table).
    *   **Answer:**
        *   **Type of test:** Independent samples t-test.
        *   **Hypotheses:**
            *   $H_0: \mu_{\text{after}} = \mu_{\text{before}}$ (The average daily sales are the same before and after the campaign)
            *   $H_1: \mu_{\text{after}} > \mu_{\text{before}}$ (The average daily sales have increased after the campaign - this is a one-tailed test)
        *   **Calculation:**
            *   $n_1 = 30, \bar{x}_1 = 1500, s_1 = 200$
            *   $n_2 = 30, \bar{x}_2 = 1650, s_2 = 250$
            *   Pooled standard deviation: $s_p = \sqrt{\frac{(30-1)(200)^2 + (30-1)(250)^2}{30 + 30 - 2}} = \sqrt{\frac{29(40000) + 29(62500)}{58}} = \sqrt{\frac{1160000 + 1812500}{58}} = \sqrt{\frac{2972500}{58}} \approx \sqrt{51250} \approx 226.38$
            *   $t = \frac{(1650 - 1500) - 0}{226.38 \sqrt{\frac{1}{30} + \frac{1}{30}}} = \frac{150}{226.38 \sqrt{\frac{2}{30}}} = \frac{150}{226.38 \sqrt{0.0667}} \approx \frac{150}{226.38 \times 0.258} \approx \frac{150}{58.41} \approx 2.568$

2.  **Question:** A data scientist is comparing the error rates of three different regression models. They collect the error rates for 10 runs of each model.
    *   **Model A:** [0.05, 0.06, 0.04, 0.05, 0.07, 0.05, 0.06, 0.04, 0.05, 0.06]
    *   **Model B:** [0.07, 0.08, 0.09, 0.07, 0.08, 0.07, 0.09, 0.08, 0.07, 0.08]
    *   **Model C:** [0.04, 0.03, 0.05, 0.04, 0.03, 0.05, 0.04, 0.03, 0.05, 0.04]
    *   **Task:** Which statistical test is most appropriate to determine if there's a significant difference in the average error rates among the three models? State the null and alternative hypotheses for this test.
    *   **Answer:**
        *   **Appropriate test:** One-way ANOVA (Analysis of Variance).
        *   **Hypotheses:**
            *   $H_0: \mu_A = \mu_B = \mu_C$ (The average error rates of the three models are equal)
            *   $H_1:$ At least one of the average error rates is different from the others.

3.  **Question:** You are testing a new feature for a recommendation system. You hypothesize that the click-through rate (CTR) will increase. You compare the CTR of users who saw the new feature versus a control group.
    *   **New Feature Group:** $n=100$, Sample CTR = 5.5%
    *   **Control Group:** $n=100$, Sample CTR = 4.8%
    *   **Task:** What type of hypothesis test would you use? If you are using a Z-test for comparing two proportions, and you have calculated a test statistic of 1.8 and a p-value of 0.035, what decision would you make at a significance level of $\alpha=0.05$?
    *   **Answer:**
        *   **Type of test:** Z-test for comparing two proportions (since CTR is a proportion).
        *   **Decision:** Since the p-value (0.035) is less than the significance level ($\alpha = 0.05$), we reject the null hypothesis. This suggests that the new feature significantly increased the click-through rate.

### 7. Important Points to Remember

*   **Hypothesis testing is about evidence, not proof.** We "fail to reject" $H_0$ rather than "accept" $H_0$.
*   **The choice of test depends on the data type, sample size, and the research question.**
*   **Assumptions of tests must be checked.** Violating assumptions can lead to invalid conclusions.
*   **p-values are crucial, but always consider the practical significance** (effect size) alongside statistical significance. A tiny effect can be statistically significant with a large sample size.
*   **T-tests are for comparing means**, while **F-tests are primarily for comparing variances**, but also the core of ANOVA for comparing multiple means.
*   **ANOVA is a powerful tool for comparing means of three or more groups**, but requires post-hoc tests to identify specific differences.
*   **In machine learning, these tests help validate model improvements and feature importance.**

---
This concludes the notes on Hypothesis Testing for Module 1. Remember to practice applying these concepts with real data using Python libraries.
