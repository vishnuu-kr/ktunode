---
title: "Association of Two Variables:-"
subject: "DATA ANALYTICS"
module: "Module 2: Association of Two Variables:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b70a"
status: "completed"
scrapedAt: "2026-05-20T16:43:45.150Z"
---
# DATA ANALYTICS - Module 2: Association of Two Variables

## Topic: Association of Two Variables

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Define association between two variables.
*   Identify different types of associations (positive, negative, no association).
*   Understand and calculate covariance and correlation.
*   Interpret the strength and direction of association based on correlation coefficient.
*   Distinguish between correlation and causation.
*   Apply appropriate visualization techniques (scatter plots) to examine the association between two variables.
*   Understand the limitations of correlation analysis.

---

### 1. Defining Association Between Two Variables

*   **Definition:** Association between two variables refers to a statistical relationship where the values of one variable are related to the values of another.  This means knowing the value of one variable gives us some information about the likely value of the other variable.  It *does not* necessarily imply that one variable *causes* the other.

*   **Key Concepts:**
    *   **Variables:**  Measurable characteristics that can take on different values.
    *   **Independent Variable (Predictor):**  The variable believed to influence or predict the other variable.
    *   **Dependent Variable (Response):** The variable that is being influenced or predicted.
    *   **Statistical Significance:**  The likelihood that an association is not due to chance.

---

### 2. Types of Associations

*   **Positive Association:** As one variable increases, the other variable tends to increase as well.  The variables move in the same direction.

    *   **Example:** Height and Weight.  Generally, taller people tend to weigh more.
*   **Negative Association:** As one variable increases, the other variable tends to decrease. The variables move in opposite directions.

    *   **Example:** Temperature and Heating Bill. As the outside temperature rises, heating bills typically decrease.
*   **No Association:**  There is no discernable pattern or relationship between the two variables.  Changes in one variable do not provide any information about changes in the other.

    *   **Example:** Shoe size and IQ (generally).

---

### 3. Covariance

*   **Definition:** Covariance is a measure of how much two variables change together.  It indicates whether the two variables tend to increase or decrease together.

*   **Formula (Sample Covariance):**

    ```
    cov(x, y) = Σ [(xi - x̄) * (yi - ȳ)] / (n - 1)
    ```

    Where:
    *   `xi` is the value of the i-th observation of variable x
    *   `yi` is the value of the i-th observation of variable y
    *   `x̄` is the mean of variable x
    *   `ȳ` is the mean of variable y
    *   `n` is the number of observations

*   **Interpretation:**

    *   **Positive Covariance:** Indicates a positive association (both variables tend to increase or decrease together).
    *   **Negative Covariance:** Indicates a negative association (as one variable increases, the other tends to decrease).
    *   **Covariance of Zero:** Indicates no linear association.

*   **Limitations:**
    *   The magnitude of covariance is difficult to interpret without context. A large covariance might indicate a strong relationship, but it could also be due to the scale of the variables.  It's not standardized.

---

### 4. Correlation (Pearson Correlation Coefficient)

*   **Definition:** Correlation is a standardized measure of the linear relationship between two variables. It provides a value between -1 and +1, making it easier to interpret than covariance.  It's a scaled version of covariance.

*   **Formula (Pearson Correlation Coefficient):**

    ```
    r = cov(x, y) / (sx * sy)
    ```

    Where:
    *   `cov(x, y)` is the covariance between x and y
    *   `sx` is the standard deviation of x
    *   `sy` is the standard deviation of y

