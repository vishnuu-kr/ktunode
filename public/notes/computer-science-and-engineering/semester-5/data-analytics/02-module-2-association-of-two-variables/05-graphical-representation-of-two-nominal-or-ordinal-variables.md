---
title: "Graphical Representation of Two Nominal or Ordinal Variables"
subject: "DATA ANALYTICS"
module: "Module 2: Association of Two Variables:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b70e"
status: "completed"
scrapedAt: "2026-05-20T16:43:51.261Z"
---
## DATA ANALYTICS - Module 2: Association of Two Variables

### Topic: Graphical Representation of Two Nominal or Ordinal Variables

**Description:** This topic covers the graphical methods used to explore and visualize the association between two nominal or ordinal variables.

**Learning Outcomes:**

*   Understand the types of variables (nominal and ordinal).
*   Learn and apply appropriate graphical methods for visualizing the relationship between two nominal or ordinal variables.
*   Interpret the patterns and associations revealed by these graphical methods.
*   Identify limitations of each method.

---

**1. Types of Variables: Nominal and Ordinal**

*   **Nominal Variables:**
    *   Definition: Categorical variables where the categories have no inherent order or ranking.
    *   Examples: Eye color (blue, brown, green), gender (male, female, other), type of car (sedan, SUV, truck).
    *   Mathematical Operations: Only equality comparisons (=, ≠) are meaningful.
*   **Ordinal Variables:**
    *   Definition: Categorical variables where the categories have a natural order or ranking. The intervals between the categories might not be equal or defined.
    *   Examples: Education level (high school, bachelor's, master's, doctorate), satisfaction rating (very dissatisfied, dissatisfied, neutral, satisfied, very satisfied), socioeconomic status (low, middle, high).
    *   Mathematical Operations: Order comparisons (<, >) are meaningful in addition to equality comparisons.  Arithmetic operations (addition, subtraction) are generally not meaningful.

**Key Concept:** The level of measurement (nominal, ordinal) dictates the appropriate statistical and graphical methods that can be used.

---

**2. Graphical Methods for Two Nominal or Ordinal Variables**

*   **2.1. Contingency Table (Cross-Tabulation)**

    *   Definition: A table that displays the frequency distribution of two or more categorical variables. It summarizes the relationship between these variables.
    *   Structure: Rows represent categories of one variable, columns represent categories of the other variable, and each cell contains the frequency count of observations falling into that specific combination of categories.
    *   **Example:**

        |                   | Voted (Yes) | Voted (No) | Total |
        | ----------------- | ----------- | ---------- | ----- |
        | Gender (Male)     | 150         | 50         | 200   |
        | Gender (Female)   | 200         | 100        | 300   |
        | **Total**         | **350**     | **150**    | **500** |

    *   Analysis: Contingency tables are the foundation for calculating percentages, proportions, and performing statistical tests like the Chi-Square test for independence.
    *   **Key Concept:** Helps understand the joint distribution of two variables.

*   **2.2. Stacked Bar Chart**

    *   Definition: A bar chart where each bar represents the total for one categorical variable, and the bar is divided into segments representing the proportion of each category of the second categorical variable.
    *   Types:
        *   **Simple Stacked Bar Chart:** Shows the absolute counts for each combination of categories.
        *   **Percentage Stacked Bar Chart:** Shows the percentage of each category of the second variable within each category of the first variable.  This is useful for comparing groups of unequal sizes.
    *   **Example:** Imagine a stacked bar chart showing "Customer Satisfaction" (very satisfied, satisfied, neutral, dissatisfied, very dissatisfied) for different "Product Types" (A, B, C). Each product type would have a bar, and each bar is segmented by the satisfaction levels.  A percentage stacked bar chart would show the percentage of each satisfaction level *within* each product type.
    *   Analysis: Useful for visualizing the relative proportions of different categories within each group.
    *   **Key Concept:** Emphasizes proportions and is helpful for comparing across groups with varying sizes.

*   **2.3. Grouped Bar Chart (Clustered Bar Chart)**

    *   Definition: A bar chart that displays bars for each category of one variable, with separate bars within each category for each level of the other variable.
    *   Structure: Bars are grouped or clustered together, allowing for easy comparison of counts for each level of the second variable within each level of the first variable.
    *   **Example:** Similar to the stacked bar chart example, a grouped bar chart would show bars for each satisfaction level (very satisfied, satisfied, neutral, dissatisfied, very dissatisfied), and these bars would be grouped by product type (A, B, C).
    *   Analysis: Useful for comparing absolute counts across different categories.
    *   **Key Concept:** Easier to directly compare the absolute numbers or counts between the categories.

