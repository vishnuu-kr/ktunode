---
title: "statistical estimation"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b9e"
status: "completed"
scrapedAt: "2026-05-23T16:14:10.776Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

## Topic: Statistical Estimation

### 1. Introduction to Statistical Estimation

Statistical estimation is a fundamental concept in inferential statistics. It involves using sample data to estimate unknown population parameters. In the context of AI and Data Science, we often work with data that is a sample from a larger, often unobserved, population. Estimation allows us to make educated guesses about the characteristics of this population based on the available sample.

**Key Concepts:**

*   **Population:** The entire group of individuals, objects, or events that we are interested in studying.
*   **Sample:** A subset of the population that is selected for observation and analysis.
*   **Parameter:** A numerical characteristic of a population (e.g., population mean ($\mu$), population variance ($\sigma^2$)). Parameters are usually unknown and what we aim to estimate.
*   **Statistic:** A numerical characteristic of a sample (e.g., sample mean ($\bar{x}$), sample variance ($s^2$)). Statistics are calculated from sample data and used as estimators for population parameters.

**Learning Outcomes Addressed:**

*   This topic directly contributes to understanding the foundational statistical methods needed to analyze and interpret data, aligning with **CO3**.
*   The ability to estimate population parameters is crucial for making informed decisions and building models, supporting **CO4**.

**Textbook/Reference Integration:**

*   **Fundamentals of mathematical statistics by Gupta, S. C., and V. K. Kapoor:** This book extensively covers the theory of estimation, including different types of estimators and their properties.
*   **Probability and Statistics for Data Science by Carlos Fernandez-Granda:** Provides practical examples and interpretations of estimation in data science contexts.
*   **Statistics For Data Science by James D. Miller:** Offers a good balance of theoretical concepts and practical application of estimation techniques.

### 2. Types of Estimation

There are two primary types of statistical estimation:

#### 2.1 Point Estimation

**Definition:** Point estimation involves using a single value calculated from sample data to estimate a population parameter. This single value is called a **point estimate**.

**Examples:**

*   **Estimating Population Mean ($\mu$):** The sample mean ($\bar{x}$) is a common point estimate for the population mean ($\mu$).
    *   *Calculation:* $\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$, where $x_i$ are the observations in the sample and $n$ is the sample size.
*   **Estimating Population Variance ($\sigma^2$):** The sample variance ($s^2$) is a common point estimate for the population variance ($\sigma^2$).
    *   *Calculation (Unbiased Estimator):* $s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2$. The use of $(n-1)$ in the denominator makes it an unbiased estimator.

**Important Points to Remember:**

*   A point estimate is a single number that is unlikely to be exactly equal to the true population parameter due to sampling variability.
*   The quality of a point estimate depends on its properties (e.g., unbiasedness, efficiency).

#### 2.2 Interval Estimation (Confidence Intervals)

**Definition:** Interval estimation involves providing a range of values (an **interval**) within which the population parameter is likely to lie, with a certain level of confidence. This range is called a **confidence interval**.

**Key Concepts:**

*   **Confidence Level:** The probability that the confidence interval contains the true population parameter. Commonly expressed as a percentage (e.g., 95%, 99%).
*   **Confidence Interval:** A range of values calculated from sample data that is likely to contain the population parameter. It is usually expressed as:
    *   *Point Estimate ± Margin of Error*
*   **Margin of Error:** The part of the confidence interval that indicates the precision of the estimate. It is influenced by the confidence level and the variability of the data.

**Example (Estimating Population Mean $\mu$ with known $\sigma$):**

For a large sample or when the population standard deviation ($\sigma$) is known, a $(1-\alpha) \times 100\%$ confidence interval for the population mean ($\mu$) is given by:

$$ \bar{x} \pm z_{\alpha/2} \frac{\sigma}{\sqrt{n}} $$

Where:
*   $\bar{x}$ is the sample mean.
*   $z_{\alpha/2}$ is the critical value from the standard normal distribution corresponding to the desired confidence level (e.g., for 95% confidence, $\alpha = 0.05$, and $z_{0.025} \approx 1.96$).
*   $\sigma$ is the population standard deviation.
*   $n$ is the sample size.

**Example Scenario:**

Suppose we want to estimate the average height of adult males in a city. We take a random sample of 100 men and find the sample mean height to be 175 cm, with a known population standard deviation of 7 cm. We want to construct a 95% confidence interval for the average height.

*   $\bar{x} = 175$ cm
*   $\sigma = 7$ cm
*   $n = 100$
*   For 95% confidence, $z_{\alpha/2} = 1.96$

Margin of Error = $1.96 \times \frac{7}{\sqrt{100}} = 1.96 \times \frac{7}{10} = 1.372$ cm

Confidence Interval = $175 \pm 1.372$ cm = (173.628 cm, 176.372 cm)

