---
title: "Evaluation metrics - RMSE, MAE, R²"
subject: "ALGORITHMS FOR DATA SCIENCE"
module: "Module 3: Regression Algorithms "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c79c"
status: "completed"
scrapedAt: "2026-05-20T17:00:33.049Z"
---
# ALGORITHMS FOR DATA SCIENCE - Module 3: Regression Algorithms

## Topic: Evaluation Metrics - RMSE, MAE, R²

---

### **Introduction**

In regression tasks, our goal is to predict a continuous numerical value. To understand how well our regression model is performing, we need to use evaluation metrics. These metrics quantify the difference between the **actual** (observed) values and the **predicted** (model-generated) values. This module will focus on three commonly used evaluation metrics: Root Mean Squared Error (RMSE), Mean Absolute Error (MAE), and R-squared (R²).

---

### **1. Mean Absolute Error (MAE)**

#### **Key Concept:**

MAE measures the average of the absolute differences between the predicted values and the actual values. It provides a direct interpretation of the average error magnitude.

#### **Definition:**

MAE is calculated as the mean of the absolute errors. The formula is:

$$
\text{MAE} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|
$$

Where:
*   $n$: The number of data points.
*   $y_i$: The actual (observed) value for the $i$-th data point.
*   $\hat{y}_i$: The predicted value for the $i$-th data point.
*   $|y_i - \hat{y}_i|$: The absolute error for the $i$-th data point.

#### **Interpretation:**

*   **Lower MAE is better:** A smaller MAE indicates that the model's predictions are closer to the actual values on average.
*   **Units:** MAE has the same units as the target variable, making it easy to interpret. For example, if predicting house prices in dollars, MAE will also be in dollars.
*   **Robustness to outliers:** MAE is less sensitive to extreme outliers compared to RMSE because it uses absolute differences, not squared differences.

#### **Example:**

Suppose we are predicting the number of customers visiting a store daily.

| Day | Actual Customers ($y_i$) | Predicted Customers ($\hat{y}_i$) | Absolute Error $|y_i - \hat{y}_i|$ |
| :-- | :--------------------- | :------------------------------ | :--------------------------- |
| 1   | 100                    | 105                             | 5                            |
| 2   | 120                    | 115                             | 5                            |
| 3   | 90                     | 92                              | 2                            |
| 4   | 150                    | 140                             | 10                           |
| 5   | 110                    | 118                             | 8                            |

**Calculation of MAE:**
$$
\text{MAE} = \frac{5 + 5 + 2 + 10 + 8}{5} = \frac{30}{5} = 6
$$
The MAE is 6 customers. This means, on average, the model's prediction deviates from the actual number of customers by 6.

---

### **2. Root Mean Squared Error (RMSE)**

#### **Key Concept:**

RMSE measures the standard deviation of the residuals (prediction errors). It quantifies the average magnitude of the errors, giving more weight to larger errors due to the squaring operation.

#### **Definition:**

RMSE is the square root of the mean of the squared errors. The formula is:

$$
\text{RMSE} = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}
$$

Where:
*   $n$: The number of data points.
*   $y_i$: The actual (observed) value for the $i$-th data point.
*   $\hat{y}_i$: The predicted value for the $i$-th data point.
*   $(y_i - \hat{y}_i)^2$: The squared error for the $i$-th data point.

#### **Interpretation:**

*   **Lower RMSE is better:** A smaller RMSE indicates that the model's predictions are closer to the actual values.
*   **Units:** RMSE has the same units as the target variable, making it interpretable.
*   **Sensitivity to outliers:** RMSE is more sensitive to outliers than MAE because squaring the errors amplifies the impact of large errors. A single large error can significantly increase the RMSE.
*   **Commonly used:** RMSE is one of the most widely used metrics in regression analysis.

#### **Example:**

Using the same customer prediction data as before:

| Day | Actual Customers ($y_i$) | Predicted Customers ($\hat{y}_i$) | Error ($y_i - \hat{y}_i$) | Squared Error $(y_i - \hat{y}_i)^2$ |
| :-- | :--------------------- | :------------------------------ | :------------------------ | :---------------------------------- |
| 1   | 100                    | 105                             | -5                        | 25                                  |
| 2   | 120                    | 115                             | 5                         | 25                                  |
| 3   | 90                     | 92                              | -2                        | 4                                   |
| 4   | 150                    | 140                             | 10                        | 100                                 |
| 5   | 110                    | 118                             | -8                        | 64                                  |

**Calculation of RMSE:**
$$
\text{RMSE} = \sqrt{\frac{25 + 25 + 4 + 100 + 64}{5}} = \sqrt{\frac{218}{5}} = \sqrt{43.6} \approx 6.60
$$
The RMSE is approximately 6.60 customers. Notice how the large error on Day 4 (10) contributed significantly to the RMSE due to squaring.

---

### **3. R-squared ($R^2$)**

#### **Key Concept:**

R-squared, also known as the coefficient of determination, represents the proportion of the variance in the dependent variable that is predictable from the independent variable(s). It indicates how well the regression model fits the observed data.

#### **Definition:**

$R^2$ is calculated as the ratio of the explained variance (by the regression model) to the total variance in the dependent variable. The formula is:

$$
R^2 = 1 - \frac{\text{Sum of Squared Residuals (SSR)}}{\text{Total Sum of Squares (SST)}}
$$

Where:
*   **Sum of Squared Residuals (SSR):** This is the sum of the squared differences between the actual and predicted values.
    $$
    \text{SSR} = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
    $$
    *(Note: SSR is the numerator in the RMSE calculation before taking the square root and dividing by n)*
*   **Total Sum of Squares (SST):** This is the sum of the squared differences between the actual values and the mean of the actual values. It represents the total variance in the dependent variable.
    $$
    \text{SST} = \sum_{i=1}^{n} (y_i - \bar{y})^2
    $$
    Where $\bar{y}$ is the mean of the actual values.

An alternative way to define $R^2$ is:

$$
R^2 = \frac{\text{Explained Sum of Squares (ESS)}}{\text{Total Sum of Squares (SST)}}
$$

Where **Explained Sum of Squares (ESS)** is:
$$
\text{ESS} = \sum_{i=1}^{n} (\hat{y}_i - \bar{y})^2
$$
And $SST = SSR + ESS$.

#### **Interpretation:**

*   **Range:** $R^2$ values range from 0 to 1 (or 0% to 100%).
*   **$R^2 = 1$ (or 100%):** The model explains all the variability in the dependent variable. The model fits the data perfectly.
*   **$R^2 = 0$ (or 0%):** The model explains none of the variability in the dependent variable. The independent variables have no linear relationship with the dependent variable, and the model's predictions are no better than simply predicting the mean of the dependent variable.
*   **Higher $R^2$ is generally better:** A higher $R^2$ indicates that a larger proportion of the variance in the dependent variable is explained by the model.
*   **Context-dependent:** What constitutes a "good" $R^2$ value depends heavily on the field and the problem domain. In some fields, an $R^2$ of 0.5 might be considered excellent, while in others, 0.9 or higher might be expected.
*   **Does not imply causality:** A high $R^2$ does not prove causality between the independent and dependent variables.
*   **Can be misleading with many predictors:** For multiple linear regression, adding more independent variables will always increase or keep $R^2$ the same, even if the new variables are not actually useful. This leads to the concept of Adjusted $R^2$.

#### **Example:**

Let's continue with the customer prediction data. First, calculate the mean of actual customers:
$$
\bar{y} = \frac{100 + 120 + 90 + 150 + 110}{5} = \frac{570}{5} = 114
$$

Now, calculate SST:
$$
\text{SST} = (100 - 114)^2 + (120 - 114)^2 + (90 - 114)^2 + (150 - 114)^2 + (110 - 114)^2
$$
$$
\text{SST} = (-14)^2 + (6)^2 + (-24)^2 + (36)^2 + (-4)^2
$$
$$
\text{SST} = 196 + 36 + 576 + 1296 + 16 = 2120
$$

