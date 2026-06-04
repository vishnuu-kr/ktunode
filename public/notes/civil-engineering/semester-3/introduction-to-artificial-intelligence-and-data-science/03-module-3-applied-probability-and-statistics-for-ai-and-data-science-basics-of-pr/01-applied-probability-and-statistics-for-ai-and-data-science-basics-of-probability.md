---
title: "Applied Probability and Statistics for AI and Data Science : Basics of 
probability-random variables and statistical measures - rules in 
probability- Bayes theorem and its applications- statistical estimation-
Maximum Likelihood Estimator (MLE) - statistical summaries- 
Correlation analysis- linear correlation (direct problems only)- regression 
analysis- linear regression (using least square method) (Text book 4 )"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of 
probability"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8107a5"
status: "completed"
scrapedAt: "2026-05-20T18:41:07.928Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

This module introduces the fundamental concepts of probability and statistics that are essential for understanding and applying Artificial Intelligence and Data Science techniques. We will delve into random variables, probability rules, Bayes' Theorem, statistical estimation, and foundational correlation and regression analyses.

## 1. Random Variables and Statistical Measures

### 1.1. Random Variables

A **random variable** is a variable whose value is a numerical outcome of a random phenomenon. It essentially assigns a number to each outcome in the sample space of an experiment.

*   **Discrete Random Variable:** A random variable that can only take a finite number of values or a countably infinite number of values.
    *   **Example:** The number of heads when flipping a coin 3 times (possible values: 0, 1, 2, 3).
    *   **Example:** The number of defective items in a batch.

*   **Continuous Random Variable:** A random variable that can take any value within a given range.
    *   **Example:** The height of a person.
    *   **Example:** The temperature of a room.

### 1.2. Probability Distributions

A **probability distribution** describes the likelihood of each possible outcome of a random variable.

*   **Probability Mass Function (PMF) for Discrete Random Variables:** For a discrete random variable $X$, the PMF, denoted by $P(X=x)$, gives the probability that $X$ takes on the specific value $x$.
    *   **Properties:**
        *   $0 \le P(X=x) \le 1$ for all $x$.
        *   $\sum_{x} P(X=x) = 1$ (the sum of probabilities over all possible values is 1).

*   **Probability Density Function (PDF) for Continuous Random Variables:** For a continuous random variable $X$, the PDF, denoted by $f(x)$, describes the relative likelihood for $X$ to take on a given value. The probability of $X$ falling within an interval $[a, b]$ is given by the integral of the PDF from $a$ to $b$.
    *   **Properties:**
        *   $f(x) \ge 0$ for all $x$.
        *   $\int_{-\infty}^{\infty} f(x) dx = 1$ (the total area under the PDF curve is 1).
    *   **Important Note:** For continuous random variables, the probability of taking a specific value is zero, i.e., $P(X=x) = 0$. We are interested in probabilities over intervals.

### 1.3. Statistical Measures

These are numerical characteristics used to summarize and describe the properties of a random variable or a dataset.

*   **Measures of Central Tendency:** Describe the center or typical value of a dataset.
    *   **Mean (Expected Value):** The average of all possible values, weighted by their probabilities.
        *   For discrete $X$: $E[X] = \mu = \sum_{x} x P(X=x)$
        *   For continuous $X$: $E[X] = \mu = \int_{-\infty}^{\infty} x f(x) dx$
    *   **Median:** The middle value of a dataset when arranged in ascending order. For a continuous distribution, it's the value $m$ such that $P(X \le m) = 0.5$.
    *   **Mode:** The value that occurs most frequently in a dataset or has the highest probability in a distribution.

*   **Measures of Dispersion (Variability):** Describe how spread out the data is.
    *   **Variance:** The average of the squared differences from the mean. It quantifies the spread of the data.
        *   $Var(X) = \sigma^2 = E[(X - \mu)^2] = E[X^2] - (E[X])^2$
    *   **Standard Deviation:** The square root of the variance. It's in the same units as the random variable and is a more interpretable measure of spread.
        *   $\sigma = \sqrt{Var(X)}$

