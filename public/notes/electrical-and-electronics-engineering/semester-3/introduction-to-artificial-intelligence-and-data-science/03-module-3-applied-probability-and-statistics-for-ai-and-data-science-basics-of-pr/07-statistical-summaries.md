---
title: "statistical summaries"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35ba0"
status: "completed"
scrapedAt: "2026-05-23T16:14:12.253Z"
---
## Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

### Topic: Statistical Summaries

**Learning Outcomes:**

*   Understand the purpose and types of statistical summaries.
*   Calculate and interpret measures of central tendency.
*   Calculate and interpret measures of dispersion.
*   Understand the concept of shape of a distribution.
*   Apply statistical summaries to real-world data for AI and Data Science.

**Course Outcomes Alignment:**

*   **CO3: Analyze and interpret data using statistical methods including descriptive statistics... to derive meaningful insights and make informed decisions.** (This module directly addresses descriptive statistics, a foundational element for data analysis and interpretation.)
*   **CO4: Integrate statistical approaches and machine learning techniques to ensure practically feasible solutions in engineering contexts.** (Understanding statistical summaries is crucial for data preprocessing and understanding data characteristics before applying machine learning algorithms.)

---

### 1. Introduction to Statistical Summaries

Statistical summaries are numerical or graphical representations that condense a large dataset into a few key values or visualizations. They help us understand the main characteristics of the data, such as its central location, spread, and shape.

**Why are statistical summaries important in AI and Data Science?**

*   **Data Exploration (EDA):** They are the first step in understanding a new dataset, revealing patterns, outliers, and distributions.
*   **Feature Engineering:** Summaries can be used to create new features or transform existing ones.
*   **Model Evaluation:** Summaries of model predictions can be compared to actual values.
*   **Communication:** They provide a concise way to communicate findings to others.
*   **Data Preprocessing:** Identifying and handling outliers or skewed distributions often involves using statistical summaries.

---

### 2. Measures of Central Tendency

These measures indicate the "typical" or "central" value of a dataset.

#### 2.1. Mean (Average)

*   **Definition:** The sum of all values in a dataset divided by the number of values.
*   **Formula:**
    $$ \mu = \frac{\sum_{i=1}^{n} x_i}{n} $$
    where $\mu$ is the population mean, $x_i$ are the individual values, and $n$ is the number of values.
    $$ \bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} $$
    where $\bar{x}$ is the sample mean.
*   **Key Concepts:**
    *   Sensitive to outliers (extreme values can significantly pull the mean).
    *   Used when the data is symmetrically distributed.
*   **Example:** Consider the salaries of five employees: \$40k, \$50k, \$60k, \$70k, \$100k.
    *   Mean = (40 + 50 + 60 + 70 + 100) / 5 = 320 / 5 = \$64k.
*   **Textbook Reference:**
    *   *Fundamentals of Mathematical Statistics* by Gupta & Kapoor (Chapter 2) discusses the concept of averages extensively.
    *   *Probability and Statistics for Data Science* by Fernandez-Granda (Chapter 2) covers basic descriptive statistics, including the mean.

#### 2.2. Median

*   **Definition:** The middle value of a dataset when it is ordered from least to greatest.
*   **Key Concepts:**
    *   Not sensitive to outliers.
    *   Useful for skewed datasets.
    *   If the number of observations ($n$) is odd, the median is the middle value.
    *   If $n$ is even, the median is the average of the two middle values.
*   **Example:** For the salaries \$40k, \$50k, \$60k, \$70k, \$100k:
    *   Ordered: \$40k, \$50k, **\$60k**, \$70k, \$100k.
    *   Median = \$60k.
    *   For salaries \$40k, \$50k, \$60k, \$70k:
        *   Ordered: \$40k, **\$50k, \$60k**, \$70k.
        *   Median = (\$50k + \$60k) / 2 = \$55k.