**Interpretation:** We are 95% confident that the true average height of adult males in this city lies between 173.628 cm and 176.372 cm.

**Important Points to Remember:**

*   A higher confidence level leads to a wider confidence interval.
*   A larger sample size leads to a narrower confidence interval (more precise estimate).
*   Confidence intervals are a more informative way to estimate parameters than point estimates because they quantify the uncertainty.

**Textbook/Reference Integration:**

*   **Mathematics for machine learning by Deisenroth, Marc Peter, A. Aldo Faisal, and Cheng Soon Ong:** Covers the statistical foundations that underpin interval estimation, particularly related to probability distributions and sampling.
*   **Probability and Statistics - The Science of Uncertainty by Michael J. Evans and Jeffrey S. Rosenthal:** Provides a thorough explanation of the theoretical underpinnings of confidence intervals and their interpretation.

### 3. Properties of Estimators

When choosing or evaluating an estimator, several properties are desirable:

#### 3.1 Unbiasedness

**Definition:** An estimator is unbiased if its expected value is equal to the population parameter it is estimating.

*   For an estimator $\hat{\theta}$ of a parameter $\theta$, it is unbiased if $E[\hat{\theta}] = \theta$.

**Example:**

*   The sample mean ($\bar{x}$) is an unbiased estimator of the population mean ($\mu$) because $E[\bar{x}] = \mu$.
*   The sample variance $s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2$ is an unbiased estimator of the population variance ($\sigma^2$) because $E[s^2] = \sigma^2$.
*   The sample variance calculated with $n$ in the denominator, $\frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2$, is a **biased** estimator of $\sigma^2$.

#### 3.2 Consistency

**Definition:** An estimator is consistent if it converges in probability to the population parameter as the sample size ($n$) approaches infinity. In simpler terms, as we collect more data, the estimate gets closer and closer to the true value.

*   An estimator $\hat{\theta}_n$ is consistent for $\theta$ if for every $\epsilon > 0$, $P(|\hat{\theta}_n - \theta| < \epsilon) \to 1$ as $n \to \infty$.

**Example:**

*   Both the sample mean ($\bar{x}$) and the sample median are consistent estimators of the population median. However, the sample mean is generally preferred for normally distributed data.

#### 3.3 Efficiency

**Definition:** An estimator is efficient if it has the smallest variance among all unbiased estimators for a given sample size.

*   If we have two unbiased estimators, $\hat{\theta}_1$ and $\hat{\theta}_2$, for parameter $\theta$, and $Var(\hat{\theta}_1) < Var(\hat{\theta}_2)$, then $\hat{\theta}_1$ is more efficient than $\hat{\theta}_2$.

**Example:**

*   For a normal distribution, the sample mean ($\bar{x}$) is the most efficient unbiased estimator of the population mean ($\mu$).

#### 3.4 Sufficiency

**Definition:** An estimator is sufficient if it uses all the information in the sample about the population parameter. Formally, a statistic $T(X_1, \dots, X_n)$ is sufficient for $\theta$ if the conditional distribution of the sample $(X_1, \dots, X_n)$ given $T(X_1, \dots, X_n) = t$ does not depend on $\theta$.

**Example:**

*   The sample mean ($\bar{x}$) is a sufficient statistic for the mean of a normal distribution.

**Important Points to Remember:**

*   Unbiasedness and consistency are fundamental properties.
*   Efficiency is important for minimizing the impact of sampling variability.
*   While sufficiency is a theoretical concept, it helps in understanding which statistics capture the most information.

**Textbook/Reference Integration:**

*   **Fundamentals of mathematical statistics by Gupta, S. C., and V. K. Kapoor:** Provides rigorous mathematical treatments of these estimator properties.
*   **Probability and Statistics for Data Science by Carlos Fernandez-Granda:** Explains the intuition behind these properties in a data science context.

### 4. Methods of Estimation

Several methods exist for constructing estimators:

#### 4.1 Method of Moments

**Description:** This method equates population moments to their corresponding sample moments and solves for the parameters.

*   **Population Moments:** $E[X^k]$
*   **Sample Moments:** $\frac{1}{n} \sum_{i=1}^{n} X_i^k$

**Example (Estimating the mean of a normal distribution):**

*   The first population moment is $E[X] = \mu$.
*   The first sample moment is $\frac{1}{n} \sum_{i=1}^{n} X_i = \bar{x}$.
*   Equating them: $\mu = \bar{x}$. So, the method of moments estimator for $\mu$ is $\bar{x}$.

**Example (Estimating the mean and variance of a normal distribution):**

