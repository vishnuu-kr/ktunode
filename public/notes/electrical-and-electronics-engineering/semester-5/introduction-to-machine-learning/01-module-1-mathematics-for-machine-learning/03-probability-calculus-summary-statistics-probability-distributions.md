---
title: "Probability calculus - Summary Statistics, probability distributions"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 1: Mathematics for Machine Learning."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36427"
status: "completed"
scrapedAt: "2026-05-23T16:22:17.193Z"
---
# Introduction to Machine Learning: Module 1 - Mathematics for Machine Learning

## Topic: Probability Calculus - Summary Statistics & Probability Distributions

This module introduces fundamental mathematical concepts essential for understanding and implementing machine learning algorithms. We will focus on probability calculus, specifically summary statistics and probability distributions, which are crucial for data analysis, model interpretation, and understanding uncertainty.

---

### Learning Outcomes Addressed:

*   **Understand the relationships between different types of variables (discrete, ordinal, and continuous) using summary statistics and probability distributions, and perform hypothesis testing including t-tests and F-tests.** (CO1) - This topic directly supports CO1 by laying the groundwork for understanding variable relationships and providing the tools to describe and analyze data.

---

### 1. Summary Statistics: Describing Data

Summary statistics are numerical values that concisely describe the main features of a dataset. They help us understand the central tendency, dispersion, and shape of the data.

#### 1.1 Types of Variables and Appropriate Statistics

Understanding the type of variable is crucial for choosing appropriate summary statistics.

*   **Categorical Variables:**
    *   **Nominal:** Categories with no inherent order (e.g., colors, types of fruit).
        *   **Summary Statistics:** **Mode**, Frequency counts.
    *   **Ordinal:** Categories with a natural order, but the differences between categories are not necessarily uniform (e.g., satisfaction levels: "low," "medium," "high").
        *   **Summary Statistics:** **Mode**, **Median**, Percentiles.

*   **Numerical Variables:**
    *   **Discrete:** Variables that can only take on a finite or countably infinite number of values (e.g., number of heads in coin flips, number of customers).
        *   **Summary Statistics:** Mean, Median, Mode, Range, Variance, Standard Deviation, Quartiles.
    *   **Continuous:** Variables that can take on any value within a given range (e.g., height, weight, temperature).
        *   **Summary Statistics:** Mean, Median, Mode, Range, Variance, Standard Deviation, Quartiles, Skewness, Kurtosis.

#### 1.2 Measures of Central Tendency

These statistics describe the "center" or "typical value" of a dataset.

*   **Mean (Average):**
    *   **Definition:** The sum of all values divided by the number of values.
    *   **Formula (Sample Mean):** $\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$
    *   **Formula (Population Mean):** $\mu = \frac{1}{N} \sum_{i=1}^{N} x_i$
    *   **Sensitivity:** Sensitive to outliers.
    *   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Expected Values) discusses the mean as an expectation.

*   **Median:**
    *   **Definition:** The middle value in a dataset that has been ordered from least to greatest. If there are an even number of values, it's the average of the two middle values.
    *   **Sensitivity:** Robust to outliers.
    *   **Use Case:** Preferred for skewed datasets or when outliers are present.
    *   **Textbook Reference:** Müller & Guido, Chapter 2 (Introduction to Machine Learning with Python) mentions the median as a robust measure.

*   **Mode:**
    *   **Definition:** The value that appears most frequently in the dataset.
    *   **Applicability:** Can be used for both numerical and categorical data.
    *   **Notes:** A dataset can have one mode (unimodal), multiple modes (multimodal), or no mode.

#### 1.3 Measures of Dispersion (Variability)

These statistics describe how spread out the data is.

*   **Range:**
    *   **Definition:** The difference between the maximum and minimum values in the dataset.
    *   **Formula:** Range = Max(x) - Min(x)
    *   **Sensitivity:** Highly sensitive to outliers.

*   **Variance:**
    *   **Definition:** The average of the squared differences from the Mean. It measures how far each number in the set is from the mean.
    *   **Formula (Sample Variance):** $s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2$
    *   **Formula (Population Variance):** $\sigma^2 = \frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2$
    *   **Notes:** The denominator is $n-1$ for sample variance (Bessel's correction) to provide an unbiased estimate of the population variance.
    *   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Variance).

