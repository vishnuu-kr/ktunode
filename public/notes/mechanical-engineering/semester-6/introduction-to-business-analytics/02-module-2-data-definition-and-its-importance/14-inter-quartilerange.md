---
title: "Inter QuartileRange"
subject: "INTRODUCTION TO BUSINESS ANALYTICS"
module: "Module 2: Data: Definition and its Importance"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463a0e"
status: "completed"
scrapedAt: "2026-05-20T18:05:31.688Z"
---
# Introduction to Business Analytics: Module 2 - Data: Definition and its Importance

## Topic: Interquartile Range (IQR)

### Learning Outcomes Covered:

*   **Understanding the importance of data in decision making and problem solving:** While not directly a decision-making tool itself, understanding data spread like IQR is crucial for interpreting data and making informed decisions. (CO2)
*   **Understanding the application of descriptive analytics in decision making:** IQR is a descriptive statistic used to summarize and understand the distribution of data, aiding in initial data analysis for decision-making. (CO3)

### Key Concepts and Definitions:

The Interquartile Range (IQR) is a measure of statistical dispersion, representing the range of the middle 50% of a dataset. It is calculated as the difference between the third quartile (Q3) and the first quartile (Q1).

*   **Quartiles:** Quartiles are values that divide a dataset into four equal parts. They help in understanding the distribution and spread of data.
    *   **First Quartile (Q1) or Lower Quartile:** The value below which 25% of the data falls. It is the median of the lower half of the dataset.
    *   **Second Quartile (Q2) or Median:** The value that divides the dataset into two equal halves. 50% of the data falls below Q2.
    *   **Third Quartile (Q3) or Upper Quartile:** The value below which 75% of the data falls. It is the median of the upper half of the dataset.

*   **Interquartile Range (IQR):**
    *   **Formula:** $IQR = Q3 - Q1$
    *   **Significance:** The IQR indicates the variability of the central 50% of the data. A larger IQR suggests greater spread in the middle of the distribution, while a smaller IQR indicates that the middle data points are clustered more tightly.

*   **Importance of IQR in Business Analytics:**
    *   **Robustness to Outliers:** Unlike the range (maximum - minimum), the IQR is not affected by extreme values (outliers) because it focuses on the middle portion of the data. This makes it a more robust measure of dispersion when outliers are present. (Referenced in concepts of descriptive statistics in Sharda, Delen, & Turban, 4th Ed.)
    *   **Understanding Data Spread:** It provides a clear indication of how spread out the "typical" data points are. This is vital for understanding customer behavior, sales performance, production efficiency, etc. (Aligns with CO3).
    *   **Identifying Outliers (Box Plots):** The IQR is a fundamental component of creating box plots, which are excellent tools for visualizing data distribution and identifying potential outliers. Outliers are often defined as values that fall below $Q1 - 1.5 \times IQR$ or above $Q3 + 1.5 \times IQR$. (Relates to CO4 - data visualization).
    *   **Comparing Distributions:** The IQR can be used to compare the spread of different datasets. For example, a business might compare the IQR of sales performance across different regions to understand which regions have more consistent sales. (Relates to CO2).

### Calculating the Interquartile Range:

The process for calculating IQR involves finding Q1 and Q3. Here's a general approach:

**Steps:**

1.  **Order the Data:** Arrange the dataset in ascending order.
2.  **Find the Median (Q2):**
    *   If the number of data points ($n$) is odd, the median is the middle value.
    *   If $n$ is even, the median is the average of the two middle values.
3.  **Find Q1 (Lower Quartile):**
    *   Q1 is the median of the lower half of the dataset (all values below the median).
    *   *Important Note:* If the median is one of the data points (when $n$ is odd), do not include it in the lower half.
4.  **Find Q3 (Upper Quartile):**
    *   Q3 is the median of the upper half of the dataset (all values above the median).
    *   *Important Note:* If the median is one of the data points (when $n$ is odd), do not include it in the upper half.
5.  **Calculate the IQR:** $IQR = Q3 - Q1$

**Example 1: Odd Number of Data Points**

Consider the following dataset representing customer waiting times (in minutes):
2, 5, 8, 10, 12, 15, 18, 20, 22, 25, 28

1.  **Ordered Data:** (Already ordered)
2.  **Find Median (Q2):** There are 11 data points. The median is the 6th value: **15**.
3.  **Find Q1:** The lower half of the data (excluding the median 15) is: 2, 5, 8, 10, 12. The median of this lower half is the 3rd value: **8**. So, $Q1 = 8$.
4.  **Find Q3:** The upper half of the data (excluding the median 15) is: 18, 20, 22, 25, 28. The median of this upper half is the 3rd value: **22**. So, $Q3 = 22$.
5.  **Calculate IQR:** $IQR = Q3 - Q1 = 22 - 8 = \textbf{14}$ minutes.

**Example 2: Even Number of Data Points**

Consider the following dataset representing website visit durations (in seconds):
30, 45, 50, 60, 75, 80, 90, 100, 110, 120

