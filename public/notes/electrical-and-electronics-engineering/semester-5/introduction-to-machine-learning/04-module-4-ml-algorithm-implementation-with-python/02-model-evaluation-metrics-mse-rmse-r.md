---
title: "Model evaluation metrics: MSE, RMSE, R²"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 4: ML algorithm implementation with python "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3643a"
status: "completed"
scrapedAt: "2026-05-23T16:22:29.129Z"
---
# Introduction to Machine Learning

## Module 4: ML Algorithm Implementation with Python

### Topic: Model Evaluation Metrics: MSE, RMSE, R²

---

### 1. Introduction to Model Evaluation

**What is Model Evaluation?**

Model evaluation is a critical step in the machine learning workflow. It involves assessing the performance of a trained model to understand how well it generalizes to unseen data. This helps us:

*   **Select the best model:** Compare different algorithms or hyperparameter settings.
*   **Understand model strengths and weaknesses:** Identify areas where the model performs well and where it struggles.
*   **Prevent overfitting and underfitting:** Ensure the model is neither too complex (overfitting) nor too simple (underfitting) for the data.

**Context:** This topic directly addresses **Course Outcome 4 (CO4)**, which emphasizes the implementation and evaluation of machine learning algorithms using relevant metrics.

---

### 2. Key Concepts and Definitions

When evaluating regression models, we are typically interested in how close the model's predicted values ($\hat{y}$) are to the actual observed values ($y$).

#### 2.1. Mean Squared Error (MSE)

*   **Definition:** MSE measures the average of the squared differences between the predicted values and the actual values. It quantifies the magnitude of errors.
*   **Formula:**
    $MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$
    Where:
    *   $n$ is the number of data points.
    *   $y_i$ is the actual value for the $i$-th data point.
    *   $\hat{y}_i$ is the predicted value for the $i$-th data point.
*   **Interpretation:**
    *   Lower MSE indicates a better fit.
    *   MSE penalizes larger errors more heavily due to the squaring term.
    *   The units of MSE are the square of the target variable's units, which can sometimes make it less intuitive to interpret directly.

**Example:**
Suppose we have the following actual ($y$) and predicted ($\hat{y}$) values:
| Data Point | Actual ($y$) | Predicted ($\hat{y}$) | Error ($y - \hat{y}$) | Squared Error ($(y - \hat{y})^2$) |
| :--------- | :----------- | :------------------- | :-------------------- | :------------------------------ |
| 1          | 10           | 12                   | -2                    | 4                               |
| 2          | 15           | 14                   | 1                     | 1                               |
| 3          | 20           | 22                   | -2                    | 4                               |

$MSE = \frac{1}{3} (4 + 1 + 4) = \frac{9}{3} = 3$

#### 2.2. Root Mean Squared Error (RMSE)

*   **Definition:** RMSE is the square root of the Mean Squared Error. It is a commonly used metric for regression problems.
*   **Formula:**
    $RMSE = \sqrt{MSE} = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}$
*   **Interpretation:**
    *   Lower RMSE indicates a better fit.
    *   RMSE is in the same units as the target variable, making it more interpretable than MSE. For example, if the target variable is in dollars, RMSE will also be in dollars.
    *   Like MSE, RMSE is sensitive to outliers because of the squaring term.

**Example (Continuing from MSE example):**
Using the MSE calculated above:
$RMSE = \sqrt{3} \approx 1.732$

**Important Point:** RMSE is generally preferred over MSE for reporting because it has the same units as the dependent variable.

#### 2.3. R-squared ($R^2$)

*   **Definition:** $R^2$, also known as the coefficient of determination, represents the proportion of the variance in the dependent variable that is predictable from the independent variables. It indicates how well the regression predictions approximate the real data points.
*   **Formula:**
    $R^2 = 1 - \frac{SSR}{SST} = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2}$
    Where:
    *   $SSR$ (Sum of Squares of Residuals) is the sum of squared differences between actual and predicted values: $\sum_{i=1}^{n} (y_i - \hat{y}_i)^2$.
    *   $SST$ (Total Sum of Squares) is the sum of squared differences between actual values and the mean of the actual values: $\sum_{i=1}^{n} (y_i - \bar{y})^2$.
    *   $\bar{y}$ is the mean of the actual values.
