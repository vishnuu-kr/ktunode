---
title: "random variables and statistical measures "
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d93"
status: "completed"
scrapedAt: "2026-05-20T17:49:51.223Z"
---
## Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

### Topic: Random Variables and Statistical Measures

This module focuses on understanding the fundamental concepts of probability, which are crucial for data analysis and the development of AI models. Specifically, this topic introduces random variables and essential statistical measures used to describe and analyze data.

---

### 1. Random Variables

**Definition:** A random variable is a variable whose value is a numerical outcome of a random phenomenon. It's a function that maps the outcomes of a sample space to real numbers.

**Key Concepts:**

*   **Sample Space ($\Omega$):** The set of all possible outcomes of a random experiment.
    *   **Example:** Flipping a coin twice. The sample space is $\{\text{HH, HT, TH, TT}\}$.
*   **Event:** A subset of the sample space.
    *   **Example:** Getting at least one head in the coin flip experiment is the event $\{\text{HH, HT, TH}\}$.
*   **Random Variable (X):** A function mapping outcomes from the sample space to real numbers.
    *   **Example:** Let X be the number of heads in two coin flips.
        *   For outcome HH, X = 2.
        *   For outcome HT, X = 1.
        *   For outcome TH, X = 1.
        *   For outcome TT, X = 0.
        The possible values of X are {0, 1, 2}.

**Types of Random Variables:**

*   **Discrete Random Variable:** A random variable that can only take a finite number of values or a countably infinite number of values. The values are typically integers.
    *   **Example:** The number of defective items in a sample of 10. (Possible values: 0, 1, 2, ..., 10).
    *   **Example:** The number of customers arriving at a store per hour. (Possible values: 0, 1, 2, ... - countably infinite).
*   **Continuous Random Variable:** A random variable that can take any value within a given range. The values are typically real numbers.
    *   **Example:** The height of a person. (Possible values: any real number within a biologically plausible range, e.g., 1.5m to 2.1m).
    *   **Example:** The temperature of a room. (Possible values: any real number within a certain range).

**Probability Distribution:**

*   **For Discrete Random Variables:**
    *   **Probability Mass Function (PMF):**  $P(X=x)$ gives the probability that the random variable X takes on a specific value x.
        *   Properties:
            *   $0 \le P(X=x) \le 1$ for all x.
            *   $\sum_{x} P(X=x) = 1$ (sum over all possible values of X).
        *   **Example (Coin Flip):**
            *   $P(X=0) = P(\text{TT}) = 1/4$
            *   $P(X=1) = P(\text{HT or TH}) = P(\text{HT}) + P(\text{TH}) = 1/4 + 1/4 = 1/2$
            *   $P(X=2) = P(\text{HH}) = 1/4$
            *   Sum: $1/4 + 1/2 + 1/4 = 1$.

*   **For Continuous Random Variables:**
    *   **Probability Density Function (PDF):** $f(x)$ describes the relative likelihood for a continuous random variable to take on a given value. The probability of the variable falling within a specific range is the integral of the PDF over that range.
        *   Properties:
            *   $f(x) \ge 0$ for all x.
            *   $\int_{-\infty}^{\infty} f(x) dx = 1$ (integral over all possible values of X).
        *   **Note:** For continuous random variables, $P(X=x) = 0$ for any specific value of x. We talk about probabilities over intervals.
        *   **Example (Uniform Distribution):** If a random variable X is uniformly distributed between 0 and 1, its PDF is:
            *   $f(x) = 1$ for $0 \le x \le 1$
            *   $f(x) = 0$ otherwise.
            *   The probability of X being between 0.2 and 0.8 is $\int_{0.2}^{0.8} 1 dx = [x]_{0.2}^{0.8} = 0.8 - 0.2 = 0.6$.

