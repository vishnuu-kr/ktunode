---
title: "Weighted Mean – Median"
subject: "INTRODUCTION TO BUSINESS ANALYTICS"
module: "Module 2: Data: Definition and its Importance"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463a08"
status: "completed"
scrapedAt: "2026-05-20T18:05:27.607Z"
---
# Introduction to Business Analytics: Module 2 - Data: Definition and its Importance

## Topic: Weighted Mean – Median

### Learning Outcomes:

*   **Understand the concept of weighted mean and when it is used.**
*   **Understand the concept of median and when it is used.**
*   **Be able to calculate both weighted mean and median.**
*   **Differentiate between mean, median, and mode.**
*   **Appreciate the importance of choosing the appropriate measure of central tendency for data analysis.**

### Course Outcomes Alignment:

*   **CO1 (K2):** Understanding these measures of central tendency is fundamental to grasping how data is summarized, which is a core part of business analytics as a competitive strategy.
*   **CO2 (K2):** These measures are crucial for understanding data patterns, which directly informs decision-making and problem-solving by providing insights into typical values.
*   **CO3 (K2):** Weighted mean and median are key components of descriptive analytics, used to summarize and describe datasets.

### 1. Introduction to Measures of Central Tendency

In business analytics, understanding the "typical" value within a dataset is crucial for making informed decisions. Measures of central tendency help us achieve this by summarizing a dataset into a single representative value. The most common measures are the mean, median, and mode. This topic focuses on the **weighted mean** and the **median**.

### 2. Weighted Mean

#### 2.1 Definition

A **weighted mean** is an average where each data point is assigned a specific "weight" or importance. Unlike the simple arithmetic mean where all data points are treated equally, the weighted mean gives more influence to data points with higher weights.

**Formula:**

$$ \text{Weighted Mean} = \frac{\sum (w_i \cdot x_i)}{\sum w_i} $$

Where:
*   $x_i$: The individual data values.
*   $w_i$: The weight assigned to each data value $x_i$.
*   $\sum$: Summation symbol.

**When to Use Weighted Mean:**

The weighted mean is particularly useful when:
*   **Data points have varying levels of importance:** For instance, in calculating a student's final grade, different assignments (e.g., exams, homework) might have different percentage contributions.
*   **Data is grouped or summarized:** When dealing with frequency distributions, weights can represent the frequencies of each value.
*   **Analyzing survey data:** Different demographic groups might have different representation in a sample, and weights can be used to adjust for this.

**Textbook Reference:**
*   U Dinesh Kumar's "Business Analytics-The Science of Data Driven Decision Making" likely discusses weighted averages in the context of data summarization and its application in various business scenarios, such as calculating performance metrics. (Chapter on Descriptive Statistics or Data Summarization)
*   R. Sharda, D. Delen & E. Turban's "Business Intelligence. Analytics and Data Science: A Managerial Perspective" would also cover weighted averages as a fundamental statistical tool for data analysis and reporting. (Chapter on Data Analysis or Statistical Methods)

#### 2.2 Example: Calculating Weighted Mean

**Scenario:** A student's final grade is calculated based on different components with assigned weights:

*   Assignments: 20% (Weight = 0.20)
*   Midterm Exam: 30% (Weight = 0.30)
*   Final Exam: 50% (Weight = 0.50)

The student's scores are:

*   Assignments: 85
*   Midterm Exam: 78
*   Final Exam: 92

**Calculation:**

1.  **Multiply each score by its weight:**
    *   Assignments: $85 \times 0.20 = 17$
    *   Midterm Exam: $78 \times 0.30 = 23.4$
    *   Final Exam: $92 \times 0.50 = 46$

2.  **Sum the weighted scores:**
    *   $17 + 23.4 + 46 = 86.4$

3.  **Sum the weights:**
    *   $0.20 + 0.30 + 0.50 = 1.00$

4.  **Calculate the weighted mean:**
    *   Weighted Mean = $\frac{86.4}{1.00} = 86.4$

**Result:** The student's weighted average grade is 86.4.

**Practice Question:** A company's stock price is analyzed based on the performance of three different sectors, each with a specific weight: Technology (40%), Healthcare (35%), and Energy (25%). If the sector returns are 15%, 10%, and 5% respectively, what is the weighted average return of the stock?

**Answer:**
*   Technology: $15\% \times 0.40 = 6\%$
*   Healthcare: $10\% \times 0.35 = 3.5\%$
*   Energy: $5\% \times 0.25 = 1.25\%$
*   Weighted Average Return = $6\% + 3.5\% + 1.25\% = 10.75\%$