*   **Textbook Reference:**
    *   *Introduction to Linear Algebra* by Strang (While primarily focused on linear algebra, the foundational concepts of data manipulation are often touched upon in introductory statistical contexts.)
    *   *Mathematics for Machine Learning* by Deisenroth, Faisal, & Ong (Chapter 1 introduces basic statistical concepts for ML, including measures of central tendency.)

#### 2.3. Mode

*   **Definition:** The value that appears most frequently in a dataset.
*   **Key Concepts:**
    *   Can be used for both numerical and categorical data.
    *   A dataset can have no mode, one mode (unimodal), or multiple modes (bimodal, multimodal).
    *   Useful for identifying the most common category or value.
*   **Example:** For the dataset: 2, 3, 3, 4, 5, 5, 5, 6.
    *   Mode = 5 (appears three times).
    *   For dataset: 2, 3, 3, 4, 5, 5, 6, 6.
        *   Modes = 3, 5, 6 (bimodal or trimodal).
*   **Textbook Reference:**
    *   *Introducing Data Science* by Cielen, Meysman, & Meysman (Chapter 3 covers data summarization techniques, including the mode.)
    *   *Statistics For Data Science* by Miller (Chapter 2 delves into measures of central tendency and their applications.)

**Important Point:** The choice between mean, median, and mode depends on the distribution of the data and the presence of outliers. For skewed data or data with outliers, the median is often a more robust measure of central tendency than the mean.

---

### 3. Measures of Dispersion (Variability/Spread)

These measures indicate how spread out or dispersed the data points are from the center.

#### 3.1. Range

*   **Definition:** The difference between the maximum and minimum values in a dataset.
*   **Formula:**
    $$ \text{Range} = \text{Maximum Value} - \text{Minimum Value} $$
*   **Key Concepts:**
    *   Simple to calculate but highly sensitive to outliers.
    *   Gives a quick idea of the total spread.
*   **Example:** For salaries \$40k, \$50k, \$60k, \$70k, \$100k:
    *   Range = \$100k - \$40k = \$60k.
*   **Textbook Reference:**
    *   *Fundamentals of Mathematical Statistics* by Gupta & Kapoor (Chapter 2 includes range as a basic measure of dispersion.)

#### 3.2. Variance

*   **Definition:** The average of the squared differences from the mean. It measures how far each number in the set is from the mean.
*   **Formula (Population Variance, $\sigma^2$):**
    $$ \sigma^2 = \frac{\sum_{i=1}^{n} (x_i - \mu)^2}{n} $$
*   **Formula (Sample Variance, $s^2$):**
    $$ s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1} $$
    *   Using $n-1$ (Bessel's correction) provides a less biased estimate of the population variance from a sample.
*   **Key Concepts:**
    *   Units are squared, making direct interpretation difficult.
    *   Sensitive to outliers due to squaring the differences.
*   **Example:** For salaries \$40k, \$50k, \$60k, \$70k, \$100k (assuming this is a sample):
    *   Mean ($\bar{x}$) = \$64k.
    *   Differences from mean: -24, -14, -4, 6, 36.
    *   Squared differences: 576, 196, 16, 36, 1296.
    *   Sum of squared differences = 576 + 196 + 16 + 36 + 1296 = 2120.
    *   Sample Variance ($s^2$) = 2120 / (5-1) = 2120 / 4 = 530 (in thousands squared).
*   **Textbook Reference:**
    *   *Probability and Statistics - The Science of Uncertainty* by Evans & Rosenthal (Chapter 4 provides a detailed explanation of variance and its properties.)
    *   *Mathematics for Machine Learning* by Deisenroth, Faisal, & Ong (Chapter 1 might touch on variance as a measure of data spread.)

#### 3.3. Standard Deviation

*   **Definition:** The square root of the variance. It is the most commonly used measure of dispersion.
*   **Formula (Population Standard Deviation, $\sigma$):**
    $$ \sigma = \sqrt{\sigma^2} = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \mu)^2}{n}} $$