*   **Measures of Shape:** Describe the shape of the probability distribution.
    *   **Skewness:** Measures the asymmetry of the probability distribution.
        *   **Positive Skewness:** Tail on the right side is longer; mean > median > mode.
        *   **Negative Skewness:** Tail on the left side is longer; mode > median > mean.
        *   **Zero Skewness:** Symmetric distribution (like a normal distribution).
    *   **Kurtosis:** Measures the "tailedness" or peakedness of the probability distribution.
        *   **Leptokurtic (High Kurtosis):** Sharper peak, heavier tails.
        *   **Platykurtic (Low Kurtosis):** Flatter peak, lighter tails.
        *   **Mesokurtic (Normal Kurtosis):** Similar to a normal distribution.

**Example (Discrete Random Variable):**
Let $X$ be the outcome of rolling a fair six-sided die.
*   Sample Space: $\{1, 2, 3, 4, 5, 6\}$
*   $P(X=x) = 1/6$ for $x \in \{1, 2, 3, 4, 5, 6\}$.
*   **Mean:** $E[X] = (1 \times 1/6) + (2 \times 1/6) + ... + (6 \times 1/6) = (1+2+3+4+5+6)/6 = 21/6 = 3.5$
*   **Variance:**
    *   $E[X^2] = (1^2 \times 1/6) + (2^2 \times 1/6) + ... + (6^2 \times 1/6) = (1+4+9+16+25+36)/6 = 91/6$
    *   $Var(X) = E[X^2] - (E[X])^2 = 91/6 - (3.5)^2 = 91/6 - 12.25 = 15.1667 - 12.25 = 2.9167$
*   **Standard Deviation:** $\sigma = \sqrt{2.9167} \approx 1.708$

## 2. Rules in Probability

These are fundamental rules for calculating probabilities of events.

### 2.1. Basic Rules

