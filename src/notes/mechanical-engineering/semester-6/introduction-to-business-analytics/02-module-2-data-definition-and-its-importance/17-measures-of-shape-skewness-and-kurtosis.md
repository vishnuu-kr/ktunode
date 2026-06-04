---
title: "Measures of Shape - Skewness and Kurtosis."
subject: "INTRODUCTION TO BUSINESS ANALYTICS"
module: "Module 2: Data: Definition and its Importance"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463a11"
status: "completed"
scrapedAt: "2026-05-20T18:05:33.833Z"
---
# Introduction to Business Analytics - Module 2: Data: Definition and its Importance

## Topic: Measures of Shape - Skewness and Kurtosis

### 1. Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the concept of the "shape" of a data distribution.
*   Define and explain skewness.
*   Identify and interpret different types of skewness (positive, negative, zero).
*   Define and explain kurtosis.
*   Identify and interpret different types of kurtosis (mesokurtic, leptokurtic, platykurtic).
*   Recognize the importance of skewness and kurtosis in understanding data behavior and making informed decisions.
*   Relate measures of shape to the overall characteristics of a dataset for business analytics applications.

### 2. Key Concepts and Definitions:

The shape of a data distribution refers to the visual appearance of the data when plotted on a graph, such as a histogram or a frequency polygon. While measures of central tendency (mean, median, mode) and dispersion (variance, standard deviation) describe the typical value and spread of data, measures of shape provide additional insights into the *symmetry* and *tailedness* of the distribution.

#### 2.1. Skewness:

**Definition:** Skewness is a measure of the asymmetry of the probability distribution of a real-valued random variable about its mean. In simpler terms, it indicates whether the data is "lopsided" to the left or right of the central tendency.

**How to Interpret Skewness:**

*   **Zero Skewness (Symmetrical Distribution):**
    *   The distribution is perfectly symmetrical around its mean.
    *   The mean, median, and mode are equal or very close to each other.
    *   The tails on both sides of the distribution are equal in length.
    *   *Example:* A normal distribution is a classic example of a zero-skewed distribution.
    *   *Visual Representation:* A bell-shaped curve.

*   **Positive Skewness (Right-Skewed Distribution):**
    *   The tail on the right side of the distribution is longer or fatter than the left side.
    *   The majority of the data points are clustered on the left side.
    *   The mean is typically greater than the median, which is often greater than the mode (Mean > Median > Mode). This is because the extreme values on the right pull the mean upwards.
    *   *Example:* Income distributions are often positively skewed. Most people earn a moderate income, but a few high earners pull the average income up.
    *   *Visual Representation:* The peak of the distribution is shifted to the left, with a long tail extending to the right.

*   **Negative Skewness (Left-Skewed Distribution):**
    *   The tail on the left side of the distribution is longer or fatter than the right side.
    *   The majority of the data points are clustered on the right side.
    *   The mean is typically less than the median, which is often less than the mode (Mean < Median < Mode). This is because the extreme values on the left pull the mean downwards.
    *   *Example:* Age at retirement for a population of highly skilled professionals might be negatively skewed. Most retire at an older age, but some retire early, creating a left tail.
    *   *Visual Representation:* The peak of the distribution is shifted to the right, with a long tail extending to the left.

**Common Measures of Skewness:**

*   **Pearson's Coefficient of Skewness:**
    *   **Formula 1 (using mean, median, and standard deviation):**
        $Skewness = \frac{\text{Mean} - \text{Mode}}{\text{Standard Deviation}}$
    *   **Formula 2 (using mean, median, and standard deviation, more robust for unimodal distributions):**
        $Skewness = \frac{3 \times (\text{Mean} - \text{Median})}{\text{Standard Deviation}}$
    *   **Interpretation:**
        *   Skewness = 0: Symmetrical
        *   Skewness > 0: Positively skewed
        *   Skewness < 0: Negatively skewed

*   **Fisher-Pearson Coefficient of Skewness (Moment Skewness):**
    *   This is a standardized measure based on the third standardized moment.
    *   **Formula:**
        $g_1 = \frac{E[(X - \mu)^3]}{\sigma^3}$
        Where:
        *   $E[\cdot]$ is the expected value.
        *   $X$ is the random variable.
        *   $\mu$ is the mean of $X$.
        *   $\sigma$ is the standard deviation of $X$.
    *   **Interpretation:**
        *   $g_1 = 0$: Symmetrical
        *   $g_1 > 0$: Positively skewed
        *   $g_1 < 0$: Negatively skewed
    *   *Textbook Reference:* U Dinesh Kumar's "Business Analytics - The Science of Data Driven Decision Making" (Wiley, First Edition: 2017) often discusses these moments in the context of understanding data distributions.