From the RMSE calculation, we already found SSR:
$$
\text{SSR} = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 = 218
$$

Now, calculate $R^2$:
$$
R^2 = 1 - \frac{\text{SSR}}{\text{SST}} = 1 - \frac{218}{2120} \approx 1 - 0.1028 \approx 0.8972
$$

The $R^2$ is approximately 0.8972 (or 89.72%). This means that about 89.72% of the variance in the number of customers can be explained by the independent variables used in this model.

---

### **Comparing MAE, RMSE, and R²**

| Metric | Formula (Simplified)                        | Interpretation                                                                                                                                              | Sensitivity to Outliers | Units                               |
| :----- | :------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :---------------------------------- |
| **MAE**  | Average of absolute errors                  | Average magnitude of prediction error. Easier to understand.                                                                                                | Less sensitive          | Same as target variable             |
| **RMSE** | Square root of the mean of squared errors | Measures the standard deviation of residuals. Punishes larger errors more heavily. Widely used.                                                             | More sensitive          | Same as target variable             |
| **$R^2$**| $1 - \frac{\text{SSR}}{\text{SST}}$       | Proportion of variance in the target variable explained by the model. Ranges from 0 to 1. Higher is better, indicates a better fit to the data.           | Indirectly              | Unitless (percentage/proportion) |

---

### **Learning Outcomes Covered**

*   **Understanding of Regression Metrics:** This document defines and explains MAE, RMSE, and $R^2$.
*   **Calculation of Metrics:** Formulas and step-by-step examples are provided for calculating each metric.
*   **Interpretation of Metrics:** The meaning of different values for each metric and how they indicate model performance is discussed.
*   **Comparison of Metrics:** The similarities and differences, particularly regarding outlier sensitivity, are highlighted.

---

### **Important Points to Remember**

*   **Always lower is better for MAE and RMSE:** These metrics represent error, so smaller values mean better performance.
*   **Always higher is better for $R^2$:** $R^2$ represents explained variance, so values closer to 1 are better.
*   **Outliers:** Be aware that RMSE is more affected by outliers than MAE. If your data has significant outliers that you want to downplay, MAE might be a more suitable metric. If you want to penalize large errors more heavily, RMSE is preferred.
*   **Context Matters for $R^2$:** A "good" $R^2$ value is relative to the domain. Don't just aim for the highest $R^2$; consider the interpretability and robustness of your model.
*   **$R^2$ for Multiple Regression:** In multiple regression, consider **Adjusted $R^2$**, which accounts for the number of predictors in the model and can penalize the addition of irrelevant features.
*   **Metrics are not a substitute for visual inspection:** Always plot your residuals to check for patterns that might indicate model deficiencies not captured by these single-number metrics.

---

### **Practice Questions/Exercises**

**Question 1:**
A regression model predicts the price of a house. The actual prices and predicted prices for 5 houses are:

| House | Actual Price ($y_i$) | Predicted Price ($\hat{y}_i$) |
| :---- | :------------------- | :-------------------------- |
| 1     | $250,000$            | $240,000$                   |
| 2     | $300,000$            | $310,000$                   |
| 3     | $280,000$            | $275,000$                   |
| 4     | $400,000$            | $420,000$                   |
| 5     | $220,000$            | $235,000$                   |

Calculate the MAE for this model.

**Question 2:**
Using the same data as Question 1, calculate the RMSE for this model.

**Question 3:**
Consider a simple linear regression model where the predicted values are always equal to the mean of the actual values. What would the $R^2$ value be? Explain why.

**Question 4:**
You are evaluating two regression models for predicting sales:
*   Model A: MAE = 500, RMSE = 800, $R^2$ = 0.75
*   Model B: MAE = 600, RMSE = 750, $R^2$ = 0.70

Which model is generally better based on these metrics? Explain your reasoning, especially concerning the RMSE and MAE values.

---

### **Answers to Practice Questions**

**Answer 1 (MAE):**