*   **Complement Rule:** The probability of an event not occurring is 1 minus the probability of the event occurring.
    *   $P(A') = 1 - P(A)$

*   **Addition Rule (for Mutually Exclusive Events):** If two events A and B cannot occur at the same time (mutually exclusive), the probability of A or B occurring is the sum of their individual probabilities.
    *   $P(A \cup B) = P(A) + P(B)$ (if $A \cap B = \emptyset$)

*   **General Addition Rule (for any Events):** The probability of A or B occurring is the sum of their individual probabilities minus the probability of both occurring.
    *   $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

### 2.2. Conditional Probability

The **conditional probability** of event A occurring given that event B has already occurred is denoted by $P(A|B)$.

*   **Formula:** $P(A|B) = \frac{P(A \cap B)}{P(B)}$, provided $P(B) > 0$.

### 2.3. Multiplication Rule

Used to find the probability of two events occurring.

*   **For Independent Events:** If events A and B are independent, the occurrence of one does not affect the probability of the other.
    *   $P(A \cap B) = P(A) \times P(B)$

*   **For Dependent Events:**
    *   $P(A \cap B) = P(A|B) P(B)$
    *   $P(A \cap B) = P(B|A) P(A)$

**Example:**
Suppose we have a bag with 5 red balls and 3 blue balls. We draw two balls without replacement.
Let R1 be the event of drawing a red ball first, and R2 be the event of drawing a red ball second.
*   $P(R1) = 5/8$
*   $P(R2|R1)$ (probability of drawing red second given red first) = $4/7$ (since one red ball is removed)
*   $P(R1 \cap R2) = P(R1) \times P(R2|R1) = (5/8) \times (4/7) = 20/56 = 5/14$

## 3. Bayes' Theorem and its Applications

### 3.1. Bayes' Theorem

Bayes' Theorem provides a way to update the probability of a hypothesis based on new evidence. It relates conditional probabilities.

Let $H_1, H_2, ..., H_k$ be a set of mutually exclusive and exhaustive hypotheses (i.e., they cover all possibilities and do not overlap). Let $E$ be some observed evidence. Bayes' Theorem states:

$P(H_i|E) = \frac{P(E|H_i) P(H_i)}{P(E)}$

where:
*   $P(H_i|E)$: **Posterior Probability** - the probability of hypothesis $H_i$ given the evidence $E$.
*   $P(E|H_i)$: **Likelihood** - the probability of observing evidence $E$ given hypothesis $H_i$.
*   $P(H_i)$: **Prior Probability** - the initial belief in hypothesis $H_i$ before observing any evidence.
*   $P(E)$: **Marginal Probability of Evidence** - the overall probability of observing the evidence $E$, which can be calculated using the law of total probability: $P(E) = \sum_{j=1}^{k} P(E|H_j) P(H_j)$.

**In simpler terms:**
Posterior = (Likelihood * Prior) / Marginal Likelihood

### 3.2. Applications

Bayes' Theorem is fundamental in many AI and Data Science applications:

*   **Spam Filtering:** Classifying emails as spam or not spam based on the words they contain.
*   **Medical Diagnosis:** Estimating the probability of a disease given a test result.
*   **Machine Learning Algorithms:** Naive Bayes classifier, Bayesian networks.
*   **Recommender Systems:** Updating user preferences based on new interactions.

**Example (Medical Diagnosis):**
Suppose a disease affects 1% of the population ($P(\text{Disease}) = 0.01$).
A test for this disease is 95% accurate for people who have the disease ($P(\text{Positive Test}|\text{Disease}) = 0.95$) and 90% accurate for people who do not have the disease (meaning it gives a false positive 10% of the time, $P(\text{Positive Test}|\text{No Disease}) = 0.10$).

What is the probability that a person actually has the disease given that they tested positive?

Let $D$ be the event of having the disease, and $D'$ be the event of not having the disease.
Let $T+$ be the event of a positive test.

We are given:
*   $P(D) = 0.01$
*   $P(D') = 1 - P(D) = 0.99$
*   $P(T+|D) = 0.95$ (Sensitivity)
*   $P(T+|D') = 0.10$ (False Positive Rate)

We want to find $P(D|T+)$. Using Bayes' Theorem:

$P(D|T+) = \frac{P(T+|D) P(D)}{P(T+)}$

First, calculate $P(T+)$ using the law of total probability:
$P(T+) = P(T+|D) P(D) + P(T+|D') P(D')$
$P(T+) = (0.95 \times 0.01) + (0.10 \times 0.99)$
$P(T+) = 0.0095 + 0.0990$
$P(T+) = 0.1085$

Now, substitute back into Bayes' Theorem:
$P(D|T+) = \frac{0.95 \times 0.01}{0.1085} = \frac{0.0095}{0.1085} \approx 0.0876$

**Conclusion:** Even with a positive test result, the probability of having the disease is only about 8.76%. This is because the disease is rare, and the false positive rate, though seemingly low, applied to a much larger group of healthy people, contributes significantly to positive test results.

## 4. Statistical Estimation

Statistical estimation involves using sample data to infer properties of an unknown population.

### 4.1. Point Estimation

A **point estimate** is a single value that is the best guess for an unknown population parameter.

*   **Estimator:** A function of sample data used to estimate a population parameter. For example, the sample mean ($\bar{x}$) is an estimator for the population mean ($\mu$).
*   **Estimate:** The actual numerical value obtained from an estimator using a specific sample.

**Properties of Good Estimators:**
*   **Unbiasedness:** An estimator is unbiased if its expected value is equal to the true population parameter. $E[\hat{\theta}] = \theta$.
*   **Consistency:** An estimator is consistent if it converges to the true population parameter as the sample size increases.
*   **Efficiency:** An estimator is efficient if it has the smallest variance among all unbiased estimators for a given sample size.

### 4.2. Interval Estimation (Confidence Intervals)

A **confidence interval** is a range of values that is likely to contain the unknown population parameter with a certain level of confidence.

*   **Confidence Level:** The probability that the interval contains the true population parameter (e.g., 95% confidence).

## 5. Maximum Likelihood Estimator (MLE)

The **Maximum Likelihood Estimator (MLE)** is a method for estimating the parameters of a statistical model. It finds the parameter values that maximize the likelihood of observing the given data.

### 5.1. The Likelihood Function

Given a statistical model with parameters $\theta$ and observed data $x_1, x_2, ..., x_n$, the **likelihood function**, denoted by $L(\theta | x_1, ..., x_n)$, is the joint probability (or probability density) of the observed data as a function of the parameters $\theta$.

*   If the data points are independent and identically distributed (i.i.d.):
    $L(\theta | x_1, ..., x_n) = \prod_{i=1}^{n} P(x_i | \theta)$

### 5.2. Finding the MLE

The MLE of $\theta$, denoted by $\hat{\theta}_{MLE}$, is the value of $\theta$ that maximizes $L(\theta | x_1, ..., x_n)$.

**Steps:**
1.  Write down the likelihood function $L(\theta | x_1, ..., x_n)$.
2.  It is often easier to maximize the **log-likelihood function**, $\ln(L(\theta | x_1, ..., x_n))$, because the logarithm is a monotonically increasing function, so maximizing $\ln(L)$ is equivalent to maximizing $L$.
3.  Take the derivative of the log-likelihood function with respect to $\theta$.
4.  Set the derivative equal to zero and solve for $\theta$. This gives the potential MLE.
5.  (Optional but important for rigor) Check the second derivative to confirm it's a maximum.

**Example:** Estimating the parameter $\lambda$ of a Poisson distribution.
Suppose we observe data points $x_1, x_2, ..., x_n$ that are assumed to follow a Poisson distribution with parameter $\lambda$. The PMF is $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$.

1.  **Likelihood Function:**
    $L(\lambda | x_1, ..., x_n) = \prod_{i=1}^{n} \frac{\lambda^{x_i} e^{-\lambda}}{x_i!} = \frac{\lambda^{\sum x_i} e^{-n\lambda}}{\prod x_i!}$

2.  **Log-Likelihood Function:**
    $\ln(L(\lambda)) = \ln(\lambda^{\sum x_i}) + \ln(e^{-n\lambda}) - \ln(\prod x_i!)$
    $\ln(L(\lambda)) = (\sum x_i) \ln(\lambda) - n\lambda - \sum \ln(x_i!)$

3.  **Derivative with respect to $\lambda$:**
    $\frac{d \ln(L(\lambda))}{d\lambda} = \frac{\sum x_i}{\lambda} - n$

4.  **Set derivative to zero and solve for $\lambda$:**
    $\frac{\sum x_i}{\lambda} - n = 0$
    $\frac{\sum x_i}{\lambda} = n$
    $\lambda = \frac{\sum x_i}{n}$

**Result:** The MLE for the parameter $\lambda$ of a Poisson distribution is the sample mean, $\hat{\lambda}_{MLE} = \bar{x}$.

**Important Point:** MLEs are widely used due to their desirable asymptotic properties (consistency, asymptotic normality, and efficiency) under certain conditions.

## 6. Statistical Summaries

Statistical summaries are concise ways to represent the main features of a dataset. They are derived from statistical measures.

*   **Measures of Central Tendency:**
    *   **Mean:** The average value.
    *   **Median:** The middle value.
    *   **Mode:** The most frequent value.

*   **Measures of Dispersion:**
    *   **Range:** The difference between the maximum and minimum values.
    *   **Variance:** Average squared deviation from the mean.
    *   **Standard Deviation:** Square root of variance, representing typical deviation.
    *   **Interquartile Range (IQR):** The difference between the 75th percentile (Q3) and the 25th percentile (Q1). It measures the spread of the middle 50% of data and is less sensitive to outliers than the range.

*   **Measures of Position:**
    *   **Percentiles/Quartiles:** Values that divide the data into 100 or 4 equal parts, respectively. (e.g., 25th percentile = Q1, 50th percentile = Median = Q2, 75th percentile = Q3).

*   **Graphical Summaries:**
    *   **Histograms:** Show the distribution of a single continuous variable.
    *   **Box Plots:** Visually display the five-number summary (minimum, Q1, median, Q3, maximum) and identify potential outliers.
    *   **Scatter Plots:** Show the relationship between two continuous variables.

**Example:** Summarizing the heights of a sample of 10 people.
Heights (in cm): 160, 165, 170, 172, 175, 178, 180, 182, 185, 190

*   **Mean:** (160 + ... + 190) / 10 = 178.7 cm
*   **Median:** (175 + 178) / 2 = 176.5 cm (average of the 5th and 6th values)
*   **Range:** 190 - 160 = 30 cm
*   **Sorted Data:** 160, 165, 170, 172, 175, 178, 180, 182, 185, 190
*   **Q1 (25th percentile):** Average of 2nd and 3rd values = (165 + 170) / 2 = 167.5 cm
*   **Q3 (75th percentile):** Average of 8th and 9th values = (182 + 185) / 2 = 183.5 cm
*   **IQR:** 183.5 - 167.5 = 16 cm

## 7. Correlation Analysis

Correlation analysis measures the strength and direction of the linear relationship between two variables.

### 7.1. Linear Correlation (Pearson Correlation Coefficient)

The **Pearson correlation coefficient**, denoted by $r$ (for sample) or $\rho$ (for population), measures the linear association between two continuous variables, $X$ and $Y$.

*   **Formula (for sample):**
    $r = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n} (x_i - \bar{x})^2 \sum_{i=1}^{n} (y_i - \bar{y})^2}} = \frac{Cov(X, Y)}{s_X s_Y}$
    where:
    *   $x_i, y_i$ are the individual data points.
    *   $\bar{x}, \bar{y}$ are the sample means.
    *   $s_X, s_Y$ are the sample standard deviations of $X$ and $Y$.
    *   $Cov(X, Y)$ is the sample covariance between $X$ and $Y$.