*   **Interpretation:**

    *   **+1:** Perfect positive correlation.  As one variable increases, the other increases proportionally.
    *   **-1:** Perfect negative correlation. As one variable increases, the other decreases proportionally.
    *   **0:** No linear correlation.
    *   **Values between -1 and +1:** Indicate the strength and direction of the linear relationship.  Generally, the closer the absolute value of `r` is to 1, the stronger the relationship.

    *   **Rule of Thumb (Cohen's Guidelines):**
        *   |r| < 0.3: Weak correlation
        *   0.3 ≤ |r| < 0.5: Moderate correlation
        *   |r| ≥ 0.5: Strong correlation

*   **Advantages:**
    *   Standardized scale makes it easier to compare relationships across different datasets.

*   **Limitations:**
    *   Only measures *linear* relationships.  Variables can be associated non-linearly (e.g., a curved relationship), and correlation will be close to zero.
    *   Sensitive to outliers, which can drastically affect the correlation coefficient.
    *   Does not imply causation.

---

### 5. Correlation vs. Causation

*   **Correlation does NOT imply causation.**  Just because two variables are associated does not mean that one causes the other.  There could be a third, unobserved variable (a confounding variable) that is influencing both.

*   **Example:** Ice cream sales and crime rates are often positively correlated.  However, eating ice cream does not cause crime.  Instead, both tend to increase during warmer months.  The confounding variable is temperature.

*   **To establish causation:**
    *   **Experimental Designs:**  Randomly assigning subjects to different groups and manipulating the independent variable. This is the gold standard for establishing causality.
    *   **Longitudinal Studies:**  Observing the same subjects over a long period.
    *   **Controlling for Confounding Variables:** Using statistical techniques to account for the influence of other variables.

---

### 6. Visualization Techniques: Scatter Plots

*   **Scatter Plots:**  A graphical representation of the relationship between two variables.  Each point on the plot represents a single observation, with the x-coordinate representing the value of one variable and the y-coordinate representing the value of the other variable.

*   **How to interpret a Scatter Plot:**

    *   **Direction:**  Determine if the points tend to slope upwards (positive association) or downwards (negative association).
    *   **Strength:** How closely the points cluster around a line. A tighter cluster indicates a stronger association.
    *   **Form:**  Is the relationship linear or non-linear (e.g., curved)?
    *   **Outliers:** Identify any points that deviate significantly from the overall pattern.

*   **Example:** Plotting advertising spending (x-axis) against sales revenue (y-axis) can reveal whether there is a positive association between them.

---

### 7. Limitations of Correlation Analysis

*   **Non-Linear Relationships:** Correlation only measures linear relationships. It will not detect curved or other non-linear associations.
*   **Outliers:**  Outliers can have a disproportionate impact on the correlation coefficient.
*   **Heterogeneous Subgroups:** The overall correlation might be misleading if the data consists of subgroups with different relationships.
*   **Spurious Correlations:** Correlations that appear to be significant but are due to chance or confounding variables.  Example:  Number of Nicolas Cage movies released and number of people drowning in swimming pools.
*   **Ecological Fallacy:** Inferring individual-level relationships from group-level data (or vice versa).
*   **It Does Not Imply Causation:**  This point is crucial and bears repeating.

---

### Practice Questions and Exercises

**Question 1:**

Two variables, 'Age' and 'Blood Pressure', have a Pearson correlation coefficient of 0.6. Interpret this result.

**Answer:**

This indicates a moderate positive correlation between age and blood pressure. As age increases, blood pressure tends to increase as well. However, it does not prove that age causes higher blood pressure; other factors might be involved. The relationship is of moderate strength.

**Question 2:**

Calculate the covariance and correlation for the following dataset:

| X | Y |
|---|---|
| 1 | 2 |
| 2 | 4 |
| 3 | 5 |
| 4 | 4 |
| 5 | 5 |

**Answer:**

1.  **Calculate the means:**
    *   x̄ = (1+2+3+4+5) / 5 = 3
    *   ȳ = (2+4+5+4+5) / 5 = 4

2.  **Calculate the covariance:**
    *   cov(x, y) = [ (1-3)(2-4) + (2-3)(4-4) + (3-3)(5-4) + (4-3)(4-4) + (5-3)(5-4) ] / (5-1)
    *   cov(x, y) = [ (-2)(-2) + (-1)(0) + (0)(1) + (1)(0) + (2)(1) ] / 4
    *   cov(x, y) = (4 + 0 + 0 + 0 + 2) / 4 = 6/4 = 1.5

3.  **Calculate the standard deviations:**
    *   sx = sqrt([ (1-3)^2 + (2-3)^2 + (3-3)^2 + (4-3)^2 + (5-3)^2 ] / (5-1)) = sqrt( (4+1+0+1+4)/4) = sqrt(10/4) = sqrt(2.5) ≈ 1.58
    *   sy = sqrt([ (2-4)^2 + (4-4)^2 + (5-4)^2 + (4-4)^2 + (5-4)^2 ] / (5-1)) = sqrt( (4+0+1+0+1)/4) = sqrt(6/4) = sqrt(1.5) ≈ 1.22

4.  **Calculate the correlation:**
    *   r = cov(x, y) / (sx * sy) = 1.5 / (1.58 * 1.22) ≈ 1.5 / 1.93 ≈ 0.78

Therefore, the covariance is 1.5, and the correlation is approximately 0.78. This indicates a strong positive correlation.

**Question 3:**

Describe a scenario where two variables are correlated, but there is no causal relationship.

**Answer:**

A classic example is the correlation between the number of fire trucks at a fire and the amount of damage caused by the fire. These two variables are often positively correlated. However, sending more fire trucks doesn't *cause* more damage. Instead, the *size of the fire* is the confounding variable. Larger fires require more fire trucks and also cause more damage.

**Question 4:**

What are the limitations of using correlation analysis to determine if one variable causes another?

**Answer:**

Correlation does not imply causation because:

*   **Spurious Correlations:** Two variables might be correlated by chance or because of a third, unobserved variable (confounding variable).
*   **Reverse Causation:**  It might be that Y causes X, instead of X causing Y.
*   **Third Variable Problem:** A third variable (Z) might be causing both X and Y, leading to a correlation between them even though they are not directly causally related.
*   **Complexity of Causal Relationships:** Real-world phenomena are often complex and involve multiple interacting factors. A simple correlation analysis is often insufficient to capture these complexities.

---

### Important Points to Remember:

*   Association doesn't equal causation.
*   Correlation measures the *linear* relationship.  Always visualize the data with a scatter plot to check for non-linear relationships.
*   Be aware of outliers and their potential impact on correlation.
*   Correlation is a valuable tool, but it should be used cautiously and in conjunction with other methods to understand relationships between variables.
*   Consider the context of the data when interpreting correlation results.
