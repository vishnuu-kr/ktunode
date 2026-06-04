---
title: "statistical estimation"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d96"
status: "completed"
scrapedAt: "2026-05-20T17:49:53.484Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

## Topic: Statistical Estimation

This topic focuses on how we use sample data to make educated guesses about the characteristics of a larger population. In AI and Data Science, we rarely have access to the entire population, so estimation is a fundamental technique for understanding and modeling the world.

---

### Learning Outcomes Covered:

*   **Understanding the concept of statistical estimation:** Defining what estimation is and why it's crucial in AI and Data Science.
*   **Differentiating between point estimation and interval estimation:** Exploring the two main approaches to estimation.
*   **Identifying and applying common estimation techniques:** Learning about methods like Maximum Likelihood Estimation (MLE) and Method of Moments (MOM).
*   **Understanding the properties of good estimators:** Discussing concepts like unbiasedness, consistency, and efficiency.
*   **Applying estimation techniques to real-world AI/Data Science problems:** Illustrating with practical examples.
*   **Interpreting the results of estimation:** Understanding what the estimated values tell us about the population.

---

### Key Concepts and Definitions:

#### 1. Population vs. Sample

*   **Population:** The entire group of individuals or objects that we are interested in studying. This is often a very large or even infinite set.
    *   *Example:* All possible customers of an e-commerce platform, all possible images a self-driving car might encounter.
*   **Sample:** A subset of the population that is collected and analyzed. Samples are used to make inferences about the population.
    *   *Example:* A random selection of 1000 customers who have made a purchase, a dataset of 500 images collected by a self-driving car in controlled conditions.

#### 2. Parameters vs. Statistics

*   **Parameter:** A numerical characteristic of a population. Parameters are usually unknown and are what we want to estimate. They are often denoted by Greek letters.
    *   *Examples:*
        *   Population mean ($\mu$)
        *   Population standard deviation ($\sigma$)
        *   Population proportion ($p$)
*   **Statistic:** A numerical characteristic of a sample. Statistics are calculated from sample data and are used to estimate population parameters. They are often denoted by Roman letters.
    *   *Examples:*
        *   Sample mean ($\bar{x}$)
        *   Sample standard deviation ($s$)
        *   Sample proportion ($\hat{p}$)

#### 3. Statistical Estimation: The Goal

Statistical estimation is the process of using a statistic from a sample to estimate an unknown population parameter.

*   **Why is it important in AI/Data Science?**
    *   **Model Training:** We estimate model parameters (e.g., weights in a neural network) from training data.
    *   **Hypothesis Testing:** We estimate population characteristics to test hypotheses about them.
    *   **Data Analysis:** We estimate key metrics (like average customer spending or click-through rates) to understand trends.
    *   **Uncertainty Quantification:** Estimation helps us understand the uncertainty associated with our findings.

#### 4. Types of Estimation

##### a) Point Estimation

*   **Definition:** A single value that serves as the "best guess" for an unknown population parameter.
*   **How it works:** We compute a statistic from the sample data, and this statistic is our point estimate for the corresponding population parameter.
*   **Examples:**
    *   Using the sample mean ($\bar{x}$) to estimate the population mean ($\mu$).
    *   Using the sample proportion ($\hat{p}$) to estimate the population proportion ($p$).
*   **Limitation:** A single point estimate doesn't tell us anything about the reliability or precision of the estimate.

##### b) Interval Estimation (Confidence Intervals)

*   **Definition:** A range of values within which the population parameter is likely to lie, with a certain level of confidence.
*   **How it works:** We construct an interval around the point estimate, taking into account the variability of the sample statistic. This interval is called a confidence interval.
*   **Confidence Level:** The probability that the interval contains the true population parameter. Common confidence levels are 90%, 95%, and 99%.
*   **Formula (General):**
    $Point Estimate \pm Margin of Error$
    *   The margin of error depends on the confidence level, the variability in the data (e.g., standard deviation), and the sample size.