1.  **Ordered Data:** (Already ordered)
2.  **Find Median (Q2):** There are 10 data points. The median is the average of the 5th and 6th values: $(75 + 80) / 2 = \textbf{77.5}$.
3.  **Find Q1:** The lower half of the data is: 30, 45, 50, 60, 75. The median of this lower half is the 3rd value: **50**. So, $Q1 = 50$.
4.  **Find Q3:** The upper half of the data is: 80, 90, 100, 110, 120. The median of this upper half is the 3rd value: **100**. So, $Q3 = 100$.
5.  **Calculate IQR:** $IQR = Q3 - Q1 = 100 - 50 = \textbf{50}$ seconds.

**Note on Calculating Quartiles:** There are slightly different methods for calculating quartiles, especially regarding the inclusion/exclusion of the median when the dataset size is odd. The method described above is common and consistent. (Referenced in data analysis techniques in Prasad & Acharya, 2nd Ed.).

### Business Applications of IQR:

*   **Customer Segmentation:** Understanding the range of purchase values or engagement times for different customer segments. A segment with a smaller IQR for purchase value might indicate a more predictable customer base. (Relates to CO3).
*   **Performance Monitoring:** Tracking the IQR of key performance indicators (KPIs) like daily sales, customer service response times, or production defect rates. A widening IQR might signal emerging issues. (Relates to CO3 and CO7).
*   **Risk Assessment:** In financial analytics, IQR can help assess the spread of returns for different investments, providing a more robust measure of volatility than the standard deviation when outliers are a concern. (Relates to CO2).
*   **Quality Control:** Identifying if the variability in product measurements is within acceptable limits by examining the IQR of sample data. (Relates to CO2).

### Practice Questions:

1.  Calculate the Interquartile Range (IQR) for the following dataset of employee salaries (in thousands of dollars):
    45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 110, 120

2.  A marketing team is analyzing the number of website clicks generated by their advertisements. They have the following data for a week:
    150, 165, 170, 180, 195, 200, 210, 225, 240, 255, 270, 285, 300, 315, 330

    Calculate the IQR for this data. What does the IQR tell you about the variability in advertisement clicks?

3.  Why is the IQR often preferred over the range for describing data spread when outliers are suspected?

### Answers to Practice Questions:

1.  **Calculation:**
    *   Ordered Data: 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 110, 120
    *   Number of data points ($n$) = 14
    *   Median (Q2): Average of 7th and 8th values = (75 + 80) / 2 = 77.5
    *   Lower Half: 45, 50, 55, 60, 65, 70, 75
    *   Q1 (Median of lower half): 60
    *   Upper Half: 80, 85, 90, 95, 100, 110, 120
    *   Q3 (Median of upper half): 95
    *   IQR = $Q3 - Q1 = 95 - 60 = \textbf{35}$ (thousands of dollars)

2.  **Calculation:**
    *   Ordered Data: (Already ordered)
    *   Number of data points ($n$) = 15
    *   Median (Q2): 10th value = 255
    *   Lower Half (excluding median): 150, 165, 170, 180, 195, 200, 210
    *   Q1 (Median of lower half): 180
    *   Upper Half (excluding median): 270, 285, 300, 315, 330
    *   Q3 (Median of upper half): 300
    *   IQR = $Q3 - Q1 = 300 - 180 = \textbf{120}$ clicks.

    **Interpretation:** The IQR of 120 clicks tells us that the middle 50% of the advertisement clicks (from the 25th percentile to the 75th percentile) vary by 120 clicks. This indicates a moderate spread in daily advertisement performance during that week.

3.  **Reason:** The IQR is preferred over the range when outliers are suspected because the range is solely determined by the minimum and maximum values. If one or two extreme values exist, they can significantly inflate the range, giving a misleading impression of the overall data spread. The IQR, by focusing on the middle 50% of the data, is unaffected by these extreme values, providing a more stable and representative measure of typical data variability. (As discussed in descriptive statistics and data summarization techniques in Evans, 3rd Ed.).

### Important Points to Remember:

*   The IQR measures the spread of the **middle 50%** of your data.
*   It is calculated as $Q3 - Q1$.
*   The IQR is **robust to outliers**, making it a more reliable measure of spread than the range when extreme values are present.
*   It is a key component in constructing **box plots**, which are valuable for data visualization and outlier detection.
*   Understanding IQR helps in describing data variability and making **informed decisions** by providing a clearer picture of typical data ranges. (CO2, CO3).
*   While IQR quantifies spread, it does not tell you the **average** value or the **central tendency** of the data (that's what the median or mean does).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References and Further Reading:

*   **Business Analytics-The Science of Data Driven Decision Making** by U Dinesh Kumar (Wiley, First Edition:2017) - Look for chapters on descriptive statistics and data summarization.
*   **Fundamentals of Business Analytics** by R. N. Prasad & Seema Acharya (Wiley, Second Edition:2016) - Chapters on statistical measures and data distribution.
*   **Business Intelligence. Analytics and Data Science: A Managerial Perspective** by R. Sharda, D. Delen & E. Turban (Pearson, Fourth Edition:2018) - Sections on descriptive analytics and data visualization.
*   **Data Analytics** by A. Maheshwari (McGraw Hill Education, First Edition:2017) - Chapters covering measures of dispersion.
*   **Business Analytics by J. R. Evans (Pearson, Third Edition:2019)** - Explores descriptive statistics and their application in business contexts.

This topic provides a foundational understanding of how to measure and interpret data spread, which is a crucial step in descriptive analytics and in preparing for more advanced analytical techniques used in business decision-making.