*   **Interpretation:**
    *   $r = 1$: Perfect positive linear correlation. As $X$ increases, $Y$ increases proportionally.
    *   $r = -1$: Perfect negative linear correlation. As $X$ increases, $Y$ decreases proportionally.
    *   $r = 0$: No linear correlation. There might be a non-linear relationship, or no relationship at all.
    *   $0 < r < 1$: Positive linear correlation (weak to strong).
    *   $-1 < r < 0$: Negative linear correlation (weak to strong).

**Important Points:**
*   **Correlation does not imply causation.** A strong correlation between two variables does not mean that one causes the other. There might be a lurking variable influencing both.
*   The Pearson correlation coefficient only measures **linear** relationships. If the relationship is non-linear (e.g., quadratic), $r$ might be close to zero even if there's a strong association.
*   The value of $r$ is between -1 and 1, inclusive.

### 7.2. Direct Problems Only (Focus on Calculation and Interpretation)

When asked to calculate correlation from data, you'll typically be given pairs of $(x_i, y_i)$ and asked to compute $r$.

**Example:**
Consider the following data pairs for study hours ($X$) and exam scores ($Y$):

| Study Hours ($X$) | Exam Score ($Y$) |
| :---------------- | :--------------- |
| 2                 | 60               |
| 4                 | 75               |
| 5                 | 80               |
| 7                 | 85               |
| 8                 | 90               |