*   **Example:** "We are 95% confident that the true average height of all adult males in a city is between 170 cm and 175 cm."
*   **Importance in AI/Data Science:** Confidence intervals help us understand the uncertainty in our estimates, which is vital for making robust decisions and evaluating model performance.

#### 5. Methods of Estimation

##### a) Method of Moments (MOM)

*   **Concept:** This method equates sample moments to population moments and solves for the parameters.
    *   **Population Moments:** These are expected values of powers of the random variable (e.g., $E[X]$, $E[X^2]$).
    *   **Sample Moments:** These are calculated from the sample data (e.g., $\bar{X}$, $\frac{1}{n}\sum X_i^2$).
*   **Procedure:**
    1.  Define the population moments in terms of the unknown parameters.
    2.  Calculate the corresponding sample moments from the data.
    3.  Set the population moments equal to the sample moments.
    4.  Solve the resulting system of equations for the unknown parameters.
*   **Example:** Estimating the mean ($\mu$) and variance ($\sigma^2$) of a Normal distribution ($X \sim N(\mu, \sigma^2)$).
    *   Population moments:
        *   $E[X] = \mu$
        *   $E[X^2] = Var(X) + (E[X])^2 = \sigma^2 + \mu^2$
    *   Sample moments:
        *   First sample moment: $\bar{X} = \frac{1}{n}\sum X_i$
        *   Second sample moment: $M_2 = \frac{1}{n}\sum X_i^2$
    *   Equating and solving:
        *   $\mu = \bar{X}$ (This is the same as the sample mean as an estimator for $\mu$)
        *   $\sigma^2 + \mu^2 = M_2$
        *   $\sigma^2 = M_2 - \mu^2 = M_2 - (\bar{X})^2 = \frac{1}{n}\sum X_i^2 - (\frac{1}{n}\sum X_i)^2$
        *   The MOM estimator for $\sigma^2$ is $\frac{1}{n}\sum (X_i - \bar{X})^2$. *Note: This is a biased estimator of the population variance, whereas the unbiased sample variance uses $n-1$ in the denominator.*
*   **Reference:** Gupta & Kapoor, Fundamentals of mathematical statistics, Chapter 17.

##### b) Maximum Likelihood Estimation (MLE)

*   **Concept:** This is a widely used and powerful method. It finds the parameter values that maximize the likelihood of observing the given sample data.
*   **Likelihood Function ($L(\theta | x_1, ..., x_n)$):** This function represents the probability of observing the given sample data ($x_1, ..., x_n$) as a function of the parameter(s) ($\theta$). If the data points are independent and identically distributed (i.i.d.), the likelihood is the product of the probability density functions (PDFs) or probability mass functions (PMFs) for each data point:
    $L(\theta | x_1, ..., x_n) = f(x_1 | \theta) \cdot f(x_2 | \theta) \cdot ... \cdot f(x_n | \theta)$
*   **Log-Likelihood Function ($\ell(\theta | x_1, ..., x_n)$):** Maximizing the likelihood function is equivalent to maximizing its logarithm (the log-likelihood), which is often easier computationally because it turns products into sums.
    $\ell(\theta | x_1, ..., x_n) = \ln(L(\theta | x_1, ..., x_n)) = \sum_{i=1}^n \ln(f(x_i | \theta))$
*   **Procedure:**
    1.  Write down the likelihood function for the observed data, given a specific probability distribution and its parameters.
    2.  Take the natural logarithm of the likelihood function to get the log-likelihood function.
    3.  Find the parameter values that maximize the log-likelihood function. This is typically done by taking the derivative(s) of the log-likelihood with respect to the parameter(s), setting them to zero, and solving for the parameter(s).
