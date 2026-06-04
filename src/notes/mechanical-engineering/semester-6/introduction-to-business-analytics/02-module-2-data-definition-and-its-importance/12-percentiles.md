---
title: "Percentiles."
subject: "INTRODUCTION TO BUSINESS ANALYTICS"
module: "Module 2: Data: Definition and its Importance"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463a0c"
status: "completed"
scrapedAt: "2026-05-20T18:05:30.373Z"
---
# Introduction to Business Analytics - Module 2: Data: Definition and its Importance

## Topic: Percentiles

### 1. Introduction to Percentiles

Percentiles are a way to understand the distribution of a dataset by dividing it into 100 equal parts. They indicate the value below which a given percentage of observations in a group of observations falls. Percentiles are particularly useful in understanding the relative standing of a data point within a dataset.

**Key Concepts:**

*   **Data Distribution:** How data points are spread across a range of values.
*   **Relative Standing:** The position of a specific data point compared to other data points in the same dataset.
*   **Ordered Data:** Percentiles are calculated on data that has been sorted in ascending order.

**Importance (Aligns with CO1, CO2, CO3):**

*   **Understanding Data Spread:** Percentiles help us grasp how data is distributed, identifying clusters and outliers.
*   **Performance Benchmarking:** In business, percentiles are used to compare individual or organizational performance against a benchmark (e.g., comparing a salesperson's performance against others).
*   **Identifying Trends:** They can reveal patterns in data over time or across different groups.
*   **Decision Making:** Understanding percentiles can inform decisions related to pricing, resource allocation, risk assessment, and performance evaluation.

### 2. Definition of Percentiles

A **p-th percentile** is a value such that at least $p$ percent of the observations are less than or equal to this value, and at least $(100-p)$ percent of the observations are greater than or equal to this value.

**Formal Definition:**

The $p$-th percentile is the value $X$ such that the proportion of data points less than or equal to $X$ is at least $p/100$, and the proportion of data points greater than or equal to $X$ is at least $(100-p)/100$.

**Commonly Used Percentiles:**

*   **1st Quartile (Q1) / 25th Percentile:** The value below which 25% of the data falls.
*   **2nd Quartile (Q2) / 50th Percentile (Median):** The value below which 50% of the data falls. This is the middle value of the dataset.
*   **3rd Quartile (Q3) / 75th Percentile:** The value below which 75% of the data falls.

**Incorporating from Textbooks:**

*   **U Dinesh Kumar (2017):** Likely discusses percentiles as a measure of position and their role in descriptive statistics, aiding in understanding data variability and distribution.
*   **R. N. Prasad & Seema Acharya (2016):** May emphasize percentiles in the context of statistical analysis for business, particularly for understanding customer behavior, market segmentation, or operational efficiency.
*   **R. Sharda, D. Delen & E. Turban (2018):** Could highlight percentiles as a tool for business intelligence and performance measurement, linking them to key performance indicators (KPIs).

### 3. Calculating Percentiles

The calculation of percentiles depends on whether the dataset has an odd or even number of observations and the specific method used (different statistical software and textbooks might have slightly different formulas for interpolation).

**General Steps:**

1.  **Sort the Data:** Arrange the data points in ascending order.
2.  **Determine the Rank (Position):** Calculate the position of the percentile using a formula. A common formula for the rank ($R$) of the $p$-th percentile in a dataset of size $n$ is:
    $R = (p/100) * (n+1)$
3.  **Find the Value:**
    *   If $R$ is an integer, the percentile is the data value at that rank.
    *   If $R$ is not an integer, it means the percentile lies between two data values. Linear interpolation is often used to estimate the value. If $R = I.F$, where $I$ is the integer part and $F$ is the fractional part, the percentile is:
        $Percentile = X_I + F * (X_{I+1} - X_I)$
        where $X_I$ is the value at the $I$-th position and $X_{I+1}$ is the value at the $(I+1)$-th position.

**Example 1: Odd Number of Observations**

Consider the following dataset representing the scores of 7 students on a test: 55, 60, 65, 70, 75, 80, 85

Let's find the 50th percentile (Median).
1.  **Sorted Data:** 55, 60, 65, 70, 75, 80, 85 ($n=7$)
2.  **Rank:** $R = (50/100) * (7+1) = 0.5 * 8 = 4$
3.  **Value:** Since $R$ is an integer (4), the 50th percentile is the 4th value in the sorted list, which is **70**.

**Example 2: Even Number of Observations**

Consider the following dataset representing the salaries (in thousands) of 8 employees: 40, 45, 50, 55, 60, 65, 70, 75 ($n=8$)

Let's find the 75th percentile (3rd Quartile).
1.  **Sorted Data:** 40, 45, 50, 55, 60, 65, 70, 75 ($n=8$)
2.  **Rank:** $R = (75/100) * (8+1) = 0.75 * 9 = 6.75$
3.  **Value:** $R$ is not an integer. $I=6$, $F=0.75$.
    *   $X_6$ (6th value) = 65
    *   $X_7$ (7th value) = 70
    *   75th Percentile = $65 + 0.75 * (70 - 65) = 65 + 0.75 * 5 = 65 + 3.75 = \textbf{68.75}$

**Example 3: Calculating the 20th Percentile**

Dataset: 12, 15, 18, 20, 22, 25, 28, 30, 32, 35 ($n=10$)

1.  **Sorted Data:** 12, 15, 18, 20, 22, 25, 28, 30, 32, 35
2.  **Rank:** $R = (20/100) * (10+1) = 0.20 * 11 = 2.2$
3.  **Value:** $I=2$, $F=0.2$.
    *   $X_2$ (2nd value) = 15
    *   $X_3$ (3rd value) = 18
    *   20th Percentile = $15 + 0.2 * (18 - 15) = 15 + 0.2 * 3 = 15 + 0.6 = \textbf{15.6}$

**Reference Check:**

*   **Gert H. N. Laursen & Jesper Thorlund (2017):** Emphasize how percentiles help managers understand customer behavior or operational performance relative to peers.

### 4. Importance and Applications in Business Analytics

Percentiles are fundamental in descriptive analytics (CO3) and provide insights for decision-making (CO2).

*   **Performance Measurement:**
    *   A salesperson achieving the 80th percentile in sales means they outperformed 80% of their colleagues. This helps in identifying top performers.
    *   **Example:** If a company's customer service wait times are in the 90th percentile for a 5-minute wait, it indicates that 90% of customers wait less than 5 minutes, which is generally good. Conversely, if average delivery times are in the 20th percentile (meaning 80% are faster), it's a significant problem.

*   **Risk Management:**
    *   In finance, Value at Risk (VaR) is often expressed as a percentile. A 95% VaR of $1 million means there is a 5% chance of losing more than $1 million over a specific period.
    *   **Example:** For insurance companies, analyzing claim amounts using percentiles helps in setting premiums and estimating reserves. The 95th percentile of claim amounts might inform how much capital needs to be held to cover most potential claims.

*   **Customer Segmentation:**
    *   Grouping customers based on their purchasing behavior, spending habits, or engagement levels.
    *   **Example:** Identifying high-value customers might involve looking at those in the 90th percentile of spending. This allows for targeted marketing campaigns.

*   **Operational Efficiency:**
    *   Analyzing lead times, production cycle times, or delivery times.
    *   **Example:** A logistics company might aim to have its 95th percentile delivery time for express packages be within 24 hours. This ensures that even in worst-case scenarios (excluding extreme outliers), deliveries are reasonably prompt.

*   **Benchmarking:**
    *   Comparing a business's metrics against industry averages or competitors.
    *   **Example:** If a company's website load time is in the 30th percentile, it means 70% of competitor websites load faster, indicating a need for optimization.

**Alignment with Course Outcomes:**

*   **CO1 (Competitive Strategy):** Understanding how data-driven insights, including percentile analysis, contribute to a competitive edge.
*   **CO2 (Decision Making):** Percentiles provide quantifiable benchmarks and insights that directly inform various business decisions.
*   **CO3 (Descriptive Analytics):** Percentiles are a core tool in descriptive analytics for summarizing and understanding data distributions.

### 5. Related Concepts

*   **Quartiles:** As mentioned, the 25th, 50th, and 75th percentiles are specifically called quartiles (Q1, Q2, Q3).
*   **Deciles:** Divide the data into 10 equal parts (10th, 20th, ..., 90th percentiles).
*   **Interquartile Range (IQR):** The difference between the 75th percentile (Q3) and the 25th percentile (Q1). $IQR = Q3 - Q1$. This measures the spread of the middle 50% of the data and is less sensitive to outliers than the range ($Max - Min$).
*   **Box Plots:** Often use quartiles (Q1, Median, Q3) to visually represent the distribution of data, including the median, spread, and potential outliers. This relates to CO4 (Data Visualization).

**Example of IQR:**
Using the salary data from Example 2: 40, 45, 50, 55, 60, 65, 70, 75 ($n=8$)
*   Q1 (25th Percentile):
    *   Rank = $(25/100) * (8+1) = 0.25 * 9 = 2.25$
    *   $I=2, F=0.25$. $X_2 = 45, X_3 = 50$.
    *   $Q1 = 45 + 0.25 * (50 - 45) = 45 + 0.25 * 5 = 45 + 1.25 = 46.25$
*   Q3 (75th Percentile):
    *   Rank = $(75/100) * (8+1) = 0.75 * 9 = 6.75$
    *   $I=6, F=0.75$. $X_6 = 65, X_7 = 70$.
    *   $Q3 = 65 + 0.75 * (70 - 65) = 65 + 0.75 * 5 = 65 + 3.75 = 68.75$
*   $IQR = Q3 - Q1 = 68.75 - 46.25 = \textbf{22.5}$

### 6. Practice Questions/Exercises

**Question 1:**
A marketing team analyzes the number of website visits per day over the last 30 days. The sorted data is as follows:
150, 165, 170, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310. ($n=30$)

Calculate the 90th percentile of website visits.

**Question 2:**
A company wants to benchmark its employee satisfaction scores. The scores (on a scale of 1-10) for 11 employees are: 7, 8, 6, 9, 7, 8, 10, 7, 8, 9, 6.

Calculate the 25th percentile (Q1) of employee satisfaction scores.

**Question 3:**
Explain how the 75th percentile can be used by a retail manager to make decisions about inventory management.

### 7. Answers to Practice Questions

**Answer 1:**
Dataset size $n = 30$. We want to find the 90th percentile.
Rank $R = (90/100) * (30+1) = 0.90 * 31 = 27.9$.
The rank is not an integer. $I=27$, $F=0.9$.
The 27th value in the sorted list is 295.
The 28th value in the sorted list is 300.
90th Percentile = $X_{27} + F * (X_{28} - X_{27})$
90th Percentile = $295 + 0.9 * (300 - 295)$
90th Percentile = $295 + 0.9 * 5$
90th Percentile = $295 + 4.5 = \textbf{299.5}$

**Answer 2:**
First, sort the data: 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 10 ($n=11$).
We want to find the 25th percentile (Q1).
Rank $R = (25/100) * (11+1) = 0.25 * 12 = 3$.
Since $R$ is an integer (3), the 25th percentile is the 3rd value in the sorted list.
25th Percentile (Q1) = $\textbf{7}$.

**Answer 3:**
A retail manager can use the 75th percentile of sales data for a particular product to make inventory decisions. If the 75th percentile of daily sales is, for example, 150 units, it means that on 75% of the days, sales were 150 units or less. To ensure that the business meets demand for most of its customers and doesn't miss out on potential sales (without holding excessive inventory), the manager might decide to stock inventory levels that can accommodate sales up to the 75th or 80th percentile. This helps balance stock-outs against overstocking, optimizing inventory turnover and profitability. This relates to CO2 (Decision Making) and CO3 (Descriptive Analytics).

### 8. Important Points to Remember

*   Percentiles are always calculated on **sorted data**.
*   They indicate the value below which a certain percentage of data falls.
*   The 50th percentile is the **median**.
*   Percentiles are crucial for understanding data distribution, relative performance, and for making informed business decisions.
*   When the calculated rank is not an integer, **linear interpolation** is used to estimate the percentile value.
*   Percentiles are a key component of descriptive analytics and are vital for business intelligence and performance management.

### 9. Learning Outcome Coverage

*   **Understanding the fundamentals of business analytics and how it is becoming a competitive strategy for many organizations (CO1):** Percentiles are foundational statistical measures used in analyzing data, which is the bedrock of business analytics. By understanding and applying percentile analysis, organizations gain deeper insights into their operations and markets, enabling data-driven strategies for competitive advantage.
*   **Understand the Importance of analytics in decision making and problem solving (CO2):** Percentiles provide concrete metrics that directly support decision-making. For instance, setting performance targets, managing inventory, or assessing risk are all informed by percentile analysis.
*   **Understand the application of descriptive analytics in decision making (CO3):** Percentiles are a primary tool in descriptive analytics, summarizing and describing the characteristics of a dataset. Their application in understanding performance, customer behavior, or operational efficiency directly aids in making better business decisions.
*   **Learn data visualization and various types of visual charts (CO4):** While not directly covered in this topic's calculation, percentiles are often visualized through box plots, which are a type of data visualization. Understanding percentiles lays the groundwork for interpreting such visualizations.
*   **Apply simple linear regression model in predictive analytics problems (CO5):** This topic focuses on descriptive statistics. While percentiles describe past data, regression models predict future data. However, understanding the current distribution (via percentiles) is often a precursor to building predictive models.
*   **Understand the basic concepts in prescriptive analytics (CO6):** Prescriptive analytics aims to recommend actions. Percentile analysis can inform these recommendations by quantifying desired performance levels or risk tolerance (e.g., "ensure 90% of customers receive service within X minutes").
*   **Understand the essence of business performance management and analytics in business support functions (CO7):** Percentiles are extensively used in performance management across various business functions (sales, operations, HR, finance) to benchmark performance, identify areas for improvement, and set realistic targets.

This comprehensive overview of percentiles equips learners with a key tool for understanding and interpreting data, crucial for making effective business decisions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
