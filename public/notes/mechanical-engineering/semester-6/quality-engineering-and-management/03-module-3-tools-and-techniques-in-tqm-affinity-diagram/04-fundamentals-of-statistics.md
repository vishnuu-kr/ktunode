---
title: "Fundamentals of statistics"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 3: Tools and Techniques in TQM : Affinity diagram "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463b0f"
status: "completed"
scrapedAt: "2026-05-20T18:07:03.413Z"
---
Sure, here are comprehensive study notes for the topic "Fundamentals of Statistics" within Module 3: Tools and Techniques in TQM: Affinity Diagram, in the context of Quality Engineering and Management.

---

# Module 3: Tools and Techniques in TQM - Fundamentals of Statistics

## Introduction

This module explores essential statistical concepts that underpin the effective use of various Total Quality Management (TQM) tools and techniques. Understanding these fundamentals is crucial for data analysis, problem-solving, and driving continuous improvement in quality.

## Learning Outcomes

Upon completion of this topic, you will be able to:

*   **LO1:** Understand the purpose and importance of statistics in quality management.
*   **LO2:** Differentiate between descriptive and inferential statistics.
*   **LO3:** Define and interpret key statistical terms such as population, sample, variable, and data.
*   **LO4:** Recognize different types of data and their implications for analysis.
*   **LO5:** Understand the concepts of central tendency and dispersion.
*   **LO6:** Grasp the basic principles of probability and its role in statistical inference.

## Course Outcomes Alignment

This topic directly contributes to:

*   **CO3: Implement different tools and techniques in TQM (Knowledge Level: K3)** - By providing the foundational statistical knowledge required for many TQM tools like control charts, Pareto charts, and histograms.
*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3)** - By laying the groundwork for understanding the statistical principles behind various SQC methods.

## 1. Purpose and Importance of Statistics in Quality Management (LO1)

Statistics is the science of collecting, analyzing, interpreting, presenting, and organizing data. In Quality Management, statistics is indispensable for:

*   **Understanding Variation:** Identifying and quantifying the sources and extent of variation in processes and products.
*   **Data-Driven Decision Making:** Moving beyond intuition and relying on objective data to make informed decisions.
*   **Process Monitoring and Control:** Using statistical tools to track process performance over time and detect deviations from desired outcomes.
*   **Problem Identification and Solving:** Analyzing data to pinpoint root causes of quality issues.
*   **Process Improvement:** Measuring the effectiveness of implemented changes and identifying areas for further enhancement.
*   **Customer Satisfaction:** Analyzing customer feedback and product performance data to meet and exceed expectations.

**Reference:** *Besterfield et al. (2018)* emphasizes that statistical methods are the backbone of quality improvement efforts, enabling organizations to move from reactive problem-solving to proactive process management. *Mitra (1998)* highlights that statistics provides the language and tools to understand and manage variability, which is central to quality control.

## 2. Types of Statistics: Descriptive vs. Inferential (LO2)

Statistics can be broadly categorized into two main branches:

### 2.1. Descriptive Statistics

*   **Purpose:** To summarize, organize, and describe the main features of a dataset.
*   **Focus:** What the data *shows* about the sample itself.
*   **Methods:** Calculating measures of central tendency (mean, median, mode), measures of dispersion (range, variance, standard deviation), and creating graphical representations (histograms, bar charts, pie charts).
*   **Example:** Calculating the average height of students in a specific class or creating a bar chart to show the frequency of defects for different product types.

### 2.2. Inferential Statistics

*   **Purpose:** To draw conclusions and make predictions about a larger population based on a sample of data.
*   **Focus:** What the data *suggests* about the larger population from which the sample was drawn.
*   **Methods:** Hypothesis testing, confidence intervals, regression analysis.
*   **Example:** Using the average defect rate from a sample of products to estimate the defect rate for the entire production run or testing if a new manufacturing process leads to a statistically significant improvement in product quality compared to the old process.

**Highlight:** While descriptive statistics helps us understand our current data, inferential statistics allows us to generalize our findings, which is crucial for making decisions about production processes or product quality across a larger scale.

## 3. Key Statistical Terms (LO3)

Understanding these fundamental terms is essential for any statistical analysis:

### 3.1. Population

*   **Definition:** The entire collection of individuals, items, or measurements that have something in common and about which we want to draw conclusions.
*   **Example:** All cars manufactured in a specific month by a particular factory, all light bulbs produced by a company, or all customer satisfaction surveys received last year.
*   **Important Point:** Populations are often very large, making it impractical or impossible to study every element.

### 3.2. Sample

