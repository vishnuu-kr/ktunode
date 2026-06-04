---
title: "statistical summaries"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe354"
status: "completed"
scrapedAt: "2026-05-23T17:45:55.033Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability: Statistical Summaries

## Introduction to Statistical Summaries

Statistical summaries are crucial for understanding and describing the key features of a dataset. They help us condense large amounts of information into concise, interpretable metrics, enabling us to grasp the central tendency, spread, and shape of the data. In the context of AI and Data Science, these summaries are the first step in data exploration and form the foundation for more complex analyses, hypothesis testing, and model building.

---

### 1. Measures of Central Tendency

These measures indicate the typical or average value in a dataset.

*   **Mean (Average):**
    *   **Definition:** The sum of all values divided by the number of values.
    *   **Formula:** $\mu = \frac{\sum_{i=1}^{N} x_i}{N}$ (for a population) or $\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$ (for a sample).
    *   **Key Points:**
        *   Sensitive to outliers.
        *   Assumes interval or ratio data.
        *   Widely used in statistical inference.
    *   **Example:** If the heights of 5 people are 1.60m, 1.75m, 1.80m, 1.65m, and 1.90m, the mean height is $(1.60 + 1.75 + 1.80 + 1.65 + 1.90) / 5 = 1.74$m.
    *   **Reference:** "Fundamentals of Mathematical Statistics" by Gupta & Kapoor extensively covers the mean and its properties.

*   **Median:**
    *   **Definition:** The middle value in a dataset when the data is arranged in ascending or descending order. If there's an even number of data points, it's the average of the two middle values.
    *   **Key Points:**
        *   Robust to outliers.
        *   Can be used for ordinal data, and also interval/ratio data.
        *   Useful when the data is skewed.
    *   **Example:** For the heights 1.60m, 1.65m, 1.75m, 1.80m, 1.90m, the median is 1.75m. For heights 1.60m, 1.65m, 1.75m, 1.80m, 1.90m, 2.00m, the median is $(1.75 + 1.80) / 2 = 1.775$m.
    *   **Reference:** "Statistics For Data Science" by James D. Miller highlights the median's robustness in real-world scenarios.

*   **Mode:**
    *   **Definition:** The value that appears most frequently in a dataset. A dataset can have one mode (unimodal), two modes (bimodal), or more (multimodal).
    *   **Key Points:**
        *   Can be used for nominal, ordinal, interval, and ratio data.
        *   Useful for identifying the most common occurrences.
    *   **Example:** In the dataset [1, 2, 2, 3, 3, 3, 4, 5], the mode is 3.
    *   **Reference:** "Probability and Statistics for Data Science" by Carlos Fernandez-Granda discusses the mode in the context of probability distributions.

---

### 2. Measures of Dispersion (Spread/Variability)

These measures quantify how spread out or dispersed the data points are from the central tendency.

*   **Range:**
    *   **Definition:** The difference between the maximum and minimum values in a dataset.
    *   **Formula:** Range = Maximum Value - Minimum Value.
    *   **Key Points:**
        *   Simple to calculate but highly sensitive to outliers.
        *   Provides a quick but coarse measure of spread.
    *   **Example:** For the heights [1.60m, 1.75m, 1.80m, 1.65m, 1.90m], the range is 1.90m - 1.60m = 0.30m.
    *   **Reference:** "Fundamentals of Mathematical Statistics" by Gupta & Kapoor introduces the range as a basic measure of variability.

*   **Variance:**
    *   **Definition:** The average of the squared differences from the mean. It measures how far each number in the set is from the mean.
    *   **Formula:** $\sigma^2 = \frac{\sum_{i=1}^{N} (x_i - \mu)^2}{N}$ (for a population) or $s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}$ (for a sample). The $n-1$ in the sample variance is Bessel's correction, providing an unbiased estimate of the population variance.
    *   **Key Points:**
        *   Units are squared, making it hard to interpret directly.
        *   Sensitive to outliers.
    *   **Example:** For sample data [1, 2, 3, 4, 5], mean is 3. Variance = $[(1-3)^2 + (2-3)^2 + (3-3)^2 + (4-3)^2 + (5-3)^2] / (5-1) = [4 + 1 + 0 + 1 + 4] / 4 = 10 / 4 = 2.5$.
    *   **Reference:** "Mathematics for machine learning" by Deisenroth, Faisal, and Ong often uses variance in discussions of data spread and its impact on algorithms.