1.  **Calculate means:**
    $\bar{x} = (2+4+5+7+8)/5 = 26/5 = 5.2$
    $\bar{y} = (60+75+80+85+90)/5 = 390/5 = 78$

2.  **Calculate deviations from means:**

| $X$ | $Y$ | $x_i - \bar{x}$ | $y_i - \bar{y}$ | $(x_i - \bar{x})(y_i - \bar{y})$ | $(x_i - \bar{x})^2$ | $(y_i - \bar{y})^2$ |
| :-: | :-: | :-------------: | :-------------: | :-----------------------------: | :-----------------: | :-----------------: |
| 2   | 60  | -3.2            | -18             | 57.6                            | 10.24               | 324                 |
| 4   | 75  | -1.2            | -3              | 3.6                             | 1.44                | 9                   |
| 5   | 80  | -0.2            | 2               | -0.4                            | 0.04                | 4                   |
| 7   | 85  | 1.8             | 7               | 12.6                            | 3.24                | 49                  |
| 8   | 90  | 2.8             | 12              | 33.6                            | 7.84                | 144                 |
|     |     |                 |                 | **Sum = 106.4**                 | **Sum = 22.8**      | **Sum = 530**       |

3.  **Calculate $r$:**
    $r = \frac{106.4}{\sqrt{22.8 \times 530}} = \frac{106.4}{\sqrt{12084}} = \frac{106.4}{109.93} \approx 0.968$

**Interpretation:** There is a strong positive linear correlation ($r \approx 0.968$) between study hours and exam scores. This suggests that as students study more hours, their exam scores tend to increase linearly.

## 8. Regression Analysis

Regression analysis aims to model the relationship between a dependent variable (response) and one or more independent variables (predictors). It's used for prediction and understanding the influence of predictors.

### 8.1. Linear Regression (Using the Least Squares Method)

**Simple Linear Regression** models the relationship between a dependent variable $Y$ and a single independent variable $X$ using a straight line:

$Y = \beta_0 + \beta_1 X + \epsilon$