*   **Definition:** A subset or a portion of the population selected for study.
*   **Example:** A random selection of 100 cars from the month's production, 50 light bulbs from a production batch, or a random sample of 200 customer satisfaction surveys.
*   **Goal:** A well-selected sample should be representative of the population to allow for valid inferences.

### 3.3. Variable

*   **Definition:** A characteristic or attribute of the individuals or items in a population or sample that can vary.
*   **Example:** The weight of a product, the time it takes to complete a task, the color of a car, or the customer's rating of a service.

### 3.4. Data

*   **Definition:** The actual values or measurements of a variable collected from a sample or population.
*   **Example:** The weights of 50 manufactured items (e.g., 10.2 kg, 10.5 kg, 10.1 kg), the times recorded for task completion (e.g., 5.3 minutes, 6.1 minutes), etc.

**Reference:** *Montgomery (2007)* strongly emphasizes the importance of clearly defining the population and sample to ensure the validity of statistical inferences.

## 4. Types of Data (LO4)

Data can be classified into different types, which dictate the statistical methods that can be used for analysis.

### 4.1. Qualitative (Categorical) Data

*   **Definition:** Data that describes qualities or characteristics that cannot be measured numerically but can be categorized.
*   **Subtypes:**
    *   **Nominal Data:** Categories without any inherent order or ranking.
        *   *Example:* Gender (Male, Female), Color (Red, Blue, Green), Type of defect (Scratch, Dent, Misalignment).
    *   **Ordinal Data:** Categories that have a natural order or ranking, but the difference between categories is not necessarily uniform or quantifiable.
        *   *Example:* Customer satisfaction ratings (Poor, Fair, Good, Excellent), Education level (High School, Bachelor's, Master's), Severity of defect (Minor, Moderate, Severe).

### 4.2. Quantitative (Numerical) Data

*   **Definition:** Data that can be measured numerically.
*   **Subtypes:**
    *   **Discrete Data:** Data that can only take specific, distinct numerical values, often obtained by counting. There are gaps between possible values.
        *   *Example:* Number of defects per unit (0, 1, 2, 3), Number of customers served per hour (15, 20, 22), Number of errors on a page (3, 5, 7).
    *   **Continuous Data:** Data that can take any value within a given range, often obtained by measuring. There are no gaps between possible values.
        *   *Example:* Length of a product (e.g., 15.5 cm, 15.51 cm, 15.512 cm), Weight of an item (e.g., 50.2 kg, 50.25 kg), Temperature (e.g., 25.3°C, 25.35°C).

**Highlight:** The type of data you have determines which statistical tools are appropriate. For instance, you can calculate an average for continuous data, but averaging categorical data like "colors" doesn't make sense.

## 5. Measures of Central Tendency (LO5)

These measures describe the "center" or typical value of a dataset.

### 5.1. Mean (Average)

*   **Definition:** The sum of all values divided by the number of values.
*   **Formula:** $\bar{x} = \frac{\sum x_i}{n}$ (for a sample), $\mu = \frac{\sum x_i}{N}$ (for a population)
*   **Use:** Commonly used for numerical data, especially when the data is symmetrically distributed. Sensitive to outliers.
*   **Example:** If product weights are 10.2, 10.5, 10.1, 10.3, 10.4 kg, the mean weight is (10.2 + 10.5 + 10.1 + 10.3 + 10.4) / 5 = 10.3 kg.

### 5.2. Median

*   **Definition:** The middle value in a dataset that has been arranged in ascending or descending order.
*   **Use:** Useful when data is skewed or contains outliers, as it is not affected by extreme values.
*   **Example:**
    *   For an odd number of values: In the ordered set {10.1, 10.2, **10.3**, 10.4, 10.5}, the median is 10.3 kg.
    *   For an even number of values: In the ordered set {10.1, 10.2, **10.3, 10.4**, 10.5, 10.6}, the median is the average of the two middle values: (10.3 + 10.4) / 2 = 10.35 kg.

### 5.3. Mode

*   **Definition:** The value that appears most frequently in a dataset.
*   **Use:** Applicable to both numerical and categorical data. A dataset can have one mode (unimodal), two modes (bimodal), or no mode.
*   **Example:** In the set {10.1, 10.2, **10.3**, 10.3, 10.4, 10.5}, the mode is 10.3 kg. In the set {Red, Blue, Green, **Red**, Blue, **Red**}, the mode is Red.

**Reference:** *Besterfield et al. (2018)* explains that the choice between mean, median, and mode depends on the nature of the data and the presence of outliers, and often presenting all three can give a fuller picture of the data's central tendency.