*   **Example:** Estimating the parameter $\lambda$ for a Poisson distribution.
    *   Assume data $x_1, ..., x_n$ are i.i.d. from a Poisson distribution with parameter $\lambda$. The PMF is $P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}$.
    *   Likelihood function:
        $L(\lambda | x_1, ..., x_n) = \prod_{i=1}^n \frac{e^{-\lambda} \lambda^{x_i}}{x_i!} = \frac{e^{-n\lambda} \lambda^{\sum x_i}}{\prod x_i!}$
    *   Log-likelihood function:
        $\ell(\lambda) = \ln(L(\lambda)) = -n\lambda + (\sum x_i) \ln(\lambda) - \sum \ln(x_i!)$
    *   Take the derivative with respect to $\lambda$ and set to zero:
        $\frac{d\ell}{d\lambda} = -n + \frac{\sum x_i}{\lambda} = 0$
    *   Solve for $\lambda$:
        $\frac{\sum x_i}{\lambda} = n \implies \lambda = \frac{\sum x_i}{n} = \bar{x}$
    *   The MLE for the Poisson parameter $\lambda$ is the sample mean.
*   **References:**
    *   Géron, Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow (often implicitly used when training models, e.g., weight estimation).
    *   Deisenroth, Faisal, Ong, Mathematics for machine learning (discusses probability distributions and optimization for learning).
    *   Fernandez-Granda, Probability and Statistics for Data Science (covers MLE in detail).

#### 6. Properties of Estimators

Good estimators should ideally possess desirable statistical properties.

##### a) Unbiasedness

*   **Definition:** An estimator is unbiased if its expected value is equal to the true population parameter it is trying to estimate.
*   **Formula:** $E[\hat{\theta}] = \theta$, where $\hat{\theta}$ is the estimator and $\theta$ is the true parameter.
*   **Importance:** Unbiasedness means that, on average, the estimator does not systematically overestimate or underestimate the true parameter.
*   **Example:** The sample mean ($\bar{x}$) is an unbiased estimator of the population mean ($\mu$).
    *   $E[\bar{x}] = E[\frac{1}{n}\sum X_i] = \frac{1}{n}\sum E[X_i] = \frac{1}{n}\sum \mu = \frac{1}{n}(n\mu) = \mu$.
*   **Example of a biased estimator:** The sample variance $s^2 = \frac{1}{n}\sum (X_i - \bar{X})^2$ is a biased estimator of $\sigma^2$. The unbiased estimator is $s^2_{unbiased} = \frac{1}{n-1}\sum (X_i - \bar{X})^2$.

##### b) Consistency

*   **Definition:** An estimator is consistent if it converges in probability to the true population parameter as the sample size ($n$) approaches infinity.
*   **Formula:** $\hat{\theta} \xrightarrow{p} \theta$ as $n \to \infty$. This means that the probability that the absolute difference between the estimator and the true parameter is less than any small positive number ($\epsilon$) goes to 1 as $n$ increases. $P(|\hat{\theta} - \theta| < \epsilon) \to 1$ as $n \to \infty$.
*   **Importance:** Consistency means that with larger samples, our estimates become more accurate.
*   **Relationship with Unbiasedness:** Most unbiased estimators are consistent, but consistency does not imply unbiasedness. An estimator can be biased but still be consistent if the bias decreases as $n$ increases.
*   **Example:** Both the biased sample variance ($\frac{1}{n}\sum (X_i - \bar{X})^2$) and the unbiased sample variance ($\frac{1}{n-1}\sum (X_i - \bar{X})^2$) are consistent estimators of $\sigma^2$.

##### c) Efficiency