where:
*   $Y$: Dependent variable
*   $X$: Independent variable
*   $\beta_0$: **Intercept** - the expected value of $Y$ when $X$ is 0.
*   $\beta_1$: **Slope** - the expected change in $Y$ for a one-unit increase in $X$.
*   $\epsilon$: **Error term** - represents the part of $Y$ that cannot be explained by $X$ (random variability, unmodeled factors).

The goal is to find the line that best fits the data. The **Least Squares Method** minimizes the sum of the squared differences between the observed values of $Y$ and the values predicted by the regression line. These differences are called **residuals**.

**Residual:** $e_i = y_i - \hat{y}_i = y_i - (\hat{\beta}_0 + \hat{\beta}_1 x_i)$

**Objective:** Minimize $SSE = \sum_{i=1}^{n} e_i^2 = \sum_{i=1}^{n} (y_i - (\hat{\beta}_0 + \hat{\beta}_1 x_i))^2$

### 8.2. Formulas for $\hat{\beta}_0$ and $\hat{\beta}_1$

Using calculus (taking partial derivatives of SSE with respect to $\hat{\beta}_0$ and $\hat{\beta}_1$, setting them to zero, and solving), we get the following formulas for the estimated coefficients:

*   **Estimated Slope ($\hat{\beta}_1$):**
    $\hat{\beta}_1 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n} (x_i - \bar{x})^2} = \frac{Cov(X, Y)}{Var(X)} = r \frac{s_Y}{s_X}$
    (Note: This is identical to the numerator of the correlation coefficient, but the denominator is only the variance of X).

*   **Estimated Intercept ($\hat{\beta}_0$):**
    $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$
    (This ensures the regression line passes through the point $(\bar{x}, \bar{y})$).

### 8.3. Example (Continuing Correlation Example)

Using the same data for study hours ($X$) and exam scores ($Y$):

| Study Hours ($X$) | Exam Score ($Y$) |
| :---------------- | :--------------- |
| 2                 | 60               |
| 4                 | 75               |
| 5                 | 80               |
| 7                 | 85               |
| 8                 | 90               |

From the correlation example, we have:
*   $\bar{x} = 5.2$
*   $\bar{y} = 78$
*   $\sum (x_i - \bar{x})^2 = 22.8$
*   $\sum (x_i - \bar{x})(y_i - \bar{y}) = 106.4$

1.  **Calculate $\hat{\beta}_1$ (Slope):**
    $\hat{\beta}_1 = \frac{106.4}{22.8} \approx 4.667$

2.  **Calculate $\hat{\beta}_0$ (Intercept):**
    $\hat{\beta}_0 = 78 - (4.667 \times 5.2)$
    $\hat{\beta}_0 = 78 - 24.2684$
    $\hat{\beta}_0 \approx 53.73$

**The estimated regression equation is:**
$\hat{Y} = 53.73 + 4.667 X$

**Interpretation:**
*   The intercept ($\hat{\beta}_0 \approx 53.73$) suggests that if a student studies 0 hours, their predicted exam score is approximately 53.73 (this might not be realistic if 0 hours is outside the range of the data).
*   The slope ($\hat{\beta}_1 \approx 4.667$) suggests that for every additional hour a student studies, their exam score is predicted to increase by approximately 4.667 points.

### 8.4. Prediction

We can use the regression equation to predict the dependent variable for a given value of the independent variable.

**Example:** Predict the exam score for a student who studies 6 hours.
$\hat{Y} = 53.73 + 4.667 \times 6$
$\hat{Y} = 53.73 + 28.002$
$\hat{Y} \approx 81.73$

So, a student studying 6 hours is predicted to score around 81.73.

**Important Note on "Direct Problems Only" for Linear Correlation:** This likely means you will be given data and asked to compute the correlation coefficient and interpret it, or you will be given a correlation coefficient and asked about the nature of the relationship. You won't be asked to perform hypothesis tests on the correlation coefficient itself, but rather to understand what the value means. For regression, it means you'll be asked to compute the slope and intercept from data and interpret them, and potentially make predictions.

---

## Practice Questions and Answers