*   **Formula (Sample Standard Deviation, $s$):**
    $$ s = \sqrt{s^2} = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}} $$
*   **Key Concepts:**
    *   Has the same units as the data, making it easier to interpret.
    *   Measures the average deviation from the mean.
    *   A low standard deviation indicates that the data points tend to be close to the mean; a high standard deviation indicates that the data points are spread out over a wider range of values.
*   **Example:** For the salaries above:
    *   Sample Standard Deviation ($s$) = $\sqrt{530} \approx 23.02$ (in thousands).
    *   This means, on average, salaries deviate by about \$23,020 from the mean salary of \$64,000.
*   **Textbook Reference:**
    *   *Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow* by Géron (When discussing data preprocessing and feature scaling, standard deviation is often used and explained.)
    *   *Statistics For Data Science* by Miller (Chapter 2 provides thorough coverage of standard deviation and its importance.)

#### 3.4. Interquartile Range (IQR)

*   **Definition:** The difference between the third quartile (Q3) and the first quartile (Q1) of a dataset.
*   **Formula:**
    $$ \text{IQR} = Q3 - Q1 $$
*   **Key Concepts:**
    *   Q1 (First Quartile): The median of the lower half of the data (25th percentile).
    *   Q3 (Third Quartile): The median of the upper half of the data (75th percentile).
    *   The IQR represents the spread of the middle 50% of the data.
    *   It is robust to outliers, making it a good measure of dispersion for skewed data.
*   **Example:** For salaries \$40k, \$50k, \$60k, \$70k, \$100k:
    *   Median (Q2) = \$60k.
    *   Lower half: \$40k, \$50k. Q1 = (\$40k + \$50k) / 2 = \$45k.
    *   Upper half: \$70k, \$100k. Q3 = (\$70k + \$100k) / 2 = \$85k.
    *   IQR = \$85k - \$45k = \$40k.
*   **Textbook Reference:**
    *   *Introducing Data Science* by Cielen, Meysman, & Meysman (Chapter 3 likely discusses quartiles and IQR in the context of data exploration and visualization like box plots.)
    *   *Probability and Statistics for Data Science* by Fernandez-Granda (Chapter 2 would cover quartiles and IQR.)

**Important Point:** IQR is a key component of box plots, which visually represent the five-number summary (minimum, Q1, median, Q3, maximum) and are excellent for identifying data spread and potential outliers.

---

### 4. Measures of Shape

These measures describe the form of the distribution of data.

#### 4.1. Skewness

*   **Definition:** A measure of the asymmetry of a probability distribution.
*   **Key Concepts:**
    *   **Zero Skewness:** The distribution is perfectly symmetrical (e.g., a normal distribution). The mean, median, and mode are all equal.
    *   **Positive Skewness (Right Skew):** The tail on the right side of the distribution is longer or fatter than the left side. The mean is typically greater than the median, which is greater than the mode.
    *   **Negative Skewness (Left Skew):** The tail on the left side of the distribution is longer or fatter than the right side. The mean is typically less than the median, which is less than the mode.
*   **Visual Representation:**
    *   Symmetric:  `---/\---` (Normal distribution)
    *   Positive Skew: `---/\--- ---` (Tail to the right)
    *   Negative Skew: `--- ---/\---` (Tail to the left)
*   **Example:**
    *   If most house prices are relatively low, but a few very expensive mansions exist, the distribution of house prices would be positively skewed. The mean house price would be higher than the median house price.
*   **Textbook Reference:**
    *   *Fundamentals of Mathematical Statistics* by Gupta & Kapoor (Chapter 7 might cover skewness and kurtosis.)
    *   *Statistics For Data Science* by Miller (Chapter 3 likely discusses measures of shape.)

#### 4.2. Kurtosis