## 6. Measures of Dispersion (Spread) (LO5)

These measures describe how spread out or varied the data is.

### 6.1. Range

*   **Definition:** The difference between the highest and lowest values in a dataset.
*   **Formula:** Range = Maximum Value - Minimum Value
*   **Use:** A simple measure of spread, but highly sensitive to outliers.
*   **Example:** For weights {10.1, 10.2, 10.3, 10.4, 10.5}, the range is 10.5 - 10.1 = 0.4 kg.

### 6.2. Variance

*   **Definition:** The average of the squared differences from the mean. It quantifies how far each number in the set is from the mean.
*   **Formula:** $s^2 = \frac{\sum (x_i - \bar{x})^2}{n-1}$ (for a sample), $\sigma^2 = \frac{\sum (x_i - \mu)^2}{N}$ (for a population)
*   **Use:** A fundamental measure of spread, used in many statistical formulas. The squaring of differences gives more weight to larger deviations.

### 6.3. Standard Deviation

*   **Definition:** The square root of the variance. It is the most commonly used measure of dispersion and is expressed in the same units as the data.
*   **Formula:** $s = \sqrt{s^2}$ (for a sample), $\sigma = \sqrt{\sigma^2}$ (for a population)
*   **Use:** Indicates the typical deviation of data points from the mean. A smaller standard deviation indicates that data points are clustered tightly around the mean, while a larger standard deviation indicates that data points are spread out over a wider range.
*   **Example:** If the standard deviation of product weights is 0.1 kg, it suggests that most product weights are within approximately 0.1 kg of the average weight.

**Highlight:** Standard deviation is a critical concept in quality control. For example, in control charts, it helps define the acceptable limits of process variation.

**Reference:** *Montgomery (2007)* dedicates significant attention to variance and standard deviation as key indicators of process variability, essential for understanding process capability and stability.

## 7. Introduction to Probability (LO6)

Probability is the measure of the likelihood that an event will occur. It's fundamental for inferential statistics and understanding risk in quality management.

### 7.1. Basic Concepts

*   **Event:** A specific outcome or a set of outcomes of an experiment.
*   **Probability of an Event (P(E)):** A number between 0 and 1 (inclusive), where 0 means the event is impossible and 1 means the event is certain.
*   **Sample Space:** The set of all possible outcomes of an experiment.

### 7.2. Calculating Probability

*   **Classical Definition:** $P(E) = \frac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}}$
    *   *Example:* The probability of rolling a "4" on a fair six-sided die is 1/6, as there is one favorable outcome (rolling a 4) and six possible outcomes (1, 2, 3, 4, 5, 6).

*   **Empirical (Frequency) Definition:** Based on observed data from past experiments.
    *   $P(E) = \frac{\text{Number of times event E occurred}}{\text{Total number of trials}}$
    *   *Example:* If a machine produced 500 parts and 10 were found to be defective, the empirical probability of a part being defective is 10/500 = 0.02 or 2%.

### 7.3. Probability Distributions

*   **Definition:** A function that provides the probability of occurrence of different possible values for a random variable.
*   **Key Distributions in Quality Control:**
    *   **Binomial Distribution:** Used for the probability of a certain number of "successes" in a fixed number of independent trials, where each trial has only two possible outcomes (e.g., defective/non-defective).
    *   **Poisson Distribution:** Used for the probability of a certain number of events occurring in a fixed interval of time or space, when these events occur with a known average rate and independently of the time since the last event. Useful for counting defects.
    *   **Normal Distribution (Gaussian Distribution):** A bell-shaped, symmetrical distribution that describes many natural phenomena and is widely used in statistical quality control, especially for continuous data.

**Reference:** *Montgomery (2007)* extensively covers probability distributions, particularly the binomial, Poisson, and normal distributions, as they form the basis for understanding control charts and other statistical quality control techniques. *Subburaj (2017)* also provides a clear introduction to probability and its applications in quality.

## 8. Application in TQM Tools and Techniques

The fundamentals of statistics are directly applied in understanding and using various TQM tools:

*   **Histograms:** Use frequency distributions (descriptive statistics) to visualize the shape of data.
*   **Pareto Charts:** While primarily a prioritization tool, they rely on data that is often presented with frequencies (descriptive statistics).
*   **Control Charts:** Heavily rely on calculating means, standard deviations, and using probability principles (like the normal distribution) to establish control limits.
*   **Cause-and-Effect Diagrams (Fishbone Diagrams):** Data analysis (using descriptive statistics) is often used to validate potential causes identified in the diagram.
*   **Check Sheets:** Collect raw data that is then analyzed using statistical methods.