*   Population moments: $E[X] = \mu$, $E[X^2] = \sigma^2 + \mu^2$.
*   Sample moments: $\bar{x}$, $\frac{1}{n} \sum_{i=1}^{n} X_i^2$.
*   Equating:
    1.  $\mu = \bar{x}$
    2.  $\sigma^2 + \mu^2 = \frac{1}{n} \sum_{i=1}^{n} X_i^2$
*   Substituting $\mu = \bar{x}$ into the second equation:
    *   $\sigma^2 + \bar{x}^2 = \frac{1}{n} \sum_{i=1}^{n} X_i^2$
    *   $\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} X_i^2 - \bar{x}^2$
*   The method of moments estimators are $\hat{\mu}_{MM} = \bar{x}$ and $\hat{\sigma}^2_{MM} = \frac{1}{n} \sum_{i=1}^{n} X_i^2 - \bar{x}^2$. Notice that $\hat{\sigma}^2_{MM}$ is the biased estimator of the variance.

#### 4.2 Maximum Likelihood Estimation (MLE)

**Description:** MLE is a widely used method that finds the parameter values that maximize the likelihood of observing the given sample data.

**Key Concepts:**

*   **Likelihood Function $L(\theta | x_1, \dots, x_n)$:** The probability of observing the sample data given a particular set of parameter values. It's often written as the product of the probability density functions (PDFs) or probability mass functions (PMFs) of individual observations, assuming independence:
    *   $L(\theta | x_1, \dots, x_n) = \prod_{i=1}^{n} f(x_i | \theta)$
*   **Log-Likelihood Function:** It's often easier to maximize the logarithm of the likelihood function, as the logarithm is a monotonically increasing function.
    *   $l(\theta) = \log L(\theta) = \sum_{i=1}^{n} \log f(x_i | \theta)$

**Steps to find MLE:**

1.  Write down the likelihood function for the sample.
2.  Take the natural logarithm of the likelihood function (log-likelihood).
3.  Find the derivative of the log-likelihood function with respect to the parameter(s).
4.  Set the derivative(s) to zero and solve for the parameter(s).
5.  Verify that this solution corresponds to a maximum (usually by checking the second derivative).

**Example (Estimating the mean $\mu$ of a normal distribution with known $\sigma$):**

*   PDF of normal distribution: $f(x|\mu, \sigma) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$
*   Likelihood Function: $L(\mu | x_1, \dots, x_n) = \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x_i-\mu)^2}{2\sigma^2}} = \left(\frac{1}{\sqrt{2\pi}\sigma}\right)^n e^{-\sum_{i=1}^{n}\frac{(x_i-\mu)^2}{2\sigma^2}}$
*   Log-Likelihood Function: $l(\mu) = \log L(\mu) = -n\log(\sqrt{2\pi}\sigma) - \sum_{i=1}^{n}\frac{(x_i-\mu)^2}{2\sigma^2}$
*   Derivative with respect to $\mu$: $\frac{\partial l(\mu)}{\partial \mu} = - \sum_{i=1}^{n} \frac{2(x_i-\mu)(-1)}{2\sigma^2} = \sum_{i=1}^{n} \frac{x_i-\mu}{\sigma^2}$
*   Set derivative to zero: $\sum_{i=1}^{n} \frac{x_i-\mu}{\sigma^2} = 0$
    *   $\frac{1}{\sigma^2} \sum_{i=1}^{n} (x_i-\mu) = 0$
    *   $\sum_{i=1}^{n} x_i - \sum_{i=1}^{n} \mu = 0$
    *   $\sum_{i=1}^{n} x_i - n\mu = 0$
    *   $n\mu = \sum_{i=1}^{n} x_i$
    *   $\mu = \frac{1}{n} \sum_{i=1}^{n} x_i = \bar{x}$
*   The MLE for $\mu$ is $\hat{\mu}_{MLE} = \bar{x}$.

**Properties of MLEs:**

*   MLEs are generally consistent and asymptotically efficient.
*   MLEs are often biased for finite sample sizes, but the bias decreases as $n$ increases.

**Textbook/Reference Integration:**

*   **Introduction to Linear Algebra by Gilbert Strang:** While not directly about estimation, linear algebra provides the mathematical framework for understanding many statistical models that estimation is applied to.
*   **Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron:** Provides context on how estimation is a core component of training machine learning models.
*   **Fundamentals of mathematical statistics by Gupta, S. C., and V. K. Kapoor:** Offers in-depth coverage of the theoretical basis and applications of both the Method of Moments and MLE.

### 5. Application in AI and Data Science

Statistical estimation is fundamental to many AI and Data Science tasks:

*   **Model Training:** Estimating model parameters (e.g., weights in neural networks, coefficients in linear regression) from training data.
*   **Hyperparameter Tuning:** Estimating the performance of a model with different hyperparameter settings.
*   **Feature Engineering:** Estimating the statistical properties of features.
*   **Data Analysis:** Estimating population characteristics to understand trends and patterns.
*   **Forecasting:** Estimating future values based on historical data.