**Question 1 (Random Variables & Measures):**
A fair coin is tossed three times. Let $X$ be the number of heads observed.
a) What are the possible values of $X$?
b) What is the probability distribution (PMF) for $X$?
c) Calculate the expected value ($E[X]$) and variance ($Var(X)$) of $X$.

**Answer 1:**
a) Possible values of $X$ (number of heads): {0, 1, 2, 3}.
b) Possible outcomes for 3 coin tosses: HHH, HHT, HTH, THH, HTT, THT, TTH, TTT (Total 8 outcomes).
   *   $P(X=0)$ (TTT): 1/8
   *   $P(X=1)$ (HTT, THT, TTH): 3/8
   *   $P(X=2)$ (HHT, HTH, THH): 3/8
   *   $P(X=3)$ (HHH): 1/8
c) $E[X] = (0 \times 1/8) + (1 \times 3/8) + (2 \times 3/8) + (3 \times 1/8) = 0 + 3/8 + 6/8 + 3/8 = 12/8 = 1.5$
   To calculate variance, first find $E[X^2]$:
   $E[X^2] = (0^2 \times 1/8) + (1^2 \times 3/8) + (2^2 \times 3/8) + (3^2 \times 1/8)$
   $E[X^2] = (0 \times 1/8) + (1 \times 3/8) + (4 \times 3/8) + (9 \times 1/8)$
   $E[X^2] = 0 + 3/8 + 12/8 + 9/8 = 24/8 = 3$
   $Var(X) = E[X^2] - (E[X])^2 = 3 - (1.5)^2 = 3 - 2.25 = 0.75$

---