**Rule of Thumb for Interpreting Skewness Values (Fisher-Pearson):**

*   $|g_1| \le 0.5$: Approximately symmetrical
*   $0.5 < |g_1| \le 1$: Moderately skewed
*   $|g_1| > 1$: Highly skewed

#### 2.2. Kurtosis:

**Definition:** Kurtosis is a measure of the "tailedness" of the probability distribution of a real-valued random variable. It describes how peaked or flat the distribution is relative to a normal distribution. It also relates to the shape of the tails of the distribution.

**How to Interpret Kurtosis:**

*   **Mesokurtic:**
    *   The distribution has a kurtosis value equal to that of a normal distribution.
    *   It has a moderate peak and moderate tails.
    *   *Reference Point:* Normal distribution has a kurtosis of 3 (or an excess kurtosis of 0).
    *   *Visual Representation:* Bell-shaped, similar to a normal distribution.

*   **Leptokurtic:**
    *   The distribution has a kurtosis value greater than that of a normal distribution.
    *   It has a more peaked center and heavier tails than a normal distribution.
    *   This means there are more extreme values (outliers) in the tails.
    *   *Visual Representation:* A distribution with a sharper peak and fatter tails.
    *   *Example:* Distributions of stock market returns are often leptokurtic, showing more frequent large gains and losses than predicted by a normal distribution.
    *   *Interpretation:* High kurtosis implies a greater likelihood of extreme events.

*   **Platykurtic:**
    *   The distribution has a kurtosis value less than that of a normal distribution.
    *   It has a flatter peak and lighter tails than a normal distribution.
    *   This means there are fewer extreme values in the tails.
    *   *Visual Representation:* A distribution with a flatter peak and thinner tails.
    *   *Example:* A uniform distribution is platykurtic.
    *   *Interpretation:* Low kurtosis implies a lower likelihood of extreme events.

**Common Measures of Kurtosis:**

*   **Fisher's Definition of Kurtosis (Moment Kurtosis):**
    *   **Formula:**
        $k_4 = \frac{E[(X - \mu)^4]}{\sigma^4}$
        Where:
        *   $E[\cdot]$ is the expected value.
        *   $X$ is the random variable.
        *   $\mu$ is the mean of $X$.
        *   $\sigma$ is the standard deviation of $X$.
    *   **Interpretation:**
        *   $k_4 = 3$: Mesokurtic (like a normal distribution)
        *   $k_4 > 3$: Leptokurtic
        *   $k_4 < 3$: Platykurtic

*   **Excess Kurtosis:**
    *   This is often used in statistical software and is calculated as Kurtosis - 3.
    *   **Formula:**
        $Excess Kurtosis = k_4 - 3$
    *   **Interpretation:**
        *   Excess Kurtosis = 0: Mesokurtic
        *   Excess Kurtosis > 0: Leptokurtic
        *   Excess Kurtosis < 0: Platykurtic
    *   *Textbook Reference:* R. N. Prasad & Seema Acharya's "Fundamentals of Business Analytics" (Wiley, Second Edition: 2016) would cover these statistical measures. Sharda, Delen & Turban's "Business Intelligence. Analytics and Data Science: A Managerial Perspective" (Pearson, Fourth Edition: 2018) might discuss these in the context of data profiling for business intelligence.

**Rule of Thumb for Interpreting Excess Kurtosis Values:**

*   Excess Kurtosis $\approx$ 0: Mesokurtic
*   Excess Kurtosis > 0: Leptokurtic (more outliers)
*   Excess Kurtosis < 0: Platykurtic (fewer outliers)

### 3. Importance in Business Analytics (Aligning with Course Outcomes):

Understanding skewness and kurtosis is crucial for effective business analytics, directly supporting several course outcomes:

*   **CO1: Understand the fundamentals of business analytics and how it is becoming competitive strategy for many organisations.**
    *   **How it aligns:** By understanding the shape of data (skewness, kurtosis), businesses can better predict potential risks and opportunities. For instance, a leptokurtic distribution in sales data might indicate a higher probability of exceptionally good or bad sales days, requiring different inventory or staffing strategies compared to a mesokurtic distribution. This nuanced understanding contributes to a more robust data-driven strategy.

*   **CO2: Understand the Importance of analytics in decision making and problem solving.**
    *   **How it aligns:**
        *   **Risk Management:** A highly skewed or leptokurtic distribution in financial data can signal higher risk. For example, if customer payment times are positively skewed, it means most customers pay on time, but a few pay very late, impacting cash flow.
        *   **Forecasting:** If sales data is significantly skewed, using a simple average (mean) for forecasting might be misleading. Understanding the skew allows for more appropriate forecasting models that account for the tail.
        *   **Resource Allocation:** If employee performance data is negatively skewed, it might indicate that most employees are performing well, but a significant number are underperforming, requiring targeted training or support.

*   **CO3: Understand the application of descriptive analytics in decision making.**
    *   **How it aligns:** Skewness and kurtosis are key descriptive statistics. They add depth to a basic understanding of data (central tendency, spread) by describing its form. A report might state the average salary (mean) and its range (standard deviation), but also mention that the salary distribution is positively skewed, which immediately tells a manager that while the average is X, most employees earn less than that.

*   **CO4: Learn data visualization and various types of visual charts.**
    *   **How it aligns:** Histograms and box plots are excellent visual tools to identify skewness and kurtosis.
        *   **Histograms:** Visually show the shape of the distribution, making skewness obvious.
        *   **Box Plots:** The position of the median within the box and the length of the whiskers can indicate skewness. A longer whisker on one side suggests skewness in that direction.
    *   *Reference:* Evans' "Business Analytics" (Pearson, Third Edition: 2019) is likely to cover these visualization aspects.

### 4. Examples:

**Example 1: Customer Spending**

Imagine a retail company analyzing customer spending data.

*   **Scenario:** The average customer spending per visit is \$50.
*   **Observation:** A histogram of customer spending shows a long tail extending to the right, with many customers spending between \$10 and \$30, but a few high-value customers spending \$200 or more.
*   **Analysis:**
    *   **Skewness:** This distribution is likely **positively skewed** (right-skewed).
    *   **Mean vs. Median:** The mean (\$50) is likely higher than the median spending.
    *   **Business Implication:** While the average spending is \$50, targeting marketing campaigns based solely on this average might not be optimal. It would be beneficial to understand the spending patterns of the majority (lower spending) and also to create loyalty programs or premium offerings for the high-spending tail.

**Example 2: Exam Scores**

Consider the exam scores for a university course.

*   **Scenario:** The average score is 75.
*   **Observation:** A histogram of exam scores shows a peak around 80-90, with a few students scoring very low (e.g., 20-40), and a smaller number scoring very high (95-100).
*   **Analysis:**
    *   **Skewness:** This distribution might be **negatively skewed** (left-skewed) if the low scores are more spread out than the high scores. Alternatively, if the majority of students scored high and a few did poorly, it would be negatively skewed. Let's assume the latter: the peak is on the right.
    *   **Mean vs. Median:** The mean (75) could be less than the median if the few very low scores pull it down.
    *   **Business Implication:** A negatively skewed distribution with a high average and median might suggest that the exam was generally well-understood by most students. However, the presence of low scores might indicate a need for remedial support for those students.

**Example 3: Website Traffic**

Analyzing daily website visitors.

*   **Scenario:** The average daily visitors is 1000.
*   **Observation:** A distribution of daily visitors shows that most days have around 900-1100 visitors, but occasionally there are days with 5000+ visitors (e.g., due to a viral marketing campaign) and days with very few (e.g., 300 due to technical issues).
*   **Analysis:**
    *   **Kurtosis:** This distribution is likely **leptokurtic** (excess kurtosis > 0). It has a higher peak than normal around the average, and heavier tails due to the occasional very high and low visitor counts.
    *   **Business Implication:** The leptokurtic nature suggests that while most days are predictable, there's a higher-than-average chance of experiencing extreme events (either very good or very bad traffic days). This impacts server capacity planning, marketing campaign intensity, and crisis management protocols.

### 5. Practice Questions and Exercises:

1.  **Question:** A company is analyzing customer response times to support requests. The data shows that most responses are within 30 minutes, but a few outliers take over 2 hours to resolve.
    *   **Which measure of shape would best describe this situation?**
    *   **What would you expect the skewness to be (positive, negative, or zero)?**

    *   **Answer:**
        *   **Measure of Shape:** Skewness.
        *   **Skewness:** Positive (right-skewed). The long tail of slow response times pulls the average response time higher than the typical response time.

2.  **Question:** A data scientist is examining stock market returns and notices that extreme gains and losses occur more frequently than predicted by a normal distribution.
    *   **Which measure of shape is relevant here?**
    *   **What type of kurtosis would this indicate?**

    *   **Answer:**
        *   **Measure of Shape:** Kurtosis.
        *   **Kurtosis:** Leptokurtic. This means the distribution has heavier tails, indicating a higher probability of extreme events (large gains or losses).

3.  **Question:** A teacher observes that in a class, most students scored between 70% and 85%, with very few scoring below 60% and very few scoring above 90%. The distribution appears symmetrical.
    *   **What would you expect the skewness to be?**
    *   **What would you expect the kurtosis to be (relative to a normal distribution)?**

    *   **Answer:**
        *   **Skewness:** Zero or close to zero. The distribution is symmetrical.
        *   **Kurtosis:** Mesokurtic (or close to it). The distribution is neither excessively peaked nor flat, and its tails are of moderate thickness, similar to a normal distribution.

4.  **Question:** You are analyzing the duration of customer service calls. The mean call duration is 8 minutes, and the median is 7 minutes.
    *   **Based on this information, what can you infer about the skewness of the data?**

    *   **Answer:** Since the mean (8 minutes) is greater than the median (7 minutes), the distribution is likely **positively skewed** (right-skewed). The longer call durations from a few customers are pulling the average up.

### 6. Important Points to Remember:

*   **Shape Matters:** Beyond averages and spreads, the shape of a data distribution provides critical insights into its underlying patterns and potential risks or opportunities.
*   **Skewness and Symmetry:** Skewness measures the asymmetry. Zero skewness means symmetry, positive skewness means a tail to the right, and negative skewness means a tail to the left.
*   **Kurtosis and Tailedness:** Kurtosis measures the peakedness and tailedness of a distribution relative to a normal distribution. Leptokurtic distributions have heavier tails (more outliers), while platykurtic distributions have lighter tails (fewer outliers).
*   **Mean, Median, and Skewness:** In skewed distributions, the relationship between the mean and median can be a strong indicator of the direction of skewness.
*   **Practical Applications:** These measures are vital for risk assessment, forecasting, anomaly detection, and understanding customer behavior in various business contexts.
*   **Visualization is Key:** Histograms and box plots are excellent visual tools for identifying and interpreting skewness and kurtosis.
*   **Context is Crucial:** Always interpret skewness and kurtosis values within the context of the specific business problem and the dataset.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. Textbook and Reference Integration:

*   **U Dinesh Kumar (2017):** This textbook is a primary resource for understanding the statistical underpinnings of business analytics, including moments and their implications for data distributions. (Supports understanding of statistical measures and their application).
*   **R. N. Prasad & Seema Acharya (2016):** Provides foundational knowledge in business analytics, likely covering descriptive statistics and the interpretation of data characteristics. (Reinforces basic concepts of data description).
*   **R. Sharda, D. Delen & E. Turban (2018):** Focuses on the managerial perspective, where understanding data shape is crucial for making informed business decisions and identifying patterns for BI. (Connects descriptive statistics to business decision-making).
*   **A. Maheshwari (2017):** Offers practical insights into data analytics, likely including examples of how shape measures are used in real-world business scenarios. (Provides context for practical application).
*   **Gert H. N. Laursen & Jesper Thorlund (2017):** Emphasizes taking BI beyond reporting, which implies a deeper dive into data characteristics like shape to derive actionable insights. (Highlights the importance of these measures for advanced analytics).
*   **J. R. Evans (2019):** Likely covers data visualization techniques that are essential for identifying and communicating skewness and kurtosis. (Supports the visualization aspect of understanding shape).

This topic bridges the gap between basic descriptive statistics and a deeper understanding of data behavior, directly contributing to the analytical capabilities required for informed business decision-making as outlined in the course outcomes.