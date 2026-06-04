---
title: "Measures of Dispersion : Range"
subject: "INTRODUCTION TO BUSINESS ANALYTICS"
module: "Module 2: Data: Definition and its Importance"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463a0d"
status: "completed"
scrapedAt: "2026-05-20T18:05:31.037Z"
---
# INTRODUCTION TO BUSINESS ANALYTICS

## Module 2: Data: Definition and its Importance

### Topic: Measures of Dispersion: Range

---

### 1. Learning Outcomes Covered

This topic primarily contributes to the understanding of how data is characterized and summarized. While not explicitly listed as a direct learning outcome, understanding measures of dispersion, like the Range, is foundational for:

*   **CO1: Understand the fundamentals of business analytics and how it is becoming competitive strategy for many organisations. (Knowledge Level: K2)** - Understanding data characteristics is a fundamental aspect of business analytics.
*   **CO3: Understand the application of descriptive analytics in decision making. (Knowledge Level: K2)** - The Range is a key descriptive statistic used to summarize the spread of data.

---

### 2. Key Concepts and Definitions

#### 2.1. What is Dispersion?

Dispersion, also known as variability or spread, refers to how spread out a set of data values are. It measures the extent to which the individual data points differ from each other and from a central value (like the mean or median).

*   **Importance in Business Analytics:** Understanding dispersion is crucial for:
    *   **Risk Assessment:** High dispersion might indicate higher variability and thus higher risk.
    *   **Quality Control:** Monitoring the spread of product attributes helps in ensuring consistent quality.
    *   **Performance Comparison:** Comparing the variability of different processes or teams.
    *   **Data Visualization:** Informing the choice of appropriate charts to represent data spread.

#### 2.2. Measures of Dispersion

Measures of dispersion quantify the spread or variability in a dataset. Common measures include:

*   Range
*   Interquartile Range (IQR)
*   Variance
*   Standard Deviation
*   Mean Absolute Deviation (MAD)

This topic focuses specifically on the **Range**.

#### 2.3. The Range

The Range is the **simplest measure of dispersion**. It is calculated as the difference between the highest (maximum) and lowest (minimum) values in a dataset.

**Formula:**

$$ \text{Range} = \text{Maximum Value} - \text{Minimum Value} $$

---

### 3. Examples

**Example 1: Daily Sales Revenue**

Consider the daily sales revenue (in thousands of dollars) for a retail store over five days:

| Day     | Sales Revenue ($000s) |
| :------ | :-------------------- |
| Monday  | 5                     |
| Tuesday | 8                     |
| Wednesday| 6                     |
| Thursday| 9                     |
| Friday  | 7                     |

*   **Maximum Value:** $9$ (Thursday)
*   **Minimum Value:** $5$ (Monday)
*   **Range:** $9 - 5 = 4$

This means the sales revenue varied by $4$ thousand dollars over these five days.

**Example 2: Customer Waiting Times**

Customer waiting times (in minutes) at a service counter are recorded as: 2, 5, 1, 8, 3, 10, 4.

*   **Maximum Value:** $10$ minutes
*   **Minimum Value:** $1$ minute
*   **Range:** $10 - 1 = 9$ minutes

The waiting times for customers spread across $9$ minutes.

---

### 4. Advantages and Disadvantages of the Range

#### 4.1. Advantages:

*   **Simplicity:** It is very easy to calculate and understand.
*   **Quick Overview:** Provides a quick, initial understanding of the data's spread.

#### 4.2. Disadvantages:

*   **Sensitivity to Outliers:** The range is highly affected by extreme values (outliers). A single very high or very low value can drastically inflate the range, not truly representing the typical spread of the data.
*   **Ignores Intermediate Values:** It only considers the two extreme values and completely ignores all other data points in the dataset. This can lead to a misleading representation of the data's variability if the bulk of the data is clustered closely together but there are a few extreme values.
*   **Not Robust:** Due to its sensitivity to outliers, it's not considered a robust measure of dispersion.

---