*   **Standard Deviation:**
    *   **Definition:** The square root of the variance. It is the most commonly used measure of dispersion.
    *   **Formula:** $\sigma = \sqrt{\sigma^2}$ (for a population) or $s = \sqrt{s^2}$ (for a sample).
    *   **Key Points:**
        *   Has the same units as the data, making it easily interpretable.
        *   A low standard deviation indicates that data points tend to be close to the mean; a high standard deviation indicates that data points are spread out over a wider range.
        *   Crucial for understanding data variability and for statistical inference (e.g., in the Central Limit Theorem).
    *   **Example:** For the sample data [1, 2, 3, 4, 5], the variance is 2.5. The standard deviation is $\sqrt{2.5} \approx 1.58$.
    *   **Reference:** "Introduction to Linear Algebra" by Gilbert Strang, while focused on linear algebra, implicitly uses concepts of data spread when discussing vector norms, which are related to standard deviation. "Probability and Statistics - The Science of Uncertainty" by Evans & Rosenthal provides a thorough treatment of standard deviation and its applications.

*   **Interquartile Range (IQR):**
    *   **Definition:** The difference between the third quartile (Q3) and the first quartile (Q1). It represents the range of the middle 50% of the data.
    *   **Formula:** IQR = Q3 - Q1.
    *   **Key Points:**
        *   Robust to outliers as it focuses on the middle portion of the data.
        *   Useful for identifying potential outliers (values outside $Q1 - 1.5 \times IQR$ or $Q3 + 1.5 \times IQR$).
    *   **Example:** For the ordered dataset [1, 3, 5, 7, 9, 11, 13]:
        *   Q1 (median of the first half [1, 3, 5]) is 3.
        *   Q3 (median of the second half [9, 11, 13]) is 11.
        *   IQR = 11 - 3 = 8.
    *   **Reference:** "Introducing data science: big data, machine learning, and more, using Python tools" by Cielen et al. often uses IQR for data exploration and outlier detection.

---

### 3. Measures of Position

These measures describe where a particular data point lies within a dataset relative to other data points.

*   **Percentiles:**
    *   **Definition:** A value below which a certain percentage of observations fall. The $p^{th}$ percentile is a value such that $p\%$ of the data falls below it.
    *   **Key Points:**
        *   The median is the 50th percentile.
        *   The 25th percentile is the first quartile (Q1).
        *   The 75th percentile is the third quartile (Q3).
    *   **Example:** If a student scores in the 90th percentile on an exam, it means they scored higher than 90% of the other students.
    *   **Reference:** "Fundamentals of Mathematical Statistics" by Gupta & Kapoor details the computation and interpretation of percentiles.

*   **Quartiles:**
    *   **Definition:** Values that divide the ordered dataset into four equal parts.
        *   **Q1 (First Quartile):** The 25th percentile.
        *   **Q2 (Second Quartile):** The 50th percentile (which is the Median).
        *   **Q3 (Third Quartile):** The 75th percentile.

---

### 4. Measures of Shape

These measures describe the distribution of the data.

*   **Skewness:**
    *   **Definition:** A measure of the asymmetry of a probability distribution of a real-valued random variable about its mean.
    *   **Key Points:**
        *   **Zero Skewness:** The data is perfectly symmetrical (e.g., a normal distribution).
        *   **Positive Skewness (Right Skewed):** The tail on the right side of the distribution is longer or fatter than the left side. The mean is typically greater than the median.
        *   **Negative Skewness (Left Skewed):** The tail on the left side of the distribution is longer or fatter than the right side. The mean is typically less than the median.
    *   **Interpretation:** Skewness helps understand if the data is concentrated on one side or if there are extreme values pulling the distribution.
    *   **Reference:** "Probability and Statistics for Data Science" by Carlos Fernandez-Granda uses skewness to characterize data distributions.