*   **Standard Deviation:**
    *   **Definition:** The square root of the variance. It's in the same units as the data, making it more interpretable than variance.
    *   **Formula (Sample Standard Deviation):** $s = \sqrt{s^2}$
    *   **Formula (Population Standard Deviation):** $\sigma = \sqrt{\sigma^2}$
    *   **Importance:** A key measure for understanding data spread and is used in many statistical tests and ML algorithms (e.g., Gaussian distributions, feature scaling).

#### 1.4 Measures of Position

These statistics describe the location of a value relative to others in the dataset.

*   **Percentiles:**
    *   **Definition:** A value below which a certain percentage of observations fall. The $p$-th percentile is the value such that $p\%$ of the data is below it.
    *   **Examples:** 50th percentile is the Median. 25th percentile is the 1st Quartile (Q1). 75th percentile is the 3rd Quartile (Q3).

*   **Quartiles:**
    *   **Definition:** Values that divide the data into four equal parts.
    *   **Q1 (1st Quartile):** 25th percentile.
    *   **Q2 (2nd Quartile):** 50th percentile (Median).
    *   **Q3 (3rd Quartile):** 75th percentile.
    *   **Interquartile Range (IQR):**
        *   **Definition:** The difference between the 3rd and 1st quartiles.
        *   **Formula:** IQR = Q3 - Q1
        *   **Importance:** A robust measure of spread, less affected by outliers than the range. Used in box plots and outlier detection.

#### 1.5 Measures of Shape

These statistics describe the shape of the data distribution.

*   **Skewness:**
    *   **Definition:** A measure of the asymmetry of the probability distribution of a real-valued random variable about its mean.
    *   **Interpretation:**
        *   **Skewness = 0:** Symmetric distribution (e.g., normal distribution).
        *   **Skewness > 0 (Positive Skew):** The tail on the right side is longer or fatter. The mean is typically greater than the median.
        *   **Skewness < 0 (Negative Skew):** The tail on the left side is longer or fatter. The mean is typically less than the median.
    *   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Skewness).

*   **Kurtosis:**
    *   **Definition:** A measure of the "tailedness" of the probability distribution. It indicates whether the data are heavy-tailed or light-tailed relative to a normal distribution.
    *   **Interpretation (Excess Kurtosis):**
        *   **Kurtosis = 0 (Mesokurtic):** Similar tail behavior to a normal distribution.
        *   **Kurtosis > 0 (Leptokurtic):** Heavy tails and a sharp peak. More outliers than a normal distribution.
        *   **Kurtosis < 0 (Platykurtic):** Light tails and a flat peak. Fewer outliers than a normal distribution.
    *   **Note:** Often, kurtosis is reported as "excess kurtosis," which is kurtosis minus 3.
    *   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Kurtosis).

#### 1.6 Correlation Coefficient (Pearson's r)

While not strictly a summary statistic of a single variable, it's vital for understanding relationships between two numerical variables.

*   **Definition:** A measure of the linear correlation between two variables. It ranges from -1 to +1.
*   **Interpretation:**
    *   **+1:** Perfect positive linear correlation.
    *   **-1:** Perfect negative linear correlation.
    *   **0:** No linear correlation.
*   **Formula:** $r = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n} (x_i - \bar{x})^2}\sqrt{\sum_{i=1}^{n} (y_i - \bar{y})^2}}$
*   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Covariance and Correlation). Bishop, Chapter 3.1.4 (Covariance Matrix) also discusses correlation as a normalized covariance.

#### **Important Point to Remember:**

*   **Outliers:** Be mindful of how outliers can skew the mean and range. Median and IQR are more robust measures.
*   **Data Distribution:** The choice of statistics should reflect the underlying distribution of your data.

---

### 2. Probability Distributions: Modeling Uncertainty

Probability distributions describe the likelihood of different outcomes for a random variable. They are fundamental for statistical inference and understanding uncertainty in machine learning.

#### 2.1 Random Variables

*   **Definition:** A variable whose value is a numerical outcome of a random phenomenon.
*   **Types:**
    *   **Discrete Random Variable:** Takes on a finite or countably infinite number of values (e.g., outcome of a dice roll, number of website visits).
    *   **Continuous Random Variable:** Takes on any value within a range (e.g., temperature, height).

#### 2.2 Probability Mass Function (PMF) - For Discrete Random Variables

*   **Definition:** A function that gives the probability that a discrete random variable is exactly equal to some value.
*   **Notation:** $P(X=x)$ or $p(x)$
*   **Properties:**
    *   $0 \le P(X=x) \le 1$ for all possible values of $x$.
    *   $\sum P(X=x) = 1$ over all possible values of $x$.