*   **Definition:** A measure of the "tailedness" of a probability distribution. It describes the shape of the peak and tails relative to a normal distribution.
*   **Key Concepts:**
    *   **Mesokurtic (Kurtosis = 3, Excess Kurtosis = 0):** The peak and tails are similar to a normal distribution.
    *   **Leptokurtic (Kurtosis > 3, Excess Kurtosis > 0):** Sharper peak and heavier tails than a normal distribution. This indicates more extreme values (outliers).
    *   **Platykurtic (Kurtosis < 3, Excess Kurtosis < 0):** Flatter peak and lighter tails than a normal distribution. This indicates fewer extreme values.
*   **Visual Representation:**
    *   Mesokurtic: Normal curve
    *   Leptokurtic: Taller, thinner peak, fatter tails
    *   Platykurtic: Flatter, wider peak, thinner tails
*   **Example:**
    *   In financial markets, returns might exhibit leptokurtic behavior, meaning extreme price movements (both up and down) are more common than predicted by a normal distribution.
*   **Textbook Reference:**
    *   *Fundamentals of Mathematical Statistics* by Gupta & Kapoor (Chapter 7 may cover kurtosis.)
    *   *Probability and Statistics - The Science of Uncertainty* by Evans & Rosenthal (Chapter 4 or later sections might discuss kurtosis.)

**Important Point:** Understanding skewness and kurtosis is crucial for selecting appropriate statistical models and machine learning algorithms. For instance, some algorithms are sensitive to skewed data or the presence of many outliers, which are indicated by skewness and kurtosis respectively.

---

### 5. Five-Number Summary and Box Plots

The five-number summary provides a quick overview of the data's distribution using:

1.  **Minimum:** The smallest value.
2.  **First Quartile (Q1):** The 25th percentile.
3.  **Median (Q2):** The 50th percentile.
4.  **Third Quartile (Q3):** The 75th percentile.
5.  **Maximum:** The largest value.

**Box Plot (Box-and-Whisker Plot):**

*   A graphical representation of the five-number summary.
*   A box is drawn from Q1 to Q3, with a line inside representing the median.
*   "Whiskers" extend from the box to the minimum and maximum values.
*   Outliers can be plotted as individual points beyond the whiskers.

**Benefits of Box Plots:**

*   Visually show the center, spread, and skewness of the data.
*   Easily compare distributions of multiple datasets.
*   Help identify potential outliers.

**Example:** Using the salary data: \$40k, \$50k, \$60k, \$70k, \$100k.
*   Minimum: \$40k
*   Q1: \$45k
*   Median: \$60k
*   Q3: \$85k
*   Maximum: \$100k

A box plot would visually represent these values, showing a box from \$45k to \$85k, a line at \$60k, and whiskers to \$40k and \$100k.

**Textbook Reference:**

*   *Introducing Data Science* by Cielen, Meysman, & Meysman (Chapter 3 likely explains box plots and their interpretation.)
*   *Statistics For Data Science* by Miller (Chapter 3 would cover visualization techniques like box plots.)

---

### 6. Application in AI and Data Science

Statistical summaries are fundamental for preparing data for machine learning models:

*   **Data Cleaning:** Identifying and handling outliers using range, IQR, or by examining distributions indicated by skewness.
*   **Feature Scaling:** Standard deviation is used in standardization (Z-score normalization) to bring features to a similar scale.
    $$ z = \frac{x - \mu}{\sigma} $$
    This is crucial for algorithms sensitive to feature scales (e.g., gradient descent-based algorithms, SVMs).
*   **Understanding Data Distribution:** Knowing if data is skewed helps in choosing appropriate models or data transformations (e.g., log transformation for right-skewed data).
*   **Model Interpretation:** Understanding the summary statistics of predictions can help assess model performance. For example, the average prediction error.

**Textbook Reference:**

*   *Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow* by Géron (Throughout the book, especially in chapters on data preprocessing and model building, understanding the statistical properties of data is implicitly or explicitly required.)
*   *Mathematics for Machine Learning* by Deisenroth, Faisal, & Ong (Chapter 1 often introduces essential mathematical concepts that underpin ML, including statistics.)