*   **Cumulative Distribution Function (CDF):** $F(x) = P(X \le x)$ gives the probability that the random variable X takes on a value less than or equal to x. The CDF is defined for both discrete and continuous random variables.
    *   Properties:
        *   $0 \le F(x) \le 1$ for all x.
        *   F(x) is non-decreasing.
        *   $\lim_{x \to -\infty} F(x) = 0$
        *   $\lim_{x \to \infty} F(x) = 1$
    *   **For Discrete Variables:** $F(x) = \sum_{t \le x} P(X=t)$
    *   **For Continuous Variables:** $F(x) = \int_{-\infty}^{x} f(t) dt$
    *   **Example (Coin Flip):**
        *   $F(0) = P(X \le 0) = P(X=0) = 1/4$
        *   $F(1) = P(X \le 1) = P(X=0) + P(X=1) = 1/4 + 1/2 = 3/4$
        *   $F(2) = P(X \le 2) = P(X=0) + P(X=1) + P(X=2) = 1/4 + 1/2 + 1/4 = 1$

---

### 2. Statistical Measures

Statistical measures are used to summarize and describe the main characteristics of a dataset or the distribution of a random variable.

#### 2.1 Measures of Central Tendency

These measures indicate the typical or central value of a dataset.

*   **Mean (Average):** The sum of all values divided by the number of values.
    *   **For a Sample:** $\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$
    *   **For a Population (Expected Value of a Random Variable):** $E[X] = \mu$
        *   For discrete RV: $E[X] = \sum_{x} x P(X=x)$
        *   For continuous RV: $E[X] = \int_{-\infty}^{\infty} x f(x) dx$
    *   **Significance:** Represents the "balancing point" of the data. Sensitive to outliers.
    *   **Example (Sample):** Data: {2, 4, 4, 4, 5}. $\bar{x} = (2+4+4+4+5)/5 = 19/5 = 3.8$.
    *   **Example (RV):** For the coin flip RV (number of heads), $E[X] = 0 \cdot (1/4) + 1 \cdot (1/2) + 2 \cdot (1/4) = 0 + 1/2 + 1/2 = 1$.

*   **Median:** The middle value of a dataset when it is ordered. If there is an even number of observations, it is the average of the two middle values.
    *   **Significance:** Less sensitive to outliers than the mean. Divides the data into two equal halves (50% of data below, 50% above).
    *   **Example (Sample):** Data: {2, 4, 4, 4, 5}. Ordered: {2, 4, 4, 4, 5}. Median = 4.
    *   **Example (Sample):** Data: {2, 3, 4, 5}. Ordered: {2, 3, 4, 5}. Median = (3+4)/2 = 3.5.

*   **Mode:** The value that appears most frequently in a dataset. A dataset can have one mode (unimodal), two modes (bimodal), or more (multimodal).
    *   **Significance:** Useful for identifying the most common values. Applicable to both numerical and categorical data.
    *   **Example (Sample):** Data: {2, 4, 4, 4, 5}. Mode = 4.
    *   **Example (Sample):** Data: {2, 2, 4, 4, 5}. Modes = 2 and 4 (bimodal).

**Reference:** Gupta & Kapoor (Fundamentals of Mathematical Statistics) and Deisenroth et al. (Mathematics for Machine Learning) extensively cover these measures in their introductory chapters on descriptive statistics. Géron (Hands-on Machine Learning) also uses these as fundamental concepts in data exploration.

#### 2.2 Measures of Dispersion (Variability)

These measures quantify the spread or variability of the data.

*   **Range:** The difference between the maximum and minimum values in a dataset.
    *   **Formula:** Range = Max - Min
    *   **Significance:** Simple to calculate but highly sensitive to outliers.
    *   **Example (Sample):** Data: {2, 4, 4, 4, 5}. Range = 5 - 2 = 3.