*   **Kurtosis:**
    *   **Definition:** A measure of the "tailedness" of the probability distribution of a real-valued random variable. It describes whether the data are heavy-tailed or light-tailed relative to a normal distribution.
    *   **Key Points:**
        *   **Mesokurtic:** Kurtosis equal to that of a normal distribution (usually kurtosis = 3, or excess kurtosis = 0).
        *   **Leptokurtic:** Heavy tails and a sharp peak (kurtosis > 3, or excess kurtosis > 0). Indicates more outliers than a normal distribution.
        *   **Platykurtic:** Light tails and a flatter peak (kurtosis < 3, or excess kurtosis < 0). Indicates fewer outliers than a normal distribution.
    *   **Interpretation:** Kurtosis helps understand the propensity for outliers in the data.
    *   **Reference:** "Fundamentals of Mathematical Statistics" by Gupta & Kapoor discusses kurtosis as a descriptor of the shape of distributions.

---

### 5. Graphical Summaries

Visual representations are often more intuitive for understanding data than numerical summaries alone.

*   **Histograms:**
    *   **Definition:** A graphical representation of the distribution of numerical data. It is an estimate of the probability distribution of a continuous variable.
    *   **How it works:** The data is divided into bins, and the height of each bar represents the frequency or count of data points falling into that bin.
    *   **Usefulness:** Helps visualize the shape, central tendency, spread, and presence of skewness and outliers.
    *   **Reference:** "Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron uses histograms extensively for visualizing feature distributions in machine learning.

*   **Box Plots (Box-and-Whisker Plots):**
    *   **Definition:** A standardized way of displaying the distribution of data based on a five-number summary: minimum, first quartile (Q1), median, third quartile (Q3), and maximum.
    *   **How it works:** A box is drawn from Q1 to Q3, with a line inside at the median. "Whiskers" extend from the box to the minimum and maximum values, or to a certain limit (e.g., 1.5*IQR) to identify potential outliers.
    *   **Usefulness:** Excellent for comparing distributions across different groups, identifying the median, spread (IQR), and potential outliers.
    *   **Reference:** "Introducing data science: big data, machine learning, and more, using Python tools" by Cielen et al. demonstrates box plots for visualizing and comparing datasets.

*   **Scatter Plots:**
    *   **Definition:** A plot that uses Cartesian coordinates to display values for two variables for a set of data.
    *   **Usefulness:** Used to observe relationships (correlations) between two numerical variables.
    *   **Reference:** "Data science: concepts and practice" by Kotu & Deshpande emphasizes scatter plots for understanding relationships between features.

*   **Frequency Tables:**
    *   **Definition:** A table that shows the frequency of occurrence for each distinct value or category in a dataset.
    *   **Usefulness:** Provides a direct count of how often each item appears.
    *   **Reference:** Basic statistical texts like "Fundamentals of Mathematical Statistics" cover frequency tables.

---

### Alignment with Course Outcomes

*   **CO1 (Apply machine learning algorithms):** Understanding statistical summaries is a prerequisite for feature engineering and data preprocessing, which are vital steps before applying ML algorithms. For example, knowing the mean and standard deviation helps in feature scaling.
*   **CO2 (Apply advanced mathematical concepts):** Measures like variance and standard deviation are rooted in mathematical calculations that involve sums and squares, laying the groundwork for understanding more complex mathematical operations in AI/ML.
*   **CO3 (Analyze and interpret data using statistical methods):** This entire topic directly addresses CO3, providing the foundational descriptive statistics needed for data analysis and interpretation.
*   **CO4 (Integrate statistical approaches and machine learning techniques):** Statistical summaries are the first integrated step in the process, informing how data is prepared and modeled using ML techniques.

---

### Practice Questions

1.  Given the following dataset of exam scores: [75, 88, 92, 78, 85, 88, 95, 70, 88, 90]
    *   Calculate the mean, median, and mode.
    *   Calculate the range and standard deviation.
    *   What does the skewness of this dataset likely indicate?
2.  Explain why the median is preferred over the mean when dealing with a dataset that has extreme outliers.
3.  How does a histogram help in understanding the shape of a data distribution?
4.  Describe the difference between variance and standard deviation in terms of their units and interpretability.
5.  If a dataset has a positive skew, what can you infer about the relationship between its mean, median, and mode?

---