## 9. Practice Questions and Exercises

**Question 1 (LO1, LO2):** Why is it important for a quality engineer to have a solid understanding of statistics? Differentiate between descriptive and inferential statistics with an example relevant to quality control.

**Question 2 (LO3):** Define the terms "population," "sample," and "variable." If you are studying the defect rate of bolts produced by a machine, what would be the population, a sample, and a variable in this scenario?

**Question 3 (LO4):** Classify the following types of data into qualitative (nominal/ordinal) or quantitative (discrete/continuous):
    a) The number of customer complaints received per day.
    b) The color of a car.
    c) The time it takes for a machine to restart after a breakdown.
    d) The rating of a product on a scale of 1 to 5 stars.
    e) The exact weight of a manufactured component.

**Question 4 (LO5):** Given the following sample data for the diameter of a manufactured part (in mm): 20.1, 20.3, 19.9, 20.5, 20.2, 20.3, 20.0, 20.4, 20.2, 20.3.
    a) Calculate the mean.
    b) Calculate the median.
    c) Calculate the mode.
    d) Calculate the range.
    e) Calculate the sample standard deviation (you can use a calculator or software for this step, or approximate if manual calculation is too intensive).

**Question 5 (LO6):** A quality inspector checks 100 widgets. 95 are found to be conforming and 5 are non-conforming. What is the empirical probability of a widget being non-conforming? If the same process continues, what is the probability that the next widget inspected will be non-conforming?

---

## Answers to Practice Questions

**Answer 1:**
It is important for a quality engineer to understand statistics because it provides the tools and methods to collect, analyze, interpret, and draw conclusions from data. This allows for objective decision-making, identification of process variations, monitoring of performance, and effective problem-solving, moving from guesswork to data-driven improvement.

*   **Descriptive Statistics:** Summarizes data from a specific group. *Example:* Calculating the average length of 50 randomly selected screws to describe the typical length of that batch.
*   **Inferential Statistics:** Uses data from a sample to make generalizations about a larger population. *Example:* Using the average length of those 50 screws to estimate the average length of *all* screws produced by the machine that day.

**Answer 2:**
*   **Population:** The entire set of items or individuals being studied. In this scenario, the population would be *all bolts produced by the machine*.
*   **Sample:** A subset of the population from which data is collected. A sample could be *100 bolts randomly selected from a day's production*.
*   **Variable:** A characteristic of the population or sample that can vary. In this scenario, a variable would be the *diameter of a bolt*, or the *presence of a specific type of defect*.

**Answer 3:**
    a) The number of customer complaints received per day: **Quantitative (Discrete)** - You count complaints.
    b) The color of a car: **Qualitative (Nominal)** - Colors are categories without an inherent order.
    c) The time it takes for a machine to restart after a breakdown: **Quantitative (Continuous)** - Time can be measured to many decimal places.
    d) The rating of a product on a scale of 1 to 5 stars: **Qualitative (Ordinal)** - The ratings have an order, but the difference between 1 and 2 stars might not be the same as between 4 and 5 stars.
    e) The exact weight of a manufactured component: **Quantitative (Continuous)** - Weight is a measurement that can theoretically take any value within a range.

**Answer 4:**
Data: 20.1, 20.3, 19.9, 20.5, 20.2, 20.3, 20.0, 20.4, 20.2, 20.3

a) **Mean:**
   Sum = 20.1 + 20.3 + 19.9 + 20.5 + 20.2 + 20.3 + 20.0 + 20.4 + 20.2 + 20.3 = 202.5
   Mean ($\bar{x}$) = 202.5 / 10 = **20.25 mm**

b) **Median:**
   Ordered data: 19.9, 20.0, 20.1, 20.2, **20.2**, **20.3**, 20.3, 20.3, 20.4, 20.5
   Since there are 10 values (an even number), the median is the average of the 5th and 6th values.
   Median = (20.2 + 20.3) / 2 = **20.25 mm**

c) **Mode:**
   The value that appears most frequently is **20.3 mm** (appears 3 times).

d) **Range:**
   Range = Maximum Value - Minimum Value = 20.5 - 19.9 = **0.6 mm**

e) **Sample Standard Deviation:**
   *(Using a calculator or software for accuracy)*
   The sample standard deviation (s) is approximately **0.171 mm**.
   *(Manual calculation is tedious but involves calculating (xi - mean)^2 for each value, summing them up, dividing by (n-1), and taking the square root).*

**Answer 5:**
Total widgets inspected = 100

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