*   **Variance:** The average of the squared differences from the Mean. It measures how spread out the data is from its mean.
    *   **Population Variance ($\sigma^2$):** $Var(X) = E[(X - \mu)^2] = \sum_{x} (x - \mu)^2 P(X=x)$ (for discrete RV) or $\int_{-\infty}^{\infty} (x - \mu)^2 f(x) dx$ (for continuous RV).
    *   **Sample Variance ($s^2$):** $s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2$. The division by $n-1$ instead of $n$ is Bessel's correction, providing an unbiased estimate of the population variance.
    *   **Significance:** Provides a measure of the average squared deviation from the mean. Units are squared (e.g., dollars squared).
    *   **Example (Sample):** Data: {2, 4, 4, 4, 5}. Mean ($\bar{x}$) = 3.8.
        *   Deviations: (2-3.8)=-1.8, (4-3.8)=0.2, (4-3.8)=0.2, (4-3.8)=0.2, (5-3.8)=1.2
        *   Squared Deviations: 3.24, 0.04, 0.04, 0.04, 1.44
        *   Sum of Squared Deviations: 3.24 + 0.04 + 0.04 + 0.04 + 1.44 = 4.8
        *   Sample Variance ($s^2$) = 4.8 / (5-1) = 4.8 / 4 = 1.2.

*   **Standard Deviation:** The square root of the variance.
    *   **Population Standard Deviation ($\sigma$):** $\sigma = \sqrt{Var(X)}$
    *   **Sample Standard Deviation ($s$):** $s = \sqrt{s^2}$
    *   **Significance:** The most widely used measure of dispersion. It is in the same units as the data, making it easier to interpret than variance. It indicates the typical distance of data points from the mean.
    *   **Example (Sample):** For the previous example, $s = \sqrt{1.2} \approx 1.095$.

*   **Interquartile Range (IQR):** The difference between the third quartile (Q3) and the first quartile (Q1).
    *   **Formula:** IQR = Q3 - Q1
    *   **Significance:** Measures the spread of the middle 50% of the data. It is robust to outliers.
    *   **Quartiles:**
        *   Q1 (First Quartile): The value below which 25% of the data falls.
        *   Q2 (Second Quartile): The median, the value below which 50% of the data falls.
        *   Q3 (Third Quartile): The value below which 75% of the data falls.
    *   **Example (Sample):** Data: {2, 3, 4, 5, 6, 7, 8, 9}. Ordered: {2, 3, 4, 5, 6, 7, 8, 9}.
        *   Median (Q2) = (5+6)/2 = 5.5
        *   Q1 (median of {2, 3, 4, 5}) = (3+4)/2 = 3.5
        *   Q3 (median of {6, 7, 8, 9}) = (7+8)/2 = 7.5
        *   IQR = 7.5 - 3.5 = 4.

**Reference:** Gupta & Kapoor (Fundamentals of Mathematical Statistics) provides detailed proofs and discussions on variance and standard deviation. Miller (Statistics for Data Science) emphasizes practical applications and interpretations of these measures in data science contexts.

#### 2.3 Measures of Shape

These measures describe the shape of the probability distribution.

*   **Skewness:** A measure of the asymmetry of the probability distribution of a real-valued random variable about its mean.
    *   **Positive Skewness:** The tail on the right side is longer or fatter than the left side. The mean is typically greater than the median.
    *   **Negative Skewness:** The tail on the left side is longer or fatter than the right side. The mean is typically less than the median.
    *   **Zero Skewness:** The distribution is symmetric (e.g., normal distribution).
    *   **Significance:** Helps understand if the data is bunched up on one side or the other.

*   **Kurtosis:** A measure of "tailedness" of the probability distribution. It quantifies whether the tails of the distribution are heavier or lighter than those of a normal distribution.
    *   **Leptokurtic (Positive Kurtosis):** Heavy tails and a peaked center compared to a normal distribution. Indicates more extreme values.
    *   **Platykurtic (Negative Kurtosis):** Light tails and a flatter center compared to a normal distribution. Indicates fewer extreme values.
    *   **Mesokurtic (Zero Kurtosis):** Similar tail weight and peakedness to a normal distribution.
    *   **Significance:** Helps identify the likelihood of extreme values or outliers.