*   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Probability Mass Function).

#### 2.3 Probability Density Function (PDF) - For Continuous Random Variables

*   **Definition:** A function whose value at any given sample (or point) in the sample space can be thought of as providing the relative likelihood that the value of the random variable would equal that sample. The integral of the PDF over a range gives the probability that the variable falls within that range.
*   **Notation:** $f(x)$ or $p(x)$
*   **Properties:**
    *   $f(x) \ge 0$ for all $x$.
    *   $\int_{-\infty}^{\infty} f(x) dx = 1$.
*   **Important:** For a continuous variable, the probability of it taking any single specific value is zero, i.e., $P(X=x) = 0$. We talk about probabilities over intervals, $P(a \le X \le b) = \int_{a}^{b} f(x) dx$.
*   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Probability Density Function).

#### 2.4 Cumulative Distribution Function (CDF)

*   **Definition:** A function that gives the probability that a random variable is less than or equal to a certain value. It can be defined for both discrete and continuous random variables.
*   **Notation:** $F(x) = P(X \le x)$
*   **Properties:**
    *   $0 \le F(x) \le 1$.
    *   Non-decreasing: If $x_1 \le x_2$, then $F(x_1) \le F(x_2)$.
    *   $\lim_{x \to -\infty} F(x) = 0$ and $\lim_{x \to \infty} F(x) = 1$.
*   **Relationship between PDF and CDF (for continuous):** $F(x) = \int_{-\infty}^{x} f(t) dt$. Conversely, $f(x) = \frac{d}{dx}F(x)$.
*   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Cumulative Distribution Function).

#### 2.5 Common Probability Distributions

These are frequently used in machine learning for modeling various phenomena.

##### 2.5.1 Discrete Distributions

*   **Bernoulli Distribution:**
    *   **Description:** Models a single trial with two possible outcomes: success (1) and failure (0).
    *   **Parameter:** $p$ (probability of success).
    *   **PMF:** $P(X=1) = p$, $P(X=0) = 1-p$.
    *   **Mean:** $p$
    *   **Variance:** $p(1-p)$
    *   **Use Case:** Binary classification problems, modeling a single coin flip.

*   **Binomial Distribution:**
    *   **Description:** Models the number of successes in a fixed number ($n$) of independent Bernoulli trials, each with the same probability of success ($p$).
    *   **Parameters:** $n$ (number of trials), $p$ (probability of success).
    *   **PMF:** $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$ for $k = 0, 1, \dots, n$.
    *   **Mean:** $np$
    *   **Variance:** $np(1-p)$
    *   **Use Case:** Number of heads in multiple coin flips, number of defective items in a batch.

*   **Poisson Distribution:**
    *   **Description:** Models the number of events occurring in a fixed interval of time or space, given a constant average rate, and that these events occur independently of the time since the last event.
    *   **Parameter:** $\lambda$ (average rate of events).
    *   **PMF:** $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$ for $k = 0, 1, 2, \dots$.
    *   **Mean:** $\lambda$
    *   **Variance:** $\lambda$
    *   **Use Case:** Number of customer arrivals per hour, number of emails received per day.

##### 2.5.2 Continuous Distributions

*   **Uniform Distribution:**
    *   **Description:** All outcomes within a given interval are equally likely.
    *   **Parameters:** $a$ (lower bound), $b$ (upper bound).
    *   **PDF:** $f(x) = \frac{1}{b-a}$ for $a \le x \le b$, and $0$ otherwise.
    *   **Mean:** $\frac{a+b}{2}$
    *   **Variance:** $\frac{(b-a)^2}{12}$
    *   **Use Case:** Generating random numbers within a specific range, initial weights in neural networks.

*   **Normal (Gaussian) Distribution:**
    *   **Description:** A bell-shaped, symmetric distribution that is fundamental in statistics. Many natural phenomena follow this distribution.
    *   **Parameters:** $\mu$ (mean), $\sigma^2$ (variance).
    *   **PDF:** $f(x|\mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$
    *   **Mean:** $\mu$
    *   **Variance:** $\sigma^2$
    *   **Standard Normal Distribution:** A special case with $\mu=0$ and $\sigma^2=1$.
    *   **Importance in ML:** Basis for many algorithms (e.g., linear regression with Gaussian noise), feature scaling, understanding errors.
    *   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Gaussian Distribution). Bishop, Chapter 2.1 (Probability Distributions) provides a detailed explanation.