*   **Definition:** Among a class of unbiased estimators for a parameter, the most efficient estimator is the one with the smallest variance.
*   **Importance:** Efficiency means that the estimator has the least amount of spread or variability around the true parameter.
*   **Mean Squared Error (MSE):** A common measure of an estimator's quality, which accounts for both bias and variance: $MSE(\hat{\theta}) = E[(\hat{\theta} - \theta)^2] = Var(\hat{\theta}) + (Bias(\hat{\theta}))^2$. An efficient estimator minimizes MSE.
*   **Rao-Blackwell Theorem and Cramer-Rao Lower Bound:** These theoretical results provide bounds on the minimum variance achievable by an unbiased estimator. Estimators that achieve this bound are called "efficient estimators."
*   **Example:** The MLE of the mean of a Normal distribution ($\bar{x}$) is not only unbiased and consistent but also the most efficient estimator for $\mu$.

#### 7. Applications in AI/Data Science

*   **Parameter Estimation in Machine Learning Models:**
    *   **Linear Regression:** Estimating the coefficients (weights) of the linear model using Ordinary Least Squares (OLS) or MLE.
        *   *Reference:* Strang, Introduction to Linear Algebra (for understanding the matrix operations in OLS).
        *   *Reference:* Deisenroth, Faisal, Ong, Mathematics for machine learning (covers linear regression and optimization).
    *   **Logistic Regression:** Estimating the weights that define the probability of a binary outcome. This is typically done using MLE.
    *   **Neural Networks:** Estimating the weights and biases of the network layers through backpropagation, which is an iterative optimization process often driven by minimizing a loss function (related to MLE or MSE).
        *   *Reference:* Géron, Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow.
    *   **Bayesian Methods:** In Bayesian statistics, parameters are treated as random variables with probability distributions. We estimate the *posterior distribution* of the parameters given the data, often using techniques like Markov Chain Monte Carlo (MCMC).
        *   *Reference:* Fernandez-Granda, Probability and Statistics for Data Science (may touch upon Bayesian estimation).

*   **Estimating Performance Metrics:**
    *   Estimating the accuracy, precision, recall, or F1-score of a classification model from a test dataset. These are essentially estimates of the true performance metrics across all possible data.
    *   Estimating the mean squared error (MSE) or root mean squared error (RMSE) of a regression model.

*   **A/B Testing and Experimentation:**
    *   Estimating the difference in conversion rates between two versions of a website (A vs. B) to determine which performs better. This involves estimating proportions and comparing them.

#### 8. Important Points to Remember

*   **Sample vs. Population:** Always distinguish between sample statistics and population parameters.
*   **Bias vs. Variance Trade-off:** Estimators with low bias might have high variance, and vice-versa. The goal is often to find a balance.
*   **MLE Properties:** MLEs are often asymptotically unbiased, consistent, and asymptotically efficient.
*   **Confidence Intervals vs. Probability Statements:** A confidence interval is a statement about the *method* of constructing the interval. Once an interval is computed, the true parameter is either in it or not; we cannot say it has a certain probability of being in that specific interval. Instead, we say we are "95% confident" that the interval captures the true parameter.
*   **Data Dependence:** The quality of your estimates heavily depends on the quality and representativeness of your sample data.

---

### Practice Questions and Exercises:

**Question 1:**
You are analyzing customer purchase data for an e-commerce platform. You have a sample of 1000 customers, and their average purchase amount is $75. What is the point estimate for the average purchase amount of *all* customers on the platform?
    *   a) $75
    *   b) $75000
    *   c) The standard deviation of the sample
    *   d) It cannot be determined without knowing the population standard deviation

**Question 2:**
Which of the following is a desirable property of a statistical estimator?
    *   a) Bias
    *   b) Inconsistency
    *   c) High variance
    *   d) Unbiasedness

**Question 3:**
Suppose you are using Maximum Likelihood Estimation (MLE) to estimate the parameter $\theta$ of a distribution. You have calculated the log-likelihood function $\ell(\theta)$ and found its derivative $\frac{d\ell}{d\theta}$. How would you typically find the MLE?
    *   a) Set $\frac{d\ell}{d\theta}$ to infinity and solve for $\theta$.
    *   b) Set $\frac{d\ell}{d\theta} = 0$ and solve for $\theta$.
    *   c) Take the integral of $\frac{d\ell}{d\theta}$ and set it to zero.
    *   d) Ignore the derivative and use the sample mean.