*   **2.4. Mosaic Plot**

    *   Definition: A graphical representation of a contingency table where the area of each rectangle is proportional to the cell frequency.
    *   Structure:  The width of each column is proportional to the marginal frequency of the row variable, and the height of each rectangle within a column is proportional to the conditional frequency of the column variable given the row variable.
    *   **Example:** Visualizing the relationship between "Smoking Status" (smoker, non-smoker) and "Lung Cancer Diagnosis" (yes, no). The width of the columns would represent the proportion of smokers and non-smokers in the dataset, and the height of the rectangles within each column would represent the proportion of lung cancer cases (yes/no) within each smoking status group.
    *   Analysis: Shows both the marginal distribution of one variable and the conditional distribution of the other variable, making it easy to identify deviations from independence.
    *   **Key Concept:** Effectively visualizes the proportions and relationships within a contingency table using areas. Reveals the strength of association intuitively.

**3. Interpreting Graphical Representations**

*   **Identifying Patterns:** Look for patterns such as higher or lower frequencies/proportions in certain combinations of categories.  Are certain levels of one variable consistently associated with specific levels of the other?
*   **Assessing Association:** Do the graphical displays suggest an association between the variables?  Are the distributions of one variable different across different levels of the other variable?
*   **Causation vs. Association:** Remember that graphical representations can only demonstrate association, not causation. Further investigation is needed to establish causal relationships.
*   **Consider Confounding Variables:** Be aware that a third variable (a confounder) could be influencing the observed association.

**4. Limitations of Graphical Methods**

*   **Oversimplification:** Graphical methods can sometimes oversimplify complex relationships and mask subtle nuances.
*   **Subjectivity:** Interpretation of graphical displays can be subjective and influenced by personal biases.
*   **Limited to Two Variables (Primarily):** These methods are primarily suited for visualizing the relationship between two variables at a time. Analyzing relationships involving multiple variables requires more advanced techniques.
*   **Sample Size Sensitivity:** Small sample sizes can lead to unstable and misleading graphical representations.

**5. Important Points to Remember**

*   Choose the appropriate graphical method based on the type of variables (nominal or ordinal) and the research question.
*   Clearly label axes and provide informative titles.
*   Use color strategically to enhance visualization.
*   Interpret graphical displays cautiously and consider potential limitations.
*   Always back up graphical findings with statistical analysis (e.g., Chi-Square test).

---

**Practice Questions/Exercises**

1.  **Scenario:** You are analyzing customer feedback data. You have two variables: "Product Category" (Electronics, Clothing, Books) and "Customer Satisfaction" (Very Satisfied, Satisfied, Neutral, Dissatisfied, Very Dissatisfied).

    a.  What type of variables are "Product Category" and "Customer Satisfaction"?

    b.  Which graphical method(s) would be most appropriate to visualize the relationship between these two variables? Justify your answer.

    c.  Describe how you would interpret a stacked percentage bar chart showing the relationship between "Product Category" and "Customer Satisfaction." What patterns would you look for?

2.  **Contingency Table Exercise:** The following table shows the relationship between "Smoking Status" and "Heart Disease."

    |                   | Heart Disease (Yes) | Heart Disease (No) | Total |
    | ----------------- | ------------------- | ------------------ | ----- |
    | Smoker (Yes)      | 80                  | 120                | 200   |
    | Smoker (No)       | 30                  | 270                | 300   |
    | **Total**         | **110**             | **390**            | **500** |

    a.  Calculate the percentage of smokers who have heart disease.

    b.  Calculate the percentage of non-smokers who have heart disease.

    c.  Based on these percentages, does there appear to be an association between smoking and heart disease?

    d.  Which graphical method would best visualize the above information?

3.  **True or False:** A mosaic plot can only be used for nominal variables. Justify your answer.

---

**Answers to Practice Questions/Exercises**

1.  a.  "Product Category" is a nominal variable. "Customer Satisfaction" is an ordinal variable.

    b.  Appropriate graphical methods include:

        *   **Contingency Table:**  Provides the raw counts.
        *   **Stacked (Percentage) Bar Chart:** Effective for visualizing the proportion of each satisfaction level within each product category, making it easier to compare across product categories. A *percentage* stacked bar chart is better if the number of customers rating each category is different.
        *   **Grouped Bar Chart:** Allows for direct comparison of the number of customers in each satisfaction level across different product categories.
        *   **Mosaic Plot:** Useful in displaying the association where the area corresponds to the counts within each combination.
    c.  In a stacked percentage bar chart, you would look for patterns such as:

        *   Higher percentages of "Very Satisfied" customers for one product category compared to others.
        *   Higher percentages of "Dissatisfied" or "Very Dissatisfied" customers for a specific product category.
        *   A relatively uniform distribution of satisfaction levels across all product categories (suggesting no strong association).

2.  a.  (80 / 200) * 100 = 40%

    b.  (30 / 300) * 100 = 10%

    c.  Yes, there appears to be a strong association between smoking and heart disease. The percentage of smokers with heart disease (40%) is significantly higher than the percentage of non-smokers with heart disease (10%).

    d. A mosaic plot, stacked percentage bar chart, or grouped bar chart could effectively visualize this information.

3.  **False.** Mosaic plots are particularly effective for displaying the association between *categorical* variables, including both nominal and ordinal variables.