*   **Exponential Distribution:**
    *   **Description:** Models the time until the next event in a Poisson process, or the time until failure in a system where events occur at a constant average rate. It's memoryless.
    *   **Parameter:** $\lambda$ (rate parameter, inverse of the mean).
    *   **PDF:** $f(x|\lambda) = \lambda e^{-\lambda x}$ for $x \ge 0$.
    *   **Mean:** $\frac{1}{\lambda}$
    *   **Variance:** $\frac{1}{\lambda^2}$
    *   **Use Case:** Modeling waiting times, duration of tasks.

*   **Beta Distribution:**
    *   **Description:** A continuous probability distribution defined on the interval [0, 1], often used for modeling probabilities or proportions.
    *   **Parameters:** $\alpha > 0$, $\beta > 0$.
    *   **PDF:** $f(x; \alpha, \beta) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha, \beta)}$ where $B(\alpha, \beta)$ is the Beta function.
    *   **Mean:** $\frac{\alpha}{\alpha+\beta}$
    *   **Variance:** $\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$
    *   **Use Case:** Bayesian inference (as a prior for probabilities), modeling proportions.

#### 2.6 Expectation, Variance, and Covariance

These are critical concepts derived from probability distributions.

*   **Expectation (Mean of a Distribution):**
    *   **Definition:** The weighted average of all possible values of a random variable, where the weights are their probabilities.
    *   **Formula (Discrete):** $E[X] = \sum_{x} x P(X=x)$
    *   **Formula (Continuous):** $E[X] = \int_{-\infty}^{\infty} x f(x) dx$
    *   **Note:** For a function $g(X)$, $E[g(X)] = \sum_{x} g(x) P(X=x)$ (discrete) or $E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) dx$ (continuous).
    *   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Expected Values).

*   **Variance (of a Distribution):**
    *   **Definition:** The expected value of the squared deviation from the mean.
    *   **Formula:** $Var(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$
    *   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Variance).

*   **Covariance:**
    *   **Definition:** Measures how two random variables change together. It's the expectation of the product of their deviations from their respective means.
    *   **Formula (for two random variables X, Y):** $Cov(X, Y) = E[(X - E[X])(Y - E[Y])]$
    *   **Interpretation:**
        *   $Cov(X, Y) > 0$: X and Y tend to increase or decrease together.
        *   $Cov(X, Y) < 0$: One variable tends to increase as the other decreases.
        *   $Cov(X, Y) = 0$: No linear relationship (but not necessarily independence).
    *   **Textbook Reference:** Deisenroth et al., Chapter 2.1.1 (Covariance and Correlation).

*   **Covariance Matrix:**
    *   **Definition:** A matrix that describes the pairwise covariances of a set of random variables. For a random vector $\mathbf{X} = [X_1, X_2, \dots, X_d]^T$, the covariance matrix $\Sigma$ is given by:
    *   $\Sigma_{ij} = Cov(X_i, X_j) = E[(X_i - E[X_i])(X_j - E[X_j])]$
    *   **Properties:** Symmetric, positive semi-definite. The diagonal elements are the variances of individual variables.
    *   **Importance:** Crucial for understanding relationships in multivariate data, used in PCA, LDA, and Gaussian Mixture Models.
    *   **Textbook Reference:** Bishop, Chapter 2.3.1 (Multivariate Gaussian Distribution), which heavily relies on the covariance matrix. Deisenroth et al., Chapter 2.1.1 also covers it.

#### **Important Points to Remember:**

*   **Distribution Choice:** The choice of distribution depends on the nature of the data and the underlying process.
*   **Parameters:** Distributions are defined by their parameters, which often need to be estimated from data.
*   **Bayes' Theorem:** A fundamental concept relating conditional probabilities, essential for many ML algorithms (e.g., Naive Bayes, Bayesian inference). While not explicitly a distribution, it's built upon probability calculus. (Reference: Deisenroth et al., Chapter 2.1.3).

---

### 3. Practice Questions & Exercises

**Question 1:**
A dataset of student heights is recorded. The mean height is 1.70 meters, and the standard deviation is 0.08 meters. If the heights are normally distributed, approximately what percentage of students would you expect to be between 1.62 meters and 1.78 meters?

**Answer 1:**
This range corresponds to $\mu \pm 1\sigma$ (1.70 $\pm$ 0.08). For a normal distribution, approximately 68.27% of the data falls within one standard deviation of the mean.