### 3. Median

#### 3.1 Definition

The **median** is the middle value in a dataset that has been ordered from least to greatest. It is the value that separates the higher half from the lower half of the data.

**When to Use Median:**

The median is preferred when:
*   **The dataset contains outliers:** Outliers are extreme values that can significantly skew the mean. The median is not affected by outliers, making it a more robust measure of central tendency in such cases.
*   **The data is skewed:** In skewed distributions, the median provides a better representation of the "typical" value than the mean.
*   **Dealing with ordinal data:** While not strictly a measure for ordinal data, the median can be used to find the middle category if the data can be ordered.

**Textbook Reference:**
*   Fundamentals of Business Analytics by R. N. Prasad & Seema Acharya would delve into the median as a measure of central tendency, explaining its calculation for both odd and even-sized datasets and its robustness against outliers. (Chapter on Descriptive Statistics)
*   Business Analytics by J. R. Evans emphasizes the practical application of statistical measures, including the median, in understanding business data and making decisions, especially when dealing with potentially non-normally distributed data. (Chapter on Data Analysis Techniques)

#### 3.2 Calculating the Median

The method for calculating the median depends on whether the dataset has an odd or even number of observations.

**3.2.1 For an Odd Number of Observations:**

1.  **Order the data:** Arrange all data points in ascending (or descending) order.
2.  **Identify the middle value:** The median is the value in the exact middle of the ordered dataset.

**Formula:**
For a dataset of size $n$ (where $n$ is odd), the median is the value at the $\frac{(n+1)}{2}$ position.

#### 3.2.2 For an Even Number of Observations:**

1.  **Order the data:** Arrange all data points in ascending (or descending) order.
2.  **Identify the two middle values:** The median is the average (mean) of the two middle values.

**Formula:**
For a dataset of size $n$ (where $n$ is even), the median is the average of the values at the $\frac{n}{2}$ and $(\frac{n}{2} + 1)$ positions.

#### 3.3 Examples: Calculating Median

**Example 1: Odd Number of Observations**

**Dataset:** 12, 15, 18, 20, 22, 25, 28

1.  **Order the data:** (Already ordered) 12, 15, 18, **20**, 22, 25, 28
2.  **Number of observations (n):** 7 (odd)
3.  **Position of median:** $\frac{(7+1)}{2} = \frac{8}{2} = 4$th position.
4.  **Median:** The value at the 4th position is 20.

**Example 2: Even Number of Observations**

**Dataset:** 10, 14, 16, 18, 20, 22, 24, 26

1.  **Order the data:** (Already ordered) 10, 14, 16, **18**, **20**, 22, 24, 26
2.  **Number of observations (n):** 8 (even)
3.  **Positions of middle values:**
    *   $\frac{n}{2} = \frac{8}{2} = 4$th position
    *   $(\frac{n}{2} + 1) = (\frac{8}{2} + 1) = 5$th position
4.  **Median:** The values at the 4th and 5th positions are 18 and 20.
    *   Median = $\frac{(18 + 20)}{2} = \frac{38}{2} = 19$.

**Practice Question:** Find the median of the following dataset representing the number of customer complaints per day over a week: 5, 8, 2, 10, 4, 7, 6.

**Answer:**
1.  **Order the data:** 2, 4, 5, **6**, 7, 8, 10
2.  **Number of observations (n):** 7 (odd)
3.  **Position of median:** $\frac{(7+1)}{2} = 4$th position.
4.  **Median:** 6

**Practice Question:** Find the median of the following dataset representing the daily sales of a small store (in thousands of dollars): 3.5, 4.2, 2.8, 5.1, 3.9, 4.5.

**Answer:**
1.  **Order the data:** 2.8, 3.5, **3.9**, **4.2**, 4.5, 5.1
2.  **Number of observations (n):** 6 (even)
3.  **Positions of middle values:** $\frac{6}{2} = 3$rd and $(\frac{6}{2} + 1) = 4$th positions.
4.  **Median:** $\frac{(3.9 + 4.2)}{2} = \frac{8.1}{2} = 4.05$

### 4. Mean vs. Median vs. Weighted Mean

| Feature         | Mean                               | Median                                    | Weighted Mean                                       |
| :-------------- | :--------------------------------- | :---------------------------------------- | :-------------------------------------------------- |
| **Definition**  | Sum of all values divided by count | Middle value in an ordered dataset        | Average where each value has an assigned weight     |
| **Calculation** | $\frac{\sum x_i}{n}$               | Middle value (or average of two middle)   | $\frac{\sum (w_i \cdot x_i)}{\sum w_i}$             |
| **Sensitivity to Outliers** | Highly sensitive                   | Not sensitive (robust)                    | Sensitivity depends on outlier weights              |
| **Use Cases**   | Normally distributed data, no outliers | Skewed data, data with outliers           | Data with varying importance, grouped data          |
| **Information Provided** | Average value                      | Typical value, separates data into halves | Average value considering relative importance       |