### Answers to Practice Questions

1.  **Dataset:** [70, 75, 78, 85, 88, 88, 88, 90, 92, 95] (Sorted)
    *   **Mean:** $(75+88+92+78+85+88+95+70+88+90) / 10 = 84.9$
    *   **Median:** The middle two values are 88 and 88. Median = $(88+88)/2 = 88$.
    *   **Mode:** 88 (appears 3 times).
    *   **Range:** $95 - 70 = 25$.
    *   **Standard Deviation:**
        *   Mean = 84.9
        *   Squared differences from the mean:
            *   $(70-84.9)^2 \approx 222.01$
            *   $(75-84.9)^2 \approx 98.01$
            *   $(78-84.9)^2 \approx 47.61$
            *   $(85-84.9)^2 \approx 0.01$
            *   $(88-84.9)^2 \approx 9.61$ (x3)
            *   $(90-84.9)^2 \approx 26.01$
            *   $(92-84.9)^2 \approx 40.32$
            *   $(95-84.9)^2 \approx 102.01$
        *   Sum of squared differences $\approx 222.01 + 98.01 + 47.61 + 0.01 + (3 \times 9.61) + 26.01 + 40.32 + 102.01 \approx 546.08$
        *   Sample Variance ($s^2$) $\approx 546.08 / (10-1) \approx 60.676$
        *   Sample Standard Deviation ($s$) $\approx \sqrt{60.676} \approx 7.79$
    *   **Skewness:** The mean (84.9) is slightly less than the median (88). This suggests a slight **negative skew**, meaning the tail is slightly longer on the left side, or there are a few lower scores pulling the average down.

2.  The median is preferred over the mean when there are extreme outliers because the median is not affected by the magnitude of extreme values. The mean is calculated by summing all values, so a very large or very small outlier can significantly pull the mean away from the central tendency of the majority of the data. The median, being the middle value, only considers the order of data points, making it more robust.

3.  A histogram displays the frequency distribution of data by dividing the data into bins and showing the count of observations in each bin as bars. By examining the shape of these bars, one can infer:
    *   **Symmetry:** If the bars are roughly symmetrical around the center, it suggests a symmetric distribution.
    *   **Skewness:** If the bars are clustered on one side and taper off on the other, it indicates skewness (left-skewed if the tail is on the left, right-skewed if on the right).
    *   **Peakedness (Kurtosis):** The height and sharpness of the central peak can give an indication of kurtosis.
    *   **Modality:** The number of peaks in the histogram shows if the distribution is unimodal, bimodal, or multimodal.

4.  **Variance:** The variance is the average of the squared differences from the mean. Its units are the square of the original data units (e.g., if data is in meters, variance is in square meters). This makes it difficult to directly interpret in the context of the original data.
    **Standard Deviation:** The standard deviation is the square root of the variance. Its units are the same as the original data units (e.g., meters). This makes it much easier to interpret as it represents the typical deviation or spread of data points from the mean. A standard deviation of 5 kg means that, on average, weights in the dataset are about 5 kg away from the average weight.

5.  If a dataset has a **positive skew** (right-skewed):
    *   The **mean** is typically **greater than** the median.
    *   The **median** is typically **greater than** the mode.
    This indicates that the distribution has a tail that extends towards higher values, and the extreme higher values pull the mean upwards.

---

### Important Points to Remember

*   **Context Matters:** The choice of which statistical summary to use depends on the nature of the data (nominal, ordinal, interval, ratio) and the goal of the analysis.
*   **Outliers:** Be aware of how outliers affect different measures (mean, range, variance are sensitive; median, IQR are robust).
*   **Data Exploration:** Statistical summaries are the first step in Exploratory Data Analysis (EDA). They provide an initial understanding of the data's characteristics before applying more complex modeling techniques.
*   **Bessel's Correction:** Remember to use $n-1$ in the denominator for sample variance and standard deviation to get an unbiased estimate of the population variance.
*   **Visualizations:** Always complement numerical summaries with graphical summaries for a more comprehensive understanding of the data.

---
This set of notes covers the basics of statistical summaries, their definitions, formulas, interpretation, and relevance in AI and Data Science, aligning with the provided learning outcomes and referencing the suggested textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