**Reference:** Gupta & Kapoor discuss skewness and kurtosis in detail within their chapters on the moments of a distribution.

#### 2.4 Measures of Association (for multiple variables)

While this topic focuses on single random variables, it's important to note that in AI and data science, we often analyze relationships between multiple variables. Measures like **covariance** and **correlation** are used for this, which build upon the concepts of mean and standard deviation.

*   **Covariance:** Measures the joint variability of two random variables.
    *   **Formula:** $Cov(X, Y) = E[(X - E[X])(Y - E[Y])]$
    *   **Interpretation:** Positive covariance means variables tend to increase or decrease together. Negative covariance means one tends to increase as the other decreases.
*   **Correlation Coefficient:** A standardized version of covariance, ranging from -1 to +1.
    *   **Formula:** $\rho_{XY} = \frac{Cov(X, Y)}{\sigma_X \sigma_Y}$
    *   **Interpretation:** +1 indicates perfect positive linear correlation, -1 indicates perfect negative linear correlation, and 0 indicates no linear correlation.

**Reference:** Kotu & Deshpande (Data Science: Concepts and Practice) and Fernandez-Granda (Probability and Statistics for Data Science) cover these in their sections on bivariate analysis.

---

### 3. Important Points to Remember

*   **Random variables are the bridge between random phenomena and numerical analysis.** They allow us to apply mathematical tools to understand uncertainty.
*   **The choice between discrete and continuous random variables depends on the nature of the data.**
*   **The PMF/PDF and CDF are fundamental to describing the probability distribution of a random variable.**
*   **Measures of central tendency tell us about the "typical" value**, while **measures of dispersion tell us about the "spread" of the data.**
*   **The mean is sensitive to outliers, while the median and IQR are more robust.**
*   **Standard deviation is the most common measure of spread** and is in the same units as the data.
*   **Skewness and kurtosis provide insights into the shape of the distribution**, which is critical for choosing appropriate models and interpreting results.
*   **Understanding these basic concepts is foundational for advanced statistical modeling and machine learning techniques.**

---

### 4. Practice Questions

**Question 1 (Discrete Random Variable):**
A fair six-sided die is rolled. Let X be the outcome of the roll.
a) What is the sample space?
b) Define X as a random variable. What are its possible values?
c) What is the probability mass function (PMF) for X?
d) What is the probability of rolling an even number?
e) Calculate the expected value (mean) of X.

**Question 2 (Continuous Random Variable):**
A machine produces bolts with lengths that are normally distributed with a mean of 10 cm and a standard deviation of 0.1 cm. Let L be the length of a bolt.
a) What type of random variable is L?
b) What are the parameters of its distribution (mean and standard deviation)?
c) What is the probability that a bolt is between 9.9 cm and 10.1 cm long? (You would typically need a Z-table or statistical software for this, but understand the concept of integrating the PDF).
d) What is the probability that a bolt is longer than 10.2 cm?

**Question 3 (Statistical Measures):**
Consider the following dataset representing the scores of 10 students on a test:
{75, 80, 85, 70, 90, 75, 85, 95, 80, 70}
a) Calculate the mean, median, and mode of the dataset.
b) Calculate the range and standard deviation of the dataset.
c) If this dataset were skewed, how might that affect the relationship between the mean and median?

**Question 4 (Concepts):**
Explain the difference between variance and standard deviation, and why standard deviation is often preferred for interpretation.

---

### 5. Answers to Practice Questions

**Answer 1:**
a) Sample space $\Omega = \{1, 2, 3, 4, 5, 6\}$.
b) X is a random variable that maps each outcome of the die roll to its face value. Possible values of X are {1, 2, 3, 4, 5, 6}.
c) PMF: $P(X=x) = 1/6$ for $x \in \{1, 2, 3, 4, 5, 6\}$, and $P(X=x) = 0$ otherwise.
d) The even numbers are {2, 4, 6}. $P(\text{X is even}) = P(X=2) + P(X=4) + P(X=6) = 1/6 + 1/6 + 1/6 = 3/6 = 1/2$.
e) $E[X] = \sum_{x=1}^{6} x P(X=x) = 1(1/6) + 2(1/6) + 3(1/6) + 4(1/6) + 5(1/6) + 6(1/6) = (1+2+3+4+5+6)/6 = 21/6 = 3.5$.