*   **Interpretation:**
    *   $R^2$ ranges from 0 to 1 (or 0% to 100%).
    *   An $R^2$ of 1 indicates that the model explains all the variability of the response data around its mean.
    *   An $R^2$ of 0 indicates that the model explains none of the variability of the response data around its mean.
    *   Higher $R^2$ values generally indicate a better fit, meaning the model explains a larger proportion of the variance in the target variable.
*   **Caution:** $R^2$ can be misleading. It will always increase or stay the same when you add more predictors to a model, even if they are not statistically significant. This can lead to overfitting.

**Example (Continuing from MSE example):**
Let's assume the mean of the actual values ($\bar{y}$) is 15.
$SST = (10 - 15)^2 + (15 - 15)^2 + (20 - 15)^2 = (-5)^2 + 0^2 + 5^2 = 25 + 0 + 25 = 50$
$SSR = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 = 9$ (from the MSE calculation)

$R^2 = 1 - \frac{9}{50} = 1 - 0.18 = 0.82$

This means that 82% of the variance in the target variable can be explained by the model.

**Important Point:** While a higher $R^2$ is generally desirable, it's crucial to consider it alongside other metrics and to be aware of its limitations, especially the potential for overfitting. Adjusted $R^2$ is often used to address this limitation.

---

### 3. Implementation in Python

We can easily compute these metrics using the `scikit-learn` library in Python.

**Key Libraries:**

*   `numpy`: For numerical operations.
*   `sklearn.metrics`: Contains various evaluation metrics.

```python
import numpy as np
from sklearn.metrics import mean_squared_error, r2_score

# Sample actual and predicted values
y_true = np.array([10, 15, 20])
y_pred = np.array([12, 14, 22])

# Calculate MSE
mse = mean_squared_error(y_true, y_pred)
print(f"Mean Squared Error (MSE): {mse}")

# Calculate RMSE
# Note: mean_squared_error returns MSE, so we take the square root
rmse = np.sqrt(mean_squared_error(y_true, y_pred))
# Alternatively, you can directly compute RMSE using:
# from sklearn.metrics import mean_squared_error
# rmse = mean_squared_error(y_true, y_pred, squared=False) # For scikit-learn >= 0.24

print(f"Root Mean Squared Error (RMSE): {rmse}")

# Calculate R-squared
r2 = r2_score(y_true, y_pred)
print(f"R-squared (R²): {r2}")
```

**Output of the code:**

```
Mean Squared Error (MSE): 3.0
Root Mean Squared Error (RMSE): 1.7320508100147274
R-squared (R²): 0.82
```

**Relating to Course Outcomes:**

*   **CO4:** This section demonstrates the practical implementation of calculating these metrics in Python, directly supporting the objective of implementing and evaluating ML algorithms.
*   **CO3:** The use of NumPy and scikit-learn aligns with the requirement to apply essential Python libraries for data science tasks.

---

### 4. When to Use Which Metric?

*   **MSE & RMSE:**
    *   When you want to penalize larger errors more heavily.
    *   When the errors are normally distributed.
    *   When you need a metric that is in the same units as the target variable (RMSE).
    *   **Important for:** Regression tasks like predicting house prices, stock values, or temperature.
*   **R²:**
    *   When you want to understand the proportion of variance explained by your model.
    *   As a measure of how well the model fits the data compared to a simple average.
    *   **Useful for:** Comparing the performance of different regression models on the same dataset.

**Reference from Textbooks:**

*   **"Introduction to Machine Learning with Python" by Müller and Guido:** Chapter 3 discusses regression models and their evaluation, highlighting the importance of metrics like MSE and R².
*   **"Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Géron:** Chapter 4 on Decision Trees and Ensemble Learning often uses these metrics for evaluating regression performance.
*   **"Python Data Science Handbook" by Vander Plas:** Chapter 5 on Machine Learning covers model evaluation in detail, including the interpretation of these common regression metrics.

---

### 5. Practice Questions and Exercises

**Question 1:**
You have a regression model that predicts house prices. The actual prices ($y$) and predicted prices ($\hat{y}$) for five houses are:

Actual Prices ($y$): `[200000, 350000, 280000, 500000, 420000]`
Predicted Prices ($\hat{y}$): `[210000, 330000, 290000, 480000, 430000]`

Calculate the MSE and RMSE for this model.