**Reference Book Insight:**
*   "Data Analytics" by A. Maheshwari might compare these measures in detail, highlighting when each is most appropriate for business decision-making, especially in contexts like financial analysis or customer behavior studies. (Chapter on Exploratory Data Analysis)

### 5. Importance in Business Analytics (Connecting to Course Outcomes)

*   **CO1 & CO2 (Understanding Fundamentals & Importance in Decision Making):**
    *   The choice between mean and median is a fundamental decision in descriptive analytics.
    *   Understanding the weighted mean is critical for accurately reflecting business realities where different factors have different impacts (e.g., product sales by region, customer satisfaction scores by segment).
    *   Using the correct measure prevents misinterpretations of data and leads to better-informed decisions. For instance, if average salaries in a company are heavily influenced by a few highly paid executives, the median salary might provide a more realistic picture of the typical employee's compensation.

*   **CO3 (Application of Descriptive Analytics):**
    *   Both weighted mean and median are direct applications of descriptive analytics, used to summarize and characterize data.
    *   In a sales report, a weighted average of regional sales, weighted by population or market share, can give a more insightful view than a simple average.
    *   In analyzing customer wait times, the median might be more useful than the mean if a few extremely long wait times are present.

### 6. Important Points to Remember:

*   **Median:** Always order your data first before finding the median. If the dataset has an even number of observations, the median is the average of the two middle values.
*   **Weighted Mean:** Ensure that the weights accurately reflect the importance or frequency of each data point. The sum of weights is the denominator in the weighted mean calculation.
*   **Outliers:** The median is robust to outliers, while the mean is sensitive. The weighted mean's sensitivity depends on the weights assigned to outliers.
*   **Context is Key:** The choice of which measure of central tendency to use depends heavily on the nature of the data and the specific business question being asked.

### 7. Practice Exercises

**Exercise 1 (Weighted Mean):**
A mutual fund's return is calculated based on the performance of its holdings, with the following weights and returns:
*   Stocks: 60% weight, 12% return
*   Bonds: 30% weight, 5% return
*   Real Estate: 10% weight, 8% return

Calculate the weighted average return of the mutual fund.

**Exercise 2 (Median):**
Find the median of the following exam scores: 75, 82, 90, 65, 88, 79, 95, 85, 80.

**Exercise 3 (Mean vs. Median):**
Consider the following monthly incomes (in thousands of dollars) for a small team: 4, 5, 6, 5, 7, 25.
a) Calculate the mean monthly income.
b) Calculate the median monthly income.
c) Which measure (mean or median) better represents the typical income of the team? Explain why.

### 8. Answers to Practice Exercises

**Exercise 1 Answer:**
*   Stocks: $12\% \times 0.60 = 7.2\%$
*   Bonds: $5\% \times 0.30 = 1.5\%$
*   Real Estate: $8\% \times 0.10 = 0.8\%$
*   Weighted Average Return = $7.2\% + 1.5\% + 0.8\% = 9.5\%$

**Exercise 2 Answer:**
1.  **Order the data:** 65, 75, 79, 80, **82**, 85, 88, 90, 95
2.  **Number of observations (n):** 9 (odd)
3.  **Position of median:** $\frac{(9+1)}{2} = 5$th position.
4.  **Median:** 82

**Exercise 3 Answer:**
a) **Mean:**
   $\frac{(4 + 5 + 6 + 5 + 7 + 25)}{6} = \frac{52}{6} \approx 8.67$ thousand dollars.

b) **Median:**
   1. **Order the data:** 4, 5, **5**, **6**, 7, 25
   2. **Number of observations (n):** 6 (even)
   3. **Positions of middle values:** $\frac{6}{2} = 3$rd and $(\frac{6}{2} + 1) = 4$th positions.
   4. **Median:** $\frac{(5 + 6)}{2} = \frac{11}{2} = 5.5$ thousand dollars.

c) **Better Measure:** The **median** (5.5 thousand dollars) better represents the typical income of the team. The mean (8.67 thousand dollars) is significantly inflated by the outlier income of 25 thousand dollars. The median, being unaffected by this outlier, provides a more realistic picture of the earnings for most members of the team.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