### 5. Referencing Textbooks and Incorporating Content

*   **U Dinesh Kumar, "Business Analytics: The Science of Data Driven Decision Making"**: While this book provides a comprehensive overview of business analytics, it typically delves into more advanced descriptive statistics. However, the foundational concepts of data summarization, including basic measures like range, are often introduced early on as part of descriptive analytics. (Likely covered in Chapters related to Data Understanding or Descriptive Analytics).
*   **R. N. Prasad & Seema Acharya, "Fundamentals of Business Analytics"**: This textbook is likely to cover the Range as a fundamental measure of dispersion in its early chapters on descriptive statistics. It would emphasize its simplicity as a starting point for understanding data spread. (Likely covered in Chapters related to Descriptive Statistics or Data Exploration).
*   **R. Sharda, D. Delen & E. Turban, "Business Intelligence. Analytics and Data Science: A Managerial Perspective"**: This book, focusing on a managerial perspective, would highlight the practical implications of understanding data spread for decision-making. The Range would be presented as a tool to quickly grasp the potential variability in business metrics like sales, costs, or customer response times. (Likely covered in Chapters related to Descriptive Analytics or Data Visualization).

**Key Takeaway from Texts:** The Range serves as an introductory measure of dispersion, valuable for its ease of calculation and quick estimation of data spread. However, its limitations, particularly its sensitivity to outliers, necessitate the use of more robust measures for deeper analysis.

---

### 6. Alignment with Course Outcomes

*   **CO1 & CO2:** Understanding the Range, even with its limitations, is a fundamental step in comprehending data characteristics and its importance in making informed decisions. It provides a basic grasp of "how much data varies," which is a core concept in analytics.
*   **CO3:** The Range is a direct application of descriptive analytics. It's a statistic used to summarize and describe a dataset. For example, a manager might look at the range of prices for a competitor's product to understand the pricing landscape (descriptive analytics).

---

### 7. Practice Questions or Exercises

**Question 1:**
A quality control inspector measures the length (in cm) of 10 randomly selected bolts. The lengths are: 10.2, 10.1, 10.3, 10.0, 10.5, 10.2, 10.4, 10.1, 10.3, 10.8.
What is the range of the bolt lengths?

**Question 2:**
A data analyst is examining the monthly profit figures (in thousands of dollars) for a company over the last year. The profits were: 50, 55, 60, 52, 58, 65, 70, 68, 62, 59, 56, 75.
Calculate the range of the monthly profits. What does this tell you about the company's profit performance over the year?

**Question 3:**
Which of the following is a disadvantage of using the Range as a measure of dispersion?
    a) It is easy to calculate.
    b) It is sensitive to outliers.
    c) It provides a quick overview of data spread.
    d) It is a measure of central tendency.

---

### 8. Answers to Practice Questions

**Answer 1:**
*   Maximum Value = 10.8 cm
*   Minimum Value = 10.0 cm
*   Range = 10.8 - 10.0 = **0.8 cm**

**Answer 2:**
*   Maximum Profit = $75$ thousand dollars
*   Minimum Profit = $50$ thousand dollars
*   Range = $75 - 50 = \textbf{25}$ thousand dollars.
This indicates that the company's monthly profits varied by $25$ thousand dollars throughout the year. The high range suggests significant variability in profit performance.

**Answer 3:**
The correct answer is **b) It is sensitive to outliers.**
*   a) and c) are advantages.
*   d) is incorrect; the Range is a measure of dispersion, not central tendency.

---

### 9. Important Points to Remember

*   **Dispersion** measures the **spread or variability** of data.
*   The **Range** is the **simplest** measure of dispersion.
*   **Range = Maximum Value - Minimum Value**.
*   It provides a **quick estimate** of the data's spread.
*   The Range is **highly sensitive to outliers** and ignores intermediate data points.
*   For more robust analysis, other measures of dispersion like Standard Deviation or IQR are often preferred.
*   Understanding dispersion is crucial for **risk assessment, quality control, and performance comparison** in business.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