**Answer 2:**
a) L is a continuous random variable.
b) Mean ($\mu$) = 10 cm, Standard Deviation ($\sigma$) = 0.1 cm.
c) Probability that a bolt is between 9.9 cm and 10.1 cm: $P(9.9 \le L \le 10.1)$. This would involve standardizing the values to Z-scores and looking up probabilities in a standard normal distribution table.
    *   $Z_{9.9} = (9.9 - 10) / 0.1 = -1$
    *   $Z_{10.1} = (10.1 - 10) / 0.1 = 1$
    *   $P(-1 \le Z \le 1) \approx 0.6827$ (This is a property of the normal distribution: about 68% of data falls within 1 standard deviation of the mean).
d) Probability that a bolt is longer than 10.2 cm: $P(L > 10.2)$.
    *   $Z_{10.2} = (10.2 - 10) / 0.1 = 2$
    *   $P(Z > 2) = 1 - P(Z \le 2) \approx 1 - 0.9772 = 0.0228$.

**Answer 3:**
Dataset: {75, 80, 85, 70, 90, 75, 85, 95, 80, 70}
Ordered Dataset: {70, 70, 75, 75, 80, 80, 85, 85, 90, 95}
a) **Mean:**
    Sum = 70+70+75+75+80+80+85+85+90+95 = 805
    Mean ($\bar{x}$) = 805 / 10 = 80.5
   **Median:**
    The middle two values are the 5th and 6th: 80 and 80.
    Median = (80 + 80) / 2 = 80
   **Mode:**
    The values 70, 75, 80, and 85 each appear twice. This dataset is multimodal (specifically, it has four modes: 70, 75, 80, 85). If we had to pick *a* mode, it would be the most frequent one. Here, several values are equally most frequent.

b) **Range:**
    Range = Max - Min = 95 - 70 = 25
   **Standard Deviation:**
    Deviations from mean (80.5): -10.5, -10.5, -5.5, -5.5, -0.5, -0.5, 4.5, 4.5, 9.5, 14.5
    Squared Deviations: 110.25, 110.25, 30.25, 30.25, 0.25, 0.25, 20.25, 20.25, 90.25, 210.25
    Sum of Squared Deviations = 622.5
    Sample Variance ($s^2$) = 622.5 / (10 - 1) = 622.5 / 9 = 69.167 (approx)
    Sample Standard Deviation ($s$) = $\sqrt{69.167} \approx 8.317$

c) If the dataset were skewed, for example, if there were a few very low scores, the mean would be pulled down by those outliers, making the mean less than the median. Conversely, if there were a few very high scores, the mean would be pulled up, making the mean greater than the median. In this specific dataset, the mean (80.5) is slightly higher than the median (80), suggesting a slight positive skew (due to the 90 and 95 scores being further from the center than the lowest scores are from the center).

**Answer 4:**
Variance and standard deviation both measure the spread or dispersion of data around the mean.
*   **Variance** is the average of the squared differences from the mean. Its units are the square of the original data units (e.g., meters squared, dollars squared). This makes it harder to directly interpret the magnitude of the spread in relation to the data values themselves.
*   **Standard Deviation** is the square root of the variance. It has the advantage of being in the **same units as the original data**. This makes it much more intuitive to understand. For example, if the mean height is 170 cm and the standard deviation is 5 cm, we can say that on average, heights typically deviate by about 5 cm from the mean. This direct interpretability is why standard deviation is generally preferred in reporting and analysis.

---

This module provides the foundational statistical concepts required to understand and process data for AI and Data Science tasks. These measures are the building blocks for more complex analyses like regression, classification, and hypothesis testing.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