---

### 7. Practice Questions and Answers

**Question 1:**
Consider the following dataset representing the number of errors made by a machine learning model on 10 different test runs: 2, 5, 1, 0, 3, 8, 4, 2, 5, 2.
Calculate the mean, median, and mode of this dataset.

**Answer 1:**
*   **Ordered Dataset:** 0, 1, 2, 2, 2, 3, 4, 5, 5, 8
*   **Mean:** (0+1+2+2+2+3+4+5+5+8) / 10 = 32 / 10 = **3.2**
*   **Median:** Since there are 10 (even) values, the median is the average of the 5th and 6th values: (2 + 3) / 2 = **2.5**
*   **Mode:** The value that appears most frequently is **2** (appears 3 times).

**Question 2:**
For the dataset in Question 1, calculate the range, variance, and standard deviation.

**Answer 2:**
*   **Range:** Maximum (8) - Minimum (0) = **8**
*   **Variance (Sample Variance, $s^2$):**
    *   Mean ($\bar{x}$) = 3.2
    *   Squared differences from mean:
        (0-3.2)^2 = 10.24
        (1-3.2)^2 = 4.84
        (2-3.2)^2 = 1.44
        (2-3.2)^2 = 1.44
        (2-3.2)^2 = 1.44
        (3-3.2)^2 = 0.04
        (4-3.2)^2 = 0.64
        (5-3.2)^2 = 3.24
        (5-3.2)^2 = 3.24
        (8-3.2)^2 = 23.04
    *   Sum of squared differences = 10.24 + 4.84 + 1.44 + 1.44 + 1.44 + 0.04 + 0.64 + 3.24 + 3.24 + 23.04 = 59.6
    *   $s^2 = 59.6 / (10-1) = 59.6 / 9 \approx \textbf{6.62}$
*   **Standard Deviation (Sample Standard Deviation, $s$):**
    *   $s = \sqrt{6.62} \approx \textbf{2.57}$

**Question 3:**
Explain why the median is often preferred over the mean when dealing with datasets that have extreme outliers.

**Answer 3:**
The mean is calculated by summing all values and dividing by the count. If a dataset contains one or more extreme outliers (very large or very small values), these outliers can disproportionately influence the sum, pulling the mean significantly towards them. The median, on the other hand, is determined by the position of the middle value(s) in an ordered dataset. Outliers, even extreme ones, do not affect the position of the middle value(s) as much as they affect the sum, making the median a more robust measure of central tendency in the presence of outliers.

**Question 4:**
What does a high positive skewness in a dataset indicate about the distribution of values?

**Answer 4:**
High positive skewness indicates that the distribution has a long tail on the right side. This means that most of the data points are concentrated at the lower end of the distribution, with a few very high values stretching out the tail to the right. Consequently, the mean will be greater than the median, and the median will be greater than the mode.

---

### 8. Important Points to Remember

*   **Central Tendency:** Mean (sensitive to outliers), Median (robust to outliers), Mode (most frequent value).
*   **Dispersion:** Range (sensitive to outliers), Variance (squared units), Standard Deviation (same units as data, common measure), IQR (robust, middle 50%).
*   **Shape:** Skewness (symmetry, tail length), Kurtosis (peakedness, tail heaviness).
*   **Data Exploration:** Statistical summaries are vital for initial data understanding.
*   **Model Choice:** Data distribution characteristics (skewness, kurtosis) can influence model selection and require data transformations.
*   **Outliers:** Be aware of how outliers affect different statistical measures. Median and IQR are generally more robust.
*   **Sample vs. Population:** Differentiate between population parameters (e.g., $\mu, \sigma^2$) and sample statistics (e.g., $\bar{x}, s^2$). Use $n-1$ for sample variance and standard deviation.

---

This module lays the groundwork for understanding data. These statistical summaries are not just academic exercises; they are practical tools that data scientists and AI practitioners use daily to explore, clean, and prepare data for more complex analyses and model building.