| House | Actual Price ($y_i$) | Predicted Price ($\hat{y}_i$) | Absolute Error $|y_i - \hat{y}_i|$ |
| :---- | :------------------- | :-------------------------- | :--------------------------- |
| 1     | 250,000              | 240,000                     | 10,000                       |
| 2     | 300,000              | 310,000                     | 10,000                       |
| 3     | 280,000              | 275,000                     | 5,000                        |
| 4     | 400,000              | 420,000                     | 20,000                       |
| 5     | 220,000              | 235,000                     | 15,000                       |

$$
\text{MAE} = \frac{10,000 + 10,000 + 5,000 + 20,000 + 15,000}{5} = \frac{60,000}{5} = 12,000
$$
The MAE is $12,000.

**Answer 2 (RMSE):**

| House | Actual Price ($y_i$) | Predicted Price ($\hat{y}_i$) | Error ($y_i - \hat{y}_i$) | Squared Error $(y_i - \hat{y}_i)^2$ |
| :---- | :------------------- | :-------------------------- | :------------------------ | :---------------------------------- |
| 1     | 250,000              | 240,000                     | 10,000                    | 100,000,000                         |
| 2     | 300,000              | 310,000                     | -10,000                   | 100,000,000                         |
| 3     | 280,000              | 275,000                     | 5,000                     | 25,000,000                          |
| 4     | 400,000              | 420,000                     | -20,000                   | 400,000,000                         |
| 5     | 220,000              | 235,000                     | -15,000                   | 225,000,000                         |

Sum of Squared Errors (SSR) = 100M + 100M + 25M + 400M + 225M = 850,000,000
$$
\text{RMSE} = \sqrt{\frac{850,000,000}{5}} = \sqrt{170,000,000} \approx 13,038.4
$$
The RMSE is approximately $13,038.4.

**Answer 3 ($R^2$ when predictions equal mean):**

If the predicted values ($\hat{y}_i$) are always equal to the mean of the actual values ($\bar{y}$), then:
*   The error ($y_i - \hat{y}_i$) is equivalent to ($y_i - \bar{y}$).
*   The Sum of Squared Residuals (SSR) becomes $\sum (y_i - \bar{y})^2$, which is exactly the Total Sum of Squares (SST).

Therefore:
$$
R^2 = 1 - \frac{\text{SSR}}{\text{SST}} = 1 - \frac{\text{SST}}{\text{SST}} = 1 - 1 = 0
$$
An $R^2$ of 0 means the model explains none of the variance in the target variable. This is expected because predicting the mean is the baseline model, and this model offers no improvement over it.

**Answer 4 (Comparing Models):**

*   **Model A:** MAE = 500, RMSE = 800, $R^2$ = 0.75
*   **Model B:** MAE = 600, RMSE = 750, $R^2$ = 0.70

**Reasoning:**

*   **MAE:** Model A has a lower MAE (500 vs. 600), indicating its average prediction error is smaller.
*   **RMSE:** Model A has a higher RMSE (800 vs. 750). This suggests that Model B might have fewer or smaller large errors compared to Model A. However, Model A still has a lower MAE, implying that its overall distribution of errors is better. The RMSE being higher in Model A while MAE is lower suggests that Model A might have a few larger errors that are heavily penalized by the squaring in RMSE.
*   **$R^2$:** Model A has a higher $R^2$ (0.75 vs. 0.70), meaning it explains a larger proportion of the variance in the target variable.

**Conclusion:**

Generally, **Model A is considered better**. While Model B has a slightly lower RMSE, Model A has both a lower MAE and a higher $R^2$. The higher $R^2$ indicates a better overall fit to the data. The fact that Model A's RMSE is higher than its MAE suggests it might have some outliers, but its MAE and $R^2$ indicate that, on average, it performs better than Model B. It's crucial to also consider the context of the problem and the nature of the errors (e.g., are large errors particularly problematic?). If large errors are very undesirable, one might investigate Model A's outliers further, but based purely on these metrics, Model A is the preferred choice.