**Example (Linear Regression):**

In linear regression, we aim to model the relationship between a dependent variable $Y$ and one or more independent variables $X$ as $Y = \beta_0 + \beta_1 X_1 + \dots + \beta_p X_p + \epsilon$. The goal is to estimate the coefficients $\beta_0, \beta_1, \dots, \beta_p$ from the observed data.

*   **Point Estimation:** Ordinary Least Squares (OLS) is a common method to find point estimates for the regression coefficients.
*   **Interval Estimation:** Confidence intervals for the regression coefficients can be constructed to quantify the uncertainty in these estimates.

**Course Outcomes Alignment:**

*   **CO1 (Neural Networks, Supervised/Unsupervised Learning):** Parameter estimation is the core of supervised learning.
*   **CO3 (Descriptive Statistics, Correlation, Regression):** Regression analysis heavily relies on estimating coefficients.
*   **CO4 (Integrate Statistical Approaches and ML):** Estimation bridges statistical theory and practical ML implementation.

### 6. Practice Questions and Exercises

1.  **Question:** A researcher collects a sample of 50 students and finds their average study hours per week to be 20. The population standard deviation of study hours is known to be 5 hours. Calculate a 90% confidence interval for the average study hours of all students.
    *   **Answer:**
        *   $\bar{x} = 20$, $\sigma = 5$, $n = 50$
        *   For 90% confidence, $\alpha = 0.10$, so $z_{\alpha/2} = z_{0.05} \approx 1.645$.
        *   Margin of Error = $1.645 \times \frac{5}{\sqrt{50}} \approx 1.645 \times \frac{5}{7.071} \approx 1.165$
        *   Confidence Interval = $20 \pm 1.165$ = (18.835, 21.165) hours.

2.  **Question:** Suppose you are estimating the proportion of defective items in a manufacturing process. You sample 100 items and find 8 defective ones.
    *   a) What is the point estimate for the proportion of defective items?
    *   b) What is the method of moments estimator for the proportion?
    *   c) If you were to use Maximum Likelihood Estimation, what would be the estimator for the proportion?
    *   **Answer:**
        *   a) Point Estimate (sample proportion) $\hat{p} = \frac{8}{100} = 0.08$.
        *   b) The method of moments estimator for a proportion is also the sample proportion, $\hat{p} = \bar{X}$, where $X$ is a Bernoulli random variable ($X=1$ if defective, $X=0$ otherwise). So, $\hat{p}_{MM} = 0.08$.
        *   c) The likelihood function for a binomial proportion is $L(p) = \binom{n}{k} p^k (1-p)^{n-k}$. Maximizing this with respect to $p$ yields $\hat{p}_{MLE} = \frac{k}{n} = \frac{8}{100} = 0.08$.

3.  **Question:** Explain the difference between a point estimate and an interval estimate. Which one provides more information about the population parameter and why?
    *   **Answer:** A point estimate is a single value that estimates a population parameter. An interval estimate provides a range of values within which the parameter is likely to lie, with a specified level of confidence. An interval estimate provides more information because it quantifies the uncertainty associated with the estimation. It tells us not only a likely value but also how precise that estimate is.

4.  **Question:** Why is the denominator $n-1$ used in the sample variance formula to make it an unbiased estimator of the population variance? (Conceptual explanation is sufficient).
    *   **Answer:** Using $n-1$ instead of $n$ corrects for the fact that the sample mean ($\bar{x}$) is used in the calculation of the sample variance. Since $\bar{x}$ is calculated from the same sample data, it is likely to be closer to the sample values than the true population mean ($\mu$). This leads to the sum of squared deviations from $\bar{x}$ being smaller than the sum of squared deviations from $\mu$. Dividing by $n-1$ instead of $n$ inflates the sample variance, compensating for this underestimation and making it an unbiased estimator of the population variance.

### 7. Key Points to Remember

*   **Estimation is crucial for inferring population characteristics from sample data.**
*   **Point estimates** provide a single value, while **interval estimates (confidence intervals)** provide a range with a confidence level, quantifying uncertainty.
*   Desirable estimator properties include **unbiasedness, consistency, and efficiency.**
*   **The sample mean ($\bar{x}$) is an unbiased and consistent estimator for the population mean ($\mu$).**
*   **The sample variance ($s^2$) with $(n-1)$ in the denominator is an unbiased estimator for the population variance ($\sigma^2$).**
*   **Method of Moments** and **Maximum Likelihood Estimation (MLE)** are common techniques for constructing estimators.
*   **MLEs** are generally preferred due to their desirable asymptotic properties (consistency and efficiency).
*   Understanding estimation is fundamental for building and interpreting models in AI and Data Science.

---