**Question 2:**
You are designing a spam filter. You observe that on average, 5% of emails are spam. If you receive 100 emails, what is the probability that exactly 3 of them are spam? (Assume independence).

**Answer 2:**
This is a Binomial distribution problem with $n=100$ (number of trials) and $p=0.05$ (probability of spam). We want to find $P(X=3)$.
$P(X=3) = \binom{100}{3} (0.05)^3 (1-0.05)^{100-3}$
$P(X=3) = \binom{100}{3} (0.05)^3 (0.95)^{97}$
Calculating this: $\binom{100}{3} = \frac{100 \times 99 \times 98}{3 \times 2 \times 1} = 161700$
$P(X=3) \approx 161700 \times (0.000125) \times (0.00609) \approx 0.1235$
So, there's approximately a 12.35% chance that exactly 3 out of 100 emails are spam.

**Question 3:**
A dataset has the following values: [10, 12, 15, 11, 10, 18, 14, 10, 13, 12].
Calculate the following summary statistics:
a) Mean
b) Median
c) Mode
d) Range
e) Sample Variance
f) Sample Standard Deviation

**Answer 3:**
Dataset: [10, 10, 10, 11, 12, 12, 13, 14, 15, 18] (sorted)
a) Mean: $(10+10+10+11+12+12+13+14+15+18) / 10 = 125 / 10 = 12.5$
b) Median: Since there are 10 values, the median is the average of the 5th and 6th values: $(12+12)/2 = 12$
c) Mode: The value that appears most frequently is 10.
d) Range: Max - Min = 18 - 10 = 8
e) Sample Variance:
   Deviations from mean (12.5): [-2.5, -2.5, -2.5, -1.5, -0.5, -0.5, 0.5, 1.5, 2.5, 5.5]
   Squared Deviations: [6.25, 6.25, 6.25, 2.25, 0.25, 0.25, 0.25, 2.25, 6.25, 30.25]
   Sum of Squared Deviations: 62.5
   Sample Variance $s^2 = \frac{62.5}{10-1} = \frac{62.5}{9} \approx 6.94$
f) Sample Standard Deviation: $s = \sqrt{6.94} \approx 2.63$

**Question 4:**
Consider a continuous random variable $X$ with a PDF $f(x) = 2x$ for $0 \le x \le 1$, and $f(x)=0$ otherwise.
a) Verify that this is a valid PDF.
b) Calculate the probability $P(0.5 \le X \le 0.8)$.
c) Calculate the mean $E[X]$.

**Answer 4:**
a) To verify if it's a valid PDF:
   1. $f(x) \ge 0$ for $0 \le x \le 1$. This is true since $2x$ is non-negative in this range.
   2. $\int_{-\infty}^{\infty} f(x) dx = \int_{0}^{1} 2x dx = [x^2]_0^1 = 1^2 - 0^2 = 1$.
   Since both conditions are met, it is a valid PDF.

b) $P(0.5 \le X \le 0.8) = \int_{0.5}^{0.8} 2x dx = [x^2]_{0.5}^{0.8} = (0.8)^2 - (0.5)^2 = 0.64 - 0.25 = 0.39$.
   The probability is 0.39.

c) $E[X] = \int_{-\infty}^{\infty} x f(x) dx = \int_{0}^{1} x (2x) dx = \int_{0}^{1} 2x^2 dx = [\frac{2}{3}x^3]_0^1 = \frac{2}{3}(1)^3 - \frac{2}{3}(0)^3 = \frac{2}{3}$.
   The mean is $\frac{2}{3}$.

---

### 4. Key Concepts to Remember

*   **Summary Statistics:** Mean, Median, Mode, Variance, Standard Deviation, Range, IQR, Quartiles, Skewness, Kurtosis.
*   **Variable Types:** Categorical (Nominal/Ordinal) vs. Numerical (Discrete/Continuous).
*   **Probability Distributions:** PMF (discrete), PDF (continuous), CDF.
*   **Common Distributions:** Bernoulli, Binomial, Poisson, Uniform, Normal (Gaussian), Exponential.
*   **Expectation & Variance:** Fundamental properties of random variables and their distributions.
*   **Covariance:** Measures linear association between two random variables.
*   **Robustness:** Median and IQR are robust to outliers, while Mean and Range are not.
*   **Central Limit Theorem (CLT):** While not covered in detail here, it states that the distribution of sample means approaches a normal distribution as the sample size gets large, regardless of the population's distribution. This is fundamental in statistics and ML.

---