**Answer 1:**
Let's calculate the errors and squared errors:
| House | Actual ($y$) | Predicted ($\hat{y}$) | Error ($y - \hat{y}$) | Squared Error ($(y - \hat{y})^2$) |
| :---- | :----------- | :------------------- | :-------------------- | :------------------------------ |
| 1     | 200000       | 210000               | -10000                | 100,000,000                     |
| 2     | 350000       | 330000               | 20000                 | 400,000,000                     |
| 3     | 280000       | 290000               | -10000                | 100,000,000                     |
| 4     | 500000       | 480000               | 20000                 | 400,000,000                     |
| 5     | 420000       | 430000               | -10000                | 100,000,000                     |

Sum of Squared Errors = 100M + 400M + 100M + 400M + 100M = 1,100,000,000

MSE = $\frac{1,100,000,000}{5} = 220,000,000$
RMSE = $\sqrt{220,000,000} \approx 14832.4$

**Python Implementation for Answer 1:**
```python
import numpy as np
from sklearn.metrics import mean_squared_error

y_true = np.array([200000, 350000, 280000, 500000, 420000])
y_pred = np.array([210000, 330000, 290000, 480000, 430000])

mse = mean_squared_error(y_true, y_pred)
rmse = np.sqrt(mse) # or mean_squared_error(y_true, y_pred, squared=False)

print(f"MSE: {mse}")
print(f"RMSE: {rmse}")
```
**Output:**
```
MSE: 220000000.0
RMSE: 14832.396974191332
```

**Question 2:**
Consider the following results for two regression models (Model A and Model B) on the same dataset:

*   **Model A:** MSE = 50, R² = 0.75
*   **Model B:** MSE = 30, R² = 0.80

Which model is generally better and why?

**Answer 2:**
Model B is generally better.

*   **Lower MSE:** Model B has a lower MSE (30 vs. 50), indicating that its predictions are, on average, closer to the actual values.
*   **Higher R²:** Model B has a higher R² (0.80 vs. 0.75), meaning it explains a larger proportion of the variance in the target variable.

**Important Point:** While Model B shows better performance across both metrics, it's crucial to remember that R² can increase with more features, potentially leading to overfitting. However, in this direct comparison where other factors are assumed equal, Model B is the preferred choice.

---

### 6. Important Points to Remember

*   **Metric Choice Matters:** Select evaluation metrics that align with the specific problem and the business objective.
*   **Units of Measurement:** MSE is in squared units, while RMSE and R² are more interpretable in the original units or as a proportion.
*   **Sensitivity to Outliers:** MSE and RMSE are sensitive to outliers due to the squaring operation.
*   **R² Limitations:** Be cautious of R² alone; it can be misleading if the model is overfitted or if many features are added. Consider Adjusted R² for a more robust measure when comparing models with different numbers of predictors.
*   **Training vs. Test Data:** Always evaluate your model on unseen test data to get a realistic estimate of its performance. Evaluation on training data can lead to an overly optimistic assessment.
*   **Context is Key:** The "best" metric value depends on the domain and the specific problem. A "good" MSE for one problem might be poor for another.

---

### 7. Connecting to Course Outcomes

*   **CO1 (Understanding Variables & Hypothesis Testing):** While not directly computing t-tests or F-tests, understanding the distribution of errors (implied by MSE/RMSE) relates to statistical assumptions of many regression models.
*   **CO2 (Applying Algorithms):** These metrics are fundamental for evaluating the success of supervised regression algorithms (e.g., Linear Regression, Decision Trees for regression).
*   **CO3 (Python Libraries):** This module explicitly uses `numpy` and `sklearn.metrics` for implementing these evaluations, reinforcing the use of essential libraries.
*   **CO4 (Implementing & Evaluating Algorithms):** This topic is the core of evaluating regression algorithms. By understanding and applying MSE, RMSE, and R², students fulfill the requirement to evaluate model performance.

---

### 8. Further Exploration (Beyond this Topic)

*   **Adjusted R²:** A modification of $R^2$ that accounts for the number of predictors in the model.
*   **Mean Absolute Error (MAE):** Measures the average magnitude of errors without squaring them, making it less sensitive to outliers.
*   **Cross-validation:** A technique to get a more robust estimate of model performance by training and evaluating on different subsets of the data.
*   **Other Regression Metrics:** Mean Absolute Percentage Error (MAPE), Explained Variance Score.

This concludes the study notes for Model Evaluation Metrics (MSE, RMSE, R²) within Module 4. Understanding these metrics is crucial for building and selecting effective regression models.