**Question 4:**
You are estimating the proportion of users who click on an advertisement. You have a sample of 500 users, and 50 of them clicked the ad.
    *   a) What is the point estimate for the proportion of users who click the ad?
    *   b) If you wanted to construct a 95% confidence interval for this proportion, what additional information would you need, and what would be the general form of the interval?

**Question 5:**
Let $X_1, X_2, ..., X_n$ be a random sample from a Bernoulli distribution with parameter $p$. The probability mass function is $P(X=1) = p$ and $P(X=0) = 1-p$.
    *   a) Find the likelihood function $L(p | x_1, ..., x_n)$.
    *   b) Find the Maximum Likelihood Estimator (MLE) for $p$.

---

### Answers to Practice Questions:

**Answer 1:**
    *   **a) $75**
        *   **Explanation:** The sample average ($75) is the point estimate for the population average.

**Answer 2:**
    *   **d) Unbiasedness**
        *   **Explanation:** Unbiasedness, consistency, and efficiency are desirable properties of estimators. Bias is a lack of unbiasedness.

**Answer 3:**
    *   **b) Set $\frac{d\ell}{d\theta} = 0$ and solve for $\theta$.**
        *   **Explanation:** To find the maximum of a function, we find where its derivative is zero and where the second derivative is negative (though often in MLE, the nature of the likelihood function guarantees a maximum).

**Answer 4:**
    *   a) The point estimate for the proportion of users who click the ad is the sample proportion: $\hat{p} = \frac{\text{Number of users who clicked}}{\text{Total number of users}} = \frac{50}{500} = 0.10$ or 10%.
    *   b) To construct a 95% confidence interval for the proportion, you would typically need:
        *   The point estimate ($\hat{p} = 0.10$).
        *   The sample size ($n = 500$).
        *   The critical value from the standard normal distribution for a 95% confidence level (which is approximately 1.96).
        *   The estimated standard error of the proportion, which is $\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$.
        *   The general form of the confidence interval would be:
            $\hat{p} \pm Z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$
            Where $Z_{\alpha/2}$ is the critical value (1.96 for 95% confidence).

**Answer 5:**
    *   a) For a Bernoulli distribution, $P(X=x_i) = p^{x_i} (1-p)^{1-x_i}$.
        The likelihood function is:
        $L(p | x_1, ..., x_n) = \prod_{i=1}^n [p^{x_i} (1-p)^{1-x_i}]$
        $L(p | x_1, ..., x_n) = p^{\sum x_i} (1-p)^{\sum (1-x_i)}$
        Since $\sum (1-x_i) = n - \sum x_i$, we have:
        $L(p | x_1, ..., x_n) = p^{\sum x_i} (1-p)^{n - \sum x_i}$

    *   b) To find the MLE for $p$, we first find the log-likelihood:
        $\ell(p) = \ln(L(p)) = (\sum x_i) \ln(p) + (n - \sum x_i) \ln(1-p)$
        Now, take the derivative with respect to $p$ and set it to zero:
        $\frac{d\ell}{dp} = \frac{\sum x_i}{p} - \frac{n - \sum x_i}{1-p} = 0$
        $\frac{\sum x_i}{p} = \frac{n - \sum x_i}{1-p}$
        $(\sum x_i)(1-p) = p(n - \sum x_i)$
        $\sum x_i - p(\sum x_i) = pn - p(\sum x_i)$
        $\sum x_i = pn$
        $p = \frac{\sum x_i}{n}$
        The MLE for $p$ is the sample mean, $\bar{x}$.

---

This concludes the notes on statistical estimation for Module 3. Remember to practice these concepts with real-world data and explore the applications in your AI and Data Science projects.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