**Question 2 (Bayes' Theorem):**
A company uses a quality control test for its products. The test correctly identifies 98% of defective products (True Positive Rate) and incorrectly identifies 5% of non-defective products as defective (False Positive Rate). If 2% of the products manufactured are actually defective, what is the probability that a product is defective given that it passed the quality control test (i.e., the test result was negative)?

**Answer 2:**
Let $D$ = Product is defective, $D'$ = Product is not defective.
Let $T-$ = Test result is negative, $T+$ = Test result is positive.

Given:
*   $P(D) = 0.02$
*   $P(D') = 1 - 0.02 = 0.98$
*   $P(T+|D) = 0.98$ (True Positive Rate)
*   $P(T+|D') = 0.05$ (False Positive Rate)

We need to find $P(D|T-)$. First, find the probabilities of negative test results:
*   $P(T-|D) = 1 - P(T+|D) = 1 - 0.98 = 0.02$ (False Negative Rate)
*   $P(T-|D') = 1 - P(T+|D') = 1 - 0.05 = 0.95$ (True Negative Rate)

Using Bayes' Theorem for $P(D|T-)$:
$P(D|T-) = \frac{P(T-|D) P(D)}{P(T-)}$

Calculate $P(T-)$ using the Law of Total Probability:
$P(T-) = P(T-|D) P(D) + P(T-|D') P(D')$
$P(T-) = (0.02 \times 0.02) + (0.95 \times 0.98)$
$P(T-) = 0.0004 + 0.9310$
$P(T-) = 0.9314$

Now, substitute back into Bayes' Theorem:
$P(D|T-) = \frac{0.02 \times 0.02}{0.9314} = \frac{0.0004}{0.9314} \approx 0.00043$

**Conclusion:** The probability that a product is defective given it passed the test is very low (approximately 0.043%).

---

**Question 3 (MLE):**
Suppose you have the following data points assumed to be from a Bernoulli distribution with parameter $p$: {1, 0, 1, 1, 0}. Find the Maximum Likelihood Estimate (MLE) of $p$.

**Answer 3:**
The Bernoulli PMF is $P(X=k) = p^k (1-p)^{1-k}$ for $k \in \{0, 1\}$.
The data is {1, 0, 1, 1, 0}.
The likelihood function for $n$ observations $x_1, ..., x_n$ is $L(p) = \prod_{i=1}^{n} p^{x_i} (1-p)^{1-x_i}$.
The log-likelihood function is $\ln(L(p)) = \sum x_i \ln(p) + \sum (1-x_i) \ln(1-p)$.
$\ln(L(p)) = (\sum x_i) \ln(p) + (n - \sum x_i) \ln(1-p)$.

For the given data:
*   $\sum x_i = 1 + 0 + 1 + 1 + 0 = 3$ (number of successes, i.e., 1s)
*   $n = 5$ (total number of trials)

So, $\ln(L(p)) = 3 \ln(p) + (5-3) \ln(1-p) = 3 \ln(p) + 2 \ln(1-p)$.

To find the MLE, take the derivative with respect to $p$ and set it to 0:
$\frac{d \ln(L(p))}{dp} = \frac{3}{p} - \frac{2}{1-p}$

Set to zero:
$\frac{3}{p} - \frac{2}{1-p} = 0$
$\frac{3}{p} = \frac{2}{1-p}$
$3(1-p) = 2p$
$3 - 3p = 2p$
$3 = 5p$
$p = 3/5 = 0.6$

**Result:** The MLE of $p$ is $0.6$. This is the sample proportion of successes.

---

**Question 4 (Correlation):**
Calculate the Pearson correlation coefficient ($r$) for the following data:

| X | Y |
| :-: | :-: |
| 1 | 2 |
| 2 | 3 |
| 3 | 4 |
| 4 | 5 |

**Answer 4:**
$\bar{x} = (1+2+3+4)/4 = 10/4 = 2.5$
$\bar{y} = (2+3+4+5)/4 = 14/4 = 3.5$

| $x_i$ | $y_i$ | $x_i - \bar{x}$ | $y_i - \bar{y}$ | $(x_i - \bar{x})(y_i - \bar{y})$ | $(x_i - \bar{x})^2$ | $(y_i - \bar{y})^2$ |
| :-: | :-: | :-------------: | :-------------: | :-----------------------------: | :-----------------: | :-----------------: |
| 1   | 2   | -1.5            | -1.5            | 2.25                            | 2.25                | 2.25                |
| 2   | 3   | -0.5            | -0.5            | 0.25                            | 0.25                | 0.25                |
| 3   | 4   | 0.5             | 0.5             | 0.25                            | 0.25                | 0.25                |
| 4   | 5   | 1.5             | 1.5             | 2.25                            | 2.25                | 2.25                |
|     |     |                 |                 | **Sum = 5**                     | **Sum = 5**         | **Sum = 5**         |

$r = \frac{5}{\sqrt{5 \times 5}} = \frac{5}{\sqrt{25}} = \frac{5}{5} = 1$

**Interpretation:** There is a perfect positive linear correlation ($r=1$) between X and Y.

---

**Question 5 (Linear Regression):**
Using the data from Question 4:
a) Calculate the estimated linear regression equation ($\hat{Y} = \hat{\beta}_0 + \hat{\beta}_1 X$).
b) Predict the value of Y when X = 2.5.

**Answer 5:**
From Question 4:
*   $\bar{x} = 2.5$
*   $\bar{y} = 3.5$
*   $\sum (x_i - \bar{x})(y_i - \bar{y}) = 5$
*   $\sum (x_i - \bar{x})^2 = 5$

a) Calculate the regression coefficients:
   $\hat{\beta}_1 = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2} = \frac{5}{5} = 1$
   $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x} = 3.5 - (1 \times 2.5) = 3.5 - 2.5 = 1$

   The estimated regression equation is: $\hat{Y} = 1 + 1 X$ or simply $\hat{Y} = 1 + X$.

b) Predict Y when X = 2.5:
   $\hat{Y} = 1 + 2.5 = 3.5$

---

## Important Points to Remember

*   **Random variables** are the foundation for modeling uncertainty. Distinguish between **discrete** and **continuous**.
*   **Probability rules** (addition, multiplication, complement, conditional) are crucial for calculating the likelihood of events.
*   **Bayes' Theorem** is a powerful tool for updating beliefs in light of new evidence. Its applications are vast in AI and ML.
*   **Statistical estimation** uses sample data to infer population parameters. **MLE** is a common method for parameter estimation.
*   **Statistical summaries** (mean, median, variance, std dev, quartiles) condense data into meaningful statistics.
*   **Correlation** measures the strength and direction of *linear* relationships ($r$ is between -1 and 1). Remember: **correlation does not imply causation**.
*   **Linear Regression** models the linear relationship between variables to make predictions. The **least squares method** finds the best-fitting line by minimizing squared errors. The slope ($\beta_1$) indicates the rate of change, and the intercept ($\beta_0$) is the predicted value when the predictor is zero.